const Prism = require('prismjs'), prismComponents = require('prismjs/components'), getBaseLanguageName = (_0x41553d, _0x5682b9 = prismComponents) => {
        const _0x31a047 = _0x80d4;
        if (_0x5682b9['languages'][_0x41553d])
            return _0x41553d;
        return Object['keys'](_0x5682b9[_0x31a047(226)])['find'](_0x1a6453 => {
            const _0x12fd91 = _0x31a047, {alias: _0x13c030} = _0x5682b9[_0x12fd91(226)][_0x1a6453];
            if (!_0x13c030)
                return ![];
            return Array[_0x12fd91(227)](_0x13c030) ? _0x13c030[_0x12fd91(228)](_0x41553d) : _0x13c030 === _0x41553d;
        });
    };
module[_0xb99583(229)] = function loadPrismLanguage(_0x392951) {
    const _0x554f15 = _0xb99583, _0x2b85d6 = getBaseLanguageName(_0x392951);
    if (!_0x2b85d6)
        throw new Error(_0x554f15(230) + _0x392951 + '\'.');
    if (Prism['languages'][_0x2b85d6])
        return;
    const _0x29b846 = prismComponents[_0x554f15(226)][_0x2b85d6];
    if (_0x29b846[_0x554f15(231)] === 'default')
        return;
    _0x29b846[_0x554f15(232)] && (Array[_0x554f15(227)](_0x29b846[_0x554f15(232)]) ? _0x29b846['require']['forEach'](loadPrismLanguage) : loadPrismLanguage(_0x29b846[_0x554f15(232)])), require('prismjs/components/prism-' + _0x2b85d6 + _0x554f15(233));
}, module['exports'][_0xb99583(234)] = getBaseLanguageName;