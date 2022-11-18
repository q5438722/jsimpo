(function ($Nav) {
"use strict";

if (typeof $Nav === 'undefined' || $Nav === null || typeof $Nav.when !== 'function') {
    return;
}

$Nav.when('$', 'data', 'flyout.yourAccount', 'sidepanel.csYourAccount',
          'config')
    .run("BuyitAgain-YourAccount-SidePanel",
    function ($, data, yaFlyout, csYourAccount, config) {
        if (config.disableBuyItAgain) {
            return;
        }
        var render = function (data) {
            if (data.dramResult) {
                var widgetHtml = data.dramResult;
                navbar.sidePanel({
                    flyoutName: 'yourAccount',
                    data: {html: widgetHtml}
                });
            }
        };

        var renderBuyItAgain = function (biaData) {
            if (csYourAccount) {
                csYourAccount.register(render, biaData);
            } else {
                render(biaData);
            }
        };

        yaFlyout.sidePanel.onData(function() {
            if (window.P) {
                P.when('A', 'a-truncate').execute(function(A, truncate) {
                    var truncateElements = A.$('.a-truncate');
                    A.each(truncateElements, function(element) {
                        truncate.get(element).update();
                    });
                    var recommendationsWidget = document.getElementById('bia-hcb-widget');
                    if (recommendationsWidget) { 
                        var navFlyout = recommendationsWidget.parentElement;
                        var navFlyoutPaddingBottom = parseInt(window.getComputedStyle(navFlyout).getPropertyValue('padding-bottom'));
                        var navFlyoutContentHeight = navFlyout.clientHeight - navFlyoutPaddingBottom;
                        while (recommendationsWidget.offsetHeight > navFlyoutContentHeight){
                            var recommendations = recommendationsWidget.querySelectorAll('.biaNavFlyoutFaceout');
                            if (recommendations.length <= 1) {
                                break;
                            }
                            var lastRecommendation = recommendations[recommendations.length - 1];
                            lastRecommendation.parentElement.removeChild(lastRecommendation);
                        }
                    }
               });
            }
        });

    yaFlyout.onRender(function() {
            $.ajax({
                url: '/gp/bia/external/bia-hcb-ajax-handler.html',
                data: {"biaHcbRid":"B05Z9G78KS6YCQWC0FG9"},
                dataType: 'json',
                timeout: 4*1000,
                success: renderBuyItAgain,
                error: function (jqXHR, textStatus, errorThrown) {
                }
            });
        });
    });
})(window.$Nav);