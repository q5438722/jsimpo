const _0x2a6a = [
    'join',
    'v4.0.0',
    'theme-spacing',
    'update\x20theme\x20spacing\x20API',
    './theme-spacing-api.test/expected.js',
    'equal',
    'The\x20transformed\x20version\x20should\x20be\x20correct',
    'update\x20theme\x20spacing\x20API\x20for\x20destructured',
    './theme-spacing-api.test/actual_destructured.js',
    './theme-spacing-api.test/expected_destructured.js',
    '78alGqDv',
    '8139pHYJTU',
    '86311GhPRSZ',
    '7EMGLab',
    '491959JIdGYR',
    '8rCIvfi',
    '86764jgnbNg',
    '50157cdXINM',
    '371430BPWrTQ',
    '49043dJcsrb',
    'replace'
];
(function (_0x488560, _0x317926) {
    const _0x21020e = _0x3ab3;
    while (!![]) {
        try {
            const _0x1eda00 = parseInt(_0x21020e(0x128)) * -parseInt(_0x21020e(0x129)) + parseInt(_0x21020e(0x12a)) * parseInt(_0x21020e(0x12b)) + -parseInt(_0x21020e(0x12c)) + -parseInt(_0x21020e(0x12d)) * -parseInt(_0x21020e(0x12e)) + parseInt(_0x21020e(0x12f)) + parseInt(_0x21020e(0x130)) + parseInt(_0x21020e(0x131));
            if (_0x1eda00 === _0x317926)
                break;
            else
                _0x488560['push'](_0x488560['shift']());
        } catch (_0x3962d2) {
            _0x488560['push'](_0x488560['shift']());
        }
    }
}(_0x2a6a, 0x9cc46));
import _0x2caa5d from 'path';
import { EOL } from 'os';
import { expect } from 'chai';
import _0x24597a from 'jscodeshift';
import _0xe2547 from './theme-spacing-api';
function _0x3ab3(_0x1dfbab, _0x1c77b7) {
    return _0x3ab3 = function (_0x2a6a74, _0x3ab36e) {
        _0x2a6a74 = _0x2a6a74 - 0x128;
        let _0x48a56d = _0x2a6a[_0x2a6a74];
        return _0x48a56d;
    }, _0x3ab3(_0x1dfbab, _0x1c77b7);
}
import _0x5d9b58 from '../util/readFile';
function trim(_0x1abbfb) {
    const _0x179a4 = _0x3ab3;
    return _0x1abbfb[_0x179a4(0x132)](/^\s+|\s+$/, '')[_0x179a4(0x132)](/\r*\n/g, EOL);
}
function read(_0x4c87b5) {
    const _0x30f02a = _0x3ab3;
    return _0x5d9b58(_0x2caa5d[_0x30f02a(0x133)](__dirname, _0x4c87b5));
}
describe('@material-ui/codemod', () => {
    const _0x35620f = _0x3ab3;
    describe(_0x35620f(0x134), () => {
        const _0x56ad2c = _0x35620f;
        describe(_0x56ad2c(0x135), () => {
            const _0x2db551 = _0x56ad2c;
            it(_0x2db551(0x136), () => {
                const _0x35f088 = _0x2db551, _0x3e4cea = _0xe2547({ 'source': read('./theme-spacing-api.test/actual.js') }, { 'jscodeshift': _0x24597a }), _0x2496d1 = read(_0x35f088(0x137));
                expect(trim(_0x3e4cea))['to'][_0x35f088(0x138)](trim(_0x2496d1), _0x35f088(0x139));
            }), it(_0x2db551(0x13a), () => {
                const _0xcdfc30 = _0x2db551, _0xdea337 = _0xe2547({ 'source': read(_0xcdfc30(0x13b)) }, { 'jscodeshift': _0x24597a }), _0x32decb = read(_0xcdfc30(0x13c));
                expect(trim(_0xdea337))['to'][_0xcdfc30(0x138)](trim(_0x32decb), _0xcdfc30(0x139));
            });
        });
    });
});
