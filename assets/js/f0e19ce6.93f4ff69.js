"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[8217],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>d});var r=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var o=r.createContext({}),u=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,i=t.mdxType,n=t.originalType,o=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=u(a),k=i,d=m["".concat(o,".").concat(k)]||m[k]||s[k]||n;return a?r.createElement(d,l(l({ref:e},p),{},{components:a})):r.createElement(d,l({ref:e},p))}));function d(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=a.length,l=new Array(n);l[0]=k;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c[m]="string"==typeof t?t:i,l[1]=c;for(var u=2;u<n;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8868:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>n,metadata:()=>c,toc:()=>u});var r=a(87462),i=(a(67294),a(3905));const n={title:"Ch5: \u78ba\u8a8d\u67b6\u69cb\u7279\u6027",tsidebar_label:"Ch5: \u78ba\u8a8d\u67b6\u69cb\u7279\u6027",sidebar_position:5},l=void 0,c={unversionedId:"sg/fundamentals-of-software-architecture/ch5",id:"sg/fundamentals-of-software-architecture/ch5",title:"Ch5: \u78ba\u8a8d\u67b6\u69cb\u7279\u6027",description:"\u4e09\u7a2e\u65b9\u6cd5\u767c\u5800\u67b6\u69cb\u7279\u6027",source:"@site/docs/sg/fundamentals-of-software-architecture/ch5.md",sourceDirName:"sg/fundamentals-of-software-architecture",slug:"/sg/fundamentals-of-software-architecture/ch5",permalink:"/docs/sg/fundamentals-of-software-architecture/ch5",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fundamentals-of-software-architecture/ch5.md",tags:[],version:"current",lastUpdatedBy:"Ming-Yen Chung",lastUpdatedAt:1689702436,formattedLastUpdatedAt:"Jul 18, 2023",sidebarPosition:5,frontMatter:{title:"Ch5: \u78ba\u8a8d\u67b6\u69cb\u7279\u6027",tsidebar_label:"Ch5: \u78ba\u8a8d\u67b6\u69cb\u7279\u6027",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Ch4: \u5b9a\u7fa9\u67b6\u69cb\u7279\u6027",permalink:"/docs/sg/fundamentals-of-software-architecture/ch4"},next:{title:"Ch6: \u6e2c\u91cf\u53ca\u7ba1\u7406\u67b6\u69cb\u7279\u6027",permalink:"/docs/sg/fundamentals-of-software-architecture/ch6"}},o={},u=[{value:"\u5f9e\u9818\u57df\u8003\u91cf\u63d0\u53d6\u67b6\u69cb\u7279\u6027 (Extracting Architecture Characteristics from Domain Concerns)",id:"\u5f9e\u9818\u57df\u8003\u91cf\u63d0\u53d6\u67b6\u69cb\u7279\u6027-extracting-architecture-characteristics-from-domain-concerns",level:2},{value:"\u5f9e\u9700\u6c42\u63d0\u53d6\u67b6\u69cb\u7279\u6027 (Extracting Architecture Characteristics from Requirements)",id:"\u5f9e\u9700\u6c42\u63d0\u53d6\u67b6\u69cb\u7279\u6027-extracting-architecture-characteristics-from-requirements",level:2},{value:"\u6848\u4f8b\u7814\u7a76: Silicon Sandwiches",id:"\u6848\u4f8b\u7814\u7a76-silicon-sandwiches",level:2},{value:"\u660e\u78ba\u7279\u6027 (Explicit Characteristics)",id:"\u660e\u78ba\u7279\u6027-explicit-characteristics",level:3},{value:"\u96b1\u542b\u7279\u6027 (Implicit Characteristics)",id:"\u96b1\u542b\u7279\u6027-implicit-characteristics",level:3},{value:"\u4ed8\u6b3e\u65b9\u5f0f",id:"\u4ed8\u6b3e\u65b9\u5f0f",level:4},{value:"\u5ba2\u88fd\u5316\u80fd\u529b Customizability",id:"\u5ba2\u88fd\u5316\u80fd\u529b-customizability",level:4},{value:"Recap",id:"recap",level:2}],p={toc:u},m="wrapper";function s(t){let{components:e,...n}=t;return(0,i.kt)(m,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e09\u7a2e\u65b9\u6cd5\u767c\u5800\u67b6\u69cb\u7279\u6027"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9818\u57df\u8003\u91cf"),(0,i.kt)("li",{parentName:"ul"},"\u9700\u6c42"),(0,i.kt)("li",{parentName:"ul"},"\u96b1\u542b\u7684\u9818\u57df\u77e5\u8b58")),(0,i.kt)("h2",{id:"\u5f9e\u9818\u57df\u8003\u91cf\u63d0\u53d6\u67b6\u69cb\u7279\u6027-extracting-architecture-characteristics-from-domain-concerns"},"\u5f9e\u9818\u57df\u8003\u91cf\u63d0\u53d6\u67b6\u69cb\u7279\u6027 (Extracting Architecture Characteristics from Domain Concerns)"),(0,i.kt)("p",null,"\u4e86\u89e3\u95dc\u9375\u7684\u9818\u57df\u76ee\u6a19\u8207\u72c0\u6cc1\uff0c\u5c07\u9818\u57df\u8003\u91cf\u8f49\u8b6f\u6210\u300c\u5404\u7a2e\u80fd\u529b\u300d"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u6848\u4f8b: Vasa\n\u56e0\u70ba\u6307\u5b9a\u904e\u591a\u7684\u67b6\u69cb\u7279\u6027\uff0c\u5c0e\u81f4\u5c08\u6848\u5931\u6557\u7684\u6848\u4f8b: Vasa - \u745e\u5178\u6230\u8266\u3002\n\u540c\u6642\u6eff\u8db3\u904b\u5175\u8239\u53ca\u7834\u8266\u7684\u7279\u6027\u3001\u591a\u4e00\u500b\u7532\u677f\u3001\u5927\u4e00\u500d\u7684\u52a0\u8fb2\u7832\u3002\n\u6700\u5f8c\u56e0\u982d\u91cd\u8173\u8f15\u6c89\u5165\u6d77\u5e95")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Table-5.1",src:a(99177).Z,width:"1034",height:"345"})),(0,i.kt)("h2",{id:"\u5f9e\u9700\u6c42\u63d0\u53d6\u67b6\u69cb\u7279\u6027-extracting-architecture-characteristics-from-requirements"},"\u5f9e\u9700\u6c42\u63d0\u53d6\u67b6\u69cb\u7279\u6027 (Extracting Architecture Characteristics from Requirements)"),(0,i.kt)("p",null,"\u67b6\u69cb\u7279\u6027\u4f86\u81ea\u9700\u6c42\u6587\u4ef6\u7684\u660e\u78ba\u8981\u6c42"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f8b: \u660e\u78ba\u7684\u9810\u671f\u4f7f\u7528\u8005\u6578\u76ee\u8207\u898f\u6a21")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h3",{parentName:"admonition",id:"\u67b6\u69cb\u5957\u8def\u7684\u8d77\u6e90"},"\u67b6\u69cb\u5957\u8def\u7684\u8d77\u6e90"),(0,i.kt)("p",{parentName:"admonition"},"Ted Neward\u63d0\u51fa",(0,i.kt)("strong",{parentName:"p"},"\u67b6\u69cb\u5957\u8def(katas)"),"\n",(0,i.kt)("strong",{parentName:"p"},"\u5957\u8def"),"\u662f\u4e00\u7a2e\u500b\u4eba\u7684\u8a13\u7df4\u7df4\u7fd2\uff0c\u5f37\u8abf\u9069\u7576\u7684\u5f62\u5f0f\u8207\u6280\u5de7"),(0,i.kt)("p",{parentName:"admonition"},"\u300c\u5982\u4f55\u57f9\u80b2\u5049\u5927\u7684\u8a2d\u8a08\u5e2b\uff1f\u7576\u7136\u56c9\uff0c\u5049\u5927\u7684\u8a2d\u8a08\u5e2b\u4e00\u76f4\u5728\u8a2d\u8a08\u3002\u300d - Fred Brooks"),(0,i.kt)("p",{parentName:"admonition"},"\u5957\u8def\u9810\u5148\u5b9a\u7fa9\u5e7e\u500b\u6bb5\u843d"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u63cf\u8ff0"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7cfb\u7d71\u5617\u8a66\u89e3\u6c7a\u7684\u6574\u500b\u9818\u57df\u554f\u984c\u662f\u4ec0\u9ebc"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u8005"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9810\u671f\u4e2d\u7684\u7cfb\u7d71\u4f7f\u7528\u8005\u6578\u76ee\u7d1a\u6216\u578b\u614b"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u9700\u6c42"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9818\u57df/\u9818\u57df\u5c64\u6b21\u7684\u9700\u6c42\uff0c\u4f86\u81ea\u65bc\u9818\u57df\u4f7f\u7528\u8005/\u9818\u57df\u5c08\u5bb6\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u984d\u5916\u80cc\u666f"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u672a\u660e\u767d\u8868\u9054\u5728\u9700\u6c42\u4e2d\u7684\u67b6\u69cb\uff0c\u900f\u904e\u554f\u984c\u9818\u57df\u7684\u96b1\u6027\u77e5\u8b58\u8868\u9054"))))),(0,i.kt)("h2",{id:"\u6848\u4f8b\u7814\u7a76-silicon-sandwiches"},"\u6848\u4f8b\u7814\u7a76: Silicon Sandwiches"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u63cf\u8ff0",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e00\u5bb6\u5168\u570b\u6027\u7684\u4e09\u660e\u6cbb\u5546\u5e97\u60f3\u555f\u52d5\u7dda\u4e0a\u8a02\u8cfc(\u73fe\u5728\u5df2\u6709\u96fb\u8a71\u8a02\u8cfc\u670d\u52d9)"))),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8005",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5e7e\u5343\u4eba\uff0c\u4e00\u5929\u4e0b\u4f86\u53ef\u80fd\u9054\u767e\u842c\u4eba"))),(0,i.kt)("li",{parentName:"ul"},"\u9700\u6c42",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8005\u4e0b\u8a02\u55ae\uff0c\u7136\u5f8c\u88ab\u901a\u77e5\u4e00\u500b\u53d6\u4e09\u660e\u6cbb\u7684\u6642\u9593\u3001\u4ee5\u53ca\u524d\u5f80\u5e97\u92ea\u7684\u6307\u5f15(\u9808\u5305\u542b\u4ea4\u901a\u8207\u5730\u5716\u8cc7\u8a0a)"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u5e97\u92ea\u63d0\u4f9b\u5916\u9001\u670d\u52d9\uff0c\u6d3e\u9063\u53f8\u6a5f\u5c07\u4e09\u660e\u6cbb\u9001\u7d66\u4f7f\u7528\u8005"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u900f\u904e\u884c\u52d5\u88dd\u7f6e\u4f7f\u7528\u670d\u52d9"),(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5168\u570b\u6027\u7684\u6bcf\u65e5\u4fc3\u92b7/\u7279\u9910"),(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u7576\u5730\u7684\u6bcf\u65e5\u4fc3\u92b7/\u7279\u9910"),(0,i.kt)("li",{parentName:"ul"},"\u63a5\u53d7\u7dda\u4e0a\u3001\u89aa\u81ea\u3001\u4ee5\u53ca\u5916\u9001\u8ca8\u5230\u6642\u7684\u4ed8\u6b3e"))),(0,i.kt)("li",{parentName:"ul"},"\u984d\u5916\u80cc\u666f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e09\u660e\u6cbb\u5e97\u92ea\u4e43\u52a0\u76df\u7d93\u71df\uff0c\u6bcf\u5bb6\u7684\u7d93\u71df\u8005\u90fd\u4e0d\u540c"),(0,i.kt)("li",{parentName:"ul"},"\u6bcd\u516c\u53f8\u8fd1\u671f\u6709\u64f4\u5c55\u5230\u6d77\u5916\u7684\u8a08\u756b"),(0,i.kt)("li",{parentName:"ul"},"\u516c\u53f8\u76ee\u6a19\u662f\u8058\u50f1\u5ec9\u50f9\u52de\u529b\u4ee5\u6700\u5927\u5316\u7372\u5229")))),(0,i.kt)("h3",{id:"\u660e\u78ba\u7279\u6027-explicit-characteristics"},"\u660e\u78ba\u7279\u6027 (Explicit Characteristics)"),(0,i.kt)("p",null,"\u660e\u78ba\u7684\u67b6\u69cb\u7279\u6027\u51fa\u73fe\u5728\u9700\u6c42\u898f\u683c\u66f8\uff0c\u4ee5\u505a\u70ba\u5fc5\u9700\u8a2d\u8a08\u7684\u4e00\u90e8\u5206\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f8b:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8005\u6578\u76ee:\u76ee\u524d\u5e7e\u5343\u500b\uff0c\u6709\u4e00\u5929\u53ef\u80fd\u6703\u5230\u767e\u842c\u500b\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53ef\u64f4\u5c55\u6027",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6e2c\u91cf\u4f7f\u7528\u8005\u540c\u6642\u4e0a\u7dda\u7684\u6548\u80fd"))),(0,i.kt)("li",{parentName:"ul"},"\u5f48\u6027",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u627f\u53d7\u4f7f\u7528\u8005\u7a81\u767c\u6027\u589e\u52a0")))))))),(0,i.kt)("h3",{id:"\u96b1\u542b\u7279\u6027-implicit-characteristics"},"\u96b1\u542b\u7279\u6027 (Implicit Characteristics)"),(0,i.kt)("p",null,"\u8a31\u591a\u67b6\u69cb\u4e26\u672a\u6307\u5b9a\u5728\u9700\u6c42\u6587\u4ef6\uff0c\u4f46\u537b\u69cb\u6210\u4e86\u8a2d\u8a08\u7684\u91cd\u8981\u9762\u5411\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f8b:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53ef\u7528\u6027 Availability",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u78ba\u4fdd\u4f7f\u7528\u8005\u53ef\u4ee5\u4f7f\u7528\u4e09\u660e\u6cbb\u7db2\u7ad9"))),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u9760\u6027 Reliability",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u78ba\u8a8d\u7db2\u7ad9\u5728\u4e92\u52d5\u904e\u7a0b\u4e2d\u4fdd\u6301\u6b63\u5e38"))),(0,i.kt)("li",{parentName:"ul"},"\u5b89\u5168\u6027",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4f9d\u7167\u5371\u5bb3\u7a0b\u5ea6\u4f86\u6c7a\u5b9a\u512a\u5148\u9806\u5e8f")))))),(0,i.kt)("h4",{id:"\u4ed8\u6b3e\u65b9\u5f0f"},"\u4ed8\u6b3e\u65b9\u5f0f"),(0,i.kt)("h4",{id:"\u5ba2\u88fd\u5316\u80fd\u529b-customizability"},"\u5ba2\u88fd\u5316\u80fd\u529b Customizability"),(0,i.kt)("p",null,"\u300c\u67b6\u69cb\u4e0a\u6c92\u6709\u932f\u8aa4\u7684\u7b54\u6848\uff0c\u53ea\u6709\u6602\u8cb4\u7684\u7b54\u6848\u3002\u300d - Mark"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h4",{parentName:"admonition",id:"\u8a2d\u8a08-vs-\u67b6\u69cb-\u8207-\u53d6\u6368"},"\u8a2d\u8a08 vs \u67b6\u69cb \u8207 \u53d6\u6368"),(0,i.kt)("p",{parentName:"admonition"},"\u5728Silicon Sandwiches\u5957\u8def\u4e2d\uff0c\u67b6\u69cb\u5e2b\u53ef\u80fd\u5c07\u5ba2\u88fd\u5316\u80fd\u529b\u8a8d\u5b9a\u70ba\u7cfb\u7d71\u7684\u4e00\u90e8\u5206\uff0c\u4f46\u9019\u500b\u662f\u5c6c\u65bc\u67b6\u69cb\u9084\u662f\u8a2d\u8a08\uff1f"),(0,i.kt)("p",{parentName:"admonition"},"\u67b6\u69cb\u96b1\u542b\u4e86\u7d50\u69cb\u4e0a\u7684\u5143\u4ef6\u3002\u800c\u8a2d\u8a08\u53c8\u5b58\u5728\u65bc\u67b6\u69cb\u4e4b\u5167\u3002"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u9078\u64c7"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u67b6\u69cb: \u5fae\u6838\u5fc3\u67b6\u69cb\u98a8\u683c\uff0c\u5f9e\u7d50\u69cb\u652f\u63f4\u5ba2\u88fd\u5316"),(0,i.kt)("li",{parentName:"ul"},"\u8a2d\u8a08: \u4f7f\u7528\u5176\u4ed6\u7684\u67b6\u69cb\uff0c\u4f46\u5728\u8a2d\u8a08\u5be6\u4f5c\u4e0a\u4f7f\u7528\u6a23\u677f\u7684\u65b9\u6cd5\u4f86\u652f\u63f4\u5ba2\u88fd\u5316"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u53d6\u6368")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6709\u597d\u7684\u7406\u7531\uff0c\u653e\u68c4\u5fae\u6838\u5fc3\u67b6\u69cb\u7684\u505a\u6cd5\u55ce\uff1f"),(0,i.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u7684\u67b6\u69cb\u7279\u6027\uff0c\u5728\u8a2d\u8a08\u5be6\u4f5c\u4e0a\u7684\u56f0\u96e3\u5ea6\uff1f"),(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u7a2e\u8a2d\u8a08vs\u6a21\u5f0f\u5e95\u4e0b\uff0c\u8981\u652f\u63f4\u6240\u6709\u67b6\u69cb\u7279\u6027\u7684\u6210\u672c\uff1f"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5efa\u8b70\n\u67b6\u69cb\u5e2b\u5f97\u8ddf\u958b\u767c\u4eba\u54e1\u3001\u5c08\u6848\u7d93\u7406\u3001\u904b\u7dad\u5718\u968a\u3001\u4ee5\u53ca\u8edf\u9ad4\u7cfb\u7d71\u7684\u5171\u540c\u5efa\u69cb\u8005\u5408\u4f5c\uff0c\u8a8d\u4f55\u67b6\u69cb\u6c7a\u5b9a\u61c9\u5171\u540c\u8a0e\u8ad6\u6c7a\u5b9a\u3002")))),(0,i.kt)("h2",{id:"recap"},"Recap"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7d66\u500b\u7406\u7531\uff0c\u8aaa\u660e\u70ba\u4f55\u9650\u5236\u67b6\u69cb\u61c9\u652f\u63f4\u7684\u7279\u6027\u6578\u76ee(\u300c\u5404\u9805\u80fd\u529b\u300d)\u662f\u500b\u597d\u505a\u6cd5\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6b64\u6558\u8ff0\u70ba\u771f\u6216\u5047:\u5927\u90e8\u5206\u67b6\u69cb\u4f86\u81ea\u65bc\u696d\u52d9\u9700\u6c42\u53ca\u4f7f\u7528\u8005\u6545\u4e8b\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u4f4d\u696d\u52d9\u5229\u76ca\u76f8\u95dc\u65b9\u8ff0\u8aaa\u4e0a\u5e02\u6642\u9593(\u76e1\u5feb\u767c\u884c\u65b0\u529f\u80fd\u6216\u4fee\u6b63\u932f\u8aa4\u5f8c\u7684\u7248\u672c)\u662f\u6700\u91cd\u8981\u7684\u696d\u52d9\u8003\u91cf\uff0c\u90a3\u9ebc\u67b6\u69cb\u8a72\u652f\u63f4\u54ea\u500b\u67b6\u69cb\u7279\u6027\uff1f"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u64f4\u5c55\u6027\u8207\u5f48\u6027\u7684\u5dee\u7570\u4f55\u5728\uff1f"),(0,i.kt)("li",{parentName:"ul"},"\u4f60\u767c\u73fe\u516c\u53f8\u5c07\u8981\u9032\u884c\u597d\u5e7e\u5834\u4e3b\u8981\u7684\u4f75\u8cfc\uff0c\u4f86\u5927\u5e45\u589e\u52a0\u5ba2\u6236\u7fa4\u3002\u4f60\u8a72\u64d4\u5fc3\u54ea\u4e9b\u67b6\u69cb\u7279\u6027\uff1f")))}s.isMDXComponent=!0},99177:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/tab_5.1-943811da123159915cc408e385fdd155.png"}}]);