const Prism = require('prismjs'), prismComponents = require('prismjs/components'), getBaseLanguageName = (_0x30ac3f, _0xfd701 = prismComponents) => {
        const _0x502da1 = {
            'bctXr': function (_0x47efde, _0x1d03f2) {
                return _0x47efde === _0x1d03f2;
            }
        };
        if (_0xfd701['languages'][_0x30ac3f])
            return _0x30ac3f;
        return Object['keys'](_0xfd701['languages'])['find'](_0x153c69 => {
            const {alias: _0x1761e6} = _0xfd701['languages'][_0x153c69];
            if (!_0x1761e6)
                return ![];
            return Array['isArray'](_0x1761e6) ? _0x1761e6['includes'](_0x30ac3f) : _0x502da1['bctXr'](_0x1761e6, _0x30ac3f);
        });
    };
module['exports'] = function loadPrismLanguage(_0x155a13) {
    const _0x22c608 = {
            'HgMCJ': function (_0xf9bef9, _0x4aae15) {
                return _0xf9bef9(_0x4aae15);
            },
            'QRBfw': function (_0x26ff11, _0x1164a4) {
                return _0x26ff11 === _0x1164a4;
            },
            'oTEdh': function (_0x4c3334, _0x592d9a) {
                return _0x4c3334(_0x592d9a);
            },
            'UjBTK': function (_0x5397f9, _0x6aa26) {
                return _0x5397f9(_0x6aa26);
            }
        }, _0x3252aa = _0x22c608['HgMCJ'](getBaseLanguageName, _0x155a13);
    if (!_0x3252aa)
        throw new Error('Prism\x20doesn\x27t\x20support\x20language\x20\x27' + _0x155a13 + '\x27.');
    if (Prism['languages'][_0x3252aa])
        return;
    const _0x32563d = prismComponents['languages'][_0x3252aa];
    if (_0x22c608['QRBfw'](_0x32563d['option'], 'default'))
        return;
    _0x32563d['require'] && (Array['isArray'](_0x32563d['require']) ? _0x32563d['require']['forEach'](loadPrismLanguage) : _0x22c608['oTEdh'](loadPrismLanguage, _0x32563d['require'])), _0x22c608['UjBTK'](require, 'prismjs/components/prism-' + _0x3252aa + '.js');
}, module['exports']['getBaseLanguageName'] = getBaseLanguageName;
