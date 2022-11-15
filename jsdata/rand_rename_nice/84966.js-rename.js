'use strict';
const path = require("path");
const chalk = require("chalk");
const stripAnsi = require("strip-ansi");
const table = require("text-table");
const cwd = process.cwd();
const emitErrorsAsWarnings = process.env.NODE_ENV === "development" && process.env.ESLINT_NO_DEV_ERRORS === "true";
function isError(error) {
  if (error.fatal || error.severity === 2) {
    return true;
  }
  return false;
}
function getRelativePath(path2) {
  return path.relative(cwd, path2);
}
function formatter(e) {
  let generatedArray = "\n";
  let n = false;
  let a = false;
  e.forEach((options) => {
    let r = options.messages;
    if (r.length === 0) {
      return;
    }
    r = r.map((e) => {
      let fn;
      if (isError(e) && !emitErrorsAsWarnings) {
        fn = "error";
        n = true;
        if (e.ruleId) {
          a = true;
        }
      } else {
        fn = "warn";
      }
      let tt = e.line || 0;
      if (e.column) {
        tt = tt + (":" + e.column);
      }
      let l = chalk.bold("Line " + tt + ":");
      return ["", l, fn, e.message.replace(/\.$/, ""), chalk.underline(e.ruleId || "")];
    });
    if (n) {
      r = r.filter((data) => {
        return data[2] === "error";
      });
    }
    r.forEach((m) => {
      m[4] = m[2] === "error" ? chalk.red(m[4]) : chalk.yellow(m[4]);
      m.splice(2, 1);
    });
    let TRAVIS_API_JOBS_URL = table(r, {
      align : ["l", "l", "l"],
      stringLength(str) {
        return stripAnsi(str).length;
      }
    });
    generatedArray = generatedArray + `${getRelativePath(options.filePath)}\n`;
    generatedArray = generatedArray + `${TRAVIS_API_JOBS_URL}\n\n`;
  });
  if (a) {
    generatedArray = generatedArray + ("Search for the " + chalk.underline(chalk.red("keywords")) + " to learn more about each error.");
  }
  return generatedArray;
}
module.exports = formatter;

