'use strict';
const _0x2a19 = [
    'scrolltop',
    'isIE',
    'testUnlessIE',
    '/test/data/testinit-jsdom.js',
    'currentScript',
    'src',
    'replace',
    '../',
    'test/data/',
    'jQuery',
    'replaced',
    'getTime',
    'random',
    'loadTests',
    'addEventListener',
    '__karma__',
    'noConflict',
    'start',
    '1120940IvBtZU',
    '1229416FDZdNs',
    '166wbUSxp',
    '6563AwQdEv',
    '841946ALNQNK',
    '2QLSwdk',
    '8ZAjieb',
    '154307oosHtL',
    '19AQxZDZ',
    '76292WRgvmT',
    '1361jZfACx',
    '1162SfYQes',
    'config'
];
const _0x4c68cd = _0x37cd;
(function (_0x50d4eb, _0x39881a) {
    const _0x201470 = _0x37cd;
    while (!![]) {
        try {
            const _0x26826c = -parseInt(_0x201470(0x8b)) + parseInt(_0x201470(0x8c)) + parseInt(_0x201470(0x8d)) * parseInt(_0x201470(0x8e)) + -parseInt(_0x201470(0x8f)) * parseInt(_0x201470(0x90)) + parseInt(_0x201470(0x91)) * parseInt(_0x201470(0x92)) + -parseInt(_0x201470(0x93)) * parseInt(_0x201470(0x94)) + -parseInt(_0x201470(0x95)) * -parseInt(_0x201470(0x96));
            if (_0x26826c === _0x39881a)
                break;
            else
                _0x50d4eb['push'](_0x50d4eb['shift']());
        } catch (_0x57b4f9) {
            _0x50d4eb['push'](_0x50d4eb['shift']());
        }
    }
}(_0x2a19, 0xd6f30));
function _0x37cd(_0x5f3627, _0x18224e) {
    return _0x37cd = function (_0x2a196c, _0x37cd5e) {
        _0x2a196c = _0x2a196c - 0x8b;
        let _0x43e9f6 = _0x2a19[_0x2a196c];
        return _0x43e9f6;
    }, _0x37cd(_0x5f3627, _0x18224e);
}
QUnit[_0x4c68cd(0x97)][_0x4c68cd(0x98)] = ![], QUnit[_0x4c68cd(0x99)] = ![], QUnit[_0x4c68cd(0x9a)] = QUnit['test'];
const FILEPATH = _0x4c68cd(0x9b), activeScript = document[_0x4c68cd(0x9c)], parentUrl = activeScript && activeScript[_0x4c68cd(0x9d)] ? activeScript[_0x4c68cd(0x9d)][_0x4c68cd(0x9e)](/[?#].*/, '') + FILEPATH[_0x4c68cd(0x9e)](/[^/]+/g, '..') + '/' : _0x4c68cd(0x9f), supportjQuery = this['jQuery'], baseURL = parentUrl + _0x4c68cd(0xa0);
supportjQuery['noConflict'](!![]), window['originaljQuery'] = this[_0x4c68cd(0xa1)] = undefined, window['original$'] = this['$'] = _0x4c68cd(0xa2);
function url(_0x1d7509) {
    const _0x5d9b0f = _0x4c68cd;
    return baseURL + _0x1d7509 + (/\?/['test'](_0x1d7509) ? '&' : '?') + new Date()[_0x5d9b0f(0xa3)]() + '' + parseInt(Math[_0x5d9b0f(0xa4)]() * 0x186a0, 0xa);
}
this[_0x4c68cd(0xa5)] = function () {
    const _0x4f6154 = _0x4c68cd;
    window[_0x4f6154(0xa6)]('load', function () {
        const _0x2d20c4 = _0x4f6154;
        window[_0x2d20c4(0xa7)]['start'](), jQuery[_0x2d20c4(0xa8)](), QUnit[_0x2d20c4(0xa9)]();
    });
};
