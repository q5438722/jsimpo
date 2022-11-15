"use strict";
module.exports = { meta: { type: "suggestion", docs: { description: "require `Reflect` methods where applicable", category: "ECMAScript 6", recommended: false, url: "https://eslint.org/docs/rules/prefer-reflect" }, deprecated: true, replacedBy: [], schema: [{ type: "object", properties: { exceptions: { type: "array", items: { enum: ["apply", "call", "delete", "defineProperty", "getOwnPropertyDescriptor", "getPrototypeOf", "setPrototypeOf", "isExtensible", "getOwnPropertyNames", "preventExtensions"] }, uniqueItems: true } }, additionalProperties: false }], messages: { preferReflect: "Avoid using {{existing}}, instead use {{substitute}}." } }, create(o) {
    const p = { apply: "Function.prototype.apply", call: "Function.prototype.call", defineProperty: "Object.defineProperty", getOwnPropertyDescriptor: "Object.getOwnPropertyDescriptor", getPrototypeOf: "Object.getPrototypeOf", setPrototypeOf: "Object.setPrototypeOf", isExtensible: "Object.isExtensible", getOwnPropertyNames: "Object.getOwnPropertyNames", preventExtensions: "Object.preventExtensions" };
    const n = { apply: "Reflect.apply", call: "Reflect.apply", defineProperty: "Reflect.defineProperty", getOwnPropertyDescriptor: "Reflect.getOwnPropertyDescriptor", getPrototypeOf: "Reflect.getPrototypeOf", setPrototypeOf: "Reflect.setPrototypeOf", isExtensible: "Reflect.isExtensible", getOwnPropertyNames: "Reflect.getOwnPropertyNames", preventExtensions: "Reflect.preventExtensions" };
    const c = (o.options[0] || {}).exceptions || [];
    function i(e, t, r) {
      o.report({ node: e, messageId: "preferReflect", data: { existing: t, substitute: r } });
    }return { CallExpression(e) {
        const t = (e.callee.property || {}).name;
        const r = (e.callee.object || {}).name === "Reflect";
        const o = Object.prototype.hasOwnProperty.call(n, t);
        const s = c.indexOf(t) !== -1;
        if (o && !r && !s) {
          i(e, p[t], n[t]);
        }
      }, UnaryExpression(e) {
        const t = e.operator === "delete";
        const r = e.argument.type === "Identifier";
        const o = c.indexOf("delete") !== -1;
        if (t && !r && !o) {
          i(e, "the delete keyword", "Reflect.deleteProperty");
        }
      } };
  } };
