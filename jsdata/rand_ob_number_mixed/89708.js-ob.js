const fluidTestId = 'image-fluid';
describe('Production\x20gatsby-image', () => {
    beforeEach(() => {
        cy['visit']('/fluid')['waitForRouteChange']();
    }), describe('wrapping\x20elements', () => {
        describe('outer\x20div', () => {
            it('exists', () => {
                cy['getTestElement'](fluidTestId)['find']('.gatsby-image-wrapper')['its']('length')['should']('eq', 0x80f * 0x4 + 0xfd7 + -0x3012);
            }), it('contains\x20position\x20relative', () => {
                cy['getTestElement'](fluidTestId)['find']('.gatsby-image-wrapper')['should']('have.attr', 'style')['and']('contains', 'position:relative');
            });
        });
    }), describe('fallback\x20image', () => {
        it('renders\x20base-64\x20src', () => {
            cy['getTestElement'](fluidTestId)['find']('.gatsby-image-wrapper\x20>\x20img')['should']('have.attr', 'src')['and']('contains', 'base64');
        }), it('renders\x20with\x20style', () => {
            cy['getTestElement'](fluidTestId)['find']('.gatsby-image-wrapper\x20>\x20img')['should']('have.attr', 'style');
        }), it('swaps\x20opacity\x20to\x200', () => {
            cy['getTestElement'](fluidTestId)['find']('.gatsby-image-wrapper\x20>\x20img')['should']('have.attr', 'style')['and']('contains', 'opacity:\x200');
        });
    }), it('renders\x20a\x20picture\x20tag', () => {
        cy['getTestElement'](fluidTestId)['find']('picture')['its']('length')['should']('eq', 0x96a + -0x11a8 + -0x1 * -0x83f);
    }), it('renders\x20a\x20picture\x20>\x20source', () => {
        cy['getTestElement'](fluidTestId)['find']('picture\x20>\x20source')['should']('have.attr', 'srcset');
    }), it('renders\x20fallback\x20img', () => {
        cy['getTestElement'](fluidTestId)['find']('picture\x20>\x20img')['should']('have.attr', 'src');
    }), it('applies\x20inline\x20style\x20to\x20img', () => {
        cy['getTestElement'](fluidTestId)['find']('picture\x20>\x20img')['should']('have.attr', 'style')['and'](_0x3f4dcf => {
            const _0x7bcf84 = _0x3f4dcf['split'](';')['map'](_0x219413 => _0x219413['trim']())['filter'](Boolean);
            expect(_0x7bcf84)['to']['include']['members']([
                'position:\x20absolute',
                'top:\x200px',
                'left:\x200px',
                'width:\x20100%',
                'height:\x20100%',
                'object-fit:\x20cover'
            ]);
        });
    }), describe('noscript', () => {
        it('exists', () => {
            cy['getTestElement'](fluidTestId)['find']('noscript')['its']('length')['should']('eq', 0x1215 * -0x1 + 0x1c57 + -0xa41);
        }), it('renders\x20string\x20content\x20with\x20picture\x20tag', () => {
            cy['getTestElement'](fluidTestId)['find']('noscript')['and'](_0x4c84e6 => {
                const _0x251ed4 = _0x4c84e6[-0xa8 + 0x1bdc + -0x1b34]['textContent'];
                expect(_0x251ed4)['to']['contain']('<picture>');
            });
        });
    });
});
