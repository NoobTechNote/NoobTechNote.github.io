"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[3302],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,k=u["".concat(p,".").concat(g)]||u[g]||m[g]||l;return n?a.createElement(k,i(i({ref:t},o),{},{components:n})):a.createElement(k,i({ref:t},o))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},53751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"Ch12: \u5fae\u6838\u5fc3(Microkernel)\u67b6\u69cb\u98a8\u683c",tsidebar_label:"Ch12: \u5fae\u6838\u5fc3(Microkernel)\u67b6\u69cb\u98a8\u683c",sidebar_position:12},i=void 0,s={unversionedId:"sg/fundamentals-of-software-architecture/ch12",id:"sg/fundamentals-of-software-architecture/ch12",title:"Ch12: \u5fae\u6838\u5fc3(Microkernel)\u67b6\u69cb\u98a8\u683c",description:"microkernel architecture style (\u4e5f\u88ab\u53eb\u505a plug-in architecture), \u9019\u7a2e\u67b6\u69cb\u5f88\u9069\u5408\u7522\u54c1\u985e\u61c9\u7528(\u5305\u88dd\u6210\u4e00\u500b\u55ae\u9ad4\u5f0f\u7684\u90e8\u5c6c\uff0c\u901a\u5e38\u4f5c\u70ba\u7b2c\u4e09\u65b9\u7522\u54c1\u8b93\u5ba2\u6236\u4e0b\u8f09\u3001\u5b89\u88dd\u5728\u5176\u96fb\u8166)",source:"@site/docs/sg/fundamentals-of-software-architecture/ch12.md",sourceDirName:"sg/fundamentals-of-software-architecture",slug:"/sg/fundamentals-of-software-architecture/ch12",permalink:"/docs/sg/fundamentals-of-software-architecture/ch12",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fundamentals-of-software-architecture/ch12.md",tags:[],version:"current",lastUpdatedBy:"kayeepf",lastUpdatedAt:1699332829,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:12,frontMatter:{title:"Ch12: \u5fae\u6838\u5fc3(Microkernel)\u67b6\u69cb\u98a8\u683c",tsidebar_label:"Ch12: \u5fae\u6838\u5fc3(Microkernel)\u67b6\u69cb\u98a8\u683c",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Ch11: \u7ba1\u9053\u67b6\u69cb\u98a8\u683c",permalink:"/docs/sg/fundamentals-of-software-architecture/ch11"},next:{title:"Ch13: \u670d\u52d9\u5f0f(Service-Based)\u67b6\u69cb\u98a8\u683c",permalink:"/docs/sg/fundamentals-of-software-architecture/ch13"}},p={},c=[],o={toc:c},u="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,a.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"microkernel")," architecture style (\u4e5f\u88ab\u53eb\u505a ",(0,r.kt)("em",{parentName:"p"},"plug-in")," architecture), \u9019\u7a2e\u67b6\u69cb\u5f88\u9069\u5408\u7522\u54c1\u985e\u61c9\u7528(\u5305\u88dd\u6210\u4e00\u500b\u55ae\u9ad4\u5f0f\u7684\u90e8\u5c6c\uff0c\u901a\u5e38\u4f5c\u70ba\u7b2c\u4e09\u65b9\u7522\u54c1\u8b93\u5ba2\u6236\u4e0b\u8f09\u3001\u5b89\u88dd\u5728\u5176\u96fb\u8166)"),(0,r.kt)("h1",{id:"topology"},"Topology"),(0,r.kt)("p",null,"\u5fae\u6838\u5fc3\u67b6\u69cb\u662f\u76f8\u5c0d\u7c21\u55ae\u7684\u55ae\u9ad4\u5f0f\u67b6\u69cb\uff0c\u7531\u5169\u500b\u7d44\u4ef6\u69cb\u6210"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Core System"),(0,r.kt)("li",{parentName:"ul"},"Plug-in components")),(0,r.kt)("p",null,"\u61c9\u7528\u908f\u8f2f\u5206\u6563\u5230\u4ee5\u4e0a\u5169\u500b\u7d44\u4ef6\u4ee5\u63d0\u4f9b\u61c9\u7528\u529f\u80fd\u8207\u5ba2\u88fd\u5316\u8655\u7406\u908f\u8f2f\u4e0a\u7684\u64f4\u5145\u6027\u3001\u9069\u61c9\u6027\u3001\u4ee5\u53ca\u9694\u96e2\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fig_12-1_basic_components_of_the_microkernel",src:n(67179).Z,width:"1272",height:"650"})),(0,r.kt)("h1",{id:"\u6838\u5fc3\u7cfb\u7d71core-system"},"\u6838\u5fc3\u7cfb\u7d71(Core System)"),(0,r.kt)("p",null,"\u5b9a\u7fa9: \u57f7\u884c\u7cfb\u7d71\u6240\u9700\u8981\u7684\u6700\u5c11\u529f\u80fd"),(0,r.kt)("p",null,"\u4f8b\u5b50: Eclipse\u7684\u6838\u5fc3\u7cfb\u7d71\u70ba\u57fa\u672c\u7684\u6587\u5b57\u7de8\u8f2f\u5668: \u958b\u555f\u6a94\u6848\u3001\u4fee\u6539\u5167\u5bb9\u3001\u5132\u5b58\u6a94\u6848\uff0c\u76f4\u5230\u52a0\u5165plug-ins\u624d\u80fd\u8b93Eclipse\u6210\u70ba\u4e00\u500b\u7522\u54c1"),(0,r.kt)("p",null,"\u4e0d\u904e\u6709\u53e6\u5916\u4e00\u7a2e\u6838\u5fc3\u7cfb\u7d71\u7684\u5b9a\u7fa9: \u7a7f\u8d8a\u61c9\u7528\u7684happy path(\u901a\u5e38\u662fprocessing flow)\uff0c\u9014\u4e2d\u6c92\u6709\u6216\u53ea\u6709\u5f88\u5c11\u7684\u5ba2\u88fd\u5316\u8655\u7406\u3002"),(0,r.kt)("p",null,"\u5c07\u5faa\u74b0\u8907\u96dc\u5ea6\u5f9e\u6838\u5fc3\u7cfb\u7d71\u79fb\u9664\uff0c\u4e26\u653e\u7f6e\u5230\u500b\u5225\u7684plug-in\u53ef\u4ee5\u4f7f\u64f4\u5c55\u6027\u3001\u53ef\u7dad\u8b77\u6027\u9084\u6709\u53ef\u6e2c\u8a66\u6027\u8b8a\u5f97\u66f4\u597d\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Recap Ch6"),(0,r.kt)("p",{parentName:"admonition"},"\u5faa\u74b0\u8907\u96dc\u5ea6(CC, Cyclomatic Complexity)\n\u7c21\u55ae\u8b1b\u5c31\u662f\u57f7\u884c\u5206\u652f\u592a\u591a\uff0c\u689d\u4ef6\u5beb\u592a\u591a\u5566")),(0,r.kt)("p",null,"Example:\n\u67d0\u500b\u96fb\u5b50\u56de\u6536\u88dd\u7f6e\u7684\u61c9\u7528\uff0c\u5fc5\u9808\u91dd\u5c0d\u6536\u5230\u7684\u6bcf\u500b\u96fb\u5b50\u88dd\u7f6e\uff0c\u57f7\u884c\u7279\u5b9a\u7684\u8a55\u4f30\u898f\u5247"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public void assessDevice(String deviceID) {\n    if (deviceID.equals("iPhone6s")) {\n        assessiPhone6s();\n    } else if (deviceID.equals("iPad1")) {\n        assessiPad1();\n    } else if (deviceI D.equals("Galaxy5")) {\n        assessGalaxy5();\n    } else { ...\n        ...\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"After")),(0,r.kt)("p",null,"\u64f4\u5c55\u6027\u66f4\u597d\uff0c\u6bcf\u6b21\u65b0\u589e\u4e00\u500b\u5916\u639b\u5143\u4ef6\uff0c\u53ea\u8981\u66f4\u65b0\u8a3b\u518a\u8868\u5c31\u597d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public void assessDevice(String deviceID) {\n    String plugin = pluginRegistry.get(deviceID);\n    Class<?> theClass = Class.forName(plugin);\n    Constructor<?> constructor = theClass.getConstructor();\n    DevicePlugin devicePlugin = (DevicePlugin)constructor.newInstance();\n    DevicePlugin.assess();\n}\n")),(0,r.kt)("p",null,"\u6838\u5fc3\u7cfb\u7d71\u53ef\u4ee5\u662f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5206\u5c64\u67b6\u69cb(Layered architecture)"),(0,r.kt)("li",{parentName:"ul"},"\u6a21\u7d44\u5316\u55ae\u9ad4(Modular Monolith)")),(0,r.kt)("p",null,"(Recap Fig 8-3)\n",(0,r.kt)("img",{alt:"fig_12-2_different_type_of_core_system",src:n(34050).Z,width:"1274",height:"1328"})),(0,r.kt)("p",null,"\u6709\u4e00\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u6838\u5fc3\u7cfb\u7d71\u53ef\u4ee5\u62c6\u5206\u6210\u5206\u958b\u90e8\u5c6c\u7684\u9818\u57df\u670d\u52d9\u3002\u6bcf\u7a2e\u4ed8\u6b3e\u65b9\u5f0f(\u4fe1\u7528\u5361\u3001PayPal\u3001\u5546\u5e97\u6027\u7528\u9ede\u6578\u3001\u79ae\u54c1\u5361\u3001\u63a1\u8cfc\u8a02\u55ae)\u90fd\u6709\u4ed8\u6b3e\u9818\u57df\u6240\u7279\u6709\u3001\u500b\u5225\u7684\u5916\u639b\u5143\u4ef6\u3002\n\u5728\u9019\u985e\u60c5\u6cc1\u4e0b\uff0c\u901a\u5e38\u6574\u500b\u55ae\u9ad4\u61c9\u7528\u6703\u5171\u4eab\u4e00\u500b\u8cc7\u6599\u5eab\u3002"),(0,r.kt)("p",null,"\u5c55\u793a\u5c64\u4e5f\u6709\u53ef\u80fd\u5167\u5d4c\u5230\u6838\u5fc3\u7cfb\u7d71\uff0c\u6216\u5be6\u4f5c\u5206\u958b\u7684\u4f7f\u7528\u8005\u4ecb\u9762\n",(0,r.kt)("img",{alt:"fig_12-3_user_interface_variants",src:n(89389).Z,width:"1130",height:"1382"})),(0,r.kt)("h1",{id:"\u5916\u639b\u5143\u4ef6plug-in-components"},"\u5916\u639b\u5143\u4ef6(Plug-In Components)"),(0,r.kt)("p",null,"\u7528\u4f86\u5f37\u5316\u6216\u5ef6\u4f38\u6838\u5fc3\u7cfb\u7d71\u7684\u55ae\u7368\u4e14\u7368\u7acb\u7684\u5143\u4ef6\uff0c\u53ef\u7528\u4f86\u9694\u96e2\u5f88\u5e38\u8b8a\u52d5\u7684\u7a0b\u5f0f\u78bc"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u53ef\u7dad\u8b77\u6027"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u53ef\u6e2c\u8a66\u6027")),(0,r.kt)("p",null,"\u7406\u60f3\u60c5\u6cc1\u4e0b\uff0cPlug-in \u61c9\u8a72\u4e92\u76f8\u7368\u7acb\uff0c\u5f7c\u6b64\u4e92\u4e0d\u4f9d\u8cf4\u3002"),(0,r.kt)("p",null,"\u5916\u639b\u5143\u4ef6\u8ddf\u6838\u5fc3\u7cfb\u7d71\u7684\u6e9d\u901a\u901a\u5e38\u900f\u904e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"method invocation"),(0,r.kt)("li",{parentName:"ul"},"function call to the entry-point class of the plug-in component")),(0,r.kt)("p",null,"\u5916\u639b\u7ba1\u7406\u5206\u5169\u968e\u6bb5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7de8\u8b6f\u671f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c31\u91cd\u7de8"))),(0,r.kt)("li",{parentName:"ul"},"\u57f7\u884c\u671f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5de5\u5177(OSGi, Penrose, Jigsaaw, Prism)")))),(0,r.kt)("p",null,"\u9ede\u5c0d\u9ede\u7684\u5916\u639b\u5143\u4ef6\u53ef\u5be6\u4f5c\u6210\u5171\u4eab\u7a0b\u5f0f\u5eab(e.g., JAR, DLL, Gem), Java\u7684\u5957\u4ef6\u540d\u7a31\uff0c\u6216C#\u7684\u5bc6\u540d\u7a7a\u9593"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(83557).Z,width:"1116",height:"584"})),(0,r.kt)("p",null,"\u6216\u8005\u7528\u4e0b\u5217\u66f4\u7c21\u55ae\u4f5c\u6cd5\n",(0,r.kt)("inlineCode",{parentName:"p"},"app.plug-in.<domain>.<context>")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"plug-in\u6e05\u695a\u8868\u793a\u9019\u662f\u5916\u639b\u5143\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"app.plugin.assessment.ipad4")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(30498).Z,width:"1126",height:"582"})),(0,r.kt)("p",null,"Plugin\u7528REST\u4e5f\u53ef\u4ee5\u5537!"),(0,r.kt)("p",null,"\u5176\u4ed6plugin\u751a\u81f3\u53ef\u4ee5\u7528container service\uff0c\u96d6\u7136\u770b\u8d77\u4f86\u662f\u4e00\u500b\u589e\u52a0saclability\u7684\u597d\u65b9\u6cd5\uff0c\n\u4f46\u4e0b\u5716\u9084\u662f\u53ea\u6709\u4e00\u500b\u67b6\u69cb\u91cf\u5b50\uff0c\u56e0\u70ba\u6bcf\u500brequest\u90fd\u6703\u7d93\u904e\u6838\u5fc3\u7cfb\u7d71\n",(0,r.kt)("img",{src:n(14380).Z,width:"1128",height:"448"})),(0,r.kt)("p",null,"\u4f7f\u7528REST\u597d\u8655"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5143\u4ef6\u7368\u7acb\u6027\u66f4\u597d"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u52d5\u7528\u5176\u4ed6\u6846\u67b6\u5de5\u5177\u4f86\u505a\u57f7\u884c\u6642\u671f\u7684\u6574\u5408"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5229\u7528\u975e\u540c\u6b65\u8207\u5916\u639b\u5143\u4ef6\u901a\u4fe1\uff0c\u53ef\u4ee5\u589e\u52a0\u56de\u61c9\u901f\u5ea6")),(0,r.kt)("p",null,"\u58de\u8655"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6703\u8b93\u5fae\u6838\u5fc3\u67b6\u69cb\u8b8a\u6210\u5206\u6563\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"thrid-party on-prem product \u4e0d\u597d\u5be6\u4f5c\u8ddf\u4f48\u7f72"),(0,r.kt)("li",{parentName:"ul"},"\u8907\u96dc\u5ea6++\uff0c\u8cbb\u7528++"),(0,r.kt)("li",{parentName:"ul"},"\u5143\u4ef6\u639b\u6389\uff0c\u5c31\u5b8c\u4e86")),(0,r.kt)("p",null,"\u5916\u639b\u5143\u4ef6\u901a\u5e38\u4e0d\u76f4\u63a5\u9023\u5230\u5171\u4eab\u7684\u4e2d\u592e\u8cc7\u6599\u5eab\uff0c\u9019\u500b\u8cac\u4efb\u7531\u6838\u5fc3\u7cfb\u7d71\u627f\u64d4\uff0c\u5c07\u9700\u8981\u7684\u8cc7\u6599\u50b3\u7d66\u5916\u639b\u5143\u4ef6\uff0c\u4e3b\u8981\u662f\u70ba\u4e86\u53bb\u8026\u5408\u3002"),(0,r.kt)("p",null,"\u4f46\u5916\u639b\u5143\u4ef6\u53ef\u4ee5\u6709\u4f9b\u81ea\u5df1\u5b58\u53d6\u7684\u8cc7\u6599\u5132\u5b58"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(37489).Z,width:"1126",height:"534"})),(0,r.kt)("h1",{id:"registry"},"Registry"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, String> registry = new HashMap<String, String>();\nstatic {\n    //point-to-point access example\n    registry.put("iPhone6s", "Iphone6sPlugin");\n\n    //messaging example\n    registry.put("iPhone6s", "iphone6s.queue");\n\n    //restful example\n    registry.put("iPhone6s", "https://atlas:443/assess/iphone6s");\n}\n\n')),(0,r.kt)("h1",{id:"contracts"},"Contracts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u5e38\u6703\u6253\u9020\u4e00\u500bAdapter\n",(0,r.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/zh-tw/%E9%80%82%E9%85%8D%E5%99%A8%E6%A8%A1%E5%BC%8F"},"Adapter Pattern"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface AssessmentPlugin {\n    public AssessmentOutput assess();\n    public String register();\n    public String deregister();\n}\npublic class AssessmentOutput {\n    public String assessmentReport;\n    public Boolean resell;\n    public Double value;\n    public Double resellPrice;\n}\n")),(0,r.kt)("h1",{id:"example-and-use-cases"},"Example and Use Cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Eclipse"),(0,r.kt)("li",{parentName:"ul"},"Jenkins"),(0,r.kt)("li",{parentName:"ul"},"Chrome")),(0,r.kt)("h1",{id:"architecture-characteristics-ratings"},"Architecture Characteristics Ratings"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(78206).Z,width:"1128",height:"1036"})),(0,r.kt)("h1",{id:"recap"},"Recap"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5fae\u6838\u5fc3\u67b6\u69cb\u7684\u53e6\u4e00\u500b\u540d\u5b57\u662f\u4ec0\u9ebc"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u4ec0\u9ebc\u60c5\u6cc1\u4e0b\uff0c\u5916\u639b\u5143\u4ef6\u4f9d\u8cf4\u5176\u4ed6\u5916\u639b\u5143\u4ef6\u662f\u53ef\u63a5\u53d7\u7684"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u7528\u4f86\u7ba1\u7406\u5916\u639b\u7684\u5de5\u5177\u53ca\u6846\u67b6\u6709\u54ea\u4e9b"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u6709\u500b\u7b2c\u4e09\u65b9\u5916\u639b\u4e26\u4e0d\u9075\u5f9e\u6838\u5fc3\u7cfb\u7d71\u7684\u6a19\u6e96\u5916\u639b\u5408\u7d04\uff0c\u4f60\u6703\u5982\u4f55\u8655\u7406"),(0,r.kt)("li",{parentName:"ol"},"\u7d66\u5169\u500b\u5fae\u6838\u5fc3\u67b6\u69cb\u7684\u4f8b\u5b50"),(0,r.kt)("li",{parentName:"ol"},"\u5fae\u6838\u5fc3\u67b6\u69cb\u662f\u6280\u8853\u6216\u9818\u57df\u5206\u5272"),(0,r.kt)("li",{parentName:"ol"},"\u70ba\u4ec0\u9ebc\u5fae\u6838\u5fc3\u67b6\u69cb\u7e3d\u5171\u53ea\u6709\u4e00\u500b\u67b6\u69cb\u91cf\u5b50"),(0,r.kt)("li",{parentName:"ol"},"\u4ec0\u9ebc\u662f\u9818\u57df/\u67b6\u69cb\u540c\u69cb")))}m.isMDXComponent=!0},67179:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fig_12-1_basic_components_of_the_microkernel-74d9328469b6ce792973e22836cf72b1.png"},34050:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fig_12-2_different_type_of_core_system-07d7665b8ec9c31afbc8ae5e48ec5537.png"},89389:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fig_12-3_user_interface_variants-6969a3bdbd76cba230c1924d448b6941.png"},83557:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fig_12-4_shared_lib_plugin_impl-a147da8cd09387171987e506b3ab4108.png"},30498:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fig_12-5_package_or_namespace_plugin_impl-0a6cd8eefd6bd62b28487c6ba0b384b9.png"},14380:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fig_12-6_remote_plugin_access_using_rest-23111db8e69e8f6f7db3071089986fad.png"},37489:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fig_12-7_plugin_own_their_own_data_store-a3b9b8c9c2b22c11a9cf6df30bcddb5e.png"},78206:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fig_12-8_microkernel_arch_ratings-231f89f93663d874ff37006e8cbf6737.png"}}]);