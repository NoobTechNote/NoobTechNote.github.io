"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[9883],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var r=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=r.createContext({}),o=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},u=function(t){var e=o(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,i=t.mdxType,n=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=o(a),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||n;return a?r.createElement(m,c(c({ref:e},u),{},{components:a})):r.createElement(m,c({ref:e},u))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=a.length,c=new Array(n);c[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:i,c[1]=l;for(var o=2;o<n;o++)c[o]=a[o];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},37145:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var r=a(87462),i=(a(67294),a(3905));const n={title:"Ch4: \u5b9a\u7fa9\u67b6\u69cb\u7279\u6027",tsidebar_label:"Ch4: \u5b9a\u7fa9\u67b6\u69cb\u7279\u6027",sidebar_position:4},c=void 0,l={unversionedId:"sg/fundamentals-of-software-architecture/ch4",id:"sg/fundamentals-of-software-architecture/ch4",title:"Ch4: \u5b9a\u7fa9\u67b6\u69cb\u7279\u6027",description:"\u67b6\u69cb\u7279\u6027(Architectural Characteristics)",source:"@site/docs/sg/fundamentals-of-software-architecture/ch4.md",sourceDirName:"sg/fundamentals-of-software-architecture",slug:"/sg/fundamentals-of-software-architecture/ch4",permalink:"/docs/sg/fundamentals-of-software-architecture/ch4",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fundamentals-of-software-architecture/ch4.md",tags:[],version:"current",lastUpdatedBy:"LuPeter",lastUpdatedAt:1693949505,formattedLastUpdatedAt:"Sep 5, 2023",sidebarPosition:4,frontMatter:{title:"Ch4: \u5b9a\u7fa9\u67b6\u69cb\u7279\u6027",tsidebar_label:"Ch4: \u5b9a\u7fa9\u67b6\u69cb\u7279\u6027",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Ch3: \u6a21\u7d44\u5316",permalink:"/docs/sg/fundamentals-of-software-architecture/ch3"},next:{title:"Ch5: \u78ba\u8a8d\u67b6\u69cb\u7279\u6027",permalink:"/docs/sg/fundamentals-of-software-architecture/ch5"}},s={},o=[{value:"\u67b6\u69cb\u7279\u6027(Architectural Characteristics)",id:"\u67b6\u69cb\u7279\u6027architectural-characteristics",level:2},{value:"(\u90e8\u5206)\u5217\u793a\u7684\u67b6\u69cb\u7279\u6027 Architectural Characteristics (Partially) Listed",id:"\u90e8\u5206\u5217\u793a\u7684\u67b6\u69cb\u7279\u6027-architectural-characteristics-partially-listed",level:2},{value:"\u904b\u7dad\u67b6\u69cb\u7279\u6027 (Operational Architecture Characteristics)",id:"\u904b\u7dad\u67b6\u69cb\u7279\u6027-operational-architecture-characteristics",level:3},{value:"\u7d50\u69cb\u4e0a\u7684\u67b6\u69cb\u7279\u6027 (Structural Architecture Characteristics)",id:"\u7d50\u69cb\u4e0a\u7684\u67b6\u69cb\u7279\u6027-structural-architecture-characteristics",level:3},{value:"\u8de8\u9818\u57df\u67b6\u69cb\u7279\u6027 (Cross-Cutting Architecture Characteristics)",id:"\u8de8\u9818\u57df\u67b6\u69cb\u7279\u6027-cross-cutting-architecture-characteristics",level:3},{value:"\u4f86\u81eaISO\u7684\u6e05\u55ae",id:"\u4f86\u81eaiso\u7684\u6e05\u55ae",level:3},{value:"ISO\u63d0\u53ca\u4f46\u4f5c\u8005\u89ba\u5f97\u4e0d\u9069\u5408\u7528\u5728\u67b6\u69cb\u7684\u9805\u76ee",id:"iso\u63d0\u53ca\u4f46\u4f5c\u8005\u89ba\u5f97\u4e0d\u9069\u5408\u7528\u5728\u67b6\u69cb\u7684\u9805\u76ee",level:4},{value:"\u53d6\u6368\u8207\u5225\u7121\u9078\u64c7\u4e0b\u7684\u67b6\u69cb (Trade-Offs and Least Worst Architecture)",id:"\u53d6\u6368\u8207\u5225\u7121\u9078\u64c7\u4e0b\u7684\u67b6\u69cb-trade-offs-and-least-worst-architecture",level:2},{value:"Recap",id:"recap",level:2}],u={toc:o},p="wrapper";function d(t){let{components:e,...n}=t;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u67b6\u69cb\u7279\u6027architectural-characteristics"},"\u67b6\u69cb\u7279\u6027(Architectural Characteristics)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure-4.1",src:a(62648).Z,width:"1192",height:"322"}),"\n\u5229\u7528\u8edf\u9ad4\u89e3\u6c7a\u554f\u984c\uff0c\u8490\u96c6\u4e86\u9700\u6c42\u8868\u55ae\u3002\u67b6\u69cb\u5e2b\u5fc5\u9808\u5b9a\u7fa9\u3001\u767c\u73fe\u3001\u6216\u8005\u5206\u6790\u8edf\u9ad4\u6240\u5fc5\u9808\u5b8c\u6210\u7684\u6240\u6709\u4e8b\u60c5:\u5c31\u662f",(0,i.kt)("strong",{parentName:"p"},"\u67b6\u69cb\u7279\u6027")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Terry\u7684\u89e3\u8b80: \u628a\u9700\u6c42\u8868\u55ae\u7684\u5167\u5bb9\uff0c\u8f49\u5316\u6210\u67b6\u69cb\u7279\u6027\u7684\u9805\u76ee\u4f86\u505a\u8003\u91cf\n")),(0,i.kt)("p",null,"\u67b6\u69cb\u7279\u6027\u5f97\u6eff\u8db3\u4e09\u9805\u6e96\u5247:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u8207\u9818\u57df\u7121\u95dc\u7684\u8a2d\u8a08\u8003\u91cf(Specifies a nondomain design consideration)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u4e00\u5b9a\u51fa\u73fe\u5728\u9700\u6c42\u66f8\u4e0a\uff0c\u4f46\u537b\u5c0d\u6210\u529f\u5f88\u91cd\u8981\u7684\u8a2d\u8a08\u8003\u91cf",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ex: \u907f\u514d\u6280\u8853\u50b5\u3001\u6548\u80fd"))))),(0,i.kt)("li",{parentName:"ul"},"\u5f71\u97ff\u8a2d\u8a08\u7684\u67d0\u4e9b\u7d50\u69cb\u9762\u5411(Influences some structural aspect of the design)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5982\u5b89\u5168\u6027\uff1b\u56e0\u61c9\u9700\u6c42\u7684\u4e0d\u540c\uff0c(\u63a1\u53d6\u7b2c\u4e09\u65b9\u4ed8\u6b3e\u8655\u7406\u5668 or \u61c9\u7528\u5167\u4ed8\u6b3e\u7684\u8655\u7406)\uff0c\u6703\u5f71\u97ff\u8a2d\u8a08"))),(0,i.kt)("li",{parentName:"ul"},"\u5c0d\u61c9\u7528\u7a0b\u5f0f\u7684\u6210\u529f\u81f3\u70ba\u95dc\u9375\u6216\u91cd\u8981(Is critical or important to application success)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u67b6\u69cb\u5e2b\u8981\u9078\u64c7\u6700\u5c11\u7684\u67b6\u69cb\u7279\u6027\uff0c\u53bb\u907f\u514d\u8907\u96dc\u5ea6\u63d0\u5347")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure-4.2",src:a(1189).Z,width:"750",height:"545"})),(0,i.kt)("h2",{id:"\u90e8\u5206\u5217\u793a\u7684\u67b6\u69cb\u7279\u6027-architectural-characteristics-partially-listed"},"(\u90e8\u5206)\u5217\u793a\u7684\u67b6\u69cb\u7279\u6027 Architectural Characteristics (Partially) Listed"),(0,i.kt)("p",null,"\u67b6\u69cb\u7279\u6027\u6c92\u6709\u771f\u6b63\u666e\u904d\u6027\u7684\u6a19\u6e96\u5b58\u5728\u3002\u6bcf\u500b\u6a5f\u69cb\u5c0d\u9019\u4e9b\u8a5e\u90fd\u6709\u81ea\u5df1\u7684\u89e3\u91cb\u3002\n\u67b6\u69cb\u5e2b\u5e38\u5c07\u67b6\u69cb\u7279\u6027\u9032\u884c\u5ee3\u6cdb\u5206\u985e\u3002\u50c5\u80fd\u63d0\u51fa\u90e8\u4efd\u4f86\u7d66\u51fa\u7bc4\u4f8b\u3002"),(0,i.kt)("h3",{id:"\u904b\u7dad\u67b6\u69cb\u7279\u6027-operational-architecture-characteristics"},"\u904b\u7dad\u67b6\u69cb\u7279\u6027 (Operational Architecture Characteristics)"),(0,i.kt)("p",null,"\u6db5\u4e86\u84cb\u4e86\u50cf\u662f\u6548\u80fd\u3001\u53ef\u64f4\u5c55\u6027\u3001\u5f48\u6027\u3001\u53ef\u7528\u6027\u3001\u53ca\u53ef\u9760\u5ea6\u7b49\n",(0,i.kt)("img",{alt:"Table-4.1",src:a(59988).Z,width:"1192",height:"629"})),(0,i.kt)("h3",{id:"\u7d50\u69cb\u4e0a\u7684\u67b6\u69cb\u7279\u6027-structural-architecture-characteristics"},"\u7d50\u69cb\u4e0a\u7684\u67b6\u69cb\u7279\u6027 (Structural Architecture Characteristics)"),(0,i.kt)("p",null,"\u8003\u91cf\u7a0b\u5f0f\u78bc\u7684\u7d50\u69cb\uff0c\u4f8b\u5982\u512a\u9280\u7684\u6a21\u7d44\u5316\u3001\u5143\u4ef6\u9593\u7684\u8026\u5408\u53d7\u5230\u63a7\u5236\u3001\u53ef\u8b80\u6027\u9ad8\u7b49\u5167\u90e8\u54c1\u8cea\n",(0,i.kt)("img",{alt:"Table-4.1",src:a(53198).Z,width:"1186",height:"706"})),(0,i.kt)("h3",{id:"\u8de8\u9818\u57df\u67b6\u69cb\u7279\u6027-cross-cutting-architecture-characteristics"},"\u8de8\u9818\u57df\u67b6\u69cb\u7279\u6027 (Cross-Cutting Architecture Characteristics)"),(0,i.kt)("p",null,"\u5176\u4ed6\u7bc4\u7587\u6216\u96e3\u4ee5\u6b78\u985e\u7684\u67b6\u69cb\u7279\u6027\n",(0,i.kt)("img",{alt:"Table-4.1",src:a(43714).Z,width:"1182",height:"486"}),"\n",(0,i.kt)("img",{alt:"Table-4.1",src:a(17658).Z,width:"1174",height:"317"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h3",{parentName:"admonition",id:"\u53ef\u7fa9\u5927\u5229\u6027italy-ility"},"\u53ef\u7fa9\u5927\u5229\u6027(Italy-ility)"),(0,i.kt)("p",{parentName:"admonition"},"\u5ba2\u6236\u5c0d\u65bc\u300c\u8207\u7fa9\u5927\u5229\u5206\u90e8\u53ef\u80fd\u5931\u806f\u5341\u5206\u5728\u610f\u300d\u3002\u672a\u4f86\u67b6\u69cb\u90fd\u5fc5\u9700\u8003\u616e\u9019\u9ede\uff0c\u975e\u9054\u6210\u4e0d\u53ef\u7684\u9700\u6c42\uff0c\u88ab\u7a31\u70ba",(0,i.kt)("strong",{parentName:"p"},"\u53ef\u7fa9\u5927\u5229\u6027"),"\u3002")),(0,i.kt)("h3",{id:"\u4f86\u81eaiso\u7684\u6e05\u55ae"},"\u4f86\u81eaISO\u7684\u6e05\u55ae"),(0,i.kt)("p",null,"\u4e26\u6c92\u6709\u5b8c\u6574\u7684\u6a19\u6e96\u6e05\u55ae\u5b58\u5728\uff0c\u4ee5\u4e0b\u662f\u4f86\u81eaISO\u5b9a\u7fa9\u7684\u6e05\u55ae"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6548\u80fd\u6548\u7387 Performance efficiency"),(0,i.kt)("li",{parentName:"ul"},"\u76f8\u5bb9\u6027 Compatibility"),(0,i.kt)("li",{parentName:"ul"},"\u6613\u7528\u6027 Usability"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u9760\u6027 Reliability"),(0,i.kt)("li",{parentName:"ul"},"\u5b89\u5168\u6027 Security"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u7dad\u8b77\u6027 Maintainability"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u651c\u6027 Portability")),(0,i.kt)("h4",{id:"iso\u63d0\u53ca\u4f46\u4f5c\u8005\u89ba\u5f97\u4e0d\u9069\u5408\u7528\u5728\u67b6\u69cb\u7684\u9805\u76ee"},"ISO\u63d0\u53ca\u4f46\u4f5c\u8005\u89ba\u5f97\u4e0d\u9069\u5408\u7528\u5728\u67b6\u69cb\u7684\u9805\u76ee"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u529f\u80fd\u9069\u61c9\u6027 Functional suitability",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u529f\u80fd\u5b8c\u6574\u6027 Functional completeness"),(0,i.kt)("li",{parentName:"ul"},"\u529f\u80fd\u6b63\u78ba\u6027 Functional correctness"),(0,i.kt)("li",{parentName:"ul"},"\u529f\u80fd\u9069\u7576\u6027 Functional appropriateness")))),(0,i.kt)("h2",{id:"\u53d6\u6368\u8207\u5225\u7121\u9078\u64c7\u4e0b\u7684\u67b6\u69cb-trade-offs-and-least-worst-architecture"},"\u53d6\u6368\u8207\u5225\u7121\u9078\u64c7\u4e0b\u7684\u67b6\u69cb (Trade-Offs and Least Worst Architecture)"),(0,i.kt)("p",null,"\u901a\u5e38\u61c9\u8a72\u7a0b\u5f0f\u53ea\u80fd\u652f\u63f4\u5176\u4e2d\u4e00\u90e8\u5206\u7684\u67b6\u69cb\u7279\u6027\uff0c\u56e0\u70ba"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u500b\u652f\u63f4\u7279\u6027\u90fd\u9700\u8981\u82b1\u8cbb\u8a2d\u8a08\u529f\u592b\uff0c\u53ef\u80fd\u9084\u9700\u8981\u7d50\u69cb\u4e0a\u7684\u652f\u63f4"),(0,i.kt)("li",{parentName:"ul"},"\u67b6\u69cb\u7279\u6027\u9593\u53ef\u80fd\u4e92\u76f8\u5f71\u97ff\uff0c\u4f8b\u5982\uff0c\u63d0\u5347\u5b89\u5168\u6027\u53ef\u80fd\u6703\u964d\u4f4e\u6548\u80fd")),(0,i.kt)("p",null,"\u6545\u5f88\u5e38\u9047\u5230\uff0c\u6c7a\u7b56\u662f\u591a\u65b9\u7af6\u722d\u8003\u91cf\u4e4b\u4e0b\u7684\u53d6\u6368"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5225\u7e3d\u60f3\u7784\u6e96\u6700\u4f73\u67b6\u69cb\uff0c\u800c\u61c9\u8a72\u627e\u5c0b\u5225\u7121\u9078\u64c7\u4e0b\u7684\u67b6\u69cb")),(0,i.kt)("h2",{id:"recap"},"Recap"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e00\u500b\u5c6c\u6027\u5fc5\u9808\u6eff\u8db3\u54ea\u4e09\u500b\u6e96\u5247\uff0c\u624d\u80fd\u88ab\u8996\u70ba\u4e00\u500b\u67b6\u69cb\u7279\u6027\uff1f"),(0,i.kt)("li",{parentName:"ul"},"\u96b1\u6027\u6216\u5916\u986f\u7279\u6027\u7684\u5dee\u5225\u70ba\u4f55\uff1f\u6bcf\u4e00\u7a2e\u7d66\u500b\u4f8b\u5b50"),(0,i.kt)("li",{parentName:"ul"},"\u7d66\u4e00\u500b\u904b\u7dad\u7279\u6027\u7684\u4f8b\u5b50"),(0,i.kt)("li",{parentName:"ul"},"\u7d66\u4e00\u500b\u7d50\u69cb\u7279\u6027\u7684\u4f8b\u5b50"),(0,i.kt)("li",{parentName:"ul"},"\u7d66\u4e00\u500b\u8de8\u9818\u57df\u7279\u6027\u7684\u4f8b\u5b50"),(0,i.kt)("li",{parentName:"ul"},"\u54ea\u7a2e\u67b6\u69cb\u7279\u6027\u66f4\u91cd\u8981 - \u53ef\u7528\u6027\u6216\u6548\u80fd\uff1f")))}d.isMDXComponent=!0},62648:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/fig_4.1-8fbdb4eeeb19808fe7808697c61f40c7.png"},1189:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/fig_4.2-e1ac4e535414fb44405dc3542e5dbb81.png"},59988:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/tab_4.1-1d64f847d6a06788aca93e64faec6453.png"},53198:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/tab_4.2-276ee7a9607bec64a873ed264ff10a4d.png"},43714:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/tab_4.3_1-d21abe765a6440f0fe52a09e02666d9e.png"},17658:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/tab_4.3_2-6dbfc5e4ec8be371fb7faed34069c55b.png"}}]);