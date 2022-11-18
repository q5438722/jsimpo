
    (function(w) {
        if (w.performance && typeof w.performance.now === 'function' && w.document.addEventListener) {
            w.document.addEventListener('DOMContentLoaded', function(){
                var yaftConfig = {"adModules":["sda-LDRB","sda-LREC","sda-LREC2","sda-LREC3","sda-MAST","sda-MON","sda-WFPAD","sda-XFPAD","sda-XFPADcustom","viewer-LDRB","viewer-LREC","viewer-LREC2","viewer-LREC3","viewer-MAST","viewer-MON","viewer-MON2"],"adModulesMap":{"LDRB":"sda-LDRB","LREC":"sda-LREC","LREC2":"sda-LREC2","LREC3":"sda-LREC3","MAST":"sda-MAST","MON":"sda-MON","WFPAD":"sda-WFPAD","XFPAD":"sda-XFPAD","XFPADcustom":"sda-XFPADcustom"},"includeOnlyAft2":true,"maxWaitTime":2500,"modules":["content-articles-wrapper","content-viewer","modal-sidekick-","module-","sda-","viewer-LDRB","viewer-LREC","viewer-MAST","viewer-MON"],"modulesAft2Container":["content-viewer"],"modulesExclude":[],"preferDataModNameOverId":true};
                if (w.YAFT && yaftConfig) {
                    var whiteListedAds = yaftConfig.adModulesMap;
                    var preProcess = function() {
                        // Override the ad load time as the ad module's load time
                        var darlaAdTimings = [];
                        var adTiming;
                        var aft2StartRender = w.YAFT.AFT2.getAFT2StartRender() - 800;
                        if (typeof w._adLT !== 'undefined') {
                            for (var i = 0; i < w._adLT.length; i++) {
                                adTiming = w._adLT[i];
                                var adIdAction = adTiming[0];
                                var adTime = adTiming[1];
                                var adAction = adIdAction.indexOf('ADSTART_') > -1 ? 'start' : 'end';
                                var adId = '';

                                if (adAction === 'start') {
                                    adId = adIdAction.replace('ADSTART_', '');
                                    darlaAdTimings[adId] = {
                                        started: adTime,
                                        loaded: 0
                                    };
                                } else {
                                    adId = adIdAction.replace('ADEND_', '');
                                    if (typeof darlaAdTimings[adId] !== 'undefined') {
                                        darlaAdTimings[adId].loaded = adTime;
                                    }
                                }
                            }

                            for (var adObj in darlaAdTimings) {
                                if (darlaAdTimings.hasOwnProperty(adObj) && whiteListedAds && typeof whiteListedAds[adObj] !== undefined) {
                                    var adStartTime = darlaAdTimings[adObj].started;
                                    var adLoadTime = darlaAdTimings[adObj].loaded || w.performance.now();
                                    if (aft2StartRender > adStartTime) {continue;}
                                    w.YAFT.triggerCustomTiming(whiteListedAds[adObj], adStartTime, adLoadTime);
                                }
                            }
                        }

                        // Override the video load time as the module's load time
                        if (typeof w._videoLT !== 'undefined') {
                            for (var key in w._videoLT) {
                                if (w._videoLT.hasOwnProperty(key)) {
                                    w.YAFT.triggerCustomTiming(key, w._videoLT[key].startTime, w._videoLT[key].loadTime || w.performance.now());
                                }
                            }
                        }
                    };

                    var setPagePerfDataForTrackModules = function(pagePerfData) {
                        var trackModulesPerfMark = w.performance.getEntriesByType('mark');
                        if (trackModulesPerfMark) {
                            var trackModules = yaftConfig.trackModulesMap;
                            if (trackModules) {
                                var trackModuleNames = [];
                                for (var trackModule in trackModules) {
                                    if (trackModules.hasOwnProperty(trackModule)) {
                                        trackModuleNames.push(trackModule);
                                    }
                                }
                                if (trackModuleNames.length > 0) {
                                    for (var t = 0; t < trackModulesPerfMark.length; t++) {
                                        var moduleMark = trackModulesPerfMark[t];
                                        if (trackModuleNames.indexOf(moduleMark.name) !== -1) {
                                            pagePerfData[trackModules[moduleMark.name]] = Math.round(moduleMark.startTime);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    yaftConfig.preProcess = preProcess;
                    w.YAFT.init(yaftConfig, function(data, error) {
                        if (!error && w.rapidInstance) {
                            var aft = Math.round(data.aft);
                            var initialPageLoad = {
                                AFT: aft,
                                AFT1: aft,
                                AFTNOAD: Math.round(data.aftNoAd),
                                STR: Math.round(data.startRender),
                                VIC: data.visuallyComplete,
                                PLT: data.pageLoadTime,
                                DOMC: data.domElementsCount,
                                HTTPC: data.httpRequests.count,
                                CP: Math.round(data.totalCoveragePercentage),
                                NCP: Math.round(data.normTotalCoveragePercentage)
                            };
                            var customPerfData = {};
                            var pagePerfData = {};
                            if ( window._adLT) {
                                for (var i = 0; i < _adLT.length; i++) {
                                    pagePerfData[_adLT[i][0]]  = _adLT[i][1];
                                }
                            }
                            setPagePerfDataForTrackModules(pagePerfData);
                            // Track user connection type
                            var navConnection = navigator && (navigator.connection || navigator.mozConnection || navigator.webkitConnection) || {};
                            pagePerfData['CONNECTION_TYPE'] = navConnection.effectiveType || 'unknown';
                                                        
                            customPerfData['utm'] = pagePerfData;
                            var perfData = {
                                perf_commontime: {
                                    initialPageLoad: initialPageLoad
                                },
                                perf_usertime: customPerfData
                            };

                            w.rapidInstance.beaconPerformanceData(perfData);
                        }
                    });
                }
            });
        }
    })(window);
