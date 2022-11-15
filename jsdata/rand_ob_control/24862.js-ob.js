angular['module']('500lines', [])['controller']('Spreadsheet', function (_0x1f08f3, _0x369bf6) {
    var _0x4d17b3 = {
        'KtjOY': function (_0x43e7c0, _0x559faf) {
            return _0x43e7c0 <= _0x559faf;
        },
        'VTIJI': function (_0x50049c, _0x179142) {
            return _0x50049c(_0x179142);
        },
        'qJIbk': function (_0x59bf97, _0x1ee6fe) {
            return _0x59bf97 + _0x1ee6fe;
        },
        'yDmig': function (_0x2cbca0, _0x46a373) {
            return _0x2cbca0 === _0x46a373;
        },
        'NirYL': function (_0x4159d8, _0x3e886e) {
            return _0x4159d8 + _0x3e886e;
        },
        'vwLsF': function (_0x17bbcc, _0x559172) {
            return _0x17bbcc(_0x559172);
        },
        'LeaZC': '=A1+C1',
        'zQwHp': 'worker.js',
        'siofU': function (_0x5118c, _0xf9e6a4, _0x1a8a64) {
            return _0x5118c(_0xf9e6a4, _0x1a8a64);
        },
        'krplR': function (_0x2ec4d4, _0x4052c6, _0x40b3bf, _0x33b43) {
            return _0x2ec4d4(_0x4052c6, _0x40b3bf, _0x33b43);
        },
        'BDQcH': function (_0x1fd055, _0x21e9ea, _0x2d48e6, _0x4b9916) {
            return _0x1fd055(_0x21e9ea, _0x2d48e6, _0x4b9916);
        }
    };
    _0x1f08f3['Cols'] = [], _0x1f08f3['Rows'] = [], _0x4d17b3['krplR'](_0x1611a8, _0x1f08f3['Cols'], 'A', 'H'), _0x4d17b3['BDQcH'](_0x1611a8, _0x1f08f3['Rows'], 0x1, 0x14);
    function _0x1611a8(_0x31bc2a, _0x37a987, _0x17077e) {
        while (_0x4d17b3['KtjOY'](_0x37a987, _0x17077e)) {
            _0x31bc2a['push'](_0x37a987), _0x37a987 = _0x4d17b3['VTIJI'](isNaN, _0x37a987) ? String['fromCharCode'](_0x4d17b3['qJIbk'](_0x37a987['charCodeAt'](), 0x1)) : _0x4d17b3['qJIbk'](_0x37a987, 0x1);
        }
    }
    _0x1f08f3['keydown'] = function (_0x644df5, _0x4a5450, _0xe5c287) {
        switch (_0x644df5['which']) {
        case 0x26:
        case 0x28:
        case 0xd:
            _0x4d17b3['vwLsF'](_0x369bf6, function () {
                var _0x267d48 = _0x4d17b3['yDmig'](_0x644df5['which'], 0x26) ? -0x1 : +0x1, _0x877cbe = document['querySelector'](_0x4d17b3['qJIbk'](_0x4d17b3['qJIbk']('#', _0x4a5450), _0x4d17b3['NirYL'](_0xe5c287, _0x267d48)));
                _0x877cbe && _0x877cbe['focus']();
            });
        }
    }, _0x1f08f3['reset'] = function () {
        _0x1f08f3['sheet'] = {
            'A1': 0x752,
            'B1': '+',
            'C1': 0x7fe,
            'D1': '⇒',
            'E1': _0x4d17b3['LeaZC']
        };
    }, (_0x1f08f3['init'] = function () {
        _0x1f08f3['sheet'] = angular['fromJson'](localStorage['getItem']('')), !_0x1f08f3['sheet'] && _0x1f08f3['reset'](), _0x1f08f3['worker'] = new Worker(_0x4d17b3['zQwHp']);
    })['call'](), (_0x1f08f3['errs'] = {}, _0x1f08f3['vals'] = {}), _0x1f08f3['calc'] = function () {
        var _0x1084b3 = angular['toJson'](_0x1f08f3['sheet']), _0xd71881 = _0x4d17b3['siofU'](_0x369bf6, function () {
                _0x1f08f3['worker']['terminate'](), _0x1f08f3['init'](), _0x1f08f3['calc']();
            }, 0x63);
        _0x1f08f3['worker']['onmessage'] = function (_0x2941e9) {
            _0x369bf6['cancel'](_0xd71881), localStorage['setItem']('', _0x1084b3), _0x4d17b3['vwLsF'](_0x369bf6, function () {
                _0x1f08f3['errs'] = _0x2941e9['data'][0x0], _0x1f08f3['vals'] = _0x2941e9['data'][0x1];
            });
        }, _0x1f08f3['worker']['postMessage'](_0x1f08f3['sheet']);
    }, _0x1f08f3['worker']['onmessage'] = _0x1f08f3['calc'], _0x1f08f3['worker']['postMessage'](null);
});
