const _0x326b = [
    'months',
    'days',
    'hours',
    'minutes',
    'seconds',
    'reduce',
    'milliseconds',
    'toISOString',
    'weeks',
    'negative',
    'format',
    'P0D',
    'YYYY-MM-DDTHH:mm:ss',
    'get',
    'add',
    'subtract',
    'locale',
    'humanize',
    'fromNow',
    'asMilliseconds',
    'asDays',
    'asWeeks',
    'asMonths',
    'asYears',
    '$utils',
    'duration',
    'isDuration',
    'prototype',
    'bind',
    '753610byWLnv',
    '1527605ZtaXfd',
    '9PYOWAr',
    '16162bNvzUw',
    '330225zEkyZx',
    '1211092pQjAaX',
    '1424161EzDdLD',
    '74707cqjczk',
    '27PVoLDn',
    'ceil',
    'floor',
    'abs',
    '$ms',
    'parseFromMilliseconds',
    'object',
    'forEach',
    'calMilliseconds',
    'string',
    'match',
    'slice',
    'map',
    'years'
];
const _0x2cab4c = _0x4a24;
(function (_0x4f7daa, _0x4d7fb5) {
    const _0x3752d7 = _0x4a24;
    while (!![]) {
        try {
            const _0x263d53 = parseInt(_0x3752d7(0x103)) + parseInt(_0x3752d7(0x104)) + -parseInt(_0x3752d7(0x105)) * -parseInt(_0x3752d7(0x106)) + parseInt(_0x3752d7(0x107)) + -parseInt(_0x3752d7(0x108)) + parseInt(_0x3752d7(0x109)) + -parseInt(_0x3752d7(0x10a)) * parseInt(_0x3752d7(0x10b));
            if (_0x263d53 === _0x4d7fb5)
                break;
            else
                _0x4f7daa['push'](_0x4f7daa['shift']());
        } catch (_0x4a77fb) {
            _0x4f7daa['push'](_0x4f7daa['shift']());
        }
    }
}(_0x326b, 0xe8a2e));
import {
    MILLISECONDS_A_DAY,
    MILLISECONDS_A_HOUR,
    MILLISECONDS_A_MINUTE,
    MILLISECONDS_A_SECOND,
    MILLISECONDS_A_WEEK,
    REGEX_FORMAT
} from '../../constant';
const MILLISECONDS_A_YEAR = MILLISECONDS_A_DAY * 0x16d, MILLISECONDS_A_MONTH = MILLISECONDS_A_DAY * 0x1e, durationRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, unitToMS = {
        'years': MILLISECONDS_A_YEAR,
        'months': MILLISECONDS_A_MONTH,
        'days': MILLISECONDS_A_DAY,
        'hours': MILLISECONDS_A_HOUR,
        'minutes': MILLISECONDS_A_MINUTE,
        'seconds': MILLISECONDS_A_SECOND,
        'milliseconds': 0x1,
        'weeks': MILLISECONDS_A_WEEK
    }, isDuration = _0x3a1c05 => _0x3a1c05 instanceof Duration;
let $d, $u;
const wrapper = (_0x2e64e0, _0x2d7675, _0x3f3d12) => new Duration(_0x2e64e0, _0x3f3d12, _0x2d7675['$l']), prettyUnit = _0x5743d1 => $u['p'](_0x5743d1) + 's', isNegative = _0x25a6ae => _0x25a6ae < 0x0, roundNumber = _0x51e29d => isNegative(_0x51e29d) ? Math[_0x2cab4c(0x10c)](_0x51e29d) : Math[_0x2cab4c(0x10d)](_0x51e29d), absolute = _0x42ee01 => Math[_0x2cab4c(0x10e)](_0x42ee01), getNumberUnitFormat = (_0x435067, _0x32752c) => {
        if (!_0x435067)
            return {
                'negative': ![],
                'format': ''
            };
        if (isNegative(_0x435067))
            return {
                'negative': !![],
                'format': '' + absolute(_0x435067) + _0x32752c
            };
        return {
            'negative': ![],
            'format': '' + _0x435067 + _0x32752c
        };
    };
