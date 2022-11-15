const _0x46b7 = [
    'forEach',
    '164898plyEtq',
    '1260782Idjfum',
    '1584452onvfJX',
    '1569690uTuRod',
    '1031133FUDdzJ',
    '79yHPfWg',
    '2308zWIZAw',
    '4487MiGWgE',
    '311giPfnM',
    'indexOf',
    'push',
    'map',
    'keys',
    'length'
];
(function (_0x731fab, _0x281945) {
    const _0x27b364 = _0x47bf;
    while (!![]) {
        try {
            const _0x48c8fd = -parseInt(_0x27b364(0x1d8)) + -parseInt(_0x27b364(0x1d9)) + parseInt(_0x27b364(0x1da)) + -parseInt(_0x27b364(0x1db)) + parseInt(_0x27b364(0x1dc)) + -parseInt(_0x27b364(0x1dd)) * parseInt(_0x27b364(0x1de)) + -parseInt(_0x27b364(0x1df)) * -parseInt(_0x27b364(0x1e0));
            if (_0x48c8fd === _0x281945)
                break;
            else
                _0x731fab['push'](_0x731fab['shift']());
        } catch (_0x41eecb) {
            _0x731fab['push'](_0x731fab['shift']());
        }
    }
}(_0x46b7, 0xcb73c));
import { isObject } from './utils.js';
import { paramsList } from './params-list.js';
function _0x47bf(_0x28637e, _0x284b05) {
    return _0x47bf = function (_0x46b757, _0x47bfde) {
        _0x46b757 = _0x46b757 - 0x1d8;
        let _0x5382ee = _0x46b7[_0x46b757];
        return _0x5382ee;
    }, _0x47bf(_0x28637e, _0x284b05);
}
function getChangedParams(_0x33566f, _0x457fb6) {
    const _0x4fe619 = _0x47bf, _0xb439e2 = [];
    if (!_0x457fb6)
        return _0xb439e2;
    const _0x5d7554 = _0x4327de => {
            const _0xcb319c = _0x47bf;
            if (_0xb439e2[_0xcb319c(0x1e1)](_0x4327de) < 0x0)
                _0xb439e2[_0xcb319c(0x1e2)](_0x4327de);
        }, _0x5f1358 = paramsList['filter'](_0x9f2621 => _0x9f2621[0x0] === '_')[_0x4fe619(0x1e3)](_0x438e28 => _0x438e28['replace'](/_/, ''));
    return _0x5f1358['forEach'](_0x14abb6 => {
        const _0x1191ef = _0x4fe619;
        if (_0x14abb6 in _0x33566f && _0x14abb6 in _0x457fb6) {
            if (isObject(_0x33566f[_0x14abb6]) && isObject(_0x457fb6[_0x14abb6])) {
                const _0x2049f4 = Object['keys'](_0x33566f[_0x14abb6]), _0x29cde9 = Object[_0x1191ef(0x1e4)](_0x457fb6[_0x14abb6]);
                _0x2049f4[_0x1191ef(0x1e5)] !== _0x29cde9[_0x1191ef(0x1e5)] ? _0x5d7554(_0x14abb6) : (_0x2049f4['forEach'](_0x42acc2 => {
                    _0x33566f[_0x14abb6][_0x42acc2] !== _0x457fb6[_0x14abb6][_0x42acc2] && _0x5d7554(_0x14abb6);
                }), _0x29cde9[_0x1191ef(0x1e6)](_0x2d4883 => {
                    if (_0x33566f[_0x14abb6][_0x2d4883] !== _0x457fb6[_0x14abb6][_0x2d4883])
                        _0x5d7554(_0x14abb6);
                }));
            } else
                _0x33566f[_0x14abb6] !== _0x457fb6[_0x14abb6] && _0x5d7554(_0x14abb6);
        }
    }), _0xb439e2;
}
export {
    getChangedParams
};
