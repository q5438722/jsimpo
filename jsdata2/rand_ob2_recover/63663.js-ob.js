(function testNewTarget() {
    assertThrows(function () {
        Proxy({}, {});
    }, TypeError), assertDoesNotThrow(function () {
        new Proxy({}, {});
    });
}(), function testNonObjectTargetTypes() {
    assertThrows(function () {
        new Proxy(undefined, {});
    }, TypeError), assertThrows(function () {
        new Proxy(null, {});
    }, TypeError), assertThrows(function () {
        new Proxy('', {});
    }, TypeError), assertThrows(function () {
        new Proxy(0, {});
    }, TypeError), assertThrows(function () {
        new Proxy(0.5, {});
    }, TypeError), assertThrows(function () {
        new Proxy(![], {});
    }, TypeError);
}(), function testNonObjectHandlerTypes() {
    assertThrows(function () {
        new Proxy({}, undefined);
    }, TypeError), assertThrows(function () {
        new Proxy({}, null);
    }, TypeError), assertThrows(function () {
        new Proxy({}, '');
    }, TypeError), assertThrows(function () {
        new Proxy({}, 0);
    }, TypeError), assertThrows(function () {
        new Proxy({}, 0.5);
    }, TypeError), assertThrows(function () {
        new Proxy({}, ![]);
    }, TypeError);
}(), function testConstructionWithoutArguments() {
    assertThrows(function () {
        new Proxy();
    }, TypeError), assertThrows(function () {
        new Proxy(42);
    }, TypeError), assertThrows(function () {
        new Proxy({});
    }, TypeError);
}(), function testConstructionFromArray() {
    var _0x179a0e = new Proxy([42], {});
    assertTrue(_0x179a0e instanceof Array), assertEquals(_0x179a0e[0], 42);
}(), function testConstructionFromObject() {
    var _0x4ab6ae = _0x3137, _0x1fc343 = new Proxy({ 'prop': 42 }, {});
    assertTrue(_0x1fc343 instanceof Object), assertEquals(_0x1fc343[_0x4ab6ae(225)], 42);
}(), function testConstructionFromCallable() {
    var _0x422726 = new Proxy(() => {
        return 42;
    }, {});
    assertTrue(_0x422726 instanceof Function), assertEquals(_0x422726(), 42);
}(), function testConstructionFromConstructor() {
    class _0x3b3c88 {
    }
    ;
    var _0x1b555a = new Proxy(_0x3b3c88, {});
    assertTrue(_0x1b555a instanceof Function), assertTrue(new _0x1b555a() instanceof _0x3b3c88);
}(), function testConstructionFromProxy() {
    var _0x258aca = new Proxy({}, {}), _0x427a5e = new Proxy(_0x258aca, {});
    assertTrue(_0x427a5e instanceof Object);
}());