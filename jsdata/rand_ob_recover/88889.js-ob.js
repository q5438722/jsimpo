Facts = {};
var serverFactsCollection = _0x3b7a45(427);
function _0x3b52(_0x265d33, _0x1501b4) {
    return _0x3b52 = function (_0x339097, _0xf034b2) {
        _0x339097 = _0x339097 - (-7189 + 5 * -1159 + -1 * -13399);
        var _0xa57c8f = _0xa893[_0x339097];
        return _0xa57c8f;
    }, _0x3b52(_0x265d33, _0x1501b4);
}
if (Meteor[_0x3b7a45(428)]) {
    var FMbinn = _0x3b7a45(429)[_0x3b7a45(430)]('|'), ghiiEn = -7798 + -2224 + 10022;
    while (!![]) {
        switch (FMbinn[ghiiEn++]) {
        case '0':
            Facts['incrementServerFact'] = function (_0x4db9fa, _0x3c0435, _0x3e65a9) {
                var _0x1899a1 = _0x3b7a45, _0x1d019a = { 'VbvCC': _0x1899a1(431) }, _0x9c3615 = _0x1d019a[_0x1899a1(432)][_0x1899a1(430)]('|'), _0x118319 = 7571 + 377 * 22 + -15865;
                while (!![]) {
                    switch (_0x9c3615[_0x118319++]) {
                    case '0':
                        factsByPackage[_0x4db9fa][_0x3c0435] += _0x3e65a9;
                        continue;
                    case '1':
                        if (!_[_0x1899a1(433)](factsByPackage, _0x4db9fa)) {
                            factsByPackage[_0x4db9fa] = {}, factsByPackage[_0x4db9fa][_0x3c0435] = _0x3e65a9, _[_0x1899a1(434)](activeSubscriptions, function (_0x18a03a) {
                                var _0x35f3f6 = _0x1899a1;
                                _0x18a03a[_0x35f3f6(435)](serverFactsCollection, _0x4db9fa, factsByPackage[_0x4db9fa]);
                            });
                            return;
                        }
                        continue;
                    case '2':
                        _[_0x1899a1(434)](activeSubscriptions, function (_0x51b739) {
                            _0x51b739['changed'](serverFactsCollection, _0x4db9fa, _0x59fe90);
                        });
                        continue;
                    case '3':
                        var _0x59fe90 = {};
                        continue;
                    case '4':
                        if (!_[_0x1899a1(433)](_0x36c729, _0x3c0435))
                            factsByPackage[_0x4db9fa][_0x3c0435] = -5430 + 4754 + -169 * -4;
                        continue;
                    case '5':
                        var _0x36c729 = factsByPackage[_0x4db9fa];
                        continue;
                    case '6':
                        _0x59fe90[_0x3c0435] = factsByPackage[_0x4db9fa][_0x3c0435];
                        continue;
                    }
                    break;
                }
            };
            continue;
        case '1':
            var factsByPackage = {};
            continue;
        case '2':
            var userIdFilter = function (_0x4bfd23) {
                var _0x434393 = _0x3b7a45;
                return !!Package[_0x434393(436)];
            };
            continue;
        case '3':
            var activeSubscriptions = [];
            continue;
        case '4':
            Facts[_0x3b7a45(437)] = factsByPackage;
            continue;
        case '5':
            Meteor['defer'](function () {
                var _0x135eb3 = _0x3b7a45, _0x8dcef8 = {
                        'FttuA': _0x135eb3(438),
                        'ZqCee': function (_0x9f02ec, _0x5ef59a) {
                            return _0x9f02ec(_0x5ef59a);
                        },
                        'LJFVu': _0x135eb3(439)
                    };
                Meteor[_0x135eb3(440)](_0x8dcef8['LJFVu'], function () {
                    var _0x5cc640 = _0x135eb3, _0x5dd404 = _0x8dcef8[_0x5cc640(441)][_0x5cc640(430)]('|'), _0x2b621d = -5025 + 510 + 15 * 301;
                    while (!![]) {
                        switch (_0x5dd404[_0x2b621d++]) {
                        case '0':
                            _0x40b0df['ready']();
                            continue;
                        case '1':
                            if (!_0x8dcef8[_0x5cc640(442)](userIdFilter, this[_0x5cc640(443)])) {
                                _0x40b0df['ready']();
                                return;
                            }
                            continue;
                        case '2':
                            var _0x40b0df = this;
                            continue;
                        case '3':
                            _0x40b0df['onStop'](function () {
                                var _0x52d556 = _0x5cc640;
                                activeSubscriptions = _[_0x52d556(444)](activeSubscriptions, _0x40b0df);
                            });
                            continue;
                        case '4':
                            _[_0x5cc640(434)](factsByPackage, function (_0x340ee3, _0x53337b) {
                                var _0x3c1d57 = _0x5cc640;
                                _0x40b0df[_0x3c1d57(435)](serverFactsCollection, _0x53337b, _0x340ee3);
                            });
                            continue;
                        case '5':
                            activeSubscriptions[_0x5cc640(445)](_0x40b0df);
                            continue;
                        }
                        break;
                    }
                }, { 'is_auto': !![] });
            });
            continue;
        case '6':
            Facts[_0x3b7a45(446)] = function (_0x589a4e) {
                userIdFilter = _0x589a4e;
            };
            continue;
        }
        break;
    }
} else
    Facts[_0x3b7a45(447)] = new Mongo[(_0x3b7a45(448))](serverFactsCollection), Template['serverFacts'][_0x3b7a45(449)]({
        'factsByPackage': function () {
            var _0x58c941 = _0x3b7a45;
            return Facts[_0x58c941(447)]['find']();
        },
        'facts': function () {
            var _0x5665f3 = _0x3b7a45, _0x25357f = {
                    'oamxe': function (_0x455611, _0x2d48cd) {
                        return _0x455611 !== _0x2d48cd;
                    }
                }, _0x37b788 = [];
            return _[_0x5665f3(434)](this, function (_0xf0850a, _0x263a47) {
                var _0x304d80 = _0x5665f3;
                if (_0x25357f[_0x304d80(450)](_0x263a47, _0x304d80(451)))
                    _0x37b788[_0x304d80(445)]({
                        'name': _0x263a47,
                        'value': _0xf0850a
                    });
            }), _0x37b788;
        }
    }), Template[_0x3b7a45(452)][_0x3b7a45(453)](function () {
        var _0x561450 = _0x3b7a45, _0x5532af = { 'SDWnV': _0x561450(439) };
        this[_0x561450(454)] = Meteor[_0x561450(455)](_0x5532af[_0x561450(456)]);
    }), Template[_0x3b7a45(452)][_0x3b7a45(457)](function () {
        var _0x3aa97a = _0x3b7a45;
        this[_0x3aa97a(454)] && (this[_0x3aa97a(454)]['stop'](), this[_0x3aa97a(454)] = null);
    });