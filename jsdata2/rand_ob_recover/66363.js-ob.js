var __importDefault = this && this[_0x4227d2(388)] || function (_0x109b73) {
    return _0x109b73 && _0x109b73['__esModule'] ? _0x109b73 : { 'default': _0x109b73 };
};
Object['defineProperty'](exports, _0x4227d2(389), { 'value': !![] });
const debug_1 = __importDefault(require(_0x4227d2(390))), debug = debug_1['default'](_0x4227d2(391));
function parseProxyResponse(_0x434ab1) {
    const _0x370191 = _0x4227d2, _0x594dfa = {
            'TwKsx': 'error',
            'zlYtN': 'close',
            'OxEim': _0x370191(392),
            'NDkhZ': function (_0x347510, _0x4605ed) {
                return _0x347510(_0x4605ed);
            },
            'yRbRR': _0x370191(393),
            'RBLyj': function (_0x238918) {
                return _0x238918();
            },
            'fjwqm': function (_0x21d9d6, _0x2cf440, _0x2f8102) {
                return _0x21d9d6(_0x2cf440, _0x2f8102);
            },
            'nsTyF': _0x370191(394),
            'sRkjN': function (_0x3189a1, _0x35765f) {
                return _0x3189a1(_0x35765f);
            },
            'RxuIO': _0x370191(395),
            'YQkSm': function (_0x1e2f7b, _0x2a4304, _0x5d3496) {
                return _0x1e2f7b(_0x2a4304, _0x5d3496);
            },
            'ApdRc': _0x370191(396),
            'SwNYk': function (_0x1dbc55) {
                return _0x1dbc55();
            }
        };
    return new Promise((_0x52dc9c, _0x5cfaeb) => {
        const _0x1512c3 = _0x370191, _0x1db721 = {
                'DUEDE': function (_0x244ec9, _0x5d956d) {
                    return _0x244ec9(_0x5d956d);
                },
                'PmWmJ': _0x1512c3(392)
            };
        let _0x589e14 = -2599 + 6435 + -3836;
        const _0x16c391 = [];
        function _0x4e5f04() {
            const _0x44a679 = _0x1512c3, _0x16a0a1 = _0x434ab1[_0x44a679(397)]();
            if (_0x16a0a1)
                _0x1db721[_0x44a679(398)](_0x5ee8a0, _0x16a0a1);
            else
                _0x434ab1[_0x44a679(399)](_0x1db721[_0x44a679(400)], _0x4e5f04);
        }
        function _0x3b603a() {
            const _0x42d6e7 = _0x1512c3;
            _0x434ab1['removeListener'](_0x42d6e7(396), _0x111615), _0x434ab1[_0x42d6e7(401)](_0x594dfa['TwKsx'], _0x1bbb94), _0x434ab1['removeListener'](_0x594dfa[_0x42d6e7(402)], _0x410ba6), _0x434ab1[_0x42d6e7(401)](_0x594dfa[_0x42d6e7(403)], _0x4e5f04);
        }
        function _0x410ba6(_0x47de1f) {
            const _0x403508 = _0x1512c3;
            debug(_0x403508(404), _0x47de1f);
        }
        function _0x111615() {
            const _0x1498a2 = _0x1512c3;
            _0x594dfa[_0x1498a2(405)](debug, _0x594dfa[_0x1498a2(406)]);
        }
        function _0x1bbb94(_0x47b22a) {
            const _0x3fbf3e = _0x1512c3;
            _0x594dfa[_0x3fbf3e(407)](_0x3b603a), _0x594dfa[_0x3fbf3e(408)](debug, _0x3fbf3e(409), _0x47b22a), _0x594dfa['NDkhZ'](_0x5cfaeb, _0x47b22a);
        }
        function _0x5ee8a0(_0x2b5a61) {
            const _0x19dd4c = _0x1512c3;
            _0x16c391[_0x19dd4c(410)](_0x2b5a61), _0x589e14 += _0x2b5a61['length'];
            const _0x20ef05 = Buffer[_0x19dd4c(411)](_0x16c391, _0x589e14), _0x38d732 = _0x20ef05['indexOf'](_0x594dfa['nsTyF']);
            if (_0x38d732 === -(8112 + 9377 + -17488)) {
                _0x594dfa['sRkjN'](debug, _0x19dd4c(412)), _0x594dfa['RBLyj'](_0x4e5f04);
                return;
            }
            const _0x3c87d3 = _0x20ef05[_0x19dd4c(413)](_0x594dfa[_0x19dd4c(414)], -319 * 19 + 1 * -3967 + 10028 * 1, _0x20ef05[_0x19dd4c(415)]('\r\n')), _0x392693 = +_0x3c87d3[_0x19dd4c(416)](' ')[6762 + -335 * 3 + 4 * -1439];
            _0x594dfa[_0x19dd4c(417)](debug, 'got proxy server response: %o', _0x3c87d3), _0x52dc9c({
                'statusCode': _0x392693,
                'buffered': _0x20ef05
            });
        }
        _0x434ab1['on'](_0x594dfa[_0x1512c3(418)], _0x1bbb94), _0x434ab1['on'](_0x594dfa[_0x1512c3(402)], _0x410ba6), _0x434ab1['on'](_0x594dfa[_0x1512c3(419)], _0x111615), _0x594dfa[_0x1512c3(420)](_0x4e5f04);
    });
}
exports[_0x4227d2(421)] = parseProxyResponse;