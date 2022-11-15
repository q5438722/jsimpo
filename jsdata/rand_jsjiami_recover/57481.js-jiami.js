test(() => {
    const _0x474e75 = new PerformanceMark('name');
    assert_true(_0x474e75 instanceof PerformanceMark);
    checkEntry(_0x474e75, {
        'name': 'name',
        'entryType': 'mark'
    });
}, 'Mark entry can be created by \'new PerformanceMark(string)\'.');
test(() => {
    const _0x24357e = new PerformanceMark('name', {});
    assert_true(_0x24357e instanceof PerformanceMark);
    checkEntry(_0x24357e, {
        'name': 'name',
        'entryType': 'mark'
    });
}, 'Mark entry can be created by \'new PerformanceMark(string, {})\'.');
test(() => {
    const _0x15dc4f = new PerformanceMark('name', { 'startTime': 1 });
    assert_true(_0x15dc4f instanceof PerformanceMark);
    checkEntry(_0x15dc4f, {
        'name': 'name',
        'entryType': 'mark',
        'startTime': 1
    });
}, 'Mark entry can be created by \'new PerformanceMark(string, {startTime})\'.');
test(() => {
    const _0x50851c = new PerformanceMark('name', { 'detail': { 'info': 'abc' } });
    assert_true(_0x50851c instanceof PerformanceMark);
    checkEntry(_0x50851c, {
        'name': 'name',
        'entryType': 'mark',
        'detail': { 'info': 'abc' }
    });
}, 'Mark entry can be created by \'new PerformanceMark(string, {detail})\'.');
test(() => {
    const _0x977422 = new PerformanceMark('name', {
        'startTime': 1,
        'detail': { 'info': 'abc' }
    });
    assert_true(_0x977422 instanceof PerformanceMark);
    checkEntry(_0x977422, {
        'name': 'name',
        'entryType': 'mark',
        'startTime': 1,
        'detail': { 'info': 'abc' }
    });
}, 'Mark entry can be created by ' + '\'new PerformanceMark(string, {startTime, detail})\'.');
test(() => {
    const _0x2767dd = new PerformanceMark('name');
    assert_true(_0x2767dd instanceof PerformanceMark);
    checkEntry(_0x2767dd, {
        'name': 'name',
        'entryType': 'mark'
    });
    assert_equals(performance['getEntriesByName']('name')['length'], 0);
}, 'Using new PerformanceMark() shouldn\'t add the entry to performance timeline.');