const _0x5767 = [
    'IPVcT',
    'asDays',
    'jnNgE',
    'asWeeks',
    'qSdah',
    'asMonths',
    'cxoWJ',
    'asYears',
    '$utils',
    'duration',
    'YMazd',
    'prototype',
    'bind',
    '243692yfdqQN',
    '56943EhyCHd',
    '29212jAxEBk',
    '5nVivgU',
    '139538zAAELO',
    '5CluGHO',
    '26979JLXYgA',
    '343226RaxNPS',
    '543481RMqYAJ',
    'ceil',
    'floor',
    'abs',
    'EMDyV',
    'number',
    'object',
    'string',
    'parseFromMilliseconds',
    'nXXrS',
    'xlPyA',
    'Aafhb',
    '$ms',
    'Ibkry',
    'keys',
    'forEach',
    'GkolD',
    'calMilliseconds',
    'BXRDW',
    'match',
    'slice',
    'map',
    'years',
    'months',
    'weeks',
    'hours',
    'minutes',
    'reduce',
    'DjcxV',
    'qmARu',
    'days',
    'PrIoq',
    'toISOString',
    'P0D',
    'EMJjR',
    'PGIsv',
    'LZyuy',
    'qKCxR',
    'zeSoH',
    'milliseconds',
    'vcMaF',
    'negative',
    'format',
    'pKjPF',
    'LOatD',
    'opwKw',
    'YYYY-MM-DDTHH:mm:ss',
    'QGxvc',
    'seconds',
    'ODpsp',
    'get',
    'HNSBB',
    'FisZL',
    'bbjzo',
    'JWbAY',
    'iRguz',
    'add',
    'PiFEe',
    'WfmOb',
    'gSGuv',
    'subtract',
    'locale',
    'clone',
    'kHvQF',
    'fromNow',
    'FKPwN',
    'asMilliseconds',
    'asSeconds',
    'xHMMq',
    'wmpLp',
    'asHours',
    'YKqWL'
];
const _0x4f5e77 = _0x3dc4;
(function (_0x50e9a1, _0x2ec854) {
    const _0x3d8946 = _0x3dc4;
    while (!![]) {
        try {
            const _0x4c8616 = parseInt(_0x3d8946(0xf7)) + -parseInt(_0x3d8946(0xf8)) + -parseInt(_0x3d8946(0xf9)) + parseInt(_0x3d8946(0xfa)) * -parseInt(_0x3d8946(0xfb)) + -parseInt(_0x3d8946(0xfc)) * -parseInt(_0x3d8946(0xfd)) + parseInt(_0x3d8946(0xfe)) + parseInt(_0x3d8946(0xff));
            if (_0x4c8616 === _0x2ec854)
                break;
            else
                _0x50e9a1['push'](_0x50e9a1['shift']());
        } catch (_0x23f614) {
            _0x50e9a1['push'](_0x50e9a1['shift']());
        }
    }
}(_0x5767, -0x3d70d * -0x1 + 0x6ecb * -0xd + 0xd * 0xb3d7));
import {
    MILLISECONDS_A_DAY,
    MILLISECONDS_A_HOUR,
    MILLISECONDS_A_MINUTE,
    MILLISECONDS_A_SECOND,
    MILLISECONDS_A_WEEK,
    REGEX_FORMAT
} from '../../constant';
function _0x3dc4(_0x470ead, _0x4a8f9f) {
    return _0x3dc4 = function (_0x21893f, _0x344d5b) {
        _0x21893f = _0x21893f - (0xb * 0x219 + -0x151c * -0x1 + -0x2b38);
        let _0x237ac8 = _0x5767[_0x21893f];
        return _0x237ac8;
    }, _0x3dc4(_0x470ead, _0x4a8f9f);
}
const MILLISECONDS_A_YEAR = MILLISECONDS_A_DAY * (-0x5 * -0x54d + 0x1813 + -0x3127), MILLISECONDS_A_MONTH = MILLISECONDS_A_DAY * (0x28b + 0xb5d + 0x161 * -0xa), durationRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, unitToMS = {
        'years': MILLISECONDS_A_YEAR,
        'months': MILLISECONDS_A_MONTH,
        'days': MILLISECONDS_A_DAY,
        'hours': MILLISECONDS_A_HOUR,
        'minutes': MILLISECONDS_A_MINUTE,
        'seconds': MILLISECONDS_A_SECOND,
        'milliseconds': 0x1,
        'weeks': MILLISECONDS_A_WEEK
    }, isDuration = _0x334435 => _0x334435 instanceof Duration;
