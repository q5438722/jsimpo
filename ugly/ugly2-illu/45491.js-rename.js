const async = require("../lib");

var { expect } = require("chai");

const _ = require("lodash");

describe("every", () => {
  it("everyLimit true", l => {
    async.everyLimit([3, 1, 2], 1, (e, t) => {
      setTimeout(() => {
        t(null, e >= 1);
      }, 0);
    }, (e, t) => {
      expect(e).to.equal(null);expect(t).to.equal(true);l();
    });
  });it("everyLimit false", l => {
    async.everyLimit([3, 1, 2], 2, (e, t) => {
      setTimeout(() => {
        t(null, e === 2);
      }, 0);
    }, (e, t) => {
      expect(e).to.equal(null);expect(t).to.equal(false);l();
    });
  });it("everyLimit short-circuit", l => {
    var a = 0;
    async.everyLimit([3, 1, 2], 1, (e, t) => {
      a++;t(null, e === 1);
    }, (e, t) => {
      expect(e).to.equal(null);expect(t).to.equal(false);expect(a).to.equal(1);l();
    });
  });it("true", l => {
    async.every([1, 2, 3], (e, t) => {
      setTimeout(() => {
        t(null, true);
      }, 0);
    }, (e, t) => {
      expect(e).to.equal(null);expect(t).to.equal(true);l();
    });
  });it("false", l => {
    async.every([1, 2, 3], (e, t) => {
      setTimeout(() => {
        t(null, e % 2);
      }, 0);
    }, (e, t) => {
      expect(e).to.equal(null);expect(t).to.equal(false);l();
    });
  });it("early return", e => {
    const l = [];
    async.every([1, 2, 3], (e, t) => {
      setTimeout(() => {
        l.push(e);t(null, e === 1);
      }, e * 5);
    }, () => {
      l.push("callback");
    });setTimeout(() => {
      expect(l).to.eql([1, 2, "callback", 3]);e();
    }, 25);
  });it("error", l => {
    async.every([1, 2, 3], (e, t) => {
      setTimeout(() => {
        t("error");
      }, 0);
    }, (e, t) => {
      expect(e).to.equal("error");expect(t).to.not.exist;l();
    });
  });it("canceled", e => {
    const l = [];
    async.every([1, 2, 3], (e, t) => {
      l.push(e);if (e === 2) {
        return t(false, true);
      }t(null, true);
    }, () => {
      throw new Error("should not get here");
    });setTimeout(() => {
      expect(l).to.eql([1, 2, 3]);e();
    }, 25);
  });it("everySeries doesn't cause stack overflow (#1293)", t => {
    const e = _.range(1e4);

    var l = 0;
    async.everySeries(e, (e, t) => {
      l += 1;async.setImmediate(_.partial(t, null, false));
    }, e => {
      expect(e).to.equal(null);expect(l).to.equal(1);t();
    });
  });it("everySeries canceled", e => {
    const l = [];
    async.everySeries([1, 2, 3], (e, t) => {
      l.push(e);async.setImmediate(() => {
        if (e === 2) {
          return t(false, true);
        }t(null, true);
      });
    }, () => {
      throw new Error("should not get here");
    });setTimeout(() => {
      expect(l).to.eql([1, 2]);e();
    }, 50);
  });it("everyLimit doesn't cause stack overflow (#1293)", t => {
    const e = _.range(1e4);

    var l = 0;
    async.everyLimit(e, 100, (e, t) => {
      l += 1;async.setImmediate(_.partial(t, null, false));
    }, e => {
      expect(e).to.equal(null);expect(l).to.equal(100);t();
    });
  });it("everyLimit canceled", e => {
    const l = [];
    async.everyLimit([1, 1, 2, 2, 3], 2, (e, t) => {
      l.push(e);async.setImmediate(() => {
        if (e === 2) {
          return t(false, true);
        }t(null, true);
      });
    }, () => {
      throw new Error("final callback - should not get here");
    });setTimeout(() => {
      expect(l).to.eql([1, 1, 2, 2]);e();
    }, 50);
  });it("all alias", () => {
    expect(async.all).to.equal(async.every);
  });it("allLimit alias", () => {
    expect(async.allLimit).to.equal(async.everyLimit);
  });it("allSeries alias", () => {
    expect(async.allSeries).to.be.a("function");expect(async.allSeries).to.equal(async.everySeries);
  });
});