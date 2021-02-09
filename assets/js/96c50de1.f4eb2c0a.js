(window.webpackJsonp=window.webpackJsonp||[]).push([[680],{1256:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return O}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},d=function(e){var n=l(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,O=d["".concat(i,".").concat(m)]||d[m]||s[m]||c;return t?r.a.createElement(O,b(b({ref:n},p),{},{components:t})):r.a.createElement(O,b({ref:n},p))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=m;var b={};for(var o in n)hasOwnProperty.call(n,o)&&(b[o]=n[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var p=2;p<c;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},750:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),c=(t(0),t(1256)),i={id:"knex.knex.config",title:"Interface: Config<SV>",sidebar_label:"Config",hide_title:!0},b={unversionedId:"api/interfaces/knex.knex.config",id:"version-4.4/api/interfaces/knex.knex.config",isDocsHomePage:!1,title:"Interface: Config<SV>",description:"Interface: Config",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.config.md",slug:"/api/interfaces/knex.knex.config",permalink:"/docs/api/interfaces/knex.knex.config",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.config.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612880207,sidebar_label:"Config",sidebar:"version-4.4/API",previous:{title:"Interface: ColumnNameQueryBuilder<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.columnnamequerybuilder"},next:{title:"Interface: ConnectionConfig",permalink:"/docs/api/interfaces/knex.knex.connectionconfig"}},o=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"acquireConnectionTimeout",id:"acquireconnectiontimeout",children:[]},{value:"asyncStackTraces",id:"asyncstacktraces",children:[]},{value:"client",id:"client",children:[]},{value:"connection",id:"connection",children:[]},{value:"debug",id:"debug",children:[]},{value:"dialect",id:"dialect",children:[]},{value:"log",id:"log",children:[]},{value:"migrations",id:"migrations",children:[]},{value:"pool",id:"pool",children:[]},{value:"postProcessResponse",id:"postprocessresponse",children:[]},{value:"searchPath",id:"searchpath",children:[]},{value:"seeds",id:"seeds",children:[]},{value:"useNullAsDefault",id:"usenullasdefault",children:[]},{value:"version",id:"version",children:[]},{value:"wrapIdentifier",id:"wrapidentifier",children:[]}]}],p={toc:o};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-configsv"},"Interface: Config<SV",">"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".Config"),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"SV")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"{}"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"any"))))),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Config"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"acquireconnectiontimeout"},"acquireConnectionTimeout"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"acquireConnectionTimeout"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1864"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"asyncstacktraces"},"asyncStackTraces"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"asyncStackTraces"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1867"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"client"},"client"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"client"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")," ","|"," ",Object(c.b)("em",{parentName:"p"},"typeof")," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.client"}),Object(c.b)("em",{parentName:"a"},"Client"))),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1851"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"connection"},"connection"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"connection"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.connectionconfig"}),Object(c.b)("em",{parentName:"a"},"ConnectionConfig"))," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.mariasqlconnectionconfig"}),Object(c.b)("em",{parentName:"a"},"MariaSqlConnectionConfig"))," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.mysqlconnectionconfig"}),Object(c.b)("em",{parentName:"a"},"MySqlConnectionConfig"))," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.mysql2connectionconfig"}),Object(c.b)("em",{parentName:"a"},"MySql2ConnectionConfig"))," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.mssqlconnectionconfig"}),Object(c.b)("em",{parentName:"a"},"MsSqlConnectionConfig"))," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.oracledbconnectionconfig"}),Object(c.b)("em",{parentName:"a"},"OracleDbConnectionConfig"))," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.pgconnectionconfig"}),Object(c.b)("em",{parentName:"a"},"PgConnectionConfig"))," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.sqlite3connectionconfig"}),Object(c.b)("em",{parentName:"a"},"Sqlite3ConnectionConfig"))," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.socketconnectionconfig"}),Object(c.b)("em",{parentName:"a"},"SocketConnectionConfig"))," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1#syncconnectionconfigprovider"}),Object(c.b)("em",{parentName:"a"},"SyncConnectionConfigProvider"))," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1#asyncconnectionconfigprovider"}),Object(c.b)("em",{parentName:"a"},"AsyncConnectionConfigProvider"))),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1854"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"debug"},"debug"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"debug"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1850"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"dialect"},"dialect"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"dialect"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1852"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"log"},"log"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"log"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.logger"}),Object(c.b)("em",{parentName:"a"},"Logger"))),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1868"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"migrations"},"migrations"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"migrations"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(c.b)("em",{parentName:"a"},"MigratorConfig"))),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1856"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"pool"},"pool"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"pool"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.poolconfig"}),Object(c.b)("em",{parentName:"a"},"PoolConfig"))),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1855"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"postprocessresponse"},"postProcessResponse"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"postProcessResponse"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(c.b)("inlineCode",{parentName:"p"},"result"),": ",Object(c.b)("em",{parentName:"p"},"any"),", ",Object(c.b)("inlineCode",{parentName:"p"},"queryContext"),": ",Object(c.b)("em",{parentName:"p"},"any"),") => ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1857"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"searchpath"},"searchPath"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"searchPath"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")," ","|"," readonly ",Object(c.b)("em",{parentName:"p"},"string"),"[]"),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1866"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"seeds"},"seeds"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"seeds"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.seederconfig"}),Object(c.b)("em",{parentName:"a"},"SeederConfig")),"<SV",">"),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1863"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"usenullasdefault"},"useNullAsDefault"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"useNullAsDefault"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1865"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"version"},"version"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"version"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1853"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"wrapidentifier"},"wrapIdentifier"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"wrapIdentifier"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(c.b)("inlineCode",{parentName:"p"},"value"),": ",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("inlineCode",{parentName:"p"},"origImpl"),": (",Object(c.b)("inlineCode",{parentName:"p"},"value"),": ",Object(c.b)("em",{parentName:"p"},"string"),") => ",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("inlineCode",{parentName:"p"},"queryContext"),": ",Object(c.b)("em",{parentName:"p"},"any"),") => ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1858"))}l.isMDXComponent=!0}}]);