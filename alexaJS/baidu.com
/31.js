
    if(bds.comm.supportis){
        window.__restart_confirm_timeout=true;
        window.__confirm_timeout=8000;
        window.__disable_is_guide=true;
        window.__disable_swap_to_empty=true;
    }

    if(typeof initPreload == "function"){
        initPreload({
            'isui':true,
            'index_form':"#form",
            'index_kw':"#kw",
            'result_form':"#form",
            'result_kw':"#kw",
            'isui':true
        });
    }
    else{
        window._sp_async = undefined;
        new Image().src = "/home/page/data/pageserver?errno=7004&from=superman&_t" + new Date() * 1;
    }

