"use strict";
module.exports = function e(r, t) {
  if (__DEV__) {
    if (typeof r === "string") {
      if (r.indexOf("Error: Uncaught [") === 0) {
        return true;
      }if (r.indexOf("The above error occurred") === 0) {
        return true;
      }if (r.indexOf("ReactDOM.render is no longer supported in React 18") !== -1 || r.indexOf("ReactDOM.hydrate is no longer supported in React 18") !== -1) {
        return true;
      }
    }
  } else {
    if (r != null && typeof r.message === "string" && typeof r.stack === "string" && t.length === 0) {
      return true;
    }
  }return false;
};
