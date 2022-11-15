const fs = require(`fs-extra`);

const path = require(`path`);

var { promisifiedSpawn } = require(`../utils/promisified-spawn`);

var { registryUrl } = require(`./verdaccio-config`);

const NPMRCContent = `${registryUrl.replace(/https?:/g, ``)}/:_authToken="gatsby-dev"`;

var { getMonorepoPackageJsonPath } = require(`../utils/get-monorepo-package-json-path`);

var { registerCleanupTask } = require(`./cleanup-tasks`);

const adjustPackageJson = ({ monoRepoPackageJsonPath: e, packageName: a, versionPostFix: o, packagesToPublish: s, ignorePackageJSONChanges: n, root: t }) => {
  const r = fs.readFileSync(e, `utf-8`);
  const c = JSON.parse(r);
  c.version = `${c.version}-dev-${o}`;s.forEach(e => {
    if (c.dependencies && c.dependencies[e]) {
      const a = JSON.parse(fs.readFileSync(getMonorepoPackageJsonPath({ packageName: e, root: t }), `utf-8`)).version;
      c.dependencies[e] = `${a}-dev-${o}`;
    }
  });const i = JSON.stringify(c);
  const g = n(a, [fs.readFileSync(e, `utf-8`), JSON.stringify(c)]);
  fs.outputFileSync(e, i);return { newPackageVersion: c.version, unadjustPackageJson: registerCleanupTask(() => {
      fs.outputFileSync(e, r);g();
    }) };
};

const createTemporaryNPMRC = ({ pathToPackage: e }) => {
  const a = path.join(e, `.npmrc`);
  fs.outputFileSync(a, NPMRCContent);return registerCleanupTask(() => {
    fs.removeSync(a);
  });
};

const publishPackage = async ({ packageName: a, packagesToPublish: e, root: o, versionPostFix: s, ignorePackageJSONChanges: n }) => {
  const t = getMonorepoPackageJsonPath({ packageName: a, root: o });
  var { unadjustPackageJson: r, newPackageVersion: c } = adjustPackageJson({ monoRepoPackageJsonPath: t, packageName: a, root: o, versionPostFix: s, packagesToPublish: e, ignorePackageJSONChanges: n });
  const i = path.dirname(t);
  const g = createTemporaryNPMRC({ pathToPackage: i });
  const p = [`npm`, [`publish`, `--tag`, `gatsby-dev`, `--registry=${registryUrl}`], { cwd: i }];
  console.log(`Publishing ${a}@${c} to local registry`);try {
    await promisifiedSpawn(p);console.log(`Published ${a}@${c} to local registry`);
  } catch (e) {
    console.error(`Failed to publish ${a}@${c}`, e);process.exit(1);
  }g();r();return c;
};

exports.publishPackage = publishPackage;