let $d, $u;
const wrapper = (_0x14b265, _0x4505c9, _0x233c62) => new Duration(_0x14b265, _0x233c62, _0x4505c9['$l']), prettyUnit = _0x59cee5 => $u['p'](_0x59cee5) + 's', isNegative = _0x30e2e2 => _0x30e2e2 < -0x1732 + 0x101 * -0xa + 0x213c, roundNumber = _0xdcd6c7 => isNegative(_0xdcd6c7) ? Math[_0x4f5e77(0x100)](_0xdcd6c7) : Math[_0x4f5e77(0x101)](_0xdcd6c7), absolute = _0x13481c => Math[_0x4f5e77(0x102)](_0x13481c), getNumberUnitFormat = (_0x4c84d6, _0x582ce4) => {
        const _0x3e2d87 = _0x4f5e77, _0x5edec6 = {
                'EMDyV': function (_0x3b8ea8, _0x683bc3) {
                    return _0x3b8ea8(_0x683bc3);
                }
            };
        if (!_0x4c84d6)
            return {
                'negative': ![],
                'format': ''
            };
        if (_0x5edec6[_0x3e2d87(0x103)](isNegative, _0x4c84d6))
            return {
                'negative': !![],
                'format': '' + absolute(_0x4c84d6) + _0x582ce4
            };
        return {
            'negative': ![],
            'format': '' + _0x4c84d6 + _0x582ce4
        };
    };
