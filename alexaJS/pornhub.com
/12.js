
        typeof atatus !== 'undefined' && atatus.onBeforeSend(function (payload) {
            {{ var url = (payload && payload.request && payload.request.url) || '';}}
            {{ if (url.indexOf('pkey=') !== -1) {}}
                {{ url = url.replace('/view_video.php', '/view_video.php-pkey');}}
                {{ payload.request.url = url;}}
                {{ }}}
            {{ return true;}}
        })
    