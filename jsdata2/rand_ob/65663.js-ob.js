'use strict';
const _0x31ef = [
    'length',
    'follow',
    'bundled',
    'bundledScopes',
    'from',
    'filter',
    'map',
    'split',
    'CvCYW',
    'join',
    'onReadIgnoreFile',
    '.git',
    'node_modules',
    'includes',
    'DmLnf',
    'onReaddir',
    'packageJsonCache',
    'has',
    'hxRke',
    'object',
    'readPackageJson',
    'stringify',
    'error',
    'emit',
    'KQAkI',
    'mustHaveFilesFromPackage',
    '/package.json',
    '/npm-shrinkwrap.json',
    '!/package-lock.json',
    'browser',
    'push',
    'main',
    'bin',
    'cYhVn',
    'hBNCc',
    'VPugb',
    'APbOF',
    'izQKb',
    'parse',
    'toString',
    'VWbLv',
    'set',
    'isArray',
    'files',
    'bundleDependencies',
    'bundledDependencies',
    'FtGqU',
    'reduce',
    'match',
    'DflSD',
    'gppCh',
    'nMWWX',
    'hyoUN',
    'forEach',
    'add',
    'delete',
    'concat',
    'globFiles',
    'filterEntry',
    'npm-shrinkwrap.json',
    'package-lock.json',
    'JzMQy',
    'WohgB',
    'mVlxf',
    'basename',
    'MYitZ',
    'indexOf',
    'AFRag',
    'uGzDQ',
    'filterEntries',
    'ignoreRules',
    'addIgnoreFile',
    'resolve',
    'lvJoY',
    'gvIRg',
    'GSXpu',
    'onPackageJson',
    'get',
    'fSzeL',
    'pHWKf',
    'stat',
    'XVDUd',
    'isSymbolicLink',
    'UkKWN',
    'IPclT',
    'HegDs',
    'sort',
    'VdmKo',
    'mZwyv',
    'UHWeF',
    'onReadPackageJson',
    'walkerOpt',
    'done',
    'start',
    'sync',
    'WGnYI',
    'readFileSync',
    'walker',
    'SgZHB',
    'jjbUx',
    'QbnwX',
    'AqCgW',
    'result',
    'extname',
    'toLowerCase',
    'exports',
    '1dRhHOU',
    '501929yNBapq',
    '3PVRvez',
    '172573Uneowi',
    '2kzsJuf',
    '99507DGqHap',
    '496927zQqpeC',
    '525253pWHjXs',
    '1JkTqOg',
    '351343wQoWeA',
    '1vLQmdn',
    '1199251AfxwUs',
    'BundleWalker',
    'BundleWalkerSync',
    'ignore-walk',
    'Walker',
    'WalkerSync',
    'root-builtin-rules',
    'path',
    'npm-normalize-package-bin',
    'readme|copying|license|licence',
    '){,.*[^~$]}',
    ')(\x5c..*[^~$])?$',
    'glob',
    '.gitignore',
    '**/.git',
    '**/.svn',
    '**/.hg',
    '**/CVS',
    '**/.svn/**',
    '**/CVS/**',
    '/.wafpickle-*',
    '**/.npmrc',
    '.*.swp',
    '**/.DS_Store/**',
    '._*',
    '**/._*/**',
    '/yarn.lock',
    '/archived-packages/**',
    'test',
    'AvIzD',
    'ignoreFiles',
    'package.json',
    '.npmignore',
    'yBZsG',
    'includeEmpty',
    'cwd',
    'parent',
    'root',
    'replace',
    'substr'
];
const _0xa9b245 = _0x1a97;
(function (_0x30f12b, _0x47dd1c) {
    const _0x22f7ed = _0x1a97;
    while (!![]) {
        try {
            const _0x34d97a = parseInt(_0x22f7ed(0x1c3)) * parseInt(_0x22f7ed(0x1c4)) + -parseInt(_0x22f7ed(0x1c5)) * -parseInt(_0x22f7ed(0x1c6)) + -parseInt(_0x22f7ed(0x1c7)) * -parseInt(_0x22f7ed(0x1c8)) + parseInt(_0x22f7ed(0x1c9)) + parseInt(_0x22f7ed(0x1ca)) * -parseInt(_0x22f7ed(0x1cb)) + parseInt(_0x22f7ed(0x1cc)) + -parseInt(_0x22f7ed(0x1cd)) * parseInt(_0x22f7ed(0x1ce));
            if (_0x34d97a === _0x47dd1c)
                break;
            else
                _0x30f12b['push'](_0x30f12b['shift']());
        } catch (_0x1de5af) {
            _0x30f12b['push'](_0x30f12b['shift']());
        }
    }
}(_0x31ef, 0x59b3d + 0x6df25 + -0x1 * 0x740c6));
const bundleWalk = require('npm-bundled'), BundleWalker = bundleWalk[_0xa9b245(0x1cf)], BundleWalkerSync = bundleWalk[_0xa9b245(0x1d0)], ignoreWalk = require(_0xa9b245(0x1d1)), IgnoreWalker = ignoreWalk[_0xa9b245(0x1d2)], IgnoreWalkerSync = ignoreWalk[_0xa9b245(0x1d3)], rootBuiltinRules = Symbol(_0xa9b245(0x1d4)), packageNecessaryRules = Symbol('package-necessary-rules'), path = require(_0xa9b245(0x1d5)), normalizePackageBin = require(_0xa9b245(0x1d6)), packageMustHaveFileNames = _0xa9b245(0x1d7), packageMustHaves = '@(' + packageMustHaveFileNames + _0xa9b245(0x1d8), packageMustHavesRE = new RegExp('^(' + packageMustHaveFileNames + _0xa9b245(0x1d9), 'i'), fs = require('fs'), glob = require(_0xa9b245(0x1da)), defaultRules = [
        '.npmignore',
        _0xa9b245(0x1db),
        _0xa9b245(0x1dc),
        _0xa9b245(0x1dd),
        _0xa9b245(0x1de),
        _0xa9b245(0x1df),
        '**/.git/**',
        _0xa9b245(0x1e0),
        '**/.hg/**',
        _0xa9b245(0x1e1),
        '/.lock-wscript',
        _0xa9b245(0x1e2),
        '/build/config.gypi',
        'npm-debug.log',
        _0xa9b245(0x1e3),
        _0xa9b245(0x1e4),
        '.DS_Store',
        _0xa9b245(0x1e5),
        _0xa9b245(0x1e6),
        _0xa9b245(0x1e7),
        '*.orig',
        '/package-lock.json',
        _0xa9b245(0x1e8),
        _0xa9b245(0x1e9)
    ], nameIsBadForWindows = _0x3be6c1 => /\*/[_0xa9b245(0x1ea)](_0x3be6c1), npmWalker = _0x34dd7f => class _0x2b6a67 extends _0x34dd7f {
        constructor(_0x1d34b6) {
            const _0x2705d8 = _0xa9b245, _0x35839d = {
                    'AvIzD': function (_0x115032, _0x1fdbaf) {
                        return _0x115032 || _0x1fdbaf;
                    },
                    'yBZsG': _0x2705d8(0x1db),
                    'CvCYW': function (_0x1a55b9, _0x5341b2) {
                        return _0x1a55b9 + _0x5341b2;
                    }
                };
            _0x1d34b6 = _0x35839d[_0x2705d8(0x1eb)](_0x1d34b6, {}), _0x1d34b6[_0x2705d8(0x1ec)] = [
                rootBuiltinRules,
                _0x2705d8(0x1ed),
                _0x2705d8(0x1ee),
                _0x35839d[_0x2705d8(0x1ef)],
                packageNecessaryRules
            ], _0x1d34b6[_0x2705d8(0x1f0)] = ![], _0x1d34b6[_0x2705d8(0x1d5)] = _0x1d34b6[_0x2705d8(0x1d5)] || process[_0x2705d8(0x1f1)]();
            const _0x43eedf = /^(?:\/node_modules\/(?:@[^/]+\/[^/]+|[^/]+)\/)*\/node_modules(?:\/@[^/]+)?$/, _0xc3e06c = _0x1d34b6[_0x2705d8(0x1f2)] ? _0x1d34b6[_0x2705d8(0x1f2)][_0x2705d8(0x1f3)] : _0x1d34b6[_0x2705d8(0x1d5)], _0x278f21 = _0x1d34b6[_0x2705d8(0x1d5)][_0x2705d8(0x1f4)](/\\/g, '/')[_0x2705d8(0x1f5)](_0xc3e06c[_0x2705d8(0x1f6)]);
            _0x1d34b6[_0x2705d8(0x1f7)] = _0x43eedf[_0x2705d8(0x1ea)](_0x278f21), super(_0x1d34b6);
            if (!this['parent']) {
                this['bundled'] = _0x1d34b6[_0x2705d8(0x1f8)] || [], this[_0x2705d8(0x1f9)] = Array[_0x2705d8(0x1fa)](new Set(this[_0x2705d8(0x1f8)][_0x2705d8(0x1fb)](_0x1bf7a8 => /^@/[_0x2705d8(0x1ea)](_0x1bf7a8))[_0x2705d8(0x1fc)](_0x4db758 => _0x4db758[_0x2705d8(0x1fd)]('/')[-0x719 * -0x3 + 0x1c39 + 0x2 * -0x18c2])));
                const _0x13f21d = _0x35839d[_0x2705d8(0x1fe)](defaultRules[_0x2705d8(0x1ff)]('\x0a'), '\x0a');
                this['packageJsonCache'] = _0x1d34b6['packageJsonCache'] || new Map(), super[_0x2705d8(0x200)](rootBuiltinRules, _0x13f21d, _0x5c1706 => _0x5c1706);
            } else
                this['bundled'] = [], this[_0x2705d8(0x1f9)] = [], this['packageJsonCache'] = this[_0x2705d8(0x1f2)]['packageJsonCache'];
        }
        ['onReaddir'](_0x332e53) {
            const _0x59461b = _0xa9b245, _0x5c87a4 = {
                    'DmLnf': _0x59461b(0x1ed),
                    'hxRke': function (_0x2024e8, _0x4b0129) {
                        return _0x2024e8 !== _0x4b0129;
                    }
                };
            !this[_0x59461b(0x1f2)] && (_0x332e53 = _0x332e53[_0x59461b(0x1fb)](_0x28ae5d => _0x28ae5d !== _0x59461b(0x201) && !(_0x28ae5d === _0x59461b(0x202) && this[_0x59461b(0x1f8)]['length'] === -0x1c2b + 0x23ea + -0x7bf)));
            if (this['parent'] || !_0x332e53[_0x59461b(0x203)](_0x5c87a4[_0x59461b(0x204)]))
                return super[_0x59461b(0x205)](_0x332e53);
            const _0x66a9b1 = path['resolve'](this[_0x59461b(0x1d5)], _0x59461b(0x1ed));
            if (this[_0x59461b(0x206)][_0x59461b(0x207)](_0x66a9b1)) {
                const _0x48f0bc = this['packageJsonCache']['get'](_0x66a9b1);
                if (!_0x48f0bc || _0x5c87a4[_0x59461b(0x208)](typeof _0x48f0bc, _0x59461b(0x209)))
                    return this[_0x59461b(0x20a)](_0x332e53);
                return this['getPackageFiles'](_0x332e53, JSON[_0x59461b(0x20b)](_0x48f0bc));
            }
            this['readPackageJson'](_0x332e53);
        }
        ['onReadPackageJson'](_0x2e2ffd, _0x17a70d, _0x453b8c) {
            const _0x6d04b4 = _0xa9b245, _0x48e1b9 = { 'KQAkI': _0x6d04b4(0x20c) };
            if (_0x17a70d)
                this[_0x6d04b4(0x20d)](_0x48e1b9[_0x6d04b4(0x20e)], _0x17a70d);
            else
                this['getPackageFiles'](_0x2e2ffd, _0x453b8c);
        }
        [_0xa9b245(0x20f)](_0x2fd2b5) {
            const _0x5a4f6b = _0xa9b245, _0x4bf36d = {
                    'cYhVn': function (_0x7e872b, _0x24e04d) {
                        return _0x7e872b + _0x24e04d;
                    },
                    'hBNCc': _0x5a4f6b(0x210),
                    'VPugb': _0x5a4f6b(0x211),
                    'APbOF': _0x5a4f6b(0x212)
                }, _0x3cfc23 = [];
            if (_0x2fd2b5[_0x5a4f6b(0x213)])
                _0x3cfc23[_0x5a4f6b(0x214)](_0x4bf36d['cYhVn']('/', _0x2fd2b5[_0x5a4f6b(0x213)]));
            if (_0x2fd2b5[_0x5a4f6b(0x215)])
                _0x3cfc23[_0x5a4f6b(0x214)](_0x4bf36d['cYhVn']('/', _0x2fd2b5[_0x5a4f6b(0x215)]));
            if (_0x2fd2b5[_0x5a4f6b(0x216)]) {
                for (const _0x3ae855 in _0x2fd2b5[_0x5a4f6b(0x216)])
                    _0x3cfc23[_0x5a4f6b(0x214)](_0x4bf36d[_0x5a4f6b(0x217)]('/', _0x2fd2b5[_0x5a4f6b(0x216)][_0x3ae855]));
            }
            return _0x3cfc23[_0x5a4f6b(0x214)](_0x4bf36d[_0x5a4f6b(0x218)], _0x4bf36d[_0x5a4f6b(0x219)], _0x4bf36d[_0x5a4f6b(0x21a)], packageMustHaves), _0x3cfc23;
        }
        ['getPackageFiles'](_0x258b31, _0x2da609) {
            const _0x5e3076 = _0xa9b245, _0x1fdfdb = {
                    'DflSD': function (_0x1f99f5, _0xcac8ba) {
                        return _0x1f99f5 === _0xcac8ba;
                    },
                    'gppCh': _0x5e3076(0x20c),
                    'nMWWX': function (_0x3dd797, _0xb0ab3a) {
                        return _0x3dd797 === _0xb0ab3a;
                    },
                    'hyoUN': function (_0x4beeb4, _0x28fbe7) {
                        return _0x4beeb4(_0x28fbe7);
                    },
                    'izQKb': function (_0x4af554, _0x33c1e6) {
                        return _0x4af554(_0x33c1e6);
                    },
                    'VWbLv': _0x5e3076(0x1ed),
                    'FtGqU': 'node_modules'
                };
            try {
                _0x2da609 = _0x1fdfdb[_0x5e3076(0x21b)](normalizePackageBin, JSON[_0x5e3076(0x21c)](_0x2da609[_0x5e3076(0x21d)]()));
            } catch (_0x4b90bf) {
                return super[_0x5e3076(0x205)](_0x258b31);
            }
            const _0x3e0022 = path['resolve'](this[_0x5e3076(0x1d5)], _0x1fdfdb[_0x5e3076(0x21e)]);
            this[_0x5e3076(0x206)][_0x5e3076(0x21f)](_0x3e0022, _0x2da609);
            if (!Array[_0x5e3076(0x220)](_0x2da609[_0x5e3076(0x221)]))
                return super[_0x5e3076(0x205)](_0x258b31);
            _0x2da609['files'][_0x5e3076(0x214)](...this[_0x5e3076(0x20f)](_0x2da609));
            if ((_0x2da609[_0x5e3076(0x222)] || _0x2da609[_0x5e3076(0x223)]) && _0x258b31[_0x5e3076(0x203)](_0x1fdfdb[_0x5e3076(0x224)]))
                _0x2da609[_0x5e3076(0x221)][_0x5e3076(0x214)](_0x1fdfdb[_0x5e3076(0x224)]);
            const _0x17e65d = Array[_0x5e3076(0x1fa)](new Set(_0x2da609[_0x5e3076(0x221)]))[_0x5e3076(0x225)]((_0x519f27, _0x3db0b3) => {
                const _0x3c3f91 = _0x5e3076, _0x5a0c64 = _0x3db0b3[_0x3c3f91(0x226)](/^!+/);
                if (_0x5a0c64)
                    _0x3db0b3 = _0x3db0b3[_0x3c3f91(0x1f5)](_0x5a0c64[0x1e77 + -0x162e + -0x849]['length']);
                _0x3db0b3 = _0x3db0b3[_0x3c3f91(0x1f4)](/^\/+/, '');
                const _0x55e03e = _0x5a0c64 && _0x1fdfdb[_0x3c3f91(0x227)](_0x5a0c64[-0x1 * -0x2a9 + -0x1 * -0x1222 + -0x14cb * 0x1]['length'] % (0x1de7 * -0x1 + 0x20b4 + -0x2cb), 0xe9b + -0x794 + -0x706);
                return _0x519f27[_0x3c3f91(0x214)]({
                    'pattern': _0x3db0b3,
                    'negate': _0x55e03e
                }), _0x519f27;
            }, []);
            let _0x4ed109 = _0x17e65d[_0x5e3076(0x1f6)];
            const _0x19fd3f = new Set(), _0x10fb95 = new Set(), _0x4d22e7 = [], _0x15ade5 = (_0x586caf, _0x22d938, _0x6ab4c4, _0x156393, _0x5f08ee) => {
                    const _0xb80d14 = _0x5e3076;
                    if (_0x6ab4c4)
                        return this[_0xb80d14(0x20d)](_0x1fdfdb[_0xb80d14(0x228)], _0x6ab4c4);
                    _0x4d22e7[_0x5f08ee] = {
                        'negate': _0x22d938,
                        'fileList': _0x156393
                    };
                    if (_0x1fdfdb[_0xb80d14(0x229)](--_0x4ed109, -0x1ff6 + 0xc49 + 0x13ad))
                        _0x1fdfdb[_0xb80d14(0x22a)](_0x201263, _0x4d22e7);
                }, _0x201263 = _0x1695a3 => {
                    const _0x3ddc61 = _0x5e3076;
                    for (const {
                                negate: _0x7eef99,
                                fileList: _0x39b211
                            } of _0x1695a3) {
                        _0x7eef99 ? _0x39b211[_0x3ddc61(0x22b)](_0x31012d => {
                            const _0x286363 = _0x3ddc61;
                            _0x31012d = _0x31012d['replace'](/\/+$/, ''), _0x19fd3f['delete'](_0x31012d), _0x10fb95[_0x286363(0x22c)](_0x31012d);
                        }) : _0x39b211[_0x3ddc61(0x22b)](_0x35e8e9 => {
                            const _0x5ac774 = _0x3ddc61;
                            _0x35e8e9 = _0x35e8e9['replace'](/\/+$/, ''), _0x19fd3f[_0x5ac774(0x22c)](_0x35e8e9), _0x10fb95[_0x5ac774(0x22d)](_0x35e8e9);
                        });
                    }
                    const _0x377d3c = Array['from'](_0x19fd3f);
                    _0x2da609['files'] = _0x377d3c[_0x3ddc61(0x22e)](Array['from'](_0x10fb95)[_0x3ddc61(0x1fc)](_0x5d90bb => '!' + _0x5d90bb));
                    const _0x130ae3 = Array[_0x3ddc61(0x1fa)](new Set(_0x377d3c[_0x3ddc61(0x1fc)](_0x194c3e => _0x194c3e['replace'](/^\/+/, ''))));
                    super[_0x3ddc61(0x205)](_0x130ae3);
                };
            _0x17e65d[_0x5e3076(0x22b)](({
                pattern: _0x18696e,
                negate: _0x48f1b2
            }, _0x41d05e) => this[_0x5e3076(0x22f)](_0x18696e, (_0x534593, _0x4b0c9a) => _0x15ade5(_0x18696e, _0x48f1b2, _0x534593, _0x4b0c9a, _0x41d05e)));
        }
        [_0xa9b245(0x230)](_0xf6ff4f, _0x1cdfef) {
            const _0x254e67 = _0xa9b245, _0xf79a1f = {
                    'ljomC': function (_0x50352a, _0x155688) {
                        return _0x50352a + _0x155688;
                    },
                    'JzMQy': function (_0x40cdfa, _0x52ed39) {
                        return _0x40cdfa === _0x52ed39;
                    },
                    'WohgB': _0x254e67(0x1ed),
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
                    'LLbFF': _0x254e67(0x231),
                    'uGzDQ': _0x254e67(0x232)
                }, _0x2c641e = this[_0x254e67(0x1d5)]['substr'](_0xf79a1f['ljomC'](this[_0x254e67(0x1f3)]['length'], -0x4 * 0x97b + 0xe7d * 0x2 + 0x1d * 0x4f)), _0x43984b = /^node_modules\/(@[^/]+\/?[^/]+|[^/]+)(\/.*)?$/, _0x5b0889 = !this[_0x254e67(0x1f2)], _0x189283 = _0x5b0889 && _0x43984b[_0x254e67(0x1ea)](_0xf6ff4f) ? _0xf6ff4f[_0x254e67(0x1f4)](_0x43984b, '$1') : null, _0x2d8ced = _0x5b0889 && _0xf79a1f[_0x254e67(0x233)](_0xf6ff4f, _0x254e67(0x202)), _0x5d1535 = _0x5b0889 && _0xf79a1f['JzMQy'](_0xf6ff4f, _0xf79a1f[_0x254e67(0x234)]);
            return /^node_modules($|\/)/i[_0x254e67(0x1ea)](_0x2c641e) ? this[_0x254e67(0x1f2)]['filterEntry'](_0xf79a1f[_0x254e67(0x235)](_0xf79a1f['bQaPd'](this[_0x254e67(0x236)], '/'), _0xf6ff4f), _0x1cdfef) : _0x189283 ? _0xf79a1f[_0x254e67(0x237)](this[_0x254e67(0x1f8)][_0x254e67(0x238)](_0x189283), -(0x26f4 * -0x1 + 0x1 * -0x1168 + -0x2f * -0x133)) || _0xf79a1f[_0x254e67(0x237)](this['bundledScopes'][_0x254e67(0x238)](_0x189283), -(-0x27c + -0x60e + 0x88b)) : _0x2d8ced ? !!this[_0x254e67(0x1f8)][_0x254e67(0x1f6)] : _0x5d1535 ? !![] : packageMustHavesRE[_0x254e67(0x1ea)](_0xf6ff4f) ? !![] : _0x5b0889 && (_0xf79a1f[_0x254e67(0x239)](_0xf6ff4f, _0xf79a1f['LLbFF']) || _0xf6ff4f === _0xf79a1f['WohgB']) ? !![] : _0x5b0889 && _0xf79a1f['AFRag'](_0xf6ff4f, _0xf79a1f[_0x254e67(0x23a)]) ? ![] : super[_0x254e67(0x230)](_0xf6ff4f, _0x1cdfef);
        }
        [_0xa9b245(0x23b)]() {
            const _0x182bef = _0xa9b245;
            if (this[_0x182bef(0x23c)][_0x182bef(0x1ee)])
                this[_0x182bef(0x23c)][_0x182bef(0x1db)] = null;
            this[_0x182bef(0x23b)] = super[_0x182bef(0x23b)], super[_0x182bef(0x23b)]();
        }
        [_0xa9b245(0x23d)](_0x418412, _0x5cc782) {
            const _0x3cc47a = _0xa9b245, _0x37d4fc = {
                    'lvJoY': function (_0x58452c, _0x5d9c90) {
                        return _0x58452c === _0x5d9c90;
                    },
                    'gvIRg': _0x3cc47a(0x1ed),
                    'GSXpu': function (_0x1513f9) {
                        return _0x1513f9();
                    }
                }, _0x4b3b0b = path[_0x3cc47a(0x23e)](this[_0x3cc47a(0x1d5)], _0x418412);
            if (_0x37d4fc[_0x3cc47a(0x23f)](_0x418412, _0x37d4fc[_0x3cc47a(0x240)]) && this[_0x3cc47a(0x1f2)])
                _0x37d4fc[_0x3cc47a(0x241)](_0x5cc782);
            else {
                if (this[_0x3cc47a(0x206)][_0x3cc47a(0x207)](_0x4b3b0b))
                    this[_0x3cc47a(0x242)](_0x4b3b0b, this[_0x3cc47a(0x206)][_0x3cc47a(0x243)](_0x4b3b0b), _0x5cc782);
                else
                    super['addIgnoreFile'](_0x418412, _0x5cc782);
            }
        }
        [_0xa9b245(0x242)](_0x5a0fa5, _0x1a30d7, _0x262f33) {
            const _0x561c93 = _0xa9b245, _0x4fcac7 = {
                    'fSzeL': 'package.json',
                    'pHWKf': function (_0x4d5848, _0x2068d3) {
                        return _0x4d5848 + _0x2068d3;
                    }
                };
            this[_0x561c93(0x206)][_0x561c93(0x21f)](_0x5a0fa5, _0x1a30d7);
            if (Array[_0x561c93(0x220)](_0x1a30d7['files']))
                super[_0x561c93(0x200)](_0x4fcac7[_0x561c93(0x244)], _0x4fcac7[_0x561c93(0x245)](_0x1a30d7[_0x561c93(0x221)][_0x561c93(0x1fc)](_0x55d5dd => '!' + _0x55d5dd)[_0x561c93(0x1ff)]('\x0a'), '\x0a'), _0x262f33);
            else {
                const _0x1cabeb = this['mustHaveFilesFromPackage'](_0x1a30d7)['map'](_0x34d1ff => '!' + _0x34d1ff), _0x183513 = _0x4fcac7[_0x561c93(0x245)](_0x1cabeb['join']('\x0a'), '\x0a');
                super['onReadIgnoreFile'](packageNecessaryRules, _0x183513, _0x262f33);
            }
        }
        [_0xa9b245(0x246)](_0x431801, _0x5a5843, _0x4598c8, _0x4b7184) {
            const _0x436425 = _0xa9b245, _0x137fa3 = {
                    'XVDUd': function (_0x22cd6a, _0x5b372e) {
                        return _0x22cd6a(_0x5b372e);
                    }
                };
            if (_0x137fa3[_0x436425(0x247)](nameIsBadForWindows, _0x431801))
                _0x4b7184();
            else
                super[_0x436425(0x246)](_0x431801, _0x5a5843, _0x4598c8, _0x4b7184);
        }
        ['onstat'](_0x2d481a, _0x208fa5, _0x40c091, _0x52da51, _0x398cc7) {
            const _0x3f721b = _0xa9b245, _0x5f11a9 = {
                    'pwmXG': function (_0x23ea8b) {
                        return _0x23ea8b();
                    }
                };
            if (_0x2d481a[_0x3f721b(0x248)]())
                _0x5f11a9['pwmXG'](_0x398cc7);
            else
                super['onstat'](_0x2d481a, _0x208fa5, _0x40c091, _0x52da51, _0x398cc7);
        }
        [_0xa9b245(0x200)](_0xca2cb8, _0x4e29d3, _0x1ff8be) {
            const _0x207e88 = _0xa9b245, _0x16cf17 = {
                    'UkKWN': function (_0x3044d5, _0x56d3fe) {
                        return _0x3044d5 === _0x56d3fe;
                    },
                    'IPclT': _0x207e88(0x1ed),
                    'HegDs': function (_0x4dc760) {
                        return _0x4dc760();
                    }
                };
            if (_0x16cf17[_0x207e88(0x249)](_0xca2cb8, _0x16cf17[_0x207e88(0x24a)]))
                try {
                    const _0x10316c = path[_0x207e88(0x23e)](this[_0x207e88(0x1d5)], _0xca2cb8);
                    this[_0x207e88(0x242)](_0x10316c, JSON[_0x207e88(0x21c)](_0x4e29d3), _0x1ff8be);
                } catch (_0x535d58) {
                    _0x16cf17[_0x207e88(0x24b)](_0x1ff8be);
                }
            else
                super['onReadIgnoreFile'](_0xca2cb8, _0x4e29d3, _0x1ff8be);
        }
        [_0xa9b245(0x24c)](_0x27dcdf, _0x4ada0a) {
            const _0x44bacd = _0xa9b245, _0x2b982e = {
                    'VdmKo': function (_0x527bbc, _0x940521, _0x266731) {
                        return _0x527bbc(_0x940521, _0x266731);
                    }
                };
            return _0x2b982e[_0x44bacd(0x24d)](sort, _0x27dcdf, _0x4ada0a);
        }
    };
