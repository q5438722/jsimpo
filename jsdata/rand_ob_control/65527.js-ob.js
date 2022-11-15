const t = require('tap'), {EventEmitter} = require('events'), redactCwd = _0x34718f => {
        const _0x2a57d8 = {
                'ZDEKB': function (_0x2bae5d, _0x23ab05) {
                    return _0x2bae5d(_0x23ab05);
                },
                'JhJFT': function (_0x3d1a50, _0x248e05) {
                    return _0x3d1a50(_0x248e05);
                },
                'SFxIw': function (_0x5a5104, _0x304ecd) {
                    return _0x5a5104(_0x304ecd);
                }
            }, _0x23f082 = _0x5442ae => _0x5442ae['replace'](/\\+/g, '/')['replace'](/\r\n/g, '\x0a'), _0x5cecb5 = _0xbfccac => _0xbfccac['replace'](new RegExp(_0x23f082(process['cwd']()), 'g'), '{CWD}'), _0x20b059 = _0xd9266b => _0xd9266b['replace'](_0x23f082(process['execPath']), '/path/to/node')['replace'](_0x23f082(process['env']['HOME']), '~/');
        return _0x2a57d8['ZDEKB'](_0x20b059, _0x2a57d8['JhJFT'](_0x5cecb5, _0x2a57d8['SFxIw'](_0x23f082, _0x34718f)));
    };
t['cleanSnapshot'] = _0x30e999 => redactCwd(_0x30e999);
let result = '';
const configDefs = require('../../lib/utils/config'), definitions = Object['entries'](configDefs['definitions'])['filter'](([_0x53fb39, _0x1bd2f3]) => {
        const _0x4c0b7b = {
            'xZJok': 'init-author-name',
            'rWZFi': 'init.author.name',
            'dRHwI': 'init-version',
            'ZoPDl': 'init.version'
        };
        return [
            _0x4c0b7b['xZJok'],
            _0x4c0b7b['rWZFi'],
            _0x4c0b7b['dRHwI'],
            _0x4c0b7b['ZoPDl']
        ]['includes'](_0x53fb39);
    })['reduce']((_0xc2e4b6, [_0x3944fc, _0x1ec359]) => {
        return _0xc2e4b6[_0x3944fc] = _0x1ec359, _0xc2e4b6;
    }, {}), defaults = {
        'init-author-name': '',
        'init-version': '1.0.0',
        'init.author.name': '',
        'init.version': '1.0.0'
    }, cliConfig = {
        'editor': 'vi',
        'json': ![],
        'location': 'user',
        'long': ![],
        'cat': !![],
        'chai': !![],
        'dog': !![]
    }, npm = {
        'log': {
            'warn': () => null,
            'info': () => null,
            'enableProgress': () => null,
            'disableProgress': () => null
        },
        'config': {
            'data': new Map(Object['entries']({
                'default': {
                    'data': defaults,
                    'source': 'default\x20values'
                },
                'global': {
                    'data': {},
                    'source': '/etc/npmrc'
                },
                'cli': {
                    'data': cliConfig,
                    'source': 'command\x20line\x20options'
                }
            })),
            'get'(_0x1f9eab) {
                return cliConfig[_0x1f9eab];
            },
            'validate'() {
                return !![];
            }
        },
        'output': _0x1c3ff1 => {
            result = _0x1c3ff1;
        }
    }, usageUtil = () => 'usage\x20instructions', mocks = {
        '../../lib/utils/config/index.js': {
            'defaults': defaults,
            'definitions': definitions
        },
        '../../lib/utils/usage.js': usageUtil
    }, Config = t['mock']('../../lib/config.js', mocks), config = new Config(npm);
