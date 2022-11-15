'use strict';
import*as middleware$jscomp$0$jscomp$0 from "../../../src/js/tech/middleware.js";
import sinon from "sinon";
import window from "global/window";
QUnit.module("Middleware", {
  beforeEach(fn) {
    this.clock = sinon.useFakeTimers();
  },
  afterEach(fn) {
    this.clock.restore();
  }
});
QUnit.test("middleware can be added with the use method", function(t) {
  const name = {};
  const fileName = () => {
    return name;
  };
  middleware.use("foo", fileName);
  t.equal(middleware.getMiddleware("foo").pop(), fileName, "we are able to add middleware");
});
QUnit.test("middleware get iterates through the middleware array in the right order", function(t) {
  const message = [];
  const durs = [];
  const foos = [];
  const chain = [{
    currentTime(e) {
      message.push(e);
      return e * 2;
    },
    duration(dur) {
      durs.push(dur);
      return dur + 2;
    },
    foo(f) {
      foos.push(f);
      return f / 2;
    }
  }, {
    currentTime(e) {
      message.push(e);
      return e + 2;
    },
    duration(dur) {
      durs.push(dur);
      return dur / 2;
    },
    foo(f) {
      foos.push(f);
      return f + 3;
    }
  }];
  const data = {
    currentTime(state) {
      return 5;
    },
    duration(isMDuration) {
      return 5;
    },
    foo(arg209) {
      return 5;
    }
  };
  const promiseDoneMistake = middleware.get(chain, data, "currentTime");
  const val = middleware.get(chain, data, "duration");
  const value = middleware.get(chain, data, "foo");
  const assertion = (err, result, expected, actual, selector) => {
    t.equal(err, result, `our middleware chain return currectly for ${selector}`);
    t.deepEqual(expected, actual, `we got called in the correct order for ${selector}`);
  };
  assertion(promiseDoneMistake, 14, message, [5, 7], "currentTime");
  assertion(val, 4.5, durs, [5, 2.5], "duration");
  assertion(value, 4, foos, [5, 8], "foo");
});
QUnit.test("middleware set iterates through the middleware array in the right order", function(t) {
  const message = [];
  const durs = [];
  const foos = [];
  const copy = [{
    currentTime(e) {
      message.push(e);
      return e * 2;
    },
    duration(dur) {
      durs.push(dur);
      return dur + 2;
    },
    foo(f) {
      foos.push(f);
      return f / 2;
    }
  }, {
    currentTime(e) {
      message.push(e);
      return e + 2;
    },
    duration(dur) {
      durs.push(dur);
      return dur / 2;
    },
    foo(f) {
      foos.push(f);
      return f + 3;
    }
  }];
  const tech = {
    currentTime(e) {
      message.push(e);
      return e / 2;
    },
    duration(dur) {
      durs.push(dur);
      return dur;
    },
    foo(f) {
      foos.push(f);
      return f;
    }
  };
  const promiseDoneMistake = middleware.set(copy, tech, "currentTime", 10);
  const val = middleware.set(copy, tech, "duration", 10);
  const value = middleware.set(copy, tech, "foo", 10);
  const assertion = (err, result, expected, actual, selector) => {
    t.equal(err, result, `our middleware chain return currectly for ${selector}`);
    t.deepEqual(expected, actual, `we got called in the correct order for ${selector}`);
  };
  assertion(promiseDoneMistake, 11, message, [10, 20, 22], "currentTime");
  assertion(val, 6, durs, [10, 12, 6], "duration");
  assertion(value, 8, foos, [10, 5, 8], "foo");
});
QUnit.test("middleware mediate iterates through the middleware array twice", function(test) {
  let serverSideInstrumented = 0;
  let o = 0;
  let r = 0;
  let result;
  let found;
  let count;
  let proxy;
  let n;
  const initialMw = [{
    callPlay() {
      serverSideInstrumented++;
    },
    play(instance, track) {
      o++;
      found = track;
      proxy = instance;
    }
  }, {
    callPlay() {
      serverSideInstrumented++;
    },
    play(callback, options) {
      o++;
      count = options;
      n = callback;
    }
  }];
  const i = {
    play() {
      r++;
      result = {
        then : () => {
        }
      };
      return result;
    }
  };
  const messageFromMsgpack = middleware.mediate(initialMw, i, "play");
  test.equal(serverSideInstrumented, o, "middleware got called the same number of times");
  test.equal(serverSideInstrumented, 2, "both middleware got called before the tech");
  test.equal(r, 1, "the tech method only gets called once");
  test.equal(o, 2, "both middleware got called after the tech");
  test.deepEqual(found.then, result.then, "the value returned by the tech is passed through the middleware");
  test.deepEqual(count, result, "the value returned by the tech is passed through the middleware");
  test.deepEqual(messageFromMsgpack, result, "the value returned to the player is the value returned from the tech");
  test.equal(proxy, false, "the play has not been cancelled in middleware 1");
  test.equal(n, false, "the play has not been cancelled in middleware 2");
});
QUnit.test("middleware mediate allows and can detect cancellation", function(should) {
  let serializeCalled = 0;
  let modDate = 0;
  let expectedFilename = 0;
  let code;
  let received;
  let result;
  let url;
  const initialMw = [{
    callPlay() {
      serializeCalled++;
    },
    play(div, src) {
      modDate++;
      code = src;
      result = div;
    }
  }, {
    callPlay() {
      serializeCalled++;
      return middleware.TERMINATOR;
    },
    play(array, n) {
      modDate++;
      received = n;
      url = array;
    }
  }];
  const i = {
    play() {
      expectedFilename++;
      return {
        then : () => {
        }
      };
    }
  };
  const actualError = middleware.mediate(initialMw, i, "play");
  should.equal(serializeCalled, 2, "both middleware run until middleware terminates");
  should.equal(expectedFilename, 0, "the tech should not be called if a middleware terminates");
  should.equal(modDate, 2, "both middleware run after the tech");
  should.equal(code, null, "null is returned through the middleware if a middleware terminated previously");
  should.equal(received, null, "null is returned through the middleware if a middleware terminated previously");
  should.equal(actualError, null, "null is returned to the player if a middleware terminated previously");
  should.equal(result, true, "the play has been cancelled in middleware 1");
  should.equal(url, true, "the play has been cancelled in middleware 2");
});
QUnit.test("setSource is run asynchronously", function(t) {
  let o;
  let received;
  middleware.setSource({
    id() {
      return "vid1";
    },
    setTimeout : window.setTimeout
  }, {
    src : "foo",
    type : "video/foo"
  }, function(type, n) {
    o = type;
    received = n;
  });
  t.equal(o, undefined, "no src was returned yet");
  t.equal(received, undefined, "no accumulator was returned yet");
  this.clock.tick(1);
  t.deepEqual(o, {
    src : "foo",
    type : "video/foo"
  }, "we got the same source back");
  t.equal(received.length, 0, "we did not accumulate any middleware since there were none");
});
QUnit.test("setSource selects a source based on the middleware given", function(assert) {
  let o;
  let received;
  const barmw = {
    setSource(type, next) {
      next(null, {
        src : "http://example.com/video.mp4",
        type : "video/mp4"
      });
    }
  };
  const barFactory = () => {
    return barmw;
  };
  middleware.use("video/foo", barFactory);
  middleware.setSource({
    id() {
      return "vid1";
    },
    setTimeout : window.setTimeout
  }, {
    src : "foo",
    type : "video/foo"
  }, function(type, n) {
    o = type;
    received = n;
  });
  this.clock.tick(1);
  assert.equal(o.type, "video/mp4", "we selected a new type of video/mp4");
  assert.equal(o.src, "http://example.com/video.mp4", "we selected a new src of video.mp4");
  assert.equal(received.length, 1, "we got one middleware");
  assert.equal(received[0], barmw, "we chose the one middleware");
  middleware.getMiddleware("video/foo").pop();
});
QUnit.test("setSource can select multiple middleware from multiple types", function(assert) {
  let o;
  let received;
  const barmw = {
    setSource(type, next) {
      next(null, {
        src : "bar",
        type : "video/bar"
      });
    }
  };
  const foomw1 = {
    setSource(type, next) {
      next(null, {
        src : "http://example.com/video.mp4",
        type : "video/mp4"
      });
    }
  };
  const barFactory = () => {
    return barmw;
  };
  const fooFactory1 = () => {
    return foomw1;
  };
  middleware.use("video/foo", barFactory);
  middleware.use("video/bar", fooFactory1);
  middleware.setSource({
    id() {
      return "vid1";
    },
    setTimeout : window.setTimeout
  }, {
    src : "foo",
    type : "video/foo"
  }, function(type, n) {
    o = type;
    received = n;
  });
  this.clock.tick(1);
  assert.equal(o.type, "video/mp4", "we selected a new type of video/mp4");
  assert.equal(o.src, "http://example.com/video.mp4", "we selected a new src of video.mp4");
  assert.equal(received.length, 2, "we got two middleware");
  assert.equal(received[0], barmw, "foomw is the first middleware");
  assert.equal(received[1], foomw1, "barmw is the first middleware");
  middleware.getMiddleware("video/foo").pop();
  middleware.getMiddleware("video/bar").pop();
});
QUnit.test("setSource will select all middleware of a given type, until src change", function(assert) {
  let o;
  let received;
  const barmw = {
    setSource(type, next) {
      next(null, {
        src : "bar",
        type : "video/foo"
      });
    }
  };
  const foomw1 = {
    setSource(type, next) {
      next(null, {
        src : "http://example.com/video.mp4",
        type : "video/mp4"
      });
    }
  };
  const foomw2 = {
    setSource(type, next) {
      next(null, {
        src : "http://example.com/video.mp4",
        type : "video/mp4"
      });
    }
  };
  const barFactory = () => {
    return barmw;
  };
  const fooFactory1 = () => {
    return foomw1;
  };
  const fooFactory2 = () => {
    return foomw2;
  };
  middleware.use("video/foo", barFactory);
  middleware.use("video/foo", fooFactory1);
  middleware.use("video/foo", fooFactory2);
  middleware.setSource({
    id() {
      return "vid1";
    },
    setTimeout : window.setTimeout
  }, {
    src : "foo",
    type : "video/foo"
  }, function(type, n) {
    o = type;
    received = n;
  });
  this.clock.tick(1);
  assert.equal(o.type, "video/mp4", "we selected a new type of video/mp4");
  assert.equal(o.src, "http://example.com/video.mp4", "we selected a new src of video.mp4");
  assert.equal(received.length, 2, "we got two middleware");
  assert.equal(received[0], barmw, "foomw is the first middleware");
  assert.equal(received[1], foomw1, "foomw is the first middleware");
  middleware.getMiddleware("video/foo").pop();
  middleware.getMiddleware("video/foo").pop();
  middleware.getMiddleware("video/foo").pop();
});
QUnit.test("a middleware without a mediator method will not throw an error", function(t) {
  let FAKE_CONTENT_LENGTH = 0;
  const str2 = {};
  const removeHTMLChars = () => {
    return str2;
  };
  const castTemplate = () => {
    return {
      pause() {
        FAKE_CONTENT_LENGTH++;
      }
    };
  };
  middleware.mediate([removeHTMLChars(), castTemplate()], {
    pause : () => {
    }
  }, "pause");
  t.equal(FAKE_CONTENT_LENGTH, 1, "pauseCalled was called once and no error was thrown");
});
QUnit.test("a middleware factory is not called on source change", function(t) {
  let FAKE_CONTENT_LENGTH = 0;
  const foomw3 = {
    setSource(type, next) {
      next(null, {
        src : "http://example.com/video.mp4",
        type : "video/mp4"
      });
    }
  };
  const fooFactory3 = () => {
    FAKE_CONTENT_LENGTH++;
    return foomw3;
  };
  middleware.use("video/foo", fooFactory3);
  middleware.setSource({
    id() {
      return "vid1";
    },
    setTimeout : window.setTimeout
  }, {
    src : "foo",
    type : "video/foo"
  }, function() {
  });
  this.clock.tick(1);
  t.equal(FAKE_CONTENT_LENGTH, 1, "the factory was called once");
  middleware.setSource({
    id() {
      return "vid1";
    },
    setTimeout : window.setTimeout
  }, {
    src : "bar",
    type : "video/foo"
  }, function() {
  });
  this.clock.tick(1);
  t.equal(FAKE_CONTENT_LENGTH, 1, "the factory was not called again");
  middleware.getMiddleware("video/foo").pop();
});
QUnit.test("a middleware factory is called on a new source with a new player", function(t) {
  let FAKE_CONTENT_LENGTH = 0;
  const foomw3 = {
    setSource(type, next) {
      next(null, {
        src : "http://example.com/video.mp4",
        type : "video/mp4"
      });
    }
  };
  const fooFactory3 = () => {
    FAKE_CONTENT_LENGTH++;
    return foomw3;
  };
  middleware.use("video/foo", fooFactory3);
  middleware.setSource({
    id() {
      return "vid1";
    },
    setTimeout : window.setTimeout
  }, {
    src : "foo",
    type : "video/foo"
  }, function() {
  });
  this.clock.tick(1);
  t.equal(FAKE_CONTENT_LENGTH, 1, "the factory was called once");
  middleware.setSource({
    id() {
      return "vid2";
    },
    setTimeout : window.setTimeout
  }, {
    src : "bar",
    type : "video/foo"
  }, function() {
  });
  this.clock.tick(1);
  t.equal(FAKE_CONTENT_LENGTH, 2, "the factory was called again");
  middleware.getMiddleware("video/foo").pop();
});
QUnit.test("a middleware without a setSource gets chosen implicitly", function(should) {
  let dehomo_pt = [];
  const foomw3 = {
    currentTime(state) {
    }
  };
  const fooFactory3 = () => {
    return foomw3;
  };
  middleware.use("video/foo", fooFactory3);
  middleware.setSource({
    id() {
      return "vid1";
    },
    setTimeout : window.setTimeout
  }, {
    src : "foo",
    type : "video/foo"
  }, function(isSlidingUp, canCreateDiscussions) {
    dehomo_pt = canCreateDiscussions;
  });
  this.clock.tick(1);
  should.equal(dehomo_pt.length, 1, "we have 1 middleware set");
  middleware.getMiddleware("video/foo").pop();
});

