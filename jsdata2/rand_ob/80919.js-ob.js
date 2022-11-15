'use strict';
const _0x1c0d = [
    'pkg',
    'location',
    'rootPath',
    'scripts',
    'contents',
    'substring',
    'NFliE',
    'length',
    'object',
    'keys',
    'reduce',
    'isArray',
    'slice',
    'ermWe',
    'KKZpz',
    'assign',
    'lazy',
    'string',
    'package.json',
    '__isLernaPackage',
    'HnUZp',
    'dKkJE',
    'resolve',
    'wFKRC',
    'basename',
    'sync',
    'YKxHd',
    'Mfevh',
    'name',
    'relative',
    'defineProperty',
    'WXfPP',
    'bin',
    'GsTTO',
    'rcJxF',
    'HycNw',
    'resolved',
    'binLocation',
    '.bin',
    'join',
    'mPurE',
    'XfrXX',
    'manifestLocation',
    'NXBQl',
    'nodeModulesLocation',
    'node_modules',
    'XQaHd',
    'version',
    'publishConfig',
    'directory',
    'dependencies',
    'devDependencies',
    'optionalDependencies',
    'peerDependencies',
    'get',
    'toJSON',
    'nzeOp',
    'then',
    'WOOkD',
    'type',
    'gitCommittish',
    'exec',
    'committish',
    'toString',
    'gitRange',
    'semver:',
    'exports',
    'Package',
    '463VfERCU',
    '1571OEhLUB',
    '119481VXpfmg',
    '919911PYbtQP',
    '2ctddJJ',
    '166783HnCpep',
    '59nlTKmT',
    '1237SFVOTk',
    '941865LsMbNO',
    '1250875mCzKjn',
    'load-json-file',
    'write-pkg'
];
const _0x53e748 = _0x16a3;
(function (_0x5c817d, _0xb6e8e) {
    const _0x788bf2 = _0x16a3;
    while (!![]) {
        try {
            const _0xf2c497 = -parseInt(_0x788bf2(0x1a8)) * -parseInt(_0x788bf2(0x1a9)) + parseInt(_0x788bf2(0x1aa)) + -parseInt(_0x788bf2(0x1ab)) + parseInt(_0x788bf2(0x1ac)) * parseInt(_0x788bf2(0x1ad)) + -parseInt(_0x788bf2(0x1ae)) * parseInt(_0x788bf2(0x1af)) + -parseInt(_0x788bf2(0x1b0)) + parseInt(_0x788bf2(0x1b1));
            if (_0xf2c497 === _0xb6e8e)
                break;
            else
                _0x5c817d['push'](_0x5c817d['shift']());
        } catch (_0x398ec8) {
            _0x5c817d['push'](_0x5c817d['shift']());
        }
    }
}(_0x1c0d, 0x1 * 0xe9d2a + 0x17e7b * -0x7 + 0x36bcb));
const npa = require('npm-package-arg'), path = require('path'), loadJsonFile = require(_0x53e748(0x1b2)), writePkg = require(_0x53e748(0x1b3)), PKG = Symbol(_0x53e748(0x1b4)), _location = Symbol(_0x53e748(0x1b5)), _resolved = Symbol('resolved'), _rootPath = Symbol(_0x53e748(0x1b6)), _scripts = Symbol(_0x53e748(0x1b7)), _contents = Symbol(_0x53e748(0x1b8));
function _0x16a3(_0x5d5fec, _0x83eb07) {
    return _0x16a3 = function (_0x115125, _0x11b6e6) {
        _0x115125 = _0x115125 - (0x1b8a + -0xb09 + -0xed9);
        let _0x4af6f1 = _0x1c0d[_0x115125];
        return _0x4af6f1;
    }, _0x16a3(_0x5d5fec, _0x83eb07);
}
function binSafeName({
    name: _0x3debd4,
    scope: _0x2c1a57
}) {
    const _0x1924e4 = _0x53e748, _0xdd5c15 = {
            'NFliE': function (_0x52ec12, _0x4ecc6d) {
                return _0x52ec12 + _0x4ecc6d;
            }
        };
    return _0x2c1a57 ? _0x3debd4[_0x1924e4(0x1b9)](_0xdd5c15[_0x1924e4(0x1ba)](_0x2c1a57[_0x1924e4(0x1bb)], -0xfd * 0x4 + 0xe * 0x139 + -0x1 * 0xd29)) : _0x3debd4;
}
function shallowCopy(_0x24a85d) {
    const _0x461e19 = _0x53e748, _0x490a41 = {
            'ermWe': function (_0x365a5c, _0x230eae) {
                return _0x365a5c === _0x230eae;
            },
            'KKZpz': _0x461e19(0x1bc)
        };
    return Object[_0x461e19(0x1bd)](_0x24a85d)[_0x461e19(0x1be)]((_0x60a50c, _0x49796f) => {
        const _0x218178 = _0x461e19, _0x1d65c6 = _0x24a85d[_0x49796f];
        if (Array[_0x218178(0x1bf)](_0x1d65c6))
            _0x60a50c[_0x49796f] = _0x1d65c6[_0x218178(0x1c0)]();
        else
            _0x1d65c6 && _0x490a41[_0x218178(0x1c1)](typeof _0x1d65c6, _0x490a41[_0x218178(0x1c2)]) ? _0x60a50c[_0x49796f] = Object[_0x218178(0x1c3)]({}, _0x1d65c6) : _0x60a50c[_0x49796f] = _0x1d65c6;
        return _0x60a50c;
    }, {});
}
class Package {
    static [_0x53e748(0x1c4)](_0x3a91f3, _0x3abed4 = '.') {
        const _0x439e65 = _0x53e748, _0x2ea357 = {
                'HnUZp': function (_0xb18446, _0x1b08a2) {
                    return _0xb18446 === _0x1b08a2;
                },
                'dKkJE': _0x439e65(0x1c5),
                'wFKRC': function (_0x3700e8, _0x55bab6) {
                    return _0x3700e8 === _0x55bab6;
                },
                'YKxHd': _0x439e65(0x1c6),
                'Mfevh': _0x439e65(0x1c7)
            };
        if (_0x2ea357[_0x439e65(0x1c8)](typeof _0x3a91f3, _0x2ea357[_0x439e65(0x1c9)])) {
            const _0x3b9810 = path[_0x439e65(0x1ca)](_0x2ea357[_0x439e65(0x1cb)](path[_0x439e65(0x1cc)](_0x3a91f3), _0x2ea357['YKxHd']) ? path['dirname'](_0x3a91f3) : _0x3a91f3), _0x2ba611 = loadJsonFile[_0x439e65(0x1cd)](path['join'](_0x3b9810, _0x2ea357[_0x439e65(0x1ce)]));
            return new Package(_0x2ba611, _0x3b9810);
        }
        if (_0x2ea357[_0x439e65(0x1cf)] in _0x3a91f3)
            return _0x3a91f3;
        return new Package(_0x3a91f3, _0x3abed4);
    }
    constructor(_0x410736, _0x111324, _0x100996 = _0x111324) {
        const _0x1b2995 = _0x53e748, _0x31f153 = npa[_0x1b2995(0x1ca)](_0x410736[_0x1b2995(0x1d0)], 'file:' + path[_0x1b2995(0x1d1)](_0x100996, _0x111324), _0x100996);
        this[_0x1b2995(0x1d0)] = _0x410736[_0x1b2995(0x1d0)], this[PKG] = _0x410736, Object[_0x1b2995(0x1d2)](this, PKG, {
            'enumerable': ![],
            'writable': !![]
        }), this[_location] = _0x111324, this[_resolved] = _0x31f153, this[_rootPath] = _0x100996, this[_scripts] = { ..._0x410736[_0x1b2995(0x1b7)] };
    }
    get [_0x53e748(0x1b5)]() {
        return this[_location];
    }
    get ['private']() {
        const _0x3b6ad2 = _0x53e748, _0x5bd69c = {
                'WXfPP': function (_0x4f89f7, _0x5b3f34) {
                    return _0x4f89f7(_0x5b3f34);
                }
            };
        return _0x5bd69c[_0x3b6ad2(0x1d3)](Boolean, this[PKG]['private']);
    }
    get ['resolved']() {
        return this[_resolved];
    }
    get [_0x53e748(0x1b6)]() {
        return this[_rootPath];
    }
    get [_0x53e748(0x1b7)]() {
        return this[_scripts];
    }
    get [_0x53e748(0x1d4)]() {
        const _0xc0de8d = _0x53e748, _0x48a40c = {
                'GsTTO': function (_0x55842d, _0x2016e5) {
                    return _0x55842d === _0x2016e5;
                },
                'rcJxF': _0xc0de8d(0x1c5),
                'HycNw': function (_0xbb7bea, _0x52781c) {
                    return _0xbb7bea(_0x52781c);
                }
            }, _0x4ed356 = this[PKG];
        return _0x48a40c[_0xc0de8d(0x1d5)](typeof _0x4ed356[_0xc0de8d(0x1d4)], _0x48a40c[_0xc0de8d(0x1d6)]) ? { [_0x48a40c[_0xc0de8d(0x1d7)](binSafeName, this[_0xc0de8d(0x1d8)])]: _0x4ed356[_0xc0de8d(0x1d4)] } : Object[_0xc0de8d(0x1c3)]({}, _0x4ed356[_0xc0de8d(0x1d4)]);
    }
    get [_0x53e748(0x1d9)]() {
        const _0x56c7f8 = _0x53e748, _0x4d3ec6 = {
                'mPurE': 'node_modules',
                'XfrXX': _0x56c7f8(0x1da)
            };
        return path[_0x56c7f8(0x1db)](this[_0x56c7f8(0x1b5)], _0x4d3ec6[_0x56c7f8(0x1dc)], _0x4d3ec6[_0x56c7f8(0x1dd)]);
    }
    get [_0x53e748(0x1de)]() {
        const _0x461882 = _0x53e748, _0x47df78 = { 'NXBQl': _0x461882(0x1c6) };
        return path[_0x461882(0x1db)](this[_0x461882(0x1b5)], _0x47df78[_0x461882(0x1df)]);
    }
    get [_0x53e748(0x1e0)]() {
        const _0x25fac8 = _0x53e748, _0x39d9d0 = { 'XQaHd': _0x25fac8(0x1e1) };
        return path[_0x25fac8(0x1db)](this[_0x25fac8(0x1b5)], _0x39d9d0[_0x25fac8(0x1e2)]);
    }
    get [_0x53e748(0x1c7)]() {
        return !![];
    }
    get [_0x53e748(0x1e3)]() {
        const _0x4b8ebf = _0x53e748;
        return this[PKG][_0x4b8ebf(0x1e3)];
    }
    set [_0x53e748(0x1e3)](_0x3344a2) {
        const _0x2b5b80 = _0x53e748;
        this[PKG][_0x2b5b80(0x1e3)] = _0x3344a2;
    }
    get ['contents']() {
        const _0x1a26b5 = _0x53e748;
        if (this[_contents])
            return this[_contents];
        if (this[PKG][_0x1a26b5(0x1e4)] && this[PKG]['publishConfig'][_0x1a26b5(0x1e5)])
            return path['join'](this[_0x1a26b5(0x1b5)], this[PKG][_0x1a26b5(0x1e4)]['directory']);
        return this['location'];
    }
    set [_0x53e748(0x1b8)](_0x316e2f) {
        const _0x261573 = _0x53e748;
        this[_contents] = path['join'](this[_0x261573(0x1b5)], _0x316e2f);
    }
    get [_0x53e748(0x1e6)]() {
        const _0x33700a = _0x53e748;
        return this[PKG][_0x33700a(0x1e6)];
    }
    get [_0x53e748(0x1e7)]() {
        const _0x30b6d9 = _0x53e748;
        return this[PKG][_0x30b6d9(0x1e7)];
    }
    get [_0x53e748(0x1e8)]() {
        return this[PKG]['optionalDependencies'];
    }
    get [_0x53e748(0x1e9)]() {
        return this[PKG]['peerDependencies'];
    }
    [_0x53e748(0x1ea)](_0xe5d988) {
        return this[PKG][_0xe5d988];
    }
    ['set'](_0x59b177, _0x2a8899) {
        return this[PKG][_0x59b177] = _0x2a8899, this;
    }
    [_0x53e748(0x1eb)]() {
        const _0x2eabd6 = _0x53e748, _0x118ec0 = {
                'nzeOp': function (_0x413e6c, _0x3a3fc6) {
                    return _0x413e6c(_0x3a3fc6);
                }
            };
        return _0x118ec0[_0x2eabd6(0x1ec)](shallowCopy, this[PKG]);
    }
    ['refresh']() {
        const _0x555dcb = _0x53e748, _0x3e821c = {
                'krihE': function (_0x57c5ca, _0x498ef8) {
                    return _0x57c5ca(_0x498ef8);
                }
            };
        return _0x3e821c['krihE'](loadJsonFile, this[_0x555dcb(0x1de)])[_0x555dcb(0x1ed)](_0x4af473 => {
            return this[PKG] = _0x4af473, this;
        });
    }
    ['serialize']() {
        const _0x2f8ccf = _0x53e748, _0x30008f = {
                'WOOkD': function (_0x913de9, _0x582445, _0x25853d) {
                    return _0x913de9(_0x582445, _0x25853d);
                }
            };
        return _0x30008f[_0x2f8ccf(0x1ee)](writePkg, this[_0x2f8ccf(0x1de)], this[PKG])['then'](() => this);
    }
    ['updateLocalDependency'](_0x9f0ae4, _0x3f5224, _0x21598e) {
        const _0x429971 = _0x53e748, _0x57bbb5 = { 'VjbQN': _0x429971(0x1e5) }, _0x4dd403 = _0x9f0ae4[_0x429971(0x1d0)];
        let _0x4c2563 = this['dependencies'];
        (!_0x4c2563 || !_0x4c2563[_0x4dd403]) && (_0x4c2563 = this[_0x429971(0x1e8)]);
        (!_0x4c2563 || !_0x4c2563[_0x4dd403]) && (_0x4c2563 = this['devDependencies']);
        if (_0x9f0ae4['registry'] || _0x9f0ae4[_0x429971(0x1ef)] === _0x57bbb5['VjbQN'])
            _0x4c2563[_0x4dd403] = '' + _0x21598e + _0x3f5224;
        else {
            if (_0x9f0ae4[_0x429971(0x1f0)]) {
                const [_0x492b12] = /^\D*/[_0x429971(0x1f1)](_0x9f0ae4[_0x429971(0x1f0)]), {hosted: _0x42ea9b} = _0x9f0ae4;
                _0x42ea9b[_0x429971(0x1f2)] = '' + _0x492b12 + _0x3f5224, _0x4c2563[_0x4dd403] = _0x42ea9b[_0x429971(0x1f3)]({
                    'noGitPlus': ![],
                    'noCommittish': ![]
                });
            } else {
                if (_0x9f0ae4[_0x429971(0x1f4)]) {
                    const {hosted: _0x4bde6c} = _0x9f0ae4;
                    _0x4bde6c[_0x429971(0x1f2)] = _0x429971(0x1f5) + _0x21598e + _0x3f5224, _0x4c2563[_0x4dd403] = _0x4bde6c['toString']({
                        'noGitPlus': ![],
                        'noCommittish': ![]
                    });
                }
            }
        }
    }
}
module[_0x53e748(0x1f6)][_0x53e748(0x1f7)] = Package;
