"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[7168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=o(n),h=a,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var o=2;o<i;o++)c[o]=n[o];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},26314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={title:"Ch8: OCP - \u958b\u653e-\u5c01\u9589\u539f\u5247",sidebar_label:"Ch8: OCP - \u958b\u653e-\u5c01\u9589\u539f\u5247",sidebar_position:8},c="Open-Closed Principle",l={unversionedId:"sg/clean-architecture/ch8",id:"sg/clean-architecture/ch8",title:"Ch8: OCP - \u958b\u653e-\u5c01\u9589\u539f\u5247",description:"- \u4e00\u500b\u8edf\u9ad4\u88fd\u54c1\u61c9\u8a72\u5c0d\u65bc\u64f4\u5c55\u662f\u958b\u653e\u7684\uff0c\u4f46\u5c0d\u65bc\u4fee\u6539\u662f\u5c01\u9589\u7684\u3002",source:"@site/docs/sg/clean-architecture/ch8.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch8",permalink:"/docs/sg/clean-architecture/ch8",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch8.md",tags:[],version:"current",lastUpdatedBy:"Terry SF Huang",lastUpdatedAt:1685528777,formattedLastUpdatedAt:"May 31, 2023",sidebarPosition:8,frontMatter:{title:"Ch8: OCP - \u958b\u653e-\u5c01\u9589\u539f\u5247",sidebar_label:"Ch8: OCP - \u958b\u653e-\u5c01\u9589\u539f\u5247",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Ch7: SRP - \u55ae\u4e00\u8077\u8cac\u539f\u5247",permalink:"/docs/sg/clean-architecture/ch7"},next:{title:"Ch9: LSP - \u91cc\u6c0f\u66ff\u63db\u539f\u5247",permalink:"/docs/sg/clean-architecture/ch9"}},u={},o=[{value:"\u4e00\u500b\u69cb\u60f3\u5be6\u9a57",id:"\u4e00\u500b\u69cb\u60f3\u5be6\u9a57",level:2},{value:"Example",id:"example",level:2},{value:"Example 2",id:"example-2",level:2}],s={toc:o},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"open-closed-principle"},"Open-Closed Principle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u500b\u8edf\u9ad4\u88fd\u54c1\u61c9\u8a72\u5c0d\u65bc\u64f4\u5c55\u662f\u958b\u653e\u7684\uff0c\u4f46\u5c0d\u65bc\u4fee\u6539\u662f\u5c01\u9589\u7684\u3002",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'"Software modules should be open for extension, but closed for modification."')))),(0,a.kt)("h2",{id:"\u4e00\u500b\u69cb\u60f3\u5be6\u9a57"},"\u4e00\u500b\u69cb\u60f3\u5be6\u9a57"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e00\u500b\u597d\u7684\u8edf\u4ef6\u67b6\u69cb\u53ef\u4ee5\u5c07\u4fee\u6539\u7684\u7a0b\u5f0f\u78bc\u6e1b\u5c11\u5230\u6700\u4f4e\u7a0b\u5ea6\uff0c\u751a\u81f3\u70ba 0\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5143\u4ef6\u95dc\u4fc2\u662f\u55ae\u5411",src:n(88610).Z,width:"391",height:"241"})),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bad way:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Rectangle {\n  public width: number;\n  public height: number;\n\n  constructor(width: number, height: number) {\n    this.width = width;\n    this.height = height;\n  }\n}\n\nclass Circle {\n  public radius: number;\n\n  constructor(radius: number) {\n    this.radius = radius;\n  }\n}\n\nclass AreaCalculator {\n  public calculateRectangleArea(rectangle: Rectangle): number {\n    return rectangle.width * rectangle.height;\n  }\n\n  public calculateCircleArea(circle: Circle): number {\n    return Math.PI * (circle.radius * circle.radius);\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Good way: add an interface called Shape")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Shape {\n  calculateArea(): number;\n}\n\nclass Rectangle implements Shape {\n  public width: number;\n  public height: number;\n\n  constructor(width: number, height: number) {\n    this.width = width;\n    this.height = height;\n  }\n\n  public calculateArea(): number {\n    return this.width * this.height;\n  }\n}\n\nclass Circle implements Shape {\n  public radius: number;\n\n  constructor(radius: number) {\n    this.radius = radius;\n  }\n\n  public calculateArea(): number {\n    return Math.PI * (this.radius * this.radius);\n  }\n}\n\nclass AreaCalculator {\n  public calculateArea(shape: Shape): number {\n    return shape.calculateArea();\n  }\n}\n")),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open\u2013Closed Principle in Functional TypeScript")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function Button({ text }: ButtonProps) {\n  return <button>{text}</button>;\n}\n\nfunction App() {\n  return <Button text='Click me!' />;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function Button({ text, isLoading }: ButtonProps) {\n  if (isLoading) {\n    return <svg>...</svg>;\n  }\n\n  return <button>{text}</button>;\n}\n\nfunction App() {\n  return <Button text='Click me!' isLoading={true} />;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function Loading({ isLoading, children }: LoadingProps) {\n  return isLoading ? <svg>...</svg> : children;\n}\n\nfunction Button({ text }: ButtonProps) {\n  return <button>{text}</button>;\n}\n\nfunction App() {\n  return (\n    <Loading isLoading={true}>\n      <Button text='Click me!' />\n    </Loading>\n  );\n}\n")))}d.isMDXComponent=!0},88610:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/8.3-be2f78b8de609395a558a8d8cc081136.png"}}]);