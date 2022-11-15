const _0x422f = ['305388zibtyb', '210023BDHlUI', '344722LjcCYq', '111048CorFqS', '191459pzQYFY', '1QlclpJ', '545685uFuBVS', '1352969rROaeu', 'This tests that inlining a function that does not use this does not result in this being lost entirely, if we succeed in doing method check optimizations.', '2|3|4|0|1', 'split', 'baz(object, ', 'stuff'];
const _0x49b6dc = _0x44c9;

(function (_0x4145c4, _0x3b2245) {
    const _0x50b48e = _0x44c9;

    while (true) {
        try {
            const _0x338dd6 = -parseInt(_0x50b48e(0x1ec)) + parseInt(_0x50b48e(0x1ed)) + -parseInt(_0x50b48e(0x1ee)) + parseInt(_0x50b48e(0x1ef)) + -parseInt(_0x50b48e(0x1f0)) * parseInt(_0x50b48e(0x1f1)) + -parseInt(_0x50b48e(0x1f2)) + parseInt(_0x50b48e(0x1f3));

            if (_0x338dd6 === _0x3b2245) break;else _0x4145c4.push(_0x4145c4.shift());
        } catch (_0x3ff900) {
            _0x4145c4.push(_0x4145c4.shift());
        }
    }
})(_0x422f, 286786), description(_0x49b6dc(0x1f4));
function foo(_0x758396, _0x1c84d7) {
    const _0x48e25b = {
        'ZxxvP': function (_0x1acb3e, _0x4379ae) {
            return _0x1acb3e + _0x4379ae;
        }
    };

    return _0x48e25b.ZxxvP(_0x758396, _0x1c84d7);
}
function bar(_0x3b73a1, _0x3b8115) {
    const _0x9b956b = {
        'JYLXW': function (_0x22f142, _0x217c61) {
            return _0x22f142 + _0x217c61;
        }
    };

    return _0x9b956b.JYLXW(this.f, _0x3b73a1) + _0x3b8115;
}
function _0x44c9(_0x41640a, _0x279abc) {
    return _0x44c9 = function (_0x2df8f3, _0x51b898) {
        _0x2df8f3 = _0x2df8f3 - 492;
        const _0x4f1ca7 = _0x422f[_0x2df8f3];

        return _0x4f1ca7;
    }, _0x44c9(_0x41640a, _0x279abc);
}
function baz(_0x2a5a24, _0x17e4e1, _0x40bc64) {
    return _0x2a5a24.stuff(_0x17e4e1, _0x40bc64);
}
var functionToCall = foo;
var offset = 0;

for (var i = 0; i < 1000; ++i) {
    const iwQBJg = _0x49b6dc(0x1f5)[_0x49b6dc(0x1f6)]('|');

    var JfavZX = 0;

    while (true) {
        switch (iwQBJg[JfavZX++]) {
            case '0':
                object['f'] = 42;
                continue;
            case '1':
                shouldBe(_0x49b6dc(0x1f7) + i + ', ' + i * 2 + ')', '' + (offset + i + i * 2));
                continue;
            case '2':
                i == 600 && (functionToCall = bar, offset = 42);
                continue;
            case '3':
                const object = {};

                continue;
            case '4':
                object[_0x49b6dc(0x1f8)] = functionToCall;
                continue;
        }
        break;
    }
}
