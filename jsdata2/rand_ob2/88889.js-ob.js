var _0x3927 = [
    'setUserIdFilter',
    '_factsByPackage',
    'incrementServerFact',
    'has',
    'each',
    'added',
    'changed',
    'defer',
    'userId',
    'ready',
    'without',
    'server',
    'Collection',
    'serverFacts',
    'find',
    '_id',
    'push',
    'meteor_facts',
    'onDestroyed',
    '_stopHandle',
    '327722idXTWj',
    '231905jxARrb',
    '205425FSulPe',
    '403276MwhhWB',
    '143258pXxEPX',
    '29zJUBPc',
    '9235LQshZD',
    '628365NQiOYZ',
    'meteor_Facts_server',
    'isServer',
    'autopublish'
];
function _0x1fa5(_0x13297f, _0x345180) {
    return _0x1fa5 = function (_0x39278a, _0x1fa5cd) {
        _0x39278a = _0x39278a - 0xef;
        var _0x1e6fbd = _0x3927[_0x39278a];
        return _0x1e6fbd;
    }, _0x1fa5(_0x13297f, _0x345180);
}
var _0xe15b6d = _0x1fa5;
(function (_0x2011f0, _0x4b139d) {
    var _0x1b03b1 = _0x1fa5;
    while (!![]) {
        try {
            var _0x3624c7 = -parseInt(_0x1b03b1(0xef)) + parseInt(_0x1b03b1(0xf0)) + parseInt(_0x1b03b1(0xf1)) + -parseInt(_0x1b03b1(0xf2)) + parseInt(_0x1b03b1(0xf3)) + -parseInt(_0x1b03b1(0xf4)) * parseInt(_0x1b03b1(0xf5)) + parseInt(_0x1b03b1(0xf6));
            if (_0x3624c7 === _0x4b139d)
                break;
            else
                _0x2011f0['push'](_0x2011f0['shift']());
        } catch (_0x1dd281) {
            _0x2011f0['push'](_0x2011f0['shift']());
        }
    }
}(_0x3927, 0x334dc), Facts = {});
var serverFactsCollection = _0xe15b6d(0xf7);
if (Meteor[_0xe15b6d(0xf8)]) {
    var userIdFilter = function (_0x494475) {
        var _0x51af7c = _0xe15b6d;
        return !!Package[_0x51af7c(0xf9)];
    };
    Facts[_0xe15b6d(0xfa)] = function (_0x50b386) {
        userIdFilter = _0x50b386;
    };
    var factsByPackage = {}, activeSubscriptions = [];
    Facts[_0xe15b6d(0xfb)] = factsByPackage, Facts[_0xe15b6d(0xfc)] = function (_0x5a857a, _0x45bc13, _0x1c72f2) {
        var _0x1ea0c5 = _0xe15b6d;
        if (!_[_0x1ea0c5(0xfd)](factsByPackage, _0x5a857a)) {
            factsByPackage[_0x5a857a] = {}, factsByPackage[_0x5a857a][_0x45bc13] = _0x1c72f2, _[_0x1ea0c5(0xfe)](activeSubscriptions, function (_0x56fe38) {
                var _0x53ed21 = _0x1ea0c5;
                _0x56fe38[_0x53ed21(0xff)](serverFactsCollection, _0x5a857a, factsByPackage[_0x5a857a]);
            });
            return;
        }
        var _0x2bb5db = factsByPackage[_0x5a857a];
        if (!_['has'](_0x2bb5db, _0x45bc13))
            factsByPackage[_0x5a857a][_0x45bc13] = 0x0;
        factsByPackage[_0x5a857a][_0x45bc13] += _0x1c72f2;
        var _0x3a6094 = {};
        _0x3a6094[_0x45bc13] = factsByPackage[_0x5a857a][_0x45bc13], _['each'](activeSubscriptions, function (_0x536be7) {
            var _0x47e675 = _0x1ea0c5;
            _0x536be7[_0x47e675(0x100)](serverFactsCollection, _0x5a857a, _0x3a6094);
        });
    }, Meteor[_0xe15b6d(0x101)](function () {
        Meteor['publish']('meteor_facts', function () {
            var _0x452cc2 = _0x1fa5, _0x984533 = this;
            if (!userIdFilter(this[_0x452cc2(0x102)])) {
                _0x984533[_0x452cc2(0x103)]();
                return;
            }
            activeSubscriptions['push'](_0x984533), _['each'](factsByPackage, function (_0xa13d79, _0x52cc2e) {
                var _0x57c385 = _0x452cc2;
                _0x984533[_0x57c385(0xff)](serverFactsCollection, _0x52cc2e, _0xa13d79);
            }), _0x984533['onStop'](function () {
                var _0x3beb84 = _0x452cc2;
                activeSubscriptions = _[_0x3beb84(0x104)](activeSubscriptions, _0x984533);
            }), _0x984533[_0x452cc2(0x103)]();
        }, { 'is_auto': !![] });
    });
} else
    Facts[_0xe15b6d(0x105)] = new Mongo[(_0xe15b6d(0x106))](serverFactsCollection), Template[_0xe15b6d(0x107)]['helpers']({
        'factsByPackage': function () {
            var _0x56c3b6 = _0xe15b6d;
            return Facts['server'][_0x56c3b6(0x108)]();
        },
        'facts': function () {
            var _0x5ec06c = _0xe15b6d, _0x5af0cf = [];
            return _[_0x5ec06c(0xfe)](this, function (_0x148f9d, _0x2fff89) {
                var _0x5b51a4 = _0x5ec06c;
                if (_0x2fff89 !== _0x5b51a4(0x109))
                    _0x5af0cf[_0x5b51a4(0x10a)]({
                        'name': _0x2fff89,
                        'value': _0x148f9d
                    });
            }), _0x5af0cf;
        }
    }), Template[_0xe15b6d(0x107)]['onCreated'](function () {
        var _0x4d1ba7 = _0xe15b6d;
        this['_stopHandle'] = Meteor['subscribe'](_0x4d1ba7(0x10b));
    }), Template[_0xe15b6d(0x107)][_0xe15b6d(0x10c)](function () {
        var _0xd29357 = _0xe15b6d;
        this['_stopHandle'] && (this[_0xd29357(0x10d)]['stop'](), this['_stopHandle'] = null);
    });
