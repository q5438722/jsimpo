const async = require("../lib");

var { expect } = require("chai");

const assert = require("assert");

describe("whilst", () => {
  it("whilst", s => {
    const l = [["test", a]];
    var a = 0;
    async.whilst(e => {
      expect(e).to.be.a("function");return e(null, a < 5);
    }, e => {
      l.push(["iteratee", a]);a++;e(null, a);
    }, (e, t) => {
      assert(e === null, e + " passed instead of 'null'");expect(t).to.equal(5, "last result passed through");expect(l).to.eql([["test", 0], ["iteratee", 0], ["test", 1], ["iteratee", 1], ["test", 2], ["iteratee", 2], ["test", 3], ["iteratee", 3], ["test", 4], ["iteratee", 4], ["test", 5]]);expect(a).to.equal(5);s();
    });
  });it("errors", t => {
    async.whilst(e => e(new Error("bad test")), e => e(), e => {
      expect(e.message).to.equal("bad test");t();
    });
  });it("errors (iteratee)", t => {
    async.whilst(e => e(null, true), e => e(new Error("bad iter")), e => {
      expect(e.message).to.equal("bad iter");t();
    });
  });it("whilst optional callback", e => {
    var t = 0;
    async.whilst(e => e(null, t < 2), e => {
      t++;e();
    });expect(t).to.equal(2);e();
  });it("whilst canceling", e => {
    var t = 0;
    async.whilst(e => e(null, t < 3), e => {
      t++;e(t === 2 ? false : null);
    }, () => {
      throw new Error("should not get here");
    });setTimeout(() => {
      expect(t).to.equal(2);e();
    }, 10);
  });it("should not error when test is false on first iteration", s => {
    var l = 0;
    async.whilst(e => e(null, false), e => {
      l++;e(null);
    }, (e, t) => {
      expect(e).to.eql(null);expect(t).to.be.undefined;expect(l).to.equal(0);s();
    });
  });it("doWhilst", s => {
    const l = [];
    var a = 0;
    async.doWhilst(e => {
      l.push(["iteratee", a]);a++;e(null, a);
    }, (e, t) => {
      expect(e).to.equal(a);l.push(["test", a]);return t(null, a < 5);
    }, (e, t) => {
      assert(e === null, e + " passed instead of 'null'");expect(t).to.equal(5, "last result passed through");expect(l).to.eql([["iteratee", 0], ["test", 1], ["iteratee", 1], ["test", 2], ["iteratee", 2], ["test", 3], ["iteratee", 3], ["test", 4], ["iteratee", 4], ["test", 5]]);expect(a).to.equal(5);s();
    });
  });it("doWhilst callback params", s => {
    const l = [];
    var a = 0;
    async.doWhilst(e => {
      l.push(["iteratee", a]);a++;e(null, a);
    }, (e, t) => {
      l.push(["test", e]);return t(null, e < 5);
    }, (e, t) => {
      if (e) throw e;expect(t).to.equal(5, "last result passed through");expect(l).to.eql([["iteratee", 0], ["test", 1], ["iteratee", 1], ["test", 2], ["iteratee", 2], ["test", 3], ["iteratee", 3], ["test", 4], ["iteratee", 4], ["test", 5]]);expect(a).to.equal(5);s();
    });
  });it("doWhilst - error", t => {
    const s = new Error("asdas");
    async.doWhilst(e => {
      e(s);
    }, () => {}, e => {
      expect(e).to.equal(s);t();
    });
  });it("doWhilst canceling", e => {
    var t = 0;
    async.doWhilst(e => {
      t++;e(t === 2 ? false : null);
    }, e => e(null, true), () => {
      throw new Error("should not get here");
    });setTimeout(() => {
      expect(t).to.equal(2);e();
    }, 10);
  });
});
