'use strict';
FullCalendar.globalLocales.push(function() {
  var defaults = {
    code : "sr-cyrl",
    week : {
      dow : 1,
      doy : 7
    },
    buttonText : {
      prev : "\u041f\u0440\u0435\u0442\u0445\u043e\u0434\u043d\u0430",
      next : "\u0441\u043b\u0435\u0434\u0435\u045b\u0438",
      today : "\u0414\u0430\u043d\u0430\u0441",
      month : "\u041c\u0435\u0441\u0435\u0446",
      week : "\u041d\u0435\u0434\u0435\u0459\u0430",
      day : "\u0414\u0430\u043d",
      list : "\u041f\u043b\u0430\u043d\u0435\u0440"
    },
    weekText : "\u0421\u0435\u0434",
    allDayText : "\u0426\u0435\u043e \u0434\u0430\u043d",
    moreLinkText : function(canCreateDiscussions) {
      return "+ \u0458\u043e\u0448 " + canCreateDiscussions;
    },
    noEventsText : "\u041d\u0435\u043c\u0430 \u0434\u043e\u0433\u0430\u0452\u0430\u0458\u0430 \u0437\u0430 \u043f\u0440\u0438\u043a\u0430\u0437"
  };
  return defaults;
}());

