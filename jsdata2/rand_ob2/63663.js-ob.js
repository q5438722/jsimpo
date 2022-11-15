var _0x40df = [
    '788130ADSWkr',
    '27058lIzFwX',
    '29cddrOk',
    '32451zsRQzX',
    'prop',
    '16Ccnbvv',
    '5737blDBkG',
    '1ZBnHro',
    '33124kVnVcx',
    '584583ATVwuS',
    '588757BnmPtj'
];
function _0x3137(_0x229635, _0x3adf23) {
    return _0x3137 = function (_0x40df85, _0x31370f) {
        _0x40df85 = _0x40df85 - 0xd7;
        var _0x3eaa1a = _0x40df[_0x40df85];
        return _0x3eaa1a;
    }, _0x3137(_0x229635, _0x3adf23);
}
(function (_0x55ef92, _0x130cef) {
    var _0x27d93f = _0x3137;
    while (!![]) {
        try {
            var _0x171476 = -parseInt(_0x27d93f(0xd7)) * -parseInt(_0x27d93f(0xd8)) + parseInt(_0x27d93f(0xd9)) * -parseInt(_0x27d93f(0xda)) + -parseInt(_0x27d93f(0xdb)) + -parseInt(_0x27d93f(0xdc)) + parseInt(_0x27d93f(0xdd)) + parseInt(_0x27d93f(0xde)) * parseInt(_0x27d93f(0xdf)) + parseInt(_0x27d93f(0xe0));
            if (_0x171476 === _0x130cef)
                break;
            else
                _0x55ef92['push'](_0x55ef92['shift']());
        } catch (_0x490d9b) {
            _0x55ef92['push'](_0x55ef92['shift']());
        }
    }
}(_0x40df, 0x77c5f), function testNewTarget() {
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
        new Proxy(0x0, {});
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
        new Proxy({}, 0x0);
    }, TypeError), assertThrows(function () {
        new Proxy({}, 0.5);
    }, TypeError), assertThrows(function () {
        new Proxy({}, ![]);
    }, TypeError);
}(), function testConstructionWithoutArguments() {
    assertThrows(function () {
        new Proxy();
    }, TypeError), assertThrows(function () {
        new Proxy(0x2a);
    }, TypeError), assertThrows(function () {
        new Proxy({});
    }, TypeError);
}(), function testConstructionFromArray() {
    var _0x179a0e = new Proxy([0x2a], {});
    assertTrue(_0x179a0e instanceof Array), assertEquals(_0x179a0e[0x0], 0x2a);
}(), function testConstructionFromObject() {
    var _0x4ab6ae = _0x3137, _0x1fc343 = new Proxy({ 'prop': 0x2a }, {});
    assertTrue(_0x1fc343 instanceof Object), assertEquals(_0x1fc343[_0x4ab6ae(0xe1)], 0x2a);
}(), function testConstructionFromCallable() {
    var _0x422726 = new Proxy(() => {
        return 0x2a;
    }, {});
    assertTrue(_0x422726 instanceof Function), assertEquals(_0x422726(), 0x2a);
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
