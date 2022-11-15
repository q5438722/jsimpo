'use strict';
const _0x58dd = [
    'process.on(\x22uncaughtException\x22,\x20()\x20=>\x20console.log(\x22Foobar\x22));',
    'console.log(\x22short\x22)\x0a',
    'end',
    '2oVUyCU',
    '3931KKNcmv',
    '31489mkfphe',
    '1iHLLAb',
    '2gjHmkO',
    '496493pxJstB',
    '1780307lWcCiA',
    '1myglsr',
    '3412soeEjJ',
    '302GzOdOz',
    '324129OhuhMd',
    '3164023xXrjES',
    '1KOTNjh',
    '../common',
    'assert',
    'execPath',
    'stdout',
    'setEncoding',
    'utf8',
    'data',
    'exit',
    'mustCall',
    'shift',
    'deepStrictEqual',
    'Type\x20\x22.help\x22\x20for\x20more\x20information.',
    '>\x20short',
    'undefined',
    'stdin',
    'write'
];
const _0x2426fc = _0x599a;
(function (_0x1dd3a7, _0x59e2bd) {
    const _0x153982 = _0x599a;
    while (!![]) {
        try {
            const _0x167edd = parseInt(_0x153982(0xe2)) * parseInt(_0x153982(0xe3)) + parseInt(_0x153982(0xe4)) * -parseInt(_0x153982(0xe5)) + -parseInt(_0x153982(0xe6)) * -parseInt(_0x153982(0xe7)) + -parseInt(_0x153982(0xe8)) * -parseInt(_0x153982(0xe9)) + parseInt(_0x153982(0xea)) * parseInt(_0x153982(0xeb)) + parseInt(_0x153982(0xec)) + -parseInt(_0x153982(0xed)) * parseInt(_0x153982(0xee));
            if (_0x167edd === _0x59e2bd)
                break;
            else
                _0x1dd3a7['push'](_0x1dd3a7['shift']());
        } catch (_0x538fc9) {
            _0x1dd3a7['push'](_0x1dd3a7['shift']());
        }
    }
}(_0x58dd, 0xe58a4));
function _0x599a(_0x3f7452, _0x2691b4) {
    return _0x599a = function (_0x58ddc1, _0x599afa) {
        _0x58ddc1 = _0x58ddc1 - 0xe2;
        let _0x1b2715 = _0x58dd[_0x58ddc1];
        return _0x1b2715;
    }, _0x599a(_0x3f7452, _0x2691b4);
}
const common = require(_0x2426fc(0xef)), assert = require(_0x2426fc(0xf0)), cp = require('child_process'), child = cp['spawn'](process[_0x2426fc(0xf1)], ['-i']);
let output = '';
child[_0x2426fc(0xf2)][_0x2426fc(0xf3)](_0x2426fc(0xf4)), child[_0x2426fc(0xf2)]['on'](_0x2426fc(0xf5), _0x4c7c22 => {
    output += _0x4c7c22;
}), child['on'](_0x2426fc(0xf6), common[_0x2426fc(0xf7)](() => {
    const _0x554d65 = _0x2426fc, _0x71ccc1 = output['split']('\x0a');
    _0x71ccc1[_0x554d65(0xf8)](), assert[_0x554d65(0xf9)](_0x71ccc1, [
        _0x554d65(0xfa),
        '>\x20Uncaught\x20ReferenceError:\x20x\x20is\x20not\x20defined',
        _0x554d65(0xfb),
        _0x554d65(0xfc),
        '>\x20Foobar',
        '>\x20'
    ]);
})), child[_0x2426fc(0xfd)][_0x2426fc(0xfe)]('x\x0a'), child[_0x2426fc(0xfd)][_0x2426fc(0xfe)](_0x2426fc(0xff) + _0x2426fc(0x100)), child[_0x2426fc(0xfd)][_0x2426fc(0xfe)]('x\x0a'), child['stdin'][_0x2426fc(0x101)]();
