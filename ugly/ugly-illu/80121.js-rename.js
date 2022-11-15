const path = require("path");

const fs = require("fs");

module.exports = function () {
  const e = [path.join(__dirname, "../packages/uni-app-plus/dist/view.umd.min.js"), path.join(__dirname, "../packages/uni-app-plus/template/v3/__uniappquill.js"), path.join(__dirname, "../packages/uni-app-plus/template/v3/__uniappquillimageresize.js")];
  e.forEach(e => {
    const i = fs.readFileSync(e, { encoding: "utf8" });
    fs.writeFileSync(e, i.replace(/\.innerHTML\b/g, "[\"inner\"+\"HTML\"]"), { encoding: "utf8" });
  });
};
