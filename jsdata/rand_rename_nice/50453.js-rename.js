'use strict';
!function(root, f) {
  if ("object" == typeof exports && "object" == typeof module) {
    module.exports = f();
  } else {
    if ("function" == typeof define && define.amd) {
      define([], f);
    } else {
      var newValues = f();
      var i;
      for (i in newValues) {
        ("object" == typeof exports ? exports : root)[i] = newValues[i];
      }
    }
  }
}(window, function() {
  return function(e) {
    function t(i) {
      if (n[i]) {
        return n[i].exports;
      }
      var module = n[i] = {
        i : i,
        l : false,
        exports : {}
      };
      return e[i].call(module.exports, module, module.exports, t), module.l = true, module.exports;
    }
    var n = {};
    return t.m = e, t.c = n, t.d = function(d, n, val) {
      if (!t.o(d, n)) {
        Object.defineProperty(d, n, {
          enumerable : true,
          get : val
        });
      }
    }, t.r = function(x) {
      if ("undefined" != typeof Symbol && Symbol.toStringTag) {
        Object.defineProperty(x, Symbol.toStringTag, {
          value : "Module"
        });
      }
      Object.defineProperty(x, "__esModule", {
        value : true
      });
    }, t.t = function(value, defaultValue) {
      if (1 & defaultValue && (value = t(value)), 8 & defaultValue) {
        return value;
      }
      if (4 & defaultValue && "object" == typeof value && value && value.__esModule) {
        return value;
      }
      var d = Object.create(null);
      if (t.r(d), Object.defineProperty(d, "default", {
        enumerable : true,
        value : value
      }), 2 & defaultValue && "string" != typeof value) {
        var s;
        for (s in value) {
          t.d(d, s, function(subel) {
            return value[subel];
          }.bind(null, s));
        }
      }
      return d;
    }, t.n = function(module) {
      var n = module && module.__esModule ? function() {
        return module.default;
      } : function() {
        return module;
      };
      return t.d(n, "a", n), n;
    }, t.o = function(i, x) {
      return Object.prototype.hasOwnProperty.call(i, x);
    }, t.p = "", t(t.s = 18);
  }({
    18 : function(rawPads, i) {
      var $;
      ($ = jQuery).extend($.summernote.lang, {
        "fi-FI" : {
          font : {
            bold : "Lihavointi",
            italic : "Kursivointi",
            underline : "Alleviivaus",
            clear : "Tyhjenn\u00e4 muotoilu",
            height : "Riviv\u00e4li",
            name : "Kirjasintyyppi",
            strikethrough : "Yliviivaus",
            subscript : "Alaindeksi",
            superscript : "Yl\u00e4indeksi",
            size : "Kirjasinkoko"
          },
          image : {
            image : "Kuva",
            insert : "Lis\u00e4\u00e4 kuva",
            resizeFull : "Koko leveys",
            resizeHalf : "Puolikas leveys",
            resizeQuarter : "Nelj\u00e4sosa leveys",
            floatLeft : "Sijoita vasemmalle",
            floatRight : "Sijoita oikealle",
            floatNone : "Ei sijoitusta",
            shapeRounded : "Muoto: Py\u00f6ristetty",
            shapeCircle : "Muoto: Ympyr\u00e4",
            shapeThumbnail : "Muoto: Esikatselukuva",
            shapeNone : "Muoto: Ei muotoilua",
            dragImageHere : "Ved\u00e4 kuva t\u00e4h\u00e4n",
            selectFromFiles : "Valitse tiedostoista",
            maximumFileSize : "Maksimi tiedosto koko",
            maximumFileSizeError : "Maksimi tiedosto koko ylitetty.",
            url : "URL-osoitteen mukaan",
            remove : "Poista kuva",
            original : "Alkuper\u00e4inen"
          },
          video : {
            video : "Video",
            videoLink : "Linkki videoon",
            insert : "Lis\u00e4\u00e4 video",
            url : "Videon URL-osoite",
            providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion tai Youku)"
          },
          link : {
            link : "Linkki",
            insert : "Lis\u00e4\u00e4 linkki",
            unlink : "Poista linkki",
            edit : "Muokkaa",
            textToDisplay : "N\u00e4ytett\u00e4v\u00e4 teksti",
            url : "Linkin URL-osoite",
            openInNewWindow : "Avaa uudessa ikkunassa"
          },
          table : {
            table : "Taulukko",
            addRowAbove : "Lis\u00e4\u00e4 rivi yl\u00e4puolelle",
            addRowBelow : "Lis\u00e4\u00e4 rivi alapuolelle",
            addColLeft : "Lis\u00e4\u00e4 sarake vasemmalle puolelle",
            addColRight : "Lis\u00e4\u00e4 sarake oikealle puolelle",
            delRow : "Poista rivi",
            delCol : "Poista sarake",
            delTable : "Poista taulukko"
          },
          hr : {
            insert : "Lis\u00e4\u00e4 vaakaviiva"
          },
          style : {
            style : "Tyyli",
            p : "Normaali",
            blockquote : "Lainaus",
            pre : "Koodi",
            h1 : "Otsikko 1",
            h2 : "Otsikko 2",
            h3 : "Otsikko 3",
            h4 : "Otsikko 4",
            h5 : "Otsikko 5",
            h6 : "Otsikko 6"
          },
          lists : {
            unordered : "Luettelomerkitty luettelo",
            ordered : "Numeroitu luettelo"
          },
          options : {
            help : "Ohje",
            fullscreen : "Koko n\u00e4ytt\u00f6",
            codeview : "HTML-n\u00e4kym\u00e4"
          },
          paragraph : {
            paragraph : "Kappale",
            outdent : "Pienenn\u00e4 sisennyst\u00e4",
            indent : "Suurenna sisennyst\u00e4",
            left : "Tasaa vasemmalle",
            center : "Keskit\u00e4",
            right : "Tasaa oikealle",
            justify : "Tasaa"
          },
          color : {
            recent : "Viimeisin v\u00e4ri",
            more : "Lis\u00e4\u00e4 v\u00e4rej\u00e4",
            background : "Korostusv\u00e4ri",
            foreground : "Tekstin v\u00e4ri",
            transparent : "L\u00e4pin\u00e4kyv\u00e4",
            setTransparent : "Aseta l\u00e4pin\u00e4kyv\u00e4ksi",
            reset : "Palauta",
            resetToDefault : "Palauta oletusarvoksi"
          },
          shortcut : {
            shortcuts : "Pikan\u00e4pp\u00e4imet",
            close : "Sulje",
            textFormatting : "Tekstin muotoilu",
            action : "Toiminto",
            paragraphFormatting : "Kappaleen muotoilu",
            documentStyle : "Asiakirjan tyyli"
          },
          help : {
            insertParagraph : "Lis\u00e4\u00e4 kappale",
            undo : "Kumoa viimeisin komento",
            redo : "Tee uudelleen kumottu komento",
            tab : "Sarkain",
            untab : "Sarkainmerkin poisto",
            bold : "Lihavointi",
            italic : "Kursiivi",
            underline : "Alleviivaus",
            strikethrough : "Yliviivaus",
            removeFormat : "Poista asetetut tyylit",
            justifyLeft : "Tasaa vasemmalle",
            justifyCenter : "Keskit\u00e4",
            justifyRight : "Tasaa oikealle",
            justifyFull : "Tasaa",
            insertUnorderedList : "Luettelomerkill\u00e4 varustettu lista",
            insertOrderedList : "Numeroitu lista",
            outdent : "Pienenn\u00e4 sisennyst\u00e4",
            indent : "Suurenna sisennyst\u00e4",
            formatPara : "Muuta kappaleen formaatti p",
            formatH1 : "Muuta kappaleen formaatti H1",
            formatH2 : "Muuta kappaleen formaatti H2",
            formatH3 : "Muuta kappaleen formaatti H3",
            formatH4 : "Muuta kappaleen formaatti H4",
            formatH5 : "Muuta kappaleen formaatti H5",
            formatH6 : "Muuta kappaleen formaatti H6",
            insertHorizontalRule : "Lis\u00e4\u00e4 vaakaviiva",
            "linkDialog.show" : "Lis\u00e4\u00e4 linkki"
          },
          history : {
            undo : "Kumoa",
            redo : "Toista"
          },
          specialChar : {
            specialChar : "ERIKOISMERKIT",
            select : "Valitse erikoismerkit"
          }
        }
      });
    }
  });
});

