
					;(function () {
						var appScript = document.querySelector('#script\\:app')
						appScript.addEventListener('load', function () {
							xray.send('script-app-load_cdn', {
								v: Math.round(window.performance.now()),
							})
						})
						appScript.addEventListener('error', function () {
							xray.send('script-app-error_cdn', {
								v: Math.round(window.performance.now()),
							})
						})
						appScript.src = appScript.dataset.src
					})()
				