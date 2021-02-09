(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),m=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},i=function(e){var t=m(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),i=m(a),o=n,j=i["".concat(c,".").concat(o)]||i[o]||O[o]||b;return a?r.a.createElement(j,p(p({ref:t},d),{},{components:a})):r.a.createElement(j,p({ref:t},d))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=o;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var d=2;d<b;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},205:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),b=(a(0),a(1256)),c={id:"knex.knex.orderby",title:"Interface: OrderBy<TRecord, TResult>",sidebar_label:"OrderBy",hide_title:!0},p={unversionedId:"api/interfaces/knex.knex.orderby",id:"version-4.4/api/interfaces/knex.knex.orderby",isDocsHomePage:!1,title:"Interface: OrderBy<TRecord, TResult>",description:"Interface: OrderBy",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.orderby.md",slug:"/api/interfaces/knex.knex.orderby",permalink:"/docs/api/interfaces/knex.knex.orderby",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.orderby.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612880313,sidebar_label:"OrderBy",sidebar:"version-4.4/API",previous:{title:"Interface: OracleDbConnectionConfig",permalink:"/docs/api/interfaces/knex.knex.oracledbconnectionconfig"},next:{title:"Interface: PgConnectionConfig",permalink:"/docs/api/interfaces/knex.knex.pgconnectionconfig"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],d={toc:l};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-orderbytrecord-tresult"},"Interface: OrderBy<TRecord, TResult",">"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".OrderBy"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TRecord")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TResult")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"unknown"),"[]")))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"OrderBy"))),Object(b.b)("h2",{id:"callable"},"Callable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"OrderBy"),"(",Object(b.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("em",{parentName:"p"},"any"),">"," ","|"," keyof TRecord, ",Object(b.b)("inlineCode",{parentName:"p"},"order?"),": ",Object(b.b)("em",{parentName:"p"},"asc")," ","|"," ",Object(b.b)("em",{parentName:"p"},"desc"),"): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"columnName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<",Object(b.b)("em",{parentName:"td"},"any"),", ",Object(b.b)("em",{parentName:"td"},"any"),">"," ","|"," keyof TRecord")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"order?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"asc")," ","|"," ",Object(b.b)("em",{parentName:"td"},"desc"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1363"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"OrderBy"),"(",Object(b.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("em",{parentName:"p"},"any"),">",", ",Object(b.b)("inlineCode",{parentName:"p"},"order?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"columnName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<",Object(b.b)("em",{parentName:"td"},"any"),", ",Object(b.b)("em",{parentName:"td"},"any"),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"order?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1367"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"OrderBy"),"(",Object(b.b)("inlineCode",{parentName:"p"},"columnDefs"),": (keyof TRecord ","|"," ",Object(b.b)("em",{parentName:"p"},"Readonly"),"<{ ",Object(b.b)("inlineCode",{parentName:"p"},"column"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("em",{parentName:"p"},"any"),">"," ","|"," keyof TRecord ; ",Object(b.b)("inlineCode",{parentName:"p"},"order?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"asc")," ","|"," ",Object(b.b)("em",{parentName:"p"},"desc"),"  }",">",")[]): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"columnDefs")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(keyof TRecord ","|"," ",Object(b.b)("em",{parentName:"td"},"Readonly"),"<{ ",Object(b.b)("inlineCode",{parentName:"td"},"column"),": ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<",Object(b.b)("em",{parentName:"td"},"any"),", ",Object(b.b)("em",{parentName:"td"},"any"),">"," ","|"," keyof TRecord ; ",Object(b.b)("inlineCode",{parentName:"td"},"order?"),": ",Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"td"},"asc")," ","|"," ",Object(b.b)("em",{parentName:"td"},"desc"),"  }",">",")[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1368"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"OrderBy"),"(",Object(b.b)("inlineCode",{parentName:"p"},"columnDefs"),": (",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"Readonly"),"<{ ",Object(b.b)("inlineCode",{parentName:"p"},"column"),": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("em",{parentName:"p"},"any"),">"," ; ",Object(b.b)("inlineCode",{parentName:"p"},"order?"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string"),"  }",">",")[]): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"columnDefs")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(",Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"Readonly"),"<{ ",Object(b.b)("inlineCode",{parentName:"td"},"column"),": ",Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<",Object(b.b)("em",{parentName:"td"},"any"),", ",Object(b.b)("em",{parentName:"td"},"any"),">"," ; ",Object(b.b)("inlineCode",{parentName:"td"},"order?"),": ",Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"),"  }",">",")[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1376"))}m.isMDXComponent=!0}}]);