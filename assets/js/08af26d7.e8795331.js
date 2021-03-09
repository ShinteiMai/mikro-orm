(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1052:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||a;return n?o.a.createElement(m,p(p({ref:t},s),{},{components:n})):o.a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),a=(n(0),n(1052)),i={title:"EntityHelper and Decorated Entities",sidebar_label:"Updating Entity Values"},p={unversionedId:"entity-helper",id:"version-4.2/entity-helper",isDocsHomePage:!1,title:"EntityHelper and Decorated Entities",description:"Updating Entity Values with entity.assign()",source:"@site/versioned_docs/version-4.2/entity-helper.md",slug:"/entity-helper",permalink:"/docs/4.2/entity-helper",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/entity-helper.md",version:"4.2",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1615323547,sidebar_label:"Updating Entity Values",sidebar:"version-4.2/docs",previous:{title:"Serializing",permalink:"/docs/4.2/serializing"},next:{title:"Lifecycle Hooks and EventSubscriber",permalink:"/docs/4.2/lifecycle-hooks"}},c=[{value:"Updating Entity Values with <code>entity.assign()</code>",id:"updating-entity-values-with-entityassign",children:[]},{value:"<code>WrappedEntity</code> and <code>wrap()</code> helper",id:"wrappedentity-and-wrap-helper",children:[{value:"Accessing internal prefixed properties",id:"accessing-internal-prefixed-properties",children:[]}]}],s={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"updating-entity-values-with-entityassign"},"Updating Entity Values with ",Object(a.b)("inlineCode",{parentName:"h2"},"entity.assign()")),Object(a.b)("p",null,"When you want to update entity based on user input, you will usually have just plain\nstring ids of entity relations as user input. Normally you would need to use\n",Object(a.b)("inlineCode",{parentName:"p"},"em.getReference()")," to create references from each id first, and then\nuse those references to update entity relations:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const jon = new Author('Jon Snow', 'snow@wall.st');\nconst book = new Book('Book', jon);\nbook.author = orm.em.getReference<Author>(Author, '...id...');\n")),Object(a.b)("p",null,"Same result can be easily achieved with ",Object(a.b)("inlineCode",{parentName:"p"},"entity.assign()"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { wrap } from '@mikro-orm/core';\n\nwrap(book).assign({ \n  title: 'Better Book 1', \n  author: '...id...',\n});\nconsole.log(book.title); // 'Better Book 1'\nconsole.log(book.author); // instance of Author with id: '...id...'\nconsole.log(book.author.id); // '...id...'\n")),Object(a.b)("p",null,"To use ",Object(a.b)("inlineCode",{parentName:"p"},"entity.assign()")," on not managed entities, you need to provide ",Object(a.b)("inlineCode",{parentName:"p"},"EntityManager"),"\ninstance explicitly: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { wrap } from '@mikro-orm/core';\n\nconst book = new Book();\nwrap(book).assign({ \n  title: 'Better Book 1', \n  author: '...id...',\n}, { em: orm.em });\n")),Object(a.b)("p",null,"By default, ",Object(a.b)("inlineCode",{parentName:"p"},"entity.assign(data)")," behaves same way as ",Object(a.b)("inlineCode",{parentName:"p"},"Object.assign(entity, data)"),",\ne.g. it does not merge things recursively. To enable deep merging of object properties,\nuse second parameter to enable ",Object(a.b)("inlineCode",{parentName:"p"},"mergeObjects")," flag:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { wrap } from '@mikro-orm/core';\n\nbook.meta = { foo: 1, bar: 2 };\n\nwrap(book).assign({ meta: { foo: 3 } }, { mergeObjects: true });\nconsole.log(book.meta); // { foo: 3, bar: 2 }\n\nwrap(book).assign({ meta: { foo: 4 } });\nconsole.log(book.meta); // { foo: 4 }\n")),Object(a.b)("h2",{id:"wrappedentity-and-wrap-helper"},Object(a.b)("inlineCode",{parentName:"h2"},"WrappedEntity")," and ",Object(a.b)("inlineCode",{parentName:"h2"},"wrap()")," helper"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"IWrappedEntity")," is an interface that defines public helper methods provided\nby the ORM:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"interface IWrappedEntity<T, PK extends keyof T> {\n  isInitialized(): boolean;\n  populated(populated?: boolean): void;\n  init(populated?: boolean, lockMode?: LockMode): Promise<T>;\n  toReference(): IdentifiedReference<T, PK>;\n  toObject(ignoreFields?: string[]): Dictionary;\n  toJSON(...args: any[]): Dictionary;\n  assign(data: any, options?: AssignOptions | boolean): T;\n}\n")),Object(a.b)("p",null,"There are two ways to access those methods. You can either extend ",Object(a.b)("inlineCode",{parentName:"p"},"BaseEntity"),"\n(exported from ",Object(a.b)("inlineCode",{parentName:"p"},"@mikro-orm/core"),"), that defines those methods, or use the\n",Object(a.b)("inlineCode",{parentName:"p"},"wrap()")," helper to access ",Object(a.b)("inlineCode",{parentName:"p"},"WrappedEntity")," instance, where those methods\nexist."),Object(a.b)("p",null,"Users can choose whether they are fine with polluting the entity interface with\nthose additional methods, or they want to keep the interface clean\nand use the ",Object(a.b)("inlineCode",{parentName:"p"},"wrap(entity)")," helper method instead to access them. "),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Since v4 ",Object(a.b)("inlineCode",{parentName:"p"},"wrap(entity)")," no longer returns the entity, now the ",Object(a.b)("inlineCode",{parentName:"p"},"WrappedEntity")," instance is\nbeing returned. It contains only public methods (",Object(a.b)("inlineCode",{parentName:"p"},"init"),", ",Object(a.b)("inlineCode",{parentName:"p"},"assign"),", ",Object(a.b)("inlineCode",{parentName:"p"},"isInitialized"),", ...),\nif you want to access internal properties like ",Object(a.b)("inlineCode",{parentName:"p"},"__meta")," or ",Object(a.b)("inlineCode",{parentName:"p"},"__em"),", you need to explicitly\nask for the helper via ",Object(a.b)("inlineCode",{parentName:"p"},"wrap(entity, true)"),".")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity } from '@mikro-orm/core';\n\n@Entity()\nexport class Book extends BaseEntity<Book, 'id'> { ... }\n")),Object(a.b)("p",null,"Then you can work with those methods directly:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"book.meta = { foo: 1, bar: 2 };\nbook.assign({ meta: { foo: 3 } }, { mergeObjects: true });\nconsole.log(book.meta); // { foo: 3, bar: 2 }\n")),Object(a.b)("h3",{id:"accessing-internal-prefixed-properties"},"Accessing internal prefixed properties"),Object(a.b)("p",null,"Previously it was possible to access internal properties like ",Object(a.b)("inlineCode",{parentName:"p"},"__meta")," or ",Object(a.b)("inlineCode",{parentName:"p"},"__em"),"\nfrom the ",Object(a.b)("inlineCode",{parentName:"p"},"wrap()")," helper. Now to access them, you need to use second parameter of\nwrap:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Author { ... }\n\nconsole.log(wrap(author, true).__meta);\n")))}l.isMDXComponent=!0}}]);