(window.webpackJsonp=window.webpackJsonp||[]).push([[776],{1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},848:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(8),a=(n(0),n(1110)),i={title:"Using Query Builder"},c={unversionedId:"query-builder",id:"version-4.4/query-builder",isDocsHomePage:!1,title:"Using Query Builder",description:"Since v4, we need to make sure we are working with correctly typed EntityManager",source:"@site/versioned_docs/version-4.4/query-builder.md",slug:"/query-builder",permalink:"/docs/4.4/query-builder",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/query-builder.md",version:"4.4",lastUpdatedBy:"francisco-sanchez-molina",lastUpdatedAt:1617452793,formattedLastUpdatedAt:"4/3/2021",sidebar:"version-4.4/docs",previous:{title:"Deployment",permalink:"/docs/4.4/deployment"},next:{title:"Result cache",permalink:"/docs/4.4/caching"}},s=[{value:"Using Knex.js",id:"using-knexjs",children:[]},{value:"Running Native SQL Query",id:"running-native-sql-query",children:[]},{value:"Executing the Query",id:"executing-the-query",children:[]},{value:"Mapping Raw Results to Entities",id:"mapping-raw-results-to-entities",children:[]},{value:"Implicit Joining",id:"implicit-joining",children:[]},{value:"Explicit Joining",id:"explicit-joining",children:[]},{value:"Mapping joined results",id:"mapping-joined-results",children:[]},{value:"Complex Where Conditions",id:"complex-where-conditions",children:[{value:"Using custom SQL fragments",id:"using-custom-sql-fragments",children:[]},{value:"Custom SQL in where",id:"custom-sql-in-where",children:[]},{value:"andWhere() and orWhere()",id:"andwhere-and-orwhere",children:[]},{value:"Conditions Object",id:"conditions-object",children:[]}]},{value:"Using sub-queries",id:"using-sub-queries",children:[]},{value:"Referring to column in update queries",id:"referring-to-column-in-update-queries",children:[]},{value:"Locking support",id:"locking-support",children:[]}],l={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Since v4, we need to make sure we are working with correctly typed ",Object(a.b)("inlineCode",{parentName:"p"},"EntityManager"),"\nor ",Object(a.b)("inlineCode",{parentName:"p"},"EntityRepository")," to have access to ",Object(a.b)("inlineCode",{parentName:"p"},"createQueryBuilder()")," method."),Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { EntityManager, EntityRepository } from '@mikro-orm/mysql'; // or any other driver package\n")))),Object(a.b)("p",null,"When you need to execute some SQL query without all the ORM stuff involved, you can either\ncompose the query yourself, or use the ",Object(a.b)("inlineCode",{parentName:"p"},"QueryBuilder")," helper to construct the query for you:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(Author);\nqb.update({ name: 'test 123', type: PublisherType.GLOBAL }).where({ id: 123, type: PublisherType.LOCAL });\n\nconsole.log(qb.getQuery());\n// update `publisher2` set `name` = ?, `type` = ? where `id` = ? and `type` = ?\n\nconsole.log(qb.getParams());\n// ['test 123', PublisherType.GLOBAL, 123, PublisherType.LOCAL]\n\n// run the query\nconst res1 = await qb.execute();\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"QueryBuilder")," also supports ",Object(a.b)("a",{parentName:"p",href:"/docs/4.4/query-conditions"},"smart query conditions"),"."),Object(a.b)("h2",{id:"using-knexjs"},"Using Knex.js"),Object(a.b)("p",null,"Under the hood, ",Object(a.b)("inlineCode",{parentName:"p"},"QueryBuilder")," uses ",Object(a.b)("a",{parentName:"p",href:"https://knexjs.org"},Object(a.b)("inlineCode",{parentName:"a"},"Knex.js"))," to compose and run queries.\nYou can access configured ",Object(a.b)("inlineCode",{parentName:"p"},"knex")," instance via ",Object(a.b)("inlineCode",{parentName:"p"},"qb.getKnexQuery()")," method:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(Author);\nqb.update({ name: 'test 123', type: PublisherType.GLOBAL }).where({ id: 123, type: PublisherType.LOCAL });\nconst knex = qb.getKnexQuery(); // instance of Knex' QueryBuilder\n\n// do what ever you need with `knex`\n\nconst res = await orm.em.getConnection().execute(knex);\nconst entities = res.map(a => orm.em.map(Author, a));\nconsole.log(entities); // Author[]\n")),Object(a.b)("p",null,"You can also get clear and configured knex instance from the connection via ",Object(a.b)("inlineCode",{parentName:"p"},"getKnex()")," method.\nAs this method is not available on the base ",Object(a.b)("inlineCode",{parentName:"p"},"Connection")," class, you will need to either manually\ntype cast the connection to ",Object(a.b)("inlineCode",{parentName:"p"},"AbstractSqlConnection")," (or the actual implementation you are using,\ne.g. ",Object(a.b)("inlineCode",{parentName:"p"},"MySqlConnection"),"), or provide correct driver type hint to your ",Object(a.b)("inlineCode",{parentName:"p"},"EntityManager")," instance,\nwhich will be then automatically inferred in ",Object(a.b)("inlineCode",{parentName:"p"},"em.getConnection()")," method."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Driver and connection implementations are not directly exported from ",Object(a.b)("inlineCode",{parentName:"p"},"@mikro-orm/core")," module.\nYou can import them from the driver packages (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"import { PostgreSqlDriver } from '@mikro-orm/postgresql'"),").")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const conn = orm.em.getConnection() as AbstractSqlConnection;\n// you can make sure the `em` is correctly typed to `EntityManager<AbstractSqlDriver>`\n// or one of its implementations:\n// const em: EntityManager<AbstractSqlDriver> = orm.em;\n\nconst knex = conn.getKnex();\n\n// do what ever you need with `knex`\n\nconst res = await knex;\n")),Object(a.b)("h2",{id:"running-native-sql-query"},"Running Native SQL Query"),Object(a.b)("p",null,"You can run native SQL via underlying connection"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const connection = orm.em.getConnection();\nconst res = await connection.execute('select 1 as count');\nconsole.log(res); // res is array of objects: `[ { count: 1 } ]`\n")),Object(a.b)("h2",{id:"executing-the-query"},"Executing the Query"),Object(a.b)("p",null,"You can use ",Object(a.b)("inlineCode",{parentName:"p"},"execute(method = 'all', mapResults = true)"),"'s parameters to control form of result:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const res1 = await qb.execute('all'); // returns array of objects, default behavior\nconst res2 = await qb.execute('get'); // returns single object\nconst res3 = await qb.execute('run'); // returns object like `{ affectedRows: number, insertId: number, row: any }`\n")),Object(a.b)("p",null,"Second argument can be used to disable mapping of database columns to property names (which\nis enabled by default). In following example, ",Object(a.b)("inlineCode",{parentName:"p"},"Book")," entity has ",Object(a.b)("inlineCode",{parentName:"p"},"createdAt")," property defined\nwith implicit underscored field name ",Object(a.b)("inlineCode",{parentName:"p"},"created_at"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const res4 = await orm.em.createQueryBuilder(Book).select('*').execute('get', true);\nconsole.log(res4); // `createdAt` will be defined, while `created_at` will be missing\nconst res5 = await orm.em.createQueryBuilder(Book).select('*').execute('get', false);\nconsole.log(res5); // `created_at` will be defined, while `createdAt` will be missing\n")),Object(a.b)("p",null,"To get entity instances from the QueryBuilder result, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"getResult()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"getSingleResult()"),"\nmethods:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.createQueryBuilder(Book).select('*').where({ id: 1 }).getSingleResult();\nconsole.log(book instanceof Book); // true\nconst books = await orm.em.createQueryBuilder(Book).select('*').getResult();\nconsole.log(books[0] instanceof Book); // true\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You can also use ",Object(a.b)("inlineCode",{parentName:"p"},"qb.getResultList()")," which is alias to ",Object(a.b)("inlineCode",{parentName:"p"},"qb.getResult()"),".")),Object(a.b)("h2",{id:"mapping-raw-results-to-entities"},"Mapping Raw Results to Entities"),Object(a.b)("p",null,"Another way to create entity from raw results (that are not necessarily mapped to entity properties)\nis to use ",Object(a.b)("inlineCode",{parentName:"p"},"map()")," method of ",Object(a.b)("inlineCode",{parentName:"p"},"EntityManager"),", that is basically a shortcut for mapping results\nvia ",Object(a.b)("inlineCode",{parentName:"p"},"IDatabaseDriver.mapResult()")," (which converts field names to property names - e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"created_at"),"\nto ",Object(a.b)("inlineCode",{parentName:"p"},"createdAt"),") and ",Object(a.b)("inlineCode",{parentName:"p"},"merge()")," which converts the data to entity instance and makes it managed. "),Object(a.b)("p",null,"This method comes handy when you want to use 3rd party query builders, where the result is not\nmapped to entity properties automatically:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const results = await knex.select('*').from('users').where(knex.raw('id = ?', [id]));\nconst users = results.map(user => orm.em.map(User, user));\n\n// or use EntityRepository.map()\nconst repo = orm.em.getRepository(User);\nconst users = results.map(user => repo.map(user));\n")),Object(a.b)("h2",{id:"implicit-joining"},"Implicit Joining"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"QueryBuilder")," supports automatic joining based on entity metadata:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(BookTag, 't');\nqb.select('*').where({ books: 123 });\n\nconsole.log(qb.getQuery());\n// select `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk`\n// from `book_tag` as `t`\n// left join `book_to_book_tag` as `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// where `e1`.`book_uuid_pk` = ?\n")),Object(a.b)("p",null,"This also works for multiple levels of nesting:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(Author);\nqb.select('*')\n  .where({ books: { tags: { name: 'Cool' } } })\n  .orderBy({ books: { tags: { createdBy: QueryOrder.DESC } } });\n\nconsole.log(qb.getQuery());\n// select `e0`.* \n// from `author` as `e0` \n// left join `book2` as `e1` on `e0`.`id` = `e1`.`author_id` \n// left join `book2_to_book_tag2` as `e3` on `e1`.`uuid_pk` = `e3`.`book2_uuid_pk` \n// left join `book_tag2` as `e2` on `e3`.`book_tag2_id` = `e2`.`id` \n// where `e2`.`name` = ? \n// order by `e1`.`tags` asc\n")),Object(a.b)("p",null,"This is currently available only for filtering (",Object(a.b)("inlineCode",{parentName:"p"},"where"),") and sorting (",Object(a.b)("inlineCode",{parentName:"p"},"orderBy"),"), only\nthe root entity will be selected. To populate its relationships, you can use ",Object(a.b)("a",{parentName:"p",href:"/docs/4.4/nested-populate"},Object(a.b)("inlineCode",{parentName:"a"},"em.populate()")),"."),Object(a.b)("h2",{id:"explicit-joining"},"Explicit Joining"),Object(a.b)("p",null,"Another way is to manually specify join property via ",Object(a.b)("inlineCode",{parentName:"p"},"join()"),"/",Object(a.b)("inlineCode",{parentName:"p"},"leftJoin()")," methods:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(BookTag, 't');\nqb.select(['b.uuid', 'b.*', 't.*'], true)\n  .join('t.books', 'b')\n  .where({ 'b.title': 'test 123' })\n  .limit(2, 1);\n\nconsole.log(qb.getQuery());\n// select distinct `b`.`uuid_pk`, `b`.*, `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk` from `book_tag` as `t`\n// join `book_to_book_tag` as `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// join `book` as `b` ON `e1`.`book_uuid_pk` = `b`.`uuid_pk`\n// where `b`.`title` = ?\n// limit ? offset ?\n")),Object(a.b)("h2",{id:"mapping-joined-results"},"Mapping joined results"),Object(a.b)("p",null,"To select multiple entities and map them from ",Object(a.b)("inlineCode",{parentName:"p"},"QueryBuilder"),", we can use\n",Object(a.b)("inlineCode",{parentName:"p"},"joinAndSelect")," or ",Object(a.b)("inlineCode",{parentName:"p"},"leftJoinAndSelect")," method:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"// `res` will contain array of authors, with books and their tags populated\nconst res = await orm.em.createQueryBuilder(Author, 'a')\n  .select('*')\n  .leftJoinAndSelect('a.books', 'b')\n  .leftJoinAndSelect('b.tags', 't')\n  .where({ 't.name': ['sick', 'sexy'] })\n  .getResultList();\n")),Object(a.b)("h2",{id:"complex-where-conditions"},"Complex Where Conditions"),Object(a.b)("p",null,"There are multiple ways to construct complex query conditions. You can either write parts of SQL\nmanually, use ",Object(a.b)("inlineCode",{parentName:"p"},"andWhere()"),"/",Object(a.b)("inlineCode",{parentName:"p"},"orWhere()"),", or provide condition object:"),Object(a.b)("h3",{id:"using-custom-sql-fragments"},"Using custom SQL fragments"),Object(a.b)("p",null,"It is possible to use any SQL fragment in your ",Object(a.b)("inlineCode",{parentName:"p"},"WHERE")," query or ",Object(a.b)("inlineCode",{parentName:"p"},"ORDER BY")," clause:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"const users = orm.em.createQueryBuilder(User)\n  .select('*')\n  .where({ 'lower(email)': 'foo@bar.baz' })\n  .orderBy({ [`(point(loc_latitude, loc_longitude) <@> point(0, 0))`]: 'ASC' })\n  .getResultList();\n")),Object(a.b)("p",null,"This will produce following query:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sql"},"select `e0`.* \nfrom `user` as `e0`\nwhere lower(email) = 'foo@bar.baz'\norder by (point(loc_latitude, loclongitude) <@> point(0, 0)) asc\n")),Object(a.b)("h3",{id:"custom-sql-in-where"},"Custom SQL in where"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(BookTag, 't');\nqb.select(['b.*', 't.*'])\n  .leftJoin('t.books', 'b')\n  .where('b.title = ? or b.title = ?', ['test 123', 'lol 321'])\n  .andWhere('1 = 1')\n  .orWhere('1 = 2')\n  .limit(2, 1);\n\nconsole.log(qb.getQuery());\n// select `b`.*, `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk` from `book_tag` as `t`\n// left join `book_to_book_tag` as `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// left join `book` as `b` ON `e1`.`book_uuid_pk` = `b`.`uuid_pk`\n// where (((b.title = ? or b.title = ?) and (1 = 1)) or (1 = 2))\n// limit ? offset ?\n")),Object(a.b)("h3",{id:"andwhere-and-orwhere"},"andWhere() and orWhere()"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(BookTag, 't');\nqb.select(['b.*', 't.*'])\n  .leftJoin('t.books', 'b')\n  .where('b.title = ? or b.title = ?', ['test 123', 'lol 321'])\n  .andWhere('1 = 1')\n  .orWhere('1 = 2')\n  .limit(2, 1);\n\nconsole.log(qb.getQuery());\n// select `b`.*, `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk` from `book_tag` as `t`\n// left join `book_to_book_tag` as `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// left join `book` as `b` ON `e1`.`book_uuid_pk` = `b`.`uuid_pk`\n// where (((b.title = ? or b.title = ?) and (1 = 1)) or (1 = 2))\n// limit ? offset ?\n")),Object(a.b)("h3",{id:"conditions-object"},"Conditions Object"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(Test);\nqb.select('*').where({ $and: [{ id: { $nin: [3, 4] } }, { id: { $gt: 2 } }] });\n\nconsole.log(qb.getQuery());\n// select `e0`.* from `test` as `e0` where (`e0`.`id` not in (?, ?) and `e0`.`id` > ?)\n")),Object(a.b)("h2",{id:"using-sub-queries"},"Using sub-queries"),Object(a.b)("p",null,"You can filter using sub-queries in where conditions:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const qb1 = orm.em.createQueryBuilder(Book2, 'b').select('b.author').where({ price: { $gt: 100 } });\nconst qb2 = orm.em.createQueryBuilder(Author2, 'a').select('*').where({ id: { $in: qb1.getKnexQuery() } });\n\nconsole.log(qb2.getQuery());\n// select `a`.* from `author2` as `a` where `a`.`id` in (select `b`.`author_id` from `book2` as `b` where `b`.`price` > ?)\n")),Object(a.b)("p",null,"For sub-queries in selects, use the ",Object(a.b)("inlineCode",{parentName:"p"},"qb.as(alias)")," method: "),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The dynamic property (",Object(a.b)("inlineCode",{parentName:"p"},"booksTotal"),") needs to be defined at the entity level (as ",Object(a.b)("inlineCode",{parentName:"p"},"persist: false"),").")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const knex = orm.em.getKnex();\nconst qb1 = orm.em.createQueryBuilder(Book2, 'b').count('b.uuid', true).where({ author: knex.ref('a.id') }).as('Author2.booksTotal');\nconst qb2 = orm.em.createQueryBuilder(Author2, 'a');\nqb2.select(['*', qb1]).orderBy({ booksTotal: 'desc' });\n\nconsole.log(qb2.getQuery());\n// select `a`.*, (select count(distinct `b`.`uuid_pk`) as `count` from `book2` as `b` where `b`.`author_id` = `a`.`id`) as `books_total` from `author2` as `a` order by `books_total` desc\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const knex = orm.em.getKnex();\nconst qb3 = orm.em.createQueryBuilder(Book2, 'b').count('b.uuid', true).where({ author: knex.ref('a.id') }).as('books_total');\nconst qb4 = orm.em.createQueryBuilder(Author2, 'a');\nqb4.select(['*', qb3]).orderBy({ booksTotal: 'desc' });\n\nconsole.log(qb4.getQuery());\n// select `a`.*, (select count(distinct `b`.`uuid_pk`) as `count` from `book2` as `b` where `b`.`author_id` = `a`.`id`) as `books_total` from `author2` as `a` order by `books_total` desc\n")),Object(a.b)("p",null,"When you want to filter by sub-query on the left-hand side of a predicate, you will need to register it first via ",Object(a.b)("inlineCode",{parentName:"p"},"qb.withSubquery()"),":"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The dynamic property (",Object(a.b)("inlineCode",{parentName:"p"},"booksTotal"),") needs to be defined at the entity level (as ",Object(a.b)("inlineCode",{parentName:"p"},"persist: false"),").\nYou always need to use prefix in the ",Object(a.b)("inlineCode",{parentName:"p"},"qb.withSchema()")," (so ",Object(a.b)("inlineCode",{parentName:"p"},"a.booksTotal"),"). ")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const knex = orm.em.getKnex();\nconst qb1 = orm.em.createQueryBuilder(Book2, 'b').count('b.uuid', true).where({ author: knex.ref('a.id') }).getKnexQuery();\nconst qb2 = orm.em.createQueryBuilder(Author2, 'a');\nqb2.select('*').withSubQuery(qb1, 'a.booksTotal').where({ 'a.booksTotal': { $in: [1, 2, 3] } });\n\nconsole.log(qb2.getQuery());\n// select `a`.* from `author2` as `a` where (select count(distinct `b`.`uuid_pk`) as `count` from `book2` as `b` where `b`.`author_id` = `a`.`id`) in (?, ?, ?)\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const knex = orm.em.getKnex();\nconst qb3 = orm.em.createQueryBuilder(Book2, 'b').count('b.uuid', true).where({ author: knex.ref('a.id') }).getKnexQuery();\nconst qb4 = orm.em.createQueryBuilder(Author2, 'a');\nqb4.select('*').withSubQuery(qb3, 'a.booksTotal').where({ 'a.booksTotal': 1 });\n\nconsole.log(qb4.getQuery());\n// select `a`.* from `author2` as `a` where (select count(distinct `b`.`uuid_pk`) as `count` from `book2` as `b` where `b`.`author_id` = `a`.`id`) = ?\n")),Object(a.b)("h2",{id:"referring-to-column-in-update-queries"},"Referring to column in update queries"),Object(a.b)("p",null,"You can use ",Object(a.b)("inlineCode",{parentName:"p"},"qb.raw()")," to insert raw SQL snippets like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(Book);\nqb.update({ price: qb.raw('price + 1') }).where({ uuid: '123' });\n\nconsole.log(qb.getQuery());\n// update `book` set `price` = price + 1 where `uuid_pk` = ?\n")),Object(a.b)("h2",{id:"locking-support"},"Locking support"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(Test);\nqb.select('*').where({ name: 'Lol 321' }).setLockMode(LockMode.PESSIMISTIC_READ);\n\nconsole.log(qb.getQuery()); // for MySQL\n// select `e0`.* from `test` as `e0` where `e0`.`name` = ? lock in share mode\n")))}b.isMDXComponent=!0}}]);