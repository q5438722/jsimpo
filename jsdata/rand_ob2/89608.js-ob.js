const _0x1ddb = [
    'stringify',
    'sync',
    'forEach',
    'join',
    '678YQXsrk',
    '981aXLeJD',
    '3KJPFtw',
    '149797rqPFjb',
    '14lJCQqp',
    '60631vXaWMD',
    '852525ihefpW',
    '781382EXCZmc',
    '5wsAFRW',
    '30765PVyEQI',
    '5350MSGwJF',
    '533nBGzul',
    'fs-extra',
    'path',
    'readFileSync',
    'utf-8',
    'window.webpackCompilationHash=\x22',
    'writeFileSync',
    'replace',
    'parse',
    'webpackCompilationHash'
];
const _0x1da127 = _0x1e3c;
function _0x1e3c(_0x59e11f, _0x2f271f) {
    return _0x1e3c = function (_0x1ddb17, _0x1e3cef) {
        _0x1ddb17 = _0x1ddb17 - 0x145;
        let _0x224869 = _0x1ddb[_0x1ddb17];
        return _0x224869;
    }, _0x1e3c(_0x59e11f, _0x2f271f);
}
(function (_0x329a2b, _0x2fce6c) {
    const _0x59d704 = _0x1e3c;
    while (!![]) {
        try {
            const _0x47881a = parseInt(_0x59d704(0x145)) * parseInt(_0x59d704(0x146)) + parseInt(_0x59d704(0x147)) * -parseInt(_0x59d704(0x148)) + parseInt(_0x59d704(0x149)) * -parseInt(_0x59d704(0x14a)) + -parseInt(_0x59d704(0x14b)) + -parseInt(_0x59d704(0x14c)) + parseInt(_0x59d704(0x14d)) * -parseInt(_0x59d704(0x14e)) + parseInt(_0x59d704(0x14f)) * parseInt(_0x59d704(0x150));
            if (_0x47881a === _0x2fce6c)
                break;
            else
                _0x329a2b['push'](_0x329a2b['shift']());
        } catch (_0x4e1667) {
            _0x329a2b['push'](_0x329a2b['shift']());
        }
    }
}(_0x1ddb, 0x69277));
const fs = require(_0x1da127(0x151)), path = require(_0x1da127(0x152)), glob = require('glob'), replaceHtmlCompilationHash = (_0x236dfa, _0x12823e) => {
        const _0x53d1a2 = _0x1da127, _0x5979ee = fs[_0x53d1a2(0x153)](_0x236dfa, _0x53d1a2(0x154)), _0x40f377 = /window\.webpackCompilationHash="\w*"/, _0x3e2e4f = _0x53d1a2(0x155) + _0x12823e + '\x22';
        fs[_0x53d1a2(0x156)](_0x236dfa, _0x5979ee[_0x53d1a2(0x157)](_0x40f377, _0x3e2e4f), _0x53d1a2(0x154));
    }, replacePageDataCompilationHash = (_0x49b371, _0x2f40ad) => {
        const _0x34ad12 = _0x1da127, _0x141c0f = JSON[_0x34ad12(0x158)](fs[_0x34ad12(0x153)](_0x49b371, _0x34ad12(0x154)));
        _0x141c0f[_0x34ad12(0x159)] = _0x2f40ad, fs[_0x34ad12(0x156)](_0x49b371, JSON[_0x34ad12(0x15a)](_0x141c0f), 'utf-8');
    }, overwriteWebpackCompilationHash = _0x512e4e => {
        const _0x4e47ea = _0x1da127;
        return glob[_0x4e47ea(0x15b)](path['join'](__dirname, '../../public/page-data/**/page-data.json'))[_0x4e47ea(0x15c)](_0x4f3825 => replacePageDataCompilationHash(_0x4f3825, _0x512e4e)), glob[_0x4e47ea(0x15b)](path[_0x4e47ea(0x15d)](__dirname, '../../public/**/*.html'))['forEach'](_0x3c0403 => {
            if (!_0x3c0403['match'](/\/page-data\/[^/.]+\.html/))
                replaceHtmlCompilationHash(_0x3c0403, _0x512e4e);
        }), null;
    };
module['exports'] = { 'overwriteWebpackCompilationHash': overwriteWebpackCompilationHash };
