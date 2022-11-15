import { CssTools } from './minifier';
Tinytest['add']('minifier-css\x20-\x20CSS\x20can\x20be\x20parsed\x20properly\x20into\x20an\x20AST', _0x26c302 => {
    const _0x112fba = CssTools['parseCss']('body\x20{\x20color:\x20\x22red\x22}');
    _0x26c302['equal'](_0x112fba['type'], 'root'), _0x26c302['equal'](_0x112fba['nodes']['length'], 0x37 * -0x20 + 0x1 * -0x10b + 0x7ec);
    const _0x16bde6 = _0x112fba['nodes'][0x15aa + -0x1d1e + 0x9 * 0xd4];
    _0x26c302['equal'](_0x16bde6['type'], 'rule'), _0x26c302['equal'](_0x16bde6['selector'], 'body'), _0x26c302['equal'](_0x16bde6['nodes']['length'], -0x1aaf + 0x133 * -0x9 + 0x13 * 0x1f9);
    const _0xa59638 = _0x16bde6['nodes'][-0xc6b + -0x1586 + -0x21f1 * -0x1];
    _0x26c302['equal'](_0xa59638['type'], 'decl'), _0x26c302['equal'](_0xa59638['prop'], 'color'), _0x26c302['equal'](_0xa59638['value'], '\x22red\x22');
}), Tinytest['add']('minifier-css\x20-\x20CSS\x20AST\x20can\x20be\x20converted\x20back\x20into\x20a\x20string', _0x41ac62 => {
    const _0x30b817 = 'body\x20{\x20color:\x20\x22red\x22}', _0x1a5ede = CssTools['parseCss'](_0x30b817), _0x1e1012 = CssTools['stringifyCss'](_0x1a5ede, { 'sourcemap': !![] });
    _0x41ac62['equal'](_0x30b817, _0x1e1012['code']), _0x41ac62['isNotNull'](_0x1e1012['map']);
}), Tinytest['add']('minifier-css\x20-\x20simple\x20CSS\x20minification', _0x4f58e9 => {
    const _0x59ed48 = (_0x3c3974, _0x2a29db, _0x823831) => {
        _0x4f58e9['equal'](CssTools['minifyCss'](_0x3c3974)[0x141 * 0x7 + -0xcf * 0x18 + 0xaa1], _0x2a29db, _0x823831);
    };
    _0x59ed48('a\x20\x09\x0a{\x20color:\x20red\x20}\x20\x0a', 'a{color:red}', 'whitespace\x20check'), _0x59ed48('a\x20\x09\x0a{\x20color:\x20red;\x20margin:\x201;\x20}\x20\x0a', 'a{color:red;margin:1}', 'only\x20last\x20one\x20loses\x20semicolon'), _0x59ed48('a\x20\x09\x0a{\x20color:\x20red;;;\x20margin:\x201;;;\x20}\x20\x0a', 'a{color:red;margin:1}', 'more\x20semicolons\x20than\x20needed'), _0x59ed48('a\x20,\x20p\x20\x09\x0a{\x20color:\x20red;\x20}\x20\x0a', 'a,p{color:red}', 'multiple\x20selectors'), _0x59ed48('body\x20{}', '', 'removing\x20empty\x20rules'), _0x59ed48('*.my-class\x20{\x20color:\x20#fff;\x20}', '.my-class{color:#fff}', 'removing\x20universal\x20selector'), _0x59ed48('p\x20>\x20*.my-class\x20{\x20color:\x20#fff;\x20}', 'p>.my-class{color:#fff}', 'removing\x20optional\x20whitespace\x20around\x20\x22>\x22\x20in\x20selector'), _0x59ed48('p\x20+\x20\x20*.my-class\x20{\x20color:\x20#fff;\x20}', 'p+.my-class{color:#fff}', 'removing\x20optional\x20whitespace\x20around\x20\x22+\x22\x20in\x20selector'), _0x59ed48('a\x20{\x0a\x20\x20\x20\x20font:12px\x20\x27Helvetica\x27,\x22Arial\x22,\x27Nautica\x27;\x0a\x20\x20\x20\x20background:url(\x22/some/nice/picture.png\x22);\x0a}', 'a{font:12px\x20Helvetica,Arial,Nautica;background:url(/some/nice/picture.png)}', 'removing\x20quotes\x20in\x20font\x20and\x20url\x20(if\x20possible)'), _0x59ed48('/*\x20no\x20comments\x20*/\x20a\x20{\x20color:\x20red;\x20}', 'a{color:red}', 'remove\x20comments');
}), Tinytest['add']('minifier-css\x20-\x20Multiple\x20CSS\x20AST\x27s\x20can\x20be\x20merged\x20into\x20a\x20single\x20CSS\x20AST', _0xb6d246 => {
    const _0x4a8714 = '@import\x20\x22custom.css\x22;\x20body\x20{\x20color:\x20\x22red\x22;\x20}', _0x56fb89 = 'body\x20{\x20color:\x20\x22blue\x22;\x20}', _0x25707f = CssTools['parseCss'](_0x4a8714, { 'from': 'test.css' }), _0x588285 = CssTools['parseCss'](_0x56fb89, { 'from': 'test2.css' }), _0x2a8579 = CssTools['mergeCssAsts']([
            _0x25707f,
            _0x588285
        ]), _0x51fc0a = CssTools['stringifyCss'](_0x2a8579, {
            'sourcemap': !![],
            'inputSourcemaps': ![]
        });
    _0xb6d246['equal'](_0x2a8579['nodes']['length'], -0x83 * 0x38 + -0x16c1 + 0x336c), _0xb6d246['equal'](_0x51fc0a['map']['sources']['length'], 0x21ca + 0x23bb * -0x1 + 0x1f3), _0xb6d246['equal'](_0x51fc0a['map']['sources'][0x45f + -0x1ea4 + 0x10d * 0x19], 'test.css');
}), Tinytest['add']('minifier-css\x20-\x20hoist\x20imports\x20from\x20merged\x20CSS\x20AST\x27s', _0xa6f204 => {
    const _0x21c1db = '@import\x20\x22custom.css\x22;\x20body\x20{\x20color:\x20\x22red\x22;\x20}', _0x2165c2 = '@import\x20\x22other.css\x22;\x20body\x20{\x20color:\x20\x22blue\x22;\x20}', _0x7b0df2 = CssTools['parseCss'](_0x21c1db, { 'from': 'test.css' }), _0x5cfe8b = CssTools['parseCss'](_0x2165c2, { 'from': 'test2.css' }), _0x5e624e = CssTools['mergeCssAsts']([
            _0x7b0df2,
            _0x5cfe8b
        ]), _0x48c2e1 = CssTools['stringifyCss'](_0x5e624e, {
            'sourcemap': !![],
            'inputSourcemaps': ![]
        });
    _0xa6f204['equal'](_0x5e624e['nodes']['length'], -0xad2 + 0x201d + 0x1a3 * -0xd), _0xa6f204['equal'](_0x5e624e['nodes'][-0x5 * -0x343 + -0x1 * 0x1b15 + 0xac6]['name'], 'import'), _0xa6f204['equal'](_0x5e624e['nodes'][-0x4b9 + 0x1702 + -0x6 * 0x30c]['name'], 'import'), _0xa6f204['equal'](_0x5e624e['nodes'][-0x11 * 0x85 + -0x1137 + -0xa * -0x29b]['type'], 'rule'), _0xa6f204['equal'](_0x5e624e['nodes'][-0x1f27 + 0x89e * 0x4 + -0x11a * 0x3]['type'], 'rule'), _0xa6f204['equal'](_0x48c2e1['map']['sources']['length'], -0xd76 + -0x1684 + 0x23fc), _0xa6f204['equal'](_0x48c2e1['map']['sources'][0x1c57 * 0x1 + -0x6da * -0x2 + -0x2a0b], 'test.css');
}), Tinytest['add']('minifier-css\x20-\x20hoist\x20imports\x20after\x20comments\x20from\x20merged\x20CSS\x20AST\x27s', _0x4382ef => {
    const _0x40d191 = '@import\x20\x22custom.css\x22;\x20body\x20{\x20color:\x20\x22red\x22;\x20}', _0x668a4b = '/*\x20comment\x20*/\x20@import\x20\x22other.css\x22;\x20body\x20{\x20color:\x20\x22blue\x22;\x20}', _0x1df2ca = CssTools['parseCss'](_0x40d191, { 'from': 'test.css' }), _0x31c1e3 = CssTools['parseCss'](_0x668a4b, { 'from': 'test2.css' }), _0x5ad00d = CssTools['mergeCssAsts']([
            _0x1df2ca,
            _0x31c1e3
        ]), _0x295f62 = CssTools['stringifyCss'](_0x5ad00d, {
            'sourcemap': !![],
            'inputSourcemaps': ![]
        });
    _0x4382ef['equal'](_0x5ad00d['nodes']['length'], 0x151 * 0x4 + -0x5 * 0x1d2 + 0x3db), _0x4382ef['equal'](_0x5ad00d['nodes'][0x19 * -0x2b + 0x2 * 0x3aa + -0x321]['name'], 'import'), _0x4382ef['equal'](_0x5ad00d['nodes'][-0x3 * -0xa97 + 0xb3e + -0x2b02]['type'], 'comment'), _0x4382ef['equal'](_0x5ad00d['nodes'][0x2d2 * 0x6 + 0x2371 + -0x345b]['name'], 'import'), _0x4382ef['equal'](_0x5ad00d['nodes'][-0x19f9 + 0x20ea + 0x2 * -0x377]['type'], 'rule'), _0x4382ef['equal'](_0x5ad00d['nodes'][0x1 * 0x1edd + 0x212 * 0x4 + 0x1dd * -0x15]['type'], 'rule'), _0x4382ef['equal'](_0x295f62['map']['sources']['length'], 0x5a8 + 0x31b * -0x3 + 0x3 * 0x139), _0x4382ef['equal'](_0x295f62['map']['sources'][0x209c * -0x1 + 0xbb1 + 0x14eb], 'test.css');
});
