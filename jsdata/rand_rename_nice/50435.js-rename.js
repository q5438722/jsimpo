'use strict';
(function register(context, definition) {
  if (typeof exports === "object" && typeof module === "object") {
    module.exports = definition();
  } else {
    if (typeof define === "function" && define.amd) {
      define([], definition);
    } else {
      var def = definition();
      var i;
      for (i in def) {
        (typeof exports === "object" ? exports : context)[i] = def[i];
      }
    }
  }
})(window, function() {
  return function(m) {
    function t(i) {
      if (n[i]) {
        return n[i].exports;
      }
      var module = n[i] = {
        i : i,
        l : false,
        exports : {}
      };
      m[i].call(module.exports, module, module.exports, t);
      module.l = true;
      return module.exports;
    }
    var n = {};
    t.m = m;
    t.c = n;
    t.d = function(d, name, v) {
      if (!t.o(d, name)) {
        Object.defineProperty(d, name, {
          enumerable : true,
          get : v
        });
      }
    };
    t.r = function(x) {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(x, Symbol.toStringTag, {
          value : "Module"
        });
      }
      Object.defineProperty(x, "__esModule", {
        value : true
      });
    };
    t.t = function(name, version) {
      if (version & 1) {
        name = t(name);
      }
      if (version & 8) {
        return name;
      }
      if (version & 4 && typeof name === "object" && name && name.__esModule) {
        return name;
      }
      var d = Object.create(null);
      t.r(d);
      Object.defineProperty(d, "default", {
        enumerable : true,
        value : name
      });
      if (version & 2 && typeof name != "string") {
        var s;
        for (s in name) {
          t.d(d, s, function(nameProp) {
            return name[nameProp];
          }.bind(null, s));
        }
      }
      return d;
    };
    t.n = function(module) {
      var result = module && module.__esModule ? function getDefault() {
        return module["default"];
      } : function getModuleExports() {
        return module;
      };
      t.d(result, "a", result);
      return result;
    };
    t.o = function(property, object) {
      return Object.prototype.hasOwnProperty.call(property, object);
    };
    t.p = "";
    return t(t.s = 21);
  }({
    21 : function(formatters, customFormatters) {
      (function($) {
        $.extend($.summernote.lang, {
          "he-IL" : {
            font : {
              bold : "\u05de\u05d5\u05d3\u05d2\u05e9",
              italic : "\u05e0\u05d8\u05d5\u05d9",
              underline : "\u05e7\u05d5 \u05ea\u05d7\u05ea\u05d5\u05df",
              clear : "\u05e0\u05e7\u05d4 \u05e2\u05d9\u05e6\u05d5\u05d1",
              height : "\u05d2\u05d5\u05d1\u05d4",
              name : "\u05d2\u05d5\u05e4\u05df",
              strikethrough : "\u05e7\u05d5 \u05d7\u05d5\u05e6\u05d4",
              subscript : "\u05db\u05ea\u05d1 \u05ea\u05d7\u05ea\u05d9",
              superscript : "\u05db\u05ea\u05d1 \u05e2\u05d9\u05dc\u05d9",
              size : "\u05d2\u05d5\u05d3\u05dc \u05d2\u05d5\u05e4\u05df"
            },
            image : {
              image : "\u05ea\u05de\u05d5\u05e0\u05d4",
              insert : "\u05d4\u05d5\u05e1\u05e3 \u05ea\u05de\u05d5\u05e0\u05d4",
              resizeFull : "\u05d2\u05d5\u05d3\u05dc \u05de\u05dc\u05d0",
              resizeHalf : "\u05dc\u05d4\u05e7\u05d8\u05d9\u05df \u05dc\u05d7\u05e6\u05d9",
              resizeQuarter : "\u05dc\u05d4\u05e7\u05d8\u05d9\u05df \u05dc\u05e8\u05d1\u05e2",
              floatLeft : "\u05d9\u05d9\u05e9\u05d5\u05e8 \u05dc\u05e9\u05de\u05d0\u05dc",
              floatRight : "\u05d9\u05d9\u05e9\u05d5\u05e8 \u05dc\u05d9\u05de\u05d9\u05df",
              floatNone : "\u05d9\u05e9\u05e8",
              shapeRounded : "Shape: Rounded",
              shapeCircle : "Shape: Circle",
              shapeThumbnail : "Shape: Thumbnail",
              shapeNone : "Shape: None",
              dragImageHere : "\u05d2\u05e8\u05d5\u05e8 \u05ea\u05de\u05d5\u05e0\u05d4 \u05dc\u05db\u05d0\u05df",
              dropImage : "Drop image or Text",
              selectFromFiles : "\u05d1\u05d7\u05e8 \u05de\u05ea\u05d5\u05da \u05e7\u05d1\u05e6\u05d9\u05dd",
              maximumFileSize : "Maximum file size",
              maximumFileSizeError : "Maximum file size exceeded.",
              url : "\u05e0\u05ea\u05d9\u05d1 \u05dc\u05ea\u05de\u05d5\u05e0\u05d4",
              remove : "\u05d4\u05e1\u05e8 \u05ea\u05de\u05d5\u05e0\u05d4",
              original : "Original"
            },
            video : {
              video : "\u05e1\u05e8\u05d8\u05d5\u05df",
              videoLink : "\u05e7\u05d9\u05e9\u05d5\u05e8 \u05dc\u05e1\u05e8\u05d8\u05d5\u05df",
              insert : "\u05d4\u05d5\u05e1\u05e3 \u05e1\u05e8\u05d8\u05d5\u05df",
              url : "\u05e7\u05d9\u05e9\u05d5\u05e8 \u05dc\u05e1\u05e8\u05d8\u05d5\u05df",
              providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion \u05d0\u05d5 Youku)"
            },
            link : {
              link : "\u05e7\u05d9\u05e9\u05d5\u05e8",
              insert : "\u05d4\u05d5\u05e1\u05e3 \u05e7\u05d9\u05e9\u05d5\u05e8",
              unlink : "\u05d4\u05e1\u05e8 \u05e7\u05d9\u05e9\u05d5\u05e8",
              edit : "\u05e2\u05e8\u05d5\u05da",
              textToDisplay : "\u05d8\u05e7\u05e1\u05d8 \u05dc\u05d4\u05e6\u05d9\u05d2",
              url : "\u05e7\u05d9\u05e9\u05d5\u05e8",
              openInNewWindow : "\u05e4\u05ea\u05d7 \u05d1\u05d7\u05dc\u05d5\u05df \u05d7\u05d3\u05e9"
            },
            table : {
              table : "\u05d8\u05d1\u05dc\u05d4",
              addRowAbove : "Add row above",
              addRowBelow : "Add row below",
              addColLeft : "Add column left",
              addColRight : "Add column right",
              delRow : "Delete row",
              delCol : "Delete column",
              delTable : "Delete table"
            },
            hr : {
              insert : "\u05d4\u05d5\u05e1\u05e3 \u05e7\u05d5"
            },
            style : {
              style : "\u05e2\u05d9\u05e6\u05d5\u05d1",
              p : "\u05d8\u05e7\u05e1\u05d8 \u05e8\u05d2\u05d9\u05dc",
              blockquote : "\u05e6\u05d9\u05d8\u05d5\u05d8",
              pre : "\u05e7\u05d5\u05d3",
              h1 : "\u05db\u05d5\u05ea\u05e8\u05ea 1",
              h2 : "\u05db\u05d5\u05ea\u05e8\u05ea 2",
              h3 : "\u05db\u05d5\u05ea\u05e8\u05ea 3",
              h4 : "\u05db\u05d5\u05ea\u05e8\u05ea 4",
              h5 : "\u05db\u05d5\u05ea\u05e8\u05ea 5",
              h6 : "\u05db\u05d5\u05ea\u05e8\u05ea 6"
            },
            lists : {
              unordered : "\u05e8\u05e9\u05d9\u05de\u05ea \u05ea\u05d1\u05dc\u05d9\u05d8\u05d9\u05dd",
              ordered : "\u05e8\u05e9\u05d9\u05de\u05d4 \u05de\u05de\u05d5\u05e1\u05e4\u05e8\u05ea"
            },
            options : {
              help : "\u05e2\u05d6\u05e8\u05d4",
              fullscreen : "\u05de\u05e1\u05da \u05de\u05dc\u05d0",
              codeview : "\u05ea\u05e6\u05d5\u05d2\u05ea \u05e7\u05d5\u05d3"
            },
            paragraph : {
              paragraph : "\u05e4\u05e1\u05e7\u05d4",
              outdent : "\u05d4\u05e7\u05d8\u05df \u05db\u05e0\u05d9\u05e1\u05d4",
              indent : "\u05d4\u05d2\u05d3\u05dc \u05db\u05e0\u05d9\u05e1\u05d4",
              left : "\u05d9\u05d9\u05e9\u05d5\u05e8 \u05dc\u05e9\u05de\u05d0\u05dc",
              center : "\u05d9\u05d9\u05e9\u05d5\u05e8 \u05dc\u05de\u05e8\u05db\u05d6",
              right : "\u05d9\u05d9\u05e9\u05d5\u05e8 \u05dc\u05d9\u05de\u05d9\u05df",
              justify : "\u05de\u05d9\u05d5\u05e9\u05e8"
            },
            color : {
              recent : "\u05e6\u05d1\u05e2 \u05d8\u05e7\u05e1\u05d8 \u05d0\u05d7\u05e8\u05d5\u05df",
              more : "\u05e2\u05d5\u05d3 \u05e6\u05d1\u05e2\u05d9\u05dd",
              background : "\u05e6\u05d1\u05e2 \u05e8\u05e7\u05e2",
              foreground : "\u05e6\u05d1\u05e2 \u05d8\u05e7\u05e1\u05d8",
              transparent : "\u05e9\u05e7\u05d5\u05e3",
              setTransparent : "\u05e7\u05d1\u05e2 \u05db\u05e9\u05e7\u05d5\u05e3",
              reset : "\u05d0\u05d9\u05e4\u05d5\u05e1",
              resetToDefault : "\u05d0\u05e4\u05e1 \u05dc\u05d1\u05e8\u05d9\u05e8\u05ea \u05de\u05d7\u05d3\u05dc"
            },
            shortcut : {
              shortcuts : "\u05e7\u05d9\u05e6\u05d5\u05e8\u05d9 \u05de\u05e7\u05dc\u05d3\u05ea",
              close : "\u05e1\u05d2\u05d5\u05e8",
              textFormatting : "\u05e2\u05d9\u05e6\u05d5\u05d1 \u05d4\u05d8\u05e7\u05e1\u05d8",
              action : "\u05e4\u05e2\u05d5\u05dc\u05d4",
              paragraphFormatting : "\u05e1\u05d2\u05e0\u05d5\u05e0\u05d5\u05ea \u05e4\u05e1\u05e7\u05d4",
              documentStyle : "\u05e2\u05d9\u05e6\u05d5\u05d1 \u05d4\u05de\u05e1\u05de\u05da",
              extraKeys : "\u05e7\u05d9\u05e6\u05d5\u05e8\u05d9\u05dd \u05e0\u05d5\u05e1\u05e4\u05d9\u05dd"
            },
            help : {
              insertParagraph : "Insert Paragraph",
              undo : "Undoes the last command",
              redo : "Redoes the last command",
              tab : "Tab",
              untab : "Untab",
              bold : "Set a bold style",
              italic : "Set a italic style",
              underline : "Set a underline style",
              strikethrough : "Set a strikethrough style",
              removeFormat : "Clean a style",
              justifyLeft : "Set left align",
              justifyCenter : "Set center align",
              justifyRight : "Set right align",
              justifyFull : "Set full align",
              insertUnorderedList : "Toggle unordered list",
              insertOrderedList : "Toggle ordered list",
              outdent : "Outdent on current paragraph",
              indent : "Indent on current paragraph",
              formatPara : "Change current block's format as a paragraph(P tag)",
              formatH1 : "Change current block's format as H1",
              formatH2 : "Change current block's format as H2",
              formatH3 : "Change current block's format as H3",
              formatH4 : "Change current block's format as H4",
              formatH5 : "Change current block's format as H5",
              formatH6 : "Change current block's format as H6",
              insertHorizontalRule : "Insert horizontal rule",
              "linkDialog.show" : "Show Link Dialog"
            },
            history : {
              undo : "\u05d1\u05d8\u05dc \u05e4\u05e2\u05d5\u05dc\u05d4",
              redo : "\u05d1\u05e6\u05e2 \u05e9\u05d5\u05d1"
            },
            specialChar : {
              specialChar : "SPECIAL CHARACTERS",
              select : "Select Special characters"
            }
          }
        });
      })(jQuery);
    }
  });
});

