(window.webpackJsonp=window.webpackJsonp||[]).push([[576],{1256:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),o=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},l=function(e){var t=o(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=o(n),d=a,u=l["".concat(c,".").concat(d)]||l[d]||m[d]||i;return n?r.a.createElement(u,b(b({ref:t},s),{},{components:n})):r.a.createElement(u,b({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},646:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),i=(n(0),n(1256)),c={id:"knex.issame",title:"Interface: IsSame",sidebar_label:"IsSame",hide_title:!0},b={unversionedId:"api/interfaces/knex.issame",id:"version-4.4/api/interfaces/knex.issame",isDocsHomePage:!1,title:"Interface: IsSame",description:"Interface: IsSame",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.issame.md",slug:"/api/interfaces/knex.issame",permalink:"/docs/api/interfaces/knex.issame",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.issame.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612880313,sidebar_label:"IsSame",sidebar:"version-4.4/API",previous:{title:"Interface: IndexDef",permalink:"/docs/api/interfaces/knex.indexdef"},next:{title:"Interface: JoinOptions",permalink:"/docs/api/interfaces/knex.joinoptions"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"all",id:"all",children:[]},{value:"sameDefault",id:"samedefault",children:[]},{value:"sameEnums",id:"sameenums",children:[]},{value:"sameIndex",id:"sameindex",children:[]},{value:"sameNullable",id:"samenullable",children:[]},{value:"sameTypes",id:"sametypes",children:[]}]}],s={toc:p};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-issame"},"Interface: IsSame"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".IsSame"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"IsSame"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"all"},"all"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"all"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L77"}),"packages/knex/src/typings.ts:77")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"samedefault"},"sameDefault"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"sameDefault"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L80"}),"packages/knex/src/typings.ts:80")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"sameenums"},"sameEnums"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"sameEnums"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L82"}),"packages/knex/src/typings.ts:82")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"sameindex"},"sameIndex"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"sameIndex"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L81"}),"packages/knex/src/typings.ts:81")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"samenullable"},"sameNullable"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"sameNullable"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L79"}),"packages/knex/src/typings.ts:79")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"sametypes"},"sameTypes"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"sameTypes"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L78"}),"packages/knex/src/typings.ts:78")))}o.isMDXComponent=!0}}]);