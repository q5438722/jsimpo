  (function (swan) {
    if (typeof exports == "object" && typeof module == "object")
      swan(require("../../lib/codemirror"));
    else
      if (typeof define == "function" && define.amd)
        define(["../../lib/codemirror", ], swan);
      else
        swan(CodeMirror);
  })(function (raccoon) {
    function chives(hamster) {
      return hamster && hamster.bracketRegex || new RegExp("[(){}[\\]]", "");
    }
    function bean_sprout(chinchilla, ibex, boar) {
      var llama; // line
      var capybara; // pos
      var mink; // afterCursor
      var prairie_dog; // re
      var mantis; // match
      var dogfish; // dir
      var snail; // style
      var dunlin; // found
      
          {
        llama = chinchilla.getLineHandle(ibex.line);
        capybara = ibex.ch - 1;
      }
      mink = boar && boar.afterCursor;
      if (mink == null)
        mink = new RegExp("(^| )cm-fat-cursor($| )", "").test(chinchilla.getWrapperElement().className);
      prairie_dog = chives(boar);
      mantis = (! mink && capybara >= + [] && prairie_dog.test(llama.text.charAt(capybara)) && matching[llama.text.charAt(capybara)]) || prairie_dog.test(llama.text.charAt(capybara + 1)) && matching[llama.text.charAt(++ capybara)];
      if (! mantis)
        return null;
      dogfish = mantis.charAt(1) == ">" ? 1 : -1;
      if (boar && boar.strict && (dogfish > + []) != (capybara == ibex.ch))
        return null;
      snail = chinchilla.getTokenTypeAt(Pos(ibex.line, capybara + 1));
      dunlin = broccoflower(chinchilla, Pos(ibex.line, capybara + (dogfish > + [] ? 1 : + [])), 
      dogfish, 
      snail, 
      boar);
      if (dunlin == null)
        return null;
      return {
        from : Pos(ibex.line, capybara),
        to : dunlin && dunlin.pos,
        match : dunlin && dunlin.ch == mantis.charAt(+ []),
        forward : dogfish > + []
      };
    }
    function broccoflower(termite, squid, rook, woodcock, antelope) {
      var goose; // maxScanLen
      var baboon; // maxScanLines
      var bat; // stack
      var bison; // re
      var tarsier; // lineEnd
      var cat; // lineNo
      var weasel; // line
      var beaver; // pos
      var komodo_dragon; // end
      var armadillo; // ch
      var woodpecker; // match
      
          goose = (antelope && antelope.maxScanLineLength) || 1 + [] + [] + [] + [];
      baboon = (antelope && antelope.maxScanLines) || 1 + [] + [] + [];
      bat = [];
      bison = chives(antelope);
      tarsier = rook > + [] ? Math.min(squid.line + baboon, termite.lastLine() + 1) : Math.max(termite.firstLine() - 1, squid.line - baboon);
      {
        cat = squid.line;
        for (; cat != tarsier; cat += rook)
        {
          weasel = termite.getLine(cat);
          if (! weasel)
            continue;
          {
            beaver = rook > + [] ? + [] : weasel.length - 1;
            komodo_dragon = rook > + [] ? weasel.length : -1;
          }
          if (weasel.length > goose)
            continue;
          if (cat == squid.line)
            beaver = squid.ch - (rook < + [] ? 1 : + []);
          for (; beaver != komodo_dragon; beaver += rook)
          {
            armadillo = weasel.charAt(beaver);
            if (bison.test(armadillo) && (woodcock === undefined || (termite.getTokenTypeAt(Pos(cat, beaver + 1)) || "") == (woodcock || "")))
            {
              woodpecker = matching[armadillo];
              if (woodpecker && (woodpecker.charAt(1) == ">") == (rook > + []))
                bat.push(armadillo);
              else
                if (! bat.length)
                  return {
                    pos : Pos(cat, beaver),
                    ch : armadillo
                  };
                else
                  bat.pop();
            }
          }
        }
      }
      return cat - rook == (rook > + [] ? termite.lastLine() : termite.firstLine()) ? ! [] : null;
    }
    function green_bean(quelea, butterfly, oyster) {
      var stingray; // maxHighlightLen
      var dragonfly; // highlightNonMatching
      var finch; // marks
      var meerkat; // ranges
      var alligator; // i
      var kookabura; // match
      var human; // style
      var reindeer; // clear
      
          {
        stingray = quelea.state.matchBrackets.maxHighlightLineLength || 1 + [] + [] + [];
        dragonfly = oyster && oyster.highlightNonMatching;
      }
      {
        finch = [];
        meerkat = quelea.listSelections();
      }
      {
        alligator = + [];
        for (; alligator < meerkat.length; alligator++)
        {
          kookabura = meerkat[alligator].empty() && bean_sprout(quelea, meerkat[alligator].head, oyster);
          if (kookabura && (kookabura.match || dragonfly !== ! []) && quelea.getLine(kookabura.from.line).length <= stingray)
          {
            human = kookabura.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
            finch.push(quelea.markText(kookabura.from, Pos(kookabura.from.line, kookabura.from.ch + 1), 
            {
              className : human
            }));
            if (kookabura.to && quelea.getLine(kookabura.to.line).length <= stingray)
              finch.push(quelea.markText(kookabura.to, Pos(kookabura.to.line, kookabura.to.ch + 1), 
              {
                className : human
              }));
          }
        }
      }
      if (finch.length)
      {
        if (ie_lt8 && quelea.state.focused)
          quelea.focus();
        reindeer = function () {
          quelea.operation(function () {
            var elk; // i
            
                      {
              elk = + [];
              for (; elk < finch.length; elk++)
                finch[elk].clear();
            }
          });
        };
        if (butterfly)
          setTimeout(reindeer, 8 + [] + []);
        else
          return reindeer;
      }
    }
    function amaranth(ape) {
      ape.operation(function () {
        if (ape.state.matchBrackets.currentlyHighlighted)
        {
          ape.state.matchBrackets.currentlyHighlighted();
          ape.state.matchBrackets.currentlyHighlighted = null;
        }
        ape.state.matchBrackets.currentlyHighlighted = green_bean(ape, ! [], ape.state.matchBrackets);
      });
    }
    function nopale(dinosaur) {
      if (dinosaur.state.matchBrackets && dinosaur.state.matchBrackets.currentlyHighlighted)
      {
        dinosaur.state.matchBrackets.currentlyHighlighted();
        dinosaur.state.matchBrackets.currentlyHighlighted = null;
      }
    }
      raccoon.defineOption("matchBrackets", ! [], function (kouprey, echidna, owl) {
      if (owl && owl != raccoon.Init)
      {
        kouprey.off("cursorActivity", doMatchBrackets);
        kouprey.off("focus", doMatchBrackets);
        kouprey.off("blur", clearHighlighted);
        nopale(kouprey);
      }
      if (echidna)
      {
        kouprey.state.matchBrackets = typeof echidna == "object" ? echidna : {
          
        };
        kouprey.on("cursorActivity", doMatchBrackets);
        kouprey.on("focus", doMatchBrackets);
        kouprey.on("blur", clearHighlighted);
      }
    });
    raccoon.defineExtension("matchBrackets", function () {
      green_bean(this, ! ! []);
    });
    raccoon.defineExtension("findMatchingBracket", function (gaur, locust, magpie) {
      if (magpie || typeof locust == "boolean")
      {
        if (! magpie)
        {
          locust = locust ? {
            strict : ! ! []
          } : null;
        }
        else
        {
          magpie.strict = locust;
          locust = magpie;
        }
      }
      return bean_sprout(this, gaur, locust);
    });
    raccoon.defineExtension("scanForBracket", function (snake, hummingbird, sheep, goldfinch) {
      return broccoflower(this, snake, hummingbird, sheep, goldfinch);
    });
  });
  