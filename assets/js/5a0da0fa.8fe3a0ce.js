"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[8088],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var l=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=l.createContext({}),s=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),k=i,d=p["".concat(u,".").concat(k)]||p[k]||m[k]||r;return a?l.createElement(d,n(n({ref:t},c),{},{components:a})):l.createElement(d,n({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:i,n[1]=o;for(var s=2;s<r;s++)n[s]=a[s];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},18363:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=a(87462),i=(a(67294),a(3905));const r={title:"Ch15: \u670d\u52d9\u7db2\u683c",tsidebar_label:"Ch15: \u670d\u52d9\u7db2\u683c",sidebar_position:15},n="Service Mesh",o={unversionedId:"sg/fenix-architecture/ch15",id:"sg/fenix-architecture/ch15",title:"Ch15: \u670d\u52d9\u7db2\u683c",description:"- \u5728\u8907\u96dc\u7684distributed and microservices\u67b6\u69cb\u4e2d\uff0c\u78ba\u4fdd\u7db2\u8def\u8acb\u6c42\u88ab\u53ef\u9760\u7684\u50b3\u905e",source:"@site/docs/sg/fenix-architecture/ch15.mdx",sourceDirName:"sg/fenix-architecture",slug:"/sg/fenix-architecture/ch15",permalink:"/docs/sg/fenix-architecture/ch15",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fenix-architecture/ch15.mdx",tags:[],version:"current",lastUpdatedBy:"Mech",lastUpdatedAt:1706458752,formattedLastUpdatedAt:"Jan 28, 2024",sidebarPosition:15,frontMatter:{title:"Ch15: \u670d\u52d9\u7db2\u683c",tsidebar_label:"Ch15: \u670d\u52d9\u7db2\u683c",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Ch14: \u8cc7\u6e90\u8207\u8abf\u5ea6",permalink:"/docs/sg/fenix-architecture/ch14"},next:{title:"Ch16: \u5411\u5fae\u670d\u52d9\u9081\u9032",permalink:"/docs/sg/fenix-architecture/ch16"}},u={},s=[{value:"What is Service Mesh?",id:"what-is-service-mesh",level:3},{value:"\u900f\u660e\u901a\u4fe1\u7684\u6cbf\u9769",id:"\u900f\u660e\u901a\u4fe1\u7684\u6cbf\u9769",level:2},{value:"\u901a\u4fe1\u7684\u6210\u672c: \u78ba\u4fdd\u901a\u4fe1\u7684\u54c1\u8cea\u5f9e\u61c9\u7528\u7a0b\u5f0f\u9010\u6b65\u8f49\u79fb\u5230\u57fa\u790e\u5efa\u8a2d",id:"\u901a\u4fe1\u7684\u6210\u672c-\u78ba\u4fdd\u901a\u4fe1\u7684\u54c1\u8cea\u5f9e\u61c9\u7528\u7a0b\u5f0f\u9010\u6b65\u8f49\u79fb\u5230\u57fa\u790e\u5efa\u8a2d",level:3},{value:"\u7b2c\u4e00\u968e\u6bb5: \u901a\u4fe1\u7684\u53ef\u9760\u6027\u900f\u904e\u958b\u767c\u8005\u4fdd\u969c",id:"\u7b2c\u4e00\u968e\u6bb5-\u901a\u4fe1\u7684\u53ef\u9760\u6027\u900f\u904e\u958b\u767c\u8005\u4fdd\u969c",level:4},{value:"\u7b2c\u4e8c\u968e\u6bb5: \u62bd\u51fa\u901a\u4fe1\u908f\u8f2f\uff0c\u5404\u53f8\u5176\u8077",id:"\u7b2c\u4e8c\u968e\u6bb5-\u62bd\u51fa\u901a\u4fe1\u908f\u8f2f\u5404\u53f8\u5176\u8077",level:4},{value:"\u7b2c\u4e09\u968e\u6bb5: \u5c07\u901a\u4fe1\u7368\u7acb\u5230\u61c9\u7528\u7a0b\u5f0f\u4e4b\u5916\uff0c\u7a0b\u5f0f\u900f\u904e\u7db2\u8def\u4ee3\u7406\u4f86\u6e9d\u901a\uff0c\u7531\u5c08\u9580\u7684\u7db2\u8def\u4ee3\u7406\u63d0\u4f9b\u5546\u4f86\u8655\u7406",id:"\u7b2c\u4e09\u968e\u6bb5-\u5c07\u901a\u4fe1\u7368\u7acb\u5230\u61c9\u7528\u7a0b\u5f0f\u4e4b\u5916\u7a0b\u5f0f\u900f\u904e\u7db2\u8def\u4ee3\u7406\u4f86\u6e9d\u901a\u7531\u5c08\u9580\u7684\u7db2\u8def\u4ee3\u7406\u63d0\u4f9b\u5546\u4f86\u8655\u7406",level:4},{value:"\u7b2c\u56db\u968e\u6bb5: \u908a\u8eca\u6a21\u5f0f\uff0c\u901a\u4fe1\u53ef\u9760\u6027\u900f\u904e\u901a\u4fe1\u57fa\u790e\u8a2d\u65bd\u4f86\u4fdd\u969c",id:"\u7b2c\u56db\u968e\u6bb5-\u908a\u8eca\u6a21\u5f0f\u901a\u4fe1\u53ef\u9760\u6027\u900f\u904e\u901a\u4fe1\u57fa\u790e\u8a2d\u65bd\u4f86\u4fdd\u969c",level:4},{value:"\u7b2c\u4e94\u968e\u6bb5: \u670d\u52d9\u7db2\u683c\uff0c\u7ba1\u7406Sidecars\uff0c\u4e26\u4e14\u5c07Data Plane\u4ee5\u53caControl Plane\u5206\u96e2\u958b",id:"\u7b2c\u4e94\u968e\u6bb5-\u670d\u52d9\u7db2\u683c\u7ba1\u7406sidecars\u4e26\u4e14\u5c07data-plane\u4ee5\u53cacontrol-plane\u5206\u96e2\u958b",level:4},{value:"Service Mesh",id:"service-mesh-1",level:2},{value:"Data Plane: Envoy -&gt; istio-proxy",id:"data-plane-envoy---istio-proxy",level:3},{value:"\u4ee3\u7406\u6ce8\u5165",id:"\u4ee3\u7406\u6ce8\u5165",level:4},{value:"\u6d41\u91cf\u633e\u6301",id:"\u6d41\u91cf\u633e\u6301",level:4},{value:"\u53ef\u9760\u901a\u4fe1",id:"\u53ef\u9760\u901a\u4fe1",level:4},{value:"Control Plane",id:"control-plane",level:3},{value:"Interact with Data Plane",id:"interact-with-data-plane",level:4},{value:"\u6d41\u91cf\u63a7\u5236",id:"\u6d41\u91cf\u63a7\u5236",level:4},{value:"\u901a\u4fe1\u5b89\u5168",id:"\u901a\u4fe1\u5b89\u5168",level:4},{value:"\u53ef\u89c0\u6e2c\u6027",id:"\u53ef\u89c0\u6e2c\u6027",level:4},{value:"Service Mesh and Ecosystem",id:"service-mesh-and-ecosystem",level:3},{value:"SMI\u7531\u56db\u65b9\u9762API\u69cb\u6210",id:"smi\u7531\u56db\u65b9\u9762api\u69cb\u6210",level:4}],c={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"service-mesh"},"Service Mesh"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u8907\u96dc\u7684distributed and microservices\u67b6\u69cb\u4e2d\uff0c\u78ba\u4fdd\u7db2\u8def\u8acb\u6c42\u88ab\u53ef\u9760\u7684\u50b3\u905e")),(0,i.kt)("h3",{id:"what-is-service-mesh"},"What is Service Mesh?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8655\u7406\u7a0b\u5f0f\u4e4b\u9593\u901a\u4fe1\u7684\u57fa\u790e\u8a2d\u65bd"),(0,i.kt)("li",{parentName:"ul"},"Sidecar pattern",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5728container\u65c1\u908a\u7684\u8f14\u52a9\u7a0b\u5f0f")))),(0,i.kt)("h2",{id:"\u900f\u660e\u901a\u4fe1\u7684\u6cbf\u9769"},"\u900f\u660e\u901a\u4fe1\u7684\u6cbf\u9769"),(0,i.kt)("h3",{id:"\u901a\u4fe1\u7684\u6210\u672c-\u78ba\u4fdd\u901a\u4fe1\u7684\u54c1\u8cea\u5f9e\u61c9\u7528\u7a0b\u5f0f\u9010\u6b65\u8f49\u79fb\u5230\u57fa\u790e\u5efa\u8a2d"},"\u901a\u4fe1\u7684\u6210\u672c: \u78ba\u4fdd\u901a\u4fe1\u7684\u54c1\u8cea\u5f9e\u61c9\u7528\u7a0b\u5f0f\u9010\u6b65\u8f49\u79fb\u5230\u57fa\u790e\u5efa\u8a2d"),(0,i.kt)("h4",{id:"\u7b2c\u4e00\u968e\u6bb5-\u901a\u4fe1\u7684\u53ef\u9760\u6027\u900f\u904e\u958b\u767c\u8005\u4fdd\u969c"},"\u7b2c\u4e00\u968e\u6bb5: \u901a\u4fe1\u7684\u53ef\u9760\u6027\u900f\u904e\u958b\u767c\u8005\u4fdd\u969c"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5994).Z,width:"948",height:"290"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u932f\u8aa4\u4e2d\u5b78\u7fd2",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u958b\u767c\u8005\u521d\u671f\u63d0\u4f9bhttp api\u6216\u8005rpc\u7d66caller\uff0c\u4f46\u5728\u767c\u5c55\u904e\u7a0b\u4e2d\u9047\u5230\u554f\u984c\uff0c\u6240\u4ee5\u5728\u7a0b\u5f0f\u908f\u8f2f\u4e2d\u6253\u88dc\u4e01\uff0c\u6700\u5f8c\u5f62\u6210\u7a0b\u5f0f\u908f\u8f2f\u8ddf\u8655\u7406\u901a\u4fe1\u4ee3\u78bc\u6df7\u5728\u4e00\u8d77\u7684\u60c5\u6cc1\u3002"))),(0,i.kt)("li",{parentName:"ul"},"Cons",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9019\u500bworking model\uff0c\u4ee3\u8868\u8981\u8b93\u5f8c\u7aef\u4e5f\u5f88\u719f\u6089\u901a\u4fe1\u8655\u7406\uff0c\u5c0d\u958b\u767c\u8005\u8981\u6c42\u9ad8\uff0c\u4e0d\u6613\u57f9\u990a\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u4fe1\u8ddf\u696d\u52d9\u908f\u8f2f\u6df7\u96dc\uff0c\u7cfb\u7d71\u8907\u96dc\u5ea6\u5bb9\u6613\u8b8a\u9ad8\uff0c\u7dad\u8b77\u6027\u4f4e\u3002")))),(0,i.kt)("h4",{id:"\u7b2c\u4e8c\u968e\u6bb5-\u62bd\u51fa\u901a\u4fe1\u908f\u8f2f\u5404\u53f8\u5176\u8077"},"\u7b2c\u4e8c\u968e\u6bb5: \u62bd\u51fa\u901a\u4fe1\u908f\u8f2f\uff0c\u5404\u53f8\u5176\u8077"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(71097).Z,width:"950",height:"291"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u901a\u4fe1\u908f\u8f2f\u6a21\u7d44\u5316\uff0c\u4e26\u7531\u5c08\u9580\u7684\u958b\u767c\u8005\u5be6\u4f5c\uff0c\u53ef\u4ee5\u60f3\u50cf\u5167\u4e0d\u53ef\u80fd\u51fa\u7dda\u8655\u88cf\u901a\u4fe1\u7684SDK\uff0c\u5f8c\u7aef\u53ea\u8981\u900f\u904ecall\u6307\u5b9a\u65b9\u6cd5\u6216api\u5c31\u53ef\u4ee5\u78ba\u4fdd\u901a\u4fe1\u3002"),(0,i.kt)("li",{parentName:"ul"},"Cons",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5f8c\u7aef\u9084\u662f\u8981\u5b78\u7fd2\u5982\u4f55\u4f7f\u7528SDK"),(0,i.kt)("li",{parentName:"ul"},"\u5404\u500b\u8a9e\u8a00\u90fd\u8981\u6709\u5c0d\u61c9\u7684SDK")))),(0,i.kt)("h4",{id:"\u7b2c\u4e09\u968e\u6bb5-\u5c07\u901a\u4fe1\u7368\u7acb\u5230\u61c9\u7528\u7a0b\u5f0f\u4e4b\u5916\u7a0b\u5f0f\u900f\u904e\u7db2\u8def\u4ee3\u7406\u4f86\u6e9d\u901a\u7531\u5c08\u9580\u7684\u7db2\u8def\u4ee3\u7406\u63d0\u4f9b\u5546\u4f86\u8655\u7406"},"\u7b2c\u4e09\u968e\u6bb5: \u5c07\u901a\u4fe1\u7368\u7acb\u5230\u61c9\u7528\u7a0b\u5f0f\u4e4b\u5916\uff0c\u7a0b\u5f0f\u900f\u904e\u7db2\u8def\u4ee3\u7406\u4f86\u6e9d\u901a\uff0c\u7531\u5c08\u9580\u7684\u7db2\u8def\u4ee3\u7406\u63d0\u4f9b\u5546\u4f86\u8655\u7406"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(82981).Z,width:"952",height:"376"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u55ae\u7368\u7684\u901a\u4fe1process\uff0c\u53ef\u4ee5\u8b93\u901a\u4fe1\u8207\u8a9e\u8a00\u5b8c\u5168\u62d6\u52fe\uff0cNetwork Proxy\u9084\u662f\u8ddf\u670d\u52d9\u4f4f\u5728\u540c\u500b\u5bb9\u5668\u6216\u8005\u865b\u64ec\u6a5f\uff0c\u63a5\u7ba1\u7db2\u8def\u4e03\u5c64\u6216\u7db2\u8def\u56db\u5c64\u3002"),(0,i.kt)("li",{parentName:"ul"},"Gateway Proxy: \u5982\u679c\u4ee3\u7406\u90e8\u7f72\u8207\u61c9\u7528\u7a0b\u5f0f\u5206\u958b\uff0c\u5c31\u53ef\u4ee5\u8b93\u4ee3\u7406\u540c\u6642\u7ba1\u7406\u591a\u500b\u61c9\u7528\u7a0b\u5f0f\u7684\u901a\u4fe1\u670d\u52d9\u3002"),(0,i.kt)("li",{parentName:"ul"},"Sidecar Proxy: \u5982\u679c\u4ee3\u7406\u90e8\u7f72\u8207\u61c9\u7528\u7a0b\u5f0f\u9760\u8fd1\uff0c\u5171\u4eab\u5bb9\u5668\u7684\u7db2\u8def\u7a7a\u9593\uff0c\u908a\u8eca\u4ee3\u7406\u3002"),(0,i.kt)("li",{parentName:"ul"},"Cons",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u901a\u4fe1\u670d\u52d9\u63d0\u4f9b\u8005\uff0c\u4e0d\u662f\u7ba1\u7406\u8005\u3002")))),(0,i.kt)("h4",{id:"\u7b2c\u56db\u968e\u6bb5-\u908a\u8eca\u6a21\u5f0f\u901a\u4fe1\u53ef\u9760\u6027\u900f\u904e\u901a\u4fe1\u57fa\u790e\u8a2d\u65bd\u4f86\u4fdd\u969c"},"\u7b2c\u56db\u968e\u6bb5: \u908a\u8eca\u6a21\u5f0f\uff0c\u901a\u4fe1\u53ef\u9760\u6027\u900f\u904e\u901a\u4fe1\u57fa\u790e\u8a2d\u65bd\u4f86\u4fdd\u969c"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(60197).Z,width:"949",height:"354"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f37\u5236\u6027\u63a5\u7ba1: \u56e0\u70ba\u8ddf\u61c9\u7528\u7a0b\u5f0f\u5bb9\u5668\u5171\u4eab\u7db2\u8def\u7a7a\u9593\uff0c\u4ed6\u5c0d\u7db2\u8def\u7684\u63a7\u5236\u662f\u900f\u904e\u5bb9\u5668\u7684iptables\u5be6\u73fe\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5c0d\u65e2\u6709\u7684\u61c9\u7528\u7a0b\u5f0f\u908f\u8f2f\u4e0d\u9700\u8981\u8655\u7406\uff0c\u53ea\u8981\u639b\u4e0aSidecar\u5c31\u53ef\u4ee5\u900f\u904eSidecar proxy\u7ba1\u7406\u7db2\u8def\u3002"),(0,i.kt)("li",{parentName:"ul"},"Cons",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u61c9\u7528\u7a0b\u5e8f\u670d\u52d9\u7684ip\u5730\u5740\u9700\u8981\u904b\u7dad\u4eba\u54e1\u6216\u958b\u767c\u4eba\u54e1\u7dad\u904b\u3002")))),(0,i.kt)("h4",{id:"\u7b2c\u4e94\u968e\u6bb5-\u670d\u52d9\u7db2\u683c\u7ba1\u7406sidecars\u4e26\u4e14\u5c07data-plane\u4ee5\u53cacontrol-plane\u5206\u96e2\u958b"},"\u7b2c\u4e94\u968e\u6bb5: \u670d\u52d9\u7db2\u683c\uff0c\u7ba1\u7406Sidecars\uff0c\u4e26\u4e14\u5c07Data Plane\u4ee5\u53caControl Plane\u5206\u96e2\u958b"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(61997).Z,width:"392",height:"331"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data Plane",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sidecars: Sidecar\u4e4b\u9593\u7684\u901a\u4fe1\uff0c\u8f49\u767c\u61c9\u7528\u57ce\u5e02\u4e4b\u9593\u7684\u6578\u64da\u5c01\u5305"))),(0,i.kt)("li",{parentName:"ul"},"Control Plane",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Proxy and Control Plane\u4e4b\u9593\u7684\u901a\u4fe1: Sidecar\u8981\u5f97\u5230\u670d\u52d9\u767c\u73fe\u7b49\u5f9eControl Plane\u4f86\u7684\u8cc7\u8a0a\u3002")))),(0,i.kt)("h2",{id:"service-mesh-1"},"Service Mesh"),(0,i.kt)("h3",{id:"data-plane-envoy---istio-proxy"},"Data Plane: Envoy -> istio-proxy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"istio-proxy",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"pilot-agent: \u5c0denvoy\u751f\u547d\u9031\u671f\u7ba1\u7406\uff0c\u5305\u542b\u555f\u52d5\u3001\u91cd\u555f\u4ee5\u53ca\u9000\u51fa\u3002"),(0,i.kt)("li",{parentName:"ul"},"envoy")))),(0,i.kt)("h4",{id:"\u4ee3\u7406\u6ce8\u5165"},"\u4ee3\u7406\u6ce8\u5165"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chassis: \u8f15\u91cf\u7684SDK\uff0c\u5c0d\u61c9\u7528\u7a0b\u5f0f\u6709\u4fb5\u5165\u6027\uff0cApache\u7684ServiceComb Mesher\u3002"),(0,i.kt)("li",{parentName:"ul"},"Injector:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u624b\u52d5\u6ce8\u5165",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"istioctl kube-inject -f YOUR_POD.YAML"))),(0,i.kt)("li",{parentName:"ul"},"\u81ea\u52d5\u6ce8\u5165",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"K8s Mutating Webhook Dynamic Admission Control",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5c0dk8s ",(0,i.kt)("inlineCode",{parentName:"li"},"namespace"),"\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"li"},"istio-injection=enabled")),(0,i.kt)("li",{parentName:"ul"},"\u5728pod CREATE\u968e\u6bb5\u6703\u89f8\u767cMutating Webhook\uff0ccall injector")))))))),(0,i.kt)("h4",{id:"\u6d41\u91cf\u633e\u6301"},"\u6d41\u91cf\u633e\u6301"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(32190).Z,width:"974",height:"426"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"initContainer",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6514\u622a\u6240\u6709\u6d41\u91cf\uff0c\u9664\u4e8615090(Mixer)\u4ee5\u53ca15020(Ingress Gateway)"),(0,i.kt)("li",{parentName:"ul"},"\u8f49\u767c\u523015006(Envoy Inbound Port)"),(0,i.kt)("li",{parentName:"ul"},"\u518d\u5f9e15001(Envoy Outbound Port)\u51fa\u53bb"))),(0,i.kt)("li",{parentName:"ul"},"eBPF(Extended Berkeley Packet Filter)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5728socket layer\u76f4\u63a5\u8f49\u767c\uff0c\u4e0d\u7528\u518d\u900f\u904eTCP/IP\uff0c\u53ef\u4ee5\u6e1b\u5c11\u4e00\u6b21Loop back")))),(0,i.kt)("h4",{id:"\u53ef\u9760\u901a\u4fe1"},"\u53ef\u9760\u901a\u4fe1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Envoy\u900f\u904e\u4e09\u7a2eResources\u53bb\u5b9a\u7fa9\u6d41\u91cf\u7684\u7ba1\u7406",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Listener: Listen Downstream data"),(0,i.kt)("li",{parentName:"ul"},"Cluster: Connect Upstream Host\uff0c\u53ef\u4ee5\u770b\u4f5c\u662fService"),(0,i.kt)("li",{parentName:"ul"},"Router: \u6c7a\u5b9aDownstream data\u8981dispatch\u5230\u54ea\u500bcluster\uff0c\u6838\u5fc3\u8cc7\u8a0a\u662fCluster\u76f8\u95dc\u898f\u5247"),(0,i.kt)("li",{parentName:"ul"},"Filter: plugin"))),(0,i.kt)("li",{parentName:"ul"},"Terminology",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"xDS: \u767c\u73fe\u4ee5\u53ca\u8a2a\u554fEnvoy\u8cc7\u6e90\u7684\u5354\u8b70"),(0,i.kt)("li",{parentName:"ul"},"LDS(Listener Discovery Service): \u81ea\u52d5\u767c\u73feListener\u7684\u670d\u52d9\uff0c\u662f\u6240\u6709xDS\u5354\u8b70\u57fa\u790e\uff0cLDS\u53ef\u4ee5\u53bb\u767c\u73feEnvoy\u914d\u7f6e\u7684Listner\u3002"),(0,i.kt)("li",{parentName:"ul"},"CDS(Cluster Discovery Service): Control Plane\u6703\u5c07\u6240\u6709\u767c\u73fe\u53ef\u4ee5\u8a2a\u554f\u7684\u670d\u52d9\u90fd\u7d66Envoy\u3002"),(0,i.kt)("li",{parentName:"ul"},"EDS(Endpoint Discovery Service): \u88ab\u6a19\u8a18\u70baEDS\u4ee3\u8868\u9019\u4e9bendpoint \u5730\u5740\u8a72\u7531xDS\u8f49\u767c\uff0c\u800c\u4e0d\u662f\u4f9d\u9760DNS\u3002"),(0,i.kt)("li",{parentName:"ul"},"RDS(Router Discovery Service): \u81ea\u52d5\u767c\u73feRouter\u7684\u670d\u52d9\u3002")))),(0,i.kt)("h3",{id:"control-plane"},"Control Plane"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u76f4\u63a5\u53c3\u8207\u901a\u4fe1\uff0c\u4f46\u63d0\u4f9b\u914d\u7f6e\u8207\u7b56\u7565\uff0c\u6307\u5c0e\u5225\u4eba\u901a\u4fe1\u3002"),(0,i.kt)("li",{parentName:"ul"},"Istio\u57281.5\u4e4b\u524d\u900f\u904e\u56db\u500b\u7d44\u4ef6Mixer\u3001Pilot\u3001Galley\u3001Citadel\u4f86\u5b8c\u6210Control Plane\u7684\u5de5\u4f5c\uff0c\u4f46\u5f8c\u7e8c\u88ab\u8a6c\u75c5\u904e\u5ea6\u8a2d\u8a08\uff0c\u5c07Pilot\u3001Galley\u3001Citadel\u6574\u5408\u70baIstiod\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Mixer: \u5f9e Envoy \u7db2\u8def\u4ee3\u7406\u548c\u5176\u4ed6\u5143\u4ef6\u8490\u96c6\u89c0\u6e2c\u6578\u64da\uff0c\u4e26\u5c07\u5176\u767c\u9001\u5230 Mixer \u9032\u884c\u8a55\u4f30\u3002\u4f7f Istio \u53ef\u4ee5\u8207\u5404\u7a2e\u5fae\u670d\u52d9\u9032\u884c\u4e92\u52d5\u3002\n",(0,i.kt)("img",{src:a(32614).Z,width:"649",height:"531"})),(0,i.kt)("li",{parentName:"ul"},"Pilot: Envoy Sidecar\u7684\u670d\u52d9\u767c\u73fe\u3001\u667a\u6167\u8def\u7531\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd(ex: A/B\u6e2c\u8a66\uff0c\u91d1\u7d72\u96c0\u90e8\u7f72\u7b49)\u548c\u5f48\u6027(ex: Timeout\u3001Retry\u3001Circuit Breaker)\uff0c\u5c07\u63a7\u5236\u6d41\u91cf\u7684\u8def\u7531\u898f\u5247\u8f49\u63db\u6210Envoy \u7684\u5f62\u5f0f\uff0c\u4e26\u5728\u904b\u4f5c\u6642\u5c07\u5176\u767c\u9001\u5230Sidecar\u3002"),(0,i.kt)("li",{parentName:"ul"},"Citadel: \u5167\u5efa\u7684\u6191\u8b49\u7ba1\u7406\u4f86\u5be6\u73fe\u5fae\u670d\u52d9\u4e4b\u9593\u4f7f\u7528\u8005\u7684\u8eab\u5206\u9a57\u8b49\uff0c\u4f7f\u7528\u4e86 Citadel\u53ef\u4ee5\u900f\u904e\u8eab\u5206\u9a57\u8b49\u7684\u65b9\u5f0f\u4f86\u5be6\u884c\u8def\u7531\u7b56\u7565\u3002"),(0,i.kt)("li",{parentName:"ul"},"Galley\uff1aIstio \u8ca0\u8cac\u8a2d\u5b9a\u7684\u5f15\u5165\u3001\u8655\u7406\u53ca\u767c\u9001\u7684\u5de5\u4f5c\u3002\n",(0,i.kt)("img",{src:a(98063).Z,width:"690",height:"489"}))))),(0,i.kt)("h4",{id:"interact-with-data-plane"},"Interact with Data Plane"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inject Sidecar"),(0,i.kt)("li",{parentName:"ul"},"\u7b56\u7565\u5206\u767c: \u539f\u672cPilot\u6838\u5fc3\u5de5\u4f5c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u5206\u767c: \u76e3\u807d\u591a\u7a2e\u914d\u7f6e\u4f86\u6e90\u8cc7\u6599(kube-apiserver)\u3002\u539f\u672cGalley\u7684\u6838\u5fc3\u5de5\u4f5c\u3002")),(0,i.kt)("h4",{id:"\u6d41\u91cf\u63a7\u5236"},"\u6d41\u91cf\u63a7\u5236"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8acb\u6c42\u8def\u7531: VirtualService\u3001DestinationRule\u7b49K8s CRD\u7684\u898f\u5247"),(0,i.kt)("li",{parentName:"ul"},"\u6d41\u91cf\u6cbb\u7406: Timeout\u3001Retry\u3001Circuit Breaker"),(0,i.kt)("li",{parentName:"ul"},"\u8abf\u8a66\u80fd\u529b: A/B\u6e2c\u8a66")),(0,i.kt)("h4",{id:"\u901a\u4fe1\u5b89\u5168"},"\u901a\u4fe1\u5b89\u5168"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u751f\u6210CA\u8b49\u66f8"),(0,i.kt)("li",{parentName:"ul"},"SDS\u670d\u52d9\u4ee3\u7406: \u65e9\u671f\u900f\u904eK8s Secret\u639b\u5230Pod\u4e2d\uff0c\u76ee\u524d\u900f\u904eSDS\u4ee3\u7406\u4f86\u4fdd\u8b49\u79c1\u9470\u4e0d\u6703\u5728\u7db2\u8def\u50b3\u8f38\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8a8d\u8b49"),(0,i.kt)("li",{parentName:"ul"},"\u6388\u6b0a")),(0,i.kt)("h4",{id:"\u53ef\u89c0\u6e2c\u6027"},"\u53ef\u89c0\u6e2c\u6027"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u65e5\u8a8c\u641c\u96c6: ELK"),(0,i.kt)("li",{parentName:"ul"},"\u93c8\u8def\u8ffd\u8e64: Zipkin"),(0,i.kt)("li",{parentName:"ul"},"\u6307\u6a19\u5ea6\u91cf: \u97ff\u61c9\u5ef6\u9072\u3001\u6d41\u91cf\u5927\u5c0f\u3001\u932f\u8aa4\u6578\u91cf\u3001\u98fd\u548c\u5ea6")),(0,i.kt)("h3",{id:"service-mesh-and-ecosystem"},"Service Mesh and Ecosystem"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f9e\u5404\u505a\u5404\u7684\uff0c\u5230\u7d71\u4e00\u4ecb\u9762",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"2019 KubeCon\uff0cMS\u8207 Linkerd\u3001HashiCorp\u3001Solo\u3001Kinvolk\u3001Weaveworks\u5171\u540c\u5ba3\u5e03Service Mesh Interface(SMI)")))),(0,i.kt)("h4",{id:"smi\u7531\u56db\u65b9\u9762api\u69cb\u6210"},"SMI\u7531\u56db\u65b9\u9762API\u69cb\u6210"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Traffic Specs: \u5b9a\u7fa9\u6d41\u91cf\u7684\u8868\u793a\u65b9\u5f0f\uff0c\u76ee\u524d\u6709TCP\u8ddfHTTP\u3002"),(0,i.kt)("li",{parentName:"ul"},"Traffic Split: \u57fa\u65bcK8s ",(0,i.kt)("inlineCode",{parentName:"li"},"Service"),"\u800c\u4f86\uff0c\u5982\u679c\u8981\u62c6\u5206\u6d41\u91cf\u5c31\u8981\u5b9a\u7fa9Service \u5c64\u6b21\u7d50\u69cb\uff0c\u76ee\u524dIstio\u900f\u904evirtualservice\u4f86\u89e3\u6c7a\u3002"),(0,i.kt)("li",{parentName:"ul"},"Traffic Metrics: \u7b26\u5408K8s Metrics API\u3002"),(0,i.kt)("li",{parentName:"ul"},"Traffic Access Control: Support ",(0,i.kt)("inlineCode",{parentName:"li"},"ServiceAccount")," in K8s")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3148).Z,width:"635",height:"573"})))}m.isMDXComponent=!0},5994:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/15-1-e40b4f382ef4e2c1950c8e8383766dab.png"},71097:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/15-2-e1ff573eaec570f591864fa977e48f81.png"},82981:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/15-3-3427db245658fdbf77b317227402fadc.png"},60197:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/15-4-ff15ab2f6ed7b529d433230d9c5a26eb.png"},61997:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/15-5-345eb873232b89458075d6a1e0497e28.png"},32190:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/15-6-57d3cc83efdbe3217edc6e38a0a66702.png"},32614:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/15-7-c3dc95847a7b6f04b68bcb572e0c0bb2.png"},98063:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/15-8-25a873a4e59bbd3595735e4848ff7efe.png"},3148:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/15-9-d86c1539bd5bdb8fcdc776fd54fc98af.png"}}]);