MongoInternals[_0xd8089a(438)] = function (_0x21c285, _0x48f3b6) {
    var _0x434078 = this;
    _0x434078['mongo'] = new MongoConnection(_0x21c285, _0x48f3b6);
}, _['extend'](MongoInternals[_0xd8089a(438)][_0xd8089a(439)], {
    'open': function (_0x22d197) {
        var _0x143e89 = _0xd8089a, _0x4898af = this, _0x8ed3ad = {};
        return _['each']([
            _0x143e89(440),
            'findOne',
            _0x143e89(441),
            'update',
            _0x143e89(442),
            'remove',
            '_ensureIndex',
            '_dropIndex',
            '_createCappedCollection',
            'dropCollection',
            'rawCollection'
        ], function (_0x1b7691) {
            var _0x41b045 = _0x143e89;
            _0x8ed3ad[_0x1b7691] = _[_0x41b045(443)](_0x4898af[_0x41b045(444)][_0x1b7691], _0x4898af['mongo'], _0x22d197);
        }), _0x8ed3ad;
    }
}), MongoInternals[_0xd8089a(445)] = _[_0xd8089a(446)](function () {
    var _0x29d019 = _0xd8089a, _0x334e0c = {}, _0x72b273 = process[_0x29d019(447)][_0x29d019(448)];
    process['env'][_0x29d019(449)] && (_0x334e0c['oplogUrl'] = process['env']['MONGO_OPLOG_URL']);
    if (!_0x72b273)
        throw new Error(_0x29d019(450));
    return new MongoInternals['RemoteCollectionDriver'](_0x72b273, _0x334e0c);
});