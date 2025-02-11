const target = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
const devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;
export default function devtoolPlugin(e) {
  if (!devtoolHook) return;e._devtoolHook = devtoolHook;devtoolHook.emit("vuex:init", e);devtoolHook.on("vuex:travel-to-state", o => {
    e.replaceState(o);
  });e.subscribe((o, e) => {
    devtoolHook.emit("vuex:mutation", o, e);
  }, { prepend: true });e.subscribeAction((o, e) => {
    devtoolHook.emit("vuex:action", o, e);
  }, { prepend: true });
}
