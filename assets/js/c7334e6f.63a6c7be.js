(window.webpackJsonp=window.webpackJsonp||[]).push([[907],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),l=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=l(a),O=n,j=s["".concat(b,".").concat(O)]||s[O]||m[O]||c;return a?r.a.createElement(j,o(o({ref:t},i),{},{components:a})):r.a.createElement(j,o({ref:t},i))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=O;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var i=2;i<c;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},977:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),c=(a(0),a(1256)),b={id:"core.changeset",title:"Class: ChangeSet<T>",sidebar_label:"ChangeSet",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/classes/core.changeset",id:"api/classes/core.changeset",isDocsHomePage:!1,title:"Class: ChangeSet<T>",description:"Class: ChangeSet",source:"@site/docs/api/classes/core.changeset.md",slug:"/api/classes/core.changeset",permalink:"/docs/next/api/classes/core.changeset",editUrl:null,version:"current",sidebar_label:"ChangeSet",sidebar:"API",previous:{title:"Class: BlobType",permalink:"/docs/next/api/classes/core.blobtype"},next:{title:"Class: ChangeSetComputer",permalink:"/docs/next/api/classes/core.changesetcomputer"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"collection",id:"collection",children:[]},{value:"entity",id:"entity",children:[]},{value:"name",id:"name",children:[]},{value:"originalEntity",id:"originalentity",children:[]},{value:"payload",id:"payload",children:[]},{value:"persisted",id:"persisted",children:[]},{value:"rootName",id:"rootname",children:[]},{value:"type",id:"type",children:[]}]}],i={toc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-changesett"},"Class: ChangeSet<T",">"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".ChangeSet"),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"T")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(c.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"ChangeSet"))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new ChangeSet"),"<T",">","(",Object(c.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(c.b)("inlineCode",{parentName:"p"},"type"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/enums/core.changesettype"}),Object(c.b)("em",{parentName:"a"},"ChangeSetType")),", ",Object(c.b)("inlineCode",{parentName:"p"},"payload"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(c.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(c.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">","): ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.changeset"}),Object(c.b)("em",{parentName:"a"},"ChangeSet")),"<T",">"),Object(c.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"T")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(c.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"entity")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"type")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/enums/core.changesettype"}),Object(c.b)("em",{parentName:"a"},"ChangeSetType")))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"payload")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#entitydata"}),Object(c.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"meta")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.changeset"}),Object(c.b)("em",{parentName:"a"},"ChangeSet")),"<T",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/core/src/unit-of-work/ChangeSet.ts#L3"}),"packages/core/src/unit-of-work/ChangeSet.ts:3")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"collection"},"collection"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"collection"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/core/src/unit-of-work/ChangeSet.ts#L19"}),"packages/core/src/unit-of-work/ChangeSet.ts:19")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"entity"},"entity"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"entity"),": T"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/core/src/unit-of-work/ChangeSet.ts#L21"}),"packages/core/src/unit-of-work/ChangeSet.ts:21")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/core/src/unit-of-work/ChangeSet.ts#L17"}),"packages/core/src/unit-of-work/ChangeSet.ts:17")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"originalentity"},"originalEntity"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"originalEntity"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(c.b)("em",{parentName:"a"},"EntityData")),"<T",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/core/src/unit-of-work/ChangeSet.ts#L24"}),"packages/core/src/unit-of-work/ChangeSet.ts:24")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"payload"},"payload"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"payload"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(c.b)("em",{parentName:"a"},"EntityData")),"<T",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/core/src/unit-of-work/ChangeSet.ts#L22"}),"packages/core/src/unit-of-work/ChangeSet.ts:22")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"persisted"},"persisted"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"persisted"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/core/src/unit-of-work/ChangeSet.ts#L23"}),"packages/core/src/unit-of-work/ChangeSet.ts:23")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"rootname"},"rootName"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"rootName"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/core/src/unit-of-work/ChangeSet.ts#L18"}),"packages/core/src/unit-of-work/ChangeSet.ts:18")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"type"},"type"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"type"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/enums/core.changesettype"}),Object(c.b)("em",{parentName:"a"},"ChangeSetType"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/core/src/unit-of-work/ChangeSet.ts#L20"}),"packages/core/src/unit-of-work/ChangeSet.ts:20")))}l.isMDXComponent=!0}}]);