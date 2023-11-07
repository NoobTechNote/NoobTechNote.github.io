"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[6833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Ch10: ISP - \u4ecb\u9762\u9694\u96e2\u539f\u5247",sidebar_label:"Ch10: ISP - \u4ecb\u9762\u9694\u96e2\u539f\u5247",sidebar_position:10},l="Interface Segregation Principle",c={unversionedId:"sg/clean-architecture/ch10",id:"sg/clean-architecture/ch10",title:"Ch10: ISP - \u4ecb\u9762\u9694\u96e2\u539f\u5247",description:"\u4ecb\u9762\u9694\u96e2\u539f\u5247",source:"@site/docs/sg/clean-architecture/ch10.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch10",permalink:"/docs/sg/clean-architecture/ch10",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch10.md",tags:[],version:"current",lastUpdatedBy:"kayeepf",lastUpdatedAt:1699332829,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:10,frontMatter:{title:"Ch10: ISP - \u4ecb\u9762\u9694\u96e2\u539f\u5247",sidebar_label:"Ch10: ISP - \u4ecb\u9762\u9694\u96e2\u539f\u5247",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Ch9: LSP - \u91cc\u6c0f\u66ff\u63db\u539f\u5247",permalink:"/docs/sg/clean-architecture/ch9"},next:{title:"Ch11: DIP - \u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",permalink:"/docs/sg/clean-architecture/ch11"}},o={},s=[{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-segregation-principle"},"Interface Segregation Principle"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u4ecb\u9762\u9694\u96e2\u539f\u5247",src:n(72272).Z,width:"391",height:"156"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5206\u96e2\u7684\u64cd\u4f5c",src:n(650).Z,width:"391",height:"266"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u6709\u554f\u984c\u7684\u67b6\u69cb",src:n(6266).Z,width:"411",height:"61"})),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bad way:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Bird {\n  fly(): void;\n  walk(): void;\n}\n\nclass Nightingale implements Bird {\n  public fly() {\n    /// ...\n  }\n  public walk() {\n    /// ...\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.ngenespanol.com/wp-content/uploads/2018/08/Kiwi-s%C3%ADmbolo-en-peligro.jpg",alt:"Kiwi"}),"\n\u5947\u7570\u9ce5\u4e0d\u6703\u98db\uff01\uff01\uff01"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Good way:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'class Kiwi implements Bird {\n  public fly() {\n    throw new Error("Unfortunately, Kiwi can not fly!");\n  }\n  public walk() {\n    /// ...\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface CanWalk {\n  walk(): void;\n}\n\ninterface CanFly {\n  fly(): void;\n}\n\nclass Nightingale implements CanFly, CanWalk {\n  public fly() {\n    /// ...\n  }\n  public walk() {\n    /// ...\n  }\n}\n\nclass Kiwi implements CanWalk {\n  public walk() {\n    /// ...\n  }\n}\n")))}d.isMDXComponent=!0},72272:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/10.1-b3036ea39889290bc199964b36014327.png"},650:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/10.2-852d9c2febc1fe62a7b11a9561817e93.png"},6266:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/10.3-2fd272922631126088e9767c9fddcdd2.png"}}]);