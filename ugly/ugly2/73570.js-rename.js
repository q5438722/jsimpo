import assert from"assert";import lodashStable from"lodash";import{stubString}from"./utils.js";import escapeRegExp from"../escapeRegExp.js";describe("escapeRegExp",function(){var e="\\^\\$\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|\\\\",t="^$.*+?()[]{}|\\";it("should escape values",function(){assert.strictEqual(escapeRegExp(t+t),e+e)});it("should handle strings with nothing to escape",function(){assert.strictEqual(escapeRegExp("abc"),"abc")});it("should return an empty string for empty values",function(){var e=[,null,undefined,""],t=lodashStable.map(e,stubString);var s=lodashStable.map(e,function(e,t){return t?escapeRegExp(e):escapeRegExp()});assert.deepStrictEqual(s,t)})});