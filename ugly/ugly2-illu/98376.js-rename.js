export function test(e) {
  var { meta: t } = require("react-devtools-shared/src/hydration");

  const r = Object.prototype.hasOwnProperty.bind(e);
  return e !== null && typeof e === "object" && r(t.inspectable) && e[t.inspected] !== true;
}export function print(e, t, r) {
  var { meta: n } = require("react-devtools-shared/src/hydration");

  const o = Math.max(r(".").indexOf(".") - 2, 0);
  const s = " ".repeat(o);
  return "Dehydrated {\n" + s + "  \"preview_short\": " + e[n.preview_short] + ",\n" + s + "  \"preview_long\": " + e[n.preview_long] + ",\n" + s + "}";
}
