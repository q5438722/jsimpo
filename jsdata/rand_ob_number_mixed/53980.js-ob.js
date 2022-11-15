'use strict';
require('../common');
const assert = require('assert'), {spawnSync} = require('child_process'), os = require('os'), {signal, status, output} = spawnSync(process['execPath'], ['--security-revert=not-a-cve']);
assert['strictEqual'](signal, null), assert['strictEqual'](status, -0x1781 + 0x697 + -0x10f6 * -0x1), assert['strictEqual'](output[0x1 * -0x1c42 + 0x8 * -0x169 + 0x4 * 0x9e3]['toString'](), process['execPath'] + ':\x20Error:\x20' + ('Attempt\x20to\x20revert\x20an\x20unknown\x20CVE\x20[not-a-cve]' + os['EOL']));
