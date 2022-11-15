'use strict';
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

