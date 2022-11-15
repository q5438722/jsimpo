'use strict';
define(["can/util/library", "can/util/string"], function(can) {
  var parseTokenPlainTime = /^\d+$/;
  var string = /([^\[\]]+)|(\[\])/g;
  var regEnter = /([^?#]*)(#.*)?$/;
  var prep = function(name) {
    return decodeURIComponent(name.replace(/\+/g, " "));
  };
  can.extend(can, {
    deparam : function(params) {
      var data = {};
      var methodsToOverwrite;
      var privMapUv;
      if (params && regEnter.test(params)) {
        methodsToOverwrite = params.split("&");
        can.each(methodsToOverwrite, function(clusterShardData) {
          var array = clusterShardData.split("=");
          var key = prep(array.shift());
          var value = prep(array.join("="));
          var obj = data;
          if (key) {
            array = key.match(string);
            var i = 0;
            var cell_amount = array.length - 1;
            for (; i < cell_amount; i++) {
              if (!obj[array[i]]) {
                obj[array[i]] = parseTokenPlainTime.test(array[i + 1]) || array[i + 1] === "[]" ? [] : {};
              }
              obj = obj[array[i]];
            }
            privMapUv = array.pop();
            if (privMapUv === "[]") {
              obj.push(value);
            } else {
              obj[privMapUv] = value;
            }
          }
        });
      }
      return data;
    }
  });
  return can;
});

