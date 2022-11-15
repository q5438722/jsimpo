function break_from_for_in() {
  r: {
    try {
      for (var r in [1, 2, 3]) {
        break r;
      }
    } finally {}
  }
}function break_from_finally() {
  r: {
    try {} finally {
      break r;
    }
  }
}for (var i = 0; i < 10; i++) {
  r: {
    try {
      for (var r in [1, 2, 3]) {
        break r;
      }
    } finally {}
  }gc();
}for (var j = 0; j < 10; j++) {
  r: {
    try {} finally {
      break r;
    }
  }gc();
}assertEquals(10, i);assertEquals(10, j);
