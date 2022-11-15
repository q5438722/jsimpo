'use strict';
var expect = require("expect.js");
var promiseRetry = require("../");
var promiseDelay = require("sleep-promise");
describe("promise-retry", function() {
  it("should call fn again if retry was called", function() {
    var id = 0;
    return promiseRetry(function(cb) {
      id = id + 1;
      return promiseDelay(10).then(function() {
        if (id <= 2) {
          cb(new Error("foo"));
        }
        return "final";
      });
    }, {
      factor : 1
    }).then(function(e) {
      expect(e).to.be("final");
      expect(id).to.be(3);
    }, function() {
      throw new Error("should not fail");
    });
  });
  it("should call fn with the attempt number", function() {
    var x2 = 0;
    return promiseRetry(function(cb, t) {
      x2 = x2 + 1;
      expect(x2).to.equal(t);
      return promiseDelay(10).then(function() {
        if (x2 <= 2) {
          cb(new Error("foo"));
        }
        return "final";
      });
    }, {
      factor : 1
    }).then(function(e) {
      expect(e).to.be("final");
      expect(x2).to.be(3);
    }, function() {
      throw new Error("should not fail");
    });
  });
  it("should not retry on fulfillment if retry was not called", function() {
    var id = 0;
    return promiseRetry(function() {
      id = id + 1;
      return promiseDelay(10).then(function() {
        return "final";
      });
    }).then(function(e) {
      expect(e).to.be("final");
      expect(id).to.be(1);
    }, function() {
      throw new Error("should not fail");
    });
  });
  it("should not retry on rejection if retry was not called", function() {
    var id = 0;
    return promiseRetry(function() {
      id = id + 1;
      return promiseDelay(10).then(function() {
        throw new Error("foo");
      });
    }).then(function() {
      throw new Error("should not succeed");
    }, function(e) {
      expect(e.message).to.be("foo");
      expect(id).to.be(1);
    });
  });
  it("should not retry on rejection if nr of retries is 0", function() {
    var id = 0;
    return promiseRetry(function(e) {
      id = id + 1;
      return promiseDelay(10).then(function() {
        throw new Error("foo");
      }).catch(e);
    }, {
      retries : 0
    }).then(function() {
      throw new Error("should not succeed");
    }, function(e) {
      expect(e.message).to.be("foo");
      expect(id).to.be(1);
    });
  });
  it("should reject the promise if the retries were exceeded", function() {
    var id = 0;
    return promiseRetry(function(e) {
      id = id + 1;
      return promiseDelay(10).then(function() {
        throw new Error("foo");
      }).catch(e);
    }, {
      retries : 2,
      factor : 1
    }).then(function() {
      throw new Error("should not succeed");
    }, function(e) {
      expect(e.message).to.be("foo");
      expect(id).to.be(3);
    });
  });
  it("should pass options to the underlying retry module", function() {
    var tt = 0;
    return promiseRetry(function(cb) {
      return promiseDelay(10).then(function() {
        if (tt < 2) {
          tt = tt + 1;
          cb(new Error("foo"));
        }
        return "final";
      });
    }, {
      retries : 1,
      factor : 1
    }).then(function() {
      throw new Error("should not succeed");
    }, function(e) {
      expect(e.message).to.be("foo");
    });
  });
  it("should convert direct fulfillments into promises", function() {
    return promiseRetry(function() {
      return "final";
    }, {
      factor : 1
    }).then(function(e) {
      expect(e).to.be("final");
    }, function() {
      throw new Error("should not fail");
    });
  });
  it("should convert direct rejections into promises", function() {
    promiseRetry(function() {
      throw new Error("foo");
    }, {
      retries : 1,
      factor : 1
    }).then(function() {
      throw new Error("should not succeed");
    }, function(e) {
      expect(e.message).to.be("foo");
    });
  });
  it("should not crash on undefined rejections", function() {
    return promiseRetry(function() {
      throw undefined;
    }, {
      retries : 1,
      factor : 1
    }).then(function() {
      throw new Error("should not succeed");
    }, function(e) {
      expect(e).to.be(undefined);
    }).then(function() {
      return promiseRetry(function(saveNotifs) {
        saveNotifs();
      }, {
        retries : 1,
        factor : 1
      });
    }).then(function() {
      throw new Error("should not succeed");
    }, function(e) {
      expect(e).to.be(undefined);
    });
  });
  it("should retry if retry() was called with undefined", function() {
    var id = 0;
    return promiseRetry(function(saveNotifs) {
      id = id + 1;
      return promiseDelay(10).then(function() {
        if (id <= 2) {
          saveNotifs();
        }
        return "final";
      });
    }, {
      factor : 1
    }).then(function(e) {
      expect(e).to.be("final");
      expect(id).to.be(3);
    }, function() {
      throw new Error("should not fail");
    });
  });
  it("should work with several retries in the same chain", function() {
    var x2 = 0;
    return promiseRetry(function(cb) {
      x2 = x2 + 1;
      return promiseDelay(10).then(function() {
        cb(new Error("foo"));
      }).catch(function(e) {
        cb(e);
      });
    }, {
      retries : 1,
      factor : 1
    }).then(function() {
      throw new Error("should not succeed");
    }, function(e) {
      expect(e.message).to.be("foo");
      expect(x2).to.be(2);
    });
  });
  it("should allow options to be passed first", function() {
    var id = 0;
    return promiseRetry({
      factor : 1
    }, function(cb) {
      id = id + 1;
      return promiseDelay(10).then(function() {
        if (id <= 2) {
          cb(new Error("foo"));
        }
        return "final";
      });
    }).then(function(e) {
      expect(e).to.be("final");
      expect(id).to.be(3);
    }, function() {
      throw new Error("should not fail");
    });
  });
});

