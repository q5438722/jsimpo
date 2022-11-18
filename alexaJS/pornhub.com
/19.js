
        (function(){
            if (typeof checkForGridSupport === 'function') {
                var htmlEl = document.documentElement;
                if (htmlEl) {
                    if (checkForGridSupport()) {
						MG_Utils.addClass(htmlEl, 'supportsGridLayout');

						var fluidContainer = 1;
						if (fluidContainer) {
							MG_Utils.addClass(htmlEl, 'fluidContainer');
						}

					} else {
						MG_Utils.addClass(htmlEl, 'noGridLayout');
					}
                }
			}
        })();
    