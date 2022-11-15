'use strict';
const _0x1c28 = ["37019TmxzDD", "34601NgBcKK", "94214ADfgGo", "119030OCHIlm", "1622dHKHdt", "41SFWWCe", "239047fyongo", "296168oHukPa", "1iDZOTc", "path", "./package-json", "../resource-test-helper", "join", "fixtures", "package-json", "husky", "stringify", "lint-staged", "packageJson resource", "e2e package resource test", "iMjDm", "handles multiple parallel create calls", "parse", "create", "husky2", "uxpbr", "toMatchSnapshot", "WAXzT", "destroy", "handles object values", "7RQHiSr"];
const _0x5540a9 = _0x248a;
function _0x248a(isBgroundImg, stgs) {
  return _0x248a = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-1537 + 5352 + -3539);
    let _0x4034ab = _0x1c28[isBgroundImg];
    return _0x4034ab;
  }, _0x248a(isBgroundImg, stgs);
}
(function(data, val) {
  const toMonths = _0x248a;
  for (; !![];) {
    try {
      const nodeval = parseInt(toMonths(276)) * parseInt(toMonths(277)) + parseInt(toMonths(278)) + -parseInt(toMonths(279)) + -parseInt(toMonths(280)) + parseInt(toMonths(281)) * parseInt(toMonths(282)) + -parseInt(toMonths(283)) + parseInt(toMonths(284)) * parseInt(toMonths(285));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x55bc80) {
      data["push"](data["shift"]());
    }
  }
})(_0x1c28, 304052 + -93636 + -6303);
const path = require(_0x5540a9(286));
const pkgJson = require(_0x5540a9(287));
const resourceTestHelper = require(_0x5540a9(288));
const root = path[_0x5540a9(289)](__dirname, _0x5540a9(290), _0x5540a9(291));
const name = _0x5540a9(292);
const initialValue = JSON[_0x5540a9(293)]({
  "hooks" : {}
}, null, -3187 * -3 + 2 * 1300 + 1351 * -9);
const updateValue = JSON[_0x5540a9(293)]({
  "hooks" : {
    "pre-commit" : _0x5540a9(294)
  }
}, null, -42 * -79 + -197 * 33 + 3185);
describe(_0x5540a9(295), () => {
  const mount = _0x5540a9;
  const zlib = {
    "brziC" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "uxpbr" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "WAXzT" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "tWuGX" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "iMjDm" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  test(mount(296), async() => {
    await zlib["brziC"](resourceTestHelper, {
      "resourceModule" : pkgJson,
      "resourceName" : "PackageJson",
      "context" : {
        "root" : root
      },
      "initialObject" : {
        "name" : name,
        "value" : initialValue
      },
      "partialUpdate" : {
        "value" : updateValue
      }
    });
  });
  zlib[mount(297)](test, mount(298), async() => {
    const get = mount;
    const _0x57d3c9 = pkgJson["create"]({
      "root" : root
    }, {
      "name" : get(292),
      "value" : JSON[get(299)](initialValue)
    });
    const _0x29bae4 = pkgJson[get(300)]({
      "root" : root
    }, {
      "name" : get(301),
      "value" : JSON[get(299)](initialValue)
    });
    const tokens = await _0x57d3c9;
    const done = await _0x29bae4;
    zlib[get(302)](expect, tokens)[get(303)]();
    zlib[get(304)](expect, done)["toMatchSnapshot"]();
    await pkgJson[get(305)]({
      "root" : root
    }, tokens);
    await pkgJson[get(305)]({
      "root" : root
    }, done);
  });
  test(mount(306), async() => {
    const getNodeIndex = mount;
    const nav = await pkgJson["create"]({
      "root" : root
    }, {
      "name" : name,
      "value" : JSON[getNodeIndex(299)](initialValue)
    });
    zlib["tWuGX"](expect, nav)[getNodeIndex(303)]();
    await pkgJson[getNodeIndex(305)]({
      "root" : root
    }, nav);
  });
});

