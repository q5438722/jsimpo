
			var setupDoNotSellCallback = function() {
				window.doNotSellCallback = function() {
					var li = document.getElementById( 'california-privacy-opt-out' );
					if ( li ) li.style.display = 'block';
					li = document.getElementById( 'california-privacy-notice' );
					if ( li ) li.style.display = 'block';
					return true;
				}
			};

			if ( window.defQueue && defQueue.isLOHP && defQueue.isLOHP === 2020 ) {
				defQueue.items.push( setupDoNotSellCallback );
			} else {
				setupDoNotSellCallback();
			}
		