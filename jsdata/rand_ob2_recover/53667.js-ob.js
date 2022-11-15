function _0x599a(_0x3f7452, _0x2691b4) {
    return _0x599a = function (_0x58ddc1, _0x599afa) {
        _0x58ddc1 = _0x58ddc1 - 226;
        let _0x1b2715 = _0x58dd[_0x58ddc1];
        return _0x1b2715;
    }, _0x599a(_0x3f7452, _0x2691b4);
}
const common = require(_0x2426fc(239)), assert = require(_0x2426fc(240)), cp = require('child_process'), child = cp['spawn'](process[_0x2426fc(241)], ['-i']);
let output = '';
child[_0x2426fc(242)][_0x2426fc(243)](_0x2426fc(244)), child[_0x2426fc(242)]['on'](_0x2426fc(245), _0x4c7c22 => {
    output += _0x4c7c22;
}), child['on'](_0x2426fc(246), common[_0x2426fc(247)](() => {
    const _0x554d65 = _0x2426fc, _0x71ccc1 = output['split']('\n');
    _0x71ccc1[_0x554d65(248)](), assert[_0x554d65(249)](_0x71ccc1, [
        _0x554d65(250),
        '> Uncaught ReferenceError: x is not defined',
        _0x554d65(251),
        _0x554d65(252),
        '> Foobar',
        '> '
    ]);
})), child[_0x2426fc(253)][_0x2426fc(254)]('x\n'), child[_0x2426fc(253)][_0x2426fc(254)](_0x2426fc(255) + _0x2426fc(256)), child[_0x2426fc(253)][_0x2426fc(254)]('x\n'), child['stdin'][_0x2426fc(257)]();