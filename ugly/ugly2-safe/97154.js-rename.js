"use strict";
  module.exports = function e(raccoon, hamster) {
    if (__DEV__)
    {
      if (typeof raccoon === "string")
      {
        if (raccoon.indexOf("Error: Uncaught [") === 0)
        {
          return true;
        }
        if (raccoon.indexOf("The above error occurred") === 0)
        {
          return true;
        }
        if (raccoon.indexOf("ReactDOM.render is no longer supported in React 18") !== -1 || raccoon.indexOf("ReactDOM.hydrate is no longer supported in React 18") !== -1)
        {
          return true;
        }
      }
    }
    else
    {
      if (raccoon != null && typeof raccoon.message === "string" && typeof raccoon.stack === "string" && hamster.length === 0)
      {
        return true;
      }
    }
    return false;
  };
  