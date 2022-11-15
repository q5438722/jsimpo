'use strict';
const _0xc957 = [
    'utf8',
    'join',
    'runInContext',
    'prettier',
    'prettierPlugins',
    'filter',
    'has',
    'Global\x20',
    'prototype',
    'toString',
    'call',
    'slice',
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20options\x20=\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...$$$options,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20plugins:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...Object.values(prettierPlugins),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...($$$options.plugins\x20||\x20[]),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20prettier.formatWithCursor($$$input,\x20options);\x0a\x20\x20\x20\x20\x20\x20',
    'stringify',
    ');\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
    '772792nwbqpA',
    '1273332mxyjSF',
    '16161PtDtmK',
    '82OSMJIZ',
    '380700ASoEOE',
    '314477htedif',
    '1142967zdnZYT',
    '2814959VofyRY',
    '1DBjCMJ',
    'globby',
    'createContext',
    'sync',
    'standalone.js',
    'parser-*.js',
    'env',
    'readFileSync'
];
const _0x151356 = _0x3e95;
(function (_0x5b9ff7, _0x11c5e2) {
    const _0x42ddc9 = _0x3e95;
    while (!![]) {
        try {
            const _0x16b10b = -parseInt(_0x42ddc9(0x10d)) + parseInt(_0x42ddc9(0x10e)) + -parseInt(_0x42ddc9(0x10f)) * parseInt(_0x42ddc9(0x110)) + -parseInt(_0x42ddc9(0x111)) + parseInt(_0x42ddc9(0x112)) + -parseInt(_0x42ddc9(0x113)) + -parseInt(_0x42ddc9(0x114)) * -parseInt(_0x42ddc9(0x115));
            if (_0x16b10b === _0x11c5e2)
                break;
            else
                _0x5b9ff7['push'](_0x5b9ff7['shift']());
        } catch (_0x408ce1) {
            _0x5b9ff7['push'](_0x5b9ff7['shift']());
        }
    }
}(_0xc957, 0x56ba7 + -0x178d08 + 0x1e0c94));
const fs = require('fs'), vm = require('vm'), globby = require(_0x151356(0x116)), sandbox = vm[_0x151356(0x117)](), source = globby[_0x151356(0x118)]([
        _0x151356(0x119),
        _0x151356(0x11a)
    ], {
        'cwd': process[_0x151356(0x11b)]['PRETTIER_DIR'],
        'absolute': !![]
    })['map'](_0x33b885 => fs[_0x151356(0x11c)](_0x33b885, _0x151356(0x11d)))[_0x151356(0x11e)](';');
vm[_0x151356(0x11f)](source, sandbox);
const allowedGlobalObjects = new Set([
        _0x151356(0x120),
        _0x151356(0x121)
    ]), globalObjects = Object['keys'](sandbox)[_0x151356(0x122)](_0x999110 => !allowedGlobalObjects[_0x151356(0x123)](_0x999110));
if (globalObjects['length'] > 0x20f6 + -0x1f90 + -0x166)
    throw new Error(_0x151356(0x124) + globalObjects['map'](_0x218e86 => '\x22' + _0x218e86 + '\x22(' + Object[_0x151356(0x125)][_0x151356(0x126)][_0x151356(0x127)](sandbox[_0x218e86])[_0x151356(0x128)](0x1fb + 0xa0e + -0xc01, -(-0x12e * 0xc + 0x4f * -0x6f + 0x306a)) + ')')[_0x151356(0x11e)](',\x20') + '\x20should\x20not\x20be\x20exposed.');
function _0x3e95(_0x3dff90, _0x16c81a) {
    return _0x3e95 = function (_0x1488b8, _0x47a5d4) {
        _0x1488b8 = _0x1488b8 - (0x10a0 + 0x2f * -0x95 + 0xbc8);
        let _0x1d71aa = _0xc957[_0x1488b8];
        return _0x1d71aa;
    }, _0x3e95(_0x3dff90, _0x16c81a);
}
module['exports'] = {
    'formatWithCursor'(_0x3f16ac, _0x11dfa2) {
        const _0x4a342a = _0x151356;
        return vm['runInNewContext'](_0x4a342a(0x129), {
            '$$$input': _0x3f16ac,
            '$$$options': _0x11dfa2,
            ...sandbox
        });
    },
    '__debug': {
        'parse'(_0x41023c, _0x5c0f5a, _0x112984) {
            const _0x4533d4 = _0x151356;
            return vm['runInNewContext']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20options\x20=\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...$$$options,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20plugins:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...Object.values(prettierPlugins),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...($$$options.plugins\x20||\x20[]),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20prettier.__debug.parse($$$input,\x20options,\x20' + JSON[_0x4533d4(0x12a)](_0x112984) + _0x4533d4(0x12b), {
                '$$$input': _0x41023c,
                '$$$options': _0x5c0f5a,
                ...sandbox
            });
        }
    }
};
