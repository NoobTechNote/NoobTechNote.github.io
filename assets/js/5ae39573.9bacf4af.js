"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[739],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return v}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),v=i,k=c["".concat(p,".").concat(v)]||c[v]||m[v]||r;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function v(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5696:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],o={title:"Ch5: \u958b\u767c\u65b9\u4fbf\u66f4\u6539\u8a2d\u8a08\u7684 Web API",sidebar_label:"Ch5: \u958b\u767c\u65b9\u4fbf\u66f4\u6539\u8a2d\u8a08\u7684 Web API",sidebar_position:5},p=void 0,s={unversionedId:"sg/web-api-the-good-parts/ch5-design-apis-changed-easily",id:"sg/web-api-the-good-parts/ch5-design-apis-changed-easily",title:"Ch5: \u958b\u767c\u65b9\u4fbf\u66f4\u6539\u8a2d\u8a08\u7684 Web API",description:"\u771f\u6b63\u7684\u6311\u6230\u662f API \u767c\u5e03\u5f8c\u7684\u5f8c\u7e8c\u7dad\u8b77\u5de5\u4f5c !",source:"@site/docs/sg/web-api-the-good-parts/ch5-design-apis-changed-easily.md",sourceDirName:"sg/web-api-the-good-parts",slug:"/sg/web-api-the-good-parts/ch5-design-apis-changed-easily",permalink:"/docs/sg/web-api-the-good-parts/ch5-design-apis-changed-easily",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/web-api-the-good-parts/ch5-design-apis-changed-easily.md",tags:[],version:"current",lastUpdatedBy:"Mech",lastUpdatedAt:1660582913,formattedLastUpdatedAt:"8/15/2022",sidebarPosition:5,frontMatter:{title:"Ch5: \u958b\u767c\u65b9\u4fbf\u66f4\u6539\u8a2d\u8a08\u7684 Web API",sidebar_label:"Ch5: \u958b\u767c\u65b9\u4fbf\u66f4\u6539\u8a2d\u8a08\u7684 Web API",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Ch4: \u6700\u5927\u5316\u7684\u5229\u7528HTTP Protocol",permalink:"/docs/sg/web-api-the-good-parts/ch4-maximize-utilization-of-http"},next:{title:"Ch6: \u958b\u767c\u7262\u56fa\u7684Web API",permalink:"/docs/sg/web-api-the-good-parts/ch6-web-api-security-and-stability"}},d={},m=[{value:"5.1 \u65b9\u4fbf\u66f4\u6539\u8a2d\u8a08\u7684\u91cd\u8981\u6027",id:"51-\u65b9\u4fbf\u66f4\u6539\u8a2d\u8a08\u7684\u91cd\u8981\u6027",level:2},{value:"5.1.1 \u516c\u958b\u767c\u4f48\u7684 API",id:"511-\u516c\u958b\u767c\u4f48\u7684-api",level:3},{value:"5.1.2 \u9762\u5411\u624b\u6a5f\u61c9\u7528\u7684 API",id:"512-\u9762\u5411\u624b\u6a5f\u61c9\u7528\u7684-api",level:3},{value:"5.1.3 Web \u670d\u52d9\u4f7f\u7528 API",id:"513-web-\u670d\u52d9\u4f7f\u7528-api",level:3},{value:"5.2 \u900f\u904e\u7248\u672c\u8a0a\u606f\u4f86\u7ba1\u7406 API",id:"52-\u900f\u904e\u7248\u672c\u8a0a\u606f\u4f86\u7ba1\u7406-api",level:2},{value:"5.2.1 URI \u4e2d\u5d4c\u5165\u7248\u672c\u865f",id:"521-uri-\u4e2d\u5d4c\u5165\u7248\u672c\u865f",level:3},{value:"5.2.2 \u5982\u4f55\u6dfb\u52a0\u7248\u672c\u865f",id:"522-\u5982\u4f55\u6dfb\u52a0\u7248\u672c\u865f",level:3},{value:"5.2.3 \u5728\u67e5\u8a62\u5b57\u4e32\u88e1\u52a0\u7248\u672c\u865f",id:"523-\u5728\u67e5\u8a62\u5b57\u4e32\u88e1\u52a0\u7248\u672c\u865f",level:3},{value:"5.2.4 \u900f\u904e\u5a92\u9ad4\u985e\u578b\u6307\u5b9a\u7248\u672c\u8a0a\u606f",id:"524-\u900f\u904e\u5a92\u9ad4\u985e\u578b\u6307\u5b9a\u7248\u672c\u8a0a\u606f",level:3},{value:"5.2.5 \u61c9\u8a72\u63a1\u7528\u4f55\u7a2e\u65b9\u5f0f",id:"525-\u61c9\u8a72\u63a1\u7528\u4f55\u7a2e\u65b9\u5f0f",level:3},{value:"5.3 \u7248\u672c\u8b8a\u66f4\u7684\u65b9\u91dd",id:"53-\u7248\u672c\u8b8a\u66f4\u7684\u65b9\u91dd",level:2},{value:"5.4 \u7d42\u6b62\u63d0\u4f9b API",id:"54-\u7d42\u6b62\u63d0\u4f9b-api",level:2},{value:"5.4.1 \u6848\u4f8b\uff1a Twitter",id:"541-\u6848\u4f8b-twitter",level:3},{value:"5.4.2 \u9810\u5148\u5099\u597d\u7d42\u6b62\u670d\u52d9\u7684\u898f\u7bc4",id:"542-\u9810\u5148\u5099\u597d\u7d42\u6b62\u670d\u52d9\u7684\u898f\u7bc4",level:3},{value:"5.4.3 \u5728\u4f7f\u7528\u689d\u6b3e\u8f09\u660e\u652f\u63f4\u7684\u671f\u9650",id:"543-\u5728\u4f7f\u7528\u689d\u6b3e\u8f09\u660e\u652f\u63f4\u7684\u671f\u9650",level:3},{value:"5.5 \u7de8\u6392\u5c64",id:"55-\u7de8\u6392\u5c64",level:2},{value:"5.6 \u5c0f\u7d50",id:"56-\u5c0f\u7d50",level:2}],c={toc:m};function v(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u771f\u6b63\u7684\u6311\u6230\u662f API \u767c\u5e03\u5f8c\u7684\u5f8c\u7e8c\u7dad\u8b77\u5de5\u4f5c !"))),(0,r.kt)("h2",{id:"51-\u65b9\u4fbf\u66f4\u6539\u8a2d\u8a08\u7684\u91cd\u8981\u6027"},"5.1 \u65b9\u4fbf\u66f4\u6539\u8a2d\u8a08\u7684\u91cd\u8981\u6027"),(0,r.kt)("p",null,"\u96a8\u6642\u9593\u9077\u79fb\uff0cAPI \u61c9\u7528\u6703\u96a8\u8457\u4f7f\u7528\u60c5\u6cc1\u6709\u6240\u8abf\u6574\uff0c\u4e0d\u65b7\u5730\u767c\u751f\u8b8a\u66f4 e.g. \u5f37\u5316\u67d0\u9805\u529f\u80fd\u3001\u4fee bug \u7b49\u3002"),(0,r.kt)("h3",{id:"511-\u516c\u958b\u767c\u4f48\u7684-api"},"5.1.1 \u516c\u958b\u767c\u4f48\u7684 API"),(0,r.kt)("p",null,"\u8457\u540d\u7684\u516c\u958b API\uff1a Facebook, Google"),(0,r.kt)("p",null,"\u82e5\u7121\u6cd5\u4fdd\u8b49\u4f7f\u7528\u8005\u80fd\u5f88\u597d\u5730\u61c9\u5c0d API \u8b8a\u66f4\u5e36\u4f86\u7684\u7d50\u679c\uff0c\u6703\u5c0e\u81f4\u4f7f\u7528\u8a72 API \u7684\u7dda\u4e0a\u670d\u52d9\u767c\u751f\u5404\u7a2e\u554f\u984c\uff0c\u8b93\u4eba\u4e0d\u5f97\u4e0d\u53bb\u8655\u7406\u3002"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6c92\u4eba\u60f3\u53bb\u7528\u7a81\u7136\u8b8a\u66f4\u8a2d\u8a08\u898f\u7bc4\uff0c\u8b93\u4eba\u89ba\u5f97\u4e0d\u53ef\u9760\u7684 API\u3002"))),(0,r.kt)("h3",{id:"512-\u9762\u5411\u624b\u6a5f\u61c9\u7528\u7684-api"},"5.1.2 \u9762\u5411\u624b\u6a5f\u61c9\u7528\u7684 API"),(0,r.kt)("p",null,"\u5c6c\u65bc SSKD(Small Set of Known Developers)\uff0cAPI \u8b8a\u66f4\u9020\u6210\u7684\u5f71\u97ff\u76f8\u5c0d\u8f03\u5c0f\u3002"),(0,r.kt)("p",null,"\u66f4\u65b0\u53d6\u6c7a\u65bc\u7528\u6236\u7aef\uff0c\u82e5\u7528\u6236\u4e0d\u4e3b\u52d5\u66f4\u65b0\uff0c\u624b\u6a5f\u7aef\u7684\u7248\u672c\u59cb\u7d42\u8655\u65bc\u820a\u7248\u7684\u72c0\u614b\u3002 "),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u53ef\u80fd\u6703\u9047\u5230\u7528\u6236\u7aef\u7684\u624b\u6a5f\u61c9\u7528\u9084\u7dad\u6301\u820a\u7684\u7248\u672c\uff0cAPI \u8b8a\u66f4\u53ef\u80fd\u9020\u6210\u7248\u672c\u76f8\u5bb9\u7684\u554f\u984c\u3002"))),(0,r.kt)("h3",{id:"513-web-\u670d\u52d9\u4f7f\u7528-api"},"5.1.3 Web \u670d\u52d9\u4f7f\u7528 API"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u7559\u610f\u5feb\u53d6\u8cc7\u6599\u5728\u700f\u89bd\u5668\u3001\u624b\u6a5f\u7aef\u4e0a\u7684\u66f4\u65b0"))),(0,r.kt)("h2",{id:"52-\u900f\u904e\u7248\u672c\u8a0a\u606f\u4f86\u7ba1\u7406-api"},"5.2 \u900f\u904e\u7248\u672c\u8a0a\u606f\u4f86\u7ba1\u7406 API"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2360).Z,width:"1242",height:"562"}),"\n\u540c\u6642\u63d0\u4f9b\u591a\u500b\u7248\u672c\u7684 API\uff0c\u8b93\u65b0\u820a\u7248\u672c\u7684 API \u5171\u5b58\u3002"),(0,r.kt)("h3",{id:"521-uri-\u4e2d\u5d4c\u5165\u7248\u672c\u865f"},"5.2.1 URI \u4e2d\u5d4c\u5165\u7248\u672c\u865f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://api.example.com/v2\nhttps://example.com/api/v2\n\n---\nTwitter\nhttps://api.twitter.com/1\nhttps://api.twitter.com/1.1\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," \u7528\u65bc\u8868\u793a\u7248\u672c\u5728\u8a9e\u610f\u4e0a\u66f4\u5bb9\u6613\u8b93\u4eba\u7406\u89e3 "))),(0,r.kt)("h3",{id:"522-\u5982\u4f55\u6dfb\u52a0\u7248\u672c\u865f"},"5.2.2 \u5982\u4f55\u6dfb\u52a0\u7248\u672c\u865f"),(0,r.kt)("p",null,"\u8edf\u9ad4\u7248\u672c\u898f\u7bc4 - ",(0,r.kt)("strong",{parentName:"p"},"\u8a9e\u610f\u5316\u7248\u672c\u63a7\u5236(Semantic Versioning)"),"\uff1a"),(0,r.kt)("p",null,"\u7bc4\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"1.2.3\n")),(0,r.kt)("p",null,"\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},".")," \u9023\u63a5\u4e09\u500b\u6578\u5b57\u7d44\u6210\uff0c\u5206\u5225\u8868\u793a\u4e0d\u540c\u5c64\u7d1a\u7684\u7248\u672c\u865f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u7248\u672c\u865f\uff1a\u4e0d\u5411\u4e0b\u76f8\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"\u6b21\u7248\u672c\u865f\uff1a\u5411\u4e0b\u76f8\u5bb9\u7684\u8b8a\u66f4 or \u79fb\u9664\u67d0\u500b\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u4fee\u88dc\u7248\u672c\u865f\uff1a\u53ea\u6709\u4fee\u6b63\u90e8\u5206 bug")),(0,r.kt)("p",null,"\u7528\u65e5\u671f\u4f86\u63cf\u8ff0\u7248\u672c\u865f"),(0,r.kt)("p",null,"\u6848\u4f8b\uff1a\u6a02\u5929"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"service/api/IchiBaItem/Search/20130805\n")),(0,r.kt)("h3",{id:"523-\u5728\u67e5\u8a62\u5b57\u4e32\u88e1\u52a0\u7248\u672c\u865f"},"5.2.3 \u5728\u67e5\u8a62\u5b57\u4e32\u88e1\u52a0\u7248\u672c\u865f"),(0,r.kt)("p",null,"\u7bc4\u4f8b\uff1aNetflix"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/catalog/titles/series/700023522?v=1.5\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Discussion")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6709\u9047\u904e\u4ec0\u9ebc\u7279\u6b8a\u7684\u7248\u672c\u865f\u8a2d\u8a08\u55ce\uff1f"))),(0,r.kt)("h3",{id:"524-\u900f\u904e\u5a92\u9ad4\u985e\u578b\u6307\u5b9a\u7248\u672c\u8a0a\u606f"},"5.2.4 \u900f\u904e\u5a92\u9ad4\u985e\u578b\u6307\u5b9a\u7248\u672c\u8a0a\u606f"),(0,r.kt)("p",null,"\u900f\u904e",(0,r.kt)("strong",{parentName:"p"},"\u5a92\u9ad4\u985e\u578b"),"\u6307\u5b9a API \u7248\u672c\u8a0a\u606f\uff0c\u8981\u6c42 Client \u7aef\u767c\u9001\u8acb\u6c42\u6642\u5728 HTTP header \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept")," \u88e1\u5305\u542b\u7248\u672c\u8a0a\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Accept: application/vnd.example.com.v2.json \n")),(0,r.kt)("p",null,"Server \u7aef\u63a5\u6536\u5230\u8acb\u6c42\u5f8c\u6703\u56de\u50b3\u5305\u542b Content-Type & Vary \u7684 HTTP header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Content-Type: application/vnd.example.com.v2.json \nVary: Accept\n")),(0,r.kt)("h3",{id:"525-\u61c9\u8a72\u63a1\u7528\u4f55\u7a2e\u65b9\u5f0f"},"5.2.5 \u61c9\u8a72\u63a1\u7528\u4f55\u7a2e\u65b9\u5f0f"),(0,r.kt)("p",null,"\u8003\u91cf\u5230",(0,r.kt)("strong",{parentName:"p"},"\u666e\u53ca\u6027"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"\u6613\u7406\u89e3\u7a0b\u5ea6"),"\uff0c\u4e00\u822c\u6703\u63a1\u7528\u5c07\u7248\u672c\u865f\u653e\u5728 URI \u8def\u5f91\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("h2",{id:"53-\u7248\u672c\u8b8a\u66f4\u7684\u65b9\u91dd"},"5.3 \u7248\u672c\u8b8a\u66f4\u7684\u65b9\u91dd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76e1\u53ef\u80fd\u505a\u5230\u4e0d\u983b\u7e41\u66f4\u65b0 API"),(0,r.kt)("li",{parentName:"ul"},"\u76e1\u53ef\u80fd\u5411\u4e0b\u76f8\u5bb9(\u53ea\u589e\u52a0\u6b21\u7248\u672c\u865f)\uff0c\u4e0d\u5f97\u5df2\u624d\u66f4\u65b0 API \u4e3b\u7248\u672c")),(0,r.kt)("p",null,"\u91dd\u5c0d",(0,r.kt)("strong",{parentName:"p"},"\u5c0f\u5e45\u5ea6"),"\u7684\u4fee\u6539\uff0c\u4e0d\u53bb\u5347\u7d1a API \u7248\u672c\u7684\u60c5\u6cc1\uff1a \u4fee\u6539\u56de\u61c9\u7684\u8cc7\u6599\u683c\u5f0f"),(0,r.kt)("p",null,"\u7bc4\u4f8b\uff1a\u7528\u65bc\u8868\u793a\u6027\u5225\u7684\u8cc7\u6599 - ",(0,r.kt)("inlineCode",{parentName:"p"},"gender")),(0,r.kt)("p",null,"\u76f4\u63a5\u5c07 ",(0,r.kt)("inlineCode",{parentName:"p"},"gender")," \u5167\u5bb9\u7531\u6578\u503c ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," \u8abf\u6574\u70ba\u5b57\u4e32 ",(0,r.kt)("inlineCode",{parentName:"p"},"male"),",",(0,r.kt)("inlineCode",{parentName:"p"},"female")," (Bad)\u3002"),(0,r.kt)("p",null,"\u66ff ",(0,r.kt)("inlineCode",{parentName:"p"},"male"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"female")," \u7684\u5167\u5bb9\u65b0\u589e\u540d\u70ba ",(0,r.kt)("inlineCode",{parentName:"p"},"genderStr")," \u7684\u6b04\u4f4d\uff0c\u540c\u6642\u4fdd\u7559\u539f\u6578\u503c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"gender")," \u53ca\u66f4\u65b0 API \u6587\u4ef6\u5167\u5bb9\uff0c\u8a3b\u660e ",(0,r.kt)("inlineCode",{parentName:"p"},"gender")," \u5c07\u65bc\u672a\u4f86\u65b0\u7684\u4e3b\u7248\u672c\u865f\u79fb\u9664 (Good)\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Discussion")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5347\u7d1a\u7248\u672c\u865f\u7684\u6642\u6a5f\u9ede & \u767c\u5e03\u9031\u671f"))),(0,r.kt)("h2",{id:"54-\u7d42\u6b62\u63d0\u4f9b-api"},"5.4 \u7d42\u6b62\u63d0\u4f9b API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7dad\u8b77\u591a\u7248\u672c\u7684 API \u6210\u672c\u9ad8\u6602\uff0c\u9700\u9069\u6642\u7d42\u6b62\u820a\u7248\u672c\u7684 API\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7d42\u6b62\u524d\u9808\u767c\u5e03\u516c\u544a\uff0c\u4e26\u4fdd\u7559\u4e00\u6bb5\u6642\u9593\u7de9\u885d\u7d66\u7528\u6236\u3002")),(0,r.kt)("h3",{id:"541-\u6848\u4f8b-twitter"},"5.4.1 \u6848\u4f8b\uff1a Twitter"),(0,r.kt)("p",null,"\u6301\u7e8c\u767c\u5e03\u901a\u77e5\u53ca\u591a\u6b21\u9032\u884c Blackout Test"),(0,r.kt)("h3",{id:"542-\u9810\u5148\u5099\u597d\u7d42\u6b62\u670d\u52d9\u7684\u898f\u7bc4"},"5.4.2 \u9810\u5148\u5099\u597d\u7d42\u6b62\u670d\u52d9\u7684\u898f\u7bc4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Server \u7aef\u56de\u50b3 410 \u7684\u72c0\u614b\u78bc"),(0,r.kt)("li",{parentName:"ul"},"Server \u7aef\u56de\u50b3\u63d0\u793a\u7d30\u7bc0\u5167\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"\u65bc API \u6587\u4ef6\u8a3b\u660e 410 \u72c0\u614b\u78bc\u7684\u610f\u6db5")),(0,r.kt)("p",null,"\u7279\u6b8a\u60c5\u6cc1\uff1a\u624b\u6a5f\u7aef\u7684 OS \u7248\u672c\u8b8a\u5316"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u932f\u958b OS \u7248\u672c\u5347\u7d1a & API \u7248\u672c\u5347\u7d1a\u7684\u6642\u6a5f")),(0,r.kt)("h3",{id:"543-\u5728\u4f7f\u7528\u689d\u6b3e\u8f09\u660e\u652f\u63f4\u7684\u671f\u9650"},"5.4.3 \u5728\u4f7f\u7528\u689d\u6b3e\u8f09\u660e\u652f\u63f4\u7684\u671f\u9650"),(0,r.kt)("p",null,"\u65bc\u4f7f\u7528\u689d\u6b3e\u88e1\u8f09\u660e\u6703\u652f\u63f4\u820a\u7248 API \u591a\u9577\u7684\u6642\u9593\u3002"),(0,r.kt)("h2",{id:"55-\u7de8\u6392\u5c64"},"5.5 \u7de8\u6392\u5c64"),(0,r.kt)("p",null,"\u5f9e\u50b3\u7d71\u7684 ",(0,r.kt)("strong",{parentName:"p"},"One-size-fits-all APIs (OSFA APIs)")," \u6f14\u9032\u5230 ",(0,r.kt)("strong",{parentName:"p"},"API \u7de8\u6392\u5c64(API Orchestration Layer)"),"\u3002"),(0,r.kt)("p",null,"OSFA APIs: \u4ee5\u8cc7\u6e90\u70ba\u5c0e\u5411\u3001\u901a\u7528\u6027\u70ba\u8003\u91cf"),(0,r.kt)("p",null,"API Orchestration Layer:\n\u5c6c\u65bc\u6574\u5408\u6027 API\uff0c\u5c07 API \u81ea\u8eab\u7684\u7528\u9014\u548c\u5143\u7d20\u7a81\u986f\u51fa\u4f86\uff0c\u63d0\u4f9b\u7d66\u7279\u5b9a\u7684\u5de5\u7a0b\u5e2b\u6216\u61c9\u7528\u7a0b\u5f0f\u4f7f\u7528\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8a2d\u8a08\u6574\u5408\u6027 API \u8981\u5148\u4e86\u89e3\u7684\u539f\u5247\uff1a"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"\u52e2\u5fc5\u56e0\u66f4\u826f\u597d\u7684\u904b\u4f5c\u65b9\u5f0f\uff0c\u6368\u68c4\u90e8\u5206\u539f\u6709\u7684\u8a2d\u8a08"),(0,r.kt)("li",{parentName:"ol"},"\u70ba\u66f4\u6709\u6548\u904b\u7528\u7db2\u7ad9\u8cc7\u6e90\uff0c\u6574\u5408\u6027 API \u53ef\u80fd\u589e\u52a0\u6f5b\u5728\u7684\u8907\u96dc\u5ea6"),(0,r.kt)("li",{parentName:"ol"},"\u4e86\u89e3\u76ee\u6a19\u53d7\u773e")))),(0,r.kt)("p",null,"\u5e38\u898b\u7684\u6574\u5408\u6027 API \u985e\u578b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u88dd\u7f6e\u6574\u5408\u70ba\u4e3b\u7684 API"),(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u6eff\u8db3\u8acb\u6c42\u70ba\u4e3b\u7684 API"),(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u4f7f\u7528\u7d93\u9a57\u70ba\u4e3b\u7684 API")),(0,r.kt)("p",null,"\u6587\u7ae0\u4f86\u6e90:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://thenextweb.com/news/future-api-design-orchestration-layer"},"The future of API design: The orchestration layer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://netflixtechblog.com/embracing-the-differences-inside-the-netflix-api-redesign-15fd8b3dc49d"},"Embracing the Differences : Inside the Netflix API Redesign"))),(0,r.kt)("h2",{id:"56-\u5c0f\u7d50"},"5.6 \u5c0f\u7d50"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"GOOD")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u76e1\u53ef\u80fd\u6e1b\u5c11 API \u7248\u672c\u7684\u66f4\u65b0\u983b\u7387\uff0c\u540c\u6642\u6ce8\u610f\u5411\u4e0b\u76f8\u5bb9\u554f\u984c"),(0,r.kt)("li",{parentName:"ul"},"\u65bc URI \u4e2d\u5d4c\u5165 API \u4e3b\u7248\u672c\u865f"),(0,r.kt)("li",{parentName:"ul"},"\u505c\u6b62\u63d0\u4f9b API \u4e0d\u53ef\u4ee5\u7acb\u523b\u7d42\u6b62\uff0c\u8981\u7559\u7de9\u885d\u6642\u9593\uff0c\u81f3\u5c11\u6301\u7e8c\u516c\u958b\u7d04 6 \u500b\u6708")))))}v.isMDXComponent=!0},2360:function(e,t,a){t.Z=a.p+"assets/images/api-versioning-18b0becbdca1466e026a295755861a85.png"}}]);