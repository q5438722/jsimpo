const _ = require('lodash');
module['exports'] = function (_0x1380dc) {
    const _0x4cbe1e = { 'vgdgG': 'toJSON' }, _0x417cce = _0x1380dc['Model'];
    _0x1380dc['Model'] = _0x1380dc['Model']['extend']({
        'sync': function _0x493f84() {
            const _0x47a29e = _0x417cce['prototype']['sync']['apply'](this, arguments), _0xc64e53 = _0x47a29e['update'], _0x1f587c = _0x47a29e['insert'], _0x55572d = this;
            return _0x47a29e['update'] = function _0x212221(_0x1d7995) {
                return _0x1d7995 = _0x55572d['formatOnWrite'](_['cloneDeep'](_0x1d7995)), _0xc64e53['apply'](this, [_0x1d7995]);
            }, _0x47a29e['insert'] = function _0x1dfbab(_0xb9112c) {
                return _0xb9112c = _0x55572d['formatOnWrite'](_['cloneDeep'](_0xb9112c)), _0x1f587c['apply'](this, [_0xb9112c]);
            }, _0x47a29e;
        },
        'formatOnWrite': function _0x477bbf(_0x2f304a) {
            return _0x2f304a;
        },
        'format': function _0x844c9c(_0x2396ab) {
            return this['fixDatesWhenSave'](_0x2396ab);
        },
        'parse': function _0x20edbe(_0x2946aa) {
            return this['fixBools'](this['fixDatesWhenFetch'](_0x2946aa));
        },
        'toJSON': function _0x4c78ec(_0x539b8c) {
            const _0x2e2332 = _0x1380dc['Model']['filterOptions'](_0x539b8c, _0x4cbe1e['vgdgG']);
            _0x2e2332['omitPivot'] = !![], _['each'](this['relations'], (_0x3e64a1, _0xd5138a) => {
                _['isEmpty'](_0x3e64a1) && delete this['relations'][_0xd5138a];
            });
            if (_0x2e2332['previous']) {
                const _0x3ce1e7 = _['cloneDeep'](this);
                return _0x3ce1e7['attributes'] = this['_previousAttributes'], this['relationships'] && this['relationships']['forEach'](_0x1b5e72 => {
                    this['_previousRelations'] && Object['prototype']['hasOwnProperty']['call'](this['_previousRelations'], _0x1b5e72) && (_0x3ce1e7['related'](_0x1b5e72)['models'] = this['_previousRelations'][_0x1b5e72]['models']);
                }), _0x417cce['prototype']['toJSON']['call'](_0x3ce1e7, _0x2e2332);
            }
            return _0x417cce['prototype']['toJSON']['call'](this, _0x2e2332);
        }
    });
};
