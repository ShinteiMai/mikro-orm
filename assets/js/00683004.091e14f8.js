(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1256:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),s=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),l=s(n),O=r,u=l["".concat(p,".").concat(O)]||l[O]||m[O]||i;return n?a.a.createElement(u,c(c({ref:t},o),{},{components:n})):a.a.createElement(u,c({ref:t},o))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=O;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var o=2;o<i;o++)p[o]=n[o];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(1256)),p={id:"knex.joinoptions",title:"Interface: JoinOptions",sidebar_label:"JoinOptions",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/knex.joinoptions",id:"api/interfaces/knex.joinoptions",isDocsHomePage:!1,title:"Interface: JoinOptions",description:"Interface: JoinOptions",source:"@site/docs/api/interfaces/knex.joinoptions.md",slug:"/api/interfaces/knex.joinoptions",permalink:"/docs/next/api/interfaces/knex.joinoptions",editUrl:null,version:"current",sidebar_label:"JoinOptions",sidebar:"API",previous:{title:"Interface: IsSame",permalink:"/docs/next/api/interfaces/knex.issame"},next:{title:"Interface: Knex<TRecord, TResult>",permalink:"/docs/next/api/interfaces/knex.knex-2"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"alias",id:"alias",children:[]},{value:"cond",id:"cond",children:[]},{value:"inverseAlias",id:"inversealias",children:[]},{value:"inverseJoinColumns",id:"inversejoincolumns",children:[]},{value:"joinColumns",id:"joincolumns",children:[]},{value:"ownerAlias",id:"owneralias",children:[]},{value:"path",id:"path",children:[]},{value:"primaryKeys",id:"primarykeys",children:[]},{value:"prop",id:"prop",children:[]},{value:"table",id:"table",children:[]},{value:"type",id:"type",children:[]}]}],o={toc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-joinoptions"},"Interface: JoinOptions"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/knex"}),"knex"),".JoinOptions"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"JoinOptions"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"alias"},"alias"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"alias"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/knex/src/typings.ts#L19"}),"packages/knex/src/typings.ts:19")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"cond"},"cond"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"cond"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core#dictionary"}),Object(i.b)("em",{parentName:"a"},"Dictionary")),"<",Object(i.b)("em",{parentName:"p"},"any"),">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/knex/src/typings.ts#L27"}),"packages/knex/src/typings.ts:27")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"inversealias"},"inverseAlias"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"inverseAlias"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/knex/src/typings.ts#L21"}),"packages/knex/src/typings.ts:21")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"inversejoincolumns"},"inverseJoinColumns"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"inverseJoinColumns"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string"),"[]"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/knex/src/typings.ts#L23"}),"packages/knex/src/typings.ts:23")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"joincolumns"},"joinColumns"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"joinColumns"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string"),"[]"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/knex/src/typings.ts#L22"}),"packages/knex/src/typings.ts:22")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"owneralias"},"ownerAlias"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"ownerAlias"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/knex/src/typings.ts#L20"}),"packages/knex/src/typings.ts:20")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"path"},"path"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"path"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/knex/src/typings.ts#L25"}),"packages/knex/src/typings.ts:25")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"primarykeys"},"primaryKeys"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"primaryKeys"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string"),"[]"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/knex/src/typings.ts#L24"}),"packages/knex/src/typings.ts:24")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"prop"},"prop"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"prop"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(i.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(i.b)("em",{parentName:"p"},"any"),">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/knex/src/typings.ts#L26"}),"packages/knex/src/typings.ts:26")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"table"},"table"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"table"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/knex/src/typings.ts#L17"}),"packages/knex/src/typings.ts:17")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"type"},"type"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"type"),": ",Object(i.b)("em",{parentName:"p"},"leftJoin")," ","|"," ",Object(i.b)("em",{parentName:"p"},"innerJoin")," ","|"," ",Object(i.b)("em",{parentName:"p"},"pivotJoin")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/knex/src/typings.ts#L18"}),"packages/knex/src/typings.ts:18")))}s.isMDXComponent=!0}}]);