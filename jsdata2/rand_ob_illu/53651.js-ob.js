'use strict';

const _0x3c9b = ['777340QbrAOL', '2phyhLi', '1973intFAg', '851PDGuTX', '887256gNQhqq', '171594wpQYAS', '3Poesvx', '1376750kdsgml', '2342vZaElY', '2656qtEFaI', '374QPUhVf', 'assert', 'child_process', '../common/fixtures', 'argv', 'path', 'split', 'length', 'throws_error.js', 'mustCall', 'test', 'throws_error3.js', 'throws_error4.js', 'throws_error5.js', 'throws_error6.js', 'throws_error7.js'];
const _0x2b5ff6 = _0x29c1;

(function (_0x30db4f, _0x337f5c) {
    const _0x129acc = _0x29c1;

    while (true) {
        try {
            const _0x1a42c7 = -parseInt(_0x129acc(0x1a6)) * -parseInt(_0x129acc(0x1a7)) + -parseInt(_0x129acc(0x1a8)) * parseInt(_0x129acc(0x1a9)) + parseInt(_0x129acc(0x1aa)) + parseInt(_0x129acc(0x1ab)) * parseInt(_0x129acc(0x1ac)) + -parseInt(_0x129acc(0x1ad)) + -parseInt(_0x129acc(0x1ae)) + parseInt(_0x129acc(0x1af)) * parseInt(_0x129acc(0x1b0));

            if (_0x1a42c7 === _0x337f5c) break;else _0x30db4f.push(_0x30db4f.shift());
        } catch (_0x1ffc72) {
            _0x30db4f.push(_0x30db4f.shift());
        }
    }
})(_0x3c9b, 891947);
function _0x29c1(_0x4cb365, _0x31ff3c) {
    return _0x29c1 = function (_0x3e1f75, _0xe0b042) {
        _0x3e1f75 = _0x3e1f75 - 422;
        const _0x92c8bf = _0x3c9b[_0x3e1f75];

        return _0x92c8bf;
    }, _0x29c1(_0x4cb365, _0x31ff3c);
}

const common = require('../common');

const assert = require(_0x2b5ff6(0x1b1));

const exec = require(_0x2b5ff6(0x1b2)).exec;

const fixtures = require(_0x2b5ff6(0x1b3));

function errExec(_0x41fb4d, _0x295573) {
    const _0x366432 = _0x2b5ff6;

    const _0xec3571 = '"' + process[_0x366432(0x1b4)][0] + '" "' + fixtures[_0x366432(0x1b5)](_0x41fb4d) + '"';

    return exec(_0xec3571, (_0x2cc751, _0x5bd77f, _0x4fb202) => {
        const _0x2e55ea = _0x366432;

        assert.ok(_0x2cc751), assert.ok(_0x4fb202[_0x2e55ea(0x1b6)]('\n')[_0x2e55ea(0x1b7)]), _0x295573(_0x2cc751, _0x5bd77f, _0x4fb202);
    });
}
const syntaxErrorMessage = /\bSyntaxError\b/;

errExec(_0x2b5ff6(0x1b8), common[_0x2b5ff6(0x1b9)]((_0x28e7e, _0x57de99, _0x5ec024) => {
    const _0x23c4f4 = _0x2b5ff6;

    assert.ok(/blah/[_0x23c4f4(0x1ba)](_0x5ec024));
})), errExec('throws_error2.js', common.mustCall((_0x41460d, _0x43a6ee, _0x52df84) => {
    assert.ok(syntaxErrorMessage.test(_0x52df84));
})), errExec(_0x2b5ff6(0x1bb), common.mustCall((_0x188f65, _0x2077ac, _0x6bc380) => {
    const _0x373ae0 = _0x2b5ff6;

    assert.ok(syntaxErrorMessage[_0x373ae0(0x1ba)](_0x6bc380));
})), errExec(_0x2b5ff6(0x1bc), common.mustCall((_0x90ea7b, _0x54fff7, _0x128091) => {
    const _0x159513 = _0x2b5ff6;

    assert.ok(syntaxErrorMessage[_0x159513(0x1ba)](_0x128091));
})), errExec(_0x2b5ff6(0x1bd), common[_0x2b5ff6(0x1b9)]((_0x16a78a, _0x58760f, _0x5e5e76) => {
    const _0x3cc290 = _0x2b5ff6;

    assert.ok(syntaxErrorMessage[_0x3cc290(0x1ba)](_0x5e5e76));
})), errExec(_0x2b5ff6(0x1be), common[_0x2b5ff6(0x1b9)]((_0x5dd8f1, _0x25fd32, _0x195142) => {
    assert.ok(syntaxErrorMessage.test(_0x195142));
})), errExec(_0x2b5ff6(0x1bf), common[_0x2b5ff6(0x1b9)]((_0x3ab8df, _0x2ab292, _0x584e58) => {
    assert.ok(/throw {\r?\n\^\r?\n{ toString: \[Function: toString] }\r?\n$/.test(_0x584e58));
}));
