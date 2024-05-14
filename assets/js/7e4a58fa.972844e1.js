"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[6272],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=p(a),k=l,d=s["".concat(o,".").concat(k)]||s[k]||c[k]||r;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[s]="string"==typeof e?e:l,i[1]=u;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),l=a(67294),r=a(86010),i=a(12466),u=a(16550),o=a(91980),p=a(67392),m=a(50012);function s(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function c(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??s(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function k(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=c(e),[i,u]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,p]=d({queryString:a,groupId:n}),[s,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,m.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),N=(()=>{const e=o??s;return k({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{N&&u(N)}),[N]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!k({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),p(e),f(e)}),[p,f,r]),tabValues:r}}var N=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:u,selectValue:o,tabValues:p}=e;const m=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=m.indexOf(t),n=p[a].value;n!==u&&(s(t),o(n))},k=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>m.push(e),onKeyDown:k,onClick:c},i,{className:(0,r.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":u===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=f(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},l.createElement(v,(0,n.Z)({},e,t)),l.createElement(b,(0,n.Z)({},e,t)))}function y(e){const t=(0,N.Z)();return l.createElement(g,(0,n.Z)({key:String(t)},e))}},54033:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>h,frontMatter:()=>u,metadata:()=>p,toc:()=>s});var n=a(87462),l=(a(67294),a(3905)),r=a(74866),i=a(85162);const u={title:"Ch12: \u907f\u514d\u6700\u4f73\u5316\u548c\u901a\u7528\u6027",sidebar_position:12},o=void 0,p={unversionedId:"sg/five-lines-of-code/ch12",id:"sg/five-lines-of-code/ch12",title:"Ch12: \u907f\u514d\u6700\u4f73\u5316\u548c\u901a\u7528\u6027",description:"\u6700\u4f73\u5316\u548c\u901a\u7528\u6027",source:"@site/docs/sg/five-lines-of-code/ch12.mdx",sourceDirName:"sg/five-lines-of-code",slug:"/sg/five-lines-of-code/ch12",permalink:"/docs/sg/five-lines-of-code/ch12",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/five-lines-of-code/ch12.mdx",tags:[],version:"current",lastUpdatedBy:"mingyen066@gmail.com",lastUpdatedAt:1715666070,formattedLastUpdatedAt:"May 14, 2024",sidebarPosition:12,frontMatter:{title:"Ch12: \u907f\u514d\u6700\u4f73\u5316\u548c\u901a\u7528\u6027",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Ch11: \u9075\u5faa\u7a0b\u5f0f\u78bc\u4e2d\u7684\u7d50\u69cb",permalink:"/docs/sg/five-lines-of-code/ch11"},next:{title:"Ch13: \u8b93\u4e0d\u826f\u7684\u7a0b\u5f0f\u78bc\u51f8\u986f\u51fa\u4f86",permalink:"/docs/sg/five-lines-of-code/ch13"}},m={},s=[{value:"\u6700\u4f73\u5316\u548c\u901a\u7528\u6027",id:"\u6700\u4f73\u5316\u548c\u901a\u7528\u6027",level:2},{value:"\u529b\u6c42\u7c21\u6f54",id:"\u529b\u6c42\u7c21\u6f54",level:2},{value:"\u8ffd\u6c42\u901a\u7528\u6027\u9020\u6210\u7684\u554f\u984c1 - \u8026\u5408\u7684\u5143\u4ef6",id:"\u8ffd\u6c42\u901a\u7528\u6027\u9020\u6210\u7684\u554f\u984c1---\u8026\u5408\u7684\u5143\u4ef6",level:3},{value:"\u8ffd\u6c42\u901a\u7528\u6027\u9020\u6210\u7684\u554f\u984c2 - \u4e0d\u8b8a\u7684\u689d\u4ef6",id:"\u8ffd\u6c42\u901a\u7528\u6027\u9020\u6210\u7684\u554f\u984c2---\u4e0d\u8b8a\u7684\u689d\u4ef6",level:3},{value:"\u901a\u7528\u6027\u7684\u6642\u6a5f\u8207\u505a\u6cd5",id:"\u901a\u7528\u6027\u7684\u6642\u6a5f\u8207\u505a\u6cd5",level:2},{value:"1. \u70ba\u4e86\u6700\u5c0f\u5316\u69cb\u5efa (Build minimally)",id:"1-\u70ba\u4e86\u6700\u5c0f\u5316\u69cb\u5efa-build-minimally",level:3},{value:"2. \u6574\u5408\u6709\u76f8\u4f3c\u7a69\u5b9a\u6027\u7684\u4e8b\u7269 (Similar Stability)",id:"2-\u6574\u5408\u6709\u76f8\u4f3c\u7a69\u5b9a\u6027\u7684\u4e8b\u7269-similar-stability",level:3},{value:"3. \u5b9a\u671f\u6aa2\u67e5\u4f75\u6d88\u9664\u4e0d\u5fc5\u8981\u7684\u901a\u7528\u6027",id:"3-\u5b9a\u671f\u6aa2\u67e5\u4f75\u6d88\u9664\u4e0d\u5fc5\u8981\u7684\u901a\u7528\u6027",level:3},{value:"\u6700\u4f73\u5316\u7684\u6642\u6a5f\u8207\u505a\u6cd5",id:"\u6700\u4f73\u5316\u7684\u6642\u6a5f\u8207\u505a\u6cd5",level:2},{value:"\u6700\u4f73\u5316\u5e36\u4f86\u9ad8\u5ea6\u7684\u8a8d\u77e5\u8ca0\u64d4",id:"\u6700\u4f73\u5316\u5e36\u4f86\u9ad8\u5ea6\u7684\u8a8d\u77e5\u8ca0\u64d4",level:3},{value:"\u6642\u6a5f - \u4f55\u6642\u63a8\u52d5\u6700\u4f73\u5316",id:"\u6642\u6a5f---\u4f55\u6642\u63a8\u52d5\u6700\u4f73\u5316",level:3},{value:"1. \u57fa\u6e96\u6e2c\u8a66 (Benchmark Test)",id:"1-\u57fa\u6e96\u6e2c\u8a66-benchmark-test",level:4},{value:"2. \u8ca0\u8f09\u6e2c\u8a66 (Load Test)",id:"2-\u8ca0\u8f09\u6e2c\u8a66-load-test",level:4},{value:"3. \u6548\u80fd\u8a8d\u8b49\u6e2c\u8a66 (Performance Approval Test)",id:"3-\u6548\u80fd\u8a8d\u8b49\u6e2c\u8a66-performance-approval-test",level:4},{value:"\u505a\u6cd5 - \u63a8\u52d5\u6700\u4f73\u5316",id:"\u505a\u6cd5---\u63a8\u52d5\u6700\u4f73\u5316",level:3},{value:"1. \u958b\u59cb\u6700\u4f73\u5316\u524d\u5148\u91cd\u69cb",id:"1-\u958b\u59cb\u6700\u4f73\u5316\u524d\u5148\u91cd\u69cb",level:4},{value:"2. \u4f9d\u64da\u7406\u8ad6\u9650\u5236\u9032\u884c\u6700\u4f73\u5316",id:"2-\u4f9d\u64da\u7406\u8ad6\u9650\u5236\u9032\u884c\u6700\u4f73\u5316",level:4},{value:"3. \u4ee5\u5ea6\u91cf\u6307\u6a19\u4f86\u4e3b\u5c0e\u6700\u4f73\u5316",id:"3-\u4ee5\u5ea6\u91cf\u6307\u6a19\u4f86\u4e3b\u5c0e\u6700\u4f73\u5316",level:4},{value:"4. \u9078\u7528\u597d\u7684\u6f14\u7b97\u6cd5\u8207\u8cc7\u6599\u7d50\u69cb",id:"4-\u9078\u7528\u597d\u7684\u6f14\u7b97\u6cd5\u8207\u8cc7\u6599\u7d50\u69cb",level:4},{value:"5. \u5feb\u53d6",id:"5-\u5feb\u53d6",level:4},{value:"6. \u9694\u96e2\u6700\u4f73\u5316\u904e\u7684\u7a0b\u5f0f\u78bc",id:"6-\u9694\u96e2\u6700\u4f73\u5316\u904e\u7684\u7a0b\u5f0f\u78bc",level:4},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},k=c("Row"),d=c("Col"),f={toc:s},N="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(N,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6700\u4f73\u5316\u548c\u901a\u7528\u6027"},"\u6700\u4f73\u5316\u548c\u901a\u7528\u6027"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6700\u4f73\u5316 (Optimization)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6700\u4f73\u5316\u7a0b\u5f0f\u78bc\u57f7\u884c\u6548\u80fd"))),(0,l.kt)("li",{parentName:"ul"},"\u901a\u7528\u6027 (Generality)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8b93\u7a0b\u5f0f\u78bc\u542b\u6709\u66f4\u591a\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u7d66\u5eda\u5e2b\u4e00\u628a\u745e\u58eb\u5200\u6216\u662f\u83dc\u5200"),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u61c9\u901a\u7528\u6027\u7684\u8a2d\u8a08\uff0c\u53ef\u80fd\u6703\u6bd4\u901a\u7528\u6027\u5e36\u4f86\u7684\u597d\u8655\u66f4\u70ba\u7e41\u91cd")))),(0,l.kt)("h2",{id:"\u529b\u6c42\u7c21\u6f54"},"\u529b\u6c42\u7c21\u6f54"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4eba\u985e\u7684\u8a8d\u77e5\u80fd\u529b\u6709\u9650",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u53ea\u80fd\u8a18\u4f4f\u300c\u6709\u9650\u300d\u7684\u8cc7\u8a0a\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u4f86\u8aaa\uff0c\u8207\u6c92\u6709\u6642\u5e38\u4e92\u52d5\u7684code\uff0c\u8d85\u904e\u4e09\u500b\u6708\u5c31\u5f88\u96e3\u8a18\u5f97\u6539\u52d5\u7d30\u7bc0"))),(0,l.kt)("li",{parentName:"ul"},"\u7a0b\u5f0f\u78bc\u6703\u4f54\u64da\u5de5\u7a0b\u5e2b\u8a8d\u77e5\u80fd\u529b\u7684\u4e8b\u7269\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8026\u5408\u7684\u5143\u4ef6 (coupled components)"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8b8a\u7684\u689d\u4ef6 (invariants)")))),(0,l.kt)("h3",{id:"\u8ffd\u6c42\u901a\u7528\u6027\u9020\u6210\u7684\u554f\u984c1---\u8026\u5408\u7684\u5143\u4ef6"},"\u8ffd\u6c42\u901a\u7528\u6027\u9020\u6210\u7684\u554f\u984c1 - \u8026\u5408\u7684\u5143\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function remove(tile: Tile) {\n    for (let y = 0; y < map.length; y++) {\n        for (let x = 0; x < map[y].length; x++) {\n            if (map[y][x] === tile) { // tile\u8ddfmap[y][x]\u7684\u300c\u76f8\u7b49\u300d\u5177\u9ad4\u53c3\u8003\u4e86\u591a\u5c11tile\u5167\u7684\u7d30\u7bc0\uff1f\n                map[y][x] = new Air();\n            }\n        }\n    }\n}\n")),(0,l.kt)("h3",{id:"\u8ffd\u6c42\u901a\u7528\u6027\u9020\u6210\u7684\u554f\u984c2---\u4e0d\u8b8a\u7684\u689d\u4ef6"},"\u8ffd\u6c42\u901a\u7528\u6027\u9020\u6210\u7684\u554f\u984c2 - \u4e0d\u8b8a\u7684\u689d\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'class Stack {\n    private data: number[] = [];\n    private length: number;\n\n    add(num: number) {\n        this.data.unshift(num);\n        this.length += 1;\n    }\n\n    pop(num: number) {\n        if (this.length <= 0) {\n            throw new Error("Pop from empty stake");\n        }\n        this.length -= 1; // \u8981\u662f\u4f60\u5fd8\u8a18\u6e1b\u7684\u8a71...\n        return this.data.shift();\n    }\n\n    getSize() {\n        return this.length;\n    }\n}\n')),(0,l.kt)("h2",{id:"\u901a\u7528\u6027\u7684\u6642\u6a5f\u8207\u505a\u6cd5"},"\u901a\u7528\u6027\u7684\u6642\u6a5f\u8207\u505a\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u300c\u9019\u5169\u6bb5code\u505a\u7684\u4e8b\u5f88\u50cf\uff0c\u6240\u4ee5\u62bd\u51fa\u4f86\u6210\u70ba\u7368\u7acb\u7684function\u300d"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4ed6\u5011\u662f\u300c\u9700\u8981\u5f88\u50cf\u300d\uff0c\u9084\u662f\u73fe\u5728\u300c\u6070\u597d\u5f88\u50cf\u300d\uff1f"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9032\u884c\u901a\u7528\u6027\u8a2d\u8a08\u524d\uff0c\u66f4\u91cd\u8981\u7684\u662f\u8981\u4e86\u89e3\u8981\u9019\u9ebc\u505a\u7684",(0,l.kt)("strong",{parentName:"p"},"\u300c\u52d5\u6a5f\u300d")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8981\u505a\u83dc\uff0c\u4f60\u771f\u7684\u4e0d\u80fd\u4f7f\u7528\u4e00\u628a\u745e\u58eb\u5200\u55ce\uff1f"),(0,l.kt)("li",{parentName:"ul"},"\u60f3\u628acode\u8a2d\u8a08\u6210\u745e\u58eb\u5200\uff0c\u8981\u6709\u6b63\u78ba\u7684\u300c\u52d5\u6a5f\u300d"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u662f\u5e7e\u500b\u300c\u9069\u5408\u9032\u884c\u901a\u7528\u6027\u8a2d\u8a08\u300d\u7684\u52d5\u6a5f"))),(0,l.kt)("h3",{id:"1-\u70ba\u4e86\u6700\u5c0f\u5316\u69cb\u5efa-build-minimally"},"1. \u70ba\u4e86\u6700\u5c0f\u5316\u69cb\u5efa (Build minimally)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kent Beck\u7684\u5efa\u8b70 - \u6700\u5c0f\u5316\u4f60\u5beb\u7684code\u7684\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u82b1\u6642\u9593\u53bb\u89e3\u6c7a\u300c\u771f\u6b63\u7684\u554f\u984c\u300d\u800c\u4e0d\u662f\u300c\u60f3\u50cf\u4e2d\u7684\u554f\u984c\u300d")),(0,l.kt)("admonition",{title:"Discussion",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u8981\u5beb\u4e00\u500b\u897f\u6d0b\u68cb\u904a\u6232\u7a0b\u5f0f\uff0c\u7b2c\u4e00\u6b65\u8a72\u5982\u4f55\u62bd\u8c61\u5316\uff1f")),(0,l.kt)("h3",{id:"2-\u6574\u5408\u6709\u76f8\u4f3c\u7a69\u5b9a\u6027\u7684\u4e8b\u7269-similar-stability"},"2. \u6574\u5408\u6709\u76f8\u4f3c\u7a69\u5b9a\u6027\u7684\u4e8b\u7269 (Similar Stability)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee5\u4e52\u4e53\u7403\u8a08\u5206\u7a0b\u5f0f\u70ba\u4f8b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c0d\u65bc\u652f\u63f4\u51fd\u5f0f\u3001\u5f8c\u7aef\u7684\u7a0b\u5f0f\u78bc\uff0c\u4e0d\u5f97\u4e0d\u9032\u884c\u6cdb\u5316\u901a\u7528\u7684\u8655\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u51fa\u65bc\u300c\u964d\u4f4e\u8a8d\u77e5\u8ca0\u64d4\u300d\u7684\u76ee\u7684"))),(0,l.kt)("li",{parentName:"ul"},"\u8b39\u614e\u884c\u4e8b\uff0c\u6cdb\u5316\u505a\u4e0b\u53bb\u5f8c\u5f88\u96e3\u6d88\u9664\u5176\u5e36\u4f86\u7684\u5f71\u97ff"),(0,l.kt)("li",{parentName:"ul"},"\u5927\u90e8\u5206\u7684\u6642\u5019\uff0c\u5f88\u96e3\u8fa8\u8a8d\u51fa\u4f86\u54ea\u4e9b\u4e8b\u7269\u6709\u300c\u76f8\u4f3c\u7684\u7a69\u5b9a\u6027\u300d",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7d93\u9a57\u4e0a\u7684\u5efa\u8b70\uff0c\u4e0d\u8981\u7acb\u5373\u628a\u65b0\u7684\u4e8b\u7269\u8ddf\u820a\u7684\u4e8b\u7269\u6574\u5408\u5728\u4e00\u8d77")))),(0,l.kt)("h3",{id:"3-\u5b9a\u671f\u6aa2\u67e5\u4f75\u6d88\u9664\u4e0d\u5fc5\u8981\u7684\u901a\u7528\u6027"},"3. \u5b9a\u671f\u6aa2\u67e5\u4f75\u6d88\u9664\u4e0d\u5fc5\u8981\u7684\u901a\u7528\u6027"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u672c\u66f8\u63d0\u904e\u7684\u5169\u500b\u91cd\u69cb\u898f\u5247"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Ch4.2.2 \u7279\u5b9a\u5316\u65b9\u6cd5 ",(0,l.kt)("a",{parentName:"li",href:"/docs/sg/five-lines-of-code/ch4#422-%E9%87%8D%E6%A7%8B%E6%A8%A1%E5%BC%8F%E7%89%B9%E5%AE%9A%E5%8C%96%E6%96%B9%E6%B3%95specialize-method"},"(Specialize Method)")),(0,l.kt)("li",{parentName:"ul"},"Ch4.5 \u5617\u8a66\u522a\u9664\u5f8c\u518d\u7de8\u8b6f ",(0,l.kt)("a",{parentName:"li",href:"/docs/sg/five-lines-of-code/ch4#451-%E9%87%8D%E6%A7%8B%E6%A8%A1%E5%BC%8F%E5%88%AA%E9%99%A4%E5%BE%8C%E5%86%8D%E7%B7%A8%E8%AD%AFtry-delete-then-compile"},"(Try Delete Then Compile)")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e00\u500b\u6709\u6548\u7684\u4f5c\u6cd5\uff0c\u57cblog\u76e3\u770b\u6aa2\u67e5\u50b3\u9001\u7d66function\u7684parameters"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u767c\u73fe\u6709\u4e00\u6bb5\u6642\u9593\u90fd\u51fa\u73fe\u76f8\u540c\u7684value\uff0c\u90a3\u5c31\u8a72\u9032\u884c\u91cd\u69cb\u6d88\u9664\u9019\u500bparmeter"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function plus(summand: int, addend: int, config: PlusConfig = {}) {\n    // Monitor params\n    monitor(summand, addend, config)\n\n    if (config.isTestMode) {\n        console.debug(`Plus called on ${summand}, ${addend}`);\n    }\n    return summand + addend;\n}\n")))))),(0,l.kt)("h2",{id:"\u6700\u4f73\u5316\u7684\u6642\u6a5f\u8207\u505a\u6cd5"},"\u6700\u4f73\u5316\u7684\u6642\u6a5f\u8207\u505a\u6cd5"),(0,l.kt)("h3",{id:"\u6700\u4f73\u5316\u5e36\u4f86\u9ad8\u5ea6\u7684\u8a8d\u77e5\u8ca0\u64d4"},"\u6700\u4f73\u5316\u5e36\u4f86\u9ad8\u5ea6\u7684\u8a8d\u77e5\u8ca0\u64d4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6700\u4f73\u5316\u7684\u7a0b\u5f0f\u78bc\uff08\u6709\u8f03\u597d\u7684\u57f7\u884c\u671f\u6548\u80fd\uff09\u6703\u5e36\u4f86\u9ad8\u5ea6\u7684\u8a8d\u77e5\u8ca0\u64d4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8209\u4f8b\u4f86\u8aaa\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/zh-tw/%E5%B9%B3%E6%96%B9%E6%A0%B9%E5%80%92%E6%95%B0%E9%80%9F%E7%AE%97%E6%B3%95"},"\u53cd\u5e73\u65b9\u6839\u5feb\u901f\u6f14\u7b97\u6cd5")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4ee5\u96f7\u795e\u4e4b\u939aIII\u7684code\u4f5c\u70ba\u4f8b\u5b50\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/id-Software/Quake-III-Arena/blob/master/code/game/q_math.c#L552"},"Q_rsqrt in Quake-III-Arena")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-c"},"float Q_rsqrt( float number )\n{\n    long i;\n    float x2, y;\n    const float threehalfs = 1.5F;\n\n    x2 = number * 0.5F;\n    y  = number;\n    i  = * ( long * ) &y;                       // evil floating point bit level hacking\n    i  = 0x5f3759df - ( i >> 1 );               // what the fuck?\n    y  = * ( float * ) &i;\n    y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration\n\n    return y;\n}\n")))))),(0,l.kt)("h3",{id:"\u6642\u6a5f---\u4f55\u6642\u63a8\u52d5\u6700\u4f73\u5316"},"\u6642\u6a5f - \u4f55\u6642\u63a8\u52d5\u6700\u4f73\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a\u6548\u80fd\u81ea\u52d5\u6e2c\u8a66"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u6709\u5728\u6548\u80fd\u6e2c\u8a66\u300c\u5931\u6557\u300d\u6642\uff0c\u624d\u9032\u884c\u6700\u4f73\u5316\u7684\u8655\u7406",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5728\u7a0b\u5f0f\u78bc\u5c1a\u672a\u88ab\u8b49\u660e\u6709\u554f\u984c\u4e4b\u524d\uff0c\u90fd\u662f\u5408\u6cd5\u7684")),(0,l.kt)("li",{parentName:"ul"},"\u8ddf\u6cd5\u5f8b\u754c\u7684\u505a\u6cd5\u76f8\u4f3c")))),(0,l.kt)("h4",{id:"1-\u57fa\u6e96\u6e2c\u8a66-benchmark-test"},"1. \u57fa\u6e96\u6e2c\u8a66 (Benchmark Test)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u300c\u9019\u500bmethod\u61c9\u8a72\u8981\u572814ms\u5167\u57f7\u884c\u5b8c\u7562\u300d")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6e2c\u8a66\u672c\u8eab\u7684\u7de8\u5beb\u5f88\u5bb9\u6613\uff0c\u57f7\u884c\u537b\u5f88\u56f0\u96e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5be6\u969b\u72c0\u6cc1\u8207\u57f7\u884c\u74b0\u5883\u7dca\u5bc6\u7d50\u5408"))),(0,l.kt)("li",{parentName:"ul"},"\u5728\u5d4c\u5165\u5f0f\u7cfb\u7d71\u5f88\u5e38\u898b"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u5728\u53ef\u9760\u7684\u7dda\u4e0a\u74b0\u5883\u9032\u884c\u57fa\u6e96\u6e2c\u8a66")),(0,l.kt)("admonition",{title:"\u57fa\u6e96\u6e2c\u8a66\u7684\u300c\u57fa\u6e96\u300d\u8a72\u5982\u4f55\u5236\u5b9a\uff1f",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u70ba\u4ec0\u9ebc\u662f\u5b9a14ms\u800c\u4e0d\u662f100ms\u62161ms\uff1f"),(0,l.kt)("p",{parentName:"admonition"},"\u53c3\u8003\uff1a"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.datadoghq.com/metrics/distributions/"},"Datadog Distribution Aggregation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.datadoghq.com/service_management/service_level_objectives/burn_rate/"},"Datadog Burn Rate Alerts")))),(0,l.kt)("h4",{id:"2-\u8ca0\u8f09\u6e2c\u8a66-load-test"},"2. \u8ca0\u8f09\u6e2c\u8a66 (Load Test)"),(0,l.kt)("p",null,"\u300c\u9019\u500b\u670d\u52d9\u8981\u80fd\u8655\u7406\u6bcf\u79d21000\u500b\u8acb\u6c42\u300d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6e2c\u8a66\u672c\u8eab\u5c0d\u74b0\u5883\u7684\u8981\u6c42\u6c92\u6709\u57fa\u6e96\u6e2c\u8a66\u56b4\u82db",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f46\u4ecd\u53ef\u80fd\u9700\u8981\u5728\u63a5\u8fd1\u7dda\u4e0a\u74b0\u5883\u7684\u57fa\u790e\u4e0a\u9032\u884c\u6e2c\u8a66"))),(0,l.kt)("li",{parentName:"ul"},"\u8a3b\uff1a\u901a\u5e38\u662f\u6253\u5230\u639b\uff0c\u4f86\u6293\u51fa\u6c34\u4f4d...")),(0,l.kt)("h4",{id:"3-\u6548\u80fd\u8a8d\u8b49\u6e2c\u8a66-performance-approval-test"},"3. \u6548\u80fd\u8a8d\u8b49\u6e2c\u8a66 (Performance Approval Test)"),(0,l.kt)("p",null,"\u300c\u9019\u500b\u6e2c\u8a66\u7684\u901f\u5ea6\u4e0d\u61c9\u6bd4\u4e0a\u6b21\u6162\u8d85\u904e10%\u300d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u78ba\u4fdd\u6548\u80fd\u4e0d\u6703\u7a81\u7136\u4e0b\u964d"),(0,l.kt)("li",{parentName:"ul"},"\u4e0a\u6b21 = \u4e0a\u500b\u7248\u672c\u3002\u4e0d\u662f\u6307\u4e0a\u4e00\u6b21\u8acb\u6c42\u7684\u97ff\u61c9\u901f\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"\u907f\u514d\u5de5\u7a0b\u5e2b\u610f\u5916\u5c07\u904e\u6162\u7684\u5143\u7d20\u52a0\u5165\u5230\u4e3b\u8981\u7d50\u69cb\u4e4b\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"\u8207\u5916\u90e8\u56e0\u7d20\u3001\u74b0\u5883\uff0c\u76f8\u95dc\u6027\u8f03\u4f4e")),(0,l.kt)("h3",{id:"\u505a\u6cd5---\u63a8\u52d5\u6700\u4f73\u5316"},"\u505a\u6cd5 - \u63a8\u52d5\u6700\u4f73\u5316"),(0,l.kt)("h4",{id:"1-\u958b\u59cb\u6700\u4f73\u5316\u524d\u5148\u91cd\u69cb"},"1. \u958b\u59cb\u6700\u4f73\u5316\u524d\u5148\u91cd\u69cb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7531\u65bc\u6700\u4f73\u5316\u9700\u8981\u4f9d\u8cf4\u7a0b\u5f0f\u78bc\u4e2d\u7684\u300c",(0,l.kt)("a",{parentName:"li",href:"/docs/sg/five-lines-of-code/ch12#%E8%BF%BD%E6%B1%82%E9%80%9A%E7%94%A8%E6%80%A7%E9%80%A0%E6%88%90%E7%9A%84%E5%95%8F%E9%A1%8C2---%E4%B8%8D%E8%AE%8A%E7%9A%84%E6%A2%9D%E4%BB%B6"},"\u4e0d\u8b8a\u90e8\u5206"),"\u300d"),(0,l.kt)("li",{parentName:"ul"},"\u9032\u884c\u904e\u826f\u597d\u91cd\u69cb\u7684\u7a0b\u5f0f\u78bc\uff0c\u9032\u884c\u6700\u4f73\u5316\u662f\u66f4\u5bb9\u6613\u5b8c\u6210\u7684")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Before",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"class NumberSequence {\n    constructor(private arr: number[]) {\n\n    }\n    sum() {\n        return this.arr.reduce((acc, num) => acc + num, 0);\n    }\n    size() {\n        return this.arr.length;\n    }\n    average() {\n        return this.sum() / this.size();\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"After",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"class NumberSequence {\n    constructor(private arr: number[]) {\n        this.total = arr.reduce((acc, num) => acc + num, 0);\n    }\n    sum() {\n        return this.total;\n    }\n    size() {\n        return this.arr.length;\n    }\n    average() {\n        return this.sum() / this.size();\n    }\n}\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6216\u662f\uff0c\u8b93\u7de8\u8b6f\u5668\u5e6b\u4f60\u8655\u7406\u6700\u4f73\u5316")),(0,l.kt)(k,{mdxType:"Row"},(0,l.kt)(d,{col:2,mdxType:"Col"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=Before",title:"Before"},"return pow(base, exp/2) * pow(base, exp/2);\n\n"))),(0,l.kt)(d,{col:2,mdxType:"Col"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=After",title:"After"},"let result = pow(base, exp/2);\nreturn result * result;\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u70ab\u8000\uff0c\u7de8\u8b6f\u5668\u901a\u5e38\u90fd\u5e6b\u4f60\u505a\u4e86")),(0,l.kt)(k,{mdxType:"Row"},(0,l.kt)(d,{col:2,mdxType:"Col"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=Before",title:"Before"},"return n/2;\n\n// \u908f\u8f2f\u8981\u8ddf\u91cd\u69cb\u5f8c\u4e00\u6a23\u7684\u8a71\u61c9\u8a72\u8981\u5beb\u9019\u6a23\n// return Math.floor(n / 2);\n"))),(0,l.kt)(d,{col:2,mdxType:"Col"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=After",title:"After"},"return n >> 1;\n\n// \u6216\u662f\u66f4\u96e3\u61c2\u7684\nreturn n/2 | 0;\n")))),(0,l.kt)("h4",{id:"2-\u4f9d\u64da\u7406\u8ad6\u9650\u5236\u9032\u884c\u6700\u4f73\u5316"},"2. \u4f9d\u64da\u7406\u8ad6\u9650\u5236\u9032\u884c\u6700\u4f73\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Resource Pool"),(0,l.kt)("li",{parentName:"ul"},"\u6982\u5ff5\u53c3\u8003\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://javainsimpleway.com/connection-pool-overview/"},"Connection Pool")," - by Java In Simple Way"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.lucavall.in/blog/how-to-optimize-php-performance-on-google-cloud-run"},"PHP FPM Architecture")," - by Lucavall")))),(0,l.kt)("h4",{id:"3-\u4ee5\u5ea6\u91cf\u6307\u6a19\u4f86\u4e3b\u5c0e\u6700\u4f73\u5316"},"3. \u4ee5\u5ea6\u91cf\u6307\u6a19\u4f86\u4e3b\u5c0e\u6700\u4f73\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u74f6\u9838\u8655\u4e4b\u5916\u7684\u6548\u80fd\u6539\u5584\u90fd\u662f\u591a\u9918\u7684",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u627e\u51fa\u771f\u6b63\u8a72\u6539\u5584\u4e4b\u8655\uff0c\u9700\u8981\u6709\u5ea6\u91cf\u6307\u6a19"))),(0,l.kt)("li",{parentName:"ul"},"\u767c\u73fe\u7a0b\u5f0f\u78bc\u7684\u300c\u71b1\u9ede\u300d(Hot Spots)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6548\u80fd\u5206\u6790 (Profiling)"),(0,l.kt)("li",{parentName:"ul"},"\u6f38\u9032\u5206\u6790 (Big-O)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f9d\u8cf4\u7a0b\u5f0f\u8a2d\u8a08\u5e2b\u7684\u6f14\u7b97\u6cd5\u8207\u8cc7\u6599\u7d50\u69cb\u719f\u7df4\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"\u8a3b\uff1a\u8981\u80fd\u8b58\u5225\u54ea\u500bN\u662f\u91cd\u8981\u7684\uff0c\u4e5f\u9700\u8981\u9818\u57df\u77e5\u8b58\u7684\u4e86\u89e3")))))),(0,l.kt)("h4",{id:"4-\u9078\u7528\u597d\u7684\u6f14\u7b97\u6cd5\u8207\u8cc7\u6599\u7d50\u69cb"},"4. \u9078\u7528\u597d\u7684\u6f14\u7b97\u6cd5\u8207\u8cc7\u6599\u7d50\u69cb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8a55\u4f30\u51fa\u300c\u71b1\u9ede\u5f8c\u300d\u6700\u5b89\u5168\u7684\u6700\u4f73\u5316\u505a\u6cd5\uff1a\u628a\u8cc7\u6599\u7d50\u69cb\u6539\u6210\u6709\u76f8\u7b49\u4ecb\u9762\u7684\u53e6\u4e00\u500b\u8cc7\u6599\u7d50\u69cb",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8a3b\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/zh-tw/%E6%95%B0%E7%BB%84"},"Array"),"\u8ddf",(0,l.kt)("a",{parentName:"li",href:"https://zh-yue.wikipedia.org/wiki/%E4%BA%8C%E5%85%83%E6%90%9C%E5%B0%8B%E6%A8%B9"},"BST"),"\u5169\u7a2e\u7d50\u69cb\u90fd\u6709insert, select\u7684\u4ecb\u9762"))),(0,l.kt)("li",{parentName:"ul"},"\u5f15\u5165\u5f8c\uff0c\u4e0d\u8b8a\u689d\u4ef6\u6709\u53ef\u80fd\u88ab\u7834\u58de",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u300c",(0,l.kt)("a",{parentName:"li",href:"/docs/sg/five-lines-of-code/ch12#3-%E6%95%88%E8%83%BD%E8%AA%8D%E8%AD%89%E6%B8%AC%E8%A9%A6-performance-approval-test"},"\u6548\u80fd\u8a8d\u8b49\u6e2c\u8a66"),"\u300d\u80fd\u5920\u6293\u5f97\u51fa\u4f86"),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u70ba\u4ecb\u9762\u6c92\u8b8a\uff0c\u5207\u63db\u8cc7\u6599\u7d50\u69cb\u6216\u6f14\u7b97\u6cd5\u5f88\u5bb9\u6613")))),(0,l.kt)(k,{mdxType:"Row"},(0,l.kt)(d,{col:2,mdxType:"Col"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=Before",title:"Before"},"function unique(arr: number[]): number[] {\n    let result = [];\n    for (let i=0 ; i<arr.length ; i++) {\n        if result.includes(arr[i]) {\n            continue;\n        }\n        result.push(arr[i]);\n    }\n    return result;\n}\n"))),(0,l.kt)(d,{col:2,mdxType:"Col"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=After",title:"After"},"function unique(arr: number[]): number[] {\n    return Array.from(new Set(arr));\n}\n\n\n\n\n\n\n\n")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8a3b\uff1a\u66f8\u4e2d\u539f\u4f8b\u70ba\u5c0dLink List\u6392\u5e8f\u6642\uff0c\u5c07\u5176\u8f49\u70baArray\u6392\u5e8f\u5f8c\u518d\u8f49\u56deLink List\uff0c\u6548\u7387\u6bd4\u8f03\u9ad8\u3002\u4f46\u9019\u500b\u4f8b\u5b50\uff0c\u7a7a\u9593\u8907\u96dc\u5ea6\u5dee\u7570\u88ab\u5ffd\u7565\u3002")),(0,l.kt)("h4",{id:"5-\u5feb\u53d6"},"5. \u5feb\u53d6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c07\u91cd\u8907\u7528\u5230\u7684\u8a08\u7b97\u7d50\u679c\u5b58\u8d77\u4f86",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u72a7\u7272\u7a7a\u9593\u63db\u6642\u9593\u7684\u505a\u6cd5"))),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5b50\u53c3\u8003\u4e0a\u7bc0\uff1a",(0,l.kt)("a",{parentName:"li",href:"/docs/sg/five-lines-of-code/ch12#1-%E9%96%8B%E5%A7%8B%E6%9C%80%E4%BD%B3%E5%8C%96%E5%89%8D%E5%85%88%E9%87%8D%E6%A7%8B"},"NumberSequence"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"total\u7684\u503c\u53ef\u4ee5\u4e0d\u7528\u91cd\u8907\u8a08\u7b97"))),(0,l.kt)("li",{parentName:"ul"},"\u5feb\u53d6\u5c0d\u300c\u51aa\u7b49\u4e0d\u8b8a\u689d\u4ef6 (idempotence inveariant)\u300d\u7d50\u5408\u6642\uff0c\u662f\u5b89\u5168\u505a\u6cd5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u51aa\u7b49\uff0c\u5373\u4f60\u6bcf\u6b21\u7528\u540c\u6a23\u7684\u53c3\u6578\u9032\u884c\u547c\u53eb\uff0c\u7d50\u679c\u7e3d\u662f\u6703\u76f8\u540c")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8a3b\uff1a\u4f46\u82e5\u8a0e\u8ad6\u5230\u300c\u4ec0\u9ebc\u6642\u5019\u8a72\u66f4\u65b0cache\u300d\u5c31\u662f\u56f0\u96e3\u7684\u984c\u76ee\u4e86\u3002\n\u53c3\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/pdf/10.1145/3468521"},"On-Daemon Look-Aside-Cache"))),(0,l.kt)("h4",{id:"6-\u9694\u96e2\u6700\u4f73\u5316\u904e\u7684\u7a0b\u5f0f\u78bc"},"6. \u9694\u96e2\u6700\u4f73\u5316\u904e\u7684\u7a0b\u5f0f\u78bc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5229\u7528method\u3001class\uff0c\u4f86\u6700\u5c0f\u5316\u4e0a\u9396\u7684\u5340\u57df"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u964d\u4f4e\u8a8d\u77e5\u8ca0\u64d4 - \u7d66\u4ed6\u4e00\u500b\u597d\u540d\u5b57",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff1aQ_rsqrt"))),(0,l.kt)("li",{parentName:"ul"},"OCP\uff1a\u5c0d\u5be6\u505a\u5c01\u9589\uff0c\u5c0d\u64f4\u5c55\u958b\u653e"),(0,l.kt)("li",{parentName:"ul"},"\u82e5\u8655\u7406\u5f97\u597d\uff0c\u5c31\u6c92\u6709\u4eba\u6709\u8208\u8da3\u53bb\u770b\u539f\u59cb\u78bc\u7684\u5be6\u4f5c"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7528\u5957\u4ef6\u4f86\u8b66\u544a\u672a\u4f86\u7684\u958b\u767c\u4eba\u54e1"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5305\u542b\u672a\u4f86\u7684\u81ea\u5df1"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f5c\u8005\u7fd2\u6163\uff1a\u53d6\u540d\u53eb\u505a\u300cmagic\u300d"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5148\u9032\u7684\u79d1\u6280\u8207\u9b54\u6cd5\u7121\u7570"),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"magic_bit = 0x5f3759df;"))))),(0,l.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9593\u55ae\u5316\uff1a\u6307\u7684\u662f\u6e1b\u5c11\u95b1\u8b80\u7a0b\u5f0f\u78bc\u7684\u8a8d\u77e5\u8ca0\u64d4"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u7528\u6027\uff0c\u6703\u589e\u52a0\u8026\u5408\u7684\u98a8\u96aa",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8981\u907f\u514d\u5f15\u5165\u300c\u4e0d\u5fc5\u8981\u300d\u7684\u901a\u7528\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u63db\u53e5\u8a71\u8aaa\uff0c\u975e\u300c\u5fc5\u8981\u300d\u4e0d\u8981\u5c0d\u7a0b\u5f0f\u9032\u884c\u6cdb\u5316\u901a\u7528\u6027\u7684\u91cd\u69cb"))),(0,l.kt)("li",{parentName:"ul"},"\u9032\u884c\u6548\u80fd\u8abf\u6821\u6642\uff0c\u8981\u5c07\u5176\u9694\u96e2\u958b\u4f86",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u8a2d\u8a08\u8b93\u672a\u4f86\u7684\u4eba\u9700\u8981\u53bb\u770b\u9019\u6bb5code\u624d\u80fd\u7406\u89e3\u5176\u300c\u7528\u9014\u300d")))))}h.isMDXComponent=!0}}]);