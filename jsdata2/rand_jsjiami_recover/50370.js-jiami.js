;
(function (_0x500a09, _0x540b55) {
    typeof exports === 'object' && typeof module !== 'undefined' && typeof require === 'function' ? _0x540b55(_0x32bb42['XypYK'](require, '../moment')) : typeof define === 'function' && define['amd'] ? define(['../moment'], _0x540b55) : _0x540b55(_0x500a09['moment']);
}(this, function (_0x57ac49) {
    'use strict';
    var _0x491489 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'['split']('_'), _0x2f9c10 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'['split']('_'), _0x4ff542 = [
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
        ], _0x246f9a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    var _0x50c8d0 = _0x57ac49['defineLocale']('es-mx', {
        'months': 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'['split']('_'),
        'monthsShort': function (_0xa48d5e, _0x3699c9) {
            if (!_0xa48d5e) {
                return _0x491489;
            } else if (/-MMM-/['test'](_0x3699c9)) {
                return _0x2f9c10[_0xa48d5e['month']()];
            } else {
                return _0x491489[_0xa48d5e['month']()];
            }
        },
        'monthsRegex': _0x246f9a,
        'monthsShortRegex': _0x246f9a,
        'monthsStrictRegex': /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        'monthsShortStrictRegex': /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        'monthsParse': _0x4ff542,
        'longMonthsParse': _0x4ff542,
        'shortMonthsParse': _0x4ff542,
        'weekdays': 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'['split']('_'),
        'weekdaysShort': 'dom._lun._mar._mié._jue._vie._sáb.'['split']('_'),
        'weekdaysMin': 'do_lu_ma_mi_ju_vi_sá'['split']('_'),
        'weekdaysParseExact': !![],
        'longDateFormat': {
            'LT': 'H:mm',
            'LTS': 'H:mm:ss',
            'L': 'DD/MM/YYYY',
            'LL': 'D [de] MMMM [de] YYYY',
            'LLL': 'D [de] MMMM [de] YYYY H:mm',
            'LLLL': 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        'calendar': {
            'sameDay': function () {
                if ('lvQaq' === 'KUBVp') {
                    return _0x2f9c10[m['month']()];
                } else {
                    return '[hoy a la' + (this['hours']() !== 1 ? 's' : '') + '] LT';
                }
            },
            'nextDay': function () {
                return _0x4574a2['gxXpK']('[mañana a la', this['hours']() !== 1 ? 's' : '') + '] LT';
            },
            'nextWeek': function () {
                if ('kFoVs' !== 'kFoVs') {
                    if (!m) {
                        return _0x491489;
                    } else if (/-MMM-/['test'](format)) {
                        return _0x2f9c10[m['month']()];
                    } else {
                        return _0x491489[m['month']()];
                    }
                } else {
                    return 'dddd [a la' + (this['hours']() !== 1 ? 's' : '') + '] LT';
                }
            },
            'lastDay': function () {
                if ('GpDFE' === 'kBFDz') {
                    return '[hoy a la' + (this['hours']() !== 1 ? 's' : '') + '] LT';
                } else {
                    return '[ayer a la' + (this['hours']() !== 1 ? 's' : '') + '] LT';
                }
            },
            'lastWeek': function () {
                return '[el] dddd [pasado a la' + (this['hours']() !== 1 ? 's' : '') + '] LT';
            },
            'sameElse': 'L'
        },
        'relativeTime': {
            'future': 'en %s',
            'past': 'hace %s',
            's': 'unos segundos',
            'ss': '%d segundos',
            'm': 'un minuto',
            'mm': '%d minutos',
            'h': 'una hora',
            'hh': '%d horas',
            'd': 'un día',
            'dd': '%d días',
            'w': 'una semana',
            'ww': '%d semanas',
            'M': 'un mes',
            'MM': '%d meses',
            'y': 'un año',
            'yy': '%d años'
        },
        'dayOfMonthOrdinalParse': /\d{1,2}º/,
        'ordinal': '%dº',
        'week': {
            'dow': 0,
            'doy': 4
        },
        'invalidDate': 'Fecha inválida'
    });
    return _0x50c8d0;
}));