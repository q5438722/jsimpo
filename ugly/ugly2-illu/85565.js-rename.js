const Class = require("../../../utils/Class");

const Events = require("../events");

const GetFastValue = require("../../../utils/object/GetFastValue");

const ProcessKeyCombo = require("./ProcessKeyCombo");

const ResetKeyCombo = require("./ResetKeyCombo");

const KeyCombo = new Class({ initialize: function e(t, s, a) {
    if (a === undefined) {
      a = {};
    }if (s.length < 2) {
      return false;
    }this.manager = t;this.enabled = true;this.keyCodes = [];for (var i = 0; i < s.length; i++) {
      const r = s[i];
      if (typeof r === "string") {
        this.keyCodes.push(r.toUpperCase().charCodeAt(0));
      } else if (typeof r === "number") {
        this.keyCodes.push(r);
      } else if (r.hasOwnProperty("keyCode")) {
        this.keyCodes.push(r.keyCode);
      }
    }this.current = this.keyCodes[0];this.index = 0;this.size = this.keyCodes.length;this.timeLastMatched = 0;this.matched = false;this.timeMatched = 0;this.resetOnWrongKey = GetFastValue(a, "resetOnWrongKey", true);this.maxKeyDelay = GetFastValue(a, "maxKeyDelay", 0);this.resetOnMatch = GetFastValue(a, "resetOnMatch", false);this.deleteOnMatch = GetFastValue(a, "deleteOnMatch", false);const n = this;

    const o = function (e) {
      if (n.matched || !n.enabled) {
        return;
      }const t = ProcessKeyCombo(e, n);
      if (t) {
        n.manager.emit(Events.COMBO_MATCH, n, e);if (n.resetOnMatch) {
          ResetKeyCombo(n);
        } else if (n.deleteOnMatch) {
          n.destroy();
        }
      }
    };

    this.onKeyDown = o;this.manager.on(Events.ANY_KEY_DOWN, this.onKeyDown);
  }, progress: { get: function () {
      return this.index / this.size;
    } }, destroy: function () {
    this.enabled = false;this.keyCodes = [];this.manager.off(Events.ANY_KEY_DOWN, this.onKeyDown);this.manager = null;
  } });
module.exports = KeyCombo;
