'use strict';
const _0xb24e = [
    '\x27:\x20expecting:\x20',
    'error',
    'inspect',
    'printGraph',
    'toLowerCase',
    'uid',
    '12jbnlce',
    '18968GTnaJG',
    '113789eAdIeN',
    '14dWlUfV',
    '1439870oOSWYG',
    '417695ItxqLw',
    '3UcAwWI',
    '17794olkDez',
    '11yCoWPm',
    '440189hNdYtm',
    '959705mqdAVS',
    '../common',
    'assert',
    'util',
    'length',
    'type',
    'isArray',
    'found',
    'index',
    'data',
    'triggerAsyncId',
    'forEach',
    'new',
    'exports',
    'activities',
    'push',
    '\x27\x20expected\x20to\x20be\x20triggered\x20by\x20\x27',
    '\x27,\x20',
    'but\x20was\x20triggered\x20by\x20\x27',
    'strictEqual',
    'Type\x20\x27'
];
const _0xf69fc7 = _0x4fa0;
(function (_0x506e3f, _0x5bc1b2) {
    const _0x35ddbd = _0x4fa0;
    while (!![]) {
        try {
            const _0x486282 = parseInt(_0x35ddbd(0x8b)) * -parseInt(_0x35ddbd(0x8c)) + -parseInt(_0x35ddbd(0x8d)) * -parseInt(_0x35ddbd(0x8e)) + -parseInt(_0x35ddbd(0x8f)) + -parseInt(_0x35ddbd(0x90)) * -parseInt(_0x35ddbd(0x91)) + parseInt(_0x35ddbd(0x92)) * parseInt(_0x35ddbd(0x93)) + parseInt(_0x35ddbd(0x94)) + -parseInt(_0x35ddbd(0x95));
            if (_0x486282 === _0x5bc1b2)
                break;
            else
                _0x506e3f['push'](_0x506e3f['shift']());
        } catch (_0x1022d8) {
            _0x506e3f['push'](_0x506e3f['shift']());
        }
    }
}(_0xb24e, 0xd0b4f));
require(_0xf69fc7(0x96));
function _0x4fa0(_0x5c7e09, _0x5d25a9) {
    return _0x4fa0 = function (_0xb24efa, _0x4fa096) {
        _0xb24efa = _0xb24efa - 0x8b;
        let _0x300cdc = _0xb24e[_0xb24efa];
        return _0x300cdc;
    }, _0x4fa0(_0x5c7e09, _0x5d25a9);
}
const assert = require(_0xf69fc7(0x97)), util = require(_0xf69fc7(0x98));
function findInGraph(_0x36a036, _0x73e0f6, _0x1c0ed3) {
    const _0x5cf369 = _0xf69fc7;
    let _0x3428a7 = 0x0;
    for (let _0x1f4fa6 = 0x0; _0x1f4fa6 < _0x36a036[_0x5cf369(0x99)]; _0x1f4fa6++) {
        const _0x9d99b6 = _0x36a036[_0x1f4fa6];
        if (_0x9d99b6[_0x5cf369(0x9a)] === _0x73e0f6)
            _0x3428a7++;
        if (_0x3428a7 === _0x1c0ed3)
            return _0x9d99b6;
    }
}
function pruneTickObjects(_0x43a8d1) {
    const _0x29957f = _0xf69fc7, _0x40c4b7 = {
            'found': !![],
            'index': null,
            'data': null
        };
    if (!Array[_0x29957f(0x9b)](_0x43a8d1))
        return _0x43a8d1;
    while (_0x40c4b7[_0x29957f(0x9c)]) {
        for (let _0x3f7f92 = 0x0; _0x3f7f92 < _0x43a8d1[_0x29957f(0x99)]; _0x3f7f92++) {
            if (_0x43a8d1[_0x3f7f92][_0x29957f(0x9a)] === 'TickObject') {
                _0x40c4b7[_0x29957f(0x9d)] = _0x3f7f92;
                break;
            } else
                _0x3f7f92 + 0x1 >= _0x43a8d1[_0x29957f(0x99)] && (_0x40c4b7['found'] = ![]);
        }
        if (_0x40c4b7[_0x29957f(0x9c)]) {
            _0x40c4b7['data'] = _0x43a8d1[_0x40c4b7[_0x29957f(0x9d)]];
            const _0xd087f8 = {
                'new': _0x40c4b7[_0x29957f(0x9e)][_0x29957f(0x9f)],
                'old': _0x40c4b7[_0x29957f(0x9e)]['uid']
            };
            _0x43a8d1[_0x29957f(0xa0)](function _0x52af57(_0x5b3dfe) {
                const _0x39052d = _0x29957f;
                if (_0x5b3dfe['triggerAsyncId'] === _0xd087f8['old'])
                    _0x5b3dfe['triggerAsyncId'] = _0xd087f8[_0x39052d(0xa1)];
            }), _0x43a8d1['splice'](_0x40c4b7[_0x29957f(0x9d)], 0x1);
        }
    }
    return _0x43a8d1;
}
module[_0xf69fc7(0xa2)] = function verifyGraph(_0x18a315, _0x5f0bd2) {
    const _0x4a8c04 = _0xf69fc7;
    pruneTickObjects(_0x18a315);
    const _0x165a7a = {}, _0x22e939 = {}, _0x5807bf = {}, _0x4293c7 = [], _0x402408 = pruneTickObjects(_0x18a315[_0x4a8c04(0xa3)]);
    _0x402408[_0x4a8c04(0xa0)](_0x42e8fa);
    function _0x42e8fa(_0x4e9eb5) {
        const _0x5b4080 = _0x4a8c04;
        if (!_0x5807bf[_0x4e9eb5[_0x5b4080(0x9a)]])
            _0x5807bf[_0x4e9eb5[_0x5b4080(0x9a)]] = 0x0;
        _0x5807bf[_0x4e9eb5[_0x5b4080(0x9a)]]++;
        const _0xba416b = findInGraph(_0x5f0bd2, _0x4e9eb5[_0x5b4080(0x9a)], _0x5807bf[_0x4e9eb5[_0x5b4080(0x9a)]]);
        if (_0xba416b == null)
            return;
        _0x165a7a[_0xba416b['id']] = _0x4e9eb5['uid'], _0x22e939[_0x4e9eb5['uid']] = _0xba416b['id'];
        if (_0xba416b[_0x5b4080(0x9f)] == null)
            return;
        const _0x30a92f = _0x165a7a[_0xba416b[_0x5b4080(0x9f)]];
        if (_0x4e9eb5[_0x5b4080(0x9f)] === _0x30a92f)
            return;
        _0x4293c7[_0x5b4080(0xa4)]({
            'id': _0xba416b['id'],
            'expectedTid': _0xba416b[_0x5b4080(0x9f)],
            'actualTid': _0x22e939[_0x4e9eb5[_0x5b4080(0x9f)]]
        });
    }
    _0x4293c7['length'] && _0x4293c7[_0x4a8c04(0xa0)](_0x4f81d4 => console['error']('\x27' + _0x4f81d4['id'] + _0x4a8c04(0xa5) + _0x4f81d4['expectedTid'] + _0x4a8c04(0xa6) + (_0x4a8c04(0xa7) + _0x4f81d4['actualTid'] + '\x27\x20instead.')));
    assert[_0x4a8c04(0xa8)](_0x4293c7[_0x4a8c04(0x99)], 0x0);
    const _0x362631 = Object['create'](null);
    for (let _0x154b9c = 0x0; _0x154b9c < _0x5f0bd2[_0x4a8c04(0x99)]; _0x154b9c++) {
        if (_0x362631[_0x5f0bd2[_0x154b9c][_0x4a8c04(0x9a)]] == null)
            _0x362631[_0x5f0bd2[_0x154b9c][_0x4a8c04(0x9a)]] = 0x0;
        _0x362631[_0x5f0bd2[_0x154b9c][_0x4a8c04(0x9a)]]++;
    }
    for (const _0x391b7b in _0x362631) {
        assert['ok'](_0x5807bf[_0x391b7b] >= _0x362631[_0x391b7b], _0x4a8c04(0xa9) + _0x391b7b + _0x4a8c04(0xaa) + _0x362631[_0x391b7b] + '\x20' + ('found:\x20' + _0x5807bf[_0x391b7b]));
    }
};
function inspect(_0xdadb41, _0x236eb6) {
    const _0x35a744 = _0xf69fc7;
    console[_0x35a744(0xab)](util[_0x35a744(0xac)](_0xdadb41, ![], _0x236eb6 || 0x5, !![]));
}
module[_0xf69fc7(0xa2)][_0xf69fc7(0xad)] = function printGraph(_0x5128ae) {
    const _0x3d011c = _0xf69fc7, _0x4960be = {}, _0x51b4d9 = {}, _0x124117 = pruneTickObjects(_0x5128ae[_0x3d011c(0xa3)]), _0x38fc4b = [];
    _0x124117['forEach'](_0xbdb945);
    function _0xbdb945(_0x4b5e78) {
        const _0x4b15c1 = _0x3d011c, _0x2effeb = _0x4b5e78[_0x4b15c1(0x9a)]['replace'](/WRAP/, '')[_0x4b15c1(0xae)]();
        if (!_0x4960be[_0x2effeb])
            _0x4960be[_0x2effeb] = 0x1;
        const _0x16b5f5 = _0x2effeb + ':' + _0x4960be[_0x2effeb]++;
        _0x51b4d9[_0x4b5e78[_0x4b15c1(0xaf)]] = _0x16b5f5;
        const _0x216250 = _0x51b4d9[_0x4b5e78[_0x4b15c1(0x9f)]] || null;
        _0x38fc4b['push']({
            'type': _0x4b5e78[_0x4b15c1(0x9a)],
            'id': _0x16b5f5,
            'triggerAsyncId': _0x216250
        });
    }
    inspect(_0x38fc4b);
};
