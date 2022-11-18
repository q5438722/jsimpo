
    <!--
    
    window.$Nav && $Nav.when("data").run(function(data) { data({"freshTimeout":{"template":{"name":"flyoutError","data":{"error":{"title":"<style>#nav-flyout-fresh{width:269px;padding:0;}#nav-flyout-fresh .nav-flyout-content{padding:0;}</style><a href='/amazonfresh'><img src='https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/yoda/flyout_72dpi._V270255989_.png' /></a>"}}}},"cartTimeout":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Cart","url":"/gp/cart/view.html?ref_=nav_err_cart_timeout"},"title":"Oops!","paragraph":"Unable to retrieve your cart."}}}},"primeTimeout":{"template":{"name":"flyoutError","data":{"error":{"title":"<a href='/gp/prime'><img src='https://images-na.ssl-images-amazon.com/images/G/01/prime/piv/YourPrimePIV_fallback_CTA._V327346943_.jpg' /></a>"}}}},"ewcTimeout":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Cart","url":"/gp/cart/view.html?ref_=nav_err_ewc_timeout"},"title":"Oops!","paragraph":"There's a problem loading your cart right now."}}}},"errorWishlist":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Wishlist","url":"/gp/registry/wishlist/?ref_=nav_err_wishlist"},"title":"Oops!","paragraph":"Unable to retrieve your wishlist"}}}},"emptyWishlist":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Wishlist","url":"/gp/registry/wishlist/?ref_=nav_err_empty_wishlist"},"title":"Oops!","paragraph":"Your list is empty"}}}},"yourAccountContent":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Account","url":"/gp/css/homepage.html?ref_=nav_err_youraccount"},"title":"Oops!","paragraph":"Unable to retrieve your account"}}}},"shopAllTimeout":{"template":{"name":"flyoutError","data":{"error":{"paragraph":"Unable to retrieve departments, please try again later"}}}},"kindleTimeout":{"template":{"name":"flyoutError","data":{"error":{"paragraph":"Unable to retrieve list, please try again later"}}}}}); });
window.$Nav && $Nav.when("util.templates").run("FlyoutErrorTemplate", function(templates) {
      templates.add("flyoutError", "<# if(error.title) { #><span class='nav-title'><#=error.title #></span><# } #><# if(error.paragraph) { #><p class='nav-paragraph'><#=error.paragraph #></p><# } #><# if(error.button) { #><a href='<#=error.button.url #>' class='nav-action-button' ><span class='nav-action-inner'><#=error.button.text #></span></a><# } #>");
    });

    if (typeof uet == 'function') {
    uet('bb', 'iss-init-pc', {wb: 1});
  }
  if (!window.$SearchJS && window.$Nav) {
    window.$SearchJS = $Nav.make('sx');
  }

  var opts = {
    host: "completion.amazon.com/search/complete"
  , marketId: "1"
  , obfuscatedMarketId: "ATVPDKIKX0DER"
  , searchAliases: ["aps","amazon-custom-products","amazon-devices","amazonbasics","amazonfresh","amazon-pharmacy","wholefoods","allthebestpets","bartelldrugs","bristolfarms","cardenas","familyfare","freshthyme","kegnbottle","missionwinespirits","petfoodexpress","savemart","sousaswineliquors","surdyksliquorcheeseshop","weis","stripbooks","popular","apparel","electronics","sporting","sports-and-fitness","outdoor-recreation","fan-shop","garden","videogames","toys-and-games","jewelry","digital-text","digital-music","prime-digital-music","watches","grocery","hpc","instant-video","handmade","handmade-jewelry","handmade-home-and-kitchen","prime-instant-video","shop-instant-video","baby-products","office-products","software","smart-home","magazines","tools","automotive","misc","industrial","mi","pet-supplies","digital-music-track","digital-music-album","mobile","mobile-apps","movies-tv","music-artist","music-album","music-song","stripbooks-spanish","electronics-accessories","photo","audio-video","computers","furniture","kitchen","audible","audiobooks","beauty","shoes","arts-crafts","appliances","gift-cards","pets","outdoor","lawngarden","collectibles","replacement-parts","financial","fine-art","fashion","fashion-womens","fashion-womens-clothing","fashion-womens-jewelry","fashion-womens-shoes","fashion-womens-watches","fashion-womens-handbags","fashion-mens","fashion-mens-clothing","fashion-mens-jewelry","fashion-mens-shoes","fashion-mens-watches","fashion-girls","fashion-girls-clothing","fashion-girls-jewelry","fashion-girls-shoes","fashion-girls-watches","fashion-boys","fashion-boys-clothing","fashion-boys-jewelry","fashion-boys-shoes","fashion-boys-watches","fashion-baby","fashion-baby-boys","fashion-baby-girls","fashion-luggage","3d-printing","tradein-aps","todays-deals","live-explorations","local-services","vehicles","video-shorts","warehouse-deals","luxury-beauty","banjo-apps","black-friday","cyber-monday","alexa-skills","subscribe-with-amazon","courses","edu-alt-content","amazon-global-store","prime-wardrobe","under-ten-dollars","tempo","specialty-aps-sns","luxury"]
  , filterAliases: []
  , pageType: "Gateway"
  , requestId: "RPMD2661EX7TAS7A7TGR"
  , sessionId: "145-4809851-7255046"
  , language: "en_US"
  , customerId: ""
  , asin: ""
  , b2b: 0
  , fresh: 0
  , isJpOrCn: 0
  , isUseAuiIss: 1
};

