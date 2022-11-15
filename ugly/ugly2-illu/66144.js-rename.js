const colors = require("./colors");

module["exports"] = function () {
  const r = function (e, o) {
    String.prototype.__defineGetter__(e, o);
  };

  r("strip", function () {
    return colors.strip(this);
  });r("stripColors", function () {
    return colors.strip(this);
  });r("trap", function () {
    return colors.trap(this);
  });r("zalgo", function () {
    return colors.zalgo(this);
  });r("zebra", function () {
    return colors.zebra(this);
  });r("rainbow", function () {
    return colors.rainbow(this);
  });r("random", function () {
    return colors.random(this);
  });r("america", function () {
    return colors.america(this);
  });const e = Object.keys(colors.styles);
  e.forEach(function (e) {
    r(e, function () {
      return colors.stylize(this, e);
    });
  });function o(n) {
    const e = ["__defineGetter__", "__defineSetter__", "__lookupGetter__", "__lookupSetter__", "charAt", "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf", "charCodeAt", "indexOf", "lastIndexOf", "length", "localeCompare", "match", "repeat", "replace", "search", "slice", "split", "substring", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase", "trim", "trimLeft", "trimRight"];
    Object.keys(n).forEach(function (t) {
      if (e.indexOf(t) !== -1) {
        console.log(undefined + ("String.prototype" + t).magenta + " is probably something you don't want to override.  Ignoring style name");
      } else {
        if (typeof n[t] === "string") {
          colors[t] = colors[n[t]];r(t, function () {
            return colors[t](this);
          });
        } else {
          const o = function (e) {
            var o = e || this;
            // Unevaluable loop test expression
            for (var r = 0; r < n[t].length; r++) {
              o = colors[n[t][r]](o);
            }return o;
          };

          r(t, o);colors[t] = function (e) {
            return o(e);
          };
        }
      }
    });
  }colors.setTheme = function (e) {
    if (typeof e === "string") {
      console.log("colors.setTheme now only accepts an object, not a string. If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));");return;
    } else {
      const e = ["__defineGetter__", "__defineSetter__", "__lookupGetter__", "__lookupSetter__", "charAt", "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf", "charCodeAt", "indexOf", "lastIndexOf", "length", "localeCompare", "match", "repeat", "replace", "search", "slice", "split", "substring", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase", "trim", "trimLeft", "trimRight"];
      Object.keys(e).forEach(function (t) {
        if (e.indexOf(t) !== -1) {
          console.log(undefined + ("String.prototype" + t).magenta + " is probably something you don't want to override.  Ignoring style name");
        } else {
          if (typeof e[t] === "string") {
            colors[t] = colors[e[t]];r(t, function () {
              return colors[t](this);
            });
          } else {
            const o = function (e) {
              var o = e || this;
              // Unevaluable loop test expression
              for (var r = 0; r < e[t].length; r++) {
                o = colors[e[t][r]](o);
              }return o;
            };

            r(t, o);colors[t] = function (e) {
              return o(e);
            };
          }
        }
      });
    }
  };
};
