_satellite["_runScript10"](function(event, target, Promise) {
wminst.comscorePageBeacon = function() {
    var c_id = "6035748";
    var cs_ucfr = wminst.Util.isTagConsented("comscore") ? "1" : "0";
    var _comscore = window._comscore = _comscore || [];
    if (wminst.Util.isFBIAPage() === true) {
        var comscorekw = "fbia";
        _comscore.push({ c1: "2", c2: c_id, cs_ucfr: cs_ucfr, options:{url_append: "comscorekw=fbia"}});
    } else {
        _comscore.push({ c1: "2", c2: c_id, cs_ucfr: cs_ucfr });
    }
    
    try {
        if (window.COMSCORE) {
            COMSCORE.beacon(_comscore[0]);
            wminst.Util.sendImagePixel("//cdn.cnn.com/analytics/cnn/comscore-pageview-candidate.json");
        } else {
            var protocol = document.location.protocol == "https:" ? "https://sb" : "http://b";
            wminst.Util.loadScript(protocol + ".scorecardresearch.com/beacon.js");
        }
    } catch (e) {}
};

PubSub.subscribe("dynamic-page", function(data) {
    wminst.comscorePageBeacon();
});

PubSub.subscribe("tab-page", function(data) {
    wminst.comscorePageBeacon();
});

PubSub.subscribe("cnnsearch-results", function(data) {
    wminst.comscorePageBeacon();
});

PubSub.subscribe("weather-page", function(data) {
    wminst.comscorePageBeacon();
});

PubSub.subscribe("picker-pageview", function(data) {
    wminst.comscorePageBeacon();
});

PubSub.subscribe("cnngallery-click", function(data) {
    wminst.comscorePageBeacon();
});

PubSub.subscribe("readmore-page", function(data) {
    wminst.comscorePageBeacon();
});

PubSub.subscribe("breaking-news", function(data) {
    if (data.domain && (data.domain == "cnn.com" || data.domain == "us.cnn.com" || data.domain == "sweet.next.cnn.com" || data.domain == "edition.cnn.com")) {
        // Do Nothing
    } else {
        wminst.comscorePageBeacon();
    }
});


/* ============== Page Load ============= */
if (!wminst.Util.isDynamicPage() && !wminst.Util.isFavePage() && !wminst.Util.inIFrame()) { 
    wminst.comscorePageBeacon();
}


});