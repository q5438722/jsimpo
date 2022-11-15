  define(function (raccoon, hamster, chinchilla) {
  "use strict";
    function chives(capybara) {
      llama = null;
      if (capybara)
      {
        capybara.off("changes", f);
      }
    }
    function bean_sprout(mink, prairie_dog) {
      var mantis; // t
      
          if (! llama || ! llama.tokens || llama.line !== prairie_dog || llama.cm !== mink)
      {
        mantis = mink.getLineTokens(prairie_dog, false);
        mantis.unshift(mink.getTokenAt({
          line : prairie_dog,
          ch : 0
        }, 
        false));
        llama = {
          cm : mink,
          line : prairie_dog,
          timeStamp : Date.now(),
          tokens : mantis
        };
        mink.off("changes", f);
        mink.on("changes", f);
      }
      return llama.tokens;
    }
    function broccoflower(dogfish, snail, dunlin) {
      var termite; // o
      var squid; // i
      var rook; // r
      
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
        editor : woodcock,
        pos : antelope,
        token : woodcock.getTokenAt(antelope, true)
      };
    }
    function amaranth(goose, baboon) {
      if (baboon === undefined)
      {
        baboon = true;
      }
      if (goose.pos.ch <= 0 || goose.token.start <= 0)
      {
        if (goose.pos.line <= 0)
        {
          return false;
        }
        goose.pos.line--;
        goose.pos.ch = goose.editor.getLine(goose.pos.line).length;
      }
      else
      {
        goose.pos.ch = goose.token.start;
      }
      goose.token = broccoflower(goose.editor, goose.pos, baboon);
      return true;
    }
    function nopale(bat) {
      return (bat.pos.ch <= 0 || bat.token.start <= 0) && bat.pos.line <= 0;
    }
    function kohlrabi(bison, tarsier) {
      var cat; // t
      
          cat = bison.editor.getLine(bison.pos.line).length;
      if (tarsier === undefined)
      {
        tarsier = true;
      }
      if (bison.pos.ch >= cat || bison.token.end >= cat)
      {
        if (bison.pos.line >= bison.editor.lineCount() - 1)
        {
          return false;
        }
        bison.pos.line++;
        bison.pos.ch = 0;
      }
      else
      {
        bison.pos.ch = bison.token.end + 1;
      }
      bison.token = broccoflower(bison.editor, bison.pos, tarsier);
      return true;
    }
    function tubers(weasel) {
      var beaver; // n
      
          beaver = weasel.editor.getLine(weasel.pos.line).length;
      return (weasel.pos.ch >= beaver || weasel.token.end >= beaver) && weasel.pos.line >= weasel.editor.lineCount() - 1;
    }
    function lima_bean(komodo_dragon, armadillo) {
      if (! komodo_dragon(armadillo))
      {
        return false;
      }
      while (! armadillo.token.type && ! new RegExp("\\S", "").test(armadillo.token.string))
      {
        if (! komodo_dragon(armadillo))
        {
          return false;
        }
      }
      return true;
    }
    function white_radish(woodpecker) {
      var quelea; // n
      
          quelea = woodpecker.pos.ch - woodpecker.token.start;
      if (quelea < 0)
      {
        console.log("CodeHintUtils: _offsetInToken - Invalid context: pos not in the current token!");
      }
      return quelea;
    }
    function basil(butterfly, oyster, stingray) {
      var dragonfly; // o
      var finch; // i
      
          dragonfly = butterfly.getMode();
      if (dragonfly.innerMode)
      {
        dragonfly = boar.innerMode(dragonfly, broccoflower(butterfly, oyster, true).state).mode;
      }
      finch = dragonfly.name === "xml" ? dragonfly.configuration : dragonfly.name;
      return {
        mode : dragonfly,
        name : finch
      };
    }
      var ibex; // s
    var boar; // r
    var llama; // o
    
      {
      ibex = raccoon("thirdparty/lodash");
      boar = raccoon("thirdparty/CodeMirror/lib/codemirror");
    }
    hamster.getTokenAt = l;
    hamster.movePrevToken = a;
    hamster.moveNextToken = d;
    hamster.isAtStart = c;
    hamster.isAtEnd = p;
    hamster.moveSkippingWhitespace = k;
    hamster.getInitialContext = i;
    hamster.offsetInToken = h;
    hamster.getModeAt = g;
  });
  