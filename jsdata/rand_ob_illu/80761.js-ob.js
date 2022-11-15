const _0x2e7a = ['MHSSm', 'Apufr', 'MdFUK', 'rMDUC', 'get', 'Content-Type', 'expect', '12419VTsYgW', '73hNzQgh', '13892mTXBMi', '61BeWLMq', '4Vgxrik', '343488HbFLQg', '1008579kpxVme', '1wAbNeW', '386897uFycec', '1142791plAQnT', '3415678PZNPNV', 'supertest', 'ejs', 'text/html; charset=utf-8', 'should respond with html', 'GET /'];
const _0x244207 = _0x1c0e;

(function (_0x28c9e6, _0x5d52a3) {
    const _0x41e176 = _0x1c0e;

    while (true) {
        try {
            const _0x58e143 = parseInt(_0x41e176(0x82)) * -parseInt(_0x41e176(0x83)) + parseInt(_0x41e176(0x84)) * -parseInt(_0x41e176(0x85)) + -parseInt(_0x41e176(0x86)) * parseInt(_0x41e176(0x87)) + -parseInt(_0x41e176(0x88)) * parseInt(_0x41e176(0x89)) + parseInt(_0x41e176(0x8a)) + parseInt(_0x41e176(0x8b)) + parseInt(_0x41e176(0x8c));

            if (_0x58e143 === _0x5d52a3) break;else _0x28c9e6.push(_0x28c9e6.shift());
        } catch (_0x99c750) {
            _0x28c9e6.push(_0x28c9e6.shift());
        }
    }
})(_0x2e7a, 808836);

const request = require(_0x244207(0x8d));

const app = require('../../examples/ejs');

function _0x1c0e(_0x29cb20, _0x34dc3a) {
    return _0x1c0e = function (_0x11eaae, _0x1f224e) {
        _0x11eaae = _0x11eaae - 130;
        const _0x3a13f2 = _0x2e7a[_0x11eaae];

        return _0x3a13f2;
    }, _0x1c0e(_0x29cb20, _0x34dc3a);
}
describe(_0x244207(0x8e), function () {
    const _0x5cf2b7 = _0x244207;
    const _0x5cb114 = {
        'rMDUC': function (_0x4f1192, _0x245d70) {
            return _0x4f1192(_0x245d70);
        },
        'vpqfX': _0x5cf2b7(0x8f),
        'MdFUK': _0x5cf2b7(0x90),
        'MHSSm': function (_0x42142e, _0x497542, _0x12388c) {
            return _0x42142e(_0x497542, _0x12388c);
        },
        'Apufr': _0x5cf2b7(0x91)
    };

    _0x5cb114[_0x5cf2b7(0x92)](describe, _0x5cb114[_0x5cf2b7(0x93)], function () {
        const _0x305ab6 = _0x5cf2b7;

        it(_0x5cb114[_0x305ab6(0x94)], function (_0x1d8835) {
            const _0x39f72e = _0x305ab6;

            _0x5cb114[_0x39f72e(0x95)](request, app)[_0x39f72e(0x96)]('/').expect(_0x39f72e(0x97), _0x5cb114.vpqfX)[_0x39f72e(0x98)](/<li>tobi &lt;tobi@learnboost\.com&gt;<\/li>/)[_0x39f72e(0x98)](/<li>loki &lt;loki@learnboost\.com&gt;<\/li>/).expect(/<li>jane &lt;jane@learnboost\.com&gt;<\/li>/)[_0x39f72e(0x98)](200, _0x1d8835);
        });
    });
});
