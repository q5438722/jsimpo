'use strict';
const _0x8b18 = [
    '__isLernaPackage',
    'file:',
    'name',
    'defineProperty',
    'private',
    'bin',
    'string',
    'binLocation',
    '.bin',
    'manifestLocation',
    'node_modules',
    'version',
    'publishConfig',
    'directory',
    'dependencies',
    'devDependencies',
    'optionalDependencies',
    'peerDependencies',
    'get',
    'toJSON',
    'refresh',
    'then',
    'registry',
    'type',
    'gitCommittish',
    'exec',
    'committish',
    'gitRange',
    'semver:',
    'toString',
    'exports',
    'Package',
    '12185yuaEme',
    '43MMjVao',
    '4782DulQVD',
    '109YgebBL',
    '90635DoULxu',
    '5bUZxXi',
    '93382sHlzDE',
    '4gnshpQ',
    '380509yniUWp',
    '482631YvmsxC',
    '1001512RWBqal',
    'path',
    'load-json-file',
    'write-pkg',
    'pkg',
    'location',
    'resolved',
    'rootPath',
    'scripts',
    'contents',
    'substring',
    'length',
    'keys',
    'isArray',
    'assign',
    'lazy',
    'resolve',
    'package.json',
    'join'
];
const _0x4e512f = _0x2857;
(function (_0x5ec0d1, _0x487361) {
    const _0x4376d0 = _0x2857;
    while (!![]) {
        try {
            const _0x5c5c42 = parseInt(_0x4376d0(0x1f0)) * parseInt(_0x4376d0(0x1f1)) + parseInt(_0x4376d0(0x1f2)) * -parseInt(_0x4376d0(0x1f3)) + parseInt(_0x4376d0(0x1f4)) * -parseInt(_0x4376d0(0x1f5)) + parseInt(_0x4376d0(0x1f6)) * -parseInt(_0x4376d0(0x1f7)) + -parseInt(_0x4376d0(0x1f8)) + parseInt(_0x4376d0(0x1f9)) + parseInt(_0x4376d0(0x1fa));
            if (_0x5c5c42 === _0x487361)
                break;
            else
                _0x5ec0d1['push'](_0x5ec0d1['shift']());
        } catch (_0x416a4a) {
            _0x5ec0d1['push'](_0x5ec0d1['shift']());
        }
    }
}(_0x8b18, 0x44460));
const npa = require('npm-package-arg'), path = require(_0x4e512f(0x1fb)), loadJsonFile = require(_0x4e512f(0x1fc)), writePkg = require(_0x4e512f(0x1fd)), PKG = Symbol(_0x4e512f(0x1fe)), _location = Symbol(_0x4e512f(0x1ff)), _resolved = Symbol(_0x4e512f(0x200)), _rootPath = Symbol(_0x4e512f(0x201)), _scripts = Symbol(_0x4e512f(0x202)), _contents = Symbol(_0x4e512f(0x203));
function binSafeName({
    name: _0x488bc1,
    scope: _0xf44c6a
}) {
    const _0x4eed09 = _0x4e512f;
    return _0xf44c6a ? _0x488bc1[_0x4eed09(0x204)](_0xf44c6a[_0x4eed09(0x205)] + 0x1) : _0x488bc1;
}
function shallowCopy(_0x31758e) {
    const _0x284a0f = _0x4e512f;
    return Object[_0x284a0f(0x206)](_0x31758e)['reduce']((_0x58b42f, _0x2a5f91) => {
        const _0x4fdd2a = _0x284a0f, _0x3a3f55 = _0x31758e[_0x2a5f91];
        if (Array[_0x4fdd2a(0x207)](_0x3a3f55))
            _0x58b42f[_0x2a5f91] = _0x3a3f55['slice']();
        else
            _0x3a3f55 && typeof _0x3a3f55 === 'object' ? _0x58b42f[_0x2a5f91] = Object[_0x4fdd2a(0x208)]({}, _0x3a3f55) : _0x58b42f[_0x2a5f91] = _0x3a3f55;
        return _0x58b42f;
    }, {});
}
function _0x2857(_0x4ac22d, _0x2c6acc) {
    return _0x2857 = function (_0x8b18d9, _0x2857f3) {
        _0x8b18d9 = _0x8b18d9 - 0x1f0;
        let _0x487c12 = _0x8b18[_0x8b18d9];
        return _0x487c12;
    }, _0x2857(_0x4ac22d, _0x2c6acc);
}
class Package {
    static [_0x4e512f(0x209)](_0x2dedc9, _0xaa5b94 = '.') {
        const _0x5f222e = _0x4e512f;
        if (typeof _0x2dedc9 === 'string') {
            const _0x2c98a9 = path[_0x5f222e(0x20a)](path['basename'](_0x2dedc9) === _0x5f222e(0x20b) ? path['dirname'](_0x2dedc9) : _0x2dedc9), _0x4b35d4 = loadJsonFile['sync'](path[_0x5f222e(0x20c)](_0x2c98a9, 'package.json'));
            return new Package(_0x4b35d4, _0x2c98a9);
        }
        if (_0x5f222e(0x20d) in _0x2dedc9)
            return _0x2dedc9;
        return new Package(_0x2dedc9, _0xaa5b94);
    }
    constructor(_0x41dcce, _0x1bec8f, _0x5894c9 = _0x1bec8f) {
        const _0x4685be = _0x4e512f, _0x48d844 = npa[_0x4685be(0x20a)](_0x41dcce['name'], _0x4685be(0x20e) + path['relative'](_0x5894c9, _0x1bec8f), _0x5894c9);
        this[_0x4685be(0x20f)] = _0x41dcce[_0x4685be(0x20f)], this[PKG] = _0x41dcce, Object[_0x4685be(0x210)](this, PKG, {
            'enumerable': ![],
            'writable': !![]
        }), this[_location] = _0x1bec8f, this[_resolved] = _0x48d844, this[_rootPath] = _0x5894c9, this[_scripts] = { ..._0x41dcce[_0x4685be(0x202)] };
    }
    get [_0x4e512f(0x1ff)]() {
        return this[_location];
    }
    get ['private']() {
        const _0x4cd40c = _0x4e512f;
        return Boolean(this[PKG][_0x4cd40c(0x211)]);
    }
    get ['resolved']() {
        return this[_resolved];
    }
    get [_0x4e512f(0x201)]() {
        return this[_rootPath];
    }
    get ['scripts']() {
        return this[_scripts];
    }
    get ['bin']() {
        const _0xb6355e = _0x4e512f, _0x3761e5 = this[PKG];
        return typeof _0x3761e5[_0xb6355e(0x212)] === _0xb6355e(0x213) ? { [binSafeName(this['resolved'])]: _0x3761e5[_0xb6355e(0x212)] } : Object[_0xb6355e(0x208)]({}, _0x3761e5[_0xb6355e(0x212)]);
    }
    get [_0x4e512f(0x214)]() {
        const _0x28a2f3 = _0x4e512f;
        return path['join'](this[_0x28a2f3(0x1ff)], 'node_modules', _0x28a2f3(0x215));
    }
    get [_0x4e512f(0x216)]() {
        const _0x7c3a83 = _0x4e512f;
        return path[_0x7c3a83(0x20c)](this[_0x7c3a83(0x1ff)], _0x7c3a83(0x20b));
    }
    get ['nodeModulesLocation']() {
        const _0x54f820 = _0x4e512f;
        return path['join'](this[_0x54f820(0x1ff)], _0x54f820(0x217));
    }
    get [_0x4e512f(0x20d)]() {
        return !![];
    }
    get ['version']() {
        const _0xb65aee = _0x4e512f;
        return this[PKG][_0xb65aee(0x218)];
    }
    set [_0x4e512f(0x218)](_0x5f2b3f) {
        this[PKG]['version'] = _0x5f2b3f;
    }
    get ['contents']() {
        const _0x28153e = _0x4e512f;
        if (this[_contents])
            return this[_contents];
        if (this[PKG][_0x28153e(0x219)] && this[PKG][_0x28153e(0x219)][_0x28153e(0x21a)])
            return path['join'](this[_0x28153e(0x1ff)], this[PKG]['publishConfig']['directory']);
        return this[_0x28153e(0x1ff)];
    }
    set ['contents'](_0x12fcdd) {
        const _0x29859a = _0x4e512f;
        this[_contents] = path[_0x29859a(0x20c)](this[_0x29859a(0x1ff)], _0x12fcdd);
    }
    get [_0x4e512f(0x21b)]() {
        const _0x1d9c8e = _0x4e512f;
        return this[PKG][_0x1d9c8e(0x21b)];
    }
    get [_0x4e512f(0x21c)]() {
        const _0x2d9c46 = _0x4e512f;
        return this[PKG][_0x2d9c46(0x21c)];
    }
    get [_0x4e512f(0x21d)]() {
        const _0x1f351c = _0x4e512f;
        return this[PKG][_0x1f351c(0x21d)];
    }
    get [_0x4e512f(0x21e)]() {
        const _0x175080 = _0x4e512f;
        return this[PKG][_0x175080(0x21e)];
    }
    [_0x4e512f(0x21f)](_0x509717) {
        return this[PKG][_0x509717];
    }
    ['set'](_0x5b9374, _0x4609ad) {
        return this[PKG][_0x5b9374] = _0x4609ad, this;
    }
    [_0x4e512f(0x220)]() {
        return shallowCopy(this[PKG]);
    }
    [_0x4e512f(0x221)]() {
        const _0xc41432 = _0x4e512f;
        return loadJsonFile(this[_0xc41432(0x216)])[_0xc41432(0x222)](_0x259edd => {
            return this[PKG] = _0x259edd, this;
        });
    }
    ['serialize']() {
        const _0x7eff39 = _0x4e512f;
        return writePkg(this[_0x7eff39(0x216)], this[PKG])[_0x7eff39(0x222)](() => this);
    }
    ['updateLocalDependency'](_0x32ae92, _0x5a2983, _0x3811c2) {
        const _0x478dbd = _0x4e512f, _0x5e86bc = _0x32ae92[_0x478dbd(0x20f)];
        let _0x14d1fd = this[_0x478dbd(0x21b)];
        (!_0x14d1fd || !_0x14d1fd[_0x5e86bc]) && (_0x14d1fd = this[_0x478dbd(0x21d)]);
        (!_0x14d1fd || !_0x14d1fd[_0x5e86bc]) && (_0x14d1fd = this['devDependencies']);
        if (_0x32ae92[_0x478dbd(0x223)] || _0x32ae92[_0x478dbd(0x224)] === 'directory')
            _0x14d1fd[_0x5e86bc] = '' + _0x3811c2 + _0x5a2983;
        else {
            if (_0x32ae92[_0x478dbd(0x225)]) {
                const [_0x2f3393] = /^\D*/[_0x478dbd(0x226)](_0x32ae92[_0x478dbd(0x225)]), {hosted: _0x23e9f2} = _0x32ae92;
                _0x23e9f2[_0x478dbd(0x227)] = '' + _0x2f3393 + _0x5a2983, _0x14d1fd[_0x5e86bc] = _0x23e9f2['toString']({
                    'noGitPlus': ![],
                    'noCommittish': ![]
                });
            } else {
                if (_0x32ae92[_0x478dbd(0x228)]) {
                    const {hosted: _0x4535b0} = _0x32ae92;
                    _0x4535b0['committish'] = _0x478dbd(0x229) + _0x3811c2 + _0x5a2983, _0x14d1fd[_0x5e86bc] = _0x4535b0[_0x478dbd(0x22a)]({
                        'noGitPlus': ![],
                        'noCommittish': ![]
                    });
                }
            }
        }
    }
}
module[_0x4e512f(0x22b)][_0x4e512f(0x22c)] = Package;
