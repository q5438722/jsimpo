'use strict';
const request = require('../../test-helpers/context')['request'], assert = require('assert');
describe('req.charset', () => {
    describe('with\x20no\x20content-type\x20present', () => {
        it('should\x20return\x20\x22\x22', () => {
            const _0x452876 = request();
            assert(_0x452876['charset'] === '');
        });
    }), describe('with\x20charset\x20present', () => {
        it('should\x20return\x20\x22\x22', () => {
            const _0x366d68 = request();
            _0x366d68['header']['content-type'] = 'text/plain', assert(_0x366d68['charset'] === '');
        });
    }), describe('with\x20a\x20charset', () => {
        it('should\x20return\x20the\x20charset', () => {
            const _0x5e2d96 = request();
            _0x5e2d96['header']['content-type'] = 'text/plain;\x20charset=utf-8', assert['strictEqual'](_0x5e2d96['charset'], 'utf-8');
        }), it('should\x20return\x20\x22\x22\x20if\x20content-type\x20is\x20invalid', () => {
            const _0x4532f5 = request();
            _0x4532f5['header']['content-type'] = 'application/json;\x20application/text;\x20charset=utf-8', assert['strictEqual'](_0x4532f5['charset'], '');
        });
    });
});