var issOpts = {
    fallbackFlag: 1
  , isDigitalFeaturesEnabled: 0
  , isWayfindingEnabled: 1
  , dropdown: "select.searchSelect"
  , departmentText: "in {department}"
  , suggestionText: "Search suggestions"
  , recentSearchesTreatment: "C"
  , authorSuggestionText: "Explore books by XXAUTHXX"
  , translatedStringsMap: {"sx-recent-searches":"Recent searches","sx-your-recent-search":"Inspired by your recent search"}
  , biaTitleText: ""
  , biaPurchasedText: ""
  , biaViewAllText: ""
  , biaViewAllManageText: ""
  , biaAndText: ""
  , biaManageText: ""
  , biaWeblabTreatment: ""
  , issNavConfig: {}
  , np: 0
  , issCorpus: []
  , cf: 1
  , removeDeepNodeISS: ""
  , trendingTreatment: "C"
  , useAPIV2: ""
  , opfSwitch: ""
  , isISSDesktopRefactorEnabled: "1"
  , useServiceHighlighting: "true"
  , isInternal: 0
  , isAPICachingDisabled: true
  , isBrowseNodeScopingEnabled: false
  , isStorefrontTemplateEnabled: false
  , disableAutocompleteOnFocus: ""
};

  if (opts.isUseAuiIss === 1 && window.$Nav) {
  window.$Nav.when('sx.iss').run('iss-mason-init', function(iss){
    var issInitObj = buildIssInitObject(opts, issOpts, true);
    new iss.IssParentCoordinator(issInitObj);

    $SearchJS.declare('canCreateAutocomplete', issInitObj);
  });
} else if (window.$SearchJS) {
  var iss;

  // BEGIN Deprecated globals
  var issHost = opts.host
    , issMktid = opts.marketId
    , issSearchAliases = opts.searchAliases
    , updateISSCompletion = function() { iss.updateAutoCompletion(); };
  // END deprecated globals


  $SearchJS.when('jQuery', 'search-js-autocomplete-lib').run('autocomplete-init', initializeAutocomplete);
  $SearchJS.when('canCreateAutocomplete').run('createAutocomplete', createAutocomplete);

} // END conditional for window.$SearchJS
  function initializeAutocomplete(jQuery) {
  var issInitObj = buildIssInitObject(opts, issOpts);
  $SearchJS.declare("canCreateAutocomplete", issInitObj);
} // END initializeAutocomplete
  function initSearchCsl(searchCSL, issInitObject) {
  searchCSL.init(
    opts.pageType,
    (window.ue && window.ue.rid) || opts.requestId
  );
  $SearchJS.declare("canCreateAutocomplete", issInitObject);
} // END initSearchCsl
  function createAutocomplete(issObject) {
  iss = new AutoComplete(issObject);

  $SearchJS.publish("search-js-autocomplete", iss);

  logMetrics();
} // END createAutocomplete
  function buildIssInitObject(opts, issOpts, isNewIss) {
    var issInitObj = {
        src: opts.host
      , sessionId: opts.sessionId
      , requestId: opts.requestId
      , mkt: opts.marketId
      , obfMkt: opts.obfuscatedMarketId
      , pageType: opts.pageType
      , language: opts.language
      , customerId: opts.customerId
      , fresh: opts.fresh
      , b2b: opts.b2b
      , aliases: opts.searchAliases
      , fb: issOpts.fallbackFlag
      , isDigitalFeaturesEnabled: issOpts.isDigitalFeaturesEnabled
      , isWayfindingEnabled: issOpts.isWayfindingEnabled
      , issPrimeEligible: issOpts.issPrimeEligible
      , deptText: issOpts.departmentText
      , sugText: issOpts.suggestionText
      , filterAliases: opts.filterAliases
      , biaWidgetUrl: opts.biaWidgetUrl
      , recentSearchesTreatment: issOpts.recentSearchesTreatment
      , authorSuggestionText: issOpts.authorSuggestionText
      , translatedStringsMap: issOpts.translatedStringsMap
      , biaTitleText: ""
      , biaPurchasedText: ""
      , biaViewAllText: ""
      , biaViewAllManageText: ""
      , biaAndText: ""
      , biaManageText: ""
      , biaWeblabTreatment: ""
      , issNavConfig: issOpts.issNavConfig
      , cf: issOpts.cf
      , ime: opts.isJpOrCn
      , mktid: opts.marketId
      , qs: opts.isJpOrCn
      , issCorpus: issOpts.issCorpus
      , deepNodeISS: {
          searchAliasAccessor: function($) {
            return (window.SearchPageAccess && window.SearchPageAccess.searchAlias()) ||
                   $('select.searchSelect').children().attr('data-root-alias');
          },
          searchAliasDisplayNameAccessor: function() {
            return (window.SearchPageAccess && window.SearchPageAccess.searchAliasDisplayName());
          }
        }
      , removeDeepNodeISS: issOpts.removeDeepNodeISS
      , trendingTreatment: issOpts.trendingTreatment
      , useAPIV2: issOpts.useAPIV2
      , opfSwitch: issOpts.opfSwitch
      , isISSDesktopRefactorEnabled: issOpts.isISSDesktopRefactorEnabled
      , useServiceHighlighting: issOpts.useServiceHighlighting
      , isInternal: issOpts.isInternal
      , isAPICachingDisabled: issOpts.isAPICachingDisabled
      , isBrowseNodeScopingEnabled: issOpts.isBrowseNodeScopingEnabled
      , isStorefrontTemplateEnabled: issOpts.isStorefrontTemplateEnabled
      , disableAutocompleteOnFocus: issOpts.disableAutocompleteOnFocus
      , asin: opts.asin
    };
  
    // If we aren't using the new ISS then we need to add these properties
    
    if (!isNewIss) {
      issInitObj.dd = issOpts.dropdown; // The element with id searchDropdownBox doesn't exist in C.
      issInitObj.imeSpacing = issOpts.imeSpacing;
      issInitObj.isNavInline = 1;
      issInitObj.triggerISSOnClick = 0;
      issInitObj.sc = 1;
      issInitObj.np = issOpts.np;
    }
  
    return issInitObj;
  } // END buildIssInitObject
  function logMetrics() {
  if (typeof uet == 'function' && typeof uex == 'function') {
      uet('be', 'iss-init-pc',
          {
              wb: 1
          });
      uex('ld', 'iss-init-pc',
          {
              wb: 1
          });
  }
} // END logMetrics
  
    
window.$Nav && $Nav.declare('config.navDeviceType','desktop');

