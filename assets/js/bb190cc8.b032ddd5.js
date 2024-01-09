"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[6193],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||l;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},83191:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"Ch10: \u5206\u5c64\u5f0f\u67b6\u69cb\u98a8\u683c",tsidebar_label:"Ch10: \u5206\u5c64\u5f0f\u67b6\u69cb\u98a8\u683c",sidebar_position:10},i=void 0,o={unversionedId:"sg/fundamentals-of-software-architecture/ch10",id:"sg/fundamentals-of-software-architecture/ch10",title:"Ch10: \u5206\u5c64\u5f0f\u67b6\u69cb\u98a8\u683c",description:"\u5206\u5c64\u5f0f\u67b6\u69cb\u53c8\u7a31n\u66fe\u67b6\u69cb\u98a8\u683c\uff0c\u88ab\u5927\u90e8\u5206\u7684\u61c9\u7528\u63a1\u53d6\uff0c\u958b\u767c\u61c9\u7528\u6642\u901a\u5e38\u96a8\u8457Conway\u6cd5\u5247\uff0c\u7cfb\u7d71\u7684\u7d50\u69cb\u985e\u4f3c\u65bc\u958b\u767c\u8a72\u7cfb\u7d71\u7684\u7d44\u7e54\u7d50\u69cb\u3002",source:"@site/docs/sg/fundamentals-of-software-architecture/ch10.md",sourceDirName:"sg/fundamentals-of-software-architecture",slug:"/sg/fundamentals-of-software-architecture/ch10",permalink:"/docs/sg/fundamentals-of-software-architecture/ch10",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fundamentals-of-software-architecture/ch10.md",tags:[],version:"current",lastUpdatedBy:"Jui-Yu-Hsieh",lastUpdatedAt:1704771440,formattedLastUpdatedAt:"Jan 9, 2024",sidebarPosition:10,frontMatter:{title:"Ch10: \u5206\u5c64\u5f0f\u67b6\u69cb\u98a8\u683c",tsidebar_label:"Ch10: \u5206\u5c64\u5f0f\u67b6\u69cb\u98a8\u683c",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Ch9: \u57fa\u790e",permalink:"/docs/sg/fundamentals-of-software-architecture/ch9"},next:{title:"Ch11: \u7ba1\u9053\u67b6\u69cb\u98a8\u683c",permalink:"/docs/sg/fundamentals-of-software-architecture/ch11"}},s={},c=[{value:"\u62d3\u58a3\u67b6\u69cb",id:"\u62d3\u58a3\u67b6\u69cb",level:2},{value:"\u9694\u96e2\u5c64",id:"\u9694\u96e2\u5c64",level:2},{value:"\u589e\u52a0\u5c64\u6578",id:"\u589e\u52a0\u5c64\u6578",level:2},{value:"\u5176\u4ed6\u8003\u91cf",id:"\u5176\u4ed6\u8003\u91cf",level:2},{value:"\u70ba\u4f55\u4f7f\u7528\u6b64\u67b6\u69cb\uff1f",id:"\u70ba\u4f55\u4f7f\u7528\u6b64\u67b6\u69cb",level:2},{value:"\u67b6\u69cb\u7279\u6027\u7684\u7b49\u7d1a",id:"\u67b6\u69cb\u7279\u6027\u7684\u7b49\u7d1a",level:2},{value:"Recap",id:"recap",level:2}],u={toc:c},p="wrapper";function f(e){let{components:t,...l}=e;return(0,r.kt)(p,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5206\u5c64\u5f0f\u67b6\u69cb\u53c8\u7a31",(0,r.kt)("strong",{parentName:"p"},"n\u66fe\u67b6\u69cb\u98a8\u683c"),"\uff0c\u88ab\u5927\u90e8\u5206\u7684\u61c9\u7528\u63a1\u53d6\uff0c\u958b\u767c\u61c9\u7528\u6642\u901a\u5e38\u96a8\u8457Conway\u6cd5\u5247\uff0c\u7cfb\u7d71\u7684\u7d50\u69cb\u985e\u4f3c\u65bc\u958b\u767c\u8a72\u7cfb\u7d71\u7684\u7d44\u7e54\u7d50\u69cb\u3002"),(0,r.kt)("h2",{id:"\u62d3\u58a3\u67b6\u69cb"},"\u62d3\u58a3\u67b6\u69cb"),(0,r.kt)("p",null,"\u57fa\u672c\u67b6\u69cb (\u4e00\u500b\u5340\u584a\u70ba\u4e00\u500b\u90e8\u7f72):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c55\u793a\u5c64 (Presentation Layer): UI\u986f\u793a\u8cc7\u8a0a"),(0,r.kt)("li",{parentName:"ul"},"\u696d\u52d9\u5c64 (Business Layer): \u5229\u7528\u8cc7\u6599\u9032\u884c\u696d\u52d9\u4e0a\u7684\u908f\u8f2f\u8655\u7406 ex: \u8a08\u7b97\u5e74\u5831\u916c\u7387\u591a\u5c11\u3001\u6f0f\u6d1e\u6578\u91cf\u591a\u5c11\u3001\u6f0f\u6d1e\u5f71\u97ff\u503c\u591a\u5c11...."),(0,r.kt)("li",{parentName:"ul"},"\u6301\u4e45\u5c64 (Persistence Layer): \u5c0d\u8cc7\u6599\u505aCRUD\uff0c\u56fa\u5b9a\u4f7f\u7528\u7684SQL\u6703\u5beb\u5728\u9019\u4e00\u5c64"),(0,r.kt)("li",{parentName:"ul"},"\u8cc7\u6599\u5eab\u5c64 (Database Layer): \u5f9e\u653e\u8cc7\u6599\u7684\u5730\u65b9 ex: \u8cc7\u6599\u5eab\u3001S3\u3001\u6a94\u6848\u7cfb\u7d71(EFS)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fig_10.1",src:a(19032).Z,width:"1328",height:"488"})),(0,r.kt)("p",null,"\u8b8a\u5f62\u67b6\u69cb\n\u5206\u5c64\u67b6\u69cb\u6709\u6642\u5019\u6703\u4f9d\u64da\u5c08\u6848\u4e0a\u7684\u9700\u6c42\u800c\u6709\u5404\u7a2e\u4e0d\u540c\u7684\u8b8a\u5316"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u7a2e: \u5206\u96e2\u5be6\u9ad4\u7684\u8cc7\u6599\u5eab\u6216\u6a94\u6848\u7cfb\u7d71\u70ba\u4e00\u500b\u90e8\u7f72 ex: \u5ba2\u6236\u60f3\u4f7f\u7528\u7cfb\u7d71\uff0c\u4f46\u8cc7\u6599\u60f3\u653e\u81ea\u5df1\u5bb6"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u7a2e: \u5206\u96e2\u5c55\u793a\u5c64\u8207\u8cc7\u6599\u5eab\u5c64\u5404\u70ba\u4e00\u500b\u90e8\u7f72 ex: \u5ba2\u6236\u53ea\u60f3\u4f7f\u7528\u908f\u8f2f\u6216\u8a08\u7b97\u65b9\u5f0f\uff0cUI\u60f3\u81ea\u5df1\u8a2d\u8a08\u5448\u73fe\u7684\u65b9\u5f0f\uff0c\u8cc7\u6599\u60f3\u653e\u81ea\u5df1\u5bb6"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u7a2e: On-Premises(\u8fa6\u516c\u5ba4\u904b\u884c)\uff0c\u76f4\u63a5\u8cb7\u65b7\u8dd1\u5728\u6a5f\u5668\u7684\u670d\u52d9 ex: Adobe\u975eCC\u7cfb\u5217 \u5404\u7a2e\u55ae\u6a5f\u904a\u6232 ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fig_10.2",src:a(44779).Z,width:"1330",height:"662"})),(0,r.kt)("p",null,"\u9019\u7a2e\u67b6\u69cb\u6709\u4ee5\u4e0b\u512a\u7f3a\u9ede:"),(0,r.kt)("p",null,"\u512a\u9ede:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e00\u5c64\u53ea\u9700\u5c08\u6ce8\u65bc\u8a72\u5c64\u7684\u6280\u8853\u8207\u8cac\u4efb"),(0,r.kt)("li",{parentName:"ul"},"\u67b6\u69cb\u4e0a\u66f4\u5bb9\u6613\u5b89\u6392\u7684\u89d2\u8272\u8207\u8cac\u4efb")),(0,r.kt)("p",null,"\u7f3a\u9ede:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6574\u9ad4\u66f4\u52d5\u7684\u654f\u6377\u6027\u6703\u8b8a\u6162(\u9700\u8981\u4e00\u5c64\u4e00\u5c64\u7684\u6e9d\u901a)")),(0,r.kt)("h2",{id:"\u9694\u96e2\u5c64"},"\u9694\u96e2\u5c64"),(0,r.kt)("p",null,"\u9694\u96e2\u5c64\u6709\u4ee5\u4e0b\u91cd\u9ede:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u5c64\u901a\u904e\u4e00\u5c64\uff0c\u6bcf\u5c64\u90fd\u5c01\u9589\uff0c\u4e0d\u6703\u8df3\u5c64"),(0,r.kt)("li",{parentName:"ul"},"\u67d0\u4e00\u5c64\u5167\u90e8\u7684\u6539\u8b8a\uff0c\u4e0d\u6703\u5f71\u97ff\u5176\u4ed6\u5c64"),(0,r.kt)("li",{parentName:"ul"},"\u67d0\u4e00\u5c64\u53ef\u4ee5\u76f4\u63a5\u88ab\u66ff\u63db\n",(0,r.kt)("img",{alt:"fig_10.3",src:a(85353).Z,width:"1344",height:"530"}))),(0,r.kt)("h2",{id:"\u589e\u52a0\u5c64\u6578"},"\u589e\u52a0\u5c64\u6578"),(0,r.kt)("p",null,"\u67b6\u8a2d\u696d\u52d9\u5c64\u5167\u6709\u5171\u4eab\u5143\u4ef6\u958b\u653e\u7d66\u5176\u4ed6\u696d\u52d9\u5143\u4ef6\uff0c\u4f46\u56e0\u70ba\u5c55\u793a\u5c64\u53ef\u4ee5\u5b58\u53d6\u696d\u52d9\u5c64\uff0c\u6240\u4ee5\u5c55\u793a\u5c64\u7684\u5143\u4ef6\u53ef\u4ee5\u5b58\u53d6\u696d\u52d9\u5143\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u5b58\u53d6\u696d\u52d9\u5c64\u7684\u5171\u4eab\u5143\u4ef6\uff0c\n",(0,r.kt)("img",{alt:"fig_10.4",src:a(58185).Z,width:"1332",height:"922"}),"\n\u4f46\u70ba\u4e86\u907f\u514d\u9019\u6a23\u7684\u5834\u666f\u767c\u751f\uff0c\u6240\u4ee5\u589e\u52a0\u4e00\u500b\u670d\u52d9\u5c64\u5c08\u9580\u653e\u7f6e\u5171\u4eab\u5143\u4ef6\uff0c\u800c\u9019\u500b\u670d\u52d9\u5c64\u662f\u958b\u653e\u7684\uff0c\u56e0\u70ba\u6709\u4e9b\u696d\u52d9\u54e1\u5143\u4ef6\u4e0d\u4e00\u5b9a\u6703\u4f7f\u7528\u5230\u5171\u4eab\u5143\u4ef6\u800c\u76f4\u63a5\u5b58\u53d6\u6301\u4e45\u5c64\u3002\n",(0,r.kt)("img",{alt:"fig_10.5",src:a(83309).Z,width:"1322",height:"868"})),(0,r.kt)("p",null,"\u5c64\u8207\u5c64\u9593\u4e0d\u4e00\u5b9a\u90fd\u662f\u5c01\u9589\uff0c\u4e5f\u6709\u958b\u653e\uff0c\u9700\u8981\u5b9a\u7fa9\u597d\u5206\u5c64\u8207\u8acb\u6c42\u7684\u6d41\u7a0b\uff0c\u9084\u6709\u500b\u5c64\u5b58\u53d6\u7684\u9650\u5236\u3002"),(0,r.kt)("h2",{id:"\u5176\u4ed6\u8003\u91cf"},"\u5176\u4ed6\u8003\u91cf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7dad\u6301\u826f\u597d\u7684\u6a21\u7d44\u5316\uff0c\u624d\u53ef\u4ee5\u642c\u9077\u5230\u53e6\u4e00\u7a2e\u67b6\u69cb\u4e0a\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u76e1\u91cf\u907f\u514d\u67b6\u69cb\u6c61\u6c34\u6c60\uff0c\u4f8b\u5982\u4e00\u500b\u8acb\u6c42\u5f9e\u5c55\u793a\u5c64\u7d93\u904e\u696d\u52d9\u5c64\u5230\u6301\u4e45\u5c64\uff0c\u696d\u52d9\u5c64\u53ea\u505a\u8f49\u50b3\u7684\u52d5\u4f5c\uff0c\u4f46\u6703\u6d88\u8017\u8cc7\u6e90\u3002")),(0,r.kt)("h2",{id:"\u70ba\u4f55\u4f7f\u7528\u6b64\u67b6\u69cb"},"\u70ba\u4f55\u4f7f\u7528\u6b64\u67b6\u69cb\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9069\u5408\u5c0f\u578b\u800c\u7c21\u55ae\u7684\u61c9\u7528\u6216\u662f\u7db2\u7ad9"),(0,r.kt)("li",{parentName:"ul"},"\u9810\u7b97\u6216\u6642\u9593\u6709\u9650\u7684\u6848\u5b50"),(0,r.kt)("li",{parentName:"ul"},"\u6210\u672c\u4f4e\uff0c\u958b\u767c\u53ca\u5efa\u69cb\u5bb9\u6613"),(0,r.kt)("li",{parentName:"ul"},"\u9084\u4e0d\u78ba\u5b9a\u9069\u5408\u54ea\u7a2e\u67b6\u69cb\u98a8\u683c\u6642")),(0,r.kt)("h2",{id:"\u67b6\u69cb\u7279\u6027\u7684\u7b49\u7d1a"},"\u67b6\u69cb\u7279\u6027\u7684\u7b49\u7d1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fig_10.6",src:a(37286).Z,width:"1324",height:"1198"})),(0,r.kt)("h2",{id:"recap"},"Recap"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u958b\u653e\u8207\u5c01\u9589\u5206\u5c64\u7684\u5340\u5225\u662f\u4ec0\u9ebc\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u63cf\u8ff0\u9694\u96e2\u5c64\u7684\u6982\u5ff5\u53ca\u5176\u597d\u8655\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u4ec0\u9ebc\u4e8b\u67b6\u69cb\u6c61\u6c34\u53cd\u6a21\u5f0f\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u9a45\u4f7f\u4f60\u4f7f\u7528\u5206\u5c64\u67b6\u69cb\u7684\u4e3b\u8981\u7279\u6027\u6709\u54ea\u4e9b\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u70ba\u4ec0\u9ebc\u53ef\u6e2c\u8a66\u6027\u4e0d\u4f73\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u70ba\u4ec0\u9ebc\u654f\u6377\u6027\u4e0d\u4f73\uff1f")))}f.isMDXComponent=!0},19032:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fig_10.1-982b1705158125b77c7722f0aa873d1e.png"},44779:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fig_10.2-6423856a4dfd0b14bec957a2b7d804e5.png"},85353:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fig_10.3-fc00d9e49ac9c918014e4203564e4eba.png"},58185:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fig_10.4-bac5504255a17506722f2818c724060e.png"},83309:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fig_10.5-0079ac3e808b4b7500fcf669e9878c75.png"},37286:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fig_10.6-e39153dce374b1fe69932f1e465d7528.png"}}]);