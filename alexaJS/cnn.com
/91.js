_satellite["_runScript8"](function(event, target, Promise) {
PubSub.subscribe("cnnvideo-start", function(data) {
    wminst.nielsenVideoBeacon("dav0", data);
});

PubSub.subscribe("cnnvideo-autostart", function(data) {
    wminst.nielsenVideoBeacon("dav0", data);
});

PubSub.subscribe("cnnvideo-live", function(data) {
    wminst.nielsenVideoBeacon("dav0", data, "live");
});

PubSub.subscribe("cnnvideo-episode", function(data) {
    wminst.nielsenVideoBeacon("dav0", data);
});

PubSub.subscribe("cnnvideo-complete", function(data) {
    wminst.nielsenVideoBeacon("dav2", data);
});

wminst.nielsenVideoBeacon = function(state, data, cg) {
    var v = wminst.Util.getVideoMetadata(data);
    var ci, c6, tl, random, url;
    ci = "us-100120";
    c6 = (v.category && (v.category == "cnnmoney" || v.category == "business")) ? "vc,c02" : "vc,b01";
    tl = state + "-" + v.id;
    random = +(new Date());
    url = "//secure-us.imrworldwide.com/cgi-bin/m?ci=" + ci + "&c6=" + c6 + "&cc=1&tl=" + tl + "&rnd=" + random;
    if (cg) url += "&cg=" + cg;
    wminst.Util.sendImagePixel(url);
};
});