
                window.dexter.Analytics.environment = 'production';
                window.marketingtech = window.marketingtech || {};
                window.marketingtech.adobe = {
                    target: true,
                    audienceManager: window.dexter.Analytics.audienceManagerEnabled,
                    launch: {
                        property: 'global',
                        environment: window.dexter.Analytics.environment,
                        controlPageLoad: true
                    },
                    analytics: {
                        additionalAccounts: ''
                    },
                    targetControlDxf: false
                };
            