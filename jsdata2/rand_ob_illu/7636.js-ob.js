const _0xeb20 = ['<div></div>', '<div><slot></slot></div>', 'data-1', 'data-2', '<div v-if="show"></div>', 'div', 'child', 'span', '.child', 'should not discard parent scopeId when component root element is replaced', 'should work on functional components', 'pRrWQ', 'iVEtD', '$mount', '$el', 'toBe', 'children', 'Fnsar', 'mnAAA', 'bar', 'FPqqN', 'hasAttribute', 'HmshO', 'vFjcA', 'egesb', 'hBYuv', 'VpgBu', '<div><child ref="child" /></div>', 'wappJ', '$refs', 'aYfgJ', 'show', 'then', 'KLpcI', 'OsfTP', 'owCCu', 'SPpLW', 'Cnsxv', 'gWypC', 'eMdFQ', 'parent', 'CsACd', 'querySelectorAll', 'DUWQT', '33902bGTQwK', '98391QcQbIQ', '121096XAiedy', '1oseCZc', '328294wzqkHO', '103474aXQwBk', '29961uoaImr', '827328nqFYIs', 'foo', '<div><p><span></span></p></div>', '<div><child></child></div>'];

function _0xea86(_0x820e53, _0x2b6923) {
    return _0xea86 = function (_0x206c27, _0x3b9a42) {
        _0x206c27 = _0x206c27 - 434;
        const _0x3678ac = _0xeb20[_0x206c27];

        return _0x3678ac;
    }, _0xea86(_0x820e53, _0x2b6923);
}
(function (_0x1c842a, _0x4b45a7) {
    const _0xfe3ab3 = _0xea86;

    while (true) {
        try {
            const _0x4e6642 = -parseInt(_0xfe3ab3(0x1b2)) + -parseInt(_0xfe3ab3(0x1b3)) + -parseInt(_0xfe3ab3(0x1b4)) + -parseInt(_0xfe3ab3(0x1b5)) * parseInt(_0xfe3ab3(0x1b6)) + -parseInt(_0xfe3ab3(0x1b7)) + parseInt(_0xfe3ab3(0x1b8)) + parseInt(_0xfe3ab3(0x1b9));

            if (_0x4e6642 === _0x4b45a7) break;else _0x1c842a.push(_0x1c842a.shift());
        } catch (_0x400d4e) {
            _0x1c842a.push(_0x1c842a.shift());
        }
    }
})(_0xeb20, 172132);
import _0x19e5dd from 'vue';
describe('Options _scopeId', () => {
    const _0x36afca = _0xea86;
    const _0x2c90de = {
        'pRrWQ': _0x36afca(0x1ba),
        'iVEtD': _0x36afca(0x1bb),
        'Fnsar': function (_0x524dad, _0xe50c95) {
            return _0x524dad(_0xe50c95);
        },
        'mnAAA': _0x36afca(0x1bc),
        'FPqqN': _0x36afca(0x1bd),
        'HmshO': 'bar',
        'egesb': '<div><child><p>hi</p></child></div>',
        'hBYuv': _0x36afca(0x1be),
        'VpgBu': _0x36afca(0x1bf),
        'aYfgJ': function (_0x323060, _0x553b2c) {
            return _0x323060(_0x553b2c);
        },
        'KLpcI': _0x36afca(0x1c0),
        'wappJ': _0x36afca(0x1c1),
        'Cnsxv': function (_0x14f40a, _0x36d0bf, _0x4ac5b7, _0x2283dc) {
            return _0x14f40a(_0x36d0bf, _0x4ac5b7, _0x2283dc);
        },
        'gWypC': _0x36afca(0x1c2),
        'eMdFQ': _0x36afca(0x1c3),
        'YckrT': _0x36afca(0x1c4),
        'SPpLW': 'parent',
        'CsACd': function (_0x2037e6, _0x17a410) {
            return _0x2037e6(_0x17a410);
        },
        'RhjUv': _0x36afca(0x1c5),
        'vFjcA': function (_0x2b4799, _0x16a27a, _0x1ef7f7) {
            return _0x2b4799(_0x16a27a, _0x1ef7f7);
        },
        'oGdIH': 'should add scopedId attributes from both parent and child on child root',
        'dteFT': 'should add scopedId attributes from both parent and child on slot contents',
        'UZspG': _0x36afca(0x1c6),
        'OsfTP': function (_0x5af2ed, _0xc200ed, _0x507bab) {
            return _0x5af2ed(_0xc200ed, _0x507bab);
        },
        'owCCu': _0x36afca(0x1c7)
    };

    it('should add scopeId attributes', () => {
        const _0x34a224 = _0x36afca;

        const _0x4476d8 = new _0x19e5dd({
            '_scopeId': _0x2c90de[_0x34a224(0x1c8)],
            'template': _0x2c90de[_0x34a224(0x1c9)]
        })[_0x34a224(0x1ca)]();

        _0x2c90de.Fnsar(expect, _0x4476d8[_0x34a224(0x1cb)].hasAttribute(_0x34a224(0x1ba)))[_0x34a224(0x1cc)](true), _0x2c90de.Fnsar(expect, _0x4476d8[_0x34a224(0x1cb)][_0x34a224(0x1cd)][0].hasAttribute(_0x34a224(0x1ba)))[_0x34a224(0x1cc)](true), _0x2c90de[_0x34a224(0x1ce)](expect, _0x4476d8.$el[_0x34a224(0x1cd)][0].children[0].hasAttribute(_0x2c90de[_0x34a224(0x1c8)]))[_0x34a224(0x1cc)](true);
    }), _0x2c90de.vFjcA(it, _0x2c90de.oGdIH, () => {
        const _0x49bbcd = _0x36afca;

        const _0x140f8e = new _0x19e5dd({
            '_scopeId': _0x2c90de[_0x49bbcd(0x1c8)],
            'template': _0x2c90de[_0x49bbcd(0x1cf)],
            'components': {
                'child': {
                    '_scopeId': _0x49bbcd(0x1d0),
                    'template': _0x2c90de[_0x49bbcd(0x1d1)]
                }
            }
        })[_0x49bbcd(0x1ca)]();

        expect(_0x140f8e[_0x49bbcd(0x1cb)].children[0][_0x49bbcd(0x1d2)](_0x2c90de[_0x49bbcd(0x1c8)]))[_0x49bbcd(0x1cc)](true), _0x2c90de.Fnsar(expect, _0x140f8e[_0x49bbcd(0x1cb)].children[0][_0x49bbcd(0x1d2)](_0x2c90de[_0x49bbcd(0x1d3)])).toBe(true);
    }), _0x2c90de[_0x36afca(0x1d4)](it, _0x2c90de.dteFT, () => {
        const _0x543a7b = _0x36afca;

        const _0x9d3214 = new _0x19e5dd({
            '_scopeId': _0x543a7b(0x1ba),
            'template': _0x2c90de[_0x543a7b(0x1d5)],
            'components': {
                'child': {
                    '_scopeId': _0x2c90de[_0x543a7b(0x1d3)],
                    'template': _0x2c90de[_0x543a7b(0x1d6)]
                }
            }
        }).$mount();

        expect(_0x9d3214[_0x543a7b(0x1cb)][_0x543a7b(0x1cd)][0][_0x543a7b(0x1cd)][0].hasAttribute(_0x2c90de[_0x543a7b(0x1c8)]))[_0x543a7b(0x1cc)](true), _0x2c90de.Fnsar(expect, _0x9d3214[_0x543a7b(0x1cb)][_0x543a7b(0x1cd)][0].children[0][_0x543a7b(0x1d2)](_0x2c90de[_0x543a7b(0x1d3)]))[_0x543a7b(0x1cc)](true);
    }), _0x2c90de[_0x36afca(0x1d4)](it, _0x2c90de.UZspG, _0x2edb25 => {
        const _0x2424ca = _0x36afca;

        const _0x5aa425 = new _0x19e5dd({
            '_scopeId': _0x2c90de[_0x2424ca(0x1d7)],
            'template': _0x2424ca(0x1d8),
            'components': {
                'child': {
                    '_scopeId': 'data-2',
                    'data': () => ({ 'show': true }),
                    'template': _0x2c90de[_0x2424ca(0x1d9)]
                }
            }
        })[_0x2424ca(0x1ca)]();

        const _0x417476 = _0x5aa425[_0x2424ca(0x1da)].child;

        expect(_0x417476[_0x2424ca(0x1cb)][_0x2424ca(0x1d2)](_0x2424ca(0x1bf))).toBe(true), _0x2c90de[_0x2424ca(0x1db)](expect, _0x417476[_0x2424ca(0x1cb)][_0x2424ca(0x1d2)](_0x2424ca(0x1c0)))[_0x2424ca(0x1cc)](true), _0x417476[_0x2424ca(0x1dc)] = false, waitForUpdate(() => {
            const _0x1bcb74 = _0x2424ca;

            _0x417476[_0x1bcb74(0x1dc)] = true;
        })[_0x2424ca(0x1dd)](() => {
            const _0xc97d8d = _0x2424ca;

            _0x2c90de[_0xc97d8d(0x1ce)](expect, _0x417476[_0xc97d8d(0x1cb)][_0xc97d8d(0x1d2)](_0x2c90de[_0xc97d8d(0x1d7)])).toBe(true), _0x2c90de.aYfgJ(expect, _0x417476[_0xc97d8d(0x1cb)][_0xc97d8d(0x1d2)](_0x2c90de[_0xc97d8d(0x1de)]))[_0xc97d8d(0x1cc)](true);
        })[_0x2424ca(0x1dd)](_0x2edb25);
    }), _0x2c90de[_0x36afca(0x1df)](it, _0x2c90de[_0x36afca(0x1e0)], () => {
        const _0xcc2bee = _0x36afca;
        const _0x5313e7 = {
            'DUWQT': function (_0x23bee7, _0x100bb1) {
                return _0x23bee7(_0x100bb1);
            },
            'suBTc': _0x2c90de[_0xcc2bee(0x1e1)]
        };
        const _0x3398af = {
            'functional': true,
            '_scopeId': 'child',
            'render'(_0x16b18c) {
                const _0x112a45 = _0xcc2bee;

                return _0x2c90de[_0x112a45(0x1e2)](_0x16b18c, _0x2c90de[_0x112a45(0x1e3)], { 'class': _0x2c90de.eMdFQ }, [_0x2c90de[_0x112a45(0x1e2)](_0x16b18c, _0x2c90de.YckrT, { 'class': _0x2c90de[_0x112a45(0x1e4)] }, _0x2c90de[_0x112a45(0x1e4)])]);
            }
        };

        const _0x186476 = new _0x19e5dd({
            '_scopeId': _0xcc2bee(0x1e5),
            'components': { 'child': _0x3398af },
            'template': _0x2c90de.mnAAA
        })[_0xcc2bee(0x1ca)]();

        _0x2c90de[_0xcc2bee(0x1e6)](expect, _0x186476[_0xcc2bee(0x1cb)][_0xcc2bee(0x1d2)](_0x2c90de.SPpLW))[_0xcc2bee(0x1cc)](true);

        const _0x537194 = _0x186476[_0xcc2bee(0x1cb)][_0xcc2bee(0x1e7)](_0x2c90de.RhjUv);

        [].forEach.call(_0x537194, _0x10aad0 => {
            const _0x1b8245 = _0xcc2bee;

            _0x5313e7.DUWQT(expect, _0x10aad0[_0x1b8245(0x1d2)](_0x1b8245(0x1c3)))[_0x1b8245(0x1cc)](true), _0x5313e7[_0x1b8245(0x1e8)](expect, _0x10aad0[_0x1b8245(0x1d2)](_0x5313e7.suBTc))[_0x1b8245(0x1cc)](false);
        });
    });
});
