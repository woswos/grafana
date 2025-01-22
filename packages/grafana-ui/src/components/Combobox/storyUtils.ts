import { ComboboxOption } from './Combobox';

let fakeApiOptions: Array<ComboboxOption<string>>;
export async function fakeSearchAPI(urlString: string): Promise<Array<ComboboxOption<string>>> {
  const searchParams = new URL(urlString).searchParams;

  if (!fakeApiOptions) {
    fakeApiOptions = await generateOptions(1000);
  }

  const searchQuery = searchParams.get('query')?.toLowerCase();

  if (!searchQuery || searchQuery.length === 0) {
    return Promise.resolve(fakeApiOptions.slice(0, 10));
  }

  const filteredOptions = Promise.resolve(
    fakeApiOptions.filter((opt) => opt.label?.toLowerCase().includes(searchQuery))
  );

  const delay = searchQuery.length % 2 === 0 ? 200 : 1000;

  return new Promise<Array<ComboboxOption<string>>>((resolve) => {
    setTimeout(() => resolve(filteredOptions), delay);
  });
}

export async function generateOptions(amount: number): Promise<ComboboxOption[]> {
  return Array.from({ length: amount }, (_, index) => ({
    label: 'Option ' + index,
    value: index.toString(),
  }));
}
