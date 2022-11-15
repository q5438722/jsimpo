'use strict';
const peq = new Uint32Array(0x10000), myers_32 = (_0x9759e4, _0x2fd997) => {
        const _0x52c14b = {
                'Ljgwd': function (_0x306951, _0x40ab27) {
                    return _0x306951 << _0x40ab27;
                },
                'iLxLc': function (_0x5a79cd, _0x34e4e0) {
                    return _0x5a79cd - _0x34e4e0;
                },
                'wsQUz': function (_0x36658e, _0x10d98f) {
                    return _0x36658e << _0x10d98f;
                },
                'MggKe': function (_0x5897d8, _0x51d9c1) {
                    return _0x5897d8 < _0x51d9c1;
                },
                'MWJYg': function (_0x298c38, _0x3b0aef) {
                    return _0x298c38 | _0x3b0aef;
                },
                'fvfFa': function (_0x39df13, _0x3caaeb) {
                    return _0x39df13 ^ _0x3caaeb;
                },
                'jNFwE': function (_0x1ec058, _0x24de4b) {
                    return _0x1ec058 + _0x24de4b;
                },
                'xVgbD': function (_0x2a91cd, _0x59c02e) {
                    return _0x2a91cd & _0x59c02e;
                },
                'zWbqF': function (_0x36e639, _0x793412) {
                    return _0x36e639 | _0x793412;
                },
                'hKmWB': function (_0x539135, _0x470754) {
                    return _0x539135 & _0x470754;
                },
                'buCZH': function (_0x2ca525, _0x524599) {
                    return _0x2ca525 << _0x524599;
                },
                'TLQPc': function (_0x579012, _0x50f185) {
                    return _0x579012 << _0x50f185;
                },
                'lNPqd': function (_0x2c7fcb, _0x51ef71) {
                    return _0x2c7fcb | _0x51ef71;
                }
            }, _0x2015fb = _0x9759e4['length'], _0x4cdd82 = _0x2fd997['length'], _0x448bc7 = _0x52c14b['Ljgwd'](0x1, _0x52c14b['iLxLc'](_0x2015fb, 0x1));
        let _0x4b872e = -0x1, _0x350da5 = 0x0, _0x412aea = _0x2015fb, _0x2c92bb = _0x2015fb;
        while (_0x2c92bb--) {
            peq[_0x9759e4['charCodeAt'](_0x2c92bb)] |= _0x52c14b['wsQUz'](0x1, _0x2c92bb);
        }
        for (_0x2c92bb = 0x0; _0x52c14b['MggKe'](_0x2c92bb, _0x4cdd82); _0x2c92bb++) {
            let _0x50b912 = peq[_0x2fd997['charCodeAt'](_0x2c92bb)];
            const _0x3aa7d0 = _0x52c14b['MWJYg'](_0x50b912, _0x350da5);
            _0x50b912 |= _0x52c14b['fvfFa'](_0x52c14b['jNFwE'](_0x52c14b['xVgbD'](_0x50b912, _0x4b872e), _0x4b872e), _0x4b872e), _0x350da5 |= ~_0x52c14b['zWbqF'](_0x50b912, _0x4b872e), _0x4b872e &= _0x50b912, _0x52c14b['xVgbD'](_0x350da5, _0x448bc7) && _0x412aea++, _0x52c14b['hKmWB'](_0x4b872e, _0x448bc7) && _0x412aea--, _0x350da5 = _0x52c14b['zWbqF'](_0x52c14b['buCZH'](_0x350da5, 0x1), 0x1), _0x4b872e = _0x52c14b['zWbqF'](_0x52c14b['TLQPc'](_0x4b872e, 0x1), ~_0x52c14b['lNPqd'](_0x3aa7d0, _0x350da5)), _0x350da5 &= _0x3aa7d0;
        }
        _0x2c92bb = _0x2015fb;
        while (_0x2c92bb--) {
            peq[_0x9759e4['charCodeAt'](_0x2c92bb)] = 0x0;
        }
        return _0x412aea;
    }, myers_x = (_0x1b8c24, _0x512266) => {
        const _0x1233fd = {
                'tsOZs': function (_0x4882e2, _0x3a9625) {
                    return _0x4882e2 / _0x3a9625;
                },
                'lOBzH': function (_0x56ac4e, _0x24e227) {
                    return _0x56ac4e / _0x24e227;
                },
                'EEUaF': function (_0x37a3e0, _0x3a04d7) {
                    return _0x37a3e0 < _0x3a04d7;
                },
                'bNrDW': function (_0x10d3cc, _0x4b8037) {
                    return _0x10d3cc < _0x4b8037;
                },
                'UnWRP': function (_0x96518, _0x32688e) {
                    return _0x96518 - _0x32688e;
                },
                'QcdbZ': function (_0x55b380, _0x16543a) {
                    return _0x55b380 * _0x16543a;
                },
                'HEYqv': function (_0x2f91d7, _0x5e4168) {
                    return _0x2f91d7 + _0x5e4168;
                },
                'yUZTL': function (_0x383b7a, _0x1006ff) {
                    return _0x383b7a < _0x1006ff;
                },
                'Nlvvd': function (_0x411394, _0x1ae853) {
                    return _0x411394 << _0x1ae853;
                },
                'fEpZO': function (_0x35c7fd, _0x29d9e8) {
                    return _0x35c7fd & _0x29d9e8;
                },
                'HkWaB': function (_0x2dc231, _0x10c8f3) {
                    return _0x2dc231 >>> _0x10c8f3;
                },
                'eEsbg': function (_0x210e79, _0xa0eebe) {
                    return _0x210e79 | _0xa0eebe;
                },
                'wnkDV': function (_0x7ebda3, _0x4f2aa0) {
                    return _0x7ebda3 / _0x4f2aa0;
                },
                'fzQOP': function (_0x5e86b3, _0x41246d) {
                    return _0x5e86b3 >>> _0x41246d;
                },
                'KjDAz': function (_0x569790, _0x299451) {
                    return _0x569790 | _0x299451;
                },
                'WPRaB': function (_0x3d352c, _0x5ea943) {
                    return _0x3d352c | _0x5ea943;
                },
                'Egsex': function (_0x25aedb, _0x2a6803) {
                    return _0x25aedb | _0x2a6803;
                },
                'pbjXR': function (_0x4ef0ce, _0x88dc0c) {
                    return _0x4ef0ce | _0x88dc0c;
                },
                'VJXIO': function (_0x4ceb60, _0x2cb3d5) {
                    return _0x4ceb60 ^ _0x2cb3d5;
                },
                'yDlDJ': function (_0x3f047b, _0x5b3230) {
                    return _0x3f047b & _0x5b3230;
                },
                'Xblvx': function (_0x54eaa1, _0x4c8553) {
                    return _0x54eaa1 ^ _0x4c8553;
                },
                'DmxZF': function (_0x555b34, _0x226b2f) {
                    return _0x555b34 >>> _0x226b2f;
                },
                'CybSP': function (_0x1bc7ee, _0x3a0764) {
                    return _0x1bc7ee | _0x3a0764;
                },
                'HanYc': function (_0x406e74, _0x3a2f24) {
                    return _0x406e74 << _0x3a2f24;
                },
                'xuEvt': function (_0x570fbb, _0x3eeee4) {
                    return _0x570fbb ^ _0x3eeee4;
                },
                'zQhDT': function (_0x2dd4ce, _0x450a39) {
                    return _0x2dd4ce >>> _0x450a39;
                },
                'BZIra': function (_0x50a492, _0x52a473) {
                    return _0x50a492 / _0x52a473;
                },
                'SiIPK': function (_0x129fea, _0x1bd7ee) {
                    return _0x129fea << _0x1bd7ee;
                },
                'qVvTZ': function (_0x541827, _0x3cebc0) {
                    return _0x541827 << _0x3cebc0;
                },
                'gclzt': function (_0x17fdab, _0x353f4f) {
                    return _0x17fdab | _0x353f4f;
                },
                'hvzuj': function (_0x1b55b5, _0x21657f) {
                    return _0x1b55b5 < _0x21657f;
                },
                'yGeSb': function (_0xe1fbe8, _0x5781f5) {
                    return _0xe1fbe8 + _0x5781f5;
                },
                'axeIQ': function (_0x78f3ab, _0x6310f7) {
                    return _0x78f3ab - _0x6310f7;
                },
                'RqgHc': function (_0x36d2c1, _0x5c4caf) {
                    return _0x36d2c1 << _0x5c4caf;
                },
                'oyjQd': function (_0x1d156d, _0x47dc86) {
                    return _0x1d156d >>> _0x47dc86;
                },
                'HnLKP': function (_0x40c35d, _0x450d13) {
                    return _0x40c35d / _0x450d13;
                },
                'VkDvG': function (_0x59fc79, _0x30bdc3) {
                    return _0x59fc79 | _0x30bdc3;
                },
                'UIwNu': function (_0x4b5fa5, _0x28e078) {
                    return _0x4b5fa5 | _0x28e078;
                },
                'VpJIB': function (_0x2118ed, _0x1c8a4d) {
                    return _0x2118ed ^ _0x1c8a4d;
                },
                'epXml': function (_0x179d1b, _0x4a1cc8) {
                    return _0x179d1b & _0x4a1cc8;
                },
                'zRjdo': function (_0xf1fa8, _0x525273) {
                    return _0xf1fa8 & _0x525273;
                },
                'tuOHB': function (_0x23e72a, _0x2f1d8f) {
                    return _0x23e72a >>> _0x2f1d8f;
                },
                'vRlFx': function (_0x5d2082, _0x10d04f) {
                    return _0x5d2082 / _0x10d04f;
                },
                'dOizh': function (_0xabc13b, _0x107366) {
                    return _0xabc13b ^ _0x107366;
                },
                'Vguse': function (_0x54c0e4, _0x31e02a) {
                    return _0x54c0e4 >>> _0x31e02a;
                },
                'RplZK': function (_0x578400, _0x1d47c8) {
                    return _0x578400 | _0x1d47c8;
                },
                'Tytxw': function (_0x1f80e8, _0x545958) {
                    return _0x1f80e8 << _0x545958;
                },
                'xtnAO': function (_0x5bb8ef, _0x3ae144) {
                    return _0x5bb8ef << _0x3ae144;
                },
                'jJnrV': function (_0xc920a5, _0x14178a) {
                    return _0xc920a5 | _0x14178a;
                },
                'seMdU': function (_0xb4e28c, _0x1bad5f) {
                    return _0xb4e28c << _0x1bad5f;
                },
                'ABgzx': function (_0x52955e, _0x54e3b4) {
                    return _0x52955e < _0x54e3b4;
                }
            }, _0x5e339e = _0x1b8c24['length'], _0x12ab08 = _0x512266['length'], _0x5fbb1a = [], _0x28c226 = [], _0x5b34d0 = Math['ceil'](_0x1233fd['tsOZs'](_0x5e339e, 0x20)), _0x422a43 = Math['ceil'](_0x1233fd['lOBzH'](_0x12ab08, 0x20));
        let _0x58912d = _0x12ab08;
        for (let _0x585b49 = 0x0; _0x1233fd['EEUaF'](_0x585b49, _0x5b34d0); _0x585b49++) {
            _0x28c226[_0x585b49] = -0x1, _0x5fbb1a[_0x585b49] = 0x0;
        }
        let _0x496d4b = 0x0;
        for (; _0x1233fd['bNrDW'](_0x496d4b, _0x1233fd['UnWRP'](_0x422a43, 0x1)); _0x496d4b++) {
            let _0x59541d = 0x0, _0x4438f3 = -0x1;
            const _0x46032a = _0x1233fd['QcdbZ'](_0x496d4b, 0x20), _0x2e7759 = _0x1233fd['HEYqv'](Math['min'](0x20, _0x12ab08), _0x46032a);
            for (let _0xf6bec1 = _0x46032a; _0x1233fd['yUZTL'](_0xf6bec1, _0x2e7759); _0xf6bec1++) {
                peq[_0x512266['charCodeAt'](_0xf6bec1)] |= _0x1233fd['Nlvvd'](0x1, _0xf6bec1);
            }
            _0x58912d = _0x12ab08;
            for (let _0x30c4cf = 0x0; _0x1233fd['yUZTL'](_0x30c4cf, _0x5e339e); _0x30c4cf++) {
                const _0x188945 = peq[_0x1b8c24['charCodeAt'](_0x30c4cf)], _0x47fb87 = _0x1233fd['fEpZO'](_0x1233fd['HkWaB'](_0x28c226[_0x1233fd['eEsbg'](_0x1233fd['wnkDV'](_0x30c4cf, 0x20), 0x0)], _0x30c4cf), 0x1), _0x561e43 = _0x1233fd['fEpZO'](_0x1233fd['fzQOP'](_0x5fbb1a[_0x1233fd['KjDAz'](_0x1233fd['wnkDV'](_0x30c4cf, 0x20), 0x0)], _0x30c4cf), 0x1), _0x839992 = _0x1233fd['WPRaB'](_0x188945, _0x59541d), _0x33ed7f = _0x1233fd['Egsex'](_0x1233fd['pbjXR'](_0x1233fd['VJXIO'](_0x1233fd['HEYqv'](_0x1233fd['fEpZO'](_0x1233fd['pbjXR'](_0x188945, _0x561e43), _0x4438f3), _0x4438f3), _0x4438f3), _0x188945), _0x561e43);
                let _0x3a5382 = _0x1233fd['pbjXR'](_0x59541d, ~_0x1233fd['pbjXR'](_0x33ed7f, _0x4438f3)), _0xcb67e5 = _0x1233fd['yDlDJ'](_0x4438f3, _0x33ed7f);
                _0x1233fd['Xblvx'](_0x1233fd['DmxZF'](_0x3a5382, 0x1f), _0x47fb87) && (_0x28c226[_0x1233fd['CybSP'](_0x1233fd['wnkDV'](_0x30c4cf, 0x20), 0x0)] ^= _0x1233fd['HanYc'](0x1, _0x30c4cf)), _0x1233fd['xuEvt'](_0x1233fd['zQhDT'](_0xcb67e5, 0x1f), _0x561e43) && (_0x5fbb1a[_0x1233fd['CybSP'](_0x1233fd['BZIra'](_0x30c4cf, 0x20), 0x0)] ^= _0x1233fd['SiIPK'](0x1, _0x30c4cf)), _0x3a5382 = _0x1233fd['CybSP'](_0x1233fd['qVvTZ'](_0x3a5382, 0x1), _0x47fb87), _0xcb67e5 = _0x1233fd['gclzt'](_0x1233fd['qVvTZ'](_0xcb67e5, 0x1), _0x561e43), _0x4438f3 = _0x1233fd['gclzt'](_0xcb67e5, ~_0x1233fd['gclzt'](_0x839992, _0x3a5382)), _0x59541d = _0x1233fd['yDlDJ'](_0x3a5382, _0x839992);
            }
            for (let _0x20a648 = _0x46032a; _0x1233fd['hvzuj'](_0x20a648, _0x2e7759); _0x20a648++) {
                peq[_0x512266['charCodeAt'](_0x20a648)] = 0x0;
            }
        }
        let _0xa73ddb = 0x0, _0x45d0ed = -0x1;
        const _0x5eb1e0 = _0x1233fd['QcdbZ'](_0x496d4b, 0x20), _0x843507 = _0x1233fd['yGeSb'](Math['min'](0x20, _0x1233fd['axeIQ'](_0x12ab08, _0x5eb1e0)), _0x5eb1e0);
        for (let _0x9943d9 = _0x5eb1e0; _0x1233fd['hvzuj'](_0x9943d9, _0x843507); _0x9943d9++) {
            peq[_0x512266['charCodeAt'](_0x9943d9)] |= _0x1233fd['RqgHc'](0x1, _0x9943d9);
        }
        _0x58912d = _0x12ab08;
        for (let _0xd6efd8 = 0x0; _0x1233fd['hvzuj'](_0xd6efd8, _0x5e339e); _0xd6efd8++) {
            const _0x211030 = peq[_0x1b8c24['charCodeAt'](_0xd6efd8)], _0x341d22 = _0x1233fd['yDlDJ'](_0x1233fd['oyjQd'](_0x28c226[_0x1233fd['gclzt'](_0x1233fd['BZIra'](_0xd6efd8, 0x20), 0x0)], _0xd6efd8), 0x1), _0x434833 = _0x1233fd['yDlDJ'](_0x1233fd['oyjQd'](_0x5fbb1a[_0x1233fd['gclzt'](_0x1233fd['HnLKP'](_0xd6efd8, 0x20), 0x0)], _0xd6efd8), 0x1), _0xc91541 = _0x1233fd['VkDvG'](_0x211030, _0xa73ddb), _0x363803 = _0x1233fd['VkDvG'](_0x1233fd['UIwNu'](_0x1233fd['VpJIB'](_0x1233fd['yGeSb'](_0x1233fd['yDlDJ'](_0x1233fd['UIwNu'](_0x211030, _0x434833), _0x45d0ed), _0x45d0ed), _0x45d0ed), _0x211030), _0x434833);
            let _0x42693c = _0x1233fd['UIwNu'](_0xa73ddb, ~_0x1233fd['UIwNu'](_0x363803, _0x45d0ed)), _0x5181ce = _0x1233fd['epXml'](_0x45d0ed, _0x363803);
            _0x58912d += _0x1233fd['zRjdo'](_0x1233fd['tuOHB'](_0x42693c, _0x1233fd['axeIQ'](_0x12ab08, 0x1)), 0x1), _0x58912d -= _0x1233fd['zRjdo'](_0x1233fd['tuOHB'](_0x5181ce, _0x1233fd['axeIQ'](_0x12ab08, 0x1)), 0x1), _0x1233fd['VpJIB'](_0x1233fd['tuOHB'](_0x42693c, 0x1f), _0x341d22) && (_0x28c226[_0x1233fd['UIwNu'](_0x1233fd['vRlFx'](_0xd6efd8, 0x20), 0x0)] ^= _0x1233fd['RqgHc'](0x1, _0xd6efd8)), _0x1233fd['dOizh'](_0x1233fd['Vguse'](_0x5181ce, 0x1f), _0x434833) && (_0x5fbb1a[_0x1233fd['RplZK'](_0x1233fd['vRlFx'](_0xd6efd8, 0x20), 0x0)] ^= _0x1233fd['Tytxw'](0x1, _0xd6efd8)), _0x42693c = _0x1233fd['RplZK'](_0x1233fd['xtnAO'](_0x42693c, 0x1), _0x341d22), _0x5181ce = _0x1233fd['jJnrV'](_0x1233fd['seMdU'](_0x5181ce, 0x1), _0x434833), _0x45d0ed = _0x1233fd['jJnrV'](_0x5181ce, ~_0x1233fd['jJnrV'](_0xc91541, _0x42693c)), _0xa73ddb = _0x1233fd['zRjdo'](_0x42693c, _0xc91541);
        }
        for (let _0x5b7093 = _0x5eb1e0; _0x1233fd['ABgzx'](_0x5b7093, _0x843507); _0x5b7093++) {
            peq[_0x512266['charCodeAt'](_0x5b7093)] = 0x0;
        }
        return _0x58912d;
    }, distance = (_0x571c83, _0x1bf3fe) => {
        const _0x3011f5 = {
            'XmGcx': function (_0x333106, _0x537d33) {
                return _0x333106 > _0x537d33;
            },
            'ujUsq': function (_0xfbb2e8, _0x49ab69) {
                return _0xfbb2e8 === _0x49ab69;
            },
            'VxdJA': function (_0x1a6258, _0xfa13cd) {
                return _0x1a6258 <= _0xfa13cd;
            },
            'angif': function (_0x3f6bc5, _0x4f2c2d, _0x294c5c) {
                return _0x3f6bc5(_0x4f2c2d, _0x294c5c);
            },
            'AnEYA': function (_0x1d7a9a, _0xd1f9ff, _0x11b6a4) {
                return _0x1d7a9a(_0xd1f9ff, _0x11b6a4);
            }
        };
        if (_0x3011f5['XmGcx'](_0x571c83['length'], _0x1bf3fe['length'])) {
            const _0x10e18d = _0x1bf3fe;
            _0x1bf3fe = _0x571c83, _0x571c83 = _0x10e18d;
        }
        if (_0x3011f5['ujUsq'](_0x571c83['length'], 0x0))
            return _0x1bf3fe['length'];
        if (_0x3011f5['VxdJA'](_0x571c83['length'], 0x20))
            return _0x3011f5['angif'](myers_32, _0x571c83, _0x1bf3fe);
        return _0x3011f5['AnEYA'](myers_x, _0x571c83, _0x1bf3fe);
    }, closest = (_0x8af35c, _0x4b220f) => {
        const _0x31ca49 = {
            'ktFzg': function (_0x7c0568, _0x5e159f) {
                return _0x7c0568 < _0x5e159f;
            },
            'KUPNX': function (_0x5db7c2, _0x412508, _0x21a911) {
                return _0x5db7c2(_0x412508, _0x21a911);
            },
            'FqKgV': function (_0x140662, _0x3fdae8) {
                return _0x140662 < _0x3fdae8;
            }
        };
        let _0x3cf51a = Infinity, _0x425b2b = 0x0;
        for (let _0x394517 = 0x0; _0x31ca49['ktFzg'](_0x394517, _0x4b220f['length']); _0x394517++) {
            const _0x2f15c0 = _0x31ca49['KUPNX'](distance, _0x8af35c, _0x4b220f[_0x394517]);
            _0x31ca49['FqKgV'](_0x2f15c0, _0x3cf51a) && (_0x3cf51a = _0x2f15c0, _0x425b2b = _0x394517);
        }
        return _0x4b220f[_0x425b2b];
    };
module['exports'] = {
    'closest': closest,
    'distance': distance
};
