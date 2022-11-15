require(_0x28c00f(188));
const assert = require(_0x28c00f(189)), fork = require('child_process')[_0x28c00f(190)];
if (process[_0x28c00f(191)][2] === _0x28c00f(192))
    process[_0x28c00f(193)]('1'), setTimeout(function () {
        const _0x379a74 = _0x28c00f;
        process[_0x379a74(193)]('2');
    }, 200), process['on'](_0x28c00f(194), function () {
        const _0x2eb1b5 = _0x28c00f;
        process[_0x2eb1b5(195)][_0x2eb1b5(196)]('3');
    });
else {
    const child = fork(__filename, [_0x28c00f(192)], { 'silent': !![] }), ipc = [];
    let stdout = '';
    child['on']('message', function (_0x42ab09) {
        const _0x1f7b6e = _0x28c00f;
        ipc[_0x1f7b6e(197)](_0x42ab09);
        if (_0x42ab09 === '2')
            child[_0x1f7b6e(194)]();
    }), child['stdout']['on']('data', function (_0x494649) {
        stdout += _0x494649;
    }), child[_0x28c00f(198)]('exit', function () {
        assert['deepStrictEqual'](ipc, [
            '1',
            '2'
        ]), assert['strictEqual'](stdout, '3');
    });
}