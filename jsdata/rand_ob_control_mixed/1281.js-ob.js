const CommandRegistry = require('../src/command-registry'), _ = require('underscore-plus');
describe('CommandRegistry', () => {
    const _0x128b39 = {
        'qDcxW': '5|10|0|6|1|9|8|2|4|3|7',
        'nWLKV': 'div',
        'oOlbH': 'child',
        'SqtEA': '#jasmine-content',
        'nUndr': 'parent',
        'cUfFr': 'grandchild',
        'jpghJ': '3|4|1|5|0|2',
        'EjkGK': function (_0x35b51a, _0x276ed0) {
            return _0x35b51a(_0x276ed0);
        },
        'IojXK': 'command',
        'oryJS': '.grandchild',
        'ZLvwJ': function (_0xfaea54, _0x20bc68) {
            return _0xfaea54(_0x20bc68);
        },
        'gpcAI': '.child',
        'BBGpb': '.parent',
        'miEWz': 'child-inline',
        'pFvAa': 'foo',
        'WXiUv': 'bar',
        'NvMUO': '.foo.bar',
        'WmAAh': '.foo',
        'ejxDq': '.bar',
        'VSeRi': function (_0x474a6c, _0x5d310b) {
            return _0x474a6c(_0x5d310b);
        },
        'wvHsX': 'abortKeyBinding',
        'COFKJ': function (_0x328486, _0x1ad7f9) {
            return _0x328486(_0x1ad7f9);
        },
        'VKlsh': 'testing',
        'HjmTe': function (_0x703ecd, _0x575616) {
            return _0x703ecd(_0x575616);
        },
        'Solag': function (_0x2f0732, _0x366bd2) {
            return _0x2f0732(_0x366bd2);
        },
        'NqpAm': function (_0x2f9119, _0x27ba43) {
            return _0x2f9119(_0x27ba43);
        },
        'xtZhG': 'onWillDispatch',
        'UdrZM': 'listener',
        'NzvGv': function (_0x38fcbf, _0x47f08f) {
            return _0x38fcbf(_0x47f08f);
        },
        'kRTuO': 'onDidDispatch',
        'KZFhw': function (_0x295cbd, _0x430e40) {
            return _0x295cbd === _0x430e40;
        },
        'MDHjT': function (_0x11139b, _0x259bfd) {
            return _0x11139b(_0x259bfd);
        },
        'jbnCv': function (_0x24ea76, _0xe205cf) {
            return _0x24ea76(_0xe205cf);
        },
        'NJttK': 'child2',
        'ZANyg': 'child1',
        'MNRor': 'child-1',
        'zRpvC': function (_0x46c729, _0x4951b3, _0x2dcf08) {
            return _0x46c729(_0x4951b3, _0x2dcf08);
        },
        'xqWdu': 'stopPropagation',
        'YZsEn': function (_0x29a80b, _0x824ba1) {
            return _0x29a80b(_0x824ba1);
        },
        'WKhbd': 'child-2',
        'qkxot': 'stopImmediatePropagation',
        'GtAmX': 'preventDefault',
        'DBgeq': function (_0x3bbe6f, _0x4182d7) {
            return _0x3bbe6f(_0x4182d7);
        },
        'LzrSd': 'command-1',
        'iocCZ': 'command-2',
        'Xbnay': function (_0x2c733b, _0x562ded) {
            return _0x2c733b(_0x562ded);
        },
        'QSRig': 'invokes\x20callbacks\x20with\x20selectors\x20matching\x20the\x20target',
        'BgvvU': 'invokes\x20callbacks\x20with\x20selectors\x20matching\x20ancestors\x20of\x20the\x20target',
        'oyOvZ': function (_0x29b8a5, _0x5c2d17, _0x271fba) {
            return _0x29b8a5(_0x5c2d17, _0x271fba);
        },
        'BUWVg': 'invokes\x20inline\x20listeners\x20prior\x20to\x20listeners\x20applied\x20via\x20selectors',
        'fsazl': function (_0x2f1ce4, _0x1e59ef, _0x25164) {
            return _0x2f1ce4(_0x1e59ef, _0x25164);
        },
        'QhxHJ': 'orders\x20multiple\x20matching\x20listeners\x20for\x20an\x20element\x20by\x20selector\x20specificity',
        'csTwQ': function (_0xe0ab15, _0x254be7, _0x277620) {
            return _0xe0ab15(_0x254be7, _0x277620);
        },
        'eshOB': 'orders\x20inline\x20listeners\x20by\x20reverse\x20registration\x20order',
        'gsFny': 'stops\x20bubbling\x20through\x20ancestors\x20when\x20.stopPropagation()\x20is\x20called\x20on\x20the\x20event',
        'rcPkc': function (_0x4156af, _0x313dc9, _0xfa3b52) {
            return _0x4156af(_0x313dc9, _0xfa3b52);
        },
        'cphZG': 'stops\x20invoking\x20callbacks\x20when\x20.stopImmediatePropagation()\x20is\x20called\x20on\x20the\x20event',
        'XFere': 'forwards\x20.preventDefault()\x20calls\x20from\x20the\x20synthetic\x20event\x20to\x20the\x20original',
        'aRKNn': 'forwards\x20.abortKeyBinding()\x20calls\x20from\x20the\x20synthetic\x20event\x20to\x20the\x20original',
        'WaXis': 'copies\x20non-standard\x20properties\x20from\x20the\x20original\x20event\x20to\x20the\x20synthetic\x20event',
        'EZbeU': function (_0x2478ee, _0x172f93, _0x5cbd24) {
            return _0x2478ee(_0x172f93, _0x5cbd24);
        },
        'PGJyL': 'allows\x20listeners\x20to\x20be\x20removed\x20via\x20a\x20disposable\x20returned\x20by\x20::add',
        'qkfwX': 'allows\x20multiple\x20commands\x20to\x20be\x20registered\x20under\x20one\x20selector\x20when\x20called\x20with\x20an\x20object',
        'EMhGa': function (_0x2a0812, _0x2cc83e, _0x181743) {
            return _0x2a0812(_0x2cc83e, _0x181743);
        },
        'vdODr': 'invokes\x20callbacks\x20registered\x20with\x20::onWillDispatch\x20and\x20::onDidDispatch',
        'BIlXD': 'Cannot\x20register\x20a\x20command\x20with\x20a\x20null\x20listener.',
        'cAaRn': 'foo:bar',
        'NpzKY': '.selector',
        'zNLYf': 'a\x20listener\x20without\x20a\x20didDispatch\x20callback',
        'GeSoZ': 'this\x20should\x20throw\x20an\x20error',
        'Ifrfn': 'Listener\x20must\x20be\x20a\x20callback\x20function\x20or\x20an\x20object\x20with\x20a\x20didDispatch\x20method.',
        'rpHPt': function (_0x569ace, _0x4f0458, _0x579337) {
            return _0x569ace(_0x4f0458, _0x579337);
        },
        'frafB': 'throws\x20an\x20error\x20when\x20called\x20with\x20an\x20invalid\x20selector',
        'pEYua': function (_0x24e4ce, _0x260f6f, _0x55c6f5) {
            return _0x24e4ce(_0x260f6f, _0x55c6f5);
        },
        'hymsy': 'throws\x20an\x20error\x20when\x20called\x20with\x20a\x20null\x20callback\x20and\x20selector\x20target',
        'dkASm': 'throws\x20an\x20error\x20when\x20called\x20with\x20a\x20null\x20callback\x20and\x20object\x20target',
        'OQvsO': 'throws\x20an\x20error\x20when\x20called\x20with\x20an\x20object\x20listener\x20without\x20a\x20didDispatch\x20method',
        'gXVlx': 'namespace:command-1',
        'rLNUO': 'namespace:command-2',
        'dylyl': 'namespace:command-3',
        'sEnyV': '.grandchild.no-match',
        'lliFA': 'namespace:command-4',
        'iNjuu': 'namespace:inline-command-1',
        'JoWZD': 'namespace:inline-command-2',
        'BlsMf': 'Namespace:\x20Inline\x20Command\x201',
        'FufHo': 'Namespace:\x20Command\x203',
        'cWwoX': 'Namespace:\x20Inline\x20Command\x202',
        'ShfNj': 'Namespace:\x20Command\x202',
        'oIPKF': 'Namespace:\x20Command\x201',
        'Ejdpz': 'Custom\x20Command\x202',
        'hljkP': 'other',
        'tfsED': 'data',
        'nBRxE': 'some:other:incorrect:commandname',
        'enZHQ': 'Custom\x20Command\x203',
        'zhSRj': 'returns\x20command\x20descriptors\x20that\x20can\x20be\x20invoked\x20on\x20the\x20target\x20or\x20its\x20ancestors',
        'dCLYY': 'returns\x20command\x20descriptors\x20with\x20arbitrary\x20metadata\x20if\x20set\x20in\x20a\x20listener\x20object',
        'QOMKp': function (_0x502dfb, _0x556992, _0x208d58) {
            return _0x502dfb(_0x556992, _0x208d58);
        },
        'yheqF': 'returns\x20command\x20descriptors\x20with\x20arbitrary\x20metadata\x20if\x20set\x20on\x20a\x20listener\x20function',
        'aSsLs': '1|2|5|0|4|3',
        'EiJuh': function (_0x49d1e6, _0x2d56da) {
            return _0x49d1e6(_0x2d56da);
        },
        'nWKFQ': 'Promise',
        'HgfMl': 'bogus',
        'vVqaL': function (_0x3910bc, _0x4952a8) {
            return _0x3910bc(_0x4952a8);
        },
        'uqYRI': function (_0x2474af, _0xca8560) {
            return _0x2474af(_0xca8560);
        },
        'MECqs': 'simulates\x20invocation\x20of\x20the\x20given\x20command\x20',
        'OiIFW': 'returns\x20a\x20promise\x20if\x20any\x20listeners\x20matched\x20the\x20command',
        'OfNQF': 'returns\x20a\x20promise\x20that\x20resolves\x20when\x20the\x20listeners\x20resolve',
        'aajEJ': function (_0x4ce29c, _0x902540, _0x4f20ee) {
            return _0x4ce29c(_0x902540, _0x4f20ee);
        },
        'rqQHO': 'returns\x20a\x20promise\x20that\x20rejects\x20when\x20a\x20listener\x20is\x20rejected',
        'EGcmQ': function (_0xf1bd74, _0x1c341e) {
            return _0xf1bd74(_0x1c341e);
        },
        'bvqKO': 'command-callback',
        'TyaZd': function (_0x1fda78, _0xb4e250) {
            return _0x1fda78(_0xb4e250);
        },
        'ReUDa': function (_0x172ff6, _0x54e3db) {
            return _0x172ff6(_0x54e3db);
        },
        'EUUPx': function (_0x275ee4, _0x15a2b0) {
            return _0x275ee4(_0x15a2b0);
        },
        'nAdNB': 'when\x20a\x20command\x20event\x20is\x20dispatched\x20on\x20an\x20element',
        'HXScx': function (_0x2be58c, _0x558411, _0x3e7719) {
            return _0x2be58c(_0x558411, _0x3e7719);
        },
        'oOHuy': '::add(selector,\x20commandName,\x20callback)',
        'kMuRx': '::findCommands({target})',
        'knJxj': '::dispatch(target,\x20commandName)',
        'FcqsB': function (_0x22df16, _0x2e6de7, _0x1d4543) {
            return _0x22df16(_0x2e6de7, _0x1d4543);
        },
        'hiaaV': '::getSnapshot\x20and\x20::restoreSnapshot',
        'BEZNJ': '::attach(rootNode)'
    };
    let _0x2e630d, _0x4cc009, _0x2f96fc, _0x29172a;
    _0x128b39['EUUPx'](beforeEach, () => {
        const _0x34ecbb = _0x128b39['qDcxW']['split']('|');
        let _0x4194a0 = 0x0;
        while (!![]) {
            switch (_0x34ecbb[_0x4194a0++]) {
            case '0':
                _0x29172a = document['createElement'](_0x128b39['nWLKV']);
                continue;
            case '1':
                _0x2f96fc['classList']['add'](_0x128b39['oOlbH']);
                continue;
            case '2':
                _0x4cc009['appendChild'](_0x2f96fc);
                continue;
            case '3':
                _0x2e630d = new CommandRegistry();
                continue;
            case '4':
                document['querySelector'](_0x128b39['SqtEA'])['appendChild'](_0x4cc009);
                continue;
            case '5':
                _0x4cc009 = document['createElement'](_0x128b39['nWLKV']);
                continue;
            case '6':
                _0x4cc009['classList']['add'](_0x128b39['nUndr']);
                continue;
            case '7':
                _0x2e630d['attach'](_0x4cc009);
                continue;
            case '8':
                _0x2f96fc['appendChild'](_0x29172a);
                continue;
            case '9':
                _0x29172a['classList']['add'](_0x128b39['cUfFr']);
                continue;
            case '10':
                _0x2f96fc = document['createElement'](_0x128b39['nWLKV']);
                continue;
            }
            break;
        }
    }), _0x128b39['EUUPx'](afterEach, () => _0x2e630d['destroy']()), _0x128b39['aajEJ'](describe, _0x128b39['nAdNB'], () => {
        const _0x4978d0 = {
            'IVqQk': function (_0xccf3c2, _0x416e06) {
                return _0x128b39['NzvGv'](_0xccf3c2, _0x416e06);
            },
            'mfrBP': _0x128b39['oOlbH'],
            'IRVQy': function (_0x236fe6, _0x4c358c) {
                return _0x128b39['MDHjT'](_0x236fe6, _0x4c358c);
            },
            'ZYdcr': function (_0x39fb42, _0x319715) {
                return _0x128b39['MDHjT'](_0x39fb42, _0x319715);
            },
            'pUOIi': _0x128b39['nUndr'],
            'qELuf': _0x128b39['gpcAI'],
            'vgmgL': _0x128b39['IojXK'],
            'APFLo': _0x128b39['BBGpb'],
            'rrHLz': function (_0x2ff949, _0x3108fd) {
                return _0x128b39['jbnCv'](_0x2ff949, _0x3108fd);
            },
            'LWOVu': _0x128b39['NJttK'],
            'hjmqx': _0x128b39['ZANyg'],
            'XsQUn': _0x128b39['MNRor'],
            'vuxJf': function (_0x5ba211, _0x231a27, _0x478e79) {
                return _0x128b39['zRpvC'](_0x5ba211, _0x231a27, _0x478e79);
            },
            'kaMpE': _0x128b39['xqWdu'],
            'ATcNy': function (_0x2065ab, _0x22b9b7) {
                return _0x128b39['YZsEn'](_0x2065ab, _0x22b9b7);
            },
            'qSQRg': _0x128b39['WKhbd'],
            'snjuP': function (_0x2cc4ec, _0x57e44b) {
                return _0x128b39['YZsEn'](_0x2cc4ec, _0x57e44b);
            },
            'fktpj': _0x128b39['qkxot'],
            'lRxnj': _0x128b39['GtAmX'],
            'OCDSC': function (_0x51ba2e, _0x5b587f) {
                return _0x128b39['DBgeq'](_0x51ba2e, _0x5b587f);
            },
            'qOqTS': _0x128b39['LzrSd'],
            'JOPqM': _0x128b39['iocCZ'],
            'qbAkD': function (_0x52dba4, _0xea2639) {
                return _0x128b39['Xbnay'](_0x52dba4, _0xea2639);
            },
            'uSFJB': function (_0x45bc09, _0x360e44) {
                return _0x128b39['Xbnay'](_0x45bc09, _0x360e44);
            }
        };
        _0x128b39['zRpvC'](it, _0x128b39['QSRig'], () => {
            const _0x3c327c = {
                'jNEGK': _0x128b39['jpghJ'],
                'ONvKG': function (_0x9752b1, _0x55dc7b) {
                    return _0x128b39['EjkGK'](_0x9752b1, _0x55dc7b);
                },
                'hfgHJ': function (_0x13c83c, _0x230533) {
                    return _0x128b39['EjkGK'](_0x13c83c, _0x230533);
                },
                'vgUGL': _0x128b39['IojXK']
            };
            let _0x59f627 = ![];
            _0x2e630d['add'](_0x128b39['oryJS'], _0x128b39['IojXK'], function (_0x11fdad) {
                const _0x5b9e5a = _0x3c327c['jNEGK']['split']('|');
                let _0xcee251 = 0x0;
                while (!![]) {
                    switch (_0x5b9e5a[_0xcee251++]) {
                    case '0':
                        _0x3c327c['ONvKG'](expect, _0x11fdad['currentTarget'])['toBe'](_0x29172a);
                        continue;
                    case '1':
                        _0x3c327c['ONvKG'](expect, _0x11fdad['eventPhase'])['toBe'](Event['BUBBLING_PHASE']);
                        continue;
                    case '2':
                        _0x59f627 = !![];
                        continue;
                    case '3':
                        _0x3c327c['ONvKG'](expect, this)['toBe'](_0x29172a);
                        continue;
                    case '4':
                        _0x3c327c['hfgHJ'](expect, _0x11fdad['type'])['toBe'](_0x3c327c['vgUGL']);
                        continue;
                    case '5':
                        _0x3c327c['hfgHJ'](expect, _0x11fdad['target'])['toBe'](_0x29172a);
                        continue;
                    }
                    break;
                }
            }), _0x29172a['dispatchEvent'](new CustomEvent(_0x128b39['IojXK'], { 'bubbles': !![] })), _0x128b39['ZLvwJ'](expect, _0x59f627)['toBe'](!![]);
        }), _0x128b39['zRpvC'](it, _0x128b39['BgvvU'], () => {
            const _0x27d235 = {
                    'Favqv': function (_0x6c17c6, _0x11ebf0) {
                        return _0x4978d0['IVqQk'](_0x6c17c6, _0x11ebf0);
                    },
                    'NConz': _0x4978d0['mfrBP'],
                    'brmBD': function (_0x51b92e, _0x435728) {
                        return _0x4978d0['IVqQk'](_0x51b92e, _0x435728);
                    },
                    'VTTvO': function (_0x51e0ea, _0x95a853) {
                        return _0x4978d0['IRVQy'](_0x51e0ea, _0x95a853);
                    },
                    'dHTAl': function (_0x83ef51, _0x3e0b1d) {
                        return _0x4978d0['ZYdcr'](_0x83ef51, _0x3e0b1d);
                    },
                    'QWFqI': _0x4978d0['pUOIi']
                }, _0xcce5ae = [];
            _0x2e630d['add'](_0x4978d0['qELuf'], _0x4978d0['vgmgL'], function (_0xb1e2b) {
                _0x27d235['Favqv'](expect, this)['toBe'](_0x2f96fc), _0x27d235['Favqv'](expect, _0xb1e2b['target'])['toBe'](_0x29172a), _0x27d235['Favqv'](expect, _0xb1e2b['currentTarget'])['toBe'](_0x2f96fc), _0xcce5ae['push'](_0x27d235['NConz']);
            }), _0x2e630d['add'](_0x4978d0['APFLo'], _0x4978d0['vgmgL'], function (_0x364d5f) {
                _0x27d235['brmBD'](expect, this)['toBe'](_0x4cc009), _0x27d235['VTTvO'](expect, _0x364d5f['target'])['toBe'](_0x29172a), _0x27d235['dHTAl'](expect, _0x364d5f['currentTarget'])['toBe'](_0x4cc009), _0xcce5ae['push'](_0x27d235['QWFqI']);
            }), _0x29172a['dispatchEvent'](new CustomEvent(_0x4978d0['vgmgL'], { 'bubbles': !![] })), _0x4978d0['ZYdcr'](expect, _0xcce5ae)['toEqual']([
                _0x4978d0['mfrBP'],
                _0x4978d0['pUOIi']
            ]);
        }), _0x128b39['oyOvZ'](it, _0x128b39['BUWVg'], () => {
            const _0x10ced5 = [];
            _0x2e630d['add'](_0x128b39['oryJS'], _0x128b39['IojXK'], () => _0x10ced5['push']('grandchild')), _0x2e630d['add'](_0x2f96fc, _0x128b39['IojXK'], () => _0x10ced5['push']('child-inline')), _0x2e630d['add'](_0x128b39['gpcAI'], _0x128b39['IojXK'], () => _0x10ced5['push']('child')), _0x2e630d['add'](_0x128b39['BBGpb'], _0x128b39['IojXK'], () => _0x10ced5['push']('parent')), _0x29172a['dispatchEvent'](new CustomEvent(_0x128b39['IojXK'], { 'bubbles': !![] })), _0x128b39['ZLvwJ'](expect, _0x10ced5)['toEqual']([
                _0x128b39['cUfFr'],
                _0x128b39['miEWz'],
                _0x128b39['oOlbH'],
                _0x128b39['nUndr']
            ]);
        }), _0x128b39['fsazl'](it, _0x128b39['QhxHJ'], () => {
            _0x2f96fc['classList']['add'](_0x128b39['pFvAa'], _0x128b39['WXiUv']);
            const _0x40a560 = [];
            _0x2e630d['add'](_0x128b39['NvMUO'], _0x128b39['IojXK'], () => _0x40a560['push']('.foo.bar')), _0x2e630d['add'](_0x128b39['WmAAh'], _0x128b39['IojXK'], () => _0x40a560['push']('.foo')), _0x2e630d['add'](_0x128b39['ejxDq'], _0x128b39['IojXK'], () => _0x40a560['push']('.bar')), _0x29172a['dispatchEvent'](new CustomEvent(_0x128b39['IojXK'], { 'bubbles': !![] })), _0x128b39['VSeRi'](expect, _0x40a560)['toEqual']([
                _0x128b39['NvMUO'],
                _0x128b39['ejxDq'],
                _0x128b39['WmAAh']
            ]);
        }), _0x128b39['csTwQ'](it, _0x128b39['eshOB'], () => {
            const _0x32d595 = [];
            _0x2e630d['add'](_0x2f96fc, _0x4978d0['vgmgL'], () => _0x32d595['push']('child1')), _0x2e630d['add'](_0x2f96fc, _0x4978d0['vgmgL'], () => _0x32d595['push']('child2')), _0x2f96fc['dispatchEvent'](new CustomEvent(_0x4978d0['vgmgL'], { 'bubbles': !![] })), _0x4978d0['rrHLz'](expect, _0x32d595)['toEqual']([
                _0x4978d0['LWOVu'],
                _0x4978d0['hjmqx']
            ]);
        }), _0x128b39['csTwQ'](it, _0x128b39['gsFny'], () => {
            const _0x3f39b5 = [];
            _0x2e630d['add'](_0x4978d0['APFLo'], _0x4978d0['vgmgL'], () => _0x3f39b5['push']('parent')), _0x2e630d['add'](_0x4978d0['qELuf'], _0x4978d0['vgmgL'], () => _0x3f39b5['push']('child-2')), _0x2e630d['add'](_0x4978d0['qELuf'], _0x4978d0['vgmgL'], _0x63ff07 => {
                _0x3f39b5['push'](_0x4978d0['XsQUn']), _0x63ff07['stopPropagation']();
            });
            const _0xc41030 = new CustomEvent(_0x4978d0['vgmgL'], { 'bubbles': !![] });
            _0x4978d0['vuxJf'](spyOn, _0xc41030, _0x4978d0['kaMpE']), _0x29172a['dispatchEvent'](_0xc41030), _0x4978d0['ATcNy'](expect, _0x3f39b5)['toEqual']([
                _0x4978d0['XsQUn'],
                _0x4978d0['qSQRg']
            ]), _0x4978d0['snjuP'](expect, _0xc41030['stopPropagation'])['toHaveBeenCalled']();
        }), _0x128b39['rcPkc'](it, _0x128b39['cphZG'], () => {
            const _0x5f56d4 = { 'uRIzS': _0x4978d0['XsQUn'] }, _0x12c613 = [];
            _0x2e630d['add'](_0x4978d0['APFLo'], _0x4978d0['vgmgL'], () => _0x12c613['push']('parent')), _0x2e630d['add'](_0x4978d0['qELuf'], _0x4978d0['vgmgL'], () => _0x12c613['push']('child-2')), _0x2e630d['add'](_0x4978d0['qELuf'], _0x4978d0['vgmgL'], _0x576c57 => {
                _0x12c613['push'](_0x5f56d4['uRIzS']), _0x576c57['stopImmediatePropagation']();
            });
            const _0x261cd5 = new CustomEvent(_0x4978d0['vgmgL'], { 'bubbles': !![] });
            _0x4978d0['vuxJf'](spyOn, _0x261cd5, _0x4978d0['fktpj']), _0x29172a['dispatchEvent'](_0x261cd5), _0x4978d0['snjuP'](expect, _0x12c613)['toEqual']([_0x4978d0['XsQUn']]), _0x4978d0['snjuP'](expect, _0x261cd5['stopImmediatePropagation'])['toHaveBeenCalled']();
        }), _0x128b39['rcPkc'](it, _0x128b39['XFere'], () => {
            _0x2e630d['add'](_0x4978d0['qELuf'], _0x4978d0['vgmgL'], _0x4d46be => _0x4d46be['preventDefault']());
            const _0x27dcc6 = new CustomEvent(_0x4978d0['vgmgL'], { 'bubbles': !![] });
            _0x4978d0['vuxJf'](spyOn, _0x27dcc6, _0x4978d0['lRxnj']), _0x29172a['dispatchEvent'](_0x27dcc6), _0x4978d0['OCDSC'](expect, _0x27dcc6['preventDefault'])['toHaveBeenCalled']();
        }), _0x128b39['rcPkc'](it, _0x128b39['aRKNn'], () => {
            _0x2e630d['add'](_0x128b39['gpcAI'], _0x128b39['IojXK'], _0x3cf897 => _0x3cf897['abortKeyBinding']());
            const _0x50f91b = new CustomEvent(_0x128b39['IojXK'], { 'bubbles': !![] });
            _0x50f91b['abortKeyBinding'] = jasmine['createSpy'](_0x128b39['wvHsX']), _0x29172a['dispatchEvent'](_0x50f91b), _0x128b39['COFKJ'](expect, _0x50f91b['abortKeyBinding'])['toHaveBeenCalled']();
        }), _0x128b39['rcPkc'](it, _0x128b39['WaXis'], () => {
            let _0x1eecf5 = null;
            _0x2e630d['add'](_0x128b39['gpcAI'], _0x128b39['IojXK'], _0x4a3fd3 => _0x1eecf5 = _0x4a3fd3);
            const _0x2973a7 = new CustomEvent(_0x128b39['IojXK'], { 'bubbles': !![] });
            _0x2973a7['nonStandardProperty'] = _0x128b39['VKlsh'], _0x29172a['dispatchEvent'](_0x2973a7), _0x128b39['HjmTe'](expect, _0x1eecf5['nonStandardProperty'])['toBe'](_0x128b39['VKlsh']);
        }), _0x128b39['EZbeU'](it, _0x128b39['PGJyL'], () => {
            let _0x19303f = [];
            const _0x5db6b9 = _0x2e630d['add'](_0x128b39['BBGpb'], _0x128b39['IojXK'], () => _0x19303f['push']('parent')), _0x26a3ec = _0x2e630d['add'](_0x128b39['gpcAI'], _0x128b39['IojXK'], () => _0x19303f['push']('child'));
            _0x5db6b9['dispose'](), _0x29172a['dispatchEvent'](new CustomEvent(_0x128b39['IojXK'], { 'bubbles': !![] })), _0x128b39['Solag'](expect, _0x19303f)['toEqual']([_0x128b39['oOlbH']]), _0x19303f = [], _0x26a3ec['dispose'](), _0x29172a['dispatchEvent'](new CustomEvent(_0x128b39['IojXK'], { 'bubbles': !![] })), _0x128b39['NqpAm'](expect, _0x19303f)['toEqual']([]);
        }), _0x128b39['EZbeU'](it, _0x128b39['qkfwX'], () => {
            const _0x517038 = {
                'GihzV': _0x4978d0['qOqTS'],
                'SSlym': _0x4978d0['JOPqM']
            };
            let _0x5264b5 = [];
            const _0x4d8c98 = _0x2e630d['add'](_0x4978d0['qELuf'], {
                'command-1'() {
                    _0x5264b5['push'](_0x517038['GihzV']);
                },
                'command-2'() {
                    _0x5264b5['push'](_0x517038['SSlym']);
                }
            });
            _0x29172a['dispatchEvent'](new CustomEvent(_0x4978d0['qOqTS'], { 'bubbles': !![] })), _0x29172a['dispatchEvent'](new CustomEvent(_0x4978d0['JOPqM'], { 'bubbles': !![] })), _0x4978d0['qbAkD'](expect, _0x5264b5)['toEqual']([
                _0x4978d0['qOqTS'],
                _0x4978d0['JOPqM']
            ]), _0x5264b5 = [], _0x4d8c98['dispose'](), _0x29172a['dispatchEvent'](new CustomEvent(_0x4978d0['qOqTS'], { 'bubbles': !![] })), _0x29172a['dispatchEvent'](new CustomEvent(_0x4978d0['JOPqM'], { 'bubbles': !![] })), _0x4978d0['uSFJB'](expect, _0x5264b5)['toEqual']([]);
        }), _0x128b39['EMhGa'](it, _0x128b39['vdODr'], () => {
            const _0x3efbe = [];
            _0x2e630d['onDidDispatch'](_0x172e82 => _0x3efbe['push']([
                'onDidDispatch',
                _0x172e82
            ])), _0x2e630d['add'](_0x128b39['oryJS'], _0x128b39['IojXK'], _0x1cfdc2 => _0x3efbe['push']([
                'listener',
                _0x1cfdc2
            ])), _0x2e630d['onWillDispatch'](_0x3e4f7c => _0x3efbe['push']([
                'onWillDispatch',
                _0x3e4f7c
            ])), _0x29172a['dispatchEvent'](new CustomEvent(_0x128b39['IojXK'], { 'bubbles': !![] })), _0x128b39['NqpAm'](expect, _0x3efbe[0x0][0x0])['toBe'](_0x128b39['xtZhG']), _0x128b39['NqpAm'](expect, _0x3efbe[0x1][0x0])['toBe'](_0x128b39['UdrZM']), _0x128b39['NzvGv'](expect, _0x3efbe[0x2][0x0])['toBe'](_0x128b39['kRTuO']), _0x128b39['NzvGv'](expect, _0x128b39['KZFhw'](_0x3efbe[0x0][0x1], _0x3efbe[0x1][0x1]) && _0x128b39['KZFhw'](_0x3efbe[0x1][0x1], _0x3efbe[0x2][0x1]))['toBe'](!![]), _0x128b39['NzvGv'](expect, _0x3efbe[0x0][0x1]['constructor'])['toBe'](CustomEvent), _0x128b39['NzvGv'](expect, _0x3efbe[0x0][0x1]['target'])['toBe'](_0x29172a);
        });
    }), _0x128b39['HXScx'](describe, _0x128b39['oOHuy'], () => {
        const _0x1da275 = {
            'QDUdo': _0x128b39['cAaRn'],
            'cUjhP': function (_0x4ae81f, _0x3f84a5) {
                return _0x128b39['Xbnay'](_0x4ae81f, _0x3f84a5);
            },
            'WhxdS': _0x128b39['NpzKY'],
            'DBZuT': _0x128b39['BIlXD'],
            'mEQcx': _0x128b39['zNLYf'],
            'sJfLt': _0x128b39['GeSoZ'],
            'mbIsc': _0x128b39['Ifrfn']
        };
        _0x128b39['rpHPt'](it, _0x128b39['frafB'], () => {
            const _0x83c20f = '<>';
            let _0x40a518 = null;
            try {
                _0x2e630d['add'](_0x83c20f, _0x1da275['QDUdo'], () => {
                });
            } catch (_0x46a111) {
                _0x40a518 = _0x46a111;
            }
            _0x1da275['cUjhP'](expect, _0x40a518['message'])['toContain'](_0x83c20f);
        }), _0x128b39['pEYua'](it, _0x128b39['hymsy'], () => {
            const _0x558773 = {
                    'yRTXx': _0x1da275['WhxdS'],
                    'ranxu': _0x1da275['QDUdo']
                }, _0x254473 = null;
            _0x1da275['cUjhP'](expect, () => {
                _0x2e630d['add'](_0x558773['yRTXx'], _0x558773['ranxu'], _0x254473);
            })['toThrow'](new Error(_0x1da275['DBZuT']));
        }), _0x128b39['pEYua'](it, _0x128b39['dkASm'], () => {
            const _0x182c3a = null;
            _0x128b39['Xbnay'](expect, () => {
                _0x2e630d['add'](document['body'], _0x1da275['QDUdo'], _0x182c3a);
            })['toThrow'](new Error(_0x128b39['BIlXD']));
        }), _0x128b39['pEYua'](it, _0x128b39['OQvsO'], () => {
            const _0x4305f3 = { 'eFHaV': _0x1da275['QDUdo'] }, _0x2ea4cf = {
                    'title': _0x1da275['mEQcx'],
                    'description': _0x1da275['sJfLt']
                };
            _0x1da275['cUjhP'](expect, () => {
                _0x2e630d['add'](document['body'], _0x4305f3['eFHaV'], _0x2ea4cf);
            })['toThrow'](new Error(_0x1da275['mbIsc']));
        });
    }), _0x128b39['HXScx'](describe, _0x128b39['kMuRx'], () => {
        const _0x23de6b = {
            'aafow': _0x128b39['BBGpb'],
            'OHCjE': _0x128b39['gXVlx'],
            'kGzdL': _0x128b39['gpcAI'],
            'FxqQk': _0x128b39['rLNUO'],
            'cqsiM': _0x128b39['oryJS'],
            'IrWCL': _0x128b39['dylyl'],
            'fFazc': _0x128b39['sEnyV'],
            'XKVyM': _0x128b39['lliFA'],
            'UqHLS': _0x128b39['iNjuu'],
            'aPyif': _0x128b39['JoWZD'],
            'eERFC': function (_0xa96ef5, _0x430a4f) {
                return _0x128b39['Xbnay'](_0xa96ef5, _0x430a4f);
            },
            'aqOBY': _0x128b39['BlsMf'],
            'FWude': _0x128b39['FufHo'],
            'DiPDl': _0x128b39['cWwoX'],
            'tYPKa': _0x128b39['ShfNj'],
            'VhpWx': _0x128b39['oIPKF'],
            'RakZK': _0x128b39['Ejdpz'],
            'KSnoG': _0x128b39['hljkP'],
            'EytAw': _0x128b39['tfsED'],
            'xyqfF': _0x128b39['nBRxE'],
            'skVfd': _0x128b39['enZHQ']
        };
        _0x128b39['pEYua'](it, _0x128b39['zhSRj'], () => {
            _0x2e630d['add'](_0x23de6b['aafow'], _0x23de6b['OHCjE'], () => {
            }), _0x2e630d['add'](_0x23de6b['kGzdL'], _0x23de6b['FxqQk'], () => {
            }), _0x2e630d['add'](_0x23de6b['cqsiM'], _0x23de6b['IrWCL'], () => {
            }), _0x2e630d['add'](_0x23de6b['fFazc'], _0x23de6b['XKVyM'], () => {
            }), _0x2e630d['add'](_0x29172a, _0x23de6b['UqHLS'], () => {
            }), _0x2e630d['add'](_0x2f96fc, _0x23de6b['aPyif'], () => {
            });
            const _0x2cd557 = _0x2e630d['findCommands']({ 'target': _0x29172a }), _0x488004 = _['reject'](_0x2cd557, _0x411175 => _0x411175['jQuery']);
            _0x23de6b['eERFC'](expect, _0x488004)['toEqual']([
                {
                    'name': _0x23de6b['UqHLS'],
                    'displayName': _0x23de6b['aqOBY']
                },
                {
                    'name': _0x23de6b['IrWCL'],
                    'displayName': _0x23de6b['FWude']
                },
                {
                    'name': _0x23de6b['aPyif'],
                    'displayName': _0x23de6b['DiPDl']
                },
                {
                    'name': _0x23de6b['FxqQk'],
                    'displayName': _0x23de6b['tYPKa']
                },
                {
                    'name': _0x23de6b['OHCjE'],
                    'displayName': _0x23de6b['VhpWx']
                }
            ]);
        }), _0x128b39['pEYua'](it, _0x128b39['dCLYY'], () => {
            _0x2e630d['add'](_0x23de6b['cqsiM'], _0x23de6b['OHCjE'], () => {
            }), _0x2e630d['add'](_0x23de6b['cqsiM'], _0x23de6b['FxqQk'], {
                'displayName': _0x23de6b['RakZK'],
                'metadata': {
                    'some': _0x23de6b['KSnoG'],
                    'object': _0x23de6b['EytAw']
                },
                'didDispatch'() {
                }
            }), _0x2e630d['add'](_0x23de6b['cqsiM'], _0x23de6b['IrWCL'], {
                'name': _0x23de6b['xyqfF'],
                'displayName': _0x23de6b['skVfd'],
                'metadata': {
                    'some': _0x23de6b['KSnoG'],
                    'object': _0x23de6b['EytAw']
                },
                'didDispatch'() {
                }
            });
            const _0x2d861f = _0x2e630d['findCommands']({ 'target': _0x29172a });
            _0x23de6b['eERFC'](expect, _0x2d861f)['toEqual']([
                {
                    'displayName': _0x23de6b['VhpWx'],
                    'name': _0x23de6b['OHCjE']
                },
                {
                    'displayName': _0x23de6b['RakZK'],
                    'metadata': {
                        'some': _0x23de6b['KSnoG'],
                        'object': _0x23de6b['EytAw']
                    },
                    'name': _0x23de6b['FxqQk']
                },
                {
                    'displayName': _0x23de6b['skVfd'],
                    'metadata': {
                        'some': _0x23de6b['KSnoG'],
                        'object': _0x23de6b['EytAw']
                    },
                    'name': _0x23de6b['IrWCL']
                }
            ]);
        }), _0x128b39['QOMKp'](it, _0x128b39['yheqF'], () => {
            function _0x5dc440() {
            }
            _0x5dc440['displayName'] = _0x23de6b['RakZK'], _0x5dc440['metadata'] = {
                'some': _0x23de6b['KSnoG'],
                'object': _0x23de6b['EytAw']
            }, _0x2e630d['add'](_0x23de6b['cqsiM'], _0x23de6b['FxqQk'], _0x5dc440);
            const _0xd13172 = _0x2e630d['findCommands']({ 'target': _0x29172a });
            _0x23de6b['eERFC'](expect, _0xd13172)['toEqual']([{
                    'displayName': _0x23de6b['RakZK'],
                    'metadata': {
                        'some': _0x23de6b['KSnoG'],
                        'object': _0x23de6b['EytAw']
                    },
                    'name': _0x23de6b['FxqQk']
                }]);
        });
    }), _0x128b39['HXScx'](describe, _0x128b39['knJxj'], () => {
        const _0xe049ad = {
            'xUFsp': _0x128b39['aSsLs'],
            'oOLYK': function (_0x57f5fc, _0x5effc2) {
                return _0x128b39['Xbnay'](_0x57f5fc, _0x5effc2);
            },
            'PYXnM': function (_0x5eb56d, _0x384bdd) {
                return _0x128b39['Xbnay'](_0x5eb56d, _0x384bdd);
            },
            'eUsgX': function (_0x59690a, _0x205f08) {
                return _0x128b39['EiJuh'](_0x59690a, _0x205f08);
            },
            'hpocD': _0x128b39['IojXK'],
            'KvkqR': _0x128b39['oryJS'],
            'scZWo': _0x128b39['nWKFQ'],
            'fgMkF': function (_0xb60018, _0x3cba80) {
                return _0x128b39['EiJuh'](_0xb60018, _0x3cba80);
            },
            'smLmr': _0x128b39['HgfMl'],
            'wuuat': function (_0x2fb2b8, _0x352eff, _0x315940) {
                return _0x128b39['QOMKp'](_0x2fb2b8, _0x352eff, _0x315940);
            },
            'myouY': function (_0x264175, _0x1060fb) {
                return _0x128b39['vVqaL'](_0x264175, _0x1060fb);
            },
            'VMlQh': function (_0x4fa3b1, _0x2f104e) {
                return _0x128b39['uqYRI'](_0x4fa3b1, _0x2f104e);
            }
        };
        _0x128b39['QOMKp'](it, _0x128b39['MECqs'], () => {
            const _0x382644 = {
                'whNkR': _0xe049ad['xUFsp'],
                'QSaPO': function (_0x32e467, _0x375d99) {
                    return _0xe049ad['oOLYK'](_0x32e467, _0x375d99);
                },
                'skuhH': function (_0x3d04bf, _0x35f3ed) {
                    return _0xe049ad['PYXnM'](_0x3d04bf, _0x35f3ed);
                },
                'ixlpa': function (_0x355fc9, _0x34666d) {
                    return _0xe049ad['eUsgX'](_0x355fc9, _0x34666d);
                },
                'svuLe': _0xe049ad['hpocD']
            };
            let _0x5f4fde = ![];
            _0x2e630d['add'](_0xe049ad['KvkqR'], _0xe049ad['hpocD'], function (_0xfb0230) {
                const _0x5488b5 = _0x382644['whNkR']['split']('|');
                let _0x1c928b = 0x0;
                while (!![]) {
                    switch (_0x5488b5[_0x1c928b++]) {
                    case '0':
                        _0x382644['QSaPO'](expect, _0xfb0230['target'])['toBe'](_0x29172a);
                        continue;
                    case '1':
                        _0x382644['skuhH'](expect, this)['toBe'](_0x29172a);
                        continue;
                    case '2':
                        _0x382644['ixlpa'](expect, _0xfb0230['type'])['toBe'](_0x382644['svuLe']);
                        continue;
                    case '3':
                        _0x5f4fde = !![];
                        continue;
                    case '4':
                        _0x382644['ixlpa'](expect, _0xfb0230['currentTarget'])['toBe'](_0x29172a);
                        continue;
                    case '5':
                        _0x382644['ixlpa'](expect, _0xfb0230['eventPhase'])['toBe'](Event['BUBBLING_PHASE']);
                        continue;
                    }
                    break;
                }
            }), _0x2e630d['dispatch'](_0x29172a, _0xe049ad['hpocD']), _0xe049ad['eUsgX'](expect, _0x5f4fde)['toBe'](!![]);
        }), _0x128b39['QOMKp'](it, _0x128b39['OiIFW'], () => {
            _0x2e630d['add'](_0xe049ad['KvkqR'], _0xe049ad['hpocD'], () => {
            }), _0xe049ad['eUsgX'](expect, _0x2e630d['dispatch'](_0x29172a, _0xe049ad['hpocD'])['constructor']['name'])['toBe'](_0xe049ad['scZWo']), _0xe049ad['fgMkF'](expect, _0x2e630d['dispatch'](_0x29172a, _0xe049ad['smLmr']))['toBe'](null), _0xe049ad['fgMkF'](expect, _0x2e630d['dispatch'](_0x4cc009, _0xe049ad['hpocD']))['toBe'](null);
        }), _0x128b39['QOMKp'](it, _0x128b39['OfNQF'], async () => {
            const _0x329b5f = {
                'rRAiP': function (_0x4f2912, _0x5cfbd2) {
                    return _0xe049ad['fgMkF'](_0x4f2912, _0x5cfbd2);
                },
                'BxCOh': function (_0x268851, _0x286b05, _0x2c9760) {
                    return _0xe049ad['wuuat'](_0x268851, _0x286b05, _0x2c9760);
                }
            };
            jasmine['useRealClock'](), _0x2e630d['add'](_0xe049ad['KvkqR'], _0xe049ad['hpocD'], () => 0x1), _0x2e630d['add'](_0xe049ad['KvkqR'], _0xe049ad['hpocD'], () => Promise['resolve'](0x2)), _0x2e630d['add'](_0xe049ad['KvkqR'], _0xe049ad['hpocD'], () => new Promise(_0x13d0c7 => {
                _0x329b5f['BxCOh'](setTimeout, () => {
                    _0x329b5f['rRAiP'](_0x13d0c7, 0x3);
                }, 0x1);
            }));
            const _0x230c0c = await _0x2e630d['dispatch'](_0x29172a, _0xe049ad['hpocD']);
            _0xe049ad['myouY'](expect, _0x230c0c)['toEqual']([
                0x3,
                0x2,
                0x1
            ]);
        }), _0x128b39['aajEJ'](it, _0x128b39['rqQHO'], async () => {
            jasmine['useRealClock'](), _0x2e630d['add'](_0x128b39['oryJS'], _0x128b39['IojXK'], () => 0x1), _0x2e630d['add'](_0x128b39['oryJS'], _0x128b39['IojXK'], () => Promise['resolve'](0x2)), _0x2e630d['add'](_0x128b39['oryJS'], _0x128b39['IojXK'], () => new Promise((_0xd9e624, _0x1690db) => {
                const _0x3c4172 = {
                    'GWJNu': function (_0x317ccf, _0x4dca32) {
                        return _0xe049ad['VMlQh'](_0x317ccf, _0x4dca32);
                    }
                };
                _0xe049ad['wuuat'](setTimeout, () => {
                    _0x3c4172['GWJNu'](_0x1690db, 0x3);
                }, 0x1);
            }));
            let _0x1c367f;
            try {
                _0x1c367f = await _0x2e630d['dispatch'](_0x29172a, _0x128b39['IojXK']);
            } catch (_0x1fe626) {
                _0x1c367f = _0x1fe626;
            }
            _0x128b39['Xbnay'](expect, _0x1c367f)['toBe'](0x3);
        });
    }), _0x128b39['FcqsB'](describe, _0x128b39['hiaaV'], () => it('removes\x20all\x20command\x20handlers\x20except\x20for\x20those\x20in\x20the\x20snapshot', () => {
        _0x2e630d['add'](_0x128b39['BBGpb'], _0x128b39['gXVlx'], () => {
        }), _0x2e630d['add'](_0x128b39['gpcAI'], _0x128b39['rLNUO'], () => {
        });
        const _0x516e20 = _0x2e630d['getSnapshot']();
        _0x2e630d['add'](_0x128b39['oryJS'], _0x128b39['dylyl'], () => {
        }), _0x128b39['EGcmQ'](expect, _0x2e630d['findCommands']({ 'target': _0x29172a })['slice'](0x0, 0x3))['toEqual']([
            {
                'name': _0x128b39['dylyl'],
                'displayName': _0x128b39['FufHo']
            },
            {
                'name': _0x128b39['rLNUO'],
                'displayName': _0x128b39['ShfNj']
            },
            {
                'name': _0x128b39['gXVlx'],
                'displayName': _0x128b39['oIPKF']
            }
        ]), _0x2e630d['restoreSnapshot'](_0x516e20), _0x128b39['EGcmQ'](expect, _0x2e630d['findCommands']({ 'target': _0x29172a })['slice'](0x0, 0x2))['toEqual']([
            {
                'name': _0x128b39['rLNUO'],
                'displayName': _0x128b39['ShfNj']
            },
            {
                'name': _0x128b39['gXVlx'],
                'displayName': _0x128b39['oIPKF']
            }
        ]), _0x2e630d['add'](_0x128b39['oryJS'], _0x128b39['dylyl'], () => {
        }), _0x2e630d['restoreSnapshot'](_0x516e20), _0x128b39['EGcmQ'](expect, _0x2e630d['findCommands']({ 'target': _0x29172a })['slice'](0x0, 0x2))['toEqual']([
            {
                'name': _0x128b39['rLNUO'],
                'displayName': _0x128b39['ShfNj']
            },
            {
                'name': _0x128b39['gXVlx'],
                'displayName': _0x128b39['oIPKF']
            }
        ]);
    })), _0x128b39['FcqsB'](describe, _0x128b39['BEZNJ'], () => it('adds\x20event\x20listeners\x20for\x20any\x20previously-added\x20commands', () => {
        const _0x179588 = new CommandRegistry(), _0x142d07 = jasmine['createSpy'](_0x128b39['bvqKO']);
        _0x179588['add'](_0x128b39['oryJS'], _0x128b39['LzrSd'], _0x142d07), _0x29172a['dispatchEvent'](new CustomEvent(_0x128b39['LzrSd'], { 'bubbles': !![] })), _0x128b39['TyaZd'](expect, _0x142d07)['not']['toHaveBeenCalled'](), _0x179588['attach'](_0x4cc009), _0x29172a['dispatchEvent'](new CustomEvent(_0x128b39['LzrSd'], { 'bubbles': !![] })), _0x128b39['ReUDa'](expect, _0x142d07)['toHaveBeenCalled']();
    }));
});
