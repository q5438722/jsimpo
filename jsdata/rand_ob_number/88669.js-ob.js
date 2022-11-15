MongoInternals['RemoteCollectionDriver'] = function (_0x4a49de, _0x2193e4) {
    var _0x22e3cf = this;
    _0x22e3cf['mongo'] = new MongoConnection(_0x4a49de, _0x2193e4);
}, _['extend'](MongoInternals['RemoteCollectionDriver']['prototype'], {
    'open': function (_0x1689a2) {
        var _0x58df13 = this, _0x1ce663 = {};
        return _['each']([
            'find',
            'findOne',
            'insert',
            'update',
            'upsert',
            'remove',
            '_ensureIndex',
            '_dropIndex',
            '_createCappedCollection',
            'dropCollection',
            'rawCollection'
        ], function (_0x2b1e31) {
            _0x1ce663[_0x2b1e31] = _['bind'](_0x58df13['mongo'][_0x2b1e31], _0x58df13['mongo'], _0x1689a2);
        }), _0x1ce663;
    }
}), MongoInternals['defaultRemoteCollectionDriver'] = _['once'](function () {
    var _0x256880 = {}, _0x391b05 = process['env']['MONGO_URL'];
    process['env']['MONGO_OPLOG_URL'] && (_0x256880['oplogUrl'] = process['env']['MONGO_OPLOG_URL']);
    if (!_0x391b05)
        throw new Error('MONGO_URL\x20must\x20be\x20set\x20in\x20environment');
    return new MongoInternals['RemoteCollectionDriver'](_0x391b05, _0x256880);
});
