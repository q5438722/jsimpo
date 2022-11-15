'use strict';
var requirejs;
var require;
var define;
(function(global$jscomp$0) {
  function isFunction$jscomp$0(it) {
    return ostring$jscomp$0.call(it) === "[object Function]";
  }
  function isArray$jscomp$0(it) {
    return ostring$jscomp$0.call(it) === "[object Array]";
  }
  function each$jscomp$0(ary, func) {
    if (ary) {
      var i;
      i = 0;
      for (; i < ary.length; i = i + 1) {
        if (ary[i] && func(ary[i], i, ary)) {
          break;
        }
      }
    }
  }
  function eachReverse$jscomp$0(ary, func) {
    if (ary) {
      var i;
      i = ary.length - 1;
      for (; i > -1; i = i - 1) {
        if (ary[i] && func(ary[i], i, ary)) {
          break;
        }
      }
    }
  }
  function hasProp$jscomp$0(obj, prop) {
    return hasOwn$jscomp$0.call(obj, prop);
  }
  function getOwn$jscomp$0(obj, prop) {
    return hasProp$jscomp$0(obj, prop) && obj[prop];
  }
  function eachProp$jscomp$0(obj, func) {
    var prop;
    for (prop in obj) {
      if (hasProp$jscomp$0(obj, prop)) {
        if (func(obj[prop], prop)) {
          break;
        }
      }
    }
  }
  function mixin$jscomp$0(target, source, force, deepStringMixin) {
    if (source) {
      eachProp$jscomp$0(source, function(value, prop) {
        if (force || !hasProp$jscomp$0(target, prop)) {
          if (deepStringMixin && typeof value === "object" && value && !isArray$jscomp$0(value) && !isFunction$jscomp$0(value) && !(value instanceof RegExp)) {
            if (!target[prop]) {
              target[prop] = {};
            }
            mixin$jscomp$0(target[prop], value, force, deepStringMixin);
          } else {
            target[prop] = value;
          }
        }
      });
    }
    return target;
  }
  function bind$jscomp$0(name, closure) {
    return function() {
      return closure.apply(name, arguments);
    };
  }
  function scripts$jscomp$0() {
    return document.getElementsByTagName("script");
  }
  function defaultOnError$jscomp$0(err) {
    throw err;
  }
  function getGlobal$jscomp$0(value) {
    if (!value) {
      return value;
    }
    var g = global$jscomp$0;
    each$jscomp$0(value.split("."), function(part) {
      g = g[part];
    });
    return g;
  }
  function makeError$jscomp$0(id, type, err, requireModules) {
    var e = new Error(type + "\nhttp://requirejs.org/docs/errors.html#" + id);
    e.requireType = id;
    e.requireModules = requireModules;
    if (err) {
      e.originalError = err;
    }
    return e;
  }
  function newContext$jscomp$0(contextName) {
    function trimDots(ary) {
      var i;
      var elem;
      i = 0;
      for (; i < ary.length; i++) {
        elem = ary[i];
        if (elem === ".") {
          ary.splice(i, 1);
          i = i - 1;
        } else {
          if (elem === "..") {
            if (i === 0 || i == 1 && ary[2] === ".." || ary[i - 1] === "..") {
              continue;
            } else {
              if (i > 0) {
                ary.splice(i - 1, 2);
                i = i - 2;
              }
            }
          }
        }
      }
    }
    function normalize(name, baseName, applyMap) {
      var pkgMain;
      var mapValue;
      var p;
      var n;
      var j;
      var nameSegment;
      var lastIndex;
      var foundMap;
      var a;
      var foundStarMap;
      var nl;
      var h;
      var baseParts = baseName && baseName.split("/");
      var map = config.map;
      var starMap = map && map["*"];
      if (name) {
        name = name.split("/");
        lastIndex = name.length - 1;
        if (config.nodeIdCompat && jsSuffixRegExp$jscomp$0.test(name[lastIndex])) {
          name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp$jscomp$0, "");
        }
        if (name[0].charAt(0) === "." && baseParts) {
          h = baseParts.slice(0, baseParts.length - 1);
          name = h.concat(name);
        }
        trimDots(name);
        name = name.join("/");
      }
      if (applyMap && map && (baseParts || starMap)) {
        p = name.split("/");
        n = p.length;
        e: for (; n > 0; n = n - 1) {
          nameSegment = p.slice(0, n).join("/");
          if (baseParts) {
            j = baseParts.length;
            for (; j > 0; j = j - 1) {
              mapValue = getOwn$jscomp$0(map, baseParts.slice(0, j).join("/"));
              if (mapValue) {
                mapValue = getOwn$jscomp$0(mapValue, nameSegment);
                if (mapValue) {
                  foundMap = mapValue;
                  a = n;
                  break e;
                }
              }
            }
          }
          if (!foundStarMap && starMap && getOwn$jscomp$0(starMap, nameSegment)) {
            foundStarMap = getOwn$jscomp$0(starMap, nameSegment);
            nl = n;
          }
        }
        if (!foundMap && foundStarMap) {
          foundMap = foundStarMap;
          a = nl;
        }
        if (foundMap) {
          p.splice(0, a, foundMap);
          name = p.join("/");
        }
      }
      pkgMain = getOwn$jscomp$0(config.pkgs, name);
      return pkgMain ? pkgMain : name;
    }
    function removeScript(name) {
      if (isBrowser$jscomp$0) {
        each$jscomp$0(scripts$jscomp$0(), function(scriptNode) {
          if (scriptNode.getAttribute("data-requiremodule") === name && scriptNode.getAttribute("data-requirecontext") === context.contextName) {
            scriptNode.parentNode.removeChild(scriptNode);
            return true;
          }
        });
      }
    }
    function hasPathFallback(id) {
      var pathConfig = getOwn$jscomp$0(config.paths, id);
      if (pathConfig && isArray$jscomp$0(pathConfig) && pathConfig.length > 1) {
        pathConfig.shift();
        context.require.undef(id);
        context.makeRequire(null, {
          skipMap : true
        })([id]);
        return true;
      }
    }
    function splitPrefix(name) {
      var peek;
      var index = name ? name.indexOf("!") : -1;
      if (index > -1) {
        peek = name.substring(0, index);
        name = name.substring(index + 1, name.length);
      }
      return [peek, name];
    }
    function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
      var url;
      var pluginModule;
      var suffix;
      var nameParts;
      var prefix = null;
      var parentName = parentModuleMap ? parentModuleMap.name : null;
      var originalName = name;
      var isDefine = true;
      var normalizedName = "";
      if (!name) {
        isDefine = false;
        name = "_@r" + (part = part + 1);
      }
      nameParts = splitPrefix(name);
      prefix = nameParts[0];
      name = nameParts[1];
      if (prefix) {
        prefix = normalize(prefix, parentName, applyMap);
        pluginModule = getOwn$jscomp$0(defined, prefix);
      }
      if (name) {
        if (prefix) {
          if (pluginModule && pluginModule.normalize) {
            normalizedName = pluginModule.normalize(name, function(moduleNamePlusExt) {
              return normalize(moduleNamePlusExt, parentName, applyMap);
            });
          } else {
            normalizedName = name.indexOf("!") === -1 ? normalize(name, parentName, applyMap) : name;
          }
        } else {
          normalizedName = normalize(name, parentName, applyMap);
          nameParts = splitPrefix(normalizedName);
          prefix = nameParts[0];
          normalizedName = nameParts[1];
          isNormalized = true;
          url = context.nameToUrl(normalizedName);
        }
      }
      suffix = prefix && !pluginModule && !isNormalized ? "_unnormalized" + (unnormalizedCounter = unnormalizedCounter + 1) : "";
      return {
        prefix : prefix,
        name : normalizedName,
        parentMap : parentModuleMap,
        unnormalized : !!suffix,
        url : url,
        originalName : originalName,
        isDefine : isDefine,
        id : (prefix ? prefix + "!" + normalizedName : normalizedName) + suffix
      };
    }
    function getModule(depMap) {
      var id = depMap.id;
      var mod = getOwn$jscomp$0(registry, id);
      if (!mod) {
        mod = registry[id] = new context.Module(depMap);
      }
      return mod;
    }
    function on(depMap, name, fn) {
      var id = depMap.id;
      var mod = getOwn$jscomp$0(registry, id);
      if (hasProp$jscomp$0(defined, id) && (!mod || mod.defineEmitComplete)) {
        if (name === "defined") {
          fn(defined[id]);
        }
      } else {
        mod = getModule(depMap);
        if (mod.error && name === "error") {
          fn(mod.error);
        } else {
          mod.on(name, fn);
        }
      }
    }
    function onError(err, errback) {
      var ids = err.requireModules;
      var r = false;
      if (errback) {
        errback(err);
      } else {
        each$jscomp$0(ids, function(id) {
          var mod = getOwn$jscomp$0(registry, id);
          if (mod) {
            mod.error = err;
            if (mod.events.error) {
              r = true;
              mod.emit("error", err);
            }
          }
        });
        if (!r) {
          req$jscomp$0.onError(err);
        }
      }
    }
    function takeGlobalQueue() {
      if (globalDefQueue$jscomp$0.length) {
        apsp$jscomp$0.apply(defQueue, [defQueue.length, 0].concat(globalDefQueue$jscomp$0));
        globalDefQueue$jscomp$0 = [];
      }
    }
    function cleanRegistry(id) {
      delete registry[id];
      delete enabledRegistry[id];
    }
    function breakCycle(mod, traced, processed) {
      var id = mod.map.id;
      if (mod.error) {
        mod.emit("error", mod.error);
      } else {
        traced[id] = true;
        each$jscomp$0(mod.depMaps, function(depMap, i) {
          var depId = depMap.id;
          var dep = getOwn$jscomp$0(registry, depId);
          if (dep && !mod.depMatched[i] && !processed[depId]) {
            if (getOwn$jscomp$0(traced, depId)) {
              mod.defineDep(i, defined[depId]);
              mod.check();
            } else {
              breakCycle(dep, traced, processed);
            }
          }
        });
        processed[id] = true;
      }
    }
    function checkLoaded() {
      var err;
      var usingPathFallback;
      var waitInterval = config.waitSeconds * 1E3;
      var expired = waitInterval && context.startTime + waitInterval < (new Date).getTime();
      var noLoads = [];
      var changes = [];
      var stillLoading = false;
      var f = true;
      if (t) {
        return;
      }
      t = true;
      eachProp$jscomp$0(enabledRegistry, function(data) {
        var map = data.map;
        var modId = map.id;
        if (!data.enabled) {
          return;
        }
        if (!map.isDefine) {
          changes.push(data);
        }
        if (!data.error) {
          if (!data.inited && expired) {
            if (hasPathFallback(modId)) {
              usingPathFallback = true;
              stillLoading = true;
            } else {
              noLoads.push(modId);
              removeScript(modId);
            }
          } else {
            if (!data.inited && data.fetched && map.isDefine) {
              stillLoading = true;
              if (!map.prefix) {
                return f = false;
              }
            }
          }
        }
      });
      if (expired && noLoads.length) {
        err = makeError$jscomp$0("timeout", "Load timeout for modules: " + noLoads, null, noLoads);
        err.contextName = context.contextName;
        return onError(err);
      }
      if (f) {
        each$jscomp$0(changes, function(dep) {
          breakCycle(dep, {}, {});
        });
      }
      if ((!expired || usingPathFallback) && stillLoading) {
        if ((isBrowser$jscomp$0 || isWebWorker$jscomp$0) && !checkLoadedTimeoutId) {
          checkLoadedTimeoutId = setTimeout(function() {
            checkLoadedTimeoutId = 0;
            checkLoaded();
          }, 50);
        }
      }
      t = false;
    }
    function callGetModule(args) {
      if (!hasProp$jscomp$0(defined, args[0])) {
        getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2]);
      }
    }
    function removeListener(node, callback, event, name) {
      if (node.detachEvent && !isOpera$jscomp$0) {
        if (name) {
          node.detachEvent(name, callback);
        }
      } else {
        node.removeEventListener(event, callback, false);
      }
    }
    function getScriptData(evt) {
      var node = evt.currentTarget || evt.srcElement;
      removeListener(node, context.onScriptLoad, "load", "onreadystatechange");
      removeListener(node, context.onScriptError, "error");
      return {
        node : node,
        id : node && node.getAttribute("data-requiremodule")
      };
    }
    function intakeDefines() {
      var args;
      takeGlobalQueue();
      for (; defQueue.length;) {
        args = defQueue.shift();
        if (args[0] === null) {
          return onError(makeError$jscomp$0("mismatch", "Mismatched anonymous define() module: " + args[args.length - 1]));
        } else {
          callGetModule(args);
        }
      }
    }
    var t;
    var Module;
    var context;
    var handlers;
    var checkLoadedTimeoutId;
    var config = {
      waitSeconds : 7,
      baseUrl : "./",
      paths : {},
      bundles : {},
      pkgs : {},
      shim : {},
      config : {}
    };
    var registry = {};
    var enabledRegistry = {};
    var undefEvents = {};
    var defQueue = [];
    var defined = {};
    var urlFetched = {};
    var bundlesMap = {};
    var part = 1;
    var unnormalizedCounter = 1;
    handlers = {
      require : function(mod) {
        if (mod.require) {
          return mod.require;
        } else {
          return mod.require = context.makeRequire(mod.map);
        }
      },
      exports : function(mod) {
        mod.usingExports = true;
        if (mod.map.isDefine) {
          if (mod.exports) {
            return defined[mod.map.id] = mod.exports;
          } else {
            return mod.exports = defined[mod.map.id] = {};
          }
        }
      },
      module : function(mod) {
        if (mod.module) {
          return mod.module;
        } else {
          return mod.module = {
            id : mod.map.id,
            uri : mod.map.url,
            config : function() {
              return getOwn$jscomp$0(config.config, mod.map.id) || {};
            },
            exports : mod.exports || (mod.exports = {})
          };
        }
      }
    };
    Module = function(map) {
      this.events = getOwn$jscomp$0(undefEvents, map.id) || {};
      this.map = map;
      this.shim = getOwn$jscomp$0(config.shim, map.id);
      this.depExports = [];
      this.depMaps = [];
      this.depMatched = [];
      this.pluginMaps = {};
      this.depCount = 0;
    };
    Module.prototype = {
      init : function(depMaps, factory, errback, options) {
        options = options || {};
        if (this.inited) {
          return;
        }
        this.factory = factory;
        if (errback) {
          this.on("error", errback);
        } else {
          if (this.events.error) {
            errback = bind$jscomp$0(this, function(newDataArr) {
              this.emit("error", newDataArr);
            });
          }
        }
        this.depMaps = depMaps && depMaps.slice(0);
        this.errback = errback;
        this.inited = true;
        this.ignore = options.ignore;
        if (options.enabled || this.enabled) {
          this.enable();
        } else {
          this.check();
        }
      },
      defineDep : function(i, depExports) {
        if (!this.depMatched[i]) {
          this.depMatched[i] = true;
          this.depCount -= 1;
          this.depExports[i] = depExports;
        }
      },
      fetch : function() {
        if (this.fetched) {
          return;
        }
        this.fetched = true;
        context.startTime = (new Date).getTime();
        var map = this.map;
        if (this.shim) {
          context.makeRequire(this.map, {
            enableBuildCallback : true
          })(this.shim.deps || [], bind$jscomp$0(this, function() {
            return map.prefix ? this.callPlugin() : this.load();
          }));
        } else {
          return map.prefix ? this.callPlugin() : this.load();
        }
      },
      load : function() {
        var url = this.map.url;
        if (!urlFetched[url]) {
          urlFetched[url] = true;
          context.load(this.map.id, url);
        }
      },
      check : function() {
        if (!this.enabled || this.enabling) {
          return;
        }
        var err;
        var module;
        var id = this.map.id;
        var depExports = this.depExports;
        var exports = this.exports;
        var factory = this.factory;
        if (!this.inited) {
          this.fetch();
        } else {
          if (this.error) {
            this.emit("error", this.error);
          } else {
            if (!this.defining) {
              this.defining = true;
              if (this.depCount < 1 && !this.defined) {
                if (isFunction$jscomp$0(factory)) {
                  if (this.events.error && this.map.isDefine || req$jscomp$0.onError !== defaultOnError$jscomp$0) {
                    try {
                      exports = context.execCb(id, factory, depExports, exports);
                    } catch (_error) {
                      err = _error;
                    }
                  } else {
                    exports = context.execCb(id, factory, depExports, exports);
                  }
                  if (this.map.isDefine && exports === undefined) {
                    module = this.module;
                    if (module) {
                      exports = module.exports;
                    } else {
                      if (this.usingExports) {
                        exports = this.exports;
                      }
                    }
                  }
                  if (err) {
                    err.requireMap = this.map;
                    err.requireModules = this.map.isDefine ? [this.map.id] : null;
                    err.requireType = this.map.isDefine ? "define" : "require";
                    return onError(this.error = err);
                  }
                } else {
                  exports = factory;
                }
                this.exports = exports;
                if (this.map.isDefine && !this.ignore) {
                  defined[id] = exports;
                  if (req$jscomp$0.onResourceLoad) {
                    req$jscomp$0.onResourceLoad(context, this.map, this.depMaps);
                  }
                }
                cleanRegistry(id);
                this.defined = true;
              }
              this.defining = false;
              if (this.defined && !this.defineEmitted) {
                this.defineEmitted = true;
                this.emit("defined", this.exports);
                this.defineEmitComplete = true;
              }
            }
          }
        }
      },
      callPlugin : function() {
        var map = this.map;
        var id = map.id;
        var pluginMap = makeModuleMap(map.prefix);
        this.depMaps.push(pluginMap);
        on(pluginMap, "defined", bind$jscomp$0(this, function(plugin) {
          var load;
          var normalizedMap;
          var normalizedMod;
          var bundleId = getOwn$jscomp$0(bundlesMap, this.map.id);
          var name = this.map.name;
          var parentName = this.map.parentMap ? this.map.parentMap.name : null;
          var localRequire = context.makeRequire(map.parentMap, {
            enableBuildCallback : true
          });
          if (this.map.unnormalized) {
            if (plugin.normalize) {
              name = plugin.normalize(name, function(moduleNamePlusExt) {
                return normalize(moduleNamePlusExt, parentName, true);
              }) || "";
            }
            normalizedMap = makeModuleMap(map.prefix + "!" + name, this.map.parentMap);
            on(normalizedMap, "defined", bind$jscomp$0(this, function(canCreateDiscussions) {
              this.init([], function() {
                return canCreateDiscussions;
              }, null, {
                enabled : true,
                ignore : true
              });
            }));
            normalizedMod = getOwn$jscomp$0(registry, normalizedMap.id);
            if (normalizedMod) {
              this.depMaps.push(normalizedMap);
              if (this.events.error) {
                normalizedMod.on("error", bind$jscomp$0(this, function(newDataArr) {
                  this.emit("error", newDataArr);
                }));
              }
              normalizedMod.enable();
            }
            return;
          }
          if (bundleId) {
            this.map.url = context.nameToUrl(bundleId);
            this.load();
            return;
          }
          load = bind$jscomp$0(this, function(canCreateDiscussions) {
            this.init([], function() {
              return canCreateDiscussions;
            }, null, {
              enabled : true
            });
          });
          load.error = bind$jscomp$0(this, function(err) {
            this.inited = true;
            this.error = err;
            err.requireModules = [id];
            eachProp$jscomp$0(registry, function(e) {
              if (e.map.id.indexOf(id + "_unnormalized") === 0) {
                cleanRegistry(e.map.id);
              }
            });
            onError(err);
          });
          load.fromText = bind$jscomp$0(this, function(e, tmp) {
            var moduleName = map.name;
            var moduleMap = makeModuleMap(moduleName);
            var hasInteractive = useInteractive$jscomp$0;
            if (tmp) {
              e = tmp;
            }
            if (hasInteractive) {
              useInteractive$jscomp$0 = false;
            }
            getModule(moduleMap);
            if (hasProp$jscomp$0(config.config, id)) {
              config.config[moduleName] = config.config[id];
            }
            try {
              req$jscomp$0.exec(e);
            } catch (e) {
              return onError(makeError$jscomp$0("fromtexteval", "fromText eval for " + id + " failed: " + e, e, [id]));
            }
            if (hasInteractive) {
              useInteractive$jscomp$0 = true;
            }
            this.depMaps.push(moduleMap);
            context.completeLoad(moduleName);
            localRequire([moduleName], load);
          });
          plugin.load(map.name, localRequire, load, config);
        }));
        context.enable(pluginMap, this);
        this.pluginMaps[pluginMap.id] = pluginMap;
      },
      enable : function() {
        enabledRegistry[this.map.id] = this;
        this.enabled = true;
        this.enabling = true;
        each$jscomp$0(this.depMaps, bind$jscomp$0(this, function(depMap, i) {
          var id;
          var mod;
          var handler;
          if (typeof depMap === "string") {
            depMap = makeModuleMap(depMap, this.map.isDefine ? this.map : this.map.parentMap, false, !this.skipMap);
            this.depMaps[i] = depMap;
            handler = getOwn$jscomp$0(handlers, depMap.id);
            if (handler) {
              this.depExports[i] = handler(this);
              return;
            }
            this.depCount += 1;
            on(depMap, "defined", bind$jscomp$0(this, function(depExports) {
              this.defineDep(i, depExports);
              this.check();
            }));
            if (this.errback) {
              on(depMap, "error", bind$jscomp$0(this, this.errback));
            } else {
              if (this.events.error) {
                on(depMap, "error", bind$jscomp$0(this, function(newDataArr) {
                  this.emit("error", newDataArr);
                }));
              }
            }
          }
          id = depMap.id;
          mod = registry[id];
          if (!hasProp$jscomp$0(handlers, id) && mod && !mod.enabled) {
            context.enable(depMap, this);
          }
        }));
        eachProp$jscomp$0(this.pluginMaps, bind$jscomp$0(this, function(pluginMap) {
          var mod = getOwn$jscomp$0(registry, pluginMap.id);
          if (mod && !mod.enabled) {
            context.enable(pluginMap, this);
          }
        }));
        this.enabling = false;
        this.check();
      },
      on : function(event, fn) {
        var callbacks = this.events[event];
        if (!callbacks) {
          callbacks = this.events[event] = [];
        }
        callbacks.push(fn);
      },
      emit : function(name, obj) {
        each$jscomp$0(this.events[name], function(finish) {
          finish(obj);
        });
        if (name === "error") {
          delete this.events[name];
        }
      }
    };
    context = {
      config : config,
      contextName : contextName,
      registry : registry,
      defined : defined,
      urlFetched : urlFetched,
      defQueue : defQueue,
      Module : Module,
      makeModuleMap : makeModuleMap,
      nextTick : req$jscomp$0.nextTick,
      onError : onError,
      configure : function(cfg) {
        if (cfg.baseUrl) {
          if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== "/") {
            cfg.baseUrl += "/";
          }
        }
        var shim = config.shim;
        var objs = {
          paths : true,
          bundles : true,
          config : true,
          map : true
        };
        eachProp$jscomp$0(cfg, function(value, prop) {
          if (objs[prop]) {
            if (!config[prop]) {
              config[prop] = {};
            }
            mixin$jscomp$0(config[prop], value, true, true);
          } else {
            config[prop] = value;
          }
        });
        if (cfg.bundles) {
          eachProp$jscomp$0(cfg.bundles, function(buttons, prop) {
            each$jscomp$0(buttons, function(v) {
              if (v !== prop) {
                bundlesMap[v] = prop;
              }
            });
          });
        }
        if (cfg.shim) {
          eachProp$jscomp$0(cfg.shim, function(value, key) {
            if (isArray$jscomp$0(value)) {
              value = {
                deps : value
              };
            }
            if ((value.exports || value.init) && !value.exportsFn) {
              value.exportsFn = context.makeShimExports(value);
            }
            shim[key] = value;
          });
          config.shim = shim;
        }
        if (cfg.packages) {
          each$jscomp$0(cfg.packages, function(pkgObj) {
            var location;
            var name;
            pkgObj = typeof pkgObj === "string" ? {
              name : pkgObj
            } : pkgObj;
            name = pkgObj.name;
            location = pkgObj.location;
            if (location) {
              config.paths[name] = pkgObj.location;
            }
            config.pkgs[name] = pkgObj.name + "/" + (pkgObj.main || "main").replace(currDirRegExp$jscomp$0, "").replace(jsSuffixRegExp$jscomp$0, "");
          });
        }
        eachProp$jscomp$0(registry, function(mod, id) {
          if (!mod.inited && !mod.map.unnormalized) {
            mod.map = makeModuleMap(id);
          }
        });
        if (cfg.deps || cfg.callback) {
          context.require(cfg.deps || [], cfg.callback);
        }
      },
      makeShimExports : function(value) {
        function fn() {
          var ret;
          if (value.init) {
            ret = value.init.apply(global$jscomp$0, arguments);
          }
          return ret || value.exports && getGlobal$jscomp$0(value.exports);
        }
        return fn;
      },
      makeRequire : function(relMap, options) {
        function localRequire(deps, callback, errback) {
          var id;
          var map;
          var requireMod;
          if (options.enableBuildCallback && callback && isFunction$jscomp$0(callback)) {
            callback.__requireJsBuild = true;
          }
          if (typeof deps === "string") {
            if (isFunction$jscomp$0(callback)) {
              return onError(makeError$jscomp$0("requireargs", "Invalid require call"), errback);
            }
            if (relMap && hasProp$jscomp$0(handlers, deps)) {
              return handlers[deps](registry[relMap.id]);
            }
            if (req$jscomp$0.get) {
              return req$jscomp$0.get(context, deps, relMap, localRequire);
            }
            map = makeModuleMap(deps, relMap, false, true);
            id = map.id;
            if (!hasProp$jscomp$0(defined, id)) {
              return onError(makeError$jscomp$0("notloaded", 'Module name "' + id + '" has not been loaded yet for context: ' + contextName + (relMap ? "" : ". Use require([])")));
            }
            return defined[id];
          }
          intakeDefines();
          context.nextTick(function() {
            intakeDefines();
            requireMod = getModule(makeModuleMap(null, relMap));
            requireMod.skipMap = options.skipMap;
            requireMod.init(deps, callback, errback, {
              enabled : true
            });
            checkLoaded();
          });
          return localRequire;
        }
        options = options || {};
        mixin$jscomp$0(localRequire, {
          isBrowser : isBrowser$jscomp$0,
          toUrl : function(moduleNamePlusExt) {
            var ext;
            var index = moduleNamePlusExt.lastIndexOf(".");
            var r = moduleNamePlusExt.split("/")[0];
            var isRelative = r === "." || r === "..";
            if (index !== -1 && (!isRelative || index > 1)) {
              ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length);
              moduleNamePlusExt = moduleNamePlusExt.substring(0, index);
            }
            return context.nameToUrl(normalize(moduleNamePlusExt, relMap && relMap.id, true), ext, true);
          },
          defined : function(id) {
            return hasProp$jscomp$0(defined, makeModuleMap(id, relMap, false, true).id);
          },
          specified : function(id) {
            id = makeModuleMap(id, relMap, false, true).id;
            return hasProp$jscomp$0(defined, id) || hasProp$jscomp$0(registry, id);
          }
        });
        if (!relMap) {
          localRequire.undef = function(id) {
            takeGlobalQueue();
            var map = makeModuleMap(id, relMap, true);
            var mod = getOwn$jscomp$0(registry, id);
            removeScript(id);
            delete defined[id];
            delete urlFetched[map.url];
            delete undefEvents[id];
            eachReverse$jscomp$0(defQueue, function(match, i) {
              if (match[0] === id) {
                defQueue.splice(i, 1);
              }
            });
            if (mod) {
              if (mod.events.defined) {
                undefEvents[id] = mod.events;
              }
              cleanRegistry(id);
            }
          };
        }
        return localRequire;
      },
      enable : function(depMap) {
        var dep = getOwn$jscomp$0(registry, depMap.id);
        if (dep) {
          getModule(depMap).enable();
        }
      },
      completeLoad : function(moduleName) {
        var i;
        var args;
        var mod;
        var shim = getOwn$jscomp$0(config.shim, moduleName) || {};
        var shExports = shim.exports;
        takeGlobalQueue();
        for (; defQueue.length;) {
          args = defQueue.shift();
          if (args[0] === null) {
            args[0] = moduleName;
            if (i) {
              break;
            }
            i = true;
          } else {
            if (args[0] === moduleName) {
              i = true;
            }
          }
          callGetModule(args);
        }
        mod = getOwn$jscomp$0(registry, moduleName);
        if (!i && !hasProp$jscomp$0(defined, moduleName) && mod && !mod.inited) {
          if (config.enforceDefine && (!shExports || !getGlobal$jscomp$0(shExports))) {
            if (hasPathFallback(moduleName)) {
              return;
            } else {
              return onError(makeError$jscomp$0("nodefine", "No define call for " + moduleName, null, [moduleName]));
            }
          } else {
            callGetModule([moduleName, shim.deps || [], shim.exportsFn]);
          }
        }
        checkLoaded();
      },
      nameToUrl : function(moduleName, ext, skipExt) {
        var paths;
        var syms;
        var i;
        var parentModule;
        var url;
        var parentPath;
        var bundleId;
        var pkgMain = getOwn$jscomp$0(config.pkgs, moduleName);
        if (pkgMain) {
          moduleName = pkgMain;
        }
        bundleId = getOwn$jscomp$0(bundlesMap, moduleName);
        if (bundleId) {
          return context.nameToUrl(bundleId, ext, skipExt);
        }
        if (req$jscomp$0.jsExtRegExp.test(moduleName)) {
          url = moduleName + (ext || "");
        } else {
          paths = config.paths;
          syms = moduleName.split("/");
          i = syms.length;
          for (; i > 0; i = i - 1) {
            parentModule = syms.slice(0, i).join("/");
            parentPath = getOwn$jscomp$0(paths, parentModule);
            if (parentPath) {
              if (isArray$jscomp$0(parentPath)) {
                parentPath = parentPath[0];
              }
              syms.splice(0, i, parentPath);
              break;
            }
          }
          url = syms.join("/");
          url = url + (ext || (/^data:|\?/.test(url) || skipExt ? "" : ".js"));
          url = (url.charAt(0) === "/" || url.match(/^[\w\+\.\-]+:/) ? "" : config.baseUrl) + url;
        }
        return config.urlArgs ? url + ((url.indexOf("?") === -1 ? "?" : "&") + config.urlArgs) : url;
      },
      load : function(selector, url) {
        req$jscomp$0.load(context, selector, url);
      },
      execCb : function(name, callback, args, exports) {
        return callback.apply(exports, args);
      },
      onScriptLoad : function(evt) {
        if (evt.type === "load" || readyRegExp$jscomp$0.test((evt.currentTarget || evt.srcElement).readyState)) {
          interactiveScript$jscomp$0 = null;
          var data = getScriptData(evt);
          context.completeLoad(data.id);
        }
      },
      onScriptError : function(evt) {
        var data = getScriptData(evt);
        if (!hasPathFallback(data.id)) {
          return onError(makeError$jscomp$0("scripterror", "Script error for: " + data.id, evt, [data.id]));
        }
      }
    };
    context.require = context.makeRequire();
    return context;
  }
  function getInteractiveScript$jscomp$0() {
    if (interactiveScript$jscomp$0 && interactiveScript$jscomp$0.readyState === "interactive") {
      return interactiveScript$jscomp$0;
    }
    eachReverse$jscomp$0(scripts$jscomp$0(), function(script) {
      if (script.readyState === "interactive") {
        return interactiveScript$jscomp$0 = script;
      }
    });
    return interactiveScript$jscomp$0;
  }
  var req$jscomp$0;
  var s$jscomp$2;
  var head$jscomp$0;
  var baseElement$jscomp$0;
  var dataMain$jscomp$0;
  var src$jscomp$2;
  var interactiveScript$jscomp$0;
  var currentlyAddingScript$jscomp$0;
  var mainScript$jscomp$0;
  var subPath$jscomp$0;
  var version$jscomp$6 = "2.1.16";
  var commentRegExp$jscomp$0 = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm;
  var cjsRequireRegExp$jscomp$0 = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g;
  var jsSuffixRegExp$jscomp$0 = /\.js$/;
  var currDirRegExp$jscomp$0 = /^\.\//;
  var op$jscomp$0 = Object.prototype;
  var ostring$jscomp$0 = op$jscomp$0.toString;
  var hasOwn$jscomp$0 = op$jscomp$0.hasOwnProperty;
  var ap$jscomp$0 = Array.prototype;
  var apsp$jscomp$0 = ap$jscomp$0.splice;
  var isBrowser$jscomp$0 = !!(typeof window !== "undefined" && typeof navigator !== "undefined" && window.document);
  var isWebWorker$jscomp$0 = !isBrowser$jscomp$0 && typeof importScripts !== "undefined";
  var readyRegExp$jscomp$0 = isBrowser$jscomp$0 && navigator.platform === "PLAYSTATION 3" ? /^complete$/ : /^(complete|loaded)$/;
  var defContextName$jscomp$0 = "_";
  var isOpera$jscomp$0 = typeof opera !== "undefined" && opera.toString() === "[object Opera]";
  var contexts$jscomp$0 = {};
  var cfg$jscomp$0 = {};
  var globalDefQueue$jscomp$0 = [];
  var useInteractive$jscomp$0 = false;
  if (typeof define !== "undefined") {
    return;
  }
  if (typeof requirejs !== "undefined") {
    if (isFunction$jscomp$0(requirejs)) {
      return;
    }
    cfg$jscomp$0 = requirejs;
    requirejs = undefined;
  }
  if (typeof require !== "undefined" && !isFunction$jscomp$0(require)) {
    cfg$jscomp$0 = require;
    require = undefined;
  }
  req$jscomp$0 = requirejs = function(deps, callback, errback, optional) {
    var context;
    var config;
    var contextName = defContextName$jscomp$0;
    if (!isArray$jscomp$0(deps) && typeof deps !== "string") {
      config = deps;
      if (isArray$jscomp$0(callback)) {
        deps = callback;
        callback = errback;
        errback = optional;
      } else {
        deps = [];
      }
    }
    if (config && config.context) {
      contextName = config.context;
    }
    context = getOwn$jscomp$0(contexts$jscomp$0, contextName);
    if (!context) {
      context = contexts$jscomp$0[contextName] = req$jscomp$0.s.newContext(contextName);
    }
    if (config) {
      context.configure(config);
    }
    return context.require(deps, callback, errback);
  };
  req$jscomp$0.config = function(names) {
    return req$jscomp$0(names);
  };
  req$jscomp$0.nextTick = typeof setTimeout !== "undefined" ? function(_nextEventFunc) {
    setTimeout(_nextEventFunc, 4);
  } : function(saveNotifs) {
    saveNotifs();
  };
  if (!require) {
    require = req$jscomp$0;
  }
  req$jscomp$0.version = version$jscomp$6;
  req$jscomp$0.jsExtRegExp = /^\/|:|\?|\.js$/;
  req$jscomp$0.isBrowser = isBrowser$jscomp$0;
  s$jscomp$2 = req$jscomp$0.s = {
    contexts : contexts$jscomp$0,
    newContext : newContext$jscomp$0
  };
  req$jscomp$0({});
  each$jscomp$0(["toUrl", "undef", "defined", "specified"], function(prop) {
    req$jscomp$0[prop] = function() {
      var ctx = contexts$jscomp$0[defContextName$jscomp$0];
      return ctx.require[prop].apply(ctx, arguments);
    };
  });
  if (isBrowser$jscomp$0) {
    head$jscomp$0 = s$jscomp$2.head = document.getElementsByTagName("head")[0];
    baseElement$jscomp$0 = document.getElementsByTagName("base")[0];
    if (baseElement$jscomp$0) {
      head$jscomp$0 = s$jscomp$2.head = baseElement$jscomp$0.parentNode;
    }
  }
  req$jscomp$0.onError = defaultOnError$jscomp$0;
  req$jscomp$0.createNode = function(config, url, num) {
    var node = config.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
    node.type = config.scriptType || "text/javascript";
    node.charset = "utf-8";
    node.async = true;
    return node;
  };
  req$jscomp$0.load = function(context, moduleName, url) {
    var type = context && context.config || {};
    var node;
    if (isBrowser$jscomp$0) {
      node = req$jscomp$0.createNode(type, moduleName, url);
      node.setAttribute("data-requirecontext", context.contextName);
      node.setAttribute("data-requiremodule", moduleName);
      if (node.attachEvent && !(node.attachEvent.toString && node.attachEvent.toString().indexOf("[native code") < 0) && !isOpera$jscomp$0) {
        useInteractive$jscomp$0 = true;
        node.attachEvent("onreadystatechange", context.onScriptLoad);
      } else {
        node.addEventListener("load", context.onScriptLoad, false);
        node.addEventListener("error", context.onScriptError, false);
      }
      node.src = url;
      currentlyAddingScript$jscomp$0 = node;
      if (baseElement$jscomp$0) {
        head$jscomp$0.insertBefore(node, baseElement$jscomp$0);
      } else {
        head$jscomp$0.appendChild(node);
      }
      currentlyAddingScript$jscomp$0 = null;
      return node;
    } else {
      if (isWebWorker$jscomp$0) {
        try {
          importScripts(url);
          context.completeLoad(moduleName);
        } catch (e) {
          context.onError(makeError$jscomp$0("importscripts", "importScripts failed for " + moduleName + " at " + url, e, [moduleName]));
        }
      }
    }
  };
  if (isBrowser$jscomp$0 && !cfg$jscomp$0.skipDataMain) {
    eachReverse$jscomp$0(scripts$jscomp$0(), function(script) {
      if (!head$jscomp$0) {
        head$jscomp$0 = script.parentNode;
      }
      dataMain$jscomp$0 = script.getAttribute("data-main");
      if (dataMain$jscomp$0) {
        mainScript$jscomp$0 = dataMain$jscomp$0;
        if (!cfg$jscomp$0.baseUrl) {
          src$jscomp$2 = mainScript$jscomp$0.split("/");
          mainScript$jscomp$0 = src$jscomp$2.pop();
          subPath$jscomp$0 = src$jscomp$2.length ? src$jscomp$2.join("/") + "/" : "./";
          cfg$jscomp$0.baseUrl = subPath$jscomp$0;
        }
        mainScript$jscomp$0 = mainScript$jscomp$0.replace(jsSuffixRegExp$jscomp$0, "");
        if (req$jscomp$0.jsExtRegExp.test(mainScript$jscomp$0)) {
          mainScript$jscomp$0 = dataMain$jscomp$0;
        }
        cfg$jscomp$0.deps = cfg$jscomp$0.deps ? cfg$jscomp$0.deps.concat(mainScript$jscomp$0) : [mainScript$jscomp$0];
        return true;
      }
    });
  }
  define = function(name, deps, callback) {
    var node;
    var context;
    if (typeof name !== "string") {
      callback = deps;
      deps = name;
      name = null;
    }
    if (!isArray$jscomp$0(deps)) {
      callback = deps;
      deps = null;
    }
    if (!deps && isFunction$jscomp$0(callback)) {
      deps = [];
      if (callback.length) {
        callback.toString().replace(commentRegExp$jscomp$0, "").replace(cjsRequireRegExp$jscomp$0, function(canCreateDiscussions, n) {
          deps.push(n);
        });
        deps = (callback.length === 1 ? ["require"] : ["require", "exports", "module"]).concat(deps);
      }
    }
    if (useInteractive$jscomp$0) {
      node = currentlyAddingScript$jscomp$0 || getInteractiveScript$jscomp$0();
      if (node) {
        if (!name) {
          name = node.getAttribute("data-requiremodule");
        }
        context = contexts$jscomp$0[node.getAttribute("data-requirecontext")];
      }
    }
    (context ? context.defQueue : globalDefQueue$jscomp$0).push([name, deps, callback]);
  };
  define.amd = {
    jQuery : true
  };
  req$jscomp$0.exec = function(text$jscomp$10) {
    return eval(text$jscomp$10);
  };
  req$jscomp$0(cfg$jscomp$0);
})(this);

