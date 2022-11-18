

      try {
        var mid = _GetCookie(VisitorApi.cookie).match(/MCMID\|[0-9]+/)[0].split("|")[1];
        var aamlh = _GetCookie(VisitorApi.cookie).match(/MCAAMLH\|[0-9]+/)[0].split("|")[1];
      } catch (err) {
        console.error("User profile not found");
        var mid, aamlh;
      }

      var propertyObj;
      var requestObj = {
        id: {"marketingCloudVisitorId": mid},
        experienceCloud: {"audienceManager": {"locationHint": aamlh}},
        execute: {
          pageLoad: {}
        }
      };

      propertyObj = {
        property: {
          token: "0e815903-d1a3-d64d-7c87-ef47f1260111"
        }};
      requestObj = Object.assign(requestObj, propertyObj);

      //manually call the pageLoad/global-mbox
      adobe.target.getOffers({
        request: requestObj
      })
        .then(function (response) {
          adobe.target.applyOffers({response: response});
        })
        .then(null,function (error) {
          RPT_AddTNTVariables("wa_cb", (new Date()).getTime() + "." + Math.floor(Math.random() * 1000000),
            "wa_uri", window.location.href,"wa_pt", document.title,"wa_tp", "15", "jp_pepr", "tnt", "jp_petc", "2",
            "jp_peid", "00000:0:0", "jp_pepl" , "target-global-mbox" , "jp_pecv" ,error.message );
          RPT_RecordTNTEvent();
          console.error( error);
        });

    