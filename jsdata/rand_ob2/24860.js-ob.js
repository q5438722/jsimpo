const _0x6b46 = [
    'init',
    'fromJson',
    'getItem',
    'reset',
    'worker',
    'worker.js',
    'call',
    'errs',
    'vals',
    'toJson',
    'terminate',
    'onmessage',
    'setItem',
    'postMessage',
    'calc',
    '767621qaKzcr',
    '1533440oyFGbp',
    '1GLxNLr',
    '163659JCTUQt',
    '1229947iwijGs',
    '23054iDpsEx',
    '26bhkxwy',
    '107kmQkup',
    '2693gnsKHm',
    '1494667ZOmTnG',
    '500lines',
    'controller',
    'Spreadsheet',
    'Rows',
    'push',
    'fromCodePoint',
    'codePointAt',
    'keydown',
    'querySelector',
    'focus',
    'sheet',
    '=A1+C1'
];
const _0x3645f8 = _0x3a9b;
function _0x3a9b(_0x1ea042, _0x164f55) {
    return _0x3a9b = function (_0x6b465c, _0x3a9bf3) {
        _0x6b465c = _0x6b465c - 0x125;
        let _0x5c4df6 = _0x6b46[_0x6b465c];
        return _0x5c4df6;
    }, _0x3a9b(_0x1ea042, _0x164f55);
}
(function (_0x400519, _0x15cb41) {
    const _0x50368b = _0x3a9b;
    while (!![]) {
        try {
            const _0x5c25bb = -parseInt(_0x50368b(0x125)) + parseInt(_0x50368b(0x126)) + parseInt(_0x50368b(0x127)) * parseInt(_0x50368b(0x128)) + -parseInt(_0x50368b(0x129)) + parseInt(_0x50368b(0x12a)) * -parseInt(_0x50368b(0x12b)) + -parseInt(_0x50368b(0x12c)) * -parseInt(_0x50368b(0x12d)) + parseInt(_0x50368b(0x12e));
            if (_0x5c25bb === _0x15cb41)
                break;
            else
                _0x400519['push'](_0x400519['shift']());
        } catch (_0x12acfc) {
            _0x400519['push'](_0x400519['shift']());
        }
    }
}(_0x6b46, 0xd7901), angular['module'](_0x3645f8(0x12f), [])[_0x3645f8(0x130)](_0x3645f8(0x131), function (_0x38e5f7, _0x5510c3) {
    const _0x55d664 = _0x3645f8;
    _0x38e5f7['Cols'] = [], _0x38e5f7[_0x55d664(0x132)] = [];
    for (col of _0x53e9a8('A', 'H')) {
        _0x38e5f7['Cols']['push'](col);
    }
    for (row of _0x53e9a8(0x1, 0x14)) {
        _0x38e5f7[_0x55d664(0x132)][_0x55d664(0x133)](row);
    }
    function* _0x53e9a8(_0x1948fb, _0x105f9c) {
        const _0x22b0fb = _0x55d664;
        while (_0x1948fb <= _0x105f9c) {
            yield _0x1948fb, _0x1948fb = isNaN(_0x1948fb) ? String[_0x22b0fb(0x134)](_0x1948fb[_0x22b0fb(0x135)]() + 0x1) : _0x1948fb + 0x1;
        }
    }
    _0x38e5f7[_0x55d664(0x136)] = ({which: _0x13edb9}, _0x2d6e44, _0x1e3bbf) => {
        switch (_0x13edb9) {
        case 0x26:
        case 0x28:
        case 0xd:
            _0x5510c3(() => {
                const _0x58a5ca = _0x3a9b, _0x38431b = _0x13edb9 === 0x26 ? -0x1 : +0x1, _0x28cd20 = document[_0x58a5ca(0x137)]('#' + _0x2d6e44 + (_0x1e3bbf + _0x38431b));
                _0x28cd20 && _0x28cd20[_0x58a5ca(0x138)]();
            });
        }
    }, _0x38e5f7['reset'] = () => {
        const _0x141233 = _0x55d664;
        _0x38e5f7[_0x141233(0x139)] = {
            'A1': 0x752,
            'B1': '+',
            'C1': 0x7fe,
            'D1': '⇒',
            'E1': _0x141233(0x13a)
        };
    }, (_0x38e5f7[_0x55d664(0x13b)] = () => {
        const _0xc1b0d6 = _0x55d664;
        _0x38e5f7[_0xc1b0d6(0x139)] = angular[_0xc1b0d6(0x13c)](localStorage[_0xc1b0d6(0x13d)]('')), !_0x38e5f7[_0xc1b0d6(0x139)] && _0x38e5f7[_0xc1b0d6(0x13e)](), _0x38e5f7[_0xc1b0d6(0x13f)] = new Worker(_0xc1b0d6(0x140));
    })[_0x55d664(0x141)](), [_0x38e5f7[_0x55d664(0x142)], _0x38e5f7[_0x55d664(0x143)]] = [
        {},
        {}
    ], _0x38e5f7['calc'] = () => {
        const _0x3b2376 = _0x55d664, _0x5a8f91 = angular[_0x3b2376(0x144)](_0x38e5f7[_0x3b2376(0x139)]), _0x2cf73e = _0x5510c3(() => {
                const _0x115cc4 = _0x3b2376;
                _0x38e5f7[_0x115cc4(0x13f)][_0x115cc4(0x145)](), _0x38e5f7[_0x115cc4(0x13b)](), _0x38e5f7['calc']();
            }, 0x63);
        _0x38e5f7['worker'][_0x3b2376(0x146)] = ({data: _0x4a3265}) => {
            const _0x35d962 = _0x3b2376;
            _0x5510c3['cancel'](_0x2cf73e), localStorage[_0x35d962(0x147)]('', _0x5a8f91), _0x5510c3(() => {
                const _0x329fa5 = _0x35d962;
                [_0x38e5f7[_0x329fa5(0x142)], _0x38e5f7['vals']] = _0x4a3265;
            });
        }, _0x38e5f7[_0x3b2376(0x13f)][_0x3b2376(0x148)](_0x38e5f7[_0x3b2376(0x139)]);
    }, _0x38e5f7[_0x55d664(0x13f)][_0x55d664(0x146)] = _0x38e5f7[_0x55d664(0x149)], _0x38e5f7[_0x55d664(0x13f)][_0x55d664(0x148)](null);
}));