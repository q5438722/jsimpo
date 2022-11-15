'use strict';
const error1 = new Error('error1');
error1['name'] = 'error1', promise_test(() => {
    const _0x543b44 = {
        'vuYBn': function (_0x3a66ed, _0x1616cb) {
            return _0x3a66ed < _0x1616cb;
        },
        'bxIcu': function (_0x5ce902, _0x3c7c30) {
            return _0x5ce902(_0x3c7c30);
        }
    };
    let _0x47ee29, _0x526630 = 0x0;
    const _0xe01c84 = new ReadableStream({
        'start'(_0x209d02) {
            _0x47ee29 = _0x209d02;
        }
    }, {
        'size'() {
            return ++_0x526630, _0x543b44['vuYBn'](_0x526630, 0x2) && _0x47ee29['enqueue']('b'), 0x1;
        }
    });
    return _0x47ee29['enqueue']('a'), _0x47ee29['close'](), _0x543b44['bxIcu'](readableStreamToArray, _0xe01c84)['then'](_0x1acf06 => assert_array_equals(_0x1acf06, [
        'b',
        'a'
    ], 'array\x20should\x20contain\x20two\x20chunks'));
}, 'enqueue()\x20inside\x20size()\x20should\x20work'), promise_test(() => {
    const _0x4b26fe = {
        'KKllf': function (_0x450bf2, _0x3c684) {
            return _0x450bf2(_0x3c684);
        }
    };
    let _0x518a4c;
    const _0x566d50 = new ReadableStream({
        'start'(_0xa50648) {
            _0x518a4c = _0xa50648;
        }
    }, {
        'size'() {
            return _0x518a4c['close'](), 0x1;
        }
    });
    return _0x518a4c['enqueue']('a'), _0x4b26fe['KKllf'](readableStreamToArray, _0x566d50)['then'](_0x318098 => assert_array_equals(_0x318098, [], 'array\x20should\x20contain\x20no\x20chunks'));
}, 'close()\x20inside\x20size()\x20should\x20not\x20crash'), promise_test(() => {
    const _0x236ae6 = {
        'assXy': function (_0x55fa38, _0x86890) {
            return _0x55fa38 === _0x86890;
        },
        'CrsNC': function (_0x5d3c0d, _0x31d9fe) {
            return _0x5d3c0d(_0x31d9fe);
        }
    };
    let _0x53ce8f, _0x4e3499 = 0x0;
    const _0x164699 = new ReadableStream({
        'start'(_0x4d3310) {
            _0x53ce8f = _0x4d3310;
        }
    }, {
        'size'() {
            return ++_0x4e3499, _0x236ae6['assXy'](_0x4e3499, 0x2) && _0x53ce8f['close'](), 0x1;
        }
    });
    return _0x53ce8f['enqueue']('a'), _0x53ce8f['enqueue']('b'), _0x236ae6['CrsNC'](readableStreamToArray, _0x164699)['then'](_0x43d43c => assert_array_equals(_0x43d43c, [
        'a',
        'b'
    ], 'array\x20should\x20contain\x20two\x20chunks'));
}, 'close\x20request\x20inside\x20size()\x20should\x20work'), promise_test(_0x23d9a6 => {
    const _0x1e8ac7 = {
        'QHmjQ': function (_0x14867a, _0x3939c6, _0x324709, _0x1e1514, _0x3dc9a6) {
            return _0x14867a(_0x3939c6, _0x324709, _0x1e1514, _0x3dc9a6);
        },
        'rOqBt': 'read()\x20should\x20reject'
    };
    let _0x2e02e5;
    const _0x412e67 = new ReadableStream({
        'start'(_0x3f2953) {
            _0x2e02e5 = _0x3f2953;
        }
    }, {
        'size'() {
            return _0x2e02e5['error'](error1), 0x1;
        }
    });
    return _0x2e02e5['enqueue']('a'), _0x1e8ac7['QHmjQ'](promise_rejects_exactly, _0x23d9a6, error1, _0x412e67['getReader']()['read'](), _0x1e8ac7['rOqBt']);
}, 'error()\x20inside\x20size()\x20should\x20work'), promise_test(() => {
    const _0x22e5d5 = {
        'GkRuR': function (_0x3c6af2, _0x48ea79, _0x436970, _0x632d50) {
            return _0x3c6af2(_0x48ea79, _0x436970, _0x632d50);
        },
        'NpGln': 'desiredSize\x20should\x20be\x201',
        'PNJUz': function (_0x14796e, _0x2a953f) {
            return _0x14796e(_0x2a953f);
        }
    };
    let _0xc0c871;
    const _0x21263f = new ReadableStream({
        'start'(_0xeb582b) {
            _0xc0c871 = _0xeb582b;
        }
    }, {
        'size'() {
            return _0x22e5d5['GkRuR'](assert_equals, _0xc0c871['desiredSize'], 0x1, _0x22e5d5['NpGln']), 0x1;
        },
        'highWaterMark': 0x1
    });
    return _0xc0c871['enqueue']('a'), _0xc0c871['close'](), _0x22e5d5['PNJUz'](readableStreamToArray, _0x21263f)['then'](_0x509f5b => assert_array_equals(_0x509f5b, ['a'], 'array\x20should\x20contain\x20one\x20chunk'));
}, 'desiredSize\x20inside\x20size()\x20should\x20work'), promise_test(_0x2edb5f => {
    const _0x167d43 = {
        'SCjuq': function (_0x47a721, _0xb342e2, _0x2a9f68, _0x3f35d6) {
            return _0x47a721(_0xb342e2, _0x2a9f68, _0x3f35d6);
        },
        'SxzqH': 'reason\x20should\x20be\x20error1',
        'NVHDd': 'enqueue()\x20should\x20throw'
    };
    let _0x3ce883, _0x53d9ed;
    const _0x2a8b1d = new ReadableStream({
        'start'(_0x57ea5a) {
            _0x53d9ed = _0x57ea5a;
        },
        'cancel': _0x2edb5f['step_func'](_0x2dd9bf => {
            _0x167d43['SCjuq'](assert_equals, _0x2dd9bf, error1, _0x167d43['SxzqH']), _0x167d43['SCjuq'](assert_throws_js, TypeError, () => _0x53d9ed['enqueue'](), _0x167d43['NVHDd']);
        })
    }, {
        'size'() {
            return _0x3ce883 = _0x2a8b1d['cancel'](error1), 0x1;
        },
        'highWaterMark': Infinity
    });
    _0x53d9ed['enqueue']('a');
    const _0x2206a6 = _0x2a8b1d['getReader']();
    return Promise['all']([
        _0x2206a6['closed'],
        _0x3ce883
    ]);
}, 'cancel()\x20inside\x20size()\x20should\x20work'), promise_test(() => {
    const _0x3abe79 = {
        'UqxhL': function (_0x4237ee, _0x3251ca, _0x59fb8b, _0x47fed5) {
            return _0x4237ee(_0x3251ca, _0x59fb8b, _0x47fed5);
        },
        'JNSwa': 'write',
        'KNfHw': 'ws\x20should\x20contain\x20two\x20chunks',
        'tNATN': 'close',
        'AKtpP': 'target\x20should\x20have\x20been\x20closed',
        'TngGs': function (_0x1ba92a) {
            return _0x1ba92a();
        },
        'dWifo': function (_0x1d26bd, _0x58cfc2, _0x319525) {
            return _0x1d26bd(_0x58cfc2, _0x319525);
        },
        'bSMGp': function (_0x3aeb2a, _0x10b5c8) {
            return _0x3aeb2a(_0x10b5c8);
        }
    };
    let _0x3a30eb, _0x9b21ac;
    const _0x1667e3 = _0x3abe79['TngGs'](recordingWritableStream), _0x48f9ad = new ReadableStream({
            'start'(_0xca4c43) {
                _0x3a30eb = _0xca4c43;
            }
        }, {
            'size'() {
                return !_0x9b21ac && (_0x9b21ac = _0x48f9ad['pipeTo'](_0x1667e3)), 0x1;
            },
            'highWaterMark': 0x1
        });
    return _0x3a30eb['enqueue']('a'), _0x3abe79['dWifo'](assert_not_equals, _0x9b21ac, undefined), _0x3a30eb['enqueue']('a'), _0x3abe79['bSMGp'](delay, 0x0)['then'](() => {
        return _0x3abe79['UqxhL'](assert_array_equals, _0x1667e3['events'], [
            _0x3abe79['JNSwa'],
            'a',
            _0x3abe79['JNSwa'],
            'a'
        ], _0x3abe79['KNfHw']), _0x3a30eb['close'](), _0x9b21ac;
    })['then'](() => {
        _0x3abe79['UqxhL'](assert_array_equals, _0x1667e3['events'], [
            _0x3abe79['JNSwa'],
            'a',
            _0x3abe79['JNSwa'],
            'a',
            _0x3abe79['tNATN']
        ], _0x3abe79['AKtpP']);
    });
}, 'pipeTo()\x20inside\x20size()\x20should\x20behave\x20as\x20expected'), promise_test(() => {
    const _0x268ea2 = {
        'TKhGR': function (_0xded6b3, _0x595a82) {
            return _0xded6b3(_0x595a82);
        },
        'ZcIWW': function (_0x1d37a6, _0x44e8c4, _0x5a0cd4, _0x5923c3) {
            return _0x1d37a6(_0x44e8c4, _0x5a0cd4, _0x5923c3);
        },
        'lgaow': 'size()\x20should\x20have\x20been\x20called\x20once',
        'IpFXX': function (_0x554271, _0x24eb08) {
            return _0x554271(_0x24eb08);
        },
        'CGpYo': function (_0x484e50, _0x12d6d8, _0x4d2d5f, _0x444cd2) {
            return _0x484e50(_0x12d6d8, _0x4d2d5f, _0x444cd2);
        },
        'fMBuc': 'size()\x20should\x20only\x20be\x20called\x20once',
        'KABUn': function (_0xf9bc61, _0x15d21a, _0xc8221a) {
            return _0xf9bc61(_0x15d21a, _0xc8221a);
        },
        'Qihkj': 'done\x20should\x20be\x20false',
        'iYiFW': 'chunk\x20should\x20have\x20been\x20read',
        'rOJYM': 'calls\x20should\x20still\x20be\x201',
        'BRvsr': 'done\x20should\x20be\x20false\x20again',
        'AZsDy': 'chunk\x20a\x20should\x20come\x20after\x20b',
        'RVjiP': function (_0x3ffe93) {
            return _0x3ffe93();
        }
    };
    let _0x4493bb, _0x1e63bc, _0xeb8e34 = 0x0, _0x58dc7f = ![], _0x460c8c;
    const _0x1d7299 = new ReadableStream({
        'start'(_0xb9bdcc) {
            _0x4493bb = _0xb9bdcc;
        }
    }, {
        'size'() {
            return _0x1e63bc = _0x460c8c['read'](), ++_0xeb8e34, 0x1;
        },
        'highWaterMark': 0x0
    });
    return _0x460c8c = _0x1d7299['getReader'](), _0x4493bb['enqueue']('a'), _0x1e63bc['then'](() => {
        _0x58dc7f = !![];
    }), _0x268ea2['RVjiP'](flushAsyncEvents)['then'](() => {
        return _0x268ea2['TKhGR'](assert_false, _0x58dc7f), _0x4493bb['enqueue']('b'), _0x268ea2['ZcIWW'](assert_equals, _0xeb8e34, 0x1, _0x268ea2['lgaow']), _0x268ea2['IpFXX'](delay, 0x0);
    })['then'](() => {
        return _0x268ea2['IpFXX'](assert_true, _0x58dc7f), _0x268ea2['CGpYo'](assert_equals, _0xeb8e34, 0x1, _0x268ea2['fMBuc']), _0x1e63bc;
    })['then'](({
        value: _0x1798dd,
        done: _0x223d88
    }) => {
        return _0x268ea2['KABUn'](assert_false, _0x223d88, _0x268ea2['Qihkj']), _0x268ea2['CGpYo'](assert_equals, _0x1798dd, 'b', _0x268ea2['iYiFW']), _0x268ea2['CGpYo'](assert_equals, _0xeb8e34, 0x1, _0x268ea2['rOJYM']), _0x460c8c['read']();
    })['then'](({
        value: _0x4032e7,
        done: _0x5c596f
    }) => {
        _0x268ea2['KABUn'](assert_false, _0x5c596f, _0x268ea2['BRvsr']), _0x268ea2['CGpYo'](assert_equals, _0x4032e7, 'a', _0x268ea2['AZsDy']);
    });
}, 'read()\x20inside\x20of\x20size()\x20should\x20behave\x20as\x20expected'), promise_test(() => {
    const _0x32e73f = {
        'lEBZQ': function (_0x32ccf7, _0x39d9c3, _0x5bcd94) {
            return _0x32ccf7(_0x39d9c3, _0x5bcd94);
        },
        'WnSgx': 'done\x20should\x20be\x20false',
        'tkIBU': function (_0x24042f, _0x2639b6, _0x217778, _0x3224f9) {
            return _0x24042f(_0x2639b6, _0x217778, _0x3224f9);
        },
        'qxGTR': 'value\x20should\x20be\x20a'
    };
    let _0x5a5c08, _0x3a2181;
    const _0x3deeb7 = new ReadableStream({
        'start'(_0x4f132e) {
            _0x5a5c08 = _0x4f132e;
        }
    }, {
        'size'() {
            return _0x3a2181 = _0x3deeb7['getReader'](), 0x1;
        }
    });
    return _0x5a5c08['enqueue']('a'), _0x3a2181['read']()['then'](({
        value: _0xa6979a,
        done: _0x5af564
    }) => {
        _0x32e73f['lEBZQ'](assert_false, _0x5af564, _0x32e73f['WnSgx']), _0x32e73f['tkIBU'](assert_equals, _0xa6979a, 'a', _0x32e73f['qxGTR']);
    });
}, 'getReader()\x20inside\x20size()\x20should\x20work'), promise_test(() => {
    const _0x56285a = {
        'xzYZL': function (_0x2a7120, _0x40bafe, _0x9f4700) {
            return _0x2a7120(_0x40bafe, _0x9f4700);
        },
        'FtyMm': 'rs\x20should\x20be\x20locked',
        'tTQFo': function (_0x4dc973, _0x26c2d9) {
            return _0x4dc973(_0x26c2d9);
        }
    };
    let _0x3eb571, _0x2a3277, _0x1f22f0;
    const _0x39e62d = new ReadableStream({
        'start'(_0x2972f6) {
            _0x3eb571 = _0x2972f6;
        }
    }, {
        'size'() {
            return [_0x2a3277, _0x1f22f0] = _0x39e62d['tee'](), 0x1;
        }
    });
    return _0x3eb571['enqueue']('a'), _0x56285a['xzYZL'](assert_true, _0x39e62d['locked'], _0x56285a['FtyMm']), _0x3eb571['close'](), Promise['all']([
        _0x56285a['tTQFo'](readableStreamToArray, _0x2a3277)['then'](_0x3330e0 => assert_array_equals(_0x3330e0, ['a'], 'branch1\x20should\x20have\x20one\x20chunk')),
        _0x56285a['tTQFo'](readableStreamToArray, _0x1f22f0)['then'](_0x4042c0 => assert_array_equals(_0x4042c0, ['a'], 'branch2\x20should\x20have\x20one\x20chunk'))
    ]);
}, 'tee()\x20inside\x20size()\x20should\x20work');
