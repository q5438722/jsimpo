(function () {
				// NYT apps resize function
				// Resizes the interactive webview height after a 1 second pause
				// Don't run resizer if it's in a programming list webview
				if (window.NYTG && window.NYTG.enqueue && !document.querySelector('#programming-list')) {
					setTimeout(function () {
						var container = document.querySelector('.covid-tracker-wrapper .dashboard');
						var windowWidth = window.innerWidth;
						function resize() {
							var height = container.offsetHeight;
							window.NYTG.enqueue(JSON.stringify({ id: 0, type: 'resize', options: { height: height } }));
						}
						window.addEventListener('resize', function () {
							if (window.innerWidth != windowWidth) {
								windowWidth = window.innerWidth;
								resize();
							}
						});
						resize();
					}, 1000);
				}
			})();