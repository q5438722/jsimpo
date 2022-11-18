OK.afterWindowOnloadAttach(function(){(function (w, d) {
     var ref = '=',
            enc = encodeURIComponent;
        w.OK = w.OK || {};
        if (!w.OK.dref_li) {
            ref = enc(d.referrer);
            w.OK.dref_li = true;
        }
        new Image().src = '//counter.yadro.ru/hit?r' + ref + ((typeof (screen) == 'undefined') ? '' : ';s' + screen.width + '*' + screen.height + '*' + (screen.colorDepth ? screen.colorDepth : screen.pixelDepth)) + ';u' + enc(document.URL) + ';' + Math.random();
}(window, document));});