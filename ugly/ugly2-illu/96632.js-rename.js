(function () {
  if (!(self.nw && self.nw.require)) return;const e = nw.require;
  self.require = function () {
    if (arguments[0] === "nw.gui") {
      return nw;
    } else {
      return e.apply(self, [].slice.call(arguments, 0));
    }
  };self.require.cache = e.cache;self.require.extensions = e.extensions;self.require.resolve = e.resolve;if (!self.process) self.process = self.nw.process;if (!self.Buffer) self.Buffer = self.nw.Buffer;if (!self.global) self.global = self.nw.global;
})();
