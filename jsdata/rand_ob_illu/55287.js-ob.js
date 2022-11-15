'use strict';

const _0x3c4a = ['1mQZqJs', '369661efnCvD', '1rAQKvL', '444902miYDVq', '79397IkgKar', '96763DhmZoS', '1kSwokH', 'assert', 'util', 'nextTick', 'mustCall', 'removeAllListeners', 'test', 'forEach', 'ERR_INVALID_CALLBACK', 'TypeError', 'throws', 'LAJLn', 'AtClE', 'Callback must be a function. Received ', '29101QZNxRJ', '10HSyQfG', '57nzjtIT', '2753IGdmzL', '124566IAmWFK'];
const _0x461c9b = _0x1de2;

(function (_0x1d5c96, _0x12592f) {
    const _0x19aa29 = _0x1de2;

    while (true) {
        try {
            const _0x2aeee8 = -parseInt(_0x19aa29(0xf5)) * -parseInt(_0x19aa29(0xf6)) + parseInt(_0x19aa29(0xf7)) * parseInt(_0x19aa29(0xf8)) + -parseInt(_0x19aa29(0xf9)) * parseInt(_0x19aa29(0xfa)) + parseInt(_0x19aa29(0xfb)) * parseInt(_0x19aa29(0xfc)) + -parseInt(_0x19aa29(0xfd)) + parseInt(_0x19aa29(0xfe)) + -parseInt(_0x19aa29(0xff)) * parseInt(_0x19aa29(0x100));

            if (_0x2aeee8 === _0x12592f) break;else _0x1d5c96.push(_0x1d5c96.shift());
        } catch (_0x2155e1) {
            _0x1d5c96.push(_0x1d5c96.shift());
        }
    }
})(_0x3c4a, 230758);
function _0x1de2(_0x349a5c, _0x51927e) {
    return _0x1de2 = function (_0x467edb, _0x2cb8aa) {
        _0x467edb = _0x467edb - 245;
        const _0x5dc9c9 = _0x3c4a[_0x467edb];

        return _0x5dc9c9;
    }, _0x1de2(_0x349a5c, _0x51927e);
}

const common = require('../common');

const assert = require(_0x461c9b(0x101));

var { inspect } = require(_0x461c9b(0x102));

const N = 2;

function cb() {
    throw new Error();
}
for (let i = 0; i < N; ++i) {
    process[_0x461c9b(0x103)](common[_0x461c9b(0x104)](cb));
}
process.on('uncaughtException', common.mustCall(N)), process.on('exit', function () {
    const _0xa144e5 = _0x461c9b;
    const _0x3bdd9f = { 'cdUzA': 'uncaughtException' };

    process[_0xa144e5(0x105)](_0x3bdd9f.cdUzA);
}), [null, 1, _0x461c9b(0x106), {}, [], Infinity, true][_0x461c9b(0x107)](_0x2320bc => {
    const _0x3a739c = _0x461c9b;
    const _0x22db65 = {
        'LAJLn': _0x3a739c(0x108),
        'AtClE': _0x3a739c(0x109),
        'OgETr': function (_0x15940f, _0x5811d6) {
            return _0x15940f(_0x5811d6);
        }
    };

    assert[_0x3a739c(0x10a)](() => process[_0x3a739c(0x103)](_0x2320bc), {
        'code': _0x22db65[_0x3a739c(0x10b)],
        'name': _0x22db65[_0x3a739c(0x10c)],
        'message': _0x3a739c(0x10d) + _0x22db65.OgETr(inspect, _0x2320bc)
    });
});
