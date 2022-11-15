import { CssTools } from "./minifier";Tinytest.add("minifier-css - CSS can be parsed properly into an AST", s => {
  const o = CssTools.parseCss("body { color: \"red\"}");
  s.equal(o.type, "root");s.equal(o.nodes.length, 1);const e = o.nodes[0];
  s.equal(e.type, "rule");s.equal(e.selector, "body");s.equal(e.nodes.length, 1);const r = e.nodes[0];
  s.equal(r.type, "decl");s.equal(r.prop, "color");s.equal(r.value, "\"red\"");
});Tinytest.add("minifier-css - CSS AST can be converted back into a string", s => {
  const o = "body { color: \"red\"}";
  const e = CssTools.parseCss(o);
  const r = CssTools.stringifyCss(e, { sourcemap: true });
  s.equal(o, r.code);s.isNotNull(r.map);
});Tinytest.add("minifier-css - simple CSS minification", r => {
  const s = (s, o, e) => {
    r.equal(CssTools.minifyCss(s)[0], o, e);
  };

  s("a \t\n{ color: red } \n", "a{color:red}", "whitespace check");s("a \t\n{ color: red; margin: 1; } \n", "a{color:red;margin:1}", "only last one loses semicolon");s("a \t\n{ color: red;;; margin: 1;;; } \n", "a{color:red;margin:1}", "more semicolons than needed");s("a , p \t\n{ color: red; } \n", "a,p{color:red}", "multiple selectors");s("body {}", "", "removing empty rules");s("*.my-class { color: #fff; }", ".my-class{color:#fff}", "removing universal selector");s("p > *.my-class { color: #fff; }", "p>.my-class{color:#fff}", "removing optional whitespace around \">\" in selector");s("p +  *.my-class { color: #fff; }", "p+.my-class{color:#fff}", "removing optional whitespace around \"+\" in selector");s("a {\n    font:12px 'Helvetica',\"Arial\",'Nautica';\n    background:url(\"/some/nice/picture.png\");\n}", "a{font:12px Helvetica,Arial,Nautica;background:url(/some/nice/picture.png)}", "removing quotes in font and url (if possible)");s("/* no comments */ a { color: red; }", "a{color:red}", "remove comments");
});Tinytest.add("minifier-css - Multiple CSS AST's can be merged into a single CSS AST", s => {
  const o = "@import \"custom.css\"; body { color: \"red\"; }";
  const e = "body { color: \"blue\"; }";
  const r = CssTools.parseCss(o, { from: "test.css" });
  const t = CssTools.parseCss(e, { from: "test2.css" });
  const n = CssTools.mergeCssAsts([CssTools.parseCss(o, { from: "test.css" }), CssTools.parseCss(e, { from: "test2.css" })]);
  const l = CssTools.stringifyCss(n, { sourcemap: true, inputSourcemaps: false });
  s.equal(n.nodes.length, 3);s.equal(l.map.sources.length, 2);s.equal(l.map.sources[0], "test.css");
});Tinytest.add("minifier-css - hoist imports from merged CSS AST's", s => {
  const o = "@import \"custom.css\"; body { color: \"red\"; }";
  const e = "@import \"other.css\"; body { color: \"blue\"; }";
  const r = CssTools.parseCss(o, { from: "test.css" });
  const t = CssTools.parseCss(e, { from: "test2.css" });
  const n = CssTools.mergeCssAsts([CssTools.parseCss(o, { from: "test.css" }), CssTools.parseCss(e, { from: "test2.css" })]);
  const l = CssTools.stringifyCss(n, { sourcemap: true, inputSourcemaps: false });
  s.equal(n.nodes.length, 4);s.equal(n.nodes[0].name, "import");s.equal(n.nodes[1].name, "import");s.equal(n.nodes[2].type, "rule");s.equal(n.nodes[3].type, "rule");s.equal(l.map.sources.length, 2);s.equal(l.map.sources[0], "test.css");
});Tinytest.add("minifier-css - hoist imports after comments from merged CSS AST's", s => {
  const o = "@import \"custom.css\"; body { color: \"red\"; }";
  const e = "/* comment */ @import \"other.css\"; body { color: \"blue\"; }";
  const r = CssTools.parseCss(o, { from: "test.css" });
  const t = CssTools.parseCss(e, { from: "test2.css" });
  const n = CssTools.mergeCssAsts([CssTools.parseCss(o, { from: "test.css" }), CssTools.parseCss(e, { from: "test2.css" })]);
  const l = CssTools.stringifyCss(n, { sourcemap: true, inputSourcemaps: false });
  s.equal(n.nodes.length, 5);s.equal(n.nodes[0].name, "import");s.equal(n.nodes[1].type, "comment");s.equal(n.nodes[2].name, "import");s.equal(n.nodes[3].type, "rule");s.equal(n.nodes[4].type, "rule");s.equal(l.map.sources.length, 2);s.equal(l.map.sources[0], "test.css");
});
