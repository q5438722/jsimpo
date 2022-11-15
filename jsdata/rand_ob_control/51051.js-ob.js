'use strict';
const common = require('../common.js'), bench = common['createBenchmark'](main, {
        'size': [
            0x10,
            0x200,
            0x1000,
            0x4002
        ],
        'args': [
            0x1,
            0x2,
            0x5
        ],
        'n': [0xf4240]
    });
function main({
    n: _0x4cd7b8,
    size: _0x13beda,
    args: _0x49e7ac
}) {
    const _0x5a1bf3 = {
            'aIaFL': function (_0x561fd1, _0x557673) {
                return _0x561fd1 - _0x557673;
            },
            'VWJKb': function (_0x23ae1c, _0x5f4739) {
                return _0x23ae1c < _0x5f4739;
            }
        }, _0x14fc28 = Buffer['alloc'](_0x13beda, 'a'), _0x33f3c8 = Buffer['alloc'](_0x13beda, 'a'), _0x3d72a1 = _0x14fc28['length'], _0xa7f54e = _0x33f3c8['length'];
    _0x33f3c8[_0x5a1bf3['aIaFL'](_0x13beda, 0x1)] = 'b'['charCodeAt'](0x0);
    switch (_0x49e7ac) {
    case 0x2:
        _0x14fc28['compare'](_0x33f3c8, 0x0), bench['start']();
        for (let _0x3143dc = 0x0; _0x5a1bf3['VWJKb'](_0x3143dc, _0x4cd7b8); _0x3143dc++) {
            _0x14fc28['compare'](_0x33f3c8, 0x0);
        }
        bench['end'](_0x4cd7b8);
        break;
    case 0x3:
        _0x14fc28['compare'](_0x33f3c8, 0x0, _0xa7f54e), bench['start']();
        for (let _0x2a93bb = 0x0; _0x5a1bf3['VWJKb'](_0x2a93bb, _0x4cd7b8); _0x2a93bb++) {
            _0x14fc28['compare'](_0x33f3c8, 0x0, _0xa7f54e);
        }
        bench['end'](_0x4cd7b8);
        break;
    case 0x4:
        _0x14fc28['compare'](_0x33f3c8, 0x0, _0xa7f54e, 0x0), bench['start']();
        for (let _0x2e049d = 0x0; _0x5a1bf3['VWJKb'](_0x2e049d, _0x4cd7b8); _0x2e049d++) {
            _0x14fc28['compare'](_0x33f3c8, 0x0, _0xa7f54e, 0x0);
        }
        bench['end'](_0x4cd7b8);
        break;
    case 0x5:
        _0x14fc28['compare'](_0x33f3c8, 0x0, _0xa7f54e, 0x0, _0x3d72a1), bench['start']();
        for (let _0x35cbd9 = 0x0; _0x5a1bf3['VWJKb'](_0x35cbd9, _0x4cd7b8); _0x35cbd9++) {
            _0x14fc28['compare'](_0x33f3c8, 0x0, _0xa7f54e, 0x0, _0x3d72a1);
        }
        bench['end'](_0x4cd7b8);
        break;
    default:
        _0x14fc28['compare'](_0x33f3c8), bench['start']();
        for (let _0x362dd7 = 0x0; _0x5a1bf3['VWJKb'](_0x362dd7, _0x4cd7b8); _0x362dd7++) {
            _0x14fc28['compare'](_0x33f3c8);
        }
        bench['end'](_0x4cd7b8);
    }
}
