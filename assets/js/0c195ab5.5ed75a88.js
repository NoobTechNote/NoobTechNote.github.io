"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[5098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Ch9: LSP - \u91cc\u6c0f\u66ff\u63db\u539f\u5247",sidebar_label:"Ch9: LSP - \u91cc\u6c0f\u66ff\u63db\u539f\u5247",sidebar_position:9},o="Liskov substitution Principle",l={unversionedId:"sg/clean-architecture/ch9",id:"sg/clean-architecture/ch9",title:"Ch9: LSP - \u91cc\u6c0f\u66ff\u63db\u539f\u5247",description:"- \u5982\u679c\u985e\u5225 T \u6709\u4e00\u500b\u5b50\u985e\u5225 S\uff0c\u90a3\u9ebc T \u53ef\u4ee5\u88ab S \u66ff\u63db\u800c\u4e0d\u6703\u767c\u751f\u4efb\u4f55\u932f\u8aa4\u3002",source:"@site/docs/sg/clean-architecture/ch9.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch9",permalink:"/docs/sg/clean-architecture/ch9",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch9.md",tags:[],version:"current",lastUpdatedBy:"Chestermozhao",lastUpdatedAt:1682233430,formattedLastUpdatedAt:"Apr 23, 2023",sidebarPosition:9,frontMatter:{title:"Ch9: LSP - \u91cc\u6c0f\u66ff\u63db\u539f\u5247",sidebar_label:"Ch9: LSP - \u91cc\u6c0f\u66ff\u63db\u539f\u5247",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Ch8: OCP - \u958b\u653e-\u5c01\u9589\u539f\u5247",permalink:"/docs/sg/clean-architecture/ch8"},next:{title:"Ch10: ISP - \u4ecb\u9762\u9694\u96e2\u539f\u5247",permalink:"/docs/sg/clean-architecture/ch10"}},c={},s=[{value:"Example",id:"example",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"liskov-substitution-principle"},"Liskov substitution Principle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u985e\u5225 T \u6709\u4e00\u500b\u5b50\u985e\u5225 S\uff0c\u90a3\u9ebc T \u53ef\u4ee5\u88ab S \u66ff\u63db\u800c\u4e0d\u6703\u767c\u751f\u4efb\u4f55\u932f\u8aa4\u3002"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"if S is a subtype of T, then objects of type T may be replaced with objects of type S ."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u884d\u751f\u7684\u5b50\u985e\u5225\u5fc5\u9808\u53ef\u4ee5\u66ff\u63db\u6210\u4ed6\u5011\u7e7c\u627f\u7684\u7236\u985e\u5225\u3002"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Derived classes must be substitutable for their base classes .")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bad way:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Rectangle {\n  constructor(private width: number, private length: number) {}\n\n  public setWidth(width: number) {\n    this.width = width;\n  }\n\n  public setLength(length: number) {\n    this.length = length;\n  }\n\n  public getArea() {\n    return this.width * this.length;\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Square extends Rectangle {\n  constructor(side: number) {\n    super(side, side);\n  }\n\n  public setWidth(width: number) {\n    // A square must maintain equal sides\n    super.setWidth(width);\n    super.setLength(width);\n  }\n\n  public setLength(length: number) {\n    super.setWidth(length);\n    super.setLength(length);\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const rect: Rectangle = new Square(10); // Can be either a Rectangle or a Square\nrect.setWidth(20);\nexpect(rect.getArea()).toBe(200); // \u274c If rect is a Square, area is 400\n")),(0,a.kt)("p",null,"Ooops"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const rect: Rectangle = new Square(10);\nrect.setWidth(20);\nif (rect instanceof Square) {\n  // ...\n} else {\n  // ...\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Good way:")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Type checking a polymorphic value is a good indicator of an LSP violation.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Shape {\n  getArea: () => number;\n}\n\ninterface Rectangle extends Shape {\n  width: number;\n  length: number;\n}\n\ninterface Square extends Shape {\n  sides: number;\n}\n\n// Implementation...\n")),(0,a.kt)("h1",{id:"example-2"},"Example 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LoadingProvider Component \u7684 children \u53c3\u6578\uff0c\u7b26\u5408 LSP")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function LoadingProvider(isLoading: boolean, children: React.ReactNode) {\n  return isLoading ? <svg>...</svg> : children;\n}\n\nfunction Button({ text: string }) {\n  return <button>{text}</button>;\n}\n\nfunction Image({ url: string }) {\n  return <img href={url} />;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<LoadingProvider isLoading={isLoading}>\n  <Button text='Click me!' />\n</LoadingProvider>\n\n<LoadingProvider isLoading={isLoading}>\n  <Image url=\"https://sample.img.url\" />\n</LoadingProvider>\n\n")))}d.isMDXComponent=!0}}]);