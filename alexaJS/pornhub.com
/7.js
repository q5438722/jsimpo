
			var tjPreloadAds = JSON.parse('{"5":{"url":"\/\/www.pornhub.com\/_xa\/ads_batch?ads=true&clientType=mobile&channel[context_page_type]=home&channel[site]=pornhub&site_id=2&device_type=tablet&hc=F3A7FD95-59C0-483F-AFD3-7BD84C921DAD&data=%5B%7B%22spots%22%3A%5B%7B%22zone%22%3A5%7D%5D%7D%5D&dm=www.pornhub.com\/_xa"},"2184351":{"url":"\/\/www.pornhub.com\/_xa\/ads_batch?ads=true&clientType=mobile&channel[context_page_type]=home&channel[site]=pornhub&site_id=2&device_type=tablet&hc=F3A7FD95-59C0-483F-AFD3-7BD84C921DAD&data=%5B%7B%22spots%22%3A%5B%7B%22zone%22%3A2184351%7D%5D%7D%5D&dm=www.pornhub.com\/_xa"}}');

			var TJ_ADS_TAKEOVER = {
				preloadAds: function() {
					if (!tjPreloadAds) return;

					for(var i in tjPreloadAds) {
						TJ_ADS_TAKEOVER.getAd(tjPreloadAds[i]);
					}
				},
				getAd: function(ad) {
					var request = window['XDomainRequest'] ? 
						new window['XDomainRequest']() : new XMLHttpRequest();
					
					var duration = new Date().getTime();
					request.onload = request.onerror = request.ontimeout = function() {
						ad.response = request.responseText;
						ad.duration = new Date().getTime() - duration;
						ad.status = request.status;
						if (typeof window.tjPreloadEmbeddedAds === 'function') {
							window.tjPreloadEmbeddedAds();
						}
					}

					request.onprogress = function() {}; // IE9 fix
					request.open('GET', ad.url);
					request.timeout = 10000; // IE9 fix
					request.send();
				}
			};

			TJ_ADS_TAKEOVER.preloadAds();
		