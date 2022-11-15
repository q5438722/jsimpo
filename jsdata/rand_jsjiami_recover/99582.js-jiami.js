'use strict';
const assert = require('assert');
const request = require('../../test-helpers/context')['request'];
describe('req.header', () => {
    it('should return the request header object', () => {
        const _0x8e2b97 = request();
        assert['deepStrictEqual'](_0x8e2b97['header'], _0x8e2b97['req']['headers']);
    });
    it('should set the request header object', () => {
        const _0x537898 = request();
        _0x537898['header'] = { 'X-Custom-Headerfield': 'Its one header, with headerfields' };
        assert['deepStrictEqual'](_0x537898['header'], _0x537898['req']['headers']);
    });
});