'use strict';
var $timeoutMinErr = minErr('$timeout');
function $TimeoutProvider() {
    var _0x8c8fd1 = {
        'zlvBV': '1|0|8|7|5|4|3|6|2',
        'UIrkE': '$$timeoutId',
        'aYPnB': function (_0x44baf7, _0x4aa906, _0x36a88) {
            return _0x44baf7(_0x4aa906, _0x36a88);
        },
        'qOMDD': 'badprom',
        'SacOM': '`$timeout.cancel()`\x20called\x20with\x20a\x20promise\x20that\x20was\x20not\x20generated\x20by\x20`$timeout()`.',
        'DWcBy': 'canceled',
        'ebBaw': function (_0x98c4a, _0xd70a32) {
            return _0x98c4a(_0xd70a32);
        },
        'mEfyn': '0|2|3|5|4|1',
        'TLFhE': function (_0x5980d4, _0x3ee91, _0xeb5994) {
            return _0x5980d4(_0x3ee91, _0xeb5994);
        },
        'IullZ': '$timeout',
        'YMQlE': '$rootScope',
        'CVzhK': '$browser',
        'OayZr': '$$q',
        'ALyiP': '$exceptionHandler'
    };
    this['$get'] = [
        _0x8c8fd1['YMQlE'],
        _0x8c8fd1['CVzhK'],
        '$q',
        _0x8c8fd1['OayZr'],
        _0x8c8fd1['ALyiP'],
        function (_0x3ef168, _0x5782a3, _0x1e0825, _0x169925, _0x247480) {
            var _0xe6268c = {
                    'ypGlE': function (_0x202986, _0x418d62) {
                        return _0x8c8fd1['ebBaw'](_0x202986, _0x418d62);
                    },
                    'EJKln': _0x8c8fd1['mEfyn'],
                    'HvvVM': function (_0x33f049, _0x4b0fe9) {
                        return _0x8c8fd1['ebBaw'](_0x33f049, _0x4b0fe9);
                    },
                    'PSLvF': function (_0x539376, _0x18d140, _0x51d3c9) {
                        return _0x8c8fd1['TLFhE'](_0x539376, _0x18d140, _0x51d3c9);
                    },
                    'GjDqU': _0x8c8fd1['IullZ']
                }, _0x1f26e2 = {};
            function _0x3f49a7(_0xf105e4, _0x287640, _0xe1025e) {
                var _0x173596 = _0xe6268c['EJKln']['split']('|'), _0x437d80 = 0x0;
                while (!![]) {
                    switch (_0x173596[_0x437d80++]) {
                    case '0':
                        !_0xe6268c['HvvVM'](isFunction, _0xf105e4) && (_0xe1025e = _0x287640, _0x287640 = _0xf105e4, _0xf105e4 = noop);
                        continue;
                    case '1':
                        return _0x544694;
                    case '2':
                        var _0x255607 = _0xe6268c['PSLvF'](sliceArgs, arguments, 0x3), _0x299f27 = _0xe6268c['HvvVM'](isDefined, _0xe1025e) && !_0xe1025e, _0x476b92 = (_0x299f27 ? _0x169925 : _0x1e0825)['defer'](), _0x544694 = _0x476b92['promise'], _0x1efef1;
                        continue;
                    case '3':
                        _0x1efef1 = _0x5782a3['defer'](function () {
                            try {
                                _0x476b92['resolve'](_0xf105e4['apply'](null, _0x255607));
                            } catch (_0x5277b9) {
                                _0x476b92['reject'](_0x5277b9), _0xe6268c['ypGlE'](_0x247480, _0x5277b9);
                            } finally {
                                delete _0x1f26e2[_0x544694['$$timeoutId']];
                            }
                            if (!_0x299f27)
                                _0x3ef168['$apply']();
                        }, _0x287640, _0xe6268c['GjDqU']);
                        continue;
                    case '4':
                        _0x1f26e2[_0x1efef1] = _0x476b92;
                        continue;
                    case '5':
                        _0x544694['$$timeoutId'] = _0x1efef1;
                        continue;
                    }
                    break;
                }
            }
            return _0x3f49a7['cancel'] = function (_0x3ffb0c) {
                var _0x4f84c5 = _0x8c8fd1['zlvBV']['split']('|'), _0x214279 = 0x0;
                while (!![]) {
                    switch (_0x4f84c5[_0x214279++]) {
                    case '0':
                        if (!_0x3ffb0c['hasOwnProperty'](_0x8c8fd1['UIrkE']))
                            throw _0x8c8fd1['aYPnB']($timeoutMinErr, _0x8c8fd1['qOMDD'], _0x8c8fd1['SacOM']);
                        continue;
                    case '1':
                        if (!_0x3ffb0c)
                            return ![];
                        continue;
                    case '2':
                        return _0x5782a3['defer']['cancel'](_0x5dab37);
                    case '3':
                        _0x503684['reject'](_0x8c8fd1['DWcBy']);
                        continue;
                    case '4':
                        _0x8c8fd1['ebBaw'](markQExceptionHandled, _0x503684['promise']);
                        continue;
                    case '5':
                        var _0x503684 = _0x1f26e2[_0x5dab37];
                        continue;
                    case '6':
                        delete _0x1f26e2[_0x5dab37];
                        continue;
                    case '7':
                        var _0x5dab37 = _0x3ffb0c['$$timeoutId'];
                        continue;
                    case '8':
                        if (!_0x1f26e2['hasOwnProperty'](_0x3ffb0c['$$timeoutId']))
                            return ![];
                        continue;
                    }
                    break;
                }
            }, _0x3f49a7;
        }
    ];
}
