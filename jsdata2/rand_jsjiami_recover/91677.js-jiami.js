const Prism = require('prismjs');
const prismComponents = require('prismjs/components');
const getBaseLanguageName = (_0x1f0c68, _0x1286c0 = prismComponents) => {
    if (_0x1286c0['languages'][_0x1f0c68]) {
        return _0x1f0c68;
    }
    return Object['keys'](_0x1286c0['languages'])['find'](_0x38df5b => {
        if ('nEtkr' === 'nEtkr') {
            const {alias} = _0x1286c0['languages'][_0x38df5b];
            if (!alias)
                return ![];
            if (Array['isArray'](alias)) {
                if ('qCPcU' === 'ZkeYz') {
                    return;
                } else {
                    return alias['includes'](_0x1f0c68);
                }
            } else {
                if ('fKQIp' === 'fKQIp') {
                    return alias === _0x1f0c68;
                } else {
                    loadPrismLanguage(languageData['require']);
                }
            }
        } else {
            return alias === _0x1f0c68;
        }
    });
};
module['exports'] = function loadPrismLanguage(_0x42a933) {
    const _0x19bcbb = getBaseLanguageName(_0x42a933);
    if (!_0x19bcbb) {
        throw new Error('Prism doesn\'t support language \'' + _0x42a933 + '\'.');
    }
    if (Prism['languages'][_0x19bcbb]) {
        return;
    }
    const _0x13c27c = prismComponents['languages'][_0x19bcbb];
    if (_0x13c27c['option'] === 'default') {
        if ('YlSWP' === 'RQqdB') {
            throw new Error('Prism doesn\'t support language \'' + _0x42a933 + '\'.');
        } else {
            return;
        }
    }
    if (_0x13c27c['require']) {
        if (Array['isArray'](_0x13c27c['require'])) {
            _0x13c27c['require']['forEach'](loadPrismLanguage);
        } else {
            if ('wdRCq' !== 'wdRCq') {
                return alias['includes'](nameOrAlias);
            } else {
                loadPrismLanguage(_0x13c27c['require']);
            }
        }
    }
    require('prismjs/components/prism-' + _0x19bcbb + '.js');
};
module['exports']['getBaseLanguageName'] = getBaseLanguageName;