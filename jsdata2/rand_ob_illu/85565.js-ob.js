/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
const _0x122d = ['timeLastMatched', 'timeMatched', 'size', 'ANY_KEY_DOWN', 'onKeyDown', 'maxKeyDelay', 'KnNbv', 'index', 'Zcdsk', 'QtsNG', 'matched', 'enabled', 'emit', 'resetOnMatch', 'destroy', 'CeHpo', 'off', 'exports', '319762eqZIHr', '2GhoFbM', '5xkdvmW', '5535tdJZeS', '881908TbURvQ', '601GKwYMZ', '140TPMCld', '96968TuvROh', '12yFAeaj', '1GrieOu', '564389tTwTNW', '1mCnHIy', '2501534MjLsnF', '../../../utils/Class', '../events', '../../../utils/object/GetFastValue', './ResetKeyCombo', 'string', 'keyCode', 'resetOnWrongKey', 'deleteOnMatch', 'lFymy', 'split', 'ntrTz', 'manager', 'length', 'Kznpd', 'keyCodes', 'toUpperCase', 'charCodeAt', 'iUTJm', 'dpfXc', 'push', 'hasOwnProperty', 'yayGG'];
const _0x26e0d9 = _0x75f8;

(function (_0x5ac39f, _0x2fc783) {
    const _0x6b1d3e = _0x75f8;

    while (true) {
        try {
            const _0xf34b8b = -parseInt(_0x6b1d3e(0x162)) * -parseInt(_0x6b1d3e(0x163)) + parseInt(_0x6b1d3e(0x164)) * parseInt(_0x6b1d3e(0x165)) + -parseInt(_0x6b1d3e(0x166)) + parseInt(_0x6b1d3e(0x167)) * parseInt(_0x6b1d3e(0x168)) + parseInt(_0x6b1d3e(0x169)) * -parseInt(_0x6b1d3e(0x16a)) + parseInt(_0x6b1d3e(0x16b)) * -parseInt(_0x6b1d3e(0x16c)) + -parseInt(_0x6b1d3e(0x16d)) * -parseInt(_0x6b1d3e(0x16e));

            if (_0xf34b8b === _0x2fc783) break;else _0x5ac39f.push(_0x5ac39f.shift());
        } catch (_0x4dbb15) {
            _0x5ac39f.push(_0x5ac39f.shift());
        }
    }
})(_0x122d, 642960);

const Class = require(_0x26e0d9(0x16f));

const Events = require(_0x26e0d9(0x170));

const GetFastValue = require(_0x26e0d9(0x171));

const ProcessKeyCombo = require('./ProcessKeyCombo');

const ResetKeyCombo = require(_0x26e0d9(0x172));

