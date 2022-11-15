'use strict';
import wrapAnsi from "wrap-ansi";
import chalk from "chalk";
import boxen from "boxen";
import{
  maxCharsPerLine as maxCharsPerLine
}from "./constants";
function callback(obj, Enumerable = " ") {
  return Enumerable.repeat(obj);
}
export{
  callback as indent
};
function format(initialValue, value, i) {
  const joinedClauses = Array.isArray(initialValue) ? initialValue : initialValue.split("\n");
  let result = "";
  if (joinedClauses.length) {
    const baseNormalized = callback(i === undefined ? value : i);
    result = baseNormalized + joinedClauses.shift();
  }
  if (joinedClauses.length) {
    const controlsCount = callback(value);
    result = result + ("\n" + joinedClauses.map((index) => {
      return controlsCount + index;
    }).join("\n"));
  }
  return result;
}
export{
  format as indentLines
};
function wrap(body, id, to, cmd = maxCharsPerLine()) {
  return format(wrapAnsi(body, cmd), id, to);
}
export{
  wrap as foldLines
};
function title(elem) {
  return elem.replace(/\[[^ ]+]/g, (value) => {
    return chalk.grey(value);
  }).replace(/<[^ ]+>/g, (correctId) => {
    return chalk.green(correctId);
  }).replace(/ (-[-\w,]+)/g, (relativeDestPath) => {
    return chalk.bold(relativeDestPath);
  }).replace(/`([^`]+)`/g, (canCreateDiscussions, commandPhrase) => {
    return chalk.bold.cyan(commandPhrase);
  });
}
export{
  title as colorize
};
function fn(text, highlight, data) {
  return boxen([highlight || chalk.white("Nuxt Message"), "", chalk.white(wrap(text, 0, 0, maxCharsPerLine()))].join("\n"), Object.assign({
    borderColor : "white",
    borderStyle : "round",
    padding : 1,
    margin : 1
  }, data)) + "\n";
}
export{
  fn as box
};
function getRippleName(callback, url) {
  return fn(callback, url || chalk.green("\u2714 Nuxt Success"), {
    borderColor : "green"
  });
}
export{
  getRippleName as successBox
};
function start(module, options) {
  return fn(module, options || chalk.yellow("\u26a0 Nuxt Warning"), {
    borderColor : "yellow"
  });
}
export{
  start as warningBox
};
function done(data, options) {
  return fn(data, options || chalk.red("\u2716 Nuxt Error"), {
    borderColor : "red"
  });
}
export{
  done as errorBox
};
function after_evaluate(output, callback) {
  return done(output, callback || chalk.red("\u2716 Nuxt Fatal Error"));
}
export{
  after_evaluate as fatalBox
};

