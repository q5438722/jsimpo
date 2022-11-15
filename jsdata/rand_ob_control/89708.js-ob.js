const fluidTestId = 'image-fluid';
describe('Production\x20gatsby-image', () => {
    const _0x14b5f5 = {
        'LxrkE': function (_0x569eca, _0x1a4be9, _0x427558) {
            return _0x569eca(_0x1a4be9, _0x427558);
        },
        'TDyvu': function (_0x58c2b0, _0x273d05, _0x3c7c59) {
            return _0x58c2b0(_0x273d05, _0x3c7c59);
        },
        'rjvbC': function (_0x49b565, _0x21c0c9) {
            return _0x49b565(_0x21c0c9);
        },
        'QeqRN': function (_0x5cd709, _0xee001e, _0x53f607) {
            return _0x5cd709(_0xee001e, _0x53f607);
        },
        'etZIA': function (_0x206c20, _0x41a700, _0x340eec) {
            return _0x206c20(_0x41a700, _0x340eec);
        },
        'BdgFq': function (_0x2816d8, _0x53a45c, _0x262e82) {
            return _0x2816d8(_0x53a45c, _0x262e82);
        },
        'XESxi': function (_0x2184cb, _0x30297d, _0x3a33c7) {
            return _0x2184cb(_0x30297d, _0x3a33c7);
        },
        'ffnKx': function (_0x55567f, _0x1841ad, _0x5e1417) {
            return _0x55567f(_0x1841ad, _0x5e1417);
        }
    };
    _0x14b5f5['rjvbC'](beforeEach, () => {
        cy['visit']('/fluid')['waitForRouteChange']();
    }), _0x14b5f5['etZIA'](describe, 'wrapping\x20elements', () => {
        const _0x22be1c = {
            'KGbtd': function (_0x59a5f4, _0x3d54e4, _0x1042d8) {
                return _0x14b5f5['LxrkE'](_0x59a5f4, _0x3d54e4, _0x1042d8);
            },
            'GdaGw': function (_0x2fefa, _0x4bc21c, _0x245e16) {
                return _0x14b5f5['LxrkE'](_0x2fefa, _0x4bc21c, _0x245e16);
            }
        };
        _0x14b5f5['TDyvu'](describe, 'outer\x20div', () => {
            _0x22be1c['KGbtd'](it, 'exists', () => {
                cy['getTestElement'](fluidTestId)['find']('.gatsby-image-wrapper')['its']('length')['should']('eq', 0x1);
            }), _0x22be1c['GdaGw'](it, 'contains\x20position\x20relative', () => {
                cy['getTestElement'](fluidTestId)['find']('.gatsby-image-wrapper')['should']('have.attr', 'style')['and']('contains', 'position:relative');
            });
        });
    }), _0x14b5f5['BdgFq'](describe, 'fallback\x20image', () => {
        _0x14b5f5['TDyvu'](it, 'renders\x20base-64\x20src', () => {
            cy['getTestElement'](fluidTestId)['find']('.gatsby-image-wrapper\x20>\x20img')['should']('have.attr', 'src')['and']('contains', 'base64');
        }), _0x14b5f5['TDyvu'](it, 'renders\x20with\x20style', () => {
            cy['getTestElement'](fluidTestId)['find']('.gatsby-image-wrapper\x20>\x20img')['should']('have.attr', 'style');
        }), _0x14b5f5['TDyvu'](it, 'swaps\x20opacity\x20to\x200', () => {
            cy['getTestElement'](fluidTestId)['find']('.gatsby-image-wrapper\x20>\x20img')['should']('have.attr', 'style')['and']('contains', 'opacity:\x200');
        });
    }), _0x14b5f5['XESxi'](it, 'renders\x20a\x20picture\x20tag', () => {
        cy['getTestElement'](fluidTestId)['find']('picture')['its']('length')['should']('eq', 0x1);
    }), _0x14b5f5['XESxi'](it, 'renders\x20a\x20picture\x20>\x20source', () => {
        cy['getTestElement'](fluidTestId)['find']('picture\x20>\x20source')['should']('have.attr', 'srcset');
    }), _0x14b5f5['XESxi'](it, 'renders\x20fallback\x20img', () => {
        cy['getTestElement'](fluidTestId)['find']('picture\x20>\x20img')['should']('have.attr', 'src');
    }), _0x14b5f5['XESxi'](it, 'applies\x20inline\x20style\x20to\x20img', () => {
        const _0x55b349 = {
            'kqUiR': function (_0x1f423a, _0x232741) {
                return _0x14b5f5['rjvbC'](_0x1f423a, _0x232741);
            }
        };
        cy['getTestElement'](fluidTestId)['find']('picture\x20>\x20img')['should']('have.attr', 'style')['and'](_0x527458 => {
            const _0x390f93 = _0x527458['split'](';')['map'](_0x4afce0 => _0x4afce0['trim']())['filter'](Boolean);
            _0x55b349['kqUiR'](expect, _0x390f93)['to']['include']['members']([
                'position:\x20absolute',
                'top:\x200px',
                'left:\x200px',
                'width:\x20100%',
                'height:\x20100%',
                'object-fit:\x20cover'
            ]);
        });
    }), _0x14b5f5['ffnKx'](describe, 'noscript', () => {
        const _0x314695 = {
            'KaOIL': function (_0x577a0a, _0x1145f8) {
                return _0x14b5f5['rjvbC'](_0x577a0a, _0x1145f8);
            }
        };
        _0x14b5f5['QeqRN'](it, 'exists', () => {
            cy['getTestElement'](fluidTestId)['find']('noscript')['its']('length')['should']('eq', 0x1);
        }), _0x14b5f5['QeqRN'](it, 'renders\x20string\x20content\x20with\x20picture\x20tag', () => {
            const _0x54d56d = {
                'NgyKE': function (_0x4a6003, _0x2e9eaa) {
                    return _0x314695['KaOIL'](_0x4a6003, _0x2e9eaa);
                }
            };
            cy['getTestElement'](fluidTestId)['find']('noscript')['and'](_0x1e03a7 => {
                const _0x356929 = _0x1e03a7[0x0]['textContent'];
                _0x54d56d['NgyKE'](expect, _0x356929)['to']['contain']('<picture>');
            });
        });
    });
});
