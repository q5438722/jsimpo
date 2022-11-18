 
    
    

var bds = {
    se: {},
    su: {
        urdata:[],
        urSendClick:function(){}
    },
    util: {},
    use: {},
    comm: {
        domain:"http:\//www.baidu.com",
        ubsurl : "http:\\\//sclick.baidu.com",
        tn:"baidu",
        queryEnc:"",
        queryId:"",
        inter:"",
        templateName:"",
        sugHost : "http:\\\//suggestion.baidu.com/su",
        query : "",
        dpquery: "",
        qid : "0xdecfe3120004730f",
        cid : "",
        sid : "",
        indexSid : "",
        stoken : "",
        serverTime : "1",
        user : "",
        username : "",
        userid : "",
        loginAction : [],
        useFavo : "",
        pinyin : "",
        favoOn : "false",
        userAgent : "",
        curResultNum:"0",
        rightResultExist:false,
        protectNum:0,
        zxlNum:0,
        pageNum:1,
        pageSize:10,
        newindex:0,
        async:2,
        maxPreloadThread:5,
        maxPreloadTimes:10,
        preloadMouseMoveDistance:5,
        switchAddMask:false,
        isDebug:false,
        ishome : 1,
        flagTranslateResult:0,
        globalLogFlag:0
    ,encTn:'82fdOHgDPw4kMito7lP6wAIQrI2GhRbEFFpM2Wr0l9yBRrX1JRRy58X+LJ9Y'
    }
};

    


var name,navigate,al_arr=[];

var selfOpen = window.open;
eval("var open = selfOpen;");

var isIE = navigator.userAgent.indexOf("MSIE") != -1 && !window.opera;

var E = bds.ecom = {};

bds.se.mon = {
    loadedItems: [],
    load: function() {},
    srvt:-1
};
try { 
    bds.se.mon.srvt = parseInt(document.cookie.match(new RegExp("(^| )BDSVRTM=([^;]*)(;|$)"))[2]);
    document.cookie = "BDSVRTM=;expires=Sat, 01 Jan 2000 00:00:00 GMT"
} catch (e) {}


var
bdUser        = bds.comm.user?bds.comm.user:null,
bdQuery       = bds.comm.query,
bdUseFavo     = bds.comm.useFavo,
bdFavoOn      = bds.comm.favoOn,
bdCid         = bds.comm.cid,
bdSid         = bds.comm.sid,
bdServerTime  = bds.comm.serverTime,
bdQid         = bds.comm.queryId,
bdstoken      = bds.comm.stoken,
login_success = [];




bds.comm.sampleval= [];
bds.comm.nodeSample = []

bds.comm.desktopSampleval = "";



    bds.comm.samNewBox = 0;




bds.comm.newTopMenu = 1;
bds.comm.newSearchBox = 1;

bds.comm.newSearchbox = 1;


bds.comm.sIndex = 1;


    bds.comm.pdc = 0;



    bds.comm.newNav = 0;



    bds.comm.samNewBox = 0;



bds.comm.popUpAdvert = {}

    



