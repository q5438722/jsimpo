'use strict';
var inherits = require('inherits');
var HashBase = require('hash-base');
var Buffer = require('safe-buffer')['Buffer'];
var ARRAY16 = new Array(16);
function MD5() {
    var _0x2e8ac1 = '4|2|0|3|1'['split']('|'), _0x3bec3b = 0;
    while (!![]) {
        switch (_0x2e8ac1[_0x3bec3b++]) {
        case '0':
            this['_b'] = 4023233417;
            continue;
        case '1':
            this['_d'] = 271733878;
            continue;
        case '2':
            this['_a'] = 1732584193;
            continue;
        case '3':
            this['_c'] = 2562383102;
            continue;
        case '4':
            HashBase['call'](this, 64);
            continue;
        }
        break;
    }
}
inherits(MD5, HashBase);
MD5['prototype']['_update'] = function () {
    var _0x263eba = '66|25|52|49|54|42|64|71|19|17|65|47|48|12|62|45|21|2|1|5|15|11|59|3|57|73|60|40|46|30|37|34|4|10|14|6|18|41|24|72|44|32|26|68|58|69|51|8|35|7|33|9|61|38|13|29|0|22|31|50|70|27|16|55|36|23|28|20|39|56|63|53|67|43'['split']('|'), _0x5353d8 = 0;
    while (!![]) {
        switch (_0x263eba[_0x5353d8++]) {
        case '0':
            _0x215322 = fnI(_0x215322, _0x54b725, _0xad3ddc, _0x28accb, _0x4532a0[14], 2878612391, 15);
            continue;
        case '1':
            _0xad3ddc = fnF(_0xad3ddc, _0x28accb, _0x215322, _0x54b725, _0x4532a0[12], 1804603682, 7);
            continue;
        case '2':
            _0x28accb = fnF(_0x28accb, _0x215322, _0x54b725, _0xad3ddc, _0x4532a0[11], 2304563134, 22);
            continue;
        case '3':
            _0x54b725 = fnG(_0x54b725, _0xad3ddc, _0x28accb, _0x215322, _0x4532a0[6], 3225465664, 9);
            continue;
        case '4':
            _0x215322 = fnG(_0x215322, _0x54b725, _0xad3ddc, _0x28accb, _0x4532a0[3], 4107603335, 14);
            continue;
        case '5':
            _0x54b725 = fnF(_0x54b725, _0xad3ddc, _0x28accb, _0x215322, _0x4532a0[13], 4254626195, 12);
            continue;
        case '6':
            _0x54b725 = fnG(_0x54b725, _0xad3ddc, _0x28accb, _0x215322, _0x4532a0[2], 4243563512, 9);
            continue;
        case '7':
            _0x28accb = fnH(_0x28accb, _0x215322, _0x54b725, _0xad3ddc, _0x4532a0[6], 76029189, 23);
            continue;
        case '8':
            _0x54b725 = fnH(_0x54b725, _0xad3ddc, _0x28accb, _0x215322, _0x4532a0[0], 3936430074, 11);
            continue;
        case '9':
            _0x54b725 = fnH(_0x54b725, _0xad3ddc, _0x28accb, _0x215322, _0x4532a0[12], 3873151461, 11);
            continue;
        case '10':
            _0x28accb = fnG(_0x28accb, _0x215322, _0x54b725, _0xad3ddc, _0x4532a0[8], 1163531501, 20);
            continue;
        case '11':
            _0x28accb = fnF(_0x28accb, _0x215322, _0x54b725, _0xad3ddc, _0x4532a0[15], 1236535329, 22);
            continue;
        case '12':
            _0x28accb = fnF(_0x28accb, _0x215322, _0x54b725, _0xad3ddc, _0x4532a0[7], 4249261313, 22);
            continue;
        case '13':
            _0xad3ddc = fnI(_0xad3ddc, _0x28accb, _0x215322, _0x54b725, _0x4532a0[0], 4096336452, 6);
            continue;
        case '14':
            _0xad3ddc = fnG(_0xad3ddc, _0x28accb, _0x215322, _0x54b725, _0x4532a0[13], 2850285829, 5);
            continue;
        case '15':
            _0x215322 = fnF(_0x215322, _0x54b725, _0xad3ddc, _0x28accb, _0x4532a0[14], 2792965006, 17);
            continue;
        case '16':
            _0xad3ddc = fnI(_0xad3ddc, _0x28accb, _0x215322, _0x54b725, _0x4532a0[8], 1873313359, 6);
            continue;
        case '17':
            _0x28accb = fnF(_0x28accb, _0x215322, _0x54b725, _0xad3ddc, _0x4532a0[3], 3250441966, 22);
            continue;
        case '18':
            _0x215322 = fnG(_0x215322, _0x54b725, _0xad3ddc, _0x28accb, _0x4532a0[7], 1735328473, 14);
            continue;
        case '19':
            _0x215322 = fnF(_0x215322, _0x54b725, _0xad3ddc, _0x28accb, _0x4532a0[2], 606105819, 17);
            continue;
        case '20':
            _0x54b725 = fnI(_0x54b725, _0xad3ddc, _0x28accb, _0x215322, _0x4532a0[11], 3174756917, 10);
            continue;
        case '21':
            _0x215322 = fnF(_0x215322, _0x54b725, _0xad3ddc, _0x28accb, _0x4532a0[10], 4294925233, 17);
            continue;
        case '22':
            _0x28accb = fnI(_0x28accb, _0x215322, _0x54b725, _0xad3ddc, _0x4532a0[5], 4237533241, 21);
            continue;
        case '23':
            _0x28accb = fnI(_0x28accb, _0x215322, _0x54b725, _0xad3ddc, _0x4532a0[13], 1309151649, 21);
            continue;
        case '24':
            _0xad3ddc = fnH(_0xad3ddc, _0x28accb, _0x215322, _0x54b725, _0x4532a0[5], 4294588738, 4);
            continue;
        case '25':
            for (var _0x3c8a8d = 0; _0x3c8a8d < 16; ++_0x3c8a8d)
                _0x4532a0[_0x3c8a8d] = this['_block']['readInt32LE'](_0x3c8a8d * 4);
            continue;
        case '26':
            _0xad3ddc = fnH(_0xad3ddc, _0x28accb, _0x215322, _0x54b725, _0x4532a0[1], 2763975236, 4);
            continue;
        case '27':
            _0x28accb = fnI(_0x28accb, _0x215322, _0x54b725, _0xad3ddc, _0x4532a0[1], 2240044497, 21);
            continue;
        case '28':
            _0xad3ddc = fnI(_0xad3ddc, _0x28accb, _0x215322, _0x54b725, _0x4532a0[4], 4149444226, 6);
            continue;
        case '29':
            _0x54b725 = fnI(_0x54b725, _0xad3ddc, _0x28accb, _0x215322, _0x4532a0[7], 1126891415, 10);
            continue;
        case '30':
            _0x28accb = fnG(_0x28accb, _0x215322, _0x54b725, _0xad3ddc, _0x4532a0[4], 3889429448, 20);
            continue;
        case '31':
            _0xad3ddc = fnI(_0xad3ddc, _0x28accb, _0x215322, _0x54b725, _0x4532a0[12], 1700485571, 6);
            continue;
        case '32':
            _0x28accb = fnH(_0x28accb, _0x215322, _0x54b725, _0xad3ddc, _0x4532a0[14], 4259657740, 23);
            continue;
        case '33':
            _0xad3ddc = fnH(_0xad3ddc, _0x28accb, _0x215322, _0x54b725, _0x4532a0[9], 3654602809, 4);
            continue;
        case '34':
            _0x54b725 = fnG(_0x54b725, _0xad3ddc, _0x28accb, _0x215322, _0x4532a0[14], 3275163606, 9);
            continue;
        case '35':
            _0x215322 = fnH(_0x215322, _0x54b725, _0xad3ddc, _0x28accb, _0x4532a0[3], 3572445317, 16);
            continue;
        case '36':
            _0x215322 = fnI(_0x215322, _0x54b725, _0xad3ddc, _0x28accb, _0x4532a0[6], 2734768916, 15);
            continue;
        case '37':
            _0xad3ddc = fnG(_0xad3ddc, _0x28accb, _0x215322, _0x54b725, _0x4532a0[9], 568446438, 5);
            continue;
        case '38':
            _0x28accb = fnH(_0x28accb, _0x215322, _0x54b725, _0xad3ddc, _0x4532a0[2], 3299628645, 23);
            continue;
        case '39':
            _0x215322 = fnI(_0x215322, _0x54b725, _0xad3ddc, _0x28accb, _0x4532a0[2], 718787259, 15);
            continue;
        case '40':
            _0x54b725 = fnG(_0x54b725, _0xad3ddc, _0x28accb, _0x215322, _0x4532a0[10], 38016083, 9);
            continue;
        case '41':
            _0x28accb = fnG(_0x28accb, _0x215322, _0x54b725, _0xad3ddc, _0x4532a0[12], 2368359562, 20);
            continue;
        case '42':
            var _0x54b725 = this['_d'];
            continue;
        case '43':
            this['_d'] = this['_d'] + _0x54b725 | 0;
            continue;
        case '44':
            _0x215322 = fnH(_0x215322, _0x54b725, _0xad3ddc, _0x28accb, _0x4532a0[11], 1839030562, 16);
            continue;
        case '45':
            _0x54b725 = fnF(_0x54b725, _0xad3ddc, _0x28accb, _0x215322, _0x4532a0[9], 2336552879, 12);
            continue;
        case '46':
            _0x215322 = fnG(_0x215322, _0x54b725, _0xad3ddc, _0x28accb, _0x4532a0[15], 3634488961, 14);
            continue;
        case '47':
            _0x54b725 = fnF(_0x54b725, _0xad3ddc, _0x28accb, _0x215322, _0x4532a0[5], 1200080426, 12);
            continue;
        case '48':
            _0x215322 = fnF(_0x215322, _0x54b725, _0xad3ddc, _0x28accb, _0x4532a0[6], 2821735955, 17);
            continue;
        case '49':
            var _0x28accb = this['_b'];
            continue;
        case '50':
            _0x54b725 = fnI(_0x54b725, _0xad3ddc, _0x28accb, _0x215322, _0x4532a0[3], 2399980690, 10);
            continue;
        case '51':
            _0xad3ddc = fnH(_0xad3ddc, _0x28accb, _0x215322, _0x54b725, _0x4532a0[13], 681279174, 4);
            continue;
        case '52':
            var _0xad3ddc = this['_a'];
            continue;
        case '53':
            this['_b'] = this['_b'] + _0x28accb | 0;
            continue;
        case '54':
            var _0x215322 = this['_c'];
            continue;
        case '55':
            _0x54b725 = fnI(_0x54b725, _0xad3ddc, _0x28accb, _0x215322, _0x4532a0[15], 4264355552, 10);
            continue;
        case '56':
            _0x28accb = fnI(_0x28accb, _0x215322, _0x54b725, _0xad3ddc, _0x4532a0[9], 3951481745, 21);
            continue;
        case '57':
            _0x215322 = fnG(_0x215322, _0x54b725, _0xad3ddc, _0x28accb, _0x4532a0[11], 643717713, 14);
            continue;
        case '58':
            _0x215322 = fnH(_0x215322, _0x54b725, _0xad3ddc, _0x28accb, _0x4532a0[7], 4139469664, 16);
            continue;
        case '59':
            _0xad3ddc = fnG(_0xad3ddc, _0x28accb, _0x215322, _0x54b725, _0x4532a0[1], 4129170786, 5);
            continue;
        case '60':
            _0xad3ddc = fnG(_0xad3ddc, _0x28accb, _0x215322, _0x54b725, _0x4532a0[5], 3593408605, 5);
            continue;
        case '61':
            _0x215322 = fnH(_0x215322, _0x54b725, _0xad3ddc, _0x28accb, _0x4532a0[15], 530742520, 16);
            continue;
        case '62':
            _0xad3ddc = fnF(_0xad3ddc, _0x28accb, _0x215322, _0x54b725, _0x4532a0[8], 1770035416, 7);
            continue;
        case '63':
            this['_a'] = this['_a'] + _0xad3ddc | 0;
            continue;
        case '64':
            _0xad3ddc = fnF(_0xad3ddc, _0x28accb, _0x215322, _0x54b725, _0x4532a0[0], 3614090360, 7);
            continue;
        case '65':
            _0xad3ddc = fnF(_0xad3ddc, _0x28accb, _0x215322, _0x54b725, _0x4532a0[4], 4118548399, 7);
            continue;
        case '66':
            var _0x4532a0 = ARRAY16;
            continue;
        case '67':
            this['_c'] = this['_c'] + _0x215322 | 0;
            continue;
        case '68':
            _0x54b725 = fnH(_0x54b725, _0xad3ddc, _0x28accb, _0x215322, _0x4532a0[4], 1272893353, 11);
            continue;
        case '69':
            _0x28accb = fnH(_0x28accb, _0x215322, _0x54b725, _0xad3ddc, _0x4532a0[10], 3200236656, 23);
            continue;
        case '70':
            _0x215322 = fnI(_0x215322, _0x54b725, _0xad3ddc, _0x28accb, _0x4532a0[10], 4293915773, 15);
            continue;
        case '71':
            _0x54b725 = fnF(_0x54b725, _0xad3ddc, _0x28accb, _0x215322, _0x4532a0[1], 3905402710, 12);
            continue;
        case '72':
            _0x54b725 = fnH(_0x54b725, _0xad3ddc, _0x28accb, _0x215322, _0x4532a0[8], 2272392833, 11);
            continue;
        case '73':
            _0x28accb = fnG(_0x28accb, _0x215322, _0x54b725, _0xad3ddc, _0x4532a0[0], 3921069994, 20);
            continue;
        }
        break;
    }
};
MD5['prototype']['_digest'] = function () {
    this['_block'][this['_blockOffset']++] = 128;
    if (this['_blockOffset'] > 56) {
        if ('Jvkst' === 'Jvkst') {
            this['_block']['fill'](0, this['_blockOffset'], 64);
            this['_update']();
            this['_blockOffset'] = 0;
        } else {
            var _0xf559ba = '11|0|5|10|3|2|7|4|1|6|9|8'['split']('|'), _0x3e2bdb = 0;
            while (!![]) {
                switch (_0xf559ba[_0x3e2bdb++]) {
                case '0':
                    if (this['_blockOffset'] > 56) {
                        this['_block']['fill'](0, this['_blockOffset'], 64);
                        this['_update']();
                        this['_blockOffset'] = 0;
                    }
                    continue;
                case '1':
                    _0x3c0e16['writeInt32LE'](this['_b'], 4);
                    continue;
                case '2':
                    this['_update']();
                    continue;
                case '3':
                    this['_block']['writeUInt32LE'](this['_length'][1], 60);
                    continue;
                case '4':
                    _0x3c0e16['writeInt32LE'](this['_a'], 0);
                    continue;
                case '5':
                    this['_block']['fill'](0, this['_blockOffset'], 56);
                    continue;
                case '6':
                    _0x3c0e16['writeInt32LE'](this['_c'], 8);
                    continue;
                case '7':
                    var _0x3c0e16 = Buffer['allocUnsafe'](16);
                    continue;
                case '8':
                    return _0x3c0e16;
                case '9':
                    _0x3c0e16['writeInt32LE'](this['_d'], 12);
                    continue;
                case '10':
                    this['_block']['writeUInt32LE'](this['_length'][0], 56);
                    continue;
                case '11':
                    this['_block'][this['_blockOffset']++] = 128;
                    continue;
                }
                break;
            }
        }
    }
    this['_block']['fill'](0, this['_blockOffset'], 56);
    this['_block']['writeUInt32LE'](this['_length'][0], 56);
    this['_block']['writeUInt32LE'](this['_length'][1], 60);
    this['_update']();
    var _0x110ce6 = Buffer['allocUnsafe'](16);
    _0x110ce6['writeInt32LE'](this['_a'], 0);
    _0x110ce6['writeInt32LE'](this['_b'], 4);
    _0x110ce6['writeInt32LE'](this['_c'], 8);
    _0x110ce6['writeInt32LE'](this['_d'], 12);
    return _0x110ce6;
};
function rotl(_0x4e8142, _0x56995c) {
    return _0x4e8142 << _0x56995c | _0x4e8142 >>> 32 - _0x56995c;
}
function fnF(_0x10579d, _0x32bacf, _0x354e2a, _0x3251e7, _0x2e7fce, _0x959806, _0x47d596) {
    return rotl(_0x305a24['TklCy'](_0x305a24['PagMt'](_0x10579d + (_0x32bacf & _0x354e2a | ~_0x32bacf & _0x3251e7), _0x2e7fce) + _0x959806, 0), _0x47d596) + _0x32bacf | 0;
}
function fnG(_0x3ede92, _0x298db7, _0x151391, _0x973fc, _0x2674ae, _0x57c820, _0x5edf6b) {
    return rotl(_0x3ede92 + (_0x298db7 & _0x973fc | _0x151391 & ~_0x973fc) + _0x2674ae + _0x57c820 | 0, _0x5edf6b) + _0x298db7 | 0;
}
function fnH(_0x17ecb3, _0x2f9f07, _0x298558, _0x1ddaba, _0x158b55, _0x17b78f, _0x2c6a32) {
    return rotl(_0x40c937['inAbL'](_0x17ecb3 + (_0x2f9f07 ^ _0x298558 ^ _0x1ddaba), _0x158b55) + _0x17b78f | 0, _0x2c6a32) + _0x2f9f07 | 0;
}
function fnI(_0xed40d5, _0x418620, _0x59138d, _0x53c56b, _0x566127, _0x17102a, _0x2348e0) {
    return rotl(_0x29d623['rRbfL'](_0x29d623['rRbfL'](_0xed40d5 + (_0x59138d ^ (_0x418620 | ~_0x53c56b)), _0x566127), _0x17102a) | 0, _0x2348e0) + _0x418620 | 0;
}
module['exports'] = MD5;