const fs = require('fs'), path = require(_0x27c5e7(144)), pluginsDirPath = path[_0x27c5e7(145)](__dirname, _0x27c5e7(146), _0x27c5e7(147)), pluginRegEx = new RegExp(_0x27c5e7(148));
function generatePluginDoc(_0x370017) {
    const _0x31679e = _0x27c5e7, _0x241d8f = {
            'HgCqW': _0x31679e(146),
            'HKyGX': _0x31679e(147),
            'uvNxs': _0x31679e(149),
            'gXYpf': _0x31679e(150),
            'bpTxU': _0x31679e(151),
            'GcTfs': 'cli-plugin-'
        }, _0x3a1c0a = path['resolve'](__dirname, _0x241d8f[_0x31679e(152)], _0x241d8f['HKyGX'], _0x370017, _0x241d8f[_0x31679e(153)]), _0x43688d = fs[_0x31679e(154)](_0x3a1c0a), _0x4106fb = path[_0x31679e(145)](__dirname, _0x241d8f[_0x31679e(155)], _0x241d8f[_0x31679e(156)], _0x370017[_0x31679e(157)](_0x241d8f[_0x31679e(158)], '') + '.md');
    fs[_0x31679e(159)](_0x4106fb, _0x43688d, () => {
    });
}
function _0x14fe(_0x45cde2, _0x1448bd) {
    return _0x14fe = function (_0x161f6f, _0x93e22a) {
        _0x161f6f = _0x161f6f - (-3859 + -1186 + 5179);
        let _0x558797 = _0xc870[_0x161f6f];
        return _0x558797;
    }, _0x14fe(_0x45cde2, _0x1448bd);
}
const genDocs = module['exports'] = async () => {
    const _0x402003 = {
        'myPfR': function (_0xcb14ae, _0x2313ea) {
            return _0xcb14ae(_0x2313ea);
        }
    };
    fs['readdir'](pluginsDirPath, (_0x4fccd0, _0xa00c5) => {
        const _0x2a1161 = _0x14fe;
        _0xa00c5[_0x2a1161(160)](_0x3f3174 => {
            const _0x138a05 = _0x2a1161;
            pluginRegEx[_0x138a05(161)](_0x3f3174) && _0x402003['myPfR'](generatePluginDoc, _0x3f3174);
        });
    });
};
genDocs()[_0x27c5e7(162)](_0x4ce353 => {
    const _0x2f7953 = _0x27c5e7;
    console[_0x2f7953(163)](_0x4ce353), process[_0x2f7953(164)](-305 * -7 + 5036 + 1434 * -5);
});