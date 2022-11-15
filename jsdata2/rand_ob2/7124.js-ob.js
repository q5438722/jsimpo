const _0x5394 = [
    'resolve',
    '@vue',
    'cli-plugin-',
    '../packages',
    'readFileSync',
    '../docs',
    'core-plugins',
    '.md',
    'writeFile',
    'exports',
    'readdir',
    'forEach',
    'test',
    'catch',
    'exit',
    '709388WghCCn',
    '1bdLXRk',
    '1449990SJvhaW',
    '6NDNtCR',
    '22963THYpwY',
    '955318sWhYbZ',
    '936661NCdZLh',
    '197dsYWhD',
    '37dgAdvF',
    '1494357iUcFcT'
];
const _0x556213 = _0x1f28;
(function (_0x28024e, _0x241064) {
    const _0x3d0728 = _0x1f28;
    while (!![]) {
        try {
            const _0x1a9134 = parseInt(_0x3d0728(0x1d5)) * parseInt(_0x3d0728(0x1d6)) + parseInt(_0x3d0728(0x1d7)) + -parseInt(_0x3d0728(0x1d8)) * -parseInt(_0x3d0728(0x1d9)) + -parseInt(_0x3d0728(0x1da)) + parseInt(_0x3d0728(0x1db)) + -parseInt(_0x3d0728(0x1dc)) * parseInt(_0x3d0728(0x1dd)) + -parseInt(_0x3d0728(0x1de));
            if (_0x1a9134 === _0x241064)
                break;
            else
                _0x28024e['push'](_0x28024e['shift']());
        } catch (_0x3812c9) {
            _0x28024e['push'](_0x28024e['shift']());
        }
    }
}(_0x5394, 0xbda95));
const fs = require('fs'), path = require('path'), pluginsDirPath = path[_0x556213(0x1df)](__dirname, '../packages', _0x556213(0x1e0)), pluginRegEx = new RegExp(_0x556213(0x1e1));
function generatePluginDoc(_0x4d5284) {
    const _0x3b62dc = _0x556213, _0x446905 = path['resolve'](__dirname, _0x3b62dc(0x1e2), _0x3b62dc(0x1e0), _0x4d5284, 'README.md'), _0xcd2632 = fs[_0x3b62dc(0x1e3)](_0x446905), _0x1a165e = path['resolve'](__dirname, _0x3b62dc(0x1e4), _0x3b62dc(0x1e5), _0x4d5284['replace'](_0x3b62dc(0x1e1), '') + _0x3b62dc(0x1e6));
    fs[_0x3b62dc(0x1e7)](_0x1a165e, _0xcd2632, () => {
    });
}
function _0x1f28(_0x42787e, _0x41ddf0) {
    return _0x1f28 = function (_0x53941c, _0x1f2889) {
        _0x53941c = _0x53941c - 0x1d5;
        let _0x5ed682 = _0x5394[_0x53941c];
        return _0x5ed682;
    }, _0x1f28(_0x42787e, _0x41ddf0);
}
const genDocs = module[_0x556213(0x1e8)] = async () => {
    const _0x29c4f1 = _0x556213;
    fs[_0x29c4f1(0x1e9)](pluginsDirPath, (_0xe91202, _0x599b2d) => {
        const _0x4a4873 = _0x29c4f1;
        _0x599b2d[_0x4a4873(0x1ea)](_0x514994 => {
            const _0x183db9 = _0x4a4873;
            pluginRegEx[_0x183db9(0x1eb)](_0x514994) && generatePluginDoc(_0x514994);
        });
    });
};
genDocs()[_0x556213(0x1ec)](_0xc16722 => {
    const _0x2b5ecd = _0x556213;
    console['error'](_0xc16722), process[_0x2b5ecd(0x1ed)](0x1);
});
