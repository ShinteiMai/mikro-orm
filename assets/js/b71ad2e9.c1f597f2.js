(window.webpackJsonp=window.webpackJsonp||[]).push([[827],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return s}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var O=b.a.createContext({}),l=function(e){var t=b.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},j=function(e){var t=l(e.components);return b.a.createElement(O.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},o=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,O=p(e,["components","mdxType","originalType","parentName"]),j=l(a),o=n,s=j["".concat(c,".").concat(o)]||j[o]||m[o]||r;return a?b.a.createElement(s,i(i({ref:t},O),{},{components:a})):b.a.createElement(s,i({ref:t},O))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=o;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var O=2;O<r;O++)c[O]=a[O];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},896:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),b=a(7),r=(a(0),a(1256)),c={id:"core.entityassigner",title:"Class: EntityAssigner",sidebar_label:"EntityAssigner",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/classes/core.entityassigner",id:"api/classes/core.entityassigner",isDocsHomePage:!1,title:"Class: EntityAssigner",description:"Class: EntityAssigner",source:"@site/docs/api/classes/core.entityassigner.md",slug:"/api/classes/core.entityassigner",permalink:"/docs/next/api/classes/core.entityassigner",editUrl:null,version:"current",sidebar_label:"EntityAssigner",sidebar:"API",previous:{title:"Class: DriverException",permalink:"/docs/next/api/classes/core.driverexception"},next:{title:"Class: EntityCaseNamingStrategy",permalink:"/docs/next/api/classes/core.entitycasenamingstrategy"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]},{value:"assignCollection",id:"assigncollection",children:[]},{value:"assignEmbeddable",id:"assignembeddable",children:[]},{value:"assignReference",id:"assignreference",children:[]},{value:"autoWireOneToOne",id:"autowireonetoone",children:[]},{value:"createCollectionItem",id:"createcollectionitem",children:[]},{value:"validateEM",id:"validateem",children:[]}]}],O={toc:p};function l(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"class-entityassigner"},"Class: EntityAssigner"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".EntityAssigner"),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"EntityAssigner"))),Object(r.b)("h2",{id:"constructors"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new EntityAssigner"),"(): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entityassigner"}),Object(r.b)("em",{parentName:"a"},"EntityAssigner"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entityassigner"}),Object(r.b)("em",{parentName:"a"},"EntityAssigner"))),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"assign"},"assign"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Static"),Object(r.b)("strong",{parentName:"p"},"assign"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.assignoptions"}),Object(r.b)("em",{parentName:"a"},"AssignOptions")),"): T"),Object(r.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.assignoptions"}),Object(r.b)("em",{parentName:"a"},"AssignOptions")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," T"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/entity/EntityAssigner.ts#L14"}),"packages/core/src/entity/EntityAssigner.ts:14")),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Static"),Object(r.b)("strong",{parentName:"p"},"assign"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"onlyProperties?"),": ",Object(r.b)("em",{parentName:"p"},"boolean"),"): T"),Object(r.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"onlyProperties?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"boolean"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," T"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/entity/EntityAssigner.ts#L15"}),"packages/core/src/entity/EntityAssigner.ts:15")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"assigncollection"},"assignCollection"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Static"),Object(r.b)("strong",{parentName:"p"},"assignCollection"),"<T, U",">","(",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(r.b)("inlineCode",{parentName:"p"},"collection"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.collection"}),Object(r.b)("em",{parentName:"a"},"Collection")),"<U, ",Object(r.b)("em",{parentName:"p"},"unknown"),">",", ",Object(r.b)("inlineCode",{parentName:"p"},"value"),": ",Object(r.b)("em",{parentName:"p"},"any"),"[], ",Object(r.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"p"},"any"),">",", ",Object(r.b)("inlineCode",{parentName:"p"},"em"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(r.b)("em",{parentName:"a"},"EntityManager")),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(r.b)("em",{parentName:"a"},"Connection")),">",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"options"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.assignoptions"}),Object(r.b)("em",{parentName:"a"},"AssignOptions")),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<T",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"U")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<U",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<",Object(r.b)("em",{parentName:"td"},"any"),">")))),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"collection")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.collection"}),Object(r.b)("em",{parentName:"a"},"Collection")),"<U, ",Object(r.b)("em",{parentName:"td"},"unknown"),">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"value")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"),"[]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prop")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"td"},"any"),">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"em")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(r.b)("em",{parentName:"a"},"EntityManager")),"<",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(r.b)("em",{parentName:"a"},"Connection")),">",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.assignoptions"}),Object(r.b)("em",{parentName:"a"},"AssignOptions")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/entity/EntityAssigner.ts#L115"}),"packages/core/src/entity/EntityAssigner.ts:115")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"assignembeddable"},"assignEmbeddable"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Static"),Object(r.b)("strong",{parentName:"p"},"assignEmbeddable"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(r.b)("inlineCode",{parentName:"p"},"value"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"p"},"any"),">",", ",Object(r.b)("inlineCode",{parentName:"p"},"em"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(r.b)("em",{parentName:"a"},"EntityManager")),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(r.b)("em",{parentName:"a"},"Connection")),">",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"options"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.assignoptions"}),Object(r.b)("em",{parentName:"a"},"AssignOptions")),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"value")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prop")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"td"},"any"),">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"em")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(r.b)("em",{parentName:"a"},"EntityManager")),"<",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(r.b)("em",{parentName:"a"},"Connection")),">",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.assignoptions"}),Object(r.b)("em",{parentName:"a"},"AssignOptions")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/entity/EntityAssigner.ts#L127"}),"packages/core/src/entity/EntityAssigner.ts:127")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"assignreference"},"assignReference"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Static"),Object(r.b)("strong",{parentName:"p"},"assignReference"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(r.b)("inlineCode",{parentName:"p"},"value"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"p"},"any"),">",", ",Object(r.b)("inlineCode",{parentName:"p"},"em"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(r.b)("em",{parentName:"a"},"EntityManager")),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(r.b)("em",{parentName:"a"},"Connection")),">",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"options"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.assignoptions"}),Object(r.b)("em",{parentName:"a"},"AssignOptions")),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"value")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prop")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"td"},"any"),">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"em")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(r.b)("em",{parentName:"a"},"EntityManager")),"<",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(r.b)("em",{parentName:"a"},"Connection")),">",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.assignoptions"}),Object(r.b)("em",{parentName:"a"},"AssignOptions")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/entity/EntityAssigner.ts#L98"}),"packages/core/src/entity/EntityAssigner.ts:98")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"autowireonetoone"},"autoWireOneToOne"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Static"),Object(r.b)("strong",{parentName:"p"},"autoWireOneToOne"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"p"},"any"),">",", ",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": T): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"auto-wire 1:1 inverse side with owner as in no-sql drivers it can't be joined\nalso makes sure the link is bidirectional when creating new entities from nested structures"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"internal"))," "),Object(r.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prop")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"td"},"any"),">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/entity/EntityAssigner.ts#L72"}),"packages/core/src/entity/EntityAssigner.ts:72")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"createcollectionitem"},"createCollectionItem"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Static"),Object(r.b)("strong",{parentName:"p"},"createCollectionItem"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"item"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"em"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(r.b)("em",{parentName:"a"},"EntityManager")),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(r.b)("em",{parentName:"a"},"Connection")),">",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"p"},"any"),">",", ",Object(r.b)("inlineCode",{parentName:"p"},"invalid"),": ",Object(r.b)("em",{parentName:"p"},"any"),"[], ",Object(r.b)("inlineCode",{parentName:"p"},"options"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.assignoptions"}),Object(r.b)("em",{parentName:"a"},"AssignOptions")),"): T"),Object(r.b)("h4",{id:"type-parameters-6"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(r.b)("h4",{id:"parameters-6"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"item")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"em")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(r.b)("em",{parentName:"a"},"EntityManager")),"<",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(r.b)("em",{parentName:"a"},"Connection")),">",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prop")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"td"},"any"),">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"invalid")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"),"[]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.assignoptions"}),Object(r.b)("em",{parentName:"a"},"AssignOptions")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," T"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/entity/EntityAssigner.ts#L148"}),"packages/core/src/entity/EntityAssigner.ts:148")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"validateem"},"validateEM"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Static"),Object(r.b)("strong",{parentName:"p"},"validateEM"),"(",Object(r.b)("inlineCode",{parentName:"p"},"em?"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(r.b)("em",{parentName:"a"},"EntityManager")),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(r.b)("em",{parentName:"a"},"Connection")),">",">","): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("h4",{id:"parameters-7"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"em?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(r.b)("em",{parentName:"a"},"EntityManager")),"<",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(r.b)("em",{parentName:"a"},"Connection")),">",">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/entity/EntityAssigner.ts#L90"}),"packages/core/src/entity/EntityAssigner.ts:90")))}l.isMDXComponent=!0}}]);