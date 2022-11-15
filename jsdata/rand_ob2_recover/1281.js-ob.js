const CommandRegistry = require('../src/command-registry'), _ = require(_0x34e325(217));
describe(_0x34e325(218), () => {
    const _0x3be25d = _0x34e325;
    let _0x5f464b, _0xee7d26, _0x4dfa39, _0x498e49;
    beforeEach(() => {
        const _0x159359 = _0x10ab;
        _0xee7d26 = document[_0x159359(219)](_0x159359(220)), _0x4dfa39 = document[_0x159359(219)](_0x159359(220)), _0x498e49 = document[_0x159359(219)](_0x159359(220)), _0xee7d26[_0x159359(221)][_0x159359(222)](_0x159359(223)), _0x4dfa39[_0x159359(221)][_0x159359(222)](_0x159359(224)), _0x498e49['classList'][_0x159359(222)]('grandchild'), _0x4dfa39[_0x159359(225)](_0x498e49), _0xee7d26['appendChild'](_0x4dfa39), document[_0x159359(226)](_0x159359(227))[_0x159359(225)](_0xee7d26), _0x5f464b = new CommandRegistry(), _0x5f464b[_0x159359(228)](_0xee7d26);
    }), afterEach(() => _0x5f464b[_0x3be25d(229)]()), describe(_0x3be25d(230), () => {
        const _0x2e20c3 = _0x3be25d;
        it(_0x2e20c3(231), () => {
            const _0x4f3c52 = _0x2e20c3;
            let _0x3f6bb4 = ![];
            _0x5f464b[_0x4f3c52(222)]('.grandchild', 'command', function (_0x4168f5) {
                const _0x53f492 = _0x4f3c52;
                expect(this)[_0x53f492(232)](_0x498e49), expect(_0x4168f5[_0x53f492(233)])[_0x53f492(232)](_0x53f492(234)), expect(_0x4168f5[_0x53f492(235)])[_0x53f492(232)](Event[_0x53f492(236)]), expect(_0x4168f5['target'])[_0x53f492(232)](_0x498e49), expect(_0x4168f5[_0x53f492(237)])[_0x53f492(232)](_0x498e49), _0x3f6bb4 = !![];
            }), _0x498e49['dispatchEvent'](new CustomEvent(_0x4f3c52(234), { 'bubbles': !![] })), expect(_0x3f6bb4)['toBe'](!![]);
        }), it('invokes callbacks with selectors matching ancestors of the target', () => {
            const _0x539ff3 = _0x2e20c3, _0x4ad9b6 = [];
            _0x5f464b[_0x539ff3(222)](_0x539ff3(238), 'command', function (_0xc97ed5) {
                const _0x29f150 = _0x539ff3;
                expect(this)['toBe'](_0x4dfa39), expect(_0xc97ed5[_0x29f150(239)])[_0x29f150(232)](_0x498e49), expect(_0xc97ed5[_0x29f150(237)])[_0x29f150(232)](_0x4dfa39), _0x4ad9b6['push'](_0x29f150(224));
            }), _0x5f464b[_0x539ff3(222)](_0x539ff3(240), _0x539ff3(234), function (_0x4e5d86) {
                const _0x299633 = _0x539ff3;
                expect(this)[_0x299633(232)](_0xee7d26), expect(_0x4e5d86[_0x299633(239)])[_0x299633(232)](_0x498e49), expect(_0x4e5d86['currentTarget'])['toBe'](_0xee7d26), _0x4ad9b6[_0x299633(241)](_0x299633(223));
            }), _0x498e49['dispatchEvent'](new CustomEvent(_0x539ff3(234), { 'bubbles': !![] })), expect(_0x4ad9b6)[_0x539ff3(242)]([
                'child',
                _0x539ff3(223)
            ]);
        }), it(_0x2e20c3(243), () => {
            const _0x4825fc = _0x2e20c3, _0x548bca = [];
            _0x5f464b[_0x4825fc(222)]('.grandchild', _0x4825fc(234), () => _0x548bca['push'](_0x4825fc(244))), _0x5f464b[_0x4825fc(222)](_0x4dfa39, _0x4825fc(234), () => _0x548bca[_0x4825fc(241)]('child-inline')), _0x5f464b[_0x4825fc(222)]('.child', _0x4825fc(234), () => _0x548bca['push'](_0x4825fc(224))), _0x5f464b[_0x4825fc(222)](_0x4825fc(240), _0x4825fc(234), () => _0x548bca[_0x4825fc(241)](_0x4825fc(223))), _0x498e49['dispatchEvent'](new CustomEvent('command', { 'bubbles': !![] })), expect(_0x548bca)['toEqual']([
                _0x4825fc(244),
                _0x4825fc(245),
                _0x4825fc(224),
                _0x4825fc(223)
            ]);
        }), it(_0x2e20c3(246), () => {
            const _0x2e4bf8 = _0x2e20c3;
            _0x4dfa39['classList'][_0x2e4bf8(222)](_0x2e4bf8(247), _0x2e4bf8(248));
            const _0x620385 = [];
            _0x5f464b['add']('.foo.bar', _0x2e4bf8(234), () => _0x620385[_0x2e4bf8(241)](_0x2e4bf8(249))), _0x5f464b[_0x2e4bf8(222)](_0x2e4bf8(250), _0x2e4bf8(234), () => _0x620385['push'](_0x2e4bf8(250))), _0x5f464b['add'](_0x2e4bf8(251), _0x2e4bf8(234), () => _0x620385[_0x2e4bf8(241)](_0x2e4bf8(251))), _0x498e49[_0x2e4bf8(252)](new CustomEvent(_0x2e4bf8(234), { 'bubbles': !![] })), expect(_0x620385)[_0x2e4bf8(242)]([
                _0x2e4bf8(249),
                '.bar',
                '.foo'
            ]);
        }), it(_0x2e20c3(253), () => {
            const _0x4a7caf = _0x2e20c3, _0x3d3971 = [];
            _0x5f464b[_0x4a7caf(222)](_0x4dfa39, _0x4a7caf(234), () => _0x3d3971[_0x4a7caf(241)](_0x4a7caf(254))), _0x5f464b[_0x4a7caf(222)](_0x4dfa39, _0x4a7caf(234), () => _0x3d3971[_0x4a7caf(241)](_0x4a7caf(255))), _0x4dfa39[_0x4a7caf(252)](new CustomEvent('command', { 'bubbles': !![] })), expect(_0x3d3971)[_0x4a7caf(242)]([
                _0x4a7caf(255),
                _0x4a7caf(254)
            ]);
        }), it('stops bubbling through ancestors when .stopPropagation() is called on the event', () => {
            const _0x830e31 = _0x2e20c3, _0x49db6d = [];
            _0x5f464b[_0x830e31(222)]('.parent', 'command', () => _0x49db6d[_0x830e31(241)]('parent')), _0x5f464b[_0x830e31(222)](_0x830e31(238), _0x830e31(234), () => _0x49db6d['push']('child-2')), _0x5f464b[_0x830e31(222)](_0x830e31(238), _0x830e31(234), _0x34c8b4 => {
                const _0x65e185 = _0x830e31;
                _0x49db6d['push'](_0x65e185(256)), _0x34c8b4[_0x65e185(257)]();
            });
            const _0x44a76a = new CustomEvent(_0x830e31(234), { 'bubbles': !![] });
            spyOn(_0x44a76a, _0x830e31(257)), _0x498e49[_0x830e31(252)](_0x44a76a), expect(_0x49db6d)['toEqual']([
                'child-1',
                'child-2'
            ]), expect(_0x44a76a[_0x830e31(257)])[_0x830e31(258)]();
        }), it(_0x2e20c3(259), () => {
            const _0x54a528 = _0x2e20c3, _0x327eb3 = [];
            _0x5f464b[_0x54a528(222)](_0x54a528(240), 'command', () => _0x327eb3[_0x54a528(241)]('parent')), _0x5f464b[_0x54a528(222)](_0x54a528(238), _0x54a528(234), () => _0x327eb3[_0x54a528(241)](_0x54a528(260))), _0x5f464b[_0x54a528(222)](_0x54a528(238), _0x54a528(234), _0x46a8e7 => {
                const _0x3b000e = _0x54a528;
                _0x327eb3[_0x3b000e(241)](_0x3b000e(256)), _0x46a8e7[_0x3b000e(261)]();
            });
            const _0x3a5d1b = new CustomEvent(_0x54a528(234), { 'bubbles': !![] });
            spyOn(_0x3a5d1b, _0x54a528(261)), _0x498e49[_0x54a528(252)](_0x3a5d1b), expect(_0x327eb3)['toEqual'](['child-1']), expect(_0x3a5d1b[_0x54a528(261)])[_0x54a528(258)]();
        }), it(_0x2e20c3(262), () => {
            const _0x577035 = _0x2e20c3;
            _0x5f464b['add'](_0x577035(238), _0x577035(234), _0x28431c => _0x28431c['preventDefault']());
            const _0x21f951 = new CustomEvent(_0x577035(234), { 'bubbles': !![] });
            spyOn(_0x21f951, _0x577035(263)), _0x498e49[_0x577035(252)](_0x21f951), expect(_0x21f951[_0x577035(263)])[_0x577035(258)]();
        }), it(_0x2e20c3(264), () => {
            const _0x5421bc = _0x2e20c3;
            _0x5f464b['add'](_0x5421bc(238), _0x5421bc(234), _0x1a8ec7 => _0x1a8ec7[_0x5421bc(265)]());
            const _0x2ba0fa = new CustomEvent(_0x5421bc(234), { 'bubbles': !![] });
            _0x2ba0fa[_0x5421bc(265)] = jasmine[_0x5421bc(266)]('abortKeyBinding'), _0x498e49['dispatchEvent'](_0x2ba0fa), expect(_0x2ba0fa[_0x5421bc(265)])['toHaveBeenCalled']();
        }), it(_0x2e20c3(267), () => {
            const _0x3fe1a3 = _0x2e20c3;
            let _0x3a8c4b = null;
            _0x5f464b[_0x3fe1a3(222)](_0x3fe1a3(238), 'command', _0x31debc => _0x3a8c4b = _0x31debc);
            const _0x23098a = new CustomEvent(_0x3fe1a3(234), { 'bubbles': !![] });
            _0x23098a[_0x3fe1a3(268)] = _0x3fe1a3(269), _0x498e49[_0x3fe1a3(252)](_0x23098a), expect(_0x3a8c4b[_0x3fe1a3(268)])[_0x3fe1a3(232)](_0x3fe1a3(269));
        }), it(_0x2e20c3(270), () => {
            const _0x4ab754 = _0x2e20c3;
            let _0x5b5c3f = [];
            const _0xf66e7b = _0x5f464b[_0x4ab754(222)](_0x4ab754(240), 'command', () => _0x5b5c3f[_0x4ab754(241)]('parent')), _0x59efff = _0x5f464b[_0x4ab754(222)]('.child', _0x4ab754(234), () => _0x5b5c3f['push'](_0x4ab754(224)));
            _0xf66e7b['dispose'](), _0x498e49[_0x4ab754(252)](new CustomEvent('command', { 'bubbles': !![] })), expect(_0x5b5c3f)['toEqual']([_0x4ab754(224)]), _0x5b5c3f = [], _0x59efff[_0x4ab754(271)](), _0x498e49[_0x4ab754(252)](new CustomEvent(_0x4ab754(234), { 'bubbles': !![] })), expect(_0x5b5c3f)['toEqual']([]);
        }), it(_0x2e20c3(272), () => {
            const _0x3145d1 = _0x2e20c3;
            let _0x591dc7 = [];
            const _0x6d516a = _0x5f464b[_0x3145d1(222)](_0x3145d1(238), {
                'command-1'() {
                    const _0x1b52d7 = _0x3145d1;
                    _0x591dc7[_0x1b52d7(241)]('command-1');
                },
                'command-2'() {
                    _0x591dc7['push']('command-2');
                }
            });
            _0x498e49[_0x3145d1(252)](new CustomEvent(_0x3145d1(273), { 'bubbles': !![] })), _0x498e49[_0x3145d1(252)](new CustomEvent(_0x3145d1(274), { 'bubbles': !![] })), expect(_0x591dc7)[_0x3145d1(242)]([
                _0x3145d1(273),
                _0x3145d1(274)
            ]), _0x591dc7 = [], _0x6d516a['dispose'](), _0x498e49[_0x3145d1(252)](new CustomEvent('command-1', { 'bubbles': !![] })), _0x498e49[_0x3145d1(252)](new CustomEvent(_0x3145d1(274), { 'bubbles': !![] })), expect(_0x591dc7)['toEqual']([]);
        }), it('invokes callbacks registered with ::onWillDispatch and ::onDidDispatch', () => {
            const _0x32c2c3 = _0x2e20c3, _0x1fce34 = [];
            _0x5f464b[_0x32c2c3(275)](_0x1f6afc => _0x1fce34['push']([
                'onDidDispatch',
                _0x1f6afc
            ])), _0x5f464b['add'](_0x32c2c3(276), _0x32c2c3(234), _0xc30530 => _0x1fce34[_0x32c2c3(241)]([
                _0x32c2c3(277),
                _0xc30530
            ])), _0x5f464b[_0x32c2c3(278)](_0x415516 => _0x1fce34[_0x32c2c3(241)]([
                _0x32c2c3(278),
                _0x415516
            ])), _0x498e49[_0x32c2c3(252)](new CustomEvent('command', { 'bubbles': !![] })), expect(_0x1fce34[0][0])[_0x32c2c3(232)]('onWillDispatch'), expect(_0x1fce34[1][0])[_0x32c2c3(232)](_0x32c2c3(277)), expect(_0x1fce34[2][0])[_0x32c2c3(232)](_0x32c2c3(275)), expect(_0x1fce34[0][1] === _0x1fce34[1][1] && _0x1fce34[1][1] === _0x1fce34[2][1])[_0x32c2c3(232)](!![]), expect(_0x1fce34[0][1][_0x32c2c3(279)])[_0x32c2c3(232)](CustomEvent), expect(_0x1fce34[0][1][_0x32c2c3(239)])['toBe'](_0x498e49);
        });
    }), describe(_0x3be25d(280), () => {
        const _0x9ac0a1 = _0x3be25d;
        it(_0x9ac0a1(281), () => {
            const _0x771de9 = _0x9ac0a1, _0x47c792 = '<>';
            let _0x233ad0 = null;
            try {
                _0x5f464b[_0x771de9(222)](_0x47c792, _0x771de9(282), () => {
                });
            } catch (_0x36c71c) {
                _0x233ad0 = _0x36c71c;
            }
            expect(_0x233ad0[_0x771de9(283)])[_0x771de9(284)](_0x47c792);
        }), it(_0x9ac0a1(285), () => {
            const _0x1b5e13 = null;
            expect(() => {
                const _0x5eb67 = _0x10ab;
                _0x5f464b[_0x5eb67(222)]('.selector', _0x5eb67(282), _0x1b5e13);
            })['toThrow'](new Error('Cannot register a command with a null listener.'));
        }), it(_0x9ac0a1(286), () => {
            const _0x14a43d = _0x9ac0a1, _0x1f1dc0 = null;
            expect(() => {
                const _0x206eaf = _0x10ab;
                _0x5f464b['add'](document[_0x206eaf(287)], _0x206eaf(282), _0x1f1dc0);
            })[_0x14a43d(288)](new Error(_0x14a43d(289)));
        }), it(_0x9ac0a1(290), () => {
            const _0x5c4788 = _0x9ac0a1, _0x4d2f25 = {
                    'title': _0x5c4788(291),
                    'description': _0x5c4788(292)
                };
            expect(() => {
                const _0x5ab6f8 = _0x5c4788;
                _0x5f464b[_0x5ab6f8(222)](document[_0x5ab6f8(287)], _0x5ab6f8(282), _0x4d2f25);
            })[_0x5c4788(288)](new Error(_0x5c4788(293)));
        });
    }), describe('::findCommands({target})', () => {
        const _0x1299de = _0x3be25d;
        it('returns command descriptors that can be invoked on the target or its ancestors', () => {
            const _0x2bc281 = _0x10ab;
            _0x5f464b[_0x2bc281(222)](_0x2bc281(240), _0x2bc281(294), () => {
            }), _0x5f464b[_0x2bc281(222)]('.child', _0x2bc281(295), () => {
            }), _0x5f464b['add']('.grandchild', _0x2bc281(296), () => {
            }), _0x5f464b['add'](_0x2bc281(297), _0x2bc281(298), () => {
            }), _0x5f464b['add'](_0x498e49, 'namespace:inline-command-1', () => {
            }), _0x5f464b['add'](_0x4dfa39, _0x2bc281(299), () => {
            });
            const _0x1bb6c0 = _0x5f464b[_0x2bc281(300)]({ 'target': _0x498e49 }), _0x1a0666 = _[_0x2bc281(301)](_0x1bb6c0, _0x5b29b8 => _0x5b29b8[_0x2bc281(302)]);
            expect(_0x1a0666)[_0x2bc281(242)]([
                {
                    'name': 'namespace:inline-command-1',
                    'displayName': _0x2bc281(303)
                },
                {
                    'name': _0x2bc281(296),
                    'displayName': _0x2bc281(304)
                },
                {
                    'name': _0x2bc281(299),
                    'displayName': _0x2bc281(305)
                },
                {
                    'name': _0x2bc281(295),
                    'displayName': 'Namespace: Command 2'
                },
                {
                    'name': _0x2bc281(294),
                    'displayName': 'Namespace: Command 1'
                }
            ]);
        }), it(_0x1299de(306), () => {
            const _0x377b67 = _0x1299de;
            _0x5f464b[_0x377b67(222)]('.grandchild', 'namespace:command-1', () => {
            }), _0x5f464b[_0x377b67(222)](_0x377b67(276), 'namespace:command-2', {
                'displayName': _0x377b67(307),
                'metadata': {
                    'some': _0x377b67(308),
                    'object': _0x377b67(309)
                },
                'didDispatch'() {
                }
            }), _0x5f464b['add']('.grandchild', _0x377b67(296), {
                'name': _0x377b67(310),
                'displayName': _0x377b67(311),
                'metadata': {
                    'some': 'other',
                    'object': _0x377b67(309)
                },
                'didDispatch'() {
                }
            });
            const _0x20c9f6 = _0x5f464b[_0x377b67(300)]({ 'target': _0x498e49 });
            expect(_0x20c9f6)[_0x377b67(242)]([
                {
                    'displayName': _0x377b67(312),
                    'name': 'namespace:command-1'
                },
                {
                    'displayName': _0x377b67(307),
                    'metadata': {
                        'some': _0x377b67(308),
                        'object': _0x377b67(309)
                    },
                    'name': _0x377b67(295)
                },
                {
                    'displayName': _0x377b67(311),
                    'metadata': {
                        'some': _0x377b67(308),
                        'object': _0x377b67(309)
                    },
                    'name': _0x377b67(296)
                }
            ]);
        }), it(_0x1299de(313), () => {
            const _0x9b890e = _0x1299de;
            function _0x4ec7ba() {
            }
            _0x4ec7ba[_0x9b890e(314)] = _0x9b890e(307), _0x4ec7ba[_0x9b890e(315)] = {
                'some': _0x9b890e(308),
                'object': _0x9b890e(309)
            }, _0x5f464b[_0x9b890e(222)](_0x9b890e(276), _0x9b890e(295), _0x4ec7ba);
            const _0x17f9b6 = _0x5f464b[_0x9b890e(300)]({ 'target': _0x498e49 });
            expect(_0x17f9b6)[_0x9b890e(242)]([{
                    'displayName': _0x9b890e(307),
                    'metadata': {
                        'some': 'other',
                        'object': _0x9b890e(309)
                    },
                    'name': _0x9b890e(295)
                }]);
        });
    }), describe(_0x3be25d(316), () => {
        const _0x13732f = _0x3be25d;
        it(_0x13732f(317), () => {
            const _0x2e9260 = _0x13732f;
            let _0xebb900 = ![];
            _0x5f464b['add'](_0x2e9260(276), _0x2e9260(234), function (_0xc279ff) {
                const _0x4b2264 = _0x2e9260;
                expect(this)[_0x4b2264(232)](_0x498e49), expect(_0xc279ff['type'])[_0x4b2264(232)]('command'), expect(_0xc279ff[_0x4b2264(235)])[_0x4b2264(232)](Event[_0x4b2264(236)]), expect(_0xc279ff[_0x4b2264(239)])[_0x4b2264(232)](_0x498e49), expect(_0xc279ff[_0x4b2264(237)])[_0x4b2264(232)](_0x498e49), _0xebb900 = !![];
            }), _0x5f464b[_0x2e9260(318)](_0x498e49, 'command'), expect(_0xebb900)['toBe'](!![]);
        }), it(_0x13732f(319), () => {
            const _0x4a0483 = _0x13732f;
            _0x5f464b[_0x4a0483(222)]('.grandchild', 'command', () => {
            }), expect(_0x5f464b[_0x4a0483(318)](_0x498e49, _0x4a0483(234))[_0x4a0483(279)][_0x4a0483(320)])[_0x4a0483(232)](_0x4a0483(321)), expect(_0x5f464b[_0x4a0483(318)](_0x498e49, _0x4a0483(322)))['toBe'](null), expect(_0x5f464b[_0x4a0483(318)](_0xee7d26, _0x4a0483(234)))[_0x4a0483(232)](null);
        }), it('returns a promise that resolves when the listeners resolve', async () => {
            const _0x4482cd = _0x13732f;
            jasmine[_0x4482cd(323)](), _0x5f464b[_0x4482cd(222)](_0x4482cd(276), _0x4482cd(234), () => 1), _0x5f464b[_0x4482cd(222)]('.grandchild', _0x4482cd(234), () => Promise[_0x4482cd(324)](2)), _0x5f464b[_0x4482cd(222)](_0x4482cd(276), _0x4482cd(234), () => new Promise(_0x63f38e => {
                setTimeout(() => {
                    _0x63f38e(3);
                }, 1);
            }));
            const _0x231486 = await _0x5f464b['dispatch'](_0x498e49, _0x4482cd(234));
            expect(_0x231486)[_0x4482cd(242)]([
                3,
                2,
                1
            ]);
        }), it(_0x13732f(325), async () => {
            const _0x4d0026 = _0x13732f;
            jasmine[_0x4d0026(323)](), _0x5f464b[_0x4d0026(222)](_0x4d0026(276), _0x4d0026(234), () => 1), _0x5f464b['add']('.grandchild', _0x4d0026(234), () => Promise['resolve'](2)), _0x5f464b[_0x4d0026(222)](_0x4d0026(276), _0x4d0026(234), () => new Promise((_0x37383c, _0x41183f) => {
                setTimeout(() => {
                    _0x41183f(3);
                }, 1);
            }));
            let _0x2c96fe;
            try {
                _0x2c96fe = await _0x5f464b[_0x4d0026(318)](_0x498e49, _0x4d0026(234));
            } catch (_0x1014ab) {
                _0x2c96fe = _0x1014ab;
            }
            expect(_0x2c96fe)[_0x4d0026(232)](3);
        });
    }), describe(_0x3be25d(326), () => it(_0x3be25d(327), () => {
        const _0x510253 = _0x3be25d;
        _0x5f464b['add'](_0x510253(240), _0x510253(294), () => {
        }), _0x5f464b[_0x510253(222)](_0x510253(238), _0x510253(295), () => {
        });
        const _0x295815 = _0x5f464b[_0x510253(328)]();
        _0x5f464b[_0x510253(222)](_0x510253(276), 'namespace:command-3', () => {
        }), expect(_0x5f464b['findCommands']({ 'target': _0x498e49 })['slice'](0, 3))[_0x510253(242)]([
            {
                'name': _0x510253(296),
                'displayName': _0x510253(304)
            },
            {
                'name': _0x510253(295),
                'displayName': _0x510253(329)
            },
            {
                'name': 'namespace:command-1',
                'displayName': _0x510253(312)
            }
        ]), _0x5f464b[_0x510253(330)](_0x295815), expect(_0x5f464b[_0x510253(300)]({ 'target': _0x498e49 })[_0x510253(331)](0, 2))[_0x510253(242)]([
            {
                'name': 'namespace:command-2',
                'displayName': _0x510253(329)
            },
            {
                'name': _0x510253(294),
                'displayName': _0x510253(312)
            }
        ]), _0x5f464b[_0x510253(222)](_0x510253(276), _0x510253(296), () => {
        }), _0x5f464b[_0x510253(330)](_0x295815), expect(_0x5f464b[_0x510253(300)]({ 'target': _0x498e49 })[_0x510253(331)](0, 2))[_0x510253(242)]([
            {
                'name': _0x510253(295),
                'displayName': _0x510253(329)
            },
            {
                'name': _0x510253(294),
                'displayName': 'Namespace: Command 1'
            }
        ]);
    })), describe(_0x3be25d(332), () => it('adds event listeners for any previously-added commands', () => {
        const _0x4b12ea = _0x3be25d, _0x4c372f = new CommandRegistry(), _0x34dd08 = jasmine[_0x4b12ea(266)]('command-callback');
        _0x4c372f[_0x4b12ea(222)](_0x4b12ea(276), _0x4b12ea(273), _0x34dd08), _0x498e49[_0x4b12ea(252)](new CustomEvent(_0x4b12ea(273), { 'bubbles': !![] })), expect(_0x34dd08)[_0x4b12ea(333)][_0x4b12ea(258)](), _0x4c372f[_0x4b12ea(228)](_0xee7d26), _0x498e49[_0x4b12ea(252)](new CustomEvent(_0x4b12ea(273), { 'bubbles': !![] })), expect(_0x34dd08)[_0x4b12ea(258)]();
    }));
});