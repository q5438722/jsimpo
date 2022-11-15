var moment = require(_0x43f2db(301)), base = moment('2013-05-25'), value = 2;
function createTest(_0x17cda1) {
    return {
        'fn': function () {
            var _0x4194d8 = _0x4052;
            base[_0x4194d8(302)](_0x17cda1, value);
        },
        'async': ![]
    };
}
var units = [
        'second',
        _0x43f2db(303),
        _0x43f2db(304),
        _0x43f2db(305),
        _0x43f2db(306),
        _0x43f2db(307),
        _0x43f2db(308),
        'month',
        _0x43f2db(309),
        _0x43f2db(310)
    ], tests = units['reduce'](function (_0x5d72c3, _0x16aba4) {
        var _0x520184 = _0x43f2db;
        return _0x5d72c3[_0x520184(311) + _0x16aba4] = createTest(_0x16aba4), _0x5d72c3;
    }, {});
module[_0x43f2db(312)] = {
    'name': 'set',
    'tests': tests
};