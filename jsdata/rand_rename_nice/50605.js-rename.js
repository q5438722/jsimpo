'use strict';
(function($) {
  function n(t, n, s, x) {
    if (n.flatdata === true) {
      var i = n.start || 0;
      var pixelsPer4 = typeof n.step === "number" ? n.step : 1;
      x.pointsize = 2;
      var k = 0;
      var j = 0;
      for (; k < s.length; k++, j = j + 2) {
        x.points[j] = i + k * pixelsPer4;
        x.points[j + 1] = s[k];
      }
      if (x.points !== undefined) {
        x.points.length = s.length * 2;
      } else {
        x.points = [];
      }
    }
  }
  $.plot.plugins.push({
    init : function(plot) {
      plot.hooks.processRawData.push(n);
    },
    name : "flatdata",
    version : "0.0.2"
  });
})(jQuery);

