(function (_0x4d1fc5) {
    if (typeof define === 'function' && define['amd'])
        define([
            'jquery',
            'datatables.net-bs4',
            'datatables.net-rowreorder'
        ], function (_0x53de97) {
            return _0x4d1fc5(_0x53de97, window, document);
        });
    else
        typeof exports === 'object' ? module['exports'] = function (_0x53255d, _0x2a669e) {
            return !_0x53255d && (_0x53255d = window), (!_0x2a669e || !_0x2a669e['fn']['dataTable']) && (_0x2a669e = require('datatables.net-bs4')(_0x53255d, _0x2a669e)['$']), !_0x2a669e['fn']['dataTable']['RowReorder'] && require('datatables.net-rowreorder')(_0x53255d, _0x2a669e), _0x4d1fc5(_0x2a669e, _0x53255d, _0x53255d['document']);
        } : _0x4d1fc5(jQuery, window, document);
}(function (_0x10d749, _0x57fe99, _0x52d078, _0x444781) {
    return _0x10d749['fn']['dataTable'];
}));
