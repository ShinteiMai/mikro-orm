(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{1086:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),o=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},O=function(e){var t=o(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),O=o(a),j=n,d=O["".concat(c,".").concat(j)]||O[j]||m[j]||b;return a?r.a.createElement(d,i(i({ref:t},l),{},{components:a})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<b;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},402:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),b=(a(0),a(1086)),c={id:"entityfactory",title:"Class: EntityFactory",sidebar_label:"EntityFactory"},i={unversionedId:"api/classes/entityfactory",id:"version-4.2/api/classes/entityfactory",isDocsHomePage:!1,title:"Class: EntityFactory",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/classes/entityfactory.md",slug:"/api/classes/entityfactory",permalink:"/docs/4.2/api/classes/entityfactory",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/entityfactory.md",version:"4.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1609161290,sidebar_label:"EntityFactory",sidebar:"version-4.2/API",previous:{title:"Class: EntityComparator",permalink:"/docs/4.2/api/classes/entitycomparator"},next:{title:"Class: EntityGenerator",permalink:"/docs/4.2/api/classes/entitygenerator"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"driver",id:"driver",children:[]},{value:"em",id:"em",children:[]},{value:"eventManager",id:"eventmanager",children:[]},{value:"hydrator",id:"hydrator",children:[]},{value:"metadata",id:"metadata",children:[]},{value:"platform",id:"platform",children:[]},{value:"unitOfWork",id:"unitofwork",children:[]}]},{value:"Methods",id:"methods",children:[{value:"create",id:"create",children:[]},{value:"createEntity",id:"createentity",children:[]},{value:"createReference",id:"createreference",children:[]},{value:"denormalizePrimaryKey",id:"denormalizeprimarykey",children:[]},{value:"extractConstructorParams",id:"extractconstructorparams",children:[]},{value:"findEntity",id:"findentity",children:[]},{value:"hydrate",id:"hydrate",children:[]},{value:"processDiscriminatorColumn",id:"processdiscriminatorcolumn",children:[]}]}],l={rightToc:p};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"EntityFactory"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new EntityFactory"),"(",Object(b.b)("inlineCode",{parentName:"p"},"unitOfWork"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/unitofwork"}),"UnitOfWork"),", ",Object(b.b)("inlineCode",{parentName:"p"},"em"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymanager"}),"EntityManager"),"): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entityfactory"}),"EntityFactory")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityFactory.ts#L22"}),"packages/core/src/entity/EntityFactory.ts:22"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"unitOfWork")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/classes/unitofwork"}),"UnitOfWork"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"em")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/classes/entitymanager"}),"EntityManager"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entityfactory"}),"EntityFactory")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"config"},"config"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"config"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/configuration"}),"Configuration"),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/idatabasedriver"}),"IDatabaseDriver"),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/connection"}),"Connection"),">> = this.em.config"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityFactory.ts#L19"}),"packages/core/src/entity/EntityFactory.ts:19"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"driver"},"driver"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"driver"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/idatabasedriver"}),"IDatabaseDriver"),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/connection"}),"Connection"),"> = this.em.getDriver()"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityFactory.ts#L17"}),"packages/core/src/entity/EntityFactory.ts:17"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"em"},"em"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"em"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymanager"}),"EntityManager")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityFactory.ts#L25"}),"packages/core/src/entity/EntityFactory.ts:25"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"eventmanager"},"eventManager"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"eventManager"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/eventmanager"}),"EventManager")," = this.em.getEventManager()"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityFactory.ts#L22"}),"packages/core/src/entity/EntityFactory.ts:22"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hydrator"},"hydrator"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"hydrator"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/ihydrator"}),"IHydrator")," = this.config.getHydrator(this.metadata)"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityFactory.ts#L21"}),"packages/core/src/entity/EntityFactory.ts:21"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"metadata"},"metadata"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"metadata"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/metadatastorage"}),"MetadataStorage")," = this.em.getMetadata()"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityFactory.ts#L20"}),"packages/core/src/entity/EntityFactory.ts:20"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"platform"},"platform"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"platform"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/platform"}),"Platform")," = this.driver.getPlatform()"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityFactory.ts#L18"}),"packages/core/src/entity/EntityFactory.ts:18"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unitofwork"},"unitOfWork"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"unitOfWork"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/unitofwork"}),"UnitOfWork")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityFactory.ts#L24"}),"packages/core/src/entity/EntityFactory.ts:24"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"create"},"create"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"create"),"<","T, P>(",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#entityname"}),"EntityName"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"data"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/factoryoptions"}),"FactoryOptions"),"): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#new"}),"New"),"<","T, P>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityFactory.ts#L27"}),"packages/core/src/entity/EntityFactory.ts:27"))),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"P")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#populate"}),"Populate"),"<","T>"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#entityname"}),"EntityName"),"<","T>"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/factoryoptions"}),"FactoryOptions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#new"}),"New"),"<","T, P>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"createentity"},"createEntity"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"createEntity"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/factoryoptions"}),"FactoryOptions"),"): T"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityFactory.ts#L87"}),"packages/core/src/entity/EntityFactory.ts:87"))),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/factoryoptions"}),"FactoryOptions"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"createreference"},"createReference"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"createReference"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#entityname"}),"EntityName"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"id"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#primary"}),"Primary"),"<","T> ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#primary"}),"Primary"),"<","T>[] ","|"," Record","<","string, ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#primary"}),"Primary"),"<","T>>, ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": Pick","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/factoryoptions"}),"FactoryOptions"),", ",'"',"merge",'"'," ","|"," ",'"',"convertCustomTypes",'"',">): T"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityFactory.ts#L63"}),"packages/core/src/entity/EntityFactory.ts:63"))),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#entityname"}),"EntityName"),"<","T>"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"id")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#primary"}),"Primary"),"<","T> ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#primary"}),"Primary"),"<","T>[] ","|"," Record","<","string, ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#primary"}),"Primary"),"<","T>>"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pick","<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/factoryoptions"}),"FactoryOptions"),", ",'"',"merge",'"'," ","|"," ",'"',"convertCustomTypes",'"',">"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"denormalizeprimarykey"},"denormalizePrimaryKey"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"denormalizePrimaryKey"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"primaryKey"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/entityproperty"}),"EntityProperty"),"<","T>): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityFactory.ts#L152"}),"packages/core/src/entity/EntityFactory.ts:152"))),Object(b.b)("p",null,"denormalize PK to value required by driver (e.g. ObjectId)"),Object(b.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"primaryKey")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/entityproperty"}),"EntityProperty"),"<","T>")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"extractconstructorparams"},"extractConstructorParams"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"extractConstructorParams"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"data"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>): T","[keyof T][]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityFactory.ts#L170"}),"packages/core/src/entity/EntityFactory.ts:170"))),Object(b.b)("p",null,"returns parameters for entity constructor, creating references from plain ids"),Object(b.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T","[keyof T][]"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"findentity"},"findEntity"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"findEntity"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"convertCustomTypes?"),": boolean): T ","|"," undefined"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityFactory.ts#L117"}),"packages/core/src/entity/EntityFactory.ts:117"))),Object(b.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"convertCustomTypes?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T ","|"," undefined"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hydrate"},"hydrate"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"hydrate"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"data"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/factoryoptions"}),"FactoryOptions"),"): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityFactory.ts#L109"}),"packages/core/src/entity/EntityFactory.ts:109"))),Object(b.b)("h4",{id:"type-parameters-6"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/factoryoptions"}),"FactoryOptions"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"processdiscriminatorcolumn"},"processDiscriminatorColumn"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"processDiscriminatorColumn"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"data"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityFactory.ts#L131"}),"packages/core/src/entity/EntityFactory.ts:131"))),Object(b.b)("h4",{id:"type-parameters-7"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-8"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>"))}o.isMDXComponent=!0}}]);