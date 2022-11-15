import * as middleware from "../../../src/js/tech/middleware.js";import sinon from "sinon";import window from "global/window";QUnit.module("Middleware", { beforeEach(e) {
    this.clock = sinon.useFakeTimers();
  }, afterEach(e) {
    this.clock.restore();
  } });QUnit.test("middleware can be added with the use method", function (e) {
  const t = {};

  const o = () => t;

  middleware.use("foo", o);e.equal(middleware.getMiddleware("foo").pop(), o, "we are able to add middleware");
});QUnit.test("middleware get iterates through the middleware array in the right order", function (i) {
  const t = [];
  const o = [];
  const r = [];
  const e = [{ currentTime(e) {
      t.push(e);return e * 2;
    }, duration(e) {
      o.push(e);return e + 2;
    }, foo(e) {
      r.push(e);return e / 2;
    } }, { currentTime(e) {
      t.push(e);return e + 2;
    }, duration(e) {
      o.push(e);return e / 2;
    }, foo(e) {
      r.push(e);return e + 3;
    } }];
  const d = { currentTime(e) {
      return 5;
    }, duration(e) {
      return 5;
    }, foo(e) {
      return 5;
    } };
  const l = middleware.get(e, d, "currentTime");
  const a = middleware.get(e, d, "duration");
  const n = middleware.get(e, d, "foo");

  const u = (e, t, o, r, d) => {
    i.equal(e, t, `our middleware chain return currectly for ${d}`);i.deepEqual(o, r, `we got called in the correct order for ${d}`);
  };

  u(l, 14, t, [5, 7], "currentTime");u(a, 4.5, o, [5, 2.5], "duration");u(n, 4, r, [5, 8], "foo");
});QUnit.test("middleware set iterates through the middleware array in the right order", function (i) {
  const t = [];
  const o = [];
  const r = [];
  const e = [{ currentTime(e) {
      t.push(e);return e * 2;
    }, duration(e) {
      o.push(e);return e + 2;
    }, foo(e) {
      r.push(e);return e / 2;
    } }, { currentTime(e) {
      t.push(e);return e + 2;
    }, duration(e) {
      o.push(e);return e / 2;
    }, foo(e) {
      r.push(e);return e + 3;
    } }];
  const d = { currentTime(e) {
      t.push(e);return e / 2;
    }, duration(e) {
      o.push(e);return e;
    }, foo(e) {
      r.push(e);return e;
    } };
  const l = middleware.set(e, d, "currentTime", 10);
  const a = middleware.set(e, d, "duration", 10);
  const n = middleware.set(e, d, "foo", 10);

  const u = (e, t, o, r, d) => {
    i.equal(e, t, `our middleware chain return currectly for ${d}`);i.deepEqual(o, r, `we got called in the correct order for ${d}`);
  };

  u(l, 11, t, [10, 20, 22], "currentTime");u(a, 6, o, [10, 12, 6], "duration");u(n, 8, r, [10, 5, 8], "foo");
});QUnit.test("middleware mediate iterates through the middleware array twice", function (e) {
  var t = 0;
  var o = 0;
  var r = 0;
  var d;
  var i;
  var l;
  var a;
  var n;
  const u = [{ callPlay() {
      t++;
    }, play(e, t) {
      o++;i = t;a = e;
    } }, { callPlay() {
      t++;
    }, play(e, t) {
      o++;l = t;n = e;
    } }];
  const c = { play() {
      r++;d = { then: () => {} };return d;
    } };
  const s = middleware.mediate(u, c, "play");
  e.equal(t, o, "middleware got called the same number of times");e.equal(t, 2, "both middleware got called before the tech");e.equal(r, 1, "the tech method only gets called once");e.equal(o, 2, "both middleware got called after the tech");e.deepEqual(i.then, d.then, "the value returned by the tech is passed through the middleware");e.deepEqual(l, d, "the value returned by the tech is passed through the middleware");e.deepEqual(s, d, "the value returned to the player is the value returned from the tech");e.equal(a, false, "the play has not been cancelled in middleware 1");e.equal(n, false, "the play has not been cancelled in middleware 2");
});QUnit.test("middleware mediate allows and can detect cancellation", function (e) {
  var t = 0;
  var o = 0;
  var r = 0;
  var d;
  var i;
  var l;
  var a;
  const n = [{ callPlay() {
      t++;
    }, play(e, t) {
      o++;d = t;l = e;
    } }, { callPlay() {
      t++;return middleware.TERMINATOR;
    }, play(e, t) {
      o++;i = t;a = e;
    } }];
  const u = { play() {
      r++;return { then: () => {} };
    } };
  const c = middleware.mediate(n, u, "play");
  e.equal(t, 2, "both middleware run until middleware terminates");e.equal(r, 0, "the tech should not be called if a middleware terminates");e.equal(o, 2, "both middleware run after the tech");e.equal(d, null, "null is returned through the middleware if a middleware terminated previously");e.equal(i, null, "null is returned through the middleware if a middleware terminated previously");e.equal(c, null, "null is returned to the player if a middleware terminated previously");e.equal(l, true, "the play has been cancelled in middleware 1");e.equal(a, true, "the play has been cancelled in middleware 2");
});QUnit.test("setSource is run asynchronously", function (e) {
  var o;
  var r;
  middleware.setSource({ id() {
      return "vid1";
    }, setTimeout: window.setTimeout }, { src: "foo", type: "video/foo" }, function (e, t) {
    o = e;r = t;
  });e.equal(o, undefined, "no src was returned yet");e.equal(r, undefined, "no accumulator was returned yet");this.clock.tick(1);e.deepEqual(o, { src: "foo", type: "video/foo" }, "we got the same source back");e.equal(r.length, 0, "we did not accumulate any middleware since there were none");
});QUnit.test("setSource selects a source based on the middleware given", function (e) {
  var o;
  var r;
  const t = { setSource(e, t) {
      t(null, { src: "http://example.com/video.mp4", type: "video/mp4" });
    } };

  const d = () => t;

  middleware.use("video/foo", d);middleware.setSource({ id() {
      return "vid1";
    }, setTimeout: window.setTimeout }, { src: "foo", type: "video/foo" }, function (e, t) {
    o = e;r = t;
  });this.clock.tick(1);e.equal(o.type, "video/mp4", "we selected a new type of video/mp4");e.equal(o.src, "http://example.com/video.mp4", "we selected a new src of video.mp4");e.equal(r.length, 1, "we got one middleware");e.equal(r[0], t, "we chose the one middleware");middleware.getMiddleware("video/foo").pop();
});QUnit.test("setSource can select multiple middleware from multiple types", function (e) {
  var o;
  var r;
  const t = { setSource(e, t) {
      t(null, { src: "bar", type: "video/bar" });
    } };
  const d = { setSource(e, t) {
      t(null, { src: "http://example.com/video.mp4", type: "video/mp4" });
    } };

  const i = () => t;

  const l = () => d;

  middleware.use("video/foo", i);middleware.use("video/bar", l);middleware.setSource({ id() {
      return "vid1";
    }, setTimeout: window.setTimeout }, { src: "foo", type: "video/foo" }, function (e, t) {
    o = e;r = t;
  });this.clock.tick(1);e.equal(o.type, "video/mp4", "we selected a new type of video/mp4");e.equal(o.src, "http://example.com/video.mp4", "we selected a new src of video.mp4");e.equal(r.length, 2, "we got two middleware");e.equal(r[0], t, "foomw is the first middleware");e.equal(r[1], d, "barmw is the first middleware");middleware.getMiddleware("video/foo").pop();middleware.getMiddleware("video/bar").pop();
});QUnit.test("setSource will select all middleware of a given type, until src change", function (e) {
  var o;
  var r;
  const t = { setSource(e, t) {
      t(null, { src: "bar", type: "video/foo" });
    } };
  const d = { setSource(e, t) {
      t(null, { src: "http://example.com/video.mp4", type: "video/mp4" });
    } };
  const i = { setSource(e, t) {
      t(null, { src: "http://example.com/video.mp4", type: "video/mp4" });
    } };

  const l = () => t;

  const a = () => d;

  const n = () => i;

  middleware.use("video/foo", l);middleware.use("video/foo", a);middleware.use("video/foo", n);middleware.setSource({ id() {
      return "vid1";
    }, setTimeout: window.setTimeout }, { src: "foo", type: "video/foo" }, function (e, t) {
    o = e;r = t;
  });this.clock.tick(1);e.equal(o.type, "video/mp4", "we selected a new type of video/mp4");e.equal(o.src, "http://example.com/video.mp4", "we selected a new src of video.mp4");e.equal(r.length, 2, "we got two middleware");e.equal(r[0], t, "foomw is the first middleware");e.equal(r[1], d, "foomw is the first middleware");middleware.getMiddleware("video/foo").pop();middleware.getMiddleware("video/foo").pop();middleware.getMiddleware("video/foo").pop();
});QUnit.test("a middleware without a mediator method will not throw an error", function (e) {
  var t = 0;
  const o = {};

  const r = () => o;

  const d = () => ({ pause() {
      t++;
    } });

  middleware.mediate([r(), d()], { pause: () => {} }, "pause");e.equal(t, 1, "pauseCalled was called once and no error was thrown");
});QUnit.test("a middleware factory is not called on source change", function (e) {
  var t = 0;
  const o = { setSource(e, t) {
      t(null, { src: "http://example.com/video.mp4", type: "video/mp4" });
    } };

  const r = () => {
    t++;return o;
  };

  middleware.use("video/foo", r);middleware.setSource({ id() {
      return "vid1";
    }, setTimeout: window.setTimeout }, { src: "foo", type: "video/foo" }, function () {});this.clock.tick(1);e.equal(t, 1, "the factory was called once");middleware.setSource({ id() {
      return "vid1";
    }, setTimeout: window.setTimeout }, { src: "bar", type: "video/foo" }, function () {});this.clock.tick(1);e.equal(t, 1, "the factory was not called again");middleware.getMiddleware("video/foo").pop();
});QUnit.test("a middleware factory is called on a new source with a new player", function (e) {
  var t = 0;
  const o = { setSource(e, t) {
      t(null, { src: "http://example.com/video.mp4", type: "video/mp4" });
    } };

  const r = () => {
    t++;return o;
  };

  middleware.use("video/foo", r);middleware.setSource({ id() {
      return "vid1";
    }, setTimeout: window.setTimeout }, { src: "foo", type: "video/foo" }, function () {});this.clock.tick(1);e.equal(t, 1, "the factory was called once");middleware.setSource({ id() {
      return "vid2";
    }, setTimeout: window.setTimeout }, { src: "bar", type: "video/foo" }, function () {});this.clock.tick(1);e.equal(t, 2, "the factory was called again");middleware.getMiddleware("video/foo").pop();
});QUnit.test("a middleware without a setSource gets chosen implicitly", function (e) {
  var o = [];
  const t = { currentTime(e) {} };

  const r = () => t;

  middleware.use("video/foo", r);middleware.setSource({ id() {
      return "vid1";
    }, setTimeout: window.setTimeout }, { src: "foo", type: "video/foo" }, function (e, t) {
    o = t;
  });this.clock.tick(1);e.equal(o.length, 1, "we have 1 middleware set");middleware.getMiddleware("video/foo").pop();
});
