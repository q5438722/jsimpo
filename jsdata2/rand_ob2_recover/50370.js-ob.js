;
(function (_0x5f9171, _0x6e0757) {
    var _0x5d5a50 = _0x298f;
    typeof exports === _0x5d5a50(379) && typeof module !== _0x5d5a50(380) && typeof require === 'function' ? _0x6e0757(require(_0x5d5a50(381))) : typeof define === _0x5d5a50(382) && define[_0x5d5a50(383)] ? define([_0x5d5a50(381)], _0x6e0757) : _0x6e0757(_0x5f9171[_0x5d5a50(384)]);
}(this, function (_0x368820) {
    'use strict';
    var _0x82e2e5 = _0x298f;
    var _0x142f63 = _0x82e2e5(385)[_0x82e2e5(386)]('_'), _0x21b6c8 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'['split']('_'), _0x3324ae = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i
        ], _0x1e0d31 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, _0x18a5f4 = _0x368820['defineLocale'](_0x82e2e5(387), {
            'months': 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'[_0x82e2e5(386)]('_'),
            'monthsShort': function (_0x154f04, _0x535d36) {
                if (!_0x154f04)
                    return _0x142f63;
                else
                    return /-MMM-/['test'](_0x535d36) ? _0x21b6c8[_0x154f04['month']()] : _0x142f63[_0x154f04['month']()];
            },
            'monthsRegex': _0x1e0d31,
            'monthsShortRegex': _0x1e0d31,
            'monthsStrictRegex': /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            'monthsShortStrictRegex': /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            'monthsParse': _0x3324ae,
            'longMonthsParse': _0x3324ae,
            'shortMonthsParse': _0x3324ae,
            'weekdays': _0x82e2e5(388)['split']('_'),
            'weekdaysShort': 'dom._lun._mar._mié._jue._vie._sáb.'[_0x82e2e5(386)]('_'),
            'weekdaysMin': _0x82e2e5(389)['split']('_'),
            'weekdaysParseExact': !![],
            'longDateFormat': {
                'LT': _0x82e2e5(390),
                'LTS': _0x82e2e5(391),
                'L': _0x82e2e5(392),
                'LL': 'D [de] MMMM [de] YYYY',
                'LLL': 'D [de] MMMM [de] YYYY H:mm',
                'LLLL': _0x82e2e5(393)
            },
            'calendar': {
                'sameDay': function () {
                    var _0x56e2d1 = _0x82e2e5;
                    return '[hoy a la' + (this[_0x56e2d1(394)]() !== 1 ? 's' : '') + _0x56e2d1(395);
                },
                'nextDay': function () {
                    var _0x41d734 = _0x82e2e5;
                    return _0x41d734(396) + (this['hours']() !== 1 ? 's' : '') + _0x41d734(395);
                },
                'nextWeek': function () {
                    var _0x181c3d = _0x82e2e5;
                    return _0x181c3d(397) + (this[_0x181c3d(394)]() !== 1 ? 's' : '') + _0x181c3d(395);
                },
                'lastDay': function () {
                    var _0xa60a4b = _0x82e2e5;
                    return _0xa60a4b(398) + (this[_0xa60a4b(394)]() !== 1 ? 's' : '') + _0xa60a4b(395);
                },
                'lastWeek': function () {
                    var _0x3c25ee = _0x82e2e5;
                    return '[el] dddd [pasado a la' + (this[_0x3c25ee(394)]() !== 1 ? 's' : '') + _0x3c25ee(395);
                },
                'sameElse': 'L'
            },
            'relativeTime': {
                'future': _0x82e2e5(399),
                'past': 'hace %s',
                's': _0x82e2e5(400),
                'ss': _0x82e2e5(401),
                'm': _0x82e2e5(402),
                'mm': _0x82e2e5(403),
                'h': _0x82e2e5(404),
                'hh': '%d horas',
                'd': _0x82e2e5(405),
                'dd': '%d días',
                'w': _0x82e2e5(406),
                'ww': _0x82e2e5(407),
                'M': _0x82e2e5(408),
                'MM': _0x82e2e5(409),
                'y': _0x82e2e5(410),
                'yy': '%d años'
            },
            'dayOfMonthOrdinalParse': /\d{1,2}º/,
            'ordinal': _0x82e2e5(411),
            'week': {
                'dow': 0,
                'doy': 4
            },
            'invalidDate': _0x82e2e5(412)
        });
    return _0x18a5f4;
}));