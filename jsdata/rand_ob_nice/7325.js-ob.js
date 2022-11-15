'use strict';
const _0x33cf = ["337RMFbzN", "2539sbQNWk", "1571TMOjVS", "169NuqnJr", "720323uKKRia", "828959ChyMCD", "@vue/cli-shared-utils", "exports", "git", "status", "env", "VUE_CLI_SKIP_DIRTY_GIT_PROMPT", "VUE_CLI_API_MODE", "dsKbx", "HjcEv", "wHEXO", "prompt", "confirm", "2357BLHLvB", "1kcbfvF", "353715zYEfaG", "11JlcTju", "29774wKQxkL"];
const _0x4d13c3 = _0x4660;
(function(data, val) {
  const toMonths = _0x4660;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(482)) + -parseInt(toMonths(483)) * parseInt(toMonths(484)) + parseInt(toMonths(485)) * parseInt(toMonths(486)) + -parseInt(toMonths(487)) * -parseInt(toMonths(488)) + -parseInt(toMonths(489)) * parseInt(toMonths(490)) + parseInt(toMonths(491)) + -parseInt(toMonths(492));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x5a3202) {
      data["push"](data["shift"]());
    }
  }
})(_0x33cf, 5 * -45693 + 1 * -726862 + -108329 * -13);
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
module[_0x4d13c3(494)] = async function check(tpl) {
  const resolveId = _0x4d13c3;
  const cachedMod = {
    "dsKbx" : resolveId(495),
    "HjcEv" : resolveId(496),
    "wHEXO" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  if (process[resolveId(497)][resolveId(498)] || process[resolveId(497)][resolveId(499)]) {
    return !![];
  }
  process[resolveId(497)][resolveId(498)] = !![];
  if (!hasProjectGit(tpl)) {
    return !![];
  }
  const {
    stdout : stdout
  } = await execa(cachedMod[resolveId(500)], [cachedMod[resolveId(501)], "--porcelain"], {
    "cwd" : tpl
  });
  if (!stdout) {
    return !![];
  }
  cachedMod[resolveId(502)](warn, "There are uncommitted changes in the current repository, it's recommended to commit or stash them first.");
  const {
    ok : result
  } = await inquirer[resolveId(503)]([{
    "name" : "ok",
    "type" : resolveId(504),
    "message" : "Still proceed?",
    "default" : ![]
  }]);
  return result;
};

