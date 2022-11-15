const contentDisposition = require(_0x25ec36(129)), getType = require(_0x25ec36(130)), onFinish = require(_0x25ec36(131)), escape = require('escape-html'), typeis = require(_0x25ec36(132))['is'], statuses = require(_0x25ec36(133)), destroy = require(_0x25ec36(134)), assert = require(_0x25ec36(135)), extname = require(_0x25ec36(136))[_0x25ec36(137)], vary = require('vary'), only = require(_0x25ec36(138)), util = require(_0x25ec36(139)), encodeUrl = require(_0x25ec36(140)), Stream = require('stream');
module[_0x25ec36(141)] = {
    get 'socket'() {
        const _0xea7ece = _0x25ec36;
        return this[_0xea7ece(142)][_0xea7ece(143)];
    },
    get 'header'() {
        const _0x9c493 = _0x25ec36, _0x2d5cd9 = {
                'KGugV': function (_0x556687, _0x42bfdf) {
                    return _0x556687 === _0x42bfdf;
                }
            }, {res: _0x28b0bb} = this;
        return _0x2d5cd9['KGugV'](typeof _0x28b0bb[_0x9c493(144)], 'function') ? _0x28b0bb[_0x9c493(144)]() : _0x28b0bb['_headers'] || {};
    },
    get 'headers'() {
        const _0x2d48a5 = _0x25ec36;
        return this[_0x2d48a5(145)];
    },
    get 'status'() {
        const _0x19c3ed = _0x25ec36;
        return this[_0x19c3ed(142)]['statusCode'];
    },
    set 'status'(_0x1eb7e9) {
        const _0x77fdb6 = _0x25ec36, _0x318a1b = {
                'tZANE': _0x77fdb6(146),
                'tFCIL': function (_0x1418a7, _0x5967da, _0x5c0b09) {
                    return _0x1418a7(_0x5967da, _0x5c0b09);
                },
                'pvGxB': _0x77fdb6(147),
                'aXGZZ': function (_0x20d079, _0x463229) {
                    return _0x20d079 >= _0x463229;
                }
            }, _0x273ea8 = _0x318a1b[_0x77fdb6(148)]['split']('|');
        let _0x226c0d = -4388 * -1 + 2 * -1867 + -654 * 1;
        while (!![]) {
            switch (_0x273ea8[_0x226c0d++]) {
            case '0':
                _0x318a1b[_0x77fdb6(149)](assert, Number[_0x77fdb6(150)](_0x1eb7e9), _0x318a1b['pvGxB']);
                continue;
            case '1':
                this['_explicitStatus'] = !![];
                continue;
            case '2':
                if (this['body'] && statuses[_0x77fdb6(151)][_0x1eb7e9])
                    this[_0x77fdb6(152)] = null;
                continue;
            case '3':
                this[_0x77fdb6(142)][_0x77fdb6(153)] = _0x1eb7e9;
                continue;
            case '4':
                if (this['headerSent'])
                    return;
                continue;
            case '5':
                if (this[_0x77fdb6(154)]['httpVersionMajor'] < 4 * 2177 + -5 * -1346 + -15436)
                    this[_0x77fdb6(142)][_0x77fdb6(155)] = statuses[_0x1eb7e9];
                continue;
            case '6':
                _0x318a1b['tFCIL'](assert, _0x318a1b[_0x77fdb6(156)](_0x1eb7e9, -984 + 9512 * 1 + -8428) && _0x1eb7e9 <= 6837 * -1 + 6274 * -1 + 14110, _0x77fdb6(157) + _0x1eb7e9);
                continue;
            }
            break;
        }
    },
    get 'message'() {
        const _0x175165 = _0x25ec36;
        return this['res']['statusMessage'] || statuses[this[_0x175165(158)]];
    },
    set 'message'(_0x4576cf) {
        const _0x3f5371 = _0x25ec36;
        this[_0x3f5371(142)][_0x3f5371(155)] = _0x4576cf;
    },
    get 'body'() {
        return this['_body'];
    },
    set 'body'(_0x1118a1) {
        const _0x348691 = _0x25ec36, _0x167865 = {
                'KsHkT': function (_0x3de88a, _0x52ce06) {
                    return _0x3de88a == _0x52ce06;
                },
                'vxVoR': _0x348691(159),
                'XSRyy': function (_0x53005b, _0x2b6dc7) {
                    return _0x53005b === _0x2b6dc7;
                },
                'EHKPx': _0x348691(160),
                'PBAQm': _0x348691(161),
                'KAeuj': _0x348691(162),
                'BlVAs': _0x348691(163),
                'nfTIz': _0x348691(164),
                'qQsVf': _0x348691(165),
                'mUlAY': _0x348691(166),
                'zRuQa': function (_0x2438ef, _0xcbc6a6) {
                    return _0x2438ef instanceof _0xcbc6a6;
                },
                'dPQDb': function (_0x28e371, _0x11968b, _0x4396dc) {
                    return _0x28e371(_0x11968b, _0x4396dc);
                },
                'PxlRi': function (_0x545ce2, _0x173920) {
                    return _0x545ce2 !== _0x173920;
                },
                'LBELX': _0x348691(167),
                'OmOKM': function (_0x9ac3da, _0x5637b0) {
                    return _0x9ac3da != _0x5637b0;
                },
                'wgosy': _0x348691(168)
            }, _0x4880f3 = this[_0x348691(169)];
        this[_0x348691(169)] = _0x1118a1;
        if (_0x167865[_0x348691(170)](_0x1118a1, null)) {
            const _0x40f47c = _0x167865[_0x348691(171)][_0x348691(172)]('|');
            let _0x2fdee1 = -579 + 3 * -853 + 3138;
            while (!![]) {
                switch (_0x40f47c[_0x2fdee1++]) {
                case '0':
                    if (!statuses[_0x348691(151)][this[_0x348691(158)]]) {
                        if (_0x167865[_0x348691(173)](this[_0x348691(174)], _0x167865['EHKPx'])) {
                            this[_0x348691(169)] = _0x167865[_0x348691(175)];
                            return;
                        }
                        this[_0x348691(158)] = -233 + -3850 + -1 * -4287;
                    }
                    continue;
                case '1':
                    this[_0x348691(176)](_0x348691(164));
                    continue;
                case '2':
                    this['remove'](_0x167865[_0x348691(177)]);
                    continue;
                case '3':
                    return;
                case '4':
                    if (_0x167865['XSRyy'](_0x1118a1, null))
                        this[_0x348691(178)] = !![];
                    continue;
                case '5':
                    this['remove'](_0x167865['BlVAs']);
                    continue;
                }
                break;
            }
        }
        if (!this[_0x348691(179)])
            this['status'] = -1 * -2875 + 4730 + -7405;
        const _0x74d699 = !this[_0x348691(180)](_0x167865[_0x348691(181)]);
        if (typeof _0x1118a1 === _0x348691(182)) {
            if (_0x74d699)
                this[_0x348691(174)] = /^\s*</['test'](_0x1118a1) ? _0x348691(183) : _0x167865['qQsVf'];
            this[_0x348691(184)] = Buffer['byteLength'](_0x1118a1);
            return;
        }
        if (Buffer[_0x348691(185)](_0x1118a1)) {
            if (_0x74d699)
                this[_0x348691(174)] = _0x167865['mUlAY'];
            this[_0x348691(184)] = _0x1118a1['length'];
            return;
        }
        if (_0x167865[_0x348691(186)](_0x1118a1, Stream)) {
            _0x167865[_0x348691(187)](onFinish, this[_0x348691(142)], destroy[_0x348691(188)](null, _0x1118a1));
            if (_0x167865[_0x348691(189)](_0x4880f3, _0x1118a1)) {
                _0x1118a1['once'](_0x167865[_0x348691(190)], _0x22c4dc => this[_0x348691(191)][_0x348691(192)](_0x22c4dc));
                if (_0x167865['OmOKM'](_0x4880f3, null))
                    this['remove'](_0x348691(163));
            }
            if (_0x74d699)
                this[_0x348691(174)] = _0x167865[_0x348691(193)];
            return;
        }
        this[_0x348691(176)](_0x167865[_0x348691(194)]), this[_0x348691(174)] = _0x167865['wgosy'];
    },
    set 'length'(_0x554b22) {
        const _0x56840e = _0x25ec36, _0x36a3bb = {
                'dKSZh': 'Transfer-Encoding',
                'KLrTB': 'Content-Length'
            };
        !this[_0x56840e(180)](_0x36a3bb[_0x56840e(195)]) && this['set'](_0x36a3bb['KLrTB'], _0x554b22);
    },
    get 'length'() {
        const _0x181cd0 = _0x25ec36, _0x20b708 = {
                'JQTjc': _0x181cd0(163),
                'rGnCm': function (_0x86a584, _0x4f7aaf, _0x77bdbf) {
                    return _0x86a584(_0x4f7aaf, _0x77bdbf);
                },
                'WuYnE': function (_0x38d54f, _0x486175) {
                    return _0x38d54f instanceof _0x486175;
                },
                'suPAz': function (_0x57557b, _0x532b7f) {
                    return _0x57557b === _0x532b7f;
                }
            };
        if (this[_0x181cd0(180)](_0x20b708[_0x181cd0(196)]))
            return _0x20b708[_0x181cd0(197)](parseInt, this[_0x181cd0(198)](_0x20b708[_0x181cd0(196)]), -6535 + 133 * 2 + 6279) || 5 * 859 + -3 * -2642 + -12221;
        const {body: _0x53dad3} = this;
        if (!_0x53dad3 || _0x20b708[_0x181cd0(199)](_0x53dad3, Stream))
            return undefined;
        if (_0x20b708[_0x181cd0(200)](typeof _0x53dad3, _0x181cd0(182)))
            return Buffer[_0x181cd0(201)](_0x53dad3);
        if (Buffer[_0x181cd0(185)](_0x53dad3))
            return _0x53dad3[_0x181cd0(184)];
        return Buffer['byteLength'](JSON[_0x181cd0(202)](_0x53dad3));
    },
    get 'headerSent'() {
        const _0x5e759e = _0x25ec36;
        return this[_0x5e759e(142)][_0x5e759e(203)];
    },
    'vary'(_0x59c381) {
        const _0x5ebe40 = _0x25ec36, _0x14c064 = {
                'XiWgf': function (_0x5eb625, _0x3e5619, _0x43bb02) {
                    return _0x5eb625(_0x3e5619, _0x43bb02);
                }
            };
        if (this[_0x5ebe40(204)])
            return;
        _0x14c064[_0x5ebe40(205)](vary, this[_0x5ebe40(142)], _0x59c381);
    },
    'redirect'(_0x1dfdf5, _0x44baba) {
        const _0x365ade = _0x25ec36, _0x4657fd = {
                'IctLy': _0x365ade(206),
                'NnCnH': _0x365ade(183),
                'juFUK': function (_0x454843, _0x39001b) {
                    return _0x454843(_0x39001b);
                },
                'nqJqk': _0x365ade(207),
                'AVOEh': 'text/plain; charset=utf-8',
                'VCkac': function (_0x335014, _0x1d67c4) {
                    return _0x335014 === _0x1d67c4;
                },
                'gIUGT': _0x365ade(208),
                'ifzcd': _0x365ade(209),
                'zQuGb': 'Location'
            }, _0x290b29 = _0x4657fd[_0x365ade(210)][_0x365ade(172)]('|');
        let _0x1deb5b = -5504 + -9358 + -2 * -7431;
        while (!![]) {
            switch (_0x290b29[_0x1deb5b++]) {
            case '0':
                if (this[_0x365ade(191)][_0x365ade(211)](_0x4657fd[_0x365ade(212)])) {
                    _0x1dfdf5 = _0x4657fd[_0x365ade(213)](escape, _0x1dfdf5), this[_0x365ade(174)] = _0x4657fd['nqJqk'], this[_0x365ade(152)] = _0x365ade(214) + _0x1dfdf5 + '">' + _0x1dfdf5 + _0x365ade(215);
                    return;
                }
                continue;
            case '1':
                this[_0x365ade(174)] = _0x4657fd[_0x365ade(216)];
                continue;
            case '2':
                if (_0x4657fd[_0x365ade(217)](_0x1dfdf5, _0x4657fd[_0x365ade(218)]))
                    _0x1dfdf5 = this[_0x365ade(191)]['get'](_0x4657fd[_0x365ade(219)]) || _0x44baba || '/';
                continue;
            case '3':
                this[_0x365ade(152)] = 'Redirecting to ' + _0x1dfdf5 + '.';
                continue;
            case '4':
                if (!statuses[_0x365ade(220)][this[_0x365ade(158)]])
                    this[_0x365ade(158)] = 1 * -6873 + 69 * 89 + 1034 * 1;
                continue;
            case '5':
                this[_0x365ade(221)](_0x4657fd[_0x365ade(222)], _0x4657fd[_0x365ade(213)](encodeUrl, _0x1dfdf5));
                continue;
            }
            break;
        }
    },
    'attachment'(_0x5653f2, _0x5e8906) {
        const _0x527bf2 = _0x25ec36, _0x3e552b = {
                'mLPUi': function (_0x2a098c, _0x391e6a) {
                    return _0x2a098c(_0x391e6a);
                },
                'PNeSO': _0x527bf2(223),
                'cBrlL': function (_0x58bd30, _0x57a3f9, _0x4acc64) {
                    return _0x58bd30(_0x57a3f9, _0x4acc64);
                }
            };
        if (_0x5653f2)
            this['type'] = _0x3e552b[_0x527bf2(224)](extname, _0x5653f2);
        this['set'](_0x3e552b['PNeSO'], _0x3e552b[_0x527bf2(225)](contentDisposition, _0x5653f2, _0x5e8906));
    },
    set 'type'(_0x70b40c) {
        const _0x3d0eec = _0x25ec36, _0x48933d = {
                'aDvus': function (_0x5bdcd6, _0x3f05c1) {
                    return _0x5bdcd6(_0x3f05c1);
                },
                'QHwhB': _0x3d0eec(164)
            };
        _0x70b40c = _0x48933d[_0x3d0eec(226)](getType, _0x70b40c), _0x70b40c ? this[_0x3d0eec(221)](_0x48933d[_0x3d0eec(227)], _0x70b40c) : this[_0x3d0eec(176)](_0x48933d[_0x3d0eec(227)]);
    },
    set 'lastModified'(_0x1bda91) {
        const _0x21fc43 = _0x25ec36, _0x25c0ad = { 'GDHEh': 'Last-Modified' };
        if (typeof _0x1bda91 === _0x21fc43(182))
            _0x1bda91 = new Date(_0x1bda91);
        this[_0x21fc43(221)](_0x25c0ad['GDHEh'], _0x1bda91[_0x21fc43(228)]());
    },
    get 'lastModified'() {
        const _0x412d16 = _0x25ec36, _0x20c115 = { 'wyVxE': 'last-modified' }, _0xe0b2c2 = this[_0x412d16(198)](_0x20c115[_0x412d16(229)]);
        if (_0xe0b2c2)
            return new Date(_0xe0b2c2);
    },
    set 'etag'(_0x9dd7f2) {
        const _0x16b2d3 = _0x25ec36, _0x3086e8 = { 'DyKaI': 'ETag' };
        if (!/^(W\/)?"/[_0x16b2d3(230)](_0x9dd7f2))
            _0x9dd7f2 = '"' + _0x9dd7f2 + '"';
        this[_0x16b2d3(221)](_0x3086e8[_0x16b2d3(231)], _0x9dd7f2);
    },
    get 'etag'() {
        const _0x329f87 = _0x25ec36, _0x1f6fdb = { 'pbaSL': 'ETag' };
        return this[_0x329f87(198)](_0x1f6fdb[_0x329f87(232)]);
    },
    get 'type'() {
        const _0x53fdf9 = _0x25ec36, _0x2ed4a1 = { 'bLqfy': _0x53fdf9(164) }, _0x4ccb5a = this[_0x53fdf9(198)](_0x2ed4a1[_0x53fdf9(233)]);
        if (!_0x4ccb5a)
            return '';
        return _0x4ccb5a['split'](';', 2711 * 1 + 7729 * -1 + 7 * 717)[-36 * 121 + -1 * -3972 + -384 * -1];
    },
    'is'(_0x2a886b, ..._0x17728f) {
        const _0x648529 = _0x25ec36, _0x390637 = {
                'lDzse': function (_0xfb0687, _0x1e22f5, _0x819472, ..._0x49300e) {
                    return _0xfb0687(_0x1e22f5, _0x819472, ..._0x49300e);
                }
            };
        return _0x390637[_0x648529(234)](typeis, this['type'], _0x2a886b, ..._0x17728f);
    },
    'get'(_0x5f1060) {
        const _0x4dfbef = _0x25ec36;
        return this[_0x4dfbef(142)][_0x4dfbef(235)](_0x5f1060);
    },
    'has'(_0x2c0db6) {
        const _0xc65bbc = _0x25ec36, _0x5231da = {
                'SVLNZ': function (_0x2f3735, _0x3b04dc) {
                    return _0x2f3735 === _0x3b04dc;
                },
                'CoMjA': _0xc65bbc(236),
                'LsyQF': function (_0x5c5d8c, _0x4e8db4) {
                    return _0x5c5d8c in _0x4e8db4;
                }
            };
        return _0x5231da[_0xc65bbc(237)](typeof this['res']['hasHeader'], _0x5231da[_0xc65bbc(238)]) ? this['res'][_0xc65bbc(239)](_0x2c0db6) : _0x5231da['LsyQF'](_0x2c0db6[_0xc65bbc(240)](), this[_0xc65bbc(241)]);
    },
    'set'(_0x301f6c, _0x14ad21) {
        const _0x52d513 = _0x25ec36, _0x5c449d = {
                'irMLt': function (_0x46f792, _0xbaa1d4) {
                    return _0x46f792 === _0xbaa1d4;
                },
                'UJFHo': function (_0x2b32e3, _0x376ba5) {
                    return _0x2b32e3 !== _0x376ba5;
                },
                'egWdb': _0x52d513(182),
                'sTtAT': function (_0x2b6b32, _0x439188) {
                    return _0x2b6b32(_0x439188);
                }
            };
        if (this[_0x52d513(204)])
            return;
        if (_0x5c449d[_0x52d513(242)](arguments[_0x52d513(184)], 6934 + -4072 + -2860)) {
            if (Array[_0x52d513(243)](_0x14ad21))
                _0x14ad21 = _0x14ad21['map'](_0x1c7430 => typeof _0x1c7430 === _0x52d513(182) ? _0x1c7430 : String(_0x1c7430));
            else {
                if (_0x5c449d[_0x52d513(244)](typeof _0x14ad21, _0x5c449d[_0x52d513(245)]))
                    _0x14ad21 = _0x5c449d[_0x52d513(246)](String, _0x14ad21);
            }
            this[_0x52d513(142)]['setHeader'](_0x301f6c, _0x14ad21);
        } else
            for (const _0x2dc53e in _0x301f6c) {
                this['set'](_0x2dc53e, _0x301f6c[_0x2dc53e]);
            }
    },
    'append'(_0x3a3f02, _0x2eb1ca) {
        const _0x5e6172 = _0x25ec36, _0x5115fc = this[_0x5e6172(198)](_0x3a3f02);
        return _0x5115fc && (_0x2eb1ca = Array[_0x5e6172(243)](_0x5115fc) ? _0x5115fc[_0x5e6172(247)](_0x2eb1ca) : [_0x5115fc][_0x5e6172(247)](_0x2eb1ca)), this['set'](_0x3a3f02, _0x2eb1ca);
    },
    'remove'(_0x160db2) {
        const _0x192a26 = _0x25ec36;
        if (this[_0x192a26(204)])
            return;
        this['res'][_0x192a26(248)](_0x160db2);
    },
    get 'writable'() {
        const _0x4d6b83 = _0x25ec36;
        if (this[_0x4d6b83(142)][_0x4d6b83(249)] || this['res'][_0x4d6b83(250)])
            return ![];
        const _0x733564 = this['res'][_0x4d6b83(143)];
        if (!_0x733564)
            return !![];
        return _0x733564[_0x4d6b83(251)];
    },
    'inspect'() {
        const _0x1810d1 = _0x25ec36;
        if (!this[_0x1810d1(142)])
            return;
        const _0x103d2e = this[_0x1810d1(252)]();
        return _0x103d2e[_0x1810d1(152)] = this['body'], _0x103d2e;
    },
    'toJSON'() {
        const _0x1adba1 = _0x25ec36, _0x3c4259 = {
                'TNZPJ': function (_0x1b682a, _0x38d596, _0x39be90) {
                    return _0x1b682a(_0x38d596, _0x39be90);
                },
                'oFFZV': 'message',
                'IbfVz': _0x1adba1(145)
            };
        return _0x3c4259[_0x1adba1(253)](only, this, [
            _0x1adba1(158),
            _0x3c4259[_0x1adba1(254)],
            _0x3c4259[_0x1adba1(255)]
        ]);
    },
    'flushHeaders'() {
        const _0x59cbb0 = _0x25ec36;
        this[_0x59cbb0(142)]['flushHeaders']();
    }
};
util[_0x25ec36(256)]['custom'] && (module[_0x25ec36(141)][util[_0x25ec36(256)][_0x25ec36(257)]] = module['exports'][_0x25ec36(256)]);