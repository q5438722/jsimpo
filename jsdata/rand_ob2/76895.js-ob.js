const _0xb919 = [
    'await',
    '1879691jSYRNC',
    '1IIXTgR',
    '2RCjaVm',
    '586123xDcGXh',
    '1IECbnB',
    '340363yKSiFl',
    '1tnThVA',
    '1187387ubWQMM',
    '366185tSFxPp',
    '1gEKMLo',
    '7rJXoxS',
    '115078DgVlxK',
    '11IYwgZD',
    '37958jwnWFS',
    'col',
    'aggregate',
    '$userId',
    'users',
    'user',
    '$user',
    '_id',
    'roles',
    'length',
    'bulkWrite',
    'add'
];
const _0x386b2d = _0x356a;
(function (_0x26579b, _0x109a74) {
    const _0x3b9a4f = _0x356a;
    while (!![]) {
        try {
            const _0x51cab4 = parseInt(_0x3b9a4f(0xd2)) * -parseInt(_0x3b9a4f(0xd3)) + parseInt(_0x3b9a4f(0xd4)) * parseInt(_0x3b9a4f(0xd5)) + -parseInt(_0x3b9a4f(0xd6)) * parseInt(_0x3b9a4f(0xd7)) + -parseInt(_0x3b9a4f(0xd8)) * -parseInt(_0x3b9a4f(0xd9)) + -parseInt(_0x3b9a4f(0xda)) * parseInt(_0x3b9a4f(0xdb)) + -parseInt(_0x3b9a4f(0xdc)) * -parseInt(_0x3b9a4f(0xdd)) + parseInt(_0x3b9a4f(0xde)) * parseInt(_0x3b9a4f(0xdf));
            if (_0x51cab4 === _0x109a74)
                break;
            else
                _0x26579b['push'](_0x26579b['shift']());
        } catch (_0x26ce21) {
            _0x26579b['push'](_0x26579b['shift']());
        }
    }
}(_0xb919, 0xf347e));
import { Promise } from 'meteor/promise';
import { Migrations } from '../../../app/migrations';
function _0x356a(_0x197f1c, _0x2169f3) {
    return _0x356a = function (_0xb91923, _0x356a29) {
        _0xb91923 = _0xb91923 - 0xd2;
        let _0x4451b7 = _0xb919[_0xb91923];
        return _0x4451b7;
    }, _0x356a(_0x197f1c, _0x2169f3);
}
import { Sessions } from '../../../app/models/server/raw';
import { getMostImportantRole } from '../../../app/statistics/server/lib/getMostImportantRole';
async function migrateSessions() {
    const _0x1f0ff4 = _0x356a, _0x257cb2 = Sessions[_0x1f0ff4(0xe0)][_0x1f0ff4(0xe1)]([
            {
                '$match': {
                    '$or': [
                        { 'mostImportantRole': { '$exists': 0x0 } },
                        { 'mostImportantRole': null }
                    ]
                }
            },
            { '$group': { '_id': _0x1f0ff4(0xe2) } },
            {
                '$lookup': {
                    'from': _0x1f0ff4(0xe3),
                    'localField': '_id',
                    'foreignField': '_id',
                    'as': _0x1f0ff4(0xe4)
                }
            },
            { '$unwind': _0x1f0ff4(0xe5) },
            { '$project': { 'user.roles': 0x1 } },
            { '$match': { 'user.roles.0': { '$exists': 0x1 } } }
        ]);
    let _0xadcfee = [];
    for await (const _0x2f57a0 of _0x257cb2) {
        _0xadcfee['push']({
            'updateMany': {
                'filter': { 'userId': _0x2f57a0[_0x1f0ff4(0xe6)] },
                'update': { '$set': { 'mostImportantRole': getMostImportantRole(_0x2f57a0['user'][_0x1f0ff4(0xe7)]) } }
            }
        }), _0xadcfee[_0x1f0ff4(0xe8)] === 0x64 && (await Sessions['col'][_0x1f0ff4(0xe9)](_0xadcfee, { 'ordered': ![] }), _0xadcfee = []);
    }
    _0xadcfee['length'] && await Sessions[_0x1f0ff4(0xe0)]['bulkWrite'](_0xadcfee, { 'ordered': ![] });
}
Migrations[_0x386b2d(0xea)]({
    'version': 0xd3,
    'up'() {
        const _0x6b76d8 = _0x386b2d;
        Promise[_0x6b76d8(0xeb)](migrateSessions());
    }
});
