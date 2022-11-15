'use strict';
define(function(require, canCreateDiscussions, n) {
  var CommandManager;
  var Commands;
  var DocumentManager;
  var FileViewController;
  var MainViewManager;
  var SpecRunnerUtils = require("spec/SpecRunnerUtils");
  describe("WorkingSetSort", function() {
    function openAndMakeDirty(path) {
      var popDownloadSinceValue;
      var n = false;
      var guard = false;
      runs(function() {
        FileViewController.openAndSelectDocument(path, FileViewController.PROJECT_MANAGER).done(function() {
          n = true;
        }).fail(function() {
          guard = true;
        });
      });
      waitsFor(function() {
        return n && !guard;
      }, "FILE_OPEN on file timeout", 1e3);
      runs(function() {
        popDownloadSinceValue = DocumentManager.getCurrentDocument();
        popDownloadSinceValue.setText("dirty document");
      });
    }
    function createTestWindow(spec, imple) {
      SpecRunnerUtils.createTestWindowAndRun(spec, function(w) {
        testWindow = w;
        CommandManager = testWindow.brackets.test.CommandManager;
        Commands = testWindow.brackets.test.Commands;
        DocumentManager = testWindow.brackets.test.DocumentManager;
        FileViewController = testWindow.brackets.test.FileViewController;
        MainViewManager = testWindow.brackets.test.MainViewManager;
        if (imple) {
          SpecRunnerUtils.loadProjectInTestWindow(testPath);
        }
      });
      runs(function() {
        MainViewManager.on("workingSetAdd", function(canCreateDiscussions, isSlidingUp) {
          testValueLabel++;
        });
      });
    }
    function closeTestWindow() {
      testWindow = null;
      CommandManager = null;
      Commands = null;
      DocumentManager = null;
      FileViewController = null;
      MainViewManager = null;
      SpecRunnerUtils.closeTestWindow();
    }
    this.category = "integration";
    var testPath = SpecRunnerUtils.getTestPath("/spec/WorkingSetView-test-files");
    var testWindow;
    var testValueLabel = 0;
    beforeFirst(function() {
      createTestWindow(this, true);
      testValueLabel = 0;
      openAndMakeDirty(testPath + "/file_four.html");
      openAndMakeDirty(testPath + "/file_zero.css");
      openAndMakeDirty(testPath + "/file_two.js");
      waitsFor(function() {
        return testValueLabel === 3;
      }, "workingSetListItemCount to equal 3", 1e3);
    });
    afterLast(function() {
      testWindow.closeAllFiles();
      closeTestWindow();
    });
    it("should sort list by name", function() {
      CommandManager.execute(Commands.CMD_WORKINGSET_SORT_BY_NAME);
      var t = testWindow.$(".open-files-container > ul").children();
      expect(t.length).toBe(testValueLabel);
      expect(t.find("a").get(0).text === "file_four.html").toBeTruthy();
      expect(t.find("a").get(1).text === "file_two.js").toBeTruthy();
      expect(t.find("a").get(2).text === "file_zero.css").toBeTruthy();
      expect(t.find(".file-status-icon").length).toBe(testValueLabel);
    });
    it("should sort list as added", function() {
      CommandManager.execute(Commands.CMD_WORKINGSET_SORT_BY_ADDED);
      var t = testWindow.$(".open-files-container > ul").children();
      expect(t.length).toBe(testValueLabel);
      expect(t.find("a").get(0).text === "file_two.js").toBeTruthy();
      expect(t.find("a").get(1).text === "file_zero.css").toBeTruthy();
      expect(t.find("a").get(2).text === "file_four.html").toBeTruthy();
      expect(t.find(".file-status-icon").length).toBe(testValueLabel);
    });
    it("should sort list by type", function() {
      CommandManager.execute(Commands.CMD_WORKINGSET_SORT_BY_TYPE);
      var t = testWindow.$(".open-files-container > ul").children();
      expect(t.length).toBe(testValueLabel);
      expect(t.find("a").get(0).text === "file_zero.css").toBeTruthy();
      expect(t.find("a").get(1).text === "file_four.html").toBeTruthy();
      expect(t.find("a").get(2).text === "file_two.js").toBeTruthy();
      expect(t.find(".file-status-icon").length).toBe(testValueLabel);
    });
    it("should sort list by type automatically", function() {
      CommandManager.execute(Commands.CMD_WORKING_SORT_TOGGLE_AUTO);
      openAndMakeDirty(testPath + "/file_one.js");
      waitsFor(function() {
        return testValueLabel === 4;
      }, "workingSetListItemCount to equal 4", 5e3);
      runs(function() {
        var t = testWindow.$(".open-files-container > ul").children();
        expect(t.length).toBe(testValueLabel);
        expect(t.find("a").get(0).text === "file_zero.css").toBeTruthy();
        expect(t.find("a").get(1).text === "file_four.html").toBeTruthy();
        expect(t.find("a").get(2).text === "file_one.js").toBeTruthy();
        expect(t.find("a").get(3).text === "file_two.js").toBeTruthy();
        expect(t.find(".file-status-icon").length).toBe(testValueLabel);
      });
    });
    it("should not sort list by type automatically", function() {
      CommandManager.execute(Commands.CMD_WORKING_SORT_TOGGLE_AUTO);
      openAndMakeDirty(testPath + "/file_three.js");
      waitsFor(function() {
        return testValueLabel === 5;
      }, "workingSetListItemCount to equal 5", 5e3);
      runs(function() {
        var t = testWindow.$(".open-files-container > ul").children();
        expect(t.length).toBe(testValueLabel);
        expect(t.find("a").get(0).text === "file_zero.css").toBeTruthy();
        expect(t.find("a").get(1).text === "file_four.html").toBeTruthy();
        expect(t.find("a").get(2).text === "file_one.js").toBeTruthy();
        expect(t.find("a").get(3).text === "file_two.js").toBeTruthy();
        expect(t.find("a").get(4).text === "file_three.js").toBeTruthy();
        expect(t.find(".file-status-icon").length).toBe(testValueLabel);
      });
    });
  });
});

