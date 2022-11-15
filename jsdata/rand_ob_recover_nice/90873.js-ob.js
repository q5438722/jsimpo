'use strict';
const {
  writeFileSync : writeFileSync
} = require("fs");
const yargs = require("yargs");
const {
  getPackages : getPackages
} = require(_0x56df9f(252));
const PackageGraph = require("@lerna/package-graph");
const semver = require(_0x56df9f(253));
function _0x568a(isBgroundImg, stgs) {
  return _0x568a = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (4735 * 1 + 2432 * 1 + -6924);
    let _0x10d730 = _0x49f8[isBgroundImg];
    return _0x10d730;
  }, _0x568a(isBgroundImg, stgs);
}
let warned = ![];
const argv = yargs["option"]("fix", {
  "default" : ![],
  "describe" : _0x56df9f(254)
})["option"](_0x56df9f(255), {
  "default" : ![],
  "describe" : _0x56df9f(256)
})[_0x56df9f(257)];
getPackages(process[_0x56df9f(258)]())["then"]((packages) => {
  const gotoNewOfflinePage = _0x56df9f;
  const bot = {
    "pIoiE" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  const exports = new PackageGraph(packages, gotoNewOfflinePage(259), !![]);
  exports["forEach"]((t, canCreateDiscussions) => {
    const _objToId = gotoNewOfflinePage;
    let exports = Array[_objToId(260)](t[_objToId(261)][_objToId(262)]())[_objToId(263)]((filters) => {
      return !semver[_objToId(264)](exports[_objToId(265)](filters[_objToId(266)])[_objToId(267)], filters[_objToId(268)]);
    });
    if (argv[_objToId(255)]) {
      exports = exports[_objToId(263)]((pathMap) => {
        return pathMap[_objToId(268)] !== _objToId(269);
      });
    }
    if (!exports[_objToId(270)]) {
      return;
    }
    const msg = exports["map"]((filters) => {
      return _objToId(271) + filters[_objToId(266)] + "@" + filters["fetchSpec"] + _objToId(272) + (_objToId(273) + filters[_objToId(266)] + "@" + exports[_objToId(265)](filters[_objToId(266)])["version"] + _objToId(274));
    })["join"]("\n");
    console[_objToId(275)](t["name"] + ": \n" + msg);
    warned = !![];
    if (argv[_objToId(276)]) {
      const cache = t[_objToId(277)];
      const msg = cache[_objToId(278)]();
      const rpm_traffic = [_objToId(279), _objToId(280), _objToId(281)];
      exports["forEach"]((res) => {
        const now = _objToId;
        rpm_traffic[now(282)]((from) => {
          const getOutlet = now;
          if (cache[from] && cache[from][res[getOutlet(266)]]) {
            msg[from][res[getOutlet(266)]] = "^" + exports[getOutlet(265)](res["name"])["version"];
          }
        });
      });
      bot[_objToId(283)](writeFileSync, cache["location"] + "/package.json", JSON[_objToId(284)](msg, null, 5 * 164 + -62 * 65 + -73 * -44));
    }
  });
  if (warned) {
    process["exit"](7872 + 1 * 8234 + -16105);
  }
});

