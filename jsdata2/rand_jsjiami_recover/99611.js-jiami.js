'use strict';
const contentDisposition = require('content-disposition');
const getType = require('cache-content-type');
const onFinish = require('on-finished');
const escape = require('escape-html');
const typeis = require('type-is')['is'];
const statuses = require('statuses');
const destroy = require('destroy');
const assert = require('assert');
const extname = require('path')['extname'];
const vary = require('vary');
const only = require('only');
const util = require('util');
const encodeUrl = require('encodeurl');
const Stream = require('stream');
module['exports'] = {
    get 'socket'() {
        return this['res']['socket'];
    },
    get 'header'() {
        const {res} = this;
        return typeof res['getHeaders'] === 'function' ? res['getHeaders']() : res['_headers'] || {};
    },
    get 'headers'() {
        return this['header'];
    },
    get 'status'() {
        return this['res']['statusCode'];
    },
    set 'status'(_0x2a60de) {
        var _0x548b3b = '6|0|3|2|4|5|1'['split']('|'), _0x44698d = 0;
        while (!![]) {
            switch (_0x548b3b[_0x44698d++]) {
            case '0':
                assert(Number['isInteger'](_0x2a60de), 'status code must be a number');
                continue;
            case '1':
                if (this['body'] && statuses['empty'][_0x2a60de])
                    this['body'] = null;
                continue;
            case '2':
                this['_explicitStatus'] = !![];
                continue;
            case '3':
                assert(_0x2a60de >= 100 && _0x2a60de <= 999, 'invalid status code: ' + _0x2a60de);
                continue;
            case '4':
                this['res']['statusCode'] = _0x2a60de;
                continue;
            case '5':
                if (this['req']['httpVersionMajor'] < 2)
                    this['res']['statusMessage'] = statuses[_0x2a60de];
                continue;
            case '6':
                if (this['headerSent'])
                    return;
                continue;
            }
            break;
        }
    },
    get 'message'() {
        return this['res']['statusMessage'] || statuses[this['status']];
    },
    set 'message'(_0x1e5f7b) {
        this['res']['statusMessage'] = _0x1e5f7b;
    },
    get 'body'() {
        return this['_body'];
    },
    set 'body'(_0x2b2a50) {
        const _0xf3a93b = this['_body'];
        this['_body'] = _0x2b2a50;
        if (_0x2b2a50 == null) {
            var _0x3a1048 = '2|4|0|1|3|5'['split']('|'), _0xb39839 = 0;
            while (!![]) {
                switch (_0x3a1048[_0xb39839++]) {
                case '0':
                    this['remove']('Content-Type');
                    continue;
                case '1':
                    this['remove']('Content-Length');
                    continue;
                case '2':
                    if (!statuses['empty'][this['status']]) {
                        if (this['type'] === 'application/json') {
                            this['_body'] = 'null';
                            return;
                        }
                        this['status'] = 204;
                    }
                    continue;
                case '3':
                    this['remove']('Transfer-Encoding');
                    continue;
                case '4':
                    if (_0x2b2a50 === null)
                        this['_explicitNullBody'] = !![];
                    continue;
                case '5':
                    return;
                }
                break;
            }
        }
        if (!this['_explicitStatus'])
            this['status'] = 200;
        const _0x16ec82 = !this['has']('Content-Type');
        if (typeof _0x2b2a50 === 'string') {
            if ('XPNIb' === 'XPNIb') {
                if (_0x16ec82)
                    this['type'] = /^\s*</['test'](_0x2b2a50) ? 'html' : 'text';
                this['length'] = Buffer['byteLength'](_0x2b2a50);
                return;
            } else {
                if (!this['res'])
                    return;
                const _0xc0363 = this['toJSON']();
                _0xc0363['body'] = this['body'];
                return _0xc0363;
            }
        }
        if (Buffer['isBuffer'](_0x2b2a50)) {
            if (_0x16ec82)
                this['type'] = 'bin';
            this['length'] = _0x2b2a50['length'];
            return;
        }
        if (_0x2b2a50 instanceof Stream) {
            if ('luXCM' === 'luXCM') {
                onFinish(this['res'], destroy['bind'](null, _0x2b2a50));
                if (_0xf3a93b !== _0x2b2a50) {
                    _0x2b2a50['once']('error', _0x4699d3 => this['ctx']['onerror'](_0x4699d3));
                    if (_0xf3a93b != null)
                        this['remove']('Content-Length');
                }
                if (_0x16ec82)
                    this['type'] = 'bin';
                return;
            } else {
                if (this['headerSent'])
                    return;
                vary(this['res'], field);
            }
        }
        this['remove']('Content-Length');
        this['type'] = 'json';
    },
    set 'length'(_0x317f93) {
        if (!this['has']('Transfer-Encoding')) {
            this['set']('Content-Length', _0x317f93);
        }
    },
    get 'length'() {
        if (this['has']('Content-Length')) {
            return parseInt(this['get']('Content-Length'), 10) || 0;
        }
        const {body} = this;
        if (!body || body instanceof Stream)
            return undefined;
        if (typeof body === 'string')
            return Buffer['byteLength'](body);
        if (Buffer['isBuffer'](body))
            return body['length'];
        return Buffer['byteLength'](JSON['stringify'](body));
    },
    get 'headerSent'() {
        return this['res']['headersSent'];
    },
    'vary'(_0x338893) {
        if (this['headerSent'])
            return;
        vary(this['res'], _0x338893);
    },
    'redirect'(_0x46d12c, _0x2d5375) {
        var _0x227ed6 = '3|2|4|5|1|0'['split']('|'), _0x549c36 = 0;
        while (!![]) {
            switch (_0x227ed6[_0x549c36++]) {
            case '0':
                this['body'] = 'Redirecting to ' + _0x46d12c + '.';
                continue;
            case '1':
                this['type'] = 'text/plain; charset=utf-8';
                continue;
            case '2':
                this['set']('Location', encodeUrl(_0x46d12c));
                continue;
            case '3':
                if (_0x46d12c === 'back')
                    _0x46d12c = this['ctx']['get']('Referrer') || _0x2d5375 || '/';
                continue;
            case '4':
                if (!statuses['redirect'][this['status']])
                    this['status'] = 302;
                continue;
            case '5':
                if (this['ctx']['accepts']('html')) {
                    _0x46d12c = escape(_0x46d12c);
                    this['type'] = 'text/html; charset=utf-8';
                    this['body'] = 'Redirecting to <a href="' + _0x46d12c + '">' + _0x46d12c + '</a>.';
                    return;
                }
                continue;
            }
            break;
        }
    },
    'attachment'(_0x56e08c, _0x323a53) {
        if (_0x56e08c)
            this['type'] = extname(_0x56e08c);
        this['set']('Content-Disposition', contentDisposition(_0x56e08c, _0x323a53));
    },
    set 'type'(_0x407088) {
        _0x407088 = getType(_0x407088);
        if (_0x407088) {
            this['set']('Content-Type', _0x407088);
        } else {
            this['remove']('Content-Type');
        }
    },
    set 'lastModified'(_0x5e6bdb) {
        if (typeof _0x5e6bdb === 'string')
            _0x5e6bdb = new Date(_0x5e6bdb);
        this['set']('Last-Modified', _0x5e6bdb['toUTCString']());
    },
    get 'lastModified'() {
        const _0x291316 = this['get']('last-modified');
        if (_0x291316)
            return new Date(_0x291316);
    },
    set 'etag'(_0xf98b96) {
        if (!/^(W\/)?"/['test'](_0xf98b96))
            _0xf98b96 = '"' + _0xf98b96 + '"';
        this['set']('ETag', _0xf98b96);
    },
    get 'etag'() {
        return this['get']('ETag');
    },
    get 'type'() {
        const _0x57ccd6 = this['get']('Content-Type');
        if (!_0x57ccd6)
            return '';
        return _0x57ccd6['split'](';', 1)[0];
    },
    'is'(_0x21c15f, ..._0x44c6fa) {
        return typeis(this['type'], _0x21c15f, ..._0x44c6fa);
    },
    'get'(_0x74dde2) {
        return this['res']['getHeader'](_0x74dde2);
    },
    'has'(_0x28fa5b) {
        return typeof this['res']['hasHeader'] === 'function' ? this['res']['hasHeader'](_0x28fa5b) : _0x28fa5b['toLowerCase']() in this['headers'];
    },
    'set'(_0x59ce11, _0x5669a8) {
        if (this['headerSent'])
            return;
        if (arguments['length'] === 2) {
            if (Array['isArray'](_0x5669a8))
                _0x5669a8 = _0x5669a8['map'](_0x52331d => typeof _0x52331d === 'string' ? _0x52331d : String(_0x52331d));
            else if (typeof _0x5669a8 !== 'string')
                _0x5669a8 = String(_0x5669a8);
            this['res']['setHeader'](_0x59ce11, _0x5669a8);
        } else {
            for (const _0x4c173c in _0x59ce11) {
                this['set'](_0x4c173c, _0x59ce11[_0x4c173c]);
            }
        }
    },
    'append'(_0x4fe863, _0x2d8dae) {
        const _0x341f1d = this['get'](_0x4fe863);
        if (_0x341f1d) {
            _0x2d8dae = Array['isArray'](_0x341f1d) ? _0x341f1d['concat'](_0x2d8dae) : [_0x341f1d]['concat'](_0x2d8dae);
        }
        return this['set'](_0x4fe863, _0x2d8dae);
    },
    'remove'(_0x6b6d2d) {
        if (this['headerSent'])
            return;
        this['res']['removeHeader'](_0x6b6d2d);
    },
    get 'writable'() {
        if (this['res']['writableEnded'] || this['res']['finished'])
            return ![];
        const _0x27500e = this['res']['socket'];
        if (!_0x27500e)
            return !![];
        return _0x27500e['writable'];
    },
    'inspect'() {
        if (!this['res'])
            return;
        const _0x2e542f = this['toJSON']();
        _0x2e542f['body'] = this['body'];
        return _0x2e542f;
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
if (util['inspect']['custom']) {
    module['exports'][util['inspect']['custom']] = module['exports']['inspect'];
}