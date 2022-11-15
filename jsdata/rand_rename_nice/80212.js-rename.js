'use strict';
function create({
  urls : urls,
  current : images
}, i) {
  const {
    invokeCallbackHandler : merge
  } = UniServiceJSBridge;
  getApp().$router.push({
    type : "navigateTo",
    path : "/preview-image",
    params : {
      urls : urls,
      current : images
    }
  }, function() {
    merge(i, {
      errMsg : "previewImage:ok"
    });
  }, function() {
    merge(i, {
      errMsg : "previewImage:fail"
    });
  });
}
export{
  create as previewImage
};

