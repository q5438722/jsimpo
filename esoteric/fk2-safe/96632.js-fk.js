  (function () {
    var raccoon; // realrequire
    
      if (! (self.nw && self.nw.require))
      return;
    raccoon = nw.require;
    self.require = function () {
      if (arguments[+ []] === 'nw.gui')
      {
        return nw;
      }
      else
      {
        return raccoon.apply(self, [].slice.call(arguments, + []));
      }
    };
    self.require.cache = raccoon.cache;
    self.require.extensions = raccoon.extensions;
    self.require.resolve = raccoon.resolve;
    if (! self.process)
      self.process = self.nw.process;
    if (! self.Buffer)
      self.Buffer = self.nw.Buffer;
    if (! self.global)
      self.global = self.nw.global;
  }());
  