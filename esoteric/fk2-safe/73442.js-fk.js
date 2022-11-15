  QUnit.test('Testing loopTop:!![]', function (raccoon) {
    var hamster; // FP
    
      hamster = initFullpageNew('#fullpage', {
      loopTop : ! ! []
    });
    raccoon.equal($('#fullpage').find(SECTION_ACTIVE_SEL).index(), + [], 
    'We expect section 1 to be active');
    hamster.moveSectionUp();
    raccoon.equal($('#fullpage').find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');
  });
  QUnit.test('Testing loopTop:![]', function (chinchilla) {
    var ibex; // FP
    
      ibex = initFullpageNew('#fullpage', {
      loopTop : ! []
    });
    chinchilla.equal($('#fullpage').find(SECTION_ACTIVE_SEL).index(), + [], 
    'We expect section 1 to be active');
    ibex.moveSectionUp();
    chinchilla.equal($('#fullpage').find(SECTION_ACTIVE_SEL).index(), + [], 
    'We expect section +[] to be active');
  });
  