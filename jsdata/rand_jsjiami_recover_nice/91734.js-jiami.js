'use strict';
const fs = require("fs-extra");
const path = require("path");
const {
  promisifiedSpawn : promisifiedSpawn
} = require("../utils/promisified-spawn");
const {
  registryUrl : registryUrl
} = require("./verdaccio-config");
const NPMRCContent = registryUrl["replace"](/https?:/g, "") + '/:_authToken="gatsby-dev"';
const {
  getMonorepoPackageJsonPath : getMonorepoPackageJsonPath
} = require("../utils/get-monorepo-package-json-path");
const {
  registerCleanupTask : registerCleanupTask
} = require("./cleanup-tasks");
const adjustPackageJson = ({
  monoRepoPackageJsonPath : path,
  packageName : depData,
  versionPostFix : name,
  packagesToPublish : id,
  ignorePackageJSONChanges : logImport,
  root : node
}) => {
  const data = fs["readFileSync"](path, "utf-8");
  const elmPackage = JSON["parse"](data);
  elmPackage["version"] = elmPackage["version"] + "-dev-" + name;
  id["forEach"]((packageName) => {
    if (elmPackage["dependencies"] && elmPackage["dependencies"][packageName]) {
      const expected_dir = JSON["parse"](fs["readFileSync"](_0x4baf2c["bQAqq"](getMonorepoPackageJsonPath, {
        "packageName" : packageName,
        "root" : node
      }), getMonorepoPackageJsonPath({
        "packageName" : packageName,
        "root" : node
      })))["version"];
      elmPackage["dependencies"][packageName] = expected_dir + "-dev-" + name;
    }
  });
  const statCb = JSON["stringify"](elmPackage);
  const gotoNewOfflinePage = logImport(depData, [data, statCb]);
  fs["outputFileSync"](path, statCb);
  return {
    "newPackageVersion" : elmPackage["version"],
    "unadjustPackageJson" : registerCleanupTask(() => {
      fs["outputFileSync"](path, data);
      gotoNewOfflinePage();
    })
  };
};
const createTemporaryNPMRC = ({
  pathToPackage : B523
}) => {
  const fd = path["join"](B523, ".npmrc");
  fs["outputFileSync"](fd, NPMRCContent);
  return registerCleanupTask(() => {
    fs["removeSync"](fd);
  });
};
const publishPackage = async({
  packageName : sfHost,
  packagesToPublish : version,
  root : root,
  versionPostFix : dupeNameCount,
  ignorePackageJSONChanges : contextRecordId
}) => {
  const x = getMonorepoPackageJsonPath({
    "packageName" : sfHost,
    "root" : root
  });
  const {
    unadjustPackageJson : writeAttachments,
    newPackageVersion : msg
  } = adjustPackageJson({
    "monoRepoPackageJsonPath" : x,
    "packageName" : sfHost,
    "root" : root,
    "versionPostFix" : dupeNameCount,
    "packagesToPublish" : version,
    "ignorePackageJSONChanges" : contextRecordId
  });
  const pathToPackage = path["dirname"](x);
  const clean = createTemporaryNPMRC({
    "pathToPackage" : pathToPackage
  });
  const artistTrack = ["npm", ["publish", "--tag", "gatsby-dev", "--registry=" + registryUrl], {
    "cwd" : pathToPackage
  }];
  console["log"]("Publishing " + sfHost + "@" + msg + " to local registry");
  try {
    await promisifiedSpawn(artistTrack);
    console["log"]("Published " + sfHost + "@" + msg + " to local registry");
  } catch (e) {
    if (_0x4e7a45["LAsBe"] === _0x4e7a45["LAsBe"]) {
      console["error"]("Failed to publish " + sfHost + "@" + msg, e);
      process["exit"](1);
    } else {
      const groupNamePrefix = JSON["parse"](fs["readFileSync"](_0x4e7a45["ChMOq"](getMonorepoPackageJsonPath, {
        "packageName" : packageThatWillBePublished,
        "root" : root
      }), getMonorepoPackageJsonPath({
        "packageName" : packageThatWillBePublished,
        "root" : root
      })))["version"];
      monorepoPKGjson["dependencies"][packageThatWillBePublished] = groupNamePrefix + "-dev-" + dupeNameCount;
    }
  }
  clean();
  writeAttachments();
  return msg;
};
exports["publishPackage"] = publishPackage;

