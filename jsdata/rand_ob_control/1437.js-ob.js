'use babel';
import _0x408100 from 'atom-select-list';
import _0x215155 from './helpers';
export default class DiffListView {
    constructor() {
        const _0x5cbfb7 = {
            'AsoAg': 'two-lines',
            'wYMzo': 'div',
            'TUjhP': 'primary-line',
            'idTyk': 'secondary-line',
            'budRv': function (_0x634055, _0x4024b0) {
                return _0x634055 > _0x4024b0;
            },
            'IaAHS': function (_0x2562d3, _0x3af37a) {
                return _0x2562d3 - _0x3af37a;
            },
            'RjfAJ': 'No\x20diffs\x20in\x20file',
            'SiYiQ': 'diff-list-view'
        };
        this['selectListView'] = new _0x408100({
            'emptyMessage': _0x5cbfb7['RjfAJ'],
            'items': [],
            'filterKeyForItem': _0x229b55 => _0x229b55['lineText'],
            'elementForItem': _0x1abb68 => {
                const _0x428468 = document['createElement']('li');
                _0x428468['classList']['add'](_0x5cbfb7['AsoAg']);
                const _0x3ee953 = document['createElement'](_0x5cbfb7['wYMzo']);
                _0x3ee953['classList']['add'](_0x5cbfb7['TUjhP']), _0x3ee953['textContent'] = _0x1abb68['lineText'], _0x428468['appendChild'](_0x3ee953);
                const _0x4f6792 = document['createElement'](_0x5cbfb7['wYMzo']);
                return _0x4f6792['classList']['add'](_0x5cbfb7['idTyk']), _0x4f6792['textContent'] = '-' + _0x1abb68['oldStart'] + ',' + _0x1abb68['oldLines'] + '\x20+' + _0x1abb68['newStart'] + ',' + _0x1abb68['newLines'], _0x428468['appendChild'](_0x4f6792), _0x428468;
            },
            'didConfirmSelection': _0x43b938 => {
                this['cancel']();
                const _0x50a83e = _0x5cbfb7['budRv'](_0x43b938['newStart'], 0x0) ? _0x5cbfb7['IaAHS'](_0x43b938['newStart'], 0x1) : _0x43b938['newStart'];
                this['editor']['setCursorBufferPosition']([
                    _0x50a83e,
                    0x0
                ], { 'autoscroll': !![] }), this['editor']['moveToFirstCharacterOfLine']();
            },
            'didCancelSelection': () => {
                this['cancel']();
            }
        }), this['selectListView']['element']['classList']['add'](_0x5cbfb7['SiYiQ']), this['panel'] = atom['workspace']['addModalPanel']({
            'item': this['selectListView'],
            'visible': ![]
        });
    }
    ['attach']() {
        this['previouslyFocusedElement'] = document['activeElement'], this['selectListView']['reset'](), this['panel']['show'](), this['selectListView']['focus']();
    }
    ['cancel']() {
        this['panel']['hide'](), this['previouslyFocusedElement'] && (this['previouslyFocusedElement']['focus'](), this['previouslyFocusedElement'] = null);
    }
    ['destroy']() {
        return this['cancel'](), this['panel']['destroy'](), this['selectListView']['destroy']();
    }
    async ['toggle']() {
        const _0x7c7a88 = {
                'PbeUF': function (_0x1cca08, _0x19b969) {
                    return _0x1cca08(_0x19b969);
                },
                'MSbIb': function (_0x245a8e, _0x2902a1) {
                    return _0x245a8e > _0x2902a1;
                },
                'cigeK': function (_0x196365, _0x550188) {
                    return _0x196365 - _0x550188;
                }
            }, _0x12dffb = atom['workspace']['getActiveTextEditor']();
        if (this['panel']['isVisible']())
            this['cancel']();
        else {
            if (_0x12dffb) {
                this['editor'] = _0x12dffb;
                const _0x1c78b8 = await _0x7c7a88['PbeUF'](_0x215155, this['editor']['getPath']());
                let _0x1cfb4e = _0x1c78b8 ? _0x1c78b8['getLineDiffs'](this['editor']['getPath'](), this['editor']['getText']()) : [];
                if (!_0x1cfb4e)
                    _0x1cfb4e = [];
                for (let _0x3fd699 of _0x1cfb4e) {
                    const _0x402a32 = _0x7c7a88['MSbIb'](_0x3fd699['newStart'], 0x0) ? _0x7c7a88['cigeK'](_0x3fd699['newStart'], 0x1) : _0x3fd699['newStart'], _0x4c7772 = this['editor']['lineTextForBufferRow'](_0x402a32);
                    _0x3fd699['lineText'] = _0x4c7772 ? _0x4c7772['trim']() : '';
                }
                await this['selectListView']['update']({ 'items': _0x1cfb4e }), this['attach']();
            }
        }
    }
}
