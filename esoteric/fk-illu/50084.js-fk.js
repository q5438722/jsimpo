// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function (mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../yaml/yaml"));else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../yaml/yaml"], mod);else // Plain browser env
    mod(CodeMirror);
})(function (CodeMirror) {
  const START = 0;
  const FRONTMATTER = 1;
  const BODY = 2;

  // a mixed mode for Markdown text with an optional YAML front matter

  CodeMirror.defineMode("yaml-frontmatter", function (config, parserConfig) {
    const yamlMode = CodeMirror.getMode(config, "yaml");
    const innerMode = CodeMirror.getMode(config, parserConfig && parserConfig.base || "gfm");


    function curMode(state) {
      return state.state == BODY ? innerMode : yamlMode;
    }

    return {
      startState: function () {
        return {
          state: START,
          inner: CodeMirror.startState(yamlMode)
        };
      },
      copyState: function (state) {
        return {
          state: state.state,
          inner: CodeMirror.copyState(curMode(state), state.inner)
        };
      },
      token: function (stream, state) {
        if (state.state == START) {
          if (stream.match("---", false)) {
            state.state = FRONTMATTER;
            return yamlMode.token(stream, state.inner);
          } else {
            state.state = BODY;
            state.inner = CodeMirror.startState(innerMode);
            return innerMode.token(stream, state.inner);
          }
        } else if (state.state == FRONTMATTER) {
          const end = stream.sol() && stream.match(/(---|\.\.\.)/, false);
          const style = yamlMode.token(stream, state.inner);

          if (end) {
            state.state = BODY;
            state.inner = CodeMirror.startState(innerMode);
          }
          return style;
        } else {
          return innerMode.token(stream, state.inner);
        }
      },
      innerMode: function (state) {
        return { mode: curMode(state), state: state.inner };
      },
      blankLine: function (state) {
        const mode = curMode(state);

        if (mode.blankLine) return mode.blankLine(state.inner);
      }
    };
  });
});
