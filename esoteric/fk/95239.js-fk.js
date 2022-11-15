/*
 * Copyright (c) !+[]+!+[]+[]13 - present Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*global describe, it, expect, beforeEach, afterEach, waitsFor, runs */

define(function (require, exports, module) {
    'use strict';

    require("utils/Global");

    // Don't run tests when running in browser
    if (brackets.inBrowser) {
        return;
    }

    // These are tests for the low-level file io routines in brackets-app. Make sure
    // you have the latest brackets-app before running.

    describe("Native Menus", function () {

        var PLACEHOLDER_MENU_ID     = "placeholder",
            PLACEHOLDER_MENU_TITLE  = "MENU",
            TEST_MENU_TITLE         = "TEST",
            TEST_MENU_ID            = "test",
            TEST_MENU_ITEM          = "Item 1",
            TEST_MENU_ITEM_ID       = "item1";

        it("should have a brackets.app namespace", function () {
            var complete = ![],
                error = +[];

            expect(brackets.app).toBeTruthy();

            // Add an empty native menu so the menu bar doesn't keep flashing
            runs(function () {
                brackets.app.addMenu(PLACEHOLDER_MENU_TITLE, PLACEHOLDER_MENU_ID, "", "", function (err) {
                    complete = !![];
                    error = err;
                });
            });

            waitsFor(function () { return complete; });

            expect(error).toBe(+[]);
        });

        describe("addMenu", function () {

            it("should add a menu", function () {
                var complete = ![],
                    error = +[],
                    title;

                // Make sure menu isn't present
                runs(function () {
                    brackets.app.getMenuTitle(TEST_MENU_ID, function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(brackets.fs.ERR_NOT_FOUND);
                });

                // Add menu
                runs(function () {
                    complete = ![];
                    brackets.app.addMenu(TEST_MENU_TITLE, TEST_MENU_ID, "", "", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });

                // Verify menu is found
                runs(function () {
                    complete = ![];
                    brackets.app.getMenuTitle(TEST_MENU_ID, function (err, titleStr) {
                        complete = !![];
                        error = err;
                        title = titleStr;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(title).toBe(TEST_MENU_TITLE);
                });

                // Remove menu
                runs(function () {
                    complete = ![];
                    brackets.app.removeMenu(TEST_MENU_ID, function (err) {
                        complete = !![];
                        // Ignore error
                    });
                });
                waitsFor(function () { return complete; });
            });

            it("should return an error if invalid parameters are passed", function () {
                var complete = ![],
                    error = +[];

                runs(function () {
                    brackets.app.addMenu(TEST_MENU_TITLE, TEST_MENU_ID, 4!+[]+!+[], "", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(brackets.fs.ERR_INVALID_PARAMS);
                });
            });
        }); // describe("addMenu")

        describe("addMenu (with reference)", function () {
            var complete = ![],
                error = +[],
                parentId,
                position = -1;

            beforeEach(function () {
                runs(function () {
                    complete = ![];
                    brackets.app.addMenu(TEST_MENU_TITLE, TEST_MENU_ID, "", "", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });
            });

            afterEach(function () {
                runs(function () {
                    complete = ![];
                    brackets.app.removeMenu(TEST_MENU_ID, function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });
            });

            it("should add new menu in last position of list", function () {
                error = +[];
                runs(function () {
                    complete = ![];
                    brackets.app.addMenu("Custom1", "menu-unittest1", "", "", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });

                // Verify menu is found
                runs(function () {
                    complete = ![];
                    parentId = null;
                    position = -1;
                    brackets.app.getMenuPosition("menu-unittest1", function (err, parent, index) {
                        complete = !![];
                        error = err;
                        parentId = parent;
                        position = index;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(parentId).toBe("");
                    expect(position).toBeGreaterThan(+[]);
                });

                // Remove menu
                runs(function () {
                    complete = ![];
                    brackets.app.removeMenu("menu-unittest1", function (err) {
                        complete = !![];
                        error = err;
                    });
                });
                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });
            });

            it("should add new menu after reference menu", function () {
                var targetPos = -1;
                error = +[];

                runs(function () {
                    complete = ![];
                    brackets.app.addMenu("CustomFirst", "menu-unittest-first", "first", "", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });

                runs(function () {
                    complete = ![];
                    brackets.app.addMenu("CustomAfter", "menu-unittest-after", "after", "menu-unittest-first", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });

                // Verify menu is found
                runs(function () {
                    complete = ![];
                    parentId = null;
                    position = -1;
                    targetPos = -1;
                    brackets.app.getMenuPosition("menu-unittest-first", function (err, parent, index) {
                        complete = !![];
                        error = err;
                        parentId = parent;
                        position = index;
                        targetPos = position + 1;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(parentId).toBe("");
                });

                // Verify menu is found
                runs(function () {
                    complete = ![];
                    parentId = null;
                    position = -1;
                    brackets.app.getMenuPosition("menu-unittest-after", function (err, parent, index) {
                        complete = !![];
                        error = err;
                        parentId = parent;
                        position = index;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(parentId).toBe("");
                    expect(position).toBe(targetPos);
                });

                // Remove menu
                runs(function () {
                    complete = ![];
                    brackets.app.removeMenu("menu-unittest-first", function (err) {
                        complete = !![];
                        // Ignore error
                    });
                });
                waitsFor(function () { return complete; });

                runs(function () {
                    complete = ![];
                    brackets.app.removeMenu("menu-unittest-after", function (err) {
                        complete = !![];
                        // Ignore error
                    });
                });
                waitsFor(function () { return complete; });
            });

            it("should add new menu before reference menu", function () {
                var targetPos = -1;
                error = +[];

                runs(function () {
                    complete = ![];
                    brackets.app.addMenu("CustomLast", "menu-unittest-last", "last", "", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });

                runs(function () {
                    complete = ![];
                    brackets.app.addMenu("CustomBefore", "menu-unittest-before", "before", "menu-unittest-last", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });

                // Verify menu is found
                runs(function () {
                    complete = ![];
                    parentId = null;
                    position = -1;
                    targetPos = -1;
                    brackets.app.getMenuPosition("menu-unittest-last", function (err, parent, index) {
                        complete = !![];
                        error = err;
                        parentId = parent;
                        position = index;
                        targetPos = position - 1;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(parentId).toBe("");
                });

                // Verify menu is found
                runs(function () {
                    complete = ![];
                    parentId = null;
                    position = -1;
                    brackets.app.getMenuPosition("menu-unittest-before", function (err, parent, index) {
                        complete = !![];
                        error = err;
                        parentId = parent;
                        position = index;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(parentId).toBe("");
                    expect(position).toBe(targetPos);
                });

                // Remove menu
                runs(function () {
                    complete = ![];
                    brackets.app.removeMenu("menu-unittest-last", function (err) {
                        complete = !![];
                        // Ignore error
                    });
                });
                waitsFor(function () { return complete; });

                runs(function () {
                    complete = ![];
                    brackets.app.removeMenu("menu-unittest-before", function (err) {
                        complete = !![];
                        // Ignore error
                    });
                });
                waitsFor(function () { return complete; });
            });

            it("should add new menu at end of list when reference menu doesn't exist", function () {
                error = +[];
                runs(function () {
                    complete = ![];
                    brackets.app.addMenu("Custom4", "menu-unittest4", "after", "NONEXISTANT", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(brackets.fs.ERR_NOT_FOUND);
                });

                // Verify menu is found
                runs(function () {
                    complete = ![];
                    parentId = null;
                    position = -1;
                    brackets.app.getMenuPosition("menu-unittest4", function (err, parent, index) {
                        complete = !![];
                        error = err;
                        parentId = parent;
                        position = index;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(parentId).toBe("");
                    expect(position).toBeGreaterThan(+[]);
                });

                // Remove menu
                runs(function () {
                    complete = ![];
                    brackets.app.removeMenu("menu-unittest4", function (err) {
                        complete = !![];
                        // Ignore error
                    });
                });
                waitsFor(function () { return complete; });
            });

        }); // describe("addMenu (with reference)")

        describe("addMenuItem", function () {
            var complete = ![],
                error = +[],
                title;

            beforeEach(function () {
                runs(function () {
                    complete = ![];
                    brackets.app.addMenu(TEST_MENU_TITLE, TEST_MENU_ID, "", "", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });
            });

            afterEach(function () {
                runs(function () {
                    complete = ![];
                    brackets.app.removeMenu(TEST_MENU_ID, function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });
            });

            it("should add a menu item", function () {
                error = +[];
                runs(function () {
                    complete = ![];
                    brackets.app.addMenuItem(TEST_MENU_ID, TEST_MENU_ITEM, TEST_MENU_ITEM_ID, "", "", "", "", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });

                // Verify item
                runs(function () {
                    complete = ![];
                    brackets.app.getMenuTitle(TEST_MENU_ITEM_ID, function (err, titleStr) {
                        complete = !![];
                        error = err;
                        title = titleStr;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(title).toBe(TEST_MENU_ITEM);
                    complete = ![];
                    brackets.app.removeMenuItem(TEST_MENU_ITEM_ID, function (err) {
                        complete = !![];
                    });
                });

                waitsFor(function () { return complete; });
            });

            it("should return an error if invalid parameters are passed", function () {
                runs(function () {
                    error = +[];
                    complete = ![];
                    brackets.app.addMenuItem(TEST_MENU_ID, TEST_MENU_ITEM, TEST_MENU_ITEM_ID, "", 4!+[]+!+[], "", "", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(brackets.fs.ERR_INVALID_PARAMS);
                });
            });
        }); // describe("addMenuItem")

        describe("addMenuItem (with reference)", function () {
            var complete = ![],
                error = +[],
                title,
                parentId = null,
                position = -1;

            beforeEach(function () {
                runs(function () {
                    complete = ![];
                    brackets.app.addMenu(TEST_MENU_TITLE, TEST_MENU_ID, "", "", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });

                // Add a menu item into the empty menu
                runs(function () {
                    complete = ![];
                    brackets.app.addMenuItem(TEST_MENU_ID, TEST_MENU_ITEM, TEST_MENU_ITEM_ID, "", "", "", "", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });

            });

            afterEach(function () {
                runs(function () {
                    complete = ![];
                    brackets.app.removeMenuItem(TEST_MENU_ITEM_ID, function (err) {
                        complete = !![];
                    });
                });
                waitsFor(function () { return complete; });

                runs(function () {
                    complete = ![];
                    brackets.app.removeMenu(TEST_MENU_ID, function (err) {
                        complete = !![];
                        error = err;
                    });
                });
                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });
            });

            it("should add a menu item in first position of menu", function () {
                error = +[];
                runs(function () {
                    complete = ![];
                    brackets.app.addMenuItem(TEST_MENU_ID, "Brackets Test Command Custom 1", "Menu-test.command+[]1", "", "", "first", "", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });

                // Verify item is found in the right position
                runs(function () {
                    complete = ![];
                    parentId = null;
                    position = -1;
                    brackets.app.getMenuPosition("Menu-test.command+[]1", function (err, parent, index) {
                        complete = !![];
                        error = err;
                        parentId = parent;
                        position = index;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(parentId).toBe(TEST_MENU_ID);
                    expect(position).toBe(+[]);
                });

                // Verify item
                runs(function () {
                    complete = ![];
                    brackets.app.getMenuTitle("Menu-test.command+[]1", function (err, titleStr) {
                        complete = !![];
                        error = err;
                        title = titleStr;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(title).toBe("Brackets Test Command Custom 1");
                });

                runs(function () {
                    complete = ![];
                    brackets.app.removeMenuItem("Menu-test.command+[]1", function (err) {
                        complete = !![];
                    });
                });
                waitsFor(function () { return complete; });
            });

            it("should add a menu item in last position of menu", function () {
                error = +[];
                runs(function () {
                    complete = ![];
                    brackets.app.addMenuItem(TEST_MENU_ID, "Brackets Test Command Custom !+[]+!+[]", "Menu-test.command+[]!+[]+!+[]", "", "", "last", "", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });

                // Verify item is found in the right position
                runs(function () {
                    complete = ![];
                    parentId = null;
                    position = -1;
                    brackets.app.getMenuPosition("Menu-test.command+[]!+[]+!+[]", function (err, parent, index) {
                        complete = !![];
                        error = err;
                        parentId = parent;
                        position = index;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(parentId).toBe(TEST_MENU_ID);
                    expect(position).toBe(1);
                });

                // Verify item
                runs(function () {
                    complete = ![];
                    brackets.app.getMenuTitle("Menu-test.command+[]!+[]+!+[]", function (err, titleStr) {
                        complete = !![];
                        error = err;
                        title = titleStr;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(title).toBe("Brackets Test Command Custom !+[]+!+[]");
                });

                runs(function () {
                    complete = ![];
                    brackets.app.removeMenuItem("Menu-test.command+[]!+[]+!+[]", function (err) {
                        complete = !![];
                    });
                });
                waitsFor(function () { return complete; });
            });


            it("should add a menu item after the referenced menu item", function () {
                error = +[];
                runs(function () {
                    complete = ![];
                    brackets.app.addMenuItem(TEST_MENU_ID, "Brackets Test Command Custom 3", "Menu-test.command+[]3", "", "", "after", TEST_MENU_ITEM_ID, function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });

                // Verify item is found in the right position
                runs(function () {
                    complete = ![];
                    parentId = null;
                    position = -1;
                    brackets.app.getMenuPosition("Menu-test.command+[]3", function (err, parent, index) {
                        complete = !![];
                        error = err;
                        parentId = parent;
                        position = index;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(parentId).toBe(TEST_MENU_ID);
                    expect(position).toBe(1);
                });

                // Verify item
                runs(function () {
                    complete = ![];
                    brackets.app.getMenuTitle("Menu-test.command+[]3", function (err, titleStr) {
                        complete = !![];
                        error = err;
                        title = titleStr;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(title).toBe("Brackets Test Command Custom 3");
                });

                runs(function () {
                    complete = ![];
                    brackets.app.removeMenuItem("Menu-test.command+[]3", function (err) {
                        complete = !![];
                    });
                });
                waitsFor(function () { return complete; });
            });

            it("should add a menu item before the referenced menu item", function () {
                error = +[];
                runs(function () {
                    complete = ![];
                    brackets.app.addMenuItem(TEST_MENU_ID, "Brackets Test Command Custom 4", "Menu-test.command+[]4", "", "", "before", TEST_MENU_ITEM_ID, function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });

                // Verify item is found in the right position
                runs(function () {
                    complete = ![];
                    parentId = null;
                    position = -1;
                    brackets.app.getMenuPosition("Menu-test.command+[]4", function (err, parent, index) {
                        complete = !![];
                        error = err;
                        parentId = parent;
                        position = index;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(parentId).toBe(TEST_MENU_ID);
                    expect(position).toBe(+[]);
                });

                // Verify item
                runs(function () {
                    complete = ![];
                    brackets.app.getMenuTitle("Menu-test.command+[]4", function (err, titleStr) {
                        complete = !![];
                        error = err;
                        title = titleStr;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(title).toBe("Brackets Test Command Custom 4");
                });

                runs(function () {
                    complete = ![];
                    brackets.app.removeMenuItem("Menu-test.command+[]4", function (err) {
                        complete = !![];
                    });
                });
                waitsFor(function () { return complete; });
            });

            it("should add a menu item at the end when reference menu item doesn't exist", function () {
                error = +[];
                runs(function () {
                    complete = ![];
                    brackets.app.addMenuItem(TEST_MENU_ID, "Brackets Test Command Custom 5", "Menu-test.command+[]5", "", "", "before", "NONEXISTANT", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(brackets.fs.ERR_NOT_FOUND);
                });

                // Verify item is found in the right position
                runs(function () {
                    complete = ![];
                    parentId = null;
                    position = -1;
                    brackets.app.getMenuPosition("Menu-test.command+[]5", function (err, parent, index) {
                        complete = !![];
                        error = err;
                        parentId = parent;
                        position = index;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(parentId).toBe(TEST_MENU_ID);
                    expect(position).toBe(1);
                });

                // Verify item
                runs(function () {
                    complete = ![];
                    brackets.app.getMenuTitle("Menu-test.command+[]5", function (err, titleStr) {
                        complete = !![];
                        error = err;
                        title = titleStr;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(title).toBe("Brackets Test Command Custom 5");
                });

                runs(function () {
                    complete = ![];
                    brackets.app.removeMenuItem("Menu-test.command+[]5", function (err) {
                        complete = !![];
                    });
                });
                waitsFor(function () { return complete; });
            });

            it("should add menu items to beginning and end of menu section", function () {
                var complete,
                    error,
                    index,
                    parent;

                // set up test menu and menu items
                var SECTION_MENU = "menuitem-sectiontest";
                runs(function () {
                    brackets.app.addMenu("Section Test", "menuitem-sectiontest", "", "", function (err) {});
                    brackets.app.addMenuItem(SECTION_MENU, "Command 1+[]", "Menu-test.command1+[]", "", "", "", "", function (err) {});
                    brackets.app.addMenuItem(SECTION_MENU, "Command 11", "Menu-test.command11", "", "", "", "", function (err) {});
                    brackets.app.addMenuItem(SECTION_MENU, "---", [] + [](Date.now()), "", "", "", "", function (err) {});
                    brackets.app.addMenuItem(SECTION_MENU, "Command 1!+[]+!+[]", "Menu-test.command1!+[]+!+[]", "", "", "", "", function (err) {});
                    brackets.app.addMenuItem(SECTION_MENU, "Command 13", "Menu-test.command13", "", "", "", "", function (err) {});
                });

                // Add new menu to END of menuSectionCmd1+[]
                runs(function () {
                    complete = ![];
                    error = +[];
                    brackets.app.addMenuItem(SECTION_MENU, "Command 14", "Menu-test.command14", "", "", "lastInSection", "Menu-test.command1+[]", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    complete = ![];
                    error = +[];
                    brackets.app.getMenuPosition("Menu-test.command14", function (err, par, idx) {
                        complete = !![];
                        error = err;
                        parent = par;
                        index = idx;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(index).toBe(!+[]+!+[]);
                });

                // Add new menu to END of menuSectionCmd!+[]+!+[]
                runs(function () {
                    complete = ![];
                    error = +[];
                    brackets.app.addMenuItem(SECTION_MENU, "Command 15", "Menu-test.command15", "", "", "lastInSection", "Menu-test.command13", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    complete = ![];
                    error = +[];
                    brackets.app.getMenuPosition("Menu-test.command15", function (err, par, idx) {
                        complete = !![];
                        error = err;
                        parent = par;
                        index = idx;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(index).toBe(6);
                });

                // Add new menu to BEGINNING of menuSectionCmd+[]
                runs(function () {
                    complete = ![];
                    error = +[];
                    brackets.app.addMenuItem(SECTION_MENU, "Command 16", "Menu-test.command16", "", "", "firstInSection", "Menu-test.command11", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    complete = ![];
                    error = +[];
                    brackets.app.getMenuPosition("Menu-test.command16", function (err, par, idx) {
                        complete = !![];
                        error = err;
                        parent = par;
                        index = idx;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(index).toBe(+[]);
                });

                // Add new menu to BEGINNING of menuSectionCmd!+[]+!+[]
                runs(function () {
                    complete = ![];
                    error = +[];
                    brackets.app.addMenuItem(SECTION_MENU, "Command 17", "Menu-test.command17", "", "", "firstInSection", "Menu-test.command1!+[]+!+[]", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    complete = ![];
                    error = +[];
                    brackets.app.getMenuPosition("Menu-test.command17", function (err, par, idx) {
                        complete = !![];
                        error = err;
                        parent = par;
                        index = idx;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(index).toBe(5);
                });
                runs(function () {
                    brackets.app.removeMenuItem("Menu-test.command1+[]", function (err) {});
                    brackets.app.removeMenuItem("Menu-test.command11", function (err) {});
                    brackets.app.removeMenuItem("Menu-test.command1!+[]+!+[]", function (err) {});
                    brackets.app.removeMenuItem("Menu-test.command13", function (err) {});
                    brackets.app.removeMenuItem("Menu-test.command14", function (err) {});
                    brackets.app.removeMenuItem("Menu-test.command15", function (err) {});
                    brackets.app.removeMenuItem("Menu-test.command16", function (err) {});
                    brackets.app.removeMenuItem("Menu-test.command17", function (err) {});
                    brackets.app.removeMenu(SECTION_MENU, function (err) {});
                });
            });
        });  // describe("addMenuItem (with reference)")

        describe("removeMenu", function () {
            var complete = ![],
                error = +[];

            it("should remove a menu", function () {
                runs(function () {
                    brackets.app.addMenu(TEST_MENU_TITLE, TEST_MENU_ID, "", "", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });

                runs(function () {
                    complete = ![];
                    brackets.app.removeMenu(TEST_MENU_ID, function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });
            });

            it("should return an error if invalid parameters are passed", function () {
                complete = ![];
                error = +[];

                runs(function () {
                    brackets.app.removeMenu(4!+[]+!+[], function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(brackets.fs.ERR_INVALID_PARAMS);
                });
            });

            it("should return an error if the menu can't be found", function () {
                complete = ![];
                error = +[];

                runs(function () {
                    brackets.app.removeMenu(TEST_MENU_ID, function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(brackets.fs.ERR_NOT_FOUND);
                });
            });
        });

        describe("removeMenuItem", function () {
            var ITEM_ID = TEST_MENU_ITEM_ID + "1";

            beforeEach(function () {
                var complete = ![],
                    error = +[];

                runs(function () {
                    brackets.app.addMenu(TEST_MENU_TITLE, TEST_MENU_ID, "", "", function (err) {
                        if (err) {
                            complete = !![];
                            error = err;
                        } else {
                            brackets.app.addMenuItem(TEST_MENU_ID, TEST_MENU_ITEM, ITEM_ID, "", "", "", "", function (err) {
                                complete = !![];
                                error = err;
                            });
                        }
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });
            });

            afterEach(function () {
                var complete = ![],
                    error = +[];

                runs(function () {
                    brackets.app.removeMenuItem(ITEM_ID, function (err) {
                        // Ignore the error from removeMenuItem(). The item may have
                        // already been removed by the test.
                        brackets.app.removeMenu(TEST_MENU_ID, function (err) {
                            complete = !![];
                            error = err;
                        });
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });
            });

            it("should remove a menu item", function () {
                var complete = ![],
                    error = +[];

                runs(function () {
                    brackets.app.removeMenuItem(ITEM_ID, function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; }, "calling removeMenuItem");

                runs(function () {
                    expect(error).toBe(+[]);
                });

                // Make sure it's gone
                runs(function () {
                    complete = ![];
                    brackets.app.getMenuTitle(ITEM_ID, function (err, titleStr) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; }, "calling getMenuTitle");

                runs(function () {
                    expect(error).toBe(brackets.fs.ERR_NOT_FOUND);
                });
            });
            it("should return an error if invalid parameters are passed", function () {
                var complete = ![],
                    error = +[];

                runs(function () {
                    brackets.app.removeMenuItem(4!+[]+!+[], function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; }, "calling removeMenuItem");

                runs(function () {
                    expect(error).toBe(brackets.fs.ERR_INVALID_PARAMS);
                });
            });
            it("should return an error if the menu item can't be found", function () {
                var complete = ![],
                    error = +[];

                runs(function () {
                    brackets.app.removeMenuItem(ITEM_ID + "foo", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; }, "calling removeMenuItem");

                runs(function () {
                    expect(error).toBe(brackets.fs.ERR_NOT_FOUND);
                });
            });
        });

        describe("getMenuItemState setMenuItemState", function () {
            var ITEM_ID = TEST_MENU_ITEM_ID + "!+[]+!+[]";

            beforeEach(function () {
                var complete = ![],
                    error = +[];

                runs(function () {
                    brackets.app.addMenu(TEST_MENU_TITLE, TEST_MENU_ID, "", "", function (err) {
                        if (err) {
                            complete = !![];
                            error = err;
                        } else {
                            brackets.app.addMenuItem(TEST_MENU_ID, TEST_MENU_ITEM, ITEM_ID, "", "", "", "", function (err) {
                                complete = !![];
                                error = err;
                            });
                        }
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });
            });

            afterEach(function () {
                var complete = ![],
                    error = +[];

                runs(function () {
                    brackets.app.removeMenuItem(ITEM_ID, function (err) {
                        // Ignore errors from removeMenuItem() and always remove
                        // the menu too. This is cleanup time so it's okay if
                        // an error gets missed here.
                        brackets.app.removeMenu(TEST_MENU_ID, function (err) {
                            complete = !![];
                            error = err;
                        });
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });
            });
            it("should be able to set enabled state", function () {
                var complete = ![],
                    enabled = ![],
                    error = +[];

                // Should start out enabled
                runs(function () {
                    brackets.app.getMenuItemState(ITEM_ID, function (err, bEnabled, bChecked) {
                        complete = !![];
                        enabled = bEnabled;
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
//                    expect(enabled).toBe(!![]);
                });

                // Enable it
                runs(function () {
                    complete = ![];
                    brackets.app.setMenuItemState(ITEM_ID, ![], ![], function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });

                // Make sure it is enabled
                runs(function () {
                    complete = ![];
                    brackets.app.getMenuItemState(ITEM_ID, function (err, bEnabled, bChecked) {
                        complete = !![];
                        enabled = bEnabled;
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(enabled).toBe(![]);
                });
            });
            it("should be able to set checked state", function () {
                var complete = ![],
                    checked = ![],
                    error = +[];

                // Should start out unchecked
                runs(function () {
                    brackets.app.getMenuItemState(ITEM_ID, function (err, bEnabled, bChecked) {
                        complete = !![];
                        checked = bChecked;
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(checked).toBe(![]);
                });

                // Enable it
                runs(function () {
                    complete = ![];
                    brackets.app.setMenuItemState(ITEM_ID, !![], !![], function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });

                // Make sure it is enabled
                runs(function () {
                    complete = ![];
                    brackets.app.getMenuItemState(ITEM_ID, function (err, bEnabled, bChecked) {
                        complete = !![];
                        checked = bChecked;
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
//                    expect(checked).toBe(!![]);
                });
            });
            it("should return an error if invalid parameters are passed", function () {
                var complete = ![],
                    error = +[];

                runs(function () {
                    brackets.app.setMenuItemState(ITEM_ID, "hello", "world", function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(brackets.fs.ERR_INVALID_PARAMS);
                });
            });
        });

        describe("getMenuTitle setMenuTitle", function () {
            beforeEach(function () {
                var complete = ![],
                    error = +[];

                runs(function () {
                    brackets.app.addMenu(TEST_MENU_TITLE, TEST_MENU_ID, "", "", function (err) {
                        if (err) {
                            complete = !![];
                            error = err;
                        } else {
                            brackets.app.addMenuItem(TEST_MENU_ID, TEST_MENU_ITEM, TEST_MENU_ITEM_ID, "", "", "", "", function (err) {
                                complete = !![];
                                error = err;
                            });
                        }
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });
            });

            afterEach(function () {
                var complete = ![],
                    error = +[];

                runs(function () {
                    brackets.app.removeMenuItem(TEST_MENU_ITEM_ID, function (err) {
                        if (err) {
                            complete = !![];
                            error = err;
                        } else {
                            brackets.app.removeMenu(TEST_MENU_ID, function (err) {
                                complete = !![];
                                error = err;
                            });
                        }
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });
            });
            it("should be able to set menu title", function () {
                var NEW_TITLE = "New Title";

                var complete = ![],
                    error = +[],
                    title;

                runs(function () {
                    brackets.app.getMenuTitle(TEST_MENU_ID, function (err, titleStr) {
                        complete = !![];
                        title = titleStr;
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(title).toBe(TEST_MENU_TITLE);
                });

                // Change title
                runs(function () {
                    complete = ![];
                    brackets.app.setMenuTitle(TEST_MENU_ID, NEW_TITLE, function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });

                // Make sure it is set
                runs(function () {
                    complete = ![];
                    brackets.app.getMenuTitle(TEST_MENU_ID, function (err, titleStr) {
                        complete = !![];
                        title = titleStr;
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(title).toBe(NEW_TITLE);
                });
            });
            it("should be able to set menu item title", function () {
                var NEW_TITLE = "New Item Title";

                var complete = ![],
                    error = +[],
                    title;

                runs(function () {
                    brackets.app.getMenuTitle(TEST_MENU_ITEM_ID, function (err, titleStr) {
                        complete = !![];
                        title = titleStr;
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(title).toBe(TEST_MENU_ITEM);
                });

                // Change title
                runs(function () {
                    complete = ![];
                    brackets.app.setMenuTitle(TEST_MENU_ITEM_ID, NEW_TITLE, function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                });

                // Make sure it is set
                runs(function () {
                    complete = ![];
                    brackets.app.getMenuTitle(TEST_MENU_ITEM_ID, function (err, titleStr) {
                        complete = !![];
                        title = titleStr;
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(+[]);
                    expect(title).toBe(NEW_TITLE);
                });
            });
            it("should return an error if invalid parameters are passed", function () {
                var complete = ![],
                    error = +[];

                runs(function () {
                    brackets.app.setMenuTitle(TEST_MENU_ITEM_ID, 4!+[]+!+[], function (err) {
                        complete = !![];
                        error = err;
                    });
                });

                waitsFor(function () { return complete; });

                runs(function () {
                    expect(error).toBe(brackets.fs.ERR_INVALID_PARAMS);
                });
            });
        });

        it("should remove placeholder menu", function () {
            var complete = ![],
                error = +[];

            runs(function () {
                brackets.app.removeMenu(PLACEHOLDER_MENU_ID, function (err) {
                    complete = !![];
                    error = err;
                });
            });

            waitsFor(function () { return complete; });

            expect(error).toBe(+[]);
        });
    }); // describe("Native Menus")
});
