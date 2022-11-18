
            if (!window.IntersectionObserver) {
                window.dexter.geoRouting = window.dexter.geoRouting || {};
                window.dexter.dxf = window.dexter.dxf || { apps: [] };
                window.dexter.dxf.registerApp = function (app) {
                    window.dexter.dxf.apps.push(app);
                };

                var s = document.createElement('script');
                s.onload = function () { document.dispatchEvent(new Event('dexter:headPolyfillLoaded')) }
                s.src = "/etc.titan.dexterlibs/dexter/clientlibs/base/headPolyfills.fp-ee86cd7980437cbb104ab2f9ff7e59b5.js";
                s.type = "text/javascript"; s.async = false;
                document.head.appendChild(s);
                window.dexter.utils.headPolyfill = true;
            }
        