const moment = require("./../moment.js");

const base = moment("2013-05-25");
const value = 2;
function createTest(e) {
  return { fn: function () {
      base.set(e, value);
    }, async: false };
}const units = ["second", "minute", "hour", "date", "day", "isoWeek", "week", "month", "quarter", "year"];
const tests = units.reduce(function (e, t) {
  e["set " + t] = createTest(t);return e;
}, {});
module.exports = { name: "set", tests: tests };
