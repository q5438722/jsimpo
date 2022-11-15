define(function (_0x4fd98e, _0x5bb0b5, _0x6912dc) {
    'use strict';
    var _0x2f37d6 = _0x2690;
    var _0x106ed2, _0x4fd1bc, _0x5324ad, _0x293c68, _0xa1cfaa, _0x3543a7 = _0x4fd98e(_0x2f37d6(357));
    describe(_0x2f37d6(358), function () {
        var _0x37710e = _0x2f37d6;
        this['category'] = _0x37710e(359);
        var _0x333ce4 = _0x3543a7[_0x37710e(360)](_0x37710e(361)), _0x1b582e, _0x47ae8c = 0;
        function _0xc809f7(_0x5cd05a) {
            var _0x45fd6b = _0x37710e, _0x3b37b1, _0x3321ba = ![], _0x57b547 = ![];
            runs(function () {
                var _0xf3a893 = _0x2690;
                _0x293c68['openAndSelectDocument'](_0x5cd05a, _0x293c68[_0xf3a893(362)])[_0xf3a893(363)](function () {
                    _0x3321ba = !![];
                })[_0xf3a893(364)](function () {
                    _0x57b547 = !![];
                });
            }), waitsFor(function () {
                return _0x3321ba && !_0x57b547;
            }, _0x45fd6b(365), 1000), runs(function () {
                var _0xf93dac = _0x45fd6b;
                _0x3b37b1 = _0x5324ad[_0xf93dac(366)](), _0x3b37b1[_0xf93dac(367)]('dirty document');
            });
        }
        function _0x3e415f(_0x4fdaf0, _0x5df1be) {
            var _0x2b2271 = _0x37710e;
            _0x3543a7[_0x2b2271(368)](_0x4fdaf0, function (_0x45aecb) {
                var _0x3285c2 = _0x2b2271;
                _0x1b582e = _0x45aecb, _0x106ed2 = _0x1b582e[_0x3285c2(369)][_0x3285c2(370)][_0x3285c2(371)], _0x4fd1bc = _0x1b582e[_0x3285c2(369)][_0x3285c2(370)]['Commands'], _0x5324ad = _0x1b582e[_0x3285c2(369)]['test'][_0x3285c2(372)], _0x293c68 = _0x1b582e[_0x3285c2(369)][_0x3285c2(370)][_0x3285c2(373)], _0xa1cfaa = _0x1b582e[_0x3285c2(369)][_0x3285c2(370)][_0x3285c2(374)], _0x5df1be && _0x3543a7['loadProjectInTestWindow'](_0x333ce4);
            }), runs(function () {
                _0xa1cfaa['on']('workingSetAdd', function (_0x41c1e0, _0xa84e59) {
                    _0x47ae8c++;
                });
            });
        }
        function _0x49e4c5() {
            var _0x5d47a8 = _0x37710e;
            _0x1b582e = null, _0x106ed2 = null, _0x4fd1bc = null, _0x5324ad = null, _0x293c68 = null, _0xa1cfaa = null, _0x3543a7[_0x5d47a8(375)]();
        }
        beforeFirst(function () {
            var _0x20fd1b = _0x37710e;
            _0x3e415f(this, !![]), _0x47ae8c = 0, _0xc809f7(_0x333ce4 + _0x20fd1b(376)), _0xc809f7(_0x333ce4 + '/file_zero.css'), _0xc809f7(_0x333ce4 + _0x20fd1b(377)), waitsFor(function () {
                return _0x47ae8c === 3;
            }, _0x20fd1b(378), 1000);
        }), afterLast(function () {
            var _0x48d082 = _0x37710e;
            _0x1b582e[_0x48d082(379)](), _0x49e4c5();
        }), it(_0x37710e(380), function () {
            var _0x4df610 = _0x37710e;
            _0x106ed2[_0x4df610(381)](_0x4fd1bc['CMD_WORKINGSET_SORT_BY_NAME']);
            var _0x58b6d2 = _0x1b582e['$'](_0x4df610(382))[_0x4df610(383)]();
            expect(_0x58b6d2[_0x4df610(384)])[_0x4df610(385)](_0x47ae8c), expect(_0x58b6d2['find']('a')[_0x4df610(386)](0)['text'] === _0x4df610(387))['toBeTruthy'](), expect(_0x58b6d2[_0x4df610(388)]('a')['get'](1)[_0x4df610(389)] === _0x4df610(390))[_0x4df610(391)](), expect(_0x58b6d2['find']('a')[_0x4df610(386)](2)[_0x4df610(389)] === 'file_zero.css')[_0x4df610(391)](), expect(_0x58b6d2[_0x4df610(388)](_0x4df610(392))[_0x4df610(384)])[_0x4df610(385)](_0x47ae8c);
        }), it('should sort list as added', function () {
            var _0x3a807c = _0x37710e;
            _0x106ed2[_0x3a807c(381)](_0x4fd1bc[_0x3a807c(393)]);
            var _0x455ed0 = _0x1b582e['$'](_0x3a807c(382))[_0x3a807c(383)]();
            expect(_0x455ed0[_0x3a807c(384)])[_0x3a807c(385)](_0x47ae8c), expect(_0x455ed0[_0x3a807c(388)]('a')[_0x3a807c(386)](0)[_0x3a807c(389)] === _0x3a807c(390))[_0x3a807c(391)](), expect(_0x455ed0[_0x3a807c(388)]('a')[_0x3a807c(386)](1)[_0x3a807c(389)] === _0x3a807c(394))[_0x3a807c(391)](), expect(_0x455ed0[_0x3a807c(388)]('a')['get'](2)[_0x3a807c(389)] === 'file_four.html')[_0x3a807c(391)](), expect(_0x455ed0['find'](_0x3a807c(392))[_0x3a807c(384)])[_0x3a807c(385)](_0x47ae8c);
        }), it(_0x37710e(395), function () {
            var _0x16518f = _0x37710e;
            _0x106ed2[_0x16518f(381)](_0x4fd1bc[_0x16518f(396)]);
            var _0x382ce4 = _0x1b582e['$'](_0x16518f(382))[_0x16518f(383)]();
            expect(_0x382ce4[_0x16518f(384)])[_0x16518f(385)](_0x47ae8c), expect(_0x382ce4[_0x16518f(388)]('a')[_0x16518f(386)](0)[_0x16518f(389)] === _0x16518f(394))[_0x16518f(391)](), expect(_0x382ce4[_0x16518f(388)]('a')['get'](1)[_0x16518f(389)] === _0x16518f(387))[_0x16518f(391)](), expect(_0x382ce4['find']('a')[_0x16518f(386)](2)['text'] === _0x16518f(390))['toBeTruthy'](), expect(_0x382ce4[_0x16518f(388)](_0x16518f(392))[_0x16518f(384)])['toBe'](_0x47ae8c);
        }), it(_0x37710e(397), function () {
            var _0x16cab9 = _0x37710e;
            _0x106ed2[_0x16cab9(381)](_0x4fd1bc[_0x16cab9(398)]), _0xc809f7(_0x333ce4 + _0x16cab9(399)), waitsFor(function () {
                return _0x47ae8c === 4;
            }, _0x16cab9(400), 5000), runs(function () {
                var _0x2c7b4a = _0x16cab9, _0xb82310 = _0x1b582e['$'](_0x2c7b4a(382))['children']();
                expect(_0xb82310[_0x2c7b4a(384)])[_0x2c7b4a(385)](_0x47ae8c), expect(_0xb82310[_0x2c7b4a(388)]('a')[_0x2c7b4a(386)](0)[_0x2c7b4a(389)] === _0x2c7b4a(394))[_0x2c7b4a(391)](), expect(_0xb82310['find']('a')[_0x2c7b4a(386)](1)[_0x2c7b4a(389)] === _0x2c7b4a(387))[_0x2c7b4a(391)](), expect(_0xb82310[_0x2c7b4a(388)]('a')[_0x2c7b4a(386)](2)[_0x2c7b4a(389)] === _0x2c7b4a(401))[_0x2c7b4a(391)](), expect(_0xb82310[_0x2c7b4a(388)]('a')[_0x2c7b4a(386)](3)[_0x2c7b4a(389)] === _0x2c7b4a(390))[_0x2c7b4a(391)](), expect(_0xb82310[_0x2c7b4a(388)](_0x2c7b4a(392))['length'])['toBe'](_0x47ae8c);
            });
        }), it(_0x37710e(402), function () {
            var _0x1d035f = _0x37710e;
            _0x106ed2[_0x1d035f(381)](_0x4fd1bc[_0x1d035f(398)]), _0xc809f7(_0x333ce4 + _0x1d035f(403)), waitsFor(function () {
                return _0x47ae8c === 5;
            }, 'workingSetListItemCount to equal 5', 5000), runs(function () {
                var _0x1032d9 = _0x1d035f, _0x2b00c1 = _0x1b582e['$'](_0x1032d9(382))['children']();
                expect(_0x2b00c1[_0x1032d9(384)])[_0x1032d9(385)](_0x47ae8c), expect(_0x2b00c1[_0x1032d9(388)]('a')[_0x1032d9(386)](0)[_0x1032d9(389)] === _0x1032d9(394))[_0x1032d9(391)](), expect(_0x2b00c1[_0x1032d9(388)]('a')['get'](1)['text'] === _0x1032d9(387))[_0x1032d9(391)](), expect(_0x2b00c1[_0x1032d9(388)]('a')[_0x1032d9(386)](2)[_0x1032d9(389)] === _0x1032d9(401))['toBeTruthy'](), expect(_0x2b00c1[_0x1032d9(388)]('a')[_0x1032d9(386)](3)[_0x1032d9(389)] === _0x1032d9(390))[_0x1032d9(391)](), expect(_0x2b00c1[_0x1032d9(388)]('a')[_0x1032d9(386)](4)[_0x1032d9(389)] === _0x1032d9(404))[_0x1032d9(391)](), expect(_0x2b00c1['find'](_0x1032d9(392))[_0x1032d9(384)])[_0x1032d9(385)](_0x47ae8c);
            });
        });
    });
});