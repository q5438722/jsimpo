
            setTimeout(function() {
                (function (win, cfg) {
                    win._ybar_runtime_config = win._ybar_runtime_config || {};
                    Object.keys(cfg).forEach(function (key) {
                        win._ybar_runtime_config[key] = cfg[key];
                    });
                })(window, {"property":"homepage","device":"desktop","locale":"en-US","bucketConfig":{"enable_search_ui":true,"highlight_searchassist":true,"overlay_class":"darker","scrollThreshold":4},"componentCount":0,"i18n":{"root":{"PROPERTY_NAME":"Yahoo Home","LITE_UPGRADE_PROMPT_MESSAGE":"Some parts of this page are not supported on your current browser version. Please upgrade to a recent browser version.","NOTIF_ONBOARD_UPSELL_TITLE":"Get news push notification","NOTIF_ONBOARD_UPSELL_SUBTITLE":"Keep up with the best stories in News, Sports, Finance, Entertainment and more!","NOTIF_ONBOARD_UPSELL_CTA":"Turn On","NOTIF_ONBOARD_UPSELL_CLOSE":"Not now","SEARCH_TOOLTIP_VOICE":"Search with voice","SEARCH_TOOLTIP_WEB":"Search the web"}}}); $_mod_ybar && $_mod_ybar.ready();
            }, 500); // adding delay to YBAR init to wait base page rapid initialization
        