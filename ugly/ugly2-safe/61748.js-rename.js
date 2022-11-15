  function chives() {
    try {
      chives();
    }
    catch (t) {
      try {
        Realm.create();
      }
      catch (t) {
        quit();
      }
    }
  }
  chives();
  