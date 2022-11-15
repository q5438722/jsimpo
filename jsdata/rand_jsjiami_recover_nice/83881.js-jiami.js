'use strict';
const uuidGen = Cc["@mozilla.org/uuid-generator;1"]["getService"](Ci["nsIUUIDGenerator"]);
const {
  Services : Services
} = ChromeUtils["import"]("resource://gre/modules/Services.jsm");
class Helper {
  ["addObserver"](mmCoreSplitViewBlock, mmaPushNotificationsComponent) {
    Services["obs"]["addObserver"](mmCoreSplitViewBlock, mmaPushNotificationsComponent);
    return () => {
      return Services["obs"]["removeObserver"](mmCoreSplitViewBlock, mmaPushNotificationsComponent);
    };
  }
  ["addMessageListener"](mActionBar, command, selected_group_obj_array) {
    mActionBar["addMessageListener"](command, selected_group_obj_array);
    return () => {
      return mActionBar["removeMessageListener"](command, selected_group_obj_array);
    };
  }
  ["addEventListener"](element, event, handler) {
    element["addEventListener"](event, handler);
    return () => {
      return element["removeEventListener"](event, handler);
    };
  }
  ["awaitEvent"](_window, resize) {
    return new Promise((displayChangeFn) => {
      if ("JAAuc" === "VHCoI") {
        if (!status) {
          return null;
        }
        for (const name of Object["keys"](Cr)) {
          if (Cr[name] === status) {
            return name;
          }
        }
        if ((status & 16711680) === 5898240) {
          if ((status & 65535) < Math["abs"](Ci["nsINSSErrorsService"]["NSS_SEC_ERROR_BASE"])) {
            const _0x45332b = Math["abs"](Ci["nsINSSErrorsService"]["NSS_SEC_ERROR_BASE"]) - (status & 65535);
            switch(_0x45332b) {
              case 11:
                return _0x28e400["dcSGT"];
              case 12:
                return "SEC_ERROR_REVOKED_CERTIFICATE";
              case 13:
                return "SEC_ERROR_UNKNOWN_ISSUER";
              case 20:
                return "SEC_ERROR_UNTRUSTED_ISSUER";
              case 21:
                return _0x28e400["DxNWf"];
              case 36:
                return _0x28e400["WQjfI"];
              case 90:
                return _0x28e400["UOQSZ"];
              case 176:
                return "SEC_ERROR_CERT_SIGNATURE_ALGORITHM_DISABLED";
              default:
                return _0x28e400["aqJLP"];
            }
          }
          const _0x4c6081 = Math["abs"](Ci["nsINSSErrorsService"]["NSS_SSL_ERROR_BASE"]) - (status & 65535);
          switch(_0x4c6081) {
            case 3:
              return _0x28e400["IxDyt"];
            case 4:
              return "SSL_ERROR_BAD_CERTIFICATE";
            case 8:
              return _0x28e400["Oegdv"];
            case 9:
              return _0x28e400["ZDkGV"];
            case 12:
              return _0x28e400["tvUMp"];
            default:
              return _0x28e400["cYAsp"];
          }
        }
        return "<unknown error>";
      } else {
        _window["addEventListener"](resize, function listener() {
          if (_0x28e400["iYSfb"] === _0x28e400["iYSfb"]) {
            _window["removeEventListener"](resize, listener);
            displayChangeFn();
          } else {
            Services["obs"]["addObserver"](handler, topic);
            return () => {
              return Services["obs"]["removeObserver"](handler, topic);
            };
          }
        });
      }
    });
  }
  ["on"](object, event, callback) {
    const type = (object, ...params) => {
      return callback(...params);
    };
    object["on"](event, type);
    return () => {
      return object["off"](event, type);
    };
  }
  ["addProgressListener"](mActionBar, command, selected_group_obj_array) {
    mActionBar["addProgressListener"](command, selected_group_obj_array);
    return () => {
      return mActionBar["removeProgressListener"](command);
    };
  }
  ["removeListeners"](PL$27) {
    for (const then of PL$27) {
      then["call"](null);
    }
    PL$27["splice"](0, PL$27["length"]);
  }
  ["generateId"]() {
    const result = uuidGen["generateUUID"]()["toString"]();
    return result["substring"](1, result["length"] - 1);
  }
  ["getLoadContext"](data) {
    let matchedItem = null;
    try {
      if (data["notificationCallbacks"]) {
        matchedItem = data["notificationCallbacks"]["getInterface"](Ci["nsILoadContext"]);
      }
    } catch (_0x3c2d27) {
    }
    try {
      if (!matchedItem && data["loadGroup"]) {
        matchedItem = data["loadGroup"]["notificationCallbacks"]["getInterface"](Ci["nsILoadContext"]);
      }
    } catch (_0x543a31) {
    }
    return matchedItem;
  }
  ["getNetworkErrorStatusText"](status) {
    if (!status) {
      return null;
    }
    for (const name of Object["keys"](Cr)) {
      if (_0x3cec2a["yCkRh"] === "SpTCY") {
        const result = uuidGen["generateUUID"]()["toString"]();
        return result["substring"](1, result["length"] - 1);
      } else {
        if (Cr[name] === status) {
          return name;
        }
      }
    }
    if ((status & 16711680) === 5898240) {
      if ((status & 65535) < Math["abs"](Ci["nsINSSErrorsService"]["NSS_SEC_ERROR_BASE"])) {
        const _0x338650 = Math["abs"](Ci["nsINSSErrorsService"]["NSS_SEC_ERROR_BASE"]) - (status & 65535);
        switch(_0x338650) {
          case 11:
            return _0x3cec2a["zSLyZ"];
          case 12:
            return _0x3cec2a["iDsmP"];
          case 13:
            return "SEC_ERROR_UNKNOWN_ISSUER";
          case 20:
            return _0x3cec2a["XGUsc"];
          case 21:
            return _0x3cec2a["HYXnm"];
          case 36:
            return "SEC_ERROR_CA_CERT_INVALID";
          case 90:
            return _0x3cec2a["wpdcy"];
          case 176:
            return _0x3cec2a["RkHys"];
          default:
            return _0x3cec2a["vvkiz"];
        }
      }
      const _0x15e85b = Math["abs"](Ci["nsINSSErrorsService"]["NSS_SSL_ERROR_BASE"]) - (status & 65535);
      switch(_0x15e85b) {
        case 3:
          return _0x3cec2a["EDmqH"];
        case 4:
          return _0x3cec2a["yIYSV"];
        case 8:
          return "SSL_ERROR_UNSUPPORTED_CERTIFICATE_TYPE";
        case 9:
          return _0x3cec2a["TyPud"];
        case 12:
          return "SSL_ERROR_BAD_CERT_DOMAIN";
        default:
          return "SSL_ERROR_UNKNOWN";
      }
    }
    return "<unknown error>";
  }
  ["browsingContextToFrameId"](sks) {
    if (!sks) {
      return undefined;
    }
    return "frame-" + sks["id"];
  }
}
var EXPORTED_SYMBOLS = ["Helper"];
this["Helper"] = Helper;

