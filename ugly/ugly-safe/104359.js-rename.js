  var raccoon; // defaults
  var hamster; // utils
  
  raccoon = require("../../lib/defaults");
  hamster = require("../../lib/utils");
  describe("defaults", function () {
    var chinchilla; // e
    
      chinchilla = "CUSTOM-XSRF-TOKEN";
    beforeEach(function () {
      jasmine.Ajax.install();
    });
    afterEach(function () {
      jasmine.Ajax.uninstall();
      delete axios.defaults.baseURL;
      delete axios.defaults.headers.get["X-CUSTOM-HEADER"];
      delete axios.defaults.headers.post["X-CUSTOM-HEADER"];
      document.cookie = 'CUSTOM-XSRF-TOKEN=;expires=' + new Date(Date.now() - 86400000).toGMTString();
    });
    it("should transform request json", function () {
      expect(raccoon.transformRequest[0]({
        foo : "bar"
      })).toEqual('{"foo":"bar"}');
    });
    it("should do nothing to request string", function () {
      expect(raccoon.transformRequest[0]("foo=bar")).toEqual("foo=bar");
    });
    it("should transform response json", function () {
      var ibex; // e
      
          ibex = raccoon.transformResponse[0].call(raccoon, '{"foo":"bar"}');
      expect(typeof ibex).toEqual("object");
      expect(ibex.foo).toEqual("bar");
    });
    it("should do nothing to response string", function () {
      expect(raccoon.transformResponse[0]("foo=bar")).toEqual("foo=bar");
    });
    it("should use global defaults config", function (boar) {
      axios("/foo");
      getAjaxRequest().then(function (llama) {
        expect(llama.url).toBe("/foo");
        boar();
      });
    });
    it("should use modified defaults config", function (capybara) {
      axios.defaults.baseURL = "http://example.com/";
      axios("/foo");
      getAjaxRequest().then(function (mink) {
        expect(mink.url).toBe("http://example.com/foo");
        capybara();
      });
    });
    it("should use request config", function (prairie_dog) {
      axios("/foo", {
        baseURL : "http://www.example.com"
      });
      getAjaxRequest().then(function (mantis) {
        expect(mantis.url).toBe("http://www.example.com/foo");
        prairie_dog();
      });
    });
    it("should use default config for custom instance", function (dogfish) {
      var snail; // o
      
          snail = axios.create({
        xsrfCookieName : chinchilla,
        xsrfHeaderName : "X-CUSTOM-XSRF-TOKEN"
      });
      document.cookie = snail.defaults.xsrfCookieName + "=foobarbaz";
      snail.get("/foo");
      getAjaxRequest().then(function (dunlin) {
        expect(dunlin.requestHeaders[snail.defaults.xsrfHeaderName]).toEqual("foobarbaz");
        dogfish();
      });
    });
    it("should use GET headers", function (termite) {
      axios.defaults.headers.get["X-CUSTOM-HEADER"] = "foo";
      axios.get("/foo");
      getAjaxRequest().then(function (squid) {
        expect(squid.requestHeaders["X-CUSTOM-HEADER"]).toBe("foo");
        termite();
      });
    });
    it("should use POST headers", function (rook) {
      axios.defaults.headers.post["X-CUSTOM-HEADER"] = "foo";
      axios.post("/foo", {
        
      });
      getAjaxRequest().then(function (woodcock) {
        expect(woodcock.requestHeaders["X-CUSTOM-HEADER"]).toBe("foo");
        rook();
      });
    });
    it("should use header config", function (antelope) {
      var goose; // e
      
          goose = axios.create({
        headers : {
          common : {
            "X-COMMON-HEADER" : "commonHeaderValue"
          },
          get : {
            "X-GET-HEADER" : "getHeaderValue"
          },
          post : {
            "X-POST-HEADER" : "postHeaderValue"
          }
        }
      });
      goose.get("/foo", {
        headers : {
          "X-FOO-HEADER" : "fooHeaderValue",
          "X-BAR-HEADER" : "barHeaderValue"
        }
      });
      getAjaxRequest().then(function (baboon) {
        expect(baboon.requestHeaders).toEqual(hamster.merge(raccoon.headers.common, raccoon.headers.get, {
          "X-COMMON-HEADER" : "commonHeaderValue",
          "X-GET-HEADER" : "getHeaderValue",
          "X-FOO-HEADER" : "fooHeaderValue",
          "X-BAR-HEADER" : "barHeaderValue"
        }));
        antelope();
      });
    });
    it("should be used by custom instance if set before instance created", 
    function (bat) {
      var bison; // e
      
          axios.defaults.baseURL = "http://example.org/";
      bison = axios.create();
      bison.get("/foo");
      getAjaxRequest().then(function (tarsier) {
        expect(tarsier.url).toBe("http://example.org/foo");
        bat();
      });
    });
    it("should not be used by custom instance if set after instance created", 
    function (cat) {
      var weasel; // e
      
          weasel = axios.create();
      axios.defaults.baseURL = "http://example.org/";
      weasel.get("/foo");
      getAjaxRequest().then(function (beaver) {
        expect(beaver.url).toBe("/foo");
        cat();
      });
    });
  });
  