const KeyCombo = new Class({
    'initialize': function KeyCombo(_0x4260c6, _0x1d2332, _0x3ca203) {
        const _0x21135b = _0x26e0d9;
        const _0x198a18 = {
            'lFymy': '11|0|17|1|19|18|2|12|9|5|3|13|4|7|8|15|10|16|14|20|6',
            'ntrTz': function (_0x4d487a, _0x343039) {
                return _0x4d487a === _0x343039;
            },
            'kePYr': function (_0x5b85bf, _0x43690e) {
                return _0x5b85bf === _0x43690e;
            },
            'Kznpd': _0x21135b(0x173),
            'iUTJm': function (_0x3a07b1, _0x388a7e) {
                return _0x3a07b1 === _0x388a7e;
            },
            'dpfXc': 'number',
            'yayGG': _0x21135b(0x174),
            'jOWgy': _0x21135b(0x175),
            'KnNbv': function (_0x5b7829, _0x25fa78, _0x447a3e, _0x31b8aa) {
                return _0x5b7829(_0x25fa78, _0x447a3e, _0x31b8aa);
            },
            'Zcdsk': _0x21135b(0x176),
            'QtsNG': function (_0x2f4c73, _0x186574, _0x409ca3) {
                return _0x2f4c73(_0x186574, _0x409ca3);
            },
            'CeHpo': function (_0x115a14, _0x41c680) {
                return _0x115a14 < _0x41c680;
            }
        };

        const _0x346eed = _0x198a18[_0x21135b(0x177)][_0x21135b(0x178)]('|');

        var _0x4c596c = 0;

        while (true) {
            switch (_0x346eed[_0x4c596c++]) {
                case '0':
                    _0x198a18[_0x21135b(0x179)](_0x3ca203, undefined) && (_0x3ca203 = {});
                    continue;
                case '1':
                    this[_0x21135b(0x17a)] = _0x4260c6;
                    continue;
                case '2':
                    for (var _0x28d261 = 0; _0x28d261 < _0x1d2332[_0x21135b(0x17b)]; _0x28d261++) {
                        const _0x23c72d = _0x1d2332[_0x28d261];

                        if (_0x198a18.kePYr(typeof _0x23c72d, _0x198a18[_0x21135b(0x17c)])) this[_0x21135b(0x17d)].push(_0x23c72d[_0x21135b(0x17e)]()[_0x21135b(0x17f)](0));else {
                            if (_0x198a18[_0x21135b(0x180)](typeof _0x23c72d, _0x198a18[_0x21135b(0x181)])) this[_0x21135b(0x17d)][_0x21135b(0x182)](_0x23c72d);else _0x23c72d[_0x21135b(0x183)](_0x198a18[_0x21135b(0x184)]) && this[_0x21135b(0x17d)][_0x21135b(0x182)](_0x23c72d[_0x21135b(0x174)]);
                        }
                    }
                    continue;
                case '3':
                    this[_0x21135b(0x185)] = 0;
                    continue;
                case '4':
                    this[_0x21135b(0x186)] = 0;
                    continue;
                case '5':
                    this[_0x21135b(0x187)] = this[_0x21135b(0x17d)][_0x21135b(0x17b)];
                    continue;
                case '6':
                    this.manager.on(Events[_0x21135b(0x188)], this[_0x21135b(0x189)]);
                    continue;
                case '7':
                    this['resetOnWrongKey'] = GetFastValue(_0x3ca203, _0x198a18.jOWgy, true);
                    continue;
                case '8':
                    this[_0x21135b(0x18a)] = _0x198a18[_0x21135b(0x18b)](GetFastValue, _0x3ca203, 'maxKeyDelay', 0);
                    continue;
                case '9':
                    this[_0x21135b(0x18c)] = 0;
                    continue;
                case '10':
                    this[_0x21135b(0x176)] = _0x198a18[_0x21135b(0x18b)](GetFastValue, _0x3ca203, _0x198a18[_0x21135b(0x18d)], false);
                    continue;
                case '11':
                    const _0x576250 = {
                        'wJwOB': function (_0x396ad2, _0x4df230, _0x38127c) {
                            const _0x4e9e82 = _0x21135b;

                            return _0x198a18[_0x4e9e82(0x18e)](_0x396ad2, _0x4df230, _0x38127c);
                        }
                    };

                    continue;
                case '12':
                    this['current'] = this[_0x21135b(0x17d)][0];
                    continue;
                case '13':
                    this[_0x21135b(0x18f)] = false;
                    continue;
                case '14':
                    const _0x16dca4 = function (_0x12103a) {
                        const _0x478701 = _0x21135b;

                        if (_0x3dfbd6[_0x478701(0x18f)] || !_0x3dfbd6[_0x478701(0x190)]) return;

                        const _0x2c707b = _0x576250.wJwOB(ProcessKeyCombo, _0x12103a, _0x3dfbd6);

                        if (_0x2c707b) {
                            _0x3dfbd6[_0x478701(0x17a)][_0x478701(0x191)](Events.COMBO_MATCH, _0x3dfbd6, _0x12103a);
                            if (_0x3dfbd6[_0x478701(0x192)]) ResetKeyCombo(_0x3dfbd6);else _0x3dfbd6[_0x478701(0x176)] && _0x3dfbd6[_0x478701(0x193)]();
                        }
                    };

                    continue;
                case '15':
                    this[_0x21135b(0x192)] = _0x198a18[_0x21135b(0x18b)](GetFastValue, _0x3ca203, _0x21135b(0x192), false);
                    continue;
                case '16':
                    const _0x3dfbd6 = this;

                    continue;
                case '17':
                    if (_0x198a18[_0x21135b(0x194)](_0x1d2332[_0x21135b(0x17b)], 2)) return false;
                    continue;
                case '18':
                    this['keyCodes'] = [];
                    continue;
                case '19':
                    this[_0x21135b(0x190)] = true;
                    continue;
                case '20':
                    this[_0x21135b(0x189)] = _0x16dca4;
                    continue;
            }
            break;
        }
    },
    'progress': {
        'get': function () {
            const _0x5e8b7 = _0x26e0d9;

            return this[_0x5e8b7(0x18c)] / this[_0x5e8b7(0x187)];
        }
    },
    'destroy': function () {
        const _0x2a0e47 = _0x26e0d9;

        this[_0x2a0e47(0x190)] = false, this[_0x2a0e47(0x17d)] = [], this[_0x2a0e47(0x17a)][_0x2a0e47(0x195)](Events[_0x2a0e47(0x188)], this[_0x2a0e47(0x189)]), this['manager'] = null;
    }
});

function _0x75f8(_0x51db2a, _0x26b2a4) {
    return _0x75f8 = function (_0x5c41ce, _0x4e821b) {
        _0x5c41ce = _0x5c41ce - 354;
        const _0x3b8dc2 = _0x122d[_0x5c41ce];

        return _0x3b8dc2;
    }, _0x75f8(_0x51db2a, _0x26b2a4);
}
module[_0x26e0d9(0x196)] = KeyCombo;
