
(function() {
    Krux('scrape', { "page_attr_cookie_last5stocks": {cookie: "last5stocks"}});

    if(window.slot) {

        // get namespace;
        var ns = (function() {
                        var exceptions, jsmdmap, key1, key2, val1, val2, _ref;
                        if (window._jsmd_default) {
                            jsmdmap = _jsmd_default.map;
                            for (key1 in jsmdmap) {
                                val1 = jsmdmap[key1];
                                for (key2 in val1) {
                                    val2 = val1[key2];
                                    if (ns = val2 != null ? (_ref = val2.settings) != null ? _ref.visitorNamespace : void 0 : void 0) {
                                        return ns;
                                    }
                                }
                            }
                        }
                        return exceptions[Krux('get', 'site')];
                })();

        if(!ns) return;
        //get site
        var site = slot[2];
        // get pixel
        var pixel = window["s_i_" + ns] || window["s_i_1_" + ns] || window["s_i_0_" + ns];
        // regex for pixel source
        var lookFor = "&h1=(.*?)&";
        // check if pixel source matches the regex
        var match =  (pixel && pixel.src) ? pixel.src.match(lookFor) : null;

        if (match) {
            var parts = decodeURIComponent(match[1]).split('|');
            var keys = ['lob', 'brand', 'bizunit', 'sitename', 'sitesectionlevel1', 'sitesectionlevel2'];
            for (var i = 0, l = keys.length;i < l; i++) {
                var key = keys[i];
                if(parts[i]) Krux('set', "page_attr_" + site + "_" + key, parts[i]);
            }
        }
    }

})();
