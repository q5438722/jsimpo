const {ConcatSource} = require('webpack-sources'), extractFragmentIndex = (_0x353cd6, _0x49f4d8) => [
        _0x353cd6,
        _0x49f4d8
    ], sortFragmentWithIndex = ([_0x15e4da, _0x50c441], [_0x2aeaf3, _0x4cac27]) => {
        const _0x2018ec = _0x1f09, _0x23b67b = _0x15e4da['stage'] - _0x2aeaf3[_0x2018ec(394)];
        if (_0x23b67b !== 0)
            return _0x23b67b;
        const _0x3599e5 = _0x15e4da[_0x2018ec(395)] - _0x2aeaf3[_0x2018ec(395)];
        if (_0x3599e5 !== 0)
            return _0x3599e5;
        return _0x50c441 - _0x4cac27;
    };
function _0x1f09(_0xcb1875, _0x91e438) {
    return _0x1f09 = function (_0x36bf25, _0x1f09c7) {
        _0x36bf25 = _0x36bf25 - 384;
        let _0x386025 = _0x36bf[_0x36bf25];
        return _0x386025;
    }, _0x1f09(_0xcb1875, _0x91e438);
}
class InitFragment {
    constructor(_0x223085, _0x54f083, _0x26e0f2, _0x2d4ddd, _0x534c0b) {
        const _0x49542b = _0x1f09;
        this[_0x49542b(396)] = _0x223085, this[_0x49542b(394)] = _0x54f083, this[_0x49542b(395)] = _0x26e0f2, this[_0x49542b(397)] = _0x2d4ddd, this[_0x49542b(398)] = _0x534c0b;
    }
    [_0x2ef666(399)](_0x2f68e4) {
        return this['content'];
    }
    ['getEndContent'](_0x2d9a2e) {
        const _0x3932c5 = _0x2ef666;
        return this[_0x3932c5(398)];
    }
    static ['addToSource'](_0x5a1610, _0x254fea, _0x12c450) {
        const _0x25f3a8 = _0x2ef666;
        if (_0x254fea[_0x25f3a8(400)] > 0) {
            const _0x399ecf = _0x254fea[_0x25f3a8(401)](extractFragmentIndex)[_0x25f3a8(402)](sortFragmentWithIndex), _0x2881a9 = new Map();
            for (const [_0x1a1d86] of _0x399ecf) {
                if (typeof _0x1a1d86[_0x25f3a8(403)] === _0x25f3a8(404)) {
                    if (!_0x1a1d86[_0x25f3a8(397)])
                        throw new Error(_0x25f3a8(405) + _0x1a1d86[_0x25f3a8(406)]['name']);
                    const _0x4e3e28 = _0x2881a9[_0x25f3a8(407)](_0x1a1d86[_0x25f3a8(397)]);
                    if (_0x4e3e28 === undefined)
                        _0x2881a9[_0x25f3a8(408)](_0x1a1d86[_0x25f3a8(397)], _0x1a1d86);
                    else
                        Array[_0x25f3a8(409)](_0x4e3e28) ? _0x4e3e28[_0x25f3a8(410)](_0x1a1d86) : _0x2881a9[_0x25f3a8(408)](_0x1a1d86[_0x25f3a8(397)], [
                            _0x4e3e28,
                            _0x1a1d86
                        ]);
                    continue;
                } else {
                    if (typeof _0x1a1d86[_0x25f3a8(411)] === _0x25f3a8(404)) {
                        const _0x29a82c = _0x2881a9['get'](_0x1a1d86['key']);
                        if (_0x29a82c !== undefined) {
                            _0x2881a9[_0x25f3a8(408)](_0x1a1d86[_0x25f3a8(397)], _0x1a1d86[_0x25f3a8(411)](_0x29a82c));
                            continue;
                        }
                    }
                }
                _0x2881a9[_0x25f3a8(408)](_0x1a1d86['key'] || Symbol(), _0x1a1d86);
            }
            const _0x3b800a = new ConcatSource(), _0x4dabb7 = [];
            for (let _0x2aebea of _0x2881a9['values']()) {
                Array[_0x25f3a8(409)](_0x2aebea) && (_0x2aebea = _0x2aebea[0]['mergeAll'](_0x2aebea));
                _0x3b800a[_0x25f3a8(412)](_0x2aebea[_0x25f3a8(399)](_0x12c450));
                const _0x25eafc = _0x2aebea[_0x25f3a8(413)](_0x12c450);
                _0x25eafc && _0x4dabb7[_0x25f3a8(410)](_0x25eafc);
            }
            _0x3b800a[_0x25f3a8(412)](_0x5a1610);
            for (const _0x9318c4 of _0x4dabb7[_0x25f3a8(414)]()) {
                _0x3b800a[_0x25f3a8(412)](_0x9318c4);
            }
            return _0x3b800a;
        } else
            return _0x5a1610;
    }
}
InitFragment[_0x2ef666(415)][_0x2ef666(411)] = undefined, InitFragment['STAGE_CONSTANTS'] = 10, InitFragment['STAGE_ASYNC_BOUNDARY'] = 20, InitFragment[_0x2ef666(416)] = 30, InitFragment[_0x2ef666(417)] = 40, InitFragment[_0x2ef666(418)] = 50, InitFragment[_0x2ef666(419)] = 60, InitFragment['STAGE_ASYNC_HARMONY_IMPORTS'] = 70, module[_0x2ef666(420)] = InitFragment;