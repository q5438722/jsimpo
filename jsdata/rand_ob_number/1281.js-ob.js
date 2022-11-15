const CommandRegistry = require('../src/command-registry'), _ = require('underscore-plus');
describe('CommandRegistry', () => {
    let _0x37dc21, _0x33aeec, _0x371679, _0x5af515;
    beforeEach(() => {
        _0x33aeec = document['createElement']('div'), _0x371679 = document['createElement']('div'), _0x5af515 = document['createElement']('div'), _0x33aeec['classList']['add']('parent'), _0x371679['classList']['add']('child'), _0x5af515['classList']['add']('grandchild'), _0x371679['appendChild'](_0x5af515), _0x33aeec['appendChild'](_0x371679), document['querySelector']('#jasmine-content')['appendChild'](_0x33aeec), _0x37dc21 = new CommandRegistry(), _0x37dc21['attach'](_0x33aeec);
    }), afterEach(() => _0x37dc21['destroy']()), describe('when\x20a\x20command\x20event\x20is\x20dispatched\x20on\x20an\x20element', () => {
        it('invokes\x20callbacks\x20with\x20selectors\x20matching\x20the\x20target', () => {
            let _0xae5fa1 = ![];
            _0x37dc21['add']('.grandchild', 'command', function (_0x47130b) {
                expect(this)['toBe'](_0x5af515), expect(_0x47130b['type'])['toBe']('command'), expect(_0x47130b['eventPhase'])['toBe'](Event['BUBBLING_PHASE']), expect(_0x47130b['target'])['toBe'](_0x5af515), expect(_0x47130b['currentTarget'])['toBe'](_0x5af515), _0xae5fa1 = !![];
            }), _0x5af515['dispatchEvent'](new CustomEvent('command', { 'bubbles': !![] })), expect(_0xae5fa1)['toBe'](!![]);
        }), it('invokes\x20callbacks\x20with\x20selectors\x20matching\x20ancestors\x20of\x20the\x20target', () => {
            const _0xaaf0da = [];
            _0x37dc21['add']('.child', 'command', function (_0x46bd6e) {
                expect(this)['toBe'](_0x371679), expect(_0x46bd6e['target'])['toBe'](_0x5af515), expect(_0x46bd6e['currentTarget'])['toBe'](_0x371679), _0xaaf0da['push']('child');
            }), _0x37dc21['add']('.parent', 'command', function (_0x32e0a3) {
                expect(this)['toBe'](_0x33aeec), expect(_0x32e0a3['target'])['toBe'](_0x5af515), expect(_0x32e0a3['currentTarget'])['toBe'](_0x33aeec), _0xaaf0da['push']('parent');
            }), _0x5af515['dispatchEvent'](new CustomEvent('command', { 'bubbles': !![] })), expect(_0xaaf0da)['toEqual']([
                'child',
                'parent'
            ]);
        }), it('invokes\x20inline\x20listeners\x20prior\x20to\x20listeners\x20applied\x20via\x20selectors', () => {
            const _0x3767ee = [];
            _0x37dc21['add']('.grandchild', 'command', () => _0x3767ee['push']('grandchild')), _0x37dc21['add'](_0x371679, 'command', () => _0x3767ee['push']('child-inline')), _0x37dc21['add']('.child', 'command', () => _0x3767ee['push']('child')), _0x37dc21['add']('.parent', 'command', () => _0x3767ee['push']('parent')), _0x5af515['dispatchEvent'](new CustomEvent('command', { 'bubbles': !![] })), expect(_0x3767ee)['toEqual']([
                'grandchild',
                'child-inline',
                'child',
                'parent'
            ]);
        }), it('orders\x20multiple\x20matching\x20listeners\x20for\x20an\x20element\x20by\x20selector\x20specificity', () => {
            _0x371679['classList']['add']('foo', 'bar');
            const _0x367d69 = [];
            _0x37dc21['add']('.foo.bar', 'command', () => _0x367d69['push']('.foo.bar')), _0x37dc21['add']('.foo', 'command', () => _0x367d69['push']('.foo')), _0x37dc21['add']('.bar', 'command', () => _0x367d69['push']('.bar')), _0x5af515['dispatchEvent'](new CustomEvent('command', { 'bubbles': !![] })), expect(_0x367d69)['toEqual']([
                '.foo.bar',
                '.bar',
                '.foo'
            ]);
        }), it('orders\x20inline\x20listeners\x20by\x20reverse\x20registration\x20order', () => {
            const _0x231c49 = [];
            _0x37dc21['add'](_0x371679, 'command', () => _0x231c49['push']('child1')), _0x37dc21['add'](_0x371679, 'command', () => _0x231c49['push']('child2')), _0x371679['dispatchEvent'](new CustomEvent('command', { 'bubbles': !![] })), expect(_0x231c49)['toEqual']([
                'child2',
                'child1'
            ]);
        }), it('stops\x20bubbling\x20through\x20ancestors\x20when\x20.stopPropagation()\x20is\x20called\x20on\x20the\x20event', () => {
            const _0x10e957 = [];
            _0x37dc21['add']('.parent', 'command', () => _0x10e957['push']('parent')), _0x37dc21['add']('.child', 'command', () => _0x10e957['push']('child-2')), _0x37dc21['add']('.child', 'command', _0x3b2a26 => {
                _0x10e957['push']('child-1'), _0x3b2a26['stopPropagation']();
            });
            const _0x2e5e8f = new CustomEvent('command', { 'bubbles': !![] });
            spyOn(_0x2e5e8f, 'stopPropagation'), _0x5af515['dispatchEvent'](_0x2e5e8f), expect(_0x10e957)['toEqual']([
                'child-1',
                'child-2'
            ]), expect(_0x2e5e8f['stopPropagation'])['toHaveBeenCalled']();
        }), it('stops\x20invoking\x20callbacks\x20when\x20.stopImmediatePropagation()\x20is\x20called\x20on\x20the\x20event', () => {
            const _0x4083a4 = [];
            _0x37dc21['add']('.parent', 'command', () => _0x4083a4['push']('parent')), _0x37dc21['add']('.child', 'command', () => _0x4083a4['push']('child-2')), _0x37dc21['add']('.child', 'command', _0x4403cc => {
                _0x4083a4['push']('child-1'), _0x4403cc['stopImmediatePropagation']();
            });
            const _0x5a0567 = new CustomEvent('command', { 'bubbles': !![] });
            spyOn(_0x5a0567, 'stopImmediatePropagation'), _0x5af515['dispatchEvent'](_0x5a0567), expect(_0x4083a4)['toEqual'](['child-1']), expect(_0x5a0567['stopImmediatePropagation'])['toHaveBeenCalled']();
        }), it('forwards\x20.preventDefault()\x20calls\x20from\x20the\x20synthetic\x20event\x20to\x20the\x20original', () => {
            _0x37dc21['add']('.child', 'command', _0xb7da7b => _0xb7da7b['preventDefault']());
            const _0x26ac4e = new CustomEvent('command', { 'bubbles': !![] });
            spyOn(_0x26ac4e, 'preventDefault'), _0x5af515['dispatchEvent'](_0x26ac4e), expect(_0x26ac4e['preventDefault'])['toHaveBeenCalled']();
        }), it('forwards\x20.abortKeyBinding()\x20calls\x20from\x20the\x20synthetic\x20event\x20to\x20the\x20original', () => {
            _0x37dc21['add']('.child', 'command', _0x2db441 => _0x2db441['abortKeyBinding']());
            const _0x29bd19 = new CustomEvent('command', { 'bubbles': !![] });
            _0x29bd19['abortKeyBinding'] = jasmine['createSpy']('abortKeyBinding'), _0x5af515['dispatchEvent'](_0x29bd19), expect(_0x29bd19['abortKeyBinding'])['toHaveBeenCalled']();
        }), it('copies\x20non-standard\x20properties\x20from\x20the\x20original\x20event\x20to\x20the\x20synthetic\x20event', () => {
            let _0x411555 = null;
            _0x37dc21['add']('.child', 'command', _0x5e7578 => _0x411555 = _0x5e7578);
            const _0x10ffe1 = new CustomEvent('command', { 'bubbles': !![] });
            _0x10ffe1['nonStandardProperty'] = 'testing', _0x5af515['dispatchEvent'](_0x10ffe1), expect(_0x411555['nonStandardProperty'])['toBe']('testing');
        }), it('allows\x20listeners\x20to\x20be\x20removed\x20via\x20a\x20disposable\x20returned\x20by\x20::add', () => {
            let _0x40df0e = [];
            const _0x33c739 = _0x37dc21['add']('.parent', 'command', () => _0x40df0e['push']('parent')), _0x395531 = _0x37dc21['add']('.child', 'command', () => _0x40df0e['push']('child'));
            _0x33c739['dispose'](), _0x5af515['dispatchEvent'](new CustomEvent('command', { 'bubbles': !![] })), expect(_0x40df0e)['toEqual'](['child']), _0x40df0e = [], _0x395531['dispose'](), _0x5af515['dispatchEvent'](new CustomEvent('command', { 'bubbles': !![] })), expect(_0x40df0e)['toEqual']([]);
        }), it('allows\x20multiple\x20commands\x20to\x20be\x20registered\x20under\x20one\x20selector\x20when\x20called\x20with\x20an\x20object', () => {
            let _0x4dbcf0 = [];
            const _0x4913a7 = _0x37dc21['add']('.child', {
                'command-1'() {
                    _0x4dbcf0['push']('command-1');
                },
                'command-2'() {
                    _0x4dbcf0['push']('command-2');
                }
            });
            _0x5af515['dispatchEvent'](new CustomEvent('command-1', { 'bubbles': !![] })), _0x5af515['dispatchEvent'](new CustomEvent('command-2', { 'bubbles': !![] })), expect(_0x4dbcf0)['toEqual']([
                'command-1',
                'command-2'
            ]), _0x4dbcf0 = [], _0x4913a7['dispose'](), _0x5af515['dispatchEvent'](new CustomEvent('command-1', { 'bubbles': !![] })), _0x5af515['dispatchEvent'](new CustomEvent('command-2', { 'bubbles': !![] })), expect(_0x4dbcf0)['toEqual']([]);
        }), it('invokes\x20callbacks\x20registered\x20with\x20::onWillDispatch\x20and\x20::onDidDispatch', () => {
            const _0x1a73ef = [];
            _0x37dc21['onDidDispatch'](_0x2d16e2 => _0x1a73ef['push']([
                'onDidDispatch',
                _0x2d16e2
            ])), _0x37dc21['add']('.grandchild', 'command', _0x371e19 => _0x1a73ef['push']([
                'listener',
                _0x371e19
            ])), _0x37dc21['onWillDispatch'](_0x2ab4dc => _0x1a73ef['push']([
                'onWillDispatch',
                _0x2ab4dc
            ])), _0x5af515['dispatchEvent'](new CustomEvent('command', { 'bubbles': !![] })), expect(_0x1a73ef[-0x238 * -0x7 + 0x1 * -0x22e4 + 0x135c][-0x1 * -0x2b6 + 0x2 * 0xf53 + -0x10ae * 0x2])['toBe']('onWillDispatch'), expect(_0x1a73ef[-0x5d0 + -0xb78 + 0x1149][-0x1bf4 + -0x1 * -0x17b9 + 0x43b])['toBe']('listener'), expect(_0x1a73ef[-0x25 * 0xe5 + -0x90a + -0x2a25 * -0x1][0x1e62 + 0xa6 * 0x2d + 0xee4 * -0x4])['toBe']('onDidDispatch'), expect(_0x1a73ef[-0x6e9 * -0x1 + -0xbcb * -0x3 + -0x2a4a][-0xc99 + 0xbf7 + 0xa3 * 0x1] === _0x1a73ef[-0x6f6 + 0x10b4 + -0x9bd][-0x1 * 0x1861 + 0xaa8 + 0x1f6 * 0x7] && _0x1a73ef[-0x58f + 0xd0f * -0x1 + 0x129f][-0xa54 + -0x23ef + -0x8d * -0x54] === _0x1a73ef[0x7 * -0x4a2 + 0x1 * 0x16b5 + 0x9bb][-0x72d * -0x5 + -0xfdc + -0x1404])['toBe'](!![]), expect(_0x1a73ef[0x1 * 0x19c7 + 0x1 * -0x22a5 + -0x5 * -0x1c6][-0x217e + -0x2 * 0x1217 + 0x45ad]['constructor'])['toBe'](CustomEvent), expect(_0x1a73ef[-0x232 + 0x10 * 0x80 + 0x1 * -0x5ce][0x2614 * -0x1 + -0x577 * -0x1 + 0x209e]['target'])['toBe'](_0x5af515);
        });
    }), describe('::add(selector,\x20commandName,\x20callback)', () => {
        it('throws\x20an\x20error\x20when\x20called\x20with\x20an\x20invalid\x20selector', () => {
            const _0x14949a = '<>';
            let _0x3af35a = null;
            try {
                _0x37dc21['add'](_0x14949a, 'foo:bar', () => {
                });
            } catch (_0x1262a4) {
                _0x3af35a = _0x1262a4;
            }
            expect(_0x3af35a['message'])['toContain'](_0x14949a);
        }), it('throws\x20an\x20error\x20when\x20called\x20with\x20a\x20null\x20callback\x20and\x20selector\x20target', () => {
            const _0x30ff7a = null;
            expect(() => {
                _0x37dc21['add']('.selector', 'foo:bar', _0x30ff7a);
            })['toThrow'](new Error('Cannot\x20register\x20a\x20command\x20with\x20a\x20null\x20listener.'));
        }), it('throws\x20an\x20error\x20when\x20called\x20with\x20a\x20null\x20callback\x20and\x20object\x20target', () => {
            const _0x4f0a67 = null;
            expect(() => {
                _0x37dc21['add'](document['body'], 'foo:bar', _0x4f0a67);
            })['toThrow'](new Error('Cannot\x20register\x20a\x20command\x20with\x20a\x20null\x20listener.'));
        }), it('throws\x20an\x20error\x20when\x20called\x20with\x20an\x20object\x20listener\x20without\x20a\x20didDispatch\x20method', () => {
            const _0x3ac9fe = {
                'title': 'a\x20listener\x20without\x20a\x20didDispatch\x20callback',
                'description': 'this\x20should\x20throw\x20an\x20error'
            };
            expect(() => {
                _0x37dc21['add'](document['body'], 'foo:bar', _0x3ac9fe);
            })['toThrow'](new Error('Listener\x20must\x20be\x20a\x20callback\x20function\x20or\x20an\x20object\x20with\x20a\x20didDispatch\x20method.'));
        });
    }), describe('::findCommands({target})', () => {
        it('returns\x20command\x20descriptors\x20that\x20can\x20be\x20invoked\x20on\x20the\x20target\x20or\x20its\x20ancestors', () => {
            _0x37dc21['add']('.parent', 'namespace:command-1', () => {
            }), _0x37dc21['add']('.child', 'namespace:command-2', () => {
            }), _0x37dc21['add']('.grandchild', 'namespace:command-3', () => {
            }), _0x37dc21['add']('.grandchild.no-match', 'namespace:command-4', () => {
            }), _0x37dc21['add'](_0x5af515, 'namespace:inline-command-1', () => {
            }), _0x37dc21['add'](_0x371679, 'namespace:inline-command-2', () => {
            });
            const _0x559404 = _0x37dc21['findCommands']({ 'target': _0x5af515 }), _0x5ef473 = _['reject'](_0x559404, _0x443ad0 => _0x443ad0['jQuery']);
            expect(_0x5ef473)['toEqual']([
                {
                    'name': 'namespace:inline-command-1',
                    'displayName': 'Namespace:\x20Inline\x20Command\x201'
                },
                {
                    'name': 'namespace:command-3',
                    'displayName': 'Namespace:\x20Command\x203'
                },
                {
                    'name': 'namespace:inline-command-2',
                    'displayName': 'Namespace:\x20Inline\x20Command\x202'
                },
                {
                    'name': 'namespace:command-2',
                    'displayName': 'Namespace:\x20Command\x202'
                },
                {
                    'name': 'namespace:command-1',
                    'displayName': 'Namespace:\x20Command\x201'
                }
            ]);
        }), it('returns\x20command\x20descriptors\x20with\x20arbitrary\x20metadata\x20if\x20set\x20in\x20a\x20listener\x20object', () => {
            _0x37dc21['add']('.grandchild', 'namespace:command-1', () => {
            }), _0x37dc21['add']('.grandchild', 'namespace:command-2', {
                'displayName': 'Custom\x20Command\x202',
                'metadata': {
                    'some': 'other',
                    'object': 'data'
                },
                'didDispatch'() {
                }
            }), _0x37dc21['add']('.grandchild', 'namespace:command-3', {
                'name': 'some:other:incorrect:commandname',
                'displayName': 'Custom\x20Command\x203',
                'metadata': {
                    'some': 'other',
                    'object': 'data'
                },
                'didDispatch'() {
                }
            });
            const _0x25059e = _0x37dc21['findCommands']({ 'target': _0x5af515 });
            expect(_0x25059e)['toEqual']([
                {
                    'displayName': 'Namespace:\x20Command\x201',
                    'name': 'namespace:command-1'
                },
                {
                    'displayName': 'Custom\x20Command\x202',
                    'metadata': {
                        'some': 'other',
                        'object': 'data'
                    },
                    'name': 'namespace:command-2'
                },
                {
                    'displayName': 'Custom\x20Command\x203',
                    'metadata': {
                        'some': 'other',
                        'object': 'data'
                    },
                    'name': 'namespace:command-3'
                }
            ]);
        }), it('returns\x20command\x20descriptors\x20with\x20arbitrary\x20metadata\x20if\x20set\x20on\x20a\x20listener\x20function', () => {
            function _0xae931f() {
            }
            _0xae931f['displayName'] = 'Custom\x20Command\x202', _0xae931f['metadata'] = {
                'some': 'other',
                'object': 'data'
            }, _0x37dc21['add']('.grandchild', 'namespace:command-2', _0xae931f);
            const _0x4a0f11 = _0x37dc21['findCommands']({ 'target': _0x5af515 });
            expect(_0x4a0f11)['toEqual']([{
                    'displayName': 'Custom\x20Command\x202',
                    'metadata': {
                        'some': 'other',
                        'object': 'data'
                    },
                    'name': 'namespace:command-2'
                }]);
        });
    }), describe('::dispatch(target,\x20commandName)', () => {
        it('simulates\x20invocation\x20of\x20the\x20given\x20command\x20', () => {
            let _0xb0671d = ![];
            _0x37dc21['add']('.grandchild', 'command', function (_0x571896) {
                expect(this)['toBe'](_0x5af515), expect(_0x571896['type'])['toBe']('command'), expect(_0x571896['eventPhase'])['toBe'](Event['BUBBLING_PHASE']), expect(_0x571896['target'])['toBe'](_0x5af515), expect(_0x571896['currentTarget'])['toBe'](_0x5af515), _0xb0671d = !![];
            }), _0x37dc21['dispatch'](_0x5af515, 'command'), expect(_0xb0671d)['toBe'](!![]);
        }), it('returns\x20a\x20promise\x20if\x20any\x20listeners\x20matched\x20the\x20command', () => {
            _0x37dc21['add']('.grandchild', 'command', () => {
            }), expect(_0x37dc21['dispatch'](_0x5af515, 'command')['constructor']['name'])['toBe']('Promise'), expect(_0x37dc21['dispatch'](_0x5af515, 'bogus'))['toBe'](null), expect(_0x37dc21['dispatch'](_0x33aeec, 'command'))['toBe'](null);
        }), it('returns\x20a\x20promise\x20that\x20resolves\x20when\x20the\x20listeners\x20resolve', async () => {
            jasmine['useRealClock'](), _0x37dc21['add']('.grandchild', 'command', () => -0x1836 + -0x17 * -0xfa + 0x1c1), _0x37dc21['add']('.grandchild', 'command', () => Promise['resolve'](-0x17b * -0x7 + 0x61 * 0x25 + -0x1860)), _0x37dc21['add']('.grandchild', 'command', () => new Promise(_0xb41228 => {
                setTimeout(() => {
                    _0xb41228(0x12d5 + -0x52d * 0x1 + -0xda5 * 0x1);
                }, 0x49 * 0x1f + -0x77a + -0xae * 0x2);
            }));
            const _0x218d75 = await _0x37dc21['dispatch'](_0x5af515, 'command');
            expect(_0x218d75)['toEqual']([
                -0x255b + -0x46 * 0x18 + 0x2bee,
                -0xe36 + -0x1e4c + 0x1642 * 0x2,
                -0x257 * -0xd + -0x1366 + 0x3ac * -0x3
            ]);
        }), it('returns\x20a\x20promise\x20that\x20rejects\x20when\x20a\x20listener\x20is\x20rejected', async () => {
            jasmine['useRealClock'](), _0x37dc21['add']('.grandchild', 'command', () => 0x122 * 0x19 + 0x159b + -0x31ec), _0x37dc21['add']('.grandchild', 'command', () => Promise['resolve'](-0xa0c * -0x2 + -0xd28 + -0x377 * 0x2)), _0x37dc21['add']('.grandchild', 'command', () => new Promise((_0x2d579c, _0x19588d) => {
                setTimeout(() => {
                    _0x19588d(0x180 + -0x1 * 0x109e + -0x1 * -0xf21);
                }, 0x13e1 + -0xee * -0x23 + -0x1 * 0x346a);
            }));
            let _0x395a40;
            try {
                _0x395a40 = await _0x37dc21['dispatch'](_0x5af515, 'command');
            } catch (_0x4fe569) {
                _0x395a40 = _0x4fe569;
            }
            expect(_0x395a40)['toBe'](0x121d + 0x1db8 + -0x2fd2);
        });
    }), describe('::getSnapshot\x20and\x20::restoreSnapshot', () => it('removes\x20all\x20command\x20handlers\x20except\x20for\x20those\x20in\x20the\x20snapshot', () => {
        _0x37dc21['add']('.parent', 'namespace:command-1', () => {
        }), _0x37dc21['add']('.child', 'namespace:command-2', () => {
        });
        const _0x4c55ec = _0x37dc21['getSnapshot']();
        _0x37dc21['add']('.grandchild', 'namespace:command-3', () => {
        }), expect(_0x37dc21['findCommands']({ 'target': _0x5af515 })['slice'](-0x3da * 0x2 + -0x11b6 * -0x1 + -0xa02, 0x35e * 0x9 + 0x1 * -0x1ce9 + -0x162))['toEqual']([
            {
                'name': 'namespace:command-3',
                'displayName': 'Namespace:\x20Command\x203'
            },
            {
                'name': 'namespace:command-2',
                'displayName': 'Namespace:\x20Command\x202'
            },
            {
                'name': 'namespace:command-1',
                'displayName': 'Namespace:\x20Command\x201'
            }
        ]), _0x37dc21['restoreSnapshot'](_0x4c55ec), expect(_0x37dc21['findCommands']({ 'target': _0x5af515 })['slice'](0x155e * -0x1 + -0x9f2 + 0x1f50, 0x24fc + -0x1 * -0x1baf + -0x40a9))['toEqual']([
            {
                'name': 'namespace:command-2',
                'displayName': 'Namespace:\x20Command\x202'
            },
            {
                'name': 'namespace:command-1',
                'displayName': 'Namespace:\x20Command\x201'
            }
        ]), _0x37dc21['add']('.grandchild', 'namespace:command-3', () => {
        }), _0x37dc21['restoreSnapshot'](_0x4c55ec), expect(_0x37dc21['findCommands']({ 'target': _0x5af515 })['slice'](0x1 * -0x14e7 + 0x5 * -0x332 + -0x9 * -0x419, -0x90a + 0x4 * -0x815 + 0x2960))['toEqual']([
            {
                'name': 'namespace:command-2',
                'displayName': 'Namespace:\x20Command\x202'
            },
            {
                'name': 'namespace:command-1',
                'displayName': 'Namespace:\x20Command\x201'
            }
        ]);
    })), describe('::attach(rootNode)', () => it('adds\x20event\x20listeners\x20for\x20any\x20previously-added\x20commands', () => {
        const _0x92cf50 = new CommandRegistry(), _0x28917a = jasmine['createSpy']('command-callback');
        _0x92cf50['add']('.grandchild', 'command-1', _0x28917a), _0x5af515['dispatchEvent'](new CustomEvent('command-1', { 'bubbles': !![] })), expect(_0x28917a)['not']['toHaveBeenCalled'](), _0x92cf50['attach'](_0x33aeec), _0x5af515['dispatchEvent'](new CustomEvent('command-1', { 'bubbles': !![] })), expect(_0x28917a)['toHaveBeenCalled']();
    }));
});
