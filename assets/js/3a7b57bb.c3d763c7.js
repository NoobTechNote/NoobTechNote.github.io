"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[1906],{3905:(e,t,l)=>{l.d(t,{Zo:()=>k,kt:()=>c});var a=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p=a.createContext({}),o=function(e){var t=a.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},k=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),s=o(l),m=n,c=s["".concat(p,".").concat(m)]||s[m]||d[m]||r;return l?a.createElement(c,i(i({ref:t},k),{},{components:l})):a.createElement(c,i({ref:t},k))}));function c(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,i=new Array(r);i[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[s]="string"==typeof e?e:n,i[1]=u;for(var o=2;o<r;o++)i[o]=l[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},25522:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var a=l(87462),n=(l(67294),l(3905));const r={title:"Ch6: \u5206\u5340",sidebar_label:"Ch6: \u5206\u5340",sidebar_position:6},i=void 0,u={unversionedId:"sg/ddia/ch6",id:"sg/ddia/ch6",title:"Ch6: \u5206\u5340",description:"\u5206\u5340\u53c8\u7a31 partition or sharding\uff0c\u5c07\u5927\u578b\u6578\u64da\u5eab\u5206\u89e3\u6210\u5c0f\u578b\u6578\u64da\u5eab\u7684\u65b9\u5f0f\u3002",source:"@site/docs/sg/ddia/ch6.mdx",sourceDirName:"sg/ddia",slug:"/sg/ddia/ch6",permalink:"/docs/sg/ddia/ch6",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/ddia/ch6.mdx",tags:[],version:"current",lastUpdatedBy:"HomaD",lastUpdatedAt:1717431011,formattedLastUpdatedAt:"Jun 3, 2024",sidebarPosition:6,frontMatter:{title:"Ch6: \u5206\u5340",sidebar_label:"Ch6: \u5206\u5340",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Ch5: \u8907\u88fd:\u7121\u4e3b\u8907\u88fd",permalink:"/docs/sg/ddia/ch5-leaderless"},next:{title:"Ch7: \u4ea4\u6613",permalink:"/docs/sg/ddia/ch7"}},p={},o=[{value:"\u5206\u5340\u8207\u8907\u88fd",id:"\u5206\u5340\u8207\u8907\u88fd",level:2},{value:"\u9375\u503c\u6578\u64da\u7684\u5206\u5340",id:"\u9375\u503c\u6578\u64da\u7684\u5206\u5340",level:3},{value:"\u6839\u64da\u9375\u5f97\u7bc4\u570d\u5206\u5340",id:"\u6839\u64da\u9375\u5f97\u7bc4\u570d\u5206\u5340",level:4},{value:"\u6839\u64da\u9375\u7684\u6563\u5217\u5206\u5340",id:"\u6839\u64da\u9375\u7684\u6563\u5217\u5206\u5340",level:4},{value:"\u8ca0\u8f09\u50be\u659c\u8207\u6d88\u9664\u71b1\u9ede",id:"\u8ca0\u8f09\u50be\u659c\u8207\u6d88\u9664\u71b1\u9ede",level:5},{value:"\u5206\u7247\u8207\u6b21\u7d1a\u7d22\u5f15",id:"\u5206\u7247\u8207\u6b21\u7d1a\u7d22\u5f15",level:2},{value:"\u6309\u6587\u6a94\u7684\u6b21\u7d1a\u7d22\u5f15",id:"\u6309\u6587\u6a94\u7684\u6b21\u7d1a\u7d22\u5f15",level:3},{value:"\u6839\u64da\u95dc\u9375\u503c\u7684\u6b21\u7d1a\u7d22\u5f15",id:"\u6839\u64da\u95dc\u9375\u503c\u7684\u6b21\u7d1a\u7d22\u5f15",level:3},{value:"\u5206\u5340\u518d\u5e73\u8861",id:"\u5206\u5340\u518d\u5e73\u8861",level:4},{value:"\u5e73\u8861\u7b56\u7565",id:"\u5e73\u8861\u7b56\u7565",level:3},{value:"\u53cd\u9762\u6559\u6750: hash mode N",id:"\u53cd\u9762\u6559\u6750-hash-mode-n",level:4},{value:"\u56fa\u5b9a\u6578\u91cf\u7684\u5206\u5340",id:"\u56fa\u5b9a\u6578\u91cf\u7684\u5206\u5340",level:4},{value:"\u52d5\u614b\u5206\u5340",id:"\u52d5\u614b\u5206\u5340",level:4},{value:"\u6309\u7bc0\u9ede\u6bd4\u4f8b\u5206\u5340",id:"\u6309\u7bc0\u9ede\u6bd4\u4f8b\u5206\u5340",level:4},{value:"\u904b\u7dad:\u624b\u52d5\u9084\u662f\u81ea\u52d5\u5e73\u8861",id:"\u904b\u7dad\u624b\u52d5\u9084\u662f\u81ea\u52d5\u5e73\u8861",level:4},{value:"\u8acb\u6c42\u8def\u7531",id:"\u8acb\u6c42\u8def\u7531",level:3},{value:"\u57f7\u884c\u4e26\u884c\u67e5\u8a62",id:"\u57f7\u884c\u4e26\u884c\u67e5\u8a62",level:4},{value:"Summary",id:"summary",level:3},{value:"\u9375\u7bc4\u570d\u5206\u5340",id:"\u9375\u7bc4\u570d\u5206\u5340",level:5},{value:"\u6563\u5217\u5206\u5340",id:"\u6563\u5217\u5206\u5340",level:5}],k={toc:o},s="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5206\u5340\u53c8\u7a31 partition or sharding\uff0c\u5c07\u5927\u578b\u6578\u64da\u5eab\u5206\u89e3\u6210\u5c0f\u578b\u6578\u64da\u5eab\u7684\u65b9\u5f0f\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MongoDB, Elasticsearch, Solr Cloud - shard"),(0,n.kt)("li",{parentName:"ul"},"HBase - Region"),(0,n.kt)("li",{parentName:"ul"},"Bigtable - tablet"),(0,n.kt)("li",{parentName:"ul"},"Cassandra, Riak - vnode"),(0,n.kt)("li",{parentName:"ul"},"Couchbase - vBucket")),(0,n.kt)("p",null,"\u5206\u5340\u7684\u7279\u6027:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53ef\u64f4\u5c55\u6027"),(0,n.kt)("li",{parentName:"ul"},"\u8cc7\u6599\u53ef\u4ee5\u5206\u4f48\u5728\u4e0d\u5171\u4eab\u96c6\u7fa4\u7684\u4e0d\u540c\u7bc0\u9ede\u4e0a"),(0,n.kt)("li",{parentName:"ul"},"\u67e5\u8a62\u8ca0\u8f09\u53ef\u4ee5\u5206\u4f48\u5728\u4e0d\u540c\u7bc0\u9ede\u4e0a")),(0,n.kt)("p",null,"\u672c\u7ae0\u5206\u584a:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u8207\u5206\u5340"),(0,n.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u5e73\u8861\u5206\u5340"),(0,n.kt)("li",{parentName:"ul"},"\u6578\u64da\u5eab\u5982\u4f55\u5c07\u8acb\u6c42\u8def\u7531\u5230\u6b63\u78ba\u7684\u5206\u5340\u4e26\u57f7\u884c\u67e5\u8a62")),(0,n.kt)("h2",{id:"\u5206\u5340\u8207\u8907\u88fd"},"\u5206\u5340\u8207\u8907\u88fd"),(0,n.kt)("p",null,"\u5206\u5340\u88ab\u8907\u88fd\u5230\u591a\u500b\u7bc0\u9ede\uff0c\u4e26\u63a1\u53d6\u4e3b\u5f9e\u8907\u88fd\u6a21\u578b\uff0c\u6bcf\u500b\u7bc0\u9ede\u53ef\u80fd\u662f\u67d0\u4e9b \u5206\u5340\u7684\u9818\u5c0e\u8005\uff0c\u540c\u6642\u662f\u5176\u4ed6\u5206\u5340\u7684\u8ffd\u96a8\u8005\uff0c\n\u4ee5\u63d0\u4f9b\u5bb9\u932f\u6027\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:l(9862).Z,width:"1728",height:"1012"})),(0,n.kt)("h3",{id:"\u9375\u503c\u6578\u64da\u7684\u5206\u5340"},"\u9375\u503c\u6578\u64da\u7684\u5206\u5340"),(0,n.kt)("p",null,"\u5206\u5340\u7684\u7406\u60f3\u4e0b\uff0c\u67e5\u8a62\u8ca0\u8f09\u6703\u5e73\u5747\u5206\u4f48\u5728\u6240\u6709\u7bc0\u9ede\u4e0a\uff0c\u800c\u4e0d\u662f\u96c6\u4e2d\u5728\u5c11\u6578\u7bc0\u9ede\u4e0a\u3002\n\u4f46\u73fe\u5be6\u60c5\u6cc1\u662f\uff0c\u6578\u64da\u96c6\u4e2d\u6216\u662f\u5e38\u88ab\u4f7f\u7528\u5728\u67d0\u500b\u5206\u5340(hot spot)\uff0c\u5c0d\u6574\u9ad4\u800c\u8a00\u662f\u504f\u659c\u7684(skew)\u3002\n\u5047\u5982\u8b93\u6578\u64da\u5e73\u5747\u5206\u914d\u5230\u4e0d\u540c\u7684\u7bc0\u9ede\uff0c\u89e3\u6c7a\u504f\u659c\u7684\u554f\u984c\uff0c\u4f46\u8981\u8b80\u53d6\u6578\u64da\u6642\uff0c\u9700\u8981\u4e26\u884c\u67e5\u8a62\u6240\u6709\u7bc0\u9ede\uff0c\u589e\u52a0\u4e86\u67e5\u8a62\u7684\u6210\u672c\u3002\n\u70ba\u4e86\u53ef\u4ee5\u5feb\u901f\u627e\u5230\u8cc7\u6599\uff0c\u5132\u5b58\u8cc7\u6599\u6642\u53ef\u4ee5\u4f7f\u7528\u9375\u503c\u7684\u65b9\u5f0f\u5efa\u7acb\u5efa\u7acb\u6578\u64da\u5eab\uff0c\u901a\u904e\u4e3b\u9375\u67e5\u8a62\uff0c\u53ef\u4ee5\u76f4\u63a5\u5b9a\u4f4d\u5230\u6b63\u78ba\u7684\u7bc0\u9ede\u3002\nex: \u767e\u79d1\u5168\u66f8\u76ee\u9304"),(0,n.kt)("h4",{id:"\u6839\u64da\u9375\u5f97\u7bc4\u570d\u5206\u5340"},"\u6839\u64da\u9375\u5f97\u7bc4\u570d\u5206\u5340"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u500b\u5206\u5340\u6709\u9375\u7bc4\u570d\uff0c\u9375\u662f\u6709\u5e8f\u7684\uff0c\u7bc4\u570d\u5167\u7684\u9375\u503c\u90fd\u5c6c\u65bc\u9019\u500b\u5206\u5340\uff0c\u53ef\u4ee5\u8f15\u6613\u77e5\u9053\u8cc7\u6599\u5728\u54ea\u500b\u5206\u5340\u5167\u9032\u800c\u641c\u5c0b\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u70ba\u4e86\u5747\u52fb\u5206\u914d\u6578\u64da\uff0c\u5206\u5340\u908a\u754c\u9700\u8981\u4f9d\u64da\u6578\u64da\u8abf\u6574\uff0c\u5206\u5340\u908a\u754c\u53ef\u4ee5\u7531\u7ba1\u7406\u54e1\u624b\u52d5\u9078\u64c7\uff0c\u4e5f\u53ef\u4ee5\u7531\u6578\u64da\u5eab\u81ea\u52d5\u9078\u64c7\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5bb9\u6613\u9032\u884c\u7bc4\u570d\u6383\u63cf\uff0c\u6703\u53bb\u7bc4\u570d\u5167\u591a\u500b\u76f8\u95dc\u7d00\u9304\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u9375\u592a\u55ae\u4e00\u7684\u8a71\u5bb9\u6613\u9020\u6210\u71b1\u9ede\u3002 ex: \u5982\u679c\u90fd\u641c\u5c0b\u4eca\u5929\u7684\u6578\u64da\uff0c\u6703\u9020\u6210\u71b1\u9ede\uff0c\u9700\u8981\u6539\u7528\u5176\u4ed6\u8cc7\u6599\u4f5c\u70ba\u4e3b\u9375\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{src:l(73711).Z,width:"1726",height:"750"})),(0,n.kt)("h4",{id:"\u6839\u64da\u9375\u7684\u6563\u5217\u5206\u5340"},"\u6839\u64da\u9375\u7684\u6563\u5217\u5206\u5340"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6563\u5217\u51fd\u6578\u4f86\u7d66\u9375\u503c\u5206\u914d\u5206\u5340\uff0c\u9019\u6a23\u53ef\u4ee5\u5747\u52fb\u5206\u914d\u6578\u64da\u5230\u4e0d\u540c\u7684\u7bc0\u9ede\u3002ex: Fowler-Noll-Vo"),(0,n.kt)("li",{parentName:"ul"},"\u5931\u53bb\u7bc4\u570d\u67e5\u8a62\u7684\u80fd\u529b\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{src:l(5515).Z,width:"1822",height:"704"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u8a31\u591a\u8a9e\u8a00\u5167\u5efa\u7684 hash function \u4e26\u4e0d\u9069\u5408\u4f5c\u70ba\u51fd\u6578\uff0c\u56e0\u70ba\u540c\u500b\u8f38\u5165\u53ef\u80fd\u4e0d\u6703\u6709\u76f8\u540c\u7684 hash \u503c\u3002")),(0,n.kt)("p",null,"\u76f8\u95dc\u7684\u670d\u52d9:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Riak"),(0,n.kt)("li",{parentName:"ul"},"Couchbase"),(0,n.kt)("li",{parentName:"ul"},"Voldemort"),(0,n.kt)("li",{parentName:"ul"},"Cassandra \u53ef\u4ee5\u4f7f\u7528\u8907\u5408\u4e3b\u9375\u5065\u884c\u7bc4\u570d\u6383\u63cf\u3002")),(0,n.kt)("h5",{id:"\u8ca0\u8f09\u50be\u659c\u8207\u6d88\u9664\u71b1\u9ede"},"\u8ca0\u8f09\u50be\u659c\u8207\u6d88\u9664\u71b1\u9ede"),(0,n.kt)("p",null,"\u96d6\u7136\u6563\u5217\u5206\u5340\u53ef\u4ee5\u5747\u52fb\u5206\u914d\u6578\u64da\uff0c\u4f46\u662f\u6709\u53ef\u80fd\u6703\u6709\u71b1\u9ede\u554f\u984c\u3002ex: \u540d\u4eba\u7684 user Id\u3002\n\u56e0\u70ba hash \u4e4b\u5f8c\u7684\u503c\u662f\u76f8\u540c\u7684\uff0c\u66f8\u4e2d\u7684\u65b9\u6cd5\u662f\u5728\u4e3b\u9375\u52a0\u4e0a\u5169\u4f4d\u6578\u7684\u96a8\u6a5f\u6578\uff0c\u9019\u6a23\u53ef\u4ee5\u8b93\u6578\u64da\u5206\u6563\u5230\u4e0d\u540c\u7684\u7bc0\u9ede\uff0c\u4f46\u9084\u9700\u8981\u4f46\u9084\u9700\u8981\u984d\u5916\u5de5\u4f5c\u5408\u4f75\u7d50\u679c\u3002"),(0,n.kt)("h2",{id:"\u5206\u7247\u8207\u6b21\u7d1a\u7d22\u5f15"},"\u5206\u7247\u8207\u6b21\u7d1a\u7d22\u5f15"),(0,n.kt)("p",null,"\u6b21\u7d1a\u7d22\u5f15\u901a\u5e38\u4e26\u4e0d\u80fd\u552f \u4e00\u5730\u6a19\u8b58\u8a18\u9304\uff0c\u800c\u662f\u4e00\u7a2e\u641c\u7d22\u8a18\u9304\u4e2d\u51fa\u73fe\u7279\u5b9a\u503c\u7684\u65b9\u5f0f\u3002\n\u5c0b\u627e\u7528\u6236 123 \u7684\u6240\u6709\u64cd\u4f5c\uff0c\u67e5\u627e\u5305\u542b hogwash \u7684\u6240\u6709\u6587\u7ae0\uff0c\u5c0b\u627e\u6240\u6709\u984f\u8272\u70ba\u7d05\u8272\u7684\u8eca\u8f1b\u7b49\u7b49\u3002\n\u6b21\u7d1a\u7d22\u5f15\u7684\u554f\u984c\u662f\u5b83\u5011\u4e0d\u80fd\u6574\u9f4a\u5730\u6620\u5c04\u5230\u5206\u5340(?)\u3002\u6709\u5169\u7a2e\u7528\u6b21\u7d1a\u7d22\u5f15\u5c0d\u6578\u64da\u5eab\u9032\u884c\u5206\u5340\u7684\u65b9\u6cd5:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u57fa\u65bc\u6587\u6a94\u7684\u5206\u5340(document-based)"),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u65bc\u95dc\u9375\u8a5e(term-based)\u7684\u5206\u5340")),(0,n.kt)("p",null,"\u76f8\u95dc\u7684\u670d\u52d9:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Riak"),(0,n.kt)("li",{parentName:"ul"},"Solr"),(0,n.kt)("li",{parentName:"ul"},"Elasticsearch")),(0,n.kt)("h3",{id:"\u6309\u6587\u6a94\u7684\u6b21\u7d1a\u7d22\u5f15"},"\u6309\u6587\u6a94\u7684\u6b21\u7d1a\u7d22\u5f15"),(0,n.kt)("p",null,"\u7bc4\u4f8b\u4e2d\uff0c\u4e00\u500b\u4e8c\u624b\u8eca\u7db2\u7ad9\u4f7f\u7528 ID \u4f5c\u6587\u6a94\u7684\u5206\u5340\uff0c\u4f46\u662f\u6b21\u7d1a\u7d22\u5f15\u662f\u6839\u64da\u8eca\u8f1b\u7684\u984f\u8272\u3002\n\u60f3\u8981\u67e5\u627e\u7d05\u8272\u7684\u8eca\u8f1b\uff0c\u9700\u8981\u5148\u67e5\u8a62\u6b21\u7d1a\u7d22\u5f15\uff0c\u627e\u5230\u6240\u6709\u7d05\u8272\u8eca\u8f1b\u7684 ID\uff0c\u518d\u53bb\u4e3b\u7d22\u5f15\u67e5\u8a62\u8a73\u7d30\u8cc7\u6599\u3002\n\u56e0\u70ba\u53ea\u9700\u8981\u8655\u7406 ID \u7684\u5206\u5340\uff0c\u6587\u6a94\u5206\u5340\u53c8\u7a31\u672c\u5730\u7d22\u5f15(local index)\u3002"),(0,n.kt)("p",null,"\u7531\u65bc\u8cc7\u6599\u5206\u6563\u5728\u5404\u500b\u5206\u5340\uff0c\u6240\u4ee5\u9700\u8981\u67e5\u8a62\u5404\u500b\u5206\u5340\u4e26\u5408\u4f75\u7d50\u679c(scatter/gather)\uff0c\u6240\u4ee5\u6b21\u7d1a\u7d22\u5f15\u7684\u6210\u672c\u662f\u6602\u8cb4\u7684\uff0c\u800c\u4e14\u5c3e\u90e8\u5ef6\u9072\u4e5f\u6703\u589e\u52a0\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:l(92260).Z,width:"1736",height:"936"})),(0,n.kt)("p",null,"\u76f8\u95dc\u7684\u670d\u52d9:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MongoDB"),(0,n.kt)("li",{parentName:"ul"},"Riak"),(0,n.kt)("li",{parentName:"ul"},"Cassandra"),(0,n.kt)("li",{parentName:"ul"},"Elasticsearch"),(0,n.kt)("li",{parentName:"ul"},"SolrCloud"),(0,n.kt)("li",{parentName:"ul"},"VoltDB")),(0,n.kt)("h3",{id:"\u6839\u64da\u95dc\u9375\u503c\u7684\u6b21\u7d1a\u7d22\u5f15"},"\u6839\u64da\u95dc\u9375\u503c\u7684\u6b21\u7d1a\u7d22\u5f15"),(0,n.kt)("p",null,"\u76f8\u8f03\u65bc\u6587\u6a94\u7d22\u5f15(\u672c\u5730\u7d22\u5f15)\u5728\u6bcf\u500b\u5206\u5340\u5efa\u7acb\u5c6c\u65bc\u81ea\u5df1\u7684\u6b21\u7d1a\u7d22\u5f15\uff0c\u95dc\u9375\u503c\u7d22\u5f15 term-partitioned(\u5168\u5c40\u7d22\u5f15)\u6a6b\u8de8\u6240\u6709\u5206\u5340\u5efa\u7acb\u5168\u5c40\u7684\u6b21\u7d1a\u7d22\u5f15\u3002\n\u7bc4\u4f8b\u4e2d\uff0c\u6240\u6709\u7d05\u8272\u8eca\u5b50\u7684 ID \u90fd\u5728 Partition 0\uff0c\u88fd\u9020\u5546\u7684\u540d\u5b57\u4e5f\u4f9d\u7167\u81ea\u9996\uff0c\u5206\u985e\u5728\u4e0d\u540c\u5206\u5340\u3002\n",(0,n.kt)("img",{src:l(60870).Z,width:"1756",height:"854"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7bc4\u570d\u6383\u63cf"),(0,n.kt)("li",{parentName:"ul"},"\u56e0\u70ba\u5c0d\u95dc\u9375\u8a5e\u9032\u884c hash \u5206\u5340\uff0c\u6240\u4ee5\u63d0\u4f9b\u9644\u8f09\u5747\u8861\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8b80\u53d6\u6bd4\u8d77\u6587\u6a94\u7d22\u5f15\u66f4\u5feb\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5beb\u5165\u901f\u5ea6\u8f03\u6162\uff0c\u56e0\u70ba\u9700\u8981\u66f4\u65b0\u5168\u5c40\u7d22\u5f15\u3002")),(0,n.kt)("h4",{id:"\u5206\u5340\u518d\u5e73\u8861"},"\u5206\u5340\u518d\u5e73\u8861"),(0,n.kt)("p",null,"\u96a8\u8457\u6642\u9593\u7684\u63a8\u79fb\uff0c\u6578\u64da\u5eab\u6703\u6709\u5404\u7a2e\u8b8a\u5316\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u67e5\u8a62\u541e\u5410\u91cf\u589e\u52a0\uff0c\u6240\u4ee5\u60a8\u60f3\u8981\u6dfb\u52a0\u66f4\u591a\u7684 CPU \u4f86\u8655\u7406\u8ca0\u8f09\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6578\u64da\u96c6\u5927\u5c0f\u589e\u52a0\uff0c\u6240\u4ee5\u60a8\u60f3\u6dfb\u52a0\u66f4\u591a\u7684\u78c1\u76e4\u548c RAM \u4f86\u5b58\u5132\u5b83\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6a5f\u5668\u51fa\u73fe\u6545\u969c\uff0c\u5176\u4ed6\u6a5f\u5668\u9700\u8981\u63a5\u7ba1\u6545\u969c\u6a5f\u5668\u7684\u8cac\u4efb\u3002")),(0,n.kt)("p",null,"\u6240\u6709\u9019\u4e9b\u66f4\u6539\u90fd\u9700\u8981\u6578\u64da\u548c\u8acb\u6c42\u5f9e\u4e00\u500b\u7bc0\u9ede\u79fb\u52d5\u5230\u53e6\u4e00\u500b\u7bc0\u9ede\u3002\n\u5c07\u8ca0\u8f09\u5f9e\u96c6\u7fa4\u4e2d\u7684\u4e00\u500b\u7bc0\u9ede \u5411\u53e6\u4e00\u500b\u7bc0\u9ede\u79fb\u52d5\u7684\u904e\u7a0b\u7a31\u70ba\u518d\u5e73\u8861(reblancing)\u3002\n\u7121\u8ad6\u4f7f\u7528\u54ea\u7a2e\u5206\u5340\u65b9\u6848\uff0c\u518d\u5e73\u8861\u901a\u5e38\u90fd\u8981\u6eff\u8db3\u4e00\u4e9b\u6700\u4f4e\u8981\u6c42:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u518d\u5e73\u8861\u4e4b\u5f8c\uff0c\u8ca0\u8f09(\u6578\u64da\u5b58\u5132\uff0c\u8b80\u53d6\u548c\u5beb\u5165\u8acb\u6c42)\u61c9\u8a72\u5728\u96c6\u7fa4\u4e2d\u7684\u7bc0\u9ede\u4e4b\u9593\u516c\u5e73\u5730\u5171\u4eab\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u518d\u5e73\u8861\u767c\u751f\u6642\uff0c\u6578\u64da\u5eab\u61c9\u8a72\u7e7c\u7e8c\u63a5\u53d7\u8b80\u53d6\u548c\u5beb\u5165\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7bc0\u9ede\u4e4b\u9593\u53ea\u79fb\u52d5\u5fc5\u9808\u7684\u6578\u64da\uff0c\u4ee5\u4fbf\u5feb\u901f\u518d\u5e73\u8861\uff0c\u4e26\u6e1b\u5c11\u7db2\u8def\u548c\u78c1\u789f I/O \u8ca0\u8f09\u3002")),(0,n.kt)("h3",{id:"\u5e73\u8861\u7b56\u7565"},"\u5e73\u8861\u7b56\u7565"),(0,n.kt)("h4",{id:"\u53cd\u9762\u6559\u6750-hash-mode-n"},"\u53cd\u9762\u6559\u6750: hash mode N"),(0,n.kt)("p",null,"\u5e7e\u5982\u679c\u5011\u6709 10 \u500b\u7bc0\u9ede N\uff0c\u5c07\u8cc7\u6599\u7684 ID \u7528 mod \u53d6\u9918\u6578\uff0c\u5206\u914d\u5230\u7b2c N \u500b\u7bc0\u9ede\u4e0a\uff0c\u9019\u6a23\u6703\u9020\u6210\u7576\u7bc0\u9ede\u6578\u91cf\u6539\u8b8a\u6642\uff0c\u6240\u6709\u7684\u8cc7\u6599\u90fd\u9700\u8981\u91cd\u65b0\u5206\u914d\u3002"),(0,n.kt)("h4",{id:"\u56fa\u5b9a\u6578\u91cf\u7684\u5206\u5340"},"\u56fa\u5b9a\u6578\u91cf\u7684\u5206\u5340"),(0,n.kt)("p",null,"\u5206\u5340\u7684\u6578\u91cf\u662f\u56fa\u5b9a\u7684\uff0c\u800c\u4e14\u88ab\u5e73\u5747\u5206\u914d\u5230\u7bc0\u9ede\u4e0a\uff0c\u5982\u679c\u589e\u52a0\u7bc0\u9ede\uff0c\u6703\u628a\u5404\u500b\u7bc0\u9ede\u7684\u4e00\u4e9b\u5206\u5340\u5206\u914d\u5230\u65b0\u7684\u7bc0\u9ede\u4e0a\uff0c\n\u76f8\u53cd\u7684\uff0c\u5982\u679c\u6e1b\u5c11\u7bc0\u9ede\uff0c\u6703\u628a\u88ab\u6e1b\u5c11\u7684\u7bc0\u9ede\u4e0a\u7684\u5206\u5340\u5206\u914d\u5230\u5176\u4ed6\u7bc0\u9ede\u4e0a\u3002\n\u9019\u7a2e\u8b8a\u66f4\u4e26\u4e0d\u662f\u5373\u6642\u7684 \u2014 \u5728\u7db2\u7d61\u4e0a\u50b3\u8f38\u5927\u91cf\u7684\u6578\u64da\u9700\u8981\u4e00\u4e9b\u6642\u9593 \u2014 \u6240\u4ee5\u5728\u50b3\u8f38\u904e\u7a0b\u4e2d\uff0c\u539f\u6709\u5206\u5340\u4ecd\u7136\u6703\u63a5\u53d7\u8b80\u5beb\u64cd\u4f5c\u3002\n",(0,n.kt)("img",{src:l(39044).Z,width:"1778",height:"1044"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u900f\u904e\u589e\u52a0\u6027\u80fd\u66f4\u597d\u7684\u7bc0\u9ede\u6c70\u63db\u820a\u7684\u7bc0\u9ede\uff0c\u6216\u662f\u5206\u914d\u66f4\u591a\u7684\u5206\u5340\u5230\u6027\u80fd\u8f03\u597d\u7684\u7bc0\u9ede\u4e0a\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u5340\u6578\u91cf\u4e00\u958b\u59cb\u5c31\u8981\u6c7a\u5b9a\u597d\uff0c\u4f46\u4e0d\u597d\u9810\u4f30\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u5340\u592a\u5927\uff0c\u518d\u5e73\u8861\u8ddf\u7bc0\u9ede\u6545\u969c\u6062\u5fa9\u7684\u6210\u672c\u8b8a\u9ad8\uff0c\u5206\u5340\u592a\u5c0f\uff0c\u6703\u9020\u6210\u5206\u5340\u6578\u91cf\u904e\u591a\uff0c\u589e\u52a0\u7ba1\u7406\u6210\u672c\u3002")),(0,n.kt)("h4",{id:"\u52d5\u614b\u5206\u5340"},"\u52d5\u614b\u5206\u5340"),(0,n.kt)("p",null,"\u9375\u7bc4\u570d\u5206\u5340\u7684\u6578\u64da\u5eab\uff0c\u56e0\u70ba\u5206\u5340\u6709\u56fa\u5b9a\u7bc4\u570d\u548c\u56fa\u5b9a\u6578\u91cf\uff0c\u5982\u679c\u51fa\u73fe\u908a\u754c\u932f\u8aa4\uff0c\u53ef\u80fd\u6703\u5c0e\u81f4\u4e00\u500b\u5206\u5340\u4e2d\u7684\u6240\u6709\u6578\u64da\u6216\u8005\u5176\u4ed6\u5206\u5340\u4e2d\u7684\u6240\u6709\u6578\u64da\u70ba\u7a7a\uff0c\u9700\u8981\u518d\u624b\u52d5\u8abf\u6574\u908a\u754c\u3002\n\u4e00\u4e9b\u6309\u9375\u7684\u7bc4\u570d\u9032\u884c\u5206\u5340\u7684\u6578\u64da\u5eab(HBase, RethinkDB)\uff0c\u6703\u52d5\u614b\u5275\u5efa\u5206\u5340:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7576\u5206\u5340\u8d85\u904e\u914d\u7f6e\u7684\u5927\u5c0f\u6642\uff0c\u6703\u81ea\u52d5\u5206\u5272\u5206\u5340\u4e26\u5206\u914d\u5230\u5176\u4ed6\u7bc0\u9ede\u4e0a\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7576\u5206\u5340\u592a\u5c0f\u6642\uff0c\u6703\u5408\u4f75\u5206\u5340\u5230\u5176\u4ed6\u7bc0\u9ede\u4e0a\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u5340\u7684\u6578\u91cf\u4f9d\u7167\u6578\u64da\u7684\u7e3d\u91cf\u4f86\u52d5\u614b\u589e\u52a0\u6e1b\u5c11\u3002")),(0,n.kt)("h4",{id:"\u6309\u7bc0\u9ede\u6bd4\u4f8b\u5206\u5340"},"\u6309\u7bc0\u9ede\u6bd4\u4f8b\u5206\u5340"),(0,n.kt)("p",null,"\u56fa\u5b9a\u6578\u91cf\u7684\u5206\u5340: \u5206\u5340\u7684\u5927\u5c0f\u8207\u6578\u64da\u6210\u6b63\u6bd4\u3002\n\u52d5\u614b\u5206\u5340: \u5206\u5340\u7684\u5927\u5c0f\u662f\u56fa\u5b9a\u7684\uff0c\u4f46\u662f\u6578\u91cf\u662f\u52d5\u614b\u7684\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u4e0a\u9762\u5169\u7a2e\u90fd\u8ddf\u7bc0\u9ede\u7121\u95dc\u3002"),(0,n.kt)("p",null,"\u6309\u7bc0\u9ede\u6bd4\u4f8b\u5206\u5340:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u500b\u7bc0\u9ede\u5177\u6709\u56fa\u5b9a\u6578\u91cf\u7684\u5206\u5340\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u500b\u5206\u5340\u7684\u5927\u5c0f\u8207\u6578\u64da\u7684\u591a\u5be1\u6210\u6bd4\u4f8b\u5730\u589e\u9577\uff0c\u800c\u7bc0\u9ede\u6578\u91cf\u4fdd\u6301\u4e0d\u8b8a\uff0c\u65b0\u7bc0\u9ede\u52a0\u5165\u6642\uff0c\u6703\u96a8\u6a5f\u9078\u64c7\u56fa\u5b9a\u6578\u91cf\u7684\u73fe\u6709\u5206\u5340\u9032\u884c\u62c6\u5206\uff0c\u4e26\u4f54\u6709\u5206\u5340\u7684\u4e00\u534a\uff0c\u5206\u5340\u8b8a\u5c0f\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6578\u64da\u91cf\u591a\u7684\u6642\u5019\u5c31\u6703\u9700\u8981\u591a\u7684\u7bc0\u9ede\u5132\u5b58\uff0c\u6bcf\u500b\u5206\u5340\u5927\u5c0f\u8f03\u70ba\u7a69\u5b9a\u3002")),(0,n.kt)("h4",{id:"\u904b\u7dad\u624b\u52d5\u9084\u662f\u81ea\u52d5\u5e73\u8861"},"\u904b\u7dad:\u624b\u52d5\u9084\u662f\u81ea\u52d5\u5e73\u8861"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5168\u81ea\u52d5\u91cd\u65b0\u5e73\u8861(\u7cfb\u7d71\u81ea\u52d5\u6c7a\u5b9a\u4f55\u6642\u5c07\u5206\u5340\u5f9e\u4e00\u500b\u7bc0\u9ede\u79fb\u52d5\u5230\u53e6\u4e00\u500b\u7bc0\u9ede\uff0c\u7121\u9808\u4eba\u5de5\u5e72\u9810)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u5de5\u4f5c\u8f03\u5c11"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u9810\u6e2c")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u9019\u7a2e\u81ea\u52d5\u5316\u8207\u81ea\u52d5\u6545\u969c\u6aa2\u6e2c\u76f8\u7d50\u5408\u53ef\u80fd\u5341\u5206\u5371\u96aa\u3002\u4f8b\u5982\uff0c\u5047\u8a2d\u4e00\u500b\u7bc0\u9ede\u904e\u8f09\uff0c\u4e26\u4e14\u5c0d\u8acb\u6c42\u7684\u97ff\u61c9\u66ab\u6642\u5f88\u6162\u3002\u5176\u4ed6\u7bc0\u9ede\u5f97\u51fa\u7d50\u8ad6:\u904e\u8f09\u7684\u7bc0\u9ede\u5df2\u7d93\u6b7b\u4ea1\uff0c\u4e26\u81ea\u52d5\u91cd\u65b0\u5e73\u8861\u96c6\u7fa4\uff0c\u4f7f\u8ca0\u8f09\u96e2\u958b\u5b83\u3002\u9019\u6703\u5c0d\u5df2\u7d93\u8d85\u8ca0\u8377\u7684\u7bc0\u9ede\uff0c\u5176\u4ed6\u7bc0\u9ede\u548c\u7db2\u7d61\u9020\u6210\u984d\u5916\u7684\u8ca0\u8f09\uff0c\u5f9e\u800c\u4f7f\u60c5\u6cc1\u8b8a\u5f97\u66f4\u7cdf\uff0c \u4e26\u53ef\u80fd\u5c0e\u81f4\u7d1a\u806f\u5931\u6557\u3002")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u624b\u52d5(\u5206\u5340\u6307\u6d3e\u7d66\u7bc0\u9ede\u7531\u7ba1\u7406\u54e1\u660e\u78ba\u914d\u7f6e\uff0c\u50c5\u5728\u7ba1\u7406\u54e1\u660e\u78ba\u91cd\u65b0\u914d\u7f6e\u6642\u624d\u6703\u66f4\u6539)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u904e\u7a0b\u6162\uff0c\u4f46\u53ef\u4ee5\u5e6b\u52a9 \u9632\u6b62\u904b\u7dad\u610f\u5916\u3002")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Couchbase\uff0cRiak\u548cVoldemort\u6703\u81ea\u52d5\u751f\u6210\u5efa\u8b70\u7684\u5206\u5340\u5206\u914d\uff0c\u4f46 \u9700\u8981\u7ba1\u7406\u54e1\u63d0\u4ea4\u624d\u80fd\u751f\u6548\u3002")),(0,n.kt)("h3",{id:"\u8acb\u6c42\u8def\u7531"},"\u8acb\u6c42\u8def\u7531"),(0,n.kt)("p",null,"\u767c\u51fa\u8acb\u6c42\u6642\uff0c\u5982\u4f55\u77e5\u9053\u8981\u9023\u63a5\u54ea\u500b\u7bc0\u9ede?",(0,n.kt)("br",{parentName:"p"}),"\n","\u6709\u5e7e\u7a2e\u65b9\u6848:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5141\u8a31\u5ba2\u6236\u8ddf\u4efb\u4f55\u7bc0\u9ede\u806f\u7e6b\uff08\u8209\u4f8b\u4f86\u8aaa\uff0c\u900f\u904e\u5faa\u74b0\u7b56\u7565\u7684\u8ca0\u8f09\u5e73\u8861\u5668\uff09\u3002\u5982\u679c\u9019\u500b\u7bc0\u9ede\u525b\u597d\u6709\u9019\u500b\u8981\u6c42\u7684\u8cc7\u6599\u5340\u57df\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u8655\u7406\u9019\u500b\u8acb\u6c42\uff1b\u4f46\u5982\u679c\u6c92\u6709\uff0c\u5b83\u5c31\u6703\u628a\u9019\u500b\u8acb\u6c42\u8f49\u9001\u5230\u9069\u5408\u7684\u7bc0\u9ede\uff0c\u7136\u5f8c\u63a5\u6536\u56de\u61c9\u518d\u8f49\u905e\u7d66\u5ba2\u6236\u7aef\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u9996\u5148\u5c07\u6240\u6709\u4f86\u81ea\u5ba2\u6236\u7aef\u7684\u8acb\u6c42\u767c\u9001\u5230\u8def\u7531\u5c64\uff0c\u5b83\u6c7a\u5b9a\u4e86\u61c9\u8a72\u8655\u7406\u8acb\u6c42\u7684\u7bc0\u9ede\uff0c\u4e26\u76f8\u61c9\u5730 \u8f49\u767c\u3002\u6b64\u8def\u7531\u5c64\u672c\u8eab\u4e0d\u8655\u7406\u4efb\u4f55\u8acb\u6c42;\u5b83\u50c5\u8ca0\u8cac\u5206\u5340\u7684\u8ca0\u8f09\u5747\u8861\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8981\u6c42\u5ba2\u6236\u7aef\u77e5\u9053\u5206\u5340\u548c\u7bc0\u9ede\u7684\u5206\u914d\u3002\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u5ba2\u6236\u7aef\u53ef\u4ee5\u76f4\u63a5\u9023\u63a5\u5230\u9069\u7576\u7684\u7bc0 \u9ede\uff0c\u800c\u4e0d\u9700\u8981\u4efb\u4f55\u4e2d\u4ecb\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{src:l(19704).Z,width:"1742",height:"922"})),(0,n.kt)("p",null,"\u8a31\u591a\u5206\u5e03\u5f0f\u6578\u64da\u7cfb\u7d71\u90fd\u4f9d\u8cf4\u65bc\u4e00\u500b\u7368\u7acb\u7684\u5354\u8abf\u670d\u52d9\uff0c\u6bd4\u5982ZooKeeper\u4f86\u8ddf\u8e64\u96c6\u7fa4\u5143\u6578\u64da\uff0c\u5982 \u57166-8\u6240\u793a\u3002 \u6bcf\u500b\u7bc0\u9ede\u5728ZooKeeper\u4e2d\u8a3b\u518a\u81ea\u5df1\uff0cZooKeeper\u7dad\u8b77\u5206\u5340\u5230\u7bc0\u9ede\u7684\u53ef\u9760\u6620\u5c04\u3002 \u5176 \u4ed6\u53c3\u8207\u8005(\u5982\u8def\u7531\u5c64\u6216\u5206\u5340\u611f\u77e5\u5ba2\u6236\u7aef)\u53ef\u4ee5\u5728ZooKeeper\u4e2d\u8a02\u95b1\u6b64\u4fe1\u606f\u3002 \u53ea\u8981\u5206\u5340\u5206\u914d\u767c \u751f\u7684\u6539\u8b8a\uff0c\u6216\u8005\u96c6\u7fa4\u4e2d\u6dfb\u52a0\u6216\u522a\u9664\u4e86\u4e00\u500b\u7bc0\u9ede\uff0cZooKeeper\u5c31\u6703\u901a\u77e5\u8def\u7531\u5c64\u4f7f\u8def\u7531\u4fe1\u606f\u4fdd\u6301 \u6700\u65b0\u72c0\u614b\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:l(55870).Z,width:"1752",height:"892"})),(0,n.kt)("h4",{id:"\u57f7\u884c\u4e26\u884c\u67e5\u8a62"},"\u57f7\u884c\u4e26\u884c\u67e5\u8a62"),(0,n.kt)("p",null,"\u5927\u591a\u6578NoSQL\u5206\u5e03\u5f0f\u8cc7\u6599\u5132\u5b58\u6240\u652f\u63f4\u7684\u67e5\u8a62\u64cd\u4f5c\u901a\u5e38\u8f03\u70ba\u7c21\u55ae\uff0c\u4e3b\u8981\u6d89\u53ca\u8b80\u53d6\u6216\u5beb\u5165\u55ae\u500b\u9375\u3002\n\u76f8\u8f03\u4e4b\u4e0b\uff0c\u7528\u65bc\u5206\u6790\u7684\u5927\u898f\u6a21\u4e26\u884c\u8655\u7406\uff08MPP  Massively parallel processing\uff09\u95dc\u806f\u5f0f\u8cc7\u6599\u5eab\u7522\u54c1\u6240\u652f\u63f4\u7684\u67e5\u8a62\u985e\u578b\u5247\u8907\u96dc\u5f97\u591a\u3002\n\u5728\u8cc7\u6599\u5009\u5132\u67e5\u8a62\u4e2d\uff0c\u901a\u5e38\u6d89\u53ca\u591a\u500b\u9023\u63a5\u3001\u904e\u6ffe\u3001\u5206\u7d44\u548c\u805a\u5408\u64cd\u4f5c\u3002\nMPP\u67e5\u8a62\u512a\u5316\u5668\u6703\u5c07\u9019\u7a2e\u8907\u96dc\u7684\u67e5\u8a62\u62c6\u5206\u6210\u591a\u500b\u57f7\u884c\u968e\u6bb5\u548c\u5206\u5340\uff0c\u8b93\u8cc7\u6599\u5eab\u96c6\u7fa4\u4e2d\u7684\u4e0d\u540c\u7bc0\u9ede\u53ef\u4ee5\u4e26\u884c\u57f7\u884c\u9019\u4e9b\u64cd\u4f5c\u3002\n\u7279\u5225\u662f\u5c0d\u65bc\u9700\u8981\u6383\u63cf\u5927\u898f\u6a21\u8cc7\u6599\u96c6\u7684\u67e5\u8a62\uff0c\u9019\u7a2e\u4e26\u884c\u57f7\u884c\u5e36\u4f86\u4e86\u986f\u8457\u7684\u6027\u80fd\u512a\u52e2\u3002"),(0,n.kt)("h3",{id:"summary"},"Summary"),(0,n.kt)("p",null,"\u9019\u500b\u7ae0\u7bc0\u7c21\u55ae\u4f86\u8aaa\u662f\u4ecb\u7d39\u5c07\u5927\u6578\u64da\u5283\u5206\u6210\u591a\u540c\u500b\u5c0f\u6578\u64da\u7684\u65b9\u6cd5\u3002\n\u5206\u5340\u7684\u76ee\u6a19\u662f\u5728\u591a\u53f0\u6a5f\u5668\u4e0a\u5747\u52fb\u5206\u5e03\u6578 \u64da\u548c\u67e5\u8a62\u8ca0\u8f09\uff0c\u907f\u514d\u51fa\u73fe\u71b1\u9ede(\u8ca0\u8f09\u4e0d\u6210\u6bd4\u4f8b\u7684\u7bc0\u9ede)\u3002"),(0,n.kt)("p",null,"\u8a0e\u8ad6\u4e86\u5169\u7a2e\u4e3b\u8981\u7684\u5206\u5340\u65b9\u6cd5:"),(0,n.kt)("h5",{id:"\u9375\u7bc4\u570d\u5206\u5340"},"\u9375\u7bc4\u570d\u5206\u5340"),(0,n.kt)("p",null,"\u5176\u4e2d\u9375\u662f\u6709\u5e8f\u7684\uff0c\u4e26\u4e14\u5206\u5340\u64c1\u6709\u5f9e\u67d0\u500b\u6700\u5c0f\u503c\u5230\u67d0\u500b\u6700\u5927\u503c\u7684\u6240\u6709\u9375\u3002\u6392\u5e8f\u7684\u512a\u52e2\u5728\u65bc\u53ef\u4ee5 \u9032\u884c\u6709\u6548\u7684\u7bc4\u570d\u67e5\u8a62\uff0c\u4f46\u662f\u5982\u679c\u61c9\u7528\u7a0b\u5e8f\u7d93\u5e38\u8a2a\u554f\u76f8\u9130\u7684\u4e3b\u9375\uff0c\u5247\u5b58\u5728\u71b1\u9ede\u7684\u98a8\u96aa\u3002 \u5728\u9019\u7a2e\u65b9\u6cd5\u4e2d\uff0c\u7576\u5206\u5340\u8b8a\u5f97\u592a\u5927\u6642\uff0c\u901a\u5e38\u5c07\u5206\u5340\u5206\u6210\u5169\u500b\u5b50\u5206\u5340\uff0c\u52d5\u614b\u5730\u518d\u5e73\u8861\u5206\u5340\u3002"),(0,n.kt)("h5",{id:"\u6563\u5217\u5206\u5340"},"\u6563\u5217\u5206\u5340"),(0,n.kt)("p",null,"\u6563\u5217\u51fd\u6578\u5728\u5206\u5340\u4e2d\u7684\u61c9\u7528\u3002\u6bcf\u500b\u9375\u90fd\u6703\u61c9\u7528\u4e00\u500b\u6563\u5217\u51fd\u6578\uff0c\u5c07\u5176\u5206\u914d\u5230\u4e00\u5b9a\u7bc4\u570d\u7684\u5206\u5340\u4e2d\u3002\u9019\u7a2e\u65b9\u6cd5\u7834\u58de\u4e86\u9375\u7684\u6392\u5e8f\uff0c\u964d\u4f4e\u4e86\u7bc4\u570d\u67e5\u8a62\u7684\u6548\u7387\uff0c\u4f46\u80fd\u5920\u66f4\u5747\u52fb\u5730\u5206\u914d\u8ca0\u8f09\u3002\n\u5728\u4f7f\u7528\u6563\u5217\u9032\u884c\u5206\u5340\u6642\uff0c\u901a\u5e38\u6703\u9810\u5148\u5275\u5efa\u56fa\u5b9a\u6578\u91cf\u7684\u5206\u5340\uff0c\u70ba\u6bcf\u500b\u7bc0\u9ede\u5206\u914d\u591a\u500b\u5206\u5340\uff0c\u4e26\u5728\u589e\u52a0\u6216\u522a\u9664\u7bc0\u9ede\u6642\u5c07\u6574\u500b\u5206\u5340\u5f9e\u4e00\u500b\u7bc0\u9ede\u79fb\u52d5\u5230\u53e6\u4e00\u500b\u7bc0\u9ede\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528\u52d5\u614b\u5206\u5340\u7684\u65b9\u6cd5\u3002\n\u5169\u7a2e\u65b9\u6cd5\u53ef\u4ee5\u7d50\u5408\u4f7f\u7528\uff0c\u4f8b\u5982\u4f7f\u7528\u8907\u5408\u4e3b\u9375\uff1a\u5c07\u9375\u7684\u4e00\u90e8\u5206\u7528\u65bc\u6a19\u8b58\u5206\u5340\uff0c\u800c\u5c07\u53e6\u4e00\u90e8\u5206\u7528\u65bc\u6392\u5e8f\u3002    "),(0,n.kt)("p",null,"\u9084\u8a0e\u8ad6\u4e86\u5206\u5340\u548c\u6b21\u7d1a\u7d22\u5f15\u4e4b\u9593\u7684\u76f8\u4e92\u4f5c\u7528\u3002\u6b21\u7d1a\u7d22\u5f15\u4e5f\u9700\u8981\u5206\u5340\uff0c\u6709\u5169\u7a2e\u65b9\u6cd5:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6309\u6587\u6a94\u5206\u5340(\u672c\u5730\u7d22\u5f15)\uff0c\u5176\u4e2d\u6b21\u7d1a\u7d22\u5f15\u5b58\u5132\u5728\u8207\u4e3b\u9375\u548c\u503c\u76f8\u540c\u7684\u5206\u5340\u4e2d\u3002\u9019\u610f\u5473\u8457\u53ea\u6709\u4e00\u500b\u5206\u5340\u9700\u8981\u5728\u5beb\u5165\u6642\u66f4\u65b0\uff0c\u4f46\u662f\u8b80\u53d6\u6b21\u7d1a\u7d22\u5f15\u9700\u8981\u5728\u6240\u6709\u5206\u5340\u4e4b\u9593\u9032\u884c\u5206\u6563/\u6536\u96c6\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6309\u95dc\u9375\u8a5e\u5206\u5340(\u5168\u5c40\u7d22\u5f15)\uff0c\u5176\u4e2d\u6b21\u7d1a\u7d22\u5f15\u5b58\u5728\u4e0d\u540c\u7684\u5206\u5340\u4e2d\u3002\u8f14\u52a9\u7d22\u5f15\u4e2d\u7684\u689d\u76ee\u53ef\u4ee5\u5305\u62ec\u4f86\u81ea\u4e3b\u9375\u7684\u6240\u6709\u5206\u5340\u7684\u8a18\u9304\u3002\u7576\u6587\u6a94\u5beb\u5165\u6642\uff0c\u9700\u8981\u66f4\u65b0\u591a\u500b\u5206\u5340\u4e2d\u7684\u6b21\u7d1a\u7d22\u5f15\uff0c\u4f46\u662f\u53ef\u4ee5\u5f9e\u55ae\u500b\u5206\u5340\u4e2d\u9032\u884c\u8b80\u53d6\u3002")),(0,n.kt)("p",null,"\u6700\u5f8c\uff0c\u6211\u5011\u8ac7\u5230\u4e86\u4e00\u4e9b\u6280\u8853\uff0c\u900f\u904e\u9019\u4e9b\u6280\u8853\u6211\u5011\u53ef\u4ee5\u628a\u67e5\u8a62\u5c0e\u5411\u5230\u6b63\u78ba\u7684\u5206\u5340\uff0c\u5f9e\u6700\u7c21\u55ae\u7684\u5206\u5340\u8ca0\u8f09\u5e73\u8861\u5230\u8907\u96dc\u7684\u4e26\u884c\u67e5\u8a62\u57f7\u884c\u5f15\u64ce\u3002\n\u6839\u64da\u8a2d\u8a08\uff0c\u901a\u5e38\u6bcf\u500b\u5206\u5340\u90fd\u662f\u7368\u7acb\u904b\u4f5c\u7684 \u2500 \u9019\u5c31\u662f\u70ba\u4ec0\u9ebc\u5206\u5340\u5f0f\u6578\u64da\u5eab\u53ef\u4ee5\u64f4\u5c55\u5230\u591a\u53f0\u6a5f\u5668\u7684\u539f\u56e0\u3002\u4f46\u662f\uff0c\u9700\u8981\u5c07\u5beb\u5165\u64cd\u4f5c\u5206\u767c\u5230\u591a\u500b\u5206\u5340\u7684\u60c5\u6cc1\u53ef\u80fd\u6703\u8b8a\u5f97\u8907\u96dc:\u4f8b\u5982\uff0c\u5982\u679c\u5beb\u5165\u4e00\u500b\u5206\u5340\u6210\u529f\uff0c\u4f46\u662f\u53e6\u4e00\u500b\u5206\u5340\u5931\u6557\uff0c\u6703\u767c\u751f\u4ec0\u9ebc\u60c5\u6cc1\u5462\uff1f\u9019\u500b\u554f\u984c\u6211\u5011\u5c07\u5728\u5f8c\u9762\u7684\u7ae0\u7bc0\u4e2d\u8a0e\u8ad6\u3002"))}d.isMDXComponent=!0},9862:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/fig6_1-505a67682d81ac138cf40088efa612b1.png"},73711:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/fig6_2-a614968f03487f38ba2aa76e328564d7.png"},5515:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/fig6_3-506f09bd75d1c4f818de7317fe93bad7.png"},92260:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/fig6_4-11fc89608cec956305df65518362ba72.png"},60870:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/fig6_5-d5cdbe0328ea62cbb0f767eb76685a20.png"},39044:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/fig6_6-8efcea834e81824ddbbd13cead1fd261.png"},19704:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/fig6_7-0b13d36aad3734b507f781a2f88a3c47.png"},55870:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/fig6_8-23bf32503a8251ea1dd53ca54a3a9c90.png"}}]);