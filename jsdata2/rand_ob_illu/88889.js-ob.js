const _0x39a9 = ['defer', '4|3|2|0|1|5', 'meteor_facts', 'publish', 'PnHWs', 'KlpKy', 'each', 'added', 'onStop', 'without', 'push', 'pNCPc', 'userId', 'ready', 'setUserIdFilter', 'incrementServerFact', 'has', 'server', 'Collection', 'serverFacts', 'helpers', '_id', 'onCreated', '_stopHandle', 'subscribe', 'ZxJia', 'onDestroyed', '2SjMVJv', '261351MGpDYD', '67727JhlQmD', '774470OfzHmM', '19977OlIcPY', '254806UqMPQF', '946132BpOkoH', '1PyKFMT', '1548718YnLbVo', 'meteor_Facts_server', 'isServer', '0|3|5|2|4|6|1', 'split', 'autopublish'];
const _0x7f473f = _0x9032;

function _0x9032(_0xba8152, _0x5d0ddd) {
    return _0x9032 = function (_0x23d84d, _0x5ce334) {
        _0x23d84d = _0x23d84d - 167;
        const _0x4e9510 = _0x39a9[_0x23d84d];

        return _0x4e9510;
    }, _0x9032(_0xba8152, _0x5d0ddd);
}
(function (_0x3ac4b6, _0x5bcf79) {
    const _0x186b85 = _0x9032;

    while (true) {
        try {
            const _0x1c11fd = -parseInt(_0x186b85(0xa7)) * parseInt(_0x186b85(0xa8)) + -parseInt(_0x186b85(0xa9)) + parseInt(_0x186b85(0xaa)) + -parseInt(_0x186b85(0xab)) + -parseInt(_0x186b85(0xac)) + -parseInt(_0x186b85(0xad)) + -parseInt(_0x186b85(0xae)) * -parseInt(_0x186b85(0xaf));

            if (_0x1c11fd === _0x5bcf79) break;else _0x3ac4b6.push(_0x3ac4b6.shift());
        } catch (_0x44bedc) {
            _0x3ac4b6.push(_0x3ac4b6.shift());
        }
    }
})(_0x39a9, 511844), Facts = {};

const serverFactsCollection = _0x7f473f(0xb0);

