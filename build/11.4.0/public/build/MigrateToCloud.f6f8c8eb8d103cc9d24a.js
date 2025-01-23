"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3704],{76491:(pt,H,c)=>{c.r(H),c.d(H,{default:()=>ut});var e=c(74848),D=c(32264),L=c(42418),S=c(72109),ie=c(21780),t=c(8484),k=c(90613),m=c(67061),l=c(94753);const I=({children:n,title:o,linkHref:r,linkTitle:s})=>(0,e.jsxs)(m.B,{gap:2,direction:"column",children:[(0,e.jsx)(l.E,{element:"h4",children:o}),(0,e.jsx)(l.E,{color:"secondary",children:n}),r&&(0,e.jsx)(S.Y,{href:r,external:!0,children:s??r})]}),le=()=>(0,e.jsx)(I,{title:(0,t.t)("migrate-to-cloud.migrate-to-this-stack.title","Let us help you migrate to this stack"),children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.migrate-to-this-stack.body",children:"You can migrate some resources from your self-managed Grafana installation to this cloud stack. To do this securely, you'll need to generate a migration token. Your self-managed instance will use the token to authenticate with this cloud stack."})});var G=c(32196),K=c(40845);const ce=()=>{const n=(0,K.of)(de);return(0,e.jsxs)(k.a,{alignItems:"flex-start",display:"flex",direction:"column",gap:2,children:[(0,e.jsx)(I,{title:(0,t.t)("migrate-to-cloud.get-started.title","Performing a migration"),linkTitle:(0,t.t)("migrate-to-cloud.get-started.link-title","Learn more about Private Data Source Connect"),linkHref:"https://grafana.com/docs/grafana-cloud/connect-externally-hosted/private-data-source-connect",children:(0,e.jsxs)(m.B,{direction:"column",gap:2,children:[(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.get-started.body",children:"The migration process must be started from your self-managed Grafana instance."}),(0,e.jsxs)("ol",{className:n.list,children:[(0,e.jsx)("li",{children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.get-started.step-1",children:"Log in to your self-managed instance and navigate to Administration, General, Migrate to Grafana Cloud."})}),(0,e.jsx)("li",{children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.get-started.step-2",children:'Select "Migrate this instance to Cloud".'})}),(0,e.jsx)("li",{children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.get-started.step-3",children:"You'll be prompted for a migration token. Generate one from this screen."})}),(0,e.jsx)("li",{children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.get-started.step-4",children:'In your self-managed instance, select "Upload everything" to upload data sources and dashboards to this cloud stack.'})}),(0,e.jsx)("li",{children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.get-started.step-5",children:"If some of your data sources will not work over the public internet, you\u2019ll need to install Private Data Source Connect in your self-managed environment."})})]})]})}),(0,e.jsx)(S.Y,{href:"/connections/private-data-source-connections",children:(0,t.t)("migrate-to-cloud.get-started.configure-pdc-link","Configure PDC for this stack")}),(0,e.jsx)(S.Y,{href:"/a/grafana-selfservetutorials-app/migrate-oss",children:(0,t.t)("migrate-to-cloud.migrate-to-this-stack.link-title","View the full migration guide")})]})},de=n=>({list:(0,G.css)({padding:"revert"})});var h=c(96540),W=c(17172),P=c(14110),f=c(55852),j=c(59120);function z(){return(0,e.jsx)(L.F,{severity:"error",title:(0,t.t)("migrate-to-cloud.migration-token.error-title","Something went wrong"),children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.migration-token.error-body",children:"Unable to generate a migration token. Please try again later."})})}var R=c(37390),V=c(10534),X=c(88575),Z=c(10354);const ue=({isOpen:n,hideModal:o,migrationToken:r})=>(0,e.jsxs)(R.a,{isOpen:n,title:(0,t.t)("migrate-to-cloud.migration-token.modal-title","Migration token created"),onDismiss:o,children:[r?(0,e.jsx)(ge,{migrationToken:r}):(0,e.jsx)(z,{}),(0,e.jsxs)(R.a.ButtonRow,{children:[(0,e.jsx)(f.$n,{variant:"secondary",onClick:o,children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.migration-token.modal-close",children:"Close"})}),r&&(0,e.jsx)(V.b,{variant:"primary",getText:()=>r,onClipboardCopy:o,children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.migration-token.modal-copy-and-close",children:"Copy to clipboard and close"})})]})]});function ge({migrationToken:n}){const o=(0,h.useId)();return(0,e.jsx)(X.D,{description:(0,t.t)("migrate-to-cloud.migration-token.modal-field-description","Copy the token now as you will not be able to see it again. Losing a token requires creating a new one."),htmlFor:o,label:(0,t.t)("migrate-to-cloud.migration-token.modal-field-label","Token"),children:(0,e.jsxs)(m.B,{children:[(0,e.jsx)(Z.p,{id:o,value:n,readOnly:!0}),(0,e.jsx)(V.b,{icon:"clipboard-alt",getText:()=>n,children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.migration-token.modal-copy-button",children:"Copy to clipboard"})})]})})}var Q=c(96374);function me(n){const{isOpen:o,hasError:r,onConfirm:s,onDismiss:i}=n,a=(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.delete-migration-token-confirm.body",children:"If you've already used this token with a self-managed installation, that installation will no longer be able to upload content."})}),r&&(0,e.jsx)(L.F,{severity:"error",title:(0,t.t)("migrate-to-cloud.delete-migration-token-confirm.error-title","Error deleting token")})]});return(0,e.jsx)(Q.u,{isOpen:o,title:(0,t.t)("migrate-to-cloud.delete-migration-token-confirm.title","Delete migration token"),body:a,confirmText:(0,t.t)("migrate-to-cloud.delete-migration-token-confirm.confirm-button","Delete token"),onConfirm:s,onDismiss:i})}var M=c(70255);const he=({hasToken:n,errorMessageId:o,isFetching:r})=>r?(0,e.jsx)(M.A,{width:100}):n?(0,e.jsx)(l.E,{color:"success",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.token-status.active",children:"Token created and active"})}):o==="cloudmigrations.tokenNotFound"?(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.token-status.no-active",children:"No active token"}):o?(0,e.jsx)(l.E,{color:"error",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.token-status.unknown-error",children:"Error retrieving token"})}):(0,e.jsx)(l.E,{color:"warning",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.token-status.unknown",children:"Unknown"})});function xe(n){if(!(0,W.NF)(n)||typeof n.data!="object"||!n.data)return null;const o=n?.data,r="message"in o&&typeof o.message=="string"?o.message:null,s="messageId"in o&&typeof o.messageId=="string"?o.messageId:null,i="statusCode"in o&&typeof o.statusCode=="number"?o.statusCode:null;return!r||!s||!i?null:{message:r,messageId:s,statusCode:i}}const pe=()=>{const[n,o]=(0,h.useState)(!1),[r,s]=(0,h.useState)(!1),i=(0,j.YX)(),[a,u]=(0,j.dX)(),[d,g]=(0,j.WH)(),p=xe(i.error),b=!!i.data?.id&&p?.statusCode!==404,y=i.isFetching||u.isLoading,C=(0,h.useCallback)(async()=>{(0,P.rR)("grafana_e2c_generate_token_clicked"),"error"in await a()||o(!0)},[a]),v=(0,h.useCallback)(async()=>{if(!i.data?.id)return;(0,P.rR)("grafana_e2c_delete_token_clicked"),"error"in await d({uid:i.data.id})||s(!1)},[d,i.data]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(k.a,{display:"flex",alignItems:"flex-start",direction:"column",gap:2,children:[u?.isError?(0,e.jsx)(z,{}):(0,e.jsx)(l.E,{color:"secondary",children:(0,e.jsxs)(t.x6,{i18nKey:"migrate-to-cloud.migration-token.status",children:["Current status:"," ",(0,e.jsx)(he,{hasToken:b,isFetching:y,errorMessageId:p?.messageId})]})}),b?(0,e.jsx)(f.$n,{onClick:()=>s(!0),variant:"destructive",children:(0,t.t)("migrate-to-cloud.migration-token.delete-button","Delete token")}):(0,e.jsx)(f.$n,{disabled:y,onClick:C,children:u.isLoading?(0,t.t)("migrate-to-cloud.migration-token.generate-button-loading","Generating a migration token..."):(0,t.t)("migrate-to-cloud.migration-token.generate-button","Generate a migration token")})]}),(0,e.jsx)(ue,{isOpen:n,hideModal:()=>{(0,P.rR)("grafana_e2c_generated_token_modal_dismissed"),o(!1)},migrationToken:u.data?.token}),(0,e.jsx)(me,{isOpen:r,onConfirm:v,onDismiss:()=>s(!1),hasError:!!g.error})]})},fe=()=>(0,e.jsx)(k.a,{backgroundColor:"secondary",display:"flex",alignItems:"center",direction:"column",children:(0,e.jsxs)(k.a,{maxWidth:90,paddingY:6,paddingX:2,gap:6,direction:"column",display:"flex",children:[(0,e.jsxs)(m.B,{gap:2,direction:"column",children:[(0,e.jsx)(le,{}),(0,e.jsx)(pe,{})]}),(0,e.jsx)(ce,{})]})});var B=c(10378);function J(n){const{error:o,children:r,...s}=n,i=ye(o);return(0,e.jsx)(L.F,{...s,children:(0,e.jsxs)(m.B,{direction:"column",gap:1,children:[r,i&&(0,e.jsxs)(l.E,{element:"p",color:"secondary",variant:"bodySmall",children:["Trace ID: ",i]})]})})}function ye(n){const o=(0,W.NF)(n)?n.data:n;if(typeof o=="object"&&o&&"traceID"in o&&typeof o.traceID=="string")return o.traceID}const je=({isOpen:n,isError:o,isLoading:r,onDisconnectConfirm:s,onDismiss:i})=>{const a=(0,e.jsxs)(m.B,{direction:"column",children:[o&&(0,e.jsx)(L.F,{severity:"error",title:(0,t.t)("migrate-to-cloud.disconnect-modal.error","There was an error disconnecting")}),(0,e.jsx)("div",{children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.disconnect-modal.body",children:"This will remove the migration token from this installation. If you wish to upload more resources in the future, you will need to enter a new migration token."})})]});return(0,e.jsx)(Q.u,{isOpen:n,title:(0,t.t)("migrate-to-cloud.disconnect-modal.title","Disconnect from cloud stack"),body:(0,e.jsx)(e.Fragment,{}),description:a,confirmText:r?(0,t.t)("migrate-to-cloud.disconnect-modal.disconnecting","Disconnecting..."):(0,t.t)("migrate-to-cloud.disconnect-modal.disconnect","Disconnect"),dismissText:(0,t.t)("migrate-to-cloud.disconnect-modal.cancel","Cancel"),onConfirm:s,onDismiss:i})};var be=c(71259),ke=c(49785);const ve=({isOpen:n,isLoading:o,error:r,hideModal:s,onConfirm:i})=>{const a=(0,h.useId)(),u=(0,K.of)(Ee),{handleSubmit:d,register:g,formState:{errors:p},watch:b}=(0,ke.mN)({defaultValues:{token:""}}),y=b("token"),C=v=>{i({cloudMigrationSessionRequestDto:{authToken:v.token}}).then(x=>{typeof x=="object"&&x&&"error"in x||s()})};return(0,e.jsx)(R.a,{isOpen:n,title:(0,t.t)("migrate-to-cloud.connect-modal.title","Connect to a cloud stack"),onDismiss:s,children:(0,e.jsxs)("form",{onSubmit:d(C),children:[(0,e.jsx)(l.E,{color:"secondary",children:(0,e.jsxs)(m.B,{direction:"column",gap:2,children:[(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.connect-modal.body-get-started",children:"To get started, you'll need a Grafana.com account."}),(0,e.jsx)("div",{children:(0,e.jsx)(S.Y,{href:"https://grafana.com/auth/sign-up/create-user?pg=prod-cloud",external:!0,children:(0,t.t)("migrate-to-cloud.connect-modal.body-sign-up","Sign up for a Grafana.com account")})}),(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.connect-modal.body-cloud-stack",children:"You'll also need a cloud stack. If you just signed up, we'll automatically create your first stack. If you have an account, you'll need to select or create a stack."}),(0,e.jsx)("div",{children:(0,e.jsx)(S.Y,{href:"https://grafana.com/auth/sign-in/",external:!0,children:(0,t.t)("migrate-to-cloud.connect-modal.body-view-stacks","View my cloud stacks")})}),(0,e.jsx)("div",{children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.connect-modal.body-token",children:"Your self-managed Grafana installation needs special access to securely migrate content. You'll need to create a migration token on your chosen cloud stack."})}),(0,e.jsx)("div",{children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.connect-modal.body-token-instructions",children:"Log into your cloud stack and navigate to Administration, General, Migrate to Grafana Cloud. Create a migration token on that screen and paste the token here."})}),r?(0,e.jsx)(J,{error:r,severity:"error",title:(0,t.t)("migrate-to-cloud.connect-modal.token-error-title","Error saving token"),children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.connect-modal.token-error-description",children:"There was an error saving the token. See the Grafana server logs for more details."})}):void 0,(0,e.jsx)(X.D,{className:u.field,invalid:!!p.token,error:p.token?.message,label:(0,t.t)("migrate-to-cloud.connect-modal.body-token-field","Migration token"),required:!0,children:(0,e.jsx)(Z.p,{...g("token",{required:(0,t.t)("migrate-to-cloud.connect-modal.token-required-error","Migration token is required")}),id:a,placeholder:(0,t.t)("migrate-to-cloud.connect-modal.body-token-field-placeholder","Paste token here")})})]})}),(0,e.jsxs)(R.a.ButtonRow,{children:[(0,e.jsx)(f.$n,{variant:"secondary",onClick:s,children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.connect-modal.cancel",children:"Cancel"})}),(0,e.jsx)(f.$n,{type:"submit",disabled:o||!y,children:o?(0,t.t)("migrate-to-cloud.connect-modal.connecting","Connecting to this stack..."):(0,t.t)("migrate-to-cloud.connect-modal.connect","Connect to this stack")})]})]})})},Ee=n=>({field:(0,G.css)({alignSelf:"stretch"})}),Ie=()=>{const[n,o]=(0,h.useState)(!1),[r,s]=(0,j.hZ)();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(k.a,{display:"flex",gap:2,direction:"column",alignItems:"center",backgroundColor:"secondary",children:[(0,e.jsx)(l.E,{variant:"h3",textAlignment:"center",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.cta.header",children:"Let us manage your Grafana stack"})}),(0,e.jsx)(f.$n,{disabled:s.isLoading,onClick:()=>o(!0),children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.cta.button",children:"Migrate this instance to Cloud"})})]}),(0,e.jsx)(ve,{isOpen:n,isLoading:s.isLoading,error:s.error,onConfirm:r,hideModal:()=>o(!1)})]})},Ce=()=>(0,e.jsxs)(m.B,{gap:4,direction:"column",children:[(0,e.jsx)(I,{title:(0,t.t)("migrate-to-cloud.what-is-cloud.title","What is Grafana Cloud?"),linkTitle:(0,t.t)("migrate-to-cloud.what-is-cloud.link-title","Learn about cloud features"),linkHref:"https://grafana.com/products/cloud",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.what-is-cloud.body",children:"Grafana cloud is a fully managed cloud-hosted observability platform ideal for cloud native environments. It's everything you love about Grafana without the overhead of maintaining, upgrading, and supporting an installation."})}),(0,e.jsx)(I,{title:(0,t.t)("migrate-to-cloud.why-host.title","Why host with Grafana?"),linkTitle:(0,t.t)("migrate-to-cloud.why-host.link-title","More questions? Talk to an expert"),linkHref:"https://grafana.com/contact",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.why-host.body",children:"In addition to the convenience of managed hosting, Grafana Cloud includes many cloud-exclusive features like SLOs, incident management, machine learning, and powerful observability integrations."})}),(0,e.jsx)(I,{title:(0,t.t)("migrate-to-cloud.is-it-secure.title","Is it secure?"),linkTitle:(0,t.t)("migrate-to-cloud.is-it-secure.link-title","Grafana Labs Trust Center"),linkHref:"https://trust.grafana.com",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.is-it-secure.body",children:"Grafana Labs is committed to maintaining the highest standards of data privacy and security. By implementing industry-standard security technologies and procedures, we help protect our customers' data from unauthorized access, use, or disclosure."})})]}),Se=()=>(0,e.jsxs)(m.B,{gap:4,direction:"column",children:[(0,e.jsx)(I,{title:(0,t.t)("migrate-to-cloud.pdc.title","Not all my data sources are on the public internet"),linkTitle:(0,t.t)("migrate-to-cloud.pdc.link-title","Learn about PDC"),linkHref:"https://grafana.com/docs/grafana-cloud/connect-externally-hosted/private-data-source-connect",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.pdc.body",children:"Exposing your data sources to the internet can raise security concerns. Private data source connect (PDC) allows Grafana Cloud to access your existing data sources over a secure network tunnel."})}),(0,e.jsx)(I,{title:(0,t.t)("migrate-to-cloud.pricing.title","How much does it cost?"),linkTitle:(0,t.t)("migrate-to-cloud.pricing.link-title","Grafana Cloud pricing"),linkHref:"https://grafana.com/pricing",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.pricing.body",children:"Grafana Cloud has a generous free plan and a 14 day unlimited usage trial. After your trial expires, you'll be billed based on usage over the free plan limits."})}),(0,e.jsx)(I,{title:(0,t.t)("migrate-to-cloud.can-i-move.title","Can I move this installation to Grafana Cloud?"),linkTitle:(0,t.t)("migrate-to-cloud.can-i-move.link-title","Learn about migrating other settings"),linkHref:"https://grafana.com/docs/grafana-cloud/account-management/migration-guide",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.can-i-move.body",children:"Once you connect this installation to a cloud stack, you'll be able to upload data sources and dashboards."})})]}),Te=()=>(0,e.jsx)(k.a,{backgroundColor:"secondary",display:"flex",alignItems:"center",direction:"column",children:(0,e.jsx)(k.a,{maxWidth:180,paddingY:6,paddingX:2,children:(0,e.jsxs)(m.B,{gap:5,direction:"column",children:[(0,e.jsx)(Ie,{}),(0,e.jsxs)(be.x,{alignItems:"flex-start",gap:4,columns:{xs:1,lg:2},children:[(0,e.jsx)(Ce,{}),(0,e.jsx)(Se,{})]})]})})});var De=c(68402),Le=c(84753);function N({title:n,children:o}){return(0,e.jsxs)(k.a,{minWidth:{xs:0,xxl:16},display:"flex",direction:"column",children:[(0,e.jsx)(l.E,{variant:"bodySmall",color:"secondary",children:n}),(0,e.jsx)(l.E,{variant:"h4",children:o})]})}const Re={dateStyle:"medium",timeStyle:"short"};function Ne(n){const{session:o,snapshot:r,isBusy:s,disconnectIsLoading:i,onDisconnect:a,showBuildSnapshot:u,buildSnapshotIsLoading:d,onBuildSnapshot:g,showUploadSnapshot:p,uploadSnapshotIsLoading:b,onUploadSnapshot:y,showRebuildSnapshot:C}=n,v=r?.stats?.total??0,x=r?.stats?.statuses?.ERROR??0,E=r?.stats?.statuses?.OK??0,U=r?.stats?.statuses?.WARNING??0;return(0,e.jsxs)(k.a,{borderColor:"weak",borderStyle:"solid",padding:2,display:"flex",gap:4,alignItems:"center",justifyContent:"space-between",children:[(0,e.jsxs)(m.B,{gap:4,wrap:!0,children:[(0,e.jsx)(N,{title:(0,t.t)("migrate-to-cloud.summary.snapshot-date","Snapshot timestamp"),children:r?.created?(0,Le.Y)(r.created,Re):(0,e.jsx)(l.E,{color:"secondary",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.summary.snapshot-not-created",children:"Not yet created"})})}),(0,e.jsx)(N,{title:(0,t.t)("migrate-to-cloud.summary.total-resource-count","Total resources"),children:v}),(0,e.jsx)(N,{title:(0,t.t)("migrate-to-cloud.summary.errored-resource-count","Errors"),children:x}),(0,e.jsx)(N,{title:(0,t.t)("migrate-to-cloud.summary.successful-resource-count","Successfully migrated"),children:E+U}),(0,e.jsxs)(N,{title:(0,t.t)("migrate-to-cloud.summary.target-stack-title","Uploading to"),children:[o.slug,(0,e.jsx)(De.$,{h:1,layout:"inline"}),(0,e.jsx)(f.$n,{disabled:s,onClick:a,variant:"secondary",size:"sm",icon:i?"spinner":void 0,children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.summary.disconnect",children:"Disconnect"})})]})]}),(0,e.jsxs)(m.B,{gap:2,wrap:!0,justifyContent:"flex-end",children:[u&&(0,e.jsx)(f.$n,{disabled:s,onClick:g,icon:d?"spinner":void 0,children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.summary.start-migration",children:"Build snapshot"})}),C&&(0,e.jsx)(f.$n,{disabled:s,onClick:g,icon:d?"spinner":void 0,variant:"secondary",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.summary.rebuild-snapshot",children:"Rebuild snapshot"})}),p&&(0,e.jsx)(f.$n,{disabled:s||b,onClick:y,icon:b?"spinner":void 0,children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.summary.upload-migration",children:"Upload snapshot"})})]})]})}var we=c(48840),Ae=c(19384),w=c(14578),q=c(78318),Oe=c(55314);function Ge(n){const o=n.row.original;return(0,e.jsxs)(m.B,{direction:"row",gap:2,alignItems:"center",children:[(0,e.jsx)(Ye,{resource:o}),(0,e.jsx)(m.B,{direction:"column",gap:0,children:(0,e.jsx)(Ke,{data:o})})]})}function Ke({data:n}){switch(n.type){case"DASHBOARD":return(0,e.jsx)(Be,{data:n});case"DATASOURCE":return(0,e.jsx)(Pe,{data:n});case"FOLDER":return(0,e.jsx)(Fe,{data:n});case"LIBRARY_ELEMENT":return(0,e.jsx)(Ue,{data:n});case"ALERT_RULE":return null;case"CONTACT_POINT":return null;case"NOTIFICATION_POLICY":return null;case"NOTIFICATION_TEMPLATE":return null;case"MUTE_TIMING":return null}}function Pe({data:n}){const o=n.refId,r=_(o);return r?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{children:r.name}),(0,e.jsx)(l.E,{color:"secondary",children:r.type})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.E,{children:(0,e.jsxs)(t.x6,{i18nKey:"migrate-to-cloud.resource-table.unknown-datasource-title",children:["Data source ",{datasourceUID:o}]})}),(0,e.jsx)(l.E,{color:"secondary",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.resource-table.unknown-datasource-type",children:"Unknown data source"})})]})}function Me(n){return n&&"title"in n&&typeof n.title=="string"?n.title:null}function Be({data:n}){const o=n.refId,r=!!n.name&&!!n.parentName,{data:s,isLoading:i,isError:a}=(0,j.bM)({uid:o},{skip:r}),u=n.name||Me(s?.dashboard)||o,d=n.parentName||s?.meta?.folderTitle||"Dashboards";return a?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.E,{italic:!0,children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.resource-table.dashboard-load-error",children:"Unable to load dashboard"})}),(0,e.jsxs)(l.E,{color:"secondary",children:["Dashboard ",o]})]}):i?(0,e.jsx)(F,{}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{children:u}),(0,e.jsx)(l.E,{color:"secondary",children:d})]})}function Fe({data:n}){const o=n.refId,r=!!n.name&&!!n.parentName,{data:s,isLoading:i,isError:a}=(0,Oe.kH)(o,{skip:r}),u=n.name||s?.title,d=n.parentName||s?.parents?.[s.parents.length-1]?.title;return a?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.E,{italic:!0,children:"Unable to load folder"}),(0,e.jsxs)(l.E,{color:"secondary",children:["Folder ",n.refId]})]}):i?(0,e.jsx)(F,{}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{children:u}),(0,e.jsx)(l.E,{color:"secondary",children:d??"Dashboards"})]})}function Ue({data:n}){const o=n.refId,r=!!n.name&&!!n.parentName,{data:s,isError:i,isLoading:a}=(0,j.A_)({libraryElementUid:o},{skip:r}),u=n.name||s?.result?.name||o,d=n.parentName||s?.result?.meta?.folderName||"General";return i?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.E,{italic:!0,children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.resource-table.error-library-element-title",children:"Unable to load library element"})}),(0,e.jsx)(l.E,{color:"secondary",children:(0,e.jsxs)(t.x6,{i18nKey:"migrate-to-cloud.resource-table.error-library-element-sub",children:["Library Element ",o]})})]}):a?(0,e.jsx)(F,{}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{children:u}),(0,e.jsx)(l.E,{color:"secondary",children:d})]})}function F(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(M.A,{width:250}),(0,e.jsx)(M.A,{width:130})]})}function Ye({resource:n}){const o=(0,K.of)($e),r=_(n.type==="DATASOURCE"?n.refId:void 0);if(n.type==="DASHBOARD")return(0,e.jsx)(w.I,{size:"xl",name:"dashboard"});if(n.type==="FOLDER")return(0,e.jsx)(w.I,{size:"xl",name:"folder"});if(n.type==="DATASOURCE"&&r?.meta?.info?.logos?.small)return(0,e.jsx)("img",{className:o.icon,src:r.meta.info.logos.small,alt:""});if(n.type==="DATASOURCE")return(0,e.jsx)(w.I,{size:"xl",name:"database"});if(n.type==="LIBRARY_ELEMENT")return(0,e.jsx)(w.I,{size:"xl",name:"library-panel"})}function $e(){return{icon:(0,G.css)({display:"block",width:(0,q.cs)("xl"),height:(0,q.cs)("xl")})}}function _(n){return(0,h.useMemo)(()=>{if(n)return D.$.datasources[n]||Object.values(D.$.datasources).find(r=>r.uid===n)},[n])}function ee(n){switch(n){case"DATASOURCE":return(0,t.t)("migrate-to-cloud.resource-type.datasource","Data source");case"DASHBOARD":return(0,t.t)("migrate-to-cloud.resource-type.dashboard","Dashboard");case"FOLDER":return(0,t.t)("migrate-to-cloud.resource-type.folder","Folder");case"LIBRARY_ELEMENT":return(0,t.t)("migrate-to-cloud.resource-type.library_element","Library Element");default:return(0,t.t)("migrate-to-cloud.resource-type.unknown","Unknown")}}function He(n){const{type:o}=n.row.original;return(0,e.jsx)(e.Fragment,{children:ee(o)})}function We(n){const{resource:o,onClose:r}=n,s=o?.refId,i=o&&ee(o.type);let a=(0,t.t)("migrate-to-cloud.resource-details.generic-title","Resource migration details:");return o?.status==="ERROR"?a=(0,t.t)("migrate-to-cloud.resource-details.error-title","Unable to migrate this resource:"):o?.status==="WARNING"&&(a=(0,t.t)("migrate-to-cloud.resource-details.warning-title","Resource migrated with a warning:")),(0,e.jsx)(R.a,{title:(0,t.t)("migrate-to-cloud.resource-details.title","Migration resource details"),isOpen:!!o,onDismiss:r,children:o&&(0,e.jsxs)(m.B,{direction:"column",gap:2,alignItems:"flex-start",children:[(0,e.jsx)(l.E,{element:"p",weight:"bold",children:(0,e.jsxs)(t.x6,{i18nKey:"migrate-to-cloud.resource-details.resource-summary",children:[{refId:s}," (",{typeName:i},")"]})}),o.message?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.E,{element:"p",children:a}),(0,e.jsx)(l.E,{element:"p",weight:"bold",children:o.message})]}):(0,e.jsx)(l.E,{element:"p",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.resource-details.missing-message",children:"No message provided."})}),(0,e.jsx)(f.$n,{onClick:r,children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.resource-details.dismiss-button",children:"OK"})})]})})}function ze(n){const o=n.row.original;return o.status==="PENDING"?(0,e.jsx)(l.E,{color:"secondary",children:(0,t.t)("migrate-to-cloud.resource-status.not-migrated","Not yet uploaded")}):o.status==="OK"?(0,e.jsx)(l.E,{color:"success",children:(0,t.t)("migrate-to-cloud.resource-status.migrated","Uploaded to cloud")}):o.status==="WARNING"?(0,e.jsx)(Xe,{item:o}):o.status==="ERROR"?(0,e.jsx)(Ve,{item:o}):(0,e.jsx)(l.E,{color:"secondary",children:(0,t.t)("migrate-to-cloud.resource-status.unknown","Unknown")})}function Ve({item:n}){return(0,e.jsxs)(m.B,{alignItems:"center",children:[(0,e.jsx)(l.E,{color:"error",children:(0,t.t)("migrate-to-cloud.resource-status.failed","Error")}),n.message&&(0,e.jsx)(f.$n,{size:"sm",variant:"secondary",onClick:()=>n.showDetails(n),children:(0,t.t)("migrate-to-cloud.resource-status.error-details-button","Details")})]})}function Xe({item:n}){return(0,e.jsxs)(m.B,{alignItems:"center",children:[(0,e.jsx)(l.E,{color:"warning",children:(0,t.t)("migrate-to-cloud.resource-status.warning","Uploaded with warning")}),n.message&&(0,e.jsx)(f.$n,{size:"sm",variant:"secondary",onClick:()=>n.showDetails(n),children:(0,t.t)("migrate-to-cloud.resource-status.warning-details-button","Details")})]})}const Ze=[{id:"name",header:"Name",cell:Ge},{id:"type",header:"Type",cell:He},{id:"status",header:"Status",cell:ze}];function Qe({resources:n,numberOfPages:o=0,onChangePage:r,page:s=1}){const[i,a]=(0,h.useState)(),u=(0,h.useCallback)(g=>{a(g)},[]),d=(0,h.useMemo)(()=>n.map(g=>({...g,showDetails:u})),[n,u]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(m.B,{alignItems:"flex-end",direction:"column",children:[(0,e.jsx)(we.j,{columns:Ze,data:d,getRowId:g=>g.refId}),(0,e.jsx)(Ae.d,{numberOfPages:o,currentPage:s,onNavigate:r})]}),(0,e.jsx)(We,{resource:i,onClose:()=>a(void 0)})]})}var Je=c(62930);function te(n){const{title:o,accessory:r,children:s}=n;return(0,e.jsxs)(k.a,{maxWidth:44,display:"flex",direction:"row",gap:1,alignItems:"flex-start",children:[r&&(0,e.jsx)(k.a,{children:r}),(0,e.jsxs)(m.B,{gap:2,direction:"column",alignItems:"flex-start",children:[(0,e.jsx)(l.E,{element:"h3",variant:"h5",children:o}),s]})]})}function qe(n){const{disabled:o,isLoading:r,onClick:s}=n;return(0,e.jsxs)(te,{title:(0,t.t)("migrate-to-cloud.build-snapshot.title","No snapshot exists"),accessory:(0,e.jsx)(w.I,{name:"cog",size:"lg"}),children:[(0,e.jsx)(l.E,{element:"p",variant:"body",color:"secondary",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.build-snapshot.description",children:"This tool can migrate some resources from this installation to your cloud stack. To get started, you'll need to create a snapshot of this installation. Creating a snapshot typically takes less than two minutes. The snapshot is stored alongside this Grafana installation."})}),(0,e.jsx)(l.E,{element:"p",variant:"body",color:"secondary",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.build-snapshot.when-complete",children:"Once the snapshot is complete, you will be able to upload it to your cloud stack."})}),(0,e.jsx)(f.$n,{disabled:o,onClick:s,icon:r?"spinner":void 0,children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.summary.start-migration",children:"Build snapshot"})})]})}function _e(n){const{disabled:o,isLoading:r,onClick:s}=n;return(0,e.jsxs)(te,{title:(0,t.t)("migrate-to-cloud.building-snapshot.title","Building installation snapshot"),accessory:(0,e.jsx)(Je.y,{inline:!0}),children:[(0,e.jsx)(l.E,{element:"p",variant:"body",color:"secondary",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.building-snapshot.description",children:"We're creating a point-in-time snapshot of the current state of this installation. Once the snapshot is complete. you'll be able to upload it to Grafana Cloud."})}),(0,e.jsx)(l.E,{element:"p",variant:"body",color:"secondary",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.building-snapshot.description-eta",children:"Creating a snapshot typically takes less than two minutes."})}),(0,e.jsx)(f.$n,{disabled:o,onClick:s,icon:r?"spinner":void 0,variant:"secondary",children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.summary.cancel-snapshot",children:"Cancel snapshot"})})]})}function et(){return(0,e.jsx)(l.E,{color:"secondary",textAlignment:"center",children:(0,e.jsxs)(t.x6,{i18nKey:"migrate-to-cloud.support-types-disclosure.text",children:["Dashboards, Folders, and built-in core data sources are migrated to your Grafana Cloud stack."," ",(0,e.jsx)(S.Y,{external:!0,href:"https://grafana.com/docs/grafana-cloud/account-management/migration-guide",children:"Learn about migrating other settings."})]})})}var T=c(72635),tt=c(3169);function nt(n){const o=(0,h.useRef)(void 0),r=(0,tt._2)();(0,h.useEffect)(()=>{const s=n?.status,i=o.current!=="FINISHED"&&o.current!==void 0&&s==="FINISHED";if(o.current=s,!!i&&n){const a=(0,T.t)("migrate-to-cloud.onprem.success-title","Migration completed!"),u=ot(n);r.success(a,u)}},[r,n])}function ot(n){const o=[];for(const[i,a]of Object.entries(n.stats?.types??{}))a<=0||(i==="DASHBOARD"?o.push((0,T.t)("migrate-to-cloud.migrated-counts.dashboards","dashboards")):i==="DATASOURCE"?o.push((0,T.t)("migrate-to-cloud.migrated-counts.datasources","data sources")):i==="FOLDER"?o.push((0,T.t)("migrate-to-cloud.migrated-counts.folders","folders")):i==="LIBRARY_ELEMENT"&&o.push((0,T.t)("migrate-to-cloud.migrated-counts.library_elements","library elements")));const r=n?.stats?.statuses?.OK??0;return(0,T.t)("migrate-to-cloud.onprem.success-message","Successfully migrated {{successCount}} {{types, list}} to your Grafana Cloud instance.",{successCount:r,types:o})}function rt(){const n=(0,j.SM)(),o=n.data?.sessions?.at(-1);return{...n,data:o}}const st=["INITIALIZING","CREATING","UPLOADING","PENDING_PROCESSING","PROCESSING"],at=["PENDING_UPLOAD","FINISHED","ERROR","UNKNOWN"],it=["INITIALIZING","CREATING"],ne=["UPLOADING","PENDING_PROCESSING","PROCESSING"],oe=50;function lt(n,o=1){const[r,s]=(0,h.useState)(!1),i=(0,j.M8)(n?{uid:n,page:1,limit:1,sort:"latest"}:B.hT),a=i.currentData?.snapshots?.at(0),u=n&&a?.uid?{uid:n,snapshotUid:a.uid,resultLimit:oe,resultPage:o}:B.hT,d=(0,j.YD)(u,{pollingInterval:r?D.$.cloudMigrationPollIntervalMs:0,skipPollingIfUnfocused:!0}),g=i.isError||d.isError;return(0,h.useEffect)(()=>{const p=!g&&st.includes(d.data?.status);s(p)},[d?.data?.status,g]),{...d,data:u===B.hT?void 0:d.data,error:i.error||d.error,isError:g,isLoading:i.isLoading||d.isLoading,isFetching:i.isFetching||d.isFetching}}const ct=()=>{const[n,o]=(0,h.useState)(!1),r=rt(),[s,i]=(0,h.useState)(1),a=lt(r.data?.uid,s),[u,d]=(0,j.ri)(),[g,p]=(0,j.aD)(),[b,y]=(0,j.r3)(),[C,v]=(0,j.AC)();nt(a.data);const x=r.data?.uid,E=a.data?.uid,U=r.isLoading,A=a.data?.status,Y=d.isLoading||p.isLoading||y.isLoading||r.isLoading||a.isLoading||v.isLoading,$=!a.isError&&!a.isLoading&&!a.data,re=it.includes(A),gt=!a.isError&&(A==="PENDING_UPLOAD"||ne.includes(A)),mt=at.includes(A),O=dt({snapshot:a.data,getSnapshotError:a.error,getSessionError:r.error,createSnapshotError:d.error,uploadSnapshotError:p.error,cancelSnapshotError:y.error,disconnectSnapshotError:v.error}),se=(0,h.useCallback)(async()=>{x&&C({uid:x})},[C,x]),ae=(0,h.useCallback)(()=>{x&&u({uid:x})},[u,x]),ht=(0,h.useCallback)(()=>{x&&E&&g({uid:x,snapshotUid:E})},[g,x,E]),xt=(0,h.useCallback)(()=>{x&&E&&b({uid:x,snapshotUid:E})},[b,x,E]);return U?(0,e.jsx)("div",{children:(0,e.jsx)(t.x6,{i18nKey:"migrate-to-cloud.summary.page-loading",children:"Loading..."})}):r.data?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(m.B,{direction:"column",gap:2,children:[r.data&&(0,e.jsx)(Ne,{session:r.data,snapshot:a.data,isBusy:Y,disconnectIsLoading:v.isLoading,onDisconnect:se,showBuildSnapshot:$,buildSnapshotIsLoading:d.isLoading,onBuildSnapshot:ae,showUploadSnapshot:gt,uploadSnapshotIsLoading:p.isLoading||ne.includes(A),onUploadSnapshot:ht,showRebuildSnapshot:mt}),O&&(0,e.jsx)(J,{severity:O.severity,title:O.title,error:O.error,children:(0,e.jsx)(l.E,{element:"p",children:O.body})}),($||re)&&(0,e.jsxs)(k.a,{display:"flex",justifyContent:"center",paddingY:10,children:[$&&(0,e.jsx)(qe,{disabled:Y,isLoading:d.isLoading,onClick:ae}),re&&(0,e.jsx)(_e,{disabled:Y,isLoading:y.isLoading,onClick:xt})]}),a.data?.results&&a.data.results.length>0&&(0,e.jsxs)(m.B,{gap:4,direction:"column",children:[(0,e.jsx)(Qe,{resources:a.data.results,onChangePage:i,numberOfPages:Math.ceil((a?.data?.stats?.total||0)/oe),page:s}),(0,e.jsx)(et,{})]})]}),(0,e.jsx)(je,{isOpen:n,isLoading:v.isLoading,isError:v.isError,onDisconnectConfirm:se,onDismiss:()=>o(!1)})]}):(0,e.jsx)(Te,{})};function dt(n){const{snapshot:o,getSnapshotError:r,getSessionError:s,createSnapshotError:i,uploadSnapshotError:a,cancelSnapshotError:u,disconnectSnapshotError:d}=n,g=(0,t.t)("migrate-to-cloud.onprem.error-see-server-logs","See the Grafana server logs for more details");if(s)return{severity:"error",title:(0,t.t)("migrate-to-cloud.onprem.get-session-error-title","Error loading migration configuration"),body:g,error:s};if(r)return{severity:"error",title:(0,t.t)("migrate-to-cloud.onprem.get-snapshot-error-title","Error loading snapshot"),body:g,error:r};if(d)return{severity:"warning",title:(0,t.t)("migrate-to-cloud.onprem.disconnect-error-title","Error disconnecting"),body:g,error:d};if(i)return{severity:"warning",title:(0,t.t)("migrate-to-cloud.onprem.create-snapshot-error-title","Error creating snapshot"),body:g,error:i};if(a)return{severity:"warning",title:(0,t.t)("migrate-to-cloud.onprem.upload-snapshot-error-title","Error uploading snapshot"),body:g,error:a};if(u)return{severity:"warning",title:(0,t.t)("migrate-to-cloud.onprem.cancel-snapshot-error-title","Error cancelling creating snapshot"),body:g,error:u};if(o?.status==="ERROR")return{severity:"warning",title:(0,t.t)("migrate-to-cloud.onprem.snapshot-error-status-title","Error migrating resources"),body:(0,t.t)("migrate-to-cloud.onprem.snapshot-error-status-body","There was an error creating the snapshot or starting the migration process. See the Grafana server logs for more details")};const p=o?.stats?.statuses?.ERROR??0,b=o?.stats?.statuses?.WARNING??0;if(o?.status==="FINISHED"&&p+b>0){let y="";return p>0?y=(0,t.t)("migrate-to-cloud.onprem.migration-finished-with-errors-body","The migration has completed, but some items could not be migrated to the cloud stack. Check the failed resources for more details"):b>0&&(y=(0,t.t)("migrate-to-cloud.onprem.migration-finished-with-warnings-body","The migration has completed with some warnings. Check individual resources for more details")),{severity:"warning",title:(0,t.t)("migrate-to-cloud.onprem.migration-finished-with-caveat-title","Resource migration complete"),body:y}}}function ut(){const n=D.$.cloudMigrationFeedbackURL;return(0,e.jsxs)(ie.YW,{navId:"migrate-to-cloud",children:[(0,e.jsx)(L.F,{title:(0,t.t)("migrate-to-cloud.public-preview.title","Migrate to Grafana Cloud is in public preview"),buttonContent:(0,t.t)("migrate-to-cloud.public-preview.button-text","Give feedback"),severity:"info",onRemove:n?()=>{window.open(n,"_blank")}:void 0,children:(0,e.jsxs)(t.x6,{i18nKey:"migrate-to-cloud.public-preview.message",children:["No SLAs are available yet."," ",(0,e.jsx)(S.Y,{href:"https://grafana.com/docs/grafana-cloud/account-management/migration-guide/#grafana-cloud-migration-assistant",external:!0,children:"Visit our docs"})," ","to learn more about this feature!"]})}),D.$.cloudMigrationIsTarget?(0,e.jsx)(fe,{}):(0,e.jsx)(ct,{})]})}}}]);

//# sourceMappingURL=MigrateToCloud.f6f8c8eb8d103cc9d24a.js.map