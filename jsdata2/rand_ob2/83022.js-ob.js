'use strict';
var _0x4420 = [
    '$exceptionHandler',
    'defer',
    'resolve',
    'apply',
    'reject',
    '$$timeoutId',
    'cancel',
    'hasOwnProperty',
    'badprom',
    '`$timeout.cancel()`\x20called\x20with\x20a\x20promise\x20that\x20was\x20not\x20generated\x20by\x20`$timeout()`.',
    'promise',
    '248671iuFgDd',
    '1mOtmiJ',
    '338378cVeuYf',
    '261620qbaxYc',
    '173omqcIJ',
    '759CLyGTI',
    '79482yoCsBK',
    '345091opEQdO',
    '1lmYrYD',
    '143702VATbfI',
    '$timeout',
    '$get',
    '$rootScope',
    '$browser',
    '$$q'
];
var _0x5aea5f = _0x187c;
(function (_0x1c349e, _0x56c842) {
    var _0x372bc7 = _0x187c;
    while (!![]) {
        try {
            var _0x28e72d = -parseInt(_0x372bc7(0x168)) * -parseInt(_0x372bc7(0x169)) + -parseInt(_0x372bc7(0x16a)) + parseInt(_0x372bc7(0x16b)) + parseInt(_0x372bc7(0x16c)) * -parseInt(_0x372bc7(0x16d)) + parseInt(_0x372bc7(0x16e)) + parseInt(_0x372bc7(0x16f)) * parseInt(_0x372bc7(0x170)) + -parseInt(_0x372bc7(0x171));
            if (_0x28e72d === _0x56c842)
                break;
            else
                _0x1c349e['push'](_0x1c349e['shift']());
        } catch (_0x320981) {
            _0x1c349e['push'](_0x1c349e['shift']());
        }
    }
}(_0x4420, 0x4e7c5));
var $timeoutMinErr = minErr(_0x5aea5f(0x172));
function _0x187c(_0x3df995, _0x3629ed) {
    return _0x187c = function (_0x442056, _0x187c1c) {
        _0x442056 = _0x442056 - 0x168;
        var _0x5cc760 = _0x4420[_0x442056];
        return _0x5cc760;
    }, _0x187c(_0x3df995, _0x3629ed);
}
function $TimeoutProvider() {
    var _0x3bd576 = _0x5aea5f;
    this[_0x3bd576(0x173)] = [
        _0x3bd576(0x174),
        _0x3bd576(0x175),
        '$q',
        _0x3bd576(0x176),
        _0x3bd576(0x177),
        function (_0x552e4c, _0x5b05ed, _0x3dbc36, _0x194959, _0x4e5dd6) {
            var _0x486877 = _0x3bd576, _0x4b86de = {};
            function _0x28d5c6(_0x53e3a1, _0x46cc91, _0x25cacf) {
                var _0x321d52 = _0x187c;
                !isFunction(_0x53e3a1) && (_0x25cacf = _0x46cc91, _0x46cc91 = _0x53e3a1, _0x53e3a1 = noop);
                var _0x2e6f1c = sliceArgs(arguments, 0x3), _0x4b4fe7 = isDefined(_0x25cacf) && !_0x25cacf, _0x3e5c37 = (_0x4b4fe7 ? _0x194959 : _0x3dbc36)[_0x321d52(0x178)](), _0x280e0f = _0x3e5c37['promise'], _0x11ffc9;
                return _0x11ffc9 = _0x5b05ed[_0x321d52(0x178)](function () {
                    var _0x2e879b = _0x321d52;
                    try {
                        _0x3e5c37[_0x2e879b(0x179)](_0x53e3a1[_0x2e879b(0x17a)](null, _0x2e6f1c));
                    } catch (_0x18a31a) {
                        _0x3e5c37[_0x2e879b(0x17b)](_0x18a31a), _0x4e5dd6(_0x18a31a);
                    } finally {
                        delete _0x4b86de[_0x280e0f[_0x2e879b(0x17c)]];
                    }
                    if (!_0x4b4fe7)
                        _0x552e4c['$apply']();
                }, _0x46cc91, _0x321d52(0x172)), _0x280e0f[_0x321d52(0x17c)] = _0x11ffc9, _0x4b86de[_0x11ffc9] = _0x3e5c37, _0x280e0f;
            }
            return _0x28d5c6[_0x486877(0x17d)] = function (_0x31644c) {
                var _0x37116b = _0x486877;
                if (!_0x31644c)
                    return ![];
                if (!_0x31644c[_0x37116b(0x17e)](_0x37116b(0x17c)))
                    throw $timeoutMinErr(_0x37116b(0x17f), _0x37116b(0x180));
                if (!_0x4b86de[_0x37116b(0x17e)](_0x31644c[_0x37116b(0x17c)]))
                    return ![];
                var _0x53e2f5 = _0x31644c[_0x37116b(0x17c)], _0x2e80b9 = _0x4b86de[_0x53e2f5];
                return markQExceptionHandled(_0x2e80b9[_0x37116b(0x181)]), _0x2e80b9['reject']('canceled'), delete _0x4b86de[_0x53e2f5], _0x5b05ed['defer']['cancel'](_0x53e2f5);
            }, _0x28d5c6;
        }
    ];
}
