test(() => {
    const _0x1d0c72 = new PerformanceMark('name');
    assert_true(_0x1d0c72 instanceof PerformanceMark), checkEntry(_0x1d0c72, {
        'name': 'name',
        'entryType': 'mark'
    });
}, 'Mark\x20entry\x20can\x20be\x20created\x20by\x20\x27new\x20PerformanceMark(string)\x27.'), test(() => {
    const _0x3f0bc3 = new PerformanceMark('name', {});
    assert_true(_0x3f0bc3 instanceof PerformanceMark), checkEntry(_0x3f0bc3, {
        'name': 'name',
        'entryType': 'mark'
    });
}, 'Mark\x20entry\x20can\x20be\x20created\x20by\x20\x27new\x20PerformanceMark(string,\x20{})\x27.'), test(() => {
    const _0x17efa1 = new PerformanceMark('name', { 'startTime': 0x1 });
    assert_true(_0x17efa1 instanceof PerformanceMark), checkEntry(_0x17efa1, {
        'name': 'name',
        'entryType': 'mark',
        'startTime': 0x1
    });
}, 'Mark\x20entry\x20can\x20be\x20created\x20by\x20\x27new\x20PerformanceMark(string,\x20{startTime})\x27.'), test(() => {
    const _0x2dbd3f = new PerformanceMark('name', { 'detail': { 'info': 'abc' } });
    assert_true(_0x2dbd3f instanceof PerformanceMark), checkEntry(_0x2dbd3f, {
        'name': 'name',
        'entryType': 'mark',
        'detail': { 'info': 'abc' }
    });
}, 'Mark\x20entry\x20can\x20be\x20created\x20by\x20\x27new\x20PerformanceMark(string,\x20{detail})\x27.'), test(() => {
    const _0x427e97 = new PerformanceMark('name', {
        'startTime': 0x1,
        'detail': { 'info': 'abc' }
    });
    assert_true(_0x427e97 instanceof PerformanceMark), checkEntry(_0x427e97, {
        'name': 'name',
        'entryType': 'mark',
        'startTime': 0x1,
        'detail': { 'info': 'abc' }
    });
}, 'Mark\x20entry\x20can\x20be\x20created\x20by\x20' + '\x27new\x20PerformanceMark(string,\x20{startTime,\x20detail})\x27.'), test(() => {
    const _0xe6d54d = new PerformanceMark('name');
    assert_true(_0xe6d54d instanceof PerformanceMark), checkEntry(_0xe6d54d, {
        'name': 'name',
        'entryType': 'mark'
    }), assert_equals(performance['getEntriesByName']('name')['length'], -0x11b4 * 0x2 + 0x2 * 0x11af + -0x2 * -0x5);
}, 'Using\x20new\x20PerformanceMark()\x20shouldn\x27t\x20add\x20the\x20entry\x20to\x20performance\x20timeline.');
