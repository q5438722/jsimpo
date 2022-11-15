function _0xca03(_0x47cb6e, _0x56c6d1) {
    return _0xca03 = function (_0x184487, _0x160c9a) {
        _0x184487 = _0x184487 - (-4254 + -4587 + 9315);
        let _0x3d10b5 = _0x7ab5[_0x184487];
        return _0x3d10b5;
    }, _0xca03(_0x47cb6e, _0x56c6d1);
}
const fs = Plugin['fs'], path = Plugin['path'], createHash = Npm['require']('crypto')['createHash'], assert = Npm[_0x5982e4(484)](_0x5982e4(485)), LRU = Npm[_0x5982e4(484)](_0x5982e4(486));
CachingCompilerBase = class CachingCompilerBase {
    constructor({
        compilerName: _0x264dc2,
        defaultCacheSize: _0x467599,
        maxParallelism: maxParallelism = -1259 * -7 + -1691 + -7102
    }) {
        const _0x33d1e9 = _0x5982e4, _0x420a25 = {
                'TjHQD': _0x33d1e9(487),
                'PrdZJ': 'METEOR_',
                'LZQOE': _0x33d1e9(488),
                'fqifB': function (_0x587375, _0x9d731a) {
                    return _0x587375 + _0x9d731a;
                },
                'NuTGh': 'DEBUG'
            };
        this[_0x33d1e9(489)] = _0x264dc2, this[_0x33d1e9(490)] = maxParallelism;
        const _0x5881c8 = _0x264dc2[_0x33d1e9(491)]()[_0x33d1e9(492)](_0x420a25[_0x33d1e9(493)], '_')['replace'](/[^A-Z0-9_]/g, ''), _0x1d3c2f = _0x420a25[_0x33d1e9(494)] + _0x5881c8 + _0x420a25['LZQOE'], _0x4b343c = _0x420a25[_0x33d1e9(495)](_0x1d3c2f, _0x420a25[_0x33d1e9(496)]);
        this['_cacheDebugEnabled'] = !!process[_0x33d1e9(497)][_0x4b343c];
        const _0x53250b = _0x420a25[_0x33d1e9(495)](_0x1d3c2f, 'SIZE');
        this['_cacheSize'] = +process['env'][_0x53250b] || _0x467599, this[_0x33d1e9(498)] = null, this[_0x33d1e9(499)] = 1037 + 7810 + -8847, this['_afterLinkCallbacks'] = [];
    }
    ['getCacheKey'](_0x301387) {
        const _0x219b01 = _0x5982e4, _0x19e9fd = {
                'JSwXR': function (_0x5c20e2, _0x313799) {
                    return _0x5c20e2(_0x313799);
                },
                'qNOTt': 'CachingCompiler subclass should implement getCacheKey!'
            };
        throw _0x19e9fd[_0x219b01(500)](Error, _0x19e9fd['qNOTt']);
    }
    [_0x5982e4(501)](_0x405181, _0xd039f8) {
        const _0x5117bb = _0x5982e4, _0x4872c2 = { 'mQSYK': _0x5117bb(502) };
        throw Error(_0x4872c2[_0x5117bb(503)]);
    }
    ['compileResultSize'](_0x103608) {
        const _0x233082 = _0x5982e4, _0x11a27c = { 'BYgRM': _0x233082(504) };
        throw Error(_0x11a27c[_0x233082(505)]);
    }
    ['stringifyCompileResult'](_0xf1f153) {
        const _0x52dfe7 = _0x5982e4;
        return JSON[_0x52dfe7(506)](_0xf1f153);
    }
    [_0x5982e4(507)](_0x459001) {
        return this['_parseJSONOrNull'](_0x459001);
    }
    [_0x5982e4(508)](_0x503a8d) {
        const _0x284a44 = _0x5982e4, _0x251ed0 = {
                'MdcMp': function (_0x582a71, _0x14aaf9) {
                    return _0x582a71 instanceof _0x14aaf9;
                }
            };
        try {
            return JSON[_0x284a44(509)](_0x503a8d);
        } catch (_0x1ee16e) {
            if (_0x251ed0[_0x284a44(510)](_0x1ee16e, SyntaxError))
                return null;
            throw _0x1ee16e;
        }
    }
    ['_cacheDebug'](_0x6e4ed2) {
        const _0x256e65 = _0x5982e4;
        if (!this['_cacheDebugEnabled'])
            return;
        console[_0x256e65(511)](_0x256e65(512) + this[_0x256e65(489)] + '): ' + _0x6e4ed2);
    }
    ['setDiskCacheDirectory'](_0x557815) {
        const _0x9136b5 = _0x5982e4, _0x4272c7 = {
                'PsWRe': function (_0x2ce368, _0x192607) {
                    return _0x2ce368(_0x192607);
                }
            };
        if (this[_0x9136b5(498)])
            throw _0x4272c7[_0x9136b5(513)](Error, _0x9136b5(514));
        this[_0x9136b5(498)] = _0x557815;
    }
    ['sourceMapSize'](_0xf7c2e9) {
        const _0x1e67ea = _0x5982e4, _0x1415b3 = {
                'ndwTe': function (_0x7cb675, _0xd6c308) {
                    return _0x7cb675 + _0xd6c308;
                }
            };
        if (!_0xf7c2e9)
            return -2640 + -7 * -643 + 1861 * -1;
        return _0x1415b3[_0x1e67ea(515)](_0xf7c2e9['mappings']['length'], (_0xf7c2e9[_0x1e67ea(516)] || [])['reduce'](function (_0x10c49f, _0x3ae86d) {
            const _0x4e6477 = _0x1e67ea;
            return _0x1415b3[_0x4e6477(515)](_0x10c49f, _0x3ae86d ? _0x3ae86d['length'] : 1 * -4883 + 2 * -2385 + -197 * -49);
        }, -991 * -1 + -5185 * -1 + -32 * 193));
    }
    [_0x5982e4(517)]() {
        const _0x1a581c = _0x5982e4, _0x10297a = {
                'PPHOY': function (_0xc40e3) {
                    return _0xc40e3();
                }
            };
        this[_0x1a581c(518)][_0x1a581c(519)](9510 + -9006 + -504)[_0x1a581c(520)](_0x43ab6c => {
            _0x10297a['PPHOY'](_0x43ab6c);
        });
    }
    [_0x5982e4(521)](_0x26a064) {
        const _0x2bf32e = _0x5982e4, _0x4ee5ac = {
                'BWwPZ': _0x2bf32e(522),
                'XDWVD': function (_0x19d161, _0x16b37) {
                    return _0x19d161 + _0x16b37;
                },
                'VSpIV': _0x2bf32e(523),
                'ronLh': function (_0x3bc036, _0xdc5426) {
                    return _0x3bc036 === _0xdc5426;
                },
                'vVisQ': _0x2bf32e(524),
                'krerJ': function (_0x24fe46, _0x2eeea8) {
                    return _0x24fe46 + _0x2eeea8;
                },
                'tjuxM': _0x2bf32e(525),
                'EfKYK': _0x2bf32e(526),
                'ncJMf': function (_0x52dcfe, _0x2b60b6) {
                    return _0x52dcfe + _0x2b60b6;
                },
                'KyJLV': 'hex'
            }, _0xac9d13 = createHash(_0x4ee5ac[_0x2bf32e(527)]);
        let _0xb547b3 = typeof _0x26a064;
        _0x4ee5ac[_0x2bf32e(528)](_0x26a064, null) && (_0xb547b3 = _0x4ee5ac[_0x2bf32e(529)]);
        _0xac9d13[_0x2bf32e(530)](_0x4ee5ac[_0x2bf32e(531)](_0xb547b3, '\0'));
        switch (_0xb547b3) {
        case _0x4ee5ac[_0x2bf32e(532)]:
            const _0x57d577 = Object['keys'](_0x26a064);
            !Array[_0x2bf32e(533)](_0x26a064) && _0x57d577[_0x2bf32e(534)]();
            _0x57d577[_0x2bf32e(520)](_0x150439 => {
                const _0xa64bcd = _0x2bf32e;
                if (typeof _0x26a064[_0x150439] === _0x4ee5ac[_0xa64bcd(535)])
                    return;
                _0xac9d13[_0xa64bcd(530)](_0x4ee5ac[_0xa64bcd(536)](_0x150439, '\0'))[_0xa64bcd(530)](this[_0xa64bcd(521)](_0x26a064[_0x150439]));
            });
            break;
        case _0x4ee5ac[_0x2bf32e(535)]:
            assert['ok'](![], _0x4ee5ac[_0x2bf32e(537)]);
            break;
        default:
            _0xac9d13[_0x2bf32e(530)](_0x4ee5ac[_0x2bf32e(538)]('', _0x26a064));
            break;
        }
        return _0xac9d13[_0x2bf32e(539)](_0x4ee5ac[_0x2bf32e(540)]);
    }
    ['_writeFile'](_0x29183a, _0x52aa62) {
        const _0x34b545 = _0x5982e4, _0x5d95bb = {
                'TKHtY': function (_0x37e1b4, _0x342cab) {
                    return _0x37e1b4 + _0x342cab;
                },
                'qIbDO': '.tmp.'
            }, _0x39cf9f = _0x5d95bb[_0x34b545(541)](_0x29183a + _0x5d95bb['qIbDO'], Random['id']());
        try {
            fs[_0x34b545(542)](_0x39cf9f, _0x52aa62), fs['renameSync'](_0x39cf9f, _0x29183a);
        } catch (_0x423e16) {
            this['_cacheDebug'](_0x423e16);
        }
    }
    [_0x5982e4(543)](_0x12425a) {
        const _0x642ba0 = _0x5982e4, _0x2538a5 = {
                'kBEyf': _0x642ba0(544),
                'WuCOh': function (_0x3f42bb, _0x4bdc14) {
                    return _0x3f42bb === _0x4bdc14;
                }
            };
        try {
            return fs[_0x642ba0(545)](_0x12425a, _0x2538a5[_0x642ba0(546)]);
        } catch (_0x1aff63) {
            if (_0x1aff63 && _0x2538a5['WuCOh'](_0x1aff63[_0x642ba0(547)], _0x642ba0(548)))
                return null;
            throw _0x1aff63;
        }
    }
}, CachingCompiler = class CachingCompiler extends CachingCompilerBase {
    constructor({
        compilerName: _0x29861d,
        defaultCacheSize: _0x590ff0,
        maxParallelism: maxParallelism = -111 * 25 + -4035 + 6830
    }) {
        const _0x310d0e = _0x5982e4;
        super({
            'compilerName': _0x29861d,
            'defaultCacheSize': _0x590ff0,
            'maxParallelism': maxParallelism
        }), this[_0x310d0e(549)] = new LRU({
            'max': this[_0x310d0e(550)],
            'length': _0x472662 => this['compileResultSize'](_0x472662)
        });
    }
    ['compileOneFile'](_0x3f5443) {
        const _0x42a172 = _0x5982e4, _0x4ea6dd = { 'rLVVG': _0x42a172(551) };
        throw Error(_0x4ea6dd[_0x42a172(552)]);
    }
    async _0x5982e4(553)(_0x93185d) {
        const _0x29c4de = _0x5982e4, _0x4ab697 = {
                'rUYyr': function (_0x2d037e) {
                    return _0x2d037e();
                }
            }, _0x48190e = [], _0x477558 = this[_0x29c4de(554)] && Object[_0x29c4de(555)](null);
        _0x93185d['forEach'](_0x4462a3 => {
            const _0x241320 = _0x29c4de;
            _0x477558 && (_0x477558[_0x4462a3[_0x241320(556)]()] = 641 * -2 + -5573 + 2 * 3428);
            const _0x23a60a = () => {
                const _0x4de8e6 = _0x241320, _0x2107bf = this[_0x4de8e6(521)](this['getCacheKey'](_0x4462a3));
                let _0x306dcd = this[_0x4de8e6(549)][_0x4de8e6(557)](_0x2107bf);
                !_0x306dcd && (_0x306dcd = this[_0x4de8e6(558)](_0x2107bf), _0x306dcd && this[_0x4de8e6(559)](_0x4de8e6(560) + _0x4462a3[_0x4de8e6(561)]()));
                if (!_0x306dcd) {
                    const _0x852898 = _0x4de8e6(562)[_0x4de8e6(563)]('|');
                    let _0x24e520 = 7163 + 302 + -7465 * 1;
                    while (!![]) {
                        switch (_0x852898[_0x24e520++]) {
                        case '0':
                            _0x48190e['push'](_0x4462a3['getDisplayPath']());
                            continue;
                        case '1':
                            if (!_0x306dcd)
                                return;
                            continue;
                        case '2':
                            _0x306dcd = Promise['await'](this[_0x4de8e6(564)](_0x4462a3));
                            continue;
                        case '3':
                            this[_0x4de8e6(565)](_0x2107bf, _0x306dcd);
                            continue;
                        case '4':
                            this['_cache'][_0x4de8e6(566)](_0x2107bf, _0x306dcd);
                            continue;
                        }
                        break;
                    }
                }
                return _0x306dcd;
            };
            if (this['compileOneFileLater'] && _0x4462a3['supportsLazyCompilation'])
                this['compileOneFileLater'](_0x4462a3, _0x23a60a);
            else {
                const _0x2cac20 = _0x4ab697['rUYyr'](_0x23a60a);
                _0x2cac20 && this[_0x241320(501)](_0x4462a3, _0x2cac20);
            }
        }), this[_0x29c4de(554)] && this[_0x29c4de(518)]['push'](() => {
            const _0x51ca03 = _0x29c4de;
            _0x48190e[_0x51ca03(534)](), this[_0x51ca03(559)](_0x51ca03(567) + ++this['_callCount'] + _0x51ca03(568) + JSON[_0x51ca03(506)](_0x48190e) + ' ' + JSON[_0x51ca03(506)](Object[_0x51ca03(569)](_0x477558)['sort']()));
        });
    }
    [_0x5982e4(570)](_0x25bcf9) {
        const _0x244ac0 = _0x5982e4, _0x3e2663 = {
                'HAQhj': function (_0xf8fa83, _0x1b418e) {
                    return _0xf8fa83 + _0x1b418e;
                },
                'UckaB': _0x244ac0(571),
                'ivrdJ': '.cache'
            };
        if (!/^[a-f0-9]+$/[_0x244ac0(572)](_0x25bcf9))
            throw Error(_0x3e2663[_0x244ac0(573)](_0x3e2663[_0x244ac0(574)], _0x25bcf9));
        return path[_0x244ac0(575)](this['_diskCache'], _0x3e2663[_0x244ac0(573)](_0x25bcf9, _0x3e2663[_0x244ac0(576)]));
    }
    [_0x5982e4(558)](_0x34881a) {
        const _0x4025e2 = _0x5982e4;
        if (!this[_0x4025e2(498)])
            return null;
        const _0x6b1118 = this['_cacheFilename'](_0x34881a), _0x3109a2 = this[_0x4025e2(577)](_0x6b1118);
        if (!_0x3109a2)
            return null;
        return this[_0x4025e2(549)]['set'](_0x34881a, _0x3109a2), _0x3109a2;
    }
    [_0x5982e4(565)](_0x243e85, _0x4c3c54) {
        const _0x43c221 = _0x5982e4;
        if (!this[_0x43c221(498)])
            return;
        const _0x259950 = this[_0x43c221(570)](_0x243e85), _0x236e2b = this[_0x43c221(578)](_0x4c3c54);
        this[_0x43c221(579)](_0x259950, _0x236e2b);
    }
    [_0x5982e4(577)](_0x4d1cd8) {
        const _0x59c671 = _0x5982e4, _0x8071ec = this['_readFileOrNull'](_0x4d1cd8);
        return this[_0x59c671(507)](_0x8071ec);
    }
};