t['test']('config\x20no\x20args', _0x5ac800 => {
    const _0x5afbc9 = { 'cYZCm': 'should\x20not\x20error\x20out\x20on\x20empty\x20locations' };
    config['exec']([], _0x35f91a => {
        _0x5ac800['match'](_0x35f91a, /usage instructions/, _0x5afbc9['cYZCm']), _0x5ac800['end']();
    });
}), t['test']('config\x20ignores\x20workspaces', _0x14fc79 => {
    const _0x3c06da = {
        'URaEK': 'config',
        'Wjjsr': 'should\x20warn\x20with\x20expected\x20title',
        'QuOuf': 'This\x20command\x20does\x20not\x20support\x20workspaces.',
        'QzubJ': 'should\x20warn\x20with\x20unsupported\x20option\x20msg',
        'tWPOb': 'should\x20not\x20error\x20out\x20when\x20workspaces\x20are\x20defined'
    };
    npm['log']['warn'] = (_0x35f631, _0x31d4a1) => {
        _0x14fc79['equal'](_0x35f631, _0x3c06da['URaEK'], _0x3c06da['Wjjsr']), _0x14fc79['equal'](_0x31d4a1, _0x3c06da['QuOuf'], _0x3c06da['QzubJ']);
    }, config['execWorkspaces']([], [], _0xb92be3 => {
        _0x14fc79['match'](_0xb92be3, /usage instructions/, _0x3c06da['tWPOb']), npm['log']['warn'] = () => null, _0x14fc79['end']();
    });
}), t['test']('config\x20list', _0x12c221 => {
    const _0x501595 = {
        'SDsEx': 'npm\x20config\x20list',
        'ZouDM': 'should\x20list\x20configs',
        'ulEti': 'list'
    };
    _0x12c221['plan'](0x2), npm['config']['find'] = () => 'cli', result = '', _0x12c221['teardown'](() => {
        result = '', delete npm['config']['find'];
    }), config['exec']([_0x501595['ulEti']], _0xbb99db => {
        _0x12c221['error'](_0xbb99db, _0x501595['SDsEx']), _0x12c221['matchSnapshot'](result, _0x501595['ZouDM']);
    });
}), t['test']('config\x20list\x20overrides', _0x2029df => {
    const _0x4eeb06 = {
        'WuWeZ': 'user',
        'HnvxV': 'init.author.name',
        'kYmrI': 'npm\x20config\x20list',
        'fFCae': 'should\x20list\x20overridden\x20configs',
        'fogys': 'Foo',
        'ZwAEQ': 'f00ba1',
        'cjFOL': '~/.npmrc',
        'iDsDb': 'Bar',
        'XJspT': 'list'
    };
    _0x2029df['plan'](0x2), npm['config']['data']['set'](_0x4eeb06['WuWeZ'], {
        'data': {
            'init.author.name': _0x4eeb06['fogys'],
            '//private-reg.npmjs.org/:_authThoken': _0x4eeb06['ZwAEQ']
        },
        'source': _0x4eeb06['cjFOL']
    }), cliConfig[_0x4eeb06['HnvxV']] = _0x4eeb06['iDsDb'], npm['config']['find'] = () => 'cli', result = '', _0x2029df['teardown'](() => {
        result = '', npm['config']['data']['delete'](_0x4eeb06['WuWeZ']), delete cliConfig[_0x4eeb06['HnvxV']], delete npm['config']['find'];
    }), config['exec']([_0x4eeb06['XJspT']], _0x39582f => {
        _0x2029df['error'](_0x39582f, _0x4eeb06['kYmrI']), _0x2029df['matchSnapshot'](result, _0x4eeb06['fFCae']);
    });
}), t['test']('config\x20list\x20--long', _0x316a08 => {
    const _0x412cec = {
        'mFGhD': 'npm\x20config\x20list\x20--long',
        'bOoUc': 'should\x20list\x20all\x20configs',
        'UFsAs': 'list'
    };
    _0x316a08['plan'](0x2), npm['config']['find'] = _0x4987c2 => _0x4987c2 in cliConfig ? 'cli' : 'default', cliConfig['long'] = !![], result = '', _0x316a08['teardown'](() => {
        delete npm['config']['find'], cliConfig['long'] = ![], result = '';
    }), config['exec']([_0x412cec['UFsAs']], _0x300219 => {
        _0x316a08['error'](_0x300219, _0x412cec['mFGhD']), _0x316a08['matchSnapshot'](result, _0x412cec['bOoUc']);
    });
}), t['test']('config\x20list\x20--json', _0x3d5c9e => {
    const _0x2dd63f = {
        'kzjBA': 'npm\x20config\x20list\x20--json',
        'ufZoE': 'user',
        'eMUrW': 'should\x20list\x20configs\x20usin\x20json',
        'FLVqM': 'f00ba1',
        'UJiwu': 'cli',
        'ywMLb': 'list'
    };
    _0x3d5c9e['plan'](0x2), cliConfig['json'] = !![], result = '', npm['config']['list'] = [{
            '//private-reg.npmjs.org/:_authThoken': _0x2dd63f['FLVqM'],
            ...npm['config']['data']['get'](_0x2dd63f['UJiwu'])['data']
        }];
    const _0x3ba3f2 = npm['config']['get'];
    npm['config']['get'] = _0x189cae => npm['config']['list'][0x0][_0x189cae], _0x3d5c9e['teardown'](() => {
        delete npm['config']['list'], cliConfig['json'] = ![], npm['config']['get'] = _0x3ba3f2, result = '';
    }), config['exec']([_0x2dd63f['ywMLb']], _0x1302d0 => {
        _0x3d5c9e['error'](_0x1302d0, _0x2dd63f['kzjBA']), _0x3d5c9e['same'](JSON['parse'](result), {
            'editor': 'vi',
            'json': !![],
            'location': _0x2dd63f['ufZoE'],
            'long': ![],
            'cat': !![],
            'chai': !![],
            'dog': !![]
        }, _0x2dd63f['eMUrW']);
    });
}), t['test']('config\x20delete\x20no\x20args', _0x19fb1e => {
    const _0x4d3e9b = {
        'McTCt': '\x0aUsage:\x20usage\x20instructions',
        'emsCP': 'delete'
    };
    config['exec']([_0x4d3e9b['emsCP']], _0x4f5a4d => {
        _0x19fb1e['match'](_0x4f5a4d, { 'message': _0x4d3e9b['McTCt'] }), _0x19fb1e['end']();
    });
}), t['test']('config\x20delete\x20key', _0x3e52f0 => {
    const _0x555e07 = {
        'QjEKM': 'foo',
        'wwVgz': 'should\x20delete\x20expected\x20keyword',
        'HpybN': 'user',
        'AcWOF': 'should\x20delete\x20key\x20from\x20user\x20config\x20by\x20default',
        'Ohrrm': 'should\x20save\x20user\x20config\x20post-delete',
        'OYnLx': 'npm\x20config\x20delete\x20key',
        'foKLs': 'delete'
    };
    _0x3e52f0['plan'](0x4), npm['config']['delete'] = (_0x27009e, _0x1fd702) => {
        _0x3e52f0['equal'](_0x27009e, _0x555e07['QjEKM'], _0x555e07['wwVgz']), _0x3e52f0['equal'](_0x1fd702, _0x555e07['HpybN'], _0x555e07['AcWOF']);
    }, npm['config']['save'] = _0xabd9e6 => {
        _0x3e52f0['equal'](_0xabd9e6, _0x555e07['HpybN'], _0x555e07['Ohrrm']);
    }, config['exec']([
        _0x555e07['foKLs'],
        _0x555e07['QjEKM']
    ], _0x5c5e89 => {
        _0x3e52f0['error'](_0x5c5e89, _0x555e07['OYnLx']);
    }), _0x3e52f0['teardown'](() => {
        delete npm['config']['delete'], delete npm['config']['save'];
    });
}), t['test']('config\x20delete\x20multiple\x20key', _0x443aa9 => {
    const _0x448463 = {
        'xKlVv': 'should\x20delete\x20expected\x20keyword',
        'GYhvE': 'user',
        'ykdbD': 'should\x20delete\x20key\x20from\x20user\x20config\x20by\x20default',
        'dZrQl': 'should\x20save\x20user\x20config\x20post-delete',
        'BManF': 'npm\x20config\x20delete\x20keys',
        'IyuXV': 'foo',
        'KLHwC': 'bar',
        'LTBHS': 'delete'
    };
    _0x443aa9['plan'](0x6);
    const _0x48a134 = [
        _0x448463['IyuXV'],
        _0x448463['KLHwC']
    ];
    npm['config']['delete'] = (_0x5e8a13, _0x23ba77) => {
        _0x443aa9['equal'](_0x5e8a13, _0x48a134['shift'](), _0x448463['xKlVv']), _0x443aa9['equal'](_0x23ba77, _0x448463['GYhvE'], _0x448463['ykdbD']);
    }, npm['config']['save'] = _0x2f6d50 => {
        _0x443aa9['equal'](_0x2f6d50, _0x448463['GYhvE'], _0x448463['dZrQl']);
    }, config['exec']([
        _0x448463['LTBHS'],
        _0x448463['IyuXV'],
        _0x448463['KLHwC']
    ], _0x3eb798 => {
        _0x443aa9['error'](_0x3eb798, _0x448463['BManF']);
    }), _0x443aa9['teardown'](() => {
        delete npm['config']['delete'], delete npm['config']['save'];
    });
}), t['test']('config\x20delete\x20key\x20--location=global', _0x35fcc5 => {
    const _0x4070d2 = {
        'tBdJb': 'foo',
        'NFhhg': 'should\x20delete\x20expected\x20keyword\x20from\x20global\x20configs',
        'ycmyW': 'global',
        'avKrB': 'should\x20delete\x20key\x20from\x20global\x20config\x20by\x20default',
        'icUvI': 'should\x20save\x20global\x20config\x20post-delete',
        'DoNYt': 'npm\x20config\x20delete\x20key\x20--location=global',
        'EvQvo': 'user',
        'CwVJD': 'delete'
    };
    _0x35fcc5['plan'](0x4), npm['config']['delete'] = (_0x2a14fe, _0x339c91) => {
        _0x35fcc5['equal'](_0x2a14fe, _0x4070d2['tBdJb'], _0x4070d2['NFhhg']), _0x35fcc5['equal'](_0x339c91, _0x4070d2['ycmyW'], _0x4070d2['avKrB']);
    }, npm['config']['save'] = _0xa73cdc => {
        _0x35fcc5['equal'](_0xa73cdc, _0x4070d2['ycmyW'], _0x4070d2['icUvI']);
    }, cliConfig['location'] = _0x4070d2['ycmyW'], config['exec']([
        _0x4070d2['CwVJD'],
        _0x4070d2['tBdJb']
    ], _0x7d0ea => {
        _0x35fcc5['error'](_0x7d0ea, _0x4070d2['DoNYt']);
    }), _0x35fcc5['teardown'](() => {
        cliConfig['location'] = _0x4070d2['EvQvo'], delete npm['config']['delete'], delete npm['config']['save'];
    });
}), t['test']('config\x20set\x20no\x20args', _0x59a4a => {
    const _0x41c04a = {
        'KUSAF': '\x0aUsage:\x20usage\x20instructions',
        'tyBNh': 'set'
    };
    config['exec']([_0x41c04a['tyBNh']], _0x158327 => {
        _0x59a4a['match'](_0x158327, { 'message': _0x41c04a['KUSAF'] }), _0x59a4a['end']();
    });
}), t['test']('config\x20set\x20key', _0x190f7a => {
    const _0x4afbb8 = {
        'cQXDQ': 'foo',
        'myHJg': 'should\x20set\x20expected\x20key\x20to\x20user\x20config',
        'psQOV': 'bar',
        'JQmuY': 'should\x20set\x20expected\x20value\x20to\x20user\x20config',
        'kowZv': 'user',
        'NZldw': 'should\x20set\x20key/val\x20in\x20user\x20config\x20by\x20default',
        'KMnKi': 'should\x20save\x20user\x20config',
        'egXwd': 'npm\x20config\x20set\x20key',
        'vJJVk': 'set'
    };
    _0x190f7a['plan'](0x5), npm['config']['set'] = (_0x332c7d, _0x4e1c53, _0x3c9b04) => {
        _0x190f7a['equal'](_0x332c7d, _0x4afbb8['cQXDQ'], _0x4afbb8['myHJg']), _0x190f7a['equal'](_0x4e1c53, _0x4afbb8['psQOV'], _0x4afbb8['JQmuY']), _0x190f7a['equal'](_0x3c9b04, _0x4afbb8['kowZv'], _0x4afbb8['NZldw']);
    }, npm['config']['save'] = _0x20840d => {
        _0x190f7a['equal'](_0x20840d, _0x4afbb8['kowZv'], _0x4afbb8['KMnKi']);
    }, config['exec']([
        _0x4afbb8['vJJVk'],
        _0x4afbb8['cQXDQ'],
        _0x4afbb8['psQOV']
    ], _0x3b2ecc => {
        _0x190f7a['error'](_0x3b2ecc, _0x4afbb8['egXwd']);
    }), _0x190f7a['teardown'](() => {
        delete npm['config']['set'], delete npm['config']['save'];
    });
}), t['test']('config\x20set\x20key=val', _0x546f51 => {
    const _0x2c5d84 = {
        'XQheE': 'foo',
        'MSijQ': 'should\x20set\x20expected\x20key\x20to\x20user\x20config',
        'tFGaS': 'bar',
        'SxriN': 'should\x20set\x20expected\x20value\x20to\x20user\x20config',
        'TghVp': 'user',
        'Iictt': 'should\x20set\x20key/val\x20in\x20user\x20config\x20by\x20default',
        'cfLKz': 'should\x20save\x20user\x20config',
        'NraHU': 'npm\x20config\x20set\x20key',
        'uaINm': 'set',
        'eTFjR': 'foo=bar'
    };
    _0x546f51['plan'](0x5), npm['config']['set'] = (_0x29ca7a, _0x3ace7b, _0x295ff4) => {
        _0x546f51['equal'](_0x29ca7a, _0x2c5d84['XQheE'], _0x2c5d84['MSijQ']), _0x546f51['equal'](_0x3ace7b, _0x2c5d84['tFGaS'], _0x2c5d84['SxriN']), _0x546f51['equal'](_0x295ff4, _0x2c5d84['TghVp'], _0x2c5d84['Iictt']);
    }, npm['config']['save'] = _0x232f91 => {
        _0x546f51['equal'](_0x232f91, _0x2c5d84['TghVp'], _0x2c5d84['cfLKz']);
    }, config['exec']([
        _0x2c5d84['uaINm'],
        _0x2c5d84['eTFjR']
    ], _0x220663 => {
        _0x546f51['error'](_0x220663, _0x2c5d84['NraHU']);
    }), _0x546f51['teardown'](() => {
        delete npm['config']['set'], delete npm['config']['save'];
    });
}), t['test']('config\x20set\x20multiple\x20keys', _0x253ddd => {
    const _0x5522f0 = {
        'oPeFq': 'should\x20set\x20expected\x20key\x20to\x20user\x20config',
        'hWqfQ': 'should\x20set\x20expected\x20value\x20to\x20user\x20config',
        'ApXsh': 'user',
        'EIWse': 'should\x20set\x20key/val\x20in\x20user\x20config\x20by\x20default',
        'IuAdp': 'should\x20save\x20user\x20config',
        'DMUEM': 'npm\x20config\x20set\x20key',
        'ujwaY': 'foo',
        'LaCYz': 'bar',
        'cLEdt': 'baz',
        'VEodD': 'asdf',
        'QXmeW': 'bar=baz',
        'hBLyn': 'set'
    };
    _0x253ddd['plan'](0xb);
    const _0x2f0b69 = [
            [
                _0x5522f0['ujwaY'],
                _0x5522f0['LaCYz']
            ],
            [
                _0x5522f0['LaCYz'],
                _0x5522f0['cLEdt']
            ],
            [
                _0x5522f0['VEodD'],
                ''
            ]
        ], _0x35d8d1 = [
            _0x5522f0['ujwaY'],
            _0x5522f0['LaCYz'],
            _0x5522f0['QXmeW'],
            _0x5522f0['VEodD']
        ];
    npm['config']['set'] = (_0x12209a, _0x2ff06c, _0x4936ca) => {
        const [_0x3cbd3b, _0x1ddf22] = _0x2f0b69['shift']();
        _0x253ddd['equal'](_0x12209a, _0x3cbd3b, _0x5522f0['oPeFq']), _0x253ddd['equal'](_0x2ff06c, _0x1ddf22, _0x5522f0['hWqfQ']), _0x253ddd['equal'](_0x4936ca, _0x5522f0['ApXsh'], _0x5522f0['EIWse']);
    }, npm['config']['save'] = _0x1b64dc => {
        _0x253ddd['equal'](_0x1b64dc, _0x5522f0['ApXsh'], _0x5522f0['IuAdp']);
    }, config['exec']([
        _0x5522f0['hBLyn'],
        ..._0x35d8d1
    ], _0x269a64 => {
        _0x253ddd['error'](_0x269a64, _0x5522f0['DMUEM']);
    }), _0x253ddd['teardown'](() => {
        delete npm['config']['set'], delete npm['config']['save'];
    });
}), t['test']('config\x20set\x20key\x20to\x20empty\x20value', _0x44b8a9 => {
    const _0x5b6de4 = {
        'Djwgs': 'foo',
        'UaMTy': 'should\x20set\x20expected\x20key\x20to\x20user\x20config',
        'MTRdh': 'should\x20set\x20\x22\x22\x20to\x20user\x20config',
        'qrOMo': 'user',
        'nCCit': 'should\x20set\x20key/val\x20in\x20user\x20config\x20by\x20default',
        'NCxQn': 'should\x20save\x20user\x20config',
        'BcXOV': 'npm\x20config\x20set\x20key\x20to\x20empty\x20value',
        'aefoh': 'set'
    };
    _0x44b8a9['plan'](0x5), npm['config']['set'] = (_0x248640, _0x423706, _0x420b1d) => {
        _0x44b8a9['equal'](_0x248640, _0x5b6de4['Djwgs'], _0x5b6de4['UaMTy']), _0x44b8a9['equal'](_0x423706, '', _0x5b6de4['MTRdh']), _0x44b8a9['equal'](_0x420b1d, _0x5b6de4['qrOMo'], _0x5b6de4['nCCit']);
    }, npm['config']['save'] = _0x491368 => {
        _0x44b8a9['equal'](_0x491368, _0x5b6de4['qrOMo'], _0x5b6de4['NCxQn']);
    }, config['exec']([
        _0x5b6de4['aefoh'],
        _0x5b6de4['Djwgs']
    ], _0x3083a8 => {
        _0x44b8a9['error'](_0x3083a8, _0x5b6de4['BcXOV']);
    }), _0x44b8a9['teardown'](() => {
        delete npm['config']['set'], delete npm['config']['save'];
    });
}), t['test']('config\x20set\x20invalid\x20key', _0x2370c7 => {
    const _0x21e5b1 = {
        'aCsgn': 'config',
        'hsmDE': 'should\x20warn\x20with\x20expected\x20title',
        'evPJV': 'omitting\x20invalid\x20config\x20values',
        'BxyaA': 'should\x20use\x20expected\x20msg',
        'eqiFI': 'npm\x20config\x20set\x20invalid\x20key',
        'uMihS': 'set',
        'QJmIy': 'foo',
        'QKPEd': 'bar'
    };
    _0x2370c7['plan'](0x3);
    const _0x1c92c6 = npm['config']['validate'];
    npm['config']['save'] = () => null, npm['config']['set'] = () => null, npm['config']['validate'] = () => ![], npm['log']['warn'] = (_0x476fc6, _0x370132) => {
        _0x2370c7['equal'](_0x476fc6, _0x21e5b1['aCsgn'], _0x21e5b1['hsmDE']), _0x2370c7['equal'](_0x370132, _0x21e5b1['evPJV'], _0x21e5b1['BxyaA']);
    }, _0x2370c7['teardown'](() => {
        npm['config']['validate'] = _0x1c92c6, delete npm['config']['save'], delete npm['config']['set'], npm['log']['warn'] = () => null;
    }), config['exec']([
        _0x21e5b1['uMihS'],
        _0x21e5b1['QJmIy'],
        _0x21e5b1['QKPEd']
    ], _0x37d011 => {
        _0x2370c7['error'](_0x37d011, _0x21e5b1['eqiFI']);
    });
}), t['test']('config\x20set\x20key\x20--location=global', _0x43dcb7 => {
    const _0x1e2c02 = {
        'YxKOO': 'foo',
        'bQedQ': 'should\x20set\x20expected\x20key\x20to\x20global\x20config',
        'yaHLP': 'bar',
        'hMcZW': 'should\x20set\x20expected\x20value\x20to\x20global\x20config',
        'VdaeC': 'global',
        'ieKBj': 'should\x20set\x20key/val\x20in\x20global\x20config',
        'JUDfO': 'should\x20save\x20global\x20config',
        'vFjXa': 'npm\x20config\x20set\x20key\x20--location=global',
        'HYAks': 'user',
        'vRHjp': 'set'
    };
    _0x43dcb7['plan'](0x5), npm['config']['set'] = (_0x224342, _0x21e699, _0x1ce8e6) => {
        _0x43dcb7['equal'](_0x224342, _0x1e2c02['YxKOO'], _0x1e2c02['bQedQ']), _0x43dcb7['equal'](_0x21e699, _0x1e2c02['yaHLP'], _0x1e2c02['hMcZW']), _0x43dcb7['equal'](_0x1ce8e6, _0x1e2c02['VdaeC'], _0x1e2c02['ieKBj']);
    }, npm['config']['save'] = _0x5aff4f => {
        _0x43dcb7['equal'](_0x5aff4f, _0x1e2c02['VdaeC'], _0x1e2c02['JUDfO']);
    }, cliConfig['location'] = _0x1e2c02['VdaeC'], config['exec']([
        _0x1e2c02['vRHjp'],
        _0x1e2c02['YxKOO'],
        _0x1e2c02['yaHLP']
    ], _0x2034bf => {
        _0x43dcb7['error'](_0x2034bf, _0x1e2c02['vFjXa']);
    }), _0x43dcb7['teardown'](() => {
        cliConfig['location'] = _0x1e2c02['HYAks'], delete npm['config']['set'], delete npm['config']['save'];
    });
}), t['test']('config\x20get\x20no\x20args', _0x2fb39b => {
    const _0x442a29 = {
        'hlvey': 'npm\x20config\x20get\x20no\x20args',
        'npTIH': 'should\x20list\x20configs\x20on\x20config\x20get\x20no\x20args',
        'NlPjn': 'get'
    };
    _0x2fb39b['plan'](0x2), npm['config']['find'] = () => 'cli', result = '', _0x2fb39b['teardown'](() => {
        result = '', delete npm['config']['find'];
    }), config['exec']([_0x442a29['NlPjn']], _0x1a9df5 => {
        _0x2fb39b['error'](_0x1a9df5, _0x442a29['hlvey']), _0x2fb39b['matchSnapshot'](result, _0x442a29['npTIH']);
    });
}), t['test']('config\x20get\x20key', _0x419796 => {
    const _0x45550d = {
        'jZmuU': 'foo',
        'nXNFg': 'should\x20use\x20expected\x20key',
        'UUhVm': 'bar',
        'cgtAY': 'should\x20not\x20save',
        'DTzHw': 'npm\x20config\x20get\x20key',
        'UddJy': 'get'
    };
    _0x419796['plan'](0x2);
    const _0x1119d5 = npm['config']['get'];
    npm['config']['get'] = _0x14a953 => {
        return _0x419796['equal'](_0x14a953, _0x45550d['jZmuU'], _0x45550d['nXNFg']), _0x45550d['UUhVm'];
    }, npm['config']['save'] = _0x248b2d => {
        throw new Error(_0x45550d['cgtAY']);
    }, config['exec']([
        _0x45550d['UddJy'],
        _0x45550d['jZmuU']
    ], _0x26a9ce => {
        _0x419796['error'](_0x26a9ce, _0x45550d['DTzHw']);
    }), _0x419796['teardown'](() => {
        npm['config']['get'] = _0x1119d5, delete npm['config']['save'];
    });
}), t['test']('config\x20get\x20multiple\x20keys', _0x58d78d => {
    const _0x4bbf9e = {
        'CiQbW': 'should\x20use\x20expected\x20key',
        'qUrLi': 'asdf',
        'HpIWG': 'should\x20not\x20save',
        'kQvKR': 'npm\x20config\x20get\x20multiple\x20keys',
        'BTACk': 'foo=asdf\x0abar=asdf',
        'tOsfx': 'foo',
        'jqyBy': 'bar',
        'DyyEL': 'get'
    };
    _0x58d78d['plan'](0x4);
    const _0x2b379e = [
            _0x4bbf9e['tOsfx'],
            _0x4bbf9e['jqyBy']
        ], _0x2448e2 = npm['config']['get'];
    npm['config']['get'] = _0x589d8 => {
        return _0x58d78d['equal'](_0x589d8, _0x2b379e['shift'](), _0x4bbf9e['CiQbW']), _0x4bbf9e['qUrLi'];
    }, npm['config']['save'] = _0x52c158 => {
        throw new Error(_0x4bbf9e['HpIWG']);
    }, config['exec']([
        _0x4bbf9e['DyyEL'],
        _0x4bbf9e['tOsfx'],
        _0x4bbf9e['jqyBy']
    ], _0x3a69b2 => {
        _0x58d78d['error'](_0x3a69b2, _0x4bbf9e['kQvKR']), _0x58d78d['equal'](result, _0x4bbf9e['BTACk']);
    }), _0x58d78d['teardown'](() => {
        result = '', npm['config']['get'] = _0x2448e2, delete npm['config']['save'];
    });
}), t['test']('config\x20get\x20private\x20key', _0x934779 => {
    const _0x252982 = {
        'hNsGv': 'should\x20throw\x20unable\x20to\x20retrieve\x20error',
        'HPycH': 'get',
        'cGJPe': '//private-reg.npmjs.org/:_authThoken'
    };
    config['exec']([
        _0x252982['HPycH'],
        _0x252982['cGJPe']
    ], _0x72cdb9 => {
        _0x934779['match'](_0x72cdb9, /The \/\/private-reg.npmjs.org\/:_authThoken option is protected, and cannot be retrieved in this way/, _0x252982['hNsGv']), _0x934779['end']();
    });
}), t['test']('config\x20edit', _0x3a9e0c => {
    const _0xb837c3 = {
        'YvFxE': 'user',
        'HVfum': 'should\x20save\x20to\x20user\x20config\x20by\x20default',
        'dxvZF': function (_0x3c176a, _0x4377ed, _0x45355f) {
            return _0x3c176a(_0x4377ed, _0x45355f);
        },
        'UHykq': '~/.npmrc',
        'OLBiv': 'should\x20save\x20to\x20expected\x20file\x20location',
        'EyBRR': 'should\x20write\x20config\x20file',
        'rWDyH': function (_0x47a1ca) {
            return _0x47a1ca();
        },
        'TQina': 'exit',
        'aKjRJ': 'should\x20use\x20default\x20editor',
        'rTRNQ': 'should\x20match\x20user\x20source\x20data',
        'dlWQk': function (_0x3521fa, _0x24b0ab) {
            return _0x3521fa(_0x24b0ab);
        },
        'RPjZg': 'ERR',
        'nFTEJ': 'npm\x20config\x20edit',
        'ASZJi': '../../lib/config.js',
        'VaUlT': 'edit'
    };
    _0x3a9e0c['plan'](0xc);
    const _0x4e494f = '//registry.npmjs.org/:_authToken=0000000\x0ainit.author.name=Foo\x0asign-git-commit=true';
    npm['config']['data']['set'](_0xb837c3['YvFxE'], { 'source': _0xb837c3['UHykq'] }), npm['config']['save'] = async _0x351c7d => {
        _0x3a9e0c['equal'](_0x351c7d, _0xb837c3['YvFxE'], _0xb837c3['HVfum']);
    };
    const _0x3d3d17 = {
            ...mocks,
            'mkdirp-infer-owner': async () => null,
            'fs': {
                'readFile'(_0x3fd81a, _0x4fc7ec, _0x49f058) {
                    _0xb837c3['dxvZF'](_0x49f058, null, _0x4e494f);
                },
                'writeFile'(_0x561de7, _0x3dce48, _0x2e95a2, _0x560ad8) {
                    _0x3a9e0c['equal'](_0x561de7, _0xb837c3['UHykq'], _0xb837c3['OLBiv']), _0x3a9e0c['matchSnapshot'](_0x3dce48, _0xb837c3['EyBRR']), _0xb837c3['rWDyH'](_0x560ad8);
                }
            },
            'child_process': {
                'spawn': (_0x2b2808, _0x2561c4) => {
                    _0x3a9e0c['equal'](_0x2b2808, 'vi', _0xb837c3['aKjRJ']), _0x3a9e0c['strictSame'](_0x2561c4, [_0xb837c3['UHykq']], _0xb837c3['rTRNQ']);
                    const _0x4ef624 = new EventEmitter();
                    return process['nextTick'](() => {
                        _0x4ef624['emit'](_0xb837c3['TQina'], 0x0);
                    }), _0x4ef624;
                }
            }
        }, _0x3479e0 = _0x3a9e0c['mock'](_0xb837c3['ASZJi'], _0x3d3d17), _0x19ed33 = new _0x3479e0(npm);
    _0x19ed33['exec']([_0xb837c3['VaUlT']], _0x2f2ca9 => {
        const _0x4f4744 = { 'JuseH': _0xb837c3['nFTEJ'] };
        _0x3a9e0c['error'](_0x2f2ca9, _0xb837c3['nFTEJ']), _0x3d3d17['fs']['readFile'] = (_0x31ac1a, _0x5613a1, _0x200763) => {
            _0xb837c3['dlWQk'](_0x200763, new Error(_0xb837c3['RPjZg']));
        };
        const _0x24511c = _0x3a9e0c['mock'](_0xb837c3['ASZJi'], _0x3d3d17), _0x5cca28 = new _0x24511c(npm);
        _0x5cca28['exec']([_0xb837c3['VaUlT']], _0x4fd678 => {
            _0x3a9e0c['error'](_0x4fd678, _0x4f4744['JuseH']);
        });
    }), _0x3a9e0c['teardown'](() => {
        npm['config']['data']['delete'](_0xb837c3['YvFxE']), delete npm['config']['save'];
    });
}), t['test']('config\x20edit\x20--location=global', _0x52bb3b => {
    const _0x1a2516 = {
        'wFmbE': 'global',
        'cuiTh': 'should\x20save\x20to\x20global\x20config',
        'BOEPS': function (_0x4ade59, _0x338b75, _0x2a5be9) {
            return _0x4ade59(_0x338b75, _0x2a5be9);
        },
        'aMxFK': '/etc/npmrc',
        'SjMPy': 'should\x20save\x20to\x20global\x20file\x20location',
        'qxyvC': 'should\x20write\x20global\x20config\x20file',
        'zztGN': function (_0x8c9c08) {
            return _0x8c9c08();
        },
        'qvyCO': 'exit',
        'vCZpU': 'should\x20use\x20default\x20editor',
        'TMFwH': 'should\x20match\x20global\x20source\x20data',
        'IQWvT': 'propagated\x20exit\x20code\x20from\x20editor',
        'cUEkT': 'user',
        'uJgTt': 'init.author.name=Foo',
        'HqOkF': '../../lib/config.js',
        'OqmMG': 'edit'
    };
    _0x52bb3b['plan'](0x6), cliConfig['location'] = _0x1a2516['wFmbE'];
    const _0x3f1f04 = _0x1a2516['uJgTt'];
    npm['config']['data']['set'](_0x1a2516['wFmbE'], { 'source': _0x1a2516['aMxFK'] }), npm['config']['save'] = async _0x5dc595 => {
        _0x52bb3b['equal'](_0x5dc595, _0x1a2516['wFmbE'], _0x1a2516['cuiTh']);
    };
    const _0x5b71cc = {
            ...mocks,
            'mkdirp-infer-owner': async () => null,
            'fs': {
                'readFile'(_0x267da7, _0x42c873, _0x39563b) {
                    _0x1a2516['BOEPS'](_0x39563b, null, _0x3f1f04);
                },
                'writeFile'(_0x578baf, _0x529eb0, _0x490fb0, _0x16f311) {
                    _0x52bb3b['equal'](_0x578baf, _0x1a2516['aMxFK'], _0x1a2516['SjMPy']), _0x52bb3b['matchSnapshot'](_0x529eb0, _0x1a2516['qxyvC']), _0x1a2516['zztGN'](_0x16f311);
                }
            },
            'child_process': {
                'spawn': (_0x4d8958, _0x4c31b2, _0x411b5c) => {
                    _0x52bb3b['equal'](_0x4d8958, 'vi', _0x1a2516['vCZpU']), _0x52bb3b['strictSame'](_0x4c31b2, [_0x1a2516['aMxFK']], _0x1a2516['TMFwH']);
                    const _0x1c6809 = new EventEmitter();
                    return process['nextTick'](() => {
                        _0x1c6809['emit'](_0x1a2516['qvyCO'], 0x89);
                    }), _0x1c6809;
                }
            }
        }, _0x127d3 = _0x52bb3b['mock'](_0x1a2516['HqOkF'], _0x5b71cc), _0x5dd674 = new _0x127d3(npm);
    _0x5dd674['exec']([_0x1a2516['OqmMG']], _0x1e4237 => {
        _0x52bb3b['match'](_0x1e4237, /exited with code: 137/, _0x1a2516['IQWvT']);
    }), _0x52bb3b['teardown'](() => {
        cliConfig['location'] = _0x1a2516['cUEkT'], npm['config']['data']['delete'](_0x1a2516['cUEkT']), delete npm['config']['save'];
    });
}), t['test']('completion', _0xf2da72 => {
    const _0x143fcf = {
            'iljVH': function (_0x40fe86, _0x535934) {
                return _0x40fe86(_0x535934);
            },
            'aBiSm': function (_0x4884b4, _0x3a9693, _0x218dbb) {
                return _0x4884b4(_0x3a9693, _0x218dbb);
            },
            'ETLGS': 'npm',
            'szgeV': 'foo',
            'YtKjY': 'config',
            'GhjFq': 'get',
            'wWyPe': 'set',
            'mIAWE': 'delete',
            'xiPUL': 'edit',
            'hBCxD': 'list',
            'hghDd': function (_0x1d80d5, _0x35ca44, _0x27187a) {
                return _0x1d80d5(_0x35ca44, _0x27187a);
            },
            'IicYy': function (_0x142208, _0x3210bd, _0x212bb6) {
                return _0x142208(_0x3210bd, _0x212bb6);
            },
            'rqmBU': function (_0x2266a3, _0x4a7eab, _0x24481b) {
                return _0x2266a3(_0x4a7eab, _0x24481b);
            },
            'pdgIT': function (_0x3b8bd2, _0x4d2796, _0x1ec4f9) {
                return _0x3b8bd2(_0x4d2796, _0x1ec4f9);
            },
            'QiEtz': 'npm\x20config'
        }, {completion: _0x1802ce} = config, _0x5a525b = (_0x36648b, _0x2c52b2) => {
            _0xf2da72['resolveMatch'](_0x143fcf['iljVH'](_0x1802ce, { 'conf': { 'argv': { 'remain': _0x36648b } } }), _0x2c52b2, _0x36648b['join']('\x20'));
        };
    _0x143fcf['aBiSm'](_0x5a525b, [
        _0x143fcf['ETLGS'],
        _0x143fcf['szgeV']
    ], []), _0x143fcf['aBiSm'](_0x5a525b, [
        _0x143fcf['ETLGS'],
        _0x143fcf['YtKjY']
    ], [
        _0x143fcf['GhjFq'],
        _0x143fcf['wWyPe'],
        _0x143fcf['mIAWE'],
        'ls',
        'rm',
        _0x143fcf['xiPUL'],
        _0x143fcf['hBCxD']
    ]), _0x143fcf['hghDd'](_0x5a525b, [
        _0x143fcf['ETLGS'],
        _0x143fcf['YtKjY'],
        _0x143fcf['wWyPe'],
        _0x143fcf['szgeV']
    ], []);
    const _0xf46daa = [...Object['keys'](definitions)];
    _0x143fcf['IicYy'](_0x5a525b, [
        _0x143fcf['ETLGS'],
        _0x143fcf['YtKjY'],
        _0x143fcf['GhjFq']
    ], _0xf46daa), _0x143fcf['IicYy'](_0x5a525b, [
        _0x143fcf['ETLGS'],
        _0x143fcf['YtKjY'],
        _0x143fcf['wWyPe']
    ], _0xf46daa), _0x143fcf['IicYy'](_0x5a525b, [
        _0x143fcf['ETLGS'],
        _0x143fcf['YtKjY'],
        _0x143fcf['mIAWE']
    ], _0xf46daa), _0x143fcf['IicYy'](_0x5a525b, [
        _0x143fcf['ETLGS'],
        _0x143fcf['YtKjY'],
        'rm'
    ], _0xf46daa), _0x143fcf['IicYy'](_0x5a525b, [
        _0x143fcf['ETLGS'],
        _0x143fcf['YtKjY'],
        _0x143fcf['xiPUL']
    ], []), _0x143fcf['rqmBU'](_0x5a525b, [
        _0x143fcf['ETLGS'],
        _0x143fcf['YtKjY'],
        _0x143fcf['hBCxD']
    ], []), _0x143fcf['pdgIT'](_0x5a525b, [
        _0x143fcf['ETLGS'],
        _0x143fcf['YtKjY'],
        'ls'
    ], []);
    const _0x3f0315 = _0x143fcf['iljVH'](_0x1802ce, {
        'conf': {
            'argv': {
                'remain': [
                    _0x143fcf['ETLGS'],
                    _0x143fcf['YtKjY']
                ]
            }
        },
        'partialWord': 'l'
    });
    _0xf2da72['resolveMatch'](_0x3f0315, [
        _0x143fcf['GhjFq'],
        _0x143fcf['wWyPe'],
        _0x143fcf['mIAWE'],
        'ls',
        'rm',
        _0x143fcf['xiPUL']
    ], _0x143fcf['QiEtz']), _0xf2da72['end']();
});
