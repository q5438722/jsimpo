define(function (_0x3fa2b7, _0x441072, _0x5b51bd) {
    'use strict';
    var _0x427c92, _0x3d487a, _0x184293, _0x114dfd, _0x3bc14e, _0x2fc1ed = _0x3fa2b7('spec/SpecRunnerUtils');
    describe('WorkingSetSort', function () {
        this['category'] = 'integration';
        var _0x3d61eb = _0x2fc1ed['getTestPath']('/spec/WorkingSetView-test-files'), _0x162a69, _0x533aaa = -0xbfa + -0x236d + 0x2f67 * 0x1;
        function _0x2a6f7d(_0x51c7b8) {
            var _0x5122e8, _0x57fcf7 = ![], _0x13fe3e = ![];
            runs(function () {
                _0x114dfd['openAndSelectDocument'](_0x51c7b8, _0x114dfd['PROJECT_MANAGER'])['done'](function () {
                    _0x57fcf7 = !![];
                })['fail'](function () {
                    _0x13fe3e = !![];
                });
            }), waitsFor(function () {
                return _0x57fcf7 && !_0x13fe3e;
            }, 'FILE_OPEN\x20on\x20file\x20timeout', -0x247b + -0x10cc + -0x1 * -0x392f), runs(function () {
                _0x5122e8 = _0x184293['getCurrentDocument'](), _0x5122e8['setText']('dirty\x20document');
            });
        }
        function _0x26d591(_0x48e551, _0x1a4636) {
            _0x2fc1ed['createTestWindowAndRun'](_0x48e551, function (_0x4e4b73) {
                _0x162a69 = _0x4e4b73, _0x427c92 = _0x162a69['brackets']['test']['CommandManager'], _0x3d487a = _0x162a69['brackets']['test']['Commands'], _0x184293 = _0x162a69['brackets']['test']['DocumentManager'], _0x114dfd = _0x162a69['brackets']['test']['FileViewController'], _0x3bc14e = _0x162a69['brackets']['test']['MainViewManager'], _0x1a4636 && _0x2fc1ed['loadProjectInTestWindow'](_0x3d61eb);
            }), runs(function () {
                _0x3bc14e['on']('workingSetAdd', function (_0x5d6cd1, _0x47617d) {
                    _0x533aaa++;
                });
            });
        }
        function _0x4a3e2b() {
            _0x162a69 = null, _0x427c92 = null, _0x3d487a = null, _0x184293 = null, _0x114dfd = null, _0x3bc14e = null, _0x2fc1ed['closeTestWindow']();
        }
        beforeFirst(function () {
            _0x26d591(this, !![]), _0x533aaa = 0x1 * 0x33f + 0x154a + -0x1889, _0x2a6f7d(_0x3d61eb + '/file_four.html'), _0x2a6f7d(_0x3d61eb + '/file_zero.css'), _0x2a6f7d(_0x3d61eb + '/file_two.js'), waitsFor(function () {
                return _0x533aaa === -0x27e + -0xb34 + 0x79 * 0x1d;
            }, 'workingSetListItemCount\x20to\x20equal\x203', -0xb82 + -0x23ff * 0x1 + 0x3369);
        }), afterLast(function () {
            _0x162a69['closeAllFiles'](), _0x4a3e2b();
        }), it('should\x20sort\x20list\x20by\x20name', function () {
            _0x427c92['execute'](_0x3d487a['CMD_WORKINGSET_SORT_BY_NAME']);
            var _0xa6c6f5 = _0x162a69['$']('.open-files-container\x20>\x20ul')['children']();
            expect(_0xa6c6f5['length'])['toBe'](_0x533aaa), expect(_0xa6c6f5['find']('a')['get'](0x6 * 0x54c + -0x85d + -0x176b)['text'] === 'file_four.html')['toBeTruthy'](), expect(_0xa6c6f5['find']('a')['get'](-0x1937 + -0x38 * -0x64 + 0x358)['text'] === 'file_two.js')['toBeTruthy'](), expect(_0xa6c6f5['find']('a')['get'](-0x4bd + -0x130f * -0x1 + 0x728 * -0x2)['text'] === 'file_zero.css')['toBeTruthy'](), expect(_0xa6c6f5['find']('.file-status-icon')['length'])['toBe'](_0x533aaa);
        }), it('should\x20sort\x20list\x20as\x20added', function () {
            _0x427c92['execute'](_0x3d487a['CMD_WORKINGSET_SORT_BY_ADDED']);
            var _0x417b77 = _0x162a69['$']('.open-files-container\x20>\x20ul')['children']();
            expect(_0x417b77['length'])['toBe'](_0x533aaa), expect(_0x417b77['find']('a')['get'](-0x1 * 0x7f6 + 0x1075 + -0xf * 0x91)['text'] === 'file_two.js')['toBeTruthy'](), expect(_0x417b77['find']('a')['get'](-0x1e3e + -0x20c5 + 0x3f04)['text'] === 'file_zero.css')['toBeTruthy'](), expect(_0x417b77['find']('a')['get'](0x17a1 + 0x1134 + -0x1 * 0x28d3)['text'] === 'file_four.html')['toBeTruthy'](), expect(_0x417b77['find']('.file-status-icon')['length'])['toBe'](_0x533aaa);
        }), it('should\x20sort\x20list\x20by\x20type', function () {
            _0x427c92['execute'](_0x3d487a['CMD_WORKINGSET_SORT_BY_TYPE']);
            var _0x27d82f = _0x162a69['$']('.open-files-container\x20>\x20ul')['children']();
            expect(_0x27d82f['length'])['toBe'](_0x533aaa), expect(_0x27d82f['find']('a')['get'](0x76 + 0x1e89 + -0x1eff)['text'] === 'file_zero.css')['toBeTruthy'](), expect(_0x27d82f['find']('a')['get'](0x19 * -0x12b + -0x11 * -0x200 + -0x1 * 0x4cc)['text'] === 'file_four.html')['toBeTruthy'](), expect(_0x27d82f['find']('a')['get'](0x1c0e + -0x9 * -0x151 + -0x27e5)['text'] === 'file_two.js')['toBeTruthy'](), expect(_0x27d82f['find']('.file-status-icon')['length'])['toBe'](_0x533aaa);
        }), it('should\x20sort\x20list\x20by\x20type\x20automatically', function () {
            _0x427c92['execute'](_0x3d487a['CMD_WORKING_SORT_TOGGLE_AUTO']), _0x2a6f7d(_0x3d61eb + '/file_one.js'), waitsFor(function () {
                return _0x533aaa === -0x1d * -0xe6 + -0x1eaf + 0x4a5;
            }, 'workingSetListItemCount\x20to\x20equal\x204', -0x1 * 0x7f3 + 0x11 * -0x61 + 0x21ec), runs(function () {
                var _0x1b9c77 = _0x162a69['$']('.open-files-container\x20>\x20ul')['children']();
                expect(_0x1b9c77['length'])['toBe'](_0x533aaa), expect(_0x1b9c77['find']('a')['get'](-0xd60 + -0x162f + -0x1 * -0x238f)['text'] === 'file_zero.css')['toBeTruthy'](), expect(_0x1b9c77['find']('a')['get'](0xc80 + 0x92 * -0x2b + -0xc07 * -0x1)['text'] === 'file_four.html')['toBeTruthy'](), expect(_0x1b9c77['find']('a')['get'](-0xf26 + -0x1b7 * 0x6 + 0x1972)['text'] === 'file_one.js')['toBeTruthy'](), expect(_0x1b9c77['find']('a')['get'](-0x2654 + 0x1bd9 + 0x9e * 0x11)['text'] === 'file_two.js')['toBeTruthy'](), expect(_0x1b9c77['find']('.file-status-icon')['length'])['toBe'](_0x533aaa);
            });
        }), it('should\x20not\x20sort\x20list\x20by\x20type\x20automatically', function () {
            _0x427c92['execute'](_0x3d487a['CMD_WORKING_SORT_TOGGLE_AUTO']), _0x2a6f7d(_0x3d61eb + '/file_three.js'), waitsFor(function () {
                return _0x533aaa === 0x35d * 0xb + -0x24d9 + 0x21 * -0x1;
            }, 'workingSetListItemCount\x20to\x20equal\x205', 0x1d4d + -0x6dd + -0x2e8), runs(function () {
                var _0x34e6cd = _0x162a69['$']('.open-files-container\x20>\x20ul')['children']();
                expect(_0x34e6cd['length'])['toBe'](_0x533aaa), expect(_0x34e6cd['find']('a')['get'](-0x113e + -0x26d5 * 0x1 + 0x3813)['text'] === 'file_zero.css')['toBeTruthy'](), expect(_0x34e6cd['find']('a')['get'](0x20b7 + -0x6 * -0x10d + 0xe3 * -0x2c)['text'] === 'file_four.html')['toBeTruthy'](), expect(_0x34e6cd['find']('a')['get'](0x1361 + 0x2c5 * 0x2 + -0x18e9)['text'] === 'file_one.js')['toBeTruthy'](), expect(_0x34e6cd['find']('a')['get'](0x7d2 + -0xdb3 + -0x1a * -0x3a)['text'] === 'file_two.js')['toBeTruthy'](), expect(_0x34e6cd['find']('a')['get'](-0x109f * -0x2 + 0x7 * 0x3d7 + 0xdf * -0x45)['text'] === 'file_three.js')['toBeTruthy'](), expect(_0x34e6cd['find']('.file-status-icon')['length'])['toBe'](_0x533aaa);
            });
        });
    });
});
