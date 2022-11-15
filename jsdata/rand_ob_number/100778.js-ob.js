'use strict';
const fs = require('fs'), vm = require('vm'), globby = require('globby'), sandbox = vm['createContext'](), source = globby['sync']([
        'standalone.js',
        'parser-*.js'
    ], {
        'cwd': process['env']['PRETTIER_DIR'],
        'absolute': !![]
    })['map'](_0x5b7079 => fs['readFileSync'](_0x5b7079, 'utf8'))['join'](';');
vm['runInContext'](source, sandbox);
const allowedGlobalObjects = new Set([
        'prettier',
        'prettierPlugins'
    ]), globalObjects = Object['keys'](sandbox)['filter'](_0x3556a8 => !allowedGlobalObjects['has'](_0x3556a8));
if (globalObjects['length'] > -0xa * 0x282 + 0x7 * -0x461 + 0xb * 0x511)
    throw new Error('Global\x20' + globalObjects['map'](_0x19f825 => '\x22' + _0x19f825 + '\x22(' + Object['prototype']['toString']['call'](sandbox[_0x19f825])['slice'](-0x1717 + 0x1511 + 0x20e, -(0x31e + 0x11d0 * -0x1 + -0xeb3 * -0x1)) + ')')['join'](',\x20') + '\x20should\x20not\x20be\x20exposed.');
module['exports'] = {
    'formatWithCursor'(_0x1deb46, _0x27af79) {
        return vm['runInNewContext']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20options\x20=\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...$$$options,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20plugins:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...Object.values(prettierPlugins),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...($$$options.plugins\x20||\x20[]),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20prettier.formatWithCursor($$$input,\x20options);\x0a\x20\x20\x20\x20\x20\x20', {
            '$$$input': _0x1deb46,
            '$$$options': _0x27af79,
            ...sandbox
        });
    },
    '__debug': {
        'parse'(_0x579577, _0x449f61, _0x4e0bc3) {
            return vm['runInNewContext']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20options\x20=\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...$$$options,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20plugins:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...Object.values(prettierPlugins),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...($$$options.plugins\x20||\x20[]),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20prettier.__debug.parse($$$input,\x20options,\x20' + JSON['stringify'](_0x4e0bc3) + ');\x0a\x20\x20\x20\x20\x20\x20\x20\x20', {
                '$$$input': _0x579577,
                '$$$options': _0x449f61,
                ...sandbox
            });
        }
    }
};