window.$Nav && $Nav.declare('config.navDebugHighres',false);

window.$Nav && $Nav.declare('config.pageType','Gateway');
window.$Nav && $Nav.declare('config.subPageType','desktop');

window.$Nav && $Nav.declare('config.dynamicMenuUrl','\x2Fgp\x2Fnavigation\x2Fajax\x2Fdynamic\x2Dmenu.html');

window.$Nav && $Nav.declare('config.dismissNotificationUrl','\x2Fgp\x2Fnavigation\x2Fajax\x2Fdismissnotification.html');

window.$Nav && $Nav.declare('config.enableDynamicMenus',true);

window.$Nav && $Nav.declare('config.isInternal',false);

window.$Nav && $Nav.declare('config.isBackup',false);

window.$Nav && $Nav.declare('config.isRecognized',false);

window.$Nav && $Nav.declare('config.transientFlyoutTrigger','\x23nav\x2Dtransient\x2Dflyout\x2Dtrigger');

window.$Nav && $Nav.declare('config.subnavFlyoutUrl','\x2Fgp\x2Fnavigation\x2Fajax\x2Fgeneric.html');
window.$Nav && $Nav.declare('config.isSubnavFlyoutMigrationEnabled',true);

window.$Nav && $Nav.declare('config.recordEvUrl','\x2Fgp\x2Fnavigation\x2Fajax\x2Frecordevent.html');
window.$Nav && $Nav.declare('config.recordEvInterval',15000);
window.$Nav && $Nav.declare('config.sessionId','145\x2D4809851\x2D7255046');
window.$Nav && $Nav.declare('config.requestId','RPMD2661EX7TAS7A7TGR');

