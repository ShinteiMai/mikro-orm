(window.webpackJsonp=window.webpackJsonp||[]).push([[600],{1256:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,d=u["".concat(a,".").concat(m)]||u[m]||s[m]||c;return r?o.a.createElement(d,i(i({ref:t},l),{},{components:r})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},670:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),c=(r(0),r(1256)),a={id:"core.edge",title:"Interface: Edge",sidebar_label:"Edge",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/core.edge",id:"api/interfaces/core.edge",isDocsHomePage:!1,title:"Interface: Edge",description:"Interface: Edge",source:"@site/docs/api/interfaces/core.edge.md",slug:"/api/interfaces/core.edge",permalink:"/docs/next/api/interfaces/core.edge",editUrl:null,version:"current",sidebar_label:"Edge",sidebar:"API",previous:{title:"Interface: DeleteOptions<T>",permalink:"/docs/next/api/interfaces/core.deleteoptions"},next:{title:"Interface: EntityProperty<T>",permalink:"/docs/next/api/interfaces/core.entityproperty"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"from",id:"from",children:[]},{value:"to",id:"to",children:[]},{value:"weight",id:"weight",children:[]}]}],l={toc:p};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-edge"},"Interface: Edge"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".Edge"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Edge"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"from"},"from"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"from"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L17"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:17")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"to"},"to"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"to"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L18"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:18")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"weight"},"weight"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"weight"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b20e441/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L19"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:19")))}b.isMDXComponent=!0}}]);