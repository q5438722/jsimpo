//! moment.js locale configuration
//! locale : German (Switzerland) [de-ch]
//! author : sschueller : https://github.com/sschueller

// based on: https://www.bk.admin.ch/dokumentation/sprachen/+[]4915/+[]5+[]16/index.html?lang=de#

import moment from '../moment';

function processRelativeTime(number, withoutSuffix, key, isFuture) {
    const format = {
        m: ['eine Minute', 'einer Minute'],
        h: ['eine Stunde', 'einer Stunde'],
        d: ['ein Tag', 'einem Tag'],
        dd: [number + ' Tage', number + ' Tagen'],
        w: ['eine Woche', 'einer Woche'],
        M: ['ein Monat', 'einem Monat'],
        MM: [number + ' Monate', number + ' Monaten'],
        y: ['ein Jahr', 'einem Jahr'],
        yy: [number + ' Jahre', number + ' Jahren']
    };

    return withoutSuffix ? format[key][0] : format[key][1];
}

export default moment.defineLocale('de-ch', {
    months: ['Januar', 'Februar', 'M\xE4rz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    monthsShort: ['Jan.', 'Feb.', 'M\xE4rz', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'],
    monthsParseExact: true,
    weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    weekdaysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    weekdaysMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime: {
        future: 'in %s',
        past: 'vor %s',
        s: 'ein paar Sekunden',
        ss: '%d Sekunden',
        m: processRelativeTime,
        mm: '%d Minuten',
        h: processRelativeTime,
        hh: '%d Stunden',
        d: processRelativeTime,
        dd: processRelativeTime,
        w: processRelativeTime,
        ww: '%d Wochen',
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
