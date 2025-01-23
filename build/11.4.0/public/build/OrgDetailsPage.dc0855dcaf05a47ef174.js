"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1510],{72235:(z,p,e)=>{e.d(p,{l:()=>D});var a=e(74848),P=e(32196),M=e(96540),x=e(49785);function D({defaultValues:c,onSubmit:i,validateOnMount:E=!1,validateFieldsOnMount:l,children:h,validateOn:O="onSubmit",maxWidth:m=600,...U}){const{handleSubmit:A,trigger:g,formState:y,...v}=(0,x.mN)({mode:O,defaultValues:c});return(0,M.useEffect)(()=>{E&&g(l)},[g,l,E]),(0,a.jsx)("form",{className:(0,P.css)({maxWidth:m!=="none"?m+"px":m,width:"100%"}),onSubmit:A(i),...U,children:h({errors:y.errors,formState:y,trigger:g,...v})})}},39745:(z,p,e)=>{e.d(p,{A:()=>f,u:()=>I});var a=e(74848),P=e(32196),M=e(96540),x=e(97594),D=e(41987),c=e(13544),i=e(14110),E=e(32264),l=e(84167),h=e(88575),O=e(60029),m=e(20333),U=e(15648),A=e(29678),g=e(55852),y=e(3911),v=e(55014),j=e(59429),n=e(8484),C=e(74513),S=e(65615),L=e(2769);function N(){const r=C.Yj.map(t=>({value:t.code,label:t.name})).sort((t,u)=>t.value===C.wi?1:u.value===C.wi?-1:t.label.localeCompare(u.label));return[{value:"",label:(0,n.t)("common.locale.default","Default")},...r]}class I extends M.PureComponent{constructor(s){super(s),this.onSubmitForm=async t=>{if(t.preventDefault(),this.props.onConfirm?await this.props.onConfirm():!0){const{homeDashboardUID:R,theme:K,timezone:B,weekStart:_,language:W,queryHistory:b,navbar:d}=this.state;await this.service.update({homeDashboardUID:R,theme:K,timezone:B,weekStart:_,language:W,queryHistory:b,navbar:d}),window.location.reload()}},this.onThemeChanged=t=>{t&&(this.setState({theme:t.value}),t.value&&(0,L.K)(t.value,!0))},this.onTimeZoneChanged=t=>{typeof t=="string"&&this.setState({timezone:t})},this.onWeekStartChanged=t=>{this.setState({weekStart:t})},this.onHomeDashboardChanged=t=>{this.setState({homeDashboardUID:t})},this.onLanguageChanged=t=>{this.setState({language:t}),(0,i.rR)("grafana_preferences_language_changed",{toLanguage:t,preferenceType:this.props.preferenceType})},this.service=new S.W(s.resourceUri),this.state={theme:"",timezone:"",weekStart:"",language:"",queryHistory:{homeTab:""},navbar:{bookmarkUrls:[]}},this.themeOptions=(0,x.k)(E.$.featureToggles.extraThemes).map(t=>({value:t.id,label:T(t)})),this.themeOptions.unshift({value:"",label:(0,n.t)("shared-preferences.theme.default-label","Default")})}async componentDidMount(){const s=await this.service.load();this.setState({homeDashboardUID:s.homeDashboardUID,theme:s.theme,timezone:s.timezone,weekStart:s.weekStart,language:s.language,queryHistory:s.queryHistory,navbar:s.navbar})}render(){const{theme:s,timezone:t,weekStart:u,homeDashboardUID:R,language:K}=this.state,{disabled:B}=this.props,_=o(),W=N(),b=this.themeOptions.find(d=>d.value===s)??this.themeOptions[0];return(0,a.jsxs)("form",{onSubmit:this.onSubmitForm,className:_.form,children:[(0,a.jsxs)(l.n,{label:(0,a.jsx)(n.x6,{i18nKey:"shared-preferences.title",children:"Preferences"}),disabled:B,children:[(0,a.jsx)(h.D,{label:(0,n.t)("shared-preferences.fields.theme-label","Interface theme"),children:(0,a.jsx)(v.G,{options:this.themeOptions,value:b.value,onChange:this.onThemeChanged,id:"shared-preferences-theme-select"})}),(0,a.jsx)(h.D,{label:(0,a.jsx)(O.J,{htmlFor:"home-dashboard-select",children:(0,a.jsx)("span",{className:_.labelText,children:(0,a.jsx)(n.x6,{i18nKey:"shared-preferences.fields.home-dashboard-label",children:"Home Dashboard"})})}),"data-testid":"User preferences home dashboard drop down",children:(0,a.jsx)(j.b,{value:R,onChange:d=>this.onHomeDashboardChanged(d?.uid??""),defaultOptions:!0,isClearable:!0,placeholder:(0,n.t)("shared-preferences.fields.home-dashboard-placeholder","Default dashboard"),inputId:"home-dashboard-select"})}),(0,a.jsx)(h.D,{label:(0,n.t)("shared-dashboard.fields.timezone-label","Timezone"),"data-testid":c.Tp.components.TimeZonePicker.containerV2,children:(0,a.jsx)(m.U,{includeInternal:!0,value:t,onChange:this.onTimeZoneChanged,inputId:"shared-preferences-timezone-picker"})}),(0,a.jsx)(h.D,{label:(0,n.t)("shared-preferences.fields.week-start-label","Week start"),"data-testid":c.Tp.components.WeekStartPicker.containerV2,children:(0,a.jsx)(U.l,{value:u||"",onChange:this.onWeekStartChanged,inputId:"shared-preferences-week-start-picker"})}),(0,a.jsx)(h.D,{label:(0,a.jsxs)(O.J,{htmlFor:"locale-select",children:[(0,a.jsx)("span",{className:_.labelText,children:(0,a.jsx)(n.x6,{i18nKey:"shared-preferences.fields.locale-label",children:"Language"})}),(0,a.jsx)(A.y,{featureState:D.Ay.beta})]}),"data-testid":"User preferences language drop down",children:(0,a.jsx)(v.G,{value:W.find(d=>d.value===K)?.value||"",onChange:d=>this.onLanguageChanged(d?.value??""),options:W,placeholder:(0,n.t)("shared-preferences.fields.locale-placeholder","Choose language"),id:"locale-select"})})]}),(0,a.jsx)(g.$n,{type:"submit",variant:"primary","data-testid":c.Tp.components.UserProfile.preferencesSaveButton,children:(0,a.jsx)(n.x6,{i18nKey:"common.save",children:"Save"})})]})}}const f=I,o=(0,y.N)(()=>({labelText:(0,P.css)({marginRight:"6px"}),form:(0,P.css)({width:"100%",maxWidth:"600px"})}));function T(r){switch(r.id){case"dark":return(0,n.t)("shared.preferences.theme.dark-label","Dark");case"light":return(0,n.t)("shared.preferences.theme.light-label","Light");case"system":return(0,n.t)("shared.preferences.theme.system-label","System preference");default:return r.name}}},69047:(z,p,e)=>{e.r(p),e.d(p,{OrgDetailsPage:()=>C,default:()=>I});var a=e(74848),P=e(96540),M=e(71468),x=e(67061),D=e(21780),c=e(39745),i=e(10096),E=e(17422),l=e(31678),h=e(28444),O=e(84167),m=e(88575),U=e(10354),A=e(55852),g=e(72235);const v=({onSubmit:f,orgName:o})=>{const T=i.TP.hasPermission(l.AccessControlAction.OrgsWrite);return(0,a.jsx)(g.l,{defaultValues:{orgName:o},onSubmit:({orgName:r})=>f(r),children:({register:r})=>(0,a.jsxs)(O.n,{label:"Organization profile",disabled:!T,children:[(0,a.jsx)(m.D,{label:"Organization name",children:(0,a.jsx)(U.p,{id:"org-name-input",type:"text",...r("orgName",{required:!0})})}),(0,a.jsx)(A.$n,{type:"submit",children:"Update organization name"})]})})};var j=e(32931),n=e(10943);class C extends P.PureComponent{constructor(){super(...arguments),this.onUpdateOrganization=o=>{this.props.setOrganizationName(o),this.props.updateOrganization()},this.handleConfirm=()=>new Promise(o=>{i.lE.publish(new h.bY({title:"Confirm preferences update",text:"This will update the preferences for the whole organization. Are you sure you want to update the preferences?",yesText:"Save",yesButtonVariant:"primary",onConfirm:async()=>o(!0),onDismiss:async()=>o(!1)}))})}async componentDidMount(){await this.props.loadOrganization()}render(){const{navModel:o,organization:T}=this.props,r=Object.keys(T).length===0,s=i.TP.hasPermission(l.AccessControlAction.OrgsRead),t=i.TP.hasPermission(l.AccessControlAction.OrgsPreferencesRead),u=i.TP.hasPermission(l.AccessControlAction.OrgsPreferencesWrite);return(0,a.jsx)(D.YW,{navModel:o,children:(0,a.jsx)(D.YW.Contents,{isLoading:r,children:!r&&(0,a.jsxs)(x.B,{direction:"column",gap:3,children:[s&&(0,a.jsx)(v,{onSubmit:this.onUpdateOrganization,orgName:T.name}),t&&(0,a.jsx)(c.A,{resourceUri:"org",disabled:!u,preferenceType:"org",onConfirm:this.handleConfirm})]})})})}}function S(f){return{navModel:(0,E.tc)(f.navIndex,"org-settings"),organization:f.organization.organization}}const L={loadOrganization:j.YS,setOrganizationName:n.n,updateOrganization:j.L_},I=(0,M.connect)(S,L)(C)}}]);

//# sourceMappingURL=OrgDetailsPage.dc0855dcaf05a47ef174.js.map