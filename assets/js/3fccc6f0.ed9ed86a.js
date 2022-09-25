"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[836],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(a),d=r,k=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},473:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"Ch1: \u4ec0\u9ebc\u662f\u8a2d\u8a08\u8207\u7d50\u69cb",tsidebar_label:"Ch1: \u4ec0\u9ebc\u662f\u8a2d\u8a08\u8207\u7d50\u69cb",sidebar_position:1},c=void 0,p={unversionedId:"sg/clean-architecture/ch1",id:"sg/clean-architecture/ch1",title:"Ch1: \u4ec0\u9ebc\u662f\u8a2d\u8a08\u8207\u7d50\u69cb",description:"\u67b6\u69cb\u8207\u8a2d\u8a08",source:"@site/docs/sg/clean-architecture/ch1.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch1",permalink:"/docs/sg/clean-architecture/ch1",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch1.md",tags:[],version:"current",lastUpdatedBy:"MichaelChen",lastUpdatedAt:1664087924,formattedLastUpdatedAt:"9/25/2022",sidebarPosition:1,frontMatter:{title:"Ch1: \u4ec0\u9ebc\u662f\u8a2d\u8a08\u8207\u7d50\u69cb",tsidebar_label:"Ch1: \u4ec0\u9ebc\u662f\u8a2d\u8a08\u8207\u7d50\u69cb",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Clearn Architecture",permalink:"/docs/sg/clean-architecture/"},next:{title:"Ch2: \u5169\u7a2e\u50f9\u503c\u89c0\u7684\u6545\u4e8b",permalink:"/docs/sg/clean-architecture/ch2"}},u={},m=[{value:"\u67b6\u69cb\u8207\u8a2d\u8a08",id:"\u67b6\u69cb\u8207\u8a2d\u8a08",level:2},{value:"\u8edf\u9ad4\u67b6\u69cb\u7684\u76ee\u7684",id:"\u8edf\u9ad4\u67b6\u69cb\u7684\u76ee\u7684",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u721b\u6524\u5b50",id:"\u721b\u6524\u5b50",level:2},{value:"\u4ec0\u9ebc\u5730\u65b9\u51fa\u4e86\u932f\uff1f",id:"\u4ec0\u9ebc\u5730\u65b9\u51fa\u4e86\u932f",level:2},{value:"\u771f\u5be6\u8207\u8b0a\u8a00",id:"\u771f\u5be6\u8207\u8b0a\u8a00",level:3},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],s={toc:m};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u67b6\u69cb\u8207\u8a2d\u8a08"},"\u67b6\u69cb\u8207\u8a2d\u8a08"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u300c\u67b6\u69cb\u300dArchitecture\uff1a\u5e38\u6307\u9ad8\u5c64\u6b21\u7684\u8a2d\u8a08",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u623f\u5b50\u7684\u6a23\u8c8c\uff0c\u683c\u5c40"))),(0,l.kt)("li",{parentName:"ul"},"\u300c\u8a2d\u8a08\u300dDesign\uff1a\u5f80\u5f80\u96b1\u542b\u8f03\u4f4e\u5c64\u6b21\u7684\u7d30\u7bc0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u623f\u5b50\u7684\u71c8\uff0c\u63d2\u5ea7\u4f4d\u7f6e")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4f4e\u5c64\u6b21\u7684\u8a2d\u8a08\u8ddf\u9ad8\u5c64\u6b21\u7684\u67b6\u69cb\u5176\u5be6\u90fd\u662f\u623f\u5b50\u7684\u4e00\u90e8\u4efd")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8edf\u9ad4\u8a2d\u8a08\uff1a\u5f9e\u9ad8\u5c64\u6b21\u5230\u4f4e\u5c64\u6b21\u7684\u4e00\u7cfb\u5217\u6c7a\u7b56\uff0c\u67b6\u69cb\u8207\u8a2d\u8a08\u90fd\u662f\u6574\u9ad4\u7684\u4e00\u90e8\u4efd"))),(0,l.kt)("h2",{id:"\u8edf\u9ad4\u67b6\u69cb\u7684\u76ee\u7684"},"\u8edf\u9ad4\u67b6\u69cb\u7684\u76ee\u7684"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8edf\u9ad4\u67b6\u69cb\u7684\u76ee\u7684\u662f\u6700\u5c0f\u5316\u5efa\u7f6e\u548c\u7dad\u8b77\u300c\u7cfb\u7d71\u9700\u6c42\u300d\u6240\u9700\u8981\u7684\u4eba\u529b\u8cc7\u6e90")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76ee\u7684\u662f\u6e1b\u5c11\u6210\u672c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6210\u672c\uff1a\u4eba\u529b\uff0c\u6642\u9593"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u65b0\u589e\u529f\u80fd\u9032\u8edf\u9ad4\u7cfb\u7d71\uff0c\u6240\u9700\u8017\u8cbb\u7684\u7cbe\u529b\u6703\u96a8\u8457\u6642\u9593\u589e\u52a0\u7684\u8a71\uff0c\u5c31\u662f\u4e0d\u597d\u7684\u8a2d\u8a08")))),(0,l.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5de5\u7a0b\u5e2b\u4eba\u6578\u589e\u52a0\u8fc5\u901f\uff0c\u4f46\u7522\u54c1\u529f\u80fd\u6210\u9577\u6f38\u7de9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4eba\u6578\u589e\u52a0\uff0c\u4e5f\u610f\u5473\u8457\u6210\u672c\u589e\u52a0"))),(0,l.kt)("li",{parentName:"ul"},"\u55ae\u4f4d\u529f\u80fd\u7684\u751f\u7522\u6210\u672c\u5feb\u901f\u4e0a\u63da")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Chart1",src:a(6370).Z,width:"1040",height:"643"})),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Why?")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u70ba\u4ec0\u9ebc\u7248\u672c8\u8207\u7248\u672c1\u76f8\u6bd4\uff0c\u7a0b\u5f0f\u78bc\u7684\u6210\u672c\u9ad8\u51fa40\u500d\u5462\uff1f"))),(0,l.kt)("h2",{id:"\u721b\u6524\u5b50"},"\u721b\u6524\u5b50"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7d71\u5306\u5306\u88ab\u4e1f\u5728\u4e00\u8d77\u6642\uff0c\u7576engineer\u7684\u6578\u91cf\u6210\u70ba\u8f38\u51fa\u7684\u552f\u4e00\u9a45\u52d5\u8005\uff0c\u5c0d\u7a0b\u5f0f\u78bc\u7684\u6574\u6f54\u7a0b\u5ea6\u8207\u8a2d\u8a08\u7d50\u69cb\u6c92\u6709\u60f3\u6cd5\uff0c\u5c31\u6703\u8d70\u5230\u9019\u7a2e\u60b2\u6158\u7d50\u5c40"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u7d42\uff0c\u4e0d\u8ad6\u4f60\u5728\u52aa\u529b\u9032\u884c\u958b\u767c\uff0c\u53ea\u662f\u5c07\u721b\u6524\u5b50\u5f9e\u4e00\u500b\u5730\u65b9\u642c\u5230\u53e6\u4e00\u500b\u5730\u65b9\u3002\u7522\u51fa\u65b0\u529f\u80fd\u8b8a\u5f97\u975e\u5e38\u56f0\u96e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u71b5entropy - \u4e0d\u505a\u5de5\u7684\u80fd\u91cf\u7e3d\u6578\uff0c\u80fd\u91cf\u9000\u5316\u7684\u6307\u6a19"),(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u60c5\u7e3d\u6703\u5f80\u6700\u5927\u7684\u4e82\u5ea6\u9032\u884c\uff0c\u76f4\u5230\u6240\u6709\u7684\u4f5c\u5de5\u90fd\u662f\u7121\u6548\u7684")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u67b6\u69cb\u8a2d\u8a08\uff0c\u662f\u4e00\u7a2e\u9762\u5c0d\u8907\u96dc\u5ea6\u7684\u6280\u80fd"))),(0,l.kt)("h2",{id:"\u4ec0\u9ebc\u5730\u65b9\u51fa\u4e86\u932f"},"\u4ec0\u9ebc\u5730\u65b9\u51fa\u4e86\u932f\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8e0f\u5be6\u548c\u7a69\u5b9a\u6301\u7e8c\u662f\u8d0f\u5f97\u6bd4\u8cfd\u7684\u95dc\u9375"),(0,l.kt)("li",{parentName:"ul"},"\u6bd4\u8cfd\u4e0d\u662f\u6bd4\u5feb\uff0c\u4e5f\u4e0d\u662f\u6bd4\u8ab0\u5f37\u58ef"),(0,l.kt)("li",{parentName:"ul"},"\u8d8a\u5feb\u7684\uff0c\u53cd\u800c\u901f\u5ea6\u8d8a\u6162")),(0,l.kt)("h3",{id:"\u771f\u5be6\u8207\u8b0a\u8a00"},"\u771f\u5be6\u8207\u8b0a\u8a00"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u300c\u7de8\u5beb\u7d6e\u4e82\u7684\u7a0b\u5f0f\u78bc\u53ef\u4ee5\u5728\u77ed\u671f\u5167\u8d70\u5f97\u66f4\u5feb\uff0c\u53ea\u6709\u9577\u671f\u4e0b\u4f86\u624d\u6703\u8b8a\u6162\u300d")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u88fd\u9020\u7d6e\u4e82\u7684\u958b\u767c\u901f\u5ea6\u7e3d\u662f\u6bd4\u4fdd\u6301\u6574\u6f54\u7684\u958b\u767c\u4f86\u5f97\u6162")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u300c\u5148workaround\u89e3\u6c7a\u904e\u53bb\uff0c\u665a\u9ede\u56de\u4f86\u4fee\u6b63\u4ed6\u300d")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7834\u7a97\u6548\u61c9 (",(0,l.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/zh-tw/%E7%A0%B4%E7%AA%97%E6%95%88%E5%BA%94"},"Broken windows theory"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e00\u6392\u623f\u5b50\u4e2d\u5982\u679c\u6709\u6247\u7834\u6389\u7684\u7a97\u6236\u6c92\u6709\u4fee\u5fa9\uff0c\u5f88\u5feb\u6574\u6392\u623f\u5b50\u7684\u7a97\u6236\u90fd\u6703\u7834\u6389"),(0,l.kt)("li",{parentName:"ul"},"\u6df7\u4e82\u6703\u5c0e\u81f4\u66f4\u591a\u7684\u6df7\u4e82")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u300c\u6642\u9593\u4e0d\u5920\u300d\u300c\u4eba\u529b\u4e0d\u5920\u300d")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5e15\u91d1\u68ee\u5b9a\u7406 (",(0,l.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/zh-tw/%E5%B8%95%E9%87%91%E6%A3%AE%E5%AE%9A%E7%90%86"},"Parkinson's law"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u7e3d\u662f\u6703\u586b\u6eff\u5206\u914d\u7d66\u4ed6\u7684\u6642\u9593"),(0,l.kt)("li",{parentName:"ul"},"\u9810\u7559\u8d8a\u9577\u7684\u6642\u9593\u7d66\u4e00\u500b\u4efb\u52d9\uff0c\u53ea\u6703\u5c0e\u81f4\u66f4\u591a\u4e0d\u5fc5\u8981\u7684\u5b50\u4efb\u52d9\u88ab\u52a0\u9032\u4f86")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u300c\u6211\u5011\u4e0d\u8981\u904e\u5ea6\u8a2d\u8a08\uff0c\u73fe\u5728\u5728\u8d95\u6240\u4ee5\u5148\u7c21\u55ae\u505a\u5c31\u597d\uff0c\u5230\u6642\u5019\u898f\u6a21\u5927\u4e86\u6709\u90a3\u7a2e\u9700\u6c42\u518d\u4f86\u60f3\u8fa6\u6cd5\u628a\u5b83\u6539\u597d\u300d")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c21\u55ae\u662f\u6307\u9593\u55ae\u6574\u6f54\u7684\u67b6\u69cb\u53bb\u5beb\u5b83\uff0c\u9084\u662f\u4e82\u5beb\u5b83\uff1f"),(0,l.kt)("li",{parentName:"ul"},"\u5bebcode\u8981\u5feb\u8981\u600e\u9ebc\u5feb\uff1f\u4e82\u5beb\u6700\u5feb")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u300c\u54ce\u5466\uff0c\u9019\u4e9b\u721bcode\u662f\u6211\u81ea\u5df1\u5beb\u7684\uff0c\u70ba\u4e86\u8868\u73fe\u7684\u8ca0\u8cac\uff0c\u5373\u4f7f\u662f\u52a0\u73edon-call\u6211\u4e5f\u5f97\u8a2d\u6cd5\u7dad\u904b\u597d\u4ed6\u300d")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7136\u5f8c\u5c31\u96e2\u8077\u4e86..."),(0,l.kt)("li",{parentName:"ul"},"\u6240\u4ee5\u554f\u984c\u89e3\u6c7a\u4e86\u6c92\u6709\uff1f")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u300c\u9019\u6a23\u4e0b\u53bb\u4e0d\u884c\uff0c\u6211\u5011\u6700\u597d\u9084\u662f\u91cd\u5beb\u5b83\u300d")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c0f\u898f\u6a21\u4f60\u90fd\u641e\u4e0d\u5b9a\u4e86\uff0c\u4f60\u600e\u9ebc\u6703\u89ba\u5f97\u672a\u4f86\u898f\u6a21\u5927\u4e86\u4f60\u6703\u6709\u672c\u4e8b\u6539\u597d\u4ed6\uff1f"),(0,l.kt)("li",{parentName:"ul"},"\u628acode\u5beb\u4e7e\u6de8\u9019\u7a2e\u6280\u80fd\u5f88\u597d\u638c\u63e1\u662f\u4e0d\u662f\uff1f"),(0,l.kt)("li",{parentName:"ul"},"\u76f8\u5c0d\u7684\uff0c\u5982\u679c\u4f60\u60f3\u638c\u63e1\u9019\u7a2e\u6280\u80fd\uff0c\u4f60\u8981\u5f9e\u5c0f\u898f\u6a21\u505a\u8d77\u9084\u662f\u76f4\u63a5\u78b0\u5927\u898f\u6a21\u7cfb\u7d71\uff1f")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u201cThey did it by making the single worst strategic mistake that any software company can make: They decided to rewrite the code from scratch.\u201d"),(0,l.kt)("p",{parentName:"div"},"Joel Spolsky, CEO and Co-founder of Stack Overflow"))),(0,l.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,l.kt)("p",null,"\u8981\u8a8d\u771f\u5c0d\u5f85\u8edf\u9ad4\u67b6\u69cb\uff0c\u4f60\u9700\u8981\u77e5\u9053\u4ec0\u9ebc\u662f\u597d\u7684\u67b6\u69cb\u3002\u70ba\u4e86\u5efa\u7f6e\u4e00\u500b\u300c\u6eff\u8db3\u4ed8\u51fa\u7cbe\u529b\u6700\u5c0f\u5316\u53ca\u751f\u7522\u529b\u6700\u5927\u5316\u300d\u7684\u7cfb\u7d71\u8a2d\u8a08\u8207\u67b6\u69cb\uff0c\u4f60\u9700\u8981\u77e5\u9053\u7cfb\u7d71\u67b6\u69cb\u4e2d\u7684\u54ea\u4e9b\u5c6c\u6027\u6703\u5f71\u5f15\u9818\u51fa\u9019\u500b\u7d50\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u60f3\u8d70\u5f97\u5feb\uff0c\u552f\u4e00\u7684\u65b9\u6cd5\u662f\u8d70\u5f97\u597d",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u638c\u63e1\u4f4f\u9762\u5c0d\u8907\u96dc\u6027\u7684\u6280\u80fd - \u67b6\u69cb\u7684\u80fd\u529b"))),(0,l.kt)("li",{parentName:"ul"},"\u6700\u597d\u7684\u9078\u64c7\u662f\u8b93\u958b\u767c\u4eba\u54e1\u4efb\u662f\u6b63\u78ba\u7684\u89c0\u5ff5\uff0c\u4e26\u907f\u514d\u904e\u5ea6\u81ea\u4fe1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u89c0\u5ff5\u5148\u901a\u4e86\uff0c\u5177\u9ad4\u8981\u600e\u9ebc\u505a\u901a\u5e38\u5c31\u8b8a\u5bb9\u6613\u4e86")))))}d.isMDXComponent=!0},6370:function(e,t,a){t.Z=a.p+"assets/images/chart1-21e88ecc4a309336597bdbe4801f497a.svg"}}]);