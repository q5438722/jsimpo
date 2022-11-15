'use strict';
+function($) {
  function Plugin(option) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.button");
      var options = typeof option == "object" && option;
      if (!data) {
        $this.data("bs.button", data = new Button(this, options));
      }
      if (option == "toggle") {
        data.toggle();
      } else {
        if (option) {
          data.setState(option);
        }
      }
    });
  }
  var Button = function(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Button.DEFAULTS, options);
    this.isLoading = false;
  };
  Button.VERSION = "3.2.0";
  Button.DEFAULTS = {
    loadingText : "loading..."
  };
  Button.prototype.setState = function(state) {
    var d = "disabled";
    var $el = this.$element;
    var val = $el.is("input") ? "val" : "html";
    var data = $el.data();
    state = state + "Text";
    if (data.resetText == null) {
      $el.data("resetText", $el[val]());
    }
    $el[val](data[state] == null ? this.options[state] : data[state]);
    setTimeout($.proxy(function() {
      if (state == "loadingText") {
        this.isLoading = true;
        $el.addClass(d).attr(d, d);
      } else {
        if (this.isLoading) {
          this.isLoading = false;
          $el.removeClass(d).removeAttr(d);
        }
      }
    }, this), 0);
  };
  Button.prototype.toggle = function() {
    var t = true;
    var e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
      var i = this.$element.find("input");
      if (i.prop("type") == "radio") {
        if (i.prop("checked") && this.$element.hasClass("active")) {
          t = false;
        } else {
          e.find(".active").removeClass("active");
        }
      }
      if (t) {
        i.prop("checked", !this.$element.hasClass("active")).trigger("change");
      }
    }
    if (t) {
      this.$element.toggleClass("active");
    }
  };
  var old = $.fn.button;
  $.fn.button = Plugin;
  $.fn.button.Constructor = Button;
  $.fn.button.noConflict = function() {
    $.fn.button = old;
    return this;
  };
  $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(event) {
    var e = $(event.target);
    if (!e.hasClass("btn")) {
      e = e.closest(".btn");
    }
    Plugin.call(e, "toggle");
    event.preventDefault();
  });
}(jQuery);

