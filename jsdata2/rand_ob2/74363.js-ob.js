var _0xf816 = [
    '120580GzSgUl',
    '8gRdPrd',
    '3007PaNnde',
    '888nAOBfA',
    '108759DBHjkK',
    './../moment.js',
    'set',
    'minute',
    'hour',
    'date',
    'day',
    'isoWeek',
    'week',
    'quarter',
    'year',
    'set\x20',
    'exports',
    '9138WhKnEE',
    '65815ZuvSfi',
    '15584WZedBK',
    '9OTJVJc'
];
var _0x43f2db = _0x4052;
function _0x4052(_0xc419aa, _0x373289) {
    return _0x4052 = function (_0xf8168f, _0x4052c6) {
        _0xf8168f = _0xf8168f - 0x124;
        var _0x2a7404 = _0xf816[_0xf8168f];
        return _0x2a7404;
    }, _0x4052(_0xc419aa, _0x373289);
}
(function (_0x1a329d, _0x208031) {
    var _0x56a991 = _0x4052;
    while (!![]) {
        try {
            var _0x30c58f = -parseInt(_0x56a991(0x124)) + parseInt(_0x56a991(0x125)) + -parseInt(_0x56a991(0x126)) * parseInt(_0x56a991(0x127)) + parseInt(_0x56a991(0x128)) + -parseInt(_0x56a991(0x129)) * parseInt(_0x56a991(0x12a)) + parseInt(_0x56a991(0x12b)) + parseInt(_0x56a991(0x12c));
            if (_0x30c58f === _0x208031)
                break;
            else
                _0x1a329d['push'](_0x1a329d['shift']());
        } catch (_0x437231) {
            _0x1a329d['push'](_0x1a329d['shift']());
        }
    }
}(_0xf816, 0x1dee0));
var moment = require(_0x43f2db(0x12d)), base = moment('2013-05-25'), value = 0x2;
function createTest(_0x17cda1) {
    return {
        'fn': function () {
            var _0x4194d8 = _0x4052;
            base[_0x4194d8(0x12e)](_0x17cda1, value);
        },
        'async': ![]
    };
}
var units = [
        'second',
        _0x43f2db(0x12f),
        _0x43f2db(0x130),
        _0x43f2db(0x131),
        _0x43f2db(0x132),
        _0x43f2db(0x133),
        _0x43f2db(0x134),
        'month',
        _0x43f2db(0x135),
        _0x43f2db(0x136)
    ], tests = units['reduce'](function (_0x5d72c3, _0x16aba4) {
        var _0x520184 = _0x43f2db;
        return _0x5d72c3[_0x520184(0x137) + _0x16aba4] = createTest(_0x16aba4), _0x5d72c3;
    }, {});
module[_0x43f2db(0x138)] = {
    'name': 'set',
    'tests': tests
};
