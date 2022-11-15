function _0x3f13(_0x30b67e, _0x40a5cc) {
    return _0x3f13 = function (_0x2d88c4, _0x3f13ab) {
        _0x2d88c4 = _0x2d88c4 - 328;
        let _0x46b280 = _0x2d88[_0x2d88c4];
        return _0x46b280;
    }, _0x3f13(_0x30b67e, _0x40a5cc);
}
const {extname} = require('path'), Promise = require(_0x55ff9f(337)), getExtname = _0x5c4183 => {
        const _0xa5a2ec = _0x55ff9f;
        if (typeof _0x5c4183 !== _0xa5a2ec(338))
            return '';
        const _0x538d72 = extname(_0x5c4183) || _0x5c4183;
        return _0x538d72['startsWith']('.') ? _0x538d72[_0xa5a2ec(339)](1) : _0x538d72;
    };
class Renderer {
    constructor() {
        const _0x239256 = _0x55ff9f;
        this[_0x239256(340)] = {}, this[_0x239256(341)] = {};
    }
    ['list'](_0x45c923) {
        const _0x9e9ae4 = _0x55ff9f;
        return _0x45c923 ? this[_0x9e9ae4(341)] : this[_0x9e9ae4(340)];
    }
    [_0x55ff9f(342)](_0x1f2562, _0x3740cc) {
        const _0x1a584e = _0x55ff9f, _0x33c976 = this[_0x3740cc ? 'storeSync' : _0x1a584e(340)];
        return _0x33c976[getExtname(_0x1f2562)] || _0x33c976[_0x1f2562];
    }
    [_0x55ff9f(343)](_0x3883f0) {
        const _0x469af2 = _0x55ff9f;
        return Boolean(this[_0x469af2(342)](_0x3883f0));
    }
    [_0x55ff9f(344)](_0x385505) {
        const _0x1cc039 = _0x55ff9f;
        return Boolean(this[_0x1cc039(342)](_0x385505, !![]));
    }
    ['getOutput'](_0x4d6ed2) {
        const _0x133955 = _0x55ff9f, _0x51f239 = this[_0x133955(342)](_0x4d6ed2);
        return _0x51f239 ? _0x51f239['output'] : '';
    }
    ['register'](_0x1147d0, _0xe2a9d, _0xb5492e, _0x176bb1) {
        const _0x33152b = _0x55ff9f;
        if (!_0x1147d0)
            throw new TypeError(_0x33152b(345));
        if (!_0xe2a9d)
            throw new TypeError(_0x33152b(346));
        if (typeof _0xb5492e !== _0x33152b(347))
            throw new TypeError(_0x33152b(348));
        _0x1147d0 = getExtname(_0x1147d0), _0xe2a9d = getExtname(_0xe2a9d);
        if (_0x176bb1)
            this[_0x33152b(341)][_0x1147d0] = _0xb5492e, this['storeSync'][_0x1147d0][_0x33152b(349)] = _0xe2a9d, this[_0x33152b(340)][_0x1147d0] = Promise[_0x33152b(350)](_0xb5492e);
        else {
            if (_0xb5492e['length'] > 2)
                _0xb5492e = Promise['promisify'](_0xb5492e);
            this['store'][_0x1147d0] = _0xb5492e;
        }
        this[_0x33152b(340)][_0x1147d0]['output'] = _0xe2a9d, this[_0x33152b(340)][_0x1147d0][_0x33152b(351)] = _0xb5492e[_0x33152b(351)];
    }
}
module[_0x55ff9f(352)] = Renderer;