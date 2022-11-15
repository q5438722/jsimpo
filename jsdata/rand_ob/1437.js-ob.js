'use babel';
const _0x4447 = [
    'QrkjV',
    'editor',
    'setCursorBufferPosition',
    'moveToFirstCharacterOfLine',
    'cancel',
    'element',
    'diff-list-view',
    'panel',
    'workspace',
    'attach',
    'previouslyFocusedElement',
    'activeElement',
    'reset',
    'show',
    'focus',
    'hide',
    'destroy',
    'tSqAz',
    'getPath',
    'lineTextForBufferRow',
    '293379ZWBhqV',
    '221680sfIhkU',
    '1SCBHzq',
    '214469wYWvAe',
    '27bnpiVQ',
    '4819VprZXc',
    '322082RKepXZ',
    '1160TYXrXY',
    '169yXbguV',
    '11UEwhYa',
    '39598cMHNnQ',
    'secondary-line',
    'selectListView',
    'CtttC',
    'lineText',
    'createElement',
    'add',
    'div',
    'classList',
    'primary-line',
    'textContent',
    'appendChild',
    'drEIH',
    'oldStart',
    'oldLines',
    'newLines',
    'newStart'
];
const _0x21d686 = _0x5762;
(function (_0x21493d, _0x56a9c3) {
    const _0xbad502 = _0x5762;
    while (!![]) {
        try {
            const _0x3cd44b = -parseInt(_0xbad502(0x103)) + parseInt(_0xbad502(0x104)) + -parseInt(_0xbad502(0x105)) * -parseInt(_0xbad502(0x106)) + parseInt(_0xbad502(0x107)) * parseInt(_0xbad502(0x108)) + parseInt(_0xbad502(0x109)) + parseInt(_0xbad502(0x10a)) * parseInt(_0xbad502(0x10b)) + -parseInt(_0xbad502(0x10c)) * parseInt(_0xbad502(0x10d));
            if (_0x3cd44b === _0x56a9c3)
                break;
            else
                _0x21493d['push'](_0x21493d['shift']());
        } catch (_0x3abfea) {
            _0x21493d['push'](_0x21493d['shift']());
        }
    }
}(_0x4447, -0x4e14e * -0x1 + -0x63b9e + -0x1 * -0x6c6b3));
import _0x52f017 from 'atom-select-list';
function _0x5762(_0x572129, _0x34acb2) {
    return _0x5762 = function (_0x350f83, _0x48e69d) {
        _0x350f83 = _0x350f83 - (0x199f * -0x1 + -0x22f * -0x7 + 0x1 * 0xb59);
        let _0x736066 = _0x4447[_0x350f83];
        return _0x736066;
    }, _0x5762(_0x572129, _0x34acb2);
}
import _0x271a1b from './helpers';
export default class DiffListView {
    constructor() {
        const _0x442ca3 = _0x5762, _0x59a9be = {
                'JqqRG': 'two-lines',
                'drEIH': _0x442ca3(0x10e),
                'QrkjV': function (_0x248c75, _0x29cf64) {
                    return _0x248c75 - _0x29cf64;
                },
                'CtttC': 'No\x20diffs\x20in\x20file'
            };
        this[_0x442ca3(0x10f)] = new _0x52f017({
            'emptyMessage': _0x59a9be[_0x442ca3(0x110)],
            'items': [],
            'filterKeyForItem': _0x42cea6 => _0x42cea6[_0x442ca3(0x111)],
            'elementForItem': _0x10f9f6 => {
                const _0x4a7c59 = _0x442ca3, _0x3c3d8e = document[_0x4a7c59(0x112)]('li');
                _0x3c3d8e['classList'][_0x4a7c59(0x113)](_0x59a9be['JqqRG']);
                const _0x2395c0 = document['createElement'](_0x4a7c59(0x114));
                _0x2395c0[_0x4a7c59(0x115)][_0x4a7c59(0x113)](_0x4a7c59(0x116)), _0x2395c0[_0x4a7c59(0x117)] = _0x10f9f6[_0x4a7c59(0x111)], _0x3c3d8e[_0x4a7c59(0x118)](_0x2395c0);
                const _0x25e7dd = document[_0x4a7c59(0x112)](_0x4a7c59(0x114));
                return _0x25e7dd[_0x4a7c59(0x115)][_0x4a7c59(0x113)](_0x59a9be[_0x4a7c59(0x119)]), _0x25e7dd[_0x4a7c59(0x117)] = '-' + _0x10f9f6[_0x4a7c59(0x11a)] + ',' + _0x10f9f6[_0x4a7c59(0x11b)] + '\x20+' + _0x10f9f6['newStart'] + ',' + _0x10f9f6[_0x4a7c59(0x11c)], _0x3c3d8e[_0x4a7c59(0x118)](_0x25e7dd), _0x3c3d8e;
            },
            'didConfirmSelection': _0x17fef8 => {
                const _0x3ceab9 = _0x442ca3;
                this['cancel']();
                const _0x3d34ed = _0x17fef8[_0x3ceab9(0x11d)] > -0x626 + 0x49 * 0x1 + 0x5dd ? _0x59a9be[_0x3ceab9(0x11e)](_0x17fef8['newStart'], 0xb2c + 0xbe1 * 0x2 + -0x22ed) : _0x17fef8[_0x3ceab9(0x11d)];
                this[_0x3ceab9(0x11f)][_0x3ceab9(0x120)]([
                    _0x3d34ed,
                    0x3b9 + -0x19 * 0x162 + -0x95 * -0x35
                ], { 'autoscroll': !![] }), this[_0x3ceab9(0x11f)][_0x3ceab9(0x121)]();
            },
            'didCancelSelection': () => {
                const _0x571e1c = _0x442ca3;
                this[_0x571e1c(0x122)]();
            }
        }), this[_0x442ca3(0x10f)][_0x442ca3(0x123)]['classList'][_0x442ca3(0x113)](_0x442ca3(0x124)), this[_0x442ca3(0x125)] = atom[_0x442ca3(0x126)]['addModalPanel']({
            'item': this[_0x442ca3(0x10f)],
            'visible': ![]
        });
    }
    [_0x21d686(0x127)]() {
        const _0x452435 = _0x21d686;
        this[_0x452435(0x128)] = document[_0x452435(0x129)], this['selectListView'][_0x452435(0x12a)](), this['panel'][_0x452435(0x12b)](), this['selectListView'][_0x452435(0x12c)]();
    }
    [_0x21d686(0x122)]() {
        const _0x189345 = _0x21d686;
        this[_0x189345(0x125)][_0x189345(0x12d)](), this['previouslyFocusedElement'] && (this['previouslyFocusedElement'][_0x189345(0x12c)](), this[_0x189345(0x128)] = null);
    }
    [_0x21d686(0x12e)]() {
        const _0x3a4e98 = _0x21d686;
        return this[_0x3a4e98(0x122)](), this[_0x3a4e98(0x125)][_0x3a4e98(0x12e)](), this[_0x3a4e98(0x10f)][_0x3a4e98(0x12e)]();
    }
    async ['toggle']() {
        const _0x4e7c5a = _0x21d686, _0x36a55f = {
                'tSqAz': function (_0x17265e, _0x8aa3) {
                    return _0x17265e(_0x8aa3);
                }
            }, _0x56e562 = atom['workspace']['getActiveTextEditor']();
        if (this['panel']['isVisible']())
            this[_0x4e7c5a(0x122)]();
        else {
            if (_0x56e562) {
                this['editor'] = _0x56e562;
                const _0x62dbe4 = await _0x36a55f[_0x4e7c5a(0x12f)](_0x271a1b, this[_0x4e7c5a(0x11f)][_0x4e7c5a(0x130)]());
                let _0x3631d9 = _0x62dbe4 ? _0x62dbe4['getLineDiffs'](this[_0x4e7c5a(0x11f)][_0x4e7c5a(0x130)](), this[_0x4e7c5a(0x11f)]['getText']()) : [];
                if (!_0x3631d9)
                    _0x3631d9 = [];
                for (let _0x442cf8 of _0x3631d9) {
                    const _0x3b6851 = _0x442cf8[_0x4e7c5a(0x11d)] > -0xf7f + 0x1adb + -0x2 * 0x5ae ? _0x442cf8['newStart'] - (0xc9 * 0x2e + -0x116f * -0x1 + -0x358c) : _0x442cf8[_0x4e7c5a(0x11d)], _0x1c24e3 = this[_0x4e7c5a(0x11f)][_0x4e7c5a(0x131)](_0x3b6851);
                    _0x442cf8[_0x4e7c5a(0x111)] = _0x1c24e3 ? _0x1c24e3['trim']() : '';
                }
                await this[_0x4e7c5a(0x10f)]['update']({ 'items': _0x3631d9 }), this[_0x4e7c5a(0x127)]();
            }
        }
    }
}
