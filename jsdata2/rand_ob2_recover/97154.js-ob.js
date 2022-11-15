module[_0x53f8d0(489)] = function shouldIgnoreConsoleError(_0x52c305, _0x1e713b) {
    var _0x3ea301 = _0x53f8d0;
    if (__DEV__) {
        if (typeof _0x52c305 === _0x3ea301(490)) {
            if (_0x52c305[_0x3ea301(491)](_0x3ea301(492)) === 0)
                return !![];
            if (_0x52c305[_0x3ea301(491)](_0x3ea301(493)) === 0)
                return !![];
            if (_0x52c305[_0x3ea301(491)]('ReactDOM.render is no longer supported in React 18') !== -1 || _0x52c305['indexOf'](_0x3ea301(494)) !== -1)
                return !![];
        }
    } else {
        if (_0x52c305 != null && typeof _0x52c305[_0x3ea301(495)] === 'string' && typeof _0x52c305[_0x3ea301(496)] === _0x3ea301(490) && _0x1e713b['length'] === 0)
            return !![];
    }
    return ![];
};