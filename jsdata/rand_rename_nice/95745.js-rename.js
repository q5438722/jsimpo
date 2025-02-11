'use strict';
jQuery(function($) {
  $.datepicker.regional["no"] = {
    closeText : "Lukk",
    prevText : "&#xAB;Forrige",
    nextText : "Neste&#xBB;",
    currentText : "I dag",
    monthNames : ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
    monthNamesShort : ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
    dayNamesShort : ["s\u00f8n", "man", "tir", "ons", "tor", "fre", "l\u00f8r"],
    dayNames : ["s\u00f8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\u00f8rdag"],
    dayNamesMin : ["s\u00f8", "ma", "ti", "on", "to", "fr", "l\u00f8"],
    weekHeader : "Uke",
    dateFormat : "dd.mm.yy",
    firstDay : 1,
    isRTL : false,
    showMonthAfterYear : false,
    yearSuffix : ""
  };
  $.datepicker.setDefaults($.datepicker.regional["no"]);
});

