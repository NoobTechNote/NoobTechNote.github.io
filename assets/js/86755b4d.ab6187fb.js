"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[3914],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,m=p["".concat(o,".").concat(h)]||p[h]||d[h]||l;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},90709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={title:"Ch33: \u6848\u4f8b\u7814\u7a76\uff1a\u5f71\u7247\u8ca9\u552e",tsidebar_label:"Ch33: \u6848\u4f8b\u7814\u7a76\uff1a\u5f71\u7247\u8ca9\u552e",sidebar_position:33},i=void 0,c={unversionedId:"sg/clean-architecture/ch33",id:"sg/clean-architecture/ch33",title:"Ch33: \u6848\u4f8b\u7814\u7a76\uff1a\u5f71\u7247\u8ca9\u552e",description:"\u7522\u54c1\u4ecb\u7d39",source:"@site/docs/sg/clean-architecture/ch33.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch33",permalink:"/docs/sg/clean-architecture/ch33",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch33.md",tags:[],version:"current",lastUpdatedBy:"Mech",lastUpdatedAt:1718641729,formattedLastUpdatedAt:"Jun 17, 2024",sidebarPosition:33,frontMatter:{title:"Ch33: \u6848\u4f8b\u7814\u7a76\uff1a\u5f71\u7247\u8ca9\u552e",tsidebar_label:"Ch33: \u6848\u4f8b\u7814\u7a76\uff1a\u5f71\u7247\u8ca9\u552e",sidebar_position:33},sidebar:"tutorialSidebar",previous:{title:"Ch32: \u6846\u67b6\u662f\u7d30\u7bc0",permalink:"/docs/sg/clean-architecture/ch32"},next:{title:"Ch34: \u907a\u6f0f\u7684\u7ae0\u7bc0",permalink:"/docs/sg/clean-architecture/ch34"}},o={},u=[{value:"\u7522\u54c1\u4ecb\u7d39",id:"\u7522\u54c1\u4ecb\u7d39",level:2},{value:"\u7b2c\u4e00\u6b65\uff1a\u78ba\u5b9a\u89d2\u8272(actors)",id:"\u7b2c\u4e00\u6b65\u78ba\u5b9a\u89d2\u8272actors",level:3},{value:"\u7b2c\u4e8c\u6b65\uff1a\u78ba\u5b9a\u4f7f\u7528\u6848\u4f8b(use cases)",id:"\u7b2c\u4e8c\u6b65\u78ba\u5b9a\u4f7f\u7528\u6848\u4f8buse-cases",level:3},{value:"\u7b2c\u4e09\u6b65\uff1a\u5207\u5206\u5143\u4ef6",id:"\u7b2c\u4e09\u6b65\u5207\u5206\u5143\u4ef6",level:3},{value:"\u4f9d\u8cf4\u7ba1\u7406",id:"\u4f9d\u8cf4\u7ba1\u7406",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(p,(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7522\u54c1\u4ecb\u7d39"},"\u7522\u54c1\u4ecb\u7d39"),(0,a.kt)("p",null,"\u92b7\u552e\u5f71\u7247\u7684\u7db2\u7ad9"),(0,a.kt)("h3",{id:"\u7b2c\u4e00\u6b65\u78ba\u5b9a\u89d2\u8272actors"},"\u7b2c\u4e00\u6b65\uff1a\u78ba\u5b9a\u89d2\u8272(actors)"),(0,a.kt)("p",null,"\u4ee5 TA \u8eab\u4efd\u5283\u5206\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6d88\u8cbb\u8005\uff1a\u8cfc\u8cb7\u5f71\u7247\u7684\u4eba"),(0,a.kt)("li",{parentName:"ul"},"\u89c0\u770b\u8005\uff1a\u89c0\u770b\u5f71\u7247\u7684\u4eba"),(0,a.kt)("li",{parentName:"ul"},"\u5f71\u7247\u4f5c\u8005\uff1a\u63d0\u4f9b\u5f71\u7247\u8207\u76f8\u95dc\u7d20\u6750\u7684\u89d2\u8272"),(0,a.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u8005\uff1a\u64c1\u6709\u7ba1\u7406\u6240\u6709\u5167\u5bb9\u7684\u6b0a\u9650\u4e26\u4e14\u53ef\u4ee5\u5236\u5b9a\u50f9\u683c")),(0,a.kt)("h3",{id:"\u7b2c\u4e8c\u6b65\u78ba\u5b9a\u4f7f\u7528\u6848\u4f8buse-cases"},"\u7b2c\u4e8c\u6b65\uff1a\u78ba\u5b9a\u4f7f\u7528\u6848\u4f8b(use cases)"),(0,a.kt)("p",null,"\u5148\u4ee5\u4e0a\u8ff0\u56db\u7a2e\u89d2\u8272\u505a\u5207\u5206\uff0c\u4e26\u57fa\u65bc\u55ae\u4e00\u8077\u8cac\u539f\u5247\uff0c\u8b93\u589e\u52a0\u4e00\u7a2e\u89d2\u8272\u7684\u6b0a\u9650\u4e0d\u6703\u5f71\u97ff\u5230\u5176\u4ed6\u89d2\u8272"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"33.1",src:r(82786).Z,width:"1237",height:"1125"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 purchase \u7684\u884c\u70ba\u4e2d\u62bd\u8c61\u51fa purchase license"),(0,a.kt)("li",{parentName:"ul"},"\u5728 viewer \u8207 purchaser \u90fd\u53ef\u4ee5\u6709 view \u7684\u884c\u70ba\uff0c\u56e0\u6b64\u62bd\u8c61\u4e00\u5c64 view catalog")),(0,a.kt)("h3",{id:"\u7b2c\u4e09\u6b65\u5207\u5206\u5143\u4ef6"},"\u7b2c\u4e09\u6b65\uff1a\u5207\u5206\u5143\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"33.2",src:r(37698).Z,width:"1258",height:"937"})),(0,a.kt)("p",null,"\u4f9d\u7167\u5716\u4e0a\u7684\u67b6\u69cb\u5207\u5206\uff0c\u53ef\u9032\u4e00\u6b65\u601d\u8003\u5982\u4f55\u5c07\u7de8\u8b6f\u8207\u5efa\u7f6e\u74b0\u5883\u5206\u96e2\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e94\u7a2e funtion \u5206\u5225\u90e8\u7f72\uff1aviews\u3001presenters\u3001interactors\u3001controllers\u3001utilities"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u65bc\u4e0a\u8ff0\uff0c\u5c07 views \u8207 presenters \u5408\u4f75"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u65bc\u4e0a\u8ff0\uff0c\u5c07 views \u8207 presenters \u4ee5\u5916\u7684\u7d44\u4ef6\u5408\u4f75")),(0,a.kt)("h2",{id:"\u4f9d\u8cf4\u7ba1\u7406"},"\u4f9d\u8cf4\u7ba1\u7406"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6d41\u7a0b\u63a7\u7ba1\u7531\u53f3\u5411\u5de6\u547c\u53eb"),(0,a.kt)("li",{parentName:"ul"},"\u958b\u653e\u5c01\u9589\uff1ausing \u7bad\u982d\u8207 inheritance \u7bad\u982d\u7684\u525b\u597d\u5448\u73fe\u76f8\u53cd\u7684\u65b9\u5411"),(0,a.kt)("li",{parentName:"ul"},"\u907f\u514d\u4fee\u6539 low-level details \u4e0d\u6703\u5f71\u97ff\u5230 high-level policy")),(0,a.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u67b6\u69cb\u4e3b\u8981\u4ee5\u5169\u500b\u9762\u5411\u5207\u5165\u5283\u5206\u67b6\u69cb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ee5\u4e0d\u540c\u539f\u56e0\u8207\u7279\u6027\uff0c\u5340\u5206 actors "),(0,a.kt)("li",{parentName:"ul"},"\u4ee5\u4e0d\u540c\u8b8a\u52d5\u983b\u7387\u5340\u5206\u7b56\u7565\u5c64\u7d1a")),(0,a.kt)("p",null,"\u4ee5\u9019\u6a23\u7684\u67b6\u69cb\u8a2d\u8a08\uff0c\u5f8c\u7e8c\u5728\u90e8\u7f72\u4e0a\u53ef\u4ee5\u6709\u826f\u597d\u7684\u8b8a\u52d5\u6027\uff0c\u53ef\u4ee5\u8f15\u6613\u5c07\u5404\u500b\u7d44\u4ef6 group \u8207 ungroup \u4f86\u6eff\u8db3\u4e0d\u540c\u7684\u90e8\u7f72\u9700\u6c42\u3002"))}d.isMDXComponent=!0},82786:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/33.1-2f02cc75a90f3ef42cc9de27c62114b2.png"},37698:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/33.2-ed0c792fac923ac0adf5c54b1cd8d9e2.png"}}]);