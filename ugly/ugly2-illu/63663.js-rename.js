(function r() {
  assertThrows(function () {
    Proxy({}, {});
  }, TypeError);assertDoesNotThrow(function () {
    new Proxy({}, {});
  });
})();(function r() {
  assertThrows(function () {
    new Proxy(undefined, {});
  }, TypeError);assertThrows(function () {
    new Proxy(null, {});
  }, TypeError);assertThrows(function () {
    new Proxy("", {});
  }, TypeError);assertThrows(function () {
    new Proxy(0, {});
  }, TypeError);assertThrows(function () {
    new Proxy(.5, {});
  }, TypeError);assertThrows(function () {
    new Proxy(false, {});
  }, TypeError);
})();(function r() {
  assertThrows(function () {
    new Proxy({}, undefined);
  }, TypeError);assertThrows(function () {
    new Proxy({}, null);
  }, TypeError);assertThrows(function () {
    new Proxy({}, "");
  }, TypeError);assertThrows(function () {
    new Proxy({}, 0);
  }, TypeError);assertThrows(function () {
    new Proxy({}, .5);
  }, TypeError);assertThrows(function () {
    new Proxy({}, false);
  }, TypeError);
})();(function r() {
  assertThrows(function () {
    new Proxy();
  }, TypeError);assertThrows(function () {
    new Proxy(42);
  }, TypeError);assertThrows(function () {
    new Proxy({});
  }, TypeError);
})();(function r() {
  const n = new Proxy([42], {});
  assertTrue(n instanceof Array);assertEquals(n[0], 42);
})();(function r() {
  const n = new Proxy({ prop: 42 }, {});
  assertTrue(n instanceof Object);assertEquals(n.prop, 42);
})();(function r() {
  const n = new Proxy(() => {
    return 42;
  }, {});
  assertTrue(n instanceof Function);assertEquals(n(), 42);
})();(function r() {
  class n {}const o = new Proxy(n, {});
  assertTrue(o instanceof Function);assertTrue(new o() instanceof n);
})();(function r() {
  const n = new Proxy({}, {});
  const o = new Proxy(n, {});
  assertTrue(o instanceof Object);
})();
