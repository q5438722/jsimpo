
window.onlineRobotConfig=window.onlineRobotConfig||{};
window.onlineRobotConfig.online_robot_SpmAB = ["a2700.8293689","a2700.8293689-de_DE","a2700.8293689-pt_PT","a2700.8293689-es_ES","a2700.8293689-fr_FR","a2700.8293689-it_IT","a2700.8293689-hi_IN","a2700.8293689-ru_RU","a2700.8293689-ko_KR","a2700.8293689-ja_JP","a2700.8293689-th_TH","a2700.8293689-tr_TR","a2700.8293689-vi_VN","a2700.8293689-nl_NL","a2700.8293689-nl_NL","a2700.8293689-in_ID","a2700.galleryofferlist","a2700.product_home_l3","a2700.factory_home"];
try {
  (function() {
      var PageSpm = (function() {
        if (window && window.goldlog && window.goldlog.spm_ab) {
          return window.goldlog.spm_ab.join('.');
        } else if (window && window.g_SPM && window.g_SPM.getParam()) {
          var spm = window.g_SPM.getParam(document.body);
          if (spm) {
            return spm.a + '.' + spm.b;
          }
        } else {
          var dataSpmMeta = document.getElementsByName('data-spm');
          if (!dataSpmMeta) return;
          var body = document.body || document.getElementsByTagName('body')[0];
          var spmA = dataSpmMeta[0] && dataSpmMeta[0].content;
          var spmB = body && body.dataset && body.dataset.spm;
          if (spmB && spmB) return spmA + '.' + spmB;
        };
      })();
      var isincluded = window.onlineRobotConfig.online_robot_SpmAB.includes(PageSpm) || PageSpm.substring(0,5) === "a27aq";
      var isLogin = document && document.cookie && document.cookie.indexOf('xman_us_t') !== -1 && document.cookie.indexOf('sign=y') !== -1;
      if (isincluded && isLogin) {
        window.onlineRobotConfig.appName = window.onlineRobotConfig.appName || 'aisn';
        window.onlineRobotConfig.onlyForAlimeRobot = true;
        (function(url) {
            var head = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.type='text/css';
            link.rel = 'stylesheet';
            link.href = url;
            head.appendChild(link);
        })("//s.alicdn.com/@g/sc/services-module/0.0.15/sc-services-module/index.css");
        (function(str) {
          if (str) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = str;
            document.body.appendChild(script);
          }
        }
        )("//s.alicdn.com/@g/sc/services-module/0.0.15/sc-services-module/index.js")
      }
    }
  )()
} catch(e) {console.log(e)}
