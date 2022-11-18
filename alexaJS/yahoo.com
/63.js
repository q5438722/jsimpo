
                // Window global variables
                var dpDarlaJsAsyncEnabled = false;
                var dpDarlaProxyExclusive = true;
                var dpDarlaProxyInitialized = false;
                var darlaProxyConfig = {};
                var pageloadValidAds = ["LDRB","LREC"];
                var pageloadNonCollapsedAds = ["LDRB","LREC"];
                var bucketSAEnabled = true;
                var segBlob = {};
                
                
                
                var facCustomTimout ="380";
                var _adPerfBeaconData,
                    _pendingAds = [],
                    _adLT = [];
                var safeframeOptinPositions = {"LDRB":true,"LREC":true,"MAST":true,"MON":true};

                // Window global variables
                            (function () {
                if ( typeof window.CustomEvent === "function" ) return false;

                function CustomEvent ( event, params ) {
                    params = params || { bubbles: true, cancelable: true, detail: null };
                    var evt = document.createEvent( 'CustomEvent' );
                    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
                    return evt;
                }

                window.CustomEvent = CustomEvent;
            })();


                var darlaOnready = function darlaOnready() {
                    if (window.dpDarlaProxyInitialized) {
                        return;
                    }

                    var w = window,
                        D = w.DARLA,
                        C = {"useYAC":0,"usePE":0,"servicePath":"https:\/\/www.yahoo.com\/pdarla\/php\/fc.php","xservicePath":"","beaconPath":"https:\/\/www.yahoo.com\/pdarla\/php\/b.php","renderPath":"","allowFiF":false,"srenderPath":"https:\/\/s.yimg.com\/rq\/darla\/4-10-1\/html\/r-sf.html","renderFile":"https:\/\/s.yimg.com\/rq\/darla\/4-10-1\/html\/r-sf.html","sfbrenderPath":"https:\/\/s.yimg.com\/rq\/darla\/4-10-1\/html\/r-sf.html","msgPath":"https:\/\/fc.yahoo.com\/unsupported-1946.html","cscPath":"https:\/\/s.yimg.com\/rq\/darla\/4-10-1\/html\/r-csc.html","root":"pdarla","edgeRoot":"https:\/\/s.yimg.com\/rq\/darla\/4-10-1","sedgeRoot":"https:\/\/s.yimg.com\/rq\/darla\/4-10-1","version":"4-10-1","tpbURI":"","hostFile":"https:\/\/s.yimg.com\/rq\/darla\/4-10-1\/js\/g-r-min.js","beaconsDisabled":true,"rotationTimingDisabled":true,"fdb_locale":"What don't you like about this ad?|It's offensive|Something else|Thank you for helping us improve your Yahoo experience|It's not relevant|It's distracting|I don't like this ad|Send|Done|Why do I see ads?|Learn more about your feedback.|Want an ad-free inbox? Upgrade to Yahoo Mail Pro!|Upgrade Now","positions":{"DEFAULT":{"supports":false},"LDRB":{"w":728,"h":90},"LREC":{"w":300,"h":250},"HPSPON":{"w":1,"h":1},"MAST":{"w":1,"h":1},"MON":{"w":1,"h":1}},"lang":"en-US"},
                        firstRender = [],
                        adBoostGroupConf = {"LREC3":{"extrapositions":["MON2"],"inview":"LREC4"},"LREC4":{"extrapositions":["MON2"],"inview":"LREC3"},"MON2":{"extrapositions":["LREC3","LREC4"]}},
                        yieldAdEnabled = false,
                        yieldAdViewerOnlyEnabled = false;

                    C.positions = {"LDRB":{"clean":"sda-LDRB","dest":"sda-LDRB-iframe","fdb":1,"h":90,"id":"LDRB","metaSize":true,"pos":"LDRB","supports":{"exp-ovr":1,"exp-push":1,"lyr":0},"w":728,"meta":{"hostURL":"https:\/\/www.yahoo.com\/"}},"LREC":{"clean":"sda-LREC","dest":"sda-LREC-iframe","fdb":1,"h":250,"id":"LREC","metaSize":true,"pos":"LREC","supports":{"exp-ovr":0,"exp-push":0,"lyr":0},"w":300,"meta":{"hostURL":"https:\/\/www.yahoo.com\/"},"doubleBuffering":false},"MAST":{"clean":"sda-MAST","closeBtn":{"adc":0,"mode":2,"useShow":1},"dest":"sda-MAST-iframe","fdb":1,"h":250,"id":"MAST","metaSize":true,"pos":"MAST","supports":{"exp-ovr":0,"exp-push":1,"resize-to":1},"w":970,"doubleBuffering":false,"flex":{"w":{"max":1260,"min":960}},"meta":{"hostURL":"https:\/\/www.yahoo.com\/"}},"MON":{"clean":"sda-MON","dest":"sda-MON-iframe","fdb":1,"h":600,"id":"MON","metaSize":true,"pos":"MON","supports":{"exp-ovr":1,"exp-push":1,"lyr":0,"resize-to":1},"w":300,"meta":{"hostURL":"https:\/\/www.yahoo.com\/"}},"DEFAULT":{"sandbox":false},"MAST-DISPLAY-PH":{"clean":"sda-MAST-DISPLAY","closeBtn":{"adc":0,"mode":2,"useShow":1},"dest":"sda-MAST-DISPLAY","fdb":1,"h":250,"id":"MAST","metaSize":true,"pos":"MAST","supports":{"exp-ovr":0,"exp-push":1,"resize-to":1},"w":970},"MAST-NATIVE-PH":{"clean":"sda-MAST-NATIVE","closeBtn":{"adc":0,"mode":2,"useShow":1},"dest":"sda-MAST-NATIVE","fdb":1,"h":250,"id":"MAST","metaSize":true,"pos":"MAST","supports":{"exp-ovr":0,"exp-push":1,"resize-to":1},"w":970,"doubleBuffering":false,"flex":{"w":{"max":1260,"min":960}}}};
                    C.k2={"res":{"pos":["LREC","MAST","FPAD","LREC2","LREC3","MON"]}};
                    C.k2E2ERate=100;
C.k2Rate=100;
C.so=1;
C.renderTimeout=30000;
C.firstRenderingVisible = true;
C.rotationRenderingVisible = true;
C.cscCleanupTimeout = true;

                    
                    C.events = {"AUTO":{"autoDDG":1,"autoIV":1,"autoMax":25,"autoRT":10000,"autoStart":1,"name":"AUTO","ps":{"LREC":{"autoIV":1,"autoMax":25,"autoRT":"10000"},"LREC3":{"autoIV":1,"autoMax":25,"autoRT":"10000"},"LREC4":{"autoIV":1,"autoMax":25,"autoRT":"10000"},"MON":{"autoIV":1,"autoMax":25,"autoRT":"10000"},"MON2":{"autoIV":1,"autoMax":25,"autoRT":"10000"}},"groups":{"LREC3":"MON2","LREC4":"MON2","MON2":"LREC3,LREC4"},"sp":2023538075,"sa":"Y-BUCKET=\"MimicProviderListv2-copy,cp_evalmlfpexp1bkt2,FPGAMLIFE101,TGPC2202,drop_heimdall_homepage_control_bucket,JARVISFPUSDESKP1P2TAKE207\" fdn=1 bct=1 ctout=380 geminifed=1 rs=\"lu:0;pt:home;site:fp;ver:megastrm\"","ref":"https:\/\/www.yahoo.com\/","ult":{"pg":{"property":"fp_en-US","rid":"5p5vp3dhneu1m","test":"MimicProviderListv2-copy%2Ccp_evalmlfpexp1bkt2%2CFPGAMLIFE101%2CTGPC2202%2Cdrop_heimdall_homepage_control_bucket%2CJARVISFPUSDESKP1P2TAKE207"}}},"adFetch":{"ps":"LDRB,LREC,MAST,MON","sp":2023538075,"sa":"Y-BUCKET=\"MimicProviderListv2-copy,cp_evalmlfpexp1bkt2,FPGAMLIFE101,TGPC2202,drop_heimdall_homepage_control_bucket,JARVISFPUSDESKP1P2TAKE207\" fdn=1 bct=1 ctout=380 geminifed=1 rs=\"lu:0;pt:home;site:fp;ver:megastrm\"","ref":"https:\/\/www.yahoo.com\/","ult":{"pg":{"property":"fp_en-US","rid":"5p5vp3dhneu1m","test":"MimicProviderListv2-copy%2Ccp_evalmlfpexp1bkt2%2CFPGAMLIFE101%2CTGPC2202%2Cdrop_heimdall_homepage_control_bucket%2CJARVISFPUSDESKP1P2TAKE207"}}}};
                                    C.onPreParse = function(eventName, result) {
                    var positions = result.ps();
                    var pos, posPrefix, posItem, posSettings, nativePosSettings, displayPosSettings, newPosSettings, advTextId, cleanId;
                    var geminiFedPos = ['MAST', 'WFPAD', 'LREC3', 'INBODY'];
                    var isGeminiFedPos = false;
                    var isPositionValid = false;
                    for (i = 0, l = positions.length; i < l; i++) {
                        pos = positions[i];
                        posItem = result.item(pos);
                        isPositionValid =
                            posItem &&
                            !posItem.hasErr &&
                            posItem.size + '' !== '1x1' &&
                            posItem.meta &&
                            posItem.meta.y &&
                            posItem.meta.y.size &&
                            posItem.meta.y.size + '' !== '1x1';
                        if (typeof geminiFedPos.some !== 'undefined' && typeof geminiFedPos.some === 'function') {
                            isGeminiFedPos = geminiFedPos.some(function(fedPos) {
                                return pos.indexOf(fedPos) === 0;
                            });
                        }
                        if (pos && isPositionValid && isGeminiFedPos) {
                            posSettings = DARLA.posSettings(pos);
                            posPrefix = pos.split('-')[0]; 
                            advTextId = document.getElementById('sdaAdvText-' + pos);
                            nativePosSettings = DARLA.posSettings(posPrefix + '-NATIVE-PH');
                            displayPosSettings = DARLA.posSettings(posPrefix + '-DISPLAY-PH');
                            if (posItem && posItem.serveType == 10 && nativePosSettings && nativePosSettings.dest) {
                                newPosSettings = nativePosSettings;
                                if (advTextId) { 
                                    advTextId.style.display = 'none';
                                }
                            } else if (displayPosSettings && displayPosSettings.dest) {
                                newPosSettings = displayPosSettings;
                                if (advTextId) { 
                                    advTextId.style.display = 'block';
                                }
                            }
                            if (newPosSettings && posSettings) {
                                newPosSettings.id = pos;
                                newPosSettings.pos = pos;
                                newPosSettings.clean = posSettings.clean;
                                newPosSettings.dest = posSettings.dest;
                                cleanId = document.getElementById(newPosSettings.clean);

                                if (cleanId && cleanId.parentNode && cleanId.parentNode.classList) {
                                    cleanId.parentNode.classList.add('da-parsed', pos);
                                }

                                DARLA.addPos(newPosSettings);
                            }
                        }
                    }
                };

                            C.onFinishParse = function(eventName, result) {
            var ps = result.ps(),
                position, posItem;

                        var reqAdPositions = {};
            for (i = 0, l = ps.length; i < l; i++) {
                position = ps[i];
                posItem = result.item(position);
                reqAdPositions[position] = {posData: posItem};
                if (posItem.hasErr || posItem.size + '' === '1x1' || (posItem.meta && posItem.meta.y && posItem.meta.y.size && posItem.meta.y.size + ''=== '1x1')) {
                    reqAdPositions[position].validAd = false;
                } else {
                    reqAdPositions[position].validAd = true;
                }
            }        var advText = window.adsConfig && window.adsConfig.strings && window.adsConfig.strings.advertisement || 'Advertisement';

        for (i = 0, l = ps.length; i < l; i++) {
            position = ps[i];
            posItem = result.item(position);
            var whitelistedSlugPositions = ['LREC', 'LREC2'];
            var whitelistedNonUBAPositions = ['WIDGETA'];
            var geminiFedPos = ['INBODY']; // only incremental position
            var posSetting = window.DARLA.posSettings(position);
            var cleanId = document.getElementById(posSetting.clean);
            var inaDiv = document.getElementById(posSetting.dest);
            var nodeId = 'sdaAdvText-' + position;
            var nodeIdDiv = document.getElementById(nodeId);
            var isPositionValid = !posItem.hasErr && posItem.size + '' !== '1x1' && (posItem.meta && posItem.meta.y && posItem.meta.y.size && posItem.meta.y.size + '' !== '1x1');
            var isSlugEnablePos = false && whitelistedSlugPositions.indexOf(position) >= 0;
            var isWhitelistedNonUBAPos = false;
            if (typeof whitelistedNonUBAPositions.some !== 'undefined' && typeof whitelistedNonUBAPositions.some === 'function') {
                isWhitelistedNonUBAPos = whitelistedNonUBAPositions.some(function(wPos) {
                    return position.indexOf(wPos) === 0;
                });
            }
            var isNonUBAadBlockPos = false && isWhitelistedNonUBAPos;
            var isGeminiFedPos = false;
            if (typeof geminiFedPos.some !== 'undefined' && typeof geminiFedPos.some === 'function') {
                isGeminiFedPos = geminiFedPos.some(function(fedPos) {
                    return position.indexOf(fedPos) === 0;
                });
            }

            if (isSlugEnablePos || isNonUBAadBlockPos || position.indexOf('INARTICLE') >= 0 || position.indexOf('UBA') >= 0) {
                var isUBA = position.indexOf('UBA') >= 0;
                if (isPositionValid) {
                    if (inaDiv && !nodeIdDiv) {
                        var inaText = document.createElement('div');
                        var advTextInnerHTML = '';
                        inaText.id = nodeId;
                        inaText.style.fontSize = isUBA || isNonUBAadBlockPos ? '13px' : '10px';
                        inaText.style.textAlign = isUBA || isNonUBAadBlockPos ? 'left' : 'center';
                        if (isUBA) {
                            var ubaClean = inaDiv.parentElement;
                            inaText.style.margin = 'auto';
                            if (posSetting.w) {
                                inaText.style.width = posSetting.w + 'px';
                            }
                            if (ubaClean && ubaClean.classList && ubaClean.classList.contains && !ubaClean.classList.contains('uba-container')) {
                                ubaClean.classList.add('uba-container');
                            }
                        }
                        if (isUBA || isNonUBAadBlockPos) {
                            advTextInnerHTML = advText;
                        } else if (isSlugEnablePos) {
                            advTextInnerHTML = advText.toUpperCase();
                        } else {
                            advTextInnerHTML = '- ' + advText.toUpperCase() + ' -';
                        }
                        inaText.innerHTML = advTextInnerHTML;
                        inaDiv.parentElement.insertBefore(inaText, inaDiv);
                    } else if (nodeIdDiv) { // as INARTICLE would fall here we need show adv text
                        nodeIdDiv.style.display = 'block';
                    }
                }
            }
            // for rest of the non-native positions
            if (isPositionValid) {
                if (isGeminiFedPos && cleanId && cleanId.parentNode && cleanId.parentNode.classList) {
                    cleanId.parentNode.classList.add(position);
                }
                if (nodeIdDiv && posItem && posItem.serveType != 10) {
                    nodeIdDiv.style.display = 'block';
                }
            }
        }            if (typeof dispatchEvent !== 'undefined' && typeof CustomEvent !== 'undefined') {
                var evtDetail = {
                    detail: {
                        evtName: eventName,
                        positions: reqAdPositions
                    }
                };
                if ("" && eventName === 'momentsAdFetch') {
                    dispatchEvent(new CustomEvent("", evtDetail));
                }
                dispatchEvent(new CustomEvent("ads:finish:parse", evtDetail));
            }
        };

                                C.onStartPosRender = function(posItem) {
                if (window.performance  && window.performance.now) {
                    var ltime = window.performance.now(),
                        posId = posItem && posItem.pos;
                    _adLT.push(['ADSTART_'+posId, Math.round(ltime)]);
                }
                if (window._isModalOpen && window._isModalOpen()) {
                    window._perfMark('ADSTART_' + posId);
                }
            };

                                    C.onBeforeStartPosRender = function(posItem) {                if (posItem && safeframeOptinPositions && safeframeOptinPositions[posItem.pos]) {
                    if (posItem.html && posItem.html.match(/<!--[^>]*sfoptout[^>]*-->/)) {
                        return true;
                    }
                }            if (posItem.conf && posItem.conf.clean) {
                var element = document.getElementById(posItem.conf.clean);
                if (element) {
                    element.className = element.className.replace('Ht-pl-' + posItem.size , '').replace('Ht-pl-default', '');
                    element = element.parentNode;
                    if (element && element.className && element.className.match(/Ht-pl-LDRB|Ht-pl-LREC/)) {
                        element.className = element.className.replace(/Ht-pl-LDRB|Ht-pl-LREC/, '');
                    } else if (element.parentNode && element.parentNode.className && element.parentNode.className.match(/Ht-pl-LDRB|Ht-pl-LREC/)) {
                        element.parentNode.className = element.parentNode.className.replace(/Ht-pl-LDRB|Ht-pl-LREC/, '');
                    }
                }
            }
        };
                                C.onFinishPosRender = function(posId, reqList, posItem) {
                if (window.performance !== undefined && window.performance.now !== undefined) {
                    var whiteListedAds = [],
                        ltime = window.performance.now();
                        _adLT.push(['ADEND_'+posId, Math.round(ltime)]);
                    setTimeout(function () {
                        if (window.YAFT !== undefined && window.YAFT.isInitialized() && whiteListedAds[posId]) {
                            // Trigger custom timing for LREC ad position
                            window.YAFT.triggerCustomTiming(whiteListedAds[posId], '', ltime);
                        }
                    },300);
                }
                if (window._isModalOpen && window._isModalOpen()) {
                    window._perfMark('ADEND_' + posId);
                    adIndex = window._pendingAds.indexOf(posId);
                    if (adIndex >= 0) {
                        window._pendingAds.splice(adIndex, 1);
                        if (window._pendingAds.length === 0) {
                            window._adRenderComplete();
                        }
                    }
                }
            };

                    
                            C.onFailure = function (eventName, pos) {
                        document.documentElement.classList.add('da-parsed-page');

            if (document.documentElement.classList.contains('modal-open')) {
                document.documentElement.classList.add('da-parsed-modal');
            } else {
                document.documentElement.classList.remove('da-parsed-modal');
            }
        };

                                C.onSuccess = function(eventName, positions) {
                            document.documentElement.classList.add('da-parsed-page');

            if (document.documentElement.classList.contains('modal-open')) {
                document.documentElement.classList.add('da-parsed-modal');
            } else {
                document.documentElement.classList.remove('da-parsed-modal');
            }
            };


                    if ("OK" == D.config(C)) {
                        w.dpDarlaProxyInitialized = true;

                        setTimeout(function() {
                            if (window.performance  && window.performance.now) {
                                var ltime = window.performance.now();
                                _adLT.push(['DARLA_RSTART', Math.round(ltime)]);
                            }
                            var d = document,
                                e = d.documentElement,
                                g = d.getElementsByTagName('body')[0],
                                winWidth = w.innerWidth || e.clientWidth || g.clientWidth;

                                    (function () {
            var positions = ["LDRB","LREC","MAST","MON","DEFAULT"];
            var smartAdElement = document.getElementById('smartDaConfig');
            var posSettings, smartAdPosition, newPosSettings;
            // check if we have dynamic smart ad config
            if (smartAdElement && smartAdElement.dataset && smartAdElement.dataset.smartDaConfig) {
                smartAdConfig = smartAdElement.dataset.smartDaConfig;
                try {
                    smartAdConfig = JSON.parse(smartAdConfig);
                    smartAdPositions = smartAdConfig.adPositions || [];
                    smartAdDynamicData = smartAdConfig.dynamicData || {};
                } catch (err) {
                    // do nothing
                }
                if (smartAdPositions.length && positions.length) {
                    for (var i = 0, l = smartAdPositions.length; i < l; i++) {
                        smartAdPosition = smartAdPositions[i];
                        if (positions.indexOf(smartAdPositions[i]) !== -1
                            && typeof Object.assign === 'function') {
                                posSettings = DARLA.posSettings(smartAdPosition);
                                newPosSettings = posSettings;
                                newPosSettings.meta = Object.assign({}, posSettings.meta, smartAdDynamicData);
                                if (newPosSettings) {
                                    DARLA.addPos(newPosSettings);
                                }
                        }
                    }
                }
            }
        })();

                                        // firstRender will consist of the positions that need to be rendered first
            if (firstRender && firstRender.length > 0) {
                var prefetchedPos = DARLA.prefetched();

                if (prefetchedPos.length <= 0) {
                    return;
                }

                var firstBatchPos = [];

                // goes through the positions in the firstRender array and removes any duplicates from the prefetched positions
                for (var i = 0; i < firstRender.length; i++) {
                    var position = firstRender[i];
                    var index = prefetchedPos.indexOf(position);
                    if (index >= 0) {
                        firstBatchPos = firstBatchPos.concat(prefetchedPos.splice(index, 1));
                    }
                };

                if (firstBatchPos.length > 0) {
                    var renderWithRetry = function(pos) {
                        if (DARLA.inProgress()) {
                            var waittime = 600, maxwait = 100, deferRetry = 0, interval;
                            interval = setInterval(function() {
                                deferRetry ++;
                                if (!DARLA.inProgress()) {
                                    clearInterval(interval);
                                    // Render the remaining ads
                                    DARLA.render(pos);
                                }
                                if (deferRetry > maxwait) {
                                    DARLA.abort();
                                    clearInterval(interval);
                                    DARLA.render(pos);
                                }
                            }, waittime);
                        } else {
                            // Render the remaining ads
                            DARLA.render(pos);
                        }
                    }

                    // it will render the positions that were in the firstRender array
                    renderWithRetry(firstBatchPos);
                    // after an interval render the remaining prefetched positions
                    setTimeout(renderWithRetry, 3000, prefetchedPos);
                } else {
                    // non of the firstBatchPos in prefetchedPos then render whatever we have
                    DARLA.render();
                }
            } else {
                // if firstRender is empty, it will render all the ads
                DARLA.render();
            }

                                        (function() {
                var positions = ["LDRB","LREC","MAST","MON","DEFAULT"];
                var waferInstance = window && window.wafer;
                if (!waferInstance) {
                  return;
                }

                var waferBase;
                waferInstance.ready(function () {
                    waferBase = waferInstance.base || {};
                });

                var visibilityMeta = (function () {
                    var visibilityChange = 'visibilitychange';
                    var hidden = 'hidden';
                    var UNDEFINED = 'undefined';
                    if (typeof document.mozHidden !== UNDEFINED) {
                        hidden = 'mozHidden';
                        visibilityChange = 'moz' + visibilityChange;
                    } else if (typeof document.msHidden !== UNDEFINED) {
                        hidden = 'msHidden';
                        visibilityChange = 'ms' + visibilityChange;
                    } else if (typeof document.webkitHidden !== UNDEFINED) {
                        hidden = 'webkitHidden';
                        visibilityChange = 'webkit' + visibilityChange;
                    }
                    return {
                        hidden: hidden,
                        visibilityChange: visibilityChange
                    };
                })();

                var adBoostBlackListPos = {
                    BTNA: 'BTNA',
                    BTNB: 'BTNB',
                    BTNC: 'BTNC',
                    BTND: 'BTND',
                    NE4A: 'NE4A',
                    NE4B: 'NE4B',
                    NE4C: 'NE4C',
                    NE4D: 'NE4D',
                    FB2A: 'FB2A',
                    FB2B: 'FB2B',
                    FB2C: 'FB2C',
                    FB2D: 'FB2D',
                    INARTICLE: 'INARTICLE',
                    WIDGET: 'WIDGET',
                    WIDGETA: 'WIDGETA',
                    'WIDGET-1': 'WIDGET-1'
                };

                var tabswitchRotateTime = 3000;

                var enableTabswitchRotate = tabswitchRotateTime > 0;

                if (!enableTabswitchRotate) {
                    return;
                }
                var getCurrentTime = Date.now || function() {
                    return new Date().getTime();
                };

                var darlaTimeStamp = getCurrentTime();
                var isWindowHidden = document[visibilityMeta.hidden] || false;

                var isInViewport = function (elem, offset) {
                    offset = offset || {};
                    return waferInstance.utils.elementInView(elem, offset, waferBase.viewport);
                };

                var handleBlur = function () {
                    if (!isWindowHidden) {
                        darlaTimeStamp = getCurrentTime();
                        isWindowHidden = true;
                        return;
                    }
                };

                var dispatchWindowEvent = function (eventName) {
                    var event;

                    if (typeof dispatchEvent === 'undefined') {
                        return;
                    }

                    if (typeof(Event) === 'function') {
                        event = new Event(eventName);
                    } else {
                        event = document.createEvent('Event');
                        event.initEvent(eventName, true, true);
                    }

                    dispatchEvent(event);
                };

                var getAdPositions = function() {
                    var inbodyAdBoostEnabled = false;
                    if (document.documentElement.classList.contains('modal-open')) {
                        var viewerEventSettings = DARLA.evtSettings('homepage-viewer');

                        if (viewerEventSettings && viewerEventSettings.ps) {
                            return viewerEventSettings.ps.split(',');
                        }

                        // if yield ad is enabled, 
                        // then prevent index position to be picked
                        if (yieldAdEnabled) {
                            return [];
                        }
                    }
                    var adPositions = Object.keys(C.positions) || [];
                    var clientPos = [];
                    var clientPositionMeta = window && window.adsConfig && window.adsConfig.clientPositionMeta;
                    if (clientPositionMeta && clientPositionMeta.positions && clientPositionMeta.positions.length > 0) {
                        clientPos = clientPositionMeta.positions.map(function(pos) {
                            return pos.id;
                        });
                    }
                    adPositions = adPositions.concat(clientPos);
                    if (inbodyAdBoostEnabled) {
                        var otherAdPosSettings = DARLA.evtSettings('AUTO');
                        if (otherAdPosSettings && otherAdPosSettings.ps) {
                            var otherAdPosList = Object.keys(otherAdPosSettings.ps) || [];
                            otherAdPosList.forEach(function(adPos) {
                                if (adPositions.indexOf(adPos) < 0 && adPos.indexOf('-NATIVE-PH') < 0 && adPos.indexOf('-DISPLAY-PH') < 0) {
                                    adPositions.push(adPos);
                                }
                            });
                        }
                    }
                    return adPositions;
                };

                var handleFocus = function () {
                    if (document[visibilityMeta.hidden]) {
                        isWindowHidden = true;
                        return;
                    }

                    var now = getCurrentTime();
                    var isViewerOpen = document.documentElement.classList.contains('modal-open');
                    if (now - darlaTimeStamp < tabswitchRotateTime) {
                        // too soon dont rotate the ads
                        return;
                    }
                    isWindowHidden = false;

                    // yield Adboost
                    if (yieldAdEnabled || yieldAdViewerOnlyEnabled) {
                        /**
                         * - if viewer is open, check whether it has positions.
                         * - if it has positions, then it means Ads in viewer is
                         *   fetched through Darla
                         * - so we dont need Yield to adboost.
                         * - We clear homepageviewer event on every modal close.
                         */ 
                        if (isViewerOpen) {
                            var viewerEventSettings = DARLA.evtSettings('homepage-viewer');

                            if (!viewerEventSettings || !viewerEventSettings.ps) {
                                dispatchWindowEvent('yieldAd:RefreshInView');
                                return;
                            }
                        } else if (yieldAdEnabled) {
                            dispatchWindowEvent('yieldAd:RefreshInView');
                            return;
                        }
                    }
                    
                    if (!DARLA || DARLA.inProgress()) {
                        return;
                    }

                    var adCallPositions = [];
                    var positions = getAdPositions();

                    if (DARLA) {
                        positions.forEach(function _eachAd(adPos) {
                            if (!adBoostBlackListPos[adPos]) {
                                var posSettings = DARLA.posSettings(adPos);
                                var adNodeEl = document.getElementById(posSettings.dest);
                                // If Ad position is displayed and is isInViewport
                                if (adNodeEl && adNodeEl.offsetHeight > 1 && isInViewport(adNodeEl)) {
                                    adCallPositions.push(adPos);
                                    if (adBoostGroupConf && adBoostGroupConf[adPos]) {
                                        var groupAdsInView = true;
                                        if (adBoostGroupConf[adPos].inview) {
                                            [].concat(adBoostGroupConf[adPos].inview).forEach(function (iAdPos) {
                                                var iPosSettings = DARLA.posSettings(iAdPos);
                                                if (iPosSettings) {
                                                    var iAdNodeEl = document.getElementById(iPosSettings.dest);
                                                    if (iAdNodeEl) {
                                                        if (!isInViewport(iAdNodeEl)) {
                                                            groupAdsInView = false;
                                                        }
                                                    }
                                                }
                                            });
                                            if (groupAdsInView) {
                                                [].concat(adBoostGroupConf[adPos].extrapositions).forEach(function (nAdPos) {
                                                    if (adCallPositions.indexOf(nAdPos) < 0) {
                                                        adCallPositions.push(nAdPos);
                                                    }
                                                });
                                            }
                                        } else {
                                            [].concat(adBoostGroupConf[adPos].extrapositions).forEach(function (nAdPos) {
                                                if (adCallPositions.indexOf(nAdPos) < 0) {
                                                    adCallPositions.push(nAdPos);
                                                }
                                            });
                                        }
                                    }
                                }
                            }
                        });

                        if (adCallPositions.length) {
                            var pageContext = YAHOO.context;
                            var ultMeta = {
                                pg: {
                                    device: pageContext.device,
                                    intl: pageContext.intl,
                                    property: 'fp',
                                    rid: pageContext.rid,
                                    test: pageContext.bucket
                                },
                            };
                            var tabswitchEvent = {
                                ps:     adCallPositions.join(','),
                                sp:     2023538075,
                                name:   'tabswitch',
                                sa:     DARLA.evtSettings('AUTO').sa || "Y-BUCKET=\"MimicProviderListv2-copy,cp_evalmlfpexp1bkt2,FPGAMLIFE101,TGPC2202,drop_heimdall_homepage_control_bucket,JARVISFPUSDESKP1P2TAKE207\" fdn=1 bct=1 ctout=380 geminifed=1 rs=\"lu:0;pt:home;site:fp;ver:megastrm\"",
                                ssl:    false,
                                secure: true,
                                ref:    window.location.href,
                                npv:    1,
                                property: 'fp',
                                ult: ultMeta
                            };
                            DARLA.add(tabswitchEvent);
                            DARLA.event('tabswitch');
                        };
                    };
                };

                window.addEventListener('blur', handleBlur);
                window.addEventListener('focus', handleFocus);
                waferInstance && waferInstance.ready(function () {
                    waferInstance.on('pageVisibilityChange', handleFocus);
                });
            })();


                            


                            if (w.performance  && w.performance.now) {
                                var ltime = w.performance.now();
                                _adLT.push(['DARLA_REND', Math.round(ltime)]);
                            }
                        }, 200);
                    }
                };
                var darlaOnreadyPoll = function darlaOnreadyPoll() {
                    var timeout = Number(new Date()) + 20000;
                    var interval = 300;

                    (function condition() {
                        if (window.DARLA) {
                            darlaOnready();
                        } else if (Number(new Date()) < timeout) {
                            setTimeout(condition, interval);
                        } else {
                            // NoAds
                        }
                    })();
                };

                if (window.DARLA) {
                    darlaOnready();
                } else if (!dpDarlaJsAsyncEnabled) {
                    darlaOnreadyPoll();
                } // else if dpDarlaJsAsyncEnabled is enabled it will be called from script onload event
            