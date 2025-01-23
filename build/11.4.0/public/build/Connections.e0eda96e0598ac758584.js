"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2154],{72557:(q,W,n)=>{n.d(W,{A:()=>y});var e=n(74848),h=n(96540),A=n(14186),u=n(67647),g=n(55852),p=n(73725);class y extends h.PureComponent{render(){const{searchQuery:D,linkButton:j,setSearchQuery:f,target:z,placeholder:U="Search by name or type",sortPicker:P}=this.props,K={href:j?.href,disabled:j?.disabled};return z&&(K.target=z),(0,e.jsxs)("div",{className:"page-action-bar",children:[(0,e.jsx)(A.I,{grow:!0,children:(0,e.jsx)(u.Z,{value:D,onChange:f,placeholder:U})}),P&&(0,e.jsx)(p.r,{onChange:P.onChange,value:P.value,getSortOptions:P.getSortOptions}),j&&(0,e.jsx)(g.z9,{...K,children:j.title})]})}}},19514:(q,W,n)=>{n.r(W),n.d(W,{default:()=>ss});var e=n(74848),h=n(24180),A=n(54148),u=n(85464),g=n(31678),p=n(6320),y=n(21780),i=n(32196),D=n(96540),j=n(43429),f=n(40845),z=n(39558),U=n(69529),P=n(10096),K=n(83277),B=n(8484),_=n(31036),S=n(83391),M=n(71259),m=n(10860),k=n(50691);const Ee=t=>({heading:(0,i.css)({fontSize:t.typography.h5.fontSize,fontWeight:"inherit"}),figure:(0,i.css)({width:"inherit",marginRight:"0px","> img":{width:t.spacing(7)}}),meta:(0,i.css)({marginTop:"6px",position:"relative"}),description:(0,i.css)({margin:"0px",fontSize:t.typography.bodySmall.fontSize}),card:(0,i.css)({gridTemplateAreas:`
        "Figure   Heading   Actions"
        "Figure Description Actions"
        "Figure    Meta     Actions"
        "Figure     -       Actions"`}),logo:(0,i.css)({marginRight:t.spacing(3),marginLeft:t.spacing(1),width:t.spacing(7),maxHeight:t.spacing(7)})}),be=({items:t,onClickItem:s})=>{const a=(0,f.of)(Ee);return(0,e.jsx)(M.x,{gap:1.5,minColumnWidth:44,children:t.map(o=>(0,e.jsxs)(m.Z,{className:a.card,href:o.url,onClick:r=>{s&&s(r,o)},children:[(0,e.jsx)(m.Z.Heading,{className:a.heading,children:o.name}),(0,e.jsx)(m.Z.Figure,{align:"center",className:a.figure,children:(0,e.jsx)("img",{className:a.logo,src:o.logo,alt:""})}),o.angularDetected?(0,e.jsx)(m.Z.Meta,{className:a.meta,children:(0,e.jsx)(k.fk,{})}):null]},o.id))})};var Q=n(14578);const Ae=t=>({categoryHeader:(0,i.css)`
    align-items: center;
    display: flex;
    margin-bottom: 24px;
  `,categoryLabel:(0,i.css)`
    margin-bottom: 0px;
    margin-left: 8px;
  `}),Te=({iconName:t,label:s})=>{const a=(0,f.of)(Ae);return(0,e.jsxs)("div",{className:a.categoryHeader,children:[(0,e.jsx)(Q.I,{name:t,size:"xl"}),(0,e.jsx)("h3",{className:a.categoryLabel,children:s})]})};var Me=n(37390),C=n(55852);const re=t=>({modal:(0,i.css)`
    width: 500px;
  `,modalContent:(0,i.css)`
    overflow: visible;
    color: ${t.colors.text.secondary};

    a {
      color: ${t.colors.text.link};
    }
  `,description:(0,i.css)`
    margin-bottom: ${t.spacing(2)};
  `,bottomSection:(0,i.css)`
    display: flex;
    border-top: 1px solid ${t.colors.border.weak};
    padding-top: ${t.spacing(3)};
    margin-top: ${t.spacing(3)};
  `,actionsSection:(0,i.css)`
    display: flex;
    justify-content: end;
    margin-top: ${t.spacing(3)};
  `,warningIcon:(0,i.css)`
    color: ${t.colors.warning.main};
    padding-right: ${t.spacing()};
    margin-top: ${t.spacing(.25)};
  `,header:(0,i.css)`
    display: flex;
    align-items: center;
  `,headerTitle:(0,i.css)`
    margin: 0;
  `,headerLogo:(0,i.css)`
    margin-right: ${t.spacing(2)};
    width: 32px;
    height: 32px;
  `});function Ie({item:t,isOpen:s,onDismiss:a}){const o=(0,f.of)(re);return(0,e.jsx)(Me.a,{className:o.modal,contentClassName:o.modalContent,title:(0,e.jsx)(Le,{item:t}),isOpen:s,onDismiss:a,children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{children:[t.description&&(0,e.jsx)("div",{className:o.description,children:t.description}),(0,e.jsxs)("div",{children:["Links",(0,e.jsx)("br",{}),(0,e.jsx)("a",{href:`https://grafana.com/grafana/plugins/${t.id}`,title:`${t.name} on Grafana.com`,target:"_blank",rel:"noopener noreferrer",children:t.name})]})]}),(0,e.jsxs)("div",{className:o.bottomSection,children:[(0,e.jsx)("div",{className:o.warningIcon,children:(0,e.jsx)(Q.I,{name:"exclamation-triangle"})}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("p",{children:["Editors cannot add new connections. You may check to see if it is already configured in"," ",(0,e.jsx)("a",{href:"/connections/datasources",children:"Data sources"}),"."]}),(0,e.jsx)("p",{children:"To add a new connection, contact your Grafana admin."})]})]}),(0,e.jsx)("div",{className:o.actionsSection,children:(0,e.jsx)(C.$n,{onClick:a,children:"Okay"})})]})})}function Le({item:t}){const s=(0,f.of)(re);return(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:s.header,children:[t.logo&&(0,e.jsx)("img",{className:s.headerLogo,src:t.logo,alt:`logo of ${t.name}`}),(0,e.jsx)("h4",{className:s.headerTitle,children:t.name})]})})}var Oe=n(23172),ie=n(10354);const Be=(t,s)=>({searchContainer:(0,i.css)({display:"flex",justifyContent:"space-between",position:"sticky",top:s,backgroundColor:t.colors.background.primary,zIndex:2,padding:t.spacing(2,0)})}),Re=(0,B.t)("connections.search.placeholder","Search all"),We=({onChange:t,value:s})=>{const a=(0,Oe.k)(),o=(0,f.of)(Be,a??0);return(0,e.jsx)("div",{className:o.searchContainer,children:(0,e.jsx)(ie.p,{value:s,onChange:t,prefix:(0,e.jsx)(Q.I,{name:"search"}),placeholder:Re,"aria-label":"Search all"})})},$e=t=>({spacer:(0,i.css)({height:t.spacing(2)}),modal:(0,i.css)({width:"500px"}),modalContent:(0,i.css)({overflow:"visible"})});function Ue(){const[t,s]=(0,K.s)(),a=t.search?String(t.search):"",[o,r]=(0,D.useState)(!1),[l,c]=(0,D.useState)(null),d=(0,f.of)($e),v=P.TP.hasPermission(g.AccessControlAction.DataSourcesCreate),I=x=>{s({search:x.currentTarget.value.toLowerCase()})},{error:N,plugins:b,isLoading:L}=(0,S.PW)({keyword:a,type:j.QE.datasource}),F=(0,D.useMemo)(()=>b.map(x=>({id:x.id,name:x.name,description:x.description,logo:x.info.logos.small,url:p.b.DataSourcesDetails.replace(":id",x.id),angularDetected:x.angularDetected})),[b]),T=(x,G)=>{v||(x.preventDefault(),x.stopPropagation(),H(G))},H=x=>{r(!0),c(x)},R=()=>{r(!1),c(null)},O=(0,D.useMemo)(()=>!L&&!N&&b.length<1,[L,N,b]),J=(0,B.t)("connections.connect-data.category-header-label","Data sources");return(0,e.jsxs)(e.Fragment,{children:[l&&(0,e.jsx)(Ie,{item:l,isOpen:o,onDismiss:R}),(0,e.jsx)(We,{onChange:I,value:a}),(0,e.jsx)("div",{className:d.spacer}),(0,e.jsx)(Te,{iconName:"database",label:J}),L?(0,e.jsx)(z._,{text:"Loading..."}):N?(0,e.jsxs)("p",{children:["Error: ",N.message]}):(0,e.jsx)(be,{items:F,onClickItem:T}),O&&(0,e.jsx)(U.p,{variant:"not-found",message:(0,B.t)("connections.connect-data.empty-message","No results matching your query were found")}),(0,e.jsx)(_.E,{})]})}function we(){return(0,e.jsx)(y.YW,{navId:"connections-add-new-connection",children:(0,e.jsx)(y.YW.Contents,{children:(0,e.jsx)(Ue,{})})})}var Z=n(42418),ce=n(39938),Fe=n(50124);function ze(){const t="standalone-plugin-page-/connections/add-new-connection",{id:s}=(0,h.g)(),r=!!(0,g.useSelector)(l=>l.navIndex)[t]?t:"connections-add-new-connection";return(0,e.jsx)(Fe.V,{pluginId:s,navId:r,notFoundComponent:(0,e.jsx)(Ke,{}),notFoundNavModel:{text:"Unknown datasource",subTitle:"No datasource with this ID could be found.",active:!0}})}function Ke(){const{id:t}=(0,h.g)();return(0,e.jsxs)(Z.F,{severity:g.AppNotificationSeverity.Warning,title:"",children:["Maybe you mistyped the URL or the plugin with the id ",(0,e.jsx)(ce.E,{text:t,color:"orange"})," is unavailable.",(0,e.jsx)("br",{}),"To see a list of available datasources please ",(0,e.jsx)("a",{href:p.b.AddNewConnection,children:"click here"}),"."]})}var $=n(32264);function Ze(){const t=P.TP.hasPermission(g.AccessControlAction.DataSourcesCreate),s=(0,u.aM)();return t?(0,e.jsx)(C.z9,{icon:"plus",href:$.$.appSubUrl+s.New,children:(0,e.jsx)(B.x6,{i18nKey:"data-sources.datasource-add-button.label",children:"Add new data source"})}):null}var He=n(72109),E=n(4589),V=n(70255),Ye=n(78369),le=n(67061),de=n(11959);function ee({dataSource:t,hasWriteRights:s,hasExploreRights:a}){const o=(0,u.aM)(),r=$.$.appSubUrl+o.Edit.replace(/:uid/gi,t.uid),l=(0,f.of)(Ge);return(0,e.jsxs)(m.Z,{href:s?r:void 0,children:[(0,e.jsx)(m.Z.Heading,{children:t.name}),(0,e.jsx)(m.Z.Figure,{children:(0,e.jsx)("img",{src:t.typeLogoUrl,alt:"",height:"40px",width:"40px",className:l.logo})}),(0,e.jsx)(m.Z.Meta,{children:[t.typeName,t.url,t.isDefault&&(0,e.jsx)(Ye.v,{name:"default",colorIndex:1},"default-tag")]}),(0,e.jsxs)(m.Z.Tags,{children:[(0,e.jsx)(C.z9,{icon:"apps",fill:"outline",variant:"secondary",href:`dashboard/new-with-ds/${t.uid}`,onClick:()=>{(0,E.TR)({grafana_version:$.$.buildInfo.version,datasource_uid:t.uid,plugin_name:t.typeName,path:location.pathname})},children:"Build a dashboard"}),a&&(0,e.jsx)(C.z9,{icon:"compass",fill:"outline",variant:"secondary",className:l.button,href:(0,de.h)(t),onClick:()=>{(0,E.M1)({grafana_version:$.$.buildInfo.version,datasource_uid:t.uid,plugin_name:t.typeName,path:location.pathname})},children:"Explore"})]})]})}function ke({hasExploreRights:t}){const s=(0,f.of)(Ve);return(0,e.jsxs)(m.Z,{children:[(0,e.jsx)(m.Z.Heading,{children:(0,e.jsx)(V.A,{width:140})}),(0,e.jsx)(m.Z.Figure,{children:(0,e.jsx)(V.A,{width:40,height:40,containerClassName:s.figure})}),(0,e.jsx)(m.Z.Meta,{children:(0,e.jsx)(V.A,{width:120})}),(0,e.jsx)(m.Z.Tags,{children:(0,e.jsxs)(le.B,{direction:"row",gap:2,children:[(0,e.jsx)(V.A,{height:32,width:179,containerClassName:s.button}),t&&(0,e.jsx)(V.A,{height:32,width:107,containerClassName:s.button})]})})]})}ee.Skeleton=ke;const Ve=()=>({button:(0,i.css)({lineHeight:1}),figure:(0,i.css)({lineHeight:1})}),Ge=t=>({logo:(0,i.css)({objectFit:"contain"}),button:(0,i.css)({marginLeft:t.spacing(2)})});var Qe=n(72557);const te="alpha-asc",ue="alpha-desc",Je=[{label:"Sort by A\u2013Z",value:te},{label:"Sort by Z\u2013A",value:ue}];function Xe(){const t=(0,g.useDispatch)(),s=(0,D.useCallback)(c=>t((0,u.Bs)(c)),[t]),a=(0,g.useSelector)(({dataSources:c})=>(0,u.xs)(c)),o=(0,D.useCallback)(c=>t((0,u.Tk)(c.value===te)),[t]),r=(0,g.useSelector)(({dataSources:c})=>(0,u.lv)(c)),l={onChange:o,value:r?te:ue,getSortOptions:()=>Promise.resolve(Je)};return(0,e.jsx)(Qe.A,{searchQuery:a,setSearchQuery:s,sortPicker:l},"action-bar")}function qe(){const{isLoading:t}=(0,u.US)(),s=(0,g.useSelector)(c=>(0,u.zC)(c.dataSources)),a=(0,g.useSelector)(({dataSources:c})=>(0,u.wC)(c)),o=P.TP.hasPermission(g.AccessControlAction.DataSourcesCreate),r=P.TP.hasPermission(g.AccessControlAction.DataSourcesWrite),l=P.TP.hasAccessToExplore();return(0,e.jsx)(_e,{dataSources:s,dataSourcesCount:a,isLoading:t,hasCreateRights:o,hasWriteRights:r,hasExploreRights:l})}function _e({dataSources:t,dataSourcesCount:s,isLoading:a,hasCreateRights:o,hasWriteRights:r,hasExploreRights:l}){const c=(0,f.of)(et),d=(0,u.aM)(),v=(0,A.zy)();if((0,D.useEffect)(()=>{(0,E.kg)({grafana_version:$.$.buildInfo.version,path:v.pathname})},[v]),!a&&s===0)return(0,e.jsx)(U.p,{variant:"call-to-action",button:(0,e.jsx)(C.z9,{disabled:!o,href:d.New,icon:"database",size:"lg",children:(0,e.jsx)(B.x6,{i18nKey:"data-source-list.empty-state.button-title",children:"Add data source"})}),message:(0,B.t)("data-source-list.empty-state.title","No data sources defined"),children:(0,e.jsxs)(B.x6,{i18nKey:"data-source-list.empty-state.pro-tip",children:["You can also define data sources through configuration files."," ",(0,e.jsx)(He.Y,{external:!0,href:"http://docs.grafana.org/administration/provisioning/?utm_source=grafana_ds_list#data-sources",children:"Learn more"})]})});const I=()=>a?new Array(20).fill(null).map((N,b)=>(0,e.jsx)(ee.Skeleton,{hasExploreRights:l},b)):t.map(N=>(0,e.jsx)("li",{children:(0,e.jsx)(ee,{dataSource:N,hasWriteRights:r,hasExploreRights:l})},N.uid));return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Xe,{}),t.length===0&&!a?(0,e.jsx)(U.p,{variant:"not-found",message:(0,B.t)("data-sources.empty-state.message","No data sources found")}):(0,e.jsx)("ul",{className:c.list,children:I()})]})}const et=t=>({list:(0,i.css)({listStyle:"none",display:"grid"})});function tt(){const s=(0,g.useSelector)(({dataSources:a})=>(0,u.wC)(a))>0?(0,e.jsx)(Ze,{}):void 0;return(0,e.jsx)(y.YW,{navId:"connections-datasources",actions:s,children:(0,e.jsx)(y.YW.Contents,{children:(0,e.jsx)(qe,{})})})}var se=n(39419),ge=n(3673),st=n(20701),at=n(38348);function nt({uid:t}){(0,u.oU)(t);const s=(0,g.useDispatch)(),a=(0,g.useSelector)(d=>d.dataSources.dataSource),o=(0,g.useSelector)(d=>d.plugins.dashboards),r=(0,g.useSelector)(d=>d.plugins.isLoadingPluginDashboards);(0,D.useEffect)(()=>{a.id>0&&s((0,st.h9)())},[s,a.id]);const l=(d,v)=>{s((0,ge.Q9)({pluginId:d.pluginId,path:d.path,overwrite:v,inputs:[{name:"*",type:"datasource",pluginId:a.type,value:a.name}]},d.title))},c=({uid:d})=>{s((0,ge.TA)(d))};return(0,e.jsx)(ot,{dashboards:o,isLoading:r,onImportDashboard:l,onRemoveDashboard:c})}const ot=({isLoading:t,dashboards:s,onImportDashboard:a,onRemoveDashboard:o})=>t?(0,e.jsx)(se.A,{}):(0,e.jsx)(at.A,{dashboards:s,onImport:a,onRemove:o});var he=n(19347),pe=n(17422),ae=n(11084),ne=n(74984);function me(t){const{uid:s}=(0,h.g)(),a=(0,h.zy)(),o=(0,ae.xw)(s),r=(0,ae.S4)(o.type),l=(0,S.ob)(o.type),c=new URLSearchParams(a.search),d=t||c.get("page"),{plugin:v,loadError:I,loading:N}=(0,ae._e)(),b=(0,he.l)()?.getInstanceSettings(s),L=!!(b?.meta?.alerting??!1),F=b?.type==="alertmanager",T=L||F,H=(0,g.useSelector)(x=>x.navIndex),R=d?`datasource-${d}-${s}`:`datasource-settings-${s}`;let O={node:{text:"Data Source Nav Node"},main:{text:"Data Source Nav Node"}};if(I){const x={text:I,subTitle:"Data Source Error",icon:"exclamation-triangle"};O={node:x,main:x}}return(N||!v)&&(O=(0,pe.tc)(H,R,(0,ne.$m)("settings"))),v&&(O=(0,pe.tc)(H,R,(0,ne.Vh)((0,ne.R4)(o,v),d||"settings"))),{navId:"connections-datasources",pageNav:{...O.main,dataSourcePluginName:l?.name||v?.meta.name||"",active:!0,text:o.name,subTitle:`Type: ${r.name}`,children:(O.main.children||[]).map(x=>({...x,url:x.url?.replace("datasources/edit/","/connections/datasources/edit/")}))},dataSourceHeader:{alertingSupported:T}}}function rt(){const{uid:t}=(0,h.g)(),{navId:s,pageNav:a}=me("dashboards");return(0,e.jsx)(y.YW,{navId:s,pageNav:a,children:(0,e.jsx)(y.YW.Contents,{children:(0,e.jsx)(nt,{uid:t})})})}var oe=n(2543),it=n(69129),ct=n(74135),xe=n(76287),lt=n(3197),dt=n(28138),w=n(13544),fe=n(14186),ut=n(15292);function gt({dataSourceName:t,isDefault:s,onDefaultChange:a,onNameChange:o,disabled:r}){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",{className:"gf-form-group","aria-label":"Datasource settings page basic settings",children:(0,e.jsxs)("div",{className:"gf-form-inline",children:[(0,e.jsx)("div",{className:"gf-form max-width-30",children:(0,e.jsx)(fe.I,{label:"Name",tooltip:`The name is used when you select the data source in panels. The default data source is
              'preselected in new panels.`,grow:!0,disabled:r,labelWidth:14,children:(0,e.jsx)(ie.p,{id:"basic-settings-name",type:"text",value:t,placeholder:"Name",onChange:l=>o(l.currentTarget.value),required:!0,"data-testid":w.Tp.pages.DataSource.name})})}),(0,e.jsx)(fe.I,{label:"Default",labelWidth:8,disabled:r,children:(0,e.jsx)(ut.K,{id:"basic-settings-default",value:s,onChange:l=>{a(l.currentTarget.checked)}})})]})})})}function rs({enabled:t}){const s=useStyles2(ht);return jsx("div",{className:s.badge,children:t?jsx(Badge,{color:"green",icon:"check-circle",text:"Alerting supported"}):jsx(Badge,{color:"orange",icon:"exclamation-triangle",text:"Alerting not supported"})})}const ht=t=>({badge:css`
    margin-bottom: ${t.spacing(2)};
  `});function pt({canSave:t,canDelete:s,onDelete:a,onSubmit:o,onTest:r}){return(0,e.jsxs)("div",{className:"gf-form-button-row",children:[(0,e.jsx)(C.$n,{type:"button",variant:"destructive",disabled:!s,onClick:a,"data-testid":w.Tp.pages.DataSource.delete,children:"Delete"}),t&&(0,e.jsx)(C.$n,{type:"submit",variant:"primary",disabled:!t,onClick:o,"data-testid":w.Tp.pages.DataSource.saveAndTest,children:"Save & test"}),!t&&(0,e.jsx)(C.$n,{variant:"primary",onClick:r,children:"Test"})]})}var mt=n(61268),xt=n(61680),ft=n(2913);const vt="datasources.settings.cloudInfoBox.isDismissed";function jt({dataSource:t}){let s="",a="";if(t.readOnly||(t.version??0)>2||ft.$W.buildInfo.edition!==mt.r.OpenSource)return null;switch(t.type){case"prometheus":s="Prometheus",a="Loki";break;case"loki":s="Loki",a="Prometheus";break;default:return null}return(0,e.jsx)(xt.b,{storageKey:vt,defaultValue:!1,children:(o,r)=>o?null:(0,e.jsxs)(Z.F,{title:`Configure your ${s} data source below`,severity:"info",bottomSpacing:4,onRemove:()=>{r(!0)},children:["Or skip the effort and get ",s," (and ",a,") as fully-managed, scalable, and hosted data sources from Grafana Labs with the"," ",(0,e.jsx)("a",{className:"external-link",href:`https://grafana.com/signup/cloud/connect-account?src=grafana-oss&cnt=${t.type}-settings`,target:"_blank",rel:"noreferrer",title:"The free plan includes 10k active metrics and 50gb storage.",children:"free-forever Grafana Cloud plan"}),"."]})})}const St="This data source was added by config and cannot be modified using the UI. Please contact your server admin to update this data source.";function ve(){return(0,e.jsx)(Z.F,{"data-testid":w.Tp.pages.DataSource.readOnly,severity:"info",title:"Provisioned data source",children:St})}function yt({dataSourceRights:t,onDelete:s}){const{readOnly:a,hasDeleteRights:o}=t,r=!a&&o,l=()=>history.back();return(0,e.jsxs)(e.Fragment,{children:[a&&(0,e.jsx)(ve,{}),(0,e.jsxs)("div",{className:"gf-form-button-row",children:[r&&(0,e.jsx)(C.$n,{type:"submit",variant:"destructive",onClick:s,children:"Delete"}),(0,e.jsx)(C.$n,{variant:"secondary",fill:"outline",type:"button",onClick:l,children:"Back"})]})]})}const Dt="You are not allowed to modify this data source. Please contact your server admin to update this data source.";function Ct(){return(0,e.jsx)(Z.F,{severity:"info",title:"Missing rights",children:Dt})}function Nt({plugin:t,pageId:s}){if(!t||!t.configPages)return null;const a=t.configPages.find(({id:o})=>o===s);return a?(0,e.jsx)(a.body,{plugin:t,query:{}}):(0,e.jsxs)("div",{children:["Page not found: ",a]})}var Pt=n(7376);class Et extends D.PureComponent{constructor(s){super(s),this.element=null,this.onModelChanged=a=>{this.props.onModelChange(a)},this.scopeProps={ctrl:{datasourceMeta:s.dataSourceMeta,current:(0,oe.cloneDeep)(s.dataSource)},onModelChanged:this.onModelChanged},this.onModelChanged=this.onModelChanged.bind(this)}componentDidMount(){const{plugin:s}=this.props;if(this.element&&!s.components.ConfigEditor){const a=(0,Pt.E)(),o='<plugin-component type="datasource-config-ctrl" />';this.component=a.load(this.element,this.scopeProps,o)}}componentDidUpdate(s){const{plugin:a}=this.props;!a.components.ConfigEditor&&this.props.dataSource!==s.dataSource&&(this.scopeProps.ctrl.current=(0,oe.cloneDeep)(this.props.dataSource),this.component?.digest())}componentWillUnmount(){this.component&&this.component.destroy()}render(){const{plugin:s,dataSource:a}=this.props;return s?(0,e.jsx)("div",{ref:o=>this.element=o,children:s.components.ConfigEditor&&(0,D.createElement)(s.components.ConfigEditor,{options:a,onOptionsChange:this.onModelChanged})}):null}}var bt=n(10803);function At({state:t}){return(0,e.jsxs)("div",{className:"gf-form",children:[(0,e.jsx)("div",{className:"gf-form-label width-10",children:"Plugin state"}),(0,e.jsx)("div",{className:"gf-form-label gf-form-label--transparent",children:(0,e.jsx)(bt.p,{state:t})})]})}var je=n(50720);const Tt=(t,s)=>({content:(0,i.css)({color:t.colors.text.secondary,paddingTop:s?t.spacing(1):0,maxHeight:"50vh",overflowY:"auto"}),disabled:(0,i.css)({pointerEvents:"none",color:t.colors.text.secondary})}),Se=({title:t,exploreUrl:s,dataSourceId:a,onDashboardLinkClicked:o})=>{const r=(0,f.$j)(),c=Tt(r,!!t),d=P.TP.hasAccessToExplore();return(0,e.jsxs)("div",{className:c.content,children:["Next, you can start to visualize data by"," ",(0,e.jsx)(je.N,{"aria-label":"Create a dashboard",href:`/dashboard/new-with-ds/${a}`,className:"external-link",onClick:o,children:"building a dashboard"}),", or by querying data in the"," ",(0,e.jsx)(je.N,{"aria-label":"Explore data",className:(0,i.cx)("external-link",{[`${c.disabled}`]:!d,"test-disabled":!d}),href:s,children:"Explore view"}),"."]})};Se.displayName="AlertSuccessMessage";const Mt=new Set(["success","info","warning","error"]),It=t=>Mt.has(t),Lt=t=>t.toLowerCase()==="ok"?"success":It(t)?t:"info";function Ot({testingStatus:t,exploreUrl:s,dataSource:a}){const o=Lt(t?.status??"error"),r=t?.message,l=t?.details?.message,c=t?.details?.verboseMessage,d=()=>{(0,E.TR)({grafana_version:$.$.buildInfo.version,datasource_uid:a.uid,plugin_name:a.typeName,path:location.pathname})},v=(0,f.of)(Bt);return r?(0,e.jsx)("div",{className:(0,i.cx)("gf-form-group",v.container),children:(0,e.jsx)(Z.F,{severity:o,title:r,"data-testid":w.Tp.pages.DataSource.alert,children:t?.details&&(0,e.jsxs)(e.Fragment,{children:[l,o==="success"?(0,e.jsx)(Se,{title:r,exploreUrl:s,dataSourceId:a.uid,onDashboardLinkClicked:d}):null,c?(0,e.jsx)("details",{style:{whiteSpace:"pre-wrap"},children:String(c)}):null]})})}):null}const Bt=t=>({container:(0,i.css)({paddingTop:t.spacing(3)})});function Rt({uid:t,pageId:s}){(0,u.oU)(t);const a=(0,g.useDispatch)(),o=(0,u.xw)(t),r=(0,u.S4)(o.type),l=(0,u._e)(),c=(0,u.u1)(t),d=(0,u.Tn)(t),v=(0,u.$k)(),I=(0,u.BY)(t),N=(0,u.k9)(),b=T=>a((0,u.C_)(T)),L=T=>a((0,u.rb)(T)),F=T=>a((0,u.jz)(T));return(0,e.jsx)(Wt,{pageId:s,dataSource:o,dataSourceMeta:r,dataSourceSettings:l,dataSourceRights:c,exploreUrl:d,onDelete:v,onDefaultChange:b,onNameChange:L,onOptionsChange:F,onTest:I,onUpdate:N})}function Wt({pageId:t,dataSource:s,dataSourceMeta:a,dataSourceSettings:o,dataSourceRights:r,exploreUrl:l,onDelete:c,onDefaultChange:d,onNameChange:v,onOptionsChange:I,onTest:N,onUpdate:b}){const{plugin:L,loadError:F,testingStatus:T,loading:H}=o,{readOnly:R,hasWriteRights:O,hasDeleteRights:J}=r,x=s.id>0,G=(0,he.l)()?.getInstanceSettings(s.uid),Ne=async Y=>{Y.preventDefault(),(0,E._i)("save_and_test");try{await b({...s}),(0,E.m3)({item:"success"}),dt.A.publish(new it.wE)}catch{(0,E.m3)({item:"fail"});return}N()},as=ct.S.DataSourceConfig,{extensions:Pe}=(0,lt.kr)({extensionPointId:as}),ns=(0,D.useMemo)(()=>{const Y=["grafana-pdc-app","grafana-auth-app"];return Pe.filter(X=>Y.includes(X.pluginId))},[Pe]);return F?(0,e.jsx)(yt,{dataSourceRights:r,onDelete:()=>{(0,E._i)("delete"),c()}}):H?(0,e.jsx)(se.A,{}):!x||!G?null:t?(0,e.jsx)(xe.p,{instanceSettings:G,children:(0,e.jsx)(Nt,{pageId:t,plugin:L})}):(0,e.jsxs)("form",{onSubmit:Ne,children:[!O&&(0,e.jsx)(Ct,{}),R&&(0,e.jsx)(ve,{}),a.state&&(0,e.jsx)(At,{state:a.state}),(0,e.jsx)(jt,{dataSource:s}),(0,e.jsx)(gt,{dataSourceName:s.name,isDefault:s.isDefault,onDefaultChange:d,onNameChange:v,disabled:R||!O}),L&&(0,e.jsx)(xe.p,{instanceSettings:G,children:(0,e.jsx)(Et,{plugin:L,dataSource:s,dataSourceMeta:a,onModelChange:I})}),ns.map(Y=>{const X=Y.component;return(0,e.jsx)("div",{children:(0,e.jsx)(X,{context:{dataSource:(0,oe.omit)(s,["secureJsonData"]),dataSourceMeta:a,testingStatus:T,setJsonData:os=>I({...s,jsonData:{...s.jsonData,...os}})}})},Y.id)}),(0,e.jsx)(Ot,{testingStatus:T,exploreUrl:l,dataSource:s}),(0,e.jsx)(pt,{onSubmit:Ne,onDelete:()=>{(0,E._i)("delete"),c()},onTest:()=>{(0,E._i)("test"),N()},canDelete:!R&&J,canSave:!R&&O})]})}function $t({uid:t}){const s=(0,u.xw)(t),a=P.TP.hasAccessToExplore();return(0,e.jsxs)(e.Fragment,{children:[a&&(0,e.jsx)(C.z9,{variant:"secondary",size:"sm",href:(0,de.h)(s),onClick:()=>{(0,E._i)("explore"),(0,E.M1)({grafana_version:$.$.buildInfo.version,datasource_uid:s.uid,plugin_name:s.typeName,path:location.pathname})},children:"Explore data"}),(0,e.jsx)(C.z9,{size:"sm",variant:"secondary",href:`dashboard/new-with-ds/${s.uid}`,onClick:()=>{(0,E._i)("build_a_dashboard"),(0,E.TR)({grafana_version:$.$.buildInfo.version,datasource_uid:s.uid,plugin_name:s.typeName,path:location.pathname})},children:"Build a dashboard"})]})}const Ut=t=>{const s=[],a=t.alertingSupported;return s.push({label:"Type",value:t.dataSourcePluginName}),s.push({label:"Alerting",value:(0,e.jsx)(ce.E,{color:a?"green":"red",text:a?"Supported":"Not supported"})}),s};function wt({title:t}){const s=(0,f.of)(Ft);return(0,e.jsx)("div",{className:s.container,children:(0,e.jsx)("h1",{className:s.title,children:t})})}const Ft=t=>({container:(0,i.css)({marginBottom:t.spacing(2),h1:{display:"inline-block"}}),title:(0,i.css)({display:"inline-block",margin:"0 0 0 0",maxWidth:"40vw",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"})});function zt({uid:t,pageId:s}){const{navId:a,pageNav:o,dataSourceHeader:r}=me(),l=Ut({dataSourcePluginName:o.dataSourcePluginName,alertingSupported:r.alertingSupported});return(0,e.jsx)(y.YW,{navId:a,pageNav:o,renderTitle:c=>(0,e.jsx)(wt,{title:c}),info:l,actions:(0,e.jsx)($t,{uid:t}),children:(0,e.jsx)(y.YW.Contents,{children:(0,e.jsx)(Rt,{uid:t,pageId:s})})})}const Kt=zt;function Zt(){const{uid:t}=(0,h.g)(),s=(0,h.zy)(),o=new URLSearchParams(s.search).get("page");return(0,e.jsx)(Kt,{uid:t,pageId:o})}var Ht=n(67647),ye=n(33552),De=n(98624);function Yt({filterByPluginType:t}){let s=(0,S.F9)(t);const{isLoading:a}=(0,S.m5)(),o=(0,f.of)(Vt);return a||s.length===0?null:(0,e.jsxs)(Z.F,{title:"Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins.","data-testid":w.Tp.pages.PluginsList.signatureErrorNotice,severity:"warning",children:[(0,e.jsx)("p",{children:"The following plugins are disabled and not shown in the list below:"}),(0,e.jsx)(ye.B,{items:s,className:o.list,renderItem:r=>(0,e.jsx)("div",{className:o.wrapper,children:(0,e.jsxs)(le.B,{justifyContent:"flex-start",alignItems:"center",children:[(0,e.jsx)("strong",{children:r.pluginId}),(0,e.jsx)(De.B,{status:kt(r.errorCode),className:o.badge})]})})}),(0,e.jsxs)("a",{href:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",className:o.docsLink,target:"_blank",rel:"noreferrer",children:[(0,e.jsx)(Q.I,{name:"book"})," Read more about plugin signing"]})]})}function kt(t){switch(t){case j.ZK.invalidSignature:return j.Ac.invalid;case j.ZK.missingSignature:return j.Ac.missing;case j.ZK.modifiedSignature:return j.Ac.modified;default:return j.Ac.missing}}function Vt(t){return{list:(0,i.css)({listStyleType:"circle"}),wrapper:(0,i.css)({marginTop:t.spacing(1)}),badge:(0,i.css)({marginTop:0}),docsLink:(0,i.css)({display:"inline-block",color:t.colors.text.link,marginTop:t.spacing(2)})}}function Gt({onClick:t,dataSourcePlugin:s}){const a=s.module==="phantom",o=!a&&!s.unlicensed,r=s.info?.links?.length>0?s.info.links[0]:null,l=r?.target??"_blank",c=(0,f.of)(Qt);return(0,e.jsxs)(m.Z,{className:(0,i.cx)(c.card,"card-parent"),onClick:o?t:()=>{},children:[(0,e.jsx)(m.Z.Heading,{className:c.heading,"aria-label":w.Tp.pages.AddDataSource.dataSourcePluginsV2(s.name),children:s.name}),(0,e.jsx)(m.Z.Figure,{align:"center",className:c.figure,children:(0,e.jsx)("img",{className:c.logo,src:s.info.logos.small,alt:""})}),(0,e.jsx)(m.Z.Description,{className:c.description,children:s.info.description}),!a&&(0,e.jsx)(m.Z.Meta,{className:c.meta,children:(0,e.jsx)(De.B,{status:s.signature})}),(0,e.jsx)(m.Z.Actions,{className:c.actions,children:r&&(0,e.jsx)(C.z9,{"aria-label":`${s.name}, learn more.`,href:`${r.url}?utm_source=grafana_add_ds`,onClick:d=>d.stopPropagation(),rel:"noopener",target:l,variant:"secondary",children:r.name})})]})}function Qt(t){return{heading:(0,i.css)({fontSize:t.v1.typography.heading.h5,fontWeight:"inherit"}),figure:(0,i.css)({width:"inherit",marginRight:"0px","> img":{width:t.spacing(7)}}),meta:(0,i.css)({marginTop:"6px",position:"relative"}),description:(0,i.css)({margin:"0px",fontSize:t.typography.size.sm}),actions:(0,i.css)({position:"relative",alignSelf:"center",marginTop:"0px",opacity:0,".card-parent:hover &, .card-parent:focus-within &":{opacity:1}}),card:(0,i.css)({gridTemplateAreas:`
        "Figure   Heading   Actions"
        "Figure Description Actions"
        "Figure    Meta     Actions"
        "Figure     -       Actions"`}),logo:(0,i.css)({marginRight:t.v1.spacing.lg,marginLeft:t.v1.spacing.sm,width:t.spacing(7),maxHeight:t.spacing(7)})}}function Ce({dataSourcePlugins:t,onClickDataSourceType:s}){return!t||!t.length?null:(0,e.jsx)(ye.B,{items:t,getItemKey:a=>a.id.toString(),renderItem:a=>(0,e.jsx)(Gt,{dataSourcePlugin:a,onClick:()=>s(a)}),className:(0,i.css)`
        > li {
          margin-bottom: 2px;
        }
      `})}function Jt({categories:t,onClickDataSourceType:s}){const a=`${p.b.AddNewConnection}?cat=data-source`,o=(0,f.of)(Xt);return(0,e.jsxs)(e.Fragment,{children:[t.map(({id:r,title:l,plugins:c})=>(0,e.jsxs)("div",{className:o.category,children:[(0,e.jsx)("div",{className:o.header,id:r,children:l}),(0,e.jsx)(Ce,{dataSourcePlugins:c,onClickDataSourceType:s})]},r)),(0,e.jsx)("div",{className:o.more,children:(0,e.jsx)(C.z9,{variant:"secondary",href:a,target:"_self",rel:"noopener",children:"Find more data source plugins"})})]})}const Xt=t=>({category:(0,i.css)({marginBottom:t.spacing(2)}),header:(0,i.css)({fontSize:t.typography.h5.fontSize,marginBottom:t.spacing(1)}),more:(0,i.css)({margin:t.spacing(4),textAlign:"center"})});function qt(){(0,u.hx)();const t=(0,g.useDispatch)(),s=(0,g.useSelector)(d=>(0,u.hp)(d.dataSources)),a=(0,g.useSelector)(d=>d.dataSources.dataSourceTypeSearchQuery),o=(0,g.useSelector)(d=>d.dataSources.isLoadingDataSourcePlugins),r=(0,g.useSelector)(d=>d.dataSources.categories),l=(0,u.Um)(),c=d=>t((0,u.eB)(d));return(0,e.jsx)(_t,{dataSources:s,dataSourceCategories:r,searchQuery:a,isLoading:o,onAddDataSource:l,onSetSearchQuery:c})}function _t({dataSources:t,dataSourceCategories:s,searchQuery:a,isLoading:o,onAddDataSource:r,onSetSearchQuery:l}){const c=(0,u.aM)();return o?(0,e.jsx)(se.A,{}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"page-action-bar",children:[(0,e.jsx)(Ht.Z,{value:a,onChange:l,placeholder:"Filter by name or type"}),(0,e.jsx)("div",{className:"page-action-bar__spacer"}),(0,e.jsx)(C.z9,{href:c.List,fill:"outline",variant:"secondary",icon:"arrow-left",children:"Cancel"})]}),!a&&(0,e.jsx)(Yt,{filterByPluginType:j.QE.datasource}),(0,e.jsxs)("div",{children:[a&&(0,e.jsx)(Ce,{dataSourcePlugins:t,onClickDataSourceType:r}),!a&&(0,e.jsx)(Jt,{categories:s,onClickDataSourceType:r})]})]})}function es(){return(0,e.jsx)(y.YW,{navId:"connections-datasources",pageNav:{text:"Add data source",subTitle:"Choose a data source type",active:!0},children:(0,e.jsx)(y.YW.Contents,{children:(0,e.jsx)(qt,{})})})}function ts(){const{search:t}=(0,h.zy)();return(0,e.jsx)(A.C5,{replace:!0,to:{pathname:p.b.AddNewConnection,search:t}})}function ss(){const s=!!(0,g.useSelector)(a=>a.navIndex)["standalone-plugin-page-/connections/add-new-connection"];return(0,e.jsx)(u.CR.Provider,{value:{New:p.b.DataSourcesNew,List:p.b.DataSources,Edit:p.b.DataSourcesEdit,Dashboards:p.b.DataSourcesDashboards},children:(0,e.jsxs)(h.dO,{children:[(0,e.jsx)(h.qh,{exact:!0,sensitive:!0,path:p.b.Base,component:()=>(0,e.jsx)(A.C5,{replace:!0,to:p.b.AddNewConnection})}),(0,e.jsx)(h.qh,{exact:!0,sensitive:!0,path:p.b.DataSources,component:tt}),(0,e.jsx)(h.qh,{exact:!0,sensitive:!0,path:p.b.DataSourcesNew,component:es}),(0,e.jsx)(h.qh,{exact:!0,sensitive:!0,path:p.b.DataSourcesDetails,component:ze}),(0,e.jsx)(h.qh,{exact:!0,sensitive:!0,path:p.b.DataSourcesEdit,component:Zt}),(0,e.jsx)(h.qh,{exact:!0,sensitive:!0,path:p.b.DataSourcesDashboards,component:rt}),!s&&(0,e.jsx)(h.qh,{exact:!0,sensitive:!0,path:p.b.AddNewConnection,component:we}),(0,e.jsx)(h.qh,{exact:!0,path:p.b.ConnectDataOutdated,component:ts}),(0,e.jsx)(h.qh,{path:`${p.b.Base}/your-connections/:page`,component:()=>(0,e.jsx)(A.C5,{replace:!0,to:`${p.b.Base}/:page`})}),(0,e.jsx)(h.qh,{path:p.b.YourConnectionsOutdated,component:()=>(0,e.jsx)(A.C5,{replace:!0,to:p.b.DataSources})}),(0,e.jsx)(h.qh,{component:()=>(0,e.jsx)(A.C5,{replace:!0,to:"/notfound"})})]})})}},3673:(q,W,n)=>{n.d(W,{Bz:()=>K,Q9:()=>U,Ss:()=>_,TA:()=>P,lC:()=>B});var e=n(17172),h=n(82467),A=n(3169),u=n(28676),g=n(6473),p=n(80095),y=n(81862),i=n(20701),D=n(72401),j=n(14792),f=n(74856),z=n(28601);function U(S,M){return async m=>{await(0,e.AI)().post("/api/dashboards/import",S),m((0,h.dx)((0,A.tZ)("Dashboard Imported",M))),m((0,i.h9)())}}function P(S){return async M=>{await(0,u.n)().deleteDashboard(S,!1),M((0,i.h9)())}}const K=()=>(S,M)=>{const k=M().dashboard.getModel();k&&(k.destroy(),S((0,D.Y7)(k.uid))),(0,f.jG)().stopAutoRefresh(),S((0,z.p0)()),S((0,p.rG)()),g.t.leave(),(0,j.UA)().setCurrent(void 0)},B=S=>M=>{M((0,y.Cj)(S)),(0,f.jG)().refreshTimeModel()},_=S=>M=>{M((0,y.xu)(S)),(0,f.jG)().refreshTimeModel()}},31036:(q,W,n)=>{n.d(W,{E:()=>p});var e=n(74848),h=n(14110),A=n(68402),u=n(72109),g=n(8484);const p=()=>(0,e.jsxs)("div",{children:[(0,e.jsx)(A.$,{v:2}),(0,e.jsx)(u.Y,{href:"https://github.com/grafana/grafana/issues/new?assignees=&labels=area%2Fdatasource%2Ctype%2Fnew-plugin-request&projects=&template=3-data_source_request.yaml&title=%5BNew+Data+Source%5D%3A+%3Cname-of-service%3E",onClick:()=>(0,h.rR)("connections_data_source_request_clicked"),external:!0,children:(0,e.jsx)(g.x6,{i18nKey:"connections.connect-data.request-data-source",children:"Request a new data source"})}),(0,e.jsx)("br",{}),(0,e.jsx)(u.Y,{href:"https://github.com/orgs/grafana/projects/619/views/1?pane=info",onClick:()=>(0,h.rR)("connections_data_source_roadmap_clicked"),external:!0,children:(0,e.jsx)(g.x6,{i18nKey:"connections.connect-data.roadmap",children:"View roadmap"})})]})}}]);

//# sourceMappingURL=Connections.e0eda96e0598ac758584.js.map