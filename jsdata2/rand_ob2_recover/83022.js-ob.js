var $timeoutMinErr = minErr(_0x5aea5f(370));
function _0x187c(_0x3df995, _0x3629ed) {
    return _0x187c = function (_0x442056, _0x187c1c) {
        _0x442056 = _0x442056 - 360;
        var _0x5cc760 = _0x4420[_0x442056];
        return _0x5cc760;
    }, _0x187c(_0x3df995, _0x3629ed);
}
function $TimeoutProvider() {
    var _0x3bd576 = _0x5aea5f;
    this[_0x3bd576(371)] = [
        _0x3bd576(372),
        _0x3bd576(373),
        '$q',
        _0x3bd576(374),
        _0x3bd576(375),
        function (_0x552e4c, _0x5b05ed, _0x3dbc36, _0x194959, _0x4e5dd6) {
            var _0x486877 = _0x3bd576, _0x4b86de = {};
            function _0x28d5c6(_0x53e3a1, _0x46cc91, _0x25cacf) {
                var _0x321d52 = _0x187c;
                !isFunction(_0x53e3a1) && (_0x25cacf = _0x46cc91, _0x46cc91 = _0x53e3a1, _0x53e3a1 = noop);
                var _0x2e6f1c = sliceArgs(arguments, 3), _0x4b4fe7 = isDefined(_0x25cacf) && !_0x25cacf, _0x3e5c37 = (_0x4b4fe7 ? _0x194959 : _0x3dbc36)[_0x321d52(376)](), _0x280e0f = _0x3e5c37['promise'], _0x11ffc9;
                return _0x11ffc9 = _0x5b05ed[_0x321d52(376)](function () {
                    var _0x2e879b = _0x321d52;
                    try {
                        _0x3e5c37[_0x2e879b(377)](_0x53e3a1[_0x2e879b(378)](null, _0x2e6f1c));
                    } catch (_0x18a31a) {
                        _0x3e5c37[_0x2e879b(379)](_0x18a31a), _0x4e5dd6(_0x18a31a);
                    } finally {
                        delete _0x4b86de[_0x280e0f[_0x2e879b(380)]];
                    }
                    if (!_0x4b4fe7)
                        _0x552e4c['$apply']();
                }, _0x46cc91, _0x321d52(370)), _0x280e0f[_0x321d52(380)] = _0x11ffc9, _0x4b86de[_0x11ffc9] = _0x3e5c37, _0x280e0f;
            }
            return _0x28d5c6[_0x486877(381)] = function (_0x31644c) {
                var _0x37116b = _0x486877;
                if (!_0x31644c)
                    return ![];
                if (!_0x31644c[_0x37116b(382)](_0x37116b(380)))
                    throw $timeoutMinErr(_0x37116b(383), _0x37116b(384));
                if (!_0x4b86de[_0x37116b(382)](_0x31644c[_0x37116b(380)]))
                    return ![];
                var _0x53e2f5 = _0x31644c[_0x37116b(380)], _0x2e80b9 = _0x4b86de[_0x53e2f5];
                return markQExceptionHandled(_0x2e80b9[_0x37116b(385)]), _0x2e80b9['reject']('canceled'), delete _0x4b86de[_0x53e2f5], _0x5b05ed['defer']['cancel'](_0x53e2f5);
            }, _0x28d5c6;
        }
    ];
}