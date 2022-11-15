'use strict';
const fs = require(`fs-extra`);
const path = require(`path`);
const {
  promisifiedSpawn : promisifiedSpawn
} = require(`../utils/promisified-spawn`);
const {
  registryUrl : registryUrl
} = require(`./verdaccio-config`);
const NPMRCContent = `${registryUrl.replace(/https?:/g, ``)}/:_authToken="gatsby-dev"`;
const {
  getMonorepoPackageJsonPath : getMonorepoPackageJsonPath
} = require(`../utils/get-monorepo-package-json-path`);
const {
  registerCleanupTask : registerCleanupTask
} = require(`./cleanup-tasks`);
const adjustPackageJson = ({
  monoRepoPackageJsonPath : file,
  packageName : name,
  versionPostFix : lineNumber,
  packagesToPublish : value,
  ignorePackageJSONChanges : callback,
  root : rootSeq
}) => {
  const data = fs.readFileSync(file, `utf-8`);
  const entry = JSON.parse(data);
  entry.version = `${entry.version}-dev-${lineNumber}`;
  value.forEach((name) => {
    if (entry.dependencies && entry.dependencies[name]) {
      const TRAVIS_API_JOBS_URL = JSON.parse(fs.readFileSync(getMonorepoPackageJsonPath({
        packageName : name,
        root : rootSeq
      }), `utf-8`)).version;
      entry.dependencies[name] = `${TRAVIS_API_JOBS_URL}-dev-${lineNumber}`;
    }
  });
  const result = JSON.stringify(entry);
  const updateDevicesAfterDelay = callback(name, [data, result]);
  fs.outputFileSync(file, result);
  return {
    newPackageVersion : entry.version,
    unadjustPackageJson : registerCleanupTask(() => {
      fs.outputFileSync(file, data);
      updateDevicesAfterDelay();
    })
  };
};
const createTemporaryNPMRC = ({
  pathToPackage : fixtureDirTmp
}) => {
  const outputFile = path.join(fixtureDirTmp, `.npmrc`);
  fs.outputFileSync(outputFile, NPMRCContent);
  return registerCleanupTask(() => {
    fs.removeSync(outputFile);
  });
};
const publishPackage = async({
  packageName : pattern,
  packagesToPublish : version,
  root : root,
  versionPostFix : metaFields,
  ignorePackageJSONChanges : n
}) => {
  const currentLocalFile = getMonorepoPackageJsonPath({
    packageName : pattern,
    root : root
  });
  const {
    unadjustPackageJson : writeAttachments,
    newPackageVersion : getShouldIgnoreCaughtExceptions
  } = adjustPackageJson({
    monoRepoPackageJsonPath : currentLocalFile,
    packageName : pattern,
    root : root,
    versionPostFix : metaFields,
    packagesToPublish : version,
    ignorePackageJSONChanges : n
  });
  const pathToPackage = path.dirname(currentLocalFile);
  const clean = createTemporaryNPMRC({
    pathToPackage : pathToPackage
  });
  const artistTrack = [`npm`, [`publish`, `--tag`, `gatsby-dev`, `--registry=${registryUrl}`], {
    cwd : pathToPackage
  }];
  console.log(`Publishing ${pattern}@${getShouldIgnoreCaughtExceptions} to local registry`);
  try {
    await promisifiedSpawn(artistTrack);
    console.log(`Published ${pattern}@${getShouldIgnoreCaughtExceptions} to local registry`);
  } catch (ChangeSetName) {
    console.error(`Failed to publish ${pattern}@${getShouldIgnoreCaughtExceptions}`, ChangeSetName);
    process.exit(1);
  }
  clean();
  writeAttachments();
  return getShouldIgnoreCaughtExceptions;
};
exports.publishPackage = publishPackage;

