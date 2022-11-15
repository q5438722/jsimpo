require("./build/hook.js");const target = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
module.exports = { connect: function (_, t, { io: e, showToast: i, app: O } = {}) {
    target.__VUE_DEVTOOLS_HOST__ = _;target.__VUE_DEVTOOLS_PORT__ = t;if (e) target.__VUE_DEVTOOLS_SOCKET__ = e;if (i) target.__VUE_DEVTOOLS_TOAST__ = i;if (O) target.__VUE_ROOT_INSTANCES__ = Array.isArray(O) ? O : [O];require("./build/backend.js");
  }, init: _ => {
    const t = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    t.emit("init", _);
  } };
