function _0x37ed(_0x38df33, _0xc6acf3) {
    return _0x37ed = function (_0x43b565, _0x37ed52) {
        _0x43b565 = _0x43b565 - 168;
        let _0x142d7c = _0x43b5[_0x43b565];
        return _0x142d7c;
    }, _0x37ed(_0x38df33, _0xc6acf3);
}
require('../common');
const assert = require(_0x19ebcf(177)), {spawnSync} = require(_0x19ebcf(178)), os = require('os'), {signal, status, output} = spawnSync(process['execPath'], [_0x19ebcf(179)]);
assert[_0x19ebcf(180)](signal, null), assert['strictEqual'](status, 12), assert['strictEqual'](output[2][_0x19ebcf(181)](), process[_0x19ebcf(182)] + ': Error: ' + (_0x19ebcf(183) + os['EOL']));