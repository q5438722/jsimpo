'use strict';
var css = require('css'), util = require('./lib/util'), validateItem = require('./lib/validator')['validate'], shorthandParser = require('./lib/shorthand-parser');
function convertLengthShorthand(_0x4e9e0d, _0x54a58d) {
    var _0x3ac861 = {
        'JBDeV': function (_0x14e1a0, _0x6d238c) {
            return _0x14e1a0 < _0x6d238c;
        },
        'nxLuP': function (_0x1980d8, _0x181f97) {
            return _0x1980d8 === _0x181f97;
        },
        'wOOoG': '6|7|0|4|1|3|2|8|5',
        'NXmiY': 'declaration',
        'mEsBh': function (_0x14650d, _0x1adef8) {
            return _0x14650d + _0x1adef8;
        },
        'HHuuz': '-bottom',
        'KJbck': '-left',
        'UTMfv': '-top',
        'elaaZ': '-right'
    };
    for (var _0x2f22bb = 0x0; _0x3ac861['JBDeV'](_0x2f22bb, _0x4e9e0d['declarations']['length']); _0x2f22bb++) {
        var _0x45ba51 = _0x4e9e0d['declarations'][_0x2f22bb];
        if (_0x3ac861['nxLuP'](_0x45ba51['property'], _0x54a58d)) {
            var _0x4b1e16 = _0x3ac861['wOOoG']['split']('|'), _0x4d6b5b = 0x0;
            while (!![]) {
                switch (_0x4b1e16[_0x4d6b5b++]) {
                case '0':
                    _0x585548[0x2] = _0x585548[0x2] || _0x585548[0x0];
                    continue;
                case '1':
                    _0x4e9e0d['declarations']['splice'](_0x2f22bb, 0x1);
                    continue;
                case '2':
                    _0x4e9e0d['declarations']['splice'](_0x2f22bb, 0x0, {
                        'type': _0x3ac861['NXmiY'],
                        'property': _0x3ac861['mEsBh'](_0x54a58d, _0x3ac861['HHuuz']),
                        'value': _0x585548[0x2],
                        'position': _0x45ba51['position']
                    });
                    continue;
                case '3':
                    _0x4e9e0d['declarations']['splice'](_0x2f22bb, 0x0, {
                        'type': _0x3ac861['NXmiY'],
                        'property': _0x3ac861['mEsBh'](_0x54a58d, _0x3ac861['KJbck']),
                        'value': _0x585548[0x3],
                        'position': _0x45ba51['position']
                    });
                    continue;
                case '4':
                    _0x585548[0x3] = _0x585548[0x3] || _0x585548[0x1];
                    continue;
                case '5':
                    _0x4e9e0d['declarations']['splice'](_0x2f22bb, 0x0, {
                        'type': _0x3ac861['NXmiY'],
                        'property': _0x3ac861['mEsBh'](_0x54a58d, _0x3ac861['UTMfv']),
                        'value': _0x585548[0x0],
                        'position': _0x45ba51['position']
                    });
                    continue;
                case '6':
                    var _0x585548 = _0x45ba51['value']['split'](/\s+/);
                    continue;
                case '7':
                    _0x585548[0x1] = _0x585548[0x1] || _0x585548[0x0];
                    continue;
                case '8':
                    _0x4e9e0d['declarations']['splice'](_0x2f22bb, 0x0, {
                        'type': _0x3ac861['NXmiY'],
                        'property': _0x3ac861['mEsBh'](_0x54a58d, _0x3ac861['elaaZ']),
                        'value': _0x585548[0x1],
                        'position': _0x45ba51['position']
                    });
                    continue;
                }
                break;
            }
        }
    }
}
function mergeStyle(_0x521ddf, _0xd7c048, _0x808d0b, _0x25d50a, _0x4b701e, _0x3fd4ad) {
    var _0x457cd2 = {
            'niXrT': '2|5|0|6|3|1|4',
            'lSQsD': function (_0x33163a, _0x12d84e) {
                return _0x33163a - _0x12d84e;
            }
        }, _0x1a4a85 = _0x457cd2['niXrT']['split']('|'), _0x4ca9ba = 0x0;
    while (!![]) {
        switch (_0x1a4a85[_0x4ca9ba++]) {
        case '0':
            var _0x3bf0db = _0xd7c048['find'](_0x2eae40 => _0x2eae40 in _0x521ddf) || _0xd7c048[0x0];
            continue;
        case '1':
            var _0x324035 = _0x5175e9[_0x808d0b] = _0x5175e9[_0x808d0b] || {};
            continue;
        case '2':
            if (!process['env']['UNI_USING_NVUE_STYLE_COMPILER']) {
                _0x521ddf[_0xd7c048] = _0x521ddf[_0xd7c048] || {}, _0x521ddf[_0xd7c048][_0x4b701e] = _0x25d50a[_0x4b701e];
                return;
            }
            continue;
        case '3':
            var _0x5175e9 = _0x521ddf[_0x3bf0db] = _0x521ddf[_0x3bf0db] || {};
            continue;
        case '4':
            _0x324035[_0x4b701e] = [
                ..._0x25d50a[_0x4b701e],
                _0x457cd2['lSQsD'](_0x808d0b['split']('.')['length'], 0x1),
                _0x3fd4ad
            ];
            continue;
        case '5':
            _0xd7c048 = _0xd7c048['split']('.')['map'](_0xfc6094 => '.' + _0xfc6094)['slice'](0x1);
            continue;
        case '6':
            _0x808d0b += _0xd7c048['filter'](_0x35799a => _0x35799a !== _0x3bf0db)['sort']()['join']('');
            continue;
        }
        break;
    }
}
function parse(_0x318299, _0x166148) {
    var _0x555556 = {
            'Skolx': 'Error',
            'HQBsv': 'ERROR',
            'nSAJG': '4|3|1|2|0',
            'HejZE': function (_0x547c09, _0x1b02e5) {
                return _0x547c09 === _0x1b02e5;
            },
            'hPKQv': 'fontFamily',
            'Kdixh': function (_0x334afa, _0x5c1abe) {
                return _0x334afa > _0x5c1abe;
            },
            'ZEIaC': function (_0x57bc65, _0x21e87a) {
                return _0x57bc65 - _0x21e87a;
            },
            'cySRc': function (_0x10032f, _0x242d73) {
                return _0x10032f !== _0x242d73;
            },
            'Uhwar': 'declaration',
            'ogWCg': '2|11|3|6|9|5|10|4|1|7|0|8',
            'FYAZk': 'number',
            'hclDy': 'string',
            'ChBXW': function (_0x5c1608, _0x1ec494) {
                return _0x5c1608 > _0x1ec494;
            },
            'SqCPA': function (_0x5afc74, _0x20e769) {
                return _0x5afc74 !== _0x20e769;
            },
            'TlVEC': function (_0x2ddf34, _0x1a2f54, _0x317126) {
                return _0x2ddf34(_0x1a2f54, _0x317126);
            },
            'kjqJv': function (_0x5ba1ed, _0x47418b) {
                return _0x5ba1ed(_0x47418b);
            },
            'HAlZs': function (_0x41898f, _0x1acb5c) {
                return _0x41898f !== _0x1acb5c;
            },
            'wHqay': function (_0x5b947f, _0x31acb3, _0x9880d6, _0x4fb6ad, _0x378494, _0x3753cb, _0x2a0f48) {
                return _0x5b947f(_0x31acb3, _0x9880d6, _0x4fb6ad, _0x378494, _0x3753cb, _0x2a0f48);
            },
            'rgVkJ': function (_0x13219a, _0x19632b) {
                return _0x13219a + _0x19632b;
            },
            'KHUkT': '0|4|2|1|3',
            'IIqIx': function (_0x50e22f, _0x39302d) {
                return _0x50e22f + _0x39302d;
            },
            'trCAJ': 'ERROR:\x20Selector\x20`',
            'zeqKn': '`\x20is\x20not\x20supported.\x20Weex\x20only\x20support\x20classname\x20selector',
            'YHLFV': 'rule',
            'kyEhw': function (_0x233ede, _0x37fb8a) {
                return _0x233ede(_0x37fb8a);
            },
            'CPkoP': 'padding',
            'SdFiV': 'margin',
            'wwRWe': 'font-face',
            'aICmv': '@FONT-FACE',
            'tkDue': function (_0x23d357, _0x6eef7d) {
                return _0x23d357 === _0x6eef7d;
            },
            'AxWnZ': 'stylesheet',
            'MZQXR': '@VERSION'
        }, _0x4fe9c5, _0xfa5c17, _0x1a650b = {}, _0x5a6a0d = [];
    _0x4fe9c5 = css['parse'](_0x318299, { 'silent': !![] }), _0x4fe9c5['stylesheet']['parsingErrors'] && _0x4fe9c5['stylesheet']['parsingErrors']['length'] && (_0xfa5c17 = _0x4fe9c5['stylesheet']['parsingErrors'], _0xfa5c17['forEach'](function (_0x5edbce) {
        _0x5a6a0d['push']({
            'line': _0x5edbce['line'],
            'column': _0x5edbce['column'],
            'reason': _0x5edbce['toString']()['replace'](_0x555556['Skolx'], _0x555556['HQBsv'])
        });
    })), _0x4fe9c5 && _0x555556['tkDue'](_0x4fe9c5['type'], _0x555556['AxWnZ']) && _0x4fe9c5['stylesheet'] && _0x4fe9c5['stylesheet']['rules'] && _0x4fe9c5['stylesheet']['rules']['length'] && _0x4fe9c5['stylesheet']['rules']['forEach'](function (_0x299ad2, _0x1d685a) {
        var _0x14b271 = {
                'HUAyq': _0x555556['ogWCg'],
                'uBGCs': function (_0x42209e, _0x5ee4bd) {
                    return _0x555556['HejZE'](_0x42209e, _0x5ee4bd);
                },
                'aFfvm': _0x555556['FYAZk'],
                'bqkWx': _0x555556['hclDy'],
                'BEjhs': function (_0x53c199, _0x52a6e3) {
                    return _0x555556['ChBXW'](_0x53c199, _0x52a6e3);
                },
                'yNZzt': function (_0x54124a, _0x109947) {
                    return _0x555556['SqCPA'](_0x54124a, _0x109947);
                },
                'mUdlR': _0x555556['Uhwar'],
                'lMiDq': function (_0xcd1650, _0x4e40b6, _0x20a4be) {
                    return _0x555556['TlVEC'](_0xcd1650, _0x4e40b6, _0x20a4be);
                },
                'EplIw': function (_0x15cecb, _0x226c57) {
                    return _0x555556['kjqJv'](_0x15cecb, _0x226c57);
                },
                'EwoEW': function (_0x5e5acb, _0x161290) {
                    return _0x555556['HAlZs'](_0x5e5acb, _0x161290);
                },
                'lowSP': function (_0x25465b, _0x3edce2, _0x3efddb, _0x32bef5, _0x16a3d7, _0x20a127, _0x44aec9) {
                    return _0x555556['wHqay'](_0x25465b, _0x3edce2, _0x3efddb, _0x32bef5, _0x16a3d7, _0x20a127, _0x44aec9);
                },
                'dIINa': function (_0x555a3c, _0x21ab56) {
                    return _0x555556['rgVkJ'](_0x555a3c, _0x21ab56);
                },
                'JwjjA': _0x555556['nSAJG'],
                'yxFqG': _0x555556['KHUkT'],
                'faWWN': function (_0x1afbc9, _0x5f5573) {
                    return _0x555556['IIqIx'](_0x1afbc9, _0x5f5573);
                },
                'JAzxM': _0x555556['trCAJ'],
                'xhuik': _0x555556['zeqKn']
            }, _0x48a8bc = _0x299ad2['type'], _0x18eab0 = {}, _0x50e71e = [];
        if (_0x555556['HejZE'](_0x48a8bc, _0x555556['YHLFV']))
            _0x299ad2['declarations'] && _0x299ad2['declarations']['length'] && (_0x299ad2['declarations'] = _0x555556['kyEhw'](shorthandParser, _0x299ad2['declarations']), _0x555556['TlVEC'](convertLengthShorthand, _0x299ad2, _0x555556['CPkoP']), _0x555556['TlVEC'](convertLengthShorthand, _0x299ad2, _0x555556['SdFiV']), _0x299ad2['declarations']['forEach'](function (_0x12042b) {
                var _0x1beef4 = _0x14b271['HUAyq']['split']('|'), _0x271387 = 0x0;
                while (!![]) {
                    switch (_0x1beef4[_0x271387++]) {
                    case '0':
                        if (_0x14b271['uBGCs'](typeof _0x5f59ba['value'], _0x14b271['aFfvm']) || _0x14b271['uBGCs'](typeof _0x5f59ba['value'], _0x14b271['bqkWx'])) {
                            if (process['env']['UNI_USING_NVUE_STYLE_COMPILER']) {
                                var _0x44de89 = _0x18eab0[_0x21009b];
                                _0x18eab0[_0x21009b] = Array['isArray'](_0x44de89) && _0x14b271['BEjhs'](_0x44de89[0x1], _0x46c5ae) ? _0x44de89 : [
                                    _0x5f59ba['value'],
                                    _0x46c5ae
                                ];
                            } else
                                _0x18eab0[_0x21009b] = _0x5f59ba['value'];
                        }
                        continue;
                    case '1':
                        _0x21009b = util['hyphenedToCamelCase'](_0x4ef05c);
                        continue;
                    case '2':
                        var _0x5b785f = _0x12042b['type'];
                        continue;
                    case '3':
                        if (_0x14b271['yNZzt'](_0x5b785f, _0x14b271['mUdlR']))
                            return;
                        continue;
                    case '4':
                        _0xf41c8a = _0x180f34;
                        continue;
                    case '5':
                        var _0x180f34 = _0xf41c8a['replace'](/\s*!important/g, '');
                        continue;
                    case '6':
                        _0x4ef05c = _0x12042b['property'];
                        continue;
                    case '7':
                        _0x5f59ba = _0x14b271['lMiDq'](validateItem, _0x21009b, _0xf41c8a);
                        continue;
                    case '8':
                        _0x5f59ba['log'] && (_0x5f59ba['log']['line'] = _0x12042b['position']['start']['line'], _0x5f59ba['log']['column'] = _0x12042b['position']['start']['column'], _0x50e71e['push'](_0x5f59ba['log']));
                        continue;
                    case '9':
                        _0xf41c8a = _0x12042b['value'];
                        continue;
                    case '10':
                        var _0x46c5ae = _0x14b271['EplIw'](Number, _0x14b271['EwoEW'](_0xf41c8a, _0x180f34));
                        continue;
                    case '11':
                        var _0x4ef05c, _0xf41c8a, _0xec1777, _0x31173c, _0x5f59ba, _0x21009b;
                        continue;
                    }
                    break;
                }
            }), _0x299ad2['selectors']['forEach'](function (_0x1319e1) {
                var _0xdd2bd3 = {
                    'xNMYY': function (_0x105899, _0x2367bf) {
                        return _0x14b271['dIINa'](_0x105899, _0x2367bf);
                    }
                };
                _0x1319e1 = _0x1319e1['replace'](/\s*([\+\~\>])\s*/g, '$1')['replace'](/\s+/, '\x20');
                const _0x43a42b = _0x1319e1['match'](process['env']['UNI_USING_NVUE_STYLE_COMPILER'] ? /^((?:(?:\.[A-Za-z0-9_\-]+)+[\+\~\> ])*)((?:\.[A-Za-z0-9_\-\:]+)+)$/ : /^(\.)([A-Za-z0-9_\-:]+)$/);
                if (_0x43a42b) {
                    var _0x5f2c6f = _0x14b271['JwjjA']['split']('|'), _0x410eaa = 0x0;
                    while (!![]) {
                        switch (_0x5f2c6f[_0x410eaa++]) {
                        case '0':
                            Object['keys'](_0x18eab0)['forEach'](function (_0x556842) {
                                _0x14b271['lowSP'](mergeStyle, _0x1a650b, _0x56845f, _0x3dc915, _0x18eab0, _0x556842, _0x1d685a);
                            });
                            continue;
                        case '1':
                            var _0x53ee03 = _0x56845f['indexOf'](':');
                            continue;
                        case '2':
                            if (_0x14b271['BEjhs'](_0x53ee03, -0x1)) {
                                var _0x42118a = _0x14b271['yxFqG']['split']('|'), _0x408258 = 0x0;
                                while (!![]) {
                                    switch (_0x42118a[_0x408258++]) {
                                    case '0':
                                        var _0x5e912a = _0x56845f['slice'](_0x53ee03);
                                        continue;
                                    case '1':
                                        Object['keys'](_0x18eab0)['forEach'](function (_0x21ea81) {
                                            _0x407190[_0xdd2bd3['xNMYY'](_0x21ea81, _0x5e912a)] = _0x18eab0[_0x21ea81];
                                        });
                                        continue;
                                    case '2':
                                        var _0x407190 = {};
                                        continue;
                                    case '3':
                                        _0x18eab0 = _0x407190;
                                        continue;
                                    case '4':
                                        _0x56845f = _0x56845f['slice'](0x0, _0x53ee03);
                                        continue;
                                    }
                                    break;
                                }
                            }
                            continue;
                        case '3':
                            var _0x56845f = _0x43a42b[0x2];
                            continue;
                        case '4':
                            var _0x3dc915 = _0x43a42b[0x1];
                            continue;
                        }
                        break;
                    }
                } else
                    _0x5a6a0d['push']({
                        'line': _0x299ad2['position']['start']['line'],
                        'column': _0x299ad2['position']['start']['column'],
                        'reason': _0x14b271['dIINa'](_0x14b271['faWWN'](_0x14b271['JAzxM'], _0x1319e1), _0x14b271['xhuik'])
                    });
            }), _0x5a6a0d = _0x5a6a0d['concat'](_0x50e71e));
        else
            _0x555556['HejZE'](_0x48a8bc, _0x555556['wwRWe']) && (_0x299ad2['declarations'] && _0x299ad2['declarations']['length'] && (_0x299ad2['declarations']['forEach'](function (_0x4bd059) {
                var _0x38a3ba = _0x555556['nSAJG']['split']('|'), _0x510c11 = 0x0;
                while (!![]) {
                    switch (_0x38a3ba[_0x510c11++]) {
                    case '0':
                        _0x18eab0[_0x2d9c26] = _0x582678;
                        continue;
                    case '1':
                        var _0x582678 = _0x4bd059['value'];
                        continue;
                    case '2':
                        _0x555556['HejZE'](_0x2d9c26, _0x555556['hPKQv']) && _0x555556['Kdixh']('\x22\x27'['indexOf'](_0x582678[0x0]), -0x1) && (_0x582678 = _0x582678['slice'](0x1, _0x555556['ZEIaC'](_0x582678['length'], 0x1)));
                        continue;
                    case '3':
                        var _0x2d9c26 = util['hyphenedToCamelCase'](_0x4bd059['property']);
                        continue;
                    case '4':
                        if (_0x555556['cySRc'](_0x4bd059['type'], _0x555556['Uhwar']))
                            return;
                        continue;
                    }
                    break;
                }
            }), !_0x1a650b[_0x555556['aICmv']] && (_0x1a650b[_0x555556['aICmv']] = []), _0x1a650b[_0x555556['aICmv']]['push'](_0x18eab0)));
    }), _0x1a650b[_0x555556['MZQXR']] = 0x2, _0x555556['TlVEC'](_0x166148, _0xfa5c17, {
        'jsonStyle': _0x1a650b,
        'log': _0x5a6a0d
    });
}
function validate(_0x24b317, _0x35373c) {
    var _0x46275a = {
            'BiLNW': '0|4|2|5|3|1',
            'WgEjH': function (_0x334348, _0x3e8b85, _0x1a7ed9) {
                return _0x334348(_0x3e8b85, _0x1a7ed9);
            },
            'uyHTh': function (_0x28670c, _0xedb4a3) {
                return _0x28670c === _0xedb4a3;
            },
            'qFdGc': 'number',
            'UwfnA': 'string',
            'cvTji': function (_0xc170e7, _0x43ee6f, _0x41d80c) {
                return _0xc170e7(_0x43ee6f, _0x41d80c);
            }
        }, _0x3194b7 = _0x46275a['BiLNW']['split']('|'), _0x48f81b = 0x0;
    while (!![]) {
        switch (_0x3194b7[_0x48f81b++]) {
        case '0':
            var _0x5e8e74 = {
                'iZoIx': function (_0x7515ea, _0xd4da65, _0x1bd499) {
                    return _0x46275a['WgEjH'](_0x7515ea, _0xd4da65, _0x1bd499);
                },
                'FBDkt': function (_0x518e81, _0x285ec3) {
                    return _0x46275a['uyHTh'](_0x518e81, _0x285ec3);
                },
                'cgSjI': _0x46275a['qFdGc'],
                'FnWom': _0x46275a['UwfnA']
            };
            continue;
        case '1':
            _0x46275a['cvTji'](_0x35373c, _0x7071cf, {
                'jsonStyle': _0x24b317,
                'log': _0x34d9e8
            });
            continue;
        case '2':
            var _0x7071cf;
            continue;
        case '3':
            Object['keys'](_0x24b317)['forEach'](function (_0x493bfc) {
                var _0x49794c = _0x24b317[_0x493bfc];
                Object['keys'](_0x49794c)['forEach'](function (_0x4f6465) {
                    var _0x6412ff = _0x49794c[_0x4f6465], _0x48646f = _0x5e8e74['iZoIx'](validateItem, _0x4f6465, _0x6412ff);
                    _0x5e8e74['FBDkt'](typeof _0x48646f['value'], _0x5e8e74['cgSjI']) || _0x5e8e74['FBDkt'](typeof _0x48646f['value'], _0x5e8e74['FnWom']) ? _0x49794c[_0x4f6465] = _0x48646f['value'] : delete _0x49794c[_0x4f6465], _0x48646f['log'] && _0x34d9e8['push'](_0x48646f['log']);
                });
            });
            continue;
        case '4':
            var _0x34d9e8 = [];
            continue;
        case '5':
            try {
                _0x24b317 = JSON['parse'](JSON['stringify'](_0x24b317));
            } catch (_0x139ce9) {
                _0x7071cf = _0x139ce9, _0x24b317 = {};
            }
            continue;
        }
        break;
    }
}
module['exports'] = {
    'parse': parse,
    'validate': validate,
    'validateItem': validateItem,
    'util': util
};
