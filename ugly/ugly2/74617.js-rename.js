import{test}from"../qunit";import{localeModule}from"../qunit-locale";import moment from"../../moment";localeModule("km");test("parse",function(m){var e="មករា មករា_កុម្ភៈ កុម្ភៈ_មីនា មីនា_មេសា មេសា_ឧសភា ឧសភា_មិថុនា មិថុនា_កក្កដា កក្កដា_សីហា សីហា_កញ្ញា កញ្ញា_តុលា តុលា_វិច្ឆិកា វិច្ឆិកា_ធ្នូ ធ្នូ".split("_"),o;function t(e,o,t){m.equal(moment(e,o).month(),t,e+" should be month "+(t+1))}function a(e,o,t){m.equal(moment(e,o,true).month(),t,e+" "+o+" should be strict month "+(t+1))}for(o=0;o<12;o++){e[o]=e[o].split(" ");t(e[o][0],"MMM",o);t(e[o][1],"MMM",o);t(e[o][0],"MMMM",o);t(e[o][1],"MMMM",o);t(e[o][0].toLocaleLowerCase(),"MMMM",o);t(e[o][1].toLocaleLowerCase(),"MMMM",o);t(e[o][0].toLocaleUpperCase(),"MMMM",o);t(e[o][1].toLocaleUpperCase(),"MMMM",o);a(e[o][1],"MMM",o);a(e[o][0],"MMMM",o);a(e[o][1].toLocaleLowerCase(),"MMM",o);a(e[o][1].toLocaleUpperCase(),"MMM",o);a(e[o][0].toLocaleLowerCase(),"MMMM",o);a(e[o][0].toLocaleUpperCase(),"MMMM",o)}});test("format",function(e){var o=[["dddd, MMMM Do YYYY, h:mm:ss a","អាទិត្យ, កុម្ភៈ ទី១៤ ២០១០, ៣:២៥:៥០ ល្ងាច"],["ddd, hA","អា, ៣ល្ងាច"],["M Mo MM MMMM MMM","២ ទី២ ០២ កុម្ភៈ កុម្ភៈ"],["YYYY YY","២០១០ ១០"],["D Do DD","១៤ ទី១៤ ១៤"],["d do dddd ddd dd","០ ទី០ អាទិត្យ អា អា"],["DDD DDDo DDDD","៤៥ ទី៤៥ ០៤៥"],["w wo ww","៦ ទី៦ ០៦"],["h hh","៣ ០៣"],["H HH","១៥ ១៥"],["m mm","២៥ ២៥"],["s ss","៥០ ៥០"],["a A","ល្ងាច ល្ងាច"],["[the] DDDo [day of the year]","the ទី៤៥ day of the year"],["LTS","១៥:២៥:៥០"],["L","១៤/០២/២០១០"],["LL","១៤ កុម្ភៈ ២០១០"],["LLL","១៤ កុម្ភៈ ២០១០ ១៥:២៥"],["LLLL","អាទិត្យ, ១៤ កុម្ភៈ ២០១០ ១៥:២៥"],["l","១៤/២/២០១០"],["ll","១៤ កុម្ភៈ ២០១០"],["lll","១៤ កុម្ភៈ ២០១០ ១៥:២៥"],["llll","អា, ១៤ កុម្ភៈ ២០១០ ១៥:២៥"]],t=moment(new Date(2010,1,14,15,25,50,125)),m;for(m=0;m<o.length;m++){e.equal(t.format(o[m][0]),o[m][1],o[m][0]+" ---\x3e "+o[m][1])}});test("format ordinal",function(e){e.equal(moment([2011,0,1]).format("DDDo"),"ទី១","1st");e.equal(moment([2011,0,2]).format("DDDo"),"ទី២","2nd");e.equal(moment([2011,0,3]).format("DDDo"),"ទី៣","3rd");e.equal(moment([2011,0,4]).format("DDDo"),"ទី៤","4th");e.equal(moment([2011,0,5]).format("DDDo"),"ទី៥","5th");e.equal(moment([2011,0,6]).format("DDDo"),"ទី៦","6th");e.equal(moment([2011,0,7]).format("DDDo"),"ទី៧","7th");e.equal(moment([2011,0,8]).format("DDDo"),"ទី៨","8th");e.equal(moment([2011,0,9]).format("DDDo"),"ទី៩","9th");e.equal(moment([2011,0,10]).format("DDDo"),"ទី១០","10th");e.equal(moment([2011,0,11]).format("DDDo"),"ទី១១","11st");e.equal(moment([2011,0,12]).format("DDDo"),"ទី១២","12nd");e.equal(moment([2011,0,13]).format("DDDo"),"ទី១៣","13rd");e.equal(moment([2011,0,14]).format("DDDo"),"ទី១៤","14th");e.equal(moment([2011,0,15]).format("DDDo"),"ទី១៥","15th");e.equal(moment([2011,0,16]).format("DDDo"),"ទី១៦","16th");e.equal(moment([2011,0,17]).format("DDDo"),"ទី១៧","17th");e.equal(moment([2011,0,18]).format("DDDo"),"ទី១៨","18th");e.equal(moment([2011,0,19]).format("DDDo"),"ទី១៩","19th");e.equal(moment([2011,0,20]).format("DDDo"),"ទី២០","20th");e.equal(moment([2011,0,21]).format("DDDo"),"ទី២១","21st");e.equal(moment([2011,0,22]).format("DDDo"),"ទី២២","22nd");e.equal(moment([2011,0,23]).format("DDDo"),"ទី២៣","23rd");e.equal(moment([2011,0,24]).format("DDDo"),"ទី២៤","24th");e.equal(moment([2011,0,25]).format("DDDo"),"ទី២៥","25th");e.equal(moment([2011,0,26]).format("DDDo"),"ទី២៦","26th");e.equal(moment([2011,0,27]).format("DDDo"),"ទី២៧","27th");e.equal(moment([2011,0,28]).format("DDDo"),"ទី២៨","28th");e.equal(moment([2011,0,29]).format("DDDo"),"ទី២៩","29th");e.equal(moment([2011,0,30]).format("DDDo"),"ទី៣០","30th");e.equal(moment([2011,0,31]).format("DDDo"),"ទី៣១","31st")});test("format month",function(e){var o="មករា មករា_កុម្ភៈ កុម្ភៈ_មីនា មីនា_មេសា មេសា_ឧសភា ឧសភា_មិថុនា មិថុនា_កក្កដា កក្កដា_សីហា សីហា_កញ្ញា កញ្ញា_តុលា តុលា_វិច្ឆិកា វិច្ឆិកា_ធ្នូ ធ្នូ".split("_"),t;for(t=0;t<o.length;t++){e.equal(moment([2011,t,1]).format("MMMM MMM"),o[t],o[t])}});test("format week",function(e){var o="អាទិត្យ អា អា_ច័ន្ទ ច ច_អង្គារ អ អ_ពុធ ព ព_ព្រហស្បតិ៍ ព្រ ព្រ_សុក្រ សុ សុ_សៅរ៍ ស ស".split("_"),t;for(t=0;t<o.length;t++){e.equal(moment([2011,0,2+t]).format("dddd ddd dd"),o[t],o[t])}});test("from",function(e){var o=moment([2007,1,28]);e.equal(o.from(moment([2007,1,28]).add({s:44}),true),"ប៉ុន្មានវិនាទី","44 seconds = ប៉ុន្មានវិនាទី");e.equal(o.from(moment([2007,1,28]).add({s:45}),true),"មួយនាទី","45 seconds = មួយនាទី");e.equal(o.from(moment([2007,1,28]).add({s:89}),true),"មួយនាទី","89 seconds = មួយនាទី");e.equal(o.from(moment([2007,1,28]).add({s:90}),true),"២ នាទី","90 seconds = 2 នាទី");e.equal(o.from(moment([2007,1,28]).add({m:44}),true),"៤៤ នាទី","44 minutes = 44 នាទី");e.equal(o.from(moment([2007,1,28]).add({m:45}),true),"មួយម៉ោង","45 minutes = មួយម៉ោង");e.equal(o.from(moment([2007,1,28]).add({m:89}),true),"មួយម៉ោង","89 minutes = មួយម៉ោង");e.equal(o.from(moment([2007,1,28]).add({m:90}),true),"២ ម៉ោង","90 minutes = 2 ម៉ោង");e.equal(o.from(moment([2007,1,28]).add({h:5}),true),"៥ ម៉ោង","5 hours = 5 ម៉ោង");e.equal(o.from(moment([2007,1,28]).add({h:21}),true),"២១ ម៉ោង","21 hours = 21 ម៉ោង");e.equal(o.from(moment([2007,1,28]).add({h:22}),true),"មួយថ្ងៃ","22 hours = មួយថ្ងៃ");e.equal(o.from(moment([2007,1,28]).add({h:35}),true),"មួយថ្ងៃ","35 hours = មួយថ្ងៃ");e.equal(o.from(moment([2007,1,28]).add({h:36}),true),"២ ថ្ងៃ","36 hours = 2 ថ្ងៃ");e.equal(o.from(moment([2007,1,28]).add({d:1}),true),"មួយថ្ងៃ","1 day = មួយថ្ងៃ");e.equal(o.from(moment([2007,1,28]).add({d:5}),true),"៥ ថ្ងៃ","5 days = 5 ថ្ងៃ");e.equal(o.from(moment([2007,1,28]).add({d:25}),true),"២៥ ថ្ងៃ","25 days = 25 ថ្ងៃ");e.equal(o.from(moment([2007,1,28]).add({d:26}),true),"មួយខែ","26 days = មួយខែ");e.equal(o.from(moment([2007,1,28]).add({d:30}),true),"មួយខែ","30 days = មួយខែ");e.equal(o.from(moment([2007,1,28]).add({d:43}),true),"មួយខែ","43 days = មួយខែ");e.equal(o.from(moment([2007,1,28]).add({d:46}),true),"២ ខែ","46 days = 2 ខែ");e.equal(o.from(moment([2007,1,28]).add({d:74}),true),"២ ខែ","75 days = 2 ខែ");e.equal(o.from(moment([2007,1,28]).add({d:76}),true),"៣ ខែ","76 days = 3 ខែ");e.equal(o.from(moment([2007,1,28]).add({M:1}),true),"មួយខែ","1 month = មួយខែ");e.equal(o.from(moment([2007,1,28]).add({M:5}),true),"៥ ខែ","5 months = 5 ខែ");e.equal(o.from(moment([2007,1,28]).add({d:345}),true),"មួយឆ្នាំ","345 days = មួយឆ្នាំ");e.equal(o.from(moment([2007,1,28]).add({d:548}),true),"២ ឆ្នាំ","548 days = 2 ឆ្នាំ");e.equal(o.from(moment([2007,1,28]).add({y:1}),true),"មួយឆ្នាំ","1 year = មួយឆ្នាំ");e.equal(o.from(moment([2007,1,28]).add({y:5}),true),"៥ ឆ្នាំ","5 years = 5 ឆ្នាំ")});test("suffix",function(e){e.equal(moment(3e4).from(0),"ប៉ុន្មានវិនាទីទៀត","prefix");e.equal(moment(0).from(3e4),"ប៉ុន្មានវិនាទីមុន","suffix")});test("now from now",function(e){e.equal(moment().fromNow(),"ប៉ុន្មានវិនាទីមុន","now from now should display as in the past")});test("fromNow",function(e){e.equal(moment().add({s:30}).fromNow(),"ប៉ុន្មានវិនាទីទៀត","in a few seconds");e.equal(moment().add({d:5}).fromNow(),"៥ ថ្ងៃទៀត","in 5 days")});test("calendar day",function(e){var o=moment().hours(12).minutes(0).seconds(0);e.equal(moment(o).calendar(),"ថ្ងៃនេះ ម៉ោង ១២:០០","today at the same time");e.equal(moment(o).add({m:25}).calendar(),"ថ្ងៃនេះ ម៉ោង ១២:២៥","Now plus 25 min");e.equal(moment(o).add({h:1}).calendar(),"ថ្ងៃនេះ ម៉ោង ១៣:០០","Now plus 1 hour");e.equal(moment(o).add({d:1}).calendar(),"ស្អែក ម៉ោង ១២:០០","tomorrow at the same time");e.equal(moment(o).subtract({h:1}).calendar(),"ថ្ងៃនេះ ម៉ោង ១១:០០","Now minus 1 hour");e.equal(moment(o).subtract({d:1}).calendar(),"ម្សិលមិញ ម៉ោង ១២:០០","yesterday at the same time")});test("calendar next week",function(e){var o,t;for(o=2;o<7;o++){t=moment().add({d:o});e.equal(t.calendar(),t.format("dddd [ម៉ោង] LT"),"Today + "+o+" days current time");t.hours(0).minutes(0).seconds(0).milliseconds(0);e.equal(t.calendar(),t.format("dddd [ម៉ោង] LT"),"Today + "+o+" days beginning of day");t.hours(23).minutes(59).seconds(59).milliseconds(999);e.equal(t.calendar(),t.format("dddd [ម៉ោង] LT"),"Today + "+o+" days end of day")}});test("calendar last week",function(e){var o,t;for(o=2;o<7;o++){t=moment().subtract({d:o});e.equal(t.calendar(),t.format("dddd [សប្តាហ៍មុន] [ម៉ោង] LT"),"Today - "+o+" days current time");t.hours(0).minutes(0).seconds(0).milliseconds(0);e.equal(t.calendar(),t.format("dddd [សប្តាហ៍មុន] [ម៉ោង] LT"),"Today - "+o+" days beginning of day");t.hours(23).minutes(59).seconds(59).milliseconds(999);e.equal(t.calendar(),t.format("dddd [សប្តាហ៍មុន] [ម៉ោង] LT"),"Today - "+o+" days end of day")}});test("calendar all else",function(e){var o=moment().subtract({w:1}),t=moment().add({w:1});e.equal(o.calendar(),o.format("L"),"1 week ago");e.equal(t.calendar(),t.format("L"),"in 1 week");o=moment().subtract({w:2});t=moment().add({w:2});e.equal(o.calendar(),o.format("L"),"2 weeks ago");e.equal(t.calendar(),t.format("L"),"in 2 weeks")});test("weeks year starting sunday formatted",function(e){e.equal(moment([2012,0,1]).format("w ww wo"),"៥២ ៥២ ទី៥២","Jan  1 2012 should be week 52");e.equal(moment([2012,0,2]).format("w ww wo"),"១ ០១ ទី១","Jan  2 2012 should be week 1");e.equal(moment([2012,0,8]).format("w ww wo"),"១ ០១ ទី១","Jan  8 2012 should be week 1");e.equal(moment([2012,0,9]).format("w ww wo"),"២ ០២ ទី២","Jan  9 2012 should be week 2");e.equal(moment([2012,0,15]).format("w ww wo"),"២ ០២ ទី២","Jan 15 2012 should be week 2")});