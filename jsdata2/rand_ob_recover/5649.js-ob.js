var inherits = require(_0x400b99(223)), SHA512 = require(_0x400b99(224)), Hash = require(_0x400b99(225)), Buffer = require(_0x400b99(226))[_0x400b99(227)], W = new Array(452 * -2 + -3906 + 4970);
function Sha384() {
    var _0x32f088 = _0x400b99;
    this[_0x32f088(228)](), this['_w'] = W, Hash[_0x32f088(229)](this, 9061 + -868 + 8065 * -1, -131 * -41 + 1514 + -6773 * 1);
}
inherits(Sha384, SHA512), Sha384[_0x400b99(230)]['init'] = function () {
    var _0xce0923 = _0x400b99, _0x2cbd86 = _0xce0923(231)['split']('|'), _0x48587f = -13 * 610 + -1285 + 9215;
    while (!![]) {
        switch (_0x2cbd86[_0x48587f++]) {
        case '0':
            this[_0xce0923(232)] = -11229961 + -15065654 * -7 + 261232743;
            continue;
        case '1':
            this[_0xce0923(233)] = 403042229 * 3 + -4486954 * -251 + -1522649142;
            continue;
        case '2':
            return this;
        case '3':
            this[_0xce0923(234)] = -1 * -8345909549 + 7232071057 + -11287204749;
            continue;
        case '4':
            this[_0xce0923(235)] = 1079531 * 3523 + -359283572 + 231104384;
            continue;
        case '5':
            this[_0xce0923(236)] = -5269523880 + -246699394 + -18 * -484461039;
            continue;
        case '6':
            this[_0xce0923(237)] = -758111386 + 44 * 33051997 + 217974181;
            continue;
        case '7':
            this[_0xce0923(238)] = -794086111 + -489957279 + 21 * 141815249;
            continue;
        case '8':
            this[_0xce0923(239)] = -730355 * -2154 + -3151317529 + 3328735884;
            continue;
        case '9':
            this[_0xce0923(240)] = 966 * -886519 + -873 * 6531539 + 9976481266;
            continue;
        case '10':
            this[_0xce0923(241)] = 71206303 * 47 + 2560654227 + -3468821098;
            continue;
        case '11':
            this['_fh'] = 780672441 * 4 + 3226 * -700973 + -66644755 * -23;
            continue;
        case '12':
            this['_eh'] = 2 * -658023074 + 3325383795 + 2 * -138966116;
            continue;
        case '13':
            this[_0xce0923(242)] = -3016169152 + 109 * -14411948 + -693991 * -11276;
            continue;
        case '14':
            this['_dl'] = 2407493222 + -19861 * 293026 + -1 * -7557208861;
            continue;
        case '15':
            this[_0xce0923(243)] = 205446118 * -1 + 2837238930 + 12303 * -79454;
            continue;
        case '16':
            this[_0xce0923(244)] = -639012342 + 64760677 * 13 + 1000186354;
            continue;
        }
        break;
    }
}, Sha384['prototype'][_0x400b99(245)] = function () {
    var _0x9c279c = _0x400b99, _0xc1afef = {
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
        }, _0x1ac0e3 = Buffer[_0x9c279c(246)](-3745 + 1 * 2487 + 1306);
    function _0x114e9e(_0x39c873, _0x3ce4de, _0x3ba977) {
        var _0x1b3380 = _0x9c279c;
        _0x1ac0e3['writeInt32BE'](_0x39c873, _0x3ba977), _0x1ac0e3[_0x1b3380(247)](_0x3ce4de, _0xc1afef[_0x1b3380(248)](_0x3ba977, 187 * 9 + -1 * 7873 + 6194));
    }
    return _0xc1afef[_0x9c279c(249)](_0x114e9e, this[_0x9c279c(240)], this[_0x9c279c(242)], -1243 * -5 + 5180 + -11395), _0xc1afef[_0x9c279c(250)](_0x114e9e, this['_bh'], this['_bl'], 8 * 886 + -2778 + -4302), _0x114e9e(this[_0x9c279c(241)], this[_0x9c279c(233)], 9456 + 7448 + -8 * 2111), _0xc1afef[_0x9c279c(250)](_0x114e9e, this[_0x9c279c(232)], this[_0x9c279c(251)], -9463 + -1327 * -2 + 1 * 6833), _0xc1afef['NzynA'](_0x114e9e, this[_0x9c279c(252)], this[_0x9c279c(234)], -3024 + 83 * -75 + -9281 * -1), _0x114e9e(this['_fh'], this[_0x9c279c(239)], -4525 * -2 + 123 * -71 + 1 * -277), _0x1ac0e3;
}, module[_0x400b99(253)] = Sha384;