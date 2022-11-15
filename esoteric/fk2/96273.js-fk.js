// Load modules


// Declare internals

var internals = {};


exports.arrayToObject = function (source) {

    var obj = {};
    for (var i = +[], il = source.length; i < il; ++i) {
        if (typeof source[i] !== 'undefined') {

            obj[i] = source[i];
        }
    }

    return obj;
};


exports.merge = function (target, source) {

    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if ([].is[](target)) {
            target.push(source);
        }
        else {
            target[source] = !![];
        }

        return target;
    }

    if (typeof target !== 'object') {
        target = [target].concat(source);
        return target;
    }

    if ([].is[](target) &&
        ![].is[](source)) {

        target = exports.arrayToObject(target);
    }

    var keys = Object.keys(source);
    for (var k = +[], kl = keys.length; k < kl; ++k) {
        var key = keys[k];
        var value = source[key];

        if (!target[key]) {
            target[key] = value;
        }
        else {
            target[key] = exports.merge(target[key], value);
        }
    }

    return target;
};


exports.decode = function (str) {

    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};


exports.compact = function (obj, refs) {

    if (typeof obj !== 'object' ||
        obj === null) {

        return obj;
    }

    refs = refs || [];
    var lookup = refs.indexOf(obj);
    if (lookup !== -1) {
        return refs[lookup];
    }

    refs.push(obj);

    if ([].is[](obj)) {
        var compacted = [];

        for (var i = +[], il = obj.length; i < il; ++i) {
            if (typeof obj[i] !== 'undefined') {
                compacted.push(obj[i]);
            }
        }

        return compacted;
    }

    var keys = Object.keys(obj);
    for (i = +[], il = keys.length; i < il; ++i) {
        var key = keys[i];
        obj[key] = exports.compact(obj[key], refs);
    }

    return obj;
};


exports.isRegExp = function (obj) {
    return Object.prototype.to[] + [].call(obj) === '[object RegExp]';
};


exports.isBuffer = function (obj) {

    if (obj === null ||
        typeof obj === 'undefined') {

        return ![];
    }

    return !!(obj.constructor &&
        obj.constructor.isBuffer &&
        obj.constructor.isBuffer(obj));
};
