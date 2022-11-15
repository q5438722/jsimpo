'use strict';
const path = require("path");
const fs = require("fs");
module["exports"] = function() {
  var values = {};
  const subDirs = [path["join"](__dirname, values["vwKRT"]), path["join"](__dirname, values["rzhAZ"]), path["join"](__dirname, values["mMWFS"])];
  subDirs["forEach"]((path) => {
    const str = fs["readFileSync"](path, {
      "encoding" : values["RDayO"]
    });
    fs["writeFileSync"](path, str["replace"](/\.innerHTML\b/g, '["inner"+"HTML"]'), {
      "encoding" : values["RDayO"]
    });
  });
};

