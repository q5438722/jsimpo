
    var pagePath = '\/content\/offers\u002Dhomepage\/us\/en\/index\/loggedout\/longform\u002D11\u002D13\u002D22\u002Dblack\u002Dfriday\u002D72920\/jcr:content';
    var loggedinExperience = pagePath.indexOf('loggedin') > 0;
    var localeRoot = dexter.geoRouting.localeMap && dexter.geoRouting.localeMap.locales[dexter.geoRouting.localeMap.currentLocale].root || '/';
    var cookieBasedRedirect = 'true' === 'true';
    var redirectTargetUrl = cookieBasedRedirect ? localeRoot : localeRoot + 'index2.html';
    var ACOM_SIGNED_IN_STATUS = 'acomsis';
    var acomsisCookie = document.cookie.match(new RegExp(ACOM_SIGNED_IN_STATUS));
    var skipRedirection = window.location.pathname.indexOf("/content/offers-homepage") != -1 ||
        window.location.pathname.indexOf("index.loggedin.html") != -1 ||
        window.location.pathname.indexOf("index.loggedout.html") != -1;
    window.feds = window.feds || {};
    window.feds.utilities = window.feds.utilities || {};
    var imslib = window.feds.utilities.imslib;

    if (loggedinExperience && !acomsisCookie) addCookieAndReload();
    if (!loggedinExperience && acomsisCookie) removeCookieAndReload();
    window.removeBodyHiding = true;

    var adobeid = {
        env: '//ims-na1.adobelogin.com',
        environment: 'prod',
        jumpToken: {
            api: '/ims/jumptoken/v1',
        },
        client_id: 'adobedotcom2',
        scope: 'AdobeID,openid,gnav,read_organizations,additional_info.projectedProductContext,additional_info.roles',
        uses_redirect_mode: true,
        locale : 'en_US',
        uses_modal_mode: false,
        api_parameters: {
            authorize: {
                state: {
                    ac: '',
                }
            }
        },
        optimizations: {
            fastEvents: true
        },
        autoValidateToken: true,
        onAccessToken: function (info) {
            // cancel redirection to logged-in homepage
            if (document.location.hash === "#noredirect" || typeof CQ !== "undefined") return;
            var expires = Date.parse(info.expire);
            var validSession = info && (expires > 0) && (Date.now() < expires);

            if (!validSession || skipRedirection) return;

            if (cookieBasedRedirect && !acomsisCookie) {
                window.removeBodyHiding = false;
                addCookieAndReload();
            } else if (!cookieBasedRedirect && window.location.pathname !== redirectTargetUrl) {
                window.removeBodyHiding = false;
                window.location.assign(adobeid.redirect_uri);
            }
        },
        onReady: function () {
            setTimeout(function () {
                var isNotSignedIn = imslib && !imslib.isSignedInUser();

                if (isNotSignedIn && cookieBasedRedirect && acomsisCookie) removeCookieAndReload();

                if (isNotSignedIn && !cookieBasedRedirect && window.location.pathname === redirectTargetUrl) {
                    window.location.assign(localeRoot);
                } else {
                    window.dispatchEvent(new Event('dexter:IMSReady'));
                    var imsBodyStyle = document.getElementById('ims-body-style');
                    if (window.removeBodyHiding && imsBodyStyle && imsBodyStyle.parentNode) {
                        imsBodyStyle.parentNode.removeChild(imsBodyStyle);
                    }
                }
            }, 1);
        }
    };

    function removeCookieAndReload() {
        document.cookie = ACOM_SIGNED_IN_STATUS + '=;path=/;expires=' + new Date(0).toUTCString() + ';';
        if (!skipRedirection) {
            window.location.reload();
        }
    }

    function addCookieAndReload() {
        var date = new Date();
        date.setTime(date.getTime() + (365*24*60*60*1000));
        document.cookie = ACOM_SIGNED_IN_STATUS + '=1;path=/;expires='+ date.toUTCString() + ';';
        if (!skipRedirection) {
            window.location.reload();
        }
    }

    if (false) {
        adobeid.redirect_uri = window.location.href;
    } else {
        adobeid.redirect_uri = window.location.origin + redirectTargetUrl;
    }
