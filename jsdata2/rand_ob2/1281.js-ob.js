const _0x3cc8 = [
    'getSnapshot',
    'slice',
    'restoreSnapshot',
    '::attach(rootNode)',
    'adds\x20event\x20listeners\x20for\x20any\x20previously-added\x20commands',
    'command-callback',
    'not',
    '457538bgcVoq',
    '418506XfZqxQ',
    '32852EFMEwY',
    '1dEHszK',
    '106332DnBljr',
    '4ePJBlp',
    '24649WdixLL',
    '2631JshLqX',
    '624043bnxVGp',
    '1mYQGCI',
    '../src/command-registry',
    'underscore-plus',
    'CommandRegistry',
    'createElement',
    'div',
    'add',
    'classList',
    'child',
    'grandchild',
    'appendChild',
    'attach',
    'destroy',
    'when\x20a\x20command\x20event\x20is\x20dispatched\x20on\x20an\x20element',
    '.grandchild',
    'command',
    'toBe',
    'eventPhase',
    'BUBBLING_PHASE',
    'target',
    'currentTarget',
    'dispatchEvent',
    '.child',
    'push',
    '.parent',
    'toEqual',
    'invokes\x20inline\x20listeners\x20prior\x20to\x20listeners\x20applied\x20via\x20selectors',
    'child-inline',
    'parent',
    'orders\x20multiple\x20matching\x20listeners\x20for\x20an\x20element\x20by\x20selector\x20specificity',
    '.foo.bar',
    '.foo',
    '.bar',
    'orders\x20inline\x20listeners\x20by\x20reverse\x20registration\x20order',
    'child-1',
    'child-2',
    'toHaveBeenCalled',
    'stops\x20invoking\x20callbacks\x20when\x20.stopImmediatePropagation()\x20is\x20called\x20on\x20the\x20event',
    'stopImmediatePropagation',
    'forwards\x20.preventDefault()\x20calls\x20from\x20the\x20synthetic\x20event\x20to\x20the\x20original',
    'preventDefault',
    'forwards\x20.abortKeyBinding()\x20calls\x20from\x20the\x20synthetic\x20event\x20to\x20the\x20original',
    'abortKeyBinding',
    'createSpy',
    'copies\x20non-standard\x20properties\x20from\x20the\x20original\x20event\x20to\x20the\x20synthetic\x20event',
    'nonStandardProperty',
    'testing',
    'dispose',
    'allows\x20multiple\x20commands\x20to\x20be\x20registered\x20under\x20one\x20selector\x20when\x20called\x20with\x20an\x20object',
    'command-1',
    'command-2',
    'invokes\x20callbacks\x20registered\x20with\x20::onWillDispatch\x20and\x20::onDidDispatch',
    'onDidDispatch',
    'listener',
    'onWillDispatch',
    'constructor',
    '::add(selector,\x20commandName,\x20callback)',
    'throws\x20an\x20error\x20when\x20called\x20with\x20an\x20invalid\x20selector',
    'foo:bar',
    'message',
    '.selector',
    'toThrow',
    'Cannot\x20register\x20a\x20command\x20with\x20a\x20null\x20listener.',
    'body',
    'this\x20should\x20throw\x20an\x20error',
    'Listener\x20must\x20be\x20a\x20callback\x20function\x20or\x20an\x20object\x20with\x20a\x20didDispatch\x20method.',
    '::findCommands({target})',
    'namespace:command-1',
    'namespace:command-2',
    'namespace:command-4',
    'namespace:inline-command-1',
    'findCommands',
    'jQuery',
    'Namespace:\x20Inline\x20Command\x201',
    'namespace:command-3',
    'Namespace:\x20Command\x203',
    'namespace:inline-command-2',
    'Namespace:\x20Command\x202',
    'Namespace:\x20Command\x201',
    'returns\x20command\x20descriptors\x20with\x20arbitrary\x20metadata\x20if\x20set\x20in\x20a\x20listener\x20object',
    'Custom\x20Command\x202',
    'other',
    'data',
    'some:other:incorrect:commandname',
    'Custom\x20Command\x203',
    'returns\x20command\x20descriptors\x20with\x20arbitrary\x20metadata\x20if\x20set\x20on\x20a\x20listener\x20function',
    'metadata',
    '::dispatch(target,\x20commandName)',
    'simulates\x20invocation\x20of\x20the\x20given\x20command\x20',
    'type',
    'dispatch',
    'name',
    'Promise',
    'bogus',
    'useRealClock',
    'resolve',
    'returns\x20a\x20promise\x20that\x20rejects\x20when\x20a\x20listener\x20is\x20rejected',
    'removes\x20all\x20command\x20handlers\x20except\x20for\x20those\x20in\x20the\x20snapshot'
];
const _0x2ff624 = _0x45b9;
(function (_0x2f20bf, _0x215744) {
    const _0x25176a = _0x45b9;
    while (!![]) {
        try {
            const _0x1818df = parseInt(_0x25176a(0x197)) + parseInt(_0x25176a(0x198)) + parseInt(_0x25176a(0x199)) + parseInt(_0x25176a(0x19a)) * -parseInt(_0x25176a(0x19b)) + parseInt(_0x25176a(0x19c)) * parseInt(_0x25176a(0x19d)) + parseInt(_0x25176a(0x19e)) + -parseInt(_0x25176a(0x19f)) * parseInt(_0x25176a(0x1a0));
            if (_0x1818df === _0x215744)
                break;
            else
                _0x2f20bf['push'](_0x2f20bf['shift']());
        } catch (_0x35e8f0) {
            _0x2f20bf['push'](_0x2f20bf['shift']());
        }
    }
}(_0x3cc8, 0x444c4));
function _0x45b9(_0x25a0a, _0x3222d5) {
    return _0x45b9 = function (_0x3cc8d2, _0x45b9c5) {
        _0x3cc8d2 = _0x3cc8d2 - 0x197;
        let _0x66685 = _0x3cc8[_0x3cc8d2];
        return _0x66685;
    }, _0x45b9(_0x25a0a, _0x3222d5);
}
const CommandRegistry = require(_0x2ff624(0x1a1)), _ = require(_0x2ff624(0x1a2));
describe(_0x2ff624(0x1a3), () => {
    const _0xcab45b = _0x2ff624;
    let _0x77352c, _0x2dedf0, _0x555a44, _0x499e87;
    beforeEach(() => {
        const _0x116552 = _0x45b9;
        _0x2dedf0 = document[_0x116552(0x1a4)](_0x116552(0x1a5)), _0x555a44 = document['createElement'](_0x116552(0x1a5)), _0x499e87 = document[_0x116552(0x1a4)](_0x116552(0x1a5)), _0x2dedf0['classList'][_0x116552(0x1a6)]('parent'), _0x555a44[_0x116552(0x1a7)][_0x116552(0x1a6)](_0x116552(0x1a8)), _0x499e87['classList'][_0x116552(0x1a6)](_0x116552(0x1a9)), _0x555a44[_0x116552(0x1aa)](_0x499e87), _0x2dedf0['appendChild'](_0x555a44), document['querySelector']('#jasmine-content')['appendChild'](_0x2dedf0), _0x77352c = new CommandRegistry(), _0x77352c[_0x116552(0x1ab)](_0x2dedf0);
    }), afterEach(() => _0x77352c[_0xcab45b(0x1ac)]()), describe(_0xcab45b(0x1ad), () => {
        const _0x2f388b = _0xcab45b;
        it('invokes\x20callbacks\x20with\x20selectors\x20matching\x20the\x20target', () => {
            const _0xc345c8 = _0x45b9;
            let _0x24fe08 = ![];
            _0x77352c[_0xc345c8(0x1a6)](_0xc345c8(0x1ae), _0xc345c8(0x1af), function (_0x5c4d14) {
                const _0x5852e8 = _0xc345c8;
                expect(this)['toBe'](_0x499e87), expect(_0x5c4d14['type'])[_0x5852e8(0x1b0)](_0x5852e8(0x1af)), expect(_0x5c4d14[_0x5852e8(0x1b1)])[_0x5852e8(0x1b0)](Event[_0x5852e8(0x1b2)]), expect(_0x5c4d14[_0x5852e8(0x1b3)])[_0x5852e8(0x1b0)](_0x499e87), expect(_0x5c4d14[_0x5852e8(0x1b4)])[_0x5852e8(0x1b0)](_0x499e87), _0x24fe08 = !![];
            }), _0x499e87[_0xc345c8(0x1b5)](new CustomEvent(_0xc345c8(0x1af), { 'bubbles': !![] })), expect(_0x24fe08)[_0xc345c8(0x1b0)](!![]);
        }), it('invokes\x20callbacks\x20with\x20selectors\x20matching\x20ancestors\x20of\x20the\x20target', () => {
            const _0x3a2248 = _0x45b9, _0xe001bf = [];
            _0x77352c[_0x3a2248(0x1a6)](_0x3a2248(0x1b6), _0x3a2248(0x1af), function (_0x5d9249) {
                const _0x18d28e = _0x3a2248;
                expect(this)['toBe'](_0x555a44), expect(_0x5d9249[_0x18d28e(0x1b3)])[_0x18d28e(0x1b0)](_0x499e87), expect(_0x5d9249[_0x18d28e(0x1b4)])['toBe'](_0x555a44), _0xe001bf[_0x18d28e(0x1b7)](_0x18d28e(0x1a8));
            }), _0x77352c[_0x3a2248(0x1a6)](_0x3a2248(0x1b8), 'command', function (_0x3818e3) {
                const _0x350eb0 = _0x3a2248;
                expect(this)[_0x350eb0(0x1b0)](_0x2dedf0), expect(_0x3818e3[_0x350eb0(0x1b3)])[_0x350eb0(0x1b0)](_0x499e87), expect(_0x3818e3['currentTarget'])[_0x350eb0(0x1b0)](_0x2dedf0), _0xe001bf[_0x350eb0(0x1b7)]('parent');
            }), _0x499e87[_0x3a2248(0x1b5)](new CustomEvent('command', { 'bubbles': !![] })), expect(_0xe001bf)[_0x3a2248(0x1b9)]([
                _0x3a2248(0x1a8),
                'parent'
            ]);
        }), it(_0x2f388b(0x1ba), () => {
            const _0x20afbd = _0x2f388b, _0x4baf55 = [];
            _0x77352c[_0x20afbd(0x1a6)]('.grandchild', 'command', () => _0x4baf55[_0x20afbd(0x1b7)](_0x20afbd(0x1a9))), _0x77352c[_0x20afbd(0x1a6)](_0x555a44, 'command', () => _0x4baf55[_0x20afbd(0x1b7)](_0x20afbd(0x1bb))), _0x77352c[_0x20afbd(0x1a6)]('.child', _0x20afbd(0x1af), () => _0x4baf55[_0x20afbd(0x1b7)](_0x20afbd(0x1a8))), _0x77352c[_0x20afbd(0x1a6)]('.parent', _0x20afbd(0x1af), () => _0x4baf55[_0x20afbd(0x1b7)](_0x20afbd(0x1bc))), _0x499e87[_0x20afbd(0x1b5)](new CustomEvent(_0x20afbd(0x1af), { 'bubbles': !![] })), expect(_0x4baf55)[_0x20afbd(0x1b9)]([
                _0x20afbd(0x1a9),
                _0x20afbd(0x1bb),
                'child',
                'parent'
            ]);
        }), it(_0x2f388b(0x1bd), () => {
            const _0xdb82af = _0x2f388b;
            _0x555a44[_0xdb82af(0x1a7)][_0xdb82af(0x1a6)]('foo', 'bar');
            const _0x1cf6e3 = [];
            _0x77352c[_0xdb82af(0x1a6)]('.foo.bar', 'command', () => _0x1cf6e3['push'](_0xdb82af(0x1be))), _0x77352c['add'](_0xdb82af(0x1bf), _0xdb82af(0x1af), () => _0x1cf6e3[_0xdb82af(0x1b7)]('.foo')), _0x77352c[_0xdb82af(0x1a6)](_0xdb82af(0x1c0), _0xdb82af(0x1af), () => _0x1cf6e3[_0xdb82af(0x1b7)](_0xdb82af(0x1c0))), _0x499e87['dispatchEvent'](new CustomEvent(_0xdb82af(0x1af), { 'bubbles': !![] })), expect(_0x1cf6e3)[_0xdb82af(0x1b9)]([
                '.foo.bar',
                _0xdb82af(0x1c0),
                _0xdb82af(0x1bf)
            ]);
        }), it(_0x2f388b(0x1c1), () => {
            const _0x475f57 = _0x2f388b, _0x269fc8 = [];
            _0x77352c['add'](_0x555a44, _0x475f57(0x1af), () => _0x269fc8[_0x475f57(0x1b7)]('child1')), _0x77352c['add'](_0x555a44, _0x475f57(0x1af), () => _0x269fc8[_0x475f57(0x1b7)]('child2')), _0x555a44[_0x475f57(0x1b5)](new CustomEvent(_0x475f57(0x1af), { 'bubbles': !![] })), expect(_0x269fc8)[_0x475f57(0x1b9)]([
                'child2',
                'child1'
            ]);
        }), it('stops\x20bubbling\x20through\x20ancestors\x20when\x20.stopPropagation()\x20is\x20called\x20on\x20the\x20event', () => {
            const _0x10c648 = _0x2f388b, _0x217f8b = [];
            _0x77352c[_0x10c648(0x1a6)](_0x10c648(0x1b8), _0x10c648(0x1af), () => _0x217f8b[_0x10c648(0x1b7)]('parent')), _0x77352c[_0x10c648(0x1a6)](_0x10c648(0x1b6), _0x10c648(0x1af), () => _0x217f8b[_0x10c648(0x1b7)]('child-2')), _0x77352c[_0x10c648(0x1a6)](_0x10c648(0x1b6), _0x10c648(0x1af), _0x626601 => {
                const _0x106cf0 = _0x10c648;
                _0x217f8b[_0x106cf0(0x1b7)](_0x106cf0(0x1c2)), _0x626601['stopPropagation']();
            });
            const _0x47f70c = new CustomEvent('command', { 'bubbles': !![] });
            spyOn(_0x47f70c, 'stopPropagation'), _0x499e87[_0x10c648(0x1b5)](_0x47f70c), expect(_0x217f8b)[_0x10c648(0x1b9)]([
                _0x10c648(0x1c2),
                _0x10c648(0x1c3)
            ]), expect(_0x47f70c['stopPropagation'])[_0x10c648(0x1c4)]();
        }), it(_0x2f388b(0x1c5), () => {
            const _0x5b0c76 = _0x2f388b, _0x4d30b8 = [];
            _0x77352c[_0x5b0c76(0x1a6)](_0x5b0c76(0x1b8), _0x5b0c76(0x1af), () => _0x4d30b8[_0x5b0c76(0x1b7)]('parent')), _0x77352c[_0x5b0c76(0x1a6)]('.child', _0x5b0c76(0x1af), () => _0x4d30b8[_0x5b0c76(0x1b7)](_0x5b0c76(0x1c3))), _0x77352c[_0x5b0c76(0x1a6)](_0x5b0c76(0x1b6), _0x5b0c76(0x1af), _0x1f3968 => {
                const _0x2468ee = _0x5b0c76;
                _0x4d30b8[_0x2468ee(0x1b7)](_0x2468ee(0x1c2)), _0x1f3968[_0x2468ee(0x1c6)]();
            });
            const _0x5a416b = new CustomEvent('command', { 'bubbles': !![] });
            spyOn(_0x5a416b, _0x5b0c76(0x1c6)), _0x499e87['dispatchEvent'](_0x5a416b), expect(_0x4d30b8)[_0x5b0c76(0x1b9)]([_0x5b0c76(0x1c2)]), expect(_0x5a416b[_0x5b0c76(0x1c6)])['toHaveBeenCalled']();
        }), it(_0x2f388b(0x1c7), () => {
            const _0x3f03d7 = _0x2f388b;
            _0x77352c[_0x3f03d7(0x1a6)]('.child', _0x3f03d7(0x1af), _0x10fb29 => _0x10fb29[_0x3f03d7(0x1c8)]());
            const _0x55f7fd = new CustomEvent('command', { 'bubbles': !![] });
            spyOn(_0x55f7fd, 'preventDefault'), _0x499e87['dispatchEvent'](_0x55f7fd), expect(_0x55f7fd[_0x3f03d7(0x1c8)])[_0x3f03d7(0x1c4)]();
        }), it(_0x2f388b(0x1c9), () => {
            const _0x4e9c6a = _0x2f388b;
            _0x77352c['add']('.child', _0x4e9c6a(0x1af), _0x44d06f => _0x44d06f['abortKeyBinding']());
            const _0xd59110 = new CustomEvent('command', { 'bubbles': !![] });
            _0xd59110[_0x4e9c6a(0x1ca)] = jasmine[_0x4e9c6a(0x1cb)](_0x4e9c6a(0x1ca)), _0x499e87['dispatchEvent'](_0xd59110), expect(_0xd59110['abortKeyBinding'])['toHaveBeenCalled']();
        }), it(_0x2f388b(0x1cc), () => {
            const _0x367fe2 = _0x2f388b;
            let _0x4e46ea = null;
            _0x77352c[_0x367fe2(0x1a6)](_0x367fe2(0x1b6), _0x367fe2(0x1af), _0x3b7c09 => _0x4e46ea = _0x3b7c09);
            const _0x187231 = new CustomEvent(_0x367fe2(0x1af), { 'bubbles': !![] });
            _0x187231[_0x367fe2(0x1cd)] = 'testing', _0x499e87[_0x367fe2(0x1b5)](_0x187231), expect(_0x4e46ea[_0x367fe2(0x1cd)])['toBe'](_0x367fe2(0x1ce));
        }), it('allows\x20listeners\x20to\x20be\x20removed\x20via\x20a\x20disposable\x20returned\x20by\x20::add', () => {
            const _0x372a0e = _0x2f388b;
            let _0x296dfb = [];
            const _0x4171e8 = _0x77352c[_0x372a0e(0x1a6)](_0x372a0e(0x1b8), 'command', () => _0x296dfb[_0x372a0e(0x1b7)](_0x372a0e(0x1bc))), _0x577b6f = _0x77352c['add'](_0x372a0e(0x1b6), 'command', () => _0x296dfb['push'](_0x372a0e(0x1a8)));
            _0x4171e8[_0x372a0e(0x1cf)](), _0x499e87[_0x372a0e(0x1b5)](new CustomEvent(_0x372a0e(0x1af), { 'bubbles': !![] })), expect(_0x296dfb)[_0x372a0e(0x1b9)]([_0x372a0e(0x1a8)]), _0x296dfb = [], _0x577b6f[_0x372a0e(0x1cf)](), _0x499e87[_0x372a0e(0x1b5)](new CustomEvent(_0x372a0e(0x1af), { 'bubbles': !![] })), expect(_0x296dfb)[_0x372a0e(0x1b9)]([]);
        }), it(_0x2f388b(0x1d0), () => {
            const _0x4a3a04 = _0x2f388b;
            let _0xba640d = [];
            const _0x3d731c = _0x77352c[_0x4a3a04(0x1a6)](_0x4a3a04(0x1b6), {
                'command-1'() {
                    const _0x4e3267 = _0x4a3a04;
                    _0xba640d['push'](_0x4e3267(0x1d1));
                },
                'command-2'() {
                    const _0x39c343 = _0x4a3a04;
                    _0xba640d[_0x39c343(0x1b7)](_0x39c343(0x1d2));
                }
            });
            _0x499e87[_0x4a3a04(0x1b5)](new CustomEvent('command-1', { 'bubbles': !![] })), _0x499e87[_0x4a3a04(0x1b5)](new CustomEvent('command-2', { 'bubbles': !![] })), expect(_0xba640d)[_0x4a3a04(0x1b9)]([
                _0x4a3a04(0x1d1),
                _0x4a3a04(0x1d2)
            ]), _0xba640d = [], _0x3d731c['dispose'](), _0x499e87[_0x4a3a04(0x1b5)](new CustomEvent(_0x4a3a04(0x1d1), { 'bubbles': !![] })), _0x499e87[_0x4a3a04(0x1b5)](new CustomEvent('command-2', { 'bubbles': !![] })), expect(_0xba640d)[_0x4a3a04(0x1b9)]([]);
        }), it(_0x2f388b(0x1d3), () => {
            const _0x59c095 = _0x2f388b, _0x51be29 = [];
            _0x77352c['onDidDispatch'](_0x248981 => _0x51be29[_0x59c095(0x1b7)]([
                _0x59c095(0x1d4),
                _0x248981
            ])), _0x77352c[_0x59c095(0x1a6)](_0x59c095(0x1ae), _0x59c095(0x1af), _0x5e4563 => _0x51be29[_0x59c095(0x1b7)]([
                _0x59c095(0x1d5),
                _0x5e4563
            ])), _0x77352c['onWillDispatch'](_0x4bd1d4 => _0x51be29['push']([
                _0x59c095(0x1d6),
                _0x4bd1d4
            ])), _0x499e87[_0x59c095(0x1b5)](new CustomEvent(_0x59c095(0x1af), { 'bubbles': !![] })), expect(_0x51be29[0x0][0x0])[_0x59c095(0x1b0)](_0x59c095(0x1d6)), expect(_0x51be29[0x1][0x0])[_0x59c095(0x1b0)](_0x59c095(0x1d5)), expect(_0x51be29[0x2][0x0])[_0x59c095(0x1b0)](_0x59c095(0x1d4)), expect(_0x51be29[0x0][0x1] === _0x51be29[0x1][0x1] && _0x51be29[0x1][0x1] === _0x51be29[0x2][0x1])['toBe'](!![]), expect(_0x51be29[0x0][0x1][_0x59c095(0x1d7)])[_0x59c095(0x1b0)](CustomEvent), expect(_0x51be29[0x0][0x1][_0x59c095(0x1b3)])['toBe'](_0x499e87);
        });
    }), describe(_0xcab45b(0x1d8), () => {
        const _0x5b7bc6 = _0xcab45b;
        it(_0x5b7bc6(0x1d9), () => {
            const _0x268492 = _0x5b7bc6, _0x279b34 = '<>';
            let _0x1c9787 = null;
            try {
                _0x77352c['add'](_0x279b34, _0x268492(0x1da), () => {
                });
            } catch (_0x5f02bc) {
                _0x1c9787 = _0x5f02bc;
            }
            expect(_0x1c9787[_0x268492(0x1db)])['toContain'](_0x279b34);
        }), it('throws\x20an\x20error\x20when\x20called\x20with\x20a\x20null\x20callback\x20and\x20selector\x20target', () => {
            const _0x1dcd5d = _0x5b7bc6, _0x156a99 = null;
            expect(() => {
                const _0x4f455d = _0x45b9;
                _0x77352c[_0x4f455d(0x1a6)](_0x4f455d(0x1dc), _0x4f455d(0x1da), _0x156a99);
            })[_0x1dcd5d(0x1dd)](new Error(_0x1dcd5d(0x1de)));
        }), it('throws\x20an\x20error\x20when\x20called\x20with\x20a\x20null\x20callback\x20and\x20object\x20target', () => {
            const _0x16da3e = _0x5b7bc6, _0x2e1dce = null;
            expect(() => {
                const _0x5f5d79 = _0x45b9;
                _0x77352c['add'](document[_0x5f5d79(0x1df)], _0x5f5d79(0x1da), _0x2e1dce);
            })[_0x16da3e(0x1dd)](new Error('Cannot\x20register\x20a\x20command\x20with\x20a\x20null\x20listener.'));
        }), it('throws\x20an\x20error\x20when\x20called\x20with\x20an\x20object\x20listener\x20without\x20a\x20didDispatch\x20method', () => {
            const _0x1beafd = _0x5b7bc6, _0x50e277 = {
                    'title': 'a\x20listener\x20without\x20a\x20didDispatch\x20callback',
                    'description': _0x1beafd(0x1e0)
                };
            expect(() => {
                const _0x2c6ed7 = _0x1beafd;
                _0x77352c['add'](document[_0x2c6ed7(0x1df)], 'foo:bar', _0x50e277);
            })[_0x1beafd(0x1dd)](new Error(_0x1beafd(0x1e1)));
        });
    }), describe(_0xcab45b(0x1e2), () => {
        const _0x23500d = _0xcab45b;
        it('returns\x20command\x20descriptors\x20that\x20can\x20be\x20invoked\x20on\x20the\x20target\x20or\x20its\x20ancestors', () => {
            const _0x213e55 = _0x45b9;
            _0x77352c[_0x213e55(0x1a6)](_0x213e55(0x1b8), _0x213e55(0x1e3), () => {
            }), _0x77352c['add']('.child', _0x213e55(0x1e4), () => {
            }), _0x77352c[_0x213e55(0x1a6)](_0x213e55(0x1ae), 'namespace:command-3', () => {
            }), _0x77352c[_0x213e55(0x1a6)]('.grandchild.no-match', _0x213e55(0x1e5), () => {
            }), _0x77352c[_0x213e55(0x1a6)](_0x499e87, _0x213e55(0x1e6), () => {
            }), _0x77352c[_0x213e55(0x1a6)](_0x555a44, 'namespace:inline-command-2', () => {
            });
            const _0x4b6c4f = _0x77352c[_0x213e55(0x1e7)]({ 'target': _0x499e87 }), _0x6971e7 = _['reject'](_0x4b6c4f, _0x237e53 => _0x237e53[_0x213e55(0x1e8)]);
            expect(_0x6971e7)[_0x213e55(0x1b9)]([
                {
                    'name': 'namespace:inline-command-1',
                    'displayName': _0x213e55(0x1e9)
                },
                {
                    'name': _0x213e55(0x1ea),
                    'displayName': _0x213e55(0x1eb)
                },
                {
                    'name': _0x213e55(0x1ec),
                    'displayName': 'Namespace:\x20Inline\x20Command\x202'
                },
                {
                    'name': _0x213e55(0x1e4),
                    'displayName': _0x213e55(0x1ed)
                },
                {
                    'name': _0x213e55(0x1e3),
                    'displayName': _0x213e55(0x1ee)
                }
            ]);
        }), it(_0x23500d(0x1ef), () => {
            const _0x3e7223 = _0x23500d;
            _0x77352c['add']('.grandchild', _0x3e7223(0x1e3), () => {
            }), _0x77352c[_0x3e7223(0x1a6)](_0x3e7223(0x1ae), _0x3e7223(0x1e4), {
                'displayName': _0x3e7223(0x1f0),
                'metadata': {
                    'some': _0x3e7223(0x1f1),
                    'object': _0x3e7223(0x1f2)
                },
                'didDispatch'() {
                }
            }), _0x77352c[_0x3e7223(0x1a6)](_0x3e7223(0x1ae), _0x3e7223(0x1ea), {
                'name': _0x3e7223(0x1f3),
                'displayName': _0x3e7223(0x1f4),
                'metadata': {
                    'some': _0x3e7223(0x1f1),
                    'object': _0x3e7223(0x1f2)
                },
                'didDispatch'() {
                }
            });
            const _0x28e4d3 = _0x77352c[_0x3e7223(0x1e7)]({ 'target': _0x499e87 });
            expect(_0x28e4d3)[_0x3e7223(0x1b9)]([
                {
                    'displayName': 'Namespace:\x20Command\x201',
                    'name': _0x3e7223(0x1e3)
                },
                {
                    'displayName': _0x3e7223(0x1f0),
                    'metadata': {
                        'some': _0x3e7223(0x1f1),
                        'object': _0x3e7223(0x1f2)
                    },
                    'name': _0x3e7223(0x1e4)
                },
                {
                    'displayName': _0x3e7223(0x1f4),
                    'metadata': {
                        'some': _0x3e7223(0x1f1),
                        'object': 'data'
                    },
                    'name': 'namespace:command-3'
                }
            ]);
        }), it(_0x23500d(0x1f5), () => {
            const _0x48e250 = _0x23500d;
            function _0x1c5536() {
            }
            _0x1c5536['displayName'] = _0x48e250(0x1f0), _0x1c5536[_0x48e250(0x1f6)] = {
                'some': _0x48e250(0x1f1),
                'object': _0x48e250(0x1f2)
            }, _0x77352c[_0x48e250(0x1a6)](_0x48e250(0x1ae), _0x48e250(0x1e4), _0x1c5536);
            const _0x3b5424 = _0x77352c[_0x48e250(0x1e7)]({ 'target': _0x499e87 });
            expect(_0x3b5424)[_0x48e250(0x1b9)]([{
                    'displayName': 'Custom\x20Command\x202',
                    'metadata': {
                        'some': _0x48e250(0x1f1),
                        'object': _0x48e250(0x1f2)
                    },
                    'name': _0x48e250(0x1e4)
                }]);
        });
    }), describe(_0xcab45b(0x1f7), () => {
        const _0xadf1e5 = _0xcab45b;
        it(_0xadf1e5(0x1f8), () => {
            const _0x23451c = _0xadf1e5;
            let _0x2c6a68 = ![];
            _0x77352c[_0x23451c(0x1a6)](_0x23451c(0x1ae), _0x23451c(0x1af), function (_0x3b4abd) {
                const _0x1ed787 = _0x23451c;
                expect(this)[_0x1ed787(0x1b0)](_0x499e87), expect(_0x3b4abd[_0x1ed787(0x1f9)])[_0x1ed787(0x1b0)](_0x1ed787(0x1af)), expect(_0x3b4abd['eventPhase'])[_0x1ed787(0x1b0)](Event[_0x1ed787(0x1b2)]), expect(_0x3b4abd[_0x1ed787(0x1b3)])[_0x1ed787(0x1b0)](_0x499e87), expect(_0x3b4abd[_0x1ed787(0x1b4)])[_0x1ed787(0x1b0)](_0x499e87), _0x2c6a68 = !![];
            }), _0x77352c[_0x23451c(0x1fa)](_0x499e87, _0x23451c(0x1af)), expect(_0x2c6a68)[_0x23451c(0x1b0)](!![]);
        }), it('returns\x20a\x20promise\x20if\x20any\x20listeners\x20matched\x20the\x20command', () => {
            const _0x3a0fc0 = _0xadf1e5;
            _0x77352c[_0x3a0fc0(0x1a6)](_0x3a0fc0(0x1ae), 'command', () => {
            }), expect(_0x77352c['dispatch'](_0x499e87, _0x3a0fc0(0x1af))['constructor'][_0x3a0fc0(0x1fb)])[_0x3a0fc0(0x1b0)](_0x3a0fc0(0x1fc)), expect(_0x77352c[_0x3a0fc0(0x1fa)](_0x499e87, _0x3a0fc0(0x1fd)))['toBe'](null), expect(_0x77352c[_0x3a0fc0(0x1fa)](_0x2dedf0, _0x3a0fc0(0x1af)))[_0x3a0fc0(0x1b0)](null);
        }), it('returns\x20a\x20promise\x20that\x20resolves\x20when\x20the\x20listeners\x20resolve', async () => {
            const _0x4f54e7 = _0xadf1e5;
            jasmine[_0x4f54e7(0x1fe)](), _0x77352c[_0x4f54e7(0x1a6)](_0x4f54e7(0x1ae), _0x4f54e7(0x1af), () => 0x1), _0x77352c[_0x4f54e7(0x1a6)]('.grandchild', _0x4f54e7(0x1af), () => Promise[_0x4f54e7(0x1ff)](0x2)), _0x77352c['add'](_0x4f54e7(0x1ae), _0x4f54e7(0x1af), () => new Promise(_0x3739db => {
                setTimeout(() => {
                    _0x3739db(0x3);
                }, 0x1);
            }));
            const _0x1b8f17 = await _0x77352c[_0x4f54e7(0x1fa)](_0x499e87, _0x4f54e7(0x1af));
            expect(_0x1b8f17)[_0x4f54e7(0x1b9)]([
                0x3,
                0x2,
                0x1
            ]);
        }), it(_0xadf1e5(0x200), async () => {
            const _0x352761 = _0xadf1e5;
            jasmine['useRealClock'](), _0x77352c[_0x352761(0x1a6)]('.grandchild', _0x352761(0x1af), () => 0x1), _0x77352c['add'](_0x352761(0x1ae), _0x352761(0x1af), () => Promise[_0x352761(0x1ff)](0x2)), _0x77352c[_0x352761(0x1a6)]('.grandchild', _0x352761(0x1af), () => new Promise((_0x68d01e, _0x3389be) => {
                setTimeout(() => {
                    _0x3389be(0x3);
                }, 0x1);
            }));
            let _0x907c05;
            try {
                _0x907c05 = await _0x77352c['dispatch'](_0x499e87, 'command');
            } catch (_0x4212ad) {
                _0x907c05 = _0x4212ad;
            }
            expect(_0x907c05)[_0x352761(0x1b0)](0x3);
        });
    }), describe('::getSnapshot\x20and\x20::restoreSnapshot', () => it(_0xcab45b(0x201), () => {
        const _0x1a88db = _0xcab45b;
        _0x77352c[_0x1a88db(0x1a6)]('.parent', _0x1a88db(0x1e3), () => {
        }), _0x77352c[_0x1a88db(0x1a6)]('.child', _0x1a88db(0x1e4), () => {
        });
        const _0x58f612 = _0x77352c[_0x1a88db(0x202)]();
        _0x77352c[_0x1a88db(0x1a6)]('.grandchild', _0x1a88db(0x1ea), () => {
        }), expect(_0x77352c['findCommands']({ 'target': _0x499e87 })[_0x1a88db(0x203)](0x0, 0x3))[_0x1a88db(0x1b9)]([
            {
                'name': _0x1a88db(0x1ea),
                'displayName': _0x1a88db(0x1eb)
            },
            {
                'name': _0x1a88db(0x1e4),
                'displayName': _0x1a88db(0x1ed)
            },
            {
                'name': _0x1a88db(0x1e3),
                'displayName': 'Namespace:\x20Command\x201'
            }
        ]), _0x77352c[_0x1a88db(0x204)](_0x58f612), expect(_0x77352c[_0x1a88db(0x1e7)]({ 'target': _0x499e87 })[_0x1a88db(0x203)](0x0, 0x2))[_0x1a88db(0x1b9)]([
            {
                'name': 'namespace:command-2',
                'displayName': _0x1a88db(0x1ed)
            },
            {
                'name': _0x1a88db(0x1e3),
                'displayName': _0x1a88db(0x1ee)
            }
        ]), _0x77352c[_0x1a88db(0x1a6)]('.grandchild', _0x1a88db(0x1ea), () => {
        }), _0x77352c[_0x1a88db(0x204)](_0x58f612), expect(_0x77352c['findCommands']({ 'target': _0x499e87 })[_0x1a88db(0x203)](0x0, 0x2))['toEqual']([
            {
                'name': _0x1a88db(0x1e4),
                'displayName': _0x1a88db(0x1ed)
            },
            {
                'name': 'namespace:command-1',
                'displayName': _0x1a88db(0x1ee)
            }
        ]);
    })), describe(_0xcab45b(0x205), () => it(_0xcab45b(0x206), () => {
        const _0x3c01c = _0xcab45b, _0x21c25c = new CommandRegistry(), _0x64d95c = jasmine[_0x3c01c(0x1cb)](_0x3c01c(0x207));
        _0x21c25c['add'](_0x3c01c(0x1ae), _0x3c01c(0x1d1), _0x64d95c), _0x499e87[_0x3c01c(0x1b5)](new CustomEvent('command-1', { 'bubbles': !![] })), expect(_0x64d95c)[_0x3c01c(0x208)]['toHaveBeenCalled'](), _0x21c25c[_0x3c01c(0x1ab)](_0x2dedf0), _0x499e87['dispatchEvent'](new CustomEvent(_0x3c01c(0x1d1), { 'bubbles': !![] })), expect(_0x64d95c)[_0x3c01c(0x1c4)]();
    }));
});
