function _0x16b2(_0x2f5056, _0x44cb3c) {
    return _0x16b2 = function (_0x233ab0, _0x16b2fe) {
        _0x233ab0 = _0x233ab0 - 350;
        let _0x2cedd8 = _0x233a[_0x233ab0];
        return _0x2cedd8;
    }, _0x16b2(_0x2f5056, _0x44cb3c);
}
const {extname} = require(_0x47f452(360)), Promise = require(_0x47f452(361)), getExtname = _0x91a1ff => {
        const _0x5d31e2 = _0x47f452;
        if (typeof _0x91a1ff !== _0x5d31e2(362))
            return '';
        const _0x27cf37 = extname(_0x91a1ff) || _0x91a1ff;
        return _0x27cf37[_0x5d31e2(363)]('.') ? _0x27cf37[_0x5d31e2(364)](1) : _0x27cf37;
    };
class Renderer {
    constructor() {
        const _0x4ce454 = _0x47f452;
        this['store'] = {}, this[_0x4ce454(365)] = {};
    }
    [_0x47f452(366)](_0x30ca2a) {
        const _0x1f993c = _0x47f452;
        return _0x30ca2a ? this['storeSync'] : this[_0x1f993c(367)];
    }
    [_0x47f452(368)](_0x27291b, _0x302b2a) {
        const _0x4b334f = _0x47f452, _0x50ff3c = this[_0x302b2a ? 'storeSync' : _0x4b334f(367)];
        return _0x50ff3c[getExtname(_0x27291b)] || _0x50ff3c[_0x27291b];
    }
    [_0x47f452(369)](_0xd5f49d) {
        const _0x351bec = _0x47f452;
        return Boolean(this[_0x351bec(368)](_0xd5f49d));
    }
    [_0x47f452(370)](_0x238131) {
        return Boolean(this['get'](_0x238131, !![]));
    }
    ['getOutput'](_0x31cccd) {
        const _0x2cef9f = _0x47f452, _0xa7d798 = this[_0x2cef9f(368)](_0x31cccd);
        return _0xa7d798 ? _0xa7d798[_0x2cef9f(371)] : '';
    }
    [_0x47f452(372)](_0x1203c1, _0x19a67c, _0x11ee20, _0xf83411) {
        const _0x47c4b0 = _0x47f452;
        if (!_0x1203c1)
            throw new TypeError(_0x47c4b0(373));
        if (!_0x19a67c)
            throw new TypeError(_0x47c4b0(374));
        if (typeof _0x11ee20 !== _0x47c4b0(375))
            throw new TypeError(_0x47c4b0(376));
        _0x1203c1 = getExtname(_0x1203c1), _0x19a67c = getExtname(_0x19a67c);
        if (_0xf83411)
            this['storeSync'][_0x1203c1] = _0x11ee20, this[_0x47c4b0(365)][_0x1203c1][_0x47c4b0(371)] = _0x19a67c, this[_0x47c4b0(367)][_0x1203c1] = Promise[_0x47c4b0(377)](_0x11ee20);
        else {
            if (_0x11ee20[_0x47c4b0(378)] > 2)
                _0x11ee20 = Promise[_0x47c4b0(379)](_0x11ee20);
            this['store'][_0x1203c1] = _0x11ee20;
        }
        this[_0x47c4b0(367)][_0x1203c1][_0x47c4b0(371)] = _0x19a67c, this[_0x47c4b0(367)][_0x1203c1]['compile'] = _0x11ee20[_0x47c4b0(380)];
    }
}
module['exports'] = Renderer;