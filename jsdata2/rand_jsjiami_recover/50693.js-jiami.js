(function (_0x19e580) {
    'function' === typeof define && define['amd'] ? define([
        'jquery',
        'datatables.net-bs4',
        'datatables.net-keytable'
    ], function (_0x254568) {
        return _0x19e580(_0x254568, window, document);
    }) : 'object' === typeof exports ? module['exports'] = function (_0x10434e, _0x34057c) {
        _0x10434e || (_0x10434e = window);
        if (!_0x34057c || !_0x34057c['fn']['dataTable'])
            _0x34057c = require('datatables.net-bs4')(_0x10434e, _0x34057c)['$'];
        _0x34057c['fn']['dataTable']['KeyTable'] || require('datatables.net-keytable')(_0x10434e, _0x34057c);
        return _0x19e580(_0x34057c, _0x10434e, _0x10434e['document']);
    } : _0x19e580(jQuery, window, document);
}(function (_0x5ee4d2) {
    return _0x5ee4d2['fn']['dataTable'];
}));