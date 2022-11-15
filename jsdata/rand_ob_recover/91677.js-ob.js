const Prism = require(_0x116069(307)), prismComponents = require(_0x116069(308)), getBaseLanguageName = (_0x107e35, _0xc1f4cc = prismComponents) => {
        const _0x4920d2 = _0x116069, _0x4da1fd = {
                'lLqQs': function (_0x2f36cc, _0x57fa56) {
                    return _0x2f36cc === _0x57fa56;
                }
            };
        if (_0xc1f4cc['languages'][_0x107e35])
            return _0x107e35;
        return Object[_0x4920d2(309)](_0xc1f4cc[_0x4920d2(310)])['find'](_0x260d89 => {
            const _0x5f0179 = _0x4920d2, {alias: _0x14aaab} = _0xc1f4cc[_0x5f0179(310)][_0x260d89];
            if (!_0x14aaab)
                return ![];
            return Array[_0x5f0179(311)](_0x14aaab) ? _0x14aaab[_0x5f0179(312)](_0x107e35) : _0x4da1fd[_0x5f0179(313)](_0x14aaab, _0x107e35);
        });
    };
function _0x3e43(_0x360e81, _0x15af6a) {
    return _0x3e43 = function (_0x4edc55, _0xe1ed2a) {
        _0x4edc55 = _0x4edc55 - (-8195 + 17 * -379 + -14933 * -1);
        let _0x2f15de = _0x2837[_0x4edc55];
        return _0x2f15de;
    }, _0x3e43(_0x360e81, _0x15af6a);
}
module[_0x116069(314)] = function loadPrismLanguage(_0x40518f) {
    const _0x18f212 = _0x116069, _0x55b189 = {
            'qhvYH': function (_0x1211fc, _0x4bf9b2) {
                return _0x1211fc === _0x4bf9b2;
            },
            'GcEDL': function (_0x124c84, _0x51e54c) {
                return _0x124c84(_0x51e54c);
            }
        }, _0x7c177f = getBaseLanguageName(_0x40518f);
    if (!_0x7c177f)
        throw new Error(_0x18f212(315) + _0x40518f + '\'.');
    if (Prism[_0x18f212(310)][_0x7c177f])
        return;
    const _0x38f37b = prismComponents['languages'][_0x7c177f];
    if (_0x55b189['qhvYH'](_0x38f37b['option'], _0x18f212(316)))
        return;
    _0x38f37b[_0x18f212(317)] && (Array['isArray'](_0x38f37b[_0x18f212(317)]) ? _0x38f37b[_0x18f212(317)][_0x18f212(318)](loadPrismLanguage) : loadPrismLanguage(_0x38f37b['require'])), _0x55b189[_0x18f212(319)](require, _0x18f212(320) + _0x7c177f + _0x18f212(321));
}, module['exports'][_0x116069(322)] = getBaseLanguageName;