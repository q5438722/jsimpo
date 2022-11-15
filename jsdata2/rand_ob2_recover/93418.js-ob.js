require(_0x5882c3(129));
function _0x289f(_0x19f3db, _0x1248cf) {
    return _0x289f = function (_0x5de998, _0x289ff5) {
        _0x5de998 = _0x5de998 - 117;
        let _0x35adeb = _0x5de9[_0x5de998];
        return _0x35adeb;
    }, _0x289f(_0x19f3db, _0x1248cf);
}
const _ = require(_0x5882c3(130)), cp = require(_0x5882c3(131)), os = require('os'), tty = require(_0x5882c3(132)), path = require(_0x5882c3(133)), EE = require(_0x5882c3(134)), mockedEnv = require(_0x5882c3(135)), debug = require('debug')('test'), state = require(lib + _0x5882c3(136)), xvfb = require(lib + _0x5882c3(137)), spawn = require(lib + _0x5882c3(138)), verify = require(lib + _0x5882c3(139)), util = require(lib + _0x5882c3(140)), expect = require(_0x5882c3(141))[_0x5882c3(142)], snapshot = require(_0x5882c3(143)), cwd = process[_0x5882c3(144)](), defaultBinaryDir = _0x5882c3(145);
describe(_0x5882c3(146), function () {
    const _0x3d6070 = _0x5882c3;
    beforeEach(function () {
        const _0x52b5ca = _0x289f;
        os[_0x52b5ca(147)][_0x52b5ca(148)](_0x52b5ca(149)), sinon[_0x52b5ca(150)](process, _0x52b5ca(151)), this[_0x52b5ca(152)] = {
            'on': sinon[_0x52b5ca(150)]()['returns'](undefined),
            'unref': sinon['stub']()['returns'](undefined),
            'stdin': {
                'on': sinon[_0x52b5ca(150)]()['returns'](undefined),
                'pipe': sinon[_0x52b5ca(150)]()[_0x52b5ca(148)](undefined)
            },
            'stdout': {
                'on': sinon['stub']()[_0x52b5ca(148)](undefined),
                'pipe': sinon[_0x52b5ca(150)]()['returns'](undefined)
            },
            'stderr': {
                'pipe': sinon['stub']()['returns'](undefined),
                'on': sinon[_0x52b5ca(150)]()['returns'](undefined)
            }
        }, this[_0x52b5ca(153)] = new EE(), this['processStdin']['pipe'] = sinon[_0x52b5ca(150)]()[_0x52b5ca(148)](undefined), sinon['stub'](process, _0x52b5ca(154))[_0x52b5ca(155)](this['processStdin']), sinon[_0x52b5ca(150)](cp, _0x52b5ca(156))[_0x52b5ca(148)](this[_0x52b5ca(152)]), sinon[_0x52b5ca(150)](xvfb, _0x52b5ca(157))[_0x52b5ca(158)](), sinon[_0x52b5ca(150)](xvfb, _0x52b5ca(159))['resolves'](), sinon[_0x52b5ca(150)](xvfb, _0x52b5ca(160))['returns'](![]), sinon['stub'](state, 'getBinaryDir')[_0x52b5ca(148)](defaultBinaryDir), sinon[_0x52b5ca(150)](state, _0x52b5ca(161))[_0x52b5ca(162)](defaultBinaryDir)[_0x52b5ca(148)](_0x52b5ca(163));
    }), context(_0x3d6070(164), () => {
        const _0x514b91 = _0x3d6070;
        it(_0x514b91(165), () => {
            const _0x1bc5ce = _0x514b91, _0x487eb5 = _0x1bc5ce(166), _0x961ef5 = _[_0x1bc5ce(167)](_0x487eb5)[_0x1bc5ce(168)]('\n')[_0x1bc5ce(169)](_0x1bc5ce(170))[_0x1bc5ce(171)]()[_0x1bc5ce(155)]();
            _['each'](_0x961ef5, _0x15ce08 => {
                const _0x309825 = _0x1bc5ce;
                expect(spawn['isGarbageLineWarning'](_0x15ce08), _0x309825(172) + _0x15ce08)['to']['be'][_0x309825(173)];
            });
        });
    }), context(_0x3d6070(174), function () {
        const _0x381c71 = _0x3d6070;
        it(_0x381c71(175), function () {
            const _0x1d863b = _0x381c71;
            return this[_0x1d863b(152)]['on'][_0x1d863b(162)]('close')[_0x1d863b(176)](0), sinon[_0x1d863b(150)](verify, _0x1d863b(177))['returns'](![]), spawn['start']('--foo', { 'foo': 'bar' })[_0x1d863b(178)](() => {
                const _0x53476c = _0x1d863b;
                expect(cp[_0x53476c(156)])['to']['be'][_0x53476c(179)]('/path/to/cypress', [
                    '--',
                    _0x53476c(180),
                    _0x53476c(181),
                    cwd
                ], {
                    'detached': ![],
                    'stdio': [
                        _0x53476c(182),
                        _0x53476c(182),
                        _0x53476c(183)
                    ]
                });
            });
        }), it(_0x381c71(184), function () {
            const _0x17b8bb = _0x381c71;
            return this['spawnedProcess']['on'][_0x17b8bb(162)]('close')[_0x17b8bb(176)](0), sinon[_0x17b8bb(150)](verify, 'needsSandbox')[_0x17b8bb(148)](!![]), spawn['start']('--foo', { 'foo': _0x17b8bb(185) })[_0x17b8bb(178)](() => {
                const _0x30212d = _0x17b8bb, _0x2eb4b7 = cp[_0x30212d(156)]['firstCall'][_0x30212d(186)][_0x30212d(187)](0, 2), _0x193f6c = [
                        '--no-sandbox',
                        '--',
                        _0x30212d(180),
                        _0x30212d(181),
                        cwd
                    ];
                expect(_0x2eb4b7)['to'][_0x30212d(188)][_0x30212d(189)]([
                    _0x30212d(163),
                    _0x193f6c
                ]);
            });
        }), it(_0x381c71(190), function () {
            const _0xd72057 = _0x381c71;
            this[_0xd72057(152)]['on']['withArgs']('close')[_0xd72057(176)](0), sinon['stub'](verify, _0xd72057(177))[_0xd72057(148)](![]);
            const _0x34d133 = path[_0xd72057(191)]('..', 'scripts', 'start.js');
            return spawn[_0xd72057(157)](_0xd72057(180), {
                'dev': !![],
                'foo': _0xd72057(185)
            })['then'](() => {
                const _0xbaaba0 = _0xd72057;
                expect(cp[_0xbaaba0(156)])['to']['be'][_0xbaaba0(179)](_0xbaaba0(192), [
                    _0x34d133,
                    '--',
                    _0xbaaba0(180),
                    _0xbaaba0(181),
                    cwd
                ], {
                    'detached': ![],
                    'stdio': [
                        _0xbaaba0(182),
                        'inherit',
                        _0xbaaba0(183)
                    ]
                });
            });
        }), it(_0x381c71(193), function () {
            const _0x4e5afa = _0x381c71;
            this[_0x4e5afa(152)]['on']['withArgs'](_0x4e5afa(194))[_0x4e5afa(176)](0), sinon[_0x4e5afa(150)](verify, 'needsSandbox')[_0x4e5afa(148)](!![]);
            const _0x3d751e = path[_0x4e5afa(191)]('..', _0x4e5afa(195), 'start.js');
            return spawn[_0x4e5afa(157)](_0x4e5afa(180), {
                'dev': !![],
                'foo': _0x4e5afa(185)
            })[_0x4e5afa(178)](() => {
                const _0x269cf1 = _0x4e5afa;
                expect(cp[_0x269cf1(156)])['to']['be'][_0x269cf1(179)]('node', [
                    _0x3d751e,
                    '--',
                    _0x269cf1(180),
                    _0x269cf1(181),
                    cwd
                ], {
                    'detached': ![],
                    'stdio': [
                        _0x269cf1(182),
                        _0x269cf1(182),
                        _0x269cf1(183)
                    ]
                });
            });
        }), it(_0x381c71(196), function () {
            const _0x1bc7a2 = _0x381c71;
            return xvfb[_0x1bc7a2(160)][_0x1bc7a2(148)](!![]), this[_0x1bc7a2(152)]['on'][_0x1bc7a2(162)](_0x1bc7a2(194))[_0x1bc7a2(176)](0), spawn[_0x1bc7a2(157)](_0x1bc7a2(180))[_0x1bc7a2(178)](() => {
                const _0x2bbcc4 = _0x1bc7a2;
                expect(xvfb['start'])['to']['be'][_0x2bbcc4(197)];
            });
        }), context(_0x381c71(198), function () {
            const _0x5300c7 = _0x381c71;
            [
                _0x5300c7(194),
                _0x5300c7(151)
            ][_0x5300c7(199)](_0x11806a => {
                const _0x3a820b = _0x5300c7;
                it('if \'' + _0x11806a + _0x3a820b(200), function () {
                    const _0x1fccda = _0x3a820b;
                    return this[_0x1fccda(152)]['on'][_0x1fccda(162)](_0x11806a)['yieldsAsync'](0), spawn[_0x1fccda(157)](_0x1fccda(180));
                });
            }), it(_0x5300c7(201), function () {
                const _0x6c7029 = _0x5300c7;
                return this[_0x6c7029(152)]['on'][_0x6c7029(162)](_0x6c7029(151))['yieldsAsync'](0), this['spawnedProcess']['on']['withArgs'](_0x6c7029(194))['yieldsAsync'](0), spawn[_0x6c7029(157)]('--foo');
            });
        }), context(_0x381c71(202), function () {
            const _0x2303d2 = _0x381c71;
            it(_0x2303d2(203), function () {
                const _0x16ceba = _0x2303d2;
                return this[_0x16ceba(152)]['on'][_0x16ceba(162)](_0x16ceba(151))[_0x16ceba(176)](null, 'SIGKILL'), spawn[_0x16ceba(157)](_0x16ceba(180))[_0x16ceba(178)](() => {
                    const _0x50f44f = _0x16ceba;
                    throw new Error(_0x50f44f(204));
                }, _0x39043d => {
                    const _0x5f333f = _0x16ceba;
                    debug(_0x5f333f(205), _0x39043d[_0x5f333f(206)]), snapshot(_0x39043d['message']);
                });
            });
        }), it(_0x381c71(207), function () {
            const _0x1a05f7 = _0x381c71;
            return this[_0x1a05f7(152)]['on'][_0x1a05f7(162)](_0x1a05f7(194))[_0x1a05f7(176)](0), spawn[_0x1a05f7(157)](_0x1a05f7(180))[_0x1a05f7(178)](() => {
                const _0xe97d21 = _0x1a05f7;
                expect(xvfb[_0xe97d21(157)])['not']['to']['be']['called'];
            });
        }), it(_0x381c71(208), function () {
            const _0x36ccf9 = _0x381c71;
            return xvfb[_0x36ccf9(160)][_0x36ccf9(148)](!![]), this[_0x36ccf9(152)]['on'][_0x36ccf9(162)](_0x36ccf9(194))[_0x36ccf9(176)](0), this[_0x36ccf9(152)]['on']['withArgs']('close')[_0x36ccf9(209)](), spawn[_0x36ccf9(157)](_0x36ccf9(180))['then'](() => {
                const _0x26541d = _0x36ccf9;
                expect(xvfb['stop'])['to']['be'][_0x26541d(197)];
            });
        }), it(_0x381c71(210), function () {
            const _0x557568 = _0x381c71;
            return this[_0x557568(152)]['on'][_0x557568(162)](_0x557568(194))[_0x557568(176)](10), spawn[_0x557568(157)]('--foo')['then'](_0x258a5c => {
                const _0xda87e9 = _0x557568;
                expect(_0x258a5c)['to'][_0xda87e9(189)](10);
            });
        }), describe(_0x381c71(211), () => {
            let _0x3ea947;
            beforeEach(() => {
                _0x3ea947 = mockedEnv({ 'DISPLAY': 'test-display' });
            }), afterEach(() => {
                _0x3ea947();
            }), it('retries with xvfb if fails with display exit code', function () {
                const _0x4a0a89 = _0x289f;
                this[_0x4a0a89(152)]['on'][_0x4a0a89(162)](_0x4a0a89(194))[_0x4a0a89(212)]()[_0x4a0a89(176)](1), this[_0x4a0a89(152)]['on'][_0x4a0a89(162)]('close')[_0x4a0a89(213)]()[_0x4a0a89(176)](0);
                const _0x1467db = _0x4a0a89(214);
                return this['spawnedProcess'][_0x4a0a89(215)]['on']['withArgs'](_0x4a0a89(216))[_0x4a0a89(209)](_0x1467db), os[_0x4a0a89(147)][_0x4a0a89(148)](_0x4a0a89(217)), spawn[_0x4a0a89(157)]('--foo')[_0x4a0a89(178)](_0x273392 => {
                    const _0x503139 = _0x4a0a89;
                    expect(xvfb[_0x503139(157)])['to']['have'][_0x503139(218)][_0x503139(197)], expect(xvfb[_0x503139(159)])['to'][_0x503139(219)][_0x503139(218)]['calledOnce'], expect(cp['spawn'])['to'][_0x503139(219)][_0x503139(218)][_0x503139(220)], expect(_0x273392)['to'][_0x503139(189)](0);
                });
            });
        }), it(_0x381c71(221), function () {
            const _0x5365fc = _0x381c71, _0x49f321 = 'the error message';
            return this[_0x5365fc(152)]['on'][_0x5365fc(162)](_0x5365fc(222))[_0x5365fc(176)](new Error(_0x49f321)), spawn[_0x5365fc(157)](_0x5365fc(180))[_0x5365fc(178)](() => {
                const _0x32a18c = _0x5365fc;
                throw new Error(_0x32a18c(204));
            }, _0x4d54ba => {
                const _0x3cf8b3 = _0x5365fc;
                debug('error message', _0x4d54ba[_0x3cf8b3(206)]), expect(_0x4d54ba['message'])['to'][_0x3cf8b3(223)](_0x49f321);
            });
        }), it(_0x381c71(224), function () {
            const _0x143aff = _0x381c71;
            return this[_0x143aff(152)]['on'][_0x143aff(162)](_0x143aff(194))[_0x143aff(176)](0), spawn[_0x143aff(157)](null, { 'detached': !![] })[_0x143aff(178)](() => {
                const _0x4f079b = _0x143aff;
                expect(this['spawnedProcess'][_0x4f079b(225)])['to']['be'][_0x4f079b(197)];
            });
        }), it(_0x381c71(226), function () {
            const _0x39e1d = _0x381c71;
            return this[_0x39e1d(152)]['on'][_0x39e1d(162)](_0x39e1d(194))[_0x39e1d(176)](0), spawn[_0x39e1d(157)]()['then'](() => {
                const _0x34ead9 = _0x39e1d;
                expect(this[_0x34ead9(152)]['unref'])['not']['to']['be'][_0x34ead9(227)];
            });
        }), it(_0x381c71(228), function () {
            const _0x15e1fd = _0x381c71;
            return this[_0x15e1fd(152)]['on'][_0x15e1fd(162)](_0x15e1fd(194))[_0x15e1fd(176)](0), process[_0x15e1fd(229)][_0x15e1fd(230)] = _0x15e1fd(185), spawn[_0x15e1fd(157)]()[_0x15e1fd(178)](() => {
                const _0x22aa79 = _0x15e1fd;
                expect(cp[_0x22aa79(156)][_0x22aa79(231)][_0x22aa79(186)][2][_0x22aa79(229)]['FOO'])['to']['eq'](_0x22aa79(185));
            });
        }), it(_0x381c71(232), function () {
            const _0x3bfe53 = _0x381c71;
            return this[_0x3bfe53(152)]['on']['withArgs'](_0x3bfe53(194))[_0x3bfe53(176)](0), sinon['stub'](util, _0x3bfe53(233))[_0x3bfe53(148)](!![]), sinon[_0x3bfe53(150)](tty, _0x3bfe53(234))[_0x3bfe53(148)](!![]), spawn[_0x3bfe53(157)]([], { 'env': {} })['then'](() => {
                const _0x43c71c = _0x3bfe53;
                snapshot(cp[_0x43c71c(156)][_0x43c71c(231)][_0x43c71c(186)][2][_0x43c71c(229)]);
            });
        }), it('sets windowsHide:false property in windows', function () {
            const _0xdab55b = _0x381c71;
            return this[_0xdab55b(152)]['on']['withArgs']('close')['yieldsAsync'](0), os['platform'][_0xdab55b(148)](_0xdab55b(235)), spawn[_0xdab55b(157)]([], { 'env': {} })[_0xdab55b(178)](() => {
                const _0x143cff = _0xdab55b;
                expect(cp[_0x143cff(156)][_0x143cff(231)][_0x143cff(186)][2]['windowsHide'])['to']['be'][_0x143cff(236)];
            });
        }), it('does not set windowsHide property when in darwin', function () {
            const _0x24ed55 = _0x381c71;
            return this[_0x24ed55(152)]['on'][_0x24ed55(162)](_0x24ed55(194))[_0x24ed55(176)](0), spawn[_0x24ed55(157)]([], { 'env': {} })['then'](() => {
                const _0x145906 = _0x24ed55;
                expect(cp['spawn'][_0x145906(231)][_0x145906(186)][2]['windowsHide'])['to']['be']['undefined'];
            });
        }), it(_0x381c71(237), function () {
            const _0x4ea103 = _0x381c71;
            return this[_0x4ea103(152)]['on'][_0x4ea103(162)](_0x4ea103(194))[_0x4ea103(176)](0), sinon['stub'](util, _0x4ea103(233))[_0x4ea103(148)](![]), sinon[_0x4ea103(150)](tty, _0x4ea103(234))[_0x4ea103(148)](![]), spawn[_0x4ea103(157)]([], { 'env': {} })[_0x4ea103(178)](() => {
                const _0x37bcbc = _0x4ea103;
                snapshot(cp['spawn']['firstCall'][_0x37bcbc(186)][2][_0x37bcbc(229)]);
            });
        }), it(_0x381c71(238), function () {
            const _0x3b5aa2 = _0x381c71;
            return this[_0x3b5aa2(152)]['on'][_0x3b5aa2(162)]('close')[_0x3b5aa2(176)](0), os[_0x3b5aa2(147)][_0x3b5aa2(148)](_0x3b5aa2(235)), xvfb['isNeeded']['returns'](![]), spawn[_0x3b5aa2(157)]()[_0x3b5aa2(178)](() => {
                const _0x329d3c = _0x3b5aa2;
                expect(cp[_0x329d3c(156)][_0x329d3c(231)][_0x329d3c(186)][2][_0x329d3c(239)])['to'][_0x329d3c(188)]['eq'](_0x329d3c(183)), expect(this[_0x329d3c(153)][_0x329d3c(183)], _0x329d3c(240))['to'][_0x329d3c(219)]['been'][_0x329d3c(197)][_0x329d3c(241)]['to'][_0x329d3c(219)][_0x329d3c(218)]['calledWith'](this[_0x329d3c(152)]['stdin']);
            });
        }), it(_0x381c71(242), function () {
            const _0x290bf3 = _0x381c71;
            return this[_0x290bf3(152)]['on'][_0x290bf3(162)](_0x290bf3(194))[_0x290bf3(176)](0), os[_0x290bf3(147)][_0x290bf3(148)]('linux'), xvfb['isNeeded'][_0x290bf3(148)](![]), spawn[_0x290bf3(157)]()[_0x290bf3(178)](() => {
                const _0x35b94f = _0x290bf3;
                expect(cp[_0x35b94f(156)][_0x35b94f(231)][_0x35b94f(186)][2][_0x35b94f(239)])['to']['deep']['eq'](_0x35b94f(182));
            });
        }), it(_0x381c71(243), function () {
            const _0x2a1207 = _0x381c71;
            return this[_0x2a1207(152)]['on']['withArgs'](_0x2a1207(194))[_0x2a1207(176)](0), xvfb[_0x2a1207(160)][_0x2a1207(148)](!![]), os['platform'][_0x2a1207(148)]('linux'), spawn['start']()[_0x2a1207(178)](() => {
                const _0x15b38b = _0x2a1207;
                expect(cp[_0x15b38b(156)][_0x15b38b(231)]['args'][2]['stdio'])['to']['deep']['eq']([
                    'inherit',
                    _0x15b38b(182),
                    'pipe'
                ]);
            });
        }), it(_0x381c71(244), function () {
            const _0x4e4197 = _0x381c71;
            return this['spawnedProcess']['on'][_0x4e4197(162)]('close')[_0x4e4197(176)](0), xvfb[_0x4e4197(160)][_0x4e4197(148)](![]), os[_0x4e4197(147)][_0x4e4197(148)](_0x4e4197(149)), spawn[_0x4e4197(157)]()[_0x4e4197(178)](() => {
                const _0x51d2de = _0x4e4197;
                expect(cp[_0x51d2de(156)][_0x51d2de(231)][_0x51d2de(186)][2]['stdio'])['to']['deep']['eq']([
                    _0x51d2de(182),
                    _0x51d2de(182),
                    _0x51d2de(183)
                ]);
            });
        }), it(_0x381c71(245), function () {
            const _0x58acbc = _0x381c71, _0x138f8e = Buffer[_0x58acbc(246)](_0x58acbc(247));
            return this[_0x58acbc(152)][_0x58acbc(154)][_0x58acbc(183)][_0x58acbc(162)](process[_0x58acbc(154)]), this[_0x58acbc(152)][_0x58acbc(248)][_0x58acbc(183)][_0x58acbc(162)](process[_0x58acbc(248)]), this['spawnedProcess'][_0x58acbc(215)]['on']['withArgs'](_0x58acbc(216))[_0x58acbc(209)](_0x138f8e), this[_0x58acbc(152)]['on']['withArgs'](_0x58acbc(194))[_0x58acbc(176)](0), sinon[_0x58acbc(150)](process['stderr'], _0x58acbc(249))[_0x58acbc(162)](_0x138f8e), os[_0x58acbc(147)][_0x58acbc(148)](_0x58acbc(235)), spawn[_0x58acbc(157)]();
        }), it(_0x381c71(250), function () {
            const _0x2049d7 = _0x381c71, _0x31fc37 = Buffer[_0x2049d7(246)](_0x2049d7(251)), _0x293f18 = Buffer[_0x2049d7(246)](_0x2049d7(252)), _0xd642f8 = Buffer[_0x2049d7(246)](_0x2049d7(247));
            return this[_0x2049d7(152)]['stderr']['on'][_0x2049d7(162)](_0x2049d7(216))[_0x2049d7(212)]()[_0x2049d7(209)](_0x31fc37)[_0x2049d7(213)]()['yields'](_0x293f18)['onThirdCall']()[_0x2049d7(209)](_0xd642f8), this[_0x2049d7(152)]['on']['withArgs'](_0x2049d7(194))[_0x2049d7(176)](0), sinon[_0x2049d7(150)](process['stderr'], _0x2049d7(249))[_0x2049d7(162)](_0xd642f8), os[_0x2049d7(147)][_0x2049d7(148)]('linux'), xvfb[_0x2049d7(160)][_0x2049d7(148)](!![]), spawn[_0x2049d7(157)]()[_0x2049d7(178)](() => {
                const _0x4ec09b = _0x2049d7;
                expect(process[_0x4ec09b(215)][_0x4ec09b(249)])[_0x4ec09b(253)]['to']['be'][_0x4ec09b(254)](_0x31fc37), expect(process['stderr'][_0x4ec09b(249)])[_0x4ec09b(253)]['to']['be'][_0x4ec09b(254)](_0x293f18);
            });
        }), it('does not write to process.stderr when from high sierra warnings', function () {
            const _0x1fc649 = _0x381c71, _0x113fbe = Buffer[_0x1fc649(246)]('2018-05-19 15:30:30.287 Cypress[7850:32145] *** WARNING: Textured Window'), _0x1d280f = Buffer['from'](_0x1fc649(247));
            return this[_0x1fc649(152)][_0x1fc649(215)]['on'][_0x1fc649(162)](_0x1fc649(216))[_0x1fc649(212)]()['yields'](_0x113fbe)[_0x1fc649(213)](_0x1d280f)['yields'](_0x1d280f), this[_0x1fc649(152)]['on'][_0x1fc649(162)]('close')[_0x1fc649(176)](0), sinon[_0x1fc649(150)](process['stderr'], 'write')[_0x1fc649(162)](_0x1d280f), os[_0x1fc649(147)][_0x1fc649(148)](_0x1fc649(149)), spawn[_0x1fc649(157)]()[_0x1fc649(178)](() => {
                const _0x58204d = _0x1fc649;
                expect(process['stderr'][_0x58204d(249)])['not']['to']['be'][_0x58204d(254)](_0x113fbe);
            });
        }), [
            _0x381c71(255),
            'ENOTCONN'
        ][_0x381c71(199)](_0x54f130 => {
            it('catches process.stdin errors and returns when code=' + _0x54f130, function () {
                const _0x1f8f86 = _0x289f;
                return this['spawnedProcess']['on'][_0x1f8f86(162)](_0x1f8f86(194))[_0x1f8f86(176)](0), spawn[_0x1f8f86(157)]()[_0x1f8f86(178)](() => {
                    const _0x32e6f4 = _0x1f8f86;
                    let _0xe5f0c3 = ![];
                    const _0x1d6c75 = () => {
                        const _0x1eb3c4 = _0x289f;
                        _0xe5f0c3 = !![];
                        const _0x437c17 = new Error();
                        return _0x437c17[_0x1eb3c4(256)] = _0x54f130, process['stdin'][_0x1eb3c4(257)]('error', _0x437c17);
                    };
                    expect(_0x1d6c75)[_0x32e6f4(253)]['to'][_0x32e6f4(258)](), expect(_0xe5f0c3)['to']['be'][_0x32e6f4(173)];
                });
            });
        }), it(_0x381c71(259), function () {
            const _0xf73ad5 = _0x381c71;
            return this['spawnedProcess']['on'][_0xf73ad5(162)](_0xf73ad5(194))[_0xf73ad5(176)](0), spawn['start']()['then'](() => {
                const _0x245736 = _0xf73ad5, _0x52108f = () => {
                        const _0x2d3e3f = _0x289f, _0x3326f6 = new Error(_0x2d3e3f(260));
                        return _0x3326f6[_0x2d3e3f(256)] = 'FAILWHALE', process[_0x2d3e3f(154)][_0x2d3e3f(257)](_0x2d3e3f(222), _0x3326f6);
                    };
                expect(_0x52108f)['to'][_0x245736(258)](/wattttt/);
            });
        });
    });
});