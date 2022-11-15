import { Promise } from 'meteor/promise';
import { Migrations } from '../../../app/migrations';
import { Sessions } from '../../../app/models/server/raw';
import { getMostImportantRole } from '../../../app/statistics/server/lib/getMostImportantRole';
async function migrateSessions() {
    const _0x4d5bb7 = Sessions['col']['aggregate']([
        {
            '$match': {
                '$or': [
                    { 'mostImportantRole': { '$exists': 0x0 } },
                    { 'mostImportantRole': null }
                ]
            }
        },
        { '$group': { '_id': '$userId' } },
        {
            '$lookup': {
                'from': 'users',
                'localField': '_id',
                'foreignField': '_id',
                'as': 'user'
            }
        },
        { '$unwind': '$user' },
        { '$project': { 'user.roles': 0x1 } },
        { '$match': { 'user.roles.0': { '$exists': 0x1 } } }
    ]);
    let _0xfca4d3 = [];
    for await (const _0x477c74 of _0x4d5bb7) {
        _0xfca4d3['push']({
            'updateMany': {
                'filter': { 'userId': _0x477c74['_id'] },
                'update': { '$set': { 'mostImportantRole': getMostImportantRole(_0x477c74['user']['roles']) } }
            }
        }), _0xfca4d3['length'] === 0x1 * 0x1160 + -0x66 * 0x17 + -0xd * 0x9a && (await Sessions['col']['bulkWrite'](_0xfca4d3, { 'ordered': ![] }), _0xfca4d3 = []);
    }
    _0xfca4d3['length'] && await Sessions['col']['bulkWrite'](_0xfca4d3, { 'ordered': ![] });
}
Migrations['add']({
    'version': 0xd3,
    'up'() {
        Promise['await'](migrateSessions());
    }
});
