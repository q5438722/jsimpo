
          function getDfd() {let yFn,nFn;const p=new Promise(function(y, n){yFn=y;nFn=n;});p.resolve=yFn;p.reject=nFn;return p;}
          window.lazyloader = getDfd();
          window.tracking = getDfd();
          window.impressionTracking = getDfd();
          window.ingraphTracking = getDfd();
          window.appDetection = getDfd();
          window.pemTracking = getDfd();
        