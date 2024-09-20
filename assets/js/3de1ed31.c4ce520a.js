"use strict";(self.webpackChunktaking_notes=self.webpackChunktaking_notes||[]).push([[387],{9433:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>T,contentTitle:()=>E,default:()=>N,frontMatter:()=>M,metadata:()=>D,toc:()=>R});var t=r(4848),s=r(8453),i=r(6540),a=r(4164),l=r(3104),o=r(6347),c=r(205),d=r(7485),u=r(1682),p=r(679);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:r}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,s=f(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[o,d]=m({queryString:r,groupId:t}),[u,h]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,p.Dv)(r);return[t,(0,i.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),b=(()=>{const e=o??u;return g({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,s]),tabValues:s}}var x=r(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function j(e){let{className:n,block:r,selectedValue:s,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),u=e=>{const n=e.currentTarget,r=c.indexOf(n),t=o[r].value;t!==s&&(d(n),i(t))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:p,onClick:u,...i,className:(0,a.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function S(e){const n=b(e);return(0,t.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,t.jsx)(j,{...n,...e}),(0,t.jsx)(y,{...n,...e})]})}function C(e){const n=(0,x.A)();return(0,t.jsx)(S,{...e,children:h(e.children)},String(n))}const w={tabItem:"tabItem_Ymn6"};function _(e){let{children:n,hidden:r,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(w.tabItem,s),hidden:r,children:n})}const M={sidebar_label:"ESP-TOOL",sidebar_position:1,displayed_sidebar:"espressifSidebar"},E="ESPTOOL",D={id:"espressif/esp-tools",title:"ESPTOOL",description:"Get information about the ESP chip:",source:"@site/docs/espressif/esp-tools.mdx",sourceDirName:"espressif",slug:"/espressif/esp-tools",permalink:"/docs/espressif/esp-tools",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"ESP-TOOL",sidebar_position:1,displayed_sidebar:"espressifSidebar"},sidebar:"espressifSidebar",next:{title:"IDF",permalink:"/docs/espressif/"}},T={},R=[{value:"Get information about the ESP chip:",id:"get-information-about-the-esp-chip",level:2},{value:"Manipulate flash memory contents:",id:"manipulate-flash-memory-contents",level:2},{value:"Flash size",id:"flash-size",level:3},{value:"Read",id:"read",level:3},{value:"Write",id:"write",level:3},{value:"Reseting into download mode",id:"reseting-into-download-mode",level:2}];function A(e){const n={admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"esptool",children:"ESPTOOL"})}),"\n",(0,t.jsx)(n.h2,{id:"get-information-about-the-esp-chip",children:"Get information about the ESP chip:"}),"\n",(0,t.jsxs)(C,{children:[(0,t.jsxs)(_,{value:"chipID",label:"Chip ID",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="command"',children:"esptool.py chip_id\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="cmd output example"',children:"C:\\Users\\KolevBM> esptool.py chip_id\r\nesptool.py v4.3\r\nFound 1 serial ports\r\nSerial port COM3\r\nConnecting...\r\nDetecting chip type... ESP32-S3\r\n// highlight-next-line\r\nChip is ESP32-S3 (revision v0.1)\r\nFeatures: WiFi, BLE\r\nCrystal is 40MHz\r\nMAC: f4:12:fa:db:c1:f4\r\nUploading stub...\r\nRunning stub...\r\nStub running...\r\nWarning: ESP32-S3 has no Chip ID. Reading MAC instead.\r\nMAC: f4:12:fa:db:c1:f4\r\nHard resetting via RTS pin...\n"})})]}),(0,t.jsxs)(_,{value:"flashID",label:"Flash ID",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="command"',children:"esptool.py flash_id\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="cmd output example"',children:"C:\\Users\\KolevBM> esptool.py flash_id\r\nesptool.py v4.3\r\nFound 1 serial ports\r\nSerial port COM3\r\nConnecting...\r\nDetecting chip type... ESP32-S3\r\nChip is ESP32-S3 (revision v0.1)\r\nFeatures: WiFi, BLE\r\nCrystal is 40MHz\r\nMAC: f4:12:fa:db:c1:f4\r\nUploading stub...\r\nRunning stub...\r\nStub running...\r\nManufacturer: c8\r\nDevice: 4018\r\n// highlight-next-line\r\nDetected flash size: 16MB\r\nHard resetting via RTS pin...\n"})})]}),(0,t.jsxs)(_,{value:"MAC",label:"MAC address",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="command"',children:"esptool.py read_mac\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="cmd output example"',children:"C:\\Users\\KolevBM> esptool.py read_mac\r\nesptool.py v4.3\r\nFound 1 serial ports\r\nSerial port COM3\r\nConnecting...\r\nDetecting chip type... ESP32-S3\r\nChip is ESP32-S3 (revision v0.1)\r\nFeatures: WiFi, BLE\r\nCrystal is 40MHz\r\nMAC: f4:12:fa:db:c1:f4\r\nUploading stub...\r\nRunning stub...\r\nStub running...\r\n// highlight-next-line\r\nMAC: f4:12:fa:db:c1:f4\r\nHard resetting via RTS pin...\n"})})]})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["chip_id:  ",(0,t.jsx)(n.code,{children:"flash_id"})]}),"\n",(0,t.jsxs)(n.li,{children:["read built-in MAC address:    ",(0,t.jsx)(n.code,{children:"read_mac"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmd",children:"C:\\Users\\KolevBM>esptool.py read_mac\r\nesptool.py v4.3\r\nFound 2 serial ports\r\nSerial port COM19\r\nConnecting....\r\nDetecting chip type... Unsupported detection protocol, switching and trying again...\r\nConnecting....\r\nDetecting chip type... ESP32\r\nChip is ESP32-D0WDQ6 (revision v1.0)\r\nFeatures: WiFi, BT, Dual Core, 240MHz, VRef calibration in efuse, Coding Scheme None\r\nCrystal is 40MHz\r\nMAC: c8:c9:a3:c7:bd:44\r\nUploading stub...\r\nRunning stub...\r\nStub running...\r\nMAC: c8:c9:a3:c7:bd:44\r\nHard resetting via RTS pin... \n"})}),"\n",(0,t.jsx)(n.h2,{id:"manipulate-flash-memory-contents",children:"Manipulate flash memory contents:"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If using TTL converter do not forget to set IO0 to GND to enable boot mode"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["esptool.py ",(0,t.jsx)(n.code,{children:"read_flash"})," command:  ",(0,t.jsx)(n.code,{children:"read_flash <startAddress> <size> <output_file>"})]}),"\n",(0,t.jsxs)(n.li,{children:["esptool.py ",(0,t.jsx)(n.code,{children:"write_flash"}),":  ",(0,t.jsx)(n.code,{children:"write_flash <address> <input_file>"})]}),"\n",(0,t.jsxs)(n.li,{children:["esptool.py: ",(0,t.jsx)(n.code,{children:"erase_flash"})," or ",(0,t.jsx)(n.code,{children:"erase_region <address> <size>"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"flash-size",children:"Flash size"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="read flash size"',children:"esptool.py flash_id\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="cmd output example:"',children:"C:\\Users\\KolevBM> esptool.py flash_id\r\nesptool.py v4.3\r\nFound 1 serial ports\r\nSerial port COM3\r\nConnecting...\r\nDetecting chip type... ESP32-S3\r\nChip is ESP32-S3 (revision v0.1)\r\nFeatures: WiFi, BLE\r\nCrystal is 40MHz\r\nMAC: f4:12:fa:db:c1:f4\r\nUploading stub...\r\nRunning stub...\r\nStub running...\r\nManufacturer: c8\r\nDevice: 4018\r\n// highlight-next-line\r\nDetected flash size: 16MB\r\nHard resetting via RTS pin...\n"})}),"\n",(0,t.jsx)(n.h3,{id:"read",children:"Read"}),"\n",(0,t.jsxs)(n.p,{children:["esptool.py command:  ",(0,t.jsx)(n.code,{children:"read_flash <startAddress> <size> <output_file>"})]}),"\n",(0,t.jsxs)(C,{children:[(0,t.jsxs)(_,{value:"autodetect",label:"Autodetect flash size",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="basic read operation" ',children:"esptool.py -p PORT -b 460800 read_flash 0 ALL flash_contents.bin\n"})}),(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ALL"})," does not awlays work, instead use read with specific flash size"]})}),(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["you can skip ",(0,t.jsx)(n.code,{children:"-p PORT"})," argument, esptool.py will automatically search all ports"]})})]}),(0,t.jsxs)(_,{value:"specifyFlash",label:"Specify flash size",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="4MB of flash"',children:"esptool.py read_flash 0 0x400000 output.bin\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="cmd output example:" ',children:"C:\\Users\\KolevBM>esptool.py read_flash 0 0x400000 output.bin\r\nesptool.py v4.3\r\nFound 2 serial ports\r\nSerial port COM19\r\nConnecting....\r\nDetecting chip type... Unsupported detection protocol, switching and trying again...\r\nConnecting....\r\nDetecting chip type... ESP32\r\nChip is ESP32-D0WDQ6 (revision v1.0)\r\nFeatures: WiFi, BT, Dual Core, 240MHz, VRef calibration in efuse, Coding Scheme None\r\nCrystal is 40MHz\r\nMAC: c8:c9:a3:c7:bd:44\r\nUploading stub...\r\nRunning stub...\r\nStub running...\r\n4194304 (100 %)\r\n4194304 (100 %)\r\nRead 4194304 bytes at 0x00000000 in 378.6 seconds (88.6 kbit/s)...\r\nHard resetting via RTS pin...\n"})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"write",children:"Write"}),"\n",(0,t.jsxs)(n.p,{children:["esptool.py command:  ",(0,t.jsx)(n.code,{children:"write_flash <startAddress> <input_file>"})]}),"\n",(0,t.jsxs)(C,{children:[(0,t.jsxs)(_,{value:"write",label:"write whole flash",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="write already read flash"',children:"esptool.py write_flash 0 output.bin\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="cmd output example:"',children:"C:\\Users\\KolevBM>esptool.py write_flash 0 output.bin\r\nesptool.py v4.3\r\nFound 2 serial ports\r\nSerial port COM19\r\nConnecting....\r\nDetecting chip type... Unsupported detection protocol, switching and trying again...\r\nConnecting......\r\nDetecting chip type... ESP32\r\nChip is ESP32-D0WDQ6 (revision v1.0)\r\nFeatures: WiFi, BT, Dual Core, 240MHz, VRef calibration in efuse, Coding Scheme None\r\nWARNING: Detected crystal freq 41.01MHz is quite different to normalized freq 40MHz. Unsupported crystal in use?\r\nCrystal is 40MHz\r\nMAC: c8:c9:a3:c7:bd:44\r\nUploading stub...\r\nRunning stub...\r\nStub running...\r\nConfiguring flash size...\r\nFlash will be erased from 0x00000000 to 0x003fffff...\r\nCompressed 4194304 bytes to 131172...\r\nWrote 4194304 bytes (131172 compressed) at 0x00000000 in 34.4 seconds (effective 975.3 kbit/s)...\r\nHash of data verified.\r\n\r\nLeaving...\r\nHard resetting via RTS pin...\n"})})]}),(0,t.jsx)(_,{value:"writeApp",label:"write app flash",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="full write with bootloader app and partition-table binaries"',children:"esptool.py write_flash 0x0 bootloader.bin 0x10000 blink.bin 0x8000 partition-table.bin\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"The address and length must both be multiples of the SPI flash erase sector size. This is 0x1000 (4096) bytes for supported flash chips"})}),"\n",(0,t.jsx)(n.h2,{id:"reseting-into-download-mode",children:"Reseting into download mode"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["on esp32-dev-module : Hold ",(0,t.jsx)(n.code,{children:"BOOT"})," and then press ",(0,t.jsx)(n.code,{children:"RESET"})," button,",(0,t.jsx)(n.br,{}),"\n","you can verify it is in ",(0,t.jsx)(n.code,{children:"download mode"})," by opening the serial monitor:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmd",children:"rst:0x1 (POWERON_RESET),boot:0x3 (DOWNLOAD_BOOT(UART0/UART1/SDIO_REI_REO_V2))\r\n\r\nwaiting for download\n"})})]})}function N(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(A,{...e})}):A(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var t=r(6540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);