window.$Nav && $Nav.declare('config.alexaListEnabled',true);

window.$Nav && $Nav.declare('config.readyOnATF',true);

window.$Nav && $Nav.declare('config.dynamicMenuArgs',{"rid":"RPMD2661EX7TAS7A7TGR","isFullWidthPrime":0,"isPrime":0,"dynamicRequest":1,"weblabs":"","isFreshRegionAndCustomer":"","primeMenuWidth":310});

window.$Nav && $Nav.declare('config.customerName',false);

window.$Nav && $Nav.declare('config.customerCountryCode','JP');

window.$Nav && $Nav.declare('config.hmenuAjaxIncludeCustomerCountryCode',false);

window.$Nav && $Nav.declare('config.yourAccountPrimeURL',null);

window.$Nav && $Nav.declare('config.yourAccountPrimeHover',true);

window.$Nav && $Nav.declare('config.searchBackState',{});

window.$Nav && $Nav.declare('nav.inline');

(function (i) {
  if(window._navbarSpriteUrl) {
    i.onload = function() {window.uet && uet('ne')};
    i.src = window._navbarSpriteUrl;
  }
}(new Image()));

window.$Nav && $Nav.declare('config.autoFocus',false);

window.$Nav && $Nav.declare('config.responsiveTouchAgents',["ieTouch"]);

window.$Nav && $Nav.declare('config.responsiveGW',true);

window.$Nav && $Nav.declare('config.pageHideEnabled',false);

window.$Nav && $Nav.declare('config.sslTriggerType','pageReady');
window.$Nav && $Nav.declare('config.sslTriggerRetry',0);

window.$Nav && $Nav.declare('config.doubleCart',false);

window.$Nav && $Nav.declare('config.signInOverride',true);

window.$Nav && $Nav.declare('config.signInTooltip',true);

window.$Nav && $Nav.declare('config.isPrimeMember',false);

window.$Nav && $Nav.declare('config.packardGlowTooltip',false);

window.$Nav && $Nav.declare('config.packardGlowFlyout',false);

window.$Nav && $Nav.declare('config.rightMarginAlignEnabled',true);

window.$Nav && $Nav.declare('config.flyoutAnimation',false);

window.$Nav && $Nav.declare('config.campusActivation','null');

window.$Nav && $Nav.declare('config.primeTooltip',false);

window.$Nav && $Nav.declare('config.primeDay',false);

window.$Nav && $Nav.declare('config.disableBuyItAgain',false);

window.$Nav && $Nav.declare('config.enableCrossShopBiaFlyout',false);

window.$Nav && $Nav.declare('config.pseudoPrimeFirstBrowse',null);

window.$Nav && $Nav.declare('config.sdaYourAccount',false);

window.$Nav && $Nav.declare('config.csYourAccount',{"url":"/gp/youraccount/navigation/sidepanel"});

window.$Nav && $Nav.declare('config.cartFlyoutDisabled',true);

window.$Nav && $Nav.declare('config.isTabletBrowser',false);

window.$Nav && $Nav.declare('config.HmenuProximityArea',[200,200,200,200]);

