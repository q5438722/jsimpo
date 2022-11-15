const _0x74fa = [
    'roles',
    'gFerM',
    'length',
    'bulkWrite',
    'add',
    'await',
    'OsNrQ',
    '487854jydMXv',
    '4719JdkLdg',
    '207khvJAs',
    '917144prGDKs',
    '65633eqWrAC',
    '5sxAQol',
    '164281ZbfIzG',
    '684119dAYEOk',
    '1QfLnZu',
    '2214874cSdKWD',
    '$userId',
    'users',
    '_id',
    'col',
    'aggregate',
    'wjXDI',
    'WhtHW',
    '$user',
    'push',
    'pOoIN',
    'user'
];
function _0x6e94(_0x666c80, _0x1c5b82) {
    return _0x6e94 = function (_0x3dc355, _0x3b7913) {
        _0x3dc355 = _0x3dc355 - (0x8af + 0x1ece + 0xb * -0x371);
        let _0x3c65aa = _0x74fa[_0x3dc355];
        return _0x3c65aa;
    }, _0x6e94(_0x666c80, _0x1c5b82);
}
const _0x2e2ed4 = _0x6e94;
(function (_0xb26e0a, _0x2bb074) {
    const _0x5b796c = _0x6e94;
    while (!![]) {
        try {
            const _0x45c0e9 = parseInt(_0x5b796c(0x1a2)) + -parseInt(_0x5b796c(0x1a3)) * parseInt(_0x5b796c(0x1a4)) + -parseInt(_0x5b796c(0x1a5)) + -parseInt(_0x5b796c(0x1a6)) * -parseInt(_0x5b796c(0x1a7)) + parseInt(_0x5b796c(0x1a8)) + parseInt(_0x5b796c(0x1a9)) * -parseInt(_0x5b796c(0x1aa)) + parseInt(_0x5b796c(0x1ab));
            if (_0x45c0e9 === _0x2bb074)
                break;
            else
                _0xb26e0a['push'](_0xb26e0a['shift']());
        } catch (_0x5d0ffd) {
            _0xb26e0a['push'](_0xb26e0a['shift']());
        }
    }
}(_0x74fa, 0x92362 + 0x6 * -0x2cc7 + -0x1 * -0x153be));
import { Promise } from 'meteor/promise';
import { Migrations } from '../../../app/migrations';
import { Sessions } from '../../../app/models/server/raw';
import { getMostImportantRole } from '../../../app/statistics/server/lib/getMostImportantRole';
async function migrateSessions() {
    const _0x13b2dc = _0x6e94, _0x2766fb = {
            'wjXDI': _0x13b2dc(0x1ac),
            'xAHSa': _0x13b2dc(0x1ad),
            'WhtHW': _0x13b2dc(0x1ae),
            'pOoIN': function (_0x114fb9, _0x21aaf1) {
                return _0x114fb9(_0x21aaf1);
            },
            'gFerM': function (_0x12fddc, _0x2aa467) {
                return _0x12fddc === _0x2aa467;
            }
        }, _0xfa6720 = Sessions[_0x13b2dc(0x1af)][_0x13b2dc(0x1b0)]([
            {
                '$match': {
                    '$or': [
                        { 'mostImportantRole': { '$exists': 0x0 } },
                        { 'mostImportantRole': null }
                    ]
                }
            },
            { '$group': { '_id': _0x2766fb[_0x13b2dc(0x1b1)] } },
            {
                '$lookup': {
                    'from': _0x2766fb['xAHSa'],
                    'localField': _0x2766fb[_0x13b2dc(0x1b2)],
                    'foreignField': _0x2766fb[_0x13b2dc(0x1b2)],
                    'as': 'user'
                }
            },
            { '$unwind': _0x13b2dc(0x1b3) },
            { '$project': { 'user.roles': 0x1 } },
            { '$match': { 'user.roles.0': { '$exists': 0x1 } } }
        ]);
    let _0x2f655c = [];
    for await (const _0x30d251 of _0xfa6720) {
        _0x2f655c[_0x13b2dc(0x1b4)]({
            'updateMany': {
                'filter': { 'userId': _0x30d251[_0x13b2dc(0x1ae)] },
                'update': { '$set': { 'mostImportantRole': _0x2766fb[_0x13b2dc(0x1b5)](getMostImportantRole, _0x30d251[_0x13b2dc(0x1b6)][_0x13b2dc(0x1b7)]) } }
            }
        }), _0x2766fb[_0x13b2dc(0x1b8)](_0x2f655c[_0x13b2dc(0x1b9)], -0x2 * -0xff3 + -0x3 * -0x87b + 0x38f3 * -0x1) && (await Sessions[_0x13b2dc(0x1af)][_0x13b2dc(0x1ba)](_0x2f655c, { 'ordered': ![] }), _0x2f655c = []);
    }
    _0x2f655c[_0x13b2dc(0x1b9)] && await Sessions['col'][_0x13b2dc(0x1ba)](_0x2f655c, { 'ordered': ![] });
}
Migrations[_0x2e2ed4(0x1bb)]({
    'version': 0xd3,
    'up'() {
        const _0x445565 = _0x2e2ed4, _0x169f2f = {
                'OsNrQ': function (_0x5b956f) {
                    return _0x5b956f();
                }
            };
        Promise[_0x445565(0x1bc)](_0x169f2f[_0x445565(0x1bd)](migrateSessions));
    }
});
