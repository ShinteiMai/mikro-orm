(window.webpackJsonp=window.webpackJsonp||[]).push([[925],{1256:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),s=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,O=m["".concat(b,".").concat(d)]||m[d]||l[d]||c;return r?n.a.createElement(O,o(o({ref:t},i),{},{components:r})):n.a.createElement(O,o({ref:t},i))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,b=new Array(c);b[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,b[1]=o;for(var i=2;i<c;i++)b[i]=r[i];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},995:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),c=(r(0),r(1256)),b={id:"core.manytomanyoptions",title:"Interface: ManyToManyOptions<T, O>",sidebar_label:"ManyToManyOptions",hide_title:!0},o={unversionedId:"api/interfaces/core.manytomanyoptions",id:"version-4.4/api/interfaces/core.manytomanyoptions",isDocsHomePage:!1,title:"Interface: ManyToManyOptions<T, O>",description:"Interface: ManyToManyOptions",source:"@site/versioned_docs/version-4.4/api/interfaces/core.manytomanyoptions.md",slug:"/api/interfaces/core.manytomanyoptions",permalink:"/docs/api/interfaces/core.manytomanyoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/core.manytomanyoptions.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612880207,sidebar_label:"ManyToManyOptions",sidebar:"version-4.4/API",previous:{title:"Interface: LoadedReference<T, P>",permalink:"/docs/api/interfaces/core.loadedreference"},next:{title:"Interface: ManyToOneOptions<T, O>",permalink:"/docs/api/interfaces/core.manytooneoptions"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"cascade",id:"cascade",children:[]},{value:"columnType",id:"columntype",children:[]},{value:"comment",id:"comment",children:[]},{value:"customType",id:"customtype",children:[]},{value:"default",id:"default",children:[]},{value:"defaultRaw",id:"defaultraw",children:[]},{value:"eager",id:"eager",children:[]},{value:"entity",id:"entity",children:[]},{value:"fieldName",id:"fieldname",children:[]},{value:"fieldNames",id:"fieldnames",children:[]},{value:"fixedOrder",id:"fixedorder",children:[]},{value:"fixedOrderColumn",id:"fixedordercolumn",children:[]},{value:"formula",id:"formula",children:[]},{value:"hidden",id:"hidden",children:[]},{value:"index",id:"index",children:[]},{value:"inverseJoinColumn",id:"inversejoincolumn",children:[]},{value:"inverseJoinColumns",id:"inversejoincolumns",children:[]},{value:"inversedBy",id:"inversedby",children:[]},{value:"joinColumn",id:"joincolumn",children:[]},{value:"joinColumns",id:"joincolumns",children:[]},{value:"lazy",id:"lazy",children:[]},{value:"length",id:"length",children:[]},{value:"mappedBy",id:"mappedby",children:[]},{value:"name",id:"name",children:[]},{value:"nullable",id:"nullable",children:[]},{value:"onCreate",id:"oncreate",children:[]},{value:"onUpdate",id:"onupdate",children:[]},{value:"orderBy",id:"orderby",children:[]},{value:"owner",id:"owner",children:[]},{value:"persist",id:"persist",children:[]},{value:"pivotTable",id:"pivottable",children:[]},{value:"primary",id:"primary",children:[]},{value:"referenceColumnName",id:"referencecolumnname",children:[]},{value:"serializedName",id:"serializedname",children:[]},{value:"serializedPrimaryKey",id:"serializedprimarykey",children:[]},{value:"serializer",id:"serializer",children:[]},{value:"strategy",id:"strategy",children:[]},{value:"type",id:"type",children:[]},{value:"unique",id:"unique",children:[]},{value:"unsigned",id:"unsigned",children:[]},{value:"version",id:"version",children:[]}]}],i={toc:p};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-manytomanyoptionst-o"},"Interface: ManyToManyOptions<T, O",">"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/core"}),"core"),".ManyToManyOptions"),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"T"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"O"))))),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),Object(c.b)("em",{parentName:"a"},"ReferenceOptions")),"<T, O",">"),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"ManyToManyOptions")))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"cascade"},"cascade"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"cascade"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/enums/core.cascade"}),Object(c.b)("em",{parentName:"a"},"Cascade")),"[]"),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#cascade"}),"cascade")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L67"}),"packages/core/src/decorators/Property.ts:67")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"columntype"},"columnType"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"columnType"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#columntype"}),"columnType")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L42"}),"packages/core/src/decorators/Property.ts:42")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"comment"},"comment"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"comment"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#comment"}),"comment")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L62"}),"packages/core/src/decorators/Property.ts:62")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"customtype"},"customType"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"customType"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/classes/core.type"}),Object(c.b)("em",{parentName:"a"},"Type")),"<",Object(c.b)("em",{parentName:"p"},"any"),", ",Object(c.b)("em",{parentName:"p"},"any"),">"),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#customtype"}),"customType")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L41"}),"packages/core/src/decorators/Property.ts:41")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"default"},"default"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"default"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"null")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")," ","|"," ",Object(c.b)("em",{parentName:"p"},"number")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(c.b)("em",{parentName:"p"},"number"),"[]"),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#default"}),"default")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L47"}),"packages/core/src/decorators/Property.ts:47")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"defaultraw"},"defaultRaw"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"defaultRaw"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#defaultraw"}),"defaultRaw")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L48"}),"packages/core/src/decorators/Property.ts:48")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"eager"},"eager"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"eager"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#eager"}),"eager")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L68"}),"packages/core/src/decorators/Property.ts:68")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"entity"},"entity"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"entity"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")," ","|"," () => ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/core#entityname"}),Object(c.b)("em",{parentName:"a"},"EntityName")),"<T",">"),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#entity"}),"entity")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L66"}),"packages/core/src/decorators/Property.ts:66")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"fieldname"},"fieldName"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"fieldName"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#fieldname"}),"fieldName")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L39"}),"packages/core/src/decorators/Property.ts:39")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"fieldnames"},"fieldNames"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"fieldNames"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string"),"[]"),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#fieldnames"}),"fieldNames")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L40"}),"packages/core/src/decorators/Property.ts:40")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"fixedorder"},"fixedOrder"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"fixedOrder"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/ManyToMany.ts#L28"}),"packages/core/src/decorators/ManyToMany.ts:28")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"fixedordercolumn"},"fixedOrderColumn"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"fixedOrderColumn"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/ManyToMany.ts#L29"}),"packages/core/src/decorators/ManyToMany.ts:29")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"formula"},"formula"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"formula"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")," ","|"," (",Object(c.b)("inlineCode",{parentName:"p"},"alias"),": ",Object(c.b)("em",{parentName:"p"},"string"),") => ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#formula"}),"formula")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L49"}),"packages/core/src/decorators/Property.ts:49")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"hidden"},"hidden"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"hidden"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#hidden"}),"hidden")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L53"}),"packages/core/src/decorators/Property.ts:53")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"index"},"index"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"index"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#index"}),"index")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L55"}),"packages/core/src/decorators/Property.ts:55")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"inversejoincolumn"},"inverseJoinColumn"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"inverseJoinColumn"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/ManyToMany.ts#L33"}),"packages/core/src/decorators/ManyToMany.ts:33")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"inversejoincolumns"},"inverseJoinColumns"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"inverseJoinColumns"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string"),"[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/ManyToMany.ts#L34"}),"packages/core/src/decorators/ManyToMany.ts:34")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"inversedby"},"inversedBy"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"inversedBy"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")," & keyof T ","|"," (",Object(c.b)("inlineCode",{parentName:"p"},"e"),": T) => ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/ManyToMany.ts#L25"}),"packages/core/src/decorators/ManyToMany.ts:25")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"joincolumn"},"joinColumn"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"joinColumn"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/ManyToMany.ts#L31"}),"packages/core/src/decorators/ManyToMany.ts:31")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"joincolumns"},"joinColumns"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"joinColumns"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string"),"[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/ManyToMany.ts#L32"}),"packages/core/src/decorators/ManyToMany.ts:32")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"lazy"},"lazy"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"lazy"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#lazy"}),"lazy")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L57"}),"packages/core/src/decorators/Property.ts:57")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"length"},"length"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"length"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#length"}),"length")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L44"}),"packages/core/src/decorators/Property.ts:44")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"mappedby"},"mappedBy"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"mappedBy"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")," & keyof T ","|"," (",Object(c.b)("inlineCode",{parentName:"p"},"e"),": T) => ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/ManyToMany.ts#L26"}),"packages/core/src/decorators/ManyToMany.ts:26")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#name"}),"name")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L38"}),"packages/core/src/decorators/Property.ts:38")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"nullable"},"nullable"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"nullable"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#nullable"}),"nullable")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L50"}),"packages/core/src/decorators/Property.ts:50")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"oncreate"},"onCreate"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"onCreate"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(c.b)("inlineCode",{parentName:"p"},"entity"),": O) => ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#oncreate"}),"onCreate")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L45"}),"packages/core/src/decorators/Property.ts:45")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"onupdate"},"onUpdate"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"onUpdate"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(c.b)("inlineCode",{parentName:"p"},"entity"),": O) => ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#onupdate"}),"onUpdate")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L46"}),"packages/core/src/decorators/Property.ts:46")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"orderby"},"orderBy"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"orderBy"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," { ","[field: string]",": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/enums/core.queryorder"}),Object(c.b)("em",{parentName:"a"},"QueryOrder")),";  }"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/ManyToMany.ts#L27"}),"packages/core/src/decorators/ManyToMany.ts:27")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"owner"},"owner"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"owner"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/ManyToMany.ts#L24"}),"packages/core/src/decorators/ManyToMany.ts:24")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"persist"},"persist"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"persist"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#persist"}),"persist")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L52"}),"packages/core/src/decorators/Property.ts:52")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"pivottable"},"pivotTable"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"pivotTable"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/ManyToMany.ts#L30"}),"packages/core/src/decorators/ManyToMany.ts:30")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"primary"},"primary"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"primary"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#primary"}),"primary")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L58"}),"packages/core/src/decorators/Property.ts:58")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"referencecolumnname"},"referenceColumnName"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"referenceColumnName"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/ManyToMany.ts#L35"}),"packages/core/src/decorators/ManyToMany.ts:35")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"serializedname"},"serializedName"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"serializedName"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#serializedname"}),"serializedName")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L61"}),"packages/core/src/decorators/Property.ts:61")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"serializedprimarykey"},"serializedPrimaryKey"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"serializedPrimaryKey"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#serializedprimarykey"}),"serializedPrimaryKey")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L59"}),"packages/core/src/decorators/Property.ts:59")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"serializer"},"serializer"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"serializer"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(c.b)("inlineCode",{parentName:"p"},"value"),": ",Object(c.b)("em",{parentName:"p"},"any"),") => ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#serializer"}),"serializer")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L60"}),"packages/core/src/decorators/Property.ts:60")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"strategy"},"strategy"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"strategy"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/enums/core.loadstrategy#select_in"}),Object(c.b)("em",{parentName:"a"},"SELECT","_","IN"))," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/enums/core.loadstrategy#joined"}),Object(c.b)("em",{parentName:"a"},"JOINED"))),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#strategy"}),"strategy")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L69"}),"packages/core/src/decorators/Property.ts:69")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"type"},"type"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"type"),": ",Object(c.b)("em",{parentName:"p"},"unknown")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#type"}),"type")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L43"}),"packages/core/src/decorators/Property.ts:43")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"unique"},"unique"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"unique"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#unique"}),"unique")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L56"}),"packages/core/src/decorators/Property.ts:56")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"unsigned"},"unsigned"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"unsigned"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#unsigned"}),"unsigned")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L51"}),"packages/core/src/decorators/Property.ts:51")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"version"},"version"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"version"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions"}),"ReferenceOptions"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/core.referenceoptions#version"}),"version")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Property.ts#L54"}),"packages/core/src/decorators/Property.ts:54")))}s.isMDXComponent=!0}}]);