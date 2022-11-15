function _0x117b(_0x4541dc, _0x3443b0) {
    return _0x117b = function (_0x3a3eae, _0x117b4a) {
        _0x3a3eae = _0x3a3eae - 162;
        let _0xe1629f = _0x3a3e[_0x3a3eae];
        return _0xe1629f;
    }, _0x117b(_0x4541dc, _0x3443b0);
}
const bundleWalk = require(_0x470673(171)), BundleWalker = bundleWalk[_0x470673(172)], BundleWalkerSync = bundleWalk[_0x470673(173)], ignoreWalk = require(_0x470673(174)), IgnoreWalker = ignoreWalk[_0x470673(175)], IgnoreWalkerSync = ignoreWalk['WalkerSync'], rootBuiltinRules = Symbol(_0x470673(176)), packageNecessaryRules = Symbol(_0x470673(177)), path = require(_0x470673(178)), normalizePackageBin = require(_0x470673(179)), packageMustHaveFileNames = 'readme|copying|license|licence', packageMustHaves = '@(' + packageMustHaveFileNames + '){,.*[^~$]}', packageMustHavesRE = new RegExp('^(' + packageMustHaveFileNames + ')(\\..*[^~$])?$', 'i'), fs = require('fs'), glob = require(_0x470673(180)), defaultRules = [
        _0x470673(181),
        '.gitignore',
        _0x470673(182),
        '**/.svn',
        '**/.hg',
        _0x470673(183),
        '**/.git/**',
        _0x470673(184),
        _0x470673(185),
        '**/CVS/**',
        _0x470673(186),
        '/.wafpickle-*',
        _0x470673(187),
        _0x470673(188),
        '**/.npmrc',
        _0x470673(189),
        _0x470673(190),
        _0x470673(191),
        _0x470673(192),
        _0x470673(193),
        _0x470673(194),
        _0x470673(195),
        _0x470673(196),
        _0x470673(197)
    ], nameIsBadForWindows = _0x36d6f1 => /\*/[_0x470673(198)](_0x36d6f1), npmWalker = _0x259872 => class _0x48cb6f extends _0x259872 {
        constructor(_0x2c00d9) {
            const _0x45fe64 = _0x470673;
            _0x2c00d9 = _0x2c00d9 || {}, _0x2c00d9[_0x45fe64(199)] = [
                rootBuiltinRules,
                _0x45fe64(200),
                _0x45fe64(181),
                _0x45fe64(201),
                packageNecessaryRules
            ], _0x2c00d9[_0x45fe64(202)] = ![], _0x2c00d9[_0x45fe64(178)] = _0x2c00d9[_0x45fe64(178)] || process[_0x45fe64(203)]();
            const _0x439a94 = /^(?:\/node_modules\/(?:@[^/]+\/[^/]+|[^/]+)\/)*\/node_modules(?:\/@[^/]+)?$/, _0x949d7d = _0x2c00d9[_0x45fe64(204)] ? _0x2c00d9['parent'][_0x45fe64(205)] : _0x2c00d9[_0x45fe64(178)], _0x577436 = _0x2c00d9[_0x45fe64(178)][_0x45fe64(206)](/\\/g, '/')[_0x45fe64(207)](_0x949d7d[_0x45fe64(208)]);
            _0x2c00d9[_0x45fe64(209)] = _0x439a94[_0x45fe64(198)](_0x577436), super(_0x2c00d9);
            if (!this[_0x45fe64(204)]) {
                this[_0x45fe64(210)] = _0x2c00d9[_0x45fe64(210)] || [], this['bundledScopes'] = Array[_0x45fe64(211)](new Set(this[_0x45fe64(210)][_0x45fe64(212)](_0x2834e5 => /^@/[_0x45fe64(198)](_0x2834e5))[_0x45fe64(213)](_0x1b19d2 => _0x1b19d2[_0x45fe64(214)]('/')[0])));
                const _0x3b9ae7 = defaultRules['join']('\n') + '\n';
                this[_0x45fe64(215)] = _0x2c00d9[_0x45fe64(215)] || new Map(), super[_0x45fe64(216)](rootBuiltinRules, _0x3b9ae7, _0x1dcdfb => _0x1dcdfb);
            } else
                this[_0x45fe64(210)] = [], this[_0x45fe64(217)] = [], this[_0x45fe64(215)] = this[_0x45fe64(204)][_0x45fe64(215)];
        }
        ['onReaddir'](_0x39766b) {
            const _0x4e8dee = _0x470673;
            !this[_0x4e8dee(204)] && (_0x39766b = _0x39766b[_0x4e8dee(212)](_0x2f58bc => _0x2f58bc !== _0x4e8dee(218) && !(_0x2f58bc === _0x4e8dee(219) && this[_0x4e8dee(210)]['length'] === 0)));
            if (this[_0x4e8dee(204)] || !_0x39766b[_0x4e8dee(220)](_0x4e8dee(200)))
                return super[_0x4e8dee(221)](_0x39766b);
            const _0x565bad = path[_0x4e8dee(222)](this['path'], _0x4e8dee(200));
            if (this[_0x4e8dee(215)][_0x4e8dee(223)](_0x565bad)) {
                const _0x442209 = this[_0x4e8dee(215)]['get'](_0x565bad);
                if (!_0x442209 || typeof _0x442209 !== _0x4e8dee(224))
                    return this[_0x4e8dee(225)](_0x39766b);
                return this['getPackageFiles'](_0x39766b, JSON[_0x4e8dee(226)](_0x442209));
            }
            this[_0x4e8dee(225)](_0x39766b);
        }
        [_0x470673(227)](_0x579e22, _0x39477e, _0x3b9d3a) {
            const _0x4e5bde = _0x470673;
            if (_0x39477e)
                this[_0x4e5bde(228)](_0x4e5bde(229), _0x39477e);
            else
                this[_0x4e5bde(230)](_0x579e22, _0x3b9d3a);
        }
        [_0x470673(231)](_0x19fd80) {
            const _0x564618 = _0x470673, _0x36ac01 = [];
            if (_0x19fd80[_0x564618(232)])
                _0x36ac01[_0x564618(233)]('/' + _0x19fd80['browser']);
            if (_0x19fd80[_0x564618(234)])
                _0x36ac01[_0x564618(233)]('/' + _0x19fd80[_0x564618(234)]);
            if (_0x19fd80[_0x564618(235)]) {
                for (const _0x2426a7 in _0x19fd80[_0x564618(235)])
                    _0x36ac01['push']('/' + _0x19fd80[_0x564618(235)][_0x2426a7]);
            }
            return _0x36ac01[_0x564618(233)]('/package.json', '/npm-shrinkwrap.json', '!/package-lock.json', packageMustHaves), _0x36ac01;
        }
        [_0x470673(230)](_0x21c9ca, _0x37d85e) {
            const _0x2a419f = _0x470673;
            try {
                _0x37d85e = normalizePackageBin(JSON['parse'](_0x37d85e[_0x2a419f(236)]()));
            } catch (_0x4f704d) {
                return super[_0x2a419f(221)](_0x21c9ca);
            }
            const _0x148346 = path[_0x2a419f(222)](this[_0x2a419f(178)], _0x2a419f(200));
            this[_0x2a419f(215)]['set'](_0x148346, _0x37d85e);
            if (!Array[_0x2a419f(237)](_0x37d85e[_0x2a419f(238)]))
                return super[_0x2a419f(221)](_0x21c9ca);
            _0x37d85e[_0x2a419f(238)][_0x2a419f(233)](...this[_0x2a419f(231)](_0x37d85e));
            if ((_0x37d85e[_0x2a419f(239)] || _0x37d85e[_0x2a419f(240)]) && _0x21c9ca['includes'](_0x2a419f(219)))
                _0x37d85e[_0x2a419f(238)]['push'](_0x2a419f(219));
            const _0x2da46c = Array[_0x2a419f(211)](new Set(_0x37d85e[_0x2a419f(238)]))[_0x2a419f(241)]((_0x37d03f, _0x17860c) => {
                const _0x40f2d0 = _0x2a419f, _0x576085 = _0x17860c[_0x40f2d0(242)](/^!+/);
                if (_0x576085)
                    _0x17860c = _0x17860c['substr'](_0x576085[0][_0x40f2d0(208)]);
                _0x17860c = _0x17860c[_0x40f2d0(206)](/^\/+/, '');
                const _0x13ddfa = _0x576085 && _0x576085[0][_0x40f2d0(208)] % 2 === 1;
                return _0x37d03f[_0x40f2d0(233)]({
                    'pattern': _0x17860c,
                    'negate': _0x13ddfa
                }), _0x37d03f;
            }, []);
            let _0x337096 = _0x2da46c[_0x2a419f(208)];
            const _0x5ed37e = new Set(), _0x46ffca = new Set(), _0x5aec40 = [], _0xaf5709 = (_0x3fda38, _0x551ee3, _0x43dfdc, _0x127f71, _0x50fdf5) => {
                    const _0x592292 = _0x2a419f;
                    if (_0x43dfdc)
                        return this[_0x592292(228)]('error', _0x43dfdc);
                    _0x5aec40[_0x50fdf5] = {
                        'negate': _0x551ee3,
                        'fileList': _0x127f71
                    };
                    if (--_0x337096 === 0)
                        _0x38d1f7(_0x5aec40);
                }, _0x38d1f7 = _0x34dceb => {
                    const _0x2cef10 = _0x2a419f;
                    for (const {
                                negate: _0x14ee3c,
                                fileList: _0x5f2261
                            } of _0x34dceb) {
                        _0x14ee3c ? _0x5f2261['forEach'](_0x54ca7d => {
                            const _0x3a0d68 = _0x117b;
                            _0x54ca7d = _0x54ca7d[_0x3a0d68(206)](/\/+$/, ''), _0x5ed37e[_0x3a0d68(243)](_0x54ca7d), _0x46ffca[_0x3a0d68(244)](_0x54ca7d);
                        }) : _0x5f2261[_0x2cef10(245)](_0x3a3305 => {
                            const _0x3a4e62 = _0x2cef10;
                            _0x3a3305 = _0x3a3305[_0x3a4e62(206)](/\/+$/, ''), _0x5ed37e['add'](_0x3a3305), _0x46ffca[_0x3a4e62(243)](_0x3a3305);
                        });
                    }
                    const _0x50e7f1 = Array[_0x2cef10(211)](_0x5ed37e);
                    _0x37d85e['files'] = _0x50e7f1[_0x2cef10(246)](Array[_0x2cef10(211)](_0x46ffca)[_0x2cef10(213)](_0x4bba95 => '!' + _0x4bba95));
                    const _0x191c18 = Array[_0x2cef10(211)](new Set(_0x50e7f1[_0x2cef10(213)](_0x58310f => _0x58310f[_0x2cef10(206)](/^\/+/, ''))));
                    super[_0x2cef10(221)](_0x191c18);
                };
            _0x2da46c[_0x2a419f(245)](({
                pattern: _0x259772,
                negate: _0x35e3fc
            }, _0x14763d) => this[_0x2a419f(247)](_0x259772, (_0x38de80, _0x38f757) => _0xaf5709(_0x259772, _0x35e3fc, _0x38de80, _0x38f757, _0x14763d)));
        }
        [_0x470673(248)](_0x12b0c7, _0x2bedff) {
            const _0x146bd2 = _0x470673, _0x2e9a0d = this[_0x146bd2(178)]['substr'](this[_0x146bd2(205)]['length'] + 1), _0x10d5ca = /^node_modules\/(@[^/]+\/?[^/]+|[^/]+)(\/.*)?$/, _0x2ee713 = !this[_0x146bd2(204)], _0x495b1e = _0x2ee713 && _0x10d5ca[_0x146bd2(198)](_0x12b0c7) ? _0x12b0c7[_0x146bd2(206)](_0x10d5ca, '$1') : null, _0x279b15 = _0x2ee713 && _0x12b0c7 === _0x146bd2(219), _0x30b6b5 = _0x2ee713 && _0x12b0c7 === _0x146bd2(200);
            return /^node_modules($|\/)/i[_0x146bd2(198)](_0x2e9a0d) ? this[_0x146bd2(204)][_0x146bd2(248)](this[_0x146bd2(249)] + '/' + _0x12b0c7, _0x2bedff) : _0x495b1e ? this[_0x146bd2(210)][_0x146bd2(250)](_0x495b1e) !== -1 || this[_0x146bd2(217)][_0x146bd2(250)](_0x495b1e) !== -1 : _0x279b15 ? !!this[_0x146bd2(210)]['length'] : _0x30b6b5 ? !![] : packageMustHavesRE['test'](_0x12b0c7) ? !![] : _0x2ee713 && (_0x12b0c7 === _0x146bd2(251) || _0x12b0c7 === _0x146bd2(200)) ? !![] : _0x2ee713 && _0x12b0c7 === _0x146bd2(252) ? ![] : super[_0x146bd2(248)](_0x12b0c7, _0x2bedff);
        }
        [_0x470673(253)]() {
            const _0x3e0c3e = _0x470673;
            if (this['ignoreRules']['.npmignore'])
                this[_0x3e0c3e(254)]['.gitignore'] = null;
            this[_0x3e0c3e(253)] = super[_0x3e0c3e(253)], super[_0x3e0c3e(253)]();
        }
        [_0x470673(255)](_0x3101ce, _0x193b97) {
            const _0x2b54a7 = _0x470673, _0x51648f = path[_0x2b54a7(222)](this[_0x2b54a7(178)], _0x3101ce);
            if (_0x3101ce === _0x2b54a7(200) && this[_0x2b54a7(204)])
                _0x193b97();
            else {
                if (this[_0x2b54a7(215)][_0x2b54a7(223)](_0x51648f))
                    this[_0x2b54a7(256)](_0x51648f, this[_0x2b54a7(215)][_0x2b54a7(257)](_0x51648f), _0x193b97);
                else
                    super['addIgnoreFile'](_0x3101ce, _0x193b97);
            }
        }
        [_0x470673(256)](_0x4f293e, _0x4cc9ad, _0x2f61ce) {
            const _0x3dca52 = _0x470673;
            this[_0x3dca52(215)][_0x3dca52(258)](_0x4f293e, _0x4cc9ad);
            if (Array['isArray'](_0x4cc9ad['files']))
                super[_0x3dca52(216)](_0x3dca52(200), _0x4cc9ad[_0x3dca52(238)]['map'](_0x2c1b20 => '!' + _0x2c1b20)[_0x3dca52(259)]('\n') + '\n', _0x2f61ce);
            else {
                const _0x3a13d2 = this[_0x3dca52(231)](_0x4cc9ad)[_0x3dca52(213)](_0x3ca0bb => '!' + _0x3ca0bb), _0x2663f5 = _0x3a13d2[_0x3dca52(259)]('\n') + '\n';
                super['onReadIgnoreFile'](packageNecessaryRules, _0x2663f5, _0x2f61ce);
            }
        }
        ['stat'](_0x3166ac, _0x53c9f5, _0x18fe13, _0x3c57b5) {
            if (nameIsBadForWindows(_0x3166ac))
                _0x3c57b5();
            else
                super['stat'](_0x3166ac, _0x53c9f5, _0x18fe13, _0x3c57b5);
        }
        [_0x470673(260)](_0x2e05c2, _0x5051d3, _0x30aca1, _0x14d362, _0x4ba369) {
            const _0x4b7e1e = _0x470673;
            if (_0x2e05c2[_0x4b7e1e(261)]())
                _0x4ba369();
            else
                super[_0x4b7e1e(260)](_0x2e05c2, _0x5051d3, _0x30aca1, _0x14d362, _0x4ba369);
        }
        ['onReadIgnoreFile'](_0x10e57e, _0x534192, _0x111f62) {
            const _0x2327bc = _0x470673;
            if (_0x10e57e === _0x2327bc(200))
                try {
                    const _0x2fcc70 = path['resolve'](this[_0x2327bc(178)], _0x10e57e);
                    this[_0x2327bc(256)](_0x2fcc70, JSON[_0x2327bc(262)](_0x534192), _0x111f62);
                } catch (_0x58302e) {
                    _0x111f62();
                }
            else
                super[_0x2327bc(216)](_0x10e57e, _0x534192, _0x111f62);
        }
        [_0x470673(263)](_0x475c3c, _0x588799) {
            return sort(_0x475c3c, _0x588799);
        }
    };
