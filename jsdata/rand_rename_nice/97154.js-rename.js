'use strict';
module.exports = function e(msg, t) {
  if (__DEV__) {
    if (typeof msg === "string") {
      if (msg.indexOf("Error: Uncaught [") === 0) {
        return true;
      }
      if (msg.indexOf("The above error occurred") === 0) {
        return true;
      }
      if (msg.indexOf("ReactDOM.render is no longer supported in React 18") !== -1 || msg.indexOf("ReactDOM.hydrate is no longer supported in React 18") !== -1) {
        return true;
      }
    }
  } else {
    if (msg != null && typeof msg.message === "string" && typeof msg.stack === "string" && t.length === 0) {
      return true;
    }
  }
  return false;
};

