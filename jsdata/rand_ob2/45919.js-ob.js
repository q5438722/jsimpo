const _0x4000 = [
    'minutes',
    'seconds',
    'reduce',
    'days',
    'milliseconds',
    'negative',
    'format',
    'P0D',
    'toJSON',
    'toISOString',
    'YYYY-MM-DDTHH:mm:ss',
    'replace',
    'get',
    'add',
    'locale',
    'clone',
    'humanize',
    'fromNow',
    'asHours',
    'asMonths',
    'asYears',
    '$utils',
    'duration',
    'prototype',
    'subtract',
    'asMilliseconds',
    'bind',
    '1122862weundT',
    '184257EWPYwn',
    '1neCBSC',
    '2LYydpv',
    '260042RGhkdA',
    '1288111FpxXog',
    '2789ijnTKW',
    '493zBTuWG',
    '844928QEMtyY',
    '4399162IFaxPL',
    'ceil',
    'floor',
    'abs',
    '$ms',
    'parseFromMilliseconds',
    'number',
    'object',
    'keys',
    'forEach',
    'calMilliseconds',
    'slice',
    'map',
    'years',
    'months',
    'weeks',
    'hours'
];
const _0x2cdf9b = _0x3294;
(function (_0x3378c8, _0x179a6d) {
    const _0x56fd57 = _0x3294;
    while (!![]) {
        try {
            const _0xb04e08 = -parseInt(_0x56fd57(0x1d3)) + parseInt(_0x56fd57(0x1d4)) * -parseInt(_0x56fd57(0x1d5)) + parseInt(_0x56fd57(0x1d6)) * -parseInt(_0x56fd57(0x1d7)) + -parseInt(_0x56fd57(0x1d8)) + parseInt(_0x56fd57(0x1d9)) * -parseInt(_0x56fd57(0x1da)) + parseInt(_0x56fd57(0x1db)) + parseInt(_0x56fd57(0x1dc));
            if (_0xb04e08 === _0x179a6d)
                break;
            else
                _0x3378c8['push'](_0x3378c8['shift']());
        } catch (_0x473958) {
            _0x3378c8['push'](_0x3378c8['shift']());
        }
    }
}(_0x4000, 0xb8087));
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
    }, isDuration = _0x428670 => _0x428670 instanceof Duration;
let $d, $u;
const wrapper = (_0x572403, _0x353ff0, _0x4d2fb0) => new Duration(_0x572403, _0x4d2fb0, _0x353ff0['$l']), prettyUnit = _0x14ff97 => $u['p'](_0x14ff97) + 's', isNegative = _0x165e0a => _0x165e0a < 0x0, roundNumber = _0xaccd3b => isNegative(_0xaccd3b) ? Math[_0x2cdf9b(0x1dd)](_0xaccd3b) : Math[_0x2cdf9b(0x1de)](_0xaccd3b), absolute = _0x53f1c5 => Math[_0x2cdf9b(0x1df)](_0x53f1c5), getNumberUnitFormat = (_0x4d00c4, _0x13152d) => {
        if (!_0x4d00c4)
            return {
                'negative': ![],
                'format': ''
            };
        if (isNegative(_0x4d00c4))
            return {
                'negative': !![],
                'format': '' + absolute(_0x4d00c4) + _0x13152d
            };
        return {
            'negative': ![],
            'format': '' + _0x4d00c4 + _0x13152d
        };
    };
