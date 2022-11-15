define(function (t, e, n) {
  "use strict";
  t("utils/Global");if (brackets.inBrowser) {
    return;
  }describe("Native Menus", function () {
    const t = "placeholder";
    const u = "MENU";
    const a = "TEST";
    const i = "test";
    const s = "Item 1";
    const f = "item1";
    it("should have a brackets.app namespace", function () {
      var e = false;
      var n = 0;
      expect(brackets.app).toBeTruthy();runs(function () {
        brackets.app.addMenu(u, t, "", "", function (t) {
          e = true;n = t;
        });
      });waitsFor(function () {
        return e;
      });expect(n).toBe(0);
    });describe("addMenu", function () {
      it("should add a menu", function () {
        var n = false;
        var u = 0;
        var r;
        runs(function () {
          brackets.app.getMenuTitle(i, function (t) {
            n = true;u = t;
          });
        });waitsFor(function () {
          return n;
        });runs(function () {
          expect(u).toBe(brackets.fs.ERR_NOT_FOUND);
        });runs(function () {
          n = false;brackets.app.addMenu(a, i, "", "", function (t) {
            n = true;u = t;
          });
        });waitsFor(function () {
          return n;
        });runs(function () {
          expect(u).toBe(0);
        });runs(function () {
          n = false;brackets.app.getMenuTitle(i, function (t, e) {
            n = true;u = t;r = e;
          });
        });waitsFor(function () {
          return n;
        });runs(function () {
          expect(u).toBe(0);expect(r).toBe(a);
        });runs(function () {
          n = false;brackets.app.removeMenu(i, function (t) {
            n = true;
          });
        });waitsFor(function () {
          return n;
        });
      });it("should return an error if invalid parameters are passed", function () {
        var e = false;
        var n = 0;
        runs(function () {
          brackets.app.addMenu(a, i, 42, "", function (t) {
            e = true;n = t;
          });
        });waitsFor(function () {
          return e;
        });runs(function () {
          expect(n).toBe(brackets.fs.ERR_INVALID_PARAMS);
        });
      });
    });describe("addMenu (with reference)", function () {
      var r = false;
      var o = 0;
      var c;
      var s = -1;
      beforeEach(function () {
        runs(function () {
          r = false;brackets.app.addMenu(a, i, "", "", function (t) {
            r = true;o = t;
          });
        });waitsFor(function () {
          return r;
        });runs(function () {
          expect(o).toBe(0);
        });
      });afterEach(function () {
        runs(function () {
          r = false;brackets.app.removeMenu(i, function (t) {
            r = true;o = t;
          });
        });waitsFor(function () {
          return r;
        });runs(function () {
          expect(o).toBe(0);
        });
      });it("should add new menu in last position of list", function () {
        o = 0;runs(function () {
          r = false;brackets.app.addMenu("Custom1", "menu-unittest1", "", "", function (t) {
            r = true;o = t;
          });
        });waitsFor(function () {
          return r;
        });runs(function () {
          expect(o).toBe(0);
        });runs(function () {
          r = false;c = null;s = -1;brackets.app.getMenuPosition("menu-unittest1", function (t, e, n) {
            r = true;o = t;c = e;s = n;
          });
        });waitsFor(function () {
          return r;
        });runs(function () {
          expect(o).toBe(0);expect(c).toBe("");expect(s).toBeGreaterThan(0);
        });runs(function () {
          r = false;brackets.app.removeMenu("menu-unittest1", function (t) {
            r = true;o = t;
          });
        });waitsFor(function () {
          return r;
        });runs(function () {
          expect(o).toBe(0);
        });
      });it("should add new menu after reference menu", function () {
        var u = -1;
        o = 0;runs(function () {
          r = false;brackets.app.addMenu("CustomFirst", "menu-unittest-first", "first", "", function (t) {
            r = true;o = t;
          });
        });waitsFor(function () {
          return r;
        });runs(function () {
          expect(o).toBe(0);
        });runs(function () {
          r = false;brackets.app.addMenu("CustomAfter", "menu-unittest-after", "after", "menu-unittest-first", function (t) {
            r = true;o = t;
          });
        });waitsFor(function () {
          return r;
        });runs(function () {
          expect(o).toBe(0);
        });runs(function () {
          r = false;c = null;s = -1;u = -1;brackets.app.getMenuPosition("menu-unittest-first", function (t, e, n) {
            r = true;o = t;c = e;s = n;u = s + 1;
          });
        });waitsFor(function () {
          return r;
        });runs(function () {
          expect(o).toBe(0);expect(c).toBe("");
        });runs(function () {
          r = false;c = null;s = -1;brackets.app.getMenuPosition("menu-unittest-after", function (t, e, n) {
            r = true;o = t;c = e;s = n;
          });
        });waitsFor(function () {
          return r;
        });runs(function () {
          expect(o).toBe(0);expect(c).toBe("");expect(s).toBe(u);
        });runs(function () {
          r = false;brackets.app.removeMenu("menu-unittest-first", function (t) {
            r = true;
          });
        });waitsFor(function () {
          return r;
        });runs(function () {
          r = false;brackets.app.removeMenu("menu-unittest-after", function (t) {
            r = true;
          });
        });waitsFor(function () {
          return r;
        });
      });it("should add new menu before reference menu", function () {
        var u = -1;
        o = 0;runs(function () {
          r = false;brackets.app.addMenu("CustomLast", "menu-unittest-last", "last", "", function (t) {
            r = true;o = t;
          });
        });waitsFor(function () {
          return r;
        });runs(function () {
          expect(o).toBe(0);
        });runs(function () {
          r = false;brackets.app.addMenu("CustomBefore", "menu-unittest-before", "before", "menu-unittest-last", function (t) {
            r = true;o = t;
          });
        });waitsFor(function () {
          return r;
        });runs(function () {
          expect(o).toBe(0);
        });runs(function () {
          r = false;c = null;s = -1;u = -1;brackets.app.getMenuPosition("menu-unittest-last", function (t, e, n) {
            r = true;o = t;c = e;s = n;u = s - 1;
          });
        });waitsFor(function () {
          return r;
        });runs(function () {
          expect(o).toBe(0);expect(c).toBe("");
        });runs(function () {
          r = false;c = null;s = -1;brackets.app.getMenuPosition("menu-unittest-before", function (t, e, n) {
            r = true;o = t;c = e;s = n;
          });
        });waitsFor(function () {
          return r;
        });runs(function () {
          expect(o).toBe(0);expect(c).toBe("");expect(s).toBe(u);
        });runs(function () {
          r = false;brackets.app.removeMenu("menu-unittest-last", function (t) {
            r = true;
          });
        });waitsFor(function () {
          return r;
        });runs(function () {
          r = false;brackets.app.removeMenu("menu-unittest-before", function (t) {
            r = true;
          });
        });waitsFor(function () {
          return r;
        });
      });it("should add new menu at end of list when reference menu doesn't exist", function () {
        o = 0;runs(function () {
          r = false;brackets.app.addMenu("Custom4", "menu-unittest4", "after", "NONEXISTANT", function (t) {
            r = true;o = t;
          });
        });waitsFor(function () {
          return r;
        });runs(function () {
          expect(o).toBe(brackets.fs.ERR_NOT_FOUND);
        });runs(function () {
          r = false;c = null;s = -1;brackets.app.getMenuPosition("menu-unittest4", function (t, e, n) {
            r = true;o = t;c = e;s = n;
          });
        });waitsFor(function () {
          return r;
        });runs(function () {
          expect(o).toBe(0);expect(c).toBe("");expect(s).toBeGreaterThan(0);
        });runs(function () {
          r = false;brackets.app.removeMenu("menu-unittest4", function (t) {
            r = true;
          });
        });waitsFor(function () {
          return r;
        });
      });
    });describe("addMenuItem", function () {
      var n = false;
      var u = 0;
      var r;
      beforeEach(function () {
        runs(function () {
          n = false;brackets.app.addMenu(a, i, "", "", function (t) {
            n = true;u = t;
          });
        });waitsFor(function () {
          return n;
        });runs(function () {
          expect(u).toBe(0);
        });
      });afterEach(function () {
        runs(function () {
          n = false;brackets.app.removeMenu(i, function (t) {
            n = true;u = t;
          });
        });waitsFor(function () {
          return n;
        });runs(function () {
          expect(u).toBe(0);
        });
      });it("should add a menu item", function () {
        u = 0;runs(function () {
          n = false;brackets.app.addMenuItem(i, s, f, "", "", "", "", function (t) {
            n = true;u = t;
          });
        });waitsFor(function () {
          return n;
        });runs(function () {
          expect(u).toBe(0);
        });runs(function () {
          n = false;brackets.app.getMenuTitle(f, function (t, e) {
            n = true;u = t;r = e;
          });
        });waitsFor(function () {
          return n;
        });runs(function () {
          expect(u).toBe(0);expect(r).toBe(s);n = false;brackets.app.removeMenuItem(f, function (t) {
            n = true;
          });
        });waitsFor(function () {
          return n;
        });
      });it("should return an error if invalid parameters are passed", function () {
        runs(function () {
          u = 0;n = false;brackets.app.addMenuItem(i, s, f, "", 42, "", "", function (t) {
            n = true;u = t;
          });
        });waitsFor(function () {
          return n;
        });runs(function () {
          expect(u).toBe(brackets.fs.ERR_INVALID_PARAMS);
        });
      });
    });describe("addMenuItem (with reference)", function () {
      var u = false;
      var r = 0;
      var n;
      var o = null;
      var c = -1;
      beforeEach(function () {
        runs(function () {
          u = false;brackets.app.addMenu(a, i, "", "", function (t) {
            u = true;r = t;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);
        });runs(function () {
          u = false;brackets.app.addMenuItem(i, s, f, "", "", "", "", function (t) {
            u = true;r = t;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);
        });
      });afterEach(function () {
        runs(function () {
          u = false;brackets.app.removeMenuItem(f, function (t) {
            u = true;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          u = false;brackets.app.removeMenu(i, function (t) {
            u = true;r = t;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);
        });
      });it("should add a menu item in first position of menu", function () {
        r = 0;runs(function () {
          u = false;brackets.app.addMenuItem(i, "Brackets Test Command Custom 1", "Menu-test.command01", "", "", "first", "", function (t) {
            u = true;r = t;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);
        });runs(function () {
          u = false;o = null;c = -1;brackets.app.getMenuPosition("Menu-test.command01", function (t, e, n) {
            u = true;r = t;o = e;c = n;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);expect(o).toBe(i);expect(c).toBe(0);
        });runs(function () {
          u = false;brackets.app.getMenuTitle("Menu-test.command01", function (t, e) {
            u = true;r = t;n = e;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);expect(n).toBe("Brackets Test Command Custom 1");
        });runs(function () {
          u = false;brackets.app.removeMenuItem("Menu-test.command01", function (t) {
            u = true;
          });
        });waitsFor(function () {
          return u;
        });
      });it("should add a menu item in last position of menu", function () {
        r = 0;runs(function () {
          u = false;brackets.app.addMenuItem(i, "Brackets Test Command Custom 2", "Menu-test.command02", "", "", "last", "", function (t) {
            u = true;r = t;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);
        });runs(function () {
          u = false;o = null;c = -1;brackets.app.getMenuPosition("Menu-test.command02", function (t, e, n) {
            u = true;r = t;o = e;c = n;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);expect(o).toBe(i);expect(c).toBe(1);
        });runs(function () {
          u = false;brackets.app.getMenuTitle("Menu-test.command02", function (t, e) {
            u = true;r = t;n = e;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);expect(n).toBe("Brackets Test Command Custom 2");
        });runs(function () {
          u = false;brackets.app.removeMenuItem("Menu-test.command02", function (t) {
            u = true;
          });
        });waitsFor(function () {
          return u;
        });
      });it("should add a menu item after the referenced menu item", function () {
        r = 0;runs(function () {
          u = false;brackets.app.addMenuItem(i, "Brackets Test Command Custom 3", "Menu-test.command03", "", "", "after", f, function (t) {
            u = true;r = t;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);
        });runs(function () {
          u = false;o = null;c = -1;brackets.app.getMenuPosition("Menu-test.command03", function (t, e, n) {
            u = true;r = t;o = e;c = n;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);expect(o).toBe(i);expect(c).toBe(1);
        });runs(function () {
          u = false;brackets.app.getMenuTitle("Menu-test.command03", function (t, e) {
            u = true;r = t;n = e;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);expect(n).toBe("Brackets Test Command Custom 3");
        });runs(function () {
          u = false;brackets.app.removeMenuItem("Menu-test.command03", function (t) {
            u = true;
          });
        });waitsFor(function () {
          return u;
        });
      });it("should add a menu item before the referenced menu item", function () {
        r = 0;runs(function () {
          u = false;brackets.app.addMenuItem(i, "Brackets Test Command Custom 4", "Menu-test.command04", "", "", "before", f, function (t) {
            u = true;r = t;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);
        });runs(function () {
          u = false;o = null;c = -1;brackets.app.getMenuPosition("Menu-test.command04", function (t, e, n) {
            u = true;r = t;o = e;c = n;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);expect(o).toBe(i);expect(c).toBe(0);
        });runs(function () {
          u = false;brackets.app.getMenuTitle("Menu-test.command04", function (t, e) {
            u = true;r = t;n = e;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);expect(n).toBe("Brackets Test Command Custom 4");
        });runs(function () {
          u = false;brackets.app.removeMenuItem("Menu-test.command04", function (t) {
            u = true;
          });
        });waitsFor(function () {
          return u;
        });
      });it("should add a menu item at the end when reference menu item doesn't exist", function () {
        r = 0;runs(function () {
          u = false;brackets.app.addMenuItem(i, "Brackets Test Command Custom 5", "Menu-test.command05", "", "", "before", "NONEXISTANT", function (t) {
            u = true;r = t;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(brackets.fs.ERR_NOT_FOUND);
        });runs(function () {
          u = false;o = null;c = -1;brackets.app.getMenuPosition("Menu-test.command05", function (t, e, n) {
            u = true;r = t;o = e;c = n;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);expect(o).toBe(i);expect(c).toBe(1);
        });runs(function () {
          u = false;brackets.app.getMenuTitle("Menu-test.command05", function (t, e) {
            u = true;r = t;n = e;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);expect(n).toBe("Brackets Test Command Custom 5");
        });runs(function () {
          u = false;brackets.app.removeMenuItem("Menu-test.command05", function (t) {
            u = true;
          });
        });waitsFor(function () {
          return u;
        });
      });it("should add menu items to beginning and end of menu section", function () {
        var u;
        var r;
        var o;
        var c;
        const t = "menuitem-sectiontest";
        runs(function () {
          brackets.app.addMenu("Section Test", "menuitem-sectiontest", "", "", function (t) {});brackets.app.addMenuItem(t, "Command 10", "Menu-test.command10", "", "", "", "", function (t) {});brackets.app.addMenuItem(t, "Command 11", "Menu-test.command11", "", "", "", "", function (t) {});brackets.app.addMenuItem(t, "---", String(Date.now()), "", "", "", "", function (t) {});brackets.app.addMenuItem(t, "Command 12", "Menu-test.command12", "", "", "", "", function (t) {});brackets.app.addMenuItem(t, "Command 13", "Menu-test.command13", "", "", "", "", function (t) {});
        });runs(function () {
          u = false;r = 0;brackets.app.addMenuItem(t, "Command 14", "Menu-test.command14", "", "", "lastInSection", "Menu-test.command10", function (t) {
            u = true;r = t;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          u = false;r = 0;brackets.app.getMenuPosition("Menu-test.command14", function (t, e, n) {
            u = true;r = t;c = e;o = n;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);expect(o).toBe(2);
        });runs(function () {
          u = false;r = 0;brackets.app.addMenuItem(t, "Command 15", "Menu-test.command15", "", "", "lastInSection", "Menu-test.command13", function (t) {
            u = true;r = t;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          u = false;r = 0;brackets.app.getMenuPosition("Menu-test.command15", function (t, e, n) {
            u = true;r = t;c = e;o = n;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);expect(o).toBe(6);
        });runs(function () {
          u = false;r = 0;brackets.app.addMenuItem(t, "Command 16", "Menu-test.command16", "", "", "firstInSection", "Menu-test.command11", function (t) {
            u = true;r = t;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          u = false;r = 0;brackets.app.getMenuPosition("Menu-test.command16", function (t, e, n) {
            u = true;r = t;c = e;o = n;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);expect(o).toBe(0);
        });runs(function () {
          u = false;r = 0;brackets.app.addMenuItem(t, "Command 17", "Menu-test.command17", "", "", "firstInSection", "Menu-test.command12", function (t) {
            u = true;r = t;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          u = false;r = 0;brackets.app.getMenuPosition("Menu-test.command17", function (t, e, n) {
            u = true;r = t;c = e;o = n;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(r).toBe(0);expect(o).toBe(5);
        });runs(function () {
          brackets.app.removeMenuItem("Menu-test.command10", function (t) {});brackets.app.removeMenuItem("Menu-test.command11", function (t) {});brackets.app.removeMenuItem("Menu-test.command12", function (t) {});brackets.app.removeMenuItem("Menu-test.command13", function (t) {});brackets.app.removeMenuItem("Menu-test.command14", function (t) {});brackets.app.removeMenuItem("Menu-test.command15", function (t) {});brackets.app.removeMenuItem("Menu-test.command16", function (t) {});brackets.app.removeMenuItem("Menu-test.command17", function (t) {});brackets.app.removeMenu(t, function (t) {});
        });
      });
    });describe("removeMenu", function () {
      var e = false;
      var n = 0;
      it("should remove a menu", function () {
        runs(function () {
          brackets.app.addMenu(a, i, "", "", function (t) {
            e = true;n = t;
          });
        });waitsFor(function () {
          return e;
        });runs(function () {
          expect(n).toBe(0);
        });runs(function () {
          e = false;brackets.app.removeMenu(i, function (t) {
            e = true;n = t;
          });
        });waitsFor(function () {
          return e;
        });runs(function () {
          expect(n).toBe(0);
        });
      });it("should return an error if invalid parameters are passed", function () {
        e = false;n = 0;runs(function () {
          brackets.app.removeMenu(42, function (t) {
            e = true;n = t;
          });
        });waitsFor(function () {
          return e;
        });runs(function () {
          expect(n).toBe(brackets.fs.ERR_INVALID_PARAMS);
        });
      });it("should return an error if the menu can't be found", function () {
        e = false;n = 0;runs(function () {
          brackets.app.removeMenu(i, function (t) {
            e = true;n = t;
          });
        });waitsFor(function () {
          return e;
        });runs(function () {
          expect(n).toBe(brackets.fs.ERR_NOT_FOUND);
        });
      });
    });describe("removeMenuItem", function () {
      const r = "item11";
      beforeEach(function () {
        var e = false;
        var n = 0;
        runs(function () {
          brackets.app.addMenu(a, i, "", "", function (t) {
            if (t) {
              e = true;n = t;
            } else {
              brackets.app.addMenuItem(i, s, r, "", "", "", "", function (t) {
                e = true;n = t;
              });
            }
          });
        });waitsFor(function () {
          return e;
        });runs(function () {
          expect(n).toBe(0);
        });
      });afterEach(function () {
        var e = false;
        var n = 0;
        runs(function () {
          brackets.app.removeMenuItem(r, function (t) {
            brackets.app.removeMenu(i, function (t) {
              e = true;n = t;
            });
          });
        });waitsFor(function () {
          return e;
        });runs(function () {
          expect(n).toBe(0);
        });
      });it("should remove a menu item", function () {
        var n = false;
        var u = 0;
        runs(function () {
          brackets.app.removeMenuItem(r, function (t) {
            n = true;u = t;
          });
        });waitsFor(function () {
          return n;
        }, "calling removeMenuItem");runs(function () {
          expect(u).toBe(0);
        });runs(function () {
          n = false;brackets.app.getMenuTitle(r, function (t, e) {
            n = true;u = t;
          });
        });waitsFor(function () {
          return n;
        }, "calling getMenuTitle");runs(function () {
          expect(u).toBe(brackets.fs.ERR_NOT_FOUND);
        });
      });it("should return an error if invalid parameters are passed", function () {
        var e = false;
        var n = 0;
        runs(function () {
          brackets.app.removeMenuItem(42, function (t) {
            e = true;n = t;
          });
        });waitsFor(function () {
          return e;
        }, "calling removeMenuItem");runs(function () {
          expect(n).toBe(brackets.fs.ERR_INVALID_PARAMS);
        });
      });it("should return an error if the menu item can't be found", function () {
        var e = false;
        var n = 0;
        runs(function () {
          brackets.app.removeMenuItem("item11foo", function (t) {
            e = true;n = t;
          });
        });waitsFor(function () {
          return e;
        }, "calling removeMenuItem");runs(function () {
          expect(n).toBe(brackets.fs.ERR_NOT_FOUND);
        });
      });
    });describe("getMenuItemState setMenuItemState", function () {
      const c = "item12";
      beforeEach(function () {
        var e = false;
        var n = 0;
        runs(function () {
          brackets.app.addMenu(a, i, "", "", function (t) {
            if (t) {
              e = true;n = t;
            } else {
              brackets.app.addMenuItem(i, s, c, "", "", "", "", function (t) {
                e = true;n = t;
              });
            }
          });
        });waitsFor(function () {
          return e;
        });runs(function () {
          expect(n).toBe(0);
        });
      });afterEach(function () {
        var e = false;
        var n = 0;
        runs(function () {
          brackets.app.removeMenuItem(c, function (t) {
            brackets.app.removeMenu(i, function (t) {
              e = true;n = t;
            });
          });
        });waitsFor(function () {
          return e;
        });runs(function () {
          expect(n).toBe(0);
        });
      });it("should be able to set enabled state", function () {
        var u = false;
        var r = false;
        var o = 0;
        runs(function () {
          brackets.app.getMenuItemState(c, function (t, e, n) {
            u = true;r = e;o = t;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(o).toBe(0);
        });runs(function () {
          u = false;brackets.app.setMenuItemState(c, false, false, function (t) {
            u = true;o = t;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(o).toBe(0);
        });runs(function () {
          u = false;brackets.app.getMenuItemState(c, function (t, e, n) {
            u = true;r = e;o = t;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(o).toBe(0);expect(r).toBe(false);
        });
      });it("should be able to set checked state", function () {
        var u = false;
        var r = false;
        var o = 0;
        runs(function () {
          brackets.app.getMenuItemState(c, function (t, e, n) {
            u = true;r = n;o = t;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(o).toBe(0);expect(r).toBe(false);
        });runs(function () {
          u = false;brackets.app.setMenuItemState(c, true, true, function (t) {
            u = true;o = t;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(o).toBe(0);
        });runs(function () {
          u = false;brackets.app.getMenuItemState(c, function (t, e, n) {
            u = true;r = n;o = t;
          });
        });waitsFor(function () {
          return u;
        });runs(function () {
          expect(o).toBe(0);
        });
      });it("should return an error if invalid parameters are passed", function () {
        var e = false;
        var n = 0;
        runs(function () {
          brackets.app.setMenuItemState(c, "hello", "world", function (t) {
            e = true;n = t;
          });
        });waitsFor(function () {
          return e;
        });runs(function () {
          expect(n).toBe(brackets.fs.ERR_INVALID_PARAMS);
        });
      });
    });describe("getMenuTitle setMenuTitle", function () {
      beforeEach(function () {
        var e = false;
        var n = 0;
        runs(function () {
          brackets.app.addMenu(a, i, "", "", function (t) {
            if (t) {
              e = true;n = t;
            } else {
              brackets.app.addMenuItem(i, s, f, "", "", "", "", function (t) {
                e = true;n = t;
              });
            }
          });
        });waitsFor(function () {
          return e;
        });runs(function () {
          expect(n).toBe(0);
        });
      });afterEach(function () {
        var e = false;
        var n = 0;
        runs(function () {
          brackets.app.removeMenuItem(f, function (t) {
            if (t) {
              e = true;n = t;
            } else {
              brackets.app.removeMenu(i, function (t) {
                e = true;n = t;
              });
            }
          });
        });waitsFor(function () {
          return e;
        });runs(function () {
          expect(n).toBe(0);
        });
      });it("should be able to set menu title", function () {
        const t = "New Title";
        var n = false;
        var u = 0;
        var r;
        runs(function () {
          brackets.app.getMenuTitle(i, function (t, e) {
            n = true;r = e;u = t;
          });
        });waitsFor(function () {
          return n;
        });runs(function () {
          expect(u).toBe(0);expect(r).toBe(a);
        });runs(function () {
          n = false;brackets.app.setMenuTitle(i, t, function (t) {
            n = true;u = t;
          });
        });waitsFor(function () {
          return n;
        });runs(function () {
          expect(u).toBe(0);
        });runs(function () {
          n = false;brackets.app.getMenuTitle(i, function (t, e) {
            n = true;r = e;u = t;
          });
        });waitsFor(function () {
          return n;
        });runs(function () {
          expect(u).toBe(0);expect(r).toBe(t);
        });
      });it("should be able to set menu item title", function () {
        const t = "New Item Title";
        var n = false;
        var u = 0;
        var r;
        runs(function () {
          brackets.app.getMenuTitle(f, function (t, e) {
            n = true;r = e;u = t;
          });
        });waitsFor(function () {
          return n;
        });runs(function () {
          expect(u).toBe(0);expect(r).toBe(s);
        });runs(function () {
          n = false;brackets.app.setMenuTitle(f, t, function (t) {
            n = true;u = t;
          });
        });waitsFor(function () {
          return n;
        });runs(function () {
          expect(u).toBe(0);
        });runs(function () {
          n = false;brackets.app.getMenuTitle(f, function (t, e) {
            n = true;r = e;u = t;
          });
        });waitsFor(function () {
          return n;
        });runs(function () {
          expect(u).toBe(0);expect(r).toBe(t);
        });
      });it("should return an error if invalid parameters are passed", function () {
        var e = false;
        var n = 0;
        runs(function () {
          brackets.app.setMenuTitle(f, 42, function (t) {
            e = true;n = t;
          });
        });waitsFor(function () {
          return e;
        });runs(function () {
          expect(n).toBe(brackets.fs.ERR_INVALID_PARAMS);
        });
      });
    });it("should remove placeholder menu", function () {
      var e = false;
      var n = 0;
      runs(function () {
        brackets.app.removeMenu(t, function (t) {
          e = true;n = t;
        });
      });waitsFor(function () {
        return e;
      });expect(n).toBe(0);
    });
  });
});
