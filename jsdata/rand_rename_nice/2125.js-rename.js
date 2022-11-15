'use strict';
import utils from "./utils";
describe("when assignWithDepth: should merge objects within objects", function() {
  it("should handle simple, depth:1 types (identity)", function() {
    let localSaveKey = {
      foo : "bar",
      bar : 0
    };
    let t = {
      foo : "bar",
      bar : 0
    };
    let xvals0 = utils.assignWithDepth(localSaveKey, t);
    expect(xvals0).toEqual(t);
  });
  it("should handle simple, depth:1 types (dst: undefined)", function() {
    let localSaveKey = undefined;
    let t = {
      foo : "bar",
      bar : 0
    };
    let xvals0 = utils.assignWithDepth(localSaveKey, t);
    expect(xvals0).toEqual(t);
  });
  it("should handle simple, depth:1 types (src: undefined)", function() {
    let e = {
      foo : "bar",
      bar : 0
    };
    let hydratorHeaders = undefined;
    let xvals0 = utils.assignWithDepth(e, hydratorHeaders);
    expect(xvals0).toEqual(e);
  });
  it("should handle simple, depth:1 types (merge)", function() {
    let localSaveKey = {
      foo : "bar",
      bar : 0
    };
    let hydratorHeaders = {
      foo : "foo"
    };
    let xvals0 = utils.assignWithDepth(localSaveKey, hydratorHeaders);
    expect(xvals0).toEqual({
      foo : "foo",
      bar : 0
    });
  });
  it("should handle depth:2 types (dst: orphan)", function() {
    let e = {
      foo : "bar",
      bar : {
        foo : "bar"
      }
    };
    let hydratorHeaders = {
      foo : "bar"
    };
    let xvals0 = utils.assignWithDepth(e, hydratorHeaders);
    expect(xvals0).toEqual(e);
  });
  it("should handle depth:2 types (dst: object, src: simple type)", function() {
    let localSaveKey = {
      foo : "bar",
      bar : {
        foo : "bar"
      }
    };
    let hydratorHeaders = {
      foo : "foo",
      bar : "should NOT clobber"
    };
    let xvals0 = utils.assignWithDepth(localSaveKey, hydratorHeaders);
    expect(xvals0).toEqual({
      foo : "foo",
      bar : {
        foo : "bar"
      }
    });
  });
  it("should handle depth:2 types (src: orphan)", function() {
    let localSaveKey = {
      foo : "bar"
    };
    let t = {
      foo : "bar",
      bar : {
        foo : "bar"
      }
    };
    let xvals0 = utils.assignWithDepth(localSaveKey, t);
    expect(xvals0).toEqual(t);
  });
  it("should handle depth:2 types (merge)", function() {
    let localSaveKey = {
      foo : "bar",
      bar : {
        foo : "bar"
      },
      boofar : 1
    };
    let hydratorHeaders = {
      foo : "foo",
      bar : {
        bar : 0
      },
      foobar : "foobar"
    };
    let xvals0 = utils.assignWithDepth(localSaveKey, hydratorHeaders);
    expect(xvals0).toEqual({
      foo : "foo",
      bar : {
        foo : "bar",
        bar : 0
      },
      foobar : "foobar",
      boofar : 1
    });
  });
  it("should handle depth:3 types (merge with clobber because assignWithDepth::depth == 2)", function() {
    let localSaveKey = {
      foo : "bar",
      bar : {
        foo : "bar",
        bar : {
          foo : {
            message : "this",
            willbe : "clobbered"
          }
        }
      },
      boofar : 1
    };
    let hydratorHeaders = {
      foo : "foo",
      bar : {
        foo : "foo",
        bar : {
          foo : {
            message : "clobbered other foo"
          }
        }
      },
      foobar : "foobar"
    };
    let xvals0 = utils.assignWithDepth(localSaveKey, hydratorHeaders);
    expect(xvals0).toEqual({
      foo : "foo",
      bar : {
        foo : "foo",
        bar : {
          foo : {
            message : "clobbered other foo"
          }
        }
      },
      foobar : "foobar",
      boofar : 1
    });
  });
  it("should handle depth:3 types (merge with clobber because assignWithDepth::depth == 1)", function() {
    let localSaveKey = {
      foo : "bar",
      bar : {
        foo : "bar",
        bar : {
          foo : {
            message : "",
            willNotbe : "present"
          },
          bar : "shouldNotBePresent"
        }
      },
      boofar : 1
    };
    let hydratorHeaders = {
      foo : "foo",
      bar : {
        foo : "foo",
        bar : {
          foo : {
            message : "this"
          }
        }
      },
      foobar : "foobar"
    };
    let xvals0 = utils.assignWithDepth(localSaveKey, hydratorHeaders, {
      depth : 1
    });
    expect(xvals0).toEqual({
      foo : "foo",
      bar : {
        foo : "foo",
        bar : {
          foo : {
            message : "this"
          }
        }
      },
      foobar : "foobar",
      boofar : 1
    });
  });
  it("should handle depth:3 types (merge with no clobber because assignWithDepth::depth == 3)", function() {
    let localSaveKey = {
      foo : "bar",
      bar : {
        foo : "bar",
        bar : {
          foo : {
            message : "",
            willbe : "present"
          }
        }
      },
      boofar : 1
    };
    let hydratorHeaders = {
      foo : "foo",
      bar : {
        foo : "foo",
        bar : {
          foo : {
            message : "this"
          }
        }
      },
      foobar : "foobar"
    };
    let xvals0 = utils.assignWithDepth(localSaveKey, hydratorHeaders, {
      depth : 3
    });
    expect(xvals0).toEqual({
      foo : "foo",
      bar : {
        foo : "foo",
        bar : {
          foo : {
            message : "this",
            willbe : "present"
          }
        }
      },
      foobar : "foobar",
      boofar : 1
    });
  });
});
describe("when memoizing", function() {
  it("should return the same value", function() {
    const replaceEntities = utils.memoize(function(mmCoreSecondsYear, params) {
      params.flag = true;
      if (mmCoreSecondsYear < 2) {
        return 1;
      } else {
        return replaceEntities(mmCoreSecondsYear - 2, params) + replaceEntities(mmCoreSecondsYear - 1, params);
      }
    });
    let params = {
      flag : false
    };
    replaceEntities(10, params);
    expect(params.flag).toBe(true);
    params = {
      flag : false
    };
    replaceEntities(10, params);
    expect(params.flag).toBe(false);
  });
});
describe("when detecting chart type ", function() {
  it("should handle a graph definition", function() {
    const value = "graph TB\nbfs1:queue";
    const child_rendered_first = utils.detectType(value);
    expect(child_rendered_first).toBe("flowchart");
  });
  it("should handle an initialize definition", function() {
    const value = `\n%%{initialize: { 'logLevel': 0, 'theme': 'dark' }}%%\nsequenceDiagram\nAlice->Bob: hi`;
    const child_rendered_first = utils.detectType(value);
    const xvals0 = utils.detectInit(value);
    expect(child_rendered_first).toBe("sequence");
    expect(xvals0).toEqual({
      logLevel : 0,
      theme : "dark"
    });
  });
  it("should handle an init definition", function() {
    const value = `\n%%{init: { 'logLevel': 0, 'theme': 'dark' }}%%\nsequenceDiagram\nAlice->Bob: hi`;
    const child_rendered_first = utils.detectType(value);
    const xvals0 = utils.detectInit(value);
    expect(child_rendered_first).toBe("sequence");
    expect(xvals0).toEqual({
      logLevel : 0,
      theme : "dark"
    });
  });
  it("should handle an init definition with config converted to the proper diagram configuration", function() {
    const value = `\n%%{init: { 'logLevel': 0, 'theme': 'dark', 'config': {'wrap': true} } }%%\nsequenceDiagram\nAlice->Bob: hi`;
    const child_rendered_first = utils.detectType(value);
    const xvals0 = utils.detectInit(value);
    expect(child_rendered_first).toBe("sequence");
    expect(xvals0).toEqual({
      logLevel : 0,
      theme : "dark",
      sequence : {
        wrap : true
      }
    });
  });
  it("should handle a multiline init definition", function() {
    const value = `\n%%{\n  init: {\n    'logLevel': 0,\n    'theme': 'dark'\n  }\n}%%\nsequenceDiagram\nAlice->Bob: hi`;
    const child_rendered_first = utils.detectType(value);
    const xvals0 = utils.detectInit(value);
    expect(child_rendered_first).toBe("sequence");
    expect(xvals0).toEqual({
      logLevel : 0,
      theme : "dark"
    });
  });
  it("should handle multiple init directives", function() {
    const value = `\n%%{ init: { 'logLevel': 0, 'theme': 'forest' } }%%\n%%{\n  init: {\n    'theme': 'dark'\n  }\n}%%\nsequenceDiagram\nAlice->Bob: hi`;
    const child_rendered_first = utils.detectType(value);
    const xvals0 = utils.detectInit(value);
    expect(child_rendered_first).toBe("sequence");
    expect(xvals0).toEqual({
      logLevel : 0,
      theme : "dark"
    });
  });
  it("should handle a graph definition with leading spaces", function() {
    const value = "    graph TB\nbfs1:queue";
    const child_rendered_first = utils.detectType(value);
    expect(child_rendered_first).toBe("flowchart");
  });
  it("should handle a graph definition with leading spaces and newline", function() {
    const value = "  \n  graph TB\nbfs1:queue";
    const child_rendered_first = utils.detectType(value);
    expect(child_rendered_first).toBe("flowchart");
  });
  it("should handle a graph definition for gitGraph", function() {
    const value = "  \n  gitGraph TB:\nbfs1:queue";
    const child_rendered_first = utils.detectType(value);
    expect(child_rendered_first).toBe("git");
  });
});
describe("when finding substring in array ", function() {
  it("should return the array index that contains the substring", function() {
    const style = ["stroke:val1", "fill:val2"];
    const xvals0 = utils.isSubstringInArray("fill", style);
    expect(xvals0).toEqual(1);
  });
  it("should return -1 if the substring is not found in the array", function() {
    const style = ["stroke:val1", "stroke-width:val2"];
    const xvals0 = utils.isSubstringInArray("fill", style);
    expect(xvals0).toEqual(-1);
  });
});
describe("when formatting urls", function() {
  it("should handle links", function() {
    const url = "https://mermaid-js.github.io/mermaid/#/";
    let item = {
      securityLevel : "loose"
    };
    let text = utils.formatUrl(url, item);
    expect(text).toEqual(url);
    item.securityLevel = "strict";
    text = utils.formatUrl(url, item);
    expect(text).toEqual(url);
  });
  it("should handle anchors", function() {
    const url = "#interaction";
    let item = {
      securityLevel : "loose"
    };
    let text = utils.formatUrl(url, item);
    expect(text).toEqual(url);
    item.securityLevel = "strict";
    text = utils.formatUrl(url, item);
    expect(text).toEqual("about:blank");
  });
  it("should handle mailto", function() {
    const url = "mailto:user@user.user";
    let item = {
      securityLevel : "loose"
    };
    let text = utils.formatUrl(url, item);
    expect(text).toEqual(url);
    item.securityLevel = "strict";
    text = utils.formatUrl(url, item);
    expect(text).toEqual(url);
  });
  it("should handle other protocols", function() {
    const url = "notes://do-your-thing/id";
    let item = {
      securityLevel : "loose"
    };
    let text = utils.formatUrl(url, item);
    expect(text).toEqual(url);
    item.securityLevel = "strict";
    text = utils.formatUrl(url, item);
    expect(text).toEqual(url);
  });
  it("should handle scripts", function() {
    const url = 'javascript:alert("test")';
    let item = {
      securityLevel : "loose"
    };
    let text = utils.formatUrl(url, item);
    expect(text).toEqual(url);
    item.securityLevel = "strict";
    text = utils.formatUrl(url, item);
    expect(text).toEqual("about:blank");
  });
});
describe("when calculating SVG size", function() {
  it("should return width 100% when useMaxWidth is true", function() {
    const e = utils.calculateSvgSizeAttrs(100, 200, true);
    expect(e.get("height")).toEqual(100);
    expect(e.get("style")).toEqual("max-width: 200px;");
    expect(e.get("width")).toEqual("100%");
  });
  it("should return absolute width when useMaxWidth is false", function() {
    const e = utils.calculateSvgSizeAttrs(100, 200, false);
    expect(e.get("height")).toEqual(100);
    expect(e.get("width")).toEqual(200);
  });
});
describe("when initializing the id generator", function() {
  it("should return a random number generator based on Date", function(saveNotifs) {
    const deletedChar = new utils.initIdGeneratior(false);
    expect(typeof deletedChar.next).toEqual("function");
    const oldBorderWidth = deletedChar.next();
    setTimeout(() => {
      expect(deletedChar.next() > oldBorderWidth).toBe(true);
      saveNotifs();
    }, 5);
  });
  it("should return a non random number generator", function() {
    const deletedChar = new utils.initIdGeneratior(true);
    expect(typeof deletedChar.next).toEqual("function");
    const xvals0 = 0;
    const shapesInLowerLayer = deletedChar.next();
    expect(xvals0).toEqual(shapesInLowerLayer);
    expect(deletedChar.next()).toEqual(shapesInLowerLayer + 1);
  });
  it("should return a non random number generator based on seed", function() {
    const deletedChar = new utils.initIdGeneratior(true, "thisIsASeed");
    expect(typeof deletedChar.next).toEqual("function");
    const xvals0 = 11;
    const shapesInLowerLayer = deletedChar.next();
    expect(xvals0).toEqual(shapesInLowerLayer);
    expect(deletedChar.next()).toEqual(shapesInLowerLayer + 1);
  });
});

