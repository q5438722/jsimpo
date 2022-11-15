'use strict';
const assert = require('assert'), request = require('../../test-helpers/context')['request'];
describe('req.header', () => {
    it('should\x20return\x20the\x20request\x20header\x20object', () => {
        const _0x2b0300 = request();
        assert['deepStrictEqual'](_0x2b0300['header'], _0x2b0300['req']['headers']);
    }), it('should\x20set\x20the\x20request\x20header\x20object', () => {
        const _0xb095c = request();
        _0xb095c['header'] = { 'X-Custom-Headerfield': 'Its\x20one\x20header,\x20with\x20headerfields' }, assert['deepStrictEqual'](_0xb095c['header'], _0xb095c['req']['headers']);
    });
});
