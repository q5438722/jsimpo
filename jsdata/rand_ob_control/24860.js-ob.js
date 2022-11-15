angular['module']('500lines', [])['controller']('Spreadsheet', function (_0x1a58c9, _0x53b346) {
    const _0x493a81 = {
        'eQKYV': function (_0xa34e9b, _0x322a93) {
            return _0xa34e9b <= _0x322a93;
        },
        'OCvff': function (_0x58cf79, _0x18a255) {
            return _0x58cf79(_0x18a255);
        },
        'AgvxJ': function (_0x53388e, _0x3f476a) {
            return _0x53388e + _0x3f476a;
        },
        'omOdW': function (_0x1f4fbe, _0x2b9c67) {
            return _0x1f4fbe === _0x2b9c67;
        },
        'NfrhR': function (_0x1eee1f, _0x1a404b) {
            return _0x1eee1f(_0x1a404b);
        },
        'cunVU': '=A1+C1',
        'ogtGj': 'worker.js',
        'euYPk': function (_0xf1cf92, _0x567886, _0x514c0d) {
            return _0xf1cf92(_0x567886, _0x514c0d);
        }
    };
    _0x1a58c9['Cols'] = [], _0x1a58c9['Rows'] = [];
    for (col of _0x493a81['euYPk'](_0x3cfe5c, 'A', 'H')) {
        _0x1a58c9['Cols']['push'](col);
    }
    for (row of _0x493a81['euYPk'](_0x3cfe5c, 0x1, 0x14)) {
        _0x1a58c9['Rows']['push'](row);
    }
    function* _0x3cfe5c(_0x5e10f4, _0x3d4283) {
        while (_0x493a81['eQKYV'](_0x5e10f4, _0x3d4283)) {
            yield _0x5e10f4, _0x5e10f4 = _0x493a81['OCvff'](isNaN, _0x5e10f4) ? String['fromCodePoint'](_0x493a81['AgvxJ'](_0x5e10f4['codePointAt'](), 0x1)) : _0x493a81['AgvxJ'](_0x5e10f4, 0x1);
        }
    }
    _0x1a58c9['keydown'] = ({which: _0x124f6b}, _0x153775, _0x1d066c) => {
        switch (_0x124f6b) {
        case 0x26:
        case 0x28:
        case 0xd:
            _0x493a81['NfrhR'](_0x53b346, () => {
                const _0x145f70 = _0x493a81['omOdW'](_0x124f6b, 0x26) ? -0x1 : +0x1, _0x26ed9a = document['querySelector']('#' + _0x153775 + _0x493a81['AgvxJ'](_0x1d066c, _0x145f70));
                _0x26ed9a && _0x26ed9a['focus']();
            });
        }
    }, _0x1a58c9['reset'] = () => {
        _0x1a58c9['sheet'] = {
            'A1': 0x752,
            'B1': '+',
            'C1': 0x7fe,
            'D1': '⇒',
            'E1': _0x493a81['cunVU']
        };
    }, (_0x1a58c9['init'] = () => {
        _0x1a58c9['sheet'] = angular['fromJson'](localStorage['getItem']('')), !_0x1a58c9['sheet'] && _0x1a58c9['reset'](), _0x1a58c9['worker'] = new Worker(_0x493a81['ogtGj']);
    })['call'](), [_0x1a58c9['errs'], _0x1a58c9['vals']] = [
        {},
        {}
    ], _0x1a58c9['calc'] = () => {
        const _0x341a4f = {
                'xPZDc': function (_0xa6c988, _0x48b076) {
                    return _0x493a81['NfrhR'](_0xa6c988, _0x48b076);
                }
            }, _0xb2a249 = angular['toJson'](_0x1a58c9['sheet']), _0x5c6507 = _0x493a81['euYPk'](_0x53b346, () => {
                _0x1a58c9['worker']['terminate'](), _0x1a58c9['init'](), _0x1a58c9['calc']();
            }, 0x63);
        _0x1a58c9['worker']['onmessage'] = ({data: _0x2ed825}) => {
            _0x53b346['cancel'](_0x5c6507), localStorage['setItem']('', _0xb2a249), _0x341a4f['xPZDc'](_0x53b346, () => {
                [_0x1a58c9['errs'], _0x1a58c9['vals']] = _0x2ed825;
            });
        }, _0x1a58c9['worker']['postMessage'](_0x1a58c9['sheet']);
    }, _0x1a58c9['worker']['onmessage'] = _0x1a58c9['calc'], _0x1a58c9['worker']['postMessage'](null);
});
