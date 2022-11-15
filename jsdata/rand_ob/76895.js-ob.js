const _0x3ce1 = [
    '_id',
    'user',
    'col',
    'aggregate',
    'rYLRd',
    'mMvJt',
    'AebJK',
    'qCWct',
    'VEOME',
    'push',
    'length',
    'bulkWrite',
    'add',
    'wOpPp',
    '10jyLUIG',
    '35405IChEBt',
    '13387UJslPm',
    '6asmNzY',
    '231884tsHfjA',
    '96243eLxhol',
    '4372TSMNmq',
    '11euHRGB',
    '298927xQDRiL',
    '901744zXJrPH',
    'users'
];
const _0x45f56c = _0x2c75;
(function (_0x140ab9, _0x4528e9) {
    const _0x20916f = _0x2c75;
    while (!![]) {
        try {
            const _0x2ced2a = parseInt(_0x20916f(0x109)) * -parseInt(_0x20916f(0x10a)) + -parseInt(_0x20916f(0x10b)) * parseInt(_0x20916f(0x10c)) + parseInt(_0x20916f(0x10d)) + -parseInt(_0x20916f(0x10e)) + -parseInt(_0x20916f(0x10f)) * parseInt(_0x20916f(0x110)) + -parseInt(_0x20916f(0x111)) + parseInt(_0x20916f(0x112));
            if (_0x2ced2a === _0x4528e9)
                break;
            else
                _0x140ab9['push'](_0x140ab9['shift']());
        } catch (_0x4cd5e3) {
            _0x140ab9['push'](_0x140ab9['shift']());
        }
    }
}(_0x3ce1, 0x10252 + -0x6d1d6 + 0x1 * 0x9b77e));
import { Promise } from 'meteor/promise';
import { Migrations } from '../../../app/migrations';
import { Sessions } from '../../../app/models/server/raw';
function _0x2c75(_0x552496, _0x4d4816) {
    return _0x2c75 = function (_0x1444f3, _0xe7243c) {
        _0x1444f3 = _0x1444f3 - (-0x1 * 0x2397 + -0x1 * 0x194 + 0xa3 * 0x3c);
        let _0x8c1e61 = _0x3ce1[_0x1444f3];
        return _0x8c1e61;
    }, _0x2c75(_0x552496, _0x4d4816);
}
import { getMostImportantRole } from '../../../app/statistics/server/lib/getMostImportantRole';
async function migrateSessions() {
    const _0x488dbd = _0x2c75, _0x55bce3 = {
            'rYLRd': '$userId',
            'mMvJt': _0x488dbd(0x113),
            'AebJK': _0x488dbd(0x114),
            'qCWct': _0x488dbd(0x115),
            'VEOME': '$user',
            'MKgco': function (_0x222c46, _0x58f562) {
                return _0x222c46 === _0x58f562;
            }
        }, _0x26d17f = Sessions[_0x488dbd(0x116)][_0x488dbd(0x117)]([
            {
                '$match': {
                    '$or': [
                        { 'mostImportantRole': { '$exists': 0x0 } },
                        { 'mostImportantRole': null }
                    ]
                }
            },
            { '$group': { '_id': _0x55bce3[_0x488dbd(0x118)] } },
            {
                '$lookup': {
                    'from': _0x55bce3[_0x488dbd(0x119)],
                    'localField': _0x55bce3['AebJK'],
                    'foreignField': _0x55bce3[_0x488dbd(0x11a)],
                    'as': _0x55bce3[_0x488dbd(0x11b)]
                }
            },
            { '$unwind': _0x55bce3[_0x488dbd(0x11c)] },
            { '$project': { 'user.roles': 0x1 } },
            { '$match': { 'user.roles.0': { '$exists': 0x1 } } }
        ]);
    let _0x1806d8 = [];
    for await (const _0x2fff4a of _0x26d17f) {
        _0x1806d8[_0x488dbd(0x11d)]({
            'updateMany': {
                'filter': { 'userId': _0x2fff4a[_0x488dbd(0x114)] },
                'update': { '$set': { 'mostImportantRole': getMostImportantRole(_0x2fff4a[_0x488dbd(0x115)]['roles']) } }
            }
        }), _0x55bce3['MKgco'](_0x1806d8[_0x488dbd(0x11e)], 0x1 * -0xe99 + 0x1950 + 0xa53 * -0x1) && (await Sessions[_0x488dbd(0x116)]['bulkWrite'](_0x1806d8, { 'ordered': ![] }), _0x1806d8 = []);
    }
    _0x1806d8['length'] && await Sessions['col'][_0x488dbd(0x11f)](_0x1806d8, { 'ordered': ![] });
}
Migrations[_0x45f56c(0x120)]({
    'version': 0xd3,
    'up'() {
        const _0x184da8 = _0x45f56c, _0x409aec = {
                'wOpPp': function (_0x4ddd86) {
                    return _0x4ddd86();
                }
            };
        Promise['await'](_0x409aec[_0x184da8(0x121)](migrateSessions));
    }
});
