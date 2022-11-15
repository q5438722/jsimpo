var { load: loadCache } = require(`../prepare/cache`);

var { onRenderBody } = require(`../gatsby-ssr`);

jest.mock(`../prepare/cache`, () => {
  return { load: jest.fn() };
});
const setCachedAssets = t => loadCache.mockImplementationOnce(() => {
  return { timestamp: 0, hash: `initial-run`, assets: t };
});

describe(`gatsby-ssr`, () => {
  const e = jest.fn();
  afterEach(() => {
    e.mockReset();
  });it(`does nothing if the pathname has no cached assets`, () => {
    setCachedAssets({});onRenderBody({ setHeadComponents: e, pathname: `/foo` }, {});expect(e).not.toHaveBeenCalled();
  });it(`generates a <link> tag for each asset`, () => {
    setCachedAssets({ [`/foo`]: { [`/path/to/font.otf`]: true, [`https://foo.bar/path/to/another.ttf`]: true, [`https://foo.baz/path/to/another/font.woff`]: true } });onRenderBody({ setHeadComponents: e, pathname: `/foo` }, {});expect(e.mock.calls[0][0]).toMatchSnapshot();
  });describe(`generates <link> tags with \`crossorigin\` prop for external fonts`, () => {
    it(`accepts string \`crossOrigin\` in plugin config`, () => {
      setCachedAssets({ [`/foo`]: { [`https://foo.bar/path/to/font.otf`]: true } });onRenderBody({ setHeadComponents: e, pathname: `/foo` }, { crossOrigin: `use-credentials` });expect(e.mock.calls[0][0]).toMatchSnapshot();
    });it(`accepts function \`crossOrigin\` in plugin config`, () => {
      const t = { crossOrigin: t => t === `/foo` ? false : `use-credentials` };
      setCachedAssets({ [`/foo`]: { [`https://foo.bar/path/to/font.otf`]: true } });onRenderBody({ setHeadComponents: e, pathname: `/foo` }, t);setCachedAssets({ [`/bar`]: { [`https://foo.bar/path/to/another.woff`]: true } });onRenderBody({ setHeadComponents: e, pathname: `/bar` }, t);expect(e.mock.calls[0][0]).toMatchSnapshot();expect(e.mock.calls[1][0]).toMatchSnapshot();
    });
  });it(`generates <link> tags with \`crossorigin\` \`anonymous\` prop for self-hosted fonts`, () => {
    setCachedAssets({ [`/foo`]: { [`/font.otf`]: true } });onRenderBody({ setHeadComponents: e, pathname: `/foo` });expect(e.mock.calls[0][0]).toMatchSnapshot();
  });
});
