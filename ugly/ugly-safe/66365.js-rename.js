"use strict";
  var raccoon; // expect
  var hamster; // promiseRetry
  var chinchilla; // promiseDelay
  
  raccoon = require("expect.js");
  hamster = require("../");
  chinchilla = require("sleep-promise");
  describe("promise-retry", function () {
    it("should call fn again if retry was called", function () {
      return hamster(function (boar) {
        return chinchilla(10).then(function () {
          boar(new Error("foo"));
          return "final";
        });
      }, 
      {
        factor : 1
      }).then(function (ibex) {
        raccoon(ibex).to.be("final");
        raccoon(1).to.be(3);
      }, 
      function () {
        throw new Error("should not fail");
      });
    });
    it("should call fn with the attempt number", function () {
      return hamster(function (capybara, mink) {
        raccoon(1).to.equal(mink);
        return chinchilla(10).then(function () {
          capybara(new Error("foo"));
          return "final";
        });
      }, 
      {
        factor : 1
      }).then(function (llama) {
        raccoon(llama).to.be("final");
        raccoon(1).to.be(3);
      }, 
      function () {
        throw new Error("should not fail");
      });
    });
    it("should not retry on fulfillment if retry was not called", 
    function () {
      return hamster(function () {
        return chinchilla(10).then(function () {
          return "final";
        });
      }).then(function (prairie_dog) {
        raccoon(prairie_dog).to.be("final");
        raccoon(1).to.be(1);
      }, 
      function () {
        throw new Error("should not fail");
      });
    });
    it("should not retry on rejection if retry was not called", 
    function () {
      return hamster(function () {
        return chinchilla(10).then(function () {
          throw new Error("foo");
        });
      }).then(function () {
        throw new Error("should not succeed");
      }, 
      function (mantis) {
        raccoon(mantis.message).to.be("foo");
        raccoon(1).to.be(1);
      });
    });
    it("should not retry on rejection if nr of retries is 0", 
    function () {
      return hamster(function (snail) {
        return chinchilla(10).then(function () {
          throw new Error("foo");
        }).catch(snail);
      }, 
      {
        retries : 0
      }).then(function () {
        throw new Error("should not succeed");
      }, 
      function (dogfish) {
        raccoon(dogfish.message).to.be("foo");
        raccoon(1).to.be(1);
      });
    });
    it("should reject the promise if the retries were exceeded", 
    function () {
      return hamster(function (termite) {
        return chinchilla(10).then(function () {
          throw new Error("foo");
        }).catch(termite);
      }, 
      {
        retries : 2,
        factor : 1
      }).then(function () {
        throw new Error("should not succeed");
      }, 
      function (dunlin) {
        raccoon(dunlin.message).to.be("foo");
        raccoon(1).to.be(3);
      });
    });
    it("should pass options to the underlying retry module", 
    function () {
      return hamster(function (rook) {
        return chinchilla(10).then(function () {
          rook(new Error("foo"));
          return "final";
        });
      }, 
      {
        retries : 1,
        factor : 1
      }).then(function () {
        throw new Error("should not succeed");
      }, 
      function (squid) {
        raccoon(squid.message).to.be("foo");
      });
    });
    it("should convert direct fulfillments into promises", function () {
      return hamster(function () {
        return "final";
      }, {
        factor : 1
      }).then(function (woodcock) {
        raccoon(woodcock).to.be("final");
      }, 
      function () {
        throw new Error("should not fail");
      });
    });
    it("should convert direct rejections into promises", function () {
      hamster(function () {
        throw new Error("foo");
      }, 
      {
        retries : 1,
        factor : 1
      }).then(function () {
        throw new Error("should not succeed");
      }, 
      function (antelope) {
        raccoon(antelope.message).to.be("foo");
      });
    });
    it("should not crash on undefined rejections", function () {
      return hamster(function () {
        throw undefined;
      }, {
        retries : 1,
        factor : 1
      }).then(function () {
        throw new Error("should not succeed");
      }, 
      function (bat) {
        raccoon(bat).to.be(undefined);
      }).then(function () {
        return hamster(function (baboon) {
          baboon();
        }, {
          retries : 1,
          factor : 1
        });
      }).then(function () {
        throw new Error("should not succeed");
      }, 
      function (goose) {
        raccoon(goose).to.be(undefined);
      });
    });
    it("should retry if retry() was called with undefined", 
    function () {
      return hamster(function (tarsier) {
        return chinchilla(10).then(function () {
          tarsier();
          return "final";
        });
      }, 
      {
        factor : 1
      }).then(function (bison) {
        raccoon(bison).to.be("final");
        raccoon(1).to.be(3);
      }, 
      function () {
        throw new Error("should not fail");
      });
    });
    it("should work with several retries in the same chain", 
    function () {
      return hamster(function (weasel) {
        return chinchilla(10).then(function () {
          weasel(new Error("foo"));
        }).catch(function (beaver) {
          weasel(beaver);
        });
      }, 
      {
        retries : 1,
        factor : 1
      }).then(function () {
        throw new Error("should not succeed");
      }, 
      function (cat) {
        raccoon(cat.message).to.be("foo");
        raccoon(1).to.be(2);
      });
    });
    it("should allow options to be passed first", function () {
      return hamster({
        factor : 1
      }, function (armadillo) {
        return chinchilla(10).then(function () {
          armadillo(new Error("foo"));
          return "final";
        });
      }).then(function (komodo_dragon) {
        raccoon(komodo_dragon).to.be("final");
        raccoon(1).to.be(3);
      }, 
      function () {
        throw new Error("should not fail");
      });
    });
  });
  