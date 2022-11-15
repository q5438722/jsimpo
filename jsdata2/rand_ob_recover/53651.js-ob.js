function _0x29c1(_0x4cb365, _0x31ff3c) {
    return _0x29c1 = function (_0x3e1f75, _0xe0b042) {
        _0x3e1f75 = _0x3e1f75 - (-1 * -1832 + -1010 + -400);
        let _0x92c8bf = _0x3c9b[_0x3e1f75];
        return _0x92c8bf;
    }, _0x29c1(_0x4cb365, _0x31ff3c);
}
const common = require('../common'), assert = require(_0x2b5ff6(433)), exec = require(_0x2b5ff6(434))['exec'], fixtures = require(_0x2b5ff6(435));
function errExec(_0x41fb4d, _0x295573) {
    const _0x366432 = _0x2b5ff6, _0xec3571 = '"' + process[_0x366432(436)][-5953 + 6358 + 81 * -5] + '" "' + fixtures[_0x366432(437)](_0x41fb4d) + '"';
    return exec(_0xec3571, (_0x2cc751, _0x5bd77f, _0x4fb202) => {
        const _0x2e55ea = _0x366432;
        assert['ok'](_0x2cc751), assert['ok'](_0x4fb202[_0x2e55ea(438)]('\n')[_0x2e55ea(439)]), _0x295573(_0x2cc751, _0x5bd77f, _0x4fb202);
    });
}
const syntaxErrorMessage = /\bSyntaxError\b/;
errExec(_0x2b5ff6(440), common[_0x2b5ff6(441)]((_0x28e7e, _0x57de99, _0x5ec024) => {
    const _0x23c4f4 = _0x2b5ff6;
    assert['ok'](/blah/[_0x23c4f4(442)](_0x5ec024));
})), errExec('throws_error2.js', common['mustCall']((_0x41460d, _0x43a6ee, _0x52df84) => {
    assert['ok'](syntaxErrorMessage['test'](_0x52df84));
})), errExec(_0x2b5ff6(443), common['mustCall']((_0x188f65, _0x2077ac, _0x6bc380) => {
    const _0x373ae0 = _0x2b5ff6;
    assert['ok'](syntaxErrorMessage[_0x373ae0(442)](_0x6bc380));
})), errExec(_0x2b5ff6(444), common['mustCall']((_0x90ea7b, _0x54fff7, _0x128091) => {
    const _0x159513 = _0x2b5ff6;
    assert['ok'](syntaxErrorMessage[_0x159513(442)](_0x128091));
})), errExec(_0x2b5ff6(445), common[_0x2b5ff6(441)]((_0x16a78a, _0x58760f, _0x5e5e76) => {
    const _0x3cc290 = _0x2b5ff6;
    assert['ok'](syntaxErrorMessage[_0x3cc290(442)](_0x5e5e76));
})), errExec(_0x2b5ff6(446), common[_0x2b5ff6(441)]((_0x5dd8f1, _0x25fd32, _0x195142) => {
    assert['ok'](syntaxErrorMessage['test'](_0x195142));
})), errExec(_0x2b5ff6(447), common[_0x2b5ff6(441)]((_0x3ab8df, _0x2ab292, _0x584e58) => {
    assert['ok'](/throw {\r?\n\^\r?\n{ toString: \[Function: toString] }\r?\n$/['test'](_0x584e58));
}));