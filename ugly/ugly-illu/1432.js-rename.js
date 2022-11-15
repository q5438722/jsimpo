const path = require("path");

const fs = require("fs-plus");

const temp = require("temp").track();

const commands = ["git-diff:toggle-diff-list", "git-diff:move-to-next-diff", "git-diff:move-to-previous-diff"];
describe("git-diff", () => {
  var t;
  var a;
  beforeEach(() => {
    const e = temp.mkdirSync("git-diff-spec-");
    fs.copySync(path.join(__dirname, "fixtures", "working-dir"), e);fs.moveSync(path.join(e, "git.git"), path.join(e, ".git"));atom.project.setPaths([temp.mkdirSync("git-diff-spec-")]);jasmine.attachToDOM(atom.workspace.getElement());waitsForPromise(() => atom.workspace.open("sample.js"));runs(() => {
      t = atom.workspace.getActiveTextEditor();a = atom.views.getView(t);
    });
  });describe("When the module is deactivated", () => {
    it("removes all registered command hooks after deactivation.", () => {
      waitsForPromise(() => atom.packages.activatePackage("git-diff"));waitsForPromise(() => atom.packages.deactivatePackage("git-diff"));runs(() => {
        expect(atom.packages.isPackageActive("git-diff")).toBe(false);atom.commands.findCommands({ target: a }).filter(({ name: e }) => commands.includes(e)).forEach(e => expect(commands).not.toContain(e.name));
      });
    });
  });
});
