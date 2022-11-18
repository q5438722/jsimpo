
    function burryCode(code){
        var index = Number(code);
        var codeMap = ['9635','9636','9637','9638'];
        var sendCode = codeMap[code];
        var mySpm = '';
        if(window.sohuSpm && typeof window.sohuSpm.getCodes == "function"){
            mySpm = window.sohuSpm.getCodes().a + '.'+window.sohuSpm.getCodes().b +'.'+ window.sohuSpm.getCodes().c;
        }
        if(sendCode && window.sohuSpm && typeof window.sohuSpm.sendAction === "function"){
            window.sohuSpm.sendAction({
                acode: sendCode,
                clickParam: '',
                spm: mySpm
            })
        }
    }
