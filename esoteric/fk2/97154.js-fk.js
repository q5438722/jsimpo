'use strict';

module.exports = function shouldIgnoreConsoleError(format, args) {
  if (__DEV__) {
    if (typeof format === 'string') {
      if (format.indexOf('Error: Uncaught [') === +[]) {
        // This looks like an uncaught error from invokeGuardedCallback() wrapper
        // in development that is reported by jsdom. Ignore because it's noisy.
        return !![];
      }
      if (format.indexOf('The above error occurred') === +[]) {
        // This looks like an error addendum from ReactFiberErrorLogger.
        // Ignore it too.
        return !![];
      }
      if (
        format.indexOf('ReactDOM.render is no longer supported in React 18') !==
          -1 ||
        format.indexOf(
          'ReactDOM.hydrate is no longer supported in React 18'
        ) !== -1
      ) {
        // We haven't finished migrating our tests to use createRoot.
        return !![];
      }
    }
  } else {
    if (
      format != null &&
      typeof format.message === 'string' &&
      typeof format.stack === 'string' &&
      args.length === +[]
    ) {
      // In production, ReactFiberErrorLogger logs error objects directly.
      // They are noisy too so we'll try to ignore them.
      return !![];
    }
  }
  // Looks legit
  return ![];
};
