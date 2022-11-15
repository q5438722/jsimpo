const bundleWalk = require('npm-bundled'), BundleWalker = bundleWalk[_0xa9b245(463)], BundleWalkerSync = bundleWalk[_0xa9b245(464)], ignoreWalk = require(_0xa9b245(465)), IgnoreWalker = ignoreWalk[_0xa9b245(466)], IgnoreWalkerSync = ignoreWalk[_0xa9b245(467)], rootBuiltinRules = Symbol(_0xa9b245(468)), packageNecessaryRules = Symbol('package-necessary-rules'), path = require(_0xa9b245(469)), normalizePackageBin = require(_0xa9b245(470)), packageMustHaveFileNames = _0xa9b245(471), packageMustHaves = '@(' + packageMustHaveFileNames + _0xa9b245(472), packageMustHavesRE = new RegExp('^(' + packageMustHaveFileNames + _0xa9b245(473), 'i'), fs = require('fs'), glob = require(_0xa9b245(474)), defaultRules = [
        '.npmignore',
        _0xa9b245(475),
        _0xa9b245(476),
        _0xa9b245(477),
        _0xa9b245(478),
        _0xa9b245(479),
        '**/.git/**',
        _0xa9b245(480),
        '**/.hg/**',
        _0xa9b245(481),
        '/.lock-wscript',
        _0xa9b245(482),
        '/build/config.gypi',
        'npm-debug.log',
        _0xa9b245(483),
        _0xa9b245(484),
        '.DS_Store',
        _0xa9b245(485),
        _0xa9b245(486),
        _0xa9b245(487),
        '*.orig',
        '/package-lock.json',
        _0xa9b245(488),
        _0xa9b245(489)
    ], nameIsBadForWindows = _0x3be6c1 => /\*/[_0xa9b245(490)](_0x3be6c1), npmWalker = _0x34dd7f => class _0x2b6a67 extends _0x34dd7f {
        constructor(_0x1d34b6) {
            const _0x2705d8 = _0xa9b245, _0x35839d = {
                    'AvIzD': function (_0x115032, _0x1fdbaf) {
                        return _0x115032 || _0x1fdbaf;
                    },
                    'yBZsG': _0x2705d8(475),
                    'CvCYW': function (_0x1a55b9, _0x5341b2) {
                        return _0x1a55b9 + _0x5341b2;
                    }
                };
            _0x1d34b6 = _0x35839d[_0x2705d8(491)](_0x1d34b6, {}), _0x1d34b6[_0x2705d8(492)] = [
                rootBuiltinRules,
                _0x2705d8(493),
                _0x2705d8(494),
                _0x35839d[_0x2705d8(495)],
                packageNecessaryRules
            ], _0x1d34b6[_0x2705d8(496)] = ![], _0x1d34b6[_0x2705d8(469)] = _0x1d34b6[_0x2705d8(469)] || process[_0x2705d8(497)]();
            const _0x43eedf = /^(?:\/node_modules\/(?:@[^/]+\/[^/]+|[^/]+)\/)*\/node_modules(?:\/@[^/]+)?$/, _0xc3e06c = _0x1d34b6[_0x2705d8(498)] ? _0x1d34b6[_0x2705d8(498)][_0x2705d8(499)] : _0x1d34b6[_0x2705d8(469)], _0x278f21 = _0x1d34b6[_0x2705d8(469)][_0x2705d8(500)](/\\/g, '/')[_0x2705d8(501)](_0xc3e06c[_0x2705d8(502)]);
            _0x1d34b6[_0x2705d8(503)] = _0x43eedf[_0x2705d8(490)](_0x278f21), super(_0x1d34b6);
            if (!this['parent']) {
                this['bundled'] = _0x1d34b6[_0x2705d8(504)] || [], this[_0x2705d8(505)] = Array[_0x2705d8(506)](new Set(this[_0x2705d8(504)][_0x2705d8(507)](_0x1bf7a8 => /^@/[_0x2705d8(490)](_0x1bf7a8))[_0x2705d8(508)](_0x4db758 => _0x4db758[_0x2705d8(509)]('/')[-1817 * -3 + 7225 + 2 * -6338])));
                const _0x13f21d = _0x35839d[_0x2705d8(510)](defaultRules[_0x2705d8(511)]('\n'), '\n');
                this['packageJsonCache'] = _0x1d34b6['packageJsonCache'] || new Map(), super[_0x2705d8(512)](rootBuiltinRules, _0x13f21d, _0x5c1706 => _0x5c1706);
            } else
                this['bundled'] = [], this[_0x2705d8(505)] = [], this['packageJsonCache'] = this[_0x2705d8(498)]['packageJsonCache'];
        }
        ['onReaddir'](_0x332e53) {
            const _0x59461b = _0xa9b245, _0x5c87a4 = {
                    'DmLnf': _0x59461b(493),
                    'hxRke': function (_0x2024e8, _0x4b0129) {
                        return _0x2024e8 !== _0x4b0129;
                    }
                };
            !this[_0x59461b(498)] && (_0x332e53 = _0x332e53[_0x59461b(507)](_0x28ae5d => _0x28ae5d !== _0x59461b(513) && !(_0x28ae5d === _0x59461b(514) && this[_0x59461b(504)]['length'] === -7211 + 9194 + -1983)));
            if (this['parent'] || !_0x332e53[_0x59461b(515)](_0x5c87a4[_0x59461b(516)]))
                return super[_0x59461b(517)](_0x332e53);
            const _0x66a9b1 = path['resolve'](this[_0x59461b(469)], _0x59461b(493));
            if (this[_0x59461b(518)][_0x59461b(519)](_0x66a9b1)) {
                const _0x48f0bc = this['packageJsonCache']['get'](_0x66a9b1);
                if (!_0x48f0bc || _0x5c87a4[_0x59461b(520)](typeof _0x48f0bc, _0x59461b(521)))
                    return this[_0x59461b(522)](_0x332e53);
                return this['getPackageFiles'](_0x332e53, JSON[_0x59461b(523)](_0x48f0bc));
            }
            this['readPackageJson'](_0x332e53);
        }
        ['onReadPackageJson'](_0x2e2ffd, _0x17a70d, _0x453b8c) {
            const _0x6d04b4 = _0xa9b245, _0x48e1b9 = { 'KQAkI': _0x6d04b4(524) };
            if (_0x17a70d)
                this[_0x6d04b4(525)](_0x48e1b9[_0x6d04b4(526)], _0x17a70d);
            else
                this['getPackageFiles'](_0x2e2ffd, _0x453b8c);
        }
        [_0xa9b245(527)](_0x2fd2b5) {
            const _0x5a4f6b = _0xa9b245, _0x4bf36d = {
                    'cYhVn': function (_0x7e872b, _0x24e04d) {
                        return _0x7e872b + _0x24e04d;
                    },
                    'hBNCc': _0x5a4f6b(528),
                    'VPugb': _0x5a4f6b(529),
                    'APbOF': _0x5a4f6b(530)
                }, _0x3cfc23 = [];
            if (_0x2fd2b5[_0x5a4f6b(531)])
                _0x3cfc23[_0x5a4f6b(532)](_0x4bf36d['cYhVn']('/', _0x2fd2b5[_0x5a4f6b(531)]));
            if (_0x2fd2b5[_0x5a4f6b(533)])
                _0x3cfc23[_0x5a4f6b(532)](_0x4bf36d['cYhVn']('/', _0x2fd2b5[_0x5a4f6b(533)]));
            if (_0x2fd2b5[_0x5a4f6b(534)]) {
                for (const _0x3ae855 in _0x2fd2b5[_0x5a4f6b(534)])
                    _0x3cfc23[_0x5a4f6b(532)](_0x4bf36d[_0x5a4f6b(535)]('/', _0x2fd2b5[_0x5a4f6b(534)][_0x3ae855]));
            }
            return _0x3cfc23[_0x5a4f6b(532)](_0x4bf36d[_0x5a4f6b(536)], _0x4bf36d[_0x5a4f6b(537)], _0x4bf36d[_0x5a4f6b(538)], packageMustHaves), _0x3cfc23;
        }
        ['getPackageFiles'](_0x258b31, _0x2da609) {
            const _0x5e3076 = _0xa9b245, _0x1fdfdb = {
                    'DflSD': function (_0x1f99f5, _0xcac8ba) {
                        return _0x1f99f5 === _0xcac8ba;
                    },
                    'gppCh': _0x5e3076(524),
                    'nMWWX': function (_0x3dd797, _0xb0ab3a) {
                        return _0x3dd797 === _0xb0ab3a;
                    },
                    'hyoUN': function (_0x4beeb4, _0x28fbe7) {
                        return _0x4beeb4(_0x28fbe7);
                    },
                    'izQKb': function (_0x4af554, _0x33c1e6) {
                        return _0x4af554(_0x33c1e6);
                    },
                    'VWbLv': _0x5e3076(493),
                    'FtGqU': 'node_modules'
                };
            try {
                _0x2da609 = _0x1fdfdb[_0x5e3076(539)](normalizePackageBin, JSON[_0x5e3076(540)](_0x2da609[_0x5e3076(541)]()));
            } catch (_0x4b90bf) {
                return super[_0x5e3076(517)](_0x258b31);
            }
            const _0x3e0022 = path['resolve'](this[_0x5e3076(469)], _0x1fdfdb[_0x5e3076(542)]);
            this[_0x5e3076(518)][_0x5e3076(543)](_0x3e0022, _0x2da609);
            if (!Array[_0x5e3076(544)](_0x2da609[_0x5e3076(545)]))
                return super[_0x5e3076(517)](_0x258b31);
            _0x2da609['files'][_0x5e3076(532)](...this[_0x5e3076(527)](_0x2da609));
            if ((_0x2da609[_0x5e3076(546)] || _0x2da609[_0x5e3076(547)]) && _0x258b31[_0x5e3076(515)](_0x1fdfdb[_0x5e3076(548)]))
                _0x2da609[_0x5e3076(545)][_0x5e3076(532)](_0x1fdfdb[_0x5e3076(548)]);
            const _0x17e65d = Array[_0x5e3076(506)](new Set(_0x2da609[_0x5e3076(545)]))[_0x5e3076(549)]((_0x519f27, _0x3db0b3) => {
                const _0x3c3f91 = _0x5e3076, _0x5a0c64 = _0x3db0b3[_0x3c3f91(550)](/^!+/);
                if (_0x5a0c64)
                    _0x3db0b3 = _0x3db0b3[_0x3c3f91(501)](_0x5a0c64[7799 + -5678 + -2121]['length']);
                _0x3db0b3 = _0x3db0b3[_0x3c3f91(500)](/^\/+/, '');
                const _0x55e03e = _0x5a0c64 && _0x1fdfdb[_0x3c3f91(551)](_0x5a0c64[-1 * -681 + -1 * -4642 + -5323 * 1]['length'] % (7655 * -1 + 8372 + -715), 3739 + -1940 + -1798);
                return _0x519f27[_0x3c3f91(532)]({
                    'pattern': _0x3db0b3,
                    'negate': _0x55e03e
                }), _0x519f27;
            }, []);
            let _0x4ed109 = _0x17e65d[_0x5e3076(502)];
            const _0x19fd3f = new Set(), _0x10fb95 = new Set(), _0x4d22e7 = [], _0x15ade5 = (_0x586caf, _0x22d938, _0x6ab4c4, _0x156393, _0x5f08ee) => {
                    const _0xb80d14 = _0x5e3076;
                    if (_0x6ab4c4)
                        return this[_0xb80d14(525)](_0x1fdfdb[_0xb80d14(552)], _0x6ab4c4);
                    _0x4d22e7[_0x5f08ee] = {
                        'negate': _0x22d938,
                        'fileList': _0x156393
                    };
                    if (_0x1fdfdb[_0xb80d14(553)](--_0x4ed109, -8182 + 3145 + 5037))
                        _0x1fdfdb[_0xb80d14(554)](_0x201263, _0x4d22e7);
                }, _0x201263 = _0x1695a3 => {
                    const _0x3ddc61 = _0x5e3076;
                    for (const {
                                negate: _0x7eef99,
                                fileList: _0x39b211
                            } of _0x1695a3) {
                        _0x7eef99 ? _0x39b211[_0x3ddc61(555)](_0x31012d => {
                            const _0x286363 = _0x3ddc61;
                            _0x31012d = _0x31012d['replace'](/\/+$/, ''), _0x19fd3f['delete'](_0x31012d), _0x10fb95[_0x286363(556)](_0x31012d);
                        }) : _0x39b211[_0x3ddc61(555)](_0x35e8e9 => {
                            const _0x5ac774 = _0x3ddc61;
                            _0x35e8e9 = _0x35e8e9['replace'](/\/+$/, ''), _0x19fd3f[_0x5ac774(556)](_0x35e8e9), _0x10fb95[_0x5ac774(557)](_0x35e8e9);
                        });
                    }
                    const _0x377d3c = Array['from'](_0x19fd3f);
                    _0x2da609['files'] = _0x377d3c[_0x3ddc61(558)](Array['from'](_0x10fb95)[_0x3ddc61(508)](_0x5d90bb => '!' + _0x5d90bb));
                    const _0x130ae3 = Array[_0x3ddc61(506)](new Set(_0x377d3c[_0x3ddc61(508)](_0x194c3e => _0x194c3e['replace'](/^\/+/, ''))));
                    super[_0x3ddc61(517)](_0x130ae3);
                };
            _0x17e65d[_0x5e3076(555)](({
                pattern: _0x18696e,
                negate: _0x48f1b2
            }, _0x41d05e) => this[_0x5e3076(559)](_0x18696e, (_0x534593, _0x4b0c9a) => _0x15ade5(_0x18696e, _0x48f1b2, _0x534593, _0x4b0c9a, _0x41d05e)));
        }
        [_0xa9b245(560)](_0xf6ff4f, _0x1cdfef) {
            const _0x254e67 = _0xa9b245, _0xf79a1f = {
                    'ljomC': function (_0x50352a, _0x155688) {
                        return _0x50352a + _0x155688;
                    },
                    'JzMQy': function (_0x40cdfa, _0x52ed39) {
                        return _0x40cdfa === _0x52ed39;
                    },
                    'WohgB': _0x254e67(493),
                    'mVlxf': function (_0x434148, _0xf76a3f) {
                        return _0x434148 + _0xf76a3f;
                    },
                    'bQaPd': function (_0x30226e, _0x33b888) {
                        return _0x30226e + _0x33b888;
                    },
                    'MYitZ': function (_0xad03be, _0x3c6a8f) {
                        return _0xad03be !== _0x3c6a8f;
                    },
                    'AFRag': function (_0x15636f, _0x51329a) {
                        return _0x15636f === _0x51329a;
                    },
                    'LLbFF': _0x254e67(561),
                    'uGzDQ': _0x254e67(562)
                }, _0x2c641e = this[_0x254e67(469)]['substr'](_0xf79a1f['ljomC'](this[_0x254e67(499)]['length'], -4 * 2427 + 3709 * 2 + 29 * 79)), _0x43984b = /^node_modules\/(@[^/]+\/?[^/]+|[^/]+)(\/.*)?$/, _0x5b0889 = !this[_0x254e67(498)], _0x189283 = _0x5b0889 && _0x43984b[_0x254e67(490)](_0xf6ff4f) ? _0xf6ff4f[_0x254e67(500)](_0x43984b, '$1') : null, _0x2d8ced = _0x5b0889 && _0xf79a1f[_0x254e67(563)](_0xf6ff4f, _0x254e67(514)), _0x5d1535 = _0x5b0889 && _0xf79a1f['JzMQy'](_0xf6ff4f, _0xf79a1f[_0x254e67(564)]);
            return /^node_modules($|\/)/i[_0x254e67(490)](_0x2c641e) ? this[_0x254e67(498)]['filterEntry'](_0xf79a1f[_0x254e67(565)](_0xf79a1f['bQaPd'](this[_0x254e67(566)], '/'), _0xf6ff4f), _0x1cdfef) : _0x189283 ? _0xf79a1f[_0x254e67(567)](this[_0x254e67(504)][_0x254e67(568)](_0x189283), -(9972 * -1 + 1 * -4456 + -47 * -307)) || _0xf79a1f[_0x254e67(567)](this['bundledScopes'][_0x254e67(568)](_0x189283), -(-636 + -1550 + 2187)) : _0x2d8ced ? !!this[_0x254e67(504)][_0x254e67(502)] : _0x5d1535 ? !![] : packageMustHavesRE[_0x254e67(490)](_0xf6ff4f) ? !![] : _0x5b0889 && (_0xf79a1f[_0x254e67(569)](_0xf6ff4f, _0xf79a1f['LLbFF']) || _0xf6ff4f === _0xf79a1f['WohgB']) ? !![] : _0x5b0889 && _0xf79a1f['AFRag'](_0xf6ff4f, _0xf79a1f[_0x254e67(570)]) ? ![] : super[_0x254e67(560)](_0xf6ff4f, _0x1cdfef);
        }
        [_0xa9b245(571)]() {
            const _0x182bef = _0xa9b245;
            if (this[_0x182bef(572)][_0x182bef(494)])
                this[_0x182bef(572)][_0x182bef(475)] = null;
            this[_0x182bef(571)] = super[_0x182bef(571)], super[_0x182bef(571)]();
        }
        [_0xa9b245(573)](_0x418412, _0x5cc782) {
            const _0x3cc47a = _0xa9b245, _0x37d4fc = {
                    'lvJoY': function (_0x58452c, _0x5d9c90) {
                        return _0x58452c === _0x5d9c90;
                    },
                    'gvIRg': _0x3cc47a(493),
                    'GSXpu': function (_0x1513f9) {
                        return _0x1513f9();
                    }
                }, _0x4b3b0b = path[_0x3cc47a(574)](this[_0x3cc47a(469)], _0x418412);
            if (_0x37d4fc[_0x3cc47a(575)](_0x418412, _0x37d4fc[_0x3cc47a(576)]) && this[_0x3cc47a(498)])
                _0x37d4fc[_0x3cc47a(577)](_0x5cc782);
            else {
                if (this[_0x3cc47a(518)][_0x3cc47a(519)](_0x4b3b0b))
                    this[_0x3cc47a(578)](_0x4b3b0b, this[_0x3cc47a(518)][_0x3cc47a(579)](_0x4b3b0b), _0x5cc782);
                else
                    super['addIgnoreFile'](_0x418412, _0x5cc782);
            }
        }
        [_0xa9b245(578)](_0x5a0fa5, _0x1a30d7, _0x262f33) {
            const _0x561c93 = _0xa9b245, _0x4fcac7 = {
                    'fSzeL': 'package.json',
                    'pHWKf': function (_0x4d5848, _0x2068d3) {
                        return _0x4d5848 + _0x2068d3;
                    }
                };
            this[_0x561c93(518)][_0x561c93(543)](_0x5a0fa5, _0x1a30d7);
            if (Array[_0x561c93(544)](_0x1a30d7['files']))
                super[_0x561c93(512)](_0x4fcac7[_0x561c93(580)], _0x4fcac7[_0x561c93(581)](_0x1a30d7[_0x561c93(545)][_0x561c93(508)](_0x55d5dd => '!' + _0x55d5dd)[_0x561c93(511)]('\n'), '\n'), _0x262f33);
            else {
                const _0x1cabeb = this['mustHaveFilesFromPackage'](_0x1a30d7)['map'](_0x34d1ff => '!' + _0x34d1ff), _0x183513 = _0x4fcac7[_0x561c93(581)](_0x1cabeb['join']('\n'), '\n');
                super['onReadIgnoreFile'](packageNecessaryRules, _0x183513, _0x262f33);
            }
        }
        [_0xa9b245(582)](_0x431801, _0x5a5843, _0x4598c8, _0x4b7184) {
            const _0x436425 = _0xa9b245, _0x137fa3 = {
                    'XVDUd': function (_0x22cd6a, _0x5b372e) {
                        return _0x22cd6a(_0x5b372e);
                    }
                };
            if (_0x137fa3[_0x436425(583)](nameIsBadForWindows, _0x431801))
                _0x4b7184();
            else
                super[_0x436425(582)](_0x431801, _0x5a5843, _0x4598c8, _0x4b7184);
        }
        ['onstat'](_0x2d481a, _0x208fa5, _0x40c091, _0x52da51, _0x398cc7) {
            const _0x3f721b = _0xa9b245, _0x5f11a9 = {
                    'pwmXG': function (_0x23ea8b) {
                        return _0x23ea8b();
                    }
                };
            if (_0x2d481a[_0x3f721b(584)]())
                _0x5f11a9['pwmXG'](_0x398cc7);
            else
                super['onstat'](_0x2d481a, _0x208fa5, _0x40c091, _0x52da51, _0x398cc7);
        }
        [_0xa9b245(512)](_0xca2cb8, _0x4e29d3, _0x1ff8be) {
            const _0x207e88 = _0xa9b245, _0x16cf17 = {
                    'UkKWN': function (_0x3044d5, _0x56d3fe) {
                        return _0x3044d5 === _0x56d3fe;
                    },
                    'IPclT': _0x207e88(493),
                    'HegDs': function (_0x4dc760) {
                        return _0x4dc760();
                    }
                };
            if (_0x16cf17[_0x207e88(585)](_0xca2cb8, _0x16cf17[_0x207e88(586)]))
                try {
                    const _0x10316c = path[_0x207e88(574)](this[_0x207e88(469)], _0xca2cb8);
                    this[_0x207e88(578)](_0x10316c, JSON[_0x207e88(540)](_0x4e29d3), _0x1ff8be);
                } catch (_0x535d58) {
                    _0x16cf17[_0x207e88(587)](_0x1ff8be);
                }
            else
                super['onReadIgnoreFile'](_0xca2cb8, _0x4e29d3, _0x1ff8be);
        }
        [_0xa9b245(588)](_0x27dcdf, _0x4ada0a) {
            const _0x44bacd = _0xa9b245, _0x2b982e = {
                    'VdmKo': function (_0x527bbc, _0x940521, _0x266731) {
                        return _0x527bbc(_0x940521, _0x266731);
                    }
                };
            return _0x2b982e[_0x44bacd(589)](sort, _0x27dcdf, _0x4ada0a);
        }
    };
