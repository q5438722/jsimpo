MongoInternals[_0x33e903(241)] = function (_0x401002, _0x109810) {
    var _0x473b1e = _0x33e903, _0x4c78b3 = this;
    _0x4c78b3[_0x473b1e(242)] = new MongoConnection(_0x401002, _0x109810);
}, _[_0x33e903(243)](MongoInternals[_0x33e903(241)]['prototype'], {
    'open': function (_0x95893f) {
        var _0x5082b8 = _0x33e903, _0x1de13f = {
                'dmFSG': _0x5082b8(244),
                'nCLds': _0x5082b8(245),
                'dEqWp': 'update',
                'tKqtG': _0x5082b8(246),
                'RsvsM': _0x5082b8(247),
                'vbcBI': '_createCappedCollection',
                'hvcNb': _0x5082b8(248),
                'dGzeI': _0x5082b8(249)
            }, _0x341c19 = this, _0x204b00 = {};
        return _[_0x5082b8(250)]([
            _0x1de13f[_0x5082b8(251)],
            _0x1de13f[_0x5082b8(252)],
            _0x5082b8(253),
            _0x1de13f[_0x5082b8(254)],
            _0x1de13f[_0x5082b8(255)],
            _0x5082b8(256),
            _0x1de13f[_0x5082b8(257)],
            _0x5082b8(258),
            _0x1de13f['vbcBI'],
            _0x1de13f[_0x5082b8(259)],
            _0x1de13f[_0x5082b8(260)]
        ], function (_0x1d6804) {
            var _0x3c57c9 = _0x5082b8;
            _0x204b00[_0x1d6804] = _[_0x3c57c9(261)](_0x341c19['mongo'][_0x1d6804], _0x341c19[_0x3c57c9(242)], _0x95893f);
        }), _0x204b00;
    }
}), MongoInternals[_0x33e903(262)] = _[_0x33e903(263)](function () {
    var _0x3daca3 = _0x33e903, _0x3bbac7 = { 'GkIvi': 'MONGO_URL must be set in environment' }, _0x327ba9 = {}, _0x559361 = process['env']['MONGO_URL'];
    process['env'][_0x3daca3(264)] && (_0x327ba9['oplogUrl'] = process['env']['MONGO_OPLOG_URL']);
    if (!_0x559361)
        throw new Error(_0x3bbac7[_0x3daca3(265)]);
    return new MongoInternals[(_0x3daca3(241))](_0x559361, _0x327ba9);
});