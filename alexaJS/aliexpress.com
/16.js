
        window.PAGE_TIMING = window.PAGE_TIMING || {};
        window.PAGE_TIMING.pageType = 'homeNew';
        window.runParams = window.runParams || {};
        window.runParams._pageName_ = 'gloHome';
        window.__TIMING__={startRender: Date.now()};
        window.__bl ={};
        window.__bl.pipe = [];
        (function(){
            var searchStr = window.location.search.replace('?', '&');
            var url = 'https://'+ window.location.host +'/api/data_homepage.do?featuresWhitelist=1' + searchStr;
            window._page_config_ = {
                prefetch: { url: url}
            }
        })();
    