(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32068],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return g}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(r),g=n,u=m["".concat(p,".").concat(g)]||m[g]||c[g]||o;return r?a.createElement(u,l(l({ref:t},d),{},{components:r})):a.createElement(u,l({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78055:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var a=r(74034),n=r(79973),o=(r(67294),r(3905)),l={id:"core.logger",title:"Class: Logger",sidebar_label:"Logger",custom_edit_url:null},i={unversionedId:"api/classes/core.logger",id:"api/classes/core.logger",isDocsHomePage:!1,title:"Class: Logger",description:"core.Logger",source:"@site/docs/api/classes/core.logger.md",sourceDirName:"api/classes",slug:"/api/classes/core.logger",permalink:"/docs/next/api/classes/core.logger",editUrl:null,version:"current",sidebar_label:"Logger",frontMatter:{id:"core.logger",title:"Class: Logger",sidebar_label:"Logger",custom_edit_url:null},sidebar:"API",previous:{title:"Class: LockWaitTimeoutException",permalink:"/docs/next/api/classes/core.lockwaittimeoutexception"},next:{title:"Class: MemoryCacheAdapter",permalink:"/docs/next/api/classes/core.memorycacheadapter"}},p=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"debugMode",id:"debugmode",children:[]}]},{value:"Methods",id:"methods",children:[{value:"isEnabled",id:"isenabled",children:[]},{value:"log",id:"log",children:[]},{value:"setDebugMode",id:"setdebugmode",children:[]}]}],s={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".Logger"),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"new Logger"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"logger"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"debugMode?"),")"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"logger")),(0,o.kt)("td",{parentName:"tr",align:"left"},"(",(0,o.kt)("inlineCode",{parentName:"td"},"message"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,o.kt)("inlineCode",{parentName:"td"},"void")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"debugMode")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#loggernamespace"},"LoggerNamespace"),"[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false")))),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/core/src/utils/Logger.ts#L3"},"packages/core/src/utils/Logger.ts:3")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"debugmode"},"debugMode"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"debugMode"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#loggernamespace"},"LoggerNamespace"),"[] = false"),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"isenabled"},"isEnabled"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"isEnabled"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"namespace"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"namespace")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#loggernamespace"},"LoggerNamespace"))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/core/src/utils/Logger.ts#L28"},"packages/core/src/utils/Logger.ts:28")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"log"},"log"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"log"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"namespace"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("p",null,"Logs a message inside given namespace."),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"namespace")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#loggernamespace"},"LoggerNamespace"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"message")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))))),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/core/src/utils/Logger.ts#L11"},"packages/core/src/utils/Logger.ts:11")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"setdebugmode"},"setDebugMode"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"setDebugMode"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"debugMode"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("p",null,"Sets active namespaces. Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to enable all logging."),(0,o.kt)("h4",{id:"parameters-3"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"debugMode")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#loggernamespace"},"LoggerNamespace"),"[]")))),(0,o.kt)("h4",{id:"returns-2"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/core/src/utils/Logger.ts#L24"},"packages/core/src/utils/Logger.ts:24")))}d.isMDXComponent=!0}}]);