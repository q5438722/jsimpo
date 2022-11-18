
        window.fedsConfig = {
            locale: 'en',
            disableSticky: false,
            content: {
                experience: 'acom',
                selectors: '',
            },
            breadcrumbs: {
                showLogo: false,
                links: []
            },
            subnav: {},
            footer: {
                regionModal: function () { window.location.hash = 'languageNavigation'; }
            },
            privacy: {
                otDomainId: '7a5eb705\u002D95ed\u002D4cc4\u002Da11d\u002D0cc5760e93db',
                footerLinkSelector: '[data\u002Dfeds\u002Daction=\x22open\u002Dadchoices\u002Dmodal\x22]',
            },
            search: {
                context: '',
            },
        };

        (function() {
            const gnavExperience = document.querySelector('div[data-param-key]');

            if (gnavExperience === null) return;
            if (window.location.search === '') return;

            const key = gnavExperience.getAttribute('data-param-key');
            const val = gnavExperience.getAttribute('data-param-val');
            const exp = gnavExperience.getAttribute('data-experience');
            const queryParams = window.location.search.substring(1);
            const keyValPairs = queryParams.split('&');
            const containsParams = keyValPairs.filter(function(pair) {
                const splitPair = pair.split('=');
                return splitPair[0] === key && splitPair[1] === val;
            });

            if (!containsParams.length) return;

            if (window.fedsConfig && window.fedsConfig.content && window.fedsConfig.content.experience) {
                window.fedsConfig.content.experience = exp;
            }
        })();
        