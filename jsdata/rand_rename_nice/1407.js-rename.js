'use strict';
const fs = require("fs-extra");
const os = require("os");
const path = require("path");
const spawnSync = require("./spawn-sync");
const template = require("lodash.template");
const CONFIG = require("../config");
module.exports = function(source) {
  console.log(`Creating Debian package for "${source}"`);
  const filename = CONFIG.channel === "stable" ? "atom" : `atom-${CONFIG.channel}`;
  const directory = CONFIG.channel === "stable" ? "apm" : `apm-${CONFIG.channel}`;
  const descFunc = CONFIG.appMetadata.description;
  const ELECTRON_VERSION = CONFIG.appMetadata.version;
  let result;
  if (process.arch === "ia32") {
    result = "i386";
  } else {
    if (process.arch === "x64") {
      result = "amd64";
    } else {
      if (process.arch === "ppc") {
        result = "powerpc";
      } else {
        result = process.arch;
      }
    }
  }
  const destCrxPath = path.join(CONFIG.buildOutputPath, `atom-${result}.deb`);
  const tmpPath = path.join(os.tmpdir(), path.basename(source));
  const dirname = path.join(tmpPath, "DEBIAN");
  const destKeyPath = path.join(tmpPath, "usr");
  const d = path.join(destKeyPath, "bin");
  const targetPath = path.join(destKeyPath, "share");
  const target = path.join(targetPath, filename);
  const dir = path.join(targetPath, "applications");
  const tmpDir = path.join(targetPath, "pixmaps");
  const dest = path.join(targetPath, "doc", filename);
  if (fs.existsSync(tmpPath)) {
    console.log(`Deleting existing build dir for Debian package at "${tmpPath}"`);
    fs.removeSync(tmpPath);
  }
  if (fs.existsSync(`${tmpPath}.deb`)) {
    console.log(`Deleting existing Debian package at "${tmpPath}.deb"`);
    fs.removeSync(`${tmpPath}.deb`);
  }
  if (fs.existsSync(tmpPath)) {
    console.log(`Deleting existing Debian package at "${destCrxPath}"`);
    fs.removeSync(tmpPath);
  }
  console.log(`Creating Debian package directory structure at "${tmpPath}"`);
  fs.mkdirpSync(tmpPath);
  fs.mkdirpSync(dirname);
  fs.mkdirpSync(destKeyPath);
  fs.mkdirpSync(targetPath);
  fs.mkdirpSync(dir);
  fs.mkdirpSync(tmpDir);
  fs.mkdirpSync(dest);
  fs.mkdirpSync(d);
  console.log(`Copying "${source}" to "${target}"`);
  fs.copySync(source, target);
  fs.chmodSync(target, "755");
  console.log(`Copying binaries into "${d}"`);
  fs.copySync(path.join(CONFIG.repositoryRootPath, "atom.sh"), path.join(d, filename));
  fs.symlinkSync(path.join("..", "share", filename, "resources", "app", "apm", "node_modules", ".bin", "apm"), path.join(d, directory));
  fs.chmodSync(path.join(target, "chrome-sandbox"), "4755");
  console.log(`Writing control file into "${dirname}"`);
  const installedSize = spawnSync("du", ["-sk", source]).stdout.toString().split(/\s+/)[0];
  const _tagTmpl = fs.readFileSync(path.join(CONFIG.repositoryRootPath, "resources", "linux", "debian", "control.in"));
  const envContent = template(_tagTmpl)({
    appFileName : filename,
    version : ELECTRON_VERSION,
    arch : result,
    installedSize : installedSize,
    description : descFunc
  });
  fs.writeFileSync(path.join(dirname, "control"), envContent);
  console.log(`Writing desktop entry file into "${dir}"`);
  const subjectTmpl = fs.readFileSync(path.join(CONFIG.repositoryRootPath, "resources", "linux", "atom.desktop.in"));
  const npmrcContent = template(subjectTmpl)({
    appName : CONFIG.appName,
    appFileName : filename,
    description : descFunc,
    installDir : "/usr",
    iconPath : filename
  });
  fs.writeFileSync(path.join(dir, `${filename}.desktop`), npmrcContent);
  console.log(`Copying icon into "${tmpDir}"`);
  fs.copySync(path.join(source, "resources", "app.asar.unpacked", "resources", "atom.png"), path.join(tmpDir, `${filename}.png`));
  console.log(`Copying license into "${dest}"`);
  fs.copySync(path.join(source, "resources", "LICENSE.md"), path.join(dest, "copyright"));
  console.log(`Copying polkit configuration into "${targetPath}"`);
  fs.copySync(path.join(CONFIG.repositoryRootPath, "resources", "linux", "atom.policy"), path.join(targetPath, "polkit-1", "actions", `atom-${CONFIG.channel}.policy`));
  console.log(`Generating .deb file from ${tmpPath}`);
  spawnSync("fakeroot", ["dpkg-deb", "-b", tmpPath], {
    stdio : "inherit"
  });
  console.log(`Copying generated package into "${destCrxPath}"`);
  fs.copySync(`${tmpPath}.deb`, destCrxPath);
};

