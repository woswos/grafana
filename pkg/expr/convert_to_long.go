package expr

import (
	"fmt"
	"sort"
	"time"

	"github.com/grafana/grafana-plugin-sdk-go/data"
)

func ConvertToLong(frames data.Frames) (data.Frames, error) {
	if len(frames) == 0 {
		// general empty case for now
		return frames, nil
	}
	// Four Conversion Possible Cases
	// 1. NumericMulti -> NumericLong
	// 2. NumericWide -> NumericLong
	// 3. TimeSeriesMulti -> TimeSeriesLong
	// 4. TimeSeriesWide -> TimeSeriesLong

	// Detect if input type is declared
	// First Check Frame Meta Type

	var inputType data.FrameType
	if frames[0].Meta != nil && frames[0].Meta.Type != "" {
		inputType = frames[0].Meta.Type
	}
	if inputType != "" && !supportedToLongConversion(inputType) {
		return frames, fmt.Errorf("unsupported input type %s for SQL expression", inputType)
	}

	// TODO: Add some guessing of Type if not declared

	if inputType == "" {
		return frames, fmt.Errorf("could not determine input type")
	}

	convert := getToLongConversionFunc(inputType)
	if convert == nil {
		return frames, fmt.Errorf("could not get conversion function for input type %s", inputType)
	}

	return convert(frames)
}

func convertNumericMultiToNumericLong(frames data.Frames) (data.Frames, error) {
	// Apart from metadata. NumericMulti is basically numeric Wide, except one frame per thing
	// to we collapse into one frame and call the wide conversion
	newFrame := data.NewFrame("")
	for _, frame := range frames {
		for _, field := range frame.Fields {
			if !field.Type().Numeric() {
				continue
			}
			newField := data.NewFieldFromFieldType(field.Type(), field.Len())
			newField.Name = field.Name
			newField.Labels = field.Labels.Copy()
			for i := 0; i < field.Len(); i++ {
				newField.Set(i, field.CopyAt(i))
			}
			newFrame.Fields = append(newFrame.Fields, newField)
		}
	}
	return convertNumericWideToNumericLong(data.Frames{newFrame})
}

func convertNumericWideToNumericLong(frames data.Frames) (data.Frames, error) {
	// Wide should only be one frame
	if len(frames) != 1 {
		return nil, fmt.Errorf("expected exactly one frame for wide format, but got %d", len(frames))
	}
	inputFrame := frames[0]

	// The Frame should have no more than one row
	if inputFrame.Rows() > 1 {
		return nil, fmt.Errorf("expected no more than one row in the frame, but got %d", inputFrame.Rows())
	}

	// Gather Unique Label Keys from each numeric, and unique numeric field names,
	// each one maps to a field in the output long Frame.
	uniqueNames := make([]string, 0)
	uniqueKeys := make([]string, 0)

	uniqueNamesMap := make(map[string]data.FieldType)
	uniqueKeysMap := make(map[string]struct{})

	prints := make(map[string]int)

	registerPrint := func(labels data.Labels) {
		fp := labels.Fingerprint().String()
		if _, ok := prints[fp]; !ok {
			prints[fp] = len(prints)
		}
	}

	for _, field := range inputFrame.Fields {
		if field.Type().Numeric() {
			if _, ok := uniqueNamesMap[field.Name]; !ok {
				uniqueNames = append(uniqueNames, field.Name)
			}
			uniqueNamesMap[field.Name] = field.Type()

			if field.Labels != nil {
				for key := range field.Labels {
					if _, ok := uniqueKeysMap[key]; !ok {
						uniqueKeys = append(uniqueKeys, key)
					}
					uniqueKeysMap[key] = struct{}{}
					registerPrint(field.Labels)
				}
			}
		}
	}

	// Create new fields for output Long frame
	fields := make([]*data.Field, 0, len(uniqueNames)+len(uniqueKeys))

	// Create the Numeric Fields, tracking the index of each field by name
	// Note: May want to use FloatAt and and prepopulate with NaN so missing
	// combinations of value can be NA instead of the zero value of 0.
	var nameIndexMap = make(map[string]int, len(uniqueNames))
	for i, name := range uniqueNames {
		field := data.NewFieldFromFieldType(uniqueNamesMap[name], len(prints))
		field.Name = name
		fields = append(fields, field)
		nameIndexMap[name] = i
	}

	// Create the String field, tracking the index of each field by key
	var keyIndexMap = make(map[string]int, len(uniqueKeys))
	for i, k := range uniqueKeys {
		fields = append(fields, data.NewField(k, nil, make([]string, len(prints))))
		keyIndexMap[k] = len(nameIndexMap) + i
	}

	longFrame := data.NewFrame("", fields...)

	if inputFrame.Rows() == 0 {
		return data.Frames{longFrame}, nil
	}

	// Add Rows to the fields
	for _, field := range inputFrame.Fields {
		if !field.Type().Numeric() {
			continue
		}
		rowIdx := prints[field.Labels.Fingerprint().String()]
		longFrame.Fields[nameIndexMap[field.Name]].Set(rowIdx, field.CopyAt(0))
		for key, value := range field.Labels {
			longFrame.Fields[keyIndexMap[key]].Set(rowIdx, value)
		}
	}

	// Create new Frame
	return data.Frames{longFrame}, nil

}

