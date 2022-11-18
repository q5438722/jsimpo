
            require(["main"], function () {

                var cookieConfig = {
                    homeEquityCookie: false,
                    mortgageCookie: true
                };
                require(["amd/cookie.chase-campaign"], function (ChaseCampaign) {
                    ChaseCampaign.init(cookieConfig);
                });

            });
        