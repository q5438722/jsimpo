
    window.HEADER_DATA = window.HEADER_DATA || {};
    window.HEADER_DATA['sc-header-config'] = window.HEADER_DATA['sc-header-config'] || {};
    window.HEADER_DATA['sc-header-config']['categories-i18n'] = {"allCategories":"All Categories","viewMore":"View More","categories":"Categories"};
    window.HEADER_DATA["sc-header-config"]["mod"] = window.HEADER_DATA["sc-header-config"]["mod"] || {};
    window.HEADER_DATA["sc-header-config"]["mod"]["searchbar"] = window.HEADER_DATA["sc-header-config"]["mod"]["searchbar"] || ['type', 'static', 'dynamic'];
                            window.HEADER_DATA['sc-header-config'].widthMin = 's';
                window.HEADER_DATA['sc-header-config'].widthMax = 'xl';
                
    
                
        (function(){
            try{
                window.HEADER_DATA = window.HEADER_DATA || {};
                window.HEADER_DATA["sc-header-config"] = window.HEADER_DATA["sc-header-config"] || {};
                window.HEADER_DATA["sc-header-config"]["currentLocale"] = "en_US";
                window.HEADER_DATA["sc-header-config"]["hdLanguageType"] = "ml_direct";
                window.HEADER_DATA["sc-header-config"]["languageMaps"] = {"en_US":"www","de_DE":"german","pt_PT":"portuguese","es_ES":"spanish","fr_FR":"french","it_IT":"italian","hi_IN":"hindi","ru_RU":"russian","ko_KR":"korean","ja_JP":"japanese","ar_SA":"arabic","th_TH":"thai","tr_TR":"turkish","vi_VN":"vietnamese","nl_NL":"dutch","iw_IL":"hebrew","in_ID":"indonesian"};
                window.HEADER_DATA["sc-header-config"]["mod"] = window.HEADER_DATA["sc-header-config"]["mod"] || {};
                window.HEADER_DATA["sc-header-config"]["mod"]["sundry"] = window.HEADER_DATA["sc-header-config"]["mod"]["sundry"] || [];
                window.HEADER_DATA["sc-header-config"]["sundry"] = window.HEADER_DATA["sc-header-config"]["sundry"] || {};
                if( window.HEADER_DATA["sc-header-config"]["mod"]["sundry"].indexOf("language") === -1 ){
                    window.HEADER_DATA["sc-header-config"]["mod"]["sundry"].push("language");
                }
                window.HEADER_DATA['sc-header-config']['searchbar'] = window.HEADER_DATA['sc-header-config']['searchbar'] || {};
                window.HEADER_DATA['sc-header-config']['searchbar']['aisnServer'] = window.HEADER_DATA['sc-header-config']['searchbar']['aisnServer'] || '//www.alibaba.com';
                if( typeof( window.HEADER_DATA["sc-header-config"]["sundry"]["language"] )  === 'undefined' ){
                    window.HEADER_DATA["sc-header-config"]["sundry"]["language"] = {
                        "memberLanguage": ["en_US","de_DE","pt_PT","es_ES","fr_FR","it_IT","hi_IN","ru_RU","ko_KR","ja_JP","th_TH","tr_TR","vi_VN","nl_NL","in_ID"],
                        "languageLabel": ["English","Deutsch","Português","Español","Français","Italiano","हिंदी","Pусский","한국어","日本語","ภาษาไทย","Türk","Tiếng Việt","Nederlands","Bahasa Indonesia"],
                        "availableLanguage": ["en_US","de_DE","pt_PT","es_ES","fr_FR","it_IT","hi_IN","ru_RU","ko_KR","ja_JP","th_TH","tr_TR","vi_VN","nl_NL","in_ID"]
                    };
                }
            }catch(e){
                if(typeof(console) !== 'undefined'){
                    console.log('header language config script error!');
                }
            }
        })();   
    