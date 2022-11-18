
    var slot;
    (function() {
        if (window.googletag && googletag.pubads() && googletag.pubads().getSlots()) {
            var c1 = {};
            var arr = googletag.pubads().getSlots();
            var site = ["cnn", "cnn_arabic", "cnn_international", "cnn_money", "espanol"];

            if (arr) {
                for (var i = 0, l = arr.length; i < l; i++) {
                    c1[arr[i].getAdUnitPath()] = (c1[arr[i].getAdUnitPath()] || 0) + 1;
                }
                slot = Object.keys(c1)[0] || null;
                for (k in c1) slot = (c1[k] > c1[slot]) ? k : slot;
            }

            if (window.slot) { // Set string lowercase and split slot into an array 
                slot = slot.toLowerCase();
                slot = slot.split('/');

                // Changes slot from "as" to "toonswim"
                slot[2] = slot[2] == 'as' ? 'toonswim' : slot[2];
                // Changes slot from "arabic" to "cnn_arabic"
                slot[2] = slot[2] == 'arabic' ? 'cnn_arabic' : slot[2];
                // Changes slot from "cnni" to "cnn_internation"
                slot[2] = slot[2] == 'cnni' ? 'cnn_international' : slot[2];
                // Changes slot from "cnnmoney" to "cnn_money"
                slot[2] = slot[2] == 'cnnmoney' ? 'cnn_money' : slot[2];
                
                // "teamcoco"
                if(slot[2] === "tbs" && slot[4] === "conan"){
                    slot = slot.splice(2)
                };

                for (var i = 0; i < site.length; i++) {

                    if (slot[2] == site[i]) {
                        // Using domain to dynamically scrape page attribute site 
                        Krux('set', 'page_attr_' + slot[2] + '_site', slot[2]);
                        // Using domain to dynamically scrape page attribute rollup
                        Krux('set', 'page_attr_' + slot[2] + '_rollup', slot[3]);
                        // Using domain to dynamically scrape page attribute section 
                        Krux('set', 'page_attr_' + slot[2] + '_section', slot[4]);
                        // Using domain to dynamically scrape page attribute subsection
                        Krux('set', 'page_attr_' + slot[2] + '_subsection', slot[5]);
                        // Using domain to dynamically scrape page attribute AdUnit 5 
                        Krux('set', 'page_attr_' + slot[2] + '_adunit5', slot[6]);
                        
    
                    };
                };
            };
        };
        
        if(window.CNNMONEY && window.CNNMONEY.adTargets) spec = CNNMONEY.adTargets.spec;
        if(window.CNN && window.CNN.adTargets) spec = CNN.adTargets.spec;
        if(window.CNNI && window.CNNI.adTargets) spec = CNNI.adTargets.spec;
                        
        if (window.spec && slot && slot.length >= 3) {
           Krux('set', 'page_attr_' + slot[2] + '_spec', spec);
        };
        
    
        
        
        if (window.queryString) {
            Krux('set', 'page_attr_on_site_searcher', true)
        };


        if (window.CNN && window.CNN.contentModel && window.CNN.contentModel.analytics) {
            var ct = CNN.contentModel.analytics.cap_topics;
            if (ct) {
                ct = ct.replace(/ /g, '');
                Krux('set', 'page_attr_cap_topics', ct);
            };
        };

    })();
