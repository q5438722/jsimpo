'use strict';
require(_0x2d9756(422));
const R = require(_0x2d9756(423));
const _ = require("lodash");
const path = require(_0x2d9756(424));
const EE = require(_0x2d9756(425));
const http = require(_0x2d9756(426));
const Promise = require("bluebird");
const electron = require(_0x2d9756(427));
const commitInfo = require(_0x2d9756(428));
const Fixtures = require("../support/helpers/fixtures");
const snapshot = require(_0x2d9756(429));
const stripAnsi = require("strip-ansi");
const debug = require(_0x2d9756(430))("test");
const pkg = require("@packages/root");
const detect = require(_0x2d9756(431));
const launch = require("@packages/launcher/lib/browsers");
const extension = require("@packages/extension");
const argsUtil = require(root + _0x2d9756(432));
const {
  fs : fs
} = require(root + _0x2d9756(433));
const ciProvider = require(root + _0x2d9756(434));
const settings = require(root + "lib/util/settings");
const Events = require(root + _0x2d9756(435));
const Windows = require(root + _0x2d9756(436));
const interactiveMode = require(root + _0x2d9756(437));
const runMode = require(root + _0x2d9756(438));
const api = require(root + "lib/api");
const cwd = require(root + _0x2d9756(439));
const user = require(root + "lib/user");
const config = require(root + _0x2d9756(440));
const cache = require(root + _0x2d9756(441));
const errors = require(root + _0x2d9756(442));
const plugins = require(root + _0x2d9756(443));
const cypress = require(root + _0x2d9756(444));
const ProjectBase = require(root + _0x2d9756(445))["ProjectBase"];
const {
  getId : getId
} = require(root + _0x2d9756(446));
const {
  ServerE2E : ServerE2E
} = require(root + _0x2d9756(447));
const Reporter = require(root + _0x2d9756(448));
const Watchers = require(root + _0x2d9756(449));
const browsers = require(root + _0x2d9756(450));
const videoCapture = require(root + "lib/video_capture");
const browserUtils = require(root + "lib/browsers/utils");
const chromeBrowser = require(root + "lib/browsers/chrome");
const openProject = require(root + _0x2d9756(451));
const env = require(root + _0x2d9756(452));
const v = require(root + _0x2d9756(453));
const system = require(root + _0x2d9756(454));
const appData = require(root + _0x2d9756(455));
const electronApp = require(_0x2d9756(456));
const savedState = require(root + "lib/saved_state");
const TYPICAL_BROWSERS = [{
  "name" : _0x2d9756(457),
  "family" : _0x2d9756(458),
  "channel" : "stable",
  "displayName" : _0x2d9756(459),
  "version" : _0x2d9756(460),
  "path" : _0x2d9756(461),
  "majorVersion" : "60"
}, {
  "name" : _0x2d9756(458),
  "family" : _0x2d9756(458),
  "channel" : _0x2d9756(462),
  "displayName" : _0x2d9756(463),
  "version" : "49.0.2609.0",
  "path" : _0x2d9756(464),
  "majorVersion" : "49"
}, {
  "name" : _0x2d9756(457),
  "family" : _0x2d9756(458),
  "channel" : _0x2d9756(465),
  "displayName" : _0x2d9756(466),
  "version" : _0x2d9756(467),
  "path" : _0x2d9756(468),
  "majorVersion" : "62"
}];
const ELECTRON_BROWSER = {
  "name" : _0x2d9756(427),
  "family" : "chromium",
  "displayName" : _0x2d9756(469),
  "path" : "",
  "version" : "99.101.1234",
  "majorVersion" : 99
};
const previousCwd = process[_0x2d9756(470)]();
const snapshotConsoleLogs = function(env__3792) {
  const getConsoleMethod = _0x2d9756;
  const B1222 = {
    "pUavq" : function(require, load, callback) {
      return require(load, callback);
    },
    "iJTzQ" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  const export__3797 = _[getConsoleMethod(471)](console[getConsoleMethod(472)]["args"])["map"]((myPreferences) => {
    const getPreferenceKey = getConsoleMethod;
    return myPreferences[getPreferenceKey(473)](" ");
  })[getConsoleMethod(473)]("\n")["value"]();
  return process["chdir"](previousCwd), B1222["pUavq"](snapshot, env__3792, B1222[getConsoleMethod(474)](stripAnsi, export__3797));
};
describe(_0x2d9756(444), () => {
  const getRefreshTokenKey = _0x2d9756;
  const data = {
    "sfbDy" : function(require, load, callback) {
      return require(load, callback);
    },
    "LRllJ" : getRefreshTokenKey(475),
    "MSHgM" : function(require, load, callback) {
      return require(load, callback);
    },
    "vzKij" : getRefreshTokenKey(476),
    "fPHOy" : "error text",
    "qbAwy" : getRefreshTokenKey(477),
    "yRBUA" : getRefreshTokenKey(478),
    "INLkF" : getRefreshTokenKey(479),
    "xWssL" : "plugin-browser",
    "ryFyG" : getRefreshTokenKey(480),
    "fGncg" : getRefreshTokenKey(481),
    "VSNUw" : getRefreshTokenKey(482),
    "lmyMb" : getRefreshTokenKey(483),
    "Yjtfv" : getRefreshTokenKey(484),
    "BqFbm" : getRefreshTokenKey(485),
    "CRoTE" : getRefreshTokenKey(486),
    "cjQJA" : "log",
    "zINpQ" : getRefreshTokenKey(487),
    "vGrCX" : getRefreshTokenKey(488),
    "HDxJf" : "123.45.6789",
    "TaXaA" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "nYjQX" : "browsers",
    "ePEWu" : getRefreshTokenKey(489),
    "wBOQe" : getRefreshTokenKey(458),
    "UprTw" : getRefreshTokenKey(490),
    "IzBKZ" : "/some/path",
    "diyvO" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "fueFB" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "sJWPz" : function(require, load, callback) {
      return require(load, callback);
    },
    "oldFy" : "allows browser major to be a number",
    "JRkxf" : function(require, load, callback) {
      return require(load, callback);
    },
    "nVhBh" : getRefreshTokenKey(491),
    "ckGvT" : getRefreshTokenKey(492),
    "HvvCM" : getRefreshTokenKey(493),
    "yaJtr" : getRefreshTokenKey(494),
    "UDPMV" : getRefreshTokenKey(495),
    "qqNGa" : getRefreshTokenKey(496),
    "IwSOi" : getRefreshTokenKey(497),
    "oLXeJ" : function(require, load, callback) {
      return require(load, callback);
    },
    "JvsFD" : getRefreshTokenKey(498),
    "WdZIT" : getRefreshTokenKey(499),
    "mgSos" : function(require, load, callback) {
      return require(load, callback);
    },
    "bnjLh" : "exits if reporter options cannot be parsed",
    "GEiMQ" : getRefreshTokenKey(500),
    "RkbSS" : "--config=test=false",
    "VHzeO" : getRefreshTokenKey(501),
    "VyXwM" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "KtBiT" : getRefreshTokenKey(502),
    "NhqEO" : getRefreshTokenKey(503),
    "eigWf" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "sfuJx" : getRefreshTokenKey(504),
    "LnniM" : getRefreshTokenKey(505),
    "mRwkf" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "VQhUU" : function(require, load, callback) {
      return require(load, callback);
    },
    "XsUxT" : function(require, load, callback) {
      return require(load, callback);
    },
    "gQQCL" : getRefreshTokenKey(506),
    "fJnMn" : getRefreshTokenKey(507),
    "xAshx" : getRefreshTokenKey(508),
    "ZlsJJ" : getRefreshTokenKey(509),
    "BMCZa" : getRefreshTokenKey(510),
    "rYOjH" : "open",
    "nvgHW" : getRefreshTokenKey(511),
    "HNFJn" : getRefreshTokenKey(512),
    "BYGxL" : getRefreshTokenKey(513),
    "ZaAxN" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "DSNYn" : function(require, load, callback) {
      return require(load, callback);
    },
    "iArGk" : getRefreshTokenKey(514),
    "LqUnX" : function(require, load, callback) {
      return require(load, callback);
    },
    "wDyDR" : getRefreshTokenKey(515),
    "SIAXP" : "runSpecs",
    "KHLAk" : getRefreshTokenKey(516),
    "PHSKK" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "bqgYr" : getRefreshTokenKey(517),
    "pWZZe" : "createProject",
    "utKYd" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "aclyq" : "port=2020",
    "qMtAm" : getRefreshTokenKey(518),
    "opzZH" : getRefreshTokenKey(519),
    "LzzGg" : getRefreshTokenKey(520),
    "RUcdI" : "--reporter=nyan",
    "suwAV" : "--key=asdf",
    "lhgyX" : function(require, load, callback) {
      return require(load, callback);
    },
    "pxXre" : getRefreshTokenKey(521),
    "ulAne" : function(require, load, callback) {
      return require(load, callback);
    },
    "DTjqD" : function(require, load, callback) {
      return require(load, callback);
    },
    "foNKF" : "--browser=foo",
    "ymicl" : "{'foo': 'bar}",
    "nwSHD" : "localhost:9999",
    "oBdBL" : "CONFIG_VALIDATION_ERROR",
    "cQfik" : getRefreshTokenKey(522),
    "HdXCU" : "--config=baseUrl=localhost:9999",
    "hsBuB" : function(name, initialValue) {
      return name === initialValue;
    },
    "qAEbP" : "cypress.json",
    "LGREj" : function(require, load, callback) {
      return require(load, callback);
    },
    "OUoHd" : getRefreshTokenKey(523),
    "nLrNe" : getRefreshTokenKey(524),
    "zxhvw" : getRefreshTokenKey(457),
    "RrGsr" : "foo",
    "YPdgW" : "_connectToChromeRemoteInterface",
    "ujlQV" : "_navigateUsingCRI",
    "boFay" : getRefreshTokenKey(525),
    "HmUwc" : getRefreshTokenKey(427),
    "gnmIy" : function(require, load, callback) {
      return require(load, callback);
    },
    "drHhv" : getRefreshTokenKey(526),
    "pqcMC" : "--port=5544",
    "YAUao" : getRefreshTokenKey(527),
    "QhTDM" : getRefreshTokenKey(528),
    "iWHrC" : getRefreshTokenKey(529),
    "cEBbv" : getRefreshTokenKey(530),
    "zzfDN" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "bFhGK" : function(require, load, callback) {
      return require(load, callback);
    },
    "aSBCx" : getRefreshTokenKey(531),
    "GhQdn" : getRefreshTokenKey(532),
    "GyoVg" : getRefreshTokenKey(533),
    "tpZAQ" : getRefreshTokenKey(534),
    "kgqRw" : getRefreshTokenKey(535),
    "sDYOn" : getRefreshTokenKey(536),
    "VtBsf" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "jZZmf" : "e2e",
    "XEpNb" : getRefreshTokenKey(537),
    "ebPrP" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "BUmtZ" : getRefreshTokenKey(538),
    "DCwPj" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "DkAYr" : getRefreshTokenKey(539),
    "hPhrk" : getRefreshTokenKey(540),
    "EYhqL" : "1-getting-started",
    "VNUqS" : getRefreshTokenKey(541),
    "xdgAo" : getRefreshTokenKey(542),
    "EGrvc" : getRefreshTokenKey(543),
    "dvpor" : getRefreshTokenKey(544),
    "LSsBK" : getRefreshTokenKey(545),
    "IsFWG" : getRefreshTokenKey(546),
    "oQsXR" : getRefreshTokenKey(547),
    "WJMtG" : "integration folder should not exist!",
    "HVjwY" : getRefreshTokenKey(548),
    "Lskwq" : getRefreshTokenKey(549),
    "QgFiQ" : function(saveNotifs) {
      return saveNotifs();
    },
    "yhegQ" : "http://localhost:8888",
    "rjMDY" : getRefreshTokenKey(550),
    "VOlpL" : getRefreshTokenKey(551),
    "jDaCx" : "You also provided your Record Key, but you did not pass the --record flag.",
    "WzxdD" : getRefreshTokenKey(552),
    "nthRV" : getRefreshTokenKey(553),
    "PwnIi" : getRefreshTokenKey(554),
    "fyxZC" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "asiMD" : "Your `supportFile` is set to `/does/not/exist`,",
    "lojKg" : getRefreshTokenKey(555),
    "GuKjy" : "We searched for any files matching this glob pattern:",
    "fTYQd" : getRefreshTokenKey(556),
    "QANKi" : "--config=integrationFolder=cypress/specs",
    "OaqVO" : function(require, load, callback) {
      return require(load, callback);
    },
    "QqyDR" : getRefreshTokenKey(557),
    "NAfcF" : getRefreshTokenKey(558),
    "pSjfJ" : "RENAMED_CONFIG_OPTION",
    "IBPyA" : getRefreshTokenKey(559),
    "UAiag" : getRefreshTokenKey(560),
    "YGmIW" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ZofCU" : getRefreshTokenKey(561),
    "zXpku" : "--env=foo=foo,bar=bar",
    "sUJuE" : getRefreshTokenKey(562),
    "rTalX" : getRefreshTokenKey(563),
    "dJzca" : getRefreshTokenKey(564),
    "dqiuu" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "TDogX" : "listen",
    "OhHAI" : "5544",
    "SZzVV" : getRefreshTokenKey(565),
    "TaeSP" : getRefreshTokenKey(566),
    "YjESt" : "abcdefgh.test.json",
    "yTjxM" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "YlWXr" : function(require, load, callback) {
      return require(load, callback);
    },
    "pjmlq" : "runs project headlessly and exits with exit code 0",
    "RUkES" : function(require, load, callback) {
      return require(load, callback);
    },
    "DtEoS" : "sets --headed false if --headless",
    "xWhUd" : getRefreshTokenKey(567),
    "trLxE" : function(require, load, callback) {
      return require(load, callback);
    },
    "rLxaK" : getRefreshTokenKey(568),
    "CXEEf" : "runs project headlessly and exits with exit code 10",
    "hpbjO" : function(require, load, callback) {
      return require(load, callback);
    },
    "uqvFS" : getRefreshTokenKey(569),
    "hZRqE" : function(require, load, callback) {
      return require(load, callback);
    },
    "RoCnX" : getRefreshTokenKey(570),
    "PNbQf" : getRefreshTokenKey(571),
    "jTraA" : getRefreshTokenKey(572),
    "DBpYB" : getRefreshTokenKey(573),
    "sOkCM" : function(require, load, callback) {
      return require(load, callback);
    },
    "dCoZR" : getRefreshTokenKey(574),
    "IlPJb" : function(require, load, callback) {
      return require(load, callback);
    },
    "OzgAR" : function(require, load, callback) {
      return require(load, callback);
    },
    "fHeUN" : "does not scaffold when headless and exits with error when no existing project",
    "InfrD" : getRefreshTokenKey(575),
    "TDEQK" : getRefreshTokenKey(576),
    "uXDtH" : function(require, load, callback) {
      return require(load, callback);
    },
    "HeIkB" : getRefreshTokenKey(577),
    "GjGls" : getRefreshTokenKey(578),
    "XUWAb" : function(require, load, callback) {
      return require(load, callback);
    },
    "vsdoS" : getRefreshTokenKey(579),
    "RvYiG" : getRefreshTokenKey(580),
    "FkzpQ" : getRefreshTokenKey(581),
    "sDDgU" : function(require, load, callback) {
      return require(load, callback);
    },
    "SLhYc" : getRefreshTokenKey(582),
    "SnTxg" : function(require, load, callback) {
      return require(load, callback);
    },
    "XCnwM" : getRefreshTokenKey(583),
    "SLaIi" : getRefreshTokenKey(584),
    "zuAkm" : function(require, load, callback) {
      return require(load, callback);
    },
    "kmmEB" : "does not log warning when no projectId",
    "sSpGp" : function(require, load, callback) {
      return require(load, callback);
    },
    "qAJPn" : getRefreshTokenKey(585),
    "pdBBf" : getRefreshTokenKey(586),
    "JiDwX" : function(require, load, callback) {
      return require(load, callback);
    },
    "LMUeu" : "logs error and exits when project has invalid cypress.json values",
    "igtMC" : "logs error and exits when project has invalid config values from the CLI",
    "qtXBu" : function(require, load, callback) {
      return require(load, callback);
    },
    "pjkPh" : "blacklistHosts",
    "WxGNw" : getRefreshTokenKey(587),
    "WvpUD" : function(require, load, callback) {
      return require(load, callback);
    },
    "uKdLN" : getRefreshTokenKey(588),
    "DzVss" : function(require, load, callback) {
      return require(load, callback);
    },
    "mEmFN" : getRefreshTokenKey(589),
    "kwubs" : function(require, load, callback) {
      return require(load, callback);
    },
    "dkgXx" : getRefreshTokenKey(590),
    "jhMzi" : getRefreshTokenKey(591),
    "JMBLD" : function(require, load, callback) {
      return require(load, callback);
    },
    "dQYRx" : getRefreshTokenKey(592),
    "EjyRW" : "--record",
    "KzVYK" : getRefreshTokenKey(593),
    "yONPw" : getRefreshTokenKey(594),
    "DVGts" : getRefreshTokenKey(595),
    "DobpN" : getRefreshTokenKey(596),
    "RfKCZ" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "nnOEi" : "provider",
    "gDFpL" : getRefreshTokenKey(597),
    "JjgGA" : getRefreshTokenKey(598),
    "JrFvY" : getRefreshTokenKey(599),
    "Oenpx" : getRefreshTokenKey(600),
    "tgNIh" : "darwin",
    "xGUDM" : getRefreshTokenKey(469),
    "FylEE" : "PARALLEL_GROUP_PARAMS_MISMATCH",
    "OHeoX" : getRefreshTokenKey(601),
    "yLKkK" : getRefreshTokenKey(602),
    "ItGsQ" : getRefreshTokenKey(603),
    "Uhqfh" : getRefreshTokenKey(604),
    "WhzZM" : getRefreshTokenKey(605),
    "XxuMF" : "--tag=nightly",
    "McfTi" : getRefreshTokenKey(606),
    "hUrxn" : getRefreshTokenKey(607),
    "WhmPD" : "path/to/video",
    "jHcjX" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "FlAUP" : getRefreshTokenKey(608),
    "HULXy" : "INDETERMINATE_CI_BUILD_ID-group 1",
    "VcEKm" : getRefreshTokenKey(609),
    "bHbyK" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ToNNz" : getRefreshTokenKey(610),
    "hkLic" : getRefreshTokenKey(611),
    "VXfVL" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "OktMa" : getRefreshTokenKey(612),
    "SrEJF" : getRefreshTokenKey(613),
    "OvziN" : getRefreshTokenKey(614),
    "VUTFR" : getRefreshTokenKey(615),
    "CReSn" : getRefreshTokenKey(616),
    "kVstY" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "KenLj" : getRefreshTokenKey(617),
    "yWBqp" : "DASHBOARD_PARALLEL_GROUP_PARAMS_MISMATCH",
    "stVhQ" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "iqZQP" : getRefreshTokenKey(618),
    "eXQCR" : getRefreshTokenKey(619),
    "Zapia" : getRefreshTokenKey(620),
    "qyCMb" : getRefreshTokenKey(621),
    "OIFNa" : getRefreshTokenKey(622),
    "mZKGd" : "DASHBOARD_STALE_RUN 1",
    "dMYze" : getRefreshTokenKey(623),
    "sGsGa" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ZkJWD" : "uses process.env.CYPRESS_PROJECT_ID",
    "Vcxib" : function(require, load, callback) {
      return require(load, callback);
    },
    "CiylW" : getRefreshTokenKey(624),
    "FTAlF" : getRefreshTokenKey(625),
    "yaIje" : "errors and exits when using --parallel but ciBuildId could not be generated",
    "GTdOk" : "errors and exits when using --parallel and --group but ciBuildId could not be generated",
    "sOZrF" : function(require, load, callback) {
      return require(load, callback);
    },
    "rWsMq" : getRefreshTokenKey(626),
    "MpiAa" : getRefreshTokenKey(627),
    "WfMCF" : getRefreshTokenKey(628),
    "vmjmb" : function(require, load, callback) {
      return require(load, callback);
    },
    "cCYfI" : function(require, load, callback) {
      return require(load, callback);
    },
    "eRReB" : getRefreshTokenKey(629),
    "IXxVp" : getRefreshTokenKey(630),
    "rBOTD" : function(require, load, callback) {
      return require(load, callback);
    },
    "Xnqqh" : getRefreshTokenKey(631),
    "KiHgn" : function(require, load, callback) {
      return require(load, callback);
    },
    "dgdDd" : "errors and exits when parallel is required",
    "mloPM" : getRefreshTokenKey(632),
    "GoaxL" : getRefreshTokenKey(633),
    "lJHea" : getRefreshTokenKey(634),
    "dzISJ" : "logs package.json and exits",
    "FpgBy" : getRefreshTokenKey(635),
    "BsujA" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "vpvAj" : getRefreshTokenKey(636),
    "EltDJ" : getRefreshTokenKey(637),
    "khWCf" : "abc123",
    "fJsQn" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "Xglmh" : function(require, load, callback) {
      return require(load, callback);
    },
    "rRwmR" : "logs pong value and exits",
    "ViLJX" : "--updating",
    "KflhX" : getRefreshTokenKey(638),
    "jAwoW" : getRefreshTokenKey(639),
    "xyyXp" : getRefreshTokenKey(640),
    "ijBoi" : getRefreshTokenKey(641),
    "TUqhl" : getRefreshTokenKey(642),
    "RNGFf" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "Fgjhl" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "PSaMj" : getRefreshTokenKey(643),
    "dioKE" : getRefreshTokenKey(644),
    "sgkqP" : getRefreshTokenKey(645),
    "gbsHO" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "Ijeyo" : "responseTimeout",
    "aWHPR" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "AQIHC" : getRefreshTokenKey(646),
    "UqoIe" : getRefreshTokenKey(647),
    "kVbPm" : getRefreshTokenKey(648),
    "nMLvh" : getRefreshTokenKey(649),
    "mjgSE" : "auth-token-123",
    "fFViN" : getRefreshTokenKey(650),
    "ukJdX" : getRefreshTokenKey(651),
    "uKRbR" : getRefreshTokenKey(652),
    "RVLTk" : getRefreshTokenKey(653),
    "CFPrS" : "5|2|1|0|4|3",
    "WYcll" : getRefreshTokenKey(654),
    "jQbFN" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "KLzWh" : getRefreshTokenKey(655),
    "uIxqt" : getRefreshTokenKey(656),
    "SvMSW" : getRefreshTokenKey(657),
    "yrcAJ" : getRefreshTokenKey(658),
    "bAadi" : function(require, load, callback) {
      return require(load, callback);
    },
    "JSuhB" : "passes options to interactiveMode.ready",
    "imdwV" : function(require, load, callback) {
      return require(load, callback);
    },
    "aeKsb" : getRefreshTokenKey(659),
    "SnCLI" : function(require, load, callback) {
      return require(load, callback);
    },
    "EQkfY" : getRefreshTokenKey(660),
    "tqJrh" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "weJkP" : getRefreshTokenKey(661),
    "ujMpn" : getRefreshTokenKey(662),
    "puWXk" : getRefreshTokenKey(663),
    "CwJGR" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ZXVnJ" : "mocha-banner",
    "QRjYf" : getRefreshTokenKey(664),
    "ardwM" : function(require, load, callback) {
      return require(load, callback);
    },
    "XdleM" : "invalid config",
    "AVilY" : getRefreshTokenKey(665),
    "sLHdF" : function(require, load, callback) {
      return require(load, callback);
    },
    "VXCSm" : function(require, load, callback) {
      return require(load, callback);
    },
    "gcjtd" : getRefreshTokenKey(666),
    "MkJhS" : function(require, load, callback) {
      return require(load, callback);
    },
    "RSood" : getRefreshTokenKey(667),
    "qrahy" : function(require, load, callback) {
      return require(load, callback);
    },
    "FiyoN" : "no args"
  };
  data[getRefreshTokenKey(668)](require, data[getRefreshTokenKey(669)])["register"]();
  beforeEach(function() {
    const getKey = getRefreshTokenKey;
    this["timeout"](82 * -65 + -2918 + 16248);
    cache[getKey(670)]();
    Fixtures[getKey(671)]();
    this[getKey(672)] = Fixtures[getKey(673)](getKey(674));
    this[getKey(675)] = Fixtures[getKey(673)](data[getKey(676)]);
    this[getKey(677)] = Fixtures[getKey(673)](data[getKey(678)]);
    this[getKey(679)] = Fixtures[getKey(673)](getKey(680));
    this[getKey(681)] = Fixtures[getKey(673)](data["INLkF"]);
    this[getKey(682)] = Fixtures[getKey(673)](data[getKey(683)]);
    this[getKey(684)] = Fixtures[getKey(673)](getKey(685));
    sinon["stub"](videoCapture, getKey(654))[getKey(686)]({});
    sinon[getKey(687)](plugins, data[getKey(688)])["resolves"](undefined);
    sinon[getKey(687)](electronApp, data[getKey(689)])[getKey(690)](!![]);
    sinon[getKey(687)](extension, data[getKey(691)])[getKey(686)]();
    sinon[getKey(687)](detect, data[getKey(692)])[getKey(686)](TYPICAL_BROWSERS);
    sinon[getKey(687)](process, data["Yjtfv"]);
    sinon["stub"](ServerE2E[getKey(693)], getKey(694));
    sinon[getKey(687)](errors, data[getKey(695)])[getKey(696)]()[getKey(697)](data["CRoTE"])[getKey(690)](null);
    sinon[getKey(698)](errors, data["cjQJA"]);
    sinon[getKey(698)](errors, data["zINpQ"]);
    sinon[getKey(698)](console, data[getKey(699)]);
    sinon[getKey(687)](process, data[getKey(700)])["value"]({
      "chrome" : ELECTRON_BROWSER[getKey(701)],
      "electron" : data[getKey(702)]
    });
    this[getKey(703)] = (mmCoreSplitViewBlock) => {
      const gotoNewOfflinePage = getKey;
      expect(process[gotoNewOfflinePage(484)])["to"]["be"][gotoNewOfflinePage(704)](mmCoreSplitViewBlock);
    };
    this[getKey(705)] = (mmUserProfileHandlersTypeCommunication, n, a) => {
      const parseInt = getKey;
      data[parseInt(706)](expect, errors[parseInt(472)], data[parseInt(707)])["to"]["be"][parseInt(708)]({
        "type" : mmUserProfileHandlersTypeCommunication
      });
      data["MSHgM"](expect, process["exit"], data[parseInt(709)])["to"]["be"][parseInt(704)](-7356 + -3507 * 2 + 14371);
      const table = errors[parseInt(472)]["getCall"](22 * -181 + 71 * 42 + 1000)["args"][-1047 + -4348 + 5 * 1079];
      return n && expect(table["message"], data[parseInt(710)])["to"][parseInt(711)](n), a && data[parseInt(712)](expect, table[parseInt(713)], parseInt(714))["to"]["include"](a), table;
    };
  });
  afterEach(async() => {
    try {
      await openProject["close"]();
    } catch (_0x12b14c) {
    }
    Fixtures["remove"]();
  });
  context(getRefreshTokenKey(715), () => {
    const pluralize = getRefreshTokenKey;
    const s = {
      "PrhIA" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "xsedW" : data[pluralize(716)],
      "YdPEh" : function(_relatedTarget, position) {
        const getRefreshTokenKey = pluralize;
        return data[getRefreshTokenKey(717)](_relatedTarget, position);
      }
    };
    data["sJWPz"](it, pluralize(718), () => {
      const gotoNewOfflinePage = pluralize;
      s["PrhIA"](expect, v[gotoNewOfflinePage(719)](s["xsedW"], TYPICAL_BROWSERS))["to"]["be"][gotoNewOfflinePage(720)];
    });
    data[pluralize(721)](it, pluralize(722), () => {
      const getRefreshTokenKey = pluralize;
      data[getRefreshTokenKey(723)](expect, v[getRefreshTokenKey(719)](data["nYjQX"], [ELECTRON_BROWSER]))["to"]["be"][getRefreshTokenKey(720)];
    });
    it(data[pluralize(724)], () => {
      const getRefreshTokenKey = pluralize;
      const _0x44861b = {
        "name" : data[getRefreshTokenKey(725)],
        "family" : data["wBOQe"],
        "displayName" : "Edge Beta",
        "version" : data[getRefreshTokenKey(726)],
        "path" : data[getRefreshTokenKey(727)],
        "majorVersion" : 80
      };
      data[getRefreshTokenKey(728)](expect, v[getRefreshTokenKey(719)](data["nYjQX"], [_0x44861b]))["to"]["be"][getRefreshTokenKey(720)];
    });
    data["JRkxf"](it, data[pluralize(729)], () => {
      const gotoNewOfflinePage = pluralize;
      return browserUtils[gotoNewOfflinePage(730)]()[gotoNewOfflinePage(731)]((options) => {
        const prefixStyle = gotoNewOfflinePage;
        s[prefixStyle(732)](expect, v[prefixStyle(719)](prefixStyle(733), options))["to"]["be"][prefixStyle(720)];
      });
    });
  });
  context(data[getRefreshTokenKey(734)], function() {
    const pluralize = getRefreshTokenKey;
    const rpm_traffic = {
      "xxWjK" : data[pluralize(735)],
      "myxXx" : data[pluralize(736)],
      "JosZJ" : data["IwSOi"],
      "Rgmuw" : function(_relatedTarget, position, size) {
        const getRefreshTokenKey = pluralize;
        return data[getRefreshTokenKey(737)](_relatedTarget, position, size);
      },
      "CTFeb" : data[pluralize(738)],
      "IXuOB" : function(_relatedTarget, position) {
        const getRefreshTokenKey = pluralize;
        return data[getRefreshTokenKey(717)](_relatedTarget, position);
      }
    };
    data[pluralize(737)](it, pluralize(739), function() {
      const now = pluralize;
      const rightBranch = {
        "JfYkx" : rpm_traffic[now(740)]
      };
      return cypress["start"]([rpm_traffic[now(741)], rpm_traffic[now(742)]])[now(731)](() => {
        const findMiddlePosition = now;
        const leftBranch = this[findMiddlePosition(705)](rightBranch[findMiddlePosition(743)]);
        snapshot(findMiddlePosition(744), stripAnsi(leftBranch[findMiddlePosition(713)]));
      });
    });
    data[pluralize(737)](it, data[pluralize(745)], function() {
      const getRefreshTokenKey = pluralize;
      return cypress[getRefreshTokenKey(654)]([getRefreshTokenKey(530), data[getRefreshTokenKey(746)]])[getRefreshTokenKey(731)](() => {
        const edgeId = getRefreshTokenKey;
        const updatedEdgesById = this[edgeId(705)](rpm_traffic[edgeId(740)]);
        rpm_traffic[edgeId(747)](snapshot, rpm_traffic[edgeId(748)], rpm_traffic[edgeId(749)](stripAnsi, updatedEdgesById[edgeId(713)]));
      });
    });
    data["mgSos"](it, data[pluralize(750)], function() {
      const getRefreshTokenKey = pluralize;
      const serializer = {
        "AdzFv" : data[getRefreshTokenKey(735)],
        "MdRoY" : function(_relatedTarget, position, size) {
          const pluralize = getRefreshTokenKey;
          return data[pluralize(751)](_relatedTarget, position, size);
        },
        "ReEPp" : data[getRefreshTokenKey(752)],
        "sVwyS" : function(saveNotifs, notifications) {
          return saveNotifs(notifications);
        }
      };
      return cypress[getRefreshTokenKey(654)]([data[getRefreshTokenKey(753)], getRefreshTokenKey(754)])["then"](() => {
        const now = getRefreshTokenKey;
        const rpm_traffic = this["expectExitWithErr"](serializer[now(755)]);
        serializer[now(756)](snapshot, serializer[now(757)], serializer[now(758)](stripAnsi, rpm_traffic[now(713)]));
      });
    });
  });
  data[getRefreshTokenKey(759)](context, data[getRefreshTokenKey(760)], function() {
    const pluralize = getRefreshTokenKey;
    const rpm_traffic = {
      "uujjo" : data[pluralize(761)],
      "GTQfO" : data["KtBiT"],
      "oEVEo" : data[pluralize(762)]
    };
    data[pluralize(763)](beforeEach, function() {
      const getRefreshTokenKey = pluralize;
      this[getRefreshTokenKey(764)] = {
        "on" : sinon[getRefreshTokenKey(687)](),
        "webContents" : {
          "on" : sinon[getRefreshTokenKey(687)]()
        }
      };
      sinon[getRefreshTokenKey(687)](electron[getRefreshTokenKey(765)], "on")["withArgs"](data[getRefreshTokenKey(766)])[getRefreshTokenKey(767)]();
      sinon["stub"](Windows, getRefreshTokenKey(768))[getRefreshTokenKey(686)](this[getRefreshTokenKey(764)]);
    });
    it(pluralize(769), function() {
      const getRefreshTokenKey = pluralize;
      return cypress["start"]([data[getRefreshTokenKey(770)], data["VHzeO"]])[getRefreshTokenKey(731)](() => {
        const now = getRefreshTokenKey;
        expect(errors[now(485)])["to"]["be"][now(704)](rpm_traffic[now(771)]);
        expect(console[now(472)])["to"]["be"][now(708)](rpm_traffic["GTQfO"]);
        expect(console[now(472)])["to"]["be"]["calledWithMatch"](rpm_traffic[now(772)]);
      });
    });
    data["VQhUU"](it, pluralize(773), function() {
      const getRefreshTokenKey = pluralize;
      const rpm_traffic = {
        "Xfkvr" : "`foo` is not a valid configuration option",
        "spUEQ" : function(_relatedTarget, position) {
          const getRefreshTokenKey = _0x501e;
          return data[getRefreshTokenKey(774)](_relatedTarget, position);
        },
        "gWCCg" : data[getRefreshTokenKey(775)],
        "gYJnm" : function(saveNotifs, notifications) {
          return saveNotifs(notifications);
        },
        "engOS" : data[getRefreshTokenKey(761)],
        "LTJnF" : function(_relatedTarget, position) {
          const pluralize = getRefreshTokenKey;
          return data[pluralize(776)](_relatedTarget, position);
        },
        "DuVHH" : data["sfuJx"]
      };
      return cypress[getRefreshTokenKey(654)]([data[getRefreshTokenKey(777)], data["VHzeO"]])["then"](() => {
        const now = getRefreshTokenKey;
        const callbackVals = now(778)[now(779)]("|");
        let callbackCount = 8 * 331 + -112 * 52 + 3176;
        for (; !![];) {
          switch(callbackVals[callbackCount++]) {
            case "0":
              expect(console["log"])["to"]["be"][now(708)](rpm_traffic[now(780)]);
              continue;
            case "1":
              rpm_traffic[now(781)](expect, console[now(472)])["to"]["be"]["calledWithMatch"](rpm_traffic[now(782)]);
              continue;
            case "2":
              snapshotConsoleLogs("INVALID_CONFIG_OPTION");
              continue;
            case "3":
              rpm_traffic[now(783)](expect, errors[now(485)])["to"]["be"][now(704)](rpm_traffic[now(784)]);
              continue;
            case "4":
              rpm_traffic["LTJnF"](expect, console["log"])["to"]["be"][now(708)](rpm_traffic[now(785)]);
              continue;
          }
          break;
        }
      });
    });
    data[pluralize(786)](it, data[pluralize(787)], function() {
      const gotoNewOfflinePage = pluralize;
      return cypress["start"]([gotoNewOfflinePage(788)])[gotoNewOfflinePage(731)](() => {
        const now = gotoNewOfflinePage;
        expect(errors[now(485)])["to"][now(789)]["be"][now(704)](rpm_traffic[now(771)]);
      });
    });
  });
  data[getRefreshTokenKey(759)](context, data[getRefreshTokenKey(790)], () => {
    const getKey = getRefreshTokenKey;
    const match = {
      "hfJoZ" : function(_relatedTarget, position) {
        const getRefreshTokenKey = _0x501e;
        return data[getRefreshTokenKey(791)](_relatedTarget, position);
      },
      "CsCyX" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "POFDN" : data[getKey(792)],
      "HKTOU" : function(_relatedTarget, position) {
        return data["VtBsf"](_relatedTarget, position);
      },
      "JUIra" : data[getKey(793)],
      "pNdND" : data[getKey(794)],
      "Jhvjk" : data[getKey(795)],
      "utpzi" : function(_relatedTarget, position) {
        const getRefreshTokenKey = getKey;
        return data[getRefreshTokenKey(796)](_relatedTarget, position);
      },
      "FkplV" : data[getKey(797)],
      "yCtDO" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "dYGvF" : function(_relatedTarget, position) {
        const getRefreshTokenKey = getKey;
        return data[getRefreshTokenKey(798)](_relatedTarget, position);
      },
      "XROPG" : data[getKey(799)],
      "jNKgk" : data[getKey(800)],
      "DjAfP" : data[getKey(801)],
      "QJlXq" : data["EYhqL"],
      "vyigF" : data[getKey(802)],
      "dVpcx" : data[getKey(803)],
      "RQtkC" : data[getKey(804)],
      "ZIoct" : data[getKey(805)],
      "mOisU" : data[getKey(806)],
      "prcdR" : data[getKey(807)],
      "UXYry" : data[getKey(808)],
      "YQaUr" : getKey(809),
      "yGqht" : data[getKey(810)],
      "LkmnK" : data[getKey(811)],
      "kLMwb" : getKey(812),
      "vOnKB" : data[getKey(813)],
      "uUlNX" : function(_relatedTarget) {
        return data["QgFiQ"](_relatedTarget);
      },
      "YgOAv" : data["yhegQ"],
      "atpmv" : data[getKey(814)],
      "DBBKI" : data[getKey(815)],
      "tighP" : "nyan",
      "YVKfE" : data[getKey(816)],
      "TWjur" : "PROJECT_ID_AND_KEY_BUT_MISSING_RECORD_OPTION",
      "iWHsL" : "abc123",
      "YdOPH" : data["jDaCx"],
      "ZjAbS" : getKey(817),
      "LfDuz" : data[getKey(818)],
      "fobte" : function(_relatedTarget, position) {
        return data["DCwPj"](_relatedTarget, position);
      },
      "PniRr" : data[getKey(819)],
      "GdgHR" : data[getKey(820)],
      "UVyKJ" : function(_relatedTarget, position) {
        const getRefreshTokenKey = getKey;
        return data[getRefreshTokenKey(821)](_relatedTarget, position);
      },
      "QIdyJ" : function(_relatedTarget, position) {
        const getRefreshTokenKey = getKey;
        return data[getRefreshTokenKey(821)](_relatedTarget, position);
      },
      "rjELY" : data[getKey(822)],
      "pSUHP" : getKey(823),
      "QNIGc" : data[getKey(824)],
      "XSHBE" : data[getKey(825)],
      "UMJDc" : data[getKey(826)],
      "eMhgb" : getKey(827),
      "vnASA" : data[getKey(828)],
      "nASRp" : "NO_SPECS_FOUND",
      "QNbep" : "We searched for any files inside of this folder:",
      "dRQyE" : data[getKey(829)],
      "uToQj" : function(_relatedTarget, position, size) {
        const getRefreshTokenKey = getKey;
        return data[getRefreshTokenKey(830)](_relatedTarget, position, size);
      },
      "OOMvo" : data[getKey(831)],
      "UZwsK" : function(_relatedTarget, position, size) {
        const getRefreshTokenKey = getKey;
        return data[getRefreshTokenKey(830)](_relatedTarget, position, size);
      },
      "mUZmO" : data[getKey(832)],
      "YhQeU" : getKey(833),
      "SUnHb" : getKey(834),
      "Okjpk" : getKey(522),
      "wpjzF" : data[getKey(835)],
      "cEMZy" : "INVALID_REPORTER_NAME",
      "xKfcC" : getKey(836),
      "TdOvt" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "ZWsvF" : data[getKey(837)],
      "prQlV" : data[getKey(838)],
      "zqOlv" : function(_relatedTarget, position) {
        return data["YGmIW"](_relatedTarget, position);
      },
      "Acmyv" : data[getKey(839)],
      "YldsH" : data[getKey(840)],
      "cyZdb" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "EfEyF" : data[getKey(841)],
      "KLzJe" : data[getKey(842)],
      "CPuYW" : data["dJzca"],
      "mJBBN" : "launch",
      "rcqoR" : function(_relatedTarget, position) {
        const getRefreshTokenKey = getKey;
        return data[getRefreshTokenKey(843)](_relatedTarget, position);
      },
      "BkdBv" : data[getKey(844)],
      "ZGqUH" : "open",
      "sAYAR" : data["pqcMC"],
      "IRvFG" : data["OhHAI"],
      "wurgy" : data[getKey(845)],
      "SwLsT" : data["TaeSP"],
      "nbiId" : data[getKey(846)]
    };
    data[getKey(847)](beforeEach, () => {
      const getRefreshTokenKey = getKey;
      const callbackVals = data["fJnMn"][getRefreshTokenKey(779)]("|");
      let callbackCount = 5266 + 7425 + -12691;
      for (; !![];) {
        switch(callbackVals[callbackCount++]) {
          case "0":
            sinon[getRefreshTokenKey(687)](commitInfo, "getRemoteOrigin")[getRefreshTokenKey(686)](data[getRefreshTokenKey(848)]);
            continue;
          case "1":
            sinon[getRefreshTokenKey(687)](electron[getRefreshTokenKey(765)], "on")[getRefreshTokenKey(697)](data["GEiMQ"])[getRefreshTokenKey(767)]();
            continue;
          case "2":
            sinon["stub"](runMode, data["ZlsJJ"])[getRefreshTokenKey(686)]();
            continue;
          case "3":
            sinon[getRefreshTokenKey(687)](runMode, data[getRefreshTokenKey(849)])[getRefreshTokenKey(686)]({
              "stats" : {
                "failures" : 0
              }
            });
            continue;
          case "4":
            sinon["stub"](browsers, data["rYOjH"]);
            continue;
        }
        break;
      }
    });
    data[getKey(850)](it, data["pjmlq"], function() {
      const updateDevicesAfterDelay = getKey;
      return cypress[updateDevicesAfterDelay(654)]([updateDevicesAfterDelay(851) + this["todosPath"]])[updateDevicesAfterDelay(731)](() => {
        const gotoNewOfflinePage = updateDevicesAfterDelay;
        expect(browsers[gotoNewOfflinePage(768)])["to"]["be"][gotoNewOfflinePage(708)](ELECTRON_BROWSER);
        this[gotoNewOfflinePage(703)](114 * 66 + -5907 + -1617);
      });
    });
    data[getKey(852)](it, data[getKey(853)], function() {
      const getRefreshTokenKey = getKey;
      return sinon[getRefreshTokenKey(698)](cypress, data[getRefreshTokenKey(854)]), cypress[getRefreshTokenKey(654)]([getRefreshTokenKey(851) + this["todosPath"], data["HNFJn"]])[getRefreshTokenKey(731)](() => {
        const parseInt = getRefreshTokenKey;
        match[parseInt(855)](expect, browsers["open"])["to"]["be"][parseInt(708)](ELECTRON_BROWSER);
        this[parseInt(703)](-12 * -463 + 2848 + -191 * 44);
        match[parseInt(856)](expect, cypress[parseInt(511)])["to"]["be"][parseInt(857)];
        match[parseInt(856)](expect, cypress[parseInt(511)])["to"]["be"][parseInt(704)](match["POFDN"]);
        const input = cypress["startInMode"][parseInt(858)][parseInt(859)][8316 + -6831 + -1484];
        match["CsCyX"](expect, input)["to"][parseInt(711)]({
          "headless" : !![],
          "headed" : ![]
        });
      });
    });
    it(data[getKey(860)], function() {
      const getRefreshTokenKey = getKey;
      expect(() => {
        return cypress[getRefreshTokenKey(654)](["--run-project=" + this["todosPath"], "--headless", getRefreshTokenKey(861)]);
      })["to"]["throw"](data[getRefreshTokenKey(862)]);
    });
    data[getKey(863)](describe, data[getKey(864)], () => {
      const getRefreshTokenKey = getKey;
      const rpm_traffic = {
        "ADnnl" : function(saveNotifs, notifications) {
          return saveNotifs(notifications);
        },
        "utVpB" : function(saveNotifs, notifications) {
          return saveNotifs(notifications);
        },
        "yjxcr" : getRefreshTokenKey(524)
      };
      data[getRefreshTokenKey(865)](beforeEach, () => {
        const gotoNewOfflinePage = getRefreshTokenKey;
        sinon[gotoNewOfflinePage(698)](argsUtil, "toObject");
      });
      data[getRefreshTokenKey(866)](it, data[getRefreshTokenKey(867)], function() {
        const updateDevicesAfterDelay = getRefreshTokenKey;
        return cypress[updateDevicesAfterDelay(654)](["--", updateDevicesAfterDelay(851) + this["todosPath"]])["then"](() => {
          const now = updateDevicesAfterDelay;
          rpm_traffic[now(868)](expect, argsUtil[now(869)])["to"][now(870)][now(871)]["calledWith"]([now(851) + this[now(672)]]);
          expect(browsers[now(768)])["to"]["be"][now(708)](ELECTRON_BROWSER);
          this[now(703)](17 * 183 + -7571 + 4460);
        });
      });
      data[getRefreshTokenKey(872)](it, data[getRefreshTokenKey(873)], function() {
        const updateDevicesAfterDelay = getRefreshTokenKey;
        return cypress[updateDevicesAfterDelay(654)](["--run-project=" + this[updateDevicesAfterDelay(672)], "--", updateDevicesAfterDelay(524)])["then"](() => {
          const now = updateDevicesAfterDelay;
          rpm_traffic[now(874)](expect, argsUtil[now(869)])["to"]["have"][now(871)][now(704)]([now(851) + this[now(672)], rpm_traffic[now(875)]]);
          rpm_traffic[now(874)](expect, browsers["open"])["to"]["be"][now(708)](ELECTRON_BROWSER);
          this[now(703)](6596 + 4 * 51 + -6800);
        });
      });
    });
    data[getKey(863)](it, data["CXEEf"], function() {
      const getRefreshTokenKey = getKey;
      return sinon[getRefreshTokenKey(687)](runMode, data[getRefreshTokenKey(876)])[getRefreshTokenKey(686)]({
        "totalFailed" : 10
      }), cypress[getRefreshTokenKey(654)]([getRefreshTokenKey(851) + this[getRefreshTokenKey(672)]])[getRefreshTokenKey(731)](() => {
        const gotoNewOfflinePage = getRefreshTokenKey;
        this[gotoNewOfflinePage(703)](2363 + 94 * 29 + -1 * 5079);
      });
    });
    data["trLxE"](it, "does not generate a project id even if missing one", function() {
      const getRefreshTokenKey = getKey;
      const ret = {
        "RhSKe" : data["KHLAk"],
        "jfmnp" : function(_relatedTarget, position) {
          const getRefreshTokenKey = _0x501e;
          return data[getRefreshTokenKey(877)](_relatedTarget, position);
        },
        "MMfob" : data[getRefreshTokenKey(878)]
      };
      return sinon[getRefreshTokenKey(687)](api, data[getRefreshTokenKey(879)]), user[getRefreshTokenKey(880)]({
        "authToken" : getRefreshTokenKey(881)
      })["then"](() => {
        const gotoNewOfflinePage = getRefreshTokenKey;
        return cypress[gotoNewOfflinePage(654)](["--run-project=" + this[gotoNewOfflinePage(677)]]);
      })[getRefreshTokenKey(731)](() => {
        this["expectExitWith"](-5 * -372 + -3878 * 2 + -1474 * -4);
      })["then"](() => {
        const firstCharUp = getRefreshTokenKey;
        return match[firstCharUp(882)](expect, api[firstCharUp(883)])["not"]["to"]["be"][firstCharUp(884)], (new ProjectBase({
          "projectRoot" : this[firstCharUp(677)],
          "testingType" : match[firstCharUp(885)]
        }))[firstCharUp(886)]()[firstCharUp(731)](() => {
          const camelToSnake = firstCharUp;
          throw new Error(ret[camelToSnake(887)]);
        })[firstCharUp(888)]((myPreferences) => {
          const getPreferenceKey = firstCharUp;
          ret[getPreferenceKey(889)](expect, myPreferences[getPreferenceKey(890)])["to"]["eq"](ret["MMfob"]);
        });
      });
    });
    data[getKey(891)](it, data[getKey(892)], function() {
      const updateDevicesAfterDelay = getKey;
      return cache["getProjectRoots"]()[updateDevicesAfterDelay(731)]((myPreferences) => {
        const getPreferenceKey = updateDevicesAfterDelay;
        return expect(myPreferences[getPreferenceKey(893)])["to"]["eq"](-1 * -2269 + 751 * -7 + -18 * -166), cypress["start"]([getPreferenceKey(851) + this[getPreferenceKey(672)]]);
      })[updateDevicesAfterDelay(731)](() => {
        const uniqueID = updateDevicesAfterDelay;
        return cache[uniqueID(894)]();
      })[updateDevicesAfterDelay(731)]((myPreferences) => {
        const getPreferenceKey = updateDevicesAfterDelay;
        expect(myPreferences[getPreferenceKey(893)])["to"]["eq"](377 * 26 + 1 * -4283 + -5519);
      });
    });
    data[getKey(895)](it, data["RoCnX"], function() {
      const _char = getKey;
      const rpm_traffic = {
        "jKXxL" : function(_relatedTarget, position) {
          return data["utKYd"](_relatedTarget, position);
        },
        "BgOFW" : _char(518)
      };
      const _FOO_ = path[_char(896)](cwd(), this[_char(672)]);
      return cypress["start"]([_char(851) + this[_char(672)], _char(897) + _FOO_ + _char(898)])[_char(731)](() => {
        const now = _char;
        rpm_traffic[now(899)](expect, browsers[now(768)])["to"]["be"][now(708)](ELECTRON_BROWSER, {
          "url" : rpm_traffic[now(900)]
        });
        this[now(703)](-1 * 5924 + -84 + -4 * -1502);
      });
    });
    data[getKey(895)](it, data["PNbQf"], function() {
      const getRefreshTokenKey = getKey;
      return cypress[getRefreshTokenKey(654)]([getRefreshTokenKey(851) + this["idsPath"], "--spec=" + this["idsPath"] + getRefreshTokenKey(901), data[getRefreshTokenKey(736)], data[getRefreshTokenKey(902)]])["then"](() => {
        const parseInt = getRefreshTokenKey;
        match[parseInt(882)](expect, browsers["open"])["to"]["be"][parseInt(708)](ELECTRON_BROWSER, {
          "url" : match["pNdND"]
        });
        this[parseInt(703)](-2356 + -8808 + 11164);
      });
    });
    data[getKey(895)](it, data[getKey(903)], function() {
      const updateDevicesAfterDelay = getKey;
      const rpm_traffic = {
        "ejpgZ" : function(previous, obj) {
          return match["HKTOU"](previous, obj);
        },
        "QhaUC" : updateDevicesAfterDelay(518)
      };
      return cypress[updateDevicesAfterDelay(654)]([updateDevicesAfterDelay(851) + this[updateDevicesAfterDelay(672)], updateDevicesAfterDelay(897) + this[updateDevicesAfterDelay(672)] + updateDevicesAfterDelay(898)])[updateDevicesAfterDelay(731)](() => {
        const now = updateDevicesAfterDelay;
        rpm_traffic[now(904)](expect, browsers[now(768)])["to"]["be"][now(708)](ELECTRON_BROWSER, {
          "url" : rpm_traffic[now(905)]
        });
        this[now(703)](-6 * 394 + -1 * -8490 + -6126);
      });
    });
    it(data[getKey(906)], function() {
      const getRefreshTokenKey = getKey;
      const zlib = {
        "xREKe" : function(_relatedTarget, position) {
          const getRefreshTokenKey = _0x501e;
          return data[getRefreshTokenKey(907)](_relatedTarget, position);
        },
        "qOGxj" : data[getRefreshTokenKey(795)]
      };
      return cypress["start"]([getRefreshTokenKey(851) + this[getRefreshTokenKey(672)], "--config=testFiles=" + this[getRefreshTokenKey(672)] + getRefreshTokenKey(898)])["then"](() => {
        const gotoNewOfflinePage = getRefreshTokenKey;
        zlib["xREKe"](expect, browsers[gotoNewOfflinePage(768)])["to"]["be"]["calledWithMatch"](ELECTRON_BROWSER, {
          "url" : zlib["qOGxj"]
        });
        this[gotoNewOfflinePage(703)](3 * 419 + 7270 + -8527);
      });
    });
    data[getKey(908)](it, data[getKey(909)], function() {
      const gotoNewOfflinePage = getKey;
      const rpm_traffic = {
        "SHLpL" : function(previous, obj) {
          const parseInt = _0x501e;
          return match[parseInt(910)](previous, obj);
        },
        "osTZu" : gotoNewOfflinePage(911)
      };
      return cypress[gotoNewOfflinePage(654)](["--run-project=" + this[gotoNewOfflinePage(672)], match[gotoNewOfflinePage(912)]])[gotoNewOfflinePage(731)](() => {
        const parseInt = gotoNewOfflinePage;
        match[parseInt(882)](expect, browsers[parseInt(768)])["to"]["be"][parseInt(708)](ELECTRON_BROWSER, {
          "url" : match["Jhvjk"]
        });
      })[gotoNewOfflinePage(731)](() => {
        const now = gotoNewOfflinePage;
        rpm_traffic[now(913)](expect, browsers[now(768)])["to"]["be"]["calledWithMatch"](ELECTRON_BROWSER, {
          "url" : rpm_traffic[now(914)]
        });
        this[now(703)](8135 + -1401 * -6 + -119 * 139);
      });
    });
    data[getKey(915)](it, getKey(916), function() {
      const parseInt = getKey;
      const zlib = {
        "mGdSI" : function(previous, obj) {
          const parseInt = _0x501e;
          return match[parseInt(917)](previous, obj);
        },
        "HLCvj" : function(previous, obj) {
          const parseInt = _0x501e;
          return match[parseInt(918)](previous, obj);
        }
      };
      const done = sinon[parseInt(698)](Watchers["prototype"], "watch");
      const syncFlushOpt = sinon[parseInt(698)](Watchers["prototype"], match[parseInt(919)]);
      return cypress[parseInt(654)]([parseInt(851) + this["pluginConfig"]])[parseInt(731)](() => {
        const gotoNewOfflinePage = parseInt;
        zlib[gotoNewOfflinePage(920)](expect, syncFlushOpt)["not"]["to"]["be"][gotoNewOfflinePage(884)];
        zlib["HLCvj"](expect, done)["not"]["to"]["be"]["called"];
        this[gotoNewOfflinePage(703)](-4965 + -307 * 6 + 6807 * 1);
      });
    });
    data[getKey(915)](it, "scaffolds out integration and example specs if they do not exist when not runMode", function() {
      const parseInt = getKey;
      const ret = {
        "BjBuA" : match[parseInt(921)],
        "mYRoY" : match[parseInt(922)],
        "Ugtge" : match[parseInt(923)],
        "ZdYbp" : parseInt(924),
        "VNvGj" : parseInt(925),
        "PaxKR" : match[parseInt(926)],
        "oeQtS" : match[parseInt(927)],
        "FCfFT" : match[parseInt(928)]
      };
      return config["get"](this[parseInt(675)])[parseInt(731)]((list) => {
        const _findNodeIndex = parseInt;
        return fs[_findNodeIndex(929)](list[_findNodeIndex(930)])[_findNodeIndex(731)](() => {
          const camelToSnake = _findNodeIndex;
          throw new Error(ret[camelToSnake(931)]);
        })["catch"](() => {
          const gotoNewOfflinePage = _findNodeIndex;
          return cypress[gotoNewOfflinePage(654)]([gotoNewOfflinePage(851) + this[gotoNewOfflinePage(675)], ret["mYRoY"]]);
        })[_findNodeIndex(731)](() => {
          const wrapIndex = _findNodeIndex;
          return fs[wrapIndex(929)](list[wrapIndex(930)]);
        })[_findNodeIndex(731)](() => {
          const camelToSnake = _findNodeIndex;
          return Promise[camelToSnake(473)](fs[camelToSnake(929)](path[camelToSnake(473)](list["integrationFolder"], ret[camelToSnake(932)], ret["ZdYbp"])), fs[camelToSnake(929)](path["join"](list[camelToSnake(930)], ret[camelToSnake(933)], ret["PaxKR"])), fs["statAsync"](path[camelToSnake(473)](list["integrationFolder"], camelToSnake(925), ret[camelToSnake(934)])), fs[camelToSnake(929)](path[camelToSnake(473)](list[camelToSnake(930)], camelToSnake(925), ret[camelToSnake(935)])));
        });
      });
    });
    data[getKey(936)](it, data["fHeUN"], function() {
      const parseInt = getKey;
      const start = function(event, name) {
        const getModuleName = _0x501e;
        if (!event[getModuleName(937)]()) {
          throw new Error(getModuleName(938) + name);
        }
        match[getModuleName(918)](expect, event[getModuleName(939)]())["to"][getModuleName(870)][getModuleName(940)](match[getModuleName(941)], match[getModuleName(942)]);
      };
      return Promise[parseInt(943)]([fs[parseInt(929)](path["join"](this[parseInt(675)], match[parseInt(944)]))["reflect"](), fs[parseInt(929)](path[parseInt(473)](this[parseInt(675)], match[parseInt(945)]))["reflect"]()])["each"](start)[parseInt(731)](() => {
        const gotoNewOfflinePage = parseInt;
        return cypress[gotoNewOfflinePage(654)](["--run-project=" + this[gotoNewOfflinePage(675)]]);
      })[parseInt(731)](() => {
        const gotoNewOfflinePage = parseInt;
        return Promise["all"]([fs[gotoNewOfflinePage(929)](path[gotoNewOfflinePage(473)](this[gotoNewOfflinePage(675)], gotoNewOfflinePage(547)))[gotoNewOfflinePage(946)](), fs[gotoNewOfflinePage(929)](path["join"](this[gotoNewOfflinePage(675)], gotoNewOfflinePage(809)))[gotoNewOfflinePage(946)]()]);
      })[parseInt(947)](start)["then"](() => {
        const gotoNewOfflinePage = parseInt;
        this["expectExitWithErr"](match[gotoNewOfflinePage(948)], this[gotoNewOfflinePage(675)]);
      });
    });
    it(data[getKey(949)], function() {
      const getNameForValue = getKey;
      const rpm_traffic = {
        "kYfkx" : match[getNameForValue(950)]
      };
      return settings[getNameForValue(951)](this[getNameForValue(675)], {})[getNameForValue(731)](() => {
        const gotoNewOfflinePage = getNameForValue;
        return cypress[gotoNewOfflinePage(654)]([gotoNewOfflinePage(851) + this[gotoNewOfflinePage(675)]]);
      })[getNameForValue(731)](() => {
        const now = getNameForValue;
        return fs[now(929)](path[now(473)](this["pristinePath"], "cypress", rpm_traffic[now(952)]));
      })["then"](() => {
        const parseInt = getNameForValue;
        throw new Error(match[parseInt(953)]);
      })[getNameForValue(888)]({
        "code" : match[getNameForValue(942)]
      }, () => {
      });
    });
    data[getKey(936)](it, data[getKey(954)], function() {
      const labelFor = getKey;
      const rpm_traffic = {
        "sUtwN" : match["vOnKB"]
      };
      return config[labelFor(593)](this["pristinePath"])[labelFor(731)]((list) => {
        const parseInt = labelFor;
        const ret = {
          "CWaFL" : match[parseInt(955)],
          "RtUWQ" : match[parseInt(922)]
        };
        return fs[parseInt(929)](list["fixturesFolder"])[parseInt(731)](() => {
          const camelToSnake = parseInt;
          throw new Error(ret[camelToSnake(956)]);
        })[parseInt(888)](() => {
          const camelToSnake = parseInt;
          return cypress[camelToSnake(654)](["--run-project=" + this[camelToSnake(675)], ret[camelToSnake(957)]]);
        })[parseInt(731)](() => {
          const _findNodeIndex = parseInt;
          return fs["statAsync"](list[_findNodeIndex(958)]);
        })["then"](() => {
          const now = parseInt;
          return fs["statAsync"](path[now(473)](list[now(958)], rpm_traffic[now(959)]));
        });
      });
    });
    data[getKey(960)](it, data[getKey(961)], function() {
      const labelFor = getKey;
      const items = {
        "EzsRT" : labelFor(533),
        "CIlah" : data["opzZH"],
        "TZgKw" : labelFor(545)
      };
      const B523 = path[labelFor(473)](this[labelFor(675)], "cypress/support");
      return config[labelFor(593)](this[labelFor(675)])[labelFor(731)](() => {
        const uuid = labelFor;
        const rpm_traffic = {
          "VuOqC" : uuid(962)
        };
        return fs["statAsync"](B523)[uuid(731)](() => {
          const argon2ErrorMessage = uuid;
          throw new Error(argon2ErrorMessage(963));
        })["catch"]({
          "code" : items[uuid(964)]
        }, () => {
          const normalizeIndex = uuid;
          return cypress[normalizeIndex(654)]([normalizeIndex(851) + this[normalizeIndex(675)], items[normalizeIndex(965)]]);
        })["then"](() => {
          return fs["statAsync"](B523);
        })[uuid(731)](() => {
          const now = uuid;
          return fs[now(929)](path[now(473)](B523, rpm_traffic[now(966)]));
        })[uuid(731)](() => {
          return fs["statAsync"](path["join"](B523, items["CIlah"]));
        });
      });
    });
    data[getKey(960)](it, data["GjGls"], function(data) {
      const labelFor = getKey;
      const rpm_traffic = {
        "KUnNV" : function(previous) {
          const parseInt = _0x501e;
          return match[parseInt(967)](previous);
        },
        "OvinR" : match[labelFor(955)]
      };
      config[labelFor(593)](this[labelFor(684)])[labelFor(731)]((canCreateDiscussions) => {
        const gotoNewOfflinePage = labelFor;
        return this[gotoNewOfflinePage(968)] = canCreateDiscussions, fs[gotoNewOfflinePage(929)](this[gotoNewOfflinePage(968)][gotoNewOfflinePage(958)]);
      })[labelFor(731)](() => {
        const getNameForValue = labelFor;
        return settings[getNameForValue(969)](this["idsPath"]);
      })["then"]((thisEl) => {
        const getNameForValue = labelFor;
        return thisEl[getNameForValue(958)] = ![], settings[getNameForValue(951)](this[getNameForValue(684)], thisEl);
      })[labelFor(731)](() => {
        const gotoNewOfflinePage = labelFor;
        return cypress[gotoNewOfflinePage(654)]([gotoNewOfflinePage(851) + this[gotoNewOfflinePage(684)]]);
      })[labelFor(731)](() => {
        const now = labelFor;
        const ret = {
          "Tlafy" : rpm_traffic[now(970)]
        };
        return fs[now(929)](this[now(968)][now(958)])[now(731)](() => {
          const camelToSnake = now;
          throw new Error(ret[camelToSnake(971)]);
        })[now(888)](() => {
          return rpm_traffic["KUnNV"](data);
        });
      });
    });
    data["XUWAb"](it, data[getKey(972)], function() {
      const gotoNewOfflinePage = getKey;
      return cypress[gotoNewOfflinePage(654)]([gotoNewOfflinePage(851) + this[gotoNewOfflinePage(672)], gotoNewOfflinePage(861)])[gotoNewOfflinePage(731)](() => {
        const parseInt = gotoNewOfflinePage;
        expect(browsers[parseInt(768)])["to"]["be"][parseInt(708)](ELECTRON_BROWSER, {
          "proxyServer" : match[parseInt(973)],
          "show" : !![]
        });
        this["expectExitWith"](-3 * 756 + -1 * 4870 + -83 * -86);
      });
    });
    data[getKey(974)](it, data[getKey(975)], function() {
      const parseInt = getKey;
      const rpm_traffic = {
        "Lxmuz" : function(saveNotifs, notifications) {
          return saveNotifs(notifications);
        },
        "hRQCK" : match[parseInt(976)]
      };
      return sinon["spy"](Reporter, match[parseInt(977)]), cypress[parseInt(654)]([parseInt(851) + this[parseInt(672)]])[parseInt(731)](() => {
        const now = parseInt;
        rpm_traffic[now(978)](expect, Reporter[now(520)])["to"]["be"][now(704)](rpm_traffic["hRQCK"]);
        this[now(703)](-9910 + 7266 + -2644 * -1);
      });
    });
    data[getKey(974)](it, data[getKey(979)], function() {
      const getRefreshTokenKey = getKey;
      return sinon[getRefreshTokenKey(698)](Reporter, data[getRefreshTokenKey(815)]), cypress["start"](["--run-project=" + this["todosPath"], data[getRefreshTokenKey(980)]])["then"](() => {
        const parseInt = getRefreshTokenKey;
        match["dYGvF"](expect, Reporter["create"])["to"]["be"][parseInt(704)](match[parseInt(981)]);
        this["expectExitWith"](3318 + 1 * -7034 + -3716 * -1);
      });
    });
    data["sDDgU"](it, data[getKey(982)], function() {
      const parseInt = getKey;
      const zlib = {
        "PIhFl" : match[parseInt(983)],
        "afZiA" : function(saveNotifs, notifications) {
          return saveNotifs(notifications);
        }
      };
      return sinon[parseInt(698)](Reporter, match[parseInt(977)]), config["get"](this[parseInt(684)])[parseInt(731)]((canCreateDiscussions) => {
        const getNameForValue = parseInt;
        return this[getNameForValue(968)] = canCreateDiscussions, settings[getNameForValue(969)](this[getNameForValue(684)]);
      })[parseInt(731)]((thisEl) => {
        const getNameForValue = parseInt;
        return thisEl[getNameForValue(984)] = zlib[getNameForValue(985)], settings[getNameForValue(951)](this[getNameForValue(684)], thisEl);
      })[parseInt(731)](() => {
        const gotoNewOfflinePage = parseInt;
        return cypress[gotoNewOfflinePage(654)]([gotoNewOfflinePage(851) + this[gotoNewOfflinePage(684)]]);
      })[parseInt(731)](() => {
        const gotoNewOfflinePage = parseInt;
        zlib["afZiA"](expect, Reporter[gotoNewOfflinePage(520)])["to"]["be"][gotoNewOfflinePage(704)](gotoNewOfflinePage(551));
        this["expectExitWith"](1 * 8741 + 23 * 27 + -9362);
      });
    });
    data[getKey(986)](it, getKey(987), function() {
      const getProfileKey = getKey;
      return user[getProfileKey(880)]({})[getProfileKey(731)](() => {
        const gotoNewOfflinePage = getProfileKey;
        return cypress[gotoNewOfflinePage(654)]([gotoNewOfflinePage(851) + this[gotoNewOfflinePage(672)]]);
      })[getProfileKey(731)](() => {
        this["expectExitWith"](-2209 * 1 + -7527 + 9736);
      });
    });
    data["SnTxg"](it, data[getKey(988)], function() {
      const gotoNewOfflinePage = getKey;
      return cypress[gotoNewOfflinePage(654)]([gotoNewOfflinePage(851) + this[gotoNewOfflinePage(672)], data["suwAV"]])["then"](() => {
        const getConsoleMethod = gotoNewOfflinePage;
        expect(errors["warning"])["to"]["be"][getConsoleMethod(704)](match[getConsoleMethod(989)], match["iWHsL"]);
        match["dYGvF"](expect, console[getConsoleMethod(472)])["to"]["be"][getConsoleMethod(708)](match[getConsoleMethod(990)]);
        match["dYGvF"](expect, console[getConsoleMethod(472)])["to"]["be"][getConsoleMethod(708)](match[getConsoleMethod(991)]);
        match[getConsoleMethod(918)](expect, console["log"])["to"]["be"][getConsoleMethod(708)](match[getConsoleMethod(992)]);
      });
    });
    data[getKey(993)](it, data[getKey(994)], function() {
      const argon2ErrorMessage = getKey;
      const whoisResults = new Error(argon2ErrorMessage(995));
      return sinon[argon2ErrorMessage(687)](browsers, argon2ErrorMessage(996))[argon2ErrorMessage(997)](whoisResults), cypress[argon2ErrorMessage(654)]([argon2ErrorMessage(851) + this[argon2ErrorMessage(672)]])["then"](() => {
        const convertSubInfo = argon2ErrorMessage;
        match[convertSubInfo(998)](expect, errors[convertSubInfo(485)])["to"]["be"][convertSubInfo(704)](match[convertSubInfo(999)], whoisResults[convertSubInfo(1000)]);
        match[convertSubInfo(998)](expect, console["log"])["to"]["be"][convertSubInfo(708)](match[convertSubInfo(1001)]);
        match["fobte"](expect, console["log"])["to"]["be"][convertSubInfo(708)](whoisResults[convertSubInfo(713)]);
      });
    });
    data[getKey(1002)](it, data[getKey(1003)], function() {
      const parseInt = getKey;
      const rpm_traffic = {
        "xOkNS" : function(previous, obj) {
          const parseInt = _0x501e;
          return match[parseInt(1004)](previous, obj);
        },
        "nInHP" : match[parseInt(989)],
        "OZawK" : match[parseInt(1005)],
        "VmDgF" : function(previous, obj) {
          const gotoNewOfflinePage = parseInt;
          return match[gotoNewOfflinePage(1006)](previous, obj);
        },
        "iCfaU" : parseInt(1007)
      };
      return cypress[parseInt(654)]([parseInt(851) + this[parseInt(675)], parseInt(1008)])[parseInt(731)](() => {
        const now = parseInt;
        rpm_traffic[now(1009)](expect, errors["warning"])[now(789)]["to"]["be"][now(704)](rpm_traffic[now(1010)], rpm_traffic[now(1011)]);
        rpm_traffic[now(1012)](expect, console["log"])["not"]["to"]["be"][now(708)](rpm_traffic["iCfaU"]);
      });
    });
    data[getKey(1013)](it, getKey(1014), function() {
      const parseInt = getKey;
      return cypress[parseInt(654)]([parseInt(851) + this[parseInt(672)], match[parseInt(1015)], match["pSUHP"]])[parseInt(731)](() => {
        const getConsoleMethod = parseInt;
        expect(errors[getConsoleMethod(485)])[getConsoleMethod(789)]["to"]["be"][getConsoleMethod(704)](match[getConsoleMethod(989)], match[getConsoleMethod(1005)]);
        match["QIdyJ"](expect, console[getConsoleMethod(472)])["not"]["to"]["be"][getConsoleMethod(708)](getConsoleMethod(1007));
      });
    });
    data[getKey(1013)](it, getKey(1016), function() {
      const getNameForValue = getKey;
      const rpm_traffic = {
        "JUfeJ" : getNameForValue(1017),
        "QiDGy" : match["QNIGc"]
      };
      return settings[getNameForValue(951)](this["idsPath"], {
        "supportFile" : getNameForValue(1018)
      })[getNameForValue(731)](() => {
        return cypress["start"](["--run-project=" + this["idsPath"]]);
      })[getNameForValue(731)](() => {
        const now = getNameForValue;
        this[now(705)](rpm_traffic[now(1019)], rpm_traffic[now(1020)]);
      });
    });
    data[getKey(1013)](it, data["qAJPn"], function() {
      const getRefreshTokenKey = getKey;
      const zlib = {
        "gWiUn" : getRefreshTokenKey(1021),
        "ipaPs" : function(_relatedTarget, position, size) {
          const pluralize = getRefreshTokenKey;
          return data[pluralize(1022)](_relatedTarget, position, size);
        },
        "VhxzY" : data["pxXre"],
        "ubIbH" : function(_relatedTarget, position, size) {
          const pluralize = getRefreshTokenKey;
          return data[pluralize(1023)](_relatedTarget, position, size);
        },
        "rObxw" : function(_relatedTarget, position, size) {
          const pluralize = getRefreshTokenKey;
          return data[pluralize(1024)](_relatedTarget, position, size);
        },
        "ojCuF" : "browser names should be listed"
      };
      return browsers[getRefreshTokenKey(768)]["restore"](), cypress[getRefreshTokenKey(654)]([getRefreshTokenKey(851) + this["idsPath"], data[getRefreshTokenKey(1025)]])[getRefreshTokenKey(731)](() => {
        const gotoNewOfflinePage = getRefreshTokenKey;
        const rpm_traffic = {
          "ttMrz" : gotoNewOfflinePage(1026),
          "kEata" : gotoNewOfflinePage(1027)
        };
        this[gotoNewOfflinePage(705)](zlib[gotoNewOfflinePage(1028)]);
        const growingCollection = errors["log"][gotoNewOfflinePage(859)];
        const input = _[gotoNewOfflinePage(1029)](growingCollection, (trick) => {
          const updateDevicesAfterDelay = gotoNewOfflinePage;
          return _[updateDevicesAfterDelay(1029)](trick, (first) => {
            const now = updateDevicesAfterDelay;
            return first["message"] && first["message"][now(1030)](rpm_traffic[now(1031)]);
          });
        });
        zlib[gotoNewOfflinePage(1032)](expect, input, zlib["VhxzY"])["to"]["be"]["ok"];
        const syncFlushOpt = _[gotoNewOfflinePage(1029)](growingCollection, (trick) => {
          const now = gotoNewOfflinePage;
          const rightBranch = {
            "KOkHt" : rpm_traffic[now(1033)]
          };
          return _["find"](trick, (nodes) => {
            const findMiddlePosition = now;
            return nodes[findMiddlePosition(713)] && nodes[findMiddlePosition(713)]["includes"](rightBranch[findMiddlePosition(1034)]);
          });
        });
        zlib["ubIbH"](expect, syncFlushOpt, "supported browsers should be listed")["to"]["be"]["ok"];
        const done = _[gotoNewOfflinePage(1029)](growingCollection, (trick) => {
          const updateDevicesAfterDelay = gotoNewOfflinePage;
          return _[updateDevicesAfterDelay(1029)](trick, (data) => {
            const getAttr = updateDevicesAfterDelay;
            return data["message"] && data["message"][getAttr(1030)]("Available browsers found on your system are:\n- chrome\n- chromium\n- chrome:canary\n- electron");
          });
        });
        zlib["rObxw"](expect, done, zlib[gotoNewOfflinePage(1035)])["to"]["be"]["ok"];
      });
    });
    describe(getKey(1036), function() {
      const testVerbage = getKey;
      const updatedEdgesById = {
        "mCaBs" : match[testVerbage(1037)],
        "CZUnl" : match[testVerbage(1038)],
        "QLWid" : testVerbage(1039),
        "xxiZw" : match[testVerbage(1040)]
      };
      match[testVerbage(1041)](it, match["OOMvo"], function() {
        const parseInt = testVerbage;
        const rpm_traffic = {
          "PGpnR" : match[parseInt(1042)],
          "zcpXE" : match[parseInt(1043)]
        };
        return cypress[parseInt(654)](["--run-project=" + this[parseInt(672)], match[parseInt(1044)]])["then"](() => {
          const now = parseInt;
          this["expectExitWithErr"]("NO_SPECS_FOUND", rpm_traffic[now(1045)]);
          this[now(705)](now(1046), rpm_traffic["zcpXE"]);
          this[now(705)](now(1046), this[now(672)]);
        });
      });
      match[testVerbage(1047)](it, match[testVerbage(1048)], function() {
        const gotoNewOfflinePage = testVerbage;
        const rpm_traffic = {
          "AIiKF" : match["vnASA"],
          "MSeTE" : gotoNewOfflinePage(1046)
        };
        return cypress[gotoNewOfflinePage(654)](["--run-project=" + this[gotoNewOfflinePage(672)], gotoNewOfflinePage(897) + this[gotoNewOfflinePage(672)] + "/tests/path/to/spec"])[gotoNewOfflinePage(731)](() => {
          const now = gotoNewOfflinePage;
          this["expectExitWithErr"](now(1046), rpm_traffic[now(1049)]);
          this[now(705)](rpm_traffic["MSeTE"], this[now(672)]);
        });
      });
      it(testVerbage(1050), function() {
        const now = testVerbage;
        return cypress[now(654)]([now(851) + this["todosPath"], updatedEdgesById[now(1051)]])["then"](() => {
          const edgeId = now;
          this[edgeId(705)](updatedEdgesById[edgeId(1052)], updatedEdgesById["CZUnl"]);
          this[edgeId(705)](updatedEdgesById["mCaBs"], updatedEdgesById[edgeId(1053)]);
        });
      });
    });
    data["sSpGp"](it, data[getKey(1054)], function() {
      const updateDevicesAfterDelay = getKey;
      return fs["writeFileAsync"](this[updateDevicesAfterDelay(672)] + updateDevicesAfterDelay(1055), data["ymicl"])[updateDevicesAfterDelay(731)](() => {
        const gotoNewOfflinePage = updateDevicesAfterDelay;
        return cypress[gotoNewOfflinePage(654)](["--run-project=" + this[gotoNewOfflinePage(672)]]);
      })[updateDevicesAfterDelay(731)](() => {
        const gotoNewOfflinePage = updateDevicesAfterDelay;
        this["expectExitWithErr"](gotoNewOfflinePage(1056), this[gotoNewOfflinePage(672)]);
      });
    });
    it(getKey(1057), function() {
      const ModuleSystem_prettyPrint = getKey;
      const rpm_traffic = {
        "vAnAb" : "ERROR_READING_FILE"
      };
      return fs[ModuleSystem_prettyPrint(1058)](this[ModuleSystem_prettyPrint(672)] + ModuleSystem_prettyPrint(1059), ModuleSystem_prettyPrint(1060))["then"](() => {
        const gotoNewOfflinePage = ModuleSystem_prettyPrint;
        return cypress[gotoNewOfflinePage(654)]([gotoNewOfflinePage(851) + this["todosPath"]]);
      })[ModuleSystem_prettyPrint(731)](() => {
        const now = ModuleSystem_prettyPrint;
        this[now(705)](rpm_traffic[now(1061)], this[now(672)]);
      });
    });
    data["JiDwX"](it, data[getKey(1062)], function() {
      const getNameForValue = getKey;
      return settings[getNameForValue(951)](this["todosPath"], {
        "baseUrl" : match[getNameForValue(1063)]
      })[getNameForValue(731)](() => {
        const gotoNewOfflinePage = getNameForValue;
        return cypress[gotoNewOfflinePage(654)]([gotoNewOfflinePage(851) + this[gotoNewOfflinePage(672)]]);
      })[getNameForValue(731)](() => {
        const gotoNewOfflinePage = getNameForValue;
        this[gotoNewOfflinePage(705)](gotoNewOfflinePage(1064), gotoNewOfflinePage(809));
      });
    });
    data["JiDwX"](it, data["igtMC"], function() {
      const getRefreshTokenKey = getKey;
      const _0x3c283e = {
        "UkZvR" : data[getRefreshTokenKey(1065)],
        "bpwfK" : data["oBdBL"],
        "akNrc" : data[getRefreshTokenKey(1066)]
      };
      return cypress["start"]([getRefreshTokenKey(851) + this["todosPath"], data[getRefreshTokenKey(1067)]])[getRefreshTokenKey(731)](() => {
        const gotoNewOfflinePage = getRefreshTokenKey;
        this[gotoNewOfflinePage(705)](gotoNewOfflinePage(834), _0x3c283e["UkZvR"]);
        this[gotoNewOfflinePage(705)](_0x3c283e["bpwfK"], _0x3c283e["akNrc"]);
      });
    });
    data[getKey(1068)](it, getKey(1069), function() {
      const parseInt = getKey;
      const rpm_traffic = {
        "WTnDB" : match[parseInt(1070)],
        "ENlFm" : match[parseInt(1063)],
        "slevF" : match[parseInt(1071)]
      };
      return process[parseInt(1072)]["CYPRESS_BASE_URL"] = match[parseInt(1063)], cypress[parseInt(654)]([parseInt(851) + this[parseInt(672)]])[parseInt(731)](() => {
        const now = parseInt;
        this["expectExitWithErr"](rpm_traffic["WTnDB"], rpm_traffic["ENlFm"]);
        this[now(705)](rpm_traffic[now(1073)], rpm_traffic[now(1074)]);
      });
    });
    const obj = [{
      "old" : data[getKey(1075)],
      "new" : data[getKey(1076)]
    }];
    obj[getKey(1077)](function(data) {
      const replace = {
        "FfEEI" : match["wpjzF"]
      };
      it("logs error and exits when using an old configuration option: " + data["old"], function() {
        const prevIndexTotal = _0x501e;
        return cypress[prevIndexTotal(654)]([prevIndexTotal(851) + this[prevIndexTotal(672)], prevIndexTotal(1078) + data["old"] + "=''"])[prevIndexTotal(731)](() => {
          const getRefreshTokenKey = prevIndexTotal;
          this["expectExitWithErr"](replace[getRefreshTokenKey(1079)], data["old"]);
          this[getRefreshTokenKey(705)](replace[getRefreshTokenKey(1079)], data[getRefreshTokenKey(1080)]);
        });
      });
    });
    data[getKey(1081)](it, getKey(1082), function() {
      const getRefreshTokenKey = getKey;
      const rpm_traffic = {
        "hwDBf" : "777",
        "xIEMF" : getRefreshTokenKey(809)
      };
      if (data[getRefreshTokenKey(1083)](process["geteuid"](), -1587 + -9125 + -8 * -1339)) {
        return;
      }
      const fd = path[getRefreshTokenKey(1084)](getRefreshTokenKey(1085));
      const PL$26 = path[getRefreshTokenKey(473)](fd, data[getRefreshTokenKey(1086)]);
      return fs[getRefreshTokenKey(1087)](PL$26, "{}")["then"](() => {
        const ModuleSystem_prettyPrint = getRefreshTokenKey;
        return fs[ModuleSystem_prettyPrint(1088)](fd, ModuleSystem_prettyPrint(1089));
      })[getRefreshTokenKey(731)](() => {
        return cypress["start"](["--run-project=" + fd]);
      })[getRefreshTokenKey(731)](() => {
        const now = getRefreshTokenKey;
        return fs[now(1088)](fd, rpm_traffic[now(1090)]);
      })[getRefreshTokenKey(731)](() => {
        const gotoNewOfflinePage = getRefreshTokenKey;
        return fs[gotoNewOfflinePage(1091)](fd);
      })[getRefreshTokenKey(731)](() => {
        const now = getRefreshTokenKey;
        this[now(705)]("ERROR_READING_FILE", path[now(473)](fd, rpm_traffic[now(1092)]));
      });
    });
    it(data[getKey(1093)], function() {
      const parseInt = getKey;
      const rpm_traffic = {
        "tOsNE" : match[parseInt(1094)]
      };
      return cypress[parseInt(654)](["--run-project=" + this[parseInt(672)], "--reporter", match[parseInt(1095)]])[parseInt(731)](() => {
        const now = parseInt;
        this[now(705)](rpm_traffic[now(1096)], now(836));
      });
    });
    data[getKey(1097)](describe, data[getKey(1098)], () => {
      const parseInt = getKey;
      const rpm_traffic = {
        "jWtff" : match["mOisU"]
      };
      match[parseInt(1099)](beforeEach, function() {
        const gotoNewOfflinePage = parseInt;
        return appData[gotoNewOfflinePage(1100)]()["then"](() => {
          const updateDevicesAfterDelay = gotoNewOfflinePage;
          return savedState[updateDevicesAfterDelay(1101)](this[updateDevicesAfterDelay(672)]);
        })["then"]((mmCoreSplitViewBlock) => {
          const updateDevicesAfterDelay = gotoNewOfflinePage;
          this[updateDevicesAfterDelay(1102)] = appData[updateDevicesAfterDelay(1103)](mmCoreSplitViewBlock);
        });
      });
      match[parseInt(1047)](it, match[parseInt(1104)], function() {
        const gotoNewOfflinePage = parseInt;
        return cypress[gotoNewOfflinePage(654)]([gotoNewOfflinePage(851) + this[gotoNewOfflinePage(672)], "--spec=" + this[gotoNewOfflinePage(672)] + gotoNewOfflinePage(898)])["then"](() => {
          const updateDevicesAfterDelay = gotoNewOfflinePage;
          return this[updateDevicesAfterDelay(703)](-5242 + -1286 + 6528), openProject[updateDevicesAfterDelay(1105)]()[updateDevicesAfterDelay(1106)]();
        })[gotoNewOfflinePage(731)](() => {
          const now = gotoNewOfflinePage;
          return fs[now(929)](this[now(1102)])[now(731)](() => {
            const gotoNewOfflinePage = now;
            throw new Error(gotoNewOfflinePage(1107) + this[gotoNewOfflinePage(1102)]);
          })[now(888)]({
            "code" : rpm_traffic[now(1108)]
          }, () => {
          });
        });
      });
    });
    describe(getKey(1109), () => {
      const getRefreshTokenKey = getKey;
      data["LGREj"](it, data[getRefreshTokenKey(1110)], function() {
        const updateDevicesAfterDelay = getRefreshTokenKey;
        return cypress["start"]([updateDevicesAfterDelay(851) + this[updateDevicesAfterDelay(672)]])[updateDevicesAfterDelay(731)](() => {
          const gotoNewOfflinePage = updateDevicesAfterDelay;
          expect(openProject[gotoNewOfflinePage(1105)]()["cfg"][gotoNewOfflinePage(1109)])["to"]["be"]["false"];
          this[gotoNewOfflinePage(703)](-2974 + -121 + 1 * 3095);
        });
      });
    });
    data[getKey(1111)](describe, data[getKey(1112)], () => {
      const gotoNewOfflinePage = getKey;
      const zlib = {
        "kqMvZ" : function(previous, obj) {
          const parseInt = _0x501e;
          return match[parseInt(1113)](previous, obj);
        },
        "ttraJ" : function(previous, obj) {
          return match["cyZdb"](previous, obj);
        },
        "UFfLT" : match[gotoNewOfflinePage(1114)]
      };
      match[gotoNewOfflinePage(1047)](it, match["KLzJe"], function() {
        const updateDevicesAfterDelay = gotoNewOfflinePage;
        return cypress["start"]([updateDevicesAfterDelay(851) + this[updateDevicesAfterDelay(672)], match["prQlV"]])[updateDevicesAfterDelay(731)](() => {
          const rel2Mstr = updateDevicesAfterDelay;
          const {
            cfg : same
          } = openProject[rel2Mstr(1105)]();
          zlib[rel2Mstr(1115)](expect, same[rel2Mstr(1116)])["to"]["be"]["false"];
          zlib[rel2Mstr(1115)](expect, same[rel2Mstr(1117)])["to"]["eq"](-27 * 55 + -7967 + -137 * -78);
          zlib[rel2Mstr(1118)](expect, same[rel2Mstr(1119)][rel2Mstr(1116)])["to"][rel2Mstr(1120)]["eq"]({
            "value" : ![],
            "from" : rel2Mstr(562)
          });
          zlib[rel2Mstr(1118)](expect, same[rel2Mstr(1119)]["requestTimeout"])["to"][rel2Mstr(1120)]["eq"]({
            "value" : 1234,
            "from" : zlib[rel2Mstr(1121)]
          });
          this["expectExitWith"](3001 + 7460 + -10461);
        });
      });
      it(match[gotoNewOfflinePage(1122)], function() {
        const parseInt = gotoNewOfflinePage;
        const tags = {
          "Rtafm" : function(previous, obj) {
            const parseInt = _0x501e;
            return match[parseInt(1099)](previous, obj);
          },
          "mJPWr" : function(previous, obj) {
            const parseInt = _0x501e;
            return match[parseInt(1123)](previous, obj);
          },
          "WJLKI" : parseInt(528),
          "sYHfN" : function(previous, obj) {
            const gotoNewOfflinePage = parseInt;
            return match[gotoNewOfflinePage(1123)](previous, obj);
          },
          "omxGl" : match["Acmyv"],
          "gDxPr" : function(previous, obj) {
            const gotoNewOfflinePage = parseInt;
            return match[gotoNewOfflinePage(1123)](previous, obj);
          },
          "KTjwD" : parseInt(562)
        };
        return plugins[parseInt(480)][parseInt(1124)](), cypress[parseInt(654)]([parseInt(851) + this[parseInt(681)], parseInt(560), match[parseInt(1125)]])["then"](() => {
          const rel2Mstr = parseInt;
          const {
            cfg : same
          } = openProject[rel2Mstr(1105)]();
          tags[rel2Mstr(1126)](expect, same[rel2Mstr(1116)])["to"]["eq"](3 * 2785 + 4219 + 6277 * -2);
          tags[rel2Mstr(1127)](expect, same[rel2Mstr(1128)])["to"]["eq"](-6826 + -32 * 4 + -2 * -3727);
          tags[rel2Mstr(1127)](expect, same[rel2Mstr(1072)])["to"][rel2Mstr(1120)]["eq"]({
            "foo" : rel2Mstr(528),
            "bar" : tags["WJLKI"]
          });
          tags["sYHfN"](expect, same[rel2Mstr(1119)]["videoCompression"])["to"][rel2Mstr(1120)]["eq"]({
            "value" : 20,
            "from" : tags[rel2Mstr(1129)]
          });
          tags[rel2Mstr(1130)](expect, same[rel2Mstr(1119)][rel2Mstr(1117)])["to"][rel2Mstr(1120)]["eq"]({
            "value" : 1234,
            "from" : tags[rel2Mstr(1131)]
          });
          expect(same[rel2Mstr(1119)]["env"]["foo"])["to"][rel2Mstr(1120)]["eq"]({
            "value" : tags[rel2Mstr(1132)],
            "from" : tags[rel2Mstr(1129)]
          });
          tags[rel2Mstr(1130)](expect, same[rel2Mstr(1119)][rel2Mstr(1072)][rel2Mstr(528)])["to"]["deep"]["eq"]({
            "value" : tags["WJLKI"],
            "from" : tags[rel2Mstr(1131)]
          });
          this[rel2Mstr(703)](2 * 3653 + 6240 + 13546 * -1);
        });
      });
    });
    data["kwubs"](describe, getKey(1133), () => {
      const getRefreshTokenKey = getKey;
      const KUTE = {
        "GnPKS" : data[getRefreshTokenKey(1134)],
        "SSCOF" : data[getRefreshTokenKey(1135)],
        "VRchJ" : function(_relatedTarget, position, size) {
          const pluralize = getRefreshTokenKey;
          return data[pluralize(1136)](_relatedTarget, position, size);
        },
        "qsKNz" : data[getRefreshTokenKey(1137)],
        "uvwHb" : getRefreshTokenKey(528),
        "PbGUr" : function(_relatedTarget, position) {
          return data["utKYd"](_relatedTarget, position);
        },
        "OigQf" : data["YPdgW"],
        "QBWqY" : data["ujlQV"],
        "XoHPB" : data[getRefreshTokenKey(1138)],
        "OyPGg" : getRefreshTokenKey(1139),
        "FFoyM" : data[getRefreshTokenKey(1140)]
      };
      data[getRefreshTokenKey(907)](beforeEach, () => {
        const parseInt = getRefreshTokenKey;
        plugins[parseInt(480)][parseInt(1124)]();
        browsers[parseInt(768)]["restore"]();
        const harderTypes = new EE;
        harderTypes[parseInt(1141)] = () => {
          const getType = parseInt;
          return harderTypes[getType(1142)](getType(484));
        };
        harderTypes[parseInt(1143)] = () => {
          const getType = parseInt;
          return harderTypes[getType(1142)](getType(1144));
        };
        harderTypes[parseInt(1145)] = () => {
          return ![];
        };
        harderTypes[parseInt(1146)] = () => {
        };
        harderTypes[parseInt(1147)] = () => {
        };
        harderTypes[parseInt(1148)] = {
          "debugger" : {
            "on" : sinon[parseInt(687)](),
            "attach" : sinon["stub"](),
            "sendCommand" : sinon[parseInt(687)]()[parseInt(686)]()
          },
          "getOSProcessId" : sinon[parseInt(687)](),
          "setUserAgent" : sinon[parseInt(687)](),
          "session" : {
            "clearCache" : sinon[parseInt(687)]()[parseInt(686)](),
            "setProxy" : sinon[parseInt(687)]()[parseInt(686)](),
            "setUserAgent" : sinon[parseInt(687)](),
            "on" : sinon[parseInt(687)](),
            "removeListener" : sinon[parseInt(687)]()
          }
        };
        harderTypes[parseInt(1149)] = sinon[parseInt(687)];
        harderTypes["setSize"] = sinon[parseInt(687)];
        sinon[parseInt(687)](launch, match[parseInt(1150)])[parseInt(686)](harderTypes);
        sinon[parseInt(687)](Windows, parseInt(520))[parseInt(690)](harderTypes);
      });
      data["gnmIy"](context, data[getRefreshTokenKey(1151)], () => {
        const now = getRefreshTokenKey;
        const values = {
          "LFyyc" : KUTE[now(1152)],
          "fhVMD" : now(1153),
          "iVnfZ" : function(el, from, to) {
            return KUTE["VRchJ"](el, from, to);
          },
          "sYpwm" : now(1154),
          "PECNo" : KUTE[now(1155)],
          "GufxX" : KUTE[now(1156)],
          "ecnqs" : now(642),
          "HOjWp" : function(el, to) {
            const gotoNewOfflinePage = now;
            return KUTE[gotoNewOfflinePage(1157)](el, to);
          },
          "XPYJP" : now(1158),
          "kJsLb" : KUTE["OigQf"],
          "BRgGL" : KUTE[now(1159)],
          "khOtg" : KUTE["XoHPB"],
          "HvUob" : KUTE[now(1160)],
          "DSSIZ" : KUTE[now(1161)]
        };
        it(KUTE[now(1152)], function() {
          const removeKeyPrefix = now;
          const artistTrack = {
            "ensureMinimumProtocolVersion" : sinon[removeKeyPrefix(687)]()["resolves"](),
            "close" : sinon[removeKeyPrefix(687)]()[removeKeyPrefix(686)](),
            "on" : sinon[removeKeyPrefix(687)](),
            "send" : sinon[removeKeyPrefix(687)]()
          };
          return sinon[removeKeyPrefix(687)](chromeBrowser, values[removeKeyPrefix(1162)])[removeKeyPrefix(686)](), sinon[removeKeyPrefix(687)](chromeBrowser, values[removeKeyPrefix(1163)])[removeKeyPrefix(686)](artistTrack), sinon["stub"](chromeBrowser, values["BRgGL"])[removeKeyPrefix(686)](), sinon[removeKeyPrefix(687)](chromeBrowser, removeKeyPrefix(1164))[removeKeyPrefix(686)](), sinon[removeKeyPrefix(687)](chromeBrowser, values[removeKeyPrefix(1165)])["returns"](), cypress[removeKeyPrefix(654)](["--run-project=" + 
          this[removeKeyPrefix(682)], values[removeKeyPrefix(1166)]])[removeKeyPrefix(731)](() => {
            const getIndex = removeKeyPrefix;
            const {
              args : args
            } = launch[getIndex(1167)]["firstCall"];
            const artistTrack = _[getIndex(1029)](TYPICAL_BROWSERS, {
              "name" : values[getIndex(1168)]
            });
            const NEG_ONE = R[getIndex(1169)](artistTrack, {
              "isHeadless" : !![],
              "isHeaded" : ![]
            });
            expect(args[-4845 + 392 * 20 + 2995 * -1], values[getIndex(1170)])["to"]["deep"]["eq"](NEG_ONE);
            const buffer = args[-5620 + 9419 * -1 + -1 * -15041];
            values[getIndex(1171)](expect, buffer["slice"](4200 + 1279 + -5479, -8 * 540 + 6101 * 1 + -1 * 1777), values[getIndex(1172)])["to"]["deep"]["eq"]([values[getIndex(1168)], values[getIndex(1173)], values[getIndex(1174)], values["ecnqs"]]);
            this["expectExitWith"](-3 * 1163 + 3830 + -341);
            values["HOjWp"](expect, chromeBrowser[getIndex(1175)])["to"][getIndex(870)][getIndex(871)][getIndex(857)];
            values[getIndex(1176)](expect, chromeBrowser[getIndex(525)])["to"][getIndex(870)][getIndex(871)][getIndex(857)];
            expect(chromeBrowser[getIndex(1177)])["to"]["have"][getIndex(871)]["calledOnce"];
          });
        });
        KUTE[now(1178)](it, now(427), function() {
          const gotoNewOfflinePage = now;
          const _0x58e271 = sinon[gotoNewOfflinePage(687)]();
          return videoCapture[gotoNewOfflinePage(654)][gotoNewOfflinePage(690)]({
            "writeVideoFrame" : _0x58e271
          }), cypress[gotoNewOfflinePage(654)]([gotoNewOfflinePage(851) + this[gotoNewOfflinePage(682)], KUTE[gotoNewOfflinePage(1179)]])[gotoNewOfflinePage(731)](() => {
            const removeKeyPrefix = gotoNewOfflinePage;
            values[removeKeyPrefix(1176)](expect, Windows[removeKeyPrefix(520)])["to"]["be"][removeKeyPrefix(708)](this[removeKeyPrefix(682)], {
              "browser" : values[removeKeyPrefix(1180)],
              "foo" : values[removeKeyPrefix(1174)],
              "onNewWindow" : sinon[removeKeyPrefix(1181)][removeKeyPrefix(1182)],
              "onScreencastFrame" : sinon[removeKeyPrefix(1181)][removeKeyPrefix(1182)]
            });
            this[removeKeyPrefix(703)](7505 + 237 * 14 + -10823);
          });
        });
      });
    });
    data[getKey(1111)](describe, data[getKey(1183)], () => {
      const getRefreshTokenKey = getKey;
      const rpm_traffic = {
        "txmYO" : data[getRefreshTokenKey(1184)]
      };
      beforeEach(() => {
        const gotoNewOfflinePage = getRefreshTokenKey;
        return runMode[gotoNewOfflinePage(510)][gotoNewOfflinePage(686)]({
          "stats" : {
            "failures" : 0
          }
        });
      });
      it(data[getRefreshTokenKey(1185)], function() {
        const parseInt = getRefreshTokenKey;
        const test = {
          "fuYmf" : function(previous, obj) {
            const parseInt = _0x501e;
            return match[parseInt(1186)](previous, obj);
          },
          "jpzzx" : function(previous, obj) {
            const parseInt = _0x501e;
            return match[parseInt(1186)](previous, obj);
          }
        };
        const input = sinon[parseInt(698)](http[parseInt(1187)]["prototype"], match[parseInt(1188)]);
        const deferred = sinon[parseInt(698)](ServerE2E[parseInt(693)], match[parseInt(1189)]);
        return cypress[parseInt(654)](["--run-project=" + this[parseInt(672)], match[parseInt(1190)]])[parseInt(731)](() => {
          const _getExpectProperty = parseInt;
          expect(openProject[_getExpectProperty(1105)]()[_getExpectProperty(968)][_getExpectProperty(645)])["to"]["eq"](-4022 * 2 + -1 * 9210 + 22798);
          test[_getExpectProperty(1191)](expect, input)["to"]["be"][_getExpectProperty(704)](2 * 855 + 9336 + -5502);
          test[_getExpectProperty(1192)](expect, deferred)["to"]["be"][_getExpectProperty(708)]({
            "port" : 5544
          });
          this[_getExpectProperty(703)](-6361 + -13 * -526 + -3 * 159);
        });
      });
      data[getRefreshTokenKey(1193)](it, getRefreshTokenKey(1194), async function() {
        const parseInt = getRefreshTokenKey;
        const _0x414093 = {
          "IfehS" : match[parseInt(1195)]
        };
        sinon[parseInt(687)](ProjectBase["prototype"], parseInt(1196))[parseInt(690)]({
          "use" : () => {
          }
        });
        let promises = http[parseInt(1197)]();
        return promises = Promise["promisifyAll"](promises), promises[parseInt(1198)](7465 + 3049 + -14 * 355, match["wurgy"])[parseInt(731)](() => {
          const now = parseInt;
          return cypress[now(654)]([now(851) + this[now(672)], rpm_traffic[now(1199)]]);
        })[parseInt(731)](() => {
          const gotoNewOfflinePage = parseInt;
          this[gotoNewOfflinePage(705)]("PORT_IN_USE_SHORT", _0x414093["IfehS"]);
        });
      });
    });
    data[getKey(1200)](describe, data["cEBbv"], () => {
      const getRefreshTokenKey = getKey;
      const rpm_traffic = {
        "Ownpw" : function(_relatedTarget, position) {
          const getRefreshTokenKey = _0x501e;
          return data[getRefreshTokenKey(907)](_relatedTarget, position);
        },
        "UmSOn" : data[getRefreshTokenKey(1201)],
        "goosw" : data[getRefreshTokenKey(1202)],
        "ONtCv" : data[getRefreshTokenKey(1203)],
        "vcsQP" : getRefreshTokenKey(1204)
      };
      data[getRefreshTokenKey(791)](beforeEach, () => {
        const parseInt = getRefreshTokenKey;
        return process[parseInt(1072)] = _["omit"](process[parseInt(1072)], match[parseInt(1205)]), runMode[parseInt(510)][parseInt(686)]({
          "stats" : {
            "failures" : 0
          }
        });
      });
      data[getRefreshTokenKey(1206)](it, data[getRefreshTokenKey(1207)], function() {
        const now = getRefreshTokenKey;
        const p = {
          "WrQJW" : function(mmCoreSplitViewBlock, $state) {
            const now = _0x501e;
            return rpm_traffic[now(1208)](mmCoreSplitViewBlock, $state);
          },
          "ndKtm" : now(1209),
          "zZByg" : rpm_traffic[now(1210)],
          "buhZY" : now(1211)
        };
        return cypress[now(654)]([now(851) + this[now(672)], rpm_traffic["goosw"], rpm_traffic["ONtCv"], rpm_traffic[now(1212)]])[now(731)](() => {
          const makeTransactionID = now;
          p[makeTransactionID(1213)](expect, openProject[makeTransactionID(1105)]()["cfg"][makeTransactionID(1072)])["to"]["deep"]["eq"]({
            "version" : p[makeTransactionID(1214)],
            "foo" : p[makeTransactionID(1215)],
            "host" : p[makeTransactionID(1216)],
            "baz" : makeTransactionID(1217)
          });
          this["expectExitWith"](5021 + -2092 + -29 * 101);
        });
      });
      data[getRefreshTokenKey(1206)](it, getRefreshTokenKey(1218), function() {
        const updateDevicesAfterDelay = getRefreshTokenKey;
        const rpm_traffic = {
          "UOAWF" : updateDevicesAfterDelay(1219)
        };
        return cypress[updateDevicesAfterDelay(654)]([updateDevicesAfterDelay(851) + this[updateDevicesAfterDelay(672)], updateDevicesAfterDelay(529), "--env=FOO=,BAR=,BAZ=ipsum"])[updateDevicesAfterDelay(731)](() => {
          const now = updateDevicesAfterDelay;
          expect(openProject[now(1105)]()[now(968)][now(1072)])["to"][now(1120)]["eq"]({
            "FOO" : "",
            "BAR" : "",
            "BAZ" : rpm_traffic[now(1220)]
          });
          this[now(703)](11 * -299 + 3012 + 1 * 277);
        });
      });
    });
    describe(data[getKey(1221)], () => {
      const getRefreshTokenKey = getKey;
      const ret = {
        "GSmQg" : data[getRefreshTokenKey(1222)],
        "aIVfC" : data["GyoVg"],
        "aIRUs" : data[getRefreshTokenKey(1221)]
      };
      data["bFhGK"](it, data[getRefreshTokenKey(1223)], function() {
        const parseInt = getRefreshTokenKey;
        return fs["statAsync"](path[parseInt(473)](this["pristinePath"], match[parseInt(945)]))[parseInt(731)](() => {
          const camelToSnake = parseInt;
          throw new Error(ret[camelToSnake(1224)]);
        })[parseInt(888)]({
          "code" : match[parseInt(942)]
        }, () => {
          const camelToSnake = parseInt;
          return cypress[camelToSnake(654)]([camelToSnake(851) + this["pristinePath"], ret[camelToSnake(1225)], ret["aIRUs"], "false"])[camelToSnake(731)](() => {
            const updateDevicesAfterDelay = camelToSnake;
            this[updateDevicesAfterDelay(703)](15 * -101 + 1217 + 298);
          });
        });
      });
      data["bFhGK"](it, getRefreshTokenKey(1226), function() {
        const parseInt = getRefreshTokenKey;
        const rpm_traffic = {
          "zDnlG" : match[parseInt(948)]
        };
        return this["filename"] = match["nbiId"], fs[parseInt(929)](path[parseInt(473)](this[parseInt(672)], this[parseInt(1227)]))[parseInt(731)](() => {
          const gotoNewOfflinePage = parseInt;
          throw new Error(this[gotoNewOfflinePage(1227)] + " should not exist");
        })["catch"]({
          "code" : match[parseInt(942)]
        }, () => {
          const gotoNewOfflinePage = parseInt;
          return cypress[gotoNewOfflinePage(654)]([gotoNewOfflinePage(851) + this[gotoNewOfflinePage(672)], gotoNewOfflinePage(533), ret["aIRUs"], this["filename"]])[gotoNewOfflinePage(731)](() => {
            const now = gotoNewOfflinePage;
            this[now(705)](rpm_traffic[now(1228)], this[now(1227)], this["todosPath"]);
          });
        });
      });
    });
  });
  context(data[getRefreshTokenKey(1229)], () => {
    const pluralize = getRefreshTokenKey;
    const state = {
      "hKqfd" : data["GEiMQ"],
      "qclZg" : data["rYOjH"],
      "Umgym" : data[pluralize(1230)],
      "BSTzu" : data[pluralize(1231)],
      "pEbYq" : data[pluralize(1232)],
      "tNAOG" : function(_relatedTarget, position) {
        return data["jHcjX"](_relatedTarget, position);
      },
      "jjUsx" : data[pluralize(1233)],
      "dQTYt" : data[pluralize(1234)],
      "Wvxhq" : data[pluralize(1235)],
      "XqWgN" : function(_relatedTarget, position) {
        const getRefreshTokenKey = pluralize;
        return data[getRefreshTokenKey(1236)](_relatedTarget, position);
      },
      "nkzom" : data["HULXy"],
      "OqmCD" : data["nnOEi"],
      "GpLfU" : data[pluralize(1229)],
      "llhHD" : data[pluralize(1237)],
      "acbCi" : function(_relatedTarget, position) {
        const getRefreshTokenKey = pluralize;
        return data[getRefreshTokenKey(1238)](_relatedTarget, position);
      },
      "AuiGC" : "INDETERMINATE_CI_BUILD_ID-parallel-group 1",
      "ppuwO" : pluralize(1239),
      "JsVGC" : data[pluralize(1240)],
      "QBloT" : data[pluralize(1241)],
      "vskYt" : function(_relatedTarget, position) {
        const getRefreshTokenKey = pluralize;
        return data[getRefreshTokenKey(1242)](_relatedTarget, position);
      },
      "xoCPx" : "RECORD_PARAMS_WITHOUT_RECORDING-ciBuildId 1",
      "XjKwh" : data[pluralize(1243)],
      "LcJlM" : data[pluralize(1244)],
      "WkUgg" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "mzzQu" : data[pluralize(1245)],
      "LlsOg" : data[pluralize(1246)],
      "HEOot" : data[pluralize(1247)],
      "seJVa" : data[pluralize(1248)],
      "WJRhf" : function(_relatedTarget, position) {
        const getRefreshTokenKey = pluralize;
        return data[getRefreshTokenKey(1249)](_relatedTarget, position);
      },
      "PwwRD" : data[pluralize(1250)],
      "GGKGq" : "RUN_GROUP_NAME_NOT_UNIQUE",
      "TmYiM" : data[pluralize(1251)],
      "qDNDM" : data[pluralize(1252)],
      "Jvvoz" : data["yLKkK"],
      "jKQhy" : data["yWBqp"],
      "XPrAc" : function(_relatedTarget, position) {
        const getRefreshTokenKey = pluralize;
        return data[getRefreshTokenKey(1253)](_relatedTarget, position);
      },
      "ghjmQ" : data["iqZQP"],
      "wQJqX" : data[pluralize(1254)],
      "uNdAf" : data[pluralize(1255)],
      "DLlxH" : data[pluralize(1256)],
      "Sgfqp" : data[pluralize(1257)],
      "lcDaT" : data[pluralize(1258)],
      "xZnvO" : function(_relatedTarget, position) {
        const getRefreshTokenKey = pluralize;
        return data[getRefreshTokenKey(1253)](_relatedTarget, position);
      },
      "PKzVr" : data[pluralize(1259)],
      "ciVcU" : data[pluralize(1260)],
      "NFZHi" : data[pluralize(1261)]
    };
    data["sGsGa"](beforeEach, function() {
      const ext = pluralize;
      return sinon[ext(687)](api, "createRun")[ext(686)](), sinon["stub"](electron[ext(765)], "on")["withArgs"](state[ext(1262)])["yieldsAsync"](), sinon[ext(687)](browsers, state[ext(1263)]), sinon[ext(687)](runMode, state["Umgym"])[ext(686)](), sinon["stub"](runMode, state[ext(1264)])[ext(686)]({
        "stats" : {
          "tests" : 1,
          "passes" : 2,
          "failures" : 3,
          "pending" : 4,
          "skipped" : 5,
          "wallClockDuration" : 6
        },
        "tests" : [],
        "hooks" : [],
        "video" : state[ext(1265)],
        "shouldUploadVideo" : !![],
        "screenshots" : [],
        "config" : {},
        "spec" : {}
      }), Promise["all"]([user["set"]({}), state["tNAOG"](getId, this[ext(672)])[ext(731)]((project) => {
        this["projectId"] = project;
      })]);
    });
    data[pluralize(1200)](it, data[pluralize(1266)], function() {
      const getRefreshTokenKey = pluralize;
      const zlib = {
        "JxKcs" : function(saveNotifs, notifications) {
          return saveNotifs(notifications);
        }
      };
      return sinon[getRefreshTokenKey(687)](env, getRefreshTokenKey(593))[getRefreshTokenKey(697)](data[getRefreshTokenKey(1267)])[getRefreshTokenKey(690)](this["projectId"]), cypress["start"]([data[getRefreshTokenKey(1268)], "--run-project=" + this[getRefreshTokenKey(677)], data[getRefreshTokenKey(1229)], getRefreshTokenKey(598)])[getRefreshTokenKey(731)](() => {
        const firstCharUp = getRefreshTokenKey;
        zlib["JxKcs"](expect, api[firstCharUp(1269)])["to"]["be"][firstCharUp(708)]({
          "projectId" : this[firstCharUp(1270)]
        });
        zlib[firstCharUp(1271)](expect, errors["warning"])[firstCharUp(789)]["to"]["be"][firstCharUp(884)];
        this[firstCharUp(703)](-481 + -1453 + 149 * 13);
      });
    });
    data[pluralize(1272)](it, data[pluralize(1273)], function() {
      const getRefreshTokenKey = pluralize;
      return sinon["stub"](env, data[getRefreshTokenKey(1274)])["withArgs"](data[getRefreshTokenKey(1267)])["returns"](data["yONPw"])[getRefreshTokenKey(697)](data[getRefreshTokenKey(1275)])[getRefreshTokenKey(690)](data[getRefreshTokenKey(1234)]), cypress[getRefreshTokenKey(654)]([data[getRefreshTokenKey(1268)], "--run-project=" + this[getRefreshTokenKey(677)], getRefreshTokenKey(1276)])[getRefreshTokenKey(731)](() => {
        const firstCharUp = getRefreshTokenKey;
        expect(api[firstCharUp(1269)])["to"]["be"][firstCharUp(708)]({
          "projectId" : state[firstCharUp(1277)],
          "recordKey" : state[firstCharUp(1278)]
        });
        expect(errors[firstCharUp(485)])[firstCharUp(789)]["to"]["be"][firstCharUp(884)];
        this[firstCharUp(703)](7418 + -3847 + 3568 * -1);
      });
    });
    it(data[pluralize(1279)], function() {
      const ext = pluralize;
      return sinon[ext(687)](ciProvider, state[ext(1280)])["returns"](null), cypress[ext(654)]([ext(851) + this["recordPath"], state["GpLfU"], ext(598), state[ext(1281)]])[ext(731)](() => {
        const decode = ext;
        return this[decode(705)](state["Wvxhq"]), state[decode(1282)](snapshotConsoleLogs, state[decode(1283)]);
      });
    });
    data[pluralize(1272)](it, data[pluralize(1284)], function() {
      const getRefreshTokenKey = pluralize;
      const _0x10a08a = {
        "rDgZv" : function(_relatedTarget, position) {
          const getRefreshTokenKey = _0x501e;
          return data[getRefreshTokenKey(1285)](_relatedTarget, position);
        },
        "WCCBT" : "INDETERMINATE_CI_BUILD_ID-parallel 1"
      };
      return sinon[getRefreshTokenKey(687)](ciProvider, data[getRefreshTokenKey(1286)])[getRefreshTokenKey(690)](null), cypress["start"]([getRefreshTokenKey(851) + this["recordPath"], data[getRefreshTokenKey(1229)], getRefreshTokenKey(598), data["gDFpL"]])["then"](() => {
        const gotoNewOfflinePage = getRefreshTokenKey;
        return this[gotoNewOfflinePage(705)](gotoNewOfflinePage(608)), _0x10a08a["rDgZv"](snapshotConsoleLogs, _0x10a08a["WCCBT"]);
      });
    });
    it(data["GTdOk"], function() {
      const getRefreshTokenKey = pluralize;
      return sinon["stub"](ciProvider, data[getRefreshTokenKey(1286)])[getRefreshTokenKey(690)](null), cypress[getRefreshTokenKey(654)]([getRefreshTokenKey(851) + this[getRefreshTokenKey(679)], "--record", data[getRefreshTokenKey(1252)], data["JrFvY"], data[getRefreshTokenKey(1248)]])[getRefreshTokenKey(731)](() => {
        const ext = getRefreshTokenKey;
        return this[ext(705)](state[ext(1287)]), state[ext(1288)](snapshotConsoleLogs, state[ext(1289)]);
      });
    });
    data[pluralize(1290)](it, data[pluralize(1291)], function() {
      const getRefreshTokenKey = pluralize;
      return cypress[getRefreshTokenKey(654)]([getRefreshTokenKey(851) + this[getRefreshTokenKey(679)], getRefreshTokenKey(1276), data[getRefreshTokenKey(1252)], getRefreshTokenKey(612)])["then"](() => {
        const ext = getRefreshTokenKey;
        return this[ext(705)](state[ext(1292)]), state[ext(1288)](snapshotConsoleLogs, state[ext(1293)]);
      });
    });
    data[pluralize(1290)](it, data[pluralize(1294)], function() {
      const ext = pluralize;
      return cypress["start"]([ext(851) + this[ext(679)], state[ext(1295)]])[ext(731)](() => {
        const decode = ext;
        return this[decode(705)](state[decode(1296)]), state[decode(1297)](snapshotConsoleLogs, state[decode(1298)]);
      });
    });
    data[pluralize(1290)](it, data[pluralize(1299)], function() {
      const ext = pluralize;
      return cypress[ext(654)]([ext(851) + this[ext(679)], state[ext(1281)]])["then"](() => {
        const decode = ext;
        return this[decode(705)](decode(611)), state[decode(1297)](snapshotConsoleLogs, state[decode(1300)]);
      });
    });
    data[pluralize(1301)](it, pluralize(1302), function() {
      const gotoNewOfflinePage = pluralize;
      return cypress[gotoNewOfflinePage(654)]([gotoNewOfflinePage(851) + this["recordPath"], "--parallel"])["then"](() => {
        const ext = gotoNewOfflinePage;
        return this["expectExitWithErr"](state[ext(1296)]), state[ext(1303)](snapshotConsoleLogs, state[ext(1304)]);
      });
    });
    data[pluralize(1305)](it, data[pluralize(1306)], function() {
      const gotoNewOfflinePage = pluralize;
      return cypress["start"]([gotoNewOfflinePage(851) + this[gotoNewOfflinePage(679)], gotoNewOfflinePage(1307)])[gotoNewOfflinePage(731)](() => {
        const ext = gotoNewOfflinePage;
        return this[ext(705)](state[ext(1296)]), state[ext(1303)](snapshotConsoleLogs, state[ext(1308)]);
      });
    });
    it(data["IXxVp"], function() {
      const ext = pluralize;
      const rpm_traffic = {
        "VDTJj" : state[ext(1296)],
        "XNUkp" : function(value, result) {
          const decode = ext;
          return state[decode(1303)](value, result);
        },
        "DttVQ" : state["HEOot"]
      };
      return cypress["start"]([ext(851) + this["recordPath"], ext(1307), ext(602), state[ext(1309)]])[ext(731)](() => {
        const now = ext;
        return this[now(705)](rpm_traffic["VDTJj"]), rpm_traffic[now(1310)](snapshotConsoleLogs, rpm_traffic[now(1311)]);
      });
    });
    data[pluralize(1305)](it, pluralize(1312), function() {
      const firstCharUp = pluralize;
      const rpm_traffic = {
        "MiCUh" : "DASHBOARD_RUN_GROUP_NAME_NOT_UNIQUE",
        "SpuCo" : function(value, result) {
          return state["WJRhf"](value, result);
        },
        "QoMQI" : state["PwwRD"]
      };
      const defResp = new Error;
      return defResp[firstCharUp(1313)] = 626 * 6 + 7164 + 1 * -10498, defResp[firstCharUp(1314)] = {
        "code" : state[firstCharUp(1315)],
        "payload" : {
          "runUrl" : state[firstCharUp(1316)]
        }
      }, api[firstCharUp(1269)][firstCharUp(997)](defResp), cypress[firstCharUp(654)]([firstCharUp(851) + this[firstCharUp(679)], firstCharUp(1276), state[firstCharUp(1317)], state[firstCharUp(1318)], firstCharUp(603)])["then"](() => {
        const now = firstCharUp;
        return this[now(705)](rpm_traffic[now(1319)]), rpm_traffic[now(1320)](snapshotConsoleLogs, rpm_traffic["QoMQI"]);
      });
    });
    data[pluralize(1321)](it, data[pluralize(1322)], function() {
      const getRefreshTokenKey = pluralize;
      sinon[getRefreshTokenKey(687)](system, data[getRefreshTokenKey(1323)])[getRefreshTokenKey(690)]({
        "osName" : data[getRefreshTokenKey(1324)],
        "osVersion" : "v1"
      });
      sinon[getRefreshTokenKey(687)](browsers, getRefreshTokenKey(1325))[getRefreshTokenKey(686)]({
        "version" : getRefreshTokenKey(1326),
        "displayName" : data["xGUDM"]
      });
      const defResp = new Error;
      return defResp[getRefreshTokenKey(1313)] = 747 + 8422 + -8747 * 1, defResp[getRefreshTokenKey(1314)] = {
        "code" : data[getRefreshTokenKey(1327)],
        "payload" : {
          "runUrl" : data[getRefreshTokenKey(1251)]
        }
      }, api[getRefreshTokenKey(1269)][getRefreshTokenKey(997)](defResp), cypress[getRefreshTokenKey(654)](["--run-project=" + this[getRefreshTokenKey(679)], data[getRefreshTokenKey(1229)], data[getRefreshTokenKey(1252)], "--parallel", data[getRefreshTokenKey(1328)], data["ItGsQ"]])["then"](() => {
        const ext = getRefreshTokenKey;
        return this[ext(705)](state[ext(1329)]), state[ext(1330)](snapshotConsoleLogs, state[ext(1331)]);
      });
    });
    data["KiHgn"](it, pluralize(1332), function() {
      const runCodeWrapper = pluralize;
      const rpm_traffic = {
        "srQbU" : state[runCodeWrapper(1333)],
        "CekAa" : state[runCodeWrapper(1334)]
      };
      const error = new Error;
      return error[runCodeWrapper(1313)] = -5 * 897 + -1 * -332 + -183 * -25, error["error"] = {
        "code" : runCodeWrapper(1335),
        "payload" : {
          "runUrl" : "https://dashboard.cypress.io/runs/12345"
        }
      }, api["createRun"][runCodeWrapper(997)](error), cypress["start"](["--run-project=" + this[runCodeWrapper(679)], state[runCodeWrapper(1336)], runCodeWrapper(598), runCodeWrapper(597), runCodeWrapper(602), state[runCodeWrapper(1337)]])[runCodeWrapper(731)](() => {
        const now = runCodeWrapper;
        return this[now(705)](rpm_traffic["srQbU"]), snapshotConsoleLogs(rpm_traffic[now(1338)]);
      });
    });
    it(data["dgdDd"], function() {
      const getRefreshTokenKey = pluralize;
      const rpm_traffic = {
        "jssTB" : data[getRefreshTokenKey(1339)],
        "BBNCP" : function(_relatedTarget, position) {
          return data["RfKCZ"](_relatedTarget, position);
        }
      };
      const defResp = new Error;
      return defResp[getRefreshTokenKey(1313)] = 4 * -1354 + -5152 + -1099 * -10, defResp[getRefreshTokenKey(1314)] = {
        "code" : data[getRefreshTokenKey(1340)],
        "payload" : {
          "runUrl" : data[getRefreshTokenKey(1251)]
        }
      }, api["createRun"][getRefreshTokenKey(997)](defResp), cypress["start"]([getRefreshTokenKey(851) + this[getRefreshTokenKey(679)], data[getRefreshTokenKey(1229)], getRefreshTokenKey(598), getRefreshTokenKey(597), data[getRefreshTokenKey(1261)], data[getRefreshTokenKey(1328)], data[getRefreshTokenKey(1256)]])[getRefreshTokenKey(731)](() => {
        const now = getRefreshTokenKey;
        return this[now(705)](rpm_traffic[now(1341)]), rpm_traffic[now(1342)](snapshotConsoleLogs, now(1343));
      });
    });
    it(data[pluralize(1344)], function() {
      const getRefreshTokenKey = pluralize;
      const error = new Error;
      return error["statusCode"] = -8535 + -3325 + -46 * -267, error[getRefreshTokenKey(1314)] = {
        "code" : data[getRefreshTokenKey(1345)],
        "payload" : {
          "runUrl" : data["OHeoX"]
        }
      }, api[getRefreshTokenKey(1269)][getRefreshTokenKey(997)](error), cypress[getRefreshTokenKey(654)](["--run-project=" + this["recordPath"], data["EjyRW"], data[getRefreshTokenKey(1252)], getRefreshTokenKey(1307), data[getRefreshTokenKey(1328)], data[getRefreshTokenKey(1256)]])[getRefreshTokenKey(731)](() => {
        const ext = getRefreshTokenKey;
        return this[ext(705)](ext(1346)), snapshotConsoleLogs(state[ext(1347)]);
      });
    });
    data[pluralize(1348)](it, data[pluralize(1349)], function() {
      const firstCharUp = pluralize;
      const rpm_traffic = {
        "qzxbN" : state[firstCharUp(1350)],
        "YGLfz" : function(value, result) {
          const ext = firstCharUp;
          return state[ext(1351)](value, result);
        },
        "fCwwM" : state[firstCharUp(1352)]
      };
      const error = new Error;
      return error[firstCharUp(1313)] = 69 * -59 + -4959 + 17 * 556, error["error"] = {
        "code" : state[firstCharUp(1353)],
        "payload" : {
          "runUrl" : state[firstCharUp(1316)]
        }
      }, api[firstCharUp(1269)][firstCharUp(997)](error), cypress[firstCharUp(654)]([firstCharUp(851) + this[firstCharUp(679)], state["GpLfU"], state[firstCharUp(1317)], state["seJVa"], state[firstCharUp(1354)], state[firstCharUp(1318)], state["DLlxH"]])[firstCharUp(731)](() => {
        const now = firstCharUp;
        return this[now(705)](rpm_traffic[now(1355)]), rpm_traffic[now(1356)](snapshotConsoleLogs, rpm_traffic["fCwwM"]);
      });
    });
  });
  data["ardwM"](context, data[getRefreshTokenKey(1357)], () => {
    const pluralize = getRefreshTokenKey;
    const rpm_traffic = {
      "mzcMh" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      }
    };
    data[pluralize(1358)](beforeEach, () => {
      const getConsoleMethod = pluralize;
      console[getConsoleMethod(472)][getConsoleMethod(1124)]();
      sinon[getConsoleMethod(687)](console, getConsoleMethod(472));
    });
    data["KiHgn"](it, data[pluralize(1359)], function() {
      const getRefreshTokenKey = pluralize;
      return cypress[getRefreshTokenKey(654)]([data[getRefreshTokenKey(1357)]])[getRefreshTokenKey(731)](() => {
        const now = getRefreshTokenKey;
        rpm_traffic[now(1360)](expect, console[now(472)])["to"]["be"][now(708)](now(1361));
        this[now(703)](-1547 * -5 + 4953 + -4 * 3172);
      });
    });
  });
  data[getRefreshTokenKey(1362)](context, data[getRefreshTokenKey(1363)], () => {
    const pluralize = getRefreshTokenKey;
    const _0x25f788 = {
      "uYnxi" : data[pluralize(1363)]
    };
    data[pluralize(1364)](beforeEach, () => {
      const getRefreshTokenKey = pluralize;
      console[getRefreshTokenKey(472)]["restore"]();
      sinon[getRefreshTokenKey(687)](console, data[getRefreshTokenKey(699)]);
    });
    it(data[pluralize(1365)], function() {
      const gotoNewOfflinePage = pluralize;
      const rpm_traffic = {
        "LbOvh" : function(saveNotifs, notifications) {
          return saveNotifs(notifications);
        }
      };
      return cypress[gotoNewOfflinePage(654)]([_0x25f788["uYnxi"]])[gotoNewOfflinePage(731)](() => {
        const now = gotoNewOfflinePage;
        rpm_traffic[now(1366)](expect, console[now(472)])["to"]["be"][now(704)](pkg[now(701)]);
        this[now(703)](13 * -126 + -6119 + 7757 * 1);
      });
    });
  });
  data[getRefreshTokenKey(1362)](context, getRefreshTokenKey(1367), () => {
    const pluralize = getRefreshTokenKey;
    const rpm_traffic = {
      "aKLKQ" : data[pluralize(1368)]
    };
    data[pluralize(1369)](beforeEach, () => {
      const getRefreshTokenKey = pluralize;
      console["log"][getRefreshTokenKey(1124)]();
      sinon[getRefreshTokenKey(687)](console, data[getRefreshTokenKey(699)]);
    });
    data[pluralize(1370)](it, data[pluralize(1371)], function() {
      const getRefreshTokenKey = pluralize;
      return cypress[getRefreshTokenKey(654)]([getRefreshTokenKey(1367), data[getRefreshTokenKey(1372)]])[getRefreshTokenKey(731)](() => {
        const now = getRefreshTokenKey;
        expect(console[now(472)])["to"]["be"][now(704)](rpm_traffic[now(1373)]);
        this["expectExitWith"](-6 * -827 + 9 * 923 + -13269);
      });
    });
  });
  data[getRefreshTokenKey(1374)](context, data[getRefreshTokenKey(1375)], () => {
    const pluralize = getRefreshTokenKey;
    const values = {
      "CMudN" : data[pluralize(1376)],
      "zmtVH" : data[pluralize(1377)],
      "iooja" : data["GEiMQ"],
      "XMKwL" : data[pluralize(1378)],
      "bJVGS" : function(_relatedTarget, position) {
        return data["jQbFN"](_relatedTarget, position);
      },
      "Mcyew" : pluralize(1379),
      "KaSQl" : pluralize(651),
      "WSEtW" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "vZhvz" : data["KLzWh"],
      "OHAgZ" : data[pluralize(1201)],
      "YpeWr" : pluralize(1380),
      "XrlTf" : function(require, load, callback) {
        return require(load, callback);
      },
      "Lryhr" : data[pluralize(1381)],
      "JviZj" : data[pluralize(1382)],
      "qcaDM" : data[pluralize(1383)],
      "sSDpA" : function(_relatedTarget, position, size) {
        const getRefreshTokenKey = pluralize;
        return data[getRefreshTokenKey(1384)](_relatedTarget, position, size);
      }
    };
    beforeEach(function() {
      const removeKeyPrefix = pluralize;
      const callbackVals = values[removeKeyPrefix(1385)]["split"]("|");
      let callbackCount = 9358 + -1 * 2014 + 459 * -16;
      for (; !![];) {
        switch(callbackVals[callbackCount++]) {
          case "0":
            sinon["stub"](ServerE2E[removeKeyPrefix(693)], "startWebsockets");
            continue;
          case "1":
            sinon[removeKeyPrefix(687)](Windows, values[removeKeyPrefix(1386)])["resolves"](this[removeKeyPrefix(764)]);
            continue;
          case "2":
            sinon[removeKeyPrefix(687)](electron[removeKeyPrefix(765)], "on")[removeKeyPrefix(697)](values[removeKeyPrefix(1387)])[removeKeyPrefix(767)]();
            continue;
          case "3":
            sinon["stub"](electron[removeKeyPrefix(1388)], "on");
            continue;
          case "4":
            sinon[removeKeyPrefix(698)](Events, values[removeKeyPrefix(1389)]);
            continue;
          case "5":
            this[removeKeyPrefix(764)] = {
              "on" : sinon["stub"](),
              "webContents" : {
                "on" : sinon[removeKeyPrefix(687)]()
              }
            };
            continue;
        }
        break;
      }
    });
    it(data[pluralize(1390)], () => {
      const getRefreshTokenKey = pluralize;
      const zlib = {
        "oqqpc" : function(saveNotifs, notifications) {
          return saveNotifs(notifications);
        }
      };
      return sinon[getRefreshTokenKey(687)](interactiveMode, getRefreshTokenKey(500)), cypress[getRefreshTokenKey(654)]([data[getRefreshTokenKey(1391)], data[getRefreshTokenKey(1392)], data[getRefreshTokenKey(1393)]])["then"](() => {
        const gotoNewOfflinePage = getRefreshTokenKey;
        zlib["oqqpc"](expect, interactiveMode[gotoNewOfflinePage(500)])["to"]["be"][gotoNewOfflinePage(708)]({
          "updating" : !![],
          "config" : {
            "port" : 2121,
            "pageLoadTimeout" : 1000
          }
        });
      });
    });
    data[pluralize(1394)](it, pluralize(1395), () => {
      const getRefreshTokenKey = pluralize;
      return cypress[getRefreshTokenKey(654)](["--port=2121", data[getRefreshTokenKey(1393)]])[getRefreshTokenKey(731)](() => {
        const removeKeyPrefix = getRefreshTokenKey;
        values[removeKeyPrefix(1396)](expect, Events["start"])["to"]["be"][removeKeyPrefix(708)]({
          "config" : {
            "pageLoadTimeout" : 1000,
            "port" : 2121
          }
        });
      });
    });
    data[pluralize(1394)](it, "passes filtered options to Project#open and sets cli config", function() {
      const getRefreshTokenKey = pluralize;
      const args = {
        "zoEvh" : getRefreshTokenKey(638),
        "MWCLI" : data[getRefreshTokenKey(736)],
        "wQHAw" : data[getRefreshTokenKey(1397)],
        "obYvS" : data["ijBoi"],
        "zBXty" : function(_relatedTarget, position) {
          const pluralize = getRefreshTokenKey;
          return data[pluralize(1369)](_relatedTarget, position);
        },
        "gAhqX" : data["TUqhl"],
        "QjoqR" : function(_relatedTarget, position) {
          const pluralize = getRefreshTokenKey;
          return data[pluralize(1398)](_relatedTarget, position);
        },
        "Eblqq" : data["RrGsr"],
        "iyCnC" : function(saveNotifs, notifications) {
          return saveNotifs(notifications);
        },
        "PBayU" : function(_relatedTarget, position) {
          const pluralize = getRefreshTokenKey;
          return data[pluralize(1399)](_relatedTarget, position);
        },
        "yTYas" : data[getRefreshTokenKey(1400)],
        "Apebq" : function(saveNotifs, notifications) {
          return saveNotifs(notifications);
        },
        "SZrUa" : function(_relatedTarget, position) {
          const pluralize = getRefreshTokenKey;
          return data[pluralize(1399)](_relatedTarget, position);
        },
        "GxoRZ" : data[getRefreshTokenKey(1401)],
        "uaNsa" : data[getRefreshTokenKey(1402)],
        "oqpUi" : function(_relatedTarget, position) {
          const pluralize = getRefreshTokenKey;
          return data[pluralize(1403)](_relatedTarget, position);
        },
        "PyeWg" : data[getRefreshTokenKey(1404)],
        "pUvSX" : function(_relatedTarget, position) {
          return data["gbsHO"](_relatedTarget, position);
        },
        "YAfsV" : function(_relatedTarget, position) {
          const pluralize = getRefreshTokenKey;
          return data[pluralize(1405)](_relatedTarget, position);
        },
        "OnrNh" : "cli",
        "GOqMV" : getRefreshTokenKey(1072),
        "vpBwb" : function(saveNotifs, notifications) {
          return saveNotifs(notifications);
        },
        "jfRmT" : function(saveNotifs, notifications) {
          return saveNotifs(notifications);
        }
      };
      const files = sinon[getRefreshTokenKey(687)](ServerE2E[getRefreshTokenKey(693)], getRefreshTokenKey(768))[getRefreshTokenKey(686)]([]);
      return process[getRefreshTokenKey(1072)][getRefreshTokenKey(1406)] = data[getRefreshTokenKey(1137)], process["env"][getRefreshTokenKey(1407)] = getRefreshTokenKey(643), process[getRefreshTokenKey(1072)]["CYPRESS_port"] = data["AQIHC"], process["env"][getRefreshTokenKey(1408)] = data["UqoIe"], process[getRefreshTokenKey(1072)][getRefreshTokenKey(1409)] = data["kVbPm"], user["set"]({
        "name" : data["nMLvh"],
        "authToken" : data[getRefreshTokenKey(1410)]
      })[getRefreshTokenKey(731)](() => {
        const gotoNewOfflinePage = getRefreshTokenKey;
        return settings["read"](this[gotoNewOfflinePage(672)]);
      })[getRefreshTokenKey(731)]((obj) => {
        const removeKeyPrefix = getRefreshTokenKey;
        return obj["baseUrl"] = values[removeKeyPrefix(1411)], settings[removeKeyPrefix(951)](this["todosPath"], obj);
      })[getRefreshTokenKey(731)](() => {
        const parseInt = getRefreshTokenKey;
        return cypress[parseInt(654)]([args[parseInt(1412)], args[parseInt(1413)], args[parseInt(1414)], parseInt(653), args[parseInt(1415)]]);
      })[getRefreshTokenKey(731)](() => {
        const gotoNewOfflinePage = getRefreshTokenKey;
        const target = Events[gotoNewOfflinePage(654)]["firstCall"][gotoNewOfflinePage(859)][-3 * -3079 + -9811 + 7 * 82];
        return Events[gotoNewOfflinePage(1416)](target, {}, {}, -6106 + -22 * 157 + 9683 * 1, values["KaSQl"], this["todosPath"]);
      })[getRefreshTokenKey(731)](() => {
        const parseInt = getRefreshTokenKey;
        const r = openProject[parseInt(1105)]()[parseInt(1417)];
        expect(r[parseInt(645)])["to"]["eq"](1098 * -4 + 7635 + -1122);
        args[parseInt(1418)](expect, r[parseInt(1419)])["to"]["eq"](-74 * 103 + 31 * 88 + 5894);
        args[parseInt(1418)](expect, r["report"])["to"]["eq"](![]);
        args[parseInt(1418)](expect, r[parseInt(1072)])["to"][parseInt(1420)]({
          "baz" : args[parseInt(1421)]
        });
        args[parseInt(1422)](expect, files)["to"]["be"][parseInt(884)];
        const map = files[parseInt(1423)](-2477 * 1 + 826 + 1651)["args"][-2158 + 3336 + 31 * -38];
        args[parseInt(1422)](expect, map["fileServerFolder"])["to"]["eq"](path[parseInt(473)](this["todosPath"], args["Eblqq"]));
        args[parseInt(1424)](expect, map[parseInt(1419)])["to"]["eq"](-237 * 23 + -8561 + 834 * 18);
        args[parseInt(1424)](expect, map["port"])["to"]["eq"](57 * 155 + 4619 + -11333 * 1);
        args[parseInt(1425)](expect, map[parseInt(1426)])["to"]["eq"](args[parseInt(1427)]);
        args[parseInt(1425)](expect, map[parseInt(1428)])["to"]["be"][parseInt(648)];
        args["Apebq"](expect, map[parseInt(1429)])["to"]["eq"](-1 * -817 + -5772 + 10510);
        args["Apebq"](expect, map[parseInt(1072)][parseInt(642)])["to"]["eq"](args["gAhqX"]);
        args[parseInt(1430)](expect, map[parseInt(1072)])[parseInt(789)]["to"][parseInt(870)][parseInt(940)](args["GxoRZ"]);
        args["SZrUa"](expect, map["env"])[parseInt(789)]["to"][parseInt(870)]["property"](args[parseInt(1431)]);
        expect(map[parseInt(1072)])[parseInt(789)]["to"][parseInt(870)]["property"]("BASE_URL");
        args[parseInt(1430)](expect, map[parseInt(1072)])[parseInt(789)]["to"][parseInt(870)]["property"](parseInt(1428));
        args[parseInt(1432)](expect, map[parseInt(1072)])["not"]["to"]["have"]["property"](args["PyeWg"]);
        args[parseInt(1433)](expect, map["resolved"][parseInt(644)])["to"]["deep"]["eq"]({
          "value" : parseInt(995),
          "from" : parseInt(1072)
        });
        args[parseInt(1434)](expect, map[parseInt(1119)]["pageLoadTimeout"])["to"][parseInt(1120)]["eq"]({
          "value" : 1000,
          "from" : parseInt(562)
        });
        expect(map[parseInt(1119)][parseInt(645)])["to"][parseInt(1120)]["eq"]({
          "value" : 2121,
          "from" : args[parseInt(1435)]
        });
        expect(map["resolved"][parseInt(1426)])["to"]["deep"]["eq"]({
          "value" : args[parseInt(1427)],
          "from" : args[parseInt(1436)]
        });
        args[parseInt(1434)](expect, map[parseInt(1119)][parseInt(1428)])["to"][parseInt(1120)]["eq"]({
          "value" : ![],
          "from" : args[parseInt(1436)]
        });
        args["vpBwb"](expect, map[parseInt(1119)][parseInt(1429)])["to"][parseInt(1120)]["eq"]({
          "value" : 5555,
          "from" : args[parseInt(1436)]
        });
        args["jfRmT"](expect, map["resolved"][parseInt(1072)][parseInt(642)])["to"]["deep"]["eq"]({
          "value" : args[parseInt(1421)],
          "from" : args[parseInt(1435)]
        });
      });
    });
    data[pluralize(1394)](it, data[pluralize(1437)], function() {
      const getRefreshTokenKey = pluralize;
      const rpm_traffic = {
        "WMiQs" : data[getRefreshTokenKey(1438)],
        "imijz" : data[getRefreshTokenKey(1439)]
      };
      const i = new EE;
      const series = {
        "sender" : {
          "send" : sinon[getRefreshTokenKey(687)]()
        }
      };
      const artistTrack = {
        "message" : data[getRefreshTokenKey(1440)]
      };
      return sinon["stub"](ServerE2E[getRefreshTokenKey(693)], "open")[getRefreshTokenKey(686)]([-7144 + -91 * 88 + -23 * -751, artistTrack]), cypress[getRefreshTokenKey(654)]([getRefreshTokenKey(638), data["qqNGa"], getRefreshTokenKey(640), data[getRefreshTokenKey(1441)], data[getRefreshTokenKey(1442)]])[getRefreshTokenKey(731)](() => {
        const now = getRefreshTokenKey;
        const d = Events[now(654)]["firstCall"][now(859)][6316 * 1 + -3258 + 3058 * -1];
        return Events[now(1416)](d, i, series, 5207 * 1 + -7651 + 2567, rpm_traffic["WMiQs"]), Events[now(1416)](d, i, series, -893 + 2 * 211 + -6 * -99, rpm_traffic[now(1443)], this["todosPath"]);
      })[getRefreshTokenKey(731)](() => {
        const removeKeyPrefix = getRefreshTokenKey;
        values[removeKeyPrefix(1444)](expect, series[removeKeyPrefix(1445)][removeKeyPrefix(1446)][removeKeyPrefix(697)](values[removeKeyPrefix(1447)])[removeKeyPrefix(858)]["args"][-353 * -13 + -1714 * 4 + 36 * 63]["data"])["to"][removeKeyPrefix(1420)](artistTrack);
      });
    });
    data[pluralize(1448)](describe, data[pluralize(1221)], () => {
      const removeKeyPrefix = pluralize;
      const rpm_traffic = {
        "jJOQd" : function(callback, basis, excelComplaint) {
          return values["XrlTf"](callback, basis, excelComplaint);
        },
        "lXIYO" : values[removeKeyPrefix(1449)],
        "QlNxe" : values["JviZj"],
        "jNNBD" : removeKeyPrefix(651),
        "KVdKA" : removeKeyPrefix(1450)
      };
      beforeEach(function() {
        const getIndex = removeKeyPrefix;
        this[getIndex(1227)] = getIndex(1451);
        this["open"] = sinon[getIndex(687)](ServerE2E[getIndex(693)], values[getIndex(1386)])[getIndex(686)]([]);
      });
      values["XrlTf"](it, values[removeKeyPrefix(1452)], function() {
        const getIndex = removeKeyPrefix;
        const rpm_traffic = {
          "vwHEJ" : getIndex(651),
          "uVuDK" : function(callback, basis) {
            const removeKeyPrefix = getIndex;
            return values[removeKeyPrefix(1444)](callback, basis);
          },
          "jvsFG" : values["OHAgZ"]
        };
        return sinon[getIndex(687)](fs, values["YpeWr"]), fs[getIndex(1380)]["withArgs"](path["join"](this[getIndex(675)], this["filename"]))[getIndex(686)]({
          "env" : {
            "foo" : values[getIndex(1453)]
          },
          "port" : 2020
        }), fs[getIndex(1380)][getIndex(696)](), cypress["start"](["--config-file=" + this[getIndex(1227)]])["then"](() => {
          const now = getIndex;
          const target = Events[now(654)][now(858)][now(859)][1 * -875 + -121 * -8 + 1 * -93];
          return Events["handleEvent"](target, {}, {}, 9043 + -433 * -1 + 9353 * -1, rpm_traffic[now(1454)], this["pristinePath"]);
        })[getIndex(731)](() => {
          const rel2Mstr = getIndex;
          expect(this[rel2Mstr(768)])["to"]["be"][rel2Mstr(884)];
          const same = this[rel2Mstr(768)][rel2Mstr(1423)](4426 * -2 + -5 * -22 + 94 * 93)[rel2Mstr(859)][-131 * 19 + 1 * -3653 + 6142];
          rpm_traffic["uVuDK"](expect, same[rel2Mstr(1072)][rel2Mstr(995)])["to"]["equal"](rpm_traffic[rel2Mstr(1455)]);
          rpm_traffic[rel2Mstr(1456)](expect, same[rel2Mstr(645)])["to"]["equal"](211 + -2 * -1657 + 301 * -5);
        });
      });
      values[removeKeyPrefix(1457)](it, removeKeyPrefix(1458), function() {
        const updateDevicesAfterDelay = removeKeyPrefix;
        return cypress[updateDevicesAfterDelay(654)]([updateDevicesAfterDelay(1459) + this[updateDevicesAfterDelay(1227)]])[updateDevicesAfterDelay(731)](() => {
          const now = updateDevicesAfterDelay;
          rpm_traffic[now(1460)](debug, rpm_traffic[now(1461)], this[now(1227)]);
          const target = Events[now(654)][now(858)][now(859)][1741 * 2 + 9770 + -13252];
          return debug(rpm_traffic["QlNxe"], Events[now(654)][now(858)][now(859)]), Events[now(1416)](target, {}, {}, 8679 + 7779 + -45 * 363, rpm_traffic[now(1462)], this[now(675)]);
        })[updateDevicesAfterDelay(731)](() => {
          const now = updateDevicesAfterDelay;
          return rpm_traffic[now(1460)](expect, this[now(768)], rpm_traffic[now(1463)])["to"]["be"]["called"], fs[now(1380)](path[now(473)](this["pristinePath"], this[now(1227)]))[now(731)]((input) => {
            const updateDevicesAfterDelay = now;
            expect(input, "json file is empty")["to"][updateDevicesAfterDelay(1120)][updateDevicesAfterDelay(1464)]({});
          });
        });
      });
    });
  });
  data["MkJhS"](context, data[getRefreshTokenKey(1465)], () => {
    const pluralize = getRefreshTokenKey;
    const rpm_traffic = {
      "shyDY" : data[pluralize(766)],
      "UmuaK" : data[pluralize(695)]
    };
    data[pluralize(1466)](beforeEach, () => {
      const now = pluralize;
      errors["warning"][now(1124)]();
      sinon[now(687)](electron[now(765)], "on")[now(697)](rpm_traffic[now(1467)])["yieldsAsync"]();
      sinon[now(687)](interactiveMode, "ready")[now(686)]();
      sinon[now(698)](errors, rpm_traffic[now(1468)]);
    });
    it(pluralize(1469), () => {
      const getRefreshTokenKey = pluralize;
      const rpm_traffic = {
        "sQHIL" : data[getRefreshTokenKey(1470)],
        "Gusrm" : function(saveNotifs, notifications) {
          return saveNotifs(notifications);
        },
        "QZogR" : data[getRefreshTokenKey(1471)],
        "BaOiX" : function(_relatedTarget, position) {
          const pluralize = getRefreshTokenKey;
          return data[pluralize(1466)](_relatedTarget, position);
        },
        "XbZeU" : data[getRefreshTokenKey(1472)]
      };
      return cypress[getRefreshTokenKey(654)]()["then"](() => {
        const now = getRefreshTokenKey;
        expect(errors[now(485)])["to"]["be"]["calledWith"](rpm_traffic["sQHIL"]);
        rpm_traffic["Gusrm"](expect, console["log"])["to"]["be"][now(708)](rpm_traffic["QZogR"]);
        rpm_traffic[now(1473)](expect, console["log"])["to"]["be"][now(708)](rpm_traffic["XbZeU"]);
      });
    });
    it(data["ujMpn"], () => {
      const getRefreshTokenKey = pluralize;
      return cypress[getRefreshTokenKey(654)]([data[getRefreshTokenKey(1268)]])["then"](() => {
        const gotoNewOfflinePage = getRefreshTokenKey;
        expect(errors["warning"])[gotoNewOfflinePage(789)]["to"]["be"]["called"];
      });
    });
  });
  data[getRefreshTokenKey(1474)](context, data[getRefreshTokenKey(1475)], () => {
    const pluralize = getRefreshTokenKey;
    const rpm_traffic = {
      "GIflB" : data[pluralize(766)]
    };
    data[pluralize(1466)](beforeEach, () => {
      const now = pluralize;
      sinon[now(687)](electron[now(765)], "on")[now(697)](rpm_traffic[now(1476)])[now(767)]();
      sinon[now(687)](interactiveMode, rpm_traffic[now(1476)])[now(686)]();
    });
    data[pluralize(1448)](it, data[pluralize(1477)], () => {
      const rpm_traffic = {
        "vKnqX" : function(saveNotifs, notifications) {
          return saveNotifs(notifications);
        }
      };
      return cypress["start"]()["then"](() => {
        const now = _0x501e;
        rpm_traffic[now(1478)](expect, interactiveMode["ready"])["to"]["be"]["calledOnce"];
      });
    });
  });
});

