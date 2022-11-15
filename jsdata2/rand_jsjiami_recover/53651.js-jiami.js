'use strict';
const common = require('../common');
const assert = require('assert');
const exec = require('child_process')['exec'];
const fixtures = require('../common/fixtures');
function errExec(_0x15e9f8, _0x283ed3) {
    const _0x526059 = '"' + process['argv'][0] + '" "' + fixtures['path'](_0x15e9f8) + '"';
    return exec(_0x526059, (_0x4604b7, _0x379d4d, _0x5b27cc) => {
        if ('UjJPn' === 'UjJPn') {
            assert['ok'](_0x4604b7);
            assert['ok'](_0x5b27cc['split']('\n')['length']);
            _0x283ed3(_0x4604b7, _0x379d4d, _0x5b27cc);
        } else {
            assert['ok'](syntaxErrorMessage['test'](_0x5b27cc));
        }
    });
}
const syntaxErrorMessage = /\bSyntaxError\b/;
errExec('throws_error.js', common['mustCall']((_0x13f66a, _0x5680be, _0x292471) => {
    assert['ok'](/blah/['test'](_0x292471));
}));
errExec('throws_error2.js', common['mustCall']((_0x3e2be0, _0x5f15b6, _0x4c0019) => {
    assert['ok'](syntaxErrorMessage['test'](_0x4c0019));
}));
errExec('throws_error3.js', common['mustCall']((_0x511639, _0x5614a8, _0x181575) => {
    assert['ok'](syntaxErrorMessage['test'](_0x181575));
}));
errExec('throws_error4.js', common['mustCall']((_0x2edbb0, _0x364cbf, _0x58918d) => {
    assert['ok'](syntaxErrorMessage['test'](_0x58918d));
}));
errExec('throws_error5.js', common['mustCall']((_0x464565, _0x2b506a, _0x27d5c6) => {
    assert['ok'](syntaxErrorMessage['test'](_0x27d5c6));
}));
errExec('throws_error6.js', common['mustCall']((_0x50be44, _0x1abcbc, _0x3c07f8) => {
    assert['ok'](syntaxErrorMessage['test'](_0x3c07f8));
}));
errExec('throws_error7.js', common['mustCall']((_0x5067cb, _0x3dddbb, _0x21d04a) => {
    assert['ok'](/throw {\r?\n\^\r?\n{ toString: \[Function: toString] }\r?\n$/['test'](_0x21d04a));
}));