"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[3845],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),k=l,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||r;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},81409:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));const r={title:"Ch21: \u67b6\u69cb\u7684\u5716\u89e3\u8207\u7c21\u5831",tsidebar_label:"Ch21: \u67b6\u69cb\u7684\u5716\u89e3\u8207\u7c21\u5831",sidebar_position:21},i=void 0,o={unversionedId:"sg/fundamentals-of-software-architecture/ch21",id:"sg/fundamentals-of-software-architecture/ch21",title:"Ch21: \u67b6\u69cb\u7684\u5716\u89e3\u8207\u7c21\u5831",description:"\u67b6\u69cb\u5e2b\u50b3\u905e\u6280\u8853\u67b6\u69cb\u4e0a\u7684\u69cb\u60f3\uff1a",source:"@site/docs/sg/fundamentals-of-software-architecture/ch21.mdx",sourceDirName:"sg/fundamentals-of-software-architecture",slug:"/sg/fundamentals-of-software-architecture/ch21",permalink:"/docs/sg/fundamentals-of-software-architecture/ch21",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fundamentals-of-software-architecture/ch21.mdx",tags:[],version:"current",lastUpdatedBy:"Mech",lastUpdatedAt:1715660900,formattedLastUpdatedAt:"May 14, 2024",sidebarPosition:21,frontMatter:{title:"Ch21: \u67b6\u69cb\u7684\u5716\u89e3\u8207\u7c21\u5831",tsidebar_label:"Ch21: \u67b6\u69cb\u7684\u5716\u89e3\u8207\u7c21\u5831",sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"Ch20: \u5206\u6790\u67b6\u69cb\u98a8\u96aa",permalink:"/docs/sg/fundamentals-of-software-architecture/ch20"},next:{title:"Ch22: \u6253\u9020\u6709\u6548\u7684\u5718\u968a",permalink:"/docs/sg/fundamentals-of-software-architecture/ch22"}},p={},s=[{value:"\u5716\u89e3",id:"\u5716\u89e3",level:2},{value:"\u5de5\u5177\u7684\u9078\u64c7",id:"\u5de5\u5177\u7684\u9078\u64c7",level:3},{value:"\u5e38\u898b\u7684\u7e6a\u5716\u6a19\u6e96",id:"\u5e38\u898b\u7684\u7e6a\u5716\u6a19\u6e96",level:3},{value:"UML",id:"uml",level:3},{value:"C4 model",id:"c4-model",level:3},{value:"ArchiMate",id:"archimate",level:3},{value:"\u6e96\u5247",id:"\u6e96\u5247",level:3},{value:"\u7c21\u5831",id:"\u7c21\u5831",level:2},{value:"\u638c\u63e1\u6642\u9593",id:"\u638c\u63e1\u6642\u9593",level:3},{value:"\u589e\u91cf\u5efa\u69cb",id:"\u589e\u91cf\u5efa\u69cb",level:3},{value:"\u8cc7\u8a0a\u7c21\u5831 v.s. \u7c21\u5831",id:"\u8cc7\u8a0a\u7c21\u5831-vs-\u7c21\u5831",level:3},{value:"\u6295\u5f71\u7247\u7684\u96f7\u5340",id:"\u6295\u5f71\u7247\u7684\u96f7\u5340",level:3}],u={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u67b6\u69cb\u5e2b\u50b3\u905e\u6280\u8853\u67b6\u69cb\u4e0a\u7684\u69cb\u60f3\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5716\u89e3"),(0,l.kt)("li",{parentName:"ol"},"\u7c21\u5831")),(0,l.kt)("h2",{id:"\u5716\u89e3"},"\u5716\u89e3"),(0,l.kt)("p",null,"\u5c07\u67b6\u69cb\u8996\u89ba\u5316\u5448\u73fe\u5728\u773e\u4eba\u9762\u524d\uff0c\u50b3\u9054\u5176\u8a2d\u8a08\u7406\u5ff5\u3002"),(0,l.kt)("p",null,"\u5716\u89e3\u67b6\u69cb\u6db5\u84cb\u591a\u7a2e\u8996\u91ce\uff0c\u63cf\u8ff0\u67b6\u69cb\u7684\u8996\u89d2\u7531\u300c\u5b8f\u89c0 \u2192 \u5fae\u89c0\u300d\u3002"),(0,l.kt)("p",null,"\u6848\u4f8b\uff1a\u96fb\u5546"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b8f\u89c0\uff1a\n\u986f\u793a\u6574\u500b\u7cfb\u7d71\u7684\u4e3b\u8981\u7d44\u6210\u90e8\u5206\u548c\u5176\u4e4b\u9593\u7684\u95dc\u4fc2\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fae\u89c0\uff1a\n\u5fae\u89c0\u67b6\u69cb\u5716\u66f4\u8a73\u7d30\u5448\u73fe\u5fae\u670d\u52d9\u67b6\u69cb\u7684\u5167\u90e8\u7d50\u69cb\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u300c\u4e00\u81f4\u6027\u300d"),"\n",(0,l.kt)("img",{src:a(51539).Z,width:"821",height:"547"}),"\n\u7dad\u6301\u67b6\u69cb\u5716\u7684\u4e00\u81f4\u6027\u6709\u52a9\u65bc\u78ba\u4fdd\u958b\u767c\u5718\u968a\u548c\u76f8\u95dc\u7684\u95b1\u8b80\u8005\u5c0d\u8edf\u9ad4\u7cfb\u7d71\u7684\u7d50\u69cb\u6709\u4e00\u81f4\u7684\u7406\u89e3\uff0c\u6e1b\u5c11\u6df7\u6dc6\u548c\u932f\u8aa4\u3002")),(0,l.kt)("h3",{id:"\u5de5\u5177\u7684\u9078\u64c7"},"\u5de5\u5177\u7684\u9078\u64c7"),(0,l.kt)("p",null,"\u5e7e\u500b\u5e38\u898b\u7684\u57fa\u672c\u8981\u7d20"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5206\u5c64"),"\uff1a\u5229\u7528\u5206\u5c64\u63cf\u7e6a\u67b6\u69cb\u793a\u610f\u5716\uff0c\u900f\u904e\u300c\u589e\u91cf\u300d\u7684\u65b9\u5f0f\uff0c\u6253\u9020\u5b8c\u6574\u7684\u67b6\u69cb\u5716"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6a21\u677f"),"\uff1a\u66ff\u7d44\u7e54\u5167\u5171\u540c\u5716\u6a23\u6253\u9020\u6a21\u677f\uff0c\u540c\u6642\u80fd\u8b93\u5efa\u69cb\u5716\u4e0a\u5efa\u7acb\u4e00\u81f4\u6027"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u78c1\u9435"),"\uff1a\u8868\u9054\u5143\u4ef6\u7684\u95dc\u806f\u7684\u7dda\u689d\uff0c\u63d0\u4f9b\u81ea\u52d5\u5c0d\u9f4a\u548c\u9023\u63a5\u5143\u4ef6\u4e4b\u9593"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u532f\u51fa"),"\uff1a\u652f\u63f4\u591a\u7a2e\u985e\u578b\u7684\u683c\u5f0f e.g. PDF")),(0,l.kt)("h3",{id:"\u5e38\u898b\u7684\u7e6a\u5716\u6a19\u6e96"},"\u5e38\u898b\u7684\u7e6a\u5716\u6a19\u6e96"),(0,l.kt)("h3",{id:"uml"},"UML"),(0,l.kt)("p",null,"\u5e38\u898b\u61c9\u7528\uff1a\u985e\u5225\u5716 (Class Diagram)\u3001\u6642\u5e8f\u5716 (Sequence Diagram)"),(0,l.kt)("h3",{id:"c4-model"},"C4 model"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(91501).Z,width:"1920",height:"1080"})),(0,l.kt)("p",null,"\u300c\u8996\u91ce\u7531\u9ad8\u81f3\u4f4e\u5206\u70ba\u56db\u500b\u7b49\u7d1a\u300d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Level 1: \u7cfb\u7d71\u4e0a\u4e0b\u6587\u5716 (System ",(0,l.kt)("strong",{parentName:"li"},"Context")," Diagram)"),(0,l.kt)("li",{parentName:"ul"},"Level 2: \u5bb9\u5668\u5716 (",(0,l.kt)("strong",{parentName:"li"},"Container")," Diagram)"),(0,l.kt)("li",{parentName:"ul"},"Level 3: \u5143\u4ef6\u5716(",(0,l.kt)("strong",{parentName:"li"},"Component")," Diagram)"),(0,l.kt)("li",{parentName:"ul"},"Level 4: \u7a0b\u5f0f(",(0,l.kt)("strong",{parentName:"li"},"Code"),")")),(0,l.kt)("p",null,"Figures are all from ",(0,l.kt)("a",{parentName:"p",href:"https://c4model.com/#tooling"},"the C4 model for visualising software architecture"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(28555).Z,width:"1920",height:"1080"})),(0,l.kt)("p",null,"\u4f8b\u5b50\uff1a\u8ddf\u670b\u53cb\u51fa\u570b\u73a9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65e5\u672c(Context)"),(0,l.kt)("li",{parentName:"ul"},"\u6771\u4eac(Container)"),(0,l.kt)("li",{parentName:"ul"},"\u6dfa\u8349(Component)"),(0,l.kt)("li",{parentName:"ul"},"\u54ea\u689d\u8def(Code)")),(0,l.kt)("p",null,"Level 1 \u7cfb\u7d71\u4e0a\u4e0b\u6587\u5716(System Context Diagram)"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(43550).Z,width:"2480",height:"1748"}),"\n\u5c07\u5404\u7a2e\u4f7f\u7528\u8005/\u89d2\u8272\u9700\u8981\u4f7f\u7528\u7684\u529f\u80fd\u756b\u51fa\u4f86"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"TA"),": \u958b\u767c\u5718\u968a\u5167\u5916\u7684\u6240\u6709\u4eba\uff0c\u542b\u6280\u8853\u4eba\u54e1\u548c\u975e\u6280\u8853\u4eba\u54e1"),(0,l.kt)("p",null,"Level 2: \u5bb9\u5668\u5716 (",(0,l.kt)("strong",{parentName:"p"},"Container")," Diagram)"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(74493).Z,width:"2480",height:"1748"}),"\n\u5305\u542b\u5404\u500b\u8edf\u9ad4\u7cfb\u7d71\uff0c\u4f8b\u5b50\uff1a\u7db2\u9801\u61c9\u7528\u7a0b\u5f0f\u3001\u684c\u9762\u61c9\u7528\u7a0b\u5f0f\u3001App\u3001\u8cc7\u6599\u5eab"),(0,l.kt)("p",null,"Level 3: \u5143\u4ef6\u5716(",(0,l.kt)("strong",{parentName:"p"},"Component")," Diagram)"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(74293).Z,width:"2480",height:"1748"}),"\nL2 \u7684\u653e\u5927\u7248\uff0c\u91dd\u5c0d\u500b\u5225\u61c9\u7528\u7a0b\u5f0f\u5167\u5bb9\u66f4\u6df1\u5165\u63a2\u8a0e\u6bcf\u500b\u5143\u4ef6"),(0,l.kt)("p",null,"Level 4: \u7a0b\u5f0f(",(0,l.kt)("strong",{parentName:"p"},"Code"),")"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(7312).Z,width:"2480",height:"1748"}),"\n\u7528\u5728\u7279\u5225\u7684\u6c7a\u7b56\u5716"),(0,l.kt)("p",null,"\u88dc\u5145\u5716 ",(0,l.kt)("a",{parentName:"p",href:"https://c4model.com"},"https://c4model.com")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7d71\u666f\u89c0\u5716(System Landscape Diagram)"),(0,l.kt)("li",{parentName:"ul"},"\u52d5\u614b\u5716(Dynamic Diagram)"),(0,l.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u5716(Deployment Diagram)")),(0,l.kt)("h3",{id:"archimate"},"ArchiMate"),(0,l.kt)("p",null,"The Open Group \u9762\u5411\u4f01\u696d\u67b6\u69cb\u7684\u958b\u653e\u4e14\u7368\u7acb\u7684\u5efa\u6a21\u8a9e\u8a00\u3002"),(0,l.kt)("p",null,"Source: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ArchiMate#:~:text=ArchiMate%20(%2F%CB%88%C9%91%CB%90rk%C9%AA,domains%20in%20an%20unambiguous%20way.)"},"wiki")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.visual-paradigm.com/guide/archimate/what-is-archimate/"},"visual-paradigm.com"))),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(2579).Z,width:"521",height:"351"})),(0,l.kt)("p",null,"Core Framework"),(0,l.kt)("p",null,"\u7531\u300c\u696d\u52d9\u300d\u3001\u300c\u61c9\u7528\u7a0b\u5f0f\u300d\u548c\u300c\u6280\u8853\u300d\u5b9a\u7fa9\u7684\u6838\u5fc3\uff0c\u4e0d\u540c",(0,l.kt)("strong",{parentName:"p"},"\u5c64(Layers)"),"\u642d\u914d",(0,l.kt)("strong",{parentName:"p"},"\u9762(Aspects)")," \u53ef\u4ee5\u7d44\u7e54\u70ba\u4e5d\u500b\u55ae\u5143\u7684\u6846\u67b6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Layers: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u696d\u52d9\u5c64"),(0,l.kt)("li",{parentName:"ul"},"\u61c9\u7528\u5c64"),(0,l.kt)("li",{parentName:"ul"},"\u6280\u8853\u5c64"))),(0,l.kt)("li",{parentName:"ul"},"Aspects\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Passive: \u57f7\u884c\u884c\u70ba\u7684\u7269\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"Behavior: \u67d0\u4e9b\u5be6\u9ad4\u7684\u884c\u70ba"),(0,l.kt)("li",{parentName:"ul"},"Active Structure: \u7d50\u69cb\u7684\u6982\u5ff5 ")))),(0,l.kt)("h3",{id:"\u6e96\u5247"},"\u6e96\u5247"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6a19\u984c"),(0,l.kt)("li",{parentName:"ul"},"\u7dda\u689d"),(0,l.kt)("li",{parentName:"ul"},"\u5f62\u72c0"),(0,l.kt)("li",{parentName:"ul"},"\u6a19\u7c64"),(0,l.kt)("li",{parentName:"ul"},"\u984f\u8272"),(0,l.kt)("li",{parentName:"ul"},"\u7dda\u7d22")),(0,l.kt)("h2",{id:"\u7c21\u5831"},"\u7c21\u5831"),(0,l.kt)("h3",{id:"\u638c\u63e1\u6642\u9593"},"\u638c\u63e1\u6642\u9593"),(0,l.kt)("p",null,"\u5728\u6709\u9650\u7684\u6642\u9593\u5167\u50b3\u905e\u60f3\u6cd5\u7d66\u53d7\u773e\u3002"),(0,l.kt)("h3",{id:"\u589e\u91cf\u5efa\u69cb"},"\u589e\u91cf\u5efa\u69cb"),(0,l.kt)("p",null,"\u805a\u7126\u5728\u9700\u8981\u7684\u8cc7\u8a0a\u4e0a\uff0c\u907f\u514d\u8cc7\u8a0a\u904e\u8f09\u3002"),(0,l.kt)("p",null,"\u53cd\u6a21\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(24398).Z,width:"838",height:"393"})),(0,l.kt)("p",null,"\u589e\u91cf\u5efa\u69cb\u7684\u7248\u672c"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(19628).Z,width:"636",height:"747"})),(0,l.kt)("h3",{id:"\u8cc7\u8a0a\u7c21\u5831-vs-\u7c21\u5831"},"\u8cc7\u8a0a\u7c21\u5831 v.s. \u7c21\u5831"),(0,l.kt)("p",null,"\u4e3b\u8981\u5dee\u7570\uff1a\u5167\u5bb9\u7684\u5b8c\u6574\u5ea6"),(0,l.kt)("h3",{id:"\u6295\u5f71\u7247\u7684\u96f7\u5340"},"\u6295\u5f71\u7247\u7684\u96f7\u5340"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u907f\u514d\u904e\u91cf\u7684\u6587\u5b57\u4f54\u64da\u7248\u9762"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u500b\u7248\u9762\u585e\u904e\u91cf\u7684\u8cc7\u8a0a")))}m.isMDXComponent=!0},51539:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/21-1-64aedb3c30c41b6865cf7fdda8fb1e12.png"},24398:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/21-3-bdaabea58a22b13b5f0c60dbb81b022b.png"},19628:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/21-4-1e4deaccf972c7e615c7113a3a72784b.png"},2579:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ArchiMate_Core_framework_archimate-a5358c8e5176ca7c67495a48b3447a0c.jpg"},74293:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Components-311289685d846c573f2c2a837c080bbe.png"},74493:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Containers-66161f7b727c937d82a74a39c6111812.png"},43550:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/SystemContext-7f5435c6ae5b30209eff36fd48337e43.png"},28555:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/abstractions-ef55168ee646587ebb07a46da4b050b3.png"},91501:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c4-overview-4b83248988426ba51c342379d36469cb.png"},7312:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/class-diagram-a4ba73eb58c9de0b74b5cbc5932a9cf6.png"}}]);