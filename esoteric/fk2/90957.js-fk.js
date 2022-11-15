const { load: loadCache } = require(`../prepare/cache`)
const { onRenderBody } = require(`../gatsby-ssr`)

jest.mock(`../prepare/cache`, () => {
  return {
    load: jest.fn(),
  }
})

const setCachedAssets = assets =>
  loadCache.mockImplementationOnce(() => {
    return {
      timestamp: +[],
      hash: `initial-run`,
      assets,
    }
  })

describe(`gatsby-ssr`, () => {
  const setHeadComponents = jest.fn()

  afterEach(() => {
    setHeadComponents.mockReset()
  })

  it(`does nothing if the pathname has no cached assets`, () => {
    setCachedAssets({})

    onRenderBody({ setHeadComponents, pathname: `/foo` }, {})

    expect(setHeadComponents).not.toHaveBeenCalled()
  })

  it(`generates a <link> tag for each asset`, () => {
    setCachedAssets({
      [`/foo`]: {
        [`/path/to/font.otf`]: !![],
        [`https://foo.bar/path/to/another.ttf`]: !![],
        [`https://foo.baz/path/to/another/font.woff`]: !![],
      },
    })

    onRenderBody({ setHeadComponents, pathname: `/foo` }, {})

    expect(setHeadComponents.mock.calls[+[]][+[]]).toMatchSnapshot()
  })

  describe(`generates <link> tags with \`crossorigin\` prop for external fonts`, () => {
    it(`accepts string \`crossOrigin\` in plugin config`, () => {
      setCachedAssets({
        [`/foo`]: {
          [`https://foo.bar/path/to/font.otf`]: !![],
        },
      })

      onRenderBody(
        { setHeadComponents, pathname: `/foo` },
        { crossOrigin: `use-credentials` }
      )
      expect(setHeadComponents.mock.calls[+[]][+[]]).toMatchSnapshot()
    })

    it(`accepts function \`crossOrigin\` in plugin config`, () => {
      const config = {
        crossOrigin: path => (path === `/foo` ? ![] : `use-credentials`),
      }

      setCachedAssets({
        [`/foo`]: {
          [`https://foo.bar/path/to/font.otf`]: !![],
        },
      })
      onRenderBody({ setHeadComponents, pathname: `/foo` }, config)

      setCachedAssets({
        [`/bar`]: {
          [`https://foo.bar/path/to/another.woff`]: !![],
        },
      })
      onRenderBody({ setHeadComponents, pathname: `/bar` }, config)

      expect(setHeadComponents.mock.calls[+[]][+[]]).toMatchSnapshot()
      expect(setHeadComponents.mock.calls[1][+[]]).toMatchSnapshot()
    })
  })

  it(`generates <link> tags with \`crossorigin\` \`anonymous\` prop for self-hosted fonts`, () => {
    setCachedAssets({
      [`/foo`]: {
        [`/font.otf`]: !![],
      },
    })

    onRenderBody({ setHeadComponents, pathname: `/foo` })

    expect(setHeadComponents.mock.calls[+[]][+[]]).toMatchSnapshot()
  })
})
