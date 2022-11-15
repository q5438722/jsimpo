'use strict';
const less = require("less");
const path = require("path");
module["exports"] = (value, appPath = path["resolve"](__dirname, "../../src/core")) => {
  return new Promise((encodeURIComponent, saveNotifs) => {
    less["render"](value, {
      "paths" : [appPath]
    })["then"]((dict) => {
      encodeURIComponent(dict["css"]);
    })["catch"]((notifications) => {
      saveNotifs(notifications);
      throw notifications;
    });
  });
};

