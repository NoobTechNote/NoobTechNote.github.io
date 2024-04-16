"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[4642],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,l=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(a),m=i,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(k,r(r({ref:e},c),{},{components:a})):n.createElement(k,r({ref:e},c))}));function k(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57636:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const l={title:"Ch9: \u57fa\u790e",tsidebar_label:"Ch9: \u57fa\u790e",sidebar_position:9},r=void 0,o={unversionedId:"sg/fundamentals-of-software-architecture/ch9",id:"sg/fundamentals-of-software-architecture/ch9",title:"Ch9: \u57fa\u790e",description:"\u67b6\u69cb\u98a8\u683c: \u5982\u4f55\u5b89\u6392\u524d\u7aef\u3001\u5f8c\u7aef\u539f\u59cb\u78bc\u8ddf\u8cc7\u6599\u5eab\u4e92\u52d5\u7684\u7d50\u69cb",source:"@site/docs/sg/fundamentals-of-software-architecture/ch9.md",sourceDirName:"sg/fundamentals-of-software-architecture",slug:"/sg/fundamentals-of-software-architecture/ch9",permalink:"/docs/sg/fundamentals-of-software-architecture/ch9",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fundamentals-of-software-architecture/ch9.md",tags:[],version:"current",lastUpdatedBy:"kayeepf",lastUpdatedAt:1713241879,formattedLastUpdatedAt:"Apr 16, 2024",sidebarPosition:9,frontMatter:{title:"Ch9: \u57fa\u790e",tsidebar_label:"Ch9: \u57fa\u790e",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Ch8: \u4ee5\u5143\u4ef6\u70ba\u57fa\u790e\u7684\u601d\u7dad",permalink:"/docs/sg/fundamentals-of-software-architecture/ch8"},next:{title:"Ch10: \u5206\u5c64\u5f0f\u67b6\u69cb\u98a8\u683c",permalink:"/docs/sg/fundamentals-of-software-architecture/ch10"}},s={},p=[{value:"\u57fa\u672c\u6a21\u5f0f",id:"\u57fa\u672c\u6a21\u5f0f",level:2},{value:"\u5927\u6ce5\u7403(Big Ball of Mud)",id:"\u5927\u6ce5\u7403big-ball-of-mud",level:3},{value:"\u55ae\u4e00\u67b6\u69cb",id:"\u55ae\u4e00\u67b6\u69cb",level:3},{value:"\u4e3b\u5f9e\u5f0f\u53c8\u6216\u5169\u5c64\u5f0f",id:"\u4e3b\u5f9e\u5f0f\u53c8\u6216\u5169\u5c64\u5f0f",level:3},{value:"\u55ae\u9ad4\u67b6\u69cb VS \u5206\u6563\u5f0f\u67b6\u69cb",id:"\u55ae\u9ad4\u67b6\u69cb-vs-\u5206\u6563\u5f0f\u67b6\u69cb",level:2},{value:"\u55ae\u9ad4\u67b6\u69cb",id:"\u55ae\u9ad4\u67b6\u69cb",level:3},{value:"\u5206\u6563\u5f0f\u67b6\u69cb",id:"\u5206\u6563\u5f0f\u67b6\u69cb",level:3},{value:"\u5206\u6563\u5f0f\u67b6\u69cb\u7684\u8b2c\u8aa4",id:"\u5206\u6563\u5f0f\u67b6\u69cb\u7684\u8b2c\u8aa4",level:3},{value:"\u274c \u7db2\u8def\u662f\u53ef\u9760\u7684",id:"-\u7db2\u8def\u662f\u53ef\u9760\u7684",level:4},{value:"\u274c \u7db2\u8def\u4e0d\u6703\u6709\u5ef6\u9072",id:"-\u7db2\u8def\u4e0d\u6703\u6709\u5ef6\u9072",level:4},{value:"\u274c \u983b\u5bec\u662f\u7121\u9650\u7684",id:"-\u983b\u5bec\u662f\u7121\u9650\u7684",level:4},{value:"\u274c \u7db2\u8def\u662f\u5b89\u5168\u7684",id:"-\u7db2\u8def\u662f\u5b89\u5168\u7684",level:4},{value:"\u274c \u7db2\u8def\u62d3\u58a3\u7d55\u5c0d\u4e0d\u6703\u6539\u8b8a",id:"-\u7db2\u8def\u62d3\u58a3\u7d55\u5c0d\u4e0d\u6703\u6539\u8b8a",level:4},{value:"\u274c \u53ea\u6709\u4e00\u4f4d\u7ba1\u7406\u54e1",id:"-\u53ea\u6709\u4e00\u4f4d\u7ba1\u7406\u54e1",level:4},{value:"\u274c \u50b3\u8f38\u6210\u672c\u70ba\u96f6",id:"-\u50b3\u8f38\u6210\u672c\u70ba\u96f6",level:4},{value:"\u274c \u7db2\u8def\u70ba\u5747\u8cea\u6027\u7684",id:"-\u7db2\u8def\u70ba\u5747\u8cea\u6027\u7684",level:4},{value:"\u5206\u6563\u5f0f\u7684\u5176\u4ed6\u8003\u91cf",id:"\u5206\u6563\u5f0f\u7684\u5176\u4ed6\u8003\u91cf",level:3},{value:"\u5206\u6563\u5f0f\u767b\u5165",id:"\u5206\u6563\u5f0f\u767b\u5165",level:4},{value:"\u5206\u6563\u5f0f\u4ea4\u6613",id:"\u5206\u6563\u5f0f\u4ea4\u6613",level:4},{value:"\u5408\u7d04\u7dad\u8b77\u8207\u7248\u672c\u63a7\u5236",id:"\u5408\u7d04\u7dad\u8b77\u8207\u7248\u672c\u63a7\u5236",level:4},{value:"Recap",id:"recap",level:2}],c={toc:p},d="wrapper";function u(t){let{components:e,...l}=t;return(0,i.kt)(d,(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u67b6\u69cb\u98a8\u683c: \u5982\u4f55\u5b89\u6392\u524d\u7aef\u3001\u5f8c\u7aef\u539f\u59cb\u78bc\u8ddf\u8cc7\u6599\u5eab\u4e92\u52d5\u7684\u7d50\u69cb"),(0,i.kt)("p",{parentName:"admonition"},"\u67b6\u69cb\u6a21\u5f0f: \u8f03\u4f4e\u5c64\u6b21\u7684\u8a2d\u8a08\u7d50\u69cb\uff0c\u6709\u52a9\u65bc\u5728\u67d0\u500b\u67b6\u69cb\u98a8\u683c\u4e0b\u5f62\u6210\u7279\u5b9a\u7684\u89e3\u6c7a\u65b9\u6848"),(0,i.kt)("p",{parentName:"admonition"},"\u8a2d\u8a08\u6a21\u5f0f: \u66f4\u672c\u5730\u5316\uff0c\u5c0d\u4ee3\u78bc\u5eab\u7684\u5f71\u97ff\u66f4\u5c0f\uff0c\u5b83\u5011\u5f71\u97ff\u5230\u4ee3\u78bc\u5eab\u7684\u7279\u5b9a\u90e8\u5206"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u67b6\u69cb\u98a8\u683c\u662f\u5728\u6700\u9ad8\u62bd\u8c61\u5c64\u6b21\u4e0a\u7684\u61c9\u7528\u7a0b\u5f0f\u8a2d\u8a08"),(0,i.kt)("li",{parentName:"ul"},"\u67b6\u69cb\u6a21\u5f0f\u662f\u5be6\u73fe\u67b6\u69cb\u98a8\u683c\u7684\u4e00\u7a2e\u65b9\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"\u8a2d\u8a08\u6a21\u5f0f\u662f\u89e3\u6c7a\u5c40\u90e8\u554f\u984c\u7684\u4e00\u7a2e\u65b9\u6cd5")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://kknews.cc/zh-tw/code/b3o6v36.html"},"https://kknews.cc/zh-tw/code/b3o6v36.html"))),(0,i.kt)("h2",{id:"\u57fa\u672c\u6a21\u5f0f"},"\u57fa\u672c\u6a21\u5f0f"),(0,i.kt)("h3",{id:"\u5927\u6ce5\u7403big-ball-of-mud"},"\u5927\u6ce5\u7403(Big Ball of Mud)"),(0,i.kt)("p",null,"\u592a\u59cb\u4e4b\u521d\u6709\u4e00\u5718\u5927\u6ce5\u7403\uff0c\u88e1\u9762\u6240\u6709\u4e8b\u4ef6\u53ca\u51fd\u5f0f\u90fd\u76f4\u63a5\u547c\u53eb\u8cc7\u6599\u5eab\uff0c\u7a0b\u5f0f\u6c92\u6709\u7d50\u69cb\u3002\n",(0,i.kt)("img",{alt:"fig_9.1",src:a(75249).Z,width:"1346",height:"774"})),(0,i.kt)("h3",{id:"\u55ae\u4e00\u67b6\u69cb"},"\u55ae\u4e00\u67b6\u69cb"),(0,i.kt)("p",null,"\u8edf\u9ad4\u53ea\u8dd1\u5728\u4e00\u53f0\u96fb\u8166\u4e0a\u5c31\u53ef\u4ee5\u767c\u63ee\u5168\u90e8\u7684\u529f\u80fd eg: \u5927\u5bcc\u7fc1\u3001\u6d1b\u514b\u4eba..."),(0,i.kt)("h3",{id:"\u4e3b\u5f9e\u5f0f\u53c8\u6216\u5169\u5c64\u5f0f"},"\u4e3b\u5f9e\u5f0f\u53c8\u6216\u5169\u5c64\u5f0f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u684c\u4e0a\u578b\uff0b\u8cc7\u6599\u5eab\u4f3a\u670d\u5668: \u684c\u9762\u8edf\u9ad4(\u524d\u7aef)\u8207\u8cc7\u6599\u5eab\u4f3a\u670d\u5668\u4e92\u52d5(\u5f8c\u7aef) eg: \u5373\u6642\u901a.. "),(0,i.kt)("li",{parentName:"ul"},"\u700f\u89bd\u5668\uff0b\u7db2\u9801\u4f3a\u670d\u5668: \u700f\u89bd\u5668(\u524d\u7aef)\u8207\u7db2\u7ad9\u4f3a\u670d\u5668(\u5f8c\u7aef) eg: \u5c0f\u8543\u85af.."),(0,i.kt)("li",{parentName:"ul"},"\u4e09\u5c64\u5f0f: \u8cc7\u6599\u5eab\u5c64\u3001\u61c9\u7528\u5c64\u3001\u986f\u793a\u5c64\uff0c\u9010\u6f38\u767c\u5c55\u6210\u4e00\u7a2e\u67b6\u69cb\u6a21\u5f0f eg: MVC")),(0,i.kt)("h2",{id:"\u55ae\u9ad4\u67b6\u69cb-vs-\u5206\u6563\u5f0f\u67b6\u69cb"},"\u55ae\u9ad4\u67b6\u69cb VS \u5206\u6563\u5f0f\u67b6\u69cb"),(0,i.kt)("h3",{id:"\u55ae\u9ad4\u67b6\u69cb"},"\u55ae\u9ad4\u67b6\u69cb"),(0,i.kt)("p",null,"\u5305\u542b\u6240\u6709\u7a0b\u5f0f\u78bc\u7684\u55ae\u4e00\u90e8\u7f72\u5143\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5206\u5c64\u5f0f\u67b6\u69cb"),(0,i.kt)("li",{parentName:"ul"},"\u7ba1\u9053\u67b6\u69cb"),(0,i.kt)("li",{parentName:"ul"},"\u5fae\u6838\u5fc3\u67b6\u69cb")),(0,i.kt)("h3",{id:"\u5206\u6563\u5f0f\u67b6\u69cb"},"\u5206\u6563\u5f0f\u67b6\u69cb"),(0,i.kt)("p",null,"\u900f\u904e\u9060\u7aef\u5b58\u53d6\u5354\u5b9a\u9023\u63a5\u7684\u591a\u500b\u90e8\u4ef6\u55ae\u5143"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u670d\u52d9\u5f0f\u67b6\u69cb"),(0,i.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u9a45\u52d5\u67b6\u69cb"),(0,i.kt)("li",{parentName:"ul"},"\u7a7a\u9593\u5f0f\u67b6\u69cb"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52d9\u5c0e\u5411\u67b6\u69cb"),(0,i.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52d9\u67b6\u69cb")),(0,i.kt)("h3",{id:"\u5206\u6563\u5f0f\u67b6\u69cb\u7684\u8b2c\u8aa4"},"\u5206\u6563\u5f0f\u67b6\u69cb\u7684\u8b2c\u8aa4"),(0,i.kt)("h4",{id:"-\u7db2\u8def\u662f\u53ef\u9760\u7684"},"\u274c \u7db2\u8def\u662f\u53ef\u9760\u7684"),(0,i.kt)("p",null,"\u5206\u6563\u5f0f\u67b6\u69cb\u9700\u4f9d\u8cf4\u7db2\u8def\u4f86\u8207\u670d\u52d9\u4e4b\u9593\u4f86\u9032\u884c\u901a\u8a0a\uff0c\u53ea\u8981\u6709\u4e00\u7aef\u9047\u5230\u7db2\u8def\u554f\u984c\u800c\u7121\u6cd5\u9023\u4e0a\uff0c\u6574\u500b\u7cfb\u7d71\u6703\u56b4\u91cd\u5230\u7121\u6cd5\u4f7f\u7528\u3002\n",(0,i.kt)("img",{alt:"fig_9.2",src:a(8819).Z,width:"1326",height:"516"})),(0,i.kt)("h4",{id:"-\u7db2\u8def\u4e0d\u6703\u6709\u5ef6\u9072"},"\u274c \u7db2\u8def\u4e0d\u6703\u6709\u5ef6\u9072"),(0,i.kt)("p",null,"\u670d\u52d9\u5167\u7684\u6e9d\u901a\u70bat_local(\u5948\u79d2\u6216\u5fae\u79d2)\uff0c\u5206\u6563\u5f0f\u67b6\u69cb\u670d\u52d9\u8207\u670d\u52d9\u4e4b\u9593\u7684\u6e9d\u901a\u70bat_remote(\u6beb\u79d2)\uff0ct_remote\u901a\u5e38\u6bd4t_local\u9084\u6162\uff0c\n\u96d6\u7136\u770b\u8d77\u4f86\u90fd\u5f88\u5c0f\uff0c\u4f46\u5982\u679c\u4e32\u902310\u500b\u670d\u52d9\uff0ct_remote\u5c31\u6703\u589e\u52a010\u500d\uff0c\u800c\u4e14\u7a0b\u5e8f\u8655\u7406\u5230\u5f8c\u671f\u9047\u5230\u9577\u5c3e\u7684\u5ef6\u9072\uff0c\u6703\u62c9\u4f4e\u6574\u500b\u5206\u6563\u5f0f\u7cfb\u7d71\u7684\u6548\u80fd\u3002\n",(0,i.kt)("img",{alt:"fig_9.3",src:a(23756).Z,width:"1368",height:"702"})),(0,i.kt)("h4",{id:"-\u983b\u5bec\u662f\u7121\u9650\u7684"},"\u274c \u983b\u5bec\u662f\u7121\u9650\u7684"),(0,i.kt)("p",null,"\u4e00\u500b\u4efb\u52d9\u9032\u4f86\u4f7f\u670d\u52d9\u9593\u4f86\u5f80\u7684\u901a\u4fe1\u4f54\u7528\u5927\u91cf\u983b\u5bec\uff0c\u6703\u4f7f\u7528\u7db2\u8def\u5ef6\u9072\u53ca\u4e0d\u53ef\u9760\u3002\n",(0,i.kt)("img",{alt:"fig_9.4",src:a(82466).Z,width:"1350",height:"534"})),(0,i.kt)("h4",{id:"-\u7db2\u8def\u662f\u5b89\u5168\u7684"},"\u274c \u7db2\u8def\u662f\u5b89\u5168\u7684"),(0,i.kt)("p",null,"\u670d\u52d9\u8207\u670d\u52d9\u9593\u7684\u8de8\u670d\u52d9\u901a\u8a0a\u4e0d\u4e00\u5b9a\u662f\u5b89\u5168\u7684\uff0c\u8981\u78ba\u4fdd\u6bcf\u500b\u7aef\u9ede\u4ee5\u53ca\u4e0d\u597d\u7684\u8acb\u6c42\u7121\u6cd5\u5230\u9054\u4e3b\u8981\u7684\u670d\u52d9\u3002\n",(0,i.kt)("img",{alt:"fig_9.5",src:a(43037).Z,width:"1334",height:"536"})),(0,i.kt)("h4",{id:"-\u7db2\u8def\u62d3\u58a3\u7d55\u5c0d\u4e0d\u6703\u6539\u8b8a"},"\u274c \u7db2\u8def\u62d3\u58a3\u7d55\u5c0d\u4e0d\u6703\u6539\u8b8a"),(0,i.kt)("p",null,"\u670d\u52d9\u9593\u7684\u7db2\u8def\u74b0\u5883\u3001\u88dd\u7f6e\u53ef\u80fd\u6703\u56e0\u70ba\u5347\u7d1a\u800c\u5c0e\u81f4\u6574\u500b\u670d\u52d9\u639b\u6389\u3002\n",(0,i.kt)("img",{alt:"fig_9.6",src:a(12902).Z,width:"1358",height:"600"})),(0,i.kt)("h4",{id:"-\u53ea\u6709\u4e00\u4f4d\u7ba1\u7406\u54e1"},"\u274c \u53ea\u6709\u4e00\u4f4d\u7ba1\u7406\u54e1"),(0,i.kt)("p",null,"\u8981\u8ddf\u591a\u4f4d\u7ba1\u7406\u54e1\u6e9d\u901a\u800c\u4e0d\u662f\u53ea\u6709\u4e00\u4f4d\uff0c\u96c6\u601d\u5ee3\u76ca\u3002\n",(0,i.kt)("img",{alt:"fig_9.7",src:a(90216).Z,width:"1358",height:"622"})),(0,i.kt)("h4",{id:"-\u50b3\u8f38\u6210\u672c\u70ba\u96f6"},"\u274c \u50b3\u8f38\u6210\u672c\u70ba\u96f6"),(0,i.kt)("p",null,"\u5206\u6563\u5f0f\u67b6\u69cb\u9700\u8981\u984d\u5916\u7684\u786c\u9ad4\u3001\u4f3a\u670d\u5668\u3001\u9598\u9053\u3001\u9632\u706b\u7246....\u7b49\u3002\n",(0,i.kt)("img",{alt:"fig_9.8",src:a(37946).Z,width:"1358",height:"540"})),(0,i.kt)("h4",{id:"-\u7db2\u8def\u70ba\u5747\u8cea\u6027\u7684"},"\u274c \u7db2\u8def\u70ba\u5747\u8cea\u6027\u7684"),(0,i.kt)("p",null,"\u786c\u9ad4\u8a2d\u5099\u4e0d\u4e00\u5b9a\u90fd\u662f\u7a69\u5b9a\u7684\uff0c\u786c\u9ad4\u9593\u7684\u96f6\u4ef6\u4e92\u76f8\u7d44\u5408\u4e0d\u4e00\u5b9a\u5b8c\u5168\u6c92\u6709\u554f\u984c\uff0c\u5f15\u767c\u591a\u7a2e\u8b2c\u8aa4\u3002\n",(0,i.kt)("img",{alt:"fig_9.9",src:a(40580).Z,width:"1364",height:"552"})),(0,i.kt)("h3",{id:"\u5206\u6563\u5f0f\u7684\u5176\u4ed6\u8003\u91cf"},"\u5206\u6563\u5f0f\u7684\u5176\u4ed6\u8003\u91cf"),(0,i.kt)("h4",{id:"\u5206\u6563\u5f0f\u767b\u5165"},"\u5206\u6563\u5f0f\u767b\u5165"),(0,i.kt)("p",null,"\u767b\u5165\u6a94\u5206\u6563\u5728\u5404\u500b\u670d\u52d9\uff0c\u683c\u5f0f\u4e5f\u4e0d\u592a\u4e00\u6a23\uff0c\u96e3\u4ee5\u8ffd\u67e5\u4ee5\u53ca\u7d44\u6210\u3002"),(0,i.kt)("h4",{id:"\u5206\u6563\u5f0f\u4ea4\u6613"},"\u5206\u6563\u5f0f\u4ea4\u6613"),(0,i.kt)("p",null,"\u55ae\u9ad4\u67b6\u69cb\u900f\u904eACID\u4f86\u4fdd\u969c\u8cc7\u6599\u7684\u4e00\u81f4\u6027\u8207\u5b8c\u6574\u6027\uff0c\u800c\u5206\u6563\u5f0f\u67b6\u69cb\u4f9d\u8cf4\u6700\u7d42\u4e00\u81f4\u6027\u4f86\u72a7\u7272\u8cc7\u6599\u7684\u4e00\u81f4\u6027\u8207\u5b8c\u6574\u6027\uff0c\u63db\u53d6\u53ef\u62d3\u5c55\u6027\u3001\u6548\u80fd\u3001\u53ef\u7528\u6027\u3002\n\u53e6\u5916\u5206\u6563\u5f0f\u7cfb\u7d71\u4e5f\u6709\u4ee5\u4e0b\u65b9\u6cd5\u4f86\u7ba1\u7406\u5206\u6563\u5f0f\u4ea4\u6613:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4ea4\u6613\u50b3\u5947(saga)"),(0,i.kt)("li",{parentName:"ul"},"BASE")),(0,i.kt)("admonition",{title:"ACID",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u6307\u8cc7\u6599\u5eab\u7ba1\u7406\u7cfb\u7d71\uff08DBMS\uff09\u5728\u5beb\u5165\u6216\u66f4\u65b0\u8cc7\u6599\u7684\u904e\u7a0b\u4e2d\uff0c\u70ba\u4fdd\u8b49transaction\u662f\u6b63\u78ba\u53ef\u9760\u7684\uff0c\u6240\u5fc5\u9808\u5177\u5099\u7684\u56db\u500b\u7279\u6027\u3002"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A"),"(Atomicity)\u539f\u5b50\u6027: transaction \u88e1\u9762\u7684\u64cd\u4f5c\u8981\u99ac\u5168\u90e8\u6210\u529f\uff0c\u8981\u99ac\u5168\u90e8\u5931\u6557\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"C"),"(Consistency)\u4e00\u81f4\u6027: \u4e0d\u540c\u7684\u6578\u64da\u90fd\u6703\u6709\u4e00\u4e9b\u57fa\u672c\u7684\u7d04\u675f\uff0c\u800c\u9019\u4e9b\u7d04\u675f\u5728\u4ea4\u6613\u524d\u8ddf\u4ea4\u6613\u5f8c\u90fd\u5fc5\u9808\u8981\u9075\u5b88\uff0c\u5982\u679c\u6c92\u8fa6\u6cd5\u9075\u5b88\u4ea4\u6613\u5c31\u5fc5\u9808\u5931\u6557\uff0cex: 1.\u5e33\u6236\u96d9\u65b9\u7684\u9322\u90fd\u4e0d\u80fd\u5c0f\u65bc0 2.\u96d9\u65b9\u9322\u7684\u7e3d\u548c\u4e0d\u80fd\u6539\u8b8a \u4e0a\u9762\u5169\u500b\u9650\u5236\u5728\u4ea4\u6613\u524d\u8ddf\u4ea4\u6613\u5f8c\u90fd\u5fc5\u9808\u8981\u9075\u5b88\uff0c\u9019\u5c31\u662f\u4e00\u81f4\u6027\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"I"),"(Isolation)\u9694\u96e2\u6027: \u591a\u500b transaction \u4e0d\u6703\u4e92\u76f8\u5e72\u64fe\uff0c\u4e0d\u80fd\u4fee\u6539\u5230\u540c\u4e00\u500b\u503c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"D"),"(Durability)\u6301\u4e45\u6027: transaction\u8655\u7406\u7d50\u675f\u5f8c\uff0c\u5c0d\u6578\u64da\u7684\u4fee\u6539\u5c31\u662f\u6c38\u4e45\u7684\uff0c\u5373\u4fbf\u7cfb\u7d71\u6545\u969c\u4e5f\u4e0d\u6703\u4e1f\u5931\u3002"))),(0,i.kt)("admonition",{title:"\u6700\u7d42\u4e00\u81f4\u6027 & \u5f3a\u4e00\u81f4\u6027",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u6700\u7d42\u4e00\u81f4\u6027\n",(0,i.kt)("img",{alt:"fig_9.10.png",src:a(83635).Z,width:"1416",height:"782"})),(0,i.kt)("p",{parentName:"admonition"},"\u5f3a\u4e00\u81f4\u6027\n",(0,i.kt)("img",{alt:"fig_9.11.png",src:a(6894).Z,width:"1332",height:"898"})),(0,i.kt)("blockquote",{parentName:"admonition"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore?hl=zh-cn"},"\u5229\u7528 Datastore \u5728\u5f3a\u4e00\u81f4\u6027\u548c\u6700\u7ec8\u4e00\u81f4\u6027\u4e4b\u95f4\u53d6\u5f97\u5e73\u8861")))),(0,i.kt)("admonition",{title:"saga & BASE",type:"info"},(0,i.kt)("h4",{parentName:"admonition",id:"saga"},"saga"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Choreography-Based Saga Pattern - \u7de8\u6392\u6a21\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"Orchestrator-Based Saga Pattern - \u7f16\u5236\u6a21\u5f0f")),(0,i.kt)("blockquote",{parentName:"admonition"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://microservices.io/patterns/data/saga.html"},"O'reilly"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://learnku.com/articles/76208"},"\u5c0d\u5cb8\u89e3\u91cb"))),(0,i.kt)("h4",{parentName:"admonition",id:"base"},(0,i.kt)("a",{parentName:"h4",href:"https://hackmd.io/@AmdAc990TDm3EkP4EmImTA/Hkg62nmND"},"BASE")),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BA"),"(Basically Available) "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"S"),"(Soft-state)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"E"),"(Eventually Consistent)"))),(0,i.kt)("h4",{id:"\u5408\u7d04\u7dad\u8b77\u8207\u7248\u672c\u63a7\u5236"},"\u5408\u7d04\u7dad\u8b77\u8207\u7248\u672c\u63a7\u5236"),(0,i.kt)("p",null,"\u670d\u52d9\u4f9d\u64da\u7531\u5ba2\u6236\u540c\u610f\u7684\u5408\u7d04\u800c\u7522\u751f\u7684\u884c\u70ba\u53ca\u8cc7\u6599\uff0c\u56e0\u70ba\u670d\u52d9\u53ef\u80fd\u7531\u4e0d\u540c\u5718\u968a\u53ca\u90e8\u9580\u64c1\u6709\uff0c\u6240\u4ee5\u5982\u679c\u5404\u90e8\u9580\u670d\u52d9\u66f4\u65b0\uff0c\u670d\u52d9\u9593\u7684\u901a\u8a0a\u6703\u8b8a\u5f97\u56f0\u96e3\u3002"),(0,i.kt)("h2",{id:"recap"},"Recap"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5217\u51fa\u5206\u6563\u5f0f\u8a08\u7b97\u76848\u7a2e\u8b2c\u8aa4\uff1f"),(0,i.kt)("li",{parentName:"ol"},"\u5217\u8209\u5206\u6563\u5f0f\u6703\u9047\u5230\uff0c\u4f46\u55ae\u9ad4\u67b6\u69cb\u4e0d\u6703\u9047\u5230\u7684\u4e09\u7a2e\u6311\u6230\uff1f"),(0,i.kt)("li",{parentName:"ol"},"\u6a19\u8a18\u8026\u5408\u662f\u4ec0\u9ebc\uff1f"),(0,i.kt)("li",{parentName:"ol"},"\u8655\u7406\u6a19\u8a18\u8026\u5408\u6709\u54ea\u4e9b\u65b9\u6cd5\uff1f")))}u.isMDXComponent=!0},75249:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/fig_9.1-e956bb39ef7876dec7d31a08c099eb62.png"},83635:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/fig_9.10-445a5e7b2b22aa42f59f9b751fce176a.png"},6894:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/fig_9.11-f20a46f271346205787ff9e8e5cd0782.png"},8819:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/fig_9.2-32fff6d4596daf1152303281b5163c00.png"},23756:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/fig_9.3-cdd4178b69d5c9bd5d73cd65b6ad5cc3.png"},82466:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/fig_9.4-942b830fb619f9521a4dd080098df8d2.png"},43037:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/fig_9.5-f6263e59af09912f302a26a3afe6d395.png"},12902:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/fig_9.6-bde3982e36ad79a1752cb801cff50ad0.png"},90216:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/fig_9.7-da438dd1008c89a2b588e7aaa1fc1ace.png"},37946:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/fig_9.8-68647af6c9cef871153b67a4eecce9fa.png"},40580:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/fig_9.9-a62e437ddd58c5b6b027b964862b4d8d.png"}}]);