const _0x2585 = [
    'EOdNO',
    'asSeconds',
    'BcsWt',
    'asMinutes',
    'EnhAF',
    'asHours',
    'JRQJT',
    'asDays',
    'asWeeks',
    'NsYZI',
    'asMonths',
    'nYQPa',
    'liRRb',
    '$utils',
    'duration',
    'isDuration',
    'prototype',
    'bind',
    '894909DdQLuU',
    '2cfnyLm',
    '11mkeZrU',
    '160805YfBNUC',
    '12821FSNEpF',
    '122JwhKtu',
    '57462aRThgC',
    '6wLsOLg',
    '603564dpwSqo',
    '5859uaKRNh',
    '76VUaoRo',
    '2765448IhLbmQ',
    'ceil',
    'floor',
    'abs',
    'MUgmE',
    '$ms',
    'parseFromMilliseconds',
    'KkFNR',
    'poaVE',
    'yPDhw',
    'number',
    'VbpFC',
    'match',
    'slice',
    'map',
    'years',
    'weeks',
    'hours',
    'minutes',
    'seconds',
    'calMilliseconds',
    'keys',
    'reduce',
    'RDvSw',
    'CuXdD',
    'months',
    'days',
    'TwNRU',
    'UzXkp',
    'milliseconds',
    'toISOString',
    'P0D',
    'USyKf',
    'hcIHQ',
    'ZwKRS',
    'hGSqj',
    'negative',
    'format',
    'MvDmh',
    'qbofS',
    'djgsJ',
    'GtXeq',
    'QbEfj',
    'get',
    'GAGNt',
    'ozltm',
    'MTDaX',
    'TdaOb',
    'add',
    'knZlC',
    'rHDLO',
    'MNFUF',
    'subtract',
    'locale',
    'clone',
    'humanize',
    'fromNow',
    'FYXlG',
    'asMilliseconds',
    'ksFRB'
];
const _0x46b558 = _0x376f;
(function (_0x339369, _0x1ecedd) {
    const _0x41a7a7 = _0x376f;
    while (!![]) {
        try {
            const _0x1a58e0 = -parseInt(_0x41a7a7(0x10f)) * -parseInt(_0x41a7a7(0x110)) + -parseInt(_0x41a7a7(0x111)) * -parseInt(_0x41a7a7(0x112)) + parseInt(_0x41a7a7(0x113)) * parseInt(_0x41a7a7(0x114)) + -parseInt(_0x41a7a7(0x115)) * parseInt(_0x41a7a7(0x116)) + -parseInt(_0x41a7a7(0x117)) + -parseInt(_0x41a7a7(0x118)) * parseInt(_0x41a7a7(0x119)) + -parseInt(_0x41a7a7(0x11a));
            if (_0x1a58e0 === _0x1ecedd)
                break;
            else
                _0x339369['push'](_0x339369['shift']());
        } catch (_0x4c8d0d) {
            _0x339369['push'](_0x339369['shift']());
        }
    }
}(_0x2585, 0x16f * 0x857 + 0x18f162 + 0x765cc * -0x3));
import {
    MILLISECONDS_A_DAY,
    MILLISECONDS_A_HOUR,
    MILLISECONDS_A_MINUTE,
    MILLISECONDS_A_SECOND,
    MILLISECONDS_A_WEEK,
    REGEX_FORMAT
} from '../../constant';
const MILLISECONDS_A_YEAR = MILLISECONDS_A_DAY * (-0x175 + -0x126b * 0x1 + 0x7 * 0x30b), MILLISECONDS_A_MONTH = MILLISECONDS_A_DAY * (0xe1d * -0x2 + -0x1f58 + 0xeec * 0x4), durationRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, unitToMS = {
        'years': MILLISECONDS_A_YEAR,
        'months': MILLISECONDS_A_MONTH,
        'days': MILLISECONDS_A_DAY,
        'hours': MILLISECONDS_A_HOUR,
        'minutes': MILLISECONDS_A_MINUTE,
        'seconds': MILLISECONDS_A_SECOND,
        'milliseconds': 0x1,
        'weeks': MILLISECONDS_A_WEEK
    }, isDuration = _0x43b4cb => _0x43b4cb instanceof Duration;
