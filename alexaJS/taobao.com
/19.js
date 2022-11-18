
if (window.JSTracker2 && typeof window.JSTracker2.setJsErrorFilters === 'function') {
  window.JSTracker2.setJsErrorFilters([
      function (info) {
          if ((info.message && /jsonp[0-9]* is not defined/.test(info.message)) || (info.message && /Uncaught Error: decodeURIComponent error :/.test(info.message)) || (info.message && /Uncaught NotSupportedError:/.test(info.message)) || (info.message && /Uncaught NoSuchMethodException:/.test(info.message)) || (info.message && /SecurityError/.test(info.message)) || (info.message && /Permission denied/.test(info.message))) {
              return true; 
          }
      },
      function (info) {
          if (info.message && (/Cannot read property/.test(info.message) || /null is not an object/.test(info.message) || /Microsoft Internet/.test(info.message) || /该操作尝试访问的数据/.test(info.message) || /无法重新定义不可配置的属性/.test(info.message) || /Unexpected/.test(info.message) || /拒绝访问/.test(info.message) || /未指明的错误/.test(info.message) || /参数无效/.test(info.message) || /URI malformed/.test(info.message) || /这个系统不支持该功能/.test(info.message) || /无法获取未定义/.test(info.message) || /磁盘空间不足/.test(info.message) || /Cannot read properties/.test(info.message))) {
              return true;
          }
      },       
      function (info) {
          if (info.message && info.message.indexOf("$ is not defined") > -1) {
              return true;
          }
      },           
      function (info) {
          if (info.message && info.message.indexOf("Cannot redefine property: platform") > -1) {
              return true;
          }
      },
      function (info) {
          if (info.message && info.message.indexOf("onLayoutChanged is not defined") > -1) {
              return true;
          }
      }                
  ]);
}
