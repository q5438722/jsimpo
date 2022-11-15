require(_0x42c3d0(422));
const _ = require(_0x42c3d0(423)), cp = require('child_process'), os = require('os'), tty = require(_0x42c3d0(424)), path = require('path'), EE = require(_0x42c3d0(425)), mockedEnv = require(_0x42c3d0(426)), debug = require(_0x42c3d0(427))(_0x42c3d0(428)), state = require(lib + _0x42c3d0(429)), xvfb = require(lib + _0x42c3d0(430)), spawn = require(lib + _0x42c3d0(431)), verify = require(lib + '/tasks/verify'), util = require(lib + _0x42c3d0(432)), expect = require(_0x42c3d0(433))[_0x42c3d0(434)], snapshot = require('../../support/snapshot'), cwd = process[_0x42c3d0(435)](), defaultBinaryDir = _0x42c3d0(436);
describe(_0x42c3d0(437), function () {
    const _0x8f03c9 = _0x42c3d0, _0x45ddd7 = {
            'YTeaG': _0x8f03c9(438),
            'GXvVS': _0x8f03c9(439),
            'MevCp': _0x8f03c9(440),
            'XgIUX': _0x8f03c9(441),
            'bKUCQ': _0x8f03c9(442),
            'vreBr': _0x8f03c9(443),
            'SPAIH': function (_0x4f2782, _0x9fc3d6, _0x49a4be) {
                return _0x4f2782(_0x9fc3d6, _0x49a4be);
            },
            'mVzMx': _0x8f03c9(444),
            'UArJN': _0x8f03c9(445),
            'yHRcl': _0x8f03c9(446),
            'wdJMX': 'start.js',
            'gdyjx': '--foo',
            'hcpwr': 'bar',
            'Ovinb': function (_0x31bb03, _0x56caed, _0x477199) {
                return _0x31bb03(_0x56caed, _0x477199);
            },
            'OLBss': _0x8f03c9(447),
            'kxsHM': function (_0x287ba8) {
                return _0x287ba8();
            },
            'yLtLS': function (_0x4ff667, _0x538d5c) {
                return _0x4ff667(_0x538d5c);
            },
            'KDCXv': function (_0x5d9a61, _0x1407a5) {
                return _0x5d9a61(_0x1407a5);
            },
            'ZnEBO': function (_0x336690, _0x34c186) {
                return _0x336690(_0x34c186);
            },
            'XkGft': _0x8f03c9(448),
            'UkJov': function (_0x56b8ad, _0x563fad) {
                return _0x56b8ad(_0x563fad);
            },
            'Yfkit': 'isatty',
            'fsqmF': _0x8f03c9(449),
            'fBgez': function (_0x54f9cc, _0x421345) {
                return _0x54f9cc(_0x421345);
            },
            'BshCm': 'inherit',
            'leuPI': 'pipe',
            'yEKcE': function (_0x10b33f, _0x4b0249) {
                return _0x10b33f(_0x4b0249);
            },
            'KVGkO': _0x8f03c9(450),
            'TJqbe': _0x8f03c9(451),
            'exutD': _0x8f03c9(452),
            'vLgVa': _0x8f03c9(453),
            'awrmt': function (_0x2e42aa, _0x9de51f) {
                return _0x2e42aa(_0x9de51f);
            },
            'bzPNr': _0x8f03c9(454),
            'HWNAt': _0x8f03c9(455),
            'NwbRa': 'needsSandbox',
            'SnUbG': _0x8f03c9(456),
            'XZDfM': _0x8f03c9(457),
            'MVJrT': _0x8f03c9(458),
            'RQOMp': _0x8f03c9(459),
            'JEGbU': _0x8f03c9(460),
            'sWlsI': function (_0x164d7e, _0x260690) {
                return _0x164d7e(_0x260690);
            },
            'pHUCQ': 'supportsColor',
            'rYgQP': _0x8f03c9(461),
            'fyAXu': function (_0x1a4d7d, _0x37a08d) {
                return _0x1a4d7d(_0x37a08d);
            },
            'vXUlL': _0x8f03c9(462),
            'RXrlo': _0x8f03c9(463),
            'ZTCML': _0x8f03c9(464),
            'TgVmb': _0x8f03c9(465),
            'AwFkk': function (_0x13504a, _0x45d8d0, _0x22538f) {
                return _0x13504a(_0x45d8d0, _0x22538f);
            },
            'RsyIr': _0x8f03c9(466),
            'bsBed': function (_0x2af72c, _0x586ad7, _0x48d881) {
                return _0x2af72c(_0x586ad7, _0x48d881);
            },
            'tzOMw': _0x8f03c9(467),
            'lfByk': _0x8f03c9(468),
            'Ifthe': function (_0x25d640, _0x2b4fdd, _0x21f3cf) {
                return _0x25d640(_0x2b4fdd, _0x21f3cf);
            },
            'WpIAn': 'closes',
            'ukawK': 'detects kill signal',
            'OXNMV': _0x8f03c9(469),
            'cQAKw': 'resolves with spawned close code in the message',
            'HUiea': function (_0x471e41, _0x444b4d, _0x2188c9) {
                return _0x471e41(_0x444b4d, _0x2188c9);
            },
            'HhNYM': 'Linux display',
            'DVmKB': _0x8f03c9(470),
            'RzvVR': _0x8f03c9(471),
            'GfYwU': function (_0x45082a, _0x52c3fd, _0x1fe63c) {
                return _0x45082a(_0x52c3fd, _0x1fe63c);
            },
            'iJbRq': function (_0x288077, _0xf1cfd4, _0x20a5e8) {
                return _0x288077(_0xf1cfd4, _0x20a5e8);
            },
            'rcxix': function (_0xbfdad1, _0x2a7820, _0x1a0ab5) {
                return _0xbfdad1(_0x2a7820, _0x1a0ab5);
            },
            'evkcP': _0x8f03c9(472),
            'pnADj': _0x8f03c9(473),
            'DcFhE': _0x8f03c9(474),
            'hVLkg': 'inherits when on linux and xvfb isnt needed',
            'kAOHU': function (_0x46a49f, _0x1be195, _0x4deee2) {
                return _0x46a49f(_0x1be195, _0x4deee2);
            },
            'VBZWT': 'uses [inherit, inherit, pipe] when linux and xvfb is needed',
            'paKfp': function (_0x2f24d4, _0x1a8461, _0x46d75b) {
                return _0x2f24d4(_0x1a8461, _0x46d75b);
            },
            'pzTlg': _0x8f03c9(475),
            'Iirrd': function (_0x20744c, _0x423da3, _0x1828d7) {
                return _0x20744c(_0x423da3, _0x1828d7);
            },
            'XrVkY': _0x8f03c9(476),
            'qDiqR': _0x8f03c9(477),
            'jHmjd': _0x8f03c9(478),
            'ZQStj': _0x8f03c9(479),
            'MSDWF': function (_0x347542, _0x3b523d, _0xeeeb12) {
                return _0x347542(_0x3b523d, _0xeeeb12);
            },
            'bwnGQ': _0x8f03c9(480)
        };
    beforeEach(function () {
        const _0x302c9c = _0x8f03c9;
        os['platform'][_0x302c9c(481)](_0x45ddd7[_0x302c9c(482)]), sinon['stub'](process, _0x302c9c(457)), this[_0x302c9c(483)] = {
            'on': sinon[_0x302c9c(484)]()[_0x302c9c(481)](undefined),
            'unref': sinon[_0x302c9c(484)]()[_0x302c9c(481)](undefined),
            'stdin': {
                'on': sinon[_0x302c9c(484)]()[_0x302c9c(481)](undefined),
                'pipe': sinon[_0x302c9c(484)]()[_0x302c9c(481)](undefined)
            },
            'stdout': {
                'on': sinon[_0x302c9c(484)]()[_0x302c9c(481)](undefined),
                'pipe': sinon[_0x302c9c(484)]()['returns'](undefined)
            },
            'stderr': {
                'pipe': sinon[_0x302c9c(484)]()[_0x302c9c(481)](undefined),
                'on': sinon[_0x302c9c(484)]()[_0x302c9c(481)](undefined)
            }
        }, this[_0x302c9c(485)] = new EE(), this['processStdin'][_0x302c9c(486)] = sinon[_0x302c9c(484)]()[_0x302c9c(481)](undefined), sinon[_0x302c9c(484)](process, _0x45ddd7[_0x302c9c(487)])[_0x302c9c(488)](this[_0x302c9c(485)]), sinon['stub'](cp, _0x302c9c(489))[_0x302c9c(481)](this[_0x302c9c(483)]), sinon['stub'](xvfb, _0x45ddd7[_0x302c9c(490)])['resolves'](), sinon[_0x302c9c(484)](xvfb, _0x45ddd7[_0x302c9c(491)])['resolves'](), sinon['stub'](xvfb, _0x302c9c(492))['returns'](![]), sinon[_0x302c9c(484)](state, _0x45ddd7[_0x302c9c(493)])[_0x302c9c(481)](defaultBinaryDir), sinon['stub'](state, _0x45ddd7[_0x302c9c(494)])[_0x302c9c(495)](defaultBinaryDir)[_0x302c9c(481)](_0x302c9c(455));
    }), _0x45ddd7[_0x8f03c9(496)](context, _0x8f03c9(497), () => {
        const _0xcb93a3 = _0x8f03c9;
        _0x45ddd7[_0xcb93a3(498)](it, _0x45ddd7[_0xcb93a3(499)], () => {
            const _0x369e1e = _0xcb93a3, _0x4feb1c = {
                    'JpyhI': function (_0x5e7f6d, _0xd039f4, _0x1229bf) {
                        return _0x5e7f6d(_0xd039f4, _0x1229bf);
                    }
                }, _0x3056b4 = _0x369e1e(500), _0x3ba73d = _[_0x369e1e(501)](_0x3056b4)[_0x369e1e(502)]('\n')[_0x369e1e(503)](_0x369e1e(504))[_0x369e1e(505)]()['value']();
            _[_0x369e1e(506)](_0x3ba73d, _0x6738d7 => {
                const _0x5afb57 = _0x369e1e;
                _0x4feb1c['JpyhI'](expect, spawn[_0x5afb57(507)](_0x6738d7), 'expected line to be garbage: ' + _0x6738d7)['to']['be'][_0x5afb57(508)];
            });
        });
    }), _0x45ddd7['MSDWF'](context, _0x45ddd7[_0x8f03c9(509)], function () {
        const _0x2795ce = _0x8f03c9, _0x4ba298 = {
                'mvoGS': function (_0x7fd3ec, _0x3c328c) {
                    const _0x9e2ea = _0x93e6;
                    return _0x45ddd7[_0x9e2ea(510)](_0x7fd3ec, _0x3c328c);
                },
                'ChwMp': _0x45ddd7[_0x2795ce(511)],
                'NImsk': _0x2795ce(512),
                'OrCjk': _0x45ddd7[_0x2795ce(513)],
                'UTAdr': _0x45ddd7[_0x2795ce(514)],
                'wQvjk': _0x45ddd7[_0x2795ce(515)],
                'mKVMl': function (_0x1c738d, _0x5b1aaa) {
                    const _0xb1574f = _0x2795ce;
                    return _0x45ddd7[_0xb1574f(510)](_0x1c738d, _0x5b1aaa);
                },
                'wjCQk': _0x45ddd7[_0x2795ce(516)],
                'masER': _0x45ddd7[_0x2795ce(517)],
                'RlJeV': function (_0x2d1cb2, _0x2fe455) {
                    return _0x2d1cb2(_0x2fe455);
                },
                'FXsQb': _0x45ddd7[_0x2795ce(518)],
                'eNynE': _0x45ddd7['XZDfM'],
                'WSQtP': _0x2795ce(519),
                'TvvAJ': _0x45ddd7[_0x2795ce(520)],
                'EdyhT': _0x2795ce(521),
                'wQcVt': _0x2795ce(449),
                'qlQqK': function (_0x46fd55, _0x422f0f, _0x3f9c10) {
                    const _0x47dc27 = _0x2795ce;
                    return _0x45ddd7[_0x47dc27(522)](_0x46fd55, _0x422f0f, _0x3f9c10);
                },
                'yRkqB': _0x45ddd7['RQOMp'],
                'RATnx': _0x45ddd7[_0x2795ce(523)],
                'YEdda': function (_0x4d082c, _0x54f104) {
                    const _0x298865 = _0x2795ce;
                    return _0x45ddd7[_0x298865(510)](_0x4d082c, _0x54f104);
                },
                'NZEVR': function (_0x3d01ec, _0x2fa750) {
                    const _0x33e6e6 = _0x2795ce;
                    return _0x45ddd7[_0x33e6e6(524)](_0x3d01ec, _0x2fa750);
                },
                'GTWar': _0x45ddd7[_0x2795ce(525)],
                'UuHBq': _0x45ddd7[_0x2795ce(526)],
                'ocqsc': function (_0x3a741b, _0x31f177) {
                    return _0x45ddd7['sWlsI'](_0x3a741b, _0x31f177);
                },
                'Cnsce': _0x45ddd7[_0x2795ce(527)],
                'RmhXz': function (_0x257461, _0x373a29) {
                    return _0x257461(_0x373a29);
                },
                'wFVRZ': function (_0x5607dd, _0x18ea3b) {
                    return _0x45ddd7['fyAXu'](_0x5607dd, _0x18ea3b);
                },
                'TNFvF': _0x45ddd7[_0x2795ce(528)],
                'ToqBu': _0x45ddd7['vLgVa'],
                'Ttwna': _0x45ddd7[_0x2795ce(529)],
                'tntrq': _0x45ddd7['exutD'],
                'WZtgP': _0x45ddd7[_0x2795ce(482)],
                'rJghw': function (_0x13e993, _0x2a1902) {
                    const _0x3e70c5 = _0x2795ce;
                    return _0x45ddd7[_0x3e70c5(530)](_0x13e993, _0x2a1902);
                },
                'CpCoN': _0x45ddd7[_0x2795ce(531)]
            };
        _0x45ddd7['Ovinb'](it, _0x45ddd7[_0x2795ce(532)], function () {
            const _0x2f4aa2 = _0x2795ce, _0x36dd7b = {
                    'LmfTm': function (_0xc15988, _0x4a77a1) {
                        const _0x1e2f18 = _0x93e6;
                        return _0x4ba298[_0x1e2f18(533)](_0xc15988, _0x4a77a1);
                    },
                    'IOtHT': '/path/to/cypress',
                    'NwnBP': _0x4ba298[_0x2f4aa2(534)],
                    'NTqhC': '--cwd',
                    'nsApF': _0x4ba298[_0x2f4aa2(535)],
                    'yElEd': _0x4ba298['OrCjk']
                };
            return this['spawnedProcess']['on'][_0x2f4aa2(495)](_0x4ba298[_0x2f4aa2(536)])[_0x2f4aa2(537)](-8346 + 1 * 9281 + -935), sinon[_0x2f4aa2(484)](verify, _0x2f4aa2(538))[_0x2f4aa2(481)](![]), spawn['start']('--foo', { 'foo': _0x2f4aa2(539) })[_0x2f4aa2(540)](() => {
                const _0x2164ff = _0x2f4aa2;
                _0x36dd7b['LmfTm'](expect, cp[_0x2164ff(489)])['to']['be'][_0x2164ff(541)](_0x36dd7b[_0x2164ff(542)], [
                    '--',
                    _0x36dd7b[_0x2164ff(543)],
                    _0x36dd7b[_0x2164ff(544)],
                    cwd
                ], {
                    'detached': ![],
                    'stdio': [
                        _0x36dd7b[_0x2164ff(545)],
                        _0x36dd7b[_0x2164ff(545)],
                        _0x36dd7b['yElEd']
                    ]
                });
            });
        }), it(_0x45ddd7[_0x2795ce(546)], function () {
            const _0x36b71f = _0x2795ce;
            return this['spawnedProcess']['on'][_0x36b71f(495)](_0x4ba298[_0x36b71f(536)])[_0x36b71f(537)](9114 + 5 * 1678 + -17504), sinon['stub'](verify, _0x4ba298['masER'])[_0x36b71f(481)](!![]), spawn[_0x36b71f(440)](_0x4ba298['ChwMp'], { 'foo': 'bar' })[_0x36b71f(540)](() => {
                const _0x5b245c = _0x36b71f, _0x1afe01 = cp[_0x5b245c(489)]['firstCall'][_0x5b245c(547)][_0x5b245c(548)](1907 + 1 * 7822 + -9729 * 1, -6268 + 773 * 1 + 5497), _0x219da0 = [
                        '--no-sandbox',
                        '--',
                        _0x5b245c(549),
                        _0x4ba298[_0x5b245c(550)],
                        cwd
                    ];
                _0x4ba298[_0x5b245c(551)](expect, _0x1afe01)['to'][_0x5b245c(552)]['equal']([
                    _0x4ba298[_0x5b245c(553)],
                    _0x219da0
                ]);
            });
        }), _0x45ddd7[_0x2795ce(554)](it, _0x45ddd7[_0x2795ce(555)], function () {
            const _0x3dde3a = _0x2795ce;
            this[_0x3dde3a(483)]['on'][_0x3dde3a(495)](_0x45ddd7[_0x3dde3a(514)])[_0x3dde3a(537)](-35 * 37 + -1 * 5443 + -3 * -2246), sinon[_0x3dde3a(484)](verify, _0x3dde3a(538))[_0x3dde3a(481)](![]);
            const _0x5987e0 = path[_0x3dde3a(556)]('..', _0x45ddd7[_0x3dde3a(557)], _0x45ddd7['wdJMX']);
            return spawn[_0x3dde3a(440)](_0x45ddd7[_0x3dde3a(511)], {
                'dev': !![],
                'foo': _0x3dde3a(539)
            })['then'](() => {
                const _0x51b6dd = _0x3dde3a;
                _0x4ba298[_0x51b6dd(558)](expect, cp['spawn'])['to']['be']['calledWithMatch'](_0x4ba298[_0x51b6dd(559)], [
                    _0x5987e0,
                    '--',
                    _0x4ba298['ChwMp'],
                    _0x4ba298[_0x51b6dd(550)],
                    cwd
                ], {
                    'detached': ![],
                    'stdio': [
                        _0x4ba298['NImsk'],
                        _0x4ba298['NImsk'],
                        _0x51b6dd(486)
                    ]
                });
            });
        }), _0x45ddd7[_0x2795ce(560)](it, _0x45ddd7[_0x2795ce(561)], function () {
            const _0x3a6df2 = _0x2795ce;
            this[_0x3a6df2(483)]['on']['withArgs'](_0x45ddd7['UArJN'])[_0x3a6df2(537)](6812 + -311 + -6501), sinon[_0x3a6df2(484)](verify, _0x3a6df2(538))[_0x3a6df2(481)](!![]);
            const _0x2e0bce = path[_0x3a6df2(556)]('..', _0x45ddd7['yHRcl'], _0x45ddd7[_0x3a6df2(562)]);
            return spawn[_0x3a6df2(440)](_0x3a6df2(549), {
                'dev': !![],
                'foo': _0x45ddd7[_0x3a6df2(525)]
            })[_0x3a6df2(540)](() => {
                const _0x155902 = _0x3a6df2;
                _0x4ba298[_0x155902(558)](expect, cp[_0x155902(489)])['to']['be']['calledWithMatch'](_0x4ba298['FXsQb'], [
                    _0x2e0bce,
                    '--',
                    _0x155902(549),
                    _0x4ba298['wQvjk'],
                    cwd
                ], {
                    'detached': ![],
                    'stdio': [
                        _0x155902(512),
                        _0x4ba298[_0x155902(535)],
                        _0x4ba298[_0x155902(563)]
                    ]
                });
            });
        }), _0x45ddd7[_0x2795ce(560)](it, _0x45ddd7['lfByk'], function () {
            const _0x59d3a7 = _0x2795ce;
            return xvfb[_0x59d3a7(492)][_0x59d3a7(481)](!![]), this['spawnedProcess']['on'][_0x59d3a7(495)](_0x4ba298[_0x59d3a7(536)])[_0x59d3a7(537)](4497 + 19 * 374 + -11603), spawn[_0x59d3a7(440)](_0x59d3a7(549))[_0x59d3a7(540)](() => {
                const _0x28577c = _0x59d3a7;
                _0x4ba298['RlJeV'](expect, xvfb[_0x28577c(440)])['to']['be'][_0x28577c(564)];
            });
        }), _0x45ddd7['Ifthe'](context, _0x45ddd7[_0x2795ce(565)], function () {
            const _0x447946 = _0x2795ce;
            [
                _0x4ba298[_0x447946(536)],
                _0x4ba298[_0x447946(566)]
            ][_0x447946(567)](_0x2bba0c => {
                const _0x78942e = _0x447946, _0xeecb07 = { 'Pdiko': '--foo' };
                it(_0x78942e(568) + _0x2bba0c + _0x78942e(569), function () {
                    const _0x42c3a5 = _0x78942e;
                    return this[_0x42c3a5(483)]['on']['withArgs'](_0x2bba0c)[_0x42c3a5(537)](2 * -3743 + 3752 + -1867 * -2), spawn[_0x42c3a5(440)](_0xeecb07['Pdiko']);
                });
            }), it(_0x447946(570), function () {
                const _0x76bfaa = _0x447946;
                return this['spawnedProcess']['on'][_0x76bfaa(495)](_0x76bfaa(457))[_0x76bfaa(537)](124 * -31 + 1599 + 2245), this['spawnedProcess']['on'][_0x76bfaa(495)](_0x4ba298[_0x76bfaa(536)])[_0x76bfaa(537)](5932 * -1 + 7040 + -1108), spawn['start'](_0x4ba298['ChwMp']);
            });
        }), _0x45ddd7[_0x2795ce(571)](context, _0x45ddd7[_0x2795ce(572)], function () {
            const _0x5cda01 = _0x2795ce, _0x2c175d = {
                    'CsDCb': function (_0x5bd648, _0x247244, _0x2b784b) {
                        return _0x45ddd7['Ovinb'](_0x5bd648, _0x247244, _0x2b784b);
                    },
                    'VTayu': function (_0x488b33, _0x3b3022) {
                        return _0x488b33(_0x3b3022);
                    }
                };
            _0x45ddd7['Ovinb'](it, _0x45ddd7[_0x5cda01(573)], function () {
                const _0x39a82a = _0x5cda01, _0x479c08 = { 'emghY': _0x4ba298[_0x39a82a(574)] };
                return this[_0x39a82a(483)]['on'][_0x39a82a(495)](_0x4ba298[_0x39a82a(566)])[_0x39a82a(537)](null, _0x4ba298[_0x39a82a(575)]), spawn[_0x39a82a(440)](_0x4ba298[_0x39a82a(534)])['then'](() => {
                    const _0x8c06ce = _0x39a82a;
                    throw new Error(_0x479c08[_0x8c06ce(576)]);
                }, _0x4e9277 => {
                    const _0x28fb30 = _0x39a82a;
                    _0x2c175d[_0x28fb30(577)](debug, _0x28fb30(578), _0x4e9277[_0x28fb30(579)]), _0x2c175d[_0x28fb30(580)](snapshot, _0x4e9277[_0x28fb30(579)]);
                });
            });
        }), it(_0x2795ce(581), function () {
            const _0x5bd4f7 = _0x2795ce;
            return this[_0x5bd4f7(483)]['on'][_0x5bd4f7(495)](_0x45ddd7[_0x5bd4f7(514)])['yieldsAsync'](6199 + -8001 + -53 * -34), spawn[_0x5bd4f7(440)](_0x45ddd7[_0x5bd4f7(511)])[_0x5bd4f7(540)](() => {
                const _0x18a17d = _0x5bd4f7;
                expect(xvfb[_0x18a17d(440)])['not']['to']['be'][_0x18a17d(582)];
            });
        }), _0x45ddd7[_0x2795ce(571)](it, _0x45ddd7[_0x2795ce(583)], function () {
            const _0xc0091f = _0x2795ce;
            return xvfb[_0xc0091f(492)]['returns'](!![]), this[_0xc0091f(483)]['on']['withArgs']('close')['yieldsAsync'](21 * 123 + -7593 + -501 * -10), this[_0xc0091f(483)]['on']['withArgs'](_0xc0091f(445))['yields'](), spawn[_0xc0091f(440)](_0x4ba298[_0xc0091f(534)])[_0xc0091f(540)](() => {
                const _0x175d3a = _0xc0091f;
                expect(xvfb[_0x175d3a(441)])['to']['be'][_0x175d3a(564)];
            });
        }), it(_0x45ddd7['cQAKw'], function () {
            const _0x3c2cd8 = _0x2795ce;
            return this['spawnedProcess']['on'][_0x3c2cd8(495)]('close')['yieldsAsync'](-1222 * -6 + -95 * -12 + -1 * 8462), spawn[_0x3c2cd8(440)](_0x45ddd7[_0x3c2cd8(511)])[_0x3c2cd8(540)](_0x1c4045 => {
                expect(_0x1c4045)['to']['equal'](-120 * -51 + -9333 + 3223);
            });
        }), _0x45ddd7[_0x2795ce(584)](describe, _0x45ddd7[_0x2795ce(585)], () => {
            const _0x4780f6 = _0x2795ce, _0x2a78c4 = {
                    'JAylg': function (_0x4153e7) {
                        const _0x335832 = _0x93e6;
                        return _0x45ddd7[_0x335832(586)](_0x4153e7);
                    },
                    'zmyva': function (_0x1a3d55, _0x4d9d7d) {
                        const _0x25a1fa = _0x93e6;
                        return _0x45ddd7[_0x25a1fa(587)](_0x1a3d55, _0x4d9d7d);
                    },
                    'alxOO': function (_0x18ccb8, _0x5e6168) {
                        return _0x45ddd7['yLtLS'](_0x18ccb8, _0x5e6168);
                    }
                };
            let _0x599940;
            _0x45ddd7[_0x4780f6(588)](beforeEach, () => {
                const _0x48e47b = _0x4780f6;
                _0x599940 = _0x4ba298[_0x48e47b(558)](mockedEnv, { 'DISPLAY': _0x48e47b(589) });
            }), _0x45ddd7[_0x4780f6(590)](afterEach, () => {
                const _0x38c90e = _0x4780f6;
                _0x2a78c4[_0x38c90e(591)](_0x599940);
            }), it(_0x45ddd7[_0x4780f6(592)], function () {
                const _0x32e3c8 = _0x4780f6;
                this[_0x32e3c8(483)]['on'][_0x32e3c8(495)](_0x4ba298[_0x32e3c8(536)])[_0x32e3c8(593)]()['yieldsAsync'](1411 + 3 * 1999 + -3 * 2469), this[_0x32e3c8(483)]['on'][_0x32e3c8(495)](_0x4ba298[_0x32e3c8(536)])[_0x32e3c8(594)]()[_0x32e3c8(537)](-3869 + -1088 + 4957);
                const _0x31ebc6 = _0x4ba298['EdyhT'];
                return this['spawnedProcess'][_0x32e3c8(595)]['on'][_0x32e3c8(495)](_0x32e3c8(452))['yields'](_0x31ebc6), os[_0x32e3c8(596)][_0x32e3c8(481)](_0x4ba298[_0x32e3c8(597)]), spawn[_0x32e3c8(440)](_0x4ba298[_0x32e3c8(534)])[_0x32e3c8(540)](_0x3a7b01 => {
                    const _0x363277 = _0x32e3c8;
                    _0x2a78c4[_0x363277(598)](expect, xvfb[_0x363277(440)])['to'][_0x363277(599)][_0x363277(600)][_0x363277(564)], expect(xvfb[_0x363277(441)])['to'][_0x363277(599)][_0x363277(600)][_0x363277(564)], _0x2a78c4[_0x363277(601)](expect, cp[_0x363277(489)])['to'][_0x363277(599)][_0x363277(600)][_0x363277(602)], expect(_0x3a7b01)['to'][_0x363277(603)](-3 * -1114 + -3770 + -214 * -2);
                });
            });
        }), _0x45ddd7[_0x2795ce(584)](it, _0x45ddd7[_0x2795ce(604)], function () {
            const _0x25b8bb = _0x2795ce, _0x356763 = {
                    'EPAyy': _0x4ba298[_0x25b8bb(574)],
                    'GqXrw': function (_0x341600, _0x16f418, _0x23e435) {
                        const _0x33898f = _0x25b8bb;
                        return _0x4ba298[_0x33898f(605)](_0x341600, _0x16f418, _0x23e435);
                    },
                    'lRZAn': _0x25b8bb(578),
                    'oYHrh': function (_0x2c2032, _0x17687f) {
                        const _0x549459 = _0x25b8bb;
                        return _0x4ba298[_0x549459(558)](_0x2c2032, _0x17687f);
                    }
                }, _0x16c0ec = _0x4ba298[_0x25b8bb(606)];
            return this['spawnedProcess']['on'][_0x25b8bb(495)](_0x4ba298[_0x25b8bb(607)])[_0x25b8bb(537)](new Error(_0x16c0ec)), spawn[_0x25b8bb(440)](_0x4ba298[_0x25b8bb(534)])[_0x25b8bb(540)](() => {
                const _0x3d7977 = _0x25b8bb;
                throw new Error(_0x356763[_0x3d7977(608)]);
            }, _0x209d00 => {
                const _0x444534 = _0x25b8bb;
                _0x356763[_0x444534(609)](debug, _0x356763[_0x444534(610)], _0x209d00[_0x444534(579)]), _0x356763[_0x444534(611)](expect, _0x209d00[_0x444534(579)])['to'][_0x444534(612)](_0x16c0ec);
            });
        }), it(_0x45ddd7[_0x2795ce(613)], function () {
            const _0x2ae86d = _0x2795ce, _0x1fa66b = {
                    'mrXOO': function (_0xc5f4d6, _0x2b1769) {
                        const _0x218b9d = _0x93e6;
                        return _0x45ddd7[_0x218b9d(614)](_0xc5f4d6, _0x2b1769);
                    }
                };
            return this[_0x2ae86d(483)]['on'][_0x2ae86d(495)](_0x45ddd7[_0x2ae86d(514)])[_0x2ae86d(537)](-101 * 46 + 1 * -9241 + 13887 * 1), spawn[_0x2ae86d(440)](null, { 'detached': !![] })['then'](() => {
                const _0x54f5e6 = _0x2ae86d;
                _0x1fa66b[_0x54f5e6(615)](expect, this[_0x54f5e6(483)][_0x54f5e6(616)])['to']['be'][_0x54f5e6(564)];
            });
        }), _0x45ddd7[_0x2795ce(584)](it, _0x2795ce(617), function () {
            const _0x3f5366 = _0x2795ce;
            return this[_0x3f5366(483)]['on'][_0x3f5366(495)](_0x45ddd7[_0x3f5366(514)])[_0x3f5366(537)](1728 + 6599 + -11 * 757), spawn[_0x3f5366(440)]()['then'](() => {
                const _0x28c175 = _0x3f5366;
                _0x4ba298[_0x28c175(618)](expect, this[_0x28c175(483)][_0x28c175(616)])[_0x28c175(619)]['to']['be'][_0x28c175(582)];
            });
        }), _0x45ddd7[_0x2795ce(620)](it, _0x2795ce(621), function () {
            const _0x1cbceb = _0x2795ce;
            return this[_0x1cbceb(483)]['on'][_0x1cbceb(495)](_0x45ddd7[_0x1cbceb(514)])[_0x1cbceb(537)](6164 + 2946 + -9110), process[_0x1cbceb(622)][_0x1cbceb(623)] = _0x45ddd7['hcpwr'], spawn['start']()[_0x1cbceb(540)](() => {
                const _0x36ff64 = _0x1cbceb;
                _0x4ba298[_0x36ff64(624)](expect, cp[_0x36ff64(489)]['firstCall'][_0x36ff64(547)][-1508 + 4581 + -3071][_0x36ff64(622)][_0x36ff64(623)])['to']['eq'](_0x4ba298[_0x36ff64(625)]);
            });
        }), _0x45ddd7[_0x2795ce(626)](it, 'forces colors and streams when supported', function () {
            const _0x120500 = _0x2795ce;
            return this[_0x120500(483)]['on']['withArgs'](_0x120500(445))[_0x120500(537)](-1 * 454 + -5457 + 5911), sinon[_0x120500(484)](util, _0x4ba298[_0x120500(627)])[_0x120500(481)](!![]), sinon['stub'](tty, 'isatty')[_0x120500(481)](!![]), spawn[_0x120500(440)]([], { 'env': {} })['then'](() => {
                const _0x7eda85 = _0x120500;
                _0x4ba298[_0x7eda85(624)](snapshot, cp[_0x7eda85(489)][_0x7eda85(628)]['args'][-1 * 4223 + -8 * 145 + 5385][_0x7eda85(622)]);
            });
        }), _0x45ddd7[_0x2795ce(629)](it, _0x45ddd7[_0x2795ce(630)], function () {
            const _0xaf94f8 = _0x2795ce, _0x5af90f = {
                    'rwkug': function (_0x11b2c1, _0x3b9f06) {
                        return _0x11b2c1(_0x3b9f06);
                    }
                };
            return this['spawnedProcess']['on'][_0xaf94f8(495)](_0x45ddd7['UArJN'])[_0xaf94f8(537)](2 * 2837 + -4682 * 2 + 3690), os[_0xaf94f8(596)][_0xaf94f8(481)](_0xaf94f8(461)), spawn[_0xaf94f8(440)]([], { 'env': {} })[_0xaf94f8(540)](() => {
                const _0x1dc20d = _0xaf94f8;
                _0x5af90f[_0x1dc20d(631)](expect, cp['spawn']['firstCall']['args'][104 + 6629 + 127 * -53][_0x1dc20d(632)])['to']['be'][_0x1dc20d(633)];
            });
        }), _0x45ddd7['rcxix'](it, _0x45ddd7['pnADj'], function () {
            const _0x2e9102 = _0x2795ce, _0x393bc2 = {
                    'HgpQz': function (_0x1e6158, _0x2392ab) {
                        return _0x4ba298['ocqsc'](_0x1e6158, _0x2392ab);
                    }
                };
            return this['spawnedProcess']['on'][_0x2e9102(495)](_0x4ba298[_0x2e9102(536)])[_0x2e9102(537)](1 * 2807 + 2087 + -4894), spawn[_0x2e9102(440)]([], { 'env': {} })[_0x2e9102(540)](() => {
                const _0x42908e = _0x2e9102;
                _0x393bc2[_0x42908e(634)](expect, cp[_0x42908e(489)]['firstCall'][_0x42908e(547)][-9961 + 3782 + 6181][_0x42908e(632)])['to']['be']['undefined'];
            });
        }), _0x45ddd7['rcxix'](it, _0x2795ce(635), function () {
            const _0x26a3b1 = _0x2795ce;
            return this['spawnedProcess']['on']['withArgs'](_0x45ddd7['UArJN'])['yieldsAsync'](9733 + -6683 + -1 * 3050), sinon['stub'](util, _0x26a3b1(636))[_0x26a3b1(481)](![]), sinon[_0x26a3b1(484)](tty, _0x45ddd7[_0x26a3b1(637)])[_0x26a3b1(481)](![]), spawn[_0x26a3b1(440)]([], { 'env': {} })[_0x26a3b1(540)](() => {
                const _0x2430c6 = _0x26a3b1;
                snapshot(cp['spawn'][_0x2430c6(628)][_0x2430c6(547)][-5780 + -617 * 3 + 7633][_0x2430c6(622)]);
            });
        }), _0x45ddd7[_0x2795ce(629)](it, _0x45ddd7['DcFhE'], function () {
            const _0x42ae06 = _0x2795ce, _0x5ba22e = { 'KWApP': _0x4ba298[_0x42ae06(563)] };
            return this['spawnedProcess']['on'][_0x42ae06(495)](_0x4ba298[_0x42ae06(536)])['yieldsAsync'](-122 * -5 + -1050 + 440), os[_0x42ae06(596)][_0x42ae06(481)](_0x4ba298[_0x42ae06(638)]), xvfb['isNeeded'][_0x42ae06(481)](![]), spawn['start']()['then'](() => {
                const _0x33ce84 = _0x42ae06;
                expect(cp['spawn'][_0x33ce84(628)][_0x33ce84(547)][-6348 + 2428 * -2 + 11206][_0x33ce84(639)])['to'][_0x33ce84(552)]['eq'](_0x5ba22e[_0x33ce84(640)]), expect(this['processStdin']['pipe'], _0x33ce84(641))['to'][_0x33ce84(599)][_0x33ce84(600)][_0x33ce84(564)]['and']['to'][_0x33ce84(599)][_0x33ce84(600)][_0x33ce84(642)](this[_0x33ce84(483)][_0x33ce84(439)]);
            });
        }), _0x45ddd7['rcxix'](it, _0x45ddd7['hVLkg'], function () {
            const _0x56ef6e = _0x2795ce;
            return this[_0x56ef6e(483)]['on']['withArgs'](_0x56ef6e(445))[_0x56ef6e(537)](534 * -15 + 4635 + 3375), os[_0x56ef6e(596)][_0x56ef6e(481)](_0x4ba298[_0x56ef6e(597)]), xvfb[_0x56ef6e(492)][_0x56ef6e(481)](![]), spawn[_0x56ef6e(440)]()[_0x56ef6e(540)](() => {
                const _0x3a923a = _0x56ef6e;
                _0x4ba298['RmhXz'](expect, cp[_0x3a923a(489)][_0x3a923a(628)][_0x3a923a(547)][-727 * -1 + 2 * -838 + 317 * 3][_0x3a923a(639)])['to'][_0x3a923a(552)]['eq'](_0x4ba298['NImsk']);
            });
        }), _0x45ddd7[_0x2795ce(643)](it, _0x45ddd7[_0x2795ce(644)], function () {
            const _0x5577df = _0x2795ce;
            return this[_0x5577df(483)]['on'][_0x5577df(495)](_0x45ddd7[_0x5577df(514)])[_0x5577df(537)](2210 + -9627 + 7417), xvfb[_0x5577df(492)][_0x5577df(481)](!![]), os['platform'][_0x5577df(481)](_0x45ddd7[_0x5577df(645)]), spawn[_0x5577df(440)]()[_0x5577df(540)](() => {
                const _0x543c51 = _0x5577df;
                _0x4ba298[_0x543c51(646)](expect, cp['spawn']['firstCall'][_0x543c51(547)][-2283 + 6415 + -35 * 118]['stdio'])['to'][_0x543c51(552)]['eq']([
                    _0x543c51(512),
                    _0x4ba298['NImsk'],
                    _0x4ba298[_0x543c51(563)]
                ]);
            });
        }), it('uses [inherit, inherit, pipe] on darwin', function () {
            const _0xb1e380 = _0x2795ce, _0x21aa63 = {
                    'RMIJp': function (_0x2acf2d, _0x583c82) {
                        const _0x2cb6d6 = _0x93e6;
                        return _0x45ddd7[_0x2cb6d6(647)](_0x2acf2d, _0x583c82);
                    },
                    'TdXVW': _0x45ddd7['BshCm'],
                    'uDOwG': _0x45ddd7[_0xb1e380(513)]
                };
            return this[_0xb1e380(483)]['on'][_0xb1e380(495)](_0xb1e380(445))[_0xb1e380(537)](-6317 * -1 + -2770 + 1 * -3547), xvfb[_0xb1e380(492)][_0xb1e380(481)](![]), os[_0xb1e380(596)][_0xb1e380(481)](_0x45ddd7[_0xb1e380(482)]), spawn[_0xb1e380(440)]()[_0xb1e380(540)](() => {
                const _0x54bb9c = _0xb1e380;
                _0x21aa63['RMIJp'](expect, cp['spawn'][_0x54bb9c(628)][_0x54bb9c(547)][-1 * -5086 + -6524 + 1440][_0x54bb9c(639)])['to']['deep']['eq']([
                    _0x21aa63[_0x54bb9c(648)],
                    _0x21aa63[_0x54bb9c(648)],
                    _0x21aa63[_0x54bb9c(649)]
                ]);
            });
        }), _0x45ddd7[_0x2795ce(650)](it, _0x45ddd7[_0x2795ce(651)], function () {
            const _0x76734d = _0x2795ce, _0x3320b5 = Buffer['from'](_0x4ba298[_0x76734d(652)]);
            return this[_0x76734d(483)][_0x76734d(439)][_0x76734d(486)][_0x76734d(495)](process[_0x76734d(439)]), this[_0x76734d(483)][_0x76734d(653)][_0x76734d(486)][_0x76734d(495)](process[_0x76734d(653)]), this[_0x76734d(483)][_0x76734d(595)]['on'][_0x76734d(495)](_0x76734d(452))[_0x76734d(654)](_0x3320b5), this[_0x76734d(483)]['on']['withArgs'](_0x4ba298[_0x76734d(536)])[_0x76734d(537)](-7501 + -5277 + 12778), sinon[_0x76734d(484)](process[_0x76734d(595)], _0x4ba298['ToqBu'])['withArgs'](_0x3320b5), os['platform'][_0x76734d(481)](_0x4ba298['Cnsce']), spawn['start']();
        }), _0x45ddd7['Iirrd'](it, _0x2795ce(655), function () {
            const _0x21988e = _0x2795ce, _0x5041c3 = {
                    'cqqUl': function (_0x15a1cf, _0x212899) {
                        const _0x23576f = _0x93e6;
                        return _0x45ddd7[_0x23576f(647)](_0x15a1cf, _0x212899);
                    },
                    'SQYut': function (_0x13bc03, _0x377389) {
                        const _0x2794a8 = _0x93e6;
                        return _0x45ddd7[_0x2794a8(656)](_0x13bc03, _0x377389);
                    }
                }, _0x148906 = Buffer['from'](_0x21988e(657)), _0x17a9f7 = Buffer['from'](_0x45ddd7[_0x21988e(658)]), _0x569901 = Buffer[_0x21988e(659)](_0x45ddd7[_0x21988e(528)]);
            return this[_0x21988e(483)]['stderr']['on'][_0x21988e(495)](_0x45ddd7['exutD'])[_0x21988e(593)]()[_0x21988e(654)](_0x148906)['onSecondCall']()[_0x21988e(654)](_0x17a9f7)[_0x21988e(660)]()[_0x21988e(654)](_0x569901), this[_0x21988e(483)]['on'][_0x21988e(495)](_0x21988e(445))[_0x21988e(537)](-84 * -61 + 6409 + -607 * 19), sinon['stub'](process['stderr'], _0x45ddd7[_0x21988e(661)])[_0x21988e(495)](_0x569901), os[_0x21988e(596)][_0x21988e(481)](_0x45ddd7['fsqmF']), xvfb['isNeeded'][_0x21988e(481)](!![]), spawn[_0x21988e(440)]()['then'](() => {
                const _0x4280fb = _0x21988e;
                _0x5041c3[_0x4280fb(662)](expect, process[_0x4280fb(595)][_0x4280fb(453)])[_0x4280fb(619)]['to']['be'][_0x4280fb(642)](_0x148906), _0x5041c3[_0x4280fb(663)](expect, process[_0x4280fb(595)][_0x4280fb(453)])[_0x4280fb(619)]['to']['be'][_0x4280fb(642)](_0x17a9f7);
            });
        }), _0x45ddd7[_0x2795ce(496)](it, _0x45ddd7[_0x2795ce(664)], function () {
            const _0x1a92d9 = _0x2795ce, _0x7b603f = {
                    'yxajK': function (_0x4ee51f, _0x29a1b6) {
                        return _0x4ba298['wFVRZ'](_0x4ee51f, _0x29a1b6);
                    }
                }, _0x3b8b90 = Buffer[_0x1a92d9(659)](_0x4ba298[_0x1a92d9(665)]), _0x100689 = Buffer['from'](_0x4ba298[_0x1a92d9(652)]);
            return this[_0x1a92d9(483)][_0x1a92d9(595)]['on'][_0x1a92d9(495)](_0x4ba298['tntrq'])['onFirstCall']()[_0x1a92d9(654)](_0x3b8b90)[_0x1a92d9(594)](_0x100689)[_0x1a92d9(654)](_0x100689), this[_0x1a92d9(483)]['on'][_0x1a92d9(495)](_0x1a92d9(445))[_0x1a92d9(537)](2 * 2257 + 1 * -1673 + -1 * 2841), sinon[_0x1a92d9(484)](process[_0x1a92d9(595)], _0x4ba298[_0x1a92d9(666)])[_0x1a92d9(495)](_0x100689), os[_0x1a92d9(596)][_0x1a92d9(481)](_0x4ba298[_0x1a92d9(667)]), spawn[_0x1a92d9(440)]()[_0x1a92d9(540)](() => {
                const _0x1daefa = _0x1a92d9;
                _0x7b603f[_0x1daefa(668)](expect, process['stderr'][_0x1daefa(453)])['not']['to']['be'][_0x1daefa(642)](_0x3b8b90);
            });
        }), [
            _0x45ddd7[_0x2795ce(669)],
            _0x45ddd7[_0x2795ce(670)]
        ]['forEach'](_0x4e86e8 => {
            const _0x4dc1e0 = _0x2795ce, _0x30ecfa = {
                    'nqXJJ': function (_0x3efb4e, _0x5da2af) {
                        const _0xdcc7ad = _0x93e6;
                        return _0x4ba298[_0xdcc7ad(671)](_0x3efb4e, _0x5da2af);
                    },
                    'xrTpe': 'close'
                };
            _0x4ba298[_0x4dc1e0(605)](it, _0x4dc1e0(672) + _0x4e86e8, function () {
                const _0xa70e87 = _0x4dc1e0, _0x26a770 = {
                        'DMOcI': _0xa70e87(460),
                        'LfXcu': function (_0x419acf, _0x273585) {
                            const _0x2c19ec = _0xa70e87;
                            return _0x30ecfa[_0x2c19ec(673)](_0x419acf, _0x273585);
                        }
                    };
                return this[_0xa70e87(483)]['on'][_0xa70e87(495)](_0x30ecfa['xrTpe'])[_0xa70e87(537)](7167 + 7682 + 14849 * -1), spawn[_0xa70e87(440)]()['then'](() => {
                    const _0x492eec = _0xa70e87, _0x36ac74 = { 'tGxFM': _0x26a770[_0x492eec(674)] };
                    let _0x19e9de = ![];
                    const _0x6ce535 = () => {
                        const _0x14a769 = _0x492eec;
                        _0x19e9de = !![];
                        const _0xa47472 = new Error();
                        return _0xa47472['code'] = _0x4e86e8, process[_0x14a769(439)][_0x14a769(675)](_0x36ac74[_0x14a769(676)], _0xa47472);
                    };
                    expect(_0x6ce535)[_0x492eec(619)]['to'][_0x492eec(677)](), _0x26a770[_0x492eec(678)](expect, _0x19e9de)['to']['be'][_0x492eec(508)];
                });
            });
        }), _0x45ddd7['Iirrd'](it, _0x45ddd7[_0x2795ce(679)], function () {
            const _0xa08496 = _0x2795ce, _0x12149a = {
                    'AaHhL': _0x4ba298[_0xa08496(680)],
                    'rajZf': _0xa08496(681),
                    'lhtjs': _0x4ba298[_0xa08496(607)]
                };
            return this['spawnedProcess']['on'][_0xa08496(495)](_0x4ba298['UTAdr'])[_0xa08496(537)](-1690 + 2 * -3695 + -454 * -20), spawn[_0xa08496(440)]()[_0xa08496(540)](() => {
                const _0xd0dbc8 = () => {
                    const _0x5059ae = _0x93e6, _0x2ddf2 = new Error(_0x12149a[_0x5059ae(682)]);
                    return _0x2ddf2[_0x5059ae(683)] = _0x12149a[_0x5059ae(684)], process[_0x5059ae(439)][_0x5059ae(675)](_0x12149a[_0x5059ae(685)], _0x2ddf2);
                };
                expect(_0xd0dbc8)['to']['throw'](/wattttt/);
            });
        });
    });
});