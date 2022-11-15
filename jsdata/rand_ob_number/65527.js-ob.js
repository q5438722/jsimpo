const t = require('tap'), {EventEmitter} = require('events'), redactCwd = _0x9cd125 => {
        const _0x5a8c7a = _0x318563 => _0x318563['replace'](/\\+/g, '/')['replace'](/\r\n/g, '\x0a'), _0x348178 = _0x12cd39 => _0x12cd39['replace'](new RegExp(_0x5a8c7a(process['cwd']()), 'g'), '{CWD}'), _0x1bb2ba = _0x374300 => _0x374300['replace'](_0x5a8c7a(process['execPath']), '/path/to/node')['replace'](_0x5a8c7a(process['env']['HOME']), '~/');
        return _0x1bb2ba(_0x348178(_0x5a8c7a(_0x9cd125)));
    };
t['cleanSnapshot'] = _0x14d7bf => redactCwd(_0x14d7bf);
let result = '';
const configDefs = require('../../lib/utils/config'), definitions = Object['entries'](configDefs['definitions'])['filter'](([_0x37a175, _0x4ab7be]) => {
        return [
            'init-author-name',
            'init.author.name',
            'init-version',
            'init.version'
        ]['includes'](_0x37a175);
    })['reduce']((_0x16e5f2, [_0xb5fba3, _0x1ef335]) => {
        return _0x16e5f2[_0xb5fba3] = _0x1ef335, _0x16e5f2;
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
            'get'(_0x47244d) {
                return cliConfig[_0x47244d];
            },
            'validate'() {
                return !![];
            }
        },
        'output': _0x1d7ffb => {
            result = _0x1d7ffb;
        }
    }, usageUtil = () => 'usage\x20instructions', mocks = {
        '../../lib/utils/config/index.js': {
            'defaults': defaults,
            'definitions': definitions
        },
        '../../lib/utils/usage.js': usageUtil
    }, Config = t['mock']('../../lib/config.js', mocks), config = new Config(npm);
