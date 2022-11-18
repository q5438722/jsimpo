(function(){
  window.ualcmds = window.ualcmds || [];
  window.ual = window.ual || function() {
    ualcmds.push(arguments);
  };

  ual('config', 'token', '4465a92c-f0fd-406f-b519-efd409cc9849');

  ual('global', {
    service: "toppage",
    apptype: "web",
    mtestid: "",
    opttype: "pc"
  });
  ual('offset', {
    auto: true
  });
  ual('ctrl', 'start');
})();