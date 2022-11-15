'use strict';
const _0x4a99 = [
    '534286oMFqif',
    '587022oWrrwZ',
    '165JCFvMd',
    '3142YOvlBt',
    '214730UWFMTL',
    '281937YfvrRf',
    '7fmGGuO',
    'assert',
    'fork',
    'argv',
    'send',
    'stdout',
    'write',
    'child',
    'message',
    'push',
    'once',
    'exit',
    'deepStrictEqual',
    'strictEqual',
    '3069AamwnG',
    '114VIjrqf',
    '656636XJgRFx'
];
const _0x5b1629 = _0x901c;
function _0x901c(_0xea9fbe, _0x4b31bc) {
    return _0x901c = function (_0x4a9988, _0x901ce1) {
        _0x4a9988 = _0x4a9988 - 0x1be;
        let _0x5db0c0 = _0x4a99[_0x4a9988];
        return _0x5db0c0;
    }, _0x901c(_0xea9fbe, _0x4b31bc);
}
(function (_0x51fee7, _0x3a2be1) {
    const _0x207039 = _0x901c;
    while (!![]) {
        try {
            const _0x4ce23b = -parseInt(_0x207039(0x1be)) * parseInt(_0x207039(0x1bf)) + -parseInt(_0x207039(0x1c0)) + -parseInt(_0x207039(0x1c1)) + -parseInt(_0x207039(0x1c2)) + parseInt(_0x207039(0x1c3)) * parseInt(_0x207039(0x1c4)) + parseInt(_0x207039(0x1c5)) + -parseInt(_0x207039(0x1c6)) * -parseInt(_0x207039(0x1c7));
            if (_0x4ce23b === _0x3a2be1)
                break;
            else
                _0x51fee7['push'](_0x51fee7['shift']());
        } catch (_0x30e2b3) {
            _0x51fee7['push'](_0x51fee7['shift']());
        }
    }
}(_0x4a99, 0x8d55d));
require('../common');
const assert = require(_0x5b1629(0x1c8)), fork = require('child_process')[_0x5b1629(0x1c9)];
if (process[_0x5b1629(0x1ca)][0x2] === 'child')
    process[_0x5b1629(0x1cb)]('1'), setTimeout(function () {
        const _0x20bd72 = _0x5b1629;
        process[_0x20bd72(0x1cb)]('2');
    }, 0xc8), process['on']('disconnect', function () {
        const _0x42e298 = _0x5b1629;
        process[_0x42e298(0x1cc)][_0x42e298(0x1cd)]('3');
    });
else {
    const child = fork(__filename, [_0x5b1629(0x1ce)], { 'silent': !![] }), ipc = [];
    let stdout = '';
    child['on'](_0x5b1629(0x1cf), function (_0x20ae4b) {
        const _0x510e03 = _0x5b1629;
        ipc[_0x510e03(0x1d0)](_0x20ae4b);
        if (_0x20ae4b === '2')
            child['disconnect']();
    }), child[_0x5b1629(0x1cc)]['on']('data', function (_0x2cbcf5) {
        stdout += _0x2cbcf5;
    }), child[_0x5b1629(0x1d1)](_0x5b1629(0x1d2), function () {
        const _0x250d02 = _0x5b1629;
        assert[_0x250d02(0x1d3)](ipc, [
            '1',
            '2'
        ]), assert[_0x250d02(0x1d4)](stdout, '3');
    });
}
