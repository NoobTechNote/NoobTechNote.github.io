"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[2691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={title:"Ch24: \u90e8\u5206\u908a\u754c",tsidebar_label:"Ch24: \u90e8\u5206\u908a\u754c",sidebar_position:24},o=void 0,i={unversionedId:"sg/clean-architecture/ch24",id:"sg/clean-architecture/ch24",title:"Ch24: \u90e8\u5206\u908a\u754c",description:"\u642d\u5efa\u5168\u9762\u6027\u7684\u67b6\u69cb\u908a\u754c\u662f\u6602\u8cb4\u7684\uff0c\u5305\u542b Input & Output \u8cc7\u6599\u7d50\u69cb\u3001\u5143\u4ef6\u90e8\u7f72\u3001\u4f9d\u8cf4\u7ba1\u7406\uff0c\u7dad\u8b77\u8d77\u4f86\u4e5f\u8981\u82b1\u8cbb\u4e0d\u5c11\u5fc3\u529b \u21d2 \u642d\u5efa\u7684\u908a\u754c\u9700\u8981\u96d9\u65b9\u90fd\u80fd\u5920\u53d7\u60e0\u3002",source:"@site/docs/sg/clean-architecture/ch24.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch24",permalink:"/docs/sg/clean-architecture/ch24",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch24.md",tags:[],version:"current",lastUpdatedBy:"LuPeter",lastUpdatedAt:1693949505,formattedLastUpdatedAt:"Sep 5, 2023",sidebarPosition:24,frontMatter:{title:"Ch24: \u90e8\u5206\u908a\u754c",tsidebar_label:"Ch24: \u90e8\u5206\u908a\u754c",sidebar_position:24},sidebar:"tutorialSidebar",previous:{title:"Ch23: Presenter \u8207 Humble Object",permalink:"/docs/sg/clean-architecture/ch23"},next:{title:"Ch25: \u5c64\u8207\u908a\u754c",permalink:"/docs/sg/clean-architecture/ch25"}},c={},l=[{value:"\u4e00\u7dad\u7684\u908a\u754c",id:"\u4e00\u7dad\u7684\u908a\u754c",level:2},{value:"Facade (\u5916\u89c0)\u6a21\u5f0f",id:"facade-\u5916\u89c0\u6a21\u5f0f",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...s}=e;return(0,a.kt)(u,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u642d\u5efa\u5168\u9762\u6027\u7684\u67b6\u69cb\u908a\u754c\u662f\u6602\u8cb4\u7684\uff0c\u5305\u542b Input & Output \u8cc7\u6599\u7d50\u69cb\u3001\u5143\u4ef6\u90e8\u7f72\u3001\u4f9d\u8cf4\u7ba1\u7406\uff0c\u7dad\u8b77\u8d77\u4f86\u4e5f\u8981\u82b1\u8cbb\u4e0d\u5c11\u5fc3\u529b \u21d2 ",(0,a.kt)("strong",{parentName:"p"},"\u642d\u5efa\u7684\u908a\u754c\u9700\u8981\u96d9\u65b9\u90fd\u80fd\u5920\u53d7\u60e0"),"\u3002"),(0,a.kt)("p",null,"\u5373\u4f7f\u9054\u5230\u4e0a\u8ff0\u7684\u6210\u679c\u904e\u65bc\u6602\u8cb4\uff0c\u4f46\u8003\u91cf\u5230\u65e5\u5f8c\u9700\u8981\uff0c\u9084\u662f\u5f97\u66ff\u908a\u754c\u4fdd\u7559\u4e00\u500b\u4f4d\u7f6e\uff0c\u900f\u904e\u5be6\u4f5c ",(0,a.kt)("strong",{parentName:"p"},"\u90e8\u5206\u908a\u754c(Partial Boundary)")," \u7684\u65b9\u5f0f\u9054\u6210 \u21d2 \u9810\u60f3\u7684\u8a2d\u8a08"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it"},"\u8edf\u9ad4\u8a2d\u8a08\u539f\u5247 YAGNI (You aren't gonna need it!)")),(0,a.kt)("h2",{id:"\u4e00\u7dad\u7684\u908a\u754c"},"\u4e00\u7dad\u7684\u908a\u754c"),(0,a.kt)("p",null,"\u8981\u80fd\u7dad\u6301\u5b8c\u6574\u7684\u67b6\u69cb\u908a\u754c\uff0c\u9700\u8981\u63a1\u7528\u96d9\u65b9\u90fd\u80fd\u4e92\u60e0\u7684",(0,a.kt)("strong",{parentName:"p"},"\u300c\u908a\u754c\u4ecb\u9762\u300d"),"\u4f86\u7dad\u8b77\u96d9\u5411\u9694\u96e2 \u21d2 \u5728\u5169\u500b\u65b9\u5411(\u521d\u59cb\u8a2d\u5b9a\u3001\u9032\u884c\u4e2d\u7684\u7dad\u8b77)\u4e0a\u4fdd\u6301\u5206\u96e2\u662f\u6602\u8cb4\u7684"),(0,a.kt)("p",null,"\u7bc4\u4f8b\uff1a\u7b56\u7565\u6a21\u5f0f (Strategy Pattern)\n",(0,a.kt)("img",{alt:"strategyPattern",src:n(98507).Z,width:"810",height:"328"}),"\nService Boundary \u4ecb\u9762\u63d0\u4f9b\u7d66 Client \u4f7f\u7528\uff0c\u7531 ServiceImpl \u9032\u884c\u5be6\u4f5c\uff0c\u900f\u904e\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247(DIP)\u7684\u65b9\u5f0f\u9054\u5230 Client \u8207 ServiceImpl \u7684\u9694\u96e2 \u21d2 \u66ff\u672a\u4f86\u7684\u67b6\u69cb\u908a\u754c\u5960\u5b9a\u57fa\u790e"),(0,a.kt)("h2",{id:"facade-\u5916\u89c0\u6a21\u5f0f"},"Facade (\u5916\u89c0)\u6a21\u5f0f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u70ba\u591a\u500b\u5b50\u7cfb\u7d71\u63d0\u4f9b\u4e00\u500b\u7d71\u4e00\u7684\u9ad8\u5c64\u7d1a\u63a5\u53e3\uff0c\u4f7f\u5f97\u5b50\u7cfb\u7d71\u66f4\u5bb9\u6613\u4f7f\u7528\u3002")),(0,a.kt)("p",null,"\u5716\u793a Facade \u6a21\u5f0f\n",(0,a.kt)("img",{alt:"facade(book)",src:n(50932).Z,width:"1730",height:"716"})),(0,a.kt)("p",null,"\u751f\u6d3b\u6848\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"facade(sample)",src:n(51495).Z,width:"528",height:"181"})),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://refactoring.guru/design-patterns/facade"},"https://refactoring.guru/design-patterns/facade")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u908a\u754c\u7531\u300cFacade\u300d\u7684\u985e\u5225\u4f86\u5b9a\u7fa9\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'""" An example of Facade pattern"""\n\nclass Subsystem1:\n\n    def start(self):\n        print("Subsystem1 is operating...")\n\nclass Subsystem2:\n\n    def start(self):\n        print("Subsystem2 is operating...")\n\nclass Subsystem3:\n\n    def start(self):\n        print("Subsystem3 is operating...")\n\nclass CommissionerFacade:\n    \n    \'\'\'Facade\'\'\'\n    def __init__(self) -> None:\n        self._subsystem1 = Subsystem1()\n        self._subsystem2 = Subsystem2()\n        self._subsystem3 = Subsystem3()\n    \n    def operate(self):\n        self._subsystem1.start()\n        self._subsystem2.start()\n        self._subsystem3.start()\n\ndef client(facade: CommissionerFacade) -> None:\n\n    print("Calling from client")\n    facade.operate()\n    print("Done.")\n\nif __name__ == "__main__":\n    commissionerFacade = CommissionerFacade()\n    client(commissionerFacade)\n\n# Output\n"""\nCalling from client\nSubsystem1 is operating...\nSubsystem2 is operating...\nSubsystem3 is operating...\nDone.\n"""\n')),(0,a.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,a.kt)("p",null,"\u6bcf\u7a2e\u65b9\u5f0f\u90fd\u6709\u5c6c\u65bc\u5b83\u81ea\u5df1\u7684\u6210\u672c & \u6548\u76ca\uff0c\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u6bcf\u500b\u90fd\u9069\u5408\u5148\u884c\u4f54\u7528\u9019\u500b\u4f4d\u7f6e\uff0c\u80fd\u8b93\u9019\u500b\u4f4d\u7f6e\u6700\u7d42\u6210\u70ba\u5b8c\u6574\u7684\u908a\u754c\u3002"),(0,a.kt)("p",null,"\u67b6\u69cb\u5e2b\u7684\u8077\u8cac\uff1a\u5728\u4f55\u8655\u754c\u5b9a\u67b6\u69cb\u908a\u754c\u4ee5\u53ca\u5b8c\u5168 or \u53ea\u90e8\u5206\u5be6\u4f5c\u908a\u754c"))}d.isMDXComponent=!0},50932:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/24.2-50fa2fd4359f39a066fe3b7c24cdcd28.png"},51495:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/facade-09dd9bc90db0448ad87f947f2eff9b00.png"},98507:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/strategyPattern-0a4b1973d7aeded957f9338d8b67964c.png"}}]);