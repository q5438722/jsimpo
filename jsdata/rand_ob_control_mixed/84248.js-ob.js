var EventEmitter = require('events')['EventEmitter'], spawn = require('child_process')['spawn'], readlink = require('graceful-readlink')['readlinkSync'], path = require('path'), dirname = path['dirname'], basename = path['basename'], fs = require('fs');
exports = module['exports'] = new Command(), exports['Command'] = Command, exports['Option'] = Option;
function Option(_0x26a7be, _0x4ebb22) {
    var _0x4d23a0 = {
            'CIpQt': '0|3|1|5|4|2|6|7',
            'TswJz': function (_0x9d2030, _0x105649) {
                return _0x9d2030 > _0x105649;
            },
            'TEhYW': '-no-',
            'iqlod': function (_0x5e29c5, _0x37d1c9) {
                return _0x5e29c5 || _0x37d1c9;
            }
        }, _0x32fdb5 = _0x4d23a0['CIpQt']['split']('|'), _0x239ca0 = 0x0;
    while (!![]) {
        switch (_0x32fdb5[_0x239ca0++]) {
        case '0':
            this['flags'] = _0x26a7be;
            continue;
        case '1':
            this['optional'] = ~_0x26a7be['indexOf']('[');
            continue;
        case '2':
            if (_0x4d23a0['TswJz'](_0x26a7be['length'], 0x1) && !/^[[<]/['test'](_0x26a7be[0x1]))
                this['short'] = _0x26a7be['shift']();
            continue;
        case '3':
            this['required'] = ~_0x26a7be['indexOf']('<');
            continue;
        case '4':
            _0x26a7be = _0x26a7be['split'](/[ ,|]+/);
            continue;
        case '5':
            this['bool'] = !~_0x26a7be['indexOf'](_0x4d23a0['TEhYW']);
            continue;
        case '6':
            this['long'] = _0x26a7be['shift']();
            continue;
        case '7':
            this['description'] = _0x4d23a0['iqlod'](_0x4ebb22, '');
            continue;
        }
        break;
    }
}
Option['prototype']['name'] = function () {
    var _0x50e118 = { 'QGmoC': 'no-' };
    return this['long']['replace']('--', '')['replace'](_0x50e118['QGmoC'], '');
}, Option['prototype']['is'] = function (_0x1c3ecd) {
    var _0x110f45 = {
        'JKrDc': function (_0x39f955, _0x574f53) {
            return _0x39f955 == _0x574f53;
        },
        'dhzfE': function (_0x1d2696, _0x1f328a) {
            return _0x1d2696 == _0x1f328a;
        }
    };
    return _0x110f45['JKrDc'](_0x1c3ecd, this['short']) || _0x110f45['dhzfE'](_0x1c3ecd, this['long']);
};
function Command(_0x2fc527) {
    var _0x2f371b = {
            'JhEvv': '2|1|0|3|5|4',
            'MgZBJ': function (_0x14a98d, _0x5d2855) {
                return _0x14a98d || _0x5d2855;
            }
        }, _0x54fd0c = _0x2f371b['JhEvv']['split']('|'), _0x49c720 = 0x0;
    while (!![]) {
        switch (_0x54fd0c[_0x49c720++]) {
        case '0':
            this['_execs'] = {};
            continue;
        case '1':
            this['options'] = [];
            continue;
        case '2':
            this['commands'] = [];
            continue;
        case '3':
            this['_allowUnknownOption'] = ![];
            continue;
        case '4':
            this['_name'] = _0x2f371b['MgZBJ'](_0x2fc527, '');
            continue;
        case '5':
            this['_args'] = [];
            continue;
        }
        break;
    }
}
Command['prototype']['__proto__'] = EventEmitter['prototype'], Command['prototype']['command'] = function (_0x1af7b2, _0x5f4674, _0x1f8f29) {
    var _0x29cc8b = {
            'HZiSx': '8|9|0|5|3|1|2|6|4|7',
            'bUaCE': function (_0x13ba97, _0x46bbd0) {
                return _0x13ba97 || _0x46bbd0;
            }
        }, _0x2bdcb7 = _0x29cc8b['HZiSx']['split']('|'), _0x145099 = 0x0;
    while (!![]) {
        switch (_0x2bdcb7[_0x145099++]) {
        case '0':
            var _0x326e6f = new Command(_0x11a191['shift']());
            continue;
        case '1':
            this['commands']['push'](_0x326e6f);
            continue;
        case '2':
            _0x326e6f['parseExpectedArgs'](_0x11a191);
            continue;
        case '3':
            _0x326e6f['_noHelp'] = !!_0x1f8f29['noHelp'];
            continue;
        case '4':
            if (_0x5f4674)
                return this;
            continue;
        case '5':
            if (_0x5f4674) {
                _0x326e6f['description'](_0x5f4674), this['executables'] = !![], this['_execs'][_0x326e6f['_name']] = !![];
                if (_0x1f8f29['isDefault'])
                    this['defaultExecutable'] = _0x326e6f['_name'];
            }
            continue;
        case '6':
            _0x326e6f['parent'] = this;
            continue;
        case '7':
            return _0x326e6f;
        case '8':
            _0x1f8f29 = _0x29cc8b['bUaCE'](_0x1f8f29, {});
            continue;
        case '9':
            var _0x11a191 = _0x1af7b2['split'](/ +/);
            continue;
        }
        break;
    }
}, Command['prototype']['arguments'] = function (_0x1481d1) {
    return this['parseExpectedArgs'](_0x1481d1['split'](/ +/));
}, Command['prototype']['addImplicitHelpCommand'] = function () {
    var _0x34a8f0 = {
        'htXGs': 'help\x20[cmd]',
        'fNhMu': 'display\x20help\x20for\x20[cmd]'
    };
    this['command'](_0x34a8f0['htXGs'], _0x34a8f0['fNhMu']);
}, Command['prototype']['parseExpectedArgs'] = function (_0x23f7b4) {
    var _0xa202cd = {
        'iKXIP': function (_0x2f9db9, _0x306c0c) {
            return _0x2f9db9 > _0x306c0c;
        },
        'qwrnj': function (_0x5ade15, _0x2016f0) {
            return _0x5ade15 === _0x2016f0;
        },
        'moBIf': '...'
    };
    if (!_0x23f7b4['length'])
        return;
    var _0x1d03f3 = this;
    return _0x23f7b4['forEach'](function (_0x3ce619) {
        var _0x56333d = {
            'required': ![],
            'name': '',
            'variadic': ![]
        };
        switch (_0x3ce619[0x0]) {
        case '<':
            _0x56333d['required'] = !![], _0x56333d['name'] = _0x3ce619['slice'](0x1, -0x1);
            break;
        case '[':
            _0x56333d['name'] = _0x3ce619['slice'](0x1, -0x1);
            break;
        }
        _0xa202cd['iKXIP'](_0x56333d['name']['length'], 0x3) && _0xa202cd['qwrnj'](_0x56333d['name']['slice'](-0x3), _0xa202cd['moBIf']) && (_0x56333d['variadic'] = !![], _0x56333d['name'] = _0x56333d['name']['slice'](0x0, -0x3)), _0x56333d['name'] && _0x1d03f3['_args']['push'](_0x56333d);
    }), this;
}, Command['prototype']['action'] = function (_0x3d3a23) {
    var _0x501b07 = {
            'unLgp': '7|4|1|2|6|0|3|5',
            'votWr': function (_0x4db310, _0x11e048) {
                return _0x4db310 === _0x11e048;
            },
            'VhbpA': function (_0x40226f, _0x2e620f) {
                return _0x40226f == _0x2e620f;
            },
            'DcCqP': function (_0x373ad1, _0x55f5a7) {
                return _0x373ad1 !== _0x55f5a7;
            },
            'HBwxO': function (_0x198ce1, _0x14bb82) {
                return _0x198ce1 - _0x14bb82;
            },
            'XlsXw': '4|2|7|3|5|0|6|1|8',
            'bCwzW': function (_0x2e9a58, _0x856784, _0xea4647) {
                return _0x2e9a58(_0x856784, _0xea4647);
            },
            'baUyD': function (_0x472acb, _0x5ba769) {
                return _0x472acb > _0x5ba769;
            }
        }, _0x39f84c = _0x501b07['unLgp']['split']('|'), _0x476c18 = 0x0;
    while (!![]) {
        switch (_0x39f84c[_0x476c18++]) {
        case '0':
            _0x139040['on'](_0x944c71, _0x21836a);
            continue;
        case '1':
            var _0x21836a = function (_0x5038d6, _0x4ad6b9) {
                var _0x5dc640 = _0x26aa12['UlEqG']['split']('|'), _0x4711c5 = 0x0;
                while (!![]) {
                    switch (_0x5dc640[_0x4711c5++]) {
                    case '0':
                        if (_0x55aa47['args']['length'])
                            _0x5038d6 = _0x55aa47['args']['concat'](_0x5038d6);
                        continue;
                    case '1':
                        _0xf20643['_args']['length'] ? _0x5038d6[_0xf20643['_args']['length']] = _0xf20643 : _0x5038d6['push'](_0xf20643);
                        continue;
                    case '2':
                        _0x4ad6b9 = _0x4ad6b9 || [];
                        continue;
                    case '3':
                        _0x26aa12['iwQcQ'](outputHelpIfNecessary, _0xf20643, _0x55aa47['unknown']);
                        continue;
                    case '4':
                        _0x5038d6 = _0x5038d6 || [];
                        continue;
                    case '5':
                        _0x26aa12['wjkNN'](_0x55aa47['unknown']['length'], 0x0) && _0xf20643['unknownOption'](_0x55aa47['unknown'][0x0]);
                        continue;
                    case '6':
                        _0xf20643['_args']['forEach'](function (_0x36d705, _0x1ea7e6) {
                            if (_0x36d705['required'] && _0x26aa12['erHPR'](null, _0x5038d6[_0x1ea7e6]))
                                _0xf20643['missingArgument'](_0x36d705['name']);
                            else
                                _0x36d705['variadic'] && (_0x26aa12['SNctC'](_0x1ea7e6, _0x26aa12['sNtBA'](_0xf20643['_args']['length'], 0x1)) && _0xf20643['variadicArgNotLast'](_0x36d705['name']), _0x5038d6[_0x1ea7e6] = _0x5038d6['splice'](_0x1ea7e6));
                        });
                        continue;
                    case '7':
                        var _0x55aa47 = _0xf20643['parseOptions'](_0x4ad6b9);
                        continue;
                    case '8':
                        _0x3d3a23['apply'](_0xf20643, _0x5038d6);
                        continue;
                    }
                    break;
                }
            };
            continue;
        case '2':
            var _0x139040 = this['parent'] || this;
            continue;
        case '3':
            if (this['_alias'])
                _0x139040['on'](this['_alias'], _0x21836a);
            continue;
        case '4':
            var _0xf20643 = this;
            continue;
        case '5':
            return this;
        case '6':
            var _0x944c71 = _0x501b07['votWr'](_0x139040, this) ? '*' : this['_name'];
            continue;
        case '7':
            var _0x26aa12 = {
                'erHPR': function (_0x38e170, _0x5a3818) {
                    return _0x501b07['VhbpA'](_0x38e170, _0x5a3818);
                },
                'SNctC': function (_0x412bbf, _0x5686e6) {
                    return _0x501b07['DcCqP'](_0x412bbf, _0x5686e6);
                },
                'sNtBA': function (_0x4f64eb, _0x5efa5a) {
                    return _0x501b07['HBwxO'](_0x4f64eb, _0x5efa5a);
                },
                'UlEqG': _0x501b07['XlsXw'],
                'iwQcQ': function (_0x3c264b, _0x3fceab, _0x1c0976) {
                    return _0x501b07['bCwzW'](_0x3c264b, _0x3fceab, _0x1c0976);
                },
                'wjkNN': function (_0x3987a7, _0x34f45c) {
                    return _0x501b07['baUyD'](_0x3987a7, _0x34f45c);
                }
            };
            continue;
        }
        break;
    }
}, Command['prototype']['option'] = function (_0x584e74, _0x1c2b28, _0x38e6ca, _0x34ce6d) {
    var _0x1312be = {
            'qSIGl': '0|1|6|2|4|3|5',
            'RsNMU': function (_0x403247, _0x1861f4) {
                return _0x403247 !== _0x1861f4;
            },
            'CqYFU': function (_0x58eb56, _0x41a249, _0x7805e8) {
                return _0x58eb56(_0x41a249, _0x7805e8);
            },
            'ncepp': function (_0x217dac, _0x4f56cc) {
                return _0x217dac === _0x4f56cc;
            },
            'aQjiS': function (_0x17f0ac, _0x2262aa) {
                return _0x17f0ac == _0x2262aa;
            },
            'tTeLu': 'boolean',
            'voMAC': 'undefined',
            'XFvsB': function (_0x5dda4a, _0x442063) {
                return _0x5dda4a || _0x442063;
            },
            'EJcAE': function (_0x223428, _0x2abb41) {
                return _0x223428(_0x2abb41);
            },
            'zmDyi': function (_0x1f941e, _0x137d7c) {
                return _0x1f941e == _0x137d7c;
            },
            'BsRkz': function (_0x1ee0b4, _0x3fb4ec) {
                return _0x1ee0b4 !== _0x3fb4ec;
            },
            'oExgm': function (_0x45d913, _0x5a53ca) {
                return _0x45d913 != _0x5a53ca;
            },
            'Pymqm': 'function',
            'plGiX': function (_0x2d5b7e, _0x2b6fa3) {
                return _0x2d5b7e instanceof _0x2b6fa3;
            }
        }, _0x1fea7a = _0x1312be['qSIGl']['split']('|'), _0x45198c = 0x0;
    while (!![]) {
        switch (_0x1fea7a[_0x45198c++]) {
        case '0':
            var _0x27e294 = {
                'dkSmB': function (_0x5f2ff8, _0x2162ae) {
                    return _0x1312be['RsNMU'](_0x5f2ff8, _0x2162ae);
                },
                'BwJeu': function (_0x2919ea, _0x45ff14, _0x5b220d) {
                    return _0x1312be['CqYFU'](_0x2919ea, _0x45ff14, _0x5b220d);
                },
                'MzWhA': function (_0x487bb9, _0x118aa7) {
                    return _0x1312be['ncepp'](_0x487bb9, _0x118aa7);
                },
                'lkEOX': function (_0x560ae6, _0x516bcb) {
                    return _0x1312be['aQjiS'](_0x560ae6, _0x516bcb);
                },
                'hoYao': _0x1312be['tTeLu'],
                'cfbtp': _0x1312be['voMAC'],
                'NnEhd': function (_0x15f3c7, _0x1f9f8b) {
                    return _0x1312be['XFvsB'](_0x15f3c7, _0x1f9f8b);
                }
            };
            continue;
        case '1':
            var _0x15e11d = this, _0x47a11f = new Option(_0x584e74, _0x1c2b28), _0x32ed03 = _0x47a11f['name'](), _0x3cb27a = _0x1312be['EJcAE'](camelcase, _0x32ed03);
            continue;
        case '2':
            if (_0x1312be['zmDyi'](![], _0x47a11f['bool']) || _0x47a11f['optional'] || _0x47a11f['required']) {
                if (_0x1312be['zmDyi'](![], _0x47a11f['bool']))
                    _0x34ce6d = !![];
                if (_0x1312be['BsRkz'](undefined, _0x34ce6d))
                    _0x15e11d[_0x3cb27a] = _0x34ce6d;
            }
            continue;
        case '3':
            this['on'](_0x32ed03, function (_0x1b8097) {
                if (_0x27e294['dkSmB'](null, _0x1b8097) && _0x38e6ca)
                    _0x1b8097 = _0x27e294['BwJeu'](_0x38e6ca, _0x1b8097, _0x27e294['MzWhA'](undefined, _0x15e11d[_0x3cb27a]) ? _0x34ce6d : _0x15e11d[_0x3cb27a]);
                if (_0x27e294['lkEOX'](_0x27e294['hoYao'], typeof _0x15e11d[_0x3cb27a]) || _0x27e294['lkEOX'](_0x27e294['cfbtp'], typeof _0x15e11d[_0x3cb27a]))
                    _0x27e294['lkEOX'](null, _0x1b8097) ? _0x15e11d[_0x3cb27a] = _0x47a11f['bool'] ? _0x27e294['NnEhd'](_0x34ce6d, !![]) : ![] : _0x15e11d[_0x3cb27a] = _0x1b8097;
                else
                    _0x27e294['dkSmB'](null, _0x1b8097) && (_0x15e11d[_0x3cb27a] = _0x1b8097);
            });
            continue;
        case '4':
            this['options']['push'](_0x47a11f);
            continue;
        case '5':
            return this;
        case '6':
            if (_0x1312be['oExgm'](typeof _0x38e6ca, _0x1312be['Pymqm'])) {
                if (_0x1312be['plGiX'](_0x38e6ca, RegExp)) {
                    var _0x33adec = _0x38e6ca;
                    _0x38e6ca = function (_0x676bd2, _0x36a552) {
                        var _0x4eb18e = _0x33adec['exec'](_0x676bd2);
                        return _0x4eb18e ? _0x4eb18e[0x0] : _0x36a552;
                    };
                } else
                    _0x34ce6d = _0x38e6ca, _0x38e6ca = null;
            }
            continue;
        }
        break;
    }
}, Command['prototype']['allowUnknownOption'] = function (_0x135639) {
    var _0x58c1ce = {
        'JUMEt': function (_0x3b07e4, _0x364f3e) {
            return _0x3b07e4 === _0x364f3e;
        }
    };
    return this['_allowUnknownOption'] = _0x58c1ce['JUMEt'](arguments['length'], 0x0) || _0x135639, this;
}, Command['prototype']['parse'] = function (_0x376c75) {
    var _0x368f44 = {
            'JGVod': '4|1|0|5|2|6|8|7|3|9',
            'FkYQH': function (_0x369905, _0x303936, _0x163025) {
                return _0x369905(_0x303936, _0x163025);
            },
            'ovbuS': '.js',
            'aWdwA': function (_0x29d980, _0x20059a) {
                return _0x29d980 != _0x20059a;
            },
            'KsVTK': 'function',
            'eKWrw': function (_0x11fac5, _0x26ca9a) {
                return _0x11fac5 < _0x26ca9a;
            },
            'RLbvP': '--help'
        }, _0x3a24c0 = _0x368f44['JGVod']['split']('|'), _0x275f48 = 0x0;
    while (!![]) {
        switch (_0x3a24c0[_0x275f48++]) {
        case '0':
            this['_name'] = this['_name'] || _0x368f44['FkYQH'](basename, _0x376c75[0x1], _0x368f44['ovbuS']);
            continue;
        case '1':
            this['rawArgs'] = _0x376c75;
            continue;
        case '2':
            var _0x1b3cf5 = this['parseOptions'](this['normalize'](_0x376c75['slice'](0x2)));
            continue;
        case '3':
            if (this['_execs'][_0x472a9d] && _0x368f44['aWdwA'](typeof this['_execs'][_0x472a9d], _0x368f44['KsVTK']))
                return this['executeSubCommand'](_0x376c75, _0x2ef8aa, _0x1b3cf5['unknown']);
            else {
                if (this['defaultExecutable'])
                    return _0x2ef8aa['unshift'](_0x472a9d = this['defaultExecutable']), this['executeSubCommand'](_0x376c75, _0x2ef8aa, _0x1b3cf5['unknown']);
            }
            continue;
        case '4':
            if (this['executables'])
                this['addImplicitHelpCommand']();
            continue;
        case '5':
            this['executables'] && _0x368f44['eKWrw'](_0x376c75['length'], 0x3) && !this['defaultExecutable'] && _0x376c75['push'](_0x368f44['RLbvP']);
            continue;
        case '6':
            var _0x2ef8aa = this['args'] = _0x1b3cf5['args'];
            continue;
        case '7':
            var _0x472a9d = _0x3d96e1['args'][0x0];
            continue;
        case '8':
            var _0x3d96e1 = this['parseArgs'](this['args'], _0x1b3cf5['unknown']);
            continue;
        case '9':
            return _0x3d96e1;
        }
        break;
    }
}, Command['prototype']['executeSubCommand'] = function (_0x2b4c1b, _0x2a50a7, _0x45bbcf) {
    var _0x21afe1 = {
            'CdaOj': '2|8|18|14|10|13|11|0|9|6|1|5|12|3|7|16|4|15|17',
            'FzFrG': function (_0x50c41e, _0x1730b2) {
                return _0x50c41e(_0x1730b2);
            },
            'JsFfC': function (_0xcaa69b, _0x32eac5) {
                return _0xcaa69b == _0x32eac5;
            },
            'wjAfF': 'ENOENT',
            'jRRFN': '\x0a\x20\x20%s(1)\x20does\x20not\x20exist,\x20try\x20--help\x0a',
            'EHpXH': 'EACCES',
            'OWgVL': '\x0a\x20\x20%s(1)\x20not\x20executable.\x20try\x20chmod\x20or\x20run\x20with\x20root\x0a',
            'qspzQ': 'close',
            'BzQgA': function (_0x11c1ae, _0x4d8ff1) {
                return _0x11c1ae(_0x4d8ff1);
            },
            'HkMUR': function (_0x54a921, _0x26c1be) {
                return _0x54a921 !== _0x26c1be;
            },
            'sHDss': function (_0x504d09, _0x145b26) {
                return _0x504d09 !== _0x145b26;
            },
            'usPij': function (_0x248764, _0x11ae97) {
                return _0x248764(_0x11ae97);
            },
            'KLSMT': function (_0x26dc58, _0x1d29d2) {
                return _0x26dc58 == _0x1d29d2;
            },
            'dmAFU': 'help',
            'oUxud': '--help',
            'tZAoS': function (_0x14097a, _0x17579c) {
                return _0x14097a + _0x17579c;
            },
            'VtFeX': function (_0x92f719, _0x4b2aff, _0x3bb58d) {
                return _0x92f719(_0x4b2aff, _0x3bb58d);
            },
            'ZCdzg': '.js',
            'ZSUVa': function (_0x4fceb5, _0x42fc95) {
                return _0x4fceb5 == _0x42fc95;
            },
            'XOCym': function (_0x303b99, _0x19d599) {
                return _0x303b99 == _0x19d599;
            },
            'rOJRi': 'error',
            'ddAUo': function (_0xf4a159, _0x5329af) {
                return _0xf4a159 !== _0x5329af;
            },
            'ogFmp': 'win32',
            'gcwMA': function (_0x1c583b, _0x185a42, _0x22a128, _0x869e88) {
                return _0x1c583b(_0x185a42, _0x22a128, _0x869e88);
            },
            'rtJxg': 'node',
            'heyQL': 'inherit',
            'nUQum': function (_0x788c39, _0x286a91, _0x562650, _0x462a40) {
                return _0x788c39(_0x286a91, _0x562650, _0x462a40);
            },
            'pmCkU': function (_0x38d1e7, _0x257b8a, _0x340a28, _0x1ada92) {
                return _0x38d1e7(_0x257b8a, _0x340a28, _0x1ada92);
            }
        }, _0x49d6c3 = _0x21afe1['CdaOj']['split']('|'), _0x59edc8 = 0x0;
    while (!![]) {
        switch (_0x49d6c3[_0x59edc8++]) {
        case '0':
            var _0x18b91a, _0x55dc93 = _0x21afe1['FzFrG'](readlink, _0x2b53e6);
            continue;
        case '1':
            var _0x286276 = path['join'](_0x18b91a, _0xd6e5af);
            continue;
        case '2':
            var _0x4de4f3 = {
                'UwULp': function (_0xcb7575, _0x465a5d) {
                    return _0x21afe1['JsFfC'](_0xcb7575, _0x465a5d);
                },
                'bKach': _0x21afe1['wjAfF'],
                'DfKip': _0x21afe1['jRRFN'],
                'IETYu': _0x21afe1['EHpXH'],
                'ixAsr': _0x21afe1['OWgVL']
            };
            continue;
        case '3':
            _0x2a50a7 = _0x2a50a7['slice'](0x1);
            continue;
        case '4':
            _0x1892f4['on'](_0x21afe1['qspzQ'], process['exit']['bind'](process));
            continue;
        case '5':
            var _0x3bdad5 = ![];
            continue;
        case '6':
            _0x18b91a = _0x21afe1['BzQgA'](dirname, _0x55dc93);
            continue;
        case '7':
            var _0x1892f4;
            continue;
        case '8':
            _0x2a50a7 = _0x2a50a7['concat'](_0x45bbcf);
            continue;
        case '9':
            _0x21afe1['HkMUR'](_0x55dc93, _0x2b53e6) && _0x21afe1['sHDss'](_0x55dc93['charAt'](0x0), '/') && (_0x55dc93 = path['join'](_0x21afe1['usPij'](dirname, _0x2b53e6), _0x55dc93));
            continue;
        case '10':
            _0x21afe1['KLSMT'](_0x21afe1['dmAFU'], _0x2a50a7[0x0]) && (_0x2a50a7[0x0] = _0x2a50a7[0x1], _0x2a50a7[0x1] = _0x21afe1['oUxud']);
            continue;
        case '11':
            var _0xd6e5af = _0x21afe1['tZAoS'](_0x21afe1['tZAoS'](_0x21afe1['VtFeX'](basename, _0x2b53e6, _0x21afe1['ZCdzg']), '-'), _0x2a50a7[0x0]);
            continue;
        case '12':
            if (_0x21afe1['usPij'](exists, _0x21afe1['tZAoS'](_0x286276, _0x21afe1['ZCdzg'])))
                _0xd6e5af = _0x21afe1['tZAoS'](_0x286276, _0x21afe1['ZCdzg']), _0x3bdad5 = !![];
            else
                _0x21afe1['usPij'](exists, _0x286276) && (_0xd6e5af = _0x286276);
            continue;
        case '13':
            var _0x2b53e6 = _0x2b4c1b[0x1];
            continue;
        case '14':
            if (_0x21afe1['ZSUVa'](_0x21afe1['dmAFU'], _0x2a50a7[0x0]) && _0x21afe1['XOCym'](0x1, _0x2a50a7['length']))
                this['help']();
            continue;
        case '15':
            _0x1892f4['on'](_0x21afe1['rOJRi'], function (_0x3d4b98) {
                if (_0x4de4f3['UwULp'](_0x3d4b98['code'], _0x4de4f3['bKach']))
                    console['error'](_0x4de4f3['DfKip'], _0xd6e5af);
                else
                    _0x4de4f3['UwULp'](_0x3d4b98['code'], _0x4de4f3['IETYu']) && console['error'](_0x4de4f3['ixAsr'], _0xd6e5af);
                process['exit'](0x1);
            });
            continue;
        case '16':
            _0x21afe1['ddAUo'](process['platform'], _0x21afe1['ogFmp']) ? _0x3bdad5 ? (_0x2a50a7['unshift'](_0x286276), _0x2a50a7 = (process['execArgv'] || [])['concat'](_0x2a50a7), _0x1892f4 = _0x21afe1['gcwMA'](spawn, _0x21afe1['rtJxg'], _0x2a50a7, {
                'stdio': _0x21afe1['heyQL'],
                'customFds': [
                    0x0,
                    0x1,
                    0x2
                ]
            })) : _0x1892f4 = _0x21afe1['nUQum'](spawn, _0xd6e5af, _0x2a50a7, {
                'stdio': _0x21afe1['heyQL'],
                'customFds': [
                    0x0,
                    0x1,
                    0x2
                ]
            }) : (_0x2a50a7['unshift'](_0x286276), _0x1892f4 = _0x21afe1['pmCkU'](spawn, process['execPath'], _0x2a50a7, { 'stdio': _0x21afe1['heyQL'] }));
            continue;
        case '17':
            this['runningCommand'] = _0x1892f4;
            continue;
        case '18':
            if (!_0x2a50a7['length'])
                this['help']();
            continue;
        }
        break;
    }
}, Command['prototype']['normalize'] = function (_0x417409) {
    var _0x442235 = {
            'yPxbA': function (_0x5c86e5, _0x3acf02) {
                return _0x5c86e5 + _0x3acf02;
            },
            'pWAGZ': function (_0x4a74eb, _0x12d7fe) {
                return _0x4a74eb < _0x12d7fe;
            },
            'TTdjQ': function (_0x27c98b, _0x371583) {
                return _0x27c98b > _0x371583;
            },
            'qVMXn': function (_0x1db354, _0x90ff3d) {
                return _0x1db354 - _0x90ff3d;
            },
            'zjnwr': function (_0x54e27d, _0x3bf6f6) {
                return _0x54e27d === _0x3bf6f6;
            },
            'udYvu': function (_0x1555b4, _0x2293e9) {
                return _0x1555b4 > _0x2293e9;
            },
            'ChKkW': function (_0x58a0f1, _0x55b723) {
                return _0x58a0f1 == _0x55b723;
            },
            'iTUyX': function (_0x2680b0, _0x4e2755) {
                return _0x2680b0 != _0x4e2755;
            }
        }, _0xecdd40 = [], _0x2c2838, _0x36f3da, _0x428716;
    for (var _0x142374 = 0x0, _0x229257 = _0x417409['length']; _0x442235['pWAGZ'](_0x142374, _0x229257); ++_0x142374) {
        _0x2c2838 = _0x417409[_0x142374];
        _0x442235['TTdjQ'](_0x142374, 0x0) && (_0x36f3da = this['optionFor'](_0x417409[_0x442235['qVMXn'](_0x142374, 0x1)]));
        if (_0x442235['zjnwr'](_0x2c2838, '--')) {
            _0xecdd40 = _0xecdd40['concat'](_0x417409['slice'](_0x142374));
            break;
        } else {
            if (_0x36f3da && _0x36f3da['required'])
                _0xecdd40['push'](_0x2c2838);
            else {
                if (_0x442235['udYvu'](_0x2c2838['length'], 0x1) && _0x442235['ChKkW']('-', _0x2c2838[0x0]) && _0x442235['iTUyX']('-', _0x2c2838[0x1]))
                    _0x2c2838['slice'](0x1)['split']('')['forEach'](function (_0x488e1b) {
                        _0xecdd40['push'](_0x442235['yPxbA']('-', _0x488e1b));
                    });
                else
                    /^--/['test'](_0x2c2838) && ~(_0x428716 = _0x2c2838['indexOf']('=')) ? _0xecdd40['push'](_0x2c2838['slice'](0x0, _0x428716), _0x2c2838['slice'](_0x442235['yPxbA'](_0x428716, 0x1))) : _0xecdd40['push'](_0x2c2838);
            }
        }
    }
    return _0xecdd40;
}, Command['prototype']['parseArgs'] = function (_0x53ea24, _0x168de1) {
    var _0xb2fcde = {
            'RLXrF': function (_0xfbebc8, _0x4f42fd, _0x2974b5) {
                return _0xfbebc8(_0x4f42fd, _0x2974b5);
            },
            'iodga': function (_0x239c39, _0x1ccc39) {
                return _0x239c39 > _0x1ccc39;
            }
        }, _0x4cd105;
    return _0x53ea24['length'] ? (_0x4cd105 = _0x53ea24[0x0], this['listeners'](_0x4cd105)['length'] ? this['emit'](_0x53ea24['shift'](), _0x53ea24, _0x168de1) : this['emit']('*', _0x53ea24)) : (_0xb2fcde['RLXrF'](outputHelpIfNecessary, this, _0x168de1), _0xb2fcde['iodga'](_0x168de1['length'], 0x0) && this['unknownOption'](_0x168de1[0x0])), this;
}, Command['prototype']['optionFor'] = function (_0x2f175a) {
    var _0x1fd2b6 = {
        'mDLyy': function (_0xfbfd05, _0x444b06) {
            return _0xfbfd05 < _0x444b06;
        }
    };
    for (var _0x4841bc = 0x0, _0x177b72 = this['options']['length']; _0x1fd2b6['mDLyy'](_0x4841bc, _0x177b72); ++_0x4841bc) {
        if (this['options'][_0x4841bc]['is'](_0x2f175a))
            return this['options'][_0x4841bc];
    }
}, Command['prototype']['parseOptions'] = function (_0xd201ba) {
    var _0x30f033 = {
            'PAArx': function (_0x4bc00e, _0x37fccf) {
                return _0x4bc00e < _0x37fccf;
            },
            'MXFtF': function (_0x307bb6, _0xed0209) {
                return _0x307bb6 == _0xed0209;
            },
            'LMozO': function (_0x287971, _0x19ff68) {
                return _0x287971 + _0x19ff68;
            },
            'KYWRz': function (_0x1391c9, _0x1acbb7) {
                return _0x1391c9 == _0x1acbb7;
            },
            'tuWew': function (_0x336197, _0x251e31) {
                return _0x336197 == _0x251e31;
            },
            'iCgaG': function (_0x3529ac, _0xaeea51) {
                return _0x3529ac != _0xaeea51;
            },
            'WiRYI': function (_0x309690, _0x1ad122) {
                return _0x309690 > _0x1ad122;
            },
            'zlYaz': function (_0x3ea3f6, _0x2ac2f4) {
                return _0x3ea3f6 + _0x2ac2f4;
            }
        }, _0xef9fb = [], _0x4b422f = _0xd201ba['length'], _0x5072f8, _0x2858fb, _0x47a18d, _0x1cf3c2 = [];
    for (var _0xb10c5a = 0x0; _0x30f033['PAArx'](_0xb10c5a, _0x4b422f); ++_0xb10c5a) {
        _0x47a18d = _0xd201ba[_0xb10c5a];
        if (_0x30f033['MXFtF']('--', _0x47a18d)) {
            _0x5072f8 = !![];
            continue;
        }
        if (_0x5072f8) {
            _0xef9fb['push'](_0x47a18d);
            continue;
        }
        _0x2858fb = this['optionFor'](_0x47a18d);
        if (_0x2858fb) {
            if (_0x2858fb['required']) {
                _0x47a18d = _0xd201ba[++_0xb10c5a];
                if (_0x30f033['MXFtF'](null, _0x47a18d))
                    return this['optionMissingArgument'](_0x2858fb);
                this['emit'](_0x2858fb['name'](), _0x47a18d);
            } else
                _0x2858fb['optional'] ? (_0x47a18d = _0xd201ba[_0x30f033['LMozO'](_0xb10c5a, 0x1)], _0x30f033['KYWRz'](null, _0x47a18d) || _0x30f033['tuWew']('-', _0x47a18d[0x0]) && _0x30f033['iCgaG']('-', _0x47a18d) ? _0x47a18d = null : ++_0xb10c5a, this['emit'](_0x2858fb['name'](), _0x47a18d)) : this['emit'](_0x2858fb['name']());
            continue;
        }
        if (_0x30f033['WiRYI'](_0x47a18d['length'], 0x1) && _0x30f033['tuWew']('-', _0x47a18d[0x0])) {
            _0x1cf3c2['push'](_0x47a18d);
            _0xd201ba[_0x30f033['zlYaz'](_0xb10c5a, 0x1)] && _0x30f033['iCgaG']('-', _0xd201ba[_0x30f033['zlYaz'](_0xb10c5a, 0x1)][0x0]) && _0x1cf3c2['push'](_0xd201ba[++_0xb10c5a]);
            continue;
        }
        _0xef9fb['push'](_0x47a18d);
    }
    return {
        'args': _0xef9fb,
        'unknown': _0x1cf3c2
    };
}, Command['prototype']['opts'] = function () {
    var _0x22c387 = {
            'nhSoC': function (_0x488dc1, _0x2acbda) {
                return _0x488dc1 < _0x2acbda;
            },
            'GqPXn': function (_0x1b5ab9, _0x8756f3) {
                return _0x1b5ab9(_0x8756f3);
            },
            'KKNtd': function (_0x4771ac, _0x4c28a8) {
                return _0x4771ac === _0x4c28a8;
            },
            'SSxow': 'version'
        }, _0x4aeb39 = {}, _0x33176a = this['options']['length'];
    for (var _0x4573bb = 0x0; _0x22c387['nhSoC'](_0x4573bb, _0x33176a); _0x4573bb++) {
        var _0x33445f = _0x22c387['GqPXn'](camelcase, this['options'][_0x4573bb]['name']());
        _0x4aeb39[_0x33445f] = _0x22c387['KKNtd'](_0x33445f, _0x22c387['SSxow']) ? this['_version'] : this[_0x33445f];
    }
    return _0x4aeb39;
}, Command['prototype']['missingArgument'] = function (_0x36ce53) {
    var _0x351c02 = { 'VzGNS': '\x20\x20error:\x20missing\x20required\x20argument\x20`%s\x27' };
    console['error'](), console['error'](_0x351c02['VzGNS'], _0x36ce53), console['error'](), process['exit'](0x1);
}, Command['prototype']['optionMissingArgument'] = function (_0x4ea913, _0x5a26d0) {
    var _0xde4f95 = {
        'fDsaz': '\x20\x20error:\x20option\x20`%s\x27\x20argument\x20missing,\x20got\x20`%s\x27',
        'kOinR': '\x20\x20error:\x20option\x20`%s\x27\x20argument\x20missing'
    };
    console['error'](), _0x5a26d0 ? console['error'](_0xde4f95['fDsaz'], _0x4ea913['flags'], _0x5a26d0) : console['error'](_0xde4f95['kOinR'], _0x4ea913['flags']), console['error'](), process['exit'](0x1);
}, Command['prototype']['unknownOption'] = function (_0x400a28) {
    var _0x58066d = {
            'BMxuA': '3|4|0|2|1',
            'uKegu': '\x20\x20error:\x20unknown\x20option\x20`%s\x27'
        }, _0x1b732b = _0x58066d['BMxuA']['split']('|'), _0x3caa57 = 0x0;
    while (!![]) {
        switch (_0x1b732b[_0x3caa57++]) {
        case '0':
            console['error'](_0x58066d['uKegu'], _0x400a28);
            continue;
        case '1':
            process['exit'](0x1);
            continue;
        case '2':
            console['error']();
            continue;
        case '3':
            if (this['_allowUnknownOption'])
                return;
            continue;
        case '4':
            console['error']();
            continue;
        }
        break;
    }
}, Command['prototype']['variadicArgNotLast'] = function (_0x5d9aba) {
    var _0x3b6f42 = { 'fBBgY': '\x20\x20error:\x20variadic\x20arguments\x20must\x20be\x20last\x20`%s\x27' };
    console['error'](), console['error'](_0x3b6f42['fBBgY'], _0x5d9aba), console['error'](), process['exit'](0x1);
}, Command['prototype']['version'] = function (_0x1c5121, _0x677c40) {
    var _0x3f0a94 = {
            'reGds': '6|4|5|3|2|1|0',
            'YjwLC': 'version',
            'tGJJE': 'output\x20the\x20version\x20number',
            'iQOUA': function (_0x3afde1, _0x22685d) {
                return _0x3afde1 || _0x22685d;
            },
            'YPaoe': '-V,\x20--version',
            'mMfGf': function (_0x2fa3da, _0x16c46d) {
                return _0x2fa3da == _0x16c46d;
            },
            'DtkoC': function (_0x3c2a13, _0x4d724f) {
                return _0x3c2a13 + _0x4d724f;
            }
        }, _0x194811 = _0x3f0a94['reGds']['split']('|'), _0x59d3db = 0x0;
    while (!![]) {
        switch (_0x194811[_0x59d3db++]) {
        case '0':
            return this;
        case '1':
            this['on'](_0x3f0a94['YjwLC'], function () {
                process['stdout']['write'](_0x12d7c3['RzSpj'](_0x1c5121, '\x0a')), process['exit'](0x0);
            });
            continue;
        case '2':
            this['option'](_0x677c40, _0x3f0a94['tGJJE']);
            continue;
        case '3':
            _0x677c40 = _0x3f0a94['iQOUA'](_0x677c40, _0x3f0a94['YPaoe']);
            continue;
        case '4':
            if (_0x3f0a94['mMfGf'](0x0, arguments['length']))
                return this['_version'];
            continue;
        case '5':
            this['_version'] = _0x1c5121;
            continue;
        case '6':
            var _0x12d7c3 = {
                'RzSpj': function (_0x22f72e, _0x17718d) {
                    return _0x3f0a94['DtkoC'](_0x22f72e, _0x17718d);
                }
            };
            continue;
        }
        break;
    }
}, Command['prototype']['description'] = function (_0x1f8e37) {
    var _0x2beed6 = {
        'AnRbM': function (_0x4834dc, _0x388a9b) {
            return _0x4834dc === _0x388a9b;
        }
    };
    if (_0x2beed6['AnRbM'](0x0, arguments['length']))
        return this['_description'];
    return this['_description'] = _0x1f8e37, this;
}, Command['prototype']['alias'] = function (_0x428215) {
    var _0x113bb4 = {
        'sGrin': function (_0x298d04, _0x203ba0) {
            return _0x298d04 == _0x203ba0;
        }
    };
    if (_0x113bb4['sGrin'](0x0, arguments['length']))
        return this['_alias'];
    return this['_alias'] = _0x428215, this;
}, Command['prototype']['usage'] = function (_0x2d2ec6) {
    var _0x31581a = {
            'jGYkF': '3|0|4|5|1|2',
            'DBhUM': function (_0x53aab1, _0x296c54) {
                return _0x53aab1(_0x296c54);
            },
            'hJikx': function (_0x3a4148, _0x444101) {
                return _0x3a4148 + _0x444101;
            },
            'nbVXi': function (_0x4c4074, _0x46b2eb) {
                return _0x4c4074 + _0x46b2eb;
            },
            'fqCTv': '[options]',
            'bDzBC': '\x20[command]',
            'nTRZh': function (_0x3b6da2, _0x543e77) {
                return _0x3b6da2 == _0x543e77;
            }
        }, _0x5c5a13 = _0x31581a['jGYkF']['split']('|'), _0xf86183 = 0x0;
    while (!![]) {
        switch (_0x5c5a13[_0xf86183++]) {
        case '0':
            var _0x4343d7 = this['_args']['map'](function (_0x2e9427) {
                return _0x27e864['GBioI'](humanReadableArgName, _0x2e9427);
            });
            continue;
        case '1':
            this['_usage'] = _0x2d2ec6;
            continue;
        case '2':
            return this;
        case '3':
            var _0x27e864 = {
                'GBioI': function (_0x43075e, _0x278642) {
                    return _0x31581a['DBhUM'](_0x43075e, _0x278642);
                }
            };
            continue;
        case '4':
            var _0x5592b3 = _0x31581a['hJikx'](_0x31581a['nbVXi'](_0x31581a['fqCTv'], this['commands']['length'] ? _0x31581a['bDzBC'] : ''), this['_args']['length'] ? _0x31581a['nbVXi']('\x20', _0x4343d7['join']('\x20')) : '');
            continue;
        case '5':
            if (_0x31581a['nTRZh'](0x0, arguments['length']))
                return this['_usage'] || _0x5592b3;
            continue;
        }
        break;
    }
}, Command['prototype']['name'] = function () {
    return this['_name'];
}, Command['prototype']['largestOptionLength'] = function () {
    return this['options']['reduce'](function (_0x39b910, _0x46581d) {
        return Math['max'](_0x39b910, _0x46581d['flags']['length']);
    }, 0x0);
}, Command['prototype']['optionHelp'] = function () {
    var _0x3231b4 = {
            'vggHi': function (_0x4a66ad, _0x4e296e) {
                return _0x4a66ad + _0x4e296e;
            },
            'DMuXM': function (_0x41d5aa, _0x5b2aa0) {
                return _0x41d5aa + _0x5b2aa0;
            },
            'HSDUC': function (_0x9afc46, _0x13d219, _0x45f622) {
                return _0x9afc46(_0x13d219, _0x45f622);
            },
            'TzhNP': function (_0x106232, _0x323c70) {
                return _0x106232 + _0x323c70;
            },
            'pqULK': '-h,\x20--help',
            'UGWJb': 'output\x20usage\x20information'
        }, _0x2b9ded = this['largestOptionLength']();
    return [_0x3231b4['DMuXM'](_0x3231b4['TzhNP'](_0x3231b4['HSDUC'](pad, _0x3231b4['pqULK'], _0x2b9ded), '\x20\x20'), _0x3231b4['UGWJb'])]['concat'](this['options']['map'](function (_0x54e6a7) {
        return _0x3231b4['vggHi'](_0x3231b4['DMuXM'](_0x3231b4['HSDUC'](pad, _0x54e6a7['flags'], _0x2b9ded), '\x20\x20'), _0x54e6a7['description']);
    }))['join']('\x0a');
}, Command['prototype']['commandHelp'] = function () {
    var _0x1b1322 = {
            'pcVii': '3|0|4|1|2',
            'qneOD': '\x20\x20Commands:',
            'uqGiz': '\x20\x20\x20\x20',
            'ImMZm': function (_0x4c9111, _0x5e3d72) {
                return _0x4c9111(_0x5e3d72);
            },
            'HfciM': function (_0x2465c6, _0x551349) {
                return _0x2465c6 + _0x551349;
            },
            'qcAge': function (_0x13d677, _0xc13ca) {
                return _0x13d677 + _0xc13ca;
            },
            'BblhD': '\x20[options]',
            'tLpME': function (_0x32d377, _0x5ed8f3) {
                return _0x32d377 + _0x5ed8f3;
            },
            'TxHQF': function (_0x4825e4, _0x5004e8) {
                return _0x4825e4 + _0x5004e8;
            },
            'htVFm': function (_0x8f5ab6, _0x3ee222, _0x1a8aba) {
                return _0x8f5ab6(_0x3ee222, _0x1a8aba);
            }
        }, _0xcc42a3 = _0x1b1322['pcVii']['split']('|'), _0x3f5e92 = 0x0;
    while (!![]) {
        switch (_0xcc42a3[_0x3f5e92++]) {
        case '0':
            if (!this['commands']['length'])
                return '';
            continue;
        case '1':
            var _0x3cb89f = _0x26888f['reduce'](function (_0x4901cd, _0x3c498d) {
                return Math['max'](_0x4901cd, _0x3c498d[0x0]['length']);
            }, 0x0);
            continue;
        case '2':
            return [
                '',
                _0x1b1322['qneOD'],
                '',
                _0x26888f['map'](function (_0x40cf27) {
                    var _0x5f55b1 = _0x40cf27[0x1] ? _0x439e5a['FAaMs']('\x20\x20', _0x40cf27[0x1]) : '';
                    return _0x439e5a['LrgtU'](_0x439e5a['LFdrn'](pad, _0x40cf27[0x0], _0x3cb89f), _0x5f55b1);
                })['join']('\x0a')['replace'](/^/gm, _0x1b1322['uqGiz']),
                ''
            ]['join']('\x0a');
        case '3':
            var _0x439e5a = {
                'zonTU': function (_0x242aea, _0x4db70f) {
                    return _0x1b1322['ImMZm'](_0x242aea, _0x4db70f);
                },
                'fghCp': function (_0x2a6d6c, _0x2ee1fa) {
                    return _0x1b1322['HfciM'](_0x2a6d6c, _0x2ee1fa);
                },
                'RzbNY': function (_0x4c2712, _0x11254d) {
                    return _0x1b1322['HfciM'](_0x4c2712, _0x11254d);
                },
                'mjTXY': function (_0x1d0246, _0x3db193) {
                    return _0x1b1322['qcAge'](_0x1d0246, _0x3db193);
                },
                'fpRnM': _0x1b1322['BblhD'],
                'FAaMs': function (_0x67692d, _0x4bd36c) {
                    return _0x1b1322['tLpME'](_0x67692d, _0x4bd36c);
                },
                'LrgtU': function (_0xb3faa4, _0x3e1dbd) {
                    return _0x1b1322['TxHQF'](_0xb3faa4, _0x3e1dbd);
                },
                'LFdrn': function (_0x3fae8c, _0x268c18, _0x1ca19a) {
                    return _0x1b1322['htVFm'](_0x3fae8c, _0x268c18, _0x1ca19a);
                }
            };
            continue;
        case '4':
            var _0x26888f = this['commands']['filter'](function (_0x2e85ad) {
                return !_0x2e85ad['_noHelp'];
            })['map'](function (_0x16e4a2) {
                var _0x4bcd29 = _0x16e4a2['_args']['map'](function (_0x411245) {
                    return _0x439e5a['zonTU'](humanReadableArgName, _0x411245);
                })['join']('\x20');
                return [
                    _0x439e5a['fghCp'](_0x439e5a['RzbNY'](_0x439e5a['mjTXY'](_0x439e5a['mjTXY'](_0x16e4a2['_name'], _0x16e4a2['_alias'] ? _0x439e5a['mjTXY']('|', _0x16e4a2['_alias']) : ''), _0x16e4a2['options']['length'] ? _0x439e5a['fpRnM'] : ''), '\x20'), _0x4bcd29),
                    _0x16e4a2['description']()
                ];
            });
            continue;
        }
        break;
    }
}, Command['prototype']['helpInformation'] = function () {
    var _0x2f19f8 = {
            'GCCQs': '4|2|5|6|7|3|1|8|9|0',
            'PvhdL': function (_0x5895a7, _0x30848b) {
                return _0x5895a7 + _0x30848b;
            },
            'IPVdw': function (_0x252580, _0x43f2e7) {
                return _0x252580 + _0x43f2e7;
            },
            'VWxfD': function (_0x1d6e8a, _0x5268d9) {
                return _0x1d6e8a + _0x5268d9;
            },
            'vTHfB': '\x20\x20Usage:\x20',
            'GRhOI': '\x20\x20Options:',
            'xzrYs': '\x20\x20\x20\x20'
        }, _0x39ece8 = _0x2f19f8['GCCQs']['split']('|'), _0x28556f = 0x0;
    while (!![]) {
        switch (_0x39ece8[_0x28556f++]) {
        case '0':
            return _0x279ba9['concat'](_0x1c892b)['concat'](_0x21c39c)['concat'](_0x4ca643)['join']('\x0a');
        case '1':
            var _0x367070 = this['commandHelp']();
            continue;
        case '2':
            this['_description'] && (_0x21c39c = [
                _0x2f19f8['PvhdL']('\x20\x20', this['_description']),
                ''
            ]);
            continue;
        case '3':
            var _0x1c892b = [];
            continue;
        case '4':
            var _0x21c39c = [];
            continue;
        case '5':
            var _0x1b43c6 = this['_name'];
            continue;
        case '6':
            this['_alias'] && (_0x1b43c6 = _0x2f19f8['PvhdL'](_0x2f19f8['IPVdw'](_0x1b43c6, '|'), this['_alias']));
            continue;
        case '7':
            var _0x279ba9 = [
                '',
                _0x2f19f8['IPVdw'](_0x2f19f8['IPVdw'](_0x2f19f8['VWxfD'](_0x2f19f8['vTHfB'], _0x1b43c6), '\x20'), this['usage']()),
                ''
            ];
            continue;
        case '8':
            if (_0x367070)
                _0x1c892b = [_0x367070];
            continue;
        case '9':
            var _0x4ca643 = [
                _0x2f19f8['GRhOI'],
                '',
                _0x2f19f8['VWxfD']('', this['optionHelp']()['replace'](/^/gm, _0x2f19f8['xzrYs'])),
                '',
                ''
            ];
            continue;
        }
        break;
    }
}, Command['prototype']['outputHelp'] = function (_0x12485a) {
    var _0x125882 = {
        'Qnkrd': function (_0x459cbb, _0x1ae658) {
            return _0x459cbb(_0x1ae658);
        },
        'yRBeu': '--help'
    };
    !_0x12485a && (_0x12485a = function (_0x40454d) {
        return _0x40454d;
    }), process['stdout']['write'](_0x125882['Qnkrd'](_0x12485a, this['helpInformation']())), this['emit'](_0x125882['yRBeu']);
}, Command['prototype']['help'] = function (_0xe7506) {
    this['outputHelp'](_0xe7506), process['exit']();
};
function camelcase(_0x398906) {
    var _0x23e872 = {
        'JiAeA': function (_0x58ea35, _0x357119) {
            return _0x58ea35 + _0x357119;
        },
        'qzobp': function (_0x15e97c, _0x326e1f) {
            return _0x15e97c + _0x326e1f;
        }
    };
    return _0x398906['split']('-')['reduce'](function (_0x16213e, _0x278cd6) {
        return _0x23e872['JiAeA'](_0x23e872['qzobp'](_0x16213e, _0x278cd6[0x0]['toUpperCase']()), _0x278cd6['slice'](0x1));
    });
}
function pad(_0x26061a, _0x4d9d5e) {
    var _0x392d20 = {
            'vcfXk': function (_0x384b0c, _0xaa2e53) {
                return _0x384b0c - _0xaa2e53;
            },
            'fJbsD': function (_0x34dd68, _0x18a2bb) {
                return _0x34dd68 + _0x18a2bb;
            },
            'rBgkN': function (_0x363091, _0x247fcc) {
                return _0x363091(_0x247fcc);
            }
        }, _0x3b6b8e = Math['max'](0x0, _0x392d20['vcfXk'](_0x4d9d5e, _0x26061a['length']));
    return _0x392d20['fJbsD'](_0x26061a, _0x392d20['rBgkN'](Array, _0x392d20['fJbsD'](_0x3b6b8e, 0x1))['join']('\x20'));
}
function outputHelpIfNecessary(_0x5eb65c, _0x13ffcc) {
    var _0x218675 = {
        'aRgrB': function (_0x148bce, _0x2dfb95) {
            return _0x148bce < _0x2dfb95;
        },
        'CZkGP': function (_0x549f0c, _0x26a31a) {
            return _0x549f0c == _0x26a31a;
        },
        'TpCbz': '--help',
        'ZXKsV': function (_0x3e0003, _0x35bfa5) {
            return _0x3e0003 == _0x35bfa5;
        }
    };
    _0x13ffcc = _0x13ffcc || [];
    for (var _0x251187 = 0x0; _0x218675['aRgrB'](_0x251187, _0x13ffcc['length']); _0x251187++) {
        (_0x218675['CZkGP'](_0x13ffcc[_0x251187], _0x218675['TpCbz']) || _0x218675['ZXKsV'](_0x13ffcc[_0x251187], '-h')) && (_0x5eb65c['outputHelp'](), process['exit'](0x0));
    }
}
function humanReadableArgName(_0x33deec) {
    var _0x45c404 = {
            'VJVCU': function (_0x2d8a4b, _0x21d978) {
                return _0x2d8a4b + _0x21d978;
            },
            'SOuRi': function (_0x4d44eb, _0x5667b7) {
                return _0x4d44eb === _0x5667b7;
            },
            'VGKWe': '...'
        }, _0xf8e4ff = _0x45c404['VJVCU'](_0x33deec['name'], _0x45c404['SOuRi'](_0x33deec['variadic'], !![]) ? _0x45c404['VGKWe'] : '');
    return _0x33deec['required'] ? _0x45c404['VJVCU'](_0x45c404['VJVCU']('<', _0xf8e4ff), '>') : _0x45c404['VJVCU'](_0x45c404['VJVCU']('[', _0xf8e4ff), ']');
}
function exists(_0x278568) {
    try {
        if (fs['statSync'](_0x278568)['isFile']())
            return !![];
    } catch (_0x3c1594) {
        return ![];
    }
}
