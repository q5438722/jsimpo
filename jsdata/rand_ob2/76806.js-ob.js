var _0x2f39 = [
    '69503GjYDHG',
    '464NacyfO',
    '1HMUiLs',
    '123135wntLpR',
    'add',
    'update',
    'Push_gateway',
    'https://rocket.chat',
    'https://gateway.rocket.chat',
    '6FOjetN',
    '32789fkVsaF',
    '95VPQqtD',
    '29kxcLhm',
    '303591lhosex',
    '1vETicm',
    '23891kzElzZ'
];
var _0x42e395 = _0x4e93;
(function (_0x274ad8, _0x2c6cbf) {
    var _0x1f80f5 = _0x4e93;
    while (!![]) {
        try {
            var _0x771dc4 = parseInt(_0x1f80f5(0x1ab)) * -parseInt(_0x1f80f5(0x1ac)) + parseInt(_0x1f80f5(0x1ad)) * parseInt(_0x1f80f5(0x1ae)) + parseInt(_0x1f80f5(0x1af)) * parseInt(_0x1f80f5(0x1b0)) + parseInt(_0x1f80f5(0x1b1)) + -parseInt(_0x1f80f5(0x1b2)) + parseInt(_0x1f80f5(0x1b3)) + -parseInt(_0x1f80f5(0x1b4)) * -parseInt(_0x1f80f5(0x1b5));
            if (_0x771dc4 === _0x2c6cbf)
                break;
            else
                _0x274ad8['push'](_0x274ad8['shift']());
        } catch (_0x3ce6c7) {
            _0x274ad8['push'](_0x274ad8['shift']());
        }
    }
}(_0x2f39, 0x2dccf));
function _0x4e93(_0x1c4cd6, _0x407a06) {
    return _0x4e93 = function (_0x2f391c, _0x4e9377) {
        _0x2f391c = _0x2f391c - 0x1ab;
        var _0x267e8f = _0x2f39[_0x2f391c];
        return _0x267e8f;
    }, _0x4e93(_0x1c4cd6, _0x407a06);
}
import { Migrations } from '../../../app/migrations';
import { Settings } from '../../../app/models';
Migrations[_0x42e395(0x1b6)]({
    'version': 0x3a,
    'up'() {
        var _0x30422a = _0x42e395;
        Settings[_0x30422a(0x1b7)]({
            '_id': _0x30422a(0x1b8),
            'value': _0x30422a(0x1b9)
        }, {
            '$set': {
                'value': _0x30422a(0x1ba),
                'packageValue': _0x30422a(0x1ba)
            }
        });
    }
});
