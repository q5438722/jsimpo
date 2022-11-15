const _0x54e7 = ['length', 'info', 'Adding ', ' entries to members', 'map', 'reduce', 'assign', 'toHexString', 'YEFXn', 'insert', 'HkizN', 'resolve', 'down', 'reject', '740780RTwNvy', '1DahAoo', '760929nwGJCw', '22652LdLkWG', '640529WRzjke', '1Etiwkv', '731499aeWRhv', '186707IeWIOq', '2077366iNidKP', 'bluebird', 'bson-objectid', 'lodash', 'exports', 'config', 'members', 'Skipping populating members table: found 0 subscribers', 'updated_at', 'updated_by', 'subscribers', 'merge', 'name', 'email', 'OJTvl', 'created_by', 'Jxfzc', 'transacting', 'DJVLJ', 'select', 'then', 'vXwRu'];

function _0x17ec(_0x1fd778, _0xf3b4cf) {
    return _0x17ec = function (_0x4ba23a, _0x10332c) {
        _0x4ba23a = _0x4ba23a - 410;
        const _0xd9e76a = _0x54e7[_0x4ba23a];

        return _0xd9e76a;
    }, _0x17ec(_0x1fd778, _0xf3b4cf);
}
const _0x556333 = _0x17ec;

(function (_0x135c29, _0x32a49b) {
    const _0x436e35 = _0x17ec;

    while (true) {
        try {
            const _0x467433 = parseInt(_0x436e35(0x19a)) * parseInt(_0x436e35(0x19b)) + -parseInt(_0x436e35(0x19c)) + parseInt(_0x436e35(0x19d)) + parseInt(_0x436e35(0x19e)) * -parseInt(_0x436e35(0x19f)) + -parseInt(_0x436e35(0x1a0)) + -parseInt(_0x436e35(0x1a1)) + parseInt(_0x436e35(0x1a2));

            if (_0x467433 === _0x32a49b) break;else _0x135c29.push(_0x135c29.shift());
        } catch (_0x3b38ac) {
            _0x135c29.push(_0x135c29.shift());
        }
    }
})(_0x54e7, 521134);

const Promise = require(_0x556333(0x1a3));

const ObjectId = require(_0x556333(0x1a4));

const _ = require(_0x556333(0x1a5));

const logging = require('@tryghost/logging');

module[_0x556333(0x1a6)][_0x556333(0x1a7)] = {
    'transaction': true,
    'irreversible': true
}, module.exports['up'] = _0x3bdcec => {
    const _0xb707d6 = _0x556333;
    const _0x3dd2cf = {
        'vXwRu': _0xb707d6(0x1a8),
        'HkizN': _0xb707d6(0x1a9),
        'OJTvl': 'created_at',
        'aBoFr': _0xb707d6(0x1aa),
        'Jxfzc': _0xb707d6(0x1ab),
        'DJVLJ': _0xb707d6(0x1ac)
    };

    const _0x229c88 = _[_0xb707d6(0x1ad)]({
        'context': { 'internal': true },
        'migrating': true
    }, _0x3bdcec);

    const _0x331d17 = [_0xb707d6(0x1ae), _0xb707d6(0x1af), _0x3dd2cf[_0xb707d6(0x1b0)], _0xb707d6(0x1b1), _0x3dd2cf.aBoFr, _0x3dd2cf[_0xb707d6(0x1b2)]];

    return _0x229c88[_0xb707d6(0x1b3)](_0x3dd2cf[_0xb707d6(0x1b4)])[_0xb707d6(0x1b5)]()[_0xb707d6(0x1b6)](_0x3c1b4d => {
        const _0x544340 = _0xb707d6;
        const _0x64c352 = { 'YEFXn': _0x3dd2cf[_0x544340(0x1b7)] };

        if (_0x3c1b4d && _0x3c1b4d[_0x544340(0x1b8)] > 0) {
            logging[_0x544340(0x1b9)](_0x544340(0x1ba) + _0x3c1b4d[_0x544340(0x1b8)] + _0x544340(0x1bb));

            const _0x384997 = _[_0x544340(0x1bc)](_0x3c1b4d, _0x443bfb => {
                const _0x5da6ca = _0x544340;

                const _0x21f447 = _0x331d17[_0x5da6ca(0x1bd)](function (_0xe51cee, _0x4eede0) {
                    const _0x3d9d9d = _0x5da6ca;

                    return Object[_0x3d9d9d(0x1be)](_0xe51cee, { [_0x4eede0]: _0x443bfb[_0x4eede0] });
                }, {});

                return _0x21f447['id'] = ObjectId()[_0x5da6ca(0x1bf)](), _0x21f447;
            });

            return Promise.map(_0x384997, _0xee82a4 => {
                const _0xad76e8 = _0x544340;

                return _0x229c88.transacting(_0x64c352[_0xad76e8(0x1c0)])[_0xad76e8(0x1c1)](_0xee82a4);
            });
        } else return logging[_0x544340(0x1b9)](_0x3dd2cf[_0x544340(0x1c2)]), Promise[_0x544340(0x1c3)]();
    });
}, module[_0x556333(0x1a6)][_0x556333(0x1c4)] = () => {
    const _0x3afb0a = _0x556333;

    return Promise[_0x3afb0a(0x1c5)]();
};
