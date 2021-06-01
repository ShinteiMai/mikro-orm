(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53048],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),m=p(n),k=r,u=m["".concat(s,".").concat(k)]||m[k]||c[k]||i;return n?a.createElement(u,o(o({ref:e},d),{},{components:n})):a.createElement(u,o({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15217:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),o={id:"core.entityassigner",title:"Class: EntityAssigner",sidebar_label:"EntityAssigner",custom_edit_url:null},l={unversionedId:"api/classes/core.entityassigner",id:"api/classes/core.entityassigner",isDocsHomePage:!1,title:"Class: EntityAssigner",description:"core.EntityAssigner",source:"@site/docs/api/classes/core.entityassigner.md",sourceDirName:"api/classes",slug:"/api/classes/core.entityassigner",permalink:"/docs/next/api/classes/core.entityassigner",editUrl:null,version:"current",sidebar_label:"EntityAssigner",frontMatter:{id:"core.entityassigner",title:"Class: EntityAssigner",sidebar_label:"EntityAssigner",custom_edit_url:null},sidebar:"API",previous:{title:"Class: DriverException",permalink:"/docs/next/api/classes/core.driverexception"},next:{title:"Class: EntityCaseNamingStrategy",permalink:"/docs/next/api/classes/core.entitycasenamingstrategy"}},s=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]}]}],p={toc:s};function d(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".EntityAssigner"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new EntityAssigner"),"()"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"assign"},"assign"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"assign"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"),": ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#anyentity"},"AnyEntity"),"<T",">")))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#entitydata"},"EntityData"),"<T",">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#entitydto"},"EntityDTO"),"<T",">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.assignoptions"},"AssignOptions"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/core/src/entity/EntityAssigner.ts#L15"},"packages/core/src/entity/EntityAssigner.ts:15")),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"assign"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onlyProperties?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"),": ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#anyentity"},"AnyEntity"),"<T",">")))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#entitydata"},"EntityData"),"<T",">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#entitydto"},"EntityDTO"),"<T",">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onlyProperties?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/25f3053/packages/core/src/entity/EntityAssigner.ts#L16"},"packages/core/src/entity/EntityAssigner.ts:16")))}d.isMDXComponent=!0}}]);