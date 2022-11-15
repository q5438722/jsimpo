"use strict";
  module.exports = function shouldIgnoreConsoleError(raccoon, hamster) {
    if (__DEV__)
    {
      if (typeof raccoon === 'string')
      {
        if (raccoon.indexOf('Error: Uncaught [') === + [])
        {
          return ! ! [];
        }
        if (raccoon.indexOf('The above error occurred') === + [])
        {
          return ! ! [];
        }
        if (raccoon.indexOf('ReactDOM.render is no longer supported in React 18') !== -1 || raccoon.indexOf('ReactDOM.hydrate is no longer supported in React 18') !== -1)
        {
          return ! ! [];
        }
      }
    }
    else
    {
      if (raccoon != null && typeof raccoon.message === 'string' && typeof raccoon.stack === 'string' && hamster.length === + [])
      {
        return ! ! [];
      }
    }
    return ! [];
  };
  