'use strict';
const t = require("tap");
const glob = require("glob");
const {
  resolve : resolve
} = require("path");
const {
  real : mockNpm
} = require("../fixtures/mock-npm");
const full = process.env.npm_lifecycle_event === "check-coverage";
if (!full) {
  t.pass("nothing to do here, not checking for full coverage");
} else {
  const {
    npm : npm
  } = mockNpm(t);
  t.teardown(() => {
    const cmd = require("../../lib/utils/exit-handler.js");
    cmd.setNpm(npm);
    cmd();
  });
  t.test("load npm first", async(canCreateDiscussions) => {
    await npm.load();
  });
  t.test("load all the files", (e) => {
    const TRAVIS_API_JOBS_URL = resolve(__dirname, "../../lib");
    for (const t of glob.sync(`${TRAVIS_API_JOBS_URL}/**/*.js`)) {
      require(t);
      e.pass("loaded " + t);
    }
    e.pass("loaded all files");
    e.end();
  });
}
;
