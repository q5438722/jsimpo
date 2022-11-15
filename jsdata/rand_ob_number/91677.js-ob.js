const Prism = require('prismjs'), prismComponents = require('prismjs/components'), getBaseLanguageName = (_0x471301, _0x508b5b = prismComponents) => {
        if (_0x508b5b['languages'][_0x471301])
            return _0x471301;
        return Object['keys'](_0x508b5b['languages'])['find'](_0x35cff2 => {
            const {alias: _0x355cb5} = _0x508b5b['languages'][_0x35cff2];
            if (!_0x355cb5)
                return ![];
            return Array['isArray'](_0x355cb5) ? _0x355cb5['includes'](_0x471301) : _0x355cb5 === _0x471301;
        });
    };
module['exports'] = function loadPrismLanguage(_0x519fb6) {
    const _0x55cf1a = getBaseLanguageName(_0x519fb6);
    if (!_0x55cf1a)
        throw new Error('Prism\x20doesn\x27t\x20support\x20language\x20\x27' + _0x519fb6 + '\x27.');
    if (Prism['languages'][_0x55cf1a])
        return;
    const _0x1aeda2 = prismComponents['languages'][_0x55cf1a];
    if (_0x1aeda2['option'] === 'default')
        return;
    _0x1aeda2['require'] && (Array['isArray'](_0x1aeda2['require']) ? _0x1aeda2['require']['forEach'](loadPrismLanguage) : loadPrismLanguage(_0x1aeda2['require'])), require('prismjs/components/prism-' + _0x55cf1a + '.js');
}, module['exports']['getBaseLanguageName'] = getBaseLanguageName;
