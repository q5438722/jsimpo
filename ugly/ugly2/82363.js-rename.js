const should=require("should");const sinon=require("sinon");const urlUtils=require("../../../core/shared/url-utils");const urlService=require("../../../core/frontend/services/url");const getUrl=require("../../../core/frontend/meta/url");const testUtils=require("../../utils");describe("getUrl",function(){beforeEach(function(){sinon.stub(urlService,"getUrlByResourceId");sinon.stub(urlUtils,"urlFor")});afterEach(function(){sinon.restore()});it("should return url for a post",function(){const e=testUtils.DataGenerator.forKnex.createPost();urlService.getUrlByResourceId.withArgs(e.id,{absolute:undefined,secure:undefined,withSubdirectory:true}).returns("post url");getUrl(e).should.eql("post url")});describe("preview url: drafts/scheduled posts",function(){it("not absolute, not secure",function(){const e=testUtils.DataGenerator.forKnex.createPost({status:"draft"});urlService.getUrlByResourceId.withArgs(e.id).returns("/404/");urlUtils.urlFor.withArgs({relativeUrl:"/p/"+e.uuid+"/",secure:undefined},null,undefined).returns("relative");let r=getUrl(e);urlService.getUrlByResourceId.calledOnce.should.be.true();urlUtils.urlFor.withArgs({relativeUrl:"/p/"+e.uuid+"/",secure:undefined},null,undefined).calledOnce.should.be.true();r.should.eql("relative")});it("absolute, not secure",function(){const e=testUtils.DataGenerator.forKnex.createPost({status:"draft"});urlService.getUrlByResourceId.withArgs(e.id).returns("/404/");urlUtils.urlFor.withArgs({relativeUrl:"/p/"+e.uuid+"/",secure:undefined},null,true).returns("absolute");let r=getUrl(e,true);urlService.getUrlByResourceId.calledOnce.should.be.true();urlUtils.urlFor.withArgs({relativeUrl:"/p/"+e.uuid+"/",secure:undefined},null,true).calledOnce.should.be.true();r.should.eql("absolute")});it("absolute, secure",function(){const e=testUtils.DataGenerator.forKnex.createPost({status:"draft"});e.secure=true;urlService.getUrlByResourceId.withArgs(e.id).returns("/404/");urlUtils.urlFor.withArgs({relativeUrl:"/p/"+e.uuid+"/",secure:true},null,true).returns("absolute secure");let r=getUrl(e,true);urlService.getUrlByResourceId.calledOnce.should.be.true();urlUtils.urlFor.withArgs({relativeUrl:"/p/"+e.uuid+"/",secure:true},null,true).calledOnce.should.be.true();r.should.eql("absolute secure")})});it("should return absolute url for a post",function(){const e=testUtils.DataGenerator.forKnex.createPost();urlService.getUrlByResourceId.withArgs(e.id,{absolute:true,secure:undefined,withSubdirectory:true}).returns("absolute post url");getUrl(e,true).should.eql("absolute post url")});it("should return absolute url for a post and remove /amp/ in url",function(){const e={relativeUrl:"/*/amp/"};urlUtils.urlFor.withArgs(e,{},true).returns("absolute/*/amp/");getUrl(e,true).should.eql("absolute/*/");urlService.getUrlByResourceId.called.should.be.false()});it("should return url for a tag",function(){const e=testUtils.DataGenerator.forKnex.createTag();e.parent=null;urlService.getUrlByResourceId.withArgs(e.id,{absolute:undefined,secure:undefined,withSubdirectory:true}).returns("tag url");getUrl(e).should.eql("tag url")});it("should return secure url for a tag",function(){const e=testUtils.DataGenerator.forKnex.createTag();e.parent=null;e.secure=true;urlService.getUrlByResourceId.withArgs(e.id,{absolute:undefined,secure:true,withSubdirectory:true}).returns("secure tag url");getUrl(e).should.eql("secure tag url")});it("should return url for a author",function(){const e=testUtils.DataGenerator.forKnex.createUser();urlService.getUrlByResourceId.withArgs(e.id,{absolute:undefined,secure:undefined,withSubdirectory:true}).returns("author url");getUrl(e).should.eql("author url")});it("should return secure absolute url for a author",function(){const e=testUtils.DataGenerator.forKnex.createUser();e.secure=true;urlService.getUrlByResourceId.withArgs(e.id,{absolute:true,secure:true,withSubdirectory:true}).returns("absolute secure author url");getUrl(e,true).should.eql("absolute secure author url")});it("should return url for a nav",function(){const e={label:"About Me",url:"/about-me/",slug:"about-me",current:true};urlUtils.urlFor.withArgs("nav",{nav:e,secure:e.secure},undefined).returns("nav url");getUrl(e).should.equal("nav url")});it("should return absolute url for a nav",function(){const e={label:"About Me",url:"/about-me/",slug:"about-me",current:true};urlUtils.urlFor.withArgs("nav",{nav:e,secure:e.secure},true).returns("absolute nav url");getUrl(e,true).should.equal("absolute nav url")});it("should return `relativeUrl` and remove /amp/ in url",function(){const e={relativeUrl:"/*/amp/"};urlUtils.urlFor.withArgs(e,{},undefined).returns(e.relativeUrl);getUrl(e).should.eql("/*/");urlService.getUrlByResourceId.called.should.be.false()})});