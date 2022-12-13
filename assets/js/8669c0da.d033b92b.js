"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[3532],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=o,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9546:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Ch13: \u5143\u4ef6\u5167\u805a\u6027 (Component Cohesion)",sidebar_label:"Ch13: \u5143\u4ef6\u5167\u805a\u6027",sidebar_position:13},c="Ch13: \u5143\u4ef6\u5167\u805a\u6027 (Component Cohesion)",s={unversionedId:"sg/clean-architecture/ch13",id:"sg/clean-architecture/ch13",title:"Ch13: \u5143\u4ef6\u5167\u805a\u6027 (Component Cohesion)",description:"Chapter outline:",source:"@site/docs/sg/clean-architecture/ch13.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch13",permalink:"/docs/sg/clean-architecture/ch13",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch13.md",tags:[],version:"current",lastUpdatedBy:"becory",lastUpdatedAt:1670957508,formattedLastUpdatedAt:"12/13/2022",sidebarPosition:13,frontMatter:{title:"Ch13: \u5143\u4ef6\u5167\u805a\u6027 (Component Cohesion)",sidebar_label:"Ch13: \u5143\u4ef6\u5167\u805a\u6027",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Ch12: \u5143\u4ef6",permalink:"/docs/sg/clean-architecture/ch12"},next:{title:"Ch14: \u5143\u4ef6\u8026\u5408\u6027",permalink:"/docs/sg/clean-architecture/ch14"}},p={},u=[],m={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ch13-\u5143\u4ef6\u5167\u805a\u6027-component-cohesion"},"Ch13: \u5143\u4ef6\u5167\u805a\u6027 (Component Cohesion)"),(0,a.kt)("p",null,"Chapter outline:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"REP: The Reuse/Release Equivalence Principle"),(0,a.kt)("li",{parentName:"ul"},"CCP: The Common Closure Principle"),(0,a.kt)("li",{parentName:"ul"},"CRP: The Common Reuse Principle")),(0,a.kt)("h1",{id:"rep-the-reuserelase-equivalence-principle"},"REP: The Reuse/Relase Equivalence Principle"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The granular of reuse is the granular of release."),(0,a.kt)("p",{parentName:"blockquote"},"\u5143\u4ef6\u5fa9\u7528\u7684\u6700\u5c0f\u7c92\u5ea6\u7b49\u65bc\u767c\u5e03\u7684\u6700\u5c0f\u7c92\u5ea6")),(0,a.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u8166\u529b\u6fc0\u76ea: \u4f60\u671f\u671b\u4e00\u500b\u80fd\u5920\u5fa9\u7528\u6216\u767c\u4f48\u51fa\u4f86\u7684 module \u8981\u5305\u542b\u54ea\u4e9b\u6771\u897f\u5462?"))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u671f\u671b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7248\u672c\u865f"),(0,a.kt)("li",{parentName:"ul"},"\u91cb\u51fa\u6642\u8981\u6709 release note"),(0,a.kt)("li",{parentName:"ul"},"\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u7dad\u8b77"),(0,a.kt)("li",{parentName:"ul"},"\u9810\u6e2c\u6027",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6211\u5728\u4f7f\u7528\u7684 module \u4e0d\u6703\u88ab\u6539\u52d5"),(0,a.kt)("li",{parentName:"ul"},"\u8981\u6539\u52d5\u7684\u8a71\u8981\u901a\u77e5\u6211"),(0,a.kt)("li",{parentName:"ul"},"\u6211\u53ef\u4ee5\u9078\u64c7\u820a\u7248\u9084\u662f\u65b0\u7248")))),(0,a.kt)("p",null,'\u7d44\u6210\u518d\u4e00\u8d77\u7684 classes \u8ddf modules \u61c9\u8a72\u662f\u80fd\u4e00\u8d77\u91cb\u51fa\u7684\uff0c\u800c\u7d81\u5728\u4e00\u8d77\u7684\u60c5\u6cc1\u61c9\u8a72\u5c0d\u4f7f\u7528\u8005\u9084\u6709\u4f5c\u8005\u4f86\u8aaa\u90fd\u662f\u5408\u7406\u7684\uff0c\n\u8b1b\u5408\u7406\u53ef\u80fd\u662f\u4e00\u500b\u6bd4\u8f03\u5f31\u7684\u5efa\u8b70\uff0c\u4f46\u662f\u7576\u6211\u5011\u9047\u5230"\u4e0d\u5408\u7406"\u6642\uff0c\u61c9\u8a72\u5f88\u5bb9\u6613\u80fd\u5920\u5bdf\u89ba'),(0,a.kt)("h1",{id:"ccp-the-common-closure-principle"},"CCP: The Common Closure Principle"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Gather into components those classes that change for the same reasons and at the same times.\nSeparate into different components those classes that change at different times and for different\nreasons.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Recap"),": \u4ec0\u9ebc\u662f Single Responsibility Principle?"),(0,a.kt)("p",null,"CCP \u539f\u5247\u5c31\u662f component \u7248\u672c\u7684 SRP, i.e., \u628a SRP \u539f\u5247\u4e2d\u7684 class \u66ff\u63db\u6210 component"),(0,a.kt)("p",null,"e.g., \u6240\u6709\u7ba1 Database \u7684 class \u7d44\u6210\u540c\u4e00\u500b Component\uff0c\u6240\u6709\u7ba1\u5546\u696d\u908f\u8f2f\u7d44\u6210\u540c\u4e00\u500b Component"),(0,a.kt)("p",null,"REP \u8ddf CCP \u6709\u4e9b\u8a31\u885d\u7a81\uff0cREP \u544a\u8a34\u6211\u5011\u505a\u6210\u4e00\u500b\u53ef\u767c\u4f48\u7248\u672c\uff0c\u4f46\u9019\u53ef\u80fd\u6703\u9700\u8981\u5f15\u5165\u66f4\u591a\u4e0d\u540c\u529f\u80fd\uff0c\n\u800c CCP \u5247\u544a\u8a34\u6211\u5011\u529f\u80fd\u76f8\u8fd1\u7684\u7d44\u5408\u6210\u4e00\u500b Component\uff0c\u5982\u679c\u529f\u80fd\u4e0d\u76f8\u8fd1\u5247\u61c9\u8a72\u5206\u6210\u4e0d\u540c Component"),(0,a.kt)("h1",{id:"crp-the-common-reuse-principle"},"CRP: The Common Reuse Principle"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Don\u2019t force users of a component to depend on things they don\u2019t need.")),(0,a.kt)("p",null,"\u5728\u540c\u500b Component \u88e1\u7684 Class\uff0c\u6211\u5011\u9810\u671f\u4ed6\u5011\u6703\u6709\u5f88\u591a\u76f8\u4f9d\u6027"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Recap"),": \u4ec0\u9ebc\u662f Interface Segregation Principle (ISP) \u539f\u5247"),(0,a.kt)("p",null,"\u8ddf ISP \u7684\u95dc\u4fc2: CRP \u662f\u6bd4 ISP \u66f4\u5ee3\u7684\u7248\u672c\uff0cISP \u5efa\u8b70\u4e0d\u8981\u4f9d\u8cf4\u5728 class \u4e2d\u7528\u4e0d\u5230\u7684 methods\uff0c\nCRP \u5efa\u8b70\u4e0d\u8981\u4f9d\u8cf4 Component \u4e2d\u7528\u4e0d\u5230\u7684 classes"),(0,a.kt)("p",null,"CRP \u539f\u5247\u901f\u8a18\u6cd5: \u4e0d\u8981\u4f9d\u8cf4\u7528\u4e0d\u5230\u7684\u6771\u897f!"),(0,a.kt)("h1",{id:"the-tension-diagram-for-component-cohesion"},"The Tension Diagram for Component cohesion"),(0,a.kt)("p",null,"REP \u8ddf CCP \u662f\u95dc\u65bc\u5305\u542b\u7684\u539f\u5247\uff0c\u6703\u8b93 Components \u8b8a\u5927\uff0c\nCRP \u5247\u662f\u95dc\u65bc\u6368\u53bb\u7684\u539f\u5247\uff0c\u6703\u9a45\u4f7f Components \u8b8a\u5c0f"),(0,a.kt)("p",null,"\u67b6\u69cb\u5e2b\u5fc5\u9808\u5728\u4e09\u500b\u539f\u5247\u4e2d\u505a\u53d6\u6368\nFigure 13.1 Cohesion principles tension diagram"),(0,a.kt)("p",null,"\u4f8b\u5982\u9805\u76ee\u65e9\u671f CCP > REP\uff0c\u56e0\u70ba\u9019\u4e00\u968e\u6bb5\uff0c\u7814\u767c\u901f\u5ea6\u6bd4\u5fa9\u7528\u6027\u91cd\u8981\n\u4e00\u822c\u4f86\u8aaa\uff0c\u9805\u76ee\u7684\u91cd\u5fc3\u6703\u5f9e\u4e09\u89d2\u5f62\u7684\u53f3\u5074\uff0c\u7522\u54c1\u6210\u719f\u4e4b\u5f8c\uff0c\u958b\u59cb\u504f\u5411\u5de6\u5074"),(0,a.kt)("p",null,"\u7d50\u8ad6:\nREP, CCP, CRP \u9019\u4e9b\u539f\u5247\u7684\u8abf\u6574\u662f\u52d5\u614b\u7684\uff0c\u4eca\u5e74\u9069\u7528\u7684\u5283\u5206\u53ef\u80fd\u660e\u5e74\u5c31\u4e0d\u80fd\u7528\u4e86"))}h.isMDXComponent=!0}}]);