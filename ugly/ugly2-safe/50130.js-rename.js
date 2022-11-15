  (function (gaur) {
    if (typeof exports == "object" && typeof module == "object")
      gaur(require("../../lib/codemirror"));
    else
      if (typeof define == "function" && define.amd)
        define(["../../lib/codemirror", ], gaur);
      else
        gaur(CodeMirror);
  })(function (raccoon) {
  "use strict";
    raccoon.defineMode("julia", function (hamster, chinchilla) {
      function chives(termite, squid) {
        if (typeof squid === "undefined")
        {
          squid = "\\b";
        }
        return new RegExp("^((" + termite.join(")|(") + "))" + squid);
      }
      function bean_sprout(rook) {
        return rook.nestedArrays > 0;
      }
      function broccoflower(woodcock) {
        return woodcock.nestedGenerators > 0;
      }
      function green_bean(antelope, goose) {
        if (typeof goose === "undefined")
        {
          goose = 0;
        }
        if (antelope.scopes.length <= goose)
        {
          return null;
        }
        return antelope.scopes[antelope.scopes.length - (goose + 1)];
      }
      function amaranth(baboon, bat) {
        var bison; // r
        var tarsier; // n
        var cat; // i
        var weasel; // a
        var beaver; // u
        var komodo_dragon; // s
        
              if (baboon.match("#=", false))
        {
          bat.tokenize = C;
          return bat.tokenize(baboon, bat);
        }
        bison = bat.leavingExpr;
        if (baboon.sol())
        {
          bison = false;
        }
        bat.leavingExpr = false;
        if (bison)
        {
          if (baboon.match(new RegExp("^'+", "")))
          {
            return "operator";
          }
        }
        if (baboon.match(new RegExp("\\.{4,}", "")))
        {
          return "error";
        }
        else
          if (baboon.match(new RegExp("\\.{1,3}", "")))
          {
            return "operator";
          }
        if (baboon.eatSpace())
        {
          return null;
        }
        tarsier = baboon.peek();
        if (tarsier === "#")
        {
          baboon.skipToEnd();
          return "comment";
        }
        if (tarsier === "[")
        {
          bat.scopes.push("[");
          bat.nestedArrays++;
        }
        if (tarsier === "(")
        {
          bat.scopes.push("(");
          bat.nestedGenerators++;
        }
        if (bean_sprout(bat) && tarsier === "]")
        {
          while (bat.scopes.length && green_bean(bat) !== "[")
          {
            bat.scopes.pop();
          }
          bat.scopes.pop();
          bat.nestedArrays--;
          bat.leavingExpr = true;
        }
        if (broccoflower(bat) && tarsier === ")")
        {
          while (bat.scopes.length && green_bean(bat) !== "(")
          {
            bat.scopes.pop();
          }
          bat.scopes.pop();
          bat.nestedGenerators--;
          bat.leavingExpr = true;
        }
        if (bean_sprout(bat))
        {
          if (bat.lastToken == "end" && baboon.match(":"))
          {
            return "operator";
          }
          if (baboon.match("end"))
          {
            return "number";
          }
        }
        if (cat = baboon.match(prairie_dog, false))
        {
          bat.scopes.push(cat[0]);
        }
        if (baboon.match(mantis, false))
        {
          bat.scopes.pop();
        }
        if (baboon.match(new RegExp("^::(?![:\\$])", "")))
        {
          bat.tokenize = _;
          return bat.tokenize(baboon, bat);
        }
        if (! bison && baboon.match(g) || baboon.match(new RegExp(":([<>]:|<<=?|>>>?=?|->|\\/\\/|\\.{2,3}|[\\.\\\\%*+\\-<>!\\/^|&]=?|[~\\?\\$])", 
        "")))
        {
          return "builtin";
        }
        if (baboon.match(o))
        {
          return "operator";
        }
        if (baboon.match(new RegExp("^\\.?\\d", ""), false))
        {
          weasel = RegExp(new RegExp("^im\\b", ""));
          beaver = false;
          if (baboon.match(new RegExp("^0x\\.[0-9a-f_]+p[\\+\\-]?[_\\d]+", "i")))
          {
            beaver = true;
          }
          if (baboon.match(new RegExp("^0x[0-9a-f_]+", "i")))
          {
            beaver = true;
          }
          if (baboon.match(new RegExp("^0b[01_]+", "i")))
          {
            beaver = true;
          }
          if (baboon.match(new RegExp("^0o[0-7_]+", "i")))
          {
            beaver = true;
          }
          if (baboon.match(new RegExp("^(?:(?:\\d[_\\d]*)?\\.(?!\\.)(?:\\d[_\\d]*)?|\\d[_\\d]*\\.(?!\\.)(?:\\d[_\\d]*))?([Eef][\\+\\-]?[_\\d]+)?", 
          "i")))
          {
            beaver = true;
          }
          if (baboon.match(new RegExp("^\\d[_\\d]*(e[\\+\\-]?\\d+)?", "i")))
          {
            beaver = true;
          }
          if (beaver)
          {
            baboon.match(weasel);
            bat.leavingExpr = true;
            return "number";
          }
        }
        if (baboon.match("'"))
        {
          bat.tokenize = D;
          return bat.tokenize(baboon, bat);
        }
        if (baboon.match(x))
        {
          bat.tokenize = lima_bean(baboon.current());
          return bat.tokenize(baboon, bat);
        }
        if (baboon.match(F))
        {
          return "meta";
        }
        if (baboon.match(f))
        {
          return null;
        }
        if (baboon.match(dogfish))
        {
          return "keyword";
        }
        if (baboon.match(snail))
        {
          return "builtin";
        }
        komodo_dragon = bat.isDefinition || bat.lastToken == "function" || bat.lastToken == "macro" || bat.lastToken == "type" || bat.lastToken == "struct" || bat.lastToken == "immutable";
        if (baboon.match(c))
        {
          if (komodo_dragon)
          {
            if (baboon.peek() === ".")
            {
              bat.isDefinition = true;
              return "variable";
            }
            bat.isDefinition = false;
            return "def";
          }
          bat.leavingExpr = true;
          return "variable";
        }
        baboon.next();
        return "error";
      }
      function nopale(armadillo, woodpecker) {
        armadillo.match(new RegExp(".*?(?=[,;{}()=\\s]|$)", ""));
        if (armadillo.match("{"))
        {
          woodpecker.nestedParameters++;
        }
        else
          if (armadillo.match("}") && woodpecker.nestedParameters > 0)
          {
            woodpecker.nestedParameters--;
          }
        if (woodpecker.nestedParameters > 0)
        {
          armadillo.match(new RegExp(".*?(?={|})", "")) || armadillo.next();
        }
        else
          if (woodpecker.nestedParameters == 0)
          {
            woodpecker.tokenize = E;
          }
        return "builtin";
      }
      function kohlrabi(quelea, butterfly) {
        if (quelea.match("#="))
        {
          butterfly.nestedComments++;
        }
        if (! quelea.match(new RegExp(".*?(?=(#=|=#))", "")))
        {
          quelea.skipToEnd();
        }
        if (quelea.match("=#"))
        {
          butterfly.nestedComments--;
          if (butterfly.nestedComments == 0)
            butterfly.tokenize = E;
        }
        return "comment";
      }
      function tubers(oyster, stingray) {
        var dragonfly; // r
        var finch; // n
        var meerkat; // i
        
              dragonfly = false;
        if (oyster.match(ibex))
        {
          dragonfly = true;
        }
        else
          if (finch = oyster.match(new RegExp("\\\\u([a-f0-9]{1,4})(?=')", "i")))
          {
            meerkat = parseInt(finch[1], 16);
            if (meerkat <= 55295 || meerkat >= 57344)
            {
              dragonfly = true;
              oyster.next();
            }
          }
          else
            if (finch = oyster.match(new RegExp("\\\\U([A-Fa-f0-9]{5,8})(?=')", "")))
            {
              meerkat = parseInt(finch[1], 16);
              if (meerkat <= 1114111)
              {
                dragonfly = true;
                oyster.next();
              }
            }
        if (dragonfly)
        {
          stingray.leavingExpr = true;
          stingray.tokenize = E;
          return "string";
        }
        if (! oyster.match(new RegExp("^[^']+(?=')", "")))
        {
          oyster.skipToEnd();
        }
        if (oyster.match("'"))
        {
          stingray.tokenize = E;
        }
        return "error";
      }
      function lima_bean(alligator) {
        function white_radish(kookabura, human) {
          if (kookabura.eat("\\"))
          {
            kookabura.next();
          }
          else
            if (kookabura.match(alligator))
            {
              human.tokenize = E;
              human.leavingExpr = true;
              return "string";
            }
            else
            {
              kookabura.eat(new RegExp("[`\"]", ""));
            }
          kookabura.eatWhile(new RegExp("[^\\\\`\"]", ""));
          return "string";
        }
              if (alligator.substr(-3) === '"""')
        {
          ;
        }
        else
          if (alligator.substr(-1) === '"')
          {
            ;
          }
        return chinchilla;
      }
          var ibex; // s
      var boar; // l
      var llama; // m
      var capybara; // d
      var mink; // p
      var prairie_dog; // h
      var mantis; // v
      var dogfish; // b
      var snail; // k
      var dunlin; // w
      
          ibex = chives(["\\\\[0-7]{1,3}", "\\\\x[A-Fa-f0-9]{1,2}", "\\\\[abefnrtv0%?'\"\\\\]", "([^\'\\\\\uD800-\\uDFFF]|[\\uD800-\\uDFFF][\\uDC00-\\uDFFF])", ], 
      "'");
      boar = ["begin", "function", "type", "struct", "immutable", "let", "macro", "for", "while", "quote", "if", "else", "elseif", "try", "finally", "catch", "do", ];
      llama = ["end", "else", "elseif", "catch", "finally", ];
      capybara = ["if", "else", "elseif", "while", "for", "begin", "let", "end", "do", "try", "catch", "finally", "return", "break", "continue", "global", "local", "const", "export", "import", "importall", "using", "function", "where", "macro", "module", "baremodule", "struct", "type", "mutable", "immutable", "quote", "typealias", "abstract", "primitive", "bitstype", ];
      mink = ["true", "false", "nothing", "NaN", "Inf", ];
      raccoon.registerHelper("hintWords", "julia", capybara.concat(mink));
      prairie_dog = chives(boar);
      mantis = chives(llama);
      dogfish = chives(capybara);
      snail = chives(mink);
      dunlin = {
        startState : function () {
          return {
            tokenize : E,
            scopes : [],
            lastToken : null,
            leavingExpr : false,
            isDefinition : false,
            nestedArrays : 0,
            nestedComments : 0,
            nestedGenerators : 0,
            nestedParameters : 0,
            firstParenPos : -1
          };
        },
        token : function (reindeer, elk) {
          var ape; // r
          var dinosaur; // n
          
                  ape = elk.tokenize(reindeer, elk);
          dinosaur = reindeer.current();
          if (dinosaur && ape)
          {
            elk.lastToken = dinosaur;
          }
          return ape;
        },
        indent : function (kouprey, echidna) {
          var owl; // r
          
                  owl = 0;
          if (echidna === "]" || echidna === ")" || new RegExp("^end\\b", "").test(echidna) || new RegExp("^else", "").test(echidna) || new RegExp("^catch\\b", "").test(echidna) || new RegExp("^elseif\\b", "").test(echidna) || new RegExp("^finally", "").test(echidna))
          {
            owl = -1;
          }
          return (kouprey.scopes.length + owl) * hamster.indentUnit;
        },
        electricInput : new RegExp("\\b(end|else|catch|finally)\\b", ""),
        blockCommentStart : "#=",
        blockCommentEnd : "=#",
        lineComment : "#",
        closeBrackets : '()[]{}""',
        fold : "indent"
      };
      return dunlin;
    });
    raccoon.defineMIME("text/x-julia", "julia");
  });
  