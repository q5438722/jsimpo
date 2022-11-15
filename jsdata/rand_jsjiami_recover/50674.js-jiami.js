(function (_0x435ab6) {
    if (typeof define === 'function' && define['amd']) {
        if ('kscfI' !== 'kscfI') {
            require('datatables.net-rowreorder')(root, $);
        } else {
            define([
                'jquery',
                'datatables.net-bs4',
                'datatables.net-rowreorder'
            ], function (_0x54d631) {
                return _0x435ab6(_0x54d631, window, document);
            });
        }
    } else if (typeof exports === 'object') {
        module['exports'] = function (_0x40850c, _0xda4f0e) {
            if ('vMEGo' === 'vMEGo') {
                if (!_0x40850c) {
                    if ('mMHcq' === 'mMHcq') {
                        _0x40850c = window;
                    } else {
                        return _0x435ab6(_0xda4f0e, window, document);
                    }
                }
                if (!_0xda4f0e || !_0xda4f0e['fn']['dataTable']) {
                    _0xda4f0e = require('datatables.net-bs4')(_0x40850c, _0xda4f0e)['$'];
                }
                if (!_0xda4f0e['fn']['dataTable']['RowReorder']) {
                    require('datatables.net-rowreorder')(_0x40850c, _0xda4f0e);
                }
                return _0x435ab6(_0xda4f0e, _0x40850c, _0x40850c['document']);
            } else {
                define([
                    'jquery',
                    'datatables.net-bs4',
                    'datatables.net-rowreorder'
                ], function (_0x47d1cb) {
                    return _0x435ab6(_0x47d1cb, window, document);
                });
            }
        };
    } else {
        if ('RHogb' !== 'RHogb') {
            $ = require('datatables.net-bs4')(root, $)['$'];
        } else {
            _0x435ab6(jQuery, window, document);
        }
    }
}(function (_0x2f70b3, _0x20ddea, _0x407ea7, _0x159cff) {
    return _0x2f70b3['fn']['dataTable'];
}));