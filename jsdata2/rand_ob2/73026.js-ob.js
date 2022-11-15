const _0x1730 = [
    '7lYNdbF',
    '49945tJSfjn',
    '256470yJpRny',
    '46277FynHwW',
    '419718NnSFtd',
    '1szUETi',
    '1MnWVYr',
    '179969Hlnapc',
    '689785cmKTtb',
    'isApisMicroservicesCert',
    'is2018DataVisCert',
    'isQaCertV7',
    'isInfosecCertV7',
    'isJsAlgoDataStructCert',
    'isSciCompPyCertV7',
    'isDataAnalysisPyCertV7',
    'isMachineLearningPyCertV7',
    'isFrontEndCert',
    'isBackEndCert',
    'isDataVisCert',
    'isInfosecQaCert',
    'reduce',
    'collection',
    'user',
    'aggregate',
    'points',
    'completedChallenges',
    'length',
    'forEach',
    'challengeType',
    'completedChallengeCount',
    'completedProjectCount',
    'completedCertCount',
    'completedLegacyCertCount',
    '554107mTLrVV'
];
(function (_0x284d13, _0x3e903e) {
    const _0x31b870 = _0x1d09;
    while (!![]) {
        try {
            const _0x200b56 = -parseInt(_0x31b870(0x1b5)) + -parseInt(_0x31b870(0x1b6)) * parseInt(_0x31b870(0x1b7)) + parseInt(_0x31b870(0x1b8)) + parseInt(_0x31b870(0x1b9)) + parseInt(_0x31b870(0x1ba)) * parseInt(_0x31b870(0x1bb)) + parseInt(_0x31b870(0x1bc)) * -parseInt(_0x31b870(0x1bd)) + parseInt(_0x31b870(0x1be));
            if (_0x200b56 === _0x3e903e)
                break;
            else
                _0x284d13['push'](_0x284d13['shift']());
        } catch (_0x161b24) {
            _0x284d13['push'](_0x284d13['shift']());
        }
    }
}(_0x1730, 0x5036f));
function getCompletedCertCount(_0x1f8ff8) {
    const _0x338a57 = _0x1d09;
    return [
        _0x338a57(0x1bf),
        _0x338a57(0x1c0),
        'isFrontEndLibsCert',
        _0x338a57(0x1c1),
        _0x338a57(0x1c2),
        _0x338a57(0x1c3),
        'isRespWebDesignCert',
        _0x338a57(0x1c4),
        _0x338a57(0x1c5),
        _0x338a57(0x1c6)
    ]['reduce']((_0x13e0b4, _0x408d30) => _0x1f8ff8[_0x408d30] ? _0x13e0b4 + 0x1 : _0x13e0b4, 0x0);
}
function _0x1d09(_0x5498f5, _0x18a36f) {
    return _0x1d09 = function (_0x173005, _0x1d0922) {
        _0x173005 = _0x173005 - 0x1b5;
        let _0x5a0830 = _0x1730[_0x173005];
        return _0x5a0830;
    }, _0x1d09(_0x5498f5, _0x18a36f);
}
function getLegacyCertCount(_0x45a386) {
    const _0x3dcea2 = _0x1d09;
    return [
        _0x3dcea2(0x1c7),
        _0x3dcea2(0x1c8),
        _0x3dcea2(0x1c9),
        _0x3dcea2(0x1ca)
    ][_0x3dcea2(0x1cb)]((_0x17627c, _0x5a1a34) => _0x45a386[_0x5a1a34] ? _0x17627c + 0x1 : _0x17627c, 0x0);
}
export default function populateUser(_0x2921b8, _0x2598a2) {
    return new Promise((_0x158fb6, _0x5379b6) => {
        const _0x451ab2 = _0x1d09;
        let _0x163464 = { ..._0x2598a2 };
        _0x2921b8[_0x451ab2(0x1cc)](_0x451ab2(0x1cd))[_0x451ab2(0x1ce)]([
            { '$match': { '_id': _0x2598a2['id'] } },
            { '$project': { 'points': { '$size': '$progressTimestamps' } } }
        ])['get'](function (_0x634538, [{
                points: points = 0x1
            } = {}]) {
            const _0x5fd8eb = _0x451ab2;
            if (_0x634538)
                return _0x5379b6(_0x634538);
            _0x2598a2[_0x5fd8eb(0x1cf)] = points;
            let _0x1ec8c4 = 0x0, _0xe51a21 = 0x0;
            return _0x5fd8eb(0x1d0) in _0x2598a2 && (_0x1ec8c4 = _0x2598a2['completedChallenges'][_0x5fd8eb(0x1d1)], _0x2598a2['completedChallenges'][_0x5fd8eb(0x1d2)](_0x13237e => {
                const _0x36e45a = _0x5fd8eb;
                _0x36e45a(0x1d3) in _0x13237e && (_0x13237e['challengeType'] === 0x3 || _0x13237e[_0x36e45a(0x1d3)] === 0x4) && _0xe51a21++;
            })), _0x163464[_0x5fd8eb(0x1d4)] = _0x1ec8c4, _0x163464[_0x5fd8eb(0x1d5)] = _0xe51a21, _0x163464[_0x5fd8eb(0x1d6)] = getCompletedCertCount(_0x2598a2), _0x163464[_0x5fd8eb(0x1d7)] = getLegacyCertCount(_0x2598a2), _0x163464['completedChallenges'] = [], _0x158fb6(_0x163464);
        });
    });
}
