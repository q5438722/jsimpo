const _ = require('lodash');
module['exports'] = function (_0x563106) {
    const _0x245fdd = _0x563106['Model'];
    _0x563106['Model'] = _0x563106['Model']['extend']({
        'sync': function _0x28d014() {
            const _0x19b018 = _0x245fdd['prototype']['sync']['apply'](this, arguments), _0x6491f2 = _0x19b018['update'], _0x4fa8a9 = _0x19b018['insert'], _0x421ecd = this;
            return _0x19b018['update'] = function _0x53a5a5(_0x1dd9cd) {
                return _0x1dd9cd = _0x421ecd['formatOnWrite'](_['cloneDeep'](_0x1dd9cd)), _0x6491f2['apply'](this, [_0x1dd9cd]);
            }, _0x19b018['insert'] = function _0x38e16e(_0x4d6989) {
                return _0x4d6989 = _0x421ecd['formatOnWrite'](_['cloneDeep'](_0x4d6989)), _0x4fa8a9['apply'](this, [_0x4d6989]);
            }, _0x19b018;
        },
        'formatOnWrite': function _0x4105ce(_0x18ae8d) {
            return _0x18ae8d;
        },
        'format': function _0x12f0b6(_0x4d214f) {
            return this['fixDatesWhenSave'](_0x4d214f);
        },
        'parse': function _0x34803b(_0x5e4feb) {
            return this['fixBools'](this['fixDatesWhenFetch'](_0x5e4feb));
        },
        'toJSON': function _0x135781(_0x3b9b65) {
            const _0x1a804c = _0x563106['Model']['filterOptions'](_0x3b9b65, 'toJSON');
            _0x1a804c['omitPivot'] = !![], _['each'](this['relations'], (_0x4dbb24, _0x105fd8) => {
                _['isEmpty'](_0x4dbb24) && delete this['relations'][_0x105fd8];
            });
            if (_0x1a804c['previous']) {
                const _0x1552d6 = _['cloneDeep'](this);
                return _0x1552d6['attributes'] = this['_previousAttributes'], this['relationships'] && this['relationships']['forEach'](_0x42d5db => {
                    this['_previousRelations'] && Object['prototype']['hasOwnProperty']['call'](this['_previousRelations'], _0x42d5db) && (_0x1552d6['related'](_0x42d5db)['models'] = this['_previousRelations'][_0x42d5db]['models']);
                }), _0x245fdd['prototype']['toJSON']['call'](_0x1552d6, _0x1a804c);
            }
            return _0x245fdd['prototype']['toJSON']['call'](this, _0x1a804c);
        }
    });
};
