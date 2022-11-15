import { requireNativePlugin } from "./require-native-plugin";function wrapper(t) {
  t.$processed = true;t.postMessage = function (e) {
    plus.webview.postMessageToUniNView({ type: "UniAppSubNVue", data: e }, t.id);
  };var n = [];
  t.onMessage = function (e) {
    n.push(e);
  };t.$consumeMessage = function (t) {
    n.forEach(e => e(t));
  };if (!t.__uniapp_mask_id) {
    return;
  }const e = t.__uniapp_mask;
  const i = t.__uniapp_mask_id === "0" ? { setStyle({ mask: e }) {
      requireNativePlugin("uni-tabview").setMask({ color: e });
    } } : plus.webview.getWebviewById(t.__uniapp_mask_id);
  const s = t.show;
  const u = t.hide;
  const o = t.close;

  const r = function () {
    i.setStyle({ mask: e });
  };

  const a = function () {
    i.setStyle({ mask: "none" });
  };

  t.show = function (...e) {
    r();return s.apply(t, e);
  };t.hide = function (...e) {
    a();return u.apply(t, e);
  };t.close = function (...e) {
    a();n = [];return o.apply(t, e);
  };
}export function getSubNVueById(e) {
  const t = plus.webview.getWebviewById(e);
  if (t === null || t === undefined) {
    throw new Error("Unable to find SubNVue, id=" + e);
  }if (t && !t.$processed) {
    wrapper(t);
  }const n = t.setStyle;
  const i = plus.webview.getWebviewById(t.__uniapp_mask_id);
  t.setStyle = function (e) {
    if (e && e.mask) {
      i && i.setStyle({ mask: e.mask });delete e.mask;
    }n.call(this, e);
  };return t;
}export function getCurrentSubNVue() {
  return getSubNVueById(plus.webview.currentWebview().id);
}
