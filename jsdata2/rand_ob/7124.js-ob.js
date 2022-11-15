const _0xc870 = [
    '21226JPopHL',
    '1FFHcNL',
    'path',
    'resolve',
    '../packages',
    '@vue',
    'cli-plugin-',
    'README.md',
    '../docs',
    'core-plugins',
    'HgCqW',
    'uvNxs',
    'readFileSync',
    'gXYpf',
    'bpTxU',
    'replace',
    'GcTfs',
    'writeFile',
    'forEach',
    'test',
    'catch',
    'error',
    'exit',
    '103681GXNIvU',
    '8AJxmse',
    '4307wDMPeo',
    '74zqgfNs',
    '278497gwUnbx',
    '163109lpfgAv',
    '627143ekwTUg',
    '397498ZYpSMv'
];
const _0x27c5e7 = _0x14fe;
(function (_0x3febf1, _0x4a7525) {
    const _0x1f0249 = _0x14fe;
    while (!![]) {
        try {
            const _0x5ce779 = parseInt(_0x1f0249(0x86)) * parseInt(_0x1f0249(0x87)) + parseInt(_0x1f0249(0x88)) * -parseInt(_0x1f0249(0x89)) + parseInt(_0x1f0249(0x8a)) + -parseInt(_0x1f0249(0x8b)) + -parseInt(_0x1f0249(0x8c)) + parseInt(_0x1f0249(0x8d)) + parseInt(_0x1f0249(0x8e)) * parseInt(_0x1f0249(0x8f));
            if (_0x5ce779 === _0x4a7525)
                break;
            else
                _0x3febf1['push'](_0x3febf1['shift']());
        } catch (_0x392a29) {
            _0x3febf1['push'](_0x3febf1['shift']());
        }
    }
}(_0xc870, 0x1d * 0x6a46 + 0x7c89 * -0x17 + 0x58604));
const fs = require('fs'), path = require(_0x27c5e7(0x90)), pluginsDirPath = path[_0x27c5e7(0x91)](__dirname, _0x27c5e7(0x92), _0x27c5e7(0x93)), pluginRegEx = new RegExp(_0x27c5e7(0x94));
function generatePluginDoc(_0x370017) {
    const _0x31679e = _0x27c5e7, _0x241d8f = {
            'HgCqW': _0x31679e(0x92),
            'HKyGX': _0x31679e(0x93),
            'uvNxs': _0x31679e(0x95),
            'gXYpf': _0x31679e(0x96),
            'bpTxU': _0x31679e(0x97),
            'GcTfs': 'cli-plugin-'
        }, _0x3a1c0a = path['resolve'](__dirname, _0x241d8f[_0x31679e(0x98)], _0x241d8f['HKyGX'], _0x370017, _0x241d8f[_0x31679e(0x99)]), _0x43688d = fs[_0x31679e(0x9a)](_0x3a1c0a), _0x4106fb = path[_0x31679e(0x91)](__dirname, _0x241d8f[_0x31679e(0x9b)], _0x241d8f[_0x31679e(0x9c)], _0x370017[_0x31679e(0x9d)](_0x241d8f[_0x31679e(0x9e)], '') + '.md');
    fs[_0x31679e(0x9f)](_0x4106fb, _0x43688d, () => {
    });
}
function _0x14fe(_0x45cde2, _0x1448bd) {
    return _0x14fe = function (_0x161f6f, _0x93e22a) {
        _0x161f6f = _0x161f6f - (-0xf13 + -0x4a2 + 0x143b);
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
        _0xa00c5[_0x2a1161(0xa0)](_0x3f3174 => {
            const _0x138a05 = _0x2a1161;
            pluginRegEx[_0x138a05(0xa1)](_0x3f3174) && _0x402003['myPfR'](generatePluginDoc, _0x3f3174);
        });
    });
};
genDocs()[_0x27c5e7(0xa2)](_0x4ce353 => {
    const _0x2f7953 = _0x27c5e7;
    console[_0x2f7953(0xa3)](_0x4ce353), process[_0x2f7953(0xa4)](-0x131 * -0x7 + 0x13ac + 0x59a * -0x5);
});
