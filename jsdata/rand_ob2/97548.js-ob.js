const _0x4023 = [
    '&quot;',
    '&#x27;',
    '&lt;',
    '&gt;',
    'substring',
    'boolean',
    'number',
    '240087TYnVcF',
    '167756iQfWbu',
    '173947cQVYIm',
    '12wGyZVN',
    '17146sdqQTh',
    '147666akLTCi',
    '283222PGwCFH',
    '137290bzmaxx',
    'exec',
    'index',
    'length',
    'charCodeAt'
];
(function (_0x2e5107, _0x22ffe5) {
    const _0x3ae077 = _0x23cf;
    while (!![]) {
        try {
            const _0x3b49cb = parseInt(_0x3ae077(0x163)) + -parseInt(_0x3ae077(0x164)) + parseInt(_0x3ae077(0x165)) + -parseInt(_0x3ae077(0x166)) * -parseInt(_0x3ae077(0x167)) + -parseInt(_0x3ae077(0x168)) + -parseInt(_0x3ae077(0x169)) + parseInt(_0x3ae077(0x16a));
            if (_0x3b49cb === _0x22ffe5)
                break;
            else
                _0x2e5107['push'](_0x2e5107['shift']());
        } catch (_0x9184ef) {
            _0x2e5107['push'](_0x2e5107['shift']());
        }
    }
}(_0x4023, 0x26ae0));
function _0x23cf(_0x1e1e38, _0xef5a77) {
    return _0x23cf = function (_0x4023ee, _0x23cffe) {
        _0x4023ee = _0x4023ee - 0x163;
        let _0x1230ec = _0x4023[_0x4023ee];
        return _0x1230ec;
    }, _0x23cf(_0x1e1e38, _0xef5a77);
}
const matchHtmlRegExp = /["'&<>]/;
function escapeHtml(_0x3bffa0) {
    const _0x2d769c = _0x23cf, _0x32f5d9 = '' + _0x3bffa0, _0x5366a3 = matchHtmlRegExp[_0x2d769c(0x16b)](_0x32f5d9);
    if (!_0x5366a3)
        return _0x32f5d9;
    let _0x113dac, _0x5bde87 = '', _0x305efb, _0x396715 = 0x0;
    for (_0x305efb = _0x5366a3[_0x2d769c(0x16c)]; _0x305efb < _0x32f5d9[_0x2d769c(0x16d)]; _0x305efb++) {
        switch (_0x32f5d9[_0x2d769c(0x16e)](_0x305efb)) {
        case 0x22:
            _0x113dac = _0x2d769c(0x16f);
            break;
        case 0x26:
            _0x113dac = '&amp;';
            break;
        case 0x27:
            _0x113dac = _0x2d769c(0x170);
            break;
        case 0x3c:
            _0x113dac = _0x2d769c(0x171);
            break;
        case 0x3e:
            _0x113dac = _0x2d769c(0x172);
            break;
        default:
            continue;
        }
        _0x396715 !== _0x305efb && (_0x5bde87 += _0x32f5d9[_0x2d769c(0x173)](_0x396715, _0x305efb)), _0x396715 = _0x305efb + 0x1, _0x5bde87 += _0x113dac;
    }
    return _0x396715 !== _0x305efb ? _0x5bde87 + _0x32f5d9['substring'](_0x396715, _0x305efb) : _0x5bde87;
}
function escapeTextForBrowser(_0x4f6036) {
    const _0x522586 = _0x23cf;
    if (typeof _0x4f6036 === _0x522586(0x174) || typeof _0x4f6036 === _0x522586(0x175))
        return '' + _0x4f6036;
    return escapeHtml(_0x4f6036);
}
export default escapeTextForBrowser;
