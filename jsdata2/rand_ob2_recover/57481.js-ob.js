test(() => {
    const _0x311cd7 = _0x4cce, _0x49ab3c = new PerformanceMark('name');
    assert_true(_0x49ab3c instanceof PerformanceMark), checkEntry(_0x49ab3c, {
        'name': _0x311cd7(501),
        'entryType': _0x311cd7(502)
    });
}, 'Mark entry can be created by \'new PerformanceMark(string)\'.'), test(() => {
    const _0x3baeb5 = _0x4cce, _0x108fdc = new PerformanceMark(_0x3baeb5(501), {});
    assert_true(_0x108fdc instanceof PerformanceMark), checkEntry(_0x108fdc, {
        'name': _0x3baeb5(501),
        'entryType': _0x3baeb5(502)
    });
}, _0x2082cb(503)), test(() => {
    const _0xdd54fe = _0x2082cb, _0x56912c = new PerformanceMark('name', { 'startTime': 1 });
    assert_true(_0x56912c instanceof PerformanceMark), checkEntry(_0x56912c, {
        'name': _0xdd54fe(501),
        'entryType': _0xdd54fe(502),
        'startTime': 1
    });
}, _0x2082cb(504)), test(() => {
    const _0x5a97d1 = _0x2082cb, _0x206398 = new PerformanceMark(_0x5a97d1(501), { 'detail': { 'info': _0x5a97d1(505) } });
    assert_true(_0x206398 instanceof PerformanceMark), checkEntry(_0x206398, {
        'name': _0x5a97d1(501),
        'entryType': _0x5a97d1(502),
        'detail': { 'info': _0x5a97d1(505) }
    });
}, _0x2082cb(506)), test(() => {
    const _0x5ea2be = _0x2082cb, _0x288a81 = new PerformanceMark(_0x5ea2be(501), {
            'startTime': 1,
            'detail': { 'info': _0x5ea2be(505) }
        });
    assert_true(_0x288a81 instanceof PerformanceMark), checkEntry(_0x288a81, {
        'name': _0x5ea2be(501),
        'entryType': _0x5ea2be(502),
        'startTime': 1,
        'detail': { 'info': _0x5ea2be(505) }
    });
}, 'Mark entry can be created by ' + _0x2082cb(507)), test(() => {
    const _0x104f1d = _0x2082cb, _0x37568b = new PerformanceMark(_0x104f1d(501));
    assert_true(_0x37568b instanceof PerformanceMark), checkEntry(_0x37568b, {
        'name': _0x104f1d(501),
        'entryType': _0x104f1d(502)
    }), assert_equals(performance[_0x104f1d(508)]('name')[_0x104f1d(509)], 0);
}, 'Using new PerformanceMark() shouldn\'t add the entry to performance timeline.');