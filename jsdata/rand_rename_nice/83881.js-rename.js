'use strict';
const uuidGen = Cc["@mozilla.org/uuid-generator;1"].getService(Ci.nsIUUIDGenerator);
const {
  Services : Services
} = ChromeUtils.import("resource://gre/modules/Services.jsm");
class Helper {
  addObserver(name, callback) {
    Services.obs.addObserver(name, callback);
    return () => {
      return Services.obs.removeObserver(name, callback);
    };
  }
  addMessageListener(global, callback, messageListener) {
    global.addMessageListener(callback, messageListener);
    return () => {
      return global.removeMessageListener(callback, messageListener);
    };
  }
  addEventListener(context, name, callback) {
    context.addEventListener(name, callback);
    return () => {
      return context.removeEventListener(name, callback);
    };
  }
  awaitEvent(source, eventType) {
    return new Promise((C) => {
      source.addEventListener(eventType, function e() {
        source.removeEventListener(eventType, e);
        C();
      });
    });
  }
  on(el, ev, callback) {
    const cancel = (data, ...params) => {
      return callback(...params);
    };
    el.on(ev, cancel);
    return () => {
      return el.off(ev, cancel);
    };
  }
  addProgressListener(browser, listener, callback) {
    browser.addProgressListener(listener, callback);
    return () => {
      return browser.removeProgressListener(listener);
    };
  }
  removeListeners(listeners) {
    for (const listener of listeners) {
      listener.call(null);
    }
    listeners.splice(0, listeners.length);
  }
  generateId() {
    const micropost = uuidGen.generateUUID().toString();
    return micropost.substring(1, micropost.length - 1);
  }
  getLoadContext(aChannel) {
    let r = null;
    try {
      if (aChannel.notificationCallbacks) {
        r = aChannel.notificationCallbacks.getInterface(Ci.nsILoadContext);
      }
    } catch (e) {
    }
    try {
      if (!r && aChannel.loadGroup) {
        r = aChannel.loadGroup.notificationCallbacks.getInterface(Ci.nsILoadContext);
      }
    } catch (e) {
    }
    return r;
  }
  getNetworkErrorStatusText(callback) {
    if (!callback) {
      return null;
    }
    for (const i of Object.keys(Cr)) {
      if (Cr[i] === callback) {
        return i;
      }
    }
    if ((callback & 16711680) === 5898240) {
      if ((callback & 65535) < Math.abs(Ci.nsINSSErrorsService.NSS_SEC_ERROR_BASE)) {
        const n = Math.abs(Ci.nsINSSErrorsService.NSS_SEC_ERROR_BASE) - (callback & 65535);
        switch(n) {
          case 11:
            return "SEC_ERROR_EXPIRED_CERTIFICATE";
          case 12:
            return "SEC_ERROR_REVOKED_CERTIFICATE";
          case 13:
            return "SEC_ERROR_UNKNOWN_ISSUER";
          case 20:
            return "SEC_ERROR_UNTRUSTED_ISSUER";
          case 21:
            return "SEC_ERROR_UNTRUSTED_CERT";
          case 36:
            return "SEC_ERROR_CA_CERT_INVALID";
          case 90:
            return "SEC_ERROR_INADEQUATE_KEY_USAGE";
          case 176:
            return "SEC_ERROR_CERT_SIGNATURE_ALGORITHM_DISABLED";
          default:
            return "SEC_ERROR_UNKNOWN";
        }
      }
      const t = Math.abs(Ci.nsINSSErrorsService.NSS_SSL_ERROR_BASE) - (callback & 65535);
      switch(t) {
        case 3:
          return "SSL_ERROR_NO_CERTIFICATE";
        case 4:
          return "SSL_ERROR_BAD_CERTIFICATE";
        case 8:
          return "SSL_ERROR_UNSUPPORTED_CERTIFICATE_TYPE";
        case 9:
          return "SSL_ERROR_UNSUPPORTED_VERSION";
        case 12:
          return "SSL_ERROR_BAD_CERT_DOMAIN";
        default:
          return "SSL_ERROR_UNKNOWN";
      }
    }
    return "<unknown error>";
  }
  browsingContextToFrameId(quality) {
    if (!quality) {
      return undefined;
    }
    return "frame-" + quality.id;
  }
}
var EXPORTED_SYMBOLS = ["Helper"];
this.Helper = Helper;

