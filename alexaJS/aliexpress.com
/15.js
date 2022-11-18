
  window.__SNAPSHOT_DURATION__ = 0;
  window.__SNAPSHOT_KEY__ = 'snapshot-' + location.href.split("?")[0];
  (function () {
    try {
      var snapshot = JSON.parse(localStorage.getItem(window.__SNAPSHOT_KEY__) || '');
      if (snapshot.data && (Date.now() - snapshot.time) < window.__SNAPSHOT_DURATION__) {
        var timer;
        var retryTimes = 0;
        var maxRetryTimes = 50;
        function render() {
          var root = document.getElementById('root');
          if (root) {
            clearInterval(timer);
            if (root.innerHTML === '') {
              window.__SNAPSHOT_CURRENT__ = snapshot;
              root.innerHTML = snapshot.data.replace(/st_page_id="[^"]+"/g, 'st_page_id="' + window.dmtrack_pageid + '"');
            }
          }
          if (retryTimes++ > maxRetryTimes) {
            clearInterval(timer);
          }
        }
        render();
        timer = setInterval(render, 100);
      } else {
        localStorage.removeItem(window.__SNAPSHOT_KEY__);
      }
    } catch (e) {
      // ignore
    }
  })()
