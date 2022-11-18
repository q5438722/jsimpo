!function(){function n(n,t){var r=i(n);return t&&(r=r("instance",t)),r}var r=[],c=0,i=function(t){return function(){var n=c++;return r.push([t,[].slice.call(arguments,0),n,{time:Date.now()}]),i(n)}};n._s=r,this.csa=n}()
    csa('Config', {
      'Application': "IMDbNextService",
      'Events.SushiEndpoint':  "https://unagi.amazon.com/1/events/com.amazon.csm.csa.prod",
      'ObfuscatedMarketplaceId': "A1EVAM02EL8SFB"
    });
    
    var e = document.createElement("script"); e.src = "https://m.media-amazon.com/images/I/41mrkPcyPwL.js"; document.head.appendChild(e);

    csa("Events")("setEntity", {
      page:{pageType: "home", subPageType: "main"},
      session: {id: "131-5571405-9603332"}
    });

    if (typeof window !== 'undefined') {
      window.reqId = "RGBTS8DK4M1HNHB4ME3F";
    }
