
    (function(){
        var config = window.HEADER_DATA ? window.HEADER_DATA['sc-header-config'] : null;
        var logoNodeList = document.body.querySelectorAll('a.sc-hd-i-logo-new');

        if(config && config.currentLocale && config.languageMaps){
            var prefix = config.languageMaps[config.currentLocale] || 'www';
            var mLangHref = '//' + prefix + '.alibaba.com';
            if (logoNodeList && logoNodeList.length > 0) {
                for (var i = 0; i < logoNodeList.length; ++i) {
                  logoNodeList[i].setAttribute('href', mLangHref);
                }
                
            }
        }
    })();
