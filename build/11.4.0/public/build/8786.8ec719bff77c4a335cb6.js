"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8786],{20851:(B,l,i)=>{i.d(l,{GU:()=>h,YO:()=>m,qm:()=>g});var n=i(74848),t=i(32196),r=i(96540),c=i(40845),a=i(19361),p=i(38645);const g=({children:s,enterAnimation:o=!0})=>{const d=(0,c.of)(m);return(0,n.jsx)("div",{className:(0,t.cx)(d.loginInnerBox,o&&d.enterAnimation),children:s})},h=({children:s,branding:o,isChangingPassword:d})=>{const e=(0,c.of)(m),[j,u]=(0,r.useState)(!1),f=o?.loginSubtitle??a.M.GetLoginSubTitle(),v=o?.loginTitle??a.M.LoginTitle,E=o?.loginBoxBackground||a.M.LoginBoxBackground(),L=o?.loginLogo,x=o?.hideEdition??a.M.HideEdition;return(0,r.useEffect)(()=>u(!0),[]),(0,n.jsxs)(a.M.LoginBackground,{className:(0,t.cx)(e.container,j&&e.loginAnim,o?.loginBackground),children:[(0,n.jsx)("div",{className:e.loginMain,children:(0,n.jsxs)("div",{className:(0,t.cx)(e.loginContent,E,"login-content-box"),children:[(0,n.jsxs)("div",{className:e.loginLogoWrapper,children:[(0,n.jsx)(a.M.LoginLogo,{className:e.loginLogo,logo:L}),(0,n.jsx)("div",{className:e.titleWrapper,children:d?(0,n.jsx)("h1",{className:e.mainTitle,children:"Update your password"}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:e.mainTitle,children:v}),f&&(0,n.jsx)("h3",{className:e.subTitle,children:f})]})})]}),(0,n.jsx)("div",{className:e.loginOuterBox,children:s})]})}),o?.hideFooter?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(p.wi,{hideEdition:x,customLinks:o?.footerLinks})]})},y=(0,t.keyframes)`
from{
  opacity: 0;
  transform: translate(-60px, 0px);
}

to{
  opacity: 1;
  transform: translate(0px, 0px);
}`,m=s=>({loginMain:(0,t.css)({flexGrow:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minWidth:"100%"}),container:(0,t.css)({minHeight:"100%",backgroundPosition:"center",backgroundRepeat:"no-repeat",flex:1,minWidth:"100%",marginLeft:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),loginAnim:(0,t.css)({"&:before":{opacity:1},".login-content-box":{opacity:1}}),submitButton:(0,t.css)({justifyContent:"center",width:"100%"}),loginLogo:(0,t.css)({width:"100%",maxWidth:60,marginBottom:s.spacing(2),[s.breakpoints.up("sm")]:{maxWidth:100}}),loginLogoWrapper:(0,t.css)({display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:s.spacing(3)}),titleWrapper:(0,t.css)({textAlign:"center"}),mainTitle:(0,t.css)({fontSize:22,[s.breakpoints.up("sm")]:{fontSize:32}}),subTitle:(0,t.css)({fontSize:s.typography.size.md,color:s.colors.text.secondary}),loginContent:(0,t.css)({maxWidth:478,width:"calc(100% - 2rem)",display:"flex",alignItems:"stretch",flexDirection:"column",position:"relative",justifyContent:"flex-start",zIndex:1,minHeight:320,borderRadius:s.shape.radius.default,padding:s.spacing(2,0),opacity:0,[s.transitions.handleMotion("no-preference","reduce")]:{transition:"opacity 0.5s ease-in-out"},[s.breakpoints.up("sm")]:{minHeight:s.spacing(40),justifyContent:"center"}}),loginOuterBox:(0,t.css)({display:"flex",overflowY:"hidden",alignItems:"center",justifyContent:"center"}),loginInnerBox:(0,t.css)({padding:s.spacing(0,2,2,2),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexGrow:1,maxWidth:415,width:"100%",transform:"translate(0px, 0px)",[s.transitions.handleMotion("no-preference")]:{transition:"0.25s ease"}}),enterAnimation:(0,t.css)({[s.transitions.handleMotion("no-preference")]:{animation:`${y} ease-out 0.2s`}})})},78786:(B,l,i)=>{i.r(l),i.d(l,{VerifyEmailPage:()=>u,default:()=>f});var n=i(74848),t=i(20851),r=i(96540),c=i(49785),a=i(17172),p=i(66864),g=i(55852),h=i(17408),y=i(88575),m=i(10354),s=i(67061),o=i(2913),d=i(3169),e=i(35538);const j=()=>{const v=(0,d._2)(),{handleSubmit:E,register:L,formState:{errors:x}}=(0,c.mN)(),[M,S]=(0,r.useState)(!1),I=C=>{(0,a.AI)().post("/api/user/signup",C).then(()=>{S(!0)}).catch(A=>{const D=A.data?.message||A;v.warning(D)})};return M?(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"An email with a verification link has been sent to the email address. You should receive it shortly."}),(0,n.jsx)(p.mc,{margin:"md"}),(0,n.jsx)(g.z9,{variant:"primary",href:(0,o.zj)().appSubUrl+"/signup",children:"Complete Signup"})]}):(0,n.jsxs)("form",{onSubmit:E(I),children:[(0,n.jsx)(h.s,{children:"Verify Email"}),(0,n.jsx)(y.D,{label:"Email",description:"Enter your email address to get a verification link sent to you",invalid:!!x.email,error:x.email?.message,children:(0,n.jsx)(m.p,{id:"email",...L("email",{required:"Email is required",pattern:{value:e.pL,message:"Email is invalid"}}),placeholder:"Email"})}),(0,n.jsxs)(s.B,{children:[(0,n.jsx)(g.$n,{type:"submit",children:"Send verification email"}),(0,n.jsx)(g.z9,{fill:"text",href:(0,o.zj)().appSubUrl+"/login",children:"Back to login"})]})]})},u=()=>(0,n.jsx)(t.GU,{children:(0,n.jsx)(t.qm,{children:(0,n.jsx)(j,{})})}),f=u},35538:(B,l,i)=>{i.d(l,{pL:()=>t,z5:()=>c});var n=i(32264);const t=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function r(){const a=n.$.licenseInfo?.trialExpiry;return!!(a&&a>0)}const c=()=>r()&&n.$.featureToggles.featureHighlights}}]);

//# sourceMappingURL=8786.8ec719bff77c4a335cb6.js.map