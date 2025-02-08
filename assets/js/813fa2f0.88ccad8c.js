"use strict";(self.webpackChunktaking_notes=self.webpackChunktaking_notes||[]).push([[58],{7573:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"linux/ssh","title":"SSH login with keys","description":"Copying Your Public Key Manually","source":"@site/docs/linux/ssh.mdx","sourceDirName":"linux","slug":"/linux/ssh","permalink":"/docs/linux/ssh","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_label":"SSH keys","sidebar_position":4,"displayed_sidebar":"linuxSidebar"},"sidebar":"linuxSidebar","previous":{"title":"User management","permalink":"/docs/linux/users"},"next":{"title":"Aliases","permalink":"/docs/linux/alias"}}');var t=s(4848),r=s(8453);const a={sidebar_label:"SSH keys",sidebar_position:4,displayed_sidebar:"linuxSidebar"},o="SSH login with keys",l={},c=[{value:"Copying Your Public Key Manually",id:"copying-your-public-key-manually",level:2},{value:"Generating a new SSH key",id:"generating-a-new-ssh-key",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"ssh-login-with-keys",children:"SSH login with keys"})}),"\n",(0,t.jsx)(n.h2,{id:"copying-your-public-key-manually",children:"Copying Your Public Key Manually"}),"\n",(0,t.jsxs)(n.p,{children:["The content of your ",(0,t.jsx)(n.code,{children:"public_key"})," file must be added to a file at ",(0,t.jsx)(n.code,{children:"~/.ssh/authorized_keys"})," (user home directory) on your remote machine somehow.\r\nIf the folder does not exist create it with ",(0,t.jsx)(n.code,{children:"mkdir -p ~/.ssh"})," and then create the file with ",(0,t.jsx)(n.code,{children:"touch ~/.ssh/authorized_keys"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="create folder on remote machine"',children:"mkdir -p ~/.ssh\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="create file on remote machine"',children:"touch ~/.ssh/authorized_keys\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="copy public key to remote machine"',children:"echo `public_key_string` >> ~/.ssh/authorized_keys\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["you can also use ",(0,t.jsx)(n.code,{children:"ssh-copy-id"})," to copy your public key to the remote machine"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="copy public key to remote machine with ssh-copy-id"',children:"ssh-copy-id username@remote_host\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["When you have a SSH key login setup and ready, it is good to disable password login\r\n",(0,t.jsx)(n.code,{children:"PasswordAuthentication no"})," for all users inside ",(0,t.jsx)(n.code,{children:"/etc/ssh/sshd_config"})," be sure you have ",(0,t.jsx)(n.code,{children:"PubkeyAuthentication yes"})]})}),"\n",(0,t.jsx)(n.h2,{id:"generating-a-new-ssh-key",children:"Generating a new SSH key"}),"\n",(0,t.jsx)(n.p,{children:"from a linux terminal run the following command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="generate new ssh key"',children:"ssh-keygen\n"})}),"\n",(0,t.jsxs)(n.p,{children:["by default it will generate a new key pair id_ed25519 in the ",(0,t.jsx)(n.code,{children:"~/.ssh"})," directory"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="output"',children:"Generating public/private ed25519 key pair.\r\nEnter file in which to save the key (/home/boris/.ssh/id_ed25519):\r\nEnter passphrase (empty for no passphrase):\r\nEnter same passphrase again:\r\nYour identification has been saved in /home/boris/.ssh/id_ed25519\r\nYour public key has been saved in /home/boris/.ssh/id_ed25519.pub\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(6540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);