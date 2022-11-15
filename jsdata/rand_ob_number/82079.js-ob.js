const Promise = require('bluebird'), ObjectId = require('bson-objectid'), _ = require('lodash'), logging = require('@tryghost/logging');
module['exports']['config'] = {
    'transaction': !![],
    'irreversible': !![]
}, module['exports']['up'] = _0x1d7e13 => {
    const _0x4d9da4 = _['merge']({
            'context': { 'internal': !![] },
            'migrating': !![]
        }, _0x1d7e13), _0x173cdb = [
            'name',
            'email',
            'created_at',
            'created_by',
            'updated_at',
            'updated_by'
        ];
    return _0x4d9da4['transacting']('subscribers')['select']()['then'](_0x56d110 => {
        if (_0x56d110 && _0x56d110['length'] > -0x1c6e + 0x9a * -0x19 + 0x2b78) {
            logging['info']('Adding\x20' + _0x56d110['length'] + '\x20entries\x20to\x20members');
            let _0x92a237 = _['map'](_0x56d110, _0x20c236 => {
                let _0x31159f = _0x173cdb['reduce'](function (_0xa184f6, _0x575be9) {
                    return Object['assign'](_0xa184f6, { [_0x575be9]: _0x20c236[_0x575be9] });
                }, {});
                return _0x31159f['id'] = ObjectId()['toHexString'](), _0x31159f;
            });
            return Promise['map'](_0x92a237, _0x4990b8 => {
                return _0x4d9da4['transacting']('members')['insert'](_0x4990b8);
            });
        } else
            return logging['info']('Skipping\x20populating\x20members\x20table:\x20found\x200\x20subscribers'), Promise['resolve']();
    });
}, module['exports']['down'] = () => {
    return Promise['reject']();
};
