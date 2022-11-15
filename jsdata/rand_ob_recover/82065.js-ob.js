const logging = require(_0x2a4c98(311));
function _0x2883(_0x52cfe6, _0x22fae0) {
    return _0x2883 = function (_0x3b2fce, _0x129224) {
        _0x3b2fce = _0x3b2fce - (-9587 + 1472 + 19 * 443);
        let _0x5d2bfc = _0xf991[_0x3b2fce];
        return _0x5d2bfc;
    }, _0x2883(_0x52cfe6, _0x22fae0);
}
module[_0x2a4c98(312)] = {
    'config': { 'transaction': !![] },
    async 'up'({transacting: _0x5a5dd3}) {
        const _0x1be95e = _0x2a4c98, _0x55dd2e = {
                'tnPau': _0x1be95e(313),
                'nPKex': _0x1be95e(314),
                'mabBe': _0x1be95e(315),
                'othTq': _0x1be95e(316),
                'ICTrN': _0x1be95e(317),
                'WOkLu': function (_0x2fd387, _0x43b5e4) {
                    return _0x2fd387(_0x43b5e4);
                },
                'unxPj': _0x1be95e(318)
            }, _0xf3faed = {
                'provider': _0x1be95e(319),
                'apiKey': null,
                'domain': null,
                'baseUrl': null
            }, _0x5697f2 = await _0x5a5dd3(_0x55dd2e[_0x1be95e(320)])['where']({ 'key': _0x55dd2e[_0x1be95e(321)] })['select']()[_0x1be95e(322)]();
        let _0x3edb6f;
        try {
            _0x3edb6f = JSON[_0x1be95e(323)](_0x5697f2[_0x1be95e(324)]) || _0xf3faed;
        } catch (_0x543272) {
            logging[_0x1be95e(325)](_0x1be95e(326)), _0x3edb6f = _0xf3faed;
        }
        const _0x670b8a = [
            {
                'key': _0x55dd2e['mabBe'],
                'value': _0x3edb6f[_0x1be95e(327)]
            },
            {
                'key': _0x55dd2e[_0x1be95e(328)],
                'value': _0x3edb6f[_0x1be95e(329)]
            },
            {
                'key': _0x55dd2e[_0x1be95e(330)],
                'value': _0x3edb6f[_0x1be95e(331)]
            }
        ];
        for (const _0x553e36 of _0x670b8a) {
            logging[_0x1be95e(332)](_0x1be95e(333) + _0x553e36[_0x1be95e(334)] + _0x1be95e(335)), await _0x55dd2e[_0x1be95e(336)](_0x5a5dd3, _0x55dd2e[_0x1be95e(320)])[_0x1be95e(337)]({ 'key': _0x553e36[_0x1be95e(334)] })[_0x1be95e(338)]({
                'group': _0x55dd2e['unxPj'],
                'type': _0x1be95e(339),
                'flags': null,
                'value': _0x553e36['value']
            });
        }
    },
    async 'down'({transacting: _0x245f40}) {
        const _0x4ba04b = _0x2a4c98, _0x5aa55f = {
                'ChvsM': _0x4ba04b(315),
                'nqLbC': _0x4ba04b(316),
                'Bdmvt': _0x4ba04b(317),
                'vRJQu': function (_0x47db74, _0x31f594) {
                    return _0x47db74(_0x31f594);
                },
                'ymMEP': _0x4ba04b(313),
                'keVWI': _0x4ba04b(334)
            }, _0x3c4043 = [
                _0x5aa55f[_0x4ba04b(340)],
                _0x5aa55f[_0x4ba04b(341)],
                _0x5aa55f[_0x4ba04b(342)]
            ];
        logging[_0x4ba04b(332)](_0x4ba04b(343) + _0x3c4043[_0x4ba04b(344)](', ')), await _0x5aa55f[_0x4ba04b(345)](_0x245f40, _0x5aa55f[_0x4ba04b(346)])[_0x4ba04b(347)](_0x5aa55f[_0x4ba04b(348)], _0x3c4043)['del']();
    }
};