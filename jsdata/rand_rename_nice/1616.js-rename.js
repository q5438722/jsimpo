'use strict';
const _ = require("underscore-plus");
const ChildProcess = require("child_process");
const {
  Emitter : Emitter
} = require("event-kit");
const path = require("path");
module.exports = class Builder {
  constructor({
    command : command,
    args : args,
    options : options = {},
    stdout : stdout,
    stderr : stderr,
    exit : exit,
    autoStart : autoStart = true
  } = {}) {
    this.emitter = new Emitter;
    this.command = command;
    this.args = args;
    this.options = options;
    this.stdout = stdout;
    this.stderr = stderr;
    this.exit = exit;
    if (autoStart === true) {
      this.start();
    }
    this.killed = false;
  }
  start() {
    if (this.started === true) {
      return;
    }
    this.started = true;
    if (process.platform === "win32" && this.options.shell === undefined) {
      this.spawnWithEscapedWindowsArgs(this.command, this.args, this.options);
    } else {
      this.spawn(this.command, this.args, this.options);
    }
    this.handleEvents(this.stdout, this.stderr, this.exit);
  }
  spawnWithEscapedWindowsArgs(path, object, properties) {
    let files = [];
    if (object) {
      files = object.filter((canCreateDiscussions) => {
        return canCreateDiscussions != null;
      }).map((obj) => {
        if (this.isExplorerCommand(path) && /^\/[a-zA-Z]+,.*$/.test(obj)) {
          return obj;
        } else {
          return `"${obj.toString().replace(/"/g, '\\"')}"`;
        }
      });
    }
    files.unshift(/\s|&|\^|\(|\)|\||#/.test(path) ? `"${path}"` : path);
    const options = _.clone(properties);
    options.windowsVerbatimArguments = true;
    this.spawn(this.getCmdPath(), ["/s", "/d", "/c", `"${files.join(" ")}"`], options);
  }
  onWillThrowError(fn) {
    return this.emitter.on("will-throw-error", fn);
  }
  bufferStream(file, callback, cb) {
    file.setEncoding("utf8");
    let j = "";
    file.on("data", (height) => {
      if (this.killed) {
        return;
      }
      let e = j.length;
      j = j + height;
      let headIndent = height.lastIndexOf("\n");
      if (headIndent !== -1) {
        let i = headIndent + e + 1;
        callback(j.substring(0, i));
        j = j.substring(i);
      }
    });
    file.on("close", () => {
      if (this.killed) {
        return;
      }
      if (j.length > 0) {
        callback(j);
      }
      cb();
    });
  }
  killOnWindows() {
    if (!this.process) {
      return;
    }
    const uncategorized = this.process.pid;
    const updateExe = "wmic";
    const args = ["process", "where", `(ParentProcessId=${uncategorized})`, "get", "processid"];
    let spawned;
    try {
      spawned = ChildProcess.spawn(updateExe, args);
    } catch (t) {
      this.killProcess();
      return;
    }
    spawned.on("error", () => {
    });
    let i = "";
    spawned.stdout.on("data", (iTickSize) => {
      i = i + iTickSize;
    });
    spawned.stdout.on("close", () => {
      for (let id of i.split(/\s+/)) {
        if (!/^\d{1,10}$/.test(id)) {
          continue;
        }
        id = parseInt(id, 10);
        if (!id || id === uncategorized) {
          continue;
        }
        try {
          process.kill(id);
        } catch (t) {
        }
      }
      this.killProcess();
    });
  }
  killProcess() {
    if (this.process) {
      this.process.kill();
    }
    this.process = null;
  }
  isExplorerCommand(type) {
    if (type === "explorer.exe" || type === "explorer") {
      return true;
    } else {
      if (process.env.SystemRoot) {
        return type === path.join(process.env.SystemRoot, "explorer.exe") || type === path.join(process.env.SystemRoot, "explorer");
      } else {
        return false;
      }
    }
  }
  getCmdPath() {
    if (process.env.comspec) {
      return process.env.comspec;
    } else {
      if (process.env.SystemRoot) {
        return path.join(process.env.SystemRoot, "System32", "cmd.exe");
      } else {
        return "cmd.exe";
      }
    }
  }
  kill() {
    if (this.killed) {
      return;
    }
    this.killed = true;
    if (process.platform === "win32") {
      this.killOnWindows();
    } else {
      this.killProcess();
    }
  }
  spawn(file, args, options) {
    try {
      this.process = ChildProcess.spawn(file, args, options);
    } catch (req) {
      process.nextTick(() => {
        return this.handleError(req);
      });
    }
  }
  handleEvents(context, event, process) {
    if (!this.process) {
      return;
    }
    const onclick = () => {
      if (this.killed) {
        return;
      }
      if (i && j && settings && typeof process === "function") {
        process(container);
      }
    };
    let i = true;
    let j = true;
    let settings = true;
    let container = 0;
    if (context) {
      i = false;
      this.bufferStream(this.process.stdout, context, () => {
        i = true;
        onclick();
      });
    }
    if (event) {
      j = false;
      this.bufferStream(this.process.stderr, event, () => {
        j = true;
        onclick();
      });
    }
    if (process) {
      settings = false;
      this.process.on("exit", (toolbar) => {
        container = toolbar;
        settings = true;
        onclick();
      });
    }
    this.process.on("error", (e) => {
      this.handleError(e);
    });
  }
  handleError(err) {
    let e = false;
    const writeError = () => {
      e = true;
    };
    this.emitter.emit("will-throw-error", {
      error : err,
      handle : writeError
    });
    if (err.code === "ENOENT" && err.syscall.indexOf("spawn") === 0) {
      err = new Error(`Failed to spawn command \`${this.command}\`. Make sure \`${this.command}\` is installed and on your PATH`, err.path);
      err.name = "BufferedProcessError";
    }
    if (!e) {
      throw err;
    }
  }
};

