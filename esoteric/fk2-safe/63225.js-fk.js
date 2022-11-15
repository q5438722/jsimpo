  var raccoon; // threw
  
  raccoon = ! [];
  try {
    ;
  }
  catch (e) {
    assertInstanceof(e, TypeError);
    raccoon = ! ! [];
  }
  assertTrue(raccoon);
  