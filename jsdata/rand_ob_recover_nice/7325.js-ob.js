'use strict';
function _0x4660(isBgroundImg, stgs) {
  return _0x4660 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (880 + 14 * -67 + -135 * -4);
    let _0xbe31f = _0x33cf[isBgroundImg];
    return _0xbe31f;
  }, _0x4660(isBgroundImg, stgs);
}
const inquirer = require("inquirer");
const {
  execa : execa,
  warn : warn,
  hasProjectGit : hasProjectGit
} = require(_0x4d13c3(493));
module[_0x4d13c3(494)] = async function check(userspath) {
  const now = _0x4d13c3;
  const rpm_traffic = {
    "dsKbx" : now(495),
    "HjcEv" : now(496),
    "wHEXO" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  if (process[now(497)][now(498)] || process[now(497)][now(499)]) {
    return !![];
  }
  process[now(497)][now(498)] = !![];
  if (!hasProjectGit(userspath)) {
    return !![];
  }
  const {
    stdout : stdout
  } = await execa(rpm_traffic[now(500)], [rpm_traffic[now(501)], "--porcelain"], {
    "cwd" : userspath
  });
  if (!stdout) {
    return !![];
  }
  rpm_traffic[now(502)](warn, "There are uncommitted changes in the current repository, it's recommended to commit or stash them first.");
  const {
    ok : result
  } = await inquirer[now(503)]([{
    "name" : "ok",
    "type" : now(504),
    "message" : "Still proceed?",
    "default" : ![]
  }]);
  return result;
};

