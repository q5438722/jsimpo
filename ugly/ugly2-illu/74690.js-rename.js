import { module, test } from "../qunit";import moment from "../../moment";module("mutable");test("manipulation methods", function (e) {
  const u = moment();
  e.equal(u, u.year(2011), "year() should be mutable");e.equal(u, u.month(1), "month() should be mutable");e.equal(u, u.hours(7), "hours() should be mutable");e.equal(u, u.minutes(33), "minutes() should be mutable");e.equal(u, u.seconds(44), "seconds() should be mutable");e.equal(u, u.milliseconds(55), "milliseconds() should be mutable");e.equal(u, u.day(2), "day() should be mutable");e.equal(u, u.startOf("week"), "startOf() should be mutable");e.equal(u, u.add(1, "days"), "add() should be mutable");e.equal(u, u.subtract(2, "years"), "subtract() should be mutable");e.equal(u, u.local(), "local() should be mutable");e.equal(u, u.utc(), "utc() should be mutable");
});test("non mutable methods", function (e) {
  const u = moment();
  e.notEqual(u, u.clone(), "clone() should not be mutable");
});
