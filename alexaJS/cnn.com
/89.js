_satellite["_runScript6"](function(event, target, Promise) {
wminst.bomboraPageBeacon = function() {
    if (!window._ml) {
        (function (w,d,t){
         _ml = w._ml || {};
         _ml.nq = w._ml.nq || [];
         _ml.nq.push(['track', '64240', {fp: 'YOUR_USER_ID'}]);
         var s, cd, tag; s = d.getElementsByTagName(t)[0]; cd = new Date();
         tag = d.createElement(t); tag.async = 1;
         tag.src = 'https://cdn.ml314.com/taglw.js';
         s.parentNode.insertBefore(tag, s);
        })(window,document,'script');
    } else {
        _ml.nq = window._ml.nq || [];
        _ml.nq.push(['track', '64240']);
    }
};

PubSub.subscribe("dynamic-page", function(data) {
    wminst.bomboraPageBeacon();
});

PubSub.subscribe("tab-page", function(data) {
    wminst.bomboraPageBeacon();
});

PubSub.subscribe("cnnsearch-results", function(data) {
    wminst.bomboraPageBeacon();
});

PubSub.subscribe("weather-page", function(data) {
    wminst.bomboraPageBeacon();
});

PubSub.subscribe("picker-pageview", function(data) {
    wminst.bomboraPageBeacon();
});

PubSub.subscribe("readmore-page", function(data) {
    wminst.bomboraPageBeacon();
});

PubSub.subscribe("breaking-news", function(data) {
    if (data.domain && (data.domain == "cnn.com" || data.domain == "us.cnn.com" || data.domain == "sweet.next.cnn.com" || data.domain == "edition.cnn.com")) {
        // Do Nothing
    } else {
        wminst.bomboraPageBeacon();
    }
});


/* ============== Page Load ============= */
if (!wminst.Util.isDynamicPage() && !wminst.Util.isFavePage() && !wminst.Util.inIFrame()) { 
    wminst.bomboraPageBeacon();
}
});