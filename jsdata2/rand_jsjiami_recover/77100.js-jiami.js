;
(function (_0x1f2efe, _0x4ce05f) {
    typeof exports === 'object' && typeof module !== 'undefined' && typeof require === 'function' ? _0x4ce05f(_0x1930ee['cZVJf'](require, '../moment')) : typeof define === 'function' && define['amd'] ? define(['../moment'], _0x4ce05f) : _0x4ce05f(_0x1f2efe['moment']);
}(this, function (_0x4091fa) {
    'use strict';
    var _0x32c51f = {
        1: '-inci',
        8: '-inci',
        70: '-inci',
        80: '-inci',
        7: '-nci',
        20: '-nci',
        3: '-üncü',
        4: '-üncü',
        100: '-üncü',
        9: '-uncu',
        10: '-uncu',
        30: '-uncu',
        60: '-ıncı'
    };
    var _0x189a21 = _0x4091fa['defineLocale']('az', {
        'months': 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'['split']('_'),
        'monthsShort': 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'['split']('_'),
        'weekdays': 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'['split']('_'),
        'weekdaysShort': 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'['split']('_'),
        'weekdaysMin': 'Bz_BE_ÇA_Çə_CA_Cü_Şə'['split']('_'),
        'weekdaysParseExact': !![],
        'longDateFormat': {
            'LT': 'HH:mm',
            'LTS': 'HH:mm:ss',
            'L': 'DD.MM.YYYY',
            'LL': 'D MMMM YYYY',
            'LLL': 'D MMMM YYYY HH:mm',
            'LLLL': 'dddd, D MMMM YYYY HH:mm'
        },
        'calendar': {
            'sameDay': '[bugün saat] LT',
            'nextDay': '[sabah saat] LT',
            'nextWeek': '[gələn həftə] dddd [saat] LT',
            'lastDay': '[dünən] LT',
            'lastWeek': '[keçən həftə] dddd [saat] LT',
            'sameElse': 'L'
        },
        'relativeTime': {
            'future': '%s sonra',
            'past': '%s əvvəl',
            's': 'birneçə saniyyə',
            'm': 'bir dəqiqə',
            'mm': '%d dəqiqə',
            'h': 'bir saat',
            'hh': '%d saat',
            'd': 'bir gün',
            'dd': '%d gün',
            'M': 'bir ay',
            'MM': '%d ay',
            'y': 'bir il',
            'yy': '%d il'
        },
        'meridiemParse': /gecə|səhər|gündüz|axşam/,
        'isPM': function (_0x1d03ef) {
            return /^(gündüz|axşam)$/['test'](_0x1d03ef);
        },
        'meridiem': function (_0x2145fb, _0x317cba, _0x5dbe1b) {
            if ('sjSJt' !== 'rJqsN') {
                if (_0x2145fb < 4) {
                    return 'gecə';
                } else if (_0x2145fb < 12) {
                    return 'səhər';
                } else if (_0x2145fb < 17) {
                    return 'gündüz';
                } else {
                    if ('jxbyW' === 'jxbyW') {
                        return 'axşam';
                    } else {
                        return 'axşam';
                    }
                }
            } else {
                return 'səhər';
            }
        },
        'ordinalParse': /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        'ordinal': function (_0x4fd2d4) {
            if (_0x4fd2d4 === 0) {
                if ('hHKEb' === 'nbEVB') {
                    return 'gecə';
                } else {
                    return _0x4fd2d4 + '-ıncı';
                }
            }
            var _0x1fd764 = _0x4fd2d4 % 10, _0x250e73 = _0x4fd2d4 % 100 - _0x1fd764, _0x1c0774 = _0x4fd2d4 >= 100 ? 100 : null;
            return _0x4fd2d4 + (_0x32c51f[_0x1fd764] || _0x32c51f[_0x250e73] || _0x32c51f[_0x1c0774]);
        },
        'week': {
            'dow': 1,
            'doy': 7
        }
    });
    return _0x189a21;
}));