class Duration {
    constructor(_0x8f60e5, _0x31c9ec, _0x2712e0) {
        const _0x2d45d8 = _0x2cdf9b;
        this['$d'] = {}, this['$l'] = _0x2712e0;
        _0x8f60e5 === undefined && (this[_0x2d45d8(0x1e0)] = 0x0, this[_0x2d45d8(0x1e1)]());
        if (_0x31c9ec)
            return wrapper(_0x8f60e5 * unitToMS[prettyUnit(_0x31c9ec)], this);
        if (typeof _0x8f60e5 === _0x2d45d8(0x1e2))
            return this[_0x2d45d8(0x1e0)] = _0x8f60e5, this[_0x2d45d8(0x1e1)](), this;
        if (typeof _0x8f60e5 === _0x2d45d8(0x1e3))
            return Object[_0x2d45d8(0x1e4)](_0x8f60e5)[_0x2d45d8(0x1e5)](_0x5a717b => {
                this['$d'][prettyUnit(_0x5a717b)] = _0x8f60e5[_0x5a717b];
            }), this[_0x2d45d8(0x1e6)](), this;
        if (typeof _0x8f60e5 === 'string') {
            const _0x174161 = _0x8f60e5['match'](durationRegex);
            if (_0x174161) {
                const _0x158533 = _0x174161[_0x2d45d8(0x1e7)](0x2), _0x3005eb = _0x158533[_0x2d45d8(0x1e8)](_0x18c614 => Number(_0x18c614));
                return [this['$d'][_0x2d45d8(0x1e9)], this['$d'][_0x2d45d8(0x1ea)], this['$d'][_0x2d45d8(0x1eb)], this['$d']['days'], this['$d'][_0x2d45d8(0x1ec)], this['$d'][_0x2d45d8(0x1ed)], this['$d'][_0x2d45d8(0x1ee)]] = _0x3005eb, this[_0x2d45d8(0x1e6)](), this;
            }
        }
        return this;
    }
    [_0x2cdf9b(0x1e6)]() {
        const _0x121c51 = _0x2cdf9b;
        this[_0x121c51(0x1e0)] = Object[_0x121c51(0x1e4)](this['$d'])[_0x121c51(0x1ef)]((_0x3e70f5, _0x3dbc73) => _0x3e70f5 + (this['$d'][_0x3dbc73] || 0x0) * unitToMS[_0x3dbc73], 0x0);
    }
    [_0x2cdf9b(0x1e1)]() {
        const _0x1cd0c2 = _0x2cdf9b;
        let {$ms: _0x4e01b1} = this;
        this['$d'][_0x1cd0c2(0x1e9)] = roundNumber(_0x4e01b1 / MILLISECONDS_A_YEAR), _0x4e01b1 %= MILLISECONDS_A_YEAR, this['$d'][_0x1cd0c2(0x1ea)] = roundNumber(_0x4e01b1 / MILLISECONDS_A_MONTH), _0x4e01b1 %= MILLISECONDS_A_MONTH, this['$d'][_0x1cd0c2(0x1f0)] = roundNumber(_0x4e01b1 / MILLISECONDS_A_DAY), _0x4e01b1 %= MILLISECONDS_A_DAY, this['$d'][_0x1cd0c2(0x1ec)] = roundNumber(_0x4e01b1 / MILLISECONDS_A_HOUR), _0x4e01b1 %= MILLISECONDS_A_HOUR, this['$d'][_0x1cd0c2(0x1ed)] = roundNumber(_0x4e01b1 / MILLISECONDS_A_MINUTE), _0x4e01b1 %= MILLISECONDS_A_MINUTE, this['$d'][_0x1cd0c2(0x1ee)] = roundNumber(_0x4e01b1 / MILLISECONDS_A_SECOND), _0x4e01b1 %= MILLISECONDS_A_SECOND, this['$d']['milliseconds'] = _0x4e01b1;
    }
    ['toISOString']() {
        const _0x20781a = _0x2cdf9b, _0x50489e = getNumberUnitFormat(this['$d'][_0x20781a(0x1e9)], 'Y'), _0x44a80b = getNumberUnitFormat(this['$d'][_0x20781a(0x1ea)], 'M');
        let _0x309e7e = +this['$d']['days'] || 0x0;
        this['$d'][_0x20781a(0x1eb)] && (_0x309e7e += this['$d'][_0x20781a(0x1eb)] * 0x7);
        const _0x337dc9 = getNumberUnitFormat(_0x309e7e, 'D'), _0x3dcf9c = getNumberUnitFormat(this['$d'][_0x20781a(0x1ec)], 'H'), _0x4a81a0 = getNumberUnitFormat(this['$d']['minutes'], 'M');
        let _0x59c57d = this['$d'][_0x20781a(0x1ee)] || 0x0;
        this['$d'][_0x20781a(0x1f1)] && (_0x59c57d += this['$d'][_0x20781a(0x1f1)] / 0x3e8);
        const _0x18a86a = getNumberUnitFormat(_0x59c57d, 'S'), _0x1a4770 = _0x50489e[_0x20781a(0x1f2)] || _0x44a80b['negative'] || _0x337dc9[_0x20781a(0x1f2)] || _0x3dcf9c['negative'] || _0x4a81a0[_0x20781a(0x1f2)] || _0x18a86a[_0x20781a(0x1f2)], _0x2b9fb4 = _0x3dcf9c[_0x20781a(0x1f3)] || _0x4a81a0[_0x20781a(0x1f3)] || _0x18a86a['format'] ? 'T' : '', _0x16ece1 = _0x1a4770 ? '-' : '', _0x85d935 = _0x16ece1 + 'P' + _0x50489e['format'] + _0x44a80b[_0x20781a(0x1f3)] + _0x337dc9[_0x20781a(0x1f3)] + _0x2b9fb4 + _0x3dcf9c[_0x20781a(0x1f3)] + _0x4a81a0[_0x20781a(0x1f3)] + _0x18a86a[_0x20781a(0x1f3)];
        return _0x85d935 === 'P' || _0x85d935 === '-P' ? _0x20781a(0x1f4) : _0x85d935;
    }
    [_0x2cdf9b(0x1f5)]() {
        const _0x1e5a38 = _0x2cdf9b;
        return this[_0x1e5a38(0x1f6)]();
    }
    [_0x2cdf9b(0x1f3)](_0x432d76) {
        const _0x506e0a = _0x2cdf9b, _0x11242e = _0x432d76 || _0x506e0a(0x1f7), _0x269a07 = {
                'Y': this['$d'][_0x506e0a(0x1e9)],
                'YY': $u['s'](this['$d'][_0x506e0a(0x1e9)], 0x2, '0'),
                'YYYY': $u['s'](this['$d'][_0x506e0a(0x1e9)], 0x4, '0'),
                'M': this['$d']['months'],
                'MM': $u['s'](this['$d']['months'], 0x2, '0'),
                'D': this['$d'][_0x506e0a(0x1f0)],
                'DD': $u['s'](this['$d'][_0x506e0a(0x1f0)], 0x2, '0'),
                'H': this['$d']['hours'],
                'HH': $u['s'](this['$d'][_0x506e0a(0x1ec)], 0x2, '0'),
                'm': this['$d'][_0x506e0a(0x1ed)],
                'mm': $u['s'](this['$d'][_0x506e0a(0x1ed)], 0x2, '0'),
                's': this['$d'][_0x506e0a(0x1ee)],
                'ss': $u['s'](this['$d']['seconds'], 0x2, '0'),
                'SSS': $u['s'](this['$d'][_0x506e0a(0x1f1)], 0x3, '0')
            };
        return _0x11242e[_0x506e0a(0x1f8)](REGEX_FORMAT, (_0x50e3c2, _0x4f9984) => _0x4f9984 || String(_0x269a07[_0x50e3c2]));
    }
    ['as'](_0x5b337b) {
        return this['$ms'] / unitToMS[prettyUnit(_0x5b337b)];
    }
    [_0x2cdf9b(0x1f9)](_0x7cf09) {
        const _0x177dad = _0x2cdf9b;
        let _0x49e3b6 = this[_0x177dad(0x1e0)];
        const _0x580d7e = prettyUnit(_0x7cf09);
        if (_0x580d7e === _0x177dad(0x1f1))
            _0x49e3b6 %= 0x3e8;
        else
            _0x580d7e === _0x177dad(0x1eb) ? _0x49e3b6 = roundNumber(_0x49e3b6 / unitToMS[_0x580d7e]) : _0x49e3b6 = this['$d'][_0x580d7e];
        return _0x49e3b6 === 0x0 ? 0x0 : _0x49e3b6;
    }
    [_0x2cdf9b(0x1fa)](_0x428f78, _0x188383, _0x16796e) {
        const _0x1cb2d2 = _0x2cdf9b;
        let _0x4d3ab5;
        if (_0x188383)
            _0x4d3ab5 = _0x428f78 * unitToMS[prettyUnit(_0x188383)];
        else
            isDuration(_0x428f78) ? _0x4d3ab5 = _0x428f78[_0x1cb2d2(0x1e0)] : _0x4d3ab5 = wrapper(_0x428f78, this)[_0x1cb2d2(0x1e0)];
        return wrapper(this[_0x1cb2d2(0x1e0)] + _0x4d3ab5 * (_0x16796e ? -0x1 : 0x1), this);
    }
    ['subtract'](_0x55f228, _0x366c13) {
        const _0x26de3b = _0x2cdf9b;
        return this[_0x26de3b(0x1fa)](_0x55f228, _0x366c13, !![]);
    }
    [_0x2cdf9b(0x1fb)](_0x20ede6) {
        const _0x13042d = _0x2cdf9b, _0xa91554 = this[_0x13042d(0x1fc)]();
        return _0xa91554['$l'] = _0x20ede6, _0xa91554;
    }
    [_0x2cdf9b(0x1fc)]() {
        const _0x162a48 = _0x2cdf9b;
        return wrapper(this[_0x162a48(0x1e0)], this);
    }
    [_0x2cdf9b(0x1fd)](_0x49a102) {
        const _0x2fc23b = _0x2cdf9b;
        return $d()[_0x2fc23b(0x1fa)](this[_0x2fc23b(0x1e0)], 'ms')[_0x2fc23b(0x1fb)](this['$l'])[_0x2fc23b(0x1fe)](!_0x49a102);
    }
    ['milliseconds']() {
        const _0x1caa19 = _0x2cdf9b;
        return this[_0x1caa19(0x1f9)](_0x1caa19(0x1f1));
    }
    ['asMilliseconds']() {
        return this['as']('milliseconds');
    }
    [_0x2cdf9b(0x1ee)]() {
        const _0x396e84 = _0x2cdf9b;
        return this[_0x396e84(0x1f9)]('seconds');
    }
    ['asSeconds']() {
        const _0x188c61 = _0x2cdf9b;
        return this['as'](_0x188c61(0x1ee));
    }
    ['minutes']() {
        const _0x1bbce5 = _0x2cdf9b;
        return this[_0x1bbce5(0x1f9)](_0x1bbce5(0x1ed));
    }
    ['asMinutes']() {
        const _0x38566c = _0x2cdf9b;
        return this['as'](_0x38566c(0x1ed));
    }
    ['hours']() {
        const _0x189d58 = _0x2cdf9b;
        return this['get'](_0x189d58(0x1ec));
    }
    [_0x2cdf9b(0x1ff)]() {
        const _0x2f2145 = _0x2cdf9b;
        return this['as'](_0x2f2145(0x1ec));
    }
    [_0x2cdf9b(0x1f0)]() {
        const _0x312a30 = _0x2cdf9b;
        return this[_0x312a30(0x1f9)](_0x312a30(0x1f0));
    }
    ['asDays']() {
        const _0x1979ed = _0x2cdf9b;
        return this['as'](_0x1979ed(0x1f0));
    }
    [_0x2cdf9b(0x1eb)]() {
        const _0x3eebac = _0x2cdf9b;
        return this[_0x3eebac(0x1f9)](_0x3eebac(0x1eb));
    }
    ['asWeeks']() {
        const _0x511f8a = _0x2cdf9b;
        return this['as'](_0x511f8a(0x1eb));
    }
    [_0x2cdf9b(0x1ea)]() {
        const _0xc6033f = _0x2cdf9b;
        return this[_0xc6033f(0x1f9)](_0xc6033f(0x1ea));
    }
    [_0x2cdf9b(0x200)]() {
        const _0x4d91f3 = _0x2cdf9b;
        return this['as'](_0x4d91f3(0x1ea));
    }
    [_0x2cdf9b(0x1e9)]() {
        const _0x7612cc = _0x2cdf9b;
        return this[_0x7612cc(0x1f9)]('years');
    }
    [_0x2cdf9b(0x201)]() {
        const _0x1dfecb = _0x2cdf9b;
        return this['as'](_0x1dfecb(0x1e9));
    }
}
function _0x3294(_0x5453c8, _0x2595f7) {
    return _0x3294 = function (_0x40006b, _0x329498) {
        _0x40006b = _0x40006b - 0x1d3;
        let _0x211e12 = _0x4000[_0x40006b];
        return _0x211e12;
    }, _0x3294(_0x5453c8, _0x2595f7);
}
export default (_0x519f3b, _0x8f26b, _0x1fdc49) => {
    const _0x5c237d = _0x2cdf9b;
    $d = _0x1fdc49, $u = _0x1fdc49()[_0x5c237d(0x202)](), _0x1fdc49[_0x5c237d(0x203)] = function (_0x1c4478, _0x1de102) {
        const _0x4e78dd = _0x5c237d, _0x210a63 = _0x1fdc49[_0x4e78dd(0x1fb)]();
        return wrapper(_0x1c4478, { '$l': _0x210a63 }, _0x1de102);
    }, _0x1fdc49['isDuration'] = isDuration;
    const _0x626852 = _0x8f26b[_0x5c237d(0x204)]['add'], _0x21a805 = _0x8f26b[_0x5c237d(0x204)][_0x5c237d(0x205)];
    _0x8f26b[_0x5c237d(0x204)]['add'] = function (_0x41e38d, _0x4b57c4) {
        const _0x4dc9c6 = _0x5c237d;
        if (isDuration(_0x41e38d))
            _0x41e38d = _0x41e38d[_0x4dc9c6(0x206)]();
        return _0x626852[_0x4dc9c6(0x207)](this)(_0x41e38d, _0x4b57c4);
    }, _0x8f26b[_0x5c237d(0x204)][_0x5c237d(0x205)] = function (_0x12568b, _0xaf9e2e) {
        const _0x411fd1 = _0x5c237d;
        if (isDuration(_0x12568b))
            _0x12568b = _0x12568b['asMilliseconds']();
        return _0x21a805[_0x411fd1(0x207)](this)(_0x12568b, _0xaf9e2e);
    };
};
