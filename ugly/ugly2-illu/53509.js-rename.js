"use strict";
module.exports = { meta: { type: "layout", docs: { description: "require or disallow Unicode byte order mark (BOM)", category: "Stylistic Issues", recommended: false, url: "https://eslint.org/docs/rules/unicode-bom" }, fixable: "whitespace", schema: [{ enum: ["always", "never"] }], messages: { expected: "Expected Unicode BOM (Byte Order Mark).", unexpected: "Unexpected Unicode BOM (Byte Order Mark)." } }, create(n) {
    return { Program: function e(r) {
        const t = n.getSourceCode();
        const o = { column: 0, line: 1 };
        const s = n.options[0] || "never";
        if (!t.hasBOM && s === "always") {
          n.report({ node: r, loc: o, messageId: "expected", fix(e) {
              return e.insertTextBeforeRange([0, 1], "\uFEFF");
            } });
        } else if (t.hasBOM && s === "never") {
          n.report({ node: r, loc: o, messageId: "unexpected", fix(e) {
              return e.removeRange([-1, 0]);
            } });
        }
      } };
  } };
