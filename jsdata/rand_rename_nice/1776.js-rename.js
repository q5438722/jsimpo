'use strict';
const less = require("less");
const path = require("path");
module.exports = (template, appPath = path.resolve(__dirname, "../../src/core")) => {
  return new Promise((findLineAndColumn, saveNotifs) => {
    less.render(template, {
      paths : [appPath]
    }).then((result) => {
      findLineAndColumn(result.css);
    }).catch((notifications) => {
      saveNotifs(notifications);
      throw notifications;
    });
  });
};

