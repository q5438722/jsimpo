
        window.thumbOnReady = function (image, error) {
            if (!image || !window.initials.frontStats || window.frontSpeedThumbLoadFinished) {
                return;
            }

            if (!window.frontSpeedThumbLoad) {
                window.frontSpeedThumbLoad = [];
            }

            window.frontSpeedThumbLoad.push({
                image,
                time: error ? null : Date.now(),
            });

            if (window.getVTR) {
                window.getVTR();
            }
        };
    