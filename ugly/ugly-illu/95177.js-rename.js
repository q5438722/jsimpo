define(function (t, e, n) {
  "use strict";
  var l;
  var u;
  var c;
  var s;
  var f;
  const a = t("spec/SpecRunnerUtils");
  describe("WorkingSetSort", function () {
    this.category = "integration";const n = a.getTestPath("/spec/WorkingSetView-test-files");
    var i;
    var o = 0;
    function t(t) {
      var e;
      var n = false;
      var i = false;
      runs(function () {
        s.openAndSelectDocument(t, s.PROJECT_MANAGER).done(function () {
          n = true;
        }).fail(function () {
          i = true;
        });
      });waitsFor(function () {
        return n && !i;
      }, "FILE_OPEN on file timeout", 1e3);runs(function () {
        e = c.getCurrentDocument();e.setText("dirty document");
      });
    }function e(t, e) {
      a.createTestWindowAndRun(t, function (t) {
        i = t;l = i.brackets.test.CommandManager;u = i.brackets.test.Commands;c = i.brackets.test.DocumentManager;s = i.brackets.test.FileViewController;f = i.brackets.test.MainViewManager;if (e) {
          a.loadProjectInTestWindow(n);
        }
      });runs(function () {
        f.on("workingSetAdd", function (t, e) {
          o++;
        });
      });
    }function r() {
      i = null;l = null;u = null;c = null;s = null;f = null;a.closeTestWindow();
    }beforeFirst(function () {
      e(this, true);o = 0;t(n + "/file_four.html");t(n + "/file_zero.css");t(n + "/file_two.js");waitsFor(function () {
        return o === 3;
      }, "workingSetListItemCount to equal 3", 1e3);
    });afterLast(function () {
      i.closeAllFiles();i = null;l = null;u = null;c = null;s = null;f = null;a.closeTestWindow();
    });it("should sort list by name", function () {
      l.execute(u.CMD_WORKINGSET_SORT_BY_NAME);const t = i.$(".open-files-container > ul").children();
      expect(t.length).toBe(o);expect(t.find("a").get(0).text === "file_four.html").toBeTruthy();expect(t.find("a").get(1).text === "file_two.js").toBeTruthy();expect(t.find("a").get(2).text === "file_zero.css").toBeTruthy();expect(t.find(".file-status-icon").length).toBe(o);
    });it("should sort list as added", function () {
      l.execute(u.CMD_WORKINGSET_SORT_BY_ADDED);const t = i.$(".open-files-container > ul").children();
      expect(t.length).toBe(o);expect(t.find("a").get(0).text === "file_two.js").toBeTruthy();expect(t.find("a").get(1).text === "file_zero.css").toBeTruthy();expect(t.find("a").get(2).text === "file_four.html").toBeTruthy();expect(t.find(".file-status-icon").length).toBe(o);
    });it("should sort list by type", function () {
      l.execute(u.CMD_WORKINGSET_SORT_BY_TYPE);const t = i.$(".open-files-container > ul").children();
      expect(t.length).toBe(o);expect(t.find("a").get(0).text === "file_zero.css").toBeTruthy();expect(t.find("a").get(1).text === "file_four.html").toBeTruthy();expect(t.find("a").get(2).text === "file_two.js").toBeTruthy();expect(t.find(".file-status-icon").length).toBe(o);
    });it("should sort list by type automatically", function () {
      l.execute(u.CMD_WORKING_SORT_TOGGLE_AUTO);t(n + "/file_one.js");waitsFor(function () {
        return o === 4;
      }, "workingSetListItemCount to equal 4", 5e3);runs(function () {
        const t = i.$(".open-files-container > ul").children();
        expect(t.length).toBe(o);expect(t.find("a").get(0).text === "file_zero.css").toBeTruthy();expect(t.find("a").get(1).text === "file_four.html").toBeTruthy();expect(t.find("a").get(2).text === "file_one.js").toBeTruthy();expect(t.find("a").get(3).text === "file_two.js").toBeTruthy();expect(t.find(".file-status-icon").length).toBe(o);
      });
    });it("should not sort list by type automatically", function () {
      l.execute(u.CMD_WORKING_SORT_TOGGLE_AUTO);t(n + "/file_three.js");waitsFor(function () {
        return o === 5;
      }, "workingSetListItemCount to equal 5", 5e3);runs(function () {
        const t = i.$(".open-files-container > ul").children();
        expect(t.length).toBe(o);expect(t.find("a").get(0).text === "file_zero.css").toBeTruthy();expect(t.find("a").get(1).text === "file_four.html").toBeTruthy();expect(t.find("a").get(2).text === "file_one.js").toBeTruthy();expect(t.find("a").get(3).text === "file_two.js").toBeTruthy();expect(t.find("a").get(4).text === "file_three.js").toBeTruthy();expect(t.find(".file-status-icon").length).toBe(o);
      });
    });
  });
});
