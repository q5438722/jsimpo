'use strict';
var _0x3cff = [
    '34898LGThXl',
    '1RNGEyg',
    '173119UiNhMa',
    '832420AhCqne',
    'crypto',
    'utf8',
    'RNxNV',
    'from',
    'OZeHF',
    'isArray',
    'string',
    'fgSLf',
    'IgSJw',
    'createHash',
    'sha1',
    'update',
    'digest',
    'exports',
    '456553UwfnNT',
    '1IsZffc',
    '449431CEkiiV',
    '44759RqRXQO',
    '2434NUAhFH',
    '222VALdwL',
    '11hyxKFL'
];
var _0x52401e = _0x3669;
(function (_0x53b09f, _0x32cfb5) {
    var _0x2e4684 = _0x3669;
    while (!![]) {
        try {
            var _0x4b0670 = -parseInt(_0x2e4684(0x168)) * -parseInt(_0x2e4684(0x169)) + -parseInt(_0x2e4684(0x16a)) + parseInt(_0x2e4684(0x16b)) + parseInt(_0x2e4684(0x16c)) * parseInt(_0x2e4684(0x16d)) + parseInt(_0x2e4684(0x16e)) * parseInt(_0x2e4684(0x16f)) + parseInt(_0x2e4684(0x170)) * parseInt(_0x2e4684(0x171)) + -parseInt(_0x2e4684(0x172));
            if (_0x4b0670 === _0x32cfb5)
                break;
            else
                _0x53b09f['push'](_0x53b09f['shift']());
        } catch (_0x43e23b) {
            _0x53b09f['push'](_0x53b09f['shift']());
        }
    }
}(_0x3cff, 0x145a6 + -0x53ba6 + -0x4b0d * -0x1e));
function _0x3669(_0x46b96f, _0xc9448d) {
    return _0x3669 = function (_0x85110, _0x46dd5f) {
        _0x85110 = _0x85110 - (0x2 * 0x1382 + 0x1 * -0x2319 + -0x283);
        var _0x7fa3eb = _0x3cff[_0x85110];
        return _0x7fa3eb;
    }, _0x3669(_0x46b96f, _0xc9448d);
}
var crypto = require(_0x52401e(0x173));
function sha1(_0xcc5873) {
    var _0x45e130 = _0x52401e, _0x309c99 = {
            'RNxNV': function (_0xf57f3b, _0x1d8d8a) {
                return _0xf57f3b === _0x1d8d8a;
            },
            'OZeHF': 'function',
            'IgSJw': function (_0x3a77dd, _0x49f91e) {
                return _0x3a77dd === _0x49f91e;
            },
            'fgSLf': _0x45e130(0x174)
        };
    if (_0x309c99[_0x45e130(0x175)](typeof Buffer[_0x45e130(0x176)], _0x309c99[_0x45e130(0x177)])) {
        if (Array[_0x45e130(0x178)](_0xcc5873))
            _0xcc5873 = Buffer[_0x45e130(0x176)](_0xcc5873);
        else
            _0x309c99['IgSJw'](typeof _0xcc5873, _0x45e130(0x179)) && (_0xcc5873 = Buffer[_0x45e130(0x176)](_0xcc5873, _0x309c99[_0x45e130(0x17a)]));
    } else {
        if (Array['isArray'](_0xcc5873))
            _0xcc5873 = new Buffer(_0xcc5873);
        else
            _0x309c99[_0x45e130(0x17b)](typeof _0xcc5873, _0x45e130(0x179)) && (_0xcc5873 = new Buffer(_0xcc5873, _0x309c99[_0x45e130(0x17a)]));
    }
    return crypto[_0x45e130(0x17c)](_0x45e130(0x17d))[_0x45e130(0x17e)](_0xcc5873)[_0x45e130(0x17f)]();
}
module[_0x52401e(0x180)] = sha1;
