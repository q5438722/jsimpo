import { Promise } from 'meteor/promise';
import { Migrations } from '../../../app/migrations';
import { Sessions } from '../../../app/models/server/raw';
import { getMostImportantRole } from '../../../app/statistics/server/lib/getMostImportantRole';
async function migrateSessions() {
    const _0x73463b = {
            'ZirkA': '$userId',
            'BEwZy': 'users',
            'oGoXC': '_id',
            'NAqQu': 'user',
            'MRmqx': '$user',
            'vRFEr': function (_0x1fc44d, _0xb18b52) {
                return _0x1fc44d(_0xb18b52);
            },
            'NrSOt': function (_0x593aec, _0x530ef6) {
                return _0x593aec === _0x530ef6;
            }
        }, _0x310ef4 = Sessions['col']['aggregate']([
            {
                '$match': {
                    '$or': [
                        { 'mostImportantRole': { '$exists': 0x0 } },
                        { 'mostImportantRole': null }
                    ]
                }
            },
            { '$group': { '_id': _0x73463b['ZirkA'] } },
            {
                '$lookup': {
                    'from': _0x73463b['BEwZy'],
                    'localField': _0x73463b['oGoXC'],
                    'foreignField': _0x73463b['oGoXC'],
                    'as': _0x73463b['NAqQu']
                }
            },
            { '$unwind': _0x73463b['MRmqx'] },
            { '$project': { 'user.roles': 0x1 } },
            { '$match': { 'user.roles.0': { '$exists': 0x1 } } }
        ]);
    let _0x4a3246 = [];
    for await (const _0x34358d of _0x310ef4) {
        _0x4a3246['push']({
            'updateMany': {
                'filter': { 'userId': _0x34358d['_id'] },
                'update': { '$set': { 'mostImportantRole': _0x73463b['vRFEr'](getMostImportantRole, _0x34358d['user']['roles']) } }
            }
        }), _0x73463b['NrSOt'](_0x4a3246['length'], 0x64) && (await Sessions['col']['bulkWrite'](_0x4a3246, { 'ordered': ![] }), _0x4a3246 = []);
    }
    _0x4a3246['length'] && await Sessions['col']['bulkWrite'](_0x4a3246, { 'ordered': ![] });
}
Migrations['add']({
    'version': 0xd3,
    'up'() {
        const _0x480b5b = {
            'fmNcX': function (_0x4c9006) {
                return _0x4c9006();
            }
        };
        Promise['await'](_0x480b5b['fmNcX'](migrateSessions));
    }
});
