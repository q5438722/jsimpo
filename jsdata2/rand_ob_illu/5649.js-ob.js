const _0x1413 = ['QDOhM', '_dl', '_eh', 'exports', '726gUiNlG', '845vocklF', '158isNVhH', '1412foNlbU', '9RNhzvR', '84543FBSIMk', '75018WgTeTd', '4INJeKf', '2HLmYmL', '510229yGydhM', '272841sOQfHn', '1552547RzQirL', 'inherits', './sha512', './hash', 'safe-buffer', 'Buffer', 'init', 'call', 'prototype', '9|15|10|0|12|11|4|16|13|6|1|14|3|8|7|5|2', '_dh', '_cl', '_el', '_gh', '_hl', '_bl', '_gl', '_fl', '_ah', '_ch', '_al', '_bh', '_hh', '_hash', 'allocUnsafe', 'writeInt32BE', 'FbqiU', 'WwZmu'];

function _0x77de(_0x1e3bc4, _0x12466f) {
    return _0x77de = function (_0x32d814, _0x3e2347) {
        _0x32d814 = _0x32d814 - 211;
        const _0x525f52 = _0x1413[_0x32d814];

        return _0x525f52;
    }, _0x77de(_0x1e3bc4, _0x12466f);
}
const _0x400b99 = _0x77de;

(function (_0x4e2399, _0x3149a9) {
    const _0x33dc9e = _0x77de;

    while (true) {
        try {
            const _0x4e5065 = parseInt(_0x33dc9e(0xd3)) * parseInt(_0x33dc9e(0xd4)) + -parseInt(_0x33dc9e(0xd5)) * parseInt(_0x33dc9e(0xd6)) + -parseInt(_0x33dc9e(0xd7)) * -parseInt(_0x33dc9e(0xd8)) + -parseInt(_0x33dc9e(0xd9)) * -parseInt(_0x33dc9e(0xda)) + parseInt(_0x33dc9e(0xdb)) * parseInt(_0x33dc9e(0xdc)) + -parseInt(_0x33dc9e(0xdd)) + -parseInt(_0x33dc9e(0xde));

            if (_0x4e5065 === _0x3149a9) break;else _0x4e2399.push(_0x4e2399.shift());
        } catch (_0x1d4166) {
            _0x4e2399.push(_0x4e2399.shift());
        }
    }
})(_0x1413, 646403);

const inherits = require(_0x400b99(0xdf));

const SHA512 = require(_0x400b99(0xe0));

const Hash = require(_0x400b99(0xe1));

const Buffer = require(_0x400b99(0xe2))[_0x400b99(0xe3)];

const W = new Array(160);

function Sha384() {
    const _0x32f088 = _0x400b99;

    this[_0x32f088(0xe4)](), this['_w'] = W, Hash[_0x32f088(0xe5)](this, 128, 112);
}
inherits(Sha384, SHA512), Sha384[_0x400b99(0xe6)]['init'] = function () {
    const _0xce0923 = _0x400b99;

    const _0x2cbd86 = _0xce0923(0xe7).split('|');

    var _0x48587f = 0;

    while (true) {
        switch (_0x2cbd86[_0x48587f++]) {
            case '0':
                this[_0xce0923(0xe8)] = 355462360;
                continue;
            case '1':
                this[_0xce0923(0xe9)] = 812702999;
                continue;
            case '2':
                return this;
            case '3':
                this[_0xce0923(0xea)] = 4290775857;
                continue;
            case '4':
                this[_0xce0923(0xeb)] = 3675008525;
                continue;
            case '5':
                this[_0xce0923(0xec)] = 3204075428;
                continue;
            case '6':
                this[_0xce0923(0xed)] = 914150663;
                continue;
            case '7':
                this[_0xce0923(0xee)] = 1694076839;
                continue;
            case '8':
                this[_0xce0923(0xef)] = 1750603025;
                continue;
            case '9':
                this[_0xce0923(0xf0)] = 3418070365;
                continue;
            case '10':
                this[_0xce0923(0xf1)] = 2438529370;
                continue;
            case '11':
                this['_fh'] = 2394180231;
                continue;
            case '12':
                this['_eh'] = 1731405415;
                continue;
            case '13':
                this[_0xce0923(0xf2)] = 3238371032;
                continue;
            case '14':
                this['_dl'] = 4144912697;
                continue;
            case '15':
                this[_0xce0923(0xf3)] = 1654270250;
                continue;
            case '16':
                this[_0xce0923(0xf4)] = 1203062813;
                continue;
        }
        break;
    }
}, Sha384.prototype[_0x400b99(0xf5)] = function () {
    const _0x9c279c = _0x400b99;
    const _0xc1afef = {
        'FbqiU': function (_0x5af1f9, _0x1d38b8) {
            return _0x5af1f9 + _0x1d38b8;
        },
        'WwZmu': function (_0x15a04f, _0x372034, _0x53b4a4, _0x1de099) {
            return _0x15a04f(_0x372034, _0x53b4a4, _0x1de099);
        },
        'QDOhM': function (_0x57ea35, _0x1bcd06, _0xb5f3f9, _0x36a952) {
            return _0x57ea35(_0x1bcd06, _0xb5f3f9, _0x36a952);
        },
        'NzynA': function (_0x4eb369, _0x36a1e2, _0x3f2dee, _0x570d9b) {
            return _0x4eb369(_0x36a1e2, _0x3f2dee, _0x570d9b);
        }
    };

    const _0x1ac0e3 = Buffer[_0x9c279c(0xf6)](48);

    function _0x114e9e(_0x39c873, _0x3ce4de, _0x3ba977) {
        const _0x1b3380 = _0x9c279c;

        _0x1ac0e3.writeInt32BE(_0x39c873, _0x3ba977), _0x1ac0e3[_0x1b3380(0xf7)](_0x3ce4de, _0xc1afef[_0x1b3380(0xf8)](_0x3ba977, 4));
    }
    return _0xc1afef[_0x9c279c(0xf9)](_0x114e9e, this[_0x9c279c(0xf0)], this[_0x9c279c(0xf2)], 0), _0xc1afef[_0x9c279c(0xfa)](_0x114e9e, this._bh, this._bl, 8), _0x114e9e(this[_0x9c279c(0xf1)], this[_0x9c279c(0xe9)], 16), _0xc1afef[_0x9c279c(0xfa)](_0x114e9e, this[_0x9c279c(0xe8)], this[_0x9c279c(0xfb)], 24), _0xc1afef.NzynA(_0x114e9e, this[_0x9c279c(0xfc)], this[_0x9c279c(0xea)], 32), _0x114e9e(this._fh, this[_0x9c279c(0xef)], 40), _0x1ac0e3;
}, module[_0x400b99(0xfd)] = Sha384;
