_satellite["_runScript4"](function(event, target, Promise) {
wminst.isAMPVideos = function() {
    var hostName = window.location.hostname;
    return hostName.indexOf("fave.api.cnn.io") != -1 || hostName.indexOf("fave-api.cnn.com") != -1;
};

wminst.isMoneyVideo = function(v) {
    var sectionName = v.sectionName || v.category || "";
    var sectionNameList = ["media", "intl_business", "tech", "business", "business-videos", "cars", "investing", "success", "perspectives", "homes"];
    return sectionNameList.includes(sectionName);
};

wminst.getAMPVideoTimeStamp = function() {
    var pathName = window.location.pathname;
    var ts = "";
    if (pathName.indexOf("/v1/amp") != -1 || pathName.indexOf("/v1/cnneamp") != -1 || pathName.indexOf("/v1/fbia") != -1 || pathName.indexOf("/v1/fbiaV2") != -1) {
        ts = new Date().getTime();
    }
    return ts;
};
var mediaPlayer = new Array;
wminst.getCNNMediaCollection = function() {
	return {
		get: function(i, p) {
			var mPlayer = mediaPlayer;
			for (var j = mPlayer.length - 1; j >= 0; j--) {
				if (mPlayer[j].containerId == i) {
					return mPlayer[j][p];
				}	
			}
		},
		set: function(i, p, v) {
			var mPlayer = mediaPlayer;
			for (var j = mPlayer.length - 1; j >= 0; j--) {
				if (mPlayer[j].containerId == i) {
					mPlayer[j][p] = v;
					break;
				}
			}	
		},
		toggle: function(i, p) {
			var mPlayer = mediaPlayer;
			for (var j = mPlayer.length - 1; j >= 0; j--) {
				if (mPlayer[j].containerId == i) {
					var v = mPlayer[j][p];
					mPlayer[j][p] = !v;
					break;
				}
			}	
		},		
		start: function(i, t) {
			var mPlayer = mediaPlayer;
			mPlayer.push(new objMediaPlayer(i,t));
			function objMediaPlayer(cid, mediaTitle) {
				this.containerId = cid;
				this.mediaTitle = mediaTitle;
				this.vidStarted = false;
				this.audStarted = false;
				this.hasScrubbed = false;
				this.isAuto = false;
				this.isTen = false;
				this.isTwentyFive = false;
				this.isHalf = false;
				this.isSeventyFive = false;
				this.isBuffering = false;
				this.isPaused = false;
				this.isMidrollStarted = false;
				this.adNumber = 0;
				this.startTime = (new Date).getTime();
				this.currentTime = (new Date).getTime();
				this.timeSpent = 0;
			}
		},
		pause: function(i) {
			var mPlayer = mediaPlayer;
			for (var j = mPlayer.length - 1; j >= 0; j--) {
				if (mPlayer[j].containerId == i) {
					var p = mPlayer[j].isPaused;
					var b = mPlayer[j].isBuffering;
					if (!b) {
						if (p) {
							mPlayer[j].startTime = (new Date).getTime();
						} else {
							var playedTime = (new Date).getTime() - mPlayer[j].startTime + mPlayer[j].timeSpent;
							mPlayer[j].timeSpent = playedTime;
						}
					}
					mPlayer[j].isPaused = !p;
					break;
				}
			}	
		},
		buffer: function(i) {
			var mPlayer = mediaPlayer;
			for (var j = mPlayer.length - 1; j >= 0; j--) {
				if (mPlayer[j].containerId == i) {
					var p = mPlayer[j].isPaused;
					var b = mPlayer[j].isBuffering;
					if (!p) {
						if (b) {
							mPlayer[j].startTime = (new Date).getTime();
						} else {
							var playedTime = (new Date).getTime() - mPlayer[j].startTime + mPlayer[j].timeSpent;
							mPlayer[j].timeSpent = playedTime;
						}
					}	
					mPlayer[j].isBuffering = !b;
					break;
				}
			}
		},
		progress: function(i) {
			var mPlayer = mediaPlayer;
			for (var j = mPlayer.length - 1; j >= 0; j--) {
				if (mPlayer[j].containerId == i) {
					mPlayer[j].currentTime = (new Date).getTime();
					var playedTime = (mPlayer[j].currentTime - mPlayer[j].startTime + mPlayer[j].timeSpent) / 1000;
					mPlayer[j].startTime = (new Date).getTime();
					mPlayer[j].timeSpent = 0;
					return Math.round(playedTime);
				}
			}
				
		},
		complete: function(i) {
			var mPlayer = mediaPlayer;
			for (var j = mPlayer.length - 1; j >= 0; j--) {
				if (mPlayer[j].containerId == i) {
					var playedTime = ((new Date).getTime() - mPlayer[j].startTime + mPlayer[j].timeSpent) / 1000;
					mPlayer[j].timeSpent = 0;
					return Math.round(playedTime);
				}
			}
				
		}
	};
};


wminst.capCNNTimeSpent = function(timeSpent, trt, liveInterval) {
    try { //check media time spent value
        var timeLimit = 0;
        if ((parseFloat(timeSpent) == parseInt(timeSpent)) && !isNaN(timeSpent)) {
            if (liveInterval && liveInterval > 0) {
                timeLimit = liveInterval; //time limit value set by webdev
            } else {
                timeLimit = 60; //time limit in sec
                if (trt && parseFloat(trt) > 0) {
                    timeLimit = parseFloat(trt) * 2;
                }
            }
            if (timeSpent > timeLimit) {
                timeSpent = timeLimit;
            } else if (timeSpent < 0) {
                timeSpent = 0;
            }
        } else {
            timeSpent = 0;
        }
    } catch (e) {
        timeSpent = 0;
    }
    return timeSpent;
};

wminst.capCNNTimeSpent2 = function(timeSpent, trt) {
    try { //check media time spent value
        if ((parseFloat(timeSpent) == parseInt(timeSpent)) && !isNaN(timeSpent)) { //valid time spent value
            if (trt && !isNaN(trt) && (parseFloat(trt) == parseInt(trt))) { //valid media length
                if (timeSpent > parseFloat(trt) * 2) {
                    timeSpent = parseFloat(trt) * 2;
                } else if (timeSpent < 0) {
                    timeSpent = 0;
                }
            } else { //invalid media length
                timeSpent = 0;
            }
        } else { //invalid time spent value
            timeSpent = 0;
        }
    } catch (e) {
        timeSpent = 0;
    }
    return timeSpent;
};
});