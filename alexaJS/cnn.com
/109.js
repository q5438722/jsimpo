
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
    dataObj = Krux('scrape.javascript', 'CNN.cep_topics');

    /* String trimming helper function */
    trim = function(attr) {
        return ("" + attr).replace(/^\s+|\s+$/g, '');
    };

    /* Attribute configs */
    pageAttr = _.map('cep_sent,cep_iabt,cep_tags,cep_brsf'.split(','), trim);
    userAttr = _.map('undefined'.split(','), trim);

    /* Create a array of attributes striping any empty strings */
    allAttr = _.without(pageAttr.concat(userAttr), '');

    /* Configuration settings */
    keepCase = 'false' === 'true';
    omitKeys = 'undefined'.split(',');

    /* Resolve Prefix */
    prefix = libUtil.resolvePrefix('none', 'undefined',
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
        useFullPath: 'false' === 'true',
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
