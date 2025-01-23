"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8427],{12564:(H,E,t)=>{t.r(E),t.d(E,{default:()=>es});var s=t(74848),a=t(96540),B=t(39558),v=t(42418),I=t(90613),P=t(94753),h=t(83277),C=t(31678),N=t(60021),z=t(82843),f=t(37959),S=t(35016),y=t(32196),b=t(40845),F=t(55852),$=t(78742),W=t(60029),M=t(56034),L=t(14578),J=t(94354);const Q=({onStateFilterChange:l,stateFilter:x})=>{const O=Object.entries(N.Or).sort(([o],[n])=>o<n?-1:1).map(([o,n])=>({label:o,value:n}));return(0,s.jsxs)("div",{children:[(0,s.jsxs)(W.J,{children:[(0,s.jsx)("span",{children:"Notification state\xA0"}),(0,s.jsx)(M.m,{content:(0,s.jsx)("div",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Active: The alert notification has been handled. The alert is still firing and continues to be managed."}),(0,s.jsx)("li",{children:"Suppressed: The alert has been silenced."}),(0,s.jsx)("li",{children:"Unprocessed: The alert is received but its notification has not been processed yet."})]})}),children:(0,s.jsx)(L.I,{name:"info-circle",size:"sm"})})]}),(0,s.jsx)(J.z,{options:O,value:x,onChange:l})]})};var U=t(2543),Y=t(90182),V=t(75214);const X=({groups:l,groupBy:x,onGroupingChange:O})=>{const o=(0,U.uniq)(l.flatMap(n=>n.alerts).flatMap(({labels:n})=>Object.keys(n))).filter(n=>!(0,V.F2)(n)).map(n=>({label:n,value:n}));return(0,s.jsxs)("div",{"data-testid":"group-by-container",children:[(0,s.jsxs)(W.J,{children:[(0,s.jsx)("span",{children:"Custom group by\xA0"}),(0,s.jsx)(M.m,{content:(0,s.jsx)("div",{children:"Group notifications using a different combination of labels. This option can help validate the grouping settings of your notification policies."}),children:(0,s.jsx)(L.I,{name:"info-circle",size:"sm"})})]}),(0,s.jsx)(Y.KF,{"aria-label":"group by label keys",value:x,placeholder:"Group by",prefix:(0,s.jsx)(L.I,{name:"tag-alt"}),onChange:n=>{O(n.map(({value:j})=>j))},options:o,width:34})]})};var Z=t(53876);const w=({groups:l})=>{const[x,O]=(0,a.useState)(Math.floor(Math.random()*100)),[o,n]=(0,h.s)(),{groupBy:j=[],queryString:i,alertState:c}=(0,$.Ht)(o),p=`matcher-${x}`,A=(0,b.of)(k),T=()=>{n({groupBy:null,queryString:null,alertState:null,contactPoint:null}),setTimeout(()=>O(x+1),100)},R=!!(j.length>0||i||c);return(0,s.jsx)("div",{className:A.wrapper,children:(0,s.jsxs)("div",{className:A.filterSection,children:[(0,s.jsx)(Z.X,{defaultQueryString:i,onFilterChange:u=>n({queryString:u||null})},p),(0,s.jsx)(X,{groups:l,groupBy:j,onGroupingChange:u=>n({groupBy:u.length?u.join(","):null})}),(0,s.jsx)(Q,{stateFilter:c,onStateFilterChange:u=>n({alertState:u||null})}),R&&(0,s.jsx)(F.$n,{className:A.clearButton,variant:"secondary",icon:"times",onClick:T,children:"Clear filters"})]})})},k=l=>({wrapper:(0,y.css)({borderBottom:`1px solid ${l.colors.border.medium}`,marginBottom:l.spacing(3)}),filterSection:(0,y.css)({display:"flex",flexDirection:"row",marginBottom:l.spacing(3),gap:l.spacing(1)}),clearButton:(0,y.css)({marginLeft:l.spacing(1),marginTop:"19px"})});var q=t(98164),_=t(32642);const ss=l=>{const[x]=(0,h.s)(),{queryString:O,alertState:o}=(0,$.Ht)(x);return(0,a.useMemo)(()=>{const n=O?(0,_.Zc)(O):[];return l.reduce((j,i)=>{const c=i.alerts.filter(({labels:p,status:A})=>{const T=(0,q.Av)(p,n),R=o?A.state===o:!0;return T&&R});return c.length>0&&(Object.keys(i.labels).length===0?j.unshift({...i,alerts:c}):j.push({...i,alerts:c})),j},[])},[O,l,o])},e=(l,x)=>(0,a.useMemo)(()=>x.length===0?l.filter(n=>Object.keys(n.labels).length===0).length>1?l.reduce((n,j)=>{if(Object.keys(j.labels).length===0){const i=n.find(({labels:c})=>Object.keys(c));i?i.alerts=(0,U.uniqBy)([...i.alerts,...j.alerts],"labels"):n.push({alerts:j.alerts,labels:{},receiver:{name:"NONE"}})}else n.push(j);return n},[]):l:(0,U.uniqBy)(l.flatMap(({alerts:o})=>o),o=>o.fingerprint).reduce((o,n)=>{if(x.every(i=>Object.keys(n.labels).includes(i)))n.receivers.map(c=>({alerts:[n],labels:x.reduce((p,A)=>(p={...p,[A]:n.labels[A]},p),{}),receiver:c})).forEach(c=>{const p=o.find(A=>Object.keys(c.labels).every(T=>A.labels[T]===c.labels[T])&&A.receiver.name===c.receiver.name);p?p.alerts.push(n):o.push(c)});else{const i=o.find(c=>Object.keys(c.labels).length===0);i?i.alerts.push(n):o.push({alerts:[n],labels:{},receiver:{name:"NONE"}})}return o},[]),[l,x]);var g=t(61410),d=t(70383),G=t(26627),m=t(55740),r=t(57220),D=t(88467);const ts=()=>{const{selectedAlertmanager:l}=(0,d.VI)(),x=(0,C.useDispatch)(),[O]=(0,h.s)(),{groupBy:o=[]}=(0,$.Ht)(O),{currentData:n}=z.m.endpoints.getGrafanaAlertingConfigurationStatus.useQuery(),j=(0,g.$)(u=>u.amAlertGroups),{loading:i,error:c,result:p=[]}=j[l||""]??D.jA,A=e(p,o),T=ss(A),R=l===r.hY&&n?.alertmanagersChoice===N.nA.External;return(0,a.useEffect)(()=>{function u(){l&&x((0,G.D3)(l))}u();const K=setInterval(u,m.U3);return()=>{clearInterval(K)}},[x,l]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w,{groups:p}),i&&(0,s.jsx)(B._,{text:"Loading notifications"}),c&&!i&&(0,s.jsx)(v.F,{title:"Error loading notifications",severity:"error",children:c.message||"Unknown error"}),R&&(0,s.jsx)(v.F,{title:"Grafana alerts are not delivered to Grafana Alertmanager",children:"Grafana is configured to send alerts to external alertmanagers only. No alerts are expected to be available here for the selected Alertmanager."}),p&&T.map((u,K)=>(0,s.jsxs)(a.Fragment,{children:[(K===1&&Object.keys(T[0].labels).length===0||K===0&&Object.keys(u.labels).length>0)&&(0,s.jsx)(I.a,{paddingY:2,children:(0,s.jsxs)(P.E,{element:"h2",variant:"body",children:["Grouped by: ",Object.keys(u.labels).join(", ")]})}),(0,s.jsx)(S._,{alertManagerSourceName:l||"",group:u})]},`${JSON.stringify(u.labels)}-group-${K}`)),p&&!T.length&&(0,s.jsx)("p",{children:"No results."})]})},es=()=>(0,s.jsx)(f.y,{navId:"groups",accessType:"instance",children:(0,s.jsx)(ts,{})})},64853:(H,E,t)=>{t.d(E,{_:()=>I});var s=t(74848),a=t(2543),B=t.n(a),v=t(19073);const I=({actions:f,children:S})=>{const y=(0,a.filter)(f,N),b=(0,a.filter)(f,z);return y.length?(0,s.jsx)(P,{actions:y,children:S}):b.length?(0,s.jsx)(h,{actions:b,children:S}):null},P=({actions:f,children:S})=>{const y=(0,v.iI)();return C(y,f)?(0,s.jsx)(s.Fragment,{children:S}):null},h=({actions:f,children:S})=>{const y=(0,v.e2)();return C(y,f)?(0,s.jsx)(s.Fragment,{children:S}):null};function C(f,S){return(0,a.chain)(f).pick(S).values().value().some(([y,b])=>b===!0)}function N(f){return Object.values(v.QI).includes(f)}function z(f){return Object.values(v.RY).includes(f)}},64047:(H,E,t)=>{t.d(E,{e:()=>B});var s=t(74848),a=t(55852);const B=({isCollapsed:v,onToggle:I,idControlled:P,className:h,text:C,size:N="xl",...z})=>(0,s.jsx)(a.$n,{type:"button",fill:"text",variant:"secondary","aria-expanded":!v,"aria-controls":P,className:h,icon:v?"angle-right":"angle-down",onClick:()=>I(!v),...z,children:C})},35016:(H,E,t)=>{t.d(E,{_:()=>_});var s=t(74848),a=t(32196),B=t(96540),v=t(40845),I=t(67061),P=t(72109),h=t(60021),C=t(78742),N=t(69087),z=t(64047),f=t(55196),S=t(70416),y=t(10562),b=t(97754),F=t(55852),$=t(16233),W=t(31678),M=t(19073),L=t(57220),J=t(71223),Q=t(64853);const U=({alert:e,alertManagerSourceName:g})=>{const d=(0,v.of)(Y),G=(0,L.z2)(g),m=G?$.TP.hasPermission(W.AccessControlAction.AlertingRuleRead):!0;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:d.actionsRow,children:[e.status.state===h.Or.Suppressed&&(0,s.jsx)(Q._,{actions:[M.QI.CreateSilence,M.QI.UpdateSilence],children:(0,s.jsx)(F.z9,{href:`${(0,C.nL)("/alerting/silences",g)}&silenceIds=${e.status.silencedBy.join(",")}`,className:d.button,icon:"bell",size:"sm",children:"Manage silences"})}),e.status.state===h.Or.Active&&(0,s.jsx)(Q._,{actions:[M.QI.CreateSilence],children:(0,s.jsx)(F.z9,{href:(0,C.BK)(g,e.labels),className:d.button,icon:"bell-slash",size:"sm",children:"Silence"})}),m&&e.generatorURL&&(0,s.jsx)(F.z9,{className:d.button,href:e.generatorURL,icon:"chart-line",size:"sm",children:G?"See alert rule":"See source"})]}),Object.entries(e.annotations).map(([r,D])=>(0,s.jsx)(J.s,{annotationKey:r,value:D},r)),(0,s.jsxs)("div",{className:d.receivers,children:["Receivers:"," ",e.receivers.map(({name:r})=>r).filter(r=>!!r).join(", ")]})]})},Y=e=>({button:(0,a.css)({"& + &":{marginLeft:e.spacing(1)}}),actionsRow:(0,a.css)({padding:`${e.spacing(2,0)} !important`,borderBottom:`1px solid ${e.colors.border.medium}`}),receivers:(0,a.css)({padding:e.spacing(1,0)})}),V=({alerts:e,alertManagerSourceName:g})=>{const d=(0,v.of)(X),G=(0,B.useMemo)(()=>[{id:"state",label:"Notification state",renderCell:({data:r})=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b.y,{state:r.status.state}),(0,s.jsxs)("span",{className:d.duration,children:["for"," ",(0,S.dU)({start:new Date(r.startsAt),end:new Date(r.endsAt)})]})]}),size:"220px"},{id:"labels",label:"Instance labels",renderCell:({data:{labels:r}})=>(0,s.jsx)(N.m,{labels:r,size:"sm"}),size:1}],[d]),m=(0,B.useMemo)(()=>e.map(r=>({id:r.fingerprint,data:r})),[e]);return(0,s.jsx)("div",{className:d.tableWrapper,"data-testid":"alert-group-table",children:(0,s.jsx)(y.B,{cols:G,items:m,isExpandable:!0,renderExpandedContent:({data:r})=>(0,s.jsx)(U,{alert:r,alertManagerSourceName:g})})})},X=e=>({tableWrapper:(0,a.css)({marginTop:e.spacing(3),[e.breakpoints.up("md")]:{marginLeft:e.spacing(4.5)}}),duration:(0,a.css)({marginLeft:e.spacing(1),fontSize:e.typography.bodySmall.fontSize})});var Z=t(55127),w=t.n(Z);const k=e=>({[h.Or.Active]:(0,a.css)({color:e.colors.error.text}),[h.Or.Suppressed]:(0,a.css)({color:e.colors.primary.text}),[h.Or.Unprocessed]:(0,a.css)({color:e.colors.secondary.text})}),q=({group:e})=>{const g=(0,v.of)(k),d=e.alerts.length,G=e.alerts.reduce((m,r)=>(m[r.status.state]?m[r.status.state]+=1:m[r.status.state]=1,m),{});return(0,s.jsxs)("div",{children:[`${d} ${w()("alert",d)}: `,Object.entries(G).map(([m,r],D)=>(0,s.jsxs)("span",{className:g[m],children:[D>0&&", ",`${r} ${m}`]},`${JSON.stringify(e.labels)}-notifications-${D}`))]})},_=({alertManagerSourceName:e,group:g})=>{const[d,G]=(0,B.useState)(!0),m=(0,v.of)(ss),r=g.receiver.name!=="NONE",D=g.receiver.name;return(0,s.jsxs)("div",{className:m.wrapper,children:[(0,s.jsxs)("div",{className:m.header,children:[(0,s.jsxs)("div",{className:m.group,"data-testid":"alert-group",children:[(0,s.jsx)(z.e,{size:"sm",isCollapsed:d,onToggle:()=>G(!d),"data-testid":"alert-group-collapse-toggle"}),Object.keys(g.labels).length?(0,s.jsxs)(I.B,{direction:"row",alignItems:"center",children:[(0,s.jsx)(N.m,{labels:g.labels,size:"sm"}),r&&(0,s.jsxs)(f.P,{icon:"at",children:["Delivered to"," ",(0,s.jsx)(P.Y,{href:(0,C.bg)(D,e),variant:"bodySmall",color:"primary",inline:!1,children:g.receiver.name})]})]}):(0,s.jsx)("span",{children:"No grouping"})]}),(0,s.jsx)(q,{group:g})]}),!d&&(0,s.jsx)(V,{alertManagerSourceName:e,alerts:g.alerts})]})},ss=e=>({wrapper:(0,a.css)({"& + &":{marginTop:e.spacing(2)}}),header:(0,a.css)({display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",padding:`${e.spacing(1)} ${e.spacing(1)} ${e.spacing(1)} 0`,backgroundColor:e.colors.background.secondary,width:"100%"}),group:(0,a.css)({display:"flex",flexDirection:"row",alignItems:"center"}),summary:(0,a.css)({}),[h.Or.Active]:(0,a.css)({color:e.colors.error.main}),[h.Or.Suppressed]:(0,a.css)({color:e.colors.primary.main}),[h.Or.Unprocessed]:(0,a.css)({color:e.colors.secondary.main})})}}]);

//# sourceMappingURL=AlertGroups.8142d5d050479725e796.js.map