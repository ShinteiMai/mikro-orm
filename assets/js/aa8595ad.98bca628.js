(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45446],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17652:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return s}});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),l={id:"knex.knex-1.withschema",title:"Interface: WithSchema<TRecord, TResult>",sidebar_label:"WithSchema",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/knex.knex-1.withschema",id:"version-4.5/api/interfaces/knex.knex-1.withschema",isDocsHomePage:!1,title:"Interface: WithSchema<TRecord, TResult\\>",description:"knex.Knex.WithSchema",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.withschema.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.withschema",permalink:"/docs/api/interfaces/knex.knex-1.withschema",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1620837717,formattedLastUpdatedAt:"5/12/2021",sidebar_label:"WithSchema",frontMatter:{id:"knex.knex-1.withschema",title:"Interface: WithSchema<TRecord, TResult>",sidebar_label:"WithSchema",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: WithRaw<TRecord, TResult\\>",permalink:"/docs/api/interfaces/knex.knex-1.withraw"},next:{title:"Interface: WithWrapped<TRecord, TResult\\>",permalink:"/docs/api/interfaces/knex.knex-1.withwrapped"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Callable",id:"callable",children:[]}],c={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".WithSchema"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TRecord")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TResult")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"unknown"),"[]")))),(0,i.kt)("h2",{id:"callable"},"Callable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"WithSchema"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"schema"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,i.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"schema")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,i.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1196"))}s.isMDXComponent=!0}}]);