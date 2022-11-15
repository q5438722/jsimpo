  define(function (raccoon, hamster, chinchilla) {
  "use strict";
    function chives(bat, bison, tarsier) {
      var cat; // t
      
          cat = new $.Deferred;
      if (! bat)
      {
        return cat.reject();
      }
      bat.getReferences(bison, tarsier).done(function (weasel) {
        goose.results = weasel.results;
        goose.numFiles = weasel.numFiles;
        goose.numMatches = weasel.numMatches;
        goose.allResultsAvailable = true;
        goose.setQueryInfo({
          query : weasel.queryInfo,
          caseSensitive : true,
          isRegExp : false
        });
        cat.resolve();
      }).fail(function () {
        cat.reject();
      });
      return cat.promise();
    }
    function bean_sprout() {
      var beaver; // n
      var komodo_dragon; // e
      var armadillo; // r
      var woodpecker; // t
      var quelea; // a
      var butterfly; // i
      var oyster; // o
      var stingray; // s
      
          {
        beaver = mantis.getActiveEditor();
        komodo_dragon = beaver ? beaver.getCursorPos() : null;
        woodpecker = new $.Deferred;
        quelea = squid.REFERENCES_NO_RESULTS;
      }
      {
        oyster = beaver.getLanguageForSelection();
        stingray = rook.getProvidersForLanguageId(oyster.getId());
      }
      stingray.some(function (dragonfly, finch) {
        if (dragonfly.provider.hasReferences(beaver))
        {
          butterfly = dragonfly.provider;
          return true;
        }
      });
      armadillo = chives(butterfly, beaver, komodo_dragon);
      if (armadillo)
      {
        armadillo.done(function () {
          if (baboon)
          {
            baboon.open();
          }
        }).fail(function () {
          if (baboon)
          {
            baboon.close();
          }
          beaver.displayErrorMessageAtCursor(quelea);
          woodpecker.reject();
        });
      }
      else
      {
        if (baboon)
        {
          baboon.close();
        }
        beaver.displayErrorMessageAtCursor(quelea);
        woodpecker.reject();
      }
      return woodpecker.promise();
    }
    function broccoflower() {
      goose.clear();
    }
    function green_bean() {
      if (baboon)
      {
        baboon.close();
      }
    }
    function amaranth(meerkat) {
      var alligator; // r
      var kookabura; // n
      var human; // t
      
          boar.get(prairie_dog.CMD_FIND_ALL_REFERENCES).setEnabled(false);
      if (! meerkat)
      {
        alligator = mantis.getActiveEditor();
        if (alligator)
        {
          meerkat = capybara.getLanguageForPath(alligator.document.file._path).getId();
        }
      }
      kookabura = rook.getProvidersForLanguageId(meerkat);
      kookabura.some(function (reindeer, elk) {
        if (reindeer.provider.hasReferences())
        {
          human = reindeer.provider;
          return true;
        }
      });
      if (human)
      {
        boar.get(prairie_dog.CMD_FIND_ALL_REFERENCES).setEnabled(true);
      }
    }
      var ibex; // t
    var boar; // u
    var llama; // a
    var capybara; // f
    var mink; // c
    var prairie_dog; // g
    var mantis; // l
    var dogfish; // i
    var snail; // o
    var dunlin; // s
    var termite; // d
    var squid; // E
    var rook; // R
    var woodcock; // v
    var antelope; // h
    var goose; // F
    var baboon; // m
    
      {
      ibex = raccoon("utils/AppInit");
      boar = raccoon("command/CommandManager");
      llama = raccoon("view/MainViewManager");
      capybara = raccoon("language/LanguageManager");
      mink = raccoon("document/DocumentManager");
      prairie_dog = raccoon("command/Commands");
      mantis = raccoon("editor/EditorManager");
      dogfish = raccoon("project/ProjectManager");
      snail = raccoon("features/PriorityBasedRegistration").RegistrationHandler;
      dunlin = raccoon("search/SearchResultsView").SearchResultsView;
      termite = raccoon("search/SearchModel").SearchModel;
      squid = raccoon("strings");
    }
    {
      rook = new snail;
      woodcock = rook.registerProvider.bind(rook);
      antelope = rook.removeProvider.bind(rook);
    }
    goose = new termite;
    llama.on("currentFileChange", function (ape, dinosaur, kouprey, echidna, owl) {
      var gaur; // i
      var locust; // o
      var magpie; // s
      
          if (! dinosaur)
      {
        boar.get(prairie_dog.CMD_FIND_ALL_REFERENCES).setEnabled(false);
        return;
      }
      {
        gaur = dinosaur.fullPath;
        locust = capybara.getLanguageForPath(gaur).getId();
      }
      amaranth(locust);
      mink.getDocumentForPath(gaur).done(function (snake) {
        snake.on("languageChanged.reference-in-files", function () {
          var hummingbird; // e
          
                  hummingbird = capybara.getLanguageForPath(snake.file.fullPath).getId();
          amaranth(hummingbird);
        });
      });
      if (! echidna)
      {
        return;
      }
      magpie = echidna.fullPath;
      mink.getDocumentForPath(magpie).done(function (sheep) {
        sheep.off("languageChanged.reference-in-files");
      });
    });
    ibex.htmlReady(function () {
      baboon = new dunlin(goose, "reference-in-files-results", "reference-in-files.results", 
      "reference");
      if (baboon)
      {
        baboon.on("close", function () {
          broccoflower();
        }).on("getNextPage", function () {
          if (goose.hasResults())
          {
            baboon.showNextPage();
          }
        }).on("getLastPage", function () {
          if (goose.hasResults())
          {
            baboon.showLastPage();
          }
        });
      }
    });
    dogfish.on("beforeProjectClose", function () {
      if (baboon)
      {
        baboon.close();
      }
    });
    boar.register(squid.FIND_ALL_REFERENCES, prairie_dog.CMD_FIND_ALL_REFERENCES, 
    P);
    boar.get(prairie_dog.CMD_FIND_ALL_REFERENCES).setEnabled(false);
    hamster.registerFindReferencesProvider = woodcock;
    hamster.removeFindReferencesProvider = antelope;
    hamster.setMenuItemStateForLanguage = M;
    hamster.closeReferencesPanel = _;
  });
  