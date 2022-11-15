'use strict';
const common = require('../common'), fixtures = require('../common/fixtures'), assert = require('assert'), {exec} = require('child_process'), nodeBinary = process['argv'][0x1 * 0x1345 + 0xd46 * -0x1 + 0x5 * -0x133];
if (!common['isMainThread'])
    common['skip']('process.chdir\x20is\x20not\x20available\x20in\x20Workers');
const selfRefModule = fixtures['path']('self_ref_module'), fixtureA = fixtures['path']('printA.js');
exec('\x22' + nodeBinary + '\x22\x20-r\x20self_ref\x20\x22' + fixtureA + '\x22', { 'cwd': selfRefModule }, (_0x227336, _0x114f1a, _0x132ed5) => {
    assert['ifError'](_0x227336), assert['strictEqual'](_0x114f1a, 'A\x0a');
});
