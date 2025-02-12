"use strict";(self.webpackChunktaking_notes=self.webpackChunktaking_notes||[]).push([[7546],{6937:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"linux/WSL","title":"Move the virtual hard drive of WSL to another location","description":"Windows Subsystem for Linux (WSL)","source":"@site/docs/linux/WSL.mdx","sourceDirName":"linux","slug":"/linux/WSL","permalink":"/docs/linux/WSL","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"WSL","displayed_sidebar":"linuxSidebar"},"sidebar":"linuxSidebar","previous":{"title":"SSH keys","permalink":"/docs/linux/ssh"},"next":{"title":"Aliases","permalink":"/docs/linux/alias"}}');var r=t(4848),i=t(8453);const s={sidebar_label:"WSL",displayed_sidebar:"linuxSidebar"},a="Move the virtual hard drive of WSL to another location",d={},l=[];function c(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"move-the-virtual-hard-drive-of-wsl-to-another-location",children:"Move the virtual hard drive of WSL to another location"})}),"\n",(0,r.jsx)(n.p,{children:"Windows Subsystem for Linux (WSL)"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"wsl --manage DISTRO_NAME --move TARGET_DIRECTORY"})}),"\n",(0,r.jsx)(n.p,{children:"This operation moved ext4.vhdx for the distro."}),"\n",(0,r.jsx)(n.p,{children:"You can first list your available distros with"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"wsl --list\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then move the distro with ",(0,r.jsx)(n.code,{children:"wsl --manage DISTRO_NAME --move TARGET_DIRECTORY"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'wsl --manage Ubuntu --move "D:\\WSL\\Ubuntu-24"\n'})}),"\n",(0,r.jsx)(n.p,{children:"This operation moved ext4.vhdx for the distro."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);