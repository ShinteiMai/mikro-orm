(window.webpackJsonp=window.webpackJsonp||[]).push([[452],{1051:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,d=u["".concat(o,".").concat(f)]||u[f]||b[f]||i;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},525:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),i=(n(0),n(1051)),o={id:"core.settings",title:"Interface: Settings",sidebar_label:"Settings",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/core.settings",id:"api/interfaces/core.settings",isDocsHomePage:!1,title:"Interface: Settings",description:"Interface: Settings",source:"@site/docs/api/interfaces/core.settings.md",slug:"/api/interfaces/core.settings",permalink:"/docs/next/api/interfaces/core.settings",editUrl:null,version:"current",sidebar_label:"Settings",sidebar:"API",previous:{title:"Interface: SerializedPrimaryKeyOptions<T>",permalink:"/docs/next/api/interfaces/core.serializedprimarykeyoptions"},next:{title:"Interface: TransactionEventArgs",permalink:"/docs/next/api/interfaces/core.transactioneventargs"}},s=[{value:"Properties",id:"properties",children:[{value:"configPaths",id:"configpaths",children:[]},{value:"tsConfigPath",id:"tsconfigpath",children:[]},{value:"useTsNode",id:"usetsnode",children:[]}]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-settings"},"Interface: Settings"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".Settings"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"configpaths"},"configPaths"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"configPaths"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string"),"[]"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/1ff07a7/packages/core/src/utils/ConfigurationLoader.ts#L168"},"packages/core/src/utils/ConfigurationLoader.ts:168")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"tsconfigpath"},"tsConfigPath"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"tsConfigPath"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/1ff07a7/packages/core/src/utils/ConfigurationLoader.ts#L167"},"packages/core/src/utils/ConfigurationLoader.ts:167")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"usetsnode"},"useTsNode"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"useTsNode"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/1ff07a7/packages/core/src/utils/ConfigurationLoader.ts#L166"},"packages/core/src/utils/ConfigurationLoader.ts:166")))}l.isMDXComponent=!0}}]);