
//2020新版零首页PC 广告JS
function CCTV_2020ad(){
}
CCTV_2020ad.prototype._ajax = function(url,cb,fn){
    $.ajax({
        url:url,
        dataType:"jsonp",
        jsonpCallback:cb,
        success:function(data){
            fn(data);
        },
		error:function(){
			if (cb == "cntvPczh_1225"){
				$(".galaxyAdvert01").hide();
			}
		}
    })
}
var CCTV_2020ad_1116 = new CCTV_2020ad();
var ad_text_style = '<div style="position: absolute; left: 0px; bottom: 0px; z-index: 999; padding: 0px 3px; font-size: 12px; line-height: 16px; color: rgb(255, 255, 255); background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.5;">广告</div>';
if(window.location.href.indexOf("homepagesave/") != -1){}else{
    function recalculationTop(){
        for(var k=0;k<$("[id^='nav']").length;k++){
            idTop[k] = $("[id^='nav']").eq(k).position().top;
        }
    }
    //轮播图广告
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1217&op=1','cntvPczh_1217',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        $('#firstRotation .boxImage .slide').last().find('.img img').attr({'src':data.smallImg,'data-src':data.smallImg});
		$('#firstRotation .boxImage .slide').last().find('.img').append(ad_text_style);
        $('#firstRotation .boxImage .slide').last().find('.play').remove();
        $('#firstRotation .boxImage .slide').last().find('.img a').attr({'href':data.clickUrl});
        $('#firstRotation .boxTitle .title').last().find('.txt a').attr({'href':data.clickUrl}).text(data.title);
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //品质活动广告 01
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1683&op=1','cntvPczh_1683',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        //if($(".ELMTtX84I56zm9TmLZU61MsJ201111 .picTitle ul li").eq(0).length>0){
        if($("#nav02 .picTitle ul li").eq(0).length>0){
            //上线时 打开2行注释  
            // $(".ELMTtX84I56zm9TmLZU61MsJ201111 .boxImage .picTitle ul li").eq(0).find(".image a").attr("href",data.clickUrl).find("img").attr("src",data.smallImg);
            // $(".ELMTtX84I56zm9TmLZU61MsJ201111 .picTitle ul li").eq(0).find(".text a").attr("href",data.clickUrl).text(data.title);
            // $(".ELMTtX84I56zm9TmLZU61MsJ201111 .picTitle ul li").eq(0).find(".image").css('position','relative').append(ad_text_style);
            //上线时 注释这两行
			if(data.ad_text=='true'){
				$("#nav02 .picTitle ul li").eq(0).find(".image").css('position','relative').append(ad_text_style);
			}
            $("#nav02 .picTitle ul li").eq(0).find(".image a").attr("href",data.clickUrl).find("img").attr({"data-echo":data.smallImg,"src":data.smallImg});
            $("#nav02 .picTitle ul li").eq(0).find(".text a").attr("href",data.clickUrl).html(data.title);
        }
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //品质活动广告 02
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1684&op=1','cntvPczh_1684',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        //if($(".ELMTtX84I56zm9TmLZU61MsJ201111 .picTitle ul li").eq(1).length>0){
        if($("#nav02 .picTitle ul li").eq(1).length>0){
            //上线时 打开2行注释  
            // $(".ELMTtX84I56zm9TmLZU61MsJ201111 .boxImage .picTitle ul li").eq(1).find(".image a").attr("href",data.clickUrl).find("img").attr("src",data.smallImg);
            // $(".ELMTtX84I56zm9TmLZU61MsJ201111 .picTitle ul li").eq(1).find(".text a").attr("href",data.clickUrl).text(data.title);
            // $(".ELMTtX84I56zm9TmLZU61MsJ201111 .picTitle ul li").eq(1).find(".image").css('position','relative').append(ad_text_style);
            //上线时 注释这两行
			if(data.ad_text=='true'){
				$("#nav02 .picTitle ul li").eq(1).find(".image").css('position','relative').append(ad_text_style);
			}
            $("#nav02 .picTitle ul li").eq(1).find(".image a").attr("href",data.clickUrl).find("img").attr({"data-echo":data.smallImg,"src":data.smallImg});
            $("#nav02 .picTitle ul li").eq(1).find(".text a").attr("href",data.clickUrl).html(data.title);
        }
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //品质活动广告 03
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1685&op=1','cntvPczh_1685',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        //if($(".ELMTtX84I56zm9TmLZU61MsJ201111 .picTitle ul li").eq(2).length>0){
        if($("#nav02 .picTitle ul li").eq(2).length>0){
            //上线时 打开2行注释  
            // $(".ELMTtX84I56zm9TmLZU61MsJ201111 .boxImage .picTitle ul li").eq(2).find(".image a").attr("href",data.clickUrl).find("img").attr("src",data.smallImg);
            // $(".ELMTtX84I56zm9TmLZU61MsJ201111 .picTitle ul li").eq(2).find(".text a").attr("href",data.clickUrl).text(data.title);
            // $(".ELMTtX84I56zm9TmLZU61MsJ201111 .picTitle ul li").eq(2).find(".image").css('position','relative').append(ad_text_style);
            //上线时 注释这两行
			if(data.ad_text=='true'){
				$("#nav02 .picTitle ul li").eq(2).find(".image").css('position','relative').append(ad_text_style);
			}
            $("#nav02 .picTitle ul li").eq(2).find(".image a").attr("href",data.clickUrl).find("img").attr({"data-echo":data.smallImg,"src":data.smallImg});
            $("#nav02 .picTitle ul li").eq(2).find(".text a").attr("href",data.clickUrl).html(data.title);
        }
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //品质活动广告 04
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1686&op=1','cntvPczh_1686',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        //if($(".ELMTtX84I56zm9TmLZU61MsJ201111 .picTitle ul li").eq(3).length>0){
        if($("#nav02 .picTitle ul li").eq(3).length>0){
            //上线时 打开2行注释  
            // $(".ELMTtX84I56zm9TmLZU61MsJ201111 .boxImage .picTitle ul li").eq(3).find(".image a").attr("href",data.clickUrl).find("img").attr("src",data.smallImg);
            // $(".ELMTtX84I56zm9TmLZU61MsJ201111 .picTitle ul li").eq(3).find(".text a").attr("href",data.clickUrl).text(data.title);
            // $(".ELMTtX84I56zm9TmLZU61MsJ201111 .picTitle ul li").eq(3).find(".image").css('position','relative').append(ad_text_style);
            //上线时 注释这两行
			if(data.ad_text=='true'){
				$("#nav02 .picTitle ul li").eq(3).find(".image").css('position','relative').append(ad_text_style);
			}
            $("#nav02 .picTitle ul li").eq(3).find(".image a").attr("href",data.clickUrl).find("img").attr({"data-echo":data.smallImg,"src":data.smallImg});
            $("#nav02 .picTitle ul li").eq(3).find(".text a").attr("href",data.clickUrl).html(data.title);
        }  
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //品质活动广告 05
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1687&op=1','cntvPczh_1687',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        //if($(".ELMTtX84I56zm9TmLZU61MsJ201111 .picTitle ul li").eq(4).length>0){
        if($("#nav02 .picTitle ul li").eq(4).length>0){
            //上线时 打开2行注释  
            // $(".ELMTtX84I56zm9TmLZU61MsJ201111 .boxImage .picTitle ul li").eq(4).find(".image a").attr("href",data.clickUrl).find("img").attr("src",data.smallImg);
            // $(".ELMTtX84I56zm9TmLZU61MsJ201111 .picTitle ul li").eq(4).find(".text a").attr("href",data.clickUrl).text(data.title);
            // $(".ELMTtX84I56zm9TmLZU61MsJ201111 .picTitle ul li").eq(4).find(".image").css('position','relative').append(ad_text_style);
            //上线时 注释这两行
			if(data.ad_text=='true'){
				$("#nav02 .picTitle ul li").eq(4).find(".image").css('position','relative').append(ad_text_style);
			}
            $("#nav02 .picTitle ul li").eq(4).find(".image a").attr("href",data.clickUrl).find("img").attr({"data-echo":data.smallImg,"src":data.smallImg});
            $("#nav02 .picTitle ul li").eq(4).find(".text a").attr("href",data.clickUrl).html(data.title);
        }
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //品质活动广告 文字链 01
    if($("#nav02 .heat a").length>=1){
        CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1688&op=1','cntvPczh_1688',function(data){
            data.clickUrl = decodeURI(data.clickUrl);
            //if($(".ELMTtX84I56zm9TmLZU61MsJ201111 .heat a").eq(0).length>0){
            if($("#nav02 .heat a").eq(0).length>0){
                //上线时 打开1行注释  
                // $(".ELMTtX84I56zm9TmLZU61MsJ201111 .heat a").eq(0).attr("href",data.clickUrl).text(data.title);
                //上线时 注释这1行
                $("#nav02 .heat a").eq(0).attr("href",data.clickUrl).html(data.title);
            }
            if(data.eventExposure!=''){
                $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
            }
        })
    }
    
    //品质活动广告 文字链 02
    if($("#nav02 .heat a").length>=2){
        CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1689&op=1','cntvPczh_1689',function(data){
            data.clickUrl = decodeURI(data.clickUrl);
            //if($(".ELMTtX84I56zm9TmLZU61MsJ201111 .heat a").eq(1).length>0){
            if($("#nav02 .heat a").eq(1).length>0){
                //上线时 打开1行注释  
                // $(".ELMTtX84I56zm9TmLZU61MsJ201111 .heat a").eq(1).attr("href",data.clickUrl).text(data.title);
                //上线时 注释这1行
                $("#nav02 .heat a").eq(1).attr("href",data.clickUrl).html(data.title);
            }
            if(data.eventExposure!=''){
                $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
            }
        })
    }
    //品质活动广告 文字链 03
    if($("#nav02 .heat a").length>=3){
        CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1690&op=1','cntvPczh_1690',function(data){
            data.clickUrl = decodeURI(data.clickUrl);
            //if($(".ELMTtX84I56zm9TmLZU61MsJ201111 .heat a").eq(2).length>0){
            if($("#nav02 .heat a").eq(2).length>0){
                //上线时 打开1行注释  
                // $(".ELMTtX84I56zm9TmLZU61MsJ201111 .heat a").eq(2).attr("href",data.clickUrl).text(data.title);
                //上线时 注释这1行
                $("#nav02 .heat a").eq(2).attr("href",data.clickUrl).html(data.title);
            }
            if(data.eventExposure!=''){
                $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
            }
        })
    }
    //原棋盘下方【大通栏01】
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1218&op=1','cntvPczh_1218',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
		if(data.clickUrl){
			$('#gtyb_1218').html('<div style="position:relative;"><a target="_blank" href="'+data.clickUrl+'"><img style="width:100%" src="'+data.smallImg+'"></a><div style="position: absolute; left: 0px; bottom: 0px; z-index: 999; padding: 0px 3px; font-size: 12px; line-height: 16px; color: rgb(255, 255, 255); background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.5;">广告</div></div><div style="height:20px;"></div>');
		}else{
			$('#gtyb_1218').html('<div style="position:relative;"><img style="width:100%" src="'+data.smallImg+'"><div style="position: absolute; left: 0px; bottom: 0px; z-index: 999; padding: 0px 3px; font-size: 12px; line-height: 16px; color: rgb(255, 255, 255); background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.5;">广告</div></div><div style="height:20px;"></div>');
		}
        
        recalculationTop();
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    // 原军事下方【窄通栏01、长通栏01】 gtyb_1222 窄通栏01
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1222&op=1','cntvPczh_1222',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        $('#gtyb_1222').html('<div style="position:relative;"><a target="_blank" href="'+data.clickUrl+'"><img style="width:100%" src="'+data.smallImg+'"></a><div style="position: absolute; left: 0px; bottom: 0px; z-index: 999; padding: 0px 3px; font-size: 12px; line-height: 16px; color: rgb(255, 255, 255); background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.5;">广告</div></div><div style="height:20px;"></div>');
        recalculationTop();
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //gtyb_1220 长通栏01
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1220&op=1','cntvPczh_1220',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        $('#gtyb_1220').html('<div style="position:relative;"><a target="_blank" href="'+data.clickUrl+'"><img style="width:100%" src="'+data.smallImg+'"></a><div style="position: absolute; left: 0px; bottom: 0px; z-index: 999; padding: 0px 3px; font-size: 12px; line-height: 16px; color: rgb(255, 255, 255); background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.5;">广告</div></div><div style="height:20px;"></div>');
        recalculationTop();
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })

    //特别推荐 广告 01
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1691&op=1','cntvPczh_1691',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        if($("#nav08 .activityTab .con ul li").eq(0).length>0){
			if(data.ad_text=='true'){
				$("#nav08 .activityTab .con ul li").eq(0).find(".img").css('position','relative').append(ad_text_style);
			}
            $("#nav08 .activityTab .con ul li").eq(0).find(".img img").attr({"data-echo":data.smallImg,"src":data.smallImg});
            $("#nav08 .activityTab .con ul li").eq(0).find(".txt").attr("href",data.clickUrl).find(".title").text(data.title);
            $("#nav08 .activityTab .con ul li").eq(0).find(".txt .brief").text(data.brief);
        }
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //特别推荐 广告 02
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1692&op=1','cntvPczh_1692',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        if($("#nav08 .activityTab .con ul li").eq(1).length>0){
			if(data.ad_text=='true'){
				$("#nav08 .activityTab .con ul li").eq(1).find(".img").css('position','relative').append(ad_text_style);
			}
            $("#nav08 .activityTab .con ul li").eq(1).find(".img img").attr({"data-echo":data.smallImg,"src":data.smallImg});
            $("#nav08 .activityTab .con ul li").eq(1).find(".txt").attr("href",data.clickUrl).find(".title").text(data.title);
            $("#nav08 .activityTab .con ul li").eq(1).find(".txt .brief").text(data.brief);
        }
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //特别推荐 广告 03
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1693&op=1','cntvPczh_1693',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        if($("#nav08 .activityTab .con ul li").eq(2).length>0){
			if(data.ad_text=='true'){
				$("#nav08 .activityTab .con ul li").eq(2).find(".img").css('position','relative').append(ad_text_style);
			}
            $("#nav08 .activityTab .con ul li").eq(2).find(".img img").attr({"data-echo":data.smallImg,"src":data.smallImg});
            $("#nav08 .activityTab .con ul li").eq(2).find(".txt").attr("href",data.clickUrl).find(".title").text(data.title);
            $("#nav08 .activityTab .con ul li").eq(2).find(".txt .brief").text(data.brief);
        }
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //特别推荐 广告 04
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1694&op=1','cntvPczh_1694',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        if($("#nav08 .activityTab .con ul li").eq(3).length>0){
			if(data.ad_text=='true'){
				$("#nav08 .activityTab .con ul li").eq(3).find(".img").css('position','relative').append(ad_text_style);
			}
            $("#nav08 .activityTab .con ul li").eq(3).find(".img img").attr({"data-echo":data.smallImg,"src":data.smallImg});
            $("#nav08 .activityTab .con ul li").eq(3).find(".txt").attr("href",data.clickUrl).find(".title").text(data.title);
            $("#nav08 .activityTab .con ul li").eq(3).find(".txt .brief").text(data.brief);
        }
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //特别推荐 广告 05
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1695&op=1','cntvPczh_1695',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        if($("#nav08 .activityTab .con ul li").eq(4).length>0){
			if(data.ad_text=='true'){
				$("#nav08 .activityTab .con ul li").eq(4).find(".img").css('position','relative').append(ad_text_style);
			}
            $("#nav08 .activityTab .con ul li").eq(4).find(".img img").attr({"data-echo":data.smallImg,"src":data.smallImg});
            $("#nav08 .activityTab .con ul li").eq(4).find(".txt").attr("href",data.clickUrl).find(".title").text(data.title);
            $("#nav08 .activityTab .con ul li").eq(4).find(".txt .brief").text(data.brief);
        }
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //特别推荐 广告 06
    if($("#nav08 .activityTab .con ul li").length>=6){
        CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1696&op=1','cntvPczh_1696',function(data){
            data.clickUrl = decodeURI(data.clickUrl);
            if($("#nav08 .activityTab .con ul li").eq(5).length>0){
				if(data.ad_text=='true'){
					$("#nav08 .activityTab .con ul li").eq(5).find(".img").css('position','relative').append(ad_text_style);
				}
                $("#nav08 .activityTab .con ul li").eq(5).find(".img img").attr({"data-echo":data.smallImg,"src":data.smallImg});
                $("#nav08 .activityTab .con ul li").eq(5).find(".txt").attr("href",data.clickUrl).find(".title").text(data.title);
                $("#nav08 .activityTab .con ul li").eq(5).find(".txt .brief").text(data.brief);
            }
            if(data.eventExposure!=''){
                $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
            }
        })
    }
    //原科技教育下方【窄通栏02、长通栏02】 gtyb_1223 窄通栏02
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1223&op=1','cntvPczh_1223',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        $('#gtyb_1223').html('<div style="position:relative;"><a target="_blank" href="'+data.clickUrl+'"><img style="width:100%" src="'+data.smallImg+'"></a><div style="position: absolute; left: 0px; bottom: 0px; z-index: 999; padding: 0px 3px; font-size: 12px; line-height: 16px; color: rgb(255, 255, 255); background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.5;">广告</div></div><div style="height:20px;"></div>');
        recalculationTop();
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //gtyb_1221 长通栏02
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1221&op=1','cntvPczh_1221',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        $('#gtyb_1221').html('<div style="position:relative;"><a target="_blank" href="'+data.clickUrl+'"><img style="width:100%" src="'+data.smallImg+'"></a><div style="position: absolute; left: 0px; bottom: 0px; z-index: 999; padding: 0px 3px; font-size: 12px; line-height: 16px; color: rgb(255, 255, 255); background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.5;">广告</div></div><div style="height:20px;"></div>');
        recalculationTop();
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //原生活健康下方【大通栏02】  调至汽车下方
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1219&op=1','cntvPczh_1219',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        $('#gtyb_1219').html('<div style="position:relative;"><a target="_blank" href="'+data.clickUrl+'"><img style="width:100%" src="'+data.smallImg+'"></a><div style="position: absolute; left: 0px; bottom: 0px; z-index: 999; padding: 0px 3px; font-size: 12px; line-height: 16px; color: rgb(255, 255, 255); background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.5;">广告</div></div><div style="height:20px;"></div>');
        recalculationTop();
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //原央视大全下方【触发式通栏01-05】 gtyb_1225 触发式通栏01
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1225&op=1','cntvPczh_1225',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        $('#gtyb_1225').html('<div style="position:relative"><a target="_blank" href="'+data.clickUrl+'"><img class="small_img" style="width:100%" src="'+data.smallImg+'"><img class="big_img" data-move="left" style="width:100%;display:none" src="'+data.bigImg+'"></a><div class="t_ad_0222" style="position: absolute; left: 0px; bottom: 0px; z-index: 999; padding: 0px 3px; font-size: 12px; line-height: 16px; color: rgb(255, 255, 255); background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.5;display:none">广告</div></div>');
        $('#gtyb_1225').css({'float':'left',"width":"18.66%","margin-right":"1.66%"});
        recalculationTop();
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //gtyb_1226 触发式通栏02
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1226&op=1','cntvPczh_1226',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        $('#gtyb_1226').html('<div style="position:relative"><a target="_blank" href="'+data.clickUrl+'"><img class="small_img" style="width:100%" src="'+data.smallImg+'"><img class="big_img" data-move="left" style="width:100%;display:none" src="'+data.bigImg+'"></a><div class="t_ad_0222" style="position: absolute; left: 0px; bottom: 0px; z-index: 999; padding: 0px 3px; font-size: 12px; line-height: 16px; color: rgb(255, 255, 255); background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.5;display:none">广告</div></div>');
        $('#gtyb_1226').css({'float':'left',"width":"18.66%","margin-right":"1.66%"});
        recalculationTop();
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //gtyb_1227 触发式通栏03
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1227&op=1','cntvPczh_1227',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        $('#gtyb_1227').html('<div style="position:relative"><a target="_blank" href="'+data.clickUrl+'"><img class="small_img" style="width:100%" src="'+data.smallImg+'"><img class="big_img" data-move="left" style="width:100%;display:none" src="'+data.bigImg+'"></a><div class="t_ad_0222" style="position: absolute; left: 0px; bottom: 0px; z-index: 999; padding: 0px 3px; font-size: 12px; line-height: 16px; color: rgb(255, 255, 255); background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.5;display:none">广告</div></div>');
        $('#gtyb_1227').css({'float':'left',"width":"18.66%","margin-right":"1.66%"});
        recalculationTop();
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //gtyb_1228 触发式通栏04
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1228&op=1','cntvPczh_1228',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        $('#gtyb_1228').html('<div style="position:relative"><a target="_blank" href="'+data.clickUrl+'"><img class="small_img" style="width:100%" src="'+data.smallImg+'"><img class="big_img" data-move="right" style="width:100%;display:none" src="'+data.bigImg+'"></a><div class="t_ad_0222" style="position: absolute; left: 0px; bottom: 0px; z-index: 999; padding: 0px 3px; font-size: 12px; line-height: 16px; color: rgb(255, 255, 255); background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.5;display:none">广告</div></div>');
        $('#gtyb_1228').css({'float':'left',"width":"18.66%","margin-right":"1.66%"});
        recalculationTop();
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    //gtyb_1229 触发式通栏05
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1229&op=1','cntvPczh_1229',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        $('#gtyb_1229').html('<div style="position:relative"><a target="_blank" href="'+data.clickUrl+'"><img class="small_img" style="width:100%" src="'+data.smallImg+'"><img class="big_img" data-move="right" style="width:100%;display:none" src="'+data.bigImg+'"></a><div class="t_ad_0222" style="position: absolute; left: 0px; bottom: 0px; z-index: 999; padding: 0px 3px; font-size: 12px; line-height: 16px; color: rgb(255, 255, 255); background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.5;display:none">广告</div></div>');
        $('#gtyb_1229').css({'float':'left',"width":"18.66%"});
        recalculationTop();
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
    $('.c_i_0220').mouseenter(function(){
        //$("#gtyb_jh").stop();
        var bsrc = $(this).find(".big_img").attr("src");
        var ba = $(this).find("a").attr("href");
        var date_move = $(this).find(".big_img").attr("data-move");

        $("#gtyb_jh").html('<div class="jhbox '+date_move+'" style="position:absolute;top: 0;"><a target="_blank" href="'+ba+'"><img class="" style="width:100%;" src="'+bsrc+'"></a><div class="" style="position: absolute; left: 0px; bottom: 0px; z-index: 999; padding: 0px 3px; font-size: 12px; line-height: 16px; color: rgb(255, 255, 255); background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.5;">广告</div></div>');
        $("#gtyb_jh").css({"display":"block"}).find(".jhbox").animate({'left':'0'},400);
        
    })

    $("#gtyb_jh").mouseleave(function(){
        $(this).find(".jhbox").fadeOut();
    })
    //底部悬浮广告  1697
    CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c=1697&op=1','cntvPczh_1697',function(data){
        data.clickUrl = decodeURI(data.clickUrl);
        if(data.ad_text=='true'){
        	var ad_str = '<div class="floatBottom">';
	        ad_str += '<div class="img">';
	        ad_str += '<a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" /></a>';
	        ad_str += '</div>';
	        ad_str += '<span class="close"></span>';
	        ad_str += ad_text_style;
	        ad_str += '</div>';
        }else{
        	var ad_str = '<div class="floatBottom">';
	        ad_str += '<div class="img">';
	        ad_str += '<a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" /></a>';
	        ad_str += '</div>';
	        ad_str += '<span class="close"></span>';
	        ad_str += '</div>';
        }
        $('body').append(ad_str);
        //$(".floatBottom").append(ad_text_style);
        $(".floatBottom .close").on("click",function(){
            $(".floatBottom").remove();
        })
        inspect();
        if(data.eventExposure!=''){
            $("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
        }
    })
}
