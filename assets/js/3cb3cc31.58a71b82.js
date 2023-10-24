"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[3171],{3905:(A,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>k});var a=t(67294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,a)}return t}function l(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function p(A,e){if(null==A)return{};var t,a,n=function(A,e){if(null==A)return{};var t,a,n={},r=Object.keys(A);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var i=a.createContext({}),o=function(A){var e=a.useContext(i),t=e;return A&&(t="function"==typeof A?A(e):l(l({},e),A)),t},u=function(A){var e=o(A.components);return a.createElement(i.Provider,{value:e},A.children)},m="mdxType",s={inlineCode:"code",wrapper:function(A){var e=A.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(A,e){var t=A.components,n=A.mdxType,r=A.originalType,i=A.parentName,u=p(A,["components","mdxType","originalType","parentName"]),m=o(t),c=n,k=m["".concat(i,".").concat(c)]||m[c]||s[c]||r;return t?a.createElement(k,l(l({ref:e},u),{},{components:t})):a.createElement(k,l({ref:e},u))}));function k(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var r=t.length,l=new Array(r);l[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=A,p[m]="string"==typeof A?A:n,l[1]=p;for(var o=2;o<r;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},21881:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=t(87462),n=(t(67294),t(3905));const r={title:"Ch4: \u7d50\u69cb\u5316\u7a0b\u5f0f\u8a2d\u8a08",sidebar_label:"Ch4: \u7d50\u69cb\u5316\u7a0b\u5f0f\u8a2d\u8a08",sidebar_position:4},l=void 0,p={unversionedId:"sg/clean-architecture/ch4",id:"sg/clean-architecture/ch4",title:"Ch4: \u7d50\u69cb\u5316\u7a0b\u5f0f\u8a2d\u8a08",description:"\u524d\u8a00",source:"@site/docs/sg/clean-architecture/ch4.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch4",permalink:"/docs/sg/clean-architecture/ch4",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch4.md",tags:[],version:"current",lastUpdatedBy:"David C Tsai",lastUpdatedAt:1698109986,formattedLastUpdatedAt:"Oct 24, 2023",sidebarPosition:4,frontMatter:{title:"Ch4: \u7d50\u69cb\u5316\u7a0b\u5f0f\u8a2d\u8a08",sidebar_label:"Ch4: \u7d50\u69cb\u5316\u7a0b\u5f0f\u8a2d\u8a08",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Ch3: \u7bc4\u5f0f\u6982\u8ff0",permalink:"/docs/sg/clean-architecture/ch3"},next:{title:"Ch5: \u7269\u4ef6\u5c0e\u5411\u7a0b\u5f0f\u8a2d\u8a08",permalink:"/docs/sg/clean-architecture/ch5"}},i={},o=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u7d50\u69cb\u5316\u7a0b\u5f0f\u8a2d\u8a08",id:"\u7d50\u69cb\u5316\u7a0b\u5f0f\u8a2d\u8a08",level:2},{value:"\u6b77\u53f2\u7de3\u7531",id:"\u6b77\u53f2\u7de3\u7531",level:3},{value:"\u8b49\u660e",id:"\u8b49\u660e",level:3},{value:"goto \u8a9e\u53e5",id:"goto-\u8a9e\u53e5",level:3},{value:"\u8207\u5faa\u5e8f\u57f7\u884c\u7d50\u5408",id:"\u8207\u5faa\u5e8f\u57f7\u884c\u7d50\u5408",level:3},{value:"\u7d50\u69cb\u5316\u7a0b\u5f0f\u8a2d\u8a08\u7684\u8b49\u660e",id:"\u7d50\u69cb\u5316\u7a0b\u5f0f\u8a2d\u8a08\u7684\u8b49\u660e",level:3},{value:"\u5927\u578b\u7a0b\u5f0f\u529f\u80fd\u5206\u89e3",id:"\u5927\u578b\u7a0b\u5f0f\u529f\u80fd\u5206\u89e3",level:3},{value:"\u79d1\u5b78\u7684\u8b49\u660e\u8207\u6e2c\u8a66",id:"\u79d1\u5b78\u7684\u8b49\u660e\u8207\u6e2c\u8a66",level:3},{value:"\u79d1\u5b78\u7684\u8b49\u660e",id:"\u79d1\u5b78\u7684\u8b49\u660e",level:4},{value:"\u6e2c\u8a66",id:"\u6e2c\u8a66",level:4},{value:"\u6e2c\u8a66\u7684\u554f\u984c",id:"\u6e2c\u8a66\u7684\u554f\u984c",level:4},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:3}],u={toc:o},m="wrapper";function s(A){let{components:e,...r}=A;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9019\u672c\u66f8\u662f\u5728\u8b1b\u67b6\u69cb\uff0c\u70ba\u4ec0\u9ebc\u8b1b\u5230\u7bc4\u5f0f\uff1f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8207\u67b6\u69cb\u7684\u95dc\u806f\uff1f")))),(0,n.kt)("p",null,"\u56de\u5230 Ch1."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u67b6\u69cb"),"\uff1a\u5f9e\u8f03\u5b8f\u89c0\u7684\u89d2\u5ea6\u53bb\u770b"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u623f\u5b50\u7684\u6a23\u8c8c\uff0c\u683c\u5c40"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u8a2d\u8a08"),"\uff1a \u5f9e\u8f03\u5fae\u89c0\u7684\u89d2\u5ea6\u770b"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u623f\u5b50\u7684\u71c8\uff0c\u63d2\u5ea7\u4f4d\u7f6e")))),(0,n.kt)("p",null,"\u8209\u500b\u524d\u7aef\u7684\u4f8b\u5b50\uff1a",(0,n.kt)("br",{parentName:"p"}),"\n","\u7576\u6536\u5230\u4e00\u500b requirement...."),(0,n.kt)("p",null,"React App Architecture:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"react-redux-architecture",src:t(98349).Z,width:"880",height:"576"})),(0,n.kt)("p",null,"\u6211\u5011\u5be6\u969b\u4e0a\u5728\u5beb\u7684\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'// React Functional Components\n// What we really write.\n\nexport const App = () => {\n    return <Component message="world!" />\n}\n\nexport const Component = ({ message }) => {\n    return <h1>Hello ${message}</h1>\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'// Another Class components example\n\nexport default class App extends React.Component {\n    constructor(props) {\n        super(props)\n        this.state = {\n            // ...\n        }\n    }\n\n    render() {\n        return <Component message="world!" />\n    }\n}\n\nexport default class Component extends React.Component {\n    constructor(props) {\n        super(props)\n        this.state = {\n            // ...\n        }\n    }\n\n    render() {\n        return <h1>Hello ${this.props.message}</h1>\n    }\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7bc4\u5f0f\u6240\u8ac7\u8ad6\u7684\u662f",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"\u7a0b\u5f0f\u8a2d\u8a08")),"\u7684\u65b9\u5f0f\uff0c\u8207\u8a9e\u8a00\u7121\u95dc\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u4f8b\u5982 javascript \u53ef\u4ee5\u7528 OOP\uff0c\u6216\u662f FP \u7684\u65b9\u5f0f\u4f86\u5beb")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u67b6\u69cb\u8207\u8a2d\u8a08\u90fd\u662f\u6574\u500b\u8edf\u9ad4(\u623f\u5b50)\u7684\u4e00\u90e8\u4efd"))),(0,n.kt)("p",null,"\u4e09\u7a2e\u7bc4\u5f0f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7d50\u69cb\u5316\u7a0b\u5f0f\u8a2d\u8a08(structured programming)"),(0,n.kt)("li",{parentName:"ul"},"\u7269\u4ef6\u5c0e\u5411\u7a0b\u5f0f\u8a2d\u8a08(object-orient programming)"),(0,n.kt)("li",{parentName:"ul"},"\u51fd\u6578\u5f0f\u7a0b\u5f0f\u8a2d\u8a08(functional programming)")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"\u67b6\u69cb\u7684\u4e09\u5927\u95dc\u6ce8\u9ede\uff1a ",(0,n.kt)("strong",{parentName:"em"},"\u51fd\u5f0f"),"\u3001",(0,n.kt)("strong",{parentName:"em"},"\u5143\u4ef6\u5206\u96e2"),"\u3001",(0,n.kt)("strong",{parentName:"em"},"\u8cc7\u6599\u7ba1\u7406")),(0,n.kt)("br",{parentName:"p"}),"\n","(\u539f\u6587\u70ba function\uff0c\u61c9\u53ef\u89e3\u91cb\u70ba",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"\u529f\u80fd")),")")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u7d50\u69cb\u5316\u7a0b\u5f0f\u8a2d\u8a08"},"\u7d50\u69cb\u5316\u7a0b\u5f0f\u8a2d\u8a08"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5c07\u4e00\u7d44\u7a0b\u5f0f\u62c6\u89e3\u6210\u4e00\u7d44\u4e00\u7d44\u5c0f\u7684\u53ef\u8b49\u660e\u7684\u529f\u80fd\uff0c\u7136\u5f8c\u6211\u5011\u4f7f\u7528",(0,n.kt)("em",{parentName:"p"},"\u6e2c\u8a66"),"\u4f86\u8a66\u5716\u8b49\u660e\u9019\u4e9b\u529f\u80fd\u662f\u4e0d\u6b63\u78ba\u7684\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u6e2c\u8a66\u4e0d\u80fd\u8b49\u660e\u4ed6\u5011\u662f\u4e0d\u6b63\u78ba\u7684\uff0c\u90a3\u6211\u5011\u5c31\u53ef\u4ee5\u8a8d\u70ba\u9019\u4e9b\u529f\u80fd\u5c0d\u6211\u5011\u7684\u76ee\u7684\u4f86\u8aaa\u662f\u6b63\u78ba\u7684\u3002")),(0,n.kt)("h3",{id:"\u6b77\u53f2\u7de3\u7531"},"\u6b77\u53f2\u7de3\u7531"),(0,n.kt)("p",null,"\u5728\u65e9\u671f\u771f\u7a7a\u7ba1\u6642\u4ee3\uff0c\u96fb\u8166\u7a0b\u5f0f\u662f\u7528\u4e8c\u9032\u5236\u6216\u7c97\u7cd9\u7684\u7d44\u5408\u8a9e\u8a00\u7de8\u5beb\u3002\u4f7f\u7528\u7684\u662f\u7d19\u5e36\u6216\u6253\u5b54\u5361\u3002\u4efb\u4f55\u8907\u96dc\u7684\u7a0b\u5f0f\u90fd\u5305\u542b\u592a\u591a\u7d30\u7bc0\u3002\u5728\u770b\u4f3c\u53ef\u884c\u7684\u7a0b\u5f0f\u88e1\uff0c\u5de5\u7a0b\u5e2b\u53ea\u80fd\u4fef\u77b0\u4e00\u500b\u5c0f\u7d30\u7bc0\u7684\u6210\u679c\uff0c\u4f46\u7d50\u679c\u5e38\u5e38\u662f\u5931\u6557\u3002"),(0,n.kt)("p",null,"Dijkstra \u5e0c\u671b\u900f\u904e\u6578\u5b78\u539f\u7406\u4e0a\u7684",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"\u8b49\u660e")),"\u4f86\u89e3\u6c7a\u9019\u500b\u554f\u984c\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"tape",src:t(28939).Z,width:"480",height:"252"}),"\n",(0,n.kt)("img",{alt:"tape",src:t(72892).Z,width:"500",height:"188"})),(0,n.kt)("h3",{id:"\u8b49\u660e"},"\u8b49\u660e"),(0,n.kt)("p",null,"Dijkstra \u8a8d\u70ba\u53ef\u4ee5\u7528\u6578\u5b78\u88e1\u7684",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"\u5c64\u6b21\u7d50\u69cb")),"\u4f86\u8b49\u660e\u7a0b\u5f0f\u662f\u6b63\u78ba\u7684\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u4e5f\u5c31\u662f\u8aaa\uff0c\u7a0b\u5f0f\u8a2d\u8a08\u5e2b\u5c07\u5df2\u7d93\u8b49\u660e\u904e\u7684\u7d50\u69cb\uff0c\u4e26\u5c07\u4ed6\u5011\u8207\u7a0b\u5f0f\u78bc\u7d81\u5728\u4e00\u8d77\uff0c\u7136\u5f8c\u81ea\u884c\u8b49\u660e\u4ed6\u5011\u662f\u6b63\u78ba\u7684\u3002\n",(0,n.kt)("img",{alt:"math",src:t(40990).Z,width:"1090",height:"570"})),(0,n.kt)("h3",{id:"goto-\u8a9e\u53e5"},"goto \u8a9e\u53e5"),(0,n.kt)("p",null,"Dijkstra \u767c\u73fe",(0,n.kt)("inlineCode",{parentName:"p"},"goto")," \u8a9e\u53e5\u7684\u67d0\u4e9b\u7528\u6cd5\u6703\u963b\u6b62\u6a21\u7d44\u88ab\u5206\u89e3\u6210\u8d8a\u4f86\u8d8a\u5c0f\u7684\u55ae\u5143\uff0c\u9019\u6a23\u6703\u7121\u6cd5\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://yalanin.medium.com/%e6%bc%94%e7%ae%97%e6%b3%95-%e5%88%86%e6%b2%bb%e6%b3%95-divide-and-conquer-592145d72699"},"divide-and-conquer"),"\u7684\u65b9\u6cd5\u4f86\u5408\u7406\u8b49\u660e\u3002"),(0,n.kt)("p",null,"\u4f46\u662f\u6709\u4e9b\u4f7f\u7528\u65b9\u59cb\u6c92\u6709\u9019\u500b\u554f\u984c\uff0c\u800c\u9019\u4e9b\u4f7f\u7528\u65b9\u5f0f\u6703\u5c0d\u61c9\u5230\u7c21\u55ae\u7684\u63a7\u5236\u7d50\u69cb\uff0c\u5305\u542b\uff1aif/then/else \u548c do/while\u3002"),(0,n.kt)("p",null,"\u6a21\u7d44\u5982\u679c",(0,n.kt)("strong",{parentName:"p"},"\u53ea\u4f7f\u7528"),"\u9019\u985e\u578b\u7684\u63a7\u5236\u7d50\u69cb\uff0c\u5c31\u53ef\u4ee5\u88ab\u905e\u8ff4\u7d30\u5206\u70ba\u53ef\u8b49\u660e\u7684\u55ae\u5143\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"goto",src:t(88424).Z,width:"425",height:"502"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"sp",src:t(88577).Z,width:"1196",height:"1204"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Ref: ",(0,n.kt)("a",{parentName:"em",href:"https://stackoverflow.com/questions/3517726/what-is-wrong-with-using-goto"},"What is wrong with using goto?"))),(0,n.kt)("h3",{id:"\u8207\u5faa\u5e8f\u57f7\u884c\u7d50\u5408"},"\u8207\u5faa\u5e8f\u57f7\u884c\u7d50\u5408"),(0,n.kt)("p",null,"Dijkstra \u767c\u73fe\u9019\u4e9b\u63a7\u5236\u7d50\u69cb\u8207\u5faa\u5e8f\u57f7\u884c\u7d50\u5408\u6642\uff0c\u662f\u975e\u5e38\u7279\u6b8a\u3002\u800c"),(0,n.kt)("p",null,"Bohm \u8207 Jacopini \u8b49\u660e\u4e86\u6240\u6709\u7a0b\u5f0f\u90fd\u53ef\u4ee5\u4f7f\u7528\u4e09\u7a2e\u7d50\u69cb\u5efa\u69cb\u51fa\u4f86(\u53ef\u4ee5\u88ab\u8b49\u660e)\uff0c\u5206\u5225\u662f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5faa\u5e8f(sequence)"),(0,n.kt)("li",{parentName:"ul"},"\u9078\u64c7(selection)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/zh-tw/%E8%BF%AD%E4%BB%A3"},"\u8fed\u4ee3(iteration)"),"\n(\u7db2\u8def\u67e5\u662f\u905e\u8ff4\uff0c\u8ff4\u5708)")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u539f\u6587\uff1a\u5efa\u69cb\u53ef\u8b49\u6a21\u7d44\u7684\u63a7\u5236\u7d50\u69cb\u5c31\u662f",(0,n.kt)("em",{parentName:"p"},"\u53ef\u5efa\u69cb\u6240\u6709\u57ce\u5e02\u7684\u63a7\u5236\u7d50\u69cb"),"\u7684\u6700\u5c0f\u96c6\u5408\uff0c\u56e0\u6b64\u7d50\u69cb\u5316\u7a0b\u5f0f\u8a2d\u8a08\u8a95\u751f\u4e86\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u63db\u53e5\u8a71\u8aaa\uff1a \u6240\u6709\u7a0b\u5f0f\u7684\u53ef\u4ee5\u7531\u5f88\u591a\u500b\u5c0f\u7684\u53ef\u4ee5\u88ab\u8b49\u660e\u7684\u7a0b\u5f0f\u6240\u7d44\u6210\u3002")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5faa\u5e8f\u7d50\u69cb"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u9078\u64c7\u7d50\u69cb"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8fed\u4ee3\u7d50\u69cb\u69cb"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"sequence-structure",src:t(90600).Z,width:"111",height:"191"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"selection-structure",src:t(62909).Z,width:"426",height:"238"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repeater-structure",src:t(77005).Z,width:"306",height:"217"}))))),(0,n.kt)("h3",{id:"\u7d50\u69cb\u5316\u7a0b\u5f0f\u8a2d\u8a08\u7684\u8b49\u660e"},"\u7d50\u69cb\u5316\u7a0b\u5f0f\u8a2d\u8a08\u7684\u8b49\u660e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5faa\u5e8f(sequence)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u900f\u904e\u7c21\u55ae\u4f86\u5217\u8209\uff1a \u7531\u5faa\u5e8f\u8f38\u5165\u8ffd\u8e64\u5230\u5faa\u5e8f\u8f38\u51fa\u3002"))),(0,n.kt)("li",{parentName:"ul"},"\u9078\u64c7(selection)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5217\u8209\u4f86\u8b49\u660e\uff1a \u5c07\u9078\u64c7\u7684\u6bcf\u689d\u8def\u5f91\u90fd\u5217\u8209\u51fa\u4f86\uff0c\u5982\u679c\u5169\u689d\u8def\u5f91\u6700\u7d42\u90fd\u7522\u751f\u4e86\u6070\u7576\u7684\u6578\u5b78\u7d50\u679c\uff0c\u5247\u8b49\u660e\u5c31\u662f\u53ef\u9760\u7684\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/zh-tw/%E8%BF%AD%E4%BB%A3"},"\u8fed\u4ee3(iteration)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6578\u5b78\u6b78\u7d0d\u6cd5\uff1a \u5148\u900f\u904e\u5217\u8209\u8b49\u660e 1 \u7684\u60c5\u6cc1\uff0c\u7136\u5f8c\u518d\u6b21\u900f\u904e\u5217\u8209\uff0c\u8b49\u660e\u5982\u679c N \u5047\u5b9a\u662f\u6b63\u78ba\u7684\uff0c\u90a3\u9ebc N+1 \u5c31\u662f\u6b63\u78ba\u7684\u3002")))),(0,n.kt)("h3",{id:"\u5927\u578b\u7a0b\u5f0f\u529f\u80fd\u5206\u89e3"},"\u5927\u578b\u7a0b\u5f0f\u529f\u80fd\u5206\u89e3"),(0,n.kt)("p",null,"\u56e0\u70ba\u7d50\u69cb\u5316\u7a0b\u5f0f\u8a2d\u8a08\u5141\u8a31\u5c07\u6a21\u7d44\u5206\u89e3\u6210\u4e00\u500b\u500b\u7684\u53ef\u8b49\u660e\u7684\u55ae\u5143\uff0c\u6240\u4ee5\u53ea\u8981\u7a0b\u5f0f\u8a2d\u8a08\u5e2b\u9075\u5faa\u9019\u4e9b\u9650\u5236\u898f\u5247(\u53c3\u8003 ",(0,n.kt)("a",{parentName:"p",href:"#goto-%E8%AA%9E%E5%8F%A5"},"goto"),")\uff0c",(0,n.kt)("br",{parentName:"p"}),"\n","\u5c31\u53ef\u4ee5\u5c07\u5927\u578b\u7684\u7cfb\u7d71\uff0c\u5206\u89e3\u6210\u4e00\u500b\u500b\u5fae\u5c0f\u7684\u3001\u53ef\u8b49\u660e\u529f\u80fd\u7684\u6a21\u7d44\u548c\u5143\u4ef6\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"\u73fe\u5728\uff0c\u6211\u5011\u90fd\u662f\u7d50\u69cb\u5316\u7684\u7a0b\u5f0f\u8a2d\u8a08\u5e2b\uff0c\u96d6\u7136\u9019\u4e0d\u4e00\u5b9a\u662f\u4f60\u9078\u64c7\u7684\u3002"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("em",{parentName:"p"},"\u53ea\u662f\u56e0\u70ba\u6211\u5011\u7684\u8a9e\u8a00\u7121\u6cd5\u8b93\u6211\u5011\u9078\u64c7\u4f7f\u7528\u7121\u689d\u4ef6\u76f4\u63a5\u8f49\u79fb\u63a7\u5236\u3002")," (",(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/9751207/how-can-i-use-goto-in-javascript"},"really?")," \ud83d\ude0f\ud83d\ude0f\ud83d\ude0f)")),(0,n.kt)("h3",{id:"\u79d1\u5b78\u7684\u8b49\u660e\u8207\u6e2c\u8a66"},"\u79d1\u5b78\u7684\u8b49\u660e\u8207\u6e2c\u8a66"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\u6578\u5b78\u662f\u8981\u8b49\u660e\u9673\u8ff0\u662f true\uff0c\u79d1\u5b78\u662f\u8981\u8b49\u660e\u9673\u8ff0\u662f false")),(0,n.kt)("h4",{id:"\u79d1\u5b78\u7684\u8b49\u660e"},"\u79d1\u5b78\u7684\u8b49\u660e"),(0,n.kt)("p",null,"\u79d1\u5b78\u7684\u5b9a\u7406\u548c\u5b9a\u5f8b\u90fd\u7121\u6cd5\u7528\u8b49\u660e\u4f86\u8868\u9054\u5176\u6b63\u78ba\u6027\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u4f8b\u5982\uff1a\u8b49\u660e\u725b\u9813\u7b2c\u4e8c\u904b\u52d5\u5b9a\u5f8b F=ma\uff0c\u7121\u502b\u591a\u5c11\u6b21\u5be6\u9a57\uff0c\u7e3d\u6709\u4e00\u4e9b\u5be6\u9a57\u8b49\u660e\u4ed6\u662f\u4e0d\u6b63\u78ba\u7684\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"\u79d1\u5b78\u4e26\u975e\u8981\u8b49\u660e\u9673\u8ff0\u662f\u6b63\u78ba\u7684\uff0c\u800c\u662f\u8981",(0,n.kt)("strong",{parentName:"li"},"\u8b49\u660e\u9673\u8ff0\u662f\u932f\u8aa4\u7684"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u6211\u5011\u7d93\u904e\u52aa\u529b\u9084\u662f\u7121\u6cd5\u8b49\u660e\u4ed6\u662f false\uff0c\u90a3\u9ebd\u6211\u5011\u5c31\u8a8d\u70ba\u4ed6\u8db3\u5920\u6b63\u78ba\u3002"))),(0,n.kt)("h4",{id:"\u6e2c\u8a66"},"\u6e2c\u8a66"),(0,n.kt)("p",null,"\u73fe\u5728\u6211\u5011\u7684\u6e2c\u8a66\u90fd\u662f\u7528\u79d1\u5b78\u7684\u65b9\u5f0f\u8b49\u660e"),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"\u6e2c\u8a66\u986f\u793a\u4e86\u932f\u8aa4\u7684\u5b58\u5728\uff0c\u800c\u4e0d\u662f\u6c92\u6709\u932f\u8aa4\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u9019\u7a2e\u8b49\u660e\u4e0d\u6b63\u78ba\u7684\u65b9\u5f0f\u53ea\u80fd\u7528\u65bc\u53ef\u8b49\u7684\u7a0b\u5f0f\uff0c\u4e00\u500b\u4e0d\u53ef\u6b63\u7684\u7a0b\u5f0f(",(0,n.kt)("em",{parentName:"li"},"\u7121\u9650\u5236\u7684"),"\u4f7f\u7528 goto)\u4e0d\u80fd\u88ab\u8a8d\u70ba\u662f\u6b63\u78ba\u7684\u3002"))),(0,n.kt)("h4",{id:"\u6e2c\u8a66\u7684\u554f\u984c"},"\u6e2c\u8a66\u7684\u554f\u984c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"// javascript\nfunction Add(a, b) {\n    return a + b\n}\n\n// safe\uff1f\ntest('Is sum of two number', () => {\n    expect(Add(2, 2).toBe(4)\n})\n\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://forum.gamer.com.tw/Co.php?bsn=60076&sn=57532520"},"\u5de5\u7a0b\u5e2b\uff1a\u4f60\u518d\u8ddf\u6211\u8aaa\u4e00\u6b21\u4f60\u662f\u600e\u9ebc\u5f04\u7684")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"\u4f60\u6c38\u9060\u4e0d\u77e5\u9053User\u6703\u600e\u9ebc\u4f7f\u7528\u6211\u5011\u7684\u7522\u54c1"),(0,n.kt)("img",{src:"https://i.pinimg.com/originals/b6/53/01/b653019680cd24ff0a44001f78783fbd.gif"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/tpNmPKjPSFQ?t=196"},"\u50b3\u6559\uff1aWrite fewer tests!"))),(0,n.kt)("h3",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7121\u9650\u5236\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"goto"),"\u6703\u4f7f\u7a0b\u5f0f\u7121\u6cd5\u88ab\u5206\u89e3\u6210\u53ef\u88ab\u8b49\u660e\u7684\u55ae\u5143(\u7121\u6cd5\u88ab\u6e2c\u8a66)"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7d50\u69cb\u5316\u7a0b\u5f0f\u8feb\u4f7f\u6211\u5011\u5c07\u7a0b\u5f0f\u5206\u89e3\u6210\u4e00\u7d44\u7d44\u53ef\u88ab\u8b49\u660e\u7684\u55ae\u5143"),(0,n.kt)("li",{parentName:"ul"},"\u5927\u578b\u7a0b\u5f0f\u7531\u5c0f\u7684\u53ef\u88ab\u6e2c\u8a66\u7684\u55ae\u5143\u7d44\u6210"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E7%B5%90%E6%A7%8B%E5%8C%96%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88"},"\u56de\u5230\u958b\u982d"))))}s.isMDXComponent=!0},28939:(A,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/60mtape-4c7ecfe509cc0e544a559a8e941c44e4.jpeg"},72892:(A,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/60ptape-b6ba6a8c1effe73d892af4f8a834404a.jpeg"},88424:(A,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/goto-9f99525f00f8d249e512635bccc490ea.png"},40990:(A,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/math-deba5f137f83ccf49753038df1a8c74b.jpeg"},98349:(A,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/react-redux-architecture-d5d49d644bdfdde4fab10e820aefcae6.png"},77005:(A,e,t)=>{t.d(e,{Z:()=>a});const a="data:image/png;base64,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"},62909:(A,e,t)=>{t.d(e,{Z:()=>a});const a="data:image/png;base64,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"},90600:(A,e,t)=>{t.d(e,{Z:()=>a});const a="data:image/png;base64,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"},88577:(A,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/sp-3924e2951bc4f159f1de306fdf4f6391.jpeg"}}]);