window.$Nav && $Nav.declare('config.HMenuIsProximity',true);

window.$Nav && $Nav.declare('config.isPureAjaxALF',false);

window.$Nav && $Nav.declare('config.accountListFlyoutRedesign',false);

window.$Nav && $Nav.declare('config.navfresh',false);

window.$Nav && $Nav.declare('config.isFreshRegion',false);

if (window.ue && ue.tag) { ue.tag('navbar'); };

window.$Nav && $Nav.declare('config.blackbelt',true);

window.$Nav && $Nav.declare('config.beaconbelt',true);

window.$Nav && $Nav.declare('config.accountList',true);

window.$Nav && $Nav.declare('config.iPadTablet',false);

window.$Nav && $Nav.declare('config.searchapiEndpoint',false);

window.$Nav && $Nav.declare('config.timeline',false);

window.$Nav && $Nav.declare('config.timelineAsinPriceEnabled',false);

window.$Nav && $Nav.declare('config.timelineDeleteEnabled',false);



window.$Nav && $Nav.declare('config.extendedFlyout',false);

window.$Nav && $Nav.declare('config.flyoutCloseDelay',600);

window.$Nav && $Nav.declare('config.pssFlag',0);

window.$Nav && $Nav.declare('config.isPrimeTooltipMigrated',false);

window.$Nav && $Nav.declare('config.isDynamicWishListMigrationEnabled',true);

window.$Nav && $Nav.declare('config.hashCustomerAndSessionId','310ef129250f7f7cdb8332336752a19d53f2fcc1');

window.$Nav && $Nav.declare('config.isExportMode',true);

window.$Nav && $Nav.declare('config.languageCode','en_US');

window.$Nav && $Nav.declare('config.environmentVFI','AmazonNavigationCards\x2Fdevelopment\x40B6103368395\x2DAL2_x86_64');



window.$Nav && $Nav.declare('config.isHMenuBrowserCacheDisable',false);

window.$Nav && $Nav.declare('config.signInUrlWithRefTag','https\x3A\x2F\x2Fwww.amazon.com\x2Fap\x2Fsignin\x3Fopenid.pape.max_auth_age\x3D0\x26openid.return_to\x3Dhttps\x253A\x252F\x252Fwww.amazon.com\x252F\x253F_encoding\x253DUTF8\x2526ref_\x253DnavSignInUrlRefTagPlaceHolder\x26openid.identity\x3Dhttp\x253A\x252F\x252Fspecs.openid.net\x252Fauth\x252F2.0\x252Fidentifier_select\x26openid.assoc_handle\x3Dusflex\x26openid.mode\x3Dcheckid_setup\x26openid.claimed_id\x3Dhttp\x253A\x252F\x252Fspecs.openid.net\x252Fauth\x252F2.0\x252Fidentifier_select\x26openid.ns\x3Dhttp\x253A\x252F\x252Fspecs.openid.net\x252Fauth\x252F2.0\x26');

window.$Nav && $Nav.declare('config.isSmile',false);

window.$Nav && $Nav.declare('config.regionalStores',[]);

window.$Nav && $Nav.declare('config.isALFRedesignPT2',true);

window.$Nav && $Nav.declare('config.isNavALFRegistryGiftList',false);

window.$Nav && $Nav.declare('config.marketplaceId','ATVPDKIKX0DER');

window.$Nav && $Nav.declare('config.exportTransitionState','in');

window.$Nav && $Nav.declare('config.enableAeeXopFlyout',false);

window.$Nav && $Nav.declare('config.isPrimeFlyoutMigrationEnabled',false);

window.$Nav && $Nav.declare('config.isAjaxMigrated',true);

if (window.P && typeof window.P.declare === "function" && typeof window.P.now === "function") {
  window.P.now('packardGlowIngressJsEnabled').execute(function(glowEnabled) {
    if (!glowEnabled) {
      window.P.declare('packardGlowIngressJsEnabled', true);
    }
  });
  window.P.now('packardGlowStoreName').execute(function(storeName) {
    if (!storeName) {
      window.P.declare('packardGlowStoreName','generic');
    }
  });
}

window.$Nav && $Nav.declare('configComplete');

    -->
