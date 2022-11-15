const _0x1961 = [
    '2DYTWzx',
    '369966znJpob',
    '236801qbJoFa',
    '36591auTUMk',
    '27dgwYFu',
    '66699Yohagy',
    '7WgezeQ',
    '1055413ckuOdF',
    '1ausCjf',
    '1283868ajYPPn',
    '106898xdxlqg',
    'name',
    'mark',
    'Mark\x20entry\x20can\x20be\x20created\x20by\x20\x27new\x20PerformanceMark(string,\x20{})\x27.',
    'Mark\x20entry\x20can\x20be\x20created\x20by\x20\x27new\x20PerformanceMark(string,\x20{startTime})\x27.',
    'abc',
    'Mark\x20entry\x20can\x20be\x20created\x20by\x20\x27new\x20PerformanceMark(string,\x20{detail})\x27.',
    '\x27new\x20PerformanceMark(string,\x20{startTime,\x20detail})\x27.',
    'getEntriesByName',
    'length'
];
const _0x2082cb = _0x4cce;
function _0x4cce(_0x1ada7c, _0x11aeb3) {
    return _0x4cce = function (_0x1961a8, _0x4cceba) {
        _0x1961a8 = _0x1961a8 - 0x1ea;
        let _0x3a4254 = _0x1961[_0x1961a8];
        return _0x3a4254;
    }, _0x4cce(_0x1ada7c, _0x11aeb3);
}
(function (_0x41278f, _0x45ab5c) {
    const _0xfadb1f = _0x4cce;
    while (!![]) {
        try {
            const _0x26e6b3 = parseInt(_0xfadb1f(0x1ea)) * parseInt(_0xfadb1f(0x1eb)) + -parseInt(_0xfadb1f(0x1ec)) + parseInt(_0xfadb1f(0x1ed)) * parseInt(_0xfadb1f(0x1ee)) + parseInt(_0xfadb1f(0x1ef)) * -parseInt(_0xfadb1f(0x1f0)) + parseInt(_0xfadb1f(0x1f1)) * parseInt(_0xfadb1f(0x1f2)) + -parseInt(_0xfadb1f(0x1f3)) + -parseInt(_0xfadb1f(0x1f4));
            if (_0x26e6b3 === _0x45ab5c)
                break;
            else
                _0x41278f['push'](_0x41278f['shift']());
        } catch (_0x26196c) {
            _0x41278f['push'](_0x41278f['shift']());
        }
    }
}(_0x1961, 0xa82ca), test(() => {
    const _0x311cd7 = _0x4cce, _0x49ab3c = new PerformanceMark('name');
    assert_true(_0x49ab3c instanceof PerformanceMark), checkEntry(_0x49ab3c, {
        'name': _0x311cd7(0x1f5),
        'entryType': _0x311cd7(0x1f6)
    });
}, 'Mark\x20entry\x20can\x20be\x20created\x20by\x20\x27new\x20PerformanceMark(string)\x27.'), test(() => {
    const _0x3baeb5 = _0x4cce, _0x108fdc = new PerformanceMark(_0x3baeb5(0x1f5), {});
    assert_true(_0x108fdc instanceof PerformanceMark), checkEntry(_0x108fdc, {
        'name': _0x3baeb5(0x1f5),
        'entryType': _0x3baeb5(0x1f6)
    });
}, _0x2082cb(0x1f7)), test(() => {
    const _0xdd54fe = _0x2082cb, _0x56912c = new PerformanceMark('name', { 'startTime': 0x1 });
    assert_true(_0x56912c instanceof PerformanceMark), checkEntry(_0x56912c, {
        'name': _0xdd54fe(0x1f5),
        'entryType': _0xdd54fe(0x1f6),
        'startTime': 0x1
    });
}, _0x2082cb(0x1f8)), test(() => {
    const _0x5a97d1 = _0x2082cb, _0x206398 = new PerformanceMark(_0x5a97d1(0x1f5), { 'detail': { 'info': _0x5a97d1(0x1f9) } });
    assert_true(_0x206398 instanceof PerformanceMark), checkEntry(_0x206398, {
        'name': _0x5a97d1(0x1f5),
        'entryType': _0x5a97d1(0x1f6),
        'detail': { 'info': _0x5a97d1(0x1f9) }
    });
}, _0x2082cb(0x1fa)), test(() => {
    const _0x5ea2be = _0x2082cb, _0x288a81 = new PerformanceMark(_0x5ea2be(0x1f5), {
            'startTime': 0x1,
            'detail': { 'info': _0x5ea2be(0x1f9) }
        });
    assert_true(_0x288a81 instanceof PerformanceMark), checkEntry(_0x288a81, {
        'name': _0x5ea2be(0x1f5),
        'entryType': _0x5ea2be(0x1f6),
        'startTime': 0x1,
        'detail': { 'info': _0x5ea2be(0x1f9) }
    });
}, 'Mark\x20entry\x20can\x20be\x20created\x20by\x20' + _0x2082cb(0x1fb)), test(() => {
    const _0x104f1d = _0x2082cb, _0x37568b = new PerformanceMark(_0x104f1d(0x1f5));
    assert_true(_0x37568b instanceof PerformanceMark), checkEntry(_0x37568b, {
        'name': _0x104f1d(0x1f5),
        'entryType': _0x104f1d(0x1f6)
    }), assert_equals(performance[_0x104f1d(0x1fc)]('name')[_0x104f1d(0x1fd)], 0x0);
}, 'Using\x20new\x20PerformanceMark()\x20shouldn\x27t\x20add\x20the\x20entry\x20to\x20performance\x20timeline.'));
