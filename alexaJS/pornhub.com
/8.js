
							var tjEmbeddedAdsDuration = new Date().getTime();
						(function(env) {
				var addTjScript = function (url) {
					var script   = document.createElement('script');
					script.type  = 'text/javascript';
					script.async = true;
					script.src   =  url;

					document.getElementsByTagName('head')[0].appendChild(script);
				}

				
					var supportsES6 = function() {
						try {
							new Function('(a = 0) => a');

							if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) { // IOS10 fix
								return parseInt(navigator.userAgent.match(/OS [\d_]+/i)[0].substr(3).split('_')[0]) !== 10;
							}

							return true;
						}
						catch (err) {
							return false;
						}
					}();

					var version = 'es5';
					if (typeof Promise !== 'undefined' && Promise.toString().indexOf('[native code]') !== -1 && supportsES6) {
						version = 'es6';
					}

					addTjScript('https://static.trafficjunky.com/invocation/embeddedads/' + env + '/embeddedads.' + version + '.min.js');
											})('production');
		