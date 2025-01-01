"use strict";(self.webpackChunktaking_notes=self.webpackChunktaking_notes||[]).push([[9271],{5920:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"linux/alpine/env","title":"Adding environment variables","description":"To add environment variables in Alpine Linux, you can set them temporarily for the current session or configure them permanently. Here are the steps for both methods:","source":"@site/docs/linux/alpine/env.mdx","sourceDirName":"linux/alpine","slug":"/linux/alpine/env","permalink":"/docs/linux/alpine/env","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Environment variables","displayed_sidebar":"linuxSidebar"},"sidebar":"linuxSidebar","previous":{"title":"OpenRC services","permalink":"/docs/linux/alpine/"},"next":{"title":"Logrotate","permalink":"/docs/category/logrotate"}}');var s=i(4848),a=i(8453);const t={sidebar_label:"Environment variables",displayed_sidebar:"linuxSidebar"},l="Adding environment variables",o={},d=[{value:"1. Temporarily Setting Environment Variables",id:"1-temporarily-setting-environment-variables",level:3},{value:"2. Permanently Adding Environment Variables",id:"2-permanently-adding-environment-variables",level:3},{value:"a. User-Specific (Bash Shell)",id:"a-user-specific-bash-shell",level:4},{value:"b. System-Wide Environment Variables",id:"b-system-wide-environment-variables",level:4},{value:"Alternatively, you can create a file under <code>/etc/profile.d/</code>, such as:",id:"alternatively-you-can-create-a-file-under-etcprofiled-such-as",level:5}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"adding-environment-variables",children:"Adding environment variables"})}),"\n",(0,s.jsx)(n.p,{children:"To add environment variables in Alpine Linux, you can set them temporarily for the current session or configure them permanently. Here are the steps for both methods:"}),"\n",(0,s.jsx)(n.h3,{id:"1-temporarily-setting-environment-variables",children:"1. Temporarily Setting Environment Variables"}),"\n",(0,s.jsx)(n.p,{children:"This method is useful for one-time settings that only need to exist for the duration of your session."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export MY_VAR="value"\n'})}),"\n",(0,s.jsx)(n.p,{children:"To verify the variable:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"echo $MY_VAR\n"})}),"\n",(0,s.jsx)(n.p,{children:"To get all environment variables:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"printenv\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"This will remain valid only for the duration of the current shell session."})}),"\n",(0,s.jsx)(n.h3,{id:"2-permanently-adding-environment-variables",children:"2. Permanently Adding Environment Variables"}),"\n",(0,s.jsx)(n.p,{children:"To make environment variables persistent across reboots or sessions, you can configure them in various ways depending on whether you want them for a specific user or system-wide."}),"\n",(0,s.jsx)(n.h4,{id:"a-user-specific-bash-shell",children:"a. User-Specific (Bash Shell)"}),"\n",(0,s.jsx)(n.h4,{id:"b-system-wide-environment-variables",children:"b. System-Wide Environment Variables"}),"\n",(0,s.jsx)(n.p,{children:"For system-wide environment variables (available for all users), you can add them to /etc/profile or create a new file in /etc/profile.d/."}),"\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.code,{children:"/etc/profile"})," (or create a script in ",(0,s.jsx)(n.code,{children:"/etc/profile.d/"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/profile\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Add your environment variables ",(0,s.jsx)(n.strong,{children:"at the bottom:"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export MY_VAR="value"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Save and exit the file."}),"\n",(0,s.jsxs)(n.p,{children:["To apply the changes ",(0,s.jsx)(n.strong,{children:"without rebooting"}),", run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source /etc/profile\n"})}),"\n",(0,s.jsxs)(n.h5,{id:"alternatively-you-can-create-a-file-under-etcprofiled-such-as",children:["Alternatively, you can create a file under ",(0,s.jsx)(n.code,{children:"/etc/profile.d/"}),", such as:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/profile.d/myenvvars.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"Inside this file, add:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export MY_VAR="value"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Then save and exit the file. And run ",(0,s.jsx)(n.code,{children:"source /etc/profile"})," to apply the changes."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["I prefer the ",(0,s.jsx)(n.code,{children:"/etc/profile.d/"})," method because it keeps the ",(0,s.jsx)(n.code,{children:"/etc/profile"})," file clean and organized.\r\nAnd all custom variables are stored in separate files."]})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var r=i(6540);const s={},a=r.createContext(s);function t(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);