
window.rakutenIchibaTop = {};
window.rakutenIchibaTop.lidAdd = function (idName, betaName) {
	var $ = window.jQuery;
	var $target = $(idName);
	var $links = $target.find('a[sc_linkName]');
	var linkId = $target.attr('linkid');
	var betaString = (betaName) ? betaName : '';
	$links.each(function (i) {
		var $link = $links.eq(i);
		$link.bind('click', function () {
			var href = $link.attr('href');
			var scLinkname = $link.attr('sc_linkName');
			var scParamPattern;
			if (scLinkname) {
				if (href.indexOf('?', 0) > 0) {
					scParamPattern = '&l-id=';
				} else {
					scParamPattern = '?l-id=';
				}
				href = href + scParamPattern + sc_abPatern + '_' + scLinkname + betaString;
				$link.attr('href', href);
			}
		});
	});
};
window.rakutenIchibaTop.lidAdd_replace = function (idName, betaName) {
	var $ = window.jQuery;
	var $target = $(idName);
	var $links = $target.find('a[sc_linkName]');
	var linkId = $target.attr('linkid');
	var betaString = (betaName) ? betaName : '';
	$links.each(function (i) {
		var $link = $links.eq(i);
		var href = $link.attr('href');
		var scLinkname = $link.attr('sc_linkName');
		var scParamPattern;
		if (scLinkname) {
			if (href.indexOf('?', 0) > 0) {
				scParamPattern = '&l-id=';
			} else {
				scParamPattern = '?l-id=';
			}
			href = href + scParamPattern + sc_abPatern + '_' + scLinkname + betaString;
			$link.attr('href', href);
		}
	});
};
