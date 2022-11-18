
        (function () {
            var waferReady = window.wafer;

            waferReady = waferReady && waferReady.ready;
            function initViewer() {
                if (window.YAHOO && window.YAHOO.viewer) {
                    window.YAHOO.viewer.init(
                        {"context":{"lang":"en-US","region":"US","site":"fp"},"yaft":{"viewerContainer":"content-viewer"}}
                    );
                }
            }
            if (waferReady) {
                waferReady(initViewer);
            } else {
                document.body.addEventListener('wafer:ready', initViewer);
            }
        })();
    