let $d, $u;
const wrapper = (_0x399ddf, _0x733518, _0xb01869) => new Duration(_0x399ddf, _0xb01869, _0x733518['$l']), prettyUnit = _0x1745df => $u['p'](_0x1745df) + 's', isNegative = _0x486025 => _0x486025 < -0xd * -0x20b + 0x2 * 0x184 + -0x1d97, roundNumber = _0x4a82a0 => isNegative(_0x4a82a0) ? Math[_0x46b558(0x11b)](_0x4a82a0) : Math[_0x46b558(0x11c)](_0x4a82a0), absolute = _0x3ba7c7 => Math[_0x46b558(0x11d)](_0x3ba7c7), getNumberUnitFormat = (_0x5088a5, _0x4d9fb3) => {
        const _0x4763f2 = _0x46b558, _0xc4e557 = {
                'MUgmE': function (_0x22b44b, _0x1b49ee) {
                    return _0x22b44b(_0x1b49ee);
                }
            };
        if (!_0x5088a5)
            return {
                'negative': ![],
                'format': ''
            };
        if (_0xc4e557[_0x4763f2(0x11e)](isNegative, _0x5088a5))
            return {
                'negative': !![],
                'format': '' + _0xc4e557['MUgmE'](absolute, _0x5088a5) + _0x4d9fb3
            };
        return {
            'negative': ![],
            'format': '' + _0x5088a5 + _0x4d9fb3
        };
    };
