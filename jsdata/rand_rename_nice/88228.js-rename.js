'use strict';
import{
  CssTools as CssTools
}from "./minifier";
Tinytest.add("minifier-css - CSS can be parsed properly into an AST", (assert) => {
  const o = CssTools.parseCss('body { color: "red"}');
  assert.equal(o.type, "root");
  assert.equal(o.nodes.length, 1);
  const e = o.nodes[0];
  assert.equal(e.type, "rule");
  assert.equal(e.selector, "body");
  assert.equal(e.nodes.length, 1);
  const r = e.nodes[0];
  assert.equal(r.type, "decl");
  assert.equal(r.prop, "color");
  assert.equal(r.value, '"red"');
});
Tinytest.add("minifier-css - CSS AST can be converted back into a string", (assert) => {
  const css = 'body { color: "red"}';
  const mergedCssAst = CssTools.parseCss(css);
  const container = CssTools.stringifyCss(mergedCssAst, {
    sourcemap : true
  });
  assert.equal(css, container.code);
  assert.isNotNull(container.map);
});
Tinytest.add("minifier-css - simple CSS minification", (test) => {
  const create = (part, isValid, callback) => {
    test.equal(CssTools.minifyCss(part)[0], isValid, callback);
  };
  create("a \t\n{ color: red } \n", "a{color:red}", "whitespace check");
  create("a \t\n{ color: red; margin: 1; } \n", "a{color:red;margin:1}", "only last one loses semicolon");
  create("a \t\n{ color: red;;; margin: 1;;; } \n", "a{color:red;margin:1}", "more semicolons than needed");
  create("a , p \t\n{ color: red; } \n", "a,p{color:red}", "multiple selectors");
  create("body {}", "", "removing empty rules");
  create("*.my-class { color: #fff; }", ".my-class{color:#fff}", "removing universal selector");
  create("p > *.my-class { color: #fff; }", "p>.my-class{color:#fff}", 'removing optional whitespace around ">" in selector');
  create("p +  *.my-class { color: #fff; }", "p+.my-class{color:#fff}", 'removing optional whitespace around "+" in selector');
  create("a {\n    font:12px 'Helvetica',\"Arial\",'Nautica';\n    background:url(\"/some/nice/picture.png\");\n}", "a{font:12px Helvetica,Arial,Nautica;background:url(/some/nice/picture.png)}", "removing quotes in font and url (if possible)");
  create("/* no comments */ a { color: red; }", "a{color:red}", "remove comments");
});
Tinytest.add("minifier-css - Multiple CSS AST's can be merged into a single CSS AST", (t) => {
  const css = '@import "custom.css"; body { color: "red"; }';
  const cssAsts = 'body { color: "blue"; }';
  const r = CssTools.parseCss(css, {
    from : "test.css"
  });
  const should = CssTools.parseCss(cssAsts, {
    from : "test2.css"
  });
  const ast = CssTools.mergeCssAsts([r, should]);
  const $ = CssTools.stringifyCss(ast, {
    sourcemap : true,
    inputSourcemaps : false
  });
  t.equal(ast.nodes.length, 3);
  t.equal($.map.sources.length, 2);
  t.equal($.map.sources[0], "test.css");
});
Tinytest.add("minifier-css - hoist imports from merged CSS AST's", (assert) => {
  const css = '@import "custom.css"; body { color: "red"; }';
  const cssAsts = '@import "other.css"; body { color: "blue"; }';
  const r = CssTools.parseCss(css, {
    from : "test.css"
  });
  const t = CssTools.parseCss(cssAsts, {
    from : "test2.css"
  });
  const ast = CssTools.mergeCssAsts([r, t]);
  const $ = CssTools.stringifyCss(ast, {
    sourcemap : true,
    inputSourcemaps : false
  });
  assert.equal(ast.nodes.length, 4);
  assert.equal(ast.nodes[0].name, "import");
  assert.equal(ast.nodes[1].name, "import");
  assert.equal(ast.nodes[2].type, "rule");
  assert.equal(ast.nodes[3].type, "rule");
  assert.equal($.map.sources.length, 2);
  assert.equal($.map.sources[0], "test.css");
});
Tinytest.add("minifier-css - hoist imports after comments from merged CSS AST's", (assert) => {
  const css = '@import "custom.css"; body { color: "red"; }';
  const cssAsts = '/* comment */ @import "other.css"; body { color: "blue"; }';
  const r = CssTools.parseCss(css, {
    from : "test.css"
  });
  const t = CssTools.parseCss(cssAsts, {
    from : "test2.css"
  });
  const ast = CssTools.mergeCssAsts([r, t]);
  const $ = CssTools.stringifyCss(ast, {
    sourcemap : true,
    inputSourcemaps : false
  });
  assert.equal(ast.nodes.length, 5);
  assert.equal(ast.nodes[0].name, "import");
  assert.equal(ast.nodes[1].type, "comment");
  assert.equal(ast.nodes[2].name, "import");
  assert.equal(ast.nodes[3].type, "rule");
  assert.equal(ast.nodes[4].type, "rule");
  assert.equal($.map.sources.length, 2);
  assert.equal($.map.sources[0], "test.css");
});

