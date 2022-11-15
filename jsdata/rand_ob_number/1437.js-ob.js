'use babel';
import _0x452bf6 from 'atom-select-list';
import _0x306387 from './helpers';
export default class DiffListView {
    constructor() {
        this['selectListView'] = new _0x452bf6({
            'emptyMessage': 'No\x20diffs\x20in\x20file',
            'items': [],
            'filterKeyForItem': _0x3cbe26 => _0x3cbe26['lineText'],
            'elementForItem': _0xd785d9 => {
                const _0x3cd7cd = document['createElement']('li');
                _0x3cd7cd['classList']['add']('two-lines');
                const _0x4a088f = document['createElement']('div');
                _0x4a088f['classList']['add']('primary-line'), _0x4a088f['textContent'] = _0xd785d9['lineText'], _0x3cd7cd['appendChild'](_0x4a088f);
                const _0x37eb8e = document['createElement']('div');
                return _0x37eb8e['classList']['add']('secondary-line'), _0x37eb8e['textContent'] = '-' + _0xd785d9['oldStart'] + ',' + _0xd785d9['oldLines'] + '\x20+' + _0xd785d9['newStart'] + ',' + _0xd785d9['newLines'], _0x3cd7cd['appendChild'](_0x37eb8e), _0x3cd7cd;
            },
            'didConfirmSelection': _0x328d5c => {
                this['cancel']();
                const _0x323215 = _0x328d5c['newStart'] > -0x1724 + 0x1d3 * -0x13 + 0x1 * 0x39cd ? _0x328d5c['newStart'] - (-0x1a * 0x89 + -0x161 * 0x8 + -0x1 * -0x18f3) : _0x328d5c['newStart'];
                this['editor']['setCursorBufferPosition']([
                    _0x323215,
                    0xf7d + -0x18fe + 0x1 * 0x981
                ], { 'autoscroll': !![] }), this['editor']['moveToFirstCharacterOfLine']();
            },
            'didCancelSelection': () => {
                this['cancel']();
            }
        }), this['selectListView']['element']['classList']['add']('diff-list-view'), this['panel'] = atom['workspace']['addModalPanel']({
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
        const _0x227bde = atom['workspace']['getActiveTextEditor']();
        if (this['panel']['isVisible']())
            this['cancel']();
        else {
            if (_0x227bde) {
                this['editor'] = _0x227bde;
                const _0x2620f2 = await _0x306387(this['editor']['getPath']());
                let _0x296700 = _0x2620f2 ? _0x2620f2['getLineDiffs'](this['editor']['getPath'](), this['editor']['getText']()) : [];
                if (!_0x296700)
                    _0x296700 = [];
                for (let _0x4bd54b of _0x296700) {
                    const _0xf5c3ee = _0x4bd54b['newStart'] > 0x1f91 + 0xa6b * 0x2 + -0x1 * 0x3467 ? _0x4bd54b['newStart'] - (-0x11c5 + 0x106 + 0x10c0) : _0x4bd54b['newStart'], _0x101f16 = this['editor']['lineTextForBufferRow'](_0xf5c3ee);
                    _0x4bd54b['lineText'] = _0x101f16 ? _0x101f16['trim']() : '';
                }
                await this['selectListView']['update']({ 'items': _0x296700 }), this['attach']();
            }
        }
    }
}
