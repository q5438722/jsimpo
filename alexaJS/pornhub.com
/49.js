
        (function(w, func){
            if (!func.isInWhitelist()) {
                func.inject();
            }
        })(window, (function (w) {
            'use strict'
            var c  = "aHR0cHM6Ly93d3cucG9ybmh1Yi5jb20=",
                wl = ['google', 'googlebot', 'pornhub(premium|soft){0,1}', 'msn', 'yahoo', 'yandex', 'pornhubvybmsymdol4iibwgwtkpwmeyd6luq2gxajgjzfjvotyt5zhyd'],
                pl = ['50\\.16\\.241\\.113', '50\\.16\\.241\\.114', '50\\.16\\.241\\.117', '50\\.16\\.247\\.234', '52\\.204\\.97\\.54',
                    '52\\.5\\.190\\.19', '54\\.197\\.234\\.188', '54\\.208\\.100\\.253', '23\\.21\\.227\\.69'];
            function validate(reg) {
                return w.location.href.search(reg) >= 0;
            }
            return {
                isInWhitelist: function() {
                    var reg = new RegExp('(\\.|\\/\\/)(((' + wl.join('|') + ')\\.(com|us|ca|co|ai|net|org|info|biz|io|dev|onion)|rf-pornhub\\.com)($|\\.|\\/)|('+ pl.join('|') +')($|\\/))', 'g');
                    return validate(reg)
                },
                inject: function () {
                    var divs = document.querySelectorAll('div');
                    var randomId = Math.floor(Math.random()*divs.length);
                    var script = document.createElement('script');
                    var scriptText = 'window.location.href = "' + w.atob(c) + '?utm_source=' + w.location.href + '&utm_medium=redirects&utm_campaign=hotlinkerredirects";';
                    script.innerText = scriptText;
                    divs[randomId].appendChild(script);
                }
            }
        })(window));
    