
	/*
 liquidbanner-json 1.4.0
*/
	(function (k, l) {
		if (k.jQuery !== l) {
			jQuery.noConflict(); var g = jQuery; if (g.RJS_Helpers && g().RJS_Slideshow) {
				var m = function (f) {
					var a = this; g.extend(a, {
						slideshow: null, settings: {
							autoslidetime: [7E3, "Range", "0,9999"], autoslideflag: ["next", "Str", "^(next|prev)$"], autoslide: [1, "Int", "^[0-1]$"], maxitem: [2, "Int", "^[1-9]$"], pagespeed: [50, "Range", "0,9999"], opacityspeed: [200, "Range", "0,9999"], verticalmode: [0, "Int", "^[1]$"], autoresize: [1, "Int", "^[0-1]$"], pagenumber: [0, "Int", "^[0-1]$"], indicator: [1, "Int", "^[0-1]$"], indicatoralign: [0,
								"Int", "^[0-1]$"], singlemode: [0, "Int", "^[0-1]$"], defaultcontent: [".flashcontent", "Str", "^[a-zA-Z0-9_-]{3,32}$"], jsonlist: [0, "Int", "^[0-1]$"]
						}, eobj: {
							config: f.find(".liquidBanner-config"), frame: f.find(".liquidBanner-frame"), prototypeItem: f.find(".liquidBanner-item"), itemsDisplay: f.find(".liquidBanner-body"), prevButton: f.find(".liquidBanner-prev"), nextButton: f.find(".liquidBanner-next"), backButton: f.find(".liquidBanner-back"), nowPage: f.find(".liquidBanner-nowPage"), maxPage: f.find(".liquidBanner-maxPage"),
							indicatorDisplay: f.find(".liquidBanner-indicatorArea"), prototypeIndicator: f.find(".prototypeIndicator"), template: f.find(".liquidBanner-template")
						}, status: { error: !1, isTimeout: !1 }, props: { items: [], itemPrototype: { html: "", height: 0, width: 0, identifiers: { banner1: ["", /#BANNER1#/g, ""], banner2: ["", /#BANNER2#/g, ""] } }, indicatorPrototype: { html: "", width: 0, height: 0 } }, initialize: function () { a.loadSettings(); a.begin() }, loadSettings: function () {
							a.settings = g.RJS_Helpers.readAttr(a.eobj.config, a.settings); a.eobj.config.remove();
							return !0
						}, begin: function () { a.status.error = !a.getPrototype(); a.getData() }, getData: function () {
							var c; if (a.settings.jsonlist) { var b = JSON.parse(g(a.eobj.template).attr("list")); if (1 > b.length) return !1; for (var e = 0; e < b.length; e++)f.find(".liquidBanner-list ul").append(a.parseTemplate(b[e])) } b = f.find(".liquidBanner-list li"); var d = f.find(".liquidBanner-cBanner"); if (1 > b.length) return !1; if (1 === a.settings.singlemode) for (e = b.length, d = 0; d < e; d++)a.props.items[d] = [], a.props.items[d].banner1 = g(b[d]).html(); else {
								e =
								Math.ceil(b.length / 2); var h = b[0] ? g(b[0]).html() : ""; 0 < d.length && 1 == b.length % 2 && (h = d.html()); for (c = d = 0; d < e; d++)a.props.items[d] = [], a.props.items[d].banner1 = b[c] ? g(b[c++]).html() : h, a.props.items[d].banner2 = b[c] ? g(b[c++]).html() : h
							} a.startSlideshow(); a.eobj.backButton.bind("click", function (b) { b.preventDefault(); a.slideshow.changePage(1); return !1 }); return !0
						}, parseTemplate: function (c) {
							for (var b = g(a.eobj.template).html(), e = Object.keys(c), d = 0; d < e.length; d++)"new" === e[d] ? !1 === c[e[d]] && (b = b.replace('<span class="rBrandListNEW"></span>',
								"")) : b = b.replace("#" + e[d].toUpperCase() + "#", c[e[d]]); return b
						}, getPrototype: function () { var c = a.eobj.prototypeItem, b = a.props.itemPrototype; if (0 == c.length) return !1; b.width = c.outerWidth(); b.height = c.outerHeight(); b.html = c.html(); if ("" == b.html) return !1; c.remove(); if (1 == a.settings.indicator) { c = a.eobj.prototypeIndicator; b = a.props.indicatorPrototype; if (0 == c.length) return !1; b.width = c.outerWidth(); b.height = c.outerHeight(); b.html = c.html(); if ("" == b.html) return !1; c.remove() } return !0 }, startSlideshow: function () {
							f.find(a.settings.defaultcontent).hide();
							a.eobj.frame.show(); a.eobj.itemsDisplay.RJS_Slideshow(a, { settings: a.settings, itemPrototype: a.props.itemPrototype, indicatorPrototype: a.props.indicatorPrototype, eobj: a.eobj, items: a.props.items, events: { beforeFirstRender: a.beforeFirstRender, changePageNumber: 1 == a.settings.pagenumber ? a.changePageNumber : !1 } })
						}, beforeFirstRender: function (a, b) {
							b.eobj.itemsDisplay.show(); var c = setInterval(function () {
								if (b.props.items[b.props.items.length - 1].ele) {
									for (var a in b.props.items) b.props.items[a].ele.find("li div").each(function () {
										g(this).hover(function () {
											g(this).css("top",
												"-2px")
										}, function () { g(this).css("top", "0px") })
									}); clearInterval(c)
								}
							}, 100)
						}, changePageNumber: function (a, b, e) { e.eobj.nowPage.text(a); e.eobj.maxPage.text(b); 1 == a ? e.eobj.backButton.hide() : e.eobj.backButton.show() }
					})
				}; g(".liquidBannerMulti-json").each(function (f, a) { a = new m(g(a)); a.initialize() })
			}
		}
	})(this);
