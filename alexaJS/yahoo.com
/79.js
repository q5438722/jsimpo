
        (function(w) {
            var beaconer = function(type, source, beaconKeys) {
                if (!w.wafer && !w.wafer.utils) {
                    return;
                }
                var beaconUrl = '/info/p.gif?type=' + type + '&beaconKeys=' + escape(JSON.stringify(beaconKeys)) + '&source=' + source + '&rid=5p5vp3dhneu1m' + '&bucket=MimicProviderListv2-copy,cp_evalmlfpexp1bkt2,FPGAMLIFE101,TGPC2202,drop_heimdall_homepage_control_bucket,JARVISFPUSDESKP1P2TAKE207';
                w.wafer.utils.fireBeacon(beaconUrl);
            };
            var tracker = w.YAHOO && w.YAHOO.i13n && w.YAHOO.i13n.rapidInstance;
            var helperConfig = {
                appServerPubKey: 'BCXJapOGtk7_LYDOs_Al9Nb2r1ljzjZ0ZZnT8fxVap4WD5EBUPcIfImQOGgQTgagzGVuQemeWYlf5lct6OXe2c0=',
                bucket: 'MimicProviderListv2-copy,cp_evalmlfpexp1bkt2,FPGAMLIFE101,TGPC2202,drop_heimdall_homepage_control_bucket,JARVISFPUSDESKP1P2TAKE207',
                churnCheckBackoff: 604800,
                delegatePromoButton: true,
                enableChurnCheck: true,
                enableVapidMigration: true,
                enabled: true,
                resubscribeOnChurn: true,
                serviceWorkerUrl: '/service-worker.js',
                showPushSubscriptionPromos: true,
                spaceId: '1197802003',
                subscriptionService: {
                    context: {
                        crumb: 'jXgmU.i/ckC',
                        lang: 'en-US',
                        region: 'US'
                    },
                    path: '/fp_mtls_ms/_td/api/resource'
                },
                supportedBrowsers: {
                    chrome: {
                        maxVersion: 0,
                        minVersion: 54,
                        os: ['win', 'mac', 'android'],
                        useServiceWorker: true
                    },
                    'chrome mobile': {
                        maxVersion: 0,
                        minVersion: 54,
                        os: ['android'],
                        useServiceWorker: true
                    }
                },
                userAgent: {
                    browserName: 'chrome',
                    browserVersion: 107,
                    osName: 'mac os x'
                },
                useRivendell: true
            };
            w.YAHOO = w.YAHOO || {};
            w.YAHOO.subscriptionHelperParams = {
                beaconer: beaconer,
                config: helperConfig,
                selfInit: true,
                tracker: tracker
            };
        }(window));
    