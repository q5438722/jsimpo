
    var cacheVersion = WIDGET_SERVICEWORKER.cache.split('=')[1];

    if(window.navigator && 'serviceWorker' in navigator) {
        if(typeof page_params.holiday_promo !== 'undefined') {
            // Adblock OFF
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                    console.log("ServiceWorker registration successful");
                }, function(err) {
                    console.log("ServiceWorker registration failed");
                });
            });
        } else {
            // Adblock ON
            navigator.serviceWorker.getRegistrations().then(function(registrations) {
                if (registrations.length > 0) {
                    for(var i = 0; i < registrations.length; i++) {
                        registrations[i].unregister();
                    }
                    console.log("ServiceWorker unregistered due to ADB");
                    //window.location.reload();
                }
            })
        }
            }
