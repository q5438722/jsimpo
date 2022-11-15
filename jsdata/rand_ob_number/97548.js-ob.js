const matchHtmlRegExp = /["'&<>]/;
function escapeHtml(_0x5f0f1d) {
    const _0x55ddd5 = '' + _0x5f0f1d, _0x234c28 = matchHtmlRegExp['exec'](_0x55ddd5);
    if (!_0x234c28)
        return _0x55ddd5;
    let _0x5ad9a0, _0x1ec6a3 = '', _0x9dc893, _0x4b8242 = 0x34f + 0x33 * 0xa + -0x54d;
    for (_0x9dc893 = _0x234c28['index']; _0x9dc893 < _0x55ddd5['length']; _0x9dc893++) {
        switch (_0x55ddd5['charCodeAt'](_0x9dc893)) {
        case -0x48 * 0x88 + -0x1894 + -0x1 * -0x3ef6:
            _0x5ad9a0 = '&quot;';
            break;
        case -0x14a0 + -0x200 + 0x16c6:
            _0x5ad9a0 = '&amp;';
            break;
        case -0x25d5 + 0x35c + 0x22a0:
            _0x5ad9a0 = '&#x27;';
            break;
        case 0x25f7 * 0x1 + 0x1a73 + 0x3e * -0x109:
            _0x5ad9a0 = '&lt;';
            break;
        case -0x30c + -0xdad + 0x10f7:
            _0x5ad9a0 = '&gt;';
            break;
        default:
            continue;
        }
        _0x4b8242 !== _0x9dc893 && (_0x1ec6a3 += _0x55ddd5['substring'](_0x4b8242, _0x9dc893)), _0x4b8242 = _0x9dc893 + (-0x1f80 + -0xe * 0x84 + 0x1af * 0x17), _0x1ec6a3 += _0x5ad9a0;
    }
    return _0x4b8242 !== _0x9dc893 ? _0x1ec6a3 + _0x55ddd5['substring'](_0x4b8242, _0x9dc893) : _0x1ec6a3;
}
function escapeTextForBrowser(_0x2d2524) {
    if (typeof _0x2d2524 === 'boolean' || typeof _0x2d2524 === 'number')
        return '' + _0x2d2524;
    return escapeHtml(_0x2d2524);
}
export default escapeTextForBrowser;
