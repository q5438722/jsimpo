Facts = {};
var serverFactsCollection = 'meteor_Facts_server';
if (Meteor['isServer']) {
    var Bvhjdd = '1|6|5|2|4|3|0'['split']('|'), fdyfto = 0x0;
    while (!![]) {
        switch (Bvhjdd[fdyfto++]) {
        case '0':
            Meteor['defer'](function () {
                var _0x515f2d = {
                    'KKVPr': '2|3|5|0|1|4',
                    'TDaEs': function (_0x5ee52b, _0x16a0b5) {
                        return _0x5ee52b(_0x16a0b5);
                    },
                    'YYvCG': 'meteor_facts'
                };
                Meteor['publish'](_0x515f2d['YYvCG'], function () {
                    var _0x4ae0f6 = _0x515f2d['KKVPr']['split']('|'), _0x2a1a1e = 0x0;
                    while (!![]) {
                        switch (_0x4ae0f6[_0x2a1a1e++]) {
                        case '0':
                            _['each'](factsByPackage, function (_0x57e16e, _0x4d8167) {
                                _0x263b82['added'](serverFactsCollection, _0x4d8167, _0x57e16e);
                            });
                            continue;
                        case '1':
                            _0x263b82['onStop'](function () {
                                activeSubscriptions = _['without'](activeSubscriptions, _0x263b82);
                            });
                            continue;
                        case '2':
                            var _0x263b82 = this;
                            continue;
                        case '3':
                            if (!_0x515f2d['TDaEs'](userIdFilter, this['userId'])) {
                                _0x263b82['ready']();
                                return;
                            }
                            continue;
                        case '4':
                            _0x263b82['ready']();
                            continue;
                        case '5':
                            activeSubscriptions['push'](_0x263b82);
                            continue;
                        }
                        break;
                    }
                }, { 'is_auto': !![] });
            });
            continue;
        case '1':
            var userIdFilter = function (_0xc12b92) {
                return !!Package['autopublish'];
            };
            continue;
        case '2':
            var activeSubscriptions = [];
            continue;
        case '3':
            Facts['incrementServerFact'] = function (_0x330d9f, _0x451c9f, _0x3ad6ab) {
                var _0x1f718d = { 'SyHuz': '6|1|0|4|5|3|2' }, _0x537da8 = _0x1f718d['SyHuz']['split']('|'), _0x1151f0 = 0x0;
                while (!![]) {
                    switch (_0x537da8[_0x1151f0++]) {
                    case '0':
                        if (!_['has'](_0x12a517, _0x451c9f))
                            factsByPackage[_0x330d9f][_0x451c9f] = 0x0;
                        continue;
                    case '1':
                        var _0x12a517 = factsByPackage[_0x330d9f];
                        continue;
                    case '2':
                        _['each'](activeSubscriptions, function (_0x3fe417) {
                            _0x3fe417['changed'](serverFactsCollection, _0x330d9f, _0x5d3dd4);
                        });
                        continue;
                    case '3':
                        _0x5d3dd4[_0x451c9f] = factsByPackage[_0x330d9f][_0x451c9f];
                        continue;
                    case '4':
                        factsByPackage[_0x330d9f][_0x451c9f] += _0x3ad6ab;
                        continue;
                    case '5':
                        var _0x5d3dd4 = {};
                        continue;
                    case '6':
                        if (!_['has'](factsByPackage, _0x330d9f)) {
                            factsByPackage[_0x330d9f] = {}, factsByPackage[_0x330d9f][_0x451c9f] = _0x3ad6ab, _['each'](activeSubscriptions, function (_0x5f2be7) {
                                _0x5f2be7['added'](serverFactsCollection, _0x330d9f, factsByPackage[_0x330d9f]);
                            });
                            return;
                        }
                        continue;
                    }
                    break;
                }
            };
            continue;
        case '4':
            Facts['_factsByPackage'] = factsByPackage;
            continue;
        case '5':
            var factsByPackage = {};
            continue;
        case '6':
            Facts['setUserIdFilter'] = function (_0x16353f) {
                userIdFilter = _0x16353f;
            };
            continue;
        }
        break;
    }
} else
    Facts['server'] = new Mongo['Collection'](serverFactsCollection), Template['serverFacts']['helpers']({
        'factsByPackage': function () {
            return Facts['server']['find']();
        },
        'facts': function () {
            var _0x1fac97 = {
                    'zCrRF': function (_0x366d44, _0x37ae4f) {
                        return _0x366d44 !== _0x37ae4f;
                    },
                    'fxaVL': '_id'
                }, _0x3610e5 = [];
            return _['each'](this, function (_0x9c2462, _0x47b78f) {
                if (_0x1fac97['zCrRF'](_0x47b78f, _0x1fac97['fxaVL']))
                    _0x3610e5['push']({
                        'name': _0x47b78f,
                        'value': _0x9c2462
                    });
            }), _0x3610e5;
        }
    }), Template['serverFacts']['onCreated'](function () {
        var _0x5b0971 = { 'ahKAO': 'meteor_facts' };
        this['_stopHandle'] = Meteor['subscribe'](_0x5b0971['ahKAO']);
    }), Template['serverFacts']['onDestroyed'](function () {
        this['_stopHandle'] && (this['_stopHandle']['stop'](), this['_stopHandle'] = null);
    });
