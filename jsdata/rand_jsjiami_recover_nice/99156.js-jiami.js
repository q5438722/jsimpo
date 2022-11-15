'use strict';
module["exports"]["handler"] = (result, canCreateDiscussions, cb) => {
  const scrollHeightObserver = () => {
    return cb(null, {
      "statusCode" : 200,
      "body" : JSON["stringify"]({
        "path" : result["path"],
        "method" : result["httpMethod"],
        "headers" : result["headers"]
      })
    });
  };
  if (result["path"] === _0x24e7d4["xCBUS"]) {
    setTimeout(scrollHeightObserver, 2000);
  } else {
    scrollHeightObserver();
  }
};
module["exports"]["minimal"] = async(evStr) => {
  return {
    "statusCode" : 200,
    "body" : JSON["stringify"]({
      "message" : "Hello from API Gateway! - (minimal)",
      "event" : evStr
    })
  };
};

