'use strict';
import Delta from "quill-delta";
import Editor from "../../../core/editor";
describe("Code", function() {
  it("format newline", function() {
    const e = this.initialize(Editor, "<p><br></p>");
    e.formatLine(0, 1, {
      "code-block" : true
    });
    expect(e.scroll.domNode).toEqualHTML(`<div class="ql-code-block-container" spellcheck="false">\n        <div class="ql-code-block"><br></div>\n      </div>`);
  });
  it("format lines", function() {
    const e = this.initialize(Editor, "<p><em>0123</em></p><p>5678</p>");
    e.formatLine(2, 5, {
      "code-block" : true
    });
    expect(e.getDelta()).toEqual((new Delta).insert("0123").insert("\n", {
      "code-block" : true
    }).insert("5678").insert("\n", {
      "code-block" : true
    }));
    expect(e.scroll.domNode).toEqualHTML(`<div class="ql-code-block-container" spellcheck="false">\n        <div class="ql-code-block">0123</div>\n        <div class="ql-code-block">5678</div>\n      </div>`);
  });
  it("remove format", function() {
    const e = this.initialize(Editor, '<div class="ql-code-block-container" spellcheck="false"><div class="ql-code-block">0123</div></div>');
    e.formatText(4, 1, {
      "code-block" : false
    });
    expect(e.getDelta()).toEqual((new Delta).insert("0123\n"));
    expect(e.scroll.domNode).toEqualHTML("<p>0123</p>");
  });
  it("delete last", function() {
    const e = this.initialize(Editor, '<p>0123</p><div class="ql-code-block-container" spellcheck="false"><div class="ql-code-block"><br></div></div><p>5678</p>');
    e.deleteText(4, 1);
    expect(e.getDelta()).toEqual((new Delta).insert("0123").insert("\n", {
      "code-block" : true
    }).insert("5678\n"));
    expect(e.scroll.domNode).toEqualHTML('<div class="ql-code-block-container" spellcheck="false"><div class="ql-code-block">0123</div></div><p>5678</p>');
  });
  it("delete merge before", function() {
    const e = this.initialize(Editor, '<h1>0123</h1><div class="ql-code-block-container" spellcheck="false"><div class="ql-code-block">4567</div></div>');
    e.deleteText(4, 1);
    expect(e.getDelta()).toEqual((new Delta).insert("01234567").insert("\n", {
      "code-block" : true
    }));
    expect(e.scroll.domNode).toEqualHTML('<div class="ql-code-block-container" spellcheck="false"><div class="ql-code-block">01234567</div></div>');
  });
  it("delete merge after", function() {
    const e = this.initialize(Editor, '<div class="ql-code-block-container" spellcheck="false"><div class="ql-code-block">0123</div></div><h1>4567</h1>');
    e.deleteText(4, 1);
    expect(e.getDelta()).toEqual((new Delta).insert("01234567").insert("\n", {
      header : 1
    }));
    expect(e.scroll.domNode).toEqualHTML("<h1>01234567</h1>");
  });
  it("delete across before partial merge", function() {
    const e = this.initialize(Editor, `<div class="ql-code-block-container" spellcheck="false">\n        <div class="ql-code-block">01</div>\n        <div class="ql-code-block">34</div>\n        <div class="ql-code-block">67</div>\n      </div>\n      <h1>90</h1>`);
    e.deleteText(7, 3);
    expect(e.getDelta()).toEqual((new Delta).insert("01").insert("\n", {
      "code-block" : true
    }).insert("34").insert("\n", {
      "code-block" : true
    }).insert("60").insert("\n", {
      header : 1
    }));
    expect(e.scroll.domNode.innerHTML).toEqualHTML(`<div class="ql-code-block-container" spellcheck="false">\n        <div class="ql-code-block">01</div>\n        <div class="ql-code-block">34</div>\n      </div>\n      <h1>60</h1>`);
  });
  it("delete across before no merge", function() {
    const e = this.initialize(Editor, `<div class="ql-code-block-container" spellcheck="false">\n        <div class="ql-code-block">01</div>\n        <div class="ql-code-block">34</div>\n      </div>\n      <h1>6789</h1>`);
    e.deleteText(3, 5);
    expect(e.getDelta()).toEqual((new Delta).insert("01").insert("\n", {
      "code-block" : true
    }).insert("89").insert("\n", {
      header : 1
    }));
    expect(e.scroll.domNode.innerHTML).toEqualHTML('<div class="ql-code-block-container" spellcheck="false"><div class="ql-code-block">01</div></div><h1>89</h1>');
  });
  it("delete across after", function() {
    const e = this.initialize(Editor, `<h1>0123</h1>\n      <div class="ql-code-block-container" spellcheck="false">\n        <div class="ql-code-block">56</div>\n        <div class="ql-code-block">89</div>\n      </div>`);
    e.deleteText(2, 4);
    expect(e.getDelta()).toEqual((new Delta).insert("016").insert("\n", {
      "code-block" : true
    }).insert("89").insert("\n", {
      "code-block" : true
    }));
    expect(e.scroll.domNode.innerHTML).toEqualHTML(`\n      <div class="ql-code-block-container" spellcheck="false">\n        <div class="ql-code-block">016</div>\n        <div class="ql-code-block">89</div>\n      </div>\n    `);
  });
  it("replace", function() {
    const that = this.initialize(Editor, '<div class="ql-code-block-container" spellcheck="false"><div class="ql-code-block">0123</div></div>');
    that.formatText(4, 1, {
      header : 1
    });
    expect(that.getDelta()).toEqual((new Delta).insert("0123").insert("\n", {
      header : 1
    }));
    expect(that.scroll.domNode).toEqualHTML("<h1>0123</h1>");
  });
  it("replace multiple", function() {
    const that = this.initialize(Editor, `\n      <div class="ql-code-block-container" spellcheck="false">\n        <div class="ql-code-block">01</div>\n        <div class="ql-code-block">23</div>\n      </div>\n    `);
    that.formatText(0, 6, {
      header : 1
    });
    expect(that.getDelta()).toEqual((new Delta).insert("01").insert("\n", {
      header : 1
    }).insert("23").insert("\n", {
      header : 1
    }));
    expect(that.scroll.domNode).toEqualHTML("<h1>01</h1><h1>23</h1>");
  });
  it("format imprecise bounds", function() {
    const that = this.initialize(Editor, `\n      <div class="ql-code-block-container" spellcheck="false">\n        <div class="ql-code-block">01</div>\n        <div class="ql-code-block">23</div>\n        <div class="ql-code-block">45</div>\n      </div>\n    `);
    that.formatText(1, 6, {
      header : 1
    });
    expect(that.getDelta()).toEqual((new Delta).insert("01").insert("\n", {
      header : 1
    }).insert("23").insert("\n", {
      header : 1
    }).insert("45").insert("\n", {
      "code-block" : true
    }));
    expect(that.scroll.domNode.innerHTML).toEqualHTML('<h1>01</h1><h1>23</h1><div class="ql-code-block-container" spellcheck="false"><div class="ql-code-block">45</div></div>');
  });
  it("format without newline", function() {
    const that = this.initialize(Editor, `\n      <div class="ql-code-block-container" spellcheck="false">\n        <div class="ql-code-block">01</div>\n        <div class="ql-code-block">23</div>\n        <div class="ql-code-block">45</div>\n      </div>\n    `);
    that.formatText(3, 1, {
      header : 1
    });
    expect(that.getDelta()).toEqual((new Delta).insert("01").insert("\n", {
      "code-block" : true
    }).insert("23").insert("\n", {
      "code-block" : true
    }).insert("45").insert("\n", {
      "code-block" : true
    }));
    expect(that.scroll.domNode.innerHTML).toEqualHTML(`\n      <div class="ql-code-block-container" spellcheck="false">\n        <div class="ql-code-block">01</div>\n        <div class="ql-code-block">23</div>\n        <div class="ql-code-block">45</div>\n      </div>\n    `);
  });
  it("format line", function() {
    const e = this.initialize(Editor, `\n      <div class="ql-code-block-container" spellcheck="false">\n        <div class="ql-code-block">01</div>\n        <div class="ql-code-block">23</div>\n        <div class="ql-code-block">45</div>\n      </div>\n    `);
    e.formatLine(3, 1, {
      header : 1
    });
    expect(e.getDelta()).toEqual((new Delta).insert("01").insert("\n", {
      "code-block" : true
    }).insert("23").insert("\n", {
      header : 1
    }).insert("45").insert("\n", {
      "code-block" : true
    }));
    expect(e.scroll.domNode.innerHTML).toEqualHTML(`\n      <div class="ql-code-block-container" spellcheck="false">\n        <div class="ql-code-block">01</div>\n      </div>\n      <h1>23</h1>\n      <div class="ql-code-block-container" spellcheck="false">\n        <div class="ql-code-block">45</div>\n      </div>\n    `);
  });
  it("ignore formatAt", function() {
    const e = this.initialize(Editor, '<div class="ql-code-block-container" spellcheck="false"><div class="ql-code-block">0123</div></div>');
    e.formatText(1, 1, {
      bold : true
    });
    expect(e.getDelta()).toEqual((new Delta).insert("0123").insert("\n", {
      "code-block" : true
    }));
    expect(e.scroll.domNode).toEqualHTML('<div class="ql-code-block-container" spellcheck="false"><div class="ql-code-block">0123</div></div>');
  });
  it("partial block modification applyDelta", function() {
    const doc = this.initialize(Editor, `<div class="ql-code-block-container" spellcheck="false">\n        <div class="ql-code-block">a</div>\n        <div class="ql-code-block">b</div>\n        <div class="ql-code-block"><br></div>\n      </div>`);
    const d = (new Delta).retain(3).insert("\n", {
      "code-block" : true
    }).delete(1).retain(1, {
      "code-block" : null
    });
    doc.applyDelta(d);
    expect(doc.scroll.domNode.innerHTML).toEqualHTML(`<div class="ql-code-block-container" spellcheck="false">\n        <div class="ql-code-block">a</div>\n        <div class="ql-code-block">b</div>\n      </div>\n      <p><br></p>`);
  });
});

