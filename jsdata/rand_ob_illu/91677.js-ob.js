const _0x2837 = ['forEach', 'GcEDL', 'prismjs/components/prism-', '.js', 'getBaseLanguageName', '2GBiXjp', '631471FobelP', '1ijoHEB', '157669MlYPOh', '885055ZTBqzo', '272339LvQTOK', '3mHxcvJ', '313351APosKP', '401GoURbE', '4447IReAub', '731DiwihW', '2374UEjxHN', 'prismjs', 'prismjs/components', 'keys', 'languages', 'isArray', 'includes', 'lLqQs', 'exports', 'Prism doesn\'t support language \'', 'default', 'require'];
const _0x116069 = _0x3e43;

(function (_0x36cae0, _0x4b5ad6) {
    const _0x8e8713 = _0x3e43;

    while (true) {
        try {
            const _0x45841a = -parseInt(_0x8e8713(0x127)) * parseInt(_0x8e8713(0x128)) + parseInt(_0x8e8713(0x129)) * parseInt(_0x8e8713(0x12a)) + parseInt(_0x8e8713(0x12b)) + parseInt(_0x8e8713(0x12c)) + -parseInt(_0x8e8713(0x12d)) * -parseInt(_0x8e8713(0x12e)) + parseInt(_0x8e8713(0x12f)) * -parseInt(_0x8e8713(0x130)) + -parseInt(_0x8e8713(0x131)) * -parseInt(_0x8e8713(0x132));

            if (_0x45841a === _0x4b5ad6) break;else _0x36cae0.push(_0x36cae0.shift());
        } catch (_0x3a5d1c) {
            _0x36cae0.push(_0x36cae0.shift());
        }
    }
})(_0x2837, 944321);

const Prism = require(_0x116069(0x133));

const prismComponents = require(_0x116069(0x134));

const getBaseLanguageName = (_0x107e35, _0xc1f4cc = prismComponents) => {
    const _0x4920d2 = _0x116069;
    const _0x4da1fd = {
        'lLqQs': function (_0x2f36cc, _0x57fa56) {
            return _0x2f36cc === _0x57fa56;
        }
    };

    if (_0xc1f4cc.languages[_0x107e35]) return _0x107e35;
    return Object[_0x4920d2(0x135)](_0xc1f4cc[_0x4920d2(0x136)]).find(_0x260d89 => {
        const _0x5f0179 = _0x4920d2;

        var { alias: _0x14aaab } = _0xc1f4cc[_0x5f0179(0x136)][_0x260d89];

        if (!_0x14aaab) return false;
        return Array[_0x5f0179(0x137)](_0x14aaab) ? _0x14aaab[_0x5f0179(0x138)](_0x107e35) : _0x4da1fd[_0x5f0179(0x139)](_0x14aaab, _0x107e35);
    });
};

function _0x3e43(_0x360e81, _0x15af6a) {
    return _0x3e43 = function (_0x4edc55, _0xe1ed2a) {
        _0x4edc55 = _0x4edc55 - 295;
        const _0x2f15de = _0x2837[_0x4edc55];

        return _0x2f15de;
    }, _0x3e43(_0x360e81, _0x15af6a);
}
module[_0x116069(0x13a)] = function loadPrismLanguage(_0x40518f) {
    const _0x18f212 = _0x116069;
    const _0x55b189 = {
        'qhvYH': function (_0x1211fc, _0x4bf9b2) {
            return _0x1211fc === _0x4bf9b2;
        },
        'GcEDL': function (_0x124c84, _0x51e54c) {
            return _0x124c84(_0x51e54c);
        }
    };

    const _0x7c177f = getBaseLanguageName(_0x40518f);

    if (!_0x7c177f) throw new Error(_0x18f212(0x13b) + _0x40518f + '\'.');
    if (Prism[_0x18f212(0x136)][_0x7c177f]) return;
    const _0x38f37b = prismComponents.languages[_0x7c177f];

    if (_0x55b189.qhvYH(_0x38f37b.option, _0x18f212(0x13c))) return;
    _0x38f37b[_0x18f212(0x13d)] && (Array.isArray(_0x38f37b[_0x18f212(0x13d)]) ? _0x38f37b[_0x18f212(0x13d)][_0x18f212(0x13e)](loadPrismLanguage) : loadPrismLanguage(_0x38f37b.require)), _0x55b189[_0x18f212(0x13f)](require, _0x18f212(0x140) + _0x7c177f + _0x18f212(0x141));
}, module.exports[_0x116069(0x142)] = getBaseLanguageName;
