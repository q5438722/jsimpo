//! moment.js locale configuration
//! locale : Estonian [et]
//! author : Henry Kehlmann : https://github.com/madhenry
//! improvements : Illimar Tambek : https://github.com/ragulka

import moment from '../moment';

function processRelativeTime(number, withoutSuffix, key, isFuture) {
    const format = {
        s: ['m\xF5ne sekundi', 'm\xF5ni sekund', 'paar sekundit'],
        ss: [number + 'sekundi', number + 'sekundit'],
        m: ['\xFChe minuti', '\xFCks minut'],
        mm: [number + ' minuti', number + ' minutit'],
        h: ['\xFChe tunni', 'tund aega', '\xFCks tund'],
        hh: [number + ' tunni', number + ' tundi'],
        d: ['\xFChe p\xE4eva', '\xFCks p\xE4ev'],
        M: ['kuu aja', 'kuu aega', '\xFCks kuu'],
        MM: [number + ' kuu', number + ' kuud'],
        y: ['\xFChe aasta', 'aasta', '\xFCks aasta'],
        yy: [number + ' aasta', number + ' aastat']
    };

    if (withoutSuffix) {
        return format[key][2] ? format[key][2] : format[key][1];
    }
    return isFuture ? format[key][0] : format[key][1];
}

export default moment.defineLocale('et', {
    months: ['jaanuar', 'veebruar', 'm\xE4rts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'],
    monthsShort: ['jaan', 'veebr', 'm\xE4rts', 'apr', 'mai', 'juuni', 'juuli', 'aug', 'sept', 'okt', 'nov', 'dets'],
    weekdays: ['p\xFChap\xE4ev', 'esmasp\xE4ev', 'teisip\xE4ev', 'kolmap\xE4ev', 'neljap\xE4ev', 'reede', 'laup\xE4ev'],
    weekdaysShort: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
    weekdaysMin: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[T\xE4na,] LT',
        nextDay: '[Homme,] LT',
        nextWeek: '[J\xE4rgmine] dddd LT',
        lastDay: '[Eile,] LT',
        lastWeek: '[Eelmine] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s p\xE4rast',
        past: '%s tagasi',
        s: processRelativeTime,
        ss: processRelativeTime,
        m: processRelativeTime,
        mm: processRelativeTime,
        h: processRelativeTime,
        hh: processRelativeTime,
        d: processRelativeTime,
        dd: '%d p\xE4eva',
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,!+[]+!+[]}\./,
    ordinal: '%d.',
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
});
