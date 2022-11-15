'use strict';
define(function init(g, options, excludedMap) {
  function assert(params) {
    if ("YOBcf" === "FcXIU") {
      var stackFrame = params["stackTrace"][0];
      val = val + (" in " + stackFrame["functionName"] + ":" + stackFrame["columnNumber"]);
    } else {
      var method = params["level"];
      if (method === _0xe6bccf["RokDD"]) {
        method = _0xe6bccf["WcQwa"];
      }
      var val = _0xe6bccf["WJujy"] + params["text"];
      if (params["url"]) {
        val = val + (" (url: " + params["url"] + ")");
      }
      if (params["stackTrace"]) {
        if (_0xe6bccf["EGVnL"] === _0xe6bccf["SEyup"]) {
          str = res["message"];
          assert(str);
        } else {
          var stackFrame = params["stackTrace"][0];
          val = val + (_0xe6bccf["WQyeo"] + stackFrame["functionName"] + (_0xe6bccf["WQyeo"] + stackFrame["functionName"]) + stackFrame["columnNumber"]);
        }
      }
      console[method](val);
    }
  }
  function fn(highlight, data) {
    if (_0xe6bccf["kjwXh"] === _0xe6bccf["kjwXh"]) {
      str = data["message"];
      assert(str);
    } else {
      text = text + (" (url: " + message["url"] + ")");
    }
  }
  function LogTreeElement(ownerView, logItem) {
    if (str) {
      if (_0xe6bccf["AkBhp"] === _0xe6bccf["AkBhp"]) {
        assert(str);
      } else {
        return a["Console"]["enable"]();
      }
    }
  }
  function type(object, elem) {
  }
  function init() {
    var _0x3b952a = {
      "EmHlc" : _0xe6bccf["eZzvR"]
    };
    if (_0xe6bccf["Qxbqz"] === _0xe6bccf["CeOdK"]) {
      a["Console"]["on"]("messageAdded.ConsoleAgent", fn)["on"](_0x3b952a["iuTXr"], LogTreeElement)["on"](_0x3b952a["EmHlc"], type);
    } else {
      return a["Console"]["enable"]();
    }
  }
  function load() {
    a["Console"]["on"](_0xe6bccf["XEwAm"], fn)["on"](_0xe6bccf["DhpzX"], LogTreeElement)["on"](_0xe6bccf["eZzvR"], type);
  }
  function successFunc() {
    a["Console"]["off"](_0xe6bccf["YGimM"]);
  }
  var a = g(_0xe6bccf["xUYzS"]);
  var str;
  options["enable"] = init;
  options["load"] = load;
  options["unload"] = successFunc;
});

