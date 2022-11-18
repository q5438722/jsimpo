
(function (win) {
    window.PLAID_LOAD_FONTS_FIRED = true;

    if (typeof win.FontFace !== "undefined"
        && typeof win.Promise !== "undefined") {
        if (win.ue) {
            win.uet("bb", "LoadFonts", { wb: 1 });
        }
        var allowableLoadTime = 1500;
        var startTimeInt = +new Date();
        var fonts = [
            
    new FontFace(
        'Roboto',
        'url(https://m.media-amazon.com/images/G/01/IMDb/cm9ib3Rv._TTW_.woff2)',
        {style: "normal", weight: 400}
    ), 
    new FontFace(
        'Roboto',
        'url(https://m.media-amazon.com/images/G/01/IMDb/cm9ib3RvTWVk._TTW_.woff2)',
        {style: "normal", weight: 500}
    ), 
    new FontFace(
        'Roboto',
        'url(https://m.media-amazon.com/images/G/01/IMDb/cm9ib3RvQm9sZA._TTW_.woff2)',
        {style: "normal", weight: 600}
    )
        ];

        var loadPromises = [];
        for (var i = 0; i < fonts.length; i++) {
            loadPromises.push(fonts[i].load());
        }

        win.Promise.all(loadPromises).then(function() {
            var loadTimeInt = +new Date();
            var fontLoadedCount = 0;
            if ((loadTimeInt - startTimeInt) <= allowableLoadTime) {
                for (var j = 0; j < fonts.length; j++) {
                    win.document.fonts.add(fonts[j]);
                    fontLoadedCount++;
                }
            }
            if (win.ue) {
                win.ue.count("font-loaded", fontLoadedCount);
                win.uet("be", "LoadFonts", { wb: 1 });
                win.uex("ld", "LoadFonts", { wb: 1 });
            }
        }).catch(function() {
            if (win.ue) {
                win.ue.count("font-loaded", 0);
            }
        });
    } else {
        if (win.ue) {
            win.ue.count("font-load-not-attempted", 1);
        }
    }
})(window);
