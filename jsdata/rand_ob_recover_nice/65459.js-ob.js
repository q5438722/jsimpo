'use strict';
const t = require("tap");
const glob = require(_0x2dd3f2(428));
const {
  resolve : resolve
} = require(_0x2dd3f2(429));
const {
  real : mockNpm
} = require(_0x2dd3f2(430));
const full = process[_0x2dd3f2(431)]["npm_lifecycle_event"] === _0x2dd3f2(432);
if (!full) {
  t[_0x2dd3f2(433)](_0x2dd3f2(434));
} else {
  const {
    npm : data
  } = mockNpm(t);
  t["teardown"](() => {
    const getPos = _0x2dd3f2;
    const transformers = {
      "UqrmE" : getPos(435),
      "rrdDQ" : function(saveNotifs) {
        return saveNotifs();
      }
    };
    const value = require(transformers[getPos(436)]);
    value[getPos(437)](data);
    transformers[getPos(438)](value);
  });
  t[_0x2dd3f2(439)]("load npm first", async(canCreateDiscussions) => {
    const getRefreshTokenKey = _0x2dd3f2;
    await data[getRefreshTokenKey(440)]();
  });
  t[_0x2dd3f2(439)](_0x2dd3f2(441), (buffer) => {
    const now = _0x2dd3f2;
    const rpm_traffic = {
      "HHide" : function(require, load, callback) {
        return require(load, callback);
      },
      "DjfEK" : "../../lib",
      "DhgiH" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "LQnmZ" : now(442),
      "cpMxi" : now(443)
    };
    const jQuery = rpm_traffic[now(444)](resolve, __dirname, rpm_traffic["DjfEK"]);
    for (const start of glob[now(445)](jQuery + now(446))) {
      rpm_traffic["DhgiH"](require, start);
      buffer[now(433)](rpm_traffic[now(447)] + start);
    }
    buffer[now(433)](rpm_traffic[now(448)]);
    buffer["end"]();
  });
}
;
