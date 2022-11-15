Facts = {};
var serverFactsCollection = 'meteor_Facts_server';
if (Meteor['isServer']) {
    var userIdFilter = function (_0x1077f9) {
        return !!Package['autopublish'];
    };
    Facts['setUserIdFilter'] = function (_0x5d1780) {
        userIdFilter = _0x5d1780;
    };
    var factsByPackage = {}, activeSubscriptions = [];
    Facts['_factsByPackage'] = factsByPackage, Facts['incrementServerFact'] = function (_0xb4c93d, _0x5e88aa, _0x4d7de8) {
        if (!_['has'](factsByPackage, _0xb4c93d)) {
            factsByPackage[_0xb4c93d] = {}, factsByPackage[_0xb4c93d][_0x5e88aa] = _0x4d7de8, _['each'](activeSubscriptions, function (_0x10d9df) {
                _0x10d9df['added'](serverFactsCollection, _0xb4c93d, factsByPackage[_0xb4c93d]);
            });
            return;
        }
        var _0xd7f84e = factsByPackage[_0xb4c93d];
        if (!_['has'](_0xd7f84e, _0x5e88aa))
            factsByPackage[_0xb4c93d][_0x5e88aa] = -0x917 + -0xf * 0x2b + -0x4 * -0x2e7;
        factsByPackage[_0xb4c93d][_0x5e88aa] += _0x4d7de8;
        var _0x1343c2 = {};
        _0x1343c2[_0x5e88aa] = factsByPackage[_0xb4c93d][_0x5e88aa], _['each'](activeSubscriptions, function (_0x428b06) {
            _0x428b06['changed'](serverFactsCollection, _0xb4c93d, _0x1343c2);
        });
    }, Meteor['defer'](function () {
        Meteor['publish']('meteor_facts', function () {
            var _0x408687 = this;
            if (!userIdFilter(this['userId'])) {
                _0x408687['ready']();
                return;
            }
            activeSubscriptions['push'](_0x408687), _['each'](factsByPackage, function (_0x395858, _0x6931b5) {
                _0x408687['added'](serverFactsCollection, _0x6931b5, _0x395858);
            }), _0x408687['onStop'](function () {
                activeSubscriptions = _['without'](activeSubscriptions, _0x408687);
            }), _0x408687['ready']();
        }, { 'is_auto': !![] });
    });
} else
    Facts['server'] = new Mongo['Collection'](serverFactsCollection), Template['serverFacts']['helpers']({
        'factsByPackage': function () {
            return Facts['server']['find']();
        },
        'facts': function () {
            var _0x405ef6 = [];
            return _['each'](this, function (_0x2a2e96, _0x195085) {
                if (_0x195085 !== '_id')
                    _0x405ef6['push']({
                        'name': _0x195085,
                        'value': _0x2a2e96
                    });
            }), _0x405ef6;
        }
    }), Template['serverFacts']['onCreated'](function () {
        this['_stopHandle'] = Meteor['subscribe']('meteor_facts');
    }), Template['serverFacts']['onDestroyed'](function () {
        this['_stopHandle'] && (this['_stopHandle']['stop'](), this['_stopHandle'] = null);
    });
