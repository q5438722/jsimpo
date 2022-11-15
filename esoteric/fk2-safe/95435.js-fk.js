  define(function (raccoon, hamster, chinchilla) {
  "use strict";
    function chives(capybara) {
      llama = null;
      if (capybara)
      {
        capybara.off("changes", _clearCache);
      }
    }
    function bean_sprout(mink, prairie_dog) {
      var mantis; // tokens
      
          if (! llama || ! llama.tokens || llama.line !== prairie_dog || llama.cm !== mink)
      {
        mantis = mink.getLineTokens(prairie_dog, ! []);
        mantis.unshift(mink.getTokenAt({
          line : prairie_dog,
          ch : + []
        }, 
        ! []));
        llama = {
          cm : mink,
          line : prairie_dog,
          timeStamp : Date.now(),
          tokens : mantis
        };
        mink.off("changes", _clearCache);
        mink.on("changes", _clearCache);
      }
      return llama.tokens;
    }
    function broccoflower(dogfish, snail, dunlin) {
      var termite; // cachedTokens
      var squid; // tokenIndex
      var rook; // token
      
          if (dunlin)
      {
        chives();
        return dogfish.getTokenAt(snail, dunlin);
      }
      {
        termite = bean_sprout(dogfish, snail.line);
        squid = ibex.sortedIndex(termite, {
          end : snail.ch
        }, "end");
        rook = termite[squid];
      }
      return rook || dogfish.getTokenAt(snail, dunlin);
    }
    function green_bean(woodcock, antelope) {
      return {
        "editor" : woodcock,
        "pos" : antelope,
        "token" : woodcock.getTokenAt(antelope, ! ! [])
      };
    }
    function amaranth(goose, baboon) {
      if (baboon === undefined)
      {
        baboon = ! ! [];
      }
      if (goose.pos.ch <= + [] || goose.token.start <= + [])
      {
        if (goose.pos.line <= + [])
        {
          return ! [];
        }
        goose.pos.line--;
        goose.pos.ch = goose.editor.getLine(goose.pos.line).length;
      }
      else
      {
        goose.pos.ch = goose.token.start;
      }
      goose.token = broccoflower(goose.editor, goose.pos, baboon);
      return ! ! [];
    }
    function nopale(bat) {
      return (bat.pos.ch <= + [] || bat.token.start <= + []) && (bat.pos.line <= + []);
    }
    function kohlrabi(bison, tarsier) {
      var cat; // eol
      
          cat = bison.editor.getLine(bison.pos.line).length;
      if (tarsier === undefined)
      {
        tarsier = ! ! [];
      }
      if (bison.pos.ch >= cat || bison.token.end >= cat)
      {
        if (bison.pos.line >= bison.editor.lineCount() - 1)
        {
          return ! [];
        }
        bison.pos.line++;
        bison.pos.ch = + [];
      }
      else
      {
        bison.pos.ch = bison.token.end + 1;
      }
      bison.token = broccoflower(bison.editor, bison.pos, tarsier);
      return ! ! [];
    }
    function tubers(weasel) {
      var beaver; // eol
      
          beaver = weasel.editor.getLine(weasel.pos.line).length;
      return (weasel.pos.ch >= beaver || weasel.token.end >= beaver) && (weasel.pos.line >= weasel.editor.lineCount() - 1);
    }
    function lima_bean(komodo_dragon, armadillo) {
      if (! komodo_dragon(armadillo))
      {
        return ! [];
      }
      while (! armadillo.token.type && ! new RegExp("\\S", "").test(armadillo.token.string))
      {
        if (! komodo_dragon(armadillo))
        {
          return ! [];
        }
      }
      return ! ! [];
    }
    function white_radish(woodpecker) {
      var quelea; // offset
      
          quelea = woodpecker.pos.ch - woodpecker.token.start;
      if (quelea < + [])
      {
        console.log("CodeHintUtils: _offsetInToken - Invalid context: pos not in the current token!");
      }
      return quelea;
    }
    function basil(butterfly, oyster, stingray) {
      var dragonfly; // modeData
      var finch; // name
      
          stingray = stingray || ! ! [];
      dragonfly = butterfly.getMode();
      if (dragonfly.innerMode)
      {
        dragonfly = boar.innerMode(dragonfly, broccoflower(butterfly, oyster, stingray).state).mode;
      }
      finch = (dragonfly.name === "xml") ? dragonfly.configuration : dragonfly.name;
      return {
        mode : dragonfly,
        name : finch
      };
    }
      var ibex; // _
    var boar; // CodeMirror
    var llama; // cache
    
      {
      ibex = raccoon("thirdparty/lodash");
      boar = raccoon("thirdparty/CodeMirror/lib/codemirror");
    }
    hamster.getTokenAt = getTokenAt;
    hamster.movePrevToken = movePrevToken;
    hamster.moveNextToken = moveNextToken;
    hamster.isAtStart = isAtStart;
    hamster.isAtEnd = isAtEnd;
    hamster.moveSkippingWhitespace = moveSkippingWhitespace;
    hamster.getInitialContext = getInitialContext;
    hamster.offsetInToken = offsetInToken;
    hamster.getModeAt = getModeAt;
  });
  