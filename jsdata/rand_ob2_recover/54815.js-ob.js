require('../common');
const assert = require(_0x5b1629(456)), fork = require('child_process')[_0x5b1629(457)];
if (process[_0x5b1629(458)][2] === 'child')
    process[_0x5b1629(459)]('1'), setTimeout(function () {
        const _0x20bd72 = _0x5b1629;
        process[_0x20bd72(459)]('2');
    }, 200), process['on']('disconnect', function () {
        const _0x42e298 = _0x5b1629;
        process[_0x42e298(460)][_0x42e298(461)]('3');
    });
else {
    const child = fork(__filename, [_0x5b1629(462)], { 'silent': !![] }), ipc = [];
    let stdout = '';
    child['on'](_0x5b1629(463), function (_0x20ae4b) {
        const _0x510e03 = _0x5b1629;
        ipc[_0x510e03(464)](_0x20ae4b);
        if (_0x20ae4b === '2')
            child['disconnect']();
    }), child[_0x5b1629(460)]['on']('data', function (_0x2cbcf5) {
        stdout += _0x2cbcf5;
    }), child[_0x5b1629(465)](_0x5b1629(466), function () {
        const _0x250d02 = _0x5b1629;
        assert[_0x250d02(467)](ipc, [
            '1',
            '2'
        ]), assert[_0x250d02(468)](stdout, '3');
    });
}