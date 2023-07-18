"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[2937],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=o(a),d=n,k=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32358:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={title:"Ch22: \u6574\u6f54\u7684\u67b6\u69cb",sidebar_label:"Ch22: \u6574\u6f54\u7684\u67b6\u69cb",sidebar_position:22},i=void 0,p={unversionedId:"sg/clean-architecture/ch22",id:"sg/clean-architecture/ch22",title:"Ch22: \u6574\u6f54\u7684\u67b6\u69cb",description:"\u6574\u6f54\u7684\u67b6\u69cb",source:"@site/docs/sg/clean-architecture/ch22.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch22",permalink:"/docs/sg/clean-architecture/ch22",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch22.md",tags:[],version:"current",lastUpdatedBy:"Ming-Yen Chung",lastUpdatedAt:1689702436,formattedLastUpdatedAt:"Jul 18, 2023",sidebarPosition:22,frontMatter:{title:"Ch22: \u6574\u6f54\u7684\u67b6\u69cb",sidebar_label:"Ch22: \u6574\u6f54\u7684\u67b6\u69cb",sidebar_position:22},sidebar:"tutorialSidebar",previous:{title:"Ch21: \u6703\u5c16\u53eb\u7684\u67b6\u69cb",permalink:"/docs/sg/clean-architecture/ch21"},next:{title:"Ch23: Presenter \u8207 Humble Object",permalink:"/docs/sg/clean-architecture/ch23"}},c={},o=[{value:"\u6574\u6f54\u7684\u67b6\u69cb",id:"\u6574\u6f54\u7684\u67b6\u69cb",level:2},{value:"\u4f9d\u8cf4\u898f\u5247",id:"\u4f9d\u8cf4\u898f\u5247",level:2},{value:"\u5be6\u9ad4\u5c64 &amp; \u4f7f\u7528\u6848\u4f8b\u5c64",id:"\u5be6\u9ad4\u5c64--\u4f7f\u7528\u6848\u4f8b\u5c64",level:3},{value:"\u4ecb\u9762\u8f49\u63a5\u5c64",id:"\u4ecb\u9762\u8f49\u63a5\u5c64",level:3},{value:"\u6846\u67b6\u548c\u9a45\u52d5\u5c64",id:"\u6846\u67b6\u548c\u9a45\u52d5\u5c64",level:3},{value:"\u8de8\u8d8a\u908a\u754c",id:"\u8de8\u8d8a\u908a\u754c",level:2},{value:"Example",id:"example",level:2},{value:"My Example",id:"my-example",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],u={toc:o},s="wrapper";function m(e){let{components:t,...l}=e;return(0,n.kt)(s,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u6574\u6f54\u7684\u67b6\u69cb"},"\u6574\u6f54\u7684\u67b6\u69cb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7368\u7acb\u65bc\u6846\u67b6: \u67b6\u69cb\u4e0d\u4f9d\u8cf4\u6846\u67b6"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u6e2c\u6027: \u4f60\u7684\u67b6\u69cb\u53ef\u4ee5\u5728\u6c92\u6709\u6846\u67b6\u7684\u60c5\u6cc1\u4e0b\u5c0d\u6240\u6709\u4f7f\u7528\u8005\u6848\u4f8b\u505a\u5230",(0,n.kt)("inlineCode",{parentName:"li"},"\u55ae\u5143\u6e2c\u8a66"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7368\u7acb\u65bc UI: webUI -> console UI (\u524d\u5f8c\u7aef\u5206\u96e2)"),(0,n.kt)("li",{parentName:"ul"},"\u7368\u7acb\u65bc\u8cc7\u6599\u5eab: sql -> nosql"),(0,n.kt)("li",{parentName:"ul"},"\u7368\u7acb\u65bc\u4efb\u4f55\u5916\u90e8\u4ee3\u7406(external agency): \u696d\u52d9\u898f\u5247\u4e0d\u61c9\u8a72\u77e5\u9053 external interface\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"goto",src:a(84121).Z,width:"667",height:"488"})),(0,n.kt)("h2",{id:"\u4f9d\u8cf4\u898f\u5247"},"\u4f9d\u8cf4\u898f\u5247"),(0,n.kt)("p",null,"outer circle are mechanisms, inner circle are policies.\nSource code dependencies must point only inward, toward higher-level policies."),(0,n.kt)("h3",{id:"\u5be6\u9ad4\u5c64--\u4f7f\u7528\u6848\u4f8b\u5c64"},"\u5be6\u9ad4\u5c64 & \u4f7f\u7528\u6848\u4f8b\u5c64"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5c01\u88dd\u696d\u52d9\u898f\u5247\u6240\u5728"),(0,n.kt)("li",{parentName:"ul"},"\u9019\u88e1\u7684\u4fee\u6b63\u61c9\u8a72\u53ea\u548c\u696d\u52d9\u908f\u8f2f\u6709\u95dc",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ex, payment \u7cfb\u7d71\u4e2d\u4fee\u6539 auth \u70ba OAuth \u5c31\u4e0d\u8a72\u6539\u52d5\u5230\u9019\u88e1")))),(0,n.kt)("h3",{id:"\u4ecb\u9762\u8f49\u63a5\u5c64"},"\u4ecb\u9762\u8f49\u63a5\u5c64"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Controller(Param and ViewModel)"),(0,n.kt)("li",{parentName:"ul"},"Repository")),(0,n.kt)("h3",{id:"\u6846\u67b6\u548c\u9a45\u52d5\u5c64"},"\u6846\u67b6\u548c\u9a45\u52d5\u5c64"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7531\u6846\u67b6\u548c\u5de5\u5177\u7d44\u6210\uff0c\u4e0d\u61c9\u8a72\u6709\u592a\u591a\u908f\u8f2f -> \u5982\u679c\u5c31\u662f\u6703\u6709\u7684\u8a71 micro service\uff0c ex AAA architecture"),(0,n.kt)("li",{parentName:"ul"},"\u7d30\u7bc0\u6240\u5728 => \u5916\u90e8\u7684\u6280\u8853 ex.GRPC, AI \u7684 AlexNet")),(0,n.kt)("h2",{id:"\u8de8\u8d8a\u908a\u754c"},"\u8de8\u8d8a\u908a\u754c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u8cf4\u95dc\u4fc2\u548c\u63a7\u5236\u6d41\u7a0b\u662f\u76f8\u53cd\u7684"),(0,n.kt)("li",{parentName:"ul"},"\u8cc7\u6599\u5982\u4f55\u8de8\u8d8a\u908a\u754c\uff1a\u4ee5\u5167\u5708\u5167\u5708\u6700\u65b9\u4fbf\u7684\u5f62\u5f0f\u4f86\u4f5c\u70ba\u8cc7\u6599\u50b3\u905e\u7684\u683c\u5f0f")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Controller \u5c07\u8cc7\u6599\u6253\u5305(new)\u6210\u4e00\u500b\u7c21\u55ae\u7684\u7269\u4ef6 InputData\uff0c\u900f\u904e(implement) InputBoundary \u5c07\u8cc7\u6599\u7d66 UseCaseInteractor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"UseCaseInteractor \u4f9d\u7167 use case \u8a2d\u8a08\u64cd\u4f5c Entities\uff0c\u64cd\u4f5c\u7684\u65b9\u5f0f\u662f\u4f7f\u7528 DataAccessInterface ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"UseCaseInteractor \u8655\u7406\u5b8c\u5f8c\u5c07\u9700\u8981 return \u7684\u8cc7\u6599\u5efa\u6210(new) OutputData\uff0c\u518d\u900f\u904e(implement) OutputBoundary return \u7d66 Presenter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("del",{parentName:"p"},"\u7136\u5f8c\u6211\u5c31\u770b\u4e0d\u592a\u61c2\u4e86")," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Presenter \u5c07 OutputData \u91cd\u65b0\u6253\u5305(new)\u6210 ViewModel")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"View \u5c07 View model \u63cf\u8ff0\u7684\u8cc7\u6599\u8f09\u5165\u5230\u87a2\u5e55\n",(0,n.kt)("img",{alt:"goto",src:a(50223).Z,width:"710",height:"509"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Data struct is basic \u5404\u5c64\u4e0d\u9700\u8981\u64d4\u5fc3\u4f9d\u8cf4\u4ed6\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5c0d\u5167\u4f9d\u8cf4\u5be6\u9ad4\uff0c\u5c0d\u5916\u4f9d\u8cf4 interface\uff0cData struct \u5c6c\u65bc\u5167\u5c64\u3002"))),(0,n.kt)("h2",{id:"my-example"},"My Example"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6211\u81ea\u5df1\u5beb\u904e\u7684\u7a0b\u5f0f\uff0c\u96d6\u7136\u53ea\u662f\u500b webapi \u5c08\u6848\uff0c\u975e\u4ec0\u9ebc\u5927\u67b6\u69cb\uff0c\u4f46\u5e0c\u671b\u53ef\u4ee5\u8b93\u5927\u5bb6\u7406\u89e3\u9019\u4e9b\u4f9d\u8cf4"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u908a\u754c\u5207\u5206"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"goto",src:a(14584).Z,width:"578",height:"362"})),(0,n.kt)("p",{parentName:"li"},"\u6bcf\u4e00\u5c64\u90fd\u6709 mapper \u8ca0\u8cac\u5c07 return mapping \u6210\u5916\u5c64\u61c2\u7684\u6a23\u5b50")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5be6\u9ad4\u5c64 & \u4f7f\u7528\u6848\u4f8b\u5c64"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"goto",src:a(75771).Z,width:"688",height:"624"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f9d\u8cf4\u95dc\u4fc2"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"goto",src:a(37538).Z,width:"1221",height:"731"})))))),(0,n.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9019\u7ae0\u96d6\u7136\u5f88\u62bd\u8c61\uff0c\u4f46\u9019\u898f\u5247\u5be6\u969b\u4e0a\u4e26\u4e0d\u56f0\u96e3"),(0,n.kt)("li",{parentName:"ul"},"\u9075\u5b88\u9019\u4e9b\u4f9d\u8cf4\u7684\u898f\u5247\uff0c\u61c9\u8a72\u8981\u53ef\u4ee5\u4ecb\u7d39\u4e00\u500b\u53ef\u4ee5\u6e2c\u8a66 \u201c\u672c\u8cea\u201d \u7684\u7cfb\u7d71 ch22",(0,n.kt)("inlineCode",{parentName:"li"},"\u55ae\u5143\u6e2c\u8a66"))),(0,n.kt)("p",null,"ref: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/zkavtaskin/Domain-Driven-Design-Example"},"https://github.com/zkavtaskin/Domain-Driven-Design-Example")),(0,n.kt)("p",null,"bgm: Neptune By FOALS"))}m.isMDXComponent=!0},84121:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/22.1-c23017f6c6c90a1c850d274e98b42605.png"},37538:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/22.3-a197c0b46b012946fb759b7f40b0f307.png"},75771:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/22.4-4f5aae02e1ca5a6f951d4ed2eb64f345.png"},14584:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/22.5-66e55003d27035710a75401b7f820f12.png"},50223:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/22.6-b77c351fb92fd11452aa4d5392c486cf.png"}}]);