/**
 * @license
    2020 Photon Storm Ltd.
 @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
'use strict';
var _0x519e = ["1mQZlZk", "481196UVQoHD", "889524DaqDtu", "766272MXeUJW", "892484iYsOdU", "3593nSEBCq", "313CNpuxG", "./ArcadeImage", "./ArcadeSprite", "../../utils/Class", "./const", "world", "scene", "sys", "addCollider", "addOverlap", "STATIC_BODY", "DYNAMIC_BODY", "enableBody", "displayList", "add", "updateList", "2|1|3|0|4", "XfbEE", "split", "exports", "769061ADibCq", "626974eUUChs"];
var _0x2fd956 = _0x191b;
function _0x191b(totalExpectedResults, entrySelector) {
  return _0x191b = function(hashOrKey, value) {
    hashOrKey = hashOrKey - (-63 * -68 + -535 + 482 * -7);
    var _0x3673c2 = _0x519e[hashOrKey];
    return _0x3673c2;
  }, _0x191b(totalExpectedResults, entrySelector);
}
(function(data, val) {
  var toMonths = _0x191b;
  for (; !![];) {
    try {
      var nodeval = parseInt(toMonths(375)) + -parseInt(toMonths(376)) + parseInt(toMonths(377)) * parseInt(toMonths(378)) + parseInt(toMonths(379)) + -parseInt(toMonths(380)) + parseInt(toMonths(381)) + -parseInt(toMonths(382)) * parseInt(toMonths(383));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x3e70bf) {
      data["push"](data["shift"]());
    }
  }
})(_0x519e, 1 * -634117 + 1 * 549379 + 599148);
var ArcadeImage = require(_0x2fd956(384));
var ArcadeSprite = require(_0x2fd956(385));
var Class = require(_0x2fd956(386));
var CONST = require(_0x2fd956(387));
var PhysicsGroup = require("./PhysicsGroup");
var StaticPhysicsGroup = require("./StaticPhysicsGroup");
var Factory = new Class({
  "initialize" : function watchObject(obj) {
    var convertKey = _0x2fd956;
    this[convertKey(388)] = obj;
    this[convertKey(389)] = obj[convertKey(389)];
    this[convertKey(390)] = obj[convertKey(389)]["sys"];
  },
  "collider" : function(body, velocity, color, min, max) {
    var multiply = _0x2fd956;
    return this[multiply(388)][multiply(391)](body, velocity, color, min, max);
  },
  "overlap" : function(nr1, nr2, box1, box2, returnOverlap) {
    var max = _0x2fd956;
    return this[max(388)][max(392)](nr1, nr2, box1, box2, returnOverlap);
  },
  "existing" : function(array, store) {
    var gotoNewOfflinePage = _0x2fd956;
    var items = store ? CONST[gotoNewOfflinePage(393)] : CONST[gotoNewOfflinePage(394)];
    return this["world"][gotoNewOfflinePage(395)](array, items), array;
  },
  "staticImage" : function(i_code, s_phrase, o_sip_message, e_invite_type) {
    var gotoNewOfflinePage = _0x2fd956;
    var o_event = new ArcadeImage(this[gotoNewOfflinePage(389)], i_code, s_phrase, o_sip_message, e_invite_type);
    return this[gotoNewOfflinePage(390)][gotoNewOfflinePage(396)][gotoNewOfflinePage(397)](o_event), this[gotoNewOfflinePage(388)]["enableBody"](o_event, CONST[gotoNewOfflinePage(393)]), o_event;
  },
  "image" : function(context, file, elem, options) {
    var html_only_attributes = _0x2fd956;
    var parser = new ArcadeImage(this["scene"], context, file, elem, options);
    return this[html_only_attributes(390)][html_only_attributes(396)][html_only_attributes(397)](parser), this[html_only_attributes(388)][html_only_attributes(395)](parser, CONST[html_only_attributes(394)]), parser;
  },
  "staticSprite" : function(entity, method, matchAny, actual) {
    var look = _0x2fd956;
    var approxRes = new ArcadeSprite(this[look(389)], entity, method, matchAny, actual);
    return this["sys"][look(396)]["add"](approxRes), this[look(390)][look(398)]["add"](approxRes), this[look(388)][look(395)](approxRes, CONST[look(393)]), approxRes;
  },
  "sprite" : function(id, options, flipV, flipR) {
    var rel2Mstr = _0x2fd956;
    var same = {
      "XfbEE" : rel2Mstr(399)
    };
    var callbackVals = same[rel2Mstr(400)][rel2Mstr(401)]("|");
    var callbackCount = 9 * 622 + -148 * 1 + -5450;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          this[rel2Mstr(388)][rel2Mstr(395)](o, CONST[rel2Mstr(394)]);
          continue;
        case "1":
          this["sys"][rel2Mstr(396)][rel2Mstr(397)](o);
          continue;
        case "2":
          var o = new ArcadeSprite(this[rel2Mstr(389)], id, options, flipV, flipR);
          continue;
        case "3":
          this[rel2Mstr(390)][rel2Mstr(398)]["add"](o);
          continue;
        case "4":
          return o;
      }
      break;
    }
  },
  "staticGroup" : function(formatters, customFormatters) {
    var gotoNewOfflinePage = _0x2fd956;
    return this["sys"][gotoNewOfflinePage(398)]["add"](new StaticPhysicsGroup(this[gotoNewOfflinePage(388)], this[gotoNewOfflinePage(388)][gotoNewOfflinePage(389)], formatters, customFormatters));
  },
  "group" : function(timeEnd, Enemys) {
    var crossfilter_capacity = _0x2fd956;
    return this["sys"]["updateList"][crossfilter_capacity(397)](new PhysicsGroup(this[crossfilter_capacity(388)], this[crossfilter_capacity(388)][crossfilter_capacity(389)], timeEnd, Enemys));
  },
  "destroy" : function() {
    var stopTransmitter = _0x2fd956;
    this[stopTransmitter(388)] = null;
    this["scene"] = null;
    this[stopTransmitter(390)] = null;
  }
});
module[_0x2fd956(402)] = Factory;

