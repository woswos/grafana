"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8054],{89062:(ds,L,t)=>{t.d(L,{y:()=>c});var s=t(74848),d=t(96540),B=t(41053),M=t(10096),T=t(31678),S=t(37425),R=t(85927);const c=({basicRole:h,roles:b,userId:m,orgId:y,onBasicRoleChange:$,roleOptions:J,disabled:Q,basicRoleDisabled:r,basicRoleDisabledMessage:K,apply:U=!1,onApplyRoles:D,pendingRoles:E,maxWidth:G,width:V,isLoading:w})=>{const[{loading:Y,value:F=b||[]},W]=(0,B.A)(async()=>{try{if(b)return b;if(U&&E?.length)return E;if(M.TP.hasPermission(T.AccessControlAction.ActionUserRolesList)&&m>0)return await(0,R.Xh)(m,y)}catch{console.error("Error loading options")}return[]},[y,m,E,b]);(0,d.useEffect)(()=>{y&&W()},[W,y]);const q=async I=>{U?D&&D(I,m,y):(await(0,R.eA)(I,m,y),await W())},_=M.TP.hasPermission(T.AccessControlAction.ActionUserRolesAdd)&&M.TP.hasPermission(T.AccessControlAction.ActionUserRolesRemove);return(0,s.jsx)(S.n,{appliedRoles:F,basicRole:h,onRolesChange:q,onBasicRoleChange:$,roleOptions:J,isLoading:Y||w,disabled:Q,basicRoleDisabled:r,basicRoleDisabledMessage:K,showBasicRole:!0,apply:U,canUpdateRoles:_,maxWidth:G,width:V})}},5133:(ds,L,t)=>{t.d(L,{r:()=>S});var s=t(74848),d=t(62625),B=t(90182);const T=Object.values(d.X).filter(R=>R!==d.X.None).map(R=>({label:R,value:R}));function S({value:R,onChange:c,"aria-label":h,inputId:b,autoFocus:m,...y}){return(0,s.jsx)(B.l6,{inputId:b,value:R,options:T,onChange:$=>c($.value??d.X.None),placeholder:"Choose role...","aria-label":h,autoFocus:m,...y})}},34562:(ds,L,t)=>{t.r(L),t.d(L,{UserAdminPage:()=>us,default:()=>$s});var s=t(74848),d=t(96540),B=t(71468),M=t(54148),T=t(33378),S=t(67061),R=t(21780),c=t(10096),h=t(31678),b=t(72724),m=t(55852),y=t(46334);const $="dddd YYYY-MM-DD HH:mm zz",J="/admin/authentication/ldap";class Q extends d.PureComponent{constructor(){super(...arguments),this.onUserSync=()=>{this.props.onUserSync()}}render(){const{ldapSyncInfo:e,user:o}=this.props,a=e&&e.nextSync?(0,b.LE)(e.nextSync,{format:$}):"",l=`${J}?user=${o&&o.login}`,g=c.TP.hasPermission(h.AccessControlAction.LDAPUsersRead),u=c.TP.hasPermission(h.AccessControlAction.LDAPUsersSync);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{className:"page-heading",children:"LDAP Synchronisation"}),(0,s.jsxs)("div",{className:"gf-form-group",children:[(0,s.jsx)("div",{className:"gf-form",children:(0,s.jsx)("table",{className:"filter-table form-inline",children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"External sync"}),(0,s.jsx)("td",{children:"User synced via LDAP. Some changes must be done in LDAP or mappings."}),(0,s.jsx)("td",{children:(0,s.jsx)(y.E,{label:"LDAP",removeIcon:!1,count:0,onClick:void 0})})]}),(0,s.jsx)("tr",{children:e.enabled?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("td",{children:"Next scheduled synchronization"}),(0,s.jsx)("td",{colSpan:2,children:a})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("td",{children:"Next scheduled synchronization"}),(0,s.jsx)("td",{colSpan:2,children:"Not enabled"})]})})]})})}),(0,s.jsxs)("div",{className:"gf-form-button-row",children:[u&&(0,s.jsx)(m.$n,{variant:"secondary",onClick:this.onUserSync,children:"Sync user"}),g&&(0,s.jsx)(m.z9,{variant:"secondary",href:l,children:"Debug LDAP Mapping"})]})]})]})}}var r=t(32196),K=t(3911),U=t(82702),D=t(40845),E=t(37390),G=t(88575),V=t(56034),w=t(14578),Y=t(89062),F=t(85927),W=t(41053),q=t(17172),_=t(90182);function I(n){return{value:n,label:n.name}}function ps({onSelected:n,className:e,inputId:o,autoFocus:i,excludeOrgs:a,defaultOrganization:l}){const[g,u]=(0,d.useState)(l?I(l):void 0);(0,d.useEffect)(()=>{i&&o&&document.getElementById(o)?.focus()},[i,o]);const[P,f]=(0,W.A)(async()=>{const x=(await(0,q.AI)().get("/api/orgs")).map(I);if(a){let v=a.map(O=>O.orgId);return x.filter(O=>O.value!==void 0&&!v.includes(O.value.id))}else return x});return(0,s.jsx)(_.DW,{inputId:o,className:e,isLoading:P.loading,defaultOptions:!0,loadOptions:f,filterOption:(p,x)=>{const v=x.toLowerCase();return!!p.value?.name.toLowerCase().includes(v)},onChange:p=>{n(p),u(p)},value:g,placeholder:"Select organization",noOptionsMessage:"No organizations found"})}var fs=t(5133);class xs extends d.PureComponent{constructor(){super(...arguments),this.addToOrgButtonRef=(0,d.createRef)(),this.state={showAddOrgModal:!1},this.showOrgAddModal=()=>{this.setState({showAddOrgModal:!0})},this.dismissOrgAddModal=()=>{this.setState({showAddOrgModal:!1},()=>{this.addToOrgButtonRef.current?.focus()})}}render(){const{user:e,orgs:o,isExternalUser:i,onOrgRoleChange:a,onOrgRemove:l,onOrgAdd:g}=this.props,{showAddOrgModal:u}=this.state,P=c.TP.hasPermission(h.AccessControlAction.OrgUsersAdd)&&!i;return(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"page-heading",children:"Organizations"}),(0,s.jsxs)(S.B,{gap:1.5,direction:"column",children:[(0,s.jsx)("table",{className:"filter-table form-inline",children:(0,s.jsx)("tbody",{children:o.map((f,p)=>(0,s.jsx)(js,{isExternalUser:i,user:e,org:f,onOrgRoleChange:a,onOrgRemove:l},`${f.orgId}-${p}`))})}),(0,s.jsx)("div",{children:P&&(0,s.jsx)(m.$n,{variant:"secondary",onClick:this.showOrgAddModal,ref:this.addToOrgButtonRef,children:"Add user to organization"})}),(0,s.jsx)(Rs,{user:e,userOrgs:o,isOpen:u,onOrgAdd:g,onDismiss:this.dismissOrgAddModal})]})]})}}const Cs=(0,K.N)(n=>({removeButton:(0,r.css)({marginRight:"0.6rem",textDecoration:"underline",color:n.v1.palette.blue95}),label:(0,r.css)({fontWeight:500}),disabledTooltip:(0,r.css)({display:"flex"}),tooltipItem:(0,r.css)({marginLeft:"5px"}),tooltipItemLink:(0,r.css)({color:n.v1.palette.blue95}),rolePickerWrapper:(0,r.css)({display:"flex"}),rolePicker:(0,r.css)({flex:"auto",marginRight:n.spacing(1)})}));class vs extends d.PureComponent{constructor(){super(...arguments),this.state={currentRole:this.props.org.role,isChangingRole:!1,roleOptions:[]},this.onOrgRemove=async()=>{const{org:e}=this.props;this.props.onOrgRemove(e.orgId)},this.onChangeRoleClick=()=>{const{org:e}=this.props;this.setState({isChangingRole:!0,currentRole:e.role})},this.onOrgRoleChange=e=>{this.setState({currentRole:e})},this.onOrgRoleSave=()=>{this.props.onOrgRoleChange(this.props.org.orgId,this.state.currentRole)},this.onCancelClick=()=>{this.setState({isChangingRole:!1})},this.onBasicRoleChange=e=>{this.props.onOrgRoleChange(this.props.org.orgId,e)}}componentDidMount(){c.TP.licensedAccessControlEnabled()&&c.TP.hasPermission(h.AccessControlAction.ActionRolesList)&&(0,F.RL)(this.props.org.orgId).then(e=>this.setState({roleOptions:e})).catch(e=>console.error(e))}render(){const{user:e,org:o,isExternalUser:i,theme:a}=this.props,l=e?.authLabels?.length&&e?.authLabels[0],g=l?`Synced via ${l}`:"",{currentRole:u,isChangingRole:P}=this.state,f=Cs(a),p=(0,r.cx)("width-16",f.label),x=c.TP.hasPermission(h.AccessControlAction.OrgUsersWrite),v=c.TP.hasPermission(h.AccessControlAction.OrgUsersRemove)&&!i,O=i||!x,N=`${o.name}-input`;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:p,children:(0,s.jsx)("label",{htmlFor:N,children:o.name})}),c.TP.licensedAccessControlEnabled()?(0,s.jsx)("td",{children:(0,s.jsxs)("div",{className:f.rolePickerWrapper,children:[(0,s.jsx)("div",{className:f.rolePicker,children:(0,s.jsx)(Y.y,{userId:e?.id||0,orgId:o.orgId,basicRole:o.role,roleOptions:this.state.roleOptions,onBasicRoleChange:this.onBasicRoleChange,basicRoleDisabled:O,basicRoleDisabledMessage:`This user's role is not editable because it is synchronized from your auth provider.
                    Refer to the Grafana authentication docs for details.`})}),i&&(0,s.jsx)(hs,{lockMessage:g})]})}):(0,s.jsxs)(s.Fragment,{children:[P?(0,s.jsx)("td",{children:(0,s.jsx)(fs.r,{inputId:N,value:u,onChange:this.onOrgRoleChange,autoFocus:!0})}):(0,s.jsx)("td",{className:"width-25",children:o.role}),(0,s.jsx)("td",{colSpan:1,children:x&&(0,s.jsx)(Os,{lockMessage:g,isExternalUser:i,onChangeRoleClick:this.onChangeRoleClick,onCancelClick:this.onCancelClick,onOrgRoleSave:this.onOrgRoleSave})})]}),(0,s.jsx)("td",{colSpan:1,children:v&&(0,s.jsx)(U.Z,{confirmText:"Confirm removal",confirmVariant:"destructive",onCancel:this.onCancelClick,onConfirm:this.onOrgRemove,children:"Remove from organization"})})]})}}const js=(0,D.cV)(vs),As=(0,K.N)(()=>({modal:(0,r.css)({width:"500px"}),buttonRow:(0,r.css)({textAlign:"center"}),modalContent:(0,r.css)({overflow:"visible"})}));class Rs extends d.PureComponent{constructor(){super(...arguments),this.state={selectedOrg:null,role:h.OrgRole.Viewer,roleOptions:[],pendingOrgId:null,pendingUserId:null,pendingRoles:[]},this.onOrgSelect=e=>{const o=this.props.userOrgs.find(i=>i.orgId===e.value?.id);this.setState({selectedOrg:e.value,role:o?.role||h.OrgRole.Viewer}),c.TP.licensedAccessControlEnabled()&&c.TP.hasPermission(h.AccessControlAction.ActionRolesList)&&(0,F.RL)(e.value?.id).then(i=>this.setState({roleOptions:i})).catch(i=>console.error(i))},this.onOrgRoleChange=e=>{this.setState({role:e})},this.onAddUserToOrg=async()=>{const{selectedOrg:e,role:o}=this.state;this.props.onOrgAdd(e.id,o),c.TP.licensedAccessControlEnabled()&&c.TP.hasPermission(h.AccessControlAction.ActionUserRolesAdd)&&this.state.pendingUserId&&(await(0,F.eA)(this.state.pendingRoles,this.state.pendingUserId,this.state.pendingOrgId),this.setState({pendingOrgId:null,pendingRoles:[],pendingUserId:null}))},this.onCancel=()=>{this.setState({selectedOrg:null,pendingRoles:[],pendingOrgId:null,pendingUserId:null}),this.props.onDismiss&&this.props.onDismiss()},this.onRoleUpdate=async(e,o,i)=>{this.setState({pendingRoles:e,pendingOrgId:i,pendingUserId:o})}}render(){const{isOpen:e,user:o,userOrgs:i}=this.props,{role:a,roleOptions:l,selectedOrg:g}=this.state,u=As();return(0,s.jsxs)(E.a,{className:u.modal,contentClassName:u.modalContent,title:"Add to an organization",isOpen:e,onDismiss:this.onCancel,children:[(0,s.jsx)(G.D,{label:"Organization",children:(0,s.jsx)(ps,{inputId:"new-org-input",onSelected:this.onOrgSelect,excludeOrgs:i,autoFocus:!0})}),(0,s.jsx)(G.D,{label:"Role",disabled:g===null,children:(0,s.jsx)(Y.y,{userId:o?.id||0,orgId:g?.id,basicRole:a,onBasicRoleChange:this.onOrgRoleChange,basicRoleDisabled:!1,roleOptions:l,apply:!0,onApplyRoles:this.onRoleUpdate,pendingRoles:this.state.pendingRoles})}),(0,s.jsx)(E.a.ButtonRow,{children:(0,s.jsxs)(S.B,{gap:2,justifyContent:"center",children:[(0,s.jsx)(m.$n,{variant:"secondary",fill:"outline",onClick:this.onCancel,children:"Cancel"}),(0,s.jsx)(m.$n,{variant:"primary",disabled:g===null,onClick:this.onAddUserToOrg,children:"Add to organization"})]})})]})}}const Ps=n=>({disabledTooltip:(0,r.css)({display:"flex"}),tooltipItemLink:(0,r.css)({color:n.v1.palette.blue95}),lockMessageClass:(0,r.css)({fontStyle:"italic",marginLeft:"1.8rem",marginRight:"0.6rem"}),icon:(0,r.css)({lineHeight:2})});function Os({lockMessage:n,onChangeRoleClick:e,isExternalUser:o,onOrgRoleSave:i,onCancelClick:a}){const l=(0,D.of)(Ps);return(0,s.jsx)("div",{className:l.disabledTooltip,children:o?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:l.lockMessageClass,children:n}),(0,s.jsx)(V.m,{placement:"right-end",interactive:!0,content:(0,s.jsxs)("div",{children:["This user's role is not editable because it is synchronized from your auth provider. Refer to the\xA0",(0,s.jsx)("a",{className:l.tooltipItemLink,href:"https://grafana.com/docs/grafana/latest/auth",rel:"noreferrer",target:"_blank",children:"Grafana authentication docs"}),"\xA0for details."]}),children:(0,s.jsx)("div",{className:l.icon,children:(0,s.jsx)(w.I,{name:"question-circle"})})})]}):(0,s.jsx)(U.Z,{confirmText:"Save",onClick:e,onCancel:a,onConfirm:i,disabled:o,children:"Change role"})})}const hs=({lockMessage:n})=>{const e=(0,D.of)(Ss);return(0,s.jsxs)("div",{className:e.disabledTooltip,children:[(0,s.jsx)("span",{className:e.lockMessageClass,children:n}),(0,s.jsx)(V.m,{placement:"right-end",interactive:!0,content:(0,s.jsxs)("div",{children:["This user's built-in role is not editable because it is synchronized from your auth provider. Refer to the\xA0",(0,s.jsx)("a",{className:e.tooltipItemLink,href:"https://grafana.com/docs/grafana/latest/auth",rel:"noreferrer noopener",target:"_blank",children:"Grafana authentication docs"}),"\xA0for details."]}),children:(0,s.jsx)(w.I,{name:"question-circle"})})]})},Ss=n=>({disabledTooltip:(0,r.css)({display:"flex"}),tooltipItemLink:(0,r.css)({color:n.v1.palette.blue95}),lockMessageClass:(0,r.css)({fontStyle:"italic",marginLeft:"1.8rem",marginRight:"0.6rem"})});var ys=t(94354);const Us=[{label:"Yes",value:!0},{label:"No",value:!1}];function bs({isGrafanaAdmin:n,isExternalUser:e,lockMessage:o,onGrafanaAdminChange:i}){const[a,l]=(0,d.useState)(!1),[g,u]=(0,d.useState)(n),P=()=>l(!0),f=()=>{l(!1),u(n)},p=()=>i(g),x=c.TP.hasPermission(h.AccessControlAction.UsersPermissionsUpdate)&&!e,v=(0,D.of)(Ts);return(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"page-heading",children:"Permissions"}),(0,s.jsx)("table",{className:"filter-table form-inline",children:(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"width-16",children:"Grafana Admin"}),a?(0,s.jsx)("td",{colSpan:2,children:(0,s.jsx)(ys.z,{options:Us,value:g,onChange:u,autoFocus:!0})}):(0,s.jsx)("td",{colSpan:2,children:n?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w.I,{name:"shield"})," Yes"]}):(0,s.jsx)(s.Fragment,{children:"No"})}),(0,s.jsxs)("td",{children:[x&&(0,s.jsx)(U.Z,{onClick:P,onConfirm:p,onCancel:f,confirmText:"Change",children:"Change"}),e&&(0,s.jsx)("div",{className:v.lockMessageClass,children:(0,s.jsx)(hs,{lockMessage:o})})]})]})})})]})}const Ts=n=>({lockMessageClass:(0,r.css)`
    display: flex;
    justify-content: flex-end;
    font-style: italic;
    margin-right: ${n.spacing(.6)};
  `});var ss=t(96374),gs=t(91634),Ds=t(10354);function Ls({user:n,onUserUpdate:e,onUserDelete:o,onUserDisable:i,onUserEnable:a,onPasswordChange:l}){const[g,u]=(0,d.useState)(!1),[P,f]=(0,d.useState)(!1),p=(0,d.useRef)(null),x=j=>()=>{u(j),!j&&p.current&&p.current.focus()},v=(0,d.useRef)(null),O=j=>()=>{f(j),!j&&v.current&&v.current.focus()},N=()=>o(n.id),es=()=>i(n.id),ns=()=>a(n.id),ts=j=>{e({...n,name:j})},X=j=>{e({...n,email:j})},os=j=>{e({...n,login:j})},H=n.authLabels?.length&&n.authLabels[0],k=H?`Synced via ${H}`:"",z=n.isExternal||!c.TP.hasPermissionInMetadata(h.AccessControlAction.UsersWrite,n),is=n.isExternal||!c.TP.hasPermissionInMetadata(h.AccessControlAction.UsersPasswordUpdate,n),as=c.TP.hasPermissionInMetadata(h.AccessControlAction.UsersDelete,n),ls=c.TP.hasPermissionInMetadata(h.AccessControlAction.UsersDisable,n),rs=c.TP.hasPermissionInMetadata(h.AccessControlAction.UsersEnable,n);return(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"page-heading",children:"User information"}),(0,s.jsxs)(S.B,{direction:"column",gap:1.5,children:[(0,s.jsx)("div",{children:(0,s.jsx)("table",{className:"filter-table form-inline",children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)(Z,{label:"Name",value:n.name,locked:z,lockMessage:k,onChange:ts}),(0,s.jsx)(Z,{label:"Email",value:n.email,locked:z,lockMessage:k,onChange:X}),(0,s.jsx)(Z,{label:"Username",value:n.login,locked:z,lockMessage:k,onChange:os}),(0,s.jsx)(Z,{label:"Password",value:"********",inputType:"password",locked:is,lockMessage:k,onChange:l})]})})}),(0,s.jsxs)(S.B,{gap:2,children:[as&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.$n,{variant:"destructive",onClick:x(!0),ref:p,children:"Delete user"}),(0,s.jsx)(ss.u,{isOpen:g,title:"Delete user",body:"Are you sure you want to delete this user?",confirmText:"Delete user",onConfirm:N,onDismiss:x(!1)})]}),n.isDisabled&&rs&&(0,s.jsx)(m.$n,{variant:"secondary",onClick:ns,children:"Enable user"}),!n.isDisabled&&ls&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.$n,{variant:"secondary",onClick:O(!0),ref:v,children:"Disable user"}),(0,s.jsx)(ss.u,{isOpen:P,title:"Disable user",body:"Are you sure you want to disable this user?",confirmText:"Disable user",onConfirm:es,onDismiss:O(!1)})]})]})]})]})}class Z extends d.PureComponent{constructor(){super(...arguments),this.state={editing:!1,value:this.props.value||""},this.setInputElem=e=>{this.inputElem=e},this.onEditClick=()=>{this.props.inputType==="password"?this.setState({editing:!0,value:""},this.focusInput):this.setState({editing:!0},this.focusInput)},this.onCancelClick=()=>{this.setState({editing:!1,value:this.props.value||""})},this.onInputChange=(e,o)=>{o!==gs.O.Invalid&&this.setState({value:e.target.value})},this.onInputBlur=(e,o)=>{o!==gs.O.Invalid&&this.setState({value:e.target.value})},this.focusInput=()=>{this.inputElem&&this.inputElem.focus&&this.inputElem.focus()},this.onSave=()=>{this.props.onChange&&this.props.onChange(this.state.value)}}static{this.defaultProps={value:"",locked:!1,lockMessage:"",inputType:"text"}}render(){const{label:e,locked:o,lockMessage:i,inputType:a}=this.props,{value:l}=this.state,g=(0,r.cx)("width-16",(0,r.css)`
        font-weight: 500;
      `);if(o)return(0,s.jsx)(Ms,{label:e,value:l,lockMessage:i});const u=`${e}-input`;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:g,children:(0,s.jsx)("label",{htmlFor:u,children:e})}),(0,s.jsx)("td",{className:"width-25",colSpan:2,children:this.state.editing?(0,s.jsx)(Ds.p,{id:u,type:a,defaultValue:l,onBlur:this.onInputBlur,onChange:this.onInputChange,ref:this.setInputElem,width:30}):(0,s.jsx)("span",{children:this.props.value})}),(0,s.jsx)("td",{children:(0,s.jsx)(U.Z,{confirmText:"Save",onClick:this.onEditClick,onConfirm:this.onSave,onCancel:this.onCancelClick,children:"Edit"})})]})}}const Ms=({label:n,value:e,lockMessage:o})=>{const i=(0,r.css)`
    font-style: italic;
    margin-right: 0.6rem;
  `,a=(0,r.cx)("width-16",(0,r.css)`
      font-weight: 500;
    `);return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:a,children:n}),(0,s.jsx)("td",{className:"width-25",colSpan:2,children:e}),(0,s.jsx)("td",{children:(0,s.jsx)("span",{className:i,children:o})})]})};var Es=t(84753);class Is extends d.PureComponent{constructor(){super(...arguments),this.forceAllLogoutButton=(0,d.createRef)(),this.state={showLogoutModal:!1},this.showLogoutConfirmationModal=()=>{this.setState({showLogoutModal:!0})},this.dismissLogoutConfirmationModal=()=>{this.setState({showLogoutModal:!1},()=>{this.forceAllLogoutButton.current?.focus()})},this.onSessionRevoke=e=>()=>{this.props.onSessionRevoke(e)},this.onAllSessionsRevoke=()=>{this.setState({showLogoutModal:!1}),this.props.onAllSessionsRevoke()}}render(){const{sessions:e}=this.props,{showLogoutModal:o}=this.state,i=c.TP.hasPermission(h.AccessControlAction.UsersLogout);return(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"page-heading",children:"Sessions"}),(0,s.jsxs)(S.B,{direction:"column",gap:1.5,children:[(0,s.jsx)("div",{children:(0,s.jsxs)("table",{className:"filter-table form-inline",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Last seen"}),(0,s.jsx)("th",{children:"Logged on"}),(0,s.jsx)("th",{children:"IP address"}),(0,s.jsx)("th",{colSpan:2,children:"Browser and OS"})]})}),(0,s.jsx)("tbody",{children:e&&e.map((a,l)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:a.isActive?"Now":a.seenAt}),(0,s.jsx)("td",{children:(0,Es.Y)(a.createdAt,{dateStyle:"long"})}),(0,s.jsx)("td",{children:a.clientIp}),(0,s.jsx)("td",{children:`${a.browser} on ${a.os} ${a.osVersion}`}),(0,s.jsx)("td",{children:i&&(0,s.jsx)(U.Z,{confirmText:"Confirm logout",confirmVariant:"destructive",onConfirm:this.onSessionRevoke(a.id),children:"Force logout"})})]},`${a.id}-${l}`))})]})}),(0,s.jsxs)("div",{children:[i&&e.length>0&&(0,s.jsx)(m.$n,{variant:"secondary",onClick:this.showLogoutConfirmationModal,ref:this.forceAllLogoutButton,children:"Force logout from all devices"}),(0,s.jsx)(ss.u,{isOpen:o,title:"Force logout from all devices",body:"Are you sure you want to force logout from all devices?",confirmText:"Force logout",onConfirm:this.onAllSessionsRevoke,onDismiss:this.dismissLogoutConfirmationModal})]})]})]})}}const Ns=Is;var C=t(57334);const us=({loadAdminUserPage:n,user:e,orgs:o,sessions:i,ldapSyncInfo:a,isLoading:l,updateUser:g,setUserPassword:u,deleteUser:P,disableUser:f,enableUser:p,updateUserPermissions:x,deleteOrgUser:v,updateOrgUserRole:O,addOrgUser:N,revokeSession:es,revokeAllSessions:ns,syncLdapUser:ts})=>{const{id:X=""}=(0,M.g)();(0,d.useEffect)(()=>{const A=parseInt(X,10);n(A)},[X,n]);const os=A=>{e&&u(e.id,A)},H=A=>{e&&x(e.id,A)},k=A=>{e&&v(e.id,A)},z=(A,cs)=>{e&&O(e.id,A,cs)},is=(A,cs)=>{e&&N(e,A,cs)},as=A=>{e&&es(A,e.id)},ls=()=>{e&&ns(e.id)},rs=()=>{e&&ts(e.id)},j=e?.isExternal&&e?.authLabels?.includes("LDAP"),ws=c.TP.hasPermission(h.AccessControlAction.UsersAuthTokenList),Fs=c.TP.hasPermission(h.AccessControlAction.LDAPStatusRead),ms=e?.authLabels?.[0],Ws=ms?`Synced via ${ms}`:"",zs={text:e?.login??"",icon:"shield",subTitle:"Manage settings for an individual user."};return(0,s.jsx)(R.YW,{navId:"global-users",pageNav:zs,children:(0,s.jsx)(R.YW.Contents,{isLoading:l,children:(0,s.jsxs)(S.B,{gap:5,direction:"column",children:[e&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Ls,{user:e,onUserUpdate:g,onUserDelete:P,onUserDisable:f,onUserEnable:p,onPasswordChange:os}),j&&e?.isExternallySynced&&(0,T.a)("ldapsync")&&a&&Fs&&(0,s.jsx)(Q,{ldapSyncInfo:a,user:e,onUserSync:rs}),(0,s.jsx)(bs,{isGrafanaAdmin:e.isGrafanaAdmin,isExternalUser:e?.isGrafanaAdminExternallySynced,lockMessage:Ws,onGrafanaAdminChange:H})]}),o&&(0,s.jsx)(xs,{user:e,orgs:o,isExternalUser:e?.isExternallySynced,onOrgRemove:k,onOrgRoleChange:z,onOrgAdd:is}),i&&ws&&(0,s.jsx)(Ns,{sessions:i,onSessionRevoke:as,onAllSessionsRevoke:ls})]})})})},ks=n=>({user:n.userAdmin.user,sessions:n.userAdmin.sessions,orgs:n.userAdmin.orgs,ldapSyncInfo:n.ldap.syncInfo,isLoading:n.userAdmin.isLoading,error:n.userAdmin.error}),Bs={loadAdminUserPage:C.kz,updateUser:C.TK,setUserPassword:C.ly,disableUser:C.MV,enableUser:C.nr,deleteUser:C.hG,updateUserPermissions:C.N6,addOrgUser:C.nh,updateOrgUserRole:C.P3,deleteOrgUser:C.Pi,revokeSession:C.T$,revokeAllSessions:C.VR,syncLdapUser:C.mI},$s=(0,B.connect)(ks,Bs)(us)}}]);

//# sourceMappingURL=UserAdminPage.6bf6def6d6d8e9e36787.js.map