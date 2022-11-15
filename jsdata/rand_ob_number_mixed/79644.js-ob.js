module['exports'] = {
    'postTransformNode'(_0x5adbb2) {
        if (_0x5adbb2['tag'] === 'swiper') {
            const _0x170554 = _0x5adbb2['attrsMap'];
            let _0x243606;
            if (_0x170554[':disable-touch'])
                _0x243606 = '!(' + _0x170554[':disable-touch'] + ')';
            else
                'disable-touch' in _0x170554 && (_0x243606 = 'false');
            if (_0x243606) {
                const _0xdc0a6e = _0x5adbb2['attrs']['find'](_0x12e1b8 => _0x12e1b8['name'] === ':touchable');
                _0xdc0a6e ? _0xdc0a6e['value'] = _0x243606 : _0x5adbb2['attrs']['push']({
                    'name': ':touchable',
                    'value': _0x243606
                });
            }
        }
    }
};
