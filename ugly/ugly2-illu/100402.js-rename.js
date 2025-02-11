import { PostScriptCompiler, PostScriptEvaluator } from "../../src/core/function.js";import { PostScriptLexer, PostScriptParser } from "../../src/core/ps_parser.js";import { StringStream } from "../../src/core/stream.js";describe("function", function () {
  beforeEach(function () {
    jasmine.addMatchers({ toMatchArray(t, n) {
        return { compare(n, e) {
            const o = {};
            if (n.length !== e.length) {
              o.pass = false;o.message = "Array length: " + n.length + ", expected: " + e.length;return o;
            }o.pass = true;for (let t = 0; t < e.length; t++) {
              const c = n[t];
              const s = e[t];
              if (Array.isArray(s)) {
                if (c.length !== s.length) {
                  o.pass = false;break;
                }for (let t = 0; t < c.length; t++) {
                  const i = c[t];
                  const a = s[t];
                  if (i !== a) {
                    o.pass = false;break;
                  }
                }
              } else {
                if (c !== s) {
                  o.pass = false;break;
                }
              }
            }return o;
          } };
      } });
  });describe("PostScriptParser", function () {
    function o(t) {
      const n = new StringStream(t);
      const e = new PostScriptParser(new PostScriptLexer(n));
      return e.parse();
    }it("parses empty programs", function () {
      const t = o("{}");
      expect(t.length).toEqual(0);
    });it("parses positive numbers", function () {
      const t = 999;
      const n = o("{ 999 }");
      const e = [999];
      expect(n).toMatchArray(e);
    });it("parses negative numbers", function () {
      const t = -999;
      const n = o("{ -999 }");
      const e = [-999];
      expect(n).toMatchArray(e);
    });it("parses negative floats", function () {
      const t = 3.3;
      const n = o("{ 3.3 }");
      const e = [3.3];
      expect(n).toMatchArray(e);
    });it("parses operators", function () {
      const t = o("{ sub }");
      const n = ["sub"];
      expect(t).toMatchArray(n);
    });it("parses if statements", function () {
      const t = o("{ { 99 } if }");
      const n = [3, "jz", 99];
      expect(t).toMatchArray(n);
    });it("parses ifelse statements", function () {
      const t = o("{ { 99 } { 44 } ifelse }");
      const n = [5, "jz", 99, 6, "j", 44];
      expect(t).toMatchArray(n);
    });it("handles missing brackets", function () {
      expect(function () {
        o("{");
      }).toThrow(new Error("Unexpected symbol: found undefined expected 1."));
    });it("handles junk after the end", function () {
      const t = 3.3;
      const n = o("{ 3.3 }#");
      const e = [3.3];
      expect(n).toMatchArray(e);
    });
  });describe("PostScriptEvaluator", function () {
    function e(t) {
      const n = new StringStream(t);
      const e = new PostScriptParser(new PostScriptLexer(n));
      const o = e.parse();
      const c = new PostScriptEvaluator(o);
      const s = c.execute();
      return s;
    }it("pushes stack", function () {
      const t = e("{ 99 }");
      const n = [99];
      expect(t).toMatchArray(n);
    });it("handles if with true", function () {
      const t = e("{ 1 {99} if }");
      const n = [99];
      expect(t).toMatchArray(n);
    });it("handles if with false", function () {
      const t = e("{ 0 {99} if }");
      const n = [];
      expect(t).toMatchArray(n);
    });it("handles ifelse with true", function () {
      const t = e("{ 1 {99} {77} ifelse }");
      const n = [99];
      expect(t).toMatchArray(n);
    });it("handles ifelse with false", function () {
      const t = e("{ 0 {99} {77} ifelse }");
      const n = [77];
      expect(t).toMatchArray(n);
    });it("handles nested if", function () {
      const t = e("{ 1 {1 {77} if} if }");
      const n = [77];
      expect(t).toMatchArray(n);
    });it("abs", function () {
      const t = e("{ -2 abs }");
      const n = [2];
      expect(t).toMatchArray(n);
    });it("adds", function () {
      const t = e("{ 1 2 add }");
      const n = [3];
      expect(t).toMatchArray(n);
    });it("boolean and", function () {
      const t = e("{ true false and }");
      const n = [false];
      expect(t).toMatchArray(n);
    });it("bitwise and", function () {
      const t = e("{ 254 1 and }");
      const n = [0];
      expect(t).toMatchArray(n);
    });it("calculates the inverse tangent of a number", function () {
      const t = e("{ 90 atan }");
      const n = [Math.atan(90)];
      expect(t).toMatchArray(n);
    });it("handles bitshifting ", function () {
      const t = e("{ 50 2 bitshift }");
      const n = [200];
      expect(t).toMatchArray(n);
    });it("calculates the ceiling value", function () {
      const t = e("{ 9.9 ceiling }");
      const n = [10];
      expect(t).toMatchArray(n);
    });it("copies", function () {
      const t = e("{ 99 98 2 copy }");
      const n = [99, 98, 99, 98];
      expect(t).toMatchArray(n);
    });it("calculates the cosine of a number", function () {
      const t = e("{ 90 cos }");
      const n = [Math.cos(90)];
      expect(t).toMatchArray(n);
    });it("converts to int", function () {
      const t = e("{ 9.9 cvi }");
      const n = [9];
      expect(t).toMatchArray(n);
    });it("converts negatives to int", function () {
      const t = e("{ -9.9 cvi }");
      const n = [-9];
      expect(t).toMatchArray(n);
    });it("converts to real", function () {
      const t = e("{ 55.34 cvr }");
      const n = [55.34];
      expect(t).toMatchArray(n);
    });it("divides", function () {
      const t = e("{ 6 5 div }");
      const n = [1.2];
      expect(t).toMatchArray(n);
    });it("maps division by zero to infinity", function () {
      const t = e("{ 6 0 div }");
      const n = [Infinity];
      expect(t).toMatchArray(n);
    });it("duplicates", function () {
      const t = e("{ 99 dup }");
      const n = [99, 99];
      expect(t).toMatchArray(n);
    });it("accepts an equality", function () {
      const t = e("{ 9 9 eq }");
      const n = [true];
      expect(t).toMatchArray(n);
    });it("rejects an inequality", function () {
      const t = e("{ 9 8 eq }");
      const n = [false];
      expect(t).toMatchArray(n);
    });it("exchanges", function () {
      const t = e("{ 44 99 exch }");
      const n = [99, 44];
      expect(t).toMatchArray(n);
    });it("handles exponentiation", function () {
      const t = e("{ 10 2 exp }");
      const n = [100];
      expect(t).toMatchArray(n);
    });it("pushes false onto the stack", function () {
      const t = e("{ false }");
      const n = [false];
      expect(t).toMatchArray(n);
    });it("calculates the floor value", function () {
      const t = e("{ 9.9 floor }");
      const n = [9];
      expect(t).toMatchArray(n);
    });it("handles greater than or equal to", function () {
      const t = e("{ 10 9 ge }");
      const n = [true];
      expect(t).toMatchArray(n);
    });it("rejects less than for greater than or equal to", function () {
      const t = e("{ 8 9 ge }");
      const n = [false];
      expect(t).toMatchArray(n);
    });it("handles greater than", function () {
      const t = e("{ 10 9 gt }");
      const n = [true];
      expect(t).toMatchArray(n);
    });it("rejects less than or equal for greater than", function () {
      const t = e("{ 9 9 gt }");
      const n = [false];
      expect(t).toMatchArray(n);
    });it("divides to integer", function () {
      const t = e("{ 2 3 idiv }");
      const n = [0];
      expect(t).toMatchArray(n);
    });it("divides to negative integer", function () {
      const t = e("{ -2 3 idiv }");
      const n = [0];
      expect(t).toMatchArray(n);
    });it("duplicates index", function () {
      const t = e("{ 4 3 2 1 2 index }");
      const n = [4, 3, 2, 1, 3];
      expect(t).toMatchArray(n);
    });it("handles less than or equal to", function () {
      const t = e("{ 9 10 le }");
      const n = [true];
      expect(t).toMatchArray(n);
    });it("rejects greater than for less than or equal to", function () {
      const t = e("{ 10 9 le }");
      const n = [false];
      expect(t).toMatchArray(n);
    });it("calculates the natural logarithm", function () {
      const t = e("{ 10 ln }");
      const n = [Math.log(10)];
      expect(t).toMatchArray(n);
    });it("calculates the base 10 logarithm", function () {
      const t = e("{ 100 log }");
      const n = [2];
      expect(t).toMatchArray(n);
    });it("handles less than", function () {
      const t = e("{ 9 10 lt }");
      const n = [true];
      expect(t).toMatchArray(n);
    });it("rejects greater than or equal to for less than", function () {
      const t = e("{ 10 9 lt }");
      const n = [false];
      expect(t).toMatchArray(n);
    });it("performs the modulo operation", function () {
      const t = e("{ 4 3 mod }");
      const n = [1];
      expect(t).toMatchArray(n);
    });it("multiplies two numbers (positive result)", function () {
      const t = e("{ 9 8 mul }");
      const n = [72];
      expect(t).toMatchArray(n);
    });it("multiplies two numbers (negative result)", function () {
      const t = e("{ 9 -8 mul }");
      const n = [-72];
      expect(t).toMatchArray(n);
    });it("accepts an inequality", function () {
      const t = e("{ 9 8 ne }");
      const n = [true];
      expect(t).toMatchArray(n);
    });it("rejects an equality", function () {
      const t = e("{ 9 9 ne }");
      const n = [false];
      expect(t).toMatchArray(n);
    });it("negates", function () {
      const t = e("{ 4.5 neg }");
      const n = [-4.5];
      expect(t).toMatchArray(n);
    });it("boolean not", function () {
      const t = e("{ true not }");
      const n = [false];
      expect(t).toMatchArray(n);
    });it("bitwise not", function () {
      const t = e("{ 12 not }");
      const n = [-13];
      expect(t).toMatchArray(n);
    });it("boolean or", function () {
      const t = e("{ true false or }");
      const n = [true];
      expect(t).toMatchArray(n);
    });it("bitwise or", function () {
      const t = e("{ 254 1 or }");
      const n = [255];
      expect(t).toMatchArray(n);
    });it("pops stack", function () {
      const t = e("{ 1 2 pop }");
      const n = [1];
      expect(t).toMatchArray(n);
    });it("rolls stack right", function () {
      const t = e("{ 1 3 2 2 4 1 roll }");
      const n = [2, 1, 3, 2];
      expect(t).toMatchArray(n);
    });it("rolls stack left", function () {
      const t = e("{ 1 3 2 2 4 -1 roll }");
      const n = [3, 2, 2, 1];
      expect(t).toMatchArray(n);
    });it("rounds a number", function () {
      const t = e("{ 9.52 round }");
      const n = [10];
      expect(t).toMatchArray(n);
    });it("calculates the sine of a number", function () {
      const t = e("{ 90 sin }");
      const n = [Math.sin(90)];
      expect(t).toMatchArray(n);
    });it("calculates a square root (integer)", function () {
      const t = e("{ 100 sqrt }");
      const n = [10];
      expect(t).toMatchArray(n);
    });it("calculates a square root (float)", function () {
      const t = e("{ 99 sqrt }");
      const n = [Math.sqrt(99)];
      expect(t).toMatchArray(n);
    });it("subtracts (positive result)", function () {
      const t = e("{ 6 4 sub }");
      const n = [2];
      expect(t).toMatchArray(n);
    });it("subtracts (negative result)", function () {
      const t = e("{ 4 6 sub }");
      const n = [-2];
      expect(t).toMatchArray(n);
    });it("pushes true onto the stack", function () {
      const t = e("{ true }");
      const n = [true];
      expect(t).toMatchArray(n);
    });it("truncates a number", function () {
      const t = e("{ 35.004 truncate }");
      const n = [35];
      expect(t).toMatchArray(n);
    });it("calculates an exclusive or value", function () {
      const t = e("{ 3 9 xor }");
      const n = [10];
      expect(t).toMatchArray(n);
    });
  });describe("PostScriptCompiler", function () {
    function t(t, n, e, o) {
      const c = new PostScriptCompiler();
      const s = c.compile(t, n, e);
      if (o === null) {
        expect(s).toBeNull();
      } else {
        expect(s).not.toBeNull();const i = new Function("src", "srcOffset", "dest", "destOffset", s);
        for (let t = 0; t < o.length; t++) {
          const a = new Float32Array(o[t].output.length);
          i(o[t].input, 0, a, 0);expect(Array.prototype.slice.call(a, 0)).toMatchArray(o[t].output);
        }
      }
    }it("check compiled add", function () {
      t([.25, .5, "add"], [], [0, 1], [{ input: [], output: [.75] }]);t([0, "add"], [0, 1], [0, 1], [{ input: [.25], output: [.25] }]);t([.5, "add"], [0, 1], [0, 1], [{ input: [.25], output: [.75] }]);t([0, "exch", "add"], [0, 1], [0, 1], [{ input: [.25], output: [.25] }]);t([.5, "exch", "add"], [0, 1], [0, 1], [{ input: [.25], output: [.75] }]);t(["add"], [0, 1, 0, 1], [0, 1], [{ input: [.25, .5], output: [.75] }]);t(["add"], [0, 1], [0, 1], null);
    });it("check compiled sub", function () {
      t([.5, .25, "sub"], [], [0, 1], [{ input: [], output: [.25] }]);t([0, "sub"], [0, 1], [0, 1], [{ input: [.25], output: [.25] }]);t([.5, "sub"], [0, 1], [0, 1], [{ input: [.75], output: [.25] }]);t([0, "exch", "sub"], [0, 1], [-1, 1], [{ input: [.25], output: [-0.25] }]);t([.75, "exch", "sub"], [0, 1], [-1, 1], [{ input: [.25], output: [.5] }]);t(["sub"], [0, 1, 0, 1], [-1, 1], [{ input: [.25, .5], output: [-0.25] }]);t(["sub"], [0, 1], [0, 1], null);t([1, "dup", 3, 2, "roll", "sub", "sub"], [0, 1], [0, 1], [{ input: [.75], output: [.75] }]);
    });it("check compiled mul", function () {
      t([.25, .5, "mul"], [], [0, 1], [{ input: [], output: [.125] }]);t([0, "mul"], [0, 1], [0, 1], [{ input: [.25], output: [0] }]);t([.5, "mul"], [0, 1], [0, 1], [{ input: [.25], output: [.125] }]);t([1, "mul"], [0, 1], [0, 1], [{ input: [.25], output: [.25] }]);t([0, "exch", "mul"], [0, 1], [0, 1], [{ input: [.25], output: [0] }]);t([.5, "exch", "mul"], [0, 1], [0, 1], [{ input: [.25], output: [.125] }]);t([1, "exch", "mul"], [0, 1], [0, 1], [{ input: [.25], output: [.25] }]);t(["mul"], [0, 1, 0, 1], [0, 1], [{ input: [.25, .5], output: [.125] }]);t(["mul"], [0, 1], [0, 1], null);
    });it("check compiled max", function () {
      t(["dup", .75, "gt", 7, "jz", "pop", .75], [0, 1], [0, 1], [{ input: [.5], output: [.5] }]);t(["dup", .75, "gt", 7, "jz", "pop", .75], [0, 1], [0, 1], [{ input: [1], output: [.75] }]);t(["dup", .75, "gt", 5, "jz", "pop", .75], [0, 1], [0, 1], null);
    });it("check pop/roll/index", function () {
      t([1, "pop"], [0, 1], [0, 1], [{ input: [.5], output: [.5] }]);t([1, 3, -1, "roll"], [0, 1, 0, 1], [0, 1, 0, 1, 0, 1], [{ input: [.25, .5], output: [.5, 1, .25] }]);t([1, 3, 1, "roll"], [0, 1, 0, 1], [0, 1, 0, 1, 0, 1], [{ input: [.25, .5], output: [1, .25, .5] }]);t([1, 3, 1.5, "roll"], [0, 1, 0, 1], [0, 1, 0, 1, 0, 1], null);t([1, 1, "index"], [0, 1], [0, 1, 0, 1, 0, 1], [{ input: [.5], output: [.5, 1, .5] }]);t([1, 3, "index", "pop"], [0, 1], [0, 1], null);t([1, .5, "index", "pop"], [0, 1], [0, 1], null);
    });it("check input boundaries", function () {
      t([], [0, .5], [0, 1], [{ input: [1], output: [.5] }]);t([], [.5, 1], [0, 1], [{ input: [0], output: [.5] }]);t(["dup"], [.5, .75], [0, 1, 0, 1], [{ input: [0], output: [.5, .5] }]);t([], [100, 1001], [0, 1e4], [{ input: [1e3], output: [1e3] }]);
    });it("check output boundaries", function () {
      t([], [0, 1], [0, .5], [{ input: [1], output: [.5] }]);t([], [0, 1], [.5, 1], [{ input: [0], output: [.5] }]);t(["dup"], [0, 1], [.5, 1, .75, 1], [{ input: [0], output: [.5, .75] }]);t([], [0, 1e4], [100, 1001], [{ input: [1e3], output: [1e3] }]);
    });it("compile optimized", function () {
      const t = new PostScriptCompiler();
      const n = [0, "add", 1, 1, 3, -1, "roll", "sub", "sub", 1, "mul"];
      const e = t.compile(n, [0, 1], [0, 1]);
      expect(e).toEqual("dest[destOffset + 0] = Math.max(0, Math.min(1, src[srcOffset + 0]));");
    });
  });
});
