'use strict';
const inquirer = require("inquirer");
const {
  execa : execa,
  warn : warn,
  hasProjectGit : hasProjectGit
} = require("@vue/cli-shared-utils");
module["exports"] = async function check(userspath) {
  if (process["env"]["VUE_CLI_SKIP_DIRTY_GIT_PROMPT"] || process["env"]["VUE_CLI_API_MODE"]) {
    return !![];
  }
  process["env"]["VUE_CLI_SKIP_DIRTY_GIT_PROMPT"] = !![];
  if (!hasProjectGit(userspath)) {
    return !![];
  }
  const {
    stdout : stdout
  } = await execa("git", ["status", "--porcelain"], {
    "cwd" : userspath
  });
  if (!stdout) {
    return !![];
  }
  warn("There are uncommitted changes in the current repository, it's recommended to commit or stash them first.");
  const {
    ok : result
  } = await inquirer["prompt"]([{
    "name" : "ok",
    "type" : "confirm",
    "message" : _0xa3dd88["tvZRu"],
    "default" : ![]
  }]);
  return result;
};

