
	( function() {
		'use strict';

		var setupAnalytics = function() {
			var $ = window.jQuery;
			if ( ! $ || $.fn.scrollDepth ) return;

			!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(f){"use strict";var i,a,c,p,g,e={minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0,nonInteraction:!0,gaGlobal:!1,gtmOverride:!1,trackerName:!1,dataLayer:"dataLayer"},m=f(window),d=[],D=!1,h=0;return f.scrollDepth=function(u){var s=+new Date;function v(e,n,t,o){var r=u.trackerName?u.trackerName+".send":"send";g?(g({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:e,eventLabel:n,eventValue:1,eventNonInteraction:u.nonInteraction}),u.pixelDepth&&2<arguments.length&&h<t&&g({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:"Pixel Depth",eventLabel:l(h=t),eventValue:1,eventNonInteraction:u.nonInteraction}),u.userTiming&&3<arguments.length&&g({event:"ScrollTiming",eventCategory:"Scroll Depth",eventAction:e,eventLabel:n,eventTiming:o})):p?(gtag("event",e,{event_category:"Scroll Depth",event_label:n,value:1,non_interaction:u.nonInteraction}),u.pixelDepth&&2<arguments.length&&h<t&&(h=t,gtag("event","Pixel Depth",{event_category:"Scroll Depth",event_label:l(t),value:1,non_interaction:u.nonInteraction})),u.userTiming&&3<arguments.length&&gtag("event","timing_complete",{event_category:"Scroll Depth",name:e,event_label:n,value:o})):(i&&(window[c](r,"event","Scroll Depth",e,n,1,{nonInteraction:u.nonInteraction}),u.pixelDepth&&2<arguments.length&&h<t&&(h=t,window[c](r,"event","Scroll Depth","Pixel Depth",l(t),1,{nonInteraction:u.nonInteraction})),u.userTiming&&3<arguments.length&&window[c](r,"timing","Scroll Depth",e,o,n)),a&&(_gaq.push(["_trackEvent","Scroll Depth",e,n,1,u.nonInteraction]),u.pixelDepth&&2<arguments.length&&h<t&&(h=t,_gaq.push(["_trackEvent","Scroll Depth","Pixel Depth",l(t),1,u.nonInteraction])),u.userTiming&&3<arguments.length&&_gaq.push(["_trackTiming","Scroll Depth",e,o,n,100])))}function l(e){return(250*Math.floor(e/250)).toString()}function n(){function t(){p=new Date,c=null,a=o.apply(l,i)}var o,r,l,i,a,c,p;D=!0,m.on("scroll.scrollDepth",(o=function(){var e,n,t,o,r,l,i,a=f(document).height(),c=window.innerHeight?window.innerHeight:m.height(),p=m.scrollTop()+c,g=(e=a,{"25%":parseInt(.25*e,10),"50%":parseInt(.5*e,10),"75%":parseInt(.75*e,10),"100%":e-5}),h=new Date-s;if(d.length>=u.elements.length+(u.percentage?4:0))return m.off("scroll.scrollDepth"),void(D=!1);u.elements&&(n=u.elements,t=p,o=h,f.each(n,function(e,n){-1===f.inArray(n,d)&&f(n).length&&t>=f(n).offset().top&&(v("Elements",n,t,o),d.push(n))})),u.percentage&&(r=g,l=p,i=h,f.each(r,function(e,n){-1===f.inArray(e,d)&&n<=l&&(v("Percentage",e,l,i),d.push(e))}))},r=500,c=null,p=0,function(){var e=new Date,n=r-(e-(p=p||e));return l=this,i=arguments,n<=0?(clearTimeout(c),c=null,p=e,a=o.apply(l,i)):c=c||setTimeout(t,n),a}))}u=f.extend({},e,u),f(document).height()<u.minHeight||(u.gaGlobal?(i=!0,c=u.gaGlobal):"function"==typeof gtag?(p=!0,c="gtag"):"function"==typeof ga?(i=!0,c="ga"):"function"==typeof __gaTracker&&(i=!0,c="__gaTracker"),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(a=!0),"function"==typeof u.eventHandler?g=u.eventHandler:void 0===window[u.dataLayer]||"function"!=typeof window[u.dataLayer].push||u.gtmOverride||(g=function(e){window[u.dataLayer].push(e)}),f.scrollDepth.reset=function(){d=[],h=0,m.off("scroll.scrollDepth"),n()},f.scrollDepth.addElements=function(e){void 0!==e&&f.isArray(e)&&(f.merge(u.elements,e),D||n())},f.scrollDepth.removeElements=function(e){void 0!==e&&f.isArray(e)&&f.each(e,function(e,n){var t=f.inArray(n,u.elements),o=f.inArray(n,d);-1!=t&&u.elements.splice(t,1),-1!=o&&d.splice(o,1)})},n())},f.scrollDepth});

			var $document = $( window.document );

			function getCurrentPagePath() {
				return window.location.pathname.replace( /^\/|\/$/g, '' );
			}

			function getCurrentPageName() {
				return getCurrentPagePath().replace( getLocaleInPagePathRegExp(), '' );
			}

			function getCurrentPageLocale() {
				var m = getLocaleInPagePathRegExp().exec( getCurrentPagePath() );
				return m !== null && 2 === m.length ? m[1] : '';
			}

			function getLocaleInPagePathRegExp() {
				return /^(af|als|am|an|ar|arc|as|ast|av|ay|az|ba|bel|bg|bm|bn|bo|br|bs|ca|ce|ckb|cs|csb|cv|cy|da|de|dv|dz|el|el\-po|en|en\-gb|eo|es|es\-mx|et|eu|fa|fi|fo|fr|fr\-be|fr\-ca|fr\-ch|fur|fy|ga|gd|gl|gn|gu|he|hi|hr|hu|hy|ia|id|ii|ilo|is|it|ja|ka|kir|km|kn|ko|kk|ks|kv|la|li|lo|lv|lt|mk|ml|mwl|mn|mr|ms|mya|nah|nap|ne|nds|nl|nn|nb|non|nv|oci|or|os|pa|pl|ps|pt|pt\-br|qu|ro|ru|rup|sc|si|sk|skr|sl|snd|so|sq|sr|su|sv|ta|te|th|tl|tir|tr|tt|ty|udm|ug|uk|ur|uz|vec|vi|wa|xal|yi|yo|za|zh\-cn|zh\-tw)(?:\/|$)/;
			}

			function getWPCOMAnalyticsDefaultConfig() {
				return {
					// Current page props.
					currentPagePath: getCurrentPagePath(),
					currentPageName: getCurrentPageName(),
					currentPageLocale: getCurrentPageLocale(),

					// Page variation props.
					pageVariation: '',
					pagePersonalVariation: '',

					// Current user props.
					currentUserIdHash: "",
					currentUserIdHashShort: "",
					currentUserEmailHash: "",

					// Other misc. props.
					isHomepage: true,
					affiliateJSVersion: "1557961113",
				}
			}

			$document.on( 'a8c-analytics:loaded', function() {
				var cb = window.a8cAnalytics.cb,
					kit = window.a8cAnalytics.kit;

				var gaOptimize = window.a8cGAOptimize || undefined;
				var ssGAOptimizeExpId, ssGAOptimizeExpVar, ssGAOptimizeExp;
				var ssGAOptimize = window.a8cAnalyticsConfig.ssGAOptimize || undefined;
				gaOptimize = gaOptimize && gaOptimize.isEnabled() ? gaOptimize : undefined;

				if ( ssGAOptimize ) { // Server-side GO tests.
					ssGAOptimizeExpId = ssGAOptimize ? ssGAOptimize.experimentId : '';
					ssGAOptimizeExpVar = ssGAOptimize ? kit.getSSGAOptimizeVariationId( ssGAOptimize.experimentId ) : '';
					ssGAOptimizeExp = ssGAOptimize ? ssGAOptimizeExpId + '.' + ssGAOptimizeExpVar : '';
				}

				var config = getWPCOMAnalyticsDefaultConfig();
				var configOptions = window.a8cAnalyticsConfig.fireAnalyticsOptions;
				$.extend( config, configOptions ); // Extend base config w/ config options.

				// Back compat. for special `lpName` values.
				config.currentPageName = ! configOptions.currentPageName && 'logged-out-homepage' === configOptions.lpName ? configOptions.lpName : config.currentPageName;
				config.currentPageName = ! configOptions.currentPageName && 'logged-out-app-promo' === configOptions.lpName ? configOptions.lpName : config.currentPageName;

				// Back compat. for `lpVariation` and `lpPersonalVariation` config properties.
				config.pageVariation = ! configOptions.pageVariation && configOptions.lpVariation ? configOptions.lpVariation : config.pageVariation;
				config.pagePersonalVariation = ! configOptions.pagePersonalVariation && configOptions.lpPersonalVariation ? configOptions.lpPersonalVariation : config.pagePersonalVariation;

				function fireTracks() {
					var props = $.extend( {}, kit.getQueryVars( '', kit.QUERY_PARAMS ), {
						// Page props.
						path: config.currentPagePath,
						name: config.currentPageName,
						locale: config.currentPageLocale,
						variation: config.pageVariation,
						personal_variation: config.pagePersonalVariation,

						// Back compat. LP props.
						lp_name: config.currentPageName,
						lp_variation: config.pageVariation,
						lp_personal_variation: config.pagePersonalVariation,
					} );
					window._tkq.push( [ 'recordEvent', 'wpcom_page_view', props ] );
				}

				function fireAffiliateReferrals() {
					kit.attachScriptElement( 'https://s1.wp.com/wp-content/themes/h4/landing/marketing/js/affiliate-referrals.js?v=' + config.affiliateJSVersion );
				}

				function fireCurrencyHandlers() {
					var currency = kit.getQueryVar( 'currency' ) || '';

					if ( ! currency && 'amex-business-in' === config.currentPageName ) {
						currency = 'USD'; // Special case for this LP.
					}
					if ( currency ) {
						kit.docCookies.setItem( 'landingpage_currency', currency, 31536000, '/', '.rootDomain' );
					}
				}

				function loadGoogleAdsGtag() {
					kit.loadGtag( 'AW-946162814' );
				}

				function fireGoogleAnalyticsFour() {
					var gtagOptions = {
						'anonymize_ip': true,
						'use_amp_client_id': true
					};

					kit.loadGtag( 'G-1H4VG5F5JF', gtagOptions );
				}

				function fireGoogleAnalytics() {
					kit.loadGoogleAnalytics();
					ga( 'create', 'UA-10673494-10', 'auto' );

					ga( 'set', 'transport', 'function' === typeof navigator.sendBeacon ? 'beacon' : 'xhr' );
					ga( 'set', 'anonymizeIp', true );
					ga( 'set', 'useAmpClientId', true );

					
					ga( 'set', 'dimension1', config.currentPageName );
					ga( 'set', 'dimension2', config.pageVariation );

					ga( function( tracker ) {
						var clientId = tracker.get('clientId');
						ga( 'set', 'dimension3', clientId );
					} );

					if ( ssGAOptimize ) { // Server-side GO tests.
						window._tkq.push( [ 'recordEvent', 'wpcom_gaexp_start', {
							// Page props.
							path: config.currentPagePath,
							name: config.currentPageName,
							locale: config.currentPageLocale,
							variation: config.pageVariation,
							personal_variation: config.pagePersonalVariation,

							// Back compat. LP props.
							lp_name: config.currentPageName,
							lp_variation: config.pageVariation,
							lp_personal_variation: config.pagePersonalVariation,

							// Experiment props.
							experiment_id: ssGAOptimizeExpId,
							variation_id: ssGAOptimizeExpVar,
						} ] );
						ga( 'set', 'exp', ssGAOptimizeExp );
					} else if ( gaOptimize ) {
						ga( 'require', gaOptimize.config.id );
					}

					ga( 'send', 'pageview' );

					if ( ! ssGAOptimize && gaOptimize ) {
						gaOptimize.a8cAnalyticsSetup( cb, kit, config );
					}
				}

				function fireFacebook() {
					kit.loadFacebook();
					fbq( 'init', '823166884443641' );
					fbq( 'track', 'PageView' );
				}

				function fireBing() {
					(function( w, d, t, r, u ) {
						var f, n, i;
						w[ u ] = w[ u ] || [], f = function() {
							var o = { ti: "4074038" };
							o.q = w[ u ], w[ u ] = new UET( o ), w[ u ].push( "pageLoad" )
						}, n = d.createElement( t ), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function() {
							var s = this.readyState;
							s && s !== "loaded" && s !== "complete" || ( f(), n.onload = n.onreadystatechange = null )
						}, i = d.getElementsByTagName( t )[ 0 ], i.parentNode.insertBefore( n, i )
					} )( window, document, "script", "//bat.bing.com/bat.js", "uetq" );
				}

				function setupTracksGAScrollTracking() {
					$.scrollDepth( {
						percentage: true,
						userTiming: false,
						pixelDepth: false,
						nonInteraction: true,
						gtmOverride: false,
						eventHandler: function( e ) {
							var props = {
								percent: e.eventLabel, // e.g., 25%
							};

														props.path = config.currentPagePath || '';
							props.name = config.currentPageName || '';
							props.locale = config.currentPageLocale || '';
							props.variation = config.pageVariation || '';
							props.personal_variation = config.pagePersonalVariation || '';

														props.lp_name = config.currentPageName || '';
							props.lp_variation = config.pageVariation || '';
							props.lp_personal_variation = config.pagePersonalVariation || '';

														$.extend( props, kit.getQueryVars( '', kit.QUERY_PARAMS ) );

														window._tkq.push( [ 'recordEvent', 'wpcom_page_scroll', props ] );

							if ( window.ga ) { // Contingent upon GDPR cookie banner consent in some cases.
								window.ga( 'send', 'event', e.eventCategory, 'wpcom_page_scroll', e.eventLabel, e.eventValue, { nonInteraction: e.eventNonInteraction } );
							}
						},
					} );
				}

				function setupTracksGAClickTracking() {
					$( 'body' ).on( 'click', 'a, button, .click-tracking-enable', function( event ) {
						var $this = jQuery(this);
						var props = {};

												var sections = '.wpcom-masterbar.wpcom-header, .lpc, .lp-module, section, .post, article';
						var containers = '.wpcom-masterbar.wpcom-header, .lpc, .lp-module, section, .post, article';

												var $section = $this.parents( containers ).last();
						props.section_id = $.trim( $section.attr( 'id' ) || '' );
						props.section_class = $.trim( $section.attr( 'class' ) || '' );
						props.section = props.section_id || props.section_class || '';

												var $container = $this.closest( containers );
						props.container_id = $.trim( $container.attr( 'id' ) || '' );
						props.container_class = $.trim( $container.attr( 'class' ) || '' );
						props.container = props.container_id || props.container_class || '';

												props.id = $.trim( $this.attr( 'id' ) || '' );
						props.class = $.trim( $this.attr( 'class' ) || '' );

												props.href = $.trim( $this.attr( 'href' ) || '' );
						props.target = $.trim( $this.attr( 'target' ) || '' );
						props.text = $.trim( $this.text() );

												props.path = config.currentPagePath || '';
						props.name = config.currentPageName || '';
						props.locale = config.currentPageLocale || '';
						props.variation = config.pageVariation || '';
						props.personal_variation = config.pagePersonalVariation || '';

												props.lp_name = config.currentPageName || '';
						props.lp_variation = config.pageVariation || '';
						props.lp_personal_variation = config.pagePersonalVariation || '';

												$.extend( props, kit.getQueryVars( '', kit.QUERY_PARAMS ) );

												props.is_cta = $this.hasClass( 'is-cta' );
						props.is_button = $this.hasClass( 'lpc-button' ) || $this.hasClass( 'button' );
						props.is_in_header_nav = $this.hasClass( 'x-nav-link' ) || $this.hasClass( 'x-dropdown-link' ) || $this.hasClass( 'x-menu-link' )
							|| $section.is( '.lpc-header-nav' ) || $section.is( '.wpcom-masterbar.wpcom-header' );

												window._tkq.push( [ 'recordEvent', 'wpcom_link_click', props ] );

						if ( window.ga ) { // Contingent upon GDPR cookie banner consent in some cases.
							window.ga( 'send', 'event', 'Clicks', 'wpcom_link_click', ( props.id ? '#' + props.id + ':' : '' ) + props.href );
						}

																		if ( props.is_in_header_nav || props.is_cta || props.is_button ) {
							if ( props.href && 0 !== props.href.indexOf( '#' ) && -1 !== [ '', '_top', '_self' ].indexOf( props.target ) ) {
								event.preventDefault(); // Allow time for trackers to record the click.

								setTimeout( function() {
									document.location = props.href;
								}, 300 );
							}
						}
					} );
				}

								function setupLocaleChangeTracking() {
					function createLocaleCookie( locale ) {
						var cookieDomain = '.wordpress.com';
						var cookieName   = 'wpcom_locale';

						var date = new Date();
						date.setTime( date.getTime() + ( 5 * 365 * 24 * 60 * 60 * 1000 ) );

						var expires = " expires=" + date.toGMTString();
						document.cookie = cookieName + '=' + locale + ';' + expires +'; path=/; domain=' + cookieDomain;
					}

					function createStatsRequest( locale, href ) {
						var languageChangeStat = new Image();
						languageChangeStat.onload = function() {
							window.location.href = href;
						};

						languageChangeStat.onerror = languageChangeStat.onload;
						languageChangeStat.src     = 'https://pixel.wp.com/g.gif?v=wpcom-no-pv&x_language-switcher=manual-switch-' + locale + '&rm=' + Math.random();
					}

					$( 'body' ).on( 'click', '.lp-language-picker a[lang]', function( event ) {
						event.preventDefault();

						var $el = $( this );
						var code = $el.attr( 'lang' );
						var href = $el.attr( 'href' );

						createLocaleCookie( code );
						createStatsRequest( code, href );
					} );
				}

				
				function trackFacebookWebinarClicks () {
					var facebookPixelURL = 'https://www.facebook.com/tr?id=759053181468957&ev=SubscribedButtonClick&noscript=1';

					$( 'body' ).on( 'click', '.webinar-facebook-click-track', function( event ) {
						var facebookImgPixel = document.createElement( 'img' );
						facebookImgPixel.width = 1;
						facebookImgPixel.height = 1;
						facebookImgPixel.src = facebookPixelURL;

						document.body.appendChild( facebookImgPixel );
					} );
				}

				function applyLinkers() {
					kit.linkQueryVars( [
						{
							includeRegExps: [
								/^(?:[^\/]+\.)?(?:wordpress|jetpack|woocommerce|crowdsignal|wpjobmanager)\.com(?:\/|$)/i,
							],
							linkQueryVars: [
								'aff',
								'affiliate',
								'cid', // Aff campaign ID.
								'sid', // Aff sub ID.
							],
						},
						{
							includeRegExps: [
								/^(?:[^\/]+\.)?(?:wordpress|jetpack)\.com(?:\/|$)/i,
							],
							linkQueryVars: [
								'coupon',
							],
						},
					] );
				}

				// Linkers.

				applyLinkers();

				// Normal pixels.

				if ( kit.doNotTrack() ) {
					if ( gaOptimize ) {
						gaOptimize.endAsyncDim();
					}
					return; // Respect DNT header.
					//
				} else if( gaOptimize && ( false === cb.getOptions().ok || false === cb.getOptions().buckets.analytics ) ) {
					gaOptimize.endAsyncDim(); // Stop dimming Google Optimize. It's not going to run anyway.
				}

				cb.addTracker( 'essential', false, fireCurrencyHandlers );
				cb.addTracker( 'analytics', false, fireTracks );
				cb.addTracker( 'analytics', false, fireAffiliateReferrals );
				cb.addTracker( 'analytics', false, setupTracksGAClickTracking );
				cb.addTracker( 'analytics', false, setupTracksGAScrollTracking );
				cb.addTracker( 'analytics', false, setupLocaleChangeTracking );

				// Sensitive pixels.

				cb.addTracker( 'analytics', true, fireGoogleAnalytics );
				cb.addTracker( 'advertising', true, loadGoogleAdsGtag );
				cb.addTracker( 'advertising', true, fireFacebook );
				cb.addTracker( 'advertising', true, trackFacebookWebinarClicks );	
				cb.addTracker( 'advertising', true, fireBing );
				cb.addTracker( 'analytics', true, fireGoogleAnalyticsFour );
				cb.addTracker( 'advertising', true, function() { kit.fireHotjar( 227769 ); } );

				// Maybe fire trackers now, via cookie banner.

				cb.maybeFireTrackers();
			} );
		};

		if ( window.defQueue && defQueue.isLOHP && defQueue.isLOHP === 2020 ) {
			defQueue.items.push( setupAnalytics );
		} else {
			setupAnalytics();
		}
	} )();
	