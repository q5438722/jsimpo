function _0x206f(_0x3eafdf, _0x4b3b00) {
    return _0x206f = function (_0x39ebf9, _0x3f6498) {
        _0x39ebf9 = _0x39ebf9 - (-1 * -7213 + -6537 + -421);
        var _0x3af3d1 = _0x50b1[_0x39ebf9];
        return _0x3af3d1;
    }, _0x206f(_0x3eafdf, _0x4b3b00);
}
var Vector4 = require(_0x2a470e(265)), GetLineToPolygon = require(_0x2a470e(266)), Line = require(_0x2a470e(267)), segment = new Line();
function CheckIntersects(_0x5f52cc, _0x3f70e2, _0x46e98f, _0x3bd079, _0x55eb11) {
    var _0xb0065d = _0x2a470e, _0x5e7747 = {
            'sFPyw': function (_0x2fc439, _0x2659fa) {
                return _0x2fc439 + _0x2659fa;
            },
            'qBqEf': function (_0xbe1759, _0x4fe06f, _0x49284d) {
                return _0xbe1759(_0x4fe06f, _0x49284d);
            }
        }, _0x266b5a = Math[_0xb0065d(268)](_0x5f52cc), _0x4213e4 = Math[_0xb0065d(269)](_0x5f52cc);
    segment[_0xb0065d(270)](_0x3f70e2, _0x46e98f, _0x3f70e2 + _0x266b5a, _0x5e7747['sFPyw'](_0x46e98f, _0x4213e4));
    var _0x2e26a1 = _0x5e7747[_0xb0065d(271)](GetLineToPolygon, segment, _0x3bd079);
    _0x2e26a1 && _0x55eb11[_0xb0065d(272)](new Vector4(_0x2e26a1['x'], _0x2e26a1['y'], _0x5f52cc, _0x2e26a1['w']));
}
function SortIntersects(_0x5ed356, _0x4a20ff) {
    var _0x4d9e10 = _0x2a470e, _0x1b6cd6 = {
            'qqpZp': function (_0x58f57d, _0x4b5186) {
                return _0x58f57d - _0x4b5186;
            }
        };
    return _0x1b6cd6[_0x4d9e10(273)](_0x5ed356['z'], _0x4a20ff['z']);
}
var GetRaysFromPointToPolygon = function (_0x64ad2c, _0x55f636, _0x1c96aa) {
    var _0x4aa23b = _0x2a470e, _0x32afd8 = {
            'rbQGb': function (_0x2871aa, _0x492366) {
                return _0x2871aa < _0x492366;
            },
            'RrOXC': function (_0x2b8686, _0x337820) {
                return _0x2b8686 - _0x337820;
            },
            'HWjir': function (_0x3d66ea, _0x59bedf) {
                return _0x3d66ea === _0x59bedf;
            },
            'eXcsq': function (_0x41db70, _0x49eebd, _0xa3280, _0x2926ff, _0x4f811b, _0x369258) {
                return _0x41db70(_0x49eebd, _0xa3280, _0x2926ff, _0x4f811b, _0x369258);
            },
            'dZRIa': function (_0x395bdb, _0x99c546) {
                return _0x395bdb - _0x99c546;
            }
        }, _0x2a1ced = '4|0|1|2|3'[_0x4aa23b(274)]('|'), _0x16cc94 = 7922 + 9220 + -6 * 2857;
    while (!![]) {
        switch (_0x2a1ced[_0x16cc94++]) {
        case '0':
            var _0xb144dd = [];
            continue;
        case '1':
            var _0x19ba5a = [];
            continue;
        case '2':
            for (var _0x23efa8 = 18 * -353 + 1 * -7151 + 13505; _0x32afd8[_0x4aa23b(275)](_0x23efa8, _0x1c96aa['length']); _0x23efa8++) {
                var _0x207555 = _0x1c96aa[_0x23efa8][_0x4aa23b(276)];
                for (var _0x1e6670 = 9399 + -911 + -8488; _0x32afd8['rbQGb'](_0x1e6670, _0x207555['length']); _0x1e6670++) {
                    var _0x2eb929 = Math['atan2'](_0x32afd8[_0x4aa23b(277)](_0x207555[_0x1e6670]['y'], _0x55f636), _0x207555[_0x1e6670]['x'] - _0x64ad2c);
                    _0x32afd8['HWjir'](_0x19ba5a[_0x4aa23b(278)](_0x2eb929), -(-4785 + -1159 + 5945)) && (_0x32afd8[_0x4aa23b(279)](CheckIntersects, _0x2eb929, _0x64ad2c, _0x55f636, _0x1c96aa, _0xb144dd), _0x32afd8[_0x4aa23b(279)](CheckIntersects, _0x32afd8['dZRIa'](_0x2eb929, -1 * -7121 + 8013 * 1 + 1 * -15134 + 0.00001), _0x64ad2c, _0x55f636, _0x1c96aa, _0xb144dd), CheckIntersects(_0x2eb929 + (222 * 18 + -2478 + -1518 + 0.00001), _0x64ad2c, _0x55f636, _0x1c96aa, _0xb144dd), _0x19ba5a[_0x4aa23b(272)](_0x2eb929));
                }
            }
            continue;
        case '3':
            return _0xb144dd['sort'](SortIntersects);
        case '4':
            !Array[_0x4aa23b(280)](_0x1c96aa) && (_0x1c96aa = [_0x1c96aa]);
            continue;
        }
        break;
    }
};
module[_0x2a470e(281)] = GetRaysFromPointToPolygon;