define(function (_0x563060, _0x173910, _0x47589b) {
    'use strict';
    var _0x3ae6d3 = _0x3551;
    var _0x1b858d, _0x44faff, _0x56ca3a, _0x315074, _0x450854, _0x5a3037 = _0x563060('spec/SpecRunnerUtils');
    describe(_0x3ae6d3(158), function () {
        var _0x3ab62a = _0x3ae6d3;
        this[_0x3ab62a(159)] = _0x3ab62a(160);
        var _0x5ccd00 = _0x5a3037['getTestPath']('/spec/WorkingSetView-test-files'), _0x2a086e, _0x3efd4b = 0;
        function _0x18b287(_0x48b79e) {
            var _0x2d08a8, _0x23cb9a = ![], _0x2e5c3c = ![];
            runs(function () {
                var _0x35d818 = _0x3551;
                _0x315074[_0x35d818(161)](_0x48b79e, _0x315074[_0x35d818(162)])[_0x35d818(163)](function () {
                    _0x23cb9a = !![];
                })[_0x35d818(164)](function () {
                    _0x2e5c3c = !![];
                });
            }), waitsFor(function () {
                return _0x23cb9a && !_0x2e5c3c;
            }, 'FILE_OPEN on file timeout', 1000), runs(function () {
                var _0x3b48ba = _0x3551;
                _0x2d08a8 = _0x56ca3a[_0x3b48ba(165)](), _0x2d08a8[_0x3b48ba(166)](_0x3b48ba(167));
            });
        }
        function _0x3d8e88(_0x367c09, _0x5a74dc) {
            var _0x519e17 = _0x3ab62a;
            _0x5a3037[_0x519e17(168)](_0x367c09, function (_0x2c0981) {
                var _0x1b8ff5 = _0x519e17;
                _0x2a086e = _0x2c0981, _0x1b858d = _0x2a086e['brackets'][_0x1b8ff5(169)][_0x1b8ff5(170)], _0x44faff = _0x2a086e['brackets'][_0x1b8ff5(169)][_0x1b8ff5(171)], _0x56ca3a = _0x2a086e[_0x1b8ff5(172)][_0x1b8ff5(169)]['DocumentManager'], _0x315074 = _0x2a086e['brackets'][_0x1b8ff5(169)][_0x1b8ff5(173)], _0x450854 = _0x2a086e[_0x1b8ff5(172)]['test'][_0x1b8ff5(174)], _0x5a74dc && _0x5a3037[_0x1b8ff5(175)](_0x5ccd00);
            }), runs(function () {
                var _0x4c06a4 = _0x519e17;
                _0x450854['on'](_0x4c06a4(176), function (_0x57deab, _0x35d982) {
                    _0x3efd4b++;
                });
            });
        }
        function _0x5c31cc() {
            var _0x3f5083 = _0x3ab62a;
            _0x2a086e = null, _0x1b858d = null, _0x44faff = null, _0x56ca3a = null, _0x315074 = null, _0x450854 = null, _0x5a3037[_0x3f5083(177)]();
        }
        beforeFirst(function () {
            var _0x266430 = _0x3ab62a;
            _0x3d8e88(this, !![]), _0x3efd4b = 0, _0x18b287(_0x5ccd00 + '/file_four.html'), _0x18b287(_0x5ccd00 + _0x266430(178)), _0x18b287(_0x5ccd00 + '/file_two.js'), waitsFor(function () {
                return _0x3efd4b === 3;
            }, _0x266430(179), 1000);
        }), afterLast(function () {
            var _0x10be70 = _0x3ab62a;
            _0x2a086e[_0x10be70(180)](), _0x5c31cc();
        }), it('should sort list by name', function () {
            var _0x6ec304 = _0x3ab62a;
            _0x1b858d[_0x6ec304(181)](_0x44faff[_0x6ec304(182)]);
            var _0x1fe1bc = _0x2a086e['$'](_0x6ec304(183))[_0x6ec304(184)]();
            expect(_0x1fe1bc[_0x6ec304(185)])['toBe'](_0x3efd4b), expect(_0x1fe1bc[_0x6ec304(186)]('a')[_0x6ec304(187)](0)[_0x6ec304(188)] === 'file_four.html')[_0x6ec304(189)](), expect(_0x1fe1bc[_0x6ec304(186)]('a')[_0x6ec304(187)](1)['text'] === 'file_two.js')[_0x6ec304(189)](), expect(_0x1fe1bc[_0x6ec304(186)]('a')[_0x6ec304(187)](2)[_0x6ec304(188)] === _0x6ec304(190))['toBeTruthy'](), expect(_0x1fe1bc[_0x6ec304(186)](_0x6ec304(191))[_0x6ec304(185)])[_0x6ec304(192)](_0x3efd4b);
        }), it('should sort list as added', function () {
            var _0x283f0a = _0x3ab62a;
            _0x1b858d['execute'](_0x44faff[_0x283f0a(193)]);
            var _0x2f3523 = _0x2a086e['$'](_0x283f0a(183))[_0x283f0a(184)]();
            expect(_0x2f3523[_0x283f0a(185)])[_0x283f0a(192)](_0x3efd4b), expect(_0x2f3523[_0x283f0a(186)]('a')[_0x283f0a(187)](0)[_0x283f0a(188)] === _0x283f0a(194))[_0x283f0a(189)](), expect(_0x2f3523[_0x283f0a(186)]('a')[_0x283f0a(187)](1)['text'] === 'file_zero.css')[_0x283f0a(189)](), expect(_0x2f3523[_0x283f0a(186)]('a')[_0x283f0a(187)](2)[_0x283f0a(188)] === _0x283f0a(195))[_0x283f0a(189)](), expect(_0x2f3523[_0x283f0a(186)](_0x283f0a(191))[_0x283f0a(185)])['toBe'](_0x3efd4b);
        }), it('should sort list by type', function () {
            var _0x16d631 = _0x3ab62a;
            _0x1b858d['execute'](_0x44faff[_0x16d631(196)]);
            var _0x4c24b1 = _0x2a086e['$'](_0x16d631(183))['children']();
            expect(_0x4c24b1[_0x16d631(185)])[_0x16d631(192)](_0x3efd4b), expect(_0x4c24b1['find']('a')[_0x16d631(187)](0)[_0x16d631(188)] === 'file_zero.css')[_0x16d631(189)](), expect(_0x4c24b1[_0x16d631(186)]('a')[_0x16d631(187)](1)[_0x16d631(188)] === _0x16d631(195))[_0x16d631(189)](), expect(_0x4c24b1[_0x16d631(186)]('a')[_0x16d631(187)](2)[_0x16d631(188)] === _0x16d631(194))[_0x16d631(189)](), expect(_0x4c24b1['find']('.file-status-icon')[_0x16d631(185)])[_0x16d631(192)](_0x3efd4b);
        }), it(_0x3ab62a(197), function () {
            var _0x5c616e = _0x3ab62a;
            _0x1b858d[_0x5c616e(181)](_0x44faff[_0x5c616e(198)]), _0x18b287(_0x5ccd00 + _0x5c616e(199)), waitsFor(function () {
                return _0x3efd4b === 4;
            }, _0x5c616e(200), 5000), runs(function () {
                var _0x152ddb = _0x5c616e, _0x486eba = _0x2a086e['$']('.open-files-container > ul')[_0x152ddb(184)]();
                expect(_0x486eba['length'])[_0x152ddb(192)](_0x3efd4b), expect(_0x486eba[_0x152ddb(186)]('a')[_0x152ddb(187)](0)[_0x152ddb(188)] === _0x152ddb(190))[_0x152ddb(189)](), expect(_0x486eba[_0x152ddb(186)]('a')[_0x152ddb(187)](1)[_0x152ddb(188)] === _0x152ddb(195))['toBeTruthy'](), expect(_0x486eba[_0x152ddb(186)]('a')[_0x152ddb(187)](2)[_0x152ddb(188)] === _0x152ddb(201))[_0x152ddb(189)](), expect(_0x486eba['find']('a')[_0x152ddb(187)](3)[_0x152ddb(188)] === 'file_two.js')[_0x152ddb(189)](), expect(_0x486eba[_0x152ddb(186)](_0x152ddb(191))[_0x152ddb(185)])['toBe'](_0x3efd4b);
            });
        }), it(_0x3ab62a(202), function () {
            var _0x56f34e = _0x3ab62a;
            _0x1b858d[_0x56f34e(181)](_0x44faff['CMD_WORKING_SORT_TOGGLE_AUTO']), _0x18b287(_0x5ccd00 + '/file_three.js'), waitsFor(function () {
                return _0x3efd4b === 5;
            }, _0x56f34e(203), 5000), runs(function () {
                var _0x1b7c98 = _0x56f34e, _0x841e37 = _0x2a086e['$'](_0x1b7c98(183))[_0x1b7c98(184)]();
                expect(_0x841e37[_0x1b7c98(185)])[_0x1b7c98(192)](_0x3efd4b), expect(_0x841e37[_0x1b7c98(186)]('a')[_0x1b7c98(187)](0)[_0x1b7c98(188)] === _0x1b7c98(190))[_0x1b7c98(189)](), expect(_0x841e37[_0x1b7c98(186)]('a')[_0x1b7c98(187)](1)[_0x1b7c98(188)] === _0x1b7c98(195))[_0x1b7c98(189)](), expect(_0x841e37[_0x1b7c98(186)]('a')[_0x1b7c98(187)](2)[_0x1b7c98(188)] === _0x1b7c98(201))[_0x1b7c98(189)](), expect(_0x841e37[_0x1b7c98(186)]('a')['get'](3)['text'] === _0x1b7c98(194))[_0x1b7c98(189)](), expect(_0x841e37[_0x1b7c98(186)]('a')[_0x1b7c98(187)](4)[_0x1b7c98(188)] === _0x1b7c98(204))[_0x1b7c98(189)](), expect(_0x841e37[_0x1b7c98(186)](_0x1b7c98(191))['length'])[_0x1b7c98(192)](_0x3efd4b);
            });
        });
    });
});