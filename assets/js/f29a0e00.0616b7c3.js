"use strict";(self.webpackChunktaking_notes=self.webpackChunktaking_notes||[]).push([[2772],{3110:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"linux/logrotate/logrotate","title":"How to set up a simple log rotation with logrotate","description":"1. Create the logrotate file","source":"@site/docs/linux/logrotate/logrotate.mdx","sourceDirName":"linux/logrotate","slug":"/linux/logrotate/","permalink":"/docs/linux/logrotate/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"How to use logrotate","displayed_sidebar":"linuxSidebar"},"sidebar":"linuxSidebar","previous":{"title":"Logrotate","permalink":"/docs/category/logrotate"},"next":{"title":"Networking","permalink":"/docs/category/networking"}}');var i=o(4848),r=o(8453);const l={sidebar_label:"How to use logrotate",displayed_sidebar:"linuxSidebar"},a="How to set up a simple log rotation with logrotate",s={},c=[];function d(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"how-to-set-up-a-simple-log-rotation-with-logrotate",children:"How to set up a simple log rotation with logrotate"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:'title="check version and installation"',children:"logrotate --version\n"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Create the logrotate file"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:'title="Create a new logrotate file"',children:"touch  /etc/logrotate.d/mylogrotate\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Add the configuration to the file"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:'title="/etc/logrotate.d/mylogrotate"',children:"/var/log/myapp.log {\r\n     daily\r\n     rotate 7\r\n     compress\r\n     delaycompress\r\n     missingok\r\n     notifempty\r\n}\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["Known issue with nodejs console.log ",(0,i.jsx)(t.strong,{children:"not logging after rotation"})," - The issue here is that after log rotation, the file handle that console.log is writing to doesn\u2019t automatically update to the newly created log file. Log rotation typically renames the active log file (like myapp.log to something like myapp.log.1) and creates a new myapp.log, but Node.js keeps writing to the old file handle unless the application is restarted or the log file is reopened.\r\nSo you can use ",(0,i.jsx)(t.code,{children:"copytruncate"})," in logrotate configuration to avoid this issue."]})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"copytruncate"})," in Logrotate"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Add the ",(0,i.jsx)(t.code,{children:"copytruncate"})," option to your Logrotate configuration for myapp.log. This option copies the current contents to the rotated file and truncates (",(0,i.jsx)(t.em,{children:"setting its size to zero, erases the file contents without deleting the file itself"})," ) the original myapp.log, rather than renaming it. This way, Node.js can continue writing to myapp.log without needing a new file handle."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"An example of the configuration:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"/var/log/myapp.log {\r\n    daily\r\n    copytruncate\r\n    missingok\r\n    rotate 7\r\n    compress\r\n    delaycompress\r\n    notifempty\r\n}\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["if you pass ",(0,i.jsx)(t.code,{children:"*.log"})," to logrotate ",(0,i.jsx)(t.code,{children:"/var/log/*.log"}),", it will rotate all the files with .log extension in the directory with given configuration."]})})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>a});var n=o(6540);const i={},r=n.createContext(i);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);