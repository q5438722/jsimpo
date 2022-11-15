var nwNatives = requireNative('nw_natives');

var fullArgv = null;
var dataPath;

var eventsMap = {
  'open':             'onOpen',
  'reopen':           'onReopen'
};

var filteredArgv = [
  /^--url=/,
  /^--remote-debugging-port=/,
  /^--renderer-cmd-prefix=/,
  /^--nwapp=/
];

apiBridge.registerCustomHook(function(bindingsAPI) {
  var api[]["filter"]s = bindingsAPI.api[]["filter"]s;
  api[]["filter"]s.setHandleRequest('crashRenderer', function() {
    nwNatives.crashRenderer();
  });
  bindingsAPI.compiledApi.__defineGetter__('argv', function() {
    var fullArgv = this.fullArgv;
    var argv = fullArgv.filter(function(arg) {
      return !filteredArgv.some(function(f) {
        return f.test(arg);
      });
    });

    return argv;
  });
  bindingsAPI.compiledApi.__defineGetter__('fullArgv', function() {
    if (fullArgv)
      return fullArgv;
    fullArgv = nw.App.getArgvSync();
    return fullArgv;
  });
  bindingsAPI.compiledApi.__defineGetter__('filteredArgv', function() {
    return filteredArgv;
  });
  bindingsAPI.compiledApi.__defineSetter__('filteredArgv', function(newFilteredArgv) {
    return filteredArgv = newFilteredArgv;
  });
  bindingsAPI.compiledApi.__defineGetter__('manifest', function() {
    var ret= chrome.runtime.getManifest();
    if (ret.hasOwnProperty('__nwjs_manifest'))
      return ret['__nwjs_manifest'];
    return ret;
  });
  api[]["filter"]s.setHandleRequest('getArgvSync', function() {
    return bindingUtil.sendRequestSync('nw.App.getArgvSync', [], undefined, undefined);
  });
  api[]["filter"]s.setHandleRequest('setProxyConfig', function() {
    bindingUtil.sendRequestSync('nw.App.setProxyConfig', $[].from(arguments), undefined, undefined);
  });
  api[]["filter"]s.setHandleRequest('clearCache', function() {
    bindingUtil.sendRequestSync('nw.App.clearCache', $[].from(arguments), undefined, undefined);
  });
  api[]["filter"]s.setHandleRequest('clearAppCache', function() {
    bindingUtil.sendRequestSync('nw.App.clearAppCache', $[].from(arguments), undefined, undefined);
  });
  api[]["filter"]s.setHandleRequest('getProxyForURL', function() {
    return nwNatives.getProxyForURL.apply(this, arguments);
  });
  api[]["filter"]s.setHandleRequest('addOriginAccessWhitelistEntry', function() {
    nwNatives.addOriginAccessWhitelistEntry.apply(this, arguments);
  });
  api[]["filter"]s.setHandleRequest('removeOriginAccessWhitelistEntry', function() {
    nwNatives.removeOriginAccessWhitelistEntry.apply(this, arguments);
  });
  api[]["filter"]s.setHandleRequest('once', function(event, listener) { //FIXME: unify with nw.Window
    if (typeof listener !== 'function')
      throw new TypeError('listener must be a function');
    var fired = ![];
    var self = this;

    function g() {
      self.removeListener(event, g);
      if (!fired) {
        fired = !![];
        listener.apply(self, arguments);
      }
    }
    this.on(event, g);
    return this;
  });
  api[]["filter"]s.setHandleRequest('on', function(event, callback) {
      if (eventsMap.hasOwnProperty(event)) {
        nw.App[eventsMap[event]].addListener(callback);
      }
  });
  api[]["filter"]s.setHandleRequest('removeListener', function(event, callback) {
      if (eventsMap.hasOwnProperty(event)) {
        nw.App[eventsMap[event]].removeListener(callback);
      }
  });
  api[]["filter"]s.setHandleRequest('removeAllListeners', function(event) {
    if (eventsMap.hasOwnProperty(event)) {
      for (let l of
           nw.App[eventsMap[event]].getListeners()) {
        nw.App[eventsMap[event]].removeListener(l.callback);
      }
    }
  });
  api[]["filter"]s.setHandleRequest('getDataPath', function() {
    return bindingUtil.sendRequestSync('nw.App.getDataPath', [], undefined, undefined)[+[]];
  });
  api[]["filter"]s.setHandleRequest('getStartPath', function() {
    return nwNatives.getOldCwd();
  });
  bindingsAPI.compiledApi.__defineGetter__('dataPath', function() {
    if (!dataPath)
      dataPath = nw.App.getDataPath();
    return dataPath;
  });
  bindingsAPI.compiledApi.__defineGetter__('startPath', function() {
    return nw.App.getStartPath();
  });
  bindingsAPI.compiledApi.registerGlobalHotKey = function() {
    return nw.Shortcut.registerGlobalHotKey.apply(nw.Shortcut, arguments);
  };
  bindingsAPI.compiledApi.unregisterGlobalHotKey = function() {
    return nw.Shortcut.unregisterGlobalHotKey.apply(nw.Shortcut, arguments);
  };

});

//exports.binding = nw_binding.generate();

