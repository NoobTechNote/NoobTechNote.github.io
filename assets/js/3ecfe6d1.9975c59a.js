"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[3234],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>d});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=l.createContext({}),u=function(e){var t=l.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=u(e.components);return l.createElement(m.Provider,{value:t},e.children)},k="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,m=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=u(a),s=r,d=k["".concat(m,".").concat(s)]||k[s]||N[s]||n;return a?l.createElement(d,i(i({ref:t},o),{},{components:a})):l.createElement(d,i({ref:t},o))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=s;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[k]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<n;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}s.displayName="MDXCreateElement"},94181:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>N,frontMatter:()=>n,metadata:()=>p,toc:()=>u});var l=a(87462),r=(a(67294),a(3905));const n={title:"Ch1: What is Web API",sidebar_label:"Ch1: What is Web API",sidebar_position:1},i=void 0,p={unversionedId:"sg/web-api-the-good-parts/ch1-what-is-web-api",id:"sg/web-api-the-good-parts/ch1-what-is-web-api",title:"Ch1: What is Web API",description:"\u4ec0\u9ebc\u662fWeb API",source:"@site/docs/sg/web-api-the-good-parts/ch1-what-is-web-api.md",sourceDirName:"sg/web-api-the-good-parts",slug:"/sg/web-api-the-good-parts/ch1-what-is-web-api",permalink:"/docs/sg/web-api-the-good-parts/ch1-what-is-web-api",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/web-api-the-good-parts/ch1-what-is-web-api.md",tags:[],version:"current",lastUpdatedBy:"David C Tsai",lastUpdatedAt:1698109986,formattedLastUpdatedAt:"Oct 24, 2023",sidebarPosition:1,frontMatter:{title:"Ch1: What is Web API",sidebar_label:"Ch1: What is Web API",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Web API the Good Parts",permalink:"/docs/sg/web-api-the-good-parts/"},next:{title:"Ch2: What is an API Endpoint and HTTP methods ?",permalink:"/docs/sg/web-api-the-good-parts/ch2-what-is-an-api-endpoint-and-http-methods"}},m={},u=[{value:"\u4ec0\u9ebc\u662fWeb API",id:"\u4ec0\u9ebc\u662fweb-api",level:2},{value:"1.1 WebAPI\u7684\u91cd\u8981\u6027",id:"11-webapi\u7684\u91cd\u8981\u6027",level:2},{value:"1.2\u5404\u7a2e\u5404\u6a23\u7684API\u6a21\u5f0f",id:"12\u5404\u7a2e\u5404\u6a23\u7684api\u6a21\u5f0f",level:2},{value:"1.3\u61c9\u8a72\u901a\u904eAPI\u516c\u958b\u4ec0\u9ebc",id:"13\u61c9\u8a72\u901a\u904eapi\u516c\u958b\u4ec0\u9ebc",level:2},{value:"1.4\u8a2d\u8a08\u512a\u7f8e\u7684WebAPI\u7684\u91cd\u8981\u6027",id:"14\u8a2d\u8a08\u512a\u7f8e\u7684webapi\u7684\u91cd\u8981\u6027",level:2},{value:"1.5\u5982\u4f55\u7f8e\u5316WebAPI",id:"15\u5982\u4f55\u7f8e\u5316webapi",level:2},{value:"1.6 REST\u8207WebAPI",id:"16-rest\u8207webapi",level:2},{value:"REST",id:"rest",level:3},{value:"Example of RESTful API",id:"example-of-restful-api",level:3},{value:"1.7\u4f5c\u70ba\u76ee\u6a19\u5c0d\u8c61\u7684\u958b\u767c\u4eba\u54e1\u6578\u91cf\u8207API\u7684\u8a2d\u8a08\u601d\u60f3",id:"17\u4f5c\u70ba\u76ee\u6a19\u5c0d\u8c61\u7684\u958b\u767c\u4eba\u54e1\u6578\u91cf\u8207api\u7684\u8a2d\u8a08\u601d\u60f3",level:2},{value:"LSUD\u8207SSKD",id:"lsud\u8207sskd",level:3}],o={toc:u},k="wrapper";function N(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,l.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ec0\u9ebc\u662fweb-api"},"\u4ec0\u9ebc\u662fWeb API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"API - Application Programming Interface",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7d66\u7a0b\u5f0f\u770b\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"\u4ecb\u9762")),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u7a2e\u5c01\u88dd - \u5916\u90e8\u4e0d\u9700\u8981\u77e5\u9053\u5167\u90e8\u5be6\u4f5c\u7d30\u7bc0"))),(0,r.kt)("li",{parentName:"ul"},"Web API",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u900f\u904eHTTP\u63d0\u4f9b\u7684API"),(0,r.kt)("li",{parentName:"ul"},"\u56e0\u70ba\u662fHTTP\uff0c\u57fa\u672c\u4e0a\u5c31\u662f\u4ee5\u6210\u5c0d\u7684request/response\u505a\u8cc7\u6e90\u7d04\u5b9a"),(0,r.kt)("li",{parentName:"ul"},"\u56e0\u70ba\u76ee\u6a19\u662f\u63d0\u4f9b",(0,r.kt)("inlineCode",{parentName:"li"},"\u4ecb\u9762"),"\uff0c\u5f7c\u6b64\u901a\u5e38\u6703\u7d04\u5b9a\u4e00\u7a2e\u5171\u901a\u7684\u7684serialization(\u5e8f\u5217\u5316)\u65b9\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u5e7e\u500b\u5e38\u898b\u7684Web API serializer",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"JSON",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/zh-tw/JSON-RPC"},"JSON-RPC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/SECS/GEM"},"SECS/GEM")," (",(0,r.kt)("a",{parentName:"li",href:"https://docs.inductiveautomation.com/pages/viewpage.action?pageId=19957137"},"Example"),")"))),(0,r.kt)("li",{parentName:"ul"},"XML",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/zh-tw/XML-RPC"},"XML-RPC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/zh-tw/%E7%AE%80%E5%8D%95%E5%AF%B9%E8%B1%A1%E8%AE%BF%E9%97%AE%E5%8D%8F%E8%AE%AE"},"SOAP")))),(0,r.kt)("li",{parentName:"ul"},"GraphQL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/zh-tw/Protocol_Buffers"},"ProtoBuf"))))))),(0,r.kt)("admonition",{title:"Discussion",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u70ba\u4ec0\u9ebcYAML\u597d\u50cf\u6bd4\u8f03\u5c11\u898b\uff1fYAML\u4e0d\u80fd\u62ff\u4f86\u642dAPI\u55ce\uff1f")),(0,r.kt)("h2",{id:"11-webapi\u7684\u91cd\u8981\u6027"},"1.1 WebAPI\u7684\u91cd\u8981\u6027"),(0,r.kt)("p",null,"\u4f60\u7684\u670d\u52d9\u5982\u679c\u53ea\u6709\u4eba\u985e\u624d\u80fd\u7528..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8457\u540d\u7684\u6210\u529f\u4f8b\u5b50"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Amazon Product Advertising API",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"2003\u5c0d\u5916\u63d0\u4f9b\u670d\u52d9"),(0,r.kt)("li",{parentName:"ul"},"AWS\u7684\u767c\u6e90\u5730",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728S3, EC2\u9084\u672a\u5c0d\u5916\u516c\u958b\u7684\u6642\u4ee3"),(0,r.kt)("li",{parentName:"ul"},"AWS = Product Advertising API"))),(0,r.kt)("li",{parentName:"ul"},"\u8b93\u5ee3\u544a\u8ddf\u5ee3\u544a\u71df\u92b7\u806f\u76df\u5408\u4f5c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7c21\u55ae\u5730\u5c07Amazon\u7684\u5546\u54c1\u900f\u904e\u81ea\u5df1\u7684\u7db2\u7ad9\u9032\u884c\u92b7\u552e"))))),(0,r.kt)("li",{parentName:"ul"},"Twitter",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"2006\u958b\u59cb\u5c0d\u5916\u516c\u958bWeb API"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528API\uff0c\u5e7e\u4e4e\u53ef\u4ee5\u5b8c\u6210\u6240\u6709Twitter\u4e0a\u7684\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"\u50ac\u751f\u4e86Twitter\u5468\u908a\u7684\u751f\u614b\u5708"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53ea\u80fd\u900f\u904eAPI\u4f7f\u7528\u7684SaaS"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.twilio.com/"},"Twilio")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stripe.com/"},"Stripe"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u300e\u6211\u5011\u6240\u670d\u52d9\u7684\u662f\u958b\u767c\u8005\u300f"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u56e0\u70ba\u5176\u4ed6\u670d\u52d9\u63d0\u4f9b\u4e86Web API\uff0c\u6240\u4ee5\u80fd\u63d0\u4f9b\u984d\u5916\u7684\u6574\u5408\u6027"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://getpocket.com/"},"Pocket")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://feedly.com/"},"Feedly")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ifttt.com/"},"IFTTT")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ec0\u9ebc\u90fd\u8981\u505a\u6210API"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Garry Tan: Y-Combinator\u7684\u8001\u95c6\u4e4b\u4e00\uff0c\u57282013\u5e74\u5beb\u7684\u6587\u7ae0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.garrytan.com/the-api-ization-of-everything"},"The API-ization of everything"))))),(0,r.kt)("h2",{id:"12\u5404\u7a2e\u5404\u6a23\u7684api\u6a21\u5f0f"},"1.2\u5404\u7a2e\u5404\u6a23\u7684API\u6a21\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ProgrammableWeb"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6536\u96c6\u4e00\u5806\u516c\u958bAPI\u4e26\u63d0\u4f9b\u641c\u5c0b\u529f\u80fd\u7684\u670d\u52d9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.programmableweb.com/"},"https://www.programmableweb.com/")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u88fd\u505a",(0,r.kt)("del",{parentName:"p"},"\u516c\u958b"),"API\u6642\uff0c\u8981\u4ee5\u672a\u77e5\u7684\u7b2c\u4e09\u65b9\u80fd\u5920\u9806\u5229\u70ba\u539f\u5247\u9032\u884c\u8a2d\u8a08"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u597d\u7684\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"\u4ecb\u9762"),"\u672c\u8eab\u5bb9\u6613\u7406\u89e3"),(0,r.kt)("li",{parentName:"ol"},"Authentication"),(0,r.kt)("li",{parentName:"ol"},"Throttling"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7528\u4f86\u8b93\u5176\u4ed6\u670d\u52d9\u5d4c\u5165"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Web Widgets",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Youtube Embed Player",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://www.youtube.com/embed/<VideoId>")))),(0,r.kt)("li",{parentName:"ul"},"\u5728\u9019\u6a23\u7684\u5834\u666f\u4e2d\uff0c\u8981\u6ce8\u610fCross Domain\u7684support",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Origin")))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Mobile backend"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7d66\u884c\u52d5\u88dd\u7f6e\u4f7f\u7528\u7684Web backend",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c31\u662f\u4e00\u7a2eWeb API"),(0,r.kt)("li",{parentName:"ul"},"\u7e3d\u4e0d\u6703\u60f3\u8981response HTML\u7d66mobile device..."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u516c\u53f8\u5167\u7cfb\u7d71\u7684integration"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5404\u7a2e\u5546\u696d\u89e3\u6c7a\u65b9\u6848\u5176\u5be6\u90fd\u6709\u63d0\u4f9bAPI\u7684\u80fd\u529b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Jira"),(0,r.kt)("li",{parentName:"ul"},"Confluence"),(0,r.kt)("li",{parentName:"ul"},"Saleforce"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(\u88dc\u5145) Web Backend as Service - ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/"},"Google Firebase")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u5e38\u62ff\u4f86\u505aMobile App backend",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f46\u5176\u5be6\u505a\u597d\u5f8c\u63d0\u4f9b\u7684\u4ecb\u9762\u5c31\u662fWeb API"),(0,r.kt)("li",{parentName:"ul"},"\u4f60\u8981\u62ff\u4f86\u4e32browser web frontend\u4e5f\u53ef\u4ee5")))))),(0,r.kt)("h2",{id:"13\u61c9\u8a72\u901a\u904eapi\u516c\u958b\u4ec0\u9ebc"},"1.3\u61c9\u8a72\u901a\u904eAPI\u516c\u958b\u4ec0\u9ebc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6700\u7c21\u6f54\u7684\u65b9\u6cd5 - \u5c07\u6240\u6709\u4f60\u63d0\u4f9b\u670d\u52d9\u7684\u6771\u897f\u901a\u901a\u63d0\u4f9bAPI\u5b58\u53d6\u65b9\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u4f46\u60f3\u4e00\u4e0b\u4f60\u7684\u5546\u696d\u672c\u8cea\u662f\u4ec0\u9ebc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5bb6\u5ead\u8cec\u55ae\u8a18\u5e33\u670d\u52d9\u5177\u6709\u5e63\u503c\u8f49\u63db\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5e63\u503c\u8f49\u63dbAPI - Yes or No?"))),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9bAPI\u662f\u5426\u6703\u5e36\u4f86\u98a8\u96aa\uff1f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u516c\u958bAPI\u6703\u8b93\u4eba\u5bb9\u6613\u780d\u7ad9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u505athrottling"),(0,r.kt)("li",{parentName:"ul"},"\u7e3d\u4e0d\u8a72\u5e0c\u671b\u4f60\u7684\u670d\u52d9\u6c92\u4eba\u7528\u5427"))),(0,r.kt)("li",{parentName:"ul"},"\u516c\u958bAPI\u53ef\u4ee5\u51dd\u805a\u793e\u7fa4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Google Map")))))),(0,r.kt)("admonition",{title:"Discussion",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u7cfb\u7d71\u5c0d\u5916\u63d0\u4f9b\u670d\u52d9\u4e86\uff0c\u4f46\u53ea\u8981\u4e0d\u63d0\u4f9bWeb API\uff0c\u5167\u5bb9\u6703\u6bd4\u8f03\u5b89\u5168\u4e0d\u5bb9\u6613\u88ab\u76dc\u8d70")),(0,r.kt)("admonition",{title:"Discussion",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"API\u8a2d\u8a08\u4f86\u662f\u7d66\u5916\u90e8\u5730\u65b9\u4e09\u65b9\u4f7f\u7528\u7684")),(0,r.kt)("h2",{id:"14\u8a2d\u8a08\u512a\u7f8e\u7684webapi\u7684\u91cd\u8981\u6027"},"1.4\u8a2d\u8a08\u512a\u7f8e\u7684WebAPI\u7684\u91cd\u8981\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6613\u65bc\u4f7f\u7528",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"API\u7684\u4f7f\u7528\u8005\u662f\u958b\u767c\u4eba\u54e1"),(0,r.kt)("li",{parentName:"ul"},"\u958b\u767c\u4eba\u54e1\u627f\u53d7\u7684\u58d3\u529b\u5c0d\u8edf\u9ad4\u54c1\u8cea\u6703\u6709\u5f71\u97ff"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679cAPI\u96e3\u4ee5\u4f7f\u7528\uff0c\u90a3\u516c\u958bAPI\u7684\u610f\u7fa9\u4e5f\u5c31\u4e0d\u5927\u4e86"))),(0,r.kt)("li",{parentName:"ul"},"\u4fbf\u65bc\u4fee\u6539",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u88ab\u7b2c\u4e09\u65b9\u8abf\u7528 - \u5f88\u96e3\u4e0d\u544a\u77e5\u5c31\u505abreaking changes"),(0,r.kt)("li",{parentName:"ul"},"\u5728API\u4fee\u6539\u6642\u76e1\u53ef\u80fd\u4e0d\u5f71\u97ff\u65e2\u6709\u4f7f\u7528\u8005"))),(0,r.kt)("li",{parentName:"ul"},"\u5065\u58ef",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7562\u7adf\u4e5f\u662f\u4e00\u7a2eWeb Application"),(0,r.kt)("li",{parentName:"ul"},"\u9700\u5145\u5206\u8003\u91cf\u5b89\u5168\u554f\u984c"))),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u6015\u516c\u4e4b\u65bc\u773e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u670d\u52d9\u672c\u8eab\u9b45\u529b\u7121\u7aae\uff0cAPI\u5c31\u7b97\u8a2d\u8a08\u7684\u5f88\u721b\u53ef\u80fd\u958b\u767c\u8005\u9084\u662f\u4e0d\u5f97\u4e0d\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u4f46\u721b\u5230\u4e00\u500b\u7a0b\u5ea6\uff0c\u53ef\u80fd\u6703\u76f4\u63a5\u5bb3\u4f60\u8058\u4e0d\u5230\u597d\u7684\u958b\u767c\u8005\u3002\u9019\u7a2e\u5bb3\u6015\u6703\u4f7f\u5718\u968a\u9677\u5165\u8ca0\u9762\u5faa\u74b0")))),(0,r.kt)("h2",{id:"15\u5982\u4f55\u7f8e\u5316webapi"},"1.5\u5982\u4f55\u7f8e\u5316WebAPI"),(0,r.kt)("p",null,"\u9019\u672c\u66f8\u7684\u4e3b\u65e8 - \u8acb\u5927\u5bb6\u597d\u597d\u671f\u5f85(?)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u7167\u898f\u7bc4\u8a2d\u8a08"),(0,r.kt)("li",{parentName:"ul"},"\u9075\u5b88\u4e8b\u5be6\u6a19\u6e96",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u300e\u4e2d\u5b78\u4e8c\u5e74\u7d1a\u7684\u5b78\u751f\u8981\u505a\u51fa\u524d\u6240\u672a\u898b\u7684\u66a2\u92b7\u6b4c\u66f2\u300f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6709\u6a5f\u6703\uff0c\u4f46\u4e0d\u9ad8"))),(0,r.kt)("li",{parentName:"ul"},"\u8a2d\u8a08\u898f\u7bc4\u80fd\u5920\u6210\u70ba\u6a19\u6e96",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e00\u5b9a\u6709\u4ed6\u7684\u7406\u7531"))),(0,r.kt)("li",{parentName:"ul"},"\u77ad\u89e3\u5404\u7a2e\u6a19\u6e96\u8a2d\u8a08\u80cc\u5f8c\u7684\u539f\u56e0\u4ee5\u53ca\u512a\u7f3a\u9ede"),(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528\u524d\u4eba\u4ee5\u53ca\u793e\u7fa4\u7684\u529b\u91cf")))),(0,r.kt)("h2",{id:"16-rest\u8207webapi"},"1.6 REST\u8207WebAPI"),(0,r.kt)("h3",{id:"rest"},"REST"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Representational state transfer (\u5177\u4ee3\u8868\u6027\u7684\u72c0\u614b\u8f49\u79fb)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7b26\u5408REST\u7cbe\u795e\u7684API\u8a2d\u8a08\u7a31\u70baRESTful API"),(0,r.kt)("li",{parentName:"ul"},"\u6c92\u6709\u898f\u5b9aREST\u53ea\u80fd\u7528\u5728HTTP\uff0c\u53ea\u662f\u5728HTTP\u6bd4\u8f03\u6d41\u884c\u800c\u5df2"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Roy Fielding (2000)\u7684",(0,r.kt)("a",{parentName:"p",href:"https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm"},"\u535a\u58eb\u8ad6\u6587"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6709\u516d\u500b\u8981\u7d20"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Uniform interface (\u4e00\u81f4\u7684\u4ecb\u9762)"),(0,r.kt)("li",{parentName:"ul"},"Client\u2013server (\u7528\u6236/\u4f3a\u670d\u67b6\u69cb)"),(0,r.kt)("li",{parentName:"ul"},"Stateless (\u7121\u72c0\u614b)"),(0,r.kt)("li",{parentName:"ul"},"Cacheable (\u53ef\u88ab\u5feb\u53d6)"),(0,r.kt)("li",{parentName:"ul"},"Layered system (\u5206\u5c64\u7cfb\u7d71)"),(0,r.kt)("li",{parentName:"ul"},"Code on demand (\u4f9d\u7167\u9700\u8981\u56de\u61c9)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b26\u5408REST\u7cbe\u795e\u7684Web API"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4e0d\u80fd\u5728URL\u4e2d\u4f7f\u7528\u52d5\u8a5e")),(0,r.kt)("li",{parentName:"ul"},"v1, v2\u7b49\u7248\u672c\u7de8\u865f\u4e26\u4e0d\u88ab\u5141\u8a31")))),(0,r.kt)("h3",{id:"example-of-restful-api"},"Example of RESTful API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP method"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/product"),(0,r.kt)("td",{parentName:"tr",align:null},"Product List")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/product/1"),(0,r.kt)("td",{parentName:"tr",align:null},"Product 1 Detail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"/product"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a product")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PUT/PATCH"),(0,r.kt)("td",{parentName:"tr",align:null},"/product/1"),(0,r.kt)("td",{parentName:"tr",align:null},"Update detail of product 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"/product/1"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete product 1")))),(0,r.kt)("admonition",{title:"Discussion",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8981\u5c0dproduct\u6e05\u55ae\uff0c\u4f7f\u7528\u591a\u500b\u689d\u4ef6\u505a\u641c\u5c0b\u8981\u600e\u9ebc\u8fa6\uff1f")),(0,r.kt)("admonition",{title:"Discussion",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4f7f\u7528REST\u98a8\u683c\u8a2d\u8a08\u7684API\u4e00\u5b9a\u6bd4\u8f03\u597d\uff0c\u5c0d\u55ce\uff1f")),(0,r.kt)("h2",{id:"17\u4f5c\u70ba\u76ee\u6a19\u5c0d\u8c61\u7684\u958b\u767c\u4eba\u54e1\u6578\u91cf\u8207api\u7684\u8a2d\u8a08\u601d\u60f3"},"1.7\u4f5c\u70ba\u76ee\u6a19\u5c0d\u8c61\u7684\u958b\u767c\u4eba\u54e1\u6578\u91cf\u8207API\u7684\u8a2d\u8a08\u601d\u60f3"),(0,r.kt)("h3",{id:"lsud\u8207sskd"},"LSUD\u8207SSKD"),(0,r.kt)("p",null,"Netflix\u7684API\u5de5\u7a0b\u7e3d\u76e3Daniel Jacobson\uff0c\u5728",(0,r.kt)("a",{parentName:"p",href:"https://thenextweb.com/news/future-api-design-orchestration-layer"},"The future of API design: The orchestration layer"),"\u4e2d\u63d0\u5230\u7684\uff0c\u8a2d\u8a08API\u8981\u670d\u52d9\u7684\u5169\u500b\u65cf\u7fa4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LSUD (Large Set of Unknown Developers)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u516c\u958b\u7684API\uff0c\u4efb\u4f55\u4eba\u90fd\u80fd\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u8981\u6e05\u695a\u900f\u660e"),(0,r.kt)("li",{parentName:"ul"},"\u8981\u76e1\u53ef\u80fd\u8a2d\u8a08\u7684\u901a\u7528"))),(0,r.kt)("li",{parentName:"ul"},"SSKD (Small Set of Known Developers)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u516c\u53f8\u5167\u7684\u5c11\u91cf\u65cf\u7fa4\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u80fd\u5920\u4f7f\u7528\u7684\u4eba\u6709\u9650"),(0,r.kt)("li",{parentName:"ul"},"\u8b93\u9019\u4e9b\u5c11\u91cf\u65cf\u7fa4\u6613\u65bc\u4e0a\u624b\u5c31\u5920\u4e86")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4e86\u89e3\u4f60\u7684\u5ba2\u6236\u624d\u6709\u8fa6\u6cd5\u8a2d\u8a08\u597d\u7522\u54c1")))}N.isMDXComponent=!0}}]);