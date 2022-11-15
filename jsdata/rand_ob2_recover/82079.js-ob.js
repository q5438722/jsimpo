const Promise = require(_0x1aa1ec(393)), ObjectId = require('bson-objectid'), _ = require(_0x1aa1ec(394)), logging = require(_0x1aa1ec(395));
module[_0x1aa1ec(396)][_0x1aa1ec(397)] = {
    'transaction': !![],
    'irreversible': !![]
}, module['exports']['up'] = _0x36f71e => {
    const _0x97187f = _0x1aa1ec, _0x26a4f2 = _[_0x97187f(398)]({
            'context': { 'internal': !![] },
            'migrating': !![]
        }, _0x36f71e), _0x2984ac = [
            _0x97187f(399),
            'email',
            _0x97187f(400),
            _0x97187f(401),
            'updated_at',
            _0x97187f(402)
        ];
    return _0x26a4f2[_0x97187f(403)](_0x97187f(404))[_0x97187f(405)]()['then'](_0x345d51 => {
        const _0x3fdb9e = _0x97187f;
        if (_0x345d51 && _0x345d51[_0x3fdb9e(406)] > 0) {
            logging[_0x3fdb9e(407)]('Adding ' + _0x345d51[_0x3fdb9e(406)] + _0x3fdb9e(408));
            let _0x1db4e3 = _[_0x3fdb9e(409)](_0x345d51, _0xd98339 => {
                const _0x3257ca = _0x3fdb9e;
                let _0x83f710 = _0x2984ac[_0x3257ca(410)](function (_0x512d3b, _0x73c8ad) {
                    return Object['assign'](_0x512d3b, { [_0x73c8ad]: _0xd98339[_0x73c8ad] });
                }, {});
                return _0x83f710['id'] = ObjectId()['toHexString'](), _0x83f710;
            });
            return Promise[_0x3fdb9e(409)](_0x1db4e3, _0x115e79 => {
                const _0x4bedeb = _0x3fdb9e;
                return _0x26a4f2['transacting'](_0x4bedeb(411))[_0x4bedeb(412)](_0x115e79);
            });
        } else
            return logging[_0x3fdb9e(407)](_0x3fdb9e(413)), Promise[_0x3fdb9e(414)]();
    });
}, module['exports']['down'] = () => {
    const _0x221299 = _0x1aa1ec;
    return Promise[_0x221299(415)]();
};