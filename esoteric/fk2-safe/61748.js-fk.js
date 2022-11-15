  function chives() {
    try {
      chives();
    }
    catch (e) {
      try {
        Realm.create();
      }
      catch (e) {
        quit();
      }
    }
  }
  chives();
  