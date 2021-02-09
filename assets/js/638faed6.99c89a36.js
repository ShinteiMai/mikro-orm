(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var O=b.a.createContext({}),j=function(e){var t=b.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=j(e.components);return b.a.createElement(O.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},i=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,O=l(e,["components","mdxType","originalType","parentName"]),m=j(a),i=r,d=m["".concat(c,".").concat(i)]||m[i]||o[i]||n;return a?b.a.createElement(d,p(p({ref:t},O),{},{components:a})):b.a.createElement(d,p({ref:t},O))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=i;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var O=2;O<n;O++)c[O]=a[O];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}i.displayName="MDXCreateElement"},508:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return j}));var r=a(3),b=a(7),n=(a(0),a(1256)),c={id:"core.objecthydrator",title:"Class: ObjectHydrator",sidebar_label:"ObjectHydrator",hide_title:!0},p={unversionedId:"api/classes/core.objecthydrator",id:"version-4.4/api/classes/core.objecthydrator",isDocsHomePage:!1,title:"Class: ObjectHydrator",description:"Class: ObjectHydrator",source:"@site/versioned_docs/version-4.4/api/classes/core.objecthydrator.md",slug:"/api/classes/core.objecthydrator",permalink:"/docs/api/classes/core.objecthydrator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/core.objecthydrator.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612880207,sidebar_label:"ObjectHydrator",sidebar:"version-4.4/API",previous:{title:"Class: NullHighlighter",permalink:"/docs/api/classes/core.nullhighlighter"},next:{title:"Class: OptimisticLockError<T>",permalink:"/docs/api/classes/core.optimisticlockerror"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"hydrators",id:"hydrators",children:[]},{value:"metadata",id:"metadata",children:[]},{value:"platform",id:"platform",children:[]}]},{value:"Methods",id:"methods",children:[{value:"createCollectionItemMapper",id:"createcollectionitemmapper",children:[]},{value:"getEntityHydrator",id:"getentityhydrator",children:[]},{value:"getProperties",id:"getproperties",children:[]},{value:"hydrate",id:"hydrate",children:[]},{value:"hydrateProperty",id:"hydrateproperty",children:[]},{value:"hydrateReference",id:"hydratereference",children:[]}]}],O={toc:l};function j(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"class-objecthydrator"},"Class: ObjectHydrator"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core"}),"core"),".ObjectHydrator"),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.hydrator"}),Object(n.b)("em",{parentName:"a"},"Hydrator"))),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"ObjectHydrator")))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new ObjectHydrator"),"(",Object(n.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.metadatastorage"}),Object(n.b)("em",{parentName:"a"},"MetadataStorage")),", ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")),", ",Object(n.b)("inlineCode",{parentName:"p"},"config"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.configuration"}),Object(n.b)("em",{parentName:"a"},"Configuration")),"<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(n.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.connection"}),Object(n.b)("em",{parentName:"a"},"Connection")),">",">","): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.objecthydrator"}),Object(n.b)("em",{parentName:"a"},"ObjectHydrator"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"metadata")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.metadatastorage"}),Object(n.b)("em",{parentName:"a"},"MetadataStorage")))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"config")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.configuration"}),Object(n.b)("em",{parentName:"a"},"Configuration")),"<",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(n.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.connection"}),Object(n.b)("em",{parentName:"a"},"Connection")),">",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.objecthydrator"}),Object(n.b)("em",{parentName:"a"},"ObjectHydrator"))),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.hydrator"}),"Hydrator")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/hydration/Hydrator.ts#L8"}),"packages/core/src/hydration/Hydrator.ts:8")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"config"},"config"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"config"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.configuration"}),Object(n.b)("em",{parentName:"a"},"Configuration")),"<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(n.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.connection"}),Object(n.b)("em",{parentName:"a"},"Connection")),">",">"),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.hydrator"}),"Hydrator"),".",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.hydrator#config"}),"config")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"hydrators"},"hydrators"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"hydrators"),": { ",Object(n.b)("inlineCode",{parentName:"p"},"full"),": ",Object(n.b)("em",{parentName:"p"},"Map"),"<",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("em",{parentName:"p"},"EntityHydrator"),"<",Object(n.b)("em",{parentName:"p"},"any"),">",">"," ; ",Object(n.b)("inlineCode",{parentName:"p"},"reference"),": ",Object(n.b)("em",{parentName:"p"},"Map"),"<",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("em",{parentName:"p"},"EntityHydrator"),"<",Object(n.b)("em",{parentName:"p"},"any"),">",">"," ; ",Object(n.b)("inlineCode",{parentName:"p"},"returning"),": ",Object(n.b)("em",{parentName:"p"},"Map"),"<",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("em",{parentName:"p"},"EntityHydrator"),"<",Object(n.b)("em",{parentName:"p"},"any"),">",">","  }"),Object(n.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"full")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Map"),"<",Object(n.b)("em",{parentName:"td"},"string"),", ",Object(n.b)("em",{parentName:"td"},"EntityHydrator"),"<",Object(n.b)("em",{parentName:"td"},"any"),">",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"reference")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Map"),"<",Object(n.b)("em",{parentName:"td"},"string"),", ",Object(n.b)("em",{parentName:"td"},"EntityHydrator"),"<",Object(n.b)("em",{parentName:"td"},"any"),">",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"returning")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Map"),"<",Object(n.b)("em",{parentName:"td"},"string"),", ",Object(n.b)("em",{parentName:"td"},"EntityHydrator"),"<",Object(n.b)("em",{parentName:"td"},"any"),">",">")))),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/hydration/ObjectHydrator.ts#L13"}),"packages/core/src/hydration/ObjectHydrator.ts:13")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"metadata"},"metadata"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"metadata"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.metadatastorage"}),Object(n.b)("em",{parentName:"a"},"MetadataStorage"))),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.hydrator"}),"Hydrator"),".",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.hydrator#metadata"}),"metadata")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"platform"},"platform"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform"))),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.hydrator"}),"Hydrator"),".",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.hydrator#platform"}),"platform")),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"createcollectionitemmapper"},"createCollectionItemMapper"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private"),Object(n.b)("strong",{parentName:"p"},"createCollectionItemMapper"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/core.entityproperty"}),Object(n.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(n.b)("em",{parentName:"p"},"any"),">","): ",Object(n.b)("em",{parentName:"p"},"string"),"[]"),Object(n.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"prop")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/core.entityproperty"}),Object(n.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(n.b)("em",{parentName:"td"},"any"),">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string"),"[]"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/hydration/ObjectHydrator.ts#L211"}),"packages/core/src/hydration/ObjectHydrator.ts:211")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getentityhydrator"},"getEntityHydrator"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private"),Object(n.b)("strong",{parentName:"p"},"getEntityHydrator"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"type"),": ",Object(n.b)("em",{parentName:"p"},"reference")," ","|"," ",Object(n.b)("em",{parentName:"p"},"full")," ","|"," ",Object(n.b)("em",{parentName:"p"},"returning"),"): ",Object(n.b)("em",{parentName:"p"},"EntityHydrator"),"<T",">"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"internal"))," Highly performance-sensitive method."),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#anyentity"}),Object(n.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"type")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"reference")," ","|"," ",Object(n.b)("em",{parentName:"td"},"full")," ","|"," ",Object(n.b)("em",{parentName:"td"},"returning"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"EntityHydrator"),"<T",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/hydration/ObjectHydrator.ts#L38"}),"packages/core/src/hydration/ObjectHydrator.ts:38")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getproperties"},"getProperties"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected"),Object(n.b)("strong",{parentName:"p"},"getProperties"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"type"),": ",Object(n.b)("em",{parentName:"p"},"reference")," ","|"," ",Object(n.b)("em",{parentName:"p"},"full")," ","|"," ",Object(n.b)("em",{parentName:"p"},"returning"),"): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/core.entityproperty"}),Object(n.b)("em",{parentName:"a"},"EntityProperty")),"<T",">","[]"),Object(n.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#anyentity"}),Object(n.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"type")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"reference")," ","|"," ",Object(n.b)("em",{parentName:"td"},"full")," ","|"," ",Object(n.b)("em",{parentName:"td"},"returning"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/core.entityproperty"}),Object(n.b)("em",{parentName:"a"},"EntityProperty")),"<T",">","[]"),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.hydrator"}),"Hydrator")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/hydration/Hydrator.ts#L34"}),"packages/core/src/hydration/Hydrator.ts:34")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"hydrate"},"hydrate"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"hydrate"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"data"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"factory"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.entityfactory"}),Object(n.b)("em",{parentName:"a"},"EntityFactory")),", ",Object(n.b)("inlineCode",{parentName:"p"},"type"),": ",Object(n.b)("em",{parentName:"p"},"reference")," ","|"," ",Object(n.b)("em",{parentName:"p"},"full")," ","|"," ",Object(n.b)("em",{parentName:"p"},"returning"),", ",Object(n.b)("inlineCode",{parentName:"p"},"newEntity?"),": ",Object(n.b)("em",{parentName:"p"},"boolean"),", ",Object(n.b)("inlineCode",{parentName:"p"},"convertCustomTypes?"),": ",Object(n.b)("em",{parentName:"p"},"boolean"),"): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"inheritdoc"))," "),Object(n.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#anyentity"}),Object(n.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"factory")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.entityfactory"}),Object(n.b)("em",{parentName:"a"},"EntityFactory"))),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"type")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"reference")," ","|"," ",Object(n.b)("em",{parentName:"td"},"full")," ","|"," ",Object(n.b)("em",{parentName:"td"},"returning")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"newEntity")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"convertCustomTypes")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"false")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Overrides: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.hydrator"}),"Hydrator")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/hydration/ObjectHydrator.ts#L22"}),"packages/core/src/hydration/ObjectHydrator.ts:22")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"hydrateproperty"},"hydrateProperty"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected"),Object(n.b)("strong",{parentName:"p"},"hydrateProperty"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(n.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/core.entityproperty"}),Object(n.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(n.b)("em",{parentName:"p"},"any"),">",", ",Object(n.b)("inlineCode",{parentName:"p"},"data"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"factory"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.entityfactory"}),Object(n.b)("em",{parentName:"a"},"EntityFactory")),", ",Object(n.b)("inlineCode",{parentName:"p"},"newEntity?"),": ",Object(n.b)("em",{parentName:"p"},"boolean"),", ",Object(n.b)("inlineCode",{parentName:"p"},"convertCustomTypes?"),": ",Object(n.b)("em",{parentName:"p"},"boolean"),"): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#anyentity"}),Object(n.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"prop")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/core.entityproperty"}),Object(n.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(n.b)("em",{parentName:"td"},"any"),">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"factory")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.entityfactory"}),Object(n.b)("em",{parentName:"a"},"EntityFactory")))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"newEntity?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"convertCustomTypes?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.hydrator"}),"Hydrator")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/hydration/Hydrator.ts#L47"}),"packages/core/src/hydration/Hydrator.ts:47")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"hydratereference"},"hydrateReference"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"hydrateReference"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"data"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"factory"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.entityfactory"}),Object(n.b)("em",{parentName:"a"},"EntityFactory")),", ",Object(n.b)("inlineCode",{parentName:"p"},"convertCustomTypes?"),": ",Object(n.b)("em",{parentName:"p"},"boolean"),"): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"inheritdoc"))," "),Object(n.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#anyentity"}),Object(n.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#entitydata"}),Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"factory")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.entityfactory"}),Object(n.b)("em",{parentName:"a"},"EntityFactory"))),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"convertCustomTypes")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"false")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Overrides: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.hydrator"}),"Hydrator")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/hydration/ObjectHydrator.ts#L30"}),"packages/core/src/hydration/ObjectHydrator.ts:30")))}j.isMDXComponent=!0}}]);