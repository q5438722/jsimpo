const _0x24dd = [
    '305030hdIcTh',
    '2251UTZpmY',
    '1314935coBNAg',
    '608317wXXAgH',
    '286191vJSxyK',
    '988296rgVJPT',
    '985803ppVjVr',
    'exec',
    'index',
    'length',
    '&quot;',
    '&amp;',
    '&#x27;',
    '&gt;',
    'boolean',
    'number'
];
(function (_0x313c3b, _0x49f1b9) {
    const _0x32f25f = _0x2e20;
    while (!![]) {
        try {
            const _0x5cc3d6 = parseInt(_0x32f25f(0x6e)) + -parseInt(_0x32f25f(0x6f)) + parseInt(_0x32f25f(0x70)) + -parseInt(_0x32f25f(0x71)) + -parseInt(_0x32f25f(0x72)) + -parseInt(_0x32f25f(0x73)) + parseInt(_0x32f25f(0x74));
            if (_0x5cc3d6 === _0x49f1b9)
                break;
            else
                _0x313c3b['push'](_0x313c3b['shift']());
        } catch (_0x3d52b8) {
            _0x313c3b['push'](_0x313c3b['shift']());
        }
    }
}(_0x24dd, 0xaff49));
const matchHtmlRegExp = /["'&<>]/;
function escapeHtml(_0x3e100c) {
    const _0x3856aa = _0x2e20, _0x37c285 = '' + _0x3e100c, _0x41dea7 = matchHtmlRegExp[_0x3856aa(0x75)](_0x37c285);
    if (!_0x41dea7)
        return _0x37c285;
    let _0x32381c, _0x10e037 = '', _0x5b21c3, _0x3f0422 = 0x0;
    for (_0x5b21c3 = _0x41dea7[_0x3856aa(0x76)]; _0x5b21c3 < _0x37c285[_0x3856aa(0x77)]; _0x5b21c3++) {
        switch (_0x37c285['charCodeAt'](_0x5b21c3)) {
        case 0x22:
            _0x32381c = _0x3856aa(0x78);
            break;
        case 0x26:
            _0x32381c = _0x3856aa(0x79);
            break;
        case 0x27:
            _0x32381c = _0x3856aa(0x7a);
            break;
        case 0x3c:
            _0x32381c = '&lt;';
            break;
        case 0x3e:
            _0x32381c = _0x3856aa(0x7b);
            break;
        default:
            continue;
        }
        _0x3f0422 !== _0x5b21c3 && (_0x10e037 += _0x37c285['substring'](_0x3f0422, _0x5b21c3)), _0x3f0422 = _0x5b21c3 + 0x1, _0x10e037 += _0x32381c;
    }
    return _0x3f0422 !== _0x5b21c3 ? _0x10e037 + _0x37c285['substring'](_0x3f0422, _0x5b21c3) : _0x10e037;
}
function _0x2e20(_0x31d99a, _0x31542b) {
    return _0x2e20 = function (_0x24dd63, _0x2e20e8) {
        _0x24dd63 = _0x24dd63 - 0x6e;
        let _0x579177 = _0x24dd[_0x24dd63];
        return _0x579177;
    }, _0x2e20(_0x31d99a, _0x31542b);
}
function escapeTextForBrowser(_0x29d38b) {
    const _0x487551 = _0x2e20;
    if (typeof _0x29d38b === _0x487551(0x7c) || typeof _0x29d38b === _0x487551(0x7d))
        return '' + _0x29d38b;
    return escapeHtml(_0x29d38b);
}
export default escapeTextForBrowser;
