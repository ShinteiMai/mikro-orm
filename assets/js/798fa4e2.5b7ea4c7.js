(window.webpackJsonp=window.webpackJsonp||[]).push([[551],{1256:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),u=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=u(r),l=n,d=p["".concat(a,".").concat(l)]||p[l]||m[l]||c;return r?o.a.createElement(d,i(i({ref:t},b),{},{components:r})):o.a.createElement(d,i({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=l;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var b=2;b<c;b++)a[b]=r[b];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},621:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),c=(r(0),r(1256)),a={id:"core.lockmode",title:"Enumeration: LockMode",sidebar_label:"LockMode",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/enums/core.lockmode",id:"api/enums/core.lockmode",isDocsHomePage:!1,title:"Enumeration: LockMode",description:"Enumeration: LockMode",source:"@site/docs/api/enums/core.lockmode.md",slug:"/api/enums/core.lockmode",permalink:"/docs/next/api/enums/core.lockmode",editUrl:null,version:"current",sidebar_label:"LockMode",sidebar:"API",previous:{title:"Enumeration: LoadStrategy",permalink:"/docs/next/api/enums/core.loadstrategy"},next:{title:"Enumeration: NodeState",permalink:"/docs/next/api/enums/core.nodestate"}},s=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"NONE",id:"none",children:[]},{value:"OPTIMISTIC",id:"optimistic",children:[]},{value:"PESSIMISTIC_READ",id:"pessimistic_read",children:[]},{value:"PESSIMISTIC_WRITE",id:"pessimistic_write",children:[]}]}],b={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"enumeration-lockmode"},"Enumeration: LockMode"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".LockMode"),Object(c.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(c.b)("h3",{id:"none"},"NONE"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"NONE"),": = 0"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/enums.ts#L90"}),"packages/core/src/enums.ts:90")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"optimistic"},"OPTIMISTIC"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"OPTIMISTIC"),": = 1"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/enums.ts#L91"}),"packages/core/src/enums.ts:91")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"pessimistic_read"},"PESSIMISTIC","_","READ"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"PESSIMISTIC","_","READ"),": = 2"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/enums.ts#L92"}),"packages/core/src/enums.ts:92")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"pessimistic_write"},"PESSIMISTIC","_","WRITE"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"PESSIMISTIC","_","WRITE"),": = 3"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c5bbcee/packages/core/src/enums.ts#L93"}),"packages/core/src/enums.ts:93")))}u.isMDXComponent=!0}}]);