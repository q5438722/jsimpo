const {hasOwnProperty} = Object['prototype'], eol = typeof process !== _0x30d352(484) && process[_0x30d352(485)] === _0x30d352(486) ? '\r\n' : '\n', encode = (_0x5a5d98, _0x4731c) => {
        const _0x4329ca = _0x30d352, _0x1511ef = {
                'XEyue': function (_0x7f45c3, _0x100e25) {
                    return _0x7f45c3 === _0x100e25;
                },
                'YVVfG': _0x4329ca(487),
                'VzEwL': ' = ',
                'Nogli': function (_0x4cb4a5, _0x4a5dda) {
                    return _0x4cb4a5 + _0x4a5dda;
                },
                'ewsAL': function (_0x3385ba, _0x495179) {
                    return _0x3385ba + _0x495179;
                },
                'lqdkq': function (_0x2502c1, _0x2d6686) {
                    return _0x2502c1 + _0x2d6686;
                },
                'hGOyK': function (_0x277003, _0x5efcb8) {
                    return _0x277003(_0x5efcb8);
                },
                'sCesY': function (_0x41402f, _0x36c08c) {
                    return _0x41402f + _0x36c08c;
                },
                'XzrIb': function (_0x3ebfa4, _0x180e24) {
                    return _0x3ebfa4(_0x180e24);
                },
                'naZjy': 'object',
                'XmXUh': function (_0x2063d2, _0x40f0f7) {
                    return _0x2063d2 + _0x40f0f7;
                },
                'sYpkV': function (_0x334458, _0x4857a1) {
                    return _0x334458(_0x4857a1);
                },
                'amDpW': function (_0x31a591, _0x52acf8) {
                    return _0x31a591 + _0x52acf8;
                },
                'AwhdG': function (_0x503b4d, _0x4c0052) {
                    return _0x503b4d + _0x4c0052;
                },
                'lHwWA': function (_0x3e4cf2, _0x4850b9) {
                    return _0x3e4cf2(_0x4850b9);
                },
                'CDxRN': function (_0x1050ba, _0x574c5f, _0x4f280d) {
                    return _0x1050ba(_0x574c5f, _0x4f280d);
                }
            }, _0x582ae2 = [];
        let _0x57d2b8 = '';
        _0x1511ef[_0x4329ca(488)](typeof _0x4731c, _0x1511ef['YVVfG']) ? _0x4731c = {
            'section': _0x4731c,
            'whitespace': ![]
        } : (_0x4731c = _0x4731c || Object[_0x4329ca(489)](null), _0x4731c[_0x4329ca(490)] = _0x1511ef[_0x4329ca(488)](_0x4731c[_0x4329ca(490)], !![]));
        const _0x1cb1ce = _0x4731c['whitespace'] ? _0x1511ef[_0x4329ca(491)] : '=';
        for (const _0x5ca605 of Object['keys'](_0x5a5d98)) {
            const _0xd170d2 = _0x5a5d98[_0x5ca605];
            if (_0xd170d2 && Array[_0x4329ca(492)](_0xd170d2)) {
                for (const _0x5a97ec of _0xd170d2)
                    _0x57d2b8 += _0x1511ef[_0x4329ca(493)](_0x1511ef[_0x4329ca(494)](_0x1511ef[_0x4329ca(495)](_0x1511ef[_0x4329ca(496)](safe, _0x1511ef[_0x4329ca(497)](_0x5ca605, '[]')), _0x1cb1ce), _0x1511ef[_0x4329ca(498)](safe, _0x5a97ec)), '\n');
            } else {
                if (_0xd170d2 && typeof _0xd170d2 === _0x1511ef['naZjy'])
                    _0x582ae2[_0x4329ca(499)](_0x5ca605);
                else
                    _0x57d2b8 += _0x1511ef[_0x4329ca(500)](_0x1511ef['XmXUh'](_0x1511ef[_0x4329ca(500)](_0x1511ef[_0x4329ca(501)](safe, _0x5ca605), _0x1cb1ce), safe(_0xd170d2)), eol);
            }
        }
        if (_0x4731c[_0x4329ca(502)] && _0x57d2b8['length'])
            _0x57d2b8 = _0x1511ef[_0x4329ca(500)](_0x1511ef[_0x4329ca(503)](_0x1511ef[_0x4329ca(504)]('[' + _0x1511ef['lHwWA'](safe, _0x4731c[_0x4329ca(502)]), ']'), eol), _0x57d2b8);
        for (const _0x523008 of _0x582ae2) {
            const _0x23ec7b = _0x1511ef[_0x4329ca(505)](dotSplit, _0x523008)[_0x4329ca(506)]('\\.'), _0x3bc336 = (_0x4731c['section'] ? _0x4731c['section'] + '.' : '') + _0x23ec7b, {whitespace: _0xad49b6} = _0x4731c, _0x5acae = _0x1511ef[_0x4329ca(507)](encode, _0x5a5d98[_0x523008], {
                    'section': _0x3bc336,
                    'whitespace': _0xad49b6
                });
            if (_0x57d2b8[_0x4329ca(508)] && _0x5acae[_0x4329ca(508)])
                _0x57d2b8 += eol;
            _0x57d2b8 += _0x5acae;
        }
        return _0x57d2b8;
    }, dotSplit = _0x2f48ae => _0x2f48ae[_0x30d352(509)](/\1/g, _0x30d352(510))[_0x30d352(509)](/\\\./g, '\x01')[_0x30d352(511)](/\./)[_0x30d352(512)](_0xd9d17b => _0xd9d17b['replace'](/\1/g, '\\.')[_0x30d352(509)](/\2LITERAL\\1LITERAL\2/g, '\x01')), decode = _0x4ca62f => {
        const _0x21dfb8 = _0x30d352, _0x47af03 = {
                'NaJiA': function (_0x12f25b, _0x2b8ff0) {
                    return _0x12f25b !== _0x2b8ff0;
                },
                'bdgXJ': function (_0xbfb682, _0x327581) {
                    return _0xbfb682(_0x327581);
                },
                'EwNXY': function (_0xedbc94, _0x5c5b9f) {
                    return _0xedbc94 === _0x5c5b9f;
                },
                'llnIY': function (_0x5e3bd7, _0x56eeb1) {
                    return _0x5e3bd7 > _0x56eeb1;
                },
                'xLGdo': _0x21dfb8(513),
                'qfcyr': function (_0xa92173, _0x37c0c1) {
                    return _0xa92173(_0x37c0c1);
                },
                'OPbxu': 'true',
                'iuAce': 'false',
                'sJhUZ': _0x21dfb8(514),
                'gQWWn': 'object',
                'JLccE': function (_0x5b633c, _0xb27a4b) {
                    return _0x5b633c(_0xb27a4b);
                },
                'qsMUp': function (_0x11410f, _0x390419) {
                    return _0x11410f === _0x390419;
                },
                'RFIdr': function (_0x188967, _0x3fb140) {
                    return _0x188967 !== _0x3fb140;
                },
                'DcIhW': function (_0x1e8980, _0x1a3e2d) {
                    return _0x1e8980 === _0x1a3e2d;
                }
            }, _0x3622d8 = Object[_0x21dfb8(489)](null);
        let _0x62bdaf = _0x3622d8, _0x40e90e = null;
        const _0x1c6838 = /^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i, _0x53e356 = _0x4ca62f['split'](/[\r\n]+/g);
        for (const _0x3cdc65 of _0x53e356) {
            if (!_0x3cdc65 || _0x3cdc65[_0x21dfb8(515)](/^\s*[;#]/))
                continue;
            const _0x1d758b = _0x3cdc65[_0x21dfb8(515)](_0x1c6838);
            if (!_0x1d758b)
                continue;
            if (_0x47af03[_0x21dfb8(516)](_0x1d758b[-985 * -5 + -5592 + 668], undefined)) {
                _0x40e90e = _0x47af03['bdgXJ'](unsafe, _0x1d758b[-677 * -7 + -1 * -5276 + -1669 * 6]);
                if (_0x47af03[_0x21dfb8(517)](_0x40e90e, _0x21dfb8(513))) {
                    _0x62bdaf = Object[_0x21dfb8(489)](null);
                    continue;
                }
                _0x62bdaf = _0x3622d8[_0x40e90e] = _0x3622d8[_0x40e90e] || Object['create'](null);
                continue;
            }
            const _0x2e9db5 = _0x47af03[_0x21dfb8(518)](unsafe, _0x1d758b[1217 * 2 + 4686 + -7118]), _0x99f997 = _0x47af03[_0x21dfb8(519)](_0x2e9db5['length'], -8377 + -8110 + 16489) && _0x47af03[_0x21dfb8(517)](_0x2e9db5[_0x21dfb8(520)](-(1208 * -4 + -9961 + -1 * -14795)), '[]'), _0x5ae8aa = _0x99f997 ? _0x2e9db5['slice'](4574 + 8847 + -13421, -(6786 + -1 * -9293 + -3 * 5359)) : _0x2e9db5;
            if (_0x47af03[_0x21dfb8(517)](_0x5ae8aa, _0x47af03[_0x21dfb8(521)]))
                continue;
            const _0x3eb21e = _0x1d758b[-8721 + 427 * -5 + 10859 * 1] ? _0x47af03[_0x21dfb8(522)](unsafe, _0x1d758b[1 * 196 + -2697 + 1 * 2505]) : !![], _0x4cd13f = _0x3eb21e === _0x47af03[_0x21dfb8(523)] || _0x3eb21e === _0x47af03[_0x21dfb8(524)] || _0x47af03[_0x21dfb8(517)](_0x3eb21e, _0x47af03[_0x21dfb8(525)]) ? JSON[_0x21dfb8(526)](_0x3eb21e) : _0x3eb21e;
            if (_0x99f997) {
                if (!hasOwnProperty[_0x21dfb8(527)](_0x62bdaf, _0x5ae8aa))
                    _0x62bdaf[_0x5ae8aa] = [];
                else {
                    if (!Array[_0x21dfb8(492)](_0x62bdaf[_0x5ae8aa]))
                        _0x62bdaf[_0x5ae8aa] = [_0x62bdaf[_0x5ae8aa]];
                }
            }
            if (Array[_0x21dfb8(492)](_0x62bdaf[_0x5ae8aa]))
                _0x62bdaf[_0x5ae8aa][_0x21dfb8(499)](_0x4cd13f);
            else
                _0x62bdaf[_0x5ae8aa] = _0x4cd13f;
        }
        const _0x3473f5 = [];
        for (const _0x1c74e4 of Object[_0x21dfb8(528)](_0x3622d8)) {
            if (!hasOwnProperty[_0x21dfb8(527)](_0x3622d8, _0x1c74e4) || typeof _0x3622d8[_0x1c74e4] !== _0x47af03[_0x21dfb8(529)] || Array['isArray'](_0x3622d8[_0x1c74e4]))
                continue;
            const _0x24aeaa = _0x47af03[_0x21dfb8(530)](dotSplit, _0x1c74e4);
            let _0x5dd23b = _0x3622d8;
            const _0x3deb76 = _0x24aeaa[_0x21dfb8(531)](), _0x5a0fc1 = _0x3deb76['replace'](/\\\./g, '.');
            for (const _0x2ecbba of _0x24aeaa) {
                if (_0x47af03['qsMUp'](_0x2ecbba, _0x47af03['xLGdo']))
                    continue;
                if (!hasOwnProperty['call'](_0x5dd23b, _0x2ecbba) || _0x47af03[_0x21dfb8(532)](typeof _0x5dd23b[_0x2ecbba], _0x47af03['gQWWn']))
                    _0x5dd23b[_0x2ecbba] = Object[_0x21dfb8(489)](null);
                _0x5dd23b = _0x5dd23b[_0x2ecbba];
            }
            if (_0x47af03[_0x21dfb8(533)](_0x5dd23b, _0x3622d8) && _0x5a0fc1 === _0x3deb76)
                continue;
            _0x5dd23b[_0x5a0fc1] = _0x3622d8[_0x1c74e4], _0x3473f5[_0x21dfb8(499)](_0x1c74e4);
        }
        for (const _0x44612d of _0x3473f5)
            delete _0x3622d8[_0x44612d];
        return _0x3622d8;
    }, isQuoted = _0x1f96f1 => _0x1f96f1[_0x30d352(534)](1224 + 7297 + -8521) === '"' && _0x1f96f1['slice'](-(13 * 707 + 4745 + -13935)) === '"' || _0x1f96f1['charAt'](-3342 + -8237 * -1 + -4895) === '\'' && _0x1f96f1['slice'](-(7 * 305 + 1207 * -2 + 280)) === '\'', safe = _0x3ce27b => typeof _0x3ce27b !== _0x30d352(487) || _0x3ce27b[_0x30d352(515)](/[=\r\n]/) || _0x3ce27b[_0x30d352(515)](/^\[/) || _0x3ce27b['length'] > 6412 + 1972 + -8383 && isQuoted(_0x3ce27b) || _0x3ce27b !== _0x3ce27b[_0x30d352(535)]() ? JSON['stringify'](_0x3ce27b) : _0x3ce27b[_0x30d352(509)](/;/g, '\\;')['replace'](/#/g, '\\#'), unsafe = (_0x33e041, _0x250063) => {
        const _0x42b225 = _0x30d352, _0x287a37 = {
                'SjPCD': function (_0x3f9698, _0xfe9eed) {
                    return _0x3f9698 || _0xfe9eed;
                },
                'SQkMm': function (_0x1274bd, _0x241eed) {
                    return _0x1274bd(_0x241eed);
                },
                'UcgTx': function (_0x146f93, _0x378e74) {
                    return _0x146f93 < _0x378e74;
                },
                'ThkrH': function (_0x255d33, _0x264b9) {
                    return _0x255d33 !== _0x264b9;
                },
                'wNSyU': _0x42b225(536),
                'BwJeq': function (_0x479203, _0x3ac395) {
                    return _0x479203 + _0x3ac395;
                },
                'gTHqi': function (_0x5944c7, _0x51d4f9) {
                    return _0x5944c7 !== _0x51d4f9;
                },
                'ZgSoT': function (_0x415397, _0xe55367) {
                    return _0x415397 === _0xe55367;
                }
            };
        _0x33e041 = _0x287a37[_0x42b225(537)](_0x33e041, '')[_0x42b225(535)]();
        if (_0x287a37[_0x42b225(538)](isQuoted, _0x33e041)) {
            if (_0x33e041[_0x42b225(534)](5 * 236 + -446 * -15 + -7870 * 1) === '\'')
                _0x33e041 = _0x33e041['substr'](-4183 + 743 * 1 + 3441, _0x33e041['length'] - (2 * -4457 + -878 + -1 * -9794));
            try {
                _0x33e041 = JSON['parse'](_0x33e041);
            } catch (_0x396d4a) {
            }
        } else {
            let _0x262c74 = ![], _0x254265 = '';
            for (let _0x549f43 = -9091 + -884 + -1425 * -7, _0x125f72 = _0x33e041['length']; _0x287a37['UcgTx'](_0x549f43, _0x125f72); _0x549f43++) {
                const _0xead54c = _0x33e041[_0x42b225(534)](_0x549f43);
                if (_0x262c74) {
                    if (_0x287a37['ThkrH'](_0x287a37[_0x42b225(539)][_0x42b225(540)](_0xead54c), -(7315 + -197 * -28 + 2 * -6415)))
                        _0x254265 += _0xead54c;
                    else
                        _0x254265 += _0x287a37[_0x42b225(541)]('\\', _0xead54c);
                    _0x262c74 = ![];
                } else {
                    if (_0x287a37[_0x42b225(542)](';#'['indexOf'](_0xead54c), -(165 * -41 + -2 * -127 + 814 * 8)))
                        break;
                    else {
                        if (_0x287a37[_0x42b225(543)](_0xead54c, '\\'))
                            _0x262c74 = !![];
                        else
                            _0x254265 += _0xead54c;
                    }
                }
            }
            if (_0x262c74)
                _0x254265 += '\\';
            return _0x254265[_0x42b225(535)]();
        }
        return _0x33e041;
    };
module[_0x30d352(544)] = {
    'parse': decode,
    'decode': decode,
    'stringify': encode,
    'encode': encode,
    'safe': safe,
    'unsafe': unsafe
};