var s_domain = {
    "protocol": "https",
    "staticUrl": "https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/",
    "base": "home",
    "baseuri": "/home",
    "passconf": "http://passport.baidu.com/ubrwsbas",
    "logout": "https://passport.baidu.com/?logout&amp;u=",
    "bs": "www.baidu.com",
    "login": "http://passport.baidu.com/?login&amp;tpl=super&amp;u=",
    "sp": "http://hi.baidu.com/",
    "ssllist": 
{
    
        
        
        
        "su.bdimg.com":"dss0.bdstatic.com\/5a21bjqh_Q23odCf"
        
        ,
        "1.ur.bdimg.com":"dss1.bdstatic.com\/k4oTfnSm1A5BphGlnYG"
        
        ,
        "2.ur.bdimg.com":"dss2.bdstatic.com\/kvoTfnSm1A5BphGlnYG"
        
        ,
        "3.ur.bdimg.com":"dss3.bdstatic.com\/kfoTfnSm1A5BphGlnYG"
        
        ,
        "4.ur.bdimg.com":"dss0.bdstatic.com\/lPoTfnSm1A5BphGlnYG"
        
        ,
        "5.ur.bdimg.com":"dss1.bdstatic.com\/l4oTfnSm1A5BphGlnYG"
        
        ,
        "6.ur.bdimg.com":"dss2.bdstatic.com\/lvoTfnSm1A5BphGlnYG"
        
        ,
        "7.ur.bdimg.com":"dss3.bdstatic.com\/lfoTfnSm1A5BphGlnYG"
        
        ,
        "8.ur.bdimg.com":"dss0.bdstatic.com\/iPoTfnSm1A5BphGlnYG"
        
        ,
        "dj0.baidu.com":"sp1.baidu.com\/-L-Wsjip0QIZ8tyhnq"
        
        ,
        "dj1.baidu.com":"sp1.baidu.com\/-L-Xsjip0QIZ8tyhnq"
        
        ,
        "dj2.baidu.com":"sp2.baidu.com\/-L-Ysjip0QIZ8tyhnq"
        
        ,
        "eclick.baidu.com":"sp3.baidu.com\/-0U_dTmfKgQFm2e88IuM_a"
        
        ,
        "a.hiphotos.baidu.com":"dss0.baidu.com\/94o3dSag_xI4khGko9WTAnF6hhy"
        
        ,
        "b.hiphotos.baidu.com":"dss1.baidu.com\/9vo3dSag_xI4khGko9WTAnF6hhy"
        
        ,
        "c.hiphotos.baidu.com":"dss3.baidu.com\/9fo3dSag_xI4khGko9WTAnF6hhy"
        
        ,
        "d.hiphotos.baidu.com":"dss0.baidu.com\/-Po3dSag_xI4khGko9WTAnF6hhy"
        
        ,
        "e.hiphotos.baidu.com":"dss1.baidu.com\/-4o3dSag_xI4khGko9WTAnF6hhy"
        
        ,
        "f.hiphotos.baidu.com":"dss2.baidu.com\/-vo3dSag_xI4khGko9WTAnF6hhy"
        
        ,
        "g.hiphotos.baidu.com":"dss3.baidu.com\/-fo3dSag_xI4khGko9WTAnF6hhy"
        
        ,
        "h.hiphotos.baidu.com":"dss0.baidu.com\/7Po3dSag_xI4khGko9WTAnF6hhy"
        
        ,
        "bdimg.share.baidu.com":"dss1.baidu.com\/9rA4cT8aBw9FktbgoI7O1ygwehsv"
        
        ,
        "s.share.baidu.com":"sp1.baidu.com\/5foZdDe71MgCo2Kml5_Y_D3"
        
        ,
        "s1.bdstatic.com":"dss1.bdstatic.com\/5eN1bjq8AAUYm2zgoY3K"
        
        ,
        "p2.youxi.bdimg.com":"dss2.bdstatic.com\/5OZ1hTW64A63otebn9fN2DJv"
        
        ,
        "youxi.baidu.com":"sp3.baidu.com\/y0kThD4a2gU2pMbgoY3K"
        
        ,
        "fm.baidu.com":"dss3.baidu.com\/-rd1bjeh1BF3odCf"
        
        ,
        "music.baidu.com":"dss2.baidu.com\/8_1ZdTna2gU2pMbgoY3K"
        
        ,
        "f3.baidu.com":"sp2.baidu.com\/-uV1bjeh1BF3odCf"
        
        ,
        "sclick.baidu.com":"sp1.baidu.com\/5bU_dTmfKgQFm2e88IuM_a"
        
        ,
        "1.su.bdimg.com":"dss0.bdstatic.com\/k4oZeXSm1A5BphGlnYG"
        
        ,
        "2.su.bdimg.com":"dss1.bdstatic.com\/kvoZeXSm1A5BphGlnYG"
        
        ,
        "3.su.bdimg.com":"dss2.bdstatic.com\/kfoZeXSm1A5BphGlnYG"
        
        ,
        "4.su.bdimg.com":"dss3.bdstatic.com\/lPoZeXSm1A5BphGlnYG"
        
        ,
        "5.su.bdimg.com":"dss0.bdstatic.com\/l4oZeXSm1A5BphGlnYG"
        
        ,
        "6.su.bdimg.com":"dss1.bdstatic.com\/lvoZeXSm1A5BphGlnYG"
        
        ,
        "7.su.bdimg.com":"dss2.bdstatic.com\/lfoZeXSm1A5BphGlnYG"
        
        ,
        "8.su.bdimg.com":"dss3.bdstatic.com\/iPoZeXSm1A5BphGlnYG"
        
        ,
        "nssug.baidu.com":"sp1.baidu.com\/8qUZeT8a2gU2pMbgoY3K"
        
        ,
        "up.photo.baidu.com":"sp1.baidu.com\/6_R1fD_bAAd3otqbppnN2DJv"
        
        ,
        "suggestion.baidu.com":"sp1.baidu.com\/5a1Fazu8AA54nxGko9WTAnF6hhy"
        
        ,
        "t10.baidu.com":"t10.baidu.com"
        
        ,
        "t11.baidu.com":"t11.baidu.com"
        
        ,
        "t12.baidu.com":"t12.baidu.com"
        
        ,
        "play.baidu.com":"dss3.baidu.com\/5LgHhXSm2Q5IlBGlnYG"
        
        ,
        "olime.baidu.com":"sp1.baidu.com\/8bg4cTva2gU2pMbgoY3K"
        
        ,
        "i.baidu.com":"sp1.baidu.com\/74oIbT3kAMgDnd_"
        
        ,
        "c.baidu.com":"sp1.baidu.com\/9foIbT3kAMgDnd_"
        
        ,
        "b1.baidu.com":"dss1.baidu.com\/9uN1bjeh1BF3odCf"
        
        ,
        "nsclick.baidu.com":"sp1.baidu.com\/8qUJcD3n0sgCo2Kml5_Y_D3"
        
        ,
        "b1.bdstatic.com":"dss0.bdstatic.com\/9uN1bjq8AAUYm2zgoY3K"
        
        ,
        "i7.baidu.com":"dss0.baidu.com\/73F1bjeh1BF3odCf"
        
        ,
        "i8.baidu.com":"dss0.baidu.com\/73x1bjeh1BF3odCf"
        
        ,
        "i9.baidu.com":"dss0.baidu.com\/73t1bjeh1BF3odCf"
        
        ,
        "ecma.bdimg.com":"dss1.bdstatic.com\/-0U0bXSm1A5BphGlnYG"
        
        ,
        "tag.baidu.com":"sp1.baidu.com\/6LMFsjip0QIZ8tyhnq"
        
        ,
        "hw.baidu.com":"sp1.baidu.com\/7KF1bjeh1BF3odCf"
        
        ,
        "opendata.baidu.com":"sp1.baidu.com\/8aQDcjqpAAV3otqbppnN2DJv"
        
        ,
        "open.baidu.com":"dss1.baidu.com\/8aQDcnSm2Q5IlBGlnYG"
        
        ,
        "api.open.baidu.com":"sp1.baidu.com\/9_Q4sjW91Qh3otqbppnN2DJv"
        
        ,
        "xiaodu.baidu.com":"sp1.baidu.com\/yLsHczq6KgQFm2e88IuM_a"
        
        ,
        "s0.nuomi.bdimg.com":"dss1.bdstatic.com\/5eR1ciub_Q63otebn9fN2DJv"
        
        ,
        "s1.nuomi.bdimg.com":"dss0.baidu.com\/5eN1ciub_Q63otebn9fN2DJv"
        
        ,
        "s2.nuomi.bdimg.com":"dss2.bdstatic.com\/5eZ1ciub_Q63otebn9fN2DJv"
        
        ,
        "vse.baidu.com":"sp3.baidu.com\/6qUDsjip0QIZ8tyhnq"
        
        ,
        "himg.bdimg.com":"dss1.bdstatic.com\/7Ls0a8Sm1A5BphGlnYG"
        
        ,
        "ss.bdimg.com":"dss1.bdstatic.com\/5aV1bjqh_Q23odCf"
        
        ,
        "ecmb.bdimg.com":"dss0.bdstatic.com\/-0U0bnSm1A5BphGlnYG"
        
        ,
        "e.su.bdimg.com":"dss0.bdstatic.com\/-4oZeXSm1A5BphGlnYG"
        
        ,
        "sensearch.baidu.com":"sp1.baidu.com\/5b11fzupBgM18t7jm9iCKT-xh_"
        
        ,
        "sestat.baidu.com":"sp1.baidu.com\/5b1ZeDe5KgQFm2e88IuM_a"
        
        ,
        "cdn00.baidu-img.cn":"dss0.bdstatic.com\/9bA1vGba2gU2pMbfm9GUKT-w"
        
        ,
        "cdn01.baidu-img.cn":"dss0.bdstatic.com\/9bA1vGfa2gU2pMbfm9GUKT-w"
        
    
}

};


    var s_session={
        "logId":"2147775247",
        "seqId":"0xdecfe3120004730f",
        "qid":"0xdecfe3120004730f",
        "sessionId":"",
        "debug":false,
        "userTips":"{}",
        "curmod":"2",
        "firstmod":"",
        "logoCode":false,
        "isFesLogo":false,
        "sid":"36554_37770_34812_37303_37725_37537_37739_37716_37741_26350_37791",
        "mSid":"",
        "sample_value":"",
        "isLogin":false,
        "agingVoice": ""
    };

    
    
    window.__async_strategy = 2;

