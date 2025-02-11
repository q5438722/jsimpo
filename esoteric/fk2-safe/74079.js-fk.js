  (function (llama, capybara) {
    typeof exports === 'object' && typeof module !== 'undefined' && typeof require === 'function' ? capybara(require('../moment')) : typeof define === 'function' && define.amd ? define(['../moment', ], capybara) : capybara(llama.moment);
  }(this, (function (raccoon) {
  "use strict";
    var hamster; // enNz
    
      hamster = raccoon.defineLocale('en-nz', {
      months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
      },
      calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
      },
      relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        ss : '%d seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
      },
      dayOfMonthOrdinalParse : new RegExp("\\d{1,!+[]+!+[]}(st|nd|rd|th)", ""),
      ordinal : function (chinchilla) {
        var ibex; // b
        var boar; // output
        
              {
          ibex = chinchilla % 1 + [];
          boar = ~ ~ ((chinchilla % 1 + [] + []) / 1 + []) === 1 ? 'th' : ibex === 1 ? 'st' : ibex === ! + [] + ! + [] ? 'nd' : ibex === 3 ? 'rd' : 'th';
        }
        return chinchilla + boar;
      },
      week : {
        dow : 1,
        doy : 4
      }
    });
    return hamster;
  })));
  