class Duration {
    constructor(_0x1829cb, _0x519cc7, _0x2e45e5) {
        const _0x4b41ac = _0x46b558, _0x4499b0 = {
                'poaVE': function (_0x42719f, _0x1690fb) {
                    return _0x42719f(_0x1690fb);
                },
                'KkFNR': function (_0x56fa3f, _0x4d0171, _0x1fe9bf) {
                    return _0x56fa3f(_0x4d0171, _0x1fe9bf);
                },
                'yPDhw': function (_0x28c9ed, _0x4a1f55) {
                    return _0x28c9ed === _0x4a1f55;
                },
                'VbpFC': 'object',
                'kuxIh': 'string'
            };
        this['$d'] = {}, this['$l'] = _0x2e45e5;
        _0x1829cb === undefined && (this[_0x4b41ac(0x11f)] = -0x1d * -0xce + 0xacd + -0xb61 * 0x3, this[_0x4b41ac(0x120)]());
        if (_0x519cc7)
            return _0x4499b0[_0x4b41ac(0x121)](wrapper, _0x1829cb * unitToMS[_0x4499b0[_0x4b41ac(0x122)](prettyUnit, _0x519cc7)], this);
        if (_0x4499b0[_0x4b41ac(0x123)](typeof _0x1829cb, _0x4b41ac(0x124)))
            return this['$ms'] = _0x1829cb, this[_0x4b41ac(0x120)](), this;
        if (typeof _0x1829cb === _0x4499b0[_0x4b41ac(0x125)])
            return Object['keys'](_0x1829cb)['forEach'](_0x42f02b => {
                this['$d'][_0x4499b0['poaVE'](prettyUnit, _0x42f02b)] = _0x1829cb[_0x42f02b];
            }), this['calMilliseconds'](), this;
        if (typeof _0x1829cb === _0x4499b0['kuxIh']) {
            const _0x1bdb23 = _0x1829cb[_0x4b41ac(0x126)](durationRegex);
            if (_0x1bdb23) {
                const _0x2d7e7e = _0x1bdb23[_0x4b41ac(0x127)](0xb1d + 0x449 * 0x5 + -0x2088), _0x3f750c = _0x2d7e7e[_0x4b41ac(0x128)](_0x1ae2a5 => Number(_0x1ae2a5));
                return [this['$d'][_0x4b41ac(0x129)], this['$d']['months'], this['$d'][_0x4b41ac(0x12a)], this['$d']['days'], this['$d'][_0x4b41ac(0x12b)], this['$d'][_0x4b41ac(0x12c)], this['$d'][_0x4b41ac(0x12d)]] = _0x3f750c, this[_0x4b41ac(0x12e)](), this;
            }
        }
        return this;
    }
    [_0x46b558(0x12e)]() {
        const _0x515c64 = _0x46b558;
        this[_0x515c64(0x11f)] = Object[_0x515c64(0x12f)](this['$d'])[_0x515c64(0x130)]((_0x13da86, _0x1c511c) => _0x13da86 + (this['$d'][_0x1c511c] || 0xb * 0x373 + -0x23ae * 0x1 + -0x243) * unitToMS[_0x1c511c], -0x19b7 + -0x5 * -0x6a3 + 0x778 * -0x1);
    }
    ['parseFromMilliseconds']() {
        const _0x591ab9 = _0x46b558, _0x3bb067 = {
                'RDvSw': function (_0x1c9cae, _0x2bd2b6) {
                    return _0x1c9cae(_0x2bd2b6);
                },
                'CuXdD': function (_0x5472ef, _0x45f4ee) {
                    return _0x5472ef / _0x45f4ee;
                },
                'TwNRU': function (_0x8b3c62, _0xa64df) {
                    return _0x8b3c62 / _0xa64df;
                },
                'UzXkp': function (_0x8843b3, _0xdd8707) {
                    return _0x8843b3(_0xdd8707);
                }
            };
        let {$ms: _0x6dd2f1} = this;
        this['$d'][_0x591ab9(0x129)] = _0x3bb067[_0x591ab9(0x131)](roundNumber, _0x3bb067[_0x591ab9(0x132)](_0x6dd2f1, MILLISECONDS_A_YEAR)), _0x6dd2f1 %= MILLISECONDS_A_YEAR, this['$d'][_0x591ab9(0x133)] = roundNumber(_0x6dd2f1 / MILLISECONDS_A_MONTH), _0x6dd2f1 %= MILLISECONDS_A_MONTH, this['$d'][_0x591ab9(0x134)] = _0x3bb067[_0x591ab9(0x131)](roundNumber, _0x3bb067[_0x591ab9(0x135)](_0x6dd2f1, MILLISECONDS_A_DAY)), _0x6dd2f1 %= MILLISECONDS_A_DAY, this['$d'][_0x591ab9(0x12b)] = _0x3bb067[_0x591ab9(0x136)](roundNumber, _0x6dd2f1 / MILLISECONDS_A_HOUR), _0x6dd2f1 %= MILLISECONDS_A_HOUR, this['$d']['minutes'] = roundNumber(_0x6dd2f1 / MILLISECONDS_A_MINUTE), _0x6dd2f1 %= MILLISECONDS_A_MINUTE, this['$d'][_0x591ab9(0x12d)] = _0x3bb067[_0x591ab9(0x136)](roundNumber, _0x6dd2f1 / MILLISECONDS_A_SECOND), _0x6dd2f1 %= MILLISECONDS_A_SECOND, this['$d'][_0x591ab9(0x137)] = _0x6dd2f1;
    }
    [_0x46b558(0x138)]() {
        const _0x1e90cf = _0x46b558, _0x30101f = {
                'USyKf': function (_0x3e2cd, _0x279a06, _0x37af61) {
                    return _0x3e2cd(_0x279a06, _0x37af61);
                },
                'hcIHQ': function (_0x4cb4fb, _0x1ca9cd) {
                    return _0x4cb4fb * _0x1ca9cd;
                },
                'ZwKRS': function (_0x48c5cb, _0x24df21, _0x440be1) {
                    return _0x48c5cb(_0x24df21, _0x440be1);
                },
                'hGSqj': function (_0x305d7a, _0x2f21b6) {
                    return _0x305d7a / _0x2f21b6;
                },
                'MvDmh': _0x1e90cf(0x139)
            }, _0x4a20cc = _0x30101f[_0x1e90cf(0x13a)](getNumberUnitFormat, this['$d'][_0x1e90cf(0x129)], 'Y'), _0x1134fc = _0x30101f[_0x1e90cf(0x13a)](getNumberUnitFormat, this['$d'][_0x1e90cf(0x133)], 'M');
        let _0x20478b = +this['$d'][_0x1e90cf(0x134)] || 0xd * -0x180 + -0xebf + 0x223f;
        this['$d'][_0x1e90cf(0x12a)] && (_0x20478b += _0x30101f[_0x1e90cf(0x13b)](this['$d'][_0x1e90cf(0x12a)], 0x730 + -0x77f + 0x2 * 0x2b));
        const _0x300892 = _0x30101f[_0x1e90cf(0x13a)](getNumberUnitFormat, _0x20478b, 'D'), _0x15fe46 = _0x30101f[_0x1e90cf(0x13c)](getNumberUnitFormat, this['$d'][_0x1e90cf(0x12b)], 'H'), _0x10ee40 = _0x30101f[_0x1e90cf(0x13c)](getNumberUnitFormat, this['$d'][_0x1e90cf(0x12c)], 'M');
        let _0x3e94c8 = this['$d'][_0x1e90cf(0x12d)] || -0x2b6 * -0x9 + 0xc03 + -0x2469;
        this['$d'][_0x1e90cf(0x137)] && (_0x3e94c8 += _0x30101f[_0x1e90cf(0x13d)](this['$d'][_0x1e90cf(0x137)], 0xd * -0x2ff + -0xba5 * -0x1 + 0x1f36));
        const _0x14c9e5 = getNumberUnitFormat(_0x3e94c8, 'S'), _0x4cac37 = _0x4a20cc['negative'] || _0x1134fc['negative'] || _0x300892[_0x1e90cf(0x13e)] || _0x15fe46[_0x1e90cf(0x13e)] || _0x10ee40[_0x1e90cf(0x13e)] || _0x14c9e5['negative'], _0x267437 = _0x15fe46[_0x1e90cf(0x13f)] || _0x10ee40[_0x1e90cf(0x13f)] || _0x14c9e5[_0x1e90cf(0x13f)] ? 'T' : '', _0xa51716 = _0x4cac37 ? '-' : '', _0x3f2de4 = _0xa51716 + 'P' + _0x4a20cc[_0x1e90cf(0x13f)] + _0x1134fc[_0x1e90cf(0x13f)] + _0x300892[_0x1e90cf(0x13f)] + _0x267437 + _0x15fe46['format'] + _0x10ee40[_0x1e90cf(0x13f)] + _0x14c9e5[_0x1e90cf(0x13f)];
        return _0x3f2de4 === 'P' || _0x3f2de4 === '-P' ? _0x30101f[_0x1e90cf(0x140)] : _0x3f2de4;
    }
    ['toJSON']() {
        const _0x4bbfd5 = _0x46b558;
        return this[_0x4bbfd5(0x138)]();
    }
    ['format'](_0x11e40b) {
        const _0xeb5e73 = _0x46b558, _0x2143d9 = {
                'qbofS': function (_0x173fe8, _0x29ec41) {
                    return _0x173fe8 || _0x29ec41;
                },
                'djgsJ': 'YYYY-MM-DDTHH:mm:ss'
            }, _0x389440 = _0x2143d9[_0xeb5e73(0x141)](_0x11e40b, _0x2143d9[_0xeb5e73(0x142)]), _0x347b68 = {
                'Y': this['$d'][_0xeb5e73(0x129)],
                'YY': $u['s'](this['$d'][_0xeb5e73(0x129)], -0x1f0b * 0x1 + 0xcb9 * -0x1 + 0x2bc6, '0'),
                'YYYY': $u['s'](this['$d']['years'], -0x1359 + 0x65c + 0xd01, '0'),
                'M': this['$d'][_0xeb5e73(0x133)],
                'MM': $u['s'](this['$d'][_0xeb5e73(0x133)], -0xcee * 0x1 + 0xe00 + -0x110 * 0x1, '0'),
                'D': this['$d'][_0xeb5e73(0x134)],
                'DD': $u['s'](this['$d'][_0xeb5e73(0x134)], 0x1eb3 * -0x1 + 0x16de + 0xdf * 0x9, '0'),
                'H': this['$d'][_0xeb5e73(0x12b)],
                'HH': $u['s'](this['$d']['hours'], -0xbfa + -0x1 * -0x5db + 0x621, '0'),
                'm': this['$d'][_0xeb5e73(0x12c)],
                'mm': $u['s'](this['$d'][_0xeb5e73(0x12c)], 0x19a7 + 0x157f + -0x2f24, '0'),
                's': this['$d'][_0xeb5e73(0x12d)],
                'ss': $u['s'](this['$d'][_0xeb5e73(0x12d)], -0x1cc9 + 0x8b * -0x46 + 0x42cd, '0'),
                'SSS': $u['s'](this['$d'][_0xeb5e73(0x137)], -0xaac + -0x1 * -0x1b8d + 0x86f * -0x2, '0')
            };
        return _0x389440['replace'](REGEX_FORMAT, (_0x4a32c8, _0x5d2735) => _0x5d2735 || String(_0x347b68[_0x4a32c8]));
    }
    ['as'](_0x1e8390) {
        const _0x4e1a25 = _0x46b558, _0x3c8d5e = {
                'GtXeq': function (_0xd7dfbc, _0x263162) {
                    return _0xd7dfbc / _0x263162;
                },
                'QbEfj': function (_0x1a3486, _0x3f1155) {
                    return _0x1a3486(_0x3f1155);
                }
            };
        return _0x3c8d5e[_0x4e1a25(0x143)](this[_0x4e1a25(0x11f)], unitToMS[_0x3c8d5e[_0x4e1a25(0x144)](prettyUnit, _0x1e8390)]);
    }
    [_0x46b558(0x145)](_0x591fb5) {
        const _0x556e2c = _0x46b558, _0x3a56d4 = {
                'ozltm': function (_0x1fb1b0, _0x2714f9) {
                    return _0x1fb1b0(_0x2714f9);
                },
                'GAGNt': _0x556e2c(0x137),
                'TdaOb': function (_0x3e8ffd, _0x2789b0) {
                    return _0x3e8ffd === _0x2789b0;
                },
                'HBRSk': _0x556e2c(0x12a),
                'MTDaX': function (_0x17adea, _0x330cf0) {
                    return _0x17adea / _0x330cf0;
                }
            };
        let _0x43ec20 = this[_0x556e2c(0x11f)];
        const _0x403dc4 = _0x3a56d4['ozltm'](prettyUnit, _0x591fb5);
        if (_0x403dc4 === _0x3a56d4[_0x556e2c(0x146)])
            _0x43ec20 %= 0x63a + 0x3 * -0xf2 + 0x4 * 0x21;
        else
            _0x3a56d4['TdaOb'](_0x403dc4, _0x3a56d4['HBRSk']) ? _0x43ec20 = _0x3a56d4[_0x556e2c(0x147)](roundNumber, _0x3a56d4[_0x556e2c(0x148)](_0x43ec20, unitToMS[_0x403dc4])) : _0x43ec20 = this['$d'][_0x403dc4];
        return _0x3a56d4[_0x556e2c(0x149)](_0x43ec20, 0x2509 + -0xda0 + -0x1769) ? -0x9 * -0x3c7 + -0x99a * 0x3 + -0x531 : _0x43ec20;
    }
    [_0x46b558(0x14a)](_0x47566a, _0x7aa874, _0x42b799) {
        const _0x31c84f = _0x46b558, _0x4c5b6c = {
                'knZlC': function (_0x5c036e, _0x20f2dc) {
                    return _0x5c036e(_0x20f2dc);
                },
                'rHDLO': function (_0x1bf689, _0x493bf0) {
                    return _0x1bf689(_0x493bf0);
                },
                'MNFUF': function (_0x50e84e, _0x5e36b7, _0xff1908) {
                    return _0x50e84e(_0x5e36b7, _0xff1908);
                },
                'ZXWBa': function (_0x552e66, _0x57d197) {
                    return _0x552e66 * _0x57d197;
                }
            };
        let _0x55b98e;
        if (_0x7aa874)
            _0x55b98e = _0x47566a * unitToMS[_0x4c5b6c[_0x31c84f(0x14b)](prettyUnit, _0x7aa874)];
        else
            _0x4c5b6c[_0x31c84f(0x14c)](isDuration, _0x47566a) ? _0x55b98e = _0x47566a[_0x31c84f(0x11f)] : _0x55b98e = _0x4c5b6c[_0x31c84f(0x14d)](wrapper, _0x47566a, this)[_0x31c84f(0x11f)];
        return _0x4c5b6c[_0x31c84f(0x14d)](wrapper, this['$ms'] + _0x4c5b6c['ZXWBa'](_0x55b98e, _0x42b799 ? -(-0x139a + -0x142f + 0x13e5 * 0x2) : -0x1bba + -0xaf * -0x18 + -0xb53 * -0x1), this);
    }
    [_0x46b558(0x14e)](_0x3184e3, _0x26d780) {
        const _0x3ab62d = _0x46b558;
        return this[_0x3ab62d(0x14a)](_0x3184e3, _0x26d780, !![]);
    }
    [_0x46b558(0x14f)](_0x4d225f) {
        const _0x3166b5 = _0x46b558, _0x1e7336 = this[_0x3166b5(0x150)]();
        return _0x1e7336['$l'] = _0x4d225f, _0x1e7336;
    }
    [_0x46b558(0x150)]() {
        const _0x4b4557 = _0x46b558;
        return wrapper(this[_0x4b4557(0x11f)], this);
    }
    [_0x46b558(0x151)](_0x22471e) {
        const _0x46cd06 = _0x46b558;
        return $d()['add'](this[_0x46cd06(0x11f)], 'ms')[_0x46cd06(0x14f)](this['$l'])[_0x46cd06(0x152)](!_0x22471e);
    }
    [_0x46b558(0x137)]() {
        const _0x1ebcd8 = _0x46b558, _0x65ae1b = { 'FYXlG': _0x1ebcd8(0x137) };
        return this[_0x1ebcd8(0x145)](_0x65ae1b[_0x1ebcd8(0x153)]);
    }
    [_0x46b558(0x154)]() {
        const _0x457dd1 = _0x46b558, _0x5c78a8 = { 'ksFRB': _0x457dd1(0x137) };
        return this['as'](_0x5c78a8[_0x457dd1(0x155)]);
    }
    [_0x46b558(0x12d)]() {
        const _0x45d8d6 = _0x46b558, _0x4e1dd0 = { 'EOdNO': _0x45d8d6(0x12d) };
        return this[_0x45d8d6(0x145)](_0x4e1dd0[_0x45d8d6(0x156)]);
    }
    [_0x46b558(0x157)]() {
        const _0x5475a8 = _0x46b558;
        return this['as'](_0x5475a8(0x12d));
    }
    [_0x46b558(0x12c)]() {
        const _0x15c23c = _0x46b558, _0x1f5027 = { 'BcsWt': 'minutes' };
        return this['get'](_0x1f5027[_0x15c23c(0x158)]);
    }
    [_0x46b558(0x159)]() {
        const _0x4c2aa1 = _0x46b558, _0x3b535b = { 'EnhAF': _0x4c2aa1(0x12c) };
        return this['as'](_0x3b535b[_0x4c2aa1(0x15a)]);
    }
    [_0x46b558(0x12b)]() {
        const _0x1161ff = _0x46b558;
        return this['get'](_0x1161ff(0x12b));
    }
    [_0x46b558(0x15b)]() {
        const _0x29ebde = _0x46b558, _0x214f0b = { 'JRQJT': 'hours' };
        return this['as'](_0x214f0b[_0x29ebde(0x15c)]);
    }
    [_0x46b558(0x134)]() {
        const _0x55b85e = _0x46b558;
        return this[_0x55b85e(0x145)](_0x55b85e(0x134));
    }
    [_0x46b558(0x15d)]() {
        const _0x20a1e2 = _0x46b558;
        return this['as'](_0x20a1e2(0x134));
    }
    [_0x46b558(0x12a)]() {
        const _0x519b1f = _0x46b558;
        return this['get'](_0x519b1f(0x12a));
    }
    [_0x46b558(0x15e)]() {
        const _0x16af9d = _0x46b558, _0x54ebf1 = { 'NsYZI': _0x16af9d(0x12a) };
        return this['as'](_0x54ebf1[_0x16af9d(0x15f)]);
    }
    ['months']() {
        const _0x3ec17b = _0x46b558;
        return this[_0x3ec17b(0x145)](_0x3ec17b(0x133));
    }
    [_0x46b558(0x160)]() {
        const _0x1f74db = _0x46b558;
        return this['as'](_0x1f74db(0x133));
    }
    [_0x46b558(0x129)]() {
        const _0x2ea489 = _0x46b558;
        return this[_0x2ea489(0x145)](_0x2ea489(0x129));
    }
    ['asYears']() {
        const _0x2bd3b5 = _0x46b558, _0x38b93c = { 'nYQPa': _0x2bd3b5(0x129) };
        return this['as'](_0x38b93c[_0x2bd3b5(0x161)]);
    }
}
function _0x376f(_0x20747b, _0x5085bb) {
    return _0x376f = function (_0x222603, _0x9c879c) {
        _0x222603 = _0x222603 - (-0x24e0 + 0x8b * 0x3 + 0x244e);
        let _0xf8a1d3 = _0x2585[_0x222603];
        return _0xf8a1d3;
    }, _0x376f(_0x20747b, _0x5085bb);
}
export default (_0x40af0d, _0xa191c6, _0x21dcc3) => {
    const _0x2a3ea8 = _0x46b558, _0x45b828 = {
            'PEqIs': function (_0x3c810c, _0x4b5222) {
                return _0x3c810c(_0x4b5222);
            },
            'liRRb': function (_0x36debc) {
                return _0x36debc();
            }
        };
    $d = _0x21dcc3, $u = _0x45b828[_0x2a3ea8(0x162)](_0x21dcc3)[_0x2a3ea8(0x163)](), _0x21dcc3[_0x2a3ea8(0x164)] = function (_0x1b22bc, _0x852b8a) {
        const _0x3d22bd = _0x2a3ea8, _0x4daccf = _0x21dcc3[_0x3d22bd(0x14f)]();
        return wrapper(_0x1b22bc, { '$l': _0x4daccf }, _0x852b8a);
    }, _0x21dcc3[_0x2a3ea8(0x165)] = isDuration;
    const _0x3ef9ca = _0xa191c6[_0x2a3ea8(0x166)]['add'], _0x9bfa21 = _0xa191c6[_0x2a3ea8(0x166)]['subtract'];
    _0xa191c6[_0x2a3ea8(0x166)][_0x2a3ea8(0x14a)] = function (_0x371924, _0x53c665) {
        const _0x2a335f = _0x2a3ea8;
        if (_0x45b828['PEqIs'](isDuration, _0x371924))
            _0x371924 = _0x371924[_0x2a335f(0x154)]();
        return _0x3ef9ca[_0x2a335f(0x167)](this)(_0x371924, _0x53c665);
    }, _0xa191c6[_0x2a3ea8(0x166)][_0x2a3ea8(0x14e)] = function (_0x5755a2, _0x1fdd66) {
        const _0x3cee66 = _0x2a3ea8;
        if (isDuration(_0x5755a2))
            _0x5755a2 = _0x5755a2[_0x3cee66(0x154)]();
        return _0x9bfa21[_0x3cee66(0x167)](this)(_0x5755a2, _0x1fdd66);
    };
};
