const fs = require("fs");

const path = require("path");

const pluginsDirPath = path.resolve(__dirname, "../packages", "@vue");
const pluginRegEx = new RegExp("cli-plugin-");
function generatePluginDoc(e) {
  const n = path.resolve(__dirname, "../packages", "@vue", e, "README.md");
  const s = fs.readFileSync(n);
  const c = path.resolve(__dirname, "../docs", "core-plugins", `${e.replace("cli-plugin-", "")}.md`);
  fs.writeFile(c, s, () => {});
}
const genDocs = module.exports = async () => {
  fs.readdir(pluginsDirPath, (e, n) => {
    n.forEach(e => {
      if (pluginRegEx.test(e)) {
        generatePluginDoc(e);
      }
    });
  });
};

genDocs().catch(e => {
  console.error(e);process.exit(1);
});