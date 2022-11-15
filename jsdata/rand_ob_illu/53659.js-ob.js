'use strict';

const _0x12e7 = ['1087631HTjNiA', '405001kEtZvy', '329837toXqHw', '2VUgVvQ', '6951AVhYPZ', '101OwoXoB', '1062666kIzxYA', '784198HMJOoD', '3271355AqJrjm', '../common', 'assert', 'child_process', 'isMainThread', 'skip', 'process.chdir is not available in Workers', 'path', 'self_ref_module', 'printA.js', '" -r self_ref "', 'ifError', 'strictEqual'];

function _0x507b(_0x5e8dc4, _0x24e0b1) {
    return _0x507b = function (_0x47c0d7, _0xac8fde) {
        _0x47c0d7 = _0x47c0d7 - 230;
        const _0x1556a3 = _0x12e7[_0x47c0d7];

        return _0x1556a3;
    }, _0x507b(_0x5e8dc4, _0x24e0b1);
}
const _0x554ae5 = _0x507b;

(function (_0x48c67e, _0x48f281) {
    const _0x130943 = _0x507b;

    while (true) {
        try {
            const _0x33cbd0 = parseInt(_0x130943(0xe6)) + -parseInt(_0x130943(0xe7)) + parseInt(_0x130943(0xe8)) * -parseInt(_0x130943(0xe9)) + -parseInt(_0x130943(0xea)) * parseInt(_0x130943(0xeb)) + -parseInt(_0x130943(0xec)) + -parseInt(_0x130943(0xed)) + parseInt(_0x130943(0xee));

            if (_0x33cbd0 === _0x48f281) break;else _0x48c67e.push(_0x48c67e.shift());
        } catch (_0xd115eb) {
            _0x48c67e.push(_0x48c67e.shift());
        }
    }
})(_0x12e7, 745396);

const common = require(_0x554ae5(0xef));

const fixtures = require('../common/fixtures');

const assert = require(_0x554ae5(0xf0));

var { exec } = require(_0x554ae5(0xf1));

const nodeBinary = process.argv[0];

if (!common[_0x554ae5(0xf2)]) common[_0x554ae5(0xf3)](_0x554ae5(0xf4));

const selfRefModule = fixtures[_0x554ae5(0xf5)](_0x554ae5(0xf6));

const fixtureA = fixtures[_0x554ae5(0xf5)](_0x554ae5(0xf7));

exec('"' + nodeBinary + _0x554ae5(0xf8) + fixtureA + '"', { 'cwd': selfRefModule }, (_0x37fda1, _0x26db5d, _0x3879dc) => {
    const _0x3d53b0 = _0x554ae5;

    assert[_0x3d53b0(0xf9)](_0x37fda1), assert[_0x3d53b0(0xfa)](_0x26db5d, 'A\n');
});
