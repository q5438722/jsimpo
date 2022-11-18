
    window.dexter.jarvis = {
        isDesktop: (window.dexter.personalization && window.dexter.personalization.technology && window.dexter.personalization.technology.platform && window.dexter.personalization.technology.platform.type) ? window.dexter.personalization.technology.platform.type === 'desktop' : false,
    };
    window.dexter.jarvis.desktopEnabled = window.dexter.jarvis.isDesktop && true,
    window.dexter.jarvis.mobileEnabled = !window.dexter.jarvis.isDesktop && true,
    window.dexter.jarvis.lazyLoadEnabled = (!window.dexter.jarvis.isDesktop)
        ? true
        : true;

    if (window.dexter.jarvis.desktopEnabled || window.dexter.jarvis.mobileEnabled) {
        var mSurface = "";
        window.fedsConfig.jarvis = {
            surfaceName: !window.dexter.jarvis.isDesktop && mSurface ? mSurface : "homepage_loggedout_default",
            surfaceVersion: "1.83",
            getContext: (window.dexter && window.dexter.callbacks) ? window.dexter.callbacks.getContext : null,
            directConfig:  {
                lazyLoad: window.dexter.jarvis.lazyLoadEnabled,
            },
            onDemand: true
        }
    }
    