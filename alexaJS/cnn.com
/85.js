_satellite["_runScript2"](function(event, target, Promise) {
// JSMD Adapter to provide backward compatibility
window._jsmd = window._jsmd || {
  init: function() {
    this.mdata = {
      business: {
        cnn: {
          page: {
            author: wminst.Util.getCNNAuthor(),
            branding_content_partner: wminst.Util.getCNNBrandingPartner(),
            section: [wminst.Util.getCNNSection(0), wminst.Util.getCNNSection(1)]
          }
        }
      }
    };
    return this;
  },
  send: function() {
  },
  trackMetrics: function(action, data, map) {
    setTimeout(function() {
      console.log("jsmd adapter trackMetrics action =" + action + " window.trackMetrics = " + typeof window.trackMetrics);
      window.trackMetrics(action, data);
    }, 100);
  },
  plugin: {
    gQuery: function(name) {
      return wminst.Util.getQueryParam(name);
    },
    gCNNVideoCollection: function() {
      return wminst.getCNNMediaCollection();
    }
  }
};
});