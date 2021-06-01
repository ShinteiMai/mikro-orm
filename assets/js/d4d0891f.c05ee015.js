(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70428],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),s=p(a),c=r,f=s["".concat(o,".").concat(c)]||s[c]||k[c]||i;return a?n.createElement(f,l(l({ref:t},d),{},{components:a})):n.createElement(f,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,l[1]=m;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},88875:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return m},toc:function(){return o},default:function(){return d}});var n=a(74034),r=a(79973),i=(a(67294),a(3905)),l={id:"knex.schemacomparator",title:"Class: SchemaComparator",sidebar_label:"SchemaComparator",custom_edit_url:null},m={unversionedId:"api/classes/knex.schemacomparator",id:"api/classes/knex.schemacomparator",isDocsHomePage:!1,title:"Class: SchemaComparator",description:"knex.SchemaComparator",source:"@site/docs/api/classes/knex.schemacomparator.md",sourceDirName:"api/classes",slug:"/api/classes/knex.schemacomparator",permalink:"/docs/next/api/classes/knex.schemacomparator",editUrl:null,version:"current",sidebar_label:"SchemaComparator",frontMatter:{id:"knex.schemacomparator",title:"Class: SchemaComparator",sidebar_label:"SchemaComparator",custom_edit_url:null},sidebar:"API",previous:{title:"Class: QueryBuilder<T>",permalink:"/docs/next/api/classes/knex.querybuilder"},next:{title:"Class: SchemaGenerator",permalink:"/docs/next/api/classes/knex.schemagenerator"}},o=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"compare",id:"compare",children:[]},{value:"diffColumn",id:"diffcolumn",children:[]},{value:"diffComment",id:"diffcomment",children:[]},{value:"diffForeignKey",id:"diffforeignkey",children:[]},{value:"diffIndex",id:"diffindex",children:[]},{value:"diffTable",id:"difftable",children:[]},{value:"hasSameDefaultValue",id:"hassamedefaultvalue",children:[]},{value:"isIndexFulfilledBy",id:"isindexfulfilledby",children:[]}]}],p={toc:o};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".SchemaComparator"),(0,i.kt)("p",null,"Compares two Schemas and return an instance of SchemaDifference."),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new SchemaComparator"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"platform"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"platform")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/knex.abstractsqlplatform"},"AbstractSqlPlatform"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/knex/src/schema/SchemaComparator.ts#L12"},"packages/knex/src/schema/SchemaComparator.ts:12")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"compare"},"compare"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"compare"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"fromSchema"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"toSchema"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.schemadifference"},"SchemaDifference")),(0,i.kt)("p",null,"Returns a SchemaDifference object containing the differences between the schemas fromSchema and toSchema."),(0,i.kt)("p",null,"The returned differences are returned in such a way that they contain the\noperations to change the schema stored in fromSchema to the schema that is\nstored in toSchema."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fromSchema")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"DatabaseSchema"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"toSchema")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"DatabaseSchema"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.schemadifference"},"SchemaDifference")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/knex/src/schema/SchemaComparator.ts#L23"},"packages/knex/src/schema/SchemaComparator.ts:23")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"diffcolumn"},"diffColumn"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"diffColumn"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"column1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"column2"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Set"),"<string",">"),(0,i.kt)("p",null,"Returns the difference between the columns\nIf there are differences this method returns field2, otherwise the boolean false."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"column1")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.column"},"Column"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"column2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.column"},"Column"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Set"),"<string",">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/knex/src/schema/SchemaComparator.ts#L337"},"packages/knex/src/schema/SchemaComparator.ts:337")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"diffcomment"},"diffComment"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"diffComment"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"comment1?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"comment2?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"comment1?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"comment2?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/knex/src/schema/SchemaComparator.ts#L371"},"packages/knex/src/schema/SchemaComparator.ts:371")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"diffforeignkey"},"diffForeignKey"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"diffForeignKey"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"key1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key2"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key1")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.foreignkey"},"ForeignKey"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.foreignkey"},"ForeignKey"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/knex/src/schema/SchemaComparator.ts#L314"},"packages/knex/src/schema/SchemaComparator.ts:314")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"diffindex"},"diffIndex"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"diffIndex"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"index1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"index2"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Finds the difference between the indexes index1 and index2.\nCompares index1 with index2 and returns index2 if there are any differences or false in case there are no differences."),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"index1")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.index"},"Index"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"index2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.index"},"Index"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/knex/src/schema/SchemaComparator.ts#L381"},"packages/knex/src/schema/SchemaComparator.ts:381")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"difftable"},"diffTable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"diffTable"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"fromTable"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"toTable"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.tabledifference"},"TableDifference")),(0,i.kt)("p",null,"Returns the difference between the tables fromTable and toTable.\nIf there are no differences this method returns the boolean false."),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fromTable")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"DatabaseTable"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"toTable")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"DatabaseTable"))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"false")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.tabledifference"},"TableDifference")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/knex/src/schema/SchemaComparator.ts#L109"},"packages/knex/src/schema/SchemaComparator.ts:109")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hassamedefaultvalue"},"hasSameDefaultValue"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"hasSameDefaultValue"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"from"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"to"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-7"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"from")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.column"},"Column"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"to")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.column"},"Column"))))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/knex/src/schema/SchemaComparator.ts#L422"},"packages/knex/src/schema/SchemaComparator.ts:422")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isindexfulfilledby"},"isIndexFulfilledBy"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isIndexFulfilledBy"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"index1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"index2"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Checks if the other index already fulfills all the indexing and constraint needs of the current one."),(0,i.kt)("h4",{id:"parameters-8"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"index1")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.index"},"Index"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"index2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.index"},"Index"))))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/knex/src/schema/SchemaComparator.ts#L388"},"packages/knex/src/schema/SchemaComparator.ts:388")))}d.isMDXComponent=!0}}]);