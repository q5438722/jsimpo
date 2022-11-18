
    var amateurUserFlag                     = 0,
        changing_thumbs                     = [],
        disableFlipbook                     = 'false',
        largeVersionMinimumScreenSize       = 1900,
        isLarge                         = false,
        screensize                      = window.screen.width,
        isLogged                        = 0,
        pageKeyStat                     = "homepage",
        platformPcSet                   = 1,
        focusSearchInput                = 1, // Variable used in Header.js, related to search & autocomplete
        isGay                           = "0",
        searchUrlVideo                  = "/video/search?search=",
        searchUrlPhoto                  = "/albums/female-straight-uncategorized?search=",
        searchUrlMember                 = "/user/search?gender=0&username=",
        searchUrlPornstar               = "/pornstars/search?search=",
        searchUrlGifs                   = "/gifs/search?search=",
        searchUrlCam                    = '/live?k=',
        messageViewAll                  = "/chat/index", // variables used in "phub.js", related to notification
        notifViewAll                    = "/notifications",
        emailNotConfirmed               = "Email not confirmed yet!",
        accountDisabled                 = "Account disabled. Please try again later.",
        loginError                      = "Invalid username/password!",
        error513                        = "Error 513.",
        error514                        = "Error 514.",
        error515                        = "Error 515.",
        errorNoUsername                 = "Please enter your username below:",
        errorNoPassword                 = "Please enter your password below:",
        adOrientation                   = "straight",
        category                        = "",
        showStreamate                   = "1",         premiumFlag                     = "0",
        phOrientationSegment            = "straight",
        phCountryCode                   = "JP",
        playlistJs                      = "https://di.phncdn.com/www-static/js//playlist/playlist-basic.js?cache=2022111702",
        token                           = "MTY2ODc3NTI5MrXCpfGSo9pM1nluxcateQxiOWc0mxAgzLPwbgLcYD_EwmOOO8vnH6zB-FtD-UGg8x3XMthVcWb1q4Ec3iN-lgw.";
            var playlists       = "",
        watchLaterFull      = "";
        var bannedWordsCheckUrl = "/check/has_forbidden_words";
            var requestViewAll = "/user/friend_requests";
    
            isLarge = true;
    
    var premiumRedirectCookieURL = '//www.pornhub.com/user/premium_redirect_cookie?ajax=1';

    
            var playlistUpdateUrl = "/playlist/update",
            playlistUpdateUrlWatchlater = "/playlist/update_watchlater",
            playlistCreateUrl = "/playlist/create",
            playlistRateUrl = "/playlist/rate",
            playlistFavouriteAddUrl = "/playlist/favourite_add",
            playlistFavouriteRemoveUrl = "/playlist/favourite_remove",
            playlistCreateUrl = "/playlist/create",
            removeAllVideosFromPlaylist = "/playlist/playlist_empty",
            removeAllVideosFromWatchlater = "/playlist/playlist_empty_watchlater",
            removeAllVideosFromLovers = "/playlist/playlist_empty_lovers",
            removeVideoFromCustomPlaylist = "/playlist/video_remove",
            removeVideoFromWatchlater = "/playlist/video_remove_watchlater",
            removeVideoFromLovers = "/playlist/video_remove_lovers",
            playlistCustomAddUrl = "/playlist/video_add",
            playlistWatchlaterAddUrl = "/playlist/video_add_watchlater",
            playlistLoversAddUrl = "/playlist/video_add_lovers",
            copyWatchlater = "/playlist/copy_watchlater",
            copyLovers = "/playlist/copy_lovers_playlist";
    
    // Mixpanel Object fro Premium Only
    var mixPanelObj = {
        isPremium : 0    };

    function onLoad() {
        var site = 'pornhub';
        if (!window.jQuery) {
            try {
                var a = new XMLHttpRequest();

                a.open("GET", "//www.etahub.com/trackn?app_id=10305&product_name=" + site + "&category=ss&value=1", true);
                a.send();
            } catch(e) {

            }
        }
    }

    var modalTranslationText = {"okButton":"OK","confirmEmail":"Please confirm your email to be able to add users as friends","cannotAdd":"You cannot friend a private member.","cannotSubscribe":"You cannot subscribe to a private member.","blackWhiteListUrl":"\/utils\/url_status"};

        var videoTimeTrackingCondition 	= 0;
    var playlistViewCountCondition 	= 0;
    var reportTimeWatchedUrl = '';

    
        var networkSegement = false;
        var	networkQuery = '@media only screen and (min-width: 1350px) { div.bar_items { width:1303px;} } ';
    
    var timing_appId = 16,
        timing_productId = 2,
        timing_pageType = 'home';
        var page_params = {
        getMenuType: '',
        jqeuryVersion : '',
        isIE7 : false,
        isIE : ( !!window.ActiveXObject && +( /msie\s(\d+)/i.exec( navigator.userAgent )[1] )) || !!navigator.userAgent.match(/rv:11/) || false,
        isOldIE : (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || !!navigator.userAgent.match(/MSIE 10/)) || false,
        loadOnce: false,
        prerollFired: false
    };

    //SET UP TO lazy_load-1.0.1.js
    page_params.lazyLoad = {
        dataSrc : 'src',//data-src attribute in image
        class_name : 'lazy', //Class name to locate the image to lazy load LEAVE THE UNDERSCORE "_"
        dataBkg : 'bkg', //Data attribute to lazy load background image
        classBkg : 'js_lazy_bkg', //Class to locate the tag which need background lazy load
        thumbUrl : 'thumb_url', //Data attribute to lazy load thumbnails in a section
        sections : [] //Array to push the sections to lazy load
    };

    page_params.zoneDetails = {};

        var globalObjUtils = {
        'isXbox' 	: navigator.userAgent.match(/xbox/i) != null,
        'isTablet' 	: 0,
        'isMac'	 : navigator.userAgent.indexOf('Mac OS X') != -1,
        'isSafari'  : (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)
    };

        var playerObjList = {};

    
    