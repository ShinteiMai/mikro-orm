(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{1256:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(r),d=n,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||c;return r?a.a.createElement(m,i(i({ref:t},b),{},{components:r})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},229:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),c=(r(0),r(1256)),o={id:"core.node",title:"Interface: Node",sidebar_label:"Node",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/core.node",id:"api/interfaces/core.node",isDocsHomePage:!1,title:"Interface: Node",description:"Interface: Node",source:"@site/docs/api/interfaces/core.node.md",slug:"/api/interfaces/core.node",permalink:"/docs/next/api/interfaces/core.node",editUrl:null,version:"current",sidebar_label:"Node",sidebar:"API",previous:{title:"Interface: NamingStrategy",permalink:"/docs/next/api/interfaces/core.namingstrategy"},next:{title:"Interface: OneToOneOptions<T, O>",permalink:"/docs/next/api/interfaces/core.onetooneoptions"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"dependencies",id:"dependencies",children:[]},{value:"hash",id:"hash",children:[]},{value:"state",id:"state",children:[]}]}],b={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-node"},"Interface: Node"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".Node"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Node"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"dependencies"},"dependencies"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"dependencies"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#dictionary"}),Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.edge"}),Object(c.b)("em",{parentName:"a"},"Edge")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L13"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:13")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"hash"},"hash"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"hash"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L11"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:11")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"state"},"state"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"state"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/enums/core.nodestate"}),Object(c.b)("em",{parentName:"a"},"NodeState"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L12"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:12")))}l.isMDXComponent=!0}}]);