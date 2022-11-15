'use strict';
define(["./core", "./var/strundefined", "./var/rnotwhite", "./var/hasOwn", "./var/slice", "./event/support", "./data/var/data_priv", "./core/init", "./data/accepts", "./selector"], function(jQuery, strundefined, rnotwhite, hasOwn, prepare, support, data_priv) {
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (e) {
    }
  }
  var SIG_PATTERN = /^key/;
  var l = /^(?:mouse|pointer|contextmenu)|click/;
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
  var result = /^([^.]*)(?:\.(.+)|)$/;
  jQuery.event = {
    global : {},
    add : function(elem, arg, fn, n, selector) {
      var opts;
      var eventHandle;
      var tmp;
      var events;
      var i;
      var data;
      var special;
      var handlers;
      var type;
      var h;
      var origType;
      var elemData = data_priv.get(elem);
      if (!elemData) {
        return;
      }
      if (fn.handler) {
        opts = fn;
        fn = opts.handler;
        selector = opts.selector;
      }
      if (!fn.guid) {
        fn.guid = jQuery.guid++;
      }
      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function(e) {
          return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      }
      arg = (arg || "").match(rnotwhite) || [""];
      i = arg.length;
      for (; i--;) {
        tmp = result.exec(arg[i]) || [];
        type = origType = tmp[1];
        h = (tmp[2] || "").split(".").sort();
        if (!type) {
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        special = jQuery.event.special[type] || {};
        data = jQuery.extend({
          type : type,
          origType : origType,
          data : n,
          handler : fn,
          guid : fn.guid,
          selector : selector,
          needsContext : selector && jQuery.expr.match.needsContext.test(selector),
          namespace : h.join(".")
        }, opts);
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;
          if (!special.setup || special.setup.call(elem, n, h, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle, false);
            }
          }
        }
        if (special.add) {
          special.add.call(elem, data);
          if (!data.handler.guid) {
            data.handler.guid = fn.guid;
          }
        }
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, data);
        } else {
          handlers.push(data);
        }
        jQuery.event.global[type] = true;
      }
    },
    remove : function(elem, types, handler, selector, mappedTypes) {
      var j;
      var origCount;
      var tmp;
      var events;
      var t;
      var handleObj;
      var special;
      var handlers;
      var type;
      var h;
      var origType;
      var elemData = data_priv.hasData(elem) && data_priv.get(elem);
      if (!elemData || !(events = elemData.events)) {
        return;
      }
      types = (types || "").match(rnotwhite) || [""];
      t = types.length;
      for (; t--;) {
        tmp = result.exec(types[t]) || [];
        type = origType = tmp[1];
        h = (tmp[2] || "").split(".").sort();
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
        origCount = j = handlers.length;
        for (; j--;) {
          handleObj = handlers[j];
          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, h, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }
          delete events[type];
        }
      }
      if (jQuery.isEmptyObject(events)) {
        delete elemData.handle;
        data_priv.remove(elem, "events");
      }
    },
    trigger : function(event, data, elem, onlyHandlers) {
      var i;
      var cur;
      var tmp;
      var bubbleType;
      var ontype;
      var handle;
      var special;
      var eventPath = [elem || document];
      var type = hasOwn.call(event, "type") ? event.type : event;
      var d = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = tmp = elem = elem || document;
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }
      if (type.indexOf(".") >= 0) {
        d = type.split(".");
        type = d.shift();
        d.sort();
      }
      ontype = type.indexOf(":") < 0 && "on" + type;
      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = d.join(".");
      event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
      event.result = undefined;
      if (!event.target) {
        event.target = elem;
      }
      data = data == null ? [event] : jQuery.makeArray(data, [event]);
      special = jQuery.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      }
      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      }
      i = 0;
      for (; (cur = eventPath[i++]) && !event.isPropagationStopped();) {
        event.type = i > 1 ? bubbleType : special.bindType || type;
        handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle");
        if (handle) {
          handle.apply(cur, data);
        }
        handle = ontype && cur[ontype];
        if (handle && handle.apply && jQuery.acceptData(cur)) {
          event.result = handle.apply(cur, data);
          if (event.result === false) {
            event.preventDefault();
          }
        }
      }
      event.type = type;
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
          if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
            tmp = elem[ontype];
            if (tmp) {
              elem[ontype] = null;
            }
            jQuery.event.triggered = type;
            elem[type]();
            jQuery.event.triggered = undefined;
            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }
      return event.result;
    },
    dispatch : function(event) {
      event = jQuery.event.fix(event);
      var i;
      var j;
      var ret;
      var matched;
      var handleObj;
      var handlerQueue = [];
      var args = prepare.call(arguments);
      var handlers = (data_priv.get(this, "events") || {})[event.type] || [];
      var special = jQuery.event.special[event.type] || {};
      args[0] = event;
      event.delegateTarget = this;
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }
      handlerQueue = jQuery.event.handlers.call(this, event, handlers);
      i = 0;
      for (; (matched = handlerQueue[i++]) && !event.isPropagationStopped();) {
        event.currentTarget = matched.elem;
        j = 0;
        for (; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) {
          if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }
      return event.result;
    },
    handlers : function(event, handlers) {
      var i;
      var matches;
      var sel;
      var handleObj;
      var handlerQueue = [];
      var delegateCount = handlers.delegateCount;
      var cur = event.target;
      if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
        for (; cur !== this; cur = cur.parentNode || this) {
          if (cur.disabled !== true || event.type !== "click") {
            matches = [];
            i = 0;
            for (; i < delegateCount; i++) {
              handleObj = handlers[i];
              sel = handleObj.selector + " ";
              if (matches[sel] === undefined) {
                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
              }
              if (matches[sel]) {
                matches.push(handleObj);
              }
            }
            if (matches.length) {
              handlerQueue.push({
                elem : cur,
                handlers : matches
              });
            }
          }
        }
      }
      if (delegateCount < handlers.length) {
        handlerQueue.push({
          elem : this,
          handlers : handlers.slice(delegateCount)
        });
      }
      return handlerQueue;
    },
    props : "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks : {},
    keyHooks : {
      props : "char charCode key keyCode".split(" "),
      filter : function(event, original) {
        if (event.which == null) {
          event.which = original.charCode != null ? original.charCode : original.keyCode;
        }
        return event;
      }
    },
    mouseHooks : {
      props : "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter : function(event, original) {
        var eventDoc;
        var doc;
        var body;
        var button = original.button;
        if (event.pageX == null && original.clientX != null) {
          eventDoc = event.target.ownerDocument || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;
          event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
          event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        }
        if (!event.which && button !== undefined) {
          event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
        }
        return event;
      }
    },
    fix : function(event) {
      if (event[jQuery.expando]) {
        return event;
      }
      var i;
      var prop;
      var copy;
      var type = event.type;
      var originalEvent = event;
      var fixHook = this.fixHooks[type];
      if (!fixHook) {
        this.fixHooks[type] = fixHook = l.test(type) ? this.mouseHooks : SIG_PATTERN.test(type) ? this.keyHooks : {};
      }
      copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
      event = new jQuery.Event(originalEvent);
      i = copy.length;
      for (; i--;) {
        prop = copy[i];
        event[prop] = originalEvent[prop];
      }
      if (!event.target) {
        event.target = document;
      }
      if (event.target.nodeType === 3) {
        event.target = event.target.parentNode;
      }
      return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    },
    special : {
      load : {
        noBubble : true
      },
      focus : {
        trigger : function() {
          if (this !== safeActiveElement() && this.focus) {
            this.focus();
            return false;
          }
        },
        delegateType : "focusin"
      },
      blur : {
        trigger : function() {
          if (this === safeActiveElement() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType : "focusout"
      },
      click : {
        trigger : function() {
          if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
            this.click();
            return false;
          }
        },
        _default : function(event) {
          return jQuery.nodeName(event.target, "a");
        }
      },
      beforeunload : {
        postDispatch : function(event) {
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    },
    simulate : function(type, elem, event, bubble) {
      var e = jQuery.extend(new jQuery.Event, event, {
        type : type,
        isSimulated : true,
        originalEvent : {}
      });
      if (bubble) {
        jQuery.event.trigger(e, null, elem);
      } else {
        jQuery.event.dispatch.call(elem, e);
      }
      if (e.isDefaultPrevented()) {
        event.preventDefault();
      }
    }
  };
  jQuery.removeEvent = function(elem, type, fn) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, fn, false);
    }
  };
  jQuery.Event = function(src, props) {
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;
      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
    } else {
      this.type = src;
    }
    if (props) {
      jQuery.extend(this, props);
    }
    this.timeStamp = src && src.timeStamp || jQuery.now();
    this[jQuery.expando] = true;
  };
  jQuery.Event.prototype = {
    isDefaultPrevented : returnFalse,
    isPropagationStopped : returnFalse,
    isImmediatePropagationStopped : returnFalse,
    preventDefault : function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;
      if (e && e.preventDefault) {
        e.preventDefault();
      }
    },
    stopPropagation : function() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;
      if (e && e.stopPropagation) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation : function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;
      if (e && e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  jQuery.each({
    mouseenter : "mouseover",
    mouseleave : "mouseout",
    pointerenter : "pointerover",
    pointerleave : "pointerout"
  }, function(orig, fix) {
    jQuery.event.special[orig] = {
      delegateType : fix,
      bindType : fix,
      handle : function(event) {
        var result;
        var target = this;
        var related = event.relatedTarget;
        var handleObj = event.handleObj;
        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          result = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }
        return result;
      }
    };
  });
  if (!support.focusinBubbles) {
    jQuery.each({
      focus : "focusin",
      blur : "focusout"
    }, function(orig, fix) {
      var handler = function(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
      };
      jQuery.event.special[fix] = {
        setup : function() {
          var doc = this.ownerDocument || this;
          var attaches = data_priv.access(doc, fix);
          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }
          data_priv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown : function() {
          var doc = this.ownerDocument || this;
          var attaches = data_priv.access(doc, fix) - 1;
          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            data_priv.remove(doc, fix);
          } else {
            data_priv.access(doc, fix, attaches);
          }
        }
      };
    });
  }
  jQuery.fn.extend({
    on : function(d, t, s, callback, one) {
      var handler;
      var type;
      if (typeof d === "object") {
        if (typeof t !== "string") {
          s = s || t;
          t = undefined;
        }
        for (type in d) {
          this.on(type, t, s, d[type], one);
        }
        return this;
      }
      if (s == null && callback == null) {
        callback = t;
        s = t = undefined;
      } else {
        if (callback == null) {
          if (typeof t === "string") {
            callback = s;
            s = undefined;
          } else {
            callback = s;
            s = t;
            t = undefined;
          }
        }
      }
      if (callback === false) {
        callback = returnFalse;
      } else {
        if (!callback) {
          return this;
        }
      }
      if (one === 1) {
        handler = callback;
        callback = function(type) {
          jQuery().off(type);
          return handler.apply(this, arguments);
        };
        callback.guid = handler.guid || (handler.guid = jQuery.guid++);
      }
      return this.each(function() {
        jQuery.event.add(this, d, callback, s, t);
      });
    },
    one : function(n, fn, data, callback) {
      return this.on(n, fn, data, callback, 1);
    },
    off : function(types, selector, fn) {
      var handleObj;
      var type;
      if (types && types.preventDefault && types.handleObj) {
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }
      if (typeof types === "object") {
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === "function") {
        fn = selector;
        selector = undefined;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function() {
        jQuery.event.remove(this, types, fn, selector);
      });
    },
    trigger : function(event, data) {
      return this.each(function() {
        jQuery.event.trigger(event, data, this);
      });
    },
    triggerHandler : function(type, data) {
      var parent = this[0];
      if (parent) {
        return jQuery.event.trigger(type, data, parent, true);
      }
    }
  });
  return jQuery;
});

