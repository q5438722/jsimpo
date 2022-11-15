'use strict';
const socs = {
  id : "zoom",
  init : function(App) {
    App.getRevealElement().addEventListener("mousedown", function(event) {
      var data = /Linux/.test(window.navigator.platform) ? "ctrl" : "alt";
      var name = (App.getConfig().zoomKey ? App.getConfig().zoomKey : data) + "Key";
      var serverScale = App.getConfig().zoomLevel ? App.getConfig().zoomLevel : 2;
      if (event[name] && !App.isOverview()) {
        event.preventDefault();
        a.to({
          x : event.clientX,
          y : event.clientY,
          scale : serverScale,
          pan : false
        });
      }
    });
  }
};
export default() => {
  return socs;
}
var a = function() {
  function magnify(rect, scale) {
    var scrollOffset = getScrollOffset();
    rect.width = rect.width || 1;
    rect.height = rect.height || 1;
    rect.x -= (window.innerWidth - rect.width * scale) / 2;
    rect.y -= (window.innerHeight - rect.height * scale) / 2;
    if (m) {
      if (scale === 1) {
        document.body.style.transform = "";
        document.body.style.OTransform = "";
        document.body.style.msTransform = "";
        document.body.style.MozTransform = "";
        document.body.style.WebkitTransform = "";
      } else {
        var origin = scrollOffset.x + "px " + scrollOffset.y + "px";
        var transform = "translate(" + -rect.x + "px," + -rect.y + "px) scale(" + scale + ")";
        document.body.style.transformOrigin = origin;
        document.body.style.OTransformOrigin = origin;
        document.body.style.msTransformOrigin = origin;
        document.body.style.MozTransformOrigin = origin;
        document.body.style.WebkitTransformOrigin = origin;
        document.body.style.transform = transform;
        document.body.style.OTransform = transform;
        document.body.style.msTransform = transform;
        document.body.style.MozTransform = transform;
        document.body.style.WebkitTransform = transform;
      }
    } else {
      if (scale === 1) {
        document.body.style.position = "";
        document.body.style.left = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.height = "";
        document.body.style.zoom = "";
      } else {
        document.body.style.position = "relative";
        document.body.style.left = -(scrollOffset.x + rect.x) / scale + "px";
        document.body.style.top = -(scrollOffset.y + rect.y) / scale + "px";
        document.body.style.width = scale * 100 + "%";
        document.body.style.height = scale * 100 + "%";
        document.body.style.zoom = scale;
      }
    }
    level = scale;
    if (document.documentElement.classList) {
      if (level !== 1) {
        document.documentElement.classList.add("zoomed");
      } else {
        document.documentElement.classList.remove("zoomed");
      }
    }
  }
  function pan() {
    var range = .12;
    var rangeX = window.innerWidth * range;
    var height = window.innerHeight * range;
    var scrollOffset = getScrollOffset();
    if (y < height) {
      window.scroll(scrollOffset.x, scrollOffset.y - (1 - y / height) * (14 / level));
    } else {
      if (y > window.innerHeight - height) {
        window.scroll(scrollOffset.x, scrollOffset.y + (1 - (window.innerHeight - y) / height) * (14 / level));
      }
    }
    if (mouseX < rangeX) {
      window.scroll(scrollOffset.x - (1 - mouseX / rangeX) * (14 / level), scrollOffset.y);
    } else {
      if (mouseX > window.innerWidth - rangeX) {
        window.scroll(scrollOffset.x + (1 - (window.innerWidth - mouseX) / rangeX) * (14 / level), scrollOffset.y);
      }
    }
  }
  function getScrollOffset() {
    return {
      x : window.scrollX !== undefined ? window.scrollX : window.pageXOffset,
      y : window.scrollY !== undefined ? window.scrollY : window.pageYOffset
    };
  }
  var level = 1;
  var mouseX = 0;
  var y = 0;
  var _takingTooLongTimeout = -1;
  var panUpdateInterval = -1;
  var m = "WebkitTransform" in document.body.style || "MozTransform" in document.body.style || "msTransform" in document.body.style || "OTransform" in document.body.style || "transform" in document.body.style;
  if (m) {
    document.body.style.transition = "transform 0.8s ease";
    document.body.style.OTransition = "-o-transform 0.8s ease";
    document.body.style.msTransition = "-ms-transform 0.8s ease";
    document.body.style.MozTransition = "-moz-transform 0.8s ease";
    document.body.style.WebkitTransition = "-webkit-transform 0.8s ease";
  }
  document.addEventListener("keyup", function(event) {
    if (level !== 1 && event.keyCode === 27) {
      a.out();
    }
  });
  document.addEventListener("mousemove", function(event) {
    if (level !== 1) {
      mouseX = event.clientX;
      y = event.clientY;
    }
  });
  return {
    to : function(options) {
      if (level !== 1) {
        a.out();
      } else {
        options.x = options.x || 0;
        options.y = options.y || 0;
        if (!!options.element) {
          var padding = 20;
          var bbox = options.element.getBoundingClientRect();
          options.x = bbox.left - padding;
          options.y = bbox.top - padding;
          options.width = bbox.width + padding * 2;
          options.height = bbox.height + padding * 2;
        }
        if (options.width !== undefined && options.height !== undefined) {
          options.scale = Math.max(Math.min(window.innerWidth / options.width, window.innerHeight / options.height), 1);
        }
        if (options.scale > 1) {
          options.x *= options.scale;
          options.y *= options.scale;
          magnify(options, options.scale);
          if (options.pan !== false) {
            _takingTooLongTimeout = setTimeout(function() {
              panUpdateInterval = setInterval(pan, 1e3 / 60);
            }, 800);
          }
        }
      }
    },
    out : function() {
      clearTimeout(_takingTooLongTimeout);
      clearInterval(panUpdateInterval);
      magnify({
        x : 0,
        y : 0
      }, 1);
      level = 1;
    },
    magnify : function(options) {
      this.to(options);
    },
    reset : function() {
      this.out();
    },
    zoomLevel : function() {
      return level;
    }
  };
}();