class Walker extends npmWalker(IgnoreWalker) {
    [_0x470673(247)](_0x49298d, _0x425f3c) {
        const _0x5c2fd9 = _0x470673;
        glob(_0x49298d, {
            'dot': !![],
            'cwd': this[_0x5c2fd9(178)],
            'nocase': !![]
        }, _0x425f3c);
    }
    [_0x470673(225)](_0x536cdc) {
        const _0x4f28bf = _0x470673;
        fs['readFile'](this[_0x4f28bf(178)] + '/package.json', (_0x4d6671, _0x49e083) => this[_0x4f28bf(227)](_0x536cdc, _0x4d6671, _0x49e083));
    }
    [_0x470673(264)](_0x186481, _0x183273) {
        const _0x5ae6b7 = _0x470673;
        new Walker(this['walkerOpt'](_0x186481))['on'](_0x5ae6b7(265), _0x183273)[_0x5ae6b7(266)]();
    }
}
class WalkerSync extends npmWalker(IgnoreWalkerSync) {
    ['globFiles'](_0x15e6a1, _0x4bf628) {
        const _0x34842c = _0x470673;
        _0x4bf628(null, glob['sync'](_0x15e6a1, {
            'dot': !![],
            'cwd': this[_0x34842c(178)],
            'nocase': !![]
        }));
    }
    [_0x470673(225)](_0x1b9e88) {
        const _0x2dce91 = _0x470673, _0x3a9280 = this['path'] + _0x2dce91(267);
        try {
            this[_0x2dce91(227)](_0x1b9e88, null, fs[_0x2dce91(268)](_0x3a9280));
        } catch (_0x3b6b01) {
            this[_0x2dce91(227)](_0x1b9e88, _0x3b6b01);
        }
    }
    [_0x470673(264)](_0x265608, _0x188ac1) {
        const _0x3d7a35 = _0x470673;
        new WalkerSync(this[_0x3d7a35(269)](_0x265608))[_0x3d7a35(266)](), _0x188ac1();
    }
}
const walk = (_0x56d7bb, _0x2cbeab) => {
        const _0x1a9e91 = _0x470673;
        _0x56d7bb = _0x56d7bb || {};
        const _0x85c02c = new Promise((_0x51ca21, _0x41164d) => {
            const _0x5ebff7 = _0x117b, _0xa2746 = new BundleWalker(_0x56d7bb);
            _0xa2746['on'](_0x5ebff7(265), _0x52f09e => {
                const _0x1de8d4 = _0x5ebff7;
                _0x56d7bb[_0x1de8d4(210)] = _0x52f09e, _0x56d7bb[_0x1de8d4(215)] = _0xa2746['packageJsonCache'], new Walker(_0x56d7bb)['on'](_0x1de8d4(265), _0x51ca21)['on'](_0x1de8d4(229), _0x41164d)[_0x1de8d4(266)]();
            }), _0xa2746['start']();
        });
        return _0x2cbeab ? _0x85c02c[_0x1a9e91(270)](_0x352f3f => _0x2cbeab(null, _0x352f3f), _0x2cbeab) : _0x85c02c;
    }, walkSync = _0x427bb5 => {
        const _0x34e0e9 = _0x470673;
        _0x427bb5 = _0x427bb5 || {};
        const _0x3c50ab = new BundleWalkerSync(_0x427bb5)[_0x34e0e9(266)]();
        _0x427bb5[_0x34e0e9(210)] = _0x3c50ab[_0x34e0e9(271)], _0x427bb5['packageJsonCache'] = _0x3c50ab[_0x34e0e9(215)];
        const _0x2154c1 = new WalkerSync(_0x427bb5);
        return _0x2154c1[_0x34e0e9(266)](), _0x2154c1[_0x34e0e9(271)];
    }, sort = (_0x413ed1, _0x47c286) => {
        const _0x3c41d0 = _0x470673, _0x1d591b = path[_0x3c41d0(272)](_0x413ed1)[_0x3c41d0(273)](), _0x5445f4 = path['extname'](_0x47c286)[_0x3c41d0(273)](), _0x5b30b7 = path[_0x3c41d0(249)](_0x413ed1)[_0x3c41d0(273)](), _0x47f2d2 = path[_0x3c41d0(249)](_0x47c286)['toLowerCase']();
        return _0x1d591b[_0x3c41d0(274)](_0x5445f4, 'en') || _0x5b30b7[_0x3c41d0(274)](_0x47f2d2, 'en') || _0x413ed1['localeCompare'](_0x47c286, 'en');
    };
module[_0x470673(275)] = walk, walk[_0x470673(276)] = walkSync, walk[_0x470673(175)] = Walker, walk[_0x470673(277)] = WalkerSync;