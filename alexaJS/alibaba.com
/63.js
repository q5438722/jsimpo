
        window.TOP_BANNER_DATA_FETCHING_STATUS = 'fetching';
        // 在页面 HTML 加载时即进行顶通数据的请求
        window.topBannerCallback = function(data) {
            window.TOP_BANNER_DATA = data;
            window.TOP_BANNER_DATA_FETCHING = 'done';
            // 如果数据返回的时候，前端脚本已经加载完毕，则进行触发
            // 相应的，在前端脚本中，如果数据已经发起，则会等待 2s，等待下面这行代码的触发
            if(window.TOP_BANNER_TRIGGER) {
                window.TOP_BANNER_TRIGGER();
            }
        };

        // 让页面同步加载 jsonp 接口
        (function(window) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://marketing.alibaba.com/queryNicheMaterial.do?nicheCode=ICBU_PC_TOP_BANNER&callback=topBannerCallback';
                        script.async = 'async';
            var body = document.getElementsByTagName('body');
            if (body && body[0]) {
              body[0].appendChild(script);
            }
        })(window);
    