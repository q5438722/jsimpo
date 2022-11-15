'use strict';

const _0x5ce5 = ['571800RTPgqh', '../common', 'worker_threads', '\nconst { parentPort } = require(\'worker_threads\');\nparentPort.once(\'message\', (msg) => {\n  parentPort.postMessage(msg);\n});\n', 'once', 'beforeExit', 'ref', 'postMessage', 'message', 'mustCall', 'sXlUH', 'unref', '130776JVaOsg', '1051gWOVXD', '275LmkMcH', '93653BZLkmQ', '5TDDdjn', '1lOjyHr', '68179oZREfT', '152157wMbjaw', '197968ivpQgf'];
const _0x13371f = _0x5321;

(function (_0x131516, _0x2ed013) {
    const _0x509d4f = _0x5321;

    while (true) {
        try {
            const _0x4cb9c7 = -parseInt(_0x509d4f(0x1ae)) + -parseInt(_0x509d4f(0x1af)) * parseInt(_0x509d4f(0x1b0)) + -parseInt(_0x509d4f(0x1b1)) * -parseInt(_0x509d4f(0x1b2)) + parseInt(_0x509d4f(0x1b3)) * -parseInt(_0x509d4f(0x1b4)) + parseInt(_0x509d4f(0x1b5)) + -parseInt(_0x509d4f(0x1b6)) + parseInt(_0x509d4f(0x1b7));

            if (_0x4cb9c7 === _0x2ed013) break;else _0x131516.push(_0x131516.shift());
        } catch (_0x95c74d) {
            _0x131516.push(_0x131516.shift());
        }
    }
})(_0x5ce5, 506274);
function _0x5321(_0x42a19e, _0x974b8e) {
    return _0x5321 = function (_0x498352, _0x15cfca) {
        _0x498352 = _0x498352 - 430;
        const _0x391050 = _0x5ce5[_0x498352];

        return _0x391050;
    }, _0x5321(_0x42a19e, _0x974b8e);
}

const common = require(_0x13371f(0x1b8));

var { Worker } = require(_0x13371f(0x1b9));

const w = new Worker(_0x13371f(0x1ba), { 'eval': true });

process[_0x13371f(0x1bb)](_0x13371f(0x1bc), common.mustCall(() => {
    const _0x229681 = _0x13371f;
    const _0x2517c0 = {
        'QwnTl': _0x229681(0x1bc),
        'qJyJf': 'world'
    };

    console.log(_0x2517c0.QwnTl), w[_0x229681(0x1bd)](), w[_0x229681(0x1be)]({ 'hello': _0x2517c0.qJyJf });
})), w[_0x13371f(0x1bb)](_0x13371f(0x1bf), common.mustCall(_0x9420a5 => {
    const _0x55687c = _0x13371f;

    console.log(_0x55687c(0x1bf), _0x9420a5);
})), w.on('exit', common[_0x13371f(0x1c0)](() => {
    const _0x40921b = _0x13371f;
    const _0x2fe208 = { 'sXlUH': 'exit' };

    console.log(_0x2fe208[_0x40921b(0x1c1)]);
})), w[_0x13371f(0x1c2)]();
