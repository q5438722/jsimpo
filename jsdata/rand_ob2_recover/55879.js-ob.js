const common = require('../common'), {Worker} = require(_0x40d741(384)), w = new Worker('\nconst { parentPort } = require(\'worker_threads\');\nparentPort.once(\'message\', (msg) => {\n  parentPort.postMessage(msg);\n});\n', { 'eval': !![] });
function _0x5ddd(_0xc1896c, _0x783d2e) {
    return _0x5ddd = function (_0x40ba66, _0x5ddd0e) {
        _0x40ba66 = _0x40ba66 - 375;
        let _0x2bafa6 = _0x40ba[_0x40ba66];
        return _0x2bafa6;
    }, _0x5ddd(_0xc1896c, _0x783d2e);
}
process[_0x40d741(385)](_0x40d741(386), common[_0x40d741(387)](() => {
    const _0x46b847 = _0x40d741;
    console[_0x46b847(388)](_0x46b847(386)), w['ref'](), w['postMessage']({ 'hello': _0x46b847(389) });
})), w['once']('message', common[_0x40d741(387)](_0x39eb93 => {
    const _0x244ac9 = _0x40d741;
    console[_0x244ac9(388)](_0x244ac9(390), _0x39eb93);
})), w['on'](_0x40d741(391), common[_0x40d741(387)](() => {
    const _0x5f1e1f = _0x40d741;
    console[_0x5f1e1f(388)]('exit');
})), w[_0x40d741(392)]();