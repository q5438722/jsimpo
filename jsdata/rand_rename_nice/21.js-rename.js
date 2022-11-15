'use strict';
describe("Injector", () => {
  const i = ["<!DOCTYPE html>", '<html lang="en">', '<head id="head"><title>Test</title>', "</head>", '<body id="body">', "<div></div>", "<p></p>", "</body>", "</html>"].join("");
  const h = require("../../../lib/extend/injector");
  it("register() - entry is required", () => {
    const VisTypesRegistryProvider = new h;
    try {
      VisTypesRegistryProvider.register();
    } catch (oldModVal) {
      oldModVal.should.be.instanceOf(TypeError).property("message", "entry is required");
    }
  });
  it("register() - string", () => {
    const app = new h;
    const ContainerDebugAdapter = '<link rel="stylesheet" href="DPlayer.min.css" />';
    app.register("head_begin", ContainerDebugAdapter);
    app.register("head_end", ContainerDebugAdapter, "home");
    app.get("head_begin").should.contains(ContainerDebugAdapter);
    app.get("head_begin", "default").should.contains(ContainerDebugAdapter);
    app.get("head_end", "home").should.contains(ContainerDebugAdapter);
  });
  it("register() - function", () => {
    const remote = new h;
    const project = () => {
      return '<link rel="stylesheet" href="DPlayer.min.css" />';
    };
    remote.register("head_begin", project);
    remote.get("head_begin").should.contains(project());
  });
  it("register() - fallback when entry not exists", () => {
    const container = new h;
    const DeclarativeAuthorization = '<link rel="stylesheet" href="DPlayer.min.css" />';
    container.register("foo", DeclarativeAuthorization);
    container.get("head_end").should.contains(DeclarativeAuthorization);
  });
  it("list()", () => {
    const intentsApi = new h;
    intentsApi.register("body_begin", '<script src="DPlayer.min.js">\x3c/script>');
    intentsApi.list().body_begin.default.should.be.instanceOf(Set);
    [...intentsApi.list().body_begin.default].should.not.be.empty;
  });
  it("get()", () => {
    const app = new h;
    const ContainerDebugAdapter = '<script src="jquery.min.js">\x3c/script>';
    app.register("body_begin", ContainerDebugAdapter);
    app.register("body_end", ContainerDebugAdapter, "home");
    app.get("body_begin").should.be.instanceOf(Array);
    app.get("body_begin").should.contains(ContainerDebugAdapter);
    app.get("body_end", "home").should.be.instanceOf(Array);
    app.get("body_end", "home").should.contains(ContainerDebugAdapter);
    app.get("head_end").should.be.instanceOf(Array);
    app.get("head_end").should.eql([]);
  });
  it("getText()", () => {
    const sandbox = new h;
    const windowScrollEventHandler = '<script src="jquery.min.js">\x3c/script>';
    sandbox.register("head_end", windowScrollEventHandler);
    sandbox.register("body_end", windowScrollEventHandler, "home");
    sandbox.getText("body_end", "home").should.eql(windowScrollEventHandler);
    sandbox.getText("body_end").should.eql("");
  });
  it("getSize()", () => {
    const $ = new h;
    const windowScrollEventHandler = '<script src="jquery.min.js">\x3c/script>';
    $.register("head_end", windowScrollEventHandler);
    $.register("body_end", windowScrollEventHandler);
    $.register("body_end", windowScrollEventHandler, "home");
    $.getSize("head_begin").should.eql(0);
    $.getSize("head_end").should.eql(1);
    $.getSize("body_end").should.eql(2);
  });
  it("exec() - default", () => {
    const e = new h;
    const objOne = e.exec(i);
    objOne.should.contain('<head id="head"><title>Test</title></head>');
    objOne.should.contain('<body id="body"><div></div><p></p></body>');
  });
  it("exec() - default", () => {
    const e = new h;
    const objOne = e.exec(i);
    objOne.should.contain('<head id="head"><title>Test</title></head>');
    objOne.should.contain('<body id="body"><div></div><p></p></body>');
  });
  it("exec() - insert code", () => {
    const e = new h;
    e.register("head_begin", "\x3c!-- Powered by Hexo --\x3e");
    e.register("head_end", '<link href="prism.css" rel="stylesheet">');
    e.register("head_end", '<link href="prism-linenumber.css" rel="stylesheet">');
    e.register("body_begin", "<script>window.Prism = window.Prism || {}; window.Prism.manual = true;\x3c/script>");
    e.register("body_end", '<script src="prism.js">\x3c/script>');
    const objOne = e.exec(i);
    objOne.should.contain('<head id="head">\x3c!-- hexo injector head_begin start --\x3e\x3c!-- Powered by Hexo --\x3e\x3c!-- hexo injector head_begin end --\x3e');
    objOne.should.contain('\x3c!-- hexo injector head_end start --\x3e<link href="prism.css" rel="stylesheet"><link href="prism-linenumber.css" rel="stylesheet">\x3c!-- hexo injector head_end end --\x3e</head>');
    objOne.should.contain('<body id="body">\x3c!-- hexo injector body_begin start --\x3e<script>window.Prism = window.Prism || {}; window.Prism.manual = true;\x3c/script>\x3c!-- hexo injector body_begin end --\x3e');
    objOne.should.contain('\x3c!-- hexo injector body_end start --\x3e<script src="prism.js">\x3c/script>\x3c!-- hexo injector body_end end --\x3e</body>');
  });
  it("exec() - no duplicate insert", () => {
    const full_conversation_url = ["<!DOCTYPE html>", '<html lang="en">', '<head id="head">\x3c!-- hexo injector head_begin start --\x3e\x3c!-- hexo injector head_begin end --\x3e', "<title>Test</title>", '\x3c!-- hexo injector head_end start --\x3e<link href="prism.css" rel="stylesheet"></head>', '<body id="body">\x3c!-- hexo injector body_begin start --\x3e\x3c!-- hexo injector body_begin end --\x3e', "<div></div>", "<p></p>", '\x3c!-- hexo injector body_end start --\x3e<script src="prism.js">\x3c/script>\x3c!-- hexo injector body_end end --\x3e</body>', 
    "</html>"].join("");
    const exp = new h;
    exp.register("head_begin", "\x3c!-- Powered by Hexo --\x3e");
    exp.register("head_end", '<link href="prism.css" rel="stylesheet">');
    exp.register("head_end", '<link href="prism-linenumber.css" rel="stylesheet">');
    exp.register("body_begin", "<script>window.Prism = window.Prism || {}; window.Prism.manual = true;\x3c/script>");
    exp.register("body_end", '<script src="prism.js">\x3c/script>');
    const objOne = exp.exec(full_conversation_url);
    objOne.should.contain('<head id="head">\x3c!-- hexo injector head_begin start --\x3e\x3c!-- hexo injector head_begin end --\x3e');
    objOne.should.contain('\x3c!-- hexo injector head_end start --\x3e<link href="prism.css" rel="stylesheet"></head>');
    objOne.should.contain('<body id="body">\x3c!-- hexo injector body_begin start --\x3e\x3c!-- hexo injector body_begin end --\x3e');
    objOne.should.contain('\x3c!-- hexo injector body_end start --\x3e<script src="prism.js">\x3c/script>\x3c!-- hexo injector body_end end --\x3e</body>');
  });
  it("exec() - multi-line head & body", () => {
    const full_conversation_url = ["<!DOCTYPE html>", '<html lang="en">', '<head id="head"><title>Test</title>', "</head>", '<body id="body">', "<div></div>", "<p></p>", "</body>", "</html>"].join("\n");
    const exp = new h;
    exp.register("head_begin", "\x3c!-- Powered by Hexo --\x3e");
    exp.register("head_end", '<link href="prism.css" rel="stylesheet">');
    exp.register("head_end", '<link href="prism-linenumber.css" rel="stylesheet">');
    exp.register("body_begin", "<script>window.Prism = window.Prism || {}; window.Prism.manual = true;\x3c/script>");
    exp.register("body_end", '<script src="prism.js">\x3c/script>');
    const objOne = exp.exec(full_conversation_url);
    objOne.should.contain('<head id="head">\x3c!-- hexo injector head_begin start --\x3e\x3c!-- Powered by Hexo --\x3e\x3c!-- hexo injector head_begin end --\x3e');
    objOne.should.contain('\x3c!-- hexo injector head_end start --\x3e<link href="prism.css" rel="stylesheet"><link href="prism-linenumber.css" rel="stylesheet">\x3c!-- hexo injector head_end end --\x3e</head>');
    objOne.should.contain('<body id="body">\x3c!-- hexo injector body_begin start --\x3e<script>window.Prism = window.Prism || {}; window.Prism.manual = true;\x3c/script>\x3c!-- hexo injector body_begin end --\x3e');
    objOne.should.contain('\x3c!-- hexo injector body_end start --\x3e<script src="prism.js">\x3c/script>\x3c!-- hexo injector body_end end --\x3e</body>');
  });
  it("exec() - inject on specific page", () => {
    const e = ["<!DOCTYPE html>", '<html lang="en">', '<head id="head"><title>Test</title>', "</head>", '<body id="body">', "<div></div>", "<p></p>", "</body>", "</html>"].join("\n");
    const self = new h;
    self.register("head_begin", "\x3c!-- head_begin_default --\x3e");
    self.register("head_begin", "\x3c!-- head_begin_home --\x3e", "home");
    self.register("head_begin", "\x3c!-- head_begin_post --\x3e", "post");
    self.register("head_begin", "\x3c!-- head_begin_page --\x3e", "page");
    self.register("head_begin", "\x3c!-- head_begin_archive --\x3e", "archive");
    self.register("head_begin", "\x3c!-- head_begin_category --\x3e", "category");
    self.register("head_begin", "\x3c!-- head_begin_tag --\x3e", "tag");
    const pkgInst = self.exec(e, {
      page : {}
    });
    const objOne = self.exec(e, {
      page : {
        __index : true
      }
    });
    const objTwo = self.exec(e, {
      page : {
        __post : true
      }
    });
    const obj = self.exec(e, {
      page : {
        __page : true
      }
    });
    const xml = self.exec(e, {
      page : {
        archive : true
      }
    });
    const directives = self.exec(e, {
      page : {
        category : true
      }
    });
    const creator = self.exec(e, {
      page : {
        tag : true
      }
    });
    pkgInst.should.not.contain("\x3c!-- head_begin_home --\x3e");
    objOne.should.contain("\x3c!-- head_begin_home --\x3e\x3c!-- head_begin_default --\x3e");
    pkgInst.should.not.contain("\x3c!-- head_begin_post --\x3e");
    objTwo.should.contain("\x3c!-- head_begin_post --\x3e\x3c!-- head_begin_default --\x3e");
    pkgInst.should.not.contain("\x3c!-- head_begin_page --\x3e");
    obj.should.contain("\x3c!-- head_begin_page --\x3e\x3c!-- head_begin_default --\x3e");
    pkgInst.should.not.contain("\x3c!-- head_begin_archive --\x3e");
    xml.should.contain("\x3c!-- head_begin_archive --\x3e\x3c!-- head_begin_default --\x3e");
    pkgInst.should.not.contain("\x3c!-- head_begin_category --\x3e");
    directives.should.contain("\x3c!-- head_begin_category --\x3e\x3c!-- head_begin_default --\x3e");
    pkgInst.should.not.contain("\x3c!-- head_begin_tag --\x3e");
    creator.should.contain("\x3c!-- head_begin_tag --\x3e\x3c!-- head_begin_default --\x3e");
  });
});

