const _0x393f = [
    'vnxTC',
    'src',
    'vYYhh',
    'type',
    '647151MoHHAc',
    '279848DFvsDS',
    '3TeOnoT',
    '1752819dfiJOf',
    '1408792JnePtz',
    '32OeKpzZ',
    '60349NLTOsJ',
    '1271dtBjLV',
    '1345eoZVag',
    '8169xroLLH',
    '551iqNNud',
    'string',
    'isArray',
    'concat',
    'cJrFV',
    'trim'
];
(function (_0x399f95, _0x358c7b) {
    const _0x476d82 = _0x155b;
    while (!![]) {
        try {
            const _0xdd4371 = parseInt(_0x476d82(0x1af)) + parseInt(_0x476d82(0x1b0)) * parseInt(_0x476d82(0x1b1)) + parseInt(_0x476d82(0x1b2)) + -parseInt(_0x476d82(0x1b3)) + -parseInt(_0x476d82(0x1b4)) * -parseInt(_0x476d82(0x1b5)) + parseInt(_0x476d82(0x1b6)) * parseInt(_0x476d82(0x1b7)) + parseInt(_0x476d82(0x1b8)) * -parseInt(_0x476d82(0x1b9));
            if (_0xdd4371 === _0x358c7b)
                break;
            else
                _0x399f95['push'](_0x399f95['shift']());
        } catch (_0x15072f) {
            _0x399f95['push'](_0x399f95['shift']());
        }
    }
}(_0x393f, -0x4f0fb * -0x3 + -0xe3857 + 0x2c0 * 0x52a));
import { isObject } from './obj';
import { getMimetype } from './mimetypes';
function _0x155b(_0x1622f5, _0x4b0bf3) {
    return _0x155b = function (_0x3cff01, _0x5a1085) {
        _0x3cff01 = _0x3cff01 - (-0x649 * -0x1 + 0x1 * -0x288 + -0x6a * 0x5);
        let _0x219e0d = _0x393f[_0x3cff01];
        return _0x219e0d;
    }, _0x155b(_0x1622f5, _0x4b0bf3);
}
const filterSource = function (_0x381bad) {
    const _0x4a7971 = _0x155b, _0x559881 = {
            'cJrFV': function (_0x52b77f, _0x4b13a9) {
                return _0x52b77f(_0x4b13a9);
            },
            'vYYhh': _0x4a7971(0x1ba),
            'vnxTC': function (_0x2fb77a, _0x532d09) {
                return _0x2fb77a(_0x532d09);
            },
            'LuTaJ': function (_0x348cd4, _0x2cf88a) {
                return _0x348cd4 === _0x2cf88a;
            }
        };
    if (Array[_0x4a7971(0x1bb)](_0x381bad)) {
        let _0x4d0f0c = [];
        _0x381bad['forEach'](function (_0x218f09) {
            const _0x429262 = _0x4a7971;
            _0x218f09 = filterSource(_0x218f09);
            if (Array['isArray'](_0x218f09))
                _0x4d0f0c = _0x4d0f0c[_0x429262(0x1bc)](_0x218f09);
            else
                _0x559881[_0x429262(0x1bd)](isObject, _0x218f09) && _0x4d0f0c['push'](_0x218f09);
        }), _0x381bad = _0x4d0f0c;
    } else {
        if (typeof _0x381bad === _0x559881['vYYhh'] && _0x381bad[_0x4a7971(0x1be)]())
            _0x381bad = [fixSource({ 'src': _0x381bad })];
        else
            _0x559881[_0x4a7971(0x1bf)](isObject, _0x381bad) && _0x559881['LuTaJ'](typeof _0x381bad[_0x4a7971(0x1c0)], _0x559881[_0x4a7971(0x1c1)]) && _0x381bad[_0x4a7971(0x1c0)] && _0x381bad['src'][_0x4a7971(0x1be)]() ? _0x381bad = [_0x559881[_0x4a7971(0x1bf)](fixSource, _0x381bad)] : _0x381bad = [];
    }
    return _0x381bad;
};
function fixSource(_0x1ac957) {
    const _0x531f66 = _0x155b;
    if (!_0x1ac957['type']) {
        const _0x4847d7 = getMimetype(_0x1ac957[_0x531f66(0x1c0)]);
        _0x4847d7 && (_0x1ac957[_0x531f66(0x1c2)] = _0x4847d7);
    }
    return _0x1ac957;
}
export default filterSource;
