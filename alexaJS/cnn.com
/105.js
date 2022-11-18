
(function() {
    /* Selective Attribute DataLayer Library Tag */
    var _, allAttr, allowedList, attr, attributes, dataLayerIngester, dataObj,
        isAllowed, keepCase, libUtil, omitKeys, pageAttr, prefix, toSet, trim,
        userAttr, util, value,
        hasProp = {}.hasOwnProperty;
    _ = Krux('require:underscore');
    util = Krux('require:util');
    libUtil = Krux('require:util.library-tag');
    dataLayerIngester = Krux('require:scrape').ingestDataLayer;

    /* Safe copy of dataLayer object */
    dataObj = Krux('scrape.javascript', 'navigator');

    /* String trimming helper function */
    trim = function(attr) {
        return ("" + attr).replace(/^\s+|\s+$/g, '');
    };

    /* Attribute configs */
    pageAttr = _.map('cnn_international_site,cnn_international_rollup,cnn_international_section,cnn_international_subsection,cnn_international_spec,cap_topics,cookie_last5stocks,on_site_searcher,cnn_international_bizunit,cnn_international_brand,cnn_international_lob,cnn_international_sitename,cnn_international_sitesectionlevel1,cnn_international_sitesectionlevel2,on_site_searcher,cnn_arabic_site,cnn_arabic_rollup,cnn_arabic_section,cnn_arabic_bizunit,cnn_arabic_brand,cnn_arabic_lob,cnn_arabic_sitename,cnn_arabic_sitesectionlevel1,cnn_arabic_sitesectionlevel2,espanol_site,espanol_rollup,espanol_section,espanol_bizunit,espanol_brand,espanol_lob,espanol_sitename,espanol_sitesectionlevel1,espanol_sitesectionlevel2,cnn_site,cnn_rollup,cnn_section,cnn_subsection,cnn_adunit5,cnn_spec,cnn_bizunit,cnn_brand,cnn_lob,cnn_sitename,cnn_sitesectionlevel1,cnn_sitesectionlevel2,cnn_money_site,cnn_money_rollup,cnn_money_section,cnn_money_subsection,cnn_money_adunit5,cnn_money_spec,cnnbusinessedition_lob,cnnbusinessedition_brand,cnnbusinessedition_bizunit,cnnbusinessedition_sitename,cnnbusinessedition_sitesectionlevel1,cnnbusinessedition_sitesectionlevel2,cnn_money_site,cnn_money_rollup,cnn_money_section,cnn_money_subsection,cnn_money_adunit5,cnn_money_spec,cnnbusiness_lob,cnnbusiness_brand,cnnbusiness_bizunit,cnnbusiness_sitename,cnnbusiness_sitesectionlevel1,cnnbusiness_sitesectionlevel2,br_site,br_rollup,br_section,br_subsection,bleacherreport_keywords'.split(','), trim);
    userAttr = _.map('userAgent,turner_guid,userUid'.split(','), trim);

    /* Create a array of attributes striping any empty strings */
    allAttr = _.without(pageAttr.concat(userAttr), '');

    /* Configuration settings */
    keepCase = 'undefined' === 'true';
    omitKeys = 'false'.split(',');

    /* Resolve Prefix */
    prefix = libUtil.resolvePrefix('undefined', 'undefined',
        'undefined');

    /* Function to varify if attribute should be used */
    isAllowed = function(value, whitelist) {
        var i, len, str, x;
        str = "" + value;
        if (!((value != null) && str.length > 0)) {
            return false;
        }
        for (i = 0, len = whitelist.length; i < len; i++) {
            x = whitelist[i];
            if (value.match(x) != null) {
                return true;
            }
        }
        return false;
    };

    /* Get a full list of attributes usting the dataLayer tool */
    attributes = dataLayerIngester(dataObj, {
        omitKeys: libUtil.removeFalsyStrings(omitKeys.concat(libUtil.EXCLUDE_KEYS_CONFIG)),
        omitValues: libUtil.EXCLUDE_VALUES_CONFIG,
        caseSensitive: keepCase,
        useFullPath: 'true' === 'true',
        useLastValue: 'false' === 'true',
        customDelimited: [/./],
        altDelimiter: ',',
        userKeys: _.map(userAttr, function(exp) {
            return new RegExp("(^|\\.)" + exp + "$");
        }),
        optimizeNames: true
    });

    /* Only set Attributes in the allowed list */
    allowedList = _.map(allAttr, function(name) {
        return new RegExp("(_attr_|_attr_" + prefix + "|\\.)" + (keepCase ?
            name : libUtil.normalizeAttrName(name, {
                removeDot: false
            })) + "$");
    });
    toSet = {};
    for (attr in attributes) {
        if (!hasProp.call(attributes, attr)) continue;
        value = attributes[attr];
        if (isAllowed(attr, allowedList)) {
            toSet[attr] = value;
        }
    }
    toSet = Krux('prefix:attr', toSet, prefix);
    Krux('set', toSet);
}).call();
