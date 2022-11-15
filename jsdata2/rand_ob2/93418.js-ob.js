const _0x5de9 = [
    'stdin',
    'value',
    'spawn',
    'start',
    'resolves',
    'stop',
    'isNeeded',
    'getPathToExecutable',
    'withArgs',
    '/path/to/cypress',
    '.isGarbageLineWarning',
    'returns\x20true',
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20[46454:0702/140217.292422:ERROR:gles2_cmd_decoder.cc(4439)]\x20[.RenderWorker-0x7f8bc5815a00.GpuRasterization]GL\x20ERROR\x20:GL_INVALID_FRAMEBUFFER_OPERATION\x20:\x20glDrawElements:\x20framebuffer\x20incomplete\x0a\x20\x20\x20\x20\x20\x20\x20\x20[46454:0702/140217.292466:ERROR:gles2_cmd_decoder.cc(17788)]\x20[.RenderWorker-0x7f8bc5815a00.GpuRasterization]GL\x20ERROR\x20:GL_INVALID_OPERATION\x20:\x20glCreateAndConsumeTextureCHROMIUM:\x20invalid\x20mailbox\x20name\x0a\x20\x20\x20\x20\x20\x20\x20\x20[46454:0702/140217.292526:ERROR:gles2_cmd_decoder.cc(4439)]\x20[.RenderWorker-0x7f8bc5815a00.GpuRasterization]GL\x20ERROR\x20:GL_INVALID_FRAMEBUFFER_OPERATION\x20:\x20glClear:\x20framebuffer\x20incomplete\x0a\x20\x20\x20\x20\x20\x20\x20\x20[46454:0702/140217.292555:ERROR:gles2_cmd_decoder.cc(4439)]\x20[.RenderWorker-0x7f8bc5815a00.GpuRasterization]GL\x20ERROR\x20:GL_INVALID_FRAMEBUFFER_OPERATION\x20:\x20glDrawElements:\x20framebuffer\x20incomplete\x0a\x20\x20\x20\x20\x20\x20\x20\x20[46454:0702/140217.292584:ERROR:gles2_cmd_decoder.cc(4439)]\x20[.RenderWorker-0x7f8bc5815a00.GpuRasterization]GL\x20ERROR\x20:GL_INVALID_FRAMEBUFFER_OPERATION\x20:\x20glClear:\x20framebuffer\x20incomplete\x0a\x20\x20\x20\x20\x20\x20\x20\x20[46454:0702/140217.292612:ERROR:gles2_cmd_decoder.cc(4439)]\x20[.RenderWorker-0x7f8bc5815a00.GpuRasterization]GL\x20ERROR\x20:GL_INVALID_FRAMEBUFFER_OPERATION\x20:\x20glDrawElements:\x20framebuffer\x20incomplete\x27\x0a\x20\x20\x20\x20\x20\x20',
    'chain',
    'split',
    'invokeMap',
    'trim',
    'compact',
    'expected\x20line\x20to\x20be\x20garbage:\x20',
    'true',
    '.start',
    'passes\x20args\x20+\x20options\x20to\x20spawn',
    'yieldsAsync',
    'needsSandbox',
    'then',
    'calledWithMatch',
    '--foo',
    '--cwd',
    'inherit',
    'pipe',
    'uses\x20--no-sandbox\x20when\x20needed',
    'bar',
    'args',
    'slice',
    'deep',
    'equal',
    'uses\x20npm\x20command\x20when\x20running\x20in\x20dev\x20mode',
    'resolve',
    'node',
    'does\x20not\x20pass\x20--no-sandbox\x20when\x20running\x20in\x20dev\x20mode',
    'close',
    'scripts',
    'starts\x20xvfb\x20when\x20needed',
    'calledOnce',
    'closes',
    'forEach',
    '\x27\x20event\x20fired',
    'if\x20exit\x20event\x20fired\x20and\x20close\x20event\x20fired',
    'detects\x20kill\x20signal',
    'exits\x20with\x20error\x20on\x20SIGKILL',
    'should\x20have\x20hit\x20error\x20handler\x20but\x20did\x20not',
    'error\x20message',
    'message',
    'does\x20not\x20start\x20xvfb\x20when\x20its\x20not\x20needed',
    'stops\x20xvfb\x20when\x20spawn\x20closes',
    'yields',
    'resolves\x20with\x20spawned\x20close\x20code\x20in\x20the\x20message',
    'Linux\x20display',
    'onFirstCall',
    'onSecondCall',
    '[some\x20noise\x20here]\x20Gtk:\x20cannot\x20open\x20display:\x20987',
    'stderr',
    'data',
    'linux',
    'been',
    'have',
    'calledTwice',
    'rejects\x20with\x20error\x20from\x20spawn',
    'error',
    'include',
    'unrefs\x20if\x20options.detached\x20is\x20true',
    'unref',
    'does\x20not\x20unref\x20by\x20default',
    'called',
    'sets\x20process.env\x20to\x20options.env',
    'env',
    'FOO',
    'firstCall',
    'forces\x20colors\x20and\x20streams\x20when\x20supported',
    'supportsColor',
    'isatty',
    'win32',
    'false',
    'does\x20not\x20force\x20colors\x20and\x20streams\x20when\x20not\x20supported',
    'pipes\x20when\x20on\x20win32',
    'stdio',
    'process.stdin',
    'and',
    'inherits\x20when\x20on\x20linux\x20and\x20xvfb\x20isnt\x20needed',
    'uses\x20[inherit,\x20inherit,\x20pipe]\x20when\x20linux\x20and\x20xvfb\x20is\x20needed',
    'uses\x20[inherit,\x20inherit,\x20pipe]\x20on\x20darwin',
    'writes\x20everything\x20on\x20win32',
    'from',
    'asdf',
    'stdout',
    'write',
    'does\x20not\x20write\x20to\x20process.stderr\x20when\x20from\x20xlib\x20or\x20libudev',
    'Xlib:\x20something\x20foo',
    'libudev\x20something\x20bar',
    'not',
    'calledWith',
    'EPIPE',
    'code',
    'emit',
    'throw',
    'throws\x20process.stdin\x20errors\x20code!=EPIPE',
    'wattttt',
    '134338mxVEUl',
    '1swkDmW',
    '176531tlOfcJ',
    '7762kyGMnF',
    '1ndYhUZ',
    '248903OivvzN',
    '91AdYrKZ',
    '1031ShBKeI',
    '6957kAbwSf',
    '21CcCsDj',
    '648DXHUeT',
    '17xEoXcT',
    '../../spec_helper',
    'lodash',
    'child_process',
    'tty',
    'path',
    'events',
    'mocked-env',
    '/tasks/state',
    '/exec/xvfb',
    '/exec/spawn',
    '/tasks/verify',
    '/util.js',
    'chai',
    'expect',
    '../../support/snapshot',
    'cwd',
    '/default/binary/dir',
    'lib/exec/spawn',
    'platform',
    'returns',
    'darwin',
    'stub',
    'exit',
    'spawnedProcess',
    'processStdin'
];
const _0x5882c3 = _0x289f;
(function (_0x1902cf, _0x229921) {
    const _0x3e6d78 = _0x289f;
    while (!![]) {
        try {
            const _0x236f01 = parseInt(_0x3e6d78(0x75)) + -parseInt(_0x3e6d78(0x76)) * parseInt(_0x3e6d78(0x77)) + -parseInt(_0x3e6d78(0x78)) + -parseInt(_0x3e6d78(0x79)) * -parseInt(_0x3e6d78(0x7a)) + parseInt(_0x3e6d78(0x7b)) * parseInt(_0x3e6d78(0x7c)) + -parseInt(_0x3e6d78(0x7d)) * parseInt(_0x3e6d78(0x7e)) + -parseInt(_0x3e6d78(0x7f)) * parseInt(_0x3e6d78(0x80));
            if (_0x236f01 === _0x229921)
                break;
            else
                _0x1902cf['push'](_0x1902cf['shift']());
        } catch (_0xe96f51) {
            _0x1902cf['push'](_0x1902cf['shift']());
        }
    }
}(_0x5de9, 0x211e8), require(_0x5882c3(0x81)));
function _0x289f(_0x19f3db, _0x1248cf) {
    return _0x289f = function (_0x5de998, _0x289ff5) {
        _0x5de998 = _0x5de998 - 0x75;
        let _0x35adeb = _0x5de9[_0x5de998];
        return _0x35adeb;
    }, _0x289f(_0x19f3db, _0x1248cf);
}
const _ = require(_0x5882c3(0x82)), cp = require(_0x5882c3(0x83)), os = require('os'), tty = require(_0x5882c3(0x84)), path = require(_0x5882c3(0x85)), EE = require(_0x5882c3(0x86)), mockedEnv = require(_0x5882c3(0x87)), debug = require('debug')('test'), state = require(lib + _0x5882c3(0x88)), xvfb = require(lib + _0x5882c3(0x89)), spawn = require(lib + _0x5882c3(0x8a)), verify = require(lib + _0x5882c3(0x8b)), util = require(lib + _0x5882c3(0x8c)), expect = require(_0x5882c3(0x8d))[_0x5882c3(0x8e)], snapshot = require(_0x5882c3(0x8f)), cwd = process[_0x5882c3(0x90)](), defaultBinaryDir = _0x5882c3(0x91);
describe(_0x5882c3(0x92), function () {
    const _0x3d6070 = _0x5882c3;
    beforeEach(function () {
        const _0x52b5ca = _0x289f;
        os[_0x52b5ca(0x93)][_0x52b5ca(0x94)](_0x52b5ca(0x95)), sinon[_0x52b5ca(0x96)](process, _0x52b5ca(0x97)), this[_0x52b5ca(0x98)] = {
            'on': sinon[_0x52b5ca(0x96)]()['returns'](undefined),
            'unref': sinon['stub']()['returns'](undefined),
            'stdin': {
                'on': sinon[_0x52b5ca(0x96)]()['returns'](undefined),
                'pipe': sinon[_0x52b5ca(0x96)]()[_0x52b5ca(0x94)](undefined)
            },
            'stdout': {
                'on': sinon['stub']()[_0x52b5ca(0x94)](undefined),
                'pipe': sinon[_0x52b5ca(0x96)]()['returns'](undefined)
            },
            'stderr': {
                'pipe': sinon['stub']()['returns'](undefined),
                'on': sinon[_0x52b5ca(0x96)]()['returns'](undefined)
            }
        }, this[_0x52b5ca(0x99)] = new EE(), this['processStdin']['pipe'] = sinon[_0x52b5ca(0x96)]()[_0x52b5ca(0x94)](undefined), sinon['stub'](process, _0x52b5ca(0x9a))[_0x52b5ca(0x9b)](this['processStdin']), sinon[_0x52b5ca(0x96)](cp, _0x52b5ca(0x9c))[_0x52b5ca(0x94)](this[_0x52b5ca(0x98)]), sinon[_0x52b5ca(0x96)](xvfb, _0x52b5ca(0x9d))[_0x52b5ca(0x9e)](), sinon[_0x52b5ca(0x96)](xvfb, _0x52b5ca(0x9f))['resolves'](), sinon[_0x52b5ca(0x96)](xvfb, _0x52b5ca(0xa0))['returns'](![]), sinon['stub'](state, 'getBinaryDir')[_0x52b5ca(0x94)](defaultBinaryDir), sinon[_0x52b5ca(0x96)](state, _0x52b5ca(0xa1))[_0x52b5ca(0xa2)](defaultBinaryDir)[_0x52b5ca(0x94)](_0x52b5ca(0xa3));
    }), context(_0x3d6070(0xa4), () => {
        const _0x514b91 = _0x3d6070;
        it(_0x514b91(0xa5), () => {
            const _0x1bc5ce = _0x514b91, _0x487eb5 = _0x1bc5ce(0xa6), _0x961ef5 = _[_0x1bc5ce(0xa7)](_0x487eb5)[_0x1bc5ce(0xa8)]('\x0a')[_0x1bc5ce(0xa9)](_0x1bc5ce(0xaa))[_0x1bc5ce(0xab)]()[_0x1bc5ce(0x9b)]();
            _['each'](_0x961ef5, _0x15ce08 => {
                const _0x309825 = _0x1bc5ce;
                expect(spawn['isGarbageLineWarning'](_0x15ce08), _0x309825(0xac) + _0x15ce08)['to']['be'][_0x309825(0xad)];
            });
        });
    }), context(_0x3d6070(0xae), function () {
        const _0x381c71 = _0x3d6070;
        it(_0x381c71(0xaf), function () {
            const _0x1d863b = _0x381c71;
            return this[_0x1d863b(0x98)]['on'][_0x1d863b(0xa2)]('close')[_0x1d863b(0xb0)](0x0), sinon[_0x1d863b(0x96)](verify, _0x1d863b(0xb1))['returns'](![]), spawn['start']('--foo', { 'foo': 'bar' })[_0x1d863b(0xb2)](() => {
                const _0x53476c = _0x1d863b;
                expect(cp[_0x53476c(0x9c)])['to']['be'][_0x53476c(0xb3)]('/path/to/cypress', [
                    '--',
                    _0x53476c(0xb4),
                    _0x53476c(0xb5),
                    cwd
                ], {
                    'detached': ![],
                    'stdio': [
                        _0x53476c(0xb6),
                        _0x53476c(0xb6),
                        _0x53476c(0xb7)
                    ]
                });
            });
        }), it(_0x381c71(0xb8), function () {
            const _0x17b8bb = _0x381c71;
            return this['spawnedProcess']['on'][_0x17b8bb(0xa2)]('close')[_0x17b8bb(0xb0)](0x0), sinon[_0x17b8bb(0x96)](verify, 'needsSandbox')[_0x17b8bb(0x94)](!![]), spawn['start']('--foo', { 'foo': _0x17b8bb(0xb9) })[_0x17b8bb(0xb2)](() => {
                const _0x30212d = _0x17b8bb, _0x2eb4b7 = cp[_0x30212d(0x9c)]['firstCall'][_0x30212d(0xba)][_0x30212d(0xbb)](0x0, 0x2), _0x193f6c = [
                        '--no-sandbox',
                        '--',
                        _0x30212d(0xb4),
                        _0x30212d(0xb5),
                        cwd
                    ];
                expect(_0x2eb4b7)['to'][_0x30212d(0xbc)][_0x30212d(0xbd)]([
                    _0x30212d(0xa3),
                    _0x193f6c
                ]);
            });
        }), it(_0x381c71(0xbe), function () {
            const _0xd72057 = _0x381c71;
            this[_0xd72057(0x98)]['on']['withArgs']('close')[_0xd72057(0xb0)](0x0), sinon['stub'](verify, _0xd72057(0xb1))[_0xd72057(0x94)](![]);
            const _0x34d133 = path[_0xd72057(0xbf)]('..', 'scripts', 'start.js');
            return spawn[_0xd72057(0x9d)](_0xd72057(0xb4), {
                'dev': !![],
                'foo': _0xd72057(0xb9)
            })['then'](() => {
                const _0xbaaba0 = _0xd72057;
                expect(cp[_0xbaaba0(0x9c)])['to']['be'][_0xbaaba0(0xb3)](_0xbaaba0(0xc0), [
                    _0x34d133,
                    '--',
                    _0xbaaba0(0xb4),
                    _0xbaaba0(0xb5),
                    cwd
                ], {
                    'detached': ![],
                    'stdio': [
                        _0xbaaba0(0xb6),
                        'inherit',
                        _0xbaaba0(0xb7)
                    ]
                });
            });
        }), it(_0x381c71(0xc1), function () {
            const _0x4e5afa = _0x381c71;
            this[_0x4e5afa(0x98)]['on']['withArgs'](_0x4e5afa(0xc2))[_0x4e5afa(0xb0)](0x0), sinon[_0x4e5afa(0x96)](verify, 'needsSandbox')[_0x4e5afa(0x94)](!![]);
            const _0x3d751e = path[_0x4e5afa(0xbf)]('..', _0x4e5afa(0xc3), 'start.js');
            return spawn[_0x4e5afa(0x9d)](_0x4e5afa(0xb4), {
                'dev': !![],
                'foo': _0x4e5afa(0xb9)
            })[_0x4e5afa(0xb2)](() => {
                const _0x269cf1 = _0x4e5afa;
                expect(cp[_0x269cf1(0x9c)])['to']['be'][_0x269cf1(0xb3)]('node', [
                    _0x3d751e,
                    '--',
                    _0x269cf1(0xb4),
                    _0x269cf1(0xb5),
                    cwd
                ], {
                    'detached': ![],
                    'stdio': [
                        _0x269cf1(0xb6),
                        _0x269cf1(0xb6),
                        _0x269cf1(0xb7)
                    ]
                });
            });
        }), it(_0x381c71(0xc4), function () {
            const _0x1bc7a2 = _0x381c71;
            return xvfb[_0x1bc7a2(0xa0)][_0x1bc7a2(0x94)](!![]), this[_0x1bc7a2(0x98)]['on'][_0x1bc7a2(0xa2)](_0x1bc7a2(0xc2))[_0x1bc7a2(0xb0)](0x0), spawn[_0x1bc7a2(0x9d)](_0x1bc7a2(0xb4))[_0x1bc7a2(0xb2)](() => {
                const _0x2bbcc4 = _0x1bc7a2;
                expect(xvfb['start'])['to']['be'][_0x2bbcc4(0xc5)];
            });
        }), context(_0x381c71(0xc6), function () {
            const _0x5300c7 = _0x381c71;
            [
                _0x5300c7(0xc2),
                _0x5300c7(0x97)
            ][_0x5300c7(0xc7)](_0x11806a => {
                const _0x3a820b = _0x5300c7;
                it('if\x20\x27' + _0x11806a + _0x3a820b(0xc8), function () {
                    const _0x1fccda = _0x3a820b;
                    return this[_0x1fccda(0x98)]['on'][_0x1fccda(0xa2)](_0x11806a)['yieldsAsync'](0x0), spawn[_0x1fccda(0x9d)](_0x1fccda(0xb4));
                });
            }), it(_0x5300c7(0xc9), function () {
                const _0x6c7029 = _0x5300c7;
                return this[_0x6c7029(0x98)]['on'][_0x6c7029(0xa2)](_0x6c7029(0x97))['yieldsAsync'](0x0), this['spawnedProcess']['on']['withArgs'](_0x6c7029(0xc2))['yieldsAsync'](0x0), spawn[_0x6c7029(0x9d)]('--foo');
            });
        }), context(_0x381c71(0xca), function () {
            const _0x2303d2 = _0x381c71;
            it(_0x2303d2(0xcb), function () {
                const _0x16ceba = _0x2303d2;
                return this[_0x16ceba(0x98)]['on'][_0x16ceba(0xa2)](_0x16ceba(0x97))[_0x16ceba(0xb0)](null, 'SIGKILL'), spawn[_0x16ceba(0x9d)](_0x16ceba(0xb4))[_0x16ceba(0xb2)](() => {
                    const _0x50f44f = _0x16ceba;
                    throw new Error(_0x50f44f(0xcc));
                }, _0x39043d => {
                    const _0x5f333f = _0x16ceba;
                    debug(_0x5f333f(0xcd), _0x39043d[_0x5f333f(0xce)]), snapshot(_0x39043d['message']);
                });
            });
        }), it(_0x381c71(0xcf), function () {
            const _0x1a05f7 = _0x381c71;
            return this[_0x1a05f7(0x98)]['on'][_0x1a05f7(0xa2)](_0x1a05f7(0xc2))[_0x1a05f7(0xb0)](0x0), spawn[_0x1a05f7(0x9d)](_0x1a05f7(0xb4))[_0x1a05f7(0xb2)](() => {
                const _0xe97d21 = _0x1a05f7;
                expect(xvfb[_0xe97d21(0x9d)])['not']['to']['be']['called'];
            });
        }), it(_0x381c71(0xd0), function () {
            const _0x36ccf9 = _0x381c71;
            return xvfb[_0x36ccf9(0xa0)][_0x36ccf9(0x94)](!![]), this[_0x36ccf9(0x98)]['on'][_0x36ccf9(0xa2)](_0x36ccf9(0xc2))[_0x36ccf9(0xb0)](0x0), this[_0x36ccf9(0x98)]['on']['withArgs']('close')[_0x36ccf9(0xd1)](), spawn[_0x36ccf9(0x9d)](_0x36ccf9(0xb4))['then'](() => {
                const _0x26541d = _0x36ccf9;
                expect(xvfb['stop'])['to']['be'][_0x26541d(0xc5)];
            });
        }), it(_0x381c71(0xd2), function () {
            const _0x557568 = _0x381c71;
            return this[_0x557568(0x98)]['on'][_0x557568(0xa2)](_0x557568(0xc2))[_0x557568(0xb0)](0xa), spawn[_0x557568(0x9d)]('--foo')['then'](_0x258a5c => {
                const _0xda87e9 = _0x557568;
                expect(_0x258a5c)['to'][_0xda87e9(0xbd)](0xa);
            });
        }), describe(_0x381c71(0xd3), () => {
            let _0x3ea947;
            beforeEach(() => {
                _0x3ea947 = mockedEnv({ 'DISPLAY': 'test-display' });
            }), afterEach(() => {
                _0x3ea947();
            }), it('retries\x20with\x20xvfb\x20if\x20fails\x20with\x20display\x20exit\x20code', function () {
                const _0x4a0a89 = _0x289f;
                this[_0x4a0a89(0x98)]['on'][_0x4a0a89(0xa2)](_0x4a0a89(0xc2))[_0x4a0a89(0xd4)]()[_0x4a0a89(0xb0)](0x1), this[_0x4a0a89(0x98)]['on'][_0x4a0a89(0xa2)]('close')[_0x4a0a89(0xd5)]()[_0x4a0a89(0xb0)](0x0);
                const _0x1467db = _0x4a0a89(0xd6);
                return this['spawnedProcess'][_0x4a0a89(0xd7)]['on']['withArgs'](_0x4a0a89(0xd8))[_0x4a0a89(0xd1)](_0x1467db), os[_0x4a0a89(0x93)][_0x4a0a89(0x94)](_0x4a0a89(0xd9)), spawn[_0x4a0a89(0x9d)]('--foo')[_0x4a0a89(0xb2)](_0x273392 => {
                    const _0x503139 = _0x4a0a89;
                    expect(xvfb[_0x503139(0x9d)])['to']['have'][_0x503139(0xda)][_0x503139(0xc5)], expect(xvfb[_0x503139(0x9f)])['to'][_0x503139(0xdb)][_0x503139(0xda)]['calledOnce'], expect(cp['spawn'])['to'][_0x503139(0xdb)][_0x503139(0xda)][_0x503139(0xdc)], expect(_0x273392)['to'][_0x503139(0xbd)](0x0);
                });
            });
        }), it(_0x381c71(0xdd), function () {
            const _0x5365fc = _0x381c71, _0x49f321 = 'the\x20error\x20message';
            return this[_0x5365fc(0x98)]['on'][_0x5365fc(0xa2)](_0x5365fc(0xde))[_0x5365fc(0xb0)](new Error(_0x49f321)), spawn[_0x5365fc(0x9d)](_0x5365fc(0xb4))[_0x5365fc(0xb2)](() => {
                const _0x32a18c = _0x5365fc;
                throw new Error(_0x32a18c(0xcc));
            }, _0x4d54ba => {
                const _0x3cf8b3 = _0x5365fc;
                debug('error\x20message', _0x4d54ba[_0x3cf8b3(0xce)]), expect(_0x4d54ba['message'])['to'][_0x3cf8b3(0xdf)](_0x49f321);
            });
        }), it(_0x381c71(0xe0), function () {
            const _0x143aff = _0x381c71;
            return this[_0x143aff(0x98)]['on'][_0x143aff(0xa2)](_0x143aff(0xc2))[_0x143aff(0xb0)](0x0), spawn[_0x143aff(0x9d)](null, { 'detached': !![] })[_0x143aff(0xb2)](() => {
                const _0x4f079b = _0x143aff;
                expect(this['spawnedProcess'][_0x4f079b(0xe1)])['to']['be'][_0x4f079b(0xc5)];
            });
        }), it(_0x381c71(0xe2), function () {
            const _0x39e1d = _0x381c71;
            return this[_0x39e1d(0x98)]['on'][_0x39e1d(0xa2)](_0x39e1d(0xc2))[_0x39e1d(0xb0)](0x0), spawn[_0x39e1d(0x9d)]()['then'](() => {
                const _0x34ead9 = _0x39e1d;
                expect(this[_0x34ead9(0x98)]['unref'])['not']['to']['be'][_0x34ead9(0xe3)];
            });
        }), it(_0x381c71(0xe4), function () {
            const _0x15e1fd = _0x381c71;
            return this[_0x15e1fd(0x98)]['on'][_0x15e1fd(0xa2)](_0x15e1fd(0xc2))[_0x15e1fd(0xb0)](0x0), process[_0x15e1fd(0xe5)][_0x15e1fd(0xe6)] = _0x15e1fd(0xb9), spawn[_0x15e1fd(0x9d)]()[_0x15e1fd(0xb2)](() => {
                const _0x22aa79 = _0x15e1fd;
                expect(cp[_0x22aa79(0x9c)][_0x22aa79(0xe7)][_0x22aa79(0xba)][0x2][_0x22aa79(0xe5)]['FOO'])['to']['eq'](_0x22aa79(0xb9));
            });
        }), it(_0x381c71(0xe8), function () {
            const _0x3bfe53 = _0x381c71;
            return this[_0x3bfe53(0x98)]['on']['withArgs'](_0x3bfe53(0xc2))[_0x3bfe53(0xb0)](0x0), sinon['stub'](util, _0x3bfe53(0xe9))[_0x3bfe53(0x94)](!![]), sinon[_0x3bfe53(0x96)](tty, _0x3bfe53(0xea))[_0x3bfe53(0x94)](!![]), spawn[_0x3bfe53(0x9d)]([], { 'env': {} })['then'](() => {
                const _0x43c71c = _0x3bfe53;
                snapshot(cp[_0x43c71c(0x9c)][_0x43c71c(0xe7)][_0x43c71c(0xba)][0x2][_0x43c71c(0xe5)]);
            });
        }), it('sets\x20windowsHide:false\x20property\x20in\x20windows', function () {
            const _0xdab55b = _0x381c71;
            return this[_0xdab55b(0x98)]['on']['withArgs']('close')['yieldsAsync'](0x0), os['platform'][_0xdab55b(0x94)](_0xdab55b(0xeb)), spawn[_0xdab55b(0x9d)]([], { 'env': {} })[_0xdab55b(0xb2)](() => {
                const _0x143cff = _0xdab55b;
                expect(cp[_0x143cff(0x9c)][_0x143cff(0xe7)][_0x143cff(0xba)][0x2]['windowsHide'])['to']['be'][_0x143cff(0xec)];
            });
        }), it('does\x20not\x20set\x20windowsHide\x20property\x20when\x20in\x20darwin', function () {
            const _0x24ed55 = _0x381c71;
            return this[_0x24ed55(0x98)]['on'][_0x24ed55(0xa2)](_0x24ed55(0xc2))[_0x24ed55(0xb0)](0x0), spawn[_0x24ed55(0x9d)]([], { 'env': {} })['then'](() => {
                const _0x145906 = _0x24ed55;
                expect(cp['spawn'][_0x145906(0xe7)][_0x145906(0xba)][0x2]['windowsHide'])['to']['be']['undefined'];
            });
        }), it(_0x381c71(0xed), function () {
            const _0x4ea103 = _0x381c71;
            return this[_0x4ea103(0x98)]['on'][_0x4ea103(0xa2)](_0x4ea103(0xc2))[_0x4ea103(0xb0)](0x0), sinon['stub'](util, _0x4ea103(0xe9))[_0x4ea103(0x94)](![]), sinon[_0x4ea103(0x96)](tty, _0x4ea103(0xea))[_0x4ea103(0x94)](![]), spawn[_0x4ea103(0x9d)]([], { 'env': {} })[_0x4ea103(0xb2)](() => {
                const _0x37bcbc = _0x4ea103;
                snapshot(cp['spawn']['firstCall'][_0x37bcbc(0xba)][0x2][_0x37bcbc(0xe5)]);
            });
        }), it(_0x381c71(0xee), function () {
            const _0x3b5aa2 = _0x381c71;
            return this[_0x3b5aa2(0x98)]['on'][_0x3b5aa2(0xa2)]('close')[_0x3b5aa2(0xb0)](0x0), os[_0x3b5aa2(0x93)][_0x3b5aa2(0x94)](_0x3b5aa2(0xeb)), xvfb['isNeeded']['returns'](![]), spawn[_0x3b5aa2(0x9d)]()[_0x3b5aa2(0xb2)](() => {
                const _0x329d3c = _0x3b5aa2;
                expect(cp[_0x329d3c(0x9c)][_0x329d3c(0xe7)][_0x329d3c(0xba)][0x2][_0x329d3c(0xef)])['to'][_0x329d3c(0xbc)]['eq'](_0x329d3c(0xb7)), expect(this[_0x329d3c(0x99)][_0x329d3c(0xb7)], _0x329d3c(0xf0))['to'][_0x329d3c(0xdb)]['been'][_0x329d3c(0xc5)][_0x329d3c(0xf1)]['to'][_0x329d3c(0xdb)][_0x329d3c(0xda)]['calledWith'](this[_0x329d3c(0x98)]['stdin']);
            });
        }), it(_0x381c71(0xf2), function () {
            const _0x290bf3 = _0x381c71;
            return this[_0x290bf3(0x98)]['on'][_0x290bf3(0xa2)](_0x290bf3(0xc2))[_0x290bf3(0xb0)](0x0), os[_0x290bf3(0x93)][_0x290bf3(0x94)]('linux'), xvfb['isNeeded'][_0x290bf3(0x94)](![]), spawn[_0x290bf3(0x9d)]()[_0x290bf3(0xb2)](() => {
                const _0x35b94f = _0x290bf3;
                expect(cp[_0x35b94f(0x9c)][_0x35b94f(0xe7)][_0x35b94f(0xba)][0x2][_0x35b94f(0xef)])['to']['deep']['eq'](_0x35b94f(0xb6));
            });
        }), it(_0x381c71(0xf3), function () {
            const _0x2a1207 = _0x381c71;
            return this[_0x2a1207(0x98)]['on']['withArgs'](_0x2a1207(0xc2))[_0x2a1207(0xb0)](0x0), xvfb[_0x2a1207(0xa0)][_0x2a1207(0x94)](!![]), os['platform'][_0x2a1207(0x94)]('linux'), spawn['start']()[_0x2a1207(0xb2)](() => {
                const _0x15b38b = _0x2a1207;
                expect(cp[_0x15b38b(0x9c)][_0x15b38b(0xe7)]['args'][0x2]['stdio'])['to']['deep']['eq']([
                    'inherit',
                    _0x15b38b(0xb6),
                    'pipe'
                ]);
            });
        }), it(_0x381c71(0xf4), function () {
            const _0x4e4197 = _0x381c71;
            return this['spawnedProcess']['on'][_0x4e4197(0xa2)]('close')[_0x4e4197(0xb0)](0x0), xvfb[_0x4e4197(0xa0)][_0x4e4197(0x94)](![]), os[_0x4e4197(0x93)][_0x4e4197(0x94)](_0x4e4197(0x95)), spawn[_0x4e4197(0x9d)]()[_0x4e4197(0xb2)](() => {
                const _0x51d2de = _0x4e4197;
                expect(cp[_0x51d2de(0x9c)][_0x51d2de(0xe7)][_0x51d2de(0xba)][0x2]['stdio'])['to']['deep']['eq']([
                    _0x51d2de(0xb6),
                    _0x51d2de(0xb6),
                    _0x51d2de(0xb7)
                ]);
            });
        }), it(_0x381c71(0xf5), function () {
            const _0x58acbc = _0x381c71, _0x138f8e = Buffer[_0x58acbc(0xf6)](_0x58acbc(0xf7));
            return this[_0x58acbc(0x98)][_0x58acbc(0x9a)][_0x58acbc(0xb7)][_0x58acbc(0xa2)](process[_0x58acbc(0x9a)]), this[_0x58acbc(0x98)][_0x58acbc(0xf8)][_0x58acbc(0xb7)][_0x58acbc(0xa2)](process[_0x58acbc(0xf8)]), this['spawnedProcess'][_0x58acbc(0xd7)]['on']['withArgs'](_0x58acbc(0xd8))[_0x58acbc(0xd1)](_0x138f8e), this[_0x58acbc(0x98)]['on']['withArgs'](_0x58acbc(0xc2))[_0x58acbc(0xb0)](0x0), sinon[_0x58acbc(0x96)](process['stderr'], _0x58acbc(0xf9))[_0x58acbc(0xa2)](_0x138f8e), os[_0x58acbc(0x93)][_0x58acbc(0x94)](_0x58acbc(0xeb)), spawn[_0x58acbc(0x9d)]();
        }), it(_0x381c71(0xfa), function () {
            const _0x2049d7 = _0x381c71, _0x31fc37 = Buffer[_0x2049d7(0xf6)](_0x2049d7(0xfb)), _0x293f18 = Buffer[_0x2049d7(0xf6)](_0x2049d7(0xfc)), _0xd642f8 = Buffer[_0x2049d7(0xf6)](_0x2049d7(0xf7));
            return this[_0x2049d7(0x98)]['stderr']['on'][_0x2049d7(0xa2)](_0x2049d7(0xd8))[_0x2049d7(0xd4)]()[_0x2049d7(0xd1)](_0x31fc37)[_0x2049d7(0xd5)]()['yields'](_0x293f18)['onThirdCall']()[_0x2049d7(0xd1)](_0xd642f8), this[_0x2049d7(0x98)]['on']['withArgs'](_0x2049d7(0xc2))[_0x2049d7(0xb0)](0x0), sinon[_0x2049d7(0x96)](process['stderr'], _0x2049d7(0xf9))[_0x2049d7(0xa2)](_0xd642f8), os[_0x2049d7(0x93)][_0x2049d7(0x94)]('linux'), xvfb[_0x2049d7(0xa0)][_0x2049d7(0x94)](!![]), spawn[_0x2049d7(0x9d)]()[_0x2049d7(0xb2)](() => {
                const _0x4ec09b = _0x2049d7;
                expect(process[_0x4ec09b(0xd7)][_0x4ec09b(0xf9)])[_0x4ec09b(0xfd)]['to']['be'][_0x4ec09b(0xfe)](_0x31fc37), expect(process['stderr'][_0x4ec09b(0xf9)])[_0x4ec09b(0xfd)]['to']['be'][_0x4ec09b(0xfe)](_0x293f18);
            });
        }), it('does\x20not\x20write\x20to\x20process.stderr\x20when\x20from\x20high\x20sierra\x20warnings', function () {
            const _0x1fc649 = _0x381c71, _0x113fbe = Buffer[_0x1fc649(0xf6)]('2018-05-19\x2015:30:30.287\x20Cypress[7850:32145]\x20***\x20WARNING:\x20Textured\x20Window'), _0x1d280f = Buffer['from'](_0x1fc649(0xf7));
            return this[_0x1fc649(0x98)][_0x1fc649(0xd7)]['on'][_0x1fc649(0xa2)](_0x1fc649(0xd8))[_0x1fc649(0xd4)]()['yields'](_0x113fbe)[_0x1fc649(0xd5)](_0x1d280f)['yields'](_0x1d280f), this[_0x1fc649(0x98)]['on'][_0x1fc649(0xa2)]('close')[_0x1fc649(0xb0)](0x0), sinon[_0x1fc649(0x96)](process['stderr'], 'write')[_0x1fc649(0xa2)](_0x1d280f), os[_0x1fc649(0x93)][_0x1fc649(0x94)](_0x1fc649(0x95)), spawn[_0x1fc649(0x9d)]()[_0x1fc649(0xb2)](() => {
                const _0x58204d = _0x1fc649;
                expect(process['stderr'][_0x58204d(0xf9)])['not']['to']['be'][_0x58204d(0xfe)](_0x113fbe);
            });
        }), [
            _0x381c71(0xff),
            'ENOTCONN'
        ][_0x381c71(0xc7)](_0x54f130 => {
            it('catches\x20process.stdin\x20errors\x20and\x20returns\x20when\x20code=' + _0x54f130, function () {
                const _0x1f8f86 = _0x289f;
                return this['spawnedProcess']['on'][_0x1f8f86(0xa2)](_0x1f8f86(0xc2))[_0x1f8f86(0xb0)](0x0), spawn[_0x1f8f86(0x9d)]()[_0x1f8f86(0xb2)](() => {
                    const _0x32e6f4 = _0x1f8f86;
                    let _0xe5f0c3 = ![];
                    const _0x1d6c75 = () => {
                        const _0x1eb3c4 = _0x289f;
                        _0xe5f0c3 = !![];
                        const _0x437c17 = new Error();
                        return _0x437c17[_0x1eb3c4(0x100)] = _0x54f130, process['stdin'][_0x1eb3c4(0x101)]('error', _0x437c17);
                    };
                    expect(_0x1d6c75)[_0x32e6f4(0xfd)]['to'][_0x32e6f4(0x102)](), expect(_0xe5f0c3)['to']['be'][_0x32e6f4(0xad)];
                });
            });
        }), it(_0x381c71(0x103), function () {
            const _0xf73ad5 = _0x381c71;
            return this['spawnedProcess']['on'][_0xf73ad5(0xa2)](_0xf73ad5(0xc2))[_0xf73ad5(0xb0)](0x0), spawn['start']()['then'](() => {
                const _0x245736 = _0xf73ad5, _0x52108f = () => {
                        const _0x2d3e3f = _0x289f, _0x3326f6 = new Error(_0x2d3e3f(0x104));
                        return _0x3326f6[_0x2d3e3f(0x100)] = 'FAILWHALE', process[_0x2d3e3f(0x9a)][_0x2d3e3f(0x101)](_0x2d3e3f(0xde), _0x3326f6);
                    };
                expect(_0x52108f)['to'][_0x245736(0x102)](/wattttt/);
            });
        });
    });
});
