"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[310],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return k}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=c(t),k=r,d=s["".concat(i,".").concat(k)]||s[k]||p[k]||l;return t?a.createElement(d,o(o({ref:n},m),{},{components:t})):a.createElement(d,o({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=s;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6293:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),o=["components"],u={title:"Ch6: \u51fd\u6578\u5f0f\u7a0b\u5f0f\u8a2d\u8a08",sidebar_label:"Ch6: \u51fd\u6578\u5f0f\u7a0b\u5f0f\u8a2d\u8a08",sidebar_position:6},i=void 0,c={unversionedId:"sg/clean-architecture/ch6",id:"sg/clean-architecture/ch6",title:"Ch6: \u51fd\u6578\u5f0f\u7a0b\u5f0f\u8a2d\u8a08",description:"\u4ec0\u9ebc\u662f\u51fd\u6578\u5f0f\u7a0b\u5f0f\u8a2d\u8a08\uff1f",source:"@site/docs/sg/clean-architecture/ch6.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch6",permalink:"/docs/sg/clean-architecture/ch6",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch6.md",tags:[],version:"current",lastUpdatedBy:"becory",lastUpdatedAt:1664909711,formattedLastUpdatedAt:"10/4/2022",sidebarPosition:6,frontMatter:{title:"Ch6: \u51fd\u6578\u5f0f\u7a0b\u5f0f\u8a2d\u8a08",sidebar_label:"Ch6: \u51fd\u6578\u5f0f\u7a0b\u5f0f\u8a2d\u8a08",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Ch5: \u7269\u4ef6\u5c0e\u5411\u7a0b\u5f0f\u8a2d\u8a08",permalink:"/docs/sg/clean-architecture/ch5"},next:{title:"Ch7: SRP - \u55ae\u4e00\u8077\u8cac\u539f\u5247",permalink:"/docs/sg/clean-architecture/ch7"}},m={},p=[{value:"\u4ec0\u9ebc\u662f\u51fd\u6578\u5f0f\u7a0b\u5f0f\u8a2d\u8a08\uff1f",id:"\u4ec0\u9ebc\u662f\u51fd\u6578\u5f0f\u7a0b\u5f0f\u8a2d\u8a08",level:2},{value:"\u5b9a\u7fa9\uff1a",id:"\u5b9a\u7fa9",level:2},{value:"\u51fd\u6578\u5f0f\u7a0b\u5f0f\u8a2d\u8a08",id:"\u51fd\u6578\u5f0f\u7a0b\u5f0f\u8a2d\u8a08",level:2},{value:"\u4e0d\u53ef\u8b8a\u8207\u67b6\u69cb\u7684\u95dc\u4fc2\uff1f",id:"\u4e0d\u53ef\u8b8a\u8207\u67b6\u69cb\u7684\u95dc\u4fc2",level:2},{value:"\u6298\u8877\u8fa6\u6cd5\uff1a\u5c07\u53ef\u8b8a\u6027\u5206\u96e2",id:"\u6298\u8877\u8fa6\u6cd5\u5c07\u53ef\u8b8a\u6027\u5206\u96e2",level:2},{value:"\u6298\u8877\u8fa6\u6cd5\uff1a\u4e8b\u4ef6\u4f86\u6e90",id:"\u6298\u8877\u8fa6\u6cd5\u4e8b\u4ef6\u4f86\u6e90",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],s={toc:p};function k(e){var n=e.components,u=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,u,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ec0\u9ebc\u662f\u51fd\u6578\u5f0f\u7a0b\u5f0f\u8a2d\u8a08"},(0,l.kt)("a",{parentName:"h2",href:"https://zh.wikipedia.org/zh-tw/%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B"},"\u4ec0\u9ebc\u662f\u51fd\u6578\u5f0f\u7a0b\u5f0f\u8a2d\u8a08\uff1f")),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"functional programming \u7684 function \u6bd4\u8f03\u50cf\u662f\u6578\u5b78\u88e1\u7684 function: f(x)"),(0,l.kt)("li",{parentName:"ul"},"\u5927\u65b9\u5411\uff1a \u5728\u7a0b\u5f0f\u8b8a\u6578\u7684\u8ce6\u503c\u4e0a\u52a0\u5165\u898f\u7bc4"))),(0,l.kt)("h2",{id:"\u5b9a\u7fa9"},"\u5b9a\u7fa9\uff1a"),(0,l.kt)("p",null,"\u53c3\u8003\u81f3\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/%E4%B8%80%E5%80%8B%E5%B0%8F%E5%B0%8F%E5%B7%A5%E7%A8%8B%E5%B8%AB%E7%9A%84%E9%9A%A8%E6%89%8B%E7%AD%86%E8%A8%98/javascript-functional-programming-%E4%B8%80%E6%96%87%E5%88%B0%E5%BA%95%E5%85%A8%E7%B4%80%E9%8C%84-95ff19d9892"},"less-lee-medium")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Function \u5fc5\u9808\u4f5c\u70ba\u4e00\u7d1a\u516c\u6c11\u3002\u610f\u5373\uff0c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u50cf\u4e00\u822c\u8b8a\u6578\u4e00\u822c\u88ab\u7576\u4f5c\u53c3\u6578\u50b3\u5165"),(0,l.kt)("li",{parentName:"ul"},"\u88ab\u7576\u4f5c\u7d50\u679c\u8f38\u51fa"),(0,l.kt)("li",{parentName:"ul"},"\u88ab\u4efb\u610f assign \u7d66\u5176\u4ed6\u8b8a\u6578\u3001\u88ab\u4efb\u610f\u9032\u884c\u904b\u7b97\u3002")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u88ab\u7576\u4f5c\u53c3\u6578\u50b3\u5165\nfunction sayHi() {\n    console.log('hello')\n}\n\nsetTimeout(sayHi, 1000)\n\n// after 1 second...\n// [LOG]: \"hello\"\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u88ab\u7576\u4f5c\u7d50\u679c\u8f38\u51fa\nfunction sum(x: number, y: number) {\n    return x + y\n}\n\nfunction main() {\n    const tea = 45\n    const milk = 100\n\n    const bill = sum(tea, milk)\n    // \u4e0d\u6703\u6539\u8b8a\u539f\u672c\u8b8a\u6578\u503c\n    console.log('$' + tea)\n    console.log('$' + milk)\n    console.log('$' + bill)\n}\n\nmain()\n\n// [LOG]: \"tea: $45\"\n// [LOG]: \"milk: $100\"\n// [LOG]: \"sum: $145\"\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u88ab\u4efb\u610f assign \u7d66\u5176\u4ed6\u8b8a\u6578\u3001\u88ab\u4efb\u610f\u9032\u884c\u904b\u7b97\u3002\n\nconst sum = function (x: number, y: number) {\n    return x + y\n}\n\nfunction main() {\n    const tea = 45\n    const milk = 100\n\n    const getSum = sum\n\n    const bill = getSum(tea, milk) + sum(tea, milk)\n\n    console.log('tea: $' + tea)\n    console.log('milk: $' + milk)\n    console.log('bill: $' + bill)\n}\n\nmain()\n\n// [LOG]: \"tea: $45\"\n// [LOG]: \"milk: $100\"\n// [LOG]: \"bill: $290\"\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Function \u4e2d\u53ea\u80fd\u6709 Expression \u800c\u975e\u6307\u4ee4( instructions )\u3002",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://www.casper.tw/development/2020/09/17/js-expression/"},"\u8a73\u7d30\u770b\u53c3\u8003")),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Expression \u8868\u9054\u5f0f\u3001\u8868\u793a\u5f0f\u3001\u904b\u7b97\u5f0f\uff0c",(0,l.kt)("strong",{parentName:"li"},"\u6703\u56de\u50b3\u7d50\u679c")),(0,l.kt)("li",{parentName:"ul"},"instructions \u9673\u8ff0\u5f0f\uff0c\u57f7\u884c\u4e00\u4e9b\u7a0b\u5f0f\uff0c\u4e0d\u6703\u56de\u50b3\u7d50\u679c"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u56de\u50b3 number\nfunction sum(x: number, y: number) {\n    return x + y\n}\n\n// \u56de\u50b3 void\nfunction hello() {\n    console.log('hello')\n    // return void \u88ab\u5ffd\u7565\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Function \u5fc5\u9808\u662f \u300cPure\u300d\u3001\u6c92\u6709 Side Effect\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pure function: y = f(x)\uff0c\u7121\u8ad6\u57f7\u884c\u591a\u5c11\u6b21\u3001\u5916\u90e8\u5982\u4f55\u6539\u8b8a\uff0c\n\u6c38\u9060\u5c0d\u61c9\uff0c\u53ea\u8981 input \u662f x\uff0coutput \u4e00\u5b9a\u662f y\u3002"),(0,l.kt)("li",{parentName:"ul"},"side effect: \u5c0d\u5916\u90e8\u9020\u6210\u5f71\u97ff")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// pure function\n// \u7121\u8ad6\u4f55\u6642\u4f55\u5730\uff0cOutput \u90fd\u53ea\u8207 Input \u6709\u95dc\u4fc2\n\nfunction addOne(x: number) {\n    return x + 1\n}\n\nconst y = addOne(2)\nconsole.log(y)\n\n// [LOG]: 3\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// side effect function\nlet count: number = 10\n\nfunction sideEffectFunc() {\n    // do something...\n\n    count++\n}\n\nsideEffectFunc()\nconsole.log('count = ' + count)\n\n// [LOG]: \"count = 11\"\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Function \u300c\u4e0d\u53ef\u6539\u8b8a Input \u7684\u8cc7\u6599\u300d\u3001\u300c\u4e0d\u53ef \u6539\u8b8a\u72c0\u614b\u300d")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u4e0d\u7b26\u5408functional programming\u7684\u539f\u5247\uff1a\n// \u53ef\u4ee5\u770b\u5230 numbers \u9019\u500b\u539f\u59cb\u7684array\u88ab\u6539\u8b8a\u4e86\n\nconst numbers = [1, 2, 3, 4, 5]\nnumbers.splice(0, 1)\n\nconsole.log('numbers: ' + numbers)\n\n// [LOG]: \"numbers: 2,3,4,5\"\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u539f\u672c\u7684numbers\u4e0d\u6703\u88ab\u66f4\u6539\uff0c\u800c\u662f\u7522\u751f\u65b0\u7684array\nconst numbers = [1, 2, 3, 4, 5]\nconst newNumbers = numbers.slice(1, numbers.length)\n\nconsole.log('numbers: ' + numbers)\nconsole.log('newNumbers: ' + newNumbers)\n\n// [LOG]: \"numbers: 1,2,3,4,5\"\n// [LOG]: \"newNumbers: 2,3,4,5\"\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"\u9084\u6709\u4e00\u500b\u4f8b\u5b50\u5728\u524d\u7aef\u7684 react + redux \u4e2d\uff0c\u820a\u6709\u7684\u72c0\u614b\u6c38\u9060\u4e0d\u6703\u88ab\u6539\u8b8a\uff0c\u800c\u662f\u7522\u751f\u65b0\u7684\u72c0\u614b")," > ",(0,l.kt)("img",{alt:"redux-flow",src:t(5353).Z,width:"1440",height:"1080"}))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Function \u53ef\u4ee5\u4efb\u610f\u7d44\u5408\u5f97\u5230\u65b0\u7684 Function\uff0c\u4e14\u4f9d\u7136\u6eff\u8db3\u4ee5\u4e0a\u9019\u4e9b\u5b88\u5247"),(0,l.kt)("li",{parentName:"ul"},"Functional Programming \u8a2d\u8a08\u54f2\u5b78\u4e4b\u4e00\u4fbf\u662f\uff1a\u300c\u4ee5 Function \u70ba\u6700\u5c0f\u55ae\u4f4d\u89e3\u6c7a\u554f\u984c\uff0c\u4efb\u4f55 Function \u90fd\u53ef\u4ee5\u4efb\u610f\u7d44\u5408\u6210\u70ba\u65b0\u7684 Function\u300d\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function add(x: number, y: number) {\n    return x + y\n}\n\nfunction square(x: number) {\n    return x * x\n}\n\nfunction compose(f: any, g: any) {\n    return function (x: number, y: number) {\n        return f(g(x, y))\n    }\n}\n\n// \u5148\u76f8\u52a0\uff0c\u5f8c\u5e73\u65b9\nconst addAndSquare = compose(square, add)\n\nconst result = addAndSquare(2, 2)\n\nconsole.log(result)\n\n// [LOG]: 16\n")),(0,l.kt)("h2",{id:"\u51fd\u6578\u5f0f\u7a0b\u5f0f\u8a2d\u8a08"},"\u51fd\u6578\u5f0f\u7a0b\u5f0f\u8a2d\u8a08"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"\u6700\u4e3b\u8981\u5c31\u662f\u8981\u638c\u63e1\u7a0b\u5f0f\u4e2d\u7684",(0,l.kt)("strong",{parentName:"em"},"\u8b8a\u6578\u4e0d\u53ef\u8b8a\u6027")))),(0,l.kt)("h2",{id:"\u4e0d\u53ef\u8b8a\u8207\u67b6\u69cb\u7684\u95dc\u4fc2"},"\u4e0d\u53ef\u8b8a\u8207\u67b6\u69cb\u7684\u95dc\u4fc2\uff1f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"\u70ba\u4ec0\u9ebc\u8b8a\u6578\u53ef\u4e0d\u53ef\u8b8a\u9019\u4ef6\u4e8b\uff0c\u5c0d\u67b6\u69cb\u4f86\u8aaa\u6703\u89ba\u5f97\u91cd\u8981\uff1f"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u67b6\u69cb\u554f\u984c\u90fd\u4f86\u81ea\u65bc\u8b8a\u6578\u53ef\u8b8a\u6027\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/zh-tw/%E7%AB%B6%E7%88%AD%E5%8D%B1%E5%AE%B3"},"\u7af6\u722d\u689d\u4ef6(race condition)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.nodejsdesignpatterns.com/blog/node-js-race-conditions/"},"example")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/%E6%AD%BB%E9%94%81"},"deadlock \u689d\u4ef6(\u6b7b\u7d50)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://webreflection.blogspot.com/2007/06/simplest-javascript-deadlock.html"},"example")))),(0,l.kt)("li",{parentName:"ul"},"\u5e73\u884c\u66f4\u65b0\u554f\u984c(concurrent update problem)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9280\u884c\u66f4\u65b0\u554f\u984c"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"\u66f8\uff1a\u5982\u679c\u6c92\u6709\u8b8a\u6578\u6703\u88ab\u66f4\u65b0\uff0c\u5c31\u9019\u4e9b\u554f\u984c\u5c31\u4e0d\u6703\u767c\u751f"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u8b8a\u6578\u5168\u90fd\u4e0d\u53ef\u8b8a\uff0c\u6703\u9700\u8981\u5f88\u591a\u5132\u5b58\u7a7a\u9593\u8ddf\u8655\u7406\u901f\u5ea6\uff01\u5728\u73fe\u5be6\u4e16\u754c\u6bd4\u8f03\u4e0d\u53ef\u884c\u3002\u9019\u6642\u5019\u5c31\u8981\u505a\u4e00\u4e9b\u6298\u8877\u3002"))),(0,l.kt)("h2",{id:"\u6298\u8877\u8fa6\u6cd5\u5c07\u53ef\u8b8a\u6027\u5206\u96e2"},"\u6298\u8877\u8fa6\u6cd5\uff1a\u5c07\u53ef\u8b8a\u6027\u5206\u96e2"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u76e1\u91cf\u8b93\u66f4\u591a\u8655\u7406\u653e\u5230\u4e0d\u53ef\u8b8a\u7684\u5143\u4ef6\u4e2d\uff0c\u8207\u53ef\u8b8a\u7684\u8b8a\u6578\u5206\u96e2\u958b\u4f86\u8b8a\n",(0,l.kt)("img",{alt:"sa",src:t(1985).Z,width:"1400",height:"1071"}))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Transactional Memory\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4fdd\u8b77\u53ef\u8b8a\u7684\u8b8a\u6578\u907f\u514d\u5e73\u884c\u66f4\u65b0\u8207\u7af6\u722d\u689d\u4ef6\u7684\u5f71\u97ff\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u65bc\u4ea4\u6613\u6216\u91cd\u8a66\u7684\u65b9\u6848\u4f86\u4fdd\u8b77\u9019\u4e9b\u8b8a\u6578(\u770b\u4e0d\u61c2)")))),(0,l.kt)("h2",{id:"\u6298\u8877\u8fa6\u6cd5\u4e8b\u4ef6\u4f86\u6e90"},"\u6298\u8877\u8fa6\u6cd5\uff1a\u4e8b\u4ef6\u4f86\u6e90"),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u662f\u4e00\u7a2e\u7b56\u7565\uff0c\u5132\u5b58\u7684\u53ea\u6709\u4ea4\u6613\uff0c\u800c\u4e0d\u662f\u72c0\u614b\u3002\u7576\u9700\u8981\u53d6\u5f97\u72c0\u614b\u7684\u6642\u5019\uff0c\n\u53ea\u9700\u8981\u7c21\u55ae\u5730\u5f9e\u6e90\u982d\u958b\u59cb\u61c9\u7528\u6240\u6709\u4ea4\u6613"),(0,l.kt)("li",{parentName:"ul"},"\u6b64\u6a5f\u5236\u4e0d\u5fc5\u5c0b\u6c42\u6c38\u4e45\u6709\u6548\uff0c\u800c\u662f\u5728\u8db3\u5920\u7684\u5132\u5b58\u7a7a\u9593\u8207\u6548\u80fd\u8db3\u4ee5\u8b93\u61c9\u7528\u7a0b\u5f0f\u5728\u751f\u547d\u9031\u671f\u5167\u5de5\u4f5c"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9280\u884c\u9918\u984d\u7684\u61c9\u7528\u7a0b\u5f0f\u4f8b\u5b50\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u539f\u672c\uff1a \u7576\u4ea4\u6613\u6216\u63d0\u6b3e\u6642\uff0c\u6703\u6539\u8b8a\u539f\u672c\u7684\u9918\u984d\u8b8a\u6578"),(0,l.kt)("li",{parentName:"ul"},"\u6539\u8b8a\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u662f\u5132\u5b58\u9918\u984d\uff0c\u800c\u662f\u5132\u5b58\u6bcf\u4e00\u7b46\u4ea4\u6613(\u985e\u4f3c log)\uff0c\u800c\u5728\u9700\u8981\u986f\u793a\u9918\u984d\u7684\u6642\u5019\uff0c\u5c07\u6240\u6709\u4ea4\u6613\u52a0\u7e3d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u91cf\u592a\u5927\u6642\uff0c\u53ef\u4ee5\u5728\u5348\u591c\u6642\u9032\u884c\u8a08\u7b97\u4e26\u4e14\u4fdd\u5b58\u72c0\u614b\uff0c\u7576\u9700\u8981\u8cc7\u8a0a\u6642\uff0c\u53ea\u9700\u8981\u8a08\u7b97\u4f86\u81ea\u5348\u591c\u4ee5\u4f86\u7684\u4ea4\u6613"))),(0,l.kt)("li",{parentName:"ul"},"\u6c92\u6709\u8cc7\u6599\u6703\u88ab\u66f4\u65b0\u6216\u522a\u9664 (CRUD => CR)\uff0c\u6240\u4ee5\u4e0d\u6703\u6709\u5e73\u884c\u5316\u554f\u984c\u3002")))),(0,l.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u51fd\u6578\u5f0f\u7a0b\u5f0f\u8a2d\u8a08\u5c31\u662f\u5728\u63a7\u5236\u8b8a\u6578\u4e0d\u53ef\u8b8a\u6027\uff0c\u4f46\u662f\u5be6\u52d9\u4e0a\u5f88\u96e3\u5b8c\u5168\u505a\u5230\uff0c\u6240\u4ee5\u6709\u4e00\u4e9b\u6298\u8877\u8fa6\u6cd5\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e09\u7a2e\u7bc4\u5f0f\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7d50\u69cb\u5316\u7a0b\u5f0f\u8a2d\u8a08\uff1a \u5728\u76f4\u63a5\u63a7\u5236\u8f49\u79fb\u4e0a\u52a0\u4e0a\u898f\u7bc4"),(0,l.kt)("li",{parentName:"ul"},"\u7269\u4ef6\u5c0e\u5411\u7a0b\u5f0f\u8a2d\u8a08\uff1a \u5728\u9593\u63a5\u63a7\u5236\u8f49\u79fb\u4e0a\u52a0\u4e0a\u898f\u7bc4"),(0,l.kt)("li",{parentName:"ul"},"\u51fd\u6578\u5f0f\u7a0b\u5f0f\u8a2d\u8a08\uff1a \u5728\u8b8a\u6578\u8ce6\u503c\u4e0a\u52a0\u4e0a\u898f\u7bc4"))),(0,l.kt)("li",{parentName:"ul"},"\u4e09\u7a2e\u7bc4\u5f0f\u90fd\u662f\u5728\u9650\u5236\u6211\u5011\u5beb\u7a0b\u5f0f\u7684\u65b9\u5f0f\uff0c\u54ea\u4e9b\u662f",(0,l.kt)("strong",{parentName:"li"},"\u4e0d\u8a72\u505a\u7684"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8edf\u9ad4\u5c31\u662f\uff1a",(0,l.kt)("em",{parentName:"li"},(0,l.kt)("strong",{parentName:"em"},"\u5faa\u5e8f")),"\u3001",(0,l.kt)("em",{parentName:"li"},(0,l.kt)("strong",{parentName:"em"},"\u9078\u64c7")),"\u3001",(0,l.kt)("em",{parentName:"li"},(0,l.kt)("strong",{parentName:"em"},"\u8fed\u4ee3 (iteration)"))," \u548c ",(0,l.kt)("em",{parentName:"li"},(0,l.kt)("strong",{parentName:"em"},"\u9593\u63a5(indirection)"))," \u6240\u7d44\u6210\u7684\u5167\u5bb9\u3002\u6c92\u6709\u66f4\u591a\u4e5f\u6c92\u6709\u66f4\u5c11\u3002")))}k.isMDXComponent=!0},5353:function(e,n,t){n.Z=t.p+"assets/images/redux-49fa8c3968371d9ef6f2a1486bd40a26.gif"},1985:function(e,n,t){n.Z=t.p+"assets/images/separate-eeeea6557afddf2166f228383b0e06ae.png"}}]);