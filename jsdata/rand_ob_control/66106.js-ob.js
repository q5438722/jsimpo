const {hasOwnProperty} = Object['prototype'], eol = typeof process !== 'undefined' && process['platform'] === 'win32' ? '\x0d\x0a' : '\x0a', encode = (_0xe3f843, _0x563c7a) => {
        const _0x3d5f97 = {
                'iwAWl': function (_0xf3b551, _0x123eb4) {
                    return _0xf3b551 === _0x123eb4;
                },
                'YwZpg': 'string',
                'Fwjhf': function (_0x429319, _0x3836e9) {
                    return _0x429319 === _0x3836e9;
                },
                'CWemB': '\x20=\x20',
                'LFnek': function (_0x443eb5, _0x4ab066) {
                    return _0x443eb5 + _0x4ab066;
                },
                'AhLGD': function (_0x30a23c, _0x4fd10c) {
                    return _0x30a23c + _0x4fd10c;
                },
                'yeaKF': function (_0x4c4098, _0x74f13) {
                    return _0x4c4098(_0x74f13);
                },
                'SxXPG': function (_0x52e525, _0x2893e5) {
                    return _0x52e525 + _0x2893e5;
                },
                'pzwok': function (_0x4b3808, _0x502cb1) {
                    return _0x4b3808 === _0x502cb1;
                },
                'DlKUo': 'object',
                'dnmRw': function (_0x21c6ec, _0x1e7c7a) {
                    return _0x21c6ec + _0x1e7c7a;
                },
                'BuxFI': function (_0xc9975e, _0x1b7bb2) {
                    return _0xc9975e + _0x1b7bb2;
                },
                'HEMFn': function (_0x5d22bc, _0x18fd12) {
                    return _0x5d22bc + _0x18fd12;
                },
                'qJhmH': function (_0x5a622c, _0x4b8f0f) {
                    return _0x5a622c + _0x4b8f0f;
                },
                'GbDiR': function (_0xf8757a, _0x456b0a, _0x2e1477) {
                    return _0xf8757a(_0x456b0a, _0x2e1477);
                }
            }, _0xc3f906 = [];
        let _0x59b989 = '';
        _0x3d5f97['iwAWl'](typeof _0x563c7a, _0x3d5f97['YwZpg']) ? _0x563c7a = {
            'section': _0x563c7a,
            'whitespace': ![]
        } : (_0x563c7a = _0x563c7a || Object['create'](null), _0x563c7a['whitespace'] = _0x3d5f97['Fwjhf'](_0x563c7a['whitespace'], !![]));
        const _0x213e5b = _0x563c7a['whitespace'] ? _0x3d5f97['CWemB'] : '=';
        for (const _0x478438 of Object['keys'](_0xe3f843)) {
            const _0x3b1e99 = _0xe3f843[_0x478438];
            if (_0x3b1e99 && Array['isArray'](_0x3b1e99)) {
                for (const _0x3fd9db of _0x3b1e99)
                    _0x59b989 += _0x3d5f97['LFnek'](_0x3d5f97['LFnek'](_0x3d5f97['AhLGD'](_0x3d5f97['yeaKF'](safe, _0x3d5f97['SxXPG'](_0x478438, '[]')), _0x213e5b), _0x3d5f97['yeaKF'](safe, _0x3fd9db)), '\x0a');
            } else {
                if (_0x3b1e99 && _0x3d5f97['pzwok'](typeof _0x3b1e99, _0x3d5f97['DlKUo']))
                    _0xc3f906['push'](_0x478438);
                else
                    _0x59b989 += _0x3d5f97['dnmRw'](_0x3d5f97['dnmRw'](_0x3d5f97['dnmRw'](_0x3d5f97['yeaKF'](safe, _0x478438), _0x213e5b), _0x3d5f97['yeaKF'](safe, _0x3b1e99)), eol);
            }
        }
        if (_0x563c7a['section'] && _0x59b989['length'])
            _0x59b989 = _0x3d5f97['BuxFI'](_0x3d5f97['HEMFn'](_0x3d5f97['HEMFn'](_0x3d5f97['qJhmH']('[', _0x3d5f97['yeaKF'](safe, _0x563c7a['section'])), ']'), eol), _0x59b989);
        for (const _0x4e8898 of _0xc3f906) {
            const _0x4e0187 = _0x3d5f97['yeaKF'](dotSplit, _0x4e8898)['join']('\x5c.'), _0x253559 = _0x3d5f97['qJhmH'](_0x563c7a['section'] ? _0x3d5f97['qJhmH'](_0x563c7a['section'], '.') : '', _0x4e0187), {whitespace: _0x1a3a60} = _0x563c7a, _0x1720e8 = _0x3d5f97['GbDiR'](encode, _0xe3f843[_0x4e8898], {
                    'section': _0x253559,
                    'whitespace': _0x1a3a60
                });
            if (_0x59b989['length'] && _0x1720e8['length'])
                _0x59b989 += eol;
            _0x59b989 += _0x1720e8;
        }
        return _0x59b989;
    }, dotSplit = _0x1d218a => _0x1d218a['replace'](/\1/g, '\x02LITERAL\x5c1LITERAL\x02')['replace'](/\\\./g, '\x01')['split'](/\./)['map'](_0x333799 => _0x333799['replace'](/\1/g, '\x5c.')['replace'](/\2LITERAL\\1LITERAL\2/g, '\x01')), decode = _0x1f5910 => {
        const _0x1ff787 = {
                'KgtSV': function (_0x5c2f5b, _0x2a7138) {
                    return _0x5c2f5b !== _0x2a7138;
                },
                'awmjG': function (_0x239a37, _0x211ce4) {
                    return _0x239a37(_0x211ce4);
                },
                'WwNgb': function (_0x250d35, _0xf1cf6a) {
                    return _0x250d35 === _0xf1cf6a;
                },
                'iYJvi': '__proto__',
                'zYcUl': function (_0x259408, _0x2f9538) {
                    return _0x259408(_0x2f9538);
                },
                'tWWwl': function (_0x13c246, _0x4ed71f) {
                    return _0x13c246 > _0x4ed71f;
                },
                'mirBV': function (_0xed7fb4, _0x800185) {
                    return _0xed7fb4 === _0x800185;
                },
                'AzoCT': 'true',
                'RpZJl': function (_0x364f75, _0x2e2915) {
                    return _0x364f75 === _0x2e2915;
                },
                'XBRRG': 'false',
                'jNNkn': function (_0xbfe91a, _0x34f9db) {
                    return _0xbfe91a === _0x34f9db;
                },
                'QcZyt': 'null',
                'HEwNt': function (_0x1f54f9, _0x5577da) {
                    return _0x1f54f9 !== _0x5577da;
                },
                'KNKTh': 'object',
                'PjbVv': function (_0x206348, _0x4577d6) {
                    return _0x206348(_0x4577d6);
                },
                'owxdf': function (_0x537987, _0x2f7aca) {
                    return _0x537987 === _0x2f7aca;
                },
                'jYXoP': function (_0x3fc899, _0x2712a7) {
                    return _0x3fc899 !== _0x2712a7;
                },
                'ZQwhr': function (_0xeadb7d, _0x2bbe02) {
                    return _0xeadb7d === _0x2bbe02;
                }
            }, _0x3d0c50 = Object['create'](null);
        let _0x2238b0 = _0x3d0c50, _0x3d0ecf = null;
        const _0x41a7f6 = /^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i, _0x2a2e2a = _0x1f5910['split'](/[\r\n]+/g);
        for (const _0x23218e of _0x2a2e2a) {
            if (!_0x23218e || _0x23218e['match'](/^\s*[;#]/))
                continue;
            const _0x1bfa95 = _0x23218e['match'](_0x41a7f6);
            if (!_0x1bfa95)
                continue;
            if (_0x1ff787['KgtSV'](_0x1bfa95[0x1], undefined)) {
                _0x3d0ecf = _0x1ff787['awmjG'](unsafe, _0x1bfa95[0x1]);
                if (_0x1ff787['WwNgb'](_0x3d0ecf, _0x1ff787['iYJvi'])) {
                    _0x2238b0 = Object['create'](null);
                    continue;
                }
                _0x2238b0 = _0x3d0c50[_0x3d0ecf] = _0x3d0c50[_0x3d0ecf] || Object['create'](null);
                continue;
            }
            const _0x4fa00b = _0x1ff787['zYcUl'](unsafe, _0x1bfa95[0x2]), _0x28d0c2 = _0x1ff787['tWWwl'](_0x4fa00b['length'], 0x2) && _0x1ff787['WwNgb'](_0x4fa00b['slice'](-0x2), '[]'), _0xd916ac = _0x28d0c2 ? _0x4fa00b['slice'](0x0, -0x2) : _0x4fa00b;
            if (_0x1ff787['mirBV'](_0xd916ac, _0x1ff787['iYJvi']))
                continue;
            const _0x44b27e = _0x1bfa95[0x3] ? _0x1ff787['zYcUl'](unsafe, _0x1bfa95[0x4]) : !![], _0x5264a9 = _0x1ff787['mirBV'](_0x44b27e, _0x1ff787['AzoCT']) || _0x1ff787['RpZJl'](_0x44b27e, _0x1ff787['XBRRG']) || _0x1ff787['jNNkn'](_0x44b27e, _0x1ff787['QcZyt']) ? JSON['parse'](_0x44b27e) : _0x44b27e;
            if (_0x28d0c2) {
                if (!hasOwnProperty['call'](_0x2238b0, _0xd916ac))
                    _0x2238b0[_0xd916ac] = [];
                else {
                    if (!Array['isArray'](_0x2238b0[_0xd916ac]))
                        _0x2238b0[_0xd916ac] = [_0x2238b0[_0xd916ac]];
                }
            }
            if (Array['isArray'](_0x2238b0[_0xd916ac]))
                _0x2238b0[_0xd916ac]['push'](_0x5264a9);
            else
                _0x2238b0[_0xd916ac] = _0x5264a9;
        }
        const _0x3eb899 = [];
        for (const _0x4977ad of Object['keys'](_0x3d0c50)) {
            if (!hasOwnProperty['call'](_0x3d0c50, _0x4977ad) || _0x1ff787['HEwNt'](typeof _0x3d0c50[_0x4977ad], _0x1ff787['KNKTh']) || Array['isArray'](_0x3d0c50[_0x4977ad]))
                continue;
            const _0x5cb8fe = _0x1ff787['PjbVv'](dotSplit, _0x4977ad);
            let _0x186e4b = _0x3d0c50;
            const _0x40233a = _0x5cb8fe['pop'](), _0x55dacd = _0x40233a['replace'](/\\\./g, '.');
            for (const _0x634bdb of _0x5cb8fe) {
                if (_0x1ff787['owxdf'](_0x634bdb, _0x1ff787['iYJvi']))
                    continue;
                if (!hasOwnProperty['call'](_0x186e4b, _0x634bdb) || _0x1ff787['jYXoP'](typeof _0x186e4b[_0x634bdb], _0x1ff787['KNKTh']))
                    _0x186e4b[_0x634bdb] = Object['create'](null);
                _0x186e4b = _0x186e4b[_0x634bdb];
            }
            if (_0x1ff787['owxdf'](_0x186e4b, _0x3d0c50) && _0x1ff787['ZQwhr'](_0x55dacd, _0x40233a))
                continue;
            _0x186e4b[_0x55dacd] = _0x3d0c50[_0x4977ad], _0x3eb899['push'](_0x4977ad);
        }
        for (const _0x3bdf78 of _0x3eb899)
            delete _0x3d0c50[_0x3bdf78];
        return _0x3d0c50;
    }, isQuoted = _0x34ae23 => _0x34ae23['charAt'](0x0) === '\x22' && _0x34ae23['slice'](-0x1) === '\x22' || _0x34ae23['charAt'](0x0) === '\x27' && _0x34ae23['slice'](-0x1) === '\x27', safe = _0x567895 => typeof _0x567895 !== 'string' || _0x567895['match'](/[=\r\n]/) || _0x567895['match'](/^\[/) || _0x567895['length'] > 0x1 && isQuoted(_0x567895) || _0x567895 !== _0x567895['trim']() ? JSON['stringify'](_0x567895) : _0x567895['replace'](/;/g, '\x5c;')['replace'](/#/g, '\x5c#'), unsafe = (_0x35b55d, _0x588693) => {
        const _0x1accc0 = {
            'JXRdb': function (_0x5c0843, _0x40d000) {
                return _0x5c0843 || _0x40d000;
            },
            'gtjdQ': function (_0x59fe1b, _0x558e15) {
                return _0x59fe1b(_0x558e15);
            },
            'MLxbd': function (_0x4638c3, _0x1004d3) {
                return _0x4638c3 === _0x1004d3;
            },
            'UVDtd': function (_0x5491f5, _0x7669fe) {
                return _0x5491f5 - _0x7669fe;
            },
            'Zaxzd': function (_0x30a3fc, _0x4d1243) {
                return _0x30a3fc < _0x4d1243;
            },
            'lmsdJ': function (_0xb027aa, _0x389bc9) {
                return _0xb027aa !== _0x389bc9;
            },
            'EDjWz': '\x5c;#',
            'XIatZ': function (_0x3e6233, _0x13dc5e) {
                return _0x3e6233 + _0x13dc5e;
            }
        };
        _0x35b55d = _0x1accc0['JXRdb'](_0x35b55d, '')['trim']();
        if (_0x1accc0['gtjdQ'](isQuoted, _0x35b55d)) {
            if (_0x1accc0['MLxbd'](_0x35b55d['charAt'](0x0), '\x27'))
                _0x35b55d = _0x35b55d['substr'](0x1, _0x1accc0['UVDtd'](_0x35b55d['length'], 0x2));
            try {
                _0x35b55d = JSON['parse'](_0x35b55d);
            } catch (_0x57d63c) {
            }
        } else {
            let _0x5b21a5 = ![], _0x49e3b5 = '';
            for (let _0x59a295 = 0x0, _0x510a4d = _0x35b55d['length']; _0x1accc0['Zaxzd'](_0x59a295, _0x510a4d); _0x59a295++) {
                const _0x560d13 = _0x35b55d['charAt'](_0x59a295);
                if (_0x5b21a5) {
                    if (_0x1accc0['lmsdJ'](_0x1accc0['EDjWz']['indexOf'](_0x560d13), -0x1))
                        _0x49e3b5 += _0x560d13;
                    else
                        _0x49e3b5 += _0x1accc0['XIatZ']('\x5c', _0x560d13);
                    _0x5b21a5 = ![];
                } else {
                    if (_0x1accc0['lmsdJ'](';#'['indexOf'](_0x560d13), -0x1))
                        break;
                    else {
                        if (_0x1accc0['MLxbd'](_0x560d13, '\x5c'))
                            _0x5b21a5 = !![];
                        else
                            _0x49e3b5 += _0x560d13;
                    }
                }
            }
            if (_0x5b21a5)
                _0x49e3b5 += '\x5c';
            return _0x49e3b5['trim']();
        }
        return _0x35b55d;
    };
module['exports'] = {
    'parse': decode,
    'decode': decode,
    'stringify': encode,
    'encode': encode,
    'safe': safe,
    'unsafe': unsafe
};
