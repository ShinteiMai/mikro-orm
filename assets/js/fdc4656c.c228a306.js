(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41079],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=i(a),k=r,u=m["".concat(c,".").concat(k)]||m[k]||d[k]||o;return a?n.createElement(u,p(p({ref:t},l),{},{components:a})):n.createElement(u,p({ref:t},l))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var i=2;i<o;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89064:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var n=a(74034),r=a(79973),o=(a(67294),a(3905)),p={id:"core.tablenotfoundexception",title:"Class: TableNotFoundException",sidebar_label:"TableNotFoundException",custom_edit_url:null,hide_title:!0},s={unversionedId:"api/classes/core.tablenotfoundexception",id:"version-4.5/api/classes/core.tablenotfoundexception",isDocsHomePage:!1,title:"Class: TableNotFoundException",description:"core.TableNotFoundException",source:"@site/versioned_docs/version-4.5/api/classes/core.tablenotfoundexception.md",sourceDirName:"api/classes",slug:"/api/classes/core.tablenotfoundexception",permalink:"/docs/api/classes/core.tablenotfoundexception",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1620837717,formattedLastUpdatedAt:"5/12/2021",sidebar_label:"TableNotFoundException",frontMatter:{id:"core.tablenotfoundexception",title:"Class: TableNotFoundException",sidebar_label:"TableNotFoundException",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Class: TableExistsException",permalink:"/docs/api/classes/core.tableexistsexception"},next:{title:"Class: TimeType",permalink:"/docs/api/classes/core.timetype"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"prepareStackTrace",id:"preparestacktrace",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]},{value:"stackTraceLimit",id:"stacktracelimit",children:[]}]},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[]}]}],i={toc:c};function l(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".TableNotFoundException"),(0,o.kt)("p",null,"Exception for an unknown table referenced in a statement detected in the driver."),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},(0,o.kt)("em",{parentName:"a"},"DatabaseObjectNotFoundException"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},"TableNotFoundException")))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"+"," ",(0,o.kt)("strong",{parentName:"p"},"new TableNotFoundException"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"previous"),": Error): ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.tablenotfoundexception"},(0,o.kt)("em",{parentName:"a"},"TableNotFoundException"))),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"previous")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Error")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.tablenotfoundexception"},(0,o.kt)("em",{parentName:"a"},"TableNotFoundException"))),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"code"},"code"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"code"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#code"},"code")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L6"},"packages/core/src/exceptions.ts:6")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"errmsg"},"errmsg"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"errmsg"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#errmsg"},"errmsg")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"errno"},"errno"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"errno"),": ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#errno"},"errno")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L7"},"packages/core/src/exceptions.ts:7")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"message"},"message"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"message"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#message"},"message")),(0,o.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"name"},"name"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"name"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#name"},"name")),(0,o.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,o.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Optional override for formatting stack traces"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,o.kt)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),(0,o.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,o.kt)("p",null,"\u25b8 (",(0,o.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,o.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]): ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"err")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Error")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,o.kt)("td",{parentName:"tr",align:"left"},"CallSite[]")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#preparestacktrace"},"prepareStackTrace")),(0,o.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sqlmessage"},"sqlMessage"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"sqlMessage"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#sqlmessage"},"sqlMessage")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L9"},"packages/core/src/exceptions.ts:9")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sqlstate"},"sqlState"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"sqlState"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#sqlstate"},"sqlState")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L8"},"packages/core/src/exceptions.ts:8")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"stack"},"stack"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"stack"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#stack"},"stack")),(0,o.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception#stacktracelimit"},"stackTraceLimit")),(0,o.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"capturestacktrace"},"captureStackTrace"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"targetObject"),": ",(0,o.kt)("em",{parentName:"p"},"object"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Create .stack property on a target object"),(0,o.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"object"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"constructorOpt?")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Function")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectnotfoundexception"},"DatabaseObjectNotFoundException")),(0,o.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}l.isMDXComponent=!0}}]);