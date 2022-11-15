module['exports'] = {
    'postTransformNode'(_0x271f85) {
        if (_0x271f85['tag'] === 'swiper') {
            const _0x3e894b = _0x271f85['attrsMap'];
            let _0x3773d3;
            if (_0x3e894b[':disable-touch']) {
                _0x3773d3 = '!(' + _0x3e894b[':disable-touch'] + ')';
            } else if ('disable-touch' in _0x3e894b) {
                _0x3773d3 = 'false';
            }
            if (_0x3773d3) {
                const _0x5bc83e = _0x271f85['attrs']['find'](_0x5bc83e => _0x5bc83e['name'] === ':touchable');
                if (_0x5bc83e) {
                    _0x5bc83e['value'] = _0x3773d3;
                } else {
                    _0x271f85['attrs']['push']({
                        'name': ':touchable',
                        'value': _0x3773d3
                    });
                }
            }
        }
    }
};