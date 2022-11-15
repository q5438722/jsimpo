var inherits = require('inherits');
var SHA512 = require('./sha512');
var Hash = require('./hash');
var Buffer = require('safe-buffer')['Buffer'];
var W = new Array(160);
function Sha384() {
    this['init']();
    this['_w'] = W;
    Hash['call'](this, 128, 112);
}
inherits(Sha384, SHA512);
Sha384['prototype']['init'] = function () {
    var _0x2988df = '9|13|14|12|8|5|16|7|1|6|4|0|3|11|15|2|10'['split']('|'), _0x1361e0 = 0;
    while (!![]) {
        switch (_0x2988df[_0x1361e0++]) {
        case '0':
            this['_dl'] = 4144912697;
            continue;
        case '1':
            this['_al'] = 3238371032;
            continue;
        case '2':
            this['_hl'] = 3204075428;
            continue;
        case '3':
            this['_el'] = 4290775857;
            continue;
        case '4':
            this['_cl'] = 812702999;
            continue;
        case '5':
            this['_fh'] = 2394180231;
            continue;
        case '6':
            this['_bl'] = 914150663;
            continue;
        case '7':
            this['_hh'] = 1203062813;
            continue;
        case '8':
            this['_eh'] = 1731405415;
            continue;
        case '9':
            this['_ah'] = 3418070365;
            continue;
        case '10':
            return this;
        case '11':
            this['_fl'] = 1750603025;
            continue;
        case '12':
            this['_dh'] = 355462360;
            continue;
        case '13':
            this['_bh'] = 1654270250;
            continue;
        case '14':
            this['_ch'] = 2438529370;
            continue;
        case '15':
            this['_gl'] = 1694076839;
            continue;
        case '16':
            this['_gh'] = 3675008525;
            continue;
        }
        break;
    }
};
Sha384['prototype']['_hash'] = function () {
    var _0x525108 = Buffer['allocUnsafe'](48);
    function _0x1055da(_0x64e7c, _0x2a56a5, _0x2f328f) {
        _0x525108['writeInt32BE'](_0x64e7c, _0x2f328f);
        _0x525108['writeInt32BE'](_0x2a56a5, _0x2f328f + 4);
    }
    _0x1055da(this['_ah'], this['_al'], 0);
    _0x1055da(this['_bh'], this['_bl'], 8);
    _0x1055da(this['_ch'], this['_cl'], 16);
    _0x1055da(this['_dh'], this['_dl'], 24);
    _0x1055da(this['_eh'], this['_el'], 32);
    _0x1055da(this['_fh'], this['_fl'], 40);
    return _0x525108;
};
module['exports'] = Sha384;