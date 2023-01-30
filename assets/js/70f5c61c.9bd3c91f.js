"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[5615],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),b=u(r),f=o,d=b["".concat(l,".").concat(f)]||b[f]||s[f]||c;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2228:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),i=["components"],a={title:"Ch31: Web \u662f\u7d30\u7bc0",tsidebar_label:"Ch31: Web \u662f\u7d30\u7bc0",sidebar_position:31},l=void 0,u={unversionedId:"sg/clean-architecture/ch31",id:"sg/clean-architecture/ch31",title:"Ch31: Web \u662f\u7d30\u7bc0",description:"Web \u7684\u767c\u5c55\u6982\u89bd\uff0c\u662f\u96fb\u8166\u8a08\u7b97\u529b\u7f6e\u65bc\u4e2d\u592e\u4f3a\u670d\u5668 \u6216\u662f \u7f6e\u65bc\u5ba2\u6236\u7aef\u4f86\u56de\u64fa\u76ea\u7684\u904e\u7a0b",source:"@site/docs/sg/clean-architecture/ch31.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch31",permalink:"/docs/sg/clean-architecture/ch31",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch31.md",tags:[],version:"current",lastUpdatedBy:"zoe chen",lastUpdatedAt:1675046352,formattedLastUpdatedAt:"1/30/2023",sidebarPosition:31,frontMatter:{title:"Ch31: Web \u662f\u7d30\u7bc0",tsidebar_label:"Ch31: Web \u662f\u7d30\u7bc0",sidebar_position:31},sidebar:"tutorialSidebar",previous:{title:"Ch30: \u8cc7\u6599\u5eab\u662f\u7d30\u7bc0",permalink:"/docs/sg/clean-architecture/ch30"},next:{title:"Ch32: \u6846\u67b6\u662f\u7d30\u7bc0",permalink:"/docs/sg/clean-architecture/ch32"}},p={},s=[{value:"UI \u8207\u696d\u52d9\u908f\u8f2f\u5fc5\u9808\u6709\u660e\u78ba\u7684\u908a\u754c",id:"ui-\u8207\u696d\u52d9\u908f\u8f2f\u5fc5\u9808\u6709\u660e\u78ba\u7684\u908a\u754c",level:2},{value:"Web \u8996\u70ba GUI , \u540c\u6642\u4e5f\u662f\u4e00\u7d44 IO \u8a2d\u5099",id:"web-\u8996\u70ba-gui--\u540c\u6642\u4e5f\u662f\u4e00\u7d44-io-\u8a2d\u5099",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}],b={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Web \u7684\u767c\u5c55\u6982\u89bd\uff0c\u662f\u96fb\u8166\u8a08\u7b97\u529b\u7f6e\u65bc\u4e2d\u592e\u4f3a\u670d\u5668 \u6216\u662f \u7f6e\u65bc\u5ba2\u6236\u7aef\u4f86\u56de\u64fa\u76ea\u7684\u904e\u7a0b"),(0,c.kt)("p",null,"\u4f5c\u8005\u8a8d\u70ba\uff0c web \u7684\u767c\u5c55\u6703\u6301\u7e8c\u5728\u9019\u500b\u8b70\u984c\u64fa\u76ea\uff0c\u8eab\u70ba\u4e00\u540d\u67b6\u69cb\u5e2b\uff0c\u61c9\u8a72\u8981\u80fd\u5920\u8df3\u812b\u9019\u4e9b\u64fa\u76ea\u9020\u6210\u7684\u5f71\u97ff\u3002"),(0,c.kt)("h2",{id:"ui-\u8207\u696d\u52d9\u908f\u8f2f\u5fc5\u9808\u6709\u660e\u78ba\u7684\u908a\u754c"},"UI \u8207\u696d\u52d9\u908f\u8f2f\u5fc5\u9808\u6709\u660e\u78ba\u7684\u908a\u754c"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Q \u516c\u53f8\u7684\u500b\u4eba\u8ca1\u52d9\u7cfb\u7d71\uff0c\u7531\u65bc\u5546\u696d\u8003\u91cf\uff0c\u6709\u4e86\u5728 UI \u4e4b\u9593\u7684\u8f49\u8b8a"),(0,c.kt)("li",{parentName:"ul"},"A \u516c\u53f8\u5347\u7d1a\u4e86\u65d7\u4e0b\u7522\u54c1-\u667a\u6167\u578b\u624b\u6a5f\u7684\u4f5c\u696d\u7cfb\u7d71\uff0c\u6539\u8b8a\u4e86\u5167\u90e8\u7684\u61c9\u7528\u7a0b\u5f0f\u986f\u73fe\u7684\u5916\u89c0")),(0,c.kt)("h2",{id:"web-\u8996\u70ba-gui--\u540c\u6642\u4e5f\u662f\u4e00\u7d44-io-\u8a2d\u5099"},"Web \u8996\u70ba GUI , \u540c\u6642\u4e5f\u662f\u4e00\u7d44 IO \u8a2d\u5099"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Web \u662f \u4e00\u500b GUI\uff0c\u5728\u63a2\u8a0e\u8edf\u9ad4\u67b6\u69cb\u7684\u540c\u6642\u61c9\u8a72\u5c07\u5176\u653e\u5728\u908a\u754c\u5916\uff0c\u8207\u6838\u5fc3\u696d\u52d9\u908f\u8f2f\u5206\u96e2"),(0,c.kt)("li",{parentName:"ul"},"Web \u662f\u4e00\u500b IO \u8a2d\u5099\uff0c\u5728 UI \u8207\u61c9\u7528\u7a0b\u5f0f\u4e2d\u9593\u7684\u696d\u52d9\u908f\u8f2f\u53ef\u4ee5\u8996\u70ba\u6bcf\u4e00\u7d44\u6848\u4f8b"),(0,c.kt)("li",{parentName:"ul"},"\u627f\u4e0a\uff0c\u6bcf\u4e00\u7d44\u6848\u4f8b\u5305\u542b\u8f38\u5165\u8207\u8f38\u51fa\u8cc7\u6599\uff0c\u540c\u6642\u4e5f\u4ee3\u8868\u8457\u57f7\u884c\u6848\u4f8b\u7684\u8f38\u5165\u503c\u8207\u8f38\u51fa\u503c"),(0,c.kt)("li",{parentName:"ul"},"\u50cf\u9019\u6a23\u7684\u4f7f\u7528\u6848\u4f8b\uff0c\u662f\u7368\u7acb\u65bc\u8a2d\u5099\u63a7\u5236 UI \u7684 IO \u8a2d\u5099\u3002")),(0,c.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,c.kt)("p",null,"\u70ba\u4e86\u56e0\u61c9\u5343\u8b8a\u842c\u5316\u7684\u5546\u696d\u9700\u6c42\uff0c\u696d\u52d9\u908f\u8f2f\u5c64\u7684\u62bd\u8c61\u662f\u5fc5\u8981\u4e14\u56f0\u96e3\u7684\u3002"))}f.isMDXComponent=!0}}]);