class Duration {
    constructor(_0x2d28fe, _0x5ea291, _0x4e73b6) {
        const _0x5bcd54 = _0x4f5e77, _0x4b0c35 = {
                'GkolD': function (_0x4bdbae, _0x1334f6) {
                    return _0x4bdbae(_0x1334f6);
                },
                'gGkUq': function (_0x42a700, _0x36982c) {
                    return _0x42a700 === _0x36982c;
                },
                'nXXrS': function (_0x2bdcb0, _0x15d6c2) {
                    return _0x2bdcb0(_0x15d6c2);
                },
                'xlPyA': function (_0x5ab114, _0x27446c) {
                    return _0x5ab114 === _0x27446c;
                },
                'Aafhb': _0x5bcd54(0x104),
                'Ibkry': _0x5bcd54(0x105),
                'BXRDW': _0x5bcd54(0x106)
            };
        this['$d'] = {}, this['$l'] = _0x4e73b6;
        _0x4b0c35['gGkUq'](_0x2d28fe, undefined) && (this['$ms'] = -0x1022 + 0x723 + 0x8ff, this[_0x5bcd54(0x107)]());
        if (_0x5ea291)
            return wrapper(_0x2d28fe * unitToMS[_0x4b0c35[_0x5bcd54(0x108)](prettyUnit, _0x5ea291)], this);
        if (_0x4b0c35[_0x5bcd54(0x109)](typeof _0x2d28fe, _0x4b0c35[_0x5bcd54(0x10a)]))
            return this[_0x5bcd54(0x10b)] = _0x2d28fe, this[_0x5bcd54(0x107)](), this;
        if (_0x4b0c35['xlPyA'](typeof _0x2d28fe, _0x4b0c35[_0x5bcd54(0x10c)]))
            return Object[_0x5bcd54(0x10d)](_0x2d28fe)[_0x5bcd54(0x10e)](_0x5ecc5e => {
                const _0x7bf597 = _0x5bcd54;
                this['$d'][_0x4b0c35[_0x7bf597(0x10f)](prettyUnit, _0x5ecc5e)] = _0x2d28fe[_0x5ecc5e];
            }), this[_0x5bcd54(0x110)](), this;
        if (typeof _0x2d28fe === _0x4b0c35[_0x5bcd54(0x111)]) {
            const _0x73a6e7 = _0x2d28fe[_0x5bcd54(0x112)](durationRegex);
            if (_0x73a6e7) {
                const _0x314e5e = _0x73a6e7[_0x5bcd54(0x113)](0x212d + 0x882 + -0x29ad), _0x30c049 = _0x314e5e[_0x5bcd54(0x114)](_0x368b8a => Number(_0x368b8a));
                return [this['$d'][_0x5bcd54(0x115)], this['$d'][_0x5bcd54(0x116)], this['$d'][_0x5bcd54(0x117)], this['$d']['days'], this['$d'][_0x5bcd54(0x118)], this['$d'][_0x5bcd54(0x119)], this['$d']['seconds']] = _0x30c049, this[_0x5bcd54(0x110)](), this;
            }
        }
        return this;
    }
    [_0x4f5e77(0x110)]() {
        const _0x166cbf = _0x4f5e77;
        this[_0x166cbf(0x10b)] = Object['keys'](this['$d'])[_0x166cbf(0x11a)]((_0xa44668, _0x58e9d4) => _0xa44668 + (this['$d'][_0x58e9d4] || -0xb * -0x94 + 0x242f + -0x2a8b) * unitToMS[_0x58e9d4], 0x6 * 0x566 + 0x633 * -0x1 + -0x1a31);
    }
    [_0x4f5e77(0x107)]() {
        const _0x5aff24 = _0x4f5e77, _0x5e4a26 = {
                'DjcxV': function (_0x250857, _0x166773) {
                    return _0x250857(_0x166773);
                },
                'liQsO': function (_0x5002d5, _0x49ea47) {
                    return _0x5002d5 / _0x49ea47;
                },
                'qmARu': function (_0x5489f2, _0x4ca98b) {
                    return _0x5489f2 / _0x4ca98b;
                },
                'YZWhU': function (_0x4c0444, _0x5a0508) {
                    return _0x4c0444 / _0x5a0508;
                },
                'PrIoq': function (_0x3df3fe, _0x31bfed) {
                    return _0x3df3fe(_0x31bfed);
                },
                'ypcEF': function (_0x2dd363, _0x7f186b) {
                    return _0x2dd363 / _0x7f186b;
                }
            };
        let {$ms: _0x311e0f} = this;
        this['$d'][_0x5aff24(0x115)] = _0x5e4a26[_0x5aff24(0x11b)](roundNumber, _0x5e4a26['liQsO'](_0x311e0f, MILLISECONDS_A_YEAR)), _0x311e0f %= MILLISECONDS_A_YEAR, this['$d']['months'] = _0x5e4a26[_0x5aff24(0x11b)](roundNumber, _0x5e4a26[_0x5aff24(0x11c)](_0x311e0f, MILLISECONDS_A_MONTH)), _0x311e0f %= MILLISECONDS_A_MONTH, this['$d'][_0x5aff24(0x11d)] = _0x5e4a26[_0x5aff24(0x11b)](roundNumber, _0x311e0f / MILLISECONDS_A_DAY), _0x311e0f %= MILLISECONDS_A_DAY, this['$d'][_0x5aff24(0x118)] = _0x5e4a26[_0x5aff24(0x11b)](roundNumber, _0x5e4a26[_0x5aff24(0x11c)](_0x311e0f, MILLISECONDS_A_HOUR)), _0x311e0f %= MILLISECONDS_A_HOUR, this['$d']['minutes'] = roundNumber(_0x5e4a26['YZWhU'](_0x311e0f, MILLISECONDS_A_MINUTE)), _0x311e0f %= MILLISECONDS_A_MINUTE, this['$d']['seconds'] = _0x5e4a26[_0x5aff24(0x11e)](roundNumber, _0x5e4a26['ypcEF'](_0x311e0f, MILLISECONDS_A_SECOND)), _0x311e0f %= MILLISECONDS_A_SECOND, this['$d']['milliseconds'] = _0x311e0f;
    }
    [_0x4f5e77(0x11f)]() {
        const _0x1f4327 = _0x4f5e77, _0x38a8b0 = {
                'EMJjR': function (_0x5b9848, _0x520b8c, _0x31b6b4) {
                    return _0x5b9848(_0x520b8c, _0x31b6b4);
                },
                'PGIsv': function (_0xda1375, _0x24e39a, _0x4d529a) {
                    return _0xda1375(_0x24e39a, _0x4d529a);
                },
                'LZyuy': function (_0x33d577, _0x2ced13) {
                    return _0x33d577 * _0x2ced13;
                },
                'qKCxR': function (_0x4dc5d8, _0x18641b, _0x18fa27) {
                    return _0x4dc5d8(_0x18641b, _0x18fa27);
                },
                'zeSoH': function (_0x4aa237, _0x159266, _0x277d9b) {
                    return _0x4aa237(_0x159266, _0x277d9b);
                },
                'vcMaF': function (_0x37fa25, _0x3db11a) {
                    return _0x37fa25 / _0x3db11a;
                },
                'pKjPF': function (_0x2ab8fb, _0x3b0c3b) {
                    return _0x2ab8fb === _0x3b0c3b;
                },
                'LOatD': function (_0x293daf, _0x243ce7) {
                    return _0x293daf === _0x243ce7;
                },
                'opwKw': _0x1f4327(0x120)
            }, _0x2c8593 = _0x38a8b0[_0x1f4327(0x121)](getNumberUnitFormat, this['$d']['years'], 'Y'), _0x2133bc = _0x38a8b0[_0x1f4327(0x122)](getNumberUnitFormat, this['$d'][_0x1f4327(0x116)], 'M');
        let _0x11b71f = +this['$d']['days'] || 0x1 * 0x1a29 + 0x2670 + 0x17 * -0x2cf;
        this['$d'][_0x1f4327(0x117)] && (_0x11b71f += _0x38a8b0[_0x1f4327(0x123)](this['$d'][_0x1f4327(0x117)], -0x53 * 0x69 + -0x2 * -0x1337 + -0x45c));
        const _0x48c01a = _0x38a8b0[_0x1f4327(0x124)](getNumberUnitFormat, _0x11b71f, 'D'), _0x1b51d6 = _0x38a8b0['qKCxR'](getNumberUnitFormat, this['$d'][_0x1f4327(0x118)], 'H'), _0x530ffe = _0x38a8b0[_0x1f4327(0x125)](getNumberUnitFormat, this['$d'][_0x1f4327(0x119)], 'M');
        let _0x3c1756 = this['$d']['seconds'] || 0x129d * 0x1 + 0x713 + 0x112 * -0x18;
        this['$d'][_0x1f4327(0x126)] && (_0x3c1756 += _0x38a8b0[_0x1f4327(0x127)](this['$d'][_0x1f4327(0x126)], 0x18 * -0x188 + 0x1223 + 0x481 * 0x5));
        const _0x46c970 = getNumberUnitFormat(_0x3c1756, 'S'), _0x440c94 = _0x2c8593[_0x1f4327(0x128)] || _0x2133bc[_0x1f4327(0x128)] || _0x48c01a[_0x1f4327(0x128)] || _0x1b51d6[_0x1f4327(0x128)] || _0x530ffe[_0x1f4327(0x128)] || _0x46c970[_0x1f4327(0x128)], _0x232426 = _0x1b51d6[_0x1f4327(0x129)] || _0x530ffe[_0x1f4327(0x129)] || _0x46c970[_0x1f4327(0x129)] ? 'T' : '', _0x54cdaf = _0x440c94 ? '-' : '', _0x50ead = _0x54cdaf + 'P' + _0x2c8593[_0x1f4327(0x129)] + _0x2133bc[_0x1f4327(0x129)] + _0x48c01a['format'] + _0x232426 + _0x1b51d6[_0x1f4327(0x129)] + _0x530ffe[_0x1f4327(0x129)] + _0x46c970[_0x1f4327(0x129)];
        return _0x38a8b0[_0x1f4327(0x12a)](_0x50ead, 'P') || _0x38a8b0[_0x1f4327(0x12b)](_0x50ead, '-P') ? _0x38a8b0[_0x1f4327(0x12c)] : _0x50ead;
    }
    ['toJSON']() {
        const _0x4fe704 = _0x4f5e77;
        return this[_0x4fe704(0x11f)]();
    }
    [_0x4f5e77(0x129)](_0x4cc204) {
        const _0x15456e = _0x4f5e77, _0x330169 = { 'QGxvc': _0x15456e(0x12d) }, _0x193da1 = _0x4cc204 || _0x330169[_0x15456e(0x12e)], _0x3f0c4f = {
                'Y': this['$d'][_0x15456e(0x115)],
                'YY': $u['s'](this['$d'][_0x15456e(0x115)], -0x16f4 + 0x2 * 0x2a4 + 0x11ae, '0'),
                'YYYY': $u['s'](this['$d'][_0x15456e(0x115)], 0x16ac + -0x1 * -0x236a + -0x3a12 * 0x1, '0'),
                'M': this['$d'][_0x15456e(0x116)],
                'MM': $u['s'](this['$d'][_0x15456e(0x116)], -0x10fb + -0x5d * 0x3 + 0x485 * 0x4, '0'),
                'D': this['$d'][_0x15456e(0x11d)],
                'DD': $u['s'](this['$d']['days'], 0x1300 + 0xd6a + 0x40d * -0x8, '0'),
                'H': this['$d'][_0x15456e(0x118)],
                'HH': $u['s'](this['$d'][_0x15456e(0x118)], -0x23af + -0x1e83 * -0x1 + -0x33 * -0x1a, '0'),
                'm': this['$d'][_0x15456e(0x119)],
                'mm': $u['s'](this['$d'][_0x15456e(0x119)], 0x359 * 0x6 + 0x6a7 * -0x5 + 0xd2f, '0'),
                's': this['$d'][_0x15456e(0x12f)],
                'ss': $u['s'](this['$d']['seconds'], -0x74a + 0x144d * -0x1 + 0x1b99, '0'),
                'SSS': $u['s'](this['$d'][_0x15456e(0x126)], 0xa2e + -0xe3c + 0x411, '0')
            };
        return _0x193da1['replace'](REGEX_FORMAT, (_0x44ca25, _0x22ce17) => _0x22ce17 || String(_0x3f0c4f[_0x44ca25]));
    }
    ['as'](_0xb25b2f) {
        const _0x108bdf = _0x4f5e77, _0x3c7a29 = {
                'ODpsp': function (_0x55cef1, _0x3c4fde) {
                    return _0x55cef1 / _0x3c4fde;
                },
                'BCzIB': function (_0x73999b, _0x32f7ed) {
                    return _0x73999b(_0x32f7ed);
                }
            };
        return _0x3c7a29[_0x108bdf(0x130)](this[_0x108bdf(0x10b)], unitToMS[_0x3c7a29['BCzIB'](prettyUnit, _0xb25b2f)]);
    }
    [_0x4f5e77(0x131)](_0x1ea0c2) {
        const _0x35651f = _0x4f5e77, _0x1dbd37 = {
                'HNSBB': function (_0x17039d, _0x21a72e) {
                    return _0x17039d(_0x21a72e);
                },
                'FisZL': function (_0x2369d1, _0x1d2ea6) {
                    return _0x2369d1 === _0x1d2ea6;
                },
                'bbjzo': _0x35651f(0x117),
                'JWbAY': function (_0xe5a9ff, _0x479c48) {
                    return _0xe5a9ff(_0x479c48);
                },
                'iRguz': function (_0x3a85b6, _0x2b3d21) {
                    return _0x3a85b6 / _0x2b3d21;
                },
                'XITgO': function (_0xef4732, _0x5d6710) {
                    return _0xef4732 === _0x5d6710;
                }
            };
        let _0x4e17d0 = this['$ms'];
        const _0x1edeab = _0x1dbd37[_0x35651f(0x132)](prettyUnit, _0x1ea0c2);
        if (_0x1edeab === _0x35651f(0x126))
            _0x4e17d0 %= 0x19dc + 0x1 * 0x5c9 + -0x3 * 0x93f;
        else
            _0x1dbd37[_0x35651f(0x133)](_0x1edeab, _0x1dbd37[_0x35651f(0x134)]) ? _0x4e17d0 = _0x1dbd37[_0x35651f(0x135)](roundNumber, _0x1dbd37[_0x35651f(0x136)](_0x4e17d0, unitToMS[_0x1edeab])) : _0x4e17d0 = this['$d'][_0x1edeab];
        return _0x1dbd37['XITgO'](_0x4e17d0, 0x4fd + -0x25 * 0xd9 + -0x8 * -0x34c) ? 0x2bd + -0x747 + -0x1 * -0x48a : _0x4e17d0;
    }
    [_0x4f5e77(0x137)](_0x11b2b7, _0xafd2ad, _0x534539) {
        const _0x1b1b91 = _0x4f5e77, _0x55cdf7 = {
                'PiFEe': function (_0x1c9a9f, _0x27513a) {
                    return _0x1c9a9f * _0x27513a;
                },
                'WfmOb': function (_0x5d6959, _0x4ae66d) {
                    return _0x5d6959(_0x4ae66d);
                },
                'gSGuv': function (_0x5ad9d6, _0x97198c, _0x1477af) {
                    return _0x5ad9d6(_0x97198c, _0x1477af);
                },
                'lwNJJ': function (_0x106002, _0xd3f2ad) {
                    return _0x106002 + _0xd3f2ad;
                }
            };
        let _0xc1d2ea;
        if (_0xafd2ad)
            _0xc1d2ea = _0x55cdf7[_0x1b1b91(0x138)](_0x11b2b7, unitToMS[_0x55cdf7[_0x1b1b91(0x139)](prettyUnit, _0xafd2ad)]);
        else
            _0x55cdf7['WfmOb'](isDuration, _0x11b2b7) ? _0xc1d2ea = _0x11b2b7[_0x1b1b91(0x10b)] : _0xc1d2ea = wrapper(_0x11b2b7, this)[_0x1b1b91(0x10b)];
        return _0x55cdf7[_0x1b1b91(0x13a)](wrapper, _0x55cdf7['lwNJJ'](this[_0x1b1b91(0x10b)], _0xc1d2ea * (_0x534539 ? -(0x22 * -0x53 + 0x2 * -0xead + 0x2861) : -0x93f + 0x8 * -0x2da + -0x13 * -0x1b0)), this);
    }
    [_0x4f5e77(0x13b)](_0xd29a8a, _0x522adc) {
        const _0x43abc3 = _0x4f5e77;
        return this[_0x43abc3(0x137)](_0xd29a8a, _0x522adc, !![]);
    }
    [_0x4f5e77(0x13c)](_0x46f2db) {
        const _0x5516e1 = _0x4f5e77, _0x2f9d9e = this[_0x5516e1(0x13d)]();
        return _0x2f9d9e['$l'] = _0x46f2db, _0x2f9d9e;
    }
    ['clone']() {
        const _0x563861 = _0x4f5e77;
        return wrapper(this[_0x563861(0x10b)], this);
    }
    ['humanize'](_0x128b57) {
        const _0x14a94b = _0x4f5e77, _0x89b9b5 = {
                'kHvQF': function (_0x386a01) {
                    return _0x386a01();
                }
            };
        return _0x89b9b5[_0x14a94b(0x13e)]($d)[_0x14a94b(0x137)](this['$ms'], 'ms')[_0x14a94b(0x13c)](this['$l'])[_0x14a94b(0x13f)](!_0x128b57);
    }
    ['milliseconds']() {
        const _0x3dc346 = _0x4f5e77, _0x4af069 = { 'FKPwN': _0x3dc346(0x126) };
        return this[_0x3dc346(0x131)](_0x4af069[_0x3dc346(0x140)]);
    }
    [_0x4f5e77(0x141)]() {
        const _0x1d6268 = _0x4f5e77, _0x24086a = { 'WXLOR': _0x1d6268(0x126) };
        return this['as'](_0x24086a['WXLOR']);
    }
    [_0x4f5e77(0x12f)]() {
        const _0x1e234f = _0x4f5e77;
        return this[_0x1e234f(0x131)]('seconds');
    }
    [_0x4f5e77(0x142)]() {
        const _0x2ea47b = _0x4f5e77, _0x1b0f36 = { 'sFGzm': _0x2ea47b(0x12f) };
        return this['as'](_0x1b0f36['sFGzm']);
    }
    [_0x4f5e77(0x119)]() {
        const _0x1dd68c = _0x4f5e77, _0xaa3146 = { 'xHMMq': _0x1dd68c(0x119) };
        return this['get'](_0xaa3146[_0x1dd68c(0x143)]);
    }
    ['asMinutes']() {
        const _0x3b6379 = _0x4f5e77, _0x381611 = { 'wmpLp': _0x3b6379(0x119) };
        return this['as'](_0x381611[_0x3b6379(0x144)]);
    }
    [_0x4f5e77(0x118)]() {
        const _0xa7924d = _0x4f5e77, _0x314acc = { 'EbfBY': _0xa7924d(0x118) };
        return this['get'](_0x314acc['EbfBY']);
    }
    [_0x4f5e77(0x145)]() {
        const _0x7f99c8 = _0x4f5e77, _0x2847a4 = { 'YKqWL': _0x7f99c8(0x118) };
        return this['as'](_0x2847a4[_0x7f99c8(0x146)]);
    }
    ['days']() {
        const _0x4a2acc = _0x4f5e77, _0x1940fe = { 'IPVcT': _0x4a2acc(0x11d) };
        return this['get'](_0x1940fe[_0x4a2acc(0x147)]);
    }
    [_0x4f5e77(0x148)]() {
        const _0xb2f502 = _0x4f5e77, _0x7f4494 = { 'jnNgE': _0xb2f502(0x11d) };
        return this['as'](_0x7f4494[_0xb2f502(0x149)]);
    }
    [_0x4f5e77(0x117)]() {
        const _0x2b159e = _0x4f5e77;
        return this['get'](_0x2b159e(0x117));
    }
    [_0x4f5e77(0x14a)]() {
        const _0x305542 = _0x4f5e77, _0x25a965 = { 'TMGjW': _0x305542(0x117) };
        return this['as'](_0x25a965['TMGjW']);
    }
    ['months']() {
        const _0x4419e7 = _0x4f5e77, _0x1674f3 = { 'qSdah': _0x4419e7(0x116) };
        return this[_0x4419e7(0x131)](_0x1674f3[_0x4419e7(0x14b)]);
    }
    [_0x4f5e77(0x14c)]() {
        const _0x363e14 = _0x4f5e77, _0x2c86c3 = { 'cxoWJ': _0x363e14(0x116) };
        return this['as'](_0x2c86c3[_0x363e14(0x14d)]);
    }
    ['years']() {
        const _0x24698c = _0x4f5e77, _0x287820 = { 'hCDcO': 'years' };
        return this[_0x24698c(0x131)](_0x287820['hCDcO']);
    }
    [_0x4f5e77(0x14e)]() {
        return this['as']('years');
    }
}
export default (_0x4f36f5, _0x133480, _0x18ebfe) => {
    const _0x285b31 = _0x4f5e77, _0x4481d1 = {
            'YMazd': function (_0x507090, _0x51577e, _0x88982f, _0x31a9af) {
                return _0x507090(_0x51577e, _0x88982f, _0x31a9af);
            },
            'NAKKZ': function (_0x17fe7c) {
                return _0x17fe7c();
            }
        };
    $d = _0x18ebfe, $u = _0x4481d1['NAKKZ'](_0x18ebfe)[_0x285b31(0x14f)](), _0x18ebfe[_0x285b31(0x150)] = function (_0x42d716, _0x40370d) {
        const _0x562a6e = _0x285b31, _0x3e0716 = _0x18ebfe['locale']();
        return _0x4481d1[_0x562a6e(0x151)](wrapper, _0x42d716, { '$l': _0x3e0716 }, _0x40370d);
    }, _0x18ebfe['isDuration'] = isDuration;
    const _0x312ab7 = _0x133480[_0x285b31(0x152)]['add'], _0x5e7943 = _0x133480[_0x285b31(0x152)][_0x285b31(0x13b)];
    _0x133480[_0x285b31(0x152)]['add'] = function (_0x76a05a, _0x406c7b) {
        const _0x25ce0c = _0x285b31;
        if (isDuration(_0x76a05a))
            _0x76a05a = _0x76a05a[_0x25ce0c(0x141)]();
        return _0x312ab7[_0x25ce0c(0x153)](this)(_0x76a05a, _0x406c7b);
    }, _0x133480[_0x285b31(0x152)][_0x285b31(0x13b)] = function (_0x215cda, _0x52f94b) {
        const _0x13f2b5 = _0x285b31;
        if (isDuration(_0x215cda))
            _0x215cda = _0x215cda['asMilliseconds']();
        return _0x5e7943[_0x13f2b5(0x153)](this)(_0x215cda, _0x52f94b);
    };
};
