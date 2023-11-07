"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[2796],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>N});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),c=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,N=m["".concat(o,".").concat(d)]||m[d]||p[d]||r;return a?l.createElement(N,i(i({ref:t},s),{},{components:a})):l.createElement(N,i({ref:t},s))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[m]="string"==typeof e?e:n,i[1]=u;for(var c=2;c<r;c++)i[c]=a[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var l=a(87462),n=a(67294),r=a(86010),i=a(12466),u=a(16550),o=a(91980),c=a(67392),s=a(50012);function m(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:l,default:n}}=e;return{value:t,label:a,attributes:l,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function N(e){let{queryString:t=!1,groupId:a}=e;const l=(0,u.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,r=p(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=a.find((e=>e.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[o,c]=N({queryString:a,groupId:l}),[m,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,s.Nk)(a);return[l,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:l}),b=(()=>{const e=o??m;return d({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),k(e)}),[c,k,r]),tabValues:r}}var b=a(72389);const I={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:u,selectValue:o,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=s.indexOf(t),l=c[a].value;l!==u&&(m(t),o(l))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>s.push(e),onKeyDown:d,onClick:p},i,{className:(0,r.Z)("tabs__item",I.tabItem,i?.className,{"tabs__item--active":u===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:l}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function h(e){const t=k(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",I.tabList)},n.createElement(f,(0,l.Z)({},e,t)),n.createElement(g,(0,l.Z)({},e,t)))}function v(e){const t=(0,b.Z)();return n.createElement(h,(0,l.Z)({key:String(t)},e))}},21913:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>N,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var l=a(87462),n=(a(67294),a(3905)),r=a(74866),i=a(85162);const u={title:"Ch1: \u91cd\u69cb\u91cd\u69cb",sidebar_label:"Ch1: \u91cd\u69cb\u91cd\u69cb",sidebar_position:1},o=void 0,c={unversionedId:"sg/five-lines-of-code/ch1",id:"sg/five-lines-of-code/ch1",title:"Ch1: \u91cd\u69cb\u91cd\u69cb",description:"1.1 \u4ec0\u9ebc\u662f\u91cd\u69cb",source:"@site/docs/sg/five-lines-of-code/ch1.mdx",sourceDirName:"sg/five-lines-of-code",slug:"/sg/five-lines-of-code/ch1",permalink:"/docs/sg/five-lines-of-code/ch1",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/five-lines-of-code/ch1.mdx",tags:[],version:"current",lastUpdatedBy:"Ming-Yen Chung",lastUpdatedAt:1699315470,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:1,frontMatter:{title:"Ch1: \u91cd\u69cb\u91cd\u69cb",sidebar_label:"Ch1: \u91cd\u69cb\u91cd\u69cb",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4e94\u884c\u7a0b\u5f0f\u78bc\u898f\u5247 - \u91cd\u69cb\u7684\u6642\u6a5f\u8207\u5be6\u4f5c",permalink:"/docs/sg/five-lines-of-code/"},next:{title:"Ch2: \u6df1\u5165\u77ad\u89e3\u91cd\u69cb\u7684\u539f\u7406",permalink:"/docs/sg/five-lines-of-code/ch2"}},s={},m=[{value:"1.1 \u4ec0\u9ebc\u662f\u91cd\u69cb",id:"11-\u4ec0\u9ebc\u662f\u91cd\u69cb",level:2},{value:"1.1.1 \u70ba\u4ec0\u9ebc\u8981\u91cd\u69cb",id:"111-\u70ba\u4ec0\u9ebc\u8981\u91cd\u69cb",level:2},{value:"1.2 \u8981\u91cd\u69cb\u4ec0\u9ebc\uff1f",id:"12-\u8981\u91cd\u69cb\u4ec0\u9ebc",level:2},{value:"\u300c\u58de\u5473\u9053\u300d\u7684\u7bc4\u4f8b",id:"\u58de\u5473\u9053\u7684\u7bc4\u4f8b",level:3},{value:"\u300c\u91cd\u69cb\u898f\u5247\u300d\u7684\u7bc4\u4f8b",id:"\u91cd\u69cb\u898f\u5247\u7684\u7bc4\u4f8b",level:3},{value:"1.3 \u4ec0\u9ebc\u6642\u5019\u8981\u91cd\u69cb\uff1f",id:"13-\u4ec0\u9ebc\u6642\u5019\u8981\u91cd\u69cb",level:2},{value:"1.4 \u5b89\u5168\u5730\u91cd\u69cb",id:"14-\u5b89\u5168\u5730\u91cd\u69cb",level:2},{value:"1.6 \u7528\u4f86\u91cd\u69cb\u7684\u7bc4\u4f8b\uff1a2D\u7684\u62fc\u5716\u904a\u6232",id:"16-\u7528\u4f86\u91cd\u69cb\u7684\u7bc4\u4f8b2d\u7684\u62fc\u5716\u904a\u6232",level:2},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2}],p={toc:m},d="wrapper";function N(e){let{components:t,...u}=e;return(0,n.kt)(d,(0,l.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"11-\u4ec0\u9ebc\u662f\u91cd\u69cb"},"1.1 \u4ec0\u9ebc\u662f\u91cd\u69cb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u69cb\u7684\u5b9a\u7fa9: \u300c\u6539\u8b8a\u7a0b\u5f0f\u78bc\u800c\u4e0d\u6539\u8b8a\u5176\u529f\u80fd\u300d"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u91cd\u69cb\u4e0d\u61c9\u8a72\u6539\u8b8a\u672c\u4f86\u7a0b\u5f0f\u78bc\u7684\u529f\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u672c\u66f8\u6703\u5c07\u91cd\u9ede\u653e\u5728\u300c\u597d\u95b1\u8b80\u300d\u300c\u6613\u65bc\u7dad\u8b77\u300d\u4e0a"),(0,n.kt)("li",{parentName:"ul"},"\u5373\uff0c\u7d93\u7531\u91cd\u69cb\u7522\u751f\u51fa\u66f4\u597d\u7684\u7a0b\u5f0f\u78bc\u300c\u54c1\u8cea\u300d",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u901a\u7528\u6027\u9ad8\uff0c\u53ef\u91cd\u8907\u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u5beb\u7684\u66f4\u5c11\uff0c\u6a94\u6848\u66f4\u5c0f"),(0,n.kt)("li",{parentName:"ul"},"\u57f7\u884c\u7684\u66f4\u5feb"),(0,n.kt)("li",{parentName:"ul"},"\u5bb9\u6613\u95b1\u8b80\u3001\u7dad\u8b77"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u69cb\u7684\u8981\u4ef6\uff1a\u6587\u5316 + \u6280\u80fd + \u5de5\u5177"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Three Factors",src:a(35686).Z,width:"180",height:"161"})),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6587\u5316Clucture\uff1a\u9f13\u52f5\u91cd\u69cb\u7684\u6587\u5316\u8ddf\u5de5\u4f5c\u6d41\u7a0b"),(0,n.kt)("li",{parentName:"ul"},"\u6280\u80fdSkill\uff1a\u80fd\u5224\u65b7\u51fa\u54ea\u4e9b\u7a0b\u5f0f\u78bc\u662f\u4e0d\u597d\u7684"),(0,n.kt)("li",{parentName:"ul"},"\u5de5\u5177Tools\uff1a\u9700\u8981\u5de5\u5177\u4f86\u78ba\u4fdd\u91cd\u69cb\u662f\u5b89\u5168\u7684")))),(0,n.kt)("admonition",{title:"Discussion",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u4e0b\u9762\u7684\u4f8b\u5b50\uff0cRefactor\u6539\u5584\u4e86\u7a0b\u5f0f\u78bc\u54c1\u8cea\u7684\u4ec0\u9ebc\uff1f")),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Before Refactor",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"return pow(base, exp/2) * pow(base, exp/2)\n"))),(0,n.kt)(i.Z,{value:"After Refactor",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const result = pow(base, exp/2)\nreturn result * result;\n")))),(0,n.kt)("h2",{id:"111-\u70ba\u4ec0\u9ebc\u8981\u91cd\u69cb"},"1.1.1 \u70ba\u4ec0\u9ebc\u8981\u91cd\u69cb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Why to refactor"),(0,n.kt)("li",{parentName:"ul"},"\u4e09\u500b\u4e3b\u8981\u539f\u56e0",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"\u8b93\u7a0b\u5f0f\u78bc\u5e02\u66f4\u5bb9\u6613\u95b1\u8b80\uff0c\u7a0b\u5f0f\u8a2d\u8a08\u5e2b\u7684\u6642\u9593\u5f88\u5bf6\u8cb4\uff0c\u7bc0\u7701\u6642\u9593"),(0,n.kt)("li",{parentName:"ol"},"\u8b93\u7a0b\u5f0f\u78bc\u6613\u65bc\u7dad\u8b77"),(0,n.kt)("li",{parentName:"ol"},"\u8b93\u7a0b\u5f0f\u78bc\u66f4\u6709\u8da3\u3001\u8b93\u4eba\u66f4\u6109\u6085(??!!)")))),(0,n.kt)("h2",{id:"12-\u8981\u91cd\u69cb\u4ec0\u9ebc"},"1.2 \u8981\u91cd\u69cb\u4ec0\u9ebc\uff1f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What to refactor"),(0,n.kt)("li",{parentName:"ul"},"\u662f\u4e00\u500b\u8981\u5b78\u7fd2\u7684\u6280\u80fd\uff1a\u80fd\u77e5\u9053\u54ea\u4e9b\u7a0b\u5f0f\u662f\u4e0d\u597d\u7684\u800c\u4e14\u9700\u8981\u91cd\u69cb"),(0,n.kt)("li",{parentName:"ul"},"\u770b\u5230\u7a0b\u5f0f\u78bc\u7684\u300c\u58de\u5473\u9053\u300d\u6642\uff0c\u5c31\u8a72\u9032\u884c\u91cd\u69cb",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4ec0\u9ebc\u662f\u58de\u5473\u9053\uff1f\u62bd\u8c61\u3001\u4e14\u96e3\u4ee5\u5165\u9580"),(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u5f88\u591a\u6642\u9593\u7d2f\u7a4d\uff0c\u624d\u80fd\u5c0d\u300c\u7570\u5473\u300d\u6709\u6240\u611f\u89ba"),(0,n.kt)("li",{parentName:"ul"},"\u672c\u66f8\u6703\u63d0\u51fa\u5224\u65b7\u300c\u7570\u5473\u300d\u7684\u898f\u5247",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u898f\u5247\u4e0d\u662f\u5b8c\u7f8e\u7684\uff0c\u9075\u5faa\u898f\u5247\u4ecd\u53ef\u80fd\u5c07\u7a0b\u5f0f\u78bc\u5beb\u721b")))))),(0,n.kt)("h3",{id:"\u58de\u5473\u9053\u7684\u7bc4\u4f8b"},"\u300c\u58de\u5473\u9053\u300d\u7684\u7bc4\u4f8b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7570\u5473\u7684\u5224\u65b7\u7bc4\u4f8b\uff1a\u4e00\u500bfunction\u53ea\u61c9\u8a72\u505a\u4e00\u4ef6\u4e8b"),(0,n.kt)("li",{parentName:"ul"},"\u4f46\u662f\u5f88\u96e3\u91d0\u6e05\u300c\u4e00\u4ef6\u4e8b\u300d\u4ee3\u8868\u7684\u662f\u4ec0\u9ebc")),(0,n.kt)("admonition",{title:"Discussion",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u4e0b\u9762\u7684\u7a0b\u5f0f\u505a\u4e86\u5e7e\u4ef6\u4e8b\uff1f")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"function calc(base, exp) {\n    const result = pow(base, exp/2)\n    return result * result;\n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SOLID\u7684SRP\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u500b\u7d44\u4ef6\u53ea\u61c9\u5c0d\u55ae\u4e00\u7684\u5c0d\u8c61\u8ca0\u8cac"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u500b\u7d44\u4ef6\u88ab\u4fee\u6539\u7684\u539f\u56e0\u53ea\u80fd\u6709\u4e00\u500b")))),(0,n.kt)("h3",{id:"\u91cd\u69cb\u898f\u5247\u7684\u7bc4\u4f8b"},"\u300c\u91cd\u69cb\u898f\u5247\u300d\u7684\u7bc4\u4f8b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u898f\u5247\uff1a\u4e00\u500bfunction\u6c38\u9060\u4e0d\u8a72\u8d85\u904e\u4e94\u884c\u7a0b\u5f0f\u78bc",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u773c\u5c31\u80fd\u770b\u51fafunction\u662f\u5426\u7b26\u5408\u898f\u5247\uff0c\u9055\u80cc\u4e86\u5c31\u662f\u6709\u602a\u5473\u9053"),(0,n.kt)("li",{parentName:"ul"},"\u672c\u66f8\u7684\u66f8\u540d")))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u63d0\u9192\uff1a\u7b26\u5408\u898f\u5247\uff0c\u4e0d\u4ee3\u8868\u5f97\u5230\u7684\u7a0b\u5f0f\u78bc\u4e00\u5b9a\u6bd4\u8f03\u597d\u3002\u898f\u5247\u53ea\u662f\u4e00\u500b\u91cd\u69cb\u7684\u8457\u624b\u4f9d\u64da")),(0,n.kt)("h2",{id:"13-\u4ec0\u9ebc\u6642\u5019\u8981\u91cd\u69cb"},"1.3 \u4ec0\u9ebc\u6642\u5019\u8981\u91cd\u69cb\uff1f"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u300c\u91cd\u69cb\u5c31\u50cf\u6d17\u6fa1\u300d- Kent Beck")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When to refactor"),(0,n.kt)("li",{parentName:"ul"},"\u300c\u5b9a\u671f\u300d\u6216\u662f\u300c\u7d0d\u5165\u65e5\u5e38\u5de5\u4f5c\u4e2d\u300d"),(0,n.kt)("li",{parentName:"ul"},"\u8edf\u9ad4\u958b\u767c\u7684\u516d\u500b\u6b65\u9a5f",(0,n.kt)("mermaid",{parentName:"li",value:"stateDiagram\nExplore --\x3e Specify: \u6536\u6582\u9700\u6c42\uff0c\u64b0\u5beb\u6e2c\u8a66\nSpecify --\x3e Implement: \u5be6\u4f5c\u7a0b\u5f0f\u78bc\nImplement --\x3e Test: \u78ba\u8a8d\u5be6\u4f5c\u6709\u7b26\u5408\u9700\u6c42\nTest --\x3e Refactor: \u78ba\u4fdd\u7a0b\u5f0f\u78bc\u80fd\u8b93\u4e0b\u4e00\u500b\u4eba\u4f7f\u7528\nRefactor --\x3e Deliver: \u90e8\u7f72\nDeliver --\x3e Explore: \u63a2\u7d22\u9700\u6c42"})),(0,n.kt)("li",{parentName:"ul"},"\u91cd\u69cb\u6642\uff0c\u4f9d\u7167\u66f8\u4e2d\u5beb\u7684\u898f\u5247\u6aa2\u67e5\u7a0b\u5f0f\u78bc",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u82e5\u9055\u53cd\u898f\u5247\uff0c\u5c0d\u5176\u9032\u884c\u8655\u7406"),(0,n.kt)("li",{parentName:"ul"},"\u4fee\u6b63\u7de8\u8b6f\u932f\u8aa4\u3001\u6e2c\u8a66\u932f\u8aa4"))),(0,n.kt)("li",{parentName:"ul"},"\u9762\u5c0d\u907a\u7559\u7cfb\u7d71",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5148\u8b93\u7a0b\u5f0f\u78bc\u6613\u65bc\u7406\u89e3\u548c\u4fee\u6539\uff0c\u5c07\u4f86\u7684\u8b8a\u52d5\u6216\u529f\u80fd\u65b0\u589e\u90fd\u6703\u8b8a\u5bb9\u6613 - Kent Beck"),(0,n.kt)("li",{parentName:"ul"},"\u300c\u5c0f\u554f\u984c\u89e3\u6c7a\u5b8c\u5c31\u4e0d\u6703\u6709\u5927\u554f\u984c\u300d")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("icon",{icon:"fa fa-exclamation-circle",size:"lg"})," Disucssion",(0,n.kt)("br",null),"\u4ec0\u9ebc\u6642\u5019\u4e0d\u8a72\u91cd\u69cb\uff1f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53ea\u6703\u57f7\u884c\u4e00\u6b21\u5c31\u522a\u6389\u7684code"),(0,n.kt)("li",{parentName:"ul"},"\u6e96\u5099\u9000\u5f79\u7684code"),(0,n.kt)("li",{parentName:"ul"},"\u6709\u56b4\u683c\u57f7\u884c\u6548\u80fd\u8981\u6c42\u7684code (\u57f7\u884c\u6548\u80fd\u6bd4\u53ef\u8b80\u6027\u91cd\u8981\u7684code)"))),(0,n.kt)("h2",{id:"14-\u5b89\u5168\u5730\u91cd\u69cb"},"1.4 \u5b89\u5168\u5730\u91cd\u69cb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How to refactor"),(0,n.kt)("li",{parentName:"ul"},"\u512a\u5148\u4f7f\u7528\u5de5\u5177\u4f86\u78ba\u4fdd\u91cd\u69cb\u662f\u5b89\u5168\u7684",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5404\u7a2eLinter"),(0,n.kt)("li",{parentName:"ul"},"\u5927\u578bIDE\uff0c\u6709\u5354\u52a9\u91cd\u69cb\u7684\u529f\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u7de8\u8b6f\u5668"))),(0,n.kt)("li",{parentName:"ul"},"\u5176\u6b21\u624d\u4f9d\u8cf4\u81ea\u52d5\u5316\u6e2c\u8a66 - \u9019\u662f\u53e6\u4e00\u672c\u66f8\u624d\u80fd\u8a0e\u8ad6\u7684\u5167\u5bb9")),(0,n.kt)("h2",{id:"16-\u7528\u4f86\u91cd\u69cb\u7684\u7bc4\u4f8b2d\u7684\u62fc\u5716\u904a\u6232"},"1.6 \u7528\u4f86\u91cd\u69cb\u7684\u7bc4\u4f8b\uff1a2D\u7684\u62fc\u5716\u904a\u6232"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5b89\u88ddNodeJS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MacOS: ",(0,n.kt)("inlineCode",{parentName:"li"},"brew install node")),(0,n.kt)("li",{parentName:"ul"},"Windows: ",(0,n.kt)("inlineCode",{parentName:"li"},"choco install nodejs.install")))),(0,n.kt)("li",{parentName:"ol"},"Clone sample code: ",(0,n.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:thedrlambda/five-lines.git")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"npm init")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"npm install typescript")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"tsc -w")," \u6216 ",(0,n.kt)("inlineCode",{parentName:"li"},"./node_modules/.bin/tsc -w")),(0,n.kt)("li",{parentName:"ol"},"\u7528\u700f\u89bd\u5668\u6253\u958b",(0,n.kt)("inlineCode",{parentName:"li"},"index.html"))),(0,n.kt)("h2",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"1. \u91cd\u69cb\u9700\u8981\u7d50\u5408\u54ea\u4e09\u500b\u8981\u7d20\u4f86\u9032\u884c\uff1f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u300c\u6280\u80fd\u300dWhat\uff0c\u8981\u91cd\u69cb\u4ec0\u9ebc"),(0,n.kt)("li",{parentName:"ul"},"\u300c\u6587\u5316\u300dWhen\uff0c\u4ec0\u9ebc\u6642\u5019\u8981\u91cd\u69cb"),(0,n.kt)("li",{parentName:"ul"},"\u300c\u5de5\u5177\u300dHow\uff0c\u600e\u9ebc\u91cd\u69cb"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"2. \u4f55\u8b02\u7a0b\u5f0f\u78bc\u7684\u300c\u58de\u5473\u9053\u300d\uff1f"),(0,n.kt)("p",null,"\u7528\u4f86\u5224\u65b7\u4e00\u6bb5\u7a0b\u5f0f\u78bc\u662f\u5426\u61c9\u88ab\u91cd\u69cb\u7684\u4f9d\u64da\uff0c\u662f\u4e00\u500b\u6bd4\u8f03\u6a21\u7cca\u7684\u89c0\u5ff5")))}N.isMDXComponent=!0},35686:(e,t,a)=>{a.d(t,{Z:()=>l});const l="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE2MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8ZWxsaXBzZSByeT0iNTYiIHJ4PSI1NiIgaWQ9InN2Z18xIiBjeT0iMTAwIiBjeD0iNjAiIHN0cm9rZT0iIzRjNGM0YyIgZmlsbD0ibm9uZSIvPgogIDxlbGxpcHNlIHJ5PSI1NiIgcng9IjU2IiBpZD0ic3ZnXzMiIGN5PSIxMDAiIGN4PSIxMjAiIHN0cm9rZT0iIzRjNGM0YyIgZmlsbD0ibm9uZSIvPgogIDxlbGxpcHNlIHJ5PSI1NiIgcng9IjU2IiBpZD0ic3ZnXzQiIGN5PSI2MCIgY3g9IjkwIiBzdHJva2U9IiM0YzRjNGMiIGZpbGw9Im5vbmUiLz4KICA8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgwLjY4MDMzIDAgMCAwLjY4MDMzIDY1Ljg1MiA2My43NDk3KSIgc3Ryb2tlPSIjMDAwIiBmb250LXN0eWxlPSJub3JtYWwiIHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1mYW1pbHk9Ik5vdG8gU2FucyBKUCIgZm9udC1zaXplPSIyMyIgc3Ryb2tlLXdpZHRoPSIwIiBpZD0ic3ZnXzUiIHk9Ii00Ny41MTcyNCIgeD0iLTIuNzIyMjQiIGZpbGw9IiMwMGNmYmYiPkN1bHR1cmU8L3RleHQ+CiAgPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMC42ODAzMyAwIDAgMC42ODAzMyA2NS44NTIgNjMuNzQ5NykiIHN0cm9rZT0iIzAwMCIgZm9udC1zdHlsZT0ibm9ybWFsIiB4bWw6c3BhY2U9InByZXNlcnZlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtZmFtaWx5PSJOb3RvIFNhbnMgSlAiIGZvbnQtc2l6ZT0iMjMiIHN0cm9rZS13aWR0aD0iMCIgaWQ9InN2Z183IiB5PSI4MC4zNjE4OCIgeD0iODguNDEiIGZpbGw9IiMwMGNmYmYiPlRvb2xzPC90ZXh0PgogIDx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDAuNjgwMzMgMCAwIDAuNjgwMzMgNjUuODUyIDYzLjc0OTcpIiBzdHJva2U9IiMwMDAiIGZvbnQtc3R5bGU9Im5vcm1hbCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LWZhbWlseT0iTm90byBTYW5zIEpQIiBmb250LXNpemU9IjIzIiBzdHJva2Utd2lkdGg9IjAiIGlkPSJzdmdfOCIgeT0iODEuODMxNzUiIHg9Ii03MC4zMzY0OSIgZmlsbD0iIzAwY2ZiZiI+U2tpbGw8L3RleHQ+CiAgPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMC42ODAzMyAwIDAgMC42ODAzMyA2NS44NTIgNjMuNzQ5NykiIHN0cm9rZT0iIzAwMCIgZm9udC1zdHlsZT0ibm9ybWFsIiB4bWw6c3BhY2U9InByZXNlcnZlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtZmFtaWx5PSJOb3RvIFNhbnMgSlAiIGZvbnQtc2l6ZT0iMjMiIHN0cm9rZS13aWR0aD0iMCIgaWQ9InN2Z185IiB5PSI0NS4wODQ4OCIgeD0iLTUuNjYxOTkiIGZpbGw9IiNmZjVmNWYiPlJlZmFjdG9yPC90ZXh0PgogPC9nPgo8L3N2Zz4="}}]);