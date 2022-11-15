const fs = require('fs'), path = require('path'), pluginsDirPath = path[_0x556213(479)](__dirname, '../packages', _0x556213(480)), pluginRegEx = new RegExp(_0x556213(481));
function generatePluginDoc(_0x4d5284) {
    const _0x3b62dc = _0x556213, _0x446905 = path['resolve'](__dirname, _0x3b62dc(482), _0x3b62dc(480), _0x4d5284, 'README.md'), _0xcd2632 = fs[_0x3b62dc(483)](_0x446905), _0x1a165e = path['resolve'](__dirname, _0x3b62dc(484), _0x3b62dc(485), _0x4d5284['replace'](_0x3b62dc(481), '') + _0x3b62dc(486));
    fs[_0x3b62dc(487)](_0x1a165e, _0xcd2632, () => {
    });
}
function _0x1f28(_0x42787e, _0x41ddf0) {
    return _0x1f28 = function (_0x53941c, _0x1f2889) {
        _0x53941c = _0x53941c - 469;
        let _0x5ed682 = _0x5394[_0x53941c];
        return _0x5ed682;
    }, _0x1f28(_0x42787e, _0x41ddf0);
}
const genDocs = module[_0x556213(488)] = async () => {
    const _0x29c4f1 = _0x556213;
    fs[_0x29c4f1(489)](pluginsDirPath, (_0xe91202, _0x599b2d) => {
        const _0x4a4873 = _0x29c4f1;
        _0x599b2d[_0x4a4873(490)](_0x514994 => {
            const _0x183db9 = _0x4a4873;
            pluginRegEx[_0x183db9(491)](_0x514994) && generatePluginDoc(_0x514994);
        });
    });
};
genDocs()[_0x556213(492)](_0xc16722 => {
    const _0x2b5ecd = _0x556213;
    console['error'](_0xc16722), process[_0x2b5ecd(493)](1);
});