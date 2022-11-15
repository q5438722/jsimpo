'use babel';
const _0x14b8 = [
    'toggle',
    'getActiveTextEditor',
    'isVisible',
    'getPath',
    'lineText',
    'trim',
    'update',
    '227375FFauPJ',
    '38530GkohUP',
    '6pbeMaF',
    '136091uMzcwW',
    '7393yeFngq',
    '26qWcziw',
    '64230umJvwI',
    '75062ivMYWX',
    '212491WrPwfK',
    'No\x20diffs\x20in\x20file',
    'createElement',
    'classList',
    'add',
    'two-lines',
    'div',
    'textContent',
    'secondary-line',
    'oldLines',
    'newStart',
    'appendChild',
    'editor',
    'setCursorBufferPosition',
    'cancel',
    'selectListView',
    'element',
    'diff-list-view',
    'panel',
    'workspace',
    'previouslyFocusedElement',
    'activeElement',
    'reset',
    'show',
    'focus',
    'destroy'
];
const _0x5e4037 = _0x49ae;
(function (_0x16990e, _0x595e93) {
    const _0x4541cc = _0x49ae;
    while (!![]) {
        try {
            const _0x5daee0 = -parseInt(_0x4541cc(0x14f)) + -parseInt(_0x4541cc(0x150)) * -parseInt(_0x4541cc(0x151)) + parseInt(_0x4541cc(0x152)) + -parseInt(_0x4541cc(0x153)) * parseInt(_0x4541cc(0x154)) + -parseInt(_0x4541cc(0x155)) + parseInt(_0x4541cc(0x156)) + parseInt(_0x4541cc(0x157));
            if (_0x5daee0 === _0x595e93)
                break;
            else
                _0x16990e['push'](_0x16990e['shift']());
        } catch (_0x29e473) {
            _0x16990e['push'](_0x16990e['shift']());
        }
    }
}(_0x14b8, 0x29bf9));
function _0x49ae(_0x5278d6, _0x17218c) {
    return _0x49ae = function (_0x14b82e, _0x49ae05) {
        _0x14b82e = _0x14b82e - 0x14f;
        let _0xd5e1b7 = _0x14b8[_0x14b82e];
        return _0xd5e1b7;
    }, _0x49ae(_0x5278d6, _0x17218c);
}
import _0x1680a4 from 'atom-select-list';
import _0x4b583a from './helpers';
export default class DiffListView {
    constructor() {
        const _0x2f72e3 = _0x49ae;
        this['selectListView'] = new _0x1680a4({
            'emptyMessage': _0x2f72e3(0x158),
            'items': [],
            'filterKeyForItem': _0xcfef9 => _0xcfef9['lineText'],
            'elementForItem': _0x10668e => {
                const _0x54ce20 = _0x2f72e3, _0x221068 = document[_0x54ce20(0x159)]('li');
                _0x221068[_0x54ce20(0x15a)][_0x54ce20(0x15b)](_0x54ce20(0x15c));
                const _0x2fe6dc = document['createElement'](_0x54ce20(0x15d));
                _0x2fe6dc[_0x54ce20(0x15a)][_0x54ce20(0x15b)]('primary-line'), _0x2fe6dc[_0x54ce20(0x15e)] = _0x10668e['lineText'], _0x221068['appendChild'](_0x2fe6dc);
                const _0x46598c = document[_0x54ce20(0x159)](_0x54ce20(0x15d));
                return _0x46598c[_0x54ce20(0x15a)]['add'](_0x54ce20(0x15f)), _0x46598c[_0x54ce20(0x15e)] = '-' + _0x10668e['oldStart'] + ',' + _0x10668e[_0x54ce20(0x160)] + '\x20+' + _0x10668e[_0x54ce20(0x161)] + ',' + _0x10668e['newLines'], _0x221068[_0x54ce20(0x162)](_0x46598c), _0x221068;
            },
            'didConfirmSelection': _0x388cc4 => {
                const _0x2aa27c = _0x2f72e3;
                this['cancel']();
                const _0x32310b = _0x388cc4[_0x2aa27c(0x161)] > 0x0 ? _0x388cc4[_0x2aa27c(0x161)] - 0x1 : _0x388cc4[_0x2aa27c(0x161)];
                this[_0x2aa27c(0x163)][_0x2aa27c(0x164)]([
                    _0x32310b,
                    0x0
                ], { 'autoscroll': !![] }), this[_0x2aa27c(0x163)]['moveToFirstCharacterOfLine']();
            },
            'didCancelSelection': () => {
                const _0x46d158 = _0x2f72e3;
                this[_0x46d158(0x165)]();
            }
        }), this[_0x2f72e3(0x166)][_0x2f72e3(0x167)]['classList'][_0x2f72e3(0x15b)](_0x2f72e3(0x168)), this[_0x2f72e3(0x169)] = atom[_0x2f72e3(0x16a)]['addModalPanel']({
            'item': this[_0x2f72e3(0x166)],
            'visible': ![]
        });
    }
    ['attach']() {
        const _0x39e4a3 = _0x49ae;
        this[_0x39e4a3(0x16b)] = document[_0x39e4a3(0x16c)], this[_0x39e4a3(0x166)][_0x39e4a3(0x16d)](), this['panel'][_0x39e4a3(0x16e)](), this[_0x39e4a3(0x166)]['focus']();
    }
    [_0x5e4037(0x165)]() {
        const _0x39a0ef = _0x5e4037;
        this[_0x39a0ef(0x169)]['hide'](), this['previouslyFocusedElement'] && (this['previouslyFocusedElement'][_0x39a0ef(0x16f)](), this[_0x39a0ef(0x16b)] = null);
    }
    ['destroy']() {
        const _0x2e83fc = _0x5e4037;
        return this['cancel'](), this[_0x2e83fc(0x169)][_0x2e83fc(0x170)](), this[_0x2e83fc(0x166)][_0x2e83fc(0x170)]();
    }
    async [_0x5e4037(0x171)]() {
        const _0x583715 = _0x5e4037, _0x21bc5c = atom[_0x583715(0x16a)][_0x583715(0x172)]();
        if (this[_0x583715(0x169)][_0x583715(0x173)]())
            this['cancel']();
        else {
            if (_0x21bc5c) {
                this['editor'] = _0x21bc5c;
                const _0x3c6f7c = await _0x4b583a(this[_0x583715(0x163)][_0x583715(0x174)]());
                let _0x5c3052 = _0x3c6f7c ? _0x3c6f7c['getLineDiffs'](this[_0x583715(0x163)]['getPath'](), this[_0x583715(0x163)]['getText']()) : [];
                if (!_0x5c3052)
                    _0x5c3052 = [];
                for (let _0x3a582d of _0x5c3052) {
                    const _0x2cb7d5 = _0x3a582d[_0x583715(0x161)] > 0x0 ? _0x3a582d['newStart'] - 0x1 : _0x3a582d[_0x583715(0x161)], _0x27fb9d = this['editor']['lineTextForBufferRow'](_0x2cb7d5);
                    _0x3a582d[_0x583715(0x175)] = _0x27fb9d ? _0x27fb9d[_0x583715(0x176)]() : '';
                }
                await this['selectListView'][_0x583715(0x177)]({ 'items': _0x5c3052 }), this['attach']();
            }
        }
    }
}
