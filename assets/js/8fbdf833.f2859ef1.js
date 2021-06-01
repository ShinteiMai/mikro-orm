(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67415],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),c=p(n),k=a,u=c["".concat(l,".").concat(k)]||c[k]||d[k]||i;return n?r.createElement(u,o(o({ref:e},m),{},{components:n})):r.createElement(u,o({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52026:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),o={id:"migrations.migration",title:"Class: Migration",sidebar_label:"Migration",custom_edit_url:null},s={unversionedId:"api/classes/migrations.migration",id:"api/classes/migrations.migration",isDocsHomePage:!1,title:"Class: Migration",description:"migrations.Migration",source:"@site/docs/api/classes/migrations.migration.md",sourceDirName:"api/classes",slug:"/api/classes/migrations.migration",permalink:"/docs/next/api/classes/migrations.migration",editUrl:null,version:"current",sidebar_label:"Migration",frontMatter:{id:"migrations.migration",title:"Class: Migration",sidebar_label:"Migration",custom_edit_url:null},sidebar:"API",previous:{title:"Class: SchemaHelper",permalink:"/docs/next/api/classes/knex.schemahelper"},next:{title:"Class: MigrationGenerator",permalink:"/docs/next/api/classes/migrations.migrationgenerator"}},l=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addSql",id:"addsql",children:[]},{value:"down",id:"down",children:[]},{value:"execute",id:"execute",children:[]},{value:"getKnex",id:"getknex",children:[]},{value:"getQueries",id:"getqueries",children:[]},{value:"isTransactional",id:"istransactional",children:[]},{value:"reset",id:"reset",children:[]},{value:"setTransactionContext",id:"settransactioncontext",children:[]},{value:"up",id:"up",children:[]}]}],p={toc:l};function m(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations"},"migrations"),".Migration"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new Migration"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"driver"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"config"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"driver")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/knex.abstractsqldriver"},"AbstractSqlDriver"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/knex.abstractsqlconnection"},"AbstractSqlConnection"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.configuration"},"Configuration"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.idatabasedriver"},"IDatabaseDriver"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.connection"},"Connection"),">",">")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/migrations/src/Migration.ts#L9"},"packages/migrations/src/Migration.ts:9")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"addsql"},"addSql"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addSql"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"sql"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sql")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/migrations#query"},"Query"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/migrations/src/Migration.ts#L24"},"packages/migrations/src/Migration.ts:24")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"down"},"down"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"down"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/migrations/src/Migration.ts#L16"},"packages/migrations/src/Migration.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"execute"},"execute"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"execute"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"sql"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entitydata"},"EntityData"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#anyentity"},"AnyEntity"),"<any",">",">","[]",">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sql")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/migrations#query"},"Query"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entitydata"},"EntityData"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#anyentity"},"AnyEntity"),"<any",">",">","[]",">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/migrations/src/Migration.ts#L37"},"packages/migrations/src/Migration.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getknex"},"getKnex"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getKnex"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Knex"),"<any, unknown[]",">"),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Knex"),"<any, unknown[]",">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/migrations/src/Migration.ts#L41"},"packages/migrations/src/Migration.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getqueries"},"getQueries"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getQueries"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#query"},"Query"),"[]"),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#query"},"Query"),"[]"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/migrations/src/Migration.ts#L45"},"packages/migrations/src/Migration.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"istransactional"},"isTransactional"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isTransactional"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/migrations/src/Migration.ts#L20"},"packages/migrations/src/Migration.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reset"},"reset"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"reset"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/migrations/src/Migration.ts#L28"},"packages/migrations/src/Migration.ts:28")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"settransactioncontext"},"setTransactionContext"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setTransactionContext"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ctx"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ctx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/migrations/src/Migration.ts#L33"},"packages/migrations/src/Migration.ts:33")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"up"},"up"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"up"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/migrations/src/Migration.ts#L14"},"packages/migrations/src/Migration.ts:14")))}m.isMDXComponent=!0}}]);