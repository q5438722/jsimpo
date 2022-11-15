FullCalendar.globalLocales.push(function () {
  'use strict';

  const hu = {
    code: 'hu',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    },
    buttonText: {
      prev: 'vissza',
      next: 'el\u0151re',
      today: 'ma',
      month: 'H\xF3nap',
      week: 'H\xE9t',
      day: 'Nap',
      list: 'Napl\xF3'
    },
    weekText: 'H\xE9t',
    allDayText: 'Eg\xE9sz nap',
    moreLinkText: 'tov\xE1bbi',
    noEventsText: 'Nincs megjelen\xEDthet\u0151 esem\xE9ny'
  };


  return hu;
}());
