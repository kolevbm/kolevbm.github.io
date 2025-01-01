"use strict";(self.webpackChunktaking_notes=self.webpackChunktaking_notes||[]).push([[8020],{1564:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>c});var n=r(1299),t=r(4848),l=r(8453);const o={slug:"docker-wg-firefly-iii",title:"Docker compose for Firefly III with WireGuard VPN client",authors:["boris"],tags:["docker","finance","firefly","wg","wireguard"]},s=void 0,a={authorsImageUrls:[void 0]},c=[];function f(e){const i={a:"a",em:"em",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["\u0417\u0430\u043f\u0438\u0441\u0430\u0445 \u0441\u0438 ",(0,t.jsx)(i.a,{href:"https://www.firefly-iii.org/",children:"firefly-iii"})," \u0432 docker \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u043d\u0430 \u043b\u043e\u043a\u0430\u043b\u0435\u043d \u0441\u044a\u0440\u0432\u044a\u0440 Raspberry Pi5, \u043d\u043e \u0438\u0441\u043a\u0430\u0445 \u0434\u0430 \u0438\u043c\u0430\u043c \u0434\u043e\u0441\u0442\u044a\u043f \u0434\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0442\u043e \u043d\u0430\u0432\u0441\u044f\u043a\u044a\u0434\u0435, \u0430 \u043d\u0435 \u0441\u0430\u043c\u043e \u0432 \u0434\u043e\u043c\u0430\u0448\u043d\u0430\u0442\u0430 \u043c\u0440\u0435\u0436\u0430.\r\n\u0417\u0430 \u0446\u0435\u043b\u0442\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u0438\u0445 docker-compose \u0444\u0430\u0439\u043b, \u043a\u043e\u0439\u0442\u043e:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\u0441\u044a\u0437\u0434\u0430\u0432\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441 ",(0,t.jsx)(i.a,{href:"https://www.firefly-iii.org/",children:"firefly-iii"})," \u0438 \u0434\u0440\u0443\u0433\u0438\u0442\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0438 \u0437\u0430 \u043d\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0438"]}),"\n",(0,t.jsxs)(i.li,{children:["\u0441\u044a\u0437\u0434\u0430\u0432\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441 ",(0,t.jsx)(i.a,{href:"https://github.com/linuxserver/docker-wireguard",children:"linuxserver/wireguard"})," VPN \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d \u043a\u0430\u0442\u043e \u043a\u043b\u0438\u0435\u043d\u0442, \u043a\u043e\u0439\u0442\u043e \u0441\u0435 \u0441\u0432\u044a\u0440\u0437\u0432\u0430 \u043a\u044a\u043c \u043b\u0438\u0447\u0435\u043d wireguard VPN \u0441\u044a\u0440\u0432\u044a\u0440 \u0438\u043d\u0441\u0442\u0430\u043b\u0438\u0440\u0430\u043d \u043d\u0430 Mikrotik \u0440\u0443\u0442\u0435\u0440 \u0432 \u0434\u0440\u0443\u0433\u0430 \u043c\u0440\u0435\u0436\u0430 \u0441\u044a\u0441 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u043d \u043f\u0443\u0431\u043b\u0438\u0447\u0435\u043d \u0430\u0434\u0440\u0435\u0441."]}),"\n",(0,t.jsx)(i.li,{children:"\u0441\u0432\u044a\u0440\u0437\u0432\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0438\u0442\u0435 \u0432 \u043e\u0431\u0449\u0430 \u0438\u0437\u043e\u043b\u0438\u0440\u0430\u043d\u0430 \u043c\u0440\u0435\u0436\u0430 \u0441\u044a\u0441 \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u0438 IP \u0430\u0434\u0440\u0435\u0441\u0438."}),"\n",(0,t.jsxs)(i.li,{children:["\u043f\u0440\u0435\u043d\u0430\u0441\u043e\u0447\u0432\u0430\u043d\u0435 \u043d\u0430 \u043f\u043e\u0440\u0442\u043e\u0432\u0435 \u043e\u0442 VPN \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u043a\u044a\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0441 ",(0,t.jsx)(i.em,{children:"firefly-iii"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["\u041d\u043e \u0440\u0430\u0437\u0431\u0438\u0440\u0430 \u0441\u0435 \u0442\u043e\u0432\u0430 \u043d\u0435 \u0431\u0435\u0448\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u044a\u0447\u043d\u043e, \u0437\u0430 \u0434\u0430 \u0438\u043c\u0430\u043c \u0432\u0440\u044a\u0437\u043a\u0430 \u043a\u044a\u043c ",(0,t.jsx)(i.em,{children:"firefly-iii"})," \u0438\u0437\u0432\u044a\u043d \u043b\u043e\u043a\u0430\u043b\u043d\u0430 \u043c\u0440\u0435\u0436\u0430 \u0432 \u0434\u043e\u043c\u0430 \u043c\u0438."]})]})}function u(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},8453:(e,i,r)=>{r.d(i,{R:()=>o,x:()=>s});var n=r(6540);const t={},l=n.createContext(t);function o(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(l.Provider,{value:i},e.children)}},1299:e=>{e.exports=JSON.parse('{"permalink":"/blog/docker-wg-firefly-iii","source":"@site/blog/2024-12-31-docker-wg-firefly-iii/index.md","title":"Docker compose for Firefly III with WireGuard VPN client","description":"\u0417\u0430\u043f\u0438\u0441\u0430\u0445 \u0441\u0438 firefly-iii \u0432 docker \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u043d\u0430 \u043b\u043e\u043a\u0430\u043b\u0435\u043d \u0441\u044a\u0440\u0432\u044a\u0440 Raspberry Pi5, \u043d\u043e \u0438\u0441\u043a\u0430\u0445 \u0434\u0430 \u0438\u043c\u0430\u043c \u0434\u043e\u0441\u0442\u044a\u043f \u0434\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0442\u043e \u043d\u0430\u0432\u0441\u044f\u043a\u044a\u0434\u0435, \u0430 \u043d\u0435 \u0441\u0430\u043c\u043e \u0432 \u0434\u043e\u043c\u0430\u0448\u043d\u0430\u0442\u0430 \u043c\u0440\u0435\u0436\u0430.","date":"2024-12-31T00:00:00.000Z","tags":[{"inline":true,"label":"docker","permalink":"/blog/tags/docker"},{"inline":true,"label":"finance","permalink":"/blog/tags/finance"},{"inline":true,"label":"firefly","permalink":"/blog/tags/firefly"},{"inline":true,"label":"wg","permalink":"/blog/tags/wg"},{"inline":true,"label":"wireguard","permalink":"/blog/tags/wireguard"}],"readingTime":4.635,"hasTruncateMarker":true,"authors":[{"name":"Boris Kolev","title":"owner","key":"boris","page":null}],"frontMatter":{"slug":"docker-wg-firefly-iii","title":"Docker compose for Firefly III with WireGuard VPN client","authors":["boris"],"tags":["docker","finance","firefly","wg","wireguard"]},"unlisted":false,"nextItem":{"title":"Regex MDbus LOG file with node.js","permalink":"/blog/regex"}}')}}]);