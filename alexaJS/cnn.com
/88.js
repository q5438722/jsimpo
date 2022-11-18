_satellite["_runScript5"](function(event, target, Promise) {
PubSub.subscribe("site_registration_success", function(data) {
  s.manageVars("clearVars");
  s.linkTrackVars = "events,server,channel,pageName,eVar26,eVar27,prop28,eVar28,eVar29,prop30,eVar30,prop32,eVar32,prop33,eVar33,prop35,eVar35,eVar36,prop59,eVar59,prop69,eVar69,prop73,eVar73,list2";
  s.linkTrackEvents = "event52,event76";
  s.events = s.linkTrackEvents;
  s.server = wminst.Util.getADBPURL("domain");
  s.channel = wminst.Util.getCNNSection(0);
  s.pageName = wminst.Util.getCNNPageName();
  s.prop28 = wminst.Util.getCNNSection(1);
  s.prop30 = wminst.Util.getSiteSpecificSettings(1);
  s.prop32 = wminst.Util.getCNNTemplateType("long");
  s.prop33 = wminst.Util.getCNNContentType("adbp:none");
  s.prop35 = wminst.Util.getCNNCodeVersion();
  s.eVar36 = wminst.Util.getCNNKruxID();
  s.prop59 = wminst.Util.getCNNAdobeID();
  try {
    s.prop69 = "user:account created";
  } catch (e) {}
  try {
	wminst.Util.setATTWMID();
	s.tl(this, "o", "site_registration_success");
  } catch (e) {}
  s.clearVars();
});
PubSub.subscribe("site_login_success", function(data) {
  s.manageVars("clearVars");
  s.linkTrackVars = "events,server,channel,pageName,eVar26,eVar27,prop28,eVar28,eVar29,prop30,eVar30,prop32,eVar32,prop33,eVar33,prop35,eVar35,eVar36,prop59,eVar59,prop69,eVar69,prop73,eVar73,eVar89,list2";
  s.linkTrackEvents = "event54,event76";
  s.events = s.linkTrackEvents;
  s.server = wminst.Util.getADBPURL("domain");
  s.channel = wminst.Util.getCNNSection(0);
  s.pageName = wminst.Util.getCNNPageName();
  s.prop28 = wminst.Util.getCNNSection(1);
  s.prop30 = wminst.Util.getSiteSpecificSettings(1);
  s.prop32 = wminst.Util.getCNNTemplateType("long");
  s.prop33 = wminst.Util.getCNNContentType("adbp:none");
  s.prop35 = wminst.Util.getCNNCodeVersion();
  s.eVar36 = wminst.Util.getCNNKruxID();
  s.prop59 = wminst.Util.getCNNAdobeID();
  try {
    s.prop69 = "user:login success";
  } catch (e) {}
  var userObj = wminst.Util.gCNNUserAuthState();
  s.eVar89 = userObj.user_login_status;
  try {
	wminst.Util.setATTWMID();
	s.tl(this, "o", "site_login_success");
  } catch (e) {}
  s.clearVars();
});

PubSub.subscribe("site_subscription_success", function(data) {
  s.manageVars("clearVars");
  s.linkTrackVars = "events,pageName,channel,server,eVar27,prop28,eVar28,eVar29,prop30,eVar30,prop32,eVar32,prop33,eVar33,prop35,eVar35,prop69,eVar69,eVar102";
  s.linkTrackEvents = "event76,event108";
  s.events = s.linkTrackEvents;
  s.pageName = wminst.Util.getCNNPageName();
  s.server = wminst.Util.getADBPURL("domain");
  s.channel = wminst.Util.getCNNSection(0);
  s.prop28 = wminst.Util.getCNNSection(1);
  s.prop30 = wminst.Util.getSiteSpecificSettings(1);
  s.prop32 = wminst.Util.getCNNTemplateType("long");
  s.prop33 = wminst.Util.getCNNContentType("adbp:none") || "adbp:none";
  s.prop35 = wminst.Util.getCNNCodeVersion();
  if (data.billing_interval && data.billing_interval !== "") {
	s.eVar102 = data.billing_interval;
  }
  var interaction_type = "cnn plus: subscription success";
  s.prop69 = interaction_type; s.eVar69 = "D=c69";
  try {
	wminst.Util.setATTWMID();
	s.tl(this, "o", "site_subscription_success");
  } catch (e) {}
  s.clearVars();
});
});