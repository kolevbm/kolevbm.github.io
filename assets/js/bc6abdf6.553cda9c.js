"use strict";(self.webpackChunktaking_notes=self.webpackChunktaking_notes||[]).push([[8907],{7642:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=r(4848),i=r(8453);const s={slug:"regex",title:"Regex MDbus LOG file with node.js",authors:["boris"],tags:["regex","node","js","modbus"]},o=void 0,a={permalink:"/blog/regex",source:"@site/blog/2024-09-24-basic-nodejs-regex-formatter/index.mdx",title:"Regex MDbus LOG file with node.js",description:"Open a file, perform regex and generate output file",date:"2024-09-24T00:00:00.000Z",tags:[{inline:!1,label:"regex",permalink:"/blog/tags/regex",description:"regex tag description"},{inline:!1,label:"node",permalink:"/blog/tags/node"},{inline:!1,label:"javascript",permalink:"/blog/tags/js"},{inline:!0,label:"modbus",permalink:"/blog/tags/modbus"}],readingTime:2.155,hasTruncateMarker:!0,authors:[{name:"Boris Kolev",title:"owner",key:"boris",page:null}],frontMatter:{slug:"regex",title:"Regex MDbus LOG file with node.js",authors:["boris"],tags:["regex","node","js","modbus"]},unlisted:!1,nextItem:{title:"Greetings!",permalink:"/blog/greetings"}},l={authorsImageUrls:[void 0]},c=[{value:"Additional Explanation:",id:"additional-explanation",level:2}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Open a file, perform regex and generate output file"}),"\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"*.js"})," file dor exapmle ",(0,t.jsx)(n.code,{children:"formatter.js"})," , ",(0,t.jsx)(n.em,{children:"formatter"})," because this will format ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(166).A+"",children:"beckhoff.log"})," file from MDBus session to our needs."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["will filter for slaveID 01 and func type 03 with ",(0,t.jsx)(n.code,{children:"pattern1"}),", will add new line ",(0,t.jsx)(n.code,{children:"\\n"})," and carriage return ",(0,t.jsx)(n.code,{children:"\\r"})," before the first match group ",(0,t.jsx)(n.code,{children:"$1"}),", which is (",(0,t.jsx)(n.code,{children:"pattern1"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["will remove the date/time stamp on ",(0,t.jsx)(n.code,{children:"pattern2"}),","]}),"\n",(0,t.jsx)(n.li,{children:"additional formatting with the 3rd pattern"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="formatter.js"',children:'const fs = require("fs");\r\n\r\n// Function to process the file\r\nfunction processFile(inputFile, outputFile) {\r\n  // Read the input file as a string\r\n  fs.readFile(inputFile, "utf8", (err, data) => {\r\n    if (err) {\r\n      console.error("Error reading the input file:", err);\r\n      return;\r\n    }\r\n\r\n    // Find the pattern "01 03 " and ensure a newline before each occurrence\r\n    const pattern1 = "01 03 ";\r\n    const pattern2 = /\\d{2} \\d{2}:\\d{2}:\\d{2}\\.\\d{3} B/g;\r\n    const modifiedData = data\r\n      .replace(pattern2, "")\r\n      .replace(new RegExp(`(${pattern1})`, "g"), "\\n\\r$1")\r\n      .replace(/\\s\\n\\s{2}/g, "");\r\n\r\n    // Write the modified content to output.txt\r\n    file: fs.writeFile(outputFile, modifiedData, "utf8", (err) => {\r\n      if (err) {\r\n        console.error("Error writing the output file:", err);\r\n        return;\r\n      }\r\n      console.log(`File processed successfully. Check the output at ${outputFile}`);\r\n    });\r\n  });\r\n}\r\n\r\n// Specify input and output file paths\r\nconst inputFile = "beckhoff.log";\r\nconst outputFile = "output.txt";\r\n\r\n// Process the file\r\nprocessFile(inputFile, outputFile);\r\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To run the code make sure ",(0,t.jsx)(n.code,{children:"beckhoff.log"})," is in the same folder and type in the terminal:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"node formatter.js\n"})}),"\n",(0,t.jsxs)(n.p,{children:["this will run the app and generate a text file ",(0,t.jsx)(n.code,{children:"output.txt"})," with formatted data"]}),"\n",(0,t.jsx)(n.h2,{id:"additional-explanation",children:"Additional Explanation:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"From ChatGPT:"})})}),"\n",(0,t.jsxs)(n.p,{children:["The expression ",(0,t.jsx)(n.code,{children:"\\n\\r$1"})," is commonly used in the context of a replace operation with regular expressions. Here's what it means:"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"\\n\\r"}),": This represents a combination of newline (\\n) and carriage return (\\r), which is often used to create a new line or start a new paragraph in some operating systems (like Windows)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"\\n"}),": Newline character (moves the cursor to the next line).",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"\\r"}),": Carriage return (moves the cursor to the beginning of the line).",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"$1"}),": In regular expressions, $1 refers to the first captured group from a matching pattern."]}),"\n",(0,t.jsxs)(n.p,{children:['When you use parentheses () in a regular expression, whatever is matched inside those parentheses is stored as a "capture group."\r\n',(0,t.jsx)(n.code,{children:"$1"})," is a placeholder for the content of the first capturing group, i.e., whatever was matched by the first set of parentheses in the regex."]}),"\n",(0,t.jsx)(n.p,{children:"const regex = /(\\d+)/g;\r\nconst str = \"12345\";\r\nconst result = str.replace(regex, '\\n\\r$1');\r\nconsole.log(result);"}),"\n",(0,t.jsx)(n.p,{children:"Explanation:"}),"\n",(0,t.jsxs)(n.p,{children:["Pattern ",(0,t.jsx)(n.code,{children:"(\\d+)"}),": Captures one or more digits (e.g., 12345).\r\nReplacement ",(0,t.jsx)(n.code,{children:"\\n\\r$1"}),": Adds a newline and carriage return before the matched digits (which is captured as ",(0,t.jsx)(n.code,{children:"$1"}),")."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},166:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/files/beckhoff-a5039384e24b84fd6d1ec713e8073f2f.LOG"},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(6540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);