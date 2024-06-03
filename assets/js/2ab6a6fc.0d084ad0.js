"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[8047],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(a),d=l,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[m]="string"==typeof e?e:l,i[1]=u;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),l=a(67294),r=a(86010),i=a(12466),u=a(16550),o=a(91980),s=a(67392),p=a(50012);function m(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function c(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function N(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=c(e),[i,u]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,s]=k({queryString:a,groupId:n}),[m,N]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,p.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=o??m;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),N(e)}),[s,N,r]),tabValues:r}}var f=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:u,selectValue:o,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=p.indexOf(t),n=s[a].value;n!==u&&(m(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:c},i,{className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":u===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=N(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},l.createElement(b,(0,n.Z)({},e,t)),l.createElement(h,(0,n.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return l.createElement(v,(0,n.Z)({key:String(t)},e))}},92440:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>u,metadata:()=>s,toc:()=>m});var n=a(87462),l=(a(67294),a(3905)),r=a(74866),i=a(85162);const u={title:"Ch4: \u8cc7\u6599\u7de8\u78bc\u8207\u6f14\u5316",sidebar_label:"Ch4: \u8cc7\u6599\u7de8\u78bc\u8207\u6f14\u5316",sidebar_position:4},o=void 0,s={unversionedId:"sg/ddia/ch4",id:"sg/ddia/ch4",title:"Ch4: \u8cc7\u6599\u7de8\u78bc\u8207\u6f14\u5316",description:"\u5982\u4f55\u66f4\u65b0\u8edf\u9ad4",source:"@site/docs/sg/ddia/ch4.mdx",sourceDirName:"sg/ddia",slug:"/sg/ddia/ch4",permalink:"/docs/sg/ddia/ch4",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/ddia/ch4.mdx",tags:[],version:"current",lastUpdatedBy:"HomaD",lastUpdatedAt:1717431011,formattedLastUpdatedAt:"Jun 3, 2024",sidebarPosition:4,frontMatter:{title:"Ch4: \u8cc7\u6599\u7de8\u78bc\u8207\u6f14\u5316",sidebar_label:"Ch4: \u8cc7\u6599\u7de8\u78bc\u8207\u6f14\u5316",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Ch3: \u5132\u5b58\u8207\u7d22\u5f15",permalink:"/docs/sg/ddia/ch3"},next:{title:"Ch5: \u5206\u6563\u5f0f\u8cc7\u6599\u7cfb\u7d71",permalink:"/docs/sg/ddia/ch5"}},p={},m=[{value:"\u5982\u4f55\u66f4\u65b0\u8edf\u9ad4",id:"\u5982\u4f55\u66f4\u65b0\u8edf\u9ad4",level:2},{value:"\u76f8\u5bb9\u6027",id:"\u76f8\u5bb9\u6027",level:3},{value:"\u8cc7\u6599\u7de8\u78bc\u683c\u5f0f",id:"\u8cc7\u6599\u7de8\u78bc\u683c\u5f0f",level:2},{value:"JSON, XML, CSV \u7684\u7f3a\u9677",id:"json-xml-csv-\u7684\u7f3a\u9677",level:3},{value:"\u4e8c\u9032\u4f4d\u7de8\u78bc",id:"\u4e8c\u9032\u4f4d\u7de8\u78bc",level:3},{value:"Schema \u6f14\u5316\u6642\u7684\u76f8\u5bb9\u6027",id:"schema-\u6f14\u5316\u6642\u7684\u76f8\u5bb9\u6027",level:3},{value:"<del>Dataflow \u6a21\u5f0f</del> \u8cc7\u6599\u50b3\u8f38\u6a21\u5f0f",id:"dataflow-\u6a21\u5f0f-\u8cc7\u6599\u50b3\u8f38\u6a21\u5f0f",level:2},{value:"\u900f\u904e\u8cc7\u6599\u5eab",id:"\u900f\u904e\u8cc7\u6599\u5eab",level:3},{value:"\u5e38\u898b\u7684\u60c5\u6cc1",id:"\u5e38\u898b\u7684\u60c5\u6cc1",level:4},{value:"\u6b78\u6a94\u5132\u5b58",id:"\u6b78\u6a94\u5132\u5b58",level:4},{value:"\u900f\u904e\u7db2\u8def\u670d\u52d9: REST \u548c RPC",id:"\u900f\u904e\u7db2\u8def\u670d\u52d9-rest-\u548c-rpc",level:3},{value:"\u900f\u904e\u975e\u540c\u6b65\u8a0a\u606f",id:"\u900f\u904e\u975e\u540c\u6b65\u8a0a\u606f",level:3},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2}],c={toc:m},d="wrapper";function k(e){let{components:t,...u}=e;return(0,l.kt)(d,(0,n.Z)({},c,u,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5982\u4f55\u66f4\u65b0\u8edf\u9ad4"},"\u5982\u4f55\u66f4\u65b0\u8edf\u9ad4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f3a\u670d\u5668\u7aef: \u6efe\u52d5\u5347\u7d1a"),(0,l.kt)("li",{parentName:"ul"},"\u5ba2\u6236\u7aef: \u4f7f\u7528\u8005\u81ea\u5df1\u6c7a\u5b9a\u6642\u6a5f"),(0,l.kt)("li",{parentName:"ul"},"\u8cc7\u6599\u5eab",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728 NoSQL \u4e2d\uff0c\u53ef\u4ee5\u540c\u6642\u63a5\u53d7\u65b0\u820a\u8cc7\u6599\u683c\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u95dc\u806f\u5f0f\u8cc7\u6599\u5eab\u4e2d\uff0c\u4efb\u4f55\u6642\u9593\u9ede\u53ea\u6709\u4e00\u500b schema \u6709\u6548")))),(0,l.kt)("h3",{id:"\u76f8\u5bb9\u6027"},"\u76f8\u5bb9\u6027"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u56de\u6714\u76f8\u5bb9 (Backward compatibility)"),"\n\u8f03\u65b0\u7684\u7a0b\u5f0f\u78bc\u53ef\u4ee5\u8b80\u53d6\u7531\u820a\u7a0b\u5f0f\u78bc\u6240\u5beb\u5165\u7684\u8cc7\u6599 <-- \u6bd4\u8f03\u7c21\u55ae"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5411\u524d\u76f8\u5bb9 (Forward compatibility)"),"\n\u8f03\u820a\u7684\u7a0b\u5f0f\u78bc\u53ef\u4ee5\u8b80\u53d6\u7531\u65b0\u7a0b\u5f0f\u78bc\u6240\u5beb\u5165\u7684\u8cc7\u6599 <-- \u9810\u6e2c\u672a\u4f86"),(0,l.kt)("h2",{id:"\u8cc7\u6599\u7de8\u78bc\u683c\u5f0f"},"\u8cc7\u6599\u7de8\u78bc\u683c\u5f0f"),(0,l.kt)("p",null,"\u7a0b\u5f0f\u81f3\u5c11\u4f7f\u7528\u5169\u7a2e\u8868\u793a\u8cc7\u6599\u7684\u683c\u5f0f:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728\u8a18\u61b6\u9ad4\u4e2d")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"object"),(0,l.kt)("li",{parentName:"ul"},"struct"),(0,l.kt)("li",{parentName:"ul"},"list"),(0,l.kt)("li",{parentName:"ul"},"array"),(0,l.kt)("li",{parentName:"ul"},"hash table"),(0,l.kt)("li",{parentName:"ul"},"tree")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u5728\u8a18\u61b6\u9ad4\u4e2d\uff0c\u4f8b\u5982\u6a94\u6848\u3001\u7db2\u8def\u50b3\u8f38\uff0c\u5fc5\u9808\u662f\u67d0\u7a2e self-contained \u7684\u4f4d\u5143\u7d44\u5e8f\u5217")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JSON"),(0,l.kt)("li",{parentName:"ul"},"XML"),(0,l.kt)("li",{parentName:"ul"},"CSV")),(0,l.kt)("p",null,"\u5728\u9019\u5169\u7a2e\u4e4b\u9593\u8f49\u63db\u7684\u52d5\u4f5c\u7a31\u4e4b\u70ba\u7de8\u78bc (encoding, serialization, marshalling) \u548c\u89e3\u78bc (decoding, deserialization, unmarshalling) \u3002"),(0,l.kt)("h3",{id:"json-xml-csv-\u7684\u7f3a\u9677"},"JSON, XML, CSV \u7684\u7f3a\u9677"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"XML \u548c CSV \u7121\u6cd5\u5340\u5206\u5b57\u4e32\u548c\u6578\u5b57"),(0,l.kt)("li",{parentName:"ul"},"JSON \u7121\u6cd5\u5340\u5206\u6574\u6578\u548c\u6d6e\u9ede\u6578\uff0c\u4e5f\u7121\u6cd5\u6307\u5b9a\u7cbe\u5ea6\uff0c\u56fa\u5b9a\u4f7f\u7528 IEEE 754"),(0,l.kt)("li",{parentName:"ul"},"JSON \u548c XML \u4e0d\u652f\u63f4\u4e8c\u9032\u4f4d\u5b57\u4e32 (CSV \u53ef\u4ee5\uff1f)"),(0,l.kt)("li",{parentName:"ul"},"XML \u548c JSON \u53ef\u4ee5\u5b9a\u7fa9 schema\uff0c\u800c CSV \u4e0d\u884c")),(0,l.kt)("admonition",{title:"Base64 \u7de8\u78bc",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Base64 \u7de8\u78bc\u5c07\u4e8c\u9032\u4f4d\u8cc7\u6599\u8f49\u70ba\u5b57\u4e32\uff0c\u4f46\u662f\u6703\u589e\u52a0\u7d04 33% \u7684\u5927\u5c0f")),(0,l.kt)("admonition",{title:"JSON \u4f7f\u7528 IEEE 754 \u7684\u9650\u5236",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5728\u67d0\u500b\u61c9\u7528\u5834\u666f\uff0c\u9700\u8981\u5132\u5b58\u7cbe\u6e96\u5230\u5948\u79d2\u7684\u6642\u9593\u6233\uff0c\u4f46 IEEE 754 \u7684\u6700\u5927\u6574\u6578\u7bc4\u570d\u5230 2^53 -1\uff0c\u5b8c\u5168\u5b58\u4e0d\u4e0b\uff0c\u53ea\u597d\u4f7f\u7528\u5b57\u4e32\u8868\u793a"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"2^53 - 1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"9,007,199,254,740,991"))),(0,l.kt)("li",{parentName:"ul"},"current epoch time in nano second",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"1,713,578,589,000,000,000"))))),(0,l.kt)("h3",{id:"\u4e8c\u9032\u4f4d\u7de8\u78bc"},"\u4e8c\u9032\u4f4d\u7de8\u78bc"),(0,l.kt)("p",null,"\u72a7\u7272\u4e86\u53ef\u8b80\u6027\uff0c\u63db\u53d6\u66f4\u77ed\u7684\u7de8\u78bc\u9577\u5ea6\u53ca\u66f4\u5feb\u7684\u89e3\u78bc\u901f\u5ea6\u3002"),(0,l.kt)("p",null,"\u4ee5\u6b64 JSON \u6587\u4ef6\u7528\u65bc\u5f8c\u7e8c\u7684\u4e8c\u9032\u4f4d\u7de8\u78bc\u5c0d\u7167\u7bc4\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "userName": "Martin",\n    "favoriteNumber": 1337,\n    "interests": ["daydreaming", "hacking"]\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Developer"),(0,l.kt)("th",{parentName:"tr",align:null},"Size in bytes"),(0,l.kt)("th",{parentName:"tr",align:null},"Extra schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON (without spaces)"),(0,l.kt)("td",{parentName:"tr",align:null},"JavaScript (2001)"),(0,l.kt)("td",{parentName:"tr",align:null},"81"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MessagePack"),(0,l.kt)("td",{parentName:"tr",align:null},"Sadayuki Furuhashi (2008)"),(0,l.kt)("td",{parentName:"tr",align:null},"66 (81%)"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Thrift BinaryProtocol"),(0,l.kt)("td",{parentName:"tr",align:null},"Facebook (2007)"),(0,l.kt)("td",{parentName:"tr",align:null},"59 (72%)"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Thrift CompactProtocol"),(0,l.kt)("td",{parentName:"tr",align:null},"Facebook (2007)"),(0,l.kt)("td",{parentName:"tr",align:null},"34 (41%)"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Protocol Buffers"),(0,l.kt)("td",{parentName:"tr",align:null},"Google (2008)"),(0,l.kt)("td",{parentName:"tr",align:null},"33 (40%)"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Avro"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache Hadoop (2009)"),(0,l.kt)("td",{parentName:"tr",align:null},"32 (39%)"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"MessagePack",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u7701\u7565\u4e86\u7279\u6b8a\u7b26\u865f ",(0,l.kt)("inlineCode",{parentName:"p"},"{")," ",(0,l.kt)("inlineCode",{parentName:"p"},"}")," ",(0,l.kt)("inlineCode",{parentName:"p"},"[")," ",(0,l.kt)("inlineCode",{parentName:"p"},"]")," ",(0,l.kt)("inlineCode",{parentName:"p"},'"')," ",(0,l.kt)("inlineCode",{parentName:"p"},","),"\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u5728\u6bcf\u500b\u6b04\u4f4d\u524d\u9762\u7528 1 \u500b byte \u8868\u793a\u578b\u614b\u548c\u9577\u5ea6\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u628a\u6578\u5b57\u8f49\u6210 16 \u9032\u4f4d\u4e5f\u7a0d\u5fae\u7e2e\u77ed\u4e86\u9577\u5ea6 (1337 \u5728 10 \u9032\u4f4d\u7528 4 bytes\uff0c\u5728 16 \u9032\u4f4d\u53ea\u7528 2 bytes) \u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fig4.1",src:a(75440).Z,width:"955",height:"736"}))),(0,l.kt)(i.Z,{value:"Thrift BinaryProtocol",mdxType:"TabItem"},(0,l.kt)("p",null,"\u7528\u984d\u5916\u7684\u7a0b\u5f0f\u78bc\u5b9a\u7fa9\u6b04\u4f4d\u578b\u614b\u8ddf\u540d\u7a31\uff0c\u7de8\u78bc\u4e4b\u5f8c\u53ea\u7559\u4e0b\u6b04\u4f4d\u7de8\u865f\u548c\u5167\u5bb9\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"struct Person {\n  1: required string userName,\n  2: optional i64 favoriteNumber,\n  3: optional list<string> interests\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fig4.2",src:a(43498).Z,width:"955",height:"640"})),(0,l.kt)("admonition",{title:"Discussion",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u65e2\u7136\u6709\u6b04\u4f4d\u7de8\u865f\u4e86\uff0c\u70ba\u4ec0\u9ebc\u9084\u9700\u8981\u578b\u614b\u5462\uff1f"))),(0,l.kt)(i.Z,{value:"Thrift CompactProtocol",mdxType:"TabItem"},(0,l.kt)("p",null,"\u628a\u6b04\u4f4d\u7de8\u865f\u8ddf\u578b\u614b\u585e\u9032 1 \u500b byte\uff0c\u518d\u4f7f\u7528\u300c\u53ef\u8b8a\u9577\u5ea6\u6574\u6578\u300d\u7684\u65b9\u5f0f\uff0c\u7e2e\u77ed\u6574\u6578\u4f54\u7528\u7684\u7684\u7a7a\u9593\u3002"),(0,l.kt)("admonition",{title:"\u53ef\u8b8a\u9577\u5ea6\u6574\u6578",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u6bcf\u500b byte \u7684\u6700\u9ad8\u4f4d\u5143\u7528\u4f86\u6307\u793a\u662f\u5426\u9084\u6709\u66f4\u591a\u7684 byte \u63a5\u7e8c\u5728\u5f8c\u9762")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fig4.3",src:a(52484).Z,width:"955",height:"570"}))),(0,l.kt)(i.Z,{value:"Protocol Buffers",mdxType:"TabItem"},(0,l.kt)("p",null,"\u7c21\u7a31\u70ba Protobuf\uff0c\u4e5f\u9700\u8981\u5b9a\u7fa9\u81ea\u5df1\u7684 schema\u3002"),(0,l.kt)("p",null,"\u6982\u5ff5\u4e0a\u8ddf Thrift \u7684 CompactProtocol \u5dee\u4e0d\u591a\uff0c\u5dee\u5225\u5728\u65bc\u4e00\u4e9b\u4f4d\u5143\u6253\u5305\u4e0a\u7684\u9806\u5e8f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"message Person {\n  required string user_name = 1;\n  optional int64 favorite_number = 2;\n  repeated string interests = 3;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fig4.4",src:a(8973).Z,width:"955",height:"510"}))),(0,l.kt)(i.Z,{value:"Avro",mdxType:"TabItem"},(0,l.kt)("p",null,"\u5c08\u9580\u70ba Hadoop \u958b\u767c\u7684\u8cc7\u6599\u683c\u5f0f\uff0c\u56e0\u70ba\u7576\u6642 Thrift \u548c Protobuf \u88ab\u8a8d\u70ba\u4e0d\u7b26\u4f7f\u7528\u60c5\u5883\u3002"),(0,l.kt)("p",null,"Avro \u5b9a\u7fa9\u4e86\u5169\u7a2e schema\uff0c\u5206\u5225\u662f\u9069\u5408\u4eba\u5de5\u7de8\u8f2f\u7684 Avro IDL (Interface Description Language) \u548c\u9069\u5408\u6a5f\u5668\u8b80\u53d6\u7684 JSON \u683c\u5f0f\u3002"),(0,l.kt)("p",null,"Avro IDL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"record Person {\n  string userName;\n  union { null, long } favoriteNumber = null;\n  array<string> interests;\n}\n")),(0,l.kt)("p",null,"\u7b49\u50f9\u7684 JSON \u683c\u5f0f\u5beb\u6cd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "type": "record",\n  "name": "Person",\n  "fields": [\n    {"name": "userName", "type": "string"},\n    {"name": "favoriteNumber", "type": ["null", "long"], "default": null},\n    {"name": "interests", "type": {"type": "array", "items": "string"}}\n  ]\n}\n')),(0,l.kt)("p",null,"\u7531\u65bc\u6c92\u6709\u5b9a\u7fa9\u6b04\u4f4d\u7de8\u865f\uff0c\u8b80\u53d6\u7684\u6642\u5019\u53ea\u80fd\u6309\u7167\u5b9a\u7fa9\u7684\u9806\u5e8f\u8b80\u53d6\u3002"),(0,l.kt)("p",null,"\u5728\u50b3\u9001\u4e00\u500b\u5927\u6a94\u6848\u7684\u6642\u5019\uff0c\u6703\u5728\u6a94\u6848\u958b\u982d\u9644\u4e0a\u6240\u4f7f\u7528\u7684 schema\uff0c\u8b93\u8b80\u53d6\u65b9\u77e5\u9053\u6240\u5305\u542b\u7684\u6b04\u4f4d\u53ca\u9806\u5e8f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fig4.5",src:a(19877).Z,width:"955",height:"543"})),(0,l.kt)("admonition",{title:"Discussion",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5c0d\u65bc Avro \u683c\u5f0f\uff0c\u5982\u679c\u50b3\u9001\u65b9\u8ddf\u63a5\u6536\u65b9\u624b\u4e0a\u7684 schema \u4e0d\u4e00\u6a23\u600e\u9ebc\u8fa6\uff1f"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Answer"),(0,l.kt)("p",null,"\u7576\u5169\u8005\u6240\u4f7f\u7528\u7684 schema \u4e0d\u5b8c\u5168\u76f8\u540c\uff0c\u5c07\u7121\u6cd5\u5b8c\u6574\u89e3\u78bc\u8a72\u4e8c\u9032\u4f4d\u8cc7\u6599\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u6b04\u4f4d\u540d\u7a31\u4f86\u505a\u5c0d\u61c9\uff0c\u5373\u4f7f\u9806\u5e8f\u4e0d\u540c\uff0c\u76f8\u540c\u7684\u6b04\u4f4d\u540d\u7a31\u5c31\u8996\u70ba\u540c\u6a23\u7684\u6b04\u4f4d\uff0c\u5c0d\u65bc\u6c92\u51fa\u73fe\u7684\u6b04\u4f4d\uff0c\u5247\u4ee5\u9810\u8a2d\u503c\u586b\u88dc\u3002"))),(0,l.kt)("admonition",{title:"Discussion",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u70ba\u4ec0\u9ebc Avro \u4e0d\u4f7f\u7528\u6b04\u4f4d\u7de8\u865f\uff1f"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Answer"),(0,l.kt)("p",null,"\u66f4\u5229\u65bc\u52d5\u614b\u7522\u751f schema\uff0c\u4e0d\u9700\u8981\u64d4\u5fc3\u76f8\u540c\u7684\u6b04\u4f4d\u7de8\u865f\u5c0d\u61c9\u5230\u4e0d\u540c\u6b04\u4f4d\u9020\u6210\u932f\u8aa4"))))),(0,l.kt)("h3",{id:"schema-\u6f14\u5316\u6642\u7684\u76f8\u5bb9\u6027"},"Schema \u6f14\u5316\u6642\u7684\u76f8\u5bb9\u6027"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e\u548c\u522a\u9664\u7684\u6b04\u4f4d\u5fc5\u9808\u662f",(0,l.kt)("strong",{parentName:"li"},"\u9078\u586b"),"\u7684\uff0c\u5426\u5247\u820a\u7248 schema \u6703\u7121\u6cd5\u8b80\u53d6 (\u7121\u6cd5\u56de\u6714\u76f8\u5bb9)"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u4ee5\u522a\u9664\u5fc5\u586b\u6b04\u4f4d\uff0c\u800c\u4e14\u8a72",(0,l.kt)("strong",{parentName:"li"},"\u6b04\u4f4d\u7de8\u865f"),"\u4e0d\u80fd\u518d\u88ab\u5176\u4ed6\u6b04\u4f4d\u4f7f\u7528")),(0,l.kt)("h2",{id:"dataflow-\u6a21\u5f0f-\u8cc7\u6599\u50b3\u8f38\u6a21\u5f0f"},(0,l.kt)("del",{parentName:"h2"},"Dataflow \u6a21\u5f0f")," \u8cc7\u6599\u50b3\u8f38\u6a21\u5f0f"),(0,l.kt)("h3",{id:"\u900f\u904e\u8cc7\u6599\u5eab"},"\u900f\u904e\u8cc7\u6599\u5eab"),(0,l.kt)("h4",{id:"\u5e38\u898b\u7684\u60c5\u6cc1"},"\u5e38\u898b\u7684\u60c5\u6cc1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ea\u6709\u4e00\u500b\u5b58\u53d6\u8cc7\u6599\u5eab\u7684\u7a0b\u5f0f\uff0c\u800c\u8b80\u53d6\u65b9\u5f0f\u540c\u4e00\u96bb\u7a0b\u5f0f\u7684\u8f03\u65b0\u7248\uff0c\u53ef\u4ee5\u770b\u4f5c\u300c\u5411\u672a\u4f86\u7684\u81ea\u5df1\u767c\u9001\u8a0a\u606f\u300d"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u500b\u4e0d\u540c\u7684\u7a0b\u5f0f\u540c\u6642\u5b58\u53d6\u8cc7\u6599\u5eab\uff0c\u6709\u4e9b\u7a0b\u5f0f\u7248\u672c\u8f03\u65b0\uff0c\u6709\u4e9b\u5247\u8f03\u820a\u3002\u4f8b\u5982\uff0c\u7cfb\u7d71\u6b63\u5728\u9032\u884c\u6efe\u52d5\u5347\u7d1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u820a\u7248\u7a0b\u5f0f\u53ef\u80fd\u6703\u4e0d\u5c0f\u5fc3\u4e1f\u5931\u65b0\u7248\u7a0b\u5f0f\u5beb\u5165\u7684\u8cc7\u6599")))),(0,l.kt)("h4",{id:"\u6b78\u6a94\u5132\u5b58"},"\u6b78\u6a94\u5132\u5b58"),(0,l.kt)("p",null,"\u5c0d\u8cc7\u6599\u5eab\u505a\u5feb\u7167 (snapshot) \u6642\uff0c\u6216\u8a31\u6703\u5c07\u5176\u5b58\u5165\u5b58\u5132\u670d\u52d9 (AWS S3) \u6216\u8cc7\u6599\u5009\u5132 (data warehouse)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Avro \u5c07\u6a94\u6848\u683c\u5f0f\u653e\u5728\u6b64\u5feb\u7167\u7684\u958b\u982d\u8655\u662f\u500b\u597d\u9078\u64c7\uff0c\u4f7f\u5176\u81ea\u6211\u63cf\u8ff0 (self contained)"),(0,l.kt)("li",{parentName:"ul"},"\u5c07\u8cc7\u6599\u7de8\u78bc\u6210\u884c\u5f0f\u5132\u5b58 (column based) \u7684\u597d\u6a5f\u6703\uff0c\u5982 Parquet \u683c\u5f0f\uff0c\u66f4\u5bb9\u6613\u7528\u5728\u8cc7\u6599\u5206\u6790\u4e0a")),(0,l.kt)("h3",{id:"\u900f\u904e\u7db2\u8def\u670d\u52d9-rest-\u548c-rpc"},"\u900f\u904e\u7db2\u8def\u670d\u52d9: REST \u548c RPC"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"REST: \u57fa\u65bc HTTP \u7684\u4e00\u7a2e\u8a2d\u8a08\u54f2\u5b78"),(0,l.kt)("li",{parentName:"ul"},"SOAP: \u4f7f\u7528\u4e00\u7a2e\u57fa\u65bc XML \u7684\u8a9e\u8a00 WSDL (Web Services Description Language) \u4f86\u63cf\u8ff0\u5176 API",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"WSDL \u7522\u751f\u7684 SOAP \u8a0a\u606f\u901a\u5e38\u8907\u96dc\u5230\u96e3\u4ee5\u9760\u624b\u52d5\u7522\u751f\uff0c\u4e5f\u5f88\u96e3\u95b1\u8b80\uff0c\u56e0\u6b64\u6f38\u6f38\u7684\u4e0d\u53d7\u5927\u773e\u559c\u611b"))),(0,l.kt)("li",{parentName:"ul"},"RPC (Remote Call Procedure): \u8a66\u5716\u4f7f\u5411\u9060\u7aef\u7db2\u8def\u670d\u52d9\u767c\u51fa\u8acb\u6c42\uff0c\u5c31\u50cf\u5728\u540c\u4e00\u7a0b\u5f0f\u4e2d\u547c\u53eb\u51fd\u6578\u4e00\u6a23 (\u7a31\u70ba\u4f4d\u7f6e\u900f\u660e\u6027\uff0clocaltion transparency)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7db2\u8def\u8acb\u6c42\u662f\u4e0d\u53ef\u9810\u6e2c\u7684\uff0c\u7576\u8acb\u6c42\u903e\u6642\u7684\u6642\u5019\uff0c\u6c92\u8fa6\u6cd5\u78ba\u8a8d\u5230\u5e95\u57f7\u884c\u4e86\u6c92",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u82e5\u51fd\u6578\u5177\u6709\u51aa\u7b49\u6027 (idempotence) \uff0c\u90a3\u5c31\u53ef\u4ee5\u767c\u51fa\u591a\u6b21\u8acb\u6c42\uff0c\u800c\u4e0d\u7528\u64d4\u5fc3\u5f15\u767c\u984d\u5916\u7684\u554f\u984c"))),(0,l.kt)("li",{parentName:"ul"},"\u547c\u53eb\u672c\u5730\u51fd\u6578\u6642\uff0c\u53ef\u4ee5\u76f4\u63a5\u50b3\u905e\u53c3\u6578\u7684\u53c3\u7167 (\u6307\u6a19) \uff0c\u800c\u5982\u679c\u662f\u900f\u904e\u7db2\u8def\u50b3\u8f38\uff0c\u554f\u984c\u5c31\u8907\u96dc\u7684\u591a")))),(0,l.kt)("h3",{id:"\u900f\u904e\u975e\u540c\u6b65\u8a0a\u606f"},"\u900f\u904e\u975e\u540c\u6b65\u8a0a\u606f"),(0,l.kt)("p",null,"\u96d9\u65b9\u900f\u904e\u4e00\u7a2e\u7a31\u70ba\u8a0a\u606f\u4ee3\u7406 (message broker) \u7684\u4e2d\u4ecb\u8edf\u9ad4\u4f86\u6e9d\u901a\uff0c\u4e5f\u7a31\u70ba\u8a0a\u606f\u4f47\u5217 (message queue) \u6216\u662f\u8a0a\u606f\u5c0e\u5411\u7684\u4e2d\u4ecb\u8edf\u9ad4 (message-oriented middleware) \u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7576\u63a5\u6536\u65b9\u96e2\u7dda\u6216\u662f\u8d85\u8f09\u6642\uff0c\u53ef\u4ee5\u7576\u4f5c\u7de9\u885d\u5340\uff0c\u63d0\u9ad8\u7cfb\u7d71\u7684\u53ef\u9760\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u52d5\u5c07\u8a0a\u606f\u91cd\u767c\u5230\u4e4b\u524d\u767c\u751f\u5d29\u6f70\u7684\u7a0b\u5f0f\uff0c\u9632\u6b62\u8a0a\u606f\u907a\u5931"),(0,l.kt)("li",{parentName:"ul"},"\u767c\u9001\u65b9\u4e0d\u9700\u8981\u77e5\u9053\u63a5\u6536\u65b9\u7684\u8cc7\u8a0a (IP, \u5be6\u4f5c\u7b49\u7b49) \uff0c\u964d\u4f4e\u8026\u5408"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u689d\u8a0a\u606f\u53ef\u4ee5\u767c\u9001\u7d66\u591a\u500b\u63a5\u6536\u65b9"),(0,l.kt)("li",{parentName:"ul"},"\u8a0a\u606f\u5167\u5bb9\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u7684\u7de8\u78bc\u683c\u5f0f\uff0c\u53ea\u662f\u8981\u8a18\u5f97\u601d\u8003\u56de\u6714\u8207\u5411\u524d\u76f8\u5bb9")),(0,l.kt)("h2",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728\u6efe\u52d5\u5347\u7d1a\u671f\u9593\uff0c\u5fc5\u9808\u5047\u8a2d\u4e0d\u540c\u7bc0\u9ede\u4e0a\u6b63\u57f7\u884c\u8457\u4e0d\u540c\u7248\u672c\u7684\u7a0b\u5f0f\uff0c\u56e0\u6b64\u5fc5\u9808\u4fdd\u8b49\u5728\u7cfb\u7d71\u5167\u50b3\u8f38\u7684\u8cc7\u6599\u4ee5\u56de\u6714\u76f8\u5bb9\u548c\u5411\u524d\u76f8\u5bb9\u7684\u65b9\u5f0f\u9032\u884c\u7de8\u78bc"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u56de\u6714\u76f8\u5bb9: \u65b0\u7a0b\u5f0f\u53ef\u4ee5\u8b80\u820a\u8cc7\u6599"),(0,l.kt)("li",{parentName:"ul"},"\u5411\u524d\u76f8\u5bb9: \u820a\u7a0b\u5f0f\u53ef\u4ee5\u8b80\u65b0\u8cc7\u6599"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8cc7\u6599\u7de8\u78bc\u683c\u5f0f"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"JSON, XML, CSV \u5f88\u5e38\u898b\u4e5f\u597d\u4f7f\u7528\uff0c\u4f46\u662f\u6709\u5176\u9650\u5236"),(0,l.kt)("li",{parentName:"ul"},"Thrift, Protobuf, Avro \u80fd\u4ee5\u5b9a\u7fa9\u7684 schema \u5b8c\u6210\u7dca\u6e4a\u3001\u9ad8\u6548\u7387\u7684\u7de8\u78bc\uff0c\u4f46\u5728\u89e3\u78bc\u524d\u6beb\u7121\u53ef\u8b80\u6027"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8cc7\u6599\u50b3\u8f38\u6a21\u5f0f"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8cc7\u6599\u5eab: \u5beb\u5165\u8cc7\u6599\u5eab\u7684\u7a0b\u5f0f\u8ca0\u8cac\u7de8\u78bc\uff0c\u8b80\u53d6\u8cc7\u6599\u5eab\u7684\u7a0b\u5f0f\u8907\u96dc\u89e3\u78bc"),(0,l.kt)("li",{parentName:"ul"},"REST API \u548c RPC: \u5ba2\u6236\u7aef\u5c07\u8acb\u6c42\u7de8\u78bc\uff0c\u4f3a\u670d\u5668\u7aef\u5c07\u8acb\u6c42\u89e3\u78bc\u5f8c\u8655\u7406\uff0c\u518d\u5c07\u56de\u61c9\u7de8\u78bc\uff0c\u5ba2\u6236\u7aef\u6536\u5230\u5f8c\u518d\u89e3\u78bc"),(0,l.kt)("li",{parentName:"ul"},"\u975e\u540c\u6b65\u8a0a\u606f: \u767c\u9001\u65b9\u7de8\u78bc\u8a0a\u606f\uff0c\u7531\u63a5\u6536\u65b9\u89e3\u78bc")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u53ea\u8981\u7528\u5fc3\uff0c\u7cfb\u7d71\u4e00\u5b9a\u53ef\u4ee5\u5be6\u73fe\u56de\u6714/\u5411\u524d\u76f8\u5bb9\uff01")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fig4.6",src:a(42506).Z,width:"1199",height:"673"})))}k.isMDXComponent=!0},75440:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fig4_1-0983c39b0ffdeeec0371170bdc2ea936.png"},43498:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fig4_2-82ebf495b580994117cf0ff25d9613e9.png"},52484:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fig4_3-d393f875c0f7602c06ebc00fb5cc0ed5.png"},8973:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fig4_4-23d235821e505e0568c9c30ff52d41ad.png"},19877:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fig4_5-b3fd1cba99238832e82832dfc6ddd349.png"},42506:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fig4_6-b784b92d375cf64375432092e97fd219.png"}}]);