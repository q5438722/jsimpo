// Maltese (Malta) [mt]
import dayjs from 'dayjs';

const locale = {
  name: 'mt',
  weekdays: ['Il-\u0126add', 'It-Tnejn', 'It-Tlieta', 'L-Erbg\u0127a', 'Il-\u0126amis', 'Il-\u0120img\u0127a', 'Is-Sibt'],
  months: ['Jannar', 'Frar', 'Marzu', 'April', 'Mejju', '\u0120unju', 'Lulju', 'Awwissu', 'Settembru', 'Ottubru', 'Novembru', 'Di\u010Bembru'],
  weekStart: 1,
  weekdaysShort: ['\u0126ad', 'Tne', 'Tli', 'Erb', '\u0126am', '\u0120im', 'Sib'],
  monthsShort: ['Jan', 'Fra', 'Mar', 'Apr', 'Mej', '\u0120un', 'Lul', 'Aww', 'Set', 'Ott', 'Nov', 'Di\u010B'],
  weekdaysMin: ['\u0126a', 'Tn', 'Tl', 'Er', '\u0126a', '\u0120i', 'Si'],
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: 'f\u2019 %s',
    past: '%s ilu',
    s: 'ftit sekondi',
    m: 'minuta',
    mm: '%d minuti',
    h: 'sieg\u0127a',
    hh: '%d sieg\u0127at',
    d: '\u0121urnata',
    dd: '%d \u0121ranet',
    M: 'xahar',
    MM: '%d xhur',
    y: 'sena',
    yy: '%d sni'
  }
};


dayjs.locale(locale, null, true);

export default locale;