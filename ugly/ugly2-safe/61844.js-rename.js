  function chives() {
    try {
      chives(1, chives(1));
    }
    catch (e) {
      assertFalse(delete e, "deleting catch variable");
      assertEquals(42, e);
    }
  }
  var raccoon; // exception
  
  raccoon = false;
  try {
    chives();
  }
  catch (e) {
    raccoon = true;
  }
  assertTrue(raccoon);
  