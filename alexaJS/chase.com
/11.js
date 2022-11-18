
                  requirejs.config({
                    baseUrl: '/c/111022/etc/designs/chase-ux/clientlibs/chase-ux/js',
                    paths: {
                        "adservice": "https://static.chasecdn.com/web/marketing-ui/web-configs/prd/marketing-loader",
                        "content/conf/appsconfig": tagManagerConfig.tagServer + "/etc/chase/appsconfig",
                        "main": "main-index/main",
                        "jquery.cookie": "vendor/jquery.cookie",
                        "slick": "vendor/slick.min",
                        "has": "vendor/has",
                        "hover-intent": "vendor/jquery.hoverIntent.min",
                        "iscroll": "vendor/iscroll-5.1.3.min",
                        "isnan": "node_modules/number.isnan/isnan",
                        "platform": "vendor/platform",
                        "underscore": "vendor/underscore-1.8.3",
                        "amd/carousel": "amd/carousel-home"
                    }
                  });
                  define("jquery", [], function () { return jQuery; });
                  define("slotplacement/clientconfig", function() {
                    return {
                      timeout : "4000"
                    }
                  });
                