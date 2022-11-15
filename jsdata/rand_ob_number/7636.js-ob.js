import _0x8c10ce from 'vue';
describe('Options\x20_scopeId', () => {
    it('should\x20add\x20scopeId\x20attributes', () => {
        const _0x95645e = new _0x8c10ce({
            '_scopeId': 'foo',
            'template': '<div><p><span></span></p></div>'
        })['$mount']();
        expect(_0x95645e['$el']['hasAttribute']('foo'))['toBe'](!![]), expect(_0x95645e['$el']['children'][0xb04 + 0xa * 0x28a + 0x5 * -0x748]['hasAttribute']('foo'))['toBe'](!![]), expect(_0x95645e['$el']['children'][0x4 * 0x68a + 0x101 * 0xe + -0x2836]['children'][-0x2448 + 0x22dc + -0x1 * -0x16c]['hasAttribute']('foo'))['toBe'](!![]);
    }), it('should\x20add\x20scopedId\x20attributes\x20from\x20both\x20parent\x20and\x20child\x20on\x20child\x20root', () => {
        const _0x3ba5ec = new _0x8c10ce({
            '_scopeId': 'foo',
            'template': '<div><child></child></div>',
            'components': {
                'child': {
                    '_scopeId': 'bar',
                    'template': '<div></div>'
                }
            }
        })['$mount']();
        expect(_0x3ba5ec['$el']['children'][-0x1 * 0x1817 + 0xa * 0xc5 + -0x577 * -0x3]['hasAttribute']('foo'))['toBe'](!![]), expect(_0x3ba5ec['$el']['children'][-0xabc + 0x1a0c + -0xf50]['hasAttribute']('bar'))['toBe'](!![]);
    }), it('should\x20add\x20scopedId\x20attributes\x20from\x20both\x20parent\x20and\x20child\x20on\x20slot\x20contents', () => {
        const _0x54da60 = new _0x8c10ce({
            '_scopeId': 'foo',
            'template': '<div><child><p>hi</p></child></div>',
            'components': {
                'child': {
                    '_scopeId': 'bar',
                    'template': '<div><slot></slot></div>'
                }
            }
        })['$mount']();
        expect(_0x54da60['$el']['children'][-0x966 + -0x2 * -0xba1 + -0xddc]['children'][-0xd * -0xef + 0x206e + -0x3 * 0xedb]['hasAttribute']('foo'))['toBe'](!![]), expect(_0x54da60['$el']['children'][-0x22c4 + 0x1af6 + 0x7ce]['children'][-0xdf * 0x12 + -0x16ef + -0xcdf * -0x3]['hasAttribute']('bar'))['toBe'](!![]);
    }), it('should\x20not\x20discard\x20parent\x20scopeId\x20when\x20component\x20root\x20element\x20is\x20replaced', _0xb72ce7 => {
        const _0x3068b2 = new _0x8c10ce({
                '_scopeId': 'data-1',
                'template': '<div><child\x20ref=\x22child\x22\x20/></div>',
                'components': {
                    'child': {
                        '_scopeId': 'data-2',
                        'data': () => ({ 'show': !![] }),
                        'template': '<div\x20v-if=\x22show\x22></div>'
                    }
                }
            })['$mount'](), _0x31476f = _0x3068b2['$refs']['child'];
        expect(_0x31476f['$el']['hasAttribute']('data-1'))['toBe'](!![]), expect(_0x31476f['$el']['hasAttribute']('data-2'))['toBe'](!![]), _0x31476f['show'] = ![], waitForUpdate(() => {
            _0x31476f['show'] = !![];
        })['then'](() => {
            expect(_0x31476f['$el']['hasAttribute']('data-1'))['toBe'](!![]), expect(_0x31476f['$el']['hasAttribute']('data-2'))['toBe'](!![]);
        })['then'](_0xb72ce7);
    }), it('should\x20work\x20on\x20functional\x20components', () => {
        const _0x21f6f3 = {
                'functional': !![],
                '_scopeId': 'child',
                'render'(_0x2d69a2) {
                    return _0x2d69a2('div', { 'class': 'child' }, [_0x2d69a2('span', { 'class': 'child' }, 'child')]);
                }
            }, _0x141e59 = new _0x8c10ce({
                '_scopeId': 'parent',
                'components': { 'child': _0x21f6f3 },
                'template': '<div><child></child></div>'
            })['$mount']();
        expect(_0x141e59['$el']['hasAttribute']('parent'))['toBe'](!![]);
        const _0x3b26e9 = _0x141e59['$el']['querySelectorAll']('.child');
        []['forEach']['call'](_0x3b26e9, _0x2c0126 => {
            expect(_0x2c0126['hasAttribute']('child'))['toBe'](!![]), expect(_0x2c0126['hasAttribute']('parent'))['toBe'](![]);
        });
    });
});
