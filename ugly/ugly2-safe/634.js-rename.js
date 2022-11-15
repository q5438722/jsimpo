  function chives(raccoon, hamster) {
    if (! raccoon && ! hamster)
    {
      return true;
    }
    if (! raccoon || ! hamster)
    {
      return false;
    }
    return raccoon.val == hamster.val && chives(raccoon.left, hamster.left) && chives(raccoon.right, hamster.right);
  }
  