'use strict';
FullCalendar.globalLocales.push(function() {
  var defaults = {
    code : "it",
    week : {
      dow : 1,
      doy : 4
    },
    buttonText : {
      prev : "Prec",
      next : "Succ",
      today : "Oggi",
      month : "Mese",
      week : "Settimana",
      day : "Giorno",
      list : "Agenda"
    },
    weekText : "Sm",
    allDayText : "Tutto il giorno",
    moreLinkText : function(canCreateDiscussions) {
      return "+altri " + canCreateDiscussions;
    },
    noEventsText : "Non ci sono eventi da visualizzare"
  };
  return defaults;
}());

