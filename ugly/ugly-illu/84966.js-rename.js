"use strict";

const path = require("path");

const chalk = require("chalk");

const stripAnsi = require("strip-ansi");

const table = require("text-table");

const cwd = process.cwd();
const emitErrorsAsWarnings = process.env.NODE_ENV === "development" && process.env.ESLINT_NO_DEV_ERRORS === "true";
function isError(e) {
  if (e.fatal || e.severity === 2) {
    return true;
  }return false;
}function getRelativePath(e) {
  return path.relative(cwd, e);
}function formatter(e) {
  var l = "\n";
  var n = false;
  var a = false;
  e.forEach(e => {
    var r = e.messages;
    if (r.length === 0) {
      return;
    }r = r.map(e => {
      var r;
      if (isError(e) && !emitErrorsAsWarnings) {
        r = "error";n = true;if (e.ruleId) {
          a = true;
        }
      } else {
        r = "warn";
      }var t = e.line || 0;
      if (e.column) {
        t += ":" + e.column;
      }const l = chalk.bold("Line " + t + ":");
      return ["", chalk.bold("Line " + t + ":"), "warn", e.message.replace(/\.$/, ""), chalk.underline(e.ruleId || "")];
    });if (n) {
      r = r.filter(e => e[2] === "error");
    }r.forEach(e => {
      e[4] = e[2] === "error" ? chalk.red(e[4]) : chalk.yellow(e[4]);e.splice(2, 1);
    });const t = table(r, { align: ["l", "l", "l"], stringLength(e) {
        return stripAnsi(e).length;
      } });
    l += `${getRelativePath(e.filePath)}\n`;l += `${t}\n\n`;
  });if (a) {
    l += "Search for the " + chalk.underline(chalk.red("keywords")) + " to learn more about each error.";
  }return l;
}module.exports = formatter;
