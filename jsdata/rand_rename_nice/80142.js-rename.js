'use strict';
import{
  getStorageSync as getStorageSync
}from "./storage";
const x = "__DC_STAT_UUID";
let id;
function process(data) {
  id = id || getStorageSync(x);
  if (!id) {
    id = Date.now() + "" + Math.floor(Math.random() * 1e7);
    __GLOBAL__.setStorage({
      key : x,
      data : id
    });
  }
  data.deviceId = id;
}
function resize(self) {
  if (self.safeArea) {
    const position = self.safeArea;
    self.safeAreaInsets = {
      top : position.top,
      left : position.left,
      right : self.windowWidth - position.right,
      bottom : self.windowHeight - position.bottom
    };
  }
}
function run(r) {
  let value = r.platform ? r.platform.toLowerCase() : "devtools";
  if (!~["android", "ios"].indexOf(value)) {
    value = "devtools";
  }
  r.platform = value;
}
export default{
  returnValue : function(value) {
    process(value);
    resize(value);
    run(value);
  }
};

