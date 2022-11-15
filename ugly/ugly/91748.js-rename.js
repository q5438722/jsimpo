const{onCreateWebpackConfig,onCreateBabelConfig}=require(`../gatsby-node`);const PreactRefreshPlugin=require(`@prefresh/webpack`);const ReactRefreshWebpackPlugin=require(`@pmmmwh/react-refresh-webpack-plugin`);describe(`gatsby-plugin-preact`,()=>{it(`sets the correct webpack config in development`,()=>{const e=jest.fn(()=>{return{entry:{commons:[]},plugins:[new ReactRefreshWebpackPlugin]}});const t={setWebpackConfig:jest.fn(),setBabelPlugin:jest.fn(),replaceWebpackConfig:jest.fn()};onCreateBabelConfig({stage:`develop`,actions:t});onCreateBabelConfig({stage:`develop-html`,actions:t});onCreateWebpackConfig({stage:`develop`,actions:t,getConfig:e});onCreateWebpackConfig({stage:`develop-html`,actions:t,getConfig:e});expect(t.setWebpackConfig).toHaveBeenCalledTimes(2);expect(t.setWebpackConfig).toHaveBeenCalledWith({plugins:expect.arrayContaining([expect.any(PreactRefreshPlugin)]),resolve:{alias:{react:`preact/compat`,"react-dom":`preact/compat`}}});expect(e).toHaveBeenCalledTimes(2);expect(t.setBabelPlugin).toHaveBeenCalledTimes(1);expect(t.setBabelPlugin).toHaveBeenCalledWith({name:`@prefresh/babel-plugin`,stage:`develop`});expect(t.replaceWebpackConfig).toHaveBeenCalledTimes(1);expect(t.replaceWebpackConfig).toHaveBeenCalledWith({plugins:[],entry:{commons:[`@gatsbyjs/webpack-hot-middleware/client`]}})});it(`sets the correct webpack config in production`,()=>{const e=[`react`,`react-dom`,`scheduler`,`prop-types`];const t=jest.fn(()=>{return{optimization:{splitChunks:{chunks:`all`,cacheGroups:{default:false,vendors:false,framework:{chunks:`all`,name:`framework`,test:new RegExp(`(?<!node_modules.*)[\\\\/]node_modules[\\\\/](${e.join(`|`)})[\\\\/]`),priority:40,enforce:true}}}}}});const a={setWebpackConfig:jest.fn(),setBabelPlugin:jest.fn(),replaceWebpackConfig:jest.fn()};onCreateBabelConfig({stage:`build-javascript`,actions:a});onCreateBabelConfig({stage:`build-html`,actions:a});onCreateWebpackConfig({stage:`build-javascript`,actions:a,getConfig:t});onCreateWebpackConfig({stage:`build-html`,actions:a,getConfig:t});expect(a.setWebpackConfig).toHaveBeenCalledTimes(2);expect(a.setWebpackConfig).toHaveBeenCalledWith({plugins:[],resolve:{alias:{react:`preact/compat`,"react-dom":`preact/compat`}}});expect(t).toHaveBeenCalledTimes(1);expect(a.setBabelPlugin).toHaveBeenCalledTimes(0);expect(a.replaceWebpackConfig).toHaveBeenCalledTimes(1);expect(a.replaceWebpackConfig).toMatchInlineSnapshot(`
      [MockFunction] {
        "calls": Array [
          Array [
            Object {
              "optimization": Object {
                "splitChunks": Object {
                  "cacheGroups": Object {
                    "default": false,
                    "framework": Object {
                      "chunks": "all",
                      "enforce": true,
                      "name": "framework",
                      "priority": 40,
                      "test": [Function],
                    },
                    "vendors": false,
                  },
                  "chunks": "all",
                },
              },
            },
          ],
        ],
        "results": Array [
          Object {
            "type": "return",
            "value": undefined,
          },
        ],
      }
    `)})});