'use strict';
import BasePlatform from "./platform.base";
import{
  _getParentNode as _getParentNode,
  getRelativePosition as getRelativePosition,
  supportsEventListenerOptions as supportsEventListenerOptions,
  readUsedSize as readUsedSize,
  getMaximumSize as getMaximumSize
}from "../helpers/helpers.dom";
import{
  throttled as throttled
}from "../helpers/helpers.extras";
import{
  isNullOrUndef as isNullOrUndef
}from "../helpers/helpers.core";
const name = "$chartjs";
const firefoxKeyCodeMap = {
  touchstart : "mousedown",
  touchmove : "mousemove",
  touchend : "mouseup",
  pointerenter : "mouseenter",
  pointerdown : "mousedown",
  pointermove : "mousemove",
  pointerup : "mouseup",
  pointerleave : "mouseout",
  pointerout : "mouseout"
};
const append = (value) => {
  return value === null || value === "";
};
function render(canvas, now) {
  const style = canvas.style;
  const NULL = canvas.getAttribute("height");
  const line = canvas.getAttribute("width");
  canvas[name] = {
    initial : {
      height : NULL,
      width : line,
      style : {
        display : style.display,
        height : style.height,
        width : style.width
      }
    }
  };
  style.display = style.display || "block";
  style.boxSizing = style.boxSizing || "border-box";
  if (append(line)) {
    const reflectionWidth = readUsedSize(canvas, "width");
    if (reflectionWidth !== undefined) {
      canvas.width = reflectionWidth;
    }
  }
  if (append(NULL)) {
    if (canvas.style.height === "") {
      canvas.height = canvas.width / (now || 2);
    } else {
      const awe_canvas_height = readUsedSize(canvas, "height");
      if (awe_canvas_height !== undefined) {
        canvas.height = awe_canvas_height;
      }
    }
  }
  return canvas;
}
const onWindowPaintHandler = supportsEventListenerOptions ? {
  passive : true
} : false;
function addListener(context, node, callback) {
  context.addEventListener(node, callback, onWindowPaintHandler);
}
function out(s, e, f) {
  s.canvas.removeEventListener(e, f, onWindowPaintHandler);
}
function drag(evt, zoom) {
  const GET_USER_PROFILE_SUCCESS = firefoxKeyCodeMap[evt.type] || evt.type;
  const {
    x : x,
    y : y
  } = getRelativePosition(evt, zoom);
  return {
    type : GET_USER_PROFILE_SUCCESS,
    chart : zoom,
    native : evt,
    x : x !== undefined ? x : null,
    y : y !== undefined ? y : null
  };
}
function init(module, data, sendResponseCallback) {
  const sraw = module.canvas;
  const observer = new MutationObserver((domMutations) => {
    for (const mutation of domMutations) {
      for (const araw of mutation.addedNodes) {
        if (araw === sraw || araw.contains(sraw)) {
          return sendResponseCallback();
        }
      }
    }
  });
  observer.observe(document, {
    childList : true,
    subtree : true
  });
  return observer;
}
function ready(options, data, callback) {
  const sraw = options.canvas;
  const observer = new MutationObserver((domMutations) => {
    for (const mutation of domMutations) {
      for (const araw of mutation.removedNodes) {
        if (araw === sraw || araw.contains(sraw)) {
          return callback();
        }
      }
    }
  });
  observer.observe(document, {
    childList : true,
    subtree : true
  });
  return observer;
}
const container = new Map;
let majority = 0;
function onWindowResize() {
  const n = window.devicePixelRatio;
  if (n === majority) {
    return;
  }
  majority = n;
  container.forEach((slideUp, x2) => {
    if (x2.currentDevicePixelRatio !== n) {
      slideUp();
    }
  });
}
function dumpStringAsIntArray(data, title) {
  if (!container.size) {
    window.addEventListener("resize", onWindowResize);
  }
  container.set(data, title);
}
function off(event) {
  container.delete(event);
  if (!container.size) {
    window.removeEventListener("resize", onWindowResize);
  }
}
function resize(buffer, callback, scale) {
  const reg = buffer.canvas;
  const img = reg && _getParentNode(reg);
  if (!img) {
    return;
  }
  const data = throttled((vel1out, val) => {
    const w = img.clientWidth;
    scale(vel1out, val);
    if (w < img.clientWidth) {
      scale();
    }
  }, window);
  const canvas = new ResizeObserver((canCreateDiscussions) => {
    const me = canCreateDiscussions[0];
    const dispatchLater = me.contentRect.width;
    const DELEGATOR_CALLBACKS_KEY = me.contentRect.height;
    if (dispatchLater === 0 && DELEGATOR_CALLBACKS_KEY === 0) {
      return;
    }
    data(dispatchLater, DELEGATOR_CALLBACKS_KEY);
  });
  canvas.observe(img);
  dumpStringAsIntArray(buffer, data);
  return canvas;
}
function detach(type, options, cb) {
  if (cb) {
    cb.disconnect();
  }
  if (options === "resize") {
    off(type);
  }
}
function main(arg, func, resolve) {
  const document = arg.canvas;
  const done = throttled((event) => {
    if (arg.ctx !== null) {
      resolve(drag(event, arg));
    }
  }, arg, (canCreateDiscussions) => {
    const shadow9 = canCreateDiscussions[0];
    return [shadow9, shadow9.offsetX, shadow9.offsetY];
  });
  addListener(document, func, done);
  return done;
}
export default class WidgetArgs extends BasePlatform {
  acquireContext(canvas, text) {
    const object2 = canvas && canvas.getContext && canvas.getContext("2d");
    if (object2 && object2.canvas === canvas) {
      render(canvas, text);
      return object2;
    }
    return null;
  }
  releaseContext(context) {
    const target = context.canvas;
    if (!target[name]) {
      return false;
    }
    const highlight = target[name].initial;
    ["height", "width"].forEach((lineNumber) => {
      const styleBackup = highlight[lineNumber];
      if (isNullOrUndef(styleBackup)) {
        target.removeAttribute(lineNumber);
      } else {
        target.setAttribute(lineNumber, styleBackup);
      }
    });
    const reply = highlight.style || {};
    Object.keys(reply).forEach((i) => {
      target.style[i] = reply[i];
    });
    target.width = target.width;
    delete target[name];
    return true;
  }
  addEventListener(level, id, eventType) {
    this.removeEventListener(level, id);
    const selectRect = level.$proxies || (level.$proxies = {});
    const options = {
      attach : init,
      detach : ready,
      resize : resize
    };
    const buildSelectMap = options[id] || main;
    selectRect[id] = buildSelectMap(level, id, eventType);
  }
  removeEventListener(element, eventType) {
    const settings = element.$proxies || (element.$proxies = {});
    const handler = settings[eventType];
    if (!handler) {
      return;
    }
    const finalCustomEvents = {
      attach : detach,
      detach : detach,
      resize : detach
    };
    const removeOriginalEventListener = finalCustomEvents[eventType] || out;
    removeOriginalEventListener(element, eventType, handler);
    settings[eventType] = undefined;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(extendType, extendConfig, extendState, targetMethod) {
    return getMaximumSize(extendType, extendConfig, extendState, targetMethod);
  }
  isAttached(id) {
    const s = _getParentNode(id);
    return !!(s && s.isConnected);
  }
}
;
