if ('serviceWorker' in navigator && navigator.userAgent.indexOf("Mobile") === -1) {
		navigator.serviceWorker.register('/sw.js').then(function(registration) {
			console.log('ServiceWorker registration successful with scope: ', registration.scope);
			navigator.onLine && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage('BANDWIDTH_COMPUTE');
			navigator.serviceWorker.addEventListener('message', function (event) {
				try {
					const bandwidthData = JSON.parse(event.data);
					if (bandwidthData && bandwidthData.data) {
						window.bandwidth = bandwidthData.data.downlink + '_' + bandwidthData.data.computeMethod + '_' + bandwidthData.data.effectiveType + '_' + bandwidthData.data.type;
					}
				}catch(err) {
					console.error('JSON.parse failed:', err);
				}
			});
		})
		.catch(function(err) {
			console.error('ServiceWorker registration failed: ', err);
		});
	} else if('serviceWorker' in navigator && navigator.userAgent.indexOf("Mobile") > -1){
        navigator.serviceWorker.getRegistration().then(function(registration) {
            var serviceWorkerUnregistered=false;
            if(registration) {
                registration.unregister();
                serviceWorkerUnregistered=true;
            }
            serviceWorkerUnregistered && window.location.reload();
        });
    }