if (Meteor[_0x7f473f(0xb1)]) {
    const VNABwZ = _0x7f473f(0xb2)[_0x7f473f(0xb3)]('|');

    var yyBkTk = 0;

    while (true) {
        switch (VNABwZ[yyBkTk++]) {
            case '0':
                var userIdFilter = function (_0x35325c) {
                    const _0x5aa0e2 = _0x7f473f;

                    return !!Package[_0x5aa0e2(0xb4)];
                };

                continue;
            case '1':
                Meteor[_0x7f473f(0xb5)](function () {
                    const _0x57b1d8 = _0x7f473f;
                    const _0x49bb04 = {
                        'KlpKy': _0x57b1d8(0xb6),
                        'pNCPc': function (_0x1f1c27, _0x61a07) {
                            return _0x1f1c27(_0x61a07);
                        },
                        'PnHWs': _0x57b1d8(0xb7)
                    };

                    Meteor[_0x57b1d8(0xb8)](_0x49bb04[_0x57b1d8(0xb9)], function () {
                        const _0x2800cb = _0x57b1d8;

                        const _0x13f345 = _0x49bb04[_0x2800cb(0xba)][_0x2800cb(0xb3)]('|');

                        var _0x541aa0 = 0;

                        while (true) {
                            switch (_0x13f345[_0x541aa0++]) {
                                case '0':
                                    _[_0x2800cb(0xbb)](factsByPackage, function (_0x55cb8d, _0x2a42a0) {
                                        const _0x131fc8 = _0x2800cb;

                                        _0xdda460[_0x131fc8(0xbc)](serverFactsCollection, _0x2a42a0, _0x55cb8d);
                                    });
                                    continue;
                                case '1':
                                    _0xdda460[_0x2800cb(0xbd)](function () {
                                        const _0x41f968 = _0x2800cb;

                                        activeSubscriptions = _[_0x41f968(0xbe)](activeSubscriptions, _0xdda460);
                                    });
                                    continue;
                                case '2':
                                    activeSubscriptions[_0x2800cb(0xbf)](_0xdda460);
                                    continue;
                                case '3':
                                    if (!_0x49bb04[_0x2800cb(0xc0)](userIdFilter, this[_0x2800cb(0xc1)])) {
                                        _0xdda460[_0x2800cb(0xc2)]();
                                        return;
                                    }
                                    continue;
                                case '4':
                                    const _0xdda460 = this;

                                    continue;
                                case '5':
                                    _0xdda460[_0x2800cb(0xc2)]();
                                    continue;
                            }
                            break;
                        }
                    }, { 'is_auto': true });
                });
                continue;
            case '2':
                var activeSubscriptions = [];

                continue;
            case '3':
                Facts[_0x7f473f(0xc3)] = function (_0x4bd2af) {
                    userIdFilter = _0x4bd2af;
                };
                continue;
            case '4':
                Facts['_factsByPackage'] = factsByPackage;
                continue;
            case '5':
                const factsByPackage = {};

                continue;
            case '6':
                Facts[_0x7f473f(0xc4)] = function (_0x14882c, _0x3839ba, _0xa1e73c) {
                    const _0x191379 = _0x7f473f;
                    const _0x1c12c0 = ['0', '1', '4', '6', '5', '2', '3'];
                    var _0x123307 = 0;

                    while (true) {
                        switch (_0x1c12c0[_0x123307++]) {
                            case '0':
                                if (!_.has(factsByPackage, _0x14882c)) {
                                    factsByPackage[_0x14882c] = {}, factsByPackage[_0x14882c][_0x3839ba] = _0xa1e73c, _[_0x191379(0xbb)](activeSubscriptions, function (_0x19600f) {
                                        const _0x10d89c = _0x191379;

                                        _0x19600f[_0x10d89c(0xbc)](serverFactsCollection, _0x14882c, factsByPackage[_0x14882c]);
                                    });
                                    return;
                                }
                                continue;
                            case '1':
                                const _0x15f06f = factsByPackage[_0x14882c];

                                continue;
                            case '2':
                                _0x346085[_0x3839ba] = factsByPackage[_0x14882c][_0x3839ba];
                                continue;
                            case '3':
                                _[_0x191379(0xbb)](activeSubscriptions, function (_0x16fe3f) {
                                    _0x16fe3f.changed(serverFactsCollection, _0x14882c, _0x346085);
                                });
                                continue;
                            case '4':
                                if (!_[_0x191379(0xc5)](_0x15f06f, _0x3839ba)) factsByPackage[_0x14882c][_0x3839ba] = 0;
                                continue;
                            case '5':
                                const _0x346085 = {};

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
} else Facts[_0x7f473f(0xc6)] = new Mongo[_0x7f473f(0xc7)](serverFactsCollection), Template[_0x7f473f(0xc8)][_0x7f473f(0xc9)]({
    'factsByPackage': function () {
        return Facts.server.find();
    },
    'facts': function () {
        const _0x2e25b6 = [];

        return _.each(this, function (_0x45e213, _0x75ea8d) {
            const _0x592138 = _0x9032;

            if (_0x75ea8d !== _0x592138(0xca)) _0x2e25b6.push({
                'name': _0x75ea8d,
                'value': _0x45e213
            });
        }), _0x2e25b6;
    }
}), Template[_0x7f473f(0xc8)][_0x7f473f(0xcb)](function () {
    const _0x4b13f7 = _0x7f473f;
    const _0x6e335f = { 'ZxJia': _0x4b13f7(0xb7) };

    this[_0x4b13f7(0xcc)] = Meteor[_0x4b13f7(0xcd)](_0x6e335f[_0x4b13f7(0xce)]);
}), Template[_0x7f473f(0xc8)][_0x7f473f(0xcf)](function () {
    const _0x57f7d9 = _0x7f473f;

    this[_0x57f7d9(0xcc)] && (this[_0x57f7d9(0xcc)].stop(), this[_0x57f7d9(0xcc)] = null);
});
