/* Norwegian initialisation for the jQuery UI date picker plugin. */
/* Written by Naimdjon Takhirov (naimdjon@gmail.com). */

jQuery(function ($) {
	$.datepicker.regional['no'] = {
		closeText: 'Lukk',
		prevText: '&#xAB;Forrige',
		nextText: 'Neste&#xBB;',
		currentText: 'I dag',
		monthNames: ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'],
		monthNamesShort: ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des'],
		dayNamesShort: ['s\xF8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\xF8r'],
		dayNames: ['s\xF8ndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'l\xF8rdag'],
		dayNamesMin: ['s\xF8', 'ma', 'ti', 'on', 'to', 'fr', 'l\xF8'],
		weekHeader: 'Uke',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional.no);
});
