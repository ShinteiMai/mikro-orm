(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{123:function(e,o,t){"use strict";t.r(o),t.d(o,"frontMatter",(function(){return i})),t.d(o,"metadata",(function(){return c})),t.d(o,"toc",(function(){return l})),t.d(o,"default",(function(){return p}));var n=t(3),r=t(7),a=(t(0),t(1256)),i={title:"Propagation"},c={unversionedId:"propagation",id:"version-4.1/propagation",isDocsHomePage:!1,title:"Propagation",description:"By default MikroORM will propagate all changes made to one side of bi-directional relations",source:"@site/versioned_docs/version-4.1/propagation.md",slug:"/propagation",permalink:"/docs/4.1/propagation",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.1/propagation.md",version:"4.1",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612880207,sidebar:"version-4.1/docs",previous:{title:"Smart Query Conditions",permalink:"/docs/4.1/query-conditions"},next:{title:"Serializing",permalink:"/docs/4.1/serializing"}},l=[{value:"Propagation of Collection&#39;s add() and remove() operations",id:"propagation-of-collections-add-and-remove-operations",children:[]}],s={toc:l};function p(e){var o=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:o,mdxType:"MDXLayout"}),Object(a.b)("p",null,"By default MikroORM will propagate all changes made to one side of bi-directional relations\nto the other side, keeping them in sync. This works for all relations, including M:1 and 1:1.\nAs part of the discovery process, all M:1 and 1:1 properties are re-defined as getter/setter."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const author = new Author(...);\nconst book = new Book(...);\nbook.author = author;\nconsole.log(author.books.contains(book)); // true\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You can disable this behaviour via ",Object(a.b)("inlineCode",{parentName:"p"},"propagateToOneOwner")," option.")),Object(a.b)("h2",{id:"propagation-of-collections-add-and-remove-operations"},"Propagation of Collection's add() and remove() operations"),Object(a.b)("p",null,"When you use one of ",Object(a.b)("inlineCode",{parentName:"p"},"Collection.add()")," method, the item is added to given collection,\nand this action is also propagated to its counterpart. "),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"// one to many\nconst author = new Author(...);\nconst book = new Book(...);\n\nauthor.books.add(book);\nconsole.log(book.author); // author will be set thanks to the propagation\n")),Object(a.b)("p",null,"For M:N this works in both ways, either from owning side, or from inverse side. "),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"// many to many works both from owning side and from inverse side\nconst book = new Book(...);\nconst tag = new BookTag(...);\n\nbook.tags.add(tag);\nconsole.log(tag.books.contains(book)); // true\n\ntag.books.add(book);\nconsole.log(book.tags.contains(tag)); // true\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Collections on both sides have to be initialized, otherwise propagation won't work.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Although this propagation works also for M:N inverse side, you should always use owning\nside to manipulate the collection.")),Object(a.b)("p",null,"Same applies for ",Object(a.b)("inlineCode",{parentName:"p"},"Collection.remove()"),"."))}p.isMDXComponent=!0},1256:function(e,o,t){"use strict";t.d(o,"a",(function(){return u})),t.d(o,"b",(function(){return m}));var n=t(0),r=t.n(n);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var o=r.a.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):c(c({},o),e)),t},u=function(e){var o=p(e.components);return r.a.createElement(s.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return r.a.createElement(r.a.Fragment,{},o)}},b=r.a.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return t?r.a.createElement(m,c(c({ref:o},s),{},{components:t})):r.a.createElement(m,c({ref:o},s))}));function m(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var l in o)hasOwnProperty.call(o,l)&&(c[l]=o[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);