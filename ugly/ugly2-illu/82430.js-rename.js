const errors = require("@tryghost/errors");

const _ = require("lodash");

const should = require("should");

const sinon = require("sinon");

const Promise = require("bluebird");

const validators = require("../../../../../../../core/server/api/canary/utils/validators");

describe("Unit: canary/utils/validators/input/tags", function () {
  afterEach(function () {
    sinon.restore();
  });describe("add", function () {
    const o = { docName: "tags", method: "add" };
    describe("required fields", function () {
      it("should fail with no data", function () {
        const t = { options: {}, data: {} };
        return validators.input.tags.add(o, t).then(Promise.reject).catch(t => {
          t.errorType.should.equal("ValidationError");
        });
      });it("should fail with no tags", function () {
        const t = { options: {}, data: { posts: [] } };
        return validators.input.tags.add(o, t).then(Promise.reject).catch(t => {
          t.errorType.should.equal("ValidationError");
        });
      });it("should fail with no tags in array", function () {
        const t = { options: {}, data: { tags: [] } };
        return validators.input.tags.add(o, t).then(Promise.reject).catch(t => {
          t.errorType.should.equal("ValidationError");
        });
      });it("should fail with more than tags", function () {
        const t = { options: {}, data: { tags: [], posts: [] } };
        return validators.input.tags.add(o, t).then(Promise.reject).catch(t => {
          t.errorType.should.equal("ValidationError");
        });
      });it("should fail without required fields", function () {
        const t = { options: {}, data: { tags: [{ what: "a fail" }] } };
        return validators.input.tags.add(o, t).then(Promise.reject).catch(t => {
          t.errorType.should.equal("ValidationError");
        });
      });it("should pass with required fields", function () {
        const t = { options: {}, data: { tags: [{ name: "pass" }] } };
        return validators.input.tags.add(o, t);
      });it("should remove `strip`able fields and leave regular fields", function () {
        const t = { options: {}, data: { tags: [{ name: "pass", parent: "strip me", created_at: "strip me", created_by: "strip me", updated_at: "strip me", updated_by: "strip me" }] } };
        const a = validators.input.tags.add(o, t);
        should.exist(t.data.tags[0].name);should.not.exist(t.data.tags[0].parent);should.not.exist(t.data.tags[0].created_at);should.not.exist(t.data.tags[0].created_by);should.not.exist(t.data.tags[0].updated_at);should.not.exist(t.data.tags[0].updated_by);return a;
      });
    });describe("field formats", function () {
      const e = { name: [123, new Date(), ",starts-with-coma", "", _.repeat("a", 192), null], slug: [123, new Date(), _.repeat("a", 192)], description: [123, new Date(), _.repeat("a", 501)], feature_image: [123, new Date(), "not uri"], visibility: [123, new Date(), "abc", null], meta_title: [123, new Date(), _.repeat("a", 301)], meta_description: [123, new Date(), _.repeat("a", 501)] };
      Object.keys(e).forEach(r => {
        it(`should fail for bad ${r}`, function () {
          const t = e[r];
          const a = t.map(t => {
            const a = {};
            a[r] = t;if (r !== "name") {
              a.name = "abc";
            }const e = { options: {}, data: { tags: [{}] } };
            return validators.input.tags.add(o, e).then(Promise.reject).catch(t => {
              t.errorType.should.equal("ValidationError");
            });
          });
          return Promise.all(a);
        });
      });
    });
  });describe("edit", function () {
    const a = { docName: "tags", method: "edit" };
    describe("required fields", function () {
      it("should fail with no data", function () {
        const t = { options: {}, data: {} };
        return validators.input.tags.edit(a, t).then(Promise.reject).catch(t => {
          t.errorType.should.equal("ValidationError");
        });
      });it("should fail with no tags", function () {
        const t = { options: {}, data: { posts: [] } };
        return validators.input.tags.edit(a, t).then(Promise.reject).catch(t => {
          t.errorType.should.equal("ValidationError");
        });
      });it("should fail with more than tags", function () {
        const t = { options: {}, data: { tags: [], posts: [] } };
        return validators.input.tags.edit(a, t).then(Promise.reject).catch(t => {
          t.errorType.should.equal("ValidationError");
        });
      });it("should pass with some fields", function () {
        const t = { options: {}, data: { tags: [{ name: "pass" }] } };
        return validators.input.tags.edit(a, t);
      });
    });
  });
});
