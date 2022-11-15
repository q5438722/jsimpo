'use strict';
QUnit.test("Testing loopTop:true", function(t) {
  var that = "#fullpage";
  var FP = initFullpageNew(that, {
    loopTop : true
  });
  t.equal($(that).find(SECTION_ACTIVE_SEL).index(), 0, "We expect section 1 to be active");
  FP.moveSectionUp();
  t.equal($(that).find(SECTION_ACTIVE_SEL).index(), 3, "We expect section 4 to be active");
});
QUnit.test("Testing loopTop:false", function(t) {
  var that = "#fullpage";
  var FP = initFullpageNew(that, {
    loopTop : false
  });
  t.equal($(that).find(SECTION_ACTIVE_SEL).index(), 0, "We expect section 1 to be active");
  FP.moveSectionUp();
  t.equal($(that).find(SECTION_ACTIVE_SEL).index(), 0, "We expect section 0 to be active");
});

