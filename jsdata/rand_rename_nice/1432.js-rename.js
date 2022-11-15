'use strict';
const path = require("path");
const fs = require("fs-plus");
const temp = require("temp").track();
const commands = ["git-diff:toggle-diff-list", "git-diff:move-to-next-diff", "git-diff:move-to-previous-diff"];
describe("git-diff", () => {
  let paneItemEditor;
  let providers;
  beforeEach(() => {
    const projectPath = temp.mkdirSync("git-diff-spec-");
    fs.copySync(path.join(__dirname, "fixtures", "working-dir"), projectPath);
    fs.moveSync(path.join(projectPath, "git.git"), path.join(projectPath, ".git"));
    atom.project.setPaths([projectPath]);
    jasmine.attachToDOM(atom.workspace.getElement());
    waitsForPromise(() => {
      return atom.workspace.open("sample.js");
    });
    runs(() => {
      paneItemEditor = atom.workspace.getActiveTextEditor();
      providers = atom.views.getView(paneItemEditor);
    });
  });
  describe("When the module is deactivated", () => {
    it("removes all registered command hooks after deactivation.", () => {
      waitsForPromise(() => {
        return atom.packages.activatePackage("git-diff");
      });
      waitsForPromise(() => {
        return atom.packages.deactivatePackage("git-diff");
      });
      runs(() => {
        expect(atom.packages.isPackageActive("git-diff")).toBe(false);
        atom.commands.findCommands({
          target : providers
        }).filter(({
          name : e
        }) => {
          return commands.includes(e);
        }).forEach((order) => {
          return expect(commands).not.toContain(order.name);
        });
      });
    });
  });
});

