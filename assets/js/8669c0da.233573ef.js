"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[3532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||a;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},89546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Ch13: \u5143\u4ef6\u5167\u805a\u6027 (Component Cohesion)",sidebar_label:"Ch13: \u5143\u4ef6\u5167\u805a\u6027",sidebar_position:13},l="Ch13: \u5143\u4ef6\u5167\u805a\u6027 (Component Cohesion)",i={unversionedId:"sg/clean-architecture/ch13",id:"sg/clean-architecture/ch13",title:"Ch13: \u5143\u4ef6\u5167\u805a\u6027 (Component Cohesion)",description:"Chapter outline:",source:"@site/docs/sg/clean-architecture/ch13.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch13",permalink:"/docs/sg/clean-architecture/ch13",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch13.md",tags:[],version:"current",lastUpdatedBy:"HomaD",lastUpdatedAt:1717431011,formattedLastUpdatedAt:"Jun 3, 2024",sidebarPosition:13,frontMatter:{title:"Ch13: \u5143\u4ef6\u5167\u805a\u6027 (Component Cohesion)",sidebar_label:"Ch13: \u5143\u4ef6\u5167\u805a\u6027",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Ch12: \u5143\u4ef6",permalink:"/docs/sg/clean-architecture/ch12"},next:{title:"Ch14: \u5143\u4ef6\u8026\u5408\u6027",permalink:"/docs/sg/clean-architecture/ch14"}},c={},p=[],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ch13-\u5143\u4ef6\u5167\u805a\u6027-component-cohesion"},"Ch13: \u5143\u4ef6\u5167\u805a\u6027 (Component Cohesion)"),(0,o.kt)("p",null,"Chapter outline:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"REP: The Reuse/Release Equivalence Principle"),(0,o.kt)("li",{parentName:"ul"},"CCP: The Common Closure Principle"),(0,o.kt)("li",{parentName:"ul"},"CRP: The Common Reuse Principle")),(0,o.kt)("h1",{id:"rep-the-reuserelase-equivalence-principle"},"REP: The Reuse/Relase Equivalence Principle"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The granular of reuse is the granular of release."),(0,o.kt)("p",{parentName:"blockquote"},"\u5143\u4ef6\u5fa9\u7528\u7684\u6700\u5c0f\u7c92\u5ea6\u7b49\u65bc\u767c\u5e03\u7684\u6700\u5c0f\u7c92\u5ea6")),(0,o.kt)("admonition",{type:"success"},(0,o.kt)("p",{parentName:"admonition"},"\u8166\u529b\u6fc0\u76ea: \u4f60\u671f\u671b\u4e00\u500b\u80fd\u5920\u5fa9\u7528\u6216\u767c\u4f48\u51fa\u4f86\u7684 module \u8981\u5305\u542b\u54ea\u4e9b\u6771\u897f\u5462?")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u671f\u671b:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7248\u672c\u865f"),(0,o.kt)("li",{parentName:"ul"},"\u91cb\u51fa\u6642\u8981\u6709 release note"),(0,o.kt)("li",{parentName:"ul"},"\u6587\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u7dad\u8b77"),(0,o.kt)("li",{parentName:"ul"},"\u9810\u6e2c\u6027",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6211\u5728\u4f7f\u7528\u7684 module \u4e0d\u6703\u88ab\u6539\u52d5"),(0,o.kt)("li",{parentName:"ul"},"\u8981\u6539\u52d5\u7684\u8a71\u8981\u901a\u77e5\u6211"),(0,o.kt)("li",{parentName:"ul"},"\u6211\u53ef\u4ee5\u9078\u64c7\u820a\u7248\u9084\u662f\u65b0\u7248")))),(0,o.kt)("p",null,'\u7d44\u6210\u518d\u4e00\u8d77\u7684 classes \u8ddf modules \u61c9\u8a72\u662f\u80fd\u4e00\u8d77\u91cb\u51fa\u7684\uff0c\u800c\u7d81\u5728\u4e00\u8d77\u7684\u60c5\u6cc1\u61c9\u8a72\u5c0d\u4f7f\u7528\u8005\u9084\u6709\u4f5c\u8005\u4f86\u8aaa\u90fd\u662f\u5408\u7406\u7684\uff0c\n\u8b1b\u5408\u7406\u53ef\u80fd\u662f\u4e00\u500b\u6bd4\u8f03\u5f31\u7684\u5efa\u8b70\uff0c\u4f46\u662f\u7576\u6211\u5011\u9047\u5230"\u4e0d\u5408\u7406"\u6642\uff0c\u61c9\u8a72\u5f88\u5bb9\u6613\u80fd\u5920\u5bdf\u89ba'),(0,o.kt)("h1",{id:"ccp-the-common-closure-principle"},"CCP: The Common Closure Principle"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Gather into components those classes that change for the same reasons and at the same times.\nSeparate into different components those classes that change at different times and for different\nreasons.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Recap"),": \u4ec0\u9ebc\u662f Single Responsibility Principle?"),(0,o.kt)("p",null,"CCP \u539f\u5247\u5c31\u662f component \u7248\u672c\u7684 SRP, i.e., \u628a SRP \u539f\u5247\u4e2d\u7684 class \u66ff\u63db\u6210 component"),(0,o.kt)("p",null,"e.g., \u6240\u6709\u7ba1 Database \u7684 class \u7d44\u6210\u540c\u4e00\u500b Component\uff0c\u6240\u6709\u7ba1\u5546\u696d\u908f\u8f2f\u7d44\u6210\u540c\u4e00\u500b Component"),(0,o.kt)("p",null,"REP \u8ddf CCP \u6709\u4e9b\u8a31\u885d\u7a81\uff0cREP \u544a\u8a34\u6211\u5011\u505a\u6210\u4e00\u500b\u53ef\u767c\u4f48\u7248\u672c\uff0c\u4f46\u9019\u53ef\u80fd\u6703\u9700\u8981\u5f15\u5165\u66f4\u591a\u4e0d\u540c\u529f\u80fd\uff0c\n\u800c CCP \u5247\u544a\u8a34\u6211\u5011\u529f\u80fd\u76f8\u8fd1\u7684\u7d44\u5408\u6210\u4e00\u500b Component\uff0c\u5982\u679c\u529f\u80fd\u4e0d\u76f8\u8fd1\u5247\u61c9\u8a72\u5206\u6210\u4e0d\u540c Component"),(0,o.kt)("h1",{id:"crp-the-common-reuse-principle"},"CRP: The Common Reuse Principle"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Don\u2019t force users of a component to depend on things they don\u2019t need.")),(0,o.kt)("p",null,"\u5728\u540c\u500b Component \u88e1\u7684 Class\uff0c\u6211\u5011\u9810\u671f\u4ed6\u5011\u6703\u6709\u5f88\u591a\u76f8\u4f9d\u6027"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Recap"),": \u4ec0\u9ebc\u662f Interface Segregation Principle (ISP) \u539f\u5247"),(0,o.kt)("p",null,"\u8ddf ISP \u7684\u95dc\u4fc2: CRP \u662f\u6bd4 ISP \u66f4\u5ee3\u7684\u7248\u672c\uff0cISP \u5efa\u8b70\u4e0d\u8981\u4f9d\u8cf4\u5728 class \u4e2d\u7528\u4e0d\u5230\u7684 methods\uff0c\nCRP \u5efa\u8b70\u4e0d\u8981\u4f9d\u8cf4 Component \u4e2d\u7528\u4e0d\u5230\u7684 classes"),(0,o.kt)("p",null,"CRP \u539f\u5247\u901f\u8a18\u6cd5: \u4e0d\u8981\u4f9d\u8cf4\u7528\u4e0d\u5230\u7684\u6771\u897f!"),(0,o.kt)("h1",{id:"the-tension-diagram-for-component-cohesion"},"The Tension Diagram for Component cohesion"),(0,o.kt)("p",null,"REP \u8ddf CCP \u662f\u95dc\u65bc\u5305\u542b\u7684\u539f\u5247\uff0c\u6703\u8b93 Components \u8b8a\u5927\uff0c\nCRP \u5247\u662f\u95dc\u65bc\u6368\u53bb\u7684\u539f\u5247\uff0c\u6703\u9a45\u4f7f Components \u8b8a\u5c0f"),(0,o.kt)("p",null,"\u67b6\u69cb\u5e2b\u5fc5\u9808\u5728\u4e09\u500b\u539f\u5247\u4e2d\u505a\u53d6\u6368\nFigure 13.1 Cohesion principles tension diagram"),(0,o.kt)("p",null,"\u4f8b\u5982\u9805\u76ee\u65e9\u671f CCP > REP\uff0c\u56e0\u70ba\u9019\u4e00\u968e\u6bb5\uff0c\u7814\u767c\u901f\u5ea6\u6bd4\u5fa9\u7528\u6027\u91cd\u8981\n\u4e00\u822c\u4f86\u8aaa\uff0c\u9805\u76ee\u7684\u91cd\u5fc3\u6703\u5f9e\u4e09\u89d2\u5f62\u7684\u53f3\u5074\uff0c\u7522\u54c1\u6210\u719f\u4e4b\u5f8c\uff0c\u958b\u59cb\u504f\u5411\u5de6\u5074"),(0,o.kt)("p",null,"\u7d50\u8ad6:\nREP, CCP, CRP \u9019\u4e9b\u539f\u5247\u7684\u8abf\u6574\u662f\u52d5\u614b\u7684\uff0c\u4eca\u5e74\u9069\u7528\u7684\u5283\u5206\u53ef\u80fd\u660e\u5e74\u5c31\u4e0d\u80fd\u7528\u4e86"))}m.isMDXComponent=!0}}]);