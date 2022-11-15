var _0x1ea8 = [
    '53082uIAoTL',
    '528371ieLDME',
    '1wveqtu',
    '1NbxFBv',
    '371414gHpacH',
    'tape',
    'close',
    'write',
    'notOk',
    '1kzKBTp',
    '296358XVIoUU',
    '312787cnbPUN',
    '28mKsyhv',
    '15391lndgYo',
    '201329sseyRP'
];
var _0xb46f6b = _0x3384;
(function (_0x541fdf, _0x35febc) {
    var _0x88378f = _0x3384;
    while (!![]) {
        try {
            var _0x1a0aa9 = parseInt(_0x88378f(0x199)) * parseInt(_0x88378f(0x19a)) + parseInt(_0x88378f(0x19b)) + parseInt(_0x88378f(0x19c)) * parseInt(_0x88378f(0x19d)) + parseInt(_0x88378f(0x19e)) + parseInt(_0x88378f(0x19f)) + parseInt(_0x88378f(0x1a0)) * -parseInt(_0x88378f(0x1a1)) + -parseInt(_0x88378f(0x1a2)) * parseInt(_0x88378f(0x1a3));
            if (_0x1a0aa9 === _0x35febc)
                break;
            else
                _0x541fdf['push'](_0x541fdf['shift']());
        } catch (_0x3f2473) {
            _0x541fdf['push'](_0x541fdf['shift']());
        }
    }
}(_0x1ea8, 0x605df));
var test = require(_0xb46f6b(0x1a4)), through = require('../');
function _0x3384(_0x3822a7, _0x25e780) {
    return _0x3384 = function (_0x1ea840, _0x338429) {
        _0x1ea840 = _0x1ea840 - 0x199;
        var _0x1b0c14 = _0x1ea8[_0x1ea840];
        return _0x1b0c14;
    }, _0x3384(_0x3822a7, _0x25e780);
}
test('end\x20before\x20close', function (_0x3f1bea) {
    var _0x46144a = _0xb46f6b, _0x18b35a = through();
    _0x18b35a['autoDestroy'] = ![];
    var _0x564b72 = ![], _0xe0f080 = ![];
    _0x18b35a['on']('end', function () {
        _0x3f1bea['ok'](!_0xe0f080), _0x564b72 = !![];
    }), _0x18b35a['on'](_0x46144a(0x1a5), function () {
        _0x3f1bea['ok'](_0x564b72), _0xe0f080 = !![];
    }), _0x18b35a[_0x46144a(0x1a6)](0x1), _0x18b35a[_0x46144a(0x1a6)](0x2), _0x18b35a[_0x46144a(0x1a6)](0x3), _0x18b35a['end'](), _0x3f1bea['ok'](_0x564b72), _0x3f1bea[_0x46144a(0x1a7)](_0xe0f080), _0x18b35a['destroy'](), _0x3f1bea['ok'](_0xe0f080), _0x3f1bea['end']();
});
