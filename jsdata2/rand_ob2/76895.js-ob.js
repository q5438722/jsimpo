const _0x4dd7 = [
    '1273DpDWbU',
    '126897JzVrTN',
    '2HBoFff',
    '1108780TxTIIw',
    'col',
    'aggregate',
    '$userId',
    'users',
    '_id',
    'user',
    '$user',
    'push',
    'roles',
    'bulkWrite',
    'add',
    'await',
    '274665oaVrsT',
    '3UboSFw',
    '1206877nvfULP',
    '1CrsbMt',
    '1178424DCALzI',
    '17ysDdmU',
    '59134kWGxJX',
    '939FGCXlh'
];
const _0x319f49 = _0x3369;
(function (_0xefa46f, _0x1561d4) {
    const _0x300291 = _0x3369;
    while (!![]) {
        try {
            const _0xd1debd = parseInt(_0x300291(0x1d4)) * parseInt(_0x300291(0x1d5)) + -parseInt(_0x300291(0x1d6)) * -parseInt(_0x300291(0x1d7)) + -parseInt(_0x300291(0x1d8)) + parseInt(_0x300291(0x1d9)) * -parseInt(_0x300291(0x1da)) + parseInt(_0x300291(0x1db)) * -parseInt(_0x300291(0x1dc)) + -parseInt(_0x300291(0x1dd)) + -parseInt(_0x300291(0x1de)) * -parseInt(_0x300291(0x1df));
            if (_0xd1debd === _0x1561d4)
                break;
            else
                _0xefa46f['push'](_0xefa46f['shift']());
        } catch (_0x515fc2) {
            _0xefa46f['push'](_0xefa46f['shift']());
        }
    }
}(_0x4dd7, 0xb5456));
import { Promise } from 'meteor/promise';
import { Migrations } from '../../../app/migrations';
import { Sessions } from '../../../app/models/server/raw';
import { getMostImportantRole } from '../../../app/statistics/server/lib/getMostImportantRole';
async function migrateSessions() {
    const _0x4e5b6f = _0x3369, _0x1d110e = Sessions[_0x4e5b6f(0x1e0)][_0x4e5b6f(0x1e1)]([
            {
                '$match': {
                    '$or': [
                        { 'mostImportantRole': { '$exists': 0x0 } },
                        { 'mostImportantRole': null }
                    ]
                }
            },
            { '$group': { '_id': _0x4e5b6f(0x1e2) } },
            {
                '$lookup': {
                    'from': _0x4e5b6f(0x1e3),
                    'localField': _0x4e5b6f(0x1e4),
                    'foreignField': _0x4e5b6f(0x1e4),
                    'as': _0x4e5b6f(0x1e5)
                }
            },
            { '$unwind': _0x4e5b6f(0x1e6) },
            { '$project': { 'user.roles': 0x1 } },
            { '$match': { 'user.roles.0': { '$exists': 0x1 } } }
        ]);
    let _0x19404e = [];
    for await (const _0x17749f of _0x1d110e) {
        _0x19404e[_0x4e5b6f(0x1e7)]({
            'updateMany': {
                'filter': { 'userId': _0x17749f[_0x4e5b6f(0x1e4)] },
                'update': { '$set': { 'mostImportantRole': getMostImportantRole(_0x17749f[_0x4e5b6f(0x1e5)][_0x4e5b6f(0x1e8)]) } }
            }
        }), _0x19404e['length'] === 0x64 && (await Sessions[_0x4e5b6f(0x1e0)][_0x4e5b6f(0x1e9)](_0x19404e, { 'ordered': ![] }), _0x19404e = []);
    }
    _0x19404e['length'] && await Sessions['col']['bulkWrite'](_0x19404e, { 'ordered': ![] });
}
function _0x3369(_0x329c05, _0xb9998e) {
    return _0x3369 = function (_0x4dd7c3, _0x336948) {
        _0x4dd7c3 = _0x4dd7c3 - 0x1d4;
        let _0x2ed587 = _0x4dd7[_0x4dd7c3];
        return _0x2ed587;
    }, _0x3369(_0x329c05, _0xb9998e);
}
Migrations[_0x319f49(0x1ea)]({
    'version': 0xd3,
    'up'() {
        const _0x106591 = _0x319f49;
        Promise[_0x106591(0x1eb)](migrateSessions());
    }
});
