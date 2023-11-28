"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[9866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(87462),a=n(67294),l=n(86010),i=n(12466),o=n(16550),s=n(91980),u=n(67392),p=n(50012);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=g({queryString:n,groupId:r}),[c,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),h=(()=>{const e=s??c;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var h=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==o&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=y(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},a.createElement(f,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},40388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),l=n(74866),i=n(85162);const o={title:"Ch6: Defend the data",sidebar_label:"Ch6: Defend the data",sidebar_position:6},s=void 0,u={unversionedId:"sg/five-lines-of-code/ch6",id:"sg/five-lines-of-code/ch6",title:"Ch6: Defend the data",description:"6.1 Encapsulating without getters",source:"@site/docs/sg/five-lines-of-code/ch6.mdx",sourceDirName:"sg/five-lines-of-code",slug:"/sg/five-lines-of-code/ch6",permalink:"/docs/sg/five-lines-of-code/ch6",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/five-lines-of-code/ch6.mdx",tags:[],version:"current",lastUpdatedBy:"yvette-tsai",lastUpdatedAt:1701149206,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:6,frontMatter:{title:"Ch6: Defend the data",sidebar_label:"Ch6: Defend the data",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Ch5: \u628a\u76f8\u4f3c\u7684\u7a0b\u5f0f\u78bc\u7d71\u5408\u5728\u4e00\u8d77",permalink:"/docs/sg/five-lines-of-code/ch5"},next:{title:"\u8edf\u9ad4\u67b6\u69cb\u539f\u7406 - \u5de5\u7a0b\u65b9\u6cd5",permalink:"/docs/sg/fundamentals-of-software-architecture/"}},p={},c=[{value:"6.1 Encapsulating without getters",id:"61-encapsulating-without-getters",level:2},{value:"6.1.1 Rule: DO NOT USE GETTERS OR SETTERS",id:"611-rule-do-not-use-getters-or-setters",level:3},{value:"Pull-based vs Pushed-based",id:"pull-based-vs-pushed-based",level:4},{value:"6.1.3 Refactoring pattern: ELIMINATE GETTER OR SETTER",id:"613-refactoring-pattern-eliminate-getter-or-setter",level:3},{value:"6.1.4 Eliminating the final getter",id:"614-eliminating-the-final-getter",level:3},{value:"6.2 Encapsulating simple data",id:"62-encapsulating-simple-data",level:2},{value:"6.2.2 \u61c9\u7528NEVER HAVE COMMON AFFIXES",id:"622-\u61c9\u7528never-have-common-affixes",level:3},{value:"6.2.3 Refactoring pattern: ENCAPSULATE DATA",id:"623-refactoring-pattern-encapsulate-data",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=m("Row"),g=m("Col"),y={toc:c},h="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"61-encapsulating-without-getters"},"6.1 Encapsulating without getters"),(0,a.kt)("h3",{id:"611-rule-do-not-use-getters-or-setters"},"6.1.1 Rule: DO NOT USE GETTERS OR SETTERS"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Do not use setters or getters for non-Boolean fields.")),(0,a.kt)("p",null,"\u539f\u56e0\u662f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"setter\u548cgetter\u6703\u4f7f\u985e\u7684\u4e0d\u8b8a\u91cf\u8b8a\u5f97\u5168\u5c40\uff0c\u7834\u58de\u4e86\u5c01\u88dd\u6027\u3002\n\u4efb\u4f55\u7372\u5f97\u8a72\u5c0d\u8c61\u7684\u4eba\u90fd\u53ef\u4ee5\u547c\u53ebgetter\u548csetter\uff0c\u69cb\u6210\u672a\u77e5\u7684\u4fee\u6539\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528getter\u548csetter\u6703\u5c0e\u81f4pull-based\u7684\u67b6\u69cb\uff1b\n\u9019\u901a\u5e38\u6703\u7522\u751f\u4e0d\u5fc5\u8981\u7684\u6578\u64da\u985e\u548c\u80a5\u5927\u7684\u7ba1\u7406\u985e\uff0c\u4e14\u6578\u64da\u985e\u548c\u7ba1\u7406\u985e\u6703\u7dca\u5bc6\u8026\u5408\u3002")),(0,a.kt)("h4",{id:"pull-based-vs-pushed-based"},"Pull-based vs Pushed-based"),(0,a.kt)(d,{mdxType:"Row"},(0,a.kt)(g,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Pull-based architecture"',title:'"Pull-based','architecture"':!0},"class Website {\n  constructor(private url: string) { }\n  getUrl() { \n    return this.url; \n  }\n}\nclass User {\n  constructor(private username: string) { }\n  getUsername() { return this.username; }\n}\n\n\n\n\nclass BlogPost {\n  constructor(private author: User,\n    private id: string) { }\n  getId() { return this.id; }\n  getAuthor() { return this.author; }\n}\n\n\n\nfunction generatePostLink(website: Website,\n  post: BlogPost) {\n  let url = website.getUrl();\n  let user = post.getAuthor();\n  let name = user.getUsername();\n  let postId = post.getId();\n  return url + name + postId;\n}\n"))),(0,a.kt)(g,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Push-based architecture"',title:'"Push-based','architecture"':!0},"class Website {\n  constructor(private url: string) { }\n  generateLink(name: string, id: string) {\n    return this.url + name + id;\n  }\n}\nclass User {\n  constructor(private username: string) { }\n  generateLink(website: Website, id: string) {\n    return website.generateLink(\n      this.username,\n      id);\n  }\n}\nclass BlogPost {\n  constructor(private author: User,\n    private id: string) { }\n  generateLink(website: Website) {\n    return this.author.generateLink(\n      website,\n      this.id);\n  }\n}\nfunction generatePostLink(website: Website,\n  post: BlogPost) {\n  return post.generateLink(website);\n}\n")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"Law of Demeter"),"."),(0,a.kt)("p",{parentName:"admonition"},'It means "Don\'t talk to strangers."\nA stranger in this context is an object that we do not have direct access to but can obtain a reference to.')),(0,a.kt)("h3",{id:"613-refactoring-pattern-eliminate-getter-or-setter"},"6.1.3 Refactoring pattern: ELIMINATE GETTER OR SETTER"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Make the getter or setter private to get errors everywhere it is used."),(0,a.kt)("li",{parentName:"ol"},"Fix the errors with PUSH CODE INTO CLASSES."),(0,a.kt)("li",{parentName:"ol"},"The getter or setter is inlined as part of PUSH CODE INTO CLASSES. It is therefore\nunused, so delete it to avoid other people trying to use it."))),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Initial",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Website {\n  constructor(private url: string) { }\n  getUrl() { return this.url; }\n}\nclass User {\n  constructor(private username: string) { }\n  getUsername() { return this.username; }\n}\nclass BlogPost {\n  constructor(private author: User, private id: string) { }\n  getId() { return this.id; }\n  getAuthor() { return this.author; }// from User, should make it private\n}\nfunction generatePostLink(website: Website, post: BlogPost) {\n  let url = website.getUrl();\n  let user = post.getAuthor();\n  let name = user.getUsername();\n  let postId = post.getId();\n  return url + name + postId;\n}\n"))),(0,a.kt)(i.Z,{value:"Make the getter private to get errors everywhere it is used.",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Website {\n  constructor(private url: string) { }\n  getUrl() { return this.url; }\n}\nclass User {\n  constructor(private username: string) { }\n  getUsername() { return this.username; }\n}\nclass BlogPost {\n  constructor(private author: User, private id: string) { }\n  getId() { return this.id; }\n  private getAuthor() { return this.author; }\n}\nfunction generatePostLink(website: Website, post: BlogPost) {\n  let url = website.getUrl();\n  let user = post.getAuthor();// error\n  let name = user.getUsername();\n  let postId = post.getId();\n  return url + name + postId;\n}\n"))),(0,a.kt)(i.Z,{value:"Fix the errors with PUSH CODE INTO CLASSES.",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function generatePostLink(website: Website,\n  post: BlogPost) {\n  let url = website.getUrl();\n  let name = post.getAuthorName(); // push to code\n  let postId = post.getId();\n  return url + name + postId;\n}\nclass BlogPost {\n  // ...\n  getAuthorName() {\n    return this.author.getUsername();\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"delete it to avoid other people trying to use it.",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class BlogPost {\n  constructor(private author: User, private id: string) { }\n  getId() { return this.id; }\n  getAuthorName() {\n    return this.author.getUsername();\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"Final.",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Website {\n  constructor(private url: string) { }\n  generateLink(name: string, id: string) {\n    return this.url + name + id;\n  }\n}\nclass User {\n  constructor(private username: string) { }\n  generateLink(website: Website, id: string) {\n    return website.generateLink(\n      this.username,\n      id);\n  }\n}\nclass BlogPost {\n  constructor(private author: User,\n    private id: string) { }\n  generateLink(website: Website) {\n    return this.author.generateLink(\n      website,\n      this.id);\n  }\n}\nfunction generatePostLink(website: Website,\n  post: BlogPost) {\n  return post.generateLink(website);\n}\n")))),(0,a.kt)("h3",{id:"614-eliminating-the-final-getter"},"6.1.4 Eliminating the final getter"),(0,a.kt)("p",null,"Remove the final getter FallStrategy.getFalling."),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Initial",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class FallStrategy {\n  // ...\n  getFalling() {\n    return this.falling;\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"Make the getter private.",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Stone implements Tile {\n  // ...\n  moveHorizontal(dx: number) {\n    this.fallStrategy.getFalling()// error\n      .moveHorizontal(this, dx);\n  }\n}\nclass Box implements Tile {\n  // ...\n  moveHorizontal(dx: number) {\n    this.fallStrategy.getFalling()// error\n      .moveHorizontal(this, dx);\n  }\n}\nclass FallStrategy {\n  // ...\n  private getFalling() {//set as private\n    return this.falling;\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"PUSH CODE INTO CLASSES",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Stone implements Tile {\n  // ...\n  moveHorizontal(dx: number) {// push to code\n    this.fallStrategy\n      .moveHorizontal(this, dx);\n  }\n}\nclass Box implements Tile {\n  // ...\n  moveHorizontal(dx: number) {// push to code\n    this.fallStrategy\n      .moveHorizontal(this, dx);\n  }\n}\nclass FallStrategy {\n  // ...\n  moveHorizontal(tile: Tile, dx: number) {//\u5be6\u4f5cmoveHorizontal\n    this.falling\n      .moveHorizontal(tile, dx);\n  }\n  private getFalling() {//\u4e0d\u9700\u8981\u4e86\n    return this.falling;\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"Getter removed.",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Stone implements Tile {\n  // ...\n  moveHorizontal(dx: number) {\n    this.fallStrategy\n      .moveHorizontal(this, dx);\n  }\n}\nclass Box implements Tile {\n  // ...\n  moveHorizontal(dx: number) {\n    this.fallStrategy\n      .moveHorizontal(this, dx);\n  }\n}\nclass FallStrategy {\n  constructor(private falling: FallingState) { }\n  update(tile: Tile, x: number, y: number) {\n    this.falling = map[y + 1][x].isAir()// !\u51fa\u73feif-else\n      ? new Falling()\n      : new Resting();\n    this.drop(tile, x, y);\n  }\n  private drop(tile: Tile,\n    x: number, y: number) {\n    if (this.falling.isFalling()) {\n      map[y + 1][x] = tile;\n      map[y][x] = new Air();\n    }\n  }\n  moveHorizontal(tile: Tile, dx: number) {\n    this.falling.moveHorizontal(tile, dx);\n  }\n  //remove getFalling()\n}\n"))),(0,a.kt)(i.Z,{value:"NEVER USE if WITH else.",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Tile {\n  // ...\n  getBlockOnTopState(): FallingState;// return state\n}\nclass Air implements Tile {\n  // ...\n  getBlockOnTopState() {\n    return new Falling();// return state\n  }\n}\nclass Stone implements Tile {\n  // ...\n  getBlockOnTopState() {\n    return new Resting();// return state\n  }\n}\nclass FallStrategy {\n  // ...\n  update(tile: Tile, x: number, y: number) {\n    this.falling =\n      map[y + 1][x].getBlockOnTopState();// push to code\n    this.drop(tile, x, y);\n  }\n  private drop(tile: Tile,\n    x: number, y: number) {\n    if (this.falling.isFalling()) {\n      map[y + 1][x] = tile;\n      map[y][x] = new Air();\n    }\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"Push drop to FallingState and remove FallStrategy.drop.",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FallingState {\n  // ...\n  drop(\n    tile: Tile, x: number, y: number): void;// push to code\n}\nclass Falling {\n  // ...\n  drop(tile: Tile, x: number, y: number) {// push to code\n    map[y + 1][x] = tile;\n    map[y][x] = new Air();\n  }\n}\nclass Resting {\n  // ...\n  drop(tile: Tile, x: number, y: number) { }// push to code\n}\nclass FallStrategy {\n  // ...\n  update(tile: Tile, x: number, y: number) {\n    this.falling =\n      map[y + 1][x].getBlockOnTopState();\n    this.falling.drop(tile, x, y)\n  }\n  // delete drop()\n}\n")))),(0,a.kt)("h2",{id:"62-encapsulating-simple-data"},"6.2 Encapsulating simple data"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Our code should not have methods or variables with common prefixes or suffixes.")),(0,a.kt)("p",null,"\u7576\u591a\u500b\u5143\u7d20\u5177\u6709\u76f8\u540c\u7684\u524d\u5f8c\u7db4\u6642\uff0c\u5b83\u8868\u793a\u5143\u7d20\u4e4b\u9593\u7684\u4e00\u81f4\u6027\uff0c\u6240\u4ee5\u61c9\u8a72\u628a\u5b83\u5011\u5c01\u88dd\u6210\u4e00\u500b\u985e\uff0c\u597d\u8655\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b8c\u5168\u63a7\u5236\u5916\u90e8\u63a5\u53e3"),(0,a.kt)("li",{parentName:"ol"},"\u96b1\u85cf\u4e0d\u8b8a\u91cf\uff0c\u78ba\u4fdd\u53ea\u6709\u5728\u985e\u4e2d\u6703\u4fee\u6539\u9019\u4e9b\u4e0d\u8b8a\u91cf")),(0,a.kt)("p",null,"\u7b26\u5408\u55ae\u4e00\u8077\u8cac\u539f\u5247\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"single responsibility principle")),(0,a.kt)("p",{parentName:"admonition"},"Methods/Classes should do one thing.")),(0,a.kt)(d,{mdxType:"Row"},(0,a.kt)(g,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Bad"',title:'"Bad"'},"function accountDeposit(\n  to: string, amount: number) {\n  let accountId = database.find(to);\n  database.updateOne(\n    accountId,\n    { $inc: { balance: amount } });\n}\nfunction accountTransfer(amount: number,\n  from: string, to: string) {\n  accountDeposit(from, -amount);\n  accountDeposit(to, amount);\n}\n"))),(0,a.kt)(g,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Good"',title:'"Good"'},"class Account {\n  private deposit(\n    to: string, amount: number) {\n    let accountId = database.find(to);\n    database.updateOne(\n      accountId,\n      { $inc: { balance: amount } });\n  }\n  transfer(amount: number,\n    from: string, to: string) {\n    this.deposit(from, -amount);\n    this.deposit(to, amount);\n  }\n}\n")))),(0,a.kt)("h3",{id:"622-\u61c9\u7528never-have-common-affixes"},"6.2.2 \u61c9\u7528NEVER HAVE COMMON AFFIXES"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u6211\u5011\u7684\u7a0b\u5f0f\u78bc\u4e2d\u6709\u4ee5\u4e0b\u65b9\u6cd5\u548c\u8b8a\u91cf\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"playerx"),(0,a.kt)("li",{parentName:"ul"},"playery"),(0,a.kt)("li",{parentName:"ul"},"drawPlayer")),(0,a.kt)("p",null,"\u61c9\u8a72\u8981\u628a\u4e0a\u8ff0\u5185\u5bb9\u5c01\u88dd\u8d77\u4f86\u3002"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Initial",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Tile {\n  // ...\n  moveHorizontal(\n    dx: number): void;//\u6703\u7528\u5230playerx\u7684\u5730\u65b9\n  moveVertical(\n    dy: number): void;//\u6703\u7528\u5230playery\u7684\u5730\u65b9\n}\n/// ...\nfunction moveToTile(\n  newx: number, newy: number) {\n  map[playery][playerx] =\n    new Air();\n  map[newy][newx] = new PlayerTile();\n  playerx = newx;//\u6703\u7528\u5230playerx\u7684\u5730\u65b9\n  playery = newy;//\u6703\u7528\u5230playery\u7684\u5730\u65b9\n}\n/// ...\nlet playerx = 1;//\u5168\u5c40\u8b8a\u6578\nlet playery = 1;\n"))),(0,a.kt)(i.Z,{value:"\u4e00\u500b\u5168\u65b0\u7684\u985e",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Player {\n  private x = 1;\n  private y = 1;\n  getX() { return this.x; }\n  getY() { return this.y; }\n  setX(x: number) { this.x = x; }\n  setY(y: number) { this.y = y; }\n}\n"))),(0,a.kt)(i.Z,{value:"\u628a\u4e4b\u524d\u7528\u5230playerx/y\u7684\u5730\u65b9\u7528Player\u7684getter/setter\u66ff\u63db",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function moveToTile(\n  newx: number, newy: number) {\n  map[player.getY()][player.getX()] = // replace with getter\n    new Air();\n  map[newy][newx] = new PlayerTile();\n  player.setX(newx);// replace with setter\n  player.setY(newy);// replace with setter\n}\n/// ...\n"))),(0,a.kt)(i.Z,{value:"\u628aplayer\u4f5c\u7232\u53c3\u6578\u50b3\u9032\u65b9\u6cd5\u4e2d",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'interface Tile {\n  // ...\n  moveHorizontal(\n    player: Player, dx: number): void;\n  moveVertical(\n    player: Player, dy: number): void;\n}\n\nfunction drawPlayer(player: Player, // drawPlayer\u61c9\u8a72\u8981\u5728Player\u4e2d\n  g: CanvasRenderingContext2D) {\n  g.fillStyle = "#ff0000";\n  g.fillRect(\n    player.getX() * TILE_SIZE,// replace with getter\n    player.getY() * TILE_SIZE,// replace with getter\n    TILE_SIZE,\n    TILE_SIZE);\n}\n'))),(0,a.kt)(i.Z,{value:"\u628adraw player\u4e5f\u653ePlayer\u4e2d",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'function drawPlayer(player: Player,\n  g: CanvasRenderingContext2D) {\n  player.draw(g);\n}\nclass Player {\n  // ...\n  draw(g: CanvasRenderingContext2D) {\n    g.fillStyle = "#ff0000";\n    g.fillRect(\n      this.x * TILE_SIZE,\n      this.y * TILE_SIZE,\n      TILE_SIZE,\n      TILE_SIZE);\n  }\n}\n'))),(0,a.kt)(i.Z,{value:"Final",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'interface Tile {\n  // ...\n  moveHorizontal(\n    player: Player, dx: number): void;\n  moveVertical(\n    player: Player, dy: number): void;\n}\n/// ...\nfunction drawPlayer(player: Player,\n  g: CanvasRenderingContext2D) {\n  player.draw(g);\n}\n/// ...\nfunction moveToTile(\n  newx: number, newy: number) {\n  map[player.getY()][player.getX()] =\n    new Air();\n  map[newy][newx] = new PlayerTile();\n  player.setX(newx);\n  player.setY(newy);\n}\n/// ...\nclass Player {\n  private x = 1;\n  private y = 1;\n  getX() { return this.x; }\n  getY() { return this.y; }\n  setX(x: number) { this.x = x; }\n  setY(y: number) { this.y = y; }\n  draw(g: CanvasRenderingContext2D) {\n    g.fillStyle = "#ff0000";\n    g.fillRect(\n      this.x * TILE_SIZE,\n      this.y * TILE_SIZE,\n      TILE_SIZE,\n      TILE_SIZE);\n  }\n}\nlet player = new Player();\n')))),(0,a.kt)("p",null,"\u63a5\u4e0b\u4f86\u628agetter/setter\u62ff\u6389\u3002"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Before",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Player {\n    // ...\n    getX() { return this.x; }// make private\n    getY() { return this.y; }\n    setX(x: number) { this.x = x; }\n    setY(y: number) { this.y = y; }\n}\n"))),(0,a.kt)(i.Z,{value:"make private",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Player {\n    // ...\n    private getX() { return this.x; }\n}\nclass Right implements Input {\n    handle(player: Player) {\n        map[player.getY()][player.getX() + 1]//error\n            .moveHorizontal(player, 1);\n    }\n}\nclass Resting {\n    // ...\n    moveHorizontal(\n        player: Player, tile: Tile, dx: number) {\n        if (map[player.getY()]\n        [player.getX() + dx + dx].isAir()//error\n            && !map[player.getY() + 1]\n            [player.getX() + dx].isAir()) {//error\n            map[player.getY()]\n            [player.getX() + dx + dx] = tile;//error\n            moveToTile(player,\n                player.getX() + dx,//error\n                player.getY());\n        }\n    }\n}\n/// ...\nmoveToTile(player,\n    player.getX(), player.getY() + dy);//error\n/// ...\nfunction moveToTile(player: Player,\n    newx: number, newy: number) {\n    map[player.getY()][player.getX()] =//error\n        new Air();\n    map[newy][newx] = new PlayerTile();\n    player.setX(newx);\n    player.setY(newy);\n}\n/// ...\nclass Player {\n    // ...\n}\n"))),(0,a.kt)(i.Z,{value:"PUSH CODE INTO CLASSES",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Right implements Input {\n    handle(player: Player) {\n        player.moveHorizontal(1);\n    }\n}\nclass Resting {\n    // ...\n    moveHorizontal(\n        player: Player, tile: Tile, dx: number) {\n        player.pushHorizontal(tile, dx);\n    }\n}\n/// ...\nplayer.move(0, dy);\n/// ...\nfunction moveToTile(player: Player,\n    newx: number, newy: number) {\n    player.moveToTile(newx, newy);\n}\n/// ...\nclass Player {\n    // getter removed\n    // ...\n    moveHorizontal(dx: number) {\n        map[this.y][this.x + dx]\n            .moveHorizontal(this, dx);\n    }\n    move(dx: number, dy: number) {\n        this.moveToTile(this.x + dx, this.y + dy);\n    }\n    pushHorizontal(tile: Tile, dx: number) {\n        if (map[this.y]\n        [this.x + dx + dx].isAir()\n            && !map[this.y + 1]\n            [this.x + dx].isAir()) {\n            map[this.y][this.x + dx + dx] = tile;\n            this.moveToTile(this.x + dx, this.y);\n        }\n    }\n    moveToTile(newx: number, newy: number) {\n        map[this.y][this.x] = new Air();\n        map[newy][newx] = new PlayerTile();\n        this.x = newx;\n        this.y = newy;\n    }\n}\n")))),(0,a.kt)("h3",{id:"623-refactoring-pattern-encapsulate-data"},"6.2.3 Refactoring pattern: ENCAPSULATE DATA"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Create a class."),(0,a.kt)("li",{parentName:"ol"},"Move the variables into the new class, replacing let with private. Simplify the\nvariables\u2019 names; also make getters and setters for the variables."),(0,a.kt)("li",{parentName:"ol"},"Because the variables are no longer in the global scope, the compiler helps us\nfind all the references by giving errors. Fix these errors in the following five\nsteps:")),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Pick a good variable name for an instance of the new class."),(0,a.kt)("li",{parentName:"ol"},"Replace access with getters or setters on the pretend variable."),(0,a.kt)("li",{parentName:"ol"},"If we have errors in two or more different methods, add a parameter with the\nvariable name from earlier as the first parameter, and put the same variable\nas the first argument at call sites."),(0,a.kt)("li",{parentName:"ol"},"Repeat until only one method errors."),(0,a.kt)("li",{parentName:"ol"},"If we encapsulated variables, instantiate the new class at the point where the\nvariables were declared. Otherwise, put the instantiation in the method that\nerrors."))),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Initial",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let counter = 0;\nfunction incrementCounter() {\n  counter++;\n}\nfunction main() {\n  for (let i = 0; i < 20; i++) {\n    incrementCounter();\n    console.log(counter);\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"new class\u4e26\u8a2d\u4e0d\u8b8a\u91cf\u70baprivate",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Counter {\n  private counter = 0;\n  getCounter() { return this.counter; }\n  setCounter(c: number) {\n    this.counter = c;\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"\u7528getter/setter\u53d6\u4ee3\u8ce6\u503c",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function incrementCounter() {\n  counter.setCounter(\n    counter.getCounter() + 1);\n}\nfunction main() {\n  for (let i = 0; i < 20; i++) {\n    incrementCounter();\n    console.log(counter.getCounter());\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"\u628a\u65b0\u7684class\u4f5c\u7232\u53c3\u6578\u50b3\u5165",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function incrementCounter(counter: Counter) {\n  counter.setCounter(\n    counter.getCounter() + 1);\n}\nfunction main() {\n  for (let i = 0; i < 20; i++) {\n    incrementCounter(counter);\n    console.log(counter.getCounter());\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"\u5728\u539f\u6709\u7684\u5730\u65b9\u521d\u59cb\u5316\u65b0\u7684class",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Counter { ... }\nlet counter = new Counter();\n")))))}b.isMDXComponent=!0}}]);