var BlitterRender = require(_0x3cd5aa(480)), Bob = require(_0x3cd5aa(481)), Class = require(_0x3cd5aa(482)), Components = require(_0x3cd5aa(483)), Frame = require(_0x3cd5aa(484)), GameObject = require('../GameObject'), List = require(_0x3cd5aa(485)), Blitter = new Class({
        'Extends': GameObject,
        'Mixins': [
            Components[_0x3cd5aa(486)],
            Components[_0x3cd5aa(487)],
            Components['Depth'],
            Components[_0x3cd5aa(488)],
            Components[_0x3cd5aa(489)],
            Components[_0x3cd5aa(490)],
            Components[_0x3cd5aa(491)],
            Components[_0x3cd5aa(492)],
            Components[_0x3cd5aa(493)],
            Components[_0x3cd5aa(494)],
            BlitterRender
        ],
        'initialize': function Blitter(_0x41d362, _0x3ea437, _0x4ddb78, _0x25b0c8, _0x11eb73) {
            var _0x468abe = _0x3cd5aa, _0x12daad = { 'ELGwN': _0x468abe(495) }, _0x5ae5aa = _0x12daad[_0x468abe(496)]['split']('|'), _0xb6794b = -2937 + -127 * -8 + 1921;
            while (!![]) {
                switch (_0x5ae5aa[_0xb6794b++]) {
                case '0':
                    this[_0x468abe(497)]();
                    continue;
                case '1':
                    GameObject[_0x468abe(498)](this, _0x41d362, _0x468abe(499));
                    continue;
                case '2':
                    this[_0x468abe(500)](_0x3ea437, _0x4ddb78);
                    continue;
                case '3':
                    this[_0x468abe(501)] = new List();
                    continue;
                case '4':
                    this[_0x468abe(502)] = [];
                    continue;
                case '5':
                    this[_0x468abe(503)] = ![];
                    continue;
                case '6':
                    this['setTexture'](_0x25b0c8, _0x11eb73);
                    continue;
                }
                break;
            }
        },
        'create': function (_0x22bb7c, _0x5a7fae, _0x5b02fb, _0x4b7668, _0x359993) {
            var _0x3fd988 = _0x3cd5aa, _0x1fe463 = {
                    'uZBMW': function (_0x58e1b5, _0x96f87d) {
                        return _0x58e1b5 instanceof _0x96f87d;
                    },
                    'UBucz': function (_0x57acb9, _0x41b7c9) {
                        return _0x57acb9 === _0x41b7c9;
                    }
                }, _0x2d43d1 = _0x3fd988(504)['split']('|'), _0x519cd1 = -4014 + 2282 * 1 + 866 * 2;
            while (!![]) {
                switch (_0x2d43d1[_0x519cd1++]) {
                case '0':
                    if (_0x5b02fb === undefined)
                        _0x5b02fb = this[_0x3fd988(505)];
                    else
                        !_0x1fe463[_0x3fd988(506)](_0x5b02fb, Frame) && (_0x5b02fb = this[_0x3fd988(507)][_0x3fd988(508)](_0x5b02fb));
                    continue;
                case '1':
                    this[_0x3fd988(501)][_0x3fd988(509)](_0x2c2d39, _0x359993, ![]);
                    continue;
                case '2':
                    return _0x2c2d39;
                case '3':
                    _0x1fe463['UBucz'](_0x4b7668, undefined) && (_0x4b7668 = !![]);
                    continue;
                case '4':
                    _0x359993 === undefined && (_0x359993 = this['children'][_0x3fd988(510)]);
                    continue;
                case '5':
                    this[_0x3fd988(503)] = !![];
                    continue;
                case '6':
                    var _0x2c2d39 = new Bob(this, _0x22bb7c, _0x5a7fae, _0x5b02fb, _0x4b7668);
                    continue;
                }
                break;
            }
        },
        'createFromCallback': function (_0x139214, _0x3afb7f, _0x5873b8, _0x292b54) {
            var _0x22f9fc = _0x3cd5aa, _0x424693 = this[_0x22f9fc(511)](_0x3afb7f, _0x5873b8, _0x292b54);
            for (var _0x54a834 = 2613 + 6936 + -9549; _0x54a834 < _0x424693[_0x22f9fc(510)]; _0x54a834++) {
                var _0x5b5c6b = _0x424693[_0x54a834];
                _0x139214['call'](this, _0x5b5c6b, _0x54a834);
            }
            return _0x424693;
        },
        'createMultiple': function (_0x13c96b, _0x2d81b1, _0x47b459) {
            var _0x6ee8b = _0x3cd5aa, _0x58f211 = {
                    'nTsXJ': _0x6ee8b(512),
                    'aZygw': function (_0x4e5e97, _0x1aa28f) {
                        return _0x4e5e97 === _0x1aa28f;
                    }
                }, _0x491ec6 = _0x58f211[_0x6ee8b(513)][_0x6ee8b(514)]('|'), _0x4f8bd7 = 1785 + -375 + -1410;
            while (!![]) {
                switch (_0x491ec6[_0x4f8bd7++]) {
                case '0':
                    _0x2d81b1 === undefined && (_0x2d81b1 = this['frame']['name']);
                    continue;
                case '1':
                    return _0x3769a8;
                case '2':
                    var _0x3769a8 = [];
                    continue;
                case '3':
                    var _0x3be8d9 = this;
                    continue;
                case '4':
                    _0x2d81b1['forEach'](function (_0xbdd44a) {
                        var _0x1758a7 = _0x6ee8b;
                        for (var _0x19ecf6 = -7611 + 6570 + -1 * -1041; _0x19ecf6 < _0x13c96b; _0x19ecf6++) {
                            _0x3769a8[_0x1758a7(515)](_0x3be8d9[_0x1758a7(516)](5 * -1063 + 5844 + -529, 5426 + 6412 + -3 * 3946, _0xbdd44a, _0x47b459));
                        }
                    });
                    continue;
                case '5':
                    _0x58f211[_0x6ee8b(517)](_0x47b459, undefined) && (_0x47b459 = !![]);
                    continue;
                case '6':
                    !Array['isArray'](_0x2d81b1) && (_0x2d81b1 = [_0x2d81b1]);
                    continue;
                }
                break;
            }
        },
        'childCanRender': function (_0x241595) {
            var _0x2e06c8 = _0x3cd5aa, _0x58f59b = {
                    'mfurg': function (_0x2a6399, _0x10cf35) {
                        return _0x2a6399 > _0x10cf35;
                    }
                };
            return _0x241595[_0x2e06c8(518)] && _0x58f59b[_0x2e06c8(519)](_0x241595['alpha'], 4888 + 8445 + 199 * -67);
        },
        'getRenderList': function () {
            var _0x3ab378 = _0x3cd5aa;
            return this[_0x3ab378(503)] && (this[_0x3ab378(502)] = this[_0x3ab378(501)]['list'][_0x3ab378(520)](this['childCanRender'], this), this[_0x3ab378(503)] = ![]), this[_0x3ab378(502)];
        },
        'clear': function () {
            this['children']['removeAll'](), this['dirty'] = !![];
        },
        'preDestroy': function () {
            var _0x3c423d = _0x3cd5aa;
            this[_0x3c423d(501)][_0x3c423d(521)](), this[_0x3c423d(502)] = [];
        }
    });
module[_0x3cd5aa(522)] = Blitter;