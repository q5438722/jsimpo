angular['module']('500lines', [])['controller']('Spreadsheet', function (_0x40c0b8, _0x474529) {
    _0x40c0b8['Cols'] = [], _0x40c0b8['Rows'] = [], _0x23c251(_0x40c0b8['Cols'], 'A', 'H'), _0x23c251(_0x40c0b8['Rows'], 0x18a0 + 0x385 * -0x1 + -0x4a * 0x49, 0xb * 0x8b + 0x1b3d * -0x1 + -0x2 * -0xaac);
    function _0x23c251(_0x6540e5, _0x3789d6, _0x5400c2) {
        while (_0x3789d6 <= _0x5400c2) {
            _0x6540e5['push'](_0x3789d6), _0x3789d6 = isNaN(_0x3789d6) ? String['fromCharCode'](_0x3789d6['charCodeAt']() + (0x353 * -0x3 + 0x22ea + -0x18f0)) : _0x3789d6 + (-0x173e + 0x21ac + -0xa6d);
        }
    }
    _0x40c0b8['keydown'] = function (_0x1d717c, _0x36a0fd, _0x3a7b97) {
        switch (_0x1d717c['which']) {
        case 0x213c + 0x52 * 0x58 + -0x3d46:
        case -0x1755 * -0x1 + -0x13a4 + -0x389:
        case 0x1b4 * 0x5 + -0x8e9 + 0x26 * 0x3:
            _0x474529(function () {
                var _0x2d2c3a = _0x1d717c['which'] === -0x1e7f + 0xfc2 + 0x67 * 0x25 ? -(0x3e3 * 0x7 + 0xb * -0x2b2 + 0x272) : +(-0x76 * -0x3d + -0x1e17 + 0x2 * 0xfd), _0x155d8b = document['querySelector']('#' + _0x36a0fd + (_0x3a7b97 + _0x2d2c3a));
                _0x155d8b && _0x155d8b['focus']();
            });
        }
    }, _0x40c0b8['reset'] = function () {
        _0x40c0b8['sheet'] = {
            'A1': 0x752,
            'B1': '+',
            'C1': 0x7fe,
            'D1': '⇒',
            'E1': '=A1+C1'
        };
    }, (_0x40c0b8['init'] = function () {
        _0x40c0b8['sheet'] = angular['fromJson'](localStorage['getItem']('')), !_0x40c0b8['sheet'] && _0x40c0b8['reset'](), _0x40c0b8['worker'] = new Worker('worker.js');
    })['call'](), (_0x40c0b8['errs'] = {}, _0x40c0b8['vals'] = {}), _0x40c0b8['calc'] = function () {
        var _0x284d9a = angular['toJson'](_0x40c0b8['sheet']), _0x433948 = _0x474529(function () {
                _0x40c0b8['worker']['terminate'](), _0x40c0b8['init'](), _0x40c0b8['calc']();
            }, 0xf5b + 0x7df + -0x16d7);
        _0x40c0b8['worker']['onmessage'] = function (_0x4f85d0) {
            _0x474529['cancel'](_0x433948), localStorage['setItem']('', _0x284d9a), _0x474529(function () {
                _0x40c0b8['errs'] = _0x4f85d0['data'][0x17b8 + 0x1 * 0x130d + -0x2ac5], _0x40c0b8['vals'] = _0x4f85d0['data'][0xbd * 0x33 + -0xc46 + 0x20 * -0xcb];
            });
        }, _0x40c0b8['worker']['postMessage'](_0x40c0b8['sheet']);
    }, _0x40c0b8['worker']['onmessage'] = _0x40c0b8['calc'], _0x40c0b8['worker']['postMessage'](null);
});
