
var rtlLangs = ['ar','arc','ary','arz','bcc','bgn','bqi','ckb','dv','fa','glk','he','kk-cn','kk-arab','khw','ks','ku-arab','lki','luz','mzn','nqo','pnb','ps','sd','sdh','skr','ug','ur','yi'],
    translationsHash = '52a27839',
    /**
     * This variable is used to convert the generic "portal" keyword in the data-jsl10n attributes
     * e.g. 'data-jsl10n="portal.footer-description"' into a portal-specific key, e.g. "wiki"
     * for the Wikipedia portal.
     */
    translationsPortalKey = 'wiki';
    /**
     * The wm-typeahead.js feature is used for search,and it uses domain name for searching. We want domain
     * name to be portal Specific (different for every portal).So by declaring variable 'portalSearchDomain'
     * in index.handlebars we will make this portal Specific.
    **/
    portalSearchDomain = 'wikipedia.org'
    /*
     This object is used by l10n scripts (page-localized.js, topten-localized.js)
     to reveal the page content after l10n json is loaded.
     A timer is also set to prevent JS from hiding page content indefinitelty.
     This script is inlined to safeguard againt script loading errors and placed
     at the top of the page to safeguard against any HTML loading/parsing errors.
    */
    wmL10nVisible = {
        ready: false,
        makeVisible: function(){
            if ( !wmL10nVisible.ready ) {
                wmL10nVisible.ready = true;
                document.body.className += ' jsl10n-visible';
            }
        }
    };
    window.setTimeout( wmL10nVisible.makeVisible, 1000 )
