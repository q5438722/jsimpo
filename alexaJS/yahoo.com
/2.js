
        window.performance.mark('PageStart');
        document.documentElement.className += ' JsEnabled jsenabled';
        /**
        * Empty darlaOnready method, to avoid JS error.
        * This can happen when Async Darla JS file is loaded earlier than Darla Proxy JS.
        * This method will be overridden by Darla Proxy
        */
        window.darlaOnready = function() {};
        