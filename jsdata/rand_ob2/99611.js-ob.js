'use strict';
const _0x20a5 = [
    'onerror',
    'bin',
    'json',
    'Transfer-Encoding',
    'get',
    'stringify',
    'headersSent',
    'back',
    'Referrer',
    'set',
    'redirect',
    'accepts',
    'text/html;\x20charset=utf-8',
    'body',
    '</a>.',
    'text/plain;\x20charset=utf-8',
    'Content-Disposition',
    'Last-Modified',
    'last-modified',
    'ETag',
    'split',
    'getHeader',
    'hasHeader',
    'toLowerCase',
    'headers',
    'setHeader',
    'isArray',
    'concat',
    'writableEnded',
    'finished',
    'toJSON',
    'message',
    'flushHeaders',
    'inspect',
    'custom',
    '37nLQwWY',
    '22119uNHObK',
    '534241KKFgxh',
    '1NihkLH',
    '538065tXCylF',
    '237306hSXsNi',
    '312738tnUmDM',
    '35683NtcHuU',
    '11xjtrIp',
    '694501gzWUmc',
    'content-disposition',
    'cache-content-type',
    'escape-html',
    'statuses',
    'destroy',
    'path',
    'extname',
    'vary',
    'only',
    'encodeurl',
    'stream',
    'exports',
    'res',
    'socket',
    'getHeaders',
    'function',
    'header',
    'headerSent',
    'isInteger',
    'status\x20code\x20must\x20be\x20a\x20number',
    'invalid\x20status\x20code:\x20',
    '_explicitStatus',
    'statusCode',
    'req',
    'httpVersionMajor',
    'statusMessage',
    '_body',
    'status',
    'type',
    'null',
    '_explicitNullBody',
    'remove',
    'Content-Type',
    'Content-Length',
    'has',
    'string',
    'test',
    'html',
    'text',
    'length',
    'byteLength',
    'isBuffer',
    'bind',
    'once',
    'error',
    'ctx'
];
const _0x312b1b = _0x4f21;
(function (_0xa36ee6, _0x21940f) {
    const _0x211e9b = _0x4f21;
    while (!![]) {
        try {
            const _0x3f38b7 = -parseInt(_0x211e9b(0x1f2)) * -parseInt(_0x211e9b(0x1f3)) + -parseInt(_0x211e9b(0x1f4)) + parseInt(_0x211e9b(0x1f5)) * parseInt(_0x211e9b(0x1f6)) + -parseInt(_0x211e9b(0x1f7)) + -parseInt(_0x211e9b(0x1f8)) + -parseInt(_0x211e9b(0x1f9)) * parseInt(_0x211e9b(0x1fa)) + parseInt(_0x211e9b(0x1fb));
            if (_0x3f38b7 === _0x21940f)
                break;
            else
                _0xa36ee6['push'](_0xa36ee6['shift']());
        } catch (_0x6da83a) {
            _0xa36ee6['push'](_0xa36ee6['shift']());
        }
    }
}(_0x20a5, 0x8c2db));
function _0x4f21(_0x442daf, _0x323286) {
    return _0x4f21 = function (_0x20a5ab, _0x4f2102) {
        _0x20a5ab = _0x20a5ab - 0x1f2;
        let _0x1a84d2 = _0x20a5[_0x20a5ab];
        return _0x1a84d2;
    }, _0x4f21(_0x442daf, _0x323286);
}
const contentDisposition = require(_0x312b1b(0x1fc)), getType = require(_0x312b1b(0x1fd)), onFinish = require('on-finished'), escape = require(_0x312b1b(0x1fe)), typeis = require('type-is')['is'], statuses = require(_0x312b1b(0x1ff)), destroy = require(_0x312b1b(0x200)), assert = require('assert'), extname = require(_0x312b1b(0x201))[_0x312b1b(0x202)], vary = require(_0x312b1b(0x203)), only = require(_0x312b1b(0x204)), util = require('util'), encodeUrl = require(_0x312b1b(0x205)), Stream = require(_0x312b1b(0x206));
module[_0x312b1b(0x207)] = {
    get 'socket'() {
        const _0x35ed4a = _0x312b1b;
        return this[_0x35ed4a(0x208)][_0x35ed4a(0x209)];
    },
    get 'header'() {
        const _0x984d16 = _0x312b1b, {res: _0x5a1af6} = this;
        return typeof _0x5a1af6[_0x984d16(0x20a)] === _0x984d16(0x20b) ? _0x5a1af6[_0x984d16(0x20a)]() : _0x5a1af6['_headers'] || {};
    },
    get 'headers'() {
        const _0x40e7b1 = _0x312b1b;
        return this[_0x40e7b1(0x20c)];
    },
    get 'status'() {
        return this['res']['statusCode'];
    },
    set 'status'(_0x2e15eb) {
        const _0x4e741d = _0x312b1b;
        if (this[_0x4e741d(0x20d)])
            return;
        assert(Number[_0x4e741d(0x20e)](_0x2e15eb), _0x4e741d(0x20f)), assert(_0x2e15eb >= 0x64 && _0x2e15eb <= 0x3e7, _0x4e741d(0x210) + _0x2e15eb), this[_0x4e741d(0x211)] = !![], this[_0x4e741d(0x208)][_0x4e741d(0x212)] = _0x2e15eb;
        if (this[_0x4e741d(0x213)][_0x4e741d(0x214)] < 0x2)
            this['res'][_0x4e741d(0x215)] = statuses[_0x2e15eb];
        if (this['body'] && statuses['empty'][_0x2e15eb])
            this['body'] = null;
    },
    get 'message'() {
        const _0xb85797 = _0x312b1b;
        return this[_0xb85797(0x208)][_0xb85797(0x215)] || statuses[this['status']];
    },
    set 'message'(_0x168a7f) {
        const _0x1748f3 = _0x312b1b;
        this[_0x1748f3(0x208)][_0x1748f3(0x215)] = _0x168a7f;
    },
    get 'body'() {
        return this['_body'];
    },
    set 'body'(_0x45d2c6) {
        const _0x3b0245 = _0x312b1b, _0x1102da = this['_body'];
        this[_0x3b0245(0x216)] = _0x45d2c6;
        if (_0x45d2c6 == null) {
            if (!statuses['empty'][this[_0x3b0245(0x217)]]) {
                if (this[_0x3b0245(0x218)] === 'application/json') {
                    this[_0x3b0245(0x216)] = _0x3b0245(0x219);
                    return;
                }
                this[_0x3b0245(0x217)] = 0xcc;
            }
            if (_0x45d2c6 === null)
                this[_0x3b0245(0x21a)] = !![];
            this[_0x3b0245(0x21b)](_0x3b0245(0x21c)), this[_0x3b0245(0x21b)](_0x3b0245(0x21d)), this[_0x3b0245(0x21b)]('Transfer-Encoding');
            return;
        }
        if (!this[_0x3b0245(0x211)])
            this['status'] = 0xc8;
        const _0x5e3e25 = !this[_0x3b0245(0x21e)]('Content-Type');
        if (typeof _0x45d2c6 === _0x3b0245(0x21f)) {
            if (_0x5e3e25)
                this[_0x3b0245(0x218)] = /^\s*</[_0x3b0245(0x220)](_0x45d2c6) ? _0x3b0245(0x221) : _0x3b0245(0x222);
            this[_0x3b0245(0x223)] = Buffer[_0x3b0245(0x224)](_0x45d2c6);
            return;
        }
        if (Buffer[_0x3b0245(0x225)](_0x45d2c6)) {
            if (_0x5e3e25)
                this[_0x3b0245(0x218)] = 'bin';
            this['length'] = _0x45d2c6[_0x3b0245(0x223)];
            return;
        }
        if (_0x45d2c6 instanceof Stream) {
            onFinish(this[_0x3b0245(0x208)], destroy[_0x3b0245(0x226)](null, _0x45d2c6));
            if (_0x1102da !== _0x45d2c6) {
                _0x45d2c6[_0x3b0245(0x227)](_0x3b0245(0x228), _0xeeaf1e => this[_0x3b0245(0x229)][_0x3b0245(0x22a)](_0xeeaf1e));
                if (_0x1102da != null)
                    this[_0x3b0245(0x21b)](_0x3b0245(0x21d));
            }
            if (_0x5e3e25)
                this[_0x3b0245(0x218)] = _0x3b0245(0x22b);
            return;
        }
        this[_0x3b0245(0x21b)](_0x3b0245(0x21d)), this[_0x3b0245(0x218)] = _0x3b0245(0x22c);
    },
    set 'length'(_0x4abaed) {
        const _0x5f1c06 = _0x312b1b;
        !this[_0x5f1c06(0x21e)](_0x5f1c06(0x22d)) && this['set'](_0x5f1c06(0x21d), _0x4abaed);
    },
    get 'length'() {
        const _0x20590f = _0x312b1b;
        if (this['has'](_0x20590f(0x21d)))
            return parseInt(this[_0x20590f(0x22e)]('Content-Length'), 0xa) || 0x0;
        const {body: _0x4b0d81} = this;
        if (!_0x4b0d81 || _0x4b0d81 instanceof Stream)
            return undefined;
        if (typeof _0x4b0d81 === _0x20590f(0x21f))
            return Buffer[_0x20590f(0x224)](_0x4b0d81);
        if (Buffer['isBuffer'](_0x4b0d81))
            return _0x4b0d81[_0x20590f(0x223)];
        return Buffer[_0x20590f(0x224)](JSON[_0x20590f(0x22f)](_0x4b0d81));
    },
    get 'headerSent'() {
        const _0x3b8cf2 = _0x312b1b;
        return this['res'][_0x3b8cf2(0x230)];
    },
    'vary'(_0x49525b) {
        const _0x2d10d4 = _0x312b1b;
        if (this[_0x2d10d4(0x20d)])
            return;
        vary(this[_0x2d10d4(0x208)], _0x49525b);
    },
    'redirect'(_0x20d1c0, _0x5f32e7) {
        const _0xe8702c = _0x312b1b;
        if (_0x20d1c0 === _0xe8702c(0x231))
            _0x20d1c0 = this['ctx'][_0xe8702c(0x22e)](_0xe8702c(0x232)) || _0x5f32e7 || '/';
        this[_0xe8702c(0x233)]('Location', encodeUrl(_0x20d1c0));
        if (!statuses[_0xe8702c(0x234)][this['status']])
            this[_0xe8702c(0x217)] = 0x12e;
        if (this[_0xe8702c(0x229)][_0xe8702c(0x235)]('html')) {
            _0x20d1c0 = escape(_0x20d1c0), this[_0xe8702c(0x218)] = _0xe8702c(0x236), this[_0xe8702c(0x237)] = 'Redirecting\x20to\x20<a\x20href=\x22' + _0x20d1c0 + '\x22>' + _0x20d1c0 + _0xe8702c(0x238);
            return;
        }
        this[_0xe8702c(0x218)] = _0xe8702c(0x239), this[_0xe8702c(0x237)] = 'Redirecting\x20to\x20' + _0x20d1c0 + '.';
    },
    'attachment'(_0x49b0d9, _0x5efadb) {
        const _0x4d6d38 = _0x312b1b;
        if (_0x49b0d9)
            this[_0x4d6d38(0x218)] = extname(_0x49b0d9);
        this[_0x4d6d38(0x233)](_0x4d6d38(0x23a), contentDisposition(_0x49b0d9, _0x5efadb));
    },
    set 'type'(_0x40c729) {
        const _0x4b7a4f = _0x312b1b;
        _0x40c729 = getType(_0x40c729), _0x40c729 ? this[_0x4b7a4f(0x233)]('Content-Type', _0x40c729) : this[_0x4b7a4f(0x21b)](_0x4b7a4f(0x21c));
    },
    set 'lastModified'(_0x57b005) {
        const _0x26686c = _0x312b1b;
        if (typeof _0x57b005 === _0x26686c(0x21f))
            _0x57b005 = new Date(_0x57b005);
        this[_0x26686c(0x233)](_0x26686c(0x23b), _0x57b005['toUTCString']());
    },
    get 'lastModified'() {
        const _0xa8520a = _0x312b1b, _0x343360 = this[_0xa8520a(0x22e)](_0xa8520a(0x23c));
        if (_0x343360)
            return new Date(_0x343360);
    },
    set 'etag'(_0x2279dd) {
        const _0x24c5a4 = _0x312b1b;
        if (!/^(W\/)?"/[_0x24c5a4(0x220)](_0x2279dd))
            _0x2279dd = '\x22' + _0x2279dd + '\x22';
        this[_0x24c5a4(0x233)]('ETag', _0x2279dd);
    },
    get 'etag'() {
        const _0x547376 = _0x312b1b;
        return this[_0x547376(0x22e)](_0x547376(0x23d));
    },
    get 'type'() {
        const _0x2eac5c = _0x312b1b, _0x5e71bc = this[_0x2eac5c(0x22e)](_0x2eac5c(0x21c));
        if (!_0x5e71bc)
            return '';
        return _0x5e71bc[_0x2eac5c(0x23e)](';', 0x1)[0x0];
    },
    'is'(_0x1abb25, ..._0xdb5e3e) {
        return typeis(this['type'], _0x1abb25, ..._0xdb5e3e);
    },
    'get'(_0x39a4d4) {
        const _0x2f2333 = _0x312b1b;
        return this[_0x2f2333(0x208)][_0x2f2333(0x23f)](_0x39a4d4);
    },
    'has'(_0x366c66) {
        const _0x2b7b9e = _0x312b1b;
        return typeof this['res'][_0x2b7b9e(0x240)] === 'function' ? this[_0x2b7b9e(0x208)][_0x2b7b9e(0x240)](_0x366c66) : _0x366c66[_0x2b7b9e(0x241)]() in this[_0x2b7b9e(0x242)];
    },
    'set'(_0x2daa44, _0x6286fe) {
        const _0x40283d = _0x312b1b;
        if (this['headerSent'])
            return;
        if (arguments[_0x40283d(0x223)] === 0x2) {
            if (Array['isArray'](_0x6286fe))
                _0x6286fe = _0x6286fe['map'](_0x2a1930 => typeof _0x2a1930 === _0x40283d(0x21f) ? _0x2a1930 : String(_0x2a1930));
            else {
                if (typeof _0x6286fe !== _0x40283d(0x21f))
                    _0x6286fe = String(_0x6286fe);
            }
            this[_0x40283d(0x208)][_0x40283d(0x243)](_0x2daa44, _0x6286fe);
        } else
            for (const _0x402063 in _0x2daa44) {
                this[_0x40283d(0x233)](_0x402063, _0x2daa44[_0x402063]);
            }
    },
    'append'(_0x5bf898, _0x156d2e) {
        const _0xd5a58a = _0x312b1b, _0x2da851 = this[_0xd5a58a(0x22e)](_0x5bf898);
        return _0x2da851 && (_0x156d2e = Array[_0xd5a58a(0x244)](_0x2da851) ? _0x2da851['concat'](_0x156d2e) : [_0x2da851][_0xd5a58a(0x245)](_0x156d2e)), this[_0xd5a58a(0x233)](_0x5bf898, _0x156d2e);
    },
    'remove'(_0x38f8e1) {
        const _0x4aa7fe = _0x312b1b;
        if (this[_0x4aa7fe(0x20d)])
            return;
        this['res']['removeHeader'](_0x38f8e1);
    },
    get 'writable'() {
        const _0x362f43 = _0x312b1b;
        if (this[_0x362f43(0x208)][_0x362f43(0x246)] || this['res'][_0x362f43(0x247)])
            return ![];
        const _0x5b123c = this['res']['socket'];
        if (!_0x5b123c)
            return !![];
        return _0x5b123c['writable'];
    },
    'inspect'() {
        const _0x23369f = _0x312b1b;
        if (!this[_0x23369f(0x208)])
            return;
        const _0x5a29a6 = this[_0x23369f(0x248)]();
        return _0x5a29a6[_0x23369f(0x237)] = this[_0x23369f(0x237)], _0x5a29a6;
    },
    'toJSON'() {
        const _0x27693e = _0x312b1b;
        return only(this, [
            _0x27693e(0x217),
            _0x27693e(0x249),
            _0x27693e(0x20c)
        ]);
    },
    'flushHeaders'() {
        const _0x477e2f = _0x312b1b;
        this['res'][_0x477e2f(0x24a)]();
    }
};
util[_0x312b1b(0x24b)][_0x312b1b(0x24c)] && (module[_0x312b1b(0x207)][util[_0x312b1b(0x24b)][_0x312b1b(0x24c)]] = module[_0x312b1b(0x207)][_0x312b1b(0x24b)]);
