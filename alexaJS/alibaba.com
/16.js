
            (function(window, document) {
                var SEMRC = window.SEM_REMARKETING_CONFIG || {};
                SEMRC.runtime = 'async';
                window.SEM_REMARKETING_CONFIG = SEMRC;
                var SEMRD = window.SEM_REMARKETING_DATA || {};
                SEMRD.pageType = 'home';
                SEMRD.siteName = 'home';
                window.SEM_REMARKETING_DATA = SEMRD;
                window.addEventListener('load', function() {
                    setTimeout(function() {
                        var script = document.createElement('script');
                        script.type = 'text/javascript';
                        script.src = '//i.alicdn.com/sc-affiliate/sem-remarketing/??sem-remarketing.98174a0b.js';
                        var s = document.getElementsByTagName('script')[0];
                        s.parentNode.insertBefore(script, s);
                    }, 200);
                });
            })(window, document);
        