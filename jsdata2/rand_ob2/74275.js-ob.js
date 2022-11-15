var _0x5b46 = [
    'a\x20few\x20seconds',
    '%d\x20seconds',
    'a\x20minute',
    '%d\x20minutes',
    '%d\x20hours',
    'a\x20day',
    '%d\x20days',
    'a\x20month',
    '%d\x20months',
    '%d\x20years',
    '509841MLfJUX',
    '33998OetpdI',
    '10QJSUqr',
    '427009MOCkqr',
    '1truErc',
    '58IuwOev',
    '943vNbodt',
    '1lVcRrq',
    '161474GDyjhu',
    '76427upSAyO',
    '3PIIMfA',
    '1206252uXvtML',
    'defineLocale',
    'January_February_March_April_May_June_July_August_September_October_November_December',
    'split',
    'Sun_Mon_Tue_Wed_Thu_Fri_Sat',
    'Su_Mo_Tu_We_Th_Fr_Sa',
    'HH:mm',
    'HH:mm:ss',
    'DD/MM/YYYY',
    'D\x20MMMM\x20YYYY',
    'D\x20MMMM\x20YYYY\x20HH:mm',
    'dddd,\x20D\x20MMMM\x20YYYY\x20HH:mm',
    '[Today\x20at]\x20LT',
    'dddd\x20[at]\x20LT',
    '[Yesterday\x20at]\x20LT',
    '[Last]\x20dddd\x20[at]\x20LT'
];
var _0x1b1952 = _0x12b1;
(function (_0x351f32, _0x3da5ee) {
    var _0x18cf30 = _0x12b1;
    while (!![]) {
        try {
            var _0x5e50fd = -parseInt(_0x18cf30(0x1e7)) + -parseInt(_0x18cf30(0x1e8)) * parseInt(_0x18cf30(0x1e9)) + -parseInt(_0x18cf30(0x1ea)) * parseInt(_0x18cf30(0x1eb)) + -parseInt(_0x18cf30(0x1ec)) * parseInt(_0x18cf30(0x1ed)) + -parseInt(_0x18cf30(0x1ee)) * -parseInt(_0x18cf30(0x1ef)) + parseInt(_0x18cf30(0x1f0)) * parseInt(_0x18cf30(0x1f1)) + parseInt(_0x18cf30(0x1f2));
            if (_0x5e50fd === _0x3da5ee)
                break;
            else
                _0x351f32['push'](_0x351f32['shift']());
        } catch (_0x5536f0) {
            _0x351f32['push'](_0x351f32['shift']());
        }
    }
}(_0x5b46, 0x40d0b));
function _0x12b1(_0xae312, _0x466102) {
    return _0x12b1 = function (_0x5b46ef, _0x12b12e) {
        _0x5b46ef = _0x5b46ef - 0x1e7;
        var _0x312245 = _0x5b46[_0x5b46ef];
        return _0x312245;
    }, _0x12b1(_0xae312, _0x466102);
}
import _0x32fbb9 from '../moment';
export default _0x32fbb9[_0x1b1952(0x1f3)]('en-il', {
    'months': _0x1b1952(0x1f4)[_0x1b1952(0x1f5)]('_'),
    'monthsShort': 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'['split']('_'),
    'weekdays': 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'[_0x1b1952(0x1f5)]('_'),
    'weekdaysShort': _0x1b1952(0x1f6)[_0x1b1952(0x1f5)]('_'),
    'weekdaysMin': _0x1b1952(0x1f7)[_0x1b1952(0x1f5)]('_'),
    'longDateFormat': {
        'LT': _0x1b1952(0x1f8),
        'LTS': _0x1b1952(0x1f9),
        'L': _0x1b1952(0x1fa),
        'LL': _0x1b1952(0x1fb),
        'LLL': _0x1b1952(0x1fc),
        'LLLL': _0x1b1952(0x1fd)
    },
    'calendar': {
        'sameDay': _0x1b1952(0x1fe),
        'nextDay': '[Tomorrow\x20at]\x20LT',
        'nextWeek': _0x1b1952(0x1ff),
        'lastDay': _0x1b1952(0x200),
        'lastWeek': _0x1b1952(0x201),
        'sameElse': 'L'
    },
    'relativeTime': {
        'future': 'in\x20%s',
        'past': '%s\x20ago',
        's': _0x1b1952(0x202),
        'ss': _0x1b1952(0x203),
        'm': _0x1b1952(0x204),
        'mm': _0x1b1952(0x205),
        'h': 'an\x20hour',
        'hh': _0x1b1952(0x206),
        'd': _0x1b1952(0x207),
        'dd': _0x1b1952(0x208),
        'M': _0x1b1952(0x209),
        'MM': _0x1b1952(0x20a),
        'y': 'a\x20year',
        'yy': _0x1b1952(0x20b)
    },
    'dayOfMonthOrdinalParse': /\d{1,2}(st|nd|rd|th)/,
    'ordinal': function (_0x34ead4) {
        var _0x2b086e = _0x34ead4 % 0xa, _0x1cf545 = ~~(_0x34ead4 % 0x64 / 0xa) === 0x1 ? 'th' : _0x2b086e === 0x1 ? 'st' : _0x2b086e === 0x2 ? 'nd' : _0x2b086e === 0x3 ? 'rd' : 'th';
        return _0x34ead4 + _0x1cf545;
    }
});
