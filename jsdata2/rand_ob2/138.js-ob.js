'use strict';
const _0x233a = [
    'output\x20is\x20required',
    'function',
    'fn\x20must\x20be\x20a\x20function',
    'method',
    'length',
    'promisify',
    'compile',
    '5uqMVSZ',
    '177681WOEtAD',
    '973768tNJDmT',
    '996116qvAmqU',
    '169OQHupS',
    '5743jHPNpm',
    '279247aKRHSU',
    '2OsomYp',
    '147551uJSBzs',
    '1520484xdBFEO',
    'path',
    'bluebird',
    'string',
    'startsWith',
    'slice',
    'storeSync',
    'list',
    'store',
    'get',
    'isRenderable',
    'isRenderableSync',
    'output',
    'register',
    'name\x20is\x20required'
];
const _0x47f452 = _0x16b2;
(function (_0x1c13a3, _0x99def8) {
    const _0x49e66a = _0x16b2;
    while (!![]) {
        try {
            const _0x20af7c = -parseInt(_0x49e66a(0x15e)) * parseInt(_0x49e66a(0x15f)) + parseInt(_0x49e66a(0x160)) + parseInt(_0x49e66a(0x161)) + -parseInt(_0x49e66a(0x162)) * -parseInt(_0x49e66a(0x163)) + -parseInt(_0x49e66a(0x164)) + -parseInt(_0x49e66a(0x165)) * -parseInt(_0x49e66a(0x166)) + -parseInt(_0x49e66a(0x167));
            if (_0x20af7c === _0x99def8)
                break;
            else
                _0x1c13a3['push'](_0x1c13a3['shift']());
        } catch (_0x3cc8dc) {
            _0x1c13a3['push'](_0x1c13a3['shift']());
        }
    }
}(_0x233a, 0x85a59));
function _0x16b2(_0x2f5056, _0x44cb3c) {
    return _0x16b2 = function (_0x233ab0, _0x16b2fe) {
        _0x233ab0 = _0x233ab0 - 0x15e;
        let _0x2cedd8 = _0x233a[_0x233ab0];
        return _0x2cedd8;
    }, _0x16b2(_0x2f5056, _0x44cb3c);
}
const {extname} = require(_0x47f452(0x168)), Promise = require(_0x47f452(0x169)), getExtname = _0x91a1ff => {
        const _0x5d31e2 = _0x47f452;
        if (typeof _0x91a1ff !== _0x5d31e2(0x16a))
            return '';
        const _0x27cf37 = extname(_0x91a1ff) || _0x91a1ff;
        return _0x27cf37[_0x5d31e2(0x16b)]('.') ? _0x27cf37[_0x5d31e2(0x16c)](0x1) : _0x27cf37;
    };
class Renderer {
    constructor() {
        const _0x4ce454 = _0x47f452;
        this['store'] = {}, this[_0x4ce454(0x16d)] = {};
    }
    [_0x47f452(0x16e)](_0x30ca2a) {
        const _0x1f993c = _0x47f452;
        return _0x30ca2a ? this['storeSync'] : this[_0x1f993c(0x16f)];
    }
    [_0x47f452(0x170)](_0x27291b, _0x302b2a) {
        const _0x4b334f = _0x47f452, _0x50ff3c = this[_0x302b2a ? 'storeSync' : _0x4b334f(0x16f)];
        return _0x50ff3c[getExtname(_0x27291b)] || _0x50ff3c[_0x27291b];
    }
    [_0x47f452(0x171)](_0xd5f49d) {
        const _0x351bec = _0x47f452;
        return Boolean(this[_0x351bec(0x170)](_0xd5f49d));
    }
    [_0x47f452(0x172)](_0x238131) {
        return Boolean(this['get'](_0x238131, !![]));
    }
    ['getOutput'](_0x31cccd) {
        const _0x2cef9f = _0x47f452, _0xa7d798 = this[_0x2cef9f(0x170)](_0x31cccd);
        return _0xa7d798 ? _0xa7d798[_0x2cef9f(0x173)] : '';
    }
    [_0x47f452(0x174)](_0x1203c1, _0x19a67c, _0x11ee20, _0xf83411) {
        const _0x47c4b0 = _0x47f452;
        if (!_0x1203c1)
            throw new TypeError(_0x47c4b0(0x175));
        if (!_0x19a67c)
            throw new TypeError(_0x47c4b0(0x176));
        if (typeof _0x11ee20 !== _0x47c4b0(0x177))
            throw new TypeError(_0x47c4b0(0x178));
        _0x1203c1 = getExtname(_0x1203c1), _0x19a67c = getExtname(_0x19a67c);
        if (_0xf83411)
            this['storeSync'][_0x1203c1] = _0x11ee20, this[_0x47c4b0(0x16d)][_0x1203c1][_0x47c4b0(0x173)] = _0x19a67c, this[_0x47c4b0(0x16f)][_0x1203c1] = Promise[_0x47c4b0(0x179)](_0x11ee20);
        else {
            if (_0x11ee20[_0x47c4b0(0x17a)] > 0x2)
                _0x11ee20 = Promise[_0x47c4b0(0x17b)](_0x11ee20);
            this['store'][_0x1203c1] = _0x11ee20;
        }
        this[_0x47c4b0(0x16f)][_0x1203c1][_0x47c4b0(0x173)] = _0x19a67c, this[_0x47c4b0(0x16f)][_0x1203c1]['compile'] = _0x11ee20[_0x47c4b0(0x17c)];
    }
}
module['exports'] = Renderer;
