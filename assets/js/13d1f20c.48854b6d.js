"use strict";(self.webpackChunktaking_notes=self.webpackChunktaking_notes||[]).push([[529],{6868:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=s(4848),t=s(8453);const a={sidebar_label:"Basics",displayed_sidebar:"linuxSidebar"},i="Networking basics",c={id:"linux/networking/basics",title:"Networking basics",description:"How to change yor Ip address",source:"@site/docs/linux/networking/basics.mdx",sourceDirName:"linux/networking",slug:"/linux/networking/basics",permalink:"/docs/linux/networking/basics",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Basics",displayed_sidebar:"linuxSidebar"},sidebar:"linuxSidebar",previous:{title:"Networking",permalink:"/docs/category/networking"},next:{title:"Iptables",permalink:"/docs/linux/networking/iptables"}},o={},l=[{value:"How to change yor Ip address",id:"how-to-change-yor-ip-address",level:2},{value:"How to change your DNS",id:"how-to-change-your-dns",level:2},{value:"Temporary DNS configuration",id:"temporary-dns-configuration",level:3},{value:"Persistent DNS configuration",id:"persistent-dns-configuration",level:3},{value:"Useful commands",id:"useful-commands",level:2},{value:"Flush and Renew IP address",id:"flush-and-renew-ip-address",level:3},{value:"dhclient",id:"dhclient",level:4},{value:"ip commands",id:"ip-commands",level:4}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"networking-basics",children:"Networking basics"})}),"\n",(0,r.jsx)(n.h2,{id:"how-to-change-yor-ip-address",children:"How to change yor Ip address"}),"\n",(0,r.jsxs)(n.p,{children:["Where are files located? they are located in ",(0,r.jsx)(n.code,{children:"/etc/network/interfaces"})," and ",(0,r.jsx)(n.code,{children:"/etc/network/interfaces.d/"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="/etc/network/interfaces"',children:"# This file describes the network interfaces available on your system\r\n# and how to activate them. For more information, see interfaces(5).\r\n\r\nsource /etc/network/interfaces.d/*\r\n\r\n# The loopback network interface\r\nauto lo\r\niface lo inet loopback\n"})}),"\n",(0,r.jsxs)(n.p,{children:["in the directory ",(0,r.jsx)(n.code,{children:"/etc/network/interfaces.d/"})," you can create a file for each network interface you want to configure, for example, if you want to configure the ",(0,r.jsx)(n.code,{children:"eth0"})," interface you can create a file called ",(0,r.jsx)(n.code,{children:"eth0"})," in the directory ",(0,r.jsx)(n.code,{children:"/etc/network/interfaces.d/"})," and add the following content:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="/etc/network/interfaces.d/eth0"',children:"auto eth0\r\niface eth0 inet static\r\n    address 192.168.1.100\r\n    netmask 255.255.255.0\r\n    gateway 192.168.1.1\r\n    dns-nameservers 8.8.8.8 8.8.4.4\n"})}),"\n",(0,r.jsx)(n.p,{children:"for changes to take effect you need to restart the network service with the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart networking\n"})}),"\n",(0,r.jsx)(n.h2,{id:"how-to-change-your-dns",children:"How to change your DNS"}),"\n",(0,r.jsxs)(n.p,{children:["The DNS configuration is located in the file\r\n",(0,r.jsx)(n.code,{children:"/etc/resolv.conf"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="/etc/resolv.conf"',children:'# Dynamic resolv.conf(5) file for glibc resolver(3) generated by resolvconf(8)\r\n#     DO NOT EDIT THIS FILE BY HAND -- YOUR CHANGES WILL BE OVERWRITTEN\r\n# 127.0.0.53 is the systemd-resolved stub resolver.\r\n# run "resolvectl status" to see details about the actual nameservers.\r\n\r\nnameserver 8.8.8.8\r\nnameserver 8.8.4.4\n'})}),"\n",(0,r.jsx)(n.h3,{id:"temporary-dns-configuration",children:"Temporary DNS configuration"}),"\n",(0,r.jsx)(n.p,{children:"This method directly sets DNS servers for the current session."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Set DNS servers for the current session"',children:"sudo nano /etc/resolv.conf\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add the following lines to the end of the file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="/etc/resolv.conf"',children:"nameserver 8.8.8.8\r\nnameserver 8.8.4.4\n"})}),"\n",(0,r.jsx)(n.h3,{id:"persistent-dns-configuration",children:"Persistent DNS configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.code,{children:"/etc/network/interfaces"}),".\r\nThis method sets DNS servers for all sessions."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title=""',children:"sudo nano /etc/network/interfaces\n"})}),"\n",(0,r.jsx)(n.p,{children:"For example add the following lines to the end of the file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="/etc/network/interfaces"',children:"auto eth0\r\niface eth0 inet static\r\n    address 192.168.1.100\r\n    netmask 255.255.255.0\r\n    gateway 192.168.1.1\r\n    dns-nameservers 8.8.8.8 8.8.4.4\n"})}),"\n",(0,r.jsx)(n.h2,{id:"useful-commands",children:"Useful commands"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="show network interfaces"',children:"ip a\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="check interface status"',children:"ip link\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="show routing table"',children:"ip route\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="show dns configuration"',children:"cat /etc/resolv.conf\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="show hostname"',children:"hostname\n"})}),"\n",(0,r.jsx)(n.h3,{id:"flush-and-renew-ip-address",children:"Flush and Renew IP address"}),"\n",(0,r.jsx)(n.h4,{id:"dhclient",children:"dhclient"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Show IP Address"',children:'```bash title="Flush (Release) IP Address"\r\nsudo dhclient -r <interface>\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Renew IP Address"',children:"\r\nsudo dhclient <interface>\r\n\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Flush and renew"',children:"sudo dhclient -r <interface> && sudo dhclient <interface>\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ip-commands",children:"ip commands"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Flush (Release) IP Address"',children:"sudo ip addr flush dev <interface>\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Renew IP Address"})}),"\n",(0,r.jsxs)(n.p,{children:["For a DHCP-managed interface, restart the ",(0,r.jsx)(n.code,{children:"dhclient"})," to get a new lease:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Renew IP Address"',children:"sudo dhclient <interface>\r\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"For static IP configurations, restarting the networking service will reapply the IP:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Flush and renew"',children:"sudo systemctl restart networking\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var r=s(6540);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);