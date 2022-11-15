function _0x37cd(_0x5f3627, _0x18224e) {
    return _0x37cd = function (_0x2a196c, _0x37cd5e) {
        _0x2a196c = _0x2a196c - 139;
        let _0x43e9f6 = _0x2a19[_0x2a196c];
        return _0x43e9f6;
    }, _0x37cd(_0x5f3627, _0x18224e);
}
QUnit[_0x4c68cd(151)][_0x4c68cd(152)] = ![], QUnit[_0x4c68cd(153)] = ![], QUnit[_0x4c68cd(154)] = QUnit['test'];
const FILEPATH = _0x4c68cd(155), activeScript = document[_0x4c68cd(156)], parentUrl = activeScript && activeScript[_0x4c68cd(157)] ? activeScript[_0x4c68cd(157)][_0x4c68cd(158)](/[?#].*/, '') + FILEPATH[_0x4c68cd(158)](/[^/]+/g, '..') + '/' : _0x4c68cd(159), supportjQuery = this['jQuery'], baseURL = parentUrl + _0x4c68cd(160);
supportjQuery['noConflict'](!![]), window['originaljQuery'] = this[_0x4c68cd(161)] = undefined, window['original$'] = this['$'] = _0x4c68cd(162);
function url(_0x1d7509) {
    const _0x5d9b0f = _0x4c68cd;
    return baseURL + _0x1d7509 + (/\?/['test'](_0x1d7509) ? '&' : '?') + new Date()[_0x5d9b0f(163)]() + '' + parseInt(Math[_0x5d9b0f(164)]() * 100000, 10);
}
this[_0x4c68cd(165)] = function () {
    const _0x4f6154 = _0x4c68cd;
    window[_0x4f6154(166)]('load', function () {
        const _0x2d20c4 = _0x4f6154;
        window[_0x2d20c4(167)]['start'](), jQuery[_0x2d20c4(168)](), QUnit[_0x2d20c4(169)]();
    });
};