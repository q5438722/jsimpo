
    // HEAD.JS SCRIPT
    jsFileList.core_Js = [
        page_params.jqueryVersion
    ];

    jsFileList.cust_Js = [
        'https://di.phncdn.com/www-static/js/header.js?cache=2022111702',
			'https://di.phncdn.com/www-static/js/lib/jquery-ui-1.12.1.min.js',
			'https://di.phncdn.com/www-static/js/lib/jquery.slimscroll.min.js'
    ];

    jsFileList.site_Js = [
        'https://di.phncdn.com/www-static/js/phub.js?cache=2022111702',
			'https://di.phncdn.com/www-static/js/playlist/playlist-basic.js?cache=2022111702',
			'https://di.phncdn.com/www-static/js/widgets-live-popup.js?cache=2022111702',
			'https://di.phncdn.com/www-static/js/playlist/playlists-common.js?cache=2022111702',
			'https://di.phncdn.com/www-static/js/v-recaptcha.js?cache=2022111702',
			'https://di.phncdn.com/www-static/js/lib/signinbox.js?cache=2022111702',
			'https://di.phncdn.com/www-static/js/signin.js?cache=2022111702',
			'https://di.phncdn.com/www-static/js/ph-footer.js?cache=2022111702',
			'https://di.phncdn.com/www-static/js/premium/premium-modals.js?cache=2022111702'
    ];

    jsFileList.page_Js = [
                                                        "https://di.phncdn.com/www-static/js/lib/generated/front-index-pc.js?cache=2022111702",
                                                                "https://di.phncdn.com/www-static/js/promo-banner.js?cache=2022111702",
                                        ];

    var Load_scripts=function(){"use strict";var e=this;e.init=function(t){e.params=t;e.params.finalFileList=[];e.myFileList()},e.myFileList=function(){var t=e.getKeys(e.params.jsFileList),n=0,r=t.length;for(;n<r;n++){e.getFileList(e.params.jsFileList[t[n]])}e.params.head.ready(function(){e.runHeadJs()})},e.getFileList=function(t){var n=0,r=t.length;for(;n<r;n++){e.params.finalFileList.push(t[n])}},e.runHeadJs=function(){var t=0,n=e.params.finalFileList.length;if(page_params.loadOnce){e.params.head.load(e.params.finalFileList);}else{for(;t<n;t++){e.params.head.load(e.params.finalFileList[t]);}}},e.getKeys=function(e){var t=[],n;for(n in e){if(e.hasOwnProperty(n)){t.push(n)}}return t}},myHead_JS=new Load_scripts;

    if (page_params.isOldIE !== true && typeof window.performance !== 'undefined') {
        (function() {
            var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
            po.src = 'https://ss.phncdn.com/head/load-1.0.3.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
        })();
    }

    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            myHead_JS.init({
                'jsFileList'    : jsFileList,   //json object with file list
                'head'		    : head		  //head.js plugin object
            });
        }
    }, 30);

    // Lazy Load function
    function Performance(e){var t=this;t.listener=e;t.domInteractive=false;t.domContentLoadedEventStart=false;t.domContentLoadedEventEnd=false;t.domComplete=false;t.loadEventStart=false;t.loadEventEnd=false;t.isset=function(e){if(typeof e!="undefined"){return true}return false};t.test=function(){if(!t.domInteractive&&performance.timing.domInteractive>0){t.domInteractive=true;var e=performance.timing.domInteractive-performance.timing.navigationStart;if(t.isset(t.listener)&&t.listener.domInteractive){t.listener.domInteractive(e)}}if(!t.domContentLoadedEventStart&&performance.timing.domContentLoadedEventStart>0){t.domContentLoadedEventStart=true;var e=performance.timing.domContentLoadedEventStart-performance.timing.navigationStart;if(t.isset(t.listener)&&t.listener.domContentLoadedEventStart){t.listener.domContentLoadedEventStart(e)}}if(!t.domContentLoadedEventEnd&&performance.timing.domContentLoadedEventEnd>0){t.domContentLoadedEventEnd=true;var e=performance.timing.domContentLoadedEventEnd-performance.timing.navigationStart;if(t.isset(t.listener)&&t.listener.domContentLoadedEventEnd){t.listener.domContentLoadedEventEnd(e)}}if(!t.domComplete&&performance.timing.domComplete>0){t.domComplete=true;var e=performance.timing.domComplete-performance.timing.navigationStart;if(t.isset(t.listener)&&t.listener.domComplete){t.listener.domComplete(e)}}if(!t.loadEventStart&&performance.timing.loadEventStart>0){t.loadEventStart=true;var e=performance.timing.loadEventStart-performance.timing.navigationStart;if(t.isset(t.listener)&&t.listener.loadEventStart){t.listener.loadEventStart(e)}}if(!t.loadEventEnd&&performance.timing.loadEventEnd>0){t.loadEventEnd=true;var e=performance.timing.loadEventEnd-performance.timing.navigationStart;if(t.isset(t.listener)&&t.listener.loadEventEnd){t.listener.loadEventEnd(e)}}if(!(t.domInteractive&&t.domInteractive&&t.domContentLoadedEventStart&&t.domContentLoadedEventEnd&&t.domComplete&&t.loadEventStart)){setTimeout(function(){t.test()},250)}};setTimeout(function(){t.test()},250)}

    var hasRun = false;

    function ll() {
        if (hasRun) {
            return;
        }
        hasRun = true;
        loadThumbs();
    }

    function PerformanceListener() {
        this.loadEventEnd = function(t) {
            setTimeout(function(){ ll(); }, 5);
        }
    }

    var t = new Performance(new PerformanceListener()), llTimeout = 15000;

    if (typeof performance === "undefined") {
        llTimeout = 1000;
    }

    setTimeout(function(){ ll(); }, llTimeout);

    function loadThumbsLazyLoad() {
        var image = document.querySelectorAll('.js-preload'),
            thumbToUse = 'data-mediumthumb';

        for (var i = 0; i < image.length; i++) {
            var itemsCount  = image[i];

            if (itemsCount.src != itemsCount.getAttribute(thumbToUse)) {
                itemsCount.src = itemsCount.getAttribute(thumbToUse);
            }

            if (i == 10) {
                break;
            }
        }
    }

    loadThumbsLazyLoad();

    // Thumbnail fetching:
    function loadThumbs() {
        var image = document.querySelectorAll('.js-preload'),
            thumbToUse = 'data-mediumthumb';
        for (var i = 0; i < image.length; i++) {
            var itemsCount = image[i];
            if (itemsCount.getAttribute(thumbToUse)) {
                if (itemsCount.src != itemsCount.getAttribute(thumbToUse)) {
                    itemsCount.src = itemsCount.getAttribute(thumbToUse);
                }
            }
        }
    }
