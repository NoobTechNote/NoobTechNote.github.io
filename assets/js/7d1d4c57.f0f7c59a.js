"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[7315],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),h=c,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,o=new Array(a);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:c,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},83173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),c=(r(67294),r(3905));const a={title:"Ch26: \u4e3b\u5143\u4ef6",tsidebar_label:"Ch26: \u4e3b\u5143\u4ef6",sidebar_position:26},o=void 0,i={unversionedId:"sg/clean-architecture/ch26",id:"sg/clean-architecture/ch26",title:"Ch26: \u4e3b\u5143\u4ef6",description:"Main \u5143\u4ef6\u70ba\u6700\u7d42\u7684\u7d30\u7bc0\uff0c\u4e5f\u662f\u6700\u4f4e\u5c64\u7d1a\u7684\u7b56\u7565\uff0c\u4f5c\u70ba\u7cfb\u7d71\u521d\u59cb\u7684\u9032\u5165\u9ede\u3002",source:"@site/docs/sg/clean-architecture/ch26.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch26",permalink:"/docs/sg/clean-architecture/ch26",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch26.md",tags:[],version:"current",lastUpdatedBy:"HomaD",lastUpdatedAt:1717431011,formattedLastUpdatedAt:"Jun 3, 2024",sidebarPosition:26,frontMatter:{title:"Ch26: \u4e3b\u5143\u4ef6",tsidebar_label:"Ch26: \u4e3b\u5143\u4ef6",sidebar_position:26},sidebar:"tutorialSidebar",previous:{title:"Ch25: \u5c64\u8207\u908a\u754c",permalink:"/docs/sg/clean-architecture/ch25"},next:{title:"Ch27: \u670d\u52d9\u7684\u5049\u5927\u8207\u6e3a\u5c0f",permalink:"/docs/sg/clean-architecture/ch27"}},l={},s=[{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...a}=e;return(0,c.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Main \u5143\u4ef6\u70ba\u6700\u7d42\u7684\u7d30\u7bc0\uff0c\u4e5f\u662f\u6700\u4f4e\u5c64\u7d1a\u7684\u7b56\u7565\uff0c\u4f5c\u70ba\u7cfb\u7d71\u521d\u59cb\u7684\u9032\u5165\u9ede\u3002"),(0,c.kt)("p",null,"\u5957\u7528 CH22 \u7684 ",(0,c.kt)("a",{parentName:"p",href:"/docs/sg/clean-architecture/ch22#%E6%95%B4%E6%BD%94%E7%9A%84%E6%9E%B6%E6%A7%8B"},"Clean Architecture")," \u6a21\u578b\uff0cMain \u662f\u6700\u5916\u5c64\uff0c\u662f\u61c9\u7528\u7a0b\u5f0f\u6700\u4f4e\u5c64\u7d1a\u7684\u7b56\u7565\uff0c\u5c07\u6240\u6709\u5167\u5bb9\u8f09\u5165\u5230\u9ad8\u5c64\u7d1a\u7cfb\u7d71\u4e2d\uff0c\u63a5\u8457\u5c07\u63a7\u5236\u6b0a\u8f49\u4ea4\u7d66\u9ad8\u5c64\u7d1a\u7cfb\u7d71\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"26.1",src:r(81220).Z,width:"1562",height:"792"})),(0,c.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,c.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u5c07 Main \u7576\u4f5c\u662f\u4e00\u7a2e ",(0,c.kt)("strong",{parentName:"p"},"Plugin"),"\uff0c\u4e00\u7a2e\u7528\u4f86\u8a2d\u5b9a\u521d\u59cb\u689d\u4ef6 (initial condition) \u8207\u8a2d\u7f6e (configurations)\uff0c\u4e26\u8490\u96c6\u5916\u90e8\u8cc7\u6e90 (outside resources)\uff0c\u7136\u5f8c\u5c07\u63a7\u5236\u6b0a\u8f49\u79fb\u5230\u7a0b\u5f0f\u7684\u9ad8\u5c64\u7d1a\u7b56\u7565\u3002\u7531\u65bc\u5b83\u662f\u4e00\u500b plugin\uff0c\u6240\u4ee5\u53ef\u80fd\u6709\u8a31\u591a\u7684 Main\u5143\u4ef6\uff0c\u6bcf\u500b\u61c9\u7528\u7a0b\u5f0f\u7684\u8a2d\u7f6e\u90fd\u6709\u4e00\u500b\uff0ce.g.: Dev\u3001Test\u3001Production \u7b49\u3002"))}d.isMDXComponent=!0},81220:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/26.1-a9d5d4bbc2c1b8d0fcea74c9c60a5a23.png"}}]);