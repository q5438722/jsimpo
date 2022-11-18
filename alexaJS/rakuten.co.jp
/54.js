
var rdntag = rdntag || {};
rdntag.cmd = rdntag.cmd || [];
rdntag.cmd.push(function() {
  // Fetches ads within 2 viewports.
  rdntag.enableLazyLoad(200);
  rdntag
    .defineAdCode("Ichiba_PC_IchibaTOP_Billboard", "rdn-adspot-Ichiba_PC_IchibaTOP_Billboard-79700994")
    .enableSingleRequest();
  rdntag
    .defineAdCode("Ichiba_PC_IchibaTOP_LeftNaviBottom", "rdn-adspot-Ichiba_PC_IchibaTOP_LeftNaviBottom-40692244")
    .enableSingleRequest();
  rdntag.displayWithSingleRequest();
});
