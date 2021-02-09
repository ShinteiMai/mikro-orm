(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1256:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return j}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),s=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),l=s(n),m=a,j=l["".concat(o,".").concat(m)]||l[m]||O[m]||r;return n?c.a.createElement(j,i(i({ref:t},p),{},{components:n})):c.a.createElement(j,i({ref:t},p))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},290:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),c=n(7),r=(n(0),n(1256)),o={id:"core.notnullconstraintviolationexception",title:"Class: NotNullConstraintViolationException",sidebar_label:"NotNullConstraintViolationException",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/classes/core.notnullconstraintviolationexception",id:"api/classes/core.notnullconstraintviolationexception",isDocsHomePage:!1,title:"Class: NotNullConstraintViolationException",description:"Class: NotNullConstraintViolationException",source:"@site/docs/api/classes/core.notnullconstraintviolationexception.md",slug:"/api/classes/core.notnullconstraintviolationexception",permalink:"/docs/next/api/classes/core.notnullconstraintviolationexception",editUrl:null,version:"current",sidebar_label:"NotNullConstraintViolationException",sidebar:"API",previous:{title:"Class: NotFoundError<T>",permalink:"/docs/next/api/classes/core.notfounderror"},next:{title:"Class: NullCacheAdapter",permalink:"/docs/next/api/classes/core.nullcacheadapter"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"prepareStackTrace",id:"preparestacktrace",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]},{value:"stackTraceLimit",id:"stacktracelimit",children:[]}]},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[]}]}],p={toc:b};function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"class-notnullconstraintviolationexception"},"Class: NotNullConstraintViolationException"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".NotNullConstraintViolationException"),Object(r.b)("p",null,"Exception for a NOT NULL constraint violation detected in the driver."),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception"}),Object(r.b)("em",{parentName:"a"},"ConstraintViolationException"))),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("strong",{parentName:"p"},"NotNullConstraintViolationException")))),Object(r.b)("h2",{id:"constructors"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new NotNullConstraintViolationException"),"(",Object(r.b)("inlineCode",{parentName:"p"},"previous"),": Error): ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.notnullconstraintviolationexception"}),Object(r.b)("em",{parentName:"a"},"NotNullConstraintViolationException"))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"previous")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Error")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.notnullconstraintviolationexception"}),Object(r.b)("em",{parentName:"a"},"NotNullConstraintViolationException"))),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception"}),"ConstraintViolationException")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10")),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"code"},"code"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"code"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception"}),"ConstraintViolationException"),".",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception#code"}),"code")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/exceptions.ts#L6"}),"packages/core/src/exceptions.ts:6")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"errmsg"},"errmsg"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"errmsg"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception"}),"ConstraintViolationException"),".",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception#errmsg"}),"errmsg")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"errno"},"errno"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"errno"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception"}),"ConstraintViolationException"),".",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception#errno"}),"errno")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/exceptions.ts#L7"}),"packages/core/src/exceptions.ts:7")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"message"},"message"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"message"),": ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception"}),"ConstraintViolationException"),".",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception#message"}),"message")),Object(r.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"name"},"name"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"name"),": ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception"}),"ConstraintViolationException"),".",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception#name"}),"name")),Object(r.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"preparestacktrace"},"prepareStackTrace"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"prepareStackTrace"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(r.b)("inlineCode",{parentName:"p"},"err"),": Error, ",Object(r.b)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Optional override for formatting stack traces"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces"}),"https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception"}),"ConstraintViolationException"),".",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception#preparestacktrace"}),"prepareStackTrace")),Object(r.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"sqlmessage"},"sqlMessage"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"sqlMessage"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception"}),"ConstraintViolationException"),".",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception#sqlmessage"}),"sqlMessage")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/exceptions.ts#L9"}),"packages/core/src/exceptions.ts:9")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"sqlstate"},"sqlState"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"sqlState"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception"}),"ConstraintViolationException"),".",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception#sqlstate"}),"sqlState")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/exceptions.ts#L8"}),"packages/core/src/exceptions.ts:8")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"stack"},"stack"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"stack"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception"}),"ConstraintViolationException"),".",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception#stack"}),"stack")),Object(r.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"stacktracelimit"},"stackTraceLimit"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"stackTraceLimit"),": ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception"}),"ConstraintViolationException"),".",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception#stacktracelimit"}),"stackTraceLimit")),Object(r.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"capturestacktrace"},"captureStackTrace"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"captureStackTrace"),"(",Object(r.b)("inlineCode",{parentName:"p"},"targetObject"),": ",Object(r.b)("em",{parentName:"p"},"object"),", ",Object(r.b)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Create .stack property on a target object"),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"targetObject")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"object"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"constructorOpt?")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.constraintviolationexception"}),"ConstraintViolationException")),Object(r.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}s.isMDXComponent=!0}}]);