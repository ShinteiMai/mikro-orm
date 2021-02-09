(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{1256:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),l=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||c;return r?a.a.createElement(f,b(b({ref:t},o),{},{components:r})):a.a.createElement(f,b({ref:t},o))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=m;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<c;o++)i[o]=r[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},163:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),c=(r(0),r(1256)),i={id:"knex.tabledifference",title:"Interface: TableDifference",sidebar_label:"TableDifference",hide_title:!0},b={unversionedId:"api/interfaces/knex.tabledifference",id:"version-4.4/api/interfaces/knex.tabledifference",isDocsHomePage:!1,title:"Interface: TableDifference",description:"Interface: TableDifference",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.tabledifference.md",slug:"/api/interfaces/knex.tabledifference",permalink:"/docs/api/interfaces/knex.tabledifference",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.tabledifference.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612880313,sidebar_label:"TableDifference",sidebar:"version-4.4/API",previous:{title:"Interface: Table",permalink:"/docs/api/interfaces/knex.table"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"addIndex",id:"addindex",children:[]},{value:"create",id:"create",children:[]},{value:"dropIndex",id:"dropindex",children:[]},{value:"remove",id:"remove",children:[]},{value:"rename",id:"rename",children:[]},{value:"update",id:"update",children:[]}]}],o={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-tabledifference"},"Interface: TableDifference"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".TableDifference"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"TableDifference"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"addindex"},"addIndex"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"addIndex"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.indexdef"}),Object(c.b)("em",{parentName:"a"},"IndexDef")),"[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L72"}),"packages/knex/src/typings.ts:72")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"create"},"create"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"create"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/core.entityproperty"}),Object(c.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(c.b)("em",{parentName:"p"},"any"),">","[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L68"}),"packages/knex/src/typings.ts:68")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"dropindex"},"dropIndex"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"dropIndex"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.indexdef"}),Object(c.b)("em",{parentName:"a"},"IndexDef")),"[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L73"}),"packages/knex/src/typings.ts:73")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"remove"},"remove"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"remove"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.column"}),Object(c.b)("em",{parentName:"a"},"Column")),"[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L71"}),"packages/knex/src/typings.ts:71")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"rename"},"rename"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"rename"),": { ",Object(c.b)("inlineCode",{parentName:"p"},"from"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.column"}),Object(c.b)("em",{parentName:"a"},"Column"))," ; ",Object(c.b)("inlineCode",{parentName:"p"},"to"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/core.entityproperty"}),Object(c.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(c.b)("em",{parentName:"p"},"any"),">","  }[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L70"}),"packages/knex/src/typings.ts:70")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"update"},"update"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"update"),": { ",Object(c.b)("inlineCode",{parentName:"p"},"column"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.column"}),Object(c.b)("em",{parentName:"a"},"Column"))," ; ",Object(c.b)("inlineCode",{parentName:"p"},"diff"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.issame"}),Object(c.b)("em",{parentName:"a"},"IsSame"))," ; ",Object(c.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/core.entityproperty"}),Object(c.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(c.b)("em",{parentName:"p"},"any"),">","  }[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L69"}),"packages/knex/src/typings.ts:69")))}l.isMDXComponent=!0}}]);