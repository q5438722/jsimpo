
    if ('serviceWorker' in navigator
        && (typeof isPwaVersion === 'undefined' || !isPwaVersion)
        && (typeof isForcedWorker === 'undefined' || !isForcedWorker))
    {
        navigator.serviceWorker.getRegistrations()
            .then(
                function (registrations) {
                    for (var i = 0; i < registrations.length; i++) {
                        var registration = registrations[i];

                        if (registration.active && registration.active.scriptURL.match(/\/(service-worker|pwa)\.js$/)) {
                            registration.unregister();
                        }
                    }
                }
            );

        navigator.serviceWorker.register('https://xhamster.com/service-worker-fake.js')
            .catch(function (err) {
                console.warn('The fake worker registration failed: ', err.message)
            });
    }
