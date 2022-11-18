(function (window, document, Math) {
    try {
        var changeLinkColor = function () {
            document.getElementById("ad-feedback-text-desktop-ad-center-1").style.color = '#111111';
            document.getElementById("ad-feedback-sprite-desktop-ad-center-1").style.background = 'transparent url("https://m.media-amazon.com/images/G/01/ad-feedback/info_icon_1Xsprite.png") no-repeat 0px -12px';
        }
        var defaultLinkBehaviour = function() {
            document.getElementById("ad-feedback-text-desktop-ad-center-1").style.textDecoration = 'none';
            document.getElementById("ad-feedback-text-desktop-ad-center-1").style.color = '#555555';
            document.getElementById("ad-feedback-sprite-desktop-ad-center-1").style.background = 'transparent url("https://m.media-amazon.com/images/G/01/ad-feedback/info_icon_1Xsprite.png") no-repeat scroll 0px 0px';
        }
window.changeLinkColor9d6659e3a0ad40f6af72f43dcd5788b6 = changeLinkColor;
window.defaultLinkBehaviour9d6659e3a0ad40f6af72f43dcd5788b6 = defaultLinkBehaviour;
    } catch(ex) {
        if(window.ueLogError) {
            var additionalInfo = {
                logLevel : 'ERROR',
                attribution : 'Ad Feedback',
                message : 'Error in Feedback js '
            };
            window.ueLogError(ex, additionalInfo);
        }
    }
})(window, document, Math);