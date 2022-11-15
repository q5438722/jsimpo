var inherits = require(_0x54cb77(298)), SHA512 = require(_0x54cb77(299)), Hash = require(_0x54cb77(300)), Buffer = require('safe-buffer')['Buffer'], W = new Array(160);
function Sha384() {
    var _0x2bf4d7 = _0x54cb77;
    this[_0x2bf4d7(301)](), this['_w'] = W, Hash['call'](this, 128, 112);
}
inherits(Sha384, SHA512), Sha384[_0x54cb77(302)][_0x54cb77(301)] = function () {
    var _0x4393f0 = _0x54cb77;
    return this[_0x4393f0(303)] = 3418070365, this['_bh'] = 1654270250, this['_ch'] = 2438529370, this[_0x4393f0(304)] = 355462360, this['_eh'] = 1731405415, this[_0x4393f0(305)] = 2394180231, this['_gh'] = 3675008525, this[_0x4393f0(306)] = 1203062813, this[_0x4393f0(307)] = 3238371032, this[_0x4393f0(308)] = 914150663, this[_0x4393f0(309)] = 812702999, this[_0x4393f0(310)] = 4144912697, this[_0x4393f0(311)] = 4290775857, this[_0x4393f0(312)] = 1750603025, this[_0x4393f0(313)] = 1694076839, this['_hl'] = 3204075428, this;
}, Sha384[_0x54cb77(302)][_0x54cb77(314)] = function () {
    var _0x7c8d11 = _0x54cb77, _0x52efc5 = Buffer['allocUnsafe'](48);
    function _0x13c04a(_0x179c0c, _0x415e4b, _0x30be64) {
        var _0x39d865 = _0x4f1c;
        _0x52efc5[_0x39d865(315)](_0x179c0c, _0x30be64), _0x52efc5[_0x39d865(315)](_0x415e4b, _0x30be64 + 4);
    }
    return _0x13c04a(this[_0x7c8d11(303)], this[_0x7c8d11(307)], 0), _0x13c04a(this[_0x7c8d11(316)], this[_0x7c8d11(308)], 8), _0x13c04a(this[_0x7c8d11(317)], this[_0x7c8d11(309)], 16), _0x13c04a(this[_0x7c8d11(304)], this[_0x7c8d11(310)], 24), _0x13c04a(this[_0x7c8d11(318)], this[_0x7c8d11(311)], 32), _0x13c04a(this[_0x7c8d11(305)], this[_0x7c8d11(312)], 40), _0x52efc5;
}, module['exports'] = Sha384;