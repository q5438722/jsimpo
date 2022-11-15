require(_0xf69fc7(150));
function _0x4fa0(_0x5c7e09, _0x5d25a9) {
    return _0x4fa0 = function (_0xb24efa, _0x4fa096) {
        _0xb24efa = _0xb24efa - 139;
        let _0x300cdc = _0xb24e[_0xb24efa];
        return _0x300cdc;
    }, _0x4fa0(_0x5c7e09, _0x5d25a9);
}
const assert = require(_0xf69fc7(151)), util = require(_0xf69fc7(152));
function findInGraph(_0x36a036, _0x73e0f6, _0x1c0ed3) {
    const _0x5cf369 = _0xf69fc7;
    let _0x3428a7 = 0;
    for (let _0x1f4fa6 = 0; _0x1f4fa6 < _0x36a036[_0x5cf369(153)]; _0x1f4fa6++) {
        const _0x9d99b6 = _0x36a036[_0x1f4fa6];
        if (_0x9d99b6[_0x5cf369(154)] === _0x73e0f6)
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
    if (!Array[_0x29957f(155)](_0x43a8d1))
        return _0x43a8d1;
    while (_0x40c4b7[_0x29957f(156)]) {
        for (let _0x3f7f92 = 0; _0x3f7f92 < _0x43a8d1[_0x29957f(153)]; _0x3f7f92++) {
            if (_0x43a8d1[_0x3f7f92][_0x29957f(154)] === 'TickObject') {
                _0x40c4b7[_0x29957f(157)] = _0x3f7f92;
                break;
            } else
                _0x3f7f92 + 1 >= _0x43a8d1[_0x29957f(153)] && (_0x40c4b7['found'] = ![]);
        }
        if (_0x40c4b7[_0x29957f(156)]) {
            _0x40c4b7['data'] = _0x43a8d1[_0x40c4b7[_0x29957f(157)]];
            const _0xd087f8 = {
                'new': _0x40c4b7[_0x29957f(158)][_0x29957f(159)],
                'old': _0x40c4b7[_0x29957f(158)]['uid']
            };
            _0x43a8d1[_0x29957f(160)](function _0x52af57(_0x5b3dfe) {
                const _0x39052d = _0x29957f;
                if (_0x5b3dfe['triggerAsyncId'] === _0xd087f8['old'])
                    _0x5b3dfe['triggerAsyncId'] = _0xd087f8[_0x39052d(161)];
            }), _0x43a8d1['splice'](_0x40c4b7[_0x29957f(157)], 1);
        }
    }
    return _0x43a8d1;
}
module[_0xf69fc7(162)] = function verifyGraph(_0x18a315, _0x5f0bd2) {
    const _0x4a8c04 = _0xf69fc7;
    pruneTickObjects(_0x18a315);
    const _0x165a7a = {}, _0x22e939 = {}, _0x5807bf = {}, _0x4293c7 = [], _0x402408 = pruneTickObjects(_0x18a315[_0x4a8c04(163)]);
    _0x402408[_0x4a8c04(160)](_0x42e8fa);
    function _0x42e8fa(_0x4e9eb5) {
        const _0x5b4080 = _0x4a8c04;
        if (!_0x5807bf[_0x4e9eb5[_0x5b4080(154)]])
            _0x5807bf[_0x4e9eb5[_0x5b4080(154)]] = 0;
        _0x5807bf[_0x4e9eb5[_0x5b4080(154)]]++;
        const _0xba416b = findInGraph(_0x5f0bd2, _0x4e9eb5[_0x5b4080(154)], _0x5807bf[_0x4e9eb5[_0x5b4080(154)]]);
        if (_0xba416b == null)
            return;
        _0x165a7a[_0xba416b['id']] = _0x4e9eb5['uid'], _0x22e939[_0x4e9eb5['uid']] = _0xba416b['id'];
        if (_0xba416b[_0x5b4080(159)] == null)
            return;
        const _0x30a92f = _0x165a7a[_0xba416b[_0x5b4080(159)]];
        if (_0x4e9eb5[_0x5b4080(159)] === _0x30a92f)
            return;
        _0x4293c7[_0x5b4080(164)]({
            'id': _0xba416b['id'],
            'expectedTid': _0xba416b[_0x5b4080(159)],
            'actualTid': _0x22e939[_0x4e9eb5[_0x5b4080(159)]]
        });
    }
    _0x4293c7['length'] && _0x4293c7[_0x4a8c04(160)](_0x4f81d4 => console['error']('\'' + _0x4f81d4['id'] + _0x4a8c04(165) + _0x4f81d4['expectedTid'] + _0x4a8c04(166) + (_0x4a8c04(167) + _0x4f81d4['actualTid'] + '\' instead.')));
    assert[_0x4a8c04(168)](_0x4293c7[_0x4a8c04(153)], 0);
    const _0x362631 = Object['create'](null);
    for (let _0x154b9c = 0; _0x154b9c < _0x5f0bd2[_0x4a8c04(153)]; _0x154b9c++) {
        if (_0x362631[_0x5f0bd2[_0x154b9c][_0x4a8c04(154)]] == null)
            _0x362631[_0x5f0bd2[_0x154b9c][_0x4a8c04(154)]] = 0;
        _0x362631[_0x5f0bd2[_0x154b9c][_0x4a8c04(154)]]++;
    }
    for (const _0x391b7b in _0x362631) {
        assert['ok'](_0x5807bf[_0x391b7b] >= _0x362631[_0x391b7b], _0x4a8c04(169) + _0x391b7b + _0x4a8c04(170) + _0x362631[_0x391b7b] + ' ' + ('found: ' + _0x5807bf[_0x391b7b]));
    }
};
function inspect(_0xdadb41, _0x236eb6) {
    const _0x35a744 = _0xf69fc7;
    console[_0x35a744(171)](util[_0x35a744(172)](_0xdadb41, ![], _0x236eb6 || 5, !![]));
}
module[_0xf69fc7(162)][_0xf69fc7(173)] = function printGraph(_0x5128ae) {
    const _0x3d011c = _0xf69fc7, _0x4960be = {}, _0x51b4d9 = {}, _0x124117 = pruneTickObjects(_0x5128ae[_0x3d011c(163)]), _0x38fc4b = [];
    _0x124117['forEach'](_0xbdb945);
    function _0xbdb945(_0x4b5e78) {
        const _0x4b15c1 = _0x3d011c, _0x2effeb = _0x4b5e78[_0x4b15c1(154)]['replace'](/WRAP/, '')[_0x4b15c1(174)]();
        if (!_0x4960be[_0x2effeb])
            _0x4960be[_0x2effeb] = 1;
        const _0x16b5f5 = _0x2effeb + ':' + _0x4960be[_0x2effeb]++;
        _0x51b4d9[_0x4b5e78[_0x4b15c1(175)]] = _0x16b5f5;
        const _0x216250 = _0x51b4d9[_0x4b5e78[_0x4b15c1(159)]] || null;
        _0x38fc4b['push']({
            'type': _0x4b5e78[_0x4b15c1(154)],
            'id': _0x16b5f5,
            'triggerAsyncId': _0x216250
        });
    }
    inspect(_0x38fc4b);
};