t['test']('config\x20no\x20args', _0x4e2968 => {
    config['exec']([], _0x4c2c27 => {
        _0x4e2968['match'](_0x4c2c27, /usage instructions/, 'should\x20not\x20error\x20out\x20on\x20empty\x20locations'), _0x4e2968['end']();
    });
}), t['test']('config\x20ignores\x20workspaces', _0xf5fccf => {
    npm['log']['warn'] = (_0x560148, _0x1c020a) => {
        _0xf5fccf['equal'](_0x560148, 'config', 'should\x20warn\x20with\x20expected\x20title'), _0xf5fccf['equal'](_0x1c020a, 'This\x20command\x20does\x20not\x20support\x20workspaces.', 'should\x20warn\x20with\x20unsupported\x20option\x20msg');
    }, config['execWorkspaces']([], [], _0xebd3d7 => {
        _0xf5fccf['match'](_0xebd3d7, /usage instructions/, 'should\x20not\x20error\x20out\x20when\x20workspaces\x20are\x20defined'), npm['log']['warn'] = () => null, _0xf5fccf['end']();
    });
}), t['test']('config\x20list', _0x133575 => {
    _0x133575['plan'](0x13d2 + -0x9b1 * 0x2 + -0x2 * 0x37), npm['config']['find'] = () => 'cli', result = '', _0x133575['teardown'](() => {
        result = '', delete npm['config']['find'];
    }), config['exec'](['list'], _0x56a5a0 => {
        _0x133575['error'](_0x56a5a0, 'npm\x20config\x20list'), _0x133575['matchSnapshot'](result, 'should\x20list\x20configs');
    });
}), t['test']('config\x20list\x20overrides', _0xe046c7 => {
    _0xe046c7['plan'](0x1b9d + 0x1a30 + -0x2f * 0x125), npm['config']['data']['set']('user', {
        'data': {
            'init.author.name': 'Foo',
            '//private-reg.npmjs.org/:_authThoken': 'f00ba1'
        },
        'source': '~/.npmrc'
    }), cliConfig['init.author.name'] = 'Bar', npm['config']['find'] = () => 'cli', result = '', _0xe046c7['teardown'](() => {
        result = '', npm['config']['data']['delete']('user'), delete cliConfig['init.author.name'], delete npm['config']['find'];
    }), config['exec'](['list'], _0x16ee33 => {
        _0xe046c7['error'](_0x16ee33, 'npm\x20config\x20list'), _0xe046c7['matchSnapshot'](result, 'should\x20list\x20overridden\x20configs');
    });
}), t['test']('config\x20list\x20--long', _0x233ebd => {
    _0x233ebd['plan'](-0x26cd + -0x501 * -0x1 + 0x21ce * 0x1), npm['config']['find'] = _0x2c29a7 => _0x2c29a7 in cliConfig ? 'cli' : 'default', cliConfig['long'] = !![], result = '', _0x233ebd['teardown'](() => {
        delete npm['config']['find'], cliConfig['long'] = ![], result = '';
    }), config['exec'](['list'], _0x53168f => {
        _0x233ebd['error'](_0x53168f, 'npm\x20config\x20list\x20--long'), _0x233ebd['matchSnapshot'](result, 'should\x20list\x20all\x20configs');
    });
}), t['test']('config\x20list\x20--json', _0x17e1b3 => {
    _0x17e1b3['plan'](0x52 + 0x634 * -0x4 + -0xc40 * -0x2), cliConfig['json'] = !![], result = '', npm['config']['list'] = [{
            '//private-reg.npmjs.org/:_authThoken': 'f00ba1',
            ...npm['config']['data']['get']('cli')['data']
        }];
    const _0x1ae3f1 = npm['config']['get'];
    npm['config']['get'] = _0x56f893 => npm['config']['list'][0x2081 + 0xbc6 + 0x5 * -0x8db][_0x56f893], _0x17e1b3['teardown'](() => {
        delete npm['config']['list'], cliConfig['json'] = ![], npm['config']['get'] = _0x1ae3f1, result = '';
    }), config['exec'](['list'], _0x19e45d => {
        _0x17e1b3['error'](_0x19e45d, 'npm\x20config\x20list\x20--json'), _0x17e1b3['same'](JSON['parse'](result), {
            'editor': 'vi',
            'json': !![],
            'location': 'user',
            'long': ![],
            'cat': !![],
            'chai': !![],
            'dog': !![]
        }, 'should\x20list\x20configs\x20usin\x20json');
    });
}), t['test']('config\x20delete\x20no\x20args', _0x40788 => {
    config['exec'](['delete'], _0x109245 => {
        _0x40788['match'](_0x109245, { 'message': '\x0aUsage:\x20usage\x20instructions' }), _0x40788['end']();
    });
}), t['test']('config\x20delete\x20key', _0x5c71f2 => {
    _0x5c71f2['plan'](-0x14fd + 0x13b9 + -0x2 * -0xa4), npm['config']['delete'] = (_0x363565, _0x520223) => {
        _0x5c71f2['equal'](_0x363565, 'foo', 'should\x20delete\x20expected\x20keyword'), _0x5c71f2['equal'](_0x520223, 'user', 'should\x20delete\x20key\x20from\x20user\x20config\x20by\x20default');
    }, npm['config']['save'] = _0xa6ad97 => {
        _0x5c71f2['equal'](_0xa6ad97, 'user', 'should\x20save\x20user\x20config\x20post-delete');
    }, config['exec']([
        'delete',
        'foo'
    ], _0xad8ac => {
        _0x5c71f2['error'](_0xad8ac, 'npm\x20config\x20delete\x20key');
    }), _0x5c71f2['teardown'](() => {
        delete npm['config']['delete'], delete npm['config']['save'];
    });
}), t['test']('config\x20delete\x20multiple\x20key', _0x13c94d => {
    _0x13c94d['plan'](0x3ea + 0xa3 * 0x1f + -0x107 * 0x17);
    const _0x3c4389 = [
        'foo',
        'bar'
    ];
    npm['config']['delete'] = (_0x22157a, _0x52c145) => {
        _0x13c94d['equal'](_0x22157a, _0x3c4389['shift'](), 'should\x20delete\x20expected\x20keyword'), _0x13c94d['equal'](_0x52c145, 'user', 'should\x20delete\x20key\x20from\x20user\x20config\x20by\x20default');
    }, npm['config']['save'] = _0x4bb1ac => {
        _0x13c94d['equal'](_0x4bb1ac, 'user', 'should\x20save\x20user\x20config\x20post-delete');
    }, config['exec']([
        'delete',
        'foo',
        'bar'
    ], _0x8e521a => {
        _0x13c94d['error'](_0x8e521a, 'npm\x20config\x20delete\x20keys');
    }), _0x13c94d['teardown'](() => {
        delete npm['config']['delete'], delete npm['config']['save'];
    });
}), t['test']('config\x20delete\x20key\x20--location=global', _0x37e36c => {
    _0x37e36c['plan'](0x230c * 0x1 + -0xffd + 0x130b * -0x1), npm['config']['delete'] = (_0x469397, _0x4b20ef) => {
        _0x37e36c['equal'](_0x469397, 'foo', 'should\x20delete\x20expected\x20keyword\x20from\x20global\x20configs'), _0x37e36c['equal'](_0x4b20ef, 'global', 'should\x20delete\x20key\x20from\x20global\x20config\x20by\x20default');
    }, npm['config']['save'] = _0x43906b => {
        _0x37e36c['equal'](_0x43906b, 'global', 'should\x20save\x20global\x20config\x20post-delete');
    }, cliConfig['location'] = 'global', config['exec']([
        'delete',
        'foo'
    ], _0x851ca6 => {
        _0x37e36c['error'](_0x851ca6, 'npm\x20config\x20delete\x20key\x20--location=global');
    }), _0x37e36c['teardown'](() => {
        cliConfig['location'] = 'user', delete npm['config']['delete'], delete npm['config']['save'];
    });
}), t['test']('config\x20set\x20no\x20args', _0x5bb14e => {
    config['exec'](['set'], _0xfdaaee => {
        _0x5bb14e['match'](_0xfdaaee, { 'message': '\x0aUsage:\x20usage\x20instructions' }), _0x5bb14e['end']();
    });
}), t['test']('config\x20set\x20key', _0x4ea128 => {
    _0x4ea128['plan'](0x9 * 0xba + 0x184 * 0x16 + -0x27dd), npm['config']['set'] = (_0x2ce8ce, _0x1fa494, _0x49e219) => {
        _0x4ea128['equal'](_0x2ce8ce, 'foo', 'should\x20set\x20expected\x20key\x20to\x20user\x20config'), _0x4ea128['equal'](_0x1fa494, 'bar', 'should\x20set\x20expected\x20value\x20to\x20user\x20config'), _0x4ea128['equal'](_0x49e219, 'user', 'should\x20set\x20key/val\x20in\x20user\x20config\x20by\x20default');
    }, npm['config']['save'] = _0x348f44 => {
        _0x4ea128['equal'](_0x348f44, 'user', 'should\x20save\x20user\x20config');
    }, config['exec']([
        'set',
        'foo',
        'bar'
    ], _0x4168bb => {
        _0x4ea128['error'](_0x4168bb, 'npm\x20config\x20set\x20key');
    }), _0x4ea128['teardown'](() => {
        delete npm['config']['set'], delete npm['config']['save'];
    });
}), t['test']('config\x20set\x20key=val', _0x1d7f47 => {
    _0x1d7f47['plan'](-0x1 * -0x251b + -0x3d + -0x24d9 * 0x1), npm['config']['set'] = (_0x5c3cef, _0x22a68f, _0x5b3f58) => {
        _0x1d7f47['equal'](_0x5c3cef, 'foo', 'should\x20set\x20expected\x20key\x20to\x20user\x20config'), _0x1d7f47['equal'](_0x22a68f, 'bar', 'should\x20set\x20expected\x20value\x20to\x20user\x20config'), _0x1d7f47['equal'](_0x5b3f58, 'user', 'should\x20set\x20key/val\x20in\x20user\x20config\x20by\x20default');
    }, npm['config']['save'] = _0x2ffed1 => {
        _0x1d7f47['equal'](_0x2ffed1, 'user', 'should\x20save\x20user\x20config');
    }, config['exec']([
        'set',
        'foo=bar'
    ], _0x41b449 => {
        _0x1d7f47['error'](_0x41b449, 'npm\x20config\x20set\x20key');
    }), _0x1d7f47['teardown'](() => {
        delete npm['config']['set'], delete npm['config']['save'];
    });
}), t['test']('config\x20set\x20multiple\x20keys', _0x401ca4 => {
    _0x401ca4['plan'](0x21b7 + 0x148f + -0x363b);
    const _0x2b5bfa = [
            [
                'foo',
                'bar'
            ],
            [
                'bar',
                'baz'
            ],
            [
                'asdf',
                ''
            ]
        ], _0x8ba065 = [
            'foo',
            'bar',
            'bar=baz',
            'asdf'
        ];
    npm['config']['set'] = (_0x2b046a, _0x349adb, _0x7a6b90) => {
        const [_0x5b93db, _0x559e9b] = _0x2b5bfa['shift']();
        _0x401ca4['equal'](_0x2b046a, _0x5b93db, 'should\x20set\x20expected\x20key\x20to\x20user\x20config'), _0x401ca4['equal'](_0x349adb, _0x559e9b, 'should\x20set\x20expected\x20value\x20to\x20user\x20config'), _0x401ca4['equal'](_0x7a6b90, 'user', 'should\x20set\x20key/val\x20in\x20user\x20config\x20by\x20default');
    }, npm['config']['save'] = _0x52ddc7 => {
        _0x401ca4['equal'](_0x52ddc7, 'user', 'should\x20save\x20user\x20config');
    }, config['exec']([
        'set',
        ..._0x8ba065
    ], _0xa5d312 => {
        _0x401ca4['error'](_0xa5d312, 'npm\x20config\x20set\x20key');
    }), _0x401ca4['teardown'](() => {
        delete npm['config']['set'], delete npm['config']['save'];
    });
}), t['test']('config\x20set\x20key\x20to\x20empty\x20value', _0x56271e => {
    _0x56271e['plan'](0x1d33 + 0x4e5 * 0x1 + 0xb * -0x319), npm['config']['set'] = (_0x41431e, _0x51fede, _0x40fbf8) => {
        _0x56271e['equal'](_0x41431e, 'foo', 'should\x20set\x20expected\x20key\x20to\x20user\x20config'), _0x56271e['equal'](_0x51fede, '', 'should\x20set\x20\x22\x22\x20to\x20user\x20config'), _0x56271e['equal'](_0x40fbf8, 'user', 'should\x20set\x20key/val\x20in\x20user\x20config\x20by\x20default');
    }, npm['config']['save'] = _0x163834 => {
        _0x56271e['equal'](_0x163834, 'user', 'should\x20save\x20user\x20config');
    }, config['exec']([
        'set',
        'foo'
    ], _0x139c99 => {
        _0x56271e['error'](_0x139c99, 'npm\x20config\x20set\x20key\x20to\x20empty\x20value');
    }), _0x56271e['teardown'](() => {
        delete npm['config']['set'], delete npm['config']['save'];
    });
}), t['test']('config\x20set\x20invalid\x20key', _0x53fc16 => {
    _0x53fc16['plan'](0xd9c + 0x919 + -0x16b2);
    const _0x1e9f0c = npm['config']['validate'];
    npm['config']['save'] = () => null, npm['config']['set'] = () => null, npm['config']['validate'] = () => ![], npm['log']['warn'] = (_0x37e502, _0x5dcb2f) => {
        _0x53fc16['equal'](_0x37e502, 'config', 'should\x20warn\x20with\x20expected\x20title'), _0x53fc16['equal'](_0x5dcb2f, 'omitting\x20invalid\x20config\x20values', 'should\x20use\x20expected\x20msg');
    }, _0x53fc16['teardown'](() => {
        npm['config']['validate'] = _0x1e9f0c, delete npm['config']['save'], delete npm['config']['set'], npm['log']['warn'] = () => null;
    }), config['exec']([
        'set',
        'foo',
        'bar'
    ], _0x2030ce => {
        _0x53fc16['error'](_0x2030ce, 'npm\x20config\x20set\x20invalid\x20key');
    });
}), t['test']('config\x20set\x20key\x20--location=global', _0x2317bc => {
    _0x2317bc['plan'](0x113b + 0x126f + -0x49 * 0x7d), npm['config']['set'] = (_0x371bd9, _0x14e415, _0x356e3a) => {
        _0x2317bc['equal'](_0x371bd9, 'foo', 'should\x20set\x20expected\x20key\x20to\x20global\x20config'), _0x2317bc['equal'](_0x14e415, 'bar', 'should\x20set\x20expected\x20value\x20to\x20global\x20config'), _0x2317bc['equal'](_0x356e3a, 'global', 'should\x20set\x20key/val\x20in\x20global\x20config');
    }, npm['config']['save'] = _0x85e2da => {
        _0x2317bc['equal'](_0x85e2da, 'global', 'should\x20save\x20global\x20config');
    }, cliConfig['location'] = 'global', config['exec']([
        'set',
        'foo',
        'bar'
    ], _0x1f4b48 => {
        _0x2317bc['error'](_0x1f4b48, 'npm\x20config\x20set\x20key\x20--location=global');
    }), _0x2317bc['teardown'](() => {
        cliConfig['location'] = 'user', delete npm['config']['set'], delete npm['config']['save'];
    });
}), t['test']('config\x20get\x20no\x20args', _0x58658b => {
    _0x58658b['plan'](0x1bf2 + -0x1 * -0x1756 + -0x2 * 0x19a3), npm['config']['find'] = () => 'cli', result = '', _0x58658b['teardown'](() => {
        result = '', delete npm['config']['find'];
    }), config['exec'](['get'], _0x12299a => {
        _0x58658b['error'](_0x12299a, 'npm\x20config\x20get\x20no\x20args'), _0x58658b['matchSnapshot'](result, 'should\x20list\x20configs\x20on\x20config\x20get\x20no\x20args');
    });
}), t['test']('config\x20get\x20key', _0x5d4ee0 => {
    _0x5d4ee0['plan'](-0x154a + 0x1 * -0xf53 + 0x249f);
    const _0x5b9fe5 = npm['config']['get'];
    npm['config']['get'] = _0x558bd1 => {
        return _0x5d4ee0['equal'](_0x558bd1, 'foo', 'should\x20use\x20expected\x20key'), 'bar';
    }, npm['config']['save'] = _0xa0669d => {
        throw new Error('should\x20not\x20save');
    }, config['exec']([
        'get',
        'foo'
    ], _0x3d38f3 => {
        _0x5d4ee0['error'](_0x3d38f3, 'npm\x20config\x20get\x20key');
    }), _0x5d4ee0['teardown'](() => {
        npm['config']['get'] = _0x5b9fe5, delete npm['config']['save'];
    });
}), t['test']('config\x20get\x20multiple\x20keys', _0x262dfa => {
    _0x262dfa['plan'](0x86c + 0x8ab + -0x1113);
    const _0x155e3b = [
            'foo',
            'bar'
        ], _0x548b8b = npm['config']['get'];
    npm['config']['get'] = _0x3fc158 => {
        return _0x262dfa['equal'](_0x3fc158, _0x155e3b['shift'](), 'should\x20use\x20expected\x20key'), 'asdf';
    }, npm['config']['save'] = _0x2ba78c => {
        throw new Error('should\x20not\x20save');
    }, config['exec']([
        'get',
        'foo',
        'bar'
    ], _0x30e08b => {
        _0x262dfa['error'](_0x30e08b, 'npm\x20config\x20get\x20multiple\x20keys'), _0x262dfa['equal'](result, 'foo=asdf\x0abar=asdf');
    }), _0x262dfa['teardown'](() => {
        result = '', npm['config']['get'] = _0x548b8b, delete npm['config']['save'];
    });
}), t['test']('config\x20get\x20private\x20key', _0x5a1af1 => {
    config['exec']([
        'get',
        '//private-reg.npmjs.org/:_authThoken'
    ], _0x3563ce => {
        _0x5a1af1['match'](_0x3563ce, /The \/\/private-reg.npmjs.org\/:_authThoken option is protected, and cannot be retrieved in this way/, 'should\x20throw\x20unable\x20to\x20retrieve\x20error'), _0x5a1af1['end']();
    });
}), t['test']('config\x20edit', _0x554c57 => {
    _0x554c57['plan'](0x1f9 * 0xb + 0x244a + -0x39f1);
    const _0x330b2d = '//registry.npmjs.org/:_authToken=0000000\x0ainit.author.name=Foo\x0asign-git-commit=true';
    npm['config']['data']['set']('user', { 'source': '~/.npmrc' }), npm['config']['save'] = async _0x827193 => {
        _0x554c57['equal'](_0x827193, 'user', 'should\x20save\x20to\x20user\x20config\x20by\x20default');
    };
    const _0x2ede4 = {
            ...mocks,
            'mkdirp-infer-owner': async () => null,
            'fs': {
                'readFile'(_0x3f38c5, _0x51a5c4, _0x34a904) {
                    _0x34a904(null, _0x330b2d);
                },
                'writeFile'(_0x5a3ade, _0x4f6db4, _0x39428f, _0x52c9fe) {
                    _0x554c57['equal'](_0x5a3ade, '~/.npmrc', 'should\x20save\x20to\x20expected\x20file\x20location'), _0x554c57['matchSnapshot'](_0x4f6db4, 'should\x20write\x20config\x20file'), _0x52c9fe();
                }
            },
            'child_process': {
                'spawn': (_0x4b47e1, _0x40363b) => {
                    _0x554c57['equal'](_0x4b47e1, 'vi', 'should\x20use\x20default\x20editor'), _0x554c57['strictSame'](_0x40363b, ['~/.npmrc'], 'should\x20match\x20user\x20source\x20data');
                    const _0x3fec59 = new EventEmitter();
                    return process['nextTick'](() => {
                        _0x3fec59['emit']('exit', -0x11cf + 0x1 * 0x16af + -0xd0 * 0x6);
                    }), _0x3fec59;
                }
            }
        }, _0x5d1a4f = _0x554c57['mock']('../../lib/config.js', _0x2ede4), _0x23c8fd = new _0x5d1a4f(npm);
    _0x23c8fd['exec'](['edit'], _0x3b80f2 => {
        _0x554c57['error'](_0x3b80f2, 'npm\x20config\x20edit'), _0x2ede4['fs']['readFile'] = (_0x3da3fb, _0x116ab1, _0x3c66b1) => {
            _0x3c66b1(new Error('ERR'));
        };
        const _0x5236ec = _0x554c57['mock']('../../lib/config.js', _0x2ede4), _0x46f9ed = new _0x5236ec(npm);
        _0x46f9ed['exec'](['edit'], _0x5d0961 => {
            _0x554c57['error'](_0x5d0961, 'npm\x20config\x20edit');
        });
    }), _0x554c57['teardown'](() => {
        npm['config']['data']['delete']('user'), delete npm['config']['save'];
    });
}), t['test']('config\x20edit\x20--location=global', _0x145567 => {
    _0x145567['plan'](-0x3a6 * 0x2 + 0x17 * 0x1a9 + 0x1 * -0x1edd), cliConfig['location'] = 'global';
    const _0x454d3b = 'init.author.name=Foo';
    npm['config']['data']['set']('global', { 'source': '/etc/npmrc' }), npm['config']['save'] = async _0x518122 => {
        _0x145567['equal'](_0x518122, 'global', 'should\x20save\x20to\x20global\x20config');
    };
    const _0x5b6dbb = {
            ...mocks,
            'mkdirp-infer-owner': async () => null,
            'fs': {
                'readFile'(_0x1fd282, _0x1bb37e, _0x275532) {
                    _0x275532(null, _0x454d3b);
                },
                'writeFile'(_0x2fd279, _0x3d4a9e, _0x14bbd7, _0x228ca2) {
                    _0x145567['equal'](_0x2fd279, '/etc/npmrc', 'should\x20save\x20to\x20global\x20file\x20location'), _0x145567['matchSnapshot'](_0x3d4a9e, 'should\x20write\x20global\x20config\x20file'), _0x228ca2();
                }
            },
            'child_process': {
                'spawn': (_0x6c2b32, _0x2959ec, _0x2e2ed9) => {
                    _0x145567['equal'](_0x6c2b32, 'vi', 'should\x20use\x20default\x20editor'), _0x145567['strictSame'](_0x2959ec, ['/etc/npmrc'], 'should\x20match\x20global\x20source\x20data');
                    const _0x2011bf = new EventEmitter();
                    return process['nextTick'](() => {
                        _0x2011bf['emit']('exit', -0x69d + 0x1e2 * -0x3 + -0x2a * -0x4e);
                    }), _0x2011bf;
                }
            }
        }, _0x94614b = _0x145567['mock']('../../lib/config.js', _0x5b6dbb), _0x477370 = new _0x94614b(npm);
    _0x477370['exec'](['edit'], _0x2c6395 => {
        _0x145567['match'](_0x2c6395, /exited with code: 137/, 'propagated\x20exit\x20code\x20from\x20editor');
    }), _0x145567['teardown'](() => {
        cliConfig['location'] = 'user', npm['config']['data']['delete']('user'), delete npm['config']['save'];
    });
}), t['test']('completion', _0x451267 => {
    const {completion: _0xa82ec9} = config, _0x530add = (_0x51b036, _0x28c465) => {
            _0x451267['resolveMatch'](_0xa82ec9({ 'conf': { 'argv': { 'remain': _0x51b036 } } }), _0x28c465, _0x51b036['join']('\x20'));
        };
    _0x530add([
        'npm',
        'foo'
    ], []), _0x530add([
        'npm',
        'config'
    ], [
        'get',
        'set',
        'delete',
        'ls',
        'rm',
        'edit',
        'list'
    ]), _0x530add([
        'npm',
        'config',
        'set',
        'foo'
    ], []);
    const _0x5eaf04 = [...Object['keys'](definitions)];
    _0x530add([
        'npm',
        'config',
        'get'
    ], _0x5eaf04), _0x530add([
        'npm',
        'config',
        'set'
    ], _0x5eaf04), _0x530add([
        'npm',
        'config',
        'delete'
    ], _0x5eaf04), _0x530add([
        'npm',
        'config',
        'rm'
    ], _0x5eaf04), _0x530add([
        'npm',
        'config',
        'edit'
    ], []), _0x530add([
        'npm',
        'config',
        'list'
    ], []), _0x530add([
        'npm',
        'config',
        'ls'
    ], []);
    const _0x8cca78 = _0xa82ec9({
        'conf': {
            'argv': {
                'remain': [
                    'npm',
                    'config'
                ]
            }
        },
        'partialWord': 'l'
    });
    _0x451267['resolveMatch'](_0x8cca78, [
        'get',
        'set',
        'delete',
        'ls',
        'rm',
        'edit'
    ], 'npm\x20config'), _0x451267['end']();
});
