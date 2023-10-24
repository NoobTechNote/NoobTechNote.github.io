"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[9177],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return a?r.createElement(f,u(u({ref:t},c),{},{components:a})):r.createElement(f,u({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,u=new Array(l);u[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:n,u[1]=o;for(var s=2;s<l;s++)u[s]=a[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:a,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,u),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(87462),n=a(67294),l=a(86010),u=a(12466),o=a(16550),i=a(91980),s=a(67392),c=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[u,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,s]=f({queryString:a,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=i??p;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),h(e)}),[s,h,l]),tabValues:l}}var b=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,u.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==o&&(p(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:u}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},u,{className:(0,l.Z)("tabs__item",k.tabItem,u?.className,{"tabs__item--active":o===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=h(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(N,(0,r.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return n.createElement(g,(0,r.Z)({key:String(t)},e))}},71659:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));a(74866),a(85162);const l={title:"Ch23: \u4ea4\u6d89\u8207\u9818\u5c0e\u6280\u5de7",tsidebar_label:"Ch23: \u4ea4\u6d89\u8207\u9818\u5c0e\u6280\u5de7",sidebar_position:23},u=void 0,o={unversionedId:"sg/fundamentals-of-software-architecture/ch23",id:"sg/fundamentals-of-software-architecture/ch23",title:"Ch23: \u4ea4\u6d89\u8207\u9818\u5c0e\u6280\u5de7",description:"\u4ea4\u6d89\u8207\u9818\u5c0e\u6280\u5de7",source:"@site/docs/sg/fundamentals-of-software-architecture/ch23.mdx",sourceDirName:"sg/fundamentals-of-software-architecture",slug:"/sg/fundamentals-of-software-architecture/ch23",permalink:"/docs/sg/fundamentals-of-software-architecture/ch23",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fundamentals-of-software-architecture/ch23.mdx",tags:[],version:"current",lastUpdatedBy:"David C Tsai",lastUpdatedAt:1698109986,formattedLastUpdatedAt:"Oct 24, 2023",sidebarPosition:23,frontMatter:{title:"Ch23: \u4ea4\u6d89\u8207\u9818\u5c0e\u6280\u5de7",tsidebar_label:"Ch23: \u4ea4\u6d89\u8207\u9818\u5c0e\u6280\u5de7",sidebar_position:23},sidebar:"tutorialSidebar",previous:{title:"Ch22: \u6253\u9020\u6709\u6548\u7684\u5718\u968a",permalink:"/docs/sg/fundamentals-of-software-architecture/ch22"},next:{title:"Ch24: \u767c\u5c55\u4e00\u689d\u8077\u6daf\u8def\u5f91",permalink:"/docs/sg/fundamentals-of-software-architecture/ch24"}},i={},s=[{value:"\u4ea4\u6d89\u8207\u9818\u5c0e\u6280\u5de7",id:"\u4ea4\u6d89\u8207\u9818\u5c0e\u6280\u5de7",level:2},{value:"\u8ac7\u5224\u548c\u5354\u52a9",id:"\u8ac7\u5224\u548c\u5354\u52a9",level:3},{value:"\u8207Business Stakeholders\u8ac7\u5224",id:"\u8207business-stakeholders\u8ac7\u5224",level:3},{value:"\u8207\u5176\u4ed6\u67b6\u69cb\u5e2b\u8ac7\u5224",id:"\u8207\u5176\u4ed6\u67b6\u69cb\u5e2b\u8ac7\u5224",level:3},{value:"\u8207\u958b\u767c\u5de5\u7a0b\u5e2b\u8ac7\u5224",id:"\u8207\u958b\u767c\u5de5\u7a0b\u5e2b\u8ac7\u5224",level:3},{value:"\u67b6\u69cb\u5e2b\u4f5c\u70ba\u9818\u5c0e\u8005",id:"\u67b6\u69cb\u5e2b\u4f5c\u70ba\u9818\u5c0e\u8005",level:2},{value:"4C\u67b6\u69cb",id:"4c\u67b6\u69cb",level:3},{value:"\u52d9\u5be6\u4f46\u5bcc\u6709\u9060\u898b",id:"\u52d9\u5be6\u4f46\u5bcc\u6709\u9060\u898b",level:3},{value:"\u4ee5\u8eab\u4f5c\u5247\u9818\u5c0e\u5718\u968a",id:"\u4ee5\u8eab\u4f5c\u5247\u9818\u5c0e\u5718\u968a",level:3},{value:"\u8207\u958b\u767c\u5718\u968a\u6574\u5408",id:"\u8207\u958b\u767c\u5718\u968a\u6574\u5408",level:2},{value:"\u7d50\u8a9e",id:"\u7d50\u8a9e",level:2}],c={toc:s},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4ea4\u6d89\u8207\u9818\u5c0e\u6280\u5de7"},"\u4ea4\u6d89\u8207\u9818\u5c0e\u6280\u5de7"),(0,n.kt)("h3",{id:"\u8ac7\u5224\u548c\u5354\u52a9"},"\u8ac7\u5224\u548c\u5354\u52a9"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5177\u6709\u6311\u6230\u6027\u7684\u6280\u80fd\u767c\u5c55\uff1a\u7372\u5f97\u8ac7\u5224\u548c\u9818\u5c0e\u6280\u80fd\u662f\u4e00\u500b\u56b4\u683c\u7684\u3001\u9577\u671f\u7684\u904e\u7a0b\uff0c\u6d89\u53ca\u5b78\u7fd2\u3001\u5be6\u8e10\u548c\u7d93\u9a57\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u99d5\u99ad\u7d44\u7e54\u653f\u6cbb\uff1a\u67b6\u69cb\u5e2b\u5fc5\u9808\u4e86\u89e3\u7d44\u7e54\u653f\u6cbb\uff0c\u56e0\u70ba\u4ed6\u5011\u505a\u51fa\u7684\u5e7e\u4e4e\u6bcf\u4e00\u500b\u6c7a\u5b9a\u90fd\u6703\u9762\u81e8\u5be9\u67e5\u548c\u53cd\u5c0d\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6c7a\u7b56\u6311\u6230\uff1a\u67b6\u69cb\u5e2b\u7684\u6c7a\u7b56\u9047\u5230\u4e86\u4f86\u81ea\u958b\u767c\u4eba\u54e1\u3001\u540c\u884c\u548c\u5229\u76ca\u76f8\u95dc\u8005\u7684\u963b\u529b\uff0c\u6bcf\u500b\u4eba\u90fd\u63d0\u51fa\u4e86\u81ea\u5df1\u7684\u89c0\u9ede\u548c\u64d4\u6182\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5e73\u8861\u6b0a\u8861\uff1a\u67b6\u69cb\u5e2b\u7d93\u5e38\u5354\u5546\u6b0a\u8861\uff0c\u4f8b\u5982\u5e73\u8861\u7cfb\u7d71\u53ef\u7528\u6027\u8207\u6210\u672c\uff0c\u9700\u8981\u8207\u95dc\u9375\u5229\u76ca\u76f8\u95dc\u8005\u9054\u6210\u5171\u8b58\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u95dc\u9375\u7684\u8ac7\u5224\u6280\u5de7\uff1a\u8ac7\u5224\u662f\u5efa\u7bc9\u5e2b\u6700\u91cd\u8981\u7684\u80fd\u529b\u4e4b\u4e00\uff0c\u5373\u4f7f\u5728\u722d\u8b70\u4e2d\u4e5f\u80fd\u4fc3\u9032\u5229\u76ca\u76f8\u95dc\u8005\u4e4b\u9593\u9054\u6210\u5354\u8b70\u3002")),(0,n.kt)("h3",{id:"\u8207business-stakeholders\u8ac7\u5224"},"\u8207Business Stakeholders\u8ac7\u5224"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u907f\u514d\u525b\u610e\u81ea\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u7528\u8a9e\u80cc\u5f8c\u7684\u9700\u6c42"),(0,n.kt)("li",{parentName:"ul"},"\u7406\u89e3 = \u8f49\u8b6f = \u518d\u6e9d\u901a"),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf30 \u4e94\u500b9\u7684\u9700\u6c42")),(0,n.kt)("h3",{id:"\u8207\u5176\u4ed6\u67b6\u69cb\u5e2b\u8ac7\u5224"},"\u8207\u5176\u4ed6\u67b6\u69cb\u5e2b\u8ac7\u5224"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u56e0\u70ba\u8cc7\u6b77\u5dee\u7570\u5ffd\u8996\u53cd\u5c0d\u610f\u898b"),(0,n.kt)("li",{parentName:"ul"},"\u5177\u9ad4\u8a0e\u8ad6\uff0c\u4e0d\u540c\u60c5\u5883\u6703\u63a1\u7528\u4e0d\u540c\u89e3\u6cd5"),(0,n.kt)("li",{parentName:"ul"},"\u904e\u5ea6\u6fc0\u5316\u8981\u66ab\u505c\u8ac7\u5224"),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf30 \u9996\u5e2d\u67b6\u69cb\u5e2b vs \u67b6\u69cb\u5e2b \u95dc\u65bc Sync or Async Solution")),(0,n.kt)("h3",{id:"\u8207\u958b\u767c\u5de5\u7a0b\u5e2b\u8ac7\u5224"},"\u8207\u958b\u767c\u5de5\u7a0b\u5e2b\u8ac7\u5224"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u7528\u8a9e"),(0,n.kt)("li",{parentName:"ul"},"\u8b93\u958b\u767c\u90e8\u9580\u63d0\u4f9b\u89e3\u65b9"),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf30 \u67b6\u69cb\u5e2b\u8aaaX \u958b\u767c\u8aaaY \u5617\u8a66push developers \u53bb\u8b49\u660eY\u53ef\u4ee5\u6eff\u8db3\u73fe\u6709\u9700\u6c42")),(0,n.kt)("h2",{id:"\u67b6\u69cb\u5e2b\u4f5c\u70ba\u9818\u5c0e\u8005"},"\u67b6\u69cb\u5e2b\u4f5c\u70ba\u9818\u5c0e\u8005"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8d85\u904e50% \u597d\u7684\u67b6\u69cb\u5e2b\u8981\u6709\u597d\u7684\u4eba\u969b\u6e9d\u901a\u3001\u5f15\u5c0e\uff0c\u4ee5\u53ca\u9818\u5c0e\u80fd\u529b"),(0,n.kt)("li",{parentName:"ul"},"\u8907\u96dc\u6027: \u672c\u8cea\u8907\u96dc\u6027 vc \u5076\u7136\u8907\u96dc\u6027")),(0,n.kt)("h3",{id:"4c\u67b6\u69cb"},"4C\u67b6\u69cb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Communication"),(0,n.kt)("li",{parentName:"ul"},"Collaboration"),(0,n.kt)("li",{parentName:"ul"},"Clarity"),(0,n.kt)("li",{parentName:"ul"},"Conciseness")),(0,n.kt)("h3",{id:"\u52d9\u5be6\u4f46\u5bcc\u6709\u9060\u898b"},"\u52d9\u5be6\u4f46\u5bcc\u6709\u9060\u898b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6709\u9060\u898b: \u7528\u60f3\u50cf\u529b\u6216\u667a\u6167\u601d\u8003\u6216\u898f\u5283\u672a\u4f86\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u52d9\u5be6: \u4ee5\u57fa\u65bc\u5be6\u8e10\u800c\u4e0d\u662f\u7406\u8ad6\u8003\u616e\u7684\u65b9\u5f0f\u660e\u667a\u548c\u73fe\u5be6\u5730\u8655\u7406\u4e8b\u60c5\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5275\u5efa\u67b6\u69cb\u89e3\u6c7a\u65b9\u6848\u6642\u8003\u616e\u4ee5\u4e0b\u6240\u6709\u56e0\u7d20\u548c\u7d04\u675f\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9810\u7b97\u9650\u5236\u548c\u5176\u4ed6\u57fa\u65bc\u6210\u672c\u7684\u56e0\u7d20"),(0,n.kt)("li",{parentName:"ul"},"\u6642\u9593\u9650\u5236\u548c\u5176\u4ed6\u57fa\u65bc\u6642\u9593\u7684\u56e0\u7d20"),(0,n.kt)("li",{parentName:"ul"},"\u958b\u767c\u5718\u968a\u7684\u6280\u80fd\u7d44\u5408\u548c\u6280\u80fd\u6c34\u5e73"),(0,n.kt)("li",{parentName:"ul"},"\u8207\u67b6\u69cb\u6c7a\u7b56\u76f8\u95dc\u7684\u6b0a\u8861\u548c\u5f71\u97ff"),(0,n.kt)("li",{parentName:"ul"},"\u64ec\u8b70\u7684\u67b6\u69cb\u8a2d\u8a08\u6216\u89e3\u6c7a\u65b9\u6848\u7684\u6280\u8853\u9650\u5236"))))),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf30 \u8981\u8a2d\u8a08\u9ad8\u4f75\u767c\u3001\u5206\u5e03\u5f0f\u7684\u7cfb\u7d71\u56e0\u61c9\u53ef\u9810\u898b\u7684\u5927\u6d41\u91cf\uff0c\u9700\u8981\u8003\u91cf\u7576\u524d\u6280\u8853\u5718\u968a\u80fd\u529b\uff0c\u53ef\u4ee5\u5148\u805a\u7126\u5728\u5982\u4f55\u9694\u96e2bottleneck\u9054\u5230\u9700\u6c42\u3002")),(0,n.kt)("h3",{id:"\u4ee5\u8eab\u4f5c\u5247\u9818\u5c0e\u5718\u968a"},"\u4ee5\u8eab\u4f5c\u5247\u9818\u5c0e\u5718\u968a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u7528\u8a9e"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u8ac7\u5224\u4e2d\u52a0\u5165\u5c0d\u65b9\u540d\u5b57\uff0c\u767c\u97f3\u8981\u6b63\u78ba"),(0,n.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b21\u898b\u9762\u8981\u63e1\u624b"),(0,n.kt)("li",{parentName:"ul"},"\u5b9a\u671f\u805a\u6703\uff0c\u8a0e\u8ad6\u6280\u8853\u6216\u7279\u5b9a\u6280\u5de7")),(0,n.kt)("h2",{id:"\u8207\u958b\u767c\u5718\u968a\u6574\u5408"},"\u8207\u958b\u767c\u5718\u968a\u6574\u5408"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9ad8\u6548\u7684\u67b6\u69cb\u5e2b\u8981\u70ba\u958b\u767c\u5718\u968a\u632a\u51fa\u6642\u9593"),(0,n.kt)("li",{parentName:"ul"},"\u5340\u5206imposed upon(\u88ab\u9080\u8acb) \u4ee5\u53ca imposed by(\u7531\u4f60\u53ec\u96c6)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Imposed upon",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u78ba\u8a8d\u6703\u8b70\u76ee\u7684\uff0c\u53ef\u4ee5\u6e1b\u5c11\u6703\u8b70\u53c3\u8207"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u958b\u767c\u5718\u968a\u8ddf\u67b6\u6e9d\u5e2b\u90fd\u88ab\u9080\u8acb\uff0c\u53ef\u4ee5\u8b93\u958b\u767c\u5718\u968a\u9a30\u51fa\u6642\u9593\u53bb\u958b\u767c"))),(0,n.kt)("li",{parentName:"ul"},"Imposed by",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65e9\u4e0a\u958b\u59cb\u3001\u5348\u9910\u5f8c\u3001\u4e0b\u73ed\u524d\u6700\u4f73\uff0c\u4e0d\u8981\u983b\u7e41\u6253\u65b7"))))),(0,n.kt)("li",{parentName:"ul"},"\u5750\u5728\u4e00\u8d77\uff0c\u6216\u8005\u983b\u7e41\u6e9d\u901a")),(0,n.kt)("h2",{id:"\u7d50\u8a9e"},"\u7d50\u8a9e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The most important single ingredient in the formula of success is knowing how to get along with people.(Theodore Roosevelt)")))}m.isMDXComponent=!0}}]);