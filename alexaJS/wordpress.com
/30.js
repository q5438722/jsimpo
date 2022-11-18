
			( function () {

				var setupPrivacy = function() {

					// Minimal Mozilla Cookie library
					// https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie/Simple_document.cookie_framework
					var cookieLib = window.cookieLib = {getItem:function(e){return e&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,o,n,t,r,i){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var c="";if(n)switch(n.constructor){case Number:c=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:c="; expires="+n;break;case Date:c="; expires="+n.toUTCString()}return"rootDomain"!==r&&".rootDomain"!==r||(r=(".rootDomain"===r?".":"")+document.location.hostname.split(".").slice(-2).join(".")),document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(o)+c+(r?"; domain="+r:"")+(t?"; path="+t:"")+(i?"; secure":""),!0}};

					// Implement IAB USP API.
					window.__uspapi = function( command, version, callback ) {

						// Validate callback.
						if ( typeof callback !== 'function' ) {
							return;
						}

						// Validate the given command.
						if ( command !== 'getUSPData' || version !== 1 ) {
							callback( null, false );
							return;
						}

						// Check for GPC. If set, override any stored cookie.
						if ( navigator.globalPrivacyControl ) {
							callback( { version: 1, uspString: '1YYN' }, true );
							return;
						}

						// Check for cookie.
						var consent = cookieLib.getItem( 'usprivacy' );

						// Invalid cookie.
						if ( null === consent ) {
							callback( null, false );
							return;
						}

						// Everything checks out. Fire the provided callback with the consent data.
						callback( { version: 1, uspString: consent }, true );
					};

					// Initialization.
					document.addEventListener( 'DOMContentLoaded', function() {

						// Internal functions.
						var setDefaultOptInCookie = function() {
							var value = '1YNN';
							var domain = '.wordpress.com' === location.hostname.slice( -14 ) ? '.rootDomain' : location.hostname;
							cookieLib.setItem( 'usprivacy', value, 365 * 24 * 60 * 60, '/', domain );
						};

						var setDefaultOptOutCookie = function() {
							var value = '1YYN';
							var domain = '.wordpress.com' === location.hostname.slice( -14 ) ? '.rootDomain' : location.hostname;
							cookieLib.setItem( 'usprivacy', value, 24 * 60 * 60, '/', domain );
						};

						var setDefaultNotApplicableCookie = function() {
							var value = '1---';
							var domain = '.wordpress.com' === location.hostname.slice( -14 ) ? '.rootDomain' : location.hostname;
							cookieLib.setItem( 'usprivacy', value, 24 * 60 * 60, '/', domain );
						};

						var setCcpaAppliesCookie = function( applies ) {
							var domain = '.wordpress.com' === location.hostname.slice( -14 ) ? '.rootDomain' : location.hostname;
							cookieLib.setItem( 'ccpa_applies', applies, 24 * 60 * 60, '/', domain );
						}

						var maybeCallDoNotSellCallback = function() {
							if ( 'function' === typeof window.doNotSellCallback ) {
								return window.doNotSellCallback();
							}

							return false;
						}

						// Look for usprivacy cookie first.
						var usprivacyCookie = cookieLib.getItem( 'usprivacy' );

						// Found a usprivacy cookie.
						if ( null !== usprivacyCookie ) {

							// If the cookie indicates that CCPA does not apply, then bail.
							if ( '1---' === usprivacyCookie ) {
								return;
							}

							// CCPA applies, so call our callback to add Do Not Sell link to the page.
							maybeCallDoNotSellCallback();

							// We're all done, no more processing needed.
							return;
						}

						// We don't have a usprivacy cookie, so check to see if we have a CCPA applies cookie.
						var ccpaCookie = cookieLib.getItem( 'ccpa_applies' );

						// No CCPA applies cookie found, so we'll need to geolocate if this visitor is from California.
						// This needs to happen client side because we do not have region geo data in our $SERVER headers,
						// only country data -- therefore we can't vary cache on the region.
						if ( null === ccpaCookie ) {

							var request = new XMLHttpRequest();
							request.open( 'GET', 'https://public-api.wordpress.com/geo/', true );

							request.onreadystatechange = function () {
								if ( 4 === this.readyState ) {
									if ( 200 === this.status ) {

										// Got a geo response. Parse out the region data.
										var data = JSON.parse( this.response );
										var region      = data.region ? data.region.toLowerCase() : '';
										var ccpa_applies = ['california', 'colorado', 'connecticut', 'utah', 'virginia'].indexOf( region ) > -1;
										// Set CCPA applies cookie. This keeps us from having to make a geo request too frequently.
										setCcpaAppliesCookie( ccpa_applies );

										// Check if CCPA applies to set the proper usprivacy cookie.
										if ( ccpa_applies ) {
											if ( maybeCallDoNotSellCallback() ) {
												// Do Not Sell link added, so set default opt-in.
												setDefaultOptInCookie();
											} else {
												// Failed showing Do Not Sell link as required, so default to opt-OUT just to be safe.
												setDefaultOptOutCookie();
											}
										} else {
											// CCPA does not apply.
											setDefaultNotApplicableCookie();
										}
									} else {
										// Could not geo, so let's assume for now that CCPA applies to be safe.
										setCcpaAppliesCookie( true );
										if ( maybeCallDoNotSellCallback() ) {
											// Do Not Sell link added, so set default opt-in.
											setDefaultOptInCookie();
										} else {
											// Failed showing Do Not Sell link as required, so default to opt-OUT just to be safe.
											setDefaultOptOutCookie();
										}
									}
								}
							};

							// Send the geo request.
							request.send();
						} else {
							// We found a CCPA applies cookie.
							if ( ccpaCookie === 'true' ) {
								if ( maybeCallDoNotSellCallback() ) {
									// Do Not Sell link added, so set default opt-in.
									setDefaultOptInCookie();
								} else {
									// Failed showing Do Not Sell link as required, so default to opt-OUT just to be safe.
									setDefaultOptOutCookie();
								}
							} else {
								// CCPA does not apply.
								setDefaultNotApplicableCookie();
							}
						}
					} );
				};

				// Kickoff initialization.
				if ( window.defQueue && defQueue.isLOHP && defQueue.isLOHP === 2020 ) {
					defQueue.items.push( setupPrivacy );
				} else {
					setupPrivacy();
				}

			} )();
		