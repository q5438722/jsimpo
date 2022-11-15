'use strict';
const contentDisposition = require('content-disposition'), getType = require('cache-content-type'), onFinish = require('on-finished'), escape = require('escape-html'), typeis = require('type-is')['is'], statuses = require('statuses'), destroy = require('destroy'), assert = require('assert'), extname = require('path')['extname'], vary = require('vary'), only = require('only'), util = require('util'), encodeUrl = require('encodeurl'), Stream = require('stream');
module['exports'] = {
    get 'socket'() {
        return this['res']['socket'];
    },
    get 'header'() {
        const {res: _0x2f2739} = this;
        return typeof _0x2f2739['getHeaders'] === 'function' ? _0x2f2739['getHeaders']() : _0x2f2739['_headers'] || {};
    },
    get 'headers'() {
        return this['header'];
    },
    get 'status'() {
        return this['res']['statusCode'];
    },
    set 'status'(_0x2b3b01) {
        if (this['headerSent'])
            return;
        assert(Number['isInteger'](_0x2b3b01), 'status\x20code\x20must\x20be\x20a\x20number'), assert(_0x2b3b01 >= -0x1 * -0x1885 + 0x7ef + -0x1008 * 0x2 && _0x2b3b01 <= -0x30 + -0xd * -0x44 + -0x1 * -0xa3, 'invalid\x20status\x20code:\x20' + _0x2b3b01), this['_explicitStatus'] = !![], this['res']['statusCode'] = _0x2b3b01;
        if (this['req']['httpVersionMajor'] < 0x4 * 0x45f + 0x12ad * -0x2 + 0xc * 0x1a8)
            this['res']['statusMessage'] = statuses[_0x2b3b01];
        if (this['body'] && statuses['empty'][_0x2b3b01])
            this['body'] = null;
    },
    get 'message'() {
        return this['res']['statusMessage'] || statuses[this['status']];
    },
    set 'message'(_0x4b6d43) {
        this['res']['statusMessage'] = _0x4b6d43;
    },
    get 'body'() {
        return this['_body'];
    },
    set 'body'(_0xec0aed) {
        const _0x48b346 = this['_body'];
        this['_body'] = _0xec0aed;
        if (_0xec0aed == null) {
            if (!statuses['empty'][this['status']]) {
                if (this['type'] === 'application/json') {
                    this['_body'] = 'null';
                    return;
                }
                this['status'] = 0x51f + 0x7 * -0x40f + 0x2 * 0xc0b;
            }
            if (_0xec0aed === null)
                this['_explicitNullBody'] = !![];
            this['remove']('Content-Type'), this['remove']('Content-Length'), this['remove']('Transfer-Encoding');
            return;
        }
        if (!this['_explicitStatus'])
            this['status'] = -0xa76 + 0x25ae + -0x2f0 * 0x9;
        const _0x3057fa = !this['has']('Content-Type');
        if (typeof _0xec0aed === 'string') {
            if (_0x3057fa)
                this['type'] = /^\s*</['test'](_0xec0aed) ? 'html' : 'text';
            this['length'] = Buffer['byteLength'](_0xec0aed);
            return;
        }
        if (Buffer['isBuffer'](_0xec0aed)) {
            if (_0x3057fa)
                this['type'] = 'bin';
            this['length'] = _0xec0aed['length'];
            return;
        }
        if (_0xec0aed instanceof Stream) {
            onFinish(this['res'], destroy['bind'](null, _0xec0aed));
            if (_0x48b346 !== _0xec0aed) {
                _0xec0aed['once']('error', _0x5b654d => this['ctx']['onerror'](_0x5b654d));
                if (_0x48b346 != null)
                    this['remove']('Content-Length');
            }
            if (_0x3057fa)
                this['type'] = 'bin';
            return;
        }
        this['remove']('Content-Length'), this['type'] = 'json';
    },
    set 'length'(_0x389191) {
        !this['has']('Transfer-Encoding') && this['set']('Content-Length', _0x389191);
    },
    get 'length'() {
        if (this['has']('Content-Length'))
            return parseInt(this['get']('Content-Length'), -0x11fa + 0x209 + 0xffb) || -0x2d * -0xa2 + 0x19c * 0x4 + -0x22ea;
        const {body: _0x2c1ab9} = this;
        if (!_0x2c1ab9 || _0x2c1ab9 instanceof Stream)
            return undefined;
        if (typeof _0x2c1ab9 === 'string')
            return Buffer['byteLength'](_0x2c1ab9);
        if (Buffer['isBuffer'](_0x2c1ab9))
            return _0x2c1ab9['length'];
        return Buffer['byteLength'](JSON['stringify'](_0x2c1ab9));
    },
    get 'headerSent'() {
        return this['res']['headersSent'];
    },
    'vary'(_0x3f5952) {
        if (this['headerSent'])
            return;
        vary(this['res'], _0x3f5952);
    },
    'redirect'(_0x5ae73b, _0x5e7dfb) {
        if (_0x5ae73b === 'back')
            _0x5ae73b = this['ctx']['get']('Referrer') || _0x5e7dfb || '/';
        this['set']('Location', encodeUrl(_0x5ae73b));
        if (!statuses['redirect'][this['status']])
            this['status'] = 0x18c7 + -0x53f + -0x125a;
        if (this['ctx']['accepts']('html')) {
            _0x5ae73b = escape(_0x5ae73b), this['type'] = 'text/html;\x20charset=utf-8', this['body'] = 'Redirecting\x20to\x20<a\x20href=\x22' + _0x5ae73b + '\x22>' + _0x5ae73b + '</a>.';
            return;
        }
        this['type'] = 'text/plain;\x20charset=utf-8', this['body'] = 'Redirecting\x20to\x20' + _0x5ae73b + '.';
    },
    'attachment'(_0x42eb38, _0x35f078) {
        if (_0x42eb38)
            this['type'] = extname(_0x42eb38);
        this['set']('Content-Disposition', contentDisposition(_0x42eb38, _0x35f078));
    },
    set 'type'(_0x635f87) {
        _0x635f87 = getType(_0x635f87), _0x635f87 ? this['set']('Content-Type', _0x635f87) : this['remove']('Content-Type');
    },
    set 'lastModified'(_0x4c240a) {
        if (typeof _0x4c240a === 'string')
            _0x4c240a = new Date(_0x4c240a);
        this['set']('Last-Modified', _0x4c240a['toUTCString']());
    },
    get 'lastModified'() {
        const _0x3c264e = this['get']('last-modified');
        if (_0x3c264e)
            return new Date(_0x3c264e);
    },
    set 'etag'(_0x234384) {
        if (!/^(W\/)?"/['test'](_0x234384))
            _0x234384 = '\x22' + _0x234384 + '\x22';
        this['set']('ETag', _0x234384);
    },
    get 'etag'() {
        return this['get']('ETag');
    },
    get 'type'() {
        const _0x3d1cbf = this['get']('Content-Type');
        if (!_0x3d1cbf)
            return '';
        return _0x3d1cbf['split'](';', 0x3 * 0xbb + 0x2287 + -0x24b7)[-0x1521 + -0xe * -0x15f + 0x1ef];
    },
    'is'(_0x54fa40, ..._0x32ea39) {
        return typeis(this['type'], _0x54fa40, ..._0x32ea39);
    },
    'get'(_0x525a94) {
        return this['res']['getHeader'](_0x525a94);
    },
    'has'(_0x3e2ad7) {
        return typeof this['res']['hasHeader'] === 'function' ? this['res']['hasHeader'](_0x3e2ad7) : _0x3e2ad7['toLowerCase']() in this['headers'];
    },
    'set'(_0x4b8698, _0xa28a66) {
        if (this['headerSent'])
            return;
        if (arguments['length'] === 0x1d2d * -0x1 + -0xaa * 0x5 + 0x2081) {
            if (Array['isArray'](_0xa28a66))
                _0xa28a66 = _0xa28a66['map'](_0x4e9463 => typeof _0x4e9463 === 'string' ? _0x4e9463 : String(_0x4e9463));
            else {
                if (typeof _0xa28a66 !== 'string')
                    _0xa28a66 = String(_0xa28a66);
            }
            this['res']['setHeader'](_0x4b8698, _0xa28a66);
        } else
            for (const _0x1be5d8 in _0x4b8698) {
                this['set'](_0x1be5d8, _0x4b8698[_0x1be5d8]);
            }
    },
    'append'(_0x2a252f, _0x1debba) {
        const _0xa79691 = this['get'](_0x2a252f);
        return _0xa79691 && (_0x1debba = Array['isArray'](_0xa79691) ? _0xa79691['concat'](_0x1debba) : [_0xa79691]['concat'](_0x1debba)), this['set'](_0x2a252f, _0x1debba);
    },
    'remove'(_0x30d824) {
        if (this['headerSent'])
            return;
        this['res']['removeHeader'](_0x30d824);
    },
    get 'writable'() {
        if (this['res']['writableEnded'] || this['res']['finished'])
            return ![];
        const _0x5343f8 = this['res']['socket'];
        if (!_0x5343f8)
            return !![];
        return _0x5343f8['writable'];
    },
    'inspect'() {
        if (!this['res'])
            return;
        const _0x3883e1 = this['toJSON']();
        return _0x3883e1['body'] = this['body'], _0x3883e1;
    },
    'toJSON'() {
        return only(this, [
            'status',
            'message',
            'header'
        ]);
    },
    'flushHeaders'() {
        this['res']['flushHeaders']();
    }
};
util['inspect']['custom'] && (module['exports'][util['inspect']['custom']] = module['exports']['inspect']);
