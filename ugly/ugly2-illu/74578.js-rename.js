import { test } from "../qunit";import { localeModule } from "../qunit-locale";import moment from "../../moment";localeModule("me");test("parse", function (m) {
  const e = ["januar jan.", "februar feb.", "mart mar.", "april apr.", "maj maj", "jun jun", "jul jul", "avgust avg.", "septembar sep.", "oktobar okt.", "novembar nov.", "decembar dec."];
  var a;
  function o(e, a, o) {
    m.equal(moment(e, a).month(), o, e + " should be month " + (o + 1));
  }function t(e, a, o) {
    m.equal(moment(e, a, true).month(), o, e + " " + a + " should be strict month " + (o + 1));
  }for (a = 0; a < 12; a++) {
    e[a] = e[a].split(" ");o(e[a][0], "MMM", a);o(e[a][1], "MMM", a);o(e[a][0], "MMMM", a);o(e[a][1], "MMMM", a);o(e[a][0].toLocaleLowerCase(), "MMMM", a);o(e[a][1].toLocaleLowerCase(), "MMMM", a);o(e[a][0].toLocaleUpperCase(), "MMMM", a);o(e[a][1].toLocaleUpperCase(), "MMMM", a);t(e[a][1], "MMM", a);t(e[a][0], "MMMM", a);t(e[a][1].toLocaleLowerCase(), "MMM", a);t(e[a][1].toLocaleUpperCase(), "MMM", a);t(e[a][0].toLocaleLowerCase(), "MMMM", a);t(e[a][0].toLocaleUpperCase(), "MMMM", a);
  }
});test("format", function (e) {
  const a = [["dddd, Do MMMM YYYY, h:mm:ss a", "nedjelja, 14. februar 2010, 3:25:50 pm"], ["ddd, hA", "ned., 3PM"], ["M Mo MM MMMM MMM", "2 2. 02 februar feb."], ["YYYY YY", "2010 10"], ["D Do DD", "14 14. 14"], ["d do dddd ddd dd", "0 0. nedjelja ned. ne"], ["DDD DDDo DDDD", "45 45. 045"], ["w wo ww", "7 7. 07"], ["h hh", "3 03"], ["H HH", "15 15"], ["m mm", "25 25"], ["s ss", "50 50"], ["a A", "pm PM"], ["[the] DDDo [day of the year]", "the 45. day of the year"], ["LTS", "15:25:50"], ["L", "14.02.2010"], ["LL", "14. februar 2010"], ["LLL", "14. februar 2010 15:25"], ["LLLL", "nedjelja, 14. februar 2010 15:25"], ["l", "14.2.2010"], ["ll", "14. feb. 2010"], ["lll", "14. feb. 2010 15:25"], ["llll", "ned., 14. feb. 2010 15:25"]];
  const o = moment(new Date(2010, 1, 14, 15, 25, 50, 125));
  var m;
  for (m = 0; m < a.length; m++) {
    e.equal(o.format(a[m][0]), a[m][1], a[m][0] + " ---> " + a[m][1]);
  }
});test("format ordinal", function (e) {
  e.equal(moment([2011, 0, 1]).format("DDDo"), "1.", "1.");e.equal(moment([2011, 0, 2]).format("DDDo"), "2.", "2.");e.equal(moment([2011, 0, 3]).format("DDDo"), "3.", "3.");e.equal(moment([2011, 0, 4]).format("DDDo"), "4.", "4.");e.equal(moment([2011, 0, 5]).format("DDDo"), "5.", "5.");e.equal(moment([2011, 0, 6]).format("DDDo"), "6.", "6.");e.equal(moment([2011, 0, 7]).format("DDDo"), "7.", "7.");e.equal(moment([2011, 0, 8]).format("DDDo"), "8.", "8.");e.equal(moment([2011, 0, 9]).format("DDDo"), "9.", "9.");e.equal(moment([2011, 0, 10]).format("DDDo"), "10.", "10.");e.equal(moment([2011, 0, 11]).format("DDDo"), "11.", "11.");e.equal(moment([2011, 0, 12]).format("DDDo"), "12.", "12.");e.equal(moment([2011, 0, 13]).format("DDDo"), "13.", "13.");e.equal(moment([2011, 0, 14]).format("DDDo"), "14.", "14.");e.equal(moment([2011, 0, 15]).format("DDDo"), "15.", "15.");e.equal(moment([2011, 0, 16]).format("DDDo"), "16.", "16.");e.equal(moment([2011, 0, 17]).format("DDDo"), "17.", "17.");e.equal(moment([2011, 0, 18]).format("DDDo"), "18.", "18.");e.equal(moment([2011, 0, 19]).format("DDDo"), "19.", "19.");e.equal(moment([2011, 0, 20]).format("DDDo"), "20.", "20.");e.equal(moment([2011, 0, 21]).format("DDDo"), "21.", "21.");e.equal(moment([2011, 0, 22]).format("DDDo"), "22.", "22.");e.equal(moment([2011, 0, 23]).format("DDDo"), "23.", "23.");e.equal(moment([2011, 0, 24]).format("DDDo"), "24.", "24.");e.equal(moment([2011, 0, 25]).format("DDDo"), "25.", "25.");e.equal(moment([2011, 0, 26]).format("DDDo"), "26.", "26.");e.equal(moment([2011, 0, 27]).format("DDDo"), "27.", "27.");e.equal(moment([2011, 0, 28]).format("DDDo"), "28.", "28.");e.equal(moment([2011, 0, 29]).format("DDDo"), "29.", "29.");e.equal(moment([2011, 0, 30]).format("DDDo"), "30.", "30.");e.equal(moment([2011, 0, 31]).format("DDDo"), "31.", "31.");
});test("format month", function (e) {
  const a = ["januar jan.", "februar feb.", "mart mar.", "april apr.", "maj maj", "jun jun", "jul jul", "avgust avg.", "septembar sep.", "oktobar okt.", "novembar nov.", "decembar dec."];
  var o;
  for (o = 0; o < a.length; o++) {
    e.equal(moment([2011, o, 1]).format("MMMM MMM"), a[o], a[o]);
  }
});test("format week", function (e) {
  const a = ["nedjelja ned. ne", "ponedjeljak pon. po", "utorak uto. ut", "srijeda sri. sr", "\u010Detvrtak \u010Det. \u010De", "petak pet. pe", "subota sub. su"];
  var o;
  for (o = 0; o < a.length; o++) {
    e.equal(moment([2011, 0, 2 + o]).format("dddd ddd dd"), a[o], a[o]);
  }
});test("from", function (e) {
  const a = moment([2007, 1, 28]);
  e.equal(a.from(moment([2007, 1, 28]).add({ s: 44 }), true), "nekoliko sekundi", "44 seconds = a few seconds");e.equal(a.from(moment([2007, 1, 28]).add({ s: 45 }), true), "jedan minut", "45 seconds = a minute");e.equal(a.from(moment([2007, 1, 28]).add({ s: 89 }), true), "jedan minut", "89 seconds = a minute");e.equal(a.from(moment([2007, 1, 28]).add({ s: 90 }), true), "2 minuta", "90 seconds = 2 minutes");e.equal(a.from(moment([2007, 1, 28]).add({ m: 44 }), true), "44 minuta", "44 minutes = 44 minutes");e.equal(a.from(moment([2007, 1, 28]).add({ m: 45 }), true), "jedan sat", "45 minutes = an hour");e.equal(a.from(moment([2007, 1, 28]).add({ m: 89 }), true), "jedan sat", "89 minutes = an hour");e.equal(a.from(moment([2007, 1, 28]).add({ m: 90 }), true), "2 sata", "90 minutes = 2 hours");e.equal(a.from(moment([2007, 1, 28]).add({ h: 5 }), true), "5 sati", "5 hours = 5 hours");e.equal(a.from(moment([2007, 1, 28]).add({ h: 21 }), true), "21 sati", "21 hours = 21 hours");e.equal(a.from(moment([2007, 1, 28]).add({ h: 22 }), true), "dan", "22 hours = a day");e.equal(a.from(moment([2007, 1, 28]).add({ h: 35 }), true), "dan", "35 hours = a day");e.equal(a.from(moment([2007, 1, 28]).add({ h: 36 }), true), "2 dana", "36 hours = 2 days");e.equal(a.from(moment([2007, 1, 28]).add({ d: 1 }), true), "dan", "1 day = a day");e.equal(a.from(moment([2007, 1, 28]).add({ d: 5 }), true), "5 dana", "5 days = 5 days");e.equal(a.from(moment([2007, 1, 28]).add({ d: 25 }), true), "25 dana", "25 days = 25 days");e.equal(a.from(moment([2007, 1, 28]).add({ d: 26 }), true), "mjesec", "26 days = a month");e.equal(a.from(moment([2007, 1, 28]).add({ d: 30 }), true), "mjesec", "30 days = a month");e.equal(a.from(moment([2007, 1, 28]).add({ d: 43 }), true), "mjesec", "43 days = a month");e.equal(a.from(moment([2007, 1, 28]).add({ d: 46 }), true), "2 mjeseca", "46 days = 2 months");e.equal(a.from(moment([2007, 1, 28]).add({ d: 74 }), true), "2 mjeseca", "75 days = 2 months");e.equal(a.from(moment([2007, 1, 28]).add({ d: 76 }), true), "3 mjeseca", "76 days = 3 months");e.equal(a.from(moment([2007, 1, 28]).add({ M: 1 }), true), "mjesec", "1 month = a month");e.equal(a.from(moment([2007, 1, 28]).add({ M: 5 }), true), "5 mjeseci", "5 months = 5 months");e.equal(a.from(moment([2007, 1, 28]).add({ d: 345 }), true), "godinu", "345 days = a year");e.equal(a.from(moment([2007, 1, 28]).add({ d: 548 }), true), "2 godine", "548 days = 2 years");e.equal(a.from(moment([2007, 1, 28]).add({ y: 1 }), true), "godinu", "1 year = a year");e.equal(a.from(moment([2007, 1, 28]).add({ y: 5 }), true), "5 godina", "5 years = 5 years");
});test("suffix", function (e) {
  e.equal(moment(3e4).from(0), "za nekoliko sekundi", "prefix");e.equal(moment(0).from(3e4), "prije nekoliko sekundi", "prefix");
});test("now from now", function (e) {
  e.equal(moment().fromNow(), "prije nekoliko sekundi", "now from now should display as in the past");
});test("fromNow", function (e) {
  e.equal(moment().add({ s: 30 }).fromNow(), "za nekoliko sekundi", "in a few seconds");e.equal(moment().add({ d: 5 }).fromNow(), "za 5 dana", "in 5 days");
});test("calendar day", function (e) {
  const a = moment().hours(12).minutes(0).seconds(0);
  e.equal(moment(a).calendar(), "danas u 12:00", "today at the same time");e.equal(moment(a).add({ m: 25 }).calendar(), "danas u 12:25", "Now plus 25 min");e.equal(moment(a).add({ h: 1 }).calendar(), "danas u 13:00", "Now plus 1 hour");e.equal(moment(a).add({ d: 1 }).calendar(), "sjutra u 12:00", "tomorrow at the same time");e.equal(moment(a).subtract({ h: 1 }).calendar(), "danas u 11:00", "Now minus 1 hour");e.equal(moment(a).subtract({ d: 1 }).calendar(), "ju\u010De u 12:00", "yesterday at the same time");
});test("calendar next week", function (e) {
  var a;
  var o;
  function m(e) {
    switch (e.day()) {case 0:
        return "[u] [nedjelju] [u] LT";case 3:
        return "[u] [srijedu] [u] LT";case 6:
        return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
        return "[u] dddd [u] LT";}
  }for (a = 2; a < 7; a++) {
    o = moment().add({ d: a });e.equal(o.calendar(), o.format(m(o)), "Today + " + a + " days current time");o.hours(0).minutes(0).seconds(0).milliseconds(0);e.equal(o.calendar(), o.format(m(o)), "Today + " + a + " days beginning of day");o.hours(23).minutes(59).seconds(59).milliseconds(999);e.equal(o.calendar(), o.format(m(o)), "Today + " + a + " days end of day");
  }
});test("calendar last week", function (e) {
  var a;
  var o;
  function m(e) {
    const a = ["[pro\u0161le] [nedjelje] [u] LT", "[pro\u0161log] [ponedjeljka] [u] LT", "[pro\u0161log] [utorka] [u] LT", "[pro\u0161le] [srijede] [u] LT", "[pro\u0161log] [\u010Detvrtka] [u] LT", "[pro\u0161log] [petka] [u] LT", "[pro\u0161le] [subote] [u] LT"];
    return a[e.day()];
  }for (a = 2; a < 7; a++) {
    o = moment().subtract({ d: a });e.equal(o.calendar(), o.format(m(o)), "Today - " + a + " days current time");o.hours(0).minutes(0).seconds(0).milliseconds(0);e.equal(o.calendar(), o.format(m(o)), "Today - " + a + " days beginning of day");o.hours(23).minutes(59).seconds(59).milliseconds(999);e.equal(o.calendar(), o.format(m(o)), "Today - " + a + " days end of day");
  }
});test("calendar all else", function (e) {
  var a = moment().subtract({ w: 1 });
  var o = moment().add({ w: 1 });
  e.equal(a.calendar(), a.format("L"), "1 week ago");e.equal(o.calendar(), o.format("L"), "in 1 week");a = moment().subtract({ w: 2 });o = moment().add({ w: 2 });e.equal(a.calendar(), a.format("L"), "2 weeks ago");e.equal(o.calendar(), o.format("L"), "in 2 weeks");
});test("weeks year starting sunday formatted", function (e) {
  e.equal(moment([2011, 11, 26]).format("w ww wo"), "1 01 1.", "Dec 26 2011 should be week 1");e.equal(moment([2012, 0, 1]).format("w ww wo"), "1 01 1.", "Jan  1 2012 should be week 1");e.equal(moment([2012, 0, 2]).format("w ww wo"), "2 02 2.", "Jan  2 2012 should be week 2");e.equal(moment([2012, 0, 8]).format("w ww wo"), "2 02 2.", "Jan  8 2012 should be week 2");e.equal(moment([2012, 0, 9]).format("w ww wo"), "3 03 3.", "Jan  9 2012 should be week 3");
});