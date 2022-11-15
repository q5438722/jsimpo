'use strict';
(function(mod) {
  if (typeof exports == "object" && typeof module == "object") {
    mod(require("../../lib/codemirror"), require("../yaml/yaml"));
  } else {
    if (typeof define == "function" && define.amd) {
      define(["../../lib/codemirror", "../yaml/yaml"], mod);
    } else {
      mod(CodeMirror);
    }
  }
})(function(CodeMirror) {
  var START = 0;
  var FRONTMATTER = 1;
  var BODY = 2;
  CodeMirror.defineMode("yaml-frontmatter", function(config, parserConfig) {
    function curMode(state) {
      return state.state == BODY ? innerMode : yamlMode;
    }
    var yamlMode = CodeMirror.getMode(config, "yaml");
    var innerMode = CodeMirror.getMode(config, parserConfig && parserConfig.base || "gfm");
    return {
      startState : function() {
        return {
          state : START,
          inner : CodeMirror.startState(yamlMode)
        };
      },
      copyState : function(state) {
        return {
          state : state.state,
          inner : CodeMirror.copyState(curMode(state), state.inner)
        };
      },
      token : function(stream, state) {
        if (state.state == START) {
          if (stream.match("---", false)) {
            state.state = FRONTMATTER;
            return yamlMode.token(stream, state.inner);
          } else {
            state.state = BODY;
            state.inner = CodeMirror.startState(innerMode);
            return innerMode.token(stream, state.inner);
          }
        } else {
          if (state.state == FRONTMATTER) {
            var n = stream.sol() && stream.match(/(---|\.\.\.)/, false);
            var style = yamlMode.token(stream, state.inner);
            if (n) {
              state.state = BODY;
              state.inner = CodeMirror.startState(innerMode);
            }
            return style;
          } else {
            return innerMode.token(stream, state.inner);
          }
        }
      },
      innerMode : function(state) {
        return {
          mode : curMode(state),
          state : state.inner
        };
      },
      blankLine : function(state) {
        var mode = curMode(state);
        if (mode.blankLine) {
          return mode.blankLine(state.inner);
        }
      }
    };
  });
});

