"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[5850],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=o(a),u=l,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||n;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:l,i[1]=s;for(var o=2;o<n;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74485:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>o});var r=a(87462),l=(a(67294),a(3905));const n={title:"Ch17: \u5fae\u670d\u52d9\u67b6\u69cb",tsidebar_label:"Ch17: \u5fae\u670d\u52d9\u67b6\u69cb",sidebar_position:17},i="\u5fae\u670d\u52d9\u67b6\u69cb",s={unversionedId:"sg/fundamentals-of-software-architecture/ch17",id:"sg/fundamentals-of-software-architecture/ch17",title:"Ch17: \u5fae\u670d\u52d9\u67b6\u69cb",description:"\u62d3\u58a3\u7d50\u69cb",source:"@site/docs/sg/fundamentals-of-software-architecture/ch17.md",sourceDirName:"sg/fundamentals-of-software-architecture",slug:"/sg/fundamentals-of-software-architecture/ch17",permalink:"/docs/sg/fundamentals-of-software-architecture/ch17",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fundamentals-of-software-architecture/ch17.md",tags:[],version:"current",lastUpdatedBy:"Mech",lastUpdatedAt:1693933669,formattedLastUpdatedAt:"Sep 5, 2023",sidebarPosition:17,frontMatter:{title:"Ch17: \u5fae\u670d\u52d9\u67b6\u69cb",tsidebar_label:"Ch17: \u5fae\u670d\u52d9\u67b6\u69cb",sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Ch15: \u7a7a\u9593\u5f0f\u67b6\u69cb\u98a8\u683c",permalink:"/docs/sg/fundamentals-of-software-architecture/ch15"},next:{title:"Ch18: \u9078\u64c7\u9069\u7576\u7684\u67b6\u69cb\u98a8\u683c",permalink:"/docs/sg/fundamentals-of-software-architecture/ch18"}},c={},o=[{value:"\u62d3\u58a3\u7d50\u69cb",id:"\u62d3\u58a3\u7d50\u69cb",level:2},{value:"\u5206\u6563\u5f0f",id:"\u5206\u6563\u5f0f",level:3},{value:"\u6709\u754c\u5167\u5bb9",id:"\u6709\u754c\u5167\u5bb9",level:3},{value:"\u9846\u7c92\u5ea6",id:"\u9846\u7c92\u5ea6",level:3},{value:"\u8cc7\u6599\u9694\u96e2",id:"\u8cc7\u6599\u9694\u96e2",level:3},{value:"API \u5c64",id:"api-\u5c64",level:3},{value:"Devops \u76f8\u95dc\u7684\u91cd\u7528",id:"devops-\u76f8\u95dc\u7684\u91cd\u7528",level:3},{value:"\u670d\u52d9\u767c\u73fe",id:"\u670d\u52d9\u767c\u73fe",level:2},{value:"Example: DHCP + DNS",id:"example-dhcp--dns",level:4},{value:"The Client\u2011Side Discovery Pattern",id:"the-clientside-discovery-pattern",level:3},{value:"The Server-Side Discovery Pattern",id:"the-server-side-discovery-pattern",level:3},{value:"\u524d\u7aef",id:"\u524d\u7aef",level:3},{value:"\u901a\u4fe1",id:"\u901a\u4fe1",level:3},{value:"\u7de8\u6392\u53ca\u5354\u4f5c",id:"\u7de8\u6392\u53ca\u5354\u4f5c",level:3},{value:"\u4ea4\u6613\u8207\u50b3\u5947\u6a21\u5f0f",id:"\u4ea4\u6613\u8207\u50b3\u5947\u6a21\u5f0f",level:3},{value:"Two Phase Commit",id:"two-phase-commit",level:4},{value:"Saga Pattern",id:"saga-pattern",level:4},{value:"\u67b6\u69cb\u7279\u6027\u7684\u7b49\u7d1a",id:"\u67b6\u69cb\u7279\u6027\u7684\u7b49\u7d1a",level:3}],d={toc:o},p="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5fae\u670d\u52d9\u67b6\u69cb"},"\u5fae\u670d\u52d9\u67b6\u69cb"),(0,l.kt)("h2",{id:"\u62d3\u58a3\u7d50\u69cb"},"\u62d3\u58a3\u7d50\u69cb"),(0,l.kt)("img",{src:a(6040).Z,alt:"01",width:"70%"}),(0,l.kt)("h3",{id:"\u5206\u6563\u5f0f"},"\u5206\u6563\u5f0f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f9e\u5be6\u9ad4\u6a5f\u5668 -> \u865b\u64ec\u6a5f\u548c\u5bb9\u5668"),(0,l.kt)("li",{parentName:"ol"},"\u4ee5\u985e\u4f3c process \u7684\u65b9\u5f0f\u62c6\u5206\u51fa\u5c07\u670d\u52d9\u89e3\u8026"),(0,l.kt)("li",{parentName:"ol"},"\u670d\u52d9\u7684",(0,l.kt)("strong",{parentName:"li"},"\u9846\u7c92\u5ea6"),"\u5f88\u91cd\u8981, \u4e0d\u540c\u7684\u670d\u52d9\u9593\u7684\u547c\u53eb\u662f\u5f71\u97ff\u6027\u80fd\u7684\u5927\u95dc\u9375\u4e4b\u4e00\u3002")),(0,l.kt)("h3",{id:"\u6709\u754c\u5167\u5bb9"},"\u6709\u754c\u5167\u5bb9"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5fae\u670d\u52d9\u6703\u50be\u5411\u5728\u540c\u4e00\u500b\u670d\u52d9\u90fd\u6709\u81ea\u5df1\u5b8c\u6574\u7684\u4e00\u5207\uff0c\u4f8b\u5982\u5b50\u5143\u4ef6\u548c\u8cc7\u6599\u5eab"),(0,l.kt)("li",{parentName:"ol"},"\u76f8\u540c\u7684\u985e\u5225\u4e0d\u505a\u5171\u7528 (ex. class \u7684\u7522\u751f)\uff0c\u800c\u50be\u5411\u65bc\u8907\u88fd")),(0,l.kt)("h3",{id:"\u9846\u7c92\u5ea6"},"\u9846\u7c92\u5ea6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9023\u8cab\u7684\u4ea4\u6613\u884c\u70ba"),(0,l.kt)("li",{parentName:"ol"},"\u76e1\u91cf\u907f\u514d\u8de8\u9846\u7c92\u4ea4\u6613\u7684\u884c\u70ba"),(0,l.kt)("li",{parentName:"ol"},"\u82e5\u662f\u67d0\u4e9b\u5fae\u670d\u52d9\u9593\u7684\u901a\u4fe1\u8ca0\u64d4\u592a\u91cd\uff0c\u76e1\u91cf\u5305\u6210\u4e00\u500b\u670d\u52d9")),(0,l.kt)("h3",{id:"\u8cc7\u6599\u9694\u96e2"},"\u8cc7\u6599\u9694\u96e2"),(0,l.kt)("img",{src:a(32014).Z,alt:"01",width:"70%"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9069\u7576\u7684\u5207\u5206\u51fa\u5fae\u670d\u52d9\u53ef\u4ee5\u8b93\u6bcf\u500b\u670d\u52d9\u90fd\u4f7f\u7528\u81ea\u5df1\u6700\u9069\u5408\u7684\u8cc7\u6599\u5eab\u3002")),(0,l.kt)("h3",{id:"api-\u5c64"},"API \u5c64"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u8b93\u4ed6\u4f86\u4f5c\u70ba\u4e2d\u4ecb\u6216\u662f\u7de8\u6392\u7684\u5de5\u5177"),(0,l.kt)("li",{parentName:"ol"},"\u908f\u8f2f\u90fd\u61c9\u8a72\u8981\u767c\u751f\u5728\u5404\u500b\u670d\u52d9\u88e1\u9762\u3002")),(0,l.kt)("h3",{id:"devops-\u76f8\u95dc\u7684\u91cd\u7528"},"Devops \u76f8\u95dc\u7684\u91cd\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u76e3\u63a7\uff0cLogging")),(0,l.kt)("img",{src:a(21229).Z,alt:"01",width:"70%"}),(0,l.kt)("img",{src:a(98949).Z,alt:"01",width:"70%"}),(0,l.kt)("img",{src:a(45818).Z,alt:"01",width:"70%"}),(0,l.kt)("img",{src:a(63664).Z,alt:"01",width:"70%"}),(0,l.kt)("h2",{id:"\u670d\u52d9\u767c\u73fe"},"\u670d\u52d9\u767c\u73fe"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Register, \u670d\u52d9\u555f\u52d5\u6642\u7684\u8a3b\u518a\u6a5f\u5236"),(0,l.kt)("li",{parentName:"ol"},"Query, \u67e5\u8a62\u5df2\u8a3b\u518a\u670d\u52d9\u8cc7\u8a0a\u7684\u6a5f\u5236"),(0,l.kt)("li",{parentName:"ol"},"Healthy Check, \u78ba\u8a8d\u670d\u52d9\u5065\u5eb7\u72c0\u614b\u7684\u6a5f\u5236")),(0,l.kt)("h4",{id:"example-dhcp--dns"},"Example: DHCP + DNS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DHCP \u767c IP"),(0,l.kt)("li",{parentName:"ul"},"DNS \u8a3b\u518a HOST/IP"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8a62 DNS"),(0,l.kt)("li",{parentName:"ul"},"\u78ba\u8a8d HOST \u662f\u5426\u5b58\u5728")),(0,l.kt)("img",{src:a(37613).Z,alt:"01",width:"70%"}),(0,l.kt)("h3",{id:"the-clientside-discovery-pattern"},"The Client\u2011Side Discovery Pattern"),(0,l.kt)("img",{src:a(47171).Z,alt:"01",width:"70%"}),(0,l.kt)("h3",{id:"the-server-side-discovery-pattern"},"The Server-Side Discovery Pattern"),(0,l.kt)("img",{src:a(89165).Z,alt:"01",width:"70%"}),(0,l.kt)("h3",{id:"\u524d\u7aef"},"\u524d\u7aef"),(0,l.kt)("img",{src:a(95976).Z,alt:"01",width:"70%"}),(0,l.kt)("img",{src:a(38655).Z,alt:"01",width:"70%"}),(0,l.kt)("h3",{id:"\u901a\u4fe1"},"\u901a\u4fe1"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5354\u8b70\u611f\u77e5"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7d71\u4e00\u7684 REST \u6a21\u5f0f\uff0c\u6216\u7528\u67d0\u7a2e message \u7684 queue"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7570\u8cea"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u500b\u670d\u52d9\u53ef\u4ee5\u7528\u6700\u7b26\u5408\u81ea\u8eab\u7684\u6280\u8853\u4f86\u958b\u767c"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e92\u901a\u6027"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u900f\u904e\u7db2\u8def\u4f86\u4e92\u76f8\u547c\u53eb")))),(0,l.kt)("h3",{id:"\u7de8\u6392\u53ca\u5354\u4f5c"},"\u7de8\u6392\u53ca\u5354\u4f5c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7de8\u6392"),(0,l.kt)("img",{src:a(21004).Z,alt:"01",width:"70%"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5354\u4f5c"),(0,l.kt)("img",{src:a(16457).Z,alt:"01",width:"70%"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8907\u96dc\u7684\u72c0\u6cc1\u4e0b\u4f7f\u7528\u7de8\u6392"),(0,l.kt)("img",{src:a(56416).Z,alt:"01",width:"70%"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8907\u96dc\u7684\u72c0\u6cc1\u4e0b\u4f7f\u7528\u5354\u4f5c"))),(0,l.kt)("img",{src:a(13076).Z,alt:"01",width:"70%"}),(0,l.kt)("h3",{id:"\u4ea4\u6613\u8207\u50b3\u5947\u6a21\u5f0f"},"\u4ea4\u6613\u8207\u50b3\u5947\u6a21\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u76e1\u91cf\u4e0d\u8981\u5728\u5fae\u670d\u52d9\u4e2d\u7528\u4ea4\u6613\u7684\u65b9\u5f0f\u4f86\u8655\u7406")),(0,l.kt)("h4",{id:"two-phase-commit"},"Two Phase Commit"),(0,l.kt)("img",{src:a(9815).Z,alt:"01",width:"70%"}),(0,l.kt)("h4",{id:"saga-pattern"},"Saga Pattern"),(0,l.kt)("img",{src:a(34720).Z,alt:"01",width:"70%"}),(0,l.kt)("img",{src:a(6031).Z,alt:"01",width:"70%"}),(0,l.kt)("img",{src:a(37626).Z,alt:"01",width:"70%"}),(0,l.kt)("h3",{id:"\u67b6\u69cb\u7279\u6027\u7684\u7b49\u7d1a"},"\u67b6\u69cb\u7279\u6027\u7684\u7b49\u7d1a"),(0,l.kt)("img",{src:a(44593).Z,alt:"01",width:"70%"}))}m.isMDXComponent=!0},6040:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/17_1-e18219bd529aed6b8ac526213cd1385c.png"},13076:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/17_10-177a780bc5ff9a52227ded99543679e6.png"},34720:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/17_11-bf1614b7f99dd2586322771bcadbb2c8.png"},6031:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/17_12-f58f9f0cf11589fd286f33562fb90234.png"},44593:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/17_13-1876c577307e398207e8852071142071.png"},21229:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/17_2-1f42e2057f88ae8c3c932a7c443a3ccf.png"},98949:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/17_3-25c327cde1f8d7f9236d79574c72c71f.png"},45818:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/17_4-e5d0917ad5540222127b745618c5b8fe.png"},95976:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/17_5-f19ea278341c733ea2d696d37ec7b6d2.png"},38655:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/17_6-7868d5f01ec6d5ac07308405157c1ad6.png"},21004:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/17_7-bde8b50e27ca2d66e08a8d32e71425e0.png"},16457:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/17_8-468f48663bc5e66126aa6c5425363041.png"},56416:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/17_9-016a81cb92fe080bbb07eab0dc4f0e28.png"},32014:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/extra_17_1-165200663899a7ed039e62a55c04c7b3.png"},37613:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/extra_17_2-cae6dbea4a20674578ce48eaf86e4e0d.png"},47171:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/extra_17_3-d05b72ecd6f5285c107ffdc28c7f1b60.png"},89165:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/extra_17_4-c66c4c3e5c4586c588160b49d4673f32.png"},9815:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/extra_17_5-d92ac349beb5511b24600ce83cff5ad3.png"},37626:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/extra_17_6-fc37ce4fd108542ae2cc73b0ffa0742d.webp"},63664:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/extra_17_7-032bab0d338f3f1af6ce1857c5c95958.png"}}]);