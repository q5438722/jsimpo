'use strict';
FullCalendar.globalLocales.push(function() {
  var defaults = {
    code : "hu",
    week : {
      dow : 1,
      doy : 4
    },
    buttonText : {
      prev : "vissza",
      next : "el\u0151re",
      today : "ma",
      month : "H\u00f3nap",
      week : "H\u00e9t",
      day : "Nap",
      list : "Napl\u00f3"
    },
    weekText : "H\u00e9t",
    allDayText : "Eg\u00e9sz nap",
    moreLinkText : "tov\u00e1bbi",
    noEventsText : "Nincs megjelen\u00edthet\u0151 esem\u00e9ny"
  };
  return defaults;
}());

