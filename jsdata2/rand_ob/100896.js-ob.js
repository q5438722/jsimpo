'use strict';
const _0x358c = [
    'apply\x20editorconfig\x20for\x20stdin-filepath\x20in\x20root',
    '/foo.js',
    'CJiRO',
    'CRTbB',
    'three.js',
    'luERO',
    'HPwYF',
    'VJXgD',
    'don’t\x20apply\x20editorconfig\x20outside\x20project\x20for\x20stdin-filepath\x20with\x20nonexistent\x20directory',
    'bjLkQ',
    'config/editorconfig/repo-root/nonexistent/one/two/three.js',
    '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x202\x20spaces\x22);\x0a}\x0a',
    'cli/stdin-ignore',
    'ignore/example.js',
    'XSaxG',
    'QEcEy',
    'vWhbm',
    'iLjwd',
    'SUDYt',
    '109AmLTwN',
    '7131IlOrHT',
    '1WbYiVp',
    '341777NxmtLK',
    '141041bhfHRj',
    '2VUmign',
    '554767LEwkNE',
    '254653XUDfjI',
    '61629OSdPpR',
    '132150ngrlcY',
    'ci-info',
    '../runPrettier.js',
    'format\x20correctly\x20if\x20stdin\x20content\x20compatible\x20with\x20stdin-filepath',
    '.name\x20{\x20display:\x20none;\x20}',
    'cli',
    'NPuWe',
    'test',
    'throw\x20error\x20if\x20stdin\x20content\x20incompatible\x20with\x20stdin-filepath',
    '--stdin-filepath',
    'non-zero',
    'iKZEM',
    'SDLXw',
    'kKPZL',
    'abc.js',
    'UlsUe',
    'hpZxW',
    'gracefully\x20handle\x20stdin-filepath\x20with\x20nonexistent\x20directory',
    'jWnRc',
    'yOtgY',
    'hyXew',
    'config/editorconfig/nonexistent.js',
    'RgUpD',
    'trim',
    'apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20nonexistent\x20directory',
    'MGMke',
    'xzcbE',
    'config/editorconfig/nonexistent/one/two/three.js',
    '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a',
    'apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20a\x20deep\x20path',
    'config/editorconfig/',
    'yZwUY',
    'rqYTq',
    'jPRRx',
    'repeat'
];
const _0x4d0b1b = _0x2112;
(function (_0x15fb13, _0x2ef092) {
    const _0x396ef2 = _0x2112;
    while (!![]) {
        try {
            const _0x50c4e7 = parseInt(_0x396ef2(0x146)) * parseInt(_0x396ef2(0x147)) + -parseInt(_0x396ef2(0x148)) * -parseInt(_0x396ef2(0x149)) + -parseInt(_0x396ef2(0x14a)) * -parseInt(_0x396ef2(0x14b)) + -parseInt(_0x396ef2(0x14c)) + -parseInt(_0x396ef2(0x14d)) + -parseInt(_0x396ef2(0x14e)) + -parseInt(_0x396ef2(0x14f));
            if (_0x50c4e7 === _0x2ef092)
                break;
            else
                _0x15fb13['push'](_0x15fb13['shift']());
        } catch (_0x41e702) {
            _0x15fb13['push'](_0x15fb13['shift']());
        }
    }
}(_0x358c, 0x8b544 + 0x12e * -0x146 + -0x1223d));
const {isCI} = require(_0x4d0b1b(0x150)), runPrettier = require(_0x4d0b1b(0x151));
describe(_0x4d0b1b(0x152), () => {
    const _0x474e71 = _0x4d0b1b, _0x2c2be4 = {
            'iEBdR': function (_0x3a3efe, _0x4f56d3, _0x468e56, _0x1a1577) {
                return _0x3a3efe(_0x4f56d3, _0x468e56, _0x1a1577);
            },
            'NPuWe': '--stdin-filepath',
            'DAjTX': _0x474e71(0x153)
        };
    _0x2c2be4['iEBdR'](runPrettier, _0x474e71(0x154), [
        _0x2c2be4[_0x474e71(0x155)],
        'abc.css'
    ], { 'input': _0x2c2be4['DAjTX'] })[_0x474e71(0x156)]({ 'status': 0x0 });
}), describe(_0x4d0b1b(0x157), () => {
    const _0x22f627 = _0x4d0b1b, _0x31abdb = {
            'iKZEM': function (_0x33b8a6, _0x45a3c4, _0x18e3cd, _0x266ef6) {
                return _0x33b8a6(_0x45a3c4, _0x18e3cd, _0x266ef6);
            },
            'SDLXw': 'cli',
            'kKPZL': _0x22f627(0x158),
            'UlsUe': _0x22f627(0x153),
            'hpZxW': _0x22f627(0x159)
        };
    _0x31abdb[_0x22f627(0x15a)](runPrettier, _0x31abdb[_0x22f627(0x15b)], [
        _0x31abdb[_0x22f627(0x15c)],
        _0x22f627(0x15d)
    ], { 'input': _0x31abdb[_0x22f627(0x15e)] })['test']({ 'status': _0x31abdb[_0x22f627(0x15f)] });
}), describe(_0x4d0b1b(0x160), () => {
    const _0x12775a = _0x4d0b1b, _0x885e24 = {
            'jWnRc': function (_0x586d7b, _0x4a78a6, _0x1f855b, _0x56ee00) {
                return _0x586d7b(_0x4a78a6, _0x1f855b, _0x56ee00);
            },
            'yOtgY': _0x12775a(0x158),
            'fFwkE': 'definitely/nonexistent/path.css',
            'hyXew': _0x12775a(0x153)
        };
    _0x885e24[_0x12775a(0x161)](runPrettier, _0x12775a(0x154), [
        _0x885e24[_0x12775a(0x162)],
        _0x885e24['fFwkE']
    ], { 'input': _0x885e24[_0x12775a(0x163)] })[_0x12775a(0x156)]({ 'status': 0x0 });
}), describe('apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20nonexistent\x20file', () => {
    const _0x8aa5c5 = _0x4d0b1b, _0x242b3b = {
            'odQaU': function (_0x562df1, _0x17698b, _0x31d0d6, _0x34aec5) {
                return _0x562df1(_0x17698b, _0x31d0d6, _0x34aec5);
            },
            'RgUpD': _0x8aa5c5(0x164)
        };
    _0x242b3b['odQaU'](runPrettier, _0x8aa5c5(0x154), [
        '--stdin-filepath',
        _0x242b3b[_0x8aa5c5(0x165)]
    ], { 'input': '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a'[_0x8aa5c5(0x166)]() })[_0x8aa5c5(0x156)]({ 'status': 0x0 });
}), describe(_0x4d0b1b(0x167), () => {
    const _0x4eebdf = _0x4d0b1b, _0x4862a7 = {
            'MGMke': function (_0x12db69, _0x56fb95, _0x434c7b, _0x5d73e5) {
                return _0x12db69(_0x56fb95, _0x434c7b, _0x5d73e5);
            },
            'xzcbE': _0x4eebdf(0x154)
        };
    _0x4862a7[_0x4eebdf(0x168)](runPrettier, _0x4862a7[_0x4eebdf(0x169)], [
        '--stdin-filepath',
        _0x4eebdf(0x16a)
    ], { 'input': _0x4eebdf(0x16b)[_0x4eebdf(0x166)]() })[_0x4eebdf(0x156)]({ 'status': 0x0 });
}), describe(_0x4d0b1b(0x16c), () => {
    const _0x436dd8 = _0x4d0b1b, _0x35537a = {
            'yZwUY': function (_0x3e9587, _0x29ed7e, _0x13d981, _0x49bdf0) {
                return _0x3e9587(_0x29ed7e, _0x13d981, _0x49bdf0);
            },
            'rqYTq': _0x436dd8(0x158),
            'jPRRx': _0x436dd8(0x16d),
            'FkKbj': 'three.js'
        };
    _0x35537a[_0x436dd8(0x16e)](runPrettier, _0x436dd8(0x154), [
        _0x35537a[_0x436dd8(0x16f)],
        _0x35537a[_0x436dd8(0x170)] + 'a/'[_0x436dd8(0x171)](-0x178d + -0x159 * -0x6 + -0xf95 * -0x1) + _0x35537a['FkKbj']
    ], { 'input': '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a'[_0x436dd8(0x166)]() })[_0x436dd8(0x156)]({ 'status': 0x0 });
});
function _0x2112(_0x1c9543, _0xc76073) {
    return _0x2112 = function (_0x3879e3, _0x200546) {
        _0x3879e3 = _0x3879e3 - (-0x1 * -0x6d + -0x1780 + 0x1859 * 0x1);
        let _0x41dbc3 = _0x358c[_0x3879e3];
        return _0x41dbc3;
    }, _0x2112(_0x1c9543, _0xc76073);
}
isCI && describe(_0x4d0b1b(0x172), () => {
    const _0x3775ed = _0x4d0b1b, _0x398e4d = {
            'CJiRO': _0x3775ed(0x154),
            'CRTbB': _0x3775ed(0x158),
            'cqsmx': _0x3775ed(0x173),
            'bbQih': function (_0x46a96d, _0xd052a2) {
                return _0x46a96d + _0xd052a2;
            }
        }, _0x5cdbf4 = _0x3775ed(0x16b)[_0x3775ed(0x166)]();
    runPrettier(_0x398e4d[_0x3775ed(0x174)], [
        _0x398e4d[_0x3775ed(0x175)],
        _0x398e4d['cqsmx']
    ], { 'input': _0x5cdbf4 })[_0x3775ed(0x156)]({
        'status': 0x0,
        'stdout': _0x398e4d['bbQih'](_0x5cdbf4, '\x0a'),
        'stderr': '',
        'write': []
    });
});
describe(_0x4d0b1b(0x16c), () => {
    const _0x5b8847 = _0x4d0b1b, _0x493a1e = {
            'niWLh': function (_0x40cdaa, _0x2ba40a, _0xeba55e, _0x425539) {
                return _0x40cdaa(_0x2ba40a, _0xeba55e, _0x425539);
            },
            'luERO': 'cli',
            'yJxpc': _0x5b8847(0x158),
            'HPwYF': 'config/editorconfig/',
            'VJXgD': _0x5b8847(0x176)
        };
    _0x493a1e['niWLh'](runPrettier, _0x493a1e[_0x5b8847(0x177)], [
        _0x493a1e['yJxpc'],
        _0x493a1e[_0x5b8847(0x178)] + 'a/'[_0x5b8847(0x171)](0xe72 + -0x24f5 + 0x16a1) + _0x493a1e[_0x5b8847(0x179)]
    ], { 'input': '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a'['trim']() })[_0x5b8847(0x156)]({ 'status': 0x0 });
}), describe(_0x4d0b1b(0x17a), () => {
    const _0x70a013 = _0x4d0b1b, _0xd451c2 = {
            'bjLkQ': function (_0xcf4427, _0x136d3e, _0x2c140e, _0xbacbd2) {
                return _0xcf4427(_0x136d3e, _0x2c140e, _0xbacbd2);
            }
        };
    _0xd451c2[_0x70a013(0x17b)](runPrettier, _0x70a013(0x154), [
        _0x70a013(0x158),
        _0x70a013(0x17c)
    ], { 'input': _0x70a013(0x17d)[_0x70a013(0x166)]() })['test']({ 'status': 0x0 });
}), describe('output\x20file\x20as-is\x20if\x20stdin-filepath\x20matched\x20patterns\x20in\x20ignore-path', () => {
    const _0x3d8052 = _0x4d0b1b, _0x3908fe = {
            'XSaxG': function (_0x7706f2, _0x21fffe, _0x257617, _0x11e736) {
                return _0x7706f2(_0x21fffe, _0x257617, _0x11e736);
            },
            'QEcEy': _0x3d8052(0x17e),
            'vWhbm': _0x3d8052(0x158),
            'iLjwd': _0x3d8052(0x17f),
            'SUDYt': 'hello_world(\x20);'
        };
    _0x3908fe[_0x3d8052(0x180)](runPrettier, _0x3908fe[_0x3d8052(0x181)], [
        _0x3908fe[_0x3d8052(0x182)],
        _0x3908fe[_0x3d8052(0x183)]
    ], { 'input': _0x3908fe[_0x3d8052(0x184)] })[_0x3d8052(0x156)]({
        'stdout': _0x3908fe[_0x3d8052(0x184)],
        'status': 0x0
    });
});
