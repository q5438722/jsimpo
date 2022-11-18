_satellite["_runScript3"](function(event, target, Promise) {
/*! A simple PubSub in JavaScript - v1.0.0 - 2014-01-12
* https://github.com/bdadam/PubSub
* The MIT License (MIT)
* Copyright (c) 2013 Adam Beres-Deak */
!function(){"use strict";function a(a){if("[object String]"!==Object.prototype.toString.call(a))throw new TypeError("Event is not a string.")}function b(a){if("function"!=typeof a)throw new TypeError("Handler is not a function")}var c={},d={};d.publish=d.pub=function(b){if(a(b),c[b])for(var d={event:b,args:Array.prototype.slice.call(arguments,1)},e=0,f=c[b].length;f>e;e++)c[b][e].apply(d,d.args)},d.subscribe=d.sub=function(d,e){a(d),b(e),(c[d]=c[d]||[]).push(e)},d.unsubscribe=d.unsub=function(){var d,e,f,g,h=Array.prototype.slice.call(arguments);if(h.length>=2){if(d=h[0],e=h[1],a(d),b(e),!c[d])return;for(f=0,g=c[d].length;g>f;f++)c[d][f]===e&&c[d].splice(f,1)}else{e=h[0],b(e);for(d in c)for(f=0,g=c[d].length;g>f;f++)c[d][f]===e&&c[d].splice(f,1)}},"function"==typeof define&&define.amd?define(function(){return d}):"object"==typeof module&&module.exports?module.exports=d:window.PubSub=d}();

window.setJSMDVideoEvent = function(event, data) {
	if (event == "cnnvideo-pause" && !data.paused) {
		event = "cnnvideo-resume";
	}
	window.jsmdVideoEvent = {
		name: event,
		time: +(new Date())
	};
};

window.trackAudioProgress = function(audInfo) {
    try {
        trackMetrics({
            type: "audio-progress",
            data: audInfo});
    } catch (e) {}
};

window.trackVideoProgress = function(vidInfo) {
	try {
		setJSMDVideoEvent("cnnvideo-progress", vidInfo);
		trackMetrics({
			type: "cnnvideo-progress",
			data: { video: vidInfo }
		});
	} catch(e){}
};

window.trackMetrics = function(action, data) {
  var realaction = action,
    realdata = data;
  if (typeof(action) == "object") {
    if (action.type != null) {
      realaction = action.type;
    }
    if (action.action != null) {
      realaction = action.action;
    }
    if (action.data != null) {
      realdata = action.data;
    }
  }
  if (typeof(realdata) == "object") {
    if (realdata.data != null) {
      realdata = realdata.data;
    }
  }
 var counter = 0;
  (function poll() {
    setTimeout(function() {
      if (wminst.subscribersReady || counter >= 10) {
        wminst.Util.log("trackMetrics subscribersReady =", wminst.subscribersReady, "counter =", counter, "action =", realaction, "data =", realdata);
        PubSub.publish(realaction, realdata);
      } else {
        counter++;
        poll();
      }
    }, 100);
  })();
 
 //Handling ComScore Events here
  try {
    if(realaction == "cnnvideo-preroll" || realaction == "cnnvideo-adcreative-start"){
	 	 	PubSub.publish("cs_video-preroll", realdata.video);
  	} else if(realaction == "cnnvideo-adcomplete" || realaction == "cnnvideo-midroll-complete"){
	  	PubSub.publish("cs_ad-complete", realdata.video);
	  } else if(realaction == "cnnvideo-start" || realaction == "cnnvideo-autostart" || realaction == "cnnvideo-live" || realaction == "cnnvideo-autosegment" || realaction == "cnnvideo-autoepisode" || realaction == "cnnvideo-episode"){
	 		 PubSub.publish("cs_video-play", realdata.video);
  	} else if(realaction == "cnnvideo-pause" &&  typeof realdata.video.paused !== 'undefined' && realdata.video.paused == true){
	  	PubSub.publish("cs_video-pause", realdata.video);
  	} else if(realaction == "cnnvideo-pause" &&  typeof realdata.video.paused !== 'undefined' && realdata.video.paused == false){
	  	PubSub.publish("cs_video-resume", realdata.video);
  	} else if(realaction == "cnnvideo-complete"){
	  	PubSub.publish("cs_video-complete", realdata.video);
 	  }
 } catch(e){}

};

window.trackVideoEvent = function(data, event, playerid){
	try {
		if (event !== "cnnvideo-progress") {
			setJSMDVideoEvent(event, data);
			var currVidObj = data;
			currVidObj.playerid = playerid;
			trackMetrics({
				type: event,
				data: {
					video : currVidObj
				}
			});
		}
	} catch(e){}
};

window.sendInteractionEvent = function(event, data){
	try {
		trackMetrics({
			type: event,
			data: {
				interaction: data
			}
		});
	} catch(e){}
};

window.sendHP10Interaction = function (data){
	sendInteractionEvent("hp10-interaction", "10minpreview:"+data);
};

window.sendGameInteraction = function(event,info){
	try {
		trackMetrics({
			type: event,
			data: {
				value: info
			}
		});
	} catch(e){}
};

window.sendVideoClick = function(info, event){
	try {
		trackMetrics({
			type: event,
			data: {
				value: info
			}
		});
	} catch(e){}
};

window.sendVideoEvent = function(data, event, playerid){
	try {
		var currVidObj = window.JSON.parse(data);
		currVidObj.playerid = playerid;
		trackMetrics({
			type: event,
			data: {
				video : currVidObj
			}
		});
	} catch(e){}
};

window.sendVideo2Event = function(data, event, playerid){
	try {
		var currVidObj = data;
		currVidObj.playerid = playerid;
		trackMetrics({
			type: event,
			data: {
				video : currVidObj
			}
		});
	} catch(e){}
};

window.sendAudioEvent = function(data, event, id) {
    try {
		var currAudObj = (typeof data != "string"? data: window.JSON.parse(data));
			trackMetrics({
				type: event,
				data: {
					instance: id,
					audio: currAudObj
				}
			});
	} catch(e){}
}; 

window.sendNewsPulse = function(data){
	try {
		trackMetrics({
			type: "dynamic-newsPulseOmniCall",
			data: {
				newspulse: {
					query: data
				}
			}
		});
	} catch(e){}
};

window.sendHTML5Event = function(data, event){
	if (data.contentType =="audio") {
		trackMetrics("audio-start",data.headline, "adbp-audio");
	} else {
		data.metas= {branding:"ireport"};
		try {
			trackMetrics({
				type: event,
				data: {
					video : data
				}
			});
		} catch(e){}
	}
};

window.sendOpenStoryPerspective = function(data){
	try {
		trackMetrics({
			type: "ireport-openstory",
			data: {
				openstory : data
			}
		});
	} catch(e){}
};

window.trackExitLinkMetrics = function(action){
  try{
       PubSub.publish(action,"");
  }
  catch(e){}
};

if (wminst.Util.isStellarPage() && wminst.Util.isUserAccountPage() && window.ZION_MESSAGE_BUS) {
    ZION_MESSAGE_BUS.subscribe("event_published", function(message) {
        try {
            var msgIndex = message.length - 1;
            var eventObj = message[msgIndex].message.event; 
            var eventName = eventObj.name;
            if (eventName == "GenericSubmit") {
                var compId = eventObj.props.component_id;
                if (compId == "create_account" || "log_in") {
                    var actionId = (compId == "create_account") ? "registration" : "login";
                    var httpResp = eventObj.props.traits.http_response;
                    wminst.Util.log("eventName =", eventName, "compId =", compId, "httpResp =", httpResp);
                    if (httpResp == "success") {
                        window.trackMetrics({
                            type: "site_" + actionId + "_success",
                            data: {action: compId}
                        });
                    }
                }
            }
            if (eventName == "PaymentTransactionCompleted") {
				var billing_cycle = eventObj.props.billing_interval;
				if (billing_cycle == "monthly" || billing_cycle == "annualy" || billing_cycle == "yearly") {
					var httpResp = eventObj.props.http_response;
					wminst.Util.log("eventName =", eventName, "billing =", billing_cycle, "httpResp =", httpResp);
					if (httpResp == "success") {
						window.trackMetrics({
							type: "site_subscription_success",
							data: eventObj.props
						});
					}
				}
			}
        } catch (e) {
            console.error(e);
        }
    })
}
//DOM scrapping to track retailer clicks clicked on CNN underscroed pages on non CNN links
var sendFBRetailClickPixel = function(data) {
	try {
		trackMetrics({
			type: "facebook-retailer-click",
			data: data
		});
	} catch(e){}
};  
try{
	var elements = document.querySelectorAll('[class*="offer-link"]');
	for (var i = 0; i < elements.length; i++) {
		var data = {};
		var linkText = elements[i].innerText ? elements[i].innerText : elements[i].innerHTML;
		if(typeof elements[i] !== 'undefined' && linkText !== ''){
		  data.clickedLink = elements[i].href;
		  data.clickedText = linkText;
		}
		elements[i].addEventListener('click', function() {sendFBRetailClickPixel(data);}, false);
	}
} catch(ex){}

});