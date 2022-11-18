
(function() {
    /* Generic Scrape Tag - Configurable Data Collection */
    var _, filterValues, libUtil, prefix, scrapeConfig, toSet;
    _ = Krux('require:underscore');
    libUtil = Krux('require:util.library-tag');
    toSet = {};
    filterValues = function(val) {
        var i, item, len, ref, str, x;
        if (_.isArray(val)) {
            return _.compact((function() {
                var i, len, results;
                results = [];
                for (i = 0, len = val.length; i < len; i++) {
                    item = val[i];
                    results.push(filterValues(item));
                }
                return results;
            })());
        }
        str = "" + val;
        if (!((val != null) && str.length > 0)) {
            return;
        }
        ref = libUtil.EXCLUDE_VALUES_CONFIG;
        for (i = 0, len = ref.length; i < len; i++) {
            x = ref[i];
            if (str.match(x) != null) {
                return;
            }
        }
        return val;
    };
    scrapeConfig = function(config, type) {
        var attr, i, len, parts, ref, results, value;
        ref = libUtil.removeFalsyStrings(config);
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
            attr = ref[i];
            parts = attr.split('|');
            if (parts.length === 1 && 'url_param'.match(/(dom|javascript)/)) {
                continue;
            }
            if (parts.length === 1) {
                parts.unshift(libUtil.normalizeAttrName(parts[0]));
            }
            switch ('url_param') {
                case 'get':
                    value = filterValues(Krux('get', parts[1]));
                    break;
                default:
                    value = filterValues(Krux('scrape.url_param', parts[1]));
            }
            if (value) {
                results.push(toSet[type + "_attr_" + parts[0]] = value);
            } else {
                results.push(void 0);
            }
        }
        return results;
    };
    scrapeConfig('search|q', 'page');
    scrapeConfig('undefined', 'user');
    prefix = libUtil.resolvePrefix('text', 'cnn',
        'cnn');
    toSet = Krux('prefix:attr', toSet, prefix);
    Krux('set', toSet);
}).call();
