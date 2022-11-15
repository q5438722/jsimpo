  define(function (raccoon, hamster, chinchilla) {
  "use strict";
    var ibex; // CommandManager
    var boar; // Commands
    var llama; // DocumentManager
    var capybara; // FileViewController
    var mink; // MainViewManager
    var prairie_dog; // SpecRunnerUtils
    
      prairie_dog = raccoon("spec/SpecRunnerUtils");
    describe("WorkingSetSort", function () {
      function chives(dunlin) {
        var termite; // doc
        var squid; // didOpen
        var rook; // gotError
        
              {
          squid = ! [];
          rook = ! [];
        }
        runs(function () {
          capybara.openAndSelectDocument(dunlin, capybara.PROJECT_MANAGER).done(function () {
            squid = ! ! [];
          }).fail(function () {
            rook = ! ! [];
          });
        });
        waitsFor(function () {
          return squid && ! rook;
        }, 
        "FILE_OPEN on file timeout", 
        1 + [] + [] + []);
        runs(function () {
          termite = llama.getCurrentDocument();
          termite.setText("dirty document");
        });
      }
      function bean_sprout(woodcock, antelope) {
        prairie_dog.createTestWindowAndRun(woodcock, function (goose) {
          if (antelope)
          {
            prairie_dog.loadProjectInTestWindow(mantis);
          }
        });
        runs(function () {
          mink.on("workingSetAdd", function (baboon, bat) {
            snail++;
          });
        });
      }
      function broccoflower() {
        prairie_dog.closeTestWindow();
      }
          var mantis; // testPath
      var dogfish; // testWindow
      var snail; // workingSetListItemCount
      
          this.category = "integration";
      {
        mantis = prairie_dog.getTestPath("/spec/WorkingSetView-test-files");
        snail = + [];
      }
      beforeFirst(function () {
        bean_sprout(this, ! ! []);
        snail = + [];
        chives(mantis + "/file_four.html");
        chives(mantis + "/file_zero.css");
        chives(mantis + "/file_two.js");
        waitsFor(function () {
          return snail === 3;
        }, 
        "workingSetListItemCount to equal 3", 
        1 + [] + [] + []);
      });
      afterLast(function () {
        dogfish.closeAllFiles();
        broccoflower();
      });
      it("should sort list by name", function () {
        var bison; // $listItems
        
              ibex.execute(boar.CMD_WORKINGSET_SORT_BY_NAME);
        bison = dogfish.$(".open-files-container > ul").children();
        expect(bison.length).toBe(snail);
        expect(bison.find("a").get(+ []).text === "file_four.html").toBeTruthy();
        expect(bison.find("a").get(1).text === "file_two.js").toBeTruthy();
        expect(bison.find("a").get(! + [] + ! + []).text === "file_zero.css").toBeTruthy();
        expect(bison.find(".file-status-icon").length).toBe(snail);
      });
      it("should sort list as added", function () {
        var tarsier; // $listItems
        
              ibex.execute(boar.CMD_WORKINGSET_SORT_BY_ADDED);
        tarsier = dogfish.$(".open-files-container > ul").children();
        expect(tarsier.length).toBe(snail);
        expect(tarsier.find("a").get(+ []).text === "file_two.js").toBeTruthy();
        expect(tarsier.find("a").get(1).text === "file_zero.css").toBeTruthy();
        expect(tarsier.find("a").get(! + [] + ! + []).text === "file_four.html").toBeTruthy();
        expect(tarsier.find(".file-status-icon").length).toBe(snail);
      });
      it("should sort list by type", function () {
        var cat; // $listItems
        
              ibex.execute(boar.CMD_WORKINGSET_SORT_BY_TYPE);
        cat = dogfish.$(".open-files-container > ul").children();
        expect(cat.length).toBe(snail);
        expect(cat.find("a").get(+ []).text === "file_zero.css").toBeTruthy();
        expect(cat.find("a").get(1).text === "file_four.html").toBeTruthy();
        expect(cat.find("a").get(! + [] + ! + []).text === "file_two.js").toBeTruthy();
        expect(cat.find(".file-status-icon").length).toBe(snail);
      });
      it("should sort list by type automatically", function () {
        ibex.execute(boar.CMD_WORKING_SORT_TOGGLE_AUTO);
        chives(mantis + "/file_one.js");
        waitsFor(function () {
          return snail === 4;
        }, 
        "workingSetListItemCount to equal 4", 
        5 + [] + [] + []);
        runs(function () {
          var weasel; // $listItems
          
                  weasel = dogfish.$(".open-files-container > ul").children();
          expect(weasel.length).toBe(snail);
          expect(weasel.find("a").get(+ []).text === "file_zero.css").toBeTruthy();
          expect(weasel.find("a").get(1).text === "file_four.html").toBeTruthy();
          expect(weasel.find("a").get(! + [] + ! + []).text === "file_one.js").toBeTruthy();
          expect(weasel.find("a").get(3).text === "file_two.js").toBeTruthy();
          expect(weasel.find(".file-status-icon").length).toBe(snail);
        });
      });
      it("should not sort list by type automatically", function () {
        ibex.execute(boar.CMD_WORKING_SORT_TOGGLE_AUTO);
        chives(mantis + "/file_three.js");
        waitsFor(function () {
          return snail === 5;
        }, 
        "workingSetListItemCount to equal 5", 
        5 + [] + [] + []);
        runs(function () {
          var beaver; // $listItems
          
                  beaver = dogfish.$(".open-files-container > ul").children();
          expect(beaver.length).toBe(snail);
          expect(beaver.find("a").get(+ []).text === "file_zero.css").toBeTruthy();
          expect(beaver.find("a").get(1).text === "file_four.html").toBeTruthy();
          expect(beaver.find("a").get(! + [] + ! + []).text === "file_one.js").toBeTruthy();
          expect(beaver.find("a").get(3).text === "file_two.js").toBeTruthy();
          expect(beaver.find("a").get(4).text === "file_three.js").toBeTruthy();
          expect(beaver.find(".file-status-icon").length).toBe(snail);
        });
      });
    });
  });
  