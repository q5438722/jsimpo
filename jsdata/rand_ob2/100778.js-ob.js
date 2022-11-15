'use strict';
const _0x40b2 = [
    '79kgCXEE',
    '256546bAxQin',
    '193289djKKbB',
    '2fleOqZ',
    '1328876QCdwRF',
    'globby',
    'createContext',
    'sync',
    'standalone.js',
    'parser-*.js',
    'env',
    'PRETTIER_DIR',
    'readFileSync',
    'join',
    'runInContext',
    'has',
    'length',
    'Global\x20',
    'map',
    'prototype',
    'toString',
    'call',
    'slice',
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20options\x20=\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...$$$options,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20plugins:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...Object.values(prettierPlugins),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...($$$options.plugins\x20||\x20[]),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20prettier.formatWithCursor($$$input,\x20options);\x0a\x20\x20\x20\x20\x20\x20',
    'runInNewContext',
    ');\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
    '1028754EynHUD',
    '1745119xkwxZj',
    '536826EppbTR',
    '127YaRdXH'
];
const _0xffceac = _0x37bc;
(function (_0x57d474, _0x32e616) {
    const _0x7b67bf = _0x37bc;
    while (!![]) {
        try {
            const _0x262b15 = -parseInt(_0x7b67bf(0x1ac)) + -parseInt(_0x7b67bf(0x1ad)) + parseInt(_0x7b67bf(0x1ae)) + parseInt(_0x7b67bf(0x1af)) * parseInt(_0x7b67bf(0x1b0)) + parseInt(_0x7b67bf(0x1b1)) + parseInt(_0x7b67bf(0x1b2)) + -parseInt(_0x7b67bf(0x1b3)) * -parseInt(_0x7b67bf(0x1b4));
            if (_0x262b15 === _0x32e616)
                break;
            else
                _0x57d474['push'](_0x57d474['shift']());
        } catch (_0x3bca49) {
            _0x57d474['push'](_0x57d474['shift']());
        }
    }
}(_0x40b2, 0xd6fbd));
const fs = require('fs'), vm = require('vm'), globby = require(_0xffceac(0x1b5)), sandbox = vm[_0xffceac(0x1b6)](), source = globby[_0xffceac(0x1b7)]([
        _0xffceac(0x1b8),
        _0xffceac(0x1b9)
    ], {
        'cwd': process[_0xffceac(0x1ba)][_0xffceac(0x1bb)],
        'absolute': !![]
    })['map'](_0x45988b => fs[_0xffceac(0x1bc)](_0x45988b, 'utf8'))[_0xffceac(0x1bd)](';');
vm[_0xffceac(0x1be)](source, sandbox);
function _0x37bc(_0x1abeb2, _0x1abe8c) {
    return _0x37bc = function (_0x40b25c, _0x37bc75) {
        _0x40b25c = _0x40b25c - 0x1ac;
        let _0x2dfac2 = _0x40b2[_0x40b25c];
        return _0x2dfac2;
    }, _0x37bc(_0x1abeb2, _0x1abe8c);
}
const allowedGlobalObjects = new Set([
        'prettier',
        'prettierPlugins'
    ]), globalObjects = Object['keys'](sandbox)['filter'](_0xbecb9e => !allowedGlobalObjects[_0xffceac(0x1bf)](_0xbecb9e));
if (globalObjects[_0xffceac(0x1c0)] > 0x0)
    throw new Error(_0xffceac(0x1c1) + globalObjects[_0xffceac(0x1c2)](_0x107a94 => '\x22' + _0x107a94 + '\x22(' + Object[_0xffceac(0x1c3)][_0xffceac(0x1c4)][_0xffceac(0x1c5)](sandbox[_0x107a94])[_0xffceac(0x1c6)](0x8, -0x1) + ')')[_0xffceac(0x1bd)](',\x20') + '\x20should\x20not\x20be\x20exposed.');
module['exports'] = {
    'formatWithCursor'(_0xb58f9c, _0x3202e7) {
        const _0x43cd70 = _0xffceac;
        return vm['runInNewContext'](_0x43cd70(0x1c7), {
            '$$$input': _0xb58f9c,
            '$$$options': _0x3202e7,
            ...sandbox
        });
    },
    '__debug': {
        'parse'(_0x2afa0c, _0x17f914, _0x1adb8c) {
            const _0x5d1c97 = _0xffceac;
            return vm[_0x5d1c97(0x1c8)]('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20options\x20=\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...$$$options,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20plugins:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...Object.values(prettierPlugins),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...($$$options.plugins\x20||\x20[]),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20prettier.__debug.parse($$$input,\x20options,\x20' + JSON['stringify'](_0x1adb8c) + _0x5d1c97(0x1c9), {
                '$$$input': _0x2afa0c,
                '$$$options': _0x17f914,
                ...sandbox
            });
        }
    }
};
