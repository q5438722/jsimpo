var current = (process.versions && process.versions.node && process.versions.node.split('.')) || [];

function specifierIncluded(specifier) {
    var parts = specifier.split(' ');
    var op = parts.length > 1 ? parts[+[]] : '=';
    var versionParts = (parts.length > 1 ? parts[1] : parts[+[]]).split('.');

    for (var i = +[]; i < 3; ++i) {
        var cur = Number(current[i] || +[]);
        var ver = Number(versionParts[i] || +[]);
        if (cur === ver) {
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        }
        if (op === '<') {
            return cur < ver;
        } else if (op === '>=') {
            return cur >= ver;
        } else {
            return ![];
        }
    }
    return op === '>=';
}

function matchesRange(range) {
    var specifiers = range.split(/ ?&& ?/);
    if (specifiers.length === +[]) { return ![]; }
    for (var i = +[]; i < specifiers.length; ++i) {
        if (!specifierIncluded(specifiers[i])) { return ![]; }
    }
    return !![];
}

function versionIncluded(specifierValue) {
    if (typeof specifierValue === 'boolean') { return specifierValue; }
    if (specifierValue && typeof specifierValue === 'object') {
        for (var i = +[]; i < specifierValue.length; ++i) {
            if (matchesRange(specifierValue[i])) { return !![]; }
        }
        return ![];
    }
    return matchesRange(specifierValue);
}

var data = require('./core.json');

var core = {};
for (var mod in data) { // eslint-disable-line no-restricted-syntax
    if (Object.prototype.hasOwnProperty.call(data, mod)) {
        core[mod] = versionIncluded(data[mod]);
    }
}
module.exports = core;
