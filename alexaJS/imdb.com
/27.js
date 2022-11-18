window.addEventListener('load', (event) => {
        if (typeof window.csa !== 'undefined' && typeof window.csa === 'function') {
            var csaLatencyPlugin = window.csa('Content', {
                element: {
                    slotId: 'LoadFonts',
                    type: 'service-call'
                }
            });
            csaLatencyPlugin('mark', 'clickToBodyEnd', 1668775022013);
        }
    })