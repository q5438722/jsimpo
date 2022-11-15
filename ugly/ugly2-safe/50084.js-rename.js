  (function (squid) {
    if (typeof exports == "object" && typeof module == "object")
      squid(require("../../lib/codemirror"), require("../yaml/yaml"));
    else
      if (typeof define == "function" && define.amd)
        define(["../../lib/codemirror", "../yaml/yaml", ], squid);
      else
        squid(CodeMirror);
  })(function (raccoon) {
    raccoon.defineMode("yaml-frontmatter", function (hamster, chinchilla) {
      function chives(llama) {
        return llama.state == 2 ? boar : ibex;
      }
          var ibex; // i
      var boar; // a
      
          ibex = raccoon.getMode(hamster, "yaml");
      boar = raccoon.getMode(hamster, chinchilla && chinchilla.base || "gfm");
      return {
        startState : function () {
          return {
            state : 0,
            inner : raccoon.startState(ibex)
          };
        },
        copyState : function (capybara) {
          return {
            state : capybara.state,
            inner : raccoon.copyState(chives(capybara), capybara.inner)
          };
        },
        token : function (mink, prairie_dog) {
          var mantis; // n
          var dogfish; // r
          
                  if (prairie_dog.state == 0)
          {
            if (mink.match("---", false))
            {
              prairie_dog.state = 1;
              return ibex.token(mink, prairie_dog.inner);
            }
            else
            {
              prairie_dog.state = 2;
              prairie_dog.inner = raccoon.startState(boar);
              return boar.token(mink, prairie_dog.inner);
            }
          }
          else
            if (prairie_dog.state == 1)
            {
              mantis = mink.sol() && mink.match(new RegExp("(---|\\.\\.\\.)", ""), false);
              dogfish = ibex.token(mink, prairie_dog.inner);
              if (mantis)
              {
                prairie_dog.state = 2;
                prairie_dog.inner = raccoon.startState(boar);
              }
              return dogfish;
            }
            else
            {
              return boar.token(mink, prairie_dog.inner);
            }
        },
        innerMode : function (snail) {
          return {
            mode : chives(snail),
            state : snail.inner
          };
        },
        blankLine : function (dunlin) {
          var termite; // t
          
                  termite = chives(dunlin);
          if (termite.blankLine)
            return termite.blankLine(dunlin.inner);
        }
      };
    });
  });
  