const Promise = require('bluebird'), ObjectId = require('bson-objectid'), _ = require('lodash'), logging = require('@tryghost/logging');
module['exports']['config'] = {
    'transaction': !![],
    'irreversible': !![]
}, module['exports']['up'] = _0x390661 => {
    const _0x51158d = {
            'jNhoJ': function (_0x3b7525) {
                return _0x3b7525();
            },
            'SSCkB': 'members',
            'hnckk': function (_0x5e59ff, _0x57dbc5) {
                return _0x5e59ff > _0x57dbc5;
            },
            'WMolp': 'Skipping\x20populating\x20members\x20table:\x20found\x200\x20subscribers',
            'WcfVl': 'name',
            'KSMZe': 'email',
            'KAgzm': 'created_at',
            'HsIXu': 'created_by',
            'yknKr': 'updated_at',
            'LGFRe': 'updated_by',
            'wkcoK': 'subscribers'
        }, _0x471bf3 = _['merge']({
            'context': { 'internal': !![] },
            'migrating': !![]
        }, _0x390661), _0x117fab = [
            _0x51158d['WcfVl'],
            _0x51158d['KSMZe'],
            _0x51158d['KAgzm'],
            _0x51158d['HsIXu'],
            _0x51158d['yknKr'],
            _0x51158d['LGFRe']
        ];
    return _0x471bf3['transacting'](_0x51158d['wkcoK'])['select']()['then'](_0x25d6ab => {
        const _0x1ea9dc = { 'eNoiV': _0x51158d['SSCkB'] };
        if (_0x25d6ab && _0x51158d['hnckk'](_0x25d6ab['length'], 0x0)) {
            logging['info']('Adding\x20' + _0x25d6ab['length'] + '\x20entries\x20to\x20members');
            let _0x47fb25 = _['map'](_0x25d6ab, _0x189747 => {
                let _0x324390 = _0x117fab['reduce'](function (_0x3e3d7a, _0x10790c) {
                    return Object['assign'](_0x3e3d7a, { [_0x10790c]: _0x189747[_0x10790c] });
                }, {});
                return _0x324390['id'] = _0x51158d['jNhoJ'](ObjectId)['toHexString'](), _0x324390;
            });
            return Promise['map'](_0x47fb25, _0x2afae1 => {
                return _0x471bf3['transacting'](_0x1ea9dc['eNoiV'])['insert'](_0x2afae1);
            });
        } else
            return logging['info'](_0x51158d['WMolp']), Promise['resolve']();
    });
}, module['exports']['down'] = () => {
    return Promise['reject']();
};
