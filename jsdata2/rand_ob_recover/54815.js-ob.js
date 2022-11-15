require('../common');
const assert = require('assert'), fork = require(_0x1a090d(260))[_0x1a090d(261)];
if (process[_0x1a090d(262)][3 * 2722 + -2 * -2507 + -13178] === _0x1a090d(263))
    process[_0x1a090d(264)]('1'), setTimeout(function () {
        const _0xa81a1b = _0x1a090d;
        process[_0xa81a1b(264)]('2');
    }, 4786 * -1 + -41 * -17 + 4289), process['on']('disconnect', function () {
        const _0x313fe0 = _0x1a090d;
        process['stdout'][_0x313fe0(265)]('3');
    });
else {
    const child = fork(__filename, [_0x1a090d(263)], { 'silent': !![] }), ipc = [];
    let stdout = '';
    child['on'](_0x1a090d(266), function (_0x19f9ed) {
        const _0x5c7c71 = _0x1a090d, _0x53cb50 = {
                'HpKBy': function (_0x71736, _0xc4c838) {
                    return _0x71736 === _0xc4c838;
                }
            };
        ipc[_0x5c7c71(267)](_0x19f9ed);
        if (_0x53cb50[_0x5c7c71(268)](_0x19f9ed, '2'))
            child['disconnect']();
    }), child[_0x1a090d(269)]['on']('data', function (_0x2e97dc) {
        stdout += _0x2e97dc;
    }), child['once'](_0x1a090d(270), function () {
        const _0x75cd68 = _0x1a090d;
        assert[_0x75cd68(271)](ipc, [
            '1',
            '2'
        ]), assert['strictEqual'](stdout, '3');
    });
}