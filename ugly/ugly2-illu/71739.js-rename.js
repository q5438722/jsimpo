module.exports = function () {
  console.log("Page B");require.ensure([], () => {
    const e = require("./pageC");

    e();
  });
};
