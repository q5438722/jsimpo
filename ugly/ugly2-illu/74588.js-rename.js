import { test } from "../qunit";import { localeModule } from "../qunit-locale";import moment from "../../moment";localeModule("oc-lnc");test("parse", function (m) {
  const e = ["geni\xE8r gen.", "febri\xE8r febr.", "mar\xE7 mar\xE7", "abril abr.", "mai mai", "junh junh", "julhet julh.", "agost ago.", "setembre set.", "oct\xF2bre oct.", "novembre nov.", "decembre dec."];
  var a;
  function o(e, a, o) {
    m.equal(moment(e, a).month(), o, e + " should be month " + (o + 1));
  }for (a = 0; a < 12; a++) {
    e[a] = e[a].split(" ");o(e[a][0], "MMM", a);o(e[a][1], "MMM", a);o(e[a][0], "MMMM", a);o(e[a][1], "MMMM", a);o(e[a][0].toLocaleLowerCase(), "MMMM", a);o(e[a][1].toLocaleLowerCase(), "MMMM", a);o(e[a][0].toLocaleUpperCase(), "MMMM", a);o(e[a][1].toLocaleUpperCase(), "MMMM", a);
  }
});test("format", function (e) {
  const a = [["dddd, Do MMMM YYYY, h:mm:ss a", "dimenge, 14\xE8 de febri\xE8r 2010, 3:25:50 pm"], ["ddd, hA", "dg., 3PM"], ["M Mo MM MMMM MMM", "2 2n 02 febri\xE8r febr."], ["YYYY YY", "2010 10"], ["D Do DD", "14 14\xE8 14"], ["d do dddd ddd dd", "0 0\xE8 dimenge dg. dg"], ["DDD DDDo DDDD", "45 45\xE8 045"], ["w wo ww", "6 6a 06"], ["h hh", "3 03"], ["H HH", "15 15"], ["m mm", "25 25"], ["s ss", "50 50"], ["a A", "pm PM"], ["[the] DDDo [day of the year]", "the 45\xE8 day of the year"], ["LTS", "15:25:50"], ["L", "14/02/2010"], ["LL", "14 de febri\xE8r de 2010"], ["LLL", "14 de febri\xE8r de 2010 a 15:25"], ["LLLL", "dimenge 14 de febri\xE8r de 2010 a 15:25"], ["l", "14/2/2010"], ["ll", "14 febr. 2010"], ["lll", "14 febr. 2010, 15:25"], ["llll", "dg. 14 febr. 2010, 15:25"]];
  const o = moment(new Date(2010, 1, 14, 15, 25, 50, 125));
  var m;
  for (m = 0; m < a.length; m++) {
    e.equal(o.format(a[m][0]), a[m][1], a[m][0] + " ---> " + a[m][1]);
  }
});test("format ordinal", function (e) {
  e.equal(moment([2011, 0, 1]).format("DDDo"), "1r", "1r");e.equal(moment([2011, 0, 2]).format("DDDo"), "2n", "2n");e.equal(moment([2011, 0, 3]).format("DDDo"), "3r", "3r");e.equal(moment([2011, 0, 4]).format("DDDo"), "4t", "4t");e.equal(moment([2011, 0, 5]).format("DDDo"), "5\xE8", "5\xE8");e.equal(moment([2011, 0, 6]).format("DDDo"), "6\xE8", "6\xE8");e.equal(moment([2011, 0, 7]).format("DDDo"), "7\xE8", "7\xE8");e.equal(moment([2011, 0, 8]).format("DDDo"), "8\xE8", "8\xE8");e.equal(moment([2011, 0, 9]).format("DDDo"), "9\xE8", "9\xE8");e.equal(moment([2011, 0, 10]).format("DDDo"), "10\xE8", "10\xE8");e.equal(moment([2011, 0, 11]).format("DDDo"), "11\xE8", "11\xE8");e.equal(moment([2011, 0, 12]).format("DDDo"), "12\xE8", "12\xE8");e.equal(moment([2011, 0, 13]).format("DDDo"), "13\xE8", "13\xE8");e.equal(moment([2011, 0, 14]).format("DDDo"), "14\xE8", "14\xE8");e.equal(moment([2011, 0, 15]).format("DDDo"), "15\xE8", "15\xE8");e.equal(moment([2011, 0, 16]).format("DDDo"), "16\xE8", "16\xE8");e.equal(moment([2011, 0, 17]).format("DDDo"), "17\xE8", "17\xE8");e.equal(moment([2011, 0, 18]).format("DDDo"), "18\xE8", "18\xE8");e.equal(moment([2011, 0, 19]).format("DDDo"), "19\xE8", "19\xE8");e.equal(moment([2011, 0, 20]).format("DDDo"), "20\xE8", "20\xE8");e.equal(moment([2011, 0, 21]).format("DDDo"), "21\xE8", "21\xE8");e.equal(moment([2011, 0, 22]).format("DDDo"), "22\xE8", "22\xE8");e.equal(moment([2011, 0, 23]).format("DDDo"), "23\xE8", "23\xE8");e.equal(moment([2011, 0, 24]).format("DDDo"), "24\xE8", "24\xE8");e.equal(moment([2011, 0, 25]).format("DDDo"), "25\xE8", "25\xE8");e.equal(moment([2011, 0, 26]).format("DDDo"), "26\xE8", "26\xE8");e.equal(moment([2011, 0, 27]).format("DDDo"), "27\xE8", "27\xE8");e.equal(moment([2011, 0, 28]).format("DDDo"), "28\xE8", "28\xE8");e.equal(moment([2011, 0, 29]).format("DDDo"), "29\xE8", "29\xE8");e.equal(moment([2011, 0, 30]).format("DDDo"), "30\xE8", "30\xE8");e.equal(moment([2011, 0, 31]).format("DDDo"), "31\xE8", "31\xE8");
});test("format month", function (e) {
  const a = ["geni\xE8r gen.", "febri\xE8r febr.", "mar\xE7 mar\xE7", "abril abr.", "mai mai", "junh junh", "julhet julh.", "agost ago.", "setembre set.", "oct\xF2bre oct.", "novembre nov.", "decembre dec."];
  var o;
  for (o = 0; o < a.length; o++) {
    e.equal(moment([2011, o, 1]).format("MMMM MMM"), a[o], a[o]);
  }
});test("format week", function (e) {
  const a = ["dimenge dg. dg", "diluns dl. dl", "dimars dm. dm", "dim\xE8cres dc. dc", "dij\xF2us dj. dj", "divendres dv. dv", "dissabte ds. ds"];
  var o;
  for (o = 0; o < a.length; o++) {
    e.equal(moment([2011, 0, 2 + o]).format("dddd ddd dd"), a[o], a[o]);
  }
});test("from", function (e) {
  const a = moment([2007, 1, 28]);
  e.equal(a.from(moment([2007, 1, 28]).add({ s: 44 }), true), "unas segondas", "44 seconds = a few seconds");e.equal(a.from(moment([2007, 1, 28]).add({ s: 45 }), true), "una minuta", "45 seconds = a minute");e.equal(a.from(moment([2007, 1, 28]).add({ s: 89 }), true), "una minuta", "89 seconds = a minute");e.equal(a.from(moment([2007, 1, 28]).add({ s: 90 }), true), "2 minutas", "90 seconds = 2 minutes");e.equal(a.from(moment([2007, 1, 28]).add({ m: 44 }), true), "44 minutas", "44 minutes = 44 minutes");e.equal(a.from(moment([2007, 1, 28]).add({ m: 45 }), true), "una ora", "45 minutes = an hour");e.equal(a.from(moment([2007, 1, 28]).add({ m: 89 }), true), "una ora", "89 minutes = an hour");e.equal(a.from(moment([2007, 1, 28]).add({ m: 90 }), true), "2 oras", "90 minutes = 2 hours");e.equal(a.from(moment([2007, 1, 28]).add({ h: 5 }), true), "5 oras", "5 hours = 5 hours");e.equal(a.from(moment([2007, 1, 28]).add({ h: 21 }), true), "21 oras", "21 hours = 21 hours");e.equal(a.from(moment([2007, 1, 28]).add({ h: 22 }), true), "un jorn", "22 hours = a day");e.equal(a.from(moment([2007, 1, 28]).add({ h: 35 }), true), "un jorn", "35 hours = a day");e.equal(a.from(moment([2007, 1, 28]).add({ h: 36 }), true), "2 jorns", "36 hours = 2 days");e.equal(a.from(moment([2007, 1, 28]).add({ d: 1 }), true), "un jorn", "1 day = a day");e.equal(a.from(moment([2007, 1, 28]).add({ d: 5 }), true), "5 jorns", "5 days = 5 days");e.equal(a.from(moment([2007, 1, 28]).add({ d: 25 }), true), "25 jorns", "25 days = 25 days");e.equal(a.from(moment([2007, 1, 28]).add({ d: 26 }), true), "un mes", "26 days = a month");e.equal(a.from(moment([2007, 1, 28]).add({ d: 30 }), true), "un mes", "30 days = a month");e.equal(a.from(moment([2007, 1, 28]).add({ d: 43 }), true), "un mes", "43 days = a month");e.equal(a.from(moment([2007, 1, 28]).add({ d: 46 }), true), "2 meses", "46 days = 2 months");e.equal(a.from(moment([2007, 1, 28]).add({ d: 74 }), true), "2 meses", "75 days = 2 months");e.equal(a.from(moment([2007, 1, 28]).add({ d: 76 }), true), "3 meses", "76 days = 3 months");e.equal(a.from(moment([2007, 1, 28]).add({ M: 1 }), true), "un mes", "1 month = a month");e.equal(a.from(moment([2007, 1, 28]).add({ M: 5 }), true), "5 meses", "5 months = 5 months");e.equal(a.from(moment([2007, 1, 28]).add({ d: 345 }), true), "un an", "345 days = a year");e.equal(a.from(moment([2007, 1, 28]).add({ d: 548 }), true), "2 ans", "548 days = 2 years");e.equal(a.from(moment([2007, 1, 28]).add({ y: 1 }), true), "un an", "1 year = a year");e.equal(a.from(moment([2007, 1, 28]).add({ y: 5 }), true), "5 ans", "5 years = 5 years");
});test("suffix", function (e) {
  e.equal(moment(3e4).from(0), "d'aqu\xED unas segondas", "prefix");e.equal(moment(0).from(3e4), "fa unas segondas", "suffix");
});test("now from now", function (e) {
  e.equal(moment().fromNow(), "fa unas segondas", "now from now should display as in the past");
});test("fromNow", function (e) {
  e.equal(moment().add({ s: 30 }).fromNow(), "d'aqu\xED unas segondas", "d'aqu\xED unas segondas");e.equal(moment().add({ d: 5 }).fromNow(), "d'aqu\xED 5 jorns", "d'aqu\xED 5 jorns");
});test("calendar day", function (e) {
  const a = moment().hours(12).minutes(0).seconds(0);
  e.equal(moment(a).calendar(), "u\xE8i a 12:00", "today at the same time");e.equal(moment(a).add({ m: 25 }).calendar(), "u\xE8i a 12:25", "Now plus 25 min");e.equal(moment(a).add({ h: 1 }).calendar(), "u\xE8i a 13:00", "Now plus 1 hour");e.equal(moment(a).add({ d: 1 }).calendar(), "deman a 12:00", "tomorrow at the same time");e.equal(moment(a).add({ d: 1, h: -1 }).calendar(), "deman a 11:00", "tomorrow minus 1 hour");e.equal(moment(a).subtract({ h: 1 }).calendar(), "u\xE8i a 11:00", "Now minus 1 hour");e.equal(moment(a).subtract({ d: 1 }).calendar(), "i\xE8r a 12:00", "yesterday at the same time");
});test("calendar next week", function (e) {
  var a;
  var o;
  for (a = 2; a < 7; a++) {
    o = moment().add({ d: a });e.equal(o.calendar(), o.format("dddd [a] LT"), "Today + " + a + " days current time");o.hours(0).minutes(0).seconds(0).milliseconds(0);e.equal(o.calendar(), o.format("dddd [a] LT"), "Today + " + a + " days beginning of day");o.hours(23).minutes(59).seconds(59).milliseconds(999);e.equal(o.calendar(), o.format("dddd [a] LT"), "Today + " + a + " days end of day");
  }
});test("calendar last week", function (e) {
  var a;
  var o;
  for (a = 2; a < 7; a++) {
    o = moment().subtract({ d: a });e.equal(o.calendar(), o.format("dddd [passat a] LT"), "Today - " + a + " days current time");o.hours(0).minutes(0).seconds(0).milliseconds(0);e.equal(o.calendar(), o.format("dddd [passat a] LT"), "Today - " + a + " days beginning of day");o.hours(23).minutes(59).seconds(59).milliseconds(999);e.equal(o.calendar(), o.format("dddd [passat a] LT"), "Today - " + a + " days end of day");
  }
});test("calendar all else", function (e) {
  var a = moment().subtract({ w: 1 });
  var o = moment().add({ w: 1 });
  e.equal(a.calendar(), a.format("L"), "1 week ago");e.equal(o.calendar(), o.format("L"), "in 1 week");a = moment().subtract({ w: 2 });o = moment().add({ w: 2 });e.equal(a.calendar(), a.format("L"), "2 weeks ago");e.equal(o.calendar(), o.format("L"), "in 2 weeks");
});test("weeks year starting sunday formatted", function (e) {
  e.equal(moment([2012, 0, 1]).format("w ww wo"), "52 52 52a", "Jan  1 2012 should be week 52");e.equal(moment([2012, 0, 2]).format("w ww wo"), "1 01 1a", "Jan  2 2012 should be week 1");e.equal(moment([2012, 0, 8]).format("w ww wo"), "1 01 1a", "Jan  8 2012 should be week 1");e.equal(moment([2012, 0, 9]).format("w ww wo"), "2 02 2a", "Jan  9 2012 should be week 2");e.equal(moment([2012, 0, 15]).format("w ww wo"), "2 02 2a", "Jan 15 2012 should be week 2");
});test("day and month", function (e) {
  e.equal(moment([2012, 1, 15]).format("D MMMM"), "15 de febri\xE8r");e.equal(moment([2012, 9, 15]).format("D MMMM"), "15 d'oct\xF2bre");e.equal(moment([2012, 9, 15]).format("MMMM, D"), "oct\xF2bre, 15");
});
