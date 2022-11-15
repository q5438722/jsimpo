import _0xc54b67 from '../moment';
function plural(_0x49c2c3, _0x1d57c8) {
    var _0x9c1dbe = {
            'QhZFj': function (_0xd7ffe2, _0x3a657d) {
                return _0xd7ffe2 === _0x3a657d;
            },
            'lRxXK': function (_0x3bcf26, _0x51c41c) {
                return _0x3bcf26 % _0x51c41c;
            },
            'RHeaz': function (_0x10ecbd, _0x3f7cb2) {
                return _0x10ecbd !== _0x3f7cb2;
            },
            'qhUvI': function (_0x231e3e, _0x12c7ad) {
                return _0x231e3e % _0x12c7ad;
            },
            'GcMyJ': function (_0x547379, _0x4367f2) {
                return _0x547379 >= _0x4367f2;
            },
            'KUroG': function (_0x28e4ba, _0x2d7ee2) {
                return _0x28e4ba <= _0x2d7ee2;
            },
            'fgpgW': function (_0x4b0daf, _0x41a674) {
                return _0x4b0daf < _0x41a674;
            },
            'vDIfp': function (_0x5a7f7f, _0x4607a6) {
                return _0x5a7f7f >= _0x4607a6;
            },
            'qWHVn': function (_0x4581e6, _0x457f76) {
                return _0x4581e6 % _0x457f76;
            }
        }, _0x2e23a1 = _0x49c2c3['split']('_');
    return _0x9c1dbe['QhZFj'](_0x9c1dbe['lRxXK'](_0x1d57c8, 0xa), 0x1) && _0x9c1dbe['RHeaz'](_0x9c1dbe['qhUvI'](_0x1d57c8, 0x64), 0xb) ? _0x2e23a1[0x0] : _0x9c1dbe['GcMyJ'](_0x9c1dbe['qhUvI'](_0x1d57c8, 0xa), 0x2) && _0x9c1dbe['KUroG'](_0x9c1dbe['qhUvI'](_0x1d57c8, 0xa), 0x4) && (_0x9c1dbe['fgpgW'](_0x9c1dbe['qhUvI'](_0x1d57c8, 0x64), 0xa) || _0x9c1dbe['vDIfp'](_0x9c1dbe['qWHVn'](_0x1d57c8, 0x64), 0x14)) ? _0x2e23a1[0x1] : _0x2e23a1[0x2];
}
function relativeTimeWithPlural(_0x5a62d4, _0x2f914b, _0x343fbf) {
    var _0x2aeb19 = {
            'wJodH': 'секунда_секунды_секунд',
            'BurES': 'секунду_секунды_секунд',
            'Vvcho': 'хвіліна_хвіліны_хвілін',
            'XQIsG': 'хвіліну_хвіліны_хвілін',
            'TXgzC': 'гадзіна_гадзіны_гадзін',
            'GPTQU': 'гадзіну_гадзіны_гадзін',
            'jixmS': 'дзень_дні_дзён',
            'OEvtk': 'месяц_месяцы_месяцаў',
            'EWozv': 'год_гады_гадоў',
            'PdDsQ': function (_0x2a8425, _0x14f3e1) {
                return _0x2a8425 === _0x14f3e1;
            },
            'nnbwC': 'хвіліна',
            'HBdsF': 'хвіліну',
            'jjxUL': 'гадзіна',
            'hvolW': 'гадзіну',
            'VNgrh': function (_0x4bcea4, _0x2751f4) {
                return _0x4bcea4 + _0x2751f4;
            },
            'QQDAL': function (_0x5557aa, _0x1d3409) {
                return _0x5557aa + _0x1d3409;
            },
            'toQva': function (_0x5d71be, _0x238576, _0x9c7561) {
                return _0x5d71be(_0x238576, _0x9c7561);
            }
        }, _0x5e4cbf = {
            'ss': _0x2f914b ? _0x2aeb19['wJodH'] : _0x2aeb19['BurES'],
            'mm': _0x2f914b ? _0x2aeb19['Vvcho'] : _0x2aeb19['XQIsG'],
            'hh': _0x2f914b ? _0x2aeb19['TXgzC'] : _0x2aeb19['GPTQU'],
            'dd': _0x2aeb19['jixmS'],
            'MM': _0x2aeb19['OEvtk'],
            'yy': _0x2aeb19['EWozv']
        };
    if (_0x2aeb19['PdDsQ'](_0x343fbf, 'm'))
        return _0x2f914b ? _0x2aeb19['nnbwC'] : _0x2aeb19['HBdsF'];
    else
        return _0x2aeb19['PdDsQ'](_0x343fbf, 'h') ? _0x2f914b ? _0x2aeb19['jjxUL'] : _0x2aeb19['hvolW'] : _0x2aeb19['VNgrh'](_0x2aeb19['QQDAL'](_0x5a62d4, '\x20'), _0x2aeb19['toQva'](plural, _0x5e4cbf[_0x343fbf], +_0x5a62d4));
}
export default _0xc54b67['defineLocale']('be', {
    'months': {
        'format': 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'['split']('_'),
        'standalone': 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'['split']('_')
    },
    'monthsShort': 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'['split']('_'),
    'weekdays': {
        'format': 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'['split']('_'),
        'standalone': 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'['split']('_'),
        'isFormat': /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
    },
    'weekdaysShort': 'нд_пн_ат_ср_чц_пт_сб'['split']('_'),
    'weekdaysMin': 'нд_пн_ат_ср_чц_пт_сб'['split']('_'),
    'longDateFormat': {
        'LT': 'HH:mm',
        'LTS': 'HH:mm:ss',
        'L': 'DD.MM.YYYY',
        'LL': 'D\x20MMMM\x20YYYY\x20г.',
        'LLL': 'D\x20MMMM\x20YYYY\x20г.,\x20HH:mm',
        'LLLL': 'dddd,\x20D\x20MMMM\x20YYYY\x20г.,\x20HH:mm'
    },
    'calendar': {
        'sameDay': '[Сёння\x20ў]\x20LT',
        'nextDay': '[Заўтра\x20ў]\x20LT',
        'lastDay': '[Учора\x20ў]\x20LT',
        'nextWeek': function () {
            var _0x118685 = { 'IKuZb': '[У]\x20dddd\x20[ў]\x20LT' };
            return _0x118685['IKuZb'];
        },
        'lastWeek': function () {
            var _0x511fca = {
                'jsdbv': '[У\x20мінулую]\x20dddd\x20[ў]\x20LT',
                'cQaiJ': '[У\x20мінулы]\x20dddd\x20[ў]\x20LT'
            };
            switch (this['day']()) {
            case 0x0:
            case 0x3:
            case 0x5:
            case 0x6:
                return _0x511fca['jsdbv'];
            case 0x1:
            case 0x2:
            case 0x4:
                return _0x511fca['cQaiJ'];
            }
        },
        'sameElse': 'L'
    },
    'relativeTime': {
        'future': 'праз\x20%s',
        'past': '%s\x20таму',
        's': 'некалькі\x20секунд',
        'm': relativeTimeWithPlural,
        'mm': relativeTimeWithPlural,
        'h': relativeTimeWithPlural,
        'hh': relativeTimeWithPlural,
        'd': 'дзень',
        'dd': relativeTimeWithPlural,
        'M': 'месяц',
        'MM': relativeTimeWithPlural,
        'y': 'год',
        'yy': relativeTimeWithPlural
    },
    'meridiemParse': /ночы|раніцы|дня|вечара/,
    'isPM': function (_0x58f68d) {
        return /^(дня|вечара)$/['test'](_0x58f68d);
    },
    'meridiem': function (_0x3a009a, _0x49d16c, _0x101c22) {
        var _0x457157 = {
            'iQxxz': function (_0x581bc9, _0x27a313) {
                return _0x581bc9 < _0x27a313;
            },
            'Vtyuu': 'ночы',
            'pOyYP': 'раніцы',
            'CchjZ': function (_0x332ad7, _0x55fda1) {
                return _0x332ad7 < _0x55fda1;
            },
            'WpgTv': 'дня',
            'ChQKB': 'вечара'
        };
        if (_0x457157['iQxxz'](_0x3a009a, 0x4))
            return _0x457157['Vtyuu'];
        else {
            if (_0x457157['iQxxz'](_0x3a009a, 0xc))
                return _0x457157['pOyYP'];
            else
                return _0x457157['CchjZ'](_0x3a009a, 0x11) ? _0x457157['WpgTv'] : _0x457157['ChQKB'];
        }
    },
    'dayOfMonthOrdinalParse': /\d{1,2}-(і|ы|га)/,
    'ordinal': function (_0x640f23, _0x387462) {
        var _0xa6d73b = {
            'VZuCm': 'DDD',
            'xqJlW': function (_0x1180b3, _0x36aa43) {
                return _0x1180b3 === _0x36aa43;
            },
            'zMfcx': function (_0x4af147, _0x27a1e6) {
                return _0x4af147 % _0x27a1e6;
            },
            'txqDz': function (_0x442443, _0x510f3d) {
                return _0x442443 % _0x510f3d;
            },
            'hTLFx': function (_0x1cffbe, _0x4c7f67) {
                return _0x1cffbe !== _0x4c7f67;
            },
            'CNhQh': function (_0x491faa, _0x596a1e) {
                return _0x491faa + _0x596a1e;
            },
            'WtBPG': function (_0xb34da8, _0x472034) {
                return _0xb34da8 + _0x472034;
            },
            'sMQRu': '-га'
        };
        switch (_0x387462) {
        case 'M':
        case 'd':
        case _0xa6d73b['VZuCm']:
        case 'w':
        case 'W':
            return (_0xa6d73b['xqJlW'](_0xa6d73b['zMfcx'](_0x640f23, 0xa), 0x2) || _0xa6d73b['xqJlW'](_0xa6d73b['txqDz'](_0x640f23, 0xa), 0x3)) && _0xa6d73b['hTLFx'](_0xa6d73b['txqDz'](_0x640f23, 0x64), 0xc) && _0xa6d73b['hTLFx'](_0xa6d73b['txqDz'](_0x640f23, 0x64), 0xd) ? _0xa6d73b['CNhQh'](_0x640f23, '-і') : _0xa6d73b['CNhQh'](_0x640f23, '-ы');
        case 'D':
            return _0xa6d73b['WtBPG'](_0x640f23, _0xa6d73b['sMQRu']);
        default:
            return _0x640f23;
        }
    },
    'week': {
        'dow': 0x1,
        'doy': 0x7
    }
});
