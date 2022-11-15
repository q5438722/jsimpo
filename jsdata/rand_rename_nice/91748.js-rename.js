'use strict';
const {
  onCreateWebpackConfig : onCreateWebpackConfig,
  onCreateBabelConfig : onCreateBabelConfig
} = require(`../gatsby-node`);
const PreactRefreshPlugin = require(`@prefresh/webpack`);
const ReactRefreshWebpackPlugin = require(`@pmmmwh/react-refresh-webpack-plugin`);
describe(`gatsby-plugin-preact`, () => {
  it(`sets the correct webpack config in development`, () => {
    const cbSub = jest.fn(() => {
      return {
        entry : {
          commons : []
        },
        plugins : [new ReactRefreshWebpackPlugin]
      };
    });
    const nodeActions = {
      setWebpackConfig : jest.fn(),
      setBabelPlugin : jest.fn(),
      replaceWebpackConfig : jest.fn()
    };
    onCreateBabelConfig({
      stage : `develop`,
      actions : nodeActions
    });
    onCreateBabelConfig({
      stage : `develop-html`,
      actions : nodeActions
    });
    onCreateWebpackConfig({
      stage : `develop`,
      actions : nodeActions,
      getConfig : cbSub
    });
    onCreateWebpackConfig({
      stage : `develop-html`,
      actions : nodeActions,
      getConfig : cbSub
    });
    expect(nodeActions.setWebpackConfig).toHaveBeenCalledTimes(2);
    expect(nodeActions.setWebpackConfig).toHaveBeenCalledWith({
      plugins : expect.arrayContaining([expect.any(PreactRefreshPlugin)]),
      resolve : {
        alias : {
          react : `preact/compat`,
          "react-dom" : `preact/compat`
        }
      }
    });
    expect(cbSub).toHaveBeenCalledTimes(2);
    expect(nodeActions.setBabelPlugin).toHaveBeenCalledTimes(1);
    expect(nodeActions.setBabelPlugin).toHaveBeenCalledWith({
      name : `@prefresh/babel-plugin`,
      stage : `develop`
    });
    expect(nodeActions.replaceWebpackConfig).toHaveBeenCalledTimes(1);
    expect(nodeActions.replaceWebpackConfig).toHaveBeenCalledWith({
      plugins : [],
      entry : {
        commons : [`@gatsbyjs/webpack-hot-middleware/client`]
      }
    });
  });
  it(`sets the correct webpack config in production`, () => {
    const drilldownLevelLabels = [`react`, `react-dom`, `scheduler`, `prop-types`];
    const cbSub = jest.fn(() => {
      return {
        optimization : {
          splitChunks : {
            chunks : `all`,
            cacheGroups : {
              default : false,
              vendors : false,
              framework : {
                chunks : `all`,
                name : `framework`,
                test : new RegExp(`(?<!node_modules.*)[\\\\/]node_modules[\\\\/](${drilldownLevelLabels.join(`|`)})[\\\\/]`),
                priority : 40,
                enforce : true
              }
            }
          }
        }
      };
    });
    const nodeActions = {
      setWebpackConfig : jest.fn(),
      setBabelPlugin : jest.fn(),
      replaceWebpackConfig : jest.fn()
    };
    onCreateBabelConfig({
      stage : `build-javascript`,
      actions : nodeActions
    });
    onCreateBabelConfig({
      stage : `build-html`,
      actions : nodeActions
    });
    onCreateWebpackConfig({
      stage : `build-javascript`,
      actions : nodeActions,
      getConfig : cbSub
    });
    onCreateWebpackConfig({
      stage : `build-html`,
      actions : nodeActions,
      getConfig : cbSub
    });
    expect(nodeActions.setWebpackConfig).toHaveBeenCalledTimes(2);
    expect(nodeActions.setWebpackConfig).toHaveBeenCalledWith({
      plugins : [],
      resolve : {
        alias : {
          react : `preact/compat`,
          "react-dom" : `preact/compat`
        }
      }
    });
    expect(cbSub).toHaveBeenCalledTimes(1);
    expect(nodeActions.setBabelPlugin).toHaveBeenCalledTimes(0);
    expect(nodeActions.replaceWebpackConfig).toHaveBeenCalledTimes(1);
    expect(nodeActions.replaceWebpackConfig).toMatchInlineSnapshot(`\n      [MockFunction] {\n        "calls": Array [\n          Array [\n            Object {\n              "optimization": Object {\n                "splitChunks": Object {\n                  "cacheGroups": Object {\n                    "default": false,\n                    "framework": Object {\n                      "chunks": "all",\n                      "enforce": true,\n                      "name": "framework",\n                      "priority": 40,\n                      "test": [Function],\n                    },\n                    "vendors": false,\n                  },\n                  "chunks": "all",\n                },\n              },\n            },\n          ],\n        ],\n        "results": Array [\n          Object {\n            "type": "return",\n            "value": undefined,\n          },\n        ],\n      }\n    `);
  });
});

