  (function (woodcock) {
    if (typeof exports == "object" && typeof module == "object")
      woodcock(require("../../lib/codemirror"), require("../yaml/yaml"));
    else
      if (typeof define == "function" && define.amd)
        define(["../../lib/codemirror", "../yaml/yaml", ], woodcock);
      else
        woodcock(CodeMirror);
  })(function (raccoon) {
    var hamster; // START
    var chinchilla; // BODY
    
      {
      hamster = + [];
      chinchilla = ! + [] + ! + [];
    }
    raccoon.defineMode("yaml-frontmatter", function (ibex, boar) {
      function chives(mink) {
        return mink.state == chinchilla ? capybara : llama;
      }
          var llama; // yamlMode
      var capybara; // innerMode
      
          llama = raccoon.getMode(ibex, "yaml");
      capybara = raccoon.getMode(ibex, boar && boar.base || "gfm");
      return {
        startState : function () {
          return {
            state : hamster,
            inner : raccoon.startState(llama)
          };
        },
        copyState : function (prairie_dog) {
          return {
            state : prairie_dog.state,
            inner : raccoon.copyState(chives(prairie_dog), prairie_dog.inner)
          };
        },
        token : function (mantis, dogfish) {
          var snail; // end
          var dunlin; // style
          
                  if (dogfish.state == hamster)
          {
            if (mantis.match('---', ! []))
            {
              dogfish.state = 1;
              return llama.token(mantis, dogfish.inner);
            }
            else
            {
              dogfish.state = chinchilla;
              dogfish.inner = raccoon.startState(capybara);
              return capybara.token(mantis, dogfish.inner);
            }
          }
          else
            if (dogfish.state == 1)
            {
              snail = mantis.sol() && mantis.match(new RegExp("(---|\\.\\.\\.)", ""), ! []);
              dunlin = llama.token(mantis, dogfish.inner);
              if (snail)
              {
                dogfish.state = chinchilla;
                dogfish.inner = raccoon.startState(capybara);
              }
              return dunlin;
            }
            else
            {
              return capybara.token(mantis, dogfish.inner);
            }
        },
        innerMode : function (termite) {
          return {
            mode : chives(termite),
            state : termite.inner
          };
        },
        blankLine : function (squid) {
          var rook; // mode
          
                  rook = chives(squid);
          if (rook.blankLine)
            return rook.blankLine(squid.inner);
        }
      };
    });
  });
  