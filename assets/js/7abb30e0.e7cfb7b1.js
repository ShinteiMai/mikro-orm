(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70802],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=s(a),c=r,u=k["".concat(o,".").concat(c)]||k[c]||m[c]||p;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<p;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},82310:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return o},default:function(){return d}});var n=a(74034),r=a(79973),p=(a(67294),a(3905)),i={id:"core.biginttype",title:"Class: BigIntType",sidebar_label:"BigIntType",custom_edit_url:null},l={unversionedId:"api/classes/core.biginttype",id:"api/classes/core.biginttype",isDocsHomePage:!1,title:"Class: BigIntType",description:"core.BigIntType",source:"@site/docs/api/classes/core.biginttype.md",sourceDirName:"api/classes",slug:"/api/classes/core.biginttype",permalink:"/docs/next/api/classes/core.biginttype",editUrl:null,version:"current",sidebar_label:"BigIntType",frontMatter:{id:"core.biginttype",title:"Class: BigIntType",sidebar_label:"BigIntType",custom_edit_url:null},sidebar:"API",previous:{title:"Class: BaseEntity<T, PK, P>",permalink:"/docs/next/api/classes/core.baseentity"},next:{title:"Class: BlobType",permalink:"/docs/next/api/classes/core.blobtype"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"compareAsType",id:"compareastype",children:[]},{value:"convertToDatabaseValue",id:"converttodatabasevalue",children:[]},{value:"convertToDatabaseValueSQL",id:"converttodatabasevaluesql",children:[]},{value:"convertToJSValue",id:"converttojsvalue",children:[]},{value:"convertToJSValueSQL",id:"converttojsvaluesql",children:[]},{value:"getColumnType",id:"getcolumntype",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"getType",id:"gettype",children:[]}]}],s={toc:o};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".BigIntType"),(0,p.kt)("p",null,"This type will automatically convert string values returned from the database to native JS bigints."),(0,p.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type"),"<string ","|"," bigint ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," undefined, string ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," undefined",">"),(0,p.kt)("p",{parentName:"li"},"\u21b3 ",(0,p.kt)("strong",{parentName:"p"},"BigIntType")))),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("h3",{id:"constructor"},"constructor"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"new BigIntType"),"()"),(0,p.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type#constructor"},"constructor")),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"compareastype"},"compareAsType"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"compareAsType"),"(): ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("h4",{id:"returns"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("h4",{id:"overrides"},"Overrides"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type#compareastype"},"compareAsType")),(0,p.kt)("h4",{id:"defined-in"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/core/src/types/BigIntType.ts#L30"},"packages/core/src/types/BigIntType.ts:30")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"converttodatabasevalue"},"convertToDatabaseValue"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"convertToDatabaseValue"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,p.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("h4",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"value")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"td"},"bigint"))))),(0,p.kt)("h4",{id:"returns-1"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("h4",{id:"overrides-1"},"Overrides"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type#converttodatabasevalue"},"convertToDatabaseValue")),(0,p.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/core/src/types/BigIntType.ts#L10"},"packages/core/src/types/BigIntType.ts:10")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"converttodatabasevaluesql"},"convertToDatabaseValueSQL"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"convertToDatabaseValueSQL"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"platform"),"): ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("p",null,"Converts a value from its JS representation to its database representation of this type."),(0,p.kt)("h4",{id:"parameters-1"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"key")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"string"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"platform")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},"Platform"))))),(0,p.kt)("h4",{id:"returns-2"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type#converttodatabasevaluesql"},"convertToDatabaseValueSQL")),(0,p.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/core/src/types/Type.ts#L25"},"packages/core/src/types/Type.ts:25")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"converttojsvalue"},"convertToJSValue"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"convertToJSValue"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,p.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("h4",{id:"parameters-2"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"value")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"td"},"bigint"))))),(0,p.kt)("h4",{id:"returns-3"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("h4",{id:"overrides-2"},"Overrides"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type#converttojsvalue"},"convertToJSValue")),(0,p.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/core/src/types/BigIntType.ts#L18"},"packages/core/src/types/BigIntType.ts:18")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"converttojsvaluesql"},"convertToJSValueSQL"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"convertToJSValueSQL"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"platform"),"): ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("p",null,"Modifies the SQL expression (identifier, parameter) to convert to a JS value."),(0,p.kt)("h4",{id:"parameters-3"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"key")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"string"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"platform")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},"Platform"))))),(0,p.kt)("h4",{id:"returns-4"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type#converttojsvaluesql"},"convertToJSValueSQL")),(0,p.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/core/src/types/Type.ts#L30"},"packages/core/src/types/Type.ts:30")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getcolumntype"},"getColumnType"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getColumnType"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"prop"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"platform"),"): ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("h4",{id:"parameters-4"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"prop")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.entityproperty"},"EntityProperty"),"<any",">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"platform")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},"Platform"))))),(0,p.kt)("h4",{id:"returns-5"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("h4",{id:"overrides-3"},"Overrides"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type#getcolumntype"},"getColumnType")),(0,p.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/core/src/types/BigIntType.ts#L26"},"packages/core/src/types/BigIntType.ts:26")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"tojson"},"toJSON"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"toJSON"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"platform"),"): ",(0,p.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"bigint")),(0,p.kt)("p",null,"Converts a value from its JS representation to its serialized JSON form of this type.\nBy default uses the runtime value."),(0,p.kt)("h4",{id:"parameters-5"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"value")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"td"},"bigint"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"platform")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},"Platform"))))),(0,p.kt)("h4",{id:"returns-6"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"bigint")),(0,p.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type#tojson"},"toJSON")),(0,p.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/core/src/types/Type.ts#L44"},"packages/core/src/types/Type.ts:44")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"gettype"},"getType"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,p.kt)("strong",{parentName:"p"},"getType"),"<JSType, DBType",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"cls"),"): ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type"),"<JSType, DBType",">"),(0,p.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"JSType")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"JSType"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"DBType")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"DBType")," = ",(0,p.kt)("inlineCode",{parentName:"td"},"JSType"))))),(0,p.kt)("h4",{id:"parameters-6"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"cls")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#constructor"},"Constructor"),"<",(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.type"},"Type"),"<JSType, DBType",">",">")))),(0,p.kt)("h4",{id:"returns-7"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type"),"<JSType, DBType",">"),(0,p.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type#gettype"},"getType")),(0,p.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/core/src/types/Type.ts#L55"},"packages/core/src/types/Type.ts:55")))}d.isMDXComponent=!0}}]);