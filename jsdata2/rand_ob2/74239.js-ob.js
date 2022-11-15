var _0x10ae = [
    '1229814trnzPc',
    '586585MlaiVt',
    '989149GJOTCC',
    '174859pIAwvx',
    '2152443KyoYix',
    'split',
    'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์',
    'อา._จ._อ._พ._พฤ._ศ._ส.',
    'DD/MM/YYYY',
    'D\x20MMMM\x20YYYY',
    'D\x20MMMM\x20YYYY\x20เวลา\x20H:mm',
    'วันddddที่\x20D\x20MMMM\x20YYYY\x20เวลา\x20H:mm',
    'หลังเที่ยง',
    'ก่อนเที่ยง',
    '[พรุ่งนี้\x20เวลา]\x20LT',
    'dddd[หน้า\x20เวลา]\x20LT',
    '[วัน]dddd[ที่แล้ว\x20เวลา]\x20LT',
    'อีก\x20%s',
    '%sที่แล้ว',
    'ไม่กี่วินาที',
    '%d\x20วินาที',
    '1\x20นาที',
    '%d\x20นาที',
    '1\x20ชั่วโมง',
    '%d\x20ชั่วโมง',
    '%d\x20วัน',
    '%d\x20สัปดาห์',
    '1\x20เดือน',
    '%d\x20เดือน',
    '1\x20ปี',
    '%d\x20ปี',
    '769127JFjZJJ',
    '737544JvGJmp'
];
function _0x6b77(_0x4693e1, _0x2b45c4) {
    return _0x6b77 = function (_0x10aed5, _0x6b77a2) {
        _0x10aed5 = _0x10aed5 - 0x19c;
        var _0x7ccda6 = _0x10ae[_0x10aed5];
        return _0x7ccda6;
    }, _0x6b77(_0x4693e1, _0x2b45c4);
}
var _0x4267b1 = _0x6b77;
(function (_0x3f20e1, _0x399101) {
    var _0x22409c = _0x6b77;
    while (!![]) {
        try {
            var _0x2b4d6c = parseInt(_0x22409c(0x19c)) + parseInt(_0x22409c(0x19d)) + -parseInt(_0x22409c(0x19e)) + -parseInt(_0x22409c(0x19f)) + -parseInt(_0x22409c(0x1a0)) + -parseInt(_0x22409c(0x1a1)) + parseInt(_0x22409c(0x1a2));
            if (_0x2b4d6c === _0x399101)
                break;
            else
                _0x3f20e1['push'](_0x3f20e1['shift']());
        } catch (_0x13916d) {
            _0x3f20e1['push'](_0x3f20e1['shift']());
        }
    }
}(_0x10ae, 0xa5b33));
import _0x2d1062 from '../moment';
export default _0x2d1062['defineLocale']('th', {
    'months': 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'['split']('_'),
    'monthsShort': 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'[_0x4267b1(0x1a3)]('_'),
    'monthsParseExact': !![],
    'weekdays': 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'[_0x4267b1(0x1a3)]('_'),
    'weekdaysShort': _0x4267b1(0x1a4)[_0x4267b1(0x1a3)]('_'),
    'weekdaysMin': _0x4267b1(0x1a5)['split']('_'),
    'weekdaysParseExact': !![],
    'longDateFormat': {
        'LT': 'H:mm',
        'LTS': 'H:mm:ss',
        'L': _0x4267b1(0x1a6),
        'LL': _0x4267b1(0x1a7),
        'LLL': _0x4267b1(0x1a8),
        'LLLL': _0x4267b1(0x1a9)
    },
    'meridiemParse': /ก่อนเที่ยง|หลังเที่ยง/,
    'isPM': function (_0x32ab04) {
        var _0x46a6f8 = _0x4267b1;
        return _0x32ab04 === _0x46a6f8(0x1aa);
    },
    'meridiem': function (_0x3f995c, _0x2c665d, _0x52b539) {
        var _0x330ed5 = _0x4267b1;
        return _0x3f995c < 0xc ? _0x330ed5(0x1ab) : _0x330ed5(0x1aa);
    },
    'calendar': {
        'sameDay': '[วันนี้\x20เวลา]\x20LT',
        'nextDay': _0x4267b1(0x1ac),
        'nextWeek': _0x4267b1(0x1ad),
        'lastDay': '[เมื่อวานนี้\x20เวลา]\x20LT',
        'lastWeek': _0x4267b1(0x1ae),
        'sameElse': 'L'
    },
    'relativeTime': {
        'future': _0x4267b1(0x1af),
        'past': _0x4267b1(0x1b0),
        's': _0x4267b1(0x1b1),
        'ss': _0x4267b1(0x1b2),
        'm': _0x4267b1(0x1b3),
        'mm': _0x4267b1(0x1b4),
        'h': _0x4267b1(0x1b5),
        'hh': _0x4267b1(0x1b6),
        'd': '1\x20วัน',
        'dd': _0x4267b1(0x1b7),
        'w': '1\x20สัปดาห์',
        'ww': _0x4267b1(0x1b8),
        'M': _0x4267b1(0x1b9),
        'MM': _0x4267b1(0x1ba),
        'y': _0x4267b1(0x1bb),
        'yy': _0x4267b1(0x1bc)
    }
});
