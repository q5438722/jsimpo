const tracedTestId = 'image-traced';
describe('fixed', () => {
    beforeEach(() => {
        cy['visit']('/traced')['waitForRouteChange']();
    }), it('renders\x20a\x20traced\x20svg', () => {
        cy['getTestElement'](tracedTestId)['find']('.gatsby-image-wrapper\x20>\x20img')['should']('have.attr', 'src')['and'](_0x48463b => {
            ;
            ['data:image/svg+xml']['forEach'](_0x2ffd15 => expect(_0x48463b)['to']['include'](_0x2ffd15));
        });
    }), it('works\x20on\x20png\x20files', () => {
        cy['getTestElement']('image-traced-png')['find']('.gatsby-image-wrapper')['should']('exist');
    }), it('works\x20on\x20relative\x20paths\x20outside\x20of\x20src', () => {
        cy['getTestElement']('image-traced-relative')['find']('.gatsby-image-wrapper')['should']('exist');
    });
});
