function _0x4f21(_0x442daf, _0x323286) {
    return _0x4f21 = function (_0x20a5ab, _0x4f2102) {
        _0x20a5ab = _0x20a5ab - 498;
        let _0x1a84d2 = _0x20a5[_0x20a5ab];
        return _0x1a84d2;
    }, _0x4f21(_0x442daf, _0x323286);
}
const contentDisposition = require(_0x312b1b(508)), getType = require(_0x312b1b(509)), onFinish = require('on-finished'), escape = require(_0x312b1b(510)), typeis = require('type-is')['is'], statuses = require(_0x312b1b(511)), destroy = require(_0x312b1b(512)), assert = require('assert'), extname = require(_0x312b1b(513))[_0x312b1b(514)], vary = require(_0x312b1b(515)), only = require(_0x312b1b(516)), util = require('util'), encodeUrl = require(_0x312b1b(517)), Stream = require(_0x312b1b(518));
module[_0x312b1b(519)] = {
    get 'socket'() {
        const _0x35ed4a = _0x312b1b;
        return this[_0x35ed4a(520)][_0x35ed4a(521)];
    },
    get 'header'() {
        const _0x984d16 = _0x312b1b, {res: _0x5a1af6} = this;
        return typeof _0x5a1af6[_0x984d16(522)] === _0x984d16(523) ? _0x5a1af6[_0x984d16(522)]() : _0x5a1af6['_headers'] || {};
    },
    get 'headers'() {
        const _0x40e7b1 = _0x312b1b;
        return this[_0x40e7b1(524)];
    },
    get 'status'() {
        return this['res']['statusCode'];
    },
    set 'status'(_0x2e15eb) {
        const _0x4e741d = _0x312b1b;
        if (this[_0x4e741d(525)])
            return;
        assert(Number[_0x4e741d(526)](_0x2e15eb), _0x4e741d(527)), assert(_0x2e15eb >= 100 && _0x2e15eb <= 999, _0x4e741d(528) + _0x2e15eb), this[_0x4e741d(529)] = !![], this[_0x4e741d(520)][_0x4e741d(530)] = _0x2e15eb;
        if (this[_0x4e741d(531)][_0x4e741d(532)] < 2)
            this['res'][_0x4e741d(533)] = statuses[_0x2e15eb];
        if (this['body'] && statuses['empty'][_0x2e15eb])
            this['body'] = null;
    },
    get 'message'() {
        const _0xb85797 = _0x312b1b;
        return this[_0xb85797(520)][_0xb85797(533)] || statuses[this['status']];
    },
    set 'message'(_0x168a7f) {
        const _0x1748f3 = _0x312b1b;
        this[_0x1748f3(520)][_0x1748f3(533)] = _0x168a7f;
    },
    get 'body'() {
        return this['_body'];
    },
    set 'body'(_0x45d2c6) {
        const _0x3b0245 = _0x312b1b, _0x1102da = this['_body'];
        this[_0x3b0245(534)] = _0x45d2c6;
        if (_0x45d2c6 == null) {
            if (!statuses['empty'][this[_0x3b0245(535)]]) {
                if (this[_0x3b0245(536)] === 'application/json') {
                    this[_0x3b0245(534)] = _0x3b0245(537);
                    return;
                }
                this[_0x3b0245(535)] = 204;
            }
            if (_0x45d2c6 === null)
                this[_0x3b0245(538)] = !![];
            this[_0x3b0245(539)](_0x3b0245(540)), this[_0x3b0245(539)](_0x3b0245(541)), this[_0x3b0245(539)]('Transfer-Encoding');
            return;
        }
        if (!this[_0x3b0245(529)])
            this['status'] = 200;
        const _0x5e3e25 = !this[_0x3b0245(542)]('Content-Type');
        if (typeof _0x45d2c6 === _0x3b0245(543)) {
            if (_0x5e3e25)
                this[_0x3b0245(536)] = /^\s*</[_0x3b0245(544)](_0x45d2c6) ? _0x3b0245(545) : _0x3b0245(546);
            this[_0x3b0245(547)] = Buffer[_0x3b0245(548)](_0x45d2c6);
            return;
        }
        if (Buffer[_0x3b0245(549)](_0x45d2c6)) {
            if (_0x5e3e25)
                this[_0x3b0245(536)] = 'bin';
            this['length'] = _0x45d2c6[_0x3b0245(547)];
            return;
        }
        if (_0x45d2c6 instanceof Stream) {
            onFinish(this[_0x3b0245(520)], destroy[_0x3b0245(550)](null, _0x45d2c6));
            if (_0x1102da !== _0x45d2c6) {
                _0x45d2c6[_0x3b0245(551)](_0x3b0245(552), _0xeeaf1e => this[_0x3b0245(553)][_0x3b0245(554)](_0xeeaf1e));
                if (_0x1102da != null)
                    this[_0x3b0245(539)](_0x3b0245(541));
            }
            if (_0x5e3e25)
                this[_0x3b0245(536)] = _0x3b0245(555);
            return;
        }
        this[_0x3b0245(539)](_0x3b0245(541)), this[_0x3b0245(536)] = _0x3b0245(556);
    },
    set 'length'(_0x4abaed) {
        const _0x5f1c06 = _0x312b1b;
        !this[_0x5f1c06(542)](_0x5f1c06(557)) && this['set'](_0x5f1c06(541), _0x4abaed);
    },
    get 'length'() {
        const _0x20590f = _0x312b1b;
        if (this['has'](_0x20590f(541)))
            return parseInt(this[_0x20590f(558)]('Content-Length'), 10) || 0;
        const {body: _0x4b0d81} = this;
        if (!_0x4b0d81 || _0x4b0d81 instanceof Stream)
            return undefined;
        if (typeof _0x4b0d81 === _0x20590f(543))
            return Buffer[_0x20590f(548)](_0x4b0d81);
        if (Buffer['isBuffer'](_0x4b0d81))
            return _0x4b0d81[_0x20590f(547)];
        return Buffer[_0x20590f(548)](JSON[_0x20590f(559)](_0x4b0d81));
    },
    get 'headerSent'() {
        const _0x3b8cf2 = _0x312b1b;
        return this['res'][_0x3b8cf2(560)];
    },
    'vary'(_0x49525b) {
        const _0x2d10d4 = _0x312b1b;
        if (this[_0x2d10d4(525)])
            return;
        vary(this[_0x2d10d4(520)], _0x49525b);
    },
    'redirect'(_0x20d1c0, _0x5f32e7) {
        const _0xe8702c = _0x312b1b;
        if (_0x20d1c0 === _0xe8702c(561))
            _0x20d1c0 = this['ctx'][_0xe8702c(558)](_0xe8702c(562)) || _0x5f32e7 || '/';
        this[_0xe8702c(563)]('Location', encodeUrl(_0x20d1c0));
        if (!statuses[_0xe8702c(564)][this['status']])
            this[_0xe8702c(535)] = 302;
        if (this[_0xe8702c(553)][_0xe8702c(565)]('html')) {
            _0x20d1c0 = escape(_0x20d1c0), this[_0xe8702c(536)] = _0xe8702c(566), this[_0xe8702c(567)] = 'Redirecting to <a href="' + _0x20d1c0 + '">' + _0x20d1c0 + _0xe8702c(568);
            return;
        }
        this[_0xe8702c(536)] = _0xe8702c(569), this[_0xe8702c(567)] = 'Redirecting to ' + _0x20d1c0 + '.';
    },
    'attachment'(_0x49b0d9, _0x5efadb) {
        const _0x4d6d38 = _0x312b1b;
        if (_0x49b0d9)
            this[_0x4d6d38(536)] = extname(_0x49b0d9);
        this[_0x4d6d38(563)](_0x4d6d38(570), contentDisposition(_0x49b0d9, _0x5efadb));
    },
    set 'type'(_0x40c729) {
        const _0x4b7a4f = _0x312b1b;
        _0x40c729 = getType(_0x40c729), _0x40c729 ? this[_0x4b7a4f(563)]('Content-Type', _0x40c729) : this[_0x4b7a4f(539)](_0x4b7a4f(540));
    },
    set 'lastModified'(_0x57b005) {
        const _0x26686c = _0x312b1b;
        if (typeof _0x57b005 === _0x26686c(543))
            _0x57b005 = new Date(_0x57b005);
        this[_0x26686c(563)](_0x26686c(571), _0x57b005['toUTCString']());
    },
    get 'lastModified'() {
        const _0xa8520a = _0x312b1b, _0x343360 = this[_0xa8520a(558)](_0xa8520a(572));
        if (_0x343360)
            return new Date(_0x343360);
    },
    set 'etag'(_0x2279dd) {
        const _0x24c5a4 = _0x312b1b;
        if (!/^(W\/)?"/[_0x24c5a4(544)](_0x2279dd))
            _0x2279dd = '"' + _0x2279dd + '"';
        this[_0x24c5a4(563)]('ETag', _0x2279dd);
    },
    get 'etag'() {
        const _0x547376 = _0x312b1b;
        return this[_0x547376(558)](_0x547376(573));
    },
    get 'type'() {
        const _0x2eac5c = _0x312b1b, _0x5e71bc = this[_0x2eac5c(558)](_0x2eac5c(540));
        if (!_0x5e71bc)
            return '';
        return _0x5e71bc[_0x2eac5c(574)](';', 1)[0];
    },
    'is'(_0x1abb25, ..._0xdb5e3e) {
        return typeis(this['type'], _0x1abb25, ..._0xdb5e3e);
    },
    'get'(_0x39a4d4) {
        const _0x2f2333 = _0x312b1b;
        return this[_0x2f2333(520)][_0x2f2333(575)](_0x39a4d4);
    },
    'has'(_0x366c66) {
        const _0x2b7b9e = _0x312b1b;
        return typeof this['res'][_0x2b7b9e(576)] === 'function' ? this[_0x2b7b9e(520)][_0x2b7b9e(576)](_0x366c66) : _0x366c66[_0x2b7b9e(577)]() in this[_0x2b7b9e(578)];
    },
    'set'(_0x2daa44, _0x6286fe) {
        const _0x40283d = _0x312b1b;
        if (this['headerSent'])
            return;
        if (arguments[_0x40283d(547)] === 2) {
            if (Array['isArray'](_0x6286fe))
                _0x6286fe = _0x6286fe['map'](_0x2a1930 => typeof _0x2a1930 === _0x40283d(543) ? _0x2a1930 : String(_0x2a1930));
            else {
                if (typeof _0x6286fe !== _0x40283d(543))
                    _0x6286fe = String(_0x6286fe);
            }
            this[_0x40283d(520)][_0x40283d(579)](_0x2daa44, _0x6286fe);
        } else
            for (const _0x402063 in _0x2daa44) {
                this[_0x40283d(563)](_0x402063, _0x2daa44[_0x402063]);
            }
    },
    'append'(_0x5bf898, _0x156d2e) {
        const _0xd5a58a = _0x312b1b, _0x2da851 = this[_0xd5a58a(558)](_0x5bf898);
        return _0x2da851 && (_0x156d2e = Array[_0xd5a58a(580)](_0x2da851) ? _0x2da851['concat'](_0x156d2e) : [_0x2da851][_0xd5a58a(581)](_0x156d2e)), this[_0xd5a58a(563)](_0x5bf898, _0x156d2e);
    },
    'remove'(_0x38f8e1) {
        const _0x4aa7fe = _0x312b1b;
        if (this[_0x4aa7fe(525)])
            return;
        this['res']['removeHeader'](_0x38f8e1);
    },
    get 'writable'() {
        const _0x362f43 = _0x312b1b;
        if (this[_0x362f43(520)][_0x362f43(582)] || this['res'][_0x362f43(583)])
            return ![];
        const _0x5b123c = this['res']['socket'];
        if (!_0x5b123c)
            return !![];
        return _0x5b123c['writable'];
    },
    'inspect'() {
        const _0x23369f = _0x312b1b;
        if (!this[_0x23369f(520)])
            return;
        const _0x5a29a6 = this[_0x23369f(584)]();
        return _0x5a29a6[_0x23369f(567)] = this[_0x23369f(567)], _0x5a29a6;
    },
    'toJSON'() {
        const _0x27693e = _0x312b1b;
        return only(this, [
            _0x27693e(535),
            _0x27693e(585),
            _0x27693e(524)
        ]);
    },
    'flushHeaders'() {
        const _0x477e2f = _0x312b1b;
        this['res'][_0x477e2f(586)]();
    }
};
util[_0x312b1b(587)][_0x312b1b(588)] && (module[_0x312b1b(519)][util[_0x312b1b(587)][_0x312b1b(588)]] = module[_0x312b1b(519)][_0x312b1b(587)]);