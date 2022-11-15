const inquirer = require("inquirer");

var { execa, warn, hasProjectGit } = require("@vue/cli-shared-utils");

module.exports = async function e(r) {
  if (process.env.VUE_CLI_SKIP_DIRTY_GIT_PROMPT || process.env.VUE_CLI_API_MODE) {
    return true;
  }process.env.VUE_CLI_SKIP_DIRTY_GIT_PROMPT = true;if (!hasProjectGit(r)) {
    return true;
  }var { stdout: t } = await execa("git", ["status", "--porcelain"], { cwd: r });
  if (!t) {
    return true;
  }warn(`There are uncommitted changes in the current repository, it's recommended to commit or stash them first.`);var { ok: i } = await inquirer.prompt([{ name: "ok", type: "confirm", message: "Still proceed?", default: false }]);
  return i;
};
