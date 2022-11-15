const contentDisposition = require(_0x248a24(260)), getType = require(_0x248a24(261)), onFinish = require(_0x248a24(262)), escape = require(_0x248a24(263)), typeis = require(_0x248a24(264))['is'], statuses = require('statuses'), destroy = require('destroy'), assert = require('assert'), extname = require(_0x248a24(265))['extname'], vary = require(_0x248a24(266)), only = require(_0x248a24(267)), util = require(_0x248a24(268)), encodeUrl = require(_0x248a24(269)), Stream = require(_0x248a24(270));
function _0x4cde(_0x3b24f4, _0x829ee5) {
    return _0x4cde = function (_0x542dfa, _0x4cdee5) {
        _0x542dfa = _0x542dfa - 249;
        let _0x7cb01d = _0x542d[_0x542dfa];
        return _0x7cb01d;
    }, _0x4cde(_0x3b24f4, _0x829ee5);
}
module[_0x248a24(271)] = {
    get 'socket'() {
        const _0x4c611a = _0x248a24;
        return this[_0x4c611a(272)][_0x4c611a(273)];
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
        return this['res'][_0x7c0296(274)];
    },
    set 'status'(_0x3c21ba) {
        const _0x26066f = _0x248a24;
        if (this[_0x26066f(275)])
            return;
        assert(Number[_0x26066f(276)](_0x3c21ba), _0x26066f(277)), assert(_0x3c21ba >= 100 && _0x3c21ba <= 999, _0x26066f(278) + _0x3c21ba), this[_0x26066f(279)] = !![], this[_0x26066f(272)][_0x26066f(274)] = _0x3c21ba;
        if (this[_0x26066f(280)][_0x26066f(281)] < 2)
            this['res'][_0x26066f(282)] = statuses[_0x3c21ba];
        if (this['body'] && statuses['empty'][_0x3c21ba])
            this[_0x26066f(283)] = null;
    },
    get 'message'() {
        const _0x31021a = _0x248a24;
        return this[_0x31021a(272)][_0x31021a(282)] || statuses[this['status']];
    },
    set 'message'(_0x5df798) {
        const _0x1d3a8a = _0x248a24;
        this[_0x1d3a8a(272)][_0x1d3a8a(282)] = _0x5df798;
    },
    get 'body'() {
        const _0x264151 = _0x248a24;
        return this[_0x264151(284)];
    },
    set 'body'(_0x260468) {
        const _0x3d72c3 = _0x248a24, _0x4e5c58 = this[_0x3d72c3(284)];
        this[_0x3d72c3(284)] = _0x260468;
        if (_0x260468 == null) {
            if (!statuses['empty'][this['status']]) {
                if (this[_0x3d72c3(285)] === _0x3d72c3(286)) {
                    this[_0x3d72c3(284)] = _0x3d72c3(287);
                    return;
                }
                this[_0x3d72c3(288)] = 204;
            }
            if (_0x260468 === null)
                this[_0x3d72c3(289)] = !![];
            this['remove'](_0x3d72c3(290)), this[_0x3d72c3(291)](_0x3d72c3(292)), this[_0x3d72c3(291)](_0x3d72c3(293));
            return;
        }
        if (!this[_0x3d72c3(279)])
            this['status'] = 200;
        const _0x355e58 = !this[_0x3d72c3(294)](_0x3d72c3(290));
        if (typeof _0x260468 === 'string') {
            if (_0x355e58)
                this[_0x3d72c3(285)] = /^\s*</[_0x3d72c3(295)](_0x260468) ? 'html' : _0x3d72c3(296);
            this['length'] = Buffer['byteLength'](_0x260468);
            return;
        }
        if (Buffer[_0x3d72c3(297)](_0x260468)) {
            if (_0x355e58)
                this[_0x3d72c3(285)] = _0x3d72c3(298);
            this[_0x3d72c3(299)] = _0x260468[_0x3d72c3(299)];
            return;
        }
        if (_0x260468 instanceof Stream) {
            onFinish(this['res'], destroy['bind'](null, _0x260468));
            if (_0x4e5c58 !== _0x260468) {
                _0x260468['once'](_0x3d72c3(300), _0x2afecb => this[_0x3d72c3(301)][_0x3d72c3(302)](_0x2afecb));
                if (_0x4e5c58 != null)
                    this['remove'](_0x3d72c3(292));
            }
            if (_0x355e58)
                this[_0x3d72c3(285)] = 'bin';
            return;
        }
        this[_0x3d72c3(291)](_0x3d72c3(292)), this[_0x3d72c3(285)] = 'json';
    },
    set 'length'(_0x77765) {
        const _0x1a3c8c = _0x248a24;
        !this[_0x1a3c8c(294)]('Transfer-Encoding') && this[_0x1a3c8c(303)]('Content-Length', _0x77765);
    },
    get 'length'() {
        const _0xbc1034 = _0x248a24;
        if (this[_0xbc1034(294)]('Content-Length'))
            return parseInt(this[_0xbc1034(304)]('Content-Length'), 10) || 0;
        const {body: _0x16f484} = this;
        if (!_0x16f484 || _0x16f484 instanceof Stream)
            return undefined;
        if (typeof _0x16f484 === _0xbc1034(305))
            return Buffer[_0xbc1034(306)](_0x16f484);
        if (Buffer[_0xbc1034(297)](_0x16f484))
            return _0x16f484['length'];
        return Buffer['byteLength'](JSON[_0xbc1034(307)](_0x16f484));
    },
    get 'headerSent'() {
        const _0x4021a0 = _0x248a24;
        return this[_0x4021a0(272)]['headersSent'];
    },
    'vary'(_0x1119e7) {
        const _0x29dcfc = _0x248a24;
        if (this[_0x29dcfc(275)])
            return;
        vary(this[_0x29dcfc(272)], _0x1119e7);
    },
    'redirect'(_0x387387, _0x45a28e) {
        const _0x22cb62 = _0x248a24;
        if (_0x387387 === _0x22cb62(308))
            _0x387387 = this['ctx'][_0x22cb62(304)]('Referrer') || _0x45a28e || '/';
        this['set'](_0x22cb62(309), encodeUrl(_0x387387));
        if (!statuses[_0x22cb62(310)][this[_0x22cb62(288)]])
            this[_0x22cb62(288)] = 302;
        if (this[_0x22cb62(301)][_0x22cb62(311)](_0x22cb62(312))) {
            _0x387387 = escape(_0x387387), this[_0x22cb62(285)] = _0x22cb62(313), this['body'] = _0x22cb62(314) + _0x387387 + '">' + _0x387387 + '</a>.';
            return;
        }
        this[_0x22cb62(285)] = 'text/plain; charset=utf-8', this[_0x22cb62(283)] = _0x22cb62(315) + _0x387387 + '.';
    },
    'attachment'(_0x4ec9b8, _0x1a8c0f) {
        const _0x426d82 = _0x248a24;
        if (_0x4ec9b8)
            this[_0x426d82(285)] = extname(_0x4ec9b8);
        this[_0x426d82(303)](_0x426d82(316), contentDisposition(_0x4ec9b8, _0x1a8c0f));
    },
    set 'type'(_0x7d2214) {
        const _0xec1ded = _0x248a24;
        _0x7d2214 = getType(_0x7d2214), _0x7d2214 ? this[_0xec1ded(303)](_0xec1ded(290), _0x7d2214) : this['remove'](_0xec1ded(290));
    },
    set 'lastModified'(_0x3f33f1) {
        const _0x25d552 = _0x248a24;
        if (typeof _0x3f33f1 === _0x25d552(305))
            _0x3f33f1 = new Date(_0x3f33f1);
        this[_0x25d552(303)](_0x25d552(317), _0x3f33f1['toUTCString']());
    },
    get 'lastModified'() {
        const _0x509617 = _0x248a24, _0x29d708 = this['get'](_0x509617(318));
        if (_0x29d708)
            return new Date(_0x29d708);
    },
    set 'etag'(_0x222a29) {
        const _0x23bae1 = _0x248a24;
        if (!/^(W\/)?"/[_0x23bae1(295)](_0x222a29))
            _0x222a29 = '"' + _0x222a29 + '"';
        this[_0x23bae1(303)](_0x23bae1(319), _0x222a29);
    },
    get 'etag'() {
        const _0x51a8ad = _0x248a24;
        return this[_0x51a8ad(304)]('ETag');
    },
    get 'type'() {
        const _0x5d4176 = _0x248a24, _0x344ede = this['get'](_0x5d4176(290));
        if (!_0x344ede)
            return '';
        return _0x344ede[_0x5d4176(320)](';', 1)[0];
    },
    'is'(_0x5d8e32, ..._0xdfcf3d) {
        const _0x3f684d = _0x248a24;
        return typeis(this[_0x3f684d(285)], _0x5d8e32, ..._0xdfcf3d);
    },
    'get'(_0x739e7f) {
        const _0x5912ce = _0x248a24;
        return this[_0x5912ce(272)][_0x5912ce(321)](_0x739e7f);
    },
    'has'(_0xb7a9e0) {
        const _0x7e1c81 = _0x248a24;
        return typeof this[_0x7e1c81(272)]['hasHeader'] === _0x7e1c81(322) ? this['res'][_0x7e1c81(323)](_0xb7a9e0) : _0xb7a9e0['toLowerCase']() in this[_0x7e1c81(324)];
    },
    'set'(_0x569577, _0x508593) {
        const _0x329bff = _0x248a24;
        if (this[_0x329bff(275)])
            return;
        if (arguments['length'] === 2) {
            if (Array[_0x329bff(325)](_0x508593))
                _0x508593 = _0x508593['map'](_0x53966e => typeof _0x53966e === 'string' ? _0x53966e : String(_0x53966e));
            else {
                if (typeof _0x508593 !== _0x329bff(305))
                    _0x508593 = String(_0x508593);
            }
            this[_0x329bff(272)][_0x329bff(326)](_0x569577, _0x508593);
        } else
            for (const _0x1b0fd1 in _0x569577) {
                this['set'](_0x1b0fd1, _0x569577[_0x1b0fd1]);
            }
    },
    'append'(_0x4b815b, _0x4671b0) {
        const _0x508b3b = _0x248a24, _0x3286fb = this[_0x508b3b(304)](_0x4b815b);
        return _0x3286fb && (_0x4671b0 = Array['isArray'](_0x3286fb) ? _0x3286fb[_0x508b3b(327)](_0x4671b0) : [_0x3286fb][_0x508b3b(327)](_0x4671b0)), this['set'](_0x4b815b, _0x4671b0);
    },
    'remove'(_0x56acd5) {
        const _0x2aeeae = _0x248a24;
        if (this['headerSent'])
            return;
        this[_0x2aeeae(272)]['removeHeader'](_0x56acd5);
    },
    get 'writable'() {
        const _0x45e4e6 = _0x248a24;
        if (this[_0x45e4e6(272)][_0x45e4e6(328)] || this[_0x45e4e6(272)][_0x45e4e6(329)])
            return ![];
        const _0x6a7a02 = this[_0x45e4e6(272)][_0x45e4e6(273)];
        if (!_0x6a7a02)
            return !![];
        return _0x6a7a02[_0x45e4e6(330)];
    },
    'inspect'() {
        const _0x3631b6 = _0x248a24;
        if (!this[_0x3631b6(272)])
            return;
        const _0x2afb19 = this[_0x3631b6(331)]();
        return _0x2afb19[_0x3631b6(283)] = this['body'], _0x2afb19;
    },
    'toJSON'() {
        const _0x4b77f4 = _0x248a24;
        return only(this, [
            _0x4b77f4(288),
            _0x4b77f4(332),
            _0x4b77f4(333)
        ]);
    },
    'flushHeaders'() {
        const _0x5df114 = _0x248a24;
        this[_0x5df114(272)][_0x5df114(334)]();
    }
};
util[_0x248a24(335)][_0x248a24(336)] && (module[_0x248a24(271)][util[_0x248a24(335)][_0x248a24(336)]] = module['exports'][_0x248a24(335)]);