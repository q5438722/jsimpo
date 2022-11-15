'use strict';
const should = require("should");
const sinon = require("sinon");
const urlUtils = require("../../../core/shared/url-utils");
const urlService = require("../../../core/frontend/services/url");
const getUrl = require("../../../core/frontend/meta/url");
const testUtils = require("../../utils");
describe("getUrl", function() {
  beforeEach(function() {
    sinon.stub(urlService, "getUrlByResourceId");
    sinon.stub(urlUtils, "urlFor");
  });
  afterEach(function() {
    sinon.restore();
  });
  it("should return url for a post", function() {
    const data = testUtils.DataGenerator.forKnex.createPost();
    urlService.getUrlByResourceId.withArgs(data.id, {
      absolute : undefined,
      secure : undefined,
      withSubdirectory : true
    }).returns("post url");
    getUrl(data).should.eql("post url");
  });
  describe("preview url: drafts/scheduled posts", function() {
    it("not absolute, not secure", function() {
      const config = testUtils.DataGenerator.forKnex.createPost({
        status : "draft"
      });
      urlService.getUrlByResourceId.withArgs(config.id).returns("/404/");
      urlUtils.urlFor.withArgs({
        relativeUrl : "/p/" + config.uuid + "/",
        secure : undefined
      }, null, undefined).returns("relative");
      let pngOut = getUrl(config);
      urlService.getUrlByResourceId.calledOnce.should.be.true();
      urlUtils.urlFor.withArgs({
        relativeUrl : "/p/" + config.uuid + "/",
        secure : undefined
      }, null, undefined).calledOnce.should.be.true();
      pngOut.should.eql("relative");
    });
    it("absolute, not secure", function() {
      const config = testUtils.DataGenerator.forKnex.createPost({
        status : "draft"
      });
      urlService.getUrlByResourceId.withArgs(config.id).returns("/404/");
      urlUtils.urlFor.withArgs({
        relativeUrl : "/p/" + config.uuid + "/",
        secure : undefined
      }, null, true).returns("absolute");
      let pngOut = getUrl(config, true);
      urlService.getUrlByResourceId.calledOnce.should.be.true();
      urlUtils.urlFor.withArgs({
        relativeUrl : "/p/" + config.uuid + "/",
        secure : undefined
      }, null, true).calledOnce.should.be.true();
      pngOut.should.eql("absolute");
    });
    it("absolute, secure", function() {
      const config = testUtils.DataGenerator.forKnex.createPost({
        status : "draft"
      });
      config.secure = true;
      urlService.getUrlByResourceId.withArgs(config.id).returns("/404/");
      urlUtils.urlFor.withArgs({
        relativeUrl : "/p/" + config.uuid + "/",
        secure : true
      }, null, true).returns("absolute secure");
      let pngOut = getUrl(config, true);
      urlService.getUrlByResourceId.calledOnce.should.be.true();
      urlUtils.urlFor.withArgs({
        relativeUrl : "/p/" + config.uuid + "/",
        secure : true
      }, null, true).calledOnce.should.be.true();
      pngOut.should.eql("absolute secure");
    });
  });
  it("should return absolute url for a post", function() {
    const data = testUtils.DataGenerator.forKnex.createPost();
    urlService.getUrlByResourceId.withArgs(data.id, {
      absolute : true,
      secure : undefined,
      withSubdirectory : true
    }).returns("absolute post url");
    getUrl(data, true).should.eql("absolute post url");
  });
  it("should return absolute url for a post and remove /amp/ in url", function() {
    const req = {
      relativeUrl : "/*/amp/"
    };
    urlUtils.urlFor.withArgs(req, {}, true).returns("absolute/*/amp/");
    getUrl(req, true).should.eql("absolute/*/");
    urlService.getUrlByResourceId.called.should.be.false();
  });
  it("should return url for a tag", function() {
    const data = testUtils.DataGenerator.forKnex.createTag();
    data.parent = null;
    urlService.getUrlByResourceId.withArgs(data.id, {
      absolute : undefined,
      secure : undefined,
      withSubdirectory : true
    }).returns("tag url");
    getUrl(data).should.eql("tag url");
  });
  it("should return secure url for a tag", function() {
    const data = testUtils.DataGenerator.forKnex.createTag();
    data.parent = null;
    data.secure = true;
    urlService.getUrlByResourceId.withArgs(data.id, {
      absolute : undefined,
      secure : true,
      withSubdirectory : true
    }).returns("secure tag url");
    getUrl(data).should.eql("secure tag url");
  });
  it("should return url for a author", function() {
    const data = testUtils.DataGenerator.forKnex.createUser();
    urlService.getUrlByResourceId.withArgs(data.id, {
      absolute : undefined,
      secure : undefined,
      withSubdirectory : true
    }).returns("author url");
    getUrl(data).should.eql("author url");
  });
  it("should return secure absolute url for a author", function() {
    const data = testUtils.DataGenerator.forKnex.createUser();
    data.secure = true;
    urlService.getUrlByResourceId.withArgs(data.id, {
      absolute : true,
      secure : true,
      withSubdirectory : true
    }).returns("absolute secure author url");
    getUrl(data, true).should.eql("absolute secure author url");
  });
  it("should return url for a nav", function() {
    const data = {
      label : "About Me",
      url : "/about-me/",
      slug : "about-me",
      current : true
    };
    urlUtils.urlFor.withArgs("nav", {
      nav : data,
      secure : data.secure
    }, undefined).returns("nav url");
    getUrl(data).should.equal("nav url");
  });
  it("should return absolute url for a nav", function() {
    const data = {
      label : "About Me",
      url : "/about-me/",
      slug : "about-me",
      current : true
    };
    urlUtils.urlFor.withArgs("nav", {
      nav : data,
      secure : data.secure
    }, true).returns("absolute nav url");
    getUrl(data, true).should.equal("absolute nav url");
  });
  it("should return `relativeUrl` and remove /amp/ in url", function() {
    const req = {
      relativeUrl : "/*/amp/"
    };
    urlUtils.urlFor.withArgs(req, {}, undefined).returns(req.relativeUrl);
    getUrl(req).should.eql("/*/");
    urlService.getUrlByResourceId.called.should.be.false();
  });
});

