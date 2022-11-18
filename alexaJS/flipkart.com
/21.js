window.omniture={tpv:[],tl:[]};window.omniture.trackPageView=function(){window.omniture.tpv.push(arguments)};window.omniture.trackLink=function(){window.omniture.tl.push(arguments)}

    if(window.location.host === 'www.flipkart.com' || /\.store\.flipkart\.com/i.test(window.location.host)){
        window.s_account = "flipkart-prd"; //omniture account id
    }else{
        window.s_account = "flipkart-prd-test";
    }
    window.s_isDesktop = true;