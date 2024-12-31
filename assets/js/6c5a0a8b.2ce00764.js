"use strict";(self.webpackChunktaking_notes=self.webpackChunktaking_notes||[]).push([[6667],{2382:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"espressif/esp-tools/esp-tools-flash","title":"ESPTOOL","description":"Get information about the ESP chip:","source":"@site/docs/espressif/esp-tools/esp-tools-flash.mdx","sourceDirName":"espressif/esp-tools","slug":"/espressif/esp-tools/esp-tools-flash","permalink":"/docs/espressif/esp-tools/esp-tools-flash","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"Flash","sidebar_position":1,"displayed_sidebar":"espressifSidebar"},"sidebar":"espressifSidebar","previous":{"title":"Esp-Tool","permalink":"/docs/category/esp-tool"},"next":{"title":"Dump","permalink":"/docs/espressif/esp-tools/dump"}}');var s=r(4848),i=r(8453),a=r(1470),l=r(9365);const o={sidebar_label:"Flash",sidebar_position:1,displayed_sidebar:"espressifSidebar"},c="ESPTOOL",d={},u=[{value:"Get information about the ESP chip:",id:"get-information-about-the-esp-chip",level:2},{value:"Manipulate flash memory contents:",id:"manipulate-flash-memory-contents",level:2},{value:"Flash size",id:"flash-size",level:3},{value:"Read",id:"read",level:3},{value:"Write",id:"write",level:3},{value:"Reseting into download mode",id:"reseting-into-download-mode",level:2}];function p(e){const n={admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"esptool",children:"ESPTOOL"})}),"\n",(0,s.jsx)(n.h2,{id:"get-information-about-the-esp-chip",children:"Get information about the ESP chip:"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsxs)(l.A,{value:"chipID",label:"Chip ID",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",metastring:'title="command"',children:"esptool.py chip_id\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",metastring:'title="cmd output example"',children:"C:\\Users\\KolevBM> esptool.py chip_id\r\nesptool.py v4.3\r\nFound 1 serial ports\r\nSerial port COM3\r\nConnecting...\r\nDetecting chip type... ESP32-S3\r\n// highlight-next-line\r\nChip is ESP32-S3 (revision v0.1)\r\nFeatures: WiFi, BLE\r\nCrystal is 40MHz\r\nMAC: f4:12:fa:db:c1:f4\r\nUploading stub...\r\nRunning stub...\r\nStub running...\r\nWarning: ESP32-S3 has no Chip ID. Reading MAC instead.\r\nMAC: f4:12:fa:db:c1:f4\r\nHard resetting via RTS pin...\n"})})]}),(0,s.jsxs)(l.A,{value:"flashID",label:"Flash ID",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",metastring:'title="command"',children:"esptool.py flash_id\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",metastring:'title="cmd output example"',children:"C:\\Users\\KolevBM> esptool.py flash_id\r\nesptool.py v4.3\r\nFound 1 serial ports\r\nSerial port COM3\r\nConnecting...\r\nDetecting chip type... ESP32-S3\r\nChip is ESP32-S3 (revision v0.1)\r\nFeatures: WiFi, BLE\r\nCrystal is 40MHz\r\nMAC: f4:12:fa:db:c1:f4\r\nUploading stub...\r\nRunning stub...\r\nStub running...\r\nManufacturer: c8\r\nDevice: 4018\r\n// highlight-next-line\r\nDetected flash size: 16MB\r\nHard resetting via RTS pin...\n"})})]}),(0,s.jsxs)(l.A,{value:"MAC",label:"MAC address",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",metastring:'title="command"',children:"esptool.py read_mac\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",metastring:'title="cmd output example"',children:"C:\\Users\\KolevBM> esptool.py read_mac\r\nesptool.py v4.3\r\nFound 1 serial ports\r\nSerial port COM3\r\nConnecting...\r\nDetecting chip type... ESP32-S3\r\nChip is ESP32-S3 (revision v0.1)\r\nFeatures: WiFi, BLE\r\nCrystal is 40MHz\r\nMAC: f4:12:fa:db:c1:f4\r\nUploading stub...\r\nRunning stub...\r\nStub running...\r\n// highlight-next-line\r\nMAC: f4:12:fa:db:c1:f4\r\nHard resetting via RTS pin...\n"})})]})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["chip_id:  ",(0,s.jsx)(n.code,{children:"flash_id"})]}),"\n",(0,s.jsxs)(n.li,{children:["read built-in MAC address:    ",(0,s.jsx)(n.code,{children:"read_mac"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmd",children:"C:\\Users\\KolevBM>esptool.py read_mac\r\nesptool.py v4.3\r\nFound 2 serial ports\r\nSerial port COM19\r\nConnecting....\r\nDetecting chip type... Unsupported detection protocol, switching and trying again...\r\nConnecting....\r\nDetecting chip type... ESP32\r\nChip is ESP32-D0WDQ6 (revision v1.0)\r\nFeatures: WiFi, BT, Dual Core, 240MHz, VRef calibration in efuse, Coding Scheme None\r\nCrystal is 40MHz\r\nMAC: c8:c9:a3:c7:bd:44\r\nUploading stub...\r\nRunning stub...\r\nStub running...\r\nMAC: c8:c9:a3:c7:bd:44\r\nHard resetting via RTS pin... \n"})}),"\n",(0,s.jsx)(n.h2,{id:"manipulate-flash-memory-contents",children:"Manipulate flash memory contents:"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If using TTL converter do not forget to set IO0 to GND to enable boot mode"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["esptool.py ",(0,s.jsx)(n.code,{children:"read_flash"})," command:  ",(0,s.jsx)(n.code,{children:"read_flash <startAddress> <size> <output_file>"})]}),"\n",(0,s.jsxs)(n.li,{children:["esptool.py ",(0,s.jsx)(n.code,{children:"write_flash"}),":  ",(0,s.jsx)(n.code,{children:"write_flash <address> <input_file>"})]}),"\n",(0,s.jsxs)(n.li,{children:["esptool.py: ",(0,s.jsx)(n.code,{children:"erase_flash"})," or ",(0,s.jsx)(n.code,{children:"erase_region <address> <size>"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"flash-size",children:"Flash size"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",metastring:'title="read flash size"',children:"esptool.py flash_id\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",metastring:'title="cmd output example:"',children:"C:\\Users\\KolevBM> esptool.py flash_id\r\nesptool.py v4.3\r\nFound 1 serial ports\r\nSerial port COM3\r\nConnecting...\r\nDetecting chip type... ESP32-S3\r\nChip is ESP32-S3 (revision v0.1)\r\nFeatures: WiFi, BLE\r\nCrystal is 40MHz\r\nMAC: f4:12:fa:db:c1:f4\r\nUploading stub...\r\nRunning stub...\r\nStub running...\r\nManufacturer: c8\r\nDevice: 4018\r\n// highlight-next-line\r\nDetected flash size: 16MB\r\nHard resetting via RTS pin...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"read",children:"Read"}),"\n",(0,s.jsxs)(n.p,{children:["esptool.py command:  ",(0,s.jsx)(n.code,{children:"read_flash <startAddress> <size> <output_file>"})]}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsxs)(l.A,{value:"autodetect",label:"Autodetect flash size",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",metastring:'title="basic read operation" ',children:"esptool.py -p PORT -b 460800 read_flash 0 ALL flash_contents.bin\n"})}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ALL"})," does not awlays work, instead use read with specific flash size"]})}),(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["you can skip ",(0,s.jsx)(n.code,{children:"-p PORT"})," argument, esptool.py will automatically search all ports"]})})]}),(0,s.jsxs)(l.A,{value:"specifyFlash",label:"Specify flash size 4MB",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",metastring:'title="4MB of flash"',children:"esptool.py read_flash 0 0x400000 output.bin\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",metastring:'title="cmd output example:" ',children:"C:\\Users\\KolevBM>esptool.py read_flash 0 0x400000 output.bin\r\nesptool.py v4.3\r\nFound 2 serial ports\r\nSerial port COM19\r\nConnecting....\r\nDetecting chip type... Unsupported detection protocol, switching and trying again...\r\nConnecting....\r\nDetecting chip type... ESP32\r\nChip is ESP32-D0WDQ6 (revision v1.0)\r\nFeatures: WiFi, BT, Dual Core, 240MHz, VRef calibration in efuse, Coding Scheme None\r\nCrystal is 40MHz\r\nMAC: c8:c9:a3:c7:bd:44\r\nUploading stub...\r\nRunning stub...\r\nStub running...\r\n4194304 (100 %)\r\n4194304 (100 %)\r\nRead 4194304 bytes at 0x00000000 in 378.6 seconds (88.6 kbit/s)...\r\nHard resetting via RTS pin...\n"})})]}),(0,s.jsx)(l.A,{value:"specifyFlash 16MB",label:"Specify flash size 16MB",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",metastring:'title="16MB of flash"',children:"esptool.py read_flash 0 0x1000000 output.bin\n"})})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsx)(n.p,{children:"If you want to read 16MB flash\r\nesptool.py read_flash 0 0x1000000 output.bin"})]}),"\n",(0,s.jsx)(n.h3,{id:"write",children:"Write"}),"\n",(0,s.jsxs)(n.p,{children:["esptool.py command:  ",(0,s.jsx)(n.code,{children:"write_flash <startAddress> <input_file>"})]}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsxs)(l.A,{value:"write",label:"write whole flash",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",metastring:'title="write already read flash"',children:"esptool.py write_flash 0 output.bin\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",metastring:'title="cmd output example:"',children:"C:\\Users\\KolevBM>esptool.py write_flash 0 output.bin\r\nesptool.py v4.3\r\nFound 2 serial ports\r\nSerial port COM19\r\nConnecting....\r\nDetecting chip type... Unsupported detection protocol, switching and trying again...\r\nConnecting......\r\nDetecting chip type... ESP32\r\nChip is ESP32-D0WDQ6 (revision v1.0)\r\nFeatures: WiFi, BT, Dual Core, 240MHz, VRef calibration in efuse, Coding Scheme None\r\nWARNING: Detected crystal freq 41.01MHz is quite different to normalized freq 40MHz. Unsupported crystal in use?\r\nCrystal is 40MHz\r\nMAC: c8:c9:a3:c7:bd:44\r\nUploading stub...\r\nRunning stub...\r\nStub running...\r\nConfiguring flash size...\r\nFlash will be erased from 0x00000000 to 0x003fffff...\r\nCompressed 4194304 bytes to 131172...\r\nWrote 4194304 bytes (131172 compressed) at 0x00000000 in 34.4 seconds (effective 975.3 kbit/s)...\r\nHash of data verified.\r\n\r\nLeaving...\r\nHard resetting via RTS pin...\n"})})]}),(0,s.jsx)(l.A,{value:"writeApp",label:"write app flash",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",metastring:'title="full write with bootloader app and partition-table binaries"',children:"esptool.py write_flash 0x0 bootloader.bin 0x10000 blink.bin 0x8000 partition-table.bin\n"})})})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"The address and length must both be multiples of the SPI flash erase sector size. This is 0x1000 (4096) bytes for supported flash chips"})}),"\n",(0,s.jsx)(n.h2,{id:"reseting-into-download-mode",children:"Reseting into download mode"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["on esp32-dev-module : Hold ",(0,s.jsx)(n.code,{children:"BOOT"})," and then press ",(0,s.jsx)(n.code,{children:"RESET"})," button,",(0,s.jsx)(n.br,{}),"\n","you can verify it is in ",(0,s.jsx)(n.code,{children:"download mode"})," by opening the serial monitor:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmd",children:"rst:0x1 (POWERON_RESET),boot:0x3 (DOWNLOAD_BOOT(UART0/UART1/SDIO_REI_REO_V2))\r\n\r\nwaiting for download\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var t=r(4164);const s={tabItem:"tabItem_Ymn6"};var i=r(4848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>S});var t=r(6540),s=r(4164),i=r(3104),a=r(6347),l=r(205),o=r(7485),c=r(1682),d=r(679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,i=p(e),[a,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,u]=f({queryString:r,groupId:s}),[m,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),b=(()=>{const e=c??m;return h({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),s=l[r].value;s!==t&&(c(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:i}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function S(e){const n=(0,g.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var t=r(6540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);