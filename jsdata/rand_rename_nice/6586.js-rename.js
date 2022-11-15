'use strict';
(function(root, factory) {
  if (typeof exports === "object" && typeof require === "function") {
    module.exports = factory(require("backbone"));
  } else {
    if (typeof define === "function" && define.amd) {
      define(["backbone"], function(Backbone) {
        return factory(Backbone || root.Backbone);
      });
    } else {
      factory(Backbone);
    }
  }
})(this, function(Backbone) {
  function s4() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  function guid() {
    return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
  }
  function isObject(obj) {
    return obj === Object(obj);
  }
  function contains(range, value) {
    var j = range.length;
    for (; j--;) {
      if (range[j] === value) {
        return true;
      }
    }
    return false;
  }
  function extend(obj, extendWith) {
    var i;
    for (i in extendWith) {
      obj[i] = extendWith[i];
    }
    return obj;
  }
  function result(type, key) {
    if (type == null) {
      return void 0;
    }
    var output = type[key];
    return typeof output === "function" ? type[key]() : output;
  }
  Backbone.LocalStorage = window.Store = function(name, serializer) {
    if (!this.localStorage) {
      throw "Backbone.localStorage: Environment does not support localStorage.";
    }
    this.name = name;
    this.serializer = serializer || {
      serialize : function(value) {
        return isObject(value) ? JSON.stringify(value) : value;
      },
      deserialize : function(value) {
        return value && JSON.parse(value);
      }
    };
    var keys = this.localStorage().getItem(this.name);
    this.records = keys && keys.split(",") || [];
  };
  extend(Backbone.LocalStorage.prototype, {
    save : function() {
      this.localStorage().setItem(this.name, this.records.join(","));
    },
    create : function(model) {
      if (!model.id && model.id !== 0) {
        model.id = guid();
        model.set(model.idAttribute, model.id);
      }
      this.localStorage().setItem(this._itemName(model.id), this.serializer.serialize(model));
      this.records.push(model.id.toString());
      this.save();
      return this.find(model);
    },
    update : function(model) {
      this.localStorage().setItem(this._itemName(model.id), this.serializer.serialize(model));
      var i = model.id.toString();
      if (!contains(this.records, i)) {
        this.records.push(i);
        this.save();
      }
      return this.find(model);
    },
    find : function(model) {
      return this.serializer.deserialize(this.localStorage().getItem(this._itemName(model.id)));
    },
    findAll : function() {
      var result = [];
      var i = 0;
      var id;
      var embedResult;
      for (; i < this.records.length; i++) {
        id = this.records[i];
        embedResult = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
        if (embedResult != null) {
          result.push(embedResult);
        }
      }
      return result;
    },
    destroy : function(model) {
      this.localStorage().removeItem(this._itemName(model.id));
      var modelId = model.id.toString();
      var i = 0;
      var l;
      for (; i < this.records.length; i++) {
        if (this.records[i] === modelId) {
          this.records.splice(i, 1);
        }
      }
      this.save();
      return model;
    },
    localStorage : function() {
      return localStorage;
    },
    _clear : function() {
      var local = this.localStorage();
      var t = new RegExp("^" + this.name + "-");
      local.removeItem(this.name);
      var item;
      for (item in local) {
        if (t.test(item)) {
          local.removeItem(item);
        }
      }
      this.records.length = 0;
    },
    _storageSize : function() {
      return this.localStorage().length;
    },
    _itemName : function(id) {
      return this.name + "-" + id;
    }
  });
  Backbone.LocalStorage.sync = window.Store.sync = Backbone.localSync = function(method, model, options) {
    var store = result(model, "localStorage") || result(model.collection, "localStorage");
    var ret;
    var errorMessage;
    var defer = Backbone.$ ? Backbone.$.Deferred && Backbone.$.Deferred() : Backbone.Deferred && Backbone.Deferred();
    try {
      switch(method) {
        case "read":
          ret = model.id != undefined ? store.find(model) : store.findAll();
          break;
        case "create":
          ret = store.create(model);
          break;
        case "update":
          ret = store.update(model);
          break;
        case "delete":
          ret = store.destroy(model);
          break;
      }
    } catch (e) {
      if (e.code === 22 && store._storageSize() === 0) {
        errorMessage = "Private browsing is unsupported";
      } else {
        errorMessage = e.message;
      }
    }
    if (ret) {
      if (options && options.success) {
        if (Backbone.VERSION === "0.9.10") {
          options.success(model, ret, options);
        } else {
          options.success(ret);
        }
      }
      if (defer) {
        defer.resolve(ret);
      }
    } else {
      errorMessage = errorMessage ? errorMessage : "Record Not Found";
      if (options && options.error) {
        if (Backbone.VERSION === "0.9.10") {
          options.error(model, errorMessage, options);
        } else {
          options.error(errorMessage);
        }
      }
      if (defer) {
        defer.reject(errorMessage);
      }
    }
    if (options && options.complete) {
      options.complete(ret);
    }
    return defer && defer.promise();
  };
  Backbone.ajaxSync = Backbone.sync;
  Backbone.getSyncMethod = function(model, options) {
    var scrollerOptions = options && options.ajaxSync;
    if (!scrollerOptions && (result(model, "localStorage") || result(model.collection, "localStorage"))) {
      return Backbone.localSync;
    }
    return Backbone.ajaxSync;
  };
  Backbone.sync = function(method, model, options) {
    return Backbone.getSyncMethod(model, options).apply(this, [method, model, options]);
  };
  return Backbone.LocalStorage;
});

