var _0x5c7b = [
    'WorkingSetSort',
    'category',
    'integration',
    'openAndSelectDocument',
    'PROJECT_MANAGER',
    'done',
    'fail',
    'getCurrentDocument',
    'setText',
    'dirty\x20document',
    'createTestWindowAndRun',
    'test',
    'CommandManager',
    'Commands',
    'brackets',
    'FileViewController',
    'MainViewManager',
    'loadProjectInTestWindow',
    'workingSetAdd',
    'closeTestWindow',
    '/file_zero.css',
    'workingSetListItemCount\x20to\x20equal\x203',
    'closeAllFiles',
    'execute',
    'CMD_WORKINGSET_SORT_BY_NAME',
    '.open-files-container\x20>\x20ul',
    'children',
    'length',
    'find',
    'get',
    'text',
    'toBeTruthy',
    'file_zero.css',
    '.file-status-icon',
    'toBe',
    'CMD_WORKINGSET_SORT_BY_ADDED',
    'file_two.js',
    'file_four.html',
    'CMD_WORKINGSET_SORT_BY_TYPE',
    'should\x20sort\x20list\x20by\x20type\x20automatically',
    'CMD_WORKING_SORT_TOGGLE_AUTO',
    '/file_one.js',
    'workingSetListItemCount\x20to\x20equal\x204',
    'file_one.js',
    'should\x20not\x20sort\x20list\x20by\x20type\x20automatically',
    'workingSetListItemCount\x20to\x20equal\x205',
    'file_three.js',
    '1695112kHWIhw',
    '506414ZsbZpu',
    '10yhSYUm',
    '41446mzhLWM',
    '12904vYyjLn',
    '14aqNYsI',
    '1483274fxzilc',
    '485346VInowG',
    '4289666QQpOyx'
];
function _0x3551(_0x5f17d0, _0x497cf5) {
    return _0x3551 = function (_0x5c7b51, _0x35516e) {
        _0x5c7b51 = _0x5c7b51 - 0x95;
        var _0x396dc2 = _0x5c7b[_0x5c7b51];
        return _0x396dc2;
    }, _0x3551(_0x5f17d0, _0x497cf5);
}
(function (_0x3a7214, _0x5b352d) {
    var _0x5ec7d0 = _0x3551;
    while (!![]) {
        try {
            var _0x25e6fe = -parseInt(_0x5ec7d0(0x95)) + parseInt(_0x5ec7d0(0x96)) + parseInt(_0x5ec7d0(0x97)) * -parseInt(_0x5ec7d0(0x98)) + parseInt(_0x5ec7d0(0x99)) * parseInt(_0x5ec7d0(0x9a)) + -parseInt(_0x5ec7d0(0x9b)) + -parseInt(_0x5ec7d0(0x9c)) + parseInt(_0x5ec7d0(0x9d));
            if (_0x25e6fe === _0x5b352d)
                break;
            else
                _0x3a7214['push'](_0x3a7214['shift']());
        } catch (_0x376e09) {
            _0x3a7214['push'](_0x3a7214['shift']());
        }
    }
}(_0x5c7b, 0xdb5f0), define(function (_0x563060, _0x173910, _0x47589b) {
    'use strict';
    var _0x3ae6d3 = _0x3551;
    var _0x1b858d, _0x44faff, _0x56ca3a, _0x315074, _0x450854, _0x5a3037 = _0x563060('spec/SpecRunnerUtils');
    describe(_0x3ae6d3(0x9e), function () {
        var _0x3ab62a = _0x3ae6d3;
        this[_0x3ab62a(0x9f)] = _0x3ab62a(0xa0);
        var _0x5ccd00 = _0x5a3037['getTestPath']('/spec/WorkingSetView-test-files'), _0x2a086e, _0x3efd4b = 0x0;
        function _0x18b287(_0x48b79e) {
            var _0x2d08a8, _0x23cb9a = ![], _0x2e5c3c = ![];
            runs(function () {
                var _0x35d818 = _0x3551;
                _0x315074[_0x35d818(0xa1)](_0x48b79e, _0x315074[_0x35d818(0xa2)])[_0x35d818(0xa3)](function () {
                    _0x23cb9a = !![];
                })[_0x35d818(0xa4)](function () {
                    _0x2e5c3c = !![];
                });
            }), waitsFor(function () {
                return _0x23cb9a && !_0x2e5c3c;
            }, 'FILE_OPEN\x20on\x20file\x20timeout', 0x3e8), runs(function () {
                var _0x3b48ba = _0x3551;
                _0x2d08a8 = _0x56ca3a[_0x3b48ba(0xa5)](), _0x2d08a8[_0x3b48ba(0xa6)](_0x3b48ba(0xa7));
            });
        }
        function _0x3d8e88(_0x367c09, _0x5a74dc) {
            var _0x519e17 = _0x3ab62a;
            _0x5a3037[_0x519e17(0xa8)](_0x367c09, function (_0x2c0981) {
                var _0x1b8ff5 = _0x519e17;
                _0x2a086e = _0x2c0981, _0x1b858d = _0x2a086e['brackets'][_0x1b8ff5(0xa9)][_0x1b8ff5(0xaa)], _0x44faff = _0x2a086e['brackets'][_0x1b8ff5(0xa9)][_0x1b8ff5(0xab)], _0x56ca3a = _0x2a086e[_0x1b8ff5(0xac)][_0x1b8ff5(0xa9)]['DocumentManager'], _0x315074 = _0x2a086e['brackets'][_0x1b8ff5(0xa9)][_0x1b8ff5(0xad)], _0x450854 = _0x2a086e[_0x1b8ff5(0xac)]['test'][_0x1b8ff5(0xae)], _0x5a74dc && _0x5a3037[_0x1b8ff5(0xaf)](_0x5ccd00);
            }), runs(function () {
                var _0x4c06a4 = _0x519e17;
                _0x450854['on'](_0x4c06a4(0xb0), function (_0x57deab, _0x35d982) {
                    _0x3efd4b++;
                });
            });
        }
        function _0x5c31cc() {
            var _0x3f5083 = _0x3ab62a;
            _0x2a086e = null, _0x1b858d = null, _0x44faff = null, _0x56ca3a = null, _0x315074 = null, _0x450854 = null, _0x5a3037[_0x3f5083(0xb1)]();
        }
        beforeFirst(function () {
            var _0x266430 = _0x3ab62a;
            _0x3d8e88(this, !![]), _0x3efd4b = 0x0, _0x18b287(_0x5ccd00 + '/file_four.html'), _0x18b287(_0x5ccd00 + _0x266430(0xb2)), _0x18b287(_0x5ccd00 + '/file_two.js'), waitsFor(function () {
                return _0x3efd4b === 0x3;
            }, _0x266430(0xb3), 0x3e8);
        }), afterLast(function () {
            var _0x10be70 = _0x3ab62a;
            _0x2a086e[_0x10be70(0xb4)](), _0x5c31cc();
        }), it('should\x20sort\x20list\x20by\x20name', function () {
            var _0x6ec304 = _0x3ab62a;
            _0x1b858d[_0x6ec304(0xb5)](_0x44faff[_0x6ec304(0xb6)]);
            var _0x1fe1bc = _0x2a086e['$'](_0x6ec304(0xb7))[_0x6ec304(0xb8)]();
            expect(_0x1fe1bc[_0x6ec304(0xb9)])['toBe'](_0x3efd4b), expect(_0x1fe1bc[_0x6ec304(0xba)]('a')[_0x6ec304(0xbb)](0x0)[_0x6ec304(0xbc)] === 'file_four.html')[_0x6ec304(0xbd)](), expect(_0x1fe1bc[_0x6ec304(0xba)]('a')[_0x6ec304(0xbb)](0x1)['text'] === 'file_two.js')[_0x6ec304(0xbd)](), expect(_0x1fe1bc[_0x6ec304(0xba)]('a')[_0x6ec304(0xbb)](0x2)[_0x6ec304(0xbc)] === _0x6ec304(0xbe))['toBeTruthy'](), expect(_0x1fe1bc[_0x6ec304(0xba)](_0x6ec304(0xbf))[_0x6ec304(0xb9)])[_0x6ec304(0xc0)](_0x3efd4b);
        }), it('should\x20sort\x20list\x20as\x20added', function () {
            var _0x283f0a = _0x3ab62a;
            _0x1b858d['execute'](_0x44faff[_0x283f0a(0xc1)]);
            var _0x2f3523 = _0x2a086e['$'](_0x283f0a(0xb7))[_0x283f0a(0xb8)]();
            expect(_0x2f3523[_0x283f0a(0xb9)])[_0x283f0a(0xc0)](_0x3efd4b), expect(_0x2f3523[_0x283f0a(0xba)]('a')[_0x283f0a(0xbb)](0x0)[_0x283f0a(0xbc)] === _0x283f0a(0xc2))[_0x283f0a(0xbd)](), expect(_0x2f3523[_0x283f0a(0xba)]('a')[_0x283f0a(0xbb)](0x1)['text'] === 'file_zero.css')[_0x283f0a(0xbd)](), expect(_0x2f3523[_0x283f0a(0xba)]('a')[_0x283f0a(0xbb)](0x2)[_0x283f0a(0xbc)] === _0x283f0a(0xc3))[_0x283f0a(0xbd)](), expect(_0x2f3523[_0x283f0a(0xba)](_0x283f0a(0xbf))[_0x283f0a(0xb9)])['toBe'](_0x3efd4b);
        }), it('should\x20sort\x20list\x20by\x20type', function () {
            var _0x16d631 = _0x3ab62a;
            _0x1b858d['execute'](_0x44faff[_0x16d631(0xc4)]);
            var _0x4c24b1 = _0x2a086e['$'](_0x16d631(0xb7))['children']();
            expect(_0x4c24b1[_0x16d631(0xb9)])[_0x16d631(0xc0)](_0x3efd4b), expect(_0x4c24b1['find']('a')[_0x16d631(0xbb)](0x0)[_0x16d631(0xbc)] === 'file_zero.css')[_0x16d631(0xbd)](), expect(_0x4c24b1[_0x16d631(0xba)]('a')[_0x16d631(0xbb)](0x1)[_0x16d631(0xbc)] === _0x16d631(0xc3))[_0x16d631(0xbd)](), expect(_0x4c24b1[_0x16d631(0xba)]('a')[_0x16d631(0xbb)](0x2)[_0x16d631(0xbc)] === _0x16d631(0xc2))[_0x16d631(0xbd)](), expect(_0x4c24b1['find']('.file-status-icon')[_0x16d631(0xb9)])[_0x16d631(0xc0)](_0x3efd4b);
        }), it(_0x3ab62a(0xc5), function () {
            var _0x5c616e = _0x3ab62a;
            _0x1b858d[_0x5c616e(0xb5)](_0x44faff[_0x5c616e(0xc6)]), _0x18b287(_0x5ccd00 + _0x5c616e(0xc7)), waitsFor(function () {
                return _0x3efd4b === 0x4;
            }, _0x5c616e(0xc8), 0x1388), runs(function () {
                var _0x152ddb = _0x5c616e, _0x486eba = _0x2a086e['$']('.open-files-container\x20>\x20ul')[_0x152ddb(0xb8)]();
                expect(_0x486eba['length'])[_0x152ddb(0xc0)](_0x3efd4b), expect(_0x486eba[_0x152ddb(0xba)]('a')[_0x152ddb(0xbb)](0x0)[_0x152ddb(0xbc)] === _0x152ddb(0xbe))[_0x152ddb(0xbd)](), expect(_0x486eba[_0x152ddb(0xba)]('a')[_0x152ddb(0xbb)](0x1)[_0x152ddb(0xbc)] === _0x152ddb(0xc3))['toBeTruthy'](), expect(_0x486eba[_0x152ddb(0xba)]('a')[_0x152ddb(0xbb)](0x2)[_0x152ddb(0xbc)] === _0x152ddb(0xc9))[_0x152ddb(0xbd)](), expect(_0x486eba['find']('a')[_0x152ddb(0xbb)](0x3)[_0x152ddb(0xbc)] === 'file_two.js')[_0x152ddb(0xbd)](), expect(_0x486eba[_0x152ddb(0xba)](_0x152ddb(0xbf))[_0x152ddb(0xb9)])['toBe'](_0x3efd4b);
            });
        }), it(_0x3ab62a(0xca), function () {
            var _0x56f34e = _0x3ab62a;
            _0x1b858d[_0x56f34e(0xb5)](_0x44faff['CMD_WORKING_SORT_TOGGLE_AUTO']), _0x18b287(_0x5ccd00 + '/file_three.js'), waitsFor(function () {
                return _0x3efd4b === 0x5;
            }, _0x56f34e(0xcb), 0x1388), runs(function () {
                var _0x1b7c98 = _0x56f34e, _0x841e37 = _0x2a086e['$'](_0x1b7c98(0xb7))[_0x1b7c98(0xb8)]();
                expect(_0x841e37[_0x1b7c98(0xb9)])[_0x1b7c98(0xc0)](_0x3efd4b), expect(_0x841e37[_0x1b7c98(0xba)]('a')[_0x1b7c98(0xbb)](0x0)[_0x1b7c98(0xbc)] === _0x1b7c98(0xbe))[_0x1b7c98(0xbd)](), expect(_0x841e37[_0x1b7c98(0xba)]('a')[_0x1b7c98(0xbb)](0x1)[_0x1b7c98(0xbc)] === _0x1b7c98(0xc3))[_0x1b7c98(0xbd)](), expect(_0x841e37[_0x1b7c98(0xba)]('a')[_0x1b7c98(0xbb)](0x2)[_0x1b7c98(0xbc)] === _0x1b7c98(0xc9))[_0x1b7c98(0xbd)](), expect(_0x841e37[_0x1b7c98(0xba)]('a')['get'](0x3)['text'] === _0x1b7c98(0xc2))[_0x1b7c98(0xbd)](), expect(_0x841e37[_0x1b7c98(0xba)]('a')[_0x1b7c98(0xbb)](0x4)[_0x1b7c98(0xbc)] === _0x1b7c98(0xcc))[_0x1b7c98(0xbd)](), expect(_0x841e37[_0x1b7c98(0xba)](_0x1b7c98(0xbf))['length'])[_0x1b7c98(0xc0)](_0x3efd4b);
            });
        });
    });
}));
