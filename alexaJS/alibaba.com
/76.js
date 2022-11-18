
    (function(){
        var config = window.HEADER_DATA ? window.HEADER_DATA['sc-header-config'] : null;
        var hrefNodeList = document.body.querySelectorAll('.ui-footer-seo-brand>a[data-multi]')

        if(config && config.currentLocale && config.languageMaps){
            var prefix = config.languageMaps[config.currentLocale] || 'www';
            var mLangHref = '//' + prefix + '.alibaba.com';
            if (hrefNodeList && hrefNodeList.length > 0) {
                for (var i = 0; i < hrefNodeList.length; ++i) {
                  var urlPath = hrefNodeList[i].getAttribute('data-href');
                  if (hrefNodeList && urlPath) {
                    hrefNodeList[i].setAttribute('href', mLangHref + urlPath);
                  }
                }
                
            }
        }
    })();
