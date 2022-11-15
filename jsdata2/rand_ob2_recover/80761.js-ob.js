var request = require(_0x425b37(442)), app = require(_0x425b37(443));
describe(_0x425b37(444), function () {
    var _0xf098bc = _0x425b37;
    describe(_0xf098bc(445), function () {
        it('should respond with html', function (_0x115036) {
            var _0x4e22a9 = _0x1d95;
            request(app)[_0x4e22a9(446)]('/')[_0x4e22a9(447)](_0x4e22a9(448), 'text/html; charset=utf-8')[_0x4e22a9(447)](/<li>tobi &lt;tobi@learnboost\.com&gt;<\/li>/)[_0x4e22a9(447)](/<li>loki &lt;loki@learnboost\.com&gt;<\/li>/)[_0x4e22a9(447)](/<li>jane &lt;jane@learnboost\.com&gt;<\/li>/)[_0x4e22a9(447)](200, _0x115036);
        });
    });
});