func convertTimeSeriesMultiToTimeSeriesLong(frames data.Frames) (data.Frames, error) {
	// Collect all time values and ensure no duplicates
	timeSet := make(map[time.Time]struct{})
	labelKeys := make(map[string]struct{})     // Collect all unique label keys
	numericFields := make(map[string]struct{}) // Collect unique numeric field names

	for _, frame := range frames {
		for _, field := range frame.Fields {
			if field.Type() == data.FieldTypeTime {
				for i := 0; i < field.Len(); i++ {
					t := field.At(i).(time.Time)
					timeSet[t] = struct{}{}
				}
			} else if field.Type().Numeric() {
				numericFields[field.Name] = struct{}{}
				if field.Labels != nil {
					for key := range field.Labels {
						labelKeys[key] = struct{}{}
					}
				}
			}
		}
	}

	// Create a sorted slice of unique time values
	times := make([]time.Time, 0, len(timeSet))
	for t := range timeSet {
		times = append(times, t)
	}
	sort.Slice(times, func(i, j int) bool { return times[i].Before(times[j]) })

	// Create output fields: Time, one numeric field per unique numeric name, and label fields
	timeField := data.NewField("Time", nil, times)
	outputNumericFields := make(map[string]*data.Field)
	for name := range numericFields {
		outputNumericFields[name] = data.NewField(name, nil, make([]float64, len(times)))
	}
	outputLabelFields := make(map[string]*data.Field)
	for key := range labelKeys {
		outputLabelFields[key] = data.NewField(key, nil, make([]string, len(times)))
	}

	// Map time to index for quick lookup
	timeIndexMap := make(map[time.Time]int, len(times))
	for i, t := range times {
		timeIndexMap[t] = i
	}

	// Populate output fields
	for _, frame := range frames {
		var timeField *data.Field
		for _, field := range frame.Fields {
			if field.Type() == data.FieldTypeTime {
				timeField = field
				break
			}
		}

		if timeField == nil {
			return nil, fmt.Errorf("no time field found in frame")
		}

		for _, field := range frame.Fields {
			if field.Type().Numeric() {
				for i := 0; i < field.Len(); i++ {
					t := timeField.At(i).(time.Time)
					val, err := field.FloatAt(i)
					if err != nil {
						val = 0 // Default value for missing data
					}
					idx := timeIndexMap[t]
					if outputField, exists := outputNumericFields[field.Name]; exists {
						outputField.Set(idx, val)
					}

					// Add labels for the numeric field
					for key, value := range field.Labels {
						if outputField, exists := outputLabelFields[key]; exists {
							outputField.Set(idx, value)
						}
					}
				}
			}
		}
	}

	// Build the output frame
	outputFields := []*data.Field{timeField}
	for _, field := range outputNumericFields {
		outputFields = append(outputFields, field)
	}
	for _, field := range outputLabelFields {
		outputFields = append(outputFields, field)
	}
	outputFrame := data.NewFrame("time_series_long", outputFields...)

	// Set metadata
	if outputFrame.Meta == nil {
		outputFrame.Meta = &data.FrameMeta{}
	}
	outputFrame.Meta.Type = data.FrameTypeTimeSeriesLong

	return data.Frames{outputFrame}, nil
}

func convertTimeSeriesWideToTimeSeriesLong(frames data.Frames) (data.Frames, error) {
	// Wide should only be one frame
	if len(frames) != 1 {
		return nil, fmt.Errorf("expected exactly one frame for wide format, but got %d", len(frames))
	}
	inputFrame := frames[0]
	longFrame, err := data.WideToLong(inputFrame)
	if err != nil {
		return nil, fmt.Errorf("failed to convert wide time series to long timeseries for sql expression: %w", err)
	}
	return data.Frames{longFrame}, nil
}

func getToLongConversionFunc(inputType data.FrameType) func(data.Frames) (data.Frames, error) {
	switch inputType {
	case data.FrameTypeNumericMulti:
		return convertNumericMultiToNumericLong
	case data.FrameTypeNumericWide:
		return convertNumericWideToNumericLong
	case data.FrameTypeTimeSeriesMulti:
		return convertTimeSeriesMultiToTimeSeriesLong
	case data.FrameTypeTimeSeriesWide:
		return convertTimeSeriesWideToTimeSeriesLong
	}
	return nil
}

func supportedToLongConversion(inputType data.FrameType) bool {
	switch inputType {
	case data.FrameTypeNumericMulti:
		return true
	case data.FrameTypeNumericWide:
		return true
	case data.FrameTypeTimeSeriesMulti:
		return true
	case data.FrameTypeTimeSeriesWide:
		return true
	}
	return false
}
