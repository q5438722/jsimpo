import { module, test } from "../qunit";import moment from "../../moment";module("utc");test("utc and local", function (t) {
  const e = moment(Date.UTC(2011, 1, 2, 3, 4, 5, 6));
  var o;
  var u;
  e.utc();t.equal(e.date(), 2, "the day should be correct for utc");t.equal(e.day(), 3, "the date should be correct for utc");t.equal(e.hours(), 3, "the hours should be correct for utc");e.local();if (e.utcOffset() < -180) {
    t.equal(e.date(), 1, "the date should be correct for local");t.equal(e.day(), 2, "the day should be correct for local");
  } else {
    t.equal(e.date(), 2, "the date should be correct for local");t.equal(e.day(), 3, "the day should be correct for local");
  }o = Math.floor(e.utcOffset() / 60);u = (27 + o) % 24;t.equal(e.hours(), u, "the hours (" + e.hours() + ") should be correct for local");t.equal(moment().utc().utcOffset(), 0, "timezone in utc should always be zero");
});test("creating with utc and no arguments", function (t) {
  const e = new Date().valueOf();
  const o = moment.utc().valueOf();
  const u = new Date().valueOf();
  t.ok(e <= o, "moment UTC default time should be now, not in the past");t.ok(o <= u, "moment UTC default time should be now, not in the future");
});test("creating with utc and a date parameter array", function (t) {
  var e = moment.utc([2011, 1, 2, 3, 4, 5, 6]);
  t.equal(e.date(), 2, "the day should be correct for utc array");t.equal(e.hours(), 3, "the hours should be correct for utc array");e = moment.utc("2011-02-02 3:04:05", "YYYY-MM-DD HH:mm:ss");t.equal(e.date(), 2, "the day should be correct for utc parsing format");t.equal(e.hours(), 3, "the hours should be correct for utc parsing format");e = moment.utc("2011-02-02T03:04:05+00:00");t.equal(e.date(), 2, "the day should be correct for utc parsing iso");t.equal(e.hours(), 3, "the hours should be correct for utc parsing iso");
});test("creating with utc without timezone", function (t) {
  var e = moment.utc("2012-01-02T08:20:00");
  t.equal(e.date(), 2, "the day should be correct for utc parse without timezone");t.equal(e.hours(), 8, "the hours should be correct for utc parse without timezone");e = moment.utc("2012-01-02T08:20:00+09:00");t.equal(e.date(), 1, "the day should be correct for utc parse with timezone");t.equal(e.hours(), 23, "the hours should be correct for utc parse with timezone");
});test("cloning with utc offset", function (t) {
  const e = moment.utc("2012-01-02T08:20:00");
  t.equal(moment.utc(e)._isUTC, true, "the local offset should be converted to UTC");t.equal(moment.utc(e.clone().utc())._isUTC, true, "the local offset should stay in UTC");e.utcOffset(120);t.equal(moment.utc(e)._isUTC, true, "the explicit utc offset should stay in UTC");t.equal(moment.utc(e).utcOffset(), 0, "the explicit utc offset should have an offset of 0");
});test("weekday with utc", function (t) {
  t.equal(moment("2013-09-15T00:00:00Z").utc().weekday(), moment("2013-09-15T23:59:00Z").utc().weekday(), "a UTC-moment's .weekday() should not be affected by the local timezone");
});