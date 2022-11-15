import {
    MILLISECONDS_A_DAY,
    MILLISECONDS_A_HOUR,
    MILLISECONDS_A_MINUTE,
    MILLISECONDS_A_SECOND,
    MILLISECONDS_A_WEEK,
    REGEX_FORMAT
} from '../../constant';
const MILLISECONDS_A_YEAR = MILLISECONDS_A_DAY * (-0x1 * 0x164f + -0x134b + 0x2b07), MILLISECONDS_A_MONTH = MILLISECONDS_A_DAY * (-0x2121 * 0x1 + 0x1 * 0x4ee + 0x1c51), durationRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, unitToMS = {
        'years': MILLISECONDS_A_YEAR,
        'months': MILLISECONDS_A_MONTH,
        'days': MILLISECONDS_A_DAY,
        'hours': MILLISECONDS_A_HOUR,
        'minutes': MILLISECONDS_A_MINUTE,
        'seconds': MILLISECONDS_A_SECOND,
        'milliseconds': 0x1,
        'weeks': MILLISECONDS_A_WEEK
    }, isDuration = _0xa1a535 => _0xa1a535 instanceof Duration;
let $d, $u;
const wrapper = (_0x48615b, _0x56f689, _0x1625c6) => new Duration(_0x48615b, _0x1625c6, _0x56f689['$l']), prettyUnit = _0x23ba1d => $u['p'](_0x23ba1d) + 's', isNegative = _0xdca46b => _0xdca46b < -0x13d7 * 0x1 + 0x5 * 0x617 + -0xa9c, roundNumber = _0x4e6d3c => isNegative(_0x4e6d3c) ? Math['ceil'](_0x4e6d3c) : Math['floor'](_0x4e6d3c), absolute = _0x3c6ddb => Math['abs'](_0x3c6ddb), getNumberUnitFormat = (_0x5e2c3e, _0x3afb4b) => {
        if (!_0x5e2c3e)
            return {
                'negative': ![],
                'format': ''
            };
        if (isNegative(_0x5e2c3e))
            return {
                'negative': !![],
                'format': '' + absolute(_0x5e2c3e) + _0x3afb4b
            };
        return {
            'negative': ![],
            'format': '' + _0x5e2c3e + _0x3afb4b
        };
    };
