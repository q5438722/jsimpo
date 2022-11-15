'use strict';
const {
  writeFileSync : writeFileSync
} = require(`fs`);
const yargs = require(`yargs`);
const {
  getPackages : getPackages
} = require(`@lerna/project`);
const PackageGraph = require(`@lerna/package-graph`);
const semver = require(`semver`);
let warned = false;
const argv = yargs.option(`fix`, {
  default : false,
  describe : `Fixes outdated dependencies`
}).option(`allow-next`, {
  default : false,
  describe : `Allow using "next" versions. Use this only for alpha/beta releases`
}).argv;
getPackages(process.cwd()).then((packages) => {
  const _this = new PackageGraph(packages, `allDependencies`, true);
  _this.forEach((a, n) => {
    let hooksWithName = Array.from(a.localDependencies.values()).filter((dep) => {
      return !semver.satisfies(_this.get(dep.name).version, dep.fetchSpec);
    });
    if (argv[`allow-next`]) {
      hooksWithName = hooksWithName.filter((res) => {
        return res.fetchSpec !== `next`;
      });
    }
    if (!hooksWithName.length) {
      return;
    }
    const stripeAPIVersion = hooksWithName.map((dep) => {
      return `  Depends on "${dep.name}@${dep.fetchSpec}" \n` + `  instead of "${dep.name}@${_this.get(dep.name).version}". \n`;
    }).join(`\n`);
    console.error(`${a.name}: \n${stripeAPIVersion}`);
    warned = true;
    if (argv.fix) {
      const results = a.pkg;
      const data = results.toJSON();
      const pipelets = [`dependencies`, `devDependencies`, `peerDependencies`];
      hooksWithName.forEach((model) => {
        pipelets.forEach((i) => {
          if (results[i] && results[i][model.name]) {
            data[i][model.name] = `^${_this.get(model.name).version}`;
          }
        });
      });
      writeFileSync(`${results.location}/package.json`, JSON.stringify(data, null, 2));
    }
  });
  if (warned) {
    process.exit(1);
  }
});

