'use strict';
function _0x3076(isBgroundImg, stgs) {
  return _0x3076 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-5849 + 1042 + -1 * -5132);
    let _0x146275 = _0xfc6d[isBgroundImg];
    return _0x146275;
  }, _0x3076(isBgroundImg, stgs);
}
const {
  onCreateWebpackConfig : onCreateWebpackConfig,
  onCreateBabelConfig : onCreateBabelConfig
} = require("../gatsby-node");
const PreactRefreshPlugin = require(_0x56af4a(337));
const ReactRefreshWebpackPlugin = require(_0x56af4a(338));
describe(_0x56af4a(339), () => {
  const now = _0x56af4a;
  const symAttrs = {
    "vtGnE" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "Bovck" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "dklRi" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "rsBoX" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "JTgKS" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "oWFvk" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "SBJyB" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "xvUJO" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "oLZMj" : function(require, load, callback) {
      return require(load, callback);
    },
    "fBwbm" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  symAttrs[now(340)](it, now(341), () => {
    const get = now;
    const tokens = jest["fn"](() => {
      return {
        "entry" : {
          "commons" : []
        },
        "plugins" : [new ReactRefreshWebpackPlugin]
      };
    });
    const data = {
      "setWebpackConfig" : jest["fn"](),
      "setBabelPlugin" : jest["fn"](),
      "replaceWebpackConfig" : jest["fn"]()
    };
    onCreateBabelConfig({
      "stage" : get(342),
      "actions" : data
    });
    symAttrs[get(343)](onCreateBabelConfig, {
      "stage" : get(344),
      "actions" : data
    });
    onCreateWebpackConfig({
      "stage" : get(342),
      "actions" : data,
      "getConfig" : tokens
    });
    onCreateWebpackConfig({
      "stage" : get(344),
      "actions" : data,
      "getConfig" : tokens
    });
    symAttrs["Bovck"](expect, data["setWebpackConfig"])[get(345)](1329 * -1 + 1 * 3061 + -1730);
    symAttrs[get(346)](expect, data["setWebpackConfig"])[get(347)]({
      "plugins" : expect["arrayContaining"]([expect[get(348)](PreactRefreshPlugin)]),
      "resolve" : {
        "alias" : {
          "react" : get(349),
          "react-dom" : get(349)
        }
      }
    });
    symAttrs[get(346)](expect, tokens)[get(345)](2995 + -18 * -410 + -10373);
    symAttrs["dklRi"](expect, data[get(350)])[get(345)](444 + -8249 + 1301 * 6);
    symAttrs[get(351)](expect, data[get(350)])[get(347)]({
      "name" : get(352),
      "stage" : get(342)
    });
    symAttrs["JTgKS"](expect, data["replaceWebpackConfig"])[get(345)](72 * -107 + 171 * -41 + -3679 * -4);
    expect(data[get(353)])[get(347)]({
      "plugins" : [],
      "entry" : {
        "commons" : [get(354)]
      }
    });
  });
  symAttrs[now(355)](it, now(356), () => {
    const get = now;
    const JOIN_TYPE = [get(357), get(358), get(359), get(360)];
    const getConfig = jest["fn"](() => {
      const nameForElement = get;
      return {
        "optimization" : {
          "splitChunks" : {
            "chunks" : nameForElement(361),
            "cacheGroups" : {
              "default" : ![],
              "vendors" : ![],
              "framework" : {
                "chunks" : nameForElement(361),
                "name" : nameForElement(362),
                "test" : new RegExp(nameForElement(363) + JOIN_TYPE["join"]("|") + nameForElement(364)),
                "priority" : 40,
                "enforce" : !![]
              }
            }
          }
        }
      };
    });
    const data = {
      "setWebpackConfig" : jest["fn"](),
      "setBabelPlugin" : jest["fn"](),
      "replaceWebpackConfig" : jest["fn"]()
    };
    symAttrs[get(365)](onCreateBabelConfig, {
      "stage" : "build-javascript",
      "actions" : data
    });
    symAttrs[get(365)](onCreateBabelConfig, {
      "stage" : get(366),
      "actions" : data
    });
    symAttrs[get(365)](onCreateWebpackConfig, {
      "stage" : get(367),
      "actions" : data,
      "getConfig" : getConfig
    });
    onCreateWebpackConfig({
      "stage" : get(366),
      "actions" : data,
      "getConfig" : getConfig
    });
    symAttrs["oWFvk"](expect, data["setWebpackConfig"])[get(345)](8596 + -6411 * 1 + -59 * 37);
    expect(data["setWebpackConfig"])[get(347)]({
      "plugins" : [],
      "resolve" : {
        "alias" : {
          "react" : "preact/compat",
          "react-dom" : get(349)
        }
      }
    });
    expect(getConfig)["toHaveBeenCalledTimes"](5250 + -3057 + -4 * 548);
    symAttrs["SBJyB"](expect, data["setBabelPlugin"])[get(345)](17 * -587 + -5441 * -1 + 2269 * 2);
    symAttrs["SBJyB"](expect, data["replaceWebpackConfig"])[get(345)](-9777 + 62 * -5 + 10088);
    symAttrs[get(368)](expect, data[get(353)])[get(369)](get(370));
  });
});

