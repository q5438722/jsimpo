_satellite["_runScript1"](function(event, target, Promise) {
window.wminst = window.wminst || {};
wminst.Util = function() {
    return {
        loadCustomVariables: function() {
            this.tmsName = "launch";
            this.businessName = "cnn";
            this.buildVersion = 39; // Build Update Nov 11th 2022
            this.buildEnv = this.getBuildEnv();
            this.buildDate = this.getBuildDate();
            this.debugFlag = "WMINST_DEBUG";
            this.logPrefix = "[WMINST]";
            window.is_expansion = true;
            wminst.subscribersReady = false;
            wminst.hpt_set = 0;
            wminst.buffer_count = 0;
            wminst.is_podcast = 0;
            wminst.is_scrubbed = false;
            if (window.cnn_metadata) {
                window.is_expansion = false;
            }
        },
        getBuildEnv: function() {
            return {
                "development": "dev",
                "staging": "qa",
                "production": "prod"
            }[_satellite.environment.stage];
        },
        getBuildDate: function() {
            return _satellite.buildInfo.buildDate.split("T")[0].replace(/-/g, "");
        },
        getCNNCodeVersion: function() {
            return [this.tmsName, this.businessName, this.buildEnv, this.buildVersion, this.buildDate].join(".");
        },
        setDebug: function(flag) {
            if (flag == true) {
                sessionStorage.setItem(this.debugFlag, true);
            } else {
                sessionStorage.removeItem(this.debugFlag);
            }
        },
        log: function() {
            var logEnabled = sessionStorage.getItem(this.debugFlag);
            if (logEnabled) {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(this.logPrefix);
                console.log.apply(console, args);
            }
        },
        getTagConsentStatesV1: function(name) {
			return {
				"adobe"           	: ["perf-general"],
				"comscore"        	: ["perf-vendor"],
				"nielsen"			: ["perf-vendor"],
				"facebook-pixel"	: ["perf-vendor", "social-vendor"],
				"zion"				: ["perf-general", "person-general"],
				"app-nexus-id"		: ["ads-vendor"],
				"trackonomics"		: ["ads-general", "ads-vendor", "behavior-general", "perf-general", "person-general", "social-general", "storage-general"],
				"skimlinks"			: ["ads-vendor"],
				"quantcast"			: ["ads-vendor"],
				"amazon"			: ["ads-vendor"],
				"bounce-x"			: ["iab", "behavior-vendor", "person-vendor", "storage-vendor"],
				"chartbeat"			: ["perf-general"],
				"keywee"			: ["ads-vendor", "behavior-vendor", "storage-vendor", "perf-vendor"],
				"krux"				: ["ads-vendor"],
				"stack-sonar"		: ["ads-general"],
				"optimizely"		: ["behavior-general", "perf-general", "person-general"],
				"bombora"			: ["iab"]
			}[name];
		},
		getTagConsentStatesV2: function(name) {
			return {
				"adobe"				: ["data-store", "content-person-prof", "content-person", "measure-content", "measure-market", "product-develop"],
				"comscore"			: ["vendor", "measure-content"],
				"nielsen"			: ["vendor", "measure-content", "data-store"],
				"facebook-pixel"	: ["data-store", "ads-contextual", "ads-person-prof", "ads-person", "vendor"],
				"zion"				: ["data-store", "ads-person-prof", "ads-person", "content-person-prof", "content-person", "measure-content"],
				"app-nexus-id"		: ["vendor"],
				"trackonomics"		: ["data-store", "measure-ads", "vendor"],
                "hyphensocial"      : ["data-store", "measure-ads", "vendor"],
				"skimlinks"			: ["data-store", "measure-content", "vendor"],
				"quantcast"			: ["iab"],
				"amazon"			: ["data-store", "ads-contextual", "ads-person-prof", "ads-person", "vendor"],
				"bounce-x"			: ["iab"],
				"chartbeat"			: ["data-store", "measure-content"],
				"keywee"			: ["data-store", "ads-person-prof", "ads-person", "measure-ads", "measure-market", "vendor"],
				"krux"				: ["data-store", "ads-person-prof", "ads-person", "measure-ads", "measure-content", "measure-market"],
				"stack-sonar"		: ["data-store", "ads-contextual", "ads-person-prof", "ads-person"],
				"optimizely"		: ["data-store", "content-person-prof", "content-person", "measure-ads", "measure-content", "vendor"],
				"bombora"			: ["vendor", "data-store", "ads-person-prof", "measure-ads", "measure-content", "product-develop"],
                "outbrain-pixel"    : ["ads-person-prof", "ads-person", "measure-ads"],
                "full-story"		: ["measure-content", "product-develop"],
                "iSpot-pixel"       : ["data-store", "measure-ads", "measure-content", "measure-market", "vendor"]
			}[name];
		},
        getTagConsentStates: function(name) {
            if (window.WM && WM.UserConsent && WM.UserConsent.getVersion().indexOf("1") === 0) {
                return this.getTagConsentStatesV1(name);
            }
            return this.getTagConsentStatesV2(name);
        },
        isUSRegion: function() {
            if (window.WM && WM.UserConsent) {
                return WM.UserConsent.isInCcpaRegion();
            } else {
                return _satellite.cookie.get("countryCode") === "US";
            }
        },
        usePrismGeoCheck: function() {
            return !_satellite.cookie.get("countryCode") && this.isCNNStorePage();
        },
        isTagConsented: function(name) {
            // Special handling for AppNexus ID, and Quantcast
            if (name == "app-nexus-id" && !this.isUSRegion()) {
                return false;
            }
            if (name == "quantcast" && this.isUSRegion()) {
                return false;
            }            
            var states = this.getTagConsentStates(name);
            if (window.WM && WM.UserConsent) {
                if (WM.UserConsent.isReady() && WM.UserConsent.inUserConsentState(states, {id: name})) {
                    return true;
                }
            } else {
                return true;
            }
            return false;
        },
        isPrismEnabled: function() {
            if (window.WM && window.WM.CDP && typeof window.WM.CDP.isIdentityEnabled === "function") {
                return window.WM.CDP.isIdentityEnabled();
            }
            return false;
        },      
        inIFrame: function() {
            try {
                return window.self !== window.top;
            } catch (e) {
            return true;
            }
        },
        getQueryParam: function(key, loc) {
            if (!this.params || loc) {
            var search = loc || window.location.search;
            var params = search.replace(/^\?/, ""), paramObj = {};
            params = params.split("&");
            for (var i = 0; i < params.length; i++) {
              var t = params[i].split("=");
              paramObj[t[0]] = t[1]
            }
            if (!loc) {
                this.params = paramObj;
            } else {
              return paramObj[key] || "";
            }
          }
          return this.params[key] || "";
        },
        isSearchPage: function() {
            return window.location.pathname.indexOf("/search") === 0;
        },
        isRefreshPage: function() {
            return wminst.Util.getQueryParam("refresh");
        },
        isStellarPage: function() {
            return this.getCNNTechStack() === "stellar2.0";
        },
        isUnderscoredPage: function() {
            return (window.CNN && CNN.omniture && CNN.omniture.section && CNN.omniture.section[0] === "cnn-underscored");
        },      
        isStylePage: function() {
            return (window.CNN && CNN.omniture && CNN.omniture.section && CNN.omniture.section[0] === "style");
        },
        isTravelPage: function() {
            return (window.CNN && CNN.omniture && CNN.omniture.section && CNN.omniture.section[0] === "travel");
        },
        isElectionDynamicPage: function() {
            return window.location.pathname.match(/\/election\//) !== null && window.location.pathname.match(/20(17|18|19)/) !== null;
        },
        isUserAccountPage: function() {
            return window.location.pathname.match('/account/(register|preferences|confirm|reset-password|log-in|payment)/?.*') !== null;
        },
        isSignupPage: function() {
            return window.location.pathname.match(/\/signup\/?$/) !== null;
        },
        isNewsletterHub: function() {
            return window.location.pathname.match(/\/newsletters\/?$/) !== null;
        },
        isUnderscoredZionPage: function() {
            return window.location.pathname.match(/\/(pets\/editors-favorite-pet-products|home\/women-owned-businesses|fashion\/best-spring-dresses|reviews\/best-linen-sheets|reviews\/best-pillows)\/?$/) !== null;
        },
      	isPoliticsExplorer: function() {
            return (window.CNN && CNN.omniture && CNN.omniture.is_explorer);
        },
        isLiveStoryPage: function() {
            return window.location.pathname.indexOf("live-news") !== -1;
        },
        isLiveStoryStellarPage: function() {
            return this.isLiveStoryPage() && this.isStellarPage();
        },      
        isLiveStoryNonStellarPage: function() {
            return this.isLiveStoryPage() && !this.isStellarPage();
        },
        isCNNPlusPage: function() {
            return window.location.hostname.indexOf("plus") !== -1;
        },
        isCNNStorePage: function() {
            return window.location.hostname.indexOf("store") !== -1;
        },
        isSpeedyPage: function() {
            return window.location.hostname.indexOf("-m.cnn.com") !== -1;
        },
        isDynamicPage: function() {
            return this.isSearchPage() || this.isRefreshPage() || this.isElectionDynamicPage() || this.isLiveStoryNonStellarPage() || this.isSpeedyPage();
        },
        isLightweightPage: function() {
            return this.isUserAccountPage() || this.isNewsletterHub();
        },
        isFavePage: function() {
            return window.location.hostname.indexOf("fave.api.cnn.io") !== -1 || window.location.hostname.indexOf("fave-api.cnn.com") !== -1;
        },
        isFBIAPage: function () {
            try {
                if(window.CNN.omniture.fbia && (window.CNN.omniture.fbia === true || window.CNN.omniture.fbia === "true")){
                    return true;
                } else {
                    return false;
                }
            }catch(e){ return false;}
        },
        isLiveStoryTemplateType: function() {
            var templateType = ((window.CNN || {}).omniture || {}).template_type || {};
            return (templateType == "live story" || templateType == "article_livestory");
        },
        isEmpty: function(obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        },
        isVideoAutoStarted: function(data) {
            if (typeof data.isAutoplayAllowed !== "undefined" && typeof data.isAutostartSuccessful !== "undefined") {
                if ((data.isAutoplayAllowed === false && data.isAutostartSuccessful === false) || (data.isAutoplayAllowed === true && data.isAutostartSuccessful === false)) {
                    return false;
                } else {
                    return true;
                }
            } else if (typeof data.is_autoplay_allowed !== "undefined" && typeof data.is_autoplay_successful !== "undefined") {
                if ((data.is_autoplay_allowed === false && data.is_autoplay_successful === false) || (data.is_autoplay_allowed === true && data.is_autoplay_successful === false)) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        getVideoMetadata: function(data) {
            if (!this.isEmpty(data.video)) {
                return data.video;
            } else {
                return data;
            }
        },
        sendImagePixel: function(url) {
            var image = new Image();
            image.src = url;
            image.style.display = "none";
            image.width = 1;
            image.height = 1;
        },
        loadScript: function(src, callback) {
            var e = document.createElement('script');
            e.type = 'text/javascript';
            e.async = true;
            e.src = src;
            if (callback) {
                e.addEventListener('load', callback);
            }
            var n = document.getElementsByTagName('script')[0];
            n.parentNode.insertBefore(e, n);
        },
        getCookie: function(param, flag) {
            var r = _satellite.cookie.get(param)|| "";
            if (flag === 'c' || flag === 1) {
                _satellite.cookie.set(param, "-", -1000);
            }
            return unescape(r);
        },
        getCNNEvent: function() {
            var rval = wminst.Util.getCNNBrandingPartner();
            var tt = ""; var cctype = "";
            var pathName = window.location.pathname;
            var pathNameArray = pathName.split("/");
            if(typeof window.CNN !== 'undefined' && typeof window.CNN.omniture !== 'undefined' &&  typeof window.CNN.omniture.template_type !== 'undefined'){
                tt = window.CNN.omniture.template_type;
            }
            if( typeof window.CNN !== 'undefined' && typeof window.CNN.omniture !== 'undefined' &&  typeof window.CNN.omniture.cap_content_type !== 'undefined'){
                cctype = window.CNN.omniture.cap_content_type;
            }
            var events = "";
            if(rval == "" || rval == "nvs" || rval == "no value set" || rval == "no-value-set"){
               events =  "event26";   
            } else {
                events =  "event21,event26";
            }
            if(tt == "article" || cctype == "article"){
                events = events + ",event39";
            }
            if (tt !== "error" && pathNameArray[1] == "video-day") {
                events = events + ",event63";
            }
            if (tt !== "error" && pathName.indexOf("/account/register") > -1) {
                events = events + ",event51";
            }
            return events;
        },
        getCNNBusinessName: function() {
            return "cnn";
        },
        getCNNCampaign: function(){
           if (wminst.Util.isFBIAPage()) {
               return "fbia";
           }
           return;
        },
        getCNNDomainName: function() {
          var hostname = window.location.hostname.toLowerCase();
          hostname = hostname.replace("www.","");
          return hostname;
        },
        getCNNPageURL: function() { //s.pageURL or g variable
            var rval = window.location.href.toLowerCase(), loc = "";
            if (wminst.Util.isFBIAPage()) {
                loc = rval;
                rval = "";
                if (loc.indexOf("ofs=fbia") > -1) {
                    loc = loc.replace("ofs=fbia", "csr=fbiacnn"); //suppressing string which is not expected as per new requirement
                }
                var jj = (loc.indexOf("?") != -1 ? "&" : "?");
                if (loc.indexOf("csr=fbiacnn") > -1) {
                    rval = loc + "";
                } else {
                    rval = loc + jj + "csr=fbiacnn"; // added expected substring
                }
            }
            return rval;
        },
        getCNNPageType: function() {
            var rval = "";
            try {
                var title = document.title.toLowerCase();
                if (title.indexOf("page not found") !== -1 || wminst.Util.getCNNTemplateType() == "adbp:error" || title == "error") {
                    rval = "errorPage";
                }
            } catch (err) {}
            return rval;
        },
        getCNNAuthor: function() { //prop2,eVar2 - business.cnn.page.author
            var rval = "";
            if (window.is_expansion) {
                try {
                    rval = window.cnn_d.omniture.cap_author;
                } catch (e) {}
                try {
                    rval = window.CNN.omniture.cap_author.toString();
                } catch (e) {}
            } else {
                try {
                    rval = window.cnn_metadata.business.cnn.page.author;
                } catch (e) {}
                if (!rval) {
                    if (document.getElementsByName("AUTHOR").item(0)) {
                        rval = document.getElementsByName("AUTHOR").item(0).content;
                    } else if (document.getElementsByName("author").item(0)) {
                        rval = document.getElementsByName("author").item(0).content;
                    }
                }
            }
            if (typeof rval === "undefined" || rval == "no-value-set" || rval == "nvs") rval = "";
            return rval.toLowerCase();
        },
        getPageAttribution: function() { //prop4,eVar4 - page HPlocation
            var rval = "";
            var ishptCookie = false;
            var hptcookie = wminst.Util.getCookie("hpt");
            var linkTrackingCookie = wminst.Util.getCookie("linkTracking");
            var regex = new RegExp("^[A-Za-z0-9=]+$");
            if ((typeof linkTrackingCookie == 'undefined' || linkTrackingCookie == "") && typeof hptcookie !== 'undefined') {
                ishptCookie = true;
            }
            var attributionCookie = linkTrackingCookie || hptcookie;
            if ((typeof attributionCookie != "undefined" && attributionCookie != "" && attributionCookie.indexOf("breaking:") != -1) || !regex.test(attributionCookie)) {
                rval = attributionCookie;
            } else if (document.referrer.indexOf("cnn.com") !== -1) {
                rval = wminst.Util.getQueryParam("linkTracking") || wminst.Util.getQueryParam("hpt");
                try {
                    rval = rval.replace(/no\-value\-set/g, "");
                } catch (e) {}
                var prev_rval = rval;
                try {
                    if (attributionCookie) {
                        rval = attributionCookie;
                        if (attributionCookie.indexOf("_") === -1 && attributionCookie.indexOf("|") === -1 && typeof window.CNN.Utils.b64Decode(attributionCookie) !== 'undefined') {
                            rval = window.CNN.Utils.b64Decode(attributionCookie);
                        }
                    }
                } catch (e) {}
                if (rval) {
                    wminst.hpt_set = 1;
                } else {
                    rval = prev_rval;
                }
                //document.cookie = "hpt=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
            }
            if (window.is_expansion != 0) {
                if (wminst.Util.getQueryParam("cnnapp") && wminst.Util.getQueryParam("cnnapp") != null) {
                    rval = "cnnapp:" + wminst.Util.getQueryParam("cnnapp");
                }
                if (wminst.Util.getQueryParam("eref") && wminst.Util.getQueryParam("eref") != null) {
                    rval = "eref:" + wminst.Util.getQueryParam("eref");
                }
                if (wminst.Util.getQueryParam("iref") && wminst.Util.getQueryParam("iref") != null) {
                    rval = "iref:" + wminst.Util.getQueryParam("iref");
                }
                if (wminst.Util.getQueryParam("refresh") && wminst.Util.getQueryParam("refresh") != null) {
                    rval = "auto-refresh";
                }
            }
            if(rval !== "") {
              rval = rval.replace(/no-value-set/g, "nvs");
              rval = rval.toLowerCase();   
            }
            if (ishptCookie) {
                document.cookie = "hpt=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.cnn.com;";
            } else {
                document.cookie = "linkTracking=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.cnn.com;";
            }
            return rval;
        },
        getPhotoGalleryName: function(){ //prop6,eVar6 - Photo Gallery name
            var rval = "";
            if(typeof window.CNN !== 'undefined' && typeof window.CNN.omniture !== 'undefined' && typeof window.CNN.omniture.gallery_name !== 'undefined'){
                rval = window.CNN.omniture.gallery_name;
                rval = rval.toLowerCase();
            }
            return rval;
        },
        getCNNVisitNumber: function(rollday) { //prop8,eVar8 - visit_number.$30Day  
            rollday = rollday || 28; //default rolling day is 28
            var todaydate = new Date().getTime();
            if (typeof(Storage) !== "undefined") { //check for web storage support
                if (localStorage.startdate) { //check for start date
                    if (sessionStorage.online) { //check for session variable
                        var daysinceonline = Math.ceil((todaydate - sessionStorage.online) / 86400000);
                        if (daysinceonline > 1) { //if session is older than 24 hours, reset session start time and count as a visit
                            localStorage.visittype = "repeat"; //set visit type (new vs repeat)
                            localStorage.visitnum = Number(localStorage.visitnum) + 1; //increment visit number
                            sessionStorage.online = todaydate; //set session variable
                        }
                    } else { //new session
                        localStorage.visittype = "repeat"; //set visit type (new vs repeat)
                        localStorage.visitnum = Number(localStorage.visitnum) + 1; //increment visit number
                        sessionStorage.online = todaydate; //set session variable
                    }
                    var daysincestart = Math.ceil((todaydate - localStorage.startdate) / 86400000);
                    if (daysincestart > Number(rollday)) { //if days since start date is greater than rolling day, set new start date
                        localStorage.startdate = todaydate;
                        localStorage.visittype = "new";
                        localStorage.visitnum = 1;
                    }
                } else { //first new visit
                    localStorage.startdate = todaydate; //set new start date
                    localStorage.visittype = "new"; //set visit type (new vs repeat)
                    localStorage.visitnum = 1; //set visit number
                    sessionStorage.online = todaydate; //set session variable
                }
                return localStorage.visittype + ":" + localStorage.visitnum;
            } else {
                return "new:1";
            }
        },
        getCNNCapMediaType: function() {
            var rval = "nvs";
            try{
                if (window.CNN && window.CNN.omniture && window.CNN.omniture.cap_media_type) {
                    if (window.CNN.omniture.cap_media_type === "no-value-set"){
                        rval = "nvs";
                    } else {
                        rval = window.CNN.omniture.cap_media_type;
                    }
                }
            rval = rval.toLowerCase();              
            } catch(e) {}
            return rval;
        },
        getCNNPublishDate: function() {
            var rval = "";
            try {
                rval = window.cnn_metadata.business.cnn.page.publish_date
            } catch (e) {}
            try {
                if (window.CNN && window.CNN.omniture && window.CNN.omniture.publish_date ) {
                    rval = window.CNN.omniture.publish_date;
                }
                if (rval && window.CNN && window.CNN.omniture && window.CNN.omniture.last_updated_date) {
                    rval = rval + "|" + window.CNN.omniture.last_updated_date;
                }
            
            } catch (e) {}
            try {
                if (!rval && window.cnn_d && window.cnn_d.omniture && window.cnn_d.omniture.publish_date) {
                    rval = window.cnn_d.omniture.publish_date;
                }
        
            } catch (e) {}
            return rval;
        },
        populatePublishDate: function(){
            var rval = wminst.Util.getCNNPublishDate();
            var etype = ["content","other:live story","adbp:article_livestory","gallery"];
            var rttype = wminst.Util.getCNNTemplateType("long");
            var result = false;
            if (typeof rttype !== 'undefined') {
               for(var i in etype){
                  if(rttype.indexOf(etype[i]) != -1){
                      result  = true;
                  }
                }
            }
           if (result) {
              return rval;
           } else {
              return "";
           }
        },
        getCNNDaysSinceLastPublish: function(d) { //prop10,eVar10 - days_since_publish
            var e = new Date();
            var p;
            var j;
            if (d == 'a') {
                try {
                    d = window.cnn_metadata.business.cnn.page.publish_date;
                } catch (err) {}
                try {
                    d = window.CNN.omniture.publish_date || d;
                } catch (err) {}
                j = new Date(d);
            } else if (d.toString().indexOf("/") != -1) {
                p = d.split("/");
                if (p[0].length != 4) {
                    p[2] = "20" + p[2];
                    j = new Date(p[2] + "/" + p[0] + "/" + p[1]);
                } else {
                    j = new Date(d);
                }
            } else {
                j = new Date(d);
            }
            var ONE_DAY = 1000 * 60 * 60 * 24;
            var date1_ms = e.getTime();
            var date2_ms = j.getTime();
            var difference_ms = Math.abs(date1_ms - date2_ms)
            var days = Math.round((difference_ms / ONE_DAY))
            if (isNaN(days)) {
                return "";
            }
            if (window.is_expansion != 0) {
                return Math.round((difference_ms / ONE_DAY)).toString()
            } else if (window.is_expansion == 0 && typeof window.cnn_metadata.days_since_publish !== "undefined") {
                try {
                    return window.cnn_metadata.days_since_publish;
                } catch (err) {}
            }
        },
        populateDaysSinceLastPublish: function(){
            var rval =  wminst.Util.getCNNDaysSinceLastPublish("a");
            var etype = ["content:","other:live story","adbp:article_livestory"];
            var rttype = wminst.Util.getCNNTemplateType("long");
            var result = false;
            if (typeof rttype !== 'undefined') {
                for(var i in etype){
                    if (rttype.indexOf(etype[i]) != -1){
                        result  = true;
                    }
                }
            }
            if(result) {
                return rval;
            } else {
                return "";
            }
        },
        getCNNBrandingPartner: function() { //prop11,eVar11 - page branding content partner
            var rval = "";
            var bp = "";
            try {
                rval = (cnn_metadata.business.cnn.page.branding_partner ? cnn_metadata.business.cnn.page.branding_partner : window.cnnOmniPartner || "");
            } catch (e) {}
            try {
                if (typeof window.CNN.omniture.branding_content_page != 'undefined') {
                    bp = window.CNN.omniture.branding_content_page;
                    bp = bp.replace("default", "");
                    if (bp) {
                        rval = "p:" + bp;
                    }
                }
            } catch (e) {}
            try {
                if (window.CNN.omniture.branding_gallery || (bp && window.CNN.contentModel.analytics.pageTop.type === 'gallery')) {
                    rval = "g:" + (window.CNN.omniture.branding_gallery ? window.CNN.omniture.branding_gallery : bp);
                }
            } catch (e) {}
            try {
                if (typeof window.CNN.omniture.template_type != 'undefined' && window.CNN.omniture.template_type == "error") {
                    rval = ""; //suppressed branding partner(prop11,eVar11) value for error page
                }
            } catch (e) {}
            return rval.toLowerCase();
        },
        getCNNCapContentType: function (){ //prop13,eVar13 - cap_content_type
            var rval = "";
            try {
                if(window.CNN.contentModel && window.CNN.contentModel.analytics.pageTop.type === 'gallery'){
                    rval = "gallery";
                } else {
                    rval = window.CNN.omniture.cap_content_type;
                }
                rval = rval.toLowerCase();
            } catch(e) {
                rval = "";
            }
            return rval;
        },
        getCNNCapGenre: function (){ //prop5,eVar5 - cap genre
            var rval = "";
            if(window.CNN && window.CNN.omniture && typeof window.CNN.omniture.cap_genre != "undefined"){
                if( window.CNN.omniture.cap_genre == "" || window.CNN.omniture.cap_genre == "no-value-set")
                    rval = "nvs";
                else
                    rval = window.CNN.omniture.cap_genre.toLowerCase();
            }               
            return rval;
        },
        getCNNBrandingSocial: function() { //prop14,eVar14 - Branding Social
            var rval = "";
            try {
                if (window.CNN && window.CNN.omniture) {
                    if (window.CNN.omniture.fbia === true) {
                        rval = window.CNN.omniture.branding_social;
                    }
                }
            } catch(err) {}
            try {
                if (window.navigator.userAgent && window.navigator.userAgent == "cnn-mobile-app") {
                    return window.navigator.userAgent;
                }
            } catch(err){}
            var hostName = window.location.hostname;
            if (hostName.indexOf("fave.api.cnn.io") != -1 || hostName.indexOf("fave-api.cnn.com") != -1) {
                var pathName = window.location.pathname;
                if (pathName.indexOf("/v1/amp") != -1) {
                    rval = "google amp"; //google amp
                }
                if (pathName.indexOf("/v1/fav") != -1) {
                    rval = "embed"; //embed
                }
            }
            rval = rval.toLowerCase();
            return rval;
        },
        getCNNTrafficPartner: function() { // eVar15 - Traffic Partner
           var rval = "";
           try {
             rval = _satellite.cookie.get("FastAB");
           } catch(err) {}
           return rval;
        },
        getIreportgetMember: function() { //prop17,eVar17 - ireport member
            var irptMember = wminst.Util.getCNNAuthenticated("authid", "displayname", "member", "anonymous", "NonMember", "?");
            if (window.location.host.indexOf("politics") == -1 && window.is_expansion != 0) {
                return irptMember;
            } else {
                return null;
            }
        },
        getCNNPageImpression: function() { //prop18,eVar18 - page impressions
            var rval = window.cnnPSproducts || "";
            var hptcookie = wminst.Util.getCookie("hpt2");
            if (document.referrer.indexOf("cnn.com") > -1) {
                try {
                    if (hptcookie) {
                        rval = hptcookie;
                        if (hptcookie.indexOf("_") == -1) {
                            rval = CNN.Utils.b64Decode(hptcookie);
                        }
                    }
                } catch(e) {}
                //document.cookie = "hpt2=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
            } else {
                if (hptcookie) {
                    document.cookie = "hpt2=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.cnn.com;";
                }
            }
            rval = rval.replace(/no-value-set/g, "nvs");
            rval = rval.toLowerCase();
            return rval;
        },
        getCNNVideoOpportunity: function() { //eVar22 - video embed count
          var rval = "0";
          var ttype = "";
          try { rval = window.cnn_metadata.business.cnn.page.video_embed_count; } catch(e) {}
          try { rval = window.CNN.omniture.video_opportunity || "0"; } catch(e) {}
          ttype = wminst.Util.getCNNTemplateType();
          if (typeof ttype !== 'undefined' && ttype.indexOf("adbp:index") > -1) {
            rval = "";
          }
          return rval;
        },
        getCNNPageHeadline: function() { //prop23,eVar23 - page headline
            var rval = "nvs", tt = "";
            try {   
                rval = window.CNN.omniture.headline;
                tt   = window.CNN.omniture.template_type;
            } catch(e) {}
            try {   
                if(typeof window.cnn_d != "undefined" && typeof window.cnn_d.omniture != "undefined" && window.cnn_d.omniture.headline != "undefined"){
                rval = window.cnn_d.omniture.headline;
                tt   = window.cnn_d.omniture.template_type;
                }
            } catch(e) {}
            try {
                if(rval == "no-value-set" || tt == "specials" || tt == "section front" || tt == "index") {return null;}
                rval = rval.toLowerCase();
            } catch(e) {rval = "";}
            return rval;
        },
        getCNNFullPageName: function(pathname,delimiter) {
            var s_pageName = "";
            var templateTypeSmall = "";
            if (!delimiter) delimiter = ":";
            var ttbefore = wminst.Util.getCNNTemplateType("long");
            if (ttbefore) { //default to "other" if template type is not defined
                ttbefore = ttbefore.replace(/adbp./,"");
                templateTypeSmall = wminst.Util.getADBPTranslateTemplateType(ttbefore, "short")
            } else {
                templateTypeSmall = "o";
            }
            var buc_p32 = wminst.Util.getCNNBusinessName() + delimiter + templateTypeSmall;
            var thirdLevelDomain = wminst.Util.getADBPURL("domain", 3);
            var fullDomain = wminst.Util.getADBPURL("domain");
            var lastTwoDomain = /(\.\w+\.\w+)$/.exec(fullDomain);
            if (lastTwoDomain) thirdLevelDomain = fullDomain.replace(lastTwoDomain[0],"");
            //if (!pathname) pathname = _jsmd.plugin.gADBPURL("path");
            if (!pathname) {
                var p = window.location.pathname.toLowerCase();
                var a = p.split('/');
                var l = a.length;
                var r = /^index./;
                pathname = (r.test(a[(l-1)])) ? p.replace(/([^\/]+\.[^\/]+$)/,"") : p;
                r = /([^\/]+\.[^\/]+$)/;
                if (!r.test(pathname)){
                    l = pathname.length;
                    if(pathname.charAt(l-1) !== "/"){pathname = pathname+"/";}
                }
            }
            if (thirdLevelDomain == "") {
                s_pageName = buc_p32 + delimiter + pathname;
            }else{
                s_pageName = buc_p32 + delimiter + thirdLevelDomain + delimiter + pathname;
            }
            return s_pageName;
        },
        getCNNPageName: function(pname) { //pageName,eVar26 - page.name
            var rval = wminst.Util.getCNNFullPageName(pname);
            var ttype = "";
            try {
                if (typeof window.CNN.omniture !== 'undefined' && typeof window.CNN.omniture.template_type !== 'undefined') {
                    ttype = window.CNN.omniture.template_type;
                }
            }catch(e){ttype = "";}
            try {
                if (ttype === "" && typeof window.cnn_d.omniture === 'undefined' && typeof window.cnn_d.omniture.template_type !== 'undefined') {
                    ttype = window.cnn_d.omniture.template_type;
                }
            }catch(e){}
            // www-m.cnn.com = cnn.com; us-m.cnn.com = cnn.com; edition-m.cnn.com = edition.cnn.com
            var arr = rval.split(":");
            if (arr.length == 4) {
                arr[2] = arr[2].replace(/-m$/, "");
                arr[2] = arr[2].replace("www", "");
                if (arr[2] == "us") {
                   arr[2] = arr[2].replace("us", "");
                }
                arr[2] = arr[2].replace(/\.$/, "");
                if (arr[2] === "") arr.splice(2, 1);
            }
            rval = arr.join(":");
            if (window.is_expansion && rval.match(/cnn:o:/)) {
                var pn = {
                    "index": "in",
                    "video": "v",
                    "videos": "v",
                    "blog": "b",
                    "blogs": "b",
                    "game": "g",
                    "games": "g",
                    "interactive": "it",
                    "content": "c",
                    "error": "err",
                    "section": "sf",
                    "section front": "sf",
                    "gallery": "ga",
                    "show": "sh",
                    "shows": "sh",
                    "special": "sp",
                    "specials": "sp",
                    "topic": "t",
                    "profile": "p",
                    "article": "c"
                } [ttype];
                if (pn) {
                    rval = rval.replace("cnn:o:", "cnn:" + pn + ":");
                }
            }
            if (rval && rval.slice(-1) != "/") {
                rval = rval + "/";
            }
            if (rval && rval.match(/h_[a-z0-9]+\/$/)) {
                rval = rval.replace(/h_[a-z0-9]+\/$/, ""); //remove last folder ID
            }
            return rval;
        },
        getCNNBaseURL: function() { //prop26 - Base URL
            var hostname = window.location.hostname;
            var pathname = window.location.pathname;
            pathname = pathname.replace(/([^\/]+\.[^\/]+$)/,"");
            return hostname + pathname;
        },
        getCNNSection: function(position) { //channel/eVar27, prop28/eVar28
            var rval = "";
            try {
                if (window.is_expansion) {
                    for (var i = 0; i <= position; i++) {
                        if (i > 0) {
                            rval += ":";
                        }
                        try {
                            var s1 = window.CNN.omniture.section[i];
                            if ((s1.indexOf(":")) && (s1.indexOf("electoral college map") > -1)) {
                                var c1 = s1.split(':');
                                rval += c1[0];
                                return rval;
                            }
                        } catch (e) {}
                        if (typeof window.CNN != 'undefined' && typeof window.CNN.omniture != 'undefined') {
                            if (i == 1 && !window.CNN.omniture.section[1]) { //add default value "no value set" for subsection (prop28/eVar28)
                                window.CNN.omniture.section[1] = "no value set";
                                try {
                                    if (window.CNN.omniture.friendly_name.toLowerCase() == "ngtv") {
                                        window.CNN.omniture.section[1] = "";
                                    }
                                } catch (e) {}
                            }
                        }
                        if (window.cnn_d && window.cnn_d.omniture && window.cnn_d.omniture.section[i]) {
                            try {
                                rval += window.cnn_d.omniture.section[i] || "";
                            } catch (e) {}
                        } else {
                            try {
                                rval += window.CNN.omniture.section[i] || "";
                            } catch (e) {}
                        }
                    }
                    try {
                        if (typeof window.CNN.omniture !== 'undefined' && window.CNN.omniture.template_type == "list" && position == 0 && rval == "") { //use first path of URL for list pages
                            rval = wminst.Util.getADBPURL("path", 1);
                        }
                    } catch (e) {}
                } else {
                    window.cnn_metadata.section = (typeof window.cnn_metadata.section != "string" ? window.cnn_metadata.section : window.JSON.parse(window.cnn_metadata.section));
                    rval = (window.cnn_metadata.section[position] ? window.cnn_metadata.section[position] : "");
                }
            } catch (e) {}
            return rval;
        },
        getCNNPageFranchise: function() { //prop31,eVar31 - page_franchise
            var rval = "";
            try { rval = cnn_metadata.business.cnn.page.broadcast_franchise || rval; } catch(e) {}
            try { rval = CNN.omniture.cap_show_name || rval; } catch(e) {}
            rval = rval.toLowerCase();
            return rval;
        },
        getCNNTemplateType: function(lookupType) { //prop32,eVar32 - page template_type
            var hostName = window.location.hostname;
            var rval = "";
            if (window.is_expansion) {
                var pfix = "other:";
                if (typeof window.CNN !== 'undefined' && typeof window.CNN.omniture !== 'undefined' && typeof window.CNN.omniture.template_type !== 'undefined' && window.CNN.omniture.template_type.match(/index|video|blog|game|interactive|content|error|section|gallery|show|special|topic|profile|article|calendar|candidate summary|state summary/)) {
                    pfix = "adbp:"
                }
                rval = pfix;
                if (typeof window.CNN !== 'undefined' && typeof window.CNN.omniture !== 'undefined' && typeof window.CNN.omniture.template_type !== 'undefined' && window.CNN.omniture.template_type == 'article') {
                    try {
                        if (typeof window.CNN.contentModel !== 'undefined' && typeof window.CNN.contentModel.analytics !== 'undefined' && typeof window.CNN.contentModel.analytics.pageTop !== 'undefined' && typeof window.CNN.contentModel.analytics.pageTop.type !== 'undefined' && window.CNN.contentModel.analytics.pageTop.type === 'gallery') {
                            rval = "content: gallery";
                        } else if (typeof window.CNN.contentModel !== 'undefined' && typeof window.CNN.contentModel.analytics !== 'undefined' && typeof window.CNN.contentModel.analytics.pageTop !== 'undefined' && typeof window.CNN.contentModel.analytics.pageTop.type !== 'undefined' && (window.CNN.contentModel.analytics.pageTop.type === 'video' || window.CNN.contentModel.analytics.pageTop.type === 'video360')) {
                            if (typeof window.CNN.contentModel !== 'undefined' && window.CNN.contentModel.analytics.isArticleVideoCollection) {
                                rval = "content:video:collection";
                            } else {
                                rval = "content:video:nocollection";
                            }
                        } else if (window.CNN.omniture.cap_content_type !== 'undefined' && window.CNN.omniture.cap_content_type === 'gallery') {
                            rval = "content: gallery";
                        } else {
                            if (window.CNN.omniture.cap_media_type === 'Video') {
                                rval = "content:video";
                            } else {
                                rval = "content: no media";
                            }
                        }   
                    } catch(e){}
                    
                } else if (hostName.indexOf("fave.api.cnn.io") != -1 || hostName.indexOf("fave-api.cnn.com") != -1) {
                    rval = "adbp:content";
                } else if (typeof window.cnn_d !== 'undefined' && typeof window.cnn_d.omniture !== 'undefined') {
                    try {
                        if (window.cnn_d.omniture.section[0] == "cnn-underscored") {
                            rval = "adbp:" + window.cnn_d.omniture.template_type;
                        }
                    } catch (e) {}
                } else {
                    try {
                        rval = window.CNN.omniture.template_type;
                        if (rval && rval.indexOf("other") === -1) {
                            rval = pfix + rval;
                        }
                    } catch (e) {}
                }
            } else {
                var templateTypeCode = "";
                if (typeof CNN != 'undefined' && typeof CNN.omniture != 'undefined' && typeof CNN.omniture.template_type != 'undefined') {
                    templateTypeCode = CNN.omniture.template_type;
                } else if (typeof cnn_metadata != 'undefined') {
                    templateTypeCode = cnn_metadata.template_type;
                } else if (typeof window.cnn_d != 'undefined' && typeof window.cnn_d.omniture != 'undefined' && typeof window.cnn_d.omniture.template_type != 'undefined') {
                    templateTypeCode = window.cnn_d.omniture.template_type;
                }
                var adbpprefix = "adbp:";
                rval = ["o", "other"];
                var lookup = {
                        b: "blog",
                        g: "game",
                        it: "interactive",
                        c: "content",
                        "in": "index",
                        err: "error",
                        e: "ecom",
                        s: "signup",
                        v: "video",
                        sf: "section front",
                        sr: "search results",
                        fm: "forum",
                        o: "other",
                        ir: "ireport",
                        sp: "specials",
                        pm: "perfect market",
                        bf: "blog front",
                        bc: "blog category",
                        t: "topic",
                        w: "weather",
                        el: "election"
                    },
                    lookupRev = {
                        "blog": "b",
                        "game": "g",
                        "interactive": "it",
                        "content": "c",
                        "index": "in",
                        "error": "err",
                        "ecom": "e",
                        "signup": "s",
                        "video": "v",
                        "section front": "sf",
                        "search results": "sr",
                        "forum": "fm",
                        "other": "o",
                        "ireport": "ir",
                        "specials": "sp",
                        "perfect market": "pm",
                        "blog front": "bf",
                        "blog category": "bc",
                        "topic": "t",
                        "weather": "w",
                        "election": "el"
                    };
                if (lookup[templateTypeCode] != null) {
                    rval = [templateTypeCode, lookup[templateTypeCode]];
                }
                if (lookupRev[templateTypeCode] != null) {
                    rval = [lookupRev[templateTypeCode], templateTypeCode];
                }
                var parameters = {
                    c1: 'ireport',
                    c2: 'search results',
                    c3: 'perfect market',
                    c4: 'specials',
                    c5: 'blog front',
                    c6: 'blog category',
                    c7: 'topic',
                    c8: 'weather',
                    c9: 'election'
                }
                for (var p in parameters) {
                    if (templateTypeCode == parameters[p]) {
                        adbpprefix = "other:";
                    }
                }
                rval[1] = adbpprefix + rval[1];
                if (lookupType == "short") {
                    rval = rval[0];
                }
                if (lookupType == "long") {
                    rval = rval[1];
                }
            }
            if(typeof rval == "string") { 
				rval = rval.toLowerCase();
			}
            return rval;
        },
        getCNNContentType: function(defaultVal) { //prop33,eVar33 - content_type
            var omnitureRef = (window.cnn_d && window.cnn_d.omniture) || (window.CNN && window.CNN.omniture);
            if (typeof omnitureRef === 'undefined') {
                return defaultVal;
            }

            var tt = "",
                ct = "";
            if (typeof window.cnn_d != 'undefined' && typeof window.cnn_d.omniture != 'undefined' && typeof window.cnn_d.omniture.template_type != 'undefined') {
                tt = window.cnn_d.omniture.template_type;
                ct = "adbp:" + window.cnn_d.omniture.content_type;

            } else {
                if (typeof window.CNN.omniture !== "undefined" && typeof window.CNN.omniture.content_type !== "undefined" && window.CNN.omniture.content_type){
                    ct = window.CNN.omniture.content_type;
                } else {
                    ct = "adbp:none";
                }
                if (typeof ct !== 'undefined' && (ct == "none" || ct == "")) {
                    ct = "adbp:none";
                }
                tt = window.CNN.omniture && window.CNN.omniture.template_type;
            }
            var l = {
                "adbp:blog": ["blog.read", "adbp:blog read"],
                "adbp:content": ["article.read", "adbp:article read"],
                "adbp:game": ["game.play", "adbp:game played"],
                "other:ireport": ["other.ireport", "other:ireport"],
                "other:photo wall": ["content.interactive", "other:photo wall"]
            } [tt];
            var m = {
                "adbp:article read": "article.read"
            } [ct];
            if (m !== null) {
                if (typeof ct !== 'undefined' && ct.indexOf("pivit") !== -1) {
                    return tt + ":" + ct;
                } else {
                    return ct;
                }
            }
            if (!l) {
                return defaultVal;
            }
            return l[1];
        },
        getCNNAuthenticated: function(c1, c2, truevalue, falsevalue, neutralvalue, flag) { //prop34,eVar34 - user authenticated
            var rValue = 0;
            if (wminst.Util.getCookie(c1, flag)) {
                rValue++;
            }
            if (wminst.Util.getCookie(c2, flag)) {
                rValue++;
            }
            if (rValue == 0) {
                return falsevalue;
            } else if (rValue == 1) {
                return neutralvalue;
            } else {
                return truevalue;
            }
        },
        getCNNKruxID: function() { // eVar36 - KruxID
            var rval = "";
            try {
                rval = localStorage.kxkuid;
            } catch (err) {}
            return rval;
        },
        getCNNPlatform: function() { //prop37,eVar37 - page platform
            var rval = "";
            if (navigator.userAgent.match(/iPhone/i)) {
                rval = "smartphone";
            } else if (navigator.userAgent.match(/iPad/i)) {
                rval = "tablet";
            } else if (navigator.userAgent.match(/android/i)) {
                if (navigator.userAgent.match(/mobile/i)) {
                    rval = "smartphone";
                } else {
                    rval = "tablet";
                }
            } else {
                rval = "desktop";
            }
            return rval ? rval : "no value set";
        },
        getCNNSearchInternalKeyword: function() { //prop39,eVar39 - search internal keyword
            var rval = "";
            try {
                rval = wminst.Util.getQueryParam("query");
            } catch(e){}
            return rval;
        },
        getLSPostPosition: function() { //eVar45 - Post Position
            var rval = "";
            try {
                if (this.isLiveStoryTemplateType()) {
                    var post_position = window.CNN.omniture.post_position ? window.CNN.omniture.post_position : 1;
                    var total_post = window.CNN.omniture.total_post ? window.CNN.omniture.total_post : 0;
                    rval = post_position + ":" + total_post;
                }   
            } catch(e) {}
            return rval;
        },
        getCNNPostID: function() { //prop43 - Post ID
            var rval = null;
            var pathName = window.location.pathname;
            if(window.CNN && window.CNN.omniture &&  typeof window.CNN.omniture.post_id != 'undefined' && window.CNN.omniture.post_id != "") {
                rval = window.CNN.omniture.post_id;
            } else {
                 try{
                    pathName = pathName.replace(/\/$/, "");
                    var path_array = pathName.split("/");
                    rval = path_array[path_array.length - 1];
                    if(rval.match(/(^h_)[a-z0-9]+$/) === null){
                        rval = null;
                    }
                } catch(e) {}
            }         
            try {
                if (this.isLiveStoryTemplateType()) {
                    // Do Nothing
                } else {
                   rval = "";
                }  
            } catch(e) {}
            return rval;
        },
        getCNNPageVertical: function() { //eVar44 - Page Vertical
            var rval = "";
            try {
                if(window.CNN && window.CNN.contentModel && window.CNN.contentModel.vertical){
                    rval = CNN.contentModel.vertical;
                    rval = rval.toLowerCase();
                }
            } catch(e){}
            return rval;
        },
        getCNNSourceID: function(){ //prop44 - Source ID
            var rval = "";
            try {
                if(typeof window.CNN != 'undefined' && typeof window.CNN.omniture != 'undefined' && window.CNN.omniture.sourceId) {
                        rval = window.CNN.omniture.sourceId;
                    } else if(window.CNN && window.CNN.contentModel && window.CNN.contentModel.sourceId){
                        rval = window.CNN.contentModel.sourceId;
                }
                rval = rval.toLowerCase();
            } catch(e) {}
            return rval;    
        },
        getCNNTransactionID: function() { // prop46,eVar46
            var rval = "";
            try {
                if (typeof window.cnnad_transactionID !== 'undefined') {
                    rval = window.cnnad_transactionID;
                } else if (typeof window.cnnad_getTransactionID === "function") {
                    rval = cnnad_getTransactionID();
                } else {
                    rval = Math.round((new Date()).getTime() / 1000) + "" + Math.floor(Math.random()*9007199254740992);
                }
            } catch (e) {}
            return rval;
        },
        getCNNGUID: function() { // prop47,eVar47
            var rval = "";
            try {
                if (typeof window.turner_getGuid === "function") {
                    rval = turner_getGuid("ug");
                } else {
                    rval =  _satellite.cookie.get("ug");
                }
            } catch (e) {}
            return rval;
        },
        getAppNexusID: function() {
            var rval = "";
            try {
                if (this.isTagConsented("app-nexus-id")) {
                    rval =  _satellite.cookie.get("zwmc");
                }
            } catch (e) {}
            return rval
        },
        getWMID: function(name) {
            var rval = "";
            try {
                if (window.WM) {
                    var obj = window.WM.PSM || window.WM.CDP || {};
                    var fn = obj["get"+name];
                    if (typeof fn === "function") {
                        rval = fn();
                    }
                }
            } catch (e) {}
            return rval;
        },
        getWMUKID: function() {
            var rval = "";
            try {
                rval = this.getCookie('WMUKID_STABLE');

                if (!rval) {
                    var wmukidJSON = wminst.Util.getCookie("WMUKID");
                    var wmukidObj = JSON.parse(wmukidJSON);
                    rval = wmukidObj.id;
                }

            } catch (e) {}
            return rval
        },
        setATTWMID: function() {
            try {
                if (s.linkTrackVars.indexOf("eVar195") == -1) {
                    s.linkTrackVars += ",eVar195,eVar197,eVar198,eVar199";
                }

                s.eVar195 = this.getAppNexusID();
                s.eVar197 = this.getWMUKID();
                s.eVar198 = this.getWMID("WMHHID");
                s.eVar199 = this.getWMID("WMINID");
            } catch (e) {}
        },
        getCNNTechStack: function() { //eVar48 - Site Tech Stack
            var dataLayer = (window.CNN || {}).contentModel || {};
            return (dataLayer.techStack || "").toLowerCase();
        },
        getCNNCMSId: function() { //eVar49 - CMS ID
            var rval = "";
            try {
                if(window.CNN && window.CNN.contentModel && window.CNN.contentModel.cmsId){
                    rval = CNN.contentModel.cmsId;
                }
            } catch(e){}
            return rval;
        },
        getCNNPreviousPageName: function(){ //prop49,eVar49 - Previous PageName
            var rval = "";
            try {
                if(this.isTagConsented('adobe')) {
                    var pName = window.document.referrer;
                    var prevP = s.getPreviousValue(wminst.Util.getCNNPageName(),"cnprevpage_pn");
                    if (prevP && typeof pName != "undefined" && pName != "" && pName.indexOf(".cnn.com") != -1) {
                        return prevP;
                    }
                }
            } catch(e) {return rval;}
            return rval;
        },
        getCNNPostTitle: function() { //prop50 - Post Title
            var rval = "";
            try{
                if(window.CNN && window.CNN.omniture && window.CNN.omniture.post_title) {
                    rval = window.CNN.omniture.post_title;
                } else { 
                    rval = document.title;
                }
            } catch(e) { rval = document.title; }
            rval = rval.toLowerCase();
            try {
                var dom_obj = $x("//script[@type='application/ld+json']");
                var post_obj = JSON.parse(rval[rval.length - 1]).innerHTML;
                if(post_obj && post_obj.headline){
                     rval = post_obj.headline;
                } 
            } catch(e) {}
            try {
                if (this.isLiveStoryTemplateType()) {
                   // Do Nothing
                } else {
                   rval = "";
                }  
            } catch(e) {}
            if(rval !== "") {
                rval = rval.replace(/\([0-9]+\)/, "").trim();
            }
            return rval;
        },
        getCNNBreakingNewsHP: function(ptt, chnl) {
            var rval = "";
            var tt = "";
            try {
                if (ptt.indexOf(":") != -1) {
                    if (ptt.indexOf("adbp") != -1) {
                        ptt = ptt.split(":");
                        tt = ptt[1];
                    } else {
                        ptt = ptt.split(":");
                        tt = ptt[0];
                    }
                } else {
                    tt = ptt;
                }
                var abr = {
                    "index": "in",
                    "video": "v",
                    "videos": "v",
                    "blog": "b",
                    "blogs": "b",
                    "game": "g",
                    "games": "g",
                    "interactive": "it",
                    "content": "c",
                    "error": "err",
                    "section": "sf",
                    "section front": "sf",
                    "gallery": "ga",
                    "show": "sh",
                    "shows": "sh",
                    "special": "sp",
                    "specials": "sp",
                    "topic": "t",
                    "profile": "p",
                    "article": "c"
                } [tt];
                if (chnl && (chnl == "homepage" || chnl == "cnn homepage")) {
                    chnl = "index";
                }
                if (tt) {
                    rval = "breaking:" + chnl + ":" + abr + ":";
                }
                return rval;
            } catch (e) {}
        },
        getCNNOrientation: function() { //prop56,eVar56 - page orientation
            var rval = "no value set";
            try {
                var x = 0;
                if (self.innerHeight) {
                    x = self.innerWidth;
                } else if (document.documentElement && document.documentElement.clientHeight) {
                    x = document.documentElement.clientWidth;
                } else if (document.body) {
                    x = document.body.clientWidth;
                }
                var y = 0;
                if (self.innerHeight) {
                    y = self.innerHeight;
                } else if (document.documentElement && document.documentElement.clientHeight) {
                    y = document.documentElement.clientHeight;
                } else if (document.body) {
                    y = document.body.clientHeight;
                }
                rval = (y > x) ? "portrait" : "landscape";
            } catch (e) {}
            return rval;
        },
        getCNNMVPD: function() { //prop57,eVar57 - MVPD
            try {
                var mvpd_store = wminst.Util.getCookie("CNNmvpd");
                if (typeof mvpd_store !== "undefined" && mvpd_store !== "nvs" && mvpd_store !== "") {
                    if (mvpd_store !== null && typeof CNN.omniture.mvpd === "string") {
                        document.cookie = "CNNmvpd=" + CNN.omniture.mvpd + "; domain= .cnn.com ;";
                        mvpd_store = wminst.Util.getCookie("CNNmvpd");
                        return mvpd_store;
                    } else if (typeof mvpd_store === "string" && mvpd_store != "") {
                        if (typeof CNN.omniture.mvpd === "string") {
                            document.cookie = "CNNmvpd=" + CNN.omniture.mvpd + ";  domain= .cnn.com ;";
                            mvpd_store = wminst.Util.getCookie("CNNmvpd");
                            return mvpd_store;
                        } else {
                            
                            return mvpd_store;
                        }
                    } else if (mvpd_store === null && typeof CNN.omniture.mvpd === "string") {
                        document.cookie = "CNNmvpd=" + CNN.omniture.mvpd + ";  domain= .cnn.com ;";
                        mvpd_store = wminst.Util.getCookie("CNNmvpd");
                        return mvpd_store;
                    } else {
                        return "no mvpd set";
                    }
                } else {
                    return "no mvpd set";
                }
            } catch (err) {return "no mvpd set";}
        },
        getCNNAdobeID: function() { //prop59,eVar59 - Adobe Harsh ID
            try {
                var adobe_hash_id_store = _satellite.cookie.get("adobe_hash_id");
                if (typeof adobe_hash_id_store !== "undefined" && adobe_hash_id_store !== "nvs" && adobe_hash_id_store !== "") {
                    if (adobe_hash_id_store !== null && typeof CNN.omniture.adobe_hash_id === "string") {
                        document.cookie = "adobe_hash_id=" + CNN.omniture.adobe_hash_id + "; domain= .cnn.com;";
                        adobe_hash_id_store = _satellite.cookie.get("adobe_hash_id");
                        return adobe_hash_id_store;
                    } else {
                        return "no mvpd set";
                    }
                } else {
                    return "no mvpd set";
                }
            } catch (err) {}
        },
        getCNNPlayerState: function(video) { //eVar67 player State
            var screenState = video.screen_state || "nvs";
            var screenPosition = video.screen_position || "nvs";
            var audioState = video.audio_state || "nvs";
            var playerState = "";
            try {
                if (screenState == "nvs" && CNN && CNN.omniture && CNN.omniture.screen_state) {
                    screenState = CNN.omniture.screen_state;
                }
                if (audioState == "nvs") {
                    if (video.muted === true) {
                        audioState = "muted";
                    } else if (video.muted === false) {
                        audioState = "audio on";
                    }
                }
                playerState = screenState + "|" + audioState + "|" + screenPosition;
                playerState = playerState.toLowerCase();
            } catch (e) {}
            return playerState;
        },
        getCNNVisitorID: function(id) { //eVar73 - page visitorId
            var rval = "";
            try {
                rval = _satellite.cookie.get(id);
                rval = rval.replace(/\[(.+?)\]/g, "");
                rval = rval.split("|")[1];
                rval = rval.toLowerCase();
            } catch (err) {}
            return rval;
        },
        getCNNHierachy: function() { // hier1 - Hierachy
            var rval = "";
          /*  try {
                var bUnit = wminst.Util.getSiteSpecificSettings(1);
                var channel = wminst.Util.getCNNSection(0);
                var domain = wminst.Util.getADBPURL("domain");
                var section2 = wminst.Util.getCNNSection(1);
                rval = "news|cnn|" + bUnit + "|" + domain + "|" + channel + "|" + section2; 
            } catch(e){} */
            return rval;
        },
        getCNNUserAuthState: function() { //prop75,eVar75 - User Authentication State
            try {
                var user_auth_state_store = localStorage.getItem("user_auth_state");
                if (user_auth_state_store !== null && typeof window.CNN.omniture.user_auth_state === "string") {
                    localStorage.setItem("user_auth_state",window.CNN.omniture.user_auth_state);
                    user_auth_state_store = localStorage.getItem("user_auth_state");
                    return user_auth_state_store;
                } else if (typeof user_auth_state_store === "string") {
                    if (typeof window.CNN.omniture.user_auth_state === "string") {
                        
                        localStorage.setItem("user_auth_state",window.CNN.omniture.user_auth_state);
                        user_auth_state_store = localStorage.getItem("user_auth_state");
                        return user_auth_state_store;
                    } else {
                        
                        return user_auth_state_store;
                    }
                } else if (user_auth_state_store === null && typeof window.CNN.omniture.user_auth_state === "string") {
                    localStorage.setItem("user_auth_state",window.CNN.omniture.user_auth_state);
                    user_auth_state_store = localStorage.getItem("user_auth_state");
                    return user_auth_state_store;
                } else {
                    return "nvs";
                }
            } catch (err) {return "";}
        },
        getCNNUIEngagement: function() { //prop64 - UI Engagement
            var rval = "";
            try {
                rval = window.CNN.omniture.friendly_name.toLowerCase();
            } catch(e) {}
            if (rval != "ngtv") { rval = "cnn news"; }
            try { 
                if(typeof window.cnn_metadata.friendly_name != 'undefined') {
                    rval = window.cnn_metadata.friendly_name;
                }
            } catch(e) {}
            return rval;
        },
        getCNNTopicAvailability: function() {
            var topic_pattern = new RegExp(/^[0-9a-z,]+$/);
            try {
                var rval = wminst.Util.getCNNTopic();
                if(rval == ""){
                    return "no topics";
                } else if(topic_pattern.test(rval)) {
                    return "topics available";
                } else { 
                    return "api request failure";
                }
            } catch(e) {}
        },
        getCNNTopic: function() {
            var rval = "";
            var cap_array = [];
            try {
                if(CNN && CNN.cep_topics && CNN.cep_topics.cep_brsf && CNN.cep_topics.cep_iabt && CNN.cep_topics.cep_sent && CNN.cep_topics.cep_tags) {
                    cap_array = cap_array.concat(CNN.cep_topics.cep_brsf, CNN.cep_topics.cep_iabt, CNN.cep_topics.cep_sent, CNN.cep_topics.cep_tags);
                    rval = cap_array.toString();
                } else {
                    rval = window.CNN.omniture.cap_topic;
                }
                if(typeof rval == "undefined" || rval === "no-value-set" ||  rval == "" ) {rval = "";}
            } catch(e) {}
            return rval.toLowerCase();
        },
        getCEPTopisForVideo: function(data) {
            var rval = "";
            try {
                if(typeof data.cepTopics == "object") {
                    rval = Object.keys(data.cepTopics).toString();
                }
                rval = rval.toLowerCase();
            } catch (e) {}
            return rval;
        },
      	getCNNSiteSectionLevel3: function(val) { //prop51 - Site section level 3 for politics
			var rval = "";
			try {
				rval = wminst.Util.getCNNSection(1);
				if(typeof val != 'undefined') {
					rval += ":" + val;
				} else if(CNN && CNN.omniture && CNN.omniture.section && typeof CNN.omniture.section[2] != 'undefined') {
					rval += ":" + CNN.omniture.section[2];
				}
			} catch (e) {}
			return rval;
		},
        getCNNInteractiveState: function(data) { //eVar50 - Interactive State for politics
            var rval = "";
            if(typeof data == 'undefined' && window.location.hash === "#my_election") {
                rval = "election center:my election:panel open";
                return rval;
            }
            if (typeof data == "object" && (typeof data.tab != 'undefined' || typeof data.map_state != 'undefined' || typeof data.map_level != 'undefined')) {
                var tab = data.tab || "nvs";
                var map_state = data.map_state || "nvs";
                if(!wminst.Util.isPoliticsExplorer()) {
                    if (typeof data.action != 'undefined') {
                        var map_level = data.map_level || "nvs";
                        var race_type = data.race_type || "nvs";
                        var overlay_type = data.overlay_type || "nvs";
                        var show_by = data.show_by || "nvs";
                        rval = "ec:" + race_type + ":" + map_level + ":" + overlay_type + ":" + show_by;
                    }
                    else
                        rval = "election center:" + tab + ":" + map_state;
                } else {
                    var year = data.year || "nvs";
                    var comparison_layer = data.comparison_layer || "nvs";
                    var e_val = data.election || "nvs";
                    rval = tab + ":" + year + ":" + e_val + ":" + comparison_layer + ":" + map_state;
                }
                rval = rval.toLowerCase();
            }
            return rval
        },
        getSiteSpecificSettings: function(type, section) {
            var hostName = window.location.hostname;
            var port = window.location.port;
            var setting;
            var sites = {
                "cnn": ["cnn-adbp-domestic", "cnn domestic", "cnn", "metrics.cnn.com", "smetrics.cnn.com", "us-100120", "b01", "00001", "8587204"],
                "cnndev": ["cnn-adbp-domestic-dev", "cnn domestic", "cnn", "metrics.cnn.com", "smetrics.cnn.com", "us-100120", "b01", "00001", "8587204"],
                "cnnintl": ["cnn-adbp-intl", "cnn international", "cnn", "metrics.cnn.com", "smetrics.cnn.com", "us-100120", "b01", "00002", "8587278"],
                "cnnintldev": ["cnn-adbp-intl-dev", "cnn international", "cnn", "metrics.cnn.com", "smetrics.cnn.com", "us-100120", "b01", "00002", "8587278"],
                "ireport": ["cnnireport-adbp", "cnn ireport", "cnnireport", "metrics.cnn.com", "smetrics.cnn.com", "us-702210", "c01", "00001", "3002212"],
                "ireportdev": ["cnnireport-adbp-dev", "cnn ireport", "cnnireport", "metrics.cnn.com", "smetrics.cnn.com", "us-702210", "c01", "00001", "3002212"]
            }

            var c4 = {
                val1: ["cnn homepage", "8587211", "8587278"],
                val2: ["crime", "8587220"],
                val3: ["us", "8587228"],
                val4: ["world", "8587235"],
                val5: ["entertainment", "8587242"],
                val6: ["politics", "8587248"],
                val7: ["health", "8587254"],
                val8: ["tech", "8587261"],
                val9: ["living", "8587266"],
                val10: ["opinion", "8587272"],
                val11: ["watch cnn", "8587204"]
            }

            if (section && section != "") {
                var x = 0;
                for (x in c4) {
                    if (c4[x][0] == section) {
                        setting = c4[x][1];
                        if (section == "cnn homepage") {
                            if (hostName.indexOf("edition.cnn.com") != -1) {
                                setting = c4[x][2];
                            } else if (hostName.indexOf("jcmsdev8.cnn.com") != -1 || hostName.indexOf("jcmsref.cnn.com") != -1 || hostName.indexOf("cnnpreview.cnn.com") != -1 || hostName.indexOf("ref.cnn.com") != -1 || hostName.indexOf("preview.cnn.com") != -1) {
                                if (port.indexOf("94") != -1 || hostName.indexOf("edition") != -1) {
                                    setting = c4[x][2];
                                }
                            }
                        }
                        break;
                    }
                }
            } else {
                if (hostName.indexOf("ireportqa.cnn.com") != -1) {
                    setting = sites.ireportdev[type];
                } else if (hostName.indexOf("jcmsdev8.cnn.com") != -1 || hostName.indexOf("jcmsref.cnn.com") != -1 || hostName.indexOf("cnnpreview.cnn.com") != -1 || hostName.indexOf("ref.cnn.com") != -1 || hostName.indexOf("preview.cnn.com") != -1 || hostName.indexOf("dev.cnn.com") != -1 || hostName.indexOf("stage.cnngo.com") != -1 || hostName.indexOf("travel.cnngo.com") != -1 || hostName.indexOf("edition.stage.next.cnn.com") != -1 || hostName.indexOf("cnnpreview.turner.com") != -1 || hostName.indexOf("dev.cnnv2.com") != -1 || hostName.indexOf("ref.cnnv2.com") != -1 || hostName.match(/^(dev|qa|stage).(www|us|edition)-m.cnn.com/) || hostName.indexOf("edition.enable.next.cnn.com") != -1 || hostName.indexOf("terra.next.cnn.com") != -1 || hostName.indexOf("politics.next.cnn.com") !== -1 || hostName.indexOf("edition.politics.next.cnn.com") !== -1) {
                    if (port.indexOf("94") != -1 || hostName.indexOf("edition") != -1 || hostName.indexOf("cnnespanol") != -1 || hostName.indexOf("stage.cnngo.com") != -1 || hostName.indexOf("travel.cnngo.com") != -1) {
                        setting = sites.cnnintldev[type];
                    } else {
                        setting = sites.cnndev[type];
                    }
                } else if (hostName.indexOf("qai.cnn.com") != -1) {
                    setting = sites.cnndev[type];
                } else if (hostName.indexOf("cnn.staging.perfectmarket.com") != -1 || hostName.indexOf("cnn.staging2.perfectmarket.com") != -1 || hostName.indexOf("beta-cronkite.cnnlabs.com") != -1 || hostName.indexOf("dev-audioplayer-cnn.s3.amazonaws.com") != -1) {
                    setting = sites.cnndev[type];
                } else if (hostName.indexOf("darwin-dev.hope.ui") != -1 || hostName.indexOf("dev-facts-first.cnnlabs.com")!= -1) {
                    setting = sites.cnndev[type];
                } else if (hostName.indexOf("int-facts-first.cnnlabs.com") != -1) {
                    setting = sites.cnnintldev[type];
                } else if (hostName.indexOf("ireport.cnn.com") != -1) {
                    setting = sites.ireport[type];
                } else if (hostName.indexOf("edition.cnn.com") != -1 || hostName.indexOf("cnnespanol.cnn.com") != -1 || hostName.indexOf("backstory.blogs.cnn.com") != -1 || hostName.indexOf("inthefield.blogs.cnn.com") != -1 || hostName.indexOf("securityfiles.blogs.cnn.com") != -1 || hostName.indexOf("thecnnfreedomproject.blogs.cnn.com") != -1 || hostName.indexOf("ukelection.blogs.cnn.com") != -1 || hostName.indexOf("amanpour.blogs.cnn.com") != -1 || hostName.indexOf("screeningroom.blogs.cnn.com") != -1 || hostName.indexOf("internationaldesk.blogs.cnn.com") != -1 || hostName.indexOf("newsstream.blogs.cnn.com") != -1 || hostName.indexOf("prism.blogs.cnn.com") != -1 || hostName.indexOf("thebrief.blogs.cnn.com") != -1 || hostName.indexOf("insidethemiddleeast.blogs.cnn.com") != -1 || hostName.indexOf("connecttheworld.blogs.cnn.com") != -1 || hostName.indexOf("business.blogs.cnn.com") != -1 || hostName.indexOf("questmeansbusiness.blogs.cnn.com") != -1 || hostName.indexOf("goalmouth.blogs.cnn.com") != -1 || hostName.indexOf("olympics.blogs.cnn.com") != -1 || hostName.indexOf("worldsport.blogs.cnn.com") != -1 || hostName.indexOf("bodareal.blogs.cnn.com") != -1 || hostName.indexOf("travel.cnn.com") != -1 || hostName.indexOf("footballclub.cnn.com") != -1 || hostName.indexOf("edition.cnnv2.com") != -1 || hostName.indexOf("edition-m.cnn.com") != -1) {
                    setting = sites.cnnintl[type];
                } else if (hostName.indexOf("cnn.com") != -1 || hostName.indexOf("cnnv2.com") != -1) {
                    setting = sites.cnn[type];
                } else if (hostName.indexOf("fave.api.cnn.io") != -1 || hostName.indexOf("fave-api.cnn.com") != -1) {
                    setting = sites.cnn[type];
                } else if (hostName.indexOf("style.staging.cnn.io") != -1) {
                    setting = sites.cnndev[type];
                } else {
                    //default, if any case failed
                    setting = sites.cnn[type];
                }
            }
            try {
                if (window.CNNIntlVideo) {
                    setting = sites.cnnintl[type];
                }
            } catch (e) {}
            return setting;
        },
        getJObj: function(objectRef, attribute) {
            objectRef = (typeof objectRef == "string" ? window[objectRef] : objectRef);
            var rval = (objectRef != null && attribute != null && attribute.indexOf(".") == -1 && attribute.indexOf("[") == -1 ? objectRef[attribute] : objectRef);
            if (rval === objectRef && (typeof attribute !== 'undefined' || attribute != null)) {
                var attribs = attribute.split("."),
                    len = attribs.length,
                    reArray = /([^\[]+)\[(\d+)\]/,
                    t, t2;
                rval = objectRef;
                for (var i = 0; i < len; i++) {
                    t = attribs[i];
                    if ((t2 = reArray.exec(t)) != null) {
                        rval = rval[t2[1]][parseInt(t2[2])];
                    } else rval = rval[t];
                }
            }
            return rval;
        },
        getADBPContentType: function(defaultVal) {
            var tt = wminst.Util.getCNNTemplateType("long") || "";
            var ct = wminst.Util.getCNNContentType() | "";
            var rObj = {};
            var l = {
                "adbp:blog": ["event38", "adbp:blog read"],
                "adbp:content": ["event39", "adbp:article read"]
            } [tt];
            var m = {
                "adbp:article read": "event39"
            } [ct];
            if (m != null) {
                rObj.events = m;
                rObj.content_type = ct;
                return rObj;
            }
            if (!l) {
                rObj.events = "";
                rObj.ct = defaultVal;
                return rObj;
            }
            rObj.events = l[0];
            rObj.ct = l[1];
            return rObj;
        },
        getADBPURL: function(type, lvl) {
            var hostname = window.location.hostname.toLowerCase();
            var pathname = window.location.pathname.toLowerCase();
            var path_array = "";
            pathname = pathname.replace(/([^\/]+\.[^\/]+$)/, "");

            var rval;
            switch (type) {
                case "domain":
                    hostname = hostname.replace("www.", "");
                    if (lvl == parseFloat(lvl)) {
                        var domain_array = hostname.split(".");
                        var currentPointer = domain_array.length - lvl;
                        var currentDomainLevel = (currentPointer >= 0 ? domain_array[currentPointer] : "");
                        rval = currentDomainLevel;
                    } else {
                        rval = hostname;
                    }
                    break;
                case "path":
                    var pathname2 = pathname.substring(1);
                    path_array = pathname2.split("/");
                    if (lvl == parseFloat(lvl) && lvl >= 1) {
                        var currentPathname = (path_array.length >= lvl ? path_array[lvl - 1] : "");
                        rval = currentPathname;
                    } else {
                        rval = pathname;
                    }
                    break;
                case "hier":
                    hostname = hostname.replace("www.", "");
                    path_array = pathname.substring(1).split("/");
                    var h1 = hostname + "/" + path_array[0];
                    var h2 = h1;
                    if (path_array[1]) h2 = h2 + "/" + path_array[1];
                    rval = [h1, h2];
                    break;
                default:
                    rval = hostname + pathname;
            }
            return rval;
        },
        getADBPPageName: function(pathname, delimiter) {
            var s_pageName = "",
                templateTypeSmall = "";
            if (!delimiter) delimiter = ":";
            var ttbefore = wminst.Util.getCNNTemplateType("long");
            if (ttbefore) { //default to "other" if template type is not defined
                ttbefore = ttbefore.replace(/adbp./, "");
                templateTypeSmall = wminst.Util.getADBPTranslateTemplateType(ttbefore, "short");
            } else {
                templateTypeSmall = "o";
            }
            var buc_p32 = wminst.Util.getCNNBusinessName() + delimiter + templateTypeSmall;
            var thirdLevelDomain = wminst.Util.getADBPURL("domain", 3);
            var fullDomain = wminst.Util.getADBPURL("domain");
            var lastTwoDomain = /(\.\w+\.\w+)$/.exec(fullDomain);
            if (lastTwoDomain) thirdLevelDomain = fullDomain.replace(lastTwoDomain[0], "");
            if (!pathname) {
                var p = window.location.pathname.toLowerCase();
                var a = p.split('/');
                var l = a.length;
                var r = /^index./;
                pathname = (r.test(a[(l - 1)])) ? p.replace(/([^\/]+\.[^\/]+$)/, "") : p;
                r = /([^\/]+\.[^\/]+$)/;
                if (!r.test(pathname)) {
                    l = pathname.length;
                    if (pathname.charAt(l - 1) !== "/") {
                        pathname = pathname + "/";
                    }
                }
            }
            var pageNameLen, r_len;
            if (thirdLevelDomain == "") {
                pageNameLen = buc_p32.length + 1 + pathname.length;
                if (pageNameLen <= 100) {
                    s_pageName = buc_p32 + delimiter + pathname;
                } else {
                    r_len = pageNameLen - 100;
                    s_pageName = buc_p32 + delimiter + pathname.substring(r_len);
                }
            } else {
                pageNameLen = buc_p32.length + 1 + thirdLevelDomain.length + 1 + pathname.length;
                if (pageNameLen <= 100) {
                    s_pageName = buc_p32 + delimiter + thirdLevelDomain + delimiter + pathname;
                } else {
                    if (thirdLevelDomain.length <= 5) {
                        r_len = pageNameLen - 100;
                        s_pageName = buc_p32 + delimiter + thirdLevelDomain + delimiter + pathname.substring(r_len);
                    } else {
                        thirdLevelDomain = thirdLevelDomain.substring(0, 5);
                        pageNameLen = buc_p32.length + 1 + thirdLevelDomain.length + 1 + pathname.length;
                        if (pageNameLen <= 100) {
                            s_pageName = buc_p32 + delimiter + thirdLevelDomain + delimiter + pathname;
                        } else {
                            r_len = pageNameLen - 100;
                            s_pageName = buc_p32 + delimiter + thirdLevelDomain + delimiter + pathname.substring(r_len);
                        }
                    }
                }
            }
            return s_pageName;
        },
        getCNNVideoSequence : function()
        {
          return "1";  
        },
        getCNNVertical : function()
        {
          var rval = "";
            try {
                if (window.CNN.contentModel.vertical && window.CNN.contentModel.vertical !== "") {
                    rval = window.CNN.contentModel.vertical;
                }
            } catch(e){}
            return rval;    
        },
        getADBPTranslateTemplateType: function(templateTypeCode, lookupType) {
            var adbpprefix = "adbp:",
                rval = ["o", "other"];
            var lookup = {
                    b: "blog",
                    g: "game",
                    it: "interactive",
                    c: "content",
                    "in": "index",
                    err: "error",
                    e: "ecom",
                    s: "signup",
                    v: "video",
                    sf: "section front",
                    o: "other"
                },
                lookupRev = {
                    "blog": "b",
                    "game": "g",
                    "interactive": "it",
                    "content": "c",
                    "index": "in",
                    "error": "err",
                    "ecom": "e",
                    "signup": "s",
                    "video": "v",
                    "section front": "sf",
                    "other": "o"
                };
            if (lookup[templateTypeCode] != null) {
                rval = [templateTypeCode, lookup[templateTypeCode]];
            }
            if (lookupRev[templateTypeCode] != null) {
                rval = [lookupRev[templateTypeCode], templateTypeCode];
            }
            rval[1] = adbpprefix + rval[1];
            if (lookupType == "short") {
                rval = rval[0];
            }
            if (lookupType == "long") {
                rval = rval[1];
            }
            return rval;
        },
        gCNNUserAuthState: function() {
            var userAuthObj = { 
                        user_login_status:"",
                        user_account_status: "",
                        user_registered_status: ""};
            try {
                var userLoginState =  _satellite.cookie.get("_cnn_at") ||  _satellite.cookie.get("_cnn_at_edition");// ===> User Logged In
                if (userLoginState && userLoginState !== "") {
                    userAuthObj.user_login_status = "logged in";
                    userAuthObj.user_registered_status = "registered";
                    var userAuthState = window.CNN.Utils.b64Decode(userLoginState);
                    if(userAuthState && userAuthState.indexOf("cnn.authn") > -1) {              
                        userAuthObj.user_account_status = "account verified";
                    } else {                
                        userAuthObj.user_account_status = "account not verified";
                    }
                } else {
                    userAuthObj.user_registered_status = "anonymous";
                    userAuthObj.user_login_status = "not logged in";
                    userAuthObj.user_account_status = "account not verified";
                }
        
            
            } catch(e){}
            return userAuthObj;
        },
        getUserRegisteredStatus: function(){ //prop51,eVar51
            var rval = "";
            try {
                rval = wminst.Util.gCNNUserAuthState();
                return rval.user_registered_status;
            }catch(e){}
            return rval;
        },
        getUserAccountStatus: function(){ //prop74,eVar74
            var rval = "";
            try {
                rval = wminst.Util.gCNNUserAuthState();
                return rval.user_account_status;
            }catch(e){}
            return rval;
        },
        getUserLoginStatus: function(){ //eVar89
            var rval = "";
            try {
                rval = wminst.Util.gCNNUserAuthState();
                return rval.user_login_status;
            }catch(e){}
            return rval;
        },
        getCNNSavedRaces: function() {
		    var rval = "";
			if(typeof CNN != 'undefined' && typeof CNN.saved_races == "number") {
				rval = "election center:save races:" + CNN.saved_races;
			} else {
				if(wminst.Util.getCNNCapContentType()) {
					rval = "D=c13";
				}
			}
			return rval;
		},
        getCNNExploreIndentify: function(data) { //eVar79 for Politics Explorer
			var rval = "cnn login not required";
			if((data.interaction_type == "year race" && data.racePremiumContent) || (data.interaction_type == "add layer" && data.overlayPremiumContent)) {
				rval = "cnn login required";
			}
			return rval;
		}
    }
}();
wminst.Util.loadCustomVariables();

});