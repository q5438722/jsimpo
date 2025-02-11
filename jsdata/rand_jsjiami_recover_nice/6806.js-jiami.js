'use strict';
const fs = require("fs");
const path = require("path");
const pageComponents = fs["readdirSync"](path["join"](__dirname, "../../../app/components"));
const pageContainers = fs["readdirSync"](path["join"](__dirname, "../../../app/containers"));
const components = pageComponents["concat"](pageContainers);
function componentExists(newScope) {
  return components["indexOf"](newScope) >= 0;
}
module["exports"] = componentExists;

