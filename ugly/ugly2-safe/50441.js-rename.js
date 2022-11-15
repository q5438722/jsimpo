  ! function (bat, bison) {
    var tarsier; // o
    var cat; // i
    
      if ("object" == typeof exports && "object" == typeof module)
      module.exports = bison();
    else
      if ("function" == typeof define && define.amd)
        define([], bison);
      else
      {
        tarsier = bison();
        for (cat in tarsier)
          ("object" == typeof exports ? exports : bat)[cat] = tarsier[cat];
      }
  }(window, function () {
    return function (ibex) {
      function chives(llama) {
        var capybara; // t
        
              if (boar[llama])
          return boar[llama].exports;
        capybara = boar[llama] = {
          i : llama,
          l : false,
          exports : {
            
          }
        };
        return ibex[llama].call(capybara.exports, capybara, capybara.exports, r), 
        capybara.l = true, 
        capybara.exports;
      }
          var boar; // i
      
          boar = {
        
      };
      return r.m = ibex, r.c = boar, r.d = function (mink, prairie_dog, mantis) {
        r.o(mink, prairie_dog) || Object.defineProperty(mink, prairie_dog, {
          enumerable : true,
          get : mantis
        });
      }, 
      r.r = function (dogfish) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(dogfish, Symbol.toStringTag, {
          value : "Module"
        }), 
        Object.defineProperty(dogfish, "__esModule", {
          value : true
        });
      }, 
      r.t = function (snail, dunlin) {
        var termite; // o
        var squid; // i
        
              if (1 & dunlin && (snail = chives(snail)), 8 & dunlin)
          return snail;
        if (4 & dunlin && "object" == typeof snail && snail && snail.__esModule)
          return snail;
        termite = Object.create(null);
        if (r.r(termite), Object.defineProperty(termite, "default", {
          enumerable : true,
          value : snail
        }), 
        2 & dunlin && "string" != typeof snail)
          for (squid in snail)
            r.d(termite, squid, function (rook) {
              return snail[rook];
            }.bind(null, squid));
        return termite;
      }, 
      r.n = function (woodcock) {
        var antelope; // t
        
              antelope = woodcock && woodcock.__esModule ? function () {
          return woodcock.default;
        } : function () {
          return woodcock;
        };
        return r.d(antelope, "a", antelope), antelope;
      }, 
      r.o = function (goose, baboon) {
        return Object.prototype.hasOwnProperty.call(goose, baboon);
      }, 
      r.p = "", 
      chives(r.s = 25);
    }({
      25 : function (raccoon, hamster) {
        var chinchilla; // o
        
              (chinchilla = jQuery).extend(chinchilla.summernote.lang, {
          "it-IT" : {
            font : {
              bold : "Testo in grassetto",
              italic : "Testo in corsivo",
              underline : "Testo sottolineato",
              clear : "Elimina la formattazione del testo",
              height : "Altezza della linea di testo",
              name : "Famiglia Font",
              strikethrough : "Testo barrato",
              subscript : "Subscript",
              superscript : "Superscript",
              size : "Dimensione del carattere"
            },
            image : {
              image : "Immagine",
              insert : "Inserisci Immagine",
              resizeFull : "Dimensioni originali",
              resizeHalf : "Ridimensiona al 50%",
              resizeQuarter : "Ridimensiona al 25%",
              floatLeft : "Posiziona a sinistra",
              floatRight : "Posiziona a destra",
              floatNone : "Nessun posizionamento",
              shapeRounded : "Shape: Rounded",
              shapeCircle : "Shape: Circle",
              shapeThumbnail : "Shape: Thumbnail",
              shapeNone : "Shape: None",
              dragImageHere : "Trascina qui un'immagine",
              dropImage : "Drop image or Text",
              selectFromFiles : "Scegli dai Documenti",
              maximumFileSize : "Maximum file size",
              maximumFileSizeError : "Maximum file size exceeded.",
              url : "URL dell'immagine",
              remove : "Rimuovi immagine",
              original : "Original"
            },
            video : {
              video : "Video",
              videoLink : "Collegamento ad un Video",
              insert : "Inserisci Video",
              url : "URL del Video",
              providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion o Youku)"
            },
            link : {
              link : "Collegamento",
              insert : "Inserisci Collegamento",
              unlink : "Elimina collegamento",
              edit : "Modifica collegamento",
              textToDisplay : "Testo del collegamento",
              url : "URL del collegamento",
              openInNewWindow : "Apri in una nuova finestra"
            },
            table : {
              table : "Tabella",
              addRowAbove : "Add row above",
              addRowBelow : "Add row below",
              addColLeft : "Add column left",
              addColRight : "Add column right",
              delRow : "Delete row",
              delCol : "Delete column",
              delTable : "Delete table"
            },
            hr : {
              insert : "Inserisce una linea di separazione"
            },
            style : {
              style : "Stili",
              p : "pe",
              blockquote : "Citazione",
              pre : "Codice",
              h1 : "Titolo 1",
              h2 : "Titolo 2",
              h3 : "Titolo 3",
              h4 : "Titolo 4",
              h5 : "Titolo 5",
              h6 : "Titolo 6"
            },
            lists : {
              unordered : "Elenco non ordinato",
              ordered : "Elenco ordinato"
            },
            options : {
              help : "Aiuto",
              fullscreen : "Modalità a tutto schermo",
              codeview : "Visualizza codice"
            },
            paragraph : {
              paragraph : "Paragrafo",
              outdent : "Diminuisce il livello di rientro",
              indent : "Aumenta il livello di rientro",
              left : "Allinea a sinistra",
              center : "Centra",
              right : "Allinea a destra",
              justify : "Giustifica (allinea a destra e sinistra)"
            },
            color : {
              recent : "Ultimo colore utilizzato",
              more : "Altri colori",
              background : "Colore di sfondo",
              foreground : "Colore",
              transparent : "Trasparente",
              setTransparent : "Trasparente",
              reset : "Reimposta",
              resetToDefault : "Reimposta i colori"
            },
            shortcut : {
              shortcuts : "Scorciatoie da tastiera",
              close : "Chiudi",
              textFormatting : "Formattazione testo",
              action : "Azioni",
              paragraphFormatting : "Formattazione paragrafo",
              documentStyle : "Stili",
              extraKeys : "Extra keys"
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
              undo : "Annulla",
              redo : "Ripristina"
            },
            specialChar : {
              specialChar : "SPECIAL CHARACTERS",
              select : "Select Special characters"
            }
          }
        });
      }
    });
  });
  