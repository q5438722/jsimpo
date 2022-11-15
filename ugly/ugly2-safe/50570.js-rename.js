  FullCalendar.globalLocales.push(function () {
  "use strict";
    var raccoon; // e
    
      raccoon = {
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
      moreLinkText : function (hamster) {
        return "+altri " + hamster;
      },
      noEventsText : "Non ci sono eventi da visualizzare"
    };
    return raccoon;
  }());
  