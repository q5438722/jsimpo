
    
    (function() {
        var decHtml = function( str ){
          var dom = document.createElement('div');
          for(var i=0;i<3;i++){
            str = str.replace(/\&quot\;/gi,'\\\"');
            dom.innerHTML= str;
            str = dom.innerText;
          }
          return str;
        };
        var obj = [{"text":"Ready to Ship","href":"//www.alibaba.com/bulk?tracelog=fromhomeheader&tab=rts","list":[],"isShowInSample":false,"isServices":false},{"text":"Personal Protective Equipment","href":"//air.alibaba.com/app/alibaba-select/ppe-zhuan-qu-pc/index.html?spm=defwork.iteration_detail.0.0.5e5d4f89hA6cM2#/","list":[],"isShowInSample":false,"isServices":false},{"text":"Buyer Central","href":"//buyer.alibaba.com/","isServices":true,"isShowInSample":true,"list":[],"trades":{"text":"Trade Services","list":[{"text":"Blog","href":"//buyer.alibaba.com/buyer/page/resources/blogs/1507002.html","preIcon":"//s.alicdn.com/@img/imgextra/i4/O1CN01wlImAt1sGy58OFEjA_!!6000000005740-2-tps-79-79.png","valid":""},{"text":"Trade Assurance","href":"//tradeassurance.alibaba.com/?tracelog=hd_serv_ta","preIcon":"//s.alicdn.com/@img/tfs/TB1gBp7SSzqK1RjSZPcXXbTepXa-40-40.png?webp=close","valid":""},{"text":"Production Monitoring & Inspection Services","href":"//inspection.alibaba.com/?tracelog=hd_serv_inspection","preIcon":"//s.alicdn.com/@img/tfs/TB1mhSNafc3T1VjSZPfXXcWHXXa-40-32.png?webp=close","valid":"isOverSea"},{"text":"Logistics Service","href":"//ship.alibaba.com/?tracelog=homepageheader","preIcon":"//s.alicdn.com/@img/tfs/TB196hmTbPpK1RjSZFFXXa5PpXa-40-40.png?webp=close","valid":"isOverSea"},{"text":"Letter of Credit","href":"//activity.alibaba.com/onetouch/30b61972.html?tracelog=from_header_tradeServices","preIcon":"//s.alicdn.com/@img/tfs/TB1C7nRNFYqK1RjSZLeXXbXppXa-66-40.svg","valid":""}]},"tools":{"text":"Sourcing solutions","list":[{"text":"Submit RFQ","href":"https://rfq.alibaba.com/rfq/post.htm?spm=a2700.8293689.scGlobalHomeHeader.7.669265aaAJZzWj&tracelog=hd_sol_alis_form","preIcon":"","valid":""},{"text":"Suppliers by region","href":"https://seller.alibaba.com/api/channel/nation/landingpage.htm?spm=a2700.8293689.scGlobalHomeHeader.8.669265aaEX2JKb&tracelog=hd_sol_sup_reg","preIcon":"","valid":""}]},"memberships":{"text":"","list":[]}},{"text":"Sell on Alibaba.com","href":"","list":[{"text":"For global suppliers","href":"//seller.alibaba.com/?tracelog=pc_header","preIcon":"","valid":""},{"text":"For Chinese suppliers","href":"//supplier.alibaba.com/?joinSource=gw_com_pc_head2","preIcon":"","valid":""},{"text":"Partner Program","href":"//partner.alibaba.com","preIcon":"","valid":""}],"isShowInSample":false,"isServices":false},{"text":"Help","href":"","list":[{"text":"For buyers","href":"//service.alibaba.com/buyer/?tracelog=hd_hp_buyerhp","preIcon":"","valid":""},{"text":"For suppliers","href":"//service.alibaba.com/supplier?tracelog=hd_hp_supplierhp_cn","preIcon":"","valid":"!isOverSea"},{"text":"For suppliers","href":"//service.alibaba.com/ensupplier?tracelog=hd_hp_supplierhp_en","preIcon":"","valid":"isOverSea"},{"text":"Open a case","href":"//rule.alibaba.com/complaint/center/index.htm?tracelog=hd_hp_sub_dis","preIcon":"","valid":""},{"text":"Report IPR infringement","href":"//ipp.alibabagroup.com/index.htm?tracelog=hd_hp_reportIPR","preIcon":"","valid":""},{"text":"Report abuse","href":"//channel.alibaba.com/complaint/home.htm?tracelog=hd_hp_reportSB","preIcon":"","valid":""}],"isShowInSample":true,"isServices":false}];
        var objStr = decHtml(JSON.stringify(obj));
        window.HEADER_DATA = window.HEADER_DATA || {};
        var linkConfig = JSON.parse(objStr);
        for (var i = 0; i < linkConfig.length; i++) {
            if (linkConfig[i] && linkConfig[i].trades && linkConfig[i].trades.list) {
                var configList = linkConfig[i].trades.list;
                var newList = [];
                for (var j = 0; j < configList.length; j++) {
                    if (configList[j] && configList[j].text) {
                        newList.push(configList[j]);
                    }
                }
                linkConfig[i].trades.list = newList;
            }
        }
        window.HEADER_DATA['sc-header-config'] = window.HEADER_DATA['sc-header-config'] || {};
        window.HEADER_DATA['sc-header-config']['links-config'] = linkConfig;
    })();
