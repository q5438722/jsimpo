FullCalendar.globalLocales.push(function () {
  'use strict';

  const sv = {
    code: 'sv',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    },
    buttonText: {
      prev: 'F\xF6rra',
      next: 'N\xE4sta',
      today: 'Idag',
      month: 'M\xE5nad',
      week: 'Vecka',
      day: 'Dag',
      list: 'Program'
    },
    weekText: 'v.',
    allDayText: 'Heldag',
    moreLinkText: 'till',
    noEventsText: 'Inga h\xE4ndelser att visa'
  };


  return sv;
}());
