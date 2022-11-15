import _0x424f49 from '../moment';
export default _0x424f49['defineLocale']('th', {
    'months': 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'['split']('_'),
    'monthsShort': 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'['split']('_'),
    'monthsParseExact': !![],
    'weekdays': 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'['split']('_'),
    'weekdaysShort': 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'['split']('_'),
    'weekdaysMin': 'อา._จ._อ._พ._พฤ._ศ._ส.'['split']('_'),
    'weekdaysParseExact': !![],
    'longDateFormat': {
        'LT': 'H:mm',
        'LTS': 'H:mm:ss',
        'L': 'DD/MM/YYYY',
        'LL': 'D\x20MMMM\x20YYYY',
        'LLL': 'D\x20MMMM\x20YYYY\x20เวลา\x20H:mm',
        'LLLL': 'วันddddที่\x20D\x20MMMM\x20YYYY\x20เวลา\x20H:mm'
    },
    'meridiemParse': /ก่อนเที่ยง|หลังเที่ยง/,
    'isPM': function (_0x290a85) {
        var _0x5bcb4b = {
            'xtyTu': function (_0x30cfb5, _0xdcf464) {
                return _0x30cfb5 === _0xdcf464;
            },
            'Hkawq': 'หลังเที่ยง'
        };
        return _0x5bcb4b['xtyTu'](_0x290a85, _0x5bcb4b['Hkawq']);
    },
    'meridiem': function (_0xf1935a, _0x3aa079, _0x327a22) {
        var _0x227d6a = {
            'FkLQo': function (_0x29b190, _0x432aeb) {
                return _0x29b190 < _0x432aeb;
            },
            'kehTK': 'ก่อนเที่ยง',
            'hMrTl': 'หลังเที่ยง'
        };
        return _0x227d6a['FkLQo'](_0xf1935a, 0xc) ? _0x227d6a['kehTK'] : _0x227d6a['hMrTl'];
    },
    'calendar': {
        'sameDay': '[วันนี้\x20เวลา]\x20LT',
        'nextDay': '[พรุ่งนี้\x20เวลา]\x20LT',
        'nextWeek': 'dddd[หน้า\x20เวลา]\x20LT',
        'lastDay': '[เมื่อวานนี้\x20เวลา]\x20LT',
        'lastWeek': '[วัน]dddd[ที่แล้ว\x20เวลา]\x20LT',
        'sameElse': 'L'
    },
    'relativeTime': {
        'future': 'อีก\x20%s',
        'past': '%sที่แล้ว',
        's': 'ไม่กี่วินาที',
        'ss': '%d\x20วินาที',
        'm': '1\x20นาที',
        'mm': '%d\x20นาที',
        'h': '1\x20ชั่วโมง',
        'hh': '%d\x20ชั่วโมง',
        'd': '1\x20วัน',
        'dd': '%d\x20วัน',
        'w': '1\x20สัปดาห์',
        'ww': '%d\x20สัปดาห์',
        'M': '1\x20เดือน',
        'MM': '%d\x20เดือน',
        'y': '1\x20ปี',
        'yy': '%d\x20ปี'
    }
});
