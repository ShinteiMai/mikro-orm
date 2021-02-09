(window.webpackJsonp=window.webpackJsonp||[]).push([[486],{1256:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),b=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=b(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},l=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=b(t),l=n,d=m["".concat(o,".").concat(l)]||m[l]||u[l]||c;return t?a.a.createElement(d,i(i({ref:r},p),{},{components:t})):a.a.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=l;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},556:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return b}));var n=t(3),a=t(7),c=(t(0),t(1256)),o={id:"core.cascade",title:"Enumeration: Cascade",sidebar_label:"Cascade",hide_title:!0},i={unversionedId:"api/enums/core.cascade",id:"version-4.4/api/enums/core.cascade",isDocsHomePage:!1,title:"Enumeration: Cascade",description:"Enumeration: Cascade",source:"@site/versioned_docs/version-4.4/api/enums/core.cascade.md",slug:"/api/enums/core.cascade",permalink:"/docs/api/enums/core.cascade",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/enums/core.cascade.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612880207,sidebar_label:"Cascade",sidebar:"version-4.4/API",previous:{title:"Namespace: Knex",permalink:"/docs/api/modules/knex.knex-1"},next:{title:"Enumeration: ChangeSetType",permalink:"/docs/api/enums/core.changesettype"}},s=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"ALL",id:"all",children:[]},{value:"MERGE",id:"merge",children:[]},{value:"PERSIST",id:"persist",children:[]},{value:"REMOVE",id:"remove",children:[]}]}],p={toc:s};function b(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"enumeration-cascade"},"Enumeration: Cascade"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/core"}),"core"),".Cascade"),Object(c.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(c.b)("h3",{id:"all"},"ALL"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"ALL"),': = "all"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/enums.ts#L81"}),"packages/core/src/enums.ts:81")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"merge"},"MERGE"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"MERGE"),': = "merge"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/enums.ts#L79"}),"packages/core/src/enums.ts:79")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"persist"},"PERSIST"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"PERSIST"),': = "persist"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/enums.ts#L78"}),"packages/core/src/enums.ts:78")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"remove"},"REMOVE"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"REMOVE"),': = "remove"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/enums.ts#L80"}),"packages/core/src/enums.ts:80")))}b.isMDXComponent=!0}}]);