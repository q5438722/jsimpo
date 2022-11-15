const dalek = require('./dalek'), Grim = require('grim');
module['exports'] = {
    'activate'() {
        atom['packages']['onDidActivateInitialPackages'](async () => {
            const _0x245e3f = await dalek['enumerate']();
            for (let _0x2fd32e = 0x1441 + -0x1 * 0xf35 + -0x4c * 0x11; _0x2fd32e < _0x245e3f['length']; _0x2fd32e++) {
                const _0x3f774c = _0x245e3f[_0x2fd32e];
                Grim['deprecate']('You\x20have\x20the\x20core\x20package\x20\x22' + _0x3f774c + '\x22\x20installed\x20as\x20a\x20community\x20package.\x20See\x20https://github.com/atom/atom/blob/master/packages/dalek/README.md\x20for\x20how\x20this\x20causes\x20problems\x20and\x20instructions\x20on\x20how\x20to\x20correct\x20the\x20situation.', { 'packageName': _0x3f774c });
            }
        });
    }
};
