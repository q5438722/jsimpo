
    function userABMessage() {
        page_params.isAdBlockEnable = false;
        var message = 'If you are having issues with video playback, please try disabling Adblock, <a rel=\"nofollow\" href=\"https://help.getadblock.com/support/tickets/new\">contact Adblock support to fix the issue</a> or <a href=\"\" onclick=\"triggerGatewayModal(event, false, undefined, undefined, undefined);\" data-entrycode=\"AdBlock\">purchase Pornhub Premium</a>';

        var div	 = document.createElement('div'),
            header  = document.getElementById('header');

        div.innerHTML = '<div id="abAlert"><div class="abAlertInner"><i class="ph-icon-error"></i>' + message + '<a onclick="hideUserMessage();" id="abAlertClose" class="tooltipTrig" data-title="Aww, at least we tried!">&times;</a></div>';
        div.setAttribute('id', 'js-abContainterMain');
        div.style.display = 'none';

        setTimeout(function () {
            header.appendChild(div);
        }, 500);

        if (!getCookieAdvanced('adBlockAlertHidden')) {
            page_params.isAdBlockEnable = true;
            div.style.display = 'block';
            div.setAttribute('class', 'abAlertShown');
            if(header)
                MG_Utils.addClass(header, 'hasAdAlert');
        }

        if(page_params.isAdBlockEnable) {
            var wrapVideoBlock = document.querySelectorAll('.wrapVideoBlock');
            for (var i = 0; i < wrapVideoBlock.length; i++) {
                var videoSpiceVidsBlock = wrapVideoBlock[i].querySelector('.videoSpiceVidsBlock');
                var videoPremiumBlock = wrapVideoBlock[i].querySelector('.videoPremiumBlock');
                if(videoSpiceVidsBlock){
                    videoSpiceVidsBlock.style.display = 'none';
                }
                if(videoPremiumBlock){
                    videoPremiumBlock.style.display = 'block';
                }
            }
        }
    }

    function hideUserMessage() {
        document.getElementById('js-abContainterMain').style.display = 'none';
        var header = document.getElementById('header');
        if(header)
            MG_Utils.removeClass(header, 'hasAdAlert');
        setCookieAdvanced('adBlockAlertHidden', 1, 1);

        return false;
    }
