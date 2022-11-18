
(function(){

	var params = Krux('require:util').urlParams();
	
	Krux ('set', { 
	'page_attr_utm_source': params.utm_source,
	'page_attr_utm_medium': params.utm_medium,
	'page_attr_utm_campaign': params.utm_campaign,
	'page_attr_utm_content': params.utm_content,
	'page_attr_utm_term': params.utm_term 
	});
	
})();
