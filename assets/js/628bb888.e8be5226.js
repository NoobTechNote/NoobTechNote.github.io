"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[420],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(n),s=r,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7572:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Ch12: \u5143\u4ef6 (Components)",sidebar_label:"Ch12: \u5143\u4ef6",sidebar_position:12},p="Part 4. Component Principles",c={unversionedId:"sg/clean-architecture/ch12",id:"sg/clean-architecture/ch12",title:"Ch12: \u5143\u4ef6 (Components)",description:"\u5982\u679c SOLID \u6559\u6211\u5011\u5982\u548c\u92ea\u6392\u78c1\u78da\u505a\u6210\u7246\u58c1\u8ddf\u623f\u9593\uff0c\u90a3\u5143\u4ef6\u539f\u5247\u6559\u6211\u5011\u5982\u4f55\u5b89\u6392\u623f\u9593\u7d44\u6210\u5efa\u7bc9\u7269\uff0c",source:"@site/docs/sg/clean-architecture/ch12.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch12",permalink:"/docs/sg/clean-architecture/ch12",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch12.md",tags:[],version:"current",lastUpdatedBy:"Ming-Yen Chung",lastUpdatedAt:1663220730,formattedLastUpdatedAt:"9/15/2022",sidebarPosition:12,frontMatter:{title:"Ch12: \u5143\u4ef6 (Components)",sidebar_label:"Ch12: \u5143\u4ef6",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Ch11: DIP - \u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",permalink:"/docs/sg/clean-architecture/ch11"},next:{title:"Ch13: \u5143\u4ef6\u5167\u805a\u6027",permalink:"/docs/sg/clean-architecture/ch13"}},u={},m=[{value:"\u4ec0\u9ebc\u662f\u5143\u4ef6?",id:"\u4ec0\u9ebc\u662f\u5143\u4ef6",level:2},{value:"\u53ef\u91cd\u5b9a\u4f4d\u6027 (Relocatability)",id:"\u53ef\u91cd\u5b9a\u4f4d\u6027-relocatability",level:2}],d={toc:m};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"part-4-component-principles"},"Part 4. Component Principles"),(0,l.kt)("p",null,"\u5982\u679c SOLID \u6559\u6211\u5011\u5982\u548c\u92ea\u6392\u78c1\u78da\u505a\u6210\u7246\u58c1\u8ddf\u623f\u9593\uff0c\u90a3\u5143\u4ef6\u539f\u5247\u6559\u6211\u5011\u5982\u4f55\u5b89\u6392\u623f\u9593\u7d44\u6210\u5efa\u7bc9\u7269\uff0c\n\u5927\u578b\u8edf\u9ad4\u7cfb\u7d71\u5c31\u50cf\u5927\u578b\u5efa\u7bc9\u7269\uff0c\u7531\u5c0f\u7684\u5143\u4ef6\u7d44\u6210"),(0,l.kt)("p",null,"Part 4 \u5305\u542b\u4e09\u500b\u7ae0\u7bc0:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5143\u4ef6 (Components)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4ec0\u9ebc\u662f Component"))),(0,l.kt)("li",{parentName:"ul"},"\u5143\u4ef6\u5167\u805a\u6027 (Component Cohesion)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u54ea\u4e9b\u6771\u897f\u8a72\u6b78\u985e\u70ba\u540c\u4e00\u500b Component"))),(0,l.kt)("li",{parentName:"ul"},"\u5143\u4ef6\u8026\u5408\u6027 (Component Coupling)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Component \u8a72\u5982\u4f55\u7d44\u6210\u4e00\u500b\u7cfb\u7d71")))),(0,l.kt)("h1",{id:"ch12-\u5143\u4ef6-components"},"Ch12: \u5143\u4ef6 (Components)"),(0,l.kt)("h2",{id:"\u4ec0\u9ebc\u662f\u5143\u4ef6"},"\u4ec0\u9ebc\u662f\u5143\u4ef6?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u80fd\u88ab\u90e8\u7f72\u7684\u6700\u5c0f\u5be6\u9ad4\uff0ce.g., jar files in JAVA, gem files in Ruby, source files, DLLs in .Net"),(0,l.kt)("li",{parentName:"ul"},"\u5143\u4ef6\u53ef\u4ee5\u88ab\u9023\u7d50\u5728\u4e00\u8d77\u7d44\u6210\u4e00\u500b\u53ef\u57f7\u884c\u6a94 (binary executable)\uff0c\u6216\u8005\u53ef\u4ee5\u88ab\u55ae\u7368\u90e8\u7f72\u52d5\u614b\u8f09\u5165\u7684\u5916\u639b\uff0c\u4f8b\u5982 .jar, .dll, .exe"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u7fa4 classes"),(0,l.kt)("li",{parentName:"ul"},"\u66f8\u4e0a\u7528\u4e00\u500b\u9577\u65b9\u578b\u52a0\u5169\u6839\u69d3\u8868\u793a")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u63a5\u4e0b\u4f86\u9019\u7ae0\u5168\u90e8\u5728\u8aaa\u95dc\u65bc Linker \u8ddf Loader \u7684\u8b1b\u53e4"),(0,l.kt)("p",null,"\u5f88\u4e45\u5f88\u4e45\u4ee5\u524d\uff0c\u5de5\u7a0b\u5e2b\u53ef\u4ee5\u63a7\u5236\u7a0b\u5f0f\u5728 Memory \u7684\u4f4d\u5740\uff0c\u9019\u4e9b code \u7121\u6cd5 relocate\n*200 \u6307\u7684\u662f memory \u4f4d\u5740"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Assembly="},"        *200\n        TLS\nSTART,  CLA\n        TAD BUFR\n        JMS GETSTR\n        CLA\n        TAD BUFR\n        JMS PUTSTR\n        JMP START\nBUFR,   3000\nGETSTR, 0\n        DCA PTR\nNXTCH,  KSF\n        JMP -1\n        KRB\n        DCA I PTR\n        TAD I PTR\n        AND K177\n        ISZ PTR\n        TAD MCR\n        SZA\n        JMP NXTCH\nK177,   177\nMCR,    -15\n")),(0,l.kt)("p",null,"Q: \u90a3\u9ebc\u5de5\u7a0b\u5e2b\u5982\u4f55\u4f7f\u7528\u5176\u4ed6 library \u5462?"),(0,l.kt)("p",null,"A: \u5168\u90e8\u585e\u5728\u4e00\u8d77\u8b8a\u6210\u540c\u4e00\u96bb\u7a0b\u5f0f\uff01"),(0,l.kt)("p",null,"\u7d50\u679c function library \u8d8a\u5927\uff0c\u82b1\u8d8a\u591a\u6642\u9593\u7de8\u8b6f\uff0c\u5927\u578b\u7cfb\u7d71\u8981\u82b1\u5e7e\u500b\u5c0f\u6642\u7de8\u8b6f"),(0,l.kt)("p",null,"\u70ba\u4e86\u7e2e\u77ed\u7de8\u8b6f\u6642\u9593\uff0c\u53ef\u4ee5\u5148\u7de8\u8b6f Function Library \u4e26\u5c07\u7a0b\u5f0f\u8f09\u5165 Memory\uff0c"),(0,l.kt)("p",null,"\u4e4b\u5f8c\u518d\u5275\u7acb Symbol table \u8ddf Application code \u4e00\u8d77\u7de8\u8b6f"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Address"),(0,l.kt)("th",{parentName:"tr",align:null},"Program"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0000 - 0777"),(0,l.kt)("td",{parentName:"tr",align:null},"Application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1000 - 1777"),(0,l.kt)("td",{parentName:"tr",align:null},"Application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2000 - 2777"),(0,l.kt)("td",{parentName:"tr",align:null},"Function Library")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3000 - 3777"),(0,l.kt)("td",{parentName:"tr",align:null},"Function Library")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4000 - 4777"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5000 - 5777"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6000 - 6777"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6000 - 6777"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"\u4f46\u5982\u679c Memory \u88dd\u4e0d\u4e0b Application code \uff0c\u53ea\u80fd\u8df3\u904e\u518d\u88dd"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Address"),(0,l.kt)("th",{parentName:"tr",align:null},"Program"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0000 - 0777"),(0,l.kt)("td",{parentName:"tr",align:null},"Application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1000 - 1777"),(0,l.kt)("td",{parentName:"tr",align:null},"Application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2000 - 2777"),(0,l.kt)("td",{parentName:"tr",align:null},"Function Library")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3000 - 3777"),(0,l.kt)("td",{parentName:"tr",align:null},"Function Library")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4000 - 4777"),(0,l.kt)("td",{parentName:"tr",align:null},"Application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5000 - 5777"),(0,l.kt)("td",{parentName:"tr",align:null},"Application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6000 - 6777"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6000 - 6777"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"\u5f88\u660e\u986f\u6211\u5011\u9700\u8981\u505a\u9ede\u4ec0\u9ebc"),(0,l.kt)("h2",{id:"\u53ef\u91cd\u5b9a\u4f4d\u6027-relocatability"},"\u53ef\u91cd\u5b9a\u4f4d\u6027 (Relocatability)"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Relocation is the process of assigning load addresses for position-dependent code and data of a program and adjusting the code and data to reflect the assigned addresses."),(0,l.kt)("blockquote",{parentName:"div"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Relocation_(computing)"},"Relocation (computing) Wikipedia"))))),(0,l.kt)("p",null,"Todo..."))}s.isMDXComponent=!0}}]);