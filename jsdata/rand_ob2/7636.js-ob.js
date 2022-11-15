const _0x225d = [
    'querySelectorAll',
    '.child',
    'forEach',
    'call',
    '3kveNRp',
    '420349VCuCyp',
    '5keYtyx',
    '42947SxbwpL',
    '2WMwVtM',
    '645098xlOSZN',
    '530197UbtaOf',
    '3wbIEKz',
    '1apYsYl',
    '494906NCSoTk',
    '1KyozlB',
    '727340fdwGyT',
    '9QVArIO',
    '431369nBscXh',
    'Options\x20_scopeId',
    'should\x20add\x20scopeId\x20attributes',
    'hasAttribute',
    'foo',
    'toBe',
    '$el',
    'children',
    'should\x20add\x20scopedId\x20attributes\x20from\x20both\x20parent\x20and\x20child\x20on\x20child\x20root',
    '<div><child></child></div>',
    'bar',
    '$mount',
    'should\x20add\x20scopedId\x20attributes\x20from\x20both\x20parent\x20and\x20child\x20on\x20slot\x20contents',
    '<div><child><p>hi</p></child></div>',
    'should\x20not\x20discard\x20parent\x20scopeId\x20when\x20component\x20root\x20element\x20is\x20replaced',
    'data-2',
    '<div\x20v-if=\x22show\x22></div>',
    '$refs',
    'child',
    'show',
    'then',
    'should\x20work\x20on\x20functional\x20components',
    'div',
    'span',
    'parent'
];
const _0x391f63 = _0x394f;
function _0x394f(_0x24265c, _0x36d10d) {
    return _0x394f = function (_0x225d48, _0x394f49) {
        _0x225d48 = _0x225d48 - 0xa9;
        let _0x108342 = _0x225d[_0x225d48];
        return _0x108342;
    }, _0x394f(_0x24265c, _0x36d10d);
}
(function (_0x39d766, _0x299447) {
    const _0x4912e7 = _0x394f;
    while (!![]) {
        try {
            const _0x2e69a1 = -parseInt(_0x4912e7(0xa9)) * -parseInt(_0x4912e7(0xaa)) + -parseInt(_0x4912e7(0xab)) * parseInt(_0x4912e7(0xac)) + parseInt(_0x4912e7(0xad)) * -parseInt(_0x4912e7(0xae)) + -parseInt(_0x4912e7(0xaf)) * parseInt(_0x4912e7(0xb0)) + -parseInt(_0x4912e7(0xb1)) * parseInt(_0x4912e7(0xb2)) + parseInt(_0x4912e7(0xb3)) * -parseInt(_0x4912e7(0xb4)) + parseInt(_0x4912e7(0xb5)) * parseInt(_0x4912e7(0xb6));
            if (_0x2e69a1 === _0x299447)
                break;
            else
                _0x39d766['push'](_0x39d766['shift']());
        } catch (_0xbc5cc3) {
            _0x39d766['push'](_0x39d766['shift']());
        }
    }
}(_0x225d, 0xc9900));
import _0x2a9bc1 from 'vue';
describe(_0x391f63(0xb7), () => {
    const _0x14da81 = _0x391f63;
    it(_0x14da81(0xb8), () => {
        const _0x413c1e = _0x14da81, _0x32d95b = new _0x2a9bc1({
                '_scopeId': 'foo',
                'template': '<div><p><span></span></p></div>'
            })['$mount']();
        expect(_0x32d95b['$el'][_0x413c1e(0xb9)](_0x413c1e(0xba)))[_0x413c1e(0xbb)](!![]), expect(_0x32d95b[_0x413c1e(0xbc)][_0x413c1e(0xbd)][0x0]['hasAttribute'](_0x413c1e(0xba)))[_0x413c1e(0xbb)](!![]), expect(_0x32d95b[_0x413c1e(0xbc)]['children'][0x0]['children'][0x0]['hasAttribute'](_0x413c1e(0xba)))[_0x413c1e(0xbb)](!![]);
    }), it(_0x14da81(0xbe), () => {
        const _0x5849e9 = _0x14da81, _0x4c270d = new _0x2a9bc1({
                '_scopeId': 'foo',
                'template': _0x5849e9(0xbf),
                'components': {
                    'child': {
                        '_scopeId': _0x5849e9(0xc0),
                        'template': '<div></div>'
                    }
                }
            })[_0x5849e9(0xc1)]();
        expect(_0x4c270d[_0x5849e9(0xbc)][_0x5849e9(0xbd)][0x0][_0x5849e9(0xb9)]('foo'))[_0x5849e9(0xbb)](!![]), expect(_0x4c270d[_0x5849e9(0xbc)][_0x5849e9(0xbd)][0x0]['hasAttribute']('bar'))['toBe'](!![]);
    }), it(_0x14da81(0xc2), () => {
        const _0x1e201c = _0x14da81, _0x5c3554 = new _0x2a9bc1({
                '_scopeId': _0x1e201c(0xba),
                'template': _0x1e201c(0xc3),
                'components': {
                    'child': {
                        '_scopeId': 'bar',
                        'template': '<div><slot></slot></div>'
                    }
                }
            })[_0x1e201c(0xc1)]();
        expect(_0x5c3554[_0x1e201c(0xbc)]['children'][0x0][_0x1e201c(0xbd)][0x0][_0x1e201c(0xb9)](_0x1e201c(0xba)))[_0x1e201c(0xbb)](!![]), expect(_0x5c3554[_0x1e201c(0xbc)][_0x1e201c(0xbd)][0x0][_0x1e201c(0xbd)][0x0][_0x1e201c(0xb9)]('bar'))[_0x1e201c(0xbb)](!![]);
    }), it(_0x14da81(0xc4), _0x3bf8a7 => {
        const _0x1fed3d = _0x14da81, _0x10e4fd = new _0x2a9bc1({
                '_scopeId': 'data-1',
                'template': '<div><child\x20ref=\x22child\x22\x20/></div>',
                'components': {
                    'child': {
                        '_scopeId': _0x1fed3d(0xc5),
                        'data': () => ({ 'show': !![] }),
                        'template': _0x1fed3d(0xc6)
                    }
                }
            })[_0x1fed3d(0xc1)](), _0x5775fd = _0x10e4fd[_0x1fed3d(0xc7)][_0x1fed3d(0xc8)];
        expect(_0x5775fd[_0x1fed3d(0xbc)][_0x1fed3d(0xb9)]('data-1'))['toBe'](!![]), expect(_0x5775fd[_0x1fed3d(0xbc)][_0x1fed3d(0xb9)](_0x1fed3d(0xc5)))[_0x1fed3d(0xbb)](!![]), _0x5775fd[_0x1fed3d(0xc9)] = ![], waitForUpdate(() => {
            const _0x3a2086 = _0x1fed3d;
            _0x5775fd[_0x3a2086(0xc9)] = !![];
        })['then'](() => {
            const _0x48d63f = _0x1fed3d;
            expect(_0x5775fd['$el'][_0x48d63f(0xb9)]('data-1'))['toBe'](!![]), expect(_0x5775fd[_0x48d63f(0xbc)][_0x48d63f(0xb9)](_0x48d63f(0xc5)))['toBe'](!![]);
        })[_0x1fed3d(0xca)](_0x3bf8a7);
    }), it(_0x14da81(0xcb), () => {
        const _0x1133ac = _0x14da81, _0x19955b = {
                'functional': !![],
                '_scopeId': _0x1133ac(0xc8),
                'render'(_0x47761e) {
                    const _0x46fbb0 = _0x1133ac;
                    return _0x47761e(_0x46fbb0(0xcc), { 'class': 'child' }, [_0x47761e(_0x46fbb0(0xcd), { 'class': _0x46fbb0(0xc8) }, _0x46fbb0(0xc8))]);
                }
            }, _0x42ce6b = new _0x2a9bc1({
                '_scopeId': _0x1133ac(0xce),
                'components': { 'child': _0x19955b },
                'template': '<div><child></child></div>'
            })['$mount']();
        expect(_0x42ce6b[_0x1133ac(0xbc)][_0x1133ac(0xb9)](_0x1133ac(0xce)))['toBe'](!![]);
        const _0x110696 = _0x42ce6b[_0x1133ac(0xbc)][_0x1133ac(0xcf)](_0x1133ac(0xd0));
        [][_0x1133ac(0xd1)][_0x1133ac(0xd2)](_0x110696, _0x40383a => {
            const _0x3a1b15 = _0x1133ac;
            expect(_0x40383a[_0x3a1b15(0xb9)](_0x3a1b15(0xc8)))[_0x3a1b15(0xbb)](!![]), expect(_0x40383a['hasAttribute']('parent'))[_0x3a1b15(0xbb)](![]);
        });
    });
});
