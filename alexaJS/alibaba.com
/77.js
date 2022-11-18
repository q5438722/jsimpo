
    (function(){
        function attachEvent(el, t, h) {
            if (el.addEventListener) {
                el.addEventListener(t, h, false);
            } else if (el.attachEvent) {
                el.attachEvent('on' + t, h);
            }
        }
        
        var hostname = location.hostname;
        if (hostname === 'www.alibaba.com') {
            attachEvent(window, 'load', function(){
                var script = document.createElement('script');
                script.crossOrigin = 'anonymous';
                script.async = true;
                script.src = '//s.alicdn.com/@g/msite/chrome-push/0.0.1/pages/pc/index.js';
                document.body.appendChild(script);
            });
        }
    }());
