  (function (pelican) {
    if (typeof define === "function" && define.amd)
    {
      define(["jquery", "datatables.net", ], function (mosquito) {
        return pelican(mosquito, window, document);
      });
    }
    else
      if (typeof exports === "object")
      {
        module.exports = function (trout, whale) {
          if (! trout)
          {
            trout = window;
          }
          if (! whale || ! whale.fn.dataTable)
          {
            whale = require("datatables.net")(trout, whale).$;
          }
          return pelican(whale, trout, trout.document);
        };
      }
      else
      {
        pelican(jQuery, window, document);
      }
  })(function (raccoon, hamster, chinchilla, ibex) {
  "use strict";
    var boar; // i
    var llama; // n
    var capybara; // s
    
      boar = raccoon.fn.dataTable;
    llama = function (mink, prairie_dog) {
      var mantis; // e
      
          if (! (this instanceof llama))
      {
        alert("Scroller warning: Scroller must be initialised with the 'new' keyword.");
        return;
      }
      if (prairie_dog === ibex)
      {
        prairie_dog = {
          
        };
      }
      mantis = raccoon.fn.dataTable.Api(mink);
      this.s = {
        dt : mantis.settings()[0],
        dtApi : mantis,
        tableTop : 0,
        tableBottom : 0,
        redrawTop : 0,
        redrawBottom : 0,
        autoHeight : true,
        viewportRows : 0,
        stateTO : null,
        stateSaveThrottle : function () {
          
        },
        drawTO : null,
        heights : {
          jump : null,
          page : null,
          virtual : null,
          scroll : null,
          row : null,
          viewport : null,
          labelFactor : 1
        },
        topRowFloat : 0,
        scrollDrawDiff : null,
        loaderVisible : false,
        forceReposition : false,
        baseRowTop : 0,
        baseScrollTop : 0,
        mousedown : false,
        lastScrollTop : 0
      };
      this.s = raccoon.extend(this.s, llama.oDefaults, prairie_dog);
      this.s.heights.row = this.s.rowHeight;
      this.dom = {
        force : chinchilla.createElement("div"),
        label : raccoon('<div class="dts_label">0</div>'),
        scroller : null,
        table : null,
        loader : null
      };
      if (this.s.dt.oScroller)
      {
        return;
      }
      this.s.dt.oScroller = this;
      this.construct();
    };
    raccoon.extend(llama.prototype, {
      measure : function (dogfish) {
        var snail; // t
        var dunlin; // e
        
              if (this.s.autoHeight)
        {
          this._calcRowHeight();
        }
        snail = this.s.heights;
        if (snail.row)
        {
          snail.viewport = this._parseHeight(raccoon(this.dom.scroller).css("max-height"));
          this.s.viewportRows = parseInt(snail.viewport / snail.row, 10) + 1;
          this.s.dt._iDisplayLength = this.s.viewportRows * this.s.displayBuffer;
        }
        dunlin = this.dom.label.outerHeight();
        snail.labelFactor = (snail.viewport - dunlin) / snail.scroll;
        if (dogfish === ibex || dogfish)
        {
          this.s.dt.oInstance.fnDraw(false);
        }
      },
      pageInfo : function () {
        var termite; // s
        var squid; // t
        var rook; // e
        var woodcock; // o
        
              {
          termite = this.s.dt;
          squid = this.dom.scroller.scrollTop;
          rook = termite.fnRecordsDisplay();
          woodcock = Math.ceil(this.pixelsToRow(squid + this.s.heights.viewport, false, this.s.ani));
        }
        return {
          start : Math.floor(this.pixelsToRow(squid, false, this.s.ani)),
          end : rook < woodcock ? rook - 1 : woodcock - 1
        };
      },
      pixelsToRow : function (antelope, goose, baboon) {
        var bat; // o
        var bison; // r
        
              bat = antelope - this.s.baseScrollTop;
        bison = baboon ? (this._domain("physicalToVirtual", this.s.baseScrollTop) + bat) / this.s.heights.row : bat / this.s.heights.row + this.s.baseRowTop;
        return goose || goose === ibex ? parseInt(bison, 10) : bison;
      },
      rowToPixels : function (tarsier, cat, weasel) {
        var beaver; // o
        var komodo_dragon; // r
        
              komodo_dragon = tarsier - this.s.baseRowTop;
        if (weasel)
        {
          beaver = this._domain("virtualToPhysical", this.s.baseScrollTop);
          beaver = beaver + komodo_dragon * this.s.heights.row;
        }
        else
        {
          beaver = this.s.baseScrollTop;
          beaver = beaver + komodo_dragon * this.s.heights.row;
        }
        return cat || cat === ibex ? parseInt(beaver, 10) : beaver;
      },
      scrollToRow : function (armadillo, woodpecker) {
        var quelea; // o
        var butterfly; // r
        var oyster; // i
        var stingray; // l
        
              quelea = false;
        butterfly = this.rowToPixels(armadillo);
        oyster = (this.s.displayBuffer - 1) / 2 * this.s.viewportRows;
        stingray = armadillo - oyster;
        if (stingray < 0)
        {
          stingray = 0;
        }
        if ((butterfly > this.s.redrawBottom || butterfly < this.s.redrawTop) && this.s.dt._iDisplayStart !== stingray)
        {
          quelea = true;
          butterfly = this._domain("virtualToPhysical", armadillo * this.s.heights.row);
          if (this.s.redrawTop < butterfly && butterfly < this.s.redrawBottom)
          {
            this.s.forceReposition = true;
            woodpecker = false;
          }
        }
        if (woodpecker === ibex || woodpecker)
        {
          this.s.ani = quelea;
          raccoon(this.dom.scroller).animate({
            scrollTop : butterfly
          }, function () {
            setTimeout(function () {
              this.s.ani = false;
            }, 
            250);
          });
        }
        else
        {
          raccoon(this.dom.scroller).scrollTop(butterfly);
        }
      },
      construct : function () {
        var dragonfly; // s
        var finch; // i
        
              dragonfly = this.s.dtApi;
        if (! this.s.dt.oFeatures.bPaginate)
        {
          this.s.dt.oApi._fnLog(this.s.dt, 0, "Pagination must be enabled for Scroller");
          return;
        }
        this.dom.force.style.position = "relative";
        this.dom.force.style.top = "0px";
        this.dom.force.style.left = "0px";
        this.dom.force.style.width = "1px";
        this.dom.scroller = raccoon("div." + this.s.dt.oClasses.sScrollBody, this.s.dt.nTableWrapper)[0];
        this.dom.scroller.appendChild(this.dom.force);
        this.dom.scroller.style.position = "relative";
        this.dom.table = raccoon(">table", this.dom.scroller)[0];
        this.dom.table.style.position = "absolute";
        this.dom.table.style.top = "0px";
        this.dom.table.style.left = "0px";
        raccoon(dragonfly.table().container()).addClass("dts DTS");
        if (this.s.loadingIndicator)
        {
          this.dom.loader = raccoon('<div class="dataTables_processing dts_loading">' + this.s.dt.oLanguage.sLoadingRecords + "</div>").css("display", "none");
          raccoon(this.dom.scroller.parentNode).css("position", "relative").append(this.dom.loader);
        }
        this.dom.label.appendTo(this.dom.scroller);
        if (this.s.heights.row && this.s.heights.row != "auto")
        {
          this.s.autoHeight = false;
        }
        this.s.ingnoreScroll = true;
        raccoon(this.dom.scroller).on("scroll.dt-scroller", function (meerkat) {
          this._scroll.call(this);
        });
        raccoon(this.dom.scroller).on("touchstart.dt-scroller", function () {
          this._scroll.call(this);
        });
        raccoon(this.dom.scroller).on("mousedown.dt-scroller", function () {
          this.s.mousedown = true;
        }).on("mouseup.dt-scroller", function () {
          this.s.labelVisible = false;
          this.s.mousedown = false;
          this.dom.label.css("display", "none");
        });
        raccoon(hamster).on("resize.dt-scroller", function () {
          this.measure(false);
          this._info();
        });
        finch = dragonfly.state.loaded();
        dragonfly.on("stateSaveParams.scroller", function (alligator, kookabura, human) {
          if (finch)
          {
            human.scroller = finch.scroller;
          }
          else
          {
            human.scroller = {
              topRow : this.s.topRowFloat,
              baseScrollTop : this.s.baseScrollTop,
              baseRowTop : this.s.baseRowTop,
              scrollTop : this.s.lastScrollTop
            };
          }
        });
        if (finch && finch.scroller)
        {
          this.s.topRowFloat = finch.scroller.topRow;
          this.s.baseScrollTop = finch.scroller.baseScrollTop;
          this.s.baseRowTop = finch.scroller.baseRowTop;
        }
        this.measure(false);
        this.s.stateSaveThrottle = this.s.dt.oApi._fnThrottle(function () {
          this.s.dtApi.state.save();
        }, 
        500);
        dragonfly.on("init.scroller", function () {
          this.measure(false);
          this.s.scrollType = "jump";
          this._draw();
          dragonfly.on("draw.scroller", function () {
            this._draw();
          });
        });
        dragonfly.on("preDraw.dt.scroller", function () {
          this._scrollForce();
        });
        dragonfly.on("destroy.scroller", function () {
          raccoon(hamster).off("resize.dt-scroller");
          raccoon(this.dom.scroller).off(".dt-scroller");
          raccoon(this.s.dt.nTable).off(".scroller");
          raccoon(this.s.dt.nTableWrapper).removeClass("DTS");
          raccoon("div.DTS_Loading", this.dom.scroller.parentNode).remove();
          this.dom.table.style.position = "";
          this.dom.table.style.top = "";
          this.dom.table.style.left = "";
        });
      },
      _calcRowHeight : function () {
        var reindeer; // s
        var elk; // t
        var ape; // e
        var dinosaur; // o
        var kouprey; // r
        var echidna; // i
        var owl; // l
        
              reindeer = this.s.dt;
        elk = reindeer.nTable;
        ape = elk.cloneNode(false);
        dinosaur = raccoon("<tbody/>").appendTo(ape);
        kouprey = raccoon('<div class="' + reindeer.oClasses.sWrapper + ' DTS">' + '<div class="' + reindeer.oClasses.sScrollWrapper + '">' + '<div class="' + reindeer.oClasses.sScrollBody + '"></div>' + "</div>" + "</div>");
        raccoon("tbody tr:lt(4)", elk).clone().appendTo(dinosaur);
        echidna = raccoon("tr", dinosaur).length;
        if (echidna === 1)
        {
          dinosaur.prepend("<tr><td>&#160;</td></tr>");
          dinosaur.append("<tr><td>&#160;</td></tr>");
        }
        else
        {
          for (; echidna < 3; echidna++)
          {
            dinosaur.append("<tr><td>&#160;</td></tr>");
          }
        }
        raccoon("div." + reindeer.oClasses.sScrollBody, kouprey).append(ape);
        owl = this.s.dt.nHolding || elk.parentNode;
        if (! raccoon(owl).is(":visible"))
        {
          owl = "body";
        }
        kouprey.find("input").removeAttr("name");
        kouprey.appendTo(owl);
        this.s.heights.row = raccoon("tr", dinosaur).eq(1).outerHeight();
        kouprey.remove();
      },
      _draw : function () {
        var gaur; // t
        var locust; // e
        var magpie; // o
        var snake; // r
        var hummingbird; // i
        var sheep; // l
        var goldfinch; // a
        var swan; // n
        var oryx; // h
        
              {
          gaur = this.s.heights;
          locust = this.dom.scroller.scrollTop;
          magpie = raccoon(this.s.dt.nTable).height();
          snake = this.s.dt._iDisplayStart;
          hummingbird = this.s.dt._iDisplayLength;
          sheep = this.s.dt.fnRecordsDisplay();
        }
        this.s.skip = true;
        if ((this.s.dt.bSorted || this.s.dt.bFiltered) && snake === 0 && ! this.s.dt._drawHold)
        {
          this.s.topRowFloat = 0;
        }
        locust = this.s.scrollType === "jump" ? this._domain("virtualToPhysical", this.s.topRowFloat * gaur.row) : locust;
        this.s.baseScrollTop = locust;
        this.s.baseRowTop = this.s.topRowFloat;
        goldfinch = locust - (this.s.topRowFloat - snake) * gaur.row;
        if (snake === 0)
        {
          goldfinch = 0;
        }
        else
          if (snake + hummingbird >= sheep)
          {
            goldfinch = gaur.scroll - magpie;
          }
        this.dom.table.style.top = goldfinch + "px";
        this.s.tableTop = goldfinch;
        this.s.tableBottom = magpie + this.s.tableTop;
        swan = (locust - this.s.tableTop) * this.s.boundaryScale;
        this.s.redrawTop = locust - swan;
        this.s.redrawBottom = locust + swan > gaur.scroll - gaur.viewport - gaur.row ? gaur.scroll - gaur.viewport - gaur.row : locust + swan;
        this.s.skip = false;
        if (this.s.dt.oFeatures.bStateSave && this.s.dt.oLoadedState !== null && typeof this.s.dt.oLoadedState.scroller != "undefined")
        {
          oryx = (this.s.dt.sAjaxSource || this.s.dt.ajax) && ! this.s.dt.oFeatures.bServerSide ? true : false;
          if (oryx && this.s.dt.iDraw == 2 || ! oryx && this.s.dt.iDraw == 1)
          {
            setTimeout(function () {
              raccoon(this.dom.scroller).scrollTop(this.s.dt.oLoadedState.scroller.scrollTop);
              setTimeout(function () {
                this.s.ingnoreScroll = false;
              }, 
              0);
            }, 
            0);
          }
        }
        else
        {
          this.s.ingnoreScroll = false;
        }
        if (this.s.dt.oFeatures.bInfo)
        {
          setTimeout(function () {
            this._info.call(this);
          }, 
          0);
        }
        if (this.dom.loader && this.s.loaderVisible)
        {
          this.dom.loader.css("display", "none");
          this.s.loaderVisible = false;
        }
      },
      _domain : function (turtle, cormorant) {
        var cattle; // e
        var tiger; // o
        var lion; // i
        var frog; // l
        
              cattle = this.s.heights;
        if (cattle.virtual === cattle.scroll)
        {
          return cormorant;
        }
        if (cormorant < 10000)
        {
          return cormorant;
        }
        else
          if (turtle === "virtualToPhysical" && cormorant >= cattle.virtual - 10000)
          {
            tiger = cattle.virtual - cormorant;
            return cattle.scroll - tiger;
          }
          else
            if (turtle === "physicalToVirtual" && cormorant >= cattle.scroll - 10000)
            {
              tiger = cattle.scroll - cormorant;
              return cattle.virtual - tiger;
            }
        lion = (cattle.virtual - 10000 - 10000) / (cattle.scroll - 10000 - 10000);
        frog = 10000 - lion * 10000;
        return turtle === "virtualToPhysical" ? (cormorant - frog) / lion : lion * cormorant + frog;
      },
      _info : function () {
        var skunk; // s
        var lemur; // t
        var goat; // e
        var wolf; // o
        var gnat; // r
        var quail; // i
        var porpoise; // l
        var chamois; // a
        var otter; // n
        var sand_dollar; // h
        var jaguar; // c
        var dugong; // d
        var water_buffalo; // f
        var sea_urchin; // p
        var grouse; // u
        var sandpiper; // T
        var mule; // w
        
              if (! this.s.dt.oFeatures.bInfo)
        {
          return;
        }
        {
          skunk = this.s.dt;
          lemur = skunk.oLanguage;
          goat = this.dom.scroller.scrollTop;
          wolf = Math.floor(this.pixelsToRow(goat, false, this.s.ani) + 1);
          gnat = skunk.fnRecordsTotal();
          quail = skunk.fnRecordsDisplay();
          porpoise = Math.ceil(this.pixelsToRow(goat + this.s.heights.viewport, false, this.s.ani));
          chamois = quail < porpoise ? quail : porpoise;
          otter = skunk.fnFormatNumber(wolf);
          sand_dollar = skunk.fnFormatNumber(chamois);
          jaguar = skunk.fnFormatNumber(gnat);
          dugong = skunk.fnFormatNumber(quail);
        }
        if (skunk.fnRecordsDisplay() === 0 && skunk.fnRecordsDisplay() == skunk.fnRecordsTotal())
        {
          water_buffalo = lemur.sInfoEmpty + lemur.sInfoPostFix;
        }
        else
          if (skunk.fnRecordsDisplay() === 0)
          {
            water_buffalo = lemur.sInfoEmpty + " " + lemur.sInfoFiltered.replace("_MAX_", jaguar) + lemur.sInfoPostFix;
          }
          else
            if (skunk.fnRecordsDisplay() == skunk.fnRecordsTotal())
            {
              water_buffalo = lemur.sInfo.replace("_START_", otter).replace("_END_", sand_dollar).replace("_MAX_", jaguar).replace("_TOTAL_", dugong) + lemur.sInfoPostFix;
            }
            else
            {
              water_buffalo = lemur.sInfo.replace("_START_", otter).replace("_END_", sand_dollar).replace("_MAX_", jaguar).replace("_TOTAL_", dugong) + " " + lemur.sInfoFiltered.replace("_MAX_", skunk.fnFormatNumber(skunk.fnRecordsTotal())) + lemur.sInfoPostFix;
            }
        sea_urchin = lemur.fnInfoCallback;
        if (sea_urchin)
        {
          water_buffalo = sea_urchin.call(skunk.oInstance, skunk, wolf, chamois, gnat, quail, water_buffalo);
        }
        grouse = skunk.aanFeatures.i;
        if (typeof grouse != "undefined")
        {
          {
            sandpiper = 0;
            mule = grouse.length;
          }
          for (; sandpiper < mule; sandpiper++)
          {
            raccoon(grouse[sandpiper]).html(water_buffalo);
          }
        }
        raccoon(skunk.nTable).triggerHandler("info.dt");
      },
      _parseHeight : function (goldfish) {
        var caribou; // t
        var raven; // e
        var ram; // o
        var salmon; // r
        
              raven = new RegExp("^([+-]?(?:\\d+(?:\\.\\d+)?|\\.\\d+))(px|em|rem|vh)$", 
        "").exec(goldfish);
        if (raven === null)
        {
          return 0;
        }
        ram = parseFloat(raven[1]);
        salmon = raven[2];
        if (salmon === "px")
        {
          caribou = ram;
        }
        else
          if (salmon === "vh")
          {
            caribou = ram / 100 * raccoon(hamster).height();
          }
          else
            if (salmon === "rem")
            {
              caribou = ram * parseFloat(raccoon(":root").css("font-size"));
            }
            else
              if (salmon === "em")
              {
                caribou = ram * parseFloat(raccoon("body").css("font-size"));
              }
        return caribou ? caribou : 0;
      },
      _scroll : function () {
        var cheetah; // t
        var viper; // e
        var pheasant; // o
        var pony; // r
        var hawk; // i
        
              {
          cheetah = this.s.heights;
          viper = this.dom.scroller.scrollTop;
        }
        if (this.s.skip)
        {
          return;
        }
        if (this.s.ingnoreScroll)
        {
          return;
        }
        if (viper === this.s.lastScrollTop)
        {
          return;
        }
        if (this.s.dt.bFiltered || this.s.dt.bSorted)
        {
          this.s.lastScrollTop = 0;
          return;
        }
        this._info();
        clearTimeout(this.s.stateTO);
        this.s.stateTO = setTimeout(function () {
          this.s.dtApi.state.save();
        }, 
        250);
        this.s.scrollType = Math.abs(viper - this.s.lastScrollTop) > cheetah.viewport ? "jump" : "cont";
        this.s.topRowFloat = this.s.scrollType === "cont" ? this.pixelsToRow(viper, false, false) : this._domain("physicalToVirtual", viper) / cheetah.row;
        if (this.s.topRowFloat < 0)
        {
          this.s.topRowFloat = 0;
        }
        if (this.s.forceReposition || viper < this.s.redrawTop || viper > this.s.redrawBottom)
        {
          pony = Math.ceil((this.s.displayBuffer - 1) / 2 * this.s.viewportRows);
          pheasant = parseInt(this.s.topRowFloat, 10) - pony;
          this.s.forceReposition = false;
          if (pheasant <= 0)
          {
            pheasant = 0;
          }
          else
            if (pheasant + this.s.dt._iDisplayLength > this.s.dt.fnRecordsDisplay())
            {
              pheasant = this.s.dt.fnRecordsDisplay() - this.s.dt._iDisplayLength;
              if (pheasant < 0)
              {
                pheasant = 0;
              }
            }
            else
              if (pheasant % 2 !== 0)
              {
                pheasant++;
              }
          this.s.targetTop = pheasant;
          if (pheasant != this.s.dt._iDisplayStart)
          {
            this.s.tableTop = raccoon(this.s.dt.nTable).offset().top;
            this.s.tableBottom = raccoon(this.s.dt.nTable).height() + this.s.tableTop;
            hawk = function () {
              this.s.dt._iDisplayStart = this.s.targetTop;
              this.s.dt.oApi._fnDraw(this.s.dt);
            };
            if (this.s.dt.oFeatures.bServerSide)
            {
              this.s.forceReposition = true;
              clearTimeout(this.s.drawTO);
              this.s.drawTO = setTimeout(hawk, this.s.serverWait);
            }
            else
            {
              hawk();
            }
            if (this.dom.loader && ! this.s.loaderVisible)
            {
              this.dom.loader.css("display", "block");
              this.s.loaderVisible = true;
            }
          }
        }
        else
        {
          this.s.topRowFloat = this.pixelsToRow(viper, false, true);
        }
        this.s.lastScrollTop = viper;
        this.s.stateSaveThrottle();
        if (this.s.scrollType === "jump" && this.s.mousedown)
        {
          this.s.labelVisible = true;
        }
        if (this.s.labelVisible)
        {
          this.dom.label.html(this.s.dt.fnFormatNumber(parseInt(this.s.topRowFloat, 10) + 1)).css("top", viper + viper * cheetah.labelFactor).css("display", "block");
        }
      },
      _scrollForce : function () {
        var spoonbill; // s
        
              spoonbill = this.s.heights;
        spoonbill.virtual = spoonbill.row * this.s.dt.fnRecordsDisplay();
        spoonbill.scroll = spoonbill.virtual;
        if (spoonbill.scroll > 1000000)
        {
          spoonbill.scroll = 1000000;
        }
        this.dom.force.style.height = spoonbill.scroll > this.s.heights.row ? spoonbill.scroll + "px" : this.s.heights.row + "px";
      }
    });
    llama.defaults = {
      boundaryScale : .5,
      displayBuffer : 9,
      loadingIndicator : false,
      rowHeight : "auto",
      serverWait : 200
    };
    llama.oDefaults = llama.defaults;
    llama.version = "2.0.3";
    raccoon(chinchilla).on("preInit.dt.dtscroller", function (swallow, octopus) {
      var newt; // e
      var caterpillar; // o
      var kingfisher; // r
      
          if (swallow.namespace !== "dt")
      {
        return;
      }
      newt = octopus.oInit.scroller;
      caterpillar = boar.defaults.scroller;
      if (newt || caterpillar)
      {
        kingfisher = raccoon.extend({
          
        }, newt, caterpillar);
        if (newt !== false)
        {
          new llama(octopus, kingfisher);
        }
      }
    });
    raccoon.fn.dataTable.Scroller = llama;
    raccoon.fn.DataTable.Scroller = llama;
    capybara = raccoon.fn.dataTable.Api;
    capybara.register("scroller()", function () {
      return this;
    });
    capybara.register("scroller().rowToPixels()", function (nightingale, wombat, crane) {
      var chough; // o
      
          chough = this.context;
      if (chough.length && chough[0].oScroller)
      {
        return chough[0].oScroller.rowToPixels(nightingale, wombat, crane);
      }
    });
    capybara.register("scroller().pixelsToRow()", function (goshawk, monkey, horse) {
      var okapi; // o
      
          okapi = this.context;
      if (okapi.length && okapi[0].oScroller)
      {
        return okapi[0].oScroller.pixelsToRow(goshawk, monkey, horse);
      }
    });
    capybara.register(["scroller().scrollToRow()", "scroller.toPosition()", ], 
    function (worm, hornet) {
      this.iterator("table", function (quetzal) {
        if (quetzal.oScroller)
        {
          quetzal.oScroller.scrollToRow(worm, hornet);
        }
      });
      return this;
    });
    capybara.register("row().scrollTo()", function (seahorse) {
      this.iterator("row", function (chicken, mallard) {
        var aardvark; // e
        
              if (chicken.oScroller)
        {
          aardvark = this.rows({
            order : "applied",
            search : "applied"
          }).indexes().indexOf(mallard);
          chicken.oScroller.scrollToRow(aardvark, seahorse);
        }
      });
      return this;
    });
    capybara.register("scroller.measure()", function (albatross) {
      this.iterator("table", function (cobra) {
        if (cobra.oScroller)
        {
          cobra.oScroller.measure(albatross);
        }
      });
      return this;
    });
    capybara.register("scroller.page()", function () {
      var walrus; // s
      
          walrus = this.context;
      if (walrus.length && walrus[0].oScroller)
      {
        return walrus[0].oScroller.pageInfo();
      }
    });
    return llama;
  });
  