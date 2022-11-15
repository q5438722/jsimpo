'use strict';
const assert = require("assert");
const _ = require("lodash");
const request = require("supertest");
const jsonServer = require("../../src/server");
describe("Server", () => {
  let server;
  let router;
  let db;
  const rewriterRules = {
    "/api/*" : "/$1",
    "/blog/posts/:id/show" : "/posts/:id",
    "/comments/special/:userId-:body" : "/comments/?userId=:userId&body=:body",
    "/firstpostwithcomments" : "/posts/1?_embed=comments",
    "/articles\\?_id=:id" : "/posts/:id"
  };
  beforeEach(() => {
    db = {};
    db.posts = [{
      id : 1,
      body : "foo"
    }, {
      id : 2,
      body : "bar"
    }];
    db.tags = [{
      id : 1,
      body : "Technology"
    }, {
      id : 2,
      body : "Photography"
    }, {
      id : 3,
      body : "photo"
    }];
    db.users = [{
      id : 1,
      username : "Jim",
      tel : "0123"
    }, {
      id : 2,
      username : "George",
      tel : "123"
    }];
    db.comments = [{
      id : 1,
      body : "foo",
      published : true,
      postId : 1,
      userId : 1
    }, {
      id : 2,
      body : "bar",
      published : false,
      postId : 1,
      userId : 2
    }, {
      id : 3,
      body : "baz",
      published : false,
      postId : 2,
      userId : 1
    }, {
      id : 4,
      body : "qux",
      published : true,
      postId : 2,
      userId : 2
    }, {
      id : 5,
      body : "quux",
      published : false,
      postId : 2,
      userId : 1
    }];
    db.buyers = [{
      id : 1,
      name : "Aileen",
      country : "Colombia",
      total : 100
    }, {
      id : 2,
      name : "Barney",
      country : "Colombia",
      total : 200
    }, {
      id : 3,
      name : "Carley",
      country : "Colombia",
      total : 300
    }, {
      id : 4,
      name : "Daniel",
      country : "Belize",
      total : 30
    }, {
      id : 5,
      name : "Ellen",
      country : "Belize",
      total : 20
    }, {
      id : 6,
      name : "Frank",
      country : "Belize",
      total : 10
    }, {
      id : 7,
      name : "Grace",
      country : "Argentina",
      total : 1
    }, {
      id : 8,
      name : "Henry",
      country : "Argentina",
      total : 2
    }, {
      id : 9,
      name : "Isabelle",
      country : "Argentina",
      total : 3
    }];
    db.refs = [{
      id : "abcd-1234",
      url : "http://example.com",
      postId : 1,
      userId : 1
    }];
    db.stringIds = [{
      id : "1234"
    }];
    db.deep = [{
      a : {
        b : 1
      }
    }, {
      a : 1
    }];
    db.nested = [{
      resource : {
        name : "dewey"
      }
    }, {
      resource : {
        name : "cheatem"
      }
    }, {
      resource : {
        name : "howe"
      }
    }];
    db.list = [{
      id : 1
    }, {
      id : 2
    }, {
      id : 3
    }, {
      id : 4
    }, {
      id : 5
    }, {
      id : 6
    }, {
      id : 7
    }, {
      id : 8
    }, {
      id : 9
    }, {
      id : 10
    }, {
      id : 11
    }, {
      id : 12
    }, {
      id : 13
    }, {
      id : 14
    }, {
      id : 15
    }];
    server = jsonServer.create();
    router = jsonServer.router(db);
    server.use(jsonServer.defaults());
    server.use(jsonServer.rewriter(rewriterRules));
    server.use(router);
  });
  describe("GET /db", () => {
    test("should respond with json and full database", () => {
      return request(server).get("/db").expect("Content-Type", /json/).expect(200, db);
    });
  });
  describe("GET /:resource", () => {
    test("should respond with json and corresponding resources", () => {
      return request(server).get("/posts").set("Origin", "http://example.com").expect("Content-Type", /json/).expect("Access-Control-Allow-Credentials", "true").expect("Access-Control-Allow-Origin", "http://example.com").expect(200, db.posts);
    });
    test("should respond with 404 if resource is not found", () => {
      return request(server).get("/undefined").expect(404);
    });
  });
  describe("GET /:resource?attr=&attr=", () => {
    test("should respond with json and filter resources", () => {
      return request(server).get("/comments?postId=1&published=true").expect("Content-Type", /json/).expect(200, [db.comments[0]]);
    });
    test("should be strict", () => {
      return request(server).get("/users?tel=123").expect("Content-Type", /json/).expect(200, [db.users[1]]);
    });
    test("should support multiple filters", () => {
      return request(server).get("/comments?id=1&id=2").expect("Content-Type", /json/).expect(200, [db.comments[0], db.comments[1]]);
    });
    test("should support deep filter", () => {
      return request(server).get("/deep?a.b=1").expect("Content-Type", /json/).expect(200, [db.deep[0]]);
    });
    test("should ignore JSONP query parameters callback and _ ", () => {
      return request(server).get("/comments?callback=1&_=1").expect("Content-Type", /text/).expect(new RegExp(db.comments[0].body)).expect(200);
    });
    test("should ignore unknown query parameters", () => {
      return request(server).get("/comments?foo=1&bar=2").expect("Content-Type", /json/).expect(200, db.comments);
    });
    test("should not fail with null value", () => {
      db.posts.push({
        id : 99,
        body : null
      });
      return request(server).get("/posts?body=foo").expect("Content-Type", /json/).expect(200, [db.posts[0]]);
    });
  });
  describe("GET /:resource?q=", () => {
    test("should respond with json and make a full-text search", () => {
      return request(server).get("/tags?q=pho").expect("Content-Type", /json/).expect(200, [db.tags[1], db.tags[2]]);
    });
    test("should respond with json and make a deep full-text search", () => {
      return request(server).get("/deep?q=1").expect("Content-Type", /json/).expect(200, db.deep);
    });
    test("should return an empty array when nothing is matched", () => {
      return request(server).get("/tags?q=nope").expect("Content-Type", /json/).expect(200, []);
    });
    test("should support other query parameters", () => {
      return request(server).get("/comments?q=qu&published=true").expect("Content-Type", /json/).expect(200, [db.comments[3]]);
    });
    test("should ignore duplicate q query parameters", () => {
      return request(server).get("/comments?q=foo&q=bar").expect("Content-Type", /json/).expect(200, [db.comments[0]]);
    });
    test("should support filtering by boolean value false", () => {
      return request(server).get("/comments?published=false").expect("Content-Type", /json/).expect(200, [db.comments[1], db.comments[2], db.comments[4]]);
    });
  });
  describe("GET /:resource?_end=", () => {
    test("should respond with a sliced array", () => {
      return request(server).get("/comments?_end=2").expect("Content-Type", /json/).expect("x-total-count", db.comments.length.toString()).expect("Access-Control-Expose-Headers", "X-Total-Count").expect(200, db.comments.slice(0, 2));
    });
  });
  describe("GET /:resource?_sort=", () => {
    test("should respond with json and sort on a field", () => {
      return request(server).get("/tags?_sort=body").expect("Content-Type", /json/).expect(200, [db.tags[1], db.tags[0], db.tags[2]]);
    });
    test("should reverse sorting with _order=DESC", () => {
      return request(server).get("/tags?_sort=body&_order=DESC").expect("Content-Type", /json/).expect(200, [db.tags[2], db.tags[0], db.tags[1]]);
    });
    test("should reverse sorting with _order=desc (case insensitive)", () => {
      return request(server).get("/tags?_sort=body&_order=desc").expect("Content-Type", /json/).expect(200, [db.tags[2], db.tags[0], db.tags[1]]);
    });
    test("should sort on numerical field", () => {
      return request(server).get("/posts?_sort=id&_order=DESC").expect("Content-Type", /json/).expect(200, db.posts.reverse());
    });
    test("should sort on nested field", () => {
      return request(server).get("/nested?_sort=resource.name").expect("Content-Type", /json/).expect(200, [db.nested[1], db.nested[0], db.nested[2]]);
    });
    test("should sort on multiple fields", () => {
      return request(server).get("/buyers?_sort=country,total&_order=asc,desc").expect("Content-Type", /json/).expect(200, [db.buyers[8], db.buyers[7], db.buyers[6], db.buyers[3], db.buyers[4], db.buyers[5], db.buyers[2], db.buyers[1], db.buyers[0]]);
    });
  });
  describe("GET /:resource?_start=&_end=", () => {
    test("should respond with a sliced array", () => {
      return request(server).get("/comments?_start=1&_end=2").expect("Content-Type", /json/).expect("X-Total-Count", db.comments.length.toString()).expect("Access-Control-Expose-Headers", "X-Total-Count").expect(200, db.comments.slice(1, 2));
    });
  });
  describe("GET /:resource?_start=&_limit=", () => {
    test("should respond with a limited array", () => {
      return request(server).get("/comments?_start=1&_limit=1").expect("Content-Type", /json/).expect("X-Total-Count", db.comments.length.toString()).expect("Access-Control-Expose-Headers", "X-Total-Count").expect(200, db.comments.slice(1, 2));
    });
  });
  describe("GET /:resource?_page=", () => {
    test("should paginate", () => {
      return request(server).get("/list?_page=2").expect("Content-Type", /json/).expect("x-total-count", db.list.length.toString()).expect("Access-Control-Expose-Headers", "X-Total-Count, Link").expect(200, db.list.slice(10, 20));
    });
  });
  describe("GET /:resource?_page=&_limit=", () => {
    test("should paginate with a custom limit", () => {
      const done = ['<http://localhost/list?_page=1&_limit=1>; rel="first"', '<http://localhost/list?_page=1&_limit=1>; rel="prev"', '<http://localhost/list?_page=3&_limit=1>; rel="next"', '<http://localhost/list?_page=15&_limit=1>; rel="last"'].join(", ");
      return request(server).get("/list?_page=2&_limit=1").set("host", "localhost").expect("Content-Type", /json/).expect("x-total-count", db.list.length.toString()).expect("link", done).expect("Access-Control-Expose-Headers", "X-Total-Count, Link").expect(200, db.list.slice(1, 2));
    });
  });
  describe("GET /:resource?attr_gte=&attr_lte=", () => {
    test("should respond with a limited array", () => {
      return request(server).get("/comments?id_gte=2&id_lte=3").expect("Content-Type", /json/).expect(200, db.comments.slice(1, 3));
    });
  });
  describe("GET /:resource?attr_ne=", () => {
    test("should respond with a limited array", () => {
      return request(server).get("/comments?id_ne=1").expect("Content-Type", /json/).expect(200, db.comments.slice(1));
    });
    test("should accept multiple parameters", () => {
      return request(server).get("/comments?id_ne=1&id_ne=2").expect("Content-Type", /json/).expect(200, db.comments.slice(2));
    });
  });
  describe("GET /:resource?attr_like=", () => {
    test("should respond with an array that matches the like operator (case insensitive)", () => {
      return request(server).get("/tags?body_like=photo").expect("Content-Type", /json/).expect(200, [db.tags[1], db.tags[2]]);
    });
    test("should accept multiple parameters", () => {
      return request(server).get("/tags?body_like=photo&body_like=tech").expect("Content-Type", /json/).expect(200, db.tags);
    });
  });
  describe("GET /:parent/:parentId/:resource", () => {
    test("should respond with json and corresponding nested resources", () => {
      return request(server).get("/posts/1/comments").expect("Content-Type", /json/).expect(200, [db.comments[0], db.comments[1]]);
    });
  });
  describe("GET /:resource/:id", () => {
    test("should respond with json and corresponding resource", () => {
      return request(server).get("/posts/1").expect("Content-Type", /json/).expect(200, db.posts[0]);
    });
    test("should support string id, respond with json and corresponding resource", () => {
      return request(server).get("/refs/abcd-1234").expect("Content-Type", /json/).expect(200, db.refs[0]);
    });
    test("should support integer id as string", () => {
      return request(server).get("/stringIds/1234").expect("Content-Type", /json/).expect(200, db.stringIds[0]);
    });
    test("should respond with 404 if resource is not found", () => {
      return request(server).get("/posts/9001").expect("Content-Type", /json/).expect(404, {});
    });
  });
  describe("GET /:resource?_embed=", () => {
    test("should respond with corresponding resources and embedded resources", () => {
      const body = _.cloneDeep(db.posts);
      body[0].comments = [db.comments[0], db.comments[1]];
      body[1].comments = [db.comments[2], db.comments[3], db.comments[4]];
      return request(server).get("/posts?_embed=comments").expect("Content-Type", /json/).expect(200, body);
    });
  });
  describe("GET /:resource?_embed&_embed=", () => {
    test("should respond with corresponding resources and embedded resources", () => {
      const posts = _.cloneDeep(db.posts);
      posts[0].comments = [db.comments[0], db.comments[1]];
      posts[0].refs = [db.refs[0]];
      posts[1].comments = [db.comments[2], db.comments[3], db.comments[4]];
      posts[1].refs = [];
      return request(server).get("/posts?_embed=comments&_embed=refs").expect("Content-Type", /json/).expect(200, posts);
    });
  });
  describe("GET /:resource/:id?_embed=", () => {
    test("should respond with corresponding resources and embedded resources", () => {
      const msg = _.cloneDeep(db.posts[0]);
      msg.comments = [db.comments[0], db.comments[1]];
      return request(server).get("/posts/1?_embed=comments").expect("Content-Type", /json/).expect(200, msg);
    });
  });
  describe("GET /:resource/:id?_embed=&_embed=", () => {
    test("should respond with corresponding resource and embedded resources", () => {
      const msg = _.cloneDeep(db.posts[0]);
      msg.comments = [db.comments[0], db.comments[1]];
      msg.refs = [db.refs[0]];
      return request(server).get("/posts/1?_embed=comments&_embed=refs").expect("Content-Type", /json/).expect(200, msg);
    });
  });
  describe("GET /:resource?_expand=", () => {
    test("should respond with corresponding resource and expanded inner resources", () => {
      const data = _.cloneDeep(db.refs);
      data[0].post = db.posts[0];
      return request(server).get("/refs?_expand=post").expect("Content-Type", /json/).expect(200, data);
    });
  });
  describe("GET /:resource/:id?_expand=", () => {
    test("should respond with corresponding resource and expanded inner resources", () => {
      const callback = _.cloneDeep(db.comments[0]);
      callback.post = db.posts[0];
      return request(server).get("/comments/1?_expand=post").expect("Content-Type", /json/).expect(200, callback);
    });
  });
  describe("GET /:resource?_expand=&_expand", () => {
    test("should respond with corresponding resource and expanded inner resources", () => {
      const data = _.cloneDeep(db.refs);
      data[0].post = db.posts[0];
      data[0].user = db.users[0];
      return request(server).get("/refs?_expand=post&_expand=user").expect("Content-Type", /json/).expect(200, data);
    });
  });
  describe("GET /:resource/:id?_expand=&_expand=", () => {
    test("should respond with corresponding resource and expanded inner resources", () => {
      const options = db.comments[0];
      options.post = db.posts[0];
      options.user = db.users[0];
      return request(server).get("/comments/1?_expand=post&_expand=user").expect("Content-Type", /json/).expect(200, options);
    });
  });
  describe("GET /:resource>_delay=", () => {
    test("should delay response", (callbackCompleted) => {
      const y = new Date;
      request(server).get("/posts?_delay=1100").expect(200, function(attachResult) {
        const oy = new Date;
        callbackCompleted(oy - y > 1E3 ? attachResult : new Error("Request wasn't delayed"));
      });
    });
  });
  describe("POST /:resource", () => {
    test("should respond with json, create a resource and increment id", async() => {
      await request(server).post("/posts").send({
        body : "foo",
        booleanValue : true,
        integerValue : 1
      }).expect("Access-Control-Expose-Headers", "Location").expect("Location", /posts\/3$/).expect("Content-Type", /json/).expect(201, {
        id : 3,
        body : "foo",
        booleanValue : true,
        integerValue : 1
      });
      assert.strictEqual(db.posts.length, 3);
    });
    test("should support x-www-form-urlencoded", async() => {
      await request(server).post("/posts").type("form").send({
        body : "foo",
        booleanValue : true,
        integerValue : 1
      }).expect("Content-Type", /json/).expect(201, {
        id : 3,
        body : "foo",
        booleanValue : "true",
        integerValue : "1"
      });
      assert.strictEqual(db.posts.length, 3);
    });
    test("should respond with json, create a resource and generate string id", async() => {
      await request(server).post("/refs").send({
        url : "http://foo.com",
        postId : 1
      }).expect("Content-Type", /json/).expect(201);
      assert.strictEqual(db.refs.length, 2);
    });
  });
  describe("POST /:parent/:parentId/:resource", () => {
    test("should respond with json and set parentId", () => {
      return request(server).post("/posts/1/comments").send({
        body : "foo"
      }).expect("Content-Type", /json/).expect(201, {
        id : 6,
        postId : "1",
        body : "foo"
      });
    });
  });
  describe("POST /:resource?_delay=", () => {
    test("should delay response", (callbackCompleted) => {
      const y = new Date;
      request(server).post("/posts?_delay=1100").send({
        body : "foo",
        booleanValue : true,
        integerValue : 1
      }).expect(201, function(attachResult) {
        const oy = new Date;
        callbackCompleted(oy - y > 1E3 ? attachResult : new Error("Request wasn't delayed"));
      });
    });
  });
  describe("PUT /:resource/:id", () => {
    test("should respond with json and replace resource", async() => {
      const expected = {
        id : 1,
        booleanValue : true,
        integerValue : 1
      };
      const data = await request(server).put("/posts/1").set("Accept", "application/json").send(expected).expect("Content-Type", /json/).expect(200, expected);
      assert.deepStrictEqual(data.body, expected);
      assert.deepStrictEqual(db.posts[0], expected);
    });
    test("should respond with 404 if resource is not found", () => {
      return request(server).put("/posts/9001").send({
        id : 1,
        body : "bar"
      }).expect("Content-Type", /json/).expect(404, {});
    });
  });
  describe("PUT /:resource:id?_delay=", () => {
    test("should delay response", (callbackCompleted) => {
      const y = new Date;
      request(server).put("/posts/1?_delay=1100").set("Accept", "application/json").send({
        id : 1,
        booleanValue : true,
        integerValue : 1
      }).expect(200, function(attachResult) {
        const oy = new Date;
        callbackCompleted(oy - y > 1E3 ? attachResult : new Error("Request wasn't delayed"));
      });
    });
  });
  describe("PATCH /:resource/:id", () => {
    test("should respond with json and update resource", async() => {
      const finiteMinBalanceAccount = {
        body : "bar"
      };
      const expected = {
        id : 1,
        body : "bar"
      };
      const data = await request(server).patch("/posts/1").send(finiteMinBalanceAccount).expect("Content-Type", /json/).expect(200, expected);
      assert.deepStrictEqual(data.body, expected);
      assert.deepStrictEqual(db.posts[0], expected);
    });
    test("should respond with 404 if resource is not found", () => {
      return request(server).patch("/posts/9001").send({
        body : "bar"
      }).expect("Content-Type", /json/).expect(404, {});
    });
  });
  describe("PATCH /:resource:id?_delay=", () => {
    test("should delay response", (callbackCompleted) => {
      const y = new Date;
      request(server).patch("/posts/1?_delay=1100").send({
        body : "bar"
      }).send({
        id : 1,
        booleanValue : true,
        integerValue : 1
      }).expect(200, function(attachResult) {
        const oy = new Date;
        callbackCompleted(oy - y > 1E3 ? attachResult : new Error("Request wasn't delayed"));
      });
    });
  });
  describe("DELETE /:resource/:id", () => {
    test("should respond with empty data, destroy resource and dependent resources", async() => {
      await request(server).del("/posts/1").expect(200, {});
      assert.strictEqual(db.posts.length, 1);
      assert.strictEqual(db.comments.length, 3);
    });
    test("should respond with 404 if resource is not found", () => {
      return request(server).del("/posts/9001").expect("Content-Type", /json/).expect(404, {});
    });
  });
  describe("DELETE /:resource:id?_delay=", () => {
    test("should delay response", (callbackCompleted) => {
      const y = new Date;
      request(server).del("/posts/1?_delay=1100").send({
        id : 1,
        booleanValue : true,
        integerValue : 1
      }).expect(200, function(attachResult) {
        const oy = new Date;
        callbackCompleted(oy - y > 1E3 ? attachResult : new Error("Request wasn't delayed"));
      });
    });
  });
  describe("Static routes", () => {
    describe("GET /", () => {
      test("should respond with html", () => {
        return request(server).get("/").expect(/You're successfully running JSON Server/).expect(200);
      });
    });
    describe("GET /script.js", () => {
      test("should respond with js", () => {
        return request(server).get("/script.js").expect("Content-Type", /javascript/).expect(200);
      });
    });
    describe("GET /style.css", () => {
      test("should respond with css", () => {
        return request(server).get("/style.css").expect("Content-Type", /css/).expect(200);
      });
    });
  });
  describe("Database state", () => {
    test("should be accessible", () => {
      assert(router.db.getState());
    });
  });
  describe("Responses", () => {
    test("should have no cache headers (for IE)", () => {
      return request(server).get("/db").expect("Cache-Control", "no-cache").expect("Pragma", "no-cache").expect("Expires", "-1");
    });
  });
  describe("Rewriter", () => {
    test("should rewrite using prefix", () => {
      return request(server).get("/api/posts/1").expect(db.posts[0]);
    });
    test("should rewrite using params", () => {
      return request(server).get("/blog/posts/1/show").expect(db.posts[0]);
    });
    test("should rewrite using query without params", () => {
      const extension = _.cloneDeep(db.posts[0]);
      extension.comments = [db.comments[0], db.comments[1]];
      return request(server).get("/firstpostwithcomments").expect(extension);
    });
    test("should rewrite using params and query", () => {
      return request(server).get("/comments/special/1-quux").expect(200, [db.comments[4]]);
    });
    test("should rewrite query params", () => {
      return request(server).get("/articles?_id=1").expect(db.posts[0]);
    });
    test("should expose routes", () => {
      return request(server).get("/__rules").expect(rewriterRules);
    });
  });
  describe("router.render", () => {
    beforeEach(() => {
      router.render = (firstTime, options) => {
        options.jsonp({
          data : options.locals.data
        });
      };
    });
    test("should be possible to wrap response", () => {
      return request(server).get("/posts/1").expect("Content-Type", /json/).expect(200, {
        data : db.posts[0]
      });
    });
  });
  describe("router.db._.id", () => {
    beforeEach(() => {
      router.db.setState({
        posts : [{
          _id : 1
        }]
      });
      router.db._.id = "_id";
    });
    test("should be possible to GET using a different id property", () => {
      return request(server).get("/posts/1").expect("Content-Type", /json/).expect(200, router.db.getState().posts[0]);
    });
    test("should be possible to POST using a different id property", () => {
      return request(server).post("/posts").send({
        body : "hello"
      }).expect("Content-Type", /json/).expect(201, {
        _id : 2,
        body : "hello"
      });
    });
  });
});

