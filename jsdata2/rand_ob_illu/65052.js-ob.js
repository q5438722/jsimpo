const _0x3b83 = ['setListener', 'next', '117510KpymdI', '564561dWVtJx', '26011VQxHes', '1751493MdKYxD', '1457ImYJyi', '1191bHmfut', '1HQWgPa', '739842XsMlUq', '1079656cihGVR', 'a = 4', 'set_a_to_5()', 'b = 5', 'DebugEvent', 'LJPfF', 'qTPFS', 'frame', 'evaluate', 'fCxJp', 'value', 'ZGumI', 'VqteY'];
const _0x1fd997 = _0xee34;

(function (_0x1504ad, _0x10c1c8) {
    const _0x484e51 = _0xee34;

    while (true) {
        try {
            const _0xf18cd3 = parseInt(_0x484e51(0x154)) + parseInt(_0x484e51(0x155)) + -parseInt(_0x484e51(0x156)) + -parseInt(_0x484e51(0x157)) + -parseInt(_0x484e51(0x158)) * -parseInt(_0x484e51(0x159)) + -parseInt(_0x484e51(0x15a)) * parseInt(_0x484e51(0x15b)) + parseInt(_0x484e51(0x15c));

            if (_0xf18cd3 === _0x10c1c8) break;else _0x1504ad.push(_0x1504ad.shift());
        } catch (_0x4b3181) {
            _0x1504ad.push(_0x1504ad.shift());
        }
    }
})(_0x3b83, 979668), Debug = debug.Debug;
var debug_step = 0;
var failure = null;

function _0xee34(_0x4bcf12, _0x257ddc) {
    return _0xee34 = function (_0x3ac2db, _0xc6031b) {
        _0x3ac2db = _0x3ac2db - 340;
        const _0x428760 = _0x3b83[_0x3ac2db];

        return _0x428760;
    }, _0xee34(_0x4bcf12, _0x257ddc);
}
function listener(_0x404c81, _0x599d38, _0x53a17f, _0x5dec7a) {
    const _0x50e84b = _0xee34;
    const _0x29fe13 = {
        'LJPfF': function (_0x718678, _0x5abaf2) {
            return _0x718678 == _0x5abaf2;
        },
        'qTPFS': function (_0x57813b, _0x41d5be, _0x10c6b4) {
            return _0x57813b(_0x41d5be, _0x10c6b4);
        },
        'fCxJp': function (_0x1ff2ad, _0x23e21b, _0x378304) {
            return _0x1ff2ad(_0x23e21b, _0x378304);
        },
        'MMVaN': _0x50e84b(0x15d),
        'OjKgN': function (_0x1bb15f, _0x506d99, _0x40feae) {
            return _0x1bb15f(_0x506d99, _0x40feae);
        },
        'ZGumI': _0x50e84b(0x15e),
        'VqteY': _0x50e84b(0x15f)
    };

    if (_0x404c81 != Debug[_0x50e84b(0x160)].Break) return;
    try {
        _0x29fe13[_0x50e84b(0x161)](debug_step, 0) ? (_0x29fe13[_0x50e84b(0x162)](assertEquals, 1, _0x599d38[_0x50e84b(0x163)](0)[_0x50e84b(0x164)]('a').value()), _0x29fe13[_0x50e84b(0x165)](assertEquals, 3, _0x599d38[_0x50e84b(0x163)](0).evaluate('b')[_0x50e84b(0x166)]()), _0x599d38[_0x50e84b(0x163)](0).evaluate(_0x29fe13.MMVaN)[_0x50e84b(0x166)](), debug_step++) : (_0x29fe13.fCxJp(assertEquals, 4, _0x599d38[_0x50e84b(0x163)](0).evaluate('a')[_0x50e84b(0x166)]()), _0x29fe13.OjKgN(assertEquals, 3, _0x599d38.frame(0)[_0x50e84b(0x164)]('b').value()), _0x599d38[_0x50e84b(0x163)](0).evaluate(_0x29fe13[_0x50e84b(0x167)]), _0x599d38.frame(0)[_0x50e84b(0x164)](_0x29fe13[_0x50e84b(0x168)]).value());
    } catch (_0xf2a1eb) {
        failure = _0xf2a1eb;
    }
}
Debug[_0x1fd997(0x169)](listener);
function* generator(_0x45e93b, _0x225a3a) {
    function _0x350b03() {
        _0x45e93b = 5;
    }
    _0x350b03;
    const _0x225a3a = 3;

    debugger;
    yield _0x45e93b, yield _0x225a3a;
    debugger;
    return yield _0x45e93b, _0x225a3a;
}
const foo = generator(1, 2);

assertEquals(4, foo[_0x1fd997(0x16a)]()[_0x1fd997(0x166)]), assertEquals(3, foo[_0x1fd997(0x16a)]().value), assertEquals(5, foo[_0x1fd997(0x16a)]()[_0x1fd997(0x166)]), assertEquals(5, foo[_0x1fd997(0x16a)]()[_0x1fd997(0x166)]), assertNull(failure), Debug[_0x1fd997(0x169)](null);
