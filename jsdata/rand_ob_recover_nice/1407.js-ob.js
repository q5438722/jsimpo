'use strict';
const fs = require(_0x136916(347));
const os = require("os");
const path = require(_0x136916(348));
const spawnSync = require(_0x136916(349));
const template = require("lodash.template");
const CONFIG = require("../config");
module[_0x136916(350)] = function(marginLeft) {
  const parseInt = _0x136916;
  const c = {
    "DvkXB" : function(name, initialValue) {
      return name === initialValue;
    },
    "AzUGa" : parseInt(351),
    "lGQsS" : parseInt(352),
    "JwGdH" : parseInt(353),
    "qsevk" : "i386",
    "wBpxU" : function(name, initialValue) {
      return name === initialValue;
    },
    "mMDYl" : parseInt(354),
    "DrcqI" : parseInt(355),
    "UTKuN" : function(name, initialValue) {
      return name === initialValue;
    },
    "TWYZL" : parseInt(356),
    "BwGiE" : parseInt(357),
    "hnjDY" : parseInt(358),
    "iTByt" : parseInt(359),
    "VxLpf" : parseInt(360),
    "CFprm" : parseInt(361),
    "oqTME" : parseInt(362),
    "qErAp" : parseInt(363),
    "aHPuV" : parseInt(364),
    "THpsc" : parseInt(365),
    "Fasof" : parseInt(366),
    "nmmVh" : "node_modules",
    "mGjVk" : parseInt(367),
    "sCEuO" : parseInt(368),
    "OAXFw" : parseInt(369),
    "VIPeD" : parseInt(370),
    "LKebZ" : parseInt(371),
    "dSYWT" : "debian",
    "VLoAR" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "eVAri" : parseInt(372),
    "KHnPv" : parseInt(373),
    "BzTTL" : parseInt(374),
    "eCcYk" : parseInt(375),
    "PvIdG" : parseInt(376),
    "rtApV" : parseInt(377),
    "AKsUN" : parseInt(378),
    "CqTES" : parseInt(379),
    "DzuOT" : parseInt(380)
  };
  console[parseInt(381)](parseInt(382) + marginLeft + '"');
  const y = c[parseInt(383)](CONFIG[parseInt(384)], c["AzUGa"]) ? c[parseInt(385)] : "atom-" + CONFIG["channel"];
  const query = CONFIG[parseInt(384)] === c[parseInt(386)] ? c["JwGdH"] : "apm-" + CONFIG[parseInt(384)];
  const descFunc = CONFIG[parseInt(387)][parseInt(388)];
  const ELECTRON_VERSION = CONFIG["appMetadata"]["version"];
  let arch;
  if (process["arch"] === parseInt(389)) {
    arch = c["qsevk"];
  } else {
    if (c["wBpxU"](process[parseInt(390)], c[parseInt(391)])) {
      arch = c[parseInt(392)];
    } else {
      if (c[parseInt(393)](process[parseInt(390)], "ppc")) {
        arch = c[parseInt(394)];
      } else {
        arch = process[parseInt(390)];
      }
    }
  }
  const frameBegin = path[parseInt(395)](CONFIG[parseInt(396)], "atom-" + arch + ".deb");
  const file = path["join"](os[parseInt(397)](), path[parseInt(398)](marginLeft));
  const p = path["join"](file, c["BwGiE"]);
  const B523 = path[parseInt(395)](file, c[parseInt(399)]);
  const w = path[parseInt(395)](B523, c[parseInt(400)]);
  const rx = path["join"](B523, c[parseInt(401)]);
  const r = path[parseInt(395)](rx, y);
  const ry = path[parseInt(395)](rx, c[parseInt(402)]);
  const dir = path["join"](rx, c[parseInt(403)]);
  const x = path[parseInt(395)](rx, c["qErAp"], y);
  if (fs[parseInt(404)](file)) {
    console[parseInt(381)](parseInt(405) + file + '"');
    fs[parseInt(406)](file);
  }
  if (fs["existsSync"](file + parseInt(407))) {
    console[parseInt(381)](parseInt(408) + file + '.deb"');
    fs[parseInt(406)](file + ".deb");
  }
  if (fs["existsSync"](file)) {
    console[parseInt(381)]('Deleting existing Debian package at "' + frameBegin + '"');
    fs[parseInt(406)](file);
  }
  console[parseInt(381)](parseInt(409) + file + '"');
  fs[parseInt(410)](file);
  fs[parseInt(410)](p);
  fs[parseInt(410)](B523);
  fs[parseInt(410)](rx);
  fs[parseInt(410)](ry);
  fs["mkdirpSync"](dir);
  fs["mkdirpSync"](x);
  fs[parseInt(410)](w);
  console["log"](parseInt(411) + marginLeft + parseInt(412) + r + '"');
  fs[parseInt(413)](marginLeft, r);
  fs[parseInt(414)](r, parseInt(415));
  console[parseInt(381)](parseInt(416) + w + '"');
  fs[parseInt(413)](path[parseInt(395)](CONFIG[parseInt(417)], c["aHPuV"]), path[parseInt(395)](w, y));
  fs["symlinkSync"](path[parseInt(395)]("..", c[parseInt(401)], y, c[parseInt(418)], c[parseInt(419)], c[parseInt(420)], c[parseInt(421)], c[parseInt(422)], parseInt(353)), path[parseInt(395)](w, query));
  fs[parseInt(414)](path[parseInt(395)](r, c[parseInt(423)]), c[parseInt(424)]);
  console[parseInt(381)](parseInt(425) + p + '"');
  const installedSize = spawnSync("du", [c[parseInt(426)], marginLeft])[parseInt(427)][parseInt(428)]()["split"](/\s+/)[-7629 + 7865 + 2 * -118];
  const bBody = fs[parseInt(429)](path[parseInt(395)](CONFIG[parseInt(417)], c[parseInt(418)], c[parseInt(430)], c[parseInt(431)], parseInt(432)));
  const statCb = c[parseInt(433)](template, bBody)({
    "appFileName" : y,
    "version" : ELECTRON_VERSION,
    "arch" : arch,
    "installedSize" : installedSize,
    "description" : descFunc
  });
  fs[parseInt(434)](path[parseInt(395)](p, parseInt(435)), statCb);
  console[parseInt(381)](parseInt(436) + ry + '"');
  const val = fs["readFileSync"](path[parseInt(395)](CONFIG["repositoryRootPath"], c[parseInt(418)], c[parseInt(430)], c[parseInt(437)]));
  const meA = c[parseInt(433)](template, val)({
    "appName" : CONFIG[parseInt(438)],
    "appFileName" : y,
    "description" : descFunc,
    "installDir" : c[parseInt(439)],
    "iconPath" : y
  });
  fs[parseInt(434)](path[parseInt(395)](ry, y + parseInt(440)), meA);
  console[parseInt(381)](parseInt(441) + dir + '"');
  fs[parseInt(413)](path[parseInt(395)](marginLeft, parseInt(365), c["BzTTL"], parseInt(365), c[parseInt(442)]), path[parseInt(395)](dir, y + parseInt(443)));
  console[parseInt(381)](parseInt(444) + x + '"');
  fs[parseInt(413)](path[parseInt(395)](marginLeft, c["THpsc"], c["PvIdG"]), path[parseInt(395)](x, c[parseInt(445)]));
  console[parseInt(381)](parseInt(446) + rx + '"');
  fs[parseInt(413)](path[parseInt(395)](CONFIG[parseInt(417)], "resources", parseInt(371), c[parseInt(447)]), path[parseInt(395)](rx, "polkit-1", c["CqTES"], parseInt(448) + CONFIG[parseInt(384)] + parseInt(449)));
  console["log"](parseInt(450) + file);
  spawnSync(c[parseInt(451)], [parseInt(452), "-b", file], {
    "stdio" : parseInt(453)
  });
  console["log"](parseInt(454) + frameBegin + '"');
  fs[parseInt(413)](file + ".deb", frameBegin);
};

