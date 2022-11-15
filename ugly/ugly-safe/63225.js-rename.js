  var raccoon; // threw
  
  raccoon = false;
  try {
    ;
  }
  catch (r) {
    assertInstanceof(r, TypeError);
    raccoon = true;
  }
  assertTrue(raccoon);
  