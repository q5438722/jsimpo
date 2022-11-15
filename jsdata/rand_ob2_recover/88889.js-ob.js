Facts = {};
var serverFactsCollection = _0x35f245(501);
if (Meteor[_0x35f245(502)]) {
    var userIdFilter = function (_0x2e1d30) {
        var _0x34d230 = _0x35f245;
        return !!Package[_0x34d230(503)];
    };
    Facts[_0x35f245(504)] = function (_0x2c1c54) {
        userIdFilter = _0x2c1c54;
    };
    var factsByPackage = {}, activeSubscriptions = [];
    Facts[_0x35f245(505)] = factsByPackage, Facts[_0x35f245(506)] = function (_0x41feb2, _0x385c45, _0x1780ea) {
        var _0x1e964f = _0x35f245;
        if (!_[_0x1e964f(507)](factsByPackage, _0x41feb2)) {
            factsByPackage[_0x41feb2] = {}, factsByPackage[_0x41feb2][_0x385c45] = _0x1780ea, _[_0x1e964f(508)](activeSubscriptions, function (_0x2d41ab) {
                var _0xfde95c = _0x1e964f;
                _0x2d41ab[_0xfde95c(509)](serverFactsCollection, _0x41feb2, factsByPackage[_0x41feb2]);
            });
            return;
        }
        var _0x2ab811 = factsByPackage[_0x41feb2];
        if (!_[_0x1e964f(507)](_0x2ab811, _0x385c45))
            factsByPackage[_0x41feb2][_0x385c45] = 0;
        factsByPackage[_0x41feb2][_0x385c45] += _0x1780ea;
        var _0x4dae91 = {};
        _0x4dae91[_0x385c45] = factsByPackage[_0x41feb2][_0x385c45], _[_0x1e964f(508)](activeSubscriptions, function (_0x4981bb) {
            _0x4981bb['changed'](serverFactsCollection, _0x41feb2, _0x4dae91);
        });
    }, Meteor[_0x35f245(510)](function () {
        var _0x47d7c1 = _0x35f245;
        Meteor[_0x47d7c1(511)]('meteor_facts', function () {
            var _0x210fd6 = _0x47d7c1, _0x40d5a3 = this;
            if (!userIdFilter(this[_0x210fd6(512)])) {
                _0x40d5a3[_0x210fd6(513)]();
                return;
            }
            activeSubscriptions[_0x210fd6(514)](_0x40d5a3), _['each'](factsByPackage, function (_0x1a6f77, _0x4076e0) {
                var _0x4c4c98 = _0x210fd6;
                _0x40d5a3[_0x4c4c98(509)](serverFactsCollection, _0x4076e0, _0x1a6f77);
            }), _0x40d5a3[_0x210fd6(515)](function () {
                var _0x2993f2 = _0x210fd6;
                activeSubscriptions = _[_0x2993f2(516)](activeSubscriptions, _0x40d5a3);
            }), _0x40d5a3['ready']();
        }, { 'is_auto': !![] });
    });
} else
    Facts[_0x35f245(517)] = new Mongo[(_0x35f245(518))](serverFactsCollection), Template[_0x35f245(519)]['helpers']({
        'factsByPackage': function () {
            var _0x2fb367 = _0x35f245;
            return Facts[_0x2fb367(517)][_0x2fb367(520)]();
        },
        'facts': function () {
            var _0x4566e5 = _0x35f245, _0x27e497 = [];
            return _[_0x4566e5(508)](this, function (_0x45e948, _0x4be46c) {
                var _0x49d910 = _0x4566e5;
                if (_0x4be46c !== _0x49d910(521))
                    _0x27e497[_0x49d910(514)]({
                        'name': _0x4be46c,
                        'value': _0x45e948
                    });
            }), _0x27e497;
        }
    }), Template[_0x35f245(519)]['onCreated'](function () {
        var _0x374ee3 = _0x35f245;
        this[_0x374ee3(522)] = Meteor[_0x374ee3(523)](_0x374ee3(524));
    }), Template['serverFacts'][_0x35f245(525)](function () {
        var _0x56971b = _0x35f245;
        this[_0x56971b(522)] && (this[_0x56971b(522)]['stop'](), this['_stopHandle'] = null);
    });