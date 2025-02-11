const SetTileIndexCallback = function (l, e, a, c) {
  if (typeof l === "number") {
    c.callbacks[l] = e !== null ? { callback: e, callbackContext: a } : undefined;
  } else {
    // Unknown loop control variable
    for (var n = 0, t = l.length; n < t; n++) {
      c.callbacks[l[n]] = e !== null ? { callback: e, callbackContext: a } : undefined;
    }
  }
};

module.exports = SetTileIndexCallback;
