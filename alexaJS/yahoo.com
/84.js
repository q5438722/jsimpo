
    (function(w) {
        var dabConfig = {"enableDetection":true,"cookieDurationInDays":7,"detectionTimeout":300,"enableABPDetection":true,"enableUBDetection":false,"positions":["sda-LDRB","sda-MAST"]};
        var cookieName = 'thamba';
        var thamba = false;
        var shouldCheckPosition = true;
        var cookieDuration = 10080;
        var pixelDetectUrl = "https://www.yahoo.com/px.gif";
        var detectABP = function(daTrk) {
    var DPba=new function(){this.detect=function(px,callback){var detected=false;var checksRemain=2;var error1=false;var error2=false;if(typeof callback!="function")return;px+="?ch=*&rn=*";function beforeCheck(callback,timeout){if(checksRemain==0|| timeout>1E3)callback(checksRemain==0&&detected);else setTimeout(function(){beforeCheck(callback,timeout*2)},timeout*2)}function checkImages(){if(--checksRemain)return;detected=!error1&&error2}var random=Math.random()*11;var img1=new Image;img1.onload=checkImages;img1.onerror=function(){error1=true;checkImages()};img1.src=px.replace(/\*/,1).replace(/\*/,random);var img2=new Image;img2.onload=checkImages;img2.onerror=function(){error2=true;checkImages()};img2.src=px.replace(/\*/,2).replace(/\*/,random);beforeCheck(callback,250)}}; 
    DPba.detect(pixelDetectUrl, function(usesABP) {
        if (usesABP) {
            var expires = new Date();
            expires.setMinutes(expires.getMinutes() + cookieDuration);
            daTrk = '2';
            w.wafer.utils.setCookie(cookieName, '2', {expires: expires, domain: location.hostname, path:'/'});
        }

        // this fires rapid when we set cookie either 1 or 2
        if ((!thamba && daTrk !== '0') && w.rapidInstance && w.rapidInstance.beaconEvent) {
            w.rapidInstance.beaconEvent("datrk", {pl1: daTrk});
        }
    });
};

var ubDetection = function() {
    // primary check: create node has sensitive id on the fly
    const decoyId = 'my-ads';
    const decoyNode = document.createElement('div');
    decoyNode.setAttribute('id', decoyId);
    decoyNode.innerHTML = decoyId;
    document.body.appendChild(decoyNode);
    
    const decoyNodeIns = document.querySelector(`#${decoyId}`);
    if (decoyNodeIns && decoyNodeIns.offsetHeight === 0) {
        decoyNodeIns.remove();
        return true;
    }
    decoyNodeIns.remove();
    
    // additional check: check all necessary ad pos dimension
    if (shouldCheckPosition) {
        const { positions } = dabConfig;
        let adposNodeCount = 0;
        let hidenPosNodeCount = 0;
        
        for (const position of positions) {
            const adposNode = document.querySelector(`#${position}`);
            if (adposNode) {
                adposNodeCount += 1;
                if (adposNode.offsetHeight === 0) {
                    hidenPosNodeCount += 1;
                }
            }
        }

        if (adposNodeCount > 0 && adposNodeCount === hidenPosNodeCount) {
            return true;
        }
    }
    return false;
}

var initABDetection = function() {
    var daTrk = '0';
    var cExpiry = 0;
    var expires = new Date();

    /* General AB Check */
    var abSelector = document.getElementById('advertisement-thamba');
    if (!abSelector) {
        daTrk = '1';
        cExpiry = cookieDuration;
    }

    /* Specific AB Check */
    if (dabConfig.enableUBDetection) {
        const isUBActive = ubDetection();
        if (isUBActive) {
            daTrk = '1';
            cExpiry = cookieDuration;
        }
    }

    expires.setMinutes(expires.getMinutes() + cExpiry);

    // Sets cookie if we have to clear (block -> non-blocked state) OR
    // set with value (non-block -> block state)
    if ((thamba && daTrk === '0') || (!thamba && daTrk === '1')) {
        w.wafer.utils.setCookie(cookieName, daTrk, {expires: expires, domain: location.hostname, path:'/'});
    }

    // if (dabConfig.enableABPDetection && daTrk === '1') { // will uncomment when we can detect container collapsed
    if (dabConfig.enableABPDetection) {
        detectABP(daTrk);
    }
};

w.wafer && w.wafer.utils && w.wafer.ready  && w.wafer.ready(function () {
    setTimeout(initABDetection, dabConfig.detectionTimeout || 300);
});
    }(window));
