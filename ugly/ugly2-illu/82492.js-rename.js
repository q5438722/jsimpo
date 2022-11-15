const errors = require("@tryghost/errors");

const sinon = require("sinon");

const Promise = require("bluebird");

const markdownToMobiledoc = require("../../utils/fixtures/data-generator").markdownToMobiledoc;

const helpers = require("../../../core/frontend/helpers");

const api = require("../../../core/server/api");

helpers.next_post = helpers.prev_post;describe("{{next_post}} helper", function () {
  const t = "canary";
  var n;
  var l;
  beforeEach(function () {
    n = { root: { _locals: { apiVersion: t }, context: ["post"] } };sinon.stub(api, "postsPublic").get(() => {
      return { browse: l };
    });
  });afterEach(function () {
    sinon.restore();
  });describe("with valid post data - ", function () {
    beforeEach(function () {
      l = sinon.stub().callsFake(function (t) {
        if (t.filter.indexOf("published_at:>") > -1) {
          return Promise.resolve({ posts: [{ slug: "/next/", title: "post 3" }] });
        }
      });
    });it("shows 'if' template with next post data", function (t) {
      const e = sinon.spy();
      const s = sinon.spy();
      const o = { name: "next_post", data: n, fn: e, inverse: s };
      helpers.next_post.call({ html: "content", status: "published", mobiledoc: markdownToMobiledoc("ff"), title: "post2", slug: "current", published_at: new Date(0), url: "/current/" }, o).then(function () {
        e.calledOnce.should.be.true();s.calledOnce.should.be.false();e.firstCall.args.should.have.lengthOf(2);e.firstCall.args[0].should.have.properties("slug", "title");e.firstCall.args[1].should.be.an.Object().and.have.property("data");l.calledOnce.should.be.true();l.firstCall.args[0].include.should.eql("author,authors,tags");t();
      }).catch(t);
    });
  });describe("for valid post with no next post", function () {
    beforeEach(function () {
      l = sinon.stub().callsFake(function (t) {
        if (t.filter.indexOf("published_at:>") > -1) {
          return Promise.resolve({ posts: [] });
        }
      });
    });it("shows 'else' template", function (t) {
      const e = sinon.spy();
      const s = sinon.spy();
      const o = { name: "next_post", data: n, fn: e, inverse: s };
      helpers.next_post.call({ html: "content", status: "published", mobiledoc: markdownToMobiledoc("ff"), title: "post2", slug: "current", published_at: new Date(0), url: "/current/" }, o).then(function () {
        e.called.should.be.false();s.called.should.be.true();s.firstCall.args.should.have.lengthOf(2);s.firstCall.args[0].should.have.properties("slug", "title");s.firstCall.args[1].should.be.an.Object().and.have.property("data");t();
      }).catch(t);
    });
  });describe("for invalid post data", function () {
    beforeEach(function () {
      l = sinon.stub().callsFake(function (t) {
        if (t.filter.indexOf("published_at:>") > -1) {
          return Promise.resolve({});
        }
      });
    });it("shows 'else' template", function (t) {
      const e = sinon.spy();
      const s = sinon.spy();
      const o = { name: "next_post", data: n, fn: e, inverse: s };
      helpers.next_post.call({}, o).then(function () {
        e.called.should.be.false();s.called.should.be.true();l.called.should.be.false();t();
      }).catch(t);
    });
  });describe("for page", function () {
    beforeEach(function () {
      n = { root: { _locals: { apiVersion: t }, context: ["page"] } };l = sinon.stub().callsFake(function (t) {
        if (t.filter.indexOf("published_at:>") > -1) {
          return Promise.resolve({ posts: [{ slug: "/previous/", title: "post 1" }] });
        }
      });
    });it("shows 'else' template", function (t) {
      const e = sinon.spy();
      const s = sinon.spy();
      const o = { name: "next_post", data: n, fn: e, inverse: s };
      helpers.next_post.call({ html: "content", status: "published", mobiledoc: markdownToMobiledoc("ff"), title: "post2", slug: "current", published_at: new Date(0), url: "/current/", page: true }, o).then(function () {
        e.called.should.be.false();s.called.should.be.true();t();
      }).catch(t);
    });
  });describe("for unpublished post", function () {
    beforeEach(function () {
      n = { root: { _locals: { apiVersion: t }, context: ["preview", "post"] } };l = sinon.stub().callsFake(function (t) {
        if (t.filter.indexOf("published_at:>") > -1) {
          return Promise.resolve({ posts: [{ slug: "/next/", title: "post 3" }] });
        }
      });
    });it("shows 'else' template", function (t) {
      const e = sinon.spy();
      const s = sinon.spy();
      const o = { name: "next_post", data: n, fn: e, inverse: s };
      helpers.next_post.call({ html: "content", status: "draft", mobiledoc: markdownToMobiledoc("ff"), title: "post2", slug: "current", created_at: new Date(0), url: "/current/" }, o).then(function () {
        e.called.should.be.false();s.called.should.be.true();t();
      }).catch(t);
    });
  });describe("with \"in\" option", function () {
    beforeEach(function () {
      l = sinon.stub().callsFake(function (t) {
        if (t.filter.indexOf("published_at:>") > -1) {
          return Promise.resolve({ posts: [{ slug: "/next/", title: "post 1" }] });
        }
      });
    });it("shows 'if' template with prev post data with primary_tag set", function (t) {
      const e = sinon.spy();
      const s = sinon.spy();
      const o = { name: "next_post", data: n, fn: e, inverse: s, hash: { in: "primary_tag" } };
      helpers.next_post.call({ html: "content", status: "published", mobiledoc: markdownToMobiledoc("ff"), title: "post2", slug: "current", published_at: new Date(0), primary_tag: { slug: "test" }, url: "/current/" }, o).then(function () {
        e.calledOnce.should.be.true();s.calledOnce.should.be.false();e.firstCall.args.should.have.lengthOf(2);e.firstCall.args[0].should.have.properties("slug", "title");e.firstCall.args[1].should.be.an.Object().and.have.property("data");l.calledOnce.should.be.true();l.firstCall.args[0].include.should.eql("author,authors,tags");l.firstCall.args[0].filter.should.match(/\+primary_tag:test/);t();
      }).catch(t);
    });it("shows 'if' template with prev post data with primary_author set", function (t) {
      const e = sinon.spy();
      const s = sinon.spy();
      const o = { name: "next_post", data: n, fn: e, inverse: s, hash: { in: "primary_author" } };
      helpers.next_post.call({ html: "content", status: "published", mobiledoc: markdownToMobiledoc("ff"), title: "post2", slug: "current", published_at: new Date(0), primary_author: { slug: "hans" }, url: "/current/" }, o).then(function () {
        e.calledOnce.should.be.true();s.calledOnce.should.be.false();e.firstCall.args.should.have.lengthOf(2);e.firstCall.args[0].should.have.properties("slug", "title");e.firstCall.args[1].should.be.an.Object().and.have.property("data");l.calledOnce.should.be.true();l.firstCall.args[0].include.should.eql("author,authors,tags");l.firstCall.args[0].filter.should.match(/\+primary_author:hans/);t();
      }).catch(t);
    });it("shows 'if' template with prev post data with author set", function (t) {
      const e = sinon.spy();
      const s = sinon.spy();
      const o = { name: "next_post", data: n, fn: e, inverse: s, hash: { in: "author" } };
      helpers.next_post.call({ html: "content", status: "published", mobiledoc: markdownToMobiledoc("ff"), title: "post2", slug: "current", published_at: new Date(0), author: { slug: "author-name" }, url: "/current/" }, o).then(function () {
        e.calledOnce.should.be.true();s.calledOnce.should.be.false();e.firstCall.args.should.have.lengthOf(2);e.firstCall.args[0].should.have.properties("slug", "title");e.firstCall.args[1].should.be.an.Object().and.have.property("data");l.calledOnce.should.be.true();l.firstCall.args[0].include.should.eql("author,authors,tags");l.firstCall.args[0].filter.should.match(/\+author:author-name/);t();
      }).catch(t);
    });it("shows 'if' template with prev post data & ignores in author if author isnt present", function (t) {
      const e = sinon.spy();
      const s = sinon.spy();
      const o = { name: "next_post", data: n, fn: e, inverse: s, hash: { in: "author" } };
      helpers.next_post.call({ html: "content", status: "published", mobiledoc: markdownToMobiledoc("ff"), title: "post2", slug: "current", published_at: new Date(0), url: "/current/" }, o).then(function () {
        e.calledOnce.should.be.true();s.calledOnce.should.be.false();e.firstCall.args.should.have.lengthOf(2);e.firstCall.args[0].should.have.properties("slug", "title");e.firstCall.args[1].should.be.an.Object().and.have.property("data");l.calledOnce.should.be.true();l.firstCall.args[0].include.should.eql("author,authors,tags");l.firstCall.args[0].filter.should.not.match(/\+author:/);t();
      }).catch(t);
    });it("shows 'if' template with prev post data & ignores unknown in value", function (t) {
      const e = sinon.spy();
      const s = sinon.spy();
      const o = { name: "next_post", data: n, fn: e, inverse: s, hash: { in: "magic" } };
      helpers.next_post.call({ html: "content", status: "published", mobiledoc: markdownToMobiledoc("ff"), title: "post2", slug: "current", published_at: new Date(0), author: { slug: "author-name" }, url: "/current/" }, o).then(function () {
        e.calledOnce.should.be.true();s.calledOnce.should.be.false();e.firstCall.args.should.have.lengthOf(2);e.firstCall.args[0].should.have.properties("slug", "title");e.firstCall.args[1].should.be.an.Object().and.have.property("data");l.calledOnce.should.be.true();l.firstCall.args[0].include.should.eql("author,authors,tags");l.firstCall.args[0].filter.should.not.match(/\+magic/);t();
      }).catch(t);
    });
  });describe("general error handling", function () {
    beforeEach(function () {
      l = sinon.stub().callsFake(function () {
        return Promise.reject(new errors.NotFoundError({ message: "Something wasn't found" }));
      });
    });it("should handle error from the API", function (t) {
      const e = sinon.spy();
      const s = sinon.spy();
      const o = { name: "next_post", data: n, fn: e, inverse: s };
      helpers.next_post.call({ html: "content", status: "published", mobiledoc: markdownToMobiledoc("ff"), title: "post2", slug: "current", published_at: new Date(0), url: "/current/" }, o).then(function () {
        e.called.should.be.false();s.calledOnce.should.be.true();s.firstCall.args[1].should.be.an.Object().and.have.property("data");s.firstCall.args[1].data.should.be.an.Object().and.have.property("error");s.firstCall.args[1].data.error.should.match(/^Something wasn't found/);t();
      }).catch(t);
    });it("should show warning for call without any options", function (t) {
      const e = sinon.spy();
      const s = sinon.spy();
      const o = { name: "next_post", data: { root: {} } };
      helpers.next_post.call({}, o).then(function () {
        e.called.should.be.false();s.called.should.be.false();t();
      }).catch(t);
    });
  });
});
