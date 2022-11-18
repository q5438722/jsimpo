
      
      if (window.Sentry) {
        window.Sentry.onLoad(function() {
          window.Sentry.init({
            maxBreadcrumbs: 30,
            release: '2ba1732e2abf3c15b077fae510bbfa598126543f',
            environment: 'prd',
            beforeSend: function(e, v) {
              if (/amazon-adsystem|ads-us|ampproject|amp4ads|pubads|2mdn|chartbeat|gsi|bk_addPageCtx|yimg|BOOMR|boomerang/.test(v.originalException && v.originalException.stack || '')) return null;
              return e;
            }  
          });
        });
      }
    