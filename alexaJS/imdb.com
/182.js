window.addEventListener('load', (event) => {
        if (typeof window.csa !== 'undefined' && typeof window.csa === 'function') {
            var csaLatencyPlugin = window.csa('Content', {
                element: {
                    slotId: 'LoadFooterJS',
                    type: 'service-call'
                }
            });
            csaLatencyPlugin('mark', 'clickToLoaded', 1668775022013);
        }
    })