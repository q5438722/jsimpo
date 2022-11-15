const _0x5170 = ['QqiJE', 'stuff', '3|2|0|4|1', 'split', 'baz(object, ', '8716trIQsH', '303398eQvdqX', '490407fZGjGf', '1eIkFSB', '147999XAGJAz', '160254nfZXcC', '896383BzGkRQ', '17CGLOax', '12977SglzRW'];

function _0x323f(_0x4d090d, _0x32e51e) {
    return _0x323f = function (_0x190987, _0x1bfa50) {
        _0x190987 = _0x190987 - 327;
        const _0x7b6d51 = _0x5170[_0x190987];

        return _0x7b6d51;
    }, _0x323f(_0x4d090d, _0x32e51e);
}
const _0x3b50f3 = _0x323f;

(function (_0x27466e, _0x7b94e1) {
    const _0x2e5b31 = _0x323f;

    while (true) {
        try {
            const _0x8ef812 = -parseInt(_0x2e5b31(0x147)) + parseInt(_0x2e5b31(0x148)) + -parseInt(_0x2e5b31(0x149)) * parseInt(_0x2e5b31(0x14a)) + parseInt(_0x2e5b31(0x14b)) + -parseInt(_0x2e5b31(0x14c)) + parseInt(_0x2e5b31(0x14d)) + parseInt(_0x2e5b31(0x14e)) * -parseInt(_0x2e5b31(0x14f));

            if (_0x8ef812 === _0x7b94e1) break;else _0x27466e.push(_0x27466e.shift());
        } catch (_0x5852c7) {
            _0x27466e.push(_0x27466e.shift());
        }
    }
})(_0x5170, 467794), description('This tests that inlining a function that does not use this does not result in this being lost entirely, if we succeed in doing method check optimizations.');
function foo(_0x23738c, _0x5b9974) {
    const _0x35dc7c = {
        'xVALQ': function (_0x504772, _0x519cb8) {
            return _0x504772 + _0x519cb8;
        }
    };

    return _0x35dc7c.xVALQ(_0x23738c, _0x5b9974);
}
function bar(_0x18f408, _0x1fbde8) {
    const _0x510bc4 = _0x323f;
    const _0x5758a5 = {
        'QqiJE': function (_0x55d8a1, _0x2fd40c) {
            return _0x55d8a1 + _0x2fd40c;
        }
    };

    return _0x5758a5[_0x510bc4(0x150)](this.f + _0x18f408, _0x1fbde8);
}
function baz(_0xb1a697, _0x261b1c, _0x432cac) {
    const _0x529439 = _0x323f;

    return _0xb1a697[_0x529439(0x151)](_0x261b1c, _0x432cac);
}
var functionToCall = foo;
var offset = 0;

for (var i = 0; i < 1000; ++i) {
    const EOxYxt = _0x3b50f3(0x152)[_0x3b50f3(0x153)]('|');

    var xAOiqh = 0;

    while (true) {
        switch (EOxYxt[xAOiqh++]) {
            case '0':
                object[_0x3b50f3(0x151)] = functionToCall;
                continue;
            case '1':
                shouldBe(_0x3b50f3(0x154) + i + ', ' + i * 2 + ')', '' + (offset + i + i * 2));
                continue;
            case '2':
                const object = {};

                continue;
            case '3':
                i == 600 && (functionToCall = bar, offset = 42);
                continue;
            case '4':
                object['f'] = 42;
                continue;
        }
        break;
    }
}
