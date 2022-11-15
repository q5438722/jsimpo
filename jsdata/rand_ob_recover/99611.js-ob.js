const contentDisposition = require(_0x55fffd(382)), getType = require(_0x55fffd(383)), onFinish = require(_0x55fffd(384)), escape = require(_0x55fffd(385)), typeis = require(_0x55fffd(386))['is'], statuses = require('statuses'), destroy = require('destroy'), assert = require('assert'), extname = require(_0x55fffd(387))['extname'], vary = require(_0x55fffd(388)), only = require(_0x55fffd(389)), util = require(_0x55fffd(390)), encodeUrl = require(_0x55fffd(391)), Stream = require(_0x55fffd(392));
function _0x2300(_0x3e9b09, _0x3f995b) {
    return _0x2300 = function (_0x342d5, _0x459c59) {
        _0x342d5 = _0x342d5 - (-6991 * 1 + 8596 + 137 * -9);
        let _0x179bf5 = _0x3086[_0x342d5];
        return _0x179bf5;
    }, _0x2300(_0x3e9b09, _0x3f995b);
}
module[_0x55fffd(393)] = {
    get 'socket'() {
        const _0x2e390c = _0x55fffd;
        return this[_0x2e390c(394)]['socket'];
    },
    get 'header'() {
        const _0x337857 = _0x55fffd, _0x5d38da = {
                'RYQzF': function (_0x2a4925, _0x104304) {
                    return _0x2a4925 === _0x104304;
                }
            }, {res: _0x4d55d9} = this;
        return _0x5d38da[_0x337857(395)](typeof _0x4d55d9[_0x337857(396)], _0x337857(397)) ? _0x4d55d9[_0x337857(396)]() : _0x4d55d9[_0x337857(398)] || {};
    },
    get 'headers'() {
        return this['header'];
    },
    get 'status'() {
        const _0x307f47 = _0x55fffd;
        return this[_0x307f47(394)][_0x307f47(399)];
    },
    set 'status'(_0x4c9b0e) {
        const _0x5ba6b5 = _0x55fffd, _0x44f6b9 = {
                'ShTfK': function (_0x2318bb, _0x473127, _0x37df23) {
                    return _0x2318bb(_0x473127, _0x37df23);
                },
                'sLaun': _0x5ba6b5(400),
                'BtISB': function (_0x207a69, _0x3421c5, _0x35974f) {
                    return _0x207a69(_0x3421c5, _0x35974f);
                },
                'sVvEh': function (_0x23df50, _0x5aa52b) {
                    return _0x23df50 >= _0x5aa52b;
                },
                'yjBwk': function (_0x3b42bc, _0xe72817) {
                    return _0x3b42bc <= _0xe72817;
                },
                'CZTIB': function (_0x5b22c9, _0x281f50) {
                    return _0x5b22c9 < _0x281f50;
                }
            };
        if (this[_0x5ba6b5(401)])
            return;
        _0x44f6b9['ShTfK'](assert, Number[_0x5ba6b5(402)](_0x4c9b0e), _0x44f6b9[_0x5ba6b5(403)]), _0x44f6b9[_0x5ba6b5(404)](assert, _0x44f6b9[_0x5ba6b5(405)](_0x4c9b0e, 457 * -1 + 3851 + 3294 * -1) && _0x44f6b9[_0x5ba6b5(406)](_0x4c9b0e, 2668 * -2 + 5 * -1499 + 13830), _0x5ba6b5(407) + _0x4c9b0e), this[_0x5ba6b5(408)] = !![], this['res'][_0x5ba6b5(399)] = _0x4c9b0e;
        if (_0x44f6b9[_0x5ba6b5(409)](this[_0x5ba6b5(410)]['httpVersionMajor'], -67 * -83 + 1604 * 1 + -551 * 13))
            this[_0x5ba6b5(394)][_0x5ba6b5(411)] = statuses[_0x4c9b0e];
        if (this[_0x5ba6b5(412)] && statuses['empty'][_0x4c9b0e])
            this[_0x5ba6b5(412)] = null;
    },
    get 'message'() {
        const _0x1da5a7 = _0x55fffd;
        return this[_0x1da5a7(394)]['statusMessage'] || statuses[this[_0x1da5a7(413)]];
    },
    set 'message'(_0x57b99c) {
        const _0x5d397f = _0x55fffd;
        this[_0x5d397f(394)][_0x5d397f(411)] = _0x57b99c;
    },
    get 'body'() {
        return this['_body'];
    },
    set 'body'(_0x5fd100) {
        const _0x1858b6 = _0x55fffd, _0x9cc021 = {
                'YIGiN': '1|4|5|2|0|3',
                'PHfmP': _0x1858b6(414),
                'FOxIN': function (_0x4b2391, _0x194551) {
                    return _0x4b2391 === _0x194551;
                },
                'ivrHr': _0x1858b6(415),
                'IdMhQ': 'Content-Type',
                'aMqAg': _0x1858b6(416),
                'QKSBW': _0x1858b6(417),
                'fKbRg': _0x1858b6(418),
                'tdhGr': function (_0x11f180, _0x4ecba1) {
                    return _0x11f180 instanceof _0x4ecba1;
                },
                'mAeou': function (_0x180765, _0x39b0fc, _0x5b7ee9) {
                    return _0x180765(_0x39b0fc, _0x5b7ee9);
                },
                'rovFH': function (_0x2320e3, _0x3ba547) {
                    return _0x2320e3 !== _0x3ba547;
                },
                'guIZb': _0x1858b6(419),
                'ZZbZt': _0x1858b6(420),
                'zuQtQ': _0x1858b6(421)
            }, _0x407bdd = this[_0x1858b6(422)];
        this[_0x1858b6(422)] = _0x5fd100;
        if (_0x5fd100 == null) {
            const _0x1ad6e4 = _0x9cc021['YIGiN'][_0x1858b6(423)]('|');
            let _0x2b89d0 = 8925 + -61 * -50 + 1 * -11975;
            while (!![]) {
                switch (_0x1ad6e4[_0x2b89d0++]) {
                case '0':
                    this[_0x1858b6(424)](_0x9cc021[_0x1858b6(425)]);
                    continue;
                case '1':
                    if (!statuses[_0x1858b6(426)][this[_0x1858b6(413)]]) {
                        if (_0x9cc021['FOxIN'](this['type'], _0x1858b6(427))) {
                            this[_0x1858b6(422)] = _0x9cc021[_0x1858b6(428)];
                            return;
                        }
                        this[_0x1858b6(413)] = -4369 + 67 * -29 + 6 * 1086;
                    }
                    continue;
                case '2':
                    this['remove'](_0x1858b6(420));
                    continue;
                case '3':
                    return;
                case '4':
                    if (_0x5fd100 === null)
                        this[_0x1858b6(429)] = !![];
                    continue;
                case '5':
                    this[_0x1858b6(424)](_0x9cc021[_0x1858b6(430)]);
                    continue;
                }
                break;
            }
        }
        if (!this[_0x1858b6(408)])
            this['status'] = -9306 + -13 * 205 + 3 * 4057;
        const _0x5858bd = !this['has'](_0x1858b6(431));
        if (typeof _0x5fd100 === _0x1858b6(432)) {
            if (_0x5858bd)
                this['type'] = /^\s*</[_0x1858b6(433)](_0x5fd100) ? _0x9cc021[_0x1858b6(434)] : _0x9cc021['QKSBW'];
            this['length'] = Buffer[_0x1858b6(435)](_0x5fd100);
            return;
        }
        if (Buffer['isBuffer'](_0x5fd100)) {
            if (_0x5858bd)
                this['type'] = _0x9cc021['fKbRg'];
            this['length'] = _0x5fd100[_0x1858b6(436)];
            return;
        }
        if (_0x9cc021[_0x1858b6(437)](_0x5fd100, Stream)) {
            _0x9cc021[_0x1858b6(438)](onFinish, this[_0x1858b6(394)], destroy[_0x1858b6(439)](null, _0x5fd100));
            if (_0x9cc021[_0x1858b6(440)](_0x407bdd, _0x5fd100)) {
                _0x5fd100[_0x1858b6(441)](_0x9cc021[_0x1858b6(442)], _0x34ba74 => this[_0x1858b6(443)][_0x1858b6(444)](_0x34ba74));
                if (_0x407bdd != null)
                    this[_0x1858b6(424)](_0x9cc021[_0x1858b6(445)]);
            }
            if (_0x5858bd)
                this[_0x1858b6(446)] = _0x9cc021[_0x1858b6(447)];
            return;
        }
        this['remove'](_0x9cc021[_0x1858b6(445)]), this['type'] = _0x9cc021[_0x1858b6(448)];
    },
    set 'length'(_0x44f1d7) {
        const _0xc1ebd7 = _0x55fffd, _0x532495 = { 'FOCPR': 'Content-Length' };
        !this[_0xc1ebd7(449)](_0xc1ebd7(414)) && this['set'](_0x532495['FOCPR'], _0x44f1d7);
    },
    get 'length'() {
        const _0x4b74f0 = _0x55fffd, _0x30c5b8 = {
                'sHLTd': function (_0x120421, _0x414fd5, _0x306f15) {
                    return _0x120421(_0x414fd5, _0x306f15);
                },
                'ZGOjE': _0x4b74f0(420),
                'ixJZe': function (_0x4452ca, _0x36500b) {
                    return _0x4452ca === _0x36500b;
                },
                'ycoAN': _0x4b74f0(432)
            };
        if (this['has'](_0x4b74f0(420)))
            return _0x30c5b8['sHLTd'](parseInt, this[_0x4b74f0(450)](_0x30c5b8['ZGOjE']), -1162 * 4 + -6389 * -1 + -1731) || 4435 + -3918 + -1 * 517;
        const {body: _0x39b119} = this;
        if (!_0x39b119 || _0x39b119 instanceof Stream)
            return undefined;
        if (_0x30c5b8[_0x4b74f0(451)](typeof _0x39b119, _0x30c5b8[_0x4b74f0(452)]))
            return Buffer['byteLength'](_0x39b119);
        if (Buffer[_0x4b74f0(453)](_0x39b119))
            return _0x39b119[_0x4b74f0(436)];
        return Buffer[_0x4b74f0(435)](JSON[_0x4b74f0(454)](_0x39b119));
    },
    get 'headerSent'() {
        const _0x2fee95 = _0x55fffd;
        return this[_0x2fee95(394)][_0x2fee95(455)];
    },
    'vary'(_0x521177) {
        const _0x5c6665 = _0x55fffd, _0x3516d5 = {
                'FvfcF': function (_0x4de86c, _0x2e78e4, _0x330914) {
                    return _0x4de86c(_0x2e78e4, _0x330914);
                }
            };
        if (this[_0x5c6665(401)])
            return;
        _0x3516d5[_0x5c6665(456)](vary, this[_0x5c6665(394)], _0x521177);
    },
    'redirect'(_0x319658, _0x4936fa) {
        const _0x371a63 = _0x55fffd, _0x2f5e68 = {
                'ZIxSp': _0x371a63(457),
                'slpOr': _0x371a63(458),
                'oKdqP': function (_0x2bb517, _0x31da46) {
                    return _0x2bb517 === _0x31da46;
                },
                'mLIZp': _0x371a63(459),
                'GAasw': _0x371a63(460),
                'FKYKj': _0x371a63(461),
                'GberP': function (_0x2e31a9, _0x4c8f7d) {
                    return _0x2e31a9(_0x4c8f7d);
                },
                'KVqKO': _0x371a63(462)
            }, _0x46411d = _0x2f5e68[_0x371a63(463)][_0x371a63(423)]('|');
        let _0x54e0e1 = 6242 + -6581 * -1 + 12823 * -1;
        while (!![]) {
            switch (_0x46411d[_0x54e0e1++]) {
            case '0':
                if (this['ctx'][_0x371a63(464)](_0x371a63(416))) {
                    _0x319658 = escape(_0x319658), this[_0x371a63(446)] = _0x2f5e68[_0x371a63(465)], this[_0x371a63(412)] = _0x371a63(466) + _0x319658 + '">' + _0x319658 + _0x371a63(467);
                    return;
                }
                continue;
            case '1':
                if (_0x2f5e68[_0x371a63(468)](_0x319658, _0x2f5e68[_0x371a63(469)]))
                    _0x319658 = this['ctx'][_0x371a63(450)](_0x2f5e68[_0x371a63(470)]) || _0x4936fa || '/';
                continue;
            case '2':
                this[_0x371a63(412)] = _0x371a63(471) + _0x319658 + '.';
                continue;
            case '3':
                if (!statuses[_0x371a63(472)][this[_0x371a63(413)]])
                    this[_0x371a63(413)] = -113 * -32 + -8251 + 4937;
                continue;
            case '4':
                this[_0x371a63(473)](_0x2f5e68[_0x371a63(474)], _0x2f5e68['GberP'](encodeUrl, _0x319658));
                continue;
            case '5':
                this[_0x371a63(446)] = _0x2f5e68[_0x371a63(475)];
                continue;
            }
            break;
        }
    },
    'attachment'(_0x18be6a, _0x56e7a4) {
        const _0x3a7549 = _0x55fffd, _0x544dc2 = {
                'JXBZl': function (_0x5237a9, _0x2a3f67) {
                    return _0x5237a9(_0x2a3f67);
                },
                'wPirV': _0x3a7549(476),
                'AlPQi': function (_0x5c7339, _0x340f42, _0x3e6309) {
                    return _0x5c7339(_0x340f42, _0x3e6309);
                }
            };
        if (_0x18be6a)
            this['type'] = _0x544dc2[_0x3a7549(477)](extname, _0x18be6a);
        this[_0x3a7549(473)](_0x544dc2[_0x3a7549(478)], _0x544dc2[_0x3a7549(479)](contentDisposition, _0x18be6a, _0x56e7a4));
    },
    set 'type'(_0x428b0e) {
        const _0x5bb72b = _0x55fffd, _0x388cee = {
                'aBxvg': function (_0x43f415, _0x1c19fa) {
                    return _0x43f415(_0x1c19fa);
                },
                'HqXOC': _0x5bb72b(431)
            };
        _0x428b0e = _0x388cee[_0x5bb72b(480)](getType, _0x428b0e), _0x428b0e ? this[_0x5bb72b(473)](_0x388cee[_0x5bb72b(481)], _0x428b0e) : this[_0x5bb72b(424)](_0x5bb72b(431));
    },
    set 'lastModified'(_0x2f5a1a) {
        const _0x2654d2 = _0x55fffd, _0xb28dbe = {
                'iHVUe': function (_0x19a2b0, _0x6f894) {
                    return _0x19a2b0 === _0x6f894;
                },
                'vUmMQ': _0x2654d2(482)
            };
        if (_0xb28dbe[_0x2654d2(483)](typeof _0x2f5a1a, _0x2654d2(432)))
            _0x2f5a1a = new Date(_0x2f5a1a);
        this[_0x2654d2(473)](_0xb28dbe['vUmMQ'], _0x2f5a1a['toUTCString']());
    },
    get 'lastModified'() {
        const _0x233247 = _0x55fffd, _0x14f99b = { 'TGOxV': _0x233247(484) }, _0x119b6f = this[_0x233247(450)](_0x14f99b[_0x233247(485)]);
        if (_0x119b6f)
            return new Date(_0x119b6f);
    },
    set 'etag'(_0x533c91) {
        const _0x4be509 = _0x55fffd, _0x9a34f = { 'amKMg': _0x4be509(486) };
        if (!/^(W\/)?"/[_0x4be509(433)](_0x533c91))
            _0x533c91 = '"' + _0x533c91 + '"';
        this[_0x4be509(473)](_0x9a34f[_0x4be509(487)], _0x533c91);
    },
    get 'etag'() {
        const _0x41a385 = _0x55fffd, _0x152099 = { 'Sdkmp': _0x41a385(486) };
        return this[_0x41a385(450)](_0x152099[_0x41a385(488)]);
    },
    get 'type'() {
        const _0x239fa2 = _0x55fffd, _0x99951a = { 'dFWmE': _0x239fa2(431) }, _0xd4de02 = this['get'](_0x99951a[_0x239fa2(489)]);
        if (!_0xd4de02)
            return '';
        return _0xd4de02[_0x239fa2(423)](';', 2350 + -6527 + 4178)[-5282 * -1 + 1693 * -2 + -316 * 6];
    },
    'is'(_0x193407, ..._0x10aafa) {
        const _0x4da93b = _0x55fffd, _0x3e2068 = {
                'qdNYD': function (_0x2b9fd2, _0x1f1678, _0x1b173b, ..._0xe32398) {
                    return _0x2b9fd2(_0x1f1678, _0x1b173b, ..._0xe32398);
                }
            };
        return _0x3e2068[_0x4da93b(490)](typeis, this[_0x4da93b(446)], _0x193407, ..._0x10aafa);
    },
    'get'(_0x31b01c) {
        const _0x5d5238 = _0x55fffd;
        return this[_0x5d5238(394)][_0x5d5238(491)](_0x31b01c);
    },
    'has'(_0xb66fd5) {
        const _0x54a0ac = _0x55fffd, _0x41e58b = {
                'syINU': _0x54a0ac(397),
                'QcGlR': function (_0x16238e, _0x4c6c0b) {
                    return _0x16238e in _0x4c6c0b;
                }
            };
        return typeof this[_0x54a0ac(394)][_0x54a0ac(492)] === _0x41e58b[_0x54a0ac(493)] ? this[_0x54a0ac(394)][_0x54a0ac(492)](_0xb66fd5) : _0x41e58b[_0x54a0ac(494)](_0xb66fd5[_0x54a0ac(495)](), this[_0x54a0ac(496)]);
    },
    'set'(_0x47c36d, _0x331cfd) {
        const _0x300f85 = _0x55fffd, _0x4914de = {
                'zqdEO': function (_0xeb35ca, _0x1e3740) {
                    return _0xeb35ca !== _0x1e3740;
                },
                'tdpMX': _0x300f85(432),
                'vQvRz': function (_0x26f7fc, _0x218141) {
                    return _0x26f7fc(_0x218141);
                }
            };
        if (this[_0x300f85(401)])
            return;
        if (arguments[_0x300f85(436)] === 2241 + -111 * -1 + 50 * -47) {
            if (Array[_0x300f85(497)](_0x331cfd))
                _0x331cfd = _0x331cfd[_0x300f85(498)](_0x161519 => typeof _0x161519 === _0x300f85(432) ? _0x161519 : String(_0x161519));
            else {
                if (_0x4914de[_0x300f85(499)](typeof _0x331cfd, _0x4914de['tdpMX']))
                    _0x331cfd = _0x4914de[_0x300f85(500)](String, _0x331cfd);
            }
            this[_0x300f85(394)][_0x300f85(501)](_0x47c36d, _0x331cfd);
        } else
            for (const _0x581c37 in _0x47c36d) {
                this[_0x300f85(473)](_0x581c37, _0x47c36d[_0x581c37]);
            }
    },
    'append'(_0x20f0f1, _0x1e37c9) {
        const _0x2f621d = _0x55fffd, _0xf8cb93 = this[_0x2f621d(450)](_0x20f0f1);
        return _0xf8cb93 && (_0x1e37c9 = Array[_0x2f621d(497)](_0xf8cb93) ? _0xf8cb93[_0x2f621d(502)](_0x1e37c9) : [_0xf8cb93][_0x2f621d(502)](_0x1e37c9)), this[_0x2f621d(473)](_0x20f0f1, _0x1e37c9);
    },
    'remove'(_0x126204) {
        const _0x390b61 = _0x55fffd;
        if (this[_0x390b61(401)])
            return;
        this[_0x390b61(394)][_0x390b61(503)](_0x126204);
    },
    get 'writable'() {
        const _0x49ecad = _0x55fffd;
        if (this[_0x49ecad(394)][_0x49ecad(504)] || this[_0x49ecad(394)][_0x49ecad(505)])
            return ![];
        const _0x5a4e2a = this[_0x49ecad(394)]['socket'];
        if (!_0x5a4e2a)
            return !![];
        return _0x5a4e2a['writable'];
    },
    'inspect'() {
        const _0x235f06 = _0x55fffd;
        if (!this[_0x235f06(394)])
            return;
        const _0x46f0c5 = this[_0x235f06(506)]();
        return _0x46f0c5[_0x235f06(412)] = this['body'], _0x46f0c5;
    },
    'toJSON'() {
        const _0x2f0307 = _0x55fffd, _0x499ac0 = {
                'ywUyR': _0x2f0307(413),
                'uPyPs': _0x2f0307(507),
                'koSwY': _0x2f0307(508)
            };
        return only(this, [
            _0x499ac0[_0x2f0307(509)],
            _0x499ac0[_0x2f0307(510)],
            _0x499ac0[_0x2f0307(511)]
        ]);
    },
    'flushHeaders'() {
        const _0xf0d287 = _0x55fffd;
        this[_0xf0d287(394)][_0xf0d287(512)]();
    }
};
util[_0x55fffd(513)][_0x55fffd(514)] && (module['exports'][util[_0x55fffd(513)][_0x55fffd(514)]] = module[_0x55fffd(393)][_0x55fffd(513)]);