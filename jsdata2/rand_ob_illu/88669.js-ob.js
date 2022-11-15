const _0x53d5 = ['find', 'findOne', 'upsert', '_ensureIndex', 'dropCollection', 'rawCollection', 'each', 'dmFSG', 'nCLds', 'insert', 'dEqWp', 'tKqtG', 'remove', 'RsvsM', '_dropIndex', 'hvcNb', 'dGzeI', 'bind', 'defaultRemoteCollectionDriver', 'once', 'MONGO_OPLOG_URL', 'GkIvi', '805091cXhepP', '96762cjJJLp', '30113oxPVxA', '1VXBDfA', '777518moBsbA', '664791YOSUQO', '542231plgdzw', '51061euZONY', '3zlhhOu', 'RemoteCollectionDriver', 'mongo', 'extend'];
const _0x33e903 = _0x57ab;

function _0x57ab(_0x359ba0, _0x3c3262) {
    return _0x57ab = function (_0x96d40a, _0x265eef) {
        _0x96d40a = _0x96d40a - 232;
        const _0x37401e = _0x53d5[_0x96d40a];

        return _0x37401e;
    }, _0x57ab(_0x359ba0, _0x3c3262);
}
(function (_0x468563, _0x553d43) {
    const _0x316c9c = _0x57ab;

    while (true) {
        try {
            const _0x5cdc48 = parseInt(_0x316c9c(0xe8)) + -parseInt(_0x316c9c(0xe9)) + parseInt(_0x316c9c(0xea)) * parseInt(_0x316c9c(0xeb)) + parseInt(_0x316c9c(0xec)) + -parseInt(_0x316c9c(0xed)) + -parseInt(_0x316c9c(0xee)) + parseInt(_0x316c9c(0xef)) * parseInt(_0x316c9c(0xf0));

            if (_0x5cdc48 === _0x553d43) break;else _0x468563.push(_0x468563.shift());
        } catch (_0x283955) {
            _0x468563.push(_0x468563.shift());
        }
    }
})(_0x53d5, 462121), MongoInternals[_0x33e903(0xf1)] = function (_0x401002, _0x109810) {
    const _0x473b1e = _0x33e903;

    const _0x4c78b3 = this;

    _0x4c78b3[_0x473b1e(0xf2)] = new MongoConnection(_0x401002, _0x109810);
}, _[_0x33e903(0xf3)](MongoInternals[_0x33e903(0xf1)].prototype, {
    'open': function (_0x95893f) {
        const _0x5082b8 = _0x33e903;
        const _0x1de13f = {
            'dmFSG': _0x5082b8(0xf4),
            'nCLds': _0x5082b8(0xf5),
            'dEqWp': 'update',
            'tKqtG': _0x5082b8(0xf6),
            'RsvsM': _0x5082b8(0xf7),
            'vbcBI': '_createCappedCollection',
            'hvcNb': _0x5082b8(0xf8),
            'dGzeI': _0x5082b8(0xf9)
        };

        const _0x341c19 = this;

        const _0x204b00 = {};

        return _[_0x5082b8(0xfa)]([_0x1de13f[_0x5082b8(0xfb)], _0x1de13f[_0x5082b8(0xfc)], _0x5082b8(0xfd), _0x1de13f[_0x5082b8(0xfe)], _0x1de13f[_0x5082b8(0xff)], _0x5082b8(0x100), _0x1de13f[_0x5082b8(0x101)], _0x5082b8(0x102), _0x1de13f.vbcBI, _0x1de13f[_0x5082b8(0x103)], _0x1de13f[_0x5082b8(0x104)]], function (_0x1d6804) {
            const _0x3c57c9 = _0x5082b8;

            _0x204b00[_0x1d6804] = _[_0x3c57c9(0x105)](_0x341c19.mongo[_0x1d6804], _0x341c19[_0x3c57c9(0xf2)], _0x95893f);
        }), _0x204b00;
    }
}), MongoInternals[_0x33e903(0x106)] = _[_0x33e903(0x107)](function () {
    const _0x3daca3 = _0x33e903;
    const _0x3bbac7 = { 'GkIvi': 'MONGO_URL must be set in environment' };
    const _0x327ba9 = {};
    const _0x559361 = process.env.MONGO_URL;

    process.env[_0x3daca3(0x108)] && (_0x327ba9['oplogUrl'] = process.env.MONGO_OPLOG_URL);
    if (!_0x559361) throw new Error(_0x3bbac7[_0x3daca3(0x109)]);
    return new MongoInternals[_0x3daca3(0xf1)](_0x559361, _0x327ba9);
});
