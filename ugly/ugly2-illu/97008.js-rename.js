const cluster = require("cluster");

const numCPUs = require("os").cpus() ? require("os").cpus().length : 1;

const path = require("path");

const EventEmitter2 = require("eventemitter2").EventEmitter2;

const fs = require("fs");

const vizion = require("vizion");

const debug = require("debug")("pm2:god");

const Utility = require("./Utility");

const cst = require("../constants.js");

const timesLimit = require("async/timesLimit");

const Configuration = require("./Configuration.js");

const semver = require("semver");

if (semver.lt(process.version, "10.0.0")) {
  cluster.setupMaster({ windowsHide: true, exec: path.resolve(path.dirname(module.filename), "ProcessContainerLegacy.js") });
} else {
  cluster.setupMaster({ windowsHide: true, exec: path.resolve(path.dirname(module.filename), "ProcessContainer.js") });
}const God = module.exports = { next_id: 0, clusters_db: {}, configuration: {}, started_at: Date.now(), system_infos_proc: null, system_infos: null, bus: new EventEmitter2({ wildcard: true, delimiter: ":", maxListeners: 1e3 }) };
Utility.overrideConsole(God.bus);require("./Event.js")(God);require("./God/Methods.js")(God);require("./God/ForkMode.js")(God);require("./God/ClusterMode.js")(God);require("./God/Reload")(God);require("./God/ActionMethods")(God);require("./Watcher")(God);God.init = function () {
  require("./Worker.js")(this);God.system_infos_proc = null;this.configuration = Configuration.getSync("pm2");setTimeout(function () {
    God.Worker.start();
  }, 500);
};God.writeExitSeparator = function (e, n, t) {
  try {
    var r = `[PM2][${new Date().toISOString()}] app exited`;
    if (n) r += `itself with exit code: ${n}`;if (t) r += `by an external signal: ${t}`;r += "\n";if (e.pm_out_log_path) fs.writeFileSync(e.pm_out_log_path, r);if (e.pm_err_log_path) fs.writeFileSync(e.pm_err_log_path, r);if (e.pm_log_path) fs.writeFileSync(e.pm_log_path, r);
  } catch (e) {}
};God.prepare = function e(n, t) {
  n.env.unique_id = Utility.generateUUID();if (typeof n.instances === "undefined") {
    n.vizion_running = false;if (n.env && n.env.vizion_running) n.env.vizion_running = false;if (n.status == cst.STOPPED_STATUS) {
      n.pm_id = God.getNewId();const r = { pm2_env: n, process: {} };
      God.clusters_db[n.pm_id] = r;return t(null, [God.clusters_db[n.pm_id]]);
    }return God.executeApp(n, function (e, n) {
      if (e) return t(e);God.notify("start", n, true);return t(null, [Utility.clone(n)]);
    });
  }n.instances = parseInt(n.instances);if (n.instances === 0) {
    n.instances = numCPUs;
  } else if (n.instances < 0) {
    n.instances += numCPUs;
  }if (n.instances <= 0) {
    n.instances = 1;
  }timesLimit(n.instances, 1, function (e, r) {
    n.vizion_running = false;if (n.env && n.env.vizion_running) {
      n.env.vizion_running = false;
    }God.injectVariables(n, function e(n, t) {
      if (n) return r(n);return God.executeApp(Utility.clone(t), function (e, n) {
        if (e) return r(e);God.notify("start", n, true);return r(null, Utility.clone(n));
      });
    });
  }, t);
};God.executeApp = function e(n, o) {
  const a = Utility.clone(n);
  Utility.extend(a, a.env);a["status"] = cst.LAUNCHING_STATUS;a["pm_uptime"] = Date.now();a["axm_actions"] = [];a["axm_monitor"] = {};a["axm_options"] = {};a["axm_dynamic"] = {};a["vizion_running"] = a.vizion_running !== undefined ? a.vizion_running : false;if (!a.created_at) a["created_at"] = Date.now();if (a.pm_id === undefined) {
    a["pm_id"] = God.getNewId();a["restart_time"] = 0;a["unstable_restarts"] = 0;a.pm_pid_path = a.pm_pid_path.replace(/-[0-9]+\.pid$|\.pid$/g, "-" + a.pm_id + ".pid");if (!a.merge_logs) {
      ["", "_out", "_err"].forEach(function (e) {
        const n = "pm" + e + "_log_path";
        a[n] && (a[n] = a[n].replace(/-[0-9]+\.log$|\.log$/g, "-" + a.pm_id + ".log"));
      });
    }if (a.watch) {
      God.watch.enable(a);
    }
  }God.registerCron(a);
  const _ = function e(n) {
    if (n.pm2_env.vizion !== false && n.pm2_env.vizion !== "false") God.finalizeProcedure(n);else God.notify("online", n);if (n.pm2_env.status !== cst.ERRORED_STATUS) n.pm2_env.status = cst.ONLINE_STATUS;console.log(`App [${n.pm2_env.name}:${n.pm2_env.pm_id}] online`);if (o) o(null, n);
  };

  if (a.exec_mode === "cluster_mode") {
    God.nodeApp(a, function e(n, r) {
      if (o && n) return o(n);if (n) return false;var t = God.clusters_db[r.pm2_env.pm_id];
      if (t) {
        t = null;God.clusters_db[r.pm2_env.pm_id] = null;
      }God.clusters_db[r.pm2_env.pm_id] = r;r.once("error", function (e) {
        console.error(e.stack || e);r.pm2_env.status = cst.ERRORED_STATUS;try {
          r.destroy && r.destroy();
        } catch (e) {
          console.error(e.stack || e);God.handleExit(r, cst.ERROR_EXIT);
        }
      });r.once("disconnect", function () {
        console.log("App name:%s id:%s disconnected", r.pm2_env.name, r.pm2_env.pm_id);
      });r.once("exit", function e(n, t) {
        God.handleExit(r, n || 0, t || "SIGINT");
      });return r.once("online", function () {
        if (!r.pm2_env.wait_ready) return _(r);const n = setTimeout(function () {
          God.bus.removeListener("process:msg", t);return _(r);
        }, r.pm2_env.listen_timeout || cst.GRACEFUL_LISTEN_TIMEOUT);

        const t = function (e) {
          if (e.raw === "ready" && e.process.name === r.pm2_env.name && e.process.pm_id === r.pm2_env.pm_id) {
            clearTimeout(n);God.bus.removeListener("process:msg", t);return _(r);
          }
        };

        God.bus.on("process:msg", t);
      });
    });
  } else {
    God.forkMode(a, function e(n, r) {
      if (o && n) return o(n);if (n) return false;var t = God.clusters_db[r.pm2_env.pm_id];
      if (t) t = null;God.clusters_db[a.pm_id] = r;r.once("error", function e(n) {
        console.error(n.stack || n);r.pm2_env.status = cst.ERRORED_STATUS;try {
          r.kill && r.kill();
        } catch (e) {
          console.error(e.stack || e);God.handleExit(r, cst.ERROR_EXIT);
        }
      });r.once("exit", function e(n, t) {
        if (r.connected === true) r.disconnect && r.disconnect();r._reloadLogs = null;return God.handleExit(r, n || 0, t);
      });if (!r.pm2_env.wait_ready) return _(r);const i = setTimeout(function () {
        God.bus.removeListener("process:msg", s);return _(r);
      }, r.pm2_env.listen_timeout || cst.GRACEFUL_LISTEN_TIMEOUT);

      const s = function (e) {
        if (e.raw === "ready" && e.process.name === r.pm2_env.name && e.process.pm_id === r.pm2_env.pm_id) {
          clearTimeout(i);God.bus.removeListener("process:msg", s);return _(r);
        }
      };

      God.bus.on("process:msg", s);
    });
  }return false;
};God.handleExit = function e(n, t, r) {
  console.log(`App [${n.pm2_env.name}:${n.pm2_env.pm_id}] exited with code [${t}] via signal [${r || "SIGINT"}]`);const i = this.clusters_db[n.pm2_env.pm_id];
  if (!i) {
    console.error("Process undefined ? with process id ", n.pm2_env.pm_id);return false;
  }const s = i.pm2_env.status == cst.STOPPING_STATUS || i.pm2_env.status == cst.STOPPED_STATUS || i.pm2_env.status == cst.ERRORED_STATUS || i.pm2_env.autorestart === false || i.pm2_env.autorestart === "false";
  var o = false;
  if (s) i.process.pid = 0;if (i.pm2_env.axm_actions) i.pm2_env.axm_actions = [];if (i.pm2_env.axm_monitor) i.pm2_env.axm_monitor = {};if (i.pm2_env.status != cst.ERRORED_STATUS && i.pm2_env.status != cst.STOPPING_STATUS) i.pm2_env.status = cst.STOPPED_STATUS;if (i.pm2_env.pm_id.toString().indexOf("_old_") !== 0) {
    try {
      fs.unlinkSync(i.pm2_env.pm_pid_path);
    } catch (e) {
      debug("Error when unlinking pid file", e);
    }
  }const a = typeof i.pm2_env.min_uptime !== "undefined" ? i.pm2_env.min_uptime : 1e3;

  const _ = typeof i.pm2_env.max_restarts !== "undefined" ? i.pm2_env.max_restarts : 16;

  if (Date.now() - i.pm2_env.created_at < a * _) {
    if (Date.now() - i.pm2_env.pm_uptime < a) {
      i.pm2_env.unstable_restarts += 1;
    }
  }if (i.pm2_env.unstable_restarts >= _) {
    i.pm2_env.status = cst.ERRORED_STATUS;i.process.pid = 0;console.log("Script %s had too many unstable restarts (%d). Stopped. %j", i.pm2_env.pm_exec_path, i.pm2_env.unstable_restarts, i.pm2_env.status);God.notify("restart overlimit", i);i.pm2_env.unstable_restarts = 0;i.pm2_env.created_at = null;o = true;
  }if (typeof t !== "undefined") i.pm2_env.exit_code = t;God.notify("exit", i);if (God.pm2_being_killed) {
    return false;
  }var p = 0;
  if (i.pm2_env.restart_delay !== undefined && !isNaN(parseInt(i.pm2_env.restart_delay))) {
    i.pm2_env.status = cst.WAITING_RESTART;p = parseInt(i.pm2_env.restart_delay);
  }if (i.pm2_env.exp_backoff_restart_delay !== undefined && !isNaN(parseInt(i.pm2_env.exp_backoff_restart_delay))) {
    i.pm2_env.status = cst.WAITING_RESTART;if (!i.pm2_env.prev_restart_delay) {
      i.pm2_env.prev_restart_delay = i.pm2_env.exp_backoff_restart_delay;p = i.pm2_env.exp_backoff_restart_delay;
    } else {
      i.pm2_env.prev_restart_delay = Math.floor(Math.min(15e3, i.pm2_env.prev_restart_delay * 1.5));p = i.pm2_env.prev_restart_delay;
    }console.log(`App [${n.pm2_env.name}:${n.pm2_env.pm_id}] will restart in ${p}ms`);
  }if (!s && false) {
    Object.defineProperty(i.pm2_env, "restart_task", { configurable: true, writable: true });i.pm2_env.restart_task = setTimeout(function () {
      i.pm2_env.restart_time += 1;God.executeApp(i.pm2_env);
    }, p);
  }return false;
};God.finalizeProcedure = function e(n) {
  var i = "";
  var s = n.pm2_env.cwd || path.dirname(n.pm2_env.pm_exec_path);
  const o = n.pm2_env.pm_id;
  n.pm2_env.version = Utility.findPackageVersion(n.pm2_env.pm_exec_path || n.pm2_env.cwd);if (n.pm2_env.vizion_running === true) {
    debug("Vizion is already running for proc id: %d, skipping this round", o);return God.notify("online", n);
  }n.pm2_env.vizion_running = true;vizion.analyze({ folder: s }, function e(n, t) {
    const r = God.clusters_db[o];
    if (n) debug(n.stack || n);if (!r || !r.pm2_env || r.pm2_env.status == cst.STOPPED_STATUS || r.pm2_env.status == cst.STOPPING_STATUS || r.pm2_env.status == cst.ERRORED_STATUS) {
      return console.error("Cancelling versioning data parsing");
    }r.pm2_env.vizion_running = false;if (!n) {
      r.pm2_env.versioning = t;r.pm2_env.versioning.repo_path = s;God.notify("online", r);
    } else if (n && s === i) {
      r.pm2_env.versioning = null;God.notify("online", r);
    } else {
      i = s;s = path.dirname(s);r.pm2_env.vizion_running = true;vizion.analyze({ folder: s }, e);
    }return false;
  });
};God.injectVariables = function e(n, t) {
  const r = process.env.PM2_PROCESS_INSTANCE_VAR || n.instance_var;
  const i = Object.keys(God.clusters_db).map(function (e) {
    return God.clusters_db[e];
  }).filter(function (e) {
    return e.pm2_env.name === n.name && typeof e.pm2_env[r] !== "undefined";
  }).map(function (e) {
    return e.pm2_env[r];
  }).sort(function (e, n) {
    return n - e;
  });
  var s = typeof i[0] === "undefined" ? 0 : i[0] + 1;
  for (var o = 0; o < i.length; o++) {
    if (i.indexOf(o) === -1) {
      s = o;break;
    }
  }n[r] = s;if (n.increment_var) {
    const a = Object.keys(God.clusters_db).map(function (e) {
      return God.clusters_db[e];
    }).filter(function (e) {
      return e.pm2_env.name === n.name && typeof e.pm2_env[n.increment_var] !== "undefined";
    }).map(function (e) {
      return e.pm2_env[n.increment_var];
    }).sort(function (e, n) {
      return n - e;
    })[0];

    const _ = n.env[n.increment_var] || 0;

    n[n.increment_var] = typeof a === "undefined" ? _ : a + 1;n.env[n.increment_var] = n[n.increment_var];
  }return t(null, n);
};God.init();
