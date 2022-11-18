
(function (n, w, d) {
  var m="application/x-shockwave-flash",p,f="0",o,v;
  try {
  if (n.mimeTypes && n.mimeTypes[m]) {
    if (p = n.mimeTypes[m].enabledPlugin) {
      f = p.description.match(/\d+\.\d+/)[0];
    }
  } else if (typeof w.ActiveXObject != "undefined") {
      if (o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
        v = o.GetVariable("$version").split(" ")[1].split(",");
        f = v[0]+"."+v[1];
      }
    }
  } catch (e) {}
  (new Image).src = ("https:"==d.location.protocol?"https:":"http:")+"//r3.mail.ru/k?fver="+f+"&mh=81e4121baf7286eca0b199916eff4bfd&js=1";
})(navigator, window, document);
