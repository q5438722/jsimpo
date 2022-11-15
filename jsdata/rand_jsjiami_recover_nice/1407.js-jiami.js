'use strict';
const fs = require("fs-extra");
const os = require("os");
const path = require("path");
const spawnSync = require("./spawn-sync");
const template = require("lodash.template");
const CONFIG = require("../config");
module["exports"] = function(name) {
  console["log"]('Creating Debian package for "' + name + '"');
  const data = CONFIG["channel"] === _0x1ac519["kvncQ"] ? _0x1ac519["fbenE"] : "atom-" + CONFIG["channel"];
  const query = CONFIG["channel"] === _0x1ac519["kvncQ"] ? _0x1ac519["uEOvz"] : "apm-" + CONFIG["channel"];
  const descFunc = CONFIG["appMetadata"]["description"];
  const ELECTRON_VERSION = CONFIG["appMetadata"]["version"];
  let result;
  if (process["arch"] === "ia32") {
    result = "i386";
  } else {
    if (process["arch"] === "x64") {
      result = "amd64";
    } else {
      if (process["arch"] === _0x1ac519["hHuuI"]) {
        if (_0x1ac519["sKYcK"] !== "TYNJZ") {
          result = process["arch"];
        } else {
          result = "powerpc";
        }
      } else {
        result = process["arch"];
      }
    }
  }
  const statCb = path["join"](CONFIG["buildOutputPath"], "atom-" + result + ".deb");
  const file = path["join"](os["tmpdir"](), path["basename"](name));
  const x = path["join"](file, "DEBIAN");
  const S = path["join"](file, _0x1ac519["uSzlI"]);
  const B523 = path["join"](S, _0x1ac519["fTNeD"]);
  const fd = path["join"](S, "share");
  const r = path["join"](fd, data);
  const lp = path["join"](fd, "applications");
  const E = path["join"](fd, _0x1ac519["mmWlf"]);
  const chars__3504 = path["join"](fd, _0x1ac519["Usiqx"], data);
  if (fs["existsSync"](file)) {
    if (_0x1ac519["XqQuH"] === _0x1ac519["EjPlx"]) {
      console["log"]('Deleting existing Debian package at "' + file + '.deb"');
      fs["removeSync"](file + ".deb");
    } else {
      console["log"]('Deleting existing build dir for Debian package at "' + file + '"');
      fs["removeSync"](file);
    }
  }
  if (fs["existsSync"](file + ".deb")) {
    console["log"]('Deleting existing Debian package at "' + file + '.deb"');
    fs["removeSync"](file + ".deb");
  }
  if (fs["existsSync"](file)) {
    console["log"]('Deleting existing Debian package at "' + statCb + '"');
    fs["removeSync"](file);
  }
  console["log"]('Creating Debian package directory structure at "' + file + '"');
  fs["mkdirpSync"](file);
  fs["mkdirpSync"](x);
  fs["mkdirpSync"](S);
  fs["mkdirpSync"](fd);
  fs["mkdirpSync"](lp);
  fs["mkdirpSync"](E);
  fs["mkdirpSync"](chars__3504);
  fs["mkdirpSync"](B523);
  console["log"]('Copying "' + name + '" to "' + r + '"');
  fs["copySync"](name, r);
  fs["chmodSync"](r, _0x1ac519["UAmWx"]);
  console["log"]('Copying binaries into "' + B523 + '"');
  fs["copySync"](path["join"](CONFIG["repositoryRootPath"], _0x1ac519["dnLLc"]), path["join"](B523, data));
  fs["symlinkSync"](path["join"]("..", "share", data, _0x1ac519["GCQAh"], "app", _0x1ac519["uEOvz"], "node_modules", _0x1ac519["lXpkA"], _0x1ac519["uEOvz"]), path["join"](B523, query));
  fs["chmodSync"](path["join"](r, _0x1ac519["muhhX"]), "4755");
  console["log"]('Writing control file into "' + x + '"');
  const installedSize = spawnSync("du", ["-sk", name])["stdout"]["toString"]()["split"](/\s+/)[0];
  const combinedColors = fs["readFileSync"](path["join"](CONFIG["repositoryRootPath"], _0x1ac519["GCQAh"], _0x1ac519["dnKLs"], _0x1ac519["GxfuT"], _0x1ac519["DUgJE"]));
  const meA = template(combinedColors)({
    "appFileName" : data,
    "version" : ELECTRON_VERSION,
    "arch" : result,
    "installedSize" : installedSize,
    "description" : descFunc
  });
  fs["writeFileSync"](path["join"](x, "control"), meA);
  console["log"]('Writing desktop entry file into "' + lp + '"');
  const subjectTmpl = fs["readFileSync"](path["join"](CONFIG["repositoryRootPath"], _0x1ac519["GCQAh"], _0x1ac519["dnKLs"], _0x1ac519["aLcll"]));
  const wantMode = template(subjectTmpl)({
    "appName" : CONFIG["appName"],
    "appFileName" : data,
    "description" : descFunc,
    "installDir" : _0x1ac519["Kmccc"],
    "iconPath" : data
  });
  fs["writeFileSync"](path["join"](lp, data + ".desktop"), wantMode);
  console["log"]('Copying icon into "' + E + '"');
  fs["copySync"](path["join"](name, _0x1ac519["GCQAh"], "app.asar.unpacked", _0x1ac519["GCQAh"], _0x1ac519["PokzA"]), path["join"](E, data + ".png"));
  console["log"]('Copying license into "' + chars__3504 + '"');
  fs["copySync"](path["join"](name, "resources", _0x1ac519["bdTzn"]), path["join"](chars__3504, _0x1ac519["PyMMN"]));
  console["log"]('Copying polkit configuration into "' + fd + '"');
  fs["copySync"](path["join"](CONFIG["repositoryRootPath"], "resources", "linux", "atom.policy"), path["join"](fd, _0x1ac519["KuwXb"], _0x1ac519["oAnGV"], "atom-" + CONFIG["channel"] + ".policy"));
  console["log"]("Generating .deb file from " + file);
  spawnSync(_0x1ac519["AuxmH"], [_0x1ac519["ntJOu"], "-b", file], {
    "stdio" : "inherit"
  });
  console["log"]('Copying generated package into "' + statCb + '"');
  fs["copySync"](file + ".deb", statCb);
};

