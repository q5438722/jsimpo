var _0x57f9 = [
    'ไม่กี่วินาที',
    '%d\x20นาที',
    '%d\x20ชั่วโมง',
    '1\x20วัน',
    '%d\x20วัน',
    '1\x20สัปดาห์',
    '%d\x20สัปดาห์',
    '%d\x20เดือน',
    '%d\x20ปี',
    '683341DRsiaz',
    '776668eCYtQm',
    '693693NQxZIz',
    '1035817HispHi',
    '7244dKUDZZ',
    '47eSCyae',
    '163423qZTtbX',
    '5266rxbALw',
    '382chWKUI',
    'defineLocale',
    'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.',
    'split',
    'อา._จ._อ._พ._พฤ._ศ._ส.',
    'H:mm:ss',
    'DD/MM/YYYY',
    'D\x20MMMM\x20YYYY',
    'D\x20MMMM\x20YYYY\x20เวลา\x20H:mm',
    'วันddddที่\x20D\x20MMMM\x20YYYY\x20เวลา\x20H:mm',
    'ก่อนเที่ยง',
    'หลังเที่ยง',
    '[วันนี้\x20เวลา]\x20LT',
    '[พรุ่งนี้\x20เวลา]\x20LT',
    '[เมื่อวานนี้\x20เวลา]\x20LT',
    '[วัน]dddd[ที่แล้ว\x20เวลา]\x20LT',
    'อีก\x20%s',
    '%sที่แล้ว'
];
var _0x43a07d = _0x2519;
function _0x2519(_0x313f7d, _0x910f62) {
    return _0x2519 = function (_0x57f9f4, _0x25190c) {
        _0x57f9f4 = _0x57f9f4 - 0xcb;
        var _0x54387b = _0x57f9[_0x57f9f4];
        return _0x54387b;
    }, _0x2519(_0x313f7d, _0x910f62);
}
(function (_0x5140b3, _0x4f768a) {
    var _0x4bfe1b = _0x2519;
    while (!![]) {
        try {
            var _0x322dc5 = -parseInt(_0x4bfe1b(0xcb)) + parseInt(_0x4bfe1b(0xcc)) + -parseInt(_0x4bfe1b(0xcd)) + -parseInt(_0x4bfe1b(0xce)) + parseInt(_0x4bfe1b(0xcf)) * parseInt(_0x4bfe1b(0xd0)) + -parseInt(_0x4bfe1b(0xd1)) + parseInt(_0x4bfe1b(0xd2)) * parseInt(_0x4bfe1b(0xd3));
            if (_0x322dc5 === _0x4f768a)
                break;
            else
                _0x5140b3['push'](_0x5140b3['shift']());
        } catch (_0x115b87) {
            _0x5140b3['push'](_0x5140b3['shift']());
        }
    }
}(_0x57f9, 0x86e1a));
import _0x41625b from '../moment';
export default _0x41625b[_0x43a07d(0xd4)]('th', {
    'months': 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'['split']('_'),
    'monthsShort': _0x43a07d(0xd5)['split']('_'),
    'monthsParseExact': !![],
    'weekdays': 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'[_0x43a07d(0xd6)]('_'),
    'weekdaysShort': 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'[_0x43a07d(0xd6)]('_'),
    'weekdaysMin': _0x43a07d(0xd7)['split']('_'),
    'weekdaysParseExact': !![],
    'longDateFormat': {
        'LT': 'H:mm',
        'LTS': _0x43a07d(0xd8),
        'L': _0x43a07d(0xd9),
        'LL': _0x43a07d(0xda),
        'LLL': _0x43a07d(0xdb),
        'LLLL': _0x43a07d(0xdc)
    },
    'meridiemParse': /ก่อนเที่ยง|หลังเที่ยง/,
    'isPM': function (_0x164f1f) {
        return _0x164f1f === 'หลังเที่ยง';
    },
    'meridiem': function (_0x4f4a71, _0x10af41, _0x554274) {
        var _0x4959ef = _0x43a07d;
        return _0x4f4a71 < 0xc ? _0x4959ef(0xdd) : _0x4959ef(0xde);
    },
    'calendar': {
        'sameDay': _0x43a07d(0xdf),
        'nextDay': _0x43a07d(0xe0),
        'nextWeek': 'dddd[หน้า\x20เวลา]\x20LT',
        'lastDay': _0x43a07d(0xe1),
        'lastWeek': _0x43a07d(0xe2),
        'sameElse': 'L'
    },
    'relativeTime': {
        'future': _0x43a07d(0xe3),
        'past': _0x43a07d(0xe4),
        's': _0x43a07d(0xe5),
        'ss': '%d\x20วินาที',
        'm': '1\x20นาที',
        'mm': _0x43a07d(0xe6),
        'h': '1\x20ชั่วโมง',
        'hh': _0x43a07d(0xe7),
        'd': _0x43a07d(0xe8),
        'dd': _0x43a07d(0xe9),
        'w': _0x43a07d(0xea),
        'ww': _0x43a07d(0xeb),
        'M': '1\x20เดือน',
        'MM': _0x43a07d(0xec),
        'y': '1\x20ปี',
        'yy': _0x43a07d(0xed)
    }
});
