"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[4651],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),h=a,f=s["".concat(l,".").concat(h)]||s[h]||d[h]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},32956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Ch32: \u6846\u67b6\u662f\u7d30\u7bc0",tsidebar_label:"Ch32: \u6846\u67b6\u662f\u7d30\u7bc0",sidebar_position:32},c=void 0,i={unversionedId:"sg/clean-architecture/ch32",id:"sg/clean-architecture/ch32",title:"Ch32: \u6846\u67b6\u662f\u7d30\u7bc0",description:"\u4f5c\u8005\u8a8d\u70ba\u6846\u67b6\u7684\u958b\u767c\u8005\u5c0d\u65bc\u81ea\u5df1\u7684\u7522\u54c1\u5f88\u81ea\u8c6a\u4e14\u7a4d\u6975\u63a8\u5ee3\uff0c\u4f46\u662f\u8eab\u70ba\u958b\u767c\u8005\u7684\u6211\u5011\u5fc5\u9808\u5c0f\u5fc3\u4f7f\u7528\u9019\u4e9b\u7522\u54c1\uff0c\u4ee5\u514d\u6c61\u67d3\u6211\u5011\u7684\u8edf\u9ad4\u67b6\u69cb",source:"@site/docs/sg/clean-architecture/ch32.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch32",permalink:"/docs/sg/clean-architecture/ch32",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch32.md",tags:[],version:"current",lastUpdatedBy:"HomaD",lastUpdatedAt:1717431011,formattedLastUpdatedAt:"Jun 3, 2024",sidebarPosition:32,frontMatter:{title:"Ch32: \u6846\u67b6\u662f\u7d30\u7bc0",tsidebar_label:"Ch32: \u6846\u67b6\u662f\u7d30\u7bc0",sidebar_position:32},sidebar:"tutorialSidebar",previous:{title:"Ch31: Web \u662f\u7d30\u7bc0",permalink:"/docs/sg/clean-architecture/ch31"},next:{title:"Ch33: \u6848\u4f8b\u7814\u7a76\uff1a\u5f71\u7247\u8ca9\u552e",permalink:"/docs/sg/clean-architecture/ch33"}},l={},u=[{value:"\u4f7f\u7528\u6846\u67b6\u7684\u98a8\u96aa\u8207\u53ef\u80fd\u6703\u72af\u7684\u8aa4\u5340",id:"\u4f7f\u7528\u6846\u67b6\u7684\u98a8\u96aa\u8207\u53ef\u80fd\u6703\u72af\u7684\u8aa4\u5340",level:2},{value:"\u4f7f\u7528\u6846\u67b6\u7684\u5e7e\u500b\u539f\u5247",id:"\u4f7f\u7528\u6846\u67b6\u7684\u5e7e\u500b\u539f\u5247",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],p={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f5c\u8005\u8a8d\u70ba\u6846\u67b6\u7684\u958b\u767c\u8005\u5c0d\u65bc\u81ea\u5df1\u7684\u7522\u54c1\u5f88\u81ea\u8c6a\u4e14\u7a4d\u6975\u63a8\u5ee3\uff0c\u4f46\u662f\u8eab\u70ba\u958b\u767c\u8005\u7684\u6211\u5011\u5fc5\u9808\u5c0f\u5fc3\u4f7f\u7528\u9019\u4e9b\u7522\u54c1\uff0c\u4ee5\u514d\u6c61\u67d3\u6211\u5011\u7684\u8edf\u9ad4\u67b6\u69cb"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u6846\u67b6\u7684\u98a8\u96aa\u8207\u53ef\u80fd\u6703\u72af\u7684\u8aa4\u5340"},"\u4f7f\u7528\u6846\u67b6\u7684\u98a8\u96aa\u8207\u53ef\u80fd\u6703\u72af\u7684\u8aa4\u5340"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8b93\u6846\u67b6\u7b49\u540c\u65bc\u8edf\u9ad4\u67b6\u69cb\uff0c\u4e00\u958b\u59cb\u53ef\u80fd\u53ef\u4ee5\u5feb\u901f\u7684\u8b93\u6211\u5011\u91d0\u6e05\u61c9\u7528\u7a0b\u5f0f\u7684\u529f\u80fd\u5207\u5206\uff0c\u4f46\u96a8\u8457\u6642\u9593\u7684\u6f14\u8b8a\u8207\u529f\u80fd\u7684\u64f4\u589e\uff0c\u9762\u81e8\u9700\u8981\u812b\u96e2\u6846\u67b6\u7684\u6642\u5019\u5f80\u5f80\u5f88\u96e3\u5f9e\u4e2d\u9003\u812b"),(0,a.kt)("li",{parentName:"ul"},"\u8b93\u696d\u52d9\u908f\u8f2f\u7684\u5be6\u9ad4\u662f\u7e7c\u627f\u65bc\u6846\u67b6\u63d0\u4f9b\u7684\u5143\u4ef6\uff0c\u800c\u975e\u7528\u6ce8\u5165\u7684\u65b9\u5f0f\u5f15\u7528\u81f3\u6838\u5fc3\u5143\u4ef6\u4e2d"),(0,a.kt)("li",{parentName:"ul"},"\u6846\u67b6\u7684\u8fed\u4ee3\u66f4\u65b0\u53ef\u80fd\u6703\u8207\u767c\u5c55\u4e2d\u7684\u8edf\u9ad4\u67b6\u69cb\u8981\u89e3\u6c7a\u7684\u56f0\u5883\u6709\u6240\u885d\u7a81\uff0c\u5230\u6642\u5019\u6703\u9762\u81e8\u6539\u8b8a\u6846\u67b6\u7684\u6289\u64c7")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u6846\u67b6\u7684\u5e7e\u500b\u539f\u5247"},"\u4f7f\u7528\u6846\u67b6\u7684\u5e7e\u500b\u539f\u5247"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6846\u67b6\u5fc5\u9808\u7368\u7acb\u65bc\u6838\u5fc3\u7a0b\u5f0f\u78bc\uff0c\u4f7f\u5176\u8b93\u5b83\u4ee5 plug-in \u7684\u65b9\u5f0f\u63d0\u4f9b\u670d\u52d9"),(0,a.kt)("li",{parentName:"ul"},"\u900f\u904e\u6ce8\u5165\u7684\u65b9\u5f0f\u5f15\u7528\u6846\u67b6\u5143\u4ef6\uff0c\u800c\u975e\u7e7c\u627f\u4f7f\u7528\uff0c\u696d\u52d9\u908f\u8f2f\u5143\u4ef6\u4e0d\u61c9\u8a72\u77e5\u9053\u6846\u67b6\u5143\u4ef6\u7684\u5b58\u5728")),(0,a.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,a.kt)("p",null,"\u614e\u9078\u8207\u4f7f\u7528\u6846\u67b6\uff0c\u8b93\u5b83\u4fdd\u6301\u5728\u67b6\u69cb\u908a\u754c\u7684\u5f8c\u9762"))}d.isMDXComponent=!0}}]);