Debug = debug['Debug'];
var debug_step = 0x0, failure = null;
function listener(_0x503706, _0x1e173d, _0x5cc83b, _0x18551f) {
    var _0x1278ff = {
        'pKHMR': function (_0x5a6cdb, _0x104ed4) {
            return _0x5a6cdb != _0x104ed4;
        },
        'IFFmY': function (_0x5d5141, _0x202af2) {
            return _0x5d5141 == _0x202af2;
        },
        'hBvtU': function (_0x355407, _0x5dee75, _0x4baec7) {
            return _0x355407(_0x5dee75, _0x4baec7);
        },
        'HOVYC': function (_0x1c699e, _0x46888b, _0x3cec65) {
            return _0x1c699e(_0x46888b, _0x3cec65);
        },
        'BxzAo': 'a\x20=\x204',
        'wnIjV': function (_0x516708, _0x500c62, _0x430ba5) {
            return _0x516708(_0x500c62, _0x430ba5);
        },
        'YtJik': 'set_a_to_5()',
        'bbgVf': 'b\x20=\x205'
    };
    if (_0x1278ff['pKHMR'](_0x503706, Debug['DebugEvent']['Break']))
        return;
    try {
        _0x1278ff['IFFmY'](debug_step, 0x0) ? (_0x1278ff['hBvtU'](assertEquals, 0x1, _0x1e173d['frame'](0x0)['evaluate']('a')['value']()), _0x1278ff['HOVYC'](assertEquals, 0x3, _0x1e173d['frame'](0x0)['evaluate']('b')['value']()), _0x1e173d['frame'](0x0)['evaluate'](_0x1278ff['BxzAo'])['value'](), debug_step++) : (_0x1278ff['HOVYC'](assertEquals, 0x4, _0x1e173d['frame'](0x0)['evaluate']('a')['value']()), _0x1278ff['wnIjV'](assertEquals, 0x3, _0x1e173d['frame'](0x0)['evaluate']('b')['value']()), _0x1e173d['frame'](0x0)['evaluate'](_0x1278ff['YtJik']), _0x1e173d['frame'](0x0)['evaluate'](_0x1278ff['bbgVf'])['value']());
    } catch (_0x1e1da1) {
        failure = _0x1e1da1;
    }
}
Debug['setListener'](listener);
function* generator(_0x304719, _0x5a621d) {
    function _0x537e09() {
        _0x304719 = 0x5;
    }
    _0x537e09;
    var _0x5a621d = 0x3;
    debugger;
    yield _0x304719, yield _0x5a621d;
    debugger;
    return yield _0x304719, _0x5a621d;
}
var foo = generator(0x1, 0x2);
assertEquals(0x4, foo['next']()['value']), assertEquals(0x3, foo['next']()['value']), assertEquals(0x5, foo['next']()['value']), assertEquals(0x5, foo['next']()['value']), assertNull(failure), Debug['setListener'](null);
