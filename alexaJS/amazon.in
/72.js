(function (window, document, Math) {
    try {
        var changeLinkColor = function () {
            document.getElementById("ad-feedback-text-right-2").style.color = '#111111';
            document.getElementById("ad-feedback-sprite-right-2").style.background = 'transparent url("https://m.media-amazon.com/images/G/01/ad-feedback/info_icon_1Xsprite.png") no-repeat 0px -12px';
        }
        var defaultLinkBehaviour = function() {
            document.getElementById("ad-feedback-text-right-2").style.textDecoration = 'none';
            document.getElementById("ad-feedback-text-right-2").style.color = '#555555';
            document.getElementById("ad-feedback-sprite-right-2").style.background = 'transparent url("https://m.media-amazon.com/images/G/01/ad-feedback/info_icon_1Xsprite.png") no-repeat scroll 0px 0px';
        }
window.changeLinkColor92d9fdc4432148b0a098082c4bdb8a8c = changeLinkColor;
window.defaultLinkBehaviour92d9fdc4432148b0a098082c4bdb8a8c = defaultLinkBehaviour;
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