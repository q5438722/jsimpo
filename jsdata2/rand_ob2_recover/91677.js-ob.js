const Prism = require('prismjs'), prismComponents = require('prismjs/components'), getBaseLanguageName = (_0xa4a9fc, _0x5d70c3 = prismComponents) => {
        const _0x2de901 = _0x31bb;
        if (_0x5d70c3[_0x2de901(193)][_0xa4a9fc])
            return _0xa4a9fc;
        return Object['keys'](_0x5d70c3[_0x2de901(193)])[_0x2de901(194)](_0x19f040 => {
            const _0x129e98 = _0x2de901, {alias: _0x316774} = _0x5d70c3[_0x129e98(193)][_0x19f040];
            if (!_0x316774)
                return ![];
            return Array[_0x129e98(195)](_0x316774) ? _0x316774['includes'](_0xa4a9fc) : _0x316774 === _0xa4a9fc;
        });
    };
function _0x31bb(_0x43110c, _0x151f56) {
    return _0x31bb = function (_0x54ad9d, _0x31bbbc) {
        _0x54ad9d = _0x54ad9d - 181;
        let _0x1bccbb = _0x54ad[_0x54ad9d];
        return _0x1bccbb;
    }, _0x31bb(_0x43110c, _0x151f56);
}
module['exports'] = function loadPrismLanguage(_0x297b0f) {
    const _0x4eb6c7 = _0x31bb, _0x4321a4 = getBaseLanguageName(_0x297b0f);
    if (!_0x4321a4)
        throw new Error(_0x4eb6c7(196) + _0x297b0f + '\'.');
    if (Prism['languages'][_0x4321a4])
        return;
    const _0x39042e = prismComponents[_0x4eb6c7(193)][_0x4321a4];
    if (_0x39042e[_0x4eb6c7(197)] === _0x4eb6c7(198))
        return;
    _0x39042e[_0x4eb6c7(199)] && (Array[_0x4eb6c7(195)](_0x39042e[_0x4eb6c7(199)]) ? _0x39042e[_0x4eb6c7(199)][_0x4eb6c7(200)](loadPrismLanguage) : loadPrismLanguage(_0x39042e[_0x4eb6c7(199)])), require('prismjs/components/prism-' + _0x4321a4 + _0x4eb6c7(201));
}, module[_0x3c6f3d(202)][_0x3c6f3d(203)] = getBaseLanguageName;