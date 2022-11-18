
    $(function(){
        /**
         * 浮层，右下弹窗，对联广告效果
         * 可定时
         **/
        var adInfos = [{
            "adType": "float",  // 浮层广告
            "bigImg": "https://ad.gmw.cn/index_banner/adfcBig_20221014.png",
            "smallImg": "https://ad.gmw.cn/index_banner/adfcSmall_20221014.gif",
            "link": "https://www.lzlj.com/",
            "startTime": "2022/10/23 0:0:0",
            "endTime": "2022/10/24 0:0:0",
            "pos": ".g_part2.page_width.m_top35.m_clearfix",    // 在此位置之下才显示，用于避开指定区域名
            "showTime": 5000    // 显示时长
        }/*, {
            "adType": "popup",  // 弹窗广告
            "bigImg": "bb.jpg",
            "smallImg": "ss.jpg",
            "link": "https://abc.com/",
            "startTime": "2022/10/10 0:0:0",
            "endTime": "2022/10/29 0:0:0",
            "showTime": 5000
        }, {
            "adType": "couplet",    // 对联广告
            "leftImg": "ll.jpg",
            "rightImg": "rr.jpg",
            "link": "https://abc.com/",
            "startTime": "2022/01/21 0:0:0",
            "endTime": "2022/11/22 0:0:0",
            "showTime": 5000
        }*/];
        var curTime = new Date().getTime();
        var isMob = /AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent));

        // 循环广告内容数组，逐一判断广告类型及显示时间，根据实际情况分别显示
        for (var i = 0; i < adInfos.length; i++) {
            if (adInfos[i].adType == "float") {
                adFloat(adInfos[i]);
            } else if (adInfos[i].adType == "popup") {
                adPopup(adInfos[i]);
            } else if (adInfos[i].adType == "couplet") {
                adCouplet(adInfos[i]);
            }
        }

        // 浮层广告
        function adFloat(adInfo) {
            if (_isExpires(adInfo.startTime, adInfo.endTime)) {
                // 设置广告元素
                $(".m-ad-float .bigimg").attr("src", adInfo.bigImg);
                $(".m-ad-float .smallimg").attr("src", adInfo.smallImg);
                $(".m-ad-float a").attr("href", adInfo.link);
                var pos = $(adInfo.pos).offset().top;  // 在此位置之下才显示，用于避开指定区域名
                var isShowed = false;
                window.onscroll = function () {
                    if ($(window).scrollTop() >= pos) {
                        $(".m-ad-float").show();
                        if(!isShowed){
                            isShowed = true;
                            setTimeout(function () {
                                $(".m-ad-float-big").fadeOut(200);
                                $(".m-ad-float-small").fadeIn(200);
                            }, adInfo.showTime);
                        }
                    } else {
                        $(".m-ad-float").hide();
                    }
                }
            }
        }

        // 弹窗广告
        function adPopup(adInfo) {
            if (_isExpires(adInfo.startTime, adInfo.endTime)) {
                // 设置广告元素
                $(".m-ad-popup .m-ad-popup-big .bigimg").attr("src", adInfo.bigImg);
                $(".m-ad-popup .m-ad-popup-small .smallimg").attr("src", adInfo.smallImg);
                $(".m-ad-popup a").attr("href", adInfo.link);
                $(".m-ad-popup").show();
                setTimeout(function(){
                    $(".m-ad-popup-big").fadeOut(200);
                    $(".m-ad-popup-small").fadeIn(200);
                }, adInfo.showTime);
            }
        }

        // 对联广告
        function adCouplet(adInfo) {
            if (_isExpires(adInfo.startTime, adInfo.endTime)) {
                // 设置广告元素
                $(".m-ad-couplet-left .leftimg").attr("src", adInfo.leftImg);
                $(".m-ad-couplet-right .rightimg").attr("src", adInfo.rightImg);
                $(".m-ad-couplet-right a").attr("href", adInfo.link);
                $(".m-ad-couplet").show();
                function adSize() {
                    if ($(window).width() <= 1450) {
                        var width = !isMob ? $(window).width() : $("body").width();
                        $(".m-ad-couplet").css({"width": width});
                    } else {
                        $(".m-ad-couplet").css({"width": 1462});
                    };
                };
                adSize();
                $(window).resize(function() {
                    adSize();
                });
            }
        }

        // 关闭广告
        $(".u-ad-close").on("click", function(){
            if($(this).parent(".m-ad-float-big, .m-ad-popup-big").length > 0){
                // 关闭大图，显示小图
                $(this).parent(".m-ad-float-big, .m-ad-popup-big").siblings(".m-ad-float-small, .m-ad-popup-small").show();
                $(this).parent(".m-ad-float-big, .m-ad-popup-big").remove();
            }else if($(this).parent(".m-ad-float-small, .m-ad-popup-small").length > 0){
                // 关闭小图，直接清除元素
                $(this).parents(".m-ad").remove();
            }else if($(this).parent(".m-ad").length > 0){
                // 关闭单侧对联时，直接清除元素
                $(this).parent(".m-ad").remove();
            }
        });

        // 是否在有效期内
        function _isExpires(start, end) {
            var startTime = new Date(start).getTime();
            var endTime = new Date(end).getTime();
            if (curTime >= startTime && curTime < endTime) {
                return true;
            } else {
                return false;
            }
        }
    });