function _0x1a97(_0x1b993e, _0x5ee920) {
    return _0x1a97 = function (_0x291305, _0x51af2e) {
        _0x291305 = _0x291305 - (-16 * 251 + -4 * -1124 + 29 * -1);
        let _0xa21dcf = _0x31ef[_0x291305];
        return _0xa21dcf;
    }, _0x1a97(_0x1b993e, _0x5ee920);
}
class Walker extends npmWalker(IgnoreWalker) {
    [_0xa9b245(559)](_0x70d01c, _0x58bdeb) {
        const _0x4ea74f = _0xa9b245, _0x4d4d75 = {
                'mZwyv': function (_0x4f67f3, _0x4275fc, _0x1ed57a, _0x2c44d3) {
                    return _0x4f67f3(_0x4275fc, _0x1ed57a, _0x2c44d3);
                }
            };
        _0x4d4d75[_0x4ea74f(590)](glob, _0x70d01c, {
            'dot': !![],
            'cwd': this[_0x4ea74f(469)],
            'nocase': !![]
        }, _0x58bdeb);
    }
    [_0xa9b245(522)](_0x2ce7be) {
        const _0xc7597b = _0xa9b245, _0x360037 = {
                'LabLj': function (_0x91024f, _0x187e66) {
                    return _0x91024f + _0x187e66;
                },
                'UHWeF': _0xc7597b(528)
            };
        fs['readFile'](_0x360037['LabLj'](this[_0xc7597b(469)], _0x360037[_0xc7597b(591)]), (_0x46f486, _0x16d5db) => this[_0xc7597b(592)](_0x2ce7be, _0x46f486, _0x16d5db));
    }
    ['walker'](_0x4209a6, _0x8c7609) {
        const _0x23c63d = _0xa9b245;
        new Walker(this[_0x23c63d(593)](_0x4209a6))['on'](_0x23c63d(594), _0x8c7609)[_0x23c63d(595)]();
    }
}
class WalkerSync extends npmWalker(IgnoreWalkerSync) {
    [_0xa9b245(559)](_0x30963d, _0x1b1882) {
        const _0x17fbe7 = _0xa9b245;
        _0x1b1882(null, glob[_0x17fbe7(596)](_0x30963d, {
            'dot': !![],
            'cwd': this[_0x17fbe7(469)],
            'nocase': !![]
        }));
    }
    [_0xa9b245(522)](_0x311a35) {
        const _0x2ebb60 = _0xa9b245, _0x340270 = { 'WGnYI': _0x2ebb60(528) }, _0x2dab6a = this['path'] + _0x340270[_0x2ebb60(597)];
        try {
            this[_0x2ebb60(592)](_0x311a35, null, fs[_0x2ebb60(598)](_0x2dab6a));
        } catch (_0x174c22) {
            this[_0x2ebb60(592)](_0x311a35, _0x174c22);
        }
    }
    [_0xa9b245(599)](_0x14c636, _0xa4e6db) {
        const _0x2a964f = _0xa9b245, _0x171948 = {
                'SgZHB': function (_0x587512) {
                    return _0x587512();
                }
            };
        new WalkerSync(this[_0x2a964f(593)](_0x14c636))['start'](), _0x171948[_0x2a964f(600)](_0xa4e6db);
    }
}
const walk = (_0x4920ed, _0x4bb50f) => {
        const _0x2394e9 = _0xa9b245, _0x5dd1b7 = {
                'QbnwX': _0x2394e9(594),
                'AqCgW': _0x2394e9(524),
                'jjbUx': function (_0x4be935, _0x501452) {
                    return _0x4be935 || _0x501452;
                }
            };
        _0x4920ed = _0x5dd1b7[_0x2394e9(601)](_0x4920ed, {});
        const _0x82dead = new Promise((_0x3989a7, _0x2dbb1e) => {
            const _0x151028 = _0x2394e9, _0x4ddfe8 = new BundleWalker(_0x4920ed);
            _0x4ddfe8['on'](_0x5dd1b7[_0x151028(602)], _0x194789 => {
                const _0x21f6ae = _0x151028;
                _0x4920ed[_0x21f6ae(504)] = _0x194789, _0x4920ed[_0x21f6ae(518)] = _0x4ddfe8[_0x21f6ae(518)], new Walker(_0x4920ed)['on'](_0x5dd1b7[_0x21f6ae(602)], _0x3989a7)['on'](_0x5dd1b7[_0x21f6ae(603)], _0x2dbb1e)[_0x21f6ae(595)]();
            }), _0x4ddfe8['start']();
        });
        return _0x4bb50f ? _0x82dead['then'](_0x2f17fd => _0x4bb50f(null, _0x2f17fd), _0x4bb50f) : _0x82dead;
    }, walkSync = _0x42e71b => {
        const _0x332689 = _0xa9b245;
        _0x42e71b = _0x42e71b || {};
        const _0x54a47b = new BundleWalkerSync(_0x42e71b)[_0x332689(595)]();
        _0x42e71b['bundled'] = _0x54a47b[_0x332689(604)], _0x42e71b[_0x332689(518)] = _0x54a47b[_0x332689(518)];
        const _0x3f1943 = new WalkerSync(_0x42e71b);
        return _0x3f1943[_0x332689(595)](), _0x3f1943['result'];
    }, sort = (_0x4ed9ad, _0x546bb3) => {
        const _0x472e63 = _0xa9b245, _0x402e60 = path['extname'](_0x4ed9ad)['toLowerCase'](), _0x352852 = path[_0x472e63(605)](_0x546bb3)[_0x472e63(606)](), _0x385018 = path[_0x472e63(566)](_0x4ed9ad)[_0x472e63(606)](), _0x4c16c1 = path['basename'](_0x546bb3)[_0x472e63(606)]();
        return _0x402e60['localeCompare'](_0x352852, 'en') || _0x385018['localeCompare'](_0x4c16c1, 'en') || _0x4ed9ad['localeCompare'](_0x546bb3, 'en');
    };
module[_0xa9b245(607)] = walk, walk[_0xa9b245(596)] = walkSync, walk['Walker'] = Walker, walk[_0xa9b245(467)] = WalkerSync;