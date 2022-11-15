var _0x2356 = [
    'bind',
    'mongo',
    'defaultRemoteCollectionDriver',
    'once',
    'env',
    'MONGO_URL',
    'MONGO_OPLOG_URL',
    'MONGO_URL\x20must\x20be\x20set\x20in\x20environment',
    '116882EolmEz',
    '1IFKOID',
    '180952zMfyRL',
    '9311NfheIH',
    '25bBmMSR',
    '115935oLxWFj',
    '3XUYrDo',
    '51266UlouCM',
    '220349aDKYYE',
    '220951fFOaEv',
    'RemoteCollectionDriver',
    'prototype',
    'find',
    'insert',
    'upsert'
];
function _0x5c32(_0x4d9d48, _0x217993) {
    return _0x5c32 = function (_0x2356fa, _0x5c32f9) {
        _0x2356fa = _0x2356fa - 0x1ac;
        var _0x360b5b = _0x2356[_0x2356fa];
        return _0x360b5b;
    }, _0x5c32(_0x4d9d48, _0x217993);
}
var _0xd8089a = _0x5c32;
(function (_0x3537c3, _0x101cef) {
    var _0x2edd2f = _0x5c32;
    while (!![]) {
        try {
            var _0x3ba31d = parseInt(_0x2edd2f(0x1ac)) * parseInt(_0x2edd2f(0x1ad)) + -parseInt(_0x2edd2f(0x1ae)) + parseInt(_0x2edd2f(0x1af)) * parseInt(_0x2edd2f(0x1b0)) + parseInt(_0x2edd2f(0x1b1)) + -parseInt(_0x2edd2f(0x1b2)) * parseInt(_0x2edd2f(0x1b3)) + -parseInt(_0x2edd2f(0x1b4)) + parseInt(_0x2edd2f(0x1b5));
            if (_0x3ba31d === _0x101cef)
                break;
            else
                _0x3537c3['push'](_0x3537c3['shift']());
        } catch (_0x17b927) {
            _0x3537c3['push'](_0x3537c3['shift']());
        }
    }
}(_0x2356, 0x20174), MongoInternals[_0xd8089a(0x1b6)] = function (_0x21c285, _0x48f3b6) {
    var _0x434078 = this;
    _0x434078['mongo'] = new MongoConnection(_0x21c285, _0x48f3b6);
}, _['extend'](MongoInternals[_0xd8089a(0x1b6)][_0xd8089a(0x1b7)], {
    'open': function (_0x22d197) {
        var _0x143e89 = _0xd8089a, _0x4898af = this, _0x8ed3ad = {};
        return _['each']([
            _0x143e89(0x1b8),
            'findOne',
            _0x143e89(0x1b9),
            'update',
            _0x143e89(0x1ba),
            'remove',
            '_ensureIndex',
            '_dropIndex',
            '_createCappedCollection',
            'dropCollection',
            'rawCollection'
        ], function (_0x1b7691) {
            var _0x41b045 = _0x143e89;
            _0x8ed3ad[_0x1b7691] = _[_0x41b045(0x1bb)](_0x4898af[_0x41b045(0x1bc)][_0x1b7691], _0x4898af['mongo'], _0x22d197);
        }), _0x8ed3ad;
    }
}), MongoInternals[_0xd8089a(0x1bd)] = _[_0xd8089a(0x1be)](function () {
    var _0x29d019 = _0xd8089a, _0x334e0c = {}, _0x72b273 = process[_0x29d019(0x1bf)][_0x29d019(0x1c0)];
    process['env'][_0x29d019(0x1c1)] && (_0x334e0c['oplogUrl'] = process['env']['MONGO_OPLOG_URL']);
    if (!_0x72b273)
        throw new Error(_0x29d019(0x1c2));
    return new MongoInternals['RemoteCollectionDriver'](_0x72b273, _0x334e0c);
}));
