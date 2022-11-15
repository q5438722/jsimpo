'use strict';
var $timeoutMinErr = minErr('$timeout');
function $TimeoutProvider() {
    this['$get'] = [
        '$rootScope',
        '$browser',
        '$q',
        '$$q',
        '$exceptionHandler',
        function (_0x538416, _0x21f9f7, _0x406b70, _0x4ba979, _0x130b58) {
            var _0x31819a = {};
            function _0xb22331(_0x1927b8, _0x432949, _0x5a3d4a) {
                !isFunction(_0x1927b8) && (_0x5a3d4a = _0x432949, _0x432949 = _0x1927b8, _0x1927b8 = noop);
                var _0x26d1b1 = sliceArgs(arguments, 0x165b + -0xc20 + -0xa38), _0x5e7a02 = isDefined(_0x5a3d4a) && !_0x5a3d4a, _0x4d9779 = (_0x5e7a02 ? _0x4ba979 : _0x406b70)['defer'](), _0x38b86b = _0x4d9779['promise'], _0x3d00da;
                return _0x3d00da = _0x21f9f7['defer'](function () {
                    try {
                        _0x4d9779['resolve'](_0x1927b8['apply'](null, _0x26d1b1));
                    } catch (_0x1473d9) {
                        _0x4d9779['reject'](_0x1473d9), _0x130b58(_0x1473d9);
                    } finally {
                        delete _0x31819a[_0x38b86b['$$timeoutId']];
                    }
                    if (!_0x5e7a02)
                        _0x538416['$apply']();
                }, _0x432949, '$timeout'), _0x38b86b['$$timeoutId'] = _0x3d00da, _0x31819a[_0x3d00da] = _0x4d9779, _0x38b86b;
            }
            return _0xb22331['cancel'] = function (_0x191e2f) {
                if (!_0x191e2f)
                    return ![];
                if (!_0x191e2f['hasOwnProperty']('$$timeoutId'))
                    throw $timeoutMinErr('badprom', '`$timeout.cancel()`\x20called\x20with\x20a\x20promise\x20that\x20was\x20not\x20generated\x20by\x20`$timeout()`.');
                if (!_0x31819a['hasOwnProperty'](_0x191e2f['$$timeoutId']))
                    return ![];
                var _0x92cfb7 = _0x191e2f['$$timeoutId'], _0x4f05da = _0x31819a[_0x92cfb7];
                return markQExceptionHandled(_0x4f05da['promise']), _0x4f05da['reject']('canceled'), delete _0x31819a[_0x92cfb7], _0x21f9f7['defer']['cancel'](_0x92cfb7);
            }, _0xb22331;
        }
    ];
}
