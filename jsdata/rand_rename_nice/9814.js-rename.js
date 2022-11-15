'use strict';
module.exports = function render_invoice_row(selector) {
  const test_tweet = selector.template("import foo from './foo';");
  return {
    visitor : {
      Program(o) {
        o.node.body.unshift(test_tweet());
      }
    }
  };
};

