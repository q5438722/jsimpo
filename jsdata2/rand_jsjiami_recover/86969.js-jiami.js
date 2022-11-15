var Detector = {};
module['exports'] = Detector;
var SAT = require('./SAT');
var Pair = require('./Pair');
var Bounds = require('../geometry/Bounds');
(function () {
    Detector['collisions'] = function (_0x1ce47c, _0x356d8e) {
        var _0x4923f7 = [], _0x53e554 = _0x356d8e['pairs']['table'];
        var _0x491702 = _0x356d8e['metrics'];
        for (var _0x1fd083 = 0; _0x1fd083 < _0x1ce47c['length']; _0x1fd083++) {
            if ('xCjtv' === 'rkigx') {
                _0x4923f7['push'](_0x1723eb);
                _0x491702['narrowDetections'] += 1;
            } else {
                var _0x58efb5 = _0x1ce47c[_0x1fd083][0], _0x1eb46e = _0x1ce47c[_0x1fd083][1];
                if ((_0x58efb5['isStatic'] || _0x58efb5['isSleeping']) && (_0x1eb46e['isStatic'] || _0x1eb46e['isSleeping']))
                    continue;
                if (!Detector['canCollide'](_0x58efb5['collisionFilter'], _0x1eb46e['collisionFilter']))
                    continue;
                _0x491702['midphaseTests'] += 1;
                if (Bounds['overlaps'](_0x58efb5['bounds'], _0x1eb46e['bounds'])) {
                    for (var _0x4e2104 = _0x58efb5['parts']['length'] > 1 ? 1 : 0; _0x4e2104 < _0x58efb5['parts']['length']; _0x4e2104++) {
                        var _0x411c3c = _0x58efb5['parts'][_0x4e2104];
                        for (var _0x2c3268 = _0x1eb46e['parts']['length'] > 1 ? 1 : 0; _0x2c3268 < _0x1eb46e['parts']['length']; _0x2c3268++) {
                            var _0x5b8b03 = _0x1eb46e['parts'][_0x2c3268];
                            if (_0x411c3c === _0x58efb5 && _0x5b8b03 === _0x1eb46e || Bounds['overlaps'](_0x411c3c['bounds'], _0x5b8b03['bounds'])) {
                                var _0x25180d = '5|0|1|4|2|3'['split']('|'), _0x522b93 = 0;
                                while (!![]) {
                                    switch (_0x25180d[_0x522b93++]) {
                                    case '0':
                                        if (_0x29a7d7 && _0x29a7d7['isActive']) {
                                            _0x8a0463 = _0x29a7d7['collision'];
                                        } else {
                                            _0x8a0463 = null;
                                        }
                                        continue;
                                    case '1':
                                        var _0x1723eb = SAT['collides'](_0x411c3c, _0x5b8b03, _0x8a0463);
                                        continue;
                                    case '2':
                                        if (_0x1723eb['reused'])
                                            _0x491702['narrowReuseCount'] += 1;
                                        continue;
                                    case '3':
                                        if (_0x1723eb['collided']) {
                                            _0x4923f7['push'](_0x1723eb);
                                            _0x491702['narrowDetections'] += 1;
                                        }
                                        continue;
                                    case '4':
                                        _0x491702['narrowphaseTests'] += 1;
                                        continue;
                                    case '5':
                                        var _0x42a4da = Pair['id'](_0x411c3c, _0x5b8b03), _0x29a7d7 = _0x53e554[_0x42a4da], _0x8a0463;
                                        continue;
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
        return _0x4923f7;
    };
    Detector['canCollide'] = function (_0x3f26a7, _0x2c0d0a) {
        if ('doSjx' === 'cZgpa') {
            previousCollision = null;
        } else {
            if (_0x3f26a7['group'] === _0x2c0d0a['group'] && _0x3f26a7['group'] !== 0)
                return _0x3f26a7['group'] > 0;
            return (_0x3f26a7['mask'] & _0x2c0d0a['category']) !== 0 && (_0x2c0d0a['mask'] & _0x3f26a7['category']) !== 0;
        }
    };
}());