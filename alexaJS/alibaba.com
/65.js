
    
    window.SCHD_COMS = window.SCHD_COMS || {}; 
    window.SCHD_COMS.modsConfig = window.SCHD_COMS.modsConfig || {};
    window.SC_HD_BOTTOM_BANNER_DATA = {"version":"20190313110207","nicheCode":"ICBU_PC_BOTTOM_BANNER","dynamicNicheCode":"","configuration":{"bannerHeight":"","textColor":"","bottomColor":"","hoverAniType":"1"}};
    window.SCHD_COMS.modsConfig['globalTopBanner'] = {
        modLink:'sc-global-components/20190313110207/entrances/top-banner/top-banner.css',
        modSrc:'sc-global-components/20190313110207/entrances/top-banner/top-banner.js',
        modStandaloneSrc:'sc-global-components/20190313110207/entrances/top-banner/standalone/top-banner.js'
    };
    (function () {
        window.SCHD_COMS.ready(function () {
            setTimeout(function () {
                window.SCHD_COMS.use(['globalTopBanner'], function () {
                    try {
                        var SCHdTopBanner = window.SCHdTopBanner;
                        if (typeof (SCHdTopBanner) !== 'undefined') {
                            var bottomBanner = new window.GlobalTopBanner();
                            window.SC_HD_BOTTOM_BANNER_DATA["isTopBanner"] = false;
                            bottomBanner.init(window.SC_HD_BOTTOM_BANNER_DATA);
                        }
                    } catch (e) {}
                });
            }, 1000);
        });
    })()