function _0x4a24(_0x3db288, _0x3811b4) {
    return _0x4a24 = function (_0x326bf4, _0x4a244d) {
        _0x326bf4 = _0x326bf4 - 0x103;
        let _0x109daa = _0x326b[_0x326bf4];
        return _0x109daa;
    }, _0x4a24(_0x3db288, _0x3811b4);
}
class Duration {
    constructor(_0x3a8e4c, _0xe2ee96, _0x3b867b) {
        const _0x7582d = _0x2cab4c;
        this['$d'] = {}, this['$l'] = _0x3b867b;
        _0x3a8e4c === undefined && (this['$ms'] = 0x0, this['parseFromMilliseconds']());
        if (_0xe2ee96)
            return wrapper(_0x3a8e4c * unitToMS[prettyUnit(_0xe2ee96)], this);
        if (typeof _0x3a8e4c === 'number')
            return this[_0x7582d(0x10f)] = _0x3a8e4c, this[_0x7582d(0x110)](), this;
        if (typeof _0x3a8e4c === _0x7582d(0x111))
            return Object['keys'](_0x3a8e4c)[_0x7582d(0x112)](_0x5e1a40 => {
                this['$d'][prettyUnit(_0x5e1a40)] = _0x3a8e4c[_0x5e1a40];
            }), this[_0x7582d(0x113)](), this;
        if (typeof _0x3a8e4c === _0x7582d(0x114)) {
            const _0xb2568f = _0x3a8e4c[_0x7582d(0x115)](durationRegex);
            if (_0xb2568f) {
                const _0x1888a4 = _0xb2568f[_0x7582d(0x116)](0x2), _0x25f9b8 = _0x1888a4[_0x7582d(0x117)](_0x3af119 => Number(_0x3af119));
                return [this['$d'][_0x7582d(0x118)], this['$d'][_0x7582d(0x119)], this['$d']['weeks'], this['$d'][_0x7582d(0x11a)], this['$d'][_0x7582d(0x11b)], this['$d'][_0x7582d(0x11c)], this['$d'][_0x7582d(0x11d)]] = _0x25f9b8, this[_0x7582d(0x113)](), this;
            }
        }
        return this;
    }
    [_0x2cab4c(0x113)]() {
        const _0x3d51e0 = _0x2cab4c;
        this[_0x3d51e0(0x10f)] = Object['keys'](this['$d'])[_0x3d51e0(0x11e)]((_0x44e33d, _0x84ac0b) => _0x44e33d + (this['$d'][_0x84ac0b] || 0x0) * unitToMS[_0x84ac0b], 0x0);
    }
    [_0x2cab4c(0x110)]() {
        const _0x2b01a5 = _0x2cab4c;
        let {$ms: _0x41adfc} = this;
        this['$d']['years'] = roundNumber(_0x41adfc / MILLISECONDS_A_YEAR), _0x41adfc %= MILLISECONDS_A_YEAR, this['$d'][_0x2b01a5(0x119)] = roundNumber(_0x41adfc / MILLISECONDS_A_MONTH), _0x41adfc %= MILLISECONDS_A_MONTH, this['$d'][_0x2b01a5(0x11a)] = roundNumber(_0x41adfc / MILLISECONDS_A_DAY), _0x41adfc %= MILLISECONDS_A_DAY, this['$d'][_0x2b01a5(0x11b)] = roundNumber(_0x41adfc / MILLISECONDS_A_HOUR), _0x41adfc %= MILLISECONDS_A_HOUR, this['$d'][_0x2b01a5(0x11c)] = roundNumber(_0x41adfc / MILLISECONDS_A_MINUTE), _0x41adfc %= MILLISECONDS_A_MINUTE, this['$d'][_0x2b01a5(0x11d)] = roundNumber(_0x41adfc / MILLISECONDS_A_SECOND), _0x41adfc %= MILLISECONDS_A_SECOND, this['$d'][_0x2b01a5(0x11f)] = _0x41adfc;
    }
    [_0x2cab4c(0x120)]() {
        const _0x4506b7 = _0x2cab4c, _0x32e3af = getNumberUnitFormat(this['$d'][_0x4506b7(0x118)], 'Y'), _0x106aa7 = getNumberUnitFormat(this['$d'][_0x4506b7(0x119)], 'M');
        let _0x113b59 = +this['$d'][_0x4506b7(0x11a)] || 0x0;
        this['$d'][_0x4506b7(0x121)] && (_0x113b59 += this['$d']['weeks'] * 0x7);
        const _0x714e96 = getNumberUnitFormat(_0x113b59, 'D'), _0x3c798d = getNumberUnitFormat(this['$d'][_0x4506b7(0x11b)], 'H'), _0xbdf938 = getNumberUnitFormat(this['$d'][_0x4506b7(0x11c)], 'M');
        let _0x435886 = this['$d'][_0x4506b7(0x11d)] || 0x0;
        this['$d'][_0x4506b7(0x11f)] && (_0x435886 += this['$d'][_0x4506b7(0x11f)] / 0x3e8);
        const _0x140f3c = getNumberUnitFormat(_0x435886, 'S'), _0x2a02f7 = _0x32e3af[_0x4506b7(0x122)] || _0x106aa7[_0x4506b7(0x122)] || _0x714e96['negative'] || _0x3c798d[_0x4506b7(0x122)] || _0xbdf938[_0x4506b7(0x122)] || _0x140f3c[_0x4506b7(0x122)], _0x4dfb78 = _0x3c798d['format'] || _0xbdf938[_0x4506b7(0x123)] || _0x140f3c[_0x4506b7(0x123)] ? 'T' : '', _0x49d5e3 = _0x2a02f7 ? '-' : '', _0x4b5585 = _0x49d5e3 + 'P' + _0x32e3af[_0x4506b7(0x123)] + _0x106aa7[_0x4506b7(0x123)] + _0x714e96['format'] + _0x4dfb78 + _0x3c798d[_0x4506b7(0x123)] + _0xbdf938[_0x4506b7(0x123)] + _0x140f3c['format'];
        return _0x4b5585 === 'P' || _0x4b5585 === '-P' ? _0x4506b7(0x124) : _0x4b5585;
    }
    ['toJSON']() {
        const _0x8f425 = _0x2cab4c;
        return this[_0x8f425(0x120)]();
    }
    ['format'](_0x501177) {
        const _0x56e111 = _0x2cab4c, _0x3435fd = _0x501177 || _0x56e111(0x125), _0x861f8e = {
                'Y': this['$d'][_0x56e111(0x118)],
                'YY': $u['s'](this['$d']['years'], 0x2, '0'),
                'YYYY': $u['s'](this['$d'][_0x56e111(0x118)], 0x4, '0'),
                'M': this['$d'][_0x56e111(0x119)],
                'MM': $u['s'](this['$d']['months'], 0x2, '0'),
                'D': this['$d']['days'],
                'DD': $u['s'](this['$d']['days'], 0x2, '0'),
                'H': this['$d'][_0x56e111(0x11b)],
                'HH': $u['s'](this['$d']['hours'], 0x2, '0'),
                'm': this['$d']['minutes'],
                'mm': $u['s'](this['$d']['minutes'], 0x2, '0'),
                's': this['$d'][_0x56e111(0x11d)],
                'ss': $u['s'](this['$d'][_0x56e111(0x11d)], 0x2, '0'),
                'SSS': $u['s'](this['$d']['milliseconds'], 0x3, '0')
            };
        return _0x3435fd['replace'](REGEX_FORMAT, (_0x5edfb1, _0x318485) => _0x318485 || String(_0x861f8e[_0x5edfb1]));
    }
    ['as'](_0x39c7e1) {
        const _0x342c6a = _0x2cab4c;
        return this[_0x342c6a(0x10f)] / unitToMS[prettyUnit(_0x39c7e1)];
    }
    [_0x2cab4c(0x126)](_0xcdc3fd) {
        const _0x13a241 = _0x2cab4c;
        let _0x3dbe5b = this[_0x13a241(0x10f)];
        const _0x651587 = prettyUnit(_0xcdc3fd);
        if (_0x651587 === _0x13a241(0x11f))
            _0x3dbe5b %= 0x3e8;
        else
            _0x651587 === _0x13a241(0x121) ? _0x3dbe5b = roundNumber(_0x3dbe5b / unitToMS[_0x651587]) : _0x3dbe5b = this['$d'][_0x651587];
        return _0x3dbe5b === 0x0 ? 0x0 : _0x3dbe5b;
    }
    [_0x2cab4c(0x127)](_0x294d8f, _0x33fee0, _0x16ba6c) {
        const _0x21204b = _0x2cab4c;
        let _0x5e975c;
        if (_0x33fee0)
            _0x5e975c = _0x294d8f * unitToMS[prettyUnit(_0x33fee0)];
        else
            isDuration(_0x294d8f) ? _0x5e975c = _0x294d8f['$ms'] : _0x5e975c = wrapper(_0x294d8f, this)[_0x21204b(0x10f)];
        return wrapper(this[_0x21204b(0x10f)] + _0x5e975c * (_0x16ba6c ? -0x1 : 0x1), this);
    }
    [_0x2cab4c(0x128)](_0x101929, _0x3c36ca) {
        const _0x34d62c = _0x2cab4c;
        return this[_0x34d62c(0x127)](_0x101929, _0x3c36ca, !![]);
    }
    [_0x2cab4c(0x129)](_0x2da387) {
        const _0x1f759e = this['clone']();
        return _0x1f759e['$l'] = _0x2da387, _0x1f759e;
    }
    ['clone']() {
        const _0x47be06 = _0x2cab4c;
        return wrapper(this[_0x47be06(0x10f)], this);
    }
    [_0x2cab4c(0x12a)](_0x712e0c) {
        const _0x51e7a0 = _0x2cab4c;
        return $d()[_0x51e7a0(0x127)](this[_0x51e7a0(0x10f)], 'ms')[_0x51e7a0(0x129)](this['$l'])[_0x51e7a0(0x12b)](!_0x712e0c);
    }
    ['milliseconds']() {
        const _0x3f85da = _0x2cab4c;
        return this[_0x3f85da(0x126)](_0x3f85da(0x11f));
    }
    [_0x2cab4c(0x12c)]() {
        const _0x1b944d = _0x2cab4c;
        return this['as'](_0x1b944d(0x11f));
    }
    [_0x2cab4c(0x11d)]() {
        const _0xa0ef79 = _0x2cab4c;
        return this[_0xa0ef79(0x126)](_0xa0ef79(0x11d));
    }
    ['asSeconds']() {
        const _0x1be0b4 = _0x2cab4c;
        return this['as'](_0x1be0b4(0x11d));
    }
    [_0x2cab4c(0x11c)]() {
        const _0x2ae9dd = _0x2cab4c;
        return this[_0x2ae9dd(0x126)](_0x2ae9dd(0x11c));
    }
    ['asMinutes']() {
        const _0x22d269 = _0x2cab4c;
        return this['as'](_0x22d269(0x11c));
    }
    [_0x2cab4c(0x11b)]() {
        const _0x57bb21 = _0x2cab4c;
        return this[_0x57bb21(0x126)](_0x57bb21(0x11b));
    }
    ['asHours']() {
        const _0x465764 = _0x2cab4c;
        return this['as'](_0x465764(0x11b));
    }
    [_0x2cab4c(0x11a)]() {
        const _0x1b0d1a = _0x2cab4c;
        return this['get'](_0x1b0d1a(0x11a));
    }
    [_0x2cab4c(0x12d)]() {
        return this['as']('days');
    }
    [_0x2cab4c(0x121)]() {
        const _0x377f20 = _0x2cab4c;
        return this[_0x377f20(0x126)](_0x377f20(0x121));
    }
    [_0x2cab4c(0x12e)]() {
        const _0x3ae2e2 = _0x2cab4c;
        return this['as'](_0x3ae2e2(0x121));
    }
    [_0x2cab4c(0x119)]() {
        const _0x1ed8b1 = _0x2cab4c;
        return this[_0x1ed8b1(0x126)](_0x1ed8b1(0x119));
    }
    [_0x2cab4c(0x12f)]() {
        return this['as']('months');
    }
    ['years']() {
        const _0x137c9a = _0x2cab4c;
        return this[_0x137c9a(0x126)](_0x137c9a(0x118));
    }
    [_0x2cab4c(0x130)]() {
        const _0xce3dfc = _0x2cab4c;
        return this['as'](_0xce3dfc(0x118));
    }
}
export default (_0x5f5995, _0x4cdd7a, _0x58ae8e) => {
    const _0x1670b7 = _0x2cab4c;
    $d = _0x58ae8e, $u = _0x58ae8e()[_0x1670b7(0x131)](), _0x58ae8e[_0x1670b7(0x132)] = function (_0x37316b, _0xe9ea68) {
        const _0x12a3d8 = _0x58ae8e['locale']();
        return wrapper(_0x37316b, { '$l': _0x12a3d8 }, _0xe9ea68);
    }, _0x58ae8e[_0x1670b7(0x133)] = isDuration;
    const _0x39e972 = _0x4cdd7a[_0x1670b7(0x134)][_0x1670b7(0x127)], _0x281dee = _0x4cdd7a[_0x1670b7(0x134)]['subtract'];
    _0x4cdd7a['prototype']['add'] = function (_0x420683, _0x237f58) {
        const _0x542711 = _0x1670b7;
        if (isDuration(_0x420683))
            _0x420683 = _0x420683[_0x542711(0x12c)]();
        return _0x39e972[_0x542711(0x135)](this)(_0x420683, _0x237f58);
    }, _0x4cdd7a[_0x1670b7(0x134)][_0x1670b7(0x128)] = function (_0x55ce18, _0x3777ae) {
        const _0x2cf298 = _0x1670b7;
        if (isDuration(_0x55ce18))
            _0x55ce18 = _0x55ce18[_0x2cf298(0x12c)]();
        return _0x281dee[_0x2cf298(0x135)](this)(_0x55ce18, _0x3777ae);
    };
};