class Duration {
    constructor(_0x92da02, _0x5795cb, _0x3a77c8) {
        this['$d'] = {}, this['$l'] = _0x3a77c8;
        _0x92da02 === undefined && (this['$ms'] = 0x18a5 + -0x29 * -0xd5 + -0x1 * 0x3ac2, this['parseFromMilliseconds']());
        if (_0x5795cb)
            return wrapper(_0x92da02 * unitToMS[prettyUnit(_0x5795cb)], this);
        if (typeof _0x92da02 === 'number')
            return this['$ms'] = _0x92da02, this['parseFromMilliseconds'](), this;
        if (typeof _0x92da02 === 'object')
            return Object['keys'](_0x92da02)['forEach'](_0x205ac8 => {
                this['$d'][prettyUnit(_0x205ac8)] = _0x92da02[_0x205ac8];
            }), this['calMilliseconds'](), this;
        if (typeof _0x92da02 === 'string') {
            const _0x435808 = _0x92da02['match'](durationRegex);
            if (_0x435808) {
                const _0x2aff34 = _0x435808['slice'](0x8d * -0x3f + 0xc6c + -0x23 * -0xa3), _0x5283df = _0x2aff34['map'](_0x575071 => Number(_0x575071));
                return [this['$d']['years'], this['$d']['months'], this['$d']['weeks'], this['$d']['days'], this['$d']['hours'], this['$d']['minutes'], this['$d']['seconds']] = _0x5283df, this['calMilliseconds'](), this;
            }
        }
        return this;
    }
    ['calMilliseconds']() {
        this['$ms'] = Object['keys'](this['$d'])['reduce']((_0x4599bd, _0x53bb7e) => _0x4599bd + (this['$d'][_0x53bb7e] || -0x69c + 0x7d * -0x6 + 0x98a) * unitToMS[_0x53bb7e], 0x4c6 + 0x3 * 0x87b + -0x77 * 0x41);
    }
    ['parseFromMilliseconds']() {
        let {$ms: _0x1e310d} = this;
        this['$d']['years'] = roundNumber(_0x1e310d / MILLISECONDS_A_YEAR), _0x1e310d %= MILLISECONDS_A_YEAR, this['$d']['months'] = roundNumber(_0x1e310d / MILLISECONDS_A_MONTH), _0x1e310d %= MILLISECONDS_A_MONTH, this['$d']['days'] = roundNumber(_0x1e310d / MILLISECONDS_A_DAY), _0x1e310d %= MILLISECONDS_A_DAY, this['$d']['hours'] = roundNumber(_0x1e310d / MILLISECONDS_A_HOUR), _0x1e310d %= MILLISECONDS_A_HOUR, this['$d']['minutes'] = roundNumber(_0x1e310d / MILLISECONDS_A_MINUTE), _0x1e310d %= MILLISECONDS_A_MINUTE, this['$d']['seconds'] = roundNumber(_0x1e310d / MILLISECONDS_A_SECOND), _0x1e310d %= MILLISECONDS_A_SECOND, this['$d']['milliseconds'] = _0x1e310d;
    }
    ['toISOString']() {
        const _0x3884ad = getNumberUnitFormat(this['$d']['years'], 'Y'), _0x4f1365 = getNumberUnitFormat(this['$d']['months'], 'M');
        let _0x4bfee5 = +this['$d']['days'] || 0x20 + -0x26ce + 0x26ae * 0x1;
        this['$d']['weeks'] && (_0x4bfee5 += this['$d']['weeks'] * (0x1 * 0x15eb + 0x97c * -0x3 + -0xd2 * -0x8));
        const _0x501bb9 = getNumberUnitFormat(_0x4bfee5, 'D'), _0x504ab8 = getNumberUnitFormat(this['$d']['hours'], 'H'), _0x49665d = getNumberUnitFormat(this['$d']['minutes'], 'M');
        let _0x173316 = this['$d']['seconds'] || -0x1 * -0x2237 + 0x12 * 0x33 + 0x1 * -0x25cd;
        this['$d']['milliseconds'] && (_0x173316 += this['$d']['milliseconds'] / (0xbf * 0x2 + 0x26ee + -0x39 * 0xa4));
        const _0x4d4f9f = getNumberUnitFormat(_0x173316, 'S'), _0x3e3cb8 = _0x3884ad['negative'] || _0x4f1365['negative'] || _0x501bb9['negative'] || _0x504ab8['negative'] || _0x49665d['negative'] || _0x4d4f9f['negative'], _0x532391 = _0x504ab8['format'] || _0x49665d['format'] || _0x4d4f9f['format'] ? 'T' : '', _0x4e4dd6 = _0x3e3cb8 ? '-' : '', _0x52adb7 = _0x4e4dd6 + 'P' + _0x3884ad['format'] + _0x4f1365['format'] + _0x501bb9['format'] + _0x532391 + _0x504ab8['format'] + _0x49665d['format'] + _0x4d4f9f['format'];
        return _0x52adb7 === 'P' || _0x52adb7 === '-P' ? 'P0D' : _0x52adb7;
    }
    ['toJSON']() {
        return this['toISOString']();
    }
    ['format'](_0x3f45d4) {
        const _0x270c45 = _0x3f45d4 || 'YYYY-MM-DDTHH:mm:ss', _0x4807a6 = {
                'Y': this['$d']['years'],
                'YY': $u['s'](this['$d']['years'], -0x1 * -0x70b + -0x993 + -0x82 * -0x5, '0'),
                'YYYY': $u['s'](this['$d']['years'], 0xb * -0x1 + 0x2d + -0x1e, '0'),
                'M': this['$d']['months'],
                'MM': $u['s'](this['$d']['months'], -0xa5e + 0xf6f + -0x23 * 0x25, '0'),
                'D': this['$d']['days'],
                'DD': $u['s'](this['$d']['days'], 0xc4c + 0x1e71 + 0x1 * -0x2abb, '0'),
                'H': this['$d']['hours'],
                'HH': $u['s'](this['$d']['hours'], -0x1a2 * -0x11 + 0xbc3 + 0x7 * -0x5a5, '0'),
                'm': this['$d']['minutes'],
                'mm': $u['s'](this['$d']['minutes'], -0x1 * -0x5a7 + 0x96 * 0x37 + 0x1 * -0x25df, '0'),
                's': this['$d']['seconds'],
                'ss': $u['s'](this['$d']['seconds'], 0x77a * 0x5 + -0xd2d + -0x811 * 0x3, '0'),
                'SSS': $u['s'](this['$d']['milliseconds'], -0x7 * -0x1ba + 0x1be + -0xdd1, '0')
            };
        return _0x270c45['replace'](REGEX_FORMAT, (_0x3c2554, _0x5da24c) => _0x5da24c || String(_0x4807a6[_0x3c2554]));
    }
    ['as'](_0xc83dd5) {
        return this['$ms'] / unitToMS[prettyUnit(_0xc83dd5)];
    }
    ['get'](_0x4abdb4) {
        let _0x345413 = this['$ms'];
        const _0x2bfbdc = prettyUnit(_0x4abdb4);
        if (_0x2bfbdc === 'milliseconds')
            _0x345413 %= -0x13dc + 0x1b67 + 0x13 * -0x31;
        else
            _0x2bfbdc === 'weeks' ? _0x345413 = roundNumber(_0x345413 / unitToMS[_0x2bfbdc]) : _0x345413 = this['$d'][_0x2bfbdc];
        return _0x345413 === 0x2e5 + -0x17ea * -0x1 + -0x1acf ? 0x1 * 0x18b7 + 0x2 * 0xdfd + 0x2f * -0x11f : _0x345413;
    }
    ['add'](_0x4ab4ae, _0x3e20e0, _0x36c7c4) {
        let _0x473796;
        if (_0x3e20e0)
            _0x473796 = _0x4ab4ae * unitToMS[prettyUnit(_0x3e20e0)];
        else
            isDuration(_0x4ab4ae) ? _0x473796 = _0x4ab4ae['$ms'] : _0x473796 = wrapper(_0x4ab4ae, this)['$ms'];
        return wrapper(this['$ms'] + _0x473796 * (_0x36c7c4 ? -(0x9c5 + -0x1914 + 0xf50) : -0x4 * 0x56d + 0x5 * 0x593 + 0x6 * -0x107), this);
    }
    ['subtract'](_0x117aa8, _0x13d6a2) {
        return this['add'](_0x117aa8, _0x13d6a2, !![]);
    }
    ['locale'](_0x273faa) {
        const _0x12b656 = this['clone']();
        return _0x12b656['$l'] = _0x273faa, _0x12b656;
    }
    ['clone']() {
        return wrapper(this['$ms'], this);
    }
    ['humanize'](_0x2b2b50) {
        return $d()['add'](this['$ms'], 'ms')['locale'](this['$l'])['fromNow'](!_0x2b2b50);
    }
    ['milliseconds']() {
        return this['get']('milliseconds');
    }
    ['asMilliseconds']() {
        return this['as']('milliseconds');
    }
    ['seconds']() {
        return this['get']('seconds');
    }
    ['asSeconds']() {
        return this['as']('seconds');
    }
    ['minutes']() {
        return this['get']('minutes');
    }
    ['asMinutes']() {
        return this['as']('minutes');
    }
    ['hours']() {
        return this['get']('hours');
    }
    ['asHours']() {
        return this['as']('hours');
    }
    ['days']() {
        return this['get']('days');
    }
    ['asDays']() {
        return this['as']('days');
    }
    ['weeks']() {
        return this['get']('weeks');
    }
    ['asWeeks']() {
        return this['as']('weeks');
    }
    ['months']() {
        return this['get']('months');
    }
    ['asMonths']() {
        return this['as']('months');
    }
    ['years']() {
        return this['get']('years');
    }
    ['asYears']() {
        return this['as']('years');
    }
}
export default (_0x48f678, _0xf51fe8, _0x426bbe) => {
    $d = _0x426bbe, $u = _0x426bbe()['$utils'](), _0x426bbe['duration'] = function (_0x60171e, _0x198d85) {
        const _0x2ebb90 = _0x426bbe['locale']();
        return wrapper(_0x60171e, { '$l': _0x2ebb90 }, _0x198d85);
    }, _0x426bbe['isDuration'] = isDuration;
    const _0x328e32 = _0xf51fe8['prototype']['add'], _0x3e761a = _0xf51fe8['prototype']['subtract'];
    _0xf51fe8['prototype']['add'] = function (_0x688d6d, _0x3dc71b) {
        if (isDuration(_0x688d6d))
            _0x688d6d = _0x688d6d['asMilliseconds']();
        return _0x328e32['bind'](this)(_0x688d6d, _0x3dc71b);
    }, _0xf51fe8['prototype']['subtract'] = function (_0x1cbfc1, _0x2f4554) {
        if (isDuration(_0x1cbfc1))
            _0x1cbfc1 = _0x1cbfc1['asMilliseconds']();
        return _0x3e761a['bind'](this)(_0x1cbfc1, _0x2f4554);
    };
};