function _0x1a97(_0x1b993e, _0x5ee920) {
    return _0x1a97 = function (_0x291305, _0x51af2e) {
        _0x291305 = _0x291305 - (-0x10 * 0xfb + -0x4 * -0x464 + 0x1d * -0x1);
        let _0xa21dcf = _0x31ef[_0x291305];
        return _0xa21dcf;
    }, _0x1a97(_0x1b993e, _0x5ee920);
}
class Walker extends npmWalker(IgnoreWalker) {
    [_0xa9b245(0x22f)](_0x70d01c, _0x58bdeb) {
        const _0x4ea74f = _0xa9b245, _0x4d4d75 = {
                'mZwyv': function (_0x4f67f3, _0x4275fc, _0x1ed57a, _0x2c44d3) {
                    return _0x4f67f3(_0x4275fc, _0x1ed57a, _0x2c44d3);
                }
            };
        _0x4d4d75[_0x4ea74f(0x24e)](glob, _0x70d01c, {
            'dot': !![],
            'cwd': this[_0x4ea74f(0x1d5)],
            'nocase': !![]
        }, _0x58bdeb);
    }
    [_0xa9b245(0x20a)](_0x2ce7be) {
        const _0xc7597b = _0xa9b245, _0x360037 = {
                'LabLj': function (_0x91024f, _0x187e66) {
                    return _0x91024f + _0x187e66;
                },
                'UHWeF': _0xc7597b(0x210)
            };
        fs['readFile'](_0x360037['LabLj'](this[_0xc7597b(0x1d5)], _0x360037[_0xc7597b(0x24f)]), (_0x46f486, _0x16d5db) => this[_0xc7597b(0x250)](_0x2ce7be, _0x46f486, _0x16d5db));
    }
    ['walker'](_0x4209a6, _0x8c7609) {
        const _0x23c63d = _0xa9b245;
        new Walker(this[_0x23c63d(0x251)](_0x4209a6))['on'](_0x23c63d(0x252), _0x8c7609)[_0x23c63d(0x253)]();
    }
}
class WalkerSync extends npmWalker(IgnoreWalkerSync) {
    [_0xa9b245(0x22f)](_0x30963d, _0x1b1882) {
        const _0x17fbe7 = _0xa9b245;
        _0x1b1882(null, glob[_0x17fbe7(0x254)](_0x30963d, {
            'dot': !![],
            'cwd': this[_0x17fbe7(0x1d5)],
            'nocase': !![]
        }));
    }
    [_0xa9b245(0x20a)](_0x311a35) {
        const _0x2ebb60 = _0xa9b245, _0x340270 = { 'WGnYI': _0x2ebb60(0x210) }, _0x2dab6a = this['path'] + _0x340270[_0x2ebb60(0x255)];
        try {
            this[_0x2ebb60(0x250)](_0x311a35, null, fs[_0x2ebb60(0x256)](_0x2dab6a));
        } catch (_0x174c22) {
            this[_0x2ebb60(0x250)](_0x311a35, _0x174c22);
        }
    }
    [_0xa9b245(0x257)](_0x14c636, _0xa4e6db) {
        const _0x2a964f = _0xa9b245, _0x171948 = {
                'SgZHB': function (_0x587512) {
                    return _0x587512();
                }
            };
        new WalkerSync(this[_0x2a964f(0x251)](_0x14c636))['start'](), _0x171948[_0x2a964f(0x258)](_0xa4e6db);
    }
}
const walk = (_0x4920ed, _0x4bb50f) => {
        const _0x2394e9 = _0xa9b245, _0x5dd1b7 = {
                'QbnwX': _0x2394e9(0x252),
                'AqCgW': _0x2394e9(0x20c),
                'jjbUx': function (_0x4be935, _0x501452) {
                    return _0x4be935 || _0x501452;
                }
            };
        _0x4920ed = _0x5dd1b7[_0x2394e9(0x259)](_0x4920ed, {});
        const _0x82dead = new Promise((_0x3989a7, _0x2dbb1e) => {
            const _0x151028 = _0x2394e9, _0x4ddfe8 = new BundleWalker(_0x4920ed);
            _0x4ddfe8['on'](_0x5dd1b7[_0x151028(0x25a)], _0x194789 => {
                const _0x21f6ae = _0x151028;
                _0x4920ed[_0x21f6ae(0x1f8)] = _0x194789, _0x4920ed[_0x21f6ae(0x206)] = _0x4ddfe8[_0x21f6ae(0x206)], new Walker(_0x4920ed)['on'](_0x5dd1b7[_0x21f6ae(0x25a)], _0x3989a7)['on'](_0x5dd1b7[_0x21f6ae(0x25b)], _0x2dbb1e)[_0x21f6ae(0x253)]();
            }), _0x4ddfe8['start']();
        });
        return _0x4bb50f ? _0x82dead['then'](_0x2f17fd => _0x4bb50f(null, _0x2f17fd), _0x4bb50f) : _0x82dead;
    }, walkSync = _0x42e71b => {
        const _0x332689 = _0xa9b245;
        _0x42e71b = _0x42e71b || {};
        const _0x54a47b = new BundleWalkerSync(_0x42e71b)[_0x332689(0x253)]();
        _0x42e71b['bundled'] = _0x54a47b[_0x332689(0x25c)], _0x42e71b[_0x332689(0x206)] = _0x54a47b[_0x332689(0x206)];
        const _0x3f1943 = new WalkerSync(_0x42e71b);
        return _0x3f1943[_0x332689(0x253)](), _0x3f1943['result'];
    }, sort = (_0x4ed9ad, _0x546bb3) => {
        const _0x472e63 = _0xa9b245, _0x402e60 = path['extname'](_0x4ed9ad)['toLowerCase'](), _0x352852 = path[_0x472e63(0x25d)](_0x546bb3)[_0x472e63(0x25e)](), _0x385018 = path[_0x472e63(0x236)](_0x4ed9ad)[_0x472e63(0x25e)](), _0x4c16c1 = path['basename'](_0x546bb3)[_0x472e63(0x25e)]();
        return _0x402e60['localeCompare'](_0x352852, 'en') || _0x385018['localeCompare'](_0x4c16c1, 'en') || _0x4ed9ad['localeCompare'](_0x546bb3, 'en');
    };
module[_0xa9b245(0x25f)] = walk, walk[_0xa9b245(0x254)] = walkSync, walk['Walker'] = Walker, walk[_0xa9b245(0x1d3)] = WalkerSync;
