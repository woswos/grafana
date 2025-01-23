"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8373],{31099:(he,q,s)=>{s.d(q,{A:()=>h});var e=s(74848),n=s(32196),L=s(1932),m=s(96540),R=s(49785),N=s(42941),T=s(40845),M=s(67061),W=s(94753),S=s(10354),$=s(21744),G=s(88575),O=s(55852),H=s(8484),c=s(55740);const b=({field:t})=>{const a=(0,T.of)(x);return(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:a.annotationTitle,children:"Custom annotation name and content"}),(0,e.jsx)(S.p,{placeholder:"Enter custom annotation name...",width:18,...t,className:a.customAnnotationInput})]})},x=t=>({annotationTitle:(0,n.css)({color:t.colors.text.primary,marginBottom:"3px"}),customAnnotationInput:(0,n.css)({marginTop:"5px",width:"100%"})}),j=b,B=({annotationField:t,annotations:a,annotation:r,index:f})=>{const{control:p}=(0,R.xW)();return(0,e.jsxs)(M.B,{direction:"column",gap:0,children:[(0,e.jsx)("label",{children:(0,e.jsx)(R.xI,{name:`annotations.${f}.key`,defaultValue:t.key,render:({field:{ref:l,...d}})=>{if(!c.J3[r])return(0,e.jsx)(j,{field:d});let u;switch(t.key){case c.YH.dashboardUID:u="Dashboard and panel";break;case c.YH.panelID:u="";break;default:u=c.J3[r]&&c.J3[r]+" (optional)"}return(0,e.jsx)("span",{"data-testid":`annotation-key-${f}`,children:(0,e.jsx)(W.E,{color:"primary",variant:"bodySmall",children:u})})},control:p,rules:{required:{value:!!a[f]?.value,message:"Required."}}})}),(0,e.jsx)(W.E,{variant:"bodySmall",color:"secondary",children:c.H8[r]})]})};var D=s(14578),U=s(78742);const oe=({dashboard:t,panel:a,dashboardUid:r,panelId:f,onEditClick:p,onDeleteClick:l})=>{const d=(0,T.of)(le),u=(0,U.JM)(t?.uid||r),I=(0,U.D2)(t?.uid||r,a?.id?.toString()||f);return(0,e.jsxs)("div",{className:d.container,children:[t&&(0,e.jsxs)("a",{href:u,className:d.link,target:"_blank",rel:"noreferrer","data-testid":"dashboard-annotation",children:[t.title," ",(0,e.jsx)(D.I,{name:"external-link-alt"})]}),!t&&(0,e.jsxs)("span",{className:d.noLink,children:["Dashboard ",r," "]}),a&&(0,e.jsxs)("a",{href:I,className:d.link,target:"_blank",rel:"noreferrer","data-testid":"panel-annotation",children:[a.title||"<No title>"," ",(0,e.jsx)(D.I,{name:"external-link-alt"})]}),!a&&(0,e.jsxs)("span",{className:d.noLink,children:[" - Panel ",f]}),(t||a)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(D.I,{name:"pen",onClick:p,className:d.icon}),(0,e.jsx)(D.I,{name:"trash-alt",onClick:l,className:d.icon})]})]})},le=t=>({container:(0,n.css)({marginTop:"5px"}),noLink:(0,n.css)({color:t.colors.text.secondary}),link:(0,n.css)({color:t.colors.text.link,marginRight:t.spacing(1.5)}),icon:(0,n.css)({marginRight:t.spacing(1),cursor:"pointer"})}),Ae=oe;var Ee=s(2543),Le=s(40996),ge=s(70713),re=s(91793),fe=s(56034),xe=s(37390),Pe=s(42418),ie=s(67647),ce=s(39558),Re=s(49962);const te=Re.H.injectEndpoints({endpoints:t=>({search:t.query({query:({query:a})=>{const r=new URLSearchParams({type:"dash-db",limit:"1000",page:"1",sort:"name_sort"});return a&&r.set("query",a),{url:`/api/search?${r.toString()}`}}}),dashboard:t.query({query:({uid:a})=>({url:`/api/dashboards/uid/${a}`})})})});var ve=s(41811),Be=s(34214);const de=(0,ve.A)(t=>{const{dashboard:a,meta:r}=structuredClone(t);return new Be.G(a,r)});function ye(t){return te.endpoints.dashboard.useQuery({uid:t??""},{skip:!t,selectFromResult:({currentData:r,data:f,...p})=>({dashboardModel:r?de(r):void 0,...p})})}function Ne(t,a){return t.title&&a.title?t.title.localeCompare(a.title):t.title&&!a.title?1:!t.title&&a.title?-1:0}const Me=({dashboardUid:t,panelId:a,isOpen:r,onChange:f,onDismiss:p})=>{const l=(0,T.of)(me),[d,u]=(0,m.useState)(t),[I,F]=(0,m.useState)(a),[_,ne]=(0,m.useState)(""),[Y,k]=(0,m.useState)(""),[Q,J]=(0,m.useState)(""),{useSearchQuery:w}=te,{currentData:y=[],isFetching:C}=w({query:Y}),{dashboardModel:K,isFetching:z}=ye(d),Z=(0,m.useCallback)(E=>{u(E),F(void 0)},[]),je=be(K),De=je.filter(E=>E.title?.toLowerCase().includes(Q.toLowerCase())).sort(Ne)??[],v=je.find(E=>ue(E)&&E.id?.toString()===I),A=(0,m.useMemo)(()=>y.map(E=>E.uid).indexOf(d??""),[y,d]),X=t&&t===d,se=A>=0,ae=(0,m.useCallback)(E=>{const ee=A>=0;X&&ee&&E?.scrollToItem(A,"smart")},[X,A]);(0,Le.A)(()=>{k(_)},500,[_]);const Se=({index:E,style:ee})=>{const V=y[E],Ie=d===V.uid;return(0,e.jsxs)("button",{type:"button",title:V.title,style:ee,className:(0,n.cx)(l.rowButton,{[l.rowOdd]:E%2===1,[l.rowSelected]:Ie}),onClick:()=>Z(V.uid),children:[(0,e.jsx)("div",{className:(0,n.cx)(l.dashboardTitle,l.rowButtonTitle),children:V.title}),(0,e.jsxs)("div",{className:l.dashboardFolder,children:[(0,e.jsx)(D.I,{name:"folder"})," ",V.folderTitle??"Dashboards"]})]})},pe=({index:E,style:ee})=>{const V=De[E],Ie=V.title||"<No title>",Oe=!!V.id&&I===V.id,Fe=V.type==="graph"||V.type==="timeseries",Ce=!ue(V);return(0,e.jsxs)("button",{type:"button",style:ee,disabled:Ce,className:(0,n.cx)(l.rowButton,l.panelButton,{[l.rowOdd]:E%2===1,[l.rowSelected]:Oe}),onClick:()=>Ce?Ee.noop:F(V.id),children:[(0,e.jsx)("div",{className:l.rowButtonTitle,title:Ie,children:Ie}),!Fe&&!Ce&&(0,e.jsx)(fe.m,{content:"The alert tab and alert annotations are only supported on graph and timeseries panels.",children:(0,e.jsx)(D.I,{name:"exclamation-triangle",className:l.warnIcon,"data-testid":"warning-icon"})}),Ce&&(0,e.jsx)(fe.m,{content:"This panel does not have a valid identifier.",children:(0,e.jsx)(D.I,{name:"info-circle","data-testid":"info-icon"})})]})};return(0,e.jsxs)(xe.a,{title:"Select dashboard and panel",closeOnEscape:!0,isOpen:r,onDismiss:p,className:l.modal,contentClassName:l.modalContent,children:[!se&&t&&K&&(0,e.jsxs)(Pe.F,{title:"Current selection",severity:"info",topSpacing:0,bottomSpacing:1,className:l.modalAlert,children:[(0,e.jsxs)("div",{children:["Dashboard: ",K.title," (",K.uid,") in folder"," ",K.meta?.folderTitle??"Dashboards"]}),v&&(0,e.jsxs)("div",{children:["Panel: ",v.title," (",v.id,")"]})]}),(0,e.jsxs)("div",{className:l.container,children:[(0,e.jsx)(ie.Z,{value:_,onChange:ne,title:"Search dashboard",placeholder:"Search dashboard",autoFocus:!0}),(0,e.jsx)(ie.Z,{value:Q,onChange:J,title:"Search panel",placeholder:"Search panel"}),(0,e.jsxs)("div",{className:l.column,children:[C&&(0,e.jsx)(ce._,{text:"Loading dashboards...",className:l.loadingPlaceholder}),!C&&(0,e.jsx)(ge.Ay,{children:({height:E,width:ee})=>(0,e.jsx)(re.Y1,{ref:ae,itemSize:50,height:E,width:ee,itemCount:y.length,children:Se})})]}),(0,e.jsxs)("div",{className:l.column,children:[!d&&!z&&(0,e.jsx)("div",{className:l.selectDashboardPlaceholder,children:(0,e.jsx)("div",{children:"Select a dashboard to get a list of available panels"})}),z&&(0,e.jsx)(ce._,{text:"Loading dashboard...",className:l.loadingPlaceholder}),d&&!z&&(0,e.jsx)(ge.Ay,{children:({width:E,height:ee})=>(0,e.jsx)(re.Y1,{itemSize:32,height:ee,width:E,itemCount:De.length,children:pe})})]})]}),(0,e.jsxs)(xe.a.ButtonRow,{children:[(0,e.jsx)(O.$n,{type:"button",variant:"secondary",onClick:p,fill:"text",children:"Cancel"}),(0,e.jsx)(O.$n,{type:"button",variant:"primary",disabled:!(d&&I),onClick:()=>{d&&I&&f(d,I)},children:"Confirm"})]})]})};function be(t){if(!t)return[];const a=t.panels.filter(p=>p.type!=="row"),r=t.panels.filter(p=>p.collapsed).flatMap(p=>p.panels??[]);return[...a,...r]}const ue=t=>{const a=typeof t.id=="number",r=typeof t.type=="string",f="libraryPanel"in t;return a&&(r||f)},me=t=>{const a=(0,O.my)(t);return{container:(0,n.css)({display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"min-content auto",gap:t.spacing(2),flex:1}),column:(0,n.css)({flex:"1 1 auto"}),dashboardTitle:(0,n.css)({height:"22px",fontWeight:t.typography.fontWeightBold}),dashboardFolder:(0,n.css)({height:"20px",fontSize:t.typography.bodySmall.fontSize,color:t.colors.text.secondary,display:"flex",flexDirection:"row",justifyContent:"flex-start",columnGap:t.spacing(1),alignItems:"center"}),rowButton:(0,n.css)(a,{padding:t.spacing(.5),overflow:"hidden",textOverflow:"ellipsis",textAlign:"left",whiteSpace:"nowrap",cursor:"pointer",border:"2px solid transparent","&:disabled":{cursor:"not-allowed",color:t.colors.text.disabled}}),rowButtonTitle:(0,n.css)({textOverflow:"ellipsis",overflow:"hidden"}),rowSelected:(0,n.css)({borderColor:t.colors.primary.border}),rowOdd:(0,n.css)({backgroundColor:t.colors.background.secondary}),panelButton:(0,n.css)({display:"flex",gap:t.spacing(1),justifyContent:"space-between",alignItems:"center"}),loadingPlaceholder:(0,n.css)({height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}),selectDashboardPlaceholder:(0,n.css)({width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",fontWeight:t.typography.fontWeightBold}),modal:(0,n.css)({height:"100%"}),modalContent:(0,n.css)({flex:1,display:"flex",flexDirection:"column"}),modalAlert:(0,n.css)({flexGrow:0}),warnIcon:(0,n.css)({fill:t.colors.warning.main})}};var Te=s(19338),o=s(271);const i=()=>{const t=(0,T.of)(g),[a,r]=(0,N.A)(!1),{control:f,register:p,watch:l,formState:{errors:d},setValue:u}=(0,R.xW)(),I=l("annotations"),{fields:F,append:_,remove:ne}=(0,R.jz)({control:f,name:"annotations"}),Y=I.find(v=>v.key===c.YH.dashboardUID)?.value,k=Number(I.find(v=>v.key===c.YH.panelID)?.value),[Q,J]=(0,m.useState)(void 0),[w,y]=(0,m.useState)(void 0),{dashboardModel:C,isFetching:K}=ye(Y);(0,m.useEffect)(()=>{if(K||!C)return;J(C);const A=be(C).find(X=>X.id===k);y(A)},[k,C,K]);const z=(v,A)=>{const X=(0,L.jM)(I,se=>{const ae=se.find(pe=>pe.key===c.YH.dashboardUID),Se=se.find(pe=>pe.key===c.YH.panelID);ae?ae.value=v:se.push({key:c.YH.dashboardUID,value:v}),Se?Se.value=A.toString():se.push({key:c.YH.panelID,value:A.toString()})});u("annotations",X),r(!1)},Z=()=>{const v=I.filter(A=>A.key!==c.YH.dashboardUID&&A.key!==c.YH.panelID);u("annotations",v),J(void 0),y(void 0)},je=()=>{r(!0)};function De(){return(0,e.jsxs)(M.B,{direction:"row",gap:.5,alignItems:"center",children:[(0,e.jsx)(W.E,{variant:"bodySmall",color:"secondary",children:(0,e.jsx)(H.x6,{i18nKey:"alerting.annotations.description",children:"Add more context to your alert notifications."})}),(0,e.jsx)(Te.G,{contentText:`Annotations add metadata to provide more information on the alert in your alert notification messages.
          For example, add a Summary annotation to tell you which value caused the alert to fire or which server it happened on.
          Annotations can contain a combination of text and template code.`,title:"Annotations"})]})}return(0,e.jsx)(o.P,{stepNo:5,title:(0,H.t)("alerting.annotations.title","Configure notification message"),description:De(),fullWidth:!0,children:(0,e.jsxs)(M.B,{direction:"column",gap:1,children:[F.map((v,A)=>{const X=I[A]?.key?.toLocaleLowerCase().endsWith("url"),se=X?S.p:$.f,ae=v.key;return(0,e.jsx)("div",{className:t.flexRow,children:(0,e.jsxs)("div",{children:[(0,e.jsx)(B,{annotationField:v,annotations:I,annotation:ae,index:A}),Y&&k&&v.key===c.YH.dashboardUID&&(0,e.jsx)(Ae,{dashboard:Q,panel:w,dashboardUid:Y.toString(),panelId:k.toString(),onEditClick:je,onDeleteClick:Z}),(0,e.jsxs)("div",{className:t.annotationValueContainer,children:[(0,e.jsx)(G.D,{hidden:v.key===c.YH.dashboardUID||v.key===c.YH.panelID,className:(0,n.cx)(t.flexRowItemMargin,t.field),invalid:!!d.annotations?.[A]?.value?.message,error:d.annotations?.[A]?.value?.message,children:(0,e.jsx)(se,{"data-testid":`annotation-value-${A}`,className:(0,n.cx)(t.annotationValueInput,{[t.textarea]:!X}),...p(`annotations.${A}.value`),placeholder:X?"https://":v.key&&`Enter a ${v.key}...`||"Enter custom annotation content...",defaultValue:v.value})}),!c.J3[ae]&&(0,e.jsx)(O.$n,{type:"button",className:t.deleteAnnotationButton,"aria-label":"delete annotation",icon:"trash-alt",variant:"secondary",onClick:()=>ne(A)})]})]})},v.id)}),(0,e.jsx)(M.B,{direction:"row",gap:1,children:(0,e.jsxs)("div",{className:t.addAnnotationsButtonContainer,children:[(0,e.jsx)(O.$n,{icon:"plus",type:"button",variant:"secondary",onClick:()=>{_({key:"",value:""})},children:"Add custom annotation"}),!Q&&(0,e.jsx)(O.$n,{type:"button",variant:"secondary",icon:"dashboard",onClick:()=>r(!0),children:"Link dashboard and panel"})]})}),a&&(0,e.jsx)(Me,{isOpen:!0,dashboardUid:Y,panelId:k,onChange:z,onDismiss:()=>r(!1)})]})})},g=t=>({annotationValueInput:(0,n.css)({width:"394px"}),textarea:(0,n.css)({height:"76px"}),addAnnotationsButtonContainer:(0,n.css)({marginTop:t.spacing(1),gap:t.spacing(1),display:"flex"}),field:(0,n.css)({marginBottom:t.spacing(.5)}),flexRow:(0,n.css)({display:"flex",flexDirection:"row",justifyContent:"flex-start"}),flexRowItemMargin:(0,n.css)({marginTop:t.spacing(1)}),deleteAnnotationButton:(0,n.css)({display:"inline-block",marginTop:"10px",marginLeft:"10px"}),annotationTitle:(0,n.css)({color:t.colors.text.primary,marginBottom:"3px"}),annotationContainer:(0,n.css)({marginTop:"5px"}),annotationDescription:(0,n.css)({color:t.colors.text.secondary}),annotationValueContainer:(0,n.css)({display:"flex"})}),h=i},19338:(he,q,s)=>{s.d(q,{G:()=>M});var e=s(74848),n=s(32196),L=s(40845),m=s(60782),R=s(67061),N=s(14578),T=s(94753);function M({contentText:S,externalLink:$,linkText:G,title:O="Need help?"}){const H=(0,L.of)(W);return(0,e.jsx)(m.G,{content:(0,e.jsx)("div",{className:H.mutedText,children:S}),title:(0,e.jsxs)(R.B,{gap:.5,direction:"row",alignItems:"center",children:[(0,e.jsx)(N.I,{name:"question-circle"}),O]}),footer:$?(0,e.jsx)("a",{href:$,target:"_blank",rel:"noreferrer",children:(0,e.jsx)(R.B,{direction:"row",gap:.5,alignItems:"center",children:(0,e.jsxs)(T.E,{color:"link",children:[G," ",(0,e.jsx)(N.I,{size:"sm",name:"external-link-alt"})]})})}):void 0,closeButton:!0,placement:"bottom-start",children:(0,e.jsx)("div",{className:H.helpInfo,children:(0,e.jsxs)(R.B,{direction:"row",alignItems:"center",gap:.5,children:[(0,e.jsx)(N.I,{name:"question-circle",size:"sm"}),(0,e.jsx)(T.E,{variant:"bodySmall",color:"primary",children:"Need help?"})]})})})}const W=S=>({mutedText:(0,n.css)({color:S.colors.text.secondary,fontSize:S.typography.size.sm}),helpInfo:(0,n.css)({cursor:"pointer",textDecoration:"underline"})})},271:(he,q,s)=>{s.d(q,{P:()=>M});var e=s(74848),n=s(32196),L=s(40845),m=s(84167),R=s(67061),N=s(94753),T=s(15292);const M=({title:S,stepNo:$,children:G,fullWidth:O=!1,description:H,switchMode:c})=>{const b=(0,L.of)(W);return(0,e.jsx)("div",{className:b.parent,children:(0,e.jsx)(m.n,{className:(0,n.cx)(O&&b.fullWidth),label:(0,e.jsxs)(R.B,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,e.jsxs)(N.E,{variant:"h3",children:[$,". ",S]}),c&&(0,e.jsx)(N.E,{variant:"bodySmall",children:(0,e.jsx)(T.K,{id:"query-and-expressions-advanced-options",value:c.isAdvancedMode,onChange:x=>{c.setAdvancedMode(x.currentTarget.checked)},label:"Advanced options",showLabel:!0,transparent:!0,className:b.reverse})})]}),children:(0,e.jsxs)(R.B,{direction:"column",children:[H&&(0,e.jsx)("div",{className:b.description,children:H}),G]})})})},W=S=>({parent:(0,n.css)({display:"flex",flexDirection:"row",border:`solid 1px ${S.colors.border.weak}`,borderRadius:S.shape.radius.default,padding:`${S.spacing(2)} ${S.spacing(3)}`}),description:(0,n.css)({marginTop:`-${S.spacing(2)}`}),fullWidth:(0,n.css)({width:"100%"}),reverse:(0,n.css)({flexDirection:"row-reverse",gap:S.spacing(1)})})},97171:(he,q,s)=>{s.d(q,{DI:()=>ve,C1:()=>Be,Ay:()=>Te});var e=s(74848),n=s(32196),L=s(96540),m=s(49785),R=s(40845),N=s(67061),T=s(94753),M=s(68402),W=s(55852),S=s(39558),$=s(88575),G=s(76892),O=s(10354),H=s(8484),c=s(99494),b=s(49962);const x=b.H.injectEndpoints({endpoints:o=>({getLabels:o.query({query:()=>({url:`/api/plugins/${c.W.Labels}/resources/v1/labels/keys`}),providesTags:["GrafanaLabels"]}),getLabelValues:o.query({query:({key:i})=>({url:`/api/plugins/${c.W.Labels}/resources/v1/labels/name/${i}`}),providesTags:["GrafanaLabels"]})})});var j=s(12210),P=s(86590),B=s(75214),D=s(23662),U=s(2146),oe=s(90182);const le=(0,U.c)({ignoreCase:!1});function Ae(o,i){return le({label:o.label??"",value:o.value??"",data:{}},i)}const Ee=(o,i,g)=>{const h=g.some(a=>a.label===o),t=o.trim().length;return!h&&!!t},Le=(0,L.forwardRef)(function({onChange:i,options:g,defaultValue:h,type:t,onOpenMenu:a=()=>{}},r){const f=(0,R.of)(ge);return(0,e.jsx)("div",{ref:r,children:(0,e.jsx)($.D,{disabled:!1,"data-testid":`alertlabel-${t}-picker`,className:f.resetMargin,children:(0,e.jsx)(oe.l6,{placeholder:`Choose ${t}`,width:29,className:"ds-picker select-container",backspaceRemovesValue:!1,onChange:i,onOpenMenu:a,filterOption:Ae,isValidNewOption:Ee,options:g,maxMenuHeight:500,noOptionsMessage:"No labels found",defaultValue:h,allowCustomValue:!0})})})}),ge=()=>({resetMargin:(0,n.css)({marginBottom:0})}),re=Le;var fe=s(69087),xe=s(19338),Pe=s(40111);function ie({remove:o,index:i}){return(0,e.jsx)(W.$n,{"aria-label":"delete label",icon:"trash-alt","data-testid":`delete-label-${i}`,variant:"secondary",onClick:()=>{o(i)}})}function ce({append:o}){return(0,e.jsx)(W.$n,{icon:"plus",type:"button",variant:"secondary",onClick:o,children:"Add more"})}const Re=o=>{const{currentData:i,isLoading:g}=x.endpoints.getLabels.useQuery(void 0,{skip:o});return{loading:g,labelsOpsKeys:i}};function te(o=[],i){const g=new Set(i?i.map(h=>h.key):[]);return Array.from(o,h=>({label:h,value:h,isDisabled:g.has(h)}))}const ve=({labels:o})=>{const i=o.reduce((g,h)=>(h.key&&(g[h.key]=h.value),g),{});return(0,e.jsx)(fe.m,{labels:i})};function Be({dataSourceName:o,onClose:i,initialLabels:g}){const h=(0,R.of)(me),{watch:t}=(0,m.xW)(),a=t("type")??P.Z.grafana,r=d=>{i(d.labelsInSubform)},f=()=>{i()},p=(0,L.useMemo)(()=>({labelsInSubform:g}),[g]),l=(0,m.mN)({defaultValues:p});return(0,e.jsx)(m.Op,{...l,children:(0,e.jsx)("form",{onSubmit:l.handleSubmit(r),children:(0,e.jsxs)(N.B,{direction:"column",gap:4,children:[(0,e.jsx)(T.E,{children:ue(a)}),(0,e.jsxs)(N.B,{direction:"column",gap:1,children:[(0,e.jsx)(Ne,{dataSourceName:o}),(0,e.jsx)(M.$,{v:2}),(0,e.jsx)(ve,{labels:l.watch("labelsInSubform")}),(0,e.jsx)(M.$,{v:1}),(0,e.jsxs)("div",{className:h.confirmButton,children:[(0,e.jsx)(W.$n,{type:"button",variant:"secondary",onClick:f,children:"Cancel"}),(0,e.jsx)(W.$n,{type:"submit",children:"Save"})]})]})]})})})}const de=o=>!(0,B.F2)(o);function ye(o,i,g,h,t){const{isLoading:a,labels:r}=(0,Pe.V)(o),{loading:f,labelsOpsKeys:p=[]}=Re(!i||g),l=(0,L.useMemo)(()=>p.reduce((C,K)=>(C[K.name]=new Set,C),{}),[p]),d=(0,L.useMemo)(()=>te(Object.keys(l).filter(de),h),[l,h]),u=(0,L.useMemo)(()=>te(Array.from(r.keys()).filter(de),h),[r,h]),I=[{label:"From alerts",options:u,expanded:!0},{label:"From system",options:d,expanded:!0}],F=r.has(t),_=l[t]!==void 0&&l[t]?.size>0,ne=!F&&!_,Y=!F&&l[t]?.size>0,{currentData:k,isLoading:Q=!1,error:J}=x.endpoints.getLabelValues.useQuery({key:t},{skip:!i||!t||F||Y||ne}),w=(0,L.useMemo)(()=>{if(F)return[];const C=l[t];if(C?.size>0)return te(C);if(!Q&&k?.values?.length&&!J){const z=k?.values.map(Z=>Z.name);return l[t]=new Set(z),te(z)}return[]},[F,l,t,Q,k,J]),y=(0,L.useCallback)(C=>de(C)?F||!i?te(r.get(C)):w:[],[r,i,w,F]);return{loading:a||f,keysFromExistingAlerts:u,groupedOptions:I,getValuesForLabel:y}}function Ne({dataSourceName:o}){const i=(0,R.of)(me),{control:g,watch:h,formState:{errors:t}}=(0,m.xW)(),a=h("labelsInSubform"),{fields:r,remove:f,append:p}=(0,m.jz)({control:g,name:"labelsInSubform"}),l=(0,L.useCallback)(()=>{p({key:"",value:""})},[p]),{installed:d=!1,loading:u}=(0,j._)(c.W.Labels),[I,F]=(0,L.useState)(""),{loading:_,keysFromExistingAlerts:ne,groupedOptions:Y,getValuesForLabel:k}=ye(o,d,u,a,I),Q=(0,L.useMemo)(()=>k(I),[I,k]),J=_||u;return(0,e.jsxs)(e.Fragment,{children:[J&&(0,e.jsx)(S._,{text:"Loading existing labels"}),!J&&(0,e.jsxs)(N.B,{direction:"column",gap:1,alignItems:"flex-start",children:[r.map((w,y)=>(0,e.jsxs)("div",{className:(0,n.cx)(i.flexRow,i.centerAlignRow),children:[(0,e.jsx)($.D,{className:i.labelInput,invalid:!!t.labelsInSubform?.[y]?.key?.message,error:t.labelsInSubform?.[y]?.key?.message,"data-testid":`labelsInSubform-key-${y}`,children:(0,e.jsx)(m.xI,{name:`labelsInSubform.${y}.key`,control:g,rules:{required:a[y]?.value?"Required.":!1},render:({field:{onChange:C,ref:K,...z}})=>(0,e.jsx)(re,{...z,defaultValue:w.key?{label:w.key,value:w.key}:void 0,options:d?Y:ne,onChange:Z=>{C(Z.value),F(Z.value)},type:"key"})})}),(0,e.jsx)(G.c,{className:i.equalSign,children:"="}),(0,e.jsx)($.D,{className:i.labelInput,invalid:!!t.labelsInSubform?.[y]?.value?.message,error:t.labelsInSubform?.[y]?.value?.message,"data-testid":`labelsInSubform-value-${y}`,children:(0,e.jsx)(m.xI,{control:g,name:`labelsInSubform.${y}.value`,rules:{required:a[y]?.value?"Required.":!1},render:({field:{onChange:C,ref:K,...z}})=>(0,e.jsx)(re,{...z,defaultValue:w.value?{label:w.value,value:w.value}:void 0,options:Q,onChange:Z=>{C(Z.value)},onOpenMenu:()=>{F(a[y].key)},type:"value"})})}),(0,e.jsx)(ie,{index:y,remove:f})]},w.id)),(0,e.jsx)(ce,{append:l})]})]})}const Me=()=>{const o=(0,R.of)(me),{register:i,control:g,watch:h,formState:{errors:t}}=(0,m.xW)(),a=h("labels"),{fields:r,remove:f,append:p}=(0,m.jz)({control:g,name:"labels"}),l=(0,L.useCallback)(()=>{p({key:"",value:""})},[p]);return(0,e.jsxs)(e.Fragment,{children:[r.map((d,u)=>(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:(0,n.cx)(o.flexRow,o.centerAlignRow),"data-testid":"alertlabel-input-wrapper",children:[(0,e.jsx)($.D,{className:o.labelInput,invalid:!!t.labels?.[u]?.key?.message,error:t.labels?.[u]?.key?.message,children:(0,e.jsx)(O.p,{...i(`labels.${u}.key`,{required:{value:!!a[u]?.value,message:"Required."}}),placeholder:"key","data-testid":`label-key-${u}`,defaultValue:d.key})}),(0,e.jsx)(G.c,{className:o.equalSign,children:"="}),(0,e.jsx)($.D,{className:o.labelInput,invalid:!!t.labels?.[u]?.value?.message,error:t.labels?.[u]?.value?.message,children:(0,e.jsx)(O.p,{...i(`labels.${u}.value`,{required:{value:!!a[u]?.key,message:"Required."}}),placeholder:"value","data-testid":`label-value-${u}`,defaultValue:d.value})}),(0,e.jsx)(ie,{index:u,remove:f})]})},d.id)),(0,e.jsx)(ce,{append:l})]})};function be(){const{watch:o}=(0,m.xW)(),i=o("type")??P.Z.grafana;return(0,e.jsxs)("div",{children:[(0,e.jsxs)(N.B,{direction:"column",gap:1,children:[(0,e.jsx)(T.E,{element:"h5",children:"Labels"}),(0,e.jsxs)(N.B,{direction:"row",gap:1,children:[(0,e.jsx)(T.E,{variant:"bodySmall",color:"secondary",children:ue(i)}),(0,e.jsx)(xe.G,{contentText:`The dropdown only displays labels that you have previously used for alerts.
            Select a label from the options below or type in a new one.`,title:"Labels"})]})]}),(0,e.jsx)(Me,{})]})}function ue(o){return(o?(0,D.vE)(o):!1)?(0,H.t)("alerting.alertform.labels.recording","Add labels to your rule."):(0,H.t)("alerting.alertform.labels.alerting","Add labels to your rule for searching, silencing, or routing to a notification policy.")}const me=o=>({flexColumn:(0,n.css)({display:"flex",flexDirection:"column"}),flexRow:(0,n.css)({display:"flex",flexDirection:"row",justifyContent:"flex-start"}),centerAlignRow:(0,n.css)({alignItems:"center",gap:o.spacing(.5)}),equalSign:(0,n.css)({alignSelf:"flex-start",width:"28px",justifyContent:"center",margin:0}),labelInput:(0,n.css)({width:"175px",margin:0}),confirmButton:(0,n.css)({display:"flex",flexDirection:"row",gap:o.spacing(1),marginLeft:"auto"})}),Te=be},40111:(he,q,s)=>{s.d(q,{V:()=>S});var e=s(96540),n=s(79938),L=s(77583),m=s(24608);const{usePrometheusRuleNamespacesQuery:R,useLazyRulerRulesQuery:N}=n.hK,{useDiscoverDsFeaturesQuery:T}=L.L,M=(0,m.w)(),W={};function S(c){const{data:b,isLoading:x}=T({rulesSourceName:c}),[j,{data:P=W,isLoading:B}]=N(),{data:D=[],isLoading:U}=R({ruleSourceName:c},{skip:!M});(0,e.useEffect)(()=>{b?.rulerConfig&&!M&&j({rulerConfig:b.rulerConfig})},[b?.rulerConfig,j]);const oe=(0,e.useMemo)(()=>U||B?new Map:M?$(D):G(P),[D,P,U,B]),le=(0,e.useMemo)(()=>U||B?new Map:M?O(D):H(P),[D,P,U,B]);return{namespaceGroups:oe,labels:le,isLoading:U||B||x}}function $(c){const b=new Map;return c.forEach(x=>{b.set(x.name,x.groups.map(j=>j.name))}),b}function G(c){const b=new Map;return Object.entries(c).forEach(([x,j])=>{b.set(x,j.map(P=>P.name))}),b}function O(c){return c.flatMap(x=>x.groups).flatMap(x=>x.rules).reduce((x,j)=>(j.labels&&Object.entries(j.labels).forEach(([P,B])=>{if(!P||!B)return;const D=x.get(P);D?D.add(B):x.set(P,new Set([B]))}),x),new Map)}function H(c){const b=new Map;return Object.entries(c).flatMap(([j,P])=>P).flatMap(j=>j.rules).reduce((j,P)=>(P.labels&&Object.entries(P.labels).forEach(([B,D])=>{if(!B||!D)return;const U=j.get(B);U?U.add(D):j.set(B,new Set([D]))}),j),b)}}}]);

//# sourceMappingURL=8373.f869d2868f13f771a388.js.map