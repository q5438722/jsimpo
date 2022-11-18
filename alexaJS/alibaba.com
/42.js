
    (function() {
        var elements = document.querySelectorAll('.need-pre-check-login-container');
        
        function check() {
            try {
                var xman_us_t_arr = document.cookie.match(/xman_us_t=([^;]+);/g)
                var xman_us_t = xman_us_t_arr && xman_us_t_arr[0] || "";
                if (xman_us_t) {
                    var signArr = xman_us_t.match(/sign=([^&"]+)/);
                    var sign = signArr && signArr[0] || "";
                    if (sign && sign === 'sign=y') {
                        return true;
                    }
                }
            } catch(e) {}
            return false;
        };
        
        function handlerDot(_module, _action, _extra) {
          if (!window.goldlog) return;
          window.goldlog.record('/sc.enlogin.page', 'CLK', 'module=' + (_module || '') + '&action=' + (_action || '') + '&extra=' + (_extra || '') + '&pageid=' + window.dmtrack_pageid, 'GET');
        }
        
        if (elements.length > 0) {
          if (!check()) {
            handlerDot('addPreCheckLoginListener');
            for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener('click', function(e) {
                    if (e.target && e.target.className.indexOf('need-pre-check-login') > -1 && !check()) {
                      e.preventDefault();
                      e.stopPropagation();
                      handlerDot('clickPreCheckLogin');
                      var tempHref = e.target.getAttribute('href');
                      location.href = '//passport.alibaba.com/icbu_login.htm?return_url=' + encodeURIComponent(tempHref) + '&hasPreCheckLogin=true';
                    }
                });
            }
          }
        }
    })();
