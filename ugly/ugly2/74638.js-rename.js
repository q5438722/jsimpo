import{test}from"../qunit";import{localeModule}from"../qunit-locale";import moment from"../../moment";localeModule("cv");test("parse",function(m){var e="кӑрлач кӑр_нарӑс нар_пуш пуш_ака ака_май май_ҫӗртме ҫӗр_утӑ утӑ_ҫурла ҫур_авӑн авн_юпа юпа_чӳк чӳк_раштав раш".split("_"),o;function a(e,o,a){m.equal(moment(e,o).month(),a,e+" should be month "+(a+1))}function t(e,o,a){m.equal(moment(e,o,true).month(),a,e+" "+o+" should be strict month "+(a+1))}for(o=0;o<12;o++){e[o]=e[o].split(" ");a(e[o][0],"MMM",o);a(e[o][1],"MMM",o);a(e[o][0],"MMMM",o);a(e[o][1],"MMMM",o);a(e[o][0].toLocaleLowerCase(),"MMMM",o);a(e[o][1].toLocaleLowerCase(),"MMMM",o);a(e[o][0].toLocaleUpperCase(),"MMMM",o);a(e[o][1].toLocaleUpperCase(),"MMMM",o);t(e[o][1],"MMM",o);t(e[o][0],"MMMM",o);t(e[o][1].toLocaleLowerCase(),"MMM",o);t(e[o][1].toLocaleUpperCase(),"MMM",o);t(e[o][0].toLocaleLowerCase(),"MMMM",o);t(e[o][0].toLocaleUpperCase(),"MMMM",o)}});test("format",function(e){var o=[["dddd, MMMM Do YYYY, h:mm:ss a","вырсарникун, нарӑс 14-мӗш 2010, 3:25:50 pm"],["ddd, hA","выр, 3PM"],["M Mo MM MMMM MMM","2 2-мӗш 02 нарӑс нар"],["YYYY YY","2010 10"],["D Do DD","14 14-мӗш 14"],["d do dddd ddd dd","0 0-мӗш вырсарникун выр вр"],["DDD DDDo DDDD","45 45-мӗш 045"],["w wo ww","7 7-мӗш 07"],["h hh","3 03"],["H HH","15 15"],["m mm","25 25"],["s ss","50 50"],["a A","pm PM"],["Ҫулӑн DDDo кунӗ","Ҫулӑн 45-мӗш кунӗ"],["LTS","15:25:50"],["L","14-02-2010"],["LL","2010 ҫулхи нарӑс уйӑхӗн 14-мӗшӗ"],["LLL","2010 ҫулхи нарӑс уйӑхӗн 14-мӗшӗ, 15:25"],["LLLL","вырсарникун, 2010 ҫулхи нарӑс уйӑхӗн 14-мӗшӗ, 15:25"],["l","14-2-2010"],["ll","2010 ҫулхи нар уйӑхӗн 14-мӗшӗ"],["lll","2010 ҫулхи нар уйӑхӗн 14-мӗшӗ, 15:25"],["llll","выр, 2010 ҫулхи нар уйӑхӗн 14-мӗшӗ, 15:25"]],a=moment(new Date(2010,1,14,15,25,50,125)),m;for(m=0;m<o.length;m++){e.equal(a.format(o[m][0]),o[m][1],o[m][0]+" ---\x3e "+o[m][1])}});test("format ordinal",function(e){e.equal(moment([2011,0,1]).format("DDDo"),"1-мӗш","1-мӗш");e.equal(moment([2011,0,2]).format("DDDo"),"2-мӗш","2-мӗш");e.equal(moment([2011,0,3]).format("DDDo"),"3-мӗш","3-мӗш");e.equal(moment([2011,0,4]).format("DDDo"),"4-мӗш","4-мӗш");e.equal(moment([2011,0,5]).format("DDDo"),"5-мӗш","5-мӗш");e.equal(moment([2011,0,6]).format("DDDo"),"6-мӗш","6-мӗш");e.equal(moment([2011,0,7]).format("DDDo"),"7-мӗш","7-мӗш");e.equal(moment([2011,0,8]).format("DDDo"),"8-мӗш","8-мӗш");e.equal(moment([2011,0,9]).format("DDDo"),"9-мӗш","9-мӗш");e.equal(moment([2011,0,10]).format("DDDo"),"10-мӗш","10-мӗш");e.equal(moment([2011,0,11]).format("DDDo"),"11-мӗш","11-мӗш");e.equal(moment([2011,0,12]).format("DDDo"),"12-мӗш","12-мӗш");e.equal(moment([2011,0,13]).format("DDDo"),"13-мӗш","13-мӗш");e.equal(moment([2011,0,14]).format("DDDo"),"14-мӗш","14-мӗш");e.equal(moment([2011,0,15]).format("DDDo"),"15-мӗш","15-мӗш");e.equal(moment([2011,0,16]).format("DDDo"),"16-мӗш","16-мӗш");e.equal(moment([2011,0,17]).format("DDDo"),"17-мӗш","17-мӗш");e.equal(moment([2011,0,18]).format("DDDo"),"18-мӗш","18-мӗш");e.equal(moment([2011,0,19]).format("DDDo"),"19-мӗш","19-мӗш");e.equal(moment([2011,0,20]).format("DDDo"),"20-мӗш","20-мӗш");e.equal(moment([2011,0,21]).format("DDDo"),"21-мӗш","21-мӗш");e.equal(moment([2011,0,22]).format("DDDo"),"22-мӗш","22-мӗш");e.equal(moment([2011,0,23]).format("DDDo"),"23-мӗш","23-мӗш");e.equal(moment([2011,0,24]).format("DDDo"),"24-мӗш","24-мӗш");e.equal(moment([2011,0,25]).format("DDDo"),"25-мӗш","25-мӗш");e.equal(moment([2011,0,26]).format("DDDo"),"26-мӗш","26-мӗш");e.equal(moment([2011,0,27]).format("DDDo"),"27-мӗш","27-мӗш");e.equal(moment([2011,0,28]).format("DDDo"),"28-мӗш","28-мӗш");e.equal(moment([2011,0,29]).format("DDDo"),"29-мӗш","29-мӗш");e.equal(moment([2011,0,30]).format("DDDo"),"30-мӗш","30-мӗш");e.equal(moment([2011,0,31]).format("DDDo"),"31-мӗш","31-мӗш")});test("format month",function(e){var o="кӑрлач кӑр_нарӑс нар_пуш пуш_ака ака_май май_ҫӗртме ҫӗр_утӑ утӑ_ҫурла ҫур_авӑн авн_юпа юпа_чӳк чӳк_раштав раш".split("_"),a;for(a=0;a<o.length;a++){e.equal(moment([2011,a,1]).format("MMMM MMM"),o[a],o[a])}});test("format week",function(e){var o="вырсарникун выр вр_тунтикун тун тн_ытларикун ытл ыт_юнкун юн юн_кӗҫнерникун кӗҫ кҫ_эрнекун эрн эр_шӑматкун шӑм шм".split("_"),a;for(a=0;a<o.length;a++){e.equal(moment([2011,0,2+a]).format("dddd ddd dd"),o[a],o[a])}});test("from",function(e){var o=moment([2007,1,28]);e.equal(o.from(moment([2007,1,28]).add({s:44}),true),"пӗр-ик ҫеккунт","44 sekunder = a few seconds");e.equal(o.from(moment([2007,1,28]).add({s:45}),true),"пӗр минут","45 seconds = a minute");e.equal(o.from(moment([2007,1,28]).add({s:89}),true),"пӗр минут","89 seconds = a minute");e.equal(o.from(moment([2007,1,28]).add({s:90}),true),"2 минут","90 seconds = 2 minutes");e.equal(o.from(moment([2007,1,28]).add({m:44}),true),"44 минут","44 minutes = 44 minutes");e.equal(o.from(moment([2007,1,28]).add({m:45}),true),"пӗр сехет","45 minutes = an hour");e.equal(o.from(moment([2007,1,28]).add({m:89}),true),"пӗр сехет","89 minutes = an hour");e.equal(o.from(moment([2007,1,28]).add({m:90}),true),"2 сехет","90 minutes = 2 hours");e.equal(o.from(moment([2007,1,28]).add({h:5}),true),"5 сехет","5 hours = 5 hours");e.equal(o.from(moment([2007,1,28]).add({h:21}),true),"21 сехет","21 hours = 21 hours");e.equal(o.from(moment([2007,1,28]).add({h:22}),true),"пӗр кун","22 hours = a day");e.equal(o.from(moment([2007,1,28]).add({h:35}),true),"пӗр кун","35 hours = a day");e.equal(o.from(moment([2007,1,28]).add({h:36}),true),"2 кун","36 hours = 2 days");e.equal(o.from(moment([2007,1,28]).add({d:1}),true),"пӗр кун","1 day = a day");e.equal(o.from(moment([2007,1,28]).add({d:5}),true),"5 кун","5 days = 5 days");e.equal(o.from(moment([2007,1,28]).add({d:25}),true),"25 кун","25 days = 25 days");e.equal(o.from(moment([2007,1,28]).add({d:26}),true),"пӗр уйӑх","26 days = a month");e.equal(o.from(moment([2007,1,28]).add({d:30}),true),"пӗр уйӑх","30 days = a month");e.equal(o.from(moment([2007,1,28]).add({d:43}),true),"пӗр уйӑх","43 days = a month");e.equal(o.from(moment([2007,1,28]).add({d:46}),true),"2 уйӑх","46 days = 2 months");e.equal(o.from(moment([2007,1,28]).add({d:74}),true),"2 уйӑх","75 days = 2 months");e.equal(o.from(moment([2007,1,28]).add({d:76}),true),"3 уйӑх","76 days = 3 months");e.equal(o.from(moment([2007,1,28]).add({M:1}),true),"пӗр уйӑх","1 month = a month");e.equal(o.from(moment([2007,1,28]).add({M:5}),true),"5 уйӑх","5 months = 5 months");e.equal(o.from(moment([2007,1,28]).add({d:345}),true),"пӗр ҫул","345 days = a year");e.equal(o.from(moment([2007,1,28]).add({d:548}),true),"2 ҫул","548 days = 2 years");e.equal(o.from(moment([2007,1,28]).add({y:1}),true),"пӗр ҫул","1 year = a year");e.equal(o.from(moment([2007,1,28]).add({y:5}),true),"5 ҫул","5 years = 5 years")});test("suffix",function(e){e.equal(moment(3e4).from(0),"пӗр-ик ҫеккунтран","prefix");e.equal(moment(0).from(3e4),"пӗр-ик ҫеккунт каялла","suffix")});test("now from now",function(e){e.equal(moment().fromNow(),"пӗр-ик ҫеккунт каялла","now from now should display as in the past")});test("fromNow",function(e){e.equal(moment().add({s:30}).fromNow(),"пӗр-ик ҫеккунтран","in a few seconds");e.equal(moment().add({d:5}).fromNow(),"5 кунран","in 5 days");e.equal(moment().add({h:2}).fromNow(),"2 сехетрен","in 2 hours, the right suffix!");e.equal(moment().add({y:3}).fromNow(),"3 ҫултан","in 3 years, the right suffix!")});test("calendar day",function(e){var o=moment().hours(12).minutes(0).seconds(0);e.equal(moment(o).calendar(),"Паян 12:00 сехетре","today at the same time");e.equal(moment(o).add({m:25}).calendar(),"Паян 12:25 сехетре","Now plus 25 min");e.equal(moment(o).add({h:1}).calendar(),"Паян 13:00 сехетре","Now plus 1 hour");e.equal(moment(o).add({d:1}).calendar(),"Ыран 12:00 сехетре","tomorrow at the same time");e.equal(moment(o).subtract({h:1}).calendar(),"Паян 11:00 сехетре","Now minus 1 hour");e.equal(moment(o).subtract({d:1}).calendar(),"Ӗнер 12:00 сехетре","yesterday at the same time")});test("calendar next week",function(e){var o,a;for(o=2;o<7;o++){a=moment().add({d:o});e.equal(a.calendar(),a.format("[Ҫитес] dddd LT [сехетре]"),"Today + "+o+" days current time");a.hours(0).minutes(0).seconds(0).milliseconds(0);e.equal(a.calendar(),a.format("[Ҫитес] dddd LT [сехетре]"),"Today + "+o+" days beginning of day");a.hours(23).minutes(59).seconds(59).milliseconds(999);e.equal(a.calendar(),a.format("[Ҫитес] dddd LT [сехетре]"),"Today + "+o+" days end of day")}});test("calendar last week",function(e){var o,a;for(o=2;o<7;o++){a=moment().subtract({d:o});e.equal(a.calendar(),a.format("[Иртнӗ] dddd LT [сехетре]"),"Today - "+o+" days current time");a.hours(0).minutes(0).seconds(0).milliseconds(0);e.equal(a.calendar(),a.format("[Иртнӗ] dddd LT [сехетре]"),"Today - "+o+" days beginning of day");a.hours(23).minutes(59).seconds(59).milliseconds(999);e.equal(a.calendar(),a.format("[Иртнӗ] dddd LT [сехетре]"),"Today - "+o+" days end of day")}});test("calendar all else",function(e){var o=moment().subtract({w:1}),a=moment().add({w:1});e.equal(o.calendar(),o.format("L"),"1 week ago");e.equal(a.calendar(),a.format("L"),"in 1 week");o=moment().subtract({w:2});a=moment().add({w:2});e.equal(o.calendar(),o.format("L"),"2 weeks ago");e.equal(a.calendar(),a.format("L"),"in 2 weeks")});test("weeks year starting sunday formatted",function(e){e.equal(moment([2011,11,26]).format("w ww wo"),"1 01 1-мӗш","Dec 26 2011 should be week 1");e.equal(moment([2012,0,1]).format("w ww wo"),"1 01 1-мӗш","Jan  1 2012 should be week 1");e.equal(moment([2012,0,2]).format("w ww wo"),"2 02 2-мӗш","Jan  2 2012 should be week 2");e.equal(moment([2012,0,8]).format("w ww wo"),"2 02 2-мӗш","Jan  8 2012 should be week 2");e.equal(moment([2012,0,9]).format("w ww wo"),"3 03 3-мӗш","Jan  9 2012 should be week 3")});