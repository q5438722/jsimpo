
window.SCHD_COMS = window.SCHD_COMS || {};
window.SCHD_COMS.__tradeAlertI18nData = {
	"noSetTips":"Trade Alert - Delivering the latest product trends and industry news straight to your inbox.",
    "alreadySetTips":"Get the latest product trends and industry news sent to {grayEmailLabel}",
    "successTips":"Subscription successful! We’ll send you Trade Alert emails to {grayEmailLabelEmpty} twice a week.",
    "sucessTipsLabel":"Great! We will send you Trade Alert email to {grayEmailLabelEmptyNormal} twice a week!",
    "emailErrorTips":"Please enter a valid email address",
    "alreadySubscribeErrorTips":"Email address is already subscribed.",
    "defaultTextTips":"We’ll never share your email address with a third-party.",
    "categoryErrorTips":"Please select at least one category.",
    "yourEmail":"Your email",
    "subscribe":"Subscribe",
    "loadingText":"Loading, please wait...",
    "subscribedSuccess":"Subscribed successfully!",
    "tryAgainTips":"Sorry! Please try again later. ",
    "btnLinkTryAgain":"Try again",
    "alertTips@popupText":"Get free product trends and industry news for this product category.",
    "alertTips@alreadySubscribe":"Email address is already subscribed.",
    "tipsLabelText":"Subscribe to Trade Alert",
    "tipsLabelTitle":"Trade Alert Subscription",
    "tipsLabelBtn1":"Subscribe Now",
    "tipsLabelBtn2":"Subscribe again",
    "changeBtnText":"Change Subscription Settings"
};
(function(){
    var dataStr = JSON.stringify(window.SCHD_COMS.__tradeAlertI18nData);
    var decHtml = function( str ){
      var dom = document.createElement('div');
      for(var i=0;i<3;i++){
        str = str.replace(/\&quot\;/gi,'\\\"');
        dom.innerHTML= str;
        str = dom.innerText;
      }
      return str;
    };
    dataStr = decHtml(dataStr);
    window.SCHD_COMS.__tradeAlertI18nData = JSON.parse(dataStr);
})();
