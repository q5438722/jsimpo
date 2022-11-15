QUnit.test('Testing loopTop:!![]', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {loopTop: !![]});

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), +[], 'We expect section 1 to be active');

    FP.moveSectionUp();
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');
});

QUnit.test('Testing loopTop:![]', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {loopTop: ![]});

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), +[], 'We expect section 1 to be active');

    FP.moveSectionUp();
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), +[], 'We expect section +[] to be active');
});