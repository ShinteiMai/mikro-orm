(window.webpackJsonp=window.webpackJsonp||[]).push([[608],{1052:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var n=r(0),b=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,b=function(e,t){if(null==e)return{};var r,n,b={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(b[r]=e[r]);return b}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(b[r]=e[r])}return b}var o=b.a.createContext({}),m=function(e){var t=b.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=m(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),l=m(r),d=n,O=l["".concat(p,".").concat(d)]||l[d]||s[d]||a;return r?b.a.createElement(O,c(c({ref:t},o),{},{components:r})):b.a.createElement(O,c({ref:t},o))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var o=2;o<a;o++)p[o]=r[o];return b.a.createElement.apply(null,p)}return b.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},681:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return m}));var n=r(3),b=r(8),a=(r(0),r(1052)),p={id:"core.entityproperty",title:"Interface: EntityProperty<T>",sidebar_label:"EntityProperty",hide_title:!0},c={unversionedId:"api/interfaces/core.entityproperty",id:"version-4.4/api/interfaces/core.entityproperty",isDocsHomePage:!1,title:"Interface: EntityProperty<T>",description:"Interface: EntityProperty",source:"@site/versioned_docs/version-4.4/api/interfaces/core.entityproperty.md",slug:"/api/interfaces/core.entityproperty",permalink:"/docs/api/interfaces/core.entityproperty",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/core.entityproperty.md",version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1615323547,sidebar_label:"EntityProperty",sidebar:"version-4.4/API",previous:{title:"Interface: Edge",permalink:"/docs/api/interfaces/core.edge"},next:{title:"Interface: EnumOptions<T>",permalink:"/docs/api/interfaces/core.enumoptions"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"array",id:"array",children:[]},{value:"cascade",id:"cascade",children:[]},{value:"columnTypes",id:"columntypes",children:[]},{value:"comment",id:"comment",children:[]},{value:"customType",id:"customtype",children:[]},{value:"default",id:"default",children:[]},{value:"defaultRaw",id:"defaultraw",children:[]},{value:"eager",id:"eager",children:[]},{value:"embeddable",id:"embeddable",children:[]},{value:"embedded",id:"embedded",children:[]},{value:"embeddedProps",id:"embeddedprops",children:[]},{value:"entity",id:"entity",children:[]},{value:"enum",id:"enum",children:[]},{value:"fieldNameRaw",id:"fieldnameraw",children:[]},{value:"fieldNames",id:"fieldnames",children:[]},{value:"fixedOrder",id:"fixedorder",children:[]},{value:"fixedOrderColumn",id:"fixedordercolumn",children:[]},{value:"formula",id:"formula",children:[]},{value:"getter",id:"getter",children:[]},{value:"getterName",id:"gettername",children:[]},{value:"hidden",id:"hidden",children:[]},{value:"index",id:"index",children:[]},{value:"inherited",id:"inherited",children:[]},{value:"inverseJoinColumns",id:"inversejoincolumns",children:[]},{value:"inversedBy",id:"inversedby",children:[]},{value:"items",id:"items",children:[]},{value:"joinColumns",id:"joincolumns",children:[]},{value:"lazy",id:"lazy",children:[]},{value:"length",id:"length",children:[]},{value:"mapToPk",id:"maptopk",children:[]},{value:"mappedBy",id:"mappedby",children:[]},{value:"name",id:"name",children:[]},{value:"nullable",id:"nullable",children:[]},{value:"object",id:"object",children:[]},{value:"onCreate",id:"oncreate",children:[]},{value:"onDelete",id:"ondelete",children:[]},{value:"onUpdate",id:"onupdate",children:[]},{value:"onUpdateIntegrity",id:"onupdateintegrity",children:[]},{value:"orderBy",id:"orderby",children:[]},{value:"orphanRemoval",id:"orphanremoval",children:[]},{value:"owner",id:"owner",children:[]},{value:"persist",id:"persist",children:[]},{value:"pivotTable",id:"pivottable",children:[]},{value:"prefix",id:"prefix",children:[]},{value:"primary",id:"primary",children:[]},{value:"reference",id:"reference",children:[]},{value:"referencedColumnNames",id:"referencedcolumnnames",children:[]},{value:"referencedPKs",id:"referencedpks",children:[]},{value:"referencedTableName",id:"referencedtablename",children:[]},{value:"serializedName",id:"serializedname",children:[]},{value:"serializedPrimaryKey",id:"serializedprimarykey",children:[]},{value:"serializer",id:"serializer",children:[]},{value:"setter",id:"setter",children:[]},{value:"strategy",id:"strategy",children:[]},{value:"targetMeta",id:"targetmeta",children:[]},{value:"type",id:"type",children:[]},{value:"unique",id:"unique",children:[]},{value:"unsigned",id:"unsigned",children:[]},{value:"userDefined",id:"userdefined",children:[]},{value:"version",id:"version",children:[]},{value:"wrappedReference",id:"wrappedreference",children:[]}]}],o={toc:i};function m(e){var t=e.components,r=Object(b.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-entitypropertyt"},"Interface: EntityProperty<T",">"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".EntityProperty"),Object(a.b)("h2",{id:"type-parameters"},"Type parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Name"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Default"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"T")),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(a.b)("em",{parentName:"a"},"AnyEntity")),"<T",">"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("em",{parentName:"td"},"any"))))),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"EntityProperty"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"array"},"array"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"array"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L135"},"packages/core/src/typings.ts:135")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"cascade"},"cascade"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"cascade"),": ",Object(a.b)("a",{parentName:"p",href:"/docs/api/enums/core.cascade"},Object(a.b)("em",{parentName:"a"},"Cascade")),"[]"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L164"},"packages/core/src/typings.ts:164")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"columntypes"},"columnTypes"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"columnTypes"),": ",Object(a.b)("em",{parentName:"p"},"string"),"[]"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L130"},"packages/core/src/typings.ts:130")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"comment"},"comment"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"comment"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L185"},"packages/core/src/typings.ts:185")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"customtype"},"customType"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"customType"),": ",Object(a.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},Object(a.b)("em",{parentName:"a"},"Type")),"<",Object(a.b)("em",{parentName:"p"},"any"),", ",Object(a.b)("em",{parentName:"p"},"any"),">"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L131"},"packages/core/src/typings.ts:131")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"default"},"default"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"default"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"null")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L141"},"packages/core/src/typings.ts:141")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"defaultraw"},"defaultRaw"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"defaultRaw"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L142"},"packages/core/src/typings.ts:142")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"eager"},"eager"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"eager"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L160"},"packages/core/src/typings.ts:160")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"embeddable"},"embeddable"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"embeddable"),": ",Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/core#constructor"},Object(a.b)("em",{parentName:"a"},"Constructor")),"<T",">"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L146"},"packages/core/src/typings.ts:146")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"embedded"},"embedded"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"embedded"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ","[",Object(a.b)("em",{parentName:"p"},"string"),", ",Object(a.b)("em",{parentName:"p"},"string"),"]"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L145"},"packages/core/src/typings.ts:145")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"embeddedprops"},"embeddedProps"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"embeddedProps"),": ",Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(a.b)("em",{parentName:"a"},"Dictionary")),"<",Object(a.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(a.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(a.b)("em",{parentName:"p"},"any"),">",">"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L147"},"packages/core/src/typings.ts:147")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"entity"},"entity"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"entity"),": () => ",Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/core#entityname"},Object(a.b)("em",{parentName:"a"},"EntityName")),"<T",">"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L127"},"packages/core/src/typings.ts:127")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"enum"},"enum"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"enum"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L157"},"packages/core/src/typings.ts:157")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"fieldnameraw"},"fieldNameRaw"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"fieldNameRaw"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L140"},"packages/core/src/typings.ts:140")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"fieldnames"},"fieldNames"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"fieldNames"),": ",Object(a.b)("em",{parentName:"p"},"string"),"[]"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L139"},"packages/core/src/typings.ts:139")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"fixedorder"},"fixedOrder"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"fixedOrder"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L175"},"packages/core/src/typings.ts:175")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"fixedordercolumn"},"fixedOrderColumn"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"fixedOrderColumn"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L176"},"packages/core/src/typings.ts:176")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"formula"},"formula"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"formula"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(a.b)("inlineCode",{parentName:"p"},"alias"),": ",Object(a.b)("em",{parentName:"p"},"string"),") => ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L143"},"packages/core/src/typings.ts:143")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"getter"},"getter"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"getter"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L162"},"packages/core/src/typings.ts:162")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"gettername"},"getterName"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"getterName"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," keyof T"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L163"},"packages/core/src/typings.ts:163")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"hidden"},"hidden"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"hidden"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L156"},"packages/core/src/typings.ts:156")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"index"},"index"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"index"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L149"},"packages/core/src/typings.ts:149")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"inherited"},"inherited"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"inherited"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L152"},"packages/core/src/typings.ts:152")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"inversejoincolumns"},"inverseJoinColumns"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"inverseJoinColumns"),": ",Object(a.b)("em",{parentName:"p"},"string"),"[]"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L179"},"packages/core/src/typings.ts:179")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"inversedby"},"inversedBy"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"inversedBy"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L172"},"packages/core/src/typings.ts:172")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"items"},"items"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"items"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(a.b)("em",{parentName:"p"},"string")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number"),")[]"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L158"},"packages/core/src/typings.ts:158")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"joincolumns"},"joinColumns"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"joinColumns"),": ",Object(a.b)("em",{parentName:"p"},"string"),"[]"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L178"},"packages/core/src/typings.ts:178")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"lazy"},"lazy"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"lazy"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L134"},"packages/core/src/typings.ts:134")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"length"},"length"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"length"),": ",Object(a.b)("em",{parentName:"p"},"any")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L136"},"packages/core/src/typings.ts:136")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"maptopk"},"mapToPk"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"mapToPk"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L154"},"packages/core/src/typings.ts:154")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"mappedby"},"mappedBy"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"mappedBy"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L173"},"packages/core/src/typings.ts:173")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"name"},"name"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"name"),": ",Object(a.b)("em",{parentName:"p"},"string")," & keyof T"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L126"},"packages/core/src/typings.ts:126")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"nullable"},"nullable"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"nullable"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L151"},"packages/core/src/typings.ts:151")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"object"},"object"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"object"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L148"},"packages/core/src/typings.ts:148")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"oncreate"},"onCreate"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"onCreate"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(a.b)("inlineCode",{parentName:"p"},"entity"),": T) => ",Object(a.b)("em",{parentName:"p"},"any")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L166"},"packages/core/src/typings.ts:166")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"ondelete"},"onDelete"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"onDelete"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L168"},"packages/core/src/typings.ts:168")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"onupdate"},"onUpdate"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"onUpdate"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(a.b)("inlineCode",{parentName:"p"},"entity"),": T) => ",Object(a.b)("em",{parentName:"p"},"any")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L167"},"packages/core/src/typings.ts:167")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"onupdateintegrity"},"onUpdateIntegrity"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"onUpdateIntegrity"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L169"},"packages/core/src/typings.ts:169")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"orderby"},"orderBy"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"orderBy"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," { ","[field: string]",": ",Object(a.b)("a",{parentName:"p",href:"/docs/api/enums/core.queryorder"},Object(a.b)("em",{parentName:"a"},"QueryOrder")),";  }"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L174"},"packages/core/src/typings.ts:174")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"orphanremoval"},"orphanRemoval"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"orphanRemoval"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L165"},"packages/core/src/typings.ts:165")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"owner"},"owner"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"owner"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L171"},"packages/core/src/typings.ts:171")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"persist"},"persist"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"persist"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L155"},"packages/core/src/typings.ts:155")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"pivottable"},"pivotTable"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"pivotTable"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L177"},"packages/core/src/typings.ts:177")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"prefix"},"prefix"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"prefix"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L144"},"packages/core/src/typings.ts:144")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"primary"},"primary"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"primary"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L132"},"packages/core/src/typings.ts:132")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"reference"},"reference"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"reference"),": ",Object(a.b)("a",{parentName:"p",href:"/docs/api/enums/core.referencetype"},Object(a.b)("em",{parentName:"a"},"ReferenceType"))),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L137"},"packages/core/src/typings.ts:137")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"referencedcolumnnames"},"referencedColumnNames"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"referencedColumnNames"),": ",Object(a.b)("em",{parentName:"p"},"string"),"[]"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L180"},"packages/core/src/typings.ts:180")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"referencedpks"},"referencedPKs"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"referencedPKs"),": ",Object(a.b)("em",{parentName:"p"},"string"),"[]"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L182"},"packages/core/src/typings.ts:182")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"referencedtablename"},"referencedTableName"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"referencedTableName"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L181"},"packages/core/src/typings.ts:181")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"serializedname"},"serializedName"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"serializedName"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L184"},"packages/core/src/typings.ts:184")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"serializedprimarykey"},"serializedPrimaryKey"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"serializedPrimaryKey"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L133"},"packages/core/src/typings.ts:133")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"serializer"},"serializer"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"serializer"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(a.b)("inlineCode",{parentName:"p"},"value"),": ",Object(a.b)("em",{parentName:"p"},"any"),") => ",Object(a.b)("em",{parentName:"p"},"any")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L183"},"packages/core/src/typings.ts:183")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"setter"},"setter"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"setter"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L161"},"packages/core/src/typings.ts:161")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"strategy"},"strategy"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"strategy"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("a",{parentName:"p",href:"/docs/api/enums/core.loadstrategy#select_in"},Object(a.b)("em",{parentName:"a"},"SELECT","_","IN"))," ","|"," ",Object(a.b)("a",{parentName:"p",href:"/docs/api/enums/core.loadstrategy#joined"},Object(a.b)("em",{parentName:"a"},"JOINED"))),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L170"},"packages/core/src/typings.ts:170")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"targetmeta"},"targetMeta"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"targetMeta"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(a.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(a.b)("em",{parentName:"p"},"any"),">"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L129"},"packages/core/src/typings.ts:129")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"type"},"type"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"type"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L128"},"packages/core/src/typings.ts:128")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"unique"},"unique"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"unique"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L150"},"packages/core/src/typings.ts:150")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"unsigned"},"unsigned"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"unsigned"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L153"},"packages/core/src/typings.ts:153")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"userdefined"},"userDefined"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"userDefined"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L186"},"packages/core/src/typings.ts:186")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"version"},"version"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"version"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L159"},"packages/core/src/typings.ts:159")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"wrappedreference"},"wrappedReference"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"wrappedReference"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L138"},"packages/core/src/typings.ts:138")))}m.isMDXComponent=!0}}]);