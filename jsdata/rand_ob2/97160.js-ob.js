'use strict';
const _0x4386 = [
    '141119rDjbac',
    '1fMxgTo',
    '157324ropAhh',
    '355490WyFwLF',
    '5965ayxEjh',
    '19KXzCSj',
    '11539srPSnp',
    '8qFNgCn',
    './config.base',
    'exports',
    'assign',
    'modulePathIgnorePatterns',
    'resolve',
    './setupHostConfigs.js',
    '208305RiMsOo',
    '5nvBolm',
    '2947xLwUmQ'
];
function _0x2002(_0x4c9ed8, _0x1e28b8) {
    return _0x2002 = function (_0x438690, _0x200210) {
        _0x438690 = _0x438690 - 0x11a;
        let _0x42f025 = _0x4386[_0x438690];
        return _0x42f025;
    }, _0x2002(_0x4c9ed8, _0x1e28b8);
}
const _0x514e7b = _0x2002;
(function (_0x19b884, _0xb48d69) {
    const _0x9a0c13 = _0x2002;
    while (!![]) {
        try {
            const _0x34edd9 = parseInt(_0x9a0c13(0x11a)) + -parseInt(_0x9a0c13(0x11b)) * parseInt(_0x9a0c13(0x11c)) + -parseInt(_0x9a0c13(0x11d)) * parseInt(_0x9a0c13(0x11e)) + -parseInt(_0x9a0c13(0x11f)) + parseInt(_0x9a0c13(0x120)) + parseInt(_0x9a0c13(0x121)) * parseInt(_0x9a0c13(0x122)) + -parseInt(_0x9a0c13(0x123)) * parseInt(_0x9a0c13(0x124));
            if (_0x34edd9 === _0xb48d69)
                break;
            else
                _0x19b884['push'](_0x19b884['shift']());
        } catch (_0x2bff8e) {
            _0x19b884['push'](_0x19b884['shift']());
        }
    }
}(_0x4386, 0x42518));
const baseConfig = require(_0x514e7b(0x125));
module[_0x514e7b(0x126)] = Object[_0x514e7b(0x127)]({}, baseConfig, {
    'modulePathIgnorePatterns': [
        ...baseConfig[_0x514e7b(0x128)],
        'packages/react-devtools-extensions',
        'packages/react-devtools-shared'
    ],
    'setupFiles': [
        ...baseConfig['setupFiles'],
        require[_0x514e7b(0x129)]('./setupTests.www.js'),
        require[_0x514e7b(0x129)](_0x514e7b(0x12a))
    ]
});
