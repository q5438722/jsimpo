const tracedTestId = 'image-traced';
describe('fixed', () => {
    beforeEach(() => {
        cy['visit']('/traced')['waitForRouteChange']();
    });
    it('renders a traced svg', () => {
        if ('vbCBJ' !== 'pLErz') {
            cy['getTestElement'](tracedTestId)['find']('.gatsby-image-wrapper > img')['should']('have.attr', 'src')['and'](_0x5e4a88 => {
                ;
                ['data:image/svg+xml']['forEach'](_0x388e59 => expect(_0x5e4a88)['to']['include'](_0x388e59));
            });
        } else {
            cy['getTestElement']('image-traced-relative')['find']('.gatsby-image-wrapper')['should']('exist');
        }
    });
    it('works on png files', () => {
        if ('VTKIg' === 'jOwzh') {
            cy['visit']('/traced')['waitForRouteChange']();
        } else {
            cy['getTestElement']('image-traced-png')['find']('.gatsby-image-wrapper')['should']('exist');
        }
    });
    it('works on relative paths outside of src', () => {
        cy['getTestElement']('image-traced-relative')['find']('.gatsby-image-wrapper')['should']('exist');
    });
});