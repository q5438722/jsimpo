/**
 * @author       Richard Davey
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
const _0x50b1 = ['../../math/Vector4', './GetLineToPolygon', '../line/Line', 'cos', 'sin', 'setTo', 'qBqEf', 'push', 'qqpZp', 'split', 'rbQGb', 'points', 'RrOXC', 'indexOf', 'eXcsq', 'isArray', 'exports', '251914llGaDS', '2PWTSNb', '93067lZWGyM', '92796HLnsmE', '37BOnDAC', '3187ZhaWoQ', '174852JZKtNw', '292455UsYZOe', '11DzFhWg', '17105IwXrml'];
const _0x2a470e = _0x206f;

(function (_0x41f03f, _0x3f73da) {
    const _0x4cbf42 = _0x206f;

    while (true) {
        try {
            const _0x218e59 = -parseInt(_0x4cbf42(0xff)) + parseInt(_0x4cbf42(0x100)) * -parseInt(_0x4cbf42(0x101)) + parseInt(_0x4cbf42(0x102)) + parseInt(_0x4cbf42(0x103)) * -parseInt(_0x4cbf42(0x104)) + parseInt(_0x4cbf42(0x105)) + parseInt(_0x4cbf42(0x106)) + parseInt(_0x4cbf42(0x107)) * parseInt(_0x4cbf42(0x108));

            if (_0x218e59 === _0x3f73da) break;else _0x41f03f.push(_0x41f03f.shift());
        } catch (_0x15a5ed) {
            _0x41f03f.push(_0x41f03f.shift());
        }
    }
})(_0x50b1, 192291);
function _0x206f(_0x3eafdf, _0x4b3b00) {
    return _0x206f = function (_0x39ebf9, _0x3f6498) {
        _0x39ebf9 = _0x39ebf9 - 255;
        const _0x3af3d1 = _0x50b1[_0x39ebf9];

        return _0x3af3d1;
    }, _0x206f(_0x3eafdf, _0x4b3b00);
}

const Vector4 = require(_0x2a470e(0x109));

const GetLineToPolygon = require(_0x2a470e(0x10a));

const Line = require(_0x2a470e(0x10b));

const segment = new Line();

function CheckIntersects(_0x5f52cc, _0x3f70e2, _0x46e98f, _0x3bd079, _0x55eb11) {
    const _0xb0065d = _0x2a470e;
    const _0x5e7747 = {
        'sFPyw': function (_0x2fc439, _0x2659fa) {
            return _0x2fc439 + _0x2659fa;
        },
        'qBqEf': function (_0xbe1759, _0x4fe06f, _0x49284d) {
            return _0xbe1759(_0x4fe06f, _0x49284d);
        }
    };

    const _0x266b5a = Math[_0xb0065d(0x10c)](_0x5f52cc);

    const _0x4213e4 = Math[_0xb0065d(0x10d)](_0x5f52cc);

    segment[_0xb0065d(0x10e)](_0x3f70e2, _0x46e98f, _0x3f70e2 + _0x266b5a, _0x5e7747.sFPyw(_0x46e98f, _0x4213e4));

    const _0x2e26a1 = _0x5e7747[_0xb0065d(0x10f)](GetLineToPolygon, segment, _0x3bd079);

    _0x2e26a1 && _0x55eb11[_0xb0065d(0x110)](new Vector4(_0x2e26a1.x, _0x2e26a1.y, _0x5f52cc, _0x2e26a1.w));
}
function SortIntersects(_0x5ed356, _0x4a20ff) {
    const _0x4d9e10 = _0x2a470e;
    const _0x1b6cd6 = {
        'qqpZp': function (_0x58f57d, _0x4b5186) {
            return _0x58f57d - _0x4b5186;
        }
    };

    return _0x1b6cd6[_0x4d9e10(0x111)](_0x5ed356.z, _0x4a20ff.z);
}

const GetRaysFromPointToPolygon = function (_0x64ad2c, _0x55f636, _0x1c96aa) {
    const _0x4aa23b = _0x2a470e;
    const _0x32afd8 = {
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
    };

    const _0x2a1ced = '4|0|1|2|3'[_0x4aa23b(0x112)]('|');

    var _0x16cc94 = 0;

    while (true) {
        switch (_0x2a1ced[_0x16cc94++]) {
            case '0':
                const _0xb144dd = [];

                continue;
            case '1':
                const _0x19ba5a = [];

                continue;
            case '2':
                for (var _0x23efa8 = 0; _0x32afd8[_0x4aa23b(0x113)](_0x23efa8, _0x1c96aa.length); _0x23efa8++) {
                    const _0x207555 = _0x1c96aa[_0x23efa8][_0x4aa23b(0x114)];

                    for (var _0x1e6670 = 0; _0x32afd8.rbQGb(_0x1e6670, _0x207555.length); _0x1e6670++) {
                        const _0x2eb929 = Math.atan2(_0x32afd8[_0x4aa23b(0x115)](_0x207555[_0x1e6670].y, _0x55f636), _0x207555[_0x1e6670].x - _0x64ad2c);

                        _0x32afd8.HWjir(_0x19ba5a[_0x4aa23b(0x116)](_0x2eb929), -1) && (_0x32afd8[_0x4aa23b(0x117)](CheckIntersects, _0x2eb929, _0x64ad2c, _0x55f636, _0x1c96aa, _0xb144dd), _0x32afd8[_0x4aa23b(0x117)](CheckIntersects, _0x32afd8.dZRIa(_0x2eb929, 0.00001), _0x64ad2c, _0x55f636, _0x1c96aa, _0xb144dd), CheckIntersects(_0x2eb929 + 0.00001, _0x64ad2c, _0x55f636, _0x1c96aa, _0xb144dd), _0x19ba5a[_0x4aa23b(0x110)](_0x2eb929));
                    }
                }
                continue;
            case '3':
                return _0xb144dd.sort(SortIntersects);
            case '4':
                !Array[_0x4aa23b(0x118)](_0x1c96aa) && (_0x1c96aa = [_0x1c96aa]);
                continue;
        }
        break;
    }
};

module[_0x2a470e(0x119)] = GetRaysFromPointToPolygon;
