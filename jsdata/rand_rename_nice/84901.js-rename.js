'use strict';
const testSetup = require("../__shared__/test-setup");
if (testSetup.isLocal) {
  test("skipped locally", () => {
  });
} else {
  test("builds in development", async() => {
    const {
      fulfilled : fulfilled
    } = await testSetup.scripts.start({
      smoke : true
    });
    expect(fulfilled).toBe(true);
  });
  test("builds in production", async() => {
    const {
      fulfilled : fulfilled
    } = await testSetup.scripts.build();
    expect(fulfilled).toBe(true);
  });
}
;
