(window.webpackJsonp=window.webpackJsonp||[]).push([[961],{1034:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(8),o=(t(0),t(1110)),a={id:"knex.knex-1.sqlite3connectionconfig",title:"Interface: Sqlite3ConnectionConfig",sidebar_label:"Sqlite3ConnectionConfig",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/knex.knex-1.sqlite3connectionconfig",id:"version-4.5/api/interfaces/knex.knex-1.sqlite3connectionconfig",isDocsHomePage:!1,title:"Interface: Sqlite3ConnectionConfig",description:"Interface: Sqlite3ConnectionConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.sqlite3connectionconfig.md",slug:"/api/interfaces/knex.knex-1.sqlite3connectionconfig",permalink:"/docs/api/interfaces/knex.knex-1.sqlite3connectionconfig",editUrl:null,version:"4.5",lastUpdatedBy:"francisco-sanchez-molina",lastUpdatedAt:1617452793,formattedLastUpdatedAt:"4/3/2021",sidebar_label:"Sqlite3ConnectionConfig",sidebar:"version-4.5/API",previous:{title:"Interface: SqlNative",permalink:"/docs/api/interfaces/knex.knex-1.sqlnative"},next:{title:"Interface: StringTagSupport",permalink:"/docs/api/interfaces/knex.knex-1.stringtagsupport"}},l=[{value:"Properties",id:"properties",children:[{value:"debug",id:"debug",children:[]},{value:"filename",id:"filename",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],p={toc:l};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-sqlite3connectionconfig"},"Interface: Sqlite3ConnectionConfig"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".Sqlite3ConnectionConfig"),Object(o.b)("p",null,"Used with SQLite3 adapter"),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"debug"},"debug"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"debug"),": ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2065"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"filename"},"filename"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"filename"),": ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2064"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"expirationchecker"},"expirationChecker"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional"),Object(o.b)("strong",{parentName:"p"},"expirationChecker"),"(): ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2066"))}s.isMDXComponent=!0},1110:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),s=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),u=r,f=b["".concat(a,".").concat(u)]||b[u]||d[u]||o;return t?i.a.createElement(f,c(c({ref:n},p),{},{components:t})):i.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);