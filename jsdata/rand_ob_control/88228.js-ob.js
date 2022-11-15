import { CssTools } from './minifier';
Tinytest['add']('minifier-css\x20-\x20CSS\x20can\x20be\x20parsed\x20properly\x20into\x20an\x20AST', _0x564348 => {
    const _0x398819 = {
            'usdEa': 'body\x20{\x20color:\x20\x22red\x22}',
            'ZQTph': 'root',
            'yMKjf': 'rule',
            'vTGCz': 'body',
            'Twpxd': 'decl',
            'mZLDD': 'color',
            'HbZqJ': '\x22red\x22'
        }, _0x2c058a = CssTools['parseCss'](_0x398819['usdEa']);
    _0x564348['equal'](_0x2c058a['type'], _0x398819['ZQTph']), _0x564348['equal'](_0x2c058a['nodes']['length'], 0x1);
    const _0x1eb6d1 = _0x2c058a['nodes'][0x0];
    _0x564348['equal'](_0x1eb6d1['type'], _0x398819['yMKjf']), _0x564348['equal'](_0x1eb6d1['selector'], _0x398819['vTGCz']), _0x564348['equal'](_0x1eb6d1['nodes']['length'], 0x1);
    const _0x119c38 = _0x1eb6d1['nodes'][0x0];
    _0x564348['equal'](_0x119c38['type'], _0x398819['Twpxd']), _0x564348['equal'](_0x119c38['prop'], _0x398819['mZLDD']), _0x564348['equal'](_0x119c38['value'], _0x398819['HbZqJ']);
}), Tinytest['add']('minifier-css\x20-\x20CSS\x20AST\x20can\x20be\x20converted\x20back\x20into\x20a\x20string', _0x176d95 => {
    const _0x94febd = { 'ntkCD': 'body\x20{\x20color:\x20\x22red\x22}' }, _0x445596 = _0x94febd['ntkCD'], _0x3164df = CssTools['parseCss'](_0x445596), _0x493ffb = CssTools['stringifyCss'](_0x3164df, { 'sourcemap': !![] });
    _0x176d95['equal'](_0x445596, _0x493ffb['code']), _0x176d95['isNotNull'](_0x493ffb['map']);
}), Tinytest['add']('minifier-css\x20-\x20simple\x20CSS\x20minification', _0x27cb38 => {
    const _0x41ad01 = {
            'CieUC': function (_0x49de87, _0x2ad77e, _0x241adc, _0x2317f6) {
                return _0x49de87(_0x2ad77e, _0x241adc, _0x2317f6);
            },
            'BUObk': 'a\x20\x09\x0a{\x20color:\x20red\x20}\x20\x0a',
            'oPhin': 'a{color:red}',
            'Ervpb': 'whitespace\x20check',
            'asMNv': function (_0x2ae0a8, _0x39d9cb, _0x1e364c, _0x21ed24) {
                return _0x2ae0a8(_0x39d9cb, _0x1e364c, _0x21ed24);
            },
            'wHAGo': 'a\x20\x09\x0a{\x20color:\x20red;\x20margin:\x201;\x20}\x20\x0a',
            'FKgdl': 'a{color:red;margin:1}',
            'BeEPr': 'only\x20last\x20one\x20loses\x20semicolon',
            'DJReo': 'a\x20\x09\x0a{\x20color:\x20red;;;\x20margin:\x201;;;\x20}\x20\x0a',
            'CXMdY': 'more\x20semicolons\x20than\x20needed',
            'uDWmf': 'a\x20,\x20p\x20\x09\x0a{\x20color:\x20red;\x20}\x20\x0a',
            'Ffvcx': 'a,p{color:red}',
            'siSVe': 'multiple\x20selectors',
            'jPIDU': function (_0x4efdbf, _0x4d6331, _0x34d71f, _0xfcb56e) {
                return _0x4efdbf(_0x4d6331, _0x34d71f, _0xfcb56e);
            },
            'QRcAk': 'body\x20{}',
            'oqhIx': 'removing\x20empty\x20rules',
            'iFqdZ': function (_0x1f7d33, _0x2fb30d, _0xd20ae4, _0x4bb3a9) {
                return _0x1f7d33(_0x2fb30d, _0xd20ae4, _0x4bb3a9);
            },
            'NylIJ': '*.my-class\x20{\x20color:\x20#fff;\x20}',
            'FgLwQ': '.my-class{color:#fff}',
            'qsOpj': 'removing\x20universal\x20selector',
            'wupuF': 'p\x20>\x20*.my-class\x20{\x20color:\x20#fff;\x20}',
            'KYXPt': 'p>.my-class{color:#fff}',
            'xMJoN': 'removing\x20optional\x20whitespace\x20around\x20\x22>\x22\x20in\x20selector',
            'TIASX': 'p\x20+\x20\x20*.my-class\x20{\x20color:\x20#fff;\x20}',
            'atSOD': 'p+.my-class{color:#fff}',
            'YdGOt': 'removing\x20optional\x20whitespace\x20around\x20\x22+\x22\x20in\x20selector',
            'gRnxe': 'a\x20{\x0a\x20\x20\x20\x20font:12px\x20\x27Helvetica\x27,\x22Arial\x22,\x27Nautica\x27;\x0a\x20\x20\x20\x20background:url(\x22/some/nice/picture.png\x22);\x0a}',
            'HZQnv': 'a{font:12px\x20Helvetica,Arial,Nautica;background:url(/some/nice/picture.png)}',
            'OLKtL': 'removing\x20quotes\x20in\x20font\x20and\x20url\x20(if\x20possible)',
            'lUZIH': function (_0xbcacb8, _0x3c258d, _0x21e1df, _0x360f07) {
                return _0xbcacb8(_0x3c258d, _0x21e1df, _0x360f07);
            },
            'CqTkq': '/*\x20no\x20comments\x20*/\x20a\x20{\x20color:\x20red;\x20}',
            'yNMbO': 'remove\x20comments'
        }, _0xf609be = (_0x15f724, _0x42fc2d, _0xf8353e) => {
            _0x27cb38['equal'](CssTools['minifyCss'](_0x15f724)[0x0], _0x42fc2d, _0xf8353e);
        };
    _0x41ad01['CieUC'](_0xf609be, _0x41ad01['BUObk'], _0x41ad01['oPhin'], _0x41ad01['Ervpb']), _0x41ad01['asMNv'](_0xf609be, _0x41ad01['wHAGo'], _0x41ad01['FKgdl'], _0x41ad01['BeEPr']), _0x41ad01['asMNv'](_0xf609be, _0x41ad01['DJReo'], _0x41ad01['FKgdl'], _0x41ad01['CXMdY']), _0x41ad01['asMNv'](_0xf609be, _0x41ad01['uDWmf'], _0x41ad01['Ffvcx'], _0x41ad01['siSVe']), _0x41ad01['jPIDU'](_0xf609be, _0x41ad01['QRcAk'], '', _0x41ad01['oqhIx']), _0x41ad01['iFqdZ'](_0xf609be, _0x41ad01['NylIJ'], _0x41ad01['FgLwQ'], _0x41ad01['qsOpj']), _0x41ad01['iFqdZ'](_0xf609be, _0x41ad01['wupuF'], _0x41ad01['KYXPt'], _0x41ad01['xMJoN']), _0x41ad01['iFqdZ'](_0xf609be, _0x41ad01['TIASX'], _0x41ad01['atSOD'], _0x41ad01['YdGOt']), _0x41ad01['iFqdZ'](_0xf609be, _0x41ad01['gRnxe'], _0x41ad01['HZQnv'], _0x41ad01['OLKtL']), _0x41ad01['lUZIH'](_0xf609be, _0x41ad01['CqTkq'], _0x41ad01['oPhin'], _0x41ad01['yNMbO']);
}), Tinytest['add']('minifier-css\x20-\x20Multiple\x20CSS\x20AST\x27s\x20can\x20be\x20merged\x20into\x20a\x20single\x20CSS\x20AST', _0x3c98bf => {
    const _0x1d88de = {
            'gtrXn': '@import\x20\x22custom.css\x22;\x20body\x20{\x20color:\x20\x22red\x22;\x20}',
            'gXvUt': 'body\x20{\x20color:\x20\x22blue\x22;\x20}',
            'VHqsr': 'test.css',
            'nJcrD': 'test2.css'
        }, _0x205e28 = _0x1d88de['gtrXn'], _0x3cce41 = _0x1d88de['gXvUt'], _0x593e0b = CssTools['parseCss'](_0x205e28, { 'from': _0x1d88de['VHqsr'] }), _0x131358 = CssTools['parseCss'](_0x3cce41, { 'from': _0x1d88de['nJcrD'] }), _0x17dcff = CssTools['mergeCssAsts']([
            _0x593e0b,
            _0x131358
        ]), _0xa0b797 = CssTools['stringifyCss'](_0x17dcff, {
            'sourcemap': !![],
            'inputSourcemaps': ![]
        });
    _0x3c98bf['equal'](_0x17dcff['nodes']['length'], 0x3), _0x3c98bf['equal'](_0xa0b797['map']['sources']['length'], 0x2), _0x3c98bf['equal'](_0xa0b797['map']['sources'][0x0], _0x1d88de['VHqsr']);
}), Tinytest['add']('minifier-css\x20-\x20hoist\x20imports\x20from\x20merged\x20CSS\x20AST\x27s', _0x5d015f => {
    const _0x4f0d71 = {
            'Opssz': '@import\x20\x22custom.css\x22;\x20body\x20{\x20color:\x20\x22red\x22;\x20}',
            'QtBKI': '@import\x20\x22other.css\x22;\x20body\x20{\x20color:\x20\x22blue\x22;\x20}',
            'aaIqc': 'test.css',
            'CamJg': 'test2.css',
            'XsZPm': 'import',
            'ugThQ': 'rule'
        }, _0x1022b4 = _0x4f0d71['Opssz'], _0x157d70 = _0x4f0d71['QtBKI'], _0x232d64 = CssTools['parseCss'](_0x1022b4, { 'from': _0x4f0d71['aaIqc'] }), _0x3217f6 = CssTools['parseCss'](_0x157d70, { 'from': _0x4f0d71['CamJg'] }), _0x5333aa = CssTools['mergeCssAsts']([
            _0x232d64,
            _0x3217f6
        ]), _0x3d4765 = CssTools['stringifyCss'](_0x5333aa, {
            'sourcemap': !![],
            'inputSourcemaps': ![]
        });
    _0x5d015f['equal'](_0x5333aa['nodes']['length'], 0x4), _0x5d015f['equal'](_0x5333aa['nodes'][0x0]['name'], _0x4f0d71['XsZPm']), _0x5d015f['equal'](_0x5333aa['nodes'][0x1]['name'], _0x4f0d71['XsZPm']), _0x5d015f['equal'](_0x5333aa['nodes'][0x2]['type'], _0x4f0d71['ugThQ']), _0x5d015f['equal'](_0x5333aa['nodes'][0x3]['type'], _0x4f0d71['ugThQ']), _0x5d015f['equal'](_0x3d4765['map']['sources']['length'], 0x2), _0x5d015f['equal'](_0x3d4765['map']['sources'][0x0], _0x4f0d71['aaIqc']);
}), Tinytest['add']('minifier-css\x20-\x20hoist\x20imports\x20after\x20comments\x20from\x20merged\x20CSS\x20AST\x27s', _0x21d083 => {
    const _0x5109bb = {
            'TDfJf': '@import\x20\x22custom.css\x22;\x20body\x20{\x20color:\x20\x22red\x22;\x20}',
            'EhQJk': '/*\x20comment\x20*/\x20@import\x20\x22other.css\x22;\x20body\x20{\x20color:\x20\x22blue\x22;\x20}',
            'slSAS': 'test.css',
            'FMHkf': 'test2.css',
            'usELZ': 'import',
            'XWLLK': 'comment',
            'BtHqF': 'rule'
        }, _0x1220fb = _0x5109bb['TDfJf'], _0x344b31 = _0x5109bb['EhQJk'], _0x38446b = CssTools['parseCss'](_0x1220fb, { 'from': _0x5109bb['slSAS'] }), _0x56b163 = CssTools['parseCss'](_0x344b31, { 'from': _0x5109bb['FMHkf'] }), _0x212868 = CssTools['mergeCssAsts']([
            _0x38446b,
            _0x56b163
        ]), _0x3dac01 = CssTools['stringifyCss'](_0x212868, {
            'sourcemap': !![],
            'inputSourcemaps': ![]
        });
    _0x21d083['equal'](_0x212868['nodes']['length'], 0x5), _0x21d083['equal'](_0x212868['nodes'][0x0]['name'], _0x5109bb['usELZ']), _0x21d083['equal'](_0x212868['nodes'][0x1]['type'], _0x5109bb['XWLLK']), _0x21d083['equal'](_0x212868['nodes'][0x2]['name'], _0x5109bb['usELZ']), _0x21d083['equal'](_0x212868['nodes'][0x3]['type'], _0x5109bb['BtHqF']), _0x21d083['equal'](_0x212868['nodes'][0x4]['type'], _0x5109bb['BtHqF']), _0x21d083['equal'](_0x3dac01['map']['sources']['length'], 0x2), _0x21d083['equal'](_0x3dac01['map']['sources'][0x0], _0x5109bb['slSAS']);
});
