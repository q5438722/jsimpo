'use strict';
var _0x5611 = [
    'reject',
    '$$timeoutId',
    '$apply',
    'badprom',
    '`$timeout.cancel()`\x20called\x20with\x20a\x20promise\x20that\x20was\x20not\x20generated\x20by\x20`$timeout()`.',
    'canceled',
    'defer',
    'cancel',
    '97444aOCmbL',
    '251139QVZTMQ',
    '1gDCNgG',
    '78668HEYEZA',
    '1gwiXhV',
    '214484bvHfMP',
    '346BwNeGY',
    '797pvlGNr',
    '2357BKIEho',
    '79TsByOi',
    '2411TLXqER',
    '389ABYveW',
    '$timeout',
    '$rootScope',
    '$browser',
    '$exceptionHandler',
    'promise',
    'resolve',
    'apply'
];
var _0x224e77 = _0x5e85;
(function (_0x42b2a4, _0x9d6bd0) {
    var _0x3cdc22 = _0x5e85;
    while (!![]) {
        try {
            var _0x4c5787 = -parseInt(_0x3cdc22(0x83)) + -parseInt(_0x3cdc22(0x84)) + -parseInt(_0x3cdc22(0x85)) * parseInt(_0x3cdc22(0x86)) + parseInt(_0x3cdc22(0x87)) * -parseInt(_0x3cdc22(0x88)) + parseInt(_0x3cdc22(0x89)) * -parseInt(_0x3cdc22(0x8a)) + parseInt(_0x3cdc22(0x8b)) * parseInt(_0x3cdc22(0x8c)) + parseInt(_0x3cdc22(0x8d)) * parseInt(_0x3cdc22(0x8e));
            if (_0x4c5787 === _0x9d6bd0)
                break;
            else
                _0x42b2a4['push'](_0x42b2a4['shift']());
        } catch (_0xb9324f) {
            _0x42b2a4['push'](_0x42b2a4['shift']());
        }
    }
}(_0x5611, 0x326f9));
var $timeoutMinErr = minErr(_0x224e77(0x8f));
function _0x5e85(_0x3deb27, _0x44feb5) {
    return _0x5e85 = function (_0x5611bc, _0x5e8550) {
        _0x5611bc = _0x5611bc - 0x83;
        var _0x2f8790 = _0x5611[_0x5611bc];
        return _0x2f8790;
    }, _0x5e85(_0x3deb27, _0x44feb5);
}
function $TimeoutProvider() {
    var _0x30360a = _0x224e77;
    this['$get'] = [
        _0x30360a(0x90),
        _0x30360a(0x91),
        '$q',
        '$$q',
        _0x30360a(0x92),
        function (_0x152e08, _0x941f93, _0x295a1e, _0x42c2e8, _0x2e7b9f) {
            var _0x25c395 = {};
            function _0x406747(_0x5402cf, _0x109f96, _0x22fb3a) {
                var _0x5c5aec = _0x5e85;
                !isFunction(_0x5402cf) && (_0x22fb3a = _0x109f96, _0x109f96 = _0x5402cf, _0x5402cf = noop);
                var _0x4fab9d = sliceArgs(arguments, 0x3), _0x3367cd = isDefined(_0x22fb3a) && !_0x22fb3a, _0x322f1e = (_0x3367cd ? _0x42c2e8 : _0x295a1e)['defer'](), _0x1c44bb = _0x322f1e[_0x5c5aec(0x93)], _0x78d590;
                return _0x78d590 = _0x941f93['defer'](function () {
                    var _0x5b2c9d = _0x5c5aec;
                    try {
                        _0x322f1e[_0x5b2c9d(0x94)](_0x5402cf[_0x5b2c9d(0x95)](null, _0x4fab9d));
                    } catch (_0x242307) {
                        _0x322f1e[_0x5b2c9d(0x96)](_0x242307), _0x2e7b9f(_0x242307);
                    } finally {
                        delete _0x25c395[_0x1c44bb[_0x5b2c9d(0x97)]];
                    }
                    if (!_0x3367cd)
                        _0x152e08[_0x5b2c9d(0x98)]();
                }, _0x109f96, _0x5c5aec(0x8f)), _0x1c44bb['$$timeoutId'] = _0x78d590, _0x25c395[_0x78d590] = _0x322f1e, _0x1c44bb;
            }
            return _0x406747['cancel'] = function (_0x19175b) {
                var _0x2179a8 = _0x5e85;
                if (!_0x19175b)
                    return ![];
                if (!_0x19175b['hasOwnProperty'](_0x2179a8(0x97)))
                    throw $timeoutMinErr(_0x2179a8(0x99), _0x2179a8(0x9a));
                if (!_0x25c395['hasOwnProperty'](_0x19175b[_0x2179a8(0x97)]))
                    return ![];
                var _0x563cd4 = _0x19175b['$$timeoutId'], _0x3f6288 = _0x25c395[_0x563cd4];
                return markQExceptionHandled(_0x3f6288[_0x2179a8(0x93)]), _0x3f6288[_0x2179a8(0x96)](_0x2179a8(0x9b)), delete _0x25c395[_0x563cd4], _0x941f93[_0x2179a8(0x9c)][_0x2179a8(0x9d)](_0x563cd4);
            }, _0x406747;
        }
    ];
}
