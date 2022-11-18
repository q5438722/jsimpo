
				( function() {
					'use strict';
					var currentScript = document.currentScript;

					var setupAnalytics = function() {
						function getScript() {
							var script = document.createElement( 'script' );
							var prev = currentScript || document.getElementsByTagName( 'script' )[ 0 ];
							script.setAttribute( 'src', "https:\/\/s0.wp.com\/wp-content\/mu-plugins\/a8c-analytics\/a8c-analytics.js?v=1657813996" );
							script.setAttribute( 'async', true );
							prev.parentNode.insertBefore( script, prev );
						}

													getScript();
											};

					if ( window.defQueue && defQueue.isLOHP && defQueue.isLOHP === 2020 ) {
						defQueue.items.push( setupAnalytics );
					} else {
						setupAnalytics();
					}
				} )();
			