'use strict';
const _0x43b5 = [
    'Attempt\x20to\x20revert\x20an\x20unknown\x20CVE\x20[not-a-cve]',
    '464995jsoLLu',
    '95877TKildP',
    '651626BBiomM',
    '732011vhIWXe',
    '149XjafAT',
    '6501jnnPhI',
    '1228820ZydumI',
    '7ACdZeT',
    '174186ZcPNgj',
    'assert',
    'child_process',
    '--security-revert=not-a-cve',
    'strictEqual',
    'toString',
    'execPath'
];
const _0x19ebcf = _0x37ed;
(function (_0x4f50db, _0x47a5b7) {
    const _0x1bd822 = _0x37ed;
    while (!![]) {
        try {
            const _0x5a3d74 = parseInt(_0x1bd822(0xa8)) + parseInt(_0x1bd822(0xa9)) + -parseInt(_0x1bd822(0xaa)) + -parseInt(_0x1bd822(0xab)) + -parseInt(_0x1bd822(0xac)) * parseInt(_0x1bd822(0xad)) + parseInt(_0x1bd822(0xae)) + parseInt(_0x1bd822(0xaf)) * parseInt(_0x1bd822(0xb0));
            if (_0x5a3d74 === _0x47a5b7)
                break;
            else
                _0x4f50db['push'](_0x4f50db['shift']());
        } catch (_0x25b7bc) {
            _0x4f50db['push'](_0x4f50db['shift']());
        }
    }
}(_0x43b5, 0xa0544));
function _0x37ed(_0x38df33, _0xc6acf3) {
    return _0x37ed = function (_0x43b565, _0x37ed52) {
        _0x43b565 = _0x43b565 - 0xa8;
        let _0x142d7c = _0x43b5[_0x43b565];
        return _0x142d7c;
    }, _0x37ed(_0x38df33, _0xc6acf3);
}
require('../common');
const assert = require(_0x19ebcf(0xb1)), {spawnSync} = require(_0x19ebcf(0xb2)), os = require('os'), {signal, status, output} = spawnSync(process['execPath'], [_0x19ebcf(0xb3)]);
assert[_0x19ebcf(0xb4)](signal, null), assert['strictEqual'](status, 0xc), assert['strictEqual'](output[0x2][_0x19ebcf(0xb5)](), process[_0x19ebcf(0xb6)] + ':\x20Error:\x20' + (_0x19ebcf(0xb7) + os['EOL']));
