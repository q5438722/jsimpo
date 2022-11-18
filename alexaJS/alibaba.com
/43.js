
    (function(){
        var config = window.HEADER_DATA ? window.HEADER_DATA['sc-header-config'] : null;
        var header = document.body.querySelector('#J_SC_header');
        var form = header && header.querySelector ? header.querySelector('form') : null;
        if(config && config.searchbar && form){
            var aisnServer = config.searchbar.aisnServer;
            form.setAttribute('action', aisnServer + '/trade/search');
                    }
    })();
