'use strict';
const _0x2d88 = [
    'slice',
    'store',
    'storeSync',
    'get',
    'isRenderable',
    'isRenderableSync',
    'name\x20is\x20required',
    'output\x20is\x20required',
    'function',
    'fn\x20must\x20be\x20a\x20function',
    'output',
    'method',
    'compile',
    'exports',
    '817223lfrrJU',
    '1UZPqpx',
    '1463056HVxfgN',
    '313203diaBzF',
    '829783VEaKWe',
    '193641JXtIeU',
    '509253cTVcEV',
    '1TOPSxU',
    '446217VKBHcn',
    'bluebird',
    'string'
];
const _0x55ff9f = _0x3f13;
(function (_0x5259d7, _0x309630) {
    const _0x16afdb = _0x3f13;
    while (!![]) {
        try {
            const _0x28fa42 = -parseInt(_0x16afdb(0x148)) * -parseInt(_0x16afdb(0x149)) + -parseInt(_0x16afdb(0x14a)) + parseInt(_0x16afdb(0x14b)) + parseInt(_0x16afdb(0x14c)) + parseInt(_0x16afdb(0x14d)) + parseInt(_0x16afdb(0x14e)) + -parseInt(_0x16afdb(0x14f)) * parseInt(_0x16afdb(0x150));
            if (_0x28fa42 === _0x309630)
                break;
            else
                _0x5259d7['push'](_0x5259d7['shift']());
        } catch (_0x5b8307) {
            _0x5259d7['push'](_0x5259d7['shift']());
        }
    }
}(_0x2d88, 0xb80a6));
function _0x3f13(_0x30b67e, _0x40a5cc) {
    return _0x3f13 = function (_0x2d88c4, _0x3f13ab) {
        _0x2d88c4 = _0x2d88c4 - 0x148;
        let _0x46b280 = _0x2d88[_0x2d88c4];
        return _0x46b280;
    }, _0x3f13(_0x30b67e, _0x40a5cc);
}
const {extname} = require('path'), Promise = require(_0x55ff9f(0x151)), getExtname = _0x5c4183 => {
        const _0xa5a2ec = _0x55ff9f;
        if (typeof _0x5c4183 !== _0xa5a2ec(0x152))
            return '';
        const _0x538d72 = extname(_0x5c4183) || _0x5c4183;
        return _0x538d72['startsWith']('.') ? _0x538d72[_0xa5a2ec(0x153)](0x1) : _0x538d72;
    };
class Renderer {
    constructor() {
        const _0x239256 = _0x55ff9f;
        this[_0x239256(0x154)] = {}, this[_0x239256(0x155)] = {};
    }
    ['list'](_0x45c923) {
        const _0x9e9ae4 = _0x55ff9f;
        return _0x45c923 ? this[_0x9e9ae4(0x155)] : this[_0x9e9ae4(0x154)];
    }
    [_0x55ff9f(0x156)](_0x1f2562, _0x3740cc) {
        const _0x1a584e = _0x55ff9f, _0x33c976 = this[_0x3740cc ? 'storeSync' : _0x1a584e(0x154)];
        return _0x33c976[getExtname(_0x1f2562)] || _0x33c976[_0x1f2562];
    }
    [_0x55ff9f(0x157)](_0x3883f0) {
        const _0x469af2 = _0x55ff9f;
        return Boolean(this[_0x469af2(0x156)](_0x3883f0));
    }
    [_0x55ff9f(0x158)](_0x385505) {
        const _0x1cc039 = _0x55ff9f;
        return Boolean(this[_0x1cc039(0x156)](_0x385505, !![]));
    }
    ['getOutput'](_0x4d6ed2) {
        const _0x133955 = _0x55ff9f, _0x51f239 = this[_0x133955(0x156)](_0x4d6ed2);
        return _0x51f239 ? _0x51f239['output'] : '';
    }
    ['register'](_0x1147d0, _0xe2a9d, _0xb5492e, _0x176bb1) {
        const _0x33152b = _0x55ff9f;
        if (!_0x1147d0)
            throw new TypeError(_0x33152b(0x159));
        if (!_0xe2a9d)
            throw new TypeError(_0x33152b(0x15a));
        if (typeof _0xb5492e !== _0x33152b(0x15b))
            throw new TypeError(_0x33152b(0x15c));
        _0x1147d0 = getExtname(_0x1147d0), _0xe2a9d = getExtname(_0xe2a9d);
        if (_0x176bb1)
            this[_0x33152b(0x155)][_0x1147d0] = _0xb5492e, this['storeSync'][_0x1147d0][_0x33152b(0x15d)] = _0xe2a9d, this[_0x33152b(0x154)][_0x1147d0] = Promise[_0x33152b(0x15e)](_0xb5492e);
        else {
            if (_0xb5492e['length'] > 0x2)
                _0xb5492e = Promise['promisify'](_0xb5492e);
            this['store'][_0x1147d0] = _0xb5492e;
        }
        this[_0x33152b(0x154)][_0x1147d0]['output'] = _0xe2a9d, this[_0x33152b(0x154)][_0x1147d0][_0x33152b(0x15f)] = _0xb5492e[_0x33152b(0x15f)];
    }
}
module[_0x55ff9f(0x160)] = Renderer;
