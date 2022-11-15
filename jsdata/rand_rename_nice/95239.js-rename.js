'use strict';
define(function(require, canCreateDiscussions, n) {
  require("utils/Global");
  if (brackets.inBrowser) {
    return;
  }
  describe("Native Menus", function() {
    var PLACEHOLDER_MENU_ID = "placeholder";
    var PLACEHOLDER_MENU_TITLE = "MENU";
    var TEST_MENU_TITLE = "TEST";
    var TEST_MENU_ID = "test";
    var TEST_MENU_ITEM = "Item 1";
    var TEST_MENU_ITEM_ID = "item1";
    it("should have a brackets.app namespace", function() {
      var e = false;
      var child_rendered_first = 0;
      expect(brackets.app).toBeTruthy();
      runs(function() {
        brackets.app.addMenu(PLACEHOLDER_MENU_TITLE, PLACEHOLDER_MENU_ID, "", "", function(child_rendered) {
          e = true;
          child_rendered_first = child_rendered;
        });
      });
      waitsFor(function() {
        return e;
      });
      expect(child_rendered_first).toBe(0);
    });
    describe("addMenu", function() {
      it("should add a menu", function() {
        var n = false;
        var child_rendered_first = 0;
        var rerouteSuccCalled;
        runs(function() {
          brackets.app.getMenuTitle(TEST_MENU_ID, function(child_rendered) {
            n = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return n;
        });
        runs(function() {
          expect(child_rendered_first).toBe(brackets.fs.ERR_NOT_FOUND);
        });
        runs(function() {
          n = false;
          brackets.app.addMenu(TEST_MENU_TITLE, TEST_MENU_ID, "", "", function(child_rendered) {
            n = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return n;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
        runs(function() {
          n = false;
          brackets.app.getMenuTitle(TEST_MENU_ID, function(child_rendered, canCreateDiscussions) {
            n = true;
            child_rendered_first = child_rendered;
            rerouteSuccCalled = canCreateDiscussions;
          });
        });
        waitsFor(function() {
          return n;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(rerouteSuccCalled).toBe(TEST_MENU_TITLE);
        });
        runs(function() {
          n = false;
          brackets.app.removeMenu(TEST_MENU_ID, function(canCreateDiscussions) {
            n = true;
          });
        });
        waitsFor(function() {
          return n;
        });
      });
      it("should return an error if invalid parameters are passed", function() {
        var e = false;
        var child_rendered_first = 0;
        runs(function() {
          brackets.app.addMenu(TEST_MENU_TITLE, TEST_MENU_ID, 42, "", function(child_rendered) {
            e = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return e;
        });
        runs(function() {
          expect(child_rendered_first).toBe(brackets.fs.ERR_INVALID_PARAMS);
        });
      });
    });
    describe("addMenu (with reference)", function() {
      var r = false;
      var child_rendered_first = 0;
      var rerouteSuccCalled;
      var h = -1;
      beforeEach(function() {
        runs(function() {
          r = false;
          brackets.app.addMenu(TEST_MENU_TITLE, TEST_MENU_ID, "", "", function(child_rendered) {
            r = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return r;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
      });
      afterEach(function() {
        runs(function() {
          r = false;
          brackets.app.removeMenu(TEST_MENU_ID, function(child_rendered) {
            r = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return r;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
      });
      it("should add new menu in last position of list", function() {
        child_rendered_first = 0;
        runs(function() {
          r = false;
          brackets.app.addMenu("Custom1", "menu-unittest1", "", "", function(child_rendered) {
            r = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return r;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
        runs(function() {
          r = false;
          rerouteSuccCalled = null;
          h = -1;
          brackets.app.getMenuPosition("menu-unittest1", function(child_rendered, canCreateDiscussions, firstRequestHeaders) {
            r = true;
            child_rendered_first = child_rendered;
            rerouteSuccCalled = canCreateDiscussions;
            h = firstRequestHeaders;
          });
        });
        waitsFor(function() {
          return r;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(rerouteSuccCalled).toBe("");
          expect(h).toBeGreaterThan(0);
        });
        runs(function() {
          r = false;
          brackets.app.removeMenu("menu-unittest1", function(child_rendered) {
            r = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return r;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
      });
      it("should add new menu after reference menu", function() {
        var header = -1;
        child_rendered_first = 0;
        runs(function() {
          r = false;
          brackets.app.addMenu("CustomFirst", "menu-unittest-first", "first", "", function(child_rendered) {
            r = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return r;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
        runs(function() {
          r = false;
          brackets.app.addMenu("CustomAfter", "menu-unittest-after", "after", "menu-unittest-first", function(child_rendered) {
            r = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return r;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
        runs(function() {
          r = false;
          rerouteSuccCalled = null;
          h = -1;
          header = -1;
          brackets.app.getMenuPosition("menu-unittest-first", function(child_rendered, canCreateDiscussions, firstRequestHeaders) {
            r = true;
            child_rendered_first = child_rendered;
            rerouteSuccCalled = canCreateDiscussions;
            h = firstRequestHeaders;
            header = h + 1;
          });
        });
        waitsFor(function() {
          return r;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(rerouteSuccCalled).toBe("");
        });
        runs(function() {
          r = false;
          rerouteSuccCalled = null;
          h = -1;
          brackets.app.getMenuPosition("menu-unittest-after", function(child_rendered, canCreateDiscussions, firstRequestHeaders) {
            r = true;
            child_rendered_first = child_rendered;
            rerouteSuccCalled = canCreateDiscussions;
            h = firstRequestHeaders;
          });
        });
        waitsFor(function() {
          return r;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(rerouteSuccCalled).toBe("");
          expect(h).toBe(header);
        });
        runs(function() {
          r = false;
          brackets.app.removeMenu("menu-unittest-first", function(canCreateDiscussions) {
            r = true;
          });
        });
        waitsFor(function() {
          return r;
        });
        runs(function() {
          r = false;
          brackets.app.removeMenu("menu-unittest-after", function(canCreateDiscussions) {
            r = true;
          });
        });
        waitsFor(function() {
          return r;
        });
      });
      it("should add new menu before reference menu", function() {
        var y = -1;
        child_rendered_first = 0;
        runs(function() {
          r = false;
          brackets.app.addMenu("CustomLast", "menu-unittest-last", "last", "", function(child_rendered) {
            r = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return r;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
        runs(function() {
          r = false;
          brackets.app.addMenu("CustomBefore", "menu-unittest-before", "before", "menu-unittest-last", function(child_rendered) {
            r = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return r;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
        runs(function() {
          r = false;
          rerouteSuccCalled = null;
          h = -1;
          y = -1;
          brackets.app.getMenuPosition("menu-unittest-last", function(child_rendered, canCreateDiscussions, firstRequestHeaders) {
            r = true;
            child_rendered_first = child_rendered;
            rerouteSuccCalled = canCreateDiscussions;
            h = firstRequestHeaders;
            y = h - 1;
          });
        });
        waitsFor(function() {
          return r;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(rerouteSuccCalled).toBe("");
        });
        runs(function() {
          r = false;
          rerouteSuccCalled = null;
          h = -1;
          brackets.app.getMenuPosition("menu-unittest-before", function(child_rendered, canCreateDiscussions, firstRequestHeaders) {
            r = true;
            child_rendered_first = child_rendered;
            rerouteSuccCalled = canCreateDiscussions;
            h = firstRequestHeaders;
          });
        });
        waitsFor(function() {
          return r;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(rerouteSuccCalled).toBe("");
          expect(h).toBe(y);
        });
        runs(function() {
          r = false;
          brackets.app.removeMenu("menu-unittest-last", function(canCreateDiscussions) {
            r = true;
          });
        });
        waitsFor(function() {
          return r;
        });
        runs(function() {
          r = false;
          brackets.app.removeMenu("menu-unittest-before", function(canCreateDiscussions) {
            r = true;
          });
        });
        waitsFor(function() {
          return r;
        });
      });
      it("should add new menu at end of list when reference menu doesn't exist", function() {
        child_rendered_first = 0;
        runs(function() {
          r = false;
          brackets.app.addMenu("Custom4", "menu-unittest4", "after", "NONEXISTANT", function(child_rendered) {
            r = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return r;
        });
        runs(function() {
          expect(child_rendered_first).toBe(brackets.fs.ERR_NOT_FOUND);
        });
        runs(function() {
          r = false;
          rerouteSuccCalled = null;
          h = -1;
          brackets.app.getMenuPosition("menu-unittest4", function(child_rendered, canCreateDiscussions, firstRequestHeaders) {
            r = true;
            child_rendered_first = child_rendered;
            rerouteSuccCalled = canCreateDiscussions;
            h = firstRequestHeaders;
          });
        });
        waitsFor(function() {
          return r;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(rerouteSuccCalled).toBe("");
          expect(h).toBeGreaterThan(0);
        });
        runs(function() {
          r = false;
          brackets.app.removeMenu("menu-unittest4", function(canCreateDiscussions) {
            r = true;
          });
        });
        waitsFor(function() {
          return r;
        });
      });
    });
    describe("addMenuItem", function() {
      var n = false;
      var child_rendered_first = 0;
      var rerouteSuccCalled;
      beforeEach(function() {
        runs(function() {
          n = false;
          brackets.app.addMenu(TEST_MENU_TITLE, TEST_MENU_ID, "", "", function(child_rendered) {
            n = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return n;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
      });
      afterEach(function() {
        runs(function() {
          n = false;
          brackets.app.removeMenu(TEST_MENU_ID, function(child_rendered) {
            n = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return n;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
      });
      it("should add a menu item", function() {
        child_rendered_first = 0;
        runs(function() {
          n = false;
          brackets.app.addMenuItem(TEST_MENU_ID, TEST_MENU_ITEM, TEST_MENU_ITEM_ID, "", "", "", "", function(child_rendered) {
            n = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return n;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
        runs(function() {
          n = false;
          brackets.app.getMenuTitle(TEST_MENU_ITEM_ID, function(child_rendered, canCreateDiscussions) {
            n = true;
            child_rendered_first = child_rendered;
            rerouteSuccCalled = canCreateDiscussions;
          });
        });
        waitsFor(function() {
          return n;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(rerouteSuccCalled).toBe(TEST_MENU_ITEM);
          n = false;
          brackets.app.removeMenuItem(TEST_MENU_ITEM_ID, function(canCreateDiscussions) {
            n = true;
          });
        });
        waitsFor(function() {
          return n;
        });
      });
      it("should return an error if invalid parameters are passed", function() {
        runs(function() {
          child_rendered_first = 0;
          n = false;
          brackets.app.addMenuItem(TEST_MENU_ID, TEST_MENU_ITEM, TEST_MENU_ITEM_ID, "", 42, "", "", function(child_rendered) {
            n = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return n;
        });
        runs(function() {
          expect(child_rendered_first).toBe(brackets.fs.ERR_INVALID_PARAMS);
        });
      });
    });
    describe("addMenuItem (with reference)", function() {
      var u = false;
      var child_rendered_first = 0;
      var rerouteSuccCalled;
      var matchingType = null;
      var received = -1;
      beforeEach(function() {
        runs(function() {
          u = false;
          brackets.app.addMenu(TEST_MENU_TITLE, TEST_MENU_ID, "", "", function(child_rendered) {
            u = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
        runs(function() {
          u = false;
          brackets.app.addMenuItem(TEST_MENU_ID, TEST_MENU_ITEM, TEST_MENU_ITEM_ID, "", "", "", "", function(child_rendered) {
            u = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
      });
      afterEach(function() {
        runs(function() {
          u = false;
          brackets.app.removeMenuItem(TEST_MENU_ITEM_ID, function(canCreateDiscussions) {
            u = true;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          u = false;
          brackets.app.removeMenu(TEST_MENU_ID, function(child_rendered) {
            u = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
      });
      it("should add a menu item in first position of menu", function() {
        child_rendered_first = 0;
        runs(function() {
          u = false;
          brackets.app.addMenuItem(TEST_MENU_ID, "Brackets Test Command Custom 1", "Menu-test.command01", "", "", "first", "", function(child_rendered) {
            u = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
        runs(function() {
          u = false;
          matchingType = null;
          received = -1;
          brackets.app.getMenuPosition("Menu-test.command01", function(child_rendered, type, n) {
            u = true;
            child_rendered_first = child_rendered;
            matchingType = type;
            received = n;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(matchingType).toBe(TEST_MENU_ID);
          expect(received).toBe(0);
        });
        runs(function() {
          u = false;
          brackets.app.getMenuTitle("Menu-test.command01", function(child_rendered, canCreateDiscussions) {
            u = true;
            child_rendered_first = child_rendered;
            rerouteSuccCalled = canCreateDiscussions;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(rerouteSuccCalled).toBe("Brackets Test Command Custom 1");
        });
        runs(function() {
          u = false;
          brackets.app.removeMenuItem("Menu-test.command01", function(canCreateDiscussions) {
            u = true;
          });
        });
        waitsFor(function() {
          return u;
        });
      });
      it("should add a menu item in last position of menu", function() {
        child_rendered_first = 0;
        runs(function() {
          u = false;
          brackets.app.addMenuItem(TEST_MENU_ID, "Brackets Test Command Custom 2", "Menu-test.command02", "", "", "last", "", function(child_rendered) {
            u = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
        runs(function() {
          u = false;
          matchingType = null;
          received = -1;
          brackets.app.getMenuPosition("Menu-test.command02", function(child_rendered, type, n) {
            u = true;
            child_rendered_first = child_rendered;
            matchingType = type;
            received = n;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(matchingType).toBe(TEST_MENU_ID);
          expect(received).toBe(1);
        });
        runs(function() {
          u = false;
          brackets.app.getMenuTitle("Menu-test.command02", function(child_rendered, canCreateDiscussions) {
            u = true;
            child_rendered_first = child_rendered;
            rerouteSuccCalled = canCreateDiscussions;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(rerouteSuccCalled).toBe("Brackets Test Command Custom 2");
        });
        runs(function() {
          u = false;
          brackets.app.removeMenuItem("Menu-test.command02", function(canCreateDiscussions) {
            u = true;
          });
        });
        waitsFor(function() {
          return u;
        });
      });
      it("should add a menu item after the referenced menu item", function() {
        child_rendered_first = 0;
        runs(function() {
          u = false;
          brackets.app.addMenuItem(TEST_MENU_ID, "Brackets Test Command Custom 3", "Menu-test.command03", "", "", "after", TEST_MENU_ITEM_ID, function(child_rendered) {
            u = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
        runs(function() {
          u = false;
          matchingType = null;
          received = -1;
          brackets.app.getMenuPosition("Menu-test.command03", function(child_rendered, type, n) {
            u = true;
            child_rendered_first = child_rendered;
            matchingType = type;
            received = n;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(matchingType).toBe(TEST_MENU_ID);
          expect(received).toBe(1);
        });
        runs(function() {
          u = false;
          brackets.app.getMenuTitle("Menu-test.command03", function(child_rendered, canCreateDiscussions) {
            u = true;
            child_rendered_first = child_rendered;
            rerouteSuccCalled = canCreateDiscussions;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(rerouteSuccCalled).toBe("Brackets Test Command Custom 3");
        });
        runs(function() {
          u = false;
          brackets.app.removeMenuItem("Menu-test.command03", function(canCreateDiscussions) {
            u = true;
          });
        });
        waitsFor(function() {
          return u;
        });
      });
      it("should add a menu item before the referenced menu item", function() {
        child_rendered_first = 0;
        runs(function() {
          u = false;
          brackets.app.addMenuItem(TEST_MENU_ID, "Brackets Test Command Custom 4", "Menu-test.command04", "", "", "before", TEST_MENU_ITEM_ID, function(child_rendered) {
            u = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
        runs(function() {
          u = false;
          matchingType = null;
          received = -1;
          brackets.app.getMenuPosition("Menu-test.command04", function(child_rendered, type, n) {
            u = true;
            child_rendered_first = child_rendered;
            matchingType = type;
            received = n;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(matchingType).toBe(TEST_MENU_ID);
          expect(received).toBe(0);
        });
        runs(function() {
          u = false;
          brackets.app.getMenuTitle("Menu-test.command04", function(child_rendered, canCreateDiscussions) {
            u = true;
            child_rendered_first = child_rendered;
            rerouteSuccCalled = canCreateDiscussions;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(rerouteSuccCalled).toBe("Brackets Test Command Custom 4");
        });
        runs(function() {
          u = false;
          brackets.app.removeMenuItem("Menu-test.command04", function(canCreateDiscussions) {
            u = true;
          });
        });
        waitsFor(function() {
          return u;
        });
      });
      it("should add a menu item at the end when reference menu item doesn't exist", function() {
        child_rendered_first = 0;
        runs(function() {
          u = false;
          brackets.app.addMenuItem(TEST_MENU_ID, "Brackets Test Command Custom 5", "Menu-test.command05", "", "", "before", "NONEXISTANT", function(child_rendered) {
            u = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(brackets.fs.ERR_NOT_FOUND);
        });
        runs(function() {
          u = false;
          matchingType = null;
          received = -1;
          brackets.app.getMenuPosition("Menu-test.command05", function(child_rendered, type, n) {
            u = true;
            child_rendered_first = child_rendered;
            matchingType = type;
            received = n;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(matchingType).toBe(TEST_MENU_ID);
          expect(received).toBe(1);
        });
        runs(function() {
          u = false;
          brackets.app.getMenuTitle("Menu-test.command05", function(child_rendered, canCreateDiscussions) {
            u = true;
            child_rendered_first = child_rendered;
            rerouteSuccCalled = canCreateDiscussions;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(rerouteSuccCalled).toBe("Brackets Test Command Custom 5");
        });
        runs(function() {
          u = false;
          brackets.app.removeMenuItem("Menu-test.command05", function(canCreateDiscussions) {
            u = true;
          });
        });
        waitsFor(function() {
          return u;
        });
      });
      it("should add menu items to beginning and end of menu section", function() {
        var u;
        var child_rendered_first;
        var received;
        var eventMark;
        var SECTION_MENU = "menuitem-sectiontest";
        runs(function() {
          brackets.app.addMenu("Section Test", "menuitem-sectiontest", "", "", function(canCreateDiscussions) {
          });
          brackets.app.addMenuItem(SECTION_MENU, "Command 10", "Menu-test.command10", "", "", "", "", function(canCreateDiscussions) {
          });
          brackets.app.addMenuItem(SECTION_MENU, "Command 11", "Menu-test.command11", "", "", "", "", function(canCreateDiscussions) {
          });
          brackets.app.addMenuItem(SECTION_MENU, "---", String(Date.now()), "", "", "", "", function(canCreateDiscussions) {
          });
          brackets.app.addMenuItem(SECTION_MENU, "Command 12", "Menu-test.command12", "", "", "", "", function(canCreateDiscussions) {
          });
          brackets.app.addMenuItem(SECTION_MENU, "Command 13", "Menu-test.command13", "", "", "", "", function(canCreateDiscussions) {
          });
        });
        runs(function() {
          u = false;
          child_rendered_first = 0;
          brackets.app.addMenuItem(SECTION_MENU, "Command 14", "Menu-test.command14", "", "", "lastInSection", "Menu-test.command10", function(child_rendered) {
            u = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          u = false;
          child_rendered_first = 0;
          brackets.app.getMenuPosition("Menu-test.command14", function(child_rendered, e, n) {
            u = true;
            child_rendered_first = child_rendered;
            eventMark = e;
            received = n;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(received).toBe(2);
        });
        runs(function() {
          u = false;
          child_rendered_first = 0;
          brackets.app.addMenuItem(SECTION_MENU, "Command 15", "Menu-test.command15", "", "", "lastInSection", "Menu-test.command13", function(child_rendered) {
            u = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          u = false;
          child_rendered_first = 0;
          brackets.app.getMenuPosition("Menu-test.command15", function(child_rendered, e, n) {
            u = true;
            child_rendered_first = child_rendered;
            eventMark = e;
            received = n;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(received).toBe(6);
        });
        runs(function() {
          u = false;
          child_rendered_first = 0;
          brackets.app.addMenuItem(SECTION_MENU, "Command 16", "Menu-test.command16", "", "", "firstInSection", "Menu-test.command11", function(child_rendered) {
            u = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          u = false;
          child_rendered_first = 0;
          brackets.app.getMenuPosition("Menu-test.command16", function(child_rendered, e, n) {
            u = true;
            child_rendered_first = child_rendered;
            eventMark = e;
            received = n;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(received).toBe(0);
        });
        runs(function() {
          u = false;
          child_rendered_first = 0;
          brackets.app.addMenuItem(SECTION_MENU, "Command 17", "Menu-test.command17", "", "", "firstInSection", "Menu-test.command12", function(child_rendered) {
            u = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          u = false;
          child_rendered_first = 0;
          brackets.app.getMenuPosition("Menu-test.command17", function(child_rendered, e, n) {
            u = true;
            child_rendered_first = child_rendered;
            eventMark = e;
            received = n;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(received).toBe(5);
        });
        runs(function() {
          brackets.app.removeMenuItem("Menu-test.command10", function(canCreateDiscussions) {
          });
          brackets.app.removeMenuItem("Menu-test.command11", function(canCreateDiscussions) {
          });
          brackets.app.removeMenuItem("Menu-test.command12", function(canCreateDiscussions) {
          });
          brackets.app.removeMenuItem("Menu-test.command13", function(canCreateDiscussions) {
          });
          brackets.app.removeMenuItem("Menu-test.command14", function(canCreateDiscussions) {
          });
          brackets.app.removeMenuItem("Menu-test.command15", function(canCreateDiscussions) {
          });
          brackets.app.removeMenuItem("Menu-test.command16", function(canCreateDiscussions) {
          });
          brackets.app.removeMenuItem("Menu-test.command17", function(canCreateDiscussions) {
          });
          brackets.app.removeMenu(SECTION_MENU, function(canCreateDiscussions) {
          });
        });
      });
    });
    describe("removeMenu", function() {
      var e = false;
      var child_rendered_first = 0;
      it("should remove a menu", function() {
        runs(function() {
          brackets.app.addMenu(TEST_MENU_TITLE, TEST_MENU_ID, "", "", function(child_rendered) {
            e = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return e;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
        runs(function() {
          e = false;
          brackets.app.removeMenu(TEST_MENU_ID, function(child_rendered) {
            e = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return e;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
      });
      it("should return an error if invalid parameters are passed", function() {
        e = false;
        child_rendered_first = 0;
        runs(function() {
          brackets.app.removeMenu(42, function(child_rendered) {
            e = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return e;
        });
        runs(function() {
          expect(child_rendered_first).toBe(brackets.fs.ERR_INVALID_PARAMS);
        });
      });
      it("should return an error if the menu can't be found", function() {
        e = false;
        child_rendered_first = 0;
        runs(function() {
          brackets.app.removeMenu(TEST_MENU_ID, function(child_rendered) {
            e = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return e;
        });
        runs(function() {
          expect(child_rendered_first).toBe(brackets.fs.ERR_NOT_FOUND);
        });
      });
    });
    describe("removeMenuItem", function() {
      var ITEM_ID = TEST_MENU_ITEM_ID + "1";
      beforeEach(function() {
        var e = false;
        var child_rendered_first = 0;
        runs(function() {
          brackets.app.addMenu(TEST_MENU_TITLE, TEST_MENU_ID, "", "", function(child_rendered) {
            if (child_rendered) {
              e = true;
              child_rendered_first = child_rendered;
            } else {
              brackets.app.addMenuItem(TEST_MENU_ID, TEST_MENU_ITEM, ITEM_ID, "", "", "", "", function(child_rendered) {
                e = true;
                child_rendered_first = child_rendered;
              });
            }
          });
        });
        waitsFor(function() {
          return e;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
      });
      afterEach(function() {
        var e = false;
        var child_rendered_first = 0;
        runs(function() {
          brackets.app.removeMenuItem(ITEM_ID, function(canCreateDiscussions) {
            brackets.app.removeMenu(TEST_MENU_ID, function(child_rendered) {
              e = true;
              child_rendered_first = child_rendered;
            });
          });
        });
        waitsFor(function() {
          return e;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
      });
      it("should remove a menu item", function() {
        var n = false;
        var child_rendered_first = 0;
        runs(function() {
          brackets.app.removeMenuItem(ITEM_ID, function(child_rendered) {
            n = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return n;
        }, "calling removeMenuItem");
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
        runs(function() {
          n = false;
          brackets.app.getMenuTitle(ITEM_ID, function(child_rendered, canCreateDiscussions) {
            n = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return n;
        }, "calling getMenuTitle");
        runs(function() {
          expect(child_rendered_first).toBe(brackets.fs.ERR_NOT_FOUND);
        });
      });
      it("should return an error if invalid parameters are passed", function() {
        var e = false;
        var child_rendered_first = 0;
        runs(function() {
          brackets.app.removeMenuItem(42, function(child_rendered) {
            e = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return e;
        }, "calling removeMenuItem");
        runs(function() {
          expect(child_rendered_first).toBe(brackets.fs.ERR_INVALID_PARAMS);
        });
      });
      it("should return an error if the menu item can't be found", function() {
        var e = false;
        var child_rendered_first = 0;
        runs(function() {
          brackets.app.removeMenuItem(ITEM_ID + "foo", function(child_rendered) {
            e = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return e;
        }, "calling removeMenuItem");
        runs(function() {
          expect(child_rendered_first).toBe(brackets.fs.ERR_NOT_FOUND);
        });
      });
    });
    describe("getMenuItemState setMenuItemState", function() {
      var ITEM_ID = TEST_MENU_ITEM_ID + "2";
      beforeEach(function() {
        var e = false;
        var child_rendered_first = 0;
        runs(function() {
          brackets.app.addMenu(TEST_MENU_TITLE, TEST_MENU_ID, "", "", function(child_rendered) {
            if (child_rendered) {
              e = true;
              child_rendered_first = child_rendered;
            } else {
              brackets.app.addMenuItem(TEST_MENU_ID, TEST_MENU_ITEM, ITEM_ID, "", "", "", "", function(child_rendered) {
                e = true;
                child_rendered_first = child_rendered;
              });
            }
          });
        });
        waitsFor(function() {
          return e;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
      });
      afterEach(function() {
        var e = false;
        var child_rendered_first = 0;
        runs(function() {
          brackets.app.removeMenuItem(ITEM_ID, function(canCreateDiscussions) {
            brackets.app.removeMenu(TEST_MENU_ID, function(child_rendered) {
              e = true;
              child_rendered_first = child_rendered;
            });
          });
        });
        waitsFor(function() {
          return e;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
      });
      it("should be able to set enabled state", function() {
        var u = false;
        var child_rendered_first = false;
        var rerouteSuccCalled = 0;
        runs(function() {
          brackets.app.getMenuItemState(ITEM_ID, function(canCreateDiscussions, child_rendered, n) {
            u = true;
            child_rendered_first = child_rendered;
            rerouteSuccCalled = canCreateDiscussions;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(rerouteSuccCalled).toBe(0);
        });
        runs(function() {
          u = false;
          brackets.app.setMenuItemState(ITEM_ID, false, false, function(canCreateDiscussions) {
            u = true;
            rerouteSuccCalled = canCreateDiscussions;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(rerouteSuccCalled).toBe(0);
        });
        runs(function() {
          u = false;
          brackets.app.getMenuItemState(ITEM_ID, function(canCreateDiscussions, child_rendered, n) {
            u = true;
            child_rendered_first = child_rendered;
            rerouteSuccCalled = canCreateDiscussions;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(rerouteSuccCalled).toBe(0);
          expect(child_rendered_first).toBe(false);
        });
      });
      it("should be able to set checked state", function() {
        var u = false;
        var received = false;
        var rerouteSuccCalled = 0;
        runs(function() {
          brackets.app.getMenuItemState(ITEM_ID, function(canCreateDiscussions, isSlidingUp, n) {
            u = true;
            received = n;
            rerouteSuccCalled = canCreateDiscussions;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(rerouteSuccCalled).toBe(0);
          expect(received).toBe(false);
        });
        runs(function() {
          u = false;
          brackets.app.setMenuItemState(ITEM_ID, true, true, function(canCreateDiscussions) {
            u = true;
            rerouteSuccCalled = canCreateDiscussions;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(rerouteSuccCalled).toBe(0);
        });
        runs(function() {
          u = false;
          brackets.app.getMenuItemState(ITEM_ID, function(canCreateDiscussions, isSlidingUp, n) {
            u = true;
            received = n;
            rerouteSuccCalled = canCreateDiscussions;
          });
        });
        waitsFor(function() {
          return u;
        });
        runs(function() {
          expect(rerouteSuccCalled).toBe(0);
        });
      });
      it("should return an error if invalid parameters are passed", function() {
        var e = false;
        var child_rendered_first = 0;
        runs(function() {
          brackets.app.setMenuItemState(ITEM_ID, "hello", "world", function(child_rendered) {
            e = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return e;
        });
        runs(function() {
          expect(child_rendered_first).toBe(brackets.fs.ERR_INVALID_PARAMS);
        });
      });
    });
    describe("getMenuTitle setMenuTitle", function() {
      beforeEach(function() {
        var e = false;
        var child_rendered_first = 0;
        runs(function() {
          brackets.app.addMenu(TEST_MENU_TITLE, TEST_MENU_ID, "", "", function(child_rendered) {
            if (child_rendered) {
              e = true;
              child_rendered_first = child_rendered;
            } else {
              brackets.app.addMenuItem(TEST_MENU_ID, TEST_MENU_ITEM, TEST_MENU_ITEM_ID, "", "", "", "", function(child_rendered) {
                e = true;
                child_rendered_first = child_rendered;
              });
            }
          });
        });
        waitsFor(function() {
          return e;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
      });
      afterEach(function() {
        var e = false;
        var child_rendered_first = 0;
        runs(function() {
          brackets.app.removeMenuItem(TEST_MENU_ITEM_ID, function(child_rendered) {
            if (child_rendered) {
              e = true;
              child_rendered_first = child_rendered;
            } else {
              brackets.app.removeMenu(TEST_MENU_ID, function(child_rendered) {
                e = true;
                child_rendered_first = child_rendered;
              });
            }
          });
        });
        waitsFor(function() {
          return e;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
      });
      it("should be able to set menu title", function() {
        var NEW_TITLE = "New Title";
        var n = false;
        var child_rendered_first = 0;
        var rerouteSuccCalled;
        runs(function() {
          brackets.app.getMenuTitle(TEST_MENU_ID, function(child_rendered, canCreateDiscussions) {
            n = true;
            rerouteSuccCalled = canCreateDiscussions;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return n;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(rerouteSuccCalled).toBe(TEST_MENU_TITLE);
        });
        runs(function() {
          n = false;
          brackets.app.setMenuTitle(TEST_MENU_ID, NEW_TITLE, function(child_rendered) {
            n = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return n;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
        runs(function() {
          n = false;
          brackets.app.getMenuTitle(TEST_MENU_ID, function(child_rendered, canCreateDiscussions) {
            n = true;
            rerouteSuccCalled = canCreateDiscussions;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return n;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(rerouteSuccCalled).toBe(NEW_TITLE);
        });
      });
      it("should be able to set menu item title", function() {
        var NEW_TITLE = "New Item Title";
        var n = false;
        var child_rendered_first = 0;
        var rerouteSuccCalled;
        runs(function() {
          brackets.app.getMenuTitle(TEST_MENU_ITEM_ID, function(child_rendered, canCreateDiscussions) {
            n = true;
            rerouteSuccCalled = canCreateDiscussions;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return n;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(rerouteSuccCalled).toBe(TEST_MENU_ITEM);
        });
        runs(function() {
          n = false;
          brackets.app.setMenuTitle(TEST_MENU_ITEM_ID, NEW_TITLE, function(child_rendered) {
            n = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return n;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
        });
        runs(function() {
          n = false;
          brackets.app.getMenuTitle(TEST_MENU_ITEM_ID, function(child_rendered, canCreateDiscussions) {
            n = true;
            rerouteSuccCalled = canCreateDiscussions;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return n;
        });
        runs(function() {
          expect(child_rendered_first).toBe(0);
          expect(rerouteSuccCalled).toBe(NEW_TITLE);
        });
      });
      it("should return an error if invalid parameters are passed", function() {
        var e = false;
        var child_rendered_first = 0;
        runs(function() {
          brackets.app.setMenuTitle(TEST_MENU_ITEM_ID, 42, function(child_rendered) {
            e = true;
            child_rendered_first = child_rendered;
          });
        });
        waitsFor(function() {
          return e;
        });
        runs(function() {
          expect(child_rendered_first).toBe(brackets.fs.ERR_INVALID_PARAMS);
        });
      });
    });
    it("should remove placeholder menu", function() {
      var e = false;
      var child_rendered_first = 0;
      runs(function() {
        brackets.app.removeMenu(PLACEHOLDER_MENU_ID, function(child_rendered) {
          e = true;
          child_rendered_first = child_rendered;
        });
      });
      waitsFor(function() {
        return e;
      });
      expect(child_rendered_first).toBe(0);
    });
  });
});

