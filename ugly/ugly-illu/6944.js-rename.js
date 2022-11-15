const BLOCKED = ["ForStatement", "WhileStatement"];
export default ((e, t) => {
  var { jscodeshift: n } = t;
  var i = 0;
  const r = n(e.source).find(n.VariableDeclaration).forEach(a);
  function a(e) {
    var t = e;
    var n = true;
    while (t = t.parentPath) {
      if (~BLOCKED.indexOf(t.value.type)) {
        n = false;break;
      }
    }e.value.declarations.filter(o).forEach(e => {
      if (n === false) {
        console.log(`> Skipping removal of undefined init for "${e.id.name}": within ${t.value.type}`);
      } else {
        l(e);
      }
    });
  }function l(e) {
    e.init = null;i++;
  }function o(e) {
    var { init: t } = e;
    if (t) {
      if (t.type === "UnaryExpression" && t.operator === "void" && t.argument.value == 0) {
        return true;
      }if (t.type === "Identifier" && t.name === "undefined") {
        return true;
      }
    }return false;
  }return i ? r.toSource({ quote: "single" }) : null;
});
