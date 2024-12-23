"use strict";(self.webpackChunktaking_notes=self.webpackChunktaking_notes||[]).push([[2285],{8733:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=s(4848),l=s(8453);const r={sidebar_label:"Iptables",displayed_sidebar:"linuxSidebar"},t="Iptables",c={id:"linux/networking/iptables",title:"Iptables",description:"Main Tables",source:"@site/docs/linux/networking/iptables.mdx",sourceDirName:"linux/networking",slug:"/linux/networking/iptables",permalink:"/docs/linux/networking/iptables",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Iptables",displayed_sidebar:"linuxSidebar"},sidebar:"linuxSidebar",previous:{title:"Basics",permalink:"/docs/linux/networking/basics"},next:{title:"Permissions",permalink:"/docs/category/permissions"}},a={},o=[{value:"Main Tables",id:"main-tables",level:2},{value:"NAT",id:"nat",level:3},{value:"Filter",id:"filter",level:3},{value:"Mangle",id:"mangle",level:3},{value:"Basic syntax",id:"basic-syntax",level:2},{value:"Tables",id:"tables",level:3},{value:"Chains",id:"chains",level:3},{value:"Targets",id:"targets",level:3},{value:"Matching Criteria",id:"matching-criteria",level:3},{value:"Match extensions",id:"match-extensions",level:3},{value:"Connection Tracking",id:"connection-tracking",level:2},{value:"Stateless",id:"stateless",level:3},{value:"Stateful",id:"stateful",level:3},{value:"Save and Restore Rules",id:"save-and-restore-rules",level:2},{value:"Basic Examples",id:"basic-examples",level:2},{value:"Logging",id:"logging",level:3},{value:"Basic Logging",id:"basic-logging",level:4},{value:"Advanced Logging",id:"advanced-logging",level:4},{value:"combining with DROP",id:"combining-with-drop",level:4},{value:"log-level",id:"log-level",level:4},{value:"Live monitoring",id:"live-monitoring",level:3},{value:"Read Logs of traffic monitoring",id:"read-logs-of-traffic-monitoring",level:3},{value:"WIREGUARD",id:"wireguard",level:3},{value:"DOCKER",id:"docker",level:3},{value:"simple bash scripts",id:"simple-bash-scripts",level:3},{value:"NAT",id:"nat-1",level:2},{value:"References",id:"references",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"iptables",children:"Iptables"})}),"\n",(0,i.jsx)(n.h2,{id:"main-tables",children:"Main Tables"}),"\n",(0,i.jsx)(n.p,{children:"The main tables represents the the types of processing that can be done on a packet. The main tables are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nat"})," - Network Address Translation"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"filter"})," - Packet filtering"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mangle"})," - Packet alteration"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:['There are five main hookpoints "chains" are:\r\n',(0,i.jsx)(n.code,{children:"PREROUTING"}),", ",(0,i.jsx)(n.code,{children:"INPUT"}),", ",(0,i.jsx)(n.code,{children:"FORWARD"}),", ",(0,i.jsx)(n.code,{children:"OUTPUT"}),", ",(0,i.jsx)(n.code,{children:"POSTROUTING"})]}),"\n",(0,i.jsx)(n.h3,{id:"nat",children:"NAT"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"NAT Table",src:s(2871).A+"",width:"540",height:"208"})}),"\n",(0,i.jsxs)(n.p,{children:["Used with connection tracking to redirect connections for network\r\naddress translation; typically based on source or destination addresses.\r\nIts built-in chains are: ",(0,i.jsx)(n.code,{children:"OUTPUT"}),", ",(0,i.jsx)(n.code,{children:"POSTROUTING"}),", and ",(0,i.jsx)(n.code,{children:"PREROUTING"})]}),"\n",(0,i.jsx)(n.h3,{id:"filter",children:"Filter"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Filter Table",src:s(2336).A+"",width:"541",height:"208"}),"\r\nUsed to set policies for the type of traffic allowed into,through,and out of\r\nthe computer. Unless you refer to a different table explicitly, iptables\r\noperate on chains within this table by default. Its built-in chains are:\r\n",(0,i.jsx)(n.code,{children:"FORWARD"}),",",(0,i.jsx)(n.code,{children:"INPUT"}),", and ",(0,i.jsx)(n.code,{children:"OUTPUT"})]}),"\n",(0,i.jsx)(n.h3,{id:"mangle",children:"Mangle"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Mangle Table",src:s(3716).A+"",width:"538",height:"250"})}),"\n",(0,i.jsxs)(n.p,{children:["Used for specialized packet alteration, such as stripping off IP options (as\r\nwith the IPV4OPTSSTRIP target extension). Its built-in chains are:\r\n",(0,i.jsx)(n.code,{children:"FORWARD"}),",",(0,i.jsx)(n.code,{children:"INPUT"}),",",(0,i.jsx)(n.code,{children:"OUTPUT"}),",",(0,i.jsx)(n.code,{children:"POSTROUTING"}),", and ",(0,i.jsx)(n.code,{children:"PREROUTING"})]}),"\n",(0,i.jsx)(n.h2,{id:"basic-syntax",children:"Basic syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"iptables [table] [action] [chain] [matching criteria] [target]\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Example"',children:"sudo iptables -t filter -A INPUT -p tcp --dport 80 -j ACCEPT\n"})}),"\n",(0,i.jsx)(n.p,{children:"Append to the INPUT chain in the filter table a rule that accepts all TCP packets destined for port 80."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-t"})," specifies the table to use (default is ",(0,i.jsx)(n.code,{children:"filter"}),")"]})}),"\n",(0,i.jsx)(n.h3,{id:"tables",children:"Tables"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"filter"}),": the default table, which is used for packet filtering"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"nat"}),": used for network address translation"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"mangle"}),": used for specialized packet alteration"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"raw"}),": used for configuring exemptions from connection tracking"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"security"}),": used for Mandatory Access Control (MAC) rules"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"chains",children:"Chains"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"INPUT"}),": packets destined for the local sockets"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FORWARD"}),": packets routed through the host system"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"OUTPUT"}),": packets generated by the host system (localy genertated packets)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"PREROUTING"}),": altering packets as soon as they come in"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"POSTROUTING"}),": altering packets as they are about to leave"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Each CHAIN has its own default policies (ACCEPT/DROP/REJECT), which can be set using the ",(0,i.jsx)(n.code,{children:"-P"})," option."]})}),"\n",(0,i.jsx)(n.h3,{id:"targets",children:"Targets"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ACCEPT"}),": allow the packet to pass"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DROP"}),": silently discard the packet"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"REJECT"}),": discard the packet and send an error message back to the sorce (sender)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"LOG"}),": log the packet details and ",(0,i.jsx)(n.strong,{children:"continue"})," processing"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"RETURN"}),": stop processing the current chain and return to the calling chain"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"QUEUE"}),": pass the packet to a user-space application"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"REDIRECT"}),": redirect the packet to a local socket (another port or address)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"matching-criteria",children:"Matching Criteria"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"-p"}),": protocol"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"-s"}),": source address"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"-d"}),": destination address"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"-i"}),": input interface"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"-o"}),": output interface"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"-m"}),": match extension"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"-j"}),": target extension"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"match-extensions",children:"Match extensions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"--state"}),": match connection state"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"--sport"}),": match source port"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"--dport"}),": match destination port"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"--icmp-type"}),": match ICMP type"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"--limit"}),": match rate limiting\r\n",(0,i.jsx)(n.code,{children:"-m limit --limit 5/minute"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"--log-prefix"}),": log message prefix"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"--log-level"}),": log message level"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"--comment"}),": add a comment to the rule\r\n",(0,i.jsx)(n.code,{children:'-m comment --comment "This is a comment"'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"conntrack"}),": match connection tracking state\r\n",(0,i.jsx)(n.code,{children:"-m conntrack --ctstate ESTABLISHED,RELATED"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"connection-tracking",children:"Connection Tracking"}),"\n",(0,i.jsx)(n.p,{children:"Connection states recognized by the connection tracking system are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"NEW"}),": the first packet of a connection"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ESTABLISHED"}),": packets that are part of an existing connection"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"RELATED"}),": packets that ",(0,i.jsx)(n.strong,{children:"start"})," a new connection but are ",(0,i.jsx)(n.strong,{children:"associated with"})," an existing connection"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"INVALID"}),": packets that don't belong to any known connection"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"stateless",children:"Stateless"}),"\n",(0,i.jsx)(n.p,{children:"Decisions are mare solely based on the information contained within the induvidual packet, such as source/destination IP addresses, ports, and protocol."}),"\n",(0,i.jsx)(n.p,{children:"pros:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"simple"}),"\n",(0,i.jsx)(n.li,{children:"fast (lower memory and processing requirements)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"cons:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"less secure, as it can't detect certain types of attacks"}),"\n",(0,i.jsx)(n.li,{children:"requires more complex rules to achieve the same level of security"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"iptables -A INPUT -p tcp --dport 80 -j ACCEPT\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"This rule allows all incoming TCP packets destined for port 80 regardless of the connection state."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"stateful",children:"Stateful"}),"\n",(0,i.jsx)(n.p,{children:"It can distinguish between new connections and those that are part of existing, established connections."}),"\n",(0,i.jsx)(n.p,{children:"pros:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"more secure"}),"\n",(0,i.jsx)(n.li,{children:"simpler rules, as the connection tracking system maintains the state of each connection"}),"\n",(0,i.jsx)(n.li,{children:"better support for complex protocols"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"cons:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"higher memory and processing requirements"}),"\n",(0,i.jsx)(n.li,{children:"more complex to implement and troubleshoot"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"iptables -A INPUT -m conntrack --ctstate NEW -p tcp --dport 80 -j ACCEPT\r\niptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The first rule allows all incoming TCP packets destined for port 80 that are part of a new connection. The second rule allows all incoming packets that are part of an established or related connection."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"save-and-restore-rules",children:"Save and Restore Rules"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"iptables-persistent"})," package on Debian/Ubuntu provides tools like ",(0,i.jsx)(n.code,{children:"iptables-save"})," and ",(0,i.jsx)(n.code,{children:"iptables-restore"})," for saving and restoring firewall rules."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt update\r\nsudo apt install iptables-persistent\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Save rules"',children:"sudo iptables-save > /etc/iptables/rules.v4\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Restore rules"',children:"sudo iptables-restore < /etc/iptables/rules.v4\n"})}),"\n",(0,i.jsx)(n.h2,{id:"basic-examples",children:"Basic Examples"}),"\n",(0,i.jsx)(n.h3,{id:"logging",children:"Logging"}),"\n",(0,i.jsx)(n.h4,{id:"basic-logging",children:"Basic Logging"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sudo iptables -A INPUT -j LOG --log-prefix "Dropped packet: " --log-level 7\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"this will log all incoming packets"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"advanced-logging",children:"Advanced Logging"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sudo iptables -A INPUT -m limit --limit 5/minute -j LOG --log-prefix "Dropped packet: " --log-level 7\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"this rule limits the logging to 5 messages per minute to prevent log flooding"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"combining-with-drop",children:"combining with DROP"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sudo iptables -A INPUT -j LOG --log-prefix "iptables DROP: " --log-level 7\r\nsudo iptables -A INPUT -j DROP\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"this will log all incoming packets, before actually dropping them"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"log-level",children:"log-level"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"0"}),": emerg, something is going very wrong"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"1"}),": alert, immediate action is required"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"2"}),": crit, critical hardware or software failure"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"3"}),": err, usuallty hardware problems of drivers"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"4"}),": warning, something is not right, but not critical"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"5"}),": notice, normal but significant events"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"6"}),": info, normal operational messages"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"7"}),": debug, debugging messages"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"live-monitoring",children:"Live monitoring"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'watch -n 1 "sudo iptables -L DOCKER-USER -v -n --line-numbers"\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"this will show the rules in the DOCKER-USER chain every second"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"read-logs-of-traffic-monitoring",children:"Read Logs of traffic monitoring"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="log monitoring directrly from kernel ring buffer"',children:"sudo dmesg -H | grep iptables\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="log monitoring using journalctl -k (kernel)"',children:" sudo journalctl -k | grep -i DROP\n"})}),"\n",(0,i.jsx)(n.h3,{id:"wireguard",children:"WIREGUARD"}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.code,{children:"PostUp"})," and ",(0,i.jsx)(n.code,{children:"PostDown"})," in wireguard config file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Note use this configuration file with > wg-quick wg0\r\n\r\n[Interface]\r\nPrivateKey = yourprivatekey\r\n# PublicKey = RV6uxHOGhZVIPBdo3pP7hRmi5UfvgCx7NKDssTv6eFY=\r\nAddress = 10.10.10.1/24\r\nListenPort = 51820\r\n\r\n#PostUp   = iptables -A FORWARD -i %i -j ACCEPT; iptables -A FORWARD -o %i -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE\r\n#PostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -D FORWARD -o %i -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE\r\n\r\n[Peer]\r\n\r\n# Boris Legion\r\nPublicKey = Ldu78bq6gedehTUSG4Cp3khV7xpSkVtpsJA3ytT0P0Y=\r\nAllowedIPs = 10.10.10.2/32\n"})}),"\n",(0,i.jsx)(n.p,{children:"In general you have to:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MASQUERADE"})," the output interface traffic with source address from ",(0,i.jsx)(n.code,{children:"WG"})," network 10.10.10.0/24, all this in the ",(0,i.jsx)(n.code,{children:"POSTROUTING"})," chain"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo iptables -t nat -A POSTROUTING -o eth0 -s 10.10.10.0/24 -j MASQUERADE\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ACCEPT"})," the traffic from input interce -> output interface and vice versa"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo iptables  -A FORWARD -i eth0 -o wg0 -j ACCEPT\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo iptables  -A FORWARD -i wg0 -o eth0  -s 10.10.10.0/24 -j ACCEPT\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"if you have Docker installed and have a DROP policy things in step 2. and 3. are done in DOCKER-USER chain"})}),"\n",(0,i.jsx)(n.h3,{id:"docker",children:"DOCKER"}),"\n",(0,i.jsx)(n.h3,{id:"simple-bash-scripts",children:"simple bash scripts"}),"\n",(0,i.jsx)(n.h2,{id:"nat-1",children:"NAT"}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.oreilly.com/library/view/linux-iptables-pocket/9780596801861/",children:"Linux iptables Pocket Reference, Gregor N. Purdy O'Reilly Media, Inc."})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://a.co/d/2G43Iu1",children:"Linux Firewall, Cloudmatrix S.R.O."})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2336:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/filter-table-aee9cdec90c5ae38eb9b66639674177f.png"},3716:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/mangle-table-a35e145bc2d981f352b29088ce135a35.png"},2871:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/nat-table-f4e3ec9b5d1d60270ce4a876c6d86c6d.png"},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(6540);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);