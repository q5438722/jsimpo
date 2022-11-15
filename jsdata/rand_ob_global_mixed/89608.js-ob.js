const _0x330b = [
    'exports',
    '556819CKBXNj',
    '508192DxeRMd',
    '594533iuYeLw',
    '1EoUFWh',
    '7QyRHWN',
    '124377zjpbzx',
    '701729tYVvrr',
    '1wAFAqw',
    '586949PazWCv',
    '956429JXoFKP',
    'fs-extra',
    'glob',
    'utf-8',
    'writeFileSync',
    'parse',
    'stringify',
    'sync',
    'join',
    'forEach',
    'match',
    'OLqqc'
];
const _0x5088ce = _0x515f;
function _0x515f(_0x1188ad, _0x5a461a) {
    return _0x515f = function (_0x5fc8a4, _0x24caba) {
        _0x5fc8a4 = _0x5fc8a4 - (0xf8 * 0xd + -0x3f5 * -0x7 + -0x2775);
        let _0x44e024 = _0x330b[_0x5fc8a4];
        return _0x44e024;
    }, _0x515f(_0x1188ad, _0x5a461a);
}
(function (_0x1224b3, _0xe827ab) {
    const _0xd46ca2 = _0x515f;
    while (!![]) {
        try {
            const _0x31c389 = -parseInt(_0xd46ca2(0xd6)) + parseInt(_0xd46ca2(0xd7)) + parseInt(_0xd46ca2(0xd8)) * parseInt(_0xd46ca2(0xd9)) + parseInt(_0xd46ca2(0xda)) * -parseInt(_0xd46ca2(0xdb)) + -parseInt(_0xd46ca2(0xdc)) * parseInt(_0xd46ca2(0xdd)) + parseInt(_0xd46ca2(0xde)) + parseInt(_0xd46ca2(0xdf));
            if (_0x31c389 === _0xe827ab)
                break;
            else
                _0x1224b3['push'](_0x1224b3['shift']());
        } catch (_0x41ff2b) {
            _0x1224b3['push'](_0x1224b3['shift']());
        }
    }
}(_0x330b, -0x7287f + -0xcbf42 + -0x1 * -0x1bcaf5));
const fs = require(_0x5088ce(0xe0)), path = require('path'), glob = require(_0x5088ce(0xe1)), replaceHtmlCompilationHash = (_0x3a5083, _0x1e4e53) => {
        const _0x2c3e0f = _0x5088ce, _0x41e57b = fs['readFileSync'](_0x3a5083, _0x2c3e0f(0xe2)), _0x44f0c1 = /window\.webpackCompilationHash="\w*"/, _0x1aa95f = 'window.webpackCompilationHash=\x22' + _0x1e4e53 + '\x22';
        fs[_0x2c3e0f(0xe3)](_0x3a5083, _0x41e57b['replace'](_0x44f0c1, _0x1aa95f), _0x2c3e0f(0xe2));
    }, replacePageDataCompilationHash = (_0x129f7a, _0x320a57) => {
        const _0x197a15 = _0x5088ce, _0x14f658 = JSON[_0x197a15(0xe4)](fs['readFileSync'](_0x129f7a, _0x197a15(0xe2)));
        _0x14f658['webpackCompilationHash'] = _0x320a57, fs[_0x197a15(0xe3)](_0x129f7a, JSON[_0x197a15(0xe5)](_0x14f658), _0x197a15(0xe2));
    }, overwriteWebpackCompilationHash = _0x34ca42 => {
        const _0xe6763e = _0x5088ce, _0x4d6316 = {
                'OLqqc': function (_0x40c63b, _0x401308, _0x468690) {
                    return _0x40c63b(_0x401308, _0x468690);
                }
            };
        return glob[_0xe6763e(0xe6)](path['join'](__dirname, '../../public/page-data/**/page-data.json'))['forEach'](_0x1f5377 => replacePageDataCompilationHash(_0x1f5377, _0x34ca42)), glob[_0xe6763e(0xe6)](path[_0xe6763e(0xe7)](__dirname, '../../public/**/*.html'))[_0xe6763e(0xe8)](_0x432d6c => {
            const _0x530d6b = _0xe6763e;
            if (!_0x432d6c[_0x530d6b(0xe9)](/\/page-data\/[^/.]+\.html/))
                _0x4d6316[_0x530d6b(0xea)](replaceHtmlCompilationHash, _0x432d6c, _0x34ca42);
        }), null;
    };
module[_0x5088ce(0xeb)] = { 'overwriteWebpackCompilationHash': overwriteWebpackCompilationHash };
