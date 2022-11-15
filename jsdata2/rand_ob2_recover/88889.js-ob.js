Facts = {};
var serverFactsCollection = _0xe15b6d(247);
if (Meteor[_0xe15b6d(248)]) {
    var userIdFilter = function (_0x494475) {
        var _0x51af7c = _0xe15b6d;
        return !!Package[_0x51af7c(249)];
    };
    Facts[_0xe15b6d(250)] = function (_0x50b386) {
        userIdFilter = _0x50b386;
    };
    var factsByPackage = {}, activeSubscriptions = [];
    Facts[_0xe15b6d(251)] = factsByPackage, Facts[_0xe15b6d(252)] = function (_0x5a857a, _0x45bc13, _0x1c72f2) {
        var _0x1ea0c5 = _0xe15b6d;
        if (!_[_0x1ea0c5(253)](factsByPackage, _0x5a857a)) {
            factsByPackage[_0x5a857a] = {}, factsByPackage[_0x5a857a][_0x45bc13] = _0x1c72f2, _[_0x1ea0c5(254)](activeSubscriptions, function (_0x56fe38) {
                var _0x53ed21 = _0x1ea0c5;
                _0x56fe38[_0x53ed21(255)](serverFactsCollection, _0x5a857a, factsByPackage[_0x5a857a]);
            });
            return;
        }
        var _0x2bb5db = factsByPackage[_0x5a857a];
        if (!_['has'](_0x2bb5db, _0x45bc13))
            factsByPackage[_0x5a857a][_0x45bc13] = 0;
        factsByPackage[_0x5a857a][_0x45bc13] += _0x1c72f2;
        var _0x3a6094 = {};
        _0x3a6094[_0x45bc13] = factsByPackage[_0x5a857a][_0x45bc13], _['each'](activeSubscriptions, function (_0x536be7) {
            var _0x47e675 = _0x1ea0c5;
            _0x536be7[_0x47e675(256)](serverFactsCollection, _0x5a857a, _0x3a6094);
        });
    }, Meteor[_0xe15b6d(257)](function () {
        Meteor['publish']('meteor_facts', function () {
            var _0x452cc2 = _0x1fa5, _0x984533 = this;
            if (!userIdFilter(this[_0x452cc2(258)])) {
                _0x984533[_0x452cc2(259)]();
                return;
            }
            activeSubscriptions['push'](_0x984533), _['each'](factsByPackage, function (_0xa13d79, _0x52cc2e) {
                var _0x57c385 = _0x452cc2;
                _0x984533[_0x57c385(255)](serverFactsCollection, _0x52cc2e, _0xa13d79);
            }), _0x984533['onStop'](function () {
                var _0x3beb84 = _0x452cc2;
                activeSubscriptions = _[_0x3beb84(260)](activeSubscriptions, _0x984533);
            }), _0x984533[_0x452cc2(259)]();
        }, { 'is_auto': !![] });
    });
} else
    Facts[_0xe15b6d(261)] = new Mongo[(_0xe15b6d(262))](serverFactsCollection), Template[_0xe15b6d(263)]['helpers']({
        'factsByPackage': function () {
            var _0x56c3b6 = _0xe15b6d;
            return Facts['server'][_0x56c3b6(264)]();
        },
        'facts': function () {
            var _0x5ec06c = _0xe15b6d, _0x5af0cf = [];
            return _[_0x5ec06c(254)](this, function (_0x148f9d, _0x2fff89) {
                var _0x5b51a4 = _0x5ec06c;
                if (_0x2fff89 !== _0x5b51a4(265))
                    _0x5af0cf[_0x5b51a4(266)]({
                        'name': _0x2fff89,
                        'value': _0x148f9d
                    });
            }), _0x5af0cf;
        }
    }), Template[_0xe15b6d(263)]['onCreated'](function () {
        var _0x4d1ba7 = _0xe15b6d;
        this['_stopHandle'] = Meteor['subscribe'](_0x4d1ba7(267));
    }), Template[_0xe15b6d(263)][_0xe15b6d(268)](function () {
        var _0xd29357 = _0xe15b6d;
        this['_stopHandle'] && (this[_0xd29357(269)]['stop'](), this['_stopHandle'] = null);
    });