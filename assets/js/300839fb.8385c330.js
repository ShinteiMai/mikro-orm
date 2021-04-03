(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1110:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},m=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,O=m["".concat(o,".").concat(u)]||m[u]||s[u]||i;return r?a.a.createElement(O,b(b({ref:t},l),{},{components:r})):a.a.createElement(O,b({ref:t},l))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},263:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),i=(r(0),r(1110)),o={id:"core.poolconfig",title:"Interface: PoolConfig",sidebar_label:"PoolConfig",custom_edit_url:null,hide_title:!0},b={unversionedId:"api/interfaces/core.poolconfig",id:"version-4.5/api/interfaces/core.poolconfig",isDocsHomePage:!1,title:"Interface: PoolConfig",description:"Interface: PoolConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/core.poolconfig.md",slug:"/api/interfaces/core.poolconfig",permalink:"/docs/api/interfaces/core.poolconfig",editUrl:null,version:"4.5",lastUpdatedBy:"francisco-sanchez-molina",lastUpdatedAt:1617452793,formattedLastUpdatedAt:"4/3/2021",sidebar_label:"PoolConfig",sidebar:"version-4.5/API",previous:{title:"Interface: OneToOneOptions<T, O>",permalink:"/docs/api/interfaces/core.onetooneoptions"},next:{title:"Interface: PrimaryKeyOptions<T>",permalink:"/docs/api/interfaces/core.primarykeyoptions"}},c=[{value:"Properties",id:"properties",children:[{value:"Promise",id:"promise",children:[]},{value:"acquireTimeoutMillis",id:"acquiretimeoutmillis",children:[]},{value:"afterCreate",id:"aftercreate",children:[]},{value:"autostart",id:"autostart",children:[]},{value:"evictionRunIntervalMillis",id:"evictionrunintervalmillis",children:[]},{value:"fifo",id:"fifo",children:[]},{value:"idleTimeoutMillis",id:"idletimeoutmillis",children:[]},{value:"log",id:"log",children:[]},{value:"max",id:"max",children:[]},{value:"maxWaitingClients",id:"maxwaitingclients",children:[]},{value:"min",id:"min",children:[]},{value:"name",id:"name",children:[]},{value:"numTestsPerRun",id:"numtestsperrun",children:[]},{value:"priorityRange",id:"priorityrange",children:[]},{value:"reapIntervalMillis",id:"reapintervalmillis",children:[]},{value:"refreshIdle",id:"refreshidle",children:[]},{value:"returnToHead",id:"returntohead",children:[]},{value:"softIdleTimeoutMillis",id:"softidletimeoutmillis",children:[]},{value:"testOnBorrow",id:"testonborrow",children:[]}]}],l={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-poolconfig"},"Interface: PoolConfig"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".PoolConfig"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"promise"},"Promise"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"Promise"),": ",Object(i.b)("em",{parentName:"p"},"any")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L337"},"packages/core/src/utils/Configuration.ts:337")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"acquiretimeoutmillis"},"acquireTimeoutMillis"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"acquireTimeoutMillis"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L331"},"packages/core/src/utils/Configuration.ts:331")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"aftercreate"},"afterCreate"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"afterCreate"),": (...",Object(i.b)("inlineCode",{parentName:"p"},"a"),": ",Object(i.b)("em",{parentName:"p"},"unknown"),"[]) => ",Object(i.b)("em",{parentName:"p"},"unknown")),Object(i.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(i.b)("p",null,"\u25b8 (...",Object(i.b)("inlineCode",{parentName:"p"},"a"),": ",Object(i.b)("em",{parentName:"p"},"unknown"),"[]): ",Object(i.b)("em",{parentName:"p"},"unknown")),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"...a")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"unknown"),"[]")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"unknown")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L318"},"packages/core/src/utils/Configuration.ts:318")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L318"},"packages/core/src/utils/Configuration.ts:318")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"autostart"},"autostart"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"autostart"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L333"},"packages/core/src/utils/Configuration.ts:333")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"evictionrunintervalmillis"},"evictionRunIntervalMillis"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"evictionRunIntervalMillis"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L334"},"packages/core/src/utils/Configuration.ts:334")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"fifo"},"fifo"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"fifo"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L332"},"packages/core/src/utils/Configuration.ts:332")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"idletimeoutmillis"},"idleTimeoutMillis"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"idleTimeoutMillis"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L322"},"packages/core/src/utils/Configuration.ts:322")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"log"},"log"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"log"),": (",Object(i.b)("inlineCode",{parentName:"p"},"message"),": ",Object(i.b)("em",{parentName:"p"},"string"),", ",Object(i.b)("inlineCode",{parentName:"p"},"logLevel"),": ",Object(i.b)("em",{parentName:"p"},"string"),") => ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("h4",{id:"type-declaration-1"},"Type declaration:"),Object(i.b)("p",null,"\u25b8 (",Object(i.b)("inlineCode",{parentName:"p"},"message"),": ",Object(i.b)("em",{parentName:"p"},"string"),", ",Object(i.b)("inlineCode",{parentName:"p"},"logLevel"),": ",Object(i.b)("em",{parentName:"p"},"string"),"): ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"message")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"string"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"logLevel")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"string"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L326"},"packages/core/src/utils/Configuration.ts:326")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L326"},"packages/core/src/utils/Configuration.ts:326")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"max"},"max"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"max"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L320"},"packages/core/src/utils/Configuration.ts:320")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"maxwaitingclients"},"maxWaitingClients"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"maxWaitingClients"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L329"},"packages/core/src/utils/Configuration.ts:329")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"min"},"min"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"min"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L319"},"packages/core/src/utils/Configuration.ts:319")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"name"},"name"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"name"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L317"},"packages/core/src/utils/Configuration.ts:317")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"numtestsperrun"},"numTestsPerRun"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"numTestsPerRun"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L335"},"packages/core/src/utils/Configuration.ts:335")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"priorityrange"},"priorityRange"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"priorityRange"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L325"},"packages/core/src/utils/Configuration.ts:325")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"reapintervalmillis"},"reapIntervalMillis"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"reapIntervalMillis"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L323"},"packages/core/src/utils/Configuration.ts:323")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"refreshidle"},"refreshIdle"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"refreshIdle"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L321"},"packages/core/src/utils/Configuration.ts:321")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"returntohead"},"returnToHead"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"returnToHead"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L324"},"packages/core/src/utils/Configuration.ts:324")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"softidletimeoutmillis"},"softIdleTimeoutMillis"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"softIdleTimeoutMillis"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L336"},"packages/core/src/utils/Configuration.ts:336")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"testonborrow"},"testOnBorrow"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"testOnBorrow"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L330"},"packages/core/src/utils/Configuration.ts:330")))}p.isMDXComponent=!0}}]);