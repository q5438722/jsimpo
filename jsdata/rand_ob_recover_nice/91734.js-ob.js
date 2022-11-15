'use strict';
const fs = require(_0x17933c(188));
const path = require("path");
const {
  promisifiedSpawn : promisifiedSpawn
} = require("../utils/promisified-spawn");
const {
  registryUrl : registryUrl
} = require("./verdaccio-config");
const NPMRCContent = registryUrl[_0x17933c(189)](/https?:/g, "") + _0x17933c(190);
const {
  getMonorepoPackageJsonPath : getMonorepoPackageJsonPath
} = require(_0x17933c(191));
const {
  registerCleanupTask : registerCleanupTask
} = require("./cleanup-tasks");
const adjustPackageJson = ({
  monoRepoPackageJsonPath : id,
  packageName : name,
  versionPostFix : value,
  packagesToPublish : errType,
  ignorePackageJSONChanges : cbCtx,
  root : context
}) => {
  const ModuleSystem_prettyPrint = _0x17933c;
  const evtCtx = {
    "zFcQZ" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  const xhr = fs[ModuleSystem_prettyPrint(192)](id, ModuleSystem_prettyPrint(193));
  const data = JSON[ModuleSystem_prettyPrint(194)](xhr);
  data[ModuleSystem_prettyPrint(195)] = data[ModuleSystem_prettyPrint(195)] + "-dev-" + value;
  errType[ModuleSystem_prettyPrint(196)]((key) => {
    const parseInt = ModuleSystem_prettyPrint;
    if (data[parseInt(197)] && data["dependencies"][key]) {
      const param = JSON[parseInt(194)](fs[parseInt(192)](getMonorepoPackageJsonPath({
        "packageName" : key,
        "root" : context
      }), "utf-8"))[parseInt(195)];
      data[parseInt(197)][key] = param + parseInt(198) + value;
    }
  });
  const o = JSON[ModuleSystem_prettyPrint(199)](data);
  const updateDevicesAfterDelay = evtCtx[ModuleSystem_prettyPrint(200)](cbCtx, name, [xhr, o]);
  return fs[ModuleSystem_prettyPrint(201)](id, o), {
    "newPackageVersion" : data["version"],
    "unadjustPackageJson" : registerCleanupTask(() => {
      const gotoNewOfflinePage = ModuleSystem_prettyPrint;
      fs[gotoNewOfflinePage(201)](id, xhr);
      updateDevicesAfterDelay();
    })
  };
};
const createTemporaryNPMRC = ({
  pathToPackage : x
}) => {
  const gotoNewOfflinePage = _0x17933c;
  const fd = path[gotoNewOfflinePage(202)](x, gotoNewOfflinePage(203));
  return fs[gotoNewOfflinePage(201)](fd, NPMRCContent), registerCleanupTask(() => {
    const updateDevicesAfterDelay = gotoNewOfflinePage;
    fs[updateDevicesAfterDelay(204)](fd);
  });
};
const publishPackage = async({
  packageName : pattern,
  packagesToPublish : version,
  root : root,
  versionPostFix : metaFields,
  ignorePackageJSONChanges : _0x4e02e2
}) => {
  const now = _0x17933c;
  const rpm_traffic = {
    "VbAnK" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  const x = rpm_traffic[now(205)](getMonorepoPackageJsonPath, {
    "packageName" : pattern,
    "root" : root
  });
  const {
    unadjustPackageJson : _events_x,
    newPackageVersion : msg
  } = adjustPackageJson({
    "monoRepoPackageJsonPath" : x,
    "packageName" : pattern,
    "root" : root,
    "versionPostFix" : metaFields,
    "packagesToPublish" : version,
    "ignorePackageJSONChanges" : _0x4e02e2
  });
  const pathToPackage = path[now(206)](x);
  const do_replace = rpm_traffic[now(205)](createTemporaryNPMRC, {
    "pathToPackage" : pathToPackage
  });
  const artistTrack = [now(207), [now(208), now(209), now(210), now(211) + registryUrl], {
    "cwd" : pathToPackage
  }];
  console[now(212)](now(213) + pattern + "@" + msg + " to local registry");
  try {
    await promisifiedSpawn(artistTrack);
    console[now(212)](now(214) + pattern + "@" + msg + now(215));
  } catch (ext) {
    console[now(216)]("Failed to publish " + pattern + "@" + msg, ext);
    process[now(217)](9568 + 647 * -10 + 1 * -3097);
  }
  return do_replace(), _events_x(), msg;
};
exports["publishPackage"] = publishPackage;

