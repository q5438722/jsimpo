
    require(["main", "adservice"], function () {
        require(["slotplacement/topic", "amd/browser-message"], function (Topic, BrowserMessage) {
          var options = {
            url: "https://secure.chasecdn.com",
            audienceIds: ""
          };
          Topic.subscribe('adUpdate', function (pageId, data) {
            
            if (data._a) {
              options.audienceIds = data._a;
            }
            BrowserMessage.init(options);
                       
          });
          Topic.subscribe('adError', function () {
                        
            BrowserMessage.init(options)
                        
          });
        });
    });
