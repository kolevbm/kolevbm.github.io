"use strict";(self.webpackChunktaking_notes=self.webpackChunktaking_notes||[]).push([[8281],{6203:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=s(4848),r=s(8453);const a={sidebar_label:"Dump",sidebar_position:2,displayed_sidebar:"espressifSidebar"},i="Flash region Dump",o={id:"espressif/esp-tools/dump",title:"Flash region Dump",description:"1. read partition table esptool region",source:"@site/docs/espressif/esp-tools/dump.mdx",sourceDirName:"espressif/esp-tools",slug:"/espressif/esp-tools/dump",permalink:"/docs/espressif/esp-tools/dump",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Dump",sidebar_position:2,displayed_sidebar:"espressifSidebar"},sidebar:"espressifSidebar",previous:{title:"Flash",permalink:"/docs/espressif/esp-tools/esp-tools-flash"}},l={},d=[{value:"1. read partition table esptool region",id:"1-read-partition-table-esptool-region",level:2},{value:"2. Convert partitoin image file to csv in shell",id:"2-convert-partitoin-image-file-to-csv-in-shell",level:2},{value:"3. Read NVS content",id:"3-read-nvs-content",level:2},{value:"4. Erase NVS content",id:"4-erase-nvs-content",level:2},{value:"5. Contvert NVS content to human radable format",id:"5-contvert-nvs-content-to-human-radable-format",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"flash-region-dump",children:"Flash region Dump"})}),"\n",(0,t.jsx)(n.h2,{id:"1-read-partition-table-esptool-region",children:"1. read partition table esptool region"}),"\n",(0,t.jsxs)(n.p,{children:["generally it is on addres ",(0,t.jsx)(n.code,{children:"0x8000"})," or ",(0,t.jsx)(n.code,{children:"0x9000"})," the size is always ",(0,t.jsx)(n.code,{children:"0xc00"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="read partition table"',children:" esptool.py read_flash 0xc00 ptable.img\n"})}),"\n",(0,t.jsx)(n.h2,{id:"2-convert-partitoin-image-file-to-csv-in-shell",children:"2. Convert partitoin image file to csv in shell"}),"\n",(0,t.jsx)(n.p,{children:"c:\\Espressif\\frameworks\\esp-idf-v5.1.2\\components\\partition_table> py gen_esp32part.py C:\\Projects\\Espressif\\ESPtoolTests\\ptable.img"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Parsing binary partition input...\r\nVerifying table...\r\n# ESP-IDF Partition Table\r\n# Name, Type, SubType, Offset, Size, Flags\r\nnvs,data,nvs,0x9000,16K,\r\nphy_init,data,phy,0xf000,4K,\r\notadata,data,ota,0x10000,8K,\r\nota_0,app,ota_0,0x20000,4M,\r\nota_1,app,ota_1,0x420000,4M,\r\nfactory,app,factory,0x820000,4M,\n"})}),"\n",(0,t.jsx)(n.h2,{id:"3-read-nvs-content",children:"3. Read NVS content"}),"\n",(0,t.jsx)(n.p,{children:"0x1000 (4KB), if nvs size is 16KB size is 0x4000"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="read_flash"',children:"esptool.py read_flash 0x9000 0x4000 nvs.img\n"})}),"\n",(0,t.jsx)(n.h2,{id:"4-erase-nvs-content",children:"4. Erase NVS content"}),"\n",(0,t.jsx)(n.p,{children:"0x1000 (4KB), if nvs size is 16KB size is 0x4000"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="erase_region"',children:"esptool.py erase_region 0x9000 0x4000\n"})}),"\n",(0,t.jsx)(n.h2,{id:"5-contvert-nvs-content-to-human-radable-format",children:"5. Contvert NVS content to human radable format"})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(6540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);