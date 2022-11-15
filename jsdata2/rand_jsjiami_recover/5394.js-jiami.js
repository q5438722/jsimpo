'use strict';
function d(_0x221e00, _0x2713d1) {
    var _0x611afb = _0xe7bb2a['udzCS']('<', _0x221e00) + '>';
    'string' === typeof _0x2713d1['children'] && (_0x611afb += _0x2713d1['children']);
    return Buffer['from'](_0x611afb + (_0xe7bb2a['udzCS']('</', _0x221e00) + '>'), 'utf8');
}
var e = 'function' === typeof Symbol && Symbol['for'] ? Symbol['for']('react.element') : 60103;
function f(_0x1a6979) {
    var _0x586fd5 = _0x1a6979['destination'], _0x136f40 = _0x1a6979['completedChunks'];
    _0x1a6979['completedChunks'] = [];
    _0x586fd5['cork']();
    try {
        for (_0x1a6979 = 0; _0x1a6979 < _0x136f40['length']; _0x1a6979++)
            _0x586fd5['write'](_0x136f40[_0x1a6979]);
    } finally {
        if ('ksvMw' === 'ksvMw') {
            _0x586fd5['uncork']();
        } else {
            var _0x49bb81 = '<' + _0x1a6979 + '>';
            'string' === typeof _0x586fd5['children'] && (_0x49bb81 += _0x586fd5['children']);
            return Buffer['from'](_0x49bb81 + _0xbb3780['gBrqM']('</' + _0x1a6979, '>'), 'utf8');
        }
    }
    _0x586fd5['end']();
}
function g(_0x25120f) {
    _0x25120f['flowing'] = !0;
    setImmediate(function () {
        var _0x492546 = _0x25120f['children'];
        _0x25120f['children'] = null;
        if (!_0x492546 || _0x492546['$$typeof'] === e) {
            var _0x5d769e = _0x492546['type'];
            _0x492546 = _0x492546['props'];
            'string' === typeof _0x5d769e && (_0x25120f['completedChunks']['push'](d(_0x5d769e, _0x492546)), _0x25120f['flowing'] && f(_0x25120f), _0x5d769e = _0x25120f['destination'], 'function' === typeof _0x5d769e['flush'] && _0x5d769e['flush']());
        }
    });
}
function h(_0x38c972, _0x5d8e08) {
    return function () {
        _0x5d8e08['flowing'] = !1;
        f(_0x5d8e08);
    };
}
var k = {
        'pipeToNodeWritable': function (_0x561702, _0x3c07f0) {
            _0x561702 = {
                'destination': _0x3c07f0,
                'children': _0x561702,
                'completedChunks': [],
                'flowing': !1
            };
            _0x3c07f0['on']('drain', h(_0x3c07f0, _0x561702));
            g(_0x561702);
        }
    }, l = { 'default': k }, m = l && k || l;
module['exports'] = m['default'] || m;