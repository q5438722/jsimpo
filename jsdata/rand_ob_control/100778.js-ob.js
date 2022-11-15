'use strict';
const fs = require('fs'), vm = require('vm'), globby = require('globby'), sandbox = vm['createContext'](), source = globby['sync']([
        'standalone.js',
        'parser-*.js'
    ], {
        'cwd': process['env']['PRETTIER_DIR'],
        'absolute': !![]
    })['map'](_0x340caf => fs['readFileSync'](_0x340caf, 'utf8'))['join'](';');
vm['runInContext'](source, sandbox);
const allowedGlobalObjects = new Set([
        'prettier',
        'prettierPlugins'
    ]), globalObjects = Object['keys'](sandbox)['filter'](_0x1f76cd => !allowedGlobalObjects['has'](_0x1f76cd));
if (globalObjects['length'] > 0x0)
    throw new Error('Global\x20' + globalObjects['map'](_0xade42d => '\x22' + _0xade42d + '\x22(' + Object['prototype']['toString']['call'](sandbox[_0xade42d])['slice'](0x8, -0x1) + ')')['join'](',\x20') + '\x20should\x20not\x20be\x20exposed.');
module['exports'] = {
    'formatWithCursor'(_0x148c48, _0xb36bbc) {
        return vm['runInNewContext']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20options\x20=\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...$$$options,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20plugins:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...Object.values(prettierPlugins),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...($$$options.plugins\x20||\x20[]),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20prettier.formatWithCursor($$$input,\x20options);\x0a\x20\x20\x20\x20\x20\x20', {
            '$$$input': _0x148c48,
            '$$$options': _0xb36bbc,
            ...sandbox
        });
    },
    '__debug': {
        'parse'(_0x12a957, _0x513743, _0x432d79) {
            return vm['runInNewContext']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20options\x20=\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...$$$options,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20plugins:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...Object.values(prettierPlugins),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...($$$options.plugins\x20||\x20[]),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20prettier.__debug.parse($$$input,\x20options,\x20' + JSON['stringify'](_0x432d79) + ');\x0a\x20\x20\x20\x20\x20\x20\x20\x20', {
                '$$$input': _0x12a957,
                '$$$options': _0x513743,
                ...sandbox
            });
        }
    }
};
