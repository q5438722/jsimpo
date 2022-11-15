QUnit.test("Testing loopTop:true", function (e) {
  const t = "#fullpage";
  const i = initFullpageNew(t, { loopTop: true });
  e.equal($(t).find(SECTION_ACTIVE_SEL).index(), 0, "We expect section 1 to be active");i.moveSectionUp();e.equal($(t).find(SECTION_ACTIVE_SEL).index(), 3, "We expect section 4 to be active");
});QUnit.test("Testing loopTop:false", function (e) {
  const t = "#fullpage";
  const i = initFullpageNew(t, { loopTop: false });
  e.equal($(t).find(SECTION_ACTIVE_SEL).index(), 0, "We expect section 1 to be active");i.moveSectionUp();e.equal($(t).find(SECTION_ACTIVE_SEL).index(), 0, "We expect section 0 to be active");
});
