function _0x45b9(_0x25a0a, _0x3222d5) {
    return _0x45b9 = function (_0x3cc8d2, _0x45b9c5) {
        _0x3cc8d2 = _0x3cc8d2 - 407;
        let _0x66685 = _0x3cc8[_0x3cc8d2];
        return _0x66685;
    }, _0x45b9(_0x25a0a, _0x3222d5);
}
const CommandRegistry = require(_0x2ff624(417)), _ = require(_0x2ff624(418));
describe(_0x2ff624(419), () => {
    const _0xcab45b = _0x2ff624;
    let _0x77352c, _0x2dedf0, _0x555a44, _0x499e87;
    beforeEach(() => {
        const _0x116552 = _0x45b9;
        _0x2dedf0 = document[_0x116552(420)](_0x116552(421)), _0x555a44 = document['createElement'](_0x116552(421)), _0x499e87 = document[_0x116552(420)](_0x116552(421)), _0x2dedf0['classList'][_0x116552(422)]('parent'), _0x555a44[_0x116552(423)][_0x116552(422)](_0x116552(424)), _0x499e87['classList'][_0x116552(422)](_0x116552(425)), _0x555a44[_0x116552(426)](_0x499e87), _0x2dedf0['appendChild'](_0x555a44), document['querySelector']('#jasmine-content')['appendChild'](_0x2dedf0), _0x77352c = new CommandRegistry(), _0x77352c[_0x116552(427)](_0x2dedf0);
    }), afterEach(() => _0x77352c[_0xcab45b(428)]()), describe(_0xcab45b(429), () => {
        const _0x2f388b = _0xcab45b;
        it('invokes callbacks with selectors matching the target', () => {
            const _0xc345c8 = _0x45b9;
            let _0x24fe08 = ![];
            _0x77352c[_0xc345c8(422)](_0xc345c8(430), _0xc345c8(431), function (_0x5c4d14) {
                const _0x5852e8 = _0xc345c8;
                expect(this)['toBe'](_0x499e87), expect(_0x5c4d14['type'])[_0x5852e8(432)](_0x5852e8(431)), expect(_0x5c4d14[_0x5852e8(433)])[_0x5852e8(432)](Event[_0x5852e8(434)]), expect(_0x5c4d14[_0x5852e8(435)])[_0x5852e8(432)](_0x499e87), expect(_0x5c4d14[_0x5852e8(436)])[_0x5852e8(432)](_0x499e87), _0x24fe08 = !![];
            }), _0x499e87[_0xc345c8(437)](new CustomEvent(_0xc345c8(431), { 'bubbles': !![] })), expect(_0x24fe08)[_0xc345c8(432)](!![]);
        }), it('invokes callbacks with selectors matching ancestors of the target', () => {
            const _0x3a2248 = _0x45b9, _0xe001bf = [];
            _0x77352c[_0x3a2248(422)](_0x3a2248(438), _0x3a2248(431), function (_0x5d9249) {
                const _0x18d28e = _0x3a2248;
                expect(this)['toBe'](_0x555a44), expect(_0x5d9249[_0x18d28e(435)])[_0x18d28e(432)](_0x499e87), expect(_0x5d9249[_0x18d28e(436)])['toBe'](_0x555a44), _0xe001bf[_0x18d28e(439)](_0x18d28e(424));
            }), _0x77352c[_0x3a2248(422)](_0x3a2248(440), 'command', function (_0x3818e3) {
                const _0x350eb0 = _0x3a2248;
                expect(this)[_0x350eb0(432)](_0x2dedf0), expect(_0x3818e3[_0x350eb0(435)])[_0x350eb0(432)](_0x499e87), expect(_0x3818e3['currentTarget'])[_0x350eb0(432)](_0x2dedf0), _0xe001bf[_0x350eb0(439)]('parent');
            }), _0x499e87[_0x3a2248(437)](new CustomEvent('command', { 'bubbles': !![] })), expect(_0xe001bf)[_0x3a2248(441)]([
                _0x3a2248(424),
                'parent'
            ]);
        }), it(_0x2f388b(442), () => {
            const _0x20afbd = _0x2f388b, _0x4baf55 = [];
            _0x77352c[_0x20afbd(422)]('.grandchild', 'command', () => _0x4baf55[_0x20afbd(439)](_0x20afbd(425))), _0x77352c[_0x20afbd(422)](_0x555a44, 'command', () => _0x4baf55[_0x20afbd(439)](_0x20afbd(443))), _0x77352c[_0x20afbd(422)]('.child', _0x20afbd(431), () => _0x4baf55[_0x20afbd(439)](_0x20afbd(424))), _0x77352c[_0x20afbd(422)]('.parent', _0x20afbd(431), () => _0x4baf55[_0x20afbd(439)](_0x20afbd(444))), _0x499e87[_0x20afbd(437)](new CustomEvent(_0x20afbd(431), { 'bubbles': !![] })), expect(_0x4baf55)[_0x20afbd(441)]([
                _0x20afbd(425),
                _0x20afbd(443),
                'child',
                'parent'
            ]);
        }), it(_0x2f388b(445), () => {
            const _0xdb82af = _0x2f388b;
            _0x555a44[_0xdb82af(423)][_0xdb82af(422)]('foo', 'bar');
            const _0x1cf6e3 = [];
            _0x77352c[_0xdb82af(422)]('.foo.bar', 'command', () => _0x1cf6e3['push'](_0xdb82af(446))), _0x77352c['add'](_0xdb82af(447), _0xdb82af(431), () => _0x1cf6e3[_0xdb82af(439)]('.foo')), _0x77352c[_0xdb82af(422)](_0xdb82af(448), _0xdb82af(431), () => _0x1cf6e3[_0xdb82af(439)](_0xdb82af(448))), _0x499e87['dispatchEvent'](new CustomEvent(_0xdb82af(431), { 'bubbles': !![] })), expect(_0x1cf6e3)[_0xdb82af(441)]([
                '.foo.bar',
                _0xdb82af(448),
                _0xdb82af(447)
            ]);
        }), it(_0x2f388b(449), () => {
            const _0x475f57 = _0x2f388b, _0x269fc8 = [];
            _0x77352c['add'](_0x555a44, _0x475f57(431), () => _0x269fc8[_0x475f57(439)]('child1')), _0x77352c['add'](_0x555a44, _0x475f57(431), () => _0x269fc8[_0x475f57(439)]('child2')), _0x555a44[_0x475f57(437)](new CustomEvent(_0x475f57(431), { 'bubbles': !![] })), expect(_0x269fc8)[_0x475f57(441)]([
                'child2',
                'child1'
            ]);
        }), it('stops bubbling through ancestors when .stopPropagation() is called on the event', () => {
            const _0x10c648 = _0x2f388b, _0x217f8b = [];
            _0x77352c[_0x10c648(422)](_0x10c648(440), _0x10c648(431), () => _0x217f8b[_0x10c648(439)]('parent')), _0x77352c[_0x10c648(422)](_0x10c648(438), _0x10c648(431), () => _0x217f8b[_0x10c648(439)]('child-2')), _0x77352c[_0x10c648(422)](_0x10c648(438), _0x10c648(431), _0x626601 => {
                const _0x106cf0 = _0x10c648;
                _0x217f8b[_0x106cf0(439)](_0x106cf0(450)), _0x626601['stopPropagation']();
            });
            const _0x47f70c = new CustomEvent('command', { 'bubbles': !![] });
            spyOn(_0x47f70c, 'stopPropagation'), _0x499e87[_0x10c648(437)](_0x47f70c), expect(_0x217f8b)[_0x10c648(441)]([
                _0x10c648(450),
                _0x10c648(451)
            ]), expect(_0x47f70c['stopPropagation'])[_0x10c648(452)]();
        }), it(_0x2f388b(453), () => {
            const _0x5b0c76 = _0x2f388b, _0x4d30b8 = [];
            _0x77352c[_0x5b0c76(422)](_0x5b0c76(440), _0x5b0c76(431), () => _0x4d30b8[_0x5b0c76(439)]('parent')), _0x77352c[_0x5b0c76(422)]('.child', _0x5b0c76(431), () => _0x4d30b8[_0x5b0c76(439)](_0x5b0c76(451))), _0x77352c[_0x5b0c76(422)](_0x5b0c76(438), _0x5b0c76(431), _0x1f3968 => {
                const _0x2468ee = _0x5b0c76;
                _0x4d30b8[_0x2468ee(439)](_0x2468ee(450)), _0x1f3968[_0x2468ee(454)]();
            });
            const _0x5a416b = new CustomEvent('command', { 'bubbles': !![] });
            spyOn(_0x5a416b, _0x5b0c76(454)), _0x499e87['dispatchEvent'](_0x5a416b), expect(_0x4d30b8)[_0x5b0c76(441)]([_0x5b0c76(450)]), expect(_0x5a416b[_0x5b0c76(454)])['toHaveBeenCalled']();
        }), it(_0x2f388b(455), () => {
            const _0x3f03d7 = _0x2f388b;
            _0x77352c[_0x3f03d7(422)]('.child', _0x3f03d7(431), _0x10fb29 => _0x10fb29[_0x3f03d7(456)]());
            const _0x55f7fd = new CustomEvent('command', { 'bubbles': !![] });
            spyOn(_0x55f7fd, 'preventDefault'), _0x499e87['dispatchEvent'](_0x55f7fd), expect(_0x55f7fd[_0x3f03d7(456)])[_0x3f03d7(452)]();
        }), it(_0x2f388b(457), () => {
            const _0x4e9c6a = _0x2f388b;
            _0x77352c['add']('.child', _0x4e9c6a(431), _0x44d06f => _0x44d06f['abortKeyBinding']());
            const _0xd59110 = new CustomEvent('command', { 'bubbles': !![] });
            _0xd59110[_0x4e9c6a(458)] = jasmine[_0x4e9c6a(459)](_0x4e9c6a(458)), _0x499e87['dispatchEvent'](_0xd59110), expect(_0xd59110['abortKeyBinding'])['toHaveBeenCalled']();
        }), it(_0x2f388b(460), () => {
            const _0x367fe2 = _0x2f388b;
            let _0x4e46ea = null;
            _0x77352c[_0x367fe2(422)](_0x367fe2(438), _0x367fe2(431), _0x3b7c09 => _0x4e46ea = _0x3b7c09);
            const _0x187231 = new CustomEvent(_0x367fe2(431), { 'bubbles': !![] });
            _0x187231[_0x367fe2(461)] = 'testing', _0x499e87[_0x367fe2(437)](_0x187231), expect(_0x4e46ea[_0x367fe2(461)])['toBe'](_0x367fe2(462));
        }), it('allows listeners to be removed via a disposable returned by ::add', () => {
            const _0x372a0e = _0x2f388b;
            let _0x296dfb = [];
            const _0x4171e8 = _0x77352c[_0x372a0e(422)](_0x372a0e(440), 'command', () => _0x296dfb[_0x372a0e(439)](_0x372a0e(444))), _0x577b6f = _0x77352c['add'](_0x372a0e(438), 'command', () => _0x296dfb['push'](_0x372a0e(424)));
            _0x4171e8[_0x372a0e(463)](), _0x499e87[_0x372a0e(437)](new CustomEvent(_0x372a0e(431), { 'bubbles': !![] })), expect(_0x296dfb)[_0x372a0e(441)]([_0x372a0e(424)]), _0x296dfb = [], _0x577b6f[_0x372a0e(463)](), _0x499e87[_0x372a0e(437)](new CustomEvent(_0x372a0e(431), { 'bubbles': !![] })), expect(_0x296dfb)[_0x372a0e(441)]([]);
        }), it(_0x2f388b(464), () => {
            const _0x4a3a04 = _0x2f388b;
            let _0xba640d = [];
            const _0x3d731c = _0x77352c[_0x4a3a04(422)](_0x4a3a04(438), {
                'command-1'() {
                    const _0x4e3267 = _0x4a3a04;
                    _0xba640d['push'](_0x4e3267(465));
                },
                'command-2'() {
                    const _0x39c343 = _0x4a3a04;
                    _0xba640d[_0x39c343(439)](_0x39c343(466));
                }
            });
            _0x499e87[_0x4a3a04(437)](new CustomEvent('command-1', { 'bubbles': !![] })), _0x499e87[_0x4a3a04(437)](new CustomEvent('command-2', { 'bubbles': !![] })), expect(_0xba640d)[_0x4a3a04(441)]([
                _0x4a3a04(465),
                _0x4a3a04(466)
            ]), _0xba640d = [], _0x3d731c['dispose'](), _0x499e87[_0x4a3a04(437)](new CustomEvent(_0x4a3a04(465), { 'bubbles': !![] })), _0x499e87[_0x4a3a04(437)](new CustomEvent('command-2', { 'bubbles': !![] })), expect(_0xba640d)[_0x4a3a04(441)]([]);
        }), it(_0x2f388b(467), () => {
            const _0x59c095 = _0x2f388b, _0x51be29 = [];
            _0x77352c['onDidDispatch'](_0x248981 => _0x51be29[_0x59c095(439)]([
                _0x59c095(468),
                _0x248981
            ])), _0x77352c[_0x59c095(422)](_0x59c095(430), _0x59c095(431), _0x5e4563 => _0x51be29[_0x59c095(439)]([
                _0x59c095(469),
                _0x5e4563
            ])), _0x77352c['onWillDispatch'](_0x4bd1d4 => _0x51be29['push']([
                _0x59c095(470),
                _0x4bd1d4
            ])), _0x499e87[_0x59c095(437)](new CustomEvent(_0x59c095(431), { 'bubbles': !![] })), expect(_0x51be29[0][0])[_0x59c095(432)](_0x59c095(470)), expect(_0x51be29[1][0])[_0x59c095(432)](_0x59c095(469)), expect(_0x51be29[2][0])[_0x59c095(432)](_0x59c095(468)), expect(_0x51be29[0][1] === _0x51be29[1][1] && _0x51be29[1][1] === _0x51be29[2][1])['toBe'](!![]), expect(_0x51be29[0][1][_0x59c095(471)])[_0x59c095(432)](CustomEvent), expect(_0x51be29[0][1][_0x59c095(435)])['toBe'](_0x499e87);
        });
    }), describe(_0xcab45b(472), () => {
        const _0x5b7bc6 = _0xcab45b;
        it(_0x5b7bc6(473), () => {
            const _0x268492 = _0x5b7bc6, _0x279b34 = '<>';
            let _0x1c9787 = null;
            try {
                _0x77352c['add'](_0x279b34, _0x268492(474), () => {
                });
            } catch (_0x5f02bc) {
                _0x1c9787 = _0x5f02bc;
            }
            expect(_0x1c9787[_0x268492(475)])['toContain'](_0x279b34);
        }), it('throws an error when called with a null callback and selector target', () => {
            const _0x1dcd5d = _0x5b7bc6, _0x156a99 = null;
            expect(() => {
                const _0x4f455d = _0x45b9;
                _0x77352c[_0x4f455d(422)](_0x4f455d(476), _0x4f455d(474), _0x156a99);
            })[_0x1dcd5d(477)](new Error(_0x1dcd5d(478)));
        }), it('throws an error when called with a null callback and object target', () => {
            const _0x16da3e = _0x5b7bc6, _0x2e1dce = null;
            expect(() => {
                const _0x5f5d79 = _0x45b9;
                _0x77352c['add'](document[_0x5f5d79(479)], _0x5f5d79(474), _0x2e1dce);
            })[_0x16da3e(477)](new Error('Cannot register a command with a null listener.'));
        }), it('throws an error when called with an object listener without a didDispatch method', () => {
            const _0x1beafd = _0x5b7bc6, _0x50e277 = {
                    'title': 'a listener without a didDispatch callback',
                    'description': _0x1beafd(480)
                };
            expect(() => {
                const _0x2c6ed7 = _0x1beafd;
                _0x77352c['add'](document[_0x2c6ed7(479)], 'foo:bar', _0x50e277);
            })[_0x1beafd(477)](new Error(_0x1beafd(481)));
        });
    }), describe(_0xcab45b(482), () => {
        const _0x23500d = _0xcab45b;
        it('returns command descriptors that can be invoked on the target or its ancestors', () => {
            const _0x213e55 = _0x45b9;
            _0x77352c[_0x213e55(422)](_0x213e55(440), _0x213e55(483), () => {
            }), _0x77352c['add']('.child', _0x213e55(484), () => {
            }), _0x77352c[_0x213e55(422)](_0x213e55(430), 'namespace:command-3', () => {
            }), _0x77352c[_0x213e55(422)]('.grandchild.no-match', _0x213e55(485), () => {
            }), _0x77352c[_0x213e55(422)](_0x499e87, _0x213e55(486), () => {
            }), _0x77352c[_0x213e55(422)](_0x555a44, 'namespace:inline-command-2', () => {
            });
            const _0x4b6c4f = _0x77352c[_0x213e55(487)]({ 'target': _0x499e87 }), _0x6971e7 = _['reject'](_0x4b6c4f, _0x237e53 => _0x237e53[_0x213e55(488)]);
            expect(_0x6971e7)[_0x213e55(441)]([
                {
                    'name': 'namespace:inline-command-1',
                    'displayName': _0x213e55(489)
                },
                {
                    'name': _0x213e55(490),
                    'displayName': _0x213e55(491)
                },
                {
                    'name': _0x213e55(492),
                    'displayName': 'Namespace: Inline Command 2'
                },
                {
                    'name': _0x213e55(484),
                    'displayName': _0x213e55(493)
                },
                {
                    'name': _0x213e55(483),
                    'displayName': _0x213e55(494)
                }
            ]);
        }), it(_0x23500d(495), () => {
            const _0x3e7223 = _0x23500d;
            _0x77352c['add']('.grandchild', _0x3e7223(483), () => {
            }), _0x77352c[_0x3e7223(422)](_0x3e7223(430), _0x3e7223(484), {
                'displayName': _0x3e7223(496),
                'metadata': {
                    'some': _0x3e7223(497),
                    'object': _0x3e7223(498)
                },
                'didDispatch'() {
                }
            }), _0x77352c[_0x3e7223(422)](_0x3e7223(430), _0x3e7223(490), {
                'name': _0x3e7223(499),
                'displayName': _0x3e7223(500),
                'metadata': {
                    'some': _0x3e7223(497),
                    'object': _0x3e7223(498)
                },
                'didDispatch'() {
                }
            });
            const _0x28e4d3 = _0x77352c[_0x3e7223(487)]({ 'target': _0x499e87 });
            expect(_0x28e4d3)[_0x3e7223(441)]([
                {
                    'displayName': 'Namespace: Command 1',
                    'name': _0x3e7223(483)
                },
                {
                    'displayName': _0x3e7223(496),
                    'metadata': {
                        'some': _0x3e7223(497),
                        'object': _0x3e7223(498)
                    },
                    'name': _0x3e7223(484)
                },
                {
                    'displayName': _0x3e7223(500),
                    'metadata': {
                        'some': _0x3e7223(497),
                        'object': 'data'
                    },
                    'name': 'namespace:command-3'
                }
            ]);
        }), it(_0x23500d(501), () => {
            const _0x48e250 = _0x23500d;
            function _0x1c5536() {
            }
            _0x1c5536['displayName'] = _0x48e250(496), _0x1c5536[_0x48e250(502)] = {
                'some': _0x48e250(497),
                'object': _0x48e250(498)
            }, _0x77352c[_0x48e250(422)](_0x48e250(430), _0x48e250(484), _0x1c5536);
            const _0x3b5424 = _0x77352c[_0x48e250(487)]({ 'target': _0x499e87 });
            expect(_0x3b5424)[_0x48e250(441)]([{
                    'displayName': 'Custom Command 2',
                    'metadata': {
                        'some': _0x48e250(497),
                        'object': _0x48e250(498)
                    },
                    'name': _0x48e250(484)
                }]);
        });
    }), describe(_0xcab45b(503), () => {
        const _0xadf1e5 = _0xcab45b;
        it(_0xadf1e5(504), () => {
            const _0x23451c = _0xadf1e5;
            let _0x2c6a68 = ![];
            _0x77352c[_0x23451c(422)](_0x23451c(430), _0x23451c(431), function (_0x3b4abd) {
                const _0x1ed787 = _0x23451c;
                expect(this)[_0x1ed787(432)](_0x499e87), expect(_0x3b4abd[_0x1ed787(505)])[_0x1ed787(432)](_0x1ed787(431)), expect(_0x3b4abd['eventPhase'])[_0x1ed787(432)](Event[_0x1ed787(434)]), expect(_0x3b4abd[_0x1ed787(435)])[_0x1ed787(432)](_0x499e87), expect(_0x3b4abd[_0x1ed787(436)])[_0x1ed787(432)](_0x499e87), _0x2c6a68 = !![];
            }), _0x77352c[_0x23451c(506)](_0x499e87, _0x23451c(431)), expect(_0x2c6a68)[_0x23451c(432)](!![]);
        }), it('returns a promise if any listeners matched the command', () => {
            const _0x3a0fc0 = _0xadf1e5;
            _0x77352c[_0x3a0fc0(422)](_0x3a0fc0(430), 'command', () => {
            }), expect(_0x77352c['dispatch'](_0x499e87, _0x3a0fc0(431))['constructor'][_0x3a0fc0(507)])[_0x3a0fc0(432)](_0x3a0fc0(508)), expect(_0x77352c[_0x3a0fc0(506)](_0x499e87, _0x3a0fc0(509)))['toBe'](null), expect(_0x77352c[_0x3a0fc0(506)](_0x2dedf0, _0x3a0fc0(431)))[_0x3a0fc0(432)](null);
        }), it('returns a promise that resolves when the listeners resolve', async () => {
            const _0x4f54e7 = _0xadf1e5;
            jasmine[_0x4f54e7(510)](), _0x77352c[_0x4f54e7(422)](_0x4f54e7(430), _0x4f54e7(431), () => 1), _0x77352c[_0x4f54e7(422)]('.grandchild', _0x4f54e7(431), () => Promise[_0x4f54e7(511)](2)), _0x77352c['add'](_0x4f54e7(430), _0x4f54e7(431), () => new Promise(_0x3739db => {
                setTimeout(() => {
                    _0x3739db(3);
                }, 1);
            }));
            const _0x1b8f17 = await _0x77352c[_0x4f54e7(506)](_0x499e87, _0x4f54e7(431));
            expect(_0x1b8f17)[_0x4f54e7(441)]([
                3,
                2,
                1
            ]);
        }), it(_0xadf1e5(512), async () => {
            const _0x352761 = _0xadf1e5;
            jasmine['useRealClock'](), _0x77352c[_0x352761(422)]('.grandchild', _0x352761(431), () => 1), _0x77352c['add'](_0x352761(430), _0x352761(431), () => Promise[_0x352761(511)](2)), _0x77352c[_0x352761(422)]('.grandchild', _0x352761(431), () => new Promise((_0x68d01e, _0x3389be) => {
                setTimeout(() => {
                    _0x3389be(3);
                }, 1);
            }));
            let _0x907c05;
            try {
                _0x907c05 = await _0x77352c['dispatch'](_0x499e87, 'command');
            } catch (_0x4212ad) {
                _0x907c05 = _0x4212ad;
            }
            expect(_0x907c05)[_0x352761(432)](3);
        });
    }), describe('::getSnapshot and ::restoreSnapshot', () => it(_0xcab45b(513), () => {
        const _0x1a88db = _0xcab45b;
        _0x77352c[_0x1a88db(422)]('.parent', _0x1a88db(483), () => {
        }), _0x77352c[_0x1a88db(422)]('.child', _0x1a88db(484), () => {
        });
        const _0x58f612 = _0x77352c[_0x1a88db(514)]();
        _0x77352c[_0x1a88db(422)]('.grandchild', _0x1a88db(490), () => {
        }), expect(_0x77352c['findCommands']({ 'target': _0x499e87 })[_0x1a88db(515)](0, 3))[_0x1a88db(441)]([
            {
                'name': _0x1a88db(490),
                'displayName': _0x1a88db(491)
            },
            {
                'name': _0x1a88db(484),
                'displayName': _0x1a88db(493)
            },
            {
                'name': _0x1a88db(483),
                'displayName': 'Namespace: Command 1'
            }
        ]), _0x77352c[_0x1a88db(516)](_0x58f612), expect(_0x77352c[_0x1a88db(487)]({ 'target': _0x499e87 })[_0x1a88db(515)](0, 2))[_0x1a88db(441)]([
            {
                'name': 'namespace:command-2',
                'displayName': _0x1a88db(493)
            },
            {
                'name': _0x1a88db(483),
                'displayName': _0x1a88db(494)
            }
        ]), _0x77352c[_0x1a88db(422)]('.grandchild', _0x1a88db(490), () => {
        }), _0x77352c[_0x1a88db(516)](_0x58f612), expect(_0x77352c['findCommands']({ 'target': _0x499e87 })[_0x1a88db(515)](0, 2))['toEqual']([
            {
                'name': _0x1a88db(484),
                'displayName': _0x1a88db(493)
            },
            {
                'name': 'namespace:command-1',
                'displayName': _0x1a88db(494)
            }
        ]);
    })), describe(_0xcab45b(517), () => it(_0xcab45b(518), () => {
        const _0x3c01c = _0xcab45b, _0x21c25c = new CommandRegistry(), _0x64d95c = jasmine[_0x3c01c(459)](_0x3c01c(519));
        _0x21c25c['add'](_0x3c01c(430), _0x3c01c(465), _0x64d95c), _0x499e87[_0x3c01c(437)](new CustomEvent('command-1', { 'bubbles': !![] })), expect(_0x64d95c)[_0x3c01c(520)]['toHaveBeenCalled'](), _0x21c25c[_0x3c01c(427)](_0x2dedf0), _0x499e87['dispatchEvent'](new CustomEvent(_0x3c01c(465), { 'bubbles': !![] })), expect(_0x64d95c)[_0x3c01c(452)]();
    }));
});