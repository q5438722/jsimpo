Facts = {};
var serverFactsCollection = _0x7f473f(176);
if (Meteor[_0x7f473f(177)]) {
    var VNABwZ = _0x7f473f(178)[_0x7f473f(179)]('|'), yyBkTk = 5949 + 5547 + -11496;
    while (!![]) {
        switch (VNABwZ[yyBkTk++]) {
        case '0':
            var userIdFilter = function (_0x35325c) {
                var _0x5aa0e2 = _0x7f473f;
                return !!Package[_0x5aa0e2(180)];
            };
            continue;
        case '1':
            Meteor[_0x7f473f(181)](function () {
                var _0x57b1d8 = _0x7f473f, _0x49bb04 = {
                        'KlpKy': _0x57b1d8(182),
                        'pNCPc': function (_0x1f1c27, _0x61a07) {
                            return _0x1f1c27(_0x61a07);
                        },
                        'PnHWs': _0x57b1d8(183)
                    };
                Meteor[_0x57b1d8(184)](_0x49bb04[_0x57b1d8(185)], function () {
                    var _0x2800cb = _0x57b1d8, _0x13f345 = _0x49bb04[_0x2800cb(186)][_0x2800cb(179)]('|'), _0x541aa0 = 7829 + -932 * 9 + 559;
                    while (!![]) {
                        switch (_0x13f345[_0x541aa0++]) {
                        case '0':
                            _[_0x2800cb(187)](factsByPackage, function (_0x55cb8d, _0x2a42a0) {
                                var _0x131fc8 = _0x2800cb;
                                _0xdda460[_0x131fc8(188)](serverFactsCollection, _0x2a42a0, _0x55cb8d);
                            });
                            continue;
                        case '1':
                            _0xdda460[_0x2800cb(189)](function () {
                                var _0x41f968 = _0x2800cb;
                                activeSubscriptions = _[_0x41f968(190)](activeSubscriptions, _0xdda460);
                            });
                            continue;
                        case '2':
                            activeSubscriptions[_0x2800cb(191)](_0xdda460);
                            continue;
                        case '3':
                            if (!_0x49bb04[_0x2800cb(192)](userIdFilter, this[_0x2800cb(193)])) {
                                _0xdda460[_0x2800cb(194)]();
                                return;
                            }
                            continue;
                        case '4':
                            var _0xdda460 = this;
                            continue;
                        case '5':
                            _0xdda460[_0x2800cb(194)]();
                            continue;
                        }
                        break;
                    }
                }, { 'is_auto': !![] });
            });
            continue;
        case '2':
            var activeSubscriptions = [];
            continue;
        case '3':
            Facts[_0x7f473f(195)] = function (_0x4bd2af) {
                userIdFilter = _0x4bd2af;
            };
            continue;
        case '4':
            Facts['_factsByPackage'] = factsByPackage;
            continue;
        case '5':
            var factsByPackage = {};
            continue;
        case '6':
            Facts[_0x7f473f(196)] = function (_0x14882c, _0x3839ba, _0xa1e73c) {
                var _0x191379 = _0x7f473f, _0x1c12c0 = '0|1|4|6|5|2|3'['split']('|'), _0x123307 = 3 * -817 + -2 * 3515 + -9481 * -1;
                while (!![]) {
                    switch (_0x1c12c0[_0x123307++]) {
                    case '0':
                        if (!_['has'](factsByPackage, _0x14882c)) {
                            factsByPackage[_0x14882c] = {}, factsByPackage[_0x14882c][_0x3839ba] = _0xa1e73c, _[_0x191379(187)](activeSubscriptions, function (_0x19600f) {
                                var _0x10d89c = _0x191379;
                                _0x19600f[_0x10d89c(188)](serverFactsCollection, _0x14882c, factsByPackage[_0x14882c]);
                            });
                            return;
                        }
                        continue;
                    case '1':
                        var _0x15f06f = factsByPackage[_0x14882c];
                        continue;
                    case '2':
                        _0x346085[_0x3839ba] = factsByPackage[_0x14882c][_0x3839ba];
                        continue;
                    case '3':
                        _[_0x191379(187)](activeSubscriptions, function (_0x16fe3f) {
                            _0x16fe3f['changed'](serverFactsCollection, _0x14882c, _0x346085);
                        });
                        continue;
                    case '4':
                        if (!_[_0x191379(197)](_0x15f06f, _0x3839ba))
                            factsByPackage[_0x14882c][_0x3839ba] = 8605 + 1 * 9995 + 300 * -62;
                        continue;
                    case '5':
                        var _0x346085 = {};
                        continue;
                    case '6':
                        factsByPackage[_0x14882c][_0x3839ba] += _0xa1e73c;
                        continue;
                    }
                    break;
                }
            };
            continue;
        }
        break;
    }
} else
    Facts[_0x7f473f(198)] = new Mongo[(_0x7f473f(199))](serverFactsCollection), Template[_0x7f473f(200)][_0x7f473f(201)]({
        'factsByPackage': function () {
            return Facts['server']['find']();
        },
        'facts': function () {
            var _0x2e25b6 = [];
            return _['each'](this, function (_0x45e213, _0x75ea8d) {
                var _0x592138 = _0x9032;
                if (_0x75ea8d !== _0x592138(202))
                    _0x2e25b6['push']({
                        'name': _0x75ea8d,
                        'value': _0x45e213
                    });
            }), _0x2e25b6;
        }
    }), Template[_0x7f473f(200)][_0x7f473f(203)](function () {
        var _0x4b13f7 = _0x7f473f, _0x6e335f = { 'ZxJia': _0x4b13f7(183) };
        this[_0x4b13f7(204)] = Meteor[_0x4b13f7(205)](_0x6e335f[_0x4b13f7(206)]);
    }), Template[_0x7f473f(200)][_0x7f473f(207)](function () {
        var _0x57f7d9 = _0x7f473f;
        this[_0x57f7d9(204)] && (this[_0x57f7d9(204)]['stop'](), this[_0x57f7d9(204)] = null);
    });