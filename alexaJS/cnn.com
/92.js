_satellite["_runScript9"](function(event, target, Promise) {
try {
    requirejs(["//i.cdn.turner.com/analytics/comscore/streamsense.5.2.0.160629.min.js"], function() {});
} catch (e) {
    wminst.Util.loadScript("//s.cdn.turner.com/analytics/comscore/streamsense.5.2.0.160629.min.js");
}

PubSub.subscribe("Player_Ready", function(data) {
    if (typeof wminst.myStreamingTag != "undefined") {
        wminst.myStreamingTag.stop();
    }
    wminst.myStreamingTag = new ns_.StreamingTag({
        customerC2: "6035748"
    });
});
PubSub.subscribe("cs_video-preroll", function(data) {
    if (typeof wminst.myStreamingTag != "undefined") {
        wminst.myStreamingTag.stop();
    }
    if (!wminst.prev_vid) { //first video
        wminst.myStreamingTag = new ns_.StreamingTag({
            customerC2: "6035748"
        });
    } else if (wminst.prev_vid && wminst.prev_vid !== data.id) { //new video
        wminst.myStreamingTag = new ns_.StreamingTag({
            customerC2: "6035748"
        });
    } else if (wminst.completed_vid && wminst.completed_vid == data.id) {
        wminst.completed_vid = "";
        wminst.myStreamingTag = new ns_.StreamingTag({
            customerC2: "6035748"
        });
    }
    wminst.prev_vid = data.id;
    var clength = data.ad_duration || 0;
    try {
        clength = parseInt(clength);
        if (clength % 1000 !== 0) {
            clength = clength * 1000;
        }
    } catch (e) {
        clength = 0;
    }
    var cs_ucfr = wminst.Util.isTagConsented("comscore") ? "1" : "0";
    var metadata = {
        ns_st_cl: clength || 3000,
        cs_ucfr: cs_ucfr
    };
    if (ns_) {
        ns_.StreamingTag.AdType = {
            BrandedOnDemandContent: "34",
            BrandedOnDemandLive: "35",
            BrandedOnDemandMidRoll: "32",
            BrandedOnDemandPostRoll: "33",
            BrandedOnDemandPreRoll: "31",
            LinearLive: "21",
            LinearOnDemandMidRoll: "12",
            LinearOnDemandPostRoll: "13",
            LinearOnDemandPreRoll: "11",
            Other: "00"
        };
    }
    var atype = ns_.StreamingTag.AdType.LinearOnDemandPreRoll;
    if (data.adType && data.adType.toLowerCase() === "midroll") { atype = ns_.StreamingTag.AdType.LinearOnDemandMidRoll; } 
    if (data.adType && data.adType.toLowerCase() === "postroll") { atype = ns_.StreamingTag.AdType.LinearOnDemandPostRoll; } 
    if (data.isLive && (data.isLive == "true" || data.isLive == true)) {
        atype = ns_.StreamingTag.AdType.LinearLive;
    }
    wminst.myStreamingTag.playVideoAdvertisement(metadata, atype);
});
PubSub.subscribe("cs_ad-complete", function(data) {
    if (typeof wminst.myStreamingTag != "undefined") {
        wminst.myStreamingTag.stop();
    }
});
PubSub.subscribe("cs_video-play", function(data) {
    if (typeof wminst.myStreamingTag != "undefined") {
        wminst.myStreamingTag.stop();
    }
    if (!wminst.prev_vid) { //first video
        wminst.myStreamingTag = new ns_.StreamingTag({
            customerC2: "6035748"
        });
    } else if (wminst.prev_vid && wminst.prev_vid !== data.id) { //new video
        wminst.myStreamingTag = new ns_.StreamingTag({
            customerC2: "6035748"
        });
    } else if (wminst.completed_vid && wminst.completed_vid == data.id) {
        wminst.completed_vid = "";
        wminst.myStreamingTag = new ns_.StreamingTag({
            customerC2: "6035748"
        });
    }
    wminst.prev_vid = data.id;
    var clength = data.trt || 0;
	var c4 = "CNN";
	var c3 = "*null";
	var c6 = "*null";
    try {
        clength = parseInt(clength);
        if (clength % 1000 !== 0) {
            clength = clength * 1000;
        }
    } catch (e) {
        clength = 0;
    }
    var adate = data.timestamp || "";
    try {
        if (adate) {
            adate = new Date(adate);
            adate = adate.toISOString().substring(0, 10);
        }
    } catch (e) {}
    if (window.location.hostname.indexOf("edition") != -1) {
        c4 = "CNNI";
		c3 = "CNNEDITION";
    }
    if (typeof data.category != 'undefined' && data.category.toLowerCase() === "spanish") {
        c4 = "CNNESPANOL";
    }
    if (typeof data.category != 'undefined' && data.category.toLowerCase() === "cnnmoney") {
        c4 = "CNNMONEY";
    }
	var ch = wminst.Util.getCNNSection(0) || "";
	var pn = {
			"entertainment":	"CNNENT",
			"health":		      "CNNHEALTH",
			"politics":		    "CNNPOLITICS",
			"tech":			      "CNNTECH",
			"travel":		      "CNNTRAVEL",
			"us":			        "CNNUS",
			"world":		      "CNNWORLD",
			"opinions":		    "CNNOPINION",
			"living":		      "CNNLIVING",
			"cnn homepage":	  "CNNHOME",
			"ireport":        "IREPORT",
			"justice":        "CNNJUSTICE",
			"elections":      "CNNPOLITICS",
			"style":			    "CNNSTYLE"
		} [ch];
	if (pn) { c4 = pn; }
	if(pn && ch == "elections"){ c6 = "ELECTION";}
  if (wminst.isMoneyVideo(data)) {
     		c4 = "CNNBUSINESS";
     		c6 = "BUSINESS";
   }
    var cs_ucfr = wminst.Util.isTagConsented("comscore") ? "1" : "0";
    var metadata = {
        ns_st_ci: data.id,
        ns_st_cl: clength,
        ns_st_st: "*null",
        ns_st_pu: "CNN",
        ns_st_pr: data.subcategory || "*null",
        ns_st_ep: data.headline || "*null",
        ns_st_sn: "*null",
        ns_st_en: "*null",
        ns_st_ge: data.category || "*null",
        ns_st_ia: "0",
        ns_st_ce: "0",
        ns_st_ddt: "*null",
        ns_st_tdt: adate || "*null",
        c3: c3,
        c4: c4,
        c6: c6,
        cs_ucfr: cs_ucfr
    };
    if (ns_) {
        ns_.StreamingTag.ContentType = {
            Bumper: "99",
            Live: "13",
            LongFormOnDemand: "12",
            Other: "00",
            ShortFormOnDemand: "11",
            UserGeneratedLive: "23",
            UserGeneratedLongFormOnDemand: "22",
            UserGeneratedShortFormOnDemand: "21"
        };
    }
    var vtype = ns_.StreamingTag.ContentType.ShortFormOnDemand;
    if (data.content_type && data.content_type == "episode") {
        vtype = ns_.StreamingTag.ContentType.LongFormOnDemand;
    }
    if (data.id && data.id.indexOf("cvplive") != -1  ) {
        vtype = ns_.StreamingTag.ContentType.Live;
    }
    if (data.isLive && data.isLive == "true") {
        vtype = ns_.StreamingTag.ContentType.Live;
    }
    wminst.myStreamingTag.playVideoContentPart(metadata, vtype);
});
PubSub.subscribe("cs_video-pause", function(data) {
    if (typeof wminst.myStreamingTag != "undefined") {
        wminst.myStreamingTag.stop();
    }
});
PubSub.subscribe("cs_video-resume", function(data) {
    if (typeof wminst.myStreamingTag != "undefined") {
        wminst.myStreamingTag.stop();
    }

    var clength = data.trt || 0;
	var c4 = "CNN";
	var c3 = "*null";
	var c6 = "*null";
    try {
        clength = parseInt(clength);
        if (clength % 1000 !== 0) {
            clength = clength * 1000;
        }
    } catch (e) {
        clength = 0;
    }
    var adate = data.timestamp || "";
    try {
        if (adate) {
            adate = new Date(adate);
            adate = adate.toISOString().substring(0, 10);
        }
    } catch (e) {}
    if (window.location.hostname.indexOf("edition") != -1) {
        c4 = "CNNI";
		c3 = "CNNEDITION";
    }
    if (typeof data.category != 'undefined' && data.category.toLowerCase() === "spanish") {
        c4 = "CNNESPANOL";
    }
    if (typeof data.category != 'undefined' && data.category.toLowerCase() === "cnnmoney") {
        c4 = "CNNMONEY";
    }
	var ch = wminst.Util.getCNNSection(0) || "";
	var pn = {
			"entertainment":	"CNNENT",
			"health":		      "CNNHEALTH",
			"politics":		    "CNNPOLITICS",
			"tech":			      "CNNTECH",
			"travel":		      "CNNTRAVEL",
			"us":			        "CNNUS",
			"world":		      "CNNWORLD",
			"opinions":		    "CNNOPINION",
			"living":		      "CNNLIVING",
			"cnn homepage":	  "CNNHOME",
			"ireport":        "IREPORT",
			"justice":        "CNNJUSTICE",
			"elections":      "CNNPOLITICS",
			"style":			    "CNNSTYLE"
		} [ch];
	if (pn) { c4 = pn; }
	if(pn && ch == "elections"){ c6 = "ELECTION";}
  if (wminst.isMoneyVideo(data)) {
     		c4 = "CNNBUSINESS";
     		c6 = "BUSINESS";
   }
    var cs_ucfr = wminst.Util.isTagConsented("comscore") ? "1" : "0";
    var metadata = {
        ns_st_ci: data.id,
        ns_st_cl: clength,
        ns_st_st: "*null",
        ns_st_pu: "CNN",
        ns_st_pr: data.subcategory || "*null",
        ns_st_ep: data.headline || "*null",
        ns_st_sn: "*null",
        ns_st_en: "*null",
        ns_st_ge: data.category || "*null",
        ns_st_ia: "0",
        ns_st_ce: "0",
        ns_st_ddt: "*null",
        ns_st_tdt: adate || "*null",
        c3: c3,
        c4: c4,
        c6: c6,
        cs_ucfr: cs_ucfr
    };
    if (ns_) {
        ns_.StreamingTag.ContentType = {
            Bumper: "99",
            Live: "13",
            LongFormOnDemand: "12",
            Other: "00",
            ShortFormOnDemand: "11",
            UserGeneratedLive: "23",
            UserGeneratedLongFormOnDemand: "22",
            UserGeneratedShortFormOnDemand: "21"
        };
    }
    var vtype = ns_.StreamingTag.ContentType.ShortFormOnDemand;
    if (data.content_type && data.content_type == "episode") {
        vtype = ns_.StreamingTag.ContentType.LongFormOnDemand;
    }
    if ( data.id && data.id.indexOf("cvplive") != -1 ){
        vtype = ns_.StreamingTag.ContentType.Live;
    }
    if (data.isLive && data.isLive == "true") {
        vtype = ns_.StreamingTag.ContentType.Live;
    }
    wminst.myStreamingTag.playVideoContentPart(metadata, vtype);
});
PubSub.subscribe("cs_video-complete", function(data) {
    wminst.completed_vid = data.id;
    if (typeof wminst.myStreamingTag != "undefined") {
        wminst.myStreamingTag.stop();
    }
});
PubSub.subscribe("Video_Completed", function(data) {
    wminst.completed_vid = data.id;
    if (typeof wminst.myStreamingTag != "undefined") {
        wminst.myStreamingTag.stop();
    }
});
});