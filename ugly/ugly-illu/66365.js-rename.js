"use strict";

const expect = require("expect.js");

const promiseRetry = require("../");

const promiseDelay = require("sleep-promise");

describe("promise-retry", function () {
  it("should call fn again if retry was called", function () {
    var t = 0;
    return promiseRetry(function (e) {
      t += 1;return promiseDelay(10).then(function () {
        if (t <= 2) {
          e(new Error("foo"));
        }return "final";
      });
    }, { factor: 1 }).then(function (e) {
      expect(e).to.be("final");expect(t).to.be(3);
    }, function () {
      throw new Error("should not fail");
    });
  });it("should call fn with the attempt number", function () {
    var r = 0;
    return promiseRetry(function (e, t) {
      r += 1;expect(r).to.equal(t);return promiseDelay(10).then(function () {
        if (r <= 2) {
          e(new Error("foo"));
        }return "final";
      });
    }, { factor: 1 }).then(function (e) {
      expect(e).to.be("final");expect(r).to.be(3);
    }, function () {
      throw new Error("should not fail");
    });
  });it("should not retry on fulfillment if retry was not called", function () {
    var t = 0;
    return promiseRetry(function () {
      t += 1;return promiseDelay(10).then(function () {
        return "final";
      });
    }).then(function (e) {
      expect(e).to.be("final");expect(t).to.be(1);
    }, function () {
      throw new Error("should not fail");
    });
  });it("should not retry on rejection if retry was not called", function () {
    var t = 0;
    return promiseRetry(function () {
      t += 1;return promiseDelay(10).then(function () {
        throw new Error("foo");
      });
    }).then(function () {
      throw new Error("should not succeed");
    }, function (e) {
      expect(e.message).to.be("foo");expect(t).to.be(1);
    });
  });it("should not retry on rejection if nr of retries is 0", function () {
    var t = 0;
    return promiseRetry(function (e) {
      t += 1;return promiseDelay(10).then(function () {
        throw new Error("foo");
      }).catch(e);
    }, { retries: 0 }).then(function () {
      throw new Error("should not succeed");
    }, function (e) {
      expect(e.message).to.be("foo");expect(t).to.be(1);
    });
  });it("should reject the promise if the retries were exceeded", function () {
    var t = 0;
    return promiseRetry(function (e) {
      t += 1;return promiseDelay(10).then(function () {
        throw new Error("foo");
      }).catch(e);
    }, { retries: 2, factor: 1 }).then(function () {
      throw new Error("should not succeed");
    }, function (e) {
      expect(e.message).to.be("foo");expect(t).to.be(3);
    });
  });it("should pass options to the underlying retry module", function () {
    var t = 0;
    return promiseRetry(function (e) {
      return promiseDelay(10).then(function () {
        if (t < 2) {
          t += 1;e(new Error("foo"));
        }return "final";
      });
    }, { retries: 1, factor: 1 }).then(function () {
      throw new Error("should not succeed");
    }, function (e) {
      expect(e.message).to.be("foo");
    });
  });it("should convert direct fulfillments into promises", function () {
    return promiseRetry(function () {
      return "final";
    }, { factor: 1 }).then(function (e) {
      expect(e).to.be("final");
    }, function () {
      throw new Error("should not fail");
    });
  });it("should convert direct rejections into promises", function () {
    promiseRetry(function () {
      throw new Error("foo");
    }, { retries: 1, factor: 1 }).then(function () {
      throw new Error("should not succeed");
    }, function (e) {
      expect(e.message).to.be("foo");
    });
  });it("should not crash on undefined rejections", function () {
    return promiseRetry(function () {
      throw undefined;
    }, { retries: 1, factor: 1 }).then(function () {
      throw new Error("should not succeed");
    }, function (e) {
      expect(e).to.be(undefined);
    }).then(function () {
      return promiseRetry(function (e) {
        e();
      }, { retries: 1, factor: 1 });
    }).then(function () {
      throw new Error("should not succeed");
    }, function (e) {
      expect(e).to.be(undefined);
    });
  });it("should retry if retry() was called with undefined", function () {
    var t = 0;
    return promiseRetry(function (e) {
      t += 1;return promiseDelay(10).then(function () {
        if (t <= 2) {
          e();
        }return "final";
      });
    }, { factor: 1 }).then(function (e) {
      expect(e).to.be("final");expect(t).to.be(3);
    }, function () {
      throw new Error("should not fail");
    });
  });it("should work with several retries in the same chain", function () {
    var r = 0;
    return promiseRetry(function (t) {
      r += 1;return promiseDelay(10).then(function () {
        t(new Error("foo"));
      }).catch(function (e) {
        t(e);
      });
    }, { retries: 1, factor: 1 }).then(function () {
      throw new Error("should not succeed");
    }, function (e) {
      expect(e.message).to.be("foo");expect(r).to.be(2);
    });
  });it("should allow options to be passed first", function () {
    var t = 0;
    return promiseRetry({ factor: 1 }, function (e) {
      t += 1;return promiseDelay(10).then(function () {
        if (t <= 2) {
          e(new Error("foo"));
        }return "final";
      });
    }).then(function (e) {
      expect(e).to.be("final");expect(t).to.be(3);
    }, function () {
      throw new Error("should not fail");
    });
  });
});
