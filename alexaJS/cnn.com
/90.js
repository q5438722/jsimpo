_satellite["_runScript7"](function(event, target, Promise) {
wminst.nielsenPageBeacon = function() {
    var ci, si, rp, random;
    ci = "us-204044h";
    si = escape(window.location.href);
    rp = escape(document.referrer);
    random = +(new Date());
    wminst.Util.sendImagePixel("//secure-us.imrworldwide.com/cgi-bin/m?ci=" + ci + "&cg=0&cc=1&si=" + si + "&rp=" + rp +"&ts=compact&rnd=" + random);
};

if (!wminst.Util.isRefreshPage() && !wminst.Util.inIFrame()) {
    wminst.nielsenPageBeacon();
}
});