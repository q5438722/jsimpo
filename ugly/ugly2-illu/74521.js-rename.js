import { test } from "../qunit";import { localeModule } from "../qunit-locale";import moment from "../../moment";localeModule("kk");test("parse", function (m) {
  const e = ["\u049B\u0430\u04A3\u0442\u0430\u0440 \u049B\u0430\u04A3", "\u0430\u049B\u043F\u0430\u043D \u0430\u049B\u043F", "\u043D\u0430\u0443\u0440\u044B\u0437 \u043D\u0430\u0443", "\u0441\u04D9\u0443\u0456\u0440 \u0441\u04D9\u0443", "\u043C\u0430\u043C\u044B\u0440 \u043C\u0430\u043C", "\u043C\u0430\u0443\u0441\u044B\u043C \u043C\u0430\u0443", "\u0448\u0456\u043B\u0434\u0435 \u0448\u0456\u043B", "\u0442\u0430\u043C\u044B\u0437 \u0442\u0430\u043C", "\u049B\u044B\u0440\u043A\u04AF\u0439\u0435\u043A \u049B\u044B\u0440", "\u049B\u0430\u0437\u0430\u043D \u049B\u0430\u0437", "\u049B\u0430\u0440\u0430\u0448\u0430 \u049B\u0430\u0440", "\u0436\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D \u0436\u0435\u043B"];
  var o;
  function a(e, o, a) {
    m.equal(moment(e, o).month(), a, e + " should be month " + (a + 1));
  }function t(e, o, a) {
    m.equal(moment(e, o, true).month(), a, e + " " + o + " should be strict month " + (a + 1));
  }for (o = 0; o < 12; o++) {
    e[o] = e[o].split(" ");a(e[o][0], "MMM", o);a(e[o][1], "MMM", o);a(e[o][0], "MMMM", o);a(e[o][1], "MMMM", o);a(e[o][0].toLocaleLowerCase(), "MMMM", o);a(e[o][1].toLocaleLowerCase(), "MMMM", o);a(e[o][0].toLocaleUpperCase(), "MMMM", o);a(e[o][1].toLocaleUpperCase(), "MMMM", o);t(e[o][1], "MMM", o);t(e[o][0], "MMMM", o);t(e[o][1].toLocaleLowerCase(), "MMM", o);t(e[o][1].toLocaleUpperCase(), "MMM", o);t(e[o][0].toLocaleLowerCase(), "MMMM", o);t(e[o][0].toLocaleUpperCase(), "MMMM", o);
  }
});test("format", function (e) {
  const o = [["dddd, Do MMMM YYYY, HH:mm:ss", "\u0436\u0435\u043A\u0441\u0435\u043D\u0431\u0456, 14-\u0448\u0456 \u0430\u049B\u043F\u0430\u043D 2010, 15:25:50"], ["ddd, hA", "\u0436\u0435\u043A, 3PM"], ["M Mo MM MMMM MMM", "2 2-\u0448\u0456 02 \u0430\u049B\u043F\u0430\u043D \u0430\u049B\u043F"], ["YYYY YY", "2010 10"], ["D Do DD", "14 14-\u0448\u0456 14"], ["d do dddd ddd dd", "0 0-\u0448\u0456 \u0436\u0435\u043A\u0441\u0435\u043D\u0431\u0456 \u0436\u0435\u043A \u0436\u043A"], ["DDD DDDo DDDD", "45 45-\u0448\u0456 045"], ["w wo ww", "7 7-\u0448\u0456 07"], ["h hh", "3 03"], ["H HH", "15 15"], ["m mm", "25 25"], ["s ss", "50 50"], ["a A", "pm PM"], ["[\u0436\u044B\u043B\u0434\u044B\u04A3] DDDo [\u043A\u04AF\u043D\u0456]", "\u0436\u044B\u043B\u0434\u044B\u04A3 45-\u0448\u0456 \u043A\u04AF\u043D\u0456"], ["LTS", "15:25:50"], ["L", "14.02.2010"], ["LL", "14 \u0430\u049B\u043F\u0430\u043D 2010"], ["LLL", "14 \u0430\u049B\u043F\u0430\u043D 2010 15:25"], ["LLLL", "\u0436\u0435\u043A\u0441\u0435\u043D\u0431\u0456, 14 \u0430\u049B\u043F\u0430\u043D 2010 15:25"], ["l", "14.2.2010"], ["ll", "14 \u0430\u049B\u043F 2010"], ["lll", "14 \u0430\u049B\u043F 2010 15:25"], ["llll", "\u0436\u0435\u043A, 14 \u0430\u049B\u043F 2010 15:25"]];
  const a = moment(new Date(2010, 1, 14, 15, 25, 50, 125));
  var m;
  for (m = 0; m < o.length; m++) {
    e.equal(a.format(o[m][0]), o[m][1], o[m][0] + " ---> " + o[m][1]);
  }
});test("format ordinal", function (e) {
  e.equal(moment([2011, 0, 1]).format("DDDo"), "1-\u0448\u0456", "1st");e.equal(moment([2011, 0, 2]).format("DDDo"), "2-\u0448\u0456", "2nd");e.equal(moment([2011, 0, 3]).format("DDDo"), "3-\u0448\u0456", "3rd");e.equal(moment([2011, 0, 4]).format("DDDo"), "4-\u0448\u0456", "4th");e.equal(moment([2011, 0, 5]).format("DDDo"), "5-\u0448\u0456", "5th");e.equal(moment([2011, 0, 6]).format("DDDo"), "6-\u0448\u044B", "6th");e.equal(moment([2011, 0, 7]).format("DDDo"), "7-\u0448\u0456", "7th");e.equal(moment([2011, 0, 8]).format("DDDo"), "8-\u0448\u0456", "8th");e.equal(moment([2011, 0, 9]).format("DDDo"), "9-\u0448\u044B", "9th");e.equal(moment([2011, 0, 10]).format("DDDo"), "10-\u0448\u044B", "10th");e.equal(moment([2011, 0, 11]).format("DDDo"), "11-\u0448\u0456", "11th");e.equal(moment([2011, 0, 12]).format("DDDo"), "12-\u0448\u0456", "12th");e.equal(moment([2011, 0, 13]).format("DDDo"), "13-\u0448\u0456", "13th");e.equal(moment([2011, 0, 14]).format("DDDo"), "14-\u0448\u0456", "14th");e.equal(moment([2011, 0, 15]).format("DDDo"), "15-\u0448\u0456", "15th");e.equal(moment([2011, 0, 16]).format("DDDo"), "16-\u0448\u044B", "16th");e.equal(moment([2011, 0, 17]).format("DDDo"), "17-\u0448\u0456", "17th");e.equal(moment([2011, 0, 18]).format("DDDo"), "18-\u0448\u0456", "18th");e.equal(moment([2011, 0, 19]).format("DDDo"), "19-\u0448\u044B", "19th");e.equal(moment([2011, 0, 20]).format("DDDo"), "20-\u0448\u044B", "20th");e.equal(moment([2011, 0, 21]).format("DDDo"), "21-\u0448\u0456", "21st");e.equal(moment([2011, 0, 22]).format("DDDo"), "22-\u0448\u0456", "22nd");e.equal(moment([2011, 0, 23]).format("DDDo"), "23-\u0448\u0456", "23rd");e.equal(moment([2011, 0, 24]).format("DDDo"), "24-\u0448\u0456", "24th");e.equal(moment([2011, 0, 25]).format("DDDo"), "25-\u0448\u0456", "25th");e.equal(moment([2011, 0, 26]).format("DDDo"), "26-\u0448\u044B", "26th");e.equal(moment([2011, 0, 27]).format("DDDo"), "27-\u0448\u0456", "27th");e.equal(moment([2011, 0, 28]).format("DDDo"), "28-\u0448\u0456", "28th");e.equal(moment([2011, 0, 29]).format("DDDo"), "29-\u0448\u044B", "29th");e.equal(moment([2011, 0, 30]).format("DDDo"), "30-\u0448\u044B", "30th");e.equal(moment([2011, 0, 31]).format("DDDo"), "31-\u0448\u0456", "31st");
});test("format month", function (e) {
  const o = ["\u049B\u0430\u04A3\u0442\u0430\u0440 \u049B\u0430\u04A3", "\u0430\u049B\u043F\u0430\u043D \u0430\u049B\u043F", "\u043D\u0430\u0443\u0440\u044B\u0437 \u043D\u0430\u0443", "\u0441\u04D9\u0443\u0456\u0440 \u0441\u04D9\u0443", "\u043C\u0430\u043C\u044B\u0440 \u043C\u0430\u043C", "\u043C\u0430\u0443\u0441\u044B\u043C \u043C\u0430\u0443", "\u0448\u0456\u043B\u0434\u0435 \u0448\u0456\u043B", "\u0442\u0430\u043C\u044B\u0437 \u0442\u0430\u043C", "\u049B\u044B\u0440\u043A\u04AF\u0439\u0435\u043A \u049B\u044B\u0440", "\u049B\u0430\u0437\u0430\u043D \u049B\u0430\u0437", "\u049B\u0430\u0440\u0430\u0448\u0430 \u049B\u0430\u0440", "\u0436\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D \u0436\u0435\u043B"];
  var a;
  for (a = 0; a < o.length; a++) {
    e.equal(moment([2011, a, 1]).format("MMMM MMM"), o[a], o[a]);
  }
});test("format week", function (e) {
  const o = ["\u0436\u0435\u043A\u0441\u0435\u043D\u0431\u0456 \u0436\u0435\u043A \u0436\u043A", "\u0434\u04AF\u0439\u0441\u0435\u043D\u0431\u0456 \u0434\u04AF\u0439 \u0434\u0439", "\u0441\u0435\u0439\u0441\u0435\u043D\u0431\u0456 \u0441\u0435\u0439 \u0441\u0439", "\u0441\u04D9\u0440\u0441\u0435\u043D\u0431\u0456 \u0441\u04D9\u0440 \u0441\u0440", "\u0431\u0435\u0439\u0441\u0435\u043D\u0431\u0456 \u0431\u0435\u0439 \u0431\u0439", "\u0436\u04B1\u043C\u0430 \u0436\u04B1\u043C \u0436\u043C", "\u0441\u0435\u043D\u0431\u0456 \u0441\u0435\u043D \u0441\u043D"];
  var a;
  for (a = 0; a < o.length; a++) {
    e.equal(moment([2011, 0, 2 + a]).format("dddd ddd dd"), o[a], o[a]);
  }
});test("from", function (e) {
  const o = moment([2007, 1, 28]);
  e.equal(o.from(moment([2007, 1, 28]).add({ s: 44 }), true), "\u0431\u0456\u0440\u043D\u0435\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434", "44 seconds = a few seconds");e.equal(o.from(moment([2007, 1, 28]).add({ s: 45 }), true), "\u0431\u0456\u0440 \u043C\u0438\u043D\u0443\u0442", "45 seconds = a minute");e.equal(o.from(moment([2007, 1, 28]).add({ s: 89 }), true), "\u0431\u0456\u0440 \u043C\u0438\u043D\u0443\u0442", "89 seconds = a minute");e.equal(o.from(moment([2007, 1, 28]).add({ s: 90 }), true), "2 \u043C\u0438\u043D\u0443\u0442", "90 seconds = 2 minutes");e.equal(o.from(moment([2007, 1, 28]).add({ m: 44 }), true), "44 \u043C\u0438\u043D\u0443\u0442", "44 minutes = 44 minutes");e.equal(o.from(moment([2007, 1, 28]).add({ m: 45 }), true), "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442", "45 minutes = an hour");e.equal(o.from(moment([2007, 1, 28]).add({ m: 89 }), true), "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442", "89 minutes = an hour");e.equal(o.from(moment([2007, 1, 28]).add({ m: 90 }), true), "2 \u0441\u0430\u0493\u0430\u0442", "90 minutes = 2 hours");e.equal(o.from(moment([2007, 1, 28]).add({ h: 5 }), true), "5 \u0441\u0430\u0493\u0430\u0442", "5 hours = 5 hours");e.equal(o.from(moment([2007, 1, 28]).add({ h: 21 }), true), "21 \u0441\u0430\u0493\u0430\u0442", "21 hours = 21 hours");e.equal(o.from(moment([2007, 1, 28]).add({ h: 22 }), true), "\u0431\u0456\u0440 \u043A\u04AF\u043D", "22 hours = a day");e.equal(o.from(moment([2007, 1, 28]).add({ h: 35 }), true), "\u0431\u0456\u0440 \u043A\u04AF\u043D", "35 hours = a day");e.equal(o.from(moment([2007, 1, 28]).add({ h: 36 }), true), "2 \u043A\u04AF\u043D", "36 hours = 2 days");e.equal(o.from(moment([2007, 1, 28]).add({ d: 1 }), true), "\u0431\u0456\u0440 \u043A\u04AF\u043D", "1 day = a day");e.equal(o.from(moment([2007, 1, 28]).add({ d: 5 }), true), "5 \u043A\u04AF\u043D", "5 days = 5 days");e.equal(o.from(moment([2007, 1, 28]).add({ d: 25 }), true), "25 \u043A\u04AF\u043D", "25 days = 25 days");e.equal(o.from(moment([2007, 1, 28]).add({ d: 26 }), true), "\u0431\u0456\u0440 \u0430\u0439", "26 days = a month");e.equal(o.from(moment([2007, 1, 28]).add({ d: 30 }), true), "\u0431\u0456\u0440 \u0430\u0439", "30 days = a month");e.equal(o.from(moment([2007, 1, 28]).add({ d: 43 }), true), "\u0431\u0456\u0440 \u0430\u0439", "43 days = a month");e.equal(o.from(moment([2007, 1, 28]).add({ d: 46 }), true), "2 \u0430\u0439", "46 days = 2 months");e.equal(o.from(moment([2007, 1, 28]).add({ d: 74 }), true), "2 \u0430\u0439", "75 days = 2 months");e.equal(o.from(moment([2007, 1, 28]).add({ d: 76 }), true), "3 \u0430\u0439", "76 days = 3 months");e.equal(o.from(moment([2007, 1, 28]).add({ M: 1 }), true), "\u0431\u0456\u0440 \u0430\u0439", "1 month = a month");e.equal(o.from(moment([2007, 1, 28]).add({ M: 5 }), true), "5 \u0430\u0439", "5 months = 5 months");e.equal(o.from(moment([2007, 1, 28]).add({ d: 345 }), true), "\u0431\u0456\u0440 \u0436\u044B\u043B", "345 days = a year");e.equal(o.from(moment([2007, 1, 28]).add({ d: 548 }), true), "2 \u0436\u044B\u043B", "548 days = 2 years");e.equal(o.from(moment([2007, 1, 28]).add({ y: 1 }), true), "\u0431\u0456\u0440 \u0436\u044B\u043B", "1 year = a year");e.equal(o.from(moment([2007, 1, 28]).add({ y: 5 }), true), "5 \u0436\u044B\u043B", "5 years = 5 years");
});test("suffix", function (e) {
  e.equal(moment(3e4).from(0), "\u0431\u0456\u0440\u043D\u0435\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434 \u0456\u0448\u0456\u043D\u0434\u0435", "prefix");e.equal(moment(0).from(3e4), "\u0431\u0456\u0440\u043D\u0435\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434 \u0431\u04B1\u0440\u044B\u043D", "suffix");
});test("now from now", function (e) {
  e.equal(moment().fromNow(), "\u0431\u0456\u0440\u043D\u0435\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434 \u0431\u04B1\u0440\u044B\u043D", "now from now should display as in the past");
});test("fromNow", function (e) {
  e.equal(moment().add({ s: 30 }).fromNow(), "\u0431\u0456\u0440\u043D\u0435\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434 \u0456\u0448\u0456\u043D\u0434\u0435", "in a few seconds");e.equal(moment().add({ d: 5 }).fromNow(), "5 \u043A\u04AF\u043D \u0456\u0448\u0456\u043D\u0434\u0435", "in 5 days");
});test("calendar day", function (e) {
  const o = moment().hours(12).minutes(0).seconds(0);
  e.equal(moment(o).calendar(), "\u0411\u04AF\u0433\u0456\u043D \u0441\u0430\u0493\u0430\u0442 12:00", "today at the same time");e.equal(moment(o).add({ m: 25 }).calendar(), "\u0411\u04AF\u0433\u0456\u043D \u0441\u0430\u0493\u0430\u0442 12:25", "Now plus 25 min");e.equal(moment(o).add({ h: 1 }).calendar(), "\u0411\u04AF\u0433\u0456\u043D \u0441\u0430\u0493\u0430\u0442 13:00", "Now plus 1 hour");e.equal(moment(o).add({ d: 1 }).calendar(), "\u0415\u0440\u0442\u0435\u04A3 \u0441\u0430\u0493\u0430\u0442 12:00", "tomorrow at the same time");e.equal(moment(o).subtract({ h: 1 }).calendar(), "\u0411\u04AF\u0433\u0456\u043D \u0441\u0430\u0493\u0430\u0442 11:00", "Now minus 1 hour");e.equal(moment(o).subtract({ d: 1 }).calendar(), "\u041A\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442 12:00", "yesterday at the same time");
});test("calendar next week", function (e) {
  var o;
  var a;
  for (o = 2; o < 7; o++) {
    a = moment().add({ d: o });e.equal(a.calendar(), a.format("dddd [\u0441\u0430\u0493\u0430\u0442] LT"), "Today + " + o + " days current time");a.hours(0).minutes(0).seconds(0).milliseconds(0);e.equal(a.calendar(), a.format("dddd [\u0441\u0430\u0493\u0430\u0442] LT"), "Today + " + o + " days beginning of day");a.hours(23).minutes(59).seconds(59).milliseconds(999);e.equal(a.calendar(), a.format("dddd [\u0441\u0430\u0493\u0430\u0442] LT"), "Today + " + o + " days end of day");
  }
});test("calendar last week", function (e) {
  var o;
  var a;
  for (o = 2; o < 7; o++) {
    a = moment().subtract({ d: o });e.equal(a.calendar(), a.format("[\u04E8\u0442\u043A\u0435\u043D \u0430\u043F\u0442\u0430\u043D\u044B\u04A3] dddd [\u0441\u0430\u0493\u0430\u0442] LT"), "Today - " + o + " days current time");a.hours(0).minutes(0).seconds(0).milliseconds(0);e.equal(a.calendar(), a.format("[\u04E8\u0442\u043A\u0435\u043D \u0430\u043F\u0442\u0430\u043D\u044B\u04A3] dddd [\u0441\u0430\u0493\u0430\u0442] LT"), "Today - " + o + " days beginning of day");a.hours(23).minutes(59).seconds(59).milliseconds(999);e.equal(a.calendar(), a.format("[\u04E8\u0442\u043A\u0435\u043D \u0430\u043F\u0442\u0430\u043D\u044B\u04A3] dddd [\u0441\u0430\u0493\u0430\u0442] LT"), "Today - " + o + " days end of day");
  }
});test("calendar all else", function (e) {
  var o = moment().subtract({ w: 1 });
  var a = moment().add({ w: 1 });
  e.equal(o.calendar(), o.format("L"), "1 week ago");e.equal(a.calendar(), a.format("L"), "in 1 week");o = moment().subtract({ w: 2 });a = moment().add({ w: 2 });e.equal(o.calendar(), o.format("L"), "2 weeks ago");e.equal(a.calendar(), a.format("L"), "in 2 weeks");
});test("weeks year starting sunday formatted", function (e) {
  e.equal(moment([2012, 0, 1]).format("w ww wo"), "1 01 1-\u0448\u0456", "Jan  1 2012 should be week 1");e.equal(moment([2012, 0, 2]).format("w ww wo"), "2 02 2-\u0448\u0456", "Jan  2 2012 should be week 2");e.equal(moment([2012, 0, 8]).format("w ww wo"), "2 02 2-\u0448\u0456", "Jan  8 2012 should be week 2");e.equal(moment([2012, 0, 9]).format("w ww wo"), "3 03 3-\u0448\u0456", "Jan  9 2012 should be week 3");e.equal(moment([2012, 0, 15]).format("w ww wo"), "3 03 3-\u0448\u0456", "Jan 15 2012 should be week 3");
});