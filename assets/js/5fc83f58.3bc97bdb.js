"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[1634],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var l=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=l.createContext({}),u=function(e){var t=l.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return l.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,k=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return r?l.createElement(k,i(i({ref:t},p),{},{components:r})):l.createElement(k,i({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8703:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=r(87462),n=(r(67294),r(3905));const a={title:"Ch28: \u6e2c\u8a66\u908a\u754c",tsidebar_label:"Ch28: \u6e2c\u8a66\u908a\u754c",sidebar_position:28},i=void 0,o={unversionedId:"sg/clean-architecture/ch28",id:"sg/clean-architecture/ch28",title:"Ch28: \u6e2c\u8a66\u908a\u754c",description:"TESTS AS SYSTEM COMPONENTS",source:"@site/docs/sg/clean-architecture/ch28.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch28",permalink:"/docs/sg/clean-architecture/ch28",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch28.md",tags:[],version:"current",lastUpdatedBy:"Homa",lastUpdatedAt:1699632245,formattedLastUpdatedAt:"Nov 10, 2023",sidebarPosition:28,frontMatter:{title:"Ch28: \u6e2c\u8a66\u908a\u754c",tsidebar_label:"Ch28: \u6e2c\u8a66\u908a\u754c",sidebar_position:28},sidebar:"tutorialSidebar",previous:{title:"Ch27: \u670d\u52d9\u7684\u5049\u5927\u8207\u6e3a\u5c0f",permalink:"/docs/sg/clean-architecture/ch27"},next:{title:"Ch29: \u6574\u6f54\u7684\u5d4c\u5165\u5f0f\u67b6\u69cb",permalink:"/docs/sg/clean-architecture/ch29"}},c={},u=[{value:"DESIGN FOR TESTABILITY",id:"design-for-testability",level:2},{value:"Fragile Tests Problem",id:"fragile-tests-problem",level:3},{value:"THE TESTING API",id:"the-testing-api",level:3},{value:"STRUCTURAL COUPLING",id:"structural-coupling",level:4},{value:"SECURITY",id:"security",level:4},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],p={toc:u},s="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"TESTS AS SYSTEM COMPONENTS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6e2c\u8a66\u4e5f\u662f\u7cfb\u7d71\u7684\u4e00\u90e8\u4efd\uff0c\u662f\u7279\u5225\u7684\u5b58\u5728"),(0,n.kt)("li",{parentName:"ul"},"\u6e2c\u8a66\u7684\u672c\u8cea -> \u5f88\u91cd\u8981\u4e5f\u4e0d\u91cd\u8981",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u8cf4\u65bc\u88ab\u6e2c\u8a66\u7684\u7a0b\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u770b\u4f5c\u6700\u5916\u5708\u7684\u7a0b\u5f0f\uff0c\u6c92\u6709\u4eba\u4f9d\u8cf4\u65bc\u4ed6"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7368\u7acb\u90e8\u7f72\uff0c\u5927\u90e8\u5206\u88ab\u90e8\u7f72\u5728\u6e2c\u8a66\u74b0\u5883\uff0c\u800c\u4e0d\u662f\u751f\u7522\u74b0\u5883"),(0,n.kt)("li",{parentName:"ul"},"\u5c0d\u7528\u6236\u6216\u904b\u884c\u4e2d\u7684\u7a0b\u5f0f\u4f86\u8aaa\u4e0d\u91cd\u8981\uff0c\u4f46\u5c0d\u7cfb\u7d71\u4f86\u8aaa\u5f88\u91cd\u8981")))),(0,n.kt)("h2",{id:"design-for-testability"},"DESIGN FOR TESTABILITY"),(0,n.kt)("h3",{id:"fragile-tests-problem"},"Fragile Tests Problem"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4fee\u6539\u4e00\u500bcomponent\uff0c\u6703\u5f71\u97ff\u60f3\u5230\u6240\u6709\u4f7f\u7528\u9019\u500bcomponent\u7684testing case"),(0,n.kt)("li",{parentName:"ul"},"\u89e3\u6c7a\u4e4b\u9053",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u4f9d\u8cf4\u591a\u8b8a\u7684\u6771\u897f"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982GUI\u5e38\u5e38\u662f\u591a\u8b8a\u7684\uff0c\u900f\u904eGUI\u4f86\u9a57\u8b49\u7cfb\u7d71\u5c31\u5f88\u5bb9\u6613\u649e\u5230\u9019\u500b\u554f\u984c"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u8a2d\u8a08\u7cfb\u7d71\u7684\u6642\u5019\uff0c\u5546\u696d\u908f\u8f2f\u61c9\u8a72\u4e0d\u8981\u8ddfGUI\u8026\u5408"))),(0,n.kt)("li",{parentName:"ul"},"\u5c0f\u7591\u554fQQ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\u5728\u5be6\u4f5c\u4e0a\u6703\u5bebL2 testing\uff0c\u90e8\u5206\u7684flow\u662f\u671f\u5f85\u53ef\u4ee5\u6e2c\u8a66\u5230\u9801\u9762\u7684\u8b8a\u5316\u3002\u9019\u908a\u6211\u53ef\u4e0d\u53ef\u4ee5\u7406\u89e3\uff0c\u8aaa\u5f97\u662f\u9664\u4e86\u7d14\u7cb9\u7684\u9801\u9762\u9a57\u8b49\u4e4b\u5916\u7684\u60c5\u5f62\uff0c\u9084\u662f\u8aaa\u7d14\u7cb9\u7684\u9801\u9762\u9a57\u8b49\u5176\u5be6\u4e5f\u4e0d\u91cd\u8981\u3002")))),(0,n.kt)("h3",{id:"the-testing-api"},"THE TESTING API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7d66\u6e2c\u8a66\u5c08\u7528\u7684API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u76ee\u7684\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u89e3\u8026UI\u6e2c\u8a66\u8ddf\u5546\u696d\u908f\u8f2f"),(0,n.kt)("li",{parentName:"ul"},"\u5c07\u6e2c\u8a66\u67b6\u69cb\u5f9e\u5176\u4ed6\u90e8\u5206\u7684\u7a0b\u5f0f\u908f\u8f2f\u4e2d\u89e3\u8026"))),(0,n.kt)("li",{parentName:"ul"},"\u8d85\u7d1a\u7528\u6236\u6b0a\u9650\uff0c\u7e5e\u904e\u5b89\u5168\u9650\u5236"))),(0,n.kt)("li",{parentName:"ul"},"\u5c0f\u5fc3\u5f97",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b21\u770b\u4ee5\u70ba\u662fmock service\u63d0\u4f9b\u7d66UI\u6e2c\u8a66\u7684\u5eb7\u838a\u5927\u9053"),(0,n.kt)("li",{parentName:"ul"},"\u4f46\u770b\u5b8c\u53cd\u800c\u5c0d\u9019\u500b\u5b58\u5728\u7684\u76ee\u7684\u6709\u9ede\u4e0d\u6e05\u695a")))),(0,n.kt)("h4",{id:"structural-coupling"},"STRUCTURAL COUPLING"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6e2c\u8a66code\u8ddf\u88ab\u6e2c\u8a66code\u8026\u5408\u7684\u5f88\u7dca\u5bc6\uff0c\u57fa\u672c\u4e0a\u88ab\u6e2c\u8a66code\u4efb\u4f55\u4fee\u6539\u90fd\u8981\u8abf\u6574\u6e2c\u8a66code"),(0,n.kt)("li",{parentName:"ul"},"\u6b64\u6642\u4e5f\u53ef\u4ee5\u900f\u904e\u6e2c\u8a66\u5c08\u7528API\uff0c\u4f86\u89e3\u8026\u9019\u90e8\u5206\uff0c\u5982\u6b64\u5c31\u53ef\u4ee5\u5728\u4e0d\u5f71\u97ff\u88ab\u6e2c\u8a66code\u7684\u524d\u63d0\u4e0b\uff0c\u5c0d\u6e2c\u8a66code\u9032\u884crefactor\u6216evolve")),(0,n.kt)("h4",{id:"security"},"SECURITY"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b89\u5168\u98a8\u96aa\u5f88\u9ad8\uff0c\u8981\u6ce8\u610f\u4e0d\u8981\u90e8\u7f72\u5230production\uff0c\u6700\u597d\u53ef\u4ee5\u90e8\u7f72\u5230\u7368\u7acb\u6e2c\u8a66\u74b0\u5883")),(0,n.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6e2c\u8a66\u662f\u7cfb\u7d71\u4e00\u90e8\u4efd"),(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u8a2d\u8a08\u5982\u4f55\u5beb\u6e2c\u8a66\uff0c\u624d\u80fd\u9054\u5230\u4ed6\u7684\u76ee\u7684",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u78ba\u4fdd\u7cfb\u7d71\u7a69\u5b9a\u6027"),(0,n.kt)("li",{parentName:"ul"},"\u9810\u9632\u6f5b\u5728\u554f\u984c")))))}m.isMDXComponent=!0}}]);