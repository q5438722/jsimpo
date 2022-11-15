'use strict';
var EventEmitter = require("events").EventEmitter;
var spawn = require("child_process").spawn;
var readlink = require("graceful-readlink").readlinkSync;
var path = require("path");
var dirname = path.dirname;
var basename = path.basename;
var fs = require("fs");
exports = module.exports = new Command;
exports.Command = Command;
exports.Option = Option;
function Option(flags, description) {
  this.flags = flags;
  this.required = ~flags.indexOf("<");
  this.optional = ~flags.indexOf("[");
  this.bool = !~flags.indexOf("-no-");
  flags = flags.split(/[ ,|]+/);
  if (flags.length > 1 && !/^[[<]/.test(flags[1])) {
    this.short = flags.shift();
  }
  this.long = flags.shift();
  this.description = description || "";
}
Option.prototype.name = function() {
  return this.long.replace("--", "").replace("no-", "");
};
Option.prototype.is = function(arg) {
  return arg == this.short || arg == this.long;
};
function Command(name) {
  this.commands = [];
  this.options = [];
  this._execs = {};
  this._allowUnknownOption = false;
  this._args = [];
  this._name = name || "";
}
Command.prototype.__proto__ = EventEmitter.prototype;
Command.prototype.command = function(desc, name, options) {
  options = options || {};
  var args = desc.split(/ +/);
  var cmd = new Command(args.shift());
  if (name) {
    cmd.description(name);
    this.executables = true;
    this._execs[cmd._name] = true;
    if (options.isDefault) {
      this.defaultExecutable = cmd._name;
    }
  }
  cmd._noHelp = !!options.noHelp;
  this.commands.push(cmd);
  cmd.parseExpectedArgs(args);
  cmd.parent = this;
  if (name) {
    return this;
  }
  return cmd;
};
Command.prototype.arguments = function(text) {
  return this.parseExpectedArgs(text.split(/ +/));
};
Command.prototype.addImplicitHelpCommand = function() {
  this.command("help [cmd]", "display help for [cmd]");
};
Command.prototype.parseExpectedArgs = function(args) {
  if (!args.length) {
    return;
  }
  var self = this;
  args.forEach(function(headerPlusSegments) {
    var argDetails = {
      required : false,
      name : "",
      variadic : false
    };
    switch(headerPlusSegments[0]) {
      case "<":
        argDetails.required = true;
        argDetails.name = headerPlusSegments.slice(1, -1);
        break;
      case "[":
        argDetails.name = headerPlusSegments.slice(1, -1);
        break;
    }
    if (argDetails.name.length > 3 && argDetails.name.slice(-3) === "...") {
      argDetails.variadic = true;
      argDetails.name = argDetails.name.slice(0, -3);
    }
    if (argDetails.name) {
      self._args.push(argDetails);
    }
  });
  return this;
};
Command.prototype.action = function(render) {
  var self = this;
  var listener = function(args, unknown) {
    args = args || [];
    unknown = unknown || [];
    var parsed = self.parseOptions(unknown);
    outputHelpIfNecessary(self, parsed.unknown);
    if (parsed.unknown.length > 0) {
      self.unknownOption(parsed.unknown[0]);
    }
    if (parsed.args.length) {
      args = parsed.args.concat(args);
    }
    self._args.forEach(function(arg, i) {
      if (arg.required && null == args[i]) {
        self.missingArgument(arg.name);
      } else {
        if (arg.variadic) {
          if (i !== self._args.length - 1) {
            self.variadicArgNotLast(arg.name);
          }
          args[i] = args.splice(i);
        }
      }
    });
    if (self._args.length) {
      args[self._args.length] = self;
    } else {
      args.push(self);
    }
    render.apply(self, args);
  };
  var parent = this.parent || this;
  var name = parent === this ? "*" : this._name;
  parent.on(name, listener);
  if (this._alias) {
    parent.on(this._alias, listener);
  }
  return this;
};
Command.prototype.option = function(flags, description, fn, defaultValue) {
  var self = this;
  var option = new Option(flags, description);
  var oname = option.name();
  var name = camelcase(oname);
  if (typeof fn != "function") {
    if (fn instanceof RegExp) {
      var filter = fn;
      fn = function(k, t) {
        var r = filter.exec(k);
        return r ? r[0] : t;
      };
    } else {
      defaultValue = fn;
      fn = null;
    }
  }
  if (false == option.bool || option.optional || option.required) {
    if (false == option.bool) {
      defaultValue = true;
    }
    if (undefined !== defaultValue) {
      self[name] = defaultValue;
    }
  }
  this.options.push(option);
  this.on(oname, function(val) {
    if (null !== val && fn) {
      val = fn(val, undefined === self[name] ? defaultValue : self[name]);
    }
    if ("boolean" == typeof self[name] || "undefined" == typeof self[name]) {
      if (null == val) {
        self[name] = option.bool ? defaultValue || true : false;
      } else {
        self[name] = val;
      }
    } else {
      if (null !== val) {
        self[name] = val;
      }
    }
  });
  return this;
};
Command.prototype.allowUnknownOption = function(arg) {
  this._allowUnknownOption = arguments.length === 0 || arg;
  return this;
};
Command.prototype.parse = function(argv) {
  if (this.executables) {
    this.addImplicitHelpCommand();
  }
  this.rawArgs = argv;
  this._name = this._name || basename(argv[1], ".js");
  if (this.executables && argv.length < 3 && !this.defaultExecutable) {
    argv.push("--help");
  }
  var parsed = this.parseOptions(this.normalize(argv.slice(2)));
  var args = this.args = parsed.args;
  var result = this.parseArgs(this.args, parsed.unknown);
  var name = result.args[0];
  if (this._execs[name] && typeof this._execs[name] != "function") {
    return this.executeSubCommand(argv, args, parsed.unknown);
  } else {
    if (this.defaultExecutable) {
      args.unshift(name = this.defaultExecutable);
      return this.executeSubCommand(argv, args, parsed.unknown);
    }
  }
  return result;
};
Command.prototype.executeSubCommand = function(argv, args, unknown) {
  args = args.concat(unknown);
  if (!args.length) {
    this.help();
  }
  if ("help" == args[0] && 1 == args.length) {
    this.help();
  }
  if ("help" == args[0]) {
    args[0] = args[1];
    args[1] = "--help";
  }
  var f = argv[1];
  var bin = basename(f, ".js") + "-" + args[0];
  var baseDir;
  var link = readlink(f);
  if (link !== f && link.charAt(0) !== "/") {
    link = path.join(dirname(f), link);
  }
  baseDir = dirname(link);
  var localBin = path.join(baseDir, bin);
  var p = false;
  if (exists(localBin + ".js")) {
    bin = localBin + ".js";
    p = true;
  } else {
    if (exists(localBin)) {
      bin = localBin;
    }
  }
  args = args.slice(1);
  var proc;
  if (process.platform !== "win32") {
    if (p) {
      args.unshift(localBin);
      args = (process.execArgv || []).concat(args);
      proc = spawn("node", args, {
        stdio : "inherit",
        customFds : [0, 1, 2]
      });
    } else {
      proc = spawn(bin, args, {
        stdio : "inherit",
        customFds : [0, 1, 2]
      });
    }
  } else {
    args.unshift(localBin);
    proc = spawn(process.execPath, args, {
      stdio : "inherit"
    });
  }
  proc.on("close", process.exit.bind(process));
  proc.on("error", function(err) {
    if (err.code == "ENOENT") {
      console.error("\n  %s(1) does not exist, try --help\n", bin);
    } else {
      if (err.code == "EACCES") {
        console.error("\n  %s(1) not executable. try chmod or run with root\n", bin);
      }
    }
    process.exit(1);
  });
  this.runningCommand = proc;
};
Command.prototype.normalize = function(args) {
  var self = [];
  var arg;
  var lastOpt;
  var i;
  var index = 0;
  var arg_count = args.length;
  for (; index < arg_count; ++index) {
    arg = args[index];
    if (index > 0) {
      lastOpt = this.optionFor(args[index - 1]);
    }
    if (arg === "--") {
      self = self.concat(args.slice(index));
      break;
    } else {
      if (lastOpt && lastOpt.required) {
        self.push(arg);
      } else {
        if (arg.length > 1 && "-" == arg[0] && "-" != arg[1]) {
          arg.slice(1).split("").forEach(function(t) {
            self.push("-" + t);
          });
        } else {
          if (/^--/.test(arg) && ~(i = arg.indexOf("="))) {
            self.push(arg.slice(0, i), arg.slice(i + 1));
          } else {
            self.push(arg);
          }
        }
      }
    }
  }
  return self;
};
Command.prototype.parseArgs = function(args, unknown) {
  var event;
  if (args.length) {
    event = args[0];
    if (this.listeners(event).length) {
      this.emit(args.shift(), args, unknown);
    } else {
      this.emit("*", args);
    }
  } else {
    outputHelpIfNecessary(this, unknown);
    if (unknown.length > 0) {
      this.unknownOption(unknown[0]);
    }
  }
  return this;
};
Command.prototype.optionFor = function(arg) {
  var i = 0;
  var optionsLength = this.options.length;
  for (; i < optionsLength; ++i) {
    if (this.options[i].is(arg)) {
      return this.options[i];
    }
  }
};
Command.prototype.parseOptions = function(argv) {
  var appargs = [];
  var argc = argv.length;
  var index;
  var option;
  var arg;
  var unknownOptions = [];
  var i = 0;
  for (; i < argc; ++i) {
    arg = argv[i];
    if ("--" == arg) {
      index = true;
      continue;
    }
    if (index) {
      appargs.push(arg);
      continue;
    }
    option = this.optionFor(arg);
    if (option) {
      if (option.required) {
        arg = argv[++i];
        if (null == arg) {
          return this.optionMissingArgument(option);
        }
        this.emit(option.name(), arg);
      } else {
        if (option.optional) {
          arg = argv[i + 1];
          if (null == arg || "-" == arg[0] && "-" != arg) {
            arg = null;
          } else {
            ++i;
          }
          this.emit(option.name(), arg);
        } else {
          this.emit(option.name());
        }
      }
      continue;
    }
    if (arg.length > 1 && "-" == arg[0]) {
      unknownOptions.push(arg);
      if (argv[i + 1] && "-" != argv[i + 1][0]) {
        unknownOptions.push(argv[++i]);
      }
      continue;
    }
    appargs.push(arg);
  }
  return {
    args : appargs,
    unknown : unknownOptions
  };
};
Command.prototype.opts = function() {
  var result = {};
  var numberOfFrustums = this.options.length;
  var n = 0;
  for (; n < numberOfFrustums; n++) {
    var key = camelcase(this.options[n].name());
    result[key] = key === "version" ? this._version : this[key];
  }
  return result;
};
Command.prototype.missingArgument = function(name) {
  console.error();
  console.error("  error: missing required argument `%s'", name);
  console.error();
  process.exit(1);
};
Command.prototype.optionMissingArgument = function(option, flag) {
  console.error();
  if (flag) {
    console.error("  error: option `%s' argument missing, got `%s'", option.flags, flag);
  } else {
    console.error("  error: option `%s' argument missing", option.flags);
  }
  console.error();
  process.exit(1);
};
Command.prototype.unknownOption = function(flag) {
  if (this._allowUnknownOption) {
    return;
  }
  console.error();
  console.error("  error: unknown option `%s'", flag);
  console.error();
  process.exit(1);
};
Command.prototype.variadicArgNotLast = function(name) {
  console.error();
  console.error("  error: variadic arguments must be last `%s'", name);
  console.error();
  process.exit(1);
};
Command.prototype.version = function(str, flags) {
  if (0 == arguments.length) {
    return this._version;
  }
  this._version = str;
  flags = flags || "-V, --version";
  this.option(flags, "output the version number");
  this.on("version", function() {
    process.stdout.write(str + "\n");
    process.exit(0);
  });
  return this;
};
Command.prototype.description = function(value) {
  if (0 === arguments.length) {
    return this._description;
  }
  this._description = value;
  return this;
};
Command.prototype.alias = function(path) {
  if (0 == arguments.length) {
    return this._alias;
  }
  this._alias = path;
  return this;
};
Command.prototype.usage = function(str) {
  var drilldownLevelLabels = this._args.map(function(arg) {
    return humanReadableArgName(arg);
  });
  var usage = "[options]" + (this.commands.length ? " [command]" : "") + (this._args.length ? " " + drilldownLevelLabels.join(" ") : "");
  if (0 == arguments.length) {
    return this._usage || usage;
  }
  this._usage = str;
  return this;
};
Command.prototype.name = function() {
  return this._name;
};
Command.prototype.largestOptionLength = function() {
  return this.options.reduce(function(maxKeepAliveCount, ctag) {
    return Math.max(maxKeepAliveCount, ctag.flags.length);
  }, 0);
};
Command.prototype.optionHelp = function() {
  var width = this.largestOptionLength();
  return [pad("-h, --help", width) + "  " + "output usage information"].concat(this.options.map(function(option) {
    return pad(option.flags, width) + "  " + option.description;
  })).join("\n");
};
Command.prototype.commandHelp = function() {
  if (!this.commands.length) {
    return "";
  }
  var metapakModulesSequence = this.commands.filter(function(cmd) {
    return !cmd._noHelp;
  }).map(function(cmd) {
    var e = cmd._args.map(function(arg) {
      return humanReadableArgName(arg);
    }).join(" ");
    return [cmd._name + (cmd._alias ? "|" + cmd._alias : "") + (cmd.options.length ? " [options]" : "") + " " + e, cmd.description()];
  });
  var width = metapakModulesSequence.reduce(function(maxKeepAliveCount, sortedValueArrays) {
    return Math.max(maxKeepAliveCount, sortedValueArrays[0].length);
  }, 0);
  return ["", "  Commands:", "", metapakModulesSequence.map(function(params) {
    var desc = params[1] ? "  " + params[1] : "";
    return pad(params[0], width) + desc;
  }).join("\n").replace(/^/gm, "    "), ""].join("\n");
};
Command.prototype.helpInformation = function() {
  var args = [];
  if (this._description) {
    args = ["  " + this._description, ""];
  }
  var cmdName = this._name;
  if (this._alias) {
    cmdName = cmdName + "|" + this._alias;
  }
  var help = ["", "  Usage: " + cmdName + " " + this.usage(), ""];
  var cmds = [];
  var commandHelp = this.commandHelp();
  if (commandHelp) {
    cmds = [commandHelp];
  }
  var lines = ["  Options:", "", "" + this.optionHelp().replace(/^/gm, "    "), "", ""];
  return help.concat(cmds).concat(args).concat(lines).join("\n");
};
Command.prototype.outputHelp = function(cb) {
  if (!cb) {
    cb = function(passthru) {
      return passthru;
    };
  }
  process.stdout.write(cb(this.helpInformation()));
  this.emit("--help");
};
Command.prototype.help = function(cb) {
  this.outputHelp(cb);
  process.exit();
};
function camelcase(flag) {
  return flag.split("-").reduce(function(canCreateDiscussions, namePart) {
    return canCreateDiscussions + namePart[0].toUpperCase() + namePart.slice(1);
  });
}
function pad(n, width) {
  var n_rectangles = Math.max(0, width - n.length);
  return n + Array(n_rectangles + 1).join(" ");
}
function outputHelpIfNecessary(cmd, options) {
  options = options || [];
  var i = 0;
  for (; i < options.length; i++) {
    if (options[i] == "--help" || options[i] == "-h") {
      cmd.outputHelp();
      process.exit(0);
    }
  }
}
function humanReadableArgName(arg) {
  var e = arg.name + (arg.variadic === true ? "..." : "");
  return arg.required ? "<" + e + ">" : "[" + e + "]";
}
function exists(file) {
  try {
    if (fs.statSync(file).isFile()) {
      return true;
    }
  } catch (t) {
    return false;
  }
}
;
