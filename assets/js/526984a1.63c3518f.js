(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(b,c(c({ref:t},s),{},{components:n})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},402:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),o=(n(0),n(1110)),i={title:"Schema Generator"},c={unversionedId:"schema-generator",id:"version-4.2/schema-generator",isDocsHomePage:!1,title:"Schema Generator",description:"SchemaGenerator can do harm to your database. It will drop or alter tables, indexes,",source:"@site/versioned_docs/version-4.2/schema-generator.md",slug:"/schema-generator",permalink:"/docs/4.2/schema-generator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/schema-generator.md",version:"4.2",lastUpdatedBy:"francisco-sanchez-molina",lastUpdatedAt:1617452793,formattedLastUpdatedAt:"4/3/2021",sidebar:"version-4.2/docs",previous:{title:"Metadata Cache",permalink:"/docs/4.2/metadata-cache"},next:{title:"Entity Generator",permalink:"/docs/4.2/entity-generator"}},l=[{value:"Using SchemaGenerator programmatically",id:"using-schemagenerator-programmatically",children:[]},{value:"Limitations of SQLite",id:"limitations-of-sqlite",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"SchemaGenerator can do harm to your database. It will drop or alter tables, indexes,\nsequences and such. Please use this tool with caution in development and not on a\nproduction server. It is meant for helping you develop your Database Schema, but NOT\nwith migrating schema from A to B in production. A safe approach would be generating\nthe SQL on development server and saving it into SQL Migration files that are executed\nmanually on the production server.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"SchemaTool assumes your project uses the given database on its own. Update and Drop\ncommands will mess with other tables if they are not related to the current project\nthat is using MikroORM. Please be careful!")),Object(o.b)("p",null,"To generate schema from your entity metadata, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"SchemaGenerator")," helper. "),Object(o.b)("p",null,"You can use it via CLI: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm schema:create --dump   # Dumps create schema SQL\nnpx mikro-orm schema:update --dump   # Dumps update schema SQL\nnpx mikro-orm schema:drop --dump     # Dumps drop schema SQL\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can also use ",Object(o.b)("inlineCode",{parentName:"p"},"--run")," flag to fire all queries, but be careful as it might break your\ndatabase. Be sure to always check the generated SQL first before executing. Do not use\n",Object(o.b)("inlineCode",{parentName:"p"},"--run")," flag in production! ")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"schema:create")," will automatically create the database if it does not exist. "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"schema:update")," drops all unknown tables by default, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"--no-drop-tables"),"\nto get around it. There is also ",Object(o.b)("inlineCode",{parentName:"p"},"--safe")," flag that will disable both table dropping as\nwell as column dropping. "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"schema:drop")," will by default drop all database tables. You can use ",Object(o.b)("inlineCode",{parentName:"p"},"--drop-db")," flag to drop\nthe whole database instead. "),Object(o.b)("h2",{id:"using-schemagenerator-programmatically"},"Using SchemaGenerator programmatically"),Object(o.b)("p",null,"Or you can create simple script where you initialize MikroORM like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./create-schema.ts"',title:'"./create-schema.ts"'},"import { MikroORM } from '@mikro-orm/core';\n\n(async () => {\n  const orm = await MikroORM.init({\n    entities: [Author, Book, ...],\n    dbName: 'your-db-name',\n    // ...\n  });\n  const generator = orm.getSchemaGenerator();\n\n  const dropDump = await generator.getDropSchemaSQL();\n  console.log(dropDump);\n\n  const createDump = await generator.getCreateSchemaSQL();\n  console.log(createDump);\n\n  const updateDump = await generator.getUpdateSchemaSQL();\n  console.log(updateDump);\n\n  // there is also `generate()` method that returns drop + create queries\n  const dropAndCreateDump = await generator.generate();\n  console.log(dropAndCreateDump);\n\n  // or you can run those queries directly, but be sure to check them first!\n  await generator.dropSchema();\n  await generator.createSchema();\n  await generator.updateSchema();\n\n  await orm.close(true);\n})();\n")),Object(o.b)("p",null,"Then run this script via ",Object(o.b)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",Object(o.b)("inlineCode",{parentName:"p"},"node"),"):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ ts-node create-schema\n")),Object(o.b)("h2",{id:"limitations-of-sqlite"},"Limitations of SQLite"),Object(o.b)("p",null,"There are limitations of SQLite database because of which it behaves differently\nthan other SQL drivers. Namely, it is not possible to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"create foreign key constraints when altering columns"),Object(o.b)("li",{parentName:"ul"},"create empty tables without columns"),Object(o.b)("li",{parentName:"ul"},"alter column requires nullability")),Object(o.b)("p",null,"Because of this, you can end up with different schema with SQLite, so it is not\nsuggested to use SQLite for integration tests of your application."))}u.isMDXComponent=!0}}]);