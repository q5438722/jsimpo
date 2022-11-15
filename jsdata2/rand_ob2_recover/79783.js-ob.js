const {getPlatformFilterTag, normalizeNodeModules, jsPreprocessOptions} = require(_0x555879(476)), preprocessor = require(_0x555879(477)), FILTER_TAG = getPlatformFilterTag();
function preprocessBlock(_0x40a815) {
    const _0x40adc3 = _0x555879;
    return _0x40a815[_0x40adc3(478)] && (_0x40a815[_0x40adc3(478)] = preprocessor[_0x40adc3(479)](_0x40a815[_0x40adc3(478)], jsPreprocessOptions['context'], { 'type': jsPreprocessOptions[_0x40adc3(480)] })['trim']()), _0x40a815;
}
function _0x5095(_0x840b94, _0x353035) {
    return _0x5095 = function (_0x57c116, _0x5095a9) {
        _0x57c116 = _0x57c116 - 466;
        let _0x12249f = _0x57c1[_0x57c116];
        return _0x12249f;
    }, _0x5095(_0x840b94, _0x353035);
}
module[_0x555879(481)] = function parseCustomBlocks(_0x324172, _0x4df65a) {
    const _0x5a98e7 = _0x555879;
    process[_0x5a98e7(482)][_0x5a98e7(483)] && process[_0x5a98e7(482)][_0x5a98e7(483)]['indexOf']('mp-') === 0 && !_0x324172[_0x5a98e7(484)] && (_0x324172[_0x5a98e7(484)] = {
        'type': _0x5a98e7(484),
        'content': 'export default {}',
        'start': 100,
        'attrs': {},
        'end': 125
    });
    if (!_0x324172[_0x5a98e7(485)] || !FILTER_TAG || _0x4df65a[_0x5a98e7(486)])
        return _0x324172[_0x5a98e7(487)][_0x5a98e7(488)] = 0, _0x324172;
    const _0x450c2c = Object[_0x5a98e7(489)](null);
    _0x324172[_0x5a98e7(487)] = _0x324172[_0x5a98e7(487)]['filter'](_0x1cebfd => {
        const _0x488c90 = _0x5a98e7;
        if (_0x1cebfd[_0x488c90(490)][_0x488c90(491)] && (_0x1cebfd['type'] === FILTER_TAG || _0x1cebfd[_0x488c90(490)]['lang'] === FILTER_TAG))
            return _0x450c2c[_0x1cebfd[_0x488c90(490)][_0x488c90(491)]] = preprocessBlock(_0x1cebfd), !![];
        _0x1cebfd[_0x488c90(490)][_0x488c90(491)] && (_0x1cebfd[_0x488c90(480)] === 'renderjs' || _0x1cebfd[_0x488c90(490)][_0x488c90(492)] === _0x488c90(493)) && (_0x1cebfd[_0x488c90(480)] = _0x488c90(493), _0x1cebfd['attrs'][_0x488c90(492)] = 'js', _0x324172[_0x488c90(493)] = preprocessBlock(_0x1cebfd), _0x450c2c[_0x1cebfd[_0x488c90(490)][_0x488c90(491)]] = Object[_0x488c90(494)]({}, _0x1cebfd, { 'content': '' }));
    });
    if (Object[_0x5a98e7(495)](_0x450c2c)[_0x5a98e7(488)]) {
        const _0x4b1a76 = JSON[_0x5a98e7(496)](JSON[_0x5a98e7(497)](_0x450c2c));
        Object[_0x5a98e7(495)](_0x4b1a76)[_0x5a98e7(498)](_0x274e44 => {
            const _0x10709f = _0x5a98e7, _0x4ecdea = _0x4b1a76[_0x274e44];
            _0x4ecdea[_0x10709f(490)][_0x10709f(499)] && (_0x4ecdea[_0x10709f(490)][_0x10709f(499)] = normalizeNodeModules(_0x4ecdea['attrs']['src']));
        }), _0x324172['template'][_0x5a98e7(490)][_0x5a98e7(500)] = Buffer['from'](JSON[_0x5a98e7(497)](_0x4b1a76))[_0x5a98e7(501)](_0x5a98e7(502));
    }
    return _0x324172;
};