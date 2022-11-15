(function (_0x1ab876) {
    'function' === typeof define && define['amd'] ? define([
        'jquery',
        'datatables.net-bs4',
        'datatables.net-rowgroup'
    ], function (_0x36cb00) {
        return _0x1ab876(_0x36cb00, window, document);
    }) : 'object' === typeof exports ? module['exports'] = function (_0x43a2b8, _0xbf741) {
        _0x43a2b8 || (_0x43a2b8 = window);
        if (!_0xbf741 || !_0xbf741['fn']['dataTable'])
            _0xbf741 = require('datatables.net-bs4')(_0x43a2b8, _0xbf741)['$'];
        _0xbf741['fn']['dataTable']['RowGroup'] || require('datatables.net-rowgroup')(_0x43a2b8, _0xbf741);
        return _0x1ab876(_0xbf741, _0x43a2b8, _0x43a2b8['document']);
    } : _0x1ab876(jQuery, window, document);
}(function (_0x2d4ec4) {
    return _0x2d4ec4['fn']['dataTable'];
}));