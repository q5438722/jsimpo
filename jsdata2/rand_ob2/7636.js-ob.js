const _0x8761 = [
    '$el',
    'hasAttribute',
    'foo',
    'toBe',
    'children',
    'should\x20add\x20scopedId\x20attributes\x20from\x20both\x20parent\x20and\x20child\x20on\x20child\x20root',
    'bar',
    '<div></div>',
    'should\x20add\x20scopedId\x20attributes\x20from\x20both\x20parent\x20and\x20child\x20on\x20slot\x20contents',
    '<div><child><p>hi</p></child></div>',
    '<div><slot></slot></div>',
    'should\x20not\x20discard\x20parent\x20scopeId\x20when\x20component\x20root\x20element\x20is\x20replaced',
    '<div><child\x20ref=\x22child\x22\x20/></div>',
    'data-2',
    '<div\x20v-if=\x22show\x22></div>',
    '$refs',
    'child',
    'data-1',
    'show',
    'then',
    'div',
    'span',
    'parent',
    '<div><child></child></div>',
    '.child',
    'forEach',
    'call',
    '1370zVNkig',
    '259TymVAP',
    '47LEtkmB',
    '6938wioGgd',
    '19489aJcNVM',
    '360649exnRjS',
    '3qRFHgb',
    '1398186RzDmCC',
    '68304UicILl',
    '1BGEOkr',
    '1623205djuCjU',
    'Options\x20_scopeId',
    'should\x20add\x20scopeId\x20attributes',
    '<div><p><span></span></p></div>',
    '$mount'
];
const _0x29cc76 = _0x4e72;
(function (_0x4ba015, _0x28e217) {
    const _0x152bab = _0x4e72;
    while (!![]) {
        try {
            const _0x120278 = parseInt(_0x152bab(0x1a3)) * parseInt(_0x152bab(0x1a4)) + -parseInt(_0x152bab(0x1a5)) * parseInt(_0x152bab(0x1a6)) + -parseInt(_0x152bab(0x1a7)) + -parseInt(_0x152bab(0x1a8)) * -parseInt(_0x152bab(0x1a9)) + parseInt(_0x152bab(0x1aa)) + parseInt(_0x152bab(0x1ab)) + parseInt(_0x152bab(0x1ac)) * -parseInt(_0x152bab(0x1ad));
            if (_0x120278 === _0x28e217)
                break;
            else
                _0x4ba015['push'](_0x4ba015['shift']());
        } catch (_0xd8acab) {
            _0x4ba015['push'](_0x4ba015['shift']());
        }
    }
}(_0x8761, 0xe4257));
import _0x24b93d from 'vue';
function _0x4e72(_0x555440, _0x47213f) {
    return _0x4e72 = function (_0x876149, _0x4e722f) {
        _0x876149 = _0x876149 - 0x1a3;
        let _0x351633 = _0x8761[_0x876149];
        return _0x351633;
    }, _0x4e72(_0x555440, _0x47213f);
}
describe(_0x29cc76(0x1ae), () => {
    const _0x3b95b3 = _0x29cc76;
    it(_0x3b95b3(0x1af), () => {
        const _0x1a7247 = _0x3b95b3, _0x5108b7 = new _0x24b93d({
                '_scopeId': 'foo',
                'template': _0x1a7247(0x1b0)
            })[_0x1a7247(0x1b1)]();
        expect(_0x5108b7[_0x1a7247(0x1b2)][_0x1a7247(0x1b3)](_0x1a7247(0x1b4)))['toBe'](!![]), expect(_0x5108b7['$el']['children'][0x0]['hasAttribute']('foo'))[_0x1a7247(0x1b5)](!![]), expect(_0x5108b7[_0x1a7247(0x1b2)][_0x1a7247(0x1b6)][0x0][_0x1a7247(0x1b6)][0x0][_0x1a7247(0x1b3)]('foo'))[_0x1a7247(0x1b5)](!![]);
    }), it(_0x3b95b3(0x1b7), () => {
        const _0x4f3bc3 = _0x3b95b3, _0x2eb388 = new _0x24b93d({
                '_scopeId': 'foo',
                'template': '<div><child></child></div>',
                'components': {
                    'child': {
                        '_scopeId': _0x4f3bc3(0x1b8),
                        'template': _0x4f3bc3(0x1b9)
                    }
                }
            })['$mount']();
        expect(_0x2eb388[_0x4f3bc3(0x1b2)][_0x4f3bc3(0x1b6)][0x0][_0x4f3bc3(0x1b3)](_0x4f3bc3(0x1b4)))['toBe'](!![]), expect(_0x2eb388[_0x4f3bc3(0x1b2)][_0x4f3bc3(0x1b6)][0x0][_0x4f3bc3(0x1b3)](_0x4f3bc3(0x1b8)))[_0x4f3bc3(0x1b5)](!![]);
    }), it(_0x3b95b3(0x1ba), () => {
        const _0x14346a = _0x3b95b3, _0x475903 = new _0x24b93d({
                '_scopeId': 'foo',
                'template': _0x14346a(0x1bb),
                'components': {
                    'child': {
                        '_scopeId': _0x14346a(0x1b8),
                        'template': _0x14346a(0x1bc)
                    }
                }
            })[_0x14346a(0x1b1)]();
        expect(_0x475903[_0x14346a(0x1b2)][_0x14346a(0x1b6)][0x0][_0x14346a(0x1b6)][0x0][_0x14346a(0x1b3)](_0x14346a(0x1b4)))[_0x14346a(0x1b5)](!![]), expect(_0x475903[_0x14346a(0x1b2)][_0x14346a(0x1b6)][0x0][_0x14346a(0x1b6)][0x0][_0x14346a(0x1b3)]('bar'))[_0x14346a(0x1b5)](!![]);
    }), it(_0x3b95b3(0x1bd), _0x5af580 => {
        const _0x23e315 = _0x3b95b3, _0x465ae8 = new _0x24b93d({
                '_scopeId': 'data-1',
                'template': _0x23e315(0x1be),
                'components': {
                    'child': {
                        '_scopeId': _0x23e315(0x1bf),
                        'data': () => ({ 'show': !![] }),
                        'template': _0x23e315(0x1c0)
                    }
                }
            })[_0x23e315(0x1b1)](), _0x3124de = _0x465ae8[_0x23e315(0x1c1)][_0x23e315(0x1c2)];
        expect(_0x3124de[_0x23e315(0x1b2)][_0x23e315(0x1b3)](_0x23e315(0x1c3)))['toBe'](!![]), expect(_0x3124de[_0x23e315(0x1b2)]['hasAttribute']('data-2'))['toBe'](!![]), _0x3124de[_0x23e315(0x1c4)] = ![], waitForUpdate(() => {
            const _0x25f2ba = _0x23e315;
            _0x3124de[_0x25f2ba(0x1c4)] = !![];
        })['then'](() => {
            const _0x51d3c2 = _0x23e315;
            expect(_0x3124de[_0x51d3c2(0x1b2)][_0x51d3c2(0x1b3)]('data-1'))[_0x51d3c2(0x1b5)](!![]), expect(_0x3124de['$el']['hasAttribute'](_0x51d3c2(0x1bf)))['toBe'](!![]);
        })[_0x23e315(0x1c5)](_0x5af580);
    }), it('should\x20work\x20on\x20functional\x20components', () => {
        const _0x356f22 = _0x3b95b3, _0x2142a6 = {
                'functional': !![],
                '_scopeId': _0x356f22(0x1c2),
                'render'(_0x3b91e3) {
                    const _0x2efd40 = _0x356f22;
                    return _0x3b91e3(_0x2efd40(0x1c6), { 'class': 'child' }, [_0x3b91e3(_0x2efd40(0x1c7), { 'class': _0x2efd40(0x1c2) }, _0x2efd40(0x1c2))]);
                }
            }, _0xc813ed = new _0x24b93d({
                '_scopeId': _0x356f22(0x1c8),
                'components': { 'child': _0x2142a6 },
                'template': _0x356f22(0x1c9)
            })['$mount']();
        expect(_0xc813ed[_0x356f22(0x1b2)]['hasAttribute']('parent'))[_0x356f22(0x1b5)](!![]);
        const _0x592e1a = _0xc813ed[_0x356f22(0x1b2)]['querySelectorAll'](_0x356f22(0x1ca));
        [][_0x356f22(0x1cb)][_0x356f22(0x1cc)](_0x592e1a, _0x420072 => {
            const _0x3d87d0 = _0x356f22;
            expect(_0x420072[_0x3d87d0(0x1b3)](_0x3d87d0(0x1c2)))[_0x3d87d0(0x1b5)](!![]), expect(_0x420072[_0x3d87d0(0x1b3)]('parent'))[_0x3d87d0(0x1b5)](![]);
        });
    });
});
