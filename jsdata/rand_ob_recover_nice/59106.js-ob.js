'use strict';
utils[_0x4f35e5(227)](_0x4f35e5(228));
function _0x2a60(recursionLevel, primaryTxHex) {
  return _0x2a60 = function(level, primaryTxHex) {
    level = level - (-5422 + 141 + 5499);
    var rowsOfColumns = _0x257d[level];
    return rowsOfColumns;
  }, _0x2a60(recursionLevel, primaryTxHex);
}
let {
  session : session,
  contextGroup : contextGroup,
  Protocol : Protocol
} = InspectorTest[_0x4f35e5(229)](_0x4f35e5(230));
var builder = new WasmModuleBuilder;
var imported_idx = builder[_0x4f35e5(231)]("xxx", _0x4f35e5(232), kSig_v_v);
var call_imported_idx = builder[_0x4f35e5(233)]("call_func", kSig_v_v)[_0x4f35e5(234)]([kExprCallFunction, imported_idx])["index"];
var sig_index = builder[_0x4f35e5(235)](kSig_v_v);
builder[_0x4f35e5(233)](_0x4f35e5(236), kSig_v_v)[_0x4f35e5(234)]([kExprBlock, kWasmVoid, kExprI32Const, -1 * -2165 + 4108 + -6273, kExprCallIndirect, sig_index, kTableZero, kExprEnd])[_0x4f35e5(237)](_0x4f35e5(236)), builder[_0x4f35e5(238)]([call_imported_idx]);
var module_bytes = builder[_0x4f35e5(239)]();
function testFunction(args) {
  function call_debugger() {
    debugger;
  }
  var parseInt = _0x4f35e5;
  var self = {
    "kWsaD" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "ehtWQ" : function(leftDiags, columns) {
      return leftDiags | columns;
    }
  };
  var convertBuffer = new ArrayBuffer(args[parseInt(240)]);
  var ba = new Uint8Array(convertBuffer);
  var i = 7128 + -8712 + -72 * -22;
  for (; self["kWsaD"](i, args["length"]); i++) {
    ba[i] = self[parseInt(241)](args[i], -6505 + 1 * 983 + -2761 * -2);
  }
  var fa = new (WebAssembly[parseInt(242)])(convertBuffer);
  var colData = new (WebAssembly[parseInt(243)])(fa, {
    "xxx" : {
      "func" : call_debugger
    }
  });
  colData[parseInt(244)][parseInt(236)]();
}
contextGroup["addScript"](testFunction[_0x4f35e5(245)]()), contextGroup[_0x4f35e5(246)]("var module_bytes = " + JSON[_0x4f35e5(247)](module_bytes)), Protocol[_0x4f35e5(248)][_0x4f35e5(249)](), Protocol["Debugger"]["onPaused"](handleDebuggerPaused), InspectorTest[_0x4f35e5(250)](_0x4f35e5(251)), Protocol[_0x4f35e5(252)][_0x4f35e5(253)]({
  "expression" : "testFunction(module_bytes)"
});
async function handleDebuggerPaused(messageObject) {
  async function t(key, values) {
    var parseInt = paramForClass;
    if (values[parseInt(261)]) {
      InspectorTest[parseInt(262)](values);
    }
    var layoutSets = values[parseInt(263)][parseInt(264)];
    var uniform = params[key][parseInt(265)]["lineNumber"];
    if (layoutSets) {
      var value = layoutSets["split"]("\n")[uniform];
      InspectorTest[parseInt(250)](gl[parseInt(266)](gl["XdGsR"](gl[parseInt(267)]("[", key), "] "), value));
    } else {
      if (gl[parseInt(268)](uniform, -4818 + 8728 + -85 * 46)) {
        InspectorTest[parseInt(250)](gl[parseInt(269)] + uniform);
      }
      let mul = params[key][parseInt(265)]["columnNumber"];
      let prodArr = InspectorTest[parseInt(270)](values[parseInt(263)][parseInt(271)]);
      InspectorTest[parseInt(250)](gl[parseInt(267)](gl[parseInt(272)](gl[parseInt(259)](gl[parseInt(259)](gl[parseInt(259)]("[", key), gl["osPUq"]), mul), gl[parseInt(273)]), prodArr[mul][parseInt(245)](5085 + -2 * 4145 + 3221)));
    }
  }
  var paramForClass = _0x4f35e5;
  var gl = {
    "XdGsR" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "ybEJa" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "TKuXk" : function(name, data) {
      return name != data;
    },
    "scZWx" : "Unexpected line number in wasm: ",
    "gTKiD" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "aSzID" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "osPUq" : paramForClass(254),
    "uHnoo" : paramForClass(255),
    "TItjg" : paramForClass(256),
    "lhVtu" : paramForClass(257),
    "satLB" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "CWlKP" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  InspectorTest[paramForClass(250)](gl["TItjg"]);
  var params = messageObject["params"][paramForClass(258)];
  InspectorTest[paramForClass(250)](gl[paramForClass(259)](gl[paramForClass(260)], params[paramForClass(240)]));
  for (let key = -826 * -6 + 9907 + -14863; gl[paramForClass(274)](key, params[paramForClass(240)]); key++) {
    result = await Protocol["Debugger"]["getScriptSource"]({
      "scriptId" : params[key]["location"][paramForClass(275)]
    });
    await gl[paramForClass(276)](t, key, result);
  }
  InspectorTest["log"]("Finished.");
  InspectorTest[paramForClass(277)]();
}
;
