
    if ('serviceWorker' in navigator
        && (
            (typeof isPwaVersion !== 'undefined' && isPwaVersion)
            || (typeof isForcedWorker !== 'undefined' && isForcedWorker)
        )
    ) {
        navigator.serviceWorker.getRegistrations().then(
            function (registrations) {
                for (var i = 0; i < registrations.length; i++) {
                    var registration = registrations[i];

                    if (registration.active && registration.active.scriptURL.match(/\/(service-worker|service-worker-fake)\.js$/)) {
                        registration.unregister();
                    }
                }
            }
        );

        navigator.serviceWorker.register('https://xhamster.com/pwa.js')
            .catch(function (err) {
                console.warn('Service worker registration failed: ', err.message)
            });
    }
