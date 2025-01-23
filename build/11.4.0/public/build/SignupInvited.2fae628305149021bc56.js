"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8576],{72235:(p,l,a)=>{a.d(l,{l:()=>r});var e=a(74848),_=a(32196),t=a(96540),d=a(49785);function r({defaultValues:u,onSubmit:D,validateOnMount:i=!1,validateFieldsOnMount:o,children:M,validateOn:h="onSubmit",maxWidth:m=600,...v}){const{handleSubmit:O,trigger:E,formState:P,...g}=(0,d.mN)({mode:h,defaultValues:u});return(0,t.useEffect)(()=>{i&&E(o)},[E,o,i]),(0,e.jsx)("form",{className:(0,_.css)({maxWidth:m!=="none"?m+"px":m,width:"100%"}),onSubmit:O(D),...v,children:M({errors:P.errors,formState:P,trigger:E,...g})})}},35538:(p,l,a)=>{a.d(l,{pL:()=>_,z5:()=>d});var e=a(32264);const _=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function t(){const r=e.$.licenseInfo?.trialExpiry;return!!(r&&r>0)}const d=()=>t()&&e.$.featureToggles.featureHighlights},14383:(p,l,a)=>{a.r(l),a.d(l,{SignupInvitedPage:()=>g,default:()=>I});var e=a(74848),_=a(32196),t=a(96540),d=a(54148),r=a(16817),u=a(17172),D=a(40845),i=a(88575),o=a(10354),M=a(55852),h=a(72235),m=a(21780),v=a(2913),O=a(10096),E=a(35538);const P={main:{icon:"grafana",text:"Invite",subTitle:"Register your Grafana account",breadcrumbs:[{title:"Login",url:"login"}]},node:{text:""}},g=()=>{const{code:c}=(0,d.g)(),[f,T]=(0,t.useState)(),[x,B]=(0,t.useState)(),[C,U]=(0,t.useState)(),L=(0,D.of)(A);(0,r.A)(async()=>{const n=await(0,u.AI)().get(`/api/user/invite/${c}`);T({email:n.email,name:n.name,username:n.email}),B(n.name||n.email||n.username),U(n.invitedBy)},[c]);const j=async n=>{await(0,u.AI)().post("/api/user/invite/complete",{...n,inviteCode:c}),window.location.href=(0,v.zj)().appSubUrl+"/"};return f?(0,e.jsx)(m.YW,{navModel:P,children:(0,e.jsxs)(m.YW.Contents,{children:[(0,e.jsxs)("h3",{className:"page-sub-heading",children:["Hello ",x||"there","."]}),(0,e.jsxs)("div",{className:(0,_.cx)("modal-tagline",L.tagline),children:[(0,e.jsx)("em",{children:C||"Someone"})," has invited you to join Grafana and the organization"," ",(0,e.jsx)("span",{className:"highlight-word",children:O.TP.user.orgName}),(0,e.jsx)("br",{}),"Please complete the following and choose a password to accept your invitation and continue:"]}),(0,e.jsx)(h.l,{defaultValues:f,onSubmit:j,children:({register:n,errors:s})=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.D,{invalid:!!s.email,error:s.email&&s.email.message,label:"Email",children:(0,e.jsx)(o.p,{placeholder:"email@example.com",...n("email",{required:"Email is required",pattern:{value:E.pL,message:"Email is invalid"}})})}),(0,e.jsx)(i.D,{invalid:!!s.name,error:s.name&&s.name.message,label:"Name",children:(0,e.jsx)(o.p,{placeholder:"Name (optional)",...n("name")})}),(0,e.jsx)(i.D,{invalid:!!s.username,error:s.username&&s.username.message,label:"Username",children:(0,e.jsx)(o.p,{...n("username",{required:"Username is required"}),placeholder:"Username"})}),(0,e.jsx)(i.D,{invalid:!!s.password,error:s.password&&s.password.message,label:"Password",children:(0,e.jsx)(o.p,{...n("password",{required:"Password is required"}),type:"password",placeholder:"Password"})}),(0,e.jsx)(M.$n,{type:"submit",children:"Sign up"})]})})]})}):null},A=c=>({tagline:(0,_.css)({paddingBottom:c.spacing(3)})}),I=g}}]);

//# sourceMappingURL=SignupInvited.2fae628305149021bc56.js.map