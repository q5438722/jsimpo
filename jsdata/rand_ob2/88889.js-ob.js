var _0x13ff = [
    'serverFacts',
    'find',
    '_id',
    '_stopHandle',
    'subscribe',
    'meteor_facts',
    'onDestroyed',
    '4468gtKYgB',
    '177TlqZUX',
    '2zkCrYy',
    '359654vLbotC',
    '1549304qMsiLS',
    '364SEEDBA',
    '2815hskSKe',
    '40xoxVqx',
    '13367ANlZsh',
    '1149187rAcXuJ',
    '2003300xaYEjU',
    'meteor_Facts_server',
    'isServer',
    'autopublish',
    'setUserIdFilter',
    '_factsByPackage',
    'incrementServerFact',
    'has',
    'each',
    'added',
    'defer',
    'publish',
    'userId',
    'ready',
    'push',
    'onStop',
    'without',
    'server',
    'Collection'
];
var _0x35f245 = _0x5541;
function _0x5541(_0x232842, _0x21e2d5) {
    return _0x5541 = function (_0x13ff93, _0x554198) {
        _0x13ff93 = _0x13ff93 - 0x1ea;
        var _0x3f1b30 = _0x13ff[_0x13ff93];
        return _0x3f1b30;
    }, _0x5541(_0x232842, _0x21e2d5);
}
(function (_0x53e67b, _0x35c131) {
    var _0x263b35 = _0x5541;
    while (!![]) {
        try {
            var _0x2170ad = -parseInt(_0x263b35(0x1ea)) * -parseInt(_0x263b35(0x1eb)) + -parseInt(_0x263b35(0x1ec)) * parseInt(_0x263b35(0x1ed)) + -parseInt(_0x263b35(0x1ee)) + parseInt(_0x263b35(0x1ef)) * parseInt(_0x263b35(0x1f0)) + parseInt(_0x263b35(0x1f1)) * parseInt(_0x263b35(0x1f2)) + -parseInt(_0x263b35(0x1f3)) + parseInt(_0x263b35(0x1f4));
            if (_0x2170ad === _0x35c131)
                break;
            else
                _0x53e67b['push'](_0x53e67b['shift']());
        } catch (_0x234b4f) {
            _0x53e67b['push'](_0x53e67b['shift']());
        }
    }
}(_0x13ff, 0xe46fd), Facts = {});
var serverFactsCollection = _0x35f245(0x1f5);
if (Meteor[_0x35f245(0x1f6)]) {
    var userIdFilter = function (_0x2e1d30) {
        var _0x34d230 = _0x35f245;
        return !!Package[_0x34d230(0x1f7)];
    };
    Facts[_0x35f245(0x1f8)] = function (_0x2c1c54) {
        userIdFilter = _0x2c1c54;
    };
    var factsByPackage = {}, activeSubscriptions = [];
    Facts[_0x35f245(0x1f9)] = factsByPackage, Facts[_0x35f245(0x1fa)] = function (_0x41feb2, _0x385c45, _0x1780ea) {
        var _0x1e964f = _0x35f245;
        if (!_[_0x1e964f(0x1fb)](factsByPackage, _0x41feb2)) {
            factsByPackage[_0x41feb2] = {}, factsByPackage[_0x41feb2][_0x385c45] = _0x1780ea, _[_0x1e964f(0x1fc)](activeSubscriptions, function (_0x2d41ab) {
                var _0xfde95c = _0x1e964f;
                _0x2d41ab[_0xfde95c(0x1fd)](serverFactsCollection, _0x41feb2, factsByPackage[_0x41feb2]);
            });
            return;
        }
        var _0x2ab811 = factsByPackage[_0x41feb2];
        if (!_[_0x1e964f(0x1fb)](_0x2ab811, _0x385c45))
            factsByPackage[_0x41feb2][_0x385c45] = 0x0;
        factsByPackage[_0x41feb2][_0x385c45] += _0x1780ea;
        var _0x4dae91 = {};
        _0x4dae91[_0x385c45] = factsByPackage[_0x41feb2][_0x385c45], _[_0x1e964f(0x1fc)](activeSubscriptions, function (_0x4981bb) {
            _0x4981bb['changed'](serverFactsCollection, _0x41feb2, _0x4dae91);
        });
    }, Meteor[_0x35f245(0x1fe)](function () {
        var _0x47d7c1 = _0x35f245;
        Meteor[_0x47d7c1(0x1ff)]('meteor_facts', function () {
            var _0x210fd6 = _0x47d7c1, _0x40d5a3 = this;
            if (!userIdFilter(this[_0x210fd6(0x200)])) {
                _0x40d5a3[_0x210fd6(0x201)]();
                return;
            }
            activeSubscriptions[_0x210fd6(0x202)](_0x40d5a3), _['each'](factsByPackage, function (_0x1a6f77, _0x4076e0) {
                var _0x4c4c98 = _0x210fd6;
                _0x40d5a3[_0x4c4c98(0x1fd)](serverFactsCollection, _0x4076e0, _0x1a6f77);
            }), _0x40d5a3[_0x210fd6(0x203)](function () {
                var _0x2993f2 = _0x210fd6;
                activeSubscriptions = _[_0x2993f2(0x204)](activeSubscriptions, _0x40d5a3);
            }), _0x40d5a3['ready']();
        }, { 'is_auto': !![] });
    });
} else
    Facts[_0x35f245(0x205)] = new Mongo[(_0x35f245(0x206))](serverFactsCollection), Template[_0x35f245(0x207)]['helpers']({
        'factsByPackage': function () {
            var _0x2fb367 = _0x35f245;
            return Facts[_0x2fb367(0x205)][_0x2fb367(0x208)]();
        },
        'facts': function () {
            var _0x4566e5 = _0x35f245, _0x27e497 = [];
            return _[_0x4566e5(0x1fc)](this, function (_0x45e948, _0x4be46c) {
                var _0x49d910 = _0x4566e5;
                if (_0x4be46c !== _0x49d910(0x209))
                    _0x27e497[_0x49d910(0x202)]({
                        'name': _0x4be46c,
                        'value': _0x45e948
                    });
            }), _0x27e497;
        }
    }), Template[_0x35f245(0x207)]['onCreated'](function () {
        var _0x374ee3 = _0x35f245;
        this[_0x374ee3(0x20a)] = Meteor[_0x374ee3(0x20b)](_0x374ee3(0x20c));
    }), Template['serverFacts'][_0x35f245(0x20d)](function () {
        var _0x56971b = _0x35f245;
        this[_0x56971b(0x20a)] && (this[_0x56971b(0x20a)]['stop'](), this['_stopHandle'] = null);
    });
