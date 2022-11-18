
      window.$Nav && $Nav.when('$').run('CBIMarketplaceRedirectOverlayNavyaan', function($) {
              $.ajax({
                  type: 'POST',
                  url: '/cross_border_interstitial/render',
                  data: JSON.stringify({
                      marketplaceId: 'A1F83G8C2ARO7P',
                      localCountryCode: 'GB',
                         customerId: null,
                      sessionId: '261\x2D6297379\x2D8687217',
                      deviceType: 'DESKTOP',
                      referrer: '',
                      url: '\x2F',
                      pageType: 'Gateway',
                      languageOfPreference: 'en_GB',
                      queryParams: {},
                      interstitialRequestType: 'CBI',
                      weblabTreatmentMap: {"CROSS_BORDER_INTERSTITIAL_ES_US_340017":"C","CROSS_BORDER_INTERSTITIAL_MX_US_341718":"C","CBI_355055":"C","NARX_INTERSTITIAL_NEW_CX_372291":"C","MWEB_CROSS_BORDER_INTERSTITIAL_SE_366766":"C","MWEB_CROSS_BORDER_INTERSTITIAL_SA_366767":"C","MWEB_CROSS_BORDER_INTERSTITIAL_PL_366768":"C","MWEB_CROSS_BORDER_INTERSTITIAL_NL_366769":"C","MWEB_CROSS_BORDER_INTERSTITIAL_BE_459529":"C","CROSS_BORDER_INTERSTITIAL_BE_446276":"C","NARX_INTERSTITIAL_AUI_MIGRATION_446901":"C","NARX_INTERSTITIAL_CX_IMPROVEMENT_446891":"C","BE_LOP_INTERSTITIAL_460676":"T1","TEST_ACS_CONFIGURATION_486322":"C","CROSS_BORDER_INTERSTITIAL_ACS_SHADOW_TESTING_486317":"C","NARX_INTERSTITIAL_SEMBU_MIGRATION_542466":"C"}
                  }),
                  contentType: "application/json",
                  dataType: "html",
                  success: function(data) {
                      if (data) {
                          $('body').append(data);
                      }
                  }
              });
      });
  