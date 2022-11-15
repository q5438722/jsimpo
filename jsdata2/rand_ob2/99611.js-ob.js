'use strict';
const _0x542d = [
    'vary',
    'only',
    'util',
    'encodeurl',
    'stream',
    'exports',
    'res',
    'socket',
    'statusCode',
    'headerSent',
    'isInteger',
    'status\x20code\x20must\x20be\x20a\x20number',
    'invalid\x20status\x20code:\x20',
    '_explicitStatus',
    'req',
    'httpVersionMajor',
    'statusMessage',
    'body',
    '_body',
    'type',
    'application/json',
    'null',
    'status',
    '_explicitNullBody',
    'Content-Type',
    'remove',
    'Content-Length',
    'Transfer-Encoding',
    'has',
    'test',
    'text',
    'isBuffer',
    'bin',
    'length',
    'error',
    'ctx',
    'onerror',
    'set',
    'get',
    'string',
    'byteLength',
    'stringify',
    'back',
    'Location',
    'redirect',
    'accepts',
    'html',
    'text/html;\x20charset=utf-8',
    'Redirecting\x20to\x20<a\x20href=\x22',
    'Redirecting\x20to\x20',
    'Content-Disposition',
    'Last-Modified',
    'last-modified',
    'ETag',
    'split',
    'getHeader',
    'function',
    'hasHeader',
    'headers',
    'isArray',
    'setHeader',
    'concat',
    'writableEnded',
    'finished',
    'writable',
    'toJSON',
    'message',
    'header',
    'flushHeaders',
    'inspect',
    'custom',
    '239779zWlLua',
    '87233JxkXmx',
    '263169SbhNDT',
    '186IYERZS',
    '1494KuaJAi',
    '140098HTazdZ',
    '2CNXJCh',
    '16XfMRTF',
    '17029zdqjLJ',
    '734713ZJoWtC',
    '1jIxYIK',
    'content-disposition',
    'cache-content-type',
    'on-finished',
    'escape-html',
    'type-is',
    'path'
];
const _0x248a24 = _0x4cde;
(function (_0x3ef6dd, _0x4600ec) {
    const _0x5731ef = _0x4cde;
    while (!![]) {
        try {
            const _0x3740c4 = parseInt(_0x5731ef(0xf9)) + parseInt(_0x5731ef(0xfa)) + parseInt(_0x5731ef(0xfb)) + -parseInt(_0x5731ef(0xfc)) * -parseInt(_0x5731ef(0xfd)) + -parseInt(_0x5731ef(0xfe)) * -parseInt(_0x5731ef(0xff)) + -parseInt(_0x5731ef(0x100)) * parseInt(_0x5731ef(0x101)) + parseInt(_0x5731ef(0x102)) * -parseInt(_0x5731ef(0x103));
            if (_0x3740c4 === _0x4600ec)
                break;
            else
                _0x3ef6dd['push'](_0x3ef6dd['shift']());
        } catch (_0x35f9ed) {
            _0x3ef6dd['push'](_0x3ef6dd['shift']());
        }
    }
}(_0x542d, 0x2271c));
const contentDisposition = require(_0x248a24(0x104)), getType = require(_0x248a24(0x105)), onFinish = require(_0x248a24(0x106)), escape = require(_0x248a24(0x107)), typeis = require(_0x248a24(0x108))['is'], statuses = require('statuses'), destroy = require('destroy'), assert = require('assert'), extname = require(_0x248a24(0x109))['extname'], vary = require(_0x248a24(0x10a)), only = require(_0x248a24(0x10b)), util = require(_0x248a24(0x10c)), encodeUrl = require(_0x248a24(0x10d)), Stream = require(_0x248a24(0x10e));
function _0x4cde(_0x3b24f4, _0x829ee5) {
    return _0x4cde = function (_0x542dfa, _0x4cdee5) {
        _0x542dfa = _0x542dfa - 0xf9;
        let _0x7cb01d = _0x542d[_0x542dfa];
        return _0x7cb01d;
    }, _0x4cde(_0x3b24f4, _0x829ee5);
}
module[_0x248a24(0x10f)] = {
    get 'socket'() {
        const _0x4c611a = _0x248a24;
        return this[_0x4c611a(0x110)][_0x4c611a(0x111)];
    },
    get 'header'() {
        const {res: _0x405aeb} = this;
        return typeof _0x405aeb['getHeaders'] === 'function' ? _0x405aeb['getHeaders']() : _0x405aeb['_headers'] || {};
    },
    get 'headers'() {
        return this['header'];
    },
    get 'status'() {
        const _0x7c0296 = _0x248a24;
        return this['res'][_0x7c0296(0x112)];
    },
    set 'status'(_0x3c21ba) {
        const _0x26066f = _0x248a24;
        if (this[_0x26066f(0x113)])
            return;
        assert(Number[_0x26066f(0x114)](_0x3c21ba), _0x26066f(0x115)), assert(_0x3c21ba >= 0x64 && _0x3c21ba <= 0x3e7, _0x26066f(0x116) + _0x3c21ba), this[_0x26066f(0x117)] = !![], this[_0x26066f(0x110)][_0x26066f(0x112)] = _0x3c21ba;
        if (this[_0x26066f(0x118)][_0x26066f(0x119)] < 0x2)
            this['res'][_0x26066f(0x11a)] = statuses[_0x3c21ba];
        if (this['body'] && statuses['empty'][_0x3c21ba])
            this[_0x26066f(0x11b)] = null;
    },
    get 'message'() {
        const _0x31021a = _0x248a24;
        return this[_0x31021a(0x110)][_0x31021a(0x11a)] || statuses[this['status']];
    },
    set 'message'(_0x5df798) {
        const _0x1d3a8a = _0x248a24;
        this[_0x1d3a8a(0x110)][_0x1d3a8a(0x11a)] = _0x5df798;
    },
    get 'body'() {
        const _0x264151 = _0x248a24;
        return this[_0x264151(0x11c)];
    },
    set 'body'(_0x260468) {
        const _0x3d72c3 = _0x248a24, _0x4e5c58 = this[_0x3d72c3(0x11c)];
        this[_0x3d72c3(0x11c)] = _0x260468;
        if (_0x260468 == null) {
            if (!statuses['empty'][this['status']]) {
                if (this[_0x3d72c3(0x11d)] === _0x3d72c3(0x11e)) {
                    this[_0x3d72c3(0x11c)] = _0x3d72c3(0x11f);
                    return;
                }
                this[_0x3d72c3(0x120)] = 0xcc;
            }
            if (_0x260468 === null)
                this[_0x3d72c3(0x121)] = !![];
            this['remove'](_0x3d72c3(0x122)), this[_0x3d72c3(0x123)](_0x3d72c3(0x124)), this[_0x3d72c3(0x123)](_0x3d72c3(0x125));
            return;
        }
        if (!this[_0x3d72c3(0x117)])
            this['status'] = 0xc8;
        const _0x355e58 = !this[_0x3d72c3(0x126)](_0x3d72c3(0x122));
        if (typeof _0x260468 === 'string') {
            if (_0x355e58)
                this[_0x3d72c3(0x11d)] = /^\s*</[_0x3d72c3(0x127)](_0x260468) ? 'html' : _0x3d72c3(0x128);
            this['length'] = Buffer['byteLength'](_0x260468);
            return;
        }
        if (Buffer[_0x3d72c3(0x129)](_0x260468)) {
            if (_0x355e58)
                this[_0x3d72c3(0x11d)] = _0x3d72c3(0x12a);
            this[_0x3d72c3(0x12b)] = _0x260468[_0x3d72c3(0x12b)];
            return;
        }
        if (_0x260468 instanceof Stream) {
            onFinish(this['res'], destroy['bind'](null, _0x260468));
            if (_0x4e5c58 !== _0x260468) {
                _0x260468['once'](_0x3d72c3(0x12c), _0x2afecb => this[_0x3d72c3(0x12d)][_0x3d72c3(0x12e)](_0x2afecb));
                if (_0x4e5c58 != null)
                    this['remove'](_0x3d72c3(0x124));
            }
            if (_0x355e58)
                this[_0x3d72c3(0x11d)] = 'bin';
            return;
        }
        this[_0x3d72c3(0x123)](_0x3d72c3(0x124)), this[_0x3d72c3(0x11d)] = 'json';
    },
    set 'length'(_0x77765) {
        const _0x1a3c8c = _0x248a24;
        !this[_0x1a3c8c(0x126)]('Transfer-Encoding') && this[_0x1a3c8c(0x12f)]('Content-Length', _0x77765);
    },
    get 'length'() {
        const _0xbc1034 = _0x248a24;
        if (this[_0xbc1034(0x126)]('Content-Length'))
            return parseInt(this[_0xbc1034(0x130)]('Content-Length'), 0xa) || 0x0;
        const {body: _0x16f484} = this;
        if (!_0x16f484 || _0x16f484 instanceof Stream)
            return undefined;
        if (typeof _0x16f484 === _0xbc1034(0x131))
            return Buffer[_0xbc1034(0x132)](_0x16f484);
        if (Buffer[_0xbc1034(0x129)](_0x16f484))
            return _0x16f484['length'];
        return Buffer['byteLength'](JSON[_0xbc1034(0x133)](_0x16f484));
    },
    get 'headerSent'() {
        const _0x4021a0 = _0x248a24;
        return this[_0x4021a0(0x110)]['headersSent'];
    },
    'vary'(_0x1119e7) {
        const _0x29dcfc = _0x248a24;
        if (this[_0x29dcfc(0x113)])
            return;
        vary(this[_0x29dcfc(0x110)], _0x1119e7);
    },
    'redirect'(_0x387387, _0x45a28e) {
        const _0x22cb62 = _0x248a24;
        if (_0x387387 === _0x22cb62(0x134))
            _0x387387 = this['ctx'][_0x22cb62(0x130)]('Referrer') || _0x45a28e || '/';
        this['set'](_0x22cb62(0x135), encodeUrl(_0x387387));
        if (!statuses[_0x22cb62(0x136)][this[_0x22cb62(0x120)]])
            this[_0x22cb62(0x120)] = 0x12e;
        if (this[_0x22cb62(0x12d)][_0x22cb62(0x137)](_0x22cb62(0x138))) {
            _0x387387 = escape(_0x387387), this[_0x22cb62(0x11d)] = _0x22cb62(0x139), this['body'] = _0x22cb62(0x13a) + _0x387387 + '\x22>' + _0x387387 + '</a>.';
            return;
        }
        this[_0x22cb62(0x11d)] = 'text/plain;\x20charset=utf-8', this[_0x22cb62(0x11b)] = _0x22cb62(0x13b) + _0x387387 + '.';
    },
    'attachment'(_0x4ec9b8, _0x1a8c0f) {
        const _0x426d82 = _0x248a24;
        if (_0x4ec9b8)
            this[_0x426d82(0x11d)] = extname(_0x4ec9b8);
        this[_0x426d82(0x12f)](_0x426d82(0x13c), contentDisposition(_0x4ec9b8, _0x1a8c0f));
    },
    set 'type'(_0x7d2214) {
        const _0xec1ded = _0x248a24;
        _0x7d2214 = getType(_0x7d2214), _0x7d2214 ? this[_0xec1ded(0x12f)](_0xec1ded(0x122), _0x7d2214) : this['remove'](_0xec1ded(0x122));
    },
    set 'lastModified'(_0x3f33f1) {
        const _0x25d552 = _0x248a24;
        if (typeof _0x3f33f1 === _0x25d552(0x131))
            _0x3f33f1 = new Date(_0x3f33f1);
        this[_0x25d552(0x12f)](_0x25d552(0x13d), _0x3f33f1['toUTCString']());
    },
    get 'lastModified'() {
        const _0x509617 = _0x248a24, _0x29d708 = this['get'](_0x509617(0x13e));
        if (_0x29d708)
            return new Date(_0x29d708);
    },
    set 'etag'(_0x222a29) {
        const _0x23bae1 = _0x248a24;
        if (!/^(W\/)?"/[_0x23bae1(0x127)](_0x222a29))
            _0x222a29 = '\x22' + _0x222a29 + '\x22';
        this[_0x23bae1(0x12f)](_0x23bae1(0x13f), _0x222a29);
    },
    get 'etag'() {
        const _0x51a8ad = _0x248a24;
        return this[_0x51a8ad(0x130)]('ETag');
    },
    get 'type'() {
        const _0x5d4176 = _0x248a24, _0x344ede = this['get'](_0x5d4176(0x122));
        if (!_0x344ede)
            return '';
        return _0x344ede[_0x5d4176(0x140)](';', 0x1)[0x0];
    },
    'is'(_0x5d8e32, ..._0xdfcf3d) {
        const _0x3f684d = _0x248a24;
        return typeis(this[_0x3f684d(0x11d)], _0x5d8e32, ..._0xdfcf3d);
    },
    'get'(_0x739e7f) {
        const _0x5912ce = _0x248a24;
        return this[_0x5912ce(0x110)][_0x5912ce(0x141)](_0x739e7f);
    },
    'has'(_0xb7a9e0) {
        const _0x7e1c81 = _0x248a24;
        return typeof this[_0x7e1c81(0x110)]['hasHeader'] === _0x7e1c81(0x142) ? this['res'][_0x7e1c81(0x143)](_0xb7a9e0) : _0xb7a9e0['toLowerCase']() in this[_0x7e1c81(0x144)];
    },
    'set'(_0x569577, _0x508593) {
        const _0x329bff = _0x248a24;
        if (this[_0x329bff(0x113)])
            return;
        if (arguments['length'] === 0x2) {
            if (Array[_0x329bff(0x145)](_0x508593))
                _0x508593 = _0x508593['map'](_0x53966e => typeof _0x53966e === 'string' ? _0x53966e : String(_0x53966e));
            else {
                if (typeof _0x508593 !== _0x329bff(0x131))
                    _0x508593 = String(_0x508593);
            }
            this[_0x329bff(0x110)][_0x329bff(0x146)](_0x569577, _0x508593);
        } else
            for (const _0x1b0fd1 in _0x569577) {
                this['set'](_0x1b0fd1, _0x569577[_0x1b0fd1]);
            }
    },
    'append'(_0x4b815b, _0x4671b0) {
        const _0x508b3b = _0x248a24, _0x3286fb = this[_0x508b3b(0x130)](_0x4b815b);
        return _0x3286fb && (_0x4671b0 = Array['isArray'](_0x3286fb) ? _0x3286fb[_0x508b3b(0x147)](_0x4671b0) : [_0x3286fb][_0x508b3b(0x147)](_0x4671b0)), this['set'](_0x4b815b, _0x4671b0);
    },
    'remove'(_0x56acd5) {
        const _0x2aeeae = _0x248a24;
        if (this['headerSent'])
            return;
        this[_0x2aeeae(0x110)]['removeHeader'](_0x56acd5);
    },
    get 'writable'() {
        const _0x45e4e6 = _0x248a24;
        if (this[_0x45e4e6(0x110)][_0x45e4e6(0x148)] || this[_0x45e4e6(0x110)][_0x45e4e6(0x149)])
            return ![];
        const _0x6a7a02 = this[_0x45e4e6(0x110)][_0x45e4e6(0x111)];
        if (!_0x6a7a02)
            return !![];
        return _0x6a7a02[_0x45e4e6(0x14a)];
    },
    'inspect'() {
        const _0x3631b6 = _0x248a24;
        if (!this[_0x3631b6(0x110)])
            return;
        const _0x2afb19 = this[_0x3631b6(0x14b)]();
        return _0x2afb19[_0x3631b6(0x11b)] = this['body'], _0x2afb19;
    },
    'toJSON'() {
        const _0x4b77f4 = _0x248a24;
        return only(this, [
            _0x4b77f4(0x120),
            _0x4b77f4(0x14c),
            _0x4b77f4(0x14d)
        ]);
    },
    'flushHeaders'() {
        const _0x5df114 = _0x248a24;
        this[_0x5df114(0x110)][_0x5df114(0x14e)]();
    }
};
util[_0x248a24(0x14f)][_0x248a24(0x150)] && (module[_0x248a24(0x10f)][util[_0x248a24(0x14f)][_0x248a24(0x150)]] = module['exports'][_0x248a24(0x14f)]);
