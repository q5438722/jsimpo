MongoInternals['RemoteCollectionDriver'] = function (_0x441c2c, _0xcd0dd4) {
    var _0x2439e8 = this;
    _0x2439e8['mongo'] = new MongoConnection(_0x441c2c, _0xcd0dd4);
}, _['extend'](MongoInternals['RemoteCollectionDriver']['prototype'], {
    'open': function (_0x5f0bf7) {
        var _0x31953f = {
                'VkKsa': 'find',
                'KIayq': 'findOne',
                'huHnT': 'insert',
                'irmgI': 'update',
                'Inrte': 'upsert',
                'bdxyS': 'remove',
                'qnnLM': '_ensureIndex',
                'NAbej': '_dropIndex',
                'caejd': '_createCappedCollection',
                'ETuUJ': 'dropCollection',
                'eKoJR': 'rawCollection'
            }, _0x39a09b = this, _0x260018 = {};
        return _['each']([
            _0x31953f['VkKsa'],
            _0x31953f['KIayq'],
            _0x31953f['huHnT'],
            _0x31953f['irmgI'],
            _0x31953f['Inrte'],
            _0x31953f['bdxyS'],
            _0x31953f['qnnLM'],
            _0x31953f['NAbej'],
            _0x31953f['caejd'],
            _0x31953f['ETuUJ'],
            _0x31953f['eKoJR']
        ], function (_0x45b3d2) {
            _0x260018[_0x45b3d2] = _['bind'](_0x39a09b['mongo'][_0x45b3d2], _0x39a09b['mongo'], _0x5f0bf7);
        }), _0x260018;
    }
}), MongoInternals['defaultRemoteCollectionDriver'] = _['once'](function () {
    var _0x4e1fa2 = {
            'qLhRt': '2|1|3|4|0',
            'OpcDf': 'MONGO_URL\x20must\x20be\x20set\x20in\x20environment'
        }, _0x33917a = _0x4e1fa2['qLhRt']['split']('|'), _0x4cb9d8 = 0x0;
    while (!![]) {
        switch (_0x33917a[_0x4cb9d8++]) {
        case '0':
            return new MongoInternals['RemoteCollectionDriver'](_0xe27012, _0x56d384);
        case '1':
            var _0xe27012 = process['env']['MONGO_URL'];
            continue;
        case '2':
            var _0x56d384 = {};
            continue;
        case '3':
            process['env']['MONGO_OPLOG_URL'] && (_0x56d384['oplogUrl'] = process['env']['MONGO_OPLOG_URL']);
            continue;
        case '4':
            if (!_0xe27012)
                throw new Error(_0x4e1fa2['OpcDf']);
            continue;
